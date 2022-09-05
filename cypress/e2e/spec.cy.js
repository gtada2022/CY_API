describe('API test automated', () => {

  it('Add a new pet to the store', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users',
    }).then(res => {
      console.log(res)
    })
  })

  it('verify the request returns the correct status code', () => {
    cy.request('https://fakerestapi.azurewebsites.net/api/v1/Users').its('status').should('be.equal', 200)
  })

  it('verify the request returns 10 items', () => {
    cy.request('https://fakerestapi.azurewebsites.net/api/v1/Users').its('body').should('have.length', 10)
  })

  it('Verify the  item exists ', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users',
    }).then(res => {
      expect(res.body).is.not.empty
      expect(res.status).to.equal(200)
      expect(res.body[0]).to.have.property('id', 1)
      expect(res.body[0]).to.have.property('userName', 'User 1')
      expect(res.body[0]).to.have.property('password', 'Password1')
    })
  })



})
