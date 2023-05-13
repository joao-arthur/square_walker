import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { moveLeft } from "./moveLeft.ts";

Deno.test("moveLeft", () => {
    assertEquals(
        moveLeft({
            x: 10,
            y: 10,
            width: 10,
            height: 10,
            xSpeed: 0,
            ySpeed: 0,
            xAcelleration: 0,
            yAcelleration: 0,
        }),
        {
            x: 9,
            y: 10,
            width: 10,
            height: 10,
            xSpeed: 0,
            ySpeed: 0,
            xAcelleration: 0,
            yAcelleration: 0,
        },
    );
});
