import React, { useState, useMemo } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const CATEGORIES = [
    "Hackathon",
    "Coding",
    "Robotics",
    "Design",
    "Gaming",
    "Cultural",
    "Workshops",
    "Talks",
    "Sports",
    "Quiz",
];

const TYPES = ["Team", "Individual"];
function genEvents() {
    const base = new Date();
    base.setHours(10, 0, 0, 0);

    // let arr = [];
    const arr = [{
        id: 1,
        title: `Kabbadi`,
        category: "Sports",
        type: "Team",
        date: new Date().toDateString(),
        durationMins: 60,
        location: "Main Auditorium",
        tags: ["Onsite", "Team", "Prize money"],
        short: "Lorem ipsum dolor sit amet, ship an MVP or perform on stage.",
        description:
            "This is a sample description. Replace with real copy from your CMS. Includes rules, evaluation, and contact details.",
        prizes: "₹15,000 + goodies",
        poster: `https://placehold.co/600x360?text=${encodeURIComponent(`cat`)}+${1}`,
        regFee: 99,
    }];

    return arr;
}
const ALL_EVENTS = genEvents();

function classNames(...c) { return c.filter(Boolean).join(" "); }


const Events = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [cat, setCat] = useState("All");
    const [etype, setEtype] = useState("All");
    const [day, setDay] = useState("All");
    const [sort, setSort] = useState("dateAsc");
    const [active, setActive] = useState(null); // event for modal

    const days = useMemo(() => {
        const set = new Set(
            ALL_EVENTS.map(e => new Date(e.date).toDateString())
        );
        return ["All", ...Array.from(set)];
    }, []);
    const filtered = useMemo(() => {
        let res = ALL_EVENTS.slice();
        if (query.trim()) {
            const q = query.toLowerCase();
            res = res.filter(e =>
                e.title.toLowerCase().includes(q) ||
                e.category.toLowerCase().includes(q) ||
                e.tags.join(" ").toLowerCase().includes(q)
            );
        }
        if (cat !== "All") res = res.filter(e => e.category === cat);
        if (etype !== "All") res = res.filter(e => e.type === etype);
        if (day !== "All") res = res.filter(e => new Date(e.date).toDateString() === day);

        res.sort((a, b) => {
            if (sort === "dateAsc") return new Date(a.date) - new Date(b.date);
            if (sort === "dateDesc") return new Date(b.date) - new Date(a.date);
            if (sort === "name") return a.title.localeCompare(b.title);
            return 0;
        });
        return res;
    }, [query, cat, etype, day, sort]);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    return (
        <div className=''>
            <Navbar />
            <div className='bg-black/30'><h1 className=" py-5 text-7xl text-center md:text-9xl font-bold metal-mania bg-gradient-to-br from-[#F69D25] to-[#9529B1] 
  bg-clip-text text-transparent leading-[1.1] shadow-md">MANTHAN 2K25</h1>
            </div>
            <section className="pt-8 w-full bg-black/30 text-white flex justify-center">
                <div className="max-w-4xl bg-black/50 rounded-3xl px-12 shadow-[0_0_25px_rgba(255,200,0,0.3)] py-12 text-center space-y-6">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold font-orbitron bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">
                        For Participation, Fill Out the Google Form
                    </h2>

                    {/* Caption / Subtext */}
                    <p className="text-base md:text-lg text-gray-300">
                        Be a part of <span className="text-[#FAC918] font-semibold metal-mania">Manthan 2K25 </span>
                        and showcase your talent!
                        Register your team today by filling out the official form below.
                    </p>

                    {/* Button */}
                    <BouncyCircle href="https://forms.gle/your-form-id" target="_blank" rel="noopener noreferrer">Fill Google Form</BouncyCircle>
                    <style>{`
                    @keyframes bounce { 0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 12px 16px rgba(0,0,0,.45)); }
                        50% { transform: translateY(-18px) scale(1.02); filter: drop-shadow(0 24px 28px rgba(0,0,0,.35)); } }
                        .bouncy { animation: bounce 1.6s cubic-bezier(.2,.8,.2,1) infinite; }
                        .bouncy:active { transform: translateY(2px) scale(.98); }`}</style>
                </div>
            </section>
            <section id="events" className="py-12 md:py-16 bg-black/30">
                <h2 className="text-2xl md:text-5xl font-orbitron text-center font-bold bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">Explore Events</h2>
                <div className="pt-12 mx-auto max-w-7xl px-4">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <div>
                            <p className="text-slate-300 text-sm mt-1">Search and filter across all tracks. Click an event card for details & registration.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto">
                            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search title, tags..." className="px-3 py-2 rounded-xl ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2 rounded-xl ring-1 ring-slate-200">
                                <option>All</option>
                                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                            </select>
                            <select value={etype} onChange={e => setEtype(e.target.value)} className="px-3 py-2 rounded-xl ring-1 ring-slate-200">
                                <option>All</option>
                                {TYPES.map(t => <option key={t}>{t}</option>)}
                            </select>
                            <select value={day} onChange={e => setDay(e.target.value)} className="px-3 py-2 rounded-xl ring-1 ring-slate-200">
                                {days.map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm">
                        <span className="text-slate-300">Sort by</span>
                        <select value={sort} onChange={e => setSort(e.target.value)} className="px-2 py-1 rounded-lg ring-1 ring-slate-200">
                            <option value="dateAsc">Date ↑</option>
                            <option value="dateDesc">Date ↓</option>
                            <option value="name">Name</option>
                        </select>
                        <span className="ml-auto text-slate-500">{filtered.length} results</span>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map(e => (
                            <EventCard key={e.id} e={e} onOpen={() => setActive(e)} />
                        ))}
                    </div>
                </div>

                {active && (
                    <div className="fixed inset-0 z-50 grid place-items-center p-4">
                        <div className="absolute inset-0 bg-black/40" onClick={() => setActive(null)} />
                        <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">
                            <div className="grid md:grid-cols-5">
                                <div className="md:col-span-2">
                                    <img alt="poster" src={active.poster} className="w-full h-full object-cover" />
                                </div>
                                <div className="md:col-span-3 p-5">
                                    <div className="text-xs inline-flex px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">{active.category}</div>
                                    <h3 className="text-xl font-semibold mt-2">{active.title}</h3>
                                    <p className="text-slate-600 text-sm mt-1">{active.short}</p>
                                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                                        <Info k="Type" v={active.type} />
                                        <Info k="Date" v={new Date(active.date).toLocaleString()} />
                                        <Info k="Duration" v={`${active.durationMins} mins`} />
                                        <Info k="Location" v={active.location} />
                                        <Info k="Prizes" v={active.prizes} />
                                        <Info k="Fee" v={active.regFee ? `₹${active.regFee}` : "Free"} />
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {active.tags.map(t => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100">#{t}</span>
                                        ))}
                                    </div>
                                    <p className="mt-3 text-sm text-slate-700">{active.description}</p>
                                    <div className="mt-5 flex items-center gap-3">
                                        {/* <button onClick={() => {
                                            setActive(null);
                                            navigate(`/register`, { state: active });
                                        }} className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Register</button> */}
                                        <button onClick={() => setActive(null)} className="px-4 py-2 rounded-xl ring-1 bg-indigo-600 text-slate-300 ring-slate-200">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Footer/>
        </div>
    )
}
function EventCard({ e, onOpen }) {
    return (
        <div className="rounded-2xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
            <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img src={e.poster} alt={e.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                    <div className="text-xs inline-flex px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">{e.category}</div>
                    <div className="text-xs text-slate-500">{new Date(e.date).toLocaleDateString()}</div>
                </div>
                <div className="mt-2 font-semibold leading-tight line-clamp-2 min-h-[3rem]">{e.title}</div>
                <div className="mt-1 text-sm text-slate-600 line-clamp-2">{e.short}</div>
                <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-slate-700">{e.type}</div>
                    <button onClick={onOpen} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-sm">Details</button>
                </div>
            </div>
        </div>
    );
}
function Info({ k, v }) {
    return (
        <div>
            <div className="text-slate-500 text-xs">{k}</div>
            <div className="font-medium text-sm">{v}</div>
        </div>
    );
}

function BouncyCircle({ children, href }) {
    return (
        <a href={href}
            className="bouncy relative mt-8 inline-flex text-center items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-[#FAC918] shadow-lg bg-black/40 border border-[#FAC918] backdrop-blur-md"
        >
            {children}
        </a>
    );
}




export default Events
