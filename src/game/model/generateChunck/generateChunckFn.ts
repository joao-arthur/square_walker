import type { modelType } from '../model';

export type generateChunckFn = (previousModel: modelType) => modelType;
