import Link from "next/link"

export default function MissingForwardedPage() {
    return (
        <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="text-gradient font-display text-5xl font-bold sm:text-6xl">Under construction</p>
            <p className="max-w-md text-lg text-muted">
                You should have been forwarded to a web page, but it might be under construction or not yet available.
            </p>
            <Link
                href="/"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
            >
                ← Back home
            </Link>
        </main>
    )
}
