<template>
    <div >
        <Header/>
        <router-view/>
    </div>
</template>
<script>
    import Header from './header'
    export default {
        name: 'App'
        components: {
            Header
        },
    }
</script>
<style lang="scss">
    
</style>

<script>
    import Header from "./header";
    export default {
        components: {Header}
    }
</script>
