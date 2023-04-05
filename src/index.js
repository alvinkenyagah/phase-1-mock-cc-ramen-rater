document.addEventListener("DOMContentLoaded", () => {
  const getRamenData = async () => {
    const response = await fetch("http://localhost:3001/ramens");
    const ramens = await response.json();
    return ramens;
  };

  const displayRamenImages = (ramens) => {
    const ramenMenu = document.querySelector("#ramen-menu");

    ramens.forEach((ramen) => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.className = "ramen-img";
      ramenMenu.appendChild(img);
    });
  };

  const displayRamenDetails = (e, ramens) => {
    if (e.target.className === "ramen-img") {
      const clickedImg = e.target.src;
      for (const ramen of ramens) {
        if (`.${clickedImg.substring(21)}` === ramen.image) {
          const name = document.querySelector("h2.name");
          name.textContent = ramen.name;

          const restaurant = document.querySelector("h3.restaurant");
          restaurant.textContent = ramen.restaurant;

          const rating = document.querySelector("#rating-display");
          rating.textContent = ramen.rating;

          const comment = document.querySelector("#comment-display");
          comment.textContent = ramen.comment;
        }
      }
    }
  };

  const addNewRamen = (e) => {
    e.preventDefault();

    const newRamenImage = document.querySelector("#new-ramen input#new-image");
    const newRamenName = document.querySelector("#new-ramen input#new-name");
    const newRamenRestaurant = document.querySelector(
      "#new-ramen input#new-restaurant"
    );
    const newRamenRating = document.querySelector(
      "#new-ramen input#new-rating"
    );
    const newRamenComment = document.querySelector(
      "#new-ramen input#new-comment"
    );

    const newImg = document.createElement("img");
    newImg.src = newRamenImage.value;
    newImg.className = "ramen-img";

    const ramenMenu = document.querySelector("#ramen-menu");
    ramenMenu.appendChild(newImg);
  };

  // Get data and display images on load
  getRamenData().then((ramens) => displayRamenImages(ramens));

  // Add click event to display details of clicked image
  const ramenMenu = document.querySelector("#ramen-menu");
  ramenMenu.addEventListener("click", async (e) => {
    const ramens = await getRamenData();
    displayRamenDetails(e, ramens);
  });

  // Add submit event to add new ramen
  const newRamenForm = document.querySelector("#new-ramen");
  newRamenForm.addEventListener("submit", addNewRamen);
});
