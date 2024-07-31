<template>
    <button @click="submitForm">Submit</button>
  </template>
  
  <script>
  export default {
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:8080/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.$root.formData)
          });
          const data = await response.json();
          alert(`Server Response: ${data.message}`);
        } catch (error) {
          alert('SORRY! This application does not accept submissions yet, so an error occurred while submitting the form');
          console.error('Error:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
 button  {
 margin-top: 100px;
 }
  </style>