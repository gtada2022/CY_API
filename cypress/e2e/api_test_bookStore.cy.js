
describe('Teste de Api Livraria ', () => {

  it('Criando um usuário ', () => {
    var faker = require('faker-br');
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',

      body: {
        userName: faker.random.words(1),
        password: 'Abc09@2345678'

      },
    }).then(res => {
      
      expect(res.status).to.equal(201)
      expect(res.body).to.have.property('userID')
      expect(res.body).to.have.property('username')
      expect(res.body).to.have.property('books')
  
    })

  })
  it('Gerando um Token', () => {
    var faker = require('faker-br');
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/GenerateToken',

      body: {
        userName: faker.random.words(1),
        password: 'Abc09@2345678'
        

      },
    }).then(res => {
      expect(res.status).to.equal(200)
      expect(res.body).to.have.property('token')
      expect(res.body).to.have.property('expires')
      expect(res.body).to.have.property('status')
      expect(res.body).to.have.property('result')
      
  
    })

  })

  it('Gerar confirmar se o usuário criado está autorizado', () => {
    
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',

      body: {
        userName: 'User1saeees111',
        password: 'A1234bc@'
        

      },
    }).then(res => {
      expect(res.status).to.equal(200)
      expect(res.statusText).to.equal('OK')
      

    })

  })

 
  
  it('Listar os livros disponíves', () => {
    cy.request({
      method: 'GET',
      url: 'https://demoqa.com/BookStore/v1/Books',
    }).then(res => {
      expect(res.body).is.not.empty
      expect(res.status).to.equal(200)
      expect(res.body.books[0]).to.have.property('isbn','9781449325862')
      expect(res.body.books[0]).to.have.property('title','Git Pocket Guide')
      expect(res.body.books[0]).to.have.property('subTitle','A Working Introduction')
      expect(res.body.books[0]).to.have.property('author','Richard E. Silverman')
      expect(res.body.books[0]).to.have.property('publish_date','2020-06-04T08:48:39.000Z')
      expect(res.body.books[0]).to.have.property('publisher',"O'Reilly Media")
      expect(res.body.books[0]).to.have.property('pages',234)
      expect(res.body.books[0]).to.have.property('description','This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp')
      expect(res.body.books[0]).to.have.property('website','http://chimera.labs.oreilly.com/books/1230000000561/index.html')
    })
  })

  it('Alugar dois livros de livre escolha', () => {
  
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      

      body:{
        "userId": "a6d14205-4010-4cba-981b-86c8a53c633d",
        "collectionOfIsbns":[
          {
            "isbn":"9781593275846",
            "isbn":"9781449325862"

            
            
          }
            
        ]
      }

    }).then(res => {
      expect(res.status).to.equal(201)
      
      
    })

  })

  it('Listar os detalhes do usuário com os livros escolhidos', () => {
  
    cy.request({
      method: 'GET',
      url: 'https://demoqa.com/Account/v1/User/a6d14205-4010-4cba-981b-86c8a53c633d'
      

    }).then(res => {
      expect(res.status).to.equal(200)
      
      
    })

  })





})
