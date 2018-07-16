/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
	(function() {
		/* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
		describe('RSS Feeds', function() {
			/* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
			it('are defined', function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});

			// Function to check the url property of an object to ensure it is defined and not empty
			function urlLoop(input, index) {
				it('url is defined and not empty', function() {
					expect(input.url).toBeDefined(true, 'failed at index ' + index);
					expect(input.url.length).not.toBe(0, 'failed at index ' + index);
					// To double check the correct properties are being tested
					console.log(input.url + ' (at index ' + index + ')');
				});
			}
			// Loops through the allFeeds array, calling the urlLoop function for each item
			for (var i = 0; i < allFeeds.length; i++) {
				urlLoop(allFeeds[i], i);
			}

			// Function to check the name property of an object to ensure it is defined and not empty
			function nameLoop(input, index) {
				it('name is defined and not empty', function() {
					expect(input.name).toBeDefined(true, 'failed at index ' + index);
					expect(input.name.length).not.toBe(0, 'failed at index ' + index);
					// To double check the correct properties are being tested
					console.log(input.name + ' (at index ' + index + ')');
				});
			}
			// Loops through the allFeeds array, calling the nameLoop function for each item
			for (var i = 0; i < allFeeds.length; i++) {
				nameLoop(allFeeds[i], i);
			}
		});

		describe('The menu', function() {
			// Menu visibility is determined via the .menu-hidden class on the body
			var body = document.querySelector('body'),
				menuIcon = document.querySelector('.menu-icon-link');

			// This tests to see if .menu-hidden is present on load
			it('is hidden by default', function() {
				expect(body.classList.toString()).toBe('menu-hidden');
			});

			// Checks if the Menu appears when clicked
			it('is visible when clicked', function() {
				// Invokes the click event
				menuIcon.click();
				// Checks that .menu-hidden has been removed (classList should be empty)
				expect(body.classList.toString()).toBe('');
				// Prints the classList to show it is empty
				console.log(body.classList.toString());
			});

			// Checks if the Menu is hidden when clicked again
			it('is hidden when clicked', function() {
				// Invokes the click event
				menuIcon.click();
				// Checks that .menu-hidden has been re-added
				expect(body.classList.toString()).toBe('menu-hidden');
				// Prints the classList to show .menu-hidden is present
				console.log(body.classList.toString());
			});
		});

		// 'Initial Entries' test suite
		describe('Initial Entries', function() {
			// Before the test loadFeed() is called with the asynchronous done() callback
			beforeEach(function(done) {
				loadFeed(0, done);
			});
			// Once the feed has loaded checks the .feed container to ensure it contains
			// 'greater than 0' (1 or more) entry fields
			it('has at least 1 entry in the .feed container', function() {
				var feedEntries = document.querySelectorAll('.feed .entry');

				expect(feedEntries.length).toBeGreaterThan(0);
			});
		});

		describe('New Feed Selection', function() {
			var firstFeed, secondFeed;

			// Before test(s) loads two different feeds saves the first into firstFeed
			beforeEach(function(done) {
				// loadFeed with the second feed (index of 1)
				loadFeed(1, function() {
					firstFeed = document.querySelector('.feed').textContent;
					// loadFeed with the third feed (index of 2)
					loadFeed(2, function() {
						done();
					});
				});
			});

			// Returns the feed to default parameters (index of 0) after test(s)
			afterEach(function() {
				loadFeed(0);
			});
			// Saves the second feed to secondFeed and compares the textContent for differences
			it('tests to see if content changes', function() {
				// Saves second feed
				secondFeed = document.querySelector('.feed').textContent;
				// Expect firstFeed to be different to secondFeed
				expect(firstFeed).not.toEqual(secondFeed);
				// Should print true to console
				console.log(firstFeed !== secondFeed);
			});
		});
	})()
);
