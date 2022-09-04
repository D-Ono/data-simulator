import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  longitude: {
      type: Number,
      required: true,
  },
  latitude: {
      type: Number,
      required: true,
  },
  temperature: {
      type: Number,
      required: true,
  },
  humidity: {
      type: Number,
      required: true,
  }
})

export default mongoose.model('TemperatureSensor', Schema);