import { Block, cameraFns } from "../../features/mod.ts";
import { GameModel } from "../../gameModel.ts";

export function canvasRender(model: GameModel): void {
    const modelInCamera = cameraFns.applyToScenario(
        model.scenario,
        model.camera,
    );
    const unitwidth = model.dimensions.width / modelInCamera.length;
    const unitHeight = model.dimensions.height /
        modelInCamera[0].length;

    modelInCamera.forEach((column, columnIndex) => {
        column.forEach((block, lineIndex) => {
            switch (block) {
                case Block.AIR:
                    model.context.fillStyle = "#ebf7ff";
                    break;
                case Block.GRASS:
                    model.context.fillStyle = "#126b23";
                    break;
                case Block.DIRT:
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

    const image = new Image();
    image.src = "assets/player.png";

    model.context.imageSmoothingEnabled = false;
    model.context.drawImage(
        image,
        model.player.x,
        model.dimensions.height - model.player.y,
        unitwidth,
        unitHeight * 2,
    );
}
