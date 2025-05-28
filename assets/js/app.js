const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); 
/* Cambio de # a . ya que es una clase */
const $b = document.querySelector('.blog'); 
const $l = document.querySelector('.location'); 

/*   function displayUser (username){
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} */


const displayUser = async (data) => { /* Faltaba el async */
  try { /* Aqui mismo pue el try y catch para no tener 2 funciones distintas */
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${data}`);
    const datosApi = await response.json();
   
    console.log(data);
    $n.textContent = `${data.name}`; /* Cambiar a backticks y renombre parametro de username a data */
    $n.textContent = `${data.blog}`; /* Cambiar a backticks */
    $l.textContent = `${data.location}`; /* Cambiar a backticks */
         return datosApi;
  } catch (error) { 
    console.log('OH NO!');
    console.log(error);
    $n.textContent = `Algo salió mal: ${error}`
  }

}

displayUser('stolinski')