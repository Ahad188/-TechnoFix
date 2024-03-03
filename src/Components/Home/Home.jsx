import { Banner } from "../Banner/Banner";
import { Collaborate } from "../Collaborate/Collaborate";
import { Header } from "../Header/Header";
import { SubBanner } from "../SubBanner/SubBanner";
import { WorkTogther } from "../Work/WorkTogther";

 

 

const Home = () => {
     return (
          <div>
          <Header></Header>
          <Banner></Banner>
          <SubBanner></SubBanner>
          <Collaborate></Collaborate>
           <WorkTogther></WorkTogther>
          </div>
     );
};

export default Home;