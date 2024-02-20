const imagesGenerator = document.querySelector(".images-generator");
const loadMoreImagesBtn = document.querySelector(".load-more-images");

let count =1;
function fetchimages(count){
    for(let i=count;i<=count+4;i++){
        let createImageElement = document.createElement("img");
        createImageElement.src=`https://picsum.photos/300?random=${i}`;
        imagesGenerator.appendChild(createImageElement);
    }
}

fetchimages(count);

loadMoreImagesBtn.addEventListener("click",()=>{
    fetchimages((count += 5));
    
})
