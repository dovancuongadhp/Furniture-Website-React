import Plant from "./Plant";
import { TypeLayout } from "../../layouts/type";
const routes = [
    {
        path : '/plant',
        element : Plant,
        layout : TypeLayout.PrimaryLayout,
    }
   
]
export default routes;