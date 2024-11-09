(()=>{"use strict";var n={575:(n,t,e)=>{e.d(t,{A:()=>h});var r=e(354),o=e.n(r),a=e(314),i=e.n(a),s=e(417),A=e.n(s),d=new URL(e(96),e.b),c=new URL(e(21),e.b),l=new URL(e(667),e.b),C=new URL(e(690),e.b),p=i()(o()),u=A()(d),g=A()(c),E=A()(l),m=A()(C);p.push([n.id,`aside {\n  background-color: var(--aside-bg-color);\n  color: var(--aside-text-color);\n  padding: 20px 40px;\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.aside-account {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.aside-account h2 {\n  font-weight: bold;\n}\n\n.aside-account-icon {\n  background-image: url(${u});\n  background-size: contain;\n  width: var(--account-icon-wh-size);\n  height: var(--account-icon-wh-size);\n}\n\n.todays-task-icon {\n  background-image: url(${g});\n  background-size: contain;\n  width: var(--option-icon-wh-size);\n  height: var(--option-icon-wh-size);\n}\n\n.week-tasks-icon {\n  background-image: url(${E});\n  background-size: contain;\n  width: var(--option-icon-wh-size);\n  height: var(--option-icon-wh-size);\n}\n\n.all-tasks-icon {\n  background-image: url(${m});\n  background-size: contain;\n  width: var(--option-icon-wh-size);\n  height: var(--option-icon-wh-size);\n}\n\nli {\n  list-style-type: none;\n  margin-bottom: 10px;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  padding: 0;\n  pointer-events: auto;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  cursor: pointer;\n}\n\nbutton:hover {\n  color: #9d5900;\n}\n\n.btnActive {\n  color: #9d5900;\n}\n\n.project-title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tag-title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list-ul {\n  padding: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-top: 10px;\n  max-width: 200px;\n}\n\n.tag-list-ul {\n  padding: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-top: 10px;\n  max-width: 200px;\n}\n`,"",{version:3,sources:["webpack://./src/aside.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yDAA0+B;EAC1+B,wBAAwB;EACxB,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,yDAAwyB;EACxyB,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,yDAAuZ;EACvZ,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,yDAA2d;EAC3d,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,oBAAoB;EACpB,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB",sourcesContent:['aside {\r\n  background-color: var(--aside-bg-color);\r\n  color: var(--aside-text-color);\r\n  padding: 20px 40px;\r\n  min-width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.aside-account {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.aside-account h2 {\r\n  font-weight: bold;\r\n}\r\n\r\n.aside-account-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M7.07%2C18.28C7.5%2C17.38%2010.12%2C16.5%2012%2C16.5C13.88%2C16.5%2016.5%2C17.38%2016.93%2C18.28C15.57%2C19.36%2013.86%2C20%2012%2C20C10.14%2C20%208.43%2C19.36%207.07%2C18.28M18.36%2C16.83C16.93%2C15.09%2013.46%2C14.5%2012%2C14.5C10.54%2C14.5%207.07%2C15.09%205.64%2C16.83C4.62%2C15.5%204%2C13.82%204%2C12C4%2C7.59%207.59%2C4%2012%2C4C16.41%2C4%2020%2C7.59%2020%2C12C20%2C13.82%2019.38%2C15.5%2018.36%2C16.83M12%2C6C10.06%2C6%208.5%2C7.56%208.5%2C9.5C8.5%2C11.44%2010.06%2C13%2012%2C13C13.94%2C13%2015.5%2C11.44%2015.5%2C9.5C15.5%2C7.56%2013.94%2C6%2012%2C6M12%2C11A1.5%2C1.5%200%200%2C1%2010.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C8A1.5%2C1.5%200%200%2C1%2013.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C11Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--account-icon-wh-size);\r\n  height: var(--account-icon-wh-size);\r\n}\r\n\r\n.todays-task-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ebullseye%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M12%2C4A8%2C8%200%200%2C1%2020%2C12A8%2C8%200%200%2C1%2012%2C20A8%2C8%200%200%2C1%204%2C12A8%2C8%200%200%2C1%2012%2C4M12%2C6A6%2C6%200%200%2C0%206%2C12A6%2C6%200%200%2C0%2012%2C18A6%2C6%200%200%2C0%2018%2C12A6%2C6%200%200%2C0%2012%2C6M12%2C8A4%2C4%200%200%2C1%2016%2C12A4%2C4%200%200%2C1%2012%2C16A4%2C4%200%200%2C1%208%2C12A4%2C4%200%200%2C1%2012%2C8M12%2C10A2%2C2%200%200%2C0%2010%2C12A2%2C2%200%200%2C0%2012%2C14A2%2C2%200%200%2C0%2014%2C12A2%2C2%200%200%2C0%2012%2C10Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--option-icon-wh-size);\r\n  height: var(--option-icon-wh-size);\r\n}\r\n\r\n.week-tasks-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ecalendar-week%3C%2Ftitle%3E%3Cpath%20d%3D%22M6%201H8V3H16V1H18V3H19C20.11%203%2021%203.9%2021%205V19C21%2020.11%2020.11%2021%2019%2021H5C3.89%2021%203%2020.1%203%2019V5C3%203.89%203.89%203%205%203H6V1M5%208V19H19V8H5M7%2010H17V12H7V10Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--option-icon-wh-size);\r\n  height: var(--option-icon-wh-size);\r\n}\r\n\r\n.all-tasks-icon {\r\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Elist-box-outline%3C%2Ftitle%3E%3Cpath%20d%3D%22M11%2015H17V17H11V15M9%207H7V9H9V7M11%2013H17V11H11V13M11%209H17V7H11V9M9%2011H7V13H9V11M21%205V19C21%2020.1%2020.1%2021%2019%2021H5C3.9%2021%203%2020.1%203%2019V5C3%203.9%203.9%203%205%203H19C20.1%203%2021%203.9%2021%205M19%205H5V19H19V5M9%2015H7V17H9V15Z%22%2F%3E%3C%2Fsvg%3E");\r\n  background-size: contain;\r\n  width: var(--option-icon-wh-size);\r\n  height: var(--option-icon-wh-size);\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0;\r\n  pointer-events: auto;\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  color: #9d5900;\r\n}\r\n\r\n.btnActive {\r\n  color: #9d5900;\r\n}\r\n\r\n.project-title-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.tag-title-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.project-list-ul {\r\n  padding: 0;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  margin-top: 10px;\r\n  max-width: 200px;\r\n}\r\n\r\n.tag-list-ul {\r\n  padding: 0;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  margin-top: 10px;\r\n  max-width: 200px;\r\n}\r\n'],sourceRoot:""}]);const h=p},6:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,".container {\n  display: flex;\n  min-width: 100%;\n  height: 95lvh;\n}\n","",{version:3,sources:["webpack://./src/container.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,eAAe;EACf,aAAa;AACf",sourcesContent:[".container {\r\n  display: flex;\r\n  min-width: 100%;\r\n  height: 95lvh;\r\n}\r\n"],sourceRoot:""}]);const s=i},536:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,".content {\n  background-color: var(--main-bg-color);\n  color: var(--main-text-color);\n  padding: 10px;\n  flex: 1;\n  display: grid;\n  grid-template-rows: auto 1fr; /* Header at the top, table below */\n  gap: 1rem;\n  padding: 1rem;\n  overflow-x: auto;\n}\n\n/* Header styling */\n.contentHeader {\n  font-size: 24px;\n  font-weight: bold;\n  padding: 1rem;\n  background-color: #f0f0f0;\n  text-align: center;\n}\n\n/* Table container styling */\n.table-content {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(\n    auto-fill,\n    minmax(300px, 1fr)\n  ); /* Responsive columns */\n  overflow-x: auto;\n  overflow-y: hidden;\n  gap: 1rem;\n  white-space: nowrap;\n}\n\n.table-content-not-weekly {\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n\n/* Table styling */\n.table {\n  border: 1px solid #ccc;\n  padding: 1rem;\n  background-color: #fafafa;\n  text-align: center;\n  border-radius: 5px;\n  min-width: 300px;\n}\n","",{version:3,sources:["webpack://./src/content.css"],names:[],mappings:"AAAA;EACE,sCAAsC;EACtC,6BAA6B;EAC7B,aAAa;EACb,OAAO;EACP,aAAa;EACb,4BAA4B,EAAE,mCAAmC;EACjE,SAAS;EACT,aAAa;EACb,gBAAgB;AAClB;;AAEA,mBAAmB;AACnB;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,sBAAsB;EACtB;;;GAGC,EAAE,uBAAuB;EAC1B,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,4DAA4D;AAC9D;;AAEA,kBAAkB;AAClB;EACE,sBAAsB;EACtB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB",sourcesContent:[".content {\r\n  background-color: var(--main-bg-color);\r\n  color: var(--main-text-color);\r\n  padding: 10px;\r\n  flex: 1;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr; /* Header at the top, table below */\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  overflow-x: auto;\r\n}\r\n\r\n/* Header styling */\r\n.contentHeader {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  background-color: #f0f0f0;\r\n  text-align: center;\r\n}\r\n\r\n/* Table container styling */\r\n.table-content {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  grid-template-columns: repeat(\r\n    auto-fill,\r\n    minmax(300px, 1fr)\r\n  ); /* Responsive columns */\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  gap: 1rem;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table-content-not-weekly {\r\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\r\n}\r\n\r\n/* Table styling */\r\n.table {\r\n  border: 1px solid #ccc;\r\n  padding: 1rem;\r\n  background-color: #fafafa;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  min-width: 300px;\r\n}\r\n"],sourceRoot:""}]);const s=i},336:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"header {\n  background-color: var(--header-bg-color);\n  color: var(--header-text-color);\n  padding: 10px;\n  text-align: center;\n  height: 5lvh;\n}\n","",{version:3,sources:["webpack://./src/header.css"],names:[],mappings:"AAAA;EACE,wCAAwC;EACxC,+BAA+B;EAC/B,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd",sourcesContent:["header {\r\n  background-color: var(--header-bg-color);\r\n  color: var(--header-text-color);\r\n  padding: 10px;\r\n  text-align: center;\r\n  height: 5lvh;\r\n}\r\n"],sourceRoot:""}]);const s=i},564:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"/* Dialog backdrop styling */\n::backdrop {\n  background-color: rgba(0, 0, 0, 0.75); /* Darkened backdrop */\n  opacity: 0.8;\n}\n\n/* Style for the dialog */\ndialog {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: none;\n  border-radius: 15px;\n  padding: 0;\n}\n\n#dialog-container {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  padding: 20px;\n  height: 200px;\n  width: 600px;\n}\n\n#dialog-form {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  flex: 0.9;\n}\n\n/* Input field styling */\ninput {\n  padding: 10px;\n  margin: 10px 0;\n  width: 100%;\n  font-size: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box;\n  outline: none;\n  height: 100%;\n}\n\n#input-title {\n  width: 100%;\n}\n\n/* Focus styles for inputs */\ninput:focus {\n  border-color: var(--lib-head-bg-color);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n\n/* Custom add button */\n#add-button {\n  background-color: #f44336;\n  border: none;\n  color: white;\n  padding: 10px 15px;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 5px;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n}\n\n#close-button {\n  background: transparent;\n  display: flex;\n  justify-content: end;\n}\n\n#add-button:hover {\n  background-color: #e53935;\n}\n\n.close-div,\n#button-div {\n  display: flex;\n  justify-content: end;\n}\n","",{version:3,sources:["webpack://./src/modal.css"],names:[],mappings:"AAAA,4BAA4B;AAC5B;EACE,qCAAqC,EAAE,sBAAsB;EAC7D,YAAY;AACd;;AAEA,yBAAyB;AACzB;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,SAAS;AACX;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA,4BAA4B;AAC5B;EACE,sCAAsC;EACtC,sCAAsC;AACxC;;AAEA,sBAAsB;AACtB;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,oBAAoB;AACtB",sourcesContent:["/* Dialog backdrop styling */\r\n::backdrop {\r\n  background-color: rgba(0, 0, 0, 0.75); /* Darkened backdrop */\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Style for the dialog */\r\ndialog {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: none;\r\n  border-radius: 15px;\r\n  padding: 0;\r\n}\r\n\r\n#dialog-container {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  height: 200px;\r\n  width: 600px;\r\n}\r\n\r\n#dialog-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  flex: 0.9;\r\n}\r\n\r\n/* Input field styling */\r\ninput {\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n  font-size: 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  height: 100%;\r\n}\r\n\r\n#input-title {\r\n  width: 100%;\r\n}\r\n\r\n/* Focus styles for inputs */\r\ninput:focus {\r\n  border-color: var(--lib-head-bg-color);\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Custom add button */\r\n#add-button {\r\n  background-color: #f44336;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 15px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#close-button {\r\n  background: transparent;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#add-button:hover {\r\n  background-color: #e53935;\r\n}\r\n\r\n.close-div,\r\n#button-div {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n"],sourceRoot:""}]);const s=i},208:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  --header-bg-color: #493628;\n  --header-text-color: #e4e0e1;\n  --aside-bg-color: #d6c0b3;\n  --aside-text-color: #493628;\n  --main-bg-color: #e4e0e1;\n  --main-text-color: #493628;\n  --button-bg-color: #d6c0b3;\n  --button-text-color: #493628;\n  --account-icon-wh-size: 35px;\n  --option-icon-wh-size: 15px;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  overflow: hidden;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbutton {\n  background-color: var(--button-bg-color);\n  color: var(--button-text-color);\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,0BAA0B;EAC1B,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,+BAA+B;AACjC",sourcesContent:["*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  --header-bg-color: #493628;\r\n  --header-text-color: #e4e0e1;\r\n  --aside-bg-color: #d6c0b3;\r\n  --aside-text-color: #493628;\r\n  --main-bg-color: #e4e0e1;\r\n  --main-text-color: #493628;\r\n  --button-bg-color: #d6c0b3;\r\n  --button-text-color: #493628;\r\n  --account-icon-wh-size: 35px;\r\n  --option-icon-wh-size: 15px;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  overflow: hidden;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--button-bg-color);\r\n  color: var(--button-text-color);\r\n}\r\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],d=r.base?A[0]+r.base:A[0],c=a[d]||0,l="".concat(d," ").concat(c);a[d]=c+1;var C=e(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==C)t[C].references++,t[C].updater(p);else{var u=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var A=r(n,o),d=0;d<a.length;d++){var c=e(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=A}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},96:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M7.07%2C18.28C7.5%2C17.38%2010.12%2C16.5%2012%2C16.5C13.88%2C16.5%2016.5%2C17.38%2016.93%2C18.28C15.57%2C19.36%2013.86%2C20%2012%2C20C10.14%2C20%208.43%2C19.36%207.07%2C18.28M18.36%2C16.83C16.93%2C15.09%2013.46%2C14.5%2012%2C14.5C10.54%2C14.5%207.07%2C15.09%205.64%2C16.83C4.62%2C15.5%204%2C13.82%204%2C12C4%2C7.59%207.59%2C4%2012%2C4C16.41%2C4%2020%2C7.59%2020%2C12C20%2C13.82%2019.38%2C15.5%2018.36%2C16.83M12%2C6C10.06%2C6%208.5%2C7.56%208.5%2C9.5C8.5%2C11.44%2010.06%2C13%2012%2C13C13.94%2C13%2015.5%2C11.44%2015.5%2C9.5C15.5%2C7.56%2013.94%2C6%2012%2C6M12%2C11A1.5%2C1.5%200%200%2C1%2010.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C8A1.5%2C1.5%200%200%2C1%2013.5%2C9.5A1.5%2C1.5%200%200%2C1%2012%2C11Z%22%2F%3E%3C%2Fsvg%3E"},21:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ebullseye%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12A10%2C10%200%200%2C0%2012%2C2M12%2C4A8%2C8%200%200%2C1%2020%2C12A8%2C8%200%200%2C1%2012%2C20A8%2C8%200%200%2C1%204%2C12A8%2C8%200%200%2C1%2012%2C4M12%2C6A6%2C6%200%200%2C0%206%2C12A6%2C6%200%200%2C0%2012%2C18A6%2C6%200%200%2C0%2018%2C12A6%2C6%200%200%2C0%2012%2C6M12%2C8A4%2C4%200%200%2C1%2016%2C12A4%2C4%200%200%2C1%2012%2C16A4%2C4%200%200%2C1%208%2C12A4%2C4%200%200%2C1%2012%2C8M12%2C10A2%2C2%200%200%2C0%2010%2C12A2%2C2%200%200%2C0%2012%2C14A2%2C2%200%200%2C0%2014%2C12A2%2C2%200%200%2C0%2012%2C10Z%22%2F%3E%3C%2Fsvg%3E"},667:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Ecalendar-week%3C%2Ftitle%3E%3Cpath%20d%3D%22M6%201H8V3H16V1H18V3H19C20.11%203%2021%203.9%2021%205V19C21%2020.11%2020.11%2021%2019%2021H5C3.89%2021%203%2020.1%203%2019V5C3%203.89%203.89%203%205%203H6V1M5%208V19H19V8H5M7%2010H17V12H7V10Z%22%2F%3E%3C%2Fsvg%3E"},690:n=>{n.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Elist-box-outline%3C%2Ftitle%3E%3Cpath%20d%3D%22M11%2015H17V17H11V15M9%207H7V9H9V7M11%2013H17V11H11V13M11%209H17V7H11V9M9%2011H7V13H9V11M21%205V19C21%2020.1%2020.1%2021%2019%2021H5C3.9%2021%203%2020.1%203%2019V5C3%203.9%203.9%203%205%203H19C20.1%203%2021%203.9%2021%205M19%205H5V19H19V5M9%2015H7V17H9V15Z%22%2F%3E%3C%2Fsvg%3E"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),s=e(659),A=e.n(s),d=e(56),c=e.n(d),l=e(540),C=e.n(l),p=e(113),u=e.n(p),g=e(208),E={};E.styleTagTransform=u(),E.setAttributes=c(),E.insert=A().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=C(),o()(g.A,E),g.A&&g.A.locals&&g.A.locals;var m=e(336),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=A().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=C(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals;var b=e(6),B={};B.styleTagTransform=u(),B.setAttributes=c(),B.insert=A().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=C(),o()(b.A,B),b.A&&b.A.locals&&b.A.locals;var x=e(575),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=A().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=C(),o()(x.A,v),x.A&&x.A.locals&&x.A.locals;var f=e(564),w={};w.styleTagTransform=u(),w.setAttributes=c(),w.insert=A().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=C(),o()(f.A,w),f.A&&f.A.locals&&f.A.locals;const y=function(){const n=[];return{addTag:function(t){n.push(t),console.log("tags"),function(){const t=document.querySelector(".tag-list-ul");t&&(t.innerHTML="",n.forEach((n=>{const e=document.createElement("li");t.appendChild(e);const r=document.createElement("button");r.classList.add("btnTasks"),r.classList.add("btnTag"),r.classList.add("btnTasks"),r.textContent=`#${n}`,e.appendChild(r)})))}()},tags:n}}(),k=function(){const n=[];return{addProject:function(t){n.push(t),function(){const t=document.querySelector(".project-list-ul");t&&(t.innerHTML="",n.forEach((n=>{const e=document.createElement("li");t.appendChild(e);const r=document.createElement("button");r.classList.add("btnTasks"),r.classList.add("btnProject"),r.classList.add("btntags-list"),r.textContent=n,e.appendChild(r)})))}()},projects:n}}();function H(n){const t=document.createElement("div");t.classList.add("popup-modal");const e=document.createElement("dialog"),r=document.createElement("div");r.id="dialog-container";const o=document.createElement("div");o.classList.add("close-div"),r.appendChild(o);const a=document.createElement("button");a.id="close-button",a.textContent="X",a.onclick=()=>{l()},o.appendChild(a);const i=document.createElement("form");i.action="",i.method="get",i.id="dialog-form",r.appendChild(i);const s=document.createElement("div");s.id="input-title";const A=document.createElement("input");A.type="text",A.id="title",A.name="title",A.placeholder=`Add a ${n}`,A.pattern="^[a-zA-Z\\s]+$",A.size="15",A.maxLength="245",A.required=!0,s.appendChild(A),i.appendChild(s);const d=document.createElement("div");d.id="button-div",i.appendChild(d);const c=document.createElement("button");function l(){e.close(),t.remove()}return c.id="add-button",c.textContent="Add",c.type="submit",c.autofocus=!0,d.appendChild(c),i.onsubmit=t=>{t.preventDefault(),"Project"===n&&k.addProject(A.value),"Tag"===n&&y.addTag(A.value),l()},e.appendChild(r),t.appendChild(e),document.body.appendChild(t),t.addEventListener("click",(n=>{r.contains(n.target)||(l(),t.remove())})),{showDialog:function(){e.showModal()},closeDialog:l}}var L=e(536),T={};function V(){const n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],t=document.createElement("div");t.classList.add("content");const e=document.createElement("div");e.classList.add("contentHeader"),e.textContent="Today's Tasks",t.appendChild(e);const r=document.createElement("div");return r.classList.add("table-content"),t.appendChild(r),{num:0,contentTable:0,contentDiv:t,createTable:function(t,o,a){r.innerHTML="";for(let i=0;i<=t;i++){const t=document.createElement("table");t.classList.add("table"),1==o?(r.classList.remove("table-content-not-weekly"),t.textContent=`${n[i]}`,e.textContent="Week's Tasks"):0==o&&0==i?(r.classList.add("table-content-not-weekly"),t.textContent="Today",e.textContent="Today's Tasks"):2==o&&0==i?(r.classList.add("table-content-not-weekly"),t.textContent="All My Tasks",e.textContent="All My Tasks"):3==o&&0==i?(r.classList.add("table-content-not-weekly"),t.textContent="Tasks",e.textContent=`Project ${a}`):4==o&&0==i&&(r.classList.add("table-content-not-weekly"),t.textContent="Tasks",e.textContent=`Tag ${a}`),r.appendChild(t)}}}}T.styleTagTransform=u(),T.setAttributes=c(),T.insert=A().bind(null,"head"),T.domAPI=i(),T.insertStyleElement=C(),o()(L.A,T),L.A&&L.A.locals&&L.A.locals,document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.createElement("header"),t=document.createElement("h1");t.textContent="ToDo List App",n.appendChild(t),document.body.appendChild(n)}(),function(){let n="";const t=function(){const n=document.createElement("aside"),t=document.createElement("div");t.classList.add("aside-account"),n.appendChild(t);const e=document.createElement("svg");e.classList.add("aside-account-icon"),t.appendChild(e);const r=document.createElement("h2");r.textContent="Seamor",t.appendChild(r);const o=document.createElement("div");o.classList.add("aside-option"),n.appendChild(o);const a=document.createElement("ul");a.classList.add("aside-option-ul"),o.appendChild(a);const i=document.createElement("li");i.classList.add("todays-task"),o.appendChild(i);const s=document.createElement("button");s.classList.add("btntodays-task"),s.classList.add("btnTasks"),s.classList.add("btnActive"),s.style.zIndex="2",i.appendChild(s);const A=document.createElement("svg");A.classList.add("todays-task-icon"),s.appendChild(A);const d=document.createTextNode("Today's Tasks");s.appendChild(d);const c=document.createElement("li");c.classList.add("week-tasks"),o.appendChild(c);const l=document.createElement("button");l.classList.add("btnweek-tasks"),l.classList.add("btnTasks"),c.appendChild(l);const C=document.createElement("svg");C.classList.add("week-tasks-icon"),l.appendChild(C);const p=document.createTextNode("Week's Tasks");l.appendChild(p);const u=document.createElement("li");u.classList.add("all-tasks"),o.appendChild(u);const g=document.createElement("button");g.classList.add("btnall-tasks"),g.classList.add("btnTasks"),u.appendChild(g);const E=document.createElement("svg");E.classList.add("all-tasks-icon"),g.appendChild(E);const m=document.createTextNode("All My Tasks");g.appendChild(m);const h=document.createElement("div");h.classList.add("aside-projects"),n.appendChild(h);const b=document.createElement("div");b.classList.add("project-title-container"),h.appendChild(b);const B=document.createElement("h2");B.textContent="Projects",b.appendChild(B);const x=document.createElement("button");x.classList.add("btn-add-project"),b.appendChild(x);const v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttribute("xmlns","http://www.w3.org/2000/svg"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("width","20"),v.setAttribute("height","20"),v.setAttribute("fill","#493628");const f=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttribute("d","M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"),v.appendChild(f),x.appendChild(v),x.addEventListener("mouseenter",(()=>{f.setAttribute("fill","#9d5900")})),x.addEventListener("click",(()=>{H("Project").showDialog()})),x.addEventListener("mouseleave",(()=>{f.setAttribute("fill","#493628")}));const w=document.createElement("div");w.classList.add("project-list-container"),h.appendChild(w);const y=document.createElement("ul");y.classList.add("project-list-ul"),w.appendChild(y);const k=document.createElement("div");k.classList.add("aside-tags"),n.appendChild(k);const L=document.createElement("div");L.classList.add("tag-title-container"),k.appendChild(L);const T=document.createElement("h2");T.textContent="Tags",L.appendChild(T);const V=document.createElement("button");V.classList.add("btn-add-tag"),L.appendChild(V);const M=document.createElementNS("http://www.w3.org/2000/svg","svg");M.setAttribute("xmlns","http://www.w3.org/2000/svg"),M.setAttribute("viewBox","0 0 24 24"),M.setAttribute("width","20"),M.setAttribute("height","20"),M.setAttribute("fill","#493628");const F=document.createElementNS("http://www.w3.org/2000/svg","path");F.setAttribute("d","M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"),M.appendChild(F),V.appendChild(M),V.addEventListener("mouseenter",(()=>{F.setAttribute("fill","#9d5900")})),V.addEventListener("click",(()=>{H("Tag").showDialog()})),V.addEventListener("mouseleave",(()=>{F.setAttribute("fill","#493628")}));const j=document.createElement("div");j.classList.add("tag-list-container"),k.appendChild(j);const z=document.createElement("ul");return z.classList.add("tag-list-ul"),j.appendChild(z),n}(),{contentDiv:e,createTable:r}=V();let{num:o,contentTable:a}=V();const i=document.createElement("div");i.classList.add("container"),document.body.appendChild(i),i.appendChild(t),i.appendChild(e),i.addEventListener("click",(t=>{t.target.classList.contains("btnTasks")&&(i.querySelectorAll(".btnTasks").forEach((n=>n.classList.remove("btnActive"))),t.target.classList.add("btnActive"),t.target.classList.contains("btnweek-tasks")?(o=6,a=1):t.target.classList.contains("btnall-tasks")?(o=1,a=2):t.target.classList.contains("btnProject")?(o=1,a=3,n=t.target.textContent):t.target.classList.contains("btnTag")?(o=1,a=4,n=t.target.textContent):(o=1,a=0),r(o,a,n))}))}()}))})();
//# sourceMappingURL=main.87cd32804192948e1fc5.js.map