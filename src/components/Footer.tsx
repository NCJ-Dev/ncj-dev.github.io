import Link from "next/link";
import {Github, Heart, Mail, UserCircle} from "lucide-react";

const socialLinks = [
    {href: "https://github.com/NCJ-Dev", icon: Github, label: "GitHub"},
    {href: "https://www.notion.so/Nam-Chul-Jin-2affdd80e84f808082cfcbf31065ac90", icon: UserCircle, label: "Notion"},
    {href: "mailto:chuljin92.nam@gmail.com", icon: Mail, label: "Email"},
];

export default function Footer() {
    return (
        <footer className="relative mt-auto border-t border-border bg-card/50 backdrop-blur-sm">
            <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-sm">Built with</span>
                        <Heart className="h-4 w-4 text-red-500 fill-red-500"/>
                        <span className="text-sm">by</span>
                        <span className="text-foreground font-medium">Nam Chuljin</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                                >
                                    <IconComponent
                                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                                </Link>
                            );
                        })}
                    </div>

                    <p className="text-sm text-muted-foreground">
                        &copy; 2026 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
