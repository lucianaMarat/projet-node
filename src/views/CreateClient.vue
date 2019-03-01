 <template>
	<div class="CreateProduct">
<form >
  <div class="form-group">
    <label for="nom"> Nom:</label>
    <input type="text" class="form-control" id="name" v-model="nom">
  </div>
  <div class="form-group">
    <label for="adresse">Adresse:</label>
    <input type="number" class="form-control" id="price" v-model="adresse">
  </div>
  <div class="form-group">
    <label for="contact">Contact:</label>
    <input type="text" class="form-control" id="contact" v-model="contact">
  </div>
  <div class="form-group">
    <label for="secteur">Secteur:</label>
    <input type="number" class="form-control" id="secteur" v-model="Secteur">
  </div>
  
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, adresse, contact, Secteur)">Submit</button>
</form>
	</div>
</template>
<script>

import ClientService from "../services/ClientService.vue"
export default {
  name: 'CreateProjet',
  data () {
    return {
      nom: "",
      adresse: "",
      contact: "",
      Secteur: ""
      
    }
  },
  methods: {
    formData: function (nom, adresse, contact, Secteur){
      ClientService.CreateClient(nom, adresse, contact, Secteur)
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