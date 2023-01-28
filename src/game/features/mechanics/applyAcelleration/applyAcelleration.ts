type acellerableType = {
    acelleration: number;
    speed: number;
};

export function applyAcelleration(
    { acelleration, speed }: acellerableType,
): acellerableType {
    return {
        acelleration,
        speed: speed + acelleration,
    };
}
