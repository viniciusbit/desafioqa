## Estrutura do projeto:

### Testes funcionais:
- No diretório "cypress/e2e/formSendEmail.feature" possuem os casos de testes (priorizados conforme documento do plano de teste) escritos em BDD/Gherkin
- No diretório "cypress/e2e/formSendEmail/steps" possuem os steps criados pelo cucumber para rodar os testes

### Testes de API:
- No diretório "cypress/e2e/Api/formSendEmail.spec.js" possuem os testes de API

### Commands:
- Arquivo cypress\support\commands.js possui a função "preencherCampos", que recebe por parâmetro os campos para preenchiento do formulário. Esses dados estão no arquivo "cypress/fixtures/dados.json". Dependendo do tipo de dado enviado para a função, a mesma faz a leitura do arquivo para utilizar os dados.

### Plugins:

- Foram utilizados os plugins Cucumber Preprocessor, para realizar a criação e leitura dos casos de testes em Gherkin, e Cypress Grep, para utilizar as tags de priorização auxiliando na estratégia de execução dos testes em pipelines