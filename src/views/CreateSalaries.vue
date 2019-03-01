 <template>
	<div class="CreateProduct">
<form >
  <div class="form-group">
    <label for="name"> Nom:</label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div>
  <div class="form-group">
    <label for="prenom">Prenom:</label>
    <input type="text" class="form-control" id="prenom" v-model="prenom">
  </div>
  <div class="form-group">
    <label for="username">username:</label>
    <input type="text" class="form-control" id="username" v-model="username">
  </div>
  <div class="form-group">
    <label for="naissance">naissance:</label>
    <input type="number" class="form-control" id="naissance" v-model="naissance">
  </div>
  <div class="form-group">
    <label >adresse:</label>
    <input type="text" class="form-control" id="telephone" v-model="adresse">
  </div>
  <div class="form-group">
    <label for="telephone">telephone:</label>
    <input type="number" class="form-control" id="telephone" v-model="teleplone">
  </div>
   <div class="form-group">
    <label for="mail">mail:</label>
    <input type="Email" class="form-control" id="mail" v-model="mail">
  </div>
   <div class="form-group">
    <label for="poste">poste:</label>
    <input type="text" class="form-control" id="poste" v-model="poste">
  </div>
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(name, description, debut, fin, montant)">Submit</button>
</form>
	</div>
</template>
<script>

import SalarieServices from "../services/SalarieService.vue"
export default {
  name: 'CreateProjet',
  data () {
    return {
      nom: "",
      prenom: "",
      username: "",
      naissance: "",
      adresse: "",
      telephone:"",
      mail:"",
      poste: ""
    }
  },
  methods: {
    formData: function (nom, prenom, username, naissance,adresse, telephone, mail, poste){
      SalarieService.CreateSalaries(nom, prenom, username, naissance,adresse, telephone, mail, poste)
     }
  }
};
</script>

<style scoped>
form{
  width: 50%;
  margin: 10px auto;
}
</style>