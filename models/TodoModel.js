const { model, Schema } = require("mongoose");

const ToDo = model("ToDoList", new Schema({

  description: {
    type: String,
    required: true,
  },

}));

module.exports = ToDo;