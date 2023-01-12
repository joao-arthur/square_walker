import { block } from "../features/block/mod.ts";
import { modelType } from "../features/model/mod.ts";
import { simplexNoiseImplementation } from "../features/noise/mod.ts";

export function generateTerrain(model: modelType): modelType {
    const dirtGenerated = model.map((column, columnIndex) =>
        column.map((current, lineIndex) =>
            (simplexNoiseImplementation(columnIndex, 0) + 0.7) > 1
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
