import { TypeLayout } from "../../layouts/type";
import Chair from "./Chair";

export const routes = [
    {
        path : '/chair',
        element : Chair,
        layout : TypeLayout.PrimaryLayout,
    }
   
]