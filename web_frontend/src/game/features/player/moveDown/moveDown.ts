import { Player } from "../player.ts";

export function moveDown(player: Player): Player {
    return {
        ...player,
        y: player.y - 1,
    };
}
