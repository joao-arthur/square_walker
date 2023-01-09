import { Head } from "$fresh/runtime.ts";
import Canvas from "../islands/Canvas.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Square Walker</title>
      </Head>
      <Canvas />
    </>
  );
}
