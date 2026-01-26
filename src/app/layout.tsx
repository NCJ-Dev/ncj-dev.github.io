import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "남철진의 개발자 포트폴리오",
    description: "풀스택 개발자 남철진의 기술 스택, 경력, 프로젝트를 소개하는 포트폴리오 웹사이트입니다.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased lg:flex`}>
        <Sidebar/>
        <div className="w-full lg:ml-[280px] flex flex-col min-h-screen">
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
