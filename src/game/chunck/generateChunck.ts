import { blockType, fromColumns, modelType } from "../model/mod.ts";
import { noiseFn } from "../../ports/noise.ts";
import { interpolationFn } from "../../ports/interpolation.ts";
import { terrainRange } from "../terrainRange.ts";
import { chunckSize } from "../chunckSize.ts";
import { modelDimension } from "../modelDimension.ts";

export function generateChunck(
    numberOfTheChunck: number,
    noise: noiseFn,
    interpolation: interpolationFn,
): modelType {
    const noiseValuePreviousChunck = noise(numberOfTheChunck);
    const noiseValueCurrentChunck = noise(numberOfTheChunck + 1);

    const previousChunckYValue = (noiseValuePreviousChunck *
        ((terrainRange.maxY - terrainRange.minY) / 2)) +
        ((terrainRange.maxY + terrainRange.minY) / 2);
    const currentChunckYValue = (noiseValueCurrentChunck *
        ((terrainRange.maxY - terrainRange.minY) / 2)) +
        ((terrainRange.maxY + terrainRange.minY) / 2);

    const lineHeight = interpolation(
        previousChunckYValue,
        currentChunckYValue,
        chunckSize,
    );

    return fromColumns(
        lineHeight.map((height) =>
            Array(modelDimension.height)
                .fill(blockType.AIR)
                .fill(
                    blockType.GRASS,
                    modelDimension.height - height,
                    modelDimension.height - height + 1,
                )
                .fill(
                    blockType.DIRT,
                    (modelDimension.height - height) + 1,
                )
        ),
    );
}
