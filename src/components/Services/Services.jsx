import React, { useState } from 'react';
import Serv from './Services.module.css';

const Services = () => {
  const [activeMenu, setActiveMenu] = useState(null);


  const infoData = [
    {
      title: "Բասիկ պլան",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quisquam.",
      details: "Այս պլանը ներառում է լրացուցիչ ծառայություններ, որոնք կօգնեն ձեզ ավելի լավ հասկանալ մարկետինգը և թե ինչպես այն ճիշտ կառավարել ձեր բիզնեսում։"
    },
    {
      title: "Ընդլայնված պլան",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quisquam.",
      details: "Այս պլանը նախատեսում է առավելագույն աջակցություն, որը կօգնի ձեզ իրականացնել ռազմավարություններ, որոնք ապահովում են հաջողություն։"
    },
    {
      title: "Պրեմիում պլան",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quisquam.",
      details: "Պրեմիում պլանը ներառում է պրոֆեսիոնալ դասընթացներ, մենթորություն և անհատական աջակցություն։"
    },
  ];

  const toggleMenu = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  return (
    <>
      <section className={Serv.text}>
        <h4>WORKS</h4>
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit.</p>
      </section>

      <div className={Serv.main}>
        {infoData.map((item, index) => (
          <section key={index} className={Serv.infos}>
            <div className={Serv.info}>
              <div className={Serv.title}>
                <h4>{item.title}</h4>
                <p>$100/month</p>
                <p>{item.description}</p>
              </div>

              <div className={Serv.vectors}>
                {[...Array(5)].map((_, i) => (
                  <div className={Serv.vector} key={i}>
                    <img src="/check-lg 1.png" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                ))}

                <button
                  className={Serv.learnMore}
                  onClick={() => toggleMenu(index)}
                >
                  {activeMenu === index ? 'Փակել' : 'բացել'}
                </button>
              </div>
            </div>

            <div
              className={`${Serv.menuBlock} ${activeMenu === index ? Serv.active : ''}`}
            >
              <h3>Լրացուցիչ ինֆո</h3>
              <p>{item.details}</p>
              <button onClick={() => setActiveMenu(null)} className={Serv.closBtn}>Փակել</button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Services;
