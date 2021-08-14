import { createStore } from 'vuex'


  const state={

    payload:[
      {}
    ]
  }

  const mutations= {
    editText( state,payload) {
      state.payload=payload;
      console.log("store",state.text,state.id)
    },
  }


export default createStore({
  state,
  mutations
})