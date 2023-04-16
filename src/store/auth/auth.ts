import { defineStore } from "pinia";
import { ref } from "vue";

interface IAuthState {
    isAuthenticated: boolean,
    state: 'loading' | 'finished' 
}

const useAuthStore = defineStore('auth', () => {
    const auth = ref<IAuthState>({
        isAuthenticated: false,
        state: 'loading'
    });

    function setAuth(action: IAuthState) {
        auth.value = action;
    }

    return {auth, setAuth};
});

export default useAuthStore;