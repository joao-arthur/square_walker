import { modelType } from './modelType.ts';

export function toLines(
    model: modelType,
): modelType {
    return model.map((_, index) =>
        model.map((column) => column[index])
    );
}
