<template>
  <div class="container">
    <form @submit.prevent="login">
      <h2>Login</h2>
      <div class="input-group">
        <input
          placeholder="Usuário"
          id="username"
          required
          autofocus
          v-model="usuario"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          placeholder="Senha"
          id="password"
          required
          v-model="senha"
        />
      </div>
      <button type="submit">Entrar</button>
      <button @click="register">Não possui conta? Cadastrar-se</button>
    </form>
  </div>
</template>

<script>
import api from "../api";
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      senha: "",
    };
  },
  methods: {
    ...mapMutations(["setUsuario", "setSenha", "setIsAdmin"]),
    login() {
      api
        .post("admin", { nomeUsuario: this.usuario, senha: this.senha })
        .then((res) => {
          const { data } = res;
          this.success(data);
        })
        .catch((err) => {
          console.error(err);
          alert("Usuário ou senha inválidos!");
        });
    },
    success(data) {
      this.setUsuario(data.nomeUsuario);
      this.setSenha(data.senha);
      this.setIsAdmin(data.isAdmin);
      this.$router.push("/dev");
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
button{
  margin: 8px !important;
}
</style>