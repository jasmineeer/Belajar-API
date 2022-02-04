const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/kata", (request, response) => {
    // store the request data
    statement = request.body.statement 
    let jumlah_kata = 0
    let character
    
    for (let i = 0; i < statement.length; i++) {
        character = statement[i]
        if (character == " ") {
            jumlah_kata += 1
        }
    }
    jumlah_kata += 1
    
    return response.json({
        jumlah_kata: jumlah_kata
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})