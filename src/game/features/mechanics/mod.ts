import { applyTorque } from "./applyTorque/mod.ts";
import { applyResistance } from "./applyResistance/mod.ts";
import { applyAcelleration } from "./applyAcelleration/mod.ts";
import { applySpeed } from "./applySpeed/mod.ts";

export const mechanics = {
    applyTorque,
    applyResistance,
    applyAcelleration,
    applySpeed,
} as const;
