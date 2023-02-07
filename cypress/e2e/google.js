const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit google.com", () => {
  cy.visit("https://google.com/");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );

  assert.deepEqual({}, {});
});