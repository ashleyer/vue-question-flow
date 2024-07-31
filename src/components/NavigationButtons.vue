<template>
  <div>
    <button type="button" @click="$emit('previousStep')">Previous</button>
    <button type="button" v-if="showNext" @click="$emit('nextStep')">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    showNext: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
button  {
 margin-top: 100px;
 }
</style>