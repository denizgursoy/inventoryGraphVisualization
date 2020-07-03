import React from 'react';
import { Graph } from "react-d3-graph";
import "./index.css"
import { tree } from 'd3';





function App() {

  const data = {
    nodes: [
      { id: "TT", svg: "/tt.svg" },
      { id: "TT-Ankara-Bina", svg: "/bina.svg" },
      { id: "Ankara Solon 1", svg: "/room.svg" },
      { id: "Ankara Solon 2", svg: "/room.svg" },
      { id: "Ankara Solon 3", svg: "/room.svg" },
      { id: "Ankara Solon 4", svg: "/room.svg" },
      { id: "Rack 1", svg: "/server.svg" },
      { id: "Rack 2", svg: "/server.svg" },
      { id: "Rack 3", svg: "/server.svg" },
      { id: "Router 1", svg: "/router.svg" },
      { id: "Router 2", svg: "/router.svg" },
      { id: "Router 3", svg: "/router.svg" },
      { id: "Router 4", svg: "/router.svg" },
      { id: "Router 5", svg: "/router.svg" },
      { id: "Router 6", svg: "/router.svg" },
      { id: "Router 7", svg: "/router.svg" },
      { id: "Router 8", svg: "/router.svg" },
      { id: "Router 9", svg: "/router.svg" },


    ],
    links: [
      { source: "TT-Ankara-Bina", target: "TT", label: " is governed by" },
      { source: "Ankara Solon 1", target: "TT-Ankara-Bina", label: " is located in" },
      { source: "Ankara Solon 2", target: "TT-Ankara-Bina", label: " is located in" },
      { source: "Ankara Solon 3", target: "TT-Ankara-Bina", label: " is located in" },
      { source: "Ankara Solon 4", target: "TT-Ankara-Bina", label: " is located in" },
      { source: "Rack 1", target: "Ankara Solon 3", label: " is placed in" },
      { source: "Rack 2", target: "Ankara Solon 3", label: " is placed in" },
      { source: "Rack 3", target: "Ankara Solon 2", label: " is placed in" },
      { source: "Router 1", target: "Rack 1", label: " is put inside" },
      { source: "Router 2", target: "Rack 1", label: " is put inside" },
      { source: "Router 3", target: "Rack 1", label: " is put inside" },
      { source: "Router 4", target: "Rack 1", label: " is put inside" },
      { source: "Router 5", target: "Rack 2", label: " is put inside" },
      { source: "Router 6", target: "Rack 2", label: " is put inside" },
      { source: "Router 7", target: "Rack 3", label: " is put inside" },
      { source: "Router 8", target: "Rack 3", label: " is put inside" },
      { source: "Router 9", target: "Rack 3", label: " is put inside" }
    ],
  };


  const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    directed: false,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: 1000,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    width: 1500,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
      disableLinkForce: false
    },
    node: {
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 10,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 14,
      highlightFontWeight: "bold",
      highlightStrokeColor: "red",
      highlightStrokeWidth: 1.5,
      mouseCursor: "crosshair",
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeColor: "none",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle"
    },
    link: {
      color: "lightgray",
      fontColor: "black",
      fontSize: 8,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 8,
      highlightFontWeight: "normal",
      labelProperty: "label",
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: true,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      markerHeight: 6,
      markerWidth: 6
    }
  };


  return (
    <div style={{ backgroundColor: "#454545", height: 1200 }}>
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        heigt="800"
      />
    </div>
  );
}

export default App;
