function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

//Fade out animation

//var linkLocation
//
//$(document).ready(function() {
////    $("body").css("display", "none");
//// 
////    $("body").fadeIn(2000);
// 
//    $("a.transition").click(function(event){
//        event.preventDefault();
//        linkLocation = this.href;
//        $("html").fadeOut("slow", redirectPage);      
//    });
//         
//    function redirectPage() {
//        window.location = linkLocation;
//    }
//});