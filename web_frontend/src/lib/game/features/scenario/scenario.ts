import type { Block } from "./block.ts";

export type Scenario = readonly (readonly Block[])[];
