<template>
  <div class="todos" :class="{ done: todos.done }">
    <div class="title">
      <h3 @click="showDetail = !showDetail">{{ todos.title }}</h3>
      <div class="icon">
        <router-link :to="{ name: 'UpdateTodo', params: { id: todos.id } }"
          ><span class="material-icons">edit</span></router-link
        >
        <span @click="deleteTodo" class="material-icons">delete</span>
        <span @click="toggle" class="material-icons" tick>done</span>
      </div>
    </div>
    <div v-if="showDetail" class="detail">
      <p>{{ todos.detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      showDetail: false,
      uri: "http://localhost:3000/todos/" + this.todos.id,
    };
  },
  methods: {
    deleteTodo() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("deleteTodo", this.todos.id))
        .catch((err) => console.log(err));
    },
    toggle() {
      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          done: !this.todos.done,
        }),
      })
        .then(() => this.$emit("toggle", this.todos.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.todos {
  margin: 20px auto;
  background-color: #4b4b4b;
  padding: 10px 20px;
  border-radius: 15px;
  border: 3px solid #b33939;
  color: #f7f1e3;
}
.todos:hover {
  box-shadow: 8px 10px 10px #1f1f1f;
}
h3 {
  cursor: pointer;
}
.title {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
  color: "#bbb";
}
.material-icons:hover {
  color: #2f3543;
}
.todos.done {
  border: 3px solid #218c74;
}
.todos.done .tick {
  color: #218c74;
}
</style>
