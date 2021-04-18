var reasons= ["My Dad", "My Mom", "My Brother", "Me"];
var images= ["https://tse3.mm.bing.net/th?id=OIP.zSdFDG_9i-3jlnFgjN4aSAHaQg&pid=Api&P=0&w=300&h=300","https://i.pinimg.com/736x/ea/a4/c4/eaa4c4fbbb3a860a119e6c3ac4b97a67--muslim-doodle.jpg","https://classroomclipart.com/images/gallery/Clipart/Emotions/african-american-boy-with-excited-expression-clipart.jpg","https://www.clipartmax.com/png/middle/6-60334_i-wanted-to-change-the-skirt-and-do-something-else-black-sister.png"];
var  i=0;
function nextimg() {
  document.getElementById("reasontext").innerHTML=reasons[i];
  document.getElementById("album").src=images[i];
  i++;
  document.getElementById("audio").play();
}