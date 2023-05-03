<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">BookStore</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Genres
          <!-- <i class="fas fa-address-book"></i> -->
        </router-link>
      </li>
    </div>
    <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Nhập thông tin cần tìm"
      :value="modelValue"
      @input="updateModelValue"
      @keyup.enter="submit"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="submit">
        <i class="fas fa-search"></i> Tìm kiếm
      </button>
    </div>
  </div>
  </nav>
</template>
<script>
//import serviec
export default {
  props: {
    modelvalue: { type: String, default: "" },
  },
  emits: ["submit", "update:modelvalue"],
  methods: {
    updateModelvalue(e) {
      this.$emit("update:modelvalue", e.target.value);
    },
    submit() {
      this.$emit("submit");
    },
  },
};
</script>
<style>

</style>

