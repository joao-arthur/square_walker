import { block } from "../features/block/mod.ts";
import { modelType } from "../features/model/mod.ts";

export function createModel(): modelType {
    return Array(100).fill(Array(100).fill(block.AIR));
}
