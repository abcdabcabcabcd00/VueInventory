<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { devtools } from 'vue';

import { useInventoryStore } from './stores/inventory.ts';
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/overview">Overview</RouterLink>
                <RouterLink to="/create">Create</RouterLink>
            </nav>
        </div>
    </header>
    <div>
        <RouterView/>
    </div>
</template>

<style scoped lang="css">
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 10024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1.2rem;
        padding: 1rem 0;
        margin-top: 1rem;
        width: 40vw;
    }
}
</style>
<style lang=scss>
nav {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    vertical-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

nav a {
    width: 150px;
//    height: 50px;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active
{
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}
</style>