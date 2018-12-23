console.log("Hello, I'am happy about your visit. Welcome to my Portfolio");
$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });
});
