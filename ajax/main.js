let servResponse = document.querySelector("#response");

document.forms.ourForm.onsubmit = function (event) {
  event.preventDefault();

  let userInput = document.forms.ourForm.ourForm__inp.value;
  userInput = encodeURIComponent(userInput);

  let xhr = new XMLHttpRequest();
  // xhr.open("GET", 'form.php?' + 'ourForm__inp' + userInput + '&key2=value2');
  xhr.open('POST', 'form.php');

  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  let formData = new FormData(document.forms.ourForm);

  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      servResponse.textContent = xhr.responseText;
    }
   }

  // xhr.send('ourForm__inp=' + userInput);
  xhr.send(formData);
 }