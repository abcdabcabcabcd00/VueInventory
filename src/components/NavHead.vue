<template>
    <div id="navbox">
        <nav><RouterLink to="/order">Order</RouterLink></nav>
        <!--        <nav><RouterLink to="/edit">Edit</RouterLink></nav>-->
    </div>
</template>

<style scoped lang="scss">
#navbox {
    display: flex;
    flex-direction: row;
}

#navbox nav {
    padding-left: 10px;
    padding-right: 10px;
}

nav {
    margin: 0px;
    margin-bottom: 15px;
}

nav a {
    background: var(--vt-c-black-soft);
    border: 1px solid var(--vt-c-divider-dark-2);
    padding: 10px;
}
</style>
