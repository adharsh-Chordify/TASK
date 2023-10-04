$(document).ready(()=>{
    $("p").click(()=>{
        $("<b>This is a prependedToo text</b>").prependTo("p")
    })
})