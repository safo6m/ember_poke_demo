import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() {
    return faker.commerce.productName();
  },

  height() {
    return faker.random.number();
  },

  weight() {
    return faker.random.number();
  },

  sprites() {
    const imgUrl = faker.image.imageUrl();

    return {
      front_shiny: imgUrl
    };
  }
});
