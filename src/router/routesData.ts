export interface PageRoutes {
    home : string,
    contact : string,
    details : string,
    checkout : string,
    categories : string,
    error : string,
    login : string,
    signup : string,
};



export const routes: PageRoutes = {
    home : "/",
    contact : "/contact",
    details : "/details/:id",
    checkout : "/checkout",
    categories : "/categories",
    error : "/error",
    login : "/login",
    signup : "/signup",

}