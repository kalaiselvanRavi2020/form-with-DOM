let submit =document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let address=[];
    address.push(address1.value);
    address.push(address2.value);

    let gender = document.getElementsByName("gender");
    let genValue;
    for(i=0;i<gender.length;i++){
    if(gender[i].checked){
            genValue=gender[i].value;
        }
    }

    let food=document.getElementsByName("food")
    let foodlist=[];
    let result;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodlist.push(food[i].value);
        }
    }

    if(foodlist.length>=2){
        result=foodlist.join(",");
    }
    else{
        result=alert("choose atleast 2 options from food list")
    }
  
    console.log(genValue,fname.value,lname.value,address.join(" "),pin.value,result,state.value,country.value)
    createTable(fname.value,lname.value,address.join(" "),pin.value,genValue,result,state.value,country.value)
    fname.value="";
    lname.value="";
    address1.value="";
    address2.value="";
    pin.value="";
    gender.value="";
    foodlist=[];
    state.value="";
    country.value="" 
})

let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let address1=document.getElementById("address1");
let address2=document.getElementById("address2");
let pin=document.getElementById("pin");
let gender=document.getElementById("gender");
let food=document.getElementById("food");
let state=document.getElementById("state");
let country=document.getElementById("Country");

function createTable(fname,lname,address,pincode,gender,food,state,country){
    let tbody=document.getElementById("tbody");
    let tr=document.createElement("tr");
     let td1=document.createElement("td");
      let td2=document.createElement("td"); 
      let td3=document.createElement("td"); 
      let td4=document.createElement("td"); 
      let td5=document.createElement("td"); 
    let td6=document.createElement("td"); 
    let td7=document.createElement("td");
    let td8=document.createElement("td");

    td1.innerHTML=fname;
    td2.innerHTML=lname;
    td3.innerHTML=address;
    td4.innerHTML=pincode;
    td5.innerHTML=gender;
    td6.innerHTML=food;
    td7.innerHTML=state;
    td8.innerHTML=country;
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.appendChild(tr);

}