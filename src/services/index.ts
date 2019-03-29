import routes from './base';
import fireRoutes from './firebase';
// import productRoutes from './product';
import userRoutes from './user';

export default [...routes, ...userRoutes, ...fireRoutes];
