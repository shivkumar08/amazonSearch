# ubs-exercise
In here you can find all the information that allows a user run the these tests.

##Instalation
- Make sure that you have node installed 
- Make sure you have npm initialiased 'npm init -y'
- Make sure you have installed cypress'npm i cypress'
- If first time using cypress always good to read through the documentation here : https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn

## Run the tests
- Use 'npm run cypress:e2e' to run all tests in the e2e folder that are tagged with '@e2e-test' these are tests that are passing
- Use 'npm run cypress:wip' to run all tests in the e2e folder that are tagged with '@wip' these are tests that are not passing as they are still work in progress.
- User 'npm cypress:open' to run on the browser (provided by cypress)

### Things to note about the test
- Created a framework using page objects to allow easy maintenance
- There are 3 mains areas in this framework, The Pages whwre we add all the elements to interact with for a particular page. The step definitions and the feature files.
- Added feature files using cucumber plug in to allow us easily see reports with failures, skipped tests and pass.


### From the user jorneys given for the exercise, this is what I have achieved:

#### Implemented and passing:


#### Implemented but not able to run all due to tests not finding the elements:


#### Not implemented:


#### Extra features



