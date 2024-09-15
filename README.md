## Para usar a extensão AIVA, siga abaixo o tutorial

#### Execute o comando abaixo

```
npm run build
```

Será gerado uma pasta chamada "build" na raíz do projeto, mas por problemas do CRA (create react app), os arquivos JS e CSS não estão sendo referenciados, então faça o seguinte.

1. Dentro da tag <head> adicione essas duas tags

```html
<script type="module" crossorigin src="static/js/main.4c19fd1c.js"></script>
<link rel="stylesheet" crossorigin href="static/css/main.b604a971.css" />
```

2. No atributo "src" da tag script referencie o arquivo JS gerado no seu build.

3. No atributo "href" da tag link referencie o arquivo Css gerado no seu build.

4. Também crie uma cópia do arquivo manifest.json que temos na raíz do projeto e cole na raíz da pasta "build".

5. No menu de extensões do Chrome habilite o modo de desenvolvedor

6. Clique na opção "Carregar sem compactação" e selecione a pasta build que foi gerada

7. Pronto, a AIVA estará como extensão em seu navegador s2.

8. Por se tratar de um side panel extension, você deve clicar com botão direito na extensão e clicar em "Abrir painel lateral"
