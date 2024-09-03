import { useState } from 'react'
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input
  const [allMovies, setAllMovies] = useState([]); // State to store combined movie data
  const [filteredMovies, setFilteredMovies] = useState([]); // State to store filtered movies

  // Step 2: Combine JSON files by fetching each and merging them
  useEffect(() => {
    // Define a function to fetch and combine data from all JSON files
    const fetchMovies = async () => {
      try {
        // Fetch data from each JSON file
        const response2000s = await fetch('../public/movies-2000s.json');
        const response2010s = await fetch('../public/movies-2010s.json');
        const response2020s = await fetch('../public/movies-2020s.json');

        // Convert each response to JSON
        const movies2000s = await response2000s.json();
        const movies2010s = await response2010s.json();
        const movies2020s = await response2020s.json();

        // Combine all movie data into a single array
        const combinedMovies = [...movies2000s, ...movies2010s, ...movies2020s];

        // Set the combined movie data into state
        setAllMovies(combinedMovies);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    // Call the function to fetch and combine movie data
    fetchMovies();
  }, []);

  // Effect to filter movies based on the search query
  useEffect(() => {
    // Convert search query to lowercase to make the search case-insensitive
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter movies based on title, year, genres, or cast
    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(lowerCaseQuery) ||
      movie.year.toString().includes(lowerCaseQuery) ||
      movie.genres.some((genre) => genre.toLowerCase().includes(lowerCaseQuery)) ||
      movie.cast.some((actor) => actor.toLowerCase().includes(lowerCaseQuery))
    );

    setFilteredMovies(filtered); // Update the filtered movies list
  }, [searchQuery, allMovies]);

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      {/* Search bar component */}
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="movie-container">
        {/* Display filtered movie cards */}
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
