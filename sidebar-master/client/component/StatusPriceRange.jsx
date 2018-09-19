import React from 'react';
import styles from '../sidebar.css';

const price = ['under $10', '$11-30', '$31-60', 'above $61'];

const StatusPriceRange = ({ priceRange }) => {
  const dollarSigns = ['greySign', 'greySign', 'greySign', 'greySign'];
  for (let i = 0; i <= priceRange; i++) {
    dollarSigns[i] = 'greenSign';
  }
  return (
    <tr className={styles.statusIconRow}>
      <td>
        <div className={styles.signShift}>
          {dollarSigns.map((sign, idx) => (
            <b className={styles[sign]} key={idx}>$</b>
          ))}
        </div>
      </td>
      <td className={styles.statusPrice}>
        Price range&nbsp;&nbsp;
        <b id='price-range'>{price[priceRange]}</b>
      </td>
    </tr>
  );
}

export default StatusPriceRange;