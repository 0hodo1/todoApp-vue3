<template>
  <nav class="filter-nav">
    <button @click="filterUpdate('all')" :class="{ active: active === 'all' }">
      All Todos
    </button>
    <button
      @click="filterUpdate('completed')"
      :class="{ active: active === 'completed' }"
    >
      Completed Todos
    </button>
    <button
      @click="filterUpdate('continue')"
      :class="{ active: active === 'continue' }"
    >
      Continue Todos
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    filterUpdate(filter) {
      this.$emit("filterUpdate", filter);
    },
  },
  props: ["active"],
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #b33939;
}
</style>
