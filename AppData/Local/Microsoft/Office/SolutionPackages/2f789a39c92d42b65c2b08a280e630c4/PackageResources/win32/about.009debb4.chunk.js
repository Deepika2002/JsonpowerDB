"use strict";(self.webpackChunkmaker_code_editor=self.webpackChunkmaker_code_editor||[]).push([[2443],{31985:function(e,t){t.Z=function(e){var t=e.when,n=e.children;return t?n:null}},40106:function(e,t,n){var o=n(84586).ZP.div.withConfig({displayName:"TaskpaneWrapper",componentId:"sc-1kkkq32-0"})(["height:100vh;min-height:100vh;width:100%;overflow:hidden;display:flex;flex-direction:column;background:",";"],(function(e){return e.theme.colors.neutralLight}));t.Z=o},63699:function(e,t,n){var o,r=n(84586),i=n(21914),a=n(31183);t.Z=(0,r.Zz)((function(e){var t=e["data-testid"]?{"data-testid":e["data-testid"]}:void 0;return i.createElement(l,null,i.createElement(a.X,{ariaLabel:strings.substitute(strings.Editor.SettingCheckboxAriaLabel,{settingName:e.settingTitle}),label:e.settingTitle,onChange:function(t,n){return void 0!==n&&e.onChange(n)},checked:e.checked,boxSide:"end",styles:s(e.theme),inputProps:t}))}));var s=function(e){return{root:{width:"100%"},label:{width:"100%",justifyContent:"space-between"},text:{fontSize:e.fontSizes.small,fontWeight:e.fontWeights.semibold}}},l=r.ZP.div(o||(o=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  margin: ",";\n  margin-top: ",";\n"])),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.spacing.mediumPlus}))},45502:function(e,t,n){n.d(t,{Z:function(){return m}});var o,r=n(84586),i=n(21914),a=n(42090),s=n(54346),l=n(14979),u=n(31985);var c=(0,r.Zz)((function(e){return i.createElement(d,{"data-testid":e["data-testid"]},i.createElement(l._,{styles:{root:{fontWeight:e.theme.fontWeights.semibold,fontSize:e.theme.fontSizes.small}}},e.label),e.children)})),d=r.ZP.div(o||(o=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  margin: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.spacing.medium})),m=(0,r.Zz)((function(e){return i.createElement(c,{label:e.settingTitle},i.createElement(u.Z,{when:!!e.description},i.createElement(l._,null,e.description)),i.createElement(a.L,{"data-testid":e["data-testid"],ariaLabel:strings.substitute(strings.Editor.SettingsDropdownAriaLabel,{settingTitle:e.settingTitle}),selectedKey:p(e.settingTitle,e.currentValue),onChange:function(t,n){return n&&e.onChange(n.data)},options:e.possibleValues.map((function(t){return{key:p(e.settingTitle,t),text:e.displayValues&&e.displayValues[t]?e.displayValues[t]:t,data:t}})),responsiveMode:s.eD.large,styles:f(e.theme)}))})),p=function(e,t){return e+"_"+t+"_key"},f=function(e){return{title:{backgroundColor:e.colors.neutralLighterAlt},dropdown:{fontSize:e.fontSizes.small,selectors:{"&:focus:after":{borderWidth:"1.5px"}}},dropdownItem:{backgroundColor:e.colors.neutralLighterAlt,fontSize:e.fontSizes.small,selectors:{"&:focus":{backgroundColor:e.colors.neutralLight}}},dropdownItemSelected:{fontSize:e.fontSizes.small}}}},49225:function(e,t,n){n.d(t,{R4:function(){return i},s8:function(){return a},De:function(){return s},H_:function(){return l},Ti:function(){return u},Qf:function(){return c},xm:function(){return d},FA:function(){return m}});var o=n(47387);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}var i=function(e){return{rootDisabled:{backgroundColor:e.colors.neutralLight},rootFocused:{backgroundColor:e.colors.neutralQuaternaryAlt},rootHovered:{backgroundColor:e.colors.neutralQuaternaryAlt},rootPressed:{backgroundColor:e.colors.neutralTertiaryAlt}}},a=function(e){return{content:{backgroundColor:e.colors.neutralLighterAlt}}},s=function(){return{main:{position:"absolute",top:"10vh"}}},l=function(e,t){return e==o.E.large?{circle:{border:"2px solid "+t.colors.primaryLightest,borderTop:"2px solid "+t.colors.primaryLight,width:"30px",height:"30px",animation:"loading-animation 1s linear infinite"}}:{circle:{border:"2px solid "+t.colors.primaryLightest,borderTop:"2px solid "+t.colors.primaryLight,animation:"loading-animation 1s linear infinite"}}},u=function(e){return{root:{color:e.colors.linkText,selectors:{":hover":{color:e.colors.linkTextHovered}}}}},c=function(e,t){var n={root:{width:"100%",maxWidth:"100%",borderRadius:"2px",transition:".1s linear",boxShadow:"0 4px 4px 0 rgb(0 0 0 / 8%)",backgroundColor:e.colors.neutralLighterAlt}};return t?n:r({},n,{root:r({},n.root,{selectors:{":hover":{transform:"scale(1.05)",boxShadow:"0 8px 16px rgb(0 0 0/ 10%)"}}})})},d=function(e,t,n){return{root:{fontSize:n||e.fontSizes.medium,fontWeight:t||e.fontWeights.semibold}}},m=function(e){return{backgroundColor:e.colors.neutralLighterAlt,styles:{beakCurtain:{backgroundColor:e.colors.neutralLighterAlt}}}}},92163:function(e,t,n){n.r(t),n.d(t,{getAboutText:function(){return x}});var o=n(84586),r=n(21914),i=n(28722),a=n(35676),s=n(83081),l=n(52105),u=n(40106),c=n(60509),d=n(63699),m=n(45502),p=n(84519),f=n(21830),h=n(49225);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}var v="ShowBackButton";function b(){return[["Environment",(0,a.K2)()],["Commit","https://office.visualstudio.com/OC/_git/MakerCodeEditor/commit/5378aaceb97d21e893f02ef18affbc685684c4b1"],["Last updated","Tue, 26 Jul 2022 22:37:11 GMT"],["Office API client / Data_SDX_BrowserToken",(0,a.IU)()&&window.localStorage.getItem("Office API client")||"unknown"],["Host",window.location.host],["Session ID",(0,p.M)()]]}function x(){return b().map((function(e){return e[0]+": "+e[1]})).join("\n")}t.default=(0,o.Zz)((function(e){return(0,i.hf)(),r.createElement(u.Z,null,r.createElement(k,null,r.createElement("h2",null,window.sessionStorage.getItem(v)?r.createElement(s.K,{iconProps:{iconName:(0,f.zg)()?"BackArrowRtl":"BackArrow"},ariaLabel:strings.General.BackButtonText,allowDisabledFocus:!0,onClick:function(){(0,i.Tv)("Reloading..."),window.sessionStorage.removeItem(v),window.location.hash=l.yy.Editor,window.location.reload()},styles:g({},y(e.theme),(0,h.R4)(e.theme))}):null,"You are currently on ",(0,a.K2)()),r.createElement("hr",{style:{margin:"3rem 0 2rem 0"}}),r.createElement("h2",null,"Per-environment settings"),r.createElement(C,{theme:e.theme},r.createElement("b",null,"IMPORTANT: "),"Settings are stored per-environment. So, before changing these settings, ",r.createElement("b",null,"ensure that you are on the right environment!")),Object.keys(c.nl).map((function(e){var t=c.nl[e],n=(0,c.m6)(e),o=(0,r.useState)(n||""),i=o[0],a=o[1];return(0,c.Wt)(e)?r.createElement(d.Z,{key:e,settingTitle:e,checked:!!(0,c.m6)(e),onChange:function(t){a(t),(0,c.MF)(e,t)}}):r.createElement(m.Z,{key:e,settingTitle:e,currentValue:i,possibleValues:Object.keys(t.options),displayValues:t.options,onChange:function(t){var n=t;a(n),(0,c.MF)(e,n)}})})),r.createElement("hr",{style:{margin:"3rem 0 2rem 0"}}),r.createElement("div",null,"FYI, your current environment details are as follows:"),r.createElement(w,null,r.createElement("tbody",null,b().map((function(e,t){var n=e[0],o=e[1];return r.createElement("tr",{key:t},r.createElement("td",null,n),r.createElement("td",null,o))}))))))}));var w=o.ZP.table.withConfig({displayName:"about__TableWrapper",componentId:"a4lp1l-0"})(["margin-top:1rem;border-collapse:collapse;border:1px solid black;width:100%;& tr{border:1px solid black;& td{border:1px solid black;padding:0.5rem 1rem;max-width:10rem;word-wrap:break-word;white-space:pre-wrap;}& td:nth-child(2){font-weight:bold;}}"]),C=o.ZP.div.withConfig({displayName:"about__ImportantNotes",componentId:"a4lp1l-1"})(["margin-top:1rem;padding:1rem 2rem;background:",";& h3{margin-bottom:1rem;}"],(function(e){return e.theme.colors.neutralTertiaryAlt})),k=o.ZP.div.withConfig({displayName:"about__AboutWrapper",componentId:"a4lp1l-2"})(["padding:2rem;overflow:auto;height:100%;"]),y=function(e){return{root:{bottom:".4rem",fontWeight:e.fontWeights.semibold,fontSize:e.fontSizes.mediumPlus,paddingLeft:e.spacing.xSmall,paddingRight:e.spacing.xSmall,marginRight:e.spacing.small},icon:{fontSize:e.fontSizes.icon}}}},27775:function(e,t,n){n.d(t,{Hn:function(){return r},zY:function(){return i},ky:function(){return a}});var o=n(21914),r=o.createContext({window:"object"===typeof window?window:void 0}),i=function(){return o.useContext(r).window},a=function(){var e;return null===(e=o.useContext(r).window)||void 0===e?void 0:e.document}},16649:function(e,t,n){n.d(t,{n:function(){return i},f:function(){return a}});var o=n(41456),r=n(81419),i={msButton:"ms-Button",msButtonHasMenu:"ms-Button--hasMenu",msButtonIcon:"ms-Button-icon",msButtonMenuIcon:"ms-Button-menuIcon",msButtonLabel:"ms-Button-label",msButtonDescription:"ms-Button-description",msButtonScreenReaderText:"ms-Button-screenReaderText",msButtonFlexContainer:"ms-Button-flexContainer",msButtonTextContainer:"ms-Button-textContainer"},a=(0,o.NF)((function(e,t,n,o,a,s,l,u,c,d,m){var p,f,h=(0,r.Cn)(i,e||{}),g=d&&!m;return(0,r.ZC)({root:[h.msButton,t.root,o,c&&["is-checked",t.rootChecked],g&&["is-expanded",t.rootExpanded,{selectors:(p={},p[":hover ."+h.msButtonIcon]=t.iconExpandedHovered,p[":hover ."+h.msButtonMenuIcon]=t.menuIconExpandedHovered||t.rootExpandedHovered,p[":hover"]=t.rootExpandedHovered,p)}],u&&[i.msButtonHasMenu,t.rootHasMenu],l&&["is-disabled",t.rootDisabled],!l&&!g&&!c&&{selectors:(f={":hover":t.rootHovered},f[":hover ."+h.msButtonLabel]=t.labelHovered,f[":hover ."+h.msButtonIcon]=t.iconHovered,f[":hover ."+h.msButtonDescription]=t.descriptionHovered,f[":hover ."+h.msButtonMenuIcon]=t.menuIconHovered,f[":focus"]=t.rootFocused,f[":active"]=t.rootPressed,f[":active ."+h.msButtonIcon]=t.iconPressed,f[":active ."+h.msButtonDescription]=t.descriptionPressed,f[":active ."+h.msButtonMenuIcon]=t.menuIconPressed,f)},l&&c&&[t.rootCheckedDisabled],!l&&c&&{selectors:{":hover":t.rootCheckedHovered,":active":t.rootCheckedPressed}},n],flexContainer:[h.msButtonFlexContainer,t.flexContainer],textContainer:[h.msButtonTextContainer,t.textContainer],icon:[h.msButtonIcon,a,t.icon,g&&t.iconExpanded,c&&t.iconChecked,l&&t.iconDisabled],label:[h.msButtonLabel,t.label,c&&t.labelChecked,l&&t.labelDisabled],menuIcon:[h.msButtonMenuIcon,s,t.menuIcon,c&&t.menuIconChecked,l&&!m&&t.menuIconDisabled,!l&&!g&&!c&&{selectors:{":hover":t.menuIconHovered,":active":t.menuIconPressed}},g&&["is-expanded",t.menuIconExpanded]],description:[h.msButtonDescription,t.description,c&&t.descriptionChecked,l&&t.descriptionDisabled],screenReaderText:[h.msButtonScreenReaderText,t.screenReaderText]})}))},47387:function(e,t,n){var o,r;n.d(t,{E:function(){return o},d:function(){return r}}),function(e){e[e.xSmall=0]="xSmall",e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large"}(o||(o={})),function(e){e[e.normal=0]="normal",e[e.large=1]="large"}(r||(r={}))},66184:function(e,t,n){n.d(t,{P:function(){return a}});var o=n(4367),r=n(21914),i=["setState","render","componentWillMount","UNSAFE_componentWillMount","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","getSnapshotBeforeUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount"];var a=function(e){function t(t){var n=e.call(this,t)||this;return n._updateComposedComponentRef=n._updateComposedComponentRef.bind(n),n}return(0,o.ZT)(t,e),t.prototype._updateComposedComponentRef=function(e){var t;this._composedComponentInstance=e,e?this._hoisted=function(e,t,n){void 0===n&&(n=i);var o=[],r=function(r){"function"!==typeof t[r]||void 0!==e[r]||n&&-1!==n.indexOf(r)||(o.push(r),e[r]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t[r].apply(t,e)})};for(var a in t)r(a);return o}(this,e):this._hoisted&&(t=this,this._hoisted.forEach((function(e){return delete t[e]})))},t}(r.Component)},54346:function(e,t,n){n.d(t,{eD:function(){return o},K7:function(){return p},Ae:function(){return f},tc:function(){return h}});var o,r=n(4367),i=n(21914),a=n(66184),s=n(78926),l=n(95210),u=n(27775);!function(e){e[e.small=0]="small",e[e.medium=1]="medium",e[e.large=2]="large",e[e.xLarge=3]="xLarge",e[e.xxLarge=4]="xxLarge",e[e.xxxLarge=5]="xxxLarge",e[e.unknown=999]="unknown"}(o||(o={}));var c,d,m=[479,639,1023,1365,1919,99999999];function p(){var e;return null!==(e=null!==c&&void 0!==c?c:d)&&void 0!==e?e:o.large}function f(e){var t,n=((t=function(t){function n(e){var n=t.call(this,e)||this;return n._onResize=function(){var e=h(n.context.window);e!==n.state.responsiveMode&&n.setState({responsiveMode:e})},n._events=new s.r(n),n._updateComposedComponentRef=n._updateComposedComponentRef.bind(n),n.state={responsiveMode:p()},n}return(0,r.ZT)(n,t),n.prototype.componentDidMount=function(){this._events.on(this.context.window,"resize",this._onResize),this._onResize()},n.prototype.componentWillUnmount=function(){this._events.dispose()},n.prototype.render=function(){var t=this.state.responsiveMode;return t===o.unknown?null:i.createElement(e,(0,r.pi)({ref:this._updateComposedComponentRef,responsiveMode:t},this.props))},n}(a.P)).contextType=u.Hn,t);return(0,l.f)(e,n)}function h(e){var t=o.small;if(e){try{for(;e.innerWidth>m[t];)t++}catch(n){t=p()}d=t}else{if(void 0===c)throw new Error("Content was rendered in a server environment without providing a default responsive mode. Call setResponsiveMode to define what the responsive mode is.");t=c}return t}}}]);
//# sourceMappingURL=about.009debb4.chunk.js.map