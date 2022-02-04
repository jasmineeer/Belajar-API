const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/huruf", (request, response) => {
    // store the request data
    word = request.body.word
    kata = word.toLowerCase() 
    let jumlah_vokal = 0
    let jumlah_konsonan = 0
    
    for (let i = 0; i < kata.length; i++) {
        let character = kata.charAt(i)
        if (character.match(/[aiueo]/)) {
            jumlah_vokal++
        } else if (character.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            jumlah_konsonan++
        }
        
    }
    
    return response.json({
        jumlah_vokal: jumlah_vokal,
        jumlah_konsonan: jumlah_konsonan
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})