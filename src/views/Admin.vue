<template>
    <div class="main">
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>   
</template>
<script type="text/javascript">
    import header from './../components/Header'
    export default {
        data() {
            return {

            }
        },
        components: {
            'Header': header
        }
    }
</script>
<style lang="stylus">
    .content
        margin-top: 64px
        display: flex
</style>