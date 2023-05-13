import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { moveUp } from "./moveUp.ts";

Deno.test("moveUp", () => {
    assertEquals(
        moveUp({
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
            x: 10,
            y: 11,
            width: 10,
            height: 10,
            xSpeed: 0,
            ySpeed: 0,
            xAcelleration: 0,
            yAcelleration: 0,
        },
    );
});
