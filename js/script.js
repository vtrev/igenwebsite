// initialize material and custom javascript



document.addEventListener('DOMContentLoaded', function () {
    // M.AutoInit();
    var topSlider = document.querySelectorAll('#top-slider');
    var carouselInstances = M.Carousel.init(topSlider, {
        indicators: true,
        fullWidth: true
    });

    var partnerCarousel = document.querySelectorAll('.partner-caurosel');
    var partnerCarouselInstance = M.Carousel.init(partnerCarousel, {
        indicators: false,
        numVisible: 10,
        dist: -20,
        padding: 55
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
        scrollOffset: 250
    });

    // sidenav initilalize
    var sideNavElement = document.querySelectorAll('.sidenav');
    var sideNavInstance = M.Sidenav.init(sideNavElement, {
        edge: 'right'
    });
    // slide function for carousel
    var slide = () => {
        var carousel = document.getElementById('top-slider');
        instance = M.Carousel.getInstance(carousel);
        instance.next();
        setTimeout(slide, 5000);
    }
    slide();
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