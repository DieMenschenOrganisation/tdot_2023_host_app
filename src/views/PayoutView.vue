<script setup lang="ts">
import {io} from "socket.io-client";
import {inject} from "vue";
import axios from "axios";

const backendIP = inject("backendIP");

const code = randomString(10);
console.log(code);

const socket = io("https://localhost:8000/", {
    rejectUnauthorized: false
});
socket.on("error", (error: string) => {
    console.log("Error occurred: " + error);
})
socket.on("requested", (userID: string) => {
    console.log("Requested by: " + userID);
    axios.get(backendIP + "user/points/" + userID).then(points => {
        console.log("User has " + points.data + " points!");
    }).catch(error => {
        console.log("Error: " + error.reason);
    })
})

socket.emit("register", code);

function randomString(len: number): string {
    return Math.random().toString(36).slice(2, len + 2);
}
</script>

<template>
    <h1 class="w-100 p-4 text-center">Willkommen bei der Auszahlungsseite!</h1>
    <h4 class="w-100 text-center">Um fortzufahren bitten einscannen:</h4>
    <img id="qrcode" class="position-absolute start-50 top-50 translate-middle" :src="'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=notify/'+code">
</template>

<style scoped lang="scss">
#qrcode {

}
</style>