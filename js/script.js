const audio = document.querySelector('audio');
const body = document.body;
audio.addEventListenter('play', ()=> {
    ReportBody.classList.add('play-music');
});
audio.addEventListenter('pause', ()=>{
    body.classList.remove('play-music');
});