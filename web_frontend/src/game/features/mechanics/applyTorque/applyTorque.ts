type Torquable = {
    torque: number;
    acelleration: number;
};

export function applyTorque(
    { torque, acelleration }: Torquable,
): Torquable {
    return {
        torque,
        acelleration: acelleration + torque,
    };
}
