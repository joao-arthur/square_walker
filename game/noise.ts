import { perlinNoise2D } from 'https://deno.land/x/noise/mod.ts';
import { simplexNoise2D } from 'https://deno.land/x/noise/mod.ts';

export function generateNoise() {
    //  const perlinNoise = perlinNoise2D();
    //
    //  for (let x = 0; x < 100; x++) {
    //      for (let y = 0; y < 50; y++) {
    //          console.log(perlinNoise(x, y));
    //      }
    //  }

    const simplexNoise = simplexNoise2D();

    const dados: undefined[][] = Array(10).fill(
        Array(10).fill(undefined),
    );
    console.log(
        dados.map((column, columnIndex) =>
            column.map((_, lineIndex) =>
                (simplexNoise(columnIndex, lineIndex) +
                        (lineIndex > 4 ? 1 : 0)) > 1
                    ? 'T'
                    : 'A'
            ).join(' ')
        ),
    );
}
