type Resistable = {
    resistance: number;
    acelleration: number;
};

export function applyResistance(
    { resistance, acelleration }: Resistable,
): Resistable {
    return {
        resistance,
        acelleration: acelleration + resistance,
    };
}
