
chrome://extensions
npm install -g ember-cli@2.16
npm install -g bower
ember new ember-quickstart
cd ember-quickstart
ember serve

ember generate route scientists
ember generate component people-list
ember build --env production

ember new library-app
ember generate template application
