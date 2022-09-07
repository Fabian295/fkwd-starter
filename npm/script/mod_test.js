"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dntShim = __importStar(require("./_dnt.test_shims.js"));
const mod_js_1 = require("./mod.js");
const asserts_js_1 = require("./deps/deno.land/std@0.134.0/testing/asserts.js");
dntShim.Deno.test("greet default", () => {
    const greeting = (0, mod_js_1.greet)("TypeScript Congress");
    (0, asserts_js_1.assertEquals)(greeting, "Hello TypeScript Congress");
});
dntShim.Deno.test("greet Hi", () => {
    const greeting = (0, mod_js_1.greet)("TypeScript Congress", mod_js_1.Greeting.HI);
    (0, asserts_js_1.assertStrictEquals)(greeting, "Hi TypeScript Congress");
});
dntShim.Deno.test("greet Good evening", () => {
    const greeting = (0, mod_js_1.greet)("TypeScript Congress", mod_js_1.Greeting.GoodEvening);
    (0, asserts_js_1.assertEquals)(greeting, "Good evening TypeScript Congress");
});
if ((0, mod_js_1.greet)('bob'))
    console.log("success");
