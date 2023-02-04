import * as mongoose from 'mongoose';
export const ItemsModel = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  qty: {
    type: String,
  },
});
