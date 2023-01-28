import { playerType } from "../player.ts";

export function moveUp(player: playerType): playerType {
    return {
        ...player,
        y: player.y + 1,
    };
}
