<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import './index.scss';
import '../../basic.scss';
import '../../components.css';
import RepelFx from '../fx/repel.vue';
import IndexFx from './index.animation';
import LoginComponent from '../login/login.component.vue';
import UserService from '../../services/user';
import authStore from '../../store/auth/auth';

const loadAuth = ref(true);
const isAuthLoading = authStore().auth.state == 'loading';

onMounted(async () => {
    if(isAuthLoading) {
        IndexFx.loading().start();
        await UserService.validate();
        IndexFx.loading().end();
    }
});

watch(() => authStore().auth, (value) => {
    if(value.state == 'finished') {
        loadAuth.value = false;
    }
})

</script>

<template>
    <div class="container">
        <a href="/">
            <RepelFx v-bind:off="loadAuth">
                <img src="assets/img/logo.png" class="logo" alt="logo" />
            </RepelFx>
        </a>
        <img src="assets/img/loading/loading.svg" class="initialLogo" style="opacity: 0;" />
        <LoginComponent />
    </div>
</template>
