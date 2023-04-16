<script setup lang="ts">
import {onMounted, ref} from 'vue';
import './index.scss';
import '../../basic.scss';
import '../../components.css';
import RepelFx from '../fx/repel.vue';
import IndexFx from './index.animation';
import LoginComponent from '../login/login.component.vue';
import UserService from '../../services/user';
import authStore from '../../store/auth/auth';

const isLoading = ref(true);

onMounted(async () => {
    if(authStore().auth.state == 'loading') {
        IndexFx.loading().start();
        await UserService.validate();
        IndexFx.loading().end();
    }
});

</script>

<template>
    <div class="container">
        <a href="/">
            <RepelFx v-bind:off="isLoading">
                <img src="assets/img/logo.png" class="logo" alt="logo" />
            </RepelFx>
        </a>
        <template v-if="isLoading">
            <img src="assets/img/loading/loading.svg" class="initialLogo" style="opacity: 0;" />
        </template>
        <template v-else>
            <LoginComponent />
        </template>
    </div>
</template>
