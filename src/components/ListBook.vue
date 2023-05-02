<script>
export default {
  props: {
            books: { type: Array, default: [] },
            activeIndex: { type: Number, default: -1 }
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index) {
                this.$emit("update:activeIndex", index)
            }
        }
};
</script>
<template>
  <ul class="row g-2">
    <div class="row g-2">
      <div
        class="card"
        v-for="(books, index) in books"
        :key="books._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
      >
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body"> 
          <h5>{{ books.name }}</h5>
        </div>
        <router-link class="link"
            :to="{
              name: 'book.read',
              params: { id: activeIndex._id },
            }"
          >
          <button class="btn btn-sm btn-success" @click="goToReadnovel">
          <i class="fa-solid fa-chart-simple"></i> doc truyen
        </button> 
          </router-link>
      </div>
      
    </div>
  </ul>
</template>
<style>
.row {
    position: relative;
}
.card{
    border-radius: 2rem;
    max-width: 150px;
    margin: 10px;
}
.link{
    max-width: 150px;
    margin: auto;
    margin-bottom: 0.5rem;

}
</style>
