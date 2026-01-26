"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {motion, Variants} from "framer-motion";
import {Briefcase, Calendar, ChevronRight, MapPin} from "lucide-react";

const experienceItems = [
    {
        company: "오큐브 (OCUBE)",
        role: "Senior Backend Developer / PL",
        period: "2020.02 - Present", // 이력서상 InterM 프로젝트 시작 시점 기준
        location: "대구",
        tasks: [
            "공공기관 및 금융권 연동 결제/발급 시스템 구축 및 PL 역할 수행",
            "LG 계열사(자재관리, Cloud, NFT, 교육 플랫폼) 백엔드 및 데이터 파이프라인 개발",
        ],
        techs: ["Java", "Spring Boot", "React", "Vue", "PostgreSQL", "Oracle", "Tibero", "MySql", "Docker", "CI/CD"],
        gradient: "from-blue-600 to-indigo-600",
        current: true,
    },
    {
        company: "주식회사 먹깨비",
        role: "Android Developer",
        period: "2018.01 - 2020.02",
        location: "대구",
        tasks: [
            "배달 서비스 플랫폼 '먹깨비' 안드로이드 앱 UI 및 주요 기능 개발",
            "실시간 주문/결제 프로세스 구현 및 외부 API 연동",
            "사용자 경험(UX) 개선 및 서비스 운영 중 발생하는 장애 대응",
        ],
        techs: ["Android", "Java", "REST API"],
        gradient: "from-orange-500 to-red-500",
        current: false,
    },
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.2},
    },
};

const itemVariants = {
    hidden: {x: -30, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.6, ease: "easeOut"},
    },
} as Variants;

export default function ExperiencePage() {
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
            Career
          </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Work <span className="text-gradient">Experience</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        다양한 프로젝트와 도전을 통해 성장해온 저의 경력을 소개합니다.
                    </p>
                </motion.div>

                <motion.div
                    className="relative max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"></div>

                    {experienceItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
                            variants={itemVariants}
                        >
                            <div
                                className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} ring-4 ring-background`}>
                                {item.current && (
                                    <div
                                        className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50"></div>
                                )}
                            </div>

                            <Card
                                className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} glass-card hover:border-primary/30 transition-all duration-500 group`}>
                                <CardHeader>
                                    <div
                                        className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <div className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient}`}>
                                            <Briefcase className="h-4 w-4 text-white"/>
                                        </div>
                                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                                            <CardTitle
                                                className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.company}
                                            </CardTitle>
                                            <CardDescription className="text-primary font-medium">
                                                {item.role}
                                            </CardDescription>
                                        </div>
                                    </div>

                                    <div
                                        className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4"/>
                                            <span>{item.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4"/>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className={index % 2 === 0 ? 'md:text-right' : ''}>
                                    <ul className="space-y-2 mb-4">
                                        {item.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex}
                                                className={`flex items-start gap-2 text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                {index % 2 !== 0 && <ChevronRight
                                                    className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"/>}
                                                <span>{task}</span>
                                                {index % 2 === 0 && <ChevronRight
                                                    className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 md:order-first md:rotate-180"/>}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        {item.techs.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 glass rounded-full text-xs font-medium text-muted-foreground"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
