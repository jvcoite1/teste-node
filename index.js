const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Te amo, guria ❤')
})

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`)
})