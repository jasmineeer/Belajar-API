const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/diskon", (request, response) => {
    // store the request data
    let data = request.body.data 
    let totalbersih
    let harga = 0, diskon = 0
    let totalItem = 0, totalAkhir = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].qty >= data[i].min_discount) {
            harga = data[i].price*data[i].qty 
            diskon = harga * data[i].discount
            totalbersih = harga - diskon 
        } else if (data[i].qty < data[i].min_discount) {
            totalbersih = data[i].price*data[i].qty 
        }
        totalAkhir  += totalbersih
        totalItem += (data[i].qty)
    }
    

    return response.json({
        total: totalAkhir,
        total_item: totalItem
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})