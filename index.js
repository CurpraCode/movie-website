const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-rw");
const links = document.querySelectorAll(".nav-rw li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

const API_KEY = "0d94f61d891c39c0d8ddc956d5ca297b";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY;

axios.get(API_URL).then(function (response) {
  console.log("our data", response);

  const moviesData = response.data.results;
  const trendingMovies = document.querySelector(".movie-img-container");

  let trendingMoviesHTML = "";

  moviesData.forEach(function (item) {
    trendingMoviesHTML += `
      <div class="movie-img-card">
      <img
        src="https://image.tmdb.org/t/p/w342${item.poster_path}"
        alt=""
      />
      
      <h4>${item.title}</h4>
      <p>
      ${item.release_date}<span><i class="fas fa-star"></i>${item.vote_count}</span>
      </p>
    </div>
      `;
  });

  trendingMovies.innerHTML = trendingMoviesHTML;
});
