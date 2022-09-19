import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors.userName);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
      style={{
        position: "absolute",
        top: "40%",
        left: "42%",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2>Enter Name</h2>
        <input
          type="text"
          {...register("userName", { required: true, minLength: 2 })}
        />
        {errors.userName && errors.userName.type === "required" && (
          <p className="error">Name is required</p>
        )}
        {errors.userName && errors.userName.type === "minLength" && (
          <p className="error">MinLenght of two character required</p>
        )}
     
      <button className="btn" type="submit">Enviar pedido</button>
      </div>
    </form>
  );

  /*
CREATE PDF FDORM DIV


import React, { useState } from "react";
import TestHijo from "./TestHijo";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import ReactPDF from '@react-pdf/renderer';



import { PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  square: {
    padding: " 5px",
    width: "30%",
    border: "1px solid #000",
  },
  squareHead: {
    padding: " 5px",
    width: "30%",
    border: "1px solid #000",
    backgroundColor: "#343a40",
    color: "#fff",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "60px"
  },
});

export default function App() {
  const nombres = ["Luciano", "Alberto", "Miko"];

  const apellidos = [
    {
      apellido: "aaaa",
    },
    {
      apellido: "sssss",
    },
    {
      apellido: "ddd",
    },
    {
      apellido: "ffff",
    },
  ];

  const api = () => {
    ReactPDF.render(document.getElementById("baba"), `example.pdf`);
  }

  const baba = return (
<Document id="baba">
        <Page size="A4" style={{ padding: "30px" }}>
          <View style={styles.flex}>
            <Text style={styles.squareHead}>Nombre 1</Text>
            <Text style={styles.squareHead}>Nombre 2</Text>
            <Text style={styles.squareHead}>Nombre 3</Text>
          </View>
        </Page>
      </Document>
  )

  return (
    <div className="container">
      
      <button onClick={api}>dwad</button>
    </div>
  );
/*

<PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={{ padding: "30px" }}>
              <View style={styles.flex}>
                <Text style={styles.squareHead}>Nombre 1</Text>
                <Text style={styles.squareHead}>Nombre 2</Text>
                <Text style={styles.squareHead}>Nombre 3</Text>
              </View>
              <View style={styles.flex}>
                {nombres
                  ? nombres.map((nombre, index) => {
                      return (
                        <Text style={styles.square} key={index}>
                          {nombre}
                        </Text>
                      );
                    })
                  : ""}
              </View>
            </Page>
          </Document>
        }
        fileName="tabletest.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a",
        }}
      >
        "Download Pdf"
      </PDFDownloadLink>
  //<PdfDocument data={movieDetails} />

  //GEO LOCATION

  /*
  import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import useGeolocation from "react-hook-geolocation";
import axios from "axios";

function App() {
  const geolocation = useGeolocation();
  const [ubicacion, setUbicacion] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      function success() {
        let latitude = geolocation.latitude;
        let longitude = geolocation.longitude;
        let locationCall = `https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=SMhqgQ-moshBOKyhLfiZIVcp5OY5O1gRdOYm5i3Rgg0&at=${latitude},${longitude}&lang=en-US`;
        axios(locationCall)
          .then((response) => {
            const { data } = response;
            let ubi = data.items[0].title;
            setUbicacion(ubi);
          })
          .error(() => {
            console.log("error");
          });
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert(
        "No cuentas con los permisos necesarios para acceder a esta informacion"
      );
    }
  });

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (ubicacion) {
    return (
      <div>
         <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      <h1>{ubicacion}</h1>
      </div>
    );
  } else {
    return (
      <div>
      <h1>Debes autorizar tu ubicacion</h1>
      </div>
    );
  }
}

export default App;
  /////////////////////////////////////////////
  /*
    if (navigator.geolocation){
     
/*
if (geolocation.longitude) {
  let locationCall =
      `https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=SMhqgQ-moshBOKyhLfiZIVcp5OY5O1gRdOYm5i3Rgg0&at=${geolocation.latitude},${geolocation.longitude}&lang=en-US`;
    axios(locationCall)
      .then((response) => {
        const { data } = response;
        console.log(data)
        let ubi = data.items[0].title
        setUbicacion(ubi);
        console.log(ubi)
      })
      .error(() => {
        console.log("error");
      });
}



  /*
const lili = () => {
  let lolo = "https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=SMhqgQ-moshBOKyhLfiZIVcp5OY5O1gRdOYm5i3Rgg0&at=40.730610,-73.935242&lang=en-US"
  axios.get(lolo)
  .then((response) => {
    console.log(response);
  })
  .error(() => {
    console.log("error");
  })
}
/*
  React.useEffect(() => {
    
  }, []);


*/

  /*
<div className="app">
      {loading === true ? <h1>Loading…</h1> : <h1>Hello world!</h1>}
    </div>



<div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100vh",
        margin: "40px",
      }}
    >
      <h4>Rendering List of components with array of data</h4>

      {users.map((Users, index) => {
        return (
          <div key={index}>
            {Users.id === todoEditing ? (
              <button
                onClick={() => setTodoEditing(null)}
              >
                <div>Name of student {Users.name}</div>
              </button>
            ) : (
              <div
                onClick={() => setTodoEditing(Users.id)}
              >
                <div>Roll number of student {Users.rollNo}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
import React, { useState } from "react";
import html2canvas from "html2canvas";

const App = () => {
  const [embarque1, setEmbarque1] = useState(false);
  const [embarque2, setEmbarque2] = useState(false);
  const [embarque3, setEmbarque3] = useState(false);

  const Embarque1 = (e) => {
    e.preventDefault();
    setEmbarque1(!embarque1);
  };
  const Embarque2 = (e) => {
    e.preventDefault();
    setEmbarque2(!embarque2);
  };
  const Embarque3 = (e) => {
    e.preventDefault();
    setEmbarque3(!embarque3);
  };

  return (
    <div>
      <h1
        style={{
          margin: "20px",
          fontSize: "2.5rem",
          fontWeight: "500",
          lineHeight: "1.2",
        }}
      >
        Tablero de Embarcaciones
      </h1>
      <div className="cont" onClick={Embarque1}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "45%",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: "5px 0px",
                }}
              >
                DON DIODORO
              </h2>
              <img
                src="/img/flecha.png"
                style={{
                  width: "30px",
                  height: "15px",
                  margin: "0px 10px",
                }}
              />
              <h3
                style={{
                  margin: "5px 0px",
                }}
              >
                Monte's Seafood Emporium, Inc.
              </h3>
            </div>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              FECHA DE ENTREGA: 25/07/2022 (6 dias)
            </p>
          </div>
          {embarque1 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>CARGA:</p>
                  <p style={{ fontWeight: "bold" }}>CANANE FISH</p>
                  <p style={{ fontWeight: "bold" }}>BOUQUINETE FISH</p>
                  <p style={{ fontWeight: "bold" }}>BESUGO FISH</p>
                </div>

                <p
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  PESO ESTIMADO:{" "}
                  <span style={{ fontWeight: "bold", marginTop: "0.9em" }}>
                    550KG
                  </span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "269px",
                  justifyContent: "space-between",
                }}
              >
                <button className="btn-embarque packing">Packing List</button>
                <button className="btn-embarque invoice">Invoice</button>
                <button className="btn-embarque factura">Factura</button>
              </div>
            </div>
          ): null}
        </div>
      </div>

      <div className="cont" onClick={Embarque2}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "45%",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: "5px 0px",
                }}
              >
                SAN RAMON
              </h2>
              <img
                src="/img/flecha.png"
                style={{
                  width: "30px",
                  height: "15px",
                  margin: "0px 10px",
                }}
              />
              <h3
                style={{
                  margin: "5px 0px",
                }}
              >
                Kasmart USA Inc
              </h3>
            </div>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              FECHA DE ENTREGA: 30/07/2022 (9 dias)
            </p>
          </div>
          { embarque2 ? 
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "300px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>CARGA:</p>
                <p style={{ fontWeight: "bold" }}>GUACAMAYO FISH</p>
                <p style={{ fontWeight: "bold" }}>CABRILLA FISH</p>
              </div>

              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                PESO ESTIMADO:{" "}
                <span style={{ fontWeight: "bold", marginTop: "0.9em" }}>
                  740KG
                </span>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "269px",
                justifyContent: "space-between",
              }}
            >
              <button className="btn-embarque packing">Packing List</button>
              <button className="btn-embarque invoice">Invoice</button>
              <button className="btn-embarque factura">Factura</button>
            </div>
          </div> : null}
        </div>
      </div>

      <div className="cont" onClick={Embarque3}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "45%",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: "5px 0px",
                }}
              >
                DON JOSE
              </h2>
              <img
                src="/img/flecha.png"
                style={{
                  width: "30px",
                  height: "15px",
                  margin: "0px 10px",
                }}
              />
              <h3
                style={{
                  margin: "5px 0px",
                }}
              >
                RAFFIELD FISHERIES INC.
              </h3>
            </div>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              FECHA DE ENTREGA: 04/08/2022 (14 dias)
            </p>
          </div>
          {embarque3 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>CARGA:</p>
                  <p style={{ fontWeight: "bold" }}>MERO ROJO FISH</p>
                  <p style={{ fontWeight: "bold" }}>NEGRILLO FISH</p>
                  <p style={{ fontWeight: "bold" }}>ABADEJO FISH</p>
                  <p style={{ fontWeight: "bold" }}>CUBERA FISH</p>
                </div>

                <p
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  PESO ESTIMADO:{" "}
                  <span style={{ fontWeight: "bold", marginTop: "0.9em" }}>
                    1200KG
                  </span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "269px",
                  justifyContent: "space-between",
                }}
              >
                <button className="btn-embarque packing">Packing List</button>
                <button className="btn-embarque invoice">Invoice</button>
                <button className="btn-embarque factura">Factura</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  */
  /*
  <div
    id="etiquetaAerea"
    className="zima"
    style={{
display: "none",
      fontWeight: "700",
      fontFamily: "sans-serif",
      transform: "rotate(90deg)",
      width: "377px",
      fontSize: "20px",
      padding: "5%",
      paddingTop: "2%",
      textAlign: "center",
    }}
  >
    <img src="/img/logoBlack.png" style={{ width: "230px", margin: "0px auto" }} />
    <h6 style={{ margin: "0px", fontSize: "0.55em" }}>
      C. 31 NO.508 DEPTO B POR 120 Y 122 COL. VICENTE GUERRERO PROGRESO,
      YUCATAN, MEXICO, CP: 97320, TELEFONO: 969-9351115
    </h6>
    <div
      style={{
        backgroundColor: "black",
        height: "3px",
        width: "90%",
        margin: "10px auto",
      }}
    ></div>
    <div style={{ display: "flex" }}>
      <div style={{ width: "75%", }}>
        <h6 style={{ fontWeight: "950", margin: "0px" }}>
          SHIPPED TO:
        </h6>
        <h6 style={{ fontWeight: "950", margin: "0px" }}>MONTE'S SEAFOOD EMPORIUM, INC.</h6>
        <h6 style={{ margin: "0px", fontSize: "0.55em" }}>
          1624 GROUPER AV PORT SAINT JOE, FLORIDA, CP: 32456
        </h6>
        <h6 style={{ margin: "0px", fontWeight: "800" }}>
          #1 LOT: SR-28062022-007
        </h6>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <h6 style={{ margin: "0px", fontWeight: "800", fontSize: "0.57em" }}>CANANE FISH</h6>
          <h6 style={{ margin: "0px", fontWeight: "800", fontSize: "0.54em" }}>WHOLE FRESH</h6>
          <h6 style={{ margin: "0px", fontWeight: "800", fontSize: "0.57em" }}>50 LB</h6>
        </div>
        <h6 style={{ margin: "0px", fontSize: "0.54em" }}>(WILD CAUGHT)</h6>

        <h6 style={{ margin: "0px", fontSize: "0.55em" }}>PRODUCT OF MEXICO WILD CAUGHT</h6>
        <h6 style={{ margin: "0px", fontSize: "0.55em" }}>KEEP REFRIGERATED 32.2ºF <span  style={{ fontWeight: "1000", margin: "0px", fontSize: "0.58em" }}>/.</span> 2ºC</h6>
        <h6 style={{ margin: "0px", fontSize: "0.55em" }}>ALLERGEN: FISH</h6>
      </div>
      <div style={{ width: "30%", display: "flex", alignItems: "center" }}>
       
      </div>
    </div>
  </div>
  
  
  
  <img src="" style={{ width: "110px", margin: "0px auto" }} />
      <div
              id="etiqueta"
              className="zima"
              style={{
                display: "none",
                width: "377px",
                fontWeight: "700",
                transform: "rotate(90deg)",
                fontSize: "20px",
                padding: "5%",
                textAlign: "center"
              }}
            >
              <h6 style={{ fontWeight: "950", margin: "0px" }}>
                PACKET BY: SEALAND FRUTCO S.A. DE C.V.
              </h6>
              <h6 style={{ margin: "0px" }}>ROBERTO MORALES G.</h6>
              <h6 style={{ margin: "0px" }}>
                ADRESS: C.31 #508 B X 120 Y 122 TEL: 969 9351115
              </h6>
              <h6 style={{ margin: "0px" }}>CP.97320</h6>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h6 style={{ margin: "0px" }}>LOT: 07062022</h6>
                <h6 style={{ margin: "0px" }}>AWB: 001-64108310</h6>
              </div>
              <div
                style={{
                  backgroundColor: "black",
                  height: "3px",
                  width: "100%",
                  margin: "10px auto",
                }}
              ></div>
              
              <h6 style={{ fontWeight: "950", margin: "0px" }}>
                CONSIGNATED: MONTES SEAFOOD EMPORIUM INC.
              </h6>
              <h6 style={{ margin: "0px" }}>800 FOOD CENTER DRIVE UNIT 26 AND 27</h6>
              <h6 style={{ margin: "0px" }}>BRONX 10474</h6>
              <h6 style={{ margin: "0px" }}>NEW YORK, USA</h6>
              <h6 style={{ margin: "0px" }}>CP: 10474</h6>
              <h6 style={{ margin: "0px" }}>REFRIGERATED .2°C 32°F</h6>
              <h6 style={{ margin: "0px" }}>
                PRODUCT OF MEXICO WILD CAUGHT KEEP ALLERGEN FISH
              </h6>
            </div>aaaaaaaaaaaaaaaaaaaaaa


      <div className="zima" id="etiqueta" style={{ display: "none", transform: "rotate(90deg)", fontSize: "20px", padding: "5%", textAlign: "center" }}>
              <h6><b>PACKET BY: MY FISH DOCK</b></h6>
              <h6><b>ROBERTO MORALES G.</b></h6>
              <h6>ADRESS: C.31 #508 B x 120 y 122 TEL: 969 9351115</h6>
              <h6>CP: 97320</h6>
              <h6>LOTE: EDM2-24062021-2-BC    GUIA: </h6>
              <p><b>_____________________________________________________________</b></p>
              <h5><b>CONSIGNATED TO: BENDIX COMPANY'S</b></h5>
              <h5>C. 38 #466 POR 23 Y 25 LOS PINOS</h5>
              <h5>MERIDA, YUCATAN</h5>
              <h5>97138</h5>
              <h5>REFRIGERATED .2ºC</h5>
            </div>

CONSIGNATED: MONTES SEAFOOD EMPORIUM INC.
800 FOOD CENTER DRIVE UNIT 26 AND 27
BRONX 10474
NEW YORK, USA 
CP: 10474
REFRIGERATED .2°C 32°F
PRODUCT OF MEXICO WILD CAUGHT KEEP ALLERGEN FISH

};


*/
};
export default App;
