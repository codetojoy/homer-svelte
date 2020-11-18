const baseUrl = 'http://localhost:5000/';
 
describe('Sandbox app', () => {
  it('canary', () => {
    // test
    cy.visit(baseUrl);

    cy.contains('Name:');
    cy.contains('URL:');
    cy.contains('Temp');
    cy.contains('Homer');       // upper-case by CSS 
    cy.contains('footer');      // upper-case by CSS 
    cy.contains('Add');
    cy.contains('Clear Temp');
  });

  it('should add temp link', () => {
    cy.visit(baseUrl);

    cy.contains('Name:');
    cy.contains('URL:');
    cy.contains('Add').as('addBtn');

    const nameText = 'Test Link';
    const urlText = 'https://www.cbc.ca';
    cy.get('[data-testid=add-link-name]').as('nameInput').type(nameText);
    cy.get('[data-testid=add-link-url]').as('urlInput').type(urlText);

    // test
    const addBtn = cy.get('@addBtn');
    addBtn.should('not.be.disabled');
    addBtn.click();

    cy.get('[data-testid=add-link-name]').as('nameInput').clear();
    cy.get('[data-testid=add-link-url]').as('urlInput').clear();

    cy.contains(nameText);
  });

  it('should clear temp link', () => {
    cy.visit(baseUrl);

    cy.contains('Name:');
    cy.contains('URL:');
    cy.contains('Add').as('addBtn');
    cy.contains('Clear Temp').as('clearTempBtn');

    const nameText = 'Test Link';
    const urlText = 'https://www.cbc.ca';
    cy.get('[data-testid=add-link-name]').as('nameInput').type(nameText);
    cy.get('[data-testid=add-link-url]').as('urlInput').type(urlText);

    const addBtn = cy.get('@addBtn');
    addBtn.should('not.be.disabled');
    addBtn.click();

    cy.get('[data-testid=add-link-name]').as('nameInput').clear();
    cy.get('[data-testid=add-link-url]').as('urlInput').clear();

    cy.contains(nameText);

    // test
    const clearTempBtn = cy.get('@clearTempBtn');
    clearTempBtn.should('not.be.disabled');
    clearTempBtn.click();

    cy.contains(nameText).should('not.exist');
  });
});
