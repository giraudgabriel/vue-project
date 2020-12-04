<template>
  <div id="app">
    <p>
      Novo curso:
      <input type="text" v-model="novo" />
      <button @click="incluir">Inserir</button>
    </p>
    <ul>
      <CursoItem
        v-for="(curso, indice) in cursos"
        @click="excluir(indice)"
        :key="indice"
        :curso="curso.nome"
      />
    </ul>
  </div>
</template>


<script>
import CursoItem from "./components/CursoItem";

export default {
  name: "app",
  components: {
    CursoItem,
  },
  data() {
    return {
      novo: "",
      cursos: [{ nome: "ADS" }, { nome: "Banco de Dados" }],
    };
  },
  methods: {
    incluir() {
      if (this.novo.trim().length == 0) {
        alert("O nome deve ser preenchido!");
      } else {
        this.cursos.push({ nome: this.novo });
      }
    },
    excluir(indice) {
      this.cursos.splice(indice, 1);
    },
  },
};
</script>
