import { Bezier } from 'bezier-js';

export function bezier(n1: number, n2: number) {
    return [
        new Bezier(0, n1, 1, (n1 + n2) / 2, 2, n2).compute(0.2),
        new Bezier(0, n1, 1, (n1 + n2) / 2, 2, n2).compute(0.5),
        new Bezier(0, n1, 1, (n1 + n2) / 2, 2, n2).compute(1),
        new Bezier(0, n1, 1, (n1 + n2) / 2, 2, n2).compute(1.5),
        new Bezier(0, n1, 1, (n1 + n2) / 2, 2, n2).compute(1.8),
    ];
}
