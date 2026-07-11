import ExperienceCard from "@/components/ExperienceCard"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import Project from "@/components/Project"
import ProjectSection from "@/components/ProjectSection"
import WebProject from "@/components/WebProject"

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Hero />

                <div className="mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-32">
                    <ProjectSection id="experience" kicker="Career so far" title="Experience" cols={1}>
                        <ExperienceCard role="AI Engineer" company="Kabilio" href="https://www.kabilio.es/">
                            Kabilio is a two-year-old startup that has already grown to around 70 people, building the
                            next generation of AI-powered Spanish accounting software, a platform designed from the
                            ground up around AI decision-making, automation and agents. We run the full spectrum of AI:
                            classical ML models, LLMs for classification and summarization, RAG, rule mining,
                            recommendation systems, fully autonomous agents and chatbots. I joined as the company&apos;s
                            second AI engineer and I&apos;m a key part of the AI team, now four AI engineers working
                            alongside 20+ full-stack, DevOps and data engineers.
                        </ExperienceCard>
                        <ExperienceCard
                            role="Research Engineer"
                            company="UPC"
                            href="https://cit.upc.edu/ca/upcxels-espai-de-dades/"
                        >
                            For around six months I worked in a research group at the Universitat Politècnica de
                            Catalunya (UPC), building a Data Space for the Catalan agricultural sector. I designed and
                            developed a complex orchestrator that managed all the data connectors deployed across a
                            Kubernetes cluster.
                        </ExperienceCard>
                        <ExperienceCard role="AI Engineer" company="Awaait" href="https://www.awaait.com/">
                            Awaait Artificial Intelligence builds fully-distributed, on-premise computer vision for
                            smart, holistic fare-evasion detection. We ran dozens of servers inside stations of the
                            Ferrocarrils de la Generalitat de Catalunya (FGC) and the New York City subway, detecting
                            fare evasion in real time — people jumping over turnstiles or slipping in through emergency
                            exits — and raising live alerts so station security agents could stop them in the act. We
                            also provided the transport authorities with aggregated metrics to estimate the impact of
                            fare evasion across their stations.
                        </ExperienceCard>
                    </ProjectSection>

                    <ProjectSection id="projects" kicker="Things I've built" title="Projects">
                        <Project href="https://github.com/AimbotParce/BEC-Simulations" title="BEC Simulations">
                            For my physics degree thesis, I developed an easy-to-use simulator for Bose-Einstein
                            Condensates utilizing a GPU-accelerated system with JAX (by Google). As part of the project,
                            I also designed and implemented a web API to enable running simulations on the cloud, making
                            the tool more accessible and efficient for researchers and students.
                        </Project>
                        <Project
                            href="https://github.com/AimbotParce/DnDWorldMapFrontend"
                            title="DnD Interactive World Map"
                        >
                            I sometimes play DnD with friends, and wanted to create an interactive world map that I
                            could project onto the table. To achieve this, I developed a web app that allows me to
                            create and edit maps, add creatures, and control both their movements and the visibility of
                            different map elements in real time. A{" "}
                            <a target="_blank" href="https://github.com/AimbotParce/DnDWorldMapBackend">
                                backend
                            </a>{" "}
                            server manages the game state and map data, while the{" "}
                            <a target="_blank" href="https://github.com/AimbotParce/DnDWorldMapFrontend">
                                frontend
                            </a>
                            , built with NextJS, enables seamless real-time updates for an immersive gameplay
                            experience.
                        </Project>
                        <Project href="https://github.com/AimbotParce/RAG-Learning" title="RAG Learning">
                            I am currently learning about the RAG (Retrieval-Augmented Generation) model, a new
                            architecture that combines the best of both worlds in NLP: retrieval-based and
                            generation-based models. This model is able to generate text by retrieving relevant
                            information from a knowledge base, and then generating text conditioned on that information.
                            I have been experimenting with building a simple book recommendation system using this
                            model.
                        </Project>
                        <Project
                            href="https://github.com/stars/AimbotParce/lists/data-science-master-s"
                            title="MSc in Data Science"
                        >
                            As part of my continuous learning journey, I am now studying for a MSc in Data Science. This
                            master&apos;s degree covers a wide range of topics, from machine learning and deep learning
                            to cloud computing and big data. It has a strong focus on practical applications and
                            projects, so be sure to check out my{" "}
                            <a target="_blank" href="https://github.com/stars/AimbotParce/lists/data-science-master-s">
                                compiled list of MDS projects
                            </a>{" "}
                            on GitHub.
                        </Project>
                    </ProjectSection>

                    <ProjectSection
                        id="web"
                        kicker="Live on the web"
                        title="Web pages"
                        description="As well as working on personal projects, I love to create small web pages that solve everyday problems, or that are just fun to use. Here are some of the web pages I've created:"
                    >
                        <WebProject title="Shared Flat Tracker" href="https://sft.parcerisa.xyz">
                            I needed a way to collaboratively track all the flats that two colleagues and I found over
                            the internet, to rent during the 2025-2026 academic year. So, I quickly spun up a web
                            application using NextJS + Prisma to expose and interact with a PostgreSQL database, which I
                            hosted on my Proxmox home lab. The page is still in a very early stage, so make sure to keep
                            an eye on its{" "}
                            <a target="_blank" href="https://github.com/AimbotParce/SharedFlatTracker">
                                GitHub repository
                            </a>{" "}
                            if you want to see the progress.
                        </WebProject>
                        <WebProject title="Teamificator" href="https://london.parcerisa.xyz">
                            Create teams of as many people as you want with as many constrains as you need. Maybe you
                            want to distribute the seats in the work meeting, or maybe you want to create a balanced
                            team for a sports game. Teamificator will allow you to ensure that you sit next to your
                            crush and you don&apos;t have to talk to your boss. This web page is currently being
                            developed. You can keep an eye on its{" "}
                            <a target="_blank" href="https://github.com/AimbotParce/teamificator.parcerisa.xyz">
                                GitHub repository
                            </a>{" "}
                            if you want to see the progress.
                        </WebProject>
                        <WebProject href="https://mc.parcerisa.xyz" title="Minecraft Server Page">
                            I have a Minecraft server with my friends, and I wanted to create a page where we could see
                            the server status, the players online, and manage the backups. I created a simple web page
                            that allows me to do just that using flask.
                        </WebProject>
                        <WebProject title="London Map" href="https://london.parcerisa.xyz">
                            I visited London a few years ago, and loved it! The problem is that I have a terrible
                            memory, and wanted to visit as many iconic places as possible. The solution: create a map
                            with all the places I wanted to visit.
                        </WebProject>
                    </ProjectSection>

                    <ProjectSection
                        id="studies"
                        kicker="Curiosity-driven"
                        title="Studies"
                        description="Finally, I tend to have a critical eye on the world around me, so here are some small studies I've done on different topics:"
                        cols={1}
                    >
                        <Project
                            href="https://github.com/AimbotParce/IncomeLevelStudy/blob/main/README.md"
                            title="Income Levels"
                        >
                            Some time ago, I saw some kid on Tik Tok saying that there was no point in studying anything
                            because doing so wouldn&apos;t increase your income. I thought that was a pretty bold
                            statement, so I did what any reasonable person would do: I went to Kaggle to find a dataset
                            that would help me prove him wrong.
                        </Project>
                    </ProjectSection>
                </div>

                <Footer />
            </main>
        </>
    )
}
