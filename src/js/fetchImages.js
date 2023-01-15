export const fetchImages = async (inputValue, pageNumber) => {
  return await fetch(
    `https://pixabay.com/api/?key=29588079-fbc492831fdad231bf7222b96&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNumber}`
  )
    .then(async res => {
      if (!res.ok) {
        if (res.status === 404) {
          return [];
        }
        throw new Error(res.status);
      }
      return await res.json();
    })
    .catch(error => {
      console.error(error);
    });
};
