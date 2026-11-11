import Image from "next/image"
import Project from "./Project"

export default function WebProject({
    title,
    href,
    retiredNote,
    children,
}: {
    title: string
    href: string
    /** Mark a site that is no longer hosted; see Project. */
    retiredNote?: string
    children: React.ReactNode
}) {
    const label = encodeURIComponent(href.replace("https://", ""))
    // Retired sites get a static grey badge: the live status check would only
    // ever report "down", which reads as an outage rather than a decision.
    const badge =
        retiredNote !== undefined
            ? `https://img.shields.io/static/v1?label=${label}&message=retired&color=lightgrey&style=flat-square`
            : `https://img.shields.io/website?label=${label}&url=${encodeURIComponent(
                  href
              )}&up_message=up&up_color=brightgreen&down_message=down&down_color=red&style=flat-square`
    const badgeImage = (
        <Image
            className="h-5 w-auto rounded-sm"
            src={badge}
            alt={retiredNote !== undefined ? "Website retired" : "Website status badge"}
            height={20}
            width={140}
            unoptimized
        />
    )

    return (
        <Project title={title} href={retiredNote !== undefined ? undefined : href} retiredNote={retiredNote}>
            {retiredNote !== undefined ? (
                <span className="mb-3 block w-fit">{badgeImage}</span>
            ) : (
                <a href={href} target="_blank" rel="noopener noreferrer" className="mb-3 block w-fit">
                    {badgeImage}
                </a>
            )}
            {children}
        </Project>
    )
}
