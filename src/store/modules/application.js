const state = {
    toggleSideNavOn: false,
    applicationName: "ระบบสอบวัดความรู้ก่อนสำเร็จการศึกษา",
    lang: 'TH'
}

const getters = {
    getStatusSideNav: (state) => {
        return state.toggleSideNavOn;
    },
    getApplicationName: (state)=> {
        return state.applicationName;
    }
}

const mutations = {
    toggleSideNav: (state, payload) => {
        state.toggleSideNavOn = !state.toggleSideNavOn
        if(state.toggleSideNavOn) {
            document.getElementById("mfu-ee-sidenav").style.width = "250px";
            document.getElementById("mfu-ee-container").style.marginLeft = "250px";
            document.getElementById("mfu-ee-navbar").style.marginLeft = "250px";
        } else {
            document.getElementById("mfu-ee-sidenav").style.width = "0";
            document.getElementById("mfu-ee-container").style.marginLeft= "0";
            document.getElementById("mfu-ee-navbar").style.marginLeft = "0";
        }
    }
}

const actions = {
    toggleSideNav: (context, payload) => {
        context.commit('toggleSideNav', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}