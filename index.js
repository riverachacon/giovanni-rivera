$(document).ready(function(x){
    console.log("Hola")
})

const toggleBtn = $(".toggle-btn")
const toggleBtnIcon = $(".toggle-btn i")
const dropDownMenu = $(".dropdown")


toggleBtn.on("click", () => {
  dropDownMenu.toggleClass("open")
  const isOpen = dropDownMenu.hasClass("open");

  toggleBtnIcon.removeClass("fa-xmark fa-bars").addClass(isOpen ? "fa-xmark" : "fa-bars");
})

/*change draw */

$('.draw').on('mouseover', function() {
  var $this = $(this)
  $this.attr('src', './draw12.png')

  setTimeout(function() {
    $this.attr('src', './draw1.png');
  }, 1000);

})
