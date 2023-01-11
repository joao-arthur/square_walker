import { blocks } from "../features/blocks/mod.ts";
import { modelType } from "../features/model/mod.ts";

export function generateTerrain(model: modelType): modelType {
    return model.map((column) => column.map(() => blocks.DIRT));
}
