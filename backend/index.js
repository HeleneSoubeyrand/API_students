const express = require("express")
const app = express()
const port = 5000
const bodyparser = require("body-parser")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

let students = require("./students.json")

app.get('/students', (req, res) => {
    console.log(students)
    res.json(students)
})

app.post('/students', (req, res) => {
    console.log(req.body)

    const student = {
        ...req.body,
      }
      students = [...students, student]
    
    res.json(students)
})

console.log(students)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})