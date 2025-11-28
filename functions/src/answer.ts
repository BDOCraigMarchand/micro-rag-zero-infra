export async function answer(query: string, ctx: string[]) {
  return { answer: "Hello from Micro‑RAG", citations: ctx };
}
