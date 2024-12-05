<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <div class="pagina-termos">
        <div class="conteudo-termos">
          <header class="header-termos">
            <h1>Termos de Uso</h1>
            <p>
              Bem-vindo à <strong>Next Home</strong>. Ao utilizar nosso site para aluguel de casas,
              você concorda com os termos descritos abaixo. Por favor, leia com atenção para
              entender as regras e responsabilidades.
            </p>
          </header>

          <section class="termo">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar nosso site, você concorda em cumprir e estar vinculado a estes
              Termos de Uso. Caso não concorde com qualquer parte destes termos, não utilize nosso
              site.
            </p>
          </section>

          <section class="termo">
            <h2>2. Uso do Site</h2>
            <p>
              O site é destinado apenas para fins legais e de acordo com a legislação vigente. Ele
              deve ser utilizado exclusivamente para fins pessoais e não comerciais.
            </p>
          </section>

          <section class="termo">
            <h2>3. Cadastro de Usuário</h2>
            <p>
              Para acessar certas funcionalidades, você deve criar uma conta. É sua responsabilidade
              fornecer informações verdadeiras, manter sua senha segura e gerenciar o acesso à sua
              conta.
            </p>
          </section>

          <section class="termo">
            <h2>4. Propriedades e Anúncios</h2>
            <p>
              Os proprietários são responsáveis pela veracidade das informações de suas propriedades
              listadas. A <strong>Next Home</strong>
              não se responsabiliza por informações incorretas ou incompletas fornecidas por
              terceiros.
            </p>
          </section>

          <section class="termo">
            <h2>5. Reserva e Pagamento</h2>
            <p>
              Todas as reservas e pagamentos devem ser realizados através de nosso sistema.
              Certifique-se de seguir as instruções corretamente para confirmar sua reserva.
            </p>
          </section>

          <section class="termo">
            <h2>6. Cancelamentos e Reembolsos</h2>
            <p>
              As políticas de cancelamento e reembolso variam conforme o anúncio. Leia os detalhes
              antes de confirmar sua reserva ou entre em contato com nosso suporte para dúvidas.
            </p>
          </section>

          <section class="termo">
            <h2>7. Responsabilidades do Usuário</h2>
            <p>
              Você deve utilizar o site de maneira responsável, respeitando as normas de convivência
              e as regras das propriedades alugadas. Qualquer dano causado será de sua
              responsabilidade.
            </p>
          </section>

          <section class="termo">
            <h2>8. Isenção de Responsabilidade</h2>
            <p>
              A <strong>Next Home</strong> não se responsabiliza por quaisquer danos diretos ou
              indiretos decorrentes do uso do site ou das propriedades alugadas. A responsabilidade
              é dos proprietários e usuários envolvidos.
            </p>
          </section>

          <section class="termo">
            <h2>9. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. O uso
              contínuo do site após as alterações implica aceitação dos novos termos.
            </p>
          </section>

          <section class="termo">
            <h2>10. Contato</h2>
            <p>
              Se tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do
              formulário disponível no site.
            </p>
          </section>
        </div>
      </div>
      <button @click="acceptTerms" class="close">Aceitar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    acceptTerms() {
      this.$emit('accept')
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 80vh; /* Para evitar que o modal exceda a altura da tela */
}

.close {
  cursor: pointer;
  font-size: 24px;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.conteudo-termos {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.header-termos {
  text-align: center;
  margin-bottom: 30px;
}

.header-termos h1 {
  font-size: 2.5em;
  color: #0056b3;
}

.termo {
  margin-bottom: 20px;
}

.termo h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #0056b3;
}

.termo p {
  margin-bottom: 10px;
  text-align: justify;
}

strong {
  color: #0056b3;
}
</style>
