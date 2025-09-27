import type { Player } from "../player.ts";
import { Direction } from "../../movable/direction.ts";

export function moveDown(
    player: Player,
    direction: Direction,
    amount: number,
): Player {
    switch (direction) {
        case Direction.VERTICAL:
        case Direction.HORIZONTAL:
    }
}
