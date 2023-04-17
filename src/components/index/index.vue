<script setup lang="ts">
import {onMounted} from 'vue';
import './index.scss';
import '../../basic.scss';
import '../../components.css';
import RepelFx from '../fx/repel.vue';
import IndexFx from './index.animation';
import LoginComponent from '../login/login.component.vue';
import UserService from '../../services/user';
import useAuthStore from '../../store/auth/auth';
import { storeToRefs } from 'pinia';
import CardsFallLoading from '../loading/cardsFall/cardsFall.component.vue';
import CardsMoveLoading from '../loading/cardsMove/cardsMove.vue';

const authStore = storeToRefs(useAuthStore());
const isAuthLoading = authStore.auth.value.state == 'loading';

onMounted(async () => {
    if(isAuthLoading) {
        IndexFx.loading().start();
        await UserService.validate();
        IndexFx.loading().end();
        await UserService.avatarSeed();
    }
});
</script>

<template>
    <CardsFallLoading :isLoading="authStore.auth.value.state == 'loading'">
        <div class="container">
            <a href="/">
                <RepelFx :off="authStore.auth.value.state == 'loading'">
                    <img src="assets/img/logo.png" class="logo" alt="logo" />
                </RepelFx>
            </a>
            <CardsMoveLoading class="initialLogo" width="200px" style="opacity: 0;"  />
            <LoginComponent />
        </div>
    </CardsFallLoading>
</template>
