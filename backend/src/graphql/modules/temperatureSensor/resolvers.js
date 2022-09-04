import TemperatureSensor from '../../../models/TemperatureSensor';

export default {
  Mutation: {
    createTemperature: async (_, { data }, { pubsub }) => {
      const temperature = await TemperatureSensor.create(data);

      pubsub.publish('TEMPERATURE_VALUES_ADDED', {
        temperatureValues: temperature
      });

      return temperature;
    },
  },
  Subscription: {
    temperatureValues: {
      subscribe: (obj, { data }, { pubsub }) => pubsub.asyncIterator('TEMPERATURE_VALUES_ADDED'),
    }
  }
};