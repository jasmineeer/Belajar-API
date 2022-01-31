const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/pecahan", (request, response) => {
    // store the request data
    uang = request.body.uang
    let pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    jmlUang = 0
    let hasil = []
    
    for (let index = 0; index < pecahan.length; index++) {
    if (uang >= pecahan[index]) {
        jmlUang = Math.floor(uang / pecahan[index])
        total = total % pecahan[index]

        hasil.push({
            pecahan: pecahan[i],
            jumlah: jmlUang
        })
    }
}

    // give a response data
    return response.json({
        hasil: hasil
        })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})