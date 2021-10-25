const { Schema, model } = require("mongoose");

const toolSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "name is Required",
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    trim: true,
  },

  status: {
    type: Boolean,
    default: false,
  },

  dayprice: {
    type: Number,
    required: true,
  },

  hourprice: {
    type: Number,
    required: true,
  },

  duerent: {
    type: Date,
    default: Date.now,
  },

  rent: {
    // id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    // },
  },
});

const Tool = model("Tool", toolSchema);

module.exports = Tool;
