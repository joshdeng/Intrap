/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myCenter = new google.maps.LatLng(53.5177506, -113.4963977);

function initMap()
{
	var styles = [
		{
		  stylers: [
			{ hue: "#00ffe6" },
			{ saturation: -20 }
		  ]
		},{
		  featureType: "road",
		  elementType: "geometry",
		  stylers: [
			{ lightness: 100 },
			{ visibility: "simplified" }
		  ]
		},{
		  featureType: "road",
		  elementType: "labels",
		  stylers: [
			{ visibility: "off" }
		  ]
		}
	  ];
	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
	
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeControlOptions: {
		   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: '<b><center><font color="black">\n\
                    10355 Whyte Avenue, Basement<br>Welcome!\n\
                    </font></center></b>'
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);