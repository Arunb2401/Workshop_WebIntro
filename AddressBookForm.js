function add() {
  let name, address, phoneNum, city, state, zipCode;
  name = document.getElementById("fullName").value;
  address = document.getElementById("address").value;
  phoneNum = document.getElementById("phoneNum").value;
  city = document.getElementById("city").value;
  state = document.getElementById("state").value;
  zipCode = document.getElementById("zipCode").value;
  console.log(fullName);

  let obj = {
      "fullName": name,
      "address": address,
      "phoneNumber": phoneNum,
      "city": city,
      "state": state,
      "zipCode": zipCode
      
  }
  console.log(obj);

  $.ajax({
      type: "POST",
      url: "http://localhost:3000/data",
      data: JSON.stringify(obj),
      contentType: "application/json",
      crossDomain: true,
    
      success: function (result) {
        console.log(" result success ", result);
      },
    });

  // localStorage.setItem("fullName", name);
  //   localStorage.setItem("address", address);
  //   localStorage.setItem("phoneNum", phoneNum);
  //   localStorage.setItem("city", city);
  //   localStorage.setItem("state", state);
  //   localStorage.setItem("zipCode", zipCode);
}



function reset() {
  localStorage.clear();
  //localStorage.removeItem('fullName');
}
const name1 = document.querySelector("#fullName");
const textError = document.querySelector(".fullName-error");
name1.addEventListener("input", function () {
  let nameRegex = RegExp("[A-Z]{1}[a-z]{3}");
  if (nameRegex.test(name1.value)) {
    textError.textContent = "";
  } else {
    textError.textContent = "Invalid";
  }
});

const contact = document.querySelector("#phoneNum");
const textError4 = document.querySelector(".phoneNum-error");
contact.addEventListener("input", function () {
  let mobNumRegex = RegExp("^(0|91)?[7-9][0-9]{9}$");
  if (mobNumRegex.test(contact.value)) {
    textError4.textContent = "";
  } else {
    textError4.textContent = "Invalid";
  }
});

// $.ajax({
//   type: "data",
//   url: "http://localhost:3000/data",
//   data: JSON.stringify(obj),
//   contentType: "application/json",

//   success: function (result) {
//     console.log(" result success ", result);
//   },
// });
// const obj = {
    
//     name: "Rahul",
//     age:25,
//     occupation: "Web Devloper"
// };


// const a = JSON.stringify(obj);
// console.log(a);
//const obj = new XMLHttpRequest();


// $.ajax({
//   type: 'data',
//   url: "http://localhost:3000/data",
//   data: JSON.stringify(obj),
//   contentType: "Workshop\db.json",
  
//   success: function (result) {
//   console.log(" result success ", result);
//   }
//   });