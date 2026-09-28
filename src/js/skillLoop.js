const skills = [
  { name: "HTML", image: "./src/assets/html.webp" },
  { name: "Figma", image: "./src/assets/figma.webp" },
  { name: "C#", image: "./src/assets/c-sharp.webp" },
  { name: "Postgre", image: "./src/assets/pastgre.webp" },
  { name: "Bootstrap", image: "./src/assets/bootstrap.webp" },
  { name: "CSS", image: "./src/assets/css-3.webp" },
  { name: "Git", image: "./src/assets/social.webp" },
  { name: "PHP", image: "./src/assets/programing.webp" },
  { name: "GitHub", image: "./src/assets/github.webp" },
  { name: "Java", image: "./src/assets/java.webp" },
  { name: "JavaScript", image: "./src/assets/js-file.webp" },
  { name: "Python", image: "./src/assets/python.webp" },
];

function createSkill(skill) {
  const item = document.createElement("div");

  item.className = "skill-item";

  item.innerHTML = `
    <div class="icon-box">
      <img src="${skill.image}" alt="${skill.name}">
    </div>
    <span class="label">${skill.name}</span>
  `;

  return item;
}

function initSkills() {
  const trackTop = document.getElementById("trackTop");
  const trackBottom = document.getElementById("trackBottom");

  if (!trackTop || !trackBottom) {
    console.error("Skills: trackTop or trackBottom not found");
    return;
  }

  const topSkills = skills.slice(0, 6);
  const bottomSkills = skills.slice(6, 12);

  trackTop.innerHTML = "";
  trackBottom.innerHTML = "";

  // Duplicate each row.
  // This is what makes the infinite loop seamless.
  [...topSkills, ...topSkills].forEach((skill) => {
    trackTop.appendChild(createSkill(skill));
  });

  [...bottomSkills, ...bottomSkills].forEach((skill) => {
    trackBottom.appendChild(createSkill(skill));
  });

  console.log("Skills loaded");
}
