export const userLogin = payload => {
    return { type: "USER_LOGIN", payload };
};



export const userLogout = () => {
    return { type: "USER_LOGOUT" };
};