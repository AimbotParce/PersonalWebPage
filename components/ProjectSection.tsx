import { Children } from "react"
import Reveal from "./Reveal"

export default function ProjectSection({
    id,
    kicker,
    title,
    description,
    cols = 2,
    children,
}: {
    id?: string
    kicker?: string
    title: string
    description?: string
    cols?: 1 | 2
    children: React.ReactNode
}) {
    return (
        <section id={id} className="w-full scroll-mt-24">
            <Reveal>
                <div className="mb-10 max-w-3xl">
                    {kicker && (
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">{kicker}</p>
                    )}
                    <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
                    {description && (
                        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
                    )}
                </div>
            </Reveal>
            <div className={`grid gap-6 ${cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                {Children.map(children, (child, i) => (
                    <Reveal delay={(i % 2) * 0.08}>{child}</Reveal>
                ))}
            </div>
        </section>
    )
}
