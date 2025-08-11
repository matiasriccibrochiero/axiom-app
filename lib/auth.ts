export async function auth() {
  if (process.env.NEXTAUTH_DISABLED === "true") {
    return { user: { id: "demo-user" } } as any;
  }
  throw new Error(
    "Auth is not configured. Set NEXTAUTH_DISABLED=true to use demo mode."
  );
}
