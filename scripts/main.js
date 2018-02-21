/* main.js */
/* Script will dynamically populate html with elements containing images. */

images = [];

images.push("https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/141496/pexels-photo-141496.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/34768/cat-pet-mirror.jpg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/764368/pexels-photo-764368.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/125451/pexels-photo-125451.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

images.push("https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");

/* loop through images and append elements containing them to the body of 
   html page
*/


var selectImage = function() {
    alert('you clicked');
};

for (var i = 0; i < images.length; i++) {
    var div = document.createElement('div')
    var img = document.createElement("img");
    img.setAttribute("src", images[i]);
    img.setAttribute("height", "150");
    img.setAttribute("width", "150");
    img.setAttribute("alt", "Cat Picture");
    //img.onclick = selectImage();
    div.appendChild(img);
    div.classList.add('image-item');
    document.getElementById("image-container").appendChild(div);
}


