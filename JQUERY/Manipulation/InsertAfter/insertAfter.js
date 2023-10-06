$(document).ready(()=>{
    $('#mybutton').click(()=>{
        $('<b>This is the text which is added after</b>').insertAfter('#para')
    })
})