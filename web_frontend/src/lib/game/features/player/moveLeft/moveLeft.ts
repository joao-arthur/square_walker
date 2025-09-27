import type { Player } from "../player.ts";

export function moveLeft(player: Player): Player {
    return {
        ...player,
        x: player.x - 1,
    };
}
