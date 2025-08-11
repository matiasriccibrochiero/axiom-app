
# Axiom — AI Knowledge & Automations (Hands-off Edition)

You only need to do 3 things:
1) Create two free accounts: **Vercel** and **Supabase**.
2) Paste a database string and an API key when I tell you.
3) Click **Deploy**.

## Deploy in ~10 minutes (no coding)

### A) Supabase (the database)
1. Go to supabase.com → Sign up (free). Create a **new project**.
2. In the project → **SQL Editor** → paste and run the contents of `scripts/enable-pgvector.sql`.
3. Copy your database connection string (Project Settings → Database → Connection string) and keep it handy.

### B) Vercel (the website)
1. Go to vercel.com → Sign up (free).
2. Click **New Project → Import** and upload this ZIP.
3. When prompted for Environment Variables, add:
   - `OPENAI_API_KEY` = your OpenAI key
   - `DATABASE_URL` = the Supabase connection string from step A3 (append `?pgbouncer=true` if using pgbouncer)
   - `NEXTAUTH_SECRET` = click “Generate” on Vercel or use any 32+ char random string
4. Click **Deploy**. Wait for the green check. Open the URL it gives you.

That’s it. You’ll have:
- A dashboard (Home)
- Notes page (sample note)
- API routes for notes + search (pgvector-ready)
- Room to add automations later
