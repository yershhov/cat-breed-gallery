import axios from 'axios';

export function getBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function getRandomCat(breedId: string) {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}
