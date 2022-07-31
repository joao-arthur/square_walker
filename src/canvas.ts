import { produce } from 'immer';
import { dimensionsType } from './dimensions/dimensionsType';
import { scenarioParts } from './scenario/scenarioParts';

let dimensions: dimensionsType;

const updateInterval = 500;

const boardWidthUnits = 64;
const boardHeightUnits = 64;

let boardModel: number[][];

let drawPosition = boardHeightUnits - 16;

let timeoutId = 0;

function getColor(value: scenarioParts) {
    switch (value) {
        case scenarioParts.BACKGROUND:
            return '#000000';
        case scenarioParts.TERRAIN:
            return '#555555';
        case scenarioParts.WATER:
            return '#5555aa';
    }
}

function createLine(): number[] {
    return Array(boardWidthUnits).fill(undefined);
}

function createColumn(): number[] {
    return Array(boardHeightUnits).fill(undefined);
}

function updateDrawPosition() {
    const changeNumber = Math.random();
    if (changeNumber < 0.133) {
        if (drawPosition > 0) drawPosition -= 1;
    } else if (changeNumber > 0.866) {
        if (drawPosition < boardHeightUnits) drawPosition += 1;
    }
}

function updateColumns() {
    boardModel.forEach(column => {
        column[drawPosition] = 1;
        updateDrawPosition();
    });
}

function updateColumnsModel() {
    boardModel = produce(boardModel, draft => {
        draft.shift();
        const newColumn = createColumn();
        newColumn[drawPosition] = 1;
        updateDrawPosition();
        draft.push(newColumn);
    });
}

function renderModel(context: CanvasRenderingContext2D) {
    const unitwidth = dimensions.width / boardWidthUnits;
    const unitHeight = dimensions.height / boardHeightUnits;

    boardModel.forEach((column, columnIndex) => {
        column.forEach((line, lineIndex) => {
            context.fillStyle = getColor(line);

            context.fillRect(
                columnIndex * unitwidth,
                lineIndex * unitHeight,
                unitwidth,
                unitHeight,
            );
        });
    });
}

function createModel() {
    boardModel = produce(boardModel, () => createLine().map(createColumn));
}

function mainLoop(context: CanvasRenderingContext2D) {
    updateColumnsModel();
    renderModel(context);
}

export function initCanvasPaint(
    context: CanvasRenderingContext2D,
    newDimensions: dimensionsType,
) {
    createModel();
    dimensions = produce(dimensions, () => newDimensions);
    updateColumns();
    timeoutId = window.setInterval(() => mainLoop(context), updateInterval);
}

export function updateCanvasDimensions(newDimensions: dimensionsType) {
    dimensions = produce(dimensions, () => newDimensions);
}

export function destroyCanvasPaint() {
    window.clearInterval(timeoutId);
}
