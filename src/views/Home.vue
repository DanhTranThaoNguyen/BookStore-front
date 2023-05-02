<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div>
            <h4>Danh Sach Cac Tac Pham</h4>
        </div>
    </div>
</template>
<script>
import InputSearch from "@/components/Inphut.vue";
import StoreService from "@/services/Store.service";

export default {
    components: {
        InputSearch,
    }
}

</script>