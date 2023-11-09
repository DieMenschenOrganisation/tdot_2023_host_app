<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

function toGames(): void {
    router.push("/games")
}

function toPayout(): void {
    router.push("/payout")
}

function toRoulette(): void {
    router.push("/roulette")
}
</script>

<template>
    <h1 class="w-100 p-5 text-center">
        What do you want to host?
    </h1>
    <div class="w-100 d-flex flex-column align-items-center">
        <h3 class="p-2 option" type="button" @click="toGames">Single Player Games</h3>
        <h3 class="p-2 option" type="button" @click="toPayout">Payout Manager</h3>
        <h3 class="p-2 option" type="button" @click="toRoulette">Roulette</h3>
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