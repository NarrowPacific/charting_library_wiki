(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(t,e,a){"use strict";a.r(e);var r=a(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v("💹 All content on this page is relevant to "),a("a",{attrs:{href:"Trading-Terminal"}},[t._v("Trading Terminal")]),t._v(" only.")]),t._v(" "),a("p",[t._v("Account Manager is an interactive table that displays trading information.\nIt includes 3 pages: orders/positions and account information.")]),t._v(" "),a("p",[t._v("To create an account manager you will need to describe columns of each page and provide data.")]),t._v(" "),a("p",[t._v("Remark 1. "),a("a",{attrs:{href:"Broker-API"}},[t._v("Broker API")]),t._v(" should implement "),a("a",{attrs:{href:"Broker-API#accountmanagerinfo"}},[t._v("accountManagerInfo")])]),t._v(" "),a("h1",{attrs:{id:"account-manager-meta-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-manager-meta-information","aria-hidden":"true"}},[t._v("#")]),t._v(" Account Manager Meta Information")]),t._v(" "),a("p",[t._v("The following information should be returned by "),a("a",{attrs:{href:"Broker-API#accountManagerInfo"}},[t._v("accountManagerInfo")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"account-manager-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-manager-header","aria-hidden":"true"}},[t._v("#")]),t._v(" Account Manager header")]),t._v(" "),a("p",[t._v("Account Manager's header includes the name of the broker and an account name or a list of accounts.")]),t._v(" "),a("h3",{attrs:{id:"accounttitle-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accounttitle-string","aria-hidden":"true"}},[t._v("#")]),t._v(" accountTitle: String")]),t._v(" "),a("h3",{attrs:{id:"accountslist-array-of-accountinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accountslist-array-of-accountinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" accountsList: array of AccountInfo")]),t._v(" "),a("h3",{attrs:{id:"account-watchedvalue-of-accountinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-watchedvalue-of-accountinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" account: "),a("a",{attrs:{href:"WatchedValue"}},[t._v("WatchedValue")]),t._v(" of AccountInfo")]),t._v(" "),a("p",[a("code",[t._v("AccountInfo")]),t._v(" is an object with the following keys:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("id")]),t._v(" - account id")]),t._v(" "),a("li",[a("code",[t._v("name")]),t._v(" - account name")]),t._v(" "),a("li",[a("code",[t._v("currency")]),t._v(" - account currency")])]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("currency")]),t._v(" key is not set, "),a("code",[t._v("USD")]),t._v(" will be used as a default value.")]),t._v(" "),a("h2",{attrs:{id:"orders-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orders-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Orders Page")]),t._v(" "),a("h3",{attrs:{id:"ordercolumns-array-of-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordercolumns-array-of-column","aria-hidden":"true"}},[t._v("#")]),t._v(" orderColumns: array of "),a("a",{attrs:{href:"#column-description"}},[t._v("Column")])]),t._v(" "),a("p",[t._v("Columns description that you want to be displayed on the Orders page.\nYou can display any field of an "),a("a",{attrs:{href:"Trading-Objects-and-Constants#order"}},[t._v("order")]),t._v(" or add your own fields to an order object and display them.")]),t._v(" "),a("h3",{attrs:{id:"ordercolumnssorting-sortingparameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordercolumnssorting-sortingparameters","aria-hidden":"true"}},[t._v("#")]),t._v(" orderColumnsSorting: "),a("a",{attrs:{href:"#sortingparameters"}},[t._v("SortingParameters")])]),t._v(" "),a("p",[t._v("Optional sorting of the table. If it is not set, the table is sorted by the first column.")]),t._v(" "),a("h3",{attrs:{id:"possibleorderstatuses-array-of-orderstatus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#possibleorderstatuses-array-of-orderstatus","aria-hidden":"true"}},[t._v("#")]),t._v(" possibleOrderStatuses: array of "),a("a",{attrs:{href:"Trading-Objects-and-Constants#orderstatus"}},[t._v("OrderStatus")])]),t._v(" "),a("p",[t._v("Optional list of statuses to be used in the orders filter. Default list is used if it hasn't been set.")]),t._v(" "),a("h3",{attrs:{id:"historycolumns-array-of-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#historycolumns-array-of-column","aria-hidden":"true"}},[t._v("#")]),t._v(" historyColumns: array of "),a("a",{attrs:{href:"#column-description"}},[t._v("Column")])]),t._v(" "),a("p",[t._v("History page will be displayed if it exists. All orders from previous sessions will be shown in the History.")]),t._v(" "),a("h3",{attrs:{id:"historycolumnssorting-sortingparameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#historycolumnssorting-sortingparameters","aria-hidden":"true"}},[t._v("#")]),t._v(" historyColumnsSorting: "),a("a",{attrs:{href:"#sortingparameters"}},[t._v("SortingParameters")])]),t._v(" "),a("p",[t._v("Optional sorting of the table. If it is not set, the table is sorted by the first column.")]),t._v(" "),a("h2",{attrs:{id:"positions-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positions-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Positions Page")]),t._v(" "),a("h3",{attrs:{id:"positioncolumns-array-of-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positioncolumns-array-of-column","aria-hidden":"true"}},[t._v("#")]),t._v(" positionColumns: array of "),a("a",{attrs:{href:"#column-description"}},[t._v("Column")])]),t._v(" "),a("p",[t._v("You can display any field of a "),a("a",{attrs:{href:"Trading-Objects-and-Constants#position"}},[t._v("position")]),t._v(" or add your own fields to a position object and display them.")]),t._v(" "),a("h2",{attrs:{id:"additional-pages-e-g-account-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-pages-e-g-account-summary","aria-hidden":"true"}},[t._v("#")]),t._v(" Additional Pages (e.g. Account Summary)")]),t._v(" "),a("h3",{attrs:{id:"pages-array-of-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages-array-of-page","aria-hidden":"true"}},[t._v("#")]),t._v(" pages: array of "),a("a",{attrs:{href:"#page"}},[t._v("Page")])]),t._v(" "),a("p",[t._v("You can add new tabs in the Account Manager by using "),a("code",[t._v("pages")]),t._v(". Each tab is a set of tables.")]),t._v(" "),a("h4",{attrs:{id:"page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page","aria-hidden":"true"}},[t._v("#")]),t._v(" Page")]),t._v(" "),a("p",[a("code",[t._v("Page")]),t._v(" is a description of an additional Account Manager tab. It is an object with the following fields:")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("id")]),t._v(": String")]),t._v(" "),a("p",[t._v("Unique identifier of a page")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("title")]),t._v(": String")]),t._v(" "),a("p",[t._v("Page title. It is the tab name.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("tables")]),t._v(": Array of "),a("a",{attrs:{href:"#table"}},[t._v("Table")]),t._v(".")]),t._v(" "),a("p",[t._v("It is possible to display one or more tables in this tab.")])])]),t._v(" "),a("h4",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table","aria-hidden":"true"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("You can add one or more tables to a "),a("a",{attrs:{href:"#page"}},[t._v("Page")]),t._v(".\nAccount Summary table metainfo is an object with the following fields:")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("id")]),t._v(": String")]),t._v(" "),a("p",[t._v("Unique identifier of a table.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("title")]),t._v(": String")]),t._v(" "),a("p",[t._v("Optional title of a table.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("columns")]),t._v(": array of "),a("a",{attrs:{href:"#column-description"}},[t._v("Column")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("getData")]),t._v(": Promise")]),t._v(" "),a("p",[t._v("This function is used to request table data. It should return Promise (or Deferred) and resolve it with an array of data rows.")]),t._v(" "),a("p",[t._v("Each row is an object. Keys of this object are column names with the corresponding values.")]),t._v(" "),a("p",[t._v("There is a predefined field "),a("code",[t._v("isTotalRow")]),t._v(" which can be used to mark a row that should be at the bottom of a table.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("changeDelegate")]),t._v(" : "),a("a",{attrs:{href:"Delegate"}},[t._v("Delegate")])]),t._v(" "),a("p",[t._v("This delegate is used to watch the data changes and update the table. Pass new account manager data to "),a("code",[t._v("fire")]),t._v(" method of the delegate.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("initialSorting")]),t._v(": "),a("a",{attrs:{href:"#sortingparameters"}},[t._v("SortingParameters")])]),t._v(" "),a("p",[t._v("Optional sorting of the table. If it is not set, the table is sorted by the first column.")])])]),t._v(" "),a("p",[a("strong",[t._v("NOTE")]),t._v(": if you have more than 1 row in a table and want to update a row using "),a("code",[t._v("changeDelegate")]),t._v(" make sure that you have "),a("code",[t._v("id")]),t._v(" field in each row to identify it.\nIt is not necessary if you have only 1 row in a table.")]),t._v(" "),a("h4",{attrs:{id:"sortingparameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortingparameters","aria-hidden":"true"}},[t._v("#")]),t._v(" SortingParameters")]),t._v(" "),a("p",[t._v("Object with the following properties:")]),t._v(" "),a("pre",[a("code",[t._v("- `columnId` - `id` or `property` of the column that will be used for sorting.\n- `asc` - (optional, default `false`) - If it is `true`, then initial sorting will be in ascending order.\n")])]),t._v(" "),a("h2",{attrs:{id:"formatters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatters","aria-hidden":"true"}},[t._v("#")]),t._v(" Formatters")]),t._v(" "),a("h3",{attrs:{id:"customformatters-array-of-a-column-formatter-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customformatters-array-of-a-column-formatter-description","aria-hidden":"true"}},[t._v("#")]),t._v(" customFormatters: array of a column formatter description")]),t._v(" "),a("p",[t._v("Optional array to define custom formatters. Each description is an object with the following fields:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("name")]),t._v(": unique identifier of a formatter.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("format(options)")]),t._v(": function that is used for formatting of a cell value. "),a("code",[t._v("options")]),t._v(" is an object with the following keys:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("value")]),t._v(" - value to be formatted")]),t._v(" "),a("li",[a("code",[t._v("priceFormatter")]),t._v(" - standard formatter for price. You can use method "),a("code",[t._v("format(price)")]),t._v(" to prepare price value.")]),t._v(" "),a("li",[a("code",[t._v("prevValue")]),t._v(" - optional field. It is a previous value so you can compare and format accordingly. It exists if current column has the "),a("code",[t._v("highlightDiff: true")]),t._v(" key.")]),t._v(" "),a("li",[a("code",[t._v("row")]),t._v(" - object with all key/value pairs from the current row")])])])]),t._v(" "),a("h2",{attrs:{id:"column-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Column description")]),t._v(" "),a("p",[t._v("The most valuable part of Account Manager description is a description of its columns.")]),t._v(" "),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label","aria-hidden":"true"}},[t._v("#")]),t._v(" label")]),t._v(" "),a("p",[t._v("Column title. It will be displayed in the table's header row.")]),t._v(" "),a("h3",{attrs:{id:"classname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classname","aria-hidden":"true"}},[t._v("#")]),t._v(" className")]),t._v(" "),a("p",[t._v("Optional "),a("code",[t._v("className")]),t._v(" is added to the html tag of each value cell.\nYou can use it to customize table's style.")]),t._v(" "),a("p",[t._v("Here is a list of predefined classes:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("class name")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("tv-data-table__cell--symbol-cell")])]),t._v(" "),a("td",[t._v("Special formatter for a symbol field")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("tv-data-table__cell--right-align")])]),t._v(" "),a("td",[t._v("It aligns cell value to the right")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("tv-data-table__cell--buttons-cell")])]),t._v(" "),a("td",[t._v("Cell with a buttons")])])])]),t._v(" "),a("h3",{attrs:{id:"formatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatter","aria-hidden":"true"}},[t._v("#")]),t._v(" formatter")]),t._v(" "),a("p",[t._v("Name of the formatter to be used for data formatting. If "),a("code",[t._v("formatter")]),t._v(" is not set the value is displayed as is.\nFormatter can be a default or a custom one.")]),t._v(" "),a("p",[t._v("Here is the list of default formatters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("symbol")])]),t._v(" "),a("td",[t._v("It is used for a symbol field. It displays "),a("code",[t._v("brokerSymbol")]),t._v(", but when you click on a symbol the chart changes according to the "),a("code",[t._v("symbol")]),t._v(" field. "),a("code",[t._v("property")]),t._v(" key is ignored.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("side")])]),t._v(" "),a("td",[t._v("It is used to display the side: Sell or Buy.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[t._v("It is used to display the type of order: Limit/Stop/StopLimit/Market.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("formatPrice")])]),t._v(" "),a("td",[t._v("Symbol price formatting.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("formatQuantity")])]),t._v(" "),a("td",[t._v("Displays an integer or floating point quantity, separates thousands groups with a space.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("formatPriceForexSup")])]),t._v(" "),a("td",[t._v("The same as "),a("code",[t._v("formatPrice")]),t._v(", but it makes the last character of the price superscripted. It works only if instrument type is set to "),a("code",[t._v("forex")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("status")])]),t._v(" "),a("td",[t._v("It is used to format the "),a("code",[t._v("status")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("date")])]),t._v(" "),a("td",[t._v("Displays the date or time.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localDate")])]),t._v(" "),a("td",[t._v("Displays the local date or time.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("fixed")])]),t._v(" "),a("td",[t._v("Displays a number with 2 decimal places.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pips")])]),t._v(" "),a("td",[t._v("Displays a number with 1 decimal place.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("profit")])]),t._v(" "),a("td",[t._v("Displays profit. It also adds the "),a("code",[t._v("+")]),t._v(" sign, separates thousands and changes the cell text color to red or green.")])])])]),t._v(" "),a("p",[t._v("There are some special formatters that are used to add buttons to the table:")]),t._v(" "),a("p",[a("code",[t._v("orderSettings")]),t._v(" adds Modify/Cancel buttons to the orders tab. Always set "),a("code",[t._v("modificationProperty")]),t._v(" value to "),a("code",[t._v("status")]),t._v(" for this formatter.")]),t._v(" "),a("p",[a("code",[t._v("posSettings")]),t._v(" adds Edit/Close buttons to the Positions/Net Positions tab")]),t._v(" "),a("p",[a("code",[t._v("tradeSettings")]),t._v(" adds Edit/Close buttons to the Individual Positions tab. Always set "),a("code",[t._v("modificationProperty")]),t._v(" value to "),a("code",[t._v("canBeClosed")]),t._v(" for this formatter.")]),t._v(" "),a("h3",{attrs:{id:"property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property","aria-hidden":"true"}},[t._v("#")]),t._v(" property")]),t._v(" "),a("p",[a("code",[t._v("property")]),t._v(" is a data object key that is used to get the data to display in a table.")]),t._v(" "),a("h3",{attrs:{id:"sortprop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortprop","aria-hidden":"true"}},[t._v("#")]),t._v(" sortProp")]),t._v(" "),a("p",[t._v("Optional "),a("code",[t._v("sortProp")]),t._v(" is a data object key that is used for data sorting.")]),t._v(" "),a("h3",{attrs:{id:"modificationproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modificationproperty","aria-hidden":"true"}},[t._v("#")]),t._v(" modificationProperty")]),t._v(" "),a("p",[t._v("If optional "),a("code",[t._v("modificationProperty")]),t._v(" is set then the change of its value updates the table cell.")]),t._v(" "),a("h3",{attrs:{id:"notsortable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notsortable","aria-hidden":"true"}},[t._v("#")]),t._v(" notSortable")]),t._v(" "),a("p",[t._v("Optional "),a("code",[t._v("notSortable")]),t._v(" can be set to prevent column sorting.")]),t._v(" "),a("h3",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[t._v("#")]),t._v(" help")]),t._v(" "),a("p",[a("code",[t._v("help")]),t._v(" is a tooltip string for the column.")]),t._v(" "),a("h3",{attrs:{id:"highlightdiff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highlightdiff","aria-hidden":"true"}},[t._v("#")]),t._v(" highlightDiff")]),t._v(" "),a("p",[a("code",[t._v("highlightDiff")]),t._v(" can be set with "),a("code",[t._v("formatPrice")]),t._v(" and "),a("code",[t._v("formatPriceForexSup")]),t._v(" formatters only to highlight the changes of the field.")]),t._v(" "),a("h3",{attrs:{id:"fixedwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixedwidth","aria-hidden":"true"}},[t._v("#")]),t._v(" fixedWidth")]),t._v(" "),a("p",[t._v("If it is "),a("code",[t._v("true")]),t._v(" then the column width will not be changed when the cell value is decreased.")]),t._v(" "),a("h3",{attrs:{id:"supportedstatusfilters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supportedstatusfilters","aria-hidden":"true"}},[t._v("#")]),t._v(" supportedStatusFilters")]),t._v(" "),a("p",[t._v("An optional numeric array of order statuses that is applied to order columns only. If it is available then the column will be displayed in the specified tabs of the status filter only.")]),t._v(" "),a("p",[t._v("Here is the list of possible order statuses:")]),t._v(" "),a("ol",[a("li",[t._v("0 - All")]),t._v(" "),a("li",[t._v("1 - Canceled")]),t._v(" "),a("li",[t._v("2 - Filled")]),t._v(" "),a("li",[t._v("3 - Inactive")]),t._v(" "),a("li",[t._v("5 - Rejected,")]),t._v(" "),a("li",[t._v("6 - Working")])]),t._v(" "),a("h2",{attrs:{id:"context-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-menu","aria-hidden":"true"}},[t._v("#")]),t._v(" Context Menu")]),t._v(" "),a("h3",{attrs:{id:"contextmenuactions-e-activepageitems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contextmenuactions-e-activepageitems","aria-hidden":"true"}},[t._v("#")]),t._v(" contextMenuActions(e, activePageItems)")]),t._v(" "),a("p",[a("code",[t._v("e")]),t._v(": context object passed by a browser")]),t._v(" "),a("p",[a("code",[t._v("activePageItems")]),t._v(": array of "),a("code",[t._v("ActionMetainfo")]),t._v(" items for the current page")]),t._v(" "),a("p",[t._v("Optional function to create a custom context menu.\nIt should return "),a("code",[t._v("Promise")]),t._v(" that is resolved with an array of "),a("code",[t._v("ActionMetainfo")]),t._v(".")])])}],!1,null,null,null);o.options.__file="Account-Manager.md";e.default=o.exports}}]);