import { modelType } from '../model';

export function serialize(model: modelType) {
    return model.map(row => row.map(column => {
        switch (column) {
            case 'EMPTY': return ' ';
            case 'WATER_SHALLOW': return 'w';
            case 'WATER_DEEP': return 'W';
            case 'SOLID_BRICK': return 'B';
            case 'SOLID_SAND': return 'A';
            case 'SOLID_STONE': return 'S';
            case 'SOLID_DIRT': return 'D';
            case 'SOLID_GRASS': return ' ';
            case 'TREE_TRUNK': return ' ';
            case 'TREE_LEAF': return ' ';
        }
    }).join('')).join('\n');
}
