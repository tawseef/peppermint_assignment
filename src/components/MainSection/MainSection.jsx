import { useContext, useState } from "react";
import "./Mainsection.style.css";
import { DataContext } from "../context/context";
import Calculation from "../Calculation/Calculation";

function MainSection() {
  const [input, setInput] = useState(null);
  const data = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    data.setTotal(input);
  };
  return (
    <>
      {!data.total ? (
        <div>
          <div className="inputTotal">
            <div name="total" className="labelTitle">
              ENTER TOTAL EXPENSE
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter Total Expense"
                value={data.total}
                onChange={(e) => setInput(e.target.value)}
                className="inputTotalBox"
              />
            </div>
            <div>
              <button className="button" onClick={(e) => handleSubmit(e)}>
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Calculation />
      )}
    </>
  );
}

export default MainSection;
