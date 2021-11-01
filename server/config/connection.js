const mongoose = require('mongoose');
//const URI=' mongodb+srv://ivany9:80009512Ivan$@cluster0.kjh6b.mongodb.net/toolsfinder?retryWrites=true&w=majority';




// mongoose.connect(URI , {
//   useNewUrlParser: true,
//  // useUnifiedTopology: true,
//   useCreateIndex: true,
//  // useFindAndModify: false,
// });

// module.exports = mongoose.connection;



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/toolsfinder', {
  useNewUrlParser: true,
 useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
