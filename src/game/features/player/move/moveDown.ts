import { directionType } from "../../movable/direction.ts";
import { playerType } from "../player.ts";

export function moveDown(
    player: playerType,
    direction: directionType,
    amount: number,
): playerType {
    switch (direction) {
        case directionType.VERTICAL:
        case directionType.HORIZONTAL:
    }
}
