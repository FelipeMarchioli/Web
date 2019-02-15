//botão limpar
$('input.limpar').on('click', function() {

  
  $('div.form-group').find('input').val('');

});
//função que carrega ao iniciar a página
$(document).ready (function() {
  $('#cep').blur (function() {
    //variável recebendo cep caso ele não seja vazio
    var cep = $('#cep').val() || ''
    //caso não exista o cep não retorna nada
    if(!cep) {
      return
    }
    var url = 'https://viacep.com.br/ws/' + cep + '/json'
    //carregando dados no formato JSON
    $.getJSON(url, function(data) {
      if("error" in data) {
        return
      }
      //enviando os dados para carregar ao usuario
      $('#logradouro').val(data.logradouro)
      $('#bairro').val(data.bairro)
      $('#localidade').val(data.localidade)
      $('#uf').val(data.uf)
    })
  })  
})
