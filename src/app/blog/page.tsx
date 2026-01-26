"use client";

import {motion, Variants} from "framer-motion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        title: "대용량 데이터 처리를 위한 Batch & ETL 전략",
        excerpt: "Full/Delta Sync 방식의 데이터 동기화와 파티셔닝 기반의 병렬 처리 등 효율적인 ETL 파이프라인 구축 경험을 공유합니다.",
        category: "Backend",
        link: "https://www.notion.so/Batch-ETL-2affdd80e84f808192f8fbaa5237a000",
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        title: "협업의 효율을 높이는 Swagger API 문서화",
        excerpt: "Spring Boot 환경에서 Swagger(Springdoc)를 활용하여 유지보수가 쉬운 API 명세서를 자동화하고 관리하는 방법을 정리했습니다.",
        category: "API",
        link: "https://www.notion.so/Swagger-2e1fdd80e84f806bad0ee070a983019b",
        gradient: "from-emerald-500 to-teal-500",
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
        transition: {duration: 0.6, ease: "easeOut"},
    },
} as Variants;

export default function BlogPage() {
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
            Articles
          </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient">Latest</span> Blog Posts
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        개발 경험과 인사이트를 공유합니다. 기술 트렌드와 팁을 확인해보세요.
                    </p>
                    <Link href="#all">
                        <Button variant="ghost" className="text-primary hover:text-primary/80 glass">
                            View All Articles <ArrowRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Link href={post.link}>
                                <Card
                                    className="group glass-card hover:border-primary/30 transition-all duration-500 overflow-hidden h-full cursor-pointer">
                                    <div className={`h-3 bg-gradient-to-r ${post.gradient}`}></div>

                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} bg-opacity-10 text-xs font-medium`}>
                        {post.category}
                      </span>
                                        </div>

                                        <CardTitle
                                            className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                            {post.title}
                                            <ArrowRight
                                                className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                                        </CardTitle>

                                        <CardDescription className="mt-3 leading-relaxed">
                                            {post.excerpt}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div
                                            className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                                            <span>Read More</span>
                                            <ArrowRight
                                                className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300"/>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
