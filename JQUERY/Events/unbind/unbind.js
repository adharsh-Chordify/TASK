$(document).ready(()=>{
    $("p").click(()=>{
            $("p").slideToggle()
    });
    $("#buttonsubmit").click(()=>{
        $("p").unbind()
    })



})