<template>
  <h1>bonjour</h1>
</template><template>

   
   <div class="col-md">
    <center><h1>Tableau des Clients</h1></center>
<Navbar/>
 
    <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          
        </th>
        <th>
          
        </th>
        <th>
          
        </th>
      </tr>
      <tr v-for='projet in projets' :key = projet.name>
        <td>
           {{projet.name}}
        </td>
        <td>
          <router-link to="ProjetDetail">detail</router-link>
        </td>
        <td>
           <router-link to="ProjetUpdate">modifier</router-link> 
        </td>
        <td>
          <router-link to="">supprimer</router-link> 
        </td>
      </tr>
    </table>
    <router-link tag="button" to="/CreateProjet" class="btn btn-primary">Add Product</router-link> 
  </div>
</template>
<script >
import ProjetService from "../services/ProjetService.vue"
  export default {
   
   data() {
    return{
    projets:[]
      }
    },
    created(){

      ProjetService.getProjet()
      // fetch('')
      // .then((reponse) => {
      //  return response.json();
      // })
      .then((data) => {
        this.projets = data;
        console.log(this.projets);
      })

      .catch(error => {console.log(error)});
 }
}
  
</script>
<style scoped>
  table td, table th{
    border: 3px solid black;
    font-size: 20px;
  }
  table th{
    font-weight: bold;
  }
  table{
    margin: 10px auto;
  }
</style>