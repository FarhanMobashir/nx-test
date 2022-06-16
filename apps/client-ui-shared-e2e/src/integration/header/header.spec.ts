describe('client-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&args=title:nnn'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'nnn');
  });
});
