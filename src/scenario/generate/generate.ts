import { pipe } from 'ramda';

import { background } from './background';
import { terrain } from './terrain';
import { water } from './water';

export function generate(boardModel: number[][]) {
    return pipe(() => boardModel, background, terrain, water);
}
