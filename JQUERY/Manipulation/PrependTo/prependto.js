$(document).ready(()=>{
    $("#para").click(()=>{
        $("<b>This is a prependedToo text</b>").prependTo("#para")
    })
})