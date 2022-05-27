let inputNome = document.querySelector('#nome');
let descricaoNome = document.querySelector('#descricaoNome');

inputNome.addEventListener('keydown', function(e){

  let arr = [];
  arr.push(e.key);

  arr.forEach((el) => {
    /*
      # Se a letra digitada for igual a um número, vou remover o elemento do array,
      e resetar o valor do input
    */
    if(!isNaN(el)){
      descricaoNome.innerText = "Não utilize número";
      descricaoNome.style.color = "red";

      // # Remover elemento
      arr.pop(el);

      // # Resetar input
      inputNome.value = '';
    }
    else{
      descricaoNome.style.color = "inherit";
      descricaoNome.innerText = "Nome: ";
    }
  })
  console.log(arr);

})


// # Validação input categoria | Mesma lógica
let inputCategoria = document.querySelector('#categoria');
let descricaoCategoria = document.querySelector('#descricaoCategoria');

inputCategoria.addEventListener('keydown', function(e){

  let arr = [];
  arr.push(e.key);

  arr.forEach((el) => {
    if(!isNaN(el)){
      descricaoCategoria.innerText = "Não utilize número";
      descricaoCategoria.style.color = "red";
      arr.pop(el);
      inputCategoria.value = '';
    }
    else{
      descricaoCategoria.style.color = "inherit";
      descricaoCategoria.innerText = "Nome: ";
    }
  })
})