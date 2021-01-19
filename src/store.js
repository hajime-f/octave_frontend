import { createApp } from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'

Vue.use(Vuex)

// 認証情報
const authModule = {
    strict: process.env.NODE_ENV !== 'production',
    namespaced: true,
    state: {
	email: '',
	isLoggedIn: false
    },
    getters: {
	email: state => state.email,
	isLoggedIn: state => state.isLoggedIn
    },
    mutations: {
	set (state, payload) {
	    state.email = payload.user.email
	    state.isLoggedIn = true
	},
	clear (state) {
	    state.email = '',
	    state.isLoggedIn = false
	}
    },
    actions: {
	login (context, payload) {
	    return api.post('/apiv1/auth/login/', {
		'email': payload.email,
		'password': payload.password
	    })
		.then(response => {
		    localStorage.setItem('access', response.data.access)
		    return context.dispatch('reload')
			.then(user => user)
		})
	},
	logout (context) {
	    localStorage.removeItem('access')
	    context.commit('clear')
	}
    }
}

const messageModule = {
    strict: process.env.NODE_ENV !== 'production',
    namespaced: true,
    state: {
	error: '',
	warnings: [],
	info: ''
    },
    getters: {
	error: state => state.error,
	warnings: state => state.warnings,
	info: state => state.info
    },
    mutations: {
	set (state, payload) {
	    if (payload.error) {
		state.error = payload.error
	    }
	    if (payload.warnings) {
		state.warnings = payload.warnings
	    }
	    if (payload.info) {
		state.info = payload.info
	    }
	},
	clear (state) {
	    state.info = payload.info
	}
    },
    actions: {
	setErrorMessage (context, payload) {
	    context.commit('clear')
	    context.commit('set', { 'error': payload.message })
	},
	setWarningMessages (context, payload) {
	    context.commit('clear')
	    context.commit('set', { 'warnings': payload.messages })
	},
	setInfoMessage (context, payload) {
	    context.commit('clear')
	    context.commit('set', { 'info': payload.message })
	},
	clearMessages (context) {
	    context.commit('clear')
	}
    }
}

const store = new Vuex.Store({
    modules: {
	auth: authModule,
	message: messageModule
    }
})

export default store
