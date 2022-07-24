const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .into(app)

PORT = 3000
app.listen(PORT, () => {
    console.log('Backend executando')
})