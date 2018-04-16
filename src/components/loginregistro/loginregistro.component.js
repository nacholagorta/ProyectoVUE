export default {
  name: 'login-registro',
  components: {
  },
  props: [],
  data () {
    return {
 blLoginVisible:true,
 sTitulo:"LOGIN!!!"
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
clickDeBotonRegistrarse:function(event){
  this.blLoginVisible = false;
  this.sTitulo = "REGISTER!";
}
  }
}
