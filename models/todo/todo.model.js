const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subtodo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subTodo",
    },
  },
  { timestamps: true }
);

export const todo = mongoose.model("todo", todoSchema);
