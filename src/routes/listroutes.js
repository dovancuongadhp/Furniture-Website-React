import HomeRoutes from "../page/home/routes";
import ShopRoutes from "../page/shop/routes";
import DecorRoutes from "../page/decor/routes";
import ChairRoutes from "../page/chair/routes";
import PlantRoutes from "../page/plant/routes";
import LightRoutes from "../page/light/routes";

const listRoutes = [
  ...ShopRoutes,
  ...HomeRoutes,
  ...DecorRoutes,
  ...ChairRoutes,
  ...PlantRoutes,
  ...LightRoutes,
];
export default listRoutes;
