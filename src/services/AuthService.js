import React from "react";

class AuthService{
    #isAuth

    constructor(){
        this.#isAuth=false
    }

    set isAuth(valeu){
        this.#isAuth =valeu
    }

    get isAuth(){
        return this.#isAuth
    }
}

const authService = new AuthService();
export default authService;