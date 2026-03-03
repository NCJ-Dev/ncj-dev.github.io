"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {motion, Variants} from "framer-motion";
import {Atom, Boxes, Braces, Cloud, Code2, Database, Server, Shield} from "lucide-react";

const skillsData = [
    // Core Backend
    {name: "Java", icon: Braces, level: 83, color: "from-red-500 to-orange-500"},
    {name: "Spring Boot", icon: Server, level: 84, color: "from-green-500 to-emerald-500"},
    {name: "Batch", icon: Boxes, level: 81, color: "from-fuchsia-500 to-purple-500"},
    {name: "Database", icon: Database, level: 80, color: "from-violet-500 to-purple-500"},

    // Supporting Skills
    {name: "JavaScript", icon: Code2, level: 75, color: "from-yellow-500 to-amber-500"},
    {name: "TypeScript", icon: Shield, level: 73, color: "from-blue-600 to-indigo-500"},
    {name: "React", icon: Atom, level: 75, color: "from-cyan-500 to-blue-500"},
    {name: "Cloud", icon: Cloud, level: 60, color: "from-orange-400 to-yellow-500"},
];


const expertiseAreas = [
    {
        title: "Backend Development",
        icon: Server,
        skills: [
            "Java & Spring Boot",
            "REST API Development",
            "Authentication & Authorization (JWT / Session)",
            "Error Handling & Transaction Management"
        ],
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Batch & Data Processing",
        icon: Database,
        skills: [
            "Spring Batch",
            "ETL & Data Synchronization",
            "Large-Scale Data Migration",
            "Query Optimization & Indexing"
        ],
        gradient: "from-orange-500 to-amber-500",
    },
    {
        title: "Frontend Development",
        icon: Code2,
        skills: [
            "React",
            "State Management (Zustand)",
            "Data Fetching (React Query / TanStack Query, zod)",
            "Table & UI Utilities (TanStack Table, ky)"
        ],
        gradient: "from-violet-500 to-purple-500",
    },
    {
        title: "DevOps & Environment",
        icon: Cloud,
        skills: [
            "CI/CD Basics (GitLab CI)",
            "Linux Server Environment",
            "Reverse Proxy & HTTPS Basics",
            "Cloud & Managed DB Basics"
        ],
        gradient: "from-cyan-500 to-blue-500",
    },
];


const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.08},
    },
};

const itemVariants = {
    hidden: {scale: 0.9, opacity: 0},
    visible: {
        scale: 1,
        opacity: 1,
        transition: {duration: 0.5, ease: "easeOut"},
    },
} satisfies Variants;

export default function SkillsPage() {
    return (
        <div className="relative min-h-screen bg-background">
            <div className="absolute inset-0 bg-grid opacity-30"></div>

            <div className="relative container mx-auto px-6 py-16">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm text-primary mb-4">
            Expertise
          </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Technical</span> Skills
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        다양한 기술 스택을 활용하여 효율적이고 확장 가능한 솔루션을 구축합니다.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {skillsData.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                    className="group glass-card hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-pointer">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div
                                                className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                                                <IconComponent className="h-6 w-6 text-foreground"/>
                                            </div>
                                            <span className="text-2xl font-bold text-gradient">{skill.level}%</span>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                                    initial={{width: 0}}
                                                    whileInView={{width: `${skill.level}%`}}
                                                    transition={{duration: 1, delay: index * 0.1, ease: "easeOut"}}
                                                    viewport={{once: true}}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="text-gradient">Areas of</span> Expertise
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {expertiseAreas.map((area, index) => {
                        const IconComponent = area.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                            >
                                <Card
                                    className="group glass-card hover:border-primary/30 transition-all duration-500 h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3">
                                            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${area.gradient}`}>
                                                <IconComponent className="h-5 w-5 text-white"/>
                                            </div>
                                            <span
                                                className="group-hover:text-primary transition-colors">{area.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {area.skills.map((skill, skillIndex) => (
                                                <motion.li
                                                    key={skillIndex}
                                                    className="flex items-center gap-3 text-muted-foreground"
                                                    initial={{opacity: 0, x: -10}}
                                                    whileInView={{opacity: 1, x: 0}}
                                                    transition={{delay: skillIndex * 0.1}}
                                                    viewport={{once: true}}
                                                >
                                                    <div
                                                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.gradient}`}></div>
                                                    {skill}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
