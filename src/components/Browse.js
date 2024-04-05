import Header from './Header'
import useFetchMovies from '../hooks/useFetchMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
   useFetchMovies();
 
  return (
    <div>
      <Header className=""/>
      <div>
      <MainContainer/>
      <SecondaryContainer/>
      </div>

    </div>
  )
}

export default Browse;