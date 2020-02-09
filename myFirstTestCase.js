describe("My first test suite", function(){
	it("Launch app and verify title", function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://www.google.com"); //this will load the url
		expect(browser.getTitle()).toEqual("GoogleT"); //valiadation part
	});
});
