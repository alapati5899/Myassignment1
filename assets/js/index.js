
function onLoad() {
    var title = document.getElementsByClassName("accordion-title");
    var index;
    for (index = 0; index < title.length; index++) {
    title[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var currentElement = this.nextElementSibling;
        if (currentElement.style.display === "block") {
        currentElement.style.display = "none";
        } else {
        currentElement.style.display = "block";
        }
    });
    }
}


function onClickButton1(){
    // document.getElementById('image').style.display = "block";
    document.getElementById("imageText").textContent ="THANKS FOR THE VERIFICATION";
}
function validate() {
    const regexForEmail = /\S+@\S+\.\S+/;
    if (!regexForEmail.test(document.getElementById('input').value)) {
      document.getElementById('errorText').style.display = 'block';
      return false;
    }
    return true;
  }

  function validatePhone() 
  {
    var regexForPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!regexForPhone.test(document.getElementById('input1').value)) {
        document.getElementById('errorNumberText').style.display = 'block';
        return false;
      }
      return true;
  }