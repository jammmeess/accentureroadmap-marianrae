import  React from "react";

import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Journey from "./Journey";
import Accenture from "./Accenture";
import Friends from "./Friends";
import SecondHome from "./SecondHome";
import MyTeam from "./MyTeam";
import Party from "./Party";
import Continue from "./Continue"

const Home = () => {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <main>
                <Welcome/>
                <About />
                <Journey />
                <Accenture />
                <Friends />
                <SecondHome />
                <MyTeam />
                <Party />
                <Continue />
            </main>
        </section>
    );
};

export default Home;