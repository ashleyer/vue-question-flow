<template>
  <div>
    <h2>Preview</h2>
    <p><strong>Full Legal Name:</strong> {{ $root.formData.fullName }}</p>
    <p><strong>Birth Year:</strong> {{ $root.formData.birthYear }}</p>
    <p><strong>Marital Status:</strong> {{ $root.formData.maritalStatus }}</p>
    
    <p v-if="$root.formData.maritalStatus === 'Married' || $root.formData.maritalStatus === 'Domestic Partner'">
      <strong>Partner's Full Legal Name:</strong> {{ $root.formData.partnerFullName }}
    </p>
    <p v-if="$root.formData.maritalStatus === 'Married' || $root.formData.maritalStatus === 'Domestic Partner'">
      <strong>Partner's Birth Year:</strong> {{ $root.formData.partnerBirthYear }}
    </p>
    
    <p><strong>Do you have children:</strong> {{ $root.formData.children }}</p>
    <p v-if="$root.formData.children === 'yes'">
      <strong>Number of Children:</strong> {{ $root.formData.childrenCount }}
    </p>
    <p><strong>Do you own your primary residence:</strong> {{ $root.formData.ownPrimaryResidence }}</p>
    <p><strong>Approximate value of real estate:</strong> {{ $root.formData.realEstateValue }}</p>
    <p><strong>Do you own any other real estate:</strong> {{ $root.formData.ownOtherRealEstate }}</p>
    
    <NavigationButtons :currentStep="7" :showNext="false" @previousStep="previousPage" />
    <Submit />
  </div>
</template>

<script>
import Submit from './Submit.vue';
import NavigationButtons from './NavigationButtons.vue';

export default {
  components: {
    Submit,
    NavigationButtons
  },
  methods: {
    nextPage() {
      // logic for next page if needed
    },
    previousPage() {
      this.$router.push('/other-real-estate');
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>