export default function SiteBackground() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="grid-overlay absolute inset-0" />
            <div
                className="aurora-blob"
                style={{
                    top: "-12%",
                    left: "-8%",
                    width: "48vw",
                    height: "48vw",
                    background: "radial-gradient(circle at center, rgba(79,209,255,0.28), transparent 62%)",
                }}
            />
            <div
                className="aurora-blob"
                style={{
                    top: "6%",
                    right: "-12%",
                    width: "42vw",
                    height: "42vw",
                    background: "radial-gradient(circle at center, rgba(185,144,255,0.26), transparent 62%)",
                }}
            />
            <div
                className="aurora-blob"
                style={{
                    bottom: "-18%",
                    left: "18%",
                    width: "52vw",
                    height: "52vw",
                    background: "radial-gradient(circle at center, rgba(139,147,255,0.18), transparent 62%)",
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 100% 55% at 50% 0%, transparent 45%, rgba(8,8,12,0.55) 100%)",
                }}
            />
        </div>
    )
}
