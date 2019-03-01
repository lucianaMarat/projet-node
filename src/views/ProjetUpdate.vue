<template lang="html">

    <form >
        <input type="text" v-model="name">
        <button type="button"  name="button" v-on:click="formData(name)">editer</button>
    </form>

</template>

<script>
import ProjetService from "../services/ProjetService.vue"
export default {
  data () {
    return {
      projets:[],
     name: "",
     description: "",
	 debut: "",
	 fin: "",
	 montant: "",
	 statut: ""
    }
  },
  created () {
    let paramsId = this.$route.params.name
    ProjetService.getProject(paramsId)
  },
  methods: {
    formData: function (name) {
      ProjetService.EditProject(name)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
					