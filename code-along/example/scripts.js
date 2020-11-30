const h1 = document.getElementById("title");

const title = document.querySelector("#title");

console.log(h1, title);

// const divHidden = document.querySelector('div:nth-of-type(2)');
// divHidden.classList.add('hidden');

if (document.body.classList.contains("dark")) {
  alert("Welcome to Dark Mode!");
}

const imageSrcs = [
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/440px-Welchcorgipembroke.JPG",
];

function setRandomImage() {
  const index = Math.floor(Math.random() * imageSrcs.length); // returns a random integer from 0 to 10

  document.querySelector("img").setAttribute("src", imageSrcs[index]);
}
setRandomImage();
