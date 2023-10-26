let imgs = ['assets/photo/gallery1.jpg', 'assets/photo/gallery2.jpg', 'assets/photo/gallery3.jpg'];
for (let item of document.querySelectorAll('.gallery__image')) {
    item.onclick = function () {
        for (i of imgs) {
            if (item.src.split("Lab05/")[1] === i) {
                document.querySelector('#gallery__viewImage').src = i;
            }
        }
    }
}
document.querySelector(".gallery__image").click();