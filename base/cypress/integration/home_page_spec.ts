describe('Home Page testing', () => {
    it('Visits application home page', () => {
        cy.visit('/');
        cy.get('#root').contains('Home Page');
    });
});
