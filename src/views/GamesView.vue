<script setup lang="ts">
function toSlots() {
    // TODO Redirect to slots
}

function toHorseRace() {
    // TODO Redirect to horse race
}
</script>

<template>
    <h1 class="w-100 p-4 text-center">Gewünschtes Spiel auswählen:</h1>
    <div class="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-5">
        <h3 type="button" class="option" @click="toSlots">Slots</h3>
        <h3 type="button" class="option" @click="toHorseRace">Pferderennen</h3>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables";
.option {
    &:hover {
        color: $dark-mode-blue;
    }
}
</style>