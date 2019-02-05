// Fetch from FourSquare
fetchVenues = () => {
    const parameters = {
      query: 'gluten free',
      lat: 41.3818,
      lng: 2.1685,
      limit: 100,
      v: "20181412"
    }
 
    let baseUrl = 'https://api.foursquare.com/v2/venues/';
    let url = baseUrl + `explore?client_id=CLIENTIDHERE&client_secret=CLIENTSECRETHERE&v=${parameters.v}&ll=${parameters.lat},${parameters.lng}&limit=${parameters.limit}&categoryId=4bf58dd8d48988d16d941735,4bf58dd8d48988d1d3941735,4bf58dd8d48988d1c9941735,4bf58dd8d48988d1c0941735,4bf58dd8d48988d1c1941735,4bf58dd8d48988d110941735&intent=browse&radius=30000&query=${parameters.query}`;
 
 
    // Fetching
    fetch(url)
      .then(response =>
        response.json())
      .then(data => {
        this.setState({
          venues: data.response.groups[0].items, filteredVenues: data.response.groups[0].items
        },
 
          this.loadMap())
      })
      .catch(err => alert('Error occurs ' + err))
  }


  axiosVenues = () => {
    const apiEndpoint = "https://api.foursquare.com/v2/venues/explore?"
    const foursquareParameters = {
        client_id: "K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K",
        client_secret: "O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V",
        query: "food",
        near: "Malmo, Sweden",
        v: 20182507
    }

    axios.get(apiEndpoint + new URLSearchParams(foursquareParameters))
        .then(response => {
            
            console.log(response)
        })
        .catch(error => {
            alert("Error: Couldn't retrieve data from Foursquare.")
            console.log(`An error occurred: ${error}`)
        })
}