import { Head } from "$fresh/runtime.ts";
import Canvas from "../islands/Canvas.tsx";
import { ComponentChildren } from "preact";

export default function Index(): ComponentChildren {
    return (
        <>
            <Head>
                <title>Square Walker</title>
            </Head>
            <Canvas />
        </>
    );
}
