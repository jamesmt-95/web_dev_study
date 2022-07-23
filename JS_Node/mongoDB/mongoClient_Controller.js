const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'mongo_CompanyDB';

MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) console.log(`Connection ${url}:404 Not Found`);
    else console.log(`Connection ${url}:200 Ok`);
    const db = client.db(dbName);

    //Insert Multiple Document using insertOne 
    insertOne_withCustomID(db, () => {});  // or  insertOne_withCustomID(db)
    //Insert Multiple Document using insertMany
    insertDoc(db, () => {}); //function call
    // Find One Document
    findOneDocument(db, () => {}); //function call
    // Find All Document
    findAllDocument(db, () => {}); //function call
    // Select Field(Column)
    SelectField(db, () => {});
    // Select Documents with Regular Expression
    findAllDocRegularExpression(db, () => {});
    // Find All with Sort data
    findAllSort(db, () => {});
    // Delete one document
    deleteOneDoc(db, () => {});
    //Delete many document
    deleteManyDoc(db, () => {});
    //drop collection(table) using .drop()
    drop_Method(db, () => {});
    //drop collection(table) using .dropCollection()
    dropCollection_Method(db, () => {});
    //update one(1st) doc
    updateOne(db, () => {});
    //update many doc
    updateMany(db, () => {});
    //limit display 
    limitDocs(db, () => {});

    client.close();
});

const insertOne_withCustomID = (db) => {

    const collection = db.collection('EmployeeDetails');
    var document = {
        _id: 556, 
        prev_exp: 5
    }
    collection.insertOne(document, (err, result) => {
        if (err) console.log(`Error : ${err}`)
        else console.log(`${result.result.n} Document Inserted`)
    });
};
//Insert into Documents Function definition
const insertDoc = (db) => {
    // console.log(db)
    const collection = db.collection('EmployeeDetails');
    var document = [{
            title: 'MongoDB Overview',
            description: 'MongoDB is no sql database'
        },
        {
            title: 'MongoDB Overview',
            description: 'MongoDB is no sql database'
        }
    ];
    collection.insertMany(document, (err, result) => { //insertMany or insertOne
        if (err) console.log(`Error :${err}`)
        else console.log(`${result.result.n} Documents Inserted`) //or result.ops.length
    });
}

const findOneDocument = (db) => {

    const collection = db.collection('EmployeeDetails');
    // collection.find({}).toArray((err, docs) => {      all records
    collection.findOne({}, (err, docs) => { //for return 1st Document
        console.log(`Found the following records \n`);
        console.log(docs)
    });
};


const findAllDocument = (db) => {

    const collection = db.collection('EmployeeDetails');
    // collection.find({}).toArray((err, docs) => {      to return all records
    collection.find({
        by: 'tutorials point'
    }).toArray((err, docs) => { //alldoc with filter             
        console.log(`${docs.length} Documents Found  based on the Query `);
        console.log(docs)


    });
};

const SelectField = (db) => {
    const collection = db.collection('EmployeeDetails');
    //projection keyword used to fetch speific field {projection:{_id:0}}
    collection.find({}, {
        projection: {
            description: 0
        }
    }).toArray((err, docs) => { //alldoc with filter  
        //while using find() _id is always visible,to hide id _id:0, this can be use with other fields if you want to hide           
        console.log(`${docs.length} Documents Found  with Selected Fields `);
        console.log(docs)
    });
};


const findAllDocRegularExpression = (db) => {

    const collection = db.collection('EmployeeDetails');
    // collection.find({}).toArray((err, docs) => {      to return all records
    collection.find({
        description: /sql/
    }).toArray((err, docs) => { //-/^S/ -start with S, /s/ -anywhere           
        console.log(`${docs.length} Documents Found  based on the key sql`);
        console.log(docs)
        console.log(docs.length) //returns the lengght of docs

    });
};

//sort({field:asc(1)/desc(-1)})
const findAllSort = (db) => {
    const collection = db.collection('EmployeeDetails');
    collection.find({}).sort({
        title: 1
    }).toArray((err, docs) => {
        console.log(`${docs.length} Documents Sorted \n `);
        console.log(docs)

    });
}
//To delete one record
const deleteOneDoc = (db) => {
    const collection = db.collection('EmployeeDetails');
    collection.deleteOne({
        tags: Array
    }, (err, res) => {
        if (err) console.log(`Error During Document Deletion ${err}`);
        else console.log(`${res.result.n} Document Deleted`);
    })
}

//To delete multiple record
const deleteManyDoc = (db) => {
    const collection = db.collection('EmployeeDetails');
    collection.deleteMany({
        _id: 556
    }, (err, res) => { //or we can use regular expression like  'by : /^s/' - starts with s
        if (err) console.log(`Error During Document Deletion ${err}`);
        else console.log(`${res.result.n} Document Deleted`);
    })
}

//To drop collection (using drop())
const drop_Method = (db) => {
    const collection = db.collection('Employee_Old1');
    collection.drop((err, res) => { //or we can use regular expression like  'by : /^s/' - starts with s
        // if (err) console.log(`Error During Dropping Collection ${err}`);
        // else console.log(`Collection  Dropped, ${res}`)
        console.log(`Collection  Dropped`);
    })
}

//To drop collection using dropCollection_Method(using drop())
const dropCollection_Method = (db) => {
    //const collection = db.dropCollection('Employee_Old1');
    db.dropCollection('Employee_Old1', (err, res) => { //or we can use regular expression like  'by : /^s/' - starts with s
        // if (err) console.log(`Error During Dropping Collection ${err}`);
        // if (err) console.log(`Collection  Dropped, ${res}`)
        console.log(`Collection Dropped`);
    })
}

//To update one doc
const updateOne = (db) => {
    const collection = db.collection('EmployeeDetails');
    collection.updateOne({
        content: 'meta-data'
    }, {
        $set: {
            content: 'meta-data-user'
        }
    }, (err, res) => { //or we can use regular expression like  'by : /^s/' - starts with s
        if (err) console.log(`Error During Updating Document ${err}`);
        else console.log(`${res.result.nModified} Document Updated `)
        //res.result.nModified - returns modified no.f docs
    })
}


//To update many docs
const updateMany = (db) => {
    const collection = db.collection('EmployeeDetails');
    collection.updateMany({
        content: /^meta/
    }, {
        $set: {
            content: 'meta-data-user-details'
        }
    }, (err, res) => { //or we can use regular expression like  'by : /^s/' - starts with s
        if (err) console.log(`Error During Updating Document ${err}`);
        else console.log(`${res.result.nModified} Document Updated `)
        //res.result.nModified - returns modified no.f docs
    })
}
//To limit displayd
const limitDocs = (db) => {
    const collection = db.collection('EmployeeDetails');
    collection.find({}).limit(10).toArray((err, docs) => { //or we can use regular expression like  'by : /^s/' - starts with s
        if (err) console.log(`Error while fetching Records ${err}`);
        else console.log(`${docs.length},  Document Retreieved by limit \n `)
        console.log(docs);
        //res.result.nModified - returns modified no.f docs
    })
}