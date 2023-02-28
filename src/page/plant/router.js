import Plant from "./Plant";
import { TypeLayout } from "../../layouts/type";
export const routes = [
    {
        path : '/plant',
        element : Plant,
        layout : TypeLayout.PrimaryLayout,
    }
   
]