<script lang=ts>
import { useInventoryStore } from "@/stores/inventory";
import NavHead from "@/components/NavHead.vue";

export default {
    components: {NavHead},
    setup() {
        const items = useInventoryStore().items;
        return { items };
    },
};
</script>

<template>
    <div id="content">
        <NavHead/>
        <table>
            <thead>
                <tr>
                    <td class="empty"></td>
                    <td>To Order</td>
                    <td>Name</td>
                    <td>Product Code</td>
                    <td>Actual Amount</td>
                    <td>Minimum Amount</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tr v-for="item in items" :key="item.id" :class="{hidden: !(item.actualAmount < item.minimumAmount)}">
                <td class="button-container"><button>Order</button></td>
                <td>{{ item.minimumAmount - item.actualAmount }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.productCode }}</td>
                <td>{{ item.actualAmount }}</td>
                <td>{{ item.minimumAmount }}</td>
                <td>{{ item.price }}</td>
            </tr>
        </table>
    </div>
</template>
<style scoped src="@/assets/overview.css"/>