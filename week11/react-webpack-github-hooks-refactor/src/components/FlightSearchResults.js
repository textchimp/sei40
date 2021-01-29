import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

// ES6 template tag function
// const searchFlights = gql`
//   query searchFlights{
//     flights {
//       flight_number
//       origin
//       destination
//     }
//   }
// `;

const searchFlights = gql`
  query searchFlights( $origin: String!, $destination: String!  ){
    flights( origin: $origin, destination: $destination ) {
      flight_number
      origin
      destination
    }
  }
`;


const FlightSearchResults = (props) => {

  // Without needing useEffect or useState to save the results,
  // this query will be re-run whenever these props change!
  const { loading, error, data } = useQuery(
    searchFlights,
    {
      variables: {
        origin: props.match.params.origin,
        destination: props.match.params.destination,
      }
    }
  );

  console.log({ loading, error, data });

  if( loading ){
    return <p>Loading...</p>;
  }

  if( error ){
    return <p>Error!</p>;
  }

  return (
    <div>
      <h2>
        Search results for flights from { props.match.params.origin } to { props.match.params.destination }
      </h2>

      <ul>
      {
        data.flights.map( f => <li>{ f.flight_number }</li> )
      }
      </ul>

    </div>
  );

}; // FlightSearchResults

export default FlightSearchResults;
