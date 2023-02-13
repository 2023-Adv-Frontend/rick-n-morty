import { gql, useQuery } from "@apollo/client";

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

const GET_ALL_EPISODES = gql`
  {
    episodes {
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

const useApollo = () => {
  return useQuery(GET_ALL_EPISODES);
};

export default useApollo;
