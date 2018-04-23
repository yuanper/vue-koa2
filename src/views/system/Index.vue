<template>
    <div class="container">
        <UserLeftNav></UserLeftNav>
        <div class="nav-right">
            <router-view />
        </div>
    </div>
</template>
<script type="text/javascript">
    import UserLeftNav from './../../components/UserLeftNav'
    export default {
        components: {
            'UserLeftNav': UserLeftNav
        }
    }
</script>
<style lang="stylus" scoped>
    .container
        display: flex
        flex: 1
        .nav-right
            margin-top: 10px
            flex:1     
</style>