<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2>Cadastrar-se</h2>
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
        <input placeholder="Nome" id="name" required v-model="nome" />
      </div>
      <div class="input-group">
        <input placeholder="Senha" id="password" required v-model="senha" />
      </div>
      <button type="submit">Criar conta</button>
      <button @click="login">Já possui contar? Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      usuario: "",
      nome: "",
      senha: "",
    };
  },
  methods: {
    ...mapMutations(["setUsuario", "setSenha"]),
    register() {
      axios
        .post("dev", {
          params: { id: 1 },
          headers: { Accept: "application/json" },
          auth: { username: this.usuario, password: this.usuario },
        })
        .then((res) => {
          console.log(res);
          this.success();
        })
        .catch((err) => {
          console.error(err);
          if (err.response.status === 401) {
            alert("Usuário ou senha inválidos!");
          } else {
            this.success();
          }
        });
    },
    success() {
      this.setUsuario(this.usuario);
      this.setSenha(this.senha);
      this.$router.push("/dev");
    },
    login() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>