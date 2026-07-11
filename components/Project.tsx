export default function Project({
    title,
    href,
    children,
}: {
    title: string
    href?: string
    children: React.ReactNode
}) {
    return (
        <article className="card group flex h-full flex-col p-6 sm:p-7">
            {href !== undefined ? (
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
