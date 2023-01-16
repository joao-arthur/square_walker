import { blockType, cameraFns } from "../../features/mod.ts";
import { gameModelType } from "../../gameModel.ts";

export function canvasRender(model: gameModelType): void {
    const modelInCamera = cameraFns.applyToModel(
        model.scenario,
        model.camera,
    );
    const unitwidth = model.dimensions.width / modelInCamera.length;
    const unitHeight = model.dimensions.height /
        modelInCamera[0].length;

    modelInCamera.forEach((column, columnIndex) => {
        column.forEach((block, lineIndex) => {
            switch (block) {
                case blockType.AIR:
                    model.context.fillStyle = "#ebf7ff";
                    break;
                case blockType.GRASS:
                    model.context.fillStyle = "#126b23";
                    break;
                case blockType.DIRT:
                    model.context.fillStyle = "#453c01";
                    break;
            }

            // context.fillStyle = "#5555aa";

            const x = columnIndex * unitwidth;
            const y = lineIndex * unitHeight;

            model.context.fillRect(
                x,
                y,
                unitwidth,
                unitHeight,
            );
        });
    });
}
