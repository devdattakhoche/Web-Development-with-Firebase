import { db } from "./config.js";

const item_data = {
  name: "Football",
  description: "A ball used in football games",
  type: "ball",
  price: 100000,
  row_status: "active",
};

// Get document
// db.collection("items")
//   .doc("1")
//   .get()
//   .then((doc) => {
//     console.log(doc.data());
//   }).catch((err) => {
//     console.log(err);
//     });

// set documnet
// db.collection("items")
//   .doc("2")
//   .set(item_data)
//   .then(() => {
//     console.log("Item added to the database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// insert document
// db.collection("items")
//   .add(item_data)
//   .then((doc) => {
//     console.log(`doc id : ${doc.id}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// get collection
// db.collection("items")
//   .get()
//   .then((docs) => {
//     docs.forEach((element) => {
//       console.log(element.data());
//     });
//   });

// update items

// db.collection("items")
//   .doc("1")
//   .update({
//     "kill1":false
//   })
//   .then(() => {
//     console.log("Item updated in the database");
//   }).catch((err) => {
//     console.log(err);
//     });

// delete items
// db.collection("items")
// .doc("1")
// .delete()
// .then(() => {
//     console.log("Item deleted from the database");
//     });

// where query
// db.collection("items").where("price", ">=",1000).get().then((docs) => {
//     docs.forEach((element) => {
//         console.log(element.data());
//     });
//     }).catch((err) => {
//         console.log(err);
//     }
// );

// order by  and limit
// db.collection("items")
//   .orderBy("price", "desc")
//   .limit(1)
//   .get()
//   .then((docs) => {
//     docs.forEach((element) => {
//       console.log(element.data());
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// snapshot
// db.collection("items")
//   .doc("2")
//   .onSnapshot((doc) => {
//     console.log(doc.data());
//   });
