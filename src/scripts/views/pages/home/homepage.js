import CherioData from '../../../data/data/CherioData';
import cardComponent from '../../templates/card-component';
import '../../../components/heroimage';

const HomePage = {
  async render() {
    return `
    
    <hero-image></hero-image>
        <div class="card-container"></div>
      `;
  },

  async afterRender() {
    const restaurants = await CherioData.getRestaurantData();
    const restaurantList = document.querySelector('.card-container');
    restaurants.forEach((item) => {
      console.log(item.pictureId);
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default HomePage;
