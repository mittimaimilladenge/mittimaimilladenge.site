window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Adarsh Dubey",
            role: "Founder",
            desc: "Meet Adarsh Dubey, the visionary behind our educational platform.",
            photo: "image/Adarsh.png",
            email: "mailto:dadarsh360@gmail.com",
            linkedin: "https://www.linkedin.com/in/adarsh-dubey27032004/",
            },
        {
            name: "Harsh Shukla",
            role: "Co-Founder",
            desc: "Harsh Shukla brings his unique expertise in socializing to the table.",
            photo: "image/Harsh.png",
            email: "mailto:harshshukla8108@gmail.com ",
            linkedin: "https://www.linkedin.com/in/harsh-shukla-892154251",
        },
        {
            name: "Ajit Torane",
            role: "Project Manager",
            desc: "Ajit Torane coordinates the efforts of our team, ensuring that deadlines are met, and goals are achieved.",
            photo: "image/Ajit.png",
            email: "mailto:ajittorane2000@gmail.com",
            linkedin: "https://www.linkedin.com/in/ajit-torane-4284381b9 ",
        },
        {
            name: "Siddharth Nirmale",
            role: "Project Development Manager",
            desc: "Say hello to Siddharth Nirmale, the architect of our digital realm.",
            photo: "image/Siddharth.png",
            email: "mailto:siddharthnirmale@gmail.com",
            linkedin: "https://www.linkedin.com/in/siddharth-nirmale-%E2%93%A5-366071235/",
        },
        {
            name: "Kalpesh Ghanwat",
            role: "Marketing Head",
            desc: "Meet Kalpesh Ghanwat, our strategic visionary in the world of promotion. ",
            photo: "image/Kalpesh.png",
            email: "mailto:ghanwatkalpesh4545@gmail.com",
            linkedin: "https://www.linkedin.com/in/kalpesh-ghanwat-17780a229",
        },
        {
            name: "Dilip Rajbhar",
            role: "Marketing Co-Head",
            desc: "Introducing Dilip Rajbhar, the dynamic force behind our marketing initiatives.",
            photo: "image/Dilip.png",
            email: "mailto:diliprajbhar9022@gmail.com ",
            linkedin: "https://www.linkedin.com/in/dilip-rajbhar-412279294",
        },
    ];

    /* Social Icons */
    var icons = [{
        iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
    }];

    var 
        iEmail = icons[0].iEmail,
        iLinkedin = icons[0].iLinkedin


    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo,
                email = team[i].email,
                linkedin = team[i].linkedin


            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        
                        <div class="social">
                        <span class="pointer"></span>
                        <div class="icons">
                            <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
                            <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}">
                            </div>
                            </div>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});