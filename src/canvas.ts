import { gameController } from './game/controller/gameController';

export function initCanvasPaint(
    context: CanvasRenderingContext2D,
    dimensions: any,
) {
    const unitwidth = dimensions.width / 64;
    const unitHeight = dimensions.height / 64;

    gameController().forEach((line, columnIndex) => {
        line.forEach((column, lineIndex) => {
            switch (column) {
                case 'EMPTY': context.fillStyle = '#000000'; break;
                case 'SOLID_STONE': context.fillStyle = '#555555'; break;
                default: context.fillStyle = '#5555aa';
            }

            context.fillRect(
                columnIndex * unitwidth,
                lineIndex * unitHeight,
                unitwidth,
                unitHeight,
            );
        });
    });
}
