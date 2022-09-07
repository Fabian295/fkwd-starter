import { greet, Greeting } from "./mod.ts";
import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std@0.134.0/testing/asserts.ts";

Deno.test("greet default", () => {
  const greeting = greet("TypeScript Congress");
  assertEquals(greeting, "Hello TypeScript Congress");
});

Deno.test("greet Hi", () => {
  const greeting = greet("TypeScript Congress", Greeting.HI);
  assertStrictEquals(greeting, "Hi TypeScript Congress");
});

Deno.test("greet Good evening", (): void => {
  const greeting = greet("TypeScript Congress", Greeting.GoodEvening);
  assertEquals<string>(greeting, "Good evening TypeScript Congress");
});

if (greet('bob')) console.log("success");
