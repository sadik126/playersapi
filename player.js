const getplayer = () => {
    let inputfield = document.getElementById('getplayer')
    searchplayer = inputfield.value;
    console.log(searchplayer);
    inputfield.value = '';
    let url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchplayer}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayplayer(data.player));
}

const displayplayer = (players) => {
  console.log(players)

  let searchplayer = document.getElementById('searchplayers');
  players.forEach(allplayers => {
      console.log(allplayers.strPlayer);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `<div class="card" style="width: 18rem;">
      <img src="${allplayers.strThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${allplayers.strPlayer}</h5>
        <p class=" card-text">${allplayers.strDescriptionEN.slice(0,100)}...</p>
       
      </div>
    </div>`;

    searchplayer.appendChild(div);
  });
}