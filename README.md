# SpinBet Registration and Casino Search Test Automation Functionalities

## 1. Description of the Problem and Solution
### Problem
The SpinBet website offers a registration feature and a Casino Lobby with registration and search functionality that allows users to register and find casino games. To ensure a seamless user experience, it is essential to verify that:
- The **registration process** allows users to create accounts with valid information.
- The **search functionality** in the Casino Lobby returns relevant results and handles both valid and invalid inputs gracefully.
Failures in these areas can lead to user dissatisfaction, decreased engagement, and potential loss of users due to a suboptimal user experience.

### Solution
This project uses **Cypress** to automate testing for the **user registration** process and **search functionality** on the SpinBet website. By leveraging Cypress:
- I validated the **end-to-end flow** of user registration, ensuring that users can successfully register with random but valid data.
- I verified the **search functionality** in the Casino Lobby to ensure that users can find games like "spinbet princess" and are informed when no results match their search.

Automating these tests allows for efficient **regression testing**, ensuring that new changes do not break existing functionalities. It also provides quick feedback during development, improving overall **product quality**.

## 2. Reason behind Technical choice
### Cypress for End-to-End Testing
- **Cypress** is a powerful testing framework for **end-to-end (E2E) testing** of web applications. Its intuitive API, built-in test runner, and ability to directly interact with web elements make it ideal for testing dynamic user interactions.
- **Real-time reloading** and **detailed debugging capabilities** provide immediate feedback, which speeds up test development.
- The **headless testing** option is beneficial for continuous integration (CI) environments, ensuring that tests run automatically during deployment.

### Faker.js for Data Generation
- **Faker.js** is used to generate random, realistic test data such as user names, dates,emails, and passwords. This helps in testing with varied data sets, ensuring that the application handles different inputs effectively.
- Random data generation is crucial for testing scenarios like user registration, where using hardcoded values could lead to failures due to duplicates or pre-existing data in the system.
### Continuous Integration with GitHub Actions
- Using **GitHub Actions** for **CI/CD** allows for automatic running of tests upon code commits and pull requests. This ensures that the application is always tested with the latest changes, catching issues early in the development cycle.
- It supports **parallel test execution** and provides seamless integration with the GitHub repository, making it easier to set up and manage workflows directly within the repository.
- **GitHub Actions** can run tests in different environments, ensuring that the tests are consistent and reliable across various browsers and platforms.

### GitHub for Version Control and Collaboration
- The test scripts are hosted on **GitHub**, providing **version control**, easy collaboration, and integration with CI tools.

### Structure of the Project
The project is structured as follows:
- `TC-01-TestRegistrationProcess.cy.js`: Contains the test script for validating the registration process.
- `TC-02-TestSearchCasino.cy.js`: Contains the test script for validating the search functionality in the Casino Lobby.
- `cypress/support`: Includes custom commands, reusable functions and locators
- `cypress/fixtures`: Holds test data if needed for parameterized testing.


## 3. How to Run the Tests

### Prerequisites
- Node.js and npm installed
- Cypress installed locally in the project

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/spinbet-automation.git
   cd project folder

2. **Install dependencies**:
   ```bash
   npm install


3. **Run Tests**:
  npm run test

4.  **GitHub Actions Workflow**:
  To automate the testing process using GitHub Actions, create a workflow file in the repository at .github/workflows/cypress.yml with the following content:
  ```yaml
  name: End-to-end tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      # Install NPM dependencies, cache them correctly
      # and run all Cypress tests
      # https://github.com/cypress-io/github-action
      - name: Cypress run
        uses: cypress-io/github-action@v5
      # after the test run completes
      # store videos and any screenshots
      # NOTE: screenshots will be generated only if E2E test failed
      # thus we store screenshots only on failures
      # Alternative: create and commit an empty cypress/screenshots folder
      # to always have something to upload
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots
      # Test run video was always captured, so this action uses "always()" condition
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: cypress-videos
          path: cypress/videos


   
