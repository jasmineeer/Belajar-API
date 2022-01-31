const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/belanja", (request, response) => {
    // store the request data
    let data = request.body.barang 
    let total = 0, ppn = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].jumlah * data[i].harga
    }
    ppn = total*10/100
    let totalAkhir = total + ppn

    // give a response data
    return response.json({
        "total": totalAkhir
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})