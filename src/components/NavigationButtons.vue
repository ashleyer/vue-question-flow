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
        '/marital-status',         // step 1
        '/partner-information',    // step 2
        '/children-information',   // step 3
        '/primary-residence',      // step 4
        '/other-real-estate',      // step 5
        '/real-estate-value',      // step 6
        '/preview'                 // step 7
      ];
      return routes[this.currentStep + 1];
    },
    previousRoute() {
      // Determine the previous route based on the current step
      const routes = [
        '/',                       // step 0
        '/marital-status',         // step 1
        '/partner-information',    // step 2
        '/children-information',   // step 3
        '/primary-residence',      // step 4
        '/other-real-estate',      // step 5
        '/real-estate-value',      // step 6
        '/preview'                 // step 7
      ];
      return routes[this.currentStep - 1];
    }
  },
  methods: {
    previousStep() {
      this.$emit('previousStep');
      // Navigate to the previous route only if it's different from the current one
      if (this.$route.path !== this.previousRoute) {
        this.$router.push(this.previousRoute);
      }
    },
    nextStep() {
      this.$emit('nextStep');
      // Navigate to the next route only if it's different from the current one
      if (this.$route.path !== this.nextRoute) {
        this.$router.push(this.nextRoute);
      }
    },
    submitForm() {
      this.$emit('submitForm');
      // Navigate to the preview page only if it's different from the current one
      if (this.$route.path !== '/preview') {
        this.$router.push('/preview');
      }
    }
  }
};
</script>