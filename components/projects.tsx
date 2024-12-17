const Projects = () => {
    const projects = [
        {
            title: "Procurement Analysis Dashboard",
            description: "I developed a procurement analysis dashboard using Power BI to visualize key metrics and trends in purchasing patterns, providing clear insights into procurement performance.",
            tools: ["Power BI", "SQL", "DAX"]
        },
        {
            title: "Supply Chain Optimization",
            description: "Developed an interactive supply chain optimization tool with Apache Superset, enabling analysis and visualization of processes to drive efficiency and performance.",
            tools: ["Apache Superset", "Python", "SQL"]
        },
        {
            title: "Manufacturing Execution System Analysis",
            description: "Developed a real-time manufacturing process monitoring system using Power BI, enhancing production efficiency and performance.",
            tools: ["Power BI", "SQL", "DAX"]
        },
        {
            title: "Financial Performance Tracker",
            description: "Designed and implemented a financial performance tracker using Power BI, delivering actionable insights into the company's financial health and growth.",
            tools: ["Power BI", "SQL", "DAX"]
        }
    ]

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, toolIndex) => (
                                    <span key={toolIndex} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

