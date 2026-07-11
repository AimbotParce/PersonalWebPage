export default function ExperienceCard({
    role,
    company,
    href,
    period,
    children,
}: {
    role: string
    company: string
    href?: string
    period?: string
    children: React.ReactNode
}) {
    const companyText = <span className="text-gradient">{company}</span>

    return (
        <article className="card group p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-semibold">
                    {role} <span className="font-normal text-muted">at</span>{" "}
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline gap-1.5"
                        >
                            {companyText}
                            <svg
                                className="translate-y-0.5 text-muted transition-transform duration-300 group-hover:-translate-y-0 group-hover:translate-x-0.5 group-hover:text-accent"
                                width="16"
                                height="16"
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
                        companyText
                    )}
                </h3>
                {period && <span className="text-sm text-muted">{period}</span>}
            </div>
            <div className="mt-3 text-[15px] leading-relaxed text-muted [&_a:hover]:underline [&_a]:text-accent [&_a]:underline-offset-4">
                {children}
            </div>
        </article>
    )
}
