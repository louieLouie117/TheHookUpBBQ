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
            <button>Location</button>
        </header>

        <main>
        <img src="/assets/FlowersLeft.png" alt="" />

        <ul>
            <li>
                <img src="/assets/FoodItemPhoto.png" alt="" />
                <section>
                    <h2>Food Item</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a mollitia dolores placeat modi e.</p>
                </section>
                <p>$6.00</p>
            </li>

            <li>
                <img src="/assets/FoodItemPhoto.png" alt="" />
                <section>
                    <h2>Food Item</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a mollitia dolores placeat modi e.</p>
                </section>
                <p>$6.00</p>
            </li>

        </ul>


        </main>

        <footer>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa alias ex, modi voluptates laborum doloribus eum saepe, nisi recusandae fuga architecto eveniet natus necessitatibus maiores culpa, beatae incidunt nulla?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sit quod eius quidem? Dolorem at odio excepturi nam magnam dignissimos ex fuga nesciunt quasi optio quis, consectetur ratione magni recusandae?</p>
        </footer>

    </div>
  )
}


export default LandingPage