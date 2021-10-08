describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("https://api.github.com/search/users?q=*", {
      fixture: "searchUserFixture.json",
    });
  });

  it("is expected to contain a titel", () => {
    cy.get("section[name='title']").should("contain", "GitHub Search engine");
  });

  it("is expected to contain a button search", () => {
    cy.get("[data-cy=search-button]").should("contain", "Search");
  });

  it("is expected to contain an input field", () => {
    cy.get("[data-cy=input]").should("be.visible");
  });

  describe("User search for an user and display output", () => {
    it("is expected to search for a user", () => {
      cy.get("[data-cy=input]").type("barack");
      cy.get("[data-cy=search-button").click();
    });
    it("is expected to display output after searching", () => {
      cy.get("[data-cy=search-results").should("have.length", 1);
    });
  });
});
