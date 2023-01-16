import { noiseFn } from "../../../../ports/noise.ts";
import { interpolationFn } from "../../../../ports/interpolation.ts";
import {
    blockType,
    scenarioFns,
    scenarioType,
} from "../../scenario/mod.ts";
import { terrainRange } from "../terrainRange.ts";
import { chunckSize } from "../chunckSize.ts";

export function generate(
    numberOfTheChunck: number,
    noise: noiseFn,
    interpolation: interpolationFn,
): scenarioType {
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

    return scenarioFns.fromColumns(
        lineHeight.map((height) =>
            Array(scenarioFns.modelDimension.height)
                .fill(blockType.AIR)
                .fill(
                    blockType.GRASS,
                    scenarioFns.modelDimension.height - height,
                    scenarioFns.modelDimension.height - height + 1,
                )
                .fill(
                    blockType.DIRT,
                    (scenarioFns.modelDimension.height - height) + 1,
                )
        ),
    );
}
