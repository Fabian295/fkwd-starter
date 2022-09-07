"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.Greeting = void 0;
var Greeting;
(function (Greeting) {
    Greeting["Hello"] = "Hello";
    Greeting["HI"] = "Hi";
    Greeting["GoodEvening"] = "Good evening";
})(Greeting = exports.Greeting || (exports.Greeting = {}));
function greet(name, greeting = Greeting.Hello) {
    return `${greeting} ${name}`;
}
exports.greet = greet;
