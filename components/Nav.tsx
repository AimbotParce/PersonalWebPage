"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const links: [string, string][] = [
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Web", "#web"],
    ["Studies", "#studies"],
    ["Contact", "#contact"],
]

export default function Nav() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <motion.header
            initial={false}
            animate={{ y: show ? 0 : -90, opacity: show ? 1 : 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ pointerEvents: show ? "auto" : "none" }}
            className="fixed inset-x-0 top-0 z-50"
        >
            <nav className="mx-3 mt-3 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl sm:mx-auto sm:max-w-3xl">
                <a href="#top" className="font-display text-lg font-bold tracking-tight">
                    MP
                </a>
                <div className="hidden gap-7 sm:flex">
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <a
                    href="#contact"
                    className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium transition hover:bg-white/20"
                >
                    Say hi
                </a>
            </nav>
        </motion.header>
    )
}
