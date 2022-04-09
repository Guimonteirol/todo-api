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
  urgency: {
    type: String,
    required: true,
  },
  dataFormatada: {
    type: String,
    required: true,
  },
  priority:{
    type: Boolean,
    required: true 
  },
  prioritymax:{
    type: Boolean,
    required: true 
  },
}));

module.exports = ToDo;