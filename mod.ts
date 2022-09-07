export enum Greeting {
  Hello = "Hello",
  HI = "Hi",
  GoodEvening = "Good evening",
}

export function greet(
  name: string,
  greeting: Greeting = Greeting.Hello,
): string {
  return `${greeting} ${name}`;
}
