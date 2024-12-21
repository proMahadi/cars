export interface NavMenu {
    id : string,
    label : string,
    path : string,
    // href : string,
}

export const navData :NavMenu[] = [
    {
        id : "1",
        label : "categories",
        path : "/categories",
        // href : "#",
    },
    {
        id : "2",
        label : "brands",
        path : "/brands",
        // href : "#",
    },
    {
        id : "3",
        label : "flagships",
        path : "/flagships",
        // href : "#",
    },
    {
        id : "4",
        label : "contact",
        path : "/contact",
        // href : "#",
    },
]