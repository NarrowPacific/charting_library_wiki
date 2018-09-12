(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("We love our charts. We want them to be the best, the most beautiful, the most responsive and the most powerful charts in the whole HTML5 world. We are working hard to reach these goals.")]),e._v(" "),a("p",[e._v("We know all about our charts and about creating the best user experience using them and we'd be glad to share our knowledge with you. This document describes several best practices for integrating the Charting Library into your website/application. The main point is to always think about your users and their experience.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Charting Library is a charting component that is able to show prices, charts & technical analysis tools. Our Library does the chart magic, and nothing more. If you want some additional functionality (like chats, special symbols list, hottest deals, ads, etc) the best approach is to implement them outside of the chart. However, if you want to link your outside functionality with the library, you can use the library’s API to link them.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Library will ask your backend for data and provide the required data range bounds with each request. Respect these bounds and return data filling this range as fully as possible. Do not return more bars. Do not return bars out of the requested range. If you want to extend the default data range requested by the Library, use our JS API (see calculateHistoryDepth).")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("The same as for the bars above. Send only marks matching the requested range.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Charting Library avoids loading content which the user didn’t ask for. Loading more bars into the chart means loading the CPU and memory with more operations than necessary. This means responsiveness of the whole solution decreases.")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Users like beautiful charts. So do we. Please remember to keep your chart looking good when customizing size or style. Avoid embedding custom controls that look alien to the entire chart's style.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("The Charting Library is translated into dozens of languages. Use the one that fits your users' needs.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("Also, check the data you are passing to the Charting Library and make sure it matches our requirements as described in the documentation. Pay special attention to SymbolInfo content because it's the most common place to make an error (according to our statistics).")]),e._v(" "),a("p",[e._v("You can watch the output of our "),a("a",{attrs:{href:"https://demo_feed.tradingview.com/quotes?symbols=AAPL",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo data service"),a("OutboundLink")],1),e._v(" and compare it to yours to ensure your backend behaves like it should.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("We spent a lot of time creating those docs for you to make your life easier. Please give it a try.")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("All features not mentioned in our documentation are subjects to change without any warnings and backward compatibility. Also, altering the source code is strictly prohibited by the legal agreement you signed.")]),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("This datafeed is just a demo and is not intended for real usage. It may be unstable and can't bear significant load.")]),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("We do not guarantee CSS selectors' backward compatibility.")]),e._v(" "),e._m(18),e._v(" "),a("p",[e._v("This is the common best practice for static HTML content. Gzipping the Library's HTML file will decrease your users' waiting time.")]),e._v(" "),e._m(19),e._v(" "),e._m(20)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-the-best-user-experience"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-best-user-experience","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating the best user experience")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-understand-what-charting-library-is-and-what-it-isn’t"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-understand-what-charting-library-is-and-what-it-isn’t","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Understand what Charting Library IS and what it ISN’T")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-return-exactly-as-many-bars-as-the-library-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-return-exactly-as-many-bars-as-the-library-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Return exactly as many bars as the Library requests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-return-exactly-as-many-marks-as-the-library-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-return-exactly-as-many-marks-as-the-library-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Return exactly as many marks as the Library requests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_4-do-not-override-calculatehistorydepth-to-get-more-than-2-screens-of-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-do-not-override-calculatehistorydepth-to-get-more-than-2-screens-of-data","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Do not override calculateHistoryDepth() to get more than 2 screens of data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_5-do-not-make-your-chart-look-messy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-do-not-make-your-chart-look-messy","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Do not make your chart look messy")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_6-avoid-making-very-small-charts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-avoid-making-very-small-charts","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. Avoid making very small charts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The smallest meaningful size that the Library supports is 600x600px. Avoid making charts smaller because it looks like a mess. Use the "),t("code",[this._v("mobile")]),this._v(" preset, or hide some toolbars if you need charts smaller than mentioned above.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_7-use-the-appropriate-language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-use-the-appropriate-language","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. Use the appropriate language")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_8-if-you-are-experiencing-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-if-you-are-experiencing-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" 8. If you are experiencing issues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We are always eager to help you. But, unfortunately, we are really busy guys, so we don’t have much time. Please help us spend our time effectively and always update your Library's build to the latest "),t("code",[this._v("unstable")]),this._v(" version to check if the issue still happens. Contact us if it does.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Always use "),t("code",[this._v("debug: true")]),this._v(" in the Widget constructor options during the development and always remove it in the production to make the code work faster.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_9-read-the-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-read-the-docs","aria-hidden":"true"}},[this._v("#")]),this._v(" 9. Read the docs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_10-choose-an-appropriate-data-transport-for-your-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-choose-an-appropriate-data-transport-for-your-solution","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. Choose an appropriate data transport for your solution")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Pay attention to differences between JS API and UDF, and choose the API that fits your needs best.\nDo not use UDF if you need really fast data updates or data streaming.\nDo not use UDF with data grouping (see "),t("code",[this._v("supports_group_request")]),this._v(") if your backend has more than a dozen symbols.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_11-do-not-try-to-sniff-our-code-and-use-undocumented-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-do-not-try-to-sniff-our-code-and-use-undocumented-features","aria-hidden":"true"}},[this._v("#")]),this._v(" 11. Do not try to sniff our code and use undocumented features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_12-do-not-use-our-demo-datafeed-on-your-production-website"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-do-not-use-our-demo-datafeed-on-your-production-website","aria-hidden":"true"}},[this._v("#")]),this._v(" 12. Do not use our demo datafeed on your production website")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_13-use-the-api-for-customization-avoid-editing-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-use-the-api-for-customization-avoid-editing-css","aria-hidden":"true"}},[this._v("#")]),this._v(" 13. Use the API for customization. Avoid editing CSS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_14-set-up-your-server-to-gzip-files-when-sending-to-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-set-up-your-server-to-gzip-files-when-sending-to-client","aria-hidden":"true"}},[this._v("#")]),this._v(" 14. Set up your server to gzip files when sending to client")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_15-set-minimum-expiration-time-for-charting-library-min-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-set-minimum-expiration-time-for-charting-library-min-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 15. Set minimum expiration time for charting_library.min.js")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All files in the Charting Library contain hash in their names, except for "),t("code",[this._v("charting_library.min.js")]),this._v(" that you add to your HTML files.\nWhen you update the Charting Library to a newer version all file names are changed as well.\nIf a browser loads "),t("code",[this._v("charting_library.min.js")]),this._v(" from the cache, then all the links in this file are going to be broken.\nThe expiration time for this file should be set to the minimum in order to make sure that it’s not cached by the browser.")])}],!1,null,null,null);s.options.__file="Best-Practices.md";t.default=s.exports}}]);