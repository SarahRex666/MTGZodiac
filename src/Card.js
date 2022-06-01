import React, { useEffect, useState } from "react";

function Card({ search, setSearch, zodiacData }) {
  const [zodiacImg, setZodiacImg] = useState("");
  const [zodiacName, setZodiacName] = useState("");
  const [zodiacDesc, setZodiacDesc] = useState("");
  const [zodiacCard, setZodiacCard] = useState("");

  useEffect(() => {
    if (search.toLowerCase() === "scorpio") {
      setZodiacName(zodiacData[7].zodiac);
      setZodiacCard(zodiacData[7].card);
      setZodiacDesc(zodiacData[7].bio);
      setZodiacImg(zodiacData[7].cardUrl);
    }
    if (search.toLowerCase() === "virgo") {
      setZodiacName(zodiacData[5].zodiac);
      setZodiacCard(zodiacData[5].card);
      setZodiacDesc(zodiacData[5].bio);
      setZodiacImg(zodiacData[5].cardUrl);
    }
    if (search.toLowerCase() === "capricorn") {
      setZodiacName(zodiacData[9].zodiac);
      setZodiacCard(zodiacData[9].card);
      setZodiacDesc(zodiacData[9].bio);
      setZodiacImg(zodiacData[9].cardUrl);
    }
    if (search.toLowerCase() === "aquarius") {
      setZodiacName(zodiacData[10].zodiac);
      setZodiacCard(zodiacData[10].card);
      setZodiacDesc(zodiacData[10].bio);
      setZodiacImg(zodiacData[10].cardUrl);
    }
    if (search.toLowerCase() === "pisces") {
      setZodiacName(zodiacData[11].zodiac);
      setZodiacCard(zodiacData[11].card);
      setZodiacDesc(zodiacData[11].bio);
      setZodiacImg(zodiacData[11].cardUrl);
    }
    if (search.toLowerCase() === "libra") {
      setZodiacName(zodiacData[6].zodiac);
      setZodiacCard(zodiacData[6].card);
      setZodiacDesc(zodiacData[6].bio);
      setZodiacImg(zodiacData[6].cardUrl);
    }
    if (search.toLowerCase() === "taurus") {
      setZodiacName(zodiacData[1].zodiac);
      setZodiacCard(zodiacData[1].card);
      setZodiacDesc(zodiacData[1].bio);
      setZodiacImg(zodiacData[1].cardUrl);
    }
    if (search.toLowerCase() === "gemini") {
      setZodiacName(zodiacData[2].zodiac);
      setZodiacCard(zodiacData[2].card);
      setZodiacDesc(zodiacData[2].bio);
      setZodiacImg(zodiacData[2].cardUrl);
    }
    if (search.toLowerCase() === "cancer") {
      setZodiacName(zodiacData[3].zodiac);
      setZodiacCard(zodiacData[3].card);
      setZodiacDesc(zodiacData[3].bio);
      setZodiacImg(zodiacData[3].cardUrl);
    }
    if (search.toLowerCase() === "leo") {
      setZodiacName(zodiacData[4].zodiac);
      setZodiacCard(zodiacData[4].card);
      setZodiacDesc(zodiacData[4].bio);
      setZodiacImg(zodiacData[4].cardUrl);
    }
    if (search.toLowerCase() === "aries") {
      setZodiacName(zodiacData[0].zodiac);
      setZodiacCard(zodiacData[0].card);
      setZodiacDesc(zodiacData[0].bio);
      setZodiacImg(zodiacData[0].cardUrl);
    }
    if (search.toLowerCase() === "sagittarius") {
      setZodiacName(zodiacData[8].zodiac);
      setZodiacCard(zodiacData[8].card);
      setZodiacDesc(zodiacData[8].bio);
      setZodiacImg(zodiacData[8].cardUrl);
    }
  }, [search]);

  return (
    <div>
      <img src={zodiacImg}></img>
      <h1>{zodiacName}</h1>
      <h3>{zodiacCard}</h3>
      <p>{zodiacDesc}</p>
    </div>
  );
}

export default Card;
