<template>

   
   <div class="col-md">
    <router-link to="/ProjetDetail">detail</router-link> 
    <center><h1>Tableau avec les salaries</h1></center>
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
      <tr v-for="salarie in salaries">
        <td>
           {{salarie.name}}
        </td>
        <td>
          <router-link to="">detail</router-link> 
        </td>
        <td>
           <router-link to="">modifier</router-link> 
        </td>
        <td>
          <router-link to="">supprimer</router-link> 
        </td>
      </tr>
    </table>
    <router-link tag="button" to="/CreateSalaries" class="btn btn-primary">Add Product</router-link> 
  </div>
</template>
<script >
import SalarieService from "../services/SalarieService.vue"
  export default {
   
   data() {
    return{
    salaries:[]
      }
    },
    created(){
      SalarieService.getSalaries()
      // fetch('')
      // .then((reponse) => {
      //  return response.json();
      // })
      .then((data) => {
        this.salaries = data;
        console.log(this.salaries);
      })

      .catch(error => {console.log(error)});
 }
}
  
</script>
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
