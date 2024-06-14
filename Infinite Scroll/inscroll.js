const imgContainerEl = document.getElementById("imgContainer")
const loaderEl = document.getElementById("loader")
let photosArray = [];
const count = 5
const apiKey = "i7mXjjhEGpYEhDIvh6zPxz-XquuF4r_-KV2pyWWLcv4"
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

function displayPics(){

    for (let photo of photosArray){
        const item = document.createElement("a")
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', "blank")

        const img = document.createElement("img")
        img.setAttribute("src",photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute("title", photo.alt_description)

        item.appendChild(img)
        imgContainerEl.appendChild(item)
    }
}

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray  = await response.json();
        displayPics()
        
    }

    catch(err){

    }
}

getPhotos()
window.addEventListener('scroll',()=>{
    

    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000){
        getPhotos()
        console.log("triggered")
    }
})