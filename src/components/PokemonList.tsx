import React, { useEffect, useState } from "react";
import { Detail } from "../App";
import { Ability } from "../interface"; // Import Ability từ file interface
import "./pokemon.css";

interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities: Ability[] | undefined; // Sử dụng kiểu Ability[]
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);

  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpened: false,
    });
  };

  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="pokemon" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Abilities:</p>
              {abilities?.map((ab) => (
                <div key={ab.ability.name}>{ab.ability.name}</div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;