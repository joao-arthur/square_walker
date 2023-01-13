import { simplexNoiseImplementation } from "../../features/noise/mod.ts";
import { modelType } from "../../features/model/mod.ts";
import { terrainRange } from "../terrainRange.ts";

export function chunck(numberOfTheChunck: number): modelType {
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
}
