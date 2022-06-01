import React, { useEffect, useState } from "react";

function Card({ search, setSearch }) {
  const [zodiacImg, setZodiacImg] = useState("");
  const [zodiacName, setZodiacName] = useState("");
  const [zodiacDesc, setZodiacDesc] = useState("");
  const [zodiacCard, setZodiacCard] = useState("");

  useEffect(() => {
    if (search.toLowerCase() === "scorpio") {
      setZodiacName("Scorpio");
      setZodiacCard("Thoughtseize");
      setZodiacDesc(
        "You are Thoughtseize because you came to this tournament to watch them suffer."
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373632&type=card"
      );
    }
    if (search.toLowerCase() === "virgo") {
      setZodiacName("Virgo");
      setZodiacCard("Rule of Law");
      setZodiacDesc(
        "You are Rule of Law because rules are rules and if you don't follow them I will murder you."
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466789&type=card"
      );
    }
    if (search.toLowerCase() === "capricorn") {
      setZodiacName("Capricorn");
      setZodiacCard("Primeval Titan");
      setZodiacDesc(
        "You are Primeval Titan because you are a relentlessly ambitious Earth sign. You play for the endgame, and you play to fucking win."
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=512331&type=card"
      );
    }
    if (search.toLowerCase() === "aquarius") {
      setZodiacName("Aquarius");
      setZodiacCard("Library of Alexandria");
      setZodiacDesc(
        "You are Library of Alexandria because you are here to be the smartest motherfucker in the room. "
      );
      setZodiacImg(
        "https://static.cardkingdom.com/images/magic-the-gathering/arabian-nights/library-of-alexandria-55673.jpg"
      );
    }
    if (search.toLowerCase() === "pisces") {
      setZodiacName("Pisces");
      setZodiacCard("Phyrexian Unlife");
      setZodiacDesc(
        "You are Phyrexian Unlife because if they dare try to kill you, you are sure going to make them dance for it. "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=218058&type=card"
      );
    }
    if (search.toLowerCase() === "libra") {
      setZodiacName("Libra");
      setZodiacCard("Balance");
      setZodiacDesc("You are Balance because you are kind and fair. ");
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413544&type=card"
      );
    }
    if (search.toLowerCase() === "taurus") {
      setZodiacName("Taurus");
      setZodiacCard("Ancestral Recall");
      setZodiacDesc(
        "You are Ancestral Recall because you can never have TOO many cards, am I right? "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413544&type=card"
      );
    }
    if (search.toLowerCase() === "gemini") {
      setZodiacName("Gemini");
      setZodiacCard("Splinter Twin");
      setZodiacDesc(
        "You are Splinter Twin because twins? Get it? You also like to win FAST so you can go talk shit outside with the smokers. "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=397816&type=card"
      );
    }
    if (search.toLowerCase() === "cancer") {
      setZodiacName("Cancer");
      setZodiacCard("Force of Will");
      setZodiacDesc(
        "You are Force of Will because when you say no, you mean NO. "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3107&type=card"
      );
    }
    if (search.toLowerCase() === "leo") {
      setZodiacName("Leo");
      setZodiacCard("Black Lotus");
      setZodiacDesc(
        "You are a Black Lotus because you're the start of the fucking show, ain't you?  "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card"
      );
    }
    if (search.toLowerCase() === "aries") {
      setZodiacName("Aries");
      setZodiacCard("Soul Warden");
      setZodiacDesc(
        "You are Soul Warden because you are kind, sympathetic, and seem to stick around way too long. "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=547348&type=card"
      );
    }
    if (search.toLowerCase() === "sagittarius") {
      setZodiacName("Sagittarius");
      setZodiacCard("Brainstorm");
      setZodiacDesc(
        "You are Brainstorm because you are thoughtful and powerful.  "
      );
      setZodiacImg(
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=2497&type=card"
      );
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
