<script setup lang="ts">
import formValidation from '../../../utils/formValidation';
import AvatarComponent from '../avatar.component.vue';

function onSubmit(e: Event) {
    const form = e.target as HTMLFormElement;
    new Audio('/assets/audio/UI_Quirky21.mp3').play();

    if (form.checkValidity()) {
    } else {
        formValidation(form.elements);
    }
}
</script>

<template>
    <div class="left">
        <h1>Escolha seu nick</h1>
        <form @submit.prevent="onSubmit" novalidate>
            <input type="text" name="username" placeholder="Seu nick aqui" required />
            <span id="usernameError" class="errorInput"> &nbsp; </span>
            <div class="buttons">
                <button type="submit">Entrar</button>
            </div>
        </form>
    </div>
    <div class="right">
        <AvatarComponent />
    </div>
</template>
