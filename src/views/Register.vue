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
        <input
          type="password"
          placeholder="Senha"
          id="password"
          required
          v-model="senha"
        />
      </div>
      <button type="submit">Criar conta</button>
      <button @click="login">Já possui contar? Entrar</button>
    </form>
  </div>
</template>

<script>
import api from "../api";
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
      api
        .post("dev", {
          nomeUsuario: this.usuario,
          nome: this.nome,
          senha: this.senha,
        })
        .then((res) => {
          if(res.status == 201) this.success();
        })
        .catch((err) => {
          console.error(err);
          alert("Usuário ou senha inválidos!");
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