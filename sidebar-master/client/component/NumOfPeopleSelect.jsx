import React from 'react';
import styles from '../sidebar.css';

const NumOfPeopleSelect = () => (
  <span className={styles.peopleContainer}>
    <img src="images/people.PNG" className={styles.peopleIcon} alt="#" />
    <select defaultValue="two" className={styles.select}>
      <option value="one">1 person</option>
      <option value="two">2 people</option>
      <option value="three">3 people</option>
      <option value="four">4 people</option>
      <option value="five">5 people</option>
    </select>
    <img src="images/downarrow.PNG" className={styles.arrowIcon} alt="#" />
  </span>
);

export default NumOfPeopleSelect;
