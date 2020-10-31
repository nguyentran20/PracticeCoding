const reviews = [
  {
    id:1,
    name: "Susan Smith",
    job: "Web developer",
    img:"./person1.jfif",
    text: "December 2018 - I was getting 5–10 users every day visiting my website. I thought it would be awesome if I can get 100 visitors every day."
  },
  {
    id:2,
    name: "Peter Pan",
    job: "Project Manager",
    img:"./person2.jfif",
    text: "April 2019 - More wish was granted, but I was not very happy. Getting 100 users per day was only getting me 0.2 USD per day as Adsense earning. I thought, 1000 visitors per day would be mind-blowing."
  },
  {
    id:3,
    name: "Rahul Shetty",
    job: "Tester",
    img:"./person3.jfif",
    text: "October 2019 - I joined 100+ Facebook groups, made 5 different profiles, and started posting my blog link extensively wherever I can. I also joined Pinterest, twitter, and started spending 1–2 hours promoting my blog. I started getting 1000 visitors per day, but my average CPC went down and I was not even making 1 USD per day as Adsense earning."
  },
  {
    id:4,
    name: "Elon Musk",
    job: "Entrepreuner",
    img:"./person4.jfif",
    text: "October 2020 - I am now getting more than 10,000 visitors per day. Almost all my traffic is organic, meaning I do not spend time promoting my blog, rather I spend that time in writing quality content."
  },
  {
    id:5,
    name: "Bill Gate",
    job: "Entrepreuner",
    img:"./person5.jfif",
    text: "October 2020 - I am now getting more than 10,000 visitors per day. Almost all my traffic is organic, meaning I do not spend time promoting my blog, rather I spend that time in writing quality content."
  }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0;

// show person based on item

function showPerson() {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  }
  showPerson();
})

//show previous person
prevBtn.addEventListener('click',function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length-1;
  }
  showPerson();
})

//show random person
randomBtn.addEventListener('click', function() {
  currentItem = randomNumber(reviews.length);
  showPerson();
})

function randomNumber(reviewsLength) {
  return Math.floor(Math.random()*reviewsLength);
}
