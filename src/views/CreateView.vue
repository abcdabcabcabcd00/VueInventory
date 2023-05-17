<script lang="ts">
import { useInventoryStore } from "@/stores/inventory";
import type { InventoryItem } from "@/stores/inventory";
import type { Ref } from "vue";
import { ref } from "vue";

const generateId = (): string =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

export default {
    setup() {
        const store = useInventoryStore();
        const items = store.items;
        const productCode = ref("");
        const name = ref("");
        const actualAmount = ref(0);
        const minimumAmount = ref(0);
        const price = ref(0);

        const createItem = () => {
            const newItem: InventoryItem = {
                id: generateId(),
                productCode: productCode.value,
                name: name.value,
                actualAmount: actualAmount.value,
                minimumAmount: minimumAmount.value,
                price: price.value,
            };

            items.push(newItem);
            this.$router.back();
        };

        return {
            items,
            createItem,
            productCode,
            name,
            actualAmount,
            minimumAmount,
            price,
        };
    },
};
</script>
<template>
    <div>
        <label for="productName">Name: </label>
        <input
            autocomplete="off"
            type="text"
            v-model.trim="name"
            id="productName"
        />
        <br />
        <label for="productCode">Product code: </label>
        <input
            autocomplete="off"
            type="text"
            v-model.trim="productCode"
            id="productCode"
        />
        <br />
        <label for="actualAmount">Actual Amount: </label>
        <input
            autocomplete="off"
            type="number"
            v-model.number="actualAmount"
            id="actualAmount"
        />
        <br />
        <label for="minimumAmount">Minimum Amount: </label>
        <input
            autocomplete="off"
            type="number"
            v-model.number="minimumAmount"
            id="minimumAmount"
        />
        <br />
        <label for="price">Price: </label>
        <input
            autocomplete="off"
            type="number"
            v-model.number="price"
            id="price"
        />
    </div>
    <button @click="createItem">Create!</button>
</template>

<style scoped lang="scss" src="@/assets/create.css" />
