import { TypeLayout } from "../../layouts/type";
import Chair from "./Chair";

const routes = [
    {
        path : '/chair',
        element : Chair,
        layout : TypeLayout.PrimaryLayout,
    }
   
]
export default routes;