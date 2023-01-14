import { fromColumns, modelType } from "../model/mod.ts";
import { simplexNoiseImplementation } from "../../adapters/noise/mod.ts";
import { linearInterpolation } from "../../adapters/interpolation/mod.ts";
import { block } from "../block/mod.ts";
import { terrainRange } from "../terrainRange.ts";
import { chunckSize } from "../chunckSize.ts";
import { modelDimension } from "../modelDimension.ts";

export function generateChunck(numberOfTheChunck: number): modelType {
    const noiseValuePreviousChunck = simplexNoiseImplementation(
        numberOfTheChunck,
        0,
    );
    const noiseValueCurrentChunck = simplexNoiseImplementation(
        numberOfTheChunck + 1,
        0,
    );

    const previousChunckYValue = (noiseValuePreviousChunck *
        ((terrainRange.maxY - terrainRange.minY) / 2)) +
        ((terrainRange.maxY + terrainRange.minY) / 2);
    const currentChunckYValue = (noiseValueCurrentChunck *
        ((terrainRange.maxY - terrainRange.minY) / 2)) +
        ((terrainRange.maxY + terrainRange.minY) / 2);

    const lineHeight = linearInterpolation(
        previousChunckYValue,
        currentChunckYValue,
        chunckSize,
    );

    return fromColumns(
        lineHeight.map((height) =>
            Array(modelDimension.height)
                .fill(block.AIR).fill(
                    block.DIRT,
                    modelDimension.height - height,
                )
        ),
    );
}
