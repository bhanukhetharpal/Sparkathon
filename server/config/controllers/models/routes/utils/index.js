import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

