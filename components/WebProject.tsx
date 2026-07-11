import Image from "next/image"
import Project from "./Project"

export default function WebProject({
    title,
    href,
    children,
}: {
    title: string
    href: string
    children: React.ReactNode
}) {
    return (
        <Project title={title} href={href}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="mb-3 block w-fit">
                <Image
                    className="h-5 w-auto rounded"
                    src={`https://img.shields.io/website?label=${encodeURIComponent(
                        href.replace("https://", "")
                    )}&url=${encodeURIComponent(
                        href
                    )}&up_message=up&up_color=brightgreen&down_message=down&down_color=red&style=flat-square`}
                    alt="Website status badge"
                    height={20}
                    width={140}
                    unoptimized
                />
            </a>
            {children}
        </Project>
    )
}
