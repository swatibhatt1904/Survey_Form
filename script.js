var fields = document.getElementsByClassName('survey-field');
var count = 0;
var result = document.getElementById("result");

for (var i = 0; i < fields.length; i++) {
  fields[i].onclick = function (event) {
    var field = event.target;
    var fieldType = event.srcElement.type; // email, number, select, radio, checkbox, textarea, phone

    switch (fieldType) {
      case 'text':
        if (field.value.trim() != "") {
          count++;


        }
        break;
      case 'email':
        if (field.value !== '') {
          count++;}

        break;
      case 'number':
        if (field.value.length != 0) {
          count++;}

        break;
      case 'select':
        if (field.selected !== null) {
          count++;
        }
        break;
      case 'radio':
        if (field.checked) {
          count++;}

        break;
      case 'dropdown':
        if (field.selected) {
          count += 1;}

        break;

      case 'checkbox':
        if (field.checked) {
          count++;
        }
        break;
      case 'textarea':
        if (field.value.length != 0) {
          count++;}

        break;}


    result.innerHTML = 'Count of number of fields= ' + count;
  };
};

/*function ValidateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("You have entered a valid email address!");    //The pop up alert for a valid email address
document.survey-form.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
document.form1.text1.focus();
return false;
}
}*/



// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.