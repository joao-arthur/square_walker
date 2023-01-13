import { dimensionType } from "../../core/dimension.ts";
import { block } from "../block/block.ts";
import { modelType } from "./modelType.ts";

export function fromDimension(dimension: dimensionType): modelType {
    return Array(dimension.height).fill(
        Array(dimension.width).fill(block.AIR),
    );
}
