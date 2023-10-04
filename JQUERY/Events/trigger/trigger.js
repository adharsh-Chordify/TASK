$(document).ready(()=>{
    $("#mybutton").click(()=>{
       alert("You have hovered")
    })
    $("#mybutton").trigger('click')
})