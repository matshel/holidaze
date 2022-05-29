// import Head from "../components/layout/Head";
// import Layout from "../components/layout/Layout";
// import axios from "axios";
// import { BASE_URL, ACCOMMODATIONS_URL, ENQUIRIES_URL } from "../constants/api";
// import Heading from "../components/common/Heading";

// export default function Home(props) {
//   console.log(props);
//   return (
//     <Layout>
//       <Head title="Home" />
//       <Heading>Home page</Heading>

//       {props.accommodations.map((accommodation) => {
//         return (
//           <div key={accommodation.id} className="game-list">
//             <h2>{accommodation.attributes.name}</h2>
//             <a href={`detailtest/${accommodation.id}`}>Enquire this</a>
//             {/* <a href={`detail/${game.id}`}>{game.attributes.name}</a> */}
//           </div>
//         );
//       })}
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   let accommodations = [];

//   const url = BASE_URL + ACCOMMODATIONS_URL;

//   try {
//     const response = await axios.get(url);
//     accommodations = response.data.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       accommodations: accommodations,
//     },
//   };
// }
