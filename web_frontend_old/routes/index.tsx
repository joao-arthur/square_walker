import { Head } from "$fresh/runtime.ts";
import Canvas from "../islands/Canvas.tsx";
import { VNode } from "preact";

export default function Index(): VNode {
    return (
        <>
            <Head>
                <title>Square Walker</title>
            </Head>
            <main class="bg-[#e8e8e8] w-screen h-screen flex">
                <Canvas />
            </main>
        </>
    );
}
