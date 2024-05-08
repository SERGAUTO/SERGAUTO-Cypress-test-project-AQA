# Wikipedia Automated Tests with Cypress

This repository contains automated test scripts written with Cypress to test various functionalities of the [Wikipedia](https://en.wikipedia.org) website. The objective is to validate critical features, ensure proper behavior, and identify any issues.
TESt
## Table of Contents
- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Test Scenarios](#test-scenarios)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The project is designed to test critical functionalities on Wikipedia, including:
- Search functionality
- Navigation to random articles
- Language switching
- Main page links
- Editing capability (for logged-in users)

The tests cover a variety of user interactions and validations to ensure the expected behavior of the website.

## Setup Instructions
To set up and run the Cypress tests on your local machine, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) and npm installed.
2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
3. Install the dependencies:
   npm install
4. Open Cypress to verify the setup:
   npx cypress open

## Running the Tests
To run the tests in interactive mode, use:
   npx cypress open - This opens the Cypress Test Runner, allowing you to select and run individual tests or test suites.
To run the tests in headless mode, use:
   npx cypress run - This executes the tests without a GUI and generates a detailed test report.

## Test Scenarios

The following test scenarios are included in this project:

1. Search Functionality: Tests the ability to search for articles on Wikipedia.
2. Random Article Navigation: Validates the "Random article" link.
3. Language Switching: Tests the ability to switch languages.
4. Main Page Links: Verifies links like "Featured article," "In the news," and "Did You Know?".
5. Edit Capability: Tests the ability to access the edit page for an article (for logged-in users).

## Test Results and Reporting

The test results and detailed reports can be found in the cypress/reports folder after running the tests in headless mode. The folder may also contain screenshots and videos to help understand the test execution process.

## Contributing

Contributions are welcome! If you would like to contribute, please fork this repository and submit a pull request with your changes. Ensure your code follows best practices for readability and maintainability.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.