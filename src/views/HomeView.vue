<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Todo App</h2>
    <NavbarFilter @filterUpdate="active = $event" :active="active" />
    <div v-if="todos.length">
      <div v-for="todo in filteredTodos" :key="todo.id">
        <Todos :todos="todo" @deleteTodo="deleteHandle" @toggle="toggle" />
      </div>
    </div>
    <div v-else>
      <p>Todos loading...</p>
    </div>
  </div>
</template>

<script>
import Todos from "../components/Todo.vue";
import NavbarFilter from "../components/NavbarFilter.vue";

export default {
  name: "HomeView",
  components: {
    Todos,
    NavbarFilter,
  },
  data() {
    return {
      todos: [],
      active: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err));
  },
  methods: {
    deleteHandle(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggle(id) {
      let todo = this.todos.find((todo) => todo.id === id);
      todo.done = !todo.done;
    },
  },
  computed: {
    filteredTodos() {
      if (this.active === "all") {
        return this.todos;
      } else if (this.active === "completed") {
        return this.todos.filter((todo) => todo.done);
      } else if (this.active === "continue") {
        return this.todos.filter((todo) => !todo.done);
      }
    },
  },
};
</script>
