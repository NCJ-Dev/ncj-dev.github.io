"use client";

import {motion} from "framer-motion";
import {Code2, Lightbulb, Rocket, Server, TrendingUp, User} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";

const highlights = [
    {
        icon: Code2,
        label: "Years of Experience",
        value: "9+",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: Rocket,
        label: "Production Projects",
        value: "20+",
        color: "from-cyan-500 to-blue-500",
    },
    {
        icon: Server,
        label: "Systems Operated",
        value: "10+",
        color: "from-emerald-500 to-teal-500",
    },
];

const aboutCards = [
    {
        icon: User,
        title: "Backend Specialist",
        content: "9년 차 백엔드 개발자로서 Spring Boot 기반의 대규모 데이터 처리와 배치·동기화 시스템 구축에 강점을 가지고 있습니다. 안정성과 확장성을 최우선으로 아키텍처를 설계하며, 신뢰성 있는 서비스를 만드는 데 집중합니다.",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: Lightbulb,
        title: "Philosophy",
        content: "팀과의 소통을 중요하게 생각하며, 요구사항과 상황을 충분히 공유하는 과정이 좋은 결과로 이어진다고 믿습니다. 복잡한 문제를 정리하고 현실적인 방향을 함께 고민하는 편입니다.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: TrendingUp,
        title: "Future & Growth",
        content: "현재에 안주하지 않고 Docker, Kubernetes 기반의 컨테이너 환경과 Elasticsearch를 활용한 검색 엔진 최적화를 연구하고 있습니다. 팀과 함께 성장하며 기술로써 비즈니스의 문제를 해결하는 개발자가 되고자 합니다.",
        gradient: "from-emerald-500 to-teal-500",
    },
];


export default function AboutPage() {
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
            Introduction
          </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        열정적인 개발자로서 기술과 창의성을 결합하여 의미 있는 프로젝트를 만들어갑니다.
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center mb-16"
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    <div className="relative">
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
                        <Image
                            src="profile.jpg"
                            alt="남철진"
                            width={200}
                            height={200}
                            className="relative rounded-full border-4 border-primary/30"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
                    {highlights.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <Card className="glass-card text-center">
                                    <CardContent className="p-6">
                                        <div
                                            className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                                            <IconComponent className="h-6 w-6 text-white"/>
                                        </div>
                                        <div className="text-3xl font-bold text-gradient mb-1">{item.value}</div>
                                        <div className="text-sm text-muted-foreground">{item.label}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {aboutCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                            >
                                <Card
                                    className="group h-full glass-card hover:border-primary/30 transition-all duration-500">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${card.gradient}`}>
                                                <IconComponent className="h-5 w-5 text-white"/>
                                            </div>
                                            <CardTitle
                                                className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {card.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-muted-foreground leading-relaxed">
                                        {card.content}
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
