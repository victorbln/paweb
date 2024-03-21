const hobbyItems = document.querySelectorAll(".hobbies ul li");

const hobbyDetails = document.querySelector(".hobby-details");

hobbyItems.forEach((item) => {
  item.addEventListener("click", () => {
    let details;
    switch (item.textContent) {
      case "Reading":
        details =
          "<h2>Reading</h2><p>Reading is one of my favorite pastimes. I love getting lost in a good book and exploring different worlds.</p>";
        break;
      case "Traveling":
        details =
          "<h2>Traveling</h2><p>Traveling is my passion. I enjoy experiencing new cultures, trying different cuisines, and meeting people from all walks of life.</p>";
        break;
      case "Hiking":
        details =
          "<h2>Hiking</h2><p>Hiking allows me to connect with nature and challenge myself physically. There's nothing like reaching the summit of a mountain and enjoying the breathtaking views.</p>";
        break;
      default:
        details = "<h2>No details available</h2>";
    }
    hobbyDetails.innerHTML = details;
  });
});
