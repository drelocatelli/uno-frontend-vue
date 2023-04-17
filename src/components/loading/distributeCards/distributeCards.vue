<script lang="ts" setup>
import DistributeCardsSVG from './distributecards.svg';
const props = defineProps({class: {type: String, required: false}, style: {type: Object, required: false}, width: {type: String, default: '250px'}});
</script>

<template>
    <object :data="DistributeCardsSVG" :width="props.width" :class="props.class" :style="props.style" />
</template>
