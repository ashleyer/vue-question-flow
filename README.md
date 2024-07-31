# Dynamic Question Flow System in Vue.js

## Overview

This project is a dynamic question flow system designed to collect user information efficiently. The system presents questions based on the user's previous answers, ensuring that only relevant questions are displayed. The focus is on gathering personal, partner, children, and real estate information in a structured manner. *(done as an employment proposal to LYKAS)

## Deployed Application

[Dynamic Question Flow in Vue](https://vue-question-flow.vercel.app/#/).

## Features

- **User Authentication**: Secure login system (simulated in development).
- **Dynamic Question Flow**: Questions adjust based on user responses.
- **Conditional Rendering**: Specific questions appear only when relevant.
- **Responsive UI**: User-friendly and mobile-compatible interface.
- **Data Persistence**: Answers are saved in local storage for continuity.

## Technologies Used

- **Vue.js**: For building the dynamic front-end.
- **Vue Router**: For handling multi-page navigation.
- **HTML & JavaScript**: Basic web technologies.

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- Basic knowledge of Vue.js and JavaScript.

## Installation

1. **Clone the Repository**
   `git clone https://github.com/ashleyer/vue-question-flow.git`
   `cd vue-question-flow`
2. **Install Dependencies**
    `npm install --legacy-peer-deps`

## Running the Application

1. **Run Development server locally**
    `npm run serve`

## Using the Application

1. **Login/Register**
   - Navigate to `Register` to create a new account
   - Navigate to `Login` to log in with your credentials.
2. **Complete the Questionnaire**
   - Start the questionnaire from the root path `/`.
   - Fill out your personal information.
   - Navigate through the pages using the `Next` and `Previous` buttons.
   - Review your answers on the `Preview` page and submit the form.

## Contributing to the repo

- Fork the repository.
- Create a new branch for your feature: `git checkout -b feature-name`.
- Commit your changes: `git commit -m 'Add some feature'`.
- Push to the branch: `git push origin feature-name`.
- Submit a pull request.

## Testing

(To come)

## Project Structure

(this may change during development)
`
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ChildrenInformation.vue
│   │   ├── NavigationButtons.vue
│   │   ├── OtherRealEstate.vue
│   │   ├── PartnerInformation.vue
│   │   ├── PersonalInformation.vue
│   │   ├── PrimaryResidence.vue
│   │   ├── PreviewPage.vue
│   │   ├── RealEstateValue.vue
│   ├── views/
│   │   ├── Login.vue
│   │   ├── Register.vue
│   ├── App.vue
│   ├── main.js
├── tests/
│   ├── unit/
│   │   ├── PersonalInformation.spec.js
├── cypress/
│   ├── integration/
│   │   ├── personal_information_spec.js
│   ├── plugins/
│   │   ├── index.js
│   ├── support/
│   │   ├── commands.js
│   │   ├── index.js
├── .gitignore
├── babel.config.js
├── cypress.json
├── jest.config.js
├── package.json
├── README.md
`

## Acknowledgements

Special thanks to the LYKAS team for the opportunity to learn `Vue` and create this project.

## Contact

For any questions, bugs, or support, please contact Ashley at [ashleye.romano@gmail.com](mailto:ashleye.romano@gmail.com).
