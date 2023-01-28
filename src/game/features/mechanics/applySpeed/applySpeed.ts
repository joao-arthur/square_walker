type speedableType = {
    speed: number;
    position: number;
};

export function applySpeed(
    { speed, position }: speedableType,
): speedableType {
    return {
        speed,
        position: position + speed,
    };
}
