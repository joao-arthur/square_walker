import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { moveRight } from "./moveRight.ts";

Deno.test("moveRight", () => {
    assertEquals(
        moveRight({
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
            x: 11,
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
