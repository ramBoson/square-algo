import React from "react";
import cn from "classnames";
import styles from "./Itemss.module.sass";
import Cards from "../../../components/Cards";
import Loader from "../../../components/Loader";

const Itemss = ({ className, items }) => {
  console.log("items",items)
  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>
      
        {items.map((x, index) => (
          <Cards className={styles.card} item={x} key={index} />
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Itemss;
