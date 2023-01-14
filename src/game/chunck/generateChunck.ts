import { simplexNoiseImplementation } from "../../features/noise/mod.ts";
import { modelType } from "../../features/model/mod.ts";
import { terrainRange } from "../terrainRange.ts";
import { linearInterpolation } from "../interpolation/linearInterpolation.ts";
import { chunckSize } from "../chunckSize.ts";
import { block } from "../../features/block/block.ts";
import { modelDimension } from "../modelDimension.ts";
import { fromColumns } from "../../features/model/fromColumns.ts";

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
