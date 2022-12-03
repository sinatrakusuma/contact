import HomePage from '../views/pages/home/homepage';
import PageFavorite from '../views/pages/favorite/pagefavorite';
import DetailPage from '../views/pages/detail/detailpage';

const routes = {
  '/': HomePage,
  '/favorite': PageFavorite,
  '/detail/:id': DetailPage,
  '*': 'NotFound',
};

export default routes;
