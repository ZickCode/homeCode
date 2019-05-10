<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'user'
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
