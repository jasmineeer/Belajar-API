// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// end point 1 Kubus
app.use(express.json())

app.get("/convert/:bilangan/:angka" , (request,response) => {
    // tampung data yg dikirimkan
    let bilangan = request.params.bilangan
    let angka = Number(request.params.angka)

    if (bilangan == 'decimal') {
        let binary = angka.toString(2)
        let octal = angka.toString(8)
        let hexadecimal = angka.toString(16).toUpperCase()
        return response.json({
            bilangan: bilangan,
            angka: angka,
            hasil:{
                Binary : binary,
                Octal : octal,
                Hexadecimal : hexadecimal
            }
        })
    } else if (bilangan == 'binary') {
        let decimal = parseInt(angka, 2) 
        let octal = parseInt(angka, 2).toString(8)
        let hexadecimal = parseInt(angka, 2).toString(16).toUpperCase()
        return response.json({
            bilangan: bilangan,
            angka: angka,
            hasil:{
                Decimal : decimal,
                Octal : octal,
                Hexadecimal : hexadecimal
            }
        }) 
    } else if (bilangan == 'octal') {
        let decimal = parseInt(angka, 8) 
        let binary = parseInt(angka, 8).toString(2)
        let hexadecimal = parseInt(angka, 8).toString(16).toUpperCase()
        return response.json({
            bilangan: bilangan,
            angka: angka,
            hasil:{
                Decimal : decimal,
                Binary : binary,
                Hexadecimal : hexadecimal
            }
        }) 
    } else if (bilangan == 'hexadecimal') {
        let decimal = parseInt(angka, 16) 
        let binary = parseInt(angka, 16).toString(2)
        let octal = parseInt(angka, 16).toString(8)
        return response.json({
            bilangan: bilangan,
            angka: angka,
            hasil:{
                Decimal : decimal,
                Binary : binary,
                Octal : octal 
            }
        }) 
    }
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})