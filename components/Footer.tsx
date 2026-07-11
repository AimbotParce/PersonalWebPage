import Image from "next/image"
import Reveal from "./Reveal"

const socials = [
    { href: "https://www.github.com/AimbotParce", icon: "/github.svg", label: "GitHub", handle: "@AimbotParce" },
    {
        href: "https://www.linkedin.com/in/marc-parcerisa/",
        icon: "/linkedin.svg",
        label: "LinkedIn",
        handle: "Marc Parcerisa",
    },
    { href: "mailto:marcparcerisa@gmail.com", icon: "/at-symbol.svg", label: "Email", handle: "Say hello" },
]

export default function Footer() {
    return (
        <footer id="contact" className="scroll-mt-24 border-t border-white/10 px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">Get in touch</p>
                    <h2 className="font-display text-3xl font-bold sm:text-4xl">Let&apos;s build something.</h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                        Always up for a new challenge, a good problem, or just a chat. Reach me on any of these.
                    </p>
                </Reveal>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {socials.map((s, i) => (
                        <Reveal key={s.href} delay={i * 0.08}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card group flex h-full items-center gap-4 p-5"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-accent/50">
                                    <Image aria-hidden src={s.icon} alt="" width={20} height={20} className="opacity-80" />
                                </span>
                                <span className="flex flex-col">
                                    <span className="font-display text-lg font-semibold">{s.label}</span>
                                    <span className="text-sm text-muted">{s.handle}</span>
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <p className="mt-14 text-center text-sm text-muted">
                    © {new Date().getFullYear()} Marc Parcerisa · Designed, built & self-hosted on a home Kubernetes
                    cluster.
                </p>
            </div>
        </footer>
    )
}
