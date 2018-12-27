import { Schema } from 'mongoose';

export const TodoSchema = new Schema({

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

