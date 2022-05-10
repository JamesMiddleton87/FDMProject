

const url = 'https://imdb-api.com/';


export async function getTopMovies(setList) {

    fetch(`${url}en/API/Top250Movies/k_a457c7lp`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log(`Got response ${JSON.stringify(json)}`);
        setList(json);
      })
      .catch(error => {
        console.error(console.error(error));
      })
      .finally(() => {
      });
  }


  export async function getDetails(setList, id) {

    fetch(`${url}en/API/Title/k_a457c7lp/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log(`Got response ${JSON.stringify(json)}`);
        setList(json);
      })
      .catch(error => {
        console.error(console.error(error));
      })
      .finally(() => {
      });
  }