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

//get Method
//get Tat ca ten Map
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
  /////---------------------------------------GET SMOKE-----------------------------------
  /////////<------------------------------------T side -------------------------------------------
  //get Tat ca smoke Mirage
  app.get('/getMirageSmokeT', (req, res) => {
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
  app.get('/getInfernoSmokeT', (req, res) => {
    const collectionRef = db.collection('Smoke');
    // Query the collection for documents where MapID is "Mirage" and SideID is "T"
    const query = collectionRef.where('MapID', '==', 'Inferno').where('SideID', '==', 'T');
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
  app.get('/getDust2SmokeT', (req, res) => {
    const collectionRef = db.collection('Smoke');
    // Query the collection for documents where MapID is "Mirage" and SideID is "T"
    const query = collectionRef.where('MapID', '==', 'Dust2').where('SideID', '==', 'T');
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
    /////////------------------------------------T side -------------------------------------------/>
  //<-------------------------------------------CT side--------------------------------------->
  app.get('/getDust2SmokeCT', (req, res) => {
    const collectionRef = db.collection('Smoke');
    // Query the collection for documents where MapID is "Mirage" and SideID is "T"
    const query = collectionRef.where('MapID', '==', 'Dust2').where('SideID', '==', 'CT');
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
  app.get('/getInfernoSmokeCT', (req, res) => {
    const collectionRef = db.collection('Smoke');
    // Query the collection for documents where MapID is "Mirage" and SideID is "T"
    const query = collectionRef.where('MapID', '==', 'Inferno').where('SideID', '==', 'CT');
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
  app.get('/getMirageSmokeCT', (req, res) => {
    const collectionRef = db.collection('Smoke');
    // Query the collection for documents where MapID is "Mirage" and SideID is "T"
    const query = collectionRef.where('MapID', '==', 'Mirage').where('SideID', '==', 'CT');
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
  //<-------------------------------------------CT side---------------------------------------/>





 /////---------------------------------------GET FLASH----------------------------------->
 //<--------------------------------------------T side -------------------------->
 //Get flash Mirage
 app.get('/getMirageFlashT', (req, res) => {
  const collectionRef = db.collection('Flash');
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
//get flash inferno
app.get('/getInfernoSmokeT', (req, res) => {
  const collectionRef = db.collection('Flash');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Inferno').where('SideID', '==', 'T');
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
//getDust2Flash
 app.get('/getDust2FlashT', (req, res) => {
  const collectionRef = db.collection('Flash');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Dust2').where('SideID', '==', 'T');
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
 //<--------------------------------------------T side --------------------------/>





//<----------------------------------------------Ct side -------------------------------->
 //Get flash Mirage
 app.get('/getMirageFlashCT', (req, res) => {
  const collectionRef = db.collection('Flash');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Mirage').where('SideID', '==', 'CT');
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
//get flash inferno
app.get('/getInfernoSmokeCT', (req, res) => {
  const collectionRef = db.collection('Flash');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Inferno').where('SideID', '==', 'CT');
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
//getDust2Flash
 app.get('/getDust2FlashCT', (req, res) => {
  const collectionRef = db.collection('Flash');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Dust2').where('SideID', '==', 'CT');
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
//<----------------------------------------------Ct side --------------------------------/>


/////---------------------------------------GET Molly----------------------------------->
 //<--------------------------------------------T side -------------------------->
 //Get flash Mirage
 app.get('/getMirageMollyT', (req, res) => {
  const collectionRef = db.collection('Molly');
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
//get Molly inferno
app.get('/getInfernoSmokeT', (req, res) => {
  const collectionRef = db.collection('Molly');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Inferno').where('SideID', '==', 'T');
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
//getDust2Molly
 app.get('/getDust2MollyT', (req, res) => {
  const collectionRef = db.collection('Molly');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Dust2').where('SideID', '==', 'T');
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
 //<--------------------------------------------T side --------------------------/>





//<----------------------------------------------Ct side -------------------------------->
 //Get Molly Mirage
 app.get('/getMirageMollyCT', (req, res) => {
  const collectionRef = db.collection('Molly');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Mirage').where('SideID', '==', 'CT');
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
//get Molly inferno
app.get('/getInfernoMollyCT', (req, res) => {
  const collectionRef = db.collection('Molly');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Inferno').where('SideID', '==', 'CT');
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
//getDust2Molly
 app.get('/getDust2MollyCT', (req, res) => {
  const collectionRef = db.collection('Molly');
  // Query the collection for documents where MapID is "Mirage" and SideID is "T"
  const query = collectionRef.where('MapID', '==', 'Dust2').where('SideID', '==', 'CT');
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
//<----------------------------------------------Ct side --------------------------------/>
/////---------------------------------------GET Molly----------------------------------->
//Post method
  app.post('/addsmoke', async (req, res) => {
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

  app.post('/addflash', async (req, res) => {
    const { Description, ID,MapID,Name,SideID,videoURL } = req.body;
    try {
      const c = db.collection('Flash').doc();
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

  app.post('/addmolly', async (req, res) => {
    const { Description, ID,MapID,Name,SideID,videoURL } = req.body;
    try {
      const c = db.collection('Molly').doc();
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
