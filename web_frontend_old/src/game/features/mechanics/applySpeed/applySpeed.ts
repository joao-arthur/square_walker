type Speedable = {
    speed: number;
    position: number;
};

export function applySpeed(
    { speed, position }: Speedable,
): Speedable {
    return {
        speed,
        position: position + speed,
    };
}
