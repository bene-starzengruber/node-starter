import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({

  text: {
    type: String,
    required: 'You have to use a todo text!'
  },
  deadline: {
    type: Date
  },
  creationDate: {
    type: Date,
    default: Date.now
  }

});

