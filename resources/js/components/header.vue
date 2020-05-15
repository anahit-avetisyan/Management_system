<template>
        <header>
            <div class="header">
                <div v-if="token" class="header__menu menu">
                    <span v-if=" user && user.role && user.role.name=='Manager'"><router-link class="menu__item" to="/developers">Devlopers</router-link></span>
                    <router-link to="/tasks">Tasks</router-link>
                </div>
                <div class="header__buttons-container">
                    <div v-if="token==null||token=='undefined'">
                        <button @click="register" class="btn btn--register">Register</button>
                        <button @click="login" class="btn btn--login">Login</button>
                    </div>
                    <button v-if="token" @click="logout" class="btn btn--logout">Logout</button>
                </div>
            </div>
        </header>
</template>
<script>
 import { mapGetters} from 'vuex'


    export default {
        name: 'Header',
         computed: {
            ...mapGetters({
                token:'auth/token',
                logoutCheck:'auth/logoutCheck',
                user:'auth/user'
            }),
        },
        watch: {
            logoutCheck: {
                handler: function (value, oldValue) {
                    if (value !== oldValue) {
                        if(value == true){
                            this.$router.push({name:'home'})
                        }
                    }
                }
            }
        },
        mounted () {
               this.$store.dispatch('auth/fetchUser')
        },
        methods: {
            register(){
                this.$router.push({name:'register'})
            },
            login(){
                this.$router.push({name:'login'})
            },
            logout(){
                this.$store.dispatch('auth/logout')
            }
        }
    }
</script>
<style lang="scss">
    .header {
        min-height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        background-color:#C8CED3;
        margin-bottom: 30px;
        .menu__item {
            margin-right: 20px;
        }
    }
    .header__buttons-container {
        display: flex;
        .btn {
            border-radius: 5px;
            padding: 5px 10px;
            color: white;
            border:none
        }
        .btn--register {
            background-color: #3f9ae5;

        }
        .btn--login {
            background-color: #385d7a;
            margin:0px 30px
        }
        .btn--logout {
            background-color: #761b18;
        }
    }
</style>

