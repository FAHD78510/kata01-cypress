/// <reference types="cypress" />

describe("Suite de test kata01", function () {
  it("Scenario 1", function () {
    cy.visit(".././projet.html");
    cy.get("[data-cy=reponse]").should("be.visible");
    cy.get("[data-cy=question]").should("be.visible");
  });

  it("Scenario 2", function () {
    cy.visit(".././projet.html");
    cy.get("#Rabat").check();
    cy.get("#xavi").check();
    cy.get("#iniesta").check();
    cy.get("#valider").click();
    cy.get("#choix1").should("be.visible")
    .and("contain.text","La réponse à la première question est correcte")
    cy.get("#choix2").should("be.visible")
    .and("contain.text","La réponse à la deuxième question est correcte")

  });
  it("Scenarion 3", function () {
    cy.visit(".././projet.html");
    cy.get("#Fes").check();
    cy.get("#zidane").check();
    cy.get("#maradona").check();
    cy.get("#valider").click();
    cy.get("#choix1").should("be.visible")
    .and("contain.text","La réponse à la première question est incorrecte")
    cy.get("#choix2").should("be.visible")
    .and("contain.text","La réponse à la deuxième question est incorrecte")

  });
});
