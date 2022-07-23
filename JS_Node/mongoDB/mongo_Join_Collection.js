/*
orders
[
  { _id: 1, product_id: 154, status: 1 }
]
products
[
  { _id: 154, name: 'Chocolate Heaven' },
  { _id: 155, name: 'Tasty Lemons' },
  { _id: 156, name: 'Vanilla Dreams' }
]
*/
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const dbName = 'mongo_CompanyDB';


MongoClient.connect(url, {
  useNewUrlParser: true
}, (err, client) => {
  if (err) console.log(`Connection ${url}:404 Not Found`);
  else console.log(`Connection ${url}:200 Ok`);
  const db = client.db(dbName);
  const collection = db.collection('orders');

collection.aggregate([{
    $lookup: {
      from: 'products',
      localField: 'product_id',
      foreignField: '_id',
      as: 'orderSummary'
    }
  }]).toArray(function (err, docs) {
    if (err) console.log(`Error While fetching data ${err}`)
    console.log(JSON.stringify(docs));
    client.close();
  });
});