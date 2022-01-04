function buttonShow(contentId, type, linkedId) {
   
    //populate drop down content if not already there
var content = document.getElementById(contentId);
  if( isEmpty(content.innerHTML)) // note depends on isEmpty string
   {
    populateDropDownButton(contentId, type, linkedId);

   }

   content.classList.toggle("showbutton");

  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showbutton')) {
          openDropdown.classList.remove('showbutton');
        }
      }
    }
  }

  function populateDropDownButton(contentId, type, linkedId)
  {
 if(type == "regexp")
 {
     var innerLinks= " \
    <a href=\"#\" onclick=\"appendLinkedButton('" + linkedId+"','abc')\"  >Letters abc..</a> \
    <a href=\"#\" onclick=\"appendLinkedButton('" + linkedId+"','123')\">Digits 123..</a> ";
    var contentToPopulate = document.getElementById(contentId);
    contentToPopulate.innerHTML+=innerLinks;
  
 }



  }

function appendLinkedButton(linkedId, contentToPopulate)
{

    var inputBox = document.getElementById(linkedId);
    inputBox.value+=contentToPopulate;


}


