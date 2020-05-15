<template>
    <div class="developers-container Developers">
        <div>
            <div class="portlet">
                <div class="developers__header"  > 
                    <h3> Developers</h3>
                </div>
                <div class="Developers__buttons--create">
                    <button @click="openCreateModal" class="btn">Create</button>
                </div>
                <div class="portlet-body">
                    <div class="table-scrollable">
                        <table class="table table-striped table-bordered table-advance table-hover">
                            <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th class="hidden-xs">
                                    email
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(developer,index) in developers" :key="index">
                                    <td>
                                       {{index+1}} 
                                    </td>
                                    <td class="highlight">
                                    {{developer.name}}
                                    </td>
                                    <td class="hidden-xs">
                                    {{developer.email}}
                                    </td>
                                   
                                    <td>
                                        <span  @click="editDeveloperOpenModal(developer)"><i class="fa fa-edit cursor-pointer"></i></span>
                                        <span @click="deleteDeveloper(developer.id)"><i  class="fa fa-trash cursor-pointer"></i> </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <b-modal title='Create Developer'  v-model="createDeveloperModal" hide-footer>
             <div class="modal-content">
                 <div class="modal-content__body">
                     <label class="modal__input--label">
                        <b-input v-model="form.name" placeholder="Name"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsName" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                     <label class="modal__input--label">
                        <b-input v-model="form.email" placeholder="Email"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsEmail" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                     
                      <label class="modal__input--label">
                        <b-input v-model="form.password" type="password" placeholder="Password"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsPassword" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                      <label class="modal__input--label">
                        <b-input v-model="form.password_confirmation" type="password"  placeholder="Password confirmation"></b-input>
                     </label>
                    
                 </div>
                 <div class="modal-content__footer">
                     <button @click="createDeveloper" :disabled="form.Developer==''?true:false" class="btn btn--create">Create</button>
                     <button @click="createDeveloperModal=false" class="btn btn--cancel">Close</button>
                 </div>
             </div>
        </b-modal>
         <b-modal title='Update Developer'  v-model="editDeveloperModal" hide-footer>
             <div class="modal-content">
                 <div class="modal-content__body">
                      <label class="modal__input--label">
                        <b-input v-model="editForm.name" placeholder="Name"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsName" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                     <label class="modal__input--label">
                        <b-input v-model="editForm.email" placeholder="Email"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsEmail" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                      <label class="modal__input--label">
                        <b-input v-model="editForm.password" type="password" placeholder="Password"></b-input>
                        <div class="error-message-container" v-for="(error,index) in errorsPassword" :key="index">
                            <span class="error-message" >{{error}}</span>
                        </div>
                     </label>
                 </div>
                 <div class="modal-content__footer">
                     <button @click="editDeveloper" class="btn btn--create">Update</button>
                     <button @click="editDeveloperModal=false" class="btn btn--cancel">Close</button>
                 </div>
             </div>
        </b-modal>
    </div>
</template>
<script>

    import { mapGetters,mapActions } from 'vuex'


    export default {
        components: {

        },

        data () {
            return {
                createDeveloperModal:false,
        
                form:{
                    name:'',
                    password:'',
                    password_confirmation:'',
                    email:''
                },
                editForm:{
                    name:'',
                    password:'',
                    password_confirmation:'',
                    email:'',
                    id:''
                },
    
                editDeveloperModal:false,
                errorsPassword:[],
                errorsEmail:[],
                errorsName:[]
                 

            }
        },

        computed: {

            ...mapGetters({
                developers:'developers/developers',
                errors:'developers/errors'
            }),
        },

        mounted () {
              this.$store.dispatch('developers/fetchDevelopers')
        },
        watch: {
             errors: {
                handler: function (value, oldValue) {
                    if (value !== oldValue) {
                        if(value.success==true){
                             this.createDeveloperModal=false
                              this.editDeveloperModal=false
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
             openCreateModal () {
                 this.createDeveloperModal=true
                 this.form.name = ''
                 this.form.email = ''
                 this.form.password = ''
                 this.form.password_confirmation = ''
                 this.errorsPassword = [],
                this.errorsEmail = [],
                this.errorsName = []
                 
             },
             createDeveloper () {
                this.$store.dispatch('developers/fetchAddDevelopers',this.form)
                
             },
             deleteDeveloper (id) {
                  this.$store.dispatch('developers/fetchDeleteDevelopers',id)
             },
             editDeveloperOpenModal (data) {
                this.editForm.name = data.name
                 this.editForm.email = data.email
                 this.editForm.password = data.password
                 this.editForm.password_confirmation = ''
                 this.editForm.id = data.id
                 this.editDeveloperModal=true
                  this.errorsPassword = [],
                this.errorsEmail = [],
                this.errorsName = []

             },
             editDeveloper(){
                this.$store.dispatch('developers/fetchEditDevelopers',this.editForm)
               
             },
        

        }

    }
</script>

<style lang="scss">
.developers-container {
    padding: 20px;
    .developers__header {
        display: flex;
        justify-content: center;
    }
    .developers__buttons--create {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        button {
            background-color: darkgreen;
            color: white;
        }
    }
}
.error-message {
    font-size: 10px;
    color: rgb(165, 39, 39);
}
.error-message-container {
    display: flex;
    flex-direction: column;
}
.cursor-pointer {
    cursor: pointer;
}
.button--change {
    background-color: brown;
    color: white;

}
.modal-content {
    display:flex;
    flex-direction: column;
    border: none;
    .modal__input--label {
        margin-bottom: 20px;
        width: 100%;
    }
    .modal-content__footer {
        border: none;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        .btn--create {
             background-color: rgb(39, 122, 83);
             color: white;
            
        }
         .btn--cancel {
           background-color: crimson;
            color: white;
        }
    }
}
</style>
