document.addEventListener("DOMContentLoaded", function() {
    function showAlert(message) {
        alert(message);
    }

    function handleClickEvent(elements, action) {
        elements.forEach(function(element) {
            element.addEventListener("click", function() {
                var title = this.textContent;
                action(title);
            });
        });
    }

    var videoTitles = document.querySelectorAll("#video");
    var audioTitles = document.querySelectorAll("#audio");
    var imageGalleryTitle = document.getElementById("gambar");

    handleClickEvent(videoTitles, function(title) {
        showAlert("Ini " + title);
    });

    handleClickEvent(audioTitles, function(title) {
        showAlert("Ini " + title);
    });

    imageGalleryTitle.addEventListener("click", function() {
        showAlert("Ini judul gambar!");
    });
});

document.querySelector('h1 img').addEventListener('click', function() {
    document.getElementById('teks1').style.display = 'block';
});


