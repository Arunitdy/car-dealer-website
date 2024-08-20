
  //jquerey of script.js
  console.log("script.js");
  //login start
  let login=false;
  $(document).ready(function(){
    $(":root").css("--text--","white");
    $(":root").css("--login--","#017FDF");
    $(".login").on("click",()=>{
      console.log("Login event");
      if(login===false){
        console.log('Login');
        $(".lower_html").html(`<div class="login_bar">
                                <button class="close-btn" >&times;</button>
                                <p1>User name</p1>
                                <input class="name" type="text" placeholder="User name">
                                <p1>Password</p1>
                                <input class="password" type="password" placeholder="Use letters and numbers">
                                <button class="login1" >Login</button>
                              </div>`
                            );
        $(":root").css('--name-placeholder-color','#999D93');
        $(":root").css('--password-placeholder-color','#999D93');
        $(".home").addClass(".home2");
        $(".close-btn").on("click",()=>{
             $(".lower_html").html("");
             $("home").removeClass("home2");
             console.log("close login");
        })
        console.log("Login");
        $(".login1").on("click",()=>{
          const name=$(".name").val();
          const password=$(".password").val();
          if(name!==''&&password!==''){                                     //the correct one
            console.log('name:'+name+'  password:'+password);
            console.log("close login");  
            $(".lower_html").html("");
            $(".home").removeClass("home2");
            $(".login").text("Logout");
            $(":root").css("--login--","white");
            $(":root").css("--text--","#017FDF")
            console.log(login=true);

          }
           else if(name!==''&&password==''){
            $('.password').attr("placeholder",'Please fill out this field');
            $(":root").css('--password-placeholder-color','red');
            console.log(" password not enterd");
          }
          else if(name==''&&password!==''){
           $('.name').attr("placeholder",'Please fill out this field');
            $(":root").css('--name-placeholder-color','red');
            console.log(" user name not enterd");
          }else{ 
            $(":root").css('--password-placeholder-color', 'red');
            $(":root").css('--name-placeholder-color', 'red');
           $('.name').attr("placeholder",'Please fill out this field');
            console.log(" user  and passwordname not enterd");
           $('.password').attr("placeholder",'Please fill out this field');
          
          }

        });
        console.log(login);
      }else if (login===true){   //log out
        console.log("logout start");
        $(".login").text("Login");
        login=false;
        $(":root").css("--text--","white");
        $(":root").css("--login--","#017FDF");
        console.log("logout");
      }
    })

  })
  //end of login
  let car_company;
let price = {
  mini: 0,
  max: 999999
};



let model;

$('.button1').on('click', () => {

  car_company =$('car-company').val();
  let stringPrice =$('price').val();
  model = $('model').val();
  switch (stringPrice) {
    case '$20,000 - $30,000':
      price.mini = 20000;
      price.max = 30000;
      break;
    case '$30,000 - $40,000':
      price.mini = 30000;
      price.max = 40000;
      break;
    case '$40,000 - $50,000':
      price.mini = 40000;
      price.max = 50000;
      break;
    case '$50,000 - $60,000':
      price.mini = 50000;
      price.max = 60000;
      break;
    case '$60,000 - $70,000':
      price.mini = 60000;
      price.max = 70000;
      break;
    case '$70,000 - $80,000':
      price.mini = 70000;
      price.max = 80000;
      break;
    case '$80,000 - $90,000':
      price.mini = 80000;
      price.max = 90000;
      break;
    case '$90,000 - $100,000':
      price.mini = 90000;
      price.max = 100000;
      break;
    case '$100,000 - $150,000':
      price.mini = 100000;
      price.max = 150000;
      break;
    case '$150,000+':
      price.mini = 150000;
      break;
    default:
      console.log('Price range not recognized:', stringPrice);
  }


  console.log("Car Company:", car_company);
  console.log("Price:", price + ':' + price.mini + ',' + price.max);
  console.log("Model:", model);
});

 $('.button1').on('click', () => {
  
  console.log('started the list');
   let listForPage1 = '';
   Cardata.forEach((value, index) => {
     console.log(value.name +":" + index);
     listForPage1 +=
       `<div class="CarContainer">
         <div class="img_details">
             <img src="https://imgd.aeplcdn.com/600x337/cw/ec/40990/BMW-X7-Exterior-162059.jpg?wm=0&q=75" alt="image of the a car">
             <div class="details">
                 <div class="name">${value.name}</div>
                 <div class="model">${value.model}</div>
                 <div class="price">price:${value.price}</div>   
             </div>
         </div>
         <details>  <summary class="discription">about</summary><p class="about">${value.description}</p>
         </details>
       </div>`;
     });
     localStorage.setItem('carList', listForPage1);
     $('.CarCollection').html(listForPage1) ;
  // window.location.href='\page1.html';
 });