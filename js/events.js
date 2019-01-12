//define functions here
function getIt(){
  $('p').on("click", function (){
    alert("Hey!")
  })
};
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
    }
  )
};
function submitIt(){

};
function pressIt(){

};

$(document).ready(function(){

});



$('form').on('keydown', function(key) {
  if(key.which == 71){
        alert('g was pressed');
    }
});
$('form').on("submit", function() {
    alert('your form is going to be submitted now.');
  });
