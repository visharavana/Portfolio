import { Github, Linkedin } from 'lucide-react'

const Hero = () => {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Vishal</h1>
                <p className="text-xl md:text-2xl mb-8">Data Analyst | Visualization Expert</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/visharavana" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/vishals-dataanalyst/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero

