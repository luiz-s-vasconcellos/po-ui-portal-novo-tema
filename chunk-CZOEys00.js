import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,A as Hoe,Aa as qk,Ar as Ig,B as L4,Bn as x4,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,Ga as uF,H as Lf,Hi as ar,Hr as Me,Ja as vt,Li as ZO,Ln as w4,Lt as aae,Mr as Jc,N as Iu,Ni as Y0,Qi as gF,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xn as $O,Xr as No,Xt as ere,Yi as eF,Yt as ea,Zt as fae,at as R4,b as Fu,ca as jk,cn as iie,da as kI,di as RZ,dr as Cu,ea as ge,ei as Ok,eo as xo,er as An,fi as Rb,fr as Db,ft as Tn,gi as Tk,hi as TZ,ht as U4,ia as iR,jr as JL,k as Hne,ka as qL,kr as I,lt as Sf,mi as S,mt as Tze,no as yk,nr as BO,oi as Pk,oo as zO,or as Bk,pa as kk,qi as de,qr as NZ,rt as Qae,u as Bne,ui as R,va as nk,w as Goe,wr as HO,xi as VO,xr as Gb,xt as Woe,ya as nm,yi as U_,zi as Zk,zr as Kk}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var ht=()=>({table:`PO Table`,angular:`PO-UI`});var gt=r=>[r];var Xe=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&_u(0,`po-table`,0),l&2&&Rb(`p-items`,Bk(2,gt,jk(1,ht)))},dependencies:[R4],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-basic/sample-po-table-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-basic/sample-po-table-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-table-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ft,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Xe],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:/* @__PURE__ */ new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:/* @__PURE__ */ new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Ye=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=Tn.Medium;filterType=Iu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Iu.startsWith},{label:`Contains`,value:Iu.contains},{label:`Ends With`,value:Iu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=Tn.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(I(Ee))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&Cu(ea,7),l&2){let m;No(m=xo())&&(a.poModal=m.first)}},standalone:!1,features:[Me([Ee])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=ZO();Jc(0,`po-table`,1),vt(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Zg(),_u(4,`po-divider`),Jc(5,`div`,2)(6,`po-button`,4),vt(`p-click`,function(){return a.addItem()}),Zg()(),_u(7,`po-divider`),Jc(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.columnsName,s)||(a.columnsName=s),H_(s)}),vt(`p-change`,function(){return a.updateColumns()}),Zg()(),Jc(12,`div`,2)(13,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),H_(s)}),Zg(),Jc(14,`po-switch`,7),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),H_(s)}),Zg()(),Jc(15,`div`,2)(16,`po-checkbox-group`,8),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.properties,s)||(a.properties=s),H_(s)}),Zg()(),Jc(17,`div`,2)(18,`po-checkbox-group`,9),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.actionsDefinition,s)||(a.actionsDefinition=s),H_(s)}),vt(`p-change`,function(){return a.changeActionOptions()}),Zg()(),Jc(19,`div`,2)(20,`po-radio-group`,10),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.spacing,s)||(a.spacing=s),H_(s)}),Zg()(),Jc(21,`div`,2)(22,`po-checkbox-group`,11),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.selection,s)||(a.selection=s),H_(s)}),vt(`p-change`,function(){return a.changeSelectionOptions()}),Zg(),Jc(23,`po-radio-group`,12),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.filterType,s)||(a.filterType=s),H_(s)}),Zg(),Jc(24,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.componentsSize,s)||(a.componentsSize=s),H_(s)}),Zg()(),Jc(25,`div`,2)(26,`po-input`,14),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.literals,s)||(a.literals=s),H_(s)}),vt(`p-change`,function(){return a.changeLiterals()}),Zg(),Jc(27,`po-input`,15),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.filteredColumns,s)||(a.filteredColumns=s),H_(s)}),vt(`p-change`,function(){return a.changeFilteredColumns()}),Zg(),Jc(28,`po-number`,16),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.height,s)||(a.height=s),H_(s)}),Zg(),Jc(29,`po-number`,17),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.maxColumns,s)||(a.maxColumns=s),H_(s)}),Zg()(),Jc(30,`div`,2)(31,`po-button`,18),vt(`p-click`,function(){return a.restore()}),Zg()()(),Jc(32,`po-modal`,19),_u(33,`po-info`,20),Zg()}l&2&&(Rb(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),Ig(3),Rb(`p-value`,a.event),Ig(8),Yb(`ngModel`,a.columnsName),Rb(`p-options`,a.columnsOptions),Y0(),Ig(2),Yb(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),Rb(`p-options`,a.typeHeaderOptions),Y0(),Ig(),Yb(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),Y0(),Ig(2),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),Y0(),Ig(2),Yb(`ngModel`,a.actionsDefinition),Rb(`p-options`,a.actionsDefinitionOptions),Y0(),Ig(2),Yb(`ngModel`,a.spacing),Rb(`p-options`,a.typeSpacing),Y0(),Ig(2),Yb(`ngModel`,a.selection),Rb(`p-options`,a.selectionOptions),Y0(),Ig(),Yb(`ngModel`,a.filterType),Rb(`p-options`,a.filterModeOptions),Y0(),Ig(),Yb(`ngModel`,a.componentsSize),Rb(`p-options`,a.componentsSizeOptions),Y0(),Ig(2),Yb(`ngModel`,a.literals),Y0(),Ig(),Yb(`ngModel`,a.filteredColumns),Y0(),Ig(),Yb(`ngModel`,a.height),Y0(),Ig(),Yb(`ngModel`,a.maxColumns),Y0(),Ig(4),Rb(`p-value`,a.currentItem))},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Hoe,Gte,L4,Yoe,ea,R4],encapsulation:2,changeDetection:1})}return r})();var Pt=r=>({"docs-sample-code-tabs":r});var et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-labs/sample-po-table-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-change-fixed-columns)="changeEvent('p-change-fixed-columns')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-labs/sample-po-table-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-table-labs/sample-po-table-labs.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12',
    'caption-tag-01',
    'caption-tag-03',
    'caption-tag-06',
    'caption-tag-08',
    'caption-tag-11',
    'caption-tag-13',
    'caption-tag-16',
    'caption-tag-18',
    'caption-tag-21',
    'caption-tag-23',
    'caption-tag-26',
    'caption-tag-28',
    'caption-tag-31',
    'caption-tag-33'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' },
          { value: 'caption-tag-01', color: 'caption-tag-01', label: 'Caption 01' },
          { value: 'caption-tag-03', color: 'caption-tag-03', label: 'Caption 03' },
          { value: 'caption-tag-06', color: 'caption-tag-06', label: 'Caption 06' },
          { value: 'caption-tag-08', color: 'caption-tag-08', label: 'Caption 08' },
          { value: 'caption-tag-11', color: 'caption-tag-11', label: 'Caption 11' },
          { value: 'caption-tag-13', color: 'caption-tag-13', label: 'Caption 13' },
          { value: 'caption-tag-16', color: 'caption-tag-16', label: 'Caption 16' },
          { value: 'caption-tag-18', color: 'caption-tag-18', label: 'Caption 18' },
          { value: 'caption-tag-21', color: 'caption-tag-21', label: 'Caption 21' },
          { value: 'caption-tag-23', color: 'caption-tag-23', label: 'Caption 23' },
          { value: 'caption-tag-26', color: 'caption-tag-26', label: 'Caption 26' },
          { value: 'caption-tag-28', color: 'caption-tag-28', label: 'Caption 28' },
          { value: 'caption-tag-31', color: 'caption-tag-31', label: 'Caption 31' },
          { value: 'caption-tag-33', color: 'caption-tag-33', label: 'Caption 33' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'caption-tag-08' : 'caption-tag-13';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-table-labs`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Pt,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ye],encapsulation:2,changeDetection:1})}return r})();var _t=[`table`];var tt=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&Cu(_t,5),l&2){let m;No(m=xo())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=ZO();Jc(0,`div`,1)(1,`po-input`,2),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.service,s)||(a.service=s),H_(s)}),vt(`p-change`,function(){return a.changeService(a.service)}),Zg()(),Jc(2,`div`,1),_u(3,`po-divider`,3),Jc(4,`po-textarea`,4),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.stringColumns,s)||(a.stringColumns=s),H_(s)}),vt(`p-change`,function(s){return a.onChangeColumns(s)}),Zg()(),Jc(5,`div`,1),_u(6,`po-divider`,5),Jc(7,`po-input`,6),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.key,s)||(a.key=s),H_(s)}),Zg(),Jc(8,`po-input`,7),W0(),Kb(`ngModelChange`,function(s){return U_(m),Ak(a.value,s)||(a.value=s),H_(s)}),Zg()(),Jc(9,`div`,1)(10,`po-button`,8),vt(`p-click`,function(){return a.addFilter(a.key,a.value)}),Zg()(),Jc(11,`div`,1)(12,`po-disclaimer-group`,9),vt(`p-remove`,function(s){return a.removeItem(s)})(`p-remove-all`,function(){return a.removeAllItems()}),Zg()(),Jc(13,`div`,1),_u(14,`po-table`,10,0),Zg()}l&2&&(Ig(),Yb(`ngModel`,a.service),Y0(),Ig(3),Yb(`ngModel`,a.stringColumns),Rb(`p-rows`,5),Y0(),Ig(3),Yb(`ngModel`,a.key),Y0(),Ig(),Yb(`ngModel`,a.value),Y0(),Ig(2),Rb(`p-disabled`,!a.key||!a.value),Ig(2),Rb(`p-disclaimers`,a.filters),Ig(2),Rb(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[TZ,JL,oi,x4,Lf,U4,Goe,R4],encapsulation:2,changeDetection:1})}return r$1})();var At=r=>({"docs-sample-code-tabs":r});var nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table using API`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-table-with-api`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,At,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,tt],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Mt(r,W){if(r&1){let o=ZO();Jc(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),W0(),Kb(`ngModelChange`,function(a){let m=U_(o).$implicit;return Ak(m.status,a)||(m.status=a),H_(a)}),Zg()(),Jc(3,`div`,3),_u(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),Zg()()}if(r&2){let o=W.$implicit,l=nk();Rb(`p-title`,kk(`Transport detail `,o.code)),Ig(2),Yb(`ngModel`,o.status),Rb(`p-options`,l.statusOptions),Y0(),Ig(2),Rb(`p-value`,o.batch_product),Ig(),Rb(`p-value`,o.driver),Ig(),Rb(`p-value`,o.license_plate)}}var it=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(I(be))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[Me([be])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(Jc(0,`po-table`,0),Db(1,Mt,7,7,`ng-template`,1),Zg()),l&2&&(Rb(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),Ig(),Rb(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[TZ,JL,Woe,Yoe,R4,Hne,fae],encapsulation:2,changeDetection:1})}return r})();var Ot=r=>({"docs-sample-code-tabs":r});var at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table - Transport`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-transport/sample-po-table-transport.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-transport/sample-po-table-transport.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-table-transport/sample-po-table-transport.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'caption-tag-23', label: 'Delivered' },
          { value: 'transport', color: 'caption-tag-14', label: 'Transport' },
          { value: 'production', color: 'caption-tag-03', label: 'Production' },
          { value: 'stock', color: 'caption-tag-33', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-table-transport`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ot,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,it],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var ot=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`)}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(I(Se),I(Fu),I(iie))};static ɵcmp=Jn({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&Cu(ea,7)(R4,7),l&2){let m;No(m=xo())&&(a.poModal=m.first),No(m=xo())&&(a.poTable=m.first)}},standalone:!1,features:[Me([Se,iie])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(Jc(0,`div`,0),Tk(1,`Choose one or more promotional airfares`),Zg(),_u(2,`po-divider`),Jc(3,`po-table`,1),vt(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(p){return a.sumTotal(p)})(`p-unselected`,function(p){return a.decreaseTotal(p)})(`p-change-visible-columns`,function(p){return a.changeColumnVisible(p)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(p){return a.deleteItems(p)}),Zg(),_u(4,`po-divider`)(5,`po-info`,2),qk(6,`currency`),_u(7,`po-info`,3),Jc(8,`div`,4)(9,`po-button`,5),vt(`p-click`,function(){return a.addToCart()}),Zg(),Jc(10,`po-button`,6),vt(`p-click`,function(){return a.expandAll()}),Zg(),Jc(11,`po-button`,7),vt(`p-click`,function(){return a.collapseAll()}),Zg()(),Jc(12,`po-modal`,8),_u(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),Zg()),l&2&&(Ig(3),Rb(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),Ig(2),Rb(`p-value`,Ok(Zk(6,21,a.total,`USD`))),Ig(2),Rb(`p-value`,a.totalExpanded),Ig(5),Rb(`p-title`,Pk(``,a.detail?.destination,` - `,a.detail?.country)),Ig(),Rb(`p-value`,a.detail?.airline),Ig(),Rb(`p-value`,a.detail?.initials),Ig(),Rb(`p-value`,a.detail?.class))},dependencies:[oi,Lf,Yoe,ea,R4,gF],encapsulation:2,changeDetection:1})}return r$2})();var Rt=r=>({"docs-sample-code-tabs":r});var lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table - Airfare`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'caption-tag-13', label: 'Available' },
          { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
          { value: 'closed', color: 'caption-tag-03', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-table-airfare`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Rt,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ot],encapsulation:2,changeDetection:1})}return r})();var j;(function(r){r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`})(j||(j={}));var xe=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(`.`).length>1){let s=m.split(`.`)[0],ye=m.split(`.`)[1];return o[s][ye]<l[s][ye]?p===Sf.Ascending?-1:1:p===Sf.Ascending?1:-1}else return o[m]<l[m]?p===Sf.Ascending?-1:1:p===Sf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Ht(r,W){if(r&1&&(Jc(0,`div`),Tk(1),qk(2,`uppercase`),Zg()),r&2){let o=W.$implicit;yk(kk(`badge `,o)),Ig(),Gb(Kk(2,4,o))}}function jt(r,W){if(r&1&&(Jc(0,`ul`)(1,`li`,4),Tk(2),Zg(),_u(3,`po-divider`),Zg()),r&2){let o=W.$implicit;Ig(2),Gb(o)}}var rt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:j.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:j.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:j.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===j.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==j.Stable}canShowExtras(o){return o?.component?.status!==j.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(I(xe),I(An))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&Cu(ea,7),l&2){let m;No(m=xo())&&(a.poModal=m.first)}},standalone:!1,features:[Me([xe])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(Jc(0,`div`,0),Tk(1,`PO UI Library`),Zg(),_u(2,`po-divider`),Jc(3,`po-table`,1),vt(`p-show-more`,function(p){return a.showMore(p)})(`p-sort-by`,function(p){return a.sort(p)}),Db(4,Ht,3,6,`ng-template`,2),Zg(),Jc(5,`po-modal`,3),$O(6,jt,4,1,`ul`,null,HO),Zg()),l&2&&(Ig(3),Rb(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),Ig(),Rb(`p-property`,`component.type`),Ig(),Rb(`p-title`,Pk(``,a.title,` - `,a.extraInformation?.component)),Ig(),zO(a.extraInformation?.extras))},dependencies:[Lf,ea,R4,Bne,uF],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var Ut=r=>({"docs-sample-code-tabs":r});var mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:38,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table - Po Field Components`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-components/sample-po-table-components.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<po-divider />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  @for (extra of extraInformation?.extras; track extra) {
    <ul>
      <li class="po-font-text">{ { extra }}</li>
      <po-divider />
    </ul>
  }
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-components/sample-po-table-components.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'caption-tag-13',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'caption-tag-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'caption-tag-03',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10%',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'caption-tag-08' : 'caption-tag-13';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'caption-tag-08' : 'caption-tag-13';
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-table-components/sample-po-table-components.enum.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),Zg(),Jc(25,`label`,6),Tk(26,`sample-po-table-components/sample-po-table-components.service.ts`),Zg(),Jc(27,`pre`,9),Tk(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),Zg()()(),Jc(29,`po-tab`,10)(30,`div`)(31,`label`,6),Tk(32,`sample-po-table-components/sample-po-table-components.component.css`),Zg(),Jc(33,`pre`,11),Tk(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),Zg()()()()(),Jc(35,`div`,12),_u(36,`sample-po-table-components`),Zg(),_u(37,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ut,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,rt],encapsulation:2,changeDetection:1})}return r})();var he=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(iR(`items`))}static ɵfac=function(l){return new(l||r)(S(kI))};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var $t=[`POItemsOri`];var Jt=[`POItemsSelected`];var dt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(I(he))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&Cu($t,7)(Jt,7),l&2){let m;No(m=xo())&&(a.poItemsOri=m.first),No(m=xo())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[Me([he])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(Jc(0,`div`,2)(1,`div`,3)(2,`div`,4),Tk(3,`Choose one or more heroes for your team`),Zg(),Jc(4,`po-table`,5,0),vt(`p-selected`,function(p){return a.changeOptions(p,`new`)})(`p-unselected`,function(p){return a.changeOptions(p,`change`)})(`p-delete-items`,function(p){return a.deleteItems(p)}),Zg()(),Jc(6,`div`,3)(7,`div`,4),Tk(8,`Here your chosen heroes`),Zg(),_u(9,`po-table`,6,1),Zg()()),l&2&&(Ig(4),Rb(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),Ig(5),Rb(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[R4],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r});var st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table - Heroes`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-table-heroes`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Kt,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,dt],encapsulation:2,changeDetection:1})}return r})();var Yt=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var en=r=>[r];var pt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(Jc(0,`div`,0),Tk(1,` Choose one column and drag to another horizontal position in the table and drop
`),Zg(),_u(2,`po-divider`)(3,`po-table`,1)),l&2&&(Ig(3),Rb(`p-items`,Bk(5,en,jk(4,Yt)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[Lf,R4],encapsulation:2,changeDetection:1})}return r})();var nn=r=>({"docs-sample-code-tabs":r});var ct=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table Drag and Drop`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-table-draggable`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,nn,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,pt],encapsulation:2,changeDetection:1})}return r})();function on(r,W){if(r&1){let o=ZO();Jc(0,`po-filter-chip`,6),vt(`p-selected-change`,function(a){let m=U_(o).$implicit,p=nk();return H_(p.onSuggestionChange(m,a))}),Zg()}if(r&2){let o=W.$implicit,l=nk();Rb(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var ut=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(I(Fu))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&Cu(R4,5),l&2){let m;No(m=xo())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(Jc(0,`p`,0),Tk(1,`PO Search A.I.`),Zg(),Jc(2,`p`,1),Tk(3,` O `),Jc(4,`strong`),Tk(5,`PO Search A.I.`),Zg(),Tk(6,` é um recurso de busca inteligente integrado ao `),Jc(7,`code`),Tk(8,`po-table`),Zg(),Tk(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),Zg(),Jc(10,`p`,2),Tk(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),Zg(),Jc(12,`div`,3),$O(13,on,1,3,`po-filter-chip`,4,HO),Zg(),Jc(15,`po-table`,5),vt(`p-search-ai-result`,function(p){return a.onAiResult(p)})(`p-search-ai-low-confidence`,function(p){return a.onAiLowConfidence(p)})(`p-search-ai-error`,function(p){return a.onAiError(p)}),Zg()),l&2&&(Ig(13),zO(a.examples),Ig(2),Rb(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[aae,R4],encapsulation:2})}return r})();var rn=r=>({"docs-sample-code-tabs":r});var Et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Table - Search A.I.`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
<p class="po-font-text-small po-mb-2" style="color: var(--color-neutral-mid-tone)">
  O <strong>PO Search A.I.</strong> \xE9 um recurso de busca inteligente integrado ao <code>po-table</code> que utiliza
  intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve
  o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa
  inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
</p>
<p class="po-font-text-small po-mt-2 po-mb-1" style="color: var(--color-neutral-mid-tone)">
  Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
</p>
<div class="po-mb-1" style="display: flex; flex-wrap: wrap; gap: 0.5rem">
  @for (ex of examples; track ex) {
    <po-filter-chip
      [p-label]="ex"
      [p-selected]="selectedSuggestion === ex"
      [p-disabled]="suggestionsLocked && selectedSuggestion !== ex"
      (p-selected-change)="onSuggestionChange(ex, $event)"
    ></po-filter-chip>
  }
</div>
<po-table
  [p-columns]="columns"
  [p-items]="items"
  [p-search-ai-field]="searchAiField"
  (p-search-ai-result)="onAiResult($event)"
  (p-search-ai-low-confidence)="onAiLowConfidence($event)"
  (p-search-ai-error)="onAiError($event)"
>
</po-table>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild } from '@angular/core';

import {
  PoFilterChipSelectedChange,
  PoNotificationService,
  PoSearchAiError,
  PoSearchAiResult,
  PoTableColumn,
  PoTableComponent,
  PoTableSearchAiField
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-search-ai',
  templateUrl: './sample-po-table-search-ai.component.html',
  standalone: false
})
export class SamplePoTableSearchAiComponent {
  @ViewChild(PoTableComponent) table: PoTableComponent;

  selectedSuggestion: string;
  suggestionsLocked = false;

  readonly examples: Array<string> = [
    'sal\xE1rio acima de 15000',
    'funcion\xE1rios de Curitiba',
    'departamento Engenharia com sal\xE1rio acima de 10000',
    'admitidos depois de 2020',
    'com menos de 30 anos',
    'de S\xE3o Paulo com sal\xE1rio abaixo de 15000',
    'departamento Design',
    'sal\xE1rio entre 8000 e 12000'
  ];

  AI_URL = 'https://po-sample-api.onrender.com/v1/ai/filter';
  readonly columns: Array<PoTableColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade' },
    { property: 'department', label: 'Departamento' },
    { property: 'salary', label: 'Sal\xE1rio', type: 'currency', format: 'BRL' },
    { property: 'hireDate', label: 'Admiss\xE3o', type: 'date' }
  ];

  readonly items: Array<any> = [
    { name: 'Tony Stark', age: 34, city: 'S\xE3o Paulo', department: 'Engenharia', salary: 12000, hireDate: '2019-03-15' },
    { name: 'Rachel Green', age: 28, city: 'Curitiba', department: 'Design', salary: 8500, hireDate: '2021-07-01' },
    { name: 'Michael Scott', age: 42, city: 'S\xE3o Paulo', department: 'Gest\xE3o', salary: 18000, hireDate: '2015-11-20' },
    {
      name: 'Hermione Granger',
      age: 25,
      city: 'Recife',
      department: 'Engenharia',
      salary: 7200,
      hireDate: '2023-01-10'
    },
    {
      name: 'Walter White',
      age: 30,
      city: 'Belo Horizonte',
      department: 'Design',
      salary: 9500,
      hireDate: '2020-05-18'
    },
    {
      name: 'Monica Geller',
      age: 38,
      city: 'Rio de Janeiro',
      department: 'Gest\xE3o',
      salary: 15000,
      hireDate: '2017-09-03'
    },
    {
      name: 'Peter Parker',
      age: 27,
      city: 'S\xE3o Paulo',
      department: 'Engenharia',
      salary: 10000,
      hireDate: '2022-04-12'
    },
    {
      name: 'Daenerys Targaryen',
      age: 45,
      city: 'Curitiba',
      department: 'Engenharia',
      salary: 21000,
      hireDate: '2012-06-30'
    }
  ];

  readonly searchAiField: PoTableSearchAiField = {
    url: this.AI_URL,
    placeholder: 'Ex: engenheiros de S\xE3o Paulo com sal\xE1rio acima de 10000'
  };

  private readonly SUGGESTION_LOCK_TIME = 3000;
  private lockTimeout: ReturnType<typeof setTimeout>;

  constructor(private poNotification: PoNotificationService) {}

  applySuggestion(query: string): void {
    this.table.updateSearchAIQuery(query, true);
  }

  onSuggestionChange(query: string, event: PoFilterChipSelectedChange): void {
    if (!event.selected || this.suggestionsLocked) {
      return;
    }

    this.selectedSuggestion = query;
    this.applySuggestion(query);
    this.lockSuggestions();
  }

  onAiResult(result: PoSearchAiResult): void {
    this.poNotification.success(\`Busca conclu\xEDda para "\${result.query}".\`);
  }

  onAiLowConfidence(result: PoSearchAiResult): void {
    this.poNotification.warning(
      \`Baixa confian\xE7a (\${Math.round((result.confidence ?? 0) * 100)}%): verifique se o resultado reflete a busca por "\${result.query}".\`
    );
  }

  onAiError(error: PoSearchAiError): void {
    this.poNotification.error(\`Erro \${error.statusCode}: \${error.message}\`);
  }

  private lockSuggestions(): void {
    this.suggestionsLocked = true;
    clearTimeout(this.lockTimeout);
    this.lockTimeout = setTimeout(() => {
      this.suggestionsLocked = false;
    }, this.SUGGESTION_LOCK_TIME);
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-table-search-ai`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,rn,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ut],encapsulation:2,changeDetection:1})}return r})();var bt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5488,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`tableColumnIcon`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`]],template:function(l,a){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-table`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoTableComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),Zg(),Jc(15,`p`),Tk(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Jc(17,`strong`),Tk(18,`Carregar mais resultados`),Zg(),Tk(19,`.`),Zg(),Jc(20,`blockquote`)(21,`p`),Tk(22,`As linhas de detalhes podem também ser customizadas através do `),Jc(23,`a`,6)(24,`code`),Tk(25,`p-table-row-template`),Zg()(),Tk(26,`.`),Zg()(),Jc(27,`blockquote`)(28,`p`),Tk(29,`As colunas podem ser customizadas através dos templates `),Jc(30,`a`,7)(31,`code`),Tk(32,`p-table-column-template`),Zg()(),Tk(33,`
e `),Jc(34,`a`,8)(35,`code`),Tk(36,`p-table-cell-template`),Zg()(),Tk(37,`.`),Zg()(),Jc(38,`p`),Tk(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),Zg(),Jc(40,`p`),Tk(41,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),Jc(42,`em`),Tk(43,`scroll`),Zg(),Tk(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),Zg(),Jc(45,`h4`),Tk(46,`Tokens customizáveis`),Zg(),Jc(47,`p`),Tk(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(49,`blockquote`)(50,`p`),Tk(51,`Para maiores informações, acesse o guia `),Jc(52,`a`,9),Tk(53,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(54,`.`),Zg()(),Jc(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),Tk(59,`Propriedade`),Zg(),Jc(60,`th`),Tk(61,`Descrição`),Zg(),Jc(62,`th`),Tk(63,`Valor Padrão`),Zg()()(),Jc(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),Tk(68,`Default Values`),Zg()(),_u(69,`td`)(70,`td`),Zg(),Jc(71,`tr`)(72,`td`)(73,`code`),Tk(74,`--font-family`),Zg()(),Jc(75,`td`),Tk(76,`Família tipográfica usada`),Zg(),Jc(77,`td`)(78,`code`),Tk(79,`var(--font-family-theme)`),Zg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--background-color`),Zg()(),Jc(84,`td`),Tk(85,`Cor de background`),Zg(),Jc(86,`td`)(87,`code`),Tk(88,`var(--color-neutral-light-00)`),Zg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Tk(92,`--color`),Zg()(),Jc(93,`td`),Tk(94,`Cor principal da table`),Zg(),Jc(95,`td`)(96,`code`),Tk(97,`var(--color-neutral-dark-95)`),Zg()()(),Jc(98,`tr`)(99,`td`)(100,`code`),Tk(101,`--background-striped-color`),Zg()(),Jc(102,`td`),Tk(103,`Cor do background quando striped`),Zg(),Jc(104,`td`)(105,`code`),Tk(106,`var(--color-neutral-light-05)`),Zg()()(),Jc(107,`tr`)(108,`td`)(109,`code`),Tk(110,`--color-line`),Zg()(),Jc(111,`td`),Tk(112,`Cor das linhas`),Zg(),Jc(113,`td`)(114,`code`),Tk(115,`var(--color-neutral-mid-40)`),Zg()()(),Jc(116,`tr`)(117,`td`)(118,`strong`),Tk(119,`Hover`),Zg()(),_u(120,`td`)(121,`td`),Zg(),Jc(122,`tr`)(123,`td`)(124,`code`),Tk(125,`--color-hover`),Zg()(),Jc(126,`td`),Tk(127,`Cor principal no estado hover`),Zg(),Jc(128,`td`)(129,`code`),Tk(130,`var(--color-action-hover)`),Zg()()(),Jc(131,`tr`)(132,`td`)(133,`code`),Tk(134,`--background-color-hover`),Zg()(),Jc(135,`td`),Tk(136,`Cor de background no estado hover`),Zg(),Jc(137,`td`)(138,`code`),Tk(139,`var(--color-brand-01-lighter)`),Zg()()(),Jc(140,`tr`)(141,`td`)(142,`strong`),Tk(143,`Focused`),Zg()(),_u(144,`td`)(145,`td`),Zg(),Jc(146,`tr`)(147,`td`)(148,`code`),Tk(149,`--outline-color-focused`),Zg()(),Jc(150,`td`),Tk(151,`Cor do outline do estado de focus`),Zg(),Jc(152,`td`)(153,`code`),Tk(154,`var(--color-action-focus)`),Zg()()(),Jc(155,`tr`)(156,`td`)(157,`strong`),Tk(158,`Disabled`),Zg()(),_u(159,`td`)(160,`td`),Zg(),Jc(161,`tr`)(162,`td`)(163,`code`),Tk(164,`--color-disabled`),Zg()(),Jc(165,`td`),Tk(166,`Cor principal no estado disabled`),Zg(),Jc(167,`td`)(168,`code`),Tk(169,`var(--color-neutral-mid-40)`),Zg()()(),Jc(170,`tr`)(171,`td`)(172,`strong`),Tk(173,`Headline`),Zg()(),_u(174,`td`)(175,`td`),Zg(),Jc(176,`tr`)(177,`td`)(178,`code`),Tk(179,`--background-color-headline`),Zg(),Tk(180,` \xA0`),Zg(),Jc(181,`td`),Tk(182,`Cor do cabeçalho`),Zg(),Jc(183,`td`)(184,`code`),Tk(185,`var(--color-neutral-light-10)`),Zg()()(),Jc(186,`tr`)(187,`td`)(188,`code`),Tk(189,`--font-weight-headline`),Zg()(),Jc(190,`td`),Tk(191,`Peso da fonte do cabeçalho`),Zg(),Jc(192,`td`)(193,`code`),Tk(194,`var(--font-weight-bold)`),Zg()()(),Jc(195,`tr`)(196,`td`)(197,`strong`),Tk(198,`Selected`),Zg()(),_u(199,`td`)(200,`td`),Zg(),Jc(201,`tr`)(202,`td`)(203,`code`),Tk(204,`--background-color-selected`),Zg(),Tk(205,`\xA0`),Zg(),Jc(206,`td`),Tk(207,`Cor de background no estado de selecionado`),Zg(),Jc(208,`td`)(209,`code`),Tk(210,`var(--color-brand-01-lightest)`),Zg()()(),Jc(211,`tr`)(212,`td`)(213,`strong`),Tk(214,`Actived`),Zg()(),_u(215,`td`)(216,`td`),Zg(),Jc(217,`tr`)(218,`td`)(219,`code`),Tk(220,`--color-actived`),Zg()(),Jc(221,`td`),Tk(222,`Cor do texto no estado de selecionado`),Zg(),Jc(223,`td`)(224,`code`),Tk(225,`var(--color-neutral-dark-90)`),Zg()()(),Jc(226,`tr`)(227,`td`)(228,`code`),Tk(229,`--background-color-actived`),Zg()(),Jc(230,`td`),Tk(231,`Cor de background no estado de selecionado`),Zg(),Jc(232,`td`)(233,`code`),Tk(234,`var(--color-brand-01-light)`),Zg()()()()()(),Jc(235,`div`,10)(236,`h4`,11),Tk(237,`Seletor`),Zg(),Jc(238,`pre`,12),Tk(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-fixed-columns)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    (p-search-ai-error)="EventEmitter"
    p-search-ai-field="PoTableSearchAiField"
    (p-search-ai-low-confidence)="EventEmitter"
    (p-search-ai-result)="EventEmitter"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="string"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),Zg()(),Jc(240,`h4`,13),Tk(241,`Propriedades`),Zg(),Jc(242,`table`,14)(243,`tr`,15)(244,`th`,16),Tk(245,`Nome`),Zg(),Jc(246,`th`,16),Tk(247,`Tipo`),Zg(),Jc(248,`th`,16),Tk(249,`Padrão`),Zg(),Jc(250,`th`,16),Tk(251,`Descrição`),Zg()(),Jc(252,`tr`,17)(253,`td`,18)(254,`div`,19)(255,`span`,20),Tk(256,` p-actions-right`),_u(257,`br`),Zg()()(),Jc(258,`td`,21)(259,`code`,22),Tk(260,`boolean`),Zg()(),Jc(261,`td`,23)(262,`p`)(263,`code`),Tk(264,`false`),Zg()()(),Jc(265,`td`,24)(266,`em`)(267,`strong`),Tk(268,`(opcional)`),Zg()(),Jc(269,`p`),Tk(270,`Define que a coluna de ações ficará no lado direito da tabela.`),Zg()()(),Jc(271,`tr`,17)(272,`td`,18)(273,`div`,19)(274,`span`,20),Tk(275,` p-actions`),_u(276,`br`),Zg()()(),Jc(277,`td`,21)(278,`code`,25),Tk(279,`PoTableAction[]`),Zg()(),Jc(280,`td`,23),Tk(281,`-`),Zg(),Jc(282,`td`,24)(283,`em`)(284,`strong`),Tk(285,`(opcional)`),Zg()(),Jc(286,`p`),Tk(287,`Define uma lista de ações.`),Zg(),Jc(288,`p`),Tk(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Jc(290,`a`,26)(291,`strong`),Tk(292,`an an-dots-three`),Zg()(),Tk(293,` que listará as ações ao ser clicado.`),Zg(),Jc(294,`p`)(295,`strong`),Tk(296,`A coluna de ações não será exibida quando:`),Zg()(),Jc(297,`ul`)(298,`li`),Tk(299,`a lista conter valores inválidos ou indefinidos.`),Zg(),Jc(300,`li`),Tk(301,`tenha uma única ação e a mesma não for visível.`),Zg()()()(),Jc(302,`tr`,17)(303,`td`,18)(304,`div`,27)(305,`span`,28),Tk(306,` (p-all-selected)`),_u(307,`br`),Zg()()(),Jc(308,`td`,21)(309,`code`,29),Tk(310,`EventEmitter`),Zg()(),Jc(311,`td`,23),Tk(312,`-`),Zg(),Jc(313,`td`,24)(314,`em`)(315,`strong`),Tk(316,`(opcional)`),Zg()(),Jc(317,`p`),Tk(318,`Evento executado quando todas as linhas são selecionadas por meio do `),Jc(319,`em`),Tk(320,`checkbox`),Zg(),Tk(321,` que seleciona todas as linhas.`),Zg()()(),Jc(322,`tr`,17)(323,`td`,18)(324,`div`,27)(325,`span`,28),Tk(326,` (p-all-unselected)`),_u(327,`br`),Zg()()(),Jc(328,`td`,21)(329,`code`,29),Tk(330,`EventEmitter`),Zg()(),Jc(331,`td`,23),Tk(332,`-`),Zg(),Jc(333,`td`,24)(334,`em`)(335,`strong`),Tk(336,`(opcional)`),Zg()(),Jc(337,`p`),Tk(338,`Evento executado quando a seleção das linhas é desmarcada por meio do `),Jc(339,`em`),Tk(340,`checkbox`),Zg(),Tk(341,` que seleciona todas as linhas.`),Zg()()(),Jc(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),Tk(346,` p-auto-collapse`),_u(347,`br`),Zg()()(),Jc(348,`td`,21)(349,`code`,22),Tk(350,`boolean`),Zg()(),Jc(351,`td`,23)(352,`p`)(353,`code`),Tk(354,`false`),Zg()()(),Jc(355,`td`,24)(356,`em`)(357,`strong`),Tk(358,`(opcional)`),Zg()(),Jc(359,`p`),Tk(360,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),Zg()()(),Jc(361,`tr`,17)(362,`td`,18)(363,`div`,27)(364,`span`,28),Tk(365,` (p-change-fixed-columns)`),_u(366,`br`),Zg()()(),Jc(367,`td`,21)(368,`code`,29),Tk(369,`EventEmitter`),Zg()(),Jc(370,`td`,23),Tk(371,`-`),Zg(),Jc(372,`td`,24)(373,`em`)(374,`strong`),Tk(375,`(opcional)`),Zg()(),Jc(376,`p`),Tk(377,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),Zg(),Jc(378,`p`),Tk(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),Zg(),Jc(380,`blockquote`)(381,`p`),Tk(382,`Incompatível com `),Jc(383,`code`),Tk(384,`p-hide-action-fixed-columns`),Zg(),Tk(385,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),Zg()()()(),Jc(386,`tr`,17)(387,`td`,18)(388,`div`,27)(389,`span`,28),Tk(390,` (p-change-visible-columns)`),_u(391,`br`),Zg()()(),Jc(392,`td`,21)(393,`code`,29),Tk(394,`EventEmitter`),Zg()(),Jc(395,`td`,23),Tk(396,`-`),Zg(),Jc(397,`td`,24)(398,`em`)(399,`strong`),Tk(400,`(opcional)`),Zg()(),Jc(401,`p`),Tk(402,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),Zg(),Jc(403,`p`),Tk(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg()()(),Jc(405,`tr`,17)(406,`td`,18)(407,`div`,27)(408,`span`,28),Tk(409,` (p-collapsed)`),_u(410,`br`),Zg()()(),Jc(411,`td`,21)(412,`code`,29),Tk(413,`EventEmitter`),Zg()(),Jc(414,`td`,23),Tk(415,`-`),Zg(),Jc(416,`td`,24)(417,`em`)(418,`strong`),Tk(419,`(opcional)`),Zg()(),Jc(420,`p`),Tk(421,`Evento executado ao colapsar uma linha do `),Jc(422,`code`),Tk(423,`po-table`),Zg(),Tk(424,`.`),Zg(),Jc(425,`blockquote`)(426,`p`),Tk(427,`Como parâmetro o componente envia o item colapsado.`),Zg()()()(),Jc(428,`tr`,17)(429,`td`,18)(430,`div`,27)(431,`span`,28),Tk(432,` (p-restore-column-manager)`),_u(433,`br`),Zg()()(),Jc(434,`td`,21)(435,`code`,29),Tk(436,`EventEmitter`),Zg()(),Jc(437,`td`,23),Tk(438,`-`),Zg(),Jc(439,`td`,24)(440,`em`)(441,`strong`),Tk(442,`(opcional)`),Zg()(),Jc(443,`p`),Tk(444,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Zg(),Jc(445,`p`),Tk(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg()()(),Jc(447,`tr`,17)(448,`td`,18)(449,`div`,19)(450,`span`,20),Tk(451,` p-columns`),_u(452,`br`),Zg()()(),Jc(453,`td`,21)(454,`code`,30),Tk(455,`PoTableColumn[]`),Zg()(),Jc(456,`td`,23),Tk(457,`-`),Zg(),Jc(458,`td`,24)(459,`em`)(460,`strong`),Tk(461,`(opcional)`),Zg()(),Jc(462,`p`),Tk(463,`Lista das colunas da tabela, deve receber um `),Jc(464,`em`),Tk(465,`array`),Zg(),Tk(466,` de objetos que implementam a interface `),Jc(467,`code`),Tk(468,`PoTableColumn`),Zg(),Tk(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),Zg(),Jc(470,`blockquote`)(471,`p`),Tk(472,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),Zg()()()(),Jc(473,`tr`,17)(474,`td`,18)(475,`div`,19)(476,`span`,20),Tk(477,` p-components-size`),_u(478,`br`),Zg()()(),Jc(479,`td`,21)(480,`code`,31),Tk(481,`string`),Zg()(),Jc(482,`td`,23)(483,`p`)(484,`code`),Tk(485,`medium`),Zg()()(),Jc(486,`td`,24)(487,`em`)(488,`strong`),Tk(489,`(opcional)`),Zg()(),Jc(490,`p`),Tk(491,`Define o tamanho dos componentes de formulário no table:`),Zg(),Jc(492,`ul`)(493,`li`)(494,`code`),Tk(495,`small`),Zg(),Tk(496,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(497,`li`)(498,`code`),Tk(499,`medium`),Zg(),Tk(500,`: aplica a medida medium de cada componente.`),Zg()(),Jc(501,`blockquote`)(502,`p`),Tk(503,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(504,`code`),Tk(505,`medium`),Zg(),Tk(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(507,`a`,32),Tk(508,`po-theme`),Zg(),Tk(509,`.`),Zg()()()(),Jc(510,`tr`,17)(511,`td`,18)(512,`div`,19)(513,`span`,20),Tk(514,` p-container`),_u(515,`br`),Zg()()(),Jc(516,`td`,21)(517,`code`,31),Tk(518,`string`),Zg()(),Jc(519,`td`,23)(520,`p`)(521,`code`),Tk(522,`border`),Zg()()(),Jc(523,`td`,24)(524,`em`)(525,`strong`),Tk(526,`(opcional)`),Zg()(),Jc(527,`p`),Tk(528,`Adiciona um contorno arredondado ao `),Jc(529,`code`),Tk(530,`po-table`),Zg(),Tk(531,`, as opções são:`),Zg(),Jc(532,`ul`)(533,`li`)(534,`code`),Tk(535,`border`),Zg(),Tk(536,`: com bordas/linhas.`),Zg(),Jc(537,`li`)(538,`code`),Tk(539,`shadow`),Zg(),Tk(540,`: com sombras.`),Zg()()()(),Jc(541,`tr`,17)(542,`td`,18)(543,`div`,19)(544,`span`,20),Tk(545,` p-draggable`),_u(546,`br`),Zg()()(),Jc(547,`td`,21)(548,`code`,22),Tk(549,`boolean`),Zg()(),Jc(550,`td`,23)(551,`p`)(552,`code`),Tk(553,`false`),Zg()()(),Jc(554,`td`,24)(555,`em`)(556,`strong`),Tk(557,`(opcional)`),Zg()(),Jc(558,`p`),Tk(559,`Habilita o modo drag and drop para as colunas da tabela.`),Zg()()(),Jc(560,`tr`,17)(561,`td`,18)(562,`div`,27)(563,`span`,28),Tk(564,` (p-delete-items)`),_u(565,`br`),Zg()()(),Jc(566,`td`,21)(567,`code`,29),Tk(568,`EventEmitter`),Zg()(),Jc(569,`td`,23),Tk(570,`-`),Zg(),Jc(571,`td`,24)(572,`em`)(573,`strong`),Tk(574,`(opcional)`),Zg()(),Jc(575,`p`),Tk(576,`Evento executado após o método de exclusão ser finalizado.`),Zg(),Jc(577,`pre`)(578,`code`),Tk(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),Zg()(),Jc(580,`blockquote`)(581,`p`),Tk(582,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),Zg()()()(),Jc(583,`tr`,17)(584,`td`,18)(585,`div`,27)(586,`span`,28),Tk(587,` (p-expanded)`),_u(588,`br`),Zg()()(),Jc(589,`td`,21)(590,`code`,29),Tk(591,`EventEmitter`),Zg()(),Jc(592,`td`,23),Tk(593,`-`),Zg(),Jc(594,`td`,24)(595,`em`)(596,`strong`),Tk(597,`(opcional)`),Zg()(),Jc(598,`p`),Tk(599,`Evento executado ao expandir uma linha do `),Jc(600,`code`),Tk(601,`po-table`),Zg(),Tk(602,`.`),Zg(),Jc(603,`blockquote`)(604,`p`),Tk(605,`Como parâmetro o componente envia o item expandido.`),Zg()()()(),Jc(606,`tr`,17)(607,`td`,18)(608,`div`,19)(609,`span`,20),Tk(610,` p-filter-type`),_u(611,`br`),Zg()()(),Jc(612,`td`,21)(613,`code`,33),Tk(614,`PoSearchFilterMode`),Zg()(),Jc(615,`td`,23)(616,`p`)(617,`code`),Tk(618,`startsWith`),Zg()()(),Jc(619,`td`,24)(620,`em`)(621,`strong`),Tk(622,`(opcional)`),Zg()(),Jc(623,`p`),Tk(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),Zg(),Jc(625,`blockquote`)(626,`p`),Tk(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),Zg()()()(),Jc(628,`tr`,17)(629,`td`,18)(630,`div`,19)(631,`span`,20),Tk(632,` p-filtered-columns`),_u(633,`br`),Zg()()(),Jc(634,`td`,21)(635,`code`,34),Tk(636,`Array<string>`),Zg()(),Jc(637,`td`,23),Tk(638,`-`),Zg(),Jc(639,`td`,24)(640,`em`)(641,`strong`),Tk(642,`(opcional)`),Zg()(),Jc(643,`p`),Tk(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),Zg()()(),Jc(645,`tr`,17)(646,`td`,18)(647,`div`,19)(648,`span`,20),Tk(649,` p-height`),_u(650,`br`),Zg()()(),Jc(651,`td`,21)(652,`code`,35),Tk(653,`number`),Zg()(),Jc(654,`td`,23),Tk(655,`-`),Zg(),Jc(656,`td`,24)(657,`em`)(658,`strong`),Tk(659,`(opcional)`),Zg()(),Jc(660,`p`),Tk(661,`Define a altura da tabela em `),Jc(662,`em`),Tk(663,`pixels`),Zg(),Tk(664,` e fixa o cabeçalho.`),Zg(),Jc(665,`p`),Tk(666,`Ao utilizar essa propriedade será inserido o `),Jc(667,`code`),Tk(668,`virtual-scroll`),Zg(),Tk(669,` na tabela melhorando a performance.`),Zg()()(),Jc(670,`tr`,17)(671,`td`,18)(672,`div`,19)(673,`span`,20),Tk(674,` p-hide-action-fixed-columns`),_u(675,`br`),Zg()()(),Jc(676,`td`,21)(677,`code`,22),Tk(678,`boolean`),Zg()(),Jc(679,`td`,23)(680,`p`)(681,`code`),Tk(682,`false`),Zg()()(),Jc(683,`td`,24)(684,`em`)(685,`strong`),Tk(686,`(opcional)`),Zg()(),Jc(687,`p`),Tk(688,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),Zg()()(),Jc(689,`tr`,17)(690,`td`,18)(691,`div`,19)(692,`span`,20),Tk(693,` p-hide-batch-actions`),_u(694,`br`),Zg()()(),Jc(695,`td`,21)(696,`code`,22),Tk(697,`boolean`),Zg()(),Jc(698,`td`,23)(699,`p`)(700,`code`),Tk(701,`true`),Zg()()(),Jc(702,`td`,24)(703,`em`)(704,`strong`),Tk(705,`(opcional)`),Zg()(),Jc(706,`p`),Tk(707,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),Zg()()(),Jc(708,`tr`,17)(709,`td`,18)(710,`div`,19)(711,`span`,20),Tk(712,` p-hide-columns-manager`),_u(713,`br`),Zg()()(),Jc(714,`td`,21)(715,`code`,22),Tk(716,`boolean`),Zg()(),Jc(717,`td`,23)(718,`p`)(719,`code`),Tk(720,`false`),Zg()()(),Jc(721,`td`,24)(722,`em`)(723,`strong`),Tk(724,`(opcional)`),Zg()(),Jc(725,`p`),Tk(726,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),Zg()()(),Jc(727,`tr`,17)(728,`td`,18)(729,`div`,19)(730,`span`,20),Tk(731,` p-hide-detail`),_u(732,`br`),Zg()()(),Jc(733,`td`,21)(734,`code`,22),Tk(735,`boolean`),Zg()(),Jc(736,`td`,23)(737,`p`)(738,`code`),Tk(739,`false`),Zg()()(),Jc(740,`td`,24)(741,`em`)(742,`strong`),Tk(743,`(opcional)`),Zg()(),Jc(744,`p`),Tk(745,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),Zg()()(),Jc(746,`tr`,17)(747,`td`,18)(748,`div`,19)(749,`span`,20),Tk(750,` p-hide-select-all`),_u(751,`br`),Zg()()(),Jc(752,`td`,21)(753,`code`,22),Tk(754,`boolean`),Zg()(),Jc(755,`td`,23)(756,`p`)(757,`code`),Tk(758,`false`),Zg()()(),Jc(759,`td`,24)(760,`p`),Tk(761,`Esconde o `),Jc(762,`em`),Tk(763,`checkbox`),Zg(),Tk(764,` para seleção de todas as linhas.`),Zg(),Jc(765,`blockquote`)(766,`p`),Tk(767,`Sempre receberá `),Jc(768,`em`),Tk(769,`true`),Zg(),Tk(770,` caso a seleção de apenas uma linha esteja ativa.`),Zg()()()(),Jc(771,`tr`,17)(772,`td`,18)(773,`div`,19)(774,`span`,20),Tk(775,` p-hide-table-search`),_u(776,`br`),Zg()()(),Jc(777,`td`,21)(778,`code`,22),Tk(779,`boolean`),Zg()(),Jc(780,`td`,23)(781,`p`)(782,`code`),Tk(783,`true`),Zg()()(),Jc(784,`td`,24)(785,`em`)(786,`strong`),Tk(787,`(opcional)`),Zg()(),Jc(788,`p`),Tk(789,`Permite que o campo de pesquisa seja escondido.`),Zg()()(),Jc(790,`tr`,17)(791,`td`,18)(792,`div`,19)(793,`span`,20),Tk(794,` p-infinite-scroll`),_u(795,`br`),Zg()()(),Jc(796,`td`,21)(797,`code`,22),Tk(798,`boolean`),Zg()(),Jc(799,`td`,23)(800,`p`)(801,`code`),Tk(802,`false`),Zg()()(),Jc(803,`td`,24)(804,`em`)(805,`strong`),Tk(806,`(opcional)`),Zg()(),Jc(807,`p`),Tk(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Jc(809,`code`),Tk(810,`p-show-more`),Zg(),Tk(811,`.`),Zg(),Jc(812,`p`)(813,`strong`),Tk(814,`Regras de utilização:`),Zg()(),Jc(815,`ul`)(816,`li`),Tk(817,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),Jc(818,`code`),Tk(819,`p-height`),Zg(),Tk(820,` e que possuem o scroll já na carga inicial dos dados.`),Zg()()()(),Jc(821,`tr`,17)(822,`td`,18)(823,`div`,19)(824,`span`,20),Tk(825,` p-infinite-scroll-distance`),_u(826,`br`),Zg()()(),Jc(827,`td`,21)(828,`code`,35),Tk(829,`number`),Zg()(),Jc(830,`td`,23),Tk(831,`-`),Zg(),Jc(832,`td`,24)(833,`em`)(834,`strong`),Tk(835,`(opcional)`),Zg()(),Jc(836,`p`),Tk(837,`Define o percentual necessário para disparar o evento `),Jc(838,`code`),Tk(839,`p-show-more`),Zg(),Tk(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),Zg(),Jc(841,`p`)(842,`strong`),Tk(843,`Exemplos:`),Zg()(),Jc(844,`ul`)(845,`li`),Tk(846,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),Jc(847,`code`),Tk(848,`p-show-more`),Zg(),Tk(849,` será disparado.`),Zg()()()(),Jc(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),Tk(854,` p-items`),_u(855,`br`),Zg()()(),Jc(856,`td`,21)(857,`code`,36),Tk(858,`any[]`),Zg()(),Jc(859,`td`,23),Tk(860,`-`),Zg(),Jc(861,`td`,24)(862,`p`),Tk(863,`Lista de itens da tabela.`),Zg(),Jc(864,`blockquote`)(865,`p`),Tk(866,`Se falso, será inicializado como um `),Jc(867,`em`),Tk(868,`array`),Zg(),Tk(869,` vazio.`),Zg()()()(),Jc(870,`tr`,17)(871,`td`,18)(872,`div`,19)(873,`span`,20),Tk(874,` p-literals`),_u(875,`br`),Zg()()(),Jc(876,`td`,21)(877,`code`,37),Tk(878,`PoTableLiterals`),Zg()(),Jc(879,`td`,23),Tk(880,`-`),Zg(),Jc(881,`td`,24)(882,`em`)(883,`strong`),Tk(884,`(opcional)`),Zg()(),Jc(885,`p`),Tk(886,`Objeto com as literais usadas no `),Jc(887,`code`),Tk(888,`po-table`),Zg(),Tk(889,`.`),Zg(),Jc(890,`p`),Tk(891,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(892,`pre`)(893,`code`),Tk(894,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),Zg()(),Jc(895,`p`),Tk(896,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(897,`pre`)(898,`code`),Tk(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),Zg()(),Jc(900,`p`),Tk(901,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(902,`pre`)(903,`code`),Tk(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),Zg()(),Jc(905,`blockquote`)(906,`p`),Tk(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(908,`a`,38)(909,`code`),Tk(910,`PoI18nService`),Zg()(),Tk(911,` ou do browser.`),Zg()()()(),Jc(912,`tr`,17)(913,`td`,18)(914,`div`,19)(915,`span`,20),Tk(916,` p-loading`),_u(917,`br`),Zg()()(),Jc(918,`td`,21)(919,`code`,22),Tk(920,`boolean`),Zg()(),Jc(921,`td`,23)(922,`p`)(923,`code`),Tk(924,`false`),Zg()()(),Jc(925,`td`,24)(926,`em`)(927,`strong`),Tk(928,`(opcional)`),Zg()(),Jc(929,`p`),Tk(930,`Bloqueia a interação do usuário com os dados da `),Jc(931,`em`),Tk(932,`table`),Zg(),Tk(933,`.`),Zg()()(),Jc(934,`tr`,17)(935,`td`,18)(936,`div`,19)(937,`span`,20),Tk(938,` p-loading-show-more`),_u(939,`br`),Zg()()(),Jc(940,`td`,21)(941,`code`,22),Tk(942,`boolean`),Zg()(),Jc(943,`td`,23)(944,`p`)(945,`code`),Tk(946,`false`),Zg()()(),Jc(947,`td`,24)(948,`em`)(949,`strong`),Tk(950,`(opcional)`),Zg()(),Jc(951,`p`),Tk(952,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),Zg()()(),Jc(953,`tr`,17)(954,`td`,18)(955,`div`,19)(956,`span`,20),Tk(957,` p-max-columns`),_u(958,`br`),Zg()()(),Jc(959,`td`,21)(960,`code`,35),Tk(961,`number`),Zg()(),Jc(962,`td`,23),Tk(963,`-`),Zg(),Jc(964,`td`,24)(965,`em`)(966,`strong`),Tk(967,`(opcional)`),Zg()(),Jc(968,`p`),Tk(969,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),Zg(),Jc(970,`p`),Tk(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),Zg()()(),Jc(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),Tk(976,` p-param-delete-api`),_u(977,`br`),Zg()()(),Jc(978,`td`,21)(979,`code`,31),Tk(980,`string`),Zg()(),Jc(981,`td`,23)(982,`p`)(983,`code`),Tk(984,`id`),Zg()()(),Jc(985,`td`,24)(986,`em`)(987,`strong`),Tk(988,`(opcional)`),Zg()(),Jc(989,`p`),Tk(990,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),Zg(),Jc(991,`p`),Tk(992,`É necessário a utilização da propriedade `),Jc(993,`code`),Tk(994,`p-service-delete`),Zg(),Tk(995,` em conjunto.`),Zg()()(),Jc(996,`tr`,17)(997,`td`,18)(998,`div`,27)(999,`span`,28),Tk(1e3,` (p-search-ai-error)`),_u(1001,`br`),Zg()()(),Jc(1002,`td`,21)(1003,`code`,29),Tk(1004,`EventEmitter`),Zg()(),Jc(1005,`td`,23),Tk(1006,`-`),Zg(),Jc(1007,`td`,24)(1008,`em`)(1009,`strong`),Tk(1010,`(opcional)`),Zg()(),Jc(1011,`p`),Tk(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),Jc(1013,`code`),Tk(1014,`p-search-ai-field`),Zg(),Tk(1015,`.`),Zg(),Jc(1016,`p`),Tk(1017,`O parâmetro enviado é um objeto `),Jc(1018,`code`),Tk(1019,`PoSearchAiError`),Zg(),Tk(1020,` contendo:`),Zg(),Jc(1021,`ul`)(1022,`li`)(1023,`code`),Tk(1024,`statusCode`),Zg(),Tk(1025,`: código HTTP do erro (ex: `),Jc(1026,`code`),Tk(1027,`408`),Zg(),Tk(1028,` para timeout, `),Jc(1029,`code`),Tk(1030,`500`),Zg(),Tk(1031,` para erro interno).`),Zg(),Jc(1032,`li`)(1033,`code`),Tk(1034,`message`),Zg(),Tk(1035,`: mensagem descritiva do erro.`),Zg()()()(),Jc(1036,`tr`,17)(1037,`td`,18)(1038,`div`,19)(1039,`span`,20),Tk(1040,` p-search-ai-field`),_u(1041,`br`),Zg()()(),Jc(1042,`td`,21)(1043,`code`,39),Tk(1044,`PoTableSearchAiField`),Zg()(),Jc(1045,`td`,23),Tk(1046,`-`),Zg(),Jc(1047,`td`,24)(1048,`em`)(1049,`strong`),Tk(1050,`(opcional)`),Zg()(),Jc(1051,`p`),Tk(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),Jc(1053,`code`),Tk(1054,`po-search`),Zg(),Tk(1055,`) pelo componente `),Jc(1056,`code`),Tk(1057,`po-search-ai`),Zg(),Tk(1058,` na barra de ações.`),Zg(),Jc(1059,`p`),Tk(1060,`Recebe um objeto do tipo `),Jc(1061,`code`),Tk(1062,`PoTableSearchAiField`),Zg(),Tk(1063,` com as configurações necessárias:`),Zg(),Jc(1064,`ul`)(1065,`li`)(1066,`code`),Tk(1067,`url`),Zg(),Jc(1068,`em`),Tk(1069,`(obrigatório)`),Zg(),Tk(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),Jc(1071,`a`,40)(1072,`code`),Tk(1073,`po-sample-api`),Zg()(),Tk(1074,`.`),Zg(),Jc(1075,`li`)(1076,`code`),Tk(1077,`columns`),Zg(),Tk(1078,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),Jc(1079,`code`),Tk(1080,`p-columns`),Zg(),Tk(1081,`.`),Zg(),Jc(1082,`li`)(1083,`code`),Tk(1084,`minConfidence`),Zg(),Tk(1085,`: confiança mínima para aplicação automática do filtro (padrão `),Jc(1086,`code`),Tk(1087,`0.5`),Zg(),Tk(1088,`).`),Zg(),Jc(1089,`li`)(1090,`code`),Tk(1091,`timeout`),Zg(),Tk(1092,`: tempo máximo de espera pela resposta da IA em ms (padrão `),Jc(1093,`code`),Tk(1094,`10000`),Zg(),Tk(1095,`).`),Zg(),Jc(1096,`li`)(1097,`code`),Tk(1098,`placeholder`),Zg(),Tk(1099,`: texto exibido como placeholder no campo.`),Zg(),Jc(1100,`li`)(1101,`code`),Tk(1102,`literals`),Zg(),Tk(1103,`: literais customizadas do `),Jc(1104,`code`),Tk(1105,`po-search-ai`),Zg(),Tk(1106,`.`),Zg(),Jc(1107,`li`)(1108,`code`),Tk(1109,`apply`),Zg(),Tk(1110,`: estratégia de aplicação do filtro — `),Jc(1111,`code`),Tk(1112,`'auto'`),Zg(),Tk(1113,` (padrão), `),Jc(1114,`code`),Tk(1115,`'parser'`),Zg(),Tk(1116,`, `),Jc(1117,`code`),Tk(1118,`'server'`),Zg(),Tk(1119,`, `),Jc(1120,`code`),Tk(1121,`'none'`),Zg(),Tk(1122,`
ou uma fun\xE7\xE3o `),Jc(1123,`code`),Tk(1124,`(result: PoSearchAiResult) => void`),Zg(),Tk(1125,`.`),Zg()(),Jc(1126,`p`),Tk(1127,`Quando esta propriedade está definida, os eventos `),Jc(1128,`code`),Tk(1129,`p-search-ai-result`),Zg(),Tk(1130,`, `),Jc(1131,`code`),Tk(1132,`p-search-ai-low-confidence`),Zg(),Tk(1133,`
e `),Jc(1134,`code`),Tk(1135,`p-search-ai-error`),Zg(),Tk(1136,` ficam disponíveis para tratamento customizado.`),Zg()()(),Jc(1137,`tr`,17)(1138,`td`,18)(1139,`div`,27)(1140,`span`,28),Tk(1141,` (p-search-ai-low-confidence)`),_u(1142,`br`),Zg()()(),Jc(1143,`td`,21)(1144,`code`,29),Tk(1145,`EventEmitter`),Zg()(),Jc(1146,`td`,23),Tk(1147,`-`),Zg(),Jc(1148,`td`,24)(1149,`em`)(1150,`strong`),Tk(1151,`(opcional)`),Zg()(),Jc(1152,`p`),Tk(1153,`Evento emitido quando o `),Jc(1154,`code`),Tk(1155,`po-search-ai`),Zg(),Tk(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),Jc(1157,`code`),Tk(1158,`minConfidence`),Zg(),Tk(1159,` configurado em `),Jc(1160,`code`),Tk(1161,`p-search-ai-field`),Zg(),Tk(1162,`. Nesse caso, o filtro `),Jc(1163,`strong`),Tk(1164,`não`),Zg(),Tk(1165,` \xE9 aplicado
automaticamente.`),Zg(),Jc(1166,`p`),Tk(1167,`O parâmetro enviado é um objeto `),Jc(1168,`code`),Tk(1169,`PoSearchAiResult`),Zg(),Tk(1170,` com os mesmos campos de `),Jc(1171,`code`),Tk(1172,`p-search-ai-result`),Zg(),Tk(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),Zg()()(),Jc(1174,`tr`,17)(1175,`td`,18)(1176,`div`,27)(1177,`span`,28),Tk(1178,` (p-search-ai-result)`),_u(1179,`br`),Zg()()(),Jc(1180,`td`,21)(1181,`code`,29),Tk(1182,`EventEmitter`),Zg()(),Jc(1183,`td`,23),Tk(1184,`-`),Zg(),Jc(1185,`td`,24)(1186,`em`)(1187,`strong`),Tk(1188,`(opcional)`),Zg()(),Jc(1189,`p`),Tk(1190,`Evento emitido quando o `),Jc(1191,`code`),Tk(1192,`po-search-ai`),Zg(),Tk(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),Jc(1194,`code`),Tk(1195,`minConfidence`),Zg(),Tk(1196,` configurado em `),Jc(1197,`code`),Tk(1198,`p-search-ai-field`),Zg(),Tk(1199,`.`),Zg(),Jc(1200,`p`),Tk(1201,`O parâmetro enviado é um objeto `),Jc(1202,`code`),Tk(1203,`PoSearchAiResult`),Zg(),Tk(1204,` contendo:`),Zg(),Jc(1205,`ul`)(1206,`li`)(1207,`code`),Tk(1208,`filter`),Zg(),Tk(1209,`: string de filtro OData v4 gerada pela IA (ex: `),Jc(1210,`code`),Tk(1211,`"city eq 'SP' and salary gt 5000"`),Zg(),Tk(1212,`).`),Zg(),Jc(1213,`li`)(1214,`code`),Tk(1215,`description`),Zg(),Tk(1216,`: descrição em linguagem natural do filtro aplicado.`),Zg(),Jc(1217,`li`)(1218,`code`),Tk(1219,`confidence`),Zg(),Tk(1220,`: nível de confiança da resposta (0.0 a 1.0).`),Zg()(),Jc(1221,`blockquote`)(1222,`p`),Tk(1223,`Quando `),Jc(1224,`code`),Tk(1225,`apply`),Zg(),Tk(1226,` for diferente de `),Jc(1227,`code`),Tk(1228,`'none'`),Zg(),Tk(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),Zg()()()(),Jc(1230,`tr`,17)(1231,`td`,18)(1232,`div`,19)(1233,`span`,20),Tk(1234,` p-selectable`),_u(1235,`br`),Zg()()(),Jc(1236,`td`,21)(1237,`code`,22),Tk(1238,`boolean`),Zg()(),Jc(1239,`td`,23)(1240,`p`)(1241,`code`),Tk(1242,`false`),Zg()()(),Jc(1243,`td`,24)(1244,`em`)(1245,`strong`),Tk(1246,`(opcional)`),Zg()(),Jc(1247,`p`),Tk(1248,`Permite a seleção de linhas na tabela e, caso a propriedade `),Jc(1249,`code`),Tk(1250,`p-single-select`),Zg(),Tk(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),Zg(),Jc(1252,`p`)(1253,`strong`),Tk(1254,`Importante:`),Zg()(),Jc(1255,`ul`)(1256,`li`),Tk(1257,`As linhas de detalhe definidas em `),Jc(1258,`code`),Tk(1259,`PoTableDetail`),Zg(),Tk(1260,` possuem comportamento independente da linha mestre;`),Zg(),Jc(1261,`li`),Tk(1262,`Cada linha possui por padrão a propriedade dinâmica `),Jc(1263,`code`),Tk(1264,`$selected`),Zg(),Tk(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Jc(1266,`code`),Tk(1267,`item.$selected`),Zg(),Tk(1268,` ou `),Jc(1269,`code`),Tk(1270,`item['$selected']`),Zg(),Tk(1271,`.`),Zg()()()(),Jc(1272,`tr`,17)(1273,`td`,18)(1274,`div`,19)(1275,`span`,20),Tk(1276,` p-selectable-entire-line`),_u(1277,`br`),Zg()()(),Jc(1278,`td`,21)(1279,`code`,22),Tk(1280,`boolean`),Zg()(),Jc(1281,`td`,23)(1282,`p`)(1283,`code`),Tk(1284,`true`),Zg()()(),Jc(1285,`td`,24)(1286,`p`),Tk(1287,`Permite selecionar um item da tabela clicando na linha.`),Zg(),Jc(1288,`blockquote`)(1289,`p`),Tk(1290,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),Jc(1291,`code`),Tk(1292,`false`),Zg(),Tk(1293,`.`),Zg()()()(),Jc(1294,`tr`,17)(1295,`td`,18)(1296,`div`,27)(1297,`span`,28),Tk(1298,` (p-selected)`),_u(1299,`br`),Zg()()(),Jc(1300,`td`,21)(1301,`code`,29),Tk(1302,`EventEmitter`),Zg()(),Jc(1303,`td`,23),Tk(1304,`-`),Zg(),Jc(1305,`td`,24)(1306,`em`)(1307,`strong`),Tk(1308,`(opcional)`),Zg()(),Jc(1309,`p`),Tk(1310,`Evento executado ao selecionar uma linha do `),Jc(1311,`code`),Tk(1312,`po-table`),Zg(),Tk(1313,`.`),Zg()()(),Jc(1314,`tr`,17)(1315,`td`,18)(1316,`div`,19)(1317,`span`,20),Tk(1318,` p-service-api`),_u(1319,`br`),Zg()()(),Jc(1320,`td`,21)(1321,`code`,31),Tk(1322,`string`),Zg()(),Jc(1323,`td`,23),Tk(1324,`-`),Zg(),Jc(1325,`td`,24)(1326,`em`)(1327,`strong`),Tk(1328,`(opcional)`),Zg()(),Jc(1329,`p`),Tk(1330,`URL da API responsável por retornar os registros.`),Zg(),Jc(1331,`p`),Tk(1332,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),Jc(1333,`code`),Tk(1334,`page`),Zg(),Tk(1335,` e `),Jc(1336,`code`),Tk(1337,`pageSize`),Zg(),Tk(1338,`, conforme abaixo:`),Zg(),Jc(1339,`pre`)(1340,`code`),Tk(1341,`url + ?page=1&pageSize=10
`),Zg()(),Jc(1342,`p`),Tk(1343,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Jc(1344,`code`),Tk(1345,`order`),Zg(),Tk(1346,`, por exemplo:`),Zg(),Jc(1347,`ul`)(1348,`li`)(1349,`p`),Tk(1350,`Coluna decrescente:`),Zg(),Jc(1351,`pre`)(1352,`code`),Tk(1353,`url + ?page=1&pageSize=10&order=-name
`),Zg()()(),Jc(1354,`li`)(1355,`p`),Tk(1356,`Coluna ascendente:`),Zg(),Jc(1357,`pre`)(1358,`code`),Tk(1359,`url + ?page=1&pageSize=10&order=name
`),Zg()()()(),Jc(1360,`blockquote`)(1361,`p`),Tk(1362,`Esta URL deve retornar e receber os dados no padrão de `),Jc(1363,`a`,41),Tk(1364,`API do PO UI`),Zg(),Tk(1365,`.`),Zg()()()(),Jc(1366,`tr`,17)(1367,`td`,18)(1368,`div`,19)(1369,`span`,20),Tk(1370,` p-service-delete`),_u(1371,`br`),Zg()()(),Jc(1372,`td`,21)(1373,`code`,31),Tk(1374,`string`),Zg()(),Jc(1375,`td`,23),Tk(1376,`-`),Zg(),Jc(1377,`td`,24)(1378,`em`)(1379,`strong`),Tk(1380,`(opcional)`),Zg()(),Jc(1381,`p`),Tk(1382,`URL da API responsável por excluir os registros.`),Zg(),Jc(1383,`p`),Tk(1384,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),Jc(1385,`code`),Tk(1386,`p-param-delete-api`),Zg(),Tk(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Jc(1388,`code`),Tk(1389,`id`),Zg(),Tk(1390,`.`),Zg(),Jc(1391,`blockquote`)(1392,`p`),Tk(1393,`Esta URL deve retornar e receber os dados no padrão de `),Jc(1394,`a`,41),Tk(1395,`API do PO UI`),Zg(),Tk(1396,`.`),Zg()()()(),Jc(1397,`tr`,17)(1398,`td`,18)(1399,`div`,27)(1400,`span`,28),Tk(1401,` (p-show-more)`),_u(1402,`br`),Zg()()(),Jc(1403,`td`,21)(1404,`code`,29),Tk(1405,`EventEmitter`),Zg()(),Jc(1406,`td`,23),Tk(1407,`-`),Zg(),Jc(1408,`td`,24)(1409,`em`)(1410,`strong`),Tk(1411,`(opcional)`),Zg()(),Jc(1412,`p`),Tk(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),Zg(),Jc(1414,`p`),Tk(1415,`Recebe um objeto `),Jc(1416,`code`),Tk(1417,`{ column, type }`),Zg(),Tk(1418,` onde:`),Zg(),Jc(1419,`ul`)(1420,`li`),Tk(1421,`column (`),Jc(1422,`code`),Tk(1423,`PoTableColumn`),Zg(),Tk(1424,`): objeto da coluna que está ordenada.`),Zg(),Jc(1425,`li`),Tk(1426,`type (`),Jc(1427,`code`),Tk(1428,`PoTableColumnSortType`),Zg(),Tk(1429,`): tipo da ordenação.`),Zg()()()(),Jc(1430,`tr`,17)(1431,`td`,18)(1432,`div`,19)(1433,`span`,20),Tk(1434,` p-show-more-disabled`),_u(1435,`br`),Zg()()(),Jc(1436,`td`,21)(1437,`code`,22),Tk(1438,`boolean`),Zg()(),Jc(1439,`td`,23)(1440,`p`)(1441,`code`),Tk(1442,`false`),Zg()()(),Jc(1443,`td`,24)(1444,`p`),Tk(1445,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),Zg()()(),Jc(1446,`tr`,17)(1447,`td`,18)(1448,`div`,19)(1449,`span`,20),Tk(1450,` p-single-select`),_u(1451,`br`),Zg()()(),Jc(1452,`td`,21)(1453,`code`,22),Tk(1454,`boolean`),Zg()(),Jc(1455,`td`,23),Tk(1456,`-`),Zg(),Jc(1457,`td`,24)(1458,`p`),Tk(1459,`Define que somente uma linha da tabela pode ser selecionada.`),Zg(),Jc(1460,`blockquote`)(1461,`p`),Tk(1462,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),Zg()()()(),Jc(1463,`tr`,17)(1464,`td`,18)(1465,`div`,19)(1466,`span`,20),Tk(1467,` p-sort`),_u(1468,`br`),Zg()()(),Jc(1469,`td`,21)(1470,`code`,22),Tk(1471,`boolean`),Zg()(),Jc(1472,`td`,23)(1473,`p`)(1474,`code`),Tk(1475,`false`),Zg()()(),Jc(1476,`td`,24)(1477,`em`)(1478,`strong`),Tk(1479,`(opcional)`),Zg()(),Jc(1480,`p`),Tk(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),Zg()()(),Jc(1482,`tr`,17)(1483,`td`,18)(1484,`div`,27)(1485,`span`,28),Tk(1486,` (p-sort-by)`),_u(1487,`br`),Zg()()(),Jc(1488,`td`,21)(1489,`code`,29),Tk(1490,`EventEmitter`),Zg()(),Jc(1491,`td`,23),Tk(1492,`-`),Zg(),Jc(1493,`td`,24)(1494,`em`)(1495,`strong`),Tk(1496,`(opcional)`),Zg()(),Jc(1497,`p`),Tk(1498,`Evento executado ao ordenar colunas da tabela.`),Zg(),Jc(1499,`p`),Tk(1500,`Recebe um objeto `),Jc(1501,`code`),Tk(1502,`{ column, type }`),Zg(),Tk(1503,` onde:`),Zg(),Jc(1504,`ul`)(1505,`li`),Tk(1506,`column (`),Jc(1507,`code`),Tk(1508,`PoTableColumn`),Zg(),Tk(1509,`): objeto da coluna que foi clicada/ordenada.`),Zg(),Jc(1510,`li`),Tk(1511,`type (`),Jc(1512,`code`),Tk(1513,`PoTableColumnSortType`),Zg(),Tk(1514,`): tipo da ordenação.`),Zg()()()(),Jc(1515,`tr`,17)(1516,`td`,18)(1517,`div`,19)(1518,`span`,20),Tk(1519,` p-spacing`),_u(1520,`br`),Zg()()(),Jc(1521,`td`,21)(1522,`code`,31),Tk(1523,`string`),Zg()(),Jc(1524,`td`,23)(1525,`p`)(1526,`code`),Tk(1527,`medium`),Zg()()(),Jc(1528,`td`,24)(1529,`em`)(1530,`strong`),Tk(1531,`(opcional)`),Zg()(),Jc(1532,`p`),Tk(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Jc(1534,`strong`),Tk(1535,`PoTableColumnSpacing`),Zg(),Tk(1536,`.`),Zg(),Jc(1537,`blockquote`)(1538,`p`),Tk(1539,`Em nível de acessibilidade `),Jc(1540,`strong`),Tk(1541,`AA`),Zg(),Tk(1542,`, caso o valor de `),Jc(1543,`code`),Tk(1544,`p-spacing`),Zg(),Tk(1545,` não seja definido, o valor padrão será `),Jc(1546,`code`),Tk(1547,`extraSmall`),Zg(),Tk(1548,`
nos seguintes cen\xE1rios:`),Zg(),Jc(1549,`ul`)(1550,`li`),Tk(1551,`Quando o valor de `),Jc(1552,`code`),Tk(1553,`p-components-size`),Zg(),Tk(1554,` for `),Jc(1555,`code`),Tk(1556,`small`),Zg(),Tk(1557,`;`),Zg(),Jc(1558,`li`),Tk(1559,`Quando o valor padrão dos componentes for configurado como `),Jc(1560,`code`),Tk(1561,`small`),Zg(),Tk(1562,` no
`),Jc(1563,`a`,32),Tk(1564,`serviço de tema`),Zg(),Tk(1565,`.`),Zg()()()()(),Jc(1566,`tr`,17)(1567,`td`,18)(1568,`div`,19)(1569,`span`,20),Tk(1570,` p-striped`),_u(1571,`br`),Zg()()(),Jc(1572,`td`,21)(1573,`code`,22),Tk(1574,`boolean`),Zg()(),Jc(1575,`td`,23)(1576,`p`)(1577,`code`),Tk(1578,`false`),Zg()()(),Jc(1579,`td`,24)(1580,`p`),Tk(1581,`Habilita ou desabilita o estilo listrado da tabela (`),Jc(1582,`code`),Tk(1583,`striped`),Zg(),Tk(1584,`).`),Zg(),Jc(1585,`blockquote`)(1586,`p`),Tk(1587,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),Zg()()()(),Jc(1588,`tr`,17)(1589,`td`,18)(1590,`div`,19)(1591,`span`,20),Tk(1592,` p-text-wrap`),_u(1593,`br`),Zg()()(),Jc(1594,`td`,21)(1595,`code`,22),Tk(1596,`boolean`),Zg()(),Jc(1597,`td`,23)(1598,`p`)(1599,`code`),Tk(1600,`false`),Zg()()(),Jc(1601,`td`,24)(1602,`em`)(1603,`strong`),Tk(1604,`(opcional)`),Zg()(),Jc(1605,`p`),Tk(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg(),Jc(1607,`blockquote`)(1608,`p`),Tk(1609,`Incompatível com `),Jc(1610,`code`),Tk(1611,`virtual-scroll`),Zg(),Tk(1612,`, que requer altura fixa nas linhas.`),Zg()()()(),Jc(1613,`tr`,17)(1614,`td`,18)(1615,`div`,27)(1616,`span`,28),Tk(1617,` (p-unselected)`),_u(1618,`br`),Zg()()(),Jc(1619,`td`,21)(1620,`code`,29),Tk(1621,`EventEmitter`),Zg()(),Jc(1622,`td`,23),Tk(1623,`-`),Zg(),Jc(1624,`td`,24)(1625,`em`)(1626,`strong`),Tk(1627,`(opcional)`),Zg()(),Jc(1628,`p`),Tk(1629,`Evento executado ao desmarcar a seleção de uma linha do `),Jc(1630,`code`),Tk(1631,`po-table`),Zg(),Tk(1632,`.`),Zg()()(),Jc(1633,`tr`,17)(1634,`td`,18)(1635,`div`,19)(1636,`span`,20),Tk(1637,` p-virtual-scroll`),_u(1638,`br`),Zg()()(),Jc(1639,`td`,21)(1640,`code`,22),Tk(1641,`boolean`),Zg()(),Jc(1642,`td`,23)(1643,`p`)(1644,`code`),Tk(1645,`true`),Zg()()(),Jc(1646,`td`,24)(1647,`em`)(1648,`strong`),Tk(1649,`(opcional)`),Zg()(),Jc(1650,`p`),Tk(1651,`Habilita o `),Jc(1652,`code`),Tk(1653,`virtual-scroll`),Zg(),Tk(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Jc(1655,`code`),Tk(1656,`p-height`),Zg(),Tk(1657,`) para funcionar corretamente.`),Zg(),Jc(1658,`blockquote`)(1659,`p`),Tk(1660,`Incompatível com `),Jc(1661,`code`),Tk(1662,`p-text-wrap`),Zg(),Tk(1663,` e `),Jc(1664,`code`),Tk(1665,`master-detail`),Zg(),Tk(1666,`, pois o `),Jc(1667,`code`),Tk(1668,`virtual-scroll`),Zg(),Tk(1669,` exige altura fixa nas linhas.`),Zg()()()()(),Jc(1670,`h3`,13),Tk(1671,`Métodos`),Zg(),Jc(1672,`table`,42)(1673,`tr`,17)(1674,`th`,43)(1675,`div`,19)(1676,`h4`)(1677,`span`,20),Tk(1678,` applyFilters `),Zg()()()()(),Jc(1679,`tr`,24)(1680,`td`,24)(1681,`p`),Tk(1682,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),Zg(),Jc(1683,`p`),Tk(1684,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),Zg(),Jc(1685,`pre`)(1686,`code`),Tk(1687,`url + ?page=1&pageSize=10
`),Zg()(),Jc(1688,`blockquote`)(1689,`p`),Tk(1690,`Obs: os parâmetros `),Jc(1691,`code`),Tk(1692,`page`),Zg(),Tk(1693,` e `),Jc(1694,`code`),Tk(1695,`pageSize`),Zg(),Tk(1696,` sempre serão chamados independente de ser enviados outros parâmetros.`),Zg()(),Jc(1697,`p`),Tk(1698,`Caso sejam informados os parâmetros `),Jc(1699,`code`),Tk(1700,`{ name: 'JOHN', age: '23' }`),Zg(),Tk(1701,`, todos serão adicionados ao GET, conforme abaixo:`),Zg(),Jc(1702,`pre`)(1703,`code`),Tk(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),Zg()()()()(),Jc(1705,`h5`)(1706,`b`),Tk(1707,`Parâmetros`),Zg()(),Jc(1708,`table`,14)(1709,`tr`,15)(1710,`th`,16),Tk(1711,`Nome`),Zg(),Jc(1712,`th`,16),Tk(1713,`Tipo`),Zg(),Jc(1714,`th`,16),Tk(1715,`Descrição`),Zg()(),Jc(1716,`tr`,17)(1717,`td`,18),Tk(1718,` queryParams`),Zg(),Jc(1719,`td`,21)(1720,`code`,44),Tk(1721,` { key: value } `),Zg()(),Jc(1722,`td`,24)(1723,`p`),Tk(1724,`Formato do objeto a ser enviado.`),Zg(),Jc(1725,`blockquote`)(1726,`p`),Tk(1727,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),Zg()()()()(),_u(1728,`br`),Jc(1729,`table`,42)(1730,`tr`,17)(1731,`th`,43)(1732,`div`,19)(1733,`h4`)(1734,`span`,20),Tk(1735,` applyFixedColumns `),Zg()()()()(),Jc(1736,`tr`,24)(1737,`td`,24)(1738,`p`),Tk(1739,`Verifica se columns possuem a propriedade width.`),Zg()()()(),_u(1740,`br`),Jc(1741,`table`,42)(1742,`tr`,17)(1743,`th`,43)(1744,`div`,19)(1745,`h4`)(1746,`span`,20),Tk(1747,` collapse `),Zg()()()()(),Jc(1748,`tr`,24)(1749,`td`,24)(1750,`p`),Tk(1751,`Método que colapsa uma linha com detalhe quando executada.`),Zg()()()(),Jc(1752,`h5`)(1753,`b`),Tk(1754,`Parâmetros`),Zg()(),Jc(1755,`table`,14)(1756,`tr`,15)(1757,`th`,16),Tk(1758,`Nome`),Zg(),Jc(1759,`th`,16),Tk(1760,`Tipo`),Zg(),Jc(1761,`th`,16),Tk(1762,`Descrição`),Zg()(),Jc(1763,`tr`,17)(1764,`td`,18),Tk(1765,` rowIndex`),Zg(),Jc(1766,`td`,21)(1767,`code`,45),Tk(1768,` number `),Zg()(),Jc(1769,`td`,24)(1770,`p`),Tk(1771,`Índice da linha que será colapsada.`),Zg(),Jc(1772,`blockquote`)(1773,`p`),Tk(1774,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),Zg()()()()(),_u(1775,`br`),Jc(1776,`table`,42)(1777,`tr`,17)(1778,`th`,43)(1779,`div`,19)(1780,`h4`)(1781,`span`,20),Tk(1782,` expand `),Zg()()()()(),Jc(1783,`tr`,24)(1784,`td`,24)(1785,`p`),Tk(1786,`Método que expande uma linha com detalhe quando executada.`),Zg()()()(),Jc(1787,`h5`)(1788,`b`),Tk(1789,`Parâmetros`),Zg()(),Jc(1790,`table`,14)(1791,`tr`,15)(1792,`th`,16),Tk(1793,`Nome`),Zg(),Jc(1794,`th`,16),Tk(1795,`Tipo`),Zg(),Jc(1796,`th`,16),Tk(1797,`Descrição`),Zg()(),Jc(1798,`tr`,17)(1799,`td`,18),Tk(1800,` rowIndex`),Zg(),Jc(1801,`td`,21)(1802,`code`,45),Tk(1803,` number `),Zg()(),Jc(1804,`td`,24)(1805,`p`),Tk(1806,`Índice da linha que será expandida.`),Zg(),Jc(1807,`blockquote`)(1808,`p`),Tk(1809,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),Zg()()()()(),_u(1810,`br`),Jc(1811,`table`,42)(1812,`tr`,17)(1813,`th`,43)(1814,`div`,19)(1815,`h4`)(1816,`span`,20),Tk(1817,` getSelectedRows `),Zg()()()()(),Jc(1818,`tr`,24)(1819,`td`,24)(1820,`p`),Tk(1821,`Retorna as linhas do `),Jc(1822,`code`),Tk(1823,`po-table`),Zg(),Tk(1824,` que estão selecionadas.`),Zg()()()(),_u(1825,`br`),Jc(1826,`table`,42)(1827,`tr`,17)(1828,`th`,43)(1829,`div`,19)(1830,`h4`)(1831,`span`,20),Tk(1832,` getUnselectedRows `),Zg()()()()(),Jc(1833,`tr`,24)(1834,`td`,24)(1835,`p`),Tk(1836,`Retorna as linhas do `),Jc(1837,`code`),Tk(1838,`po-table`),Zg(),Tk(1839,` que não estão selecionadas.`),Zg()()()(),_u(1840,`br`),Jc(1841,`table`,42)(1842,`tr`,17)(1843,`th`,43)(1844,`div`,19)(1845,`h4`)(1846,`span`,20),Tk(1847,` unselectRows `),Zg()()()()(),Jc(1848,`tr`,24)(1849,`td`,24)(1850,`p`),Tk(1851,`Desmarca as linhas que estão selecionadas.`),Zg()()()(),_u(1852,`br`),Jc(1853,`table`,42)(1854,`tr`,17)(1855,`th`,43)(1856,`div`,19)(1857,`h4`)(1858,`span`,20),Tk(1859,` unselectRowItem `),Zg()()()()(),Jc(1860,`tr`,24)(1861,`td`,24)(1862,`p`),Tk(1863,`Desmarca uma linha que está selecionada.`),Zg()()()(),_u(1864,`br`),Jc(1865,`table`,42)(1866,`tr`,17)(1867,`th`,43)(1868,`div`,19)(1869,`h4`)(1870,`span`,20),Tk(1871,` selectRowItem `),Zg()()()()(),Jc(1872,`tr`,24)(1873,`td`,24)(1874,`p`),Tk(1875,`Seleciona uma linha do 'po-table'.`),Zg()()()(),_u(1876,`br`),Jc(1877,`table`,42)(1878,`tr`,17)(1879,`th`,43)(1880,`div`,19)(1881,`h4`)(1882,`span`,20),Tk(1883,` deleteItems `),Zg()()()()(),Jc(1884,`tr`,24)(1885,`td`,24)(1886,`p`),Tk(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Jc(1888,`code`),Tk(1889,`p-service-delete`),Zg(),Tk(1890,`, será necessário excluir 1 item por vez.`),Zg(),Jc(1891,`p`),Tk(1892,`Ao utilizar `),Jc(1893,`code`),Tk(1894,`p-service-delete`),Zg(),Tk(1895,` mas sem a propriedade `),Jc(1896,`code`),Tk(1897,`p-service-api`),Zg(),Tk(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),Zg(),Jc(1899,`p`),Tk(1900,`Caso a tabela utilize `),Jc(1901,`code`),Tk(1902,`p-height`),Zg(),Tk(1903,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),Jc(1904,`code`),Tk(1905,`(p-delete-items)`),Zg(),Tk(1906,`, por exemplo:`),Zg(),Jc(1907,`pre`)(1908,`code`),Tk(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),Zg()()()()(),_u(1910,`br`),Jc(1911,`table`,42)(1912,`tr`,17)(1913,`th`,43)(1914,`div`,19)(1915,`h4`)(1916,`span`,20),Tk(1917,` updateSearchAIQuery `),Zg()()()()(),Jc(1918,`tr`,24)(1919,`td`,24)(1920,`p`),Tk(1921,`Atualiza programaticamente o valor do campo de busca por IA (`),Jc(1922,`code`),Tk(1923,`po-search-ai`),Zg(),Tk(1924,`) integrado \xE0 tabela
via `),Jc(1925,`code`),Tk(1926,`p-search-ai-field`),Zg(),Tk(1927,`.`),Zg(),Jc(1928,`p`),Tk(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),Zg(),Jc(1930,`blockquote`)(1931,`p`),Tk(1932,`Só tem efeito quando a propriedade `),Jc(1933,`code`),Tk(1934,`p-search-ai-field`),Zg(),Tk(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),Zg()()()()(),Jc(1936,`h5`)(1937,`b`),Tk(1938,`Parâmetros`),Zg()(),Jc(1939,`table`,14)(1940,`tr`,15)(1941,`th`,16),Tk(1942,`Nome`),Zg(),Jc(1943,`th`,16),Tk(1944,`Tipo`),Zg(),Jc(1945,`th`,16),Tk(1946,`Descrição`),Zg()(),Jc(1947,`tr`,17)(1948,`td`,18),Tk(1949,` value`),Zg(),Jc(1950,`td`,21)(1951,`code`,45),Tk(1952,` string `),Zg()(),Jc(1953,`td`,24)(1954,`p`),Tk(1955,`Texto da consulta a ser inserido no campo de busca por IA.`),Zg()()(),Jc(1956,`tr`,17)(1957,`td`,18),Tk(1958,` triggerSearch`),Zg(),Jc(1959,`td`,21)(1960,`code`,45),Tk(1961,` boolean `),Zg()(),Jc(1962,`td`,24)(1963,`p`),Tk(1964,`Quando `),Jc(1965,`code`),Tk(1966,`true`),Zg(),Tk(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),Jc(1968,`code`),Tk(1969,`false`),Zg(),Jc(1970,`em`),Tk(1971,`(padrão)`),Zg(),Tk(1972,`, apenas preenche o campo.`),Zg()()()(),_u(1973,`br`),Jc(1974,`table`,42)(1975,`tr`,17)(1976,`th`,43)(1977,`div`,19)(1978,`h4`)(1979,`span`,20),Tk(1980,` removeItem `),Zg()()()()(),Jc(1981,`tr`,24)(1982,`td`,24)(1983,`p`),Tk(1984,`Método que remove um item da tabela.`),Zg()()()(),Jc(1985,`h5`)(1986,`b`),Tk(1987,`Parâmetros`),Zg()(),Jc(1988,`table`,14)(1989,`tr`,15)(1990,`th`,16),Tk(1991,`Nome`),Zg(),Jc(1992,`th`,16),Tk(1993,`Tipo`),Zg(),Jc(1994,`th`,16),Tk(1995,`Descrição`),Zg()(),Jc(1996,`tr`,17)(1997,`td`,18),Tk(1998,` item`),Zg(),Jc(1999,`td`,21)(2e3,`code`,35),Tk(2001,` number `),Zg(),Jc(2002,`code`,44),Tk(2003,` { key: value } `),Zg()(),Jc(2004,`td`,24)(2005,`p`),Tk(2006,`Índice da linha ou o item que será removido.`),Zg(),Jc(2007,`blockquote`)(2008,`p`),Tk(2009,`Ao remover o item, a linha que o representa será excluída da tabela.`),Zg()()()()(),_u(2010,`br`),Jc(2011,`table`,42)(2012,`tr`,17)(2013,`th`,43)(2014,`div`,19)(2015,`h4`)(2016,`span`,20),Tk(2017,` updateItem `),Zg()()()()(),Jc(2018,`tr`,24)(2019,`td`,24)(2020,`p`),Tk(2021,`Método que atualiza um item da tabela.`),Zg()()()(),Jc(2022,`h5`)(2023,`b`),Tk(2024,`Parâmetros`),Zg()(),Jc(2025,`table`,14)(2026,`tr`,15)(2027,`th`,16),Tk(2028,`Nome`),Zg(),Jc(2029,`th`,16),Tk(2030,`Tipo`),Zg(),Jc(2031,`th`,16),Tk(2032,`Descrição`),Zg()(),Jc(2033,`tr`,17)(2034,`td`,18),Tk(2035,` item`),Zg(),Jc(2036,`td`,21)(2037,`code`,35),Tk(2038,` number `),Zg(),Jc(2039,`code`,44),Tk(2040,` { key: value } `),Zg()(),Jc(2041,`td`,24)(2042,`p`),Tk(2043,`Índice da linha ou o item que será atualizado.`),Zg()()(),Jc(2044,`tr`,17)(2045,`td`,18),Tk(2046,` updatedItem`),Zg(),Jc(2047,`td`,21)(2048,`code`,44),Tk(2049,` { key: value } `),Zg()(),Jc(2050,`td`,24)(2051,`p`),Tk(2052,`Item que foi atualizado.`),Zg(),Jc(2053,`blockquote`)(2054,`p`),Tk(2055,`Ao atualizar o item, a informação será alterada na tabela.`),Zg()()()()(),_u(2056,`br`),Jc(2057,`h3`),Tk(2058,`Interfaces`),Zg(),Jc(2059,`h4`,46)(2060,`code`,5),Tk(2061,`PoTableAction`),Zg()(),Jc(2062,`div`,2)(2063,`p`),Tk(2064,`Interface para lista de ações do componente. `),Zg()(),Jc(2065,`h4`,13),Tk(2066,`Propriedades`),Zg(),Jc(2067,`table`,14)(2068,`tr`,15)(2069,`th`,16),Tk(2070,`Nome`),Zg(),Jc(2071,`th`,16),Tk(2072,`Tipo`),Zg(),Jc(2073,`th`,16),Tk(2074,`Descrição`),Zg()(),Jc(2075,`tr`,17)(2076,`td`,18)(2077,`div`,19)(2078,`span`,20),Tk(2079,` action`),_u(2080,`br`),Zg()()(),Jc(2081,`td`,21)(2082,`code`,47),Tk(2083,`Function`),Zg()(),Jc(2084,`td`,24)(2085,`em`)(2086,`strong`),Tk(2087,`(opcional)`),Zg()(),Jc(2088,`p`),Tk(2089,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(2090,`p`),Tk(2091,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(2092,`code`),Tk(2093,`subItems`),Zg(),Tk(2094,`.`),Zg(),Jc(2095,`blockquote`)(2096,`p`),Tk(2097,`Para que a função seja executada no contexto do componente, utilize `),Jc(2098,`em`),Tk(2099,`bind`),Zg(),Tk(2100,`:
`),Jc(2101,`code`),Tk(2102,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(2103,`tr`,17)(2104,`td`,18)(2105,`div`,19)(2106,`span`,20),Tk(2107,` disabled`),_u(2108,`br`),Zg()()(),Jc(2109,`td`,21)(2110,`code`,22),Tk(2111,`boolean `),Zg(),Jc(2112,`code`,47),Tk(2113,` Function`),Zg()(),Jc(2114,`td`,24)(2115,`em`)(2116,`strong`),Tk(2117,`(opcional)`),Zg()(),Jc(2118,`p`),Tk(2119,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(2120,`tr`,17)(2121,`td`,18)(2122,`div`,19)(2123,`span`,20),Tk(2124,` icon`),_u(2125,`br`),Zg()()(),Jc(2126,`td`,21)(2127,`code`,31),Tk(2128,`string `),Zg(),Jc(2129,`code`,48),Tk(2130,` TemplateRef<void>`),Zg()(),Jc(2131,`td`,24)(2132,`em`)(2133,`strong`),Tk(2134,`(opcional)`),Zg()(),Jc(2135,`p`),Tk(2136,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(2137,`p`),Tk(2138,`Aceita ícones da `),Jc(2139,`a`,26),Tk(2140,`Biblioteca de ícones`),Zg(),Tk(2141,`, fontes externas (ex: Font Awesome)
ou um `),Jc(2142,`code`),Tk(2143,`TemplateRef`),Zg(),Tk(2144,` para ícones customizados.`),Zg(),Jc(2145,`pre`)(2146,`code`),Tk(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(2148,`tr`,17)(2149,`td`,18)(2150,`div`,19)(2151,`span`,20),Tk(2152,` label`),_u(2153,`br`),Zg()()(),Jc(2154,`td`,21)(2155,`code`,31),Tk(2156,`string`),Zg()(),Jc(2157,`td`,24)(2158,`p`),Tk(2159,`Rótulo da ação.`),Zg(),Jc(2160,`p`),Tk(2161,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(2162,`code`),Tk(2163,`subItems`),Zg(),Tk(2164,`.`),Zg()()(),Jc(2165,`tr`,17)(2166,`td`,18)(2167,`div`,19)(2168,`span`,20),Tk(2169,` selected`),_u(2170,`br`),Zg()()(),Jc(2171,`td`,21)(2172,`code`,22),Tk(2173,`boolean`),Zg()(),Jc(2174,`td`,24)(2175,`em`)(2176,`strong`),Tk(2177,`(opcional)`),Zg()(),Jc(2178,`p`),Tk(2179,`Define se a ação está selecionada.`),Zg()()(),Jc(2180,`tr`,17)(2181,`td`,18)(2182,`div`,19)(2183,`span`,20),Tk(2184,` separator`),_u(2185,`br`),Zg()()(),Jc(2186,`td`,21)(2187,`code`,22),Tk(2188,`boolean`),Zg()(),Jc(2189,`td`,24)(2190,`em`)(2191,`strong`),Tk(2192,`(opcional)`),Zg()(),Jc(2193,`p`),Tk(2194,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(2195,`tr`,17)(2196,`td`,18)(2197,`div`,19)(2198,`span`,20),Tk(2199,` subItems`),_u(2200,`br`),Zg()()(),Jc(2201,`td`,21)(2202,`code`,49),Tk(2203,`Array<PoPopupAction>`),Zg()(),Jc(2204,`td`,24)(2205,`em`)(2206,`strong`),Tk(2207,`(opcional)`),Zg()(),Jc(2208,`p`),Tk(2209,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(2210,`pre`)(2211,`code`),Tk(2212,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(2213,`p`),Tk(2214,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(2215,`blockquote`)(2216,`p`),Tk(2217,`As propriedades `),Jc(2218,`code`),Tk(2219,`disabled`),Zg(),Tk(2220,`, `),Jc(2221,`code`),Tk(2222,`type`),Zg(),Tk(2223,` e `),Jc(2224,`code`),Tk(2225,`visible`),Zg(),Tk(2226,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(2227,`blockquote`)(2228,`p`),Tk(2229,`Quando `),Jc(2230,`code`),Tk(2231,`url`),Zg(),Tk(2232,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(2233,`blockquote`)(2234,`p`),Tk(2235,`Em subníveis aninhados, o `),Jc(2236,`code`),Tk(2237,`icon`),Zg(),Tk(2238,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(2239,`tr`,17)(2240,`td`,18)(2241,`div`,19)(2242,`span`,20),Tk(2243,` subItemsLazy`),_u(2244,`br`),Zg()()(),Jc(2245,`td`,21)(2246,`code`,50),Tk(2247,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(2248,`td`,24)(2249,`em`)(2250,`strong`),Tk(2251,`(opcional)`),Zg()(),Jc(2252,`p`),Tk(2253,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(2254,`p`),Tk(2255,`Recebe o item agrupador e retorna um `),Jc(2256,`code`),Tk(2257,`Observable<Array<PoPopupAction>>`),Zg(),Tk(2258,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(2259,`strong`),Tk(2260,`apenas`),Zg(),Tk(2261,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(2262,`code`),Tk(2263,`po-skeleton`),Zg(),Tk(2264,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(2265,`pre`)(2266,`code`),Tk(2267,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(2268,`blockquote`)(2269,`p`),Tk(2270,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(2271,`p`),Tk(2272,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(2273,`tr`,17)(2274,`td`,18)(2275,`div`,19)(2276,`span`,20),Tk(2277,` type`),_u(2278,`br`),Zg()()(),Jc(2279,`td`,21)(2280,`code`,31),Tk(2281,`string`),Zg()(),Jc(2282,`td`,24)(2283,`em`)(2284,`strong`),Tk(2285,`(opcional)`),Zg()(),Jc(2286,`p`),Tk(2287,`Define a cor do item.`),Zg(),Jc(2288,`p`),Tk(2289,`Valores válidos:`),Zg(),Jc(2290,`ul`)(2291,`li`)(2292,`code`),Tk(2293,`default`),Zg()(),Jc(2294,`li`)(2295,`code`),Tk(2296,`danger`),Zg()()()()(),Jc(2297,`tr`,17)(2298,`td`,18)(2299,`div`,19)(2300,`span`,20),Tk(2301,` url`),_u(2302,`br`),Zg()()(),Jc(2303,`td`,21)(2304,`code`,31),Tk(2305,`string`),Zg()(),Jc(2306,`td`,24)(2307,`em`)(2308,`strong`),Tk(2309,`(opcional)`),Zg()(),Jc(2310,`p`),Tk(2311,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(2312,`p`),Tk(2313,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(2314,`code`),Tk(2315,`url`),Zg(),Tk(2316,` é informada em um agrupador, o clique `),Jc(2317,`strong`),Tk(2318,`não abrirá os subitens`),Zg(),Tk(2319,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(2320,`blockquote`)(2321,`p`),Tk(2322,`Quando informada, tem prioridade sobre a propriedade `),Jc(2323,`code`),Tk(2324,`action`),Zg(),Tk(2325,`.`),Zg()()()(),Jc(2326,`tr`,17)(2327,`td`,18)(2328,`div`,19)(2329,`span`,20),Tk(2330,` visible`),_u(2331,`br`),Zg()()(),Jc(2332,`td`,21)(2333,`code`,22),Tk(2334,`boolean `),Zg(),Jc(2335,`code`,47),Tk(2336,` Function`),Zg()(),Jc(2337,`td`,24)(2338,`em`)(2339,`strong`),Tk(2340,`(opcional)`),Zg()(),Jc(2341,`p`),Tk(2342,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()(),Jc(2343,`h4`,46)(2344,`code`,5),Tk(2345,`PoTableBoolean`),Zg()(),Jc(2346,`div`,2)(2347,`p`),Tk(2348,`Interface que define as colunas booleanas do `),Jc(2349,`code`),Tk(2350,`po-table`),Zg(),Tk(2351,`.`),Zg()(),Jc(2352,`h4`,13),Tk(2353,`Propriedades`),Zg(),Jc(2354,`table`,14)(2355,`tr`,15)(2356,`th`,16),Tk(2357,`Nome`),Zg(),Jc(2358,`th`,16),Tk(2359,`Tipo`),Zg(),Jc(2360,`th`,16),Tk(2361,`Descrição`),Zg()(),Jc(2362,`tr`,17)(2363,`td`,18)(2364,`div`,19)(2365,`span`,20),Tk(2366,` falseLabel`),_u(2367,`br`),Zg()()(),Jc(2368,`td`,21)(2369,`code`,31),Tk(2370,`string`),Zg()(),Jc(2371,`td`,24)(2372,`em`)(2373,`strong`),Tk(2374,`(opcional)`),Zg()(),Jc(2375,`p`),Tk(2376,`Define o rótulo para valores `),Jc(2377,`code`),Tk(2378,`false`),Zg(),Tk(2379,`.`),Zg()()(),Jc(2380,`tr`,17)(2381,`td`,18)(2382,`div`,19)(2383,`span`,20),Tk(2384,` trueLabel`),_u(2385,`br`),Zg()()(),Jc(2386,`td`,21)(2387,`code`,31),Tk(2388,`string`),Zg()(),Jc(2389,`td`,24)(2390,`em`)(2391,`strong`),Tk(2392,`(opcional)`),Zg()(),Jc(2393,`p`),Tk(2394,`Define o rótulo para valores `),Jc(2395,`code`),Tk(2396,`true`),Zg(),Tk(2397,`.`),Zg()()()(),Jc(2398,`h4`,46)(2399,`code`,5),Tk(2400,`PoTableColumnSort`),Zg()(),Jc(2401,`div`,2)(2402,`p`),Tk(2403,`Interface para ordenação das colunas do componente table.`),Zg()(),Jc(2404,`h4`,13),Tk(2405,`Propriedades`),Zg(),Jc(2406,`table`,14)(2407,`tr`,15)(2408,`th`,16),Tk(2409,`Nome`),Zg(),Jc(2410,`th`,16),Tk(2411,`Tipo`),Zg(),Jc(2412,`th`,16),Tk(2413,`Descrição`),Zg()(),Jc(2414,`tr`,17)(2415,`td`,18)(2416,`div`,19)(2417,`span`,20),Tk(2418,` column`),_u(2419,`br`),Zg()()(),Jc(2420,`td`,21)(2421,`code`,51),Tk(2422,`PoTableColumn`),Zg()(),Jc(2423,`td`,24)(2424,`em`)(2425,`strong`),Tk(2426,`(opcional)`),Zg()(),Jc(2427,`p`),Tk(2428,`Coluna pela qual a tabela está ordenada.`),Zg()()(),Jc(2429,`tr`,17)(2430,`td`,18)(2431,`div`,19)(2432,`span`,20),Tk(2433,` type`),_u(2434,`br`),Zg()()(),Jc(2435,`td`,21)(2436,`code`,52),Tk(2437,`PoTableColumnSortType`),Zg()(),Jc(2438,`td`,24)(2439,`p`),Tk(2440,`Tipo da ordenação.`),Zg()()()(),Jc(2441,`h4`,46)(2442,`code`,5),Tk(2443,`PoTableColumn`),Zg()(),Jc(2444,`div`,2)(2445,`p`),Tk(2446,`Interface para configuração das colunas do `),Jc(2447,`code`),Tk(2448,`po-table`),Zg(),Tk(2449,`.`),Zg(),Jc(2450,`p`),Tk(2451,`As definições das colunas serão aplicadas linha a linha.`),Zg()(),Jc(2452,`h4`,13),Tk(2453,`Propriedades`),Zg(),Jc(2454,`table`,14)(2455,`tr`,15)(2456,`th`,16),Tk(2457,`Nome`),Zg(),Jc(2458,`th`,16),Tk(2459,`Tipo`),Zg(),Jc(2460,`th`,16),Tk(2461,`Descrição`),Zg()(),Jc(2462,`tr`,17)(2463,`td`,18)(2464,`div`,19)(2465,`span`,20),Tk(2466,` action`),_u(2467,`br`),Zg()()(),Jc(2468,`td`,21)(2469,`code`,47),Tk(2470,`Function`),Zg()(),Jc(2471,`td`,24)(2472,`em`)(2473,`strong`),Tk(2474,`(opcional)`),Zg()(),Jc(2475,`p`),Tk(2476,`Define uma ação na coluna quando o tipo da coluna for `),Jc(2477,`code`),Tk(2478,`link`),Zg(),Tk(2479,` ou `),Jc(2480,`code`),Tk(2481,`icon`),Zg(),Tk(2482,`.`),Zg(),Jc(2483,`blockquote`)(2484,`p`),Tk(2485,`Quando for do tipo `),Jc(2486,`code`),Tk(2487,`link`),Zg(),Tk(2488,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),Zg()(),Jc(2489,`blockquote`)(2490,`p`),Tk(2491,`Quando for do tipo `),Jc(2492,`code`),Tk(2493,`icon`),Zg(),Tk(2494,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),Zg()()()(),Jc(2495,`tr`,17)(2496,`td`,18)(2497,`div`,19)(2498,`span`,20),Tk(2499,` boolean`),_u(2500,`br`),Zg()()(),Jc(2501,`td`,21)(2502,`code`,53),Tk(2503,`PoTableBoolean`),Zg()(),Jc(2504,`td`,24)(2505,`em`)(2506,`strong`),Tk(2507,`(opcional)`),Zg()(),Jc(2508,`p`),Tk(2509,`Define um objeto do tipo `),Jc(2510,`code`),Tk(2511,`PoTableBoolean`),Zg(),Tk(2512,` para as colunas do tipo `),Jc(2513,`em`),Tk(2514,`boolean`),Zg(),Tk(2515,`. Por exemplo:`),Zg(),Jc(2516,`pre`)(2517,`code`),Tk(2518,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),Zg()(),Jc(2519,`blockquote`)(2520,`p`),Tk(2521,`Caso não seja definido um objeto para colunas do tipo `),Jc(2522,`em`),Tk(2523,`boolean`),Zg(),Tk(2524,`,
esta exibir\xE1 por padr\xE3o `),Jc(2525,`code`),Tk(2526,`Sim`),Zg(),Tk(2527,` e `),Jc(2528,`code`),Tk(2529,`Não`),Zg(),Tk(2530,` de acordo com os valores `),Jc(2531,`em`),Tk(2532,`booleanos`),Zg(),Tk(2533,`.`),Zg()()()(),Jc(2534,`tr`,17)(2535,`td`,18)(2536,`div`,19)(2537,`span`,20),Tk(2538,` color`),_u(2539,`br`),Zg()()(),Jc(2540,`td`,21)(2541,`code`,31),Tk(2542,`string `),Zg(),Jc(2543,`code`,47),Tk(2544,` Function`),Zg()(),Jc(2545,`td`,24)(2546,`em`)(2547,`strong`),Tk(2548,`(opcional)`),Zg()(),Jc(2549,`p`),Tk(2550,`Define a cor que será aplicada no conteúdo da coluna.`),Zg(),Jc(2551,`p`),Tk(2552,`Valores válidos:`),Zg(),Jc(2553,`ul`)(2554,`li`),_u(2555,`span`,54),Jc(2556,`code`),Tk(2557,`color-01`),Zg()(),Jc(2558,`li`),_u(2559,`span`,55),Jc(2560,`code`),Tk(2561,`color-02`),Zg()(),Jc(2562,`li`),_u(2563,`span`,56),Jc(2564,`code`),Tk(2565,`color-03`),Zg()(),Jc(2566,`li`),_u(2567,`span`,57),Jc(2568,`code`),Tk(2569,`color-04`),Zg()(),Jc(2570,`li`),_u(2571,`span`,58),Jc(2572,`code`),Tk(2573,`color-05`),Zg()(),Jc(2574,`li`),_u(2575,`span`,59),Jc(2576,`code`),Tk(2577,`color-06`),Zg()(),Jc(2578,`li`),_u(2579,`span`,60),Jc(2580,`code`),Tk(2581,`color-07`),Zg()(),Jc(2582,`li`),_u(2583,`span`,61),Jc(2584,`code`),Tk(2585,`color-08`),Zg()(),Jc(2586,`li`),_u(2587,`span`,62),Jc(2588,`code`),Tk(2589,`color-09`),Zg()(),Jc(2590,`li`),_u(2591,`span`,63),Jc(2592,`code`),Tk(2593,`color-10`),Zg()(),Jc(2594,`li`),_u(2595,`span`,64),Jc(2596,`code`),Tk(2597,`color-11`),Zg()(),Jc(2598,`li`),_u(2599,`span`,65),Jc(2600,`code`),Tk(2601,`color-12`),Zg()()(),Jc(2602,`blockquote`)(2603,`p`),Tk(2604,`Também é possível utilizar as 35 cores da paleta `),Jc(2605,`strong`),Tk(2606,`Caption Tag Colors`),Zg(),Tk(2607,`:`),Zg()(),Jc(2608,`ul`)(2609,`li`),_u(2610,`span`,66),Jc(2611,`code`),Tk(2612,`caption-tag-01`),Zg(),_u(2613,`span`,67),Jc(2614,`code`),Tk(2615,`caption-tag-02`),Zg(),_u(2616,`span`,68),Jc(2617,`code`),Tk(2618,`caption-tag-03`),Zg(),_u(2619,`span`,69),Jc(2620,`code`),Tk(2621,`caption-tag-04`),Zg(),_u(2622,`span`,70),Jc(2623,`code`),Tk(2624,`caption-tag-05`),Zg()(),Jc(2625,`li`),_u(2626,`span`,71),Jc(2627,`code`),Tk(2628,`caption-tag-06`),Zg(),_u(2629,`span`,72),Jc(2630,`code`),Tk(2631,`caption-tag-07`),Zg(),_u(2632,`span`,73),Jc(2633,`code`),Tk(2634,`caption-tag-08`),Zg(),_u(2635,`span`,74),Jc(2636,`code`),Tk(2637,`caption-tag-09`),Zg(),_u(2638,`span`,75),Jc(2639,`code`),Tk(2640,`caption-tag-10`),Zg()(),Jc(2641,`li`),_u(2642,`span`,76),Jc(2643,`code`),Tk(2644,`caption-tag-11`),Zg(),_u(2645,`span`,77),Jc(2646,`code`),Tk(2647,`caption-tag-12`),Zg(),_u(2648,`span`,78),Jc(2649,`code`),Tk(2650,`caption-tag-13`),Zg(),_u(2651,`span`,79),Jc(2652,`code`),Tk(2653,`caption-tag-14`),Zg(),_u(2654,`span`,80),Jc(2655,`code`),Tk(2656,`caption-tag-15`),Zg()(),Jc(2657,`li`),_u(2658,`span`,81),Jc(2659,`code`),Tk(2660,`caption-tag-16`),Zg(),_u(2661,`span`,82),Jc(2662,`code`),Tk(2663,`caption-tag-17`),Zg(),_u(2664,`span`,83),Jc(2665,`code`),Tk(2666,`caption-tag-18`),Zg(),_u(2667,`span`,84),Jc(2668,`code`),Tk(2669,`caption-tag-19`),Zg(),_u(2670,`span`,85),Jc(2671,`code`),Tk(2672,`caption-tag-20`),Zg()(),Jc(2673,`li`),_u(2674,`span`,86),Jc(2675,`code`),Tk(2676,`caption-tag-21`),Zg(),_u(2677,`span`,87),Jc(2678,`code`),Tk(2679,`caption-tag-22`),Zg(),_u(2680,`span`,88),Jc(2681,`code`),Tk(2682,`caption-tag-23`),Zg(),_u(2683,`span`,89),Jc(2684,`code`),Tk(2685,`caption-tag-24`),Zg(),_u(2686,`span`,90),Jc(2687,`code`),Tk(2688,`caption-tag-25`),Zg()(),Jc(2689,`li`),_u(2690,`span`,91),Jc(2691,`code`),Tk(2692,`caption-tag-26`),Zg(),_u(2693,`span`,92),Jc(2694,`code`),Tk(2695,`caption-tag-27`),Zg(),_u(2696,`span`,93),Jc(2697,`code`),Tk(2698,`caption-tag-28`),Zg(),_u(2699,`span`,94),Jc(2700,`code`),Tk(2701,`caption-tag-29`),Zg(),_u(2702,`span`,95),Jc(2703,`code`),Tk(2704,`caption-tag-30`),Zg()(),Jc(2705,`li`),_u(2706,`span`,96),Jc(2707,`code`),Tk(2708,`caption-tag-31`),Zg(),_u(2709,`span`,97),Jc(2710,`code`),Tk(2711,`caption-tag-32`),Zg(),_u(2712,`span`,98),Jc(2713,`code`),Tk(2714,`caption-tag-33`),Zg(),_u(2715,`span`,99),Jc(2716,`code`),Tk(2717,`caption-tag-34`),Zg(),_u(2718,`span`,100),Jc(2719,`code`),Tk(2720,`caption-tag-35`),Zg()()(),Jc(2721,`blockquote`)(2722,`p`),Tk(2723,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),Zg()(),Jc(2724,`pre`)(2725,`code`),Tk(2726,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),Zg()(),Jc(2727,`blockquote`)(2728,`p`),Tk(2729,`É possível também usá-la na coluna do tipo `),Jc(2730,`code`),Tk(2731,`icons`),Zg(),Tk(2732,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),Zg()(),Jc(2733,`pre`)(2734,`code`),Tk(2735,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),Zg()()()(),Jc(2736,`tr`,17)(2737,`td`,18)(2738,`div`,19)(2739,`span`,20),Tk(2740,` detail`),_u(2741,`br`),Zg()()(),Jc(2742,`td`,21)(2743,`code`,101),Tk(2744,`PoTableDetail`),Zg()(),Jc(2745,`td`,24)(2746,`em`)(2747,`strong`),Tk(2748,`(opcional)`),Zg()(),Jc(2749,`p`),Tk(2750,`Define um objeto que segue a interface `),Jc(2751,`code`),Tk(2752,`PoTableDetail`),Zg(),Tk(2753,`, para as colunas de detalhes. Por exemplo:`),Zg(),Jc(2754,`pre`)(2755,`code`),Tk(2756,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),Zg()()()(),Jc(2757,`tr`,17)(2758,`td`,18)(2759,`div`,19)(2760,`span`,20),Tk(2761,` disabled`),_u(2762,`br`),Zg()()(),Jc(2763,`td`,21)(2764,`code`,47),Tk(2765,`Function`),Zg()(),Jc(2766,`td`,24)(2767,`em`)(2768,`strong`),Tk(2769,`(opcional)`),Zg()(),Jc(2770,`p`),Tk(2771,`Função que deve retornar um booleano para habilitar ou desabilitar o `),Jc(2772,`em`),Tk(2773,`link`),Zg(),Tk(2774,` e sua ação.`),Zg(),Jc(2775,`blockquote`)(2776,`p`),Tk(2777,`Propriedade disponível nas colunas do tipo `),Jc(2778,`code`),Tk(2779,`link`),Zg(),Tk(2780,`.`),Zg()()()(),Jc(2781,`tr`,17)(2782,`td`,18)(2783,`div`,19)(2784,`span`,20),Tk(2785,` format`),_u(2786,`br`),Zg()()(),Jc(2787,`td`,21)(2788,`code`,31),Tk(2789,`string`),Zg()(),Jc(2790,`td`,24)(2791,`em`)(2792,`strong`),Tk(2793,`(opcional)`),Zg()(),Jc(2794,`p`),Tk(2795,`Formato de exibição do valor da coluna.`),Zg(),Jc(2796,`table`)(2797,`thead`)(2798,`tr`)(2799,`th`),Tk(2800,`Formatação`),Zg(),Jc(2801,`th`),Tk(2802,`Type da Coluna`),Zg(),Jc(2803,`th`),Tk(2804,`Descrição`),Zg(),Jc(2805,`th`),Tk(2806,`Exemplos`),Zg()()(),Jc(2807,`tbody`)(2808,`tr`)(2809,`td`),Tk(2810,`Monetário`),Zg(),Jc(2811,`td`)(2812,`code`),Tk(2813,`currency`),Zg()(),Jc(2814,`td`),Tk(2815,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),Zg(),Jc(2816,`td`)(2817,`code`),Tk(2818,`'BRL'`),Zg(),Tk(2819,`, `),Jc(2820,`code`),Tk(2821,`'USD'`),Zg(),Tk(2822,`, `),Jc(2823,`code`),Tk(2824,`'EUR'`),Zg(),Tk(2825,`, `),Jc(2826,`code`),Tk(2827,`'RUB'`),Zg()()(),Jc(2828,`tr`)(2829,`td`),Tk(2830,`Data`),Zg(),Jc(2831,`td`)(2832,`code`),Tk(2833,`date`),Zg()(),Jc(2834,`td`),Tk(2835,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),Zg(),Jc(2836,`td`)(2837,`code`),Tk(2838,`'dd/MM/yyyy'`),Zg(),Tk(2839,`, `),Jc(2840,`code`),Tk(2841,`'dd-MM-yy'`),Zg(),Tk(2842,`, `),Jc(2843,`code`),Tk(2844,`'mm/dd/yyyy'`),Zg()()(),Jc(2845,`tr`)(2846,`td`),Tk(2847,`Data/Hora`),Zg(),Jc(2848,`td`)(2849,`code`),Tk(2850,`dateTime`),Zg()(),Jc(2851,`td`),Tk(2852,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),Zg(),Jc(2853,`td`)(2854,`code`),Tk(2855,`'dd/MM/yyyy HH:mm'`),Zg(),Tk(2856,`, `),Jc(2857,`code`),Tk(2858,`'dd/MM/yyyy HH:mm:ss'`),Zg(),Tk(2859,`, `),Jc(2860,`code`),Tk(2861,`'dd/MM/yyyy HH:mm:ss.SSS'`),Zg(),Tk(2862,`, `),Jc(2863,`code`),Tk(2864,`'MM/dd/yyyy hh:mm a'`),Zg(),Tk(2865,`, `),Jc(2866,`code`),Tk(2867,`'yyyy-MM-dd HH:mm'`),Zg(),Tk(2868,`, `),Jc(2869,`code`),Tk(2870,`'short'`),Zg(),Tk(2871,`, `),Jc(2872,`code`),Tk(2873,`'medium'`),Zg()()(),Jc(2874,`tr`)(2875,`td`),Tk(2876,`Hora`),Zg(),Jc(2877,`td`)(2878,`code`),Tk(2879,`time`),Zg()(),Jc(2880,`td`),Tk(2881,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),Zg(),Jc(2882,`td`)(2883,`code`),Tk(2884,`'HH:mm'`),Zg(),Tk(2885,`, `),Jc(2886,`code`),Tk(2887,`'HH:mm:ss.ffffff'`),Zg(),Tk(2888,`, `),Jc(2889,`code`),Tk(2890,`'HH:mm:ss.ff'`),Zg(),Tk(2891,`, `),Jc(2892,`code`),Tk(2893,`'mm:ss.fff'`),Zg()()(),Jc(2894,`tr`)(2895,`td`),Tk(2896,`Número`),Zg(),Jc(2897,`td`)(2898,`code`),Tk(2899,`number`),Zg()(),Jc(2900,`td`),Tk(2901,`Aceita um valor seguindo o padrão `),Jc(2902,`a`,102)(2903,`strong`),Tk(2904,`DecimalPipe`),Zg()(),Tk(2905,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),Zg(),Jc(2906,`td`)(2907,`code`),Tk(2908,`'1.2-5'`),Zg(),Tk(2909,` (ex.: `),Jc(2910,`code`),Tk(2911,`50`),Zg(),Tk(2912,` → `),Jc(2913,`code`),Tk(2914,`50.00`),Zg(),Tk(2915,`)`),Zg()()()(),Jc(2916,`p`),Tk(2917,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),Zg()()(),Jc(2918,`tr`,17)(2919,`td`,18)(2920,`div`,19)(2921,`span`,20),Tk(2922,` icons`),_u(2923,`br`),Zg()()(),Jc(2924,`td`,21)(2925,`code`,103),Tk(2926,`Array<PoTableColumnIcon>`),Zg()(),Jc(2927,`td`,24)(2928,`em`)(2929,`strong`),Tk(2930,`(opcional)`),Zg()(),Jc(2931,`p`),Tk(2932,`Define um `),Jc(2933,`em`),Tk(2934,`array`),Zg(),Tk(2935,` de objetos para colunas de ícones que irá sobrepor os valores como `),Jc(2936,`code`),Tk(2937,`action`),Zg(),Tk(2938,` e `),Jc(2939,`code`),Tk(2940,`color`),Zg(),Tk(2941,`
definidos na coluna, \xE0 partir do `),Jc(2942,`em`),Tk(2943,`value`),Zg(),Tk(2944,` da `),Jc(2945,`a`,104)(2946,`code`),Tk(2947,`PoTableColumnIcon`),Zg()(),Tk(2948,`, por exemplo:`),Zg(),Jc(2949,`pre`)(2950,`code`),Tk(2951,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),Zg()(),Jc(2952,`pre`)(2953,`code`),Tk(2954,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),Zg()()()(),Jc(2955,`tr`,17)(2956,`td`,18)(2957,`div`,19)(2958,`span`,20),Tk(2959,` label`),_u(2960,`br`),Zg()()(),Jc(2961,`td`,21)(2962,`code`,31),Tk(2963,`string`),Zg()(),Jc(2964,`td`,24)(2965,`em`)(2966,`strong`),Tk(2967,`(opcional)`),Zg()(),Jc(2968,`p`),Tk(2969,`Texto para título da coluna.`),Zg(),Jc(2970,`p`),Tk(2971,`Caso não seja informado, será utilizado como `),Jc(2972,`em`),Tk(2973,`label`),Zg(),Tk(2974,` o valor da propriedade `),Jc(2975,`em`),Tk(2976,`property`),Zg(),Tk(2977,` com a primeira letra em maiúsculo.`),Zg()()(),Jc(2978,`tr`,17)(2979,`td`,18)(2980,`div`,19)(2981,`span`,20),Tk(2982,` labels`),_u(2983,`br`),Zg()()(),Jc(2984,`td`,21)(2985,`code`,105),Tk(2986,`Array<PoTableColumnLabel>`),Zg()(),Jc(2987,`td`,24)(2988,`em`)(2989,`strong`),Tk(2990,`(opcional)`),Zg()(),Jc(2991,`p`),Tk(2992,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Jc(2993,`code`),Tk(2994,`PoTableColumnLabel`),Zg(),Tk(2995,` na qual devem ser definidas os labels. Por exemplo:`),Zg(),Jc(2996,`pre`)(2997,`code`),Tk(2998,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),Zg()()()(),Jc(2999,`tr`,17)(3e3,`td`,18)(3001,`div`,19)(3002,`span`,20),Tk(3003,` link`),_u(3004,`br`),Zg()()(),Jc(3005,`td`,21)(3006,`code`,31),Tk(3007,`string`),Zg()(),Jc(3008,`td`,24)(3009,`em`)(3010,`strong`),Tk(3011,`(opcional)`),Zg()(),Jc(3012,`p`),Tk(3013,`Define o nome da propriedade que conterá o `),Jc(3014,`code`),Tk(3015,`link`),Zg(),Tk(3016,` a ser redirecionado.`),Zg()()(),Jc(3017,`tr`,17)(3018,`td`,18)(3019,`div`,19)(3020,`span`,20),Tk(3021,` mask`),_u(3022,`br`),Zg()()(),Jc(3023,`td`,21)(3024,`code`,31),Tk(3025,`string`),Zg()(),Jc(3026,`td`,24)(3027,`em`)(3028,`strong`),Tk(3029,`(opcional)`),Zg()(),Jc(3030,`p`),Tk(3031,`Define uma máscara para formatação do valor exibido na coluna.`),Zg(),Jc(3032,`p`),Tk(3033,`A máscara é aplicada somente para `),Jc(3034,`strong`),Tk(3035,`exibição`),Zg(),Tk(3036,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),Zg(),Jc(3037,`p`),Tk(3038,`Caracteres válidos para a máscara:`),Zg(),Jc(3039,`ul`)(3040,`li`)(3041,`code`),Tk(3042,`9`),Zg(),Tk(3043,` : aceita um dígito numérico (0-9).`),Zg(),Jc(3044,`li`)(3045,`code`),Tk(3046,`@`),Zg(),Tk(3047,` : aceita um caractere alfabético (a-z, A-Z).`),Zg(),Jc(3048,`li`)(3049,`code`),Tk(3050,`w`),Zg(),Tk(3051,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),Zg(),Jc(3052,`li`),Tk(3053,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Jc(3054,`code`),Tk(3055,`.`),Zg(),Tk(3056,`, `),Jc(3057,`code`),Tk(3058,`-`),Zg(),Tk(3059,`, `),Jc(3060,`code`),Tk(3061,`/`),Zg(),Tk(3062,`, `),Jc(3063,`code`),Tk(3064,`(`),Zg(),Tk(3065,`, `),Jc(3066,`code`),Tk(3067,`)`),Zg(),Tk(3068,`, `),Jc(3069,`code`),Tk(3070,`+`),Zg(),Tk(3071,`, `),_u(3072,`code`),Tk(3073,`).`),Zg()(),Jc(3074,`p`),Tk(3075,`Exemplos de uso:`),Zg(),Jc(3076,`pre`)(3077,`code`),Tk(3078,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),Zg()(),Jc(3079,`blockquote`)(3080,`p`),Tk(3081,`Esta propriedade é utilizada apenas para colunas do tipo `),Jc(3082,`code`),Tk(3083,`string`),Zg(),Tk(3084,` (padr\xE3o).
Caso a coluna possua um `),Jc(3085,`code`),Tk(3086,`type`),Zg(),Tk(3087,` diferente de `),Jc(3088,`code`),Tk(3089,`string`),Zg(),Tk(3090,`, a máscara será ignorada.`),Zg()()()(),Jc(3091,`tr`,17)(3092,`td`,18)(3093,`div`,19)(3094,`span`,20),Tk(3095,` property`),_u(3096,`br`),Zg()()(),Jc(3097,`td`,21)(3098,`code`,31),Tk(3099,`string`),Zg()(),Jc(3100,`td`,24)(3101,`em`)(3102,`strong`),Tk(3103,`(opcional)`),Zg()(),Jc(3104,`p`),Tk(3105,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),Zg(),Jc(3106,`pre`)(3107,`code`),Tk(3108,`{ property: 'address.street', label: 'Rua' }
`),Zg()()()(),Jc(3109,`tr`,17)(3110,`td`,18)(3111,`div`,19)(3112,`span`,20),Tk(3113,` searchAiIgnore`),_u(3114,`br`),Zg()()(),Jc(3115,`td`,21)(3116,`code`,22),Tk(3117,`boolean`),Zg()(),Jc(3118,`td`,24)(3119,`em`)(3120,`strong`),Tk(3121,`(opcional)`),Zg()(),Jc(3122,`p`),Tk(3123,`Quando `),Jc(3124,`code`),Tk(3125,`true`),Zg(),Tk(3126,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),Jc(3127,`code`),Tk(3128,`p-search-ai-field`),Zg(),Tk(3129,`, independentemente de estar visível na tabela.`),Zg(),Jc(3130,`p`),Tk(3131,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),Zg()()(),Jc(3132,`tr`,17)(3133,`td`,18)(3134,`div`,19)(3135,`span`,20),Tk(3136,` sortable`),_u(3137,`br`),Zg()()(),Jc(3138,`td`,21)(3139,`code`,22),Tk(3140,`boolean`),Zg()(),Jc(3141,`td`,24)(3142,`em`)(3143,`strong`),Tk(3144,`(opcional)`),Zg()(),Jc(3145,`p`),Tk(3146,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),Zg()()(),Jc(3147,`tr`,17)(3148,`td`,18)(3149,`div`,19)(3150,`span`,20),Tk(3151,` subtitles`),_u(3152,`br`),Zg()()(),Jc(3153,`td`,21)(3154,`code`,106),Tk(3155,`Array<PoTableSubtitleColumn>`),Zg()(),Jc(3156,`td`,24)(3157,`em`)(3158,`strong`),Tk(3159,`(opcional)`),Zg()(),Jc(3160,`p`),Tk(3161,`Define um array de objetos para as colunas de legenda. Onde, `),Jc(3162,`code`),Tk(3163,`subtitles`),Zg(),Tk(3164,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),Zg(),Jc(3165,`pre`)(3166,`code`),Tk(3167,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),Zg()(),Jc(3168,`p`),Tk(3169,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),Zg()()(),Jc(3170,`tr`,17)(3171,`td`,18)(3172,`div`,19)(3173,`span`,20),Tk(3174,` tooltip`),_u(3175,`br`),Zg()()(),Jc(3176,`td`,21)(3177,`code`,31),Tk(3178,`string`),Zg()(),Jc(3179,`td`,24)(3180,`em`)(3181,`strong`),Tk(3182,`(opcional)`),Zg()(),Jc(3183,`p`),Tk(3184,`Define um texto de ajuda que será exibido ao passar o `),Jc(3185,`em`),Tk(3186,`mouse`),Zg(),Tk(3187,` sobre um texto.`),Zg(),Jc(3188,`blockquote`)(3189,`p`),Tk(3190,`O tooltip só será visível se for uma coluna do tipo `),Jc(3191,`em`),Tk(3192,`link`),Zg(),Tk(3193,`.`),Zg()(),Jc(3194,`blockquote`)(3195,`p`),Tk(3196,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Jc(3197,`em`),Tk(3198,`tooltip`),Zg(),Tk(3199,` e será exibido justamente o conteúdo da célula.`),Zg()()()(),Jc(3200,`tr`,17)(3201,`td`,18)(3202,`div`,19)(3203,`span`,20),Tk(3204,` type`),_u(3205,`br`),Zg()()(),Jc(3206,`td`,21)(3207,`code`,31),Tk(3208,`string`),Zg()(),Jc(3209,`td`,24)(3210,`em`)(3211,`strong`),Tk(3212,`(opcional)`),Zg()(),Jc(3213,`p`),Tk(3214,`Tipo da coluna.`),Zg(),Jc(3215,`p`),Tk(3216,`Valores válidos:`),Zg(),Jc(3217,`ul`)(3218,`li`)(3219,`p`)(3220,`code`),Tk(3221,`boolean`),Zg(),Tk(3222,`: Exibirá por padrão `),Jc(3223,`code`),Tk(3224,`Sim`),Zg(),Tk(3225,` e `),Jc(3226,`code`),Tk(3227,`Não`),Zg(),Tk(3228,` de acordo com os valores `),Jc(3229,`em`),Tk(3230,`booleanos`),Zg(),Tk(3231,`.`),Zg(),Jc(3232,`blockquote`)(3233,`p`),Tk(3234,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),Jc(3235,`code`),Tk(3236,`boolean`),Zg(),Tk(3237,` desta interface.`),Zg()()(),Jc(3238,`li`)(3239,`p`)(3240,`code`),Tk(3241,`currency`),Zg(),Tk(3242,`: valores monetários.`),Zg()(),Jc(3243,`li`)(3244,`p`)(3245,`code`),Tk(3246,`date`),Zg(),Tk(3247,`: valor de datas.`),Zg(),Jc(3248,`ul`)(3249,`li`),Tk(3250,`Aceita os tipos `),Jc(3251,`em`),Tk(3252,`string`),Zg(),Tk(3253,` e `),Jc(3254,`em`),Tk(3255,`Date`),Zg(),Tk(3256,` padr\xE3o do Javascript,
por exemplo: `),Jc(3257,`code`),Tk(3258,`'2017-11-28'`),Zg(),Tk(3259,` ou `),Jc(3260,`code`),Tk(3261,`new Date(2017, 10, 28)`),Zg(),Tk(3262,`.`),Zg()()(),Jc(3263,`li`)(3264,`p`)(3265,`code`),Tk(3266,`dateTime`),Zg(),Tk(3267,`: valor de data com horário.`),Zg(),Jc(3268,`ul`)(3269,`li`),Tk(3270,`Aceita o tipo `),Jc(3271,`em`),Tk(3272,`string`),Zg(),Tk(3273,` no formato `),Jc(3274,`strong`),Tk(3275,`ISO-8601`),Zg(),Tk(3276,` extendido `),Jc(3277,`strong`),Tk(3278,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),Zg(),Tk(3279,`
ou `),Jc(3280,`strong`),Tk(3281,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),Zg(),Tk(3282,` (sem segundos),
e o tipo `),Jc(3283,`em`),Tk(3284,`Date`),Zg(),Tk(3285,` padrão do Javascript, por exemplo: `),Jc(3286,`code`),Tk(3287,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(3288,`, `),Jc(3289,`code`),Tk(3290,`'2017-11-28T14:30-02:00'`),Zg(),Tk(3291,` ou `),Jc(3292,`code`),Tk(3293,`new Date(2017, 10, 28)`),Zg(),Tk(3294,`.`),Zg(),Jc(3295,`li`),Tk(3296,`A formatação de exibição pode ser configurada pela propriedade `),Jc(3297,`code`),Tk(3298,`format`),Zg(),Tk(3299,`.`),Zg()()(),Jc(3300,`li`)(3301,`p`)(3302,`code`),Tk(3303,`detail`),Zg(),Tk(3304,`: array de objetos para o master-detail.`),Zg(),Jc(3305,`ul`)(3306,`li`),Tk(3307,`Incompatível com `),Jc(3308,`code`),Tk(3309,`virtual-scroll`),Zg(),Tk(3310,`, que requer altura fixa nas linhas.`),Zg()()(),Jc(3311,`li`)(3312,`p`)(3313,`code`),Tk(3314,`icon`),Zg(),Tk(3315,`: `),Jc(3316,`em`),Tk(3317,`array`),Zg(),Tk(3318,` de `),Jc(3319,`em`),Tk(3320,`string`),Zg(),Tk(3321,` ou objetos para a coluna de ícones.`),Zg()(),Jc(3322,`li`)(3323,`p`)(3324,`code`),Tk(3325,`label`),Zg(),Tk(3326,`: texto com destaque.`),Zg()(),Jc(3327,`li`)(3328,`p`)(3329,`code`),Tk(3330,`link`),Zg(),Tk(3331,`: habilita link na coluna para ação ou navegação.`),Zg()(),Jc(3332,`li`)(3333,`p`)(3334,`code`),Tk(3335,`number`),Zg(),Tk(3336,`: valores numéricos.`),Zg()(),Jc(3337,`li`)(3338,`p`)(3339,`code`),Tk(3340,`string`),Zg(),Tk(3341,`: textos.`),Zg()(),Jc(3342,`li`)(3343,`p`)(3344,`code`),Tk(3345,`subtitle`),Zg(),Tk(3346,`: array de objetos para a coluna de legenda.`),Zg()(),Jc(3347,`li`)(3348,`p`)(3349,`code`),Tk(3350,`time`),Zg(),Tk(3351,`: valor de horário.`),Zg(),Jc(3352,`ul`)(3353,`li`),Tk(3354,`Aceita o tipo `),Jc(3355,`em`),Tk(3356,`string`),Zg(),Tk(3357,` nos formatos `),Jc(3358,`strong`),Tk(3359,`'HH:mm:ss'`),Zg(),Tk(3360,` ou `),Jc(3361,`strong`),Tk(3362,`'HH:mm:ss.ffffff'`),Zg(),Tk(3363,`, por exemplo: `),Jc(3364,`code`),Tk(3365,`'23:12:45'`),Zg(),Tk(3366,`.`),Zg()()(),Jc(3367,`li`)(3368,`p`)(3369,`code`),Tk(3370,`cellTemplate`),Zg(),Tk(3371,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Jc(3372,`a`,8),Tk(3373,`PoTableCellTemplate`),Zg(),Tk(3374,`.`),Zg()(),Jc(3375,`li`)(3376,`p`)(3377,`code`),Tk(3378,`columnTemplate`),Zg(),Tk(3379,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Jc(3380,`a`,7),Tk(3381,`PoTableColumnTemplate`),Zg(),Tk(3382,`.`),Zg()()()()(),Jc(3383,`tr`,17)(3384,`td`,18)(3385,`div`,19)(3386,`span`,20),Tk(3387,` visible`),_u(3388,`br`),Zg()()(),Jc(3389,`td`,21)(3390,`code`,22),Tk(3391,`boolean`),Zg()(),Jc(3392,`td`,24)(3393,`em`)(3394,`strong`),Tk(3395,`(opcional)`),Zg()(),Jc(3396,`p`),Tk(3397,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Jc(3398,`strong`),Tk(3399,`gerenciador de colunas`),Zg(),Tk(3400,`.`),Zg(),Jc(3401,`blockquote`)(3402,`p`),Tk(3403,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),Jc(3404,`code`),Tk(3405,`p-max-columns`),Zg(),Tk(3406,`.`),Zg()()()(),Jc(3407,`tr`,17)(3408,`td`,18)(3409,`div`,19)(3410,`span`,20),Tk(3411,` width`),_u(3412,`br`),Zg()()(),Jc(3413,`td`,21)(3414,`code`,31),Tk(3415,`string`),Zg()(),Jc(3416,`td`,24)(3417,`em`)(3418,`strong`),Tk(3419,`(opcional)`),Zg()(),Jc(3420,`p`),Tk(3421,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),Zg(),Jc(3422,`ul`)(3423,`li`),Tk(3424,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),Zg(),Jc(3425,`li`),Tk(3426,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),Zg()()()()(),Jc(3427,`h4`,46)(3428,`code`,5),Tk(3429,`PoTableLiterals`),Zg()(),Jc(3430,`div`,2)(3431,`p`),Tk(3432,`Interface para definição das literais usadas no `),Jc(3433,`code`),Tk(3434,`po-table`),Zg(),Tk(3435,`.`),Zg()(),Jc(3436,`h4`,13),Tk(3437,`Propriedades`),Zg(),Jc(3438,`table`,14)(3439,`tr`,15)(3440,`th`,16),Tk(3441,`Nome`),Zg(),Jc(3442,`th`,16),Tk(3443,`Tipo`),Zg(),Jc(3444,`th`,16),Tk(3445,`Descrição`),Zg()(),Jc(3446,`tr`,17)(3447,`td`,18)(3448,`div`,19)(3449,`span`,20),Tk(3450,` bodyDelete`),_u(3451,`br`),Zg()()(),Jc(3452,`td`,21)(3453,`code`,31),Tk(3454,`string`),Zg()(),Jc(3455,`td`,24)(3456,`em`)(3457,`strong`),Tk(3458,`(opcional)`),Zg()(),Jc(3459,`p`),Tk(3460,`Texto no corpo do Modal de exclusão`),Zg()()(),Jc(3461,`tr`,17)(3462,`td`,18)(3463,`div`,19)(3464,`span`,20),Tk(3465,` cancel`),_u(3466,`br`),Zg()()(),Jc(3467,`td`,21)(3468,`code`,31),Tk(3469,`string`),Zg()(),Jc(3470,`td`,24)(3471,`em`)(3472,`strong`),Tk(3473,`(opcional)`),Zg()(),Jc(3474,`p`),Tk(3475,`Texto no Modal para cancelar a exclusão`),Zg()()(),Jc(3476,`tr`,17)(3477,`td`,18)(3478,`div`,19)(3479,`span`,20),Tk(3480,` columnsManager`),_u(3481,`br`),Zg()()(),Jc(3482,`td`,21)(3483,`code`,31),Tk(3484,`string`),Zg()(),Jc(3485,`td`,24)(3486,`em`)(3487,`strong`),Tk(3488,`(opcional)`),Zg()(),Jc(3489,`p`),Tk(3490,`Texto do `),Jc(3491,`strong`),Tk(3492,`Gerenciador de colunas`),Zg(),Tk(3493,` localizado no canto superior direito da tabela.`),Zg()()(),Jc(3494,`tr`,17)(3495,`td`,18)(3496,`div`,19)(3497,`span`,20),Tk(3498,` completeSubtitle`),_u(3499,`br`),Zg()()(),Jc(3500,`td`,21)(3501,`code`,31),Tk(3502,`string`),Zg()(),Jc(3503,`td`,24)(3504,`em`)(3505,`strong`),Tk(3506,`(opcional)`),Zg()(),Jc(3507,`p`),Tk(3508,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),Zg()()(),Jc(3509,`tr`,17)(3510,`td`,18)(3511,`div`,19)(3512,`span`,20),Tk(3513,` delete`),_u(3514,`br`),Zg()()(),Jc(3515,`td`,21)(3516,`code`,31),Tk(3517,`string`),Zg()(),Jc(3518,`td`,24)(3519,`em`)(3520,`strong`),Tk(3521,`(opcional)`),Zg()(),Jc(3522,`p`),Tk(3523,`Texto no Modal para confirmar a exclusão`),Zg()()(),Jc(3524,`tr`,17)(3525,`td`,18)(3526,`div`,19)(3527,`span`,20),Tk(3528,` deleteApiError`),_u(3529,`br`),Zg()()(),Jc(3530,`td`,21)(3531,`code`,31),Tk(3532,`string`),Zg()(),Jc(3533,`td`,24)(3534,`em`)(3535,`strong`),Tk(3536,`(opcional)`),Zg()(),Jc(3537,`p`),Tk(3538,`Texto de notificação de erro na requisição Delete`),Zg()()(),Jc(3539,`tr`,17)(3540,`td`,18)(3541,`div`,19)(3542,`span`,20),Tk(3543,` deleteSuccessful`),_u(3544,`br`),Zg()()(),Jc(3545,`td`,21)(3546,`code`,31),Tk(3547,`string`),Zg()(),Jc(3548,`td`,24)(3549,`em`)(3550,`strong`),Tk(3551,`(opcional)`),Zg()(),Jc(3552,`p`),Tk(3553,`Texto de notificação de remoção com sucesso`),Zg()()(),Jc(3554,`tr`,17)(3555,`td`,18)(3556,`div`,19)(3557,`span`,20),Tk(3558,` loadMoreData`),_u(3559,`br`),Zg()()(),Jc(3560,`td`,21)(3561,`code`,31),Tk(3562,`string`),Zg()(),Jc(3563,`td`,24)(3564,`em`)(3565,`strong`),Tk(3566,`(opcional)`),Zg()(),Jc(3567,`p`),Tk(3568,`Texto do botão de `),Jc(3569,`strong`),Tk(3570,`Carregar mais resultados`),Zg(),Tk(3571,` localizado no rodapé da tabela.`),Zg()()(),Jc(3572,`tr`,17)(3573,`td`,18)(3574,`div`,19)(3575,`span`,20),Tk(3576,` loadingData`),_u(3577,`br`),Zg()()(),Jc(3578,`td`,21)(3579,`code`,31),Tk(3580,`string`),Zg()(),Jc(3581,`td`,24)(3582,`em`)(3583,`strong`),Tk(3584,`(opcional)`),Zg()(),Jc(3585,`p`),Tk(3586,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),Zg()()(),Jc(3587,`tr`,17)(3588,`td`,18)(3589,`div`,19)(3590,`span`,20),Tk(3591,` multipleItems`),_u(3592,`br`),Zg()()(),Jc(3593,`td`,21)(3594,`code`,31),Tk(3595,`string`),Zg()(),Jc(3596,`td`,24)(3597,`em`)(3598,`strong`),Tk(3599,`(opcional)`),Zg()(),Jc(3600,`p`),Tk(3601,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),Zg()()(),Jc(3602,`tr`,17)(3603,`td`,18)(3604,`div`,19)(3605,`span`,20),Tk(3606,` noColumns`),_u(3607,`br`),Zg()()(),Jc(3608,`td`,21)(3609,`code`,31),Tk(3610,`string`),Zg()(),Jc(3611,`td`,24)(3612,`em`)(3613,`strong`),Tk(3614,`(opcional)`),Zg()(),Jc(3615,`p`),Tk(3616,`Texto exibido quando não existem colunas definidas para a tabela.`),Zg()()(),Jc(3617,`tr`,17)(3618,`td`,18)(3619,`div`,19)(3620,`span`,20),Tk(3621,` noData`),_u(3622,`br`),Zg()()(),Jc(3623,`td`,21)(3624,`code`,31),Tk(3625,`string`),Zg()(),Jc(3626,`td`,24)(3627,`em`)(3628,`strong`),Tk(3629,`(opcional)`),Zg()(),Jc(3630,`p`),Tk(3631,`Texto exibido quando não existem itens para serem exibidos na tabela.`),Zg()()(),Jc(3632,`tr`,17)(3633,`td`,18)(3634,`div`,19)(3635,`span`,20),Tk(3636,` noItem`),_u(3637,`br`),Zg()()(),Jc(3638,`td`,21)(3639,`code`,31),Tk(3640,`string`),Zg()(),Jc(3641,`td`,24)(3642,`em`)(3643,`strong`),Tk(3644,`(opcional)`),Zg()(),Jc(3645,`p`),Tk(3646,`Texto exibido quando nenhum item for selecionado no checkbox.`),Zg()()(),Jc(3647,`tr`,17)(3648,`td`,18)(3649,`div`,19)(3650,`span`,20),Tk(3651,` noVisibleColumn`),_u(3652,`br`),Zg()()(),Jc(3653,`td`,21)(3654,`code`,31),Tk(3655,`string`),Zg()(),Jc(3656,`td`,24)(3657,`em`)(3658,`strong`),Tk(3659,`(opcional)`),Zg()(),Jc(3660,`p`),Tk(3661,`Texto exibido quando não existem colunas visíveis para a tabela.`),Zg()()(),Jc(3662,`tr`,17)(3663,`td`,18)(3664,`div`,19)(3665,`span`,20),Tk(3666,` oneItem`),_u(3667,`br`),Zg()()(),Jc(3668,`td`,21)(3669,`code`,31),Tk(3670,`string`),Zg()(),Jc(3671,`td`,24)(3672,`em`)(3673,`strong`),Tk(3674,`(opcional)`),Zg()(),Jc(3675,`p`),Tk(3676,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),Zg()()(),Jc(3677,`tr`,17)(3678,`td`,18)(3679,`div`,19)(3680,`span`,20),Tk(3681,` searchAiPlaceholder`),_u(3682,`br`),Zg()()(),Jc(3683,`td`,21)(3684,`code`,31),Tk(3685,`string`),Zg()(),Jc(3686,`td`,24)(3687,`em`)(3688,`strong`),Tk(3689,`(opcional)`),Zg()(),Jc(3690,`p`),Tk(3691,`Texto exibido como placeholder padrão no campo de busca por IA (`),Jc(3692,`code`),Tk(3693,`p-search-ai-field`),Zg(),Tk(3694,`) quando nenhum `),Jc(3695,`code`),Tk(3696,`placeholder`),Zg(),Tk(3697,` é informado.`),Zg()()(),Jc(3698,`tr`,17)(3699,`td`,18)(3700,`div`,19)(3701,`span`,20),Tk(3702,` seeCompleteSubtitle`),_u(3703,`br`),Zg()()(),Jc(3704,`td`,21)(3705,`code`,31),Tk(3706,`string`),Zg()(),Jc(3707,`td`,24)(3708,`em`)(3709,`strong`),Tk(3710,`(opcional)`),Zg()(),Jc(3711,`p`),Tk(3712,`Texto do botão `),Jc(3713,`strong`),Tk(3714,`Ver legenda completa`),Zg(),Tk(3715,` que aparece quando o rodapé de legendas é maior que a tabela.`),Zg()()()(),Jc(3716,`h4`,46)(3717,`code`,5),Tk(3718,`PoTableSearchAiField`),Zg()(),Jc(3719,`div`,2)(3720,`p`),Tk(3721,`Interface de configuração da busca por IA integrada ao `),Jc(3722,`code`),Tk(3723,`po-table`),Zg(),Tk(3724,`, utilizada pela
propriedade `),Jc(3725,`code`),Tk(3726,`p-search-ai-field`),Zg(),Tk(3727,`.`),Zg(),Jc(3728,`p`),Tk(3729,`Quando configurada, a tabela renderiza um campo `),Jc(3730,`code`),Tk(3731,`po-search-ai`),Zg(),Tk(3732,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),Jc(3733,`code`),Tk(3734,`po-search`),Zg(),Tk(3735,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),Jc(3736,`code`),Tk(3737,`apply`),Zg(),Tk(3738,`.`),Zg(),Jc(3739,`h4`),Tk(3740,`Endpoint de IA (`),Jc(3741,`code`),Tk(3742,`url`),Zg(),Tk(3743,`)`),Zg(),Jc(3744,`p`),Tk(3745,`O campo `),Jc(3746,`code`),Tk(3747,`url`),Zg(),Tk(3748,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),Jc(3749,`code`),Tk(3750,`po-search-ai`),Zg(),Tk(3751,`: recebe `),Jc(3752,`code`),Tk(3753,`{ query, columns }`),Zg(),Tk(3754,` via `),Jc(3755,`code`),Tk(3756,`POST`),Zg(),Tk(3757,` e responde com
`),Jc(3758,`code`),Tk(3759,`{ filter, description, confidence }`),Zg(),Tk(3760,`.`),Zg(),Jc(3761,`blockquote`)(3762,`p`),Tk(3763,`A integração com a LLM e a guarda de chaves devem ocorrer `),Jc(3764,`strong`),Tk(3765,`no backend`),Zg(),Tk(3766,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),Jc(3767,`a`,40)(3768,`code`),Tk(3769,`po-sample-api`),Zg()(),Tk(3770,`.`),Zg()(),Jc(3771,`h4`),Tk(3772,`Colunas enviadas à IA`),Zg(),Jc(3773,`p`),Tk(3774,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),Jc(3775,`code`),Tk(3776,`p-columns`),Zg(),Tk(3777,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),Jc(3778,`code`),Tk(3779,`searchAiIgnore: true`),Zg(),Tk(3780,`. O campo `),Jc(3781,`code`),Tk(3782,`columns`),Zg(),Tk(3783,` permite sobrescrever esse comportamento.`),Zg(),Jc(3784,`h4`),Tk(3785,`Estratégia de aplicação do filtro (`),Jc(3786,`code`),Tk(3787,`apply`),Zg(),Tk(3788,`)`),Zg(),Jc(3789,`table`)(3790,`thead`)(3791,`tr`)(3792,`th`),Tk(3793,`Valor`),Zg(),Jc(3794,`th`),Tk(3795,`Comportamento`),Zg()()(),Jc(3796,`tbody`)(3797,`tr`)(3798,`td`)(3799,`code`),Tk(3800,`'auto'`),Zg(),Tk(3801,` (padrão)`),Zg(),Jc(3802,`td`),Tk(3803,`Modo serviço: envia `),Jc(3804,`code`),Tk(3805,`$filter`),Zg(),Tk(3806,` ao `),Jc(3807,`code`),Tk(3808,`p-service-api`),Zg(),Tk(3809,`; modo local: aplica o parser OData interno sobre `),Jc(3810,`code`),Tk(3811,`p-items`),Zg(),Tk(3812,`.`),Zg()(),Jc(3813,`tr`)(3814,`td`)(3815,`code`),Tk(3816,`'parser'`),Zg()(),Jc(3817,`td`),Tk(3818,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),Zg()(),Jc(3819,`tr`)(3820,`td`)(3821,`code`),Tk(3822,`'server'`),Zg()(),Jc(3823,`td`),Tk(3824,`Sempre delega o filtro ao `),Jc(3825,`code`),Tk(3826,`p-service-api`),Zg(),Tk(3827,` via `),Jc(3828,`code`),Tk(3829,`$filter`),Zg(),Tk(3830,`.`),Zg()(),Jc(3831,`tr`)(3832,`td`)(3833,`code`),Tk(3834,`'none'`),Zg()(),Jc(3835,`td`),Tk(3836,`Não aplica o filtro; apenas emite `),Jc(3837,`code`),Tk(3838,`p-search-ai-result`),Zg(),Tk(3839,` para o desenvolvedor tratar.`),Zg()(),Jc(3840,`tr`)(3841,`td`)(3842,`code`),Tk(3843,`(result) => void`),Zg()(),Jc(3844,`td`),Tk(3845,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),Zg()()()()(),Jc(3846,`h4`,13),Tk(3847,`Propriedades`),Zg(),Jc(3848,`table`,14)(3849,`tr`,15)(3850,`th`,16),Tk(3851,`Nome`),Zg(),Jc(3852,`th`,16),Tk(3853,`Tipo`),Zg(),Jc(3854,`th`,16),Tk(3855,`Descrição`),Zg()(),Jc(3856,`tr`,17)(3857,`td`,18)(3858,`div`,19)(3859,`span`,20),Tk(3860,` apply`),_u(3861,`br`),Zg()()(),Jc(3862,`td`,21)(3863,`code`,107),Tk(3864,`'auto' `),Zg(),Jc(3865,`code`,108),Tk(3866,` 'parser' `),Zg(),Jc(3867,`code`,109),Tk(3868,` 'server' `),Zg(),Jc(3869,`code`,110),Tk(3870,` 'none' `),Zg(),Jc(3871,`code`,111),Tk(3872,` ((result: PoSearchAiResult) => void)`),Zg()(),Jc(3873,`td`,24)(3874,`em`)(3875,`strong`),Tk(3876,`(opcional)`),Zg()(),Jc(3877,`p`),Tk(3878,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),Zg(),Jc(3879,`ul`)(3880,`li`)(3881,`code`),Tk(3882,`'auto'`),Zg(),Jc(3883,`em`),Tk(3884,`(padrão)`),Zg(),Tk(3885,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),Jc(3886,`code`),Tk(3887,`$filter`),Zg(),Tk(3888,` ao `),Jc(3889,`code`),Tk(3890,`p-service-api`),Zg(),Tk(3891,`; modo local usa o parser
OData interno sobre `),Jc(3892,`code`),Tk(3893,`p-items`),Zg(),Tk(3894,`.`),Zg(),Jc(3895,`li`)(3896,`code`),Tk(3897,`'parser'`),Zg(),Tk(3898,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),Zg(),Jc(3899,`li`)(3900,`code`),Tk(3901,`'server'`),Zg(),Tk(3902,`: sempre envia `),Jc(3903,`code`),Tk(3904,`$filter`),Zg(),Tk(3905,` ao `),Jc(3906,`code`),Tk(3907,`p-service-api`),Zg(),Tk(3908,`, independentemente
do modo da tabela.`),Zg(),Jc(3909,`li`)(3910,`code`),Tk(3911,`'none'`),Zg(),Tk(3912,`: não aplica o filtro; apenas emite `),Jc(3913,`code`),Tk(3914,`p-search-ai-result`),Zg(),Tk(3915,`.`),Zg(),Jc(3916,`li`)(3917,`code`),Tk(3918,`(result: PoSearchAiResult) => void`),Zg(),Tk(3919,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),Zg()()()(),Jc(3920,`tr`,17)(3921,`td`,18)(3922,`div`,19)(3923,`span`,20),Tk(3924,` columns`),_u(3925,`br`),Zg()()(),Jc(3926,`td`,21)(3927,`code`,112),Tk(3928,`Array<PoSearchAiColumn>`),Zg()(),Jc(3929,`td`,24)(3930,`em`)(3931,`strong`),Tk(3932,`(opcional)`),Zg()(),Jc(3933,`p`),Tk(3934,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),Jc(3935,`code`),Tk(3936,`p-columns`),Zg(),Tk(3937,` da tabela, excluindo colunas com
`),Jc(3938,`code`),Tk(3939,`visible: false`),Zg(),Tk(3940,` ou `),Jc(3941,`code`),Tk(3942,`searchAiIgnore: true`),Zg(),Tk(3943,`.`),Zg()()(),Jc(3944,`tr`,17)(3945,`td`,18)(3946,`div`,19)(3947,`span`,20),Tk(3948,` literals`),_u(3949,`br`),Zg()()(),Jc(3950,`td`,21)(3951,`code`,113),Tk(3952,`PoSearchAiLiterals`),Zg()(),Jc(3953,`td`,24)(3954,`em`)(3955,`strong`),Tk(3956,`(opcional)`),Zg()(),Jc(3957,`p`),Tk(3958,`Objeto com os literais usados pelo `),Jc(3959,`code`),Tk(3960,`po-search-ai`),Zg(),Tk(3961,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),Zg()()(),Jc(3962,`tr`,17)(3963,`td`,18)(3964,`div`,19)(3965,`span`,20),Tk(3966,` minConfidence`),_u(3967,`br`),Zg()()(),Jc(3968,`td`,21)(3969,`code`,35),Tk(3970,`number`),Zg()(),Jc(3971,`td`,24)(3972,`em`)(3973,`strong`),Tk(3974,`(opcional)`),Zg()(),Jc(3975,`p`),Tk(3976,`Nível mínimo de confiança (`),Jc(3977,`code`),Tk(3978,`0.0`),Zg(),Tk(3979,` a `),Jc(3980,`code`),Tk(3981,`1.0`),Zg(),Tk(3982,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),Jc(3983,`code`),Tk(3984,`p-search-ai-low-confidence`),Zg(),Tk(3985,` é emitido em vez de `),Jc(3986,`code`),Tk(3987,`p-search-ai-result`),Zg(),Tk(3988,`.`),Zg()()(),Jc(3989,`tr`,17)(3990,`td`,18)(3991,`div`,19)(3992,`span`,20),Tk(3993,` placeholder`),_u(3994,`br`),Zg()()(),Jc(3995,`td`,21)(3996,`code`,31),Tk(3997,`string`),Zg()(),Jc(3998,`td`,24)(3999,`em`)(4e3,`strong`),Tk(4001,`(opcional)`),Zg()(),Jc(4002,`p`),Tk(4003,`Texto exibido como placeholder no campo de busca por IA.`),Zg()()(),Jc(4004,`tr`,17)(4005,`td`,18)(4006,`div`,19)(4007,`span`,20),Tk(4008,` timeout`),_u(4009,`br`),Zg()()(),Jc(4010,`td`,21)(4011,`code`,35),Tk(4012,`number`),Zg()(),Jc(4013,`td`,24)(4014,`em`)(4015,`strong`),Tk(4016,`(opcional)`),Zg()(),Jc(4017,`p`),Tk(4018,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),Zg()()(),Jc(4019,`tr`,17)(4020,`td`,18)(4021,`div`,19)(4022,`span`,20),Tk(4023,` url`),_u(4024,`br`),Zg()()(),Jc(4025,`td`,21)(4026,`code`,31),Tk(4027,`string`),Zg()(),Jc(4028,`td`,24)(4029,`p`),Tk(4030,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),Jc(4031,`code`),Tk(4032,`po-search-ai`),Zg(),Tk(4033,` via `),Jc(4034,`code`),Tk(4035,`p-url`),Zg(),Tk(4036,`.`),Zg(),Jc(4037,`p`),Tk(4038,`O endpoint deve seguir o contrato do backend de referência (`),Jc(4039,`code`),Tk(4040,`po-sample-api`),Zg(),Tk(4041,`):`),Zg(),Jc(4042,`ul`)(4043,`li`),Tk(4044,`Recebe: `),Jc(4045,`code`),Tk(4046,`POST { query: string, columns: PoSearchAiColumn[] }`),Zg()(),Jc(4047,`li`),Tk(4048,`Responde: `),Jc(4049,`code`),Tk(4050,`{ filter: string, description: string, confidence: number }`),Zg()()()()()(),Jc(4051,`h4`,46)(4052,`code`,5),Tk(4053,`PoTableColumnIcon`),Zg()(),Jc(4054,`div`,2)(4055,`p`),_u(4056,`a`,114),Zg(),Jc(4057,`p`),Tk(4058,`Interface que define a coluna com ícone(s) do `),Jc(4059,`code`),Tk(4060,`po-table`),Zg(),Tk(4061,`.`),Zg()(),Jc(4062,`h4`,13),Tk(4063,`Propriedades`),Zg(),Jc(4064,`table`,14)(4065,`tr`,15)(4066,`th`,16),Tk(4067,`Nome`),Zg(),Jc(4068,`th`,16),Tk(4069,`Tipo`),Zg(),Jc(4070,`th`,16),Tk(4071,`Descrição`),Zg()(),Jc(4072,`tr`,17)(4073,`td`,18)(4074,`div`,19)(4075,`span`,20),Tk(4076,` action`),_u(4077,`br`),Zg()()(),Jc(4078,`td`,21)(4079,`code`,47),Tk(4080,`Function`),Zg()(),Jc(4081,`td`,24)(4082,`em`)(4083,`strong`),Tk(4084,`(opcional)`),Zg()(),Jc(4085,`p`),Tk(4086,`Define a ação que será executada ao clicar no ícone.`),Zg()()(),Jc(4087,`tr`,17)(4088,`td`,18)(4089,`div`,19)(4090,`span`,20),Tk(4091,` color`),_u(4092,`br`),Zg()()(),Jc(4093,`td`,21)(4094,`code`,31),Tk(4095,`string `),Zg(),Jc(4096,`code`,47),Tk(4097,` Function`),Zg()(),Jc(4098,`td`,24)(4099,`em`)(4100,`strong`),Tk(4101,`(opcional)`),Zg()(),Jc(4102,`p`),Tk(4103,`Define a cor do ícone.`),Zg(),Jc(4104,`p`),Tk(4105,`Valores válidos:`),Zg(),Jc(4106,`ul`)(4107,`li`),_u(4108,`span`,54),Jc(4109,`code`),Tk(4110,`color-01`),Zg()(),Jc(4111,`li`),_u(4112,`span`,55),Jc(4113,`code`),Tk(4114,`color-02`),Zg()(),Jc(4115,`li`),_u(4116,`span`,56),Jc(4117,`code`),Tk(4118,`color-03`),Zg()(),Jc(4119,`li`),_u(4120,`span`,57),Jc(4121,`code`),Tk(4122,`color-04`),Zg()(),Jc(4123,`li`),_u(4124,`span`,58),Jc(4125,`code`),Tk(4126,`color-05`),Zg()(),Jc(4127,`li`),_u(4128,`span`,59),Jc(4129,`code`),Tk(4130,`color-06`),Zg()(),Jc(4131,`li`),_u(4132,`span`,60),Jc(4133,`code`),Tk(4134,`color-07`),Zg()(),Jc(4135,`li`),_u(4136,`span`,61),Jc(4137,`code`),Tk(4138,`color-08`),Zg()(),Jc(4139,`li`),_u(4140,`span`,62),Jc(4141,`code`),Tk(4142,`color-09`),Zg()(),Jc(4143,`li`),_u(4144,`span`,63),Jc(4145,`code`),Tk(4146,`color-10`),Zg()(),Jc(4147,`li`),_u(4148,`span`,64),Jc(4149,`code`),Tk(4150,`color-11`),Zg()(),Jc(4151,`li`),_u(4152,`span`,65),Jc(4153,`code`),Tk(4154,`color-12`),Zg()()(),Jc(4155,`blockquote`)(4156,`p`),Tk(4157,`Também é possível utilizar as 35 cores da paleta `),Jc(4158,`strong`),Tk(4159,`Caption Tag Colors`),Zg(),Tk(4160,`:`),Zg()(),Jc(4161,`ul`)(4162,`li`),_u(4163,`span`,66),Jc(4164,`code`),Tk(4165,`caption-tag-01`),Zg(),_u(4166,`span`,67),Jc(4167,`code`),Tk(4168,`caption-tag-02`),Zg(),_u(4169,`span`,68),Jc(4170,`code`),Tk(4171,`caption-tag-03`),Zg(),_u(4172,`span`,69),Jc(4173,`code`),Tk(4174,`caption-tag-04`),Zg(),_u(4175,`span`,70),Jc(4176,`code`),Tk(4177,`caption-tag-05`),Zg()(),Jc(4178,`li`),_u(4179,`span`,71),Jc(4180,`code`),Tk(4181,`caption-tag-06`),Zg(),_u(4182,`span`,72),Jc(4183,`code`),Tk(4184,`caption-tag-07`),Zg(),_u(4185,`span`,73),Jc(4186,`code`),Tk(4187,`caption-tag-08`),Zg(),_u(4188,`span`,74),Jc(4189,`code`),Tk(4190,`caption-tag-09`),Zg(),_u(4191,`span`,75),Jc(4192,`code`),Tk(4193,`caption-tag-10`),Zg()(),Jc(4194,`li`),_u(4195,`span`,76),Jc(4196,`code`),Tk(4197,`caption-tag-11`),Zg(),_u(4198,`span`,77),Jc(4199,`code`),Tk(4200,`caption-tag-12`),Zg(),_u(4201,`span`,78),Jc(4202,`code`),Tk(4203,`caption-tag-13`),Zg(),_u(4204,`span`,79),Jc(4205,`code`),Tk(4206,`caption-tag-14`),Zg(),_u(4207,`span`,80),Jc(4208,`code`),Tk(4209,`caption-tag-15`),Zg()(),Jc(4210,`li`),_u(4211,`span`,81),Jc(4212,`code`),Tk(4213,`caption-tag-16`),Zg(),_u(4214,`span`,82),Jc(4215,`code`),Tk(4216,`caption-tag-17`),Zg(),_u(4217,`span`,83),Jc(4218,`code`),Tk(4219,`caption-tag-18`),Zg(),_u(4220,`span`,84),Jc(4221,`code`),Tk(4222,`caption-tag-19`),Zg(),_u(4223,`span`,85),Jc(4224,`code`),Tk(4225,`caption-tag-20`),Zg()(),Jc(4226,`li`),_u(4227,`span`,86),Jc(4228,`code`),Tk(4229,`caption-tag-21`),Zg(),_u(4230,`span`,87),Jc(4231,`code`),Tk(4232,`caption-tag-22`),Zg(),_u(4233,`span`,88),Jc(4234,`code`),Tk(4235,`caption-tag-23`),Zg(),_u(4236,`span`,89),Jc(4237,`code`),Tk(4238,`caption-tag-24`),Zg(),_u(4239,`span`,90),Jc(4240,`code`),Tk(4241,`caption-tag-25`),Zg()(),Jc(4242,`li`),_u(4243,`span`,91),Jc(4244,`code`),Tk(4245,`caption-tag-26`),Zg(),_u(4246,`span`,92),Jc(4247,`code`),Tk(4248,`caption-tag-27`),Zg(),_u(4249,`span`,93),Jc(4250,`code`),Tk(4251,`caption-tag-28`),Zg(),_u(4252,`span`,94),Jc(4253,`code`),Tk(4254,`caption-tag-29`),Zg(),_u(4255,`span`,95),Jc(4256,`code`),Tk(4257,`caption-tag-30`),Zg()(),Jc(4258,`li`),_u(4259,`span`,96),Jc(4260,`code`),Tk(4261,`caption-tag-31`),Zg(),_u(4262,`span`,97),Jc(4263,`code`),Tk(4264,`caption-tag-32`),Zg(),_u(4265,`span`,98),Jc(4266,`code`),Tk(4267,`caption-tag-33`),Zg(),_u(4268,`span`,99),Jc(4269,`code`),Tk(4270,`caption-tag-34`),Zg(),_u(4271,`span`,100),Jc(4272,`code`),Tk(4273,`caption-tag-35`),Zg()()()()(),Jc(4274,`tr`,17)(4275,`td`,18)(4276,`div`,19)(4277,`span`,20),Tk(4278,` disabled`),_u(4279,`br`),Zg()()(),Jc(4280,`td`,21)(4281,`code`,47),Tk(4282,`Function`),Zg()(),Jc(4283,`td`,24)(4284,`em`)(4285,`strong`),Tk(4286,`(opcional)`),Zg()(),Jc(4287,`p`),Tk(4288,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),Zg()()(),Jc(4289,`tr`,17)(4290,`td`,18)(4291,`div`,19)(4292,`span`,20),Tk(4293,` icon`),_u(4294,`br`),Zg()()(),Jc(4295,`td`,21)(4296,`code`,31),Tk(4297,`string `),Zg(),Jc(4298,`code`,48),Tk(4299,` TemplateRef<void>`),Zg()(),Jc(4300,`td`,24)(4301,`em`)(4302,`strong`),Tk(4303,`(opcional)`),Zg()(),Jc(4304,`p`),Tk(4305,`É possível usar qualquer um dos ícones da `),Jc(4306,`a`,26),Tk(4307,`Biblioteca de ícones`),Zg(),Tk(4308,`. conforme exemplo abaixo:`),Zg(),Jc(4309,`pre`)(4310,`code`),Tk(4311,`[ { icon: 'an an-plus' } ]
`),Zg()(),Jc(4312,`p`),Tk(4313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Zg(),Jc(4314,`pre`)(4315,`code`),Tk(4316,`[ {  icon: 'fas fa-plus' } ]
`),Zg()(),Jc(4317,`p`),Tk(4318,`Outra opção seria a customização do ícone através do `),Jc(4319,`code`),Tk(4320,`TemplateRef`),Zg(),Tk(4321,`, conforme exemplo abaixo:
`),Jc(4322,`code`),Tk(4323,`component.html`),Zg(),Tk(4324,`:`),Zg(),Jc(4325,`pre`)(4326,`code`),Tk(4327,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),Zg()(),Jc(4328,`p`)(4329,`code`),Tk(4330,`component.ts`),Zg(),Tk(4331,`:`),Zg(),Jc(4332,`pre`)(4333,`code`),Tk(4334,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),Zg()(),Jc(4335,`blockquote`)(4336,`p`),Tk(4337,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),Jc(4338,`code`),Tk(4339,`value`),Zg(),Tk(4340,`.`),Zg()()()(),Jc(4341,`tr`,17)(4342,`td`,18)(4343,`div`,19)(4344,`span`,20),Tk(4345,` tooltip`),_u(4346,`br`),Zg()()(),Jc(4347,`td`,21)(4348,`code`,31),Tk(4349,`string`),Zg()(),Jc(4350,`td`,24)(4351,`em`)(4352,`strong`),Tk(4353,`(opcional)`),Zg()(),Jc(4354,`p`),Tk(4355,`Define um texto de ajuda que será exibido ao passar o `),Jc(4356,`em`),Tk(4357,`mouse`),Zg(),Tk(4358,` em cima do ícone.`),Zg()()(),Jc(4359,`tr`,17)(4360,`td`,18)(4361,`div`,19)(4362,`span`,20),Tk(4363,` value`),_u(4364,`br`),Zg()()(),Jc(4365,`td`,21)(4366,`code`,31),Tk(4367,`string`),Zg()(),Jc(4368,`td`,24)(4369,`p`),Tk(4370,`Define o valor do ícone que será exibido.`),Zg()()()(),Jc(4371,`h4`,46)(4372,`code`,5),Tk(4373,`PoTableColumnLabel`),Zg()(),Jc(4374,`div`,2)(4375,`p`),Tk(4376,`Interface para configuração das colunas de labels do `),Jc(4377,`code`),Tk(4378,`po-table`),Zg(),Tk(4379,`.`),Zg()(),Jc(4380,`h4`,13),Tk(4381,`Propriedades`),Zg(),Jc(4382,`table`,14)(4383,`tr`,15)(4384,`th`,16),Tk(4385,`Nome`),Zg(),Jc(4386,`th`,16),Tk(4387,`Tipo`),Zg(),Jc(4388,`th`,16),Tk(4389,`Descrição`),Zg()(),Jc(4390,`tr`,17)(4391,`td`,18)(4392,`div`,19)(4393,`span`,20),Tk(4394,` color`),_u(4395,`br`),Zg()()(),Jc(4396,`td`,21)(4397,`code`,31),Tk(4398,`string`),Zg()(),Jc(4399,`td`,24)(4400,`em`)(4401,`strong`),Tk(4402,`(opcional)`),Zg()(),Jc(4403,`p`),Tk(4404,`Define a cor do label.`),Zg(),Jc(4405,`p`),Tk(4406,`Valores válidos:`),Zg(),Jc(4407,`ul`)(4408,`li`),_u(4409,`span`,54),Jc(4410,`code`),Tk(4411,`color-01`),Zg()(),Jc(4412,`li`),_u(4413,`span`,55),Jc(4414,`code`),Tk(4415,`color-02`),Zg()(),Jc(4416,`li`),_u(4417,`span`,56),Jc(4418,`code`),Tk(4419,`color-03`),Zg()(),Jc(4420,`li`),_u(4421,`span`,57),Jc(4422,`code`),Tk(4423,`color-04`),Zg()(),Jc(4424,`li`),_u(4425,`span`,58),Jc(4426,`code`),Tk(4427,`color-05`),Zg()(),Jc(4428,`li`),_u(4429,`span`,59),Jc(4430,`code`),Tk(4431,`color-06`),Zg()(),Jc(4432,`li`),_u(4433,`span`,60),Jc(4434,`code`),Tk(4435,`color-07`),Zg()(),Jc(4436,`li`),_u(4437,`span`,61),Jc(4438,`code`),Tk(4439,`color-08`),Zg()(),Jc(4440,`li`),_u(4441,`span`,62),Jc(4442,`code`),Tk(4443,`color-09`),Zg()(),Jc(4444,`li`),_u(4445,`span`,63),Jc(4446,`code`),Tk(4447,`color-10`),Zg()(),Jc(4448,`li`),_u(4449,`span`,64),Jc(4450,`code`),Tk(4451,`color-11`),Zg()(),Jc(4452,`li`),_u(4453,`span`,65),Jc(4454,`code`),Tk(4455,`color-12`),Zg()()(),Jc(4456,`blockquote`)(4457,`p`),Tk(4458,`Também é possível utilizar as 35 cores da paleta `),Jc(4459,`strong`),Tk(4460,`Caption Tag Colors`),Zg(),Tk(4461,`:`),Zg()(),Jc(4462,`ul`)(4463,`li`),_u(4464,`span`,66),Jc(4465,`code`),Tk(4466,`caption-tag-01`),Zg(),_u(4467,`span`,67),Jc(4468,`code`),Tk(4469,`caption-tag-02`),Zg(),_u(4470,`span`,68),Jc(4471,`code`),Tk(4472,`caption-tag-03`),Zg(),_u(4473,`span`,69),Jc(4474,`code`),Tk(4475,`caption-tag-04`),Zg(),_u(4476,`span`,70),Jc(4477,`code`),Tk(4478,`caption-tag-05`),Zg()(),Jc(4479,`li`),_u(4480,`span`,71),Jc(4481,`code`),Tk(4482,`caption-tag-06`),Zg(),_u(4483,`span`,72),Jc(4484,`code`),Tk(4485,`caption-tag-07`),Zg(),_u(4486,`span`,73),Jc(4487,`code`),Tk(4488,`caption-tag-08`),Zg(),_u(4489,`span`,74),Jc(4490,`code`),Tk(4491,`caption-tag-09`),Zg(),_u(4492,`span`,75),Jc(4493,`code`),Tk(4494,`caption-tag-10`),Zg()(),Jc(4495,`li`),_u(4496,`span`,76),Jc(4497,`code`),Tk(4498,`caption-tag-11`),Zg(),_u(4499,`span`,77),Jc(4500,`code`),Tk(4501,`caption-tag-12`),Zg(),_u(4502,`span`,78),Jc(4503,`code`),Tk(4504,`caption-tag-13`),Zg(),_u(4505,`span`,79),Jc(4506,`code`),Tk(4507,`caption-tag-14`),Zg(),_u(4508,`span`,80),Jc(4509,`code`),Tk(4510,`caption-tag-15`),Zg()(),Jc(4511,`li`),_u(4512,`span`,81),Jc(4513,`code`),Tk(4514,`caption-tag-16`),Zg(),_u(4515,`span`,82),Jc(4516,`code`),Tk(4517,`caption-tag-17`),Zg(),_u(4518,`span`,83),Jc(4519,`code`),Tk(4520,`caption-tag-18`),Zg(),_u(4521,`span`,84),Jc(4522,`code`),Tk(4523,`caption-tag-19`),Zg(),_u(4524,`span`,85),Jc(4525,`code`),Tk(4526,`caption-tag-20`),Zg()(),Jc(4527,`li`),_u(4528,`span`,86),Jc(4529,`code`),Tk(4530,`caption-tag-21`),Zg(),_u(4531,`span`,87),Jc(4532,`code`),Tk(4533,`caption-tag-22`),Zg(),_u(4534,`span`,88),Jc(4535,`code`),Tk(4536,`caption-tag-23`),Zg(),_u(4537,`span`,89),Jc(4538,`code`),Tk(4539,`caption-tag-24`),Zg(),_u(4540,`span`,90),Jc(4541,`code`),Tk(4542,`caption-tag-25`),Zg()(),Jc(4543,`li`),_u(4544,`span`,91),Jc(4545,`code`),Tk(4546,`caption-tag-26`),Zg(),_u(4547,`span`,92),Jc(4548,`code`),Tk(4549,`caption-tag-27`),Zg(),_u(4550,`span`,93),Jc(4551,`code`),Tk(4552,`caption-tag-28`),Zg(),_u(4553,`span`,94),Jc(4554,`code`),Tk(4555,`caption-tag-29`),Zg(),_u(4556,`span`,95),Jc(4557,`code`),Tk(4558,`caption-tag-30`),Zg()(),Jc(4559,`li`),_u(4560,`span`,96),Jc(4561,`code`),Tk(4562,`caption-tag-31`),Zg(),_u(4563,`span`,97),Jc(4564,`code`),Tk(4565,`caption-tag-32`),Zg(),_u(4566,`span`,98),Jc(4567,`code`),Tk(4568,`caption-tag-33`),Zg(),_u(4569,`span`,99),Jc(4570,`code`),Tk(4571,`caption-tag-34`),Zg(),_u(4572,`span`,100),Jc(4573,`code`),Tk(4574,`caption-tag-35`),Zg()()(),Jc(4575,`p`),Tk(4576,`Exemplo de uso:`),Zg(),Jc(4577,`pre`)(4578,`code`),Tk(4579,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),Zg()()()(),Jc(4580,`tr`,17)(4581,`td`,18)(4582,`div`,19)(4583,`span`,20),Tk(4584,` icon`),_u(4585,`br`),Zg()()(),Jc(4586,`td`,21)(4587,`code`,22),Tk(4588,`boolean `),Zg(),Jc(4589,`code`,31),Tk(4590,` string `),Zg(),Jc(4591,`code`,48),Tk(4592,` TemplateRef<void>`),Zg()(),Jc(4593,`td`,24)(4594,`em`)(4595,`strong`),Tk(4596,`(opcional)`),Zg()(),Jc(4597,`p`),Tk(4598,`Define ou ativa um ícone que será exibido ao lado do valor da `),Jc(4599,`em`),Tk(4600,`tag`),Zg(),Tk(4601,`.`),Zg(),Jc(4602,`p`),Tk(4603,`Quando `),Jc(4604,`code`),Tk(4605,`p-type`),Zg(),Tk(4606,` estiver definida, basta informar um valor igual a `),Jc(4607,`code`),Tk(4608,`true`),Zg(),Tk(4609,` para que o ícone seja exibido conforme descrições abaixo:`),Zg(),Jc(4610,`ul`)(4611,`li`),_u(4612,`span`,115),Tk(4613,` - `),Jc(4614,`code`),Tk(4615,`success`),Zg()(),Jc(4616,`li`),_u(4617,`span`,116),Tk(4618,` - `),Jc(4619,`code`),Tk(4620,`warning`),Zg()(),Jc(4621,`li`),_u(4622,`span`,117),Tk(4623,` - `),Jc(4624,`code`),Tk(4625,`danger`),Zg()(),Jc(4626,`li`),_u(4627,`span`,118),Tk(4628,` - `),Jc(4629,`code`),Tk(4630,`info`),Zg()()(),Jc(4631,`p`),Tk(4632,`Também É possível usar qualquer um dos ícones da `),Jc(4633,`a`,26),Tk(4634,`Biblioteca de ícones`),Zg(),Tk(4635,`. conforme exemplo abaixo:`),Zg(),Jc(4636,`pre`)(4637,`code`),Tk(4638,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),Zg()(),Jc(4639,`p`),Tk(4640,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(4641,`em`),Tk(4642,`Font Awesome`),Zg(),Tk(4643,`, da seguinte forma:`),Zg(),Jc(4644,`pre`)(4645,`code`),Tk(4646,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),Zg()(),Jc(4647,`p`),Tk(4648,`Outra opção seria a customização do ícone através do `),Jc(4649,`code`),Tk(4650,`TemplateRef`),Zg(),Tk(4651,`, conforme exemplo abaixo:`),Zg(),Jc(4652,`pre`)(4653,`code`),Tk(4654,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(4655,`blockquote`)(4656,`p`),Tk(4657,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(4658,`code`),Tk(4659,`font-size: inherit`),Zg(),Tk(4660,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(4661,`tr`,17)(4662,`td`,18)(4663,`div`,19)(4664,`span`,20),Tk(4665,` label`),_u(4666,`br`),Zg()()(),Jc(4667,`td`,21)(4668,`code`,31),Tk(4669,`string`),Zg()(),Jc(4670,`td`,24)(4671,`p`),Tk(4672,`Texto que será exibido na coluna.`),Zg()()(),Jc(4673,`tr`,17)(4674,`td`,18)(4675,`div`,19)(4676,`span`,20),Tk(4677,` textColor`),_u(4678,`br`),Zg()()(),Jc(4679,`td`,21)(4680,`code`,31),Tk(4681,`string`),Zg()(),Jc(4682,`td`,24)(4683,`em`)(4684,`strong`),Tk(4685,`(opcional)`),Zg()(),Jc(4686,`p`),Tk(4687,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),Zg(),Jc(4688,`ul`)(4689,`li`)(4690,`p`),Tk(4691,`Hexadeximal, por exemplo `),Jc(4692,`code`),Tk(4693,`#c64840`),Zg(),Tk(4694,`;`),Zg()(),Jc(4695,`li`)(4696,`p`),Tk(4697,`RGB, como `),Jc(4698,`code`),Tk(4699,`rgb(0, 0, 165)`),Zg(),Tk(4700,`;`),Zg()(),Jc(4701,`li`)(4702,`p`),Tk(4703,`O nome da cor, por exemplo `),Jc(4704,`code`),Tk(4705,`blue`),Zg(),Tk(4706,`;`),Zg()(),Jc(4707,`li`)(4708,`p`),Tk(4709,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Zg(),Jc(4710,`ul`)(4711,`li`),_u(4712,`span`,54),Jc(4713,`code`),Tk(4714,`color-01`),Zg()(),Jc(4715,`li`),_u(4716,`span`,55),Jc(4717,`code`),Tk(4718,`color-02`),Zg()(),Jc(4719,`li`),_u(4720,`span`,56),Jc(4721,`code`),Tk(4722,`color-03`),Zg()(),Jc(4723,`li`),_u(4724,`span`,57),Jc(4725,`code`),Tk(4726,`color-04`),Zg()(),Jc(4727,`li`),_u(4728,`span`,58),Jc(4729,`code`),Tk(4730,`color-05`),Zg()(),Jc(4731,`li`),_u(4732,`span`,59),Jc(4733,`code`),Tk(4734,`color-06`),Zg()(),Jc(4735,`li`),_u(4736,`span`,60),Jc(4737,`code`),Tk(4738,`color-07`),Zg()(),Jc(4739,`li`),_u(4740,`span`,61),Jc(4741,`code`),Tk(4742,`color-08`),Zg()(),Jc(4743,`li`),_u(4744,`span`,62),Jc(4745,`code`),Tk(4746,`color-09`),Zg()(),Jc(4747,`li`),_u(4748,`span`,63),Jc(4749,`code`),Tk(4750,`color-10`),Zg()(),Jc(4751,`li`),_u(4752,`span`,64),Jc(4753,`code`),Tk(4754,`color-11`),Zg()(),Jc(4755,`li`),_u(4756,`span`,65),Jc(4757,`code`),Tk(4758,`color-12`),Zg()()()(),Jc(4759,`li`)(4760,`p`),Tk(4761,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),Zg()()(),Jc(4762,`blockquote`)(4763,`p`)(4764,`strong`),Tk(4765,`Atenção:`),Zg(),Tk(4766,` A propriedade `),Jc(4767,`code`),Tk(4768,`p-type`),Zg(),Tk(4769,` sobrepõe esta definição.`),Zg()(),Jc(4770,`blockquote`)(4771,`p`)(4772,`strong`),Tk(4773,`Atenção:`),Zg(),Tk(4774,` As cores da paleta `),Jc(4775,`strong`),Tk(4776,`Caption Tag Colors`),Zg(),Tk(4777,` (`),Jc(4778,`code`),Tk(4779,`caption-tag-01`),Zg(),Tk(4780,` a `),Jc(4781,`code`),Tk(4782,`caption-tag-35`),Zg(),Tk(4783,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),Zg()()()(),Jc(4784,`tr`,17)(4785,`td`,18)(4786,`div`,19)(4787,`span`,20),Tk(4788,` tooltip`),_u(4789,`br`),Zg()()(),Jc(4790,`td`,21)(4791,`code`,31),Tk(4792,`string`),Zg()(),Jc(4793,`td`,24)(4794,`em`)(4795,`strong`),Tk(4796,`(opcional)`),Zg()(),Jc(4797,`p`),Tk(4798,`Define um texto de ajuda que será exibido ao passar o `),Jc(4799,`em`),Tk(4800,`mouse`),Zg(),Tk(4801,` em cima do `),Jc(4802,`em`),Tk(4803,`label`),Zg(),Tk(4804,`.`),Zg(),Jc(4805,`blockquote`)(4806,`p`),Tk(4807,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),Zg()()()(),Jc(4808,`tr`,17)(4809,`td`,18)(4810,`div`,19)(4811,`span`,20),Tk(4812,` type`),_u(4813,`br`),Zg()()(),Jc(4814,`td`,21)(4815,`code`,119),Tk(4816,`PoTagType`),Zg()(),Jc(4817,`td`,24)(4818,`em`)(4819,`strong`),Tk(4820,`(opcional)`),Zg()(),Jc(4821,`p`),Tk(4822,`Define o tipo da `),Jc(4823,`em`),Tk(4824,`tag`),Zg(),Tk(4825,`.`),Zg(),Jc(4826,`p`),Tk(4827,`Valores válidos:`),Zg(),Jc(4828,`ul`)(4829,`li`)(4830,`code`),Tk(4831,`success`),Zg(),Tk(4832,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Zg(),Jc(4833,`li`)(4834,`code`),Tk(4835,`warning`),Zg(),Tk(4836,`: cor amarela que representa aviso ou advertência.`),Zg(),Jc(4837,`li`)(4838,`code`),Tk(4839,`danger`),Zg(),Tk(4840,`: cor vermelha para erro ou aviso crítico.`),Zg(),Jc(4841,`li`)(4842,`code`),Tk(4843,`info`),Zg(),Tk(4844,`: cor cinza escuro que caracteriza conteúdo informativo.`),Zg()(),Jc(4845,`blockquote`)(4846,`p`),Tk(4847,`Quando esta propriedade for definida, irá sobrepor a definição de `),Jc(4848,`code`),Tk(4849,`p-color`),Zg(),Tk(4850,` e `),Jc(4851,`code`),Tk(4852,`p-icon`),Zg(),Tk(4853,` somente será exibido caso seja `),Jc(4854,`code`),Tk(4855,`true`),Zg(),Tk(4856,`.`),Zg()()()(),Jc(4857,`tr`,17)(4858,`td`,18)(4859,`div`,19)(4860,`span`,20),Tk(4861,` value`),_u(4862,`br`),Zg()()(),Jc(4863,`td`,21)(4864,`code`,31),Tk(4865,`string `),Zg(),Jc(4866,`code`,35),Tk(4867,` number`),Zg()(),Jc(4868,`td`,24)(4869,`p`),Tk(4870,`Valor que será usado como referência para exibição do conteúdo na coluna.`),Zg()()()(),Jc(4871,`h4`,46)(4872,`code`,5),Tk(4873,`PoTableDetailColumn`),Zg()(),Jc(4874,`div`,2)(4875,`p`),Tk(4876,`Interface para configuração das colunas do `),Jc(4877,`code`),Tk(4878,`po-table-detail`),Zg(),Tk(4879,`.`),Zg()(),Jc(4880,`h4`,13),Tk(4881,`Propriedades`),Zg(),Jc(4882,`table`,14)(4883,`tr`,15)(4884,`th`,16),Tk(4885,`Nome`),Zg(),Jc(4886,`th`,16),Tk(4887,`Tipo`),Zg(),Jc(4888,`th`,16),Tk(4889,`Descrição`),Zg()(),Jc(4890,`tr`,17)(4891,`td`,18)(4892,`div`,19)(4893,`span`,20),Tk(4894,` format`),_u(4895,`br`),Zg()()(),Jc(4896,`td`,21)(4897,`code`,31),Tk(4898,`string`),Zg()(),Jc(4899,`td`,24)(4900,`em`)(4901,`strong`),Tk(4902,`(opcional)`),Zg()(),Jc(4903,`p`),Tk(4904,`Formato de exibição do valor da coluna:`),Zg(),Jc(4905,`ul`)(4906,`li`)(4907,`p`),Tk(4908,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),Zg()(),Jc(4909,`li`)(4910,`p`),Tk(4911,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Zg()(),Jc(4912,`li`)(4913,`p`),Tk(4914,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),Zg()(),Jc(4915,`li`)(4916,`p`),Tk(4917,`Formato para números (number): aceita um valor seguindo o padrão `),Jc(4918,`a`,120)(4919,`strong`),Tk(4920,`DecimalPipe`),Zg()(),Tk(4921,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),Zg(),Jc(4922,`ul`)(4923,`li`),Tk(4924,`Valor de entrada: `),Jc(4925,`code`),Tk(4926,`50`),Zg(),Tk(4927,` e valor para formatação: `),Jc(4928,`code`),Tk(4929,`'1.2-5'`),Zg(),Tk(4930,` o resultado será: `),Jc(4931,`code`),Tk(4932,`50.00`),Zg()()()()()()(),Jc(4933,`tr`,17)(4934,`td`,18)(4935,`div`,19)(4936,`span`,20),Tk(4937,` label`),_u(4938,`br`),Zg()()(),Jc(4939,`td`,21)(4940,`code`,31),Tk(4941,`string`),Zg()(),Jc(4942,`td`,24)(4943,`em`)(4944,`strong`),Tk(4945,`(opcional)`),Zg()(),Jc(4946,`p`),Tk(4947,`Texto para título da coluna.`),Zg()()(),Jc(4948,`tr`,17)(4949,`td`,18)(4950,`div`,19)(4951,`span`,20),Tk(4952,` property`),_u(4953,`br`),Zg()()(),Jc(4954,`td`,21)(4955,`code`,31),Tk(4956,`string`),Zg()(),Jc(4957,`td`,24)(4958,`em`)(4959,`strong`),Tk(4960,`(opcional)`),Zg()(),Jc(4961,`p`),Tk(4962,`Nome identificador da coluna.`),Zg()()(),Jc(4963,`tr`,17)(4964,`td`,18)(4965,`div`,19)(4966,`span`,20),Tk(4967,` type`),_u(4968,`br`),Zg()()(),Jc(4969,`td`,21)(4970,`code`,31),Tk(4971,`string`),Zg()(),Jc(4972,`td`,24)(4973,`em`)(4974,`strong`),Tk(4975,`(opcional)`),Zg()(),Jc(4976,`p`),Tk(4977,`Tipo da coluna.`),Zg(),Jc(4978,`p`),Tk(4979,`Valores válidos:`),Zg(),Jc(4980,`ul`)(4981,`li`)(4982,`p`)(4983,`code`),Tk(4984,`currency`),Zg(),Tk(4985,`: valores monetários.`),Zg()(),Jc(4986,`li`)(4987,`p`)(4988,`code`),Tk(4989,`date`),Zg(),Tk(4990,`: valor de datas.`),Zg(),Jc(4991,`ul`)(4992,`li`),Tk(4993,`Aceita os tipos `),Jc(4994,`em`),Tk(4995,`string`),Zg(),Tk(4996,` e `),Jc(4997,`em`),Tk(4998,`Date`),Zg(),Tk(4999,` padr\xE3o do Javascript,
por exemplo: `),Jc(5e3,`code`),Tk(5001,`'2017-11-28'`),Zg(),Tk(5002,` ou `),Jc(5003,`code`),Tk(5004,`new Date(2017, 10, 28)`),Zg(),Tk(5005,`.`),Zg()()(),Jc(5006,`li`)(5007,`p`)(5008,`code`),Tk(5009,`time`),Zg(),Tk(5010,`: valor de horário.`),Zg()(),Jc(5011,`li`)(5012,`p`)(5013,`code`),Tk(5014,`number`),Zg(),Tk(5015,`: valores numéricos.`),Zg()(),Jc(5016,`li`)(5017,`p`)(5018,`code`),Tk(5019,`dateTime`),Zg(),Tk(5020,`: valor de data com horário.`),Zg(),Jc(5021,`ul`)(5022,`li`),Tk(5023,`Aceita o tipo `),Jc(5024,`em`),Tk(5025,`string`),Zg(),Tk(5026,` no formato `),Jc(5027,`strong`),Tk(5028,`ISO-8601`),Zg(),Tk(5029,` extendido `),Jc(5030,`strong`),Tk(5031,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Zg(),Tk(5032,`
e o tipo `),Jc(5033,`em`),Tk(5034,`Date`),Zg(),Tk(5035,` padrão do Javascript, por exemplo: `),Jc(5036,`code`),Tk(5037,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(5038,` ou `),Jc(5039,`code`),Tk(5040,`new Date(2017, 10, 28)`),Zg(),Tk(5041,`.`),Zg(),Jc(5042,`li`),Tk(5043,`Aceita o tipo `),Jc(5044,`em`),Tk(5045,`string`),Zg(),Tk(5046,` nos formatos `),Jc(5047,`strong`),Tk(5048,`'HH:mm:ss'`),Zg(),Tk(5049,` ou `),Jc(5050,`strong`),Tk(5051,`'HH:mm:ss.ffffff'`),Zg(),Tk(5052,`, por exemplo: `),Jc(5053,`code`),Tk(5054,`'23:12:45'`),Zg(),Tk(5055,`.`),Zg()()()()()()(),Jc(5056,`h4`,46)(5057,`code`,5),Tk(5058,`PoTableDetail`),Zg()(),Jc(5059,`div`,2)(5060,`p`),Tk(5061,`Interface para configuração do `),Jc(5062,`em`),Tk(5063,`detail`),Zg(),Tk(5064,` do componente `),Jc(5065,`code`),Tk(5066,`po-table`),Zg(),Tk(5067,`.`),Zg()(),Jc(5068,`h4`,13),Tk(5069,`Propriedades`),Zg(),Jc(5070,`table`,14)(5071,`tr`,15)(5072,`th`,16),Tk(5073,`Nome`),Zg(),Jc(5074,`th`,16),Tk(5075,`Tipo`),Zg(),Jc(5076,`th`,16),Tk(5077,`Descrição`),Zg()(),Jc(5078,`tr`,17)(5079,`td`,18)(5080,`div`,19)(5081,`span`,20),Tk(5082,` columns`),_u(5083,`br`),Zg()()(),Jc(5084,`td`,21)(5085,`code`,121),Tk(5086,`Array<PoTableDetailColumn>`),Zg()(),Jc(5087,`td`,24)(5088,`p`),Tk(5089,`Define uma lista do tipo `),Jc(5090,`code`),Tk(5091,`PoTableDetailColumn`),Zg(),Tk(5092,` para as colunas do objet `),Jc(5093,`em`),Tk(5094,`detail`),Zg(),Tk(5095,`. Por exemplo:`),Zg(),Jc(5096,`pre`)(5097,`code`),Tk(5098,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),Zg()()()(),Jc(5099,`tr`,17)(5100,`td`,18)(5101,`div`,19)(5102,`span`,20),Tk(5103,` hideSelect`),_u(5104,`br`),Zg()()(),Jc(5105,`td`,21)(5106,`code`,22),Tk(5107,`boolean`),Zg()(),Jc(5108,`td`,24)(5109,`em`)(5110,`strong`),Tk(5111,`(opcional)`),Zg()(),Jc(5112,`p`),Tk(5113,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),Zg()()(),Jc(5114,`tr`,17)(5115,`td`,18)(5116,`div`,19)(5117,`span`,20),Tk(5118,` typeHeader`),_u(5119,`br`),Zg()()(),Jc(5120,`td`,21)(5121,`code`,31),Tk(5122,`string`),Zg()(),Jc(5123,`td`,24)(5124,`em`)(5125,`strong`),Tk(5126,`(opcional)`),Zg()(),Jc(5127,`p`),Tk(5128,`Define o tipo de cabeçalho para o conteúdo do `),Jc(5129,`em`),Tk(5130,`detail`),Zg(),Tk(5131,` .`),Zg(),Jc(5132,`p`),Tk(5133,`Valores válidos:`),Zg(),Jc(5134,`ul`)(5135,`li`)(5136,`code`),Tk(5137,`inline`),Zg(),Tk(5138,`: Atribui o cabeçalho na mesma linha do `),Jc(5139,`em`),Tk(5140,`detail`),Zg(),Tk(5141,`.`),Zg(),Jc(5142,`li`)(5143,`code`),Tk(5144,`top`),Zg(),Tk(5145,`: Atribui o cabeçalho acima do `),Jc(5146,`em`),Tk(5147,`detail`),Zg(),Tk(5148,`, idêntico ao `),Jc(5149,`code`),Tk(5150,`po-table`),Zg(),Tk(5151,`.`),Zg(),Jc(5152,`li`)(5153,`code`),Tk(5154,`none`),Zg(),Tk(5155,`: Remove o cabeçalho do `),Jc(5156,`em`),Tk(5157,`detail`),Zg(),Tk(5158,`.`),Zg()()()()(),Jc(5159,`h4`,46)(5160,`code`,5),Tk(5161,`PoTableSubtitleColumn`),Zg()(),Jc(5162,`div`,2)(5163,`p`),Tk(5164,`Interface para configuração das colunas de legenda do Po-Table.`),Zg()(),Jc(5165,`h4`,13),Tk(5166,`Propriedades`),Zg(),Jc(5167,`table`,14)(5168,`tr`,15)(5169,`th`,16),Tk(5170,`Nome`),Zg(),Jc(5171,`th`,16),Tk(5172,`Tipo`),Zg(),Jc(5173,`th`,16),Tk(5174,`Descrição`),Zg()(),Jc(5175,`tr`,17)(5176,`td`,18)(5177,`div`,19)(5178,`span`,20),Tk(5179,` color`),_u(5180,`br`),Zg()()(),Jc(5181,`td`,21)(5182,`code`,31),Tk(5183,`string`),Zg()(),Jc(5184,`td`,24)(5185,`em`)(5186,`strong`),Tk(5187,`(opcional)`),Zg()(),Jc(5188,`p`),Tk(5189,`Define a cor do `),Jc(5190,`em`),Tk(5191,`status`),Zg(),Tk(5192,`.`),Zg(),Jc(5193,`p`),Tk(5194,`Valores válidos:`),Zg(),Jc(5195,`ul`)(5196,`li`),_u(5197,`span`,54),Jc(5198,`code`),Tk(5199,`color-01`),Zg()(),Jc(5200,`li`),_u(5201,`span`,55),Jc(5202,`code`),Tk(5203,`color-02`),Zg()(),Jc(5204,`li`),_u(5205,`span`,56),Jc(5206,`code`),Tk(5207,`color-03`),Zg()(),Jc(5208,`li`),_u(5209,`span`,57),Jc(5210,`code`),Tk(5211,`color-04`),Zg()(),Jc(5212,`li`),_u(5213,`span`,58),Jc(5214,`code`),Tk(5215,`color-05`),Zg()(),Jc(5216,`li`),_u(5217,`span`,59),Jc(5218,`code`),Tk(5219,`color-06`),Zg()(),Jc(5220,`li`),_u(5221,`span`,60),Jc(5222,`code`),Tk(5223,`color-07`),Zg()(),Jc(5224,`li`),_u(5225,`span`,61),Jc(5226,`code`),Tk(5227,`color-08`),Zg()(),Jc(5228,`li`),_u(5229,`span`,62),Jc(5230,`code`),Tk(5231,`color-09`),Zg()(),Jc(5232,`li`),_u(5233,`span`,63),Jc(5234,`code`),Tk(5235,`color-10`),Zg()(),Jc(5236,`li`),_u(5237,`span`,64),Jc(5238,`code`),Tk(5239,`color-11`),Zg()(),Jc(5240,`li`),_u(5241,`span`,65),Jc(5242,`code`),Tk(5243,`color-12`),Zg()()(),Jc(5244,`blockquote`)(5245,`p`),Tk(5246,`Também é possível utilizar as 35 cores da paleta `),Jc(5247,`strong`),Tk(5248,`Caption Tag Colors`),Zg(),Tk(5249,`:`),Zg()(),Jc(5250,`ul`)(5251,`li`),_u(5252,`span`,66),Jc(5253,`code`),Tk(5254,`caption-tag-01`),Zg(),_u(5255,`span`,67),Jc(5256,`code`),Tk(5257,`caption-tag-02`),Zg(),_u(5258,`span`,68),Jc(5259,`code`),Tk(5260,`caption-tag-03`),Zg(),_u(5261,`span`,69),Jc(5262,`code`),Tk(5263,`caption-tag-04`),Zg(),_u(5264,`span`,70),Jc(5265,`code`),Tk(5266,`caption-tag-05`),Zg()(),Jc(5267,`li`),_u(5268,`span`,71),Jc(5269,`code`),Tk(5270,`caption-tag-06`),Zg(),_u(5271,`span`,72),Jc(5272,`code`),Tk(5273,`caption-tag-07`),Zg(),_u(5274,`span`,73),Jc(5275,`code`),Tk(5276,`caption-tag-08`),Zg(),_u(5277,`span`,74),Jc(5278,`code`),Tk(5279,`caption-tag-09`),Zg(),_u(5280,`span`,75),Jc(5281,`code`),Tk(5282,`caption-tag-10`),Zg()(),Jc(5283,`li`),_u(5284,`span`,76),Jc(5285,`code`),Tk(5286,`caption-tag-11`),Zg(),_u(5287,`span`,77),Jc(5288,`code`),Tk(5289,`caption-tag-12`),Zg(),_u(5290,`span`,78),Jc(5291,`code`),Tk(5292,`caption-tag-13`),Zg(),_u(5293,`span`,79),Jc(5294,`code`),Tk(5295,`caption-tag-14`),Zg(),_u(5296,`span`,80),Jc(5297,`code`),Tk(5298,`caption-tag-15`),Zg()(),Jc(5299,`li`),_u(5300,`span`,81),Jc(5301,`code`),Tk(5302,`caption-tag-16`),Zg(),_u(5303,`span`,82),Jc(5304,`code`),Tk(5305,`caption-tag-17`),Zg(),_u(5306,`span`,83),Jc(5307,`code`),Tk(5308,`caption-tag-18`),Zg(),_u(5309,`span`,84),Jc(5310,`code`),Tk(5311,`caption-tag-19`),Zg(),_u(5312,`span`,85),Jc(5313,`code`),Tk(5314,`caption-tag-20`),Zg()(),Jc(5315,`li`),_u(5316,`span`,86),Jc(5317,`code`),Tk(5318,`caption-tag-21`),Zg(),_u(5319,`span`,87),Jc(5320,`code`),Tk(5321,`caption-tag-22`),Zg(),_u(5322,`span`,88),Jc(5323,`code`),Tk(5324,`caption-tag-23`),Zg(),_u(5325,`span`,89),Jc(5326,`code`),Tk(5327,`caption-tag-24`),Zg(),_u(5328,`span`,90),Jc(5329,`code`),Tk(5330,`caption-tag-25`),Zg()(),Jc(5331,`li`),_u(5332,`span`,91),Jc(5333,`code`),Tk(5334,`caption-tag-26`),Zg(),_u(5335,`span`,92),Jc(5336,`code`),Tk(5337,`caption-tag-27`),Zg(),_u(5338,`span`,93),Jc(5339,`code`),Tk(5340,`caption-tag-28`),Zg(),_u(5341,`span`,94),Jc(5342,`code`),Tk(5343,`caption-tag-29`),Zg(),_u(5344,`span`,95),Jc(5345,`code`),Tk(5346,`caption-tag-30`),Zg()(),Jc(5347,`li`),_u(5348,`span`,96),Jc(5349,`code`),Tk(5350,`caption-tag-31`),Zg(),_u(5351,`span`,97),Jc(5352,`code`),Tk(5353,`caption-tag-32`),Zg(),_u(5354,`span`,98),Jc(5355,`code`),Tk(5356,`caption-tag-33`),Zg(),_u(5357,`span`,99),Jc(5358,`code`),Tk(5359,`caption-tag-34`),Zg(),_u(5360,`span`,100),Jc(5361,`code`),Tk(5362,`caption-tag-35`),Zg()()()()(),Jc(5363,`tr`,17)(5364,`td`,18)(5365,`div`,19)(5366,`span`,20),Tk(5367,` content`),_u(5368,`br`),Zg()()(),Jc(5369,`td`,21)(5370,`code`,31),Tk(5371,`string`),Zg()(),Jc(5372,`td`,24)(5373,`p`),Tk(5374,`Conteúdo que será exibido na coluna da tabela.`),Zg()()(),Jc(5375,`tr`,17)(5376,`td`,18)(5377,`div`,19)(5378,`span`,20),Tk(5379,` label`),_u(5380,`br`),Zg()()(),Jc(5381,`td`,21)(5382,`code`,31),Tk(5383,`string`),Zg()(),Jc(5384,`td`,24)(5385,`p`),Tk(5386,`Texto que será exibido no rodapé da tabela como legenda.`),Zg()()(),Jc(5387,`tr`,17)(5388,`td`,18)(5389,`div`,19)(5390,`span`,20),Tk(5391,` value`),_u(5392,`br`),Zg()()(),Jc(5393,`td`,21)(5394,`code`,31),Tk(5395,`string `),Zg(),Jc(5396,`code`,35),Tk(5397,` number`),Zg()(),Jc(5398,`td`,24)(5399,`p`),Tk(5400,`Valor que será usado como referência para exibição do conteúdo na coluna.`),Zg()()()(),Jc(5401,`h3`),Tk(5402,`Enums`),Zg(),Jc(5403,`h4`,4)(5404,`code`,5),Tk(5405,`PoTableColumnSortType`),Zg()(),Jc(5406,`div`,2)(5407,`p`),Tk(5408,`Tipos de ordenação das colunas da tabela.`),Zg()(),Jc(5409,`h4`,13),Tk(5410,`Propriedades`),Zg(),Jc(5411,`table`,14)(5412,`tr`,15)(5413,`th`,16),Tk(5414,`Nome`),Zg(),Jc(5415,`th`,16),Tk(5416,`Descrição`),Zg()(),Jc(5417,`tr`,17)(5418,`td`,18)(5419,`div`,19)(5420,`span`,20),Tk(5421,` Ascending`),_u(5422,`br`),Zg()()(),Jc(5423,`td`,24)(5424,`p`),Tk(5425,`Ordenação ascendente`),Zg()()(),Jc(5426,`tr`,17)(5427,`td`,18)(5428,`div`,19)(5429,`span`,20),Tk(5430,` Descending`),_u(5431,`br`),Zg()()(),Jc(5432,`td`,24)(5433,`p`),Tk(5434,`Ordenação descendente`),Zg()()()(),Jc(5435,`h4`,4)(5436,`code`,5),Tk(5437,`PoTableColumnSpacing`),Zg()(),Jc(5438,`div`,2)(5439,`p`),Tk(5440,`Tipos de espaçamento interno (padding) das células (`),Jc(5441,`strong`),Tk(5442,`p-spacing`),Zg(),Tk(5443,`) do po-table.`),Zg()(),Jc(5444,`h4`,13),Tk(5445,`Propriedades`),Zg(),Jc(5446,`table`,14)(5447,`tr`,15)(5448,`th`,16),Tk(5449,`Nome`),Zg(),Jc(5450,`th`,16),Tk(5451,`Descrição`),Zg()(),Jc(5452,`tr`,17)(5453,`td`,18)(5454,`div`,19)(5455,`span`,20),Tk(5456,` ExtraSmall`),_u(5457,`br`),Zg()()(),Jc(5458,`td`,24)(5459,`p`),Tk(5460,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),Zg()()(),Jc(5461,`tr`,17)(5462,`td`,18)(5463,`div`,19)(5464,`span`,20),Tk(5465,` Small`),_u(5466,`br`),Zg()()(),Jc(5467,`td`,24)(5468,`p`),Tk(5469,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),Zg()()(),Jc(5470,`tr`,17)(5471,`td`,18)(5472,`div`,19)(5473,`span`,20),Tk(5474,` Medium`),_u(5475,`br`),Zg()()(),Jc(5476,`td`,24)(5477,`p`),Tk(5478,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),Zg()()(),Jc(5479,`tr`,17)(5480,`td`,18)(5481,`div`,19)(5482,`span`,20),Tk(5483,` Large`),_u(5484,`br`),Zg()()(),Jc(5485,`td`,24)(5486,`p`),Tk(5487,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function sn(r,W){if(r&1){let o=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(o);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-table-basic-view`)(2,`sample-po-table-labs-view`)(3,`sample-po-table-with-api-view`)(4,`sample-po-table-transport-view`)(5,`sample-po-table-airfare-view`)(6,`sample-po-table-components-view`)(7,`sample-po-table-heroes-view`)(8,`sample-po-table-draggable-view`)(9,`sample-po-table-search-ai-view`),Zg()}if(r&2){let o=nk();Rb(`p-active`,o.activeTab===`web`)}}var pn=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,sn,10,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-table-doc`),Zg()()()),l&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ke,et,nt,at,lt,mt,st,ct,Et,bt],encapsulation:2,changeDetection:1})}return r})()}];var xt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[WV.forChild(pn),WV]})}return r})();var vi=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,xt]})}return r})();export{vi as DocPoTableModule};