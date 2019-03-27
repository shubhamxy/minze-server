import fireRoutes from "./firebase";
import productRoutes from "./product";
import userRoutes from "./user";


export default [
  ...userRoutes,
  ...productRoutes,
  ...fireRoutes
];
