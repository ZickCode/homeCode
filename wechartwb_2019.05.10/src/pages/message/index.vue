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
      text: 'message'
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
