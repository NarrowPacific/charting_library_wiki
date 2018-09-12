(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{167:function(e,a,t){"use strict";t.r(a);var i=t(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("p",[e._v("The Charting Library uses your own data where you define the symbology yourself. You may name the symbols as you see fit.")]),e._v(" "),t("p",[e._v("But there are some fine points that you should be aware of:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Our own symbology assumes that symbol names use "),t("code",[e._v("EXCHANGE:SYMBOL")]),e._v(" format.\nThe Library supports this by default. You may continue using if it meets your requirements.")])]),e._v(" "),t("li",[t("p",[e._v("If you already have or considering a different symbology then you might want to use the "),t("code",[e._v("ticker")]),e._v(" field.")]),e._v(" "),t("p",[t("code",[e._v("ticker")]),e._v(" is the unique identifier of the symbol that is used "),t("strong",[e._v("only")]),e._v(" inside the Library. Your users will never be able to see it.\nSimply enter the "),t("code",[e._v("ticker")]),e._v(" values in all of your SymbolInfo objects and Symbol Search results and expect that the Charting Library will request the data based on those values.")])])]),e._v(" "),t("h1",{attrs:{id:"symbolinfo-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbolinfo-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" SymbolInfo Structure")]),e._v(" "),t("p",[t("strong",[e._v("This section is extremely important. 72.2% of all issues experienced by Charting Library users are caused by wrong/malformed SymbolInfo data.")])]),e._v(" "),t("p",[e._v("SymbolInfo is an object containing symbol metadata. This object is the result of resolving the symbol. SymbolInfo has following fields:")]),e._v(" "),t("h2",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),t("p",[e._v("It's the name of the symbol. It is a string that your users will be able to see. Also, it will be used for data requests if you are not using "),t("strong",[e._v("tickers")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"ticker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ticker","aria-hidden":"true"}},[e._v("#")]),e._v(" ticker")]),e._v(" "),t("p",[e._v("It's an unique identifier for this particular symbol in your symbology.\nIf you specify this property then its value will be used for all data requests for this symbol. "),t("code",[e._v("ticker")]),e._v(" will be treated the same as "),t("a",{attrs:{href:"#name"}},[e._v("name")]),e._v(" if not specified explicitly.")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("Description of a symbol. Will be displayed in the chart legend for this symbol.")]),e._v(" "),t("h2",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(" type")]),e._v(" "),t("p",[e._v("Optional type of the instrument.")]),e._v(" "),t("p",[t("em",[e._v("Possible types are:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("stock")])]),e._v(" "),t("li",[t("code",[e._v("index")])]),e._v(" "),t("li",[t("code",[e._v("forex")])]),e._v(" "),t("li",[t("code",[e._v("futures")])]),e._v(" "),t("li",[t("code",[e._v("bitcoin")])]),e._v(" "),t("li",[t("code",[e._v("expression")])]),e._v(" "),t("li",[t("code",[e._v("spread")])]),e._v(" "),t("li",[t("code",[e._v("cfd")])]),e._v(" "),t("li",[e._v("or another string value.")])]),e._v(" "),t("h2",{attrs:{id:"session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[e._v("#")]),e._v(" session")]),e._v(" "),t("p",[e._v("Trading hours for this symbol. See the "),t("a",{attrs:{href:"Trading-Sessions"}},[e._v("Trading Sessions")]),e._v(" article to learn more details.")]),e._v(" "),t("h2",{attrs:{id:"exchange-listed-exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange-listed-exchange","aria-hidden":"true"}},[e._v("#")]),e._v(" exchange, listed_exchange")]),e._v(" "),t("p",[e._v("Both of these fields are expected to have a short name of the exchange where this symbol is traded.")]),e._v(" "),t("p",[e._v("The name will be displayed in the chart legend for this symbol.")]),e._v(" "),t("h2",{attrs:{id:"timezone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timezone","aria-hidden":"true"}},[e._v("#")]),e._v(" timezone")]),e._v(" "),t("p",[e._v("Timezone of the exchange for this symbol. We expect to get the name of the time zone in "),t("code",[e._v("olsondb")]),e._v(" format.")]),e._v(" "),t("p",[t("em",[e._v("Supported timezones are:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Etc/UTC")])]),e._v(" "),t("li",[t("code",[e._v("Africa/Cairo")])]),e._v(" "),t("li",[t("code",[e._v("Africa/Johannesburg")])]),e._v(" "),t("li",[t("code",[e._v("Africa/Lagos")])]),e._v(" "),t("li",[t("code",[e._v("America/Argentina/Buenos_Aires")])]),e._v(" "),t("li",[t("code",[e._v("America/Bogota")])]),e._v(" "),t("li",[t("code",[e._v("America/Caracas")])]),e._v(" "),t("li",[t("code",[e._v("America/Chicago")])]),e._v(" "),t("li",[t("code",[e._v("America/El_Salvador")])]),e._v(" "),t("li",[t("code",[e._v("America/Juneau")])]),e._v(" "),t("li",[t("code",[e._v("America/Lima")])]),e._v(" "),t("li",[t("code",[e._v("America/Los_Angeles")])]),e._v(" "),t("li",[t("code",[e._v("America/Mexico_City")])]),e._v(" "),t("li",[t("code",[e._v("America/New_York")])]),e._v(" "),t("li",[t("code",[e._v("America/Phoenix")])]),e._v(" "),t("li",[t("code",[e._v("America/Santiago")])]),e._v(" "),t("li",[t("code",[e._v("America/Sao_Paulo")])]),e._v(" "),t("li",[t("code",[e._v("America/Toronto")])]),e._v(" "),t("li",[t("code",[e._v("America/Vancouver")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Almaty")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Ashkhabad")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Bahrain")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Bangkok")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Chongqing")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Dubai")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Ho_Chi_Minh")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Hong_Kong")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Jakarta")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Jerusalem")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Kathmandu")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Kolkata")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Kuwait")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Muscat")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Qatar")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Riyadh")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Seoul")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Shanghai")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Singapore")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Taipei")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Tehran")])]),e._v(" "),t("li",[t("code",[e._v("Asia/Tokyo")])]),e._v(" "),t("li",[t("code",[e._v("Atlantic/Reykjavik")])]),e._v(" "),t("li",[t("code",[e._v("Australia/ACT")])]),e._v(" "),t("li",[t("code",[e._v("Australia/Adelaide")])]),e._v(" "),t("li",[t("code",[e._v("Australia/Brisbane")])]),e._v(" "),t("li",[t("code",[e._v("Australia/Sydney")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Athens")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Belgrade")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Berlin")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Copenhagen")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Helsinki")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Istanbul")])]),e._v(" "),t("li",[t("code",[e._v("Europe/London")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Luxembourg")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Madrid")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Moscow")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Paris")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Riga")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Rome")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Stockholm")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Tallinn")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Vilnius")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Warsaw")])]),e._v(" "),t("li",[t("code",[e._v("Europe/Zurich")])]),e._v(" "),t("li",[t("code",[e._v("Pacific/Auckland")])]),e._v(" "),t("li",[t("code",[e._v("Pacific/Chatham")])]),e._v(" "),t("li",[t("code",[e._v("Pacific/Fakaofo")])]),e._v(" "),t("li",[t("code",[e._v("Pacific/Honolulu")])]),e._v(" "),t("li",[t("code",[e._v("Pacific/Norfolk")])]),e._v(" "),t("li",[t("code",[e._v("US/Mountain")])])]),e._v(" "),t("h2",{attrs:{id:"minmov-pricescale-minmove2-fractional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minmov-pricescale-minmove2-fractional","aria-hidden":"true"}},[e._v("#")]),e._v(" minmov, pricescale, minmove2, fractional")]),e._v(" "),t("p",[e._v("These four keys have different meanings when used for common and fractional prices.")]),e._v(" "),t("h3",{attrs:{id:"common-prices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-prices","aria-hidden":"true"}},[e._v("#")]),e._v(" Common prices")]),e._v(" "),t("p",[t("code",[e._v("MinimalPossiblePriceChange = minmov / pricescale")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("minmov")]),e._v(" is the amount of price precision steps for 1 tick. For example, since the tick size for U.S. equities is "),t("code",[e._v("0.01")]),e._v(", "),t("code",[e._v("minmov")]),e._v(" is 1. But the price of the E-mini S&P futures contract moves upward or downward by "),t("code",[e._v("0.25")]),e._v(" increments, so the "),t("code",[e._v("minmov")]),e._v(" is "),t("code",[e._v("25")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("pricescale")]),e._v(" defines the number of decimal places. It is "),t("code",[e._v("10^number-of-decimal-places")]),e._v(". If a price is displayed as "),t("code",[e._v("1.01")]),e._v(", "),t("code",[e._v("pricescale")]),e._v(" is "),t("code",[e._v("100")]),e._v("; If it is displayed as "),t("code",[e._v("1.005")]),e._v(", "),t("code",[e._v("pricescale")]),e._v(" is "),t("code",[e._v("1000")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("minmove2")]),e._v(" for common prices is "),t("code",[e._v("0")]),e._v(" or it can be skipped.")]),e._v(" "),t("li",[t("code",[e._v("fractional")]),e._v(" for common prices is "),t("code",[e._v("false")]),e._v(" or it can be skipped.")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("p",[e._v("Typical stock with "),t("code",[e._v("0.01")]),e._v(" price increment: "),t("code",[e._v("minmov = 1, pricescale = 100, minmove2 = 0")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"fractional-prices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fractional-prices","aria-hidden":"true"}},[e._v("#")]),e._v(" Fractional prices")]),e._v(" "),t("p",[e._v("Fractional prices are displayed 2 different forms: 1) "),t("code",[e._v("xx'yy")]),e._v(" (for example, "),t("code",[e._v("133'21")]),e._v(") 2) "),t("code",[e._v("xx'yy'zz")]),e._v(" (for example, "),t("code",[e._v("133'21'5")]),e._v(").")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("xx")]),e._v(" is an integer part.")]),e._v(" "),t("li",[t("code",[e._v("minmov/pricescale")]),e._v(" is a Fraction.")]),e._v(" "),t("li",[t("code",[e._v("minmove2")]),e._v(" is used in form 2.")]),e._v(" "),t("li",[t("code",[e._v("fractional")]),e._v(" is "),t("code",[e._v("true")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("minmov = 1")]),e._v(", "),t("code",[e._v("pricescale = 128")]),e._v(" and "),t("code",[e._v("minmove2 = 4")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("119'16'0")]),e._v(" represents "),t("code",[e._v("119 + 16/32")])]),e._v(" "),t("li",[t("code",[e._v("119'16'2")]),e._v(" represents "),t("code",[e._v("119 + 16.25/32")])]),e._v(" "),t("li",[t("code",[e._v("119'16'5")]),e._v(" represents "),t("code",[e._v("119 + 16.5/32")])]),e._v(" "),t("li",[t("code",[e._v("119'16'7")]),e._v(" represents "),t("code",[e._v("119 + 16.75/32")])])]),e._v(" "),t("p",[e._v("More examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ZBM2014 (T-Bond)")]),e._v(" with "),t("code",[e._v("1/32")]),e._v(": "),t("code",[e._v("minmov = 1")]),e._v(", "),t("code",[e._v("pricescale = 32")]),e._v(", "),t("code",[e._v("minmove2 = 0")])]),e._v(" "),t("li",[t("code",[e._v("ZCM2014 (Corn)")]),e._v(" with "),t("code",[e._v("2/8")]),e._v(": "),t("code",[e._v("minmov = 2")]),e._v(", "),t("code",[e._v("pricescale = 8")]),e._v(", "),t("code",[e._v("minmove2 = 0")])]),e._v(" "),t("li",[t("code",[e._v("ZFM2014 (5 year t-note)")]),e._v(" with "),t("code",[e._v("1/4 of 1/32")]),e._v(": "),t("code",[e._v("minmov = 1")]),e._v(", "),t("code",[e._v("pricescale = 128")]),e._v(", "),t("code",[e._v("minmove2 = 4")])])]),e._v(" "),t("h2",{attrs:{id:"has-intraday"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-intraday","aria-hidden":"true"}},[e._v("#")]),e._v(" has_intraday")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("Boolean value showing whether the symbol includes intraday (minutes) historical data.")]),e._v(" "),t("p",[e._v("If it's "),t("code",[e._v("false")]),e._v(" then all buttons for intraday resolutions will be disabled for this particular symbol.")]),e._v(" "),t("p",[e._v("If it is set to "),t("code",[e._v("true")]),e._v(", all resolutions that are supplied directly by the datafeed must be provided in "),t("code",[e._v("intraday_multipliers")]),e._v(" array.")]),e._v(" "),t("h2",{attrs:{id:"supported-resolutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-resolutions","aria-hidden":"true"}},[e._v("#")]),e._v(" supported_resolutions")]),e._v(" "),t("p",[e._v("An array of resolutions which should be enabled for this symbol.")]),e._v(" "),t("p",[e._v("Each item of an array is expected to be a string. Format is described in another "),t("a",{attrs:{href:"Resolution"}},[e._v("article")]),e._v(".")]),e._v(" "),t("p",[e._v("If one changes the symbol and new symbol does not support the selected resolution then resolution will be switched to the first available one in the list.")]),e._v(" "),t("p",[e._v("Resolution availability logic (pseudocode):")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("resolutionAvailable  "),t("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("\n    resolution"),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("isIntraday\n        "),t("span",{attrs:{class:"token operator"}},[e._v("?")]),e._v(" symbol"),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("has_intraday "),t("span",{attrs:{class:"token operator"}},[e._v("&&")]),e._v(" symbol"),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{attrs:{class:"token function"}},[e._v("supports_resoluiton")]),t("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("resolution"),t("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),t("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" symbol"),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{attrs:{class:"token function"}},[e._v("supports_resoluiton")]),t("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("resolution"),t("span",{attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("In case of absence of "),t("code",[e._v("supported_resolutions")]),e._v(" in a symbol info all DWM resolutions will be available. Intraday resolutions will be available if "),t("code",[e._v("has_intraday")]),e._v(" is "),t("code",[e._v("true")]),e._v(".")]),e._v(" "),t("p",[e._v("Supported resolutions affect available timeframes too. The timeframe will not be available if it requires the resolution that is not supported.")]),e._v(" "),t("h2",{attrs:{id:"intraday-multipliers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intraday-multipliers","aria-hidden":"true"}},[e._v("#")]),e._v(" intraday_multipliers")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("[]")])]),e._v(" "),t("p",[e._v("Array of resolutions (in minutes) supported directly by the data feed.\nEach such resolution may be passed to, and should be implemented by, "),t("a",{attrs:{href:"JS-Api#getbarssymbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest"}},[e._v("getBars")]),e._v(".\nThe default of "),t("code",[e._v("[]")]),e._v(" means that the data feed supports aggregating by any number of minutes.")]),e._v(" "),t("p",[e._v("If the data feed only supports certain minute resolutions but not the requested resolution, "),t("a",{attrs:{href:"JS-Api#getbarssymbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest"}},[e._v("getBars")]),e._v(" will be called (repeatedly if needed) with a higher resolution as a parameter, in order to build the requested resolution.")]),e._v(" "),t("p",[e._v("For example, if the data feed only supports minute resolution, set "),t("code",[e._v("intraday_multipliers")]),e._v(" to "),t("code",[e._v("['1']")]),e._v(".")]),e._v(" "),t("p",[e._v("When the user wants to see 5-minute data, "),t("a",{attrs:{href:"JS-Api#getbarssymbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest"}},[e._v("getBars")]),e._v(" will be called with the resolution set to 1 until the library builds all the 5-minute resolution by itself.")]),e._v(" "),t("h2",{attrs:{id:"has-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-seconds","aria-hidden":"true"}},[e._v("#")]),e._v(" has_seconds")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("Boolean value showing whether the symbol includes seconds in the historical data.")]),e._v(" "),t("p",[e._v("If it's "),t("code",[e._v("false")]),e._v(" then all buttons for resolutions that include seconds will be disabled for this particular symbol.")]),e._v(" "),t("p",[e._v("If it is set to "),t("code",[e._v("true")]),e._v(", all resolutions that are supplied directly by the data feed must be provided in "),t("code",[e._v("seconds_multipliers")]),e._v(" array.")]),e._v(" "),t("h2",{attrs:{id:"seconds-multipliers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seconds-multipliers","aria-hidden":"true"}},[e._v("#")]),e._v(" seconds_multipliers")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("[]")])]),e._v(" "),t("p",[e._v("It is an array containing resolutions that include seconds (excluding postfix) that the data feed provides.")]),e._v(" "),t("p",[e._v("E.g., if the data feed supports resolutions such as "),t("code",[e._v('["1S", "5S", "15S"]')]),e._v(", but has 1-second bars for some symbols then you should set "),t("code",[e._v("seconds_multipliers")]),e._v(" of this symbol to "),t("code",[e._v("[1]")]),e._v(". This will make Charting Library build 5S and 15S resolutions by itself.")]),e._v(" "),t("h2",{attrs:{id:"has-daily"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-daily","aria-hidden":"true"}},[e._v("#")]),e._v(" has_daily")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("The boolean value showing whether data feed has its own daily resolution bars or not.")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("has_daily")]),e._v(" = "),t("code",[e._v("false")]),e._v(" then Charting Library will build the respective resolutions using 1-minute bars by itself. If not, then it will request those bars from the data feed.")]),e._v(" "),t("h2",{attrs:{id:"has-weekly-and-monthly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-weekly-and-monthly","aria-hidden":"true"}},[e._v("#")]),e._v(" has_weekly_and_monthly")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("The boolean value showing whether data feed has its own weekly and monthly resolution bars or not.")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("has_weekly_and_monthly")]),e._v(" = "),t("code",[e._v("false")]),e._v(" then Charting Library will build the respective resolutions using daily bars by itself. If not, then it will request those bars from the data feed.")]),e._v(" "),t("h2",{attrs:{id:"has-empty-bars"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-empty-bars","aria-hidden":"true"}},[e._v("#")]),e._v(" has_empty_bars")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("The boolean value showing whether the library should generate empty bars in the session when there is no data from the data feed for this particular time.")]),e._v(" "),t("p",[e._v("I.e., if your session is "),t("code",[e._v("0900-1600")]),e._v(" and your data has gaps between "),t("code",[e._v("11:00")]),e._v(" and "),t("code",[e._v("12:00")]),e._v(" and your "),t("code",[e._v("has_empty_bars")]),e._v(" is "),t("code",[e._v("true")]),e._v(", then the Library will fill the gaps with bars for this time.")]),e._v(" "),t("h2",{attrs:{id:"force-session-rebuild"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-session-rebuild","aria-hidden":"true"}},[e._v("#")]),e._v(" force_session_rebuild")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("true")])]),e._v(" "),t("p",[e._v("The boolean value showing whether the library should filter bars using the current trading session.")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("false")]),e._v(", bars will be filtered only when the library builds data from another resolution or if "),t("code",[e._v("has_empty_bars")]),e._v(" was set to "),t("code",[e._v("true")]),e._v(".")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("true")]),e._v(", then the Library will remove bars that don't belong to the trading session from your data.")]),e._v(" "),t("h2",{attrs:{id:"has-no-volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#has-no-volume","aria-hidden":"true"}},[e._v("#")]),e._v(" has_no_volume")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("Boolean showing whether the symbol includes volume data or not.")]),e._v(" "),t("h2",{attrs:{id:"volume-precision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume-precision","aria-hidden":"true"}},[e._v("#")]),e._v(" volume_precision")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("0")])]),e._v(" "),t("p",[e._v("Integer showing typical volume value decimal places for a particular symbol. 0 means volume is always an integer. 1 means that there might be 1 numeric character after the comma.")]),e._v(" "),t("h2",{attrs:{id:"data-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-status","aria-hidden":"true"}},[e._v("#")]),e._v(" data_status")]),e._v(" "),t("p",[e._v("The status code of a series with this symbol. The status is shown in the upper right corner of a chart.")]),e._v(" "),t("p",[t("em",[e._v("Supported statuses are:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("streaming")])]),e._v(" "),t("li",[t("code",[e._v("endofday")])]),e._v(" "),t("li",[t("code",[e._v("pulsed")])]),e._v(" "),t("li",[t("code",[e._v("delayed_streaming")])])]),e._v(" "),t("h2",{attrs:{id:"expired"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expired","aria-hidden":"true"}},[e._v("#")]),e._v(" expired")]),e._v(" "),t("p",[t("em",[e._v("Default:")]),e._v(" "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("Boolean value showing whether this symbol is an expired futures contract or not.")]),e._v(" "),t("h2",{attrs:{id:"expiration-date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expiration-date","aria-hidden":"true"}},[e._v("#")]),e._v(" expiration_date")]),e._v(" "),t("p",[e._v("Unix timestamp of the expiration date. One must set this value when "),t("code",[e._v("expired")]),e._v(" = "),t("code",[e._v("true")]),e._v(".")]),e._v(" "),t("p",[e._v("Charting Library will request data for this symbol starting from that time point.")]),e._v(" "),t("h2",{attrs:{id:"sector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sector","aria-hidden":"true"}},[e._v("#")]),e._v(" sector")]),e._v(" "),t("p",[e._v("Sector for stocks to be displayed in the Symbol Info.")]),e._v(" "),t("h2",{attrs:{id:"industry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#industry","aria-hidden":"true"}},[e._v("#")]),e._v(" industry")]),e._v(" "),t("p",[e._v("Industry for stocks to be displayed in the Symbol Info.")]),e._v(" "),t("h2",{attrs:{id:"currency-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#currency-code","aria-hidden":"true"}},[e._v("#")]),e._v(" currency_code")]),e._v(" "),t("p",[e._v("Currency to be displayed in the Symbol Info.")])])}],!1,null,null,null);s.options.__file="Symbology.md";a.default=s.exports}}]);