1. Overview

    This repository contains automated end-to-end tests written using Playwright for testing user registration, login, and bonus history functionality on the PlayJack website.

    The test suite covers:
    
    Successful user registration /
    Successful user login /
    Bonus history verification after registration
    
    The tests are implemented in JavaScript using the Playwright testing framework.

    Playwright            -  End-to-end browser automation /
    JavaScript (Node.js)  -  Test scripting /
    Chromium Browser      -  Test execution

2. Setup Instructions

    Make sure the following are installed:
        Node.js (v16 or higher) /
        npm (comes with Node.js) /
        Git

    Installation Steps
        Clone the repository: git clone https://github.com/kaloianjeliazkov/Test-GAN.git

    Install dependencies:
        npm install / npx playwright install

4. Running the Tests
    npx playwright test / npx playwright test --headed / npx playwright test --debug

5. Design patterns used 
    The test file extracts repeated user actions into reusable functions such as loginUser()

    Playwright lifecycle hooks used in order to manage setup and cleanup. The browser is launched once in beforeAll, closed in afterAll, and a fresh browser context and page are created for each test in beforeEach and cleaned up in afterEach
    
    This pattern improves reliability by:
        Isolating test execution, 
        Making failures easier to debug, 
        Ensuring every test starts from a clean environment

    The tests generate random usernames and email addresses before test execution to avoid collisions with existing accounts. 
    Selectors are stored in variables before interaction for better readability and to make them easier to maintain.
