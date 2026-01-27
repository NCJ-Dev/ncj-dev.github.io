"use client";

import Link from "next/link";
import {ArrowUpRight, Github, Mail, MapPin, Send, UserCircle} from "lucide-react";
import {motion, Variants} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "chuljin92.nam@gmail.com",
        href: "mailto:chuljin92.nam@gmail.com",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/NCJ-Dev",
        href: "https://github.com/NCJ-Dev",
        gradient: "from-gray-500 to-gray-700",
    },
    {
        icon: UserCircle,
        label: "Notion",
        value: "https://www.notion.so/NamChulJin",
        href: "https://www.notion.so/Nam-Chul-Jin-2affdd80e84f808082cfcbf31065ac90",
        gradient: "from-blue-500 to-cyan-500",
    },
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.1},
    },
};

const itemVariants = {
    hidden: {y: 30, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]},
    },
} as Variants;

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <div className="absolute inset-0 bg-grid opacity-30"></div>

            <div
                className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-blue-900 blur-[120px] animate-pulse-glow"></div>
            <div
                className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-purple-900 blur-[120px] animate-pulse-glow"
                style={{animationDelay: '2s'}}></div>

            <div
                className="relative container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm text-primary mb-4">
            Get In Touch
          </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        궁금한 점이 있으시거나 함께 협력할 프로젝트가 있다면 언제든지 편하게 연락 주세요!
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {contactMethods.map((method, index) => {
                        const IconComponent = method.icon;
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Link href={method.href} target="_blank" rel="noopener noreferrer">
                                    <Card
                                        className="group glass-card hover:border-primary/30 transition-all duration-500 cursor-pointer h-full">
                                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                            <div
                                                className={`p-4 rounded-2xl bg-gradient-to-br ${method.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="h-6 w-6 text-white"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">{method.label}</h3>
                                                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                                                    {method.value}
                                                    <ArrowUpRight
                                                        className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    className="w-full max-w-2xl"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.6}}
                >
                    <Card className="glass-card">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 glass rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent text-foreground"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 glass rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-transparent text-foreground"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 glass rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none bg-transparent text-foreground"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <Button className="w-full py-6 text-lg glow-primary group">
                                    Send Message
                                    <Send
                                        className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    className="mt-12 flex items-center gap-2 text-muted-foreground"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.8}}
                >
                    <MapPin className="h-4 w-4"/>
                    <span>Daegu, South Korea</span>
                </motion.div>
            </div>
        </div>
    );
}
