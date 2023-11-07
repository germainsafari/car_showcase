export async function fetchCars(filters: FilterProps) {
	const headers = {
		'X-RapidAPI-Key': '488bcdbef0mshf2bf35055247fc5p16124bjsnbece7e18b98f',
 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
}

const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
	headers : headers,
}); 

const result = await response.json();

return result;
