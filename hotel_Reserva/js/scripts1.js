class Validator {

    constructor() {
      this.validations = [
        
      ]
    }
  
    // inicia a validação de todos os campos
    validate(form) {
  
      // pegar todos inputs
      let inputs = form.getElementsByTagName('input');

      console.log(inputs);
    
      // transformar HTMLCollection em arr
      let inputsArray = [...inputs];

      console.log(inputsArray);
    }
} 
  
  let form = document.getElementById('register-form');
  let submit = document.getElementById('btn-submit');
  
  let validator = new Validator();
  
  // evento de envio do form, que valida os inputs
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);
  });
