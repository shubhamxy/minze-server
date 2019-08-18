import routes from "./base";
import userRoutes from "./user";
import fireroutes from "./firebase/fireroutes";

export default [...routes, ...userRoutes, ...fireroutes];
