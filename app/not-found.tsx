import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="text-gradient font-display text-7xl font-bold sm:text-8xl">404</p>
            <p className="text-lg text-muted">This page wandered off into the void.</p>
            <Link
                href="/"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
            >
                ← Back home
            </Link>
        </main>
    )
}
