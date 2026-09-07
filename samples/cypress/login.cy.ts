describe("Login", () => {
  it("lands on the dashboard when credentials are valid", () => {
    cy.intercept("POST", "/api/login", {
      statusCode: 200,
      body: { token: "test-token", role: "player" },
    }).as("login");

    cy.visit("/login");
    cy.get('[data-testid="email"]').type("qa.player@example.com");
    cy.get('[data-testid="password"]').type("CorrectHorseBattery");
    cy.get('[data-testid="submit"]').click();

    cy.wait("@login").its("request.body").should("include", {
      email: "qa.player@example.com",
    });
    cy.location("pathname").should("eq", "/dashboard");
    cy.contains("h1", "Dashboard").should("be.visible");
  });
});
