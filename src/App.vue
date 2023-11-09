<script setup lang="ts">
import {provide} from "vue";

provide("backendIP", "https://backend.casino.schuelerprojekte.online/");
</script>

<template>
  <RouterView />
</template>
