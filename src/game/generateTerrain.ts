import { modelType } from "./model/mod.ts";
import { simplexNoiseImplementation } from "../adapters/noise/mod.ts";
import { block } from "./block/mod.ts";
import { terrainRange } from "./terrainRange.ts";
import { chunckSize } from "./chunckSize.ts";
import { modelDimension } from "./modelDimension.ts";

export function generateTerrain(): modelType {
    let currentChunck = 0;
    let chunckNoiseValue = simplexNoiseImplementation(
        currentChunck,
        0,
    );
    let chunck0YValue = (chunckNoiseValue *
        ((terrainRange.maxY - terrainRange.minY) / 2)) +
        ((terrainRange.maxY + terrainRange.minY) / 2);

    let chunck1YValue: number;

    let chunck = Array(chunckSize);
    chunck[0]; // y = chunck0YValue
    chunck[chunck.length - 1]; // y = chunck1YValue

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
