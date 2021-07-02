let demo = document.getElementById("demo");
let btn = document.getElementById("button1");
let prev = document.getElementById("button2");
let arr = [];

function callit() {
  let a = fetch("https://meme-api.herokuapp.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      demo.src = data.url;
      arr.push(data.url);
      //   console.log(arr);
      //   console.log(data.url)
    });
}

prev.addEventListener("click", () => {
  //   console.log(arr);
  console.log(arr[arr.length - 2]);
  demo.src = arr[arr.length - 2];
});

callit();

btn.addEventListener("click", callit);
