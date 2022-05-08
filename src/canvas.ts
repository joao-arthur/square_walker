import { produce } from 'immer';
import { dimensionsType } from './dimensions/dimensionsType';

let width: number;
let height: number;

const updateInterval = 200;

const boardWidthUnits = 128;
const boardHeightUnits = 64;
let boardModel: number[][];

let drawPosition = boardHeightUnits - 16;

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
    context.fillRect(0, 0, width, height);

    const unitwidth = width / boardWidthUnits;
    const unitHeight = height / boardHeightUnits;

    context.fillStyle = '#555555';
    boardModel.forEach((column, columnIndex) => {
        column.forEach((line, lineIndex) => {
            if (line !== 1) return;

            context.fillRect(
                columnIndex * unitwidth,
                lineIndex * unitHeight,
                unitwidth,
                height, //  unitHeight
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
    dimensions: dimensionsType,
) {
    createModel();
    width = dimensions.width;
    height = dimensions.height;
    initModel();
    window.setInterval(() => mainLoop(context), updateInterval);
}

export function updateCanvasDimensions(dimensions: dimensionsType) {
    width = dimensions.width;
    height = dimensions.height;
}
