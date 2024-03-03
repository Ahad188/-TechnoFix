import { Banner } from "../Banner/Banner";
import { BuiltWay } from "../BuiltWay/BuiltWay";
import { Collaborate } from "../Collaborate/Collaborate";
import { Connect } from "../Connect/Connect";
import { Header } from "../Header/Header";
import { SubBanner } from "../SubBanner/SubBanner";
import { Ways } from "../Ways/Ways";
import { WorkTogther } from "../Work/WorkTogther";

 

 

const Home = () => {
     return (
          <div>
          <Header></Header>
          <Banner></Banner>
          <SubBanner></SubBanner>
          <Collaborate></Collaborate>
           <WorkTogther></WorkTogther>
           <Connect></Connect>
           <Ways></Ways>
            <BuiltWay></BuiltWay>
          </div>
     );
};

export default Home;