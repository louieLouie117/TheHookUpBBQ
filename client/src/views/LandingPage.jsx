import React from 'react'

const LandingPage = props => {
  return (
    <div className='LandingPage-Container'>
        <header>
            <img src="/assets/Logo.png" alt="" />
            <div>
                <h1>The Hook Up</h1>
                <p>Island Style BBQ</p>
            </div>
                
                <a href="https://streetfoodfinder.com/thehookup_671"><button>location</button></a>
        </header>

        <main>
        <img src="/assets/FlowersLeft.png" alt="" />

        <ul>
            <li>
                <img src="/assets/FoodItems/Lumpia.png" alt="" />
                <section>
                    <h2>Lumpias(4)</h2>
                    <p>Choice of Shrimp, Pork or Chicken served with sweet chili.</p>
                </section>
                <p>$6.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/CrabPatties.png" alt="" />
                <section>
                    <h2>Crab Patties</h2>
                    <p>Fired fritters loaded with shredded crab and vegetables.</p>
                </section>
                <p>$8.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/KadunPika.png" alt="" />
                <section>
                    <h2>Kadun Pika</h2>
                    <p>Marinated chicken in soy sauce, vinegar and onions served with rice, potato salad, cucumber daigo salad.</p>
                </section>
                <p>$16.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/BBQShortRibs.png" alt="" />
                <section>
                    <h2>BBQ Short Ribs</h2>
                    <p>BBQ Short Rubs served with red rice,  potato salad, cucumber daigo salad.</p>
                </section>
                <p>$16.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/BBQTeriyakiChicken.png" alt="" />
                <section>
                    <h2>BBQ Teriyaki Chicken</h2>
                    <p>Marinated chicken in soy sauce, vinegar and onions served with rice, potato salad, cucumber daigo salad..</p>
                </section>
                <p>$16.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/TinalaKatne.png" alt="" />
                <section>
                    <h2>Tinala’ Katne</h2>
                    <p>Cured smoked beef or pork seasoned to perfection served with red rice, potato salad, cucumber daigo salad, and fina’dene sauce.</p>
                </section>
                <p>$16.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/TheHookUp.png" alt="" />
                <section>
                    <h2>The Hook Up</h2>
                    <p>Marinated chicken in soy sauce, vinegar and onions served with rice, potato salad, cucumber daigo salad.</p>
                </section>
                <p>$18.00</p>
            </li>

            <li>
                <img src="/assets/FoodItems/LatiyaDessert.png" alt="" />
                <section>
                    <h2>Latiya Dessert</h2>
                    <p>Yellow cake with a light creamy custard-like pudding topped with cinnamon powder.</p>
                </section>
                <p>$8.00</p>
            </li>
      

        </ul>


        </main>

        <footer>
            <img src="/assets/FlowersRight.png" alt="" />
            <aside>
                <h2>Watch Live</h2>
                <img src="/assets/LiveVideo.png" alt="" />

                <footer>
                <img src="/assets/InstagramPhoto.png" alt="" />

                    <section>
                        <p>Find us on instagram </p>
                        <a href="https://www.instagram.com/thehookup_671/">@thehookup_671</a>
                        <a href="https://www.instagram.com/thehookup_671/">
                            <img src="/assets/IconInstagram.png" alt="" />
                        </a>

                    </section>
                </footer>

            </aside>

          

        
        </footer>

    </div>
  )
}


export default LandingPage