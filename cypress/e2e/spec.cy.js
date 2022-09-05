describe('API test automated', () => {

  it('Search api', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users',
    }).then(res => {
      console.log(res)
    })
  })

  it('verify the request returns the correct status code users', () => {
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

  it('Add a new item', () => {
    cy.request({
      method: 'POST',
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users',

      body: {
        id: 11,
        userName: 'User 11',
        password: 'Password11'

      },
    }).then(res => {
      console.log(res)
      expect(res.status).to.equal(200)
      expect(res.body).to.have.property('id', 11)
      expect(res.body).to.have.property('userName', 'User 11')
      expect(res.body).to.have.property('password', 'Password11')
    })

  })

  it('Update a  item', () => {
    cy.request({
      method: 'PUT',
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users/11',

      body: {
        id: 11,
        userName: 'User 11',
        password: 'Password12'

      },
    }).then(res => {
      console.log(res)
      expect(res.status).to.equal(200)
      expect(res.body).to.have.property('id', 11)
      expect(res.body).to.have.property('userName', 'User 11')
      expect(res.body).to.have.property('password', 'Password12')
    })
  })
  it('Delete Item ', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users/11',

    }).then(res => {
      console.log(res)
      expect(res.status).to.equal(200)
      expect(res.body).to.not.have.property('id', 11)
      expect(res.body).to.not.have.property('password', 'Password12')
    })
  })



})
