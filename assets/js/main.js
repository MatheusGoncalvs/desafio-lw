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
    nav:true,
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
    nav:false,
    dots:true,
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