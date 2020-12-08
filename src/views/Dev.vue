<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Usuário</td>
          <td v-if="isAdmin">Senha</td>
          <td>Admin</td>
          <td v-if="isAdmin"></td>
          <td v-if="isAdmin"></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.nome }}</td>
          <td>{{ user.nomeUsuario }}</td>
          <td :v-if="isAdmin">{{ user.senha }}</td>
          <td>
            <button :disabled="!isAdmin" @click="update(user)">
              {{ user.isAdmin ? "Sim" : "Não" }}
            </button>
          </td>
          <td v-if="isAdmin"><button>Excluir</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../api";
import { mapState } from "vuex";

export default {
  name: "Dev",
  data() {
    return {
      ...mapState(["usuario", "senha", "isAdmin"]),
      users: [],
    };
  },
  methods: {
    async get() {
      const { data } = await api.get("admin");
      this.users = data;
    },
    async update(item) {
      if (item && typeof item == "object" && this.isAdmin) {
        item.isAdmin = !item.isAdmin;
        await api.put("dev", item);
      }
    },
    async delete(item) {
      if (item && typeof item == "object" && this.isAdmin) {
        if (confirm(`Deseja realmente excluir o usuário ${item.nomeUsuario}`)) {
          await api.delete("dev?id=" + item.id);
          this.users = this.users.filter((u) => u.id != item.id);
        }
      }
    },
  },
  created() {
    this.get();
  },
};
</script>

<style>
</style>
