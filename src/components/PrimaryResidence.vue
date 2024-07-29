<template>
  <div>
    <h2>Primary Residence</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="ownPrimaryResidence">Do you or your partner (if not single) own your primary residence?</label>
        <select v-model="$root.formData.ownPrimaryResidence" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <NavigationButtons :currentStep="3" @nextStep="nextPage" @previousStep="previousPage" />
    </form>
  </div>
</template>

<script>
import NavigationButtons from './NavigationButtons.vue';

export default {
  components: {
    NavigationButtons
  },
  methods: {
    nextPage() {
      let nextRoute = '/other-real-estate';
      if (this.$root.formData.ownPrimaryResidence === 'yes') {
        nextRoute = '/real-estate-value';
      }

      if (this.$route.path !== nextRoute) {
        this.$router.push(nextRoute).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    },
    previousPage() {
      let previousRoute = '/';
      if (this.$root.formData.children === 'yes') {
        previousRoute = '/children-information';
      } else if (this.$root.formData.maritalStatus === 'Married' || this.$root.formData.maritalStatus === 'Domestic Partner') {
        previousRoute = '/partner-information';
      }

      if (this.$route.path !== previousRoute) {
        this.$router.push(previousRoute).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    }
  }
};
</script>