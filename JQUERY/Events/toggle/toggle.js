$(document).ready(()=>{
    $("#button1").click(()=>{
        $("#button2").toggle()
    }),
    $("#button2").click(()=>{
        $("#button1").toggle()
    })
})