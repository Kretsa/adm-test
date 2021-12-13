
/* way of communication */

$('.how_text').on('click', function(e) {
    $('.choise').toggleClass("wiew");
    e.preventDefault();
});
$('.manager').prop('checked', true);

/*                   choise checkbox */


$(".manager_input").click(function() {
    $(".choised_manager").toggle();
});
$(".whatsapp_input").click(function() {
    $(".choised_whatsapp").toggle();
});
$(".viber_input").click(function() {
    $(".choised_viber").toggle();
});
$(".telegram_input").click(function() {
    $(".choised_telegram").toggle();
});
// $('.choise').toggleClass("wiew");
$(document).on('mouseup', function(e) {
    let s = $('.choise.wiew');
    if (!s.is(e.target) && s.has(e.target).length === 0) {

        s.removeClass('wiew');
    }
});



$(document).ready(function() {
    $(".h_c_input").on("change", function() {
        $(".how_text").toggleClass("how_text_wiew", $("input:checked").length > 0);
    });
});
        /*  choise box popup  */
        $('.how_text_popup').on('click', function(e) {
          $('.choise_popup').toggleClass("wiew");
          e.preventDefault();
      });
      $('.manager').prop('checked', true);

      $(".manager_input_popup").click(function() {
        $(".choised_manager_popup").toggle();
    });
    $(".whatsapp_input_popup").click(function() {
        $(".choised_whatsapp_popup").toggle();
    });
    $(".viber_input_popup").click(function() {
        $(".choised_viber_popup").toggle();
    });
    $(".telegram_input_popup").click(function() {
        $(".choised_telegram_popup").toggle();
    });
    // $('.choise').toggleClass("wiew");
    $(document).on('mouseup', function(e) {
        let s = $('.choise_popup.wiew');
        if (!s.is(e.target) && s.has(e.target).length === 0) {
    
            s.removeClass('wiew');
        }
    });

    $(document).ready(function() {
    $(".h_c").on("change", function() {
        $(".how_text_popup").toggleClass("how_text_wiew", $("input:checked").length > 0);
    });
});


//                   /* phone  */
$(function() {
    $.mask.definitions['9'] = '';
    $.mask.definitions['d'] = '[0-9]';
    $('input[type="phone"]').mask("+7(ddd) ddd-dd-dd");
});
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
$('input[type="phone"]').click(function() {
    $(this).setCursorPosition(3); // set position number
});

/*   load FileS (Drag-and-Drop)/*  */
$(document).ready(function() {
    var dropZone = $('#upload_container');

    $('#file-input').focus(function() {
            $('label').addClass('focus');
        })
        .focusout(function() {
            $('label').removeClass('focus');
        });


    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function() {
        return false;
    });

    dropZone.on('dragover dragenter', function() {
        dropZone.addClass('dragover');
    });

    dropZone.on('dragleave', function(e) {
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            dropZone.removeClass('dragover');
        }
    });

    dropZone.on('drop', function(e) {
        dropZone.removeClass('dragover');
        let files = e.originalEvent.dataTransfer.files;
        sendFiles(files);
    });

    $('#file-input').change(function() {
        let files = this.files;
        sendFiles(files);
    });


    function sendFiles(files) {
        let maxFileSize = 5242880;
        let Data = new FormData();
        $(files).each(function(index, file) {
            if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
                Data.append('images[]', file);
            }
        });

        $.ajax({
            url: dropZone.attr('action'),
            type: dropZone.attr('method'),
            data: Data,
            contentType: false,
            processData: false,
            success: function(data) {
                alert('Файлы были успешно загружены!');
            }
        });
    }
})


 /*   load FileS (Drag-and-Drop) popup/*  */
 $(document).ready(function() {
  var dropZone = $('.load_file_popup');

  $('#file-input-2').focus(function() {
          $('label').addClass('focus');
      })
      .focusout(function() {
          $('label').removeClass('focus');
      });


  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function() {
      return false;
  });

  dropZone.on('dragover dragenter', function() {
      dropZone.addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
      let dx = e.pageX - dropZone.offset().left;
      let dy = e.pageY - dropZone.offset().top;
      if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
      }
  });

  dropZone.on('drop', function(e) {
      dropZone.removeClass('dragover');
      let files = e.originalEvent.dataTransfer.files;
      sendFiles(files);
  });

  $('#file-input-2').change(function() {
      let files = this.files;
      sendFiles(files);
  });


  function sendFiles(files) {
      let maxFileSize = 5242880;
      let Data = new FormData();
      $(files).each(function(index, file) {
          if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
              Data.append('images[]', file);
          }
      });

      $.ajax({
          url: dropZone.attr('action'),
          type: dropZone.attr('method'),
          data: Data,
          contentType: false,
          processData: false,
          success: function(data) {
              alert('Файлы были успешно загружены!');
          }
      });
  }
})
