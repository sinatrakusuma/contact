import CherioDataIDB from '../../../data/idb/cherio-idb';
import cardComponent from '../../templates/card-component';

const PageFavorite = {
  async render() {
    return `
        <div class="card-container card-container-pagefavorite"></div>
      `;
  },

  async afterRender() {
    const restaurants = await CherioDataIDB.getAllRestaurants();
    const restaurantList = document.querySelector('.card-container');
    restaurants.forEach((item) => {
      console.log(item);
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default PageFavorite;
