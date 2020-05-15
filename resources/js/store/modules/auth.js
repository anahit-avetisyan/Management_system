import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import { loginPage } from './utils'

// state
export const state = {
    user: null,
    token: Cookies.get('token'),
    errors:[],
    logoutCheck:false
}

// getters
export const getters = {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null,
    errors: state => state.errors,
    logoutCheck: state => state.logoutCheck
}

// mutations
export const mutations = {
    [types.SAVE_TOKEN] (state, { token }) {
        state.token = token
        Cookies.set('token', token)
        state.logoutCheck=false

    },

    [types.FETCH_USER_SUCCESS] (state, { user }) {
        state.user = user
    },

    [types.FETCH_USER_FAILURE] (state) {
        // state.token = null
        // Cookies.remove('token')
    },

    [types.LOGOUT] (state) {
        state.user = null
        state.token = null
        Cookies.remove('token')
        state.logoutCheck=true
    },

    [types.UPDATE_USER] (state, { user }) {
        state.user = user
    },
    [types.REGISTER_ERRORS] (state, { errors }) {
        state.errors = errors
    }
}

// actions
export const actions = {
    saveToken ({ commit, dispatch }, payload) {
        commit(types.SAVE_TOKEN, payload)
    },

    async fetchUser ({ commit }) {
        try {
            const { data } = await axios.get('/api/user',{headers:{Authorization:`Bearer ${state.token}`}})

            commit(types.FETCH_USER_SUCCESS, { user: data.user })
        } catch (e) {
            commit(types.FETCH_USER_FAILURE)
        }
    },


    async logout ({ commit}) {
        try {
            const { data } = await axios.get('/api/logout')
            if(data.success==true){
                commit(types.LOGOUT)
            }
        } catch (e) { }
    },
    async register ({ commit}, body) {
        try {
            const { data } = await axios.post('/api/register',body)
            if(data.success==true){
                commit(types.REGISTER_ERRORS,{errors:{errors:[],success:true}})
                commit(types.SAVE_TOKEN,{token:data.token})
            }
        } catch (e) {
            commit(types.REGISTER_ERRORS,{errors:{errors:e.response.data.errors,success:false}})

        }
    },

    async login ({ commit}, body) {
        try {
            const { data } = await axios.post('/api/login',body)
            if(data.success==true){
                commit(types.REGISTER_ERRORS,{errors:{errors:[],success:true}})
                commit(types.SAVE_TOKEN,{token:data.token})
            }else{
                commit(types.REGISTER_ERRORS,{errors:{errors:data.errors,success:false}}) 
            }
        } catch (e) {
            commit(types.REGISTER_ERRORS,{errors:{errors:e.response.data.errors,success:false}})

        }
    },

}
