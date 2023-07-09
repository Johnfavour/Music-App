const music = new Audio('audio/Tatiana.mp3');
//music.play();


const songs = [
    {
        id: '1',
        songName: `Like You<br>
        <div class="subtitle">Tatiana manaois</div>`,
        poster: "images/tatiana.jpg",
    },
    {
        id: '2',
        songName: `On my Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/alan.jpg",
    },
    {
        id: '3',
        songName:` Love Story<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster:"images/taylor.jpg",
    },
    {
        id: '4',
        songName:` In the stars <br>
        <div class="subtitle">Benson Boone</div>`,
        poster:"images/benson.jpg ",
    },
    {
        id: '5',
        songName:` Scars <br>
        <div class="subtitle">Keenan te</div>`,
        poster:"images/keenan.jpg",
    },
    {
        id: '6',
        songName:` Anyone <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster:"images/justin.jpg",
    },
    {
        id: '7',
        songName:` Believe Me <br>
        <div class="subtitle">Johnny Drille</div>`,
        poster:"images/johnny.jpg",
    },
    {
        id: '8',
        songName:` Bazaar <br>
        <div class="subtitle">Nicki Minaj</div>`,
        poster:"images/nicki.jpg",
    },
    {
        id: '9',
        songName:` Photograph <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster:"images/ed sheeran.jpg",
    },
    {
        id: '10',
        songName:` Easy on me <br>
        <div class="subtitle">Adele</div>`,
        poster:"images/adele.jpg",
    },
    {
        id: '11',
        songName:` Just look up <br>
        <div class="subtitle">Ariana Grande</div>`,
        poster:"images/ariana.jpg",
    },
    {
        id: '12',
        songName:` Lift me up <br>
        <div class="subtitle">Rihanna</div>`,
        poster:"images/Rihanna.jpg",
    },
    {
        id: '13',
        songName:` Birthday <br>
        <div class="subtitle">Anne marie</div>`,
        poster:"images/Anne.jpg",
    },
    {
        id: '14',
        songName:` Blank Space <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster:"images/taylorswift.jpg",
    },
    {
        id: '15',
        songName:` Invasion of privacy <br>
        <div class="subtitle">Cardi B</div>`,
        poster:"images/cardi.webp",
    },

    // Add more song objects here
];

Array.from(document.getElementsByClassName('songitem')).forEach((element, i) => {
    if (i < songs.length) {
        element.getElementsByTagName('img')[0].src = songs[i].poster;
        element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});



const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlists')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
        
    })
}

let index = 0;
let poster_master = document.getElementById('poster_master');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlists')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        music.play();
    })
})






