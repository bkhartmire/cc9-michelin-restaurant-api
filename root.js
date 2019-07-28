const config = require("./config");
const knex = require("knex")(config.db);

const getRestaurants = async (attribute, value) => {
  const restaurants = await knex("restaurants")
    .where(attribute, value)
    .select();
  return restaurants;
};

const getCities = async country => {
  const cities = await knex("cities")
    .where({ country_name: country })
    .select();
  return cities;
};

const getCountry = async city => {
  const country = await knex("cities")
    .where({ name: city })
    .select("country_name");
  return country.pop().country_name;
};

const root = {
  Cuisines: async args => {
    const cuisines = await knex("cuisines")
      .select()
      .limit(args.limit)
      .offset(args.offset);
    if (cuisines.length === 0)
      throw new Error("Sorry, no cuisines match your query.");
    for (const cuisine of cuisines) {
      cuisine.restaurants = getRestaurants("cuisine_name", cuisine.name);
    }
    return cuisines;
  },

  Cuisine: async args => {
    let cuisine = await knex("cuisines")
      .where({ name: args.name })
      .select();
    if (cuisine.length === 0)
      throw new Error("Sorry, no cuisines match your query.");
    cuisine = cuisine.pop();
    cuisine.restaurants = getRestaurants("cuisine_name", args.name);
    return cuisine;
  },

  Countries: async args => {
    const countries = await knex("countries")
      .select()
      .limit(args.limit)
      .offset(args.offset);
    if (countries.length === 0)
      throw new Error("Sorry, no countries match your query.");
    for (const country of countries) {
      country.cities = await getCities(country.name);
      country.restaurants = [];
      for (const city of country.cities) {
        city.restaurants = await getRestaurants("city_name", city.name);
        country.restaurants = country.restaurants.concat(city.restaurants);
      }
    }
    return countries;
  },

  Country: async args => {
    let country = await knex("countries")
      .where({ name: args.name })

      .select();
    if (country.length === 0)
      throw new Error("Sorry, no countries match your query.");
    country = country.pop();
    country.cities = getCities(country.name);
    country.restaurants = [];
    for (const city of country.cities) {
      city.restaurants = await getRestaurants("city_name", city.name);
      country.restaurants = country.restaurants.concat(city.restaurants);
    }
    return country;
  },

  Cities: async args => {
    const cities = await knex("cities")
      .select()
      .limit(args.limit)
      .offset(args.offset);
    if (cities.length === 0)
      throw new Error("Sorry, no cities match your query.");
    for (const city of cities) {
      city.restaurants = getRestaurants("city_name", city.name);
    }
    return cities;
  },

  City: async args => {
    let city = await knex("cities")
      .where({ name: args.name })
      .select();
    if (city.length === 0)
      throw new Error("Sorry, no cities match your query.");
    city = city.pop();
    city.restaurants = getRestaurants("city_name", args.name);
    return city;
  },

  Restaurants: async args => {
    if (args.price && !["$", "$$", "$$$", "$$$$", "$$$$$"].includes(args.price))
      throw new Error(
        "Please enter a valid price string: $, $$, $$$, $$$$, or $$$$$."
      );
    const whereObj = {};
    if (args.stars > 0 && args.stars < 4) {
      whereObj.stars = args.stars;
    }
    if (args.cuisine) {
      whereObj.cuisine_name = args.cuisine;
    }
    if (args.city) {
      whereObj.city_name = args.city;
    }
    if (args.price) {
      whereObj.price = args.price;
    }

    const restaurants = await knex("restaurants")
      .where(whereObj)
      .select()
      .limit(args.limit)
      .offset(args.offset);

    if (restaurants.length === 0)
      throw new Error("Sorry, no restaurants match your query.");

    for (const restaurant of restaurants) {
      restaurant.country_name = await getCountry(restaurant.city_name);
    }
    return restaurants;
  },

  Restaurant: async args => {
    let restaurant = await knex("restaurants")
      .where({ name: args.name })
      .select();
    if (restaurant.length === 0)
      throw new Error("Sorry, no restaurants match your query.");
    restaurant = restaurant.pop();
    restaurant.country_name = getCountry(restaurant.city_name);
    return restaurant;
  },

  AddRestaurant: async args => {},

  EditRestaurant: async args => {},

  DeleteRestaurant: async args => {}
};
module.exports = root;
