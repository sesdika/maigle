// THE ULTIMATE MAPS OF RESILIENT
// Author / creator   : GOPAL (Naufal El Farisi M) 
// Contact            : naufalelfarisim@gmail.com 
// Email              : 085659360489 
// Lama Pengerjaan    : 2017-2018

// init include html syntax from index.html
includeHTML();

// GLOBAL VARIABLE
var map; 
var dishidros,ais,kkp,rapingla,migas,pasut;
var overlays, baseMaps, bsm, layerControl1, layerControl2, layerControl3, layerControl4;
var tik, terline1,terline2,terline3,terline4, pklline1,pklline2,pklline3, tmbline1,tmbline2,tmbline3,tmbline4,tmbline5, zeeline1,zeeline2,zeeline3,zeeline4,zeeline5,zeeline6;
var teri, zee, tmbline, pklline, konline, stline, tk1, tk2;
var gempa,tekanan,awan,suhu,hujan;
var ikanpari,ikanbiru,ikanmerah,ikanoren,ikanpink,ikanhiu,ikanpaus,kepitingicon,udangicon,cumiicon,lobstericon,gmpaIcon,aiscon,buletabu,buletdefault,bulethijau,bulethitam,buletkuning,buletmerah,buletputih,bulettransp,buletungu;
var LOCATIONSTAT = false;
var EDITSTAT, DRAWSTAT;
var BUFFERFORM = {}; 
var BUFFERORGorg = {};
var BUFFERORG = [];

//CONFIG IP AJAX
var URLAPI        = 'http://192.168.1.241:9099/api/';
var URLINTELBOT   = URLAPI+'rawpesans';
var URLTK1        = 'json/tk1ori.json';
var URLTK2        = 'json/tk2ori.json';
var URLCUACABASE  = "../getcuaca/bin/hasil/"; 
var URLBATASLINE  = 'json/batasline.json';
var URLIKAN       = 'json/ikan.json';
var URLWINDBASE   = 'http://192.168.1.124:7000/';


// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION
// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION
// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION
function INITMAP(){
    // MAP SOURCE MAP SOURCE MAP SOURCE MAP SOURCE MAP SOURCE
    var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {maxZoom: 19});
    var CartoDB_GreyMatter = L.tileLayer('https://b.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {maxZoom: 19});
    var standard = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,});
    var primar = L.tileLayer.wms("http://primar.ecc.no/primar/wms_session", {    layers: 'cells',    format: 'image/png',    noWrap: true,    transparent: true    });
    var navtoniv = L.tileLayer('https://backend.navionics.io/tile/{z}/{x}/{y}?LAYERS=config_1_20.00_1&TRANSPARENT=FALSE&UGC=TRUE&navtoken=eyJrZXkiOiJOYXZpb25pY3NfaW50ZXJuYWxwdXJwb3NlXzAwMDAxIiwia2V5RG9tYWluIjoid2ViYXBwLm5hdmlvbmljcy5jb20iLCJyZWZlcmVyIjoid2ViYXBwLm5hdmlvbmljcy5jb20iLCJyYW5kb20iOjM2Mjc4fQ');
    var gray = L.esri.basemapLayer('Gray');//.addTo(map);
    var streets = L.esri.basemapLayer('Streets');//.addTo(map);
    var topo = L.esri.basemapLayer('Topographic');//.addTo(map);
    var nationalgeo = L.esri.basemapLayer('NationalGeographic');//.addTo(map);
    var ocean = L.esri.basemapLayer('Oceans');//.addTo(map);
    var darkgray = L.esri.basemapLayer('DarkGray');//.addTo(map);
    var image = L.esri.basemapLayer('Imagery');//.addTo(map);
    var shade = L.esri.basemapLayer('ShadedRelief');//.addTo(map);
    var terain = L.esri.basemapLayer('Terrain');//.addTo(map);
    var usa = L.esri.basemapLayer('USATopo');//.addTo(map);
    var lightgray = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {maxZoom: 19});
    // var Esri_OceanBasemap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {maxZoom: 13});
    // var mid = L.esri.Vector.basemap('MidCentury');//.addTo(map);
    // var news = L.esri.Vector.basemap('Newspaper');//.addTo(map);
    // var spring = L.esri.Vector.basemap('Spring');//.addTo(map);
    // var dishidros = L.esri.dynamicMapLayer({url: 'http://hdc.pushidrosal.id/arcgis/rest/services/enc_indonesia/MapServer/exts/MaritimeChartService/MapServer', opacity: 0.6, f:'image'});
    // var dishidros = L.esri.dynamicMapLayer({url: 'http://hdc.pushidrosal.id/arcgis/rest/services/SampleWorldCities/MapServer/exts/MaritimeChartService/MapServer', opacity: 0.6, f:'image'});
    dishidros = L.esri.dynamicMapLayer({url: 'http://hdc.pushidrosal.id/arcgis/rest/services/SampleWorldCities/MapServer/exts/MaritimeChartService/MapServer', opacity: 0.6, f:'image', layers: [0,2,3,4,5,6,7,8,9,10]});
    //layer.show:
    // 0 = kotak batas
    // 1 = land & rambu2 pulau kecil
    // 2 = angka2 kedalaman laut
    // 3 = garis ungu jalur pelayaran
    // 4 = rambu2 bundar ungu
    // 5 = rambu2 ungu lainnnya
    // 6 = mercusuar dan lingkaranya
    // 7 = garis ungu batas pulau
    // 8 = garis2 ungu
    // 9 = 
    // var topoindo = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.go.id/arcgis/rest/services/enc_indonesia/MapServer/exts/Maritime%20Chart%20Service/MapServer', opacity: 0.6, f:'image'});
    var topoindo = L.tileLayer('https://a.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb', {maxZoom: 19});
    // list of topologi map from opencycle free
    // https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png
    // https://a.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png
    // https://a.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png
    // https://a.tile.thunderforest.com/landscape/{z}/{x}/{y}.png
    // https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png
    // https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png
    var udaraindo= L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.go.id/arcgis/rest/services/enc_indonesia/MapServer/exts/Maritime%20Chart%20Service/MapServer', opacity: 0.6, f:'image'});
    migas = L.esri.dynamicMapLayer({url: 'http://webgis.den.go.id/arcgis/rest/services/Pipa_Hulu_Migas/MapServer', opacity: 0.9, f:'image'});
    rapingla = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.tnial.mil.id/arcgis/rest/services/raplingla/MapServer', opacity: 0.7, f:'image'});
    pasut = L.esri.dynamicMapLayer({url: 'http://hdc.dishidros.tnial.mil.id/arcgis/rest/services/Pasut/MapServer', opacity: 0.7, f:'image'});
    kkp = L.esri.dynamicMapLayer({url: 'http://www.ppk-kp3k.kkp.go.id/ArcGIS/rest/services/kkp/Kawasan/MapServer', opacity: 1,useCors : false,f:'image'});
    ais = L.esri.Cluster.featureLayer({url: 'http://geoeventsample1.esri.com:6080/arcgis/rest/services/Hosted/exactEarthCurrent/FeatureServer/0',opacity:1,pointToLayer: 
    // ais = L.esri.Cluster.featureLayer({url: 'json/gempa.json',opacity:1,pointToLayer: 
      function (geojson, latlng){   
        console.log(geojson);
        return L.marker(latlng, {rotationAngle: geojson.properties.cog, icon: aiscon})
           .bindPopup("<table width=100% style='font-size:11px'><tr>"+
                      "<td>Nama kapal </td><td>: "+geojson.properties.vessel_name+"</td>"+
                      "</tr><tr>"+
                      "<td>Type kapal </td><td>: "+geojson.properties.vessel_type+"</td>"+
                      "</tr><tr>"+
                      "<td>Kelas Kapal </td><td>: "+geojson.properties.vessel_class+"</td>"+
                      "</tr><tr>"+
                      "<td>Callsign </td><td>: "+geojson.properties.callsign+"</td>"+
                      "</tr><tr>"+
                      "<td>Status </td><td>: "+geojson.properties.nav_status+"</td>"+
                      "</tr><tr>"+
                      "<td>Latitude </td><td>: "+geojson.properties.latitude+"</td>"+
                      "</tr><tr>"+
                      "<td>longitude </td><td>: "+geojson.properties.longitude+"</td>"+
                      "</tr><tr>"+
                      "<td>MMSI </td><td>: "+geojson.properties.mmsi+"</td>"+
                      "</tr><tr>"+
                      "<td>COG </td><td>: "+geojson.properties.cog+"</td>"+
                      "</tr><tr>"+
                      "<td>SOG </td><td>: "+geojson.properties.sog+"</td>"+
                      "</tr><tr>"+
                      "<td>Flag </td><td>: "+geojson.properties.flag+"</td>"+
                      "</tr><tr>"+
                      "<td>Destination </td><td>: "+geojson.properties.destination+"</td>"+
                      "</tr><tr>"+
                      "<td>Draught </td><td>: "+geojson.properties.draught+" m</td>"+
                      "</tr><tr>"+
                      "<td>Panjang </td><td>: "+geojson.properties.length+" m</td>"+
                      "</tr><tr>"+
                      "<td> Lebar </td><td>: "+geojson.properties.width+" m</td>"+
                      "</tr></table>"
            );
      }
    });

    // LAYERCONTROL
    baseMaps = {
      // "Navtonic": navtoniv,
      "Black": CartoDB_DarkMatter,
      "Grey": CartoDB_GreyMatter,
      "Open Street": standard,
      // "Gray": gray, 
      // "Streets": streets,
      // "Topo": topo,
      // "NatGeo": nationalgeo,
      // "Ocean": ocean,
      // "DarkGry": darkgray,
      // "LightGry":lightgray,
      "Satelite": image,
      // "Shade": shade,
      // "Terain": terain,
      // "USA topo": usa,
      "Topografi":topoindo
      // "Mid": mid,
      // "Spring" : spring,
      // "News": news
    };

    // bsm = {
      // "Open Street": standard,
      // "Streets": streets,
      // "Topo": topo,
      // "NatGeo": nationalgeo,
      // "Ocean": ocean,
      // "Imagy": image,
      // "Shade": shade,
      // "Gray": gray, 
      // "DarkGry": darkgray,
      // "Black": CartoDB_DarkMatter,
      // "Terain": terain
      // "USA topo": usa
      // "Mid": mid,
      // "Spring" : spring,
      // "News": news
    // };

    var configMap = {
            //indonesia
            // latCenter : 6-(6-(-11))/2,
            // lonCenter : 95+(141-95)/2,
            // zoom :5,

            //jakarta
            // latCenter : -6.24158,
            // lonCenter : 106.815948,
            // zoom :11,

            //kayuputih
            latCenter : -6.187638065886,
            lonCenter : 106.886608600,
            zoom :18,

            mapUrl : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            mapStyleId : 22677
    };

    map = new L.map('map', {
      // drawControl: true,
      center: [configMap.latCenter, configMap.lonCenter],
      zoom: configMap.zoom,
      layers: [standard],
      maxZoom : 19,
      minZoom : 3
      // worldCopyJump : true
    });
}


function INITICON(){
    // ikanpari = L.icon({iconUrl: 'aset/img/paripari.png', iconSize: [40,40], iconAnchor:[20,20]});
    // ikanbiru = L.icon({iconUrl: 'aset/img/ikanbiru.png', iconSize: [40,40], iconAnchor:[20,20]});
    // ikanmerah = L.icon({iconUrl: 'aset/img/ikanmerah.png', iconSize: [40,40], iconAnchor:[20,20]});
    // ikanoren = L.icon({iconUrl: 'aset/img/ikanoren.png', iconSize: [40,40], iconAnchor:[20,20]});
    // ikanpink = L.icon({iconUrl: 'aset/img/ikanpink.png', iconSize: [40,40], iconAnchor:[20,20]});
    // ikanhiu = L.icon({iconUrl: 'aset/img/hiuhiu.png', iconSize: [40,40], iconAnchor:[20,20]});
    // ikanpaus = L.icon({iconUrl: 'aset/img/pauspaus.png', iconSize: [40,40], iconAnchor:[20,20]});
    // kepitingicon = L.icon({iconUrl: 'aset/img/kepiting.png', iconSize: [40,40], iconAnchor:[20,20]});
    // udangicon = L.icon({iconUrl: 'aset/img/udangudang.png', iconSize: [40,40], iconAnchor:[20,20]});
    // cumiicon = L.icon({iconUrl: 'aset/img/cumicumi.png', iconSize: [40,40], iconAnchor:[20,20]});
    // lobstericon = L.icon({iconUrl: 'aset/img/lobterlobster.png', iconSize: [40,40], iconAnchor:[20,20]});
    gmpaIcon = L.icon({iconUrl: 'aset/img/epic.gif', iconSize: [50,50], iconAnchor:[25,25]});
    aiscon = L.icon({iconUrl: 'aset/img/v.png', iconSize: [24,24], iconAnchor:[12,12]});
    buletabu = L.icon({iconUrl: 'aset/img/iconabu.png', iconSize: [12,12], iconAnchor:[6,6]});
    buletdefault = L.icon({iconUrl: 'aset/img/icondefault.png', iconSize: [12,12], iconAnchor:[6,6]});
    bulethijau = L.icon({iconUrl: 'aset/img/iconhijau.png', iconSize: [12,12], iconAnchor:[6,6]});
    bulethitam = L.icon({iconUrl: 'aset/img/iconhitam.png', iconSize: [12,12], iconAnchor:[6,6]});
    buletkuning = L.icon({iconUrl: 'aset/img/iconkuning.png', iconSize: [12,12], iconAnchor:[6,6]});
    buletmerah = L.icon({iconUrl: 'aset/img/iconmerah.png', iconSize: [12,12], iconAnchor:[6,6]});
    buletputih = L.icon({iconUrl: 'aset/img/iconputih.png', iconSize: [12,12], iconAnchor:[6,6]});
    bulettransp = L.icon({iconUrl: 'aset/img/icontransp.png', iconSize: [12,12], iconAnchor:[6,6]});
    buletungu = L.icon({iconUrl: 'aset/img/iconungu.png', iconSize: [12,12], iconAnchor:[6,6]});
}


function INITPLUGIN(){
    // LEAFLET search
    map.addControl( new L.Control.Search({
        url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
        jsonpParam: 'json_callback',
        propertyName: 'display_name',
        propertyLoc: ['lat','lon'],
        marker: L.circleMarker([0,0],{radius:20}),
        textPlaceholder: 'cari tempat',
        // autoCollapse: true,
        autoType: false,
        position: 'topright',
        collapsed: false,
        // autoCollapse: false,
        // hideMarkerOnCollapse: true,
        minLength: 2
      }) );

    //LEAFLET attribution
    var attrib = new L.Control.Attribution;
    map.addControl(attrib); 
    attrib.setPrefix('Koordinat : ');
    map.on('mousemove', function(e) {
      attrib.setPrefix('Koordinat : '+e.latlng.lat+", "+e.latlng.lng+'. Zoom:'+map.getZoom()+'. Created by Gopal, 2017');
    });

    //LEAFLET attribution
    // var chat = new L.Control.Attribution;
    // map.addControl(chat); 
    // chat.setPrefix('<div id="pusherChat"><div id="pusherChat"> <div id="membersContent"> <span id="expand"><span class="close">&#x25BC;</span><span class="open">&#x25B2;</span></span> <h2><span id="count">0</span> online</h2> <div class="scroll"> <div id="members-list"></div> </div> </div> <div id="templateChatBox"> <div class="pusherChatBox"> <span class="state"> <span class="pencil"> <img src="../aset/pusherchat/assets/pencil.gif" /> </span> <span class="quote"> <img src="../aset/pusherchat/assets/quote.gif" /> </span> </span> <span class="expand"><span class="close">&#x25BC;</span><span class="open">&#x25B2;</span></span> <span class="closeBox">x</span> <h2><a href="#" title="go to profile"><img src="" class="imgFriend" /></a> <span class="userName"></span></h2> <div class="slider"> <div class="logMsg"> <div class="msgTxt"> </div> </div> <form method="post" name="#123"> <textarea name="msg" rows="3" ></textarea> <input type="hidden" name="from" class="from" /> <input type="hidden" name="to" class="to"/> <input type="hidden" name="typing" class="typing" value="false"/> </form> </div> </div> </div> <div class="chatBoxWrap"> <div class="chatBoxslide"></div> <span id="slideLeft"> <img src="../aset/pusherchat/assets/quote.gif" />&#x25C0;</span> <span id="slideRight">&#x25B6; <img src="../aset/pusherchat/assets/quote.gif" /></span> </div> </div>');
    // $.fn.pusherChat({
    //             'pusherKey':'a2a7b26db09c1c02403d',
    //             'authPath':'../aset/pusherchat/server/pusher_auth.php?user_id=2&name=Roger',
    //             'friendsList' : '../aset/pusherchat/ajax/friends-list.json',
    //             'serverPath' : '../aset/pusherchat/server/server.php',
    //             'profilePage': true,
    //             'onFriendConnect': function(member){
    //                 if (member.id) $('#user_'+member.id).hide();  
    //                 if (!$('.account a:visible').html()) $('.hide').show();
    //             },
    //             'onFriendLogOut': function(member){
    //                 if (member.id) $('#user_'+member.id).show();  
    //                 if ($('.account a:visible').html()) $('.hide').hide();
    //             },
    //             'onSubscription':function(members){
    //                 if ($('.account a:visible').html()) $('.hide').hide();
    //                 $.each(members._members_map, function(val){
    //                     $('#user_'+val).hide();
    //                 });            
    //             }
    //         });

    // "../aset/pusherchat/server/server.php"

    //LEAFLET scale nautica
    map.addControl(new L.Control.ScaleNautic({
        // position: 'bottomleft',
        metric: true,
        imperial: true,
        nautic: true
    }));
}


function INITANGIN(){
    // var layerControl = L.control.layers(bsm).addTo(map);
    var layerControl = L.control.layers().addTo(map);
    var handleError = function(err){
        console.log('handleError...');
        console.log(err);
    };
    WindJSLeaflet.init({ 
        localMode: true,                                 // use a local data file to test before hitting a real wind-js-server
        map: map,                                       // ref to your leaflet Map
        layerControl: layerControl,                    // ref to your leaflet layer control
        useNearest: false,                              // get nearest data to your ISO time string
        timeISO: null,                                  // your ISO time string, falls back to current time (can also use WindJsLeaflet.setTime(time))
        nearestDaysLimit: 7,                            // the maximum range (±) to look for data 
        displayValues: true,                              // whether or not to add a mouseover control to display values
        displayOptions: {
           position: 'bottomright',               // leaflet control position
           displayEmptyString: 'No wind data'           // what to display in mouseover control when no data
        },
        overlayName: 'wind',                            // string to display for the overlay in your layer control
        pingUrl: URLWINDBASE+'alive',        // url to check service availability
        latestUrl: URLWINDBASE+'latest',     // url to get latest data with no required params   
        nearestUrl: URLWINDBASE+'nearest',   // url to get data nearest a specified time ISO 
        errorCallback: handleError
    });  
}


function INITCUACAGEMPA(){
    var listGempa = [];
    gempa = L.layerGroup(listGempa);
    var bmkg, tekananUrl, suhuUrl, hujanUrl, awanUrl;

    var dt = new Date();
    var ss = dt.getHours();
    var k;  // j for windyty data,, k for sadewa data

      // // windyty update data tiap 3 jam sekali sesuai jam windyty (rusia).. sadewa update data 1 jam sekali
      switch(ss) {
          case 0:k = "17";break;
          case 1:k = "18";break;
          case 2:k = "19";break;
          case 3:k = "20";break;
          case 4:k = "21";break;
          case 5:k = "22";break;
          case 6:k = "23";break;
          case 7:k = "00";break;
          case 8:k = "01";break;
          case 9:k = "02";break;
          case 10:k = "03";break;
          case 11:k = "04";break;
          case 12:k = "05";break;
          case 13:k = "06";break;     
          case 14:k = "07";break;
          case 15:k = "08";break;
          case 16:k = "09";break;
          case 17:k = "10";break;
          case 18:k = "11";break;
          case 19:k = "12";break;
          case 20:k = "13";break;
          case 21:k = "14";break;
          case 22:k = "15";break;
          case 23:k = "16";break;
      }

    tekananUrl = URLCUACABASE+'psf_'+k+'.png';
    suhuUrl = URLCUACABASE+'sst_'+k+'.png';
    hujanUrl = URLCUACABASE+'rain_'+k+'.png';
    awanUrl = URLCUACABASE+'cloud_'+k+'.png';
    bmkg = URLCUACABASE+"gempaterkini.xml"; 
    // var bmkg = bas+"gempaauto.xml";

      //init data sadewa
      var smBounds = [[-10.0, 95.0], [10.0, 145.0]];
      var lgBounds = [[70.0, 70.0], [-70.0, 210.0]];

      awan =L.imageOverlay(awanUrl, smBounds);
      tekanan =L.imageOverlay(tekananUrl, smBounds);
      suhu =L.imageOverlay(suhuUrl, smBounds);
      hujan =L.imageOverlay(hujanUrl, smBounds);


    var tgl,jam,lat,lon,mag,ked,wil,pot,cek7hr;
    var koor = [];

    $.ajax({
      type: 'GET',        
      url: bmkg,
      dataType: "xml",
      success:function(xml){
        $(xml).find('Infogempa').each(function(){
          $(this).find("gempa").each(function(){

            info = $(this).text(); 
            $(this).find("Tanggal").each(function(){
              tgl = $(this).text();                   
              var d = new Date();
              d.setDate(d.getDate() - 7); // disini diset brp hari yg lalu, misal 7 hari yg lalu jadinya - 7
              if (d - new Date(tgl) <= 0){cek7hr = true} else cek7hr = false;
            });
            $(this).find("Jam").each(function(){jam = $(this).text()});
            $(this).find("point").each(function(){
              $(this).find("coordinates").each(function(){koor = $(this).text().split(",")}); 
            });
            $(this).find("Lintang").each(function(){lat = $(this).text()});
            $(this).find("Bujur").each(function(){lon = $(this).text()});
            $(this).find("Magnitude").each(function(){mag = $(this).text()});
            $(this).find("Kedalaman").each(function(){ked = $(this).text()});
            $(this).find("Wilayah").each(function(){wil = $(this).text()}); 
            
            // cek ini 2hr lalu ga?
            if (cek7hr){
              // bikin icon
              var gmpa = L.marker([koor[1],koor[0]], {icon: gmpaIcon})
                .bindTooltip("<table  style='font-size:10px'><tr>"+
                              "<td>Tanggal </td><td>: "+tgl+"</td>"+
                            "</tr><tr>"+
                              "<td>Jam </td><td>: "+jam+"</td>"+
                            "</tr><tr>"+
                              "<td>Lintang </td><td>: "+lat+"</td>"+
                            "</tr><tr>"+
                              "<td>Bujur </td><td>: "+lon+"</td>"+
                            "</tr><tr>"+
                              "<td>Magnitude </td><td>: "+mag+"</td>"+
                            "</tr><tr>"+
                              "<td>Kedalaman </td><td>: "+ked+"</td>"+
                            "</tr><tr>"+
                              "<td>Wilayah </td><td>: "+wil+"</td>"+
                            "</tr></table>",
                    {opacity:0.8, sticky:true});
              listGempa.push(gmpa);                   
            }// end of cek (if)

          });
        });
        gempa = L.layerGroup(listGempa);
      }
    }); 
}


function INITBATAS(){
    teri = L.layerGroup();
    zee = L.layerGroup();
    tmbline = L.layerGroup();
    pklline = L.layerGroup();
    tk1 = L.layerGroup();
    tk2 = L.layerGroup();

    // batas Wilayah Daerah Tingkat 2 (kotamadya/kabupaten)
    $.ajax({
      type: 'GET',        
      url: URLTK2,        
      success:function(response){
          // console.log(response);
          var linetk2;
          for(var i=0; i<response.data.length; i++){
              // var titiktkdua=[];
              // console.log(response.data[i].geometry);
              if(response.data[i].geometry.type == "MultiPolygon"){ //multipolygon
                  var titiktkduaMP=[];
                  // console.log("multipolygon");
                  for(var ii=0; ii<response.data[i].geometry.coordinates.length; ii++){
                      // console.log(response.data[i].geometry.coordinates[ii].length);
                      var buff=[];
                      for(var iii=0; iii<response.data[i].geometry.coordinates[ii][0].length; iii++){
                          tik = new L.LatLng(response.data[i].geometry.coordinates[ii][0][iii][1], response.data[i].geometry.coordinates[ii][0][iii][0]); 
                          buff.push(tik);
                      }
                      titiktkduaMP.push(buff);
                      // disini gakuat, ramnya ga cukup terus
                      // linetk2 = new L.polygon(titiktkdua, {color: "#7700ff", weight: 1, opacity: 1, smoothFactor: 1}).bindTooltip('batas teritorial').addTo(map);
                  }
                  // disini banyak nyilang
                  linetk2 = new L.polygon(titiktkduaMP, {color: "green", weight: 1.5, opacity: 1, smoothFactor: 1})
                  // .bindTooltip('batas teritorial').addTo(map);
                  .bindTooltip("<table  style='font-size:11px'><tr>"+
                              "<td>Nama </td><td>: "+response.data[i].properties.NAME_2+"</td>"+
                            "</tr><tr>"+
                              "<td>Tipe </td><td>: "+response.data[i].properties.TYPE_2+"</td>"+
                            "</tr><tr>"+
                              "<td>Kode </td><td>: "+response.data[i].properties.HASC_2+"</td>"+
                            "</tr><tr>"+
                              "<td>Provinsi </td><td>: "+response.data[i].properties.NAME_1+"</td>"+
                            "</tr></table>",
                    {opacity:0.8, sticky:true});//.addTo(map);
              } else if(response.data[i].geometry.type == "Polygon"){ //polygon
                  var titiktkduaP=[];
                  // console.log("polygon")
                  for(var ii=0; ii<response.data[i].geometry.coordinates[0].length; ii++){
                      tik = new L.LatLng(response.data[i].geometry.coordinates[0][ii][1], response.data[i].geometry.coordinates[0][ii][0]); 
                      titiktkduaP.push(tik);
                  }
                  linetk2 = new L.polygon(titiktkduaP, {color: "green", weight: 1.5, opacity: 1, smoothFactor: 1})
                  // .bindTooltip("<table  style='font-size:10px'><tr>"+
                  .bindTooltip("<table  style='font-size:11px'><tr>"+
                              "<td>Nama </td><td>: "+response.data[i].properties.NAME_2+"</td>"+
                            "</tr><tr>"+
                              "<td>Tipe </td><td>: "+response.data[i].properties.TYPE_2+"</td>"+
                            "</tr><tr>"+
                              "<td>Kode </td><td>: "+response.data[i].properties.HASC_2+"</td>"+
                            "</tr><tr>"+
                              "<td>Provinsi </td><td>: "+response.data[i].properties.NAME_1+"</td>"+
                            "</tr></table>",
                    {opacity:0.8, sticky:true});//.addTo(map);
              }
              tk2.addLayer(linetk2);

              // simple dan gampang kalau datanya udh bener
              // linetk2 = new L.polygon(response.data[i].geometry.coordinates, {color: "#7700ff", weight: 1, opacity: 1, smoothFactor: 1}).bindTooltip('batas teritorial').addTo(map);
              // tk2.addLayer(linetk2);
          }
          console.log("beres iterasi tk2");
          // console.log(tk2);
          
      }
    }) // end of ajax


    // batas Wilayah Daerah Tingkat 1 (provinsi)
    $.ajax({
      type: 'GET',
      url: URLTK1,
      success:function(response){
          // console.log(response);
          var linetk1;
          for(var i=0; i<response.data.length; i++){
              // console.log(response.data[i].properties);
              var titiktksatuMP=[];
              for(var ii=0; ii<response.data[i].geometry.coordinates.length; ii++){
                  var buff=[];
                  for(var iii=0; iii<response.data[i].geometry.coordinates[ii][0].length; iii++){
                      tik = new L.LatLng(response.data[i].geometry.coordinates[ii][0][iii][1], response.data[i].geometry.coordinates[ii][0][iii][0]); 
                      buff.push(tik);
                  }
                  titiktksatuMP.push(buff);
              }
              linetk1 = new L.polygon(titiktksatuMP, {color: "blue", weight: 3, opacity: 1, smoothFactor: 1})
              // .bindTooltip('batas teritorial').addTo(map);
                .bindTooltip("<table  style='font-size:11px'><tr>"+
                          "<td>Nama </td><td>: "+response.data[i].properties.VARNAME_1+"</td>"+
                        "</tr><tr>"+
                          "<td>Tipe </td><td>: "+response.data[i].properties.ENGTYPE_1+" / "+response.data[i].properties.TYPE_1+"</td>"+
                        "</tr><tr>"+
                          "<td>Kode </td><td>: "+response.data[i].properties.HASC_1+"</td>"+
                        "</tr><tr>"+
                          "<td>Nama Provinsi </td><td>: "+response.data[i].properties.NAME_1+"</td>"+
                        "</tr></table>",
                {opacity:0.8, sticky:true});//.addTo(map);
              tk1.addLayer(linetk1);
          }
          console.log("beres iterasi tk1");
          // console.log(tk1);
          
      }
    }) // end of ajax


    // batas Negara / Teritorial
    $.ajax({
      type: 'GET',        
      url: URLBATASLINE,        
      success:function(response){
        // console.log('batas',response);
        var teritorialList1 =[]; var teritorialList2 =[]; var teritorialList3 =[]; var teritorialList4 =[];
        var pangkalList1 = []; var pangkalList2 = []; var pangkalList3 = [];
        var tambahanList1 = []; var tambahanList2 = []; var tambahanList3 = []; var tambahanList4 = []; var tambahanList5 = [];
        var zeeList1 = []; var zeeList2 = []; var zeeList3 = []; var zeeList4 = []; var zeeList5 = []; var zeeList6 = [];
        var kontinenList = []; var stList = [];         

        for (i = 0; i < response.features.length; i++) { 
          for (ii = 0; ii < response.features[i].latlon.length; ii++) { 
            if (response.features[i].tag == "ter1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList1.push(tik); }
            if (response.features[i].tag == "ter2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList2.push(tik); }
            if (response.features[i].tag == "ter3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList3.push(tik); }
            if (response.features[i].tag == "ter4"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); teritorialList4.push(tik); }

            if (response.features[i].tag == "pkl1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); pangkalList1.push(tik); }
            if (response.features[i].tag == "pkl2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); pangkalList2.push(tik); }
            if (response.features[i].tag == "pkl3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); pangkalList3.push(tik); }

            if (response.features[i].tag == "tmb1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList1.push(tik); }
            if (response.features[i].tag == "tmb2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList2.push(tik); }
            if (response.features[i].tag == "tmb3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList3.push(tik); }
            if (response.features[i].tag == "tmb4"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList4.push(tik); }
            if (response.features[i].tag == "tmb5"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); tambahanList5.push(tik); }

            if (response.features[i].tag == "zee1"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList1.push(tik); }
            if (response.features[i].tag == "zee2"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList2.push(tik); }
            if (response.features[i].tag == "zee3"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList3.push(tik); }
            if (response.features[i].tag == "zee4"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList4.push(tik); }
            if (response.features[i].tag == "zee5"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList5.push(tik); }
            if (response.features[i].tag == "zee6"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); zeeList6.push(tik); }

            if (response.features[i].tag == "kon"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); kontinenList.push(tik); }
            if (response.features[i].tag == "197"){ tik = new L.LatLng(response.features[i].latlon[ii][1], response.features[i].latlon[ii][0]); stList.push(tik); }         
          }
        }
        
        terline1 = new L.polyline(teritorialList1, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);
        terline2 = new L.polyline(teritorialList2, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);
        terline3 = new L.polyline(teritorialList3, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);
        terline4 = new L.polyline(teritorialList4, {color: "#7700ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('batas teritorial', { noHide: true }); //.addTo(map);

        pklline1 = new L.polyline(pangkalList1, {color: 'red', weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('garis pangkal', { noHide: true }); //.addTo(map);
        pklline2 = new L.polyline(pangkalList2, {color: 'red', weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('garis pangkal', { noHide: true }); //.addTo(map);
        pklline3 = new L.polyline(pangkalList3, {color: 'red', weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('garis pangkal', { noHide: true }); //.addTo(map);

        tmbline1 = new L.polyline(tambahanList1, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
        tmbline2 = new L.polyline(tambahanList2, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
        tmbline3 = new L.polyline(tambahanList3, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
        tmbline4 = new L.polyline(tambahanList4, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);
        tmbline5 = new L.polyline(tambahanList5, {color: "#DBA901", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('zona tambahan', { noHide: true }); //.addTo(map);

        zeeline1 = new L.polyline(zeeList1, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
        zeeline2 = new L.polyline(zeeList2, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
        zeeline3 = new L.polyline(zeeList3, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
        zeeline4 = new L.polyline(zeeList4, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
        zeeline5 = new L.polyline(zeeList5, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);
        zeeline6 = new L.polyline(zeeList6, {color: "#088A08", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('ZEE', { noHide: true }); //.addTo(map);

        konline = new L.polyline(kontinenList, {color: "#2E9AFE", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('landas kontinent', { noHide: true }); //.addTo(map);
        stline = new L.polyline(stList, {color: "#0901ff", weight: 2, opacity: 1, smoothFactor: 1, dashArray: '3, 4'}).bindTooltip('perjanjian 1997', { noHide: true }); //.addTo(map);

        teri = L.layerGroup([terline1, terline2, terline3, terline4]);
        zee = L.layerGroup([zeeline1, zeeline2, zeeline3, zeeline4, zeeline5, zeeline6]);
        tmbline = L.layerGroup([tmbline1, tmbline2, tmbline3, tmbline4, tmbline5]);
        pklline = L.layerGroup([pklline1, pklline2, pklline3]);
        // tk1 = L.layerGroup([]);
        // tk2 = L.layerGroup([]);
        
    
        //masukin semua overlays disini
        overlays = {
            // "Batas Wilayah":{
              // "<font color='#2E9AFE'>Landas Kontinent</font>": konline, 
              // "<font color='#0901ff'>Perjanjian 1997</font>": stline, 
              "<font color='red'>Garis Batas</font>": pklline,
              "<font color='#7700ff'>Teritorial</font>": teri,
              "<font color='#DBA901'>Zona Plus</font>": tmbline, 
              "<font color='#088A08'>ZEE</font>": zee,
              "<font color='blue'>Tingkat 1</font>": tk1,
              "<font color='green'>Tingkat 2</font><br><br><b>Peta Tambahan :</b>": tk2,
            // },
            // "Peta Tambahan":{
              "Dishidros" : dishidros,
              // "DishidrosT" : dishidrost,
              "AIS": ais,
              "KKP wilayah" : kkp,
              "Hulu Migas" : migas,
              "Rapingla" : rapingla,
              "Pasut <br><br><b>Cuaca & Gempa:</b>" : pasut,
            // },
            // "Cuaca & Gempa":{
              "Gempa 7hr": gempa,
              "Tekanan": tekanan,
              "Awan": awan,
              "Suhu": suhu,
              "Hujan": hujan
            // }
        };

        layerControl1 = L.control.layers(baseMaps, overlays).addTo(map);
        //layerControl3 = L.control.groupedLayers(null,ikan, {position:'topright'}).addTo(map);
      },
      error: function() {
        console.log("Error json request"); 
        window.confirm("Data batas gagal diload");
      }
    }); 
}


function INITLAPORANPERSONEL(){
    //laporan
    var lapor3= L.layerGroup([]),lapor7= L.layerGroup([]),lapor30= L.layerGroup([]),lapor365= L.layerGroup([]);
    $.ajax({
      type: 'GET',        
      url: URLINTELBOT+'/filter/last3day',        
      success:function(lapor){
        console.log(lapor);
        for(var i=0; i<lapor.data.length; i++){
          var mark = L.marker([lapor.data[i].lokasi.latitude, lapor.data[i].lokasi.longitude], {icon:buletmerah})
              .bindTooltip("<table width=100% style='font-size:11px'><tr>"+
                            "<td>Date </td><td>: "+lapor.data[i].date+"</td>"+
                            "</tr><tr>"+
                            "<td>Kategori </td><td>: "+lapor.data[i].category+"</td>"+
                            "</tr><tr>"+
                            "<td>Pengirim </td><td>: "+lapor.data[i].dari+"</td>"+
                            "</tr><tr>"+
                            "<td>Lokasi </td><td>: "+lapor.data[i].lokasi.latitude+", "+lapor.data[i].lokasi.longitude+"</td>"+
                            "</tr><tr>"+
                            "<td>Laporan </td><td>: "+lapor.data[i].laporan+"</td>"+
                            "</tr></table>"                        
                            ,{opacity:0.8, sticky:true});
              lapor3.addLayer(mark);
        }
      }
    });
    $.ajax({
      type: 'GET',        
      url: URLINTELBOT+'/filter/lastweek',        
      success:function(lapor){
        console.log(lapor);
        for(var i=0; i<lapor.data.length; i++){
          var mark = L.marker([lapor.data[i].lokasi.latitude, lapor.data[i].lokasi.longitude], {icon:buletmerah})
              .bindTooltip("<table width=100% style='font-size:11px'><tr>"+
                            "<td>Date </td><td>: "+lapor.data[i].date+"</td>"+
                            "</tr><tr>"+
                            "<td>Kategori </td><td>: "+lapor.data[i].category+"</td>"+
                            "</tr><tr>"+
                            "<td>Pengirim </td><td>: "+lapor.data[i].dari+"</td>"+
                            "</tr><tr>"+
                            "<td>Lokasi </td><td>: "+lapor.data[i].lokasi.latitude+", "+lapor.data[i].lokasi.longitude+"</td>"+
                            "</tr><tr>"+
                            "<td>Laporan </td><td>: "+lapor.data[i].laporan+"</td>"+
                            "</tr></table>"                        
                            ,{opacity:0.8, sticky:true});                        
              lapor7.addLayer(mark);
        }
      }
    });
    $.ajax({
      type: 'GET',        
      url: URLINTELBOT+'/filter/lastmonth',        
      success:function(lapor){
        console.log(lapor);
        for(var i=0; i<lapor.data.length; i++){
          var mark = L.marker([lapor.data[i].lokasi.latitude, lapor.data[i].lokasi.longitude], {icon:buletmerah})
              .bindTooltip("<table width=100% style='font-size:11px'><tr>"+
                            "<td>Date </td><td>: "+lapor.data[i].date+"</td>"+
                            "</tr><tr>"+
                            "<td>Kategori </td><td>: "+lapor.data[i].category+"</td>"+
                            "</tr><tr>"+
                            "<td>Pengirim </td><td>: "+lapor.data[i].dari+"</td>"+
                            "</tr><tr>"+
                            "<td>Lokasi </td><td>: "+lapor.data[i].lokasi.latitude+", "+lapor.data[i].lokasi.longitude+"</td>"+
                            "</tr><tr>"+
                            "<td>Laporan </td><td>: "+lapor.data[i].laporan+"</td>"+
                            "</tr></table>"                        
                            ,{opacity:0.8, sticky:true});
              lapor30.addLayer(mark);
        }
      }
    });
    $.ajax({
      type: 'GET',        
      url: URLINTELBOT+'/filter/lastyear',        
      success:function(lapor){
        console.log(lapor);
        for(var i=0; i<lapor.data.length; i++){
          var mark = L.marker([lapor.data[i].lokasi.latitude, lapor.data[i].lokasi.longitude], {icon:buletmerah})
              .bindTooltip("<table width=100% style='font-size:11px'><tr>"+
                            "<td>Date </td><td>: "+lapor.data[i].date+"</td>"+
                            "</tr><tr>"+
                            "<td>Kategori </td><td>: "+lapor.data[i].category+"</td>"+
                            "</tr><tr>"+
                            "<td>Pengirim </td><td>: "+lapor.data[i].dari+"</td>"+
                            "</tr><tr>"+
                            "<td>Lokasi </td><td>: "+lapor.data[i].lokasi.latitude+", "+lapor.data[i].lokasi.longitude+"</td>"+
                            "</tr><tr>"+
                            "<td>Laporan </td><td>: "+lapor.data[i].laporan+"</td>"+
                            "</tr></table>"                        
                            ,{opacity:0.8, sticky:true});
              lapor365.addLayer(mark);
        }
      }
    });

    var resilient = {
      "Laporan Keamanan":{
        "3 days" : lapor3,
        "1 week" : lapor7,
        "1 month" : lapor30,
        "1 year" : lapor365
      // },
      // "Personel":{
      //   "<font color='#FFC100'> AS <i class='fa fa-star'></i></font> ": as,
      //   "<font color='#FBFF00'> AD <i class='fa fa-star-half-o'></i></font>" : ad,
      //   "<font color='#61FF00'> ME <i class='fa fa-star-o'></i></font>" : me,
      //   "<font color='red'> Out <i class='fa fa-frown-o'></i></font>" : out,
      }
    };

    layerControl4 = L.control.groupedLayers(null,resilient, {position:'topright'}).addTo(map);
}

INITICON();
// INITCUACAGEMPA();
// INITBATAS();
INITMAP();
INITPLUGIN();
layerControl1 = L.control.layers(baseMaps).addTo(map);
// INITANGIN();
// INITLAPORANPERSONEL();
/////////////////////


// INIT IKAN INIT IKAN INIT IKAN INIT IKAN INIT IKAN 
// INIT IKAN INIT IKAN INIT IKAN INIT IKAN INIT IKAN 
// var tuna= L.layerGroup([]), pari= L.layerGroup([]), hiu= L.layerGroup([]), cakalang= L.layerGroup([]), tongkol= L.layerGroup([]), makarel= L.layerGroup([]), paus= L.layerGroup([]), cumi= L.layerGroup([]), udang= L.layerGroup([]), lobster= L.layerGroup([]), kepiting= L.layerGroup([]); 

// $.ajax({
//   type: 'GET',        
//   url: URLIKAN,        
//   success:function(ikan){
//   	// console.log(ikan);
//   	for(var i=0; i<ikan.length; i++){
//   		if(ikan[i].ikan === "tuna"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanmerah})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			tuna.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "pari"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanpari})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			pari.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "hiu"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanhiu})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			hiu.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "paus"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanpaus})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			paus.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "cakalang"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanbiru})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			cakalang.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "tongkol"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanoren})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			tongkol.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "makarel"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:ikanpink})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			makarel.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "cumi"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:cumiicon})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			cumi.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "udang"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:udangicon})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			udang.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "kepiting"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:kepitingicon})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			kepiting.addLayer(mark);
//   		}
//   		if(ikan[i].ikan === "lobster"){
//   			var mark = L.marker([ikan[i].koor.lat, ikan[i].koor.lon], {icon:lobstericon})
//   			.bindPopup("<table width=100% style='font-size:11px'><tr>"+
//                       "<td>Ikan </td><td>: "+ikan[i].ikan+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Keterangan </td><td>: "+ikan[i].desc+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Prediksi muncul </td><td>: "+ikan[i].tgl+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Jam muncul </td><td>: "+ikan[i].jam+"</td>"+
//                       "</tr><tr>"+
//                       "<td>Lokasi </td><td>: "+ikan[i].koor.lat+", "+ikan[i].koor.lon+"</td>"+
//                       "</tr></table>"
//                       );
//   			lobster.addLayer(mark);
//   		}
//   	}

//   }, error:function(e){
//   	console.log(e);
//   }
// });

// var ikan = {
// 	"Prediksi Ikan <br>3 hari kedepan ":{
// 		"<font color='red'>Tuna</font>" : tuna,
//         "<font color='#009999'>Pari " : pari,
//         "<font color='#006600'>Hiu " : hiu,
//         "<font color='#0066ff'>Cakalang " : cakalang,
//         "<font color='#ff6600'>Tongkol " : tongkol,
//         "<font color='#cc0099'>Makarel " : makarel,
//         "<font color='#0099ff'>Paus " : paus
// 	},
// 	"Lainnya":{
// 		"Cumi": cumi,
//         "<font color='#ff6600'>Udang" : udang,
//         "<font color='#6600ff'>Lobster " : lobster,
//         "<font color='#339966'>Kepiting " : kepiting
// 	}
// };


//INIT DRAW AND EDIT CONTROL
//INIT DRAW AND EDIT CONTROL
//INIT DRAW AND EDIT CONTROL    
var drawnGeojson = L.featureGroup().addTo(map);
var drawnPolygon = L.featureGroup().addTo(map);
var drawnPolyline = L.featureGroup().addTo(map);
var drawnRectangle = L.featureGroup().addTo(map);
var drawnCircle = L.featureGroup().addTo(map);
var drawnMarker = L.featureGroup().addTo(map);
var drawnMarkerBulat = L.featureGroup().addTo(map);
var drawnItems = L.featureGroup().addTo(map);

INITGAMBARDB();
var STVAK, STHAM, STTEB, STDIA, STDBD, STJAN, STHIV, STTBHIV; 
// STgeo;
var RUMAHS = [];
var VAKSIN=L.layerGroup();
var HAMIL=L.layerGroup();
var TBC=L.layerGroup();
var DBD=L.layerGroup();
var HIV=L.layerGroup();
var TBHIV=L.layerGroup();
var JANTUNG=L.layerGroup();
var DM=L.layerGroup();
var CL=L.layerGroup();

function  mdal(i,ii){
  console.log(i,ii);
  // console.log(RUMAHS);
  $("#tblbiodata tbody").empty();
  $("#tblpuskesmas tbody").empty();
  $("#tblmenular tbody").empty();
  $("#tbltdkmenular tbody").empty();
  $("#tblbiodata tbody").append('<tr><td>Foto :</td>                  <td>'+RUMAHS[0][i].properties.penghuni[ii].foto+'</td></tr>'+ 
                                '<tr><td>Nama :</td>                  <td>'+RUMAHS[0][i].properties.penghuni[ii].nama+'</td></tr>'+ 
                                '<tr><td>TTL :</td>                   <td>'+RUMAHS[0][i].properties.penghuni[ii].ttl+'</td></tr>'+
                                '<tr><td>Gender :</td>                <td>'+RUMAHS[0][i].properties.penghuni[ii].gender+'</td></tr>'+
                                '<tr><td>Agama :</td>                 <td>'+RUMAHS[0][i].properties.penghuni[ii].agama+'</td></tr>'+
                                '<tr><td>Kewarganegaraan :</td>       <td>'+RUMAHS[0][i].properties.penghuni[ii].kwn+'</td></tr>'+
                                '<tr><td>No BPJS :</td>               <td>'+RUMAHS[0][i].properties.penghuni[ii].bpjs+'</td></tr>'+
                                '<tr><td>Pendidikan Terakhir :</td>   <td>'+RUMAHS[0][i].properties.penghuni[ii].pendidikan+' </td></tr>'+
                                '<tr><td>Pekerjaan :</td>             <td>'+RUMAHS[0][i].properties.penghuni[ii].pekerjaan+'</td></tr>'+
                                '<tr><td>Status Menikah :</td>        <td>'+RUMAHS[0][i].properties.penghuni[ii].nikah+'</td></tr>');
                            
  $("#tblpuskesmas tbody").append('<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Berat badan (kg) :</td>       <td>'+RUMAHS[0][i].properties.penghuni[ii].bb+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Tinggi Badan (cm) :</td>      <td>'+RUMAHS[0][i].properties.penghuni[ii].tb+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Gula Darah (mg/dL) :</td>            <td>'+RUMAHS[0][i].properties.penghuni[ii].gula_darah+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Kolesterol (mg/dL) :</td>            <td>'+RUMAHS[0][i].properties.penghuni[ii].kolesterol+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Asam Urat (mg/dL) :</td>             <td>'+RUMAHS[0][i].properties.penghuni[ii].asam_urat+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Tensi (mmHg) :</td>                 <td>'+RUMAHS[0][i].properties.penghuni[ii].tensi+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Kelengkapan Imunisasi :</td>        <td>'+RUMAHS[0][i].properties.penghuni[ii].vaksin_lengkap+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status Hamil :</td>          <td>'+RUMAHS[0][i].properties.penghuni[ii].hamil+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                  '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Diagnosis Terakhir :</td>    <td>'+RUMAHS[0][i].properties.penghuni[ii].diagnosis+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>');
  
  $("#tblmenular tbody").append('<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status TBC :</td>            <td>'+RUMAHS[0][i].properties.penghuni[ii].tbc+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status HIV :</td>            <td>'+RUMAHS[0][i].properties.penghuni[ii].hiv+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status TB HIV :</td>            <td>'+RUMAHS[0][i].properties.penghuni[ii].tb_hiv+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status DBD :</td>            <td>'+RUMAHS[0][i].properties.penghuni[ii].dbd+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>');
  $("#tbltdkmenular tbody").append( '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status DM :</td>             <td>'+RUMAHS[0][i].properties.penghuni[ii].dm+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'+
                                    '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Status Hipertensi :</td>         <td>'+RUMAHS[0][i].properties.penghuni[ii].jantung+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>');
  syncSidebar();
}

function opsipenyakit(response, popup) {
  console.log(response);
  var vak,ham,teb,dia,deb,jan,warna,hai,tbhai;
  for(var i=0; i<response.length; i++){
      var a=response[i].properties.vaksin;
      var b=response[i].properties.hamil;
      var c=response[i].properties.tbc;
      var d=response[i].properties.dm;
      var e=response[i].properties.dbd;
      var f=response[i].properties.jantung;
      var g=response[i].properties.hiv;
      var h=response[i].properties.tb_hiv;
      
      var titiktkduaP=[];
      // console.log("polygon")
      for(var ii=0; ii<response[i].geometry.coordinates[0].length; ii++){
          tik = new L.LatLng(response[i].geometry.coordinates[0][ii][1], response[i].geometry.coordinates[0][ii][0]); 
          titiktkduaP.push(tik);
      }
      if(a < 1){warna = "#8DBAB9"};
      if(a ==1){warna = "#ff9999"};
      if(a ==2){warna = "#E74C3C"};
      if(a > 2){warna = "#A93226"};
      vak = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      vak.properties = response[i].properties;
      if(b < 1){warna = "#8DBAB9"};
      if(b ==1){warna = "#ff9999"};
      if(b ==2){warna = "#E74C3C"};
      if(b > 2){warna = "#A93226"};
      ham = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      ham.properties = response[i].properties;
      if(c < 1){warna = "#8DBAB9"};
      if(c ==1){warna = "#ff9999"};
      if(c ==2){warna = "#E74C3C"};
      if(c > 2){warna = "#A93226"};
      teb = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      teb.properties = response[i].properties;
      if(d < 1){warna = "#8DBAB9"};
      if(d ==1){warna = "#ff9999"};
      if(d ==2){warna = "#E74C3C"};
      if(d > 2){warna = "#A93226"};
      dia = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      dia.properties = response[i].properties;
      if(e < 1){warna = "#8DBAB9"};
      if(e ==1){warna = "#ff9999"};
      if(e ==2){warna = "#E74C3C"};
      if(e > 2){warna = "#A93226"};
      deb = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      deb.properties = response[i].properties;
      if(f < 1){warna = "#8DBAB9"};
      if(f ==1){warna = "#ff9999"};
      if(f ==2){warna = "#E74C3C"};
      if(f > 2){warna = "#A93226"};
      jan = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      jan.properties = response[i].properties;
      if(g < 1){warna = "#8DBAB9"};
      if(g ==1){warna = "#ff9999"};
      if(g ==2){warna = "#E74C3C"};
      if(g > 2){warna = "#A93226"};
      hai = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      hai.properties = response[i].properties;
      if(h < 1){warna = "#8DBAB9"};
      if(h ==1){warna = "#ff9999"};
      if(h ==2){warna = "#E74C3C"};
      if(h > 2){warna = "#A93226"};
      tbhai = new L.polygon(titiktkduaP, {color: warna, weight: 3, opacity: 1, fillOpacity: 0.9}).bindPopup(popup[i]);//.addTo(map);
      tbhai.properties = response[i].properties;
      // syncSidebar();
      VAKSIN.addLayer(vak);
      HAMIL.addLayer(ham);
      TBC.addLayer(teb);
      DM.addLayer(dia);
      DBD.addLayer(deb);
      JANTUNG.addLayer(jan);
      HIV.addLayer(hai);
      TBHIV.addLayer(tbhai);

  }
  CL.on("add",function(){
  	document.getElementById("namapeta").innerHTML="Peta .................";
  	legnd.setPrefix('<b>legend :</b>');
  });
  VAKSIN.on("add",function(){
  	STVAK = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta Kelengkapan Imunisasi";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">lengkap semua</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">1 org tdk lgkp</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">2 org tdk lgkp</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">>2 org tdk lgkp</font></div>'
  	);
  });
  HAMIL.on("add",function(){
  	STHAM = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta Ibu Hamil";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">1 = tdk hamil</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">2 = trimester1</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">3 = trimester2 </div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white"> >4 = trimester3</font></div>'
  	);
  });
  TBC.on("add",function(){
  	STTEB = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta Tuberculosis";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">1 = sehat</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">2 = TB extra paru</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">3 = TB paru</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">4 = TB resisten</font></div>'
  	);
  });
  DM.on("add",function(){
  	STDIA = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta Diabetes Mellitus";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">1 = sehat</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">2 = prediabetes</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">3 = DM terkontrol</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">>4 = DM tidak terkontrol</font></div>'
  	);
  });
  DBD.on("add",function(){
  	STDBD = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta Demam Berdarah";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">sehat</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">1 org tertular</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">2 org tertular</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">>2 org tertular</font></div>'
  	);
  });
  JANTUNG.on("add",function(){
  	STJAN = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta Hipertensi";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">1 = sehat</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">2 = Pre Hipertensi</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">3 = Hipertensi terkontrol</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">4 = Hipertensi tdk terkontrol</font></div>'
  	);
  });
  HIV.on("add",function(){
  	STHIV = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta HIV";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">sehat</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">1 org tertular</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">2 org tertular</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">>2 org tertular</font></div>'
  	);
  });
  TBHIV.on("add",function(){
  	STTBHIV = true;syncSidebar();
  	document.getElementById("namapeta").innerHTML="Peta TB HIV";
  	legnd.setPrefix('<b>legend :</b>'+
  					'<div style="text-align: center;background-color:#8DBAB9 ;padding:10px;">sehat</div>'+
  					'<div style="text-align: center;background-color:#ff9999 ;padding:10px;">1 org tertular</div>'+
  					'<div style="text-align: center;background-color:#E74C3C ;padding:10px;">2 org tertular</div>'+
  					'<div style="text-align: center;background-color:#A93226 ;padding:10px;"><font color="white">>2 org tertular</font></div>'
  	);
  });
  
  VAKSIN.on("remove",function(){STVAK = false;syncSidebar();});
  HAMIL.on("remove",function(){STHAM = false;syncSidebar();});
  TBC.on("remove",function(){STTEB = false;syncSidebar();});
  DM.on("remove",function(){STDIA = false;syncSidebar();});
  DBD.on("remove",function(){STDBD = false;syncSidebar();});
  JANTUNG.on("remove",function(){STJAN = false;syncSidebar();});
  HIV.on("remove",function(){STHIV = false;syncSidebar();});
  TBHIV.on("remove",function(){STTBHIV = false;syncSidebar();});
}

//LEAFLET attribution legend
var legnd = new L.Control.Attribution;
map.addControl(legnd); 
legnd.setPrefix('<b>legend :</b>');

//DataChart
var jmlJANTUNG1=0, jmlJANTUNG2=0, jmlJANTUNG3=0, jmlJANTUNG4=0;
var jmlTBC1=0, jmlTBC2=0, jmlTBC3=0, jmlTBC4=0;
var jmlDM1=0, jmlDM2=0, jmlDM3=0, jmlDM4=0;
var jmlHAMIL1=0, jmlHAMIL2=0, jmlHAMIL3=0, jmlHAMIL4=0;
var jmlVAKSINya=0, jmlVAKSINtdk=0;
var jmlHIVya=0, jmlHIVtdk=0;
var jmlTBHIVya=0, jmlTBHIVtdk=0;
var jmlDBDya=0, jmlDBDtdk=0;

function INITGAMBARDB(){
    $.get("../json/puskesmas.json", function(data, status){
        // RUMAHS.push(data.features);
        var BINpop = [];
        // var data = dataRumah;
        for(var i=0; i<data.features.length; i++){
            var vaksin,hamil,tbc,dm,hiv;
            vaksin=0;hamil=0;tbc=0;dm=0;dbd=0;jantung=0;hiv=0;tb_hiv=0;
            var desc="";
            for (var ii=0; ii<data.features[i].properties.penghuni.length; ii++){
                // if(data.features[i].properties.penghuni[ii].hamil == 'ya'){hamil++};
                if(data.features[i].properties.penghuni[ii].hamil == '1'){jmlHAMIL1++};
                if(data.features[i].properties.penghuni[ii].hamil == '2'){hamil++;jmlHAMIL2++;};
                if(data.features[i].properties.penghuni[ii].hamil == '3'){hamil+=2;jmlHAMIL3++;};
                if(data.features[i].properties.penghuni[ii].hamil == '4'){hamil+=3;jmlHAMIL4++;};
                
                // if(data.features[i].properties.penghuni[ii].tbc == 'ya'){tbc++};
                if(data.features[i].properties.penghuni[ii].tbc == '1'){jmlTBC1++};
                if(data.features[i].properties.penghuni[ii].tbc == '2'){tbc++;jmlTBC2++;};
                if(data.features[i].properties.penghuni[ii].tbc == '3'){tbc+=2;jmlTBC3++;};
                if(data.features[i].properties.penghuni[ii].tbc == '4'){tbc+=3;jmlTBC4++;};

                // if(data.features[i].properties.penghuni[ii].dm == 'ya'){m++};
                if(data.features[i].properties.penghuni[ii].dm == '1'){jmlDM1++};
                if(data.features[i].properties.penghuni[ii].dm == '2'){dm++;jmlDM2++;};
                if(data.features[i].properties.penghuni[ii].dm == '3'){dm+=2;jmlDM3++;};
                if(data.features[i].properties.penghuni[ii].dm == '4'){dm+=3;jmlDM4++;};
                                
                // if(data.features[i].properties.penghuni[ii].jantung == 'ya'){jantung++};
                if(data.features[i].properties.penghuni[ii].jantung == '1'){jmlJANTUNG1++};
                if(data.features[i].properties.penghuni[ii].jantung == '2'){jantung++;jmlJANTUNG2++;};
                if(data.features[i].properties.penghuni[ii].jantung == '3'){jantung+=2;jmlJANTUNG3++;};
                if(data.features[i].properties.penghuni[ii].jantung == '4'){jantung+=3;jmlJANTUNG4++;};
                
                if(data.features[i].properties.penghuni[ii].dbd == 'ya'){dbd++; jmlDBDya++;};
                if(data.features[i].properties.penghuni[ii].dbd == 'tidak'){jmlDBDtdk++};

                if(data.features[i].properties.penghuni[ii].hiv == 'ya'){hiv++;jmlHIVya++;};
                if(data.features[i].properties.penghuni[ii].hiv == 'tidak'){jmlHIVtdk++};
                
                if(data.features[i].properties.penghuni[ii].tb_hiv == 'ya'){tb_hiv++;jmlTBHIVya++;};
                if(data.features[i].properties.penghuni[ii].tb_hiv == 'tidak'){jmlTBHIVtdk++};

                if(data.features[i].properties.penghuni[ii].vaksin_lengkap == 'ya'){jmlVAKSINya++};
                if(data.features[i].properties.penghuni[ii].vaksin_lengkap == 'tidak'){vaksin++;jmlVAKSINtdk++;};
                
                desc = desc+"<tr><td><i class='fa fa-book'>&nbsp;<a onclick=\'mdal("+i+","+ii+")\' data-toggle='modal' href='#modalcoba'>"+data.features[i].properties.penghuni[ii].nama+"</a></i>&nbsp;</td><td></td></tr>"
            }
            data.features[i].properties.vaksin = vaksin;
            data.features[i].properties.hamil = hamil;
            data.features[i].properties.tbc = tbc;
            data.features[i].properties.dm = dm;
            data.features[i].properties.dbd = dbd;
            data.features[i].properties.jantung = jantung;
            data.features[i].properties.hiv = hiv;
            data.features[i].properties.tb_hiv = tb_hiv;
            if(vaksin < 1){vaksin = vaksin+'&nbsp;<span class="label label-success">Ok</span>'};
            if(vaksin ==1){vaksin = vaksin+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(vaksin > 1){vaksin = vaksin+'&nbsp;<span class="label label-danger">Danger</span>'};
            
            if(hamil == 1){hamil = hamil+'&nbsp;<span class="label label-success">Ok</span>'};
            if(hamil == 2){hamil = hamil+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(hamil >= 3){hamil = hamil+'&nbsp;<span class="label label-danger">Danger</span>'};
            
            if(tbc == 1){tbc = tbc+'&nbsp;<span class="label label-success">Ok</span>'};
            if(tbc == 2){tbc = tbc+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(tbc >= 3){tbc = tbc+'&nbsp;<span class="label label-danger">Danger</span>'};
            
            if(dm == 1){dm = dm+'&nbsp;<span class="label label-success">Ok</span>'};
            if(dm == 2){dm = dm+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(dm >= 3){dm = dm+'&nbsp;<span class="label label-danger">Danger</span>'};
            
            if(dbd < 1){dbd = dbd+'&nbsp;<span class="label label-success">Ok</span>'};
            if(dbd ==1){dbd = dbd+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(dbd > 1){dbd = dbd+'&nbsp;<span class="label label-danger">Danger</span>'};
            
            if(jantung == 1){jantung = jantung+'&nbsp;<span class="label label-success">Ok</span>'};
            if(jantung == 2){jantung = jantung+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(jantung >= 3){jantung = jantung+'&nbsp;<span class="label label-danger">Danger</span>'};
            
            if(hiv < 1){hiv = hiv+'&nbsp;<span class="label label-success">Ok</span>'};
            if(hiv ==1){hiv = hiv+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(hiv > 1){hiv = hiv+'&nbsp;<span class="label label-danger">Danger</span>'};
            if(tb_hiv < 1){tb_hiv = tb_hiv+'&nbsp;<span class="label label-success">Ok</span>'};
            if(tb_hiv ==1){tb_hiv = tb_hiv+'&nbsp;<span class="label label-warning">Warn</span>'};
            if(tb_hiv > 1){tb_hiv = tb_hiv+'&nbsp;<span class="label label-danger">Danger</span>'};
            var binpop = "<table style='font-size:14px'>"+
                      "<tr><td><b> "+data.features[i].properties.judul+"</b></td></tr>"+
                    "</table><br>"+
                      "<i>"+data.features[i].properties.desc+"</i></br>"+
                      "<i>Jumlah anggota keluarga :&nbsp;"+data.features[i].properties.penghuni.length+"</i>"+
                    "<table style='font-size:11px'>"+
                      "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                      desc+
                      "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                      "<tr><td>Program Puskesmas</td><td>&nbsp;</td></tr>"+
                      "<tr><td>Status Imunisasi : </td><td>   "+vaksin+"</td></tr>"+
                      "<tr><td>Status Ibu Hamil : </td><td>   "+hamil+"</td></tr>"+
                      "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                      "<tr><td>Penyakit menular</td><td>&nbsp;</td></tr>"+
                      "<tr><td>Status TBC : </td><td>         "+tbc+"</td></tr>"+
                      "<tr><td>Status DBD : </td><td>         "+dbd+"</td></tr>"+
                      "<tr><td>Status HIV : </td><td>         "+hiv+"</td></tr>"+
                      "<tr><td>Status TB HIV : </td><td>         "+tb_hiv+"</td></tr>"+
                      "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                      "<tr><td>Penyakit tdk menular</td><td>&nbsp;</td></tr>"+
                      "<tr><td>Status DM : </td><td>          "+dm+"</td></tr>"+
                      "<tr><td>Status Hipertensi : </td><td>     "+jantung+"</td></tr>"+
                    "</table></br>";
            BINpop.push(binpop);
            var gelo = L.geoJSON(data.features[i],{color: "blue", weight: 1, opacity: 0.5}).bindPopup(binpop)//.addTo(map);
            gelo.properties = data.features[i].properties;
            // drawnItems.addLayer(gelo);
            drawnGeojson.addLayer(gelo);
            desc ="";
            // if(data.features[i].geometry.type == 'circle'){layer.jenis="circle"; drawnCircle.addLayer(layer)}; 
        }
        opsipenyakit(data.features, BINpop);
        INITDATACHART();
        INITCHART();
        // drawnGeojson.on("add",function(){STgeo = true;syncSidebar();});
        // drawnGeojson.on("remove",function(){STgeo = false;syncSidebar();});
      
        BINpop = [];
        RUMAHS.push(data.features);
        // console.log(drawnGeojson);
        // console.log(RUMAHS);
        syncSidebar();
    }); //ajax
} //INITGAMBARDB


// CHART INIT
var datachart, datadefault, dataDM, dataJANTUNG, dataTBC, dataHIV, dataHAMIL, dataTBHIV, dataIMUNISASI, dataDBD, myChart;
function INITCHART(){
	// datachart = datadefault;
	var ctx = document.getElementById("myChart");
	myChart = new Chart(ctx, {
	      type: 'bar',
	      data: datachart,
	      options: {}
	});	
}

function INITDATACHART(){
	datadefault = {
	    labels: ["Hamil","Tdk Vaksin","TBC", "HIV", "TBHIV", "DBD", "Hipertensi", "DM"],
	    datasets: [{
	    	label: 'Kondisi Warga',            
	        data: [jmlHAMIL2+jmlHAMIL3+jmlHAMIL4,jmlVAKSINtdk,jmlTBC2+jmlTBC3+jmlTBC4,jmlHIVya,jmlTBHIVya,jmlDBDya,jmlJANTUNG4+jmlJANTUNG3+jmlJANTUNG2,jmlDM2+jmlDM3+jmlDM4]
	    }]
	};
	dataJANTUNG = {
	    labels: ["Sehat", "Pre Hipertensi", "Hipertensi Terkontrol", "Hipertensi Tdk Terkontrol"],
	    datasets: [{
	    	label: 'Hipertensi',            
	        data: [jmlJANTUNG1, jmlJANTUNG2, jmlJANTUNG3, jmlJANTUNG4],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)',
	            'rgba(231, 76, 60, 1)',
	            'rgba(169, 50, 38, 1)'
	        ]
	    }]
	};
	dataTBC = {
	    labels: ["Sehat", "TB EXTRA", "TB PARU", "TB RESISTEN"],
	    datasets: [{
	    	label: 'TBC',
	        data: [jmlTBC1, jmlTBC2, jmlTBC3, jmlTBC4],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)',
	            'rgba(231, 76, 60, 1)',
	            'rgba(169, 50, 38, 1)'
	        ]
	    }]
	};
	dataDM = {
	    labels: ["Sehat", "PreDiabetes", "DMTerkontrol", "DM TdkTerkontrol"],
	    datasets: [{
	    	label: 'DM',
	        data: [jmlDM1, jmlDM2, jmlDM3, jmlDM4],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)',
	            'rgba(231, 76, 60, 1)',
	            'rgba(169, 50, 38, 1)'
	        ]
	    }]
	};
	dataHAMIL = {
	    labels: ["Tdk Hamil", "Trisemester1", "Trisemester2", "Trisemester3"],
	    datasets: [{
	    	label: 'Kehamilan',
	        data: [jmlHAMIL1, jmlHAMIL2, jmlHAMIL3, jmlHAMIL4],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)',
	            'rgba(231, 76, 60, 1)',
	            'rgba(169, 50, 38, 1)'
	        ]
	    }]
	};
	dataIMUNISASI = {
	    labels: ["Imunisasi Lengkap", "Imunisasi Tdk Lengkap"],
	    datasets: [{
	    	label: 'Imunisasi',
	        data: [jmlVAKSINya, jmlVAKSINtdk],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)'
	        ]
	    }]
	};
	dataHIV = {
	    labels: ["HIV +", "HIV -"],
	    datasets: [{
	    	label: 'HIV',
	        data: [jmlHIVya, jmlHIVtdk],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)'
	        ]
	    }]
	};
	dataTBHIV = {
	    labels: ["TB HIV +", "TB HIV -"],
	    datasets: [{
	    	label: 'TB HIV',
	        data: [jmlTBHIVya, jmlTBHIVtdk],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)'
	        ]
	    }]
	};
	dataDBD = {
	    labels: ["DBD +", "DBD -"],
	    datasets: [{
	    	label: 'DBD',
	        data: [jmlDBDya, jmlDBDtdk],
	        backgroundColor: [
	            'rgba(141, 186, 185, 1)',
	            'rgba(255, 153, 153, 1)'
	        ]
	    }]
	};
};
function UPDATECHART(chart, data) {
    // chart.data.labels.pop();
    // chart.data.datasets.pop();
    // chart.update();
    chart.data.labels = data.labels;
    chart.data.datasets = data.datasets;
    chart.update();
} 

var PENYAKIT = {
  // "AAAAAA": VAKSIN,
  "clear<hr style='margin-top: 0.3em; margin-bottom: 0.3em;'><b>Program Puskesmas :": CL,
  "Imunisasi": VAKSIN,
  "Hamil<br><br><b>Penyakit Menular :": HAMIL,
  "TBC": TBC,
  "HIV": HIV,
  "TB HIV": TBHIV,
  "DBD<br><br><b>Penyakit Tdk Menular :": DBD,
  "Hipertensi":JANTUNG,
  "DM":DM
  
  // "<font color='red'>Garis Batas</font>": pklline,
  // "<font color='#7700ff'>Teritorial</font>": teri,
  // "<font color='#DBA901'>Zona Plus</font>": tmbline, 
  // "<font color='#088A08'>ZEE</font>": zee,
  // "<font color='blue'>Tingkat 1</font>": tk1,
  // "<font color='green'>Tingkat 2</font><br><br><b>Peta Tambahan :</b>": tk2
};
var gambargambar = {
  // "Penyakit":PENYAKIT,
  "Gambar - Gambar":{
    // "GeoJSON" : drawnGeojson,
    "Polyline" : drawnPolyline,
    "Polygon" : drawnPolygon,
    "Rectangle" : drawnRectangle,
    "Circle" : drawnCircle,
    "Marker" : drawnMarker,
    "MarBulat" : drawnMarkerBulat
    // "SEMUA" : drawnItems
  }
};
// var layerControl5 = L.control.groupedLayers(PENYAKIT,gambargambar, {position:'topright'}).addTo(map);
var layerControl5 = L.control.groupedLayers(PENYAKIT,null, {position:'topright'}).addTo(map);

    
    var ldraw = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            // featureGroup: [drawnPolygon, drawnPolyline, drawnRectangle, drawnCircle, drawnMarker, drawnMarkerBulat],
            poly: {
                allowIntersection: false  
            }
        },
        draw: {
            polygon: {
                allowIntersection: false,
                shapeOptions:{showMeasurements: false},
                showArea: true
            },
            polyline: {
                shapeOptions:{
                  showMeasurements: false
                }
            },
            rectangle: {
                showRadius: true,
                shapeOptions:{showMeasurements: false}
            },
            circle: {
                shapeOptions:{showMeasurements: true}
            }
        }
    });
    ldraw.addTo(map);
    
    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        myBindPopUp(layer);
        drawnItems.addLayer(layer);
        if(event.layerType == 'polygon'){layer.jenis ="polygon"; drawnPolygon.addLayer(layer)}; 
        if(event.layerType == 'rectangle'){layer.jenis ="rectangle"; drawnRectangle.addLayer(layer)}; 
        if(event.layerType == 'polyline'){layer.jenis = "polyline"; drawnPolyline.addLayer(layer)}; 
        if(event.layerType == 'circle'){layer.jenis="circle"; drawnCircle.addLayer(layer)}; 
        if(event.layerType == 'marker'){layer.jenis="marker"; drawnMarker.addLayer(layer)}; 
        if(event.layerType == 'markerbulat'){layer.jenis="markerbulat"; drawnMarkerBulat.addLayer(layer)}; 
        syncSidebar();
    });

// window prompt, asking bindpopup!    
function myBindPopUp(objek) {
    var pop1 = prompt("Masukan JUDUL dari gambar / marker", "");
    var pop2 = prompt("Masukan DESKRIPSI dari gambar / marker", "");
    if ((pop1 != null)&&(pop2!= null)) {
        objek.bindPopup(
                      "<table style='font-size:14px'>"+
                        "<tr><td><b>"+pop1+"</b></td></tr>"+
                      "</table></br>"+
                        "<i>"+pop2+"</i></br>"+
                        "<i>Jumlah anggota keluarga :&nbsp;0</i>"+  
                      "<table style='font-size:11px'>"+
                        "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                        // "<tr><td> <i>org 1</i> : </td><td><a data-toggle='modal' href='#modalcoba'><i class='fa fa-list pull-right'>&nbsp;Rekam Medis</i></a></td></tr>"+
                        // "<tr><td> <i>org 2</i> : </td><td><a data-toggle='modal' href='#modalcoba'><i class='fa fa-list pull-right'>&nbsp;Rekam Medis</i></a></td></tr>"+
                        // "<tr><td> <i>org 3</i> : </td><td><a data-toggle='modal' href='#modalcoba'><i class='fa fa-list pull-right'>&nbsp;Rekam Medis</i></a></td></tr></br>"+
                        // "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                        "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                        "<tr><td>Program Puskesmas</td><td>&nbsp;</td></tr>"+
                        "<tr><td>Status Imunisasi : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>Status Ibu Hamil : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                        "<tr><td>Penyakit menular</td><td>&nbsp;</td></tr>"+
                        "<tr><td>Status TBC : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>Status HIV : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>Status TB HIV : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>Status DBD : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>"+
                        "<tr><td>Penyakit tdk menular</td><td>&nbsp;</td></tr>"+
                        "<tr><td>Status DM : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        "<tr><td>Status Hipertensi : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+

                        // "<tr><td>Status Vaksinasi : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        // "<tr><td>Status Ibu Hamil : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        // "<tr><td>Status TBC : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                        // "<tr><td>Status DM : </td><td>0&nbsp;<span class='label label-success'>Ok</span></td></tr>"+
                      "</table></br>"
                      );
        objek.judul = pop1;
        objek.desc = pop2;
    }
}
//window prompt, asking bindpopup!
function flyto(nelat,nelng,swlat,swlng,id) {
  map.flyToBounds(L.latLngBounds(L.latLng(nelat,nelng),L.latLng(swlat,swlng)));
  console.log()
  drawnGeojson.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  DBD.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  JANTUNG.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  VAKSIN.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  HAMIL.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  TBC.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  DM.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  HIV.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  TBHIV.eachLayer(function (layer) {
  	if(layer._leaflet_id == id){
  		layer.openPopup();	
  	}
  });
  // map.openPopup(popup);
  // layer.openPopup();
}
function panto(lat,lng) {
  map.panTo(L.latLng(lat,lng));
}

function syncSidebar() {
  /* Empty sidebar features */
  document.getElementById("myinput").value="";
  $("#feature-list tbody").empty();
  // $("#feature-lost tbody").empty();
  if(STTBHIV){
  	datachart=dataTBHIV;
  	TBHIV.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
      	// console.log(layer);
      	// console.log(layer._bounds._northEast.lat);
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STHIV){
  	datachart=dataHIV;
    HIV.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
      	// console.log(layer);
      	// console.log(layer._bounds._northEast.lat);
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STDBD){
  	datachart=dataDBD;
    DBD.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
      	// console.log(layer);
      	// console.log(layer._bounds._northEast.lat);
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STJAN){
  	datachart=dataJANTUNG;
    JANTUNG.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STVAK){
  	datachart=dataIMUNISASI;
    VAKSIN.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STHAM){
  	datachart=dataHAMIL;
    HAMIL.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STTEB){
  	datachart=dataTBC;
    TBC.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  if(STDIA){
  	datachart=dataDM;
    DM.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }

  /* GEOJSON */
  if(!STVAK && !STDIA && !STTEB && !STHAM && !STDBD && !STJAN && !STHIV && !STTBHIV){
  	datachart = datadefault; 	
    drawnGeojson.eachLayer(function (layer) {
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._layers[layer._leaflet_id - 1]._bounds._northEast.lat+','+layer._layers[layer._leaflet_id - 1]._bounds._northEast.lng+','+layer._layers[layer._leaflet_id - 1]._bounds._southWest.lat+','+layer._layers[layer._leaflet_id - 1]._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer._layers[layer._leaflet_id - 1].options.color+">"+layer.properties.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer._layers[layer._leaflet_id - 1].options.color+">"+layer.properties.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    });
  }
  
  /* POLYLINE */ 
  drawnPolyline.eachLayer(function (layer) {
    // if (map.hasLayer(drawnPolyline)) {
      // console.log(layer._bounds);
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polyline.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.judul+"</font>"+'</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    // }
  });
  /* POLYGON */
  drawnPolygon.eachLayer(function (layer) {
    // if (map.hasLayer(drawnPolygon)) {
      // console.log(layer);
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/polygon.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    // }
  });
  /* RECTANGLE */
  drawnRectangle.eachLayer(function (layer) {
    // if (map.hasLayer(drawnRectangle)) {
      // console.log(layer);
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="flyto('+layer._bounds._northEast.lat+','+layer._bounds._northEast.lng+','+layer._bounds._southWest.lat+','+layer._bounds._southWest.lng+','+layer._leaflet_id+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/kotak.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    // }
  });
  /* CIRCLE */
  drawnCircle.eachLayer(function (layer) {
    // if (map.hasLayer(drawnCircle)) {
      // console.log(layer);
      if (map.getBounds().contains(layer.getBounds())) {
        $("#feature-list tbody").append('<tr onclick="panto('+layer._latlng.lat+','+layer._latlng.lng+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src="../aset/img/lingkaran.png" width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + "<font color="+layer.options.color+">"+layer.judul+"</font>" + '</td><td class="feature-name">' + "<font color="+layer.options.color+">"+layer.desc+"</font>"+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    // }
  });
  /* MARKER */
  drawnMarker.eachLayer(function (layer) {
    // if (map.hasLayer(drawnMarker)) {
      // console.log(layer);
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr onclick="panto('+layer._latlng.lat+','+layer._latlng.lng+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src='+layer.options.icon.options.iconUrl+' width="13" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + layer.judul + '</td><td class="feature-name">' + layer.desc + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    // }
  });
  /* MARKERBULAT */
  drawnMarkerBulat.eachLayer(function (layer) {
    // if (map.hasLayer(drawnMarkerBulat)) {
      // console.log(layer);
      if (map.getBounds().contains(layer.getLatLng())) {
        $("#feature-list tbody").append('<tr onclick="panto('+layer._latlng.lat+','+layer._latlng.lng+')" class="feature-row" id="' + L.stamp(layer) + '"><td style="text-align: center; vertical-align: middle;"><img src='+layer.options.icon.options.iconUrl+' width="20" height="20""></td><td style="vertical-align: middle;" class="feature-name">' + layer.judul + '</td><td class="feature-name">' + layer.desc + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    // }
  });

  // myChart.update();
  UPDATECHART(myChart, datachart);
}


// SAVE FILE GEOJSON LOKAL SAVE FILE GEOJSON LOKAL
// SAVE FILE GEOJSON LOKAL SAVE FILE GEOJSON LOKAL
function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);
    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */
    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */
    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}


map.on("moveend", function (e) {
  syncSidebar();
});







map.on('draw:editstart', function(e) {
  EDITSTAT = true;       
});
map.on('draw:editstop', function() {
  EDITSTAT = false;
  syncSidebar();
});
map.on('draw:drawstart', function(e) {
  var type = e.layerType;
  if (type === 'polyline' || type === 'polygon')
       DRAWSTAT = true;
});
map.on('draw:drawstop', function() {
  DRAWSTAT = false;
});
map.on('draw:edited', function(e) {
  console.log("edited");
  var layers = e.layers;
  layers.eachLayer(function (layer) {
     //do whatever you want; most likely save back to db
      console.log(layer);
  });
  syncSidebar();
});
map.on('draw:deleted', function(e) {
  console.log("deleted");
  var layers = e.layers;
  layers.eachLayer(function (layer) {
     //do whatever you want; most likely save back to db
      console.log(layer);
      drawnItems.removeLayer(layer);
      if(layer.jenis == 'polygon'){drawnPolygon.removeLayer(layer)}; 
      if(layer.jenis == 'rectangle'){drawnRectangle.removeLayer(layer)}; 
      if(layer.jenis == 'polyline'){drawnPolyline.removeLayer(layer)}; 
      if(layer.jenis == 'circle'){drawnCircle.removeLayer(layer)}; 
      if(layer.jenis == 'marker'){drawnMarker.removeLayer(layer)}; 
      if(layer.jenis == 'markerbulat'){drawnMarkerBulat.removeLayer(layer)};   
  });
  syncSidebar();
});


// RIGHTBAR
$("#formselectloc").click(function(e) {
  LOCATIONSTAT = !LOCATIONSTAT;
  return false;
});

map.on('click', function(e) {
  if(LOCATIONSTAT){
    // alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
    var lat = document.getElementById("formlat");
    var lon = document.getElementById("formlon"); 
    lat.value = e.latlng.lat;
    lon.value = e.latlng.lng;
    LOCATIONSTAT = false;
  }
});

$("#formkirim").click(function() {
  BUFFERFORM.judul = document.getElementById("formjudul").value;
  BUFFERFORM.kategori = document.getElementById("formkategori").value;
  BUFFERFORM.tingkat = document.getElementById("formtingkat").value;
  BUFFERFORM.tanggal = document.getElementById("formtanggal").value;
  BUFFERFORM.lat = document.getElementById("formlat").value;
  BUFFERFORM.lon = document.getElementById("formlon").value;
  BUFFERFORM.lokasi = document.getElementById("formlokasi").value;
  BUFFERFORM.isi = document.getElementById("formisi").value;
  BUFFERFORM.foto1 = document.getElementById("formfotokjadian1").value.slice(12);
  BUFFERFORM.foto2 = document.getElementById("formfotokjadian2").value.slice(12);
  BUFFERFORM.orang = BUFFERORG;
  
  // kirim k API & upload foto 
  console.log(BUFFERFORM);
  $.post(URLAPI+"laporan", BUFFERFORM, function(result){
        // console.log(result);
        alert(result.message);
  });
  
  bebersihform();
  return false;
});
$("#formbersih").click(function() {
  bebersihform();
  return false;
});
$("#formorgkirim").click(function() {
  BUFFERORGorg.nama = document.getElementById("formorgnama").value; 
  BUFFERORGorg.umur = document.getElementById("formorgumur").value;
  BUFFERORGorg.sebagai = document.getElementById("formorgsebagai").value;
  BUFFERORGorg.suku = document.getElementById("formorgsuku").value;
  BUFFERORGorg.agama = document.getElementById("formorgagama").value;
  BUFFERORGorg.alamat = document.getElementById("formorgalamat").value;
  BUFFERORGorg.fotoorg1 = document.getElementById("formorgfoto1").value.slice(12);
  BUFFERORGorg.fotoorg2 = document.getElementById("formorgfoto2").value.slice(12);
  BUFFERORGorg.fotoorg3 = document.getElementById("formorgfoto3").value.slice(12);
  
  BUFFERORG.push(BUFFERORGorg);

  // upload foto 
  console.log(BUFFERORG);
  console.log(BUFFERORGorg);

  $("#formtabelorg tbody").append(
    '<tr>'+
      '<td>'+document.getElementById("formorgnama").value+'</td>'+
      '<td>'+document.getElementById("formorgumur").value+'</td>'+
      '<td>'+document.getElementById("formorgsebagai").value+'</td>'+
      '<td>'+document.getElementById("formorgsuku").value+'</td>'+
      '<td>'+document.getElementById("formorgagama").value+'</td>'+
      '<td>'+document.getElementById("formorgalamat").value+'</td>'+
      '<td><a href><i class="fa fa-file"></i></a></td>'+
    '</tr>');
  bebersihorg();

  BUFFERORGorg = {};
  return false;
});
$("#formorgbersih").click(function() {
  bebersihorg();
  return false;
});

function bebersihorg(){
  document.getElementById("formorgnama").value = "";
  document.getElementById("formorgumur").value = "";
  document.getElementById("formorgsebagai").value = "";
  document.getElementById("formorgsuku").value = "";
  document.getElementById("formorgagama").value = "";
  document.getElementById("formorgalamat").value = "";
  document.getElementById("formorgfoto1").value = "";
  document.getElementById("formorgfoto2").value = "";
  document.getElementById("formorgfoto3").value = "";
}
function bebersihform(){
  document.getElementById("formjudul").value = "";
  document.getElementById("formkategori").value = "";
  document.getElementById("formtingkat").value = "";
  document.getElementById("formtanggal").value = "";
  document.getElementById("formlat").value = "";
  document.getElementById("formlon").value = "";
  document.getElementById("formlokasi").value = "";
  document.getElementById("formisi").value = "";
  document.getElementById("formfotokjadian1").value = "";
  document.getElementById("formfotokjadian2").value = "";
  BUFFERORG = [];
  $("#formtabelorg tbody").empty();
}

// INITTABELLAPORAN();
function INITTABELLAPORAN(){
  $.get(URLAPI+"laporan", function(data, status){
        console.log(data);
        // alert("Data: " + data + "\nStatus: " + status);
        for(var i=0; i<data.data.length; i++){
            $("#tabellap tbody").append(
            '<tr>'+
              '<td>'+data.data[i].judul +'</td>'+
              '<td>'+data.data[i].kategori +'</td>'+
              '<td>'+data.data[i].tanggal +'</td>'+
              '<td>'+data.data[i].lokasi +'</td>'+
              '<td>'+data.data[i].isi +'</td>'+
              '<td><a href><i class="fa fa-user"></i></a></td><td><a href><i class="fa fa-photo"></i></a></td>'+
            '</tr>');
        }
    });
}
  

// LEFTBAR
function ngefilter() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myinput");
  filter = input.value.toUpperCase();
  table = document.getElementById("feature-list");
  tr = table.getElementsByTagName("tr");
  
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    for (z = 0; z < 3; z++) { //3 kalo searchnya ampe 3 kolom/row jenis,judul,deskripsi
	    td = tr[i].getElementsByTagName("td")[z];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    } 
	}
  }
}

$("#download-btn").click(function() {
  // console.log(drawnItems);
  var namafile = "gambar.json";
  var buff = drawnItems.toGeoJSON();
  console.log(buff);
  var i=0;
  drawnItems.eachLayer(function (layer) {
    console.log(layer);
    buff.features[i].properties.judul = layer.judul;
    buff.features[i].properties.jenis = layer.jenis;
    buff.features[i].properties.desc = layer.desc;
    buff.features[i].properties.color = layer.options.color;
    buff.features[i].properties.radius = layer._mRadius;
    i++;
  });
  var print = JSON.stringify(buff);
  var popup = prompt("Tulis nama filenya. extension jangan diubah", ".json");  
    if (popup != null) {
        namafile = popup;
    }
  download(print, namafile, 'text/plain');
  return false;
});
$("#sidebar-legend-btn").click(function() {
	animateSidebar();
  // animateRightbar();
  return false;
});

$("#sidebar-form-btn").click(function() {
  // animateSidebar();
  animateRightbar();
  return false;
});

$("#tutupR").click(function() {
  animateRightbar();
  return false;
});
$("#tutupS").click(function() {
  animateSidebar();
  return false;
});
$("#tabel").click(function() {
	window.location.href = "../html/tabelkost";
});
$("#about").click(function() {
	window.location.href = "../html/about";
});
$("#logout").click(function() {
  window.location.href = "login.html";
});

// $("#backend").click(function() {
//   window.location.href = "backend.html";
// });
$("#backend").click(function() {
	window.location.href = "../admin/keluarga_ctrl";
});
$("#login").click(function() {
	window.location.href = "../home/login";
});
$("#logout").click(function() {
	window.location.href = "../home/logout";
});

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function animateRightbar(){
  $("#rightbar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function IsJsonString(str) {try {JSON.parse(str)}catch (e) {return false}return true}


// animateSidebar();
// animateRightbar();





// Load charts
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//   ['level', 'jml'],
//   ['Sehat', 8],
//   ['TB Extra Paru', 3],
//   ['TB Paru', 2],
//   ['TB Resisten', 1]
// ]);
//   var options = {'title':'Status TBC', 'width':500, 'height':300};
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, options);
// }

// var dataJANTUNG = {
//     labels: ["Sehat", "Pre Hipertensi", "Hipertensi Terkontrol", "Hipertensi Tdk Terkontrol"],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataTBC = {
//     labels: ["Sehat", "TB EXTRA", "TB PARU", "TB RESISTEN"],
//     datasets: [{
//         label: '# of Votes',
//         data: [33, 27, 2, 3],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataDM = {
//     labels: ["Sehat", "Pre Diabetes", "DM Terkontrol", "DM Tdk Terkontrol"],
//     datasets: [{
//         label: '# of Votes',
//         data: [40, 9, 0, 1],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataHAMIL = {
//     labels: ["Tdk Hamil", "Trisemester1", "Trisemester2", "Trisemester3"],
//     datasets: [{
//         label: '# of Votes',
//         data: [55, 12, 3, 1],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)',
//             'rgba(231, 76, 60, 1)',
//             'rgba(169, 50, 38, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataIMUNISASI = {
//     labels: ["Lengkap", "Tdk Lengkap"],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 82],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataHIV = {
//     labels: ["Ya", "Tdk"],
//     datasets: [{
//         label: '# of Votes',
//         data: [79, 12],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataTBHIV = {
//     labels: ["Ya", "Tdk"],
//     datasets: [{
//         label: '# of Votes',
//         data: [66, 22],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var dataDBD = {
//     labels: ["Ya", "Tdk"],
//     datasets: [{
//         label: '# of Votes',
//         data: [51, 12],
//         backgroundColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderColor: [
//             'rgba(141, 186, 185, 1)',
//             'rgba(255, 153, 153, 1)'
//         ],
//         borderWidth: 1
//     }]
// };
// var datachart = dataHAMIL;
// if(STTBHIV){datachart=dataTBHIV;};
// if(STVAK){datachart=dataTBHIV;};
// if(STHAM){datachart=dataHAMIL;};
// if(STTEB){datachart=dataTBC;};
// if(STDIA){datachart=dataDM;};
// if(STDBD){datachart=dataDBD;};
// if(STJAN){datachart=dataJANTUNG;};
// if(STHIV){datachart=dataHIV;};
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: datachart,
//     options: {}
// });


// PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR
// PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR
// PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR PR
// .ngesave gambar ke DB

// .nambahin properties gambar2 pas mau ngesave ke file/db:
// ..warna garis
// ..ketebalan garis
// ..popup data
// ..luas wilayah
// ..iconUrl
// ..showMeasurements
// ..
// ..

// .
// .gambar yg marker ama marker bulet warnanya ubah2 sendiri terus
// .dr list tabel di kiri blm bisa filter, pke search dr bootsrap tabel
// .dr list tabel di kiri pas diklik datanya harusnya menuju ke objek
// .
// .layer control di kanan terlalu rame,, banyak yg harusnya disatuin
// .init ikan blm dibikin
// .init gambar jg blm dibikin, masih on floor
// .
// .
// .backend (halaman admin) masih blm disentuh
// .autentikasi / login belum ada
// .
// .
// .
// .
// .
// .
