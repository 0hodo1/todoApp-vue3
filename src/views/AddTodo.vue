<template>
  <form @submit.prevent="addTodo">
    <label>Title</label>
    <input v-model="title" required type="text" />
    <label>Detail</label>
    <input v-model="detail" required type="text" />
    <button>Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  methods: {
    addTodo() {
      let todos = {
        title: this.title,
        detail: this.detail,
        done: false,
        id: Math.floor(Math.random() * 100000),
      };
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todos),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
form button:hover {
  background: #00b26a;
  cursor: pointer;
}
</style>
