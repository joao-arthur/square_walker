import { playerType } from "../player.ts";

export function moveDown(player: playerType): playerType {
    return {
        ...player,
        y: player.y - 1,
    };
}
