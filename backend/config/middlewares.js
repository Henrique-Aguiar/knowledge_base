const bodyParcer = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(bodyParcer.json())
    app.use(cors())
}