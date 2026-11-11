import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import SiteBackground from "@/components/SiteBackground"

const display = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
})

const body = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://www.parcerisa.dev"),
    alternates: { canonical: "/" },
    title: "Marc Parcerisa — AI Engineer & Physicist",
    description:
        "Physicist turned AI engineer and software developer. Projects across AI, computer vision, simulation and the web.",
    openGraph: {
        title: "Marc Parcerisa — AI Engineer & Physicist",
        description:
            "Physicist turned AI engineer and software developer. Projects across AI, computer vision, simulation and the web.",
        url: "https://www.parcerisa.dev",
        siteName: "Marc Parcerisa",
        type: "website",
    },
}

export const viewport: Viewport = {
    themeColor: "#08080c",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable}`}>
            <body className="antialiased">
                <SiteBackground />
                {children}
            </body>
        </html>
    )
}
