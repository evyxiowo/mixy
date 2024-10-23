import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from './components/CocktailList';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';

  try {
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    const drinks = response.data.drinks || [];  // Handle case when API returns null

    return { drinks, searchTerm };
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return { drinks: [], searchTerm };  // Return empty drinks on error
  }
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  console.log(drinks);  // Debugging - ensure API response is correct

  return (
    <main>
      <h2 style={{ textAlign: 'center' }}>Search Results for "{searchTerm}"</h2>
      <CocktailList drinks={drinks} />
    </main>
  );
};

export default Landing;
