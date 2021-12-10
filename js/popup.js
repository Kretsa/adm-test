
  $(document).ready(function(){
    $(".popup").click(function(){
      $(".popup_form, body").toggleClass("show_popup"); return false;
     
    });
  });
  $(document).ready(function(){
    $(".close_form").click(function(){
      $(".popup_form, body").removeClass("show_popup"); return false;
      
    });
  });

  $(document).click( function(e){
    if ( $(e.target).closest('.popup_form_box').length ) {
 
        return;
    }
    $(".popup_form, body").removeClass("show_popup");
});