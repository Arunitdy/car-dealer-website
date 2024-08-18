function search() {
    console.log('started the list');
     let listForPage1 = '';
     Cardata.forEach((value, index) => {
       console.log(value.name +":" + index);
       listForPage1 +=
         `<div class="CarContainer">
           <div class="img_details">
               <img src="https://robbreport.com/wp-content/uploads/2022/11/11-w-Utopia_1.jpg?w=1000" alt="image of the a car">
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
       document.querySelector('.CarCollection').innerHTML = listForPage1;
    // window.location.href='\page1.html';
   }
   search();