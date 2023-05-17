<script lang="ts">
import { useInventoryStore } from "@/stores/inventory";
import NavHead from "@/components/NavHead.vue";

export default {
    components: { NavHead },

    setup() {
        const items = useInventoryStore().items;
        return { items };
    },

    computed: {
        index() {
            return Number(this.$route.params.index);
        },
        item() {
            return this.items[this.index];
        },
    },

    methods: {
        back() {
            this.$router.back();
        },
    },
};
</script>

<template>
    <h1>Editing: {{ item.name }}</h1>
    <div>
        <label for="productName">Name: </label>
        <input
            autocomplete="off"
            type="text"
            v-model.trim="item.name"
            id="productName"
        />
        <br />
        <label for="productCode">Product code: </label>
        <input
            autocomplete="off"
            type="text"
            v-model.trim="item.productCode"
            id="productCode"
        />
        <br />
        <label for="actualAmount">Actual Amount: </label>
        <input
            autocomplete="off"
            type="number"
            v-model.number="item.actualAmount"
            id="actualAmount"
        />
        <br />
        <label for="minimumAmount">Minimum Amount: </label>
        <input
            autocomplete="off"
            type="number"
            v-model.number="item.minimumAmount"
            id="minimumAmount"
        />
        <br />
        <label for="price">Price: </label>
        <input
            autocomplete="off"
            type="number"
            v-model.number="item.price"
            id="price"
        />
    </div>
    <button @click="back">Back</button>
</template>

<style scoped src="@/assets/overview.css" />
<style scoped src="@/assets/create.css" />
