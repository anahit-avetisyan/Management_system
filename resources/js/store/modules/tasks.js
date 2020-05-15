import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import { loginPage } from './utils'

// state
export const state = {
    tasks:[],
    statuses:[]
}

// getters
export const getters = {
    tasks: state => state.tasks,
    statuses: state => state.statuses
}

// mutations
export const mutations = {
    [types.FETCH_TASKS] (state, { tasks }) {
        state.tasks = tasks  
    },
    [types.FETCH_TASKS_FAILURE] (state) {
        state.tasks = []  
    },
    [types.FETCH_STATUSES] (state, { statuses }) {
        state.statuses = statuses  
    },
    [types.FETCH_STATUSES_FAILURE] (state) {
        state.statuses = []  
    },
 
}

// actions
export const actions = {
   
    async fetchTasks ({ commit }) {
        try {
            const { data } = await axios.get('/api/tasks',{headers:{Authorization:`Bearer ${this.state.auth.token}`}})
            commit(types.FETCH_TASKS, { tasks: data.tasks })
        } catch (e) {
            loginPage(e, this.commit)
            commit(types.FETCH_TASKS_FAILURE)
        }
    },
   
    async fetchAddTasks ({ commit,dispatch },body) {
        try {
            const { data } = await axios.post('/api/tasks',body,{headers:{Authorization:`Bearer ${this.state.auth.token}`}})
            if(data.success==true){
                dispatch('fetchTasks')
            }
        } catch (e) {
            commit(types.FETCH_TASKS_FAILURE)
        }
    },
    async fetchEditTasks ({ commit,dispatch },body) {
        try {
            const { data } = await axios.put('/api/tasks',body)
            if(data.success==true){
                dispatch('fetchTasks')
            }
        } catch (e) {
            commit(types.FETCH_TASKS_FAILURE)
        }
    },
    async fetchDeleteTasks ({ commit,dispatch },id) {
        try {
            const { data } = await axios.delete(`/api/task/${id}`)
            if(data.success==true){
                dispatch('fetchTasks')
            }
        } catch (e) {
            commit(types.FETCH_TASKS_FAILURE)
        }
    },
    async fetchStatuses ({ commit }) {
        try {
            const { data } = await axios.get('/api/statuses')
            
            commit(types.FETCH_STATUSES, { statuses: data.statuses})
        } catch (e) {
            commit(types.FETCH_STATUSES_FAILURE)
        }
    },
    async fetchChangeStatus ({ commit,dispatch },body) {
        try {
            const { data } = await axios.put('/api/change-task-status',body)
            if(data.success==true){
                dispatch('fetchTasks')
            }
        } catch (e) {
            commit(types.FETCH_STATUSES_FAILURE)
        }
    },
}
