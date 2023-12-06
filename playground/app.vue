<template>
  <div>
    <button @click="showSnap">Show Snap</button>
  </div>
</template>

<script setup>
const showSnap = () => {
  const paymentToken = "123123123" // get this token from backend
  window.snap.pay(paymentToken)
}
</script>
