const projects = [
  {
    image: "assest/image/project/the-fumes.webp",
    title: "The Fumes",
    link: "https://www.shop.detailingdevils.com/the-fumes/",
  },
  {
    image: "assest/image/project/devils-clothing.webp",
    title: "",
    link: "https://www.shop.detailingdevils.com/devils-clothing/",
  },
  {
    image: "assest/image/project/shop-luminor.webp",
    title: "",
    link: "https://www.shop.lumilor.co.in/",
  },
  {
    image: "assest/image/project/super-wipes.webp",
    title: "",
    link: "https://www.shop.detailingdevils.com/super-wipes/",
  },
  {
    image: "assest/image/project/devils-custom.webp",
    title: "",
    link: "https://www.devilscustoms.com/",
  },
  {
    image: "assest/image/project/araba-cookis.webp",
    title: "",
    link: "",
  },
  {
    image: "assest/image/project/araba-coffe.webp",
    title: "",
    link: "https://www.arabacoffee.com/",
  },
  {
    image: "assest/image/project/dd-site.webp",
    title: "",
    link: "",
  },
  {
    image: "assest/image/project/mscreationonline.webp",
    title: "",
    link: "https://www.mscreationonline.com/",
  },
  {
    image: "assest/image/project/datagami.webp",
    title: "",
    link: "https://www.datagami.in/",
  },
  {
    image: "assest/image/project/sparklineworkforce.webp",
    title: "",
    link: "https://www.sparklineworkforce.in/",
  },
  {
    image: "assest/image/project/investo-advice.webp",
    title: "",
    link: "https://investoadvice.com/",
  },
];

const projectList = document.getElementById("project-list");

projects.forEach((project) => {
  projectList.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="project-card">
        <div class="project-card-img">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="text-center mt-3">
          <a href="${project.link}" target="_blank">
            Live View
          </a>
        </div>
      </div>
    </div>
  `;
});
