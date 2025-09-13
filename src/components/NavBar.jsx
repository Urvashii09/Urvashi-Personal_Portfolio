import { useEffect } from "react"

export const NavBar = ({menuOpen,setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden": "";
    },[menuOpen])

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">

        <div className="max-w-5xl mx-auto px-4">
            {/* below is the div that contain logo of the website. */}
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:text-transparent hover:bg-clip-text transition-all">
                    <span className="text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-transparent transition-all">&lt;UM/&gt;</span>

                    
                </a>

                <div className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? "rotate-90 transition-transform duration-300" : ""}`}
                    onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;

                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        Home{" "} 
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        About{" "} 
                    </a>
                    <a href="#services" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        Services{" "} 
                    </a>
                    
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        Projects{" "} 
                    </a>
                    <a href="#certificates" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        Certificates{" "} 
                    </a>
                    <a href="#resume" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        Resume{" "} 
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> 
                        {" "}
                        Contact{" "} 
                    </a>

                </div>
            </div>

        </div>
    </nav>
}