
$(document).ready(function(){/* google maps -----------------------------------------------------*/


var map;
var markers = [];
var infowindow;

var perc;

$(".loading").show();


function intervalTrigger(perc) {
                 return setInterval(function(){ 
                    perc=perc-0.2;
                    if (perc>0){
                      $(".signal").fadeOut(500, function(){ $(".timeoutmarker").fadeIn(400); });
                      $("#timemarker").css("width",perc+"%");
                    }else {
                      location.reload();
                    }
                 }, 200);
              
 };

  

function initialize() {
  var mapOptions = {
    zoom: 16,
    zoomControl: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


 



/// Localization
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);






    infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: '<b>Sei qui</b>'
      });


      google.maps.event.addListener(infowindow, 'domready', function() {
         $("#addmarker").click( function(e) {
                addMarker(pos);
              if(infowindow) {
                infowindow.close();
                var perc=100;
                $("#timemarker").css("width",perc+"%");

                  var id = intervalTrigger(100);
                
         }
       });


      $(".loading").hide();


      });

      function deleteMarkers() {
          clearMarkers();
          markers = [];
        }

      // Add a marker to the map and push to the array.
  function addMarker(location) {
        var marker = new google.maps.Marker({
        position: location,
        map: map
        });
        markers.push(marker);
      }


      
      map.setCenter(pos);


    }, function() {
      handleNoGeolocation(true);
    });

  } else {
    handleNoGeolocation(false);
  }
}


function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Errore: Il servizo di geolocalizzazione non è attivo.';
  } else {
    var content = 'Non posso trovare la tua posizione.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);

/* end google maps -----------------------------------------------------*/

$("[name='twist'],[name='car2go'],[name='enjoy']").bootstrapSwitch();







var addMarker= function(useragent,typeServices){




};

  function Marker(long, lang, types, id) {
      this.long = long;
      this.lang = lang;
      this.types = types;
      this.id = id;
      this.toJsonString = function () { return JSON.stringify(this); };
  };


  var getMarkers = function(uri,cb,err) {
       $.ajax({
           type: "GET",
           url: uri,
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           success: cb,
           error: err
      });

  };


  var saveMarker=function(marker,uri,cb,err) {

       $.ajax({
           type: "POST",
           url: uri,
           contentType: "application/json; charset=utf-8",
           data: marker.toJsonString(),
           dataType: "json",
           success: cb,
           error: err 
       });     
  };

  $.fn.bootstrapSwitch.defaults.size = 'small';

});



