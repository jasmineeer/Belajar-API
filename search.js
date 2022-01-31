const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/search", (request, response) => {
    // store the request data
    keyword = request.body.keyword
    let data = [
        {nis: 101, nama: "Adinda", alamat: "Araya"},
        {nis: 102, nama: "Andika", alamat: "Sawojajar"},
        {nis: 103, nama: "Suji", alamat: "Araya"},
        {nis: 104, nama: "Lala", alamat: "Sulfat"},
        {nis: 105, nama: "Lili", alamat: "Sawojajar"},
        {nis: 106, nama: "Rahma", alamat: "Kepanjen"},
        {nis: 107, nama: "Rizky", alamat: "Lawang"},
        {nis: 108, nama: "Putra", alamat: "Kepanjen"},
        {nis: 109, nama: "Lulu", alamat: "Dinoyo"},
        {nis: 110, nama: "Rara", alamat: "Pakis"}
    ]
    let jumlah_data = 0
    let result
    
    result = data.filter((element) => element.nis == keyword || element.nama == keyword || element.alamat == keyword)
    jumlah_data = result.length
    // give a response data
    return response.json({
        "jumlah data": jumlah_data,
        "data": result
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})