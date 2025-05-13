import React, { useState, useRef, useEffect } from 'react';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const text = `Գյումրու երիտասարդական թատերախումբը հիմնադրվել է 2023 թվականին՝ նպատակ ունենալով զարգացնել երիտասարդների ստեղծագործական մտածողությունը և բեմարվեստի նկատմամբ սերը։ Մեր թատերախումբը ներգրավում է տարբեր տարիքի և փորձառության մարդկանց, ովքեր ցանկանում են զարգանալ՝ որպես դերասաններ, ռեժիսորներ կամ բեմանկարիչներ։ Մենք կազմակերպում ենք շաբաթական փորձեր, մասնակցում ենք փառատոների և ներկայացնում ենք նորարարական բեմադրություններ:Գյումրու երիտասարդական թատերախումբը հիմնադրվել է 2023 թվականին՝ նպատակ ունենալով զարգացնել երիտասարդների ստեղծագործական մտածողությունը և բեմարվեստի նկատմամբ սերը։ Մեր թատերախումբը ներգրավում է տարբեր տարիքի և փորձառության մարդկանց, ովքեր ցանկանում են զարգանալ՝ որպես դերասաններ, ռեժիսորներ կամ բեմանկարիչներ։ Մենք կազմակերպում ենք շաբաթական փորձեր, մասնակցում ենք փառատոների և ներկայացնում ենք նորարարական բեմադրություններ:`;

  useEffect(() => {
    if (showMore) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('70px'); 
    }
  }, [showMore]);

  return (
    <div style={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}>
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
        }}
      >
        <p style={{ margin: 0, lineHeight: '1.6' }}>{text}</p>
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        style={{
          background: '#007bff',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '0.5rem',
          transition: '0.3s',
        }}
      >
        {showMore ? 'Փակել' : 'Կարդալ ավելին'}
      </button>
    </div>
  );
};

export default Home;
