import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.component('Areas', {
    $validates: 1,
    components:{
        // tabla:() => import('./tabla/tabla.vue')
    },
	data () {
		return {
			src_persona: "statics/img/8.png",
			active_transition: false
		};
	},
	computed: {
		// ...mapGetters({
        //     isLogin: "Auth/isLogin", isAdmin: "Auth/isAdmin"
        // })
	},
	methods: {

	},
	created () {
	},
	mounted () {
	},
	updated () {
	},
    watch: {

    }

})
