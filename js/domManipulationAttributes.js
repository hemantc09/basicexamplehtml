// by hemantc09
var img1 = document.getElementsByTagName("img")[0];//[0] is important
console.log(img1)
var str = img1.getAttribute("src");
console.log(str);

img1.setAttribute("src", "img/dogpuli.jpg");
console.log("Changed the img1 to img2")


//you can choose any tag and change the attribute associated with that tag


