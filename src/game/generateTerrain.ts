import { block } from "../features/block/mod.ts";
import { modelType } from "../features/model/mod.ts";

export function generateTerrain(model: modelType): modelType {
    return model.map((column) => column.map(() => block.DIRT));
}