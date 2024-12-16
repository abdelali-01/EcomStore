import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Topbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleSelectChange = (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme !== theme) {
      toggleTheme();
    }
  };
  return (
    <div
      className="  text-white "
      style={{
        backgroundColor: "var(--dark)",
      }}
    >
      <div className="container-md p-3 gap-3 d-flex align-items-center">
        <div
          className="topBarHot"
          style={{
            backgroundColor: "var(--red)",
            padding: "3px 10px",
            borderRadius: "16px",
          }}
        >
          <span className="fw-bold">HOT</span>
        </div>
        <div>  
          <span className="">Free express shipping</span>
        </div>
        <div className="flex-grow-1"></div>
        <div className="topBarRight d-flex  align-items-center gap-2">
          <div className="modeSelect" onClick={handleSelectChange}>
              {toggleTheme === "light" ? <i class="fa-regular fa-sun"></i> : <i class="fa-regular fa-moon"></i>}
          </div>
          <div className="langSelect">
            <select
              name=""
              id=""
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                outline: "none",
              }}
            >
              <option value="Ar" className="text-black">
                AR
              </option>
              <option value="En" className="text-black" selected>
                EN
              </option>
            </select>
          </div>
          <div className="socialMedia">
            <i className="fa-brands fa-instagram fs-5 me-2" role="button"></i>
            <i className="fa-brands fa-square-facebook fs-5 me-2" role="button"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
