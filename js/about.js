console.log('about');

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('input-files').addEventListener('change', filesPicked);
  filesDiv = document.querySelector('.files-input-div');

  const fileControl = document.querySelector('.btn__files-input');
  const toggle = document.querySelector('.btn__toggle');
  const picker = document.querySelector('.btn__picker');
  const info = document.querySelector('.btn__info');

  toggle.addEventListener('click', toggleInput);
  picker.addEventListener('click', askForFiles);
  info.addEventListener('click', showFileInfo);


  function filesPicked(ev) {
    ev.preventDefault()
    let input = ev.target;
    let files = input.files;
    console.log({files});

    if(files.length > 0) {
      ev.preventDefault()
      showFileInfo(ev);
      console.log(ev.target)
      console.log({files})
      for(let i = 0; i < files.length; i++) {
        // console.log(files[i].name)ddd
        
         console.log( files[i].name)
         console.log( files[i].lastModifiedDate)
         let cardTitle = document.querySelector('.card__title')
         let cards = document.querySelectorAll('.card.file')
         let cardBody = document.querySelector('.card__body')
         cards.forEach((card) => {
          card.querySelector('.card__title').innerHTML += '<p>' + files[i].name + '</p>';
          card.querySelector('.card__body').innerHTML += '<p>' + files[i].lastModifiedDate + '</p>';
     
         })
      }
      // console.log(ev.target.files.lastModefiedDate)
    }

  }

  function toggleInput(ev) {

    ev.preventDefault()
    filesDiv.classList.toggle('hide');

  }

  function askForFiles(ev) {
    ev.preventDefault();
    const control = document.getElementById('input-files');
    // console.log(control.click())
    control.click()
  }

  function showFileInfo(ev) {

    ev.preventDefault()
    console.log(ev.target)
    const control = document.getElementById('input-files');
    console.log(control.files)
    let selectData = control.files;
    let len = selectData.length;
    for(let i = 0; i < len; i++) {
      let name = selectData[i].name;
      console.log('selected name:', name);
    }
  }

})
