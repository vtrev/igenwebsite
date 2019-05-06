//todo clean up code,in a rush to lanch

// initialize material and custom javascript

document.addEventListener('DOMContentLoaded', function () {

    var boadrMoreText = document.querySelector('#boardMore');
    var boardMoreBtn = document.querySelector('#boardMorebtn');

    boardMoreBtn.addEventListener('click', () => {
        if (boadrMoreText.style.display === "none") {
            boadrMoreText.style.display = "inline-block";
            boardMoreBtn.innerHTML = "Read less";
            //moreText.style.display = "none";
        } else {
            boadrMoreText.style.display = "none";
            boardMoreBtn.innerHTML = "Read more";
            moreText.style.display = "none";
        }
    })


    // seperate initialization of modals in order to modify the size pf underlying div on one element and not all
    var modal1element = document.querySelector('#modal1');
    var instances = M.Modal.init(modal1element, {
        opacity: 0.2,
        preventScrolling: true,
        dismissible: true,
        onOpenStart: function () {
            var modalElement = document.querySelector(".top-modal1-col");
            // modalElement.style.display = "none";
            modalElement.classList.add("modal-open");
        },
        onCloseStart: function () {
            var modalElement = document.querySelector(".top-modal1-col");
            modalElement.classList.remove("modal-open");
        }
    });


    var modal2element = document.querySelector('#modal2');
    var instances = M.Modal.init(modal2element, {
        opacity: 0.2,
        preventScrolling: true,
        dismissible: true,
        onOpenStart: function () {
            var modalElement = document.querySelector(".top-modal2-col");
            modalElement.classList.add("modal-open");
        },
        onCloseStart: function () {
            var modalElement = document.querySelector(".top-modal2-col");
            modalElement.classList.remove("modal-open");
        }
    });


    var modal3element = document.querySelector('#modal3');
    var instances = M.Modal.init(modal3element, {
        opacity: 0.2,
        preventScrolling: true,
        dismissible: true,
        onOpenStart: function () {
            var modalElement = document.querySelector(".top-modal3-col");
            modalElement.classList.add("modal-open");
        },
        onCloseStart: function () {
            var modalElement = document.querySelector(".top-modal3-col");
            modalElement.classList.remove("modal-open");
        }
    });


    var modal4element = document.querySelectorAll('#modal4');
    var instances = M.Modal.init(modal4element, {
        opacity: 0.2,
        preventScrolling: true,
        dismissible: true,
        onOpenStart: function () {
            var modalElement = document.querySelector(".top-modal4-col");
            modalElement.classList.add("modal-open");
        },
        onCloseStart: function () {
            var modalElement = document.querySelector(".top-modal4-col");
            modalElement.classList.remove("modal-open");
        }
    });




    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {
        margin: 15,
        outDuration: 0,
        transitionMovement: 0
    });



    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        constrainWidth: false
    });


    var topSlider = document.querySelectorAll('#top-slider');
    var carouselInstances = M.Carousel.init(topSlider, {
        indicators: true,
        fullWidth: true
    });
    // partners carousel
    var partnerCarousel = document.querySelectorAll('.partner-caurosel');
    var partnerCarouselInstance = M.Carousel.init(partnerCarousel, {
        indicators: false,
        numVisible: 12,
        dist: -25,
        padding: 35
    });
    // scrollspy
    var scrollspyElems = document.querySelectorAll('.scrollspy');
    var scrollspyInstances = M.ScrollSpy.init(scrollspyElems, {});

    var partner2ScrollspyElems = document.querySelectorAll('#partners2');
    var scrollspyInstances = M.ScrollSpy.init(partner2ScrollspyElems, {
        scrollOffset: 125
    });
    var management2ScrollspyElems = document.querySelectorAll('#management2');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 0
    });
    // to-do put all 180s in a class
    var management3ScrollspyElems = document.querySelectorAll('#newmanagement');
    var scrollspyInstances = M.ScrollSpy.init(management3ScrollspyElems, {
        scrollOffset: 160
    });


    var partner2ScrollspyElems = document.querySelectorAll('#partners');
    var scrollspyInstances = M.ScrollSpy.init(partner2ScrollspyElems, {
        scrollOffset: 180
    });
    var partner2ScrollspyElems = document.querySelectorAll('#funding');
    var scrollspyInstances = M.ScrollSpy.init(partner2ScrollspyElems, {
        scrollOffset: 180
    });
    var management2ScrollspyElems = document.querySelectorAll('#management');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 180
    });
    var management2ScrollspyElems = document.querySelectorAll('#management2');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 200
    });
    var management2ScrollspyElems = document.querySelectorAll('#support');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 180
    });
    var management2ScrollspyElems = document.querySelectorAll('#support2');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 60
    });
    var management2ScrollspyElems = document.querySelectorAll('#about');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 180
    });
    var management2ScrollspyElems = document.querySelectorAll('#about2');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 180
    });
    var management2ScrollspyElems = document.querySelectorAll('#stats');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 300
    });

    // sidenav initilalize
    var sideNavElement = document.querySelectorAll('.sidenav');
    var sideNavInstance = M.Sidenav.init(sideNavElement, {
        edge: 'right'
    });
    // slide function for carousel
    var slide = () => {
        let carousel = document.getElementById('top-slider');
        instance = M.Carousel.getInstance(carousel);
        instance.next();
        setTimeout(slide, 5000);
    }
    var slide2 = () => {
        let carousel = document.getElementById('partner-items');
        instance = M.Carousel.getInstance(carousel);
        instance.next();
        setTimeout(slide2, 1500);
    }
    slide();
    slide2();
});
// Handlebars compilation for the partners caourosel
let generatePartners = function (partners) {
    var partnersElement = document.getElementById("partner-items");
    var partnersTemplateSource = document.getElementById("partners-template").innerHTML;
    var partnersTemplate = Handlebars.compile(partnersTemplateSource);
    var partnersHTML = partnersTemplate(partners);
    partnersElement.innerHTML = partnersHTML;
};

let partners = ['cput',
    'cut',
    'dut',
    'forthare',
    'mut',
    'nmu',
    'nwu',
    'rhodes',
    'sefako',
    'sol',
    'stellies',
    'tut',
    'uct',
    'ufs',
    'uj',
    'ukzn',
    'ul',
    'ump',
    'unisa',
    'univen',
    'unizulu',
    'up',
    'uwc',
    'vut',
    'wits',
    'wsu'
];

generatePartners({
    partners
});
//modals