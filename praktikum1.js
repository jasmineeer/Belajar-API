// load  library express
let express = require("express") 

// inisiasi objek baru dari express
let app = express()

// Endpoint pertama
app.use(express.json())

app.post("/kubus", (request, response) => {
    let sisi = request.body.sisi

    let volume = sisi*sisi*sisi
    let luas = 6 * (sisi*sisi)

    return response.json({
        luas: luas,
        volume: volume 
    })
})


// end point kedua (request with GET Method)
app.get("/balok/:panjang/:lebar/:tinggi", (request, response) => {
    // tampung data yang dikirimkan
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let volume = panjang*lebar*tinggi 
    let luas = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi)

    return response.json({
        message: `Volume dari balok = ${volume} dengan luas permukaan = ${luas}`
    })
})

// Endpoint ketiga
app.use(express.json())

app.post("/tabung", (request, response) => {
    let jarijari = request.body.jarijari
    let tinggi = request.body.tinggi

    let volume = 3.14 * (jarijari*jarijari) * tinggi
    let luas = 2 * 3.14 * jarijari * (jarijari+tinggi)

    return response.json({
        volume: volume,
        luas: luas 
    })
})

// end point keempat (request with GET Method)
app.get("/kerucut/:jarijari/:tinggi/:apotema", (request, response) => {
    // tampung data yang dikirimkan
    let jarijari = request.params.jarijari
    let tinggi = request.params.tinggi 
    let apotema = request.params.apotema

    let volume = 1/3 * 3.14 * jarijari * jarijari * tinggi 
    let luas = (3.14*jarijari*jarijari) + (3.14*jarijari*apotema)

    return response.json({
        message: `Volume kerucut = ${volume} dengan luas = ${luas}`
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})