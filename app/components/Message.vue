<script setup lang="ts">
defineProps({
  command: String,
  result: String,
});
</script>

<template>
  <div class="message">
    <div v-if="command" class="command">
      <p><BootstrapIcon name="caret-right-fill"></BootstrapIcon>{{ command }}</p>
    </div>
    <p>{{ result }}</p>
  </div>
</template>

<style scoped>
p {
  color: #00ff01;
  margin: 0;
}
i {
  color: #00ff01;
  font-size: 1rem;
}
.message {
  margin: 10px;
}
.command {
  display: flex;
}
</style>
