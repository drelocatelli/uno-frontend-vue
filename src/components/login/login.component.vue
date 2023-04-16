<script setup lang="ts">
import { ref } from 'vue';

const loginType = ref(0);
const setLoginType = (type: number) => {
    new Audio('assets/audio/Whip_2.mp3').play();
    loginType.value = type;
};
</script>

<template>
    <div class="box">
        <div class="tabs">
            <div class="tab" :class="{ active: loginType == 0 }" @click="setLoginType(0)">Convidado</div>
            <div class="tab" :class="{ active: loginType == 1 }" @click="setLoginType(1)">Fazer Login</div>
        </div>
        <div class="content">aaaaaaaaaaaa</div>
    </div>
</template>
