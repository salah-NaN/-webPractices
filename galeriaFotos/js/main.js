const photoContainer = 
document.getElementById("photo-container");


for(let i = 0; i < 4; i++) {
    photoContainer.innerHTML += `<div class="column"></div>`
    for(let j = 1; j <= 5; j++) {
        photoContainer.getElementsByClassName("column")[i].innerHTML += getPhotoElement(j + 5 * i);
        
    }
}


// for(let i = 1; i <= 20; i++) {
//     photoContainer.innerHTML += getPhotoElement(i);
// }

function getPhotoElement(photo_id){
    return `<a href="#"> <img class="photo" 
    alt="Photo ${photo_id}" 
    src="img/photo_${photo_id}.jpg"></a>`;
}