<script lang="ts">
    import { onMount } from "svelte";
    import { gameController } from "$lib/game/gameController.ts";

    let initiated = $state(false);
    let innerWidth = $state(0);
    let innerHeight = $state(0);

    let canvas: HTMLCanvasElement;

    const dimension = Math.min(innerHeight, innerWidth);

    onMount(() => {
        if (!initiated) {
            initiated = true;
            const context = canvas.getContext("2d");
            if (!context) {
                return;
            }
            gameController.init({
                context,
                dimensions: {
                    width: dimension,
                    height: dimension,
                },
            });
            return () => gameController.close();
        }

    });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<style>
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: #e8e8e8;
    }

    canvas {
        margin: auto;
    }
</style>

<main>
    <canvas
        bind:this={canvas}
        width={dimension}
        height={dimension} 
        style={`width: ${Math.min(innerHeight, innerWidth)}px; height: ${Math.min(innerHeight, innerWidth)}px;`}
     />
</main>
