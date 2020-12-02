// Milestone 1: Creare un layout base con una searchbar (una input e un button) in
// cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo,
// // cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha
// scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare a schermo i
// seguenti valori per ogni film trovato: Titolo Titolo Originale Lingua Voto 
const myApp = new Vue({
  el:'#root',
  data:{
    films:[],
    inputSearch:''
  },
  methods:{
    searchFilm(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params:{
          'api_key':'bc619d4b3b0d73040c2b1b6d3b761dd9',
          'query': this.inputSearch
        }
      })
      .then((film) => {
        this.films.push(...film.data.results)
        console.log(film)
      })
    }
  }
})
