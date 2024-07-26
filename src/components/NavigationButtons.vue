<template>
  <div>
    <button v-if="currentStep > 0" @click="previousStep">Previous</button>
    <button v-if="currentStep < totalSteps - 1" @click="nextStep">Next</button>
    <button v-if="currentStep === totalSteps - 1" @click="submitForm">Submit</button>
  </div>
</template>

<script>
export default {
  props: ['currentStep'],
  computed: {
    totalSteps() {
      return 7; // Adjust this value based on your total number of steps
    },
    nextRoute() {
      // Determine the next route based on the current step
      const routes = [
        '/', // step 0
        '/partner-information', // step 1
        '/children-information', // step 2
        '/primary-residence', // step 3
        '/other-real-estate', // step 4
        '/real-estate-value', // step 5
        '/preview' // step 6
      ];
      return routes[this.currentStep + 1];
    },
    previousRoute() {
      // Determine the previous route based on the current step
      const routes = [
        '/', // step 0
        '/partner-information', // step 1
        '/children-information', // step 2
        '/primary-residence', // step 3
        '/other-real-estate', // step 4
        '/real-estate-value', // step 5
        '/preview' // step 6
      ];
      return routes[this.currentStep - 1];
    }
  },
  methods: {
    previousStep() {
      this.$emit('previousStep');
      if (this.$route.path !== this.previousRoute) {
        this.$router.push(this.previousRoute);
      }
    },
    nextStep() {
      this.$emit('nextStep');
      if (this.$route.path !== this.nextRoute) {
        this.$router.push(this.nextRoute);
      }
    },
    submitForm() {
      this.$emit('submitForm');
      if (this.$route.path !== '/preview') {
        this.$router.push('/preview');
      }
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>