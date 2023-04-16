import useAuthStore from "../store/auth/auth";
import { sleep } from "../utils/sleepAsync";
import { instance } from "./instance";

class UserService {

    static async validate(onFail?: Function) {
        try {
            await sleep(5000);
            await instance.get('profile');
            useAuthStore().setAuth({isAuthenticated: true, state: 'finished'});
        } catch(err) {
            console.log(err)
            useAuthStore().setAuth({isAuthenticated: false, state: 'finished'});
            if(onFail) 
            onFail();
        }
    }
    
}


export default UserService;