const info = [
  {
    id: 1,
    country: "France",
    city: "Paris",
    desc: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "./images/paris.jpg",
  },
  {
    id: 2,
    country: "Japan",
    city: "Tokyo",
    desc: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    image: "./images/tokyo.jpg",
  },
  {
    id: 3,
    country: "Italy",
    city: "Rome",
    desc: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    continent: "Europe",
    food: "Pizza, Pasta",
    place: "Colosseum",
    language: "Italian",
    image: "./images/roma.jpg",
  },
  {
    id: 4,
    country: "Egypt",
    city: "Cairo",
    desc: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    continent: "Africa",
    food: "Koshari, Foul",
    place: "Pyramids",
    language: "Arabic",
    image: "./images/cairo.jpg",
  },
];

let currentIndex = 0;
let currentDest = info[currentIndex];

let citynum = document.querySelector(".cityNum");
let city = document.querySelector(".cityName");
let country = document.querySelector(".country");
let desc = document.querySelector(".desc");
let continent = document.querySelector(".continent");
let food = document.querySelector(".food");
let place = document.querySelector(".place");
let lang = document.querySelector(".lang");
let img = document.querySelector("img");
let cardNum = document.querySelector(".card p");
let previousBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let dots = document.querySelectorAll(".dots span");
let exploreBtn = document.querySelector(".explore");

nextBtn.addEventListener("click", detectNextCity);
previousBtn.addEventListener("click", detectPreviousCity);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    currentDest = info[currentIndex];
    renderDest();
  });
});

function renderDest() {
  citynum.textContent = `0${currentDest.id}`;
  city.textContent = currentDest.city;
  country.textContent = currentDest.country;
  desc.textContent = currentDest.desc;
  continent.textContent = currentDest.continent;
  food.textContent = currentDest.food;
  place.textContent = currentDest.place;
  lang.textContent = currentDest.language;
  cardNum.textContent = `0${currentDest.id}`;
  img.src = currentDest.image;
  dots.forEach((dot) => {
  dot.classList.remove("active");
});
  dots[currentIndex].classList.add("active");
}
function detectNextCity() {
  currentIndex += 1;
  currentIndex = currentIndex % info.length;
  currentDest = info[currentIndex];
  renderDest();
}
function detectPreviousCity() {
  currentIndex -= 1;
  if (currentIndex === -1) {
    currentIndex = info.length - 1;
  }
  currentDest = info[currentIndex];
  renderDest();
}
exploreBtn.addEventListener("click",(()=>{
  alert(`Discover ${currentDest.city} in ${currentDest.country.toUpperCase()}! \n Famous Place: ${currentDest.place}`);
}))