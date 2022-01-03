// event pada saat link di klik
$('.nav-link').on('click', function (e) {
    //ambil isi href
    var href = $(this).attr('href');
    //tangkap element yang bersangkutan
    var elementHref = $(href);
    //membuat animasi scroll agar lebih halus
    $('html').animate({
        scrollTop: elementHref.offset().top - 48
    }, 950, 'easeInOutExpo');

    e.preventDefault();
});

// parallax

// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    //portfolio
    if (wScroll > $('.portfolio').offset().top - 300) {
        $('.portfolio .card').each(function (i) {
            setTimeout(function () {
                $('.portfolio .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        })
        // $('.portfolio .card').addClass('muncul');
    }
});

// change active link automatic
$(Document).ready(function () {
    $('.navbar-nav').on('click', 'a', function () {
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    })
})

// hide navbar on responsive
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});