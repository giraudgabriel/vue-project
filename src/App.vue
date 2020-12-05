<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "app",
};
</script>

<style>
h2 {
  font-size: 44px;
  margin: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

input {
  border: none;
}

label {
  font-size: 16px;
  font-weight: 500;
}

button {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background: #242424;
  color: #fff;
  border: none;
  margin: 8px;
  font-size: 12px;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button:hover {
  filter: opacity(0.8);
  background: #242424;
}

ul {
  list-style: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 24px 72px;
  border-radius: 8px;
  background: #ededed;
}

.input-group {
  display: flex;
  width: 100%;
  align-items: center;
  flex-flow: column;
  justify-content:center;
}

.input-group input {
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  margin: 8px 0;
}

input:focus {
  outline: none;
}
</style>