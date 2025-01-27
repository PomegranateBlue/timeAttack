import { useState } from "react";
import "./App.css";

function App() {
  const [medalList, setMedalList] = useState([
    { country: "대한민국", gold: 1, silver: 1, copper: 1 },
  ]);
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [copperMedal, setCopperMedal] = useState(0);

  const addMedal = (e) => {
    e.preventDefault();
    const newMedal = {
      country: country,
      gold: goldMedal,
      silver: silverMedal,
      copper: copperMedal,
    };
    if (e.target.value === null) {
      alert("입력 양식을 채워주세요");
      return;
    }
    setMedalList([...medalList, newMedal]);
    resetForm();
  };
  const updateMedal = () => {
    const updateMedal = {
      country,
      gold: goldMedal,
      silver: silverMedal,
      copper: copperMedal,
    };
    setMedalList([...medalList, updateMedal]);
    resetForm();
  };
  const deleteMedal = (country) => {
    setMedalList(medalList.filter((item) => item.country !== country));
  };

  const resetForm = () => {
    setCountry("");
    setGoldMedal(0);
    setSilverMedal(0);
    setCopperMedal(0);
  };
  return (
    <div>
      <h1>Olympic TimeAttack</h1>
      <form className="medal-form">
        <label>국가명</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          min="0"
          max="99"
        />
        <label>금메달</label>
        <input
          type="number"
          value={goldMedal}
          onChange={(e) => setGoldMedal(e.target.value)}
          required
          min="0"
          max="99"
        />
        <label>은메달</label>
        <input
          type="number"
          value={silverMedal}
          onChange={(e) => setSilverMedal(e.target.value)}
          required
          min="0"
          max="99"
        />
        <label>동메달</label>
        <input
          type="number"
          value={copperMedal}
          onChange={(e) => setCopperMedal(e.target.value)}
          required
          min="0"
          max="99"
        />
        <div className="btn-container">
          <button type="submit" onClick={addMedal}>
            추가
          </button>
          <button type="button" onClick={updateMedal}>
            업데이트
          </button>
        </div>
      </form>
      <div className="medalList-container">
        <ul>
          {medalList.map((item) => (
            <li key={item.country}>
              <label></label>
              {item.country}
              <label>금메달</label>
              {item.gold}
              <label>은메달</label>
              {item.silver}
              <label>동메달</label>
              {item.copper}
              <button onClick={() => deleteMedal(item.country)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
