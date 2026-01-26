"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {motion} from "framer-motion";
import {ArrowUpRight, Cloud, Code, Database, Laptop} from "lucide-react";

const projects = [
    {
        title: "IM뱅크 캠퍼스 페이(교통카드 QR 결제 시스템)",
        description: "iM Uniz 앱과 연계된 캠퍼스 교통카드 QR 결제 시스템을 구축했습니다. 인증과 결제 흐름을 중심으로 안정적인 연동 구조를 구현했습니다.",
        tags: ["Spring Boot", "Oracle", "React"],
        icon: Code,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "영양군 대중교통 무료이용 지원 시스템",
        description: "행정 서비스 연동 및 대중교통 무료 이용 지원을 위한 프론트/백엔드 고도화를 담당하고 있습니다.",
        tags: ["Spring Boot", "Vue", "Tibero"],
        icon: Code,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "통신사 Android 유심 교통카드 유지보수",
        description: "SKT, KT, LG 3개 통신사 라이브러리의 Android OS 호환성 대응 및 안정성 강화를 수행 중입니다.",
        tags: ["Android", "Library", "Maintenance"],
        icon: Laptop,
        gradient: "from-gray-600 to-slate-700",
    },
    {
        title: "AI Agent 자재관리 시스템 구축",
        description: "LG 자재관리 시스템에 AI Agent를 접목하고 대용량 데이터 ETL 파이프라인을 구축했습니다.",
        tags: ["Backend", "AI Integration", "ETL"],
        icon: Database,
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "대구형 어르신 통합무인교통카드 (경북 확장)",
        description: "대구시 시스템의 경북 지역 확장을 위해 발급 UI 및 백엔드 기능을 구현하고 운영을 안정화했습니다.",
        tags: ["Vue", "Spring Boot", "System Expansion"],
        icon: Code,
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        title: "LG Pro Centric Cloud 고도화",
        description: "Canvas Editor 기반의 커스텀 UI 컴포넌트 개발 및 콘텐츠 관리 환경의 UX를 개선했습니다.",
        tags: ["Frontend", "Canvas API", "UX Improvement"],
        icon: Laptop,
        gradient: "from-violet-500 to-purple-500",
    },
    {
        title: "iM유페이 홈페이지 고도화 (PL)",
        description: "PL로서 오픈뱅킹 및 자금세탁방지 연동을 포함한 금융 API 개발 및 품질 관리를 총괄했습니다.",
        tags: ["PL", "Spring Boot", "React"],
        icon: Cloud,
        gradient: "from-cyan-600 to-blue-600",
    },
    {
        title: "클라우드 관제 시스템 구축",
        description: "DIP 지역 클러스터 기반 관제 시스템의 모듈 아키텍처 설계와 센서 데이터 처리 기능을 개발했습니다.",
        tags: ["Backend", "Architecture", "IoT"],
        icon: Database,
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "어르신 통합무임 교통카드 시스템 (PL)",
        description: "행안부, 신한카드 등 외부 기관 연계 시스템 통합을 주도하며 시스템 안정화를 이끌었습니다.",
        tags: ["PL", "System Integration", "Public"],
        icon: Code,
        gradient: "from-blue-700 to-indigo-800",
    },
    {
        title: "LG 에너지랩 퍼블리싱",
        description: "HTML/CSS/JS 기반의 UI 구조 설계 및 재사용 가능한 컴포넌트 퍼블리싱을 수행했습니다.",
        tags: ["Publishing", "HTML/CSS", "UI Design"],
        icon: Laptop,
        gradient: "from-green-400 to-emerald-500",
    },
    {
        title: "LG 온라인 교육 플랫폼 구축",
        description: "사용자 및 관리자 기능 전반에 걸친 API 구현과 프론트엔드 연동 작업을 진행했습니다.",
        tags: ["Full Stack", "Platform", "API"],
        icon: Code,
        gradient: "from-amber-500 to-orange-500",
    },
    {
        title: "LG NFT 프로젝트",
        description: "Vue.js 기반의 NFT 서비스 프론트엔드 개발 및 관리자 UI 인터랙션을 개선했습니다.",
        tags: ["Vue.js", "NFT", "Frontend"],
        icon: Cloud,
        gradient: "from-pink-500 to-rose-500",
    },
    {
        title: "LG 베타프로그램 TV앱 & 서버",
        description: "TV 어플리케이션의 신규 기능 개발 및 이와 연동되는 서버 API를 구축했습니다.",
        tags: ["Smart TV", "API", "Backend"],
        icon: Laptop,
        gradient: "from-purple-600 to-blue-600",
    },
    {
        title: "SoftV2X SDK 및 관제 개발",
        description: "V2X 관제 데이터 처리와 장비 연동 API, 모니터링 UI를 포함한 통합 SDK를 개발했습니다.",
        tags: ["V2X", "SDK", "Monitoring"],
        icon: Database,
        gradient: "from-teal-400 to-cyan-500",
    },
    {
        title: "InterM 음향장비 관리자 웹",
        description: "음향 장비의 상태 모니터링 및 원격 제어를 위한 관리자 웹 UI와 API를 구축했습니다.",
        tags: ["Admin Web", "Control System", "Full Stack"],
        icon: Code,
        gradient: "from-slate-500 to-gray-700",
    },
    {
        title: "iM유페이 원패스 개발",
        description: "하이브리드 앱 기반의 인증 및 API 서버 개발과 서비스 유지보수를 담당했습니다.",
        tags: ["Hybrid App", "Auth", "Server"],
        icon: Cloud,
        gradient: "from-blue-400 to-sky-500",
    },
    {
        title: "먹깨비 배달 플랫폼",
        description: "안드로이드 기반 주문/배달 기능 구현 및 UX 개선 등 서비스 초기 운영 업무를 수행했습니다.",
        tags: ["Android", "Mobile", "Platform"],
        icon: Laptop,
        gradient: "from-red-500 to-orange-500",
    },
];

export default function ProjectsPage() {
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
            Portfolio
          </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Featured</span> Projects
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        실제 문제와 요구사항을 바탕으로 진행한 프로젝트들입니다.
                        각 프로젝트는 운영과 유지보수를 고려해 설계되었습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <Card
                                    className="group h-full glass-card hover:border-primary/30 transition-all duration-500 overflow-hidden">
                                    <div
                                        className={`relative h-48 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{scale: 1.1, rotate: 5}}
                                                transition={{type: "spring", stiffness: 300}}
                                            >
                                                <IconComponent
                                                    className="h-20 w-20 text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500"/>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-3">
                                        <CardTitle
                                            className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="mt-2 leading-relaxed">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-grow flex flex-col justify-end">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 glass rounded-full text-xs font-medium text-muted-foreground"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
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
