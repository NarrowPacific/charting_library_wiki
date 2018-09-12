(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{163:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v("💹 All content on this page applies to "),a("a",{attrs:{href:"Trading-Terminal"}},[t._v("Trading Terminal")]),t._v(" only.")]),t._v(" "),a("p",[a("strong",[t._v("NOTE:")]),t._v(" If you use TypeScript - you can import these constants/interfaces/types from the "),a("code",[t._v("broker-api.d.ts")]),t._v(" file.")]),t._v(" "),a("h2",{attrs:{id:"broker-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Broker Configuration")]),t._v(" "),a("h3",{attrs:{id:"configflags-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configflags-object","aria-hidden":"true"}},[t._v("#")]),t._v(" configFlags: object")]),t._v(" "),a("p",[t._v("This is an object that should be passed in the constructor of the Trading Terminal to "),a("a",{attrs:{href:"Widget-Constructor#brokerConfig"}},[t._v("brokerConfig")]),t._v(". Each field should have a boolean value ("),a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")]),t._v("):")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("supportReversePosition")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports reversing of a position.\nIf it is not supported by broker, Chart will have the reverse button, but it will place a reversing order.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportClosePosition")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports closing of a position.\nIf it is not supported by broker, Chart will have the close button, but it will place a closing order.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportReducePosition")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports changing of a position without orders.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportPLUpdate")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker provides PL for a position. If the broker calculates profit/loss by itself it should call "),a("a",{attrs:{href:"Trading-Host#plupdatepositionid-pl"}},[t._v("plUpdate")]),t._v(" as soon as PL is changed.\nOtherwise Chart will calculate PL as a difference between the current trade and an average price of the position.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportOrderBrackets")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports brackets (take profit and stop loss) for orders.\nIf this flag is set to "),a("code",[t._v("true")]),t._v(" the Chart will display additional fields in the order ticket and Modify button on a chart and in the Account Manager.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportPositionBrackets")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports brackets (take profit and stop loss orders) for positions.\nIf this flag is set to "),a("code",[t._v("true")]),t._v(" the Chart will display an Edit button for positions and add "),a("code",[t._v("Edit position...")]),t._v(" to the context menu of a position.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportTradeBrackets")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports brackets for trades (take profit and stop loss orders).\nIf this flag is set to "),a("code",[t._v("true")]),t._v(" the Chart will display an Edit button for trades (individual positions) and add "),a("code",[t._v("Edit position...")]),t._v(" to the context menu of a trade.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportTrades")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Broker supports individual positions (trades).\nIf it is set to "),a("code",[t._v("true")]),t._v(", there will be two tabs in the Account Manager - Individual Positions and Net Positions.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("requiresFIFOCloseTrades")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Trading account requires closing of trades in FIFO order.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportCloseTrade")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Individual positions (trades) can be closed.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportMultiposition")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Supporting multiposition prevents creating the default implementation for a reversing position.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("showQuantityInsteadOfAmount")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v('This flag can be used to change "Amount" to "Quantity" in the order dialog')])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportLevel2Data")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Level2 data is used for DOM widget. "),a("code",[t._v("subscribeDepth")]),t._v(" and "),a("code",[t._v("unsubscribeDepth")]),t._v(" should be implemented.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportMarketOrders")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("This flag adds market orders type to the order dialog.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportLimitOrders")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("This flag adds limit orders type to the order dialog.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportStopOrders")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("This flag adds stop orders type to the order dialog.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportStopLimitOrders")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("This flag adds stop-limit orders type to the order dialog.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportMarketBrackets")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("Using this flag you can disable brackets for market orders. It is enabled by default.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportModifyDuration")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("Using this flag you can enable modification of the duration of the existing order. It is disabled by default.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("supportModifyOrder")])]),t._v(" "),a("p",[a("em",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("Using this flag you can disable modification of the existing order. It is enabled by default.")])])]),t._v(" "),a("h3",{attrs:{id:"durations-array-of-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#durations-array-of-objects","aria-hidden":"true"}},[t._v("#")]),t._v(" durations: array of objects")]),t._v(" "),a("p",[t._v("List of expiration options of orders. It is optional. Do not set it if you don't want the durations to be displayed in the order ticket.\nThe objects have two keys: "),a("code",[t._v("{ name, value }")]),t._v(".")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("durations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'DAY'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'DAY'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'GTC'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'GTC'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"customnotificationfields-array-of-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customnotificationfields-array-of-strings","aria-hidden":"true"}},[t._v("#")]),t._v(" customNotificationFields: array of strings")]),t._v(" "),a("p",[t._v("Optional field. You can use it if you have custom fields in orders or positions that should be taken into account when showing notifications.")]),t._v(" "),a("p",[t._v("For example, if you have field "),a("code",[t._v("additionalType")]),t._v(" in orders and you want the chart to show a notification when it is changed, you should set:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("customNotificationFields"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'additionalType'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order","aria-hidden":"true"}},[t._v("#")]),t._v(" Order")]),t._v(" "),a("p",[t._v("Describes a single order.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("id")]),t._v(" : String")]),t._v(" "),a("li",[a("code",[t._v("symbol")]),t._v(" : String")]),t._v(" "),a("li",[a("code",[t._v("brokerSymbol")]),t._v(" : String. Can be empty if broker symbol is the same as TV symbol.")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(" : "),a("a",{attrs:{href:"#ordertype"}},[t._v("OrderType")])]),t._v(" "),a("li",[a("code",[t._v("side")]),t._v(" : "),a("a",{attrs:{href:"#side"}},[t._v("Side")])]),t._v(" "),a("li",[a("code",[t._v("qty")]),t._v(" : Double")]),t._v(" "),a("li",[a("code",[t._v("status")]),t._v(" : "),a("a",{attrs:{href:"#orderstatus"}},[t._v("OrderStatus")])]),t._v(" "),a("li",[a("code",[t._v("limitPrice")]),t._v(" : double")]),t._v(" "),a("li",[a("code",[t._v("stopPrice")]),t._v(" : double")]),t._v(" "),a("li",[a("code",[t._v("avgPrice")]),t._v(" : double")]),t._v(" "),a("li",[a("code",[t._v("filledQty")]),t._v(" : double")]),t._v(" "),a("li",[a("code",[t._v("parentId")]),t._v(" : String. If order is a bracket parentOrderId should contain base order/position id.")]),t._v(" "),a("li",[a("code",[t._v("parentType")]),t._v(": "),a("a",{attrs:{href:"#parenttype"}},[t._v("ParentType")])]),t._v(" "),a("li",[a("code",[t._v("duration")]),t._v(": "),a("a",{attrs:{href:"#orderduration"}},[t._v("OrderDuration")])])]),t._v(" "),a("h2",{attrs:{id:"position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position","aria-hidden":"true"}},[t._v("#")]),t._v(" Position")]),t._v(" "),a("p",[t._v("Describes a single position.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("id")]),t._v(": String. Usually id should be equal to brokerSymbol")]),t._v(" "),a("li",[a("code",[t._v("symbol")]),t._v(" : String")]),t._v(" "),a("li",[a("code",[t._v("brokerSymbol")]),t._v(" : String. Can be empty if broker symbol is the same as TV symbol.")]),t._v(" "),a("li",[a("code",[t._v("qty")]),t._v(" : positive number")]),t._v(" "),a("li",[a("code",[t._v("side")]),t._v(": "),a("a",{attrs:{href:"#side"}},[t._v("Side")])]),t._v(" "),a("li",[a("code",[t._v("avgPrice")]),t._v(" : number")])]),t._v(" "),a("h2",{attrs:{id:"trade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trade","aria-hidden":"true"}},[t._v("#")]),t._v(" Trade")]),t._v(" "),a("p",[t._v("Describes a single trade (individual position).")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("id")]),t._v(": String. Usually id should be equal to brokerSymbol")]),t._v(" "),a("li",[a("code",[t._v("symbol")]),t._v(" : String")]),t._v(" "),a("li",[a("code",[t._v("date")]),t._v(": number (UNIX timestamp in milliseconds)")]),t._v(" "),a("li",[a("code",[t._v("brokerSymbol")]),t._v(" : String. Can be empty if broker symbol is the same as TV symbol.")]),t._v(" "),a("li",[a("code",[t._v("qty")]),t._v(" : Double positive")]),t._v(" "),a("li",[a("code",[t._v("side")]),t._v(": "),a("a",{attrs:{href:"#side"}},[t._v("Side")])]),t._v(" "),a("li",[a("code",[t._v("price")]),t._v(" : number")])]),t._v(" "),a("h2",{attrs:{id:"execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution","aria-hidden":"true"}},[t._v("#")]),t._v(" Execution")]),t._v(" "),a("p",[t._v("Describes a single execution. Execution is a mark on a chart that displays trade information.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("symbol")]),t._v(" : String")]),t._v(" "),a("li",[a("code",[t._v("brokerSymbol")]),t._v(" : String. Can be empty if broker symbol is the same as TV symbol.")]),t._v(" "),a("li",[a("code",[t._v("price")]),t._v(" : number")]),t._v(" "),a("li",[a("code",[t._v("time")]),t._v(": Date")]),t._v(" "),a("li",[a("code",[t._v("side")]),t._v(" : "),a("a",{attrs:{href:"#side"}},[t._v("Side")])]),t._v(" "),a("li",[a("code",[t._v("qty")]),t._v(" : number")])]),t._v(" "),a("h2",{attrs:{id:"actionmetainfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actionmetainfo","aria-hidden":"true"}},[t._v("#")]),t._v(" ActionMetainfo")]),t._v(" "),a("p",[t._v("Describes a single action to put it into a dropdown or a context menu. It is a structure.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("text")]),t._v(" : String")]),t._v(" "),a("li",[a("code",[t._v("checkable")]),t._v(" : Boolean. Set it to true if you need a checkbox.")]),t._v(" "),a("li",[a("code",[t._v("checked")]),t._v(" : Boolean. Value of the checkbox.")]),t._v(" "),a("li",[a("code",[t._v("enabled")]),t._v(": Boolean")]),t._v(" "),a("li",[a("code",[t._v("action")]),t._v(": function. Action is executed when user clicks the item. It has 1 argument - value of the checkbox if exists.")])]),t._v(" "),a("h2",{attrs:{id:"ordertype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordertype","aria-hidden":"true"}},[t._v("#")]),t._v(" OrderType")]),t._v(" "),a("p",[t._v("Constants describing an order status.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("OrderType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Limit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\nOrderType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Market "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\nOrderType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stop "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\nOrderType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StopLimit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),a("h2",{attrs:{id:"side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#side","aria-hidden":"true"}},[t._v("#")]),t._v(" Side")]),t._v(" "),a("p",[t._v("Constants describing an order/execution side.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Side"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Buy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\nSide"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sell "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h2",{attrs:{id:"parenttype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parenttype","aria-hidden":"true"}},[t._v("#")]),t._v(" ParentType")]),t._v(" "),a("p",[t._v("Constants describing a bracket order.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ParentType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Order "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\nParentType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("h2",{attrs:{id:"orderstatus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderstatus","aria-hidden":"true"}},[t._v("#")]),t._v(" OrderStatus")]),t._v(" "),a("p",[t._v("Constants describing an order status.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("OrderStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Canceled "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// order is canceled")]),t._v("\nOrderStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filled "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// order is fully executed")]),t._v("\nOrderStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Inactive "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// bracket order is created but waiting for a base order to be filled")]),t._v("\nOrderStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Placing "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// order is not created on a broker side yet")]),t._v("\nOrderStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rejected "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// order is rejected for some reason")]),t._v("\nOrderStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Working "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// order is created but not executed yet")]),t._v("\n")])])]),a("h2",{attrs:{id:"orderduration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderduration","aria-hidden":"true"}},[t._v("#")]),t._v(" OrderDuration")]),t._v(" "),a("p",[t._v("Duration or expiration of an order.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("type")]),t._v(": string identifier from the list that you pass to "),a("a",{attrs:{href:"#orderduration"}},[t._v("durations")])]),t._v(" "),a("li",[a("code",[t._v("datetime")]),t._v(": number")])]),t._v(" "),a("h2",{attrs:{id:"domeobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domeobject","aria-hidden":"true"}},[t._v("#")]),t._v(" DOMEObject")]),t._v(" "),a("p",[t._v("Object that describes a single DOM response.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("snapshot")]),t._v(": Boolean")]),t._v(" "),a("p",[t._v("Positive value means that previous data should be cleaned")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("asks")]),t._v(": array of DOMELevel sorted by price in ascending order")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("bids")]),t._v(": array of DOMELevel sorted by price in ascending order")])])]),t._v(" "),a("h2",{attrs:{id:"domelevel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domelevel","aria-hidden":"true"}},[t._v("#")]),t._v(" DOMELevel")]),t._v(" "),a("p",[t._v("Single DOM price level object.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("price")]),t._v(": double")]),t._v(" "),a("li",[a("code",[t._v("volume")]),t._v(": double")])]),t._v(" "),a("h2",{attrs:{id:"orderticketfocuscontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderticketfocuscontrol","aria-hidden":"true"}},[t._v("#")]),t._v(" OrderTicketFocusControl")]),t._v(" "),a("p",[t._v("Constants that are used to set the focus when you open standard Order dialog or Position dialog.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("OrderTicketFocusControl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StopLoss "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// focus stop loss control")]),t._v("\nOrderTicketFocusControl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StopPrice "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// focus stop price for StopLimit orders")]),t._v("\nOrderTicketFocusControl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TakeProfit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// focus take profit control")]),t._v("\n")])])]),a("h2",{attrs:{id:"brackets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brackets","aria-hidden":"true"}},[t._v("#")]),t._v(" Brackets")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("stopLoss")]),t._v(": double")]),t._v(" "),a("li",[a("code",[t._v("takeProfit")]),t._v(": double")])]),t._v(" "),a("h2",{attrs:{id:"formatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatter","aria-hidden":"true"}},[t._v("#")]),t._v(" Formatter")]),t._v(" "),a("p",[t._v("An object with "),a("code",[t._v("format")]),t._v(" method that can be used to format the number to a string.")])])}],!1,null,null,null);r.options.__file="Trading-Objects-and-Constants.md";e.default=r.exports}}]);