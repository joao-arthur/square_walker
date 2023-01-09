export function initCanvasPaint(
  context: CanvasRenderingContext2D,
  dimensions: any,
) {
  const unitwidth = 10;
  const unitHeight = 10;

  Array(100).fill(Array(100).fill(undefined)).forEach((line, lineIndex) => {
    line.forEach((column, columnIndex) => {
      //switch (column) {
      //    case 'EMPTY':
      //        context.fillStyle = '#000000';
      //        break;
      //    case 'SOLID_STONE':
      //        context.fillStyle = '#555555';
      //        break;
      //default: context.fillStyle = '#5555aa';
      //}
      context.fillStyle = "#5555aa";

      const x = lineIndex * unitwidth;
      const y = columnIndex * unitHeight;

      context.fillRect(
        0,
        0,
        200,
        200,
      );
    });
  });
}
