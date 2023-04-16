import { defineStore } from "pinia";
import { ref } from "vue";

interface IAuthState {
    isAuthenticated: boolean,
    avatarSeed?: IAvatarSeed,
    state: 'loading' | 'finished' 
}

interface IAvatarSeed {
    state: 'initial' | 'loading' | 'finished' | 'error',
    seed?: string
}

const useAuthStore = defineStore('auth', () => {
    const auth = ref<IAuthState>({
        isAuthenticated: false,
        state: 'loading',
        avatarSeed: {
            state: 'initial',
            seed: '1'
        }
    });

    function setAuth(action: IAuthState) {
        auth.value = action;
    }

    function setSeed(action: IAvatarSeed) {
        auth.value.avatarSeed = action;
    }

    return {auth, setAuth, setSeed};
});

export default useAuthStore;