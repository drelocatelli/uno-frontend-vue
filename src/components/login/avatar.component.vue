<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useAuthStore from '../../store/auth/auth';
import UserService from '../../services/user';
import { ref } from 'vue';
import ColorfulLoading from '../loading/colorful.component.vue';
import { sleep } from '../../utils/sleepAsync';

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

async function loadAvatar() {
    await sleep(1000);
    // isLoading.value = false;
}
</script>

<template>
    <div class="avatar">
        {{ isLoading }}
        <div class="avatar-icon">
            <template v-if="isLoading">
                <ColorfulLoading class="loading" />
            </template>
            <img v-bind:src="avatarStore.auth.value.avatarSeed?.seed" v-bind:onload="loadAvatar" :style="isLoading ? 'display:none': 'display: block'" class="avatar" />
        </div>
        <img src="assets/img/reload.png" class="reload-icon" :class="isLoading ? 'rotate' : ''" @click="changeAvatar" />
    </div>
</template>
