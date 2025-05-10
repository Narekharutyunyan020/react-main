import s from './Content.module.css'

function Content() {
  return (
    <main className="Content">
      <section className={s.text}>
        <h4>WORKS</h4>
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit.</p>
      </section>
      <div className={`container ${s.images}`}>
        <img src="/images1.png" alt="Նկար" />
        <img src="/images2.png" alt="Նկար" />
        <img src="/images3.png" alt="Նկար" />
        <img src="/images4.png" alt="Նկար" />
        <img src="/Frame 43.png" alt="Նկար" />
        <img src="/images6.png" alt="Նկար" />
        <img src="/images7.png" alt="Նկար" />
        <img src="/images8.png" alt="Նկար" />

      </div>
      <button className={s.learnMore}>learn more </button>

    </main>

  )
}

export default Content
