const db = require("../config/connection");
const { Tool, User } = require("../models");
const mongoose = require("mongoose");

const userData = require("./userData.json");
const toolData = require("./ToolData.json");
const { syncIndexes } = require("../models/User");
mongoose.connection.dropDatabase("toolsfinder");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/toolsfinder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    Promise.all([User.create(userData)])
      .then(([users]) => {
        users.forEach((item, index) => {
          toolData[index].rent = item._id;
          Tool.create(toolData[index]).then((tool) => {
            return User.findOne({ _id: item._id }).then((foundUser) => {
              console.log(tool._id);
              foundUser.mytools.push(tool._id);
              return foundUser.save().then((result) => {
                console.log(result);
                process.exit(0);
              });
            });
          });
        });
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  });





console.log("all done!");








// const db = require("../config/connection");
// const { Tool, User } = require("../models");
// const mongoose = require("mongoose");

// const userData = require("./userData.json");
// const toolData = require("./ToolData.json");
// const { syncIndexes } = require("../models/User");
// mongoose.connection.dropDatabase("toolsfinder");

// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost/toolsfinder", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     // useFindAndModify: false,
//   })
//   .then(() => {
//     Promise.all([User.create(userData)])
//       .then(([users]) => {
//         users.forEach((item, index) => {
//           toolData[index].rent = item._id;
//           Tool.create(toolData[index]).then((tool) => {
//             return User.findOne({ _id: item._id }).then((foundUser) => {
//               console.log(tool._id);
//               foundUser.mytools.push(tool._id);
//               return foundUser.save().then((result) => {
//                 console.log(result);
//                 process.exit(0);
//               });
//             });
//           });
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         process.exit(1);
//       });
//   });