describe("Wallet API", () => {
  it("creates, reads, and deletes a ledger note", () => {
    cy.request("POST", "/api/notes", { text: "promo credit" }).then((create) => {
      expect(create.status).to.eq(201);
      const id = create.body.id;

      cy.request("GET", `/api/notes/${id}`).its("body.text").should("eq", "promo credit");
      cy.request("DELETE", `/api/notes/${id}`).its("status").should("eq", 204);
    });
  });
});
