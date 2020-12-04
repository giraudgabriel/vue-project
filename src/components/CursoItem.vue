<template>
  <li @click="onClick"><slot /></li>
</template>

<script>
export default {
  name: "CursoItem",
  props: {
    curso: String,
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style>
</style>