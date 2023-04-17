<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import './cardsFall.scss';
import CardsFallFx from './cardsFall.animation';
const props = defineProps({isLoading: {default: true, required: true, type: Boolean}});

let animInterval: NodeJS.Timer | null = null;

onMounted(() => {
    CardsFallFx().startAnim();
    animInterval = setInterval(() => {
        CardsFallFx().startAnim();
    }, 3000);
})

onUnmounted(() => clearInterval(animInterval!));

watch(() => props.isLoading, (value) => {
    if(!value) {
        CardsFallFx().removeInitialCards();
        clearInterval(animInterval!)
    }
})

</script>

<template>
    <div id="table" class="cardsFall" :style="{ animation: props.isLoading ? 'none' : 'blurEnd 3s ease-in-out forwards' }"></div>
    <slot />
</template>