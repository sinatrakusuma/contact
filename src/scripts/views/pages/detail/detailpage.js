import CherioData from '../../../data/data/CherioData';
import UrlParser from '../../../routes/url-parser';
import SwitcherButtonInitiator from '../../../utils/switcher-button-initiator';
import detailComponent from '../../templates/detail-component';

const DetailPage = {
  async render() {
    return `
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await CherioData.detailRestaurantData(url.id);
    const container = document.getElementById('content');
    container.innerHTML = detailComponent(restaurant);

    SwitcherButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default DetailPage;
