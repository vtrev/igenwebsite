// very dirty code, to be cleaned up,in a rush to lanch

// initialize material and custom javascript

document.addEventListener('DOMContentLoaded', function () {

    
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity:0.2,preventScrolling:true,dismissible:true
    });
//    // var modal1element= document.querySelector('#modal1');
    // var modal1Instance = M.Modal.init(modal1element,{
    //         opacity:0.2,preventScrolling:false,dismissible:true
    //     });

    // var openModal1 = ()=> {
    //     modal1Instance.open();
    // }    
    



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
        scrollOffset: 100
    });
    var management2ScrollspyElems = document.querySelectorAll('#management2');
    var scrollspyInstances = M.ScrollSpy.init(management2ScrollspyElems, {
        scrollOffset: 230
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
