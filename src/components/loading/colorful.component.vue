<script setup lang="ts">
import './loading.scss';
const props = defineProps(['size']);
console.log(props.size)

const style = props?.size ? `scale: ${props.size}` : 'scale: 1';

</script>

<template>
    <div class="loadingio-spinner-cube-6swp5biih6b" :style="style">
        <div className="ldio-5xgl83h588">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
