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
    var $lightbox = $("#detailed-view");
    while ($lightbox[0].firstChild) {
        $lightbox[0].removeChild($lightbox[0].firstChild);
    }
    $lightbox.toggleClass('lightbox');
};

var goLeft = function () {
    var imageIndex = images.findIndex(item => item.src === $('#currentImage')[0].src);
    var img = document.createElement("img");
    var index = 0;
    if (imageIndex === 0) {
        index = images.length - 1;
    } else {
        index = imageIndex - 1;
    }
    $currentImage = $('#currentImage');
    $currentImage[0].setAttribute('src', images[index].src);
};

var goRight = function () {
    var imageIndex = images.findIndex(item => item.src === $('#currentImage')[0].src);
    var img = document.createElement("img");
    var index = 0;
    if (imageIndex === images.length - 1) {
        index = 0;
    } else {
        index = imageIndex + 1;
    }
    $currentImage = $('#currentImage');
    $currentImage[0].setAttribute('src', images[index].src);
};


var selectImage = function(event) {
    // kill children if any exist
    var $lightbox = $("#detailed-view");
    if ($lightbox[0].childNodes.length > 0) {
        while ($lightbox[0].firstChild) {
            $lightbox[0].removeChild($lightbox[0].firstChild);
        }
    }
    if (!$lightbox[0].classList.contains('lightbox')) {
        $lightbox.toggleClass("lightbox");
    }
    //var navLeft = document.createElement("div");
    //navLeft.setAttribute("id", "navLeft");
    var $navLeft = $('<div>').attr({
                    id: 'navLeft'}).appendTo($lightbox[0]);

    //var leftArrow = document.createElement("img");
    //leftArrow.setAttribute("src", "./leftArrow.png");
    //leftArrow.addEventListener("click", goLeft);
    //$navLeft[0].appendChild(leftArrow);
    var $leftArrow = $('<img>').attr({
                    src: './leftArrow.png'}).on('click', goLeft)
                                            .appendTo($navLeft[0]);

    //$lightbox[0].appendChild(navLeft);

    var img = document.createElement("img");
    img.setAttribute("src", event.path[0].currentSrc);
    img.setAttribute("id", "currentImage");
    img.setAttribute("height", "500");
    img.setAttribute("width", "500");
    $lightbox[0].appendChild(img);
    img.addEventListener("click", closeLightBox);
    
    var navRight = document.createElement("div");
    navRight.setAttribute("id", "navRight");
    var rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "./rightArrow.png");
    rightArrow.addEventListener("click", goRight);
    navRight.appendChild(rightArrow);
    $lightbox[0].appendChild(navRight);

};

images.forEach(function(image) {
    var div = document.createElement('div')
    var img = document.createElement("img");
    img.src = image.src;
    console.log(image.src);
    img.setAttribute("height", "150");
    img.setAttribute("width", "150");
    img.setAttribute("alt", "Cat Picture");
    img.addEventListener("click", selectImage);
    div.appendChild(img);
    div.classList.add('image-item');
    $('#image-container')[0].appendChild(div);
})


