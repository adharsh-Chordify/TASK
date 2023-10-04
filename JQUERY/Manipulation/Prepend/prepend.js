$(document).ready(()=>{
    $('p').hover(()=>{
         $('p').prepend("<b>This is a prepended text</b>")
    })
})