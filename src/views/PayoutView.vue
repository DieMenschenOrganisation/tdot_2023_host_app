<script setup lang="ts">
import {io} from "socket.io-client";
import {inject, ref} from "vue";
import axios from "axios";


const backendIP = inject("backendIP");
const points = [
    200,400,600,800,1000,1200,1400,1600,1800,2000
]

const code = ref("");
const showSelection = ref(false);
let userID = "";
let userPoints = ref(-1);

const socket = io(backendIP as string, {
    rejectUnauthorized: false
});
socket.on("error", (error: string) => {
    console.log("Error occurred: " + error);
})
socket.on("requested", requested)
reloadCode();

function requested(id: string) {
    userID = id;
    loadUserPoints();
    showSelection.value = true;
}

async function loadUserPoints() {
    axios.get(`${backendIP}user/points/${userID}`).then(points => {
        userPoints.value = points.data;
        showSelection.value = true;
    }).catch(reason => {
        console.log("Error: " + reason.response.data);
    })
}

function redeem(points: number) {
    axios.get(`${backendIP}user/points/redeem?userID=${userID}&points=${points}`);
    showSelection.value = false;
    reloadCode();
}

function abort() {
    showSelection.value = false;
    reloadCode();
}

function reloadCode() {
    code.value = randomString(10);
    socket.emit("register", code.value);
}

function randomString(len: number): string {
    return Math.random().toString(36).slice(2, len + 2);
}
</script>

<template>
    <div v-if="!showSelection">
        <h1 class="w-100 p-4 text-center">Willkommen bei der Auszahlungsseite!</h1>
        <h4 class="w-100 text-center">Um fortzufahren bitten einscannen:</h4>
        <img id="qrcode" class="position-absolute start-50 top-50 translate-middle"
             :src="'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=notify/'+code" alt="qrcode to scan">
    </div>
    <div v-else>
        <h4 class="w-100 p-4 text-center">Kontostand: {{userPoints}}</h4>
        <h1 class="w-100 mb-5 text-center">Bitte auswählen:</h1>

        <div class="d-flex flex-column align-items-center gap-3">
            <div v-for="payout in points" :key="payout" >
                <h5 v-if="payout <= userPoints" class="option" type="button" @click="redeem(payout)">{{payout / 200}} Stk. für {{payout}} Punkte</h5>
            </div>
        </div>

        <h3 id="abort" class="w-100 text-center position-absolute option" type="button" @click="abort">Abort</h3>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables";
.option {
    &:hover {
        color: $dark-mode-blue;
    }
}

#abort {
    bottom: 30px;
}
</style>