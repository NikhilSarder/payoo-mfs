// // console.log('button login file added')
// // task search form submit reloding the page
// // step -1 set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
// // step-2: prevent default behavior (reloading br)
//   event.preventDefault();
// // step-3: get the phone number
// const phoneNumber =  document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber, pinNumber)
// // step 4: validate phone number and pin
// // this is temporary way
// if(phoneNumber==='5' && pinNumber===1234){
//     console.log('you are logged in')
//     // step-5 : allow user to use the website
// }
// else{
//     alert('wrong phone number or pin')
// }
// })
// video 2 end

document.getElementById('button-login').addEventListener('click', function(event){
 console.log('button click')
 event.preventDefault();
 const phoneNumber = document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value;
 console.log(phoneNumber, pinNumber)

 if(phoneNumber=== '5' && pinNumber==="1234"){
    console.log('you are logged in')
    window.location.href = "/home.html"
 }
 else{
    alert('wrong phone number or pin')
 }
})
