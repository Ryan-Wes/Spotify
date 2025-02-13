import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* ITEM LIST DE ARTISTAS */}
      <ItemList title="Artistas" items={10}/>

      {/* ITEM LIST DE MÚSICAS */}
      <ItemList title="Músicas" items={20}/>
    </div>
  );
};

export default Main;
