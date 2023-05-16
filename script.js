/*Text change*/
const text = document.querySelector(".home-txt-2");
function textChange() {
    setTimeout(() => {
        text.textContent = "I'm Leony.";
    }, 0);
    setTimeout(() => {
        text.textContent = "I'm a beginner developer.";
    }, 4000);
}

textChange();
setInterval(textChange, 8000);

/*Hide navbar*/
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav").style.top = "0";
    } else {
        document.querySelector(".nav").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
});

/*Portfolio filter*/
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const items = document.querySelectorAll(".portfolio-item");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      /*Get values of checked checkboxes*/
      const langCheckboxes = document.querySelectorAll(".lang-check[type=checkbox]:checked");
      const frameCheckboxes = document.querySelectorAll(".frame-check[type=checkbox]:checked");
      const difCheckboxes = document.querySelectorAll(".dif-check[type=checkbox]:checked");

      const langCheckboxesValues = [];
      const frameCheckboxesValues = [];
      const difCheckboxesValues = [];

      langCheckboxes.forEach(element => {
        langCheckboxesValues.push(element.value);
      });

      frameCheckboxes.forEach(element => {
        frameCheckboxesValues.push(element.value);
      });

      difCheckboxes.forEach(element => {
        difCheckboxesValues.push(element.value);
      });

      console.log(langCheckboxesValues, frameCheckboxesValues, difCheckboxesValues)

      /*Compare classes of each item with values of checked checkboxes*/
      items.forEach(element => {
        const classList = element.className.split(" ");
        langMatches = false;
        frameMatches = false;
        difMatches = false;

        classList.forEach(element => {
          if (langCheckboxesValues.includes(element)) {
            langMatches = true;
          };
          if (frameCheckboxesValues.includes(element)) {
            frameMatches = true;
          };
          if (difCheckboxesValues.includes(element)) {
            difMatches = true;
          };
        });

        /*only language checkboxes checked*/
        if (langCheckboxesValues.length > 0 && frameCheckboxesValues.length == 0 && difCheckboxesValues.length == 0) {
          if (langMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        /*only framework checkboxes checked*/
        else if (langCheckboxesValues.length == 0 && frameCheckboxesValues.length > 0 && difCheckboxesValues.length == 0) {
          if (frameMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        /*only difficulty checkboxes checked*/
        else if (langCheckboxesValues.length == 0 && frameCheckboxesValues.length == 0 && difCheckboxesValues.length > 0) {
          if (difMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        /*only language and framework checkboxes checked*/
        else if (langCheckboxesValues.length > 0 && frameCheckboxesValues.length > 0 && difCheckboxesValues.length == 0) {
          if (langMatches && frameMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        /*only language and difficulty checkboxes checked*/
        else if (langCheckboxesValues.length > 0 && frameCheckboxesValues.length == 0 && difCheckboxesValues.length > 0) {
          if (langMatches && difMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        /*only framework and difficulty checkboxes checked*/
        else if (langCheckboxesValues.length == 0 && frameCheckboxesValues.length > 0 && difCheckboxesValues.length > 0) {
          if (frameMatches && difMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        /*language, framework and difficulty checkboxes checked*/
        else if (langCheckboxesValues.length > 0 && frameCheckboxesValues.length > 0 && difCheckboxesValues.length > 0) {
          if (langMatches && frameMatches && difMatches) {
            element.style.display = "flex"
          }
          else {
            element.style.display = "none"
          }
        }
        else {
          element.style.display = "flex"
        }
      });
    });
});