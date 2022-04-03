const { model, Schema } = require("mongoose");

const ToDo = model("ToDoList", new Schema({
  title: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
  },
 
}));

module.exports = ToDo;