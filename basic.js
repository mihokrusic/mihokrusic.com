document.querySelector("span").addEventListener("mouseenter", function ($event) {
  $event.target.innerText = "Hey!";
});

document.querySelector("span").addEventListener("mouseleave", function ($event) {
  $event.target.innerText = "Hello...";
});
