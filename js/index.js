// alert("Hello World!");
// questionDiv = document.getElementById('questionDiv');


  function toggleNav() {
      var formLink = document.getElementById("formLink");
      
      if (formLink.style.visibility === "visible") {
          formLink.style.visibility = "hidden"; 
      } else {
          formLink.style.visibility = "visible";
      } // end if else
      
  } // end function toggleNav