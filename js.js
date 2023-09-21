// bs tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// naver map
var HOME_PATH = window.HOME_PATH || '.';
var map = new naver.maps.Map('map', {
center: new naver.maps.LatLng(37.45, 126.85),
zoom: 10,
scaleControl: true,
logoControl: true,
mapDataControl: true,
zoomControl: true,
minZoom: 6
});

var marker = new naver.maps.Marker({
position: new naver.maps.LatLng(37.266093058, 126.999850621),
map: map, icon: {
content: [
    '<div class="">',
    '<div class="text-dark bg-light border border-2 border-dark mb-2" style="transform:translateX(-30%)">거주지(수원)</div></div>',
    '<div class="my-auto d-inline-block border rounded-5 text-white bg-primary pb-1 pt-1 px-2"><i class="bi bi-house-fill"></i></div>',
].join(''),
size: new naver.maps.Size(38, 58),
anchor: new naver.maps.Point(19, 58),
},
});
var suwon = new naver.maps.LatLng(37.266093058, 126.999850621);
var pangyo = new naver.maps.LatLng(37.394726159, 127.111209047);
var gangnam = new naver.maps.LatLng(37.496486063, 127.028361548);
var seongsu = new naver.maps.LatLng(37.544641605, 127.055896738);
var yeoui = new naver.maps.LatLng(37.521715859, 126.924290018);
var guro = new naver.maps.LatLng(37.502205826, 126.881843337);
var songdo = new naver.maps.LatLng(37.429781229, 126.654375724);

var markers = [];
var infowindows = [];

var polyline = new naver.maps.Polyline({
map: map,
path: [
suwon, pangyo,
suwon, gangnam,
suwon, seongsu,
suwon, yeoui,
suwon, guro,
suwon, songdo,
]
});

markers.push(new naver.maps.Marker({
map: map,
position: pangyo
}));

infowindows.push(new naver.maps.InfoWindow({
content: [
'판교역까지 40분 내외'
].join('')
}));

markers.push(new naver.maps.Marker({
map: map,
position: gangnam
}));

infowindows.push(new naver.maps.InfoWindow({
content: [
'강남역까지 60분 내외'
].join('')
}));

markers.push(new naver.maps.Marker({
map: map,
position: seongsu
}));

infowindows.push(new naver.maps.InfoWindow({
content: [
'성수역까지 70분 내외'
].join('')
}));


markers.push(new naver.maps.Marker({
map: map,
position: yeoui
}));

infowindows.push(new naver.maps.InfoWindow({
content: [
'여의나루역까지 50분 내외'
].join('')
}));

markers.push(new naver.maps.Marker({
map: map,
position: guro
}));

infowindows.push(new naver.maps.InfoWindow({
content: [
'구로역까지 40분 내외'
].join('')
}));


markers.push(new naver.maps.Marker({
map: map,
position: songdo
}));

infowindows.push(new naver.maps.InfoWindow({
content: [
'송도역까지 65분 내외'
].join('')
}));


for (let i = 0; i < markers.length; i++) {
naver.maps.Event.addListener(markers[i], "mouseover", function (e) {
if (infowindows[i].getMap()) {
    infowindows[i].close();
} else {
    infowindows[i].open(map, markers[i]);
}
});

}

// navbar

$(document).scroll(function () {
    let scrolltop = $(window).scrollTop();
    let scrollBottom = $('body').height() - $(window).height() - 100;
    let about = $('header').height() - $(window).height() * 0.7;
    let skills = about + $('section#about').height();
    let project = skills + $('section#skills').height() + $(window).height() * 0.5;

if (scrolltop > 50 && scrolltop < scrollBottom) {
$('.navbar').removeClass('navhide');
$('.navbar').addClass('navshow');
} else {
$('.navbar').removeClass('navshow');
$('.navbar').addClass('navhide');
}

if (scrolltop < about) {
$('.nav-item>a').css("color", "black");
} else {
if (scrolltop > about) {
    $('.nav-item>a').css("color", "black");
    $('.nav-item>a').eq(1).css("color", "darkgreen");
}
if (scrolltop > skills) {
    $('.nav-item>a').css("color", "black");
    $('.nav-item>a').eq(2).css("color", "darkgreen");
}
if (scrolltop > project) {
    $('.nav-item>a').css("color", "black");
    $('.nav-item>a').eq(3).css("color", "darkgreen");
}
}

});  

// window
function getFormattedTime() {
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let ampm = hours >= 12 ? '오후' : '오전';

hours = hours % 12;
hours = hours ? hours : 12;

minutes = minutes < 10 ? '0' + minutes : minutes;

return `${ampm} ${hours}:${minutes}`;
}
setInterval(() => {
document.getElementById('time').innerText = getFormattedTime();
}, 1000);

function closewin( n ){
    if( n == 100){
        for(var i=0; i<$('.windowpop').length; i++){
            $('.windowpop').eq(i).hide();
        }
    }else{
        $('.windowpop').eq(n).hide();
    }
}

function openwin(n){
    $('.windowpop').eq(n).show();
}

function openmsg(n){
    $('.windowmsg').eq(n).show();
    $('.windowpop').eq(0).find('.badge').eq(n).hide();
}
