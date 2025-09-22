import { useNavigate, Link } from 'react-router-dom'
// import logo from '../assets/urlLogo.png'
import logo from "../assets/logo_sbss.png"
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
// import bgVideo from '../assets/bgVideo.mp4'
import bgVideo from "../assets/Abstract Connected Dots On Bright Black Background _ Free Stock Video Footage HD 4K.mp4"

const coordinators = [
    {
        name: "Anshu Kumawat",
        phone: "+91 9829171329",
    },
    {
        name: "Aakash Jangir",
        phone: "+91 7374844581",
    },
    {
        name: "Ishaan Jangid",
        phone: "+91 8949603232",
    },
];

const Footer = () => {


    return (
        <div id='contact' className="relative rounded-t-3xl bg-black/30 shadow-[0_0_25px_rgba(255,200,0,0.3)]">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-50 rounded-t-3xl"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Overlay (optional for readability) */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            {/* Main content goes here */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <div className="w-full max-w-6xl grid md:grid-cols-2 overflow-hidden">

                    {/* LEFT SIDE */}
                    <div className="py-2 px-8 flex flex-col items-start justify-start">
                        <div className="flex items-center space-x-6">
                            <Link to="https://sbss.ac.in/" target='_blank' rel='noreferrer'>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-40 h-40 object-contain"
                                    loading="lazy"
                                />
                            </Link>
                            <h1 className="text-2xl md:text-3xl font-bold font-orbitron bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">
                                Sri Balaji Shiksha Samiti, Jaipur
                            </h1>
                        </div>

                        <div className="mt-0 text-gray-200 px-5">
                            <h2 className="text-lg font-semibold mb-1 text-[#F69D25]">Have Questions?</h2>
                            <p className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-[#F69D25]" />
                                <span><a href='mailto:manthan2025@sbss.ac.in?subject=Event%20Related%20Query'>manthan2025@sbss.ac.in</a></span>
                            </p>
                        </div>
                        <div className="mt-4 text-gray-200 px-5 flex justify-center items-center gap-5">
                            <h2 className="text-lg font- text-[#F69D25]">Follow Us</h2>
                            <p className="flex items-center text-gray-300">
                                <Link to="https://www.facebook.com/people/SBSS_official/100090144331066/" target='_blank' rel='noreferrer'> <Facebook className="w-6 h-6 mr-3 text-[#1877F2]" /></Link>
                                <Link to="https://www.instagram.com/sbss__official/?igsh=MTBxbG1rNHc4OTQxZA%3D%3D#" target='_blank' rel='noreferrer'> <Instagram className="w-6 h-6 mr-3 text-[#E1306C]" /></Link>
                                <Link to="https://www.linkedin.com/school/sri-balaji-college-of-engineering-&-technology-jaipur/" target='_blank' rel='noreferrer'> <Linkedin className="w-6 h-6 mr-3 text-[#0A66C2]" /></Link>
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
                                    {/* <p className="text-sm text-gray-300">{person.role}</p> */}
                                    <p className="flex items-center text-sm text-gray-300 mt-1">
                                        <Phone className="w-4 h-4 mr-2 text-[#F69D25]" />
                                        {person.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

            {/* Footer */}
            <footer footer className="border-t relative z-10" >
                <div className="mx-auto max-w-7xl px-4 py-8 text-md text-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} Sri Balaji Shiksha Samiti, Jaipur</div>
                    <div>
                        Crafted by{" "}
                        <span className="font-bold text-lg leading-[1.1] bg-gradient-to-r from-[#F69D25] via-[#9529B1] to-[#F69D25] 
                 bg-clip-text text-transparent bg-[length:200%_200%] animate-textShine">
                            <Link to="https://linkedin.com/in/rajeev-prajapat" target='_blank' rel='noreferrer'>
                                RAJEEV PRAJAPAT
                            </Link>
                        </span>

                    </div>
                </div>
            </footer >
        </div >

    )
}

export default Footer
