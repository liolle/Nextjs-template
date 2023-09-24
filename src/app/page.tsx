import React from "react";
import { ExampleType, TEMPLATE_VERSION } from "@/types";

export default function Home() {
    const message: ExampleType = "Next";

    return (
        <main className="flex min-h-screen  flex-col items-center justify-between gap-2 bg-white-main p-2">
            <section className=" flex h-full w-full select-none justify-center rounded-lg border-2 border-dashed border-blue-main px-2 py-1">
                <span className=" hover:text-blue-main">
                    <a
                        href="https://github.com/liolle/Nextjs-template"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nextjs Template {TEMPLATE_VERSION}
                    </a>
                </span>
            </section>
            <section className=" flex flex-1 items-center justify-center">
                <div className=" ">
                    <span>{message} </span>
                </div>
            </section>
        </main>
    );
}
