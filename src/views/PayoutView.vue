<script setup lang="ts">
import {io} from "socket.io-client";

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
})

socket.emit("register", code);

function randomString(len: number): string {
    return Math.random().toString(36).slice(2, len+2);
}
</script>

<template>
    <h1>Payout</h1>
</template>

<style scoped lang="scss">

</style>