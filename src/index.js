import express from 'express'
import path from 'path'

const port = process.env.PORT || 5000
const app = express()

app.use(express.static(path.resolve('./static')))
app.get('*', (req, res) => res.sendFile(path.resolve('./static/index.html')))

app.listen(port, () => console.log(`Server is up at port: ${port}`))
