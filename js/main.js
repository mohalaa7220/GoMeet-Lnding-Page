/*-------------------------Data-------------------------*/
const data = {
  services: [
    {
      id: 1,
      num: "01",
      title: "Digital Product Development",
      desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    },
    {
      id: 2,
      num: "02",
      title: "General Consulting Process",
      desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    },
    {
      id: 3,
      num: "03",
      title: "Web Design & development solutions",
      desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    },
    {
      id: 4,
      num: "04",
      title: "Digital Product Development",
      desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    },
    {
      id: 5,
      num: "05",
      title: "Digital Product Development",
      desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    },
    {
      id: 6,
      num: "06",
      title: "Digital Product Development",
      desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    },
  ],

  lastProducts: [
    {
      productName: "Aura Branding Design",
      category: "Graphic",
      desc: "Graphic Design",
      image: "img/pf1.png",
    },
    {
      productName: "Aura Branding Design",
      category: "Graphic",
      desc: "Web Design",
      image: "img/pf2.webp",
    },
    {
      productName: "Aura Branding Design",
      category: "Marketing",
      image: "img/pf3.webp",
      desc: "Marketing",
    },
    {
      productName: "Aura Branding Design",
      category: "Web",
      desc: "Web Design",
      image: "img/pf4.png",
    },
    {
      productName: "Aura Branding Design",
      category: "Web",
      desc: "Web Design",
      image: "img/pf5.png",
    },
    {
      productName: "Aura Branding Design",
      category: "Branding",
      image: "img/pf6.webp",
      desc: "Branding",
    },
  ],

  price: [
    {
      title: "Freelancer",
      desc: "All the basics for starting a new business",
      price: "$24",
      price_feat: "/mo",
      adv: [
        { title: "Cras justo odio.", icon: "lni lni-checkmark-circle" },
        { title: "Dapibus ac facilisis in.", icon: "lni lni-checkmark-circle" },
        { title: "Morbi leo risus.", icon: "lni lni-checkmark-circle" },
        {
          title: "Potenti felis, in cras ligula.",
          icon: "lni lni-checkmark-circle",
        },
      ],
      btn: "Buy Freelancer",
    },
    {
      title: "Startup",
      desc: "All the basics for starting a new business",
      price: "$32",
      price_feat: "/mo",
      adv: [
        { title: "Cras justo odio.", icon: "lni lni-checkmark-circle" },
        { title: "Dapibus ac facilisis in.", icon: "lni lni-checkmark-circle" },
        { title: "Morbi leo risus.", icon: "lni lni-checkmark-circle" },
        {
          title: "Potenti felis, in cras ligula.",
          icon: "lni lni-checkmark-circle",
        },
      ],
      btn: "Buy Startup",
    },
    {
      title: "Enterprise",
      desc: "All the basics for starting a new business",
      price: "$70",
      price_feat: "/year",
      adv: [
        { title: "Cras justo odio.", icon: "lni lni-checkmark-circle" },
        { title: "Dapibus ac facilisis in.", icon: "lni lni-checkmark-circle" },
        { title: "Morbi leo risus.", icon: "lni lni-checkmark-circle" },
        {
          title: "Potenti felis, in cras ligula.",
          icon: "lni lni-checkmark-circle",
        },
      ],
      btn: "Buy Enterprise",
    },
  ],

  blog: [
    {
      image: "img/blog-grid1.webp",
      date: "Mar 12, 2023",
      title: "Bring to the table win-win survival strategies.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "img/comment1.webp",
      name_auth: " By Jonson deco",
    },
    {
      image: "img/blog-grid2.webp",
      date: "Feb 25, 2023",
      title: "How To Blow Through Capital At An Incredible Rate.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "img/comment2.webp",
      name_auth: " By Jonson deco",
    },
    {
      image: "img/blog-grid3.webp",
      date: "Jan 12, 2023",
      title: "Bring to the table win-win survival strategies.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "img/comment3.webp",
      name_auth: " By Jonson deco",
    },
  ],
};
/*--------------------------Start---------------------------*/

const hamburger = document.querySelector(".hamburger"),
  navLinks = document.querySelector(".nav-links"),
  links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

/*-------------------------Change Background Of NavBar When Scroll-----------*/
let navbar = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
});

let rowServices = document.querySelector(".service .row");

const services = data.services
  .map((item, index) => {
    return `
            <div class="col-4" ${
              index % 2 == 0 ? `data-aos="fade-right"` : `data-aos="fade-left"`
            }>
              <a href="#" class="service-description">
                <div class="text">
                  <h5>${item.num}</h5>
                  <h4>${item.title}</h4>
                  <p>${item.desc}</p>
                  <div class="btn">Read More</div>
                </div>
              </a>
            </div>
        `;
  })
  .join("");

rowServices.innerHTML = services;

/*-------------------------Services-------------------------*/

let rowLastCase = document.querySelector(".last_case .row");

const lastCase = data.lastProducts
  .map((item, index) => {
    return `
            <div class="col-4 ${item.category}">
              <a href="#" class="card">
               <div class="img_card"> <img src="${item.image}" alt=${item.productName}/> </div>
                <div class="card_footer">
                 <p>${item.desc}</p>
                  <h5>${item.productName}</h5>
                </div>
              </a>
            </div>
        `;
  })
  .join("");

rowLastCase.innerHTML = lastCase;

//parameter passed from button (Parameter same as category)//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".last_case .col-4");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
    element.classList.add("swing");
  });
}

/*--------------Price---------------*/
let rowPrice = document.querySelector(".price .row");
const price = data.price
  .map((item, index) => {
    return ` 
            <div class="col-4">
                <div class="price_detail"  data-aos=${
                  index % 2 == 0 ? "zoom-in-up" : "zoom-in-left"
                }>
                    <div class="head_price">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                        <h5>${item.price}<span>${item.price_feat}</span> </h5>
                    </div>
                    <div class="content">
                        <ul class="table-list">
                          ${item.adv
                            .map((list) => {
                              return `
                                    <li>
                                        <i class="${list.icon}"></i> ${list.title}
                                    </li>`;
                            })
                            .join("")}
                        </ul>
                    </div>
                    <div class="btn_price"> <a href="#">${item.btn}</a> </div>
                </div>
            </div>
        `;
  })
  .join("");

rowPrice.innerHTML = price;

/*--------------Blogs---------------*/
let rowBlog = document.querySelector(".blog .row");
const blog = data.blog
  .map((item, index) => {
    return `
            <div class="col-4">
                <a class="card" href="/">
                    <div class="img_card">
                        <img src="${item.image}" alt=${item.title} />
                    </div>
                    <div class="content_blog">
                        <div class="head_card">
                            <span class="date">${item.date}</span>
                            <h1>${item.title}</h1>
                            <p>${item.desc}</p>
                        </div>
                        <div class="card_footer">
                            <img src="${item.author}" class="img_blog" alt=${item.name_auth} />
                            <span>${item.name_auth}</span>
                        </div>
                    </div>
                </a>
            </div>
        `;
  })
  .join("");

rowBlog.innerHTML = blog;

/*-------------Scroll To Top----------------*/

function toTop() {
  let buttonUp = document.querySelector(".scroll-to-top img");
  window.onscroll = () => {
    if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
      buttonUp.style.display = "block";
      buttonUp.classList.add("translate2");
    } else {
      buttonUp.style.display = "none";
    }
  };

  buttonUp.onclick = () => {
    scrollTo(0, 0);
  };
}
toTop();

AOS.init({
  duration: 1200,
});
