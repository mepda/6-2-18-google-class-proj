function getTvShow() {
  const searchButton = document.getElementById("search");
  const tvShowName = document.getElementById("tvShow").value;
  let shows = document.getElementById("shows");
  shows.innerHTML = "";
  console.log(tvShowName);
  fetch("http://api.tvmaze.com/search/shows?q=" + tvShowName)
    .then(res => res.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        let node = document.createElement("LI");
        let text = document.createTextNode(json[i].show.name);
        node.appendChild(text);
        shows.appendChild(node);
      }
    });
}

document.addEventListener("keyup", e => {
  event.preventDefault();
  if (e.keyCode === 13) {
    getTvShow();
  }
});
