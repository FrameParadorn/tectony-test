const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4003;

const db = require('./src/models');
db.mongoose
  .connect(db.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./src/routes/product.route')(app);
require('./src/routes/auth.route')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
