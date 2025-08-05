class RegistroForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    ImageUrlInput: () => cy.get('#imageUrl'),
    ImageUrlInputFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

clickSubmit(){
  this.elements.submitBtn().click()
}

  typeTitle(text){
    if(!text) return;
    this.elements.titleInput().type(text)
  }

    typeUrl(url){
    if(!url) return;
    this.elements.ImageUrlInput().type(url)
  }
}

const registroForm = new RegistroForm();

describe('registro de imagem', () => {
 describe ('Enviar uma imagem com entradas invalidas', () => {
const imagem = {
  titulo: '',
  url: ''
}

it('Estou na pagina de cadastro de imagens', () => {
  cy.visit('/')
})
it('quando eu digito "${imagem.titulo} no campo do titulo"', () => {
  registroForm.typeTitle(imagem.titulo)
})
it('quando eu digito "${imagem.url} no campo do URL', () => {
  registroForm.typeUrl(imagem.url)
})
it('Eu Clico no botao no envio', () => {
  registroForm.clickSubmit()
})

it('e eu devo ser a mensagem "please type a tittle for the image" acima do campo de titulo', () => {
  registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
})


it('e eu devo ver a mensagem "please trype a valid URL" acima do campo de URL da imagem', () => {
    registroForm.elements.ImageUrlInputFeedback().should("contains.text", "Please type a valid URL")
})
 })

 describe ('Enviar uma imagem com entradas invalidas', () => {
const imagem = {
  titulo: 'ponyo',
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQ1bNLKFX3ZmNMTJW9caxXXnxoVAahMSTPQ&s'}

it('Estou na pagina de cadastro de imagens', () => {
  cy.visit('/')
})
it('quando eu digito "${imagem.titulo} no campo do titulo"', () => {
  registroForm.typeTitle(imagem.titulo)
})
it('quando eu digito "${imagem.url} no campo do URL', () => {
  registroForm.typeUrl(imagem.url)
})
it('Eu Clico no botao no envio', () => {
  registroForm.clickSubmit()
})

it('e eu devo ser a mensagem "please type a tittle for the image" acima do campo de titulo', () => {
  registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
})


it('e eu devo ver a mensagem "please type a valid URL" acima do campo de URL da imagem', () => {
    registroForm.elements.ImageUrlInputFeedback().should("contains.text", "Please type a valid URL")
})
 })
})