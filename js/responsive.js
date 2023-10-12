const menuItem=document.querySelector('.main-menu')
const menuclick=document.querySelector('.menu-clicked')
menuItem.addEventListener('click',()=>{
    //alert('cliked')
    menuclick.classList.toggle('menu-clickedEvent')
})

////

//  add the buttons functionalities

const buttonMAinBuy2=document.getElementById('buy-id2')
const buttonMAinSell2=document.getElementById('sell-id2')
const buttonMAinRent2=document.getElementById('rent-id2')
const buttonMAinAgent2=document.getElementById('agent-id2')


buttonMAinBuy2.addEventListener('click',()=>{
    //alert('cliked')
    fetchBuy()
 })
 buttonMAinSell2.addEventListener('click',()=>{
    //alert('cliked')
    dataSell()
 })
 buttonMAinRent2.addEventListener('click',()=>{
    //alert('cliked')
    fetchRent()
 })
 buttonMAinAgent2.addEventListener('click',()=>{
    //alert('cliked')
    fetchAgents()
 })