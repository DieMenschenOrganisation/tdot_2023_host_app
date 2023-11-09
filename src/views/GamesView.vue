<script setup lang="ts">
import {inject, ref} from "vue";
import {io} from "socket.io-client";

const backendIP = inject("backendIP");

function toSlots() {
    awaitUserID(userID => redirect("https://slots.casino.schuelerprojekte.online/slots?userID=" + userID));
}

function toBlackjack() {
    awaitUserID(userID => redirect("https://blackjack.casino.schuelerprojekte.online/blackjack?userID=" + userID));
}

function toRoulette() {
    value = "redirect/roulette.casino.schuelerprojekte.online/mobile";
    showSelection.value = false;
}

let value = "na";
function redirect(address: string) {
    window.location.href = address;
}

let showSelection = ref(true);

function awaitUserID(callback: (val: string) => void) {
    let code = randomString(10);
    value = "notify/" + code;
    const socket = io(backendIP as string, {
        rejectUnauthorized: false
    });
    socket.on("error", (error: string) => {
        console.log("Error occurred: " + error);
    })
    socket.on("requested", callback)

    showSelection.value = false;
    socket.emit("register", code)
}

function randomString(len: number): string {
    return Math.random().toString(36).slice(2, len + 2);
}
</script>

<template>
    <div v-if="showSelection">
        <h1 class="w-100 p-4 text-center">Gewünschtes Spiel auswählen:</h1>
        <div class="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-5">
            <h3 type="button" class="option" @click="toSlots">Slots</h3>
            <h3 type="button" class="option" @click="toBlackjack">Blackjack</h3>
            <h3 type="button" class="option" @click="toRoulette">Roulette</h3>
        </div>
    </div>
    <div v-else>
        <h1 class="w-100 p-4 text-center">Um fortzufahren bitten einscannen:</h1>
        <img id="qrcode" class="position-absolute start-50 top-50 translate-middle"
             :src="'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data='+value" alt="qrcode to scan">
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