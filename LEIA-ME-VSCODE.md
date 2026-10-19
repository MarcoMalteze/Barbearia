# Projeto Site Barbearia Premium (Pronto para VS Code)

Este pacote contém o projeto completo do site comercial da barbearia, otimizado com foco **Mobile-First** (interface prioritária para celulares, botões de fácil alcance com o polegar, barra inferior de conversão rápida e carregamento leve).

## Como abrir e executar no VS Code

1. Extraia a pasta deste arquivo `.zip` no seu computador.
2. Abra o **Visual Studio Code (VS Code)** e clique em **File > Open Folder...** (Arquivo > Abrir Pasta) selecionando a pasta extraída.
3. **Para rodar imediatamente:**
   - Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"** (extensão Live Server do VS Code), **ou** dê dois cliques diretamente no arquivo `index.html` para abrir no seu navegador.
4. **Estrutura de arquivos:**
   - `index.html`: Aplicação completa com código limpo e imagens externas organizadas na pasta `assets/img/`.
   - `assets/img/`: Fotos de alta definição ottimizada para carregamento rápido (`hero.jpg`, `fade.jpg`, `beard.jpg`, `exec.jpg`, `tools.jpg`).
   - `react-ts-tailwind/src/config/barbershopConfig.ts`: Tipagem e arquivo de configuração centralizada em TypeScript caso deseje integrar em um projeto React + Vite.

## Como personalizar os dados da Barbearia (2 Formas)

### Opção 1: Pelo Painel Visual direto no navegador (Mais rápido)
1. Abra o site no navegador e clique no botão **"Editar Dados da Barbearia"** (no topo ou no rodapé).
2. Preencha o Nome oficial, Cidade/Bairro, Número de WhatsApp (com DDD), Endereço completo, Instagram, Horários e Preços dos serviços.
3. Clique em **"Salvar e Atualizar Site"** para ver o resultado na hora.
4. Clique em **"Copiar BARBERSHOP_CONFIG para VS Code"** e cole no objeto `DEFAULT_BARBERSHOP_CONFIG` dentro do `index.html` para salvar definitivamente no código-fonte!

### Opção 2: Direto no código no VS Code
1. Abra o arquivo `index.html` no VS Code e pressione `Ctrl + F` procurando por `DEFAULT_BARBERSHOP_CONFIG`.
2. Altere os campos:
   - `name`: Nome oficial da barbearia.
   - `whatsappNumber`: Número de WhatsApp apenas com dígitos e DDI/DDD (ex: `"5516999999999"`).
   - `phoneDisplay`: Telefone formatado (ex: `"(16) 99999-9999"`).
   - `address`: Endereço completo (atualiza automaticamente o texto e o mapa incorporado).
   - `services`: Lista de serviços, descrições, tempo médio e preços.
   - `reviews`: Comentários reais copiados do perfil do Google Maps (`https://maps.app.goo.gl/z1PtXUDnDcrpzAR69`).
   - `hours`: Dias e horários de funcionamento.
