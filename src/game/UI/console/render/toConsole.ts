import { blockType } from "../../../model/mod.ts";

export function toConsole(blockValue: blockType): string {
    switch (blockValue) {
        case blockType.AIR:
            return "  ";
        case blockType.DIRT:
            return "🟫";
        case blockType.GRASS:
            return "🟩";
        case blockType.TREE:
            return "🌳";
    }
}
