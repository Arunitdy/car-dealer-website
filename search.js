const Data=Cardata;

function search(Data) {
    console.log('started the list');
     let listForPage1 = '';
     Data.forEach((value, index) => {
     //  console.log(value.name +":" + index);
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
       $('.CarCollection').html( listForPage1);
    // window.location.href='\page1.html';
   }
   search(Data);

//sort

   $(".sort_js").on("change",()=>{
    console.log("sort start")

    const selectedText = $(".sort_js option:selected").text(); // Get the text of the currently selected option
    const selectedNumber = $(".sort_js option:selected").attr("number");// Get the number attribute of the currently selected option
    
    console.log("Selected Text:", selectedText);
    console.log("Selected Number:", selectedNumber);
    
    if(selectedNumber=="1"){
      console.log("price sort")
      for(let i=0;i<Data.length;i++){
        for(let j=0;j<Data.length-i-1;j++){
          if(Data[j].price > Data[j+1].price){
            let temp=Data[j]
            Data[j] =Data[j+1]
            Data[j+1] =temp
          }
        }
      }
      search(Data);
    }
    else{
      console.log("default")
      search(Cardata);
    }
   
    
    console.log("sort end")
   })

  