# Aplicativo de Clima das Cidades

O aplicativo consiste em exibir os dados climáticos de cidades desejadas, podendo exibir uma lista com as suas cidades adicionadas e com detalhes dos próximos 7 dias.

## Executar o aplicativo

Para começar, após clonar o repositório em sua máquina, deve baixar a pasta `node_modules` na raiz do projeto:

```sh
yarn install
```
ou
```sh
yarn
```

### Android

Para executar o projeto, com um emulador já configurado com o Android Studio ou com seu dispositivo físico conectado em sua máquina preparado para executar, realizar o seguinte comando:

```sh
yarn android
```

### iOS

Para o iOS, será necessário executar pelo XCode, pela CLI do react-native apresentou problemas para executar, com bastante pesquisa ainda não foi possível identificar para corrigir, então segue o passo a passo para executar pelo XCode:

Primeiro deve-se acessar a pasta `ios` do projeto e instalar os Pods:

```sh
yarn pod-install
```
ou
```sh
cd ios && pod install & cd ..
```

Finalizado a instalação dos Pods, agora é so abrir o arquivo workspace do iOS no XCode. Então ao abrir o XCode em sua máquina, selecionar o arquivo no seguinte caminho:
```
openWeatherApp/ios/openWeatherApp.xcworkspace
```

Após o projeto ser indexado e totalmente carregado dentro do XCode, aperte o botão `Run` para iniciar a aplicação no emulador do iOS.


## API's

Foram utilizadas duas API's para contribuir na construção do aplicativo:

#### OpenWeather API
Fornece os dados climáticos das localidade desajas, no aplicativo foi utilizado dados de distância para pesquisar a cidade.
[https://openweathermap.org/api](https://openweathermap.org/api)

#### GeoDB Cities
Fornece a pesquisa de cidades do mundo inteiro, utilizando a busca pelo nome da cidade para adicionar no local storage do dispositivo.
[https://geodb-cities-api.wirefreethought.com/docs/api/](https://geodb-cities-api.wirefreethought.com/docs/api/)

## Persistência de dados
A persistência de dados escolhida, procurando uma biblioteca que não ocupasse tanto espaço, e também não teve a necessidade de uma grande persistência desses dados, foi utilizada a biblioteca da comunidade react-native Async Storage. Ela possui o mesmo funcionamento que a LocalStorage de um navegador.

[https://react-native-async-storage.github.io/async-storage/docs/usage/](https://react-native-async-storage.github.io/async-storage/docs/usage/)

## Tecnologias
Utilizados a seguintes bibliotecas principais para construção do aplicativo:
- react: 17.0.2
- react-native: 0.66.4

## Bibliotecas externas
Segue a lista de bibliotecas externas utilizadas na construção desta aplicação:

- @react-native-async-storage/async-storage: 1.15.17
- @react-navigation/native: 6.0.6
- @react-navigation/native-stack: 6.2.5
- axios: 0.25.0
- date-fns: 2.28.0
- jsc-android: 250230.2.1
- react-native-config: 1.4.5
- react-native-safe-area-context: 3.3.2
- react-native-screens: 3.10.2
- react-native-vector-icons: 9.0.0
- react-query: 3.34.12
- styled-components: 5.3.3
- styled-system: 5.1.5
- use-debounce: 7.0.1

## Funcionalidades do Aplicativo
#### Tela de Busca
- Buscar cidades que deseja visualizar dados climáticos 
  - Utiliza um debounce para assim que terminar de digitar, faz a busca na API 
  - Validação para adicionar apenas uma vez

#### Tela inicial do APP
- Listagem das cidades adicionadas ao Local Storage
  - Visualização da temperatura atual, da máxima e da mínima
  - Permite favoritar a cidade para subir no topo da lista
  - Clicar no card para abrir os detalhes

#### Tela de Detalhes
- Detalhes da cidade
  - Exibe as previsões para os próximos 7 dias
  - Permite o usuário excluir a cidade da lista do local storage

