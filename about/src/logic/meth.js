function showSection() {
  
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));
  
  let id = window.location.hash.substring(1);
  
  if (id) {
    document.getElementById(id).classList.add("active");
  }
}

window.onload = showSection;

window.onhashchange = showSection;