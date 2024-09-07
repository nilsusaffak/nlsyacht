
var slideIndex = 0;
var slideInterval;

// Sayfa yüklendiğinde slayt gösterisini başlatsın
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
    document.querySelector('.slideshow-container').addEventListener('mouseover', pauseSlides);
    document.querySelector('.slideshow-container').addEventListener('mouseleave', resumeSlides);
});

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
        return; // Eğer hiç slayt yoksa fonksiyondan çık
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slideInterval = setTimeout(showSlides, 4000); // Slayt değiştirme işlemini tekrarla
}

function pauseSlides() {
    clearTimeout(slideInterval); // Slayt gösterisini durdur
}

function resumeSlides() {
    slideInterval = setTimeout(showSlides, 4000); // Slayt gösterisini belirli bir süre sonra devam ettir
}

// Önceki ve sonraki düğmeler 
function plusSlides(n) {                   //manuel slayt geçişi
    showSlides(slideIndex += n);     
}

// Resimlerin üzerine gelince (noktalar için)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// DOM manipülasyonu
$(document).ready(function() {
    // Yeni tekne ekleme formunu 
    $('#newBoatForm').submit(function(event) {
        event.preventDefault(); // Formun sayfayı yenilemesini engelle
        
        // Yeni tekne adını alıyor
        var newBoatName = $('#boatName').val();
        
        // Tekne listesine yeni öğe olarak ekle
        var newBoatItem = $('<li></li>').text(newBoatName);
        var checkbox = $('<input type="checkbox" class="checkbox">');
        newBoatItem.prepend(checkbox);
        
        $('#boatList').append(newBoatItem);
        
        // Formu sıfırla
        this.reset();
    });

    // Liste öğelerine tıklandığında işleyici ekle
    $('#boatList').on('click', '.checkbox', function() {
        $(this).parent().toggleClass('completed');
    });
});


