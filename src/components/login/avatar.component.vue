<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useAuthStore from '../../store/auth/auth';
import UserService from '../../services/user';
import { ref } from 'vue';

const avatarStore = storeToRefs(useAuthStore());

const isLoading = ref<boolean>(false);

function changeAvatar(e: Event) {
    const target = e.target as HTMLElement;
    if (!isLoading.value) {
        new Audio('/assets/audio/Whip_2.mp3').play();
        target.classList.add('rotate');
        target.setAttribute('disabled', 'true');
        UserService.avatarSeed();
        isLoading.value = true;
    }
}

function loadAvatar() {
    isLoading.value = false;
}
</script>

<template>
    <div class="avatar">
        <div class="avatar-icon">
            <img v-bind:src="avatarStore.auth.value.avatarSeed?.seed" v-bind:onload="loadAvatar" class="avatar" />
        </div>
        <img src="assets/img/reload.png" class="reload-icon" :class="isLoading ? 'rotate': ''" @click="changeAvatar" />
    </div>
</template>
