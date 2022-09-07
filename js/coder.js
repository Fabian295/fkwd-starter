console.log('coder');

// let ab = new ArrayBuffer(3);
// let ABC = new TextDecoder().decode(65, 66, 67);
// console.log(ABC)

const xs = new Uint8Array(12);
xs.set([ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100 ], 0);
new TextDecoder().decode(xs);

xs.map(x => x > 65 && x < 90 ? x + 32 : x)
console.log(xs)