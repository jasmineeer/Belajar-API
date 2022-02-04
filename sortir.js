const express = require("express")
const app = express()

// set to read a request data from json format
app.use(express.json())

// JSON is STRING

app.post("/sortir", (request, response) => {
    // store the request data
    key = request.body.key
    type = request.body.type
    data = request.body.data
    let result
    
    for (let i = 0; i < data.length; i++) {
        if (key == 'nis' && type == 'ascending') {
            result = data.sort(function(a, b){return a.nis - b.nis})
        } else if (key == 'nis' && type == 'descending') {
            result = data.sort(function(a, b){return b.nis - a.nis})
        } else if (key == 'nama' && type == 'ascending') {
            result = data.sort(function(a, b){
                if (a.nama < b.nama) {return -1}
                if (a.nama > b.nama) {return 1}
                return 0
            })
        } else if (key == 'nama' && type == 'descending') {
            result = data.sort(function(a, b){
                result = data.sort(function(a, b){
                    if (a.nama < b.nama) {return 1}
                    if (a.nama > b.nama) {return -1}
                    return 0
                })
            })
        } else if (key == 'umur' && type == 'ascending') {
            result = data.sort(function(a, b){return a.umur - b.umur})
        } else if (key == 'umur' && type == 'descending') {
            result = data.sort(function(a, b){return b.umur - a.umur})
        } 
    }
    // give a response data
    return response.json({
        "Sort": result
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})