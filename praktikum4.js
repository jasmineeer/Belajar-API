const { request, response } = require("express")
// load library express
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// end point 1 Kubus
app.use(express.json())

app.post("/bmi", (request, response) => {
    // tampung data tinggi dan berat
    let tinggi = request.body.tinggi 
    let berat = request.body.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null 

    if (bmi < 18.5) {
        status = `Gizi Buruk`
    } else if (bmi >= 18.5 && bmi < 25) {
        status = `Ideal`
    } else if (bmi >= 25 && bmi < 30) {
        status = `Kelebihan Berat Badan`
    } else if (bmi >= 30) {
        status = `Obesitas`
    }

    return response.json({
        berat: berat,
        tinggi: tinggi,
        bmi: bmi,
        status: status 
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})