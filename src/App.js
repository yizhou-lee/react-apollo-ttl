import { useQuery, gql } from '@apollo/client';

function App() {
  const GET_LOCATIONS = gql`
    query Query {
      disasterCount
    }  
  `;

  function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return (
      <div>
        <h3>the number of disaster is {data.disasterCount}</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}

export default App;
