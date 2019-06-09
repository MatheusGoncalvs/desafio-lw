//Google Maps + Markers
var map;
function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'),
        { center: new google.maps.LatLng(-12.255423, -38.941116), zoom: 16 });

    var iconBase =
        'assets/imgs/';

    var icons = {
        marker: {
            icon: iconBase + 'markers.png'
        }
    };

    var features = [
        {
            position: new google.maps.LatLng(-12.255423, -38.941116),
            type: 'marker'
        }, {
            position: new google.maps.LatLng(-12.255507, -38.939840),
            type: 'marker'
        }
    ];

    // Create markers.
    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };
}
//Carousel Serviços
$('#servicos-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        645: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
//Carousel Links Úteis
$('#links-uteis-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        645: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

/*-----------------------------------
    * ONE PAGE SCROLLING
    *-----------------------------------*/
// Select all links with hashes
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
/*Máscara de form*/
$(function () {
    var $telefone = $("#telefone");
    $telefone.mask('00 0 0000-0000', { reverse: true });
});