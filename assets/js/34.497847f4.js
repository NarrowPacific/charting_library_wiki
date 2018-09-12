(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{244:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"study-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#study-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Study API")]),e._v(" "),a("h3",{attrs:{id:"isusereditenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isusereditenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" isUserEditEnabled()")]),e._v(" "),a("p",[e._v("Returns "),a("code",[e._v("true")]),e._v(" if a user is able to remove/change/hide the study.")]),e._v(" "),a("h3",{attrs:{id:"setusereditenabled-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setusereditenabled-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" setUserEditEnabled(enabled)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("enabled")]),e._v(" - "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Enables or disables removing/changing/hiding a study by the user.")]),e._v(" "),a("h3",{attrs:{id:"getinputsinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getinputsinfo","aria-hidden":"true"}},[e._v("#")]),e._v(" getInputsInfo()")]),e._v(" "),a("p",[e._v("Returns the information about all the inputs - an array of "),a("a",{attrs:{href:"#studyinputinfo"}},[e._v("StudyInputInfo")]),e._v(" objects.")]),e._v(" "),a("h3",{attrs:{id:"getinputvalues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getinputvalues","aria-hidden":"true"}},[e._v("#")]),e._v(" getInputValues()")]),e._v(" "),a("p",[e._v("Returns values of study inputs - an array of "),a("a",{attrs:{href:"#studyinputvalueitem"}},[e._v("StudyInputValueItem")]),e._v(" objects.")]),e._v(" "),a("h3",{attrs:{id:"setinputvalues-inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setinputvalues-inputs","aria-hidden":"true"}},[e._v("#")]),e._v(" setInputValues(inputs)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("inputs")]),e._v(" should be an array of "),a("a",{attrs:{href:"#studyinputvalueitem"}},[e._v("StudyInputValueItem")]),e._v(" objects.")])]),e._v(" "),a("p",[e._v("Sets input values for a study. It may contain only some of the inputs that you wish to change.")]),e._v(" "),a("h3",{attrs:{id:"mergeup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mergeup","aria-hidden":"true"}},[e._v("#")]),e._v(" mergeUp()")]),e._v(" "),a("p",[e._v("Merges the study up (if possible).")]),e._v(" "),a("h3",{attrs:{id:"mergedown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mergedown","aria-hidden":"true"}},[e._v("#")]),e._v(" mergeDown()")]),e._v(" "),a("p",[e._v("Merges the study down (if possible).")]),e._v(" "),a("h3",{attrs:{id:"unmergeup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unmergeup","aria-hidden":"true"}},[e._v("#")]),e._v(" unmergeUp()")]),e._v(" "),a("p",[e._v("Unmerges the study up (if possible).")]),e._v(" "),a("h3",{attrs:{id:"unmergedown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unmergedown","aria-hidden":"true"}},[e._v("#")]),e._v(" unmergeDown()")]),e._v(" "),a("p",[e._v("Unmerges the study down (if possible).")]),e._v(" "),a("h3",{attrs:{id:"changepricescale-pricescale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changepricescale-pricescale","aria-hidden":"true"}},[e._v("#")]),e._v(" changePriceScale(priceScale)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("priceScale")]),e._v(" should be a string with one of the following values:\n"),a("ul",[a("li",[a("code",[e._v("left")]),e._v(" - attach the study to the left price scale")]),e._v(" "),a("li",[a("code",[e._v("right")]),e._v(" - attach the study to the right price scale")]),e._v(" "),a("li",[a("code",[e._v("no-scale")]),e._v(" - do not attach the study to any price scale. The study will be added in 'No Scale' mode")]),e._v(" "),a("li",[a("code",[e._v("as-series")]),e._v(" - attach the study to the price scale where the main series is attached (it is only applicable if the study and the main series are located on the same pane)")])])])]),e._v(" "),a("p",[e._v("Changes the price scale of the study")]),e._v(" "),a("h3",{attrs:{id:"isvisible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isvisible","aria-hidden":"true"}},[e._v("#")]),e._v(" isVisible()")]),e._v(" "),a("p",[e._v("Returns "),a("code",[e._v("true")]),e._v(" if the study is visible.")]),e._v(" "),a("h3",{attrs:{id:"setvisible-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setvisible-value","aria-hidden":"true"}},[e._v("#")]),e._v(" setVisible(value)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("value")]),e._v(" - "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Shows/hides the study.")]),e._v(" "),a("h3",{attrs:{id:"bringtofront"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bringtofront","aria-hidden":"true"}},[e._v("#")]),e._v(" bringToFront()")]),e._v(" "),a("p",[e._v("Places the study on top of all other chart objects.")]),e._v(" "),a("h3",{attrs:{id:"sendtoback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendtoback","aria-hidden":"true"}},[e._v("#")]),e._v(" sendToBack()")]),e._v(" "),a("p",[e._v("Places the study behind all other chart objects.")]),e._v(" "),a("h3",{attrs:{id:"applyoverrides-overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applyoverrides-overrides","aria-hidden":"true"}},[e._v("#")]),e._v(" applyOverrides(overrides)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("overrides")]),e._v(" - new "),a("a",{attrs:{href:"Studies-Overrides"}},[e._v("overrides")]),e._v(" for the study")])]),e._v(" "),a("p",[e._v("Applies "),a("code",[e._v("overrides")]),e._v(" to the study.")]),e._v(" "),a("p",[e._v("Note: "),a("code",[e._v("overrides")]),e._v(" object keys don’t need to start with the study name. The key is applied to a particular study.\nFor example, you should use "),a("code",[e._v("style")]),e._v(" instead of "),a("code",[e._v("Overlay.style")]),e._v(" to override the current style of the Overlay study.")]),e._v(" "),a("h2",{attrs:{id:"primitive-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primitive-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Primitive types")]),e._v(" "),a("h3",{attrs:{id:"studyinputinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#studyinputinfo","aria-hidden":"true"}},[e._v("#")]),e._v(" StudyInputInfo")]),e._v(" "),a("p",[e._v("An object with the following keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("id")]),e._v(" - input ID of the study")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(" - name of the input")]),e._v(" "),a("li",[a("code",[e._v("type")]),e._v(" - type of the input")]),e._v(" "),a("li",[a("code",[e._v("localizedName")]),e._v(" - name of the input translated to the current language")])]),e._v(" "),a("h3",{attrs:{id:"studyinputvalueitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#studyinputvalueitem","aria-hidden":"true"}},[e._v("#")]),e._v(" StudyInputValueItem")]),e._v(" "),a("p",[e._v("An object with the following keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("id")]),e._v(" - input ID of the study")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" - value of the input")])])])}],!1,null,null,null);r.options.__file="Study-Api.md";t.default=r.exports}}]);