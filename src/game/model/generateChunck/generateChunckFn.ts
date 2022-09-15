import { chunckType } from '../chunck';

export type generateChunckFn = (previous: chunckType) => chunckType;
