import { scenarioModel } from './scenarioModel';
import { scenarioParts } from '../scenarioParts';

describe('scenarioModel', () => {
    it('should generate model', () => {
        expect(scenarioModel.getModel()).toEqual([
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN
            ]
        ]);
    });
});
