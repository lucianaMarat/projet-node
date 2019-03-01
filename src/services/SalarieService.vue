<script>
const myApiUrl = 'http://localhost:3000/accueil/salaried/creationsalaried'
const sal1 = 'http://localhost:3000/accueil/project/creationproject'
const sal2 = 'http://localhost:3000/accueil/project/creationproject'
export default {
  getSalaries () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createSalaries (nom, prenom, username, naissance,adresse, telephone, mail, poste) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
      'prenom': prenom,
      'username': username,
      'naissance': naissance,
      'adresse': adresse,
      'telephone':telephone,
      'mail':mail,
      'poste': poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteSalaries (id) {
  },
  EditSalaries (nom, prenom, username, naissance,adresse, telephone, mail, poste) {
    return fetch(myApiUrl + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
           'nom': nom,
      'prenom': prenom,
      'username': username,
      'naissance': naissance,
      'adresse': adresse,
      'telephone':telephone,
      'mail':mail,
      'poste': poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getSalarie (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>