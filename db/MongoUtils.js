const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

function MongoUtils() {
  const mu = {};

  mu.connect = () => {
    const uri =
      "mongodb+srv://val:val@cluster0-wnneh.azure.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(
      uri,
      { useNewUrlParser: true },
      { useUnifiedTopology: true }
    );
    //retorna una promesa
    return client.connect();
  };

  mu.getDocuments = (client) => {
    const collectionUsers = client.db("authentication").collection("users");
    //retorna una promesa
    return collectionUsers
      .find({})
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };

  mu.getUser = (username) => {
    return mu.connect().then((client) =>
      client
        .db("authentication")
        .collection("users")
        .find({ username: username })
        .toArray()
        .finally(() => client.close())
    );
  };

  mu.insertBusiness = (data) => {
    return mu.connect().then((client) =>
      client
        .db("web")
        .collection("restaurantes")
        .insertOne(data)
        .finally(() => client.close())
    );
  };

  mu.insertDocument = (pUsername, pPassword, pDate, pPhone) => {
    return mu.connect().then((client) =>
      client
        .db("authentication")
        .collection("users")
        .insertOne({
          username: pUsername,
          password: pPassword,
          date: pDate,
          phone: pPhone,
        })
        .finally(() => client.close())
    );
  };

  mu.listenToChanges = (client, notifyAll) => {
    const collectionRestaurant = client.db("web").collection("restaurantes");
    //retorna una promesa
    const cursor = collectionRestaurant.watch();

    cursor.on("change", (data) => {
      console.log("Mongo change", data);
      notifyAll("Shit changed");
    });
  };

  mu.getRestaurants = (client) => {
    const collectionRestaurant = client.db("web").collection("restaurantes");
    //retorna una promesa
    return collectionRestaurant
      .find({})
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };

  mu.getShop = (client, id) => {
    const collectionRestaurant = client.db("web").collection("stores");
    //retorna una promesa
    return collectionRestaurant
      .find({ _id: ObjectId(id) })
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };
  mu.getReserva = (client, idRestaurante, fecha) => {
    const collectionRestaurant = client.db("web").collection("reservas");
    //retorna una promesa
    console.log("FECHA", fecha);
    let obj = { idRes: idRestaurante, fecha: fecha };
    console.log(obj);
    return collectionRestaurant
      .find(obj)
      .toArray()
      .finally(() => {
        console.log("closing client");
        client.close();
      });
  };
  mu.crearReserva = (client, body) => {
    const collectionRestaurant = client.db("web").collection("reservas");
    //retorna una promesa
    return collectionRestaurant.insertOne(body).finally(() => {
      console.log("closing client CREAR");
      client.close();
    });
  };
  mu.updateShop = (client, body, id, callback) => {
    const col = client.db("web").collection("stores");
    console.log(body);
    console.log(id);
    let resp = col.updateOne(
      { _id: ObjectId(id) },
      { $set: body },
      // eslint-disable-next-line no-unused-vars
      function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        client.close();
      }
    );
    console.log(resp);
    callback("OK");
  };
  return mu;
}

module.exports = MongoUtils;
