// async function getsongs()
// {
//     let a= await fetch("http://127.0.0.1:3000/songs/");
//     let response = await a.text();
//     console.log(response);
//     let div=document.createElement("div");
//     div.innerHTML=response;
//     // let tds=div.getElementsByTagName("td");
//     // console.log(tds);
//       let as=div.getElementsByTagName("a");
//       let song=[]
//       for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if(element.href.endsWith(".mp3")){
//             song.push(element.href.split("/songs/")[1]);
//         }
        
//       }
//      return song
// }
// async function main ()
// {
//     let songs=await getsongs();
//     console.log(songs)
//     let songUL=document.getElementsByTagName("ul")[0];
// for (const song of songs) {
//   songUL.innerHTML=songUL.innerHtml + `<li> ${song.replaceAll("%20" , " ")} </li>` ;
// }
    
//     var audio= new Audio(songs[0]);
//     audio.play();

//     audio.addEventListener("loadeddata",()=>
//     {
//       let duration=audio.duration;
//       console.log(duration);
//     })
// }
 
// main();
let index = 0;
let audioPlay = new Audio("../songs/1.mp3");
let masterSong = document.getElementById("masterClassEdit");
let masterPlay = document.getElementById("masterPlay"); // No need for "#" in getElementById
let myProgressBar = document.getElementById("myProgressBar");

let masterPause = document.getElementById("masterPause"); // No need for "#" in getElementById
let songItems=Array.from(document.getElementsByClassName("common"));

let songs = [ // Fixed the array name to "songs" (plural) for clarity
  { songName: "raba", filePath: "../songs/2.mp3", coverPath: "" },
  { songName: "ishaq", filePath: "../songs/3.mp3", coverPath: "" },
  { songName: "husn", filePath: "../songs/4.mp3", coverPath: "" },
  { songName: "rajput surma", filePath: "../songs/5.mp3", coverPath: "" },
  //  { songName: "lassi", filePath: "../songs/5.mp3", coverPath:"" },
  // { songName: "2g", filePath: "../songs/5.mp3", coverPath:"" },
];
songItems.forEach((element,i) => {
  // console.log(element,i)
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
  
});

// Event listener for play/pause button
masterPlay.addEventListener('click', () => {
  if (audioPlay.paused || audioPlay.currentTime <= 0) {
    audioPlay.play();
    masterPlay.classList.remove('fr');
    masterPlay.classList.add('tr');}
  // } else {
  //   audioPlay.pause();
  //   masterPlay.classList.remove('fa-pause');
  //   // masterPlay.classList.add('fa-play');
  // }
});
masterPause.addEventListener('click', () => {
  if (audioPlay.played || audioPlay.currentTime > 0) {
    audioPlay.pause();

    masterPlay.classList.remove('tr');
    masterPlay.classList.add('fr');
  // } else {
  //   audioPlay.pause();
  //   masterPlay.classList.remove('fa-pause');
  //   // masterPlay.classList.add('fa-play');
  }
});

// Event listener for updating progress bar
audioPlay.addEventListener("timeupdate", () => {
  // Update progress bar
  let progress = parseInt((audioPlay.currentTime / audioPlay.duration) * 100);
  myProgressBar.value = progress;
});

// Update the song when clicking on the progress bar
myProgressBar.addEventListener("change", () => {
  audioPlay.currentTime = myProgressBar.value * audioPlay.duration / 100;
});
// const makeAllPlay= ()=>
// {
//   Array.from(document.getElementsByClassName("play")).forEach((element)=>
//   {
//     e.target.classList.remove("fr")
    
//   })
  
// }
Array.from(document.getElementsByClassName("play")).forEach((element)=>
{
      element.addEventListener("click",(e)=>
      {
          console.log(e.target);
          // makeAllPlay();
         index=parseInt(e.target.id);
         audioPlay.src=(`../songs/${index+1}.mp3`);
         masterSong.innerText=songs[index-1].songName;
          audioPlay.currentTime=0;
          audioPlay.play();
          masterPlay.classList.add('tr');
    masterPlay.classList.remove('fr');
      })
      
})
document.getElementById("next").addEventListener('click',()=>
{
  if(index>=4)
  {
    index=0;
  }
  else{
    index+=1;
  }
  audioPlay.src=(`../songs/${index+1}.mp3`);
  masterSong.innerText=songs[index-1].songName;
  audioPlay.currentTime=0;
  audioPlay.play();
  masterPlay.classList.add('tr');
masterPlay.classList.remove('fr');
})
document.getElementById("prev").addEventListener('click',()=>
{
  if(index<=0)
  {
    index=0;
    
  }else
  {
    index-=1;
  }
  audioPlay.src=(`../songs/${index-1}.mp3`);
  masterSong.innerText=songs[index].songName;
  audioPlay.currentTime=0;
  audioPlay.play();
  masterPlay.classList.add('tr');
masterPlay.classList.remove('fr');
})
