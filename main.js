let lis = document.querySelectorAll("li");
let allBoxs = document.querySelectorAll(".box");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    toggleBox(li);
  });
});

// Set Color For Each Box
allBoxs.forEach((box) => {
  box.style.backgroundColor = box.dataset.color;
});

function toggleBox(li) {
  allBoxs.forEach((box) => {
    box.style.display = "none";
  });
  if (li.classList.contains("all")) {
    allBoxs.forEach((box) => {
      box.style.display = "flex";
    });
  }
  if (li.classList.contains("web")) {
    allBoxs.forEach((box) => {
      if (box.classList.contains("web")) {
        box.style.display = "flex";
      }
    });
  }
  if (li.classList.contains("graphic")) {
    allBoxs.forEach((box) => {
      if (box.classList.contains("graphic")) {
        box.style.display = "flex";
      }
    });
  }
  if (li.classList.contains("marketing")) {
    allBoxs.forEach((box) => {
      if (box.classList.contains("marketing")) {
        box.style.display = "flex";
      }
    });
  }
}
