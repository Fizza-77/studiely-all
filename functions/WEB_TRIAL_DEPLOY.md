# Studiely Web Trial — Cloud Functions deploy guide

Web-only Gen2 functions live in **`studiely_web/functions`**, deployed as Firebase codebase **`studiely-web`**.  
They are **separate from EduPlayce** — no changes to `EduPlayce/functions` required.

Guest **generation** uses the existing EduPlayce **`callOpenAIGuest`** (already has `OPENAI_API_KEY`).  
This codebase only handles **IP trial metering** — same pattern as Make My Lesson.

## What gets deployed (studiely-web only)

| Function | Auth | Purpose |
|----------|------|---------|
| `getWebTrialStatus` | None | Read IP ledger → remaining / totalUsed |
| `bootstrapWebTrial` | Anonymous | Sync guest session on page load |
| `consumeWebTrial` | Anonymous | Increment IP usage **before** generate |
| `sealWebTrialIp` | Signed-in | Set IP to 5 (block further trial on network) |
| `mergeWebTrialOnSignIn` | Signed-in | Merge IP + device usage into account |

Guest generate flow (client, no extra secret here):

1. `consumeWebTrial` (studiely-web)
2. `callOpenAIGuest` (EduPlayce — existing deploy)

Firestore collections (Admin SDK only):

- `webTrialIpUsage/{ipHash}`
- `WebGuestSessions/{anonymousUid}`

## Prerequisites

1. **Firebase project** — same as web app (`eduplayce-5e68d` in `.firebaserc`)
2. **Anonymous Auth enabled** — Console → Authentication → Sign-in method → Anonymous → Enable
3. **Node 20** installed locally
4. **EduPlayce `callOpenAIGuest`** already deployed (web uses it for OpenAI)

## One-time setup

```bash
cd studiely_web/functions
npm install
cd ..
firebase login
firebase use eduplayce-5e68d
```

### Secret (required — only one)

```bash
firebase functions:secrets:set WEB_TRIAL_IP_SALT
# Enter a long random string (32+ chars). Never commit it.
```

You do **not** need to set `OPENAI_API_KEY` on studiely-web — generation uses EduPlayce `callOpenAIGuest`.

Grant the default compute service account Firestore access if deploy fails with permission errors.

### Firestore rules (add to your project rules)

Add these blocks to your **project** `firestore.rules` (Firebase Console or whichever rules file you deploy):

```
match /webTrialIpUsage/{ipHash} {
  allow read, write: if false;
}
match /WebGuestSessions/{uid} {
  allow read, write: if false;
}
```

> Deploying rules from `studiely_web` alone is not configured — merge into whichever rules file you normally deploy for this Firebase project.

## Deploy functions only

From **`studiely_web`** (not EduPlayce):

```bash
cd studiely_web
firebase deploy --only functions:studiely-web
```

Or deploy specific functions:

```bash
firebase deploy --only functions:studiely-web:getWebTrialStatus,functions:studiely-web:bootstrapWebTrial,functions:studiely-web:consumeWebTrial,functions:studiely-web:sealWebTrialIp,functions:studiely-web:mergeWebTrialOnSignIn
```

Shortcut:

```bash
cd studiely_web
npm run deploy:functions:trial
```

## After first deploy — wire callable URLs

Gen2 callables run on Cloud Run. List URLs:

```bash
firebase functions:list
```

Copy each **studiely-web** function URL into **`lib/firebase/callable-urls.ts`** → `STUDIELY_WEB_FALLBACKS`:

```ts
const STUDIELY_WEB_FALLBACKS: Record<string, string> = {
  getWebTrialStatus: "https://getwebtrialstatus-XXXX-uc.a.run.app",
  bootstrapWebTrial: "https://bootstrapwebtrial-XXXX-uc.a.run.app",
  // ...
};
```

`callOpenAIGuest` already has a fallback URL in `HARDCODED_FALLBACKS`.

## Deploy web app (VPS)

```bash
cd studiely_web
npm run build
# restart your Node process on the server
```

## Verify

1. Open `/generate` as guest → `bootstrapWebTrial` returns `{ remaining: 5, configured: true }`
2. Generate once → `consumeWebTrial` then `callOpenAIGuest`
3. Same network, incognito → 4 remaining
4. Sign in with 0-credit account → shows 0
5. Sign out → guest shows 0 (IP sealed)

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `configured: false` | Set `WEB_TRIAL_IP_SALT` secret and redeploy |
| 401 on consume/bootstrap | Enable Anonymous Auth |
| 502 on trial callables | Add Cloud Run URLs to `STUDIELY_WEB_FALLBACKS` |
| Generate fails after consume | Check EduPlayce `callOpenAIGuest` is deployed and reachable |

## What stays in EduPlayce (unchanged)

- `callOpenAIGuest` — guest OpenAI generation (web uses this after IP consume)
- `callOpenAI` — signed-in generation
- `getStudyCredits` — signed-in credits display
- Flutter mobile flows
