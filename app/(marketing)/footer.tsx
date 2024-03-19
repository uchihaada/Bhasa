import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/hindi.svg"
                        alt="Hindi"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Hindi
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/bangla.svg"
                        alt="bangla"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Bangla
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/es.svg"
                        alt="spanish"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/jp.svg"
                        alt="japanese"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/it.svg"
                        alt="italian"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Italian
                </Button>
            </div>
        </footer>
    );
};