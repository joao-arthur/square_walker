import { Block } from "../../../features/mod.ts";

export function toConsole(block: Block): string {
    switch (block) {
        case Block.AIR:
            return "  ";
        case Block.DIRT:
            return "🟫";
        case Block.GRASS:
            return "🟩";
        case Block.STONE:
            return "⬛";
        case Block.WATER:
            return "🟦";
        case Block.WOOD:
            return "🟫";
        case Block.TREE_TRUNK:
            return "🌳";
        case Block.TREE_LEAF:
            return "";
        case Block.STAIRS:
            return "";
    }
}
