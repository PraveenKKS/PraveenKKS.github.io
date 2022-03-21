AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Azure Fundamentals",
    cardImage: "assets/images/education-page/microsoft.svg",
    moocLink: "https://www.credly.com/badges/45d5bbb2-5f97-4364-a4db-774f132a4203?source=linked_in_profile",
  },
  {
    title: "Introduction to Programming Using JavaScript",
    cardImage: "assets/images/education-page/microsoft.svg",
    moocLink: "https://www.credly.com/badges/8c5c665f-6d87-4e27-a543-5fbc5ac07d24/linked_in_profile",
  },
  {
    title: "Aviatrix Certified Engineer",
    cardImage: "assets/images/education-page/logo-aviatrix.png",
    moocLink: "https://www.credly.com/badges/b5609271-e68a-4cd0-b1fe-50b553635ed8?source=linked_in_profile",
  },
  {
    title: "Scrum Fundamentals Certified",
    cardImage: "assets/images/education-page/scrumstudy.svg",
    moocLink: "https://www.scrumstudy.com/certification/verify?type=SFC&number=785553",
  },
  {
    title: "ICSI | CNSS Certified Network Security Specialist",
    cardImage: "assets/images/education-page/ICSI.jpg",
    moocLink: "https://www.credential.net/8e911807-6eda-4880-b39e-7c1bcabaf6c0#gs.tzndfl",
  },
  {
    title: "Six Sigma Yellow Belt",
    cardImage: "assets/images/education-page/scrumstudy.svg",
    moocLink: "http://81cd1176253f3f59d435-ac22991740ab4ff17e21daf2ed577041.r77.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-PraveenkumarKaruppan-734041.pdf",
  },
  {
    title: "Getting Started with Azure",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/certificate/JUMY5JDATQZU",
  },
  {
    title: "Agile Software Development",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/certificate/S84EM267E224",
  },
  {
    title: "Software Processes and Agile Practices",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/certificate/F2762RHVALL9",
  },
  {
    title: "Python Programming: A Concise Introduction",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/certificate/HEDEFZMHFJZW",
  },
  {
    title: "Hadoop Foundations - Level 1",
    cardImage: "assets/images/education-page/ibm.svg",
    moocLink: "https://www.credly.com/badges/17efa056-3edb-4581-95b7-f20d11fad77d?source=linked_in_profile",
  },
  {
    title: "Cloud Core",
    cardImage: "assets/images/education-page/ibm.svg",
    moocLink:"https://www.credly.com/badges/c96d9df4-c96f-420b-ae17-b43aa15b19dc?source=linked_in_profile",
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/certificate/8D2KR9U3ZJEU",
  },
  {
    title: "Terraform for absolute beginners",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/E6V4MU39CT8G",
  },
  {
    title: "Start Your API Testing Journey With Postman Tool",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/RRFSXQRZXYGA",
  },
  {
    title: "Jenkins : Automating your delivery pipeline",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/FGS799M975WB",
  },
  {
    title: "Introduction to Docker : The Basics",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/VQMAY2JMLN7L",
  },
  {
    title: "Introduction to Ansible: The Fundamentals",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/87JJK6EFJN6X",
  },
  {
    title: "Implement CI/CD in Azure Data Factory using Azure Devops",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/LXCAESV3LSDJ",
  },
  {
    title: "Getting Started with Azure DevOps Boards",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/C6DWNDC5KQKA",
  },
  {
    title: "Azure: Create a Virtual Machine and Deploy a Web Server",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:"https://www.coursera.org/account/accomplishments/verify/36L87CL9KWHH",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
