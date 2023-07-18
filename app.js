const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const paly = document.querySelector("#controls #paly");
const next = document.querySelector("#controls #next");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "image/" + music.image;
    audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
    audio.play();
});
