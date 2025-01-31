import React from 'react'
import styles from './style';


const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <h1>Hello World!</h1>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    <div className={`${bg-primary} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>    
    
    <div className={`${bg-primary} ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats
        Business
        Billing 
        cardDeal
        Testimonial 
        Clients
      </div>
    </div>

  </div>
);

export default App