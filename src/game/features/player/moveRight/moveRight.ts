import { playerType } from "../player.ts";

export function moveRight(player: playerType): playerType {
    return {
        ...player,
        x: player.x + 1,
    };
}
