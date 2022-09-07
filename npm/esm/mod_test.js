import * as dntShim from "./_dnt.test_shims.js";
import { greet, Greeting } from "./mod.js";
import { assertEquals, assertStrictEquals, } from "./deps/deno.land/std@0.134.0/testing/asserts.js";
dntShim.Deno.test("greet default", () => {
    const greeting = greet("TypeScript Congress");
    assertEquals(greeting, "Hello TypeScript Congress");
});
dntShim.Deno.test("greet Hi", () => {
    const greeting = greet("TypeScript Congress", Greeting.HI);
    assertStrictEquals(greeting, "Hi TypeScript Congress");
});
dntShim.Deno.test("greet Good evening", () => {
    const greeting = greet("TypeScript Congress", Greeting.GoodEvening);
    assertEquals(greeting, "Good evening TypeScript Congress");
});
if (greet('bob'))
    console.log("success");
