// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.searchInput {\n\ttext-align: center;\n\tborder: 0.1rem solid gray;\n\tborder-radius: 0.3rem;\n\tmargin: 0.25rem;\n\tpadding: 0.1rem;\n\twidth: 50%;\n\theight: 1.8rem;\n\t/* background: whitesmoke; */\n\tmargin-left: 3rem;\n\t/* border-color: #1cbbd0; */\n}\n\n.searchName{\n\tmargin: 1.5rem 3rem;\n\tmargin-bottom: 1.6rem;\n\t/* text-align: left; */\n\tfont-size: 0.9rem;\n\tcolor: black;\n\ttext-decoration: underline background-clip: padding-box;\n\tbackground-color: rgba(0, 0, 0, .03);\n\tborder-bottom: 1px solid;\n\t/* border-bottom-color: skyblue; */\n\tborder-bottom-color: #1cbbd0;\n}\n\n.search {\n\t\tappearance: none;\n\t\tborder: 0;\n\t\tborder-radius: 5px;\n\t\tbackground: gray;\n\t\tcolor: #fff;\n\t\tmargin-left: 1rem;\n\t\tpadding: 0.3rem 0.7rem;\n\t\tfont-size: 1.2rem;\n\t\ttext-align: right;\n}\n\n.sets {\n\twhite-space: pre-wrap;\n\ttext-align: left;\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 0.2rem;\n\tpadding: 2rem, 2rem;\n\tborder-radius: 0.5rem;\n\tborder: solid gray;\n\tline-height: 1.35rem;\n\tmargin-left:2rem;\n\tmargin-right: 2rem;\n}\n\n\n.set{\n\tmargin: 1.2rem;\n}\n\n\n.slide {\n\tmargin-left: 1rem;\n\t/* padding: 0.1rem; */\n\tpadding-right: 1rem;\n\tfont-size: 0.85rem;\n}\n\n.title {\n\ttext-align: left;\n\tfont-size: 0.8rem;\n\tcolor: black;\n\ttext-decoration: underline\n\tbackground-clip: padding-box;\n\tbackground-color: rgba(0, 0, 0, .03);\n\tborder-bottom: 1px solid;\n\tborder-bottom-color: #1cbbd0;\n}\n\n.title2 {\n\ttext-align: left;\n\tfont-size: 0.9rem;\n\tcolor: black;\n\ttext-decoration: underline background-clip: padding-box;\n\tbackground-color: rgba(0, 0, 0, .03);\n\tborder-bottom: 1px solid;\n\tborder-bottom-color: #dc3545;\n}\n\n/* .seperator {\n\t/* height: 1rem; */\n\t/* font-size: 0.9rem; */\n\n\ttext-decoration: underline background-clip: padding-box;\n\n\tborder-top: 5px solid;\n\tborder-bottom: 5px solid;\n\tborder-top-color: skyblue;\n\tcolor: white;\n\tborder-bottom-color: #dc3545;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: 0.5rem;\n} */\n\n.seperator2 {\n\theight: 1rem;\n\t/* font-size: 0.9rem; */\n\tcolor: black;\n\ttext-decoration: underline background-clip: padding-box;\n\t/* background-color: rgba(0, 0, 0, .01); */\n\tborder-bottom: 5px solid;\n\tborder-bottom-color: #dc3545;\n\tmargin-bottom: 1rem;}\n\n.end{\n\theight: 1px;\n\tborder-color:white #dc3545;\n}\n\nol {\n\tpadding: 1rem;\n}\n\n.searchModal {\n\tpadding: 2rem;\n\tmargin: 2rem;\n}\n\n.explain {\n\t/* margin: 1rem; */\n\ttext-align: center;\n\tpadding: 0.5rem 0rem;;\n\tfont-size: 0.8rem;\n}\n\nimg {\n\twidth: 13rem;\n\tmargin-top: 1rem;\n}\n\n.picParent{\n\ttext-align: center;\n\n}\n\n.button {\n\tappearance: none;\n\tborder: 0;\n\tborder-radius: 0.4rem;\n\tbackground: #4676D7;\n\tcolor: #fff;\n\tpadding: 8px 15px;\n\tfont-size: 20px;\n\ttext-align: center;\n}\n\n.motion {\n\tmargin: 0.2rem 0.2rem;\n}\n\n.motion2 {\n\tmargin: 0.5rem 0rem;\n}\n\n\n\n\n.titles {\n\ttext-align: center;\n\tmargin-top: 0.5rem;\n}\n\n.parent-input-button{\n\tjustify-content: center;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.length {\n\ttext-align: center;\n\twidth: 1.4rem;\n\tmargin-top: 0.1rem;\n\tmargin-left: 1rem;\n\tmargin-bottom: 0.1rem;\n}\n\n.flex{\n\tjustify-content: space-between;\n}\n\n.flex {\n\tpadding: 0.5% 0;\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n}\n\n.length-explain {\n\t/* display: inline-block; */\n\t/* justify-content: space-around;\n\tmargin: 1rem;\n\tpadding: 0.5% 0;\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap; */\n}\n\n.flex>* {\n\tmin-width: 3%;\n\ttext-align: center;\n}\n\n.backward {\n\t/* margin-top: auto;\n\tmargin-bottom: auto; */\n\t/* line-height: 1.2rem;\n\twidth: 1rem; */\n\t/* margin: 1.2rem;\n\tmargin-right: 5rem; */\n\t/* transform: scaleY(-1); */\n\tfont-size: 0.9rem;\n\ttext-align: center;\n\tmargin-top: 1.3rem;\n\tmargin-bottom: 1.3rem;\n\t/* max-height: 1.5rem; */\n}\n\n.button {\n\tappearance: none;\n\tborder: 0;\n\tborder-radius: 0.4rem;\n\tbackground: #4676D7;\n\tcolor: #fff;\n\tpadding: 8px 15px;\n\tfont-size: 20px;\n\ttext-align: center;\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n\n.copy {\n\t/* margin-left: 1.8rem;\n\tmargin-top: auto;\n\tmargin-bottom: auto; */\n\tfont-size: 0.9rem;\n\tmargin-bottom: 1.2rem;\n\tpadding: 0.3rem 0.25rem;\n\tmargin-top: 1.3rem;\n\tmargin-bottom: 1.3rem;\n}\n\n\n.index {\n\t/* text-align: right; */\n\tmargin-right: 0%;\n\t/* margin: 0rem 2rem; */\n\tfont-size: 0.6rem;\n\tmargin-bottom: 0.2rem;\n\n}\n\n/* .close {\n\tfont-size: 0.5rem;\n\tpadding: 0.1rem 0.1rem;\n\tem 0.3rem;\n\tmargin-bottom: 0.4rem;\n\tmargin-left: 1rem;\n} */\n\n.index-close {\n\tmargin-left: 89%;\n}\n\n/*  write a css that put two div bottom right of parent div */\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}