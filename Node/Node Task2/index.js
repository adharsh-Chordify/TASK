const express=require("express")

const app=express()
const port=5000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(port,()=>{
    console.log("The server runs in the port ");
})

