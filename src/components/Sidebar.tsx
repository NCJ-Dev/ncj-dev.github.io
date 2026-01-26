"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {Award, Briefcase, ExternalLink, Folder, Home, Mail, Menu, Rss, User, X} from "lucide-react";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {href: "/", label: "Home", icon: Home},
        {href: "/projects", label: "Projects", icon: Folder},
        {href: "/skills", label: "Skills", icon: Award},
        {href: "/experience", label: "Experience", icon: Briefcase},
        {href: "/about", label: "About", icon: User},
        {href: "/blog", label: "Blog", icon: Rss},
        {href: "/contact", label: "Contact", icon: Mail},
    ];

    const socialLinks = [
        {href: "https://github.com/NCJ-Dev", label: "GitHub"},
        {href: "https://www.notion.so/Nam-Chul-Jin-2affdd80e84f808082cfcbf31065ac90", label: "Notion"},
    ];

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-3 glass rounded-xl text-foreground hover:bg-primary/10 transition-colors"
                whileTap={{scale: 0.95}}
            >
                {isOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </motion.button>

            <aside
                className={`fixed top-0 left-0 h-full w-[280px] z-50 transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="absolute inset-0 bg-card/80 backdrop-blur-xl border-r border-border"></div>

                <div
                    className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

                <div className="relative h-full p-6 flex flex-col">
                    <div className="flex flex-col items-center justify-center py-8 mb-6">
                        <motion.div
                            className="relative mb-5"
                            whileHover={{scale: 1.05}}
                            transition={{type: "spring", stiffness: 300}}
                        >
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                            <Image
                                src="profile.jpg"
                                alt="남철진"
                                width={100}
                                height={100}
                                className="relative rounded-full border-2 border-primary/50"
                            />
                            <div
                                className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                        </motion.div>
                        <h2 className="text-xl font-bold text-foreground mb-1">남철진</h2>
                        <p className="text-sm text-gradient font-medium">Full-Stack Developer</p>
                    </div>

                    <nav className="flex-grow">
                        <ul className="space-y-1">
                            {navLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                const isActive = pathname === link.href;
                                return (
                                    <motion.li
                                        key={link.href}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: index * 0.05}}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden
                        ${isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                            }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-r-full"
                                                />
                                            )}
                                            <IconComponent
                                                className={`h-5 w-5 transition-transform group-hover:scale-110 ${isActive ? 'text-primary' : ''}`}/>
                                            <span className="font-medium">{link.label}</span>
                                            {isActive && (
                                                <div
                                                    className="absolute right-4 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                            )}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="pt-6 border-t border-border space-y-4">
                        <div className="flex justify-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 glass rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all flex items-center gap-1"
                                >
                                    {link.label}
                                    <ExternalLink className="h-3 w-3"/>
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            &copy; 2026 Nam Chuljin
                        </p>
                    </div>
                </div>
            </aside>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
