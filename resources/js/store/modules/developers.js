import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import { loginPage } from './utils'

// state
export const state = {
    developers:[],
    errors:[],
    allDevelopers:[]
    
}

// getters
export const getters = {
    developers: state => state.developers,
    errors: state => state.errors,
    allDevelopers: state => state.allDevelopers
}

// mutations
export const mutations = {
    [types.FETCH_DEVELOPERS] (state, { developers }) {
        state.developers = developers  
    },
    [types.FETCH_DEVELOPERS_FAILURE] (state) {
        state.developers = []  
    },
    [types.FETCH_ERRORS] (state, { errors }) {
        state.errors = errors  
    }, 
    [types.FETCH_ALL_DEVELOPERS] (state, { developers }) {
        state.allDevelopers = developers  
    },
    [types.FETCH_ALL_DEVELOPERS_FAILURE] (state) {
        state.allDevelopers = []  
    },
}

// actions
export const actions = {
   
    async fetchDevelopers ({ commit }) {
        try {
            const { data } = await axios.get('/api/developers',{headers:{Authorization:`Bearer ${this.state.auth.token}`}})
            commit(types.FETCH_DEVELOPERS, { developers: data.developers })
        } catch (e) {
            loginPage(e, this.commit)
            commit(types.FETCH_DEVELOPERS_FAILURE)
        }
    },
    async fetchAllDevelopers ({ commit }) {
        try {
            const { data } = await axios.get('/api/all-developers')
            commit(types.FETCH_ALL_DEVELOPERS, { developers: data.developers })
        } catch (e) {
            commit(types.FETCH_ALL_DEVELOPERS_FAILURE)
        }
    },
    
    async fetchAddDevelopers ({ commit,dispatch },body) {
        try {
            const { data } = await axios.post('/api/developers',body,{headers:{Authorization:`Bearer ${this.state.auth.token}`}})
            if(data.success==true){
                commit(types.FETCH_ERRORS,{errors:{errors:[],success:true}})
                dispatch('fetchDevelopers')
            }
        } catch (e) {
            commit(types.FETCH_ERRORS,{errors:{errors:e.response.data.errors,success:false}})
        }
    },
    async fetchEditDevelopers ({ commit,dispatch },body) {
        try {
            const { data } = await axios.put('/api/developers',body)
            if(data.success==true){
                dispatch('fetchDevelopers')
                commit(types.FETCH_ERRORS,{errors:{errors:[],success:true}})
            }
        } catch (e) {
            commit(types.FETCH_ERRORS,{errors:{errors:e.response.data.errors,success:false}})
        }
    },
    async fetchDeleteDevelopers ({ commit,dispatch },id) {
        try {
            const { data } = await axios.delete(`/api/developer/${id}`)
            if(data.success==true){
                dispatch('fetchDevelopers')
            }
        } catch (e) {
            commit(types.FETCH_DEVELOPERS_FAILURE)
        }
    },
    
}
