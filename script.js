const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

showJoke();

jokeBtn.addEventListener("click", showJoke);

function showJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerHTML = data.joke));
}
