<template>
  <div>
    <h2>Partner Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="partnerFullName">What is your partner's full legal name?</label>
        <input type="text" v-model="$root.formData.partnerFullName" required />
      </div>
      <div>
        <label for="partnerBirthYear">What is your partner's birth year?</label>
        <input type="text" v-model="$root.formData.partnerBirthYear" required />
      </div>
      <NavigationButtons :currentStep="2" @nextStep="nextPage" @previousStep="previousPage" />
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
      this.$router.push('/children-information').catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    },
    previousPage() {
      this.$router.push('/marital-status').catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  }
};
</script>