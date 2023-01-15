import { noiseFn } from "../../../../ports/noise.ts";
import { interpolationFn } from "../../../../ports/interpolation.ts";
import { blockType, modelFns, modelType } from "../../model/mod.ts";
import { terrainRange } from "../terrainRange.ts";
import { chunckSize } from "../chunckSize.ts";

export function generate(
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

    return modelFns.fromColumns(
        lineHeight.map((height) =>
            Array(modelFns.modelDimension.height)
                .fill(blockType.AIR)
                .fill(
                    blockType.GRASS,
                    modelFns.modelDimension.height - height,
                    modelFns.modelDimension.height - height + 1,
                )
                .fill(
                    blockType.DIRT,
                    (modelFns.modelDimension.height - height) + 1,
                )
        ),
    );
}
