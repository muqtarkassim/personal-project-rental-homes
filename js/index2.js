
function fetchRent(){
    fetch('http://localhost:3000/rent')
    .then (res =>res.json())
    .then(data => {console.log(data)
        dataBuy(data)
        
    })
}

const rentButon=document.getElementById('rent-id')
rentButon.addEventListener('click',()=>{
   fetchRent()
}) 
//
function fetchAgents(){
    fetch('http://localhost:3000/agents')
    .then (res =>res.json())
    .then(data => {console.log(data)
       // dataBuy(data)
       getAgents(data)
        
    })
}

const agentsButon=document.getElementById('agent-id')
agentsButon.addEventListener('click',()=>{
   //console.log('cliked')
   fetchAgents()
 }) 
 //
 function getAgents(agents){
    //
    // for(let i=0;i<agents.length;i++){
    //     console.log(agents[i].id)
    // }
    const bigImageDiv=document.querySelector('#container-head-id')
    const mainCards=document.querySelector('#main-card-id')
    bigImageDiv.textContent=''
    mainCards.textContent=''
    mainCards.classList.remove('main-cards')
    bigImageDiv.classList.remove('container-head')
    bigImageDiv.classList.add('container-head2')
    agents.forEach(agent=>{
        const Allcontainer=document.createElement('div');
        // add claslist to the allcontainer
        Allcontainer.classList.add('All-container')
        const imageDiv=document.createElement('div');
        // add classlist
        imageDiv.classList.add('image-div')
        const infoDiv=document.createElement('div');
        // add class to infoDiv
        
        const image=document.createElement('img');
        const name=document.createElement('h5');
        const email=document.createElement('p');
        const pNumber=document.createElement('p');
        //add text
        image.src=agent.image;
        name.textContent=agent.name;
        email.textContent=agent.email;
        pNumber.textContent=agent.phone
        imageDiv.append(image);
        infoDiv.append(name,email,pNumber);
        Allcontainer.append(imageDiv,infoDiv)
        bigImageDiv.append(Allcontainer)

    })
 }

 /// main cards button click functionality

 const buttonMAinBuy=document.getElementById('buy-homes')
 const buttonMAinSell=document.getElementById('sell-homes')
 const buttonMAinRent=document.getElementById('rent-homes')

 // add event listeners to the buttons
 buttonMAinBuy.addEventListener('click',()=>{
    //alert('cliked')
    fetchBuy()
 })
 buttonMAinSell.addEventListener('click',()=>{
    //alert('cliked')
    dataSell()
 })
 buttonMAinRent.addEventListener('click',()=>{
    //alert('cliked')
    fetchRent()
 })