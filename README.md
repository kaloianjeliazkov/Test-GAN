1. Overview

    &ensp;&ensp;This repository contains automated end-to-end tests written using Playwright for testing user registration, login, and bonus history functionality on the PlayJack website.

    &ensp;&ensp;&ensp;&ensp;The test suite covers:
    
    &ensp;&ensp;&ensp;&ensp;Successful user registration 

    &ensp;&ensp;&ensp;&ensp;Successful user login 

    &ensp;&ensp;Bonus history verification after registration

    &ensp;&ensp;The tests are implemented in JavaScript using the Playwright testing framework.

    &ensp;&ensp;Playwright            -  End-to-end browser automation / JavaScript (Node.js)  -  Test scripting / Chromium Browser      -  Test execution

2. Setup Instructions

    &ensp;&ensp;Make sure the following are installed:
        &ensp;&ensp;&ensp;Node.js (v16 or higher) / npm (comes with Node.js) / Git

    &ensp;&ensp;Installation Steps
        &ensp;&ensp;&ensp;Clone the repository: git clone https://github.com/kaloianjeliazkov/Test-GAN.git

    &ensp;&ensp;Install dependencies:
        &ensp;&ensp;&ensp;npm install / npx playwright install

4. Running the Tests:
    &ensp;&ensp;npx playwright test / npx playwright test --headed / npx playwright test --debug

5. Design patterns used: The test file extracts repeated user actions into reusable functions such as loginUser()

    &ensp;&ensp;Playwright lifecycle hooks used in order to manage setup and cleanup. The browser is launched once in beforeAll, closed in afterAll, and a fresh browser context and page are created for each test in beforeEach and cleaned up in afterEach
    
    &ensp;&ensp;This pattern improves reliability by: Isolating test execution, Making failures easier to debug, Ensuring every test starts from a clean environment

    &ensp;&ensp;The tests generate random usernames and email addresses before test execution to avoid collisions with existing accounts. 
    &ensp;&ensp;Selectors are stored in variables before interaction for better readability and to make them easier to maintain.
