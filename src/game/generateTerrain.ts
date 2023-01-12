import { block } from "../features/block/mod.ts";
import { modelType } from "../features/model/mod.ts";
import { simplexNoise2D } from "https://deno.land/x/noise/mod.ts";

export function generateTerrain(model: modelType): modelType {
    const simplexNoise = simplexNoise2D();

    const dirtGenerated = model.map((column, columnIndex) =>
        column.map((current, lineIndex) =>
            (simplexNoise(columnIndex, lineIndex) + 0.7) > 1
                ? block.DIRT
                : current
        )
    );

    return dirtGenerated.map((column) => {
        const numberOfDirts = column.filter((value) =>
            value === block.DIRT
        ).length;

        return Array(100).fill(block.AIR).fill(
            block.DIRT,
            100 - numberOfDirts - 1,
        );
    });
}
