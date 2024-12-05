<template>
    <div class="pagina-sobre">
    <div class="sobre-nos">
      <header class="header-sobre-nos">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à <strong>Next Home</strong>, sua parceira confiável para locação de casas.
          Oferecemos as melhores opções para você viver com conforto e segurança.
        </p>
      </header>
  
      <section class="nossa-historia">
        <h2>Nossa História</h2>
        <p>
          Fundada em 2024, a <strong>Next Home</strong> surgiu com a missão de transformar o mercado de locação de imóveis, 
          proporcionando uma experiência simples, segura e acessível para todos. 
          Combinamos tecnologia de ponta com atendimento personalizado para encontrar o lar ideal para nossos clientes.
        </p>
      </section>
  
      <section class="valores">
        <h2>Nossos Valores</h2>
        <ul>
          <li><strong>Confiança:</strong> Priorizamos a transparência em todas as nossas interações.</li>
          <li><strong>Qualidade:</strong> Selecionamos imóveis que atendem aos mais altos padrões.</li>
          <li><strong>Inovação:</strong> Usamos tecnologia para tornar o processo de locação rápido e eficiente.</li>
          <li><strong>Foco no Cliente:</strong> Estamos aqui para ouvir e atender suas necessidades.</li>
        </ul>
      </section>
  
      <section class="diferenciais">
        <h2>Por Que Escolher a Next Home?</h2>
        <p>
          Somos mais do que uma empresa de locação de imóveis. Na <strong>Next Home</strong>, você encontra:
        </p>
        <ul>
          <li>Um catálogo diversificado de casas em localizações privilegiadas.</li>
          <li>Processo de locação rápido e descomplicado.</li>
          <li>Equipe dedicada para suporte antes, durante e após a locação.</li>
          <li>Planos personalizados para atender diferentes orçamentos.</li>
        </ul>
      </section>
  
      <section class="contato">
        <h2>Entre em Contato</h2>
        <p>
          Está pronto para encontrar sua próxima casa? Entre em contato conosco e descubra como podemos ajudá-lo!
        </p>
        <address>
          <p><strong>Email:</strong> contato@nexthome.com</p>
          <p><strong>Telefone:</strong> (11) 1234-5678</p>
          <p><strong>Endereço:</strong> Rua das Palmeiras, 123, São Paulo - SP</p>
        </address>
      </section>
    </div>
</div>
  </template>
  
  <style scoped>
.pagina-sobre {
    background-color: #f6f6f6;
    padding-top: 100px;
    padding-bottom: 50px;
  
}
  .sobre-nos {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
    
  }
  
  .header-sobre-nos {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .header-sobre-nos h1 {
    font-size: 2.5em;
    color: #0056b3;
  }
  
  .nossa-historia, .valores, .diferenciais, .contato {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #0056b3;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
  }
  
  ul li::before {
    content: "✔️";
    position: absolute;
    left: 0;
    color: #0056b3;
  }
  
  address p {
    margin: 5px 0;
  }
  
  strong {
    color: #0056b3;
  }
  </style>
  