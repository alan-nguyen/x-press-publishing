const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.listen(POST, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
