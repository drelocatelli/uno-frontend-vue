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

    static async avatarSeed() {
        try {
            useAuthStore().setSeed({state: 'loading'});
            const response = await instance.get('avatars');
            const data = response.data as { seed: number; url: string };
            useAuthStore().setSeed({seed: data.url, state: 'finished'});
        } catch(err) {
            useAuthStore().setSeed({state: 'error'});
            console.log(err);
        }
    }
    
}


export default UserService;