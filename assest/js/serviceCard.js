const services = [
  {
    icon: "🚀",
    title: "Full Stack Development",
    desc: "End-to-end web application development from frontend to backend."
  },
  {
    icon: "🎨",
    title: "Front-End Development",
    desc: "Modern, responsive, and interactive user interfaces."
  },
  {
    icon: "⚙️",
    title: "Back-End Development",
    desc: "Secure, scalable, and high-performance server-side systems."
  },
  {
    icon: "🔗",
    title: "API Development",
    desc: "RESTful and custom APIs for seamless system integration."
  },
  {
    icon: "☁️",
    title: "SaaS Application",
    desc: "Cloud-based SaaS platforms with secure authentication."
  },
  {
    icon: "img",
    img: "assest/image/shopify.png",
    title: "eCommerce Website Development",
    desc: "Conversion-focused, modern online stores on WooCommerce & Shopify to grow your business."
  },
  {
    icon: "💻",
    title: "Web Design & Development",
    desc: "Modern, fast, and responsive websites using latest technologies."
  },
  {
    icon: "img",
    img: "assest/image/wordpress.png",
    title: "WordPress Development",
    desc: "Custom WordPress websites for business and blogs."
  },
  {
    icon: "⚡",
    title: "Website Optimization",
    desc: "Speed, SEO, and performance improvement services."
  }
];


const servicesRow = document.querySelector("#servicesRow");

servicesRow.innerHTML = services.map(service => {
  const iconHTML =
    service.icon === "img"
      ? `<img src="${service.img}" alt="${service.title}" />`
      : service.icon;

  return `
    <div class="col-lg-4 col-md-6 skillCard-div">
      <div class="service-card" data-aos="zoom-in" data-aos-delay="100">
        <div class="icon">${iconHTML}</div>
        <h4>${service.title}</h4>
        <p>${service.desc}</p>
      </div>
    </div>
  `;
}).join("");
