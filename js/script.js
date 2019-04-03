// very dirty code, to be cleaned up,in a rush to lanch

// initialize material and custom javascript

document.addEventListener('DOMContentLoaded', function () {

    var boadrMoreText = document.querySelector('#boardMore');
    var boardMoreBtn  = document.querySelector('#boardMorebtn');

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








    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity: 0.2, preventScrolling: true, dismissible: true
    });

    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, { margin: 15, outDuration: 0, transitionMovement: 0 });



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
        scrollOffset: 50
    });
    // to-do put all 180s in a class
    var management3ScrollspyElems = document.querySelectorAll('#newmanagement');
    var scrollspyInstances = M.ScrollSpy.init(management3ScrollspyElems, {
        scrollOffset: 180
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
