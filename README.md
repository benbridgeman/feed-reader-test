# Feed Reader Test - Udacity project

## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## To open the app

Download or clone the repository [here](https://github.com/benbridgeman/feed-reader-test) and open index.html with your browser.

## Tests implemented
All tests written against app.js are contained within /jasmine/spec/feedreader.js.

#### RSS Feeds tests

* Tests to make sure that the allFeeds variable has been defined and is not empty.
* Loops through the allFeeds array to make sure the url property is defined and not empty.
* Loops through the allFeeds array to make sure the name property is defined and not empty.

#### Menu functionality tests

* Tests to determine if the menu is hidden on load.
* Tests to see if the menu appears when clicked.
* Tests to see if the menu is hidden when clicked a second time.

#### Initial Entries tests

* Tests to see if the feed contains at least one entry

#### New Feed Selection tests

* Tests to check that feed content changes when another feed is created using a different index
