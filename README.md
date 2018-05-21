# hcm-ui-api
[![Build Status](https://travis.ibm.com/IBMPrivateCloud/hcm-ui-api.svg?token=FQtRyxd2oucrshZSEEqZ&branch=master)](https://travis.ibm.com/IBMPrivateCloud/hcm-ui-api)

## Running
1. The folloing environment variables need to be set.
```
hcmUrl
mongodbUrl
PLATFORM_IDENTITY_PROVIDER_URL
ARTIFACTORY_PWD - You can get this value from: https://ibm.ent.box.com/notes/287638278960
```
2. Start the dev server
```
npm i
npm start
```
3. Start the production server
```
npm i
npm run build
npm run start:production
```
