"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/slices/basketSlice.js

const initialState = {
    items: []
};
const basketSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action)=>{},
        removeFromBasket: (state, action)=>{}
    }
});
const { addToBasket , removeFromBasket  } = basketSlice.actions;
// Selectors - This is how we pull information from the Global store slice
const selectItems = (state)=>state.basket.items
;
/* harmony default export */ const slices_basketSlice = (basketSlice.reducer);

;// CONCATENATED MODULE: ./src/app/store.js


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        basket: slices_basketSlice
    }
});

;// CONCATENATED MODULE: ./src/pages/_app.js




const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(248));
module.exports = __webpack_exports__;

})();