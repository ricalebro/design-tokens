(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0JQy":function(e,t){var o="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",l="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",r="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+n+"|"+a+")"+"?",d="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[l,i,r].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),s="(?:"+[l+n+"?",n,i,r,o].join("|")+")",m=RegExp(a+"(?="+a+")|"+s+d,"g");e.exports=function(e){return e.match(m)||[]}},"0ZTe":function(e,t,o){var n=o("wy8a"),a=o("quyA"),l=o("Em2t"),i=o("dt0z");e.exports=function(e){return function(t){t=i(t);var o=a(t)?l(t):void 0,r=o?o[0]:t.charAt(0),u=o?n(o,1).join(""):t.slice(1);return r[e]()+u}}},"6acW":function(e,t,o){var n=o("dt0z"),a=o("gQMU");e.exports=function(e){return a(n(e).toLowerCase())}},Em2t:function(e,t,o){var n=o("bahg"),a=o("quyA"),l=o("0JQy");e.exports=function(e){return a(e)?l(e):n(e)}},KSq7:function(e,t){e.exports={xxlargeBoldFontWeight:"bold",largeBoldFontWeight:"bold",xlargeBoldFontSize:"32px",fontFamilyJa:"'BrandonText', 'Helvetica Neue', Helvetica, Arial, OpenTableHiragino, Roboto, Droid Sans, '游ゴシック体', OpenTableYuGothic, YuGothic, Yu Gothic, 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif",xlargeBoldLineHeight:"36px",fontFamily:"'BrandonText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",smallMediumFontWeight:"500",xsmallMediumFontSize:"14px",xsmallMediumLineHeight:"20px",mediumBoldFontWeight:"bold",xsmallRegularFontWeight:"normal",smallRegularFontSize:"16px",xxsmallRegularFontSize:"12px",xxlargeBoldFontSize:"48px",largeBoldFontSize:"24px",smallRegularLineHeight:"24px",xxsmallRegularLineHeight:"16px",xxlargeBoldLineHeight:"56px",largeBoldLineHeight:"28px",xsmallBoldFontWeight:"bold",fontWeightMedium:"500",smallMediumFontSize:"16px",smallMediumLineHeight:"24px",mediumBoldFontSize:"18px",mediumBoldLineHeight:"24px",xsmallRegularFontSize:"14px",largeMediumFontWeight:"500",xsmallRegularLineHeight:"20px",smallBoldFontWeight:"bold",xsmallBoldFontSize:"14px",xsmallBoldLineHeight:"20px",xlargeBoldFontWeight:"bold",largeMediumFontSize:"24px",largeMediumLineHeight:"32px",fontWeightBold:"bold",fontFamilyBrand:"BrandonText",xsmallMediumFontWeight:"500",smallBoldFontSize:"16px",fontWeightNormal:"normal",smallBoldLineHeight:"24px",xxsmallRegularFontWeight:"normal",smallRegularFontWeight:"normal"}},KxBF:function(e,t){e.exports=function(e,t,o){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(o=o>a?a:o)<0&&(o+=a),a=t>o?0:o-t>>>0,t>>>=0;for(var l=Array(a);++n<a;)l[n]=e[n+t];return l}},bahg:function(e,t){e.exports=function(e){return e.split("")}},dRDw:function(e,t,o){e.exports={fontItem:"otkit-typography-desktop-module--font-item--W_aj9",mainContainer:"otkit-typography-desktop-module--main-container--20br3"}},gQMU:function(e,t,o){var n=o("0ZTe")("toUpperCase");e.exports=n},quyA:function(e,t){var o=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return o.test(e)}},u6S6:function(e,t,o){var n=o("6acW"),a=o("sgoq")((function(e,t,o){return t=t.toLowerCase(),e+(o?n(t):t)}));e.exports=a},"uD+h":function(e,t,o){"use strict";var n=o("u6S6"),a=o.n(n),l=o("q1tI"),i=o.n(l),r=o("KSq7"),u=o.n(r),d=o("Zn/k"),s=o("dRDw"),m=o.n(s),f=["xxlarge-bold","xlarge-bold","large-bold","large-medium","medium-bold","small-bold","small-medium","small-regular","xsmall-bold","xsmall-medium","xsmall-regular"];t.a=function(){var e=f.map((function(e,t){var o=u.a[a()(e+"-font-size")],n=u.a[a()(e+"-font-weight")],l=u.a[a()(e+"-line-height")],r={fontSize:o,fontWeight:n,lineHeight:l};return i.a.createElement("div",{className:m.a.fontItem,style:r,key:t},e," | font-size: ",o," | font-weight: ",n," | line-height: ",l)}));return i.a.createElement("div",{className:m.a.mainContainer},i.a.createElement(d.a,{text:"Typography – Desktop",type:"SectionHeader__small"}),i.a.createElement("p",null,"To use these OTKit typography rules in your project, we have a production-tested package that exports readily made font groupings for you:"," ",i.a.createElement("a",{href:"https://github.com/opentable/ot-react-ui-components/tree/master/styles/typography-desktop"},"@ot-react-ui/typography-desktop.")," ","See its README for details."),i.a.createElement("p",null,"It is generally ",i.a.createElement("em",null,"not recommended")," to directly consume / reference the values in this token unless for explicit reasons, such as overriding."),i.a.createElement("div",{className:m.a.fontColumn},e))}},upev:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),a=o.n(n),l=o("rBsb"),i=o("uD+h");t.default=Object(l.a)((function(){return a.a.createElement(i.a,null)}),"design-system-nav")},wy8a:function(e,t,o){var n=o("KxBF");e.exports=function(e,t,o){var a=e.length;return o=void 0===o?a:o,!t&&o>=a?e:n(e,t,o)}}}]);
//# sourceMappingURL=component---src-pages-otkit-typography-js-ccdabd9a3232b2cea062.js.map