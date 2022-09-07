
/*
new Blob([ data ], {type:"text/plain", endings: "transparent"||"native"})
new File([ data ], filename, {type:"text/plain", lastModified: Date.now()})
(data - Blob, ArrayBuffer, TypedArray, DataView, String (utf-8 string), a mixture)
File is a sub-class of Blob. Can often be used interchangeably. 
Once you have a Blob/File then you can use it:
- upload via fetch as a file or stream
- save it in the cache
- add a link in a webpage to the file
- display it as an image (if image)
- read the text contents (json, txt, html...) and:
  - display on page
  - parse the html, xml, json, etc
  - save in localStorage or cookie
ArrayBuffer - raw data as a fixed-length string of bytes. It is NOT an Array.
DataView - an interpretation of some raw bytes expressed as 8-bit, 16-bit, 32-bit,
  or 64-bit integers. Used to add or edit data in an ArrayBuffer. Like a wrapper 
  for ArrayBuffers if you need to edit them. It is a View of the Data from the ArrayBuffer
TypedArray - It is an Array-like view of raw bytes stored as 
  8-bit, 16-bit, 32-bit or 64-bit  integers, clamped integers, 
  signed and unsigned integers, or floats. 
*/

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnGo').addEventListener('click', createBlob);
  document.getElementById('btnImg').addEventListener('click', createImgBlob);
});

function createBlob(ev) {
  console.log('blob!');
  ev.preventDefault();
  let ab = new ArrayBuffer(2);  // 2 bytes / 2 x 8 bits/ range 0 - 255, if unsigned 
  let dataview = new DataView(ab);
  dataview.setInt8(0, 104);
  dataview.setInt8(1, 105);
  let val = new Uint8Array(ab).toString();
  console.log(val)
  console.log(new Uint8Array(ab).toString());

  let b = new Blob([ab]);
  console.log(b);

  let f = new File([ab], 'myinfo.txt', { type:'text/plain' });
  console.log(f);

  // let url = URL.createObjectURL(f);
  // let a = document.createElement('a');
  // a.href = url;
  // a.download = f.name;
  // a.textContent = `Download ${ f.name }`;
  // document.querySelector('main').append(a);

  // 48, 65, 6c, 6c, 6f, 20, 57, 6f, 72, 6c, 64, 21 

  let arb = new ArrayBuffer(5);
  let dv = new DataView(arb);
  dv.setInt8(0, 104);
  dv.setInt8(1, 101);
  dv.setInt8(2, 108);
  dv.setInt8(3, 108);
  dv.setInt8(4, 111);


  // dv.setInt8(0, 48);
  // dv.setInt8(1, 65);
  // dv.setInt8(2, 108);
  // dv.setInt8(3, 108);
  // dv.setInt8(4, 110);
  // dv.setInt8(5, 20);
  // dv.setInt8(6, 57);
  // dv.setInt8(7, 110);
  // dv.setInt8(8, 72);
  // dv.setInt8(9, 108);
  // dv.setInt8(10, 64);
  // dv.setInt8(11, 21);
  console.log(new Uint8Array(arb).toString().toLowerCase())

  let f2 = new File([arb], 'myFile2', { type: 'text/plain' });
  let a2 = document.createElement('a');
  let url2 = URL.createObjectURL(f2);
  a2.href = url2;
  a2.download = f2.name;
  a2.textContent = ` Download ${f2.name}`;
  document.querySelector('main').append(a2);
};

const img = document.getElementById('picBlob');

function onload() {

  console.log('loaded')

      // console.log('image!');

     
      const btn = document.getElementById('btnImg');
      const pre = document.getElementById('outbox');

      const xhr = new XMLHttpRequest();

      xhr.open('GET', './img/fk-logo.png', true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function(ev) {
        const blob = new Blob([xhr.response], { type: 'image/png' });
        const url = URL.createObjectURL(blob);

        console.log(url)

        img.src = url;
      }


      xhr.send()
      
    }
    function createImgBlob() {
      console.log('create img!')

      onload()
    }