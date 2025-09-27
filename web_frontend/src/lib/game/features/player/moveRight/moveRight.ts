import type { Player } from "../player.ts";

export function moveRight(player: Player): Player {
    return {
        ...player,
        x: player.x + 1,
    };
}
