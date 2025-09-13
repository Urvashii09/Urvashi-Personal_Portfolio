import { RevealOnScroll } from "../RevealOnScroll"


export const Home = ()=>{
    return <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-900">
        {/* Background floating circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>

        <div className="absolute top-40 -right-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slower"></div>

        
            <div className="text-center z-10 px-4">
                <RevealOnScroll>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight hover:brightness-125 transition duration-300" 
                    style={{ transitionDelay: "0ms" }}>
                    I’m{" "}
                    <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold animate-pulse">
                        Urvashi Mishra
                    </span>
                </h1>

                </RevealOnScroll>

                
                

                {/* <p className="text-gray-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed"> */}
                    {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Full-Stack Developer</span>

                    I blend logic and creativity to build practical, user-friendly digital solutions.
                    My goal is to develop software solutions that deliver exceptional performance while ensuring an intuitive and engaging experience for users. */}

                <RevealOnScroll>
                    <p className="text-gray-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
                    style={{ transitionDelay: "200ms" }}>
                        A{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
                            Full-Stack Developer
                        </span>{" "}
                        who blends{" "}
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                                logic and creativity
                        </span>{" "}
                        to build{" "}
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold">
                                practical, user-friendly solutions
                        </span>
                        . My goal is to create{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                                high-performance software
                        </span>{" "}
                        with an{" "}
                        <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-semibold">
                            intuitive and engaging experience
                        </span>{" "}
                        for users.
                    </p>
                </RevealOnScroll>
                    

                <RevealOnScroll>
                    <div className="flex justify-center space-x-6" style={{ transitionDelay: "400ms" }} >
                        <a href="#projects" className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:scale-105  
                         ">View Projects
                        </a>
                    

                        <a href="#contact" className="relative border border-pink-500 text-pink-400 py-3 px-8 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.6)">
                            Contact Me
                        </a>
                    </div>
                </RevealOnScroll>

                
            </div>
        

        
    </section>
}