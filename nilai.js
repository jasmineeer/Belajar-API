const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/nilai", (request, response) => {
    // store the request data
    let data = request.body.data 
    let total = 0
    let rerata = 0
    let kkm = 0
    let lulus = []
    let tidak_lulus = []

    for(let i = 0; i < data.length; i++ ){
        total += parseFloat(data[i].math + data[i].english)
    }
    rerata = total / (data.length*2)
    for (let i = 0; i < data.length; i++) {
        kkm = (data[i].math + data[i].english) / 2
        if (kkm < rerata) {
            tidak_lulus.push(data[i].nama)
        } else if (kkm >= rerata) {
            lulus.push(data[i].nama)
        }
    }

    return response.json({
        total: total,
        rerata: rerata,
        lulus: lulus,
        tidak_lulus: tidak_lulus 
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})