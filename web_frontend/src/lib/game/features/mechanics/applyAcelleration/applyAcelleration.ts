type Acellerable = {
    acelleration: number;
    speed: number;
};

export function applyAcelleration(
    { acelleration, speed }: Acellerable,
): Acellerable {
    return {
        acelleration,
        speed: speed + acelleration,
    };
}
