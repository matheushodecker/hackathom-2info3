<template>
  <div class="rodape">
    <div class="info">
      <div class="empresa">
        <h3>Empresa</h3>
        <div class="links" id="links-empresa">
          <RouterLink to="/sobre" class="link">Sobre nós</RouterLink>
          <RouterLink to="/termos" class="link">Termos de Serviço</RouterLink>
          <RouterLink to="/politica-privacidade" class="link">Política de Privacidade</RouterLink>
        </div>
      </div>
      <div class="contato">
        <h3>Contato</h3>
        <p>Telefone: (11) 98765-4321</p>
        <p>Email: contato@nexthome.com.br</p>
        <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
        <div class="redes-sociais">
          <a href="https://facebook.com/nexthome" class="social-link" target="_blank">Facebook</a>
          <a href="https://instagram.com/nexthome" class="social-link" target="_blank">Instagram</a>
          <a href="https://twitter.com/nexthome" class="social-link" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
    <div class="linha">
      <hr />
    </div>
    <div>
      <p class="copyright">&copy; 2024 NextHome. Todos os direitos reservados.</p>
    </div>
  </div>
</template>

<style scoped>
.rodape {
  display: flex;
  flex-direction: column;
  background-color: #000; /* Cor de fundo mais escura */
  color: #fff;
  width: 100%;
  padding: 3rem 1rem;
  font-family: 'Montserrat', sans-serif;
}

.links, .redes-sociais {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info {
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
}

h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #F2C14E; /* Dourado */
}

a {
  text-decoration: none;
  color: #F2C14E; /* Dourado */
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.linha {
  margin: 2rem 0;
}

.copyright {
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
  color: #ccc;
}

.social-link {
  color: #F2C14E;
  text-decoration: none;
}

.social-link:hover {
  text-decoration: underline;
}

.contato p {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .info {
    flex-direction: column;
    align-items: center;
  }

  .contato {
    margin-top: 2rem;
  }
}
</style>
