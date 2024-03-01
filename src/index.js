import express from 'express'

const app = express()
const port = 3000

// Static file server
app.use(express.static("public"))

// Counter
let counter = 50; // Starts from non-zero

app.get('/get-counter', (req, res) => {
    res.status(200).send(counter.toString());
})

app.post('/clicked', (req, res) => {
    console.log("clicked")
    counter++;
    res.status(200).send(counter.toString());
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})