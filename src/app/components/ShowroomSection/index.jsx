import React from 'react';
import Styles from './Showroom.module.css';

const ShowroomSection = () => {
  return (
    <>
    <div className={Styles.Showroom} id="showroom">
    </div>
    <div className={Styles.mapContainer}>
        <div className={Styles.mapResponsive}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.5407611602318!2d18.076762076938955!3d59.340620710117115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d4468ee91bb%3A0x23a8e5aca2347e40!2sGrev%20Turegatan%2057%2C%20114%2038%20Stockholm!5e0!3m2!1ssv!2sse!4v1705502922954!5m2!1ssv!2sse"
            ></iframe>
        </div>
      <div className={Styles.rightmap}>
        <h1 className={Styles.title}>How to find us</h1>
        <h2>The showroom is open exclusively for scheduled meetings, To book a meeting, please feel free to send an email and we will coordinate a suitable time for your visit. </h2>
        <div className={Styles.info}>
          <p>Grev Turegatan 57<br/>114 38 Stockholm</p>
          <p>Opening hours:<br/>Mon–Fri: 10 am–6 pm</p>
          <p>contact details:<br/> +46 8 665 31 18<br/>info@interiorplus.com</p>
        </div>
      </div>
    </div>
      {/* <div className={Styles.showroomImg}>
        <img src="/showroomOne.jpg" alt="Showroom bild 1" />
        <img src="/showroomTwo.jpg" alt="Showroom bild 2" />
        <img src="/showroomThree.jpg" alt="Showroom bild 3" />
      </div> */}
    </>
  );
};

export default ShowroomSection;
