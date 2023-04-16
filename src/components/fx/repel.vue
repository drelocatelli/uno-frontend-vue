<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const element = ref(null);

onMounted(() => {
    repelAnim();
});

const repelAnim = () => {
    const selector = ((element.value! as HTMLElement).children[0] as HTMLElement);
    selector.style.setProperty('position', 'relative');
    selector.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e as MouseEvent;
        gsap.to(selector, { y: `${(offsetY * -1) / 8}px`, x: `${(offsetX * -1) / 8}px`, ease: 'circ' });
    });

    selector?.addEventListener('mouseleave', (e) => {
        gsap.to(selector, { duration: 2, y: `${selector.offsetTop}px`, x: `${selector.offsetLeft}px`, ease: 'back' });
    });
};
</script>

<template>
    <div ref="element">
        <slot />
    </div>
</template>
