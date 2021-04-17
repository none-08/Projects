$(document).on('click', '.list-people li', function () {
   $('.active').not(this).removeClass('active');
   $(this).toggleClass('active');
});


const input = $('#input');
const addMessage = $('.chat');


$('#send').click(function () {
   if (input.val() == "") {
      alert("Matn kirit !")
      return false;
   }

   // DELETE MSG BUTTON
   var deleteBtn = document.createElement('button');
   var icon = document.createElement('i');
   icon.classList.add("far", "fa-window-close");
   deleteBtn.append(icon)
   deleteBtn.classList.add("btn", "btn-danger", "delete_msg");

   // NEW DIV WITH A CLASS MSG
   var div = document.createElement('div');
   div.classList.add("msg", "me");

   // ADDING NEW MSG
   addMessage.append(div);
   div.innerHTML = input.val();
   div.append(deleteBtn);
   input.val("")
});

// REMOVING MSG DIV deletebtn
$(document).on("click", ".delete_msg", function () {
   $(this).parent().remove();
});