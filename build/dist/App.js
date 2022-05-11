import React, {useState} from "../_snowpack/pkg/react.js";
import {useCopyToClipboard} from "../_snowpack/pkg/usehooks-ts.js";
import "./App.css.proxy.js";
import copyJson from "./data/copy.json.proxy.js";
import datastructure from "./data/datastructure.json.proxy.js";
import datastructureSimple from "./data/datastructure_simple.json.proxy.js";
import pic from "./utdslogo.png.proxy.js";
let t = "Peace is a journey of a thousand miles and it must be taken one step at a time.";
let nationalHistory = new Array();
let internationalHistory = new Array();
export function Slide(props) {
  if (props.flag)
    return /* @__PURE__ */ React.createElement("div", {
      className: "slide"
    }, props.flag);
  else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
}
export function NationalModal(props) {
  let roundFlag = false;
  let json_dict = datastructure["national"][props.index];
  if (true) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sets",
      key: props.index
    }, /* @__PURE__ */ React.createElement("div", {
      className: "titles"
    }, json_dict.title), Object.values(json_dict.rounds).map((e, index, array) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "set"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "parant"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "child1"
      }, index === 0 || array[index - 1].round !== e.round ? /* @__PURE__ */ React.createElement("div", {
        className: "title2"
      }, e.round) : /* @__PURE__ */ React.createElement(React.Fragment, null), /* @__PURE__ */ React.createElement("div", {
        className: "motion2"
      }, e.motion), /* @__PURE__ */ React.createElement(Slide, {
        flag: e.slide
      })))));
    }), /* @__PURE__ */ React.createElement("div", {
      className: "index-close"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "index"
    }, props.index, "/", datastructure["national"].length)));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
}
export function InternationalModal(props) {
  let json_dict = datastructure["international"][props.index];
  if (true) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sets",
      key: props.index
    }, /* @__PURE__ */ React.createElement("div", {
      className: "titles"
    }, json_dict.title), Object.values(json_dict.rounds).map((e, index, array) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "set"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "parant"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "child1"
      }, index === 0 || array[index - 1].round !== e.round ? /* @__PURE__ */ React.createElement("div", {
        className: "title2"
      }, e.round) : /* @__PURE__ */ React.createElement(React.Fragment, null), /* @__PURE__ */ React.createElement("div", {
        className: "motion2"
      }, e.motion), /* @__PURE__ */ React.createElement(Slide, {
        flag: e.slide
      })))));
    }), /* @__PURE__ */ React.createElement("div", {
      className: "index-close"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "index"
    }, props.index, "/", datastructure["international"].length)));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
}
export function SearchModal(props) {
  if (props.started) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sets"
    }, props.ranks.map((e) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "set"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "parant"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "child1"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "title"
      }, datastructureSimple.data.find((v) => v.id == e).title + " / " + datastructureSimple.data.find((v) => v.id == e).round), /* @__PURE__ */ React.createElement("div", {
        className: "motion"
      }, datastructureSimple.data.find((v) => v.id == e).motion), /* @__PURE__ */ React.createElement(Slide, {
        flag: datastructureSimple.data.find((v) => v.id == e).slide
      })))));
    }));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
}
function App({}) {
  const [nationalIndex, setNationalIndex] = useState(0);
  const [internationalIndex, setInternationalIndex] = useState(97);
  const [value, copy] = useCopyToClipboard();
  const [nationalIsClicked, setNationalIsClicked] = useState(true);
  const [internationalIsClicked, setInternationalIsClicked] = useState(true);
  function handleNationalClick() {
    setNationalIndex(Math.floor(Math.random() * datastructure["national"].length));
    nationalHistory.push(nationalIndex);
    setNationalIsClicked(!nationalIsClicked);
  }
  function handleInternationalClick() {
    setInternationalIndex(Math.floor(Math.random() * datastructure["international"].length));
    internationalHistory.push(internationalIndex);
    setInternationalIsClicked(!internationalIsClicked);
  }
  function handleNationalBackwardClick() {
    if (nationalHistory.length > 0) {
      setNationalIndex(nationalHistory.pop());
    }
  }
  function handleInternationalBackwardClick() {
    if (internationalHistory.length > 0) {
      setInternationalIndex(internationalHistory.pop());
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "divpic"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "picParent",
    href: "http://resources.tokyodebate.org/debate-motion/tips/",
    onclick: "document.location='http://resources.tokyodebate.org/debate-motion/tips/';return false;",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    src: pic
  }))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "seperator"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "backward",
    onClick: handleNationalBackwardClick
  }, "back"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    onClick: () => {
      handleNationalClick();
    }
  }, "national debate"), /* @__PURE__ */ React.createElement("button", {
    className: "copy",
    onClick: () => copy(copyJson[nationalIndex])
  }, "copy")), /* @__PURE__ */ React.createElement(NationalModal, {
    className: "nationalModal",
    index: nationalIndex,
    flag: nationalIsClicked,
    type: "national"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "backward",
    onClick: handleInternationalBackwardClick
  }, "back"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    onClick: () => {
      handleInternationalClick();
    }
  }, "international debate"), /* @__PURE__ */ React.createElement("button", {
    className: "copy",
    onClick: () => copy(copyJson[internationalIndex + datastructure["national"].length - 1])
  }, "copy")), /* @__PURE__ */ React.createElement(InternationalModal, {
    className: "internationalModal",
    index: internationalIndex,
    flag: internationalIsClicked,
    type: "international"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, " The University of Tokyo, Debating Society. UTDS"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null));
}
export default App;
