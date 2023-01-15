import { dimensionType } from "../../../core/dimension.ts";
import {
    blockType,
    modelDimension,
    modelType,
    toColumns,
    toLines,
} from "../../features/model/mod.ts";
import { cameraType } from "../../features/camera/mod.ts";

export function canvasRender(
    context: CanvasRenderingContext2D,
    dimensions: dimensionType,
    model: modelType,
    camera: cameraType,
): void {
    const unitwidth = 10;
    const unitHeight = 10;

    console.log(model);
    console.log(
        toColumns(model)
            .slice(camera.x, camera.x + camera.width),
    );
    console.log(
        toLines(
            toColumns(model)
                .slice(camera.x, camera.x + camera.width),
        )
            .slice(
                modelDimension.height - camera.y,
                modelDimension.height - (camera.y + camera.height),
            ),
    );

    const modelInCamera = toLines(
        toColumns(model)
            .map((column) =>
                column.slice(camera.x, camera.x + camera.width)
            ),
    ).map((line) =>
        line.slice(
            modelDimension.height - camera.y,
            modelDimension.height - (camera.y + camera.height),
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
