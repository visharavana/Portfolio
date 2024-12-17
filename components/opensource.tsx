const OpenSource = () => {
    const contributions = [
        {
            project: "Apache Superset",
            description: "Contributed to the development of new visualization types and improved documentation.",
            link: "https://github.com/apache/superset"
        },
        {
            project: "Metabase",
            description: "Helped in resolving bugs and enhancing query performance for large datasets.",
            link: "https://github.com/metabase/metabase"
        },
        {
            project: "Apache Airflow",
            description: "Contributed to the development of new operators and helped in improving error handling.",
            link: "https://github.com/apache/airflow"
        }
    ]

    return (
        <section id="opensource" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Open Source Contributions</h2>
                <div className="space-y-6">
                    {contributions.map((contribution, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{contribution.project}</h3>
                            <p className="mb-4">{contribution.description}</p>
                            <a href={contribution.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OpenSource

