<script setup lang="ts">
import {inject, ref} from "vue";
import axios from "axios";

const backendIP = inject("backendIP");

interface User {
    id: string,
    name: string,
}

let users = ref([]);

loadUsers();

function loadUsers() {
    axios.get<User[]>(`${backendIP}user/all`).then(userList => {
        users.value = userList.data;
    })
}
</script>

<template>
    <h1 class="w-100 p-3 mb-5 text-center">THIS PAGE IS ONLY FOR ADMINS!!</h1>
    <div class="d-flex flex-column align-items-center gap-3">
        <div v-for="user in users" :key="user.id">{{user.name}}: {{user.id}}</div>
    </div>
</template>

<style scoped lang="scss">

</style>