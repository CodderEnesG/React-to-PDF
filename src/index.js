import React, { useRef, useState } from "react";
import { render } from "react-dom";
import Du from "./images/du.png";
import A from "./images/a.png";
import D from "./images/d.png";
import Si from "./images/si.png";
import Photo from "./images/svg.png";
import { Pie, Bar } from "react-chartjs-2";

import { useReactToPrint } from "react-to-print";
import "./App.css";

const Example = () => {
  const [add, setAdd] = useState(false);
  const [addCol, setAddCol] = useState(false);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef} className="App">
        <div className="main">
          <div className="navbar">
            <h1 className="title">The PDF</h1>
            <div className="img__section">
              <img src={Photo} className="img" alt="any" />
            </div>
          </div>
          <div className="line1"></div>
          <div className="info__section">
            <p style={{ fontWeight: "bolder" }}>Lorem ipsum dolor</p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "20px",
                fontWeight: "600",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="items__section">
              <div style={{ backgroundColor: " rgb(200, 200, 200)" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small">Lorem ipsum </p>
                </div>
              </div>

              <div style={{ backgroundColor: "#fff" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small"> Lorem ipsum </p>
                </div>
              </div>
              <div style={{ backgroundColor: " rgb(200, 200, 200)" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small">Lorem ipsum </p>
                </div>
              </div>
              <div style={{ backgroundColor: "#fff" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small"> Lorem ipsum </p>
                </div>
              </div>
              <div style={{ backgroundColor: " rgb(200, 200, 200)" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small"> Lorem ipsum </p>
                </div>
              </div>
              <div style={{ backgroundColor: "#fff" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small">Lorem ipsum </p>
                </div>
              </div>
              <div style={{ backgroundColor: " rgb(200, 200, 200)" }}>
                <div className="item">
                  <p className="small" style={{ fontWeight: "bolder" }}>
                    Lorem ipsum
                  </p>
                  <p className="small">Lorem ipsum </p>
                </div>
              </div>
            </div>

            <div className="images__section">
              <div className="block">
                <div>
                  <img alt="any" className="image" src={D} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p> Lorem ipsum </p>
                  <p>Lorem ipsum </p>
                </div>
              </div>
              <div
                className="block"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div>
                  <img alt="any" className="image" src={Du} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Lorem ipsum </p>
                  <p>Lorem ipsum </p>
                </div>
              </div>
              <div className="block">
                <div>
                  <img alt="any" className="image" src={Si} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p> Lorem ipsum </p>
                  <p>Lorem ipsum </p>
                </div>
              </div>
              <div className="block">
                <div>
                  <img alt="any" className="image" src={A} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Lorem ipsum </p>
                  <p>Lorem ipsum </p>
                </div>
              </div>
            </div>
            {add ? (
              <div
                className="Daire"
                style={{ height: "250px", padding: "30px" }}
              >
                <Pie
                  data={{
                    labels: [
                      "Lorem",
                      "Lorem",
                      "Lorem",
                      "Lorem",
                      "Lorem",
                      "Lorem",
                    ],
                    datasets: [
                      {
                        label: "# of votes",
                        data: [120, 190, 70, 100, 40, 10],
                        backgroundColor: [
                          "#095A81",
                          "#DB3911",
                          "#FE9800",
                          "#109517",
                          "#980098",
                          "#0098C5",
                        ],
                        borderColor: [
                          "#095A81",
                          "#DB3911",
                          "#FE9800",
                          "#109517",
                          "#980098",
                          "#0098C5",
                        ],
                        borderWidth: 1,
                      },
                      // {
                      //   label: 'Quantity',
                      //   data: [47, 52, 67, 58, 9, 50],
                      //   backgroundColor: 'orange',
                      //   borderColor: 'red',
                      // },
                    ],
                  }}
                  height={250}
                  width={700}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    legend: {
                      labels: {
                        fontSize: 25,
                      },
                    },
                  }}
                />
              </div>
            ) : null}
            {addCol ? (
              <div
                className="Daire"
                style={{ height: "200px", padding: "30px" }}
              >
                <Bar
                  data={{
                    labels: [
                      "Lorem",
                      "Lorem",
                      "Lorem",
                      "Lorem",
                      "Lorem",
                      "Lorem",
                    ],
                    datasets: [
                      {
                        label: "Chart",
                        data: [120, 490, 70, 100, 40, 10],
                        backgroundColor: [
                          "#095A81",
                          "#DB3911",
                          "#FE9800",
                          "#109517",
                          "#980098",
                          "#0098C5",
                        ],
                        borderColor: [
                          "#095A81",
                          "#DB3911",
                          "#FE9800",
                          "#109517",
                          "#980098",
                          "#0098C5",
                        ],
                        borderWidth: 1,
                      },
                      // {
                      //   label: 'Quantity',
                      //   data: [47, 52, 67, 58, 9, 50],
                      //   backgroundColor: 'orange',
                      //   borderColor: 'red',
                      // },
                    ],
                  }}
                  height={200}
                  width={700}
                  options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    legend: {
                      labels: {
                        fontSize: 25,
                      },
                    },
                  }}
                />
              </div>
            ) : null}
            <div></div>
          </div>
          <footer
            style={{ backgroundColor: "rgb(180, 180, 180)", marginTop: "30px" }}
          >
            <p style={{ lineHeight: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </footer>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          paddingBottom: "0px",
        }}
      >
        <button
          className="button_big"
          onClick={(e) => {
            setTimeout(() => handlePrint(), 1);
            // setPrint(true);
          }}
        >
          PDF'i indir
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {!add ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <button
              className="buttons"
              onClick={() => {
                setAdd(true);
              }}
            >
              Dairesel Grafik Ekle
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <button
                className="buttons"
                onClick={() => {
                  setAdd(false);
                }}
              >
                Dairesel Grafik Çıkar
              </button>
            </div>
          </div>
        )}
        {!addCol ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <button
              className="buttons"
              onClick={() => {
                setAddCol(true);
              }}
            >
              Sütun Grafik Ekle
            </button>
          </div>
        ) : (
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <button
                className="buttons"
                onClick={() => {
                  setAddCol(false);
                }}
              >
                Sütun Grafik Çıkar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
