import { IconType } from "react-icons";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";



export interface NavMenu {
    id : string,
    label : string,
    path : string
}
export interface Info {
    id : string,
    icon : IconType,
    path: string
}

export const navData :NavMenu[] = [
    {
        id : "1",
        label : "categories",
        path : "/categories"
    },
    {
        id : "2",
        label : "brands",
        path : "/brands"
    },
    {
        id : "3",
        label : "flagships",
        path : "/flagships"
    },
    {
        id : "4",
        label : "contact",
        path : "/contact"
    },
]

export const infoData : Info[]= [
    {
        id : "1",
        icon :IoPersonOutline ,
        path: "/login"
    },
    {
        id : "2",
        icon :CiHeart  ,
        path: "/wishlist"
    },
    {
        id : "3",
        icon :FaOpencart   ,
        path: "/cart"
    },
]