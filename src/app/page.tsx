"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import {ArrowRight, Github, Mail, UserCircle} from "lucide-react";

export default function Home() {
    const codeLines = [
        {text: "const developer = {", color: "text-purple-400"},
        {text: '  name: "남철진",', color: "text-green-400"},
        {text: '  role: "Fullstack Developer",', color: "text-blue-400"},
        {text: "  experience: \"9+ years\",", color: "text-pink-400"},
        {text: '  stack: ["Spring Boot", "RDB", "React"],', color: "text-cyan-400"},
        {text: '  focus: "Stable systems and teamwork",', color: "text-yellow-400"},
        {text: "};", color: "text-purple-400"},
    ];


    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid opacity-50"></div>
            <div className="absolute inset-0 bg-noise pointer-events-none"></div>

            <div
                className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow"></div>
            <div
                className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow"
                style={{animationDelay: '2s'}}></div>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-[150px]"></div>

            <motion.div
                className="absolute top-20 right-10 lg:right-20 hidden lg:block"
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.5, duration: 0.8}}
            >
                <div className="glass-card rounded-2xl p-6 max-w-sm animate-float">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-muted-foreground font-mono">developer.js</span>
                    </div>
                    <pre className="text-sm font-mono space-y-1">
            {codeLines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1 + i * 0.15}}
                    className={line.color}
                >
                    {line.text}
                </motion.div>
            ))}
          </pre>
                </div>
            </motion.div>

            <div
                className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="flex flex-col items-center max-w-5xl"
                >
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="mb-8"
                    >
            <span
                className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-medium text-primary border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </span>
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                    >
                        <span className="text-foreground">Hi, I'm </span>
                        <span className="text-gradient">남철진</span>
                    </motion.h1>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-muted-foreground h-14"
                    >
                        <TypeAnimation
                            sequence={[
                                "Senior Full-Stack Developer",
                                2500,
                                "Scale-out Architecture Designer",
                                2500,
                                "Enterprise System Specialist",
                                2500,
                                "Performance Optimization Expert",
                                2500,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            className="text-foreground/80"
                        />
                    </motion.div>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="text-lg md:text-xl max-w-2xl mb-12 text-muted-foreground leading-relaxed"
                    >
                        소통을 통해 문제를 명확히 하고
                        프로젝트에 책임감을 가지고 참여합니다.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.5}}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <Link href="/projects">
                            <Button size="lg" className="group px-8 py-6 text-lg rounded-xl glow-primary">
                                View My Work
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline"
                                    className="px-8 py-6 text-lg rounded-xl glass border-primary/20 hover:bg-primary/10">
                                Get In Touch
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                        className="flex items-center gap-4"
                    >
                        <a href="https://github.com/NCJ-Dev" target="_blank" rel="noopener noreferrer"
                           className="p-3 glass rounded-xl hover:bg-primary/10 transition-colors group">
                            <Github
                                className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                        </a>
                        <a href="https://www.notion.so/Nam-Chul-Jin-2affdd80e84f808082cfcbf31065ac90" target="_blank"
                           rel="noopener noreferrer"
                           className="p-3 glass rounded-xl hover:bg-primary/10 transition-colors group">
                            <UserCircle
                                className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                        </a>
                        <a href="mailto:chuljin92.nam@gmail.com"
                           className="p-3 glass rounded-xl hover:bg-primary/10 transition-colors group">
                            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1.5}}
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <motion.div
                        className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
                        animate={{y: [0, 5, 0]}}
                        transition={{repeat: Infinity, duration: 1.5}}
                    >
                        <div className="w-1 h-2 rounded-full bg-primary"></div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
