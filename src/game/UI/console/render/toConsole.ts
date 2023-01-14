import { block } from "../../../block/mod.ts";

export function toConsole(blockValue: block): string {
    switch (blockValue) {
        case block.AIR:
            return "  ";
        case block.DIRT:
            return "🟫";
        case block.GRASS:
            return "🟩";
        case block.TREE:
            return "🌳";
    }
}
