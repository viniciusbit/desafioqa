#language : pt
Funcionalidade: Envio de Email
  @high
  Cenario: Preencher o formulário corretamente e submeter
    Dado que o usuário preenche os campos com {dados-validos}
    Quando o usuário submete o formulário
    Entao o email é enviado
 @high
  Cenario: Preencher o formulário com dados inválidos e submeter
    Dado que o usuário preenche os campos com "dados-invalidos"
    Quando o usuário tenta submeter o formulário
    Entao o sistema informa para o usuário os campo inválidos
  @high
  Cenario: Submeter o formulário sem preencher os campos
    Dado que o usuário não preenche os campos 
    Quando o usuário tenta submeter o formulário
    Então o sistema informa para o usuário os campos inválidos
  @high
  Cenario: Exceder o limite máximo de caracteres em campos específicos
    Dado que o usuário preenche os campos com "excedendo-limite-maximo-de-caracteres"
    Quando o usuário tenta submeter o formulário
    Entao o sistema deve exibir uma mensagem de erro indicando que excedeu o limite de caracteres

  @critical
  Cenario: Preencher o campo "Name" apenas com letras
    Dado que o usuário preenche o campo "name-apenas-com-letras"
    Quando o usuário submeter o formulário
    Então o email é enviado
