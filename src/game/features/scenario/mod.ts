export type { scenarioType } from "./scenario.ts";
export { blockType } from "./block.ts";
import { modelDimension } from "./modelDimension.ts";
import { fromColumns } from "./fromColumns/mod.ts";
import { fromLines } from "./fromLines/mod.ts";
import { toColumns } from "./toColumns/mod.ts";
import { toLines } from "./toLines/mod.ts";

export const scenarioFns = {
    modelDimension,
    fromColumns,
    fromLines,
    toColumns,
    toLines,
} as const;
