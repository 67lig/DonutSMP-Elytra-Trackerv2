import { Link } from 'wouter';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] shell-grid flex items-center justify-center px-6">
      <section className="panel w-full max-w-lg rounded-2xl p-8 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[hsl(var(--card-border))] bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><Compass size={25} /></div>
        <p className="mono text-[11px] uppercase tracking-[.24em] text-[hsl(var(--accent))]">signal not found</p>
        <h1 className="display mt-3 text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]">Wrong coordinate.</h1>
        <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">This instrument panel only exposes the live Elytra market read.</p>
        <Link href="/" data-testid="link-return-dashboard" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--primary))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"><ArrowLeft size={16} /> Return to dashboard</Link>
      </section>
    </main>
  );
}
