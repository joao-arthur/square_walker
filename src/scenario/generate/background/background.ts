export function background(boardModel: number[][]): number[][] {
    return boardModel.map(column => column.map(() => 0));
}
