const music = new Audio('Tatiana.mp3');
//music.play();





const songs = [
    {
        id: '1',
        songName: `Like You<br>
        <div class="subtitle">Tatiana manaois</div>`,
        poster: "images/1.jpg",
    },
    {
        id: '2',
        songName: `On my Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/2.jpg",
    },
    {
        id: '3',
        songName:` Love Story<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster:"images/3.jpg",
    },
    {
        id: '4',
        songName:` In the stars <br>
        <div class="subtitle">Benson Boone</div>`,
        poster:"images/4.jpg ",
    },
    {
        id: '5',
        songName:` Scars <br>
        <div class="subtitle">Keenan te</div>`,
        poster:"images/5.jpg",
    },
    {
        id: '6',
        songName:` Anyone <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster:"images/6.jpg",
    },
    {
        id: '7',
        songName:` Believe Me <br>
        <div class="subtitle">Johnny Drille</div>`,
        poster:"images/7.jpg",
    },
    {
        id: '8',
        songName:` Calm down <br>
        <div class="subtitle">Rema-Calm-Down-Remix</div>`,
        poster:"images/8.jpg",
    },
    {
        id: '9',
        songName:` Photograph <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster:"images/9.jpg",
    },
    {
        id: '10',
        songName:` Easy on me <br>
        <div class="subtitle">Adele</div>`,
        poster:"images/10.jpg",
    },
    {
        id: '11',
        songName:` Just the Way You Are <br>
        <div class="subtitle">Bruno Mars</div>`,
        poster:"images/11.jpg",
    },
    {
        id: '12',
        songName:` Lift me up <br>
        <div class="subtitle">Rihanna</div>`,
        poster:"images/12.jpg",
    },
    {
        id: '13',
        songName:` Birthday <br>
        <div class="subtitle">Anne marie</div>`,
        poster:"images/13.jpg",
    },
    {
        id: '14',
        songName:` Blank Space <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster:"images/14.jpg",
    },
    {
        id: '15',
        songName:` Burn <br>
        <div class="subtitle">Ellie Goulding</div>`,
        poster:"images/15.jpg",
    },

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
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
        
    })
}

// let fileName;
// let poster_master = document.getElementById('poster_master');
// let title = document.getElementById('title');
// Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         fileName = e.target.id;
//         makeAllPlays();
//         e.target.classList.remove('bi-play-circle-fill');
//         e.target.classList.add('bi-pause-circle-fill');
//         music.src = `audio/${fileName}.mp3`;
//         poster_master = `images/${fileName}.jpg`;
//         music.play();
//     })
// })

let fileName;
let poster_master = document.getElementById('poster_master');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    fileName = e.target.id;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${fileName}.mp3`;
    poster_master.src = `images/${fileName}.jpg`; 
    title.innerHTML = `${getSongTitle(fileName)}<br><div class="subtitle">${getSongArtist(fileName)}</div>`; 
    music.play();
  });
});

function getSongTitle(fileName) {
  if (fileName === '1') {
    return 'Like You';
  } else if (fileName === '2') {
    return 'On My Way';
  } else if (fileName === '3') {
    return 'Love Story';
  } else if (fileName === '4') {
    return 'In the stars';
  } else if (fileName === '5') {
    return 'Scars';
  } else if (fileName === '6') {
    return 'Anyone';
  } else if (fileName === '7') {
    return 'Believe Me';
  } else if (fileName === '8') {
    return 'Calm down';
  } else if (fileName === '9') {
    return 'Photograph';
  } else if (fileName === '10') {
    return 'Easy on me';
  } else if (fileName === '11') {
    return 'Just the Way You Are';
  } else if (fileName === '12') {
    return 'Lift me up';
  } else if (fileName === '13') {
    return 'Birthday';
  } else if (fileName === '14') {
    return 'Blank Space';
  } else if (fileName === '15') {
    return 'Burn';
  }
}

function getSongArtist(fileName) {
  if (fileName === '1') {
    return 'Tatiana Manaois';
  } else if (fileName === '2') {
    return 'Alan Walker';
  } else if (fileName === '3') {
    return 'Talor Swift';
  } else if (fileName === '4') {
    return 'Benson Boone'
  } else if (fileName === '5') {
    return 'Keenan te'
  } else if (fileName === '6') {
    return 'Justin Beiber';
  } else if (fileName === '7') {
    return 'Johnny Drille';
  } else if (fileName === '8') {
    return 'Rema-Calm-Down-Remix';
  } else if (fileName === '9') {
    return 'Ed Sheeran';
  } else if (fileName === '10') {
    return 'Adele';
  } else if (fileName === '11') {
    return 'Bruno Mars';
  } else if (fileName === '12') {
    return 'Rihanna';
  } else if (fileName === '13') {
    return 'Anne marie';
  } else if (fileName === '14') {
    return 'Taylor Swift';
  } else if (fileName === '15') {
    return 'Ellie Goulding';
  } 
}





