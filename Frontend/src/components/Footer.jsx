import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/urlLogo.png'
import { Mail, Phone } from "lucide-react";
import bgVideo from '../assets/bgVideo.mp4'

const coordinators = [
    {
        name: "Ms. Jagrati Kumawat",
        role: "Co-Chair",
        phone: "+91 9509404898",
    },
    {
        name: "Mr. Ashutosh Kumar Yadav",
        role: "Co-Chair",
        phone: "+91 8423447391",
    },
    {
        name: "Mr. Kanishk Gupta",
        role: "Co-Chair",
        phone: "+91 9256356496",
    },
];

const Footer = () => {


    return (
        <div className="relative rounded-t-3xl bg-black/30">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-70 rounded-t-3xl"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Overlay (optional for readability) */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            {/* Main content goes here */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <div className="w-full max-w-6xl grid md:grid-cols-2 overflow-hidden">

                    {/* LEFT SIDE */}
                    <div className="p-8 flex flex-col items-start justify-start">
                        <div className="flex items-center space-x-6">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-36 h-36 object-contain"
                            />
                            <h1 className="text-2xl md:text-3xl font-bold font-orbitron bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">
                                Sri Balaji Shiksha Samiti, Jaipur
                            </h1>
                        </div>

                        <div className="mt-12 text-gray-200 px-8">
                            <h2 className="text-lg font-semibold mb-1">Have Questions?</h2>
                            <p className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-indigo-400" />
                                <span>support@manthan2k25.com</span>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-[#F69D25] mb-4 flex items-center gap-2 px-2">
                            <span className="w-1 h-6 bg-yellow-500 rounded"></span>
                            Contact Coordinators
                        </h2>
                        <div className="space-y-2">
                            {coordinators.map((person, index) => (
                                <div
                                    key={index}
                                    className="border border-[#F69D25] rounded-xl px-4 py-1 backdrop-blur-md hover:shadow-md transition"
                                >
                                    <h3 className="text-md font-semibold text-[#F69D25]">{person.name}</h3>
                                    <p className="text-sm text-gray-300">{person.role}</p>
                                    <p className="flex items-center text-sm text-gray-300 mt-1">
                                        <Phone className="w-4 h-4 mr-2 text-[#F69D25]" />
                                        {person.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t relative z-10">
                <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} Sri Balaji Shiksha Samiti • Made with ❤</div>
                    <div>
                        Crafted by{" "}
                        <span className="font-bold bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">
                            <Link to="https://linkedin.com/in/rajeev-prajapat">
                                RAJEEV PRAJAPAT
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
