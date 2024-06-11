# Projeto: Lista de Compras com Next.js, TypeScript e Lucide Icons

## Descrição

Este projeto é uma aplicação web desenvolvida para gerenciar uma lista de compras. Foi construído utilizando Next.js, TypeScript e a biblioteca Lucide para ícones. A aplicação permite adicionar e remover itens da lista de compras de forma intuitiva e visualmente agradável.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Lucide Icons**: Biblioteca de ícones para React.


### Componentes

- **AddItemForm**: Formulário para adicionar novos itens à lista.
- **ItemList**: Componente que renderiza a lista de itens.
- **Item**: Componente que representa cada item individual na lista, incluindo a funcionalidade para remover itens.

### Páginas

- **index.tsx**: Página principal onde a lógica de adicionar e remover itens é gerenciada.

### Estilos

- **globals.css**: Estilos globais para a aplicação.

## Funcionalidades

### 1. Adicionar Itens

O componente `Form` permite que o usuário adicione novos itens à lista de compras. Ele utiliza um ícone de adição da biblioteca Lucide.

### 2. Remover Itens

Cada item na lista de compras é renderizado pelo componente `Item`, que inclui um botão de remoção com o ícone `Trash2` da biblioteca Lucide. Ao clicar no botão, o item é removido da lista.

### 3. Listar Itens

O componente `ItemList` é responsável por renderizar a lista de itens. Ele recebe a lista de itens como props e utiliza o componente `Card` para exibir cada item.

## Exemplos de Uso

### Adicionando um Item

O usuário pode adicionar um item preenchendo o campo de texto, preencher quantidade e escolher a categoria, em seguida clicando no botão de adição.

### Removendo um Item

O usuário pode remover um item clicando no ícone de lixeira ao lado do item na lista.

## Como Executar o Projeto

Para rodar a aplicação localmente, siga os passos abaixo:

 **Instalar Dependências**

   Execute o comando abaixo na raiz do projeto para instalar todas as dependências necessárias:

```bash
    npm install
```

 **Executar Projeto**

    Execute o comando abaixo na raiz do projeto para iniciar o projeto na [httpslocalhost:3000](http://localhost:3000/)

    ```bash
    npm run dev
    ```

## Conclusão

Este projeto demonstra como criar uma aplicação simples e funcional de lista de compras utilizando Next.js, TypeScript e Lucide Icons. Ele pode ser expandido e personalizado conforme necessário para atender a diferentes necessidades.
