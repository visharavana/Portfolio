const Skills = () => {
    const skillCategories = [
        {
            category: "Data Visualization",
            skills: ["Apache Superset", "Power BI", "Metabase", "Preset"]
        },
        {
            category: "Data Engineering",
            skills: ["Python", "Apache Airflow", "Mage AI"]
        },
        {
            category: "Databases",
            skills: ["SQL Server","PostgreSQL", "ClickHouse"]
        },
        // {
        //     category: "Tools",
        //     skills: ["DBeaver", "SSMS", "Docker", "Linux (Ubuntu)"]
        // },
        {
            category: "Web Technologies",
            skills: ["HTML", "CSS", "JavaScript", "React.js"]
        },
        {
            category: "Version Control",
            skills: ["Git", "GitHub"]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                            <ul className="list-disc list-inside">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="mb-2">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

