'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

const axios = require('axios');

const getGameInfo = async (slug) => {
  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;

  const body = await axios.get(`https://gog.com/game/${slug}`);
  const dom = new JSDOM(body.data);

  const ratingElement = dom.window.document.querySelector('.age-restrictions__icon use');

  const description = dom.window.document.querySelector('.description');

  return {
    rating: ratingElement
      ? ratingElement
        .getAttribute('xlink:href')
        .replace(/_/g, '')
        .replace(/[^\w-]+/g, '')
      : 'Livre',

    short_description: description.textContent.trim().slice(0, 160),
    description: description.innerHTML,
  }
};

module.exports = {
  populate: async () => {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;

    const { data: { products } } = await axios.get(gogApiUrl);

    return console.log(await getGameInfo(products[18].slug));
  }
};
