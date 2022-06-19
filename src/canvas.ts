import { produce } from 'immer';
import { dimensionsType } from './dimensions/dimensionsType';

let dimensions: dimensionsType;

const updateInterval = 10;

const boardWidthUnits = 128;
const boardHeightUnits = 64;
let boardModel: number[][];

let drawPosition = boardHeightUnits - 16;

let timeoutId = 0;

function createColumn() {
    return Array(boardHeightUnits).fill(undefined);
}

function createModel() {
    boardModel = Array(boardWidthUnits).fill(undefined).map(createColumn);
}

function updateDrawPosition() {
    const changeNumber = Math.random();
    if (changeNumber < 0.133) {
        if (drawPosition > 0) drawPosition -= 1;
    } else if (changeNumber > 0.866) {
        if (drawPosition < boardHeightUnits) drawPosition += 1;
    }
}

function initModel() {
    boardModel.forEach(column => {
        column[drawPosition] = 1;
        updateDrawPosition();
    });
}

function updateModel() {
    boardModel = produce(boardModel, draft => {
        draft.shift();
        updateDrawPosition();
        const newColumn = createColumn();
        newColumn[drawPosition] = 1;
        draft.push(newColumn);
    });
}

function renderModel(context: CanvasRenderingContext2D) {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, dimensions.width, dimensions.height);

    const unitwidth = dimensions.width / boardWidthUnits;
    const unitHeight = dimensions.height / boardHeightUnits;

    context.fillStyle = '#555555';
    boardModel.forEach((column, columnIndex) => {
        column.forEach((line, lineIndex) => {
            if (line !== 1) return;
            context.fillRect(
                columnIndex * unitwidth,
                lineIndex * unitHeight,
                unitwidth,
                dimensions.height, //  unitHeight
            );
        });
    });
}

function mainLoop(context: CanvasRenderingContext2D) {
    updateModel();
    renderModel(context);
}

export function initCanvasPaint(
    context: CanvasRenderingContext2D,
    newDimensions: dimensionsType,
) {
    createModel();
    dimensions = produce(dimensions, () => newDimensions);
    initModel();
    timeoutId = window.setInterval(() => mainLoop(context), updateInterval);
}

export function updateCanvasDimensions(newDimensions: dimensionsType) {
    dimensions = produce(dimensions, () => newDimensions);
}

export function destroyCanvasPaint() {
    window.clearTimeout(timeoutId);
}
