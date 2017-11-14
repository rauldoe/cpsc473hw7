
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

ember install ember-cli-sass
ember install ember-cli-bootstrap-sassy

mv app/styles/app.css app/styles/app.scss

ember generate route about
ember generate template index
ember g controller index
ember g controller contact


git branch --set-upstream-to=origin/master



//has to delete .git folder in subfolder
git rm --cached library-app

//Setting your branch to exactly match the remote branch can be done in two steps:
git fetch origin
git reset --hard origin/master

//or you can do this
git fetch --all
git reset --hard origin/master


ember install ember-cli-sass && ember install ember-cli-bootstrap-sassy && echo '@import "bootstrap";' > ./app/styles/app.scss && rm ./app/styles/app.css

