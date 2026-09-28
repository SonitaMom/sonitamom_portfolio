const projects = [
  {
    images: [
      {
        image: "./src/assets/project/Matchinggame.webp",
        imageDesc: "Matching Game",
      },
      {
        image: "./src/assets/project/MatchingGame/GameDashboard.webp",
        imageDesc: "Matching Game Dashboard",
      },
      {
        image: "./src/assets/project/MatchingGame/Level1.webp",
        imageDesc: "Level1",
      },
      {
        image: "./src/assets/project/MatchingGame/Level2.webp",
        imageDesc: "Level2",
      },
      {
        image: "./src/assets/project/MatchingGame/Level3.webp",
        imageDesc: "Level3",
      },
      {
        image: "./src/assets/project/MatchingGame/Level4.webp",
        imageDesc: "Level4",
      },
      {
        image: "./src/assets/project/MatchingGame/Level5.webp",
        imageDesc: "Level5",
      },
      {
        image: "./src/assets/project/MatchingGame/Level6.webp",
        imageDesc: "Level6",
      },
      {
        image: "./src/assets/project/MatchingGame/winning.webp",
        imageDesc: "wining",
      },
      {
        image: "./src/assets/project/MatchingGame/Loosing.webp",
        imageDesc: "Loosing",
      },
    ],
    projectName: "C# Matching Game System",
    Desc: "A fun C# matching game that tests memory by matching pairs of images, including fruits, desserts, vegetables, abd more.",
    featureTitle: "Main feature : ",
    featureList: [
      "Memory-matching gameplay",
      "Multiple image categories",
      "Timer and score tracking",
      "Restart game options",
      "Simple and interact UI",
    ],
  },
  {
    images: [
      {
        image: "./src/assets/project/SmartOrderSystem.webp",
        imageDesc: "Smart Order System",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/Login.webp",
        imageDesc: "Login Form",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/adminLogin.webp",
        imageDesc: "Admin Login",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/adminDashboard.webp",
        imageDesc: "Admin Dashboard",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/analyAdmin.webp",
        imageDesc: "Analy System",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/StaffLogin.webp",
        imageDesc: "Login Form",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/Staffdashboard1.webp",
        imageDesc: "Staff Dashboard",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/StaffDashboard.webp",
        imageDesc: "Staff Dashboard",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/customerLogin.webp",
        imageDesc: "Customer Login",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/orderItems.webp",
        imageDesc: "Order Items",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/payment.webp",
        imageDesc: "Payment",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/invoice.webp",
        imageDesc: "Invoice",
      },
      {
        image: "./src/assets/project/SmartOrderManagement/recipt.webp",
        imageDesc: "Recipt",
      },
    ],
    projectName: "Smart Order Management System",
    Desc: "A smart C# food ordering system that makes it easy for customers to browse food, place orders, and track their orders.",
    featureTitle: "Main feature : ",
    featureList: [
      "Easy food ordering",
      "Login and account management",
      "Customer dashboard",
      "Staff dashboard",
      "Admin dashboard",
      "Database management",
    ],
  },
  {
    images: [
      {
        image: "./src/assets/project/Naturebage.webp",
        imageDesc: "Nature Bag",
      },
      {
        image: "./src/assets/project/NatureBag/NatureBage.webp",
        imageDesc: "Nature Bag",
      },
      {
        image: "./src/assets/project/NatureBag/naturebag1.webp",
        imageDesc: "Nature Bag",
      },
      {
        image: "./src/assets/project/NatureBag/naturebag2.webp",
        imageDesc: "Nature Bag",
      },
    ],
    projectName: "Nature Bag",
    Desc: "Nature Bag is an eco-friendly bag made from recycled plastic bottles.",
    featureTitle: "Main feature : ",
    featureList: [
      "Eco-firendly design",
      "Mage from recycled plastic bottles",
      "Reusable and practical",
      "Sustainable product",
      "Designer for selling and everyday use",
    ],
  },
  {
    images: [
      {
        image: "./src/assets/project/Smartattendancesystem.webp",
        imageDesc: "Smart Attendance System",
      },
      {
        image: "./src/assets/project/ScanFace/scan.webp",
        imageDesc: "Face Scanning",
      },
      {
        image: "./src/assets/project/ScanFace/attendance.webp",
        imageDesc: "CSV Attendance",
      },
      {
        image: "./src/assets/project/ScanFace/excel.webp",
        imageDesc: "Excel attendance",
      },
    ],
    projectName: "Smart Attendance System",
    Desc: "Smart Attendance System is a Python-based system that uses face scanning to automatically record attendance.",
    featureTitle: "Main feature : ",
    featureList: [
      "Face scanning",
      "Automatic attendance",
      "Face recognition",
      "Time recording",
      "Attendance recording",
    ],
  },
  {
    images: [
      {
        image: "./src/assets/project/ExploreCambodia.webp",
        imageDesc: "Explore Cambodia",
      },
    ],
    projectName: "Explore Cambodia",
    Desc: "Explore Cambodia is a tourism website that helps visitors discover Cambodia’s destinations, tours, and travel services.",
    featureTitle: "Main feature : ",
    featureList: [
      "Home - Introduces the website and popular tours.",
      "About - Information about Explore Cambodia.",
      "Blog - Travel information about Siem Reap, Kampot, and Mondulkiri.",
      "Service - Provides tour and travel services.",
      "Contact - Allows visitors to contact the team.",
    ],
  },
];

function project(data, index) {
  const imageOrder = index % 2 === 0 ? "order-md-1" : "order-md-2";
  const contentOrder = index % 2 === 0 ? "order-md-2" : "order-md-1";

  return `
  
   <div class="project-card row align-items-center">
      <div class="project-img col-md-6 ${imageOrder}">
        <div class="project-img-wrap" tabindex="0" role="button" aria-haspopup="dialog" onClick="openProjectModal(${index})"
          onkeydown="if(event.key==='Enter' || event.key===' ') {event.preventDefault(); openProjectModal(${index});}">
          <img src="${data.images[0].image}" alt="${data.images[0].imageDesc}">
          <span class="view-project">View Project</span>
        </div>
      </div>
      <div class="project-content col-md-6 ${contentOrder}">
        <h4 class="text-capitalize">${data.projectName}</h4>
        <p>${data.Desc}</p>
 
        <div class="project-feature">
          <p>${data.featureTitle}</p>
          <ul class="feature-list">
            ${data.featureList.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
    `;
}

function openProjectModal(index) {
  const projectData = projects[index];

  const modal = document.getElementById("projectModal");

  const hero = document.getElementById("projectModalHero");

  const title = document.getElementById("projectModalTitle");

  const thumbnails = document.getElementById("projectModalThumbnails");

  /* Project title */
  title.textContent = projectData.projectName;

  /* First image */
  hero.src = projectData.images[0].image;

  hero.alt = projectData.images[0].imageDesc;

  /* Clear old thumbnails */
  thumbnails.innerHTML = "";

  /* Create thumbnails */
  projectData.images.forEach((image, imageIndex) => {
    const thumbnail = document.createElement("button");

    thumbnail.type = "button";

    thumbnail.className = "project-modal-thumb";

    if (imageIndex === 0) {
      thumbnail.classList.add("active");
    }

    const img = document.createElement("img");

    img.src = image.image;

    img.alt = image.imageDesc;

    thumbnail.appendChild(img);

    thumbnail.addEventListener("click", () => {
      /* Change large image */
      hero.src = image.image;

      hero.alt = image.imageDesc;

      /* Change active thumbnail */
      document.querySelectorAll(".project-modal-thumb").forEach((thumb) => {
        thumb.classList.remove("active");
      });

      thumbnail.classList.add("active");
    });

    thumbnails.appendChild(thumbnail);
  });

  /* Open modal */
  modal.classList.add("show");

  document.body.style.overflow = "hidden";
}

// document.getElementById("projectCards").innerHTML = projects
//   .map((data, index) => project(data, index))
//   .join("");

function closeProjectModal() {
  const modal = document.getElementById("projectModal");

  modal.classList.remove("show");

  document.body.style.overflow = "";
}

/* Click outside modal */
document.addEventListener("click", (event) => {
  const modal = document.getElementById("projectModal");

  if (event.target === modal) {
    closeProjectModal();
  }
});

/* ESC key */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});
