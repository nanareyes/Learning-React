import React from "react";
import './List.css'

const List = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export { List };
