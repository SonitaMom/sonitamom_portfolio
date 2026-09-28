fetch("./src/Components/Home.html")
  .then((Respone) => Respone.text())
  .then((data) => {
    document.getElementById("hero").innerHTML = data;
  });

fetch("./src/Components/About.html")
  .then((Respone) => Respone.text())
  .then((data) => {
    document.getElementById("about").innerHTML = data;

    // fillTrack(document.getElementById("trackTop"), topRow);
    // fillTrack(document.getElementById("trackBottom"), bottomRow);

    initSkills();
  });

fetch("./src/Components/Projects.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("projects").innerHTML = data;

    document.querySelector("#projects .project-cards").innerHTML = projects
      .map((data, index) => project(data, index))
      .join("");
  });

fetch("./src/Components/Contact.html")
  .then((Respone) => Respone.text())
  .then((data) => {
    document.getElementById("contact").innerHTML = data;
  });

fetch("./src/Components/Footer.html")
  .then((Respone) => Respone.text())
  .then((data) =>{
    document.getElementById("footer").innerHTML = data;
  });

  
// scrollReveal();
