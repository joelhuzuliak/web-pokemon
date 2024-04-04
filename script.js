// Función para generar un ID aleatorio entre 1 y 500
function generateId() {
  return Math.floor(Math.random() * 500) + 1;
}

// Función asincrónica para obtener información de un Pokémon por su ID
async function getPokemon() {
  try {
    // Generar un ID aleatorio
    const id = generateId();

    // Realizar una solicitud GET a la API de Pokémon usando Axios
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    // Extraer los datos del Pokémon de la respuesta
    const pokemonData = response.data;

    // Obtener el nombre del Pokémon
    const pokemonName = pokemonData.name;

    // Obtener la URL de la imagen del Pokémon
    const imageUrl = pokemonData.sprites.other.dream_world.front_default;

    // Actualizar el nombre del Pokémon en el h2
    document.querySelector('.pokeName').textContent = pokemonName;

    // Actualizar la imagen del Pokémon en el atributo src de la imagen
    document.querySelector('img').src = imageUrl;
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error('Error al obtener datos del Pokémon:', error);
    throw error; // Puedes lanzar el error o manejarlo de otra manera según tus necesidades
  }
}

// Agregar un eventListener al botón para obtener un Pokémon aleatorio
document.getElementById('btn').addEventListener('click', getPokemon);

// Llamar a getPokemon al cargar la página para mostrar un Pokémon inicial
getPokemon();