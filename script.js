const music = new Audio('Tatiana.mp3');
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
        songName: `Alan walker-Fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/alan.jpg",
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

// create Array
// const songs = [
//     {
//         id:'1',
//         songName:`Helplessly<br>
//         <div class="subtitle">Tatiana manaois</div>`,
//         poster: "images/tatiana.jpg", //where i can change the image
//     },
//     {
//         id:'2',
//         songName:`Alan walker-Fade<br>
//         <div class="subtitle">Alan Walker</div>`,
//         poster: "images/alan.jpg",
//     },
//     //all the ids(from 3-15) should be added above
// ]

// Array.from(document.getElementsByClassName('songitem')).forEach((element, i)=>{
//     element.getElementsByTagName('img')[0].src = songs[i].poster;
//     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// })

// let masterPlay = document.getElementById('masterPlay');

// masterPlay.addEventListener('click',()=>{
//     if (music.paused || music.currentTime >=0) {
//         music.play();
//     } else {
//         music.pause();
//     }
// } )







