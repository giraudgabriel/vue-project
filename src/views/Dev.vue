<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Usuário</th>
          <th v-if="$store.state.isAdmin">Senha</th>
          <th>Admin</th>
          <th v-if="$store.state.isAdmin">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.nome }}</td>
          <td>{{ user.nomeUsuario }}</td>
          <td v-if="$store.state.isAdmin">{{ user.senha }}</td>
          <td>
            <button :disabled="!$store.state.isAdmin" @click="update(user)">
              {{ user.isAdmin ? "Sim" : "Não" }}
            </button>
          </td>
          <td v-if="$store.state.isAdmin"><button :disabled="!$store.state.isAdmin" @click="excluir(user)">Excluir</button></td>
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
     update(item) {
      if (item && typeof item == "object" && this.$store.state.isAdmin) {
        item.isAdmin = !item.isAdmin;
         api.put("dev?id="+item.id, item, {auth: {
          username: this.$store.state.usuario,
          password: this.$store.state.senha
        }});
      }
    },
     excluir(item) {
      if (item && typeof item == "object" && this.$store.state.isAdmin) {
        if (confirm(`Deseja realmente excluir o usuário ${item.nomeUsuario}`)) {
           api.delete("dev?id=" + item.id, {auth: {
          username: this.$store.state.usuario,
          password: this.$store.state.senha
        }}).then(r => {
          if(r.status == 200) this.users = this.users.filter((u) => u.id != item.id);
        });
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
table {
    border-collapse:separate;
    border:solid black 1px;
    border-radius:6px;
    background: #ededed;
}

td, th {
    border-left:solid black 1px;
    border-top:solid black 1px;
    padding:28px;
    text-align: center;
    align-content: center;
    align-items: center;
}

td > button {
    margin: 0 !important;
}

th {
    background-color: #242424;
    color: #ededed;
    border-top: none;
}

td:first-child, th:first-child {
     border-left: none;
}

</style>
