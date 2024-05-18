// İçecekler bölümündeki menü öğelerine pembe arka plan rengi ekleme
var iceceklerMenuItems = document.querySelectorAll("#içecekler .menu-item");
iceceklerMenuItems.forEach(function(item) {
    item.style.backgroundColor = "#ffc0cb";
});