<template>
  <h1>Update Todo {{ id }}</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" />
    <label>Detail</label>
    <input type="text" v-model="detail" />
    <button @click="updateTodo">Update Todo</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
      uri: "http://localhost:3000/todos/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.detail = data.detail;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
        }),
      })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
