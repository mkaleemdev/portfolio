const skillCard_row = document.querySelector(".skillCard_row");

const skillCard = [
  {
    img: "assest/image/html-5.png",
    text: "HTML5",
  },
  {
    img: "assest/image/css-3.png",
    text: "CSS3",
  },
  {
    img: "assest/image/bootsrap-5.png",
    text: "Bootstrap 5",
  },
  {
    img: "assest/image/js.png",
    text: "JavaScript",
  },
  {
    img: "assest/image/React-icon.svg.png",
    text: "React.JS",
  },
  {
    img: "assest/image/node-js.png",
    text: "Node.JS",
  },
  {
    img: "assest/image/MongoDB.png",
    text: "MongoDB",
  },
  {
    img: "assest/image/mysql.png",
    text: "MySQL",
  },
  {
    img: "assest/image/Express.png",
    text: "Express.JS",
  },
  {
    img: "assest/image/redux.png",
    text: "Redux",
  },
  {
    img: "assest/image/jquery.png",
    text: "jQuery",
  },
  {
    img: "assest/image/git.png",
    text: "Git",
  },
  {
    img: "assest/image/github.png",
    text: "Github",
  },
  {
    img: "assest/image/wordpress.png",
    text: "Wordpress",
  },
  {
    img: "assest/image/shopify.png",
    text: "Shopify",
  },
  {
    img: "assest/image/figma.png",
    text: "Figma",
  },
  {
    img: "assest/image/adobe-photoshop.png",
    text: "Photoshop",
  },
  {
    img: "assest/image/canva.png",
    text: "Canva",
  },
];

skillCard.map((item, index) => {
  skillCard_row.innerHTML += `
             <div class="col-xl-2 skillCard-div col-md-3 col-3">
                   <div class="skill-card"  data-aos="zoom-in" data-aos-delay="100">
                       <img src="${item.img}" alt="" />
                       <h5>${item.text}</h5>
                 </div>
              </div>
          `;
});
