<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Termos de Uso</h2>
      <p>Aqui estão os termos de uso. Por favor, leia atentamente. Termos de Uso</p>
      <p>
        1. Aceitação dos Termos Ao acessar e utilizar nosso site de aluguel de casas, você concorda
        em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte
        destes termos, não deve utilizar nosso site.
      </p>
      <p>
        2. Uso do Site O site é destinado apenas para fins legais e de acordo com a legislação
        vigente. Você concorda em usar o site apenas para fins pessoais e não comerciais.
      </p>
      <p>
        3. Cadastro de Usuário Para acessar certas funcionalidades do site, você pode ser solicitado
        a criar uma conta. Você concorda em fornecer informações verdadeiras, precisas e
        atualizadas. É sua responsabilidade manter a confidencialidade de sua senha e restringir o
        acesso à sua conta.
      </p>
      <p>
        4. Propriedades e Anúncios Nosso site permite que proprietários listem suas propriedades
        para aluguel e que usuários interessados busquem e reservem casas. A responsabilidade pela
        veracidade das informações contidas nos anúncios é exclusivamente dos proprietários.
      </p>
      <p>
        5. Reserva e Pagamento As reservas devem ser feitas através do nosso sistema. Os pagamentos
        devem ser realizados conforme as instruções fornecidas no site. Você concorda em pagar todos
        os valores devidos em relação à sua reserva.
      </p>
      <p>
        6. Cancelamentos e Reembolsos As políticas de cancelamento e reembolso variam de acordo com
        cada anúncio. Recomendamos que você leia atentamente as condições antes de fazer uma
        reserva. Em caso de dúvidas, entre em contato com nosso suporte.
      </p>
      <p>
        7. Responsabilidades do Usuário Você concorda em utilizar o site de maneira responsável,
        respeitando as normas de convivência e as regras do local onde a propriedade está situada. É
        proibido realizar qualquer atividade que possa causar danos ou comprometer a segurança do
        imóvel.
      </p>
      <p>
        8. Isenção de Responsabilidade Não nos responsabilizamos por quaisquer danos diretos ou
        indiretos resultantes do uso do site ou das propriedades alugadas. A responsabilidade é
        exclusivamente dos proprietários e usuários envolvidos na transação.
      </p>
      <p>
        9. Alterações nos Termos Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
        momento. Notificaremos os usuários sobre quaisquer alterações significativas. O uso contínuo
        do site após a publicação de alterações constituirá aceitação dos novos termos.
      </p>
      <p>
        10. Lei Aplicável Estes Termos de Uso serão regidos e interpretados de acordo com as leis do
        [seu país ou estado]. Qualquer disputa relacionada a estes termos será resolvida nos
        tribunais competentes da [sua jurisdição].
      </p>
      <p>
        11. Contato Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco
        através do nosso formulário de contato disponível no site.
      </p>
      <button @click="acceptTerms">Aceitar</button>
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
  float: right;
}

p {
  margin: 15px 0; /* Adiciona espaçamento entre os parágrafos */
  line-height: 1.6; /* Melhora a legibilidade do texto */
}
</style>
