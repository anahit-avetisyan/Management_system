<template>
    <div class="register-container">
        <div class="form-container">
            <div class="form-container__content">
                <p class="register__form--header">Registration form</p>
                <div class="register__form--horizontal" >
                   <label class="form__input--label">
                        <b-input v-model="form.name" placeholder="Name"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsName" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                     <label class="form__input--label">
                        <b-input v-model="form.email" placeholder="Email"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsEmail" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                     
                      <label class="form__input--label">
                        <b-input v-model="form.password" type="password" placeholder="Password"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsPassword" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                      <label class="form__input--label">
                        <b-input v-model="form.password_confirmation" type="password"  placeholder="Password confirmation"></b-input>
                     </label>
                    <div class="form-group-buttons">
                        <div >
                            <button  @click="register" class="add-button btn">Register</button>
                            <router-link
                                to="/home"
                                class="cancel-btn"
                            >Cancel <i class="fa fa-times"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import { mapGetters,mapActions } from 'vuex'


    export default {
        components: {

        },

        data () {
            return {
                form:{
                    name:'',
                    password:'',
                    password_confirmation:'',
                    email:''
                },
                errorsPassword:[],
                errorsEmail:[],
                errorsName:[]

            }
        },

        computed: {

            ...mapGetters({
                errors:'auth/errors'
            }),
        },

        mounted () {
           
        },
        watch: {
              errors: {
                handler: function (value, oldValue) {
                    if (value !== oldValue) {
                        if(value.success==true){
                          this.$router.push({name:'task'})
                        }else{
                            let errors = value.errors
                                 if(errors.email){
                                     this.errorsEmail=errors.email
                                 }else{
                                     this.errorsEmail=[]
                                 }
                                 if(errors.name){
                                     this.errorsName=errors.name
                                 }else{
                                     this.errorsName=[]
                                 }
                                 if(errors.password){
                                     this.errorsPassword=errors.password
                                 }else{
                                     this.errorsPassword=[]
                                 }
                        }

                    }
                }
            }
        },


        methods: {
            register(){
                this.$store.dispatch('auth/register',this.form)
            }

        }

    }
</script>
<style lang="scss">
    .register-container {
        display: flex;
        align-items: center;
        justify-content: center;

        .form-container {
            width: 30%;
            display: flex;
            justify-content: center;
            .form-container__content {
                border: 1px solid red;
                padding: 30px;
                width: 100%;
            }
        }
        .error-message {
            font-size: 10px;
            color: rgb(165, 39, 39);
        }
        .register__input-icon {
            display: flex;

        }
        .register__form--header {
            font-size: 28px;
            margin-bottom: 30px;
            font-weight: bold;
            text-align: center;
        }
        .form__input--label {
            width: 100%;
            margin-bottom: 20px;
        }
        .form-group-buttons {
            display: flex;
            justify-content: center;
        }

        .add-button {
            background-color: green;
            outline: none;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 12px;
            color: white;
        }

        .cancel-btn {
            background-color: red;
            outline: none;
            border-radius: 5px;
            padding: 7px 10px;
            font-size: 12px;
            text-decoration: none;
            color: white;
        }
    }

</style>
