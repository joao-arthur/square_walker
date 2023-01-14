import { dimensionType } from "../../../core/dimension.ts";
import { blockType, modelType } from "../../model/mod.ts";

export function canvasRender(
    context: CanvasRenderingContext2D,
    dimensions: dimensionType,
    model: modelType,
): void {
    const unitwidth = 10;
    const unitHeight = 10;

    model.forEach((column, columnIndex) => {
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
