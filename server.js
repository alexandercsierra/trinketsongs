const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3333;


const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

// Data from https://www.uncommongoods.com/fun/by-interest/geek-gifts



server.get("/items", (req, res) => {
  res.json(items);
});
let itemId = 12;

server.get("/itemById/:id", (req, res) => {
  const { name } = req.params;
  const findItemById = item => {
    return item.name == name;
  };
  const foundItem = items.find(findItemById);
  if (!foundItem) {
    return sendUserError("No Item found by that ID", res);
  } else {
    res.json(foundItem);
  }
});

// server.post("/items", (req, res) => {
//   const { name, artist, mood, tempo, acoustic } = req.body;
//   const newItem = { name, artist, mood, tempo, acoustic, id: itemId };
//   if (!name || !artist) {
//     return sendUserError(
//       "Ya gone did goofed! Name/Price/Description are all required to create an item in the item DB.",
//       res
//     );
//   }
//   const findItemByName = item => {
//     return item.name === name;
//   };
//   if (items.find(findItemByName)) {
//     res.json()
//   }

//   // items.push(newItem);
//   itemId++;
//   // res.json(items);
// });

// server.put("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, price, imageUrl, description, shipping } = req.body;
//   const findItemById = item => {
//     return item.id == id;
//   };
//   const foundItem = items.find(findItemById);
//   if (!foundItem) {
//     return sendUserError("No Item found by that ID", res);
//   } else {
//     if (name) foundItem.name = name;
//     if (price) foundItem.price = price;
//     if (imageUrl) foundItem.imageUrl = imageUrl;
//     if (description) foundItem.description = description;
//     if (shipping) foundItem.shipping = shipping;
//     res.json(items);
//   }
// });

// server.delete("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const foundItem = items.find(item => item.id == id);

//   if (foundItem) {
//     const ItemRemoved = { ...foundItem };
//     items = items.filter(item => item.id != id);
//     res.status(200).json(items);
//   } else {
//     sendUserError("No item by that ID exists in the item DB", res);
//   }
// });

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});

let items = [ 
    {
        "track_index_num": 0,
        "track_id": "2RM4jf1Xa9zPgMGRDiht8O",
        "track_name": "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj",
        "artist_name": "YG"
    },
    {
        "track_index_num": 1,
        "track_id": "1tHDG53xJNGsItRA3vfVgs",
        "track_name": "BAND DRUM (feat. A$AP Rocky)",
        "artist_name": "YG"
    },
    {
        "track_index_num": 2,
        "track_id": "6Wosx2euFPMT14UXiWudMy",
        "track_name": "Radio Silence",
        "artist_name": "R3HAB"
    },
    {
        "track_index_num": 3,
        "track_id": "3J2Jpw61sO7l6Hc7qdYV91",
        "track_name": "Lactose",
        "artist_name": "Chris Cooq"
    },
    {
        "track_index_num": 4,
        "track_id": "2jbYvQCyPgX3CdmAzeVeuS",
        "track_name": "Same - Original mix",
        "artist_name": "Chris Cooq"
    },
    {
        "track_index_num": 5,
        "track_id": "26Y1lX7ZOpw9Ql3gGAlqLK",
        "track_name": "Debauchery - Original mix",
        "artist_name": "Curbo"
    },
    {
        "track_index_num": 6,
        "track_id": "5eIyK73BrxHLnly4F9PWqg",
        "track_name": "Grandma - Original mix",
        "artist_name": "Bingo Play"
    },
    {
        "track_index_num": 7,
        "track_id": "13Mf2ZBpfNkgWJowvM5hXh",
        "track_name": "Bon appétit",
        "artist_name": "G Herbo"
    },
    {
        "track_index_num": 8,
        "track_id": "7BQaRTHk44DkMhIVNcXy2D",
        "track_name": "Among - Original mix",
        "artist_name": "34 Feet"
    },
    {
        "track_index_num": 9,
        "track_id": "049RxG2laEl9U1PGYeIqLV",
        "track_name": "Hazard - Original mix",
        "artist_name": "Chris Cooq"
    },
    {
        "track_index_num": 10,
        "track_id": "118GQ70Sp6pMqn6w1oKuki",
        "track_name": "Strummer - Original mix",
        "artist_name": "Jarka"
    },
    {
        "track_index_num": 11,
        "track_id": "6S7cr72a7a8RVAXzDCRj6m",
        "track_name": "Big Racks - Original mix",
        "artist_name": "Big Koola"
    },
    {
        "track_index_num": 12,
        "track_id": "7h2qWpMJzIVtiP30E8VDW4",
        "track_name": "Rulet - Original mix",
        "artist_name": "Scatox"
    },
    {
        "track_index_num": 13,
        "track_id": "3KVQFxJ5CWOcbxdpPYdi4o",
        "track_name": "Head - Original mix",
        "artist_name": "Jupitar"
    },
    {
        "track_index_num": 14,
        "track_id": "0JjNrI1xmsTfhaiU1R6OVc",
        "track_name": "Defeding - Original mix",
        "artist_name": "Curbo"
    },
    {
        "track_index_num": 15,
        "track_id": "3HjTcZt29JUHg5m60QhlMw",
        "track_name": "Jupiter - Original mix",
        "artist_name": "Junkee"
    },
    {
        "track_index_num": 16,
        "track_id": "42LWRdkWxM9aWmDImWvH6C",
        "track_name": "Koonra - Original mix",
        "artist_name": "Mamuton"
    },
    {
        "track_index_num": 17,
        "track_id": "32dMH9MvlTJaABrPHY52Yb",
        "track_name": "Spouse - Original mix",
        "artist_name": "Yellow Ey"
    },
    {
        "track_index_num": 18,
        "track_id": "5RCPsfzmEpTXMCTNk7wEfQ",
        "track_name": "Prop - Original mix",
        "artist_name": "Bingo Play"
    },
    {
        "track_index_num": 19,
        "track_id": "0y0mwXrdEzjUK5Nq8GDPnY",
        "track_name": "Particular - Original mix",
        "artist_name": "Pablo XD"
    },
    {
        "track_index_num": 20,
        "track_id": "3RSMqu36JZnmMkrnNmnqyd",
        "track_name": "Tremor - Original mix",
        "artist_name": "Tremora"
    },
    {
        "track_index_num": 21,
        "track_id": "1o0fkWCltFHVeFIRHqvR5b",
        "track_name": "Cent - Original mix",
        "artist_name": "Junkee"
    },
    {
        "track_index_num": 22,
        "track_id": "2iGShSeV6WcDbez5SLJ2bJ",
        "track_name": "Pantheon - Original mix",
        "artist_name": "Mamuton"
    },
    {
        "track_index_num": 23,
        "track_id": "2rNTo0tGUMW6rn0uHzV5er",
        "track_name": "Samplerup - Original mix",
        "artist_name": "Chris Cooq"
    },
    {
        "track_index_num": 24,
        "track_id": "5Egkx8edirN0pR2R58C2ME",
        "track_name": "Sinisteraz",
        "artist_name": "Bob Janga"
    },
    {
        "track_index_num": 25,
        "track_id": "67r3lnzstENsRYlZWq6DYP",
        "track_name": "Tenon",
        "artist_name": "Junkee"
    }
]