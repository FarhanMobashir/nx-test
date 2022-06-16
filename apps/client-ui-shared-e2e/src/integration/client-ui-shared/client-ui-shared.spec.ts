describe('client-ui-shared: ClientUiShared component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=clientuishared--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ClientUiShared!');
    });
});
