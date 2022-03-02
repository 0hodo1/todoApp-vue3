<template>
  <div class="todos">
    <div class="title">
      <h3 @click="showDetail = !showDetail">{{ todos.title }}</h3>
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
    };
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
  box-shadow: 8px 10px 10px #b45151;
}
h3 {
  cursor: pointer;
}
</style>
