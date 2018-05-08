var MapSelector = document.getElementById('map');
if( MapSelector ) {

    google.maps.event.addDomListener(window, 'load', init);
    var map, markersArray = [];

    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(48.626714, 19.104147),
            zoom: 11,
            gestureHandling: 'auto',
            fullscreenControl: false,
            zoomControl: false,
            disableDoubleClickZoom: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            draggable : true,
            clickableIcons: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType": "all","elementType": "all","stylers": [{"saturation": -100},{"gamma": 0.5}]}]
        }

        var map = new google.maps.Map(MapSelector, mapOptions);
        var locations = [
            {"title":"Kaskady Hotel & Spa Resort","address":"Letecká 19, 962 31, Sliač - Sielnica, Slovensko","desc":"","tel":"","int_tel":"","email":"","web":"","web_formatted":"","open":"","time":"","lat":48.626714,"lng":19.104147,"vicinity":"Letecká 19, 962 31, Sliač - Sielnica, Slovensko","open_hours":"","marker":{"url":"../images/pin.png","scaledSize":{"width":64,"height":57,"f":"px","b":"px"},"origin":{"x":0,"y":0},"anchor":{"x":30,"y":30}},"iw":{"address":true,"desc":true,"email":true,"enable":true,"int_tel":true,"open":true,"open_hours":false,"photo":true,"tel":false,"title":true,"web":false}}
        ];
        for (let i = 0; i < locations.length; i++) {
            let marker = new google.maps.Marker({
                icon: locations[i].marker,
                position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                map: map,
                title: locations[i].title,
                address: locations[i].address,
                desc: locations[i].desc,
                tel: locations[i].tel,
                int_tel: locations[i].int_tel,
                vicinity: locations[i].vicinity,
                open: locations[i].open,
                open_hours: locations[i].open_hours,
                photo: locations[i].photo,
                time: locations[i].time,
                email: locations[i].email,
                web: locations[i].web,
                iw: locations[i].iw
            });
            markersArray.push(marker);
        }
    }
}