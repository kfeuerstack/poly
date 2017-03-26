      let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 28.150770, lng: -81.851305},  
          zoom: 15,
          scrollwheel: false,
          styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{
            "color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[
            {"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
            {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
        });
    let image = 'http://i.imgur.com/OARp0jw.png';
        let pothole = new google.maps.Marker({
          position: {lat: 28.154364, lng: -81.846410},
          map: map,
          icon: image
        });
    // let image = 'http://i.imgur.com/hR0nZah.png';
    //     var brokenGlass = new google.maps.Marker({
    //       position: {lat: 28.144233, lng:  -81.845050},
    //       map: map,
    //       icon: image
    //     });
    // let image = 'http://i.imgur.com/Gh3vu9m.png';
    //     let brokenLight = new google.maps.Marker({
    //       position: {lat: 28.144280, lng:  -81.857528},
    //       map: map,
    //       icon: image
    //     });
    //  let image = 'http://i.imgur.com/SKu3hus.png';
    //     let roadKill = new google.maps.Marker({
    //       position: {lat: 28.152303, lng:   -81.872753},
    //       map: map,
    //       icon: image
    //     });
          let contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
              'sandstone rock formation in the southern part of the '+
              'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
              'south west of the nearest large town, Alice Springs; 450&#160;km '+
              '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
              'features of the Uluru - Kata Tjuta National Park. Uluru is '+
              'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
              'Aboriginal people of the area. It has many springs, waterholes, '+
              'rock caves and ancient paintings. Uluru is listed as a World '+
              'Heritage Site.</p>'+
              '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '(last visited June 22, 2009).</p>'+
              '</div>'+
              '</div>';

          let infowindow = new google.maps.InfoWindow({
              content: contentString
          });
    // Click Functions
        google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
        infowindow.open(map, pothole);
        });       

        // google.maps.event.addListener(map, 'click', function(event) {
        // placeMarkerPothole(event.latLng);
        // });

        // --- ROADKILL ---
        function placeMarker(location) {
        let roadkill = 'http://i.imgur.com/SKu3hus.png';
        let marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image
        });







        // // --- POTHOLE
        // function placeMarkerPothole(location) {
        // let pothole = 'http://i.imgur.com/OARp0jw.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---GLASS---
        // function placeMarkerGlass(location) {
        // let glass = 'http://i.imgur.com/hR0nZah.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //--- LIGHT ---
        // function placeMarkerLight(location) {
        // let light = 'http://i.imgur.com/Gh3vu9m.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---HOMELESS---
        // function placeMarkerHomeless(location) {
        // let homeless = 'http://i.imgur.com/P22cAiw.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---NOISE---
        // function placeMarkerNoise(location) {
        // let noise = 'http://i.imgur.com/tnmsQ4f.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---GRAFFITI---
        // function placeMarkerGraffiti(location) {
        // let graffiti = 'http://i.imgur.com/wAbwdNm.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---SMOG---
        // function placeMarkerSmog(location) {
        // let smog = 'http://i.imgur.com/LKY9jEv.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---DRUGS---
        // function placeMarkerDrugs(location) {
        // let drugs = 'http://i.imgur.com/g6ey5CJ.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
        // //---PROTESTS---
        // function placeMarkerProtests(location) {
        // let protests = 'http://i.imgur.com/OFQMRW5.png';
        // let marker = new google.maps.Marker({
        //     position: location,
        //     map: map,
        //     icon: image
        // });
    }



      }
