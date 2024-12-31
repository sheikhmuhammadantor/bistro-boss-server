const express = require("express");
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const { MongoClient, ObjectId } = require('mongodb');

const port = process.env.PORT || 4000;

// middleware;
app.use(cors());
app.use(express.json());

// const uri = ``;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

app.get('/', (req, res) => {
    res.send("Boss is Sitting");
})

app.listen(port, () => {
    console.log(`Bistro Boss is Sitting on Port ${port}`);
})
