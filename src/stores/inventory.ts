import { ref, computed, watch } from "vue";
import type { Ref, UnwrapRef } from "vue";
import { defineStore } from "pinia";

export interface InventoryItem {
    id: string;
    productCode: string;
    name: string;
    actualAmount: number;
    minimumAmount: number;
    price?: number;
}

function load() {
    const items = localStorage.getItem("inventory");
    try {
        return items ? JSON.parse(items) : [];
    } catch {
        return [];
    }
}

function save(items: InventoryItem[]) {
    localStorage.setItem("inventory", JSON.stringify(items));
}

//type AnyOf<A, B> = A | B;
type AnyOf<T extends any[]> = T[number];

let test: AnyOf<[string, number, RegExp]> = /working!/;

export const useInventoryStore = defineStore("inventory", {
    state: () => {
        const items: Ref<InventoryItem[]> = ref(load());

        items.value.push({
            id: "starbucks_coffee",
            productCode: 304,
            name: "Cup of Starbucks Coffee",
            actualAmount: 10,
            minimumAmount: 5,
            price: 2.0,
        });
        items.value.push({
            id: "starbucks_cappuccino",
            productCode: 305,
            name: "Cup of Starbucks Cappucino",
            actualAmount: 10,
            minimumAmount: 5,
            price: 2.5,
        });
        items.value.push({
            id: "starbucks_coffeeblack",
            productCode: 306,
            name: "Cup of Starbucks Black Coffee",
            actualAmount: 10,
            minimumAmount: 5,
            price: 2.2,
        });

        watch(items, () => save(items.value), { deep: true });

        return {
            items,
        };
    },
});
