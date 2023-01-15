import { dimensionType } from "../../../core/dimension.ts";
import {
    blockType,
    cameraType,
    modelFns,
    modelType,
} from "../../features/mod.ts";

export function canvasRender(
    context: CanvasRenderingContext2D,
    dimensions: dimensionType,
    model: modelType,
    camera: cameraType,
): void {
    const unitwidth = 10;
    const unitHeight = 10;

    const modelInCamera = modelFns.toLines(
        modelFns.toColumns(model)
            .map((column) =>
                column.slice(camera.x, camera.x + camera.width)
            ),
    ).map((line) =>
        line.slice(
            modelFns.modelDimension.height - camera.y,
            modelFns.modelDimension.height -
                (camera.y + camera.height),
        )
    );

    modelInCamera.forEach((column, columnIndex) => {
        column.forEach((block, lineIndex) => {
            switch (block) {
                case blockType.AIR:
                    context.fillStyle = "#000000";
                    break;
                case blockType.GRASS:
                    context.fillStyle = "#444";
                    break;
                case blockType.DIRT:
                    context.fillStyle = "#555555";
                    break;
                default:
                    context.fillStyle = "#5555aa";
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
