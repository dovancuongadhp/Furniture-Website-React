import {routes as HomeRoutes} from "../page/home/router"
import {routes as ShopRoutes} from "../page/shop/router"
import {routes as DecorRoutes} from "../page/decor/router"
import {routes as ChairRoutes} from "../page/chair/router"
import {routes as PlantRoutes} from "../page/plant/router"
import {routes as LightRoutes} from "../page/light/router"
export const listroutes = [
    ...ShopRoutes,
    ...HomeRoutes,
    ...DecorRoutes,
    ...ChairRoutes,
    ...PlantRoutes,
    ...LightRoutes
]