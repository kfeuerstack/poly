(function ( $ ) {
    $.fn.CustomMarker = function( options ) {
        var settings = $.extend({
        }, options );
        
        return this.each(function() {    
            var element = $(this);
            element.text('Attempting to find your location');
            
            function displayCurrentPosition(data) {
                element.html('<div class="map-canvas"></div>');
                
                var current = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                
                var options = {
                    center: current,
                    mapTypeId: google.maps.MapTypeId.HYBRID,
                    zoom: 10,
                };
                
                var map = new google.maps.Map(element[0], options);
            }
            
            function onError(error) {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        element.text('Access to location API denied by user');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        element.text('Unable to determine location');
                        break;
                    case error.TIMEOUT:
                        element.text('Unable to determine location, the request timed out');
                        break;
                    case error.UNKNOWN_ERROR:
                        element.text('An unknown error occurred!');
                        break;
                }
            }
            
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(displayCurrentPosition, onError);
            } else {
                element.text('Geolocation is not supported by this browser, please upgrade to a more recent version');
            }
        });
    };
}( jQuery ));
no-mark
The above code will request access to the Geo-location API and center the Map on the users current location. To actually show the exact point we need to add a Marker.
ADDING THE MARKER

ddrive
Adding a marker is easy, all you do is create a new instance of the google.maps.Marker class, passing in at a minimum the map it will be on and the position you want it to be in.
var marker = new google.maps.Marker({
    position: current,
    map: map
});
Today though, we’re also going to specify a few additional options. First we’re going to create a new object which will represent our icon. It needs to have the url of the image to use, but you can also specify additional values such as size or the anchor position (used to position the image relative to the center point)
 var icon = { 
    url: 'http://developerdrive.developerdrive.netdna-cdn.com/wp-content/uploads/2013/08/ddrive.png'
};
Next we just have to update the Marker definition to specify the icon.
var icon = { 
    url: 'http://developerdrive.developerdrive.netdna-cdn.com/wp-content/uploads/2013/08/ddrive.png'
};

var marker = new google.maps.Marker({
    position: current,
    map: map,
    icon: icon
});
san-fran
You can see a full list of Marker options here
In the final download, I’ve updated the plugin to take the icon url as a parameter to make it more functional.
jQuery(document).ready(function() {
    jQuery('div.location').CustomMarker({icon_url: 'http://developerdrive.developerdrive.netdna-cdn.com/wp-content/uploads/2013/08/ddrive.png'});
});
If there is any interest in it, for an upcoming full tutorial I can go into more depth and cover more Google Map customizations



BY JONNY SCHNITTGER
A battle hardened software developer with a mixed and colorful background, who can't come up with a decent author bio More articles by Jonny Schnittger

LATEST POSTS
RESOURCES
5 BEST WORDPRESS PAGE BUILDER PLUGINS
WEB DESIGN
8 TIPS FOR USER-FRIENDLY SITE DESIGN
JAVASCRIPT
WORKING WITH THE JAVASCRIPT BATTERY API
WEB DEVELOPMENT
HOW TO OPTIMIZE FOR VOICE SEARCH, AND WHY YOU SHOULD
RESOURCES
10 CSS GRIDS FOR STREAMLINED WEB DESIGN
WEB DEVELOPMENT
THE ULTIMATE WEBSITE LAUNCH CHECKLIST
