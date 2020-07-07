var detailedImage = document.querySelector(".detail-image");
var detailedTitle = document.querySelector(".detail-title");
var thumbnails = document.querySelectorAll("a");
var detailedContainer = document.querySelector(".detail-container");
var thumbnailList = document.querySelector(".settings-list")

function showDetails() {
    detailedContainer.classList.remove("hidden");
    thumbnailList.classList.remove("hidden");
    detailedContainer.classList.add("is-tiny");
    setTimeout(function () {
        detailedContainer.classList.remove("is-tiny");
    }, 1);
}
function hideDetails() {
    detailedContainer.classList.add("hidden");
    thumbnailList.classList.add('hidden');
}
function setDetals(thumbnail) {
    detailedImage.setAttribute("src",
        thumbnail.getAttribute("href"));
    detailedTitle.textContent = thumbnail.getAttribute("data-detailed-text");
}

function addListener(thumbnail) {
    thumbnail.addEventListener("click", function(event) {
        event.preventDefault();
        setDetals(thumbnail);
        showDetails();
    })
}

for(var i=0; i < thumbnails.length; i++){
    addListener(thumbnails[i]);
}