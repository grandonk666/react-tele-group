import CommunityCard from "./components/CommunityCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: "url(/img/background-homepage.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <header>
        <div className="container-header">
          <div className="blurr"></div>
          <div className="left">
            <h1 id="judul">COMUNITY</h1>
            <p id="isi">
              EarlEdu adalah aplikasi lorem Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, EarlEdu
              adalah aplikasi lorem Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, EarlEdu adalah
              aplikasi lorem Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam,
            </p>
          </div>
          <div className="right">
            <img src="/img/com-canvas.svg" alt="" />
          </div>
        </div>
      </header>
      <main>
        <div className="community-links" id="links">
          {/* <h1>List of Community Links</h1> */}
          <div className="wrapper">
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-mompreneurs.svg"
              title="Mompreneurs"
              description="join this communnity if you are a Mompreneurs"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-pregnant.svg"
              title="Pregnant"
              description="join this communnity if you are a Pregnant"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-singlemom.svg"
              title="Single Mom"
              description="join this communnity if you are a Single Mom"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-workingmom.svg"
              title="Working Mom"
              description="join this communnity if you are a Working Mom"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-specialkids.svg"
              title="Special Kids"
              description="join this communnity if you have a Special Kids"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-newborn.svg"
              title="Newborn"
              description="join this communnity if you have a Newborn"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
