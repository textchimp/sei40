import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Profile.css';

const GITHUB_BASE_URL = 'https://api.github.com/users';
const GITHUB_TOKENS = '?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9';

// class Profile extends React.Component {
//
//   state = {
//     repos: [],
//     stats: {}
//   }
//
//
//   fetchGitHubData = () => {
//
//     const { user } = this.props.match.params;
//     const statsURL = `${ GITHUB_BASE_URL }/${ user }`;
//
//     axios.get( statsURL + GITHUB_TOKENS )
//     .then( (res) => {
//       console.log('stats', res.data);
//       this.setState({ stats: res.data });
//     })
//     .catch( console.warn );
//
//
//     axios.get( statsURL + '/repos' + GITHUB_TOKENS )
//     .then( (res) => {
//       console.log('repos', res.data);
//       this.setState({ repos: res.data });
//     })
//     .catch( console.warn);
//
//   } // fetchGitHubData
//
//
//   componentDidMount(){
//     // this will run once when the component is mounted on DOM;
//     // Do axios requests, and save results into state
//     this.fetchGitHubData();
//
//   } // componentDidMount
//
//
//   // We need to re-do the GitHub API request when the username
//   // prop changes (i.e. when you search for a new user while
//   // you are already on the Profile route)
//   componentDidUpdate(prevProps, prevState){
//
//     // If we don't check that this componentDidUpdate method is running
//     // specifically because our router prop has changed, we will get
//     // into an infinite loop of setState -> componentDidUpdate -> setState
//     // since out fetchGitHubData() method calls setState()
//     if( prevProps.match.params.user !== this.props.match.params.user ){
//       this.fetchGitHubData();
//     }
//     // Our fetchGitHubData() DEPENDS on the 'user' prop changing,
//     // i.e. it's a dependency of this code running.... enter Hooks!
//
//   } // componentDidUpdate
//
//
//   render(){
//
//     // const repos = this.state.repos;
//     // const stats = this.state.stats;
//     const { repos, stats } = this.state;
//
//     return (
//       <div>
//         <h2>Profile for { this.props.match.params.user }</h2>
//
//         <div className="info">
//           <h3>Stats</h3>
//
//           <strong>Name:</strong> { stats.name }
//           <br />
//
//           <img src={ stats.avatar_url}  alt={ stats.name }/>
//
//           <br />
//
//           <strong>Home page:</strong>
//             &nbsp;
//             <a href={stats.html_url} target="_blank">
//               { stats.html_url }
//             </a>
//             <br />
//
//             <strong>Public Repos:</strong> { stats.public_repos }
//             <br />
//
//
//             <strong>Followers:</strong> { stats.followers }
//             <br />
//
//         </div>{ /*  div.info   */ }
//
//
//         <div className="repos">
//           <h3>Repos</h3>
//           <ul>
//           {
//             repos.map( r => (
//               <li key={ r.id }>
//                 <a href={ r.html_url } target="_blank">{ r.name }</a>
//               </li>
//             ))
//           }
//           </ul>
//
//         </div>
//
//
//       </div>
//     );
//
//   } // render
//
// } // class Profile

// <Profile username="bruna" images="2" />

const Profile = (props) => {

  // const user = props.match.params.user;

  const [ stats, setStats ] = useState( {} );
  const [ repos, setRepos ] = useState( [] );

  const fetchGitHubData = (user) => {

    const statsURL = `${ GITHUB_BASE_URL }/${ user }`;

    axios.get( statsURL + GITHUB_TOKENS )
    .then( (res) => {
      console.log('stats', res.data);
      setStats( res.data );
    })
    .catch( console.warn );


    axios.get( statsURL + '/repos' + GITHUB_TOKENS )
    .then( (res) => {
      console.log('repos', res.data);
      setRepos( res.data );
    })
    .catch( console.warn);

  }; // fetchGitHubData

  // componentDidMount() replacement:
  // When this component is added to the DOM,
  // do the GitHub API request
  // useEffect( () => {
  //   fetchGitHubData(props.match.params.user);
  // }, [] ); // empty array means run once on mount

  // NOTE: unlike componentDidUpdate(), this useEffect with a
  // specific dependency in the array ALSO runs when the component
  // first mounts, making the above useEffect redundant!
  useEffect( () => {
    fetchGitHubData(props.match.params.user);
  }, [props.match.params.user] ); // empty array means run once on mount


  // if( repos.length === 0 ){
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h2>Details for { props.match.params.user }:</h2>


      <div className="info">
        <h3>Stats</h3>

        <strong>Name:</strong> { stats.name }
        <br />

        <img src={ stats.avatar_url}  alt={ stats.name }/>

        <br />

        <strong>Home page:</strong>
          &nbsp;
          <a href={stats.html_url} target="_blank">
            { stats.html_url }
          </a>
          <br />

          <strong>Public Repos:</strong> { stats.public_repos }
          <br />


          <strong>Followers:</strong> { stats.followers }
          <br />

      </div>{ /*  div.info   */ }


      <div className="repos">
        <h3>Repos</h3>
        <ul>
        {
          repos.map( r => (
            <li key={ r.id }>
              <a href={ r.html_url } target="_blank">{ r.name }</a>
            </li>
          ))
        }
        </ul>

      </div>

    </div>
  );

}; // Profile


export default Profile;
