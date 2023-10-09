var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.listen(5555, function(){
  console.log("Server is running ...");
});
const { db } = require('./config/admin');

app.get("/getall", async (req, res) => {
    const cRef = db.collection('Maps');
    try {
      cRef.get().then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("get thanh cong");
        console.log(items);
        res.status(201).json(items);
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  app.post('/add', async (req, res) => {
    const { Description, ID,MapID,Name,SideID,videoURL } = req.body;
    try {
      const c = db.collection('Smoke').doc();
      const item = {
        
        Description: Description,
        ID:ID,
        MapID:MapID,
        Name:Name,
        SideID:SideID,
        videoURL:videoURL
        
      };
      console.log('add done', item);
      c.set(item);
      res.status(200).send({
        status: 'success',
        message: 'item added successfully',
        data: item,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  });
  app.get('/smokeData', (req, res) => {
    const collectionRef = db.collection('Smoke');
    // Query the collection for documents where MapID is "Mirage" and SideID is "T"
    const query = collectionRef.where('MapID', '==', 'Mirage').where('SideID', '==', 'T');
    // Execute the query and retrieve the Name and videoURL fields
    query
      .get()
      .then((querySnapshot) => {
        const smokeData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const name = data.Name;
          const videoURL = data.videoURL;
          const description = data.Description;
          smokeData.push({ name, videoURL,description });
        });
        res.json(smokeData); // Send the retrieved data as a JSON response
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
        res.status(500).send('Error getting smoke data');
      });
  });