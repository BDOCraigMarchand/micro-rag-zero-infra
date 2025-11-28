# Micro-RAG Zero-Infra

Minimal RAG system with zero infrastructure overhead. Bootstrap and deploy to Firebase + Cloud Functions in 5 steps.

## Quick Start

See https://github.com/BDOCraigMarchand/micro-rag-zero-infra for setup instructions.

## Structure

```
apps/
  web/                 # React + Vite static hosting
functions/             # Firebase Functions (Node 20)
  src/
    ingest.ts
    retrieve.ts
    answer.ts
    util/
      clean.ts
      chunk.ts
      embed.ts
  package.json
firebase.json
firestore.rules
cloudbuild.yaml
```

## Deploy

```bash
firebase deploy --only hosting,functions
```
