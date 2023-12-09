document.addEventListener('DOMContentLoaded' , function(){

  
  let navch =  document.getElementById('navch')
  let div =  document.getElementById('abc')
  let div2 = document.getElementById('sub2')
  let body = document.getElementById('bdo ')
 
 navch.addEventListener('change', function(){
 
 if (navch.checked) {

    div.style.display = 'none'
    div2.style.display = 'none'
    body.style.backgroundImage = 'none' 
 }
 else{
  div.style.display = 'block'
  div2.style.display = 'block'
body.style.backgroundImage = "url('w.jpg')";
 }

 })



})




