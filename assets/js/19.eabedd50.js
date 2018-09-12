(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{222:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[a("strong",[e._v("What is JS API?")]),e._v(": A set of JS methods (specific public interface).")]),e._v(" "),a("p",[a("strong",[e._v("Which steps should I follow to start using it?")]),e._v(": You should create a JS object that will receive data by some way and respond to Charting Library requests.")]),e._v(" "),a("p",[e._v("Data caching (history & symbol info) is implemented in the Charting Library.")]),e._v(" "),a("p",[e._v("When you create an object that implements the described interface simply pass it to Library widget constructor through "),a("a",{attrs:{href:"Widget-Constructor#datafeed"}},[a("code",[e._v("datafeed")]),e._v(" argument")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#onreadycallback"}},[e._v("onReady")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#searchsymbolsuserinput-exchange-symboltype-onresultreadycallback"}},[e._v("searchSymbols")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#resolvesymbolsymbolname-onsymbolresolvedcallback-onresolveerrorcallback"}},[e._v("resolveSymbol")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#getbarssymbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest"}},[e._v("getBars")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#subscribebarssymbolinfo-resolution-onrealtimecallback-subscriberuid-onresetcacheneededcallback"}},[e._v("subscribeBars")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#unsubscribebarssubscriberuid"}},[e._v("unsubscribeBars")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#calculatehistorydepthresolution-resolutionback-intervalback"}},[e._v("calculateHistoryDepth")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#getmarkssymbolinfo-from-to-ondatacallback-resolution"}},[e._v("getMarks")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gettimescalemarkssymbolinfo-from-to-ondatacallback-resolution"}},[e._v("getTimescaleMarks")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#getservertimecallback"}},[e._v("getServerTime")])])]),e._v(" "),a("p",[e._v("💹 "),a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#getquotessymbols-ondatacallback-onerrorcallback"}},[e._v("getQuotes")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#subscribequotessymbols-fastsymbols-onrealtimecallback-listenerguid"}},[e._v("subscribeQuotes")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#unsubscribequoteslistenerguid"}},[e._v("unsubscribeQuotes")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#subscribedepthsymbolinfo-callback-string"}},[e._v("subscribeDepth")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#unsubscribedepthsubscriberuid"}},[e._v("unsubscribeDepth")])])]),e._v(" "),a("h3",{attrs:{id:"onready-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onready-callback","aria-hidden":"true"}},[e._v("#")]),e._v(" onReady(callback)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("callback")]),e._v(": function(configurationData)\n"),a("ol",[a("li",[a("code",[e._v("configurationData")]),e._v(": object (see below)")])])])]),e._v(" "),a("p",[e._v("This call is intended to provide the object filled with the configuration data.\nThis data partially affects the chart behavior and is called "),a("a",{attrs:{href:"Customization-Overview#customization-done-through-data-stream"}},[e._v("server-side customization")]),e._v(".\nCharting Library assumes that you will call the callback function and pass your datafeed "),a("code",[e._v("configurationData")]),e._v(" as an argument.\nConfiguration data is an object; for now, the following properties are supported:")]),e._v(" "),a("h4",{attrs:{id:"exchanges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exchanges","aria-hidden":"true"}},[e._v("#")]),e._v(" exchanges")]),e._v(" "),a("p",[e._v("An array of exchange descriptors. Exchange descriptor is an object "),a("code",[e._v("{value, name, desc}")]),e._v(". "),a("code",[e._v("value")]),e._v(" will be passed as "),a("code",[e._v("exchange")]),e._v(" argument to "),a("a",{attrs:{href:"#searchsymbolsuserinput-exchange-symboltype-onresultreadycallback"}},[e._v("searchSymbols")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("exchanges = []")]),e._v("  leads to the absence of the exchanges filter in Symbol Search list. Use "),a("code",[e._v('value = ""')]),e._v(" if you wish to include all exchanges.")]),e._v(" "),a("h4",{attrs:{id:"symbols-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbols-types","aria-hidden":"true"}},[e._v("#")]),e._v(" symbols_types")]),e._v(" "),a("p",[e._v("An array of filter descriptors. Filter descriptor is an object "),a("code",[e._v("{name, value}")]),e._v(". "),a("code",[e._v("value")]),e._v(" will be passed as "),a("code",[e._v("symbolType")]),e._v(" argument to "),a("a",{attrs:{href:"#searchsymbolsuserinput-exchange-symboltype-onresultreadycallback"}},[e._v("searchSymbols")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("symbolsTypes = []")]),e._v("  leads to the absence of filter types in Symbol Search list. Use "),a("code",[e._v('value = ""')]),e._v(" if you wish to include all filter types.")]),e._v(" "),a("h4",{attrs:{id:"supported-resolutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-resolutions","aria-hidden":"true"}},[e._v("#")]),e._v(" supported_resolutions")]),e._v(" "),a("p",[e._v("An array of supported resolutions. Resolution must be a string. Format is described in another "),a("a",{attrs:{href:"Resolution"}},[e._v("article")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("supported_resolutions = undefined")]),e._v(" or "),a("code",[e._v("supported_resolutions = []")]),e._v(" leads to resolution widget including the default content.")]),e._v(" "),a("p",[e._v("Example: "),a("code",[e._v('["1", "15", "240", "D", "6M"]')]),e._v(' will give you "1 minute, 15 minutes, 4 hours, 1 day, 6 months" in resolution widget.')]),e._v(" "),a("h4",{attrs:{id:"supports-marks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supports-marks","aria-hidden":"true"}},[e._v("#")]),e._v(" supports_marks")]),e._v(" "),a("p",[e._v("Boolean showing whether your datafeed supports marks on bars or not.")]),e._v(" "),a("h4",{attrs:{id:"supports-timescale-marks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supports-timescale-marks","aria-hidden":"true"}},[e._v("#")]),e._v(" supports_timescale_marks")]),e._v(" "),a("p",[e._v("Boolean showing whether your datafeed supports timescale marks or not.")]),e._v(" "),a("h4",{attrs:{id:"supports-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supports-time","aria-hidden":"true"}},[e._v("#")]),e._v(" supports_time")]),e._v(" "),a("p",[e._v("Set this one to "),a("code",[e._v("true")]),e._v(" if your datafeed provides server time (unix time). It is used to adjust Countdown on the Price scale.")]),e._v(" "),a("h4",{attrs:{id:"futures-regex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#futures-regex","aria-hidden":"true"}},[e._v("#")]),e._v(" futures_regex")]),e._v(" "),a("p",[e._v("Set it if you want to group futures in the symbol search. This REGEX should divide an instrument name into 2 parts: a root and an expiration.")]),e._v(" "),a("p",[e._v("Sample regex: : "),a("code",[e._v("/^(.+)([12]!|[FGHJKMNQUVXZ]\\d{1,2})$/")]),e._v(". It will be applied to the instruments with "),a("code",[e._v("futures")]),e._v(" as a "),a("code",[e._v("type")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"searchsymbols-userinput-exchange-symboltype-onresultreadycallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searchsymbols-userinput-exchange-symboltype-onresultreadycallback","aria-hidden":"true"}},[e._v("#")]),e._v(" searchSymbols(userInput, exchange, symbolType, onResultReadyCallback)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("userInput")]),e._v(": string. It is text entered by user in the symbol search field.")]),e._v(" "),a("li",[a("code",[e._v("exchange")]),e._v(": string. The requested exchange (chosen by user). Empty value means no filter was specified.")]),e._v(" "),a("li",[a("code",[e._v("symbolType")]),e._v(": string. The requested symbol type: "),a("code",[e._v("index")]),e._v(", "),a("code",[e._v("stock")]),e._v(", "),a("code",[e._v("forex")]),e._v(", etc (chosen by user).\nEmpty value means no filter was specified.")]),e._v(" "),a("li",[a("code",[e._v("onResultReadyCallback")]),e._v(": function(result)\n"),a("ol",[a("li",[a("code",[e._v("result")]),e._v(": array (see below)")])])])]),e._v(" "),a("p",[e._v("This call is intended to provide the list of symbols that match the user's search query. "),a("code",[e._v("result")]),e._v(" is expected to look like the following:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{attrs:{class:"token string"}},[e._v('"symbol"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"<short symbol name>"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{attrs:{class:"token string"}},[e._v('"full_name"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"<full symbol name>"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{attrs:{class:"token comment"}},[e._v("// e.g. BTCE:BTCUSD")]),e._v("\n        "),a("span",{attrs:{class:"token string"}},[e._v('"description"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"<symbol description>"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{attrs:{class:"token string"}},[e._v('"exchange"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"<symbol exchange name>"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{attrs:{class:"token string"}},[e._v('"ticker"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"<symbol ticker name, optional>"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{attrs:{class:"token string"}},[e._v('"type"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"stock"')]),e._v(" "),a("span",{attrs:{class:"token comment"}},[e._v('// or "futures" or "bitcoin" or "forex" or "index"')]),e._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{attrs:{class:"token comment"}},[e._v("//    .....")]),e._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("If no symbols are found, then callback should be called with an empty array. See more details about "),a("code",[e._v("ticker")]),e._v(" value "),a("a",{attrs:{href:"Symbology#ticker"}},[e._v("here")])]),e._v(" "),a("h3",{attrs:{id:"resolvesymbol-symbolname-onsymbolresolvedcallback-onresolveerrorcallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolvesymbol-symbolname-onsymbolresolvedcallback-onresolveerrorcallback","aria-hidden":"true"}},[e._v("#")]),e._v(" resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbolName")]),e._v(": string. Symbol name or "),a("code",[e._v("ticker")]),e._v(" if provided.")]),e._v(" "),a("li",[a("code",[e._v("onSymbolResolvedCallback")]),e._v(": function("),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("onResolveErrorCallback")]),e._v(": function(reason)")])]),e._v(" "),a("p",[e._v("Charting Library will call this function when it needs to get "),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(" by symbol name.")]),e._v(" "),a("h3",{attrs:{id:"getbars-symbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbars-symbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest","aria-hidden":"true"}},[e._v("#")]),e._v(" getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbolInfo")]),e._v(": "),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(" object")]),e._v(" "),a("li",[a("code",[e._v("resolution")]),e._v(": string")]),e._v(" "),a("li",[a("code",[e._v("from")]),e._v(": unix timestamp, leftmost required bar time")]),e._v(" "),a("li",[a("code",[e._v("to")]),e._v(": unix timestamp, rightmost required bar time")]),e._v(" "),a("li",[a("code",[e._v("onHistoryCallback")]),e._v(": function(array of "),a("code",[e._v("bar")]),e._v("s, "),a("code",[e._v("meta")]),e._v(" = "),a("code",[e._v("{ noData = false }")]),e._v(")\n"),a("ol",[a("li",[a("code",[e._v("bar")]),e._v(": object "),a("code",[e._v("{time, close, open, high, low, volume}")])]),e._v(" "),a("li",[a("code",[e._v("meta")]),e._v(": object "),a("code",[e._v("{noData = true | false, nextTime - unix time}")])])])]),e._v(" "),a("li",[a("code",[e._v("onErrorCallback")]),e._v(": function(reason)")]),e._v(" "),a("li",[a("code",[e._v("firstDataRequest")]),e._v(": boolean to identify the first call of this method for the particular symbol resolution.\nWhen it is set to "),a("code",[e._v("true")]),e._v(" you can ignore "),a("code",[e._v("to")]),e._v(" (which depends on browser's "),a("code",[e._v("Date.now()")]),e._v(") and return bars up to the latest bar.")])]),e._v(" "),a("p",[e._v("This function is called when the chart needs a history fragment defined by dates range.")]),e._v(" "),a("p",[e._v("The charting library assumes "),a("code",[e._v("onHistoryCallback")]),e._v(" to be called "),a("strong",[e._v("just once")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Important")]),e._v(": "),a("code",[e._v("nextTime")]),e._v(" is a time of the next bar in the history. It should be set if the requested period represents a gap in the data. Hence there is available data prior to the requested period.")]),e._v(" "),a("p",[a("strong",[e._v("Important")]),e._v(": "),a("code",[e._v("noData")]),e._v(" should be set if there is no data in the requested period.")]),e._v(" "),a("p",[a("strong",[e._v("Remark")]),e._v(": "),a("code",[e._v("bar.time")]),e._v(" is expected to be the amount of milliseconds since Unix epoch start in "),a("strong",[e._v("UTC")]),e._v(" timezone.")]),e._v(" "),a("p",[a("strong",[e._v("Remark")]),e._v(": "),a("code",[e._v("bar.time")]),e._v(" for daily bars is expected to be a trading day (not session start day) at 00:00 UTC.\nCharting Library adjusts time according to "),a("a",{attrs:{href:"Symbology#session"}},[e._v("Session")]),e._v(" from SymbolInfo")]),e._v(" "),a("p",[a("strong",[e._v("Remark")]),e._v(": "),a("code",[e._v("bar.time")]),e._v(" for monthly bars is the first trading day of the month without the time part")]),e._v(" "),a("h3",{attrs:{id:"subscribebars-symbolinfo-resolution-onrealtimecallback-subscriberuid-onresetcacheneededcallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribebars-symbolinfo-resolution-onrealtimecallback-subscriberuid-onresetcacheneededcallback","aria-hidden":"true"}},[e._v("#")]),e._v(" subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbolInfo")]),e._v(": "),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(" object")]),e._v(" "),a("li",[a("code",[e._v("resolution")]),e._v(": string")]),e._v(" "),a("li",[a("code",[e._v("onRealtimeCallback")]),e._v(": function(bar)\n"),a("ol",[a("li",[a("code",[e._v("bar")]),e._v(": object "),a("code",[e._v("{time, close, open, high, low, volume}")])])])]),e._v(" "),a("li",[a("code",[e._v("subscriberUID")]),e._v(": object")]),e._v(" "),a("li",[a("code",[e._v("onResetCacheNeededCallback")]),e._v(" "),a("em",[e._v("(since version 1.7)")]),e._v(": function() to be executed when bar data has changed")])]),e._v(" "),a("p",[e._v("Charting Library calls this function when it wants to receive real-time updates for a symbol. The Library assumes that you will call "),a("code",[e._v("onRealtimeCallback")]),e._v(" every time you want to update the most recent bar or to add a new one.")]),e._v(" "),a("p",[a("strong",[e._v("Remark")]),e._v(": When you call "),a("code",[e._v("onRealtimeCallback")]),e._v(" with bar having time equal to the most recent bar's time then the entire last bar is replaced with the "),a("code",[e._v("bar")]),e._v(" object you've passed into the call.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("ol",[a("li",[e._v("The most recent bar is "),a("code",[e._v("{1419411578413, 10, 12, 9, 11}")])]),e._v(" "),a("li",[e._v("You call "),a("code",[e._v("onRealtimeCallback({1419411578413, 10, 14, 9, 14})")])]),e._v(" "),a("li",[e._v("Library finds out that the bar with the time "),a("code",[e._v("1419411578413")]),e._v(" already exists and is the most recent one")]),e._v(" "),a("li",[e._v("Library replaces the entire bar making the most recent bar "),a("code",[e._v("{1419411578413, 10, 14, 9, 14}")])])]),e._v(" "),a("p",[a("strong",[e._v("Remark 2")]),e._v(": Is it possible either to update the most recent bar or to add a new one with "),a("code",[e._v("onRealtimeCallback")]),e._v(".\nYou'll get an error if you call this function when trying to update a historical bar.")]),e._v(" "),a("p",[a("strong",[e._v("Remark 3")]),e._v(": There is no way to change historical bars once they've been received by the chart currently.")]),e._v(" "),a("h3",{attrs:{id:"unsubscribebars-subscriberuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribebars-subscriberuid","aria-hidden":"true"}},[e._v("#")]),e._v(" unsubscribeBars(subscriberUID)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("subscriberUID")]),e._v(": object")])]),e._v(" "),a("p",[e._v("Charting Library calls this function when it doesn't want to receive updates for this subscriber any more. "),a("code",[e._v("subscriberUID")]),e._v(" will be the same object that Library passed to "),a("code",[e._v("subscribeBars")]),e._v(" before.")]),e._v(" "),a("h3",{attrs:{id:"calculatehistorydepth-resolution-resolutionback-intervalback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calculatehistorydepth-resolution-resolutionback-intervalback","aria-hidden":"true"}},[e._v("#")]),e._v(" calculateHistoryDepth(resolution, resolutionBack, intervalBack)")]),e._v(" "),a("p",[a("em",[e._v("Optional.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("resolution")]),e._v(": requested symbol resolution")]),e._v(" "),a("li",[a("code",[e._v("resolutionBack")]),e._v(": time period types. Supported values are: "),a("code",[e._v("D")]),e._v(" | "),a("code",[e._v("M")])]),e._v(" "),a("li",[a("code",[e._v("intervalBack")]),e._v(": amount of "),a("code",[e._v("resolutionBack")]),e._v(" periods that the Charting Library is going to request")])]),e._v(" "),a("p",[e._v("Charting Library calls this function when it is going to request some historical data to give you an ability to override the amount of bars requested.")]),e._v(" "),a("p",[e._v("It passes some arguments so that you are aware of the amount of bars it's going to get. Here are some examples:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v('calculateHistoryDepth("D", "M", 12)')]),e._v(" called: the Library is going to request 12 months of daily bars")]),e._v(" "),a("li",[a("code",[e._v('calculateHistoryDepth("60", "D", 15)')]),e._v(" called: the Library is going to request 15 days of hourly bars")])]),e._v(" "),a("p",[e._v("This function should return "),a("code",[e._v("undefined")]),e._v(" if you do not wish to override anything.\nIf you do, it should return an object "),a("code",[e._v("{resolutionBack, intervalBack}")]),e._v(".")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("p",[e._v("Let's assume that the implementation is as follows")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("Datafeed"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[e._v("calculateHistoryDepth")]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{attrs:{class:"token keyword"}},[e._v("function")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("resolution"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" resolutionBack"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" intervalBack"),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("resolution "),a("span",{attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"1D"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            resolutionBack"),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v("'M'")]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            intervalBack"),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token number"}},[e._v("6")]),e._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("When the Charting Library requests the data for "),a("code",[e._v("1D")]),e._v(" resolution, the history will be 6 months deep.\nIn all other cases the history depth will have the default value.")]),e._v(" "),a("h3",{attrs:{id:"getmarks-symbolinfo-from-to-ondatacallback-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getmarks-symbolinfo-from-to-ondatacallback-resolution","aria-hidden":"true"}},[e._v("#")]),e._v(" getMarks(symbolInfo, from, to, onDataCallback, resolution)")]),e._v(" "),a("p",[a("em",[e._v("Optional.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbolInfo")]),e._v(": "),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(" object")]),e._v(" "),a("li",[a("code",[e._v("from")]),e._v(": unix timestamp (UTC). Leftmost visible bar's time.")]),e._v(" "),a("li",[a("code",[e._v("to")]),e._v(": unix timestamp (UTC). Rightmost visible bar's time.")]),e._v(" "),a("li",[a("code",[e._v("onDataCallback")]),e._v(": function(array of "),a("code",[e._v("mark")]),e._v("s)")]),e._v(" "),a("li",[a("code",[e._v("resolution")]),e._v(": string")])]),e._v(" "),a("p",[e._v("The Library calls this function to get "),a("a",{attrs:{href:"Marks-On-Bars"}},[e._v("marks")]),e._v(" for visible bars range.")]),e._v(" "),a("p",[e._v("The Library assumes that you will call "),a("code",[e._v("onDataCallback")]),e._v(" only once per "),a("code",[e._v("getMarks")]),e._v(" call.")]),e._v(" "),a("p",[a("code",[e._v("mark")]),e._v(" is an object that has the following properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("id")]),e._v(": unique mark ID. It will be passed to a "),a("a",{attrs:{href:"Widget-Methods#subscribeevent-callback"}},[e._v("respective callback")]),e._v(" when user clicks on a mark")]),e._v(" "),a("li",[a("code",[e._v("time")]),e._v(": unix time, UTC")]),e._v(" "),a("li",[a("code",[e._v("color")]),e._v(": "),a("code",[e._v("red")]),e._v(" | "),a("code",[e._v("green")]),e._v(" | "),a("code",[e._v("blue")]),e._v(" | "),a("code",[e._v("yellow")]),e._v(" | "),a("code",[e._v("{ border: '#ff0000', background: '#00ff00' }")])]),e._v(" "),a("li",[a("code",[e._v("text")]),e._v(": mark popup text. HTML supported")]),e._v(" "),a("li",[a("code",[e._v("label")]),e._v(": a letter to be printed on a mark. Single character")]),e._v(" "),a("li",[a("code",[e._v("labelFontColor")]),e._v(": color of a letter on a mark")]),e._v(" "),a("li",[a("code",[e._v("minSize")]),e._v(": minimum mark size (diameter, pixels) (default value is "),a("code",[e._v("5")]),e._v(")")])]),e._v(" "),a("p",[e._v("A few marks per bar are allowed (for now, the maximum is "),a("code",[e._v("10")]),e._v("). Marks outside of the bars are not allowed.")]),e._v(" "),a("p",[a("strong",[e._v("Remark")]),e._v(": This function will be called only if you confirmed that your back-end is "),a("a",{attrs:{href:"#supports_marks"}},[e._v("supporting marks")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"gettimescalemarks-symbolinfo-from-to-ondatacallback-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettimescalemarks-symbolinfo-from-to-ondatacallback-resolution","aria-hidden":"true"}},[e._v("#")]),e._v(" getTimescaleMarks(symbolInfo, from, to, onDataCallback, resolution)")]),e._v(" "),a("p",[a("em",[e._v("Optional.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbolInfo")]),e._v(": "),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(" object")]),e._v(" "),a("li",[a("code",[e._v("from")]),e._v(": unix timestamp (UTC). Leftmost visible bar's time.")]),e._v(" "),a("li",[a("code",[e._v("to")]),e._v(": unix timestamp (UTC). Rightmost visible bar's time.")]),e._v(" "),a("li",[a("code",[e._v("onDataCallback")]),e._v(": function(array of "),a("code",[e._v("mark")]),e._v("s)")]),e._v(" "),a("li",[a("code",[e._v("resolution")]),e._v(": string")])]),e._v(" "),a("p",[e._v("The Library calls this function to get timescale marks for visible bars range.")]),e._v(" "),a("p",[e._v("The Library assumes that you will call "),a("code",[e._v("onDataCallback")]),e._v(" only once per "),a("code",[e._v("getTimescaleMarks")]),e._v(" call.")]),e._v(" "),a("p",[a("code",[e._v("mark")]),e._v(" is an object that has the following properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("id")]),e._v(": unique mark ID. Will be passed to a "),a("a",{attrs:{href:"Widget-Methods#subscribeevent-callback"}},[e._v("respective callback")]),e._v(" when user clicks on a mark")]),e._v(" "),a("li",[a("code",[e._v("time")]),e._v(": unix time, UTC")]),e._v(" "),a("li",[a("code",[e._v("color")]),e._v(": "),a("code",[e._v("red")]),e._v(" | "),a("code",[e._v("green")]),e._v(" | "),a("code",[e._v("blue")]),e._v(" | "),a("code",[e._v("yellow")]),e._v(" | ... | "),a("code",[e._v("#000000")])]),e._v(" "),a("li",[a("code",[e._v("label")]),e._v(": a letter to be printed on a mark. Single character")]),e._v(" "),a("li",[a("code",[e._v("tooltip")]),e._v(": array of text strings. Each element of the array is a new text line of a tooltip.")])]),e._v(" "),a("p",[e._v("Only one mark per bar is allowed. Marks outside of the bars are not allowed.")]),e._v(" "),a("p",[a("strong",[e._v("Remark")]),e._v(": This function will be called only if you confirmed that your back-end is "),a("a",{attrs:{href:"#supports_timescale_marks"}},[e._v("supporting marks")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"getservertime-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getservertime-callback","aria-hidden":"true"}},[e._v("#")]),e._v(" getServerTime(callback)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("callback")]),e._v(": function(unixTime)")])]),e._v(" "),a("p",[e._v("This function is called if the configuration flag "),a("code",[e._v("supports_time")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(" when the Charting Library needs to know the server time.")]),e._v(" "),a("p",[e._v("The Charting Library assumes that the callback is called once.")]),e._v(" "),a("p",[e._v("The time is provided without milliseconds.")]),e._v(" "),a("p",[e._v("It is used to display Countdown on the price scale.")]),e._v(" "),a("p",[e._v("Example: "),a("code",[e._v("1445324591")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"trading-terminal-specific"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trading-terminal-specific","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific")]),e._v(" "),a("h3",{attrs:{id:"getquotes-symbols-ondatacallback-onerrorcallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getquotes-symbols-ondatacallback-onerrorcallback","aria-hidden":"true"}},[e._v("#")]),e._v(" getQuotes(symbols, onDataCallback, onErrorCallback)")]),e._v(" "),a("p",[e._v("💹 "),a("em",[a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbols")]),e._v(": array of symbols names")]),e._v(" "),a("li",[a("code",[e._v("onDataCallback")]),e._v(": function(array of "),a("code",[e._v("data")]),e._v(")\n"),a("ol",[a("li",[a("code",[e._v("data")]),e._v(": "),a("a",{attrs:{href:"Quotes#symbol-quote-data"}},[e._v("symbol quote data")])])])]),e._v(" "),a("li",[a("code",[e._v("onErrorCallback")]),e._v(": function(reason)")])]),e._v(" "),a("p",[e._v("This function is called when the Charting Library needs quote data. The charting library assumes that "),a("code",[e._v("onDataCallback")]),e._v(" is called once when all the requested data is received.")]),e._v(" "),a("h3",{attrs:{id:"subscribequotes-symbols-fastsymbols-onrealtimecallback-listenerguid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribequotes-symbols-fastsymbols-onrealtimecallback-listenerguid","aria-hidden":"true"}},[e._v("#")]),e._v(" subscribeQuotes(symbols, fastSymbols, onRealtimeCallback, listenerGUID)")]),e._v(" "),a("p",[e._v("💹 "),a("em",[a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbols")]),e._v(": array of symbols that should be updated rarely (once per minute). These symbols are included in the watchlist but they are not visible at the moment.")]),e._v(" "),a("li",[a("code",[e._v("fastSymbols")]),e._v(": array of symbols that should be updated frequently (once every 10 seconds or more often)")]),e._v(" "),a("li",[a("code",[e._v("onRealtimeCallback")]),e._v(": function(array of "),a("code",[e._v("data")]),e._v(")\n"),a("ol",[a("li",[a("code",[e._v("data")]),e._v(": "),a("a",{attrs:{href:"Quotes#symbol-quote-data"}},[e._v("symbol quote data")])])])]),e._v(" "),a("li",[a("code",[e._v("listenerGUID")]),e._v(": unique identifier of the listener")])]),e._v(" "),a("p",[e._v("Trading Terminal calls this function when it wants to receive real-time quotes for a symbol.")]),e._v(" "),a("p",[e._v("The Charting Library assumes that you will call "),a("code",[e._v("onRealtimeCallback")]),e._v(" every time you want to update the quotes.")]),e._v(" "),a("h3",{attrs:{id:"unsubscribequotes-listenerguid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribequotes-listenerguid","aria-hidden":"true"}},[e._v("#")]),e._v(" unsubscribeQuotes(listenerGUID)")]),e._v(" "),a("p",[e._v("💹 "),a("em",[a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("listenerGUID")]),e._v(": unique identifier of the listener")])]),e._v(" "),a("p",[e._v("Trading Terminal calls this function when it doesn't want to receive updates for this listener anymore.")]),e._v(" "),a("p",[a("code",[e._v("listenerGUID")]),e._v(" will be the same object that the Library passed to "),a("code",[e._v("subscribeQuotes")]),e._v(" before.")]),e._v(" "),a("h3",{attrs:{id:"subscribedepth-symbolinfo-callback-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribedepth-symbolinfo-callback-string","aria-hidden":"true"}},[e._v("#")]),e._v(" subscribeDepth(symbolInfo, callback): string")]),e._v(" "),a("p",[e._v("💹 "),a("em",[a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("symbolInfo")]),e._v(": "),a("a",{attrs:{href:"Symbology#symbolinfo-structure"}},[e._v("SymbolInfo")]),e._v(" object")]),e._v(" "),a("li",[a("code",[e._v("callback")]),e._v(": function(depth)\n"),a("ol",[a("li",[a("code",[e._v("depth")]),e._v(": object "),a("code",[e._v("{snapshot, asks, bids}")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("snapshot")]),e._v(": Boolean - if "),a("code",[e._v("true")]),e._v(" "),a("code",[e._v("asks")]),e._v(" and "),a("code",[e._v("bids")]),e._v(" have full set of depth, otherwise they contain only updated levels.")]),e._v(" "),a("li",[a("code",[e._v("asks")]),e._v(": Array of "),a("code",[e._v("{price, volume}")])]),e._v(" "),a("li",[a("code",[e._v("bids")]),e._v(": Array of "),a("code",[e._v("{price, volume}")])])])])])])]),e._v(" "),a("p",[e._v("Trading Terminal calls this function when it wants to receive real-time level 2 (DOM) for a symbol. The Charting Library assumes that you will call the "),a("code",[e._v("callback")]),e._v(" every time you want to update DOM data.")]),e._v(" "),a("p",[e._v("This method should return a unique identifier ("),a("code",[e._v("subscriberUID")]),e._v(") that will be used to unsubscribe from the data.")]),e._v(" "),a("h3",{attrs:{id:"unsubscribedepth-subscriberuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribedepth-subscriberuid","aria-hidden":"true"}},[e._v("#")]),e._v(" unsubscribeDepth(subscriberUID)")]),e._v(" "),a("p",[e._v("💹 "),a("em",[a("a",{attrs:{href:"Trading-Terminal"}},[e._v("Trading Terminal")]),e._v(" specific.")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("subscriberUID")]),e._v(": String")])]),e._v(" "),a("p",[e._v("Trading Terminal calls this function when it doesn't want to receive updates for this listener anymore.")]),e._v(" "),a("p",[a("code",[e._v("subscriberUID")]),e._v(" will be the same object that was returned from "),a("code",[e._v("subscribeDepth")]),e._v(".")])])}],!1,null,null,null);o.options.__file="JS-Api.md";t.default=o.exports}}]);