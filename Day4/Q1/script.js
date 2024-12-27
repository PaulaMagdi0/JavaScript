// Question one
// --------------

var images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
];

var intervalId ,index = 0;

var slideshow = document.getElementById('slideshow');

function next() {
    index = (index + 1) % images.length;
    slideshow.src = images[index];
}

function start() {
    intervalId = setInterval(next, 1000); 
}

function stop() {
    clearInterval(intervalId);
    index = 0; 
    slideshow.src = images[index]; 
}

slideshow.addEventListener('mouseover', start);
slideshow.addEventListener('mouseleave', stop);

slideshow.src = images[index];