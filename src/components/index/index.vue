<script setup lang="ts">
import {ref} from 'vue';
import './index.scss';
import '../../basic.scss';
import '../../components.css';
import RepelFx from '../fx/repel.vue';

const loginType = ref(0);

const setLoginType = (type: number) => {
    loginType.value = type;
};

</script>

<template>
    <div class="container">
        <router-link to="/">
            <RepelFx>
                <img src="assets/img/logo.png" class="logo" alt="logo" />
            </RepelFx>
        </router-link>
        <div class="box">
            <div class="tabs">
                <div class="tab" :class="{active: loginType == 0}" @click="setLoginType(0)">Convidado</div>
                <div class="tab" :class="{active: loginType == 1}"  @click="setLoginType(1)">Fazer Login</div>
            </div>
            <div class="content">
                aaaaaaaaaaaa
            </div>
        </div>
    </div>
</template>
