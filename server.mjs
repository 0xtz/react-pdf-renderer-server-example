// server.js

import express from "express";
import cors from "cors";
import React from "react";
import { renderToStream } from "@react-pdf/renderer";
import MyDocument from "./mydocument.mjs";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});

app.post("/pdf", cors(), function (req, res) {
  const stream = renderToStream(<MyDocument />);
  res.setHeader("Content-Type", "application/pdf");
  stream.pipe(res);
});
