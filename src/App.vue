<script setup lang="ts">
import {provide} from "vue";

provide("backendIP", "http://94.16.122.175:8000/");
</script>

<template>
  <RouterView />
</template>
