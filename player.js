const togglespinner = displaystyle => {
    document.getElementById('spinner').style.display = displaystyle;
}

const togglespinnerdisplay = displaystyle => {
    document.getElementById('allplayers').style.display = displaystyle;
}

const toggleprofile = displaystyle => {
    document.getElementById('playerdetail').style.display = displaystyle;
}
const error = displaystyle => {
    document.getElementById('error').style.display = displaystyle;
}


const getplayer = () => {
    let inputfield = document.getElementById('getplayer')
    searchplayer = inputfield.value;
    console.log(searchplayer);
    // toggleprofile('none');
    togglespinner('block');
    togglespinnerdisplay('none');
    inputfield.value = '';
    let url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchplayer}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayplayer(data.player));
}

const displayplayer = (players) => {
  console.log(players)

  let searchplayer = document.getElementById('searchplayers');
  searchplayer.textContent = ''
  if(!players){
      error('block');
      togglespinner('none');
  }
  
  players?.forEach(allplayers => {
      console.log(allplayers.strPlayer);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `<div onclick="displayinfo(${allplayers.idPlayer})" class="card" style="width: 18rem;">
      <img src="${allplayers.strThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${allplayers.strPlayer}</h5>
        <p class=" card-text">${allplayers.strDescriptionEN.slice(0,100)}...</p>
       
      </div>
    </div>`;

    searchplayer.appendChild(div);
    // toggleprofile('none');
    togglespinner('none');
    togglespinnerdisplay('block');
    error('none');
  });

 
}


const displayinfo = (detail) => {
    togglespinner('block');
     let url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${detail}`
     fetch (url)
     .then(res => res.json())
     .then(data => displayall(data.players[0]))
}

const displayall = playersall =>{
 console.log(playersall)
 const playerdetail = document.getElementById('playerdetail')
 playerdetail.textContent = '';
 let div = document.createElement('div');
 div.classList.add('card');
 div.innerHTML = ` <img src="${playersall.strThumb}" class="card-img-top" alt="...">
 <div class="card-body">
     <h5 class="card-title">${playersall.strPlayer}</h5>
     <p class="card-text">${playersall.strDescriptionEN}</p>
     <a href="${playersall.strFacebook}" class="btn btn-primary">Go for tutorials</a>
 </div>`
 playerdetail.appendChild(div);
 togglespinner('none');
 togglespinnerdisplay('none')
}