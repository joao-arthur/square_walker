import { playerType } from "../player.ts";

export function moveLeft(player: playerType): playerType {
    return {
        ...player,
        x: player.x - 1,
    };
}
