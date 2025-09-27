import type { Player } from "../player.ts";

export function moveUp(player: Player): Player {
    return {
        ...player,
        y: player.y + 1,
    };
}
