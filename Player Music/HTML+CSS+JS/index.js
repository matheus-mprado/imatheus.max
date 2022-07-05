let isPlaying = false;
let currentMusic = 1;
let isShuffling = false;
let isMuted = false;

//Image Bg
const imageMusic = document.getElementById('image-music');

//Buttons
const buttonPlay = document.getElementById('play-music');
const buttonNextMusic = document.getElementById('play-nextMusic');
const buttonPrevMusic = document.getElementById('play-prevMusic');
const buttonShuffling = document.getElementById('shuffling')

//Icons
const iconPlaying = document.getElementById('play-music-icon')
const iconMute = document.getElementById('mute-music-icon')

//Audio
const audio = document.getElementById('audio-player')

//Texts
const nameMusic = document.getElementById('name-music');
const nameArtist = document.getElementById('name-artist');


const myMusics = [
    {
        id: 1,
        name: "Baile da Serra",
        artist: "Dj Nattan, Barrao, LIT UP",
        song: 'baileDaSerra.mp3',
        bg: 'baileDaSerra.png'
    },
    {
        id: 2,
        name: "Fim de Semana No Rio",
        artist: 'Teto',
        song: 'fimDeSemanaNoRio.mp3',
        bg: 'fimDeSemanaNoRio.jpg'
    },
    {
        id: 3,
        name: "Fim de Semana No Rio3",
        artist: 'Teto',
        song: 'fimDeSemanaNoRio.mp3',
        bg: 'fimDeSemanaNoRio.jpg'
    },
    {
        id: 4,
        name: "Fim de Semana No Rio4",
        artist: 'Teto',
        song: 'fimDeSemanaNoRio.mp3',
        bg: 'fimDeSemanaNoRio.jpg'
    }
]

function setCurrentMusic(id) {
    let [music] = myMusics.filter(item => item.id === id)

    currentMusic = music.id;

    imageMusic.style.backgroundImage = `url(./assets/images/bg/${music.bg})`

    nameMusic.innerText = music.name
    nameArtist.innerText = music.artist

    audio.src = `./assets/songs/${music.song}`
}

function toggleIsPlaying() {
    if (isPlaying) {
        playMusic()
    } else {
        pauseMusic()
    }
    isPlaying = !isPlaying;
}

function playMusic() {
    audio.play();
    iconPlaying.src = "./assets/images/icons/pause-music.svg"
}

function pauseMusic() {
    audio.pause();
    iconPlaying.src = "./assets/images/icons/play-music.svg"
}

function nextMusic() {
    playMusic()

    if (isShuffling) {
        shuffling()
    } else if (currentMusic + 1 > myMusics.length) {
        currentMusic = 1;
    } else {
        currentMusic += 1
    }
    setCurrentMusic(currentMusic)
}

function shuffling() {
    const randomMusic = Math.floor(Math.random() * myMusics.length + 1)
    currentMusic = randomMusic;
}

function toggleShuffling() {
    isShuffling = !isShuffling;
}

function prevMusic() {
    playMusic()
    if (currentMusic - 1 > 0) {
        currentMusic -= 1;
    } else {
        currentMusic = myMusics.length
    }
    setCurrentMusic(currentMusic)
}

function muteMusic() {
    audio.muted = isMuted;
    if (isMuted) {
        iconMute.src = "./assets/images/icons/mute-music-active.svg"
    } else {
        iconMute.src = "./assets/images/icons/mute-music.svg"
    }
    isMuted = !isMuted

}

function app() {
    audio.autoplay = true
    audio.muted = isMuted;
    setCurrentMusic(currentMusic)
}

app()