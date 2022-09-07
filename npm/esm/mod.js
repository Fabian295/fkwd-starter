export var Greeting;
(function (Greeting) {
    Greeting["Hello"] = "Hello";
    Greeting["HI"] = "Hi";
    Greeting["GoodEvening"] = "Good evening";
})(Greeting || (Greeting = {}));
export function greet(name, greeting = Greeting.Hello) {
    return `${greeting} ${name}`;
}
