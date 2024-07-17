import { gql } from '~/__generated__';

export const LAUNCHES_QUERY = gql(`
  query GetLaunches {
    launches {
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      launch_date_utc
    }
  }
`);

export const LAUNCH_DETAILS_QUERY = gql(`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      launch_date_utc
      launch_site {
        site_name
      }
      links {
        article_link
        video_link
      }
    }
  }
`);
