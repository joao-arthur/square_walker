import { background } from './background';

describe('background', () => {
    it('should generate the background ', () => {
        expect(
            background([
                [10, 10, 10, 10, 10],
                [10, 10, 10, 10, 10],
                [10, 10, 10, 10, 10],
                [10, 10, 10, 10, 10],
                [10, 10, 10, 10, 10],
            ]),
        ).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
    });
});
