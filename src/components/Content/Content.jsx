import './Content.css'

function Content() {
  return (
    <main className="Content">
      <section id="text">
        <h4>WORKS</h4>
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit.</p>
      </section>
      <div className="images container">
        <img src="images1.png" alt="Նկար" />
        <img src="images2.png" alt="Նկար" />
        <img src="images3.png" alt="Նկար" />
        <img src="images4.png" alt="Նկար" />
        <img src="Frame 43.png" alt="Նկար" />
        <img src="images6.png" alt="Նկար" />
        <img src="images7.png" alt="Նկար" />
        <img src="images8.png" alt="Նկար" />

      </div>
      <button className='learnMore'>learn more </button>

    </main>

  )
}

export default Content
