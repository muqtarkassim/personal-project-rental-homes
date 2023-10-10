document.addEventListener('DOMContentLoaded',()=>{
//
})
// fetch buy data
function fetchBuy(){
fetch('http://localhost:3000/buy')
.then(res =>res.json())
.then(data =>{console.log(data),
    dataBuy(data)
  })

}
// buy button when cliked >>>> call the fetchBuy function <<<<|||||||||||||||||||

 const getBuy=document.getElementById('buy-id');
 getBuy.addEventListener('click',()=>{
    fetchBuy()
 })
 // function to get the buy data when cliked buy<<<<<<<<>>>>>>

 function dataBuy(homes){
    const bigImageDiv=document.querySelector('#container-head-id')
    bigImageDiv.textContent=''
    bigImageDiv.classList.remove('container-head')
    bigImageDiv.classList.add('container-head2')
   // const createDiv1=document.createElement('div');
   
    homes.forEach(home => {
        const createCardDiv=document.createElement('div');
        createCardDiv.classList.add('card-homes')
        const createImage=document.createElement('img');
        const createPrice=document.createElement('h4');
        const createBedR=document.createElement('span');
        const createBathR=document.createElement('span');
        const createArea=document.createElement('span');
      
        
        const location=document.createElement('p');

        location.textContent=`Location :  ${home.location}`
        createImage.src=home.image;
        createPrice.textContent=`price: ${home.price} $ `;
        createBedR.textContent=`bedrooms : ${home.bedrooms} `;
        createBathR.textContent=` bathrooms : ${home.bathrooms}`;
        createArea.textContent=`Area : ${home.area} sq`;
        createCardDiv.append( createImage, createPrice,createBedR, 
            createBathR,createArea, location)
            bigImageDiv.append(createCardDiv);
        
    });


 } 

 ///  click sell on the menu 

 
    const getSell=document.getElementById('sell-id')
    getSell.addEventListener('click',()=>{
             //alert('cliked')
        dataSell()
    })

    //////////// create form to input data for the house<<<<<<>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    function dataSell(){

    const bigImageDiv=document.querySelector('#container-head-id')
    bigImageDiv.textContent=''
    bigImageDiv.classList.remove('container-head')
    //bigImageDiv.classList.add('container-head2')
    
    const CreateDivform=document.createElement('div');
    const CreateDiv1=document.createElement('div');
    const CreateDiv2=document.createElement('div');
    const CreateDiv3=document.createElement('div');
    const CreateDiv4=document.createElement('div');
    const CreateDiv5=document.createElement('div');
    const CreateDiv6=document.createElement('div');

    //form
    const CreateForm=document.createElement('form')
// Create a label for the price input
const labelPrice = document.createElement('label');
labelPrice.textContent = 'Price:';
// Create the price input element
const inputPrice = document.createElement('input');
inputPrice.setAttribute('type', 'text');
inputPrice.setAttribute('placeholder', ' input price in us $');
// Create a label for the bedrooms input
const labelBedrooms = document.createElement('label');
labelBedrooms.textContent = 'Bedrooms:';
// Create the bedrooms input element
const inputBedrooms = document.createElement('input');
inputBedrooms.setAttribute('type', 'text');
inputBedrooms.setAttribute('placeholder', ' no of bedrooms');
// Create a label for the bathrooms input
const labelBathrooms = document.createElement('label');
labelBathrooms.textContent = 'Bathrooms:';
// Create the bathrooms input element
const inputBathrooms = document.createElement('input');
inputBathrooms.setAttribute('type', 'text');
inputBathrooms.setAttribute('placeholder', ' no of bathrooms');
// araea label
const labelareas = document.createElement('label');
labelareas.textContent = 'Area:';
// input for area
const inputArea = document.createElement('input');
inputArea.setAttribute('type', 'text' )
inputArea.setAttribute('placeholder', 'Area Sq');
//location label
const labelLocation = document.createElement('label');
labelLocation.textContent = 'Location:';
// input location
const inputLocation = document.createElement('input');
inputLocation.setAttribute('type', 'text');
inputLocation.setAttribute('placeholder', 'location');
// label for image url
const labelImage = document.createElement('label');
labelImage.textContent = 'ImageUrl:';
// input image
const inputImage = document.createElement('input');
inputImage.setAttribute('type', 'text');
inputImage.setAttribute('placeholder', 'url-image');
//
//add button to submit
const buttonSubmit=document.createElement('button');
buttonSubmit.textContent='Submit'


// Append labels and inputs to the form
CreateDiv1.append(labelPrice,inputPrice);
CreateDiv2.append(labelBedrooms,inputBedrooms);
CreateDiv3.append(labelBathrooms,inputBathrooms);
CreateDiv4.append(labelLocation,inputLocation);
CreateDiv5.append(labelareas,inputArea);
CreateDiv6.append(labelImage,inputImage);
//

CreateForm.append(CreateDiv1,CreateDiv2,CreateDiv3,CreateDiv4,CreateDiv5,CreateDiv6,buttonSubmit)

CreateDivform.append(CreateForm)
    bigImageDiv.append(    CreateDivform)

    // add event listener to the for
    CreateForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        //alert('cliked')
        // get values of the typed data in theinput 
     const price1=inputPrice.value;
     const bed1=inputBedrooms.value;
     const bath1=inputBathrooms.value;
     const loc1=inputLocation.value;
     const area1=inputArea.value;
     const url1=inputImage.value;

     // call the function with the params of the inputs value

     fetchSell(price1,bed1,bath1,loc1,area1,url1)

    })
    }

    // function fetch post sell >>>>>>>><<<<<<<<<?????????????<<<<<<<<<<<<<<<<||||||

    function fetchSell(price1,bed1,bath1,loc1,area1,url1){
        fetch('http://localhost:3000/buy',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                "price":price1,
                "bedrooms":bed1,
                "bathrooms":bath1,
                "location":loc1,
                "area":area1,
                "image":url1
            })
        })
        .then(res =>res.json())
        .then(data =>{console.log(data)
             //dataSell(data)
          })
          .catch(error => console.log('error', error));
        
        }

  