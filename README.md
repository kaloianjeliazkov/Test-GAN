1. Overview

    &ensp;This repository contains automated end-to-end tests written using Playwright for testing user registration, login, and bonus history functionality on the PlayJack website.

    &ensp;&ensp;The test suite covers:
    
    &ensp;&ensp;Successful user registration 

    &ensp;&ensp;Successful user login 

    &ensp;Bonus history verification after registration

    &ensp;The tests are implemented in JavaScript using the Playwright testing framework.

    &ensp;Playwright            -  End-to-end browser automation /
    &ensp;JavaScript (Node.js)  -  Test scripting /
    &ensp;Chromium Browser      -  Test execution

2. Setup Instructions

    &ensp;Make sure the following are installed:
        &ensp;&ensp;Node.js (v16 or higher) /
        &ensp;&ensp;npm (comes with Node.js) /
       &ensp;&ensp;Git

    &ensp;Installation Steps
        &ensp;&ensp;Clone the repository: git clone https://github.com/kaloianjeliazkov/Test-GAN.git

    &ensp;Install dependencies:
        &ensp;&ensp;npm install / npx playwright install

4. Running the Tests
    &ensp;npx playwright test / npx playwright test --headed / npx playwright test --debug

5. Design patterns used 
    &ensp;The test file extracts repeated user actions into reusable functions such as loginUser()

    &ensp;Playwright lifecycle hooks used in order to manage setup and cleanup. The browser is launched once in beforeAll, closed in afterAll, and a fresh browser context and page &ensp;are created for each test in beforeEach and cleaned up in afterEach
    
    &ensp;This pattern improves reliability by:
        &ensp;&ensp;Isolating test execution, 
        &ensp;&ensp;Making failures easier to debug, 
        &ensp;&ensp;Ensuring every test starts from a clean environment

    &ensp;The tests generate random usernames and email addresses before test execution to avoid collisions with existing accounts. 
    &ensp;Selectors are stored in variables before interaction for better readability and to make them easier to maintain.
