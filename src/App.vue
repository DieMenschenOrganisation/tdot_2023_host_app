<script setup lang="ts">
import {provide} from "vue";

provide("backendIP", "https://localhost:8000/");
</script>

<template>
  <RouterView />
</template>
