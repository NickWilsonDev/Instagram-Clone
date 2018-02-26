/* main.js */
/* Script will dynamically populate html with elements containing images. */

/* images {
        image: link,
        name: name,
    }
*/
images = [ {
    'src': "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    },
    {
    'src': "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    },
    {
    'src': "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    },
    {
    'src': "https://images.pexels.com/photos/141496/pexels-photo-141496.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
    },
    {
    'src': "https://images.pexels.com/photos/34768/cat-pet-mirror.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
    },
    {
    'src': "https://images.pexels.com/photos/764368/pexels-photo-764368.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
    },
    {

    'src': "https://images.pexels.com/photos/125451/pexels-photo-125451.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
    },
    {
    'src': "https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
    }];

/* loop through images and append elements containing them to the body of 
   html page
*/




var closeLightBox = function(event) {
    var lightbox = document.getElementById("detailed-view");
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.classList.toggle("lightbox");
};

var goLeft = function () {
    var imageIndex = images.findIndex(item => item.src === document.getElementById("currentImage").src);
    var img = document.createElement("img");
    var index = 0;
    console.log("imageIndex : " + imageIndex);
    console.log(images.length + "images.length");
    if (imageIndex === 0) {
        index = images.length - 1;
    } else {
        index = imageIndex - 1;
    }
    console.log("index::: " + index);
    currentImage = document.getElementById("currentImage");
    currentImage.setAttribute('src', images[index].src);
};

var goRight = function () {
    var imageIndex = images.findIndex(item => item.src === document.getElementById("currentImage").src);
    var img = document.createElement("img");
    var index = 0;
    console.log("imageIndex : " + imageIndex);
    console.log(images.length + "images.length");
    if (imageIndex === images.length - 1) {
        index = 0;
    } else {
        index = imageIndex + 1;
    }
    console.log("index::: " + index);
    currentImage = document.getElementById("currentImage");
    currentImage.setAttribute('src', images[index].src);
};




var selectImage = function(event) {
    // kill children if any exist
    var lightbox = document.getElementById("detailed-view");
    if (lightbox.childNodes.length > 0) {
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
    }
    if (!lightbox.classList.contains('lightbox')) {
        lightbox.classList.toggle("lightbox");
    }
    //console.log(event);
    //console.log(event.path[0].currentSrc);
    var navLeft = document.createElement("div");
    navLeft.setAttribute("id", "navLeft");
    var leftArrow = document.createElement("img");
    leftArrow.setAttribute("src", "./leftArrow.png");
    //leftArrow.setAttribute("height", "50px");
    //leftArrow.setAttribute("width", "50px");
    leftArrow.onclick = goLeft;
    navLeft.appendChild(leftArrow);
    lightbox.appendChild(navLeft);

    var img = document.createElement("img");
    img.setAttribute("src", event.path[0].currentSrc);
    img.setAttribute("id", "currentImage");
    img.setAttribute("height", "500");
    img.setAttribute("width", "500");
    lightbox.appendChild(img);
    img.onclick = closeLightBox;
    
    var navRight = document.createElement("div");
    navRight.setAttribute("id", "navRight");
    var rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "./rightArrow.png");
    //rightArrow.setAttribute("height", "50px");
    //rightArrow.setAttribute("width", "50px");
    rightArrow.onclick = goRight;
    navRight.appendChild(rightArrow);
    lightbox.appendChild(navRight);

};

images.forEach(function(image) {
    var div = document.createElement('div')
    var img = document.createElement("img");
    img.src = image.src;
    console.log(image.src);
    img.setAttribute("height", "150");
    img.setAttribute("width", "150");
    img.setAttribute("alt", "Cat Picture");
    img.onclick = selectImage;
    div.appendChild(img);
    div.classList.add('image-item');
    document.getElementById("image-container").appendChild(div);
})


