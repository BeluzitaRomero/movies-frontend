const API_KEY = "7271771e6043ab63ad877def2bc41391";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;

// Función para obtener las películas populares
async function getPopularMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
}

// Función para mostrar las películas en el DOM
function displayMovies(movies) {
  console.log(movies, "MOVIES");
  const moviesContainer = document.getElementById("peliculas-container");

  movies.forEach((movie) => {
    const movieItem = document.createElement("article");
    movieItem.classList.add("card");

    const movieDetailLink = document.createElement("a");
    movieDetailLink.classList.add("text-decoration-none", "text-dark");
    movieDetailLink.href = `pages/detalle.html?id=${movie.id}`;

    const movieImg = document.createElement("img");
    movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieImg.alt = movie.title;
    movieImg.classList.add("card-img-top");

    movieDetailLink.appendChild(movieImg);
    movieItem.appendChild(movieDetailLink);

    moviesContainer.appendChild(movieItem);
  });
}

//Llamada a la función para obtener y mostrar las películas
getPopularMovies();
