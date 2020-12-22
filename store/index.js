
export const state = () => ({
  techModal: false,
  blogFilter: false
})

export const mutations = {
  modal (state, name) {
    state[`${name}`] = !state[`${name}`]
  }
}
