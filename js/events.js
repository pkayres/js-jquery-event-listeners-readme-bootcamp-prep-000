//define functions here
function getIt(){

}
function frameIt(){

}
function submitIt(){

}
function pressIt(){

}

$(document).ready(function(){

});

$('p').on("click", function (){
  alert("Hey!")
})
$('img').on('load', function(){
  after('tasty')
})
$('form').on('keydown', function(key) {
  if(key.which == 71){
        alert('g was pressed');
    }
});
$("form").on("submit", function() {
    alert('your form is going to be submitted now.');
  });
