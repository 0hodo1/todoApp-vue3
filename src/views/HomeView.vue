<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Todo App</h2>
    <div v-if="todos.length">
      <div v-for="todo in todos" :key="todo.id">
        <Todos :todos="todo" />
      </div>
    </div>
    <div v-else>
      <p>Todos loading...</p>
    </div>
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";

export default {
  name: "HomeView",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err));
  },
};
</script>
