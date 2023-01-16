import { dimensionType } from "../../../core/dimension.ts";
import {
    blockType,
    cameraFns,
    cameraType,
    modelType,
    scenarioFns,
} from "../../features/mod.ts";

export function canvasRender(
    context: CanvasRenderingContext2D,
    dimensions: dimensionType,
    model: modelType,
    camera: cameraType,
): void {
    const modelInCamera = cameraFns.applyToModel(model, camera);
    const unitwidth = dimensions.width / modelInCamera.length;
    const unitHeight = dimensions.height / modelInCamera[0].length;

    modelInCamera.forEach((column, columnIndex) => {
        column.forEach((block, lineIndex) => {
            switch (block) {
                case blockType.AIR:
                    context.fillStyle = "#ebf7ff";
                    break;
                case blockType.GRASS:
                    context.fillStyle = "#126b23";
                    break;
                case blockType.DIRT:
                    context.fillStyle = "#453c01";
                    break;
            }

            // context.fillStyle = "#5555aa";

            const x = columnIndex * unitwidth;
            const y = lineIndex * unitHeight;

            context.fillRect(
                x,
                y,
                unitwidth,
                unitHeight,
            );
        });
    });
}
