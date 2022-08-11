import nailsImg from './nails.json'

export const DataModule = {
	state: () => ({
		indexSection: 0,
		allNailsImg: nailsImg
	}),

	getters: {
		getIndexSection(state) {
			return state.indexSection
		},
		getNailsImg(state) {
			return state.allNailsImg
		}
	},

	mutations: {
		setIndexSection(state, newIndex) {
			state.indexSection = newIndex
		}
	},

	actions: {
		newSectionIndex({ commit }, newIndex) {
			commit('setIndexSection', newIndex)
		}
	},

	namespaced: true
}