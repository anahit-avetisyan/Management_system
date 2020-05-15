<template>
    <div class="tasks-container tasks">
        <div>
            <div class="portlet">
                <div class="tasks__header"  > 
                    <h3> Tasks</h3>
                </div>
                <div class="tasks__buttons--create">
                    <button v-if="user && user.role && user.role.name=='Manager'" @click="openCreateModal" class="btn">Create</button>
                </div>
                <div class="portlet-body">
                    <div class="table-scrollable">
                        <table class="table table-striped table-bordered table-advance table-hover">
                            <thead>
                            <tr>
                                <th>
                                    Task
                                </th>
                                <th class="hidden-xs">
                                    status
                                </th>
                                <th>
                                    Developer
                                </th>
                                <th>
                                    Manager
                                </th>

                                <th>
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(task,index) in tasks" :key="index">
                                    <td class="highlight">
                                    {{task.task}}
                                    </td>
                                    <td class="hidden-xs">
                                    {{task.status && task.status.name ? task.status.name :''}}
                                    </td>
                                    <td>
                                    {{task.developer && task.developer.name ? task.developer.name :''}}
                                    </td>
                                    <td>
                                    {{task.manager && task.manager.name ? task.manager.name :''}}
                                    </td>
                                    <td>
                                        <div v-if=" user && user.role && user.role.name=='Manager'">
                                            <span  @click="editTaskOpenModal(task)"><i class="fa fa-edit cursor-pointer"></i></span>
                                            <span @click="deleteTask(task.id)"><i  class="fa fa-trash cursor-pointer"></i> </span>
                                        </div>
                                      
                                        <button v-if="user && user.role && user.role.name=='Developer'" @click="changeStatusOpenModal(task)" class="button--change btn">Change status</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <b-modal title='Create task'  v-model="createTaskModal" hide-footer>
             <div class="modal-content">
                 <div class="modal-content__body">
                     <label class="modal__input--label">
                         Task
                         <b-form-textarea v-model='form.task' placeholder="type task"></b-form-textarea>
                     </label>
                     <label class="modal__input--label">
                         Developer
                        <b-form-select v-model='form.developer_id' placeholder="Developer">
                            <b-form-select-option :value='null'></b-form-select-option>
                         <template v-for="(developer,index) in allDevelopers">
                            <b-form-select-option :key="index" :value='developer.id'>{{developer.name}}</b-form-select-option>
                         </template>
                     </b-form-select>
                     </label>
                    
                 </div>
                 <div class="modal-content__footer">
                     <button @click="createTask" :disabled="form.task==''?true:false" class="btn btn--create">Create</button>
                     <button @click="createTask=false" class="btn btn--cancel">Close</button>
                 </div>
             </div>
        </b-modal>
         <b-modal title='Update task'  v-model="editTaskModal" hide-footer>
             <div class="modal-content">
                 <div class="modal-content__body">
                     <label class="modal__input--label">
                         Task
                         <b-form-textarea v-model='editForm.task' placeholder="type task"></b-form-textarea>
                     </label>
                     <label class="modal__input--label">
                         Developer
                        <b-form-select v-model='editForm.developer_id' placeholder="Developer">
                            <b-form-select-option :value='null'></b-form-select-option>
                         <template v-for="(developer,index) in allDevelopers">
                            <b-form-select-option :key="index" :value='developer.id'>{{developer.name}}</b-form-select-option>
                         </template>
                     </b-form-select>
                     </label>   
                 </div>
                 <div class="modal-content__footer">
                     <button @click="editTask" :disabled="editForm.task==''?true:false" class="btn btn--create">Update</button>
                     <button @click="editTaskModal=false" class="btn btn--cancel">Close</button>
                 </div>
             </div>
        </b-modal>
         <b-modal title='Create task'  v-model="changeStatusModal" hide-footer>
             <div class="modal-content">
                 <div class="modal-content__body">
                     <label class="modal__input--label">
                         Statuses
                        <b-form-select v-model='statusForm.status_id' placeholder="Developer">
                            <template v-for="(status,index) in statuses">
                                <b-form-select-option :key="index" :value='status.id'>{{status.name}}</b-form-select-option>
                            </template>
                     </b-form-select>
                     </label>   
                 </div>
                 <div class="modal-content__footer">
                     <button @click="changeStatus"  class="btn btn--create">Change</button>
                     <button @click="changeStatusModal=false" class="btn btn--cancel">Close</button>
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
                createTaskModal:false,
                
                form:{
                    task:'',
                    developer_id:''
                },
                 editForm:{
                    task:'',
                    developer_id:''
                },
                editTaskModal:false,
                statusForm: {
                    status_id:'',
                    id:''
                },
            
                changeStatusModal:false,
                 

            }
        },

        computed: {

            ...mapGetters({
                tasks:'tasks/tasks',
                statuses:'tasks/statuses',
                token:'auth/token',
                user:'auth/user',
                allDevelopers:'developers/allDevelopers'
            }),
        },

        mounted () {
              this.$store.dispatch('tasks/fetchTasks')
              this.$store.dispatch('tasks/fetchStatuses')
              this.$store.dispatch('auth/fetchUser')
              this.$store.dispatch('developers/fetchAllDevelopers')
        },
        watch: {

        },


        methods: {
             openCreateModal () {
                 this.createTaskModal=true
                 this.form.task=''
                 this.form.developer_id=''
             },
             createTask () {
                this.$store.dispatch('tasks/fetchAddTasks',this.form)
                this.createTaskModal=false
             },
             deleteTask (id) {
                  this.$store.dispatch('tasks/fetchDeleteTasks',id)
             },
             editTaskOpenModal (data) {
                 this.editForm.task=data.task
                 this.editForm.developer_id=data.developer_id
                 this.editForm.id = data.id
                 this.editTaskModal=true

             },
             editTask(){
                this.$store.dispatch('tasks/fetchEditTasks',this.editForm)
                this.editTaskModal=false
             },
             changeStatusOpenModal(data) {
                 this.statusForm.status_id = data.status_id
                 this.statusForm.id = data.id
                 this.changeStatusModal=true
             },
             changeStatus(){
                 
                this.$store.dispatch('tasks/fetchChangeStatus',this.statusForm)
                this.changeStatusModal=false
             }

        }

    }
</script>
<style lang="scss">
.tasks-container {
    padding: 20px;
    .tasks__header {
        display: flex;
        justify-content: center;
    }
    .tasks__buttons--create {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        button {
            background-color: darkgreen;
            color: white;
        }
    }
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
