<script setup lang="ts">
import './loading.scss';
const props = defineProps({size: {type: Number, default: 1}});

</script>

<template>
    <div class="loadingio-spinner-cube-6swp5biih6b" :style="{scale: props.size}">
        <div className="ldio-5xgl83h588">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
