"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const roles = ["AI Engineer", "Software Developer", "Physicist", "Geek"]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const y = useTransform(scrollYProgress, [0, 1], [0, -80])
    const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

    const [roleIdx, setRoleIdx] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setRoleIdx((v) => (v + 1) % roles.length), 2200)
        return () => clearInterval(t)
    }, [])

    return (
        <section
            ref={ref}
            id="top"
            className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 pb-28 pt-24"
        >
            <motion.div
                style={{ y, opacity }}
                className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16"
            >
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 text-center lg:text-left"
                >
                    <motion.p
                        variants={item}
                        className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent sm:text-sm"
                    >
                        Physicist · turned · AI&nbsp;Engineer
                    </motion.p>
                    <motion.h1
                        variants={item}
                        className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
                    >
                        Hi, I&apos;m <span className="text-gradient">Marc Parcerisa</span>
                    </motion.h1>
                    <motion.div
                        variants={item}
                        className="mt-5 flex items-center justify-center gap-2 text-2xl font-medium sm:text-3xl lg:justify-start"
                    >
                        <span className="text-muted">I&apos;m an</span>
                        <span className="relative inline-flex h-[1.4em] items-center overflow-hidden">
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.span
                                    key={roles[roleIdx]}
                                    initial={{ y: "110%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-110%", opacity: 0 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-gradient whitespace-nowrap font-semibold"
                                >
                                    {roles[roleIdx]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.div>
                    <motion.p
                        variants={item}
                        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
                    >
                        A physicist turned AI engineer and software developer. I&apos;ve worked on everything from
                        quantum-mechanics simulations to computer vision and natural language processing. Currently
                        building at a computer-vision company and studying Data Science — always chasing the next thing
                        to learn.
                    </motion.p>
                    <motion.div
                        variants={item}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                    >
                        <a
                            href="#projects"
                            className="rounded-full bg-gradient-to-r from-[#4fd1ff] to-[#b990ff] px-6 py-3 text-sm font-semibold text-[#0a0a0f] shadow-lg shadow-[#6b8bff]/20 transition hover:-translate-y-0.5 hover:shadow-[#6b8bff]/40"
                        >
                            View my work
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:border-white/30 hover:bg-white/5"
                        >
                            Get in touch
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative shrink-0"
                >
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#4fd1ff]/30 to-[#b990ff]/30 blur-2xl" />
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-surface/40 shadow-2xl sm:h-72 sm:w-72 xl:h-80 xl:w-80">
                        <Image
                            src="/profile.png"
                            alt="Marc Parcerisa"
                            fill
                            sizes="(max-width: 640px) 14rem, (max-width: 1280px) 18rem, 20rem"
                            className="object-cover object-top"
                            unoptimized
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>

            <motion.a
                style={{ opacity }}
                href="#projects"
                aria-label="Scroll to projects"
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
                <span className="text-[0.7rem] uppercase tracking-[0.25em]">Scroll</span>
                <svg
                    className="animate-bob"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </motion.a>
        </section>
    )
}
