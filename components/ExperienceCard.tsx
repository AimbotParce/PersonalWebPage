export default function ExperienceCard({
    role,
    company,
    period,
    children,
}: {
    role: string
    company: string
    period?: string
    children: React.ReactNode
}) {
    return (
        <article className="card p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-semibold">
                    {role} <span className="font-normal text-muted">at</span>{" "}
                    <span className="text-gradient">{company}</span>
                </h3>
                {period && <span className="text-sm text-muted">{period}</span>}
            </div>
            <div className="mt-3 text-[15px] leading-relaxed text-muted [&_a:hover]:underline [&_a]:text-accent [&_a]:underline-offset-4">
                {children}
            </div>
        </article>
    )
}
