// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

// .catch(error => console.log(error));

// let setup = document.getElementById("setup");
// let punchline = document.getElementById("punchline");

// const getJoke = async() => {
//     try{
//         const response = await fetch("https://official-joke-api.appspot.com/random_joke")
//         const data = await response.json();

//         console.log(data);
//         setup.innerText = data.setup;

//         setTimeout(() => {
//             punchline.innerText =  data.punchline;
//         }, 2000);

//     } catch(error) {
//      console.log(error);

//     }

// }

// getJoke();

// const getDogImg = async () => {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json();

//     document.getElementById("DogImg").src = data.message;
//   } catch (error) {
//     console.log(error);
//   }
// };

// getDogImg();

// // get random cat image and add event to it, when you click it will change.

// const btn = document.getElementById("CatId");
// const getCatImg = async () => {
//   try {
//     const response = await fetch(
//       "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
//     );
//     const data = await response.json();

//     document.getElementById("CatImg").src = data[0].url;
//   } catch (error) {
//     console.log(error);
//   }
// };

// btn.addEventListener("click", getCatImg);

// getCatImg();

// let productContainer = document.querySelector("#product-container");

// const getProducts = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//     data.forEach((product) => {
//       productContainer.innerHTML += `
//             <div class="card">
//                 <img src= ${product.image} alt=${product.title}> 
//                 <div class="card-body">
//                     <h3>${product.title}</h3>
//                     <p>${product.discription}</p>
//                     <p class="price">$${product.price}</p>
//                 </div>
//             </div>
//     `;
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };

// getProducts();

let movies = document.querySelector (".movie-container");

async function getMovies() {
    try{
        const response = await fetch(
            // "https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies",
       {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":"095a9d7cddmsh7f55c34eff26637p1237fajsne2689a178085",
            "X-RapidAPI-Host":"imdb236.p.rapidapi.com"
        }

       } 
    );
    const data = await response.json();
    console.log(data);
    data.forEach((movie) => {
      movies.innerHTML += `
         <div class="card" data-aos="zoom-in-up" data-aos-duration="2000">
            <img src=${movie.primaryImage} alt=${movie.originalTitle}>
            <div class="card-body">
                <h3> ${movie.originalTitle}</h3>
                <p>${movie.description}</p>
                <div class="status">
                    <p><strong>Rated: </strong> ${movie.contentRating}</p>
                    <p><strong>Rated: </strong> ${movie.genres.join(",")}</p>
                </div>
            </div>
        </div>
     `;
})
    } catch(error) {
        console.log(error);
    }
}

// getMovies();
var typed = new Typed("#typed", {
    strings: ["Welcome to the Movie API", "Click on the button to get the most popular movies"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

AOS.init();
