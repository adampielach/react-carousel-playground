## Running the project

### Important note:

Upon developing the application, it appeared that one of the dependencies had some issues with dismounting, thus forcing me to write a patch for it. Unfortunately, there was a pull request for the package but wasn't merged to the package. As a result here are the steps to reproduce to run the project without issues:

1. Clone repo to your computer
2. Enter the folder and run `npm install`
3. Patch the npm by running `npm run postinstall`
4. You are good to run `npm start`!
