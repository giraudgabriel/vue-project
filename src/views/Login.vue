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
        <input placeholder="Senha" id="password" required v-model="senha" />
      </div>
      <button type="submit">Entrar</button>
      <button @click="register">Não possui conta? Cadastrar-se</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
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
    ...mapMutations(["setUsuario", "setSenha"]),
    login() {
      axios
        .post("dev/login", {
          params: { username: this.usuario, password: this.usuario },
          headers: { Accept: "application/json" },
        })
        .then((res) => {
          const { data } = res;
          this.success(data);
        })
        .catch((err) => {
          console.error(err);
          if (err.response.status === 401) {
            alert("Usuário ou senha inválidos!");
          }
        });
    },
    success(data) {
      this.setUsuario(data.usuario);
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
</style>