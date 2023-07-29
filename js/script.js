const tagButtons = document.querySelectorAll(".tags .tag");
const cardImages = document.querySelectorAll(".card-image");

tagButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    
    // Remove the "active" class from all tag buttons first
    tagButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (!isActive) {
      this.classList.add("active");
    }

    const selectedTag = isActive ? "" : this.innerText.toLowerCase();

    cardImages.forEach((card) => {
      const tagElement = card.querySelector(".tag");
      const tag = tagElement ? tagElement.innerText.toLowerCase() : "";
      
      if (selectedTag === "" || tag === selectedTag) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
