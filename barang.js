const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/barang", (request, response) => {
    // store the request data
    barang = request.body.barang 
    pack = request.body.pack 
    let netto = 0
    let total_harga = 0
    let result = []
    
    for (let i = 0; i < barang.length; i++) {
        netto = Number(barang[i].bruto) - Number(pack[i].berat)
        total_harga = Number(netto) * barang[i].harga
            result.push ({
            id: barang[i].id, 
            nama: barang[i].nama, 
            bruto: barang[i].bruto, 
            harga: barang[i].harga,
            pack: barang[i].pack, 
            netto: netto, 
            total_harga: total_harga
            })

        
    }

    return response.json({
        result: result
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})