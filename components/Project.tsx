export default function Project({
    title,
    href,
    isPrivate = false,
    retiredNote,
    children,
}: {
    title: string
    href?: string
    isPrivate?: boolean
    /** When set, the project is no longer online: the title is not linked and an
     * icon shows this note on hover or keyboard focus. */
    retiredNote?: string
    children: React.ReactNode
}) {
    return (
        <article className="card group flex h-full flex-col p-6 sm:p-7">
            {retiredNote !== undefined ? (
                <h3 className="inline-flex items-center gap-2 font-display text-2xl font-semibold">
                    {title}
                    <span
                        className="group/retired relative inline-flex cursor-help rounded-sm outline-hidden focus-visible:ring-2 focus-visible:ring-accent/60"
                        tabIndex={0}
                        aria-label={`Retired: ${retiredNote}`}
                    >
                        <svg
                            className="text-muted transition-colors group-hover/retired:text-white group-focus/retired:text-white"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                        >
                            {/* archive box */}
                            <rect x="3" y="4" width="18" height="4" rx="1" />
                            <path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" />
                            <path d="M10 12h4" />
                        </svg>
                        <span
                            role="tooltip"
                            className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-lg border border-white/10 bg-surface px-3 py-2 font-sans text-sm font-normal leading-snug text-muted opacity-0 shadow-xl transition-opacity duration-200 group-hover/retired:opacity-100 group-focus/retired:opacity-100"
                        >
                            <span className="font-medium text-white">Retired.</span> {retiredNote}
                        </span>
                    </span>
                </h3>
            ) : isPrivate ? (
                <h3 className="inline-flex items-center gap-2 font-display text-2xl font-semibold">
                    {title}
                    <svg
                        className="text-muted"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        role="img"
                        aria-label="Private repository"
                    >
                        <title>Private repository</title>
                        <rect x="3" y="11" width="18" height="10" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </h3>
            ) : href !== undefined ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-2xl font-semibold transition-colors group-hover:text-white"
                >
                    {title}
                    <svg
                        className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                    >
                        <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                </a>
            ) : (
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
            )}
            <div className="mt-3 text-[15px] leading-relaxed text-muted [&_a:hover]:underline [&_a]:text-accent [&_a]:underline-offset-4">
                {children}
            </div>
        </article>
    )
}
