const express = require('express')
const app = express()
const port = 4003

require("./src/routes/product.route")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
