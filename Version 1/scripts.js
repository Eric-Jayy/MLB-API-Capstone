///fc4f301dc94d4384bec90f7d17d76c6e

const team = "chw"

const url = "https://api.sportsdata.io/v3/mlb/scores/json/Players/{team}?key=fc4f301dc94d4384bec90f7d17d76c6e"

fetch(url)
.then(response => response.json())
.then(json => console.log(json.type))
.catch(error => console.log(error))