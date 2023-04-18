<script lang=ts>
import { useInventoryStore } from "@/stores/inventory";
import NavHead from "@/components/NavHead.vue";

export default {
    components: {NavHead},
    setup() {
        const items = useInventoryStore().items;
        return { items };
    },

    methods: {
        edit(event, idx) {
            this.$router.push({
                name: "edit",
                params: {
                    index: idx.toString(),
                }
            });
        },
        delete_item(event, idx) {
            this.items.splice(idx, 1);
        }
    }
};
</script>

<template>
    <div id="content">
        <NavHead/>
        <table>
            <thead>
                <tr>
                    <td>Delete</td>
                    <td>Edit</td>
                    <td>Name</td>
                    <td>Product Code</td>
                    <td>Actual Amount</td>
                    <td>Minimum Amount</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tr v-for="(item, idx) in items" :key="item.id">
                <!-- CR :: why are also sending the event? You can put delete_item(idx) here immediately  -->
                <td class="button-container"><button @click='(evt) => {
                    delete_item(evt, idx);
                }'>Delete</button></td>
                <td class="button-container"><button @click='(evt) => {
                    edit(evt, idx);
                }'>Edit</button></td>
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