# Technical assignment

- [x] Create mobile application that allows to browse GitHub issues.

## Functional requirements

- [x] User should be able to provide GitHub organization and repository and fetch issues from it
- [x] Pagination is used to navigate between pages
- [x] User should be able to sort issues

## Technical requirements

- [x] App is based on React Native
- [ ] State and view of the app are separated
- [x] Static types are used to ensure soundness of the app
- [ ] Code of the app adheres to the best industry practices
- [ ] App is well tested
- [ ] Minimum required documentation is provided
- [x] Source code is presented on GitHub

## Assembly Android

1. react-native bundle --platform android --dev false --entry-file index.ts --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res (npm run compile)
2. cd android
3. ./gradlew assembleDebug