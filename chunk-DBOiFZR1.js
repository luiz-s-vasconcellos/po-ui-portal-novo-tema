import{m as P,p as M}from"./main-RBGX2DMP.js";import{An as sie,Ar as I,At as Zte,Ca as j_,Ci as UO,Dr as Gk,F as Joe,G as Nf,Gi as Yb,Ha as p,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ja as rR,Ki as Yk,L as Koe,Lr as Kg,Na as lF,O as Gne,Oa as kI,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,Tr as Gb,Ut as cae,W as Mze,Wi as YO,Wr as MZ,Xr as Nk,Z as P4,Zr as No,_i as S,_o as z0,an as ia,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge,do as xk,fa as gk,fo as xo,gi as Rb,hr as Db,i as $ne,io as vt$1,j as I4,ji as Vk,k as Goe,ki as V_,kt as Zoe,li as Qc,lt as Ss,oo as we,pa as hF,pi as R,pt as Tn,qa as qk,ra as de,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,sr as BO,ti as Ok,tt as R4,un as kf,vi as Sk,wn as q4,wr as GV,x as Eu,xi as Tk,xr as FO,yr as Du}from"./chunk-BQDTQO8h.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var ht=()=>({table:`PO Table`,angular:`PO-UI`});var vt=r=>[r];var Ke=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&vu(0,`po-table`,0),l&2&&Rb(`p-items`,Vk(2,vt,Lk(1,ht)))},dependencies:[q4],encapsulation:2,changeDetection:1})}return r})();var Ze=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-table-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-basic/sample-po-table-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-basic/sample-po-table-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-basic/sample-po-table-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-table-basic/sample-po-table-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Ke],encapsulation:2,changeDetection:1})}return r})();var ce=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:/* @__PURE__ */ new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:/* @__PURE__ */ new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var et=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=Tn.Medium;filterType=Eu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Eu.startsWith},{label:`Contains`,value:Eu.contains},{label:`Ends With`,value:Eu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=Tn.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(I(ce))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(a.poModal=m.first)}},standalone:!1,features:[we([ce])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=YO();Qc(0,`po-table`,1),vt$1(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(d){return a.deleteItems(d)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Kg(),vu(4,`po-divider`),Qc(5,`div`,2)(6,`po-button`,4),vt$1(`p-click`,function(){return a.addItem()}),Kg()(),vu(7,`po-divider`),Qc(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.columnsName,d)||(a.columnsName=d),U_(d)}),vt$1(`p-change`,function(){return a.updateColumns()}),Kg()(),Qc(12,`div`,2)(13,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.columnsDefinition.detail.detail.typeHeader,d)||(a.columnsDefinition.detail.detail.typeHeader=d),U_(d)}),Kg(),Qc(14,`po-switch`,7),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.columnsDefinition.detail.detail.hideSelect,d)||(a.columnsDefinition.detail.detail.hideSelect=d),U_(d)}),Kg()(),Qc(15,`div`,2)(16,`po-checkbox-group`,8),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.properties,d)||(a.properties=d),U_(d)}),Kg()(),Qc(17,`div`,2)(18,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.actionsDefinition,d)||(a.actionsDefinition=d),U_(d)}),vt$1(`p-change`,function(){return a.changeActionOptions()}),Kg()(),Qc(19,`div`,2)(20,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.spacing,d)||(a.spacing=d),U_(d)}),Kg()(),Qc(21,`div`,2)(22,`po-checkbox-group`,11),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.selection,d)||(a.selection=d),U_(d)}),vt$1(`p-change`,function(){return a.changeSelectionOptions()}),Kg(),Qc(23,`po-radio-group`,12),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.filterType,d)||(a.filterType=d),U_(d)}),Kg(),Qc(24,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.componentsSize,d)||(a.componentsSize=d),U_(d)}),Kg()(),Qc(25,`div`,2)(26,`po-input`,14),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.literals,d)||(a.literals=d),U_(d)}),vt$1(`p-change`,function(){return a.changeLiterals()}),Kg(),Qc(27,`po-input`,15),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.filteredColumns,d)||(a.filteredColumns=d),U_(d)}),vt$1(`p-change`,function(){return a.changeFilteredColumns()}),Kg(),Qc(28,`po-number`,16),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.height,d)||(a.height=d),U_(d)}),Kg(),Qc(29,`po-number`,17),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.maxColumns,d)||(a.maxColumns=d),U_(d)}),Kg()(),Qc(30,`div`,2)(31,`po-button`,18),vt$1(`p-click`,function(){return a.restore()}),Kg()()(),Qc(32,`po-modal`,19),vu(33,`po-info`,20),Kg()}l&2&&(Rb(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),wg(3),Rb(`p-value`,a.event),wg(8),Yb(`ngModel`,a.columnsName),Rb(`p-options`,a.columnsOptions),W0(),wg(2),Yb(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),Rb(`p-options`,a.typeHeaderOptions),W0(),wg(),Yb(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),W0(),wg(2),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),W0(),wg(2),Yb(`ngModel`,a.actionsDefinition),Rb(`p-options`,a.actionsDefinitionOptions),W0(),wg(2),Yb(`ngModel`,a.spacing),Rb(`p-options`,a.typeSpacing),W0(),wg(2),Yb(`ngModel`,a.selection),Rb(`p-options`,a.selectionOptions),W0(),wg(),Yb(`ngModel`,a.filterType),Rb(`p-options`,a.filterModeOptions),W0(),wg(),Yb(`ngModel`,a.componentsSize),Rb(`p-options`,a.componentsSizeOptions),W0(),wg(2),Yb(`ngModel`,a.literals),W0(),wg(),Yb(`ngModel`,a.filteredColumns),W0(),wg(),Yb(`ngModel`,a.height),W0(),wg(),Yb(`ngModel`,a.maxColumns),W0(),wg(4),Rb(`p-value`,a.currentItem))},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,R4,Joe,ia,q4],encapsulation:2,changeDetection:1})}return r})();var tt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-table-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-labs/sample-po-table-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-labs/sample-po-table-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-table-labs/sample-po-table-labs.service.ts`,1,`docs-code-block`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-labs/sample-po-table-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-table
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-table-labs/sample-po-table-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Qc(23,`label`,6),Sk(24,`sample-po-table-labs/sample-po-table-labs.service.ts`),Kg(),Qc(25,`div`,12)(26,`pre`,11),Sk(27,`import { Injectable } from '@angular/core';

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
`),Kg()()()()()(),vu(28,`hr`))},dependencies:[P,tre,are,et],encapsulation:2,changeDetection:1})}return r})();var wt=[`table`];var nt=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&Du(wt,5),l&2){let m;No(m=xo())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=YO();Qc(0,`div`,1)(1,`po-input`,2),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.service,d)||(a.service=d),U_(d)}),vt$1(`p-change`,function(){return a.changeService(a.service)}),Kg()(),Qc(2,`div`,1),vu(3,`po-divider`,3),Qc(4,`po-textarea`,4),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.stringColumns,d)||(a.stringColumns=d),U_(d)}),vt$1(`p-change`,function(d){return a.onChangeColumns(d)}),Kg()(),Qc(5,`div`,1),vu(6,`po-divider`,5),Qc(7,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.key,d)||(a.key=d),U_(d)}),Kg(),Qc(8,`po-input`,7),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(a.value,d)||(a.value=d),U_(d)}),Kg()(),Qc(9,`div`,1)(10,`po-button`,8),vt$1(`p-click`,function(){return a.addFilter(a.key,a.value)}),Kg()(),Qc(11,`div`,1)(12,`po-disclaimer-group`,9),vt$1(`p-remove`,function(d){return a.removeItem(d)})(`p-remove-all`,function(){return a.removeAllItems()}),Kg()(),Qc(13,`div`,1),vu(14,`po-table`,10,0),Kg()}l&2&&(wg(),Yb(`ngModel`,a.service),W0(),wg(3),Yb(`ngModel`,a.stringColumns),Rb(`p-rows`,5),W0(),wg(3),Yb(`ngModel`,a.key),W0(),wg(),Yb(`ngModel`,a.value),W0(),wg(2),Rb(`p-disabled`,!a.key||!a.value),wg(2),Rb(`p-disclaimers`,a.filters),wg(2),Rb(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[MZ,QL,oi,P4,Nf,j4,Zoe,q4],encapsulation:2,changeDetection:1})}return r$1})();var it=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-table-with-api`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-with-api/sample-po-table-with-api.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-with-api/sample-po-table-with-api.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table using API`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-with-api`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,nt],encapsulation:2,changeDetection:1})}return r})();var ue=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Mt(r,N){if(r&1){let o=YO();Qc(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),z0(),Kb(`ngModelChange`,function(a){let m=B_(o).$implicit;return Tk(m.status,a)||(m.status=a),U_(a)}),Kg()(),Qc(3,`div`,3),vu(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),Kg()()}if(r&2){let o=N.$implicit,l=ek();Rb(`p-title`,xk(`Transport detail `,o.code)),wg(2),Yb(`ngModel`,o.status),Rb(`p-options`,l.statusOptions),W0(),wg(2),Rb(`p-value`,o.batch_product),wg(),Rb(`p-value`,o.driver),wg(),Rb(`p-value`,o.license_plate)}}var at=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(I(ue))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[we([ue])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(Qc(0,`po-table`,0),Db(1,Mt,7,7,`ng-template`,1),Kg()),l&2&&(Rb(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),wg(),Rb(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[MZ,QL,Koe,Joe,q4,Gne,bae],encapsulation:2,changeDetection:1})}return r})();var ot=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:35,vars:0,consts:[[`id`,`sample-po-table-transport`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-transport/sample-po-table-transport.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-transport/sample-po-table-transport.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-table-transport/sample-po-table-transport.service.ts`,1,`docs-code-block`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Transport`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-transport`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-transport/sample-po-table-transport.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-table
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
    <po-widget p-title="Transport detail `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` rowItem.code `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`">
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-table-transport/sample-po-table-transport.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Qc(29,`label`,6),Sk(30,`sample-po-table-transport/sample-po-table-transport.service.ts`),Kg(),Qc(31,`div`,12)(32,`pre`,11),Sk(33,`import { Injectable } from '@angular/core';

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
`),Kg()()()()()(),vu(34,`hr`))},dependencies:[P,tre,are,at],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var lt=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),s=a.indexOf(l.property);if(m===-1)return 1;if(s===-1||m<s)return-1;if(m>s)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`)}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(I(be),I(Ru),I(sie))};static ɵcmp=Jn({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&Du(ia,7)(q4,7),l&2){let m;No(m=xo())&&(a.poModal=m.first),No(m=xo())&&(a.poTable=m.first)}},standalone:!1,features:[we([be,sie])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(Qc(0,`div`,0),Sk(1,`Choose one or more promotional airfares`),Kg(),vu(2,`po-divider`),Qc(3,`po-table`,1),vt$1(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(s){return a.sumTotal(s)})(`p-unselected`,function(s){return a.decreaseTotal(s)})(`p-change-visible-columns`,function(s){return a.changeColumnVisible(s)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(s){return a.deleteItems(s)}),Kg(),vu(4,`po-divider`)(5,`po-info`,2),Gk(6,`currency`),vu(7,`po-info`,3),Qc(8,`div`,4)(9,`po-button`,5),vt$1(`p-click`,function(){return a.addToCart()}),Kg(),Qc(10,`po-button`,6),vt$1(`p-click`,function(){return a.expandAll()}),Kg(),Qc(11,`po-button`,7),vt$1(`p-click`,function(){return a.collapseAll()}),Kg()(),Qc(12,`po-modal`,8),vu(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),Kg()),l&2&&(wg(3),Rb(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),wg(2),Rb(`p-value`,Nk(Yk(6,21,a.total,`USD`))),wg(2),Rb(`p-value`,a.totalExpanded),wg(5),Rb(`p-title`,Ok(``,a.detail?.destination,` - `,a.detail?.country)),wg(),Rb(`p-value`,a.detail?.airline),wg(),Rb(`p-value`,a.detail?.initials),wg(),Rb(`p-value`,a.detail?.class))},dependencies:[oi,Nf,Joe,ia,q4,hF],encapsulation:2,changeDetection:1})}return r$2})();var rt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:47,vars:0,consts:[[`id`,`sample-po-table-airfare`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-airfare/sample-po-table-airfare.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-airfare/sample-po-table-airfare.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-table-airfare/sample-po-table-airfare.service.ts`,1,`docs-code-block`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Airfare`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-airfare`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
  p-value="`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` total | currency: 'USD' `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`"
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

<po-modal p-click-out="true" p-size="sm" p-title="`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` detail?.destination `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,` - `),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` detail?.country `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),Kg()()()(),Qc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Sk(37,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),Kg(),Qc(38,`div`,10)(39,`pre`,11),Sk(40,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Qc(41,`label`,6),Sk(42,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),Kg(),Qc(43,`div`,12)(44,`pre`,11),Sk(45,`import { Injectable } from '@angular/core';

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
`),Kg()()()()()(),vu(46,`hr`))},dependencies:[P,tre,are,lt],encapsulation:2,changeDetection:1})}return r})();var z;(function(r){r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`})(z||(z={}));var Ee=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,s)=>this.sort(m,s,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,s=a.type;if(m.split(`.`).length>1){let d=m.split(`.`)[0],ve=m.split(`.`)[1];return o[d][ve]<l[d][ve]?s===kf.Ascending?-1:1:s===kf.Ascending?1:-1}else return o[m]<l[m]?s===kf.Ascending?-1:1:s===kf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function zt(r,N){if(r&1&&(Qc(0,`div`),Sk(1),Gk(2,`uppercase`),Kg()),r&2){let o=N.$implicit;gk(xk(`badge `,o)),wg(),Gb(qk(2,4,o))}}function Nt(r,N){if(r&1&&(Qc(0,`ul`)(1,`li`,4),Sk(2),Kg(),vu(3,`po-divider`),Kg()),r&2){let o=N.$implicit;wg(2),Gb(o)}}var mt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:z.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:z.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:z.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===z.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==z.Stable}canShowExtras(o){return o?.component?.status!==z.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(I(Ee),I(An))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(a.poModal=m.first)}},standalone:!1,features:[we([Ee])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(Qc(0,`div`,0),Sk(1,`PO UI Library`),Kg(),vu(2,`po-divider`),Qc(3,`po-table`,1),vt$1(`p-show-more`,function(s){return a.showMore(s)})(`p-sort-by`,function(s){return a.sort(s)}),Db(4,zt,3,6,`ng-template`,2),Kg(),Qc(5,`po-modal`,3),UO(6,Nt,4,1,`ul`,null,BO),Kg()),l&2&&(wg(3),Rb(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),wg(),Rb(`p-property`,`component.type`),wg(),Rb(`p-title`,Ok(``,a.title,` - `,a.extraInformation?.component)),wg(),HO(a.extraInformation?.extras))},dependencies:[Nf,ia,q4,$ne,lF],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var dt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:71,vars:0,consts:[[`id`,`sample-po-table-components`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-components/sample-po-table-components.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-components/sample-po-table-components.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-table-components/sample-po-table-components.enum.ts`,1,`docs-code-block`],[`data-file`,`sample-po-table-components/sample-po-table-components.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-table-components/sample-po-table-components.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Po Field Components`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-components`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-components/sample-po-table-components.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
    <div class="badge `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` value `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`">`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` value | uppercase `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` title `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,` - `),Qc(34,`span`),j_(),Sk(35,`{{`),V_(),Kg(),Sk(36,` extraInformation?.component `),Qc(37,`span`),j_(),Sk(38,`}}`),V_(),Kg(),Sk(39,`">
  @for (extra of extraInformation?.extras; track extra) {
    <ul>
      <li class="po-font-text">`),Qc(40,`span`),j_(),Sk(41,`{{`),V_(),Kg(),Sk(42,` extra `),Qc(43,`span`),j_(),Sk(44,`}}`),V_(),Kg(),Sk(45,`</li>
      <po-divider />
    </ul>
  }
</po-modal>
`),Kg()()()(),Qc(46,`po-tab`,9)(47,`div`)(48,`label`,6),Sk(49,`sample-po-table-components/sample-po-table-components.component.ts`),Kg(),Qc(50,`div`,10)(51,`pre`,11),Sk(52,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Qc(53,`label`,6),Sk(54,`sample-po-table-components/sample-po-table-components.enum.ts`),Kg(),Qc(55,`div`,12)(56,`pre`,11),Sk(57,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),Kg()(),Qc(58,`label`,6),Sk(59,`sample-po-table-components/sample-po-table-components.service.ts`),Kg(),Qc(60,`div`,13)(61,`pre`,11),Sk(62,`import { Injectable } from '@angular/core';

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
`),Kg()()()(),Qc(63,`po-tab`,14)(64,`div`)(65,`label`,6),Sk(66,`sample-po-table-components/sample-po-table-components.component.css`),Kg(),Qc(67,`div`,15)(68,`pre`,16),Sk(69,`.badge {
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
`),Kg()()()()()(),vu(70,`hr`))},dependencies:[P,tre,are,mt],encapsulation:2,changeDetection:1})}return r})();var xe=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(rR(`items`))}static ɵfac=function(l){return new(l||r)(S(kI))};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Wt=[`POItemsOri`];var Ut=[`POItemsSelected`];var st=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(I(xe))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&Du(Wt,7)(Ut,7),l&2){let m;No(m=xo())&&(a.poItemsOri=m.first),No(m=xo())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[we([xe])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(Qc(0,`div`,2)(1,`div`,3)(2,`div`,4),Sk(3,`Choose one or more heroes for your team`),Kg(),Qc(4,`po-table`,5,0),vt$1(`p-selected`,function(s){return a.changeOptions(s,`new`)})(`p-unselected`,function(s){return a.changeOptions(s,`change`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),Kg()(),Qc(6,`div`,3)(7,`div`,4),Sk(8,`Here your chosen heroes`),Kg(),vu(9,`po-table`,6,1),Kg()()),l&2&&(wg(4),Rb(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),wg(5),Rb(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[q4],encapsulation:2,changeDetection:1})}return r})();var pt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-table-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-heroes/sample-po-table-heroes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-heroes/sample-po-table-heroes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-table-heroes/sample-po-table-heroes.service.ts`,1,`docs-code-block`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Heroes`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-heroes`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row po-pb-2">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Qc(23,`label`,6),Sk(24,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),Kg(),Qc(25,`div`,12)(26,`pre`,11),Sk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),vu(28,`hr`))},dependencies:[P,tre,are,st],encapsulation:2,changeDetection:1})}return r})();var $t=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var Jt=r=>[r];var ct=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(Qc(0,`div`,0),Sk(1,` Choose one column and drag to another horizontal position in the table and drop
`),Kg(),vu(2,`po-divider`)(3,`po-table`,1)),l&2&&(wg(3),Rb(`p-items`,Vk(5,Jt,Lk(4,$t)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[Nf,q4],encapsulation:2,changeDetection:1})}return r})();var ut=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-table-draggable`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-draggable/sample-po-table-draggable.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-draggable/sample-po-table-draggable.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table Drag and Drop`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-draggable`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ct],encapsulation:2,changeDetection:1})}return r})();function Zt(r,N){if(r&1){let o=YO();Qc(0,`po-filter-chip`,6),vt$1(`p-selected-change`,function(a){let m=B_(o).$implicit,s=ek();return U_(s.onSuggestionChange(m,a))}),Kg()}if(r&2){let o=N.$implicit,l=ek();Rb(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var bt=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(I(Ru))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&Du(q4,5),l&2){let m;No(m=xo())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(Qc(0,`p`,0),Sk(1,`PO Search A.I.`),Kg(),Qc(2,`p`,1),Sk(3,` O `),Qc(4,`strong`),Sk(5,`PO Search A.I.`),Kg(),Sk(6,` é um recurso de busca inteligente integrado ao `),Qc(7,`code`),Sk(8,`po-table`),Kg(),Sk(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),Kg(),Qc(10,`p`,2),Sk(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),Kg(),Qc(12,`div`,3),UO(13,Zt,1,3,`po-filter-chip`,4,BO),Kg(),Qc(15,`po-table`,5),vt$1(`p-search-ai-result`,function(s){return a.onAiResult(s)})(`p-search-ai-low-confidence`,function(s){return a.onAiLowConfidence(s)})(`p-search-ai-error`,function(s){return a.onAiError(s)}),Kg()),l&2&&(wg(13),HO(a.examples),wg(2),Rb(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[cae,q4],encapsulation:2})}return r})();var Et=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-table-search-ai`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Search A.I.`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-table-search-ai`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,bt],encapsulation:2,changeDetection:1})}return r})();var xt=(()=>{class r{router=p(An);openDoc(o){this.router.navigate([`/documentation`,o],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5494,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Table Cell Template`,3,`p-click`],[`p-value`,`Table Column Template`,3,`p-click`],[`p-value`,`Table Row Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions-right`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[`id`,`event-p-all-selected`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-all-unselected`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-collapse`,1,`docs-api-properties-row`],[`id`,`event-p-change-fixed-columns`,1,`docs-api-properties-row`],[`id`,`event-p-change-visible-columns`,1,`docs-api-properties-row`],[`id`,`event-p-collapsed`,1,`docs-api-properties-row`],[`id`,`event-p-restore-column-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-container`,1,`docs-api-properties-row`],[`id`,`prop-p-draggable`,1,`docs-api-properties-row`],[`id`,`event-p-delete-items`,1,`docs-api-properties-row`],[`id`,`event-p-expanded`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`id`,`prop-p-filtered-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-hide-action-fixed-columns`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-batch-actions`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-columns-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-detail`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-all`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-table-search`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-loading-show-more`,1,`docs-api-properties-row`],[`id`,`prop-p-max-columns`,1,`docs-api-properties-row`],[`id`,`prop-p-param-delete-api`,1,`docs-api-properties-row`],[`id`,`event-p-search-ai-error`,1,`docs-api-properties-row`],[`id`,`prop-p-search-ai-field`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`id`,`event-p-search-ai-low-confidence`,1,`docs-api-properties-row`],[`id`,`event-p-search-ai-result`,1,`docs-api-properties-row`],[`id`,`prop-p-selectable`,1,`docs-api-properties-row`],[`id`,`prop-p-selectable-entire-line`,1,`docs-api-properties-row`],[`id`,`event-p-selected`,1,`docs-api-properties-row`],[`id`,`prop-p-service-api`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-service-delete`,1,`docs-api-properties-row`],[`id`,`event-p-show-more`,1,`docs-api-properties-row`],[`id`,`prop-p-show-more-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-single-select`,1,`docs-api-properties-row`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`event-p-sort-by`,1,`docs-api-properties-row`],[`id`,`prop-p-spacing`,1,`docs-api-properties-row`],[`id`,`prop-p-striped`,1,`docs-api-properties-row`],[`id`,`prop-p-text-wrap`,1,`docs-api-properties-row`],[`id`,`event-p-unselected`,1,`docs-api-properties-row`],[`id`,`prop-p-virtual-scroll`,1,`docs-api-properties-row`],[`id`,`method-applyFilters`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`id`,`method-applyFixedColumns`,1,`docs-api-method-table`],[`id`,`method-collapse`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-expand`,1,`docs-api-method-table`],[`id`,`method-getSelectedRows`,1,`docs-api-method-table`],[`id`,`method-getUnselectedRows`,1,`docs-api-method-table`],[`id`,`method-unselectRows`,1,`docs-api-method-table`],[`id`,`method-unselectRowItem`,1,`docs-api-method-table`],[`id`,`method-selectRowItem`,1,`docs-api-method-table`],[`id`,`method-deleteItems`,1,`docs-api-method-table`],[`id`,`method-updateSearchAIQuery`,1,`docs-api-method-table`],[`id`,`method-removeItem`,1,`docs-api-method-table`],[`id`,`method-updateItem`,1,`docs-api-method-table`],[`id`,`interface-po-table-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-table-boolean`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-boolean-false-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-boolean-true-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-sort`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-column-sort-column`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`id`,`interface-po-table-column-sort-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`id`,`interface-po-table-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-column-action`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-boolean`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[`id`,`interface-po-table-column-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`id`,`interface-po-table-column-detail`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`id`,`interface-po-table-column-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-format`,1,`docs-api-properties-row`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`id`,`interface-po-table-column-icons`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`id`,`interface-po-table-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-labels`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`id`,`interface-po-table-column-link`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-search-ai-ignore`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-sortable`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-subtitles`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`id`,`interface-po-table-column-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-width`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-literals-body-delete`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-columns-manager`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-complete-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-delete`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-delete-api-error`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-delete-successful`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-load-more-data`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-loading-data`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-multiple-items`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-item`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-visible-column`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-one-item`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-search-ai-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-see-complete-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-search-ai-field-apply`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`id`,`interface-po-table-search-ai-field-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`id`,`interface-po-table-search-ai-field-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`interface-po-table-search-ai-field-min-confidence`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field-timeout`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field-url`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`tableColumnIcon`],[`id`,`interface-po-table-column-icon-action`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-value`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-column-label-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-icon`,1,`docs-api-properties-row`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`id`,`interface-po-table-column-label-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-text-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`id`,`interface-po-table-column-label-value`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-detail-column-format`,1,`docs-api-properties-row`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`id`,`interface-po-table-detail-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-detail-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`],[`id`,`interface-po-table-detail-hide-select`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-type-header`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-subtitle-column-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column-content`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column-value`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-sort-type`,1,`docs-api-class-name`],[`id`,`enum-po-table-column-sort-type-ascending`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-sort-type-descending`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing`,1,`docs-api-class-name`],[`id`,`enum-po-table-column-spacing-extra-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-medium`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-large`,1,`docs-api-properties-row`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-table`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Subcomponentes:`),Kg(),Qc(10,`po-tag`,4),vt$1(`p-click`,function(){return a.openDoc(`po-table-cell-template`)}),Kg(),Qc(11,`po-tag`,5),vt$1(`p-click`,function(){return a.openDoc(`po-table-column-template`)}),Kg(),Qc(12,`po-tag`,6),vt$1(`p-click`,function(){return a.openDoc(`po-table-row-template`)}),Kg()(),Qc(13,`h3`,7),Sk(14,`Componente`),Kg(),Qc(15,`h4`,8)(16,`code`,9),Sk(17,`PoTableComponent`),Kg()(),Qc(18,`div`,2)(19,`p`),Sk(20,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),Kg(),Qc(21,`p`),Sk(22,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Qc(23,`strong`),Sk(24,`Carregar mais resultados`),Kg(),Sk(25,`.`),Kg(),Qc(26,`blockquote`)(27,`p`),Sk(28,`As linhas de detalhes podem também ser customizadas através do `),Qc(29,`a`,10)(30,`code`),Sk(31,`p-table-row-template`),Kg()(),Sk(32,`.`),Kg()(),Qc(33,`blockquote`)(34,`p`),Sk(35,`As colunas podem ser customizadas através dos templates `),Qc(36,`a`,11)(37,`code`),Sk(38,`p-table-column-template`),Kg()(),Sk(39,`
e `),Qc(40,`a`,12)(41,`code`),Sk(42,`p-table-cell-template`),Kg()(),Sk(43,`.`),Kg()(),Qc(44,`p`),Sk(45,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),Kg(),Qc(46,`p`),Sk(47,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),Qc(48,`em`),Sk(49,`scroll`),Kg(),Sk(50,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),Kg(),Qc(51,`h4`),Sk(52,`Tokens customizáveis`),Kg(),Qc(53,`p`),Sk(54,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(55,`blockquote`)(56,`p`),Sk(57,`Para maiores informações, acesse o guia `),Qc(58,`a`,13),Sk(59,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(60,`.`),Kg()(),Qc(61,`table`)(62,`thead`)(63,`tr`)(64,`th`),Sk(65,`Propriedade`),Kg(),Qc(66,`th`),Sk(67,`Descrição`),Kg(),Qc(68,`th`),Sk(69,`Valor Padrão`),Kg()()(),Qc(70,`tbody`)(71,`tr`)(72,`td`)(73,`strong`),Sk(74,`Default Values`),Kg()(),vu(75,`td`)(76,`td`),Kg(),Qc(77,`tr`)(78,`td`)(79,`code`),Sk(80,`--font-family`),Kg()(),Qc(81,`td`),Sk(82,`Família tipográfica usada`),Kg(),Qc(83,`td`)(84,`code`),Sk(85,`var(--font-family-theme)`),Kg()()(),Qc(86,`tr`)(87,`td`)(88,`code`),Sk(89,`--background-color`),Kg()(),Qc(90,`td`),Sk(91,`Cor de background`),Kg(),Qc(92,`td`)(93,`code`),Sk(94,`var(--color-neutral-light-00)`),Kg()()(),Qc(95,`tr`)(96,`td`)(97,`code`),Sk(98,`--color`),Kg()(),Qc(99,`td`),Sk(100,`Cor principal da table`),Kg(),Qc(101,`td`)(102,`code`),Sk(103,`var(--color-neutral-dark-95)`),Kg()()(),Qc(104,`tr`)(105,`td`)(106,`code`),Sk(107,`--background-striped-color`),Kg()(),Qc(108,`td`),Sk(109,`Cor do background quando striped`),Kg(),Qc(110,`td`)(111,`code`),Sk(112,`var(--color-neutral-light-05)`),Kg()()(),Qc(113,`tr`)(114,`td`)(115,`code`),Sk(116,`--color-line`),Kg()(),Qc(117,`td`),Sk(118,`Cor das linhas`),Kg(),Qc(119,`td`)(120,`code`),Sk(121,`var(--color-neutral-mid-40)`),Kg()()(),Qc(122,`tr`)(123,`td`)(124,`strong`),Sk(125,`Hover`),Kg()(),vu(126,`td`)(127,`td`),Kg(),Qc(128,`tr`)(129,`td`)(130,`code`),Sk(131,`--color-hover`),Kg()(),Qc(132,`td`),Sk(133,`Cor principal no estado hover`),Kg(),Qc(134,`td`)(135,`code`),Sk(136,`var(--color-action-hover)`),Kg()()(),Qc(137,`tr`)(138,`td`)(139,`code`),Sk(140,`--background-color-hover`),Kg()(),Qc(141,`td`),Sk(142,`Cor de background no estado hover`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`var(--color-brand-01-lighter)`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`strong`),Sk(149,`Focused`),Kg()(),vu(150,`td`)(151,`td`),Kg(),Qc(152,`tr`)(153,`td`)(154,`code`),Sk(155,`--outline-color-focused`),Kg()(),Qc(156,`td`),Sk(157,`Cor do outline do estado de focus`),Kg(),Qc(158,`td`)(159,`code`),Sk(160,`var(--color-action-focus)`),Kg()()(),Qc(161,`tr`)(162,`td`)(163,`strong`),Sk(164,`Disabled`),Kg()(),vu(165,`td`)(166,`td`),Kg(),Qc(167,`tr`)(168,`td`)(169,`code`),Sk(170,`--color-disabled`),Kg()(),Qc(171,`td`),Sk(172,`Cor principal no estado disabled`),Kg(),Qc(173,`td`)(174,`code`),Sk(175,`var(--color-neutral-mid-40)`),Kg()()(),Qc(176,`tr`)(177,`td`)(178,`strong`),Sk(179,`Headline`),Kg()(),vu(180,`td`)(181,`td`),Kg(),Qc(182,`tr`)(183,`td`)(184,`code`),Sk(185,`--background-color-headline`),Kg(),Sk(186,` \xA0`),Kg(),Qc(187,`td`),Sk(188,`Cor do cabeçalho`),Kg(),Qc(189,`td`)(190,`code`),Sk(191,`var(--color-neutral-light-10)`),Kg()()(),Qc(192,`tr`)(193,`td`)(194,`code`),Sk(195,`--font-weight-headline`),Kg()(),Qc(196,`td`),Sk(197,`Peso da fonte do cabeçalho`),Kg(),Qc(198,`td`)(199,`code`),Sk(200,`var(--font-weight-bold)`),Kg()()(),Qc(201,`tr`)(202,`td`)(203,`strong`),Sk(204,`Selected`),Kg()(),vu(205,`td`)(206,`td`),Kg(),Qc(207,`tr`)(208,`td`)(209,`code`),Sk(210,`--background-color-selected`),Kg(),Sk(211,`\xA0`),Kg(),Qc(212,`td`),Sk(213,`Cor de background no estado de selecionado`),Kg(),Qc(214,`td`)(215,`code`),Sk(216,`var(--color-brand-01-lightest)`),Kg()()(),Qc(217,`tr`)(218,`td`)(219,`strong`),Sk(220,`Actived`),Kg()(),vu(221,`td`)(222,`td`),Kg(),Qc(223,`tr`)(224,`td`)(225,`code`),Sk(226,`--color-actived`),Kg()(),Qc(227,`td`),Sk(228,`Cor do texto no estado de selecionado`),Kg(),Qc(229,`td`)(230,`code`),Sk(231,`var(--color-neutral-dark-90)`),Kg()()(),Qc(232,`tr`)(233,`td`)(234,`code`),Sk(235,`--background-color-actived`),Kg()(),Qc(236,`td`),Sk(237,`Cor de background no estado de selecionado`),Kg(),Qc(238,`td`)(239,`code`),Sk(240,`var(--color-brand-01-light)`),Kg()()()()()(),Qc(241,`div`,14)(242,`h4`,15),Sk(243,`Seletor`),Kg(),Qc(244,`pre`,16),Sk(245,`<po-table
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
`),Kg()(),Qc(246,`h4`,17),Sk(247,`Propriedades`),Kg(),Qc(248,`table`,18)(249,`tr`,19)(250,`th`,20),Sk(251,`Nome`),Kg(),Qc(252,`th`,20),Sk(253,`Tipo`),Kg(),Qc(254,`th`,20),Sk(255,`Padrão`),Kg(),Qc(256,`th`,20),Sk(257,`Descrição`),Kg()(),Qc(258,`tr`,21)(259,`td`,22)(260,`div`,23)(261,`span`,24),Sk(262,` p-actions-right`),vu(263,`br`),Kg()()(),Qc(264,`td`,25)(265,`code`,26),Sk(266,`boolean`),Kg()(),Qc(267,`td`,27)(268,`p`)(269,`code`),Sk(270,`false`),Kg()()(),Qc(271,`td`,28)(272,`em`)(273,`strong`),Sk(274,`(opcional)`),Kg()(),Qc(275,`p`),Sk(276,`Define que a coluna de ações ficará no lado direito da tabela.`),Kg()()(),Qc(277,`tr`,29)(278,`td`,22)(279,`div`,23)(280,`span`,24),Sk(281,` p-actions`),vu(282,`br`),Kg()()(),Qc(283,`td`,25)(284,`code`,30),Sk(285,`PoTableAction[]`),Kg()(),Qc(286,`td`,27),Sk(287,`-`),Kg(),Qc(288,`td`,28)(289,`em`)(290,`strong`),Sk(291,`(opcional)`),Kg()(),Qc(292,`p`),Sk(293,`Define uma lista de ações.`),Kg(),Qc(294,`p`),Sk(295,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Qc(296,`a`,31)(297,`strong`),Sk(298,`an an-dots-three`),Kg()(),Sk(299,` que listará as ações ao ser clicado.`),Kg(),Qc(300,`p`)(301,`strong`),Sk(302,`A coluna de ações não será exibida quando:`),Kg()(),Qc(303,`ul`)(304,`li`),Sk(305,`a lista conter valores inválidos ou indefinidos.`),Kg(),Qc(306,`li`),Sk(307,`tenha uma única ação e a mesma não for visível.`),Kg()()()(),Qc(308,`tr`,32)(309,`td`,22)(310,`div`,33)(311,`span`,34),Sk(312,` (p-all-selected)`),vu(313,`br`),Kg()()(),Qc(314,`td`,25)(315,`code`,35),Sk(316,`EventEmitter`),Kg()(),Qc(317,`td`,27),Sk(318,`-`),Kg(),Qc(319,`td`,28)(320,`em`)(321,`strong`),Sk(322,`(opcional)`),Kg()(),Qc(323,`p`),Sk(324,`Evento executado quando todas as linhas são selecionadas por meio do `),Qc(325,`em`),Sk(326,`checkbox`),Kg(),Sk(327,` que seleciona todas as linhas.`),Kg()()(),Qc(328,`tr`,36)(329,`td`,22)(330,`div`,33)(331,`span`,34),Sk(332,` (p-all-unselected)`),vu(333,`br`),Kg()()(),Qc(334,`td`,25)(335,`code`,35),Sk(336,`EventEmitter`),Kg()(),Qc(337,`td`,27),Sk(338,`-`),Kg(),Qc(339,`td`,28)(340,`em`)(341,`strong`),Sk(342,`(opcional)`),Kg()(),Qc(343,`p`),Sk(344,`Evento executado quando a seleção das linhas é desmarcada por meio do `),Qc(345,`em`),Sk(346,`checkbox`),Kg(),Sk(347,` que seleciona todas as linhas.`),Kg()()(),Qc(348,`tr`,37)(349,`td`,22)(350,`div`,23)(351,`span`,24),Sk(352,` p-auto-collapse`),vu(353,`br`),Kg()()(),Qc(354,`td`,25)(355,`code`,26),Sk(356,`boolean`),Kg()(),Qc(357,`td`,27)(358,`p`)(359,`code`),Sk(360,`false`),Kg()()(),Qc(361,`td`,28)(362,`em`)(363,`strong`),Sk(364,`(opcional)`),Kg()(),Qc(365,`p`),Sk(366,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),Kg()()(),Qc(367,`tr`,38)(368,`td`,22)(369,`div`,33)(370,`span`,34),Sk(371,` (p-change-fixed-columns)`),vu(372,`br`),Kg()()(),Qc(373,`td`,25)(374,`code`,35),Sk(375,`EventEmitter`),Kg()(),Qc(376,`td`,27),Sk(377,`-`),Kg(),Qc(378,`td`,28)(379,`em`)(380,`strong`),Sk(381,`(opcional)`),Kg()(),Qc(382,`p`),Sk(383,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),Kg(),Qc(384,`p`),Sk(385,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),Kg(),Qc(386,`blockquote`)(387,`p`),Sk(388,`Incompatível com `),Qc(389,`code`),Sk(390,`p-hide-action-fixed-columns`),Kg(),Sk(391,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),Kg()()()(),Qc(392,`tr`,39)(393,`td`,22)(394,`div`,33)(395,`span`,34),Sk(396,` (p-change-visible-columns)`),vu(397,`br`),Kg()()(),Qc(398,`td`,25)(399,`code`,35),Sk(400,`EventEmitter`),Kg()(),Qc(401,`td`,27),Sk(402,`-`),Kg(),Qc(403,`td`,28)(404,`em`)(405,`strong`),Sk(406,`(opcional)`),Kg()(),Qc(407,`p`),Sk(408,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),Kg(),Qc(409,`p`),Sk(410,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Qc(411,`tr`,40)(412,`td`,22)(413,`div`,33)(414,`span`,34),Sk(415,` (p-collapsed)`),vu(416,`br`),Kg()()(),Qc(417,`td`,25)(418,`code`,35),Sk(419,`EventEmitter`),Kg()(),Qc(420,`td`,27),Sk(421,`-`),Kg(),Qc(422,`td`,28)(423,`em`)(424,`strong`),Sk(425,`(opcional)`),Kg()(),Qc(426,`p`),Sk(427,`Evento executado ao colapsar uma linha do `),Qc(428,`code`),Sk(429,`po-table`),Kg(),Sk(430,`.`),Kg(),Qc(431,`blockquote`)(432,`p`),Sk(433,`Como parâmetro o componente envia o item colapsado.`),Kg()()()(),Qc(434,`tr`,41)(435,`td`,22)(436,`div`,33)(437,`span`,34),Sk(438,` (p-restore-column-manager)`),vu(439,`br`),Kg()()(),Qc(440,`td`,25)(441,`code`,35),Sk(442,`EventEmitter`),Kg()(),Qc(443,`td`,27),Sk(444,`-`),Kg(),Qc(445,`td`,28)(446,`em`)(447,`strong`),Sk(448,`(opcional)`),Kg()(),Qc(449,`p`),Sk(450,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Kg(),Qc(451,`p`),Sk(452,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Qc(453,`tr`,42)(454,`td`,22)(455,`div`,23)(456,`span`,24),Sk(457,` p-columns`),vu(458,`br`),Kg()()(),Qc(459,`td`,25)(460,`code`,43),Sk(461,`PoTableColumn[]`),Kg()(),Qc(462,`td`,27),Sk(463,`-`),Kg(),Qc(464,`td`,28)(465,`em`)(466,`strong`),Sk(467,`(opcional)`),Kg()(),Qc(468,`p`),Sk(469,`Lista das colunas da tabela, deve receber um `),Qc(470,`em`),Sk(471,`array`),Kg(),Sk(472,` de objetos que implementam a interface `),Qc(473,`code`),Sk(474,`PoTableColumn`),Kg(),Sk(475,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),Kg(),Qc(476,`blockquote`)(477,`p`),Sk(478,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),Kg()()()(),Qc(479,`tr`,44)(480,`td`,22)(481,`div`,23)(482,`span`,24),Sk(483,` p-components-size`),vu(484,`br`),Kg()()(),Qc(485,`td`,25)(486,`code`,45),Sk(487,`string`),Kg()(),Qc(488,`td`,27)(489,`p`)(490,`code`),Sk(491,`medium`),Kg()()(),Qc(492,`td`,28)(493,`em`)(494,`strong`),Sk(495,`(opcional)`),Kg()(),Qc(496,`p`),Sk(497,`Define o tamanho dos componentes de formulário no table:`),Kg(),Qc(498,`ul`)(499,`li`)(500,`code`),Sk(501,`small`),Kg(),Sk(502,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(503,`li`)(504,`code`),Sk(505,`medium`),Kg(),Sk(506,`: aplica a medida medium de cada componente.`),Kg()(),Qc(507,`blockquote`)(508,`p`),Sk(509,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(510,`code`),Sk(511,`medium`),Kg(),Sk(512,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(513,`a`,46),Sk(514,`po-theme`),Kg(),Sk(515,`.`),Kg()()()(),Qc(516,`tr`,47)(517,`td`,22)(518,`div`,23)(519,`span`,24),Sk(520,` p-container`),vu(521,`br`),Kg()()(),Qc(522,`td`,25)(523,`code`,45),Sk(524,`string`),Kg()(),Qc(525,`td`,27)(526,`p`)(527,`code`),Sk(528,`border`),Kg()()(),Qc(529,`td`,28)(530,`em`)(531,`strong`),Sk(532,`(opcional)`),Kg()(),Qc(533,`p`),Sk(534,`Adiciona um contorno arredondado ao `),Qc(535,`code`),Sk(536,`po-table`),Kg(),Sk(537,`, as opções são:`),Kg(),Qc(538,`ul`)(539,`li`)(540,`code`),Sk(541,`border`),Kg(),Sk(542,`: com bordas/linhas.`),Kg(),Qc(543,`li`)(544,`code`),Sk(545,`shadow`),Kg(),Sk(546,`: com sombras.`),Kg()()()(),Qc(547,`tr`,48)(548,`td`,22)(549,`div`,23)(550,`span`,24),Sk(551,` p-draggable`),vu(552,`br`),Kg()()(),Qc(553,`td`,25)(554,`code`,26),Sk(555,`boolean`),Kg()(),Qc(556,`td`,27)(557,`p`)(558,`code`),Sk(559,`false`),Kg()()(),Qc(560,`td`,28)(561,`em`)(562,`strong`),Sk(563,`(opcional)`),Kg()(),Qc(564,`p`),Sk(565,`Habilita o modo drag and drop para as colunas da tabela.`),Kg()()(),Qc(566,`tr`,49)(567,`td`,22)(568,`div`,33)(569,`span`,34),Sk(570,` (p-delete-items)`),vu(571,`br`),Kg()()(),Qc(572,`td`,25)(573,`code`,35),Sk(574,`EventEmitter`),Kg()(),Qc(575,`td`,27),Sk(576,`-`),Kg(),Qc(577,`td`,28)(578,`em`)(579,`strong`),Sk(580,`(opcional)`),Kg()(),Qc(581,`p`),Sk(582,`Evento executado após o método de exclusão ser finalizado.`),Kg(),Qc(583,`pre`)(584,`code`),Sk(585,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),Kg()(),Qc(586,`blockquote`)(587,`p`),Sk(588,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),Kg()()()(),Qc(589,`tr`,50)(590,`td`,22)(591,`div`,33)(592,`span`,34),Sk(593,` (p-expanded)`),vu(594,`br`),Kg()()(),Qc(595,`td`,25)(596,`code`,35),Sk(597,`EventEmitter`),Kg()(),Qc(598,`td`,27),Sk(599,`-`),Kg(),Qc(600,`td`,28)(601,`em`)(602,`strong`),Sk(603,`(opcional)`),Kg()(),Qc(604,`p`),Sk(605,`Evento executado ao expandir uma linha do `),Qc(606,`code`),Sk(607,`po-table`),Kg(),Sk(608,`.`),Kg(),Qc(609,`blockquote`)(610,`p`),Sk(611,`Como parâmetro o componente envia o item expandido.`),Kg()()()(),Qc(612,`tr`,51)(613,`td`,22)(614,`div`,23)(615,`span`,24),Sk(616,` p-filter-type`),vu(617,`br`),Kg()()(),Qc(618,`td`,25)(619,`code`,52),Sk(620,`PoSearchFilterMode`),Kg()(),Qc(621,`td`,27)(622,`p`)(623,`code`),Sk(624,`startsWith`),Kg()()(),Qc(625,`td`,28)(626,`em`)(627,`strong`),Sk(628,`(opcional)`),Kg()(),Qc(629,`p`),Sk(630,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),Kg(),Qc(631,`blockquote`)(632,`p`),Sk(633,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),Kg()()()(),Qc(634,`tr`,53)(635,`td`,22)(636,`div`,23)(637,`span`,24),Sk(638,` p-filtered-columns`),vu(639,`br`),Kg()()(),Qc(640,`td`,25)(641,`code`,54),Sk(642,`Array<string>`),Kg()(),Qc(643,`td`,27),Sk(644,`-`),Kg(),Qc(645,`td`,28)(646,`em`)(647,`strong`),Sk(648,`(opcional)`),Kg()(),Qc(649,`p`),Sk(650,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),Kg()()(),Qc(651,`tr`,55)(652,`td`,22)(653,`div`,23)(654,`span`,24),Sk(655,` p-height`),vu(656,`br`),Kg()()(),Qc(657,`td`,25)(658,`code`,56),Sk(659,`number`),Kg()(),Qc(660,`td`,27),Sk(661,`-`),Kg(),Qc(662,`td`,28)(663,`em`)(664,`strong`),Sk(665,`(opcional)`),Kg()(),Qc(666,`p`),Sk(667,`Define a altura da tabela em `),Qc(668,`em`),Sk(669,`pixels`),Kg(),Sk(670,` e fixa o cabeçalho.`),Kg(),Qc(671,`p`),Sk(672,`Ao utilizar essa propriedade será inserido o `),Qc(673,`code`),Sk(674,`virtual-scroll`),Kg(),Sk(675,` na tabela melhorando a performance.`),Kg()()(),Qc(676,`tr`,57)(677,`td`,22)(678,`div`,23)(679,`span`,24),Sk(680,` p-hide-action-fixed-columns`),vu(681,`br`),Kg()()(),Qc(682,`td`,25)(683,`code`,26),Sk(684,`boolean`),Kg()(),Qc(685,`td`,27)(686,`p`)(687,`code`),Sk(688,`false`),Kg()()(),Qc(689,`td`,28)(690,`em`)(691,`strong`),Sk(692,`(opcional)`),Kg()(),Qc(693,`p`),Sk(694,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),Kg()()(),Qc(695,`tr`,58)(696,`td`,22)(697,`div`,23)(698,`span`,24),Sk(699,` p-hide-batch-actions`),vu(700,`br`),Kg()()(),Qc(701,`td`,25)(702,`code`,26),Sk(703,`boolean`),Kg()(),Qc(704,`td`,27)(705,`p`)(706,`code`),Sk(707,`true`),Kg()()(),Qc(708,`td`,28)(709,`em`)(710,`strong`),Sk(711,`(opcional)`),Kg()(),Qc(712,`p`),Sk(713,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),Kg()()(),Qc(714,`tr`,59)(715,`td`,22)(716,`div`,23)(717,`span`,24),Sk(718,` p-hide-columns-manager`),vu(719,`br`),Kg()()(),Qc(720,`td`,25)(721,`code`,26),Sk(722,`boolean`),Kg()(),Qc(723,`td`,27)(724,`p`)(725,`code`),Sk(726,`false`),Kg()()(),Qc(727,`td`,28)(728,`em`)(729,`strong`),Sk(730,`(opcional)`),Kg()(),Qc(731,`p`),Sk(732,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),Kg()()(),Qc(733,`tr`,60)(734,`td`,22)(735,`div`,23)(736,`span`,24),Sk(737,` p-hide-detail`),vu(738,`br`),Kg()()(),Qc(739,`td`,25)(740,`code`,26),Sk(741,`boolean`),Kg()(),Qc(742,`td`,27)(743,`p`)(744,`code`),Sk(745,`false`),Kg()()(),Qc(746,`td`,28)(747,`em`)(748,`strong`),Sk(749,`(opcional)`),Kg()(),Qc(750,`p`),Sk(751,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),Kg()()(),Qc(752,`tr`,61)(753,`td`,22)(754,`div`,23)(755,`span`,24),Sk(756,` p-hide-select-all`),vu(757,`br`),Kg()()(),Qc(758,`td`,25)(759,`code`,26),Sk(760,`boolean`),Kg()(),Qc(761,`td`,27)(762,`p`)(763,`code`),Sk(764,`false`),Kg()()(),Qc(765,`td`,28)(766,`p`),Sk(767,`Esconde o `),Qc(768,`em`),Sk(769,`checkbox`),Kg(),Sk(770,` para seleção de todas as linhas.`),Kg(),Qc(771,`blockquote`)(772,`p`),Sk(773,`Sempre receberá `),Qc(774,`em`),Sk(775,`true`),Kg(),Sk(776,` caso a seleção de apenas uma linha esteja ativa.`),Kg()()()(),Qc(777,`tr`,62)(778,`td`,22)(779,`div`,23)(780,`span`,24),Sk(781,` p-hide-table-search`),vu(782,`br`),Kg()()(),Qc(783,`td`,25)(784,`code`,26),Sk(785,`boolean`),Kg()(),Qc(786,`td`,27)(787,`p`)(788,`code`),Sk(789,`true`),Kg()()(),Qc(790,`td`,28)(791,`em`)(792,`strong`),Sk(793,`(opcional)`),Kg()(),Qc(794,`p`),Sk(795,`Permite que o campo de pesquisa seja escondido.`),Kg()()(),Qc(796,`tr`,63)(797,`td`,22)(798,`div`,23)(799,`span`,24),Sk(800,` p-infinite-scroll`),vu(801,`br`),Kg()()(),Qc(802,`td`,25)(803,`code`,26),Sk(804,`boolean`),Kg()(),Qc(805,`td`,27)(806,`p`)(807,`code`),Sk(808,`false`),Kg()()(),Qc(809,`td`,28)(810,`em`)(811,`strong`),Sk(812,`(opcional)`),Kg()(),Qc(813,`p`),Sk(814,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Qc(815,`code`),Sk(816,`p-show-more`),Kg(),Sk(817,`.`),Kg(),Qc(818,`p`)(819,`strong`),Sk(820,`Regras de utilização:`),Kg()(),Qc(821,`ul`)(822,`li`),Sk(823,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),Qc(824,`code`),Sk(825,`p-height`),Kg(),Sk(826,` e que possuem o scroll já na carga inicial dos dados.`),Kg()()()(),Qc(827,`tr`,64)(828,`td`,22)(829,`div`,23)(830,`span`,24),Sk(831,` p-infinite-scroll-distance`),vu(832,`br`),Kg()()(),Qc(833,`td`,25)(834,`code`,56),Sk(835,`number`),Kg()(),Qc(836,`td`,27),Sk(837,`-`),Kg(),Qc(838,`td`,28)(839,`em`)(840,`strong`),Sk(841,`(opcional)`),Kg()(),Qc(842,`p`),Sk(843,`Define o percentual necessário para disparar o evento `),Qc(844,`code`),Sk(845,`p-show-more`),Kg(),Sk(846,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),Kg(),Qc(847,`p`)(848,`strong`),Sk(849,`Exemplos:`),Kg()(),Qc(850,`ul`)(851,`li`),Sk(852,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),Qc(853,`code`),Sk(854,`p-show-more`),Kg(),Sk(855,` será disparado.`),Kg()()()(),Qc(856,`tr`,65)(857,`td`,22)(858,`div`,23)(859,`span`,24),Sk(860,` p-items`),vu(861,`br`),Kg()()(),Qc(862,`td`,25)(863,`code`,66),Sk(864,`any[]`),Kg()(),Qc(865,`td`,27),Sk(866,`-`),Kg(),Qc(867,`td`,28)(868,`p`),Sk(869,`Lista de itens da tabela.`),Kg(),Qc(870,`blockquote`)(871,`p`),Sk(872,`Se falso, será inicializado como um `),Qc(873,`em`),Sk(874,`array`),Kg(),Sk(875,` vazio.`),Kg()()()(),Qc(876,`tr`,67)(877,`td`,22)(878,`div`,23)(879,`span`,24),Sk(880,` p-literals`),vu(881,`br`),Kg()()(),Qc(882,`td`,25)(883,`code`,68),Sk(884,`PoTableLiterals`),Kg()(),Qc(885,`td`,27),Sk(886,`-`),Kg(),Qc(887,`td`,28)(888,`em`)(889,`strong`),Sk(890,`(opcional)`),Kg()(),Qc(891,`p`),Sk(892,`Objeto com as literais usadas no `),Qc(893,`code`),Sk(894,`po-table`),Kg(),Sk(895,`.`),Kg(),Qc(896,`p`),Sk(897,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(898,`pre`)(899,`code`),Sk(900,`const customLiterals: PoTableLiterals = {
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
`),Kg()(),Qc(901,`p`),Sk(902,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(903,`pre`)(904,`code`),Sk(905,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),Kg()(),Qc(906,`p`),Sk(907,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(908,`pre`)(909,`code`),Sk(910,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),Kg()(),Qc(911,`blockquote`)(912,`p`),Sk(913,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(914,`a`,69)(915,`code`),Sk(916,`PoI18nService`),Kg()(),Sk(917,` ou do browser.`),Kg()()()(),Qc(918,`tr`,70)(919,`td`,22)(920,`div`,23)(921,`span`,24),Sk(922,` p-loading`),vu(923,`br`),Kg()()(),Qc(924,`td`,25)(925,`code`,26),Sk(926,`boolean`),Kg()(),Qc(927,`td`,27)(928,`p`)(929,`code`),Sk(930,`false`),Kg()()(),Qc(931,`td`,28)(932,`em`)(933,`strong`),Sk(934,`(opcional)`),Kg()(),Qc(935,`p`),Sk(936,`Bloqueia a interação do usuário com os dados da `),Qc(937,`em`),Sk(938,`table`),Kg(),Sk(939,`.`),Kg()()(),Qc(940,`tr`,71)(941,`td`,22)(942,`div`,23)(943,`span`,24),Sk(944,` p-loading-show-more`),vu(945,`br`),Kg()()(),Qc(946,`td`,25)(947,`code`,26),Sk(948,`boolean`),Kg()(),Qc(949,`td`,27)(950,`p`)(951,`code`),Sk(952,`false`),Kg()()(),Qc(953,`td`,28)(954,`em`)(955,`strong`),Sk(956,`(opcional)`),Kg()(),Qc(957,`p`),Sk(958,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),Kg()()(),Qc(959,`tr`,72)(960,`td`,22)(961,`div`,23)(962,`span`,24),Sk(963,` p-max-columns`),vu(964,`br`),Kg()()(),Qc(965,`td`,25)(966,`code`,56),Sk(967,`number`),Kg()(),Qc(968,`td`,27),Sk(969,`-`),Kg(),Qc(970,`td`,28)(971,`em`)(972,`strong`),Sk(973,`(opcional)`),Kg()(),Qc(974,`p`),Sk(975,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),Kg(),Qc(976,`p`),Sk(977,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),Kg()()(),Qc(978,`tr`,73)(979,`td`,22)(980,`div`,23)(981,`span`,24),Sk(982,` p-param-delete-api`),vu(983,`br`),Kg()()(),Qc(984,`td`,25)(985,`code`,45),Sk(986,`string`),Kg()(),Qc(987,`td`,27)(988,`p`)(989,`code`),Sk(990,`id`),Kg()()(),Qc(991,`td`,28)(992,`em`)(993,`strong`),Sk(994,`(opcional)`),Kg()(),Qc(995,`p`),Sk(996,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),Kg(),Qc(997,`p`),Sk(998,`É necessário a utilização da propriedade `),Qc(999,`code`),Sk(1e3,`p-service-delete`),Kg(),Sk(1001,` em conjunto.`),Kg()()(),Qc(1002,`tr`,74)(1003,`td`,22)(1004,`div`,33)(1005,`span`,34),Sk(1006,` (p-search-ai-error)`),vu(1007,`br`),Kg()()(),Qc(1008,`td`,25)(1009,`code`,35),Sk(1010,`EventEmitter`),Kg()(),Qc(1011,`td`,27),Sk(1012,`-`),Kg(),Qc(1013,`td`,28)(1014,`em`)(1015,`strong`),Sk(1016,`(opcional)`),Kg()(),Qc(1017,`p`),Sk(1018,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),Qc(1019,`code`),Sk(1020,`p-search-ai-field`),Kg(),Sk(1021,`.`),Kg(),Qc(1022,`p`),Sk(1023,`O parâmetro enviado é um objeto `),Qc(1024,`code`),Sk(1025,`PoSearchAiError`),Kg(),Sk(1026,` contendo:`),Kg(),Qc(1027,`ul`)(1028,`li`)(1029,`code`),Sk(1030,`statusCode`),Kg(),Sk(1031,`: código HTTP do erro (ex: `),Qc(1032,`code`),Sk(1033,`408`),Kg(),Sk(1034,` para timeout, `),Qc(1035,`code`),Sk(1036,`500`),Kg(),Sk(1037,` para erro interno).`),Kg(),Qc(1038,`li`)(1039,`code`),Sk(1040,`message`),Kg(),Sk(1041,`: mensagem descritiva do erro.`),Kg()()()(),Qc(1042,`tr`,75)(1043,`td`,22)(1044,`div`,23)(1045,`span`,24),Sk(1046,` p-search-ai-field`),vu(1047,`br`),Kg()()(),Qc(1048,`td`,25)(1049,`code`,76),Sk(1050,`PoTableSearchAiField`),Kg()(),Qc(1051,`td`,27),Sk(1052,`-`),Kg(),Qc(1053,`td`,28)(1054,`em`)(1055,`strong`),Sk(1056,`(opcional)`),Kg()(),Qc(1057,`p`),Sk(1058,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),Qc(1059,`code`),Sk(1060,`po-search`),Kg(),Sk(1061,`) pelo componente `),Qc(1062,`code`),Sk(1063,`po-search-ai`),Kg(),Sk(1064,` na barra de ações.`),Kg(),Qc(1065,`p`),Sk(1066,`Recebe um objeto do tipo `),Qc(1067,`code`),Sk(1068,`PoTableSearchAiField`),Kg(),Sk(1069,` com as configurações necessárias:`),Kg(),Qc(1070,`ul`)(1071,`li`)(1072,`code`),Sk(1073,`url`),Kg(),Qc(1074,`em`),Sk(1075,`(obrigatório)`),Kg(),Sk(1076,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),Qc(1077,`a`,77)(1078,`code`),Sk(1079,`po-sample-api`),Kg()(),Sk(1080,`.`),Kg(),Qc(1081,`li`)(1082,`code`),Sk(1083,`columns`),Kg(),Sk(1084,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),Qc(1085,`code`),Sk(1086,`p-columns`),Kg(),Sk(1087,`.`),Kg(),Qc(1088,`li`)(1089,`code`),Sk(1090,`minConfidence`),Kg(),Sk(1091,`: confiança mínima para aplicação automática do filtro (padrão `),Qc(1092,`code`),Sk(1093,`0.5`),Kg(),Sk(1094,`).`),Kg(),Qc(1095,`li`)(1096,`code`),Sk(1097,`timeout`),Kg(),Sk(1098,`: tempo máximo de espera pela resposta da IA em ms (padrão `),Qc(1099,`code`),Sk(1100,`10000`),Kg(),Sk(1101,`).`),Kg(),Qc(1102,`li`)(1103,`code`),Sk(1104,`placeholder`),Kg(),Sk(1105,`: texto exibido como placeholder no campo.`),Kg(),Qc(1106,`li`)(1107,`code`),Sk(1108,`literals`),Kg(),Sk(1109,`: literais customizadas do `),Qc(1110,`code`),Sk(1111,`po-search-ai`),Kg(),Sk(1112,`.`),Kg(),Qc(1113,`li`)(1114,`code`),Sk(1115,`apply`),Kg(),Sk(1116,`: estratégia de aplicação do filtro — `),Qc(1117,`code`),Sk(1118,`'auto'`),Kg(),Sk(1119,` (padrão), `),Qc(1120,`code`),Sk(1121,`'parser'`),Kg(),Sk(1122,`, `),Qc(1123,`code`),Sk(1124,`'server'`),Kg(),Sk(1125,`, `),Qc(1126,`code`),Sk(1127,`'none'`),Kg(),Sk(1128,`
ou uma fun\xE7\xE3o `),Qc(1129,`code`),Sk(1130,`(result: PoSearchAiResult) => void`),Kg(),Sk(1131,`.`),Kg()(),Qc(1132,`p`),Sk(1133,`Quando esta propriedade está definida, os eventos `),Qc(1134,`code`),Sk(1135,`p-search-ai-result`),Kg(),Sk(1136,`, `),Qc(1137,`code`),Sk(1138,`p-search-ai-low-confidence`),Kg(),Sk(1139,`
e `),Qc(1140,`code`),Sk(1141,`p-search-ai-error`),Kg(),Sk(1142,` ficam disponíveis para tratamento customizado.`),Kg()()(),Qc(1143,`tr`,78)(1144,`td`,22)(1145,`div`,33)(1146,`span`,34),Sk(1147,` (p-search-ai-low-confidence)`),vu(1148,`br`),Kg()()(),Qc(1149,`td`,25)(1150,`code`,35),Sk(1151,`EventEmitter`),Kg()(),Qc(1152,`td`,27),Sk(1153,`-`),Kg(),Qc(1154,`td`,28)(1155,`em`)(1156,`strong`),Sk(1157,`(opcional)`),Kg()(),Qc(1158,`p`),Sk(1159,`Evento emitido quando o `),Qc(1160,`code`),Sk(1161,`po-search-ai`),Kg(),Sk(1162,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),Qc(1163,`code`),Sk(1164,`minConfidence`),Kg(),Sk(1165,` configurado em `),Qc(1166,`code`),Sk(1167,`p-search-ai-field`),Kg(),Sk(1168,`. Nesse caso, o filtro `),Qc(1169,`strong`),Sk(1170,`não`),Kg(),Sk(1171,` \xE9 aplicado
automaticamente.`),Kg(),Qc(1172,`p`),Sk(1173,`O parâmetro enviado é um objeto `),Qc(1174,`code`),Sk(1175,`PoSearchAiResult`),Kg(),Sk(1176,` com os mesmos campos de `),Qc(1177,`code`),Sk(1178,`p-search-ai-result`),Kg(),Sk(1179,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),Kg()()(),Qc(1180,`tr`,79)(1181,`td`,22)(1182,`div`,33)(1183,`span`,34),Sk(1184,` (p-search-ai-result)`),vu(1185,`br`),Kg()()(),Qc(1186,`td`,25)(1187,`code`,35),Sk(1188,`EventEmitter`),Kg()(),Qc(1189,`td`,27),Sk(1190,`-`),Kg(),Qc(1191,`td`,28)(1192,`em`)(1193,`strong`),Sk(1194,`(opcional)`),Kg()(),Qc(1195,`p`),Sk(1196,`Evento emitido quando o `),Qc(1197,`code`),Sk(1198,`po-search-ai`),Kg(),Sk(1199,` retorna um resultado com confian\xE7a igual ou superior
ao `),Qc(1200,`code`),Sk(1201,`minConfidence`),Kg(),Sk(1202,` configurado em `),Qc(1203,`code`),Sk(1204,`p-search-ai-field`),Kg(),Sk(1205,`.`),Kg(),Qc(1206,`p`),Sk(1207,`O parâmetro enviado é um objeto `),Qc(1208,`code`),Sk(1209,`PoSearchAiResult`),Kg(),Sk(1210,` contendo:`),Kg(),Qc(1211,`ul`)(1212,`li`)(1213,`code`),Sk(1214,`filter`),Kg(),Sk(1215,`: string de filtro OData v4 gerada pela IA (ex: `),Qc(1216,`code`),Sk(1217,`"city eq 'SP' and salary gt 5000"`),Kg(),Sk(1218,`).`),Kg(),Qc(1219,`li`)(1220,`code`),Sk(1221,`description`),Kg(),Sk(1222,`: descrição em linguagem natural do filtro aplicado.`),Kg(),Qc(1223,`li`)(1224,`code`),Sk(1225,`confidence`),Kg(),Sk(1226,`: nível de confiança da resposta (0.0 a 1.0).`),Kg()(),Qc(1227,`blockquote`)(1228,`p`),Sk(1229,`Quando `),Qc(1230,`code`),Sk(1231,`apply`),Kg(),Sk(1232,` for diferente de `),Qc(1233,`code`),Sk(1234,`'none'`),Kg(),Sk(1235,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),Kg()()()(),Qc(1236,`tr`,80)(1237,`td`,22)(1238,`div`,23)(1239,`span`,24),Sk(1240,` p-selectable`),vu(1241,`br`),Kg()()(),Qc(1242,`td`,25)(1243,`code`,26),Sk(1244,`boolean`),Kg()(),Qc(1245,`td`,27)(1246,`p`)(1247,`code`),Sk(1248,`false`),Kg()()(),Qc(1249,`td`,28)(1250,`em`)(1251,`strong`),Sk(1252,`(opcional)`),Kg()(),Qc(1253,`p`),Sk(1254,`Permite a seleção de linhas na tabela e, caso a propriedade `),Qc(1255,`code`),Sk(1256,`p-single-select`),Kg(),Sk(1257,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),Kg(),Qc(1258,`p`)(1259,`strong`),Sk(1260,`Importante:`),Kg()(),Qc(1261,`ul`)(1262,`li`),Sk(1263,`As linhas de detalhe definidas em `),Qc(1264,`code`),Sk(1265,`PoTableDetail`),Kg(),Sk(1266,` possuem comportamento independente da linha mestre;`),Kg(),Qc(1267,`li`),Sk(1268,`Cada linha possui por padrão a propriedade dinâmica `),Qc(1269,`code`),Sk(1270,`$selected`),Kg(),Sk(1271,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Qc(1272,`code`),Sk(1273,`item.$selected`),Kg(),Sk(1274,` ou `),Qc(1275,`code`),Sk(1276,`item['$selected']`),Kg(),Sk(1277,`.`),Kg()()()(),Qc(1278,`tr`,81)(1279,`td`,22)(1280,`div`,23)(1281,`span`,24),Sk(1282,` p-selectable-entire-line`),vu(1283,`br`),Kg()()(),Qc(1284,`td`,25)(1285,`code`,26),Sk(1286,`boolean`),Kg()(),Qc(1287,`td`,27)(1288,`p`)(1289,`code`),Sk(1290,`true`),Kg()()(),Qc(1291,`td`,28)(1292,`p`),Sk(1293,`Permite selecionar um item da tabela clicando na linha.`),Kg(),Qc(1294,`blockquote`)(1295,`p`),Sk(1296,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),Qc(1297,`code`),Sk(1298,`false`),Kg(),Sk(1299,`.`),Kg()()()(),Qc(1300,`tr`,82)(1301,`td`,22)(1302,`div`,33)(1303,`span`,34),Sk(1304,` (p-selected)`),vu(1305,`br`),Kg()()(),Qc(1306,`td`,25)(1307,`code`,35),Sk(1308,`EventEmitter`),Kg()(),Qc(1309,`td`,27),Sk(1310,`-`),Kg(),Qc(1311,`td`,28)(1312,`em`)(1313,`strong`),Sk(1314,`(opcional)`),Kg()(),Qc(1315,`p`),Sk(1316,`Evento executado ao selecionar uma linha do `),Qc(1317,`code`),Sk(1318,`po-table`),Kg(),Sk(1319,`.`),Kg()()(),Qc(1320,`tr`,83)(1321,`td`,22)(1322,`div`,23)(1323,`span`,24),Sk(1324,` p-service-api`),vu(1325,`br`),Kg()()(),Qc(1326,`td`,25)(1327,`code`,45),Sk(1328,`string`),Kg()(),Qc(1329,`td`,27),Sk(1330,`-`),Kg(),Qc(1331,`td`,28)(1332,`em`)(1333,`strong`),Sk(1334,`(opcional)`),Kg()(),Qc(1335,`p`),Sk(1336,`URL da API responsável por retornar os registros.`),Kg(),Qc(1337,`p`),Sk(1338,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),Qc(1339,`code`),Sk(1340,`page`),Kg(),Sk(1341,` e `),Qc(1342,`code`),Sk(1343,`pageSize`),Kg(),Sk(1344,`, conforme abaixo:`),Kg(),Qc(1345,`pre`)(1346,`code`),Sk(1347,`url + ?page=1&pageSize=10
`),Kg()(),Qc(1348,`p`),Sk(1349,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Qc(1350,`code`),Sk(1351,`order`),Kg(),Sk(1352,`, por exemplo:`),Kg(),Qc(1353,`ul`)(1354,`li`)(1355,`p`),Sk(1356,`Coluna decrescente:`),Kg(),Qc(1357,`pre`)(1358,`code`),Sk(1359,`url + ?page=1&pageSize=10&order=-name
`),Kg()()(),Qc(1360,`li`)(1361,`p`),Sk(1362,`Coluna ascendente:`),Kg(),Qc(1363,`pre`)(1364,`code`),Sk(1365,`url + ?page=1&pageSize=10&order=name
`),Kg()()()(),Qc(1366,`blockquote`)(1367,`p`),Sk(1368,`Esta URL deve retornar e receber os dados no padrão de `),Qc(1369,`a`,84),Sk(1370,`API do PO UI`),Kg(),Sk(1371,`.`),Kg()()()(),Qc(1372,`tr`,85)(1373,`td`,22)(1374,`div`,23)(1375,`span`,24),Sk(1376,` p-service-delete`),vu(1377,`br`),Kg()()(),Qc(1378,`td`,25)(1379,`code`,45),Sk(1380,`string`),Kg()(),Qc(1381,`td`,27),Sk(1382,`-`),Kg(),Qc(1383,`td`,28)(1384,`em`)(1385,`strong`),Sk(1386,`(opcional)`),Kg()(),Qc(1387,`p`),Sk(1388,`URL da API responsável por excluir os registros.`),Kg(),Qc(1389,`p`),Sk(1390,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),Qc(1391,`code`),Sk(1392,`p-param-delete-api`),Kg(),Sk(1393,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Qc(1394,`code`),Sk(1395,`id`),Kg(),Sk(1396,`.`),Kg(),Qc(1397,`blockquote`)(1398,`p`),Sk(1399,`Esta URL deve retornar e receber os dados no padrão de `),Qc(1400,`a`,84),Sk(1401,`API do PO UI`),Kg(),Sk(1402,`.`),Kg()()()(),Qc(1403,`tr`,86)(1404,`td`,22)(1405,`div`,33)(1406,`span`,34),Sk(1407,` (p-show-more)`),vu(1408,`br`),Kg()()(),Qc(1409,`td`,25)(1410,`code`,35),Sk(1411,`EventEmitter`),Kg()(),Qc(1412,`td`,27),Sk(1413,`-`),Kg(),Qc(1414,`td`,28)(1415,`em`)(1416,`strong`),Sk(1417,`(opcional)`),Kg()(),Qc(1418,`p`),Sk(1419,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),Kg(),Qc(1420,`p`),Sk(1421,`Recebe um objeto `),Qc(1422,`code`),Sk(1423,`{ column, type }`),Kg(),Sk(1424,` onde:`),Kg(),Qc(1425,`ul`)(1426,`li`),Sk(1427,`column (`),Qc(1428,`code`),Sk(1429,`PoTableColumn`),Kg(),Sk(1430,`): objeto da coluna que está ordenada.`),Kg(),Qc(1431,`li`),Sk(1432,`type (`),Qc(1433,`code`),Sk(1434,`PoTableColumnSortType`),Kg(),Sk(1435,`): tipo da ordenação.`),Kg()()()(),Qc(1436,`tr`,87)(1437,`td`,22)(1438,`div`,23)(1439,`span`,24),Sk(1440,` p-show-more-disabled`),vu(1441,`br`),Kg()()(),Qc(1442,`td`,25)(1443,`code`,26),Sk(1444,`boolean`),Kg()(),Qc(1445,`td`,27)(1446,`p`)(1447,`code`),Sk(1448,`false`),Kg()()(),Qc(1449,`td`,28)(1450,`p`),Sk(1451,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),Kg()()(),Qc(1452,`tr`,88)(1453,`td`,22)(1454,`div`,23)(1455,`span`,24),Sk(1456,` p-single-select`),vu(1457,`br`),Kg()()(),Qc(1458,`td`,25)(1459,`code`,26),Sk(1460,`boolean`),Kg()(),Qc(1461,`td`,27),Sk(1462,`-`),Kg(),Qc(1463,`td`,28)(1464,`p`),Sk(1465,`Define que somente uma linha da tabela pode ser selecionada.`),Kg(),Qc(1466,`blockquote`)(1467,`p`),Sk(1468,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),Kg()()()(),Qc(1469,`tr`,89)(1470,`td`,22)(1471,`div`,23)(1472,`span`,24),Sk(1473,` p-sort`),vu(1474,`br`),Kg()()(),Qc(1475,`td`,25)(1476,`code`,26),Sk(1477,`boolean`),Kg()(),Qc(1478,`td`,27)(1479,`p`)(1480,`code`),Sk(1481,`false`),Kg()()(),Qc(1482,`td`,28)(1483,`em`)(1484,`strong`),Sk(1485,`(opcional)`),Kg()(),Qc(1486,`p`),Sk(1487,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),Kg()()(),Qc(1488,`tr`,90)(1489,`td`,22)(1490,`div`,33)(1491,`span`,34),Sk(1492,` (p-sort-by)`),vu(1493,`br`),Kg()()(),Qc(1494,`td`,25)(1495,`code`,35),Sk(1496,`EventEmitter`),Kg()(),Qc(1497,`td`,27),Sk(1498,`-`),Kg(),Qc(1499,`td`,28)(1500,`em`)(1501,`strong`),Sk(1502,`(opcional)`),Kg()(),Qc(1503,`p`),Sk(1504,`Evento executado ao ordenar colunas da tabela.`),Kg(),Qc(1505,`p`),Sk(1506,`Recebe um objeto `),Qc(1507,`code`),Sk(1508,`{ column, type }`),Kg(),Sk(1509,` onde:`),Kg(),Qc(1510,`ul`)(1511,`li`),Sk(1512,`column (`),Qc(1513,`code`),Sk(1514,`PoTableColumn`),Kg(),Sk(1515,`): objeto da coluna que foi clicada/ordenada.`),Kg(),Qc(1516,`li`),Sk(1517,`type (`),Qc(1518,`code`),Sk(1519,`PoTableColumnSortType`),Kg(),Sk(1520,`): tipo da ordenação.`),Kg()()()(),Qc(1521,`tr`,91)(1522,`td`,22)(1523,`div`,23)(1524,`span`,24),Sk(1525,` p-spacing`),vu(1526,`br`),Kg()()(),Qc(1527,`td`,25)(1528,`code`,45),Sk(1529,`string`),Kg()(),Qc(1530,`td`,27)(1531,`p`)(1532,`code`),Sk(1533,`medium`),Kg()()(),Qc(1534,`td`,28)(1535,`em`)(1536,`strong`),Sk(1537,`(opcional)`),Kg()(),Qc(1538,`p`),Sk(1539,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Qc(1540,`strong`),Sk(1541,`PoTableColumnSpacing`),Kg(),Sk(1542,`.`),Kg(),Qc(1543,`blockquote`)(1544,`p`),Sk(1545,`Em nível de acessibilidade `),Qc(1546,`strong`),Sk(1547,`AA`),Kg(),Sk(1548,`, caso o valor de `),Qc(1549,`code`),Sk(1550,`p-spacing`),Kg(),Sk(1551,` não seja definido, o valor padrão será `),Qc(1552,`code`),Sk(1553,`extraSmall`),Kg(),Sk(1554,`
nos seguintes cen\xE1rios:`),Kg(),Qc(1555,`ul`)(1556,`li`),Sk(1557,`Quando o valor de `),Qc(1558,`code`),Sk(1559,`p-components-size`),Kg(),Sk(1560,` for `),Qc(1561,`code`),Sk(1562,`small`),Kg(),Sk(1563,`;`),Kg(),Qc(1564,`li`),Sk(1565,`Quando o valor padrão dos componentes for configurado como `),Qc(1566,`code`),Sk(1567,`small`),Kg(),Sk(1568,` no
`),Qc(1569,`a`,46),Sk(1570,`serviço de tema`),Kg(),Sk(1571,`.`),Kg()()()()(),Qc(1572,`tr`,92)(1573,`td`,22)(1574,`div`,23)(1575,`span`,24),Sk(1576,` p-striped`),vu(1577,`br`),Kg()()(),Qc(1578,`td`,25)(1579,`code`,26),Sk(1580,`boolean`),Kg()(),Qc(1581,`td`,27)(1582,`p`)(1583,`code`),Sk(1584,`false`),Kg()()(),Qc(1585,`td`,28)(1586,`p`),Sk(1587,`Habilita ou desabilita o estilo listrado da tabela (`),Qc(1588,`code`),Sk(1589,`striped`),Kg(),Sk(1590,`).`),Kg(),Qc(1591,`blockquote`)(1592,`p`),Sk(1593,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),Kg()()()(),Qc(1594,`tr`,93)(1595,`td`,22)(1596,`div`,23)(1597,`span`,24),Sk(1598,` p-text-wrap`),vu(1599,`br`),Kg()()(),Qc(1600,`td`,25)(1601,`code`,26),Sk(1602,`boolean`),Kg()(),Qc(1603,`td`,27)(1604,`p`)(1605,`code`),Sk(1606,`false`),Kg()()(),Qc(1607,`td`,28)(1608,`em`)(1609,`strong`),Sk(1610,`(opcional)`),Kg()(),Qc(1611,`p`),Sk(1612,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg(),Qc(1613,`blockquote`)(1614,`p`),Sk(1615,`Incompatível com `),Qc(1616,`code`),Sk(1617,`virtual-scroll`),Kg(),Sk(1618,`, que requer altura fixa nas linhas.`),Kg()()()(),Qc(1619,`tr`,94)(1620,`td`,22)(1621,`div`,33)(1622,`span`,34),Sk(1623,` (p-unselected)`),vu(1624,`br`),Kg()()(),Qc(1625,`td`,25)(1626,`code`,35),Sk(1627,`EventEmitter`),Kg()(),Qc(1628,`td`,27),Sk(1629,`-`),Kg(),Qc(1630,`td`,28)(1631,`em`)(1632,`strong`),Sk(1633,`(opcional)`),Kg()(),Qc(1634,`p`),Sk(1635,`Evento executado ao desmarcar a seleção de uma linha do `),Qc(1636,`code`),Sk(1637,`po-table`),Kg(),Sk(1638,`.`),Kg()()(),Qc(1639,`tr`,95)(1640,`td`,22)(1641,`div`,23)(1642,`span`,24),Sk(1643,` p-virtual-scroll`),vu(1644,`br`),Kg()()(),Qc(1645,`td`,25)(1646,`code`,26),Sk(1647,`boolean`),Kg()(),Qc(1648,`td`,27)(1649,`p`)(1650,`code`),Sk(1651,`true`),Kg()()(),Qc(1652,`td`,28)(1653,`em`)(1654,`strong`),Sk(1655,`(opcional)`),Kg()(),Qc(1656,`p`),Sk(1657,`Habilita o `),Qc(1658,`code`),Sk(1659,`virtual-scroll`),Kg(),Sk(1660,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Qc(1661,`code`),Sk(1662,`p-height`),Kg(),Sk(1663,`) para funcionar corretamente.`),Kg(),Qc(1664,`blockquote`)(1665,`p`),Sk(1666,`Incompatível com `),Qc(1667,`code`),Sk(1668,`p-text-wrap`),Kg(),Sk(1669,` e `),Qc(1670,`code`),Sk(1671,`master-detail`),Kg(),Sk(1672,`, pois o `),Qc(1673,`code`),Sk(1674,`virtual-scroll`),Kg(),Sk(1675,` exige altura fixa nas linhas.`),Kg()()()()(),Qc(1676,`h3`,17),Sk(1677,`Métodos`),Kg(),Qc(1678,`table`,96)(1679,`tr`,97)(1680,`th`,98)(1681,`div`,23)(1682,`h4`)(1683,`span`,24),Sk(1684,` applyFilters `),Kg()()()()(),Qc(1685,`tr`,28)(1686,`td`,28)(1687,`p`),Sk(1688,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),Kg(),Qc(1689,`p`),Sk(1690,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),Kg(),Qc(1691,`pre`)(1692,`code`),Sk(1693,`url + ?page=1&pageSize=10
`),Kg()(),Qc(1694,`blockquote`)(1695,`p`),Sk(1696,`Obs: os parâmetros `),Qc(1697,`code`),Sk(1698,`page`),Kg(),Sk(1699,` e `),Qc(1700,`code`),Sk(1701,`pageSize`),Kg(),Sk(1702,` sempre serão chamados independente de ser enviados outros parâmetros.`),Kg()(),Qc(1703,`p`),Sk(1704,`Caso sejam informados os parâmetros `),Qc(1705,`code`),Sk(1706,`{ name: 'JOHN', age: '23' }`),Kg(),Sk(1707,`, todos serão adicionados ao GET, conforme abaixo:`),Kg(),Qc(1708,`pre`)(1709,`code`),Sk(1710,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),Kg()()()()(),Qc(1711,`h5`)(1712,`b`),Sk(1713,`Parâmetros`),Kg()(),Qc(1714,`table`,18)(1715,`tr`,19)(1716,`th`,20),Sk(1717,`Nome`),Kg(),Qc(1718,`th`,20),Sk(1719,`Tipo`),Kg(),Qc(1720,`th`,20),Sk(1721,`Descrição`),Kg()(),Qc(1722,`tr`,97)(1723,`td`,22),Sk(1724,` queryParams`),Kg(),Qc(1725,`td`,25)(1726,`code`,99),Sk(1727,` { key: value } `),Kg()(),Qc(1728,`td`,28)(1729,`p`),Sk(1730,`Formato do objeto a ser enviado.`),Kg(),Qc(1731,`blockquote`)(1732,`p`),Sk(1733,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),Kg()()()()(),vu(1734,`br`),Qc(1735,`table`,100)(1736,`tr`,97)(1737,`th`,98)(1738,`div`,23)(1739,`h4`)(1740,`span`,24),Sk(1741,` applyFixedColumns `),Kg()()()()(),Qc(1742,`tr`,28)(1743,`td`,28)(1744,`p`),Sk(1745,`Verifica se columns possuem a propriedade width.`),Kg()()()(),vu(1746,`br`),Qc(1747,`table`,101)(1748,`tr`,97)(1749,`th`,98)(1750,`div`,23)(1751,`h4`)(1752,`span`,24),Sk(1753,` collapse `),Kg()()()()(),Qc(1754,`tr`,28)(1755,`td`,28)(1756,`p`),Sk(1757,`Método que colapsa uma linha com detalhe quando executada.`),Kg()()()(),Qc(1758,`h5`)(1759,`b`),Sk(1760,`Parâmetros`),Kg()(),Qc(1761,`table`,18)(1762,`tr`,19)(1763,`th`,20),Sk(1764,`Nome`),Kg(),Qc(1765,`th`,20),Sk(1766,`Tipo`),Kg(),Qc(1767,`th`,20),Sk(1768,`Descrição`),Kg()(),Qc(1769,`tr`,97)(1770,`td`,22),Sk(1771,` rowIndex`),Kg(),Qc(1772,`td`,25)(1773,`code`,102),Sk(1774,` number `),Kg()(),Qc(1775,`td`,28)(1776,`p`),Sk(1777,`Índice da linha que será colapsada.`),Kg(),Qc(1778,`blockquote`)(1779,`p`),Sk(1780,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),Kg()()()()(),vu(1781,`br`),Qc(1782,`table`,103)(1783,`tr`,97)(1784,`th`,98)(1785,`div`,23)(1786,`h4`)(1787,`span`,24),Sk(1788,` expand `),Kg()()()()(),Qc(1789,`tr`,28)(1790,`td`,28)(1791,`p`),Sk(1792,`Método que expande uma linha com detalhe quando executada.`),Kg()()()(),Qc(1793,`h5`)(1794,`b`),Sk(1795,`Parâmetros`),Kg()(),Qc(1796,`table`,18)(1797,`tr`,19)(1798,`th`,20),Sk(1799,`Nome`),Kg(),Qc(1800,`th`,20),Sk(1801,`Tipo`),Kg(),Qc(1802,`th`,20),Sk(1803,`Descrição`),Kg()(),Qc(1804,`tr`,97)(1805,`td`,22),Sk(1806,` rowIndex`),Kg(),Qc(1807,`td`,25)(1808,`code`,102),Sk(1809,` number `),Kg()(),Qc(1810,`td`,28)(1811,`p`),Sk(1812,`Índice da linha que será expandida.`),Kg(),Qc(1813,`blockquote`)(1814,`p`),Sk(1815,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),Kg()()()()(),vu(1816,`br`),Qc(1817,`table`,104)(1818,`tr`,97)(1819,`th`,98)(1820,`div`,23)(1821,`h4`)(1822,`span`,24),Sk(1823,` getSelectedRows `),Kg()()()()(),Qc(1824,`tr`,28)(1825,`td`,28)(1826,`p`),Sk(1827,`Retorna as linhas do `),Qc(1828,`code`),Sk(1829,`po-table`),Kg(),Sk(1830,` que estão selecionadas.`),Kg()()()(),vu(1831,`br`),Qc(1832,`table`,105)(1833,`tr`,97)(1834,`th`,98)(1835,`div`,23)(1836,`h4`)(1837,`span`,24),Sk(1838,` getUnselectedRows `),Kg()()()()(),Qc(1839,`tr`,28)(1840,`td`,28)(1841,`p`),Sk(1842,`Retorna as linhas do `),Qc(1843,`code`),Sk(1844,`po-table`),Kg(),Sk(1845,` que não estão selecionadas.`),Kg()()()(),vu(1846,`br`),Qc(1847,`table`,106)(1848,`tr`,97)(1849,`th`,98)(1850,`div`,23)(1851,`h4`)(1852,`span`,24),Sk(1853,` unselectRows `),Kg()()()()(),Qc(1854,`tr`,28)(1855,`td`,28)(1856,`p`),Sk(1857,`Desmarca as linhas que estão selecionadas.`),Kg()()()(),vu(1858,`br`),Qc(1859,`table`,107)(1860,`tr`,97)(1861,`th`,98)(1862,`div`,23)(1863,`h4`)(1864,`span`,24),Sk(1865,` unselectRowItem `),Kg()()()()(),Qc(1866,`tr`,28)(1867,`td`,28)(1868,`p`),Sk(1869,`Desmarca uma linha que está selecionada.`),Kg()()()(),vu(1870,`br`),Qc(1871,`table`,108)(1872,`tr`,97)(1873,`th`,98)(1874,`div`,23)(1875,`h4`)(1876,`span`,24),Sk(1877,` selectRowItem `),Kg()()()()(),Qc(1878,`tr`,28)(1879,`td`,28)(1880,`p`),Sk(1881,`Seleciona uma linha do 'po-table'.`),Kg()()()(),vu(1882,`br`),Qc(1883,`table`,109)(1884,`tr`,97)(1885,`th`,98)(1886,`div`,23)(1887,`h4`)(1888,`span`,24),Sk(1889,` deleteItems `),Kg()()()()(),Qc(1890,`tr`,28)(1891,`td`,28)(1892,`p`),Sk(1893,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Qc(1894,`code`),Sk(1895,`p-service-delete`),Kg(),Sk(1896,`, será necessário excluir 1 item por vez.`),Kg(),Qc(1897,`p`),Sk(1898,`Ao utilizar `),Qc(1899,`code`),Sk(1900,`p-service-delete`),Kg(),Sk(1901,` mas sem a propriedade `),Qc(1902,`code`),Sk(1903,`p-service-api`),Kg(),Sk(1904,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),Kg(),Qc(1905,`p`),Sk(1906,`Caso a tabela utilize `),Qc(1907,`code`),Sk(1908,`p-height`),Kg(),Sk(1909,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),Qc(1910,`code`),Sk(1911,`(p-delete-items)`),Kg(),Sk(1912,`, por exemplo:`),Kg(),Qc(1913,`pre`)(1914,`code`),Sk(1915,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),Kg()()()()(),vu(1916,`br`),Qc(1917,`table`,110)(1918,`tr`,97)(1919,`th`,98)(1920,`div`,23)(1921,`h4`)(1922,`span`,24),Sk(1923,` updateSearchAIQuery `),Kg()()()()(),Qc(1924,`tr`,28)(1925,`td`,28)(1926,`p`),Sk(1927,`Atualiza programaticamente o valor do campo de busca por IA (`),Qc(1928,`code`),Sk(1929,`po-search-ai`),Kg(),Sk(1930,`) integrado \xE0 tabela
via `),Qc(1931,`code`),Sk(1932,`p-search-ai-field`),Kg(),Sk(1933,`.`),Kg(),Qc(1934,`p`),Sk(1935,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),Kg(),Qc(1936,`blockquote`)(1937,`p`),Sk(1938,`Só tem efeito quando a propriedade `),Qc(1939,`code`),Sk(1940,`p-search-ai-field`),Kg(),Sk(1941,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),Kg()()()()(),Qc(1942,`h5`)(1943,`b`),Sk(1944,`Parâmetros`),Kg()(),Qc(1945,`table`,18)(1946,`tr`,19)(1947,`th`,20),Sk(1948,`Nome`),Kg(),Qc(1949,`th`,20),Sk(1950,`Tipo`),Kg(),Qc(1951,`th`,20),Sk(1952,`Descrição`),Kg()(),Qc(1953,`tr`,97)(1954,`td`,22),Sk(1955,` value`),Kg(),Qc(1956,`td`,25)(1957,`code`,102),Sk(1958,` string `),Kg()(),Qc(1959,`td`,28)(1960,`p`),Sk(1961,`Texto da consulta a ser inserido no campo de busca por IA.`),Kg()()(),Qc(1962,`tr`,97)(1963,`td`,22),Sk(1964,` triggerSearch`),Kg(),Qc(1965,`td`,25)(1966,`code`,102),Sk(1967,` boolean `),Kg()(),Qc(1968,`td`,28)(1969,`p`),Sk(1970,`Quando `),Qc(1971,`code`),Sk(1972,`true`),Kg(),Sk(1973,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),Qc(1974,`code`),Sk(1975,`false`),Kg(),Qc(1976,`em`),Sk(1977,`(padrão)`),Kg(),Sk(1978,`, apenas preenche o campo.`),Kg()()()(),vu(1979,`br`),Qc(1980,`table`,111)(1981,`tr`,97)(1982,`th`,98)(1983,`div`,23)(1984,`h4`)(1985,`span`,24),Sk(1986,` removeItem `),Kg()()()()(),Qc(1987,`tr`,28)(1988,`td`,28)(1989,`p`),Sk(1990,`Método que remove um item da tabela.`),Kg()()()(),Qc(1991,`h5`)(1992,`b`),Sk(1993,`Parâmetros`),Kg()(),Qc(1994,`table`,18)(1995,`tr`,19)(1996,`th`,20),Sk(1997,`Nome`),Kg(),Qc(1998,`th`,20),Sk(1999,`Tipo`),Kg(),Qc(2e3,`th`,20),Sk(2001,`Descrição`),Kg()(),Qc(2002,`tr`,97)(2003,`td`,22),Sk(2004,` item`),Kg(),Qc(2005,`td`,25)(2006,`code`,56),Sk(2007,` number `),Kg(),Qc(2008,`code`,99),Sk(2009,` { key: value } `),Kg()(),Qc(2010,`td`,28)(2011,`p`),Sk(2012,`Índice da linha ou o item que será removido.`),Kg(),Qc(2013,`blockquote`)(2014,`p`),Sk(2015,`Ao remover o item, a linha que o representa será excluída da tabela.`),Kg()()()()(),vu(2016,`br`),Qc(2017,`table`,112)(2018,`tr`,97)(2019,`th`,98)(2020,`div`,23)(2021,`h4`)(2022,`span`,24),Sk(2023,` updateItem `),Kg()()()()(),Qc(2024,`tr`,28)(2025,`td`,28)(2026,`p`),Sk(2027,`Método que atualiza um item da tabela.`),Kg()()()(),Qc(2028,`h5`)(2029,`b`),Sk(2030,`Parâmetros`),Kg()(),Qc(2031,`table`,18)(2032,`tr`,19)(2033,`th`,20),Sk(2034,`Nome`),Kg(),Qc(2035,`th`,20),Sk(2036,`Tipo`),Kg(),Qc(2037,`th`,20),Sk(2038,`Descrição`),Kg()(),Qc(2039,`tr`,97)(2040,`td`,22),Sk(2041,` item`),Kg(),Qc(2042,`td`,25)(2043,`code`,56),Sk(2044,` number `),Kg(),Qc(2045,`code`,99),Sk(2046,` { key: value } `),Kg()(),Qc(2047,`td`,28)(2048,`p`),Sk(2049,`Índice da linha ou o item que será atualizado.`),Kg()()(),Qc(2050,`tr`,97)(2051,`td`,22),Sk(2052,` updatedItem`),Kg(),Qc(2053,`td`,25)(2054,`code`,99),Sk(2055,` { key: value } `),Kg()(),Qc(2056,`td`,28)(2057,`p`),Sk(2058,`Item que foi atualizado.`),Kg(),Qc(2059,`blockquote`)(2060,`p`),Sk(2061,`Ao atualizar o item, a informação será alterada na tabela.`),Kg()()()()(),vu(2062,`br`),Qc(2063,`h3`),Sk(2064,`Interfaces`),Kg(),Qc(2065,`h4`,113)(2066,`code`,9),Sk(2067,`PoTableAction`),Kg()(),Qc(2068,`div`,2)(2069,`p`),Sk(2070,`Interface para lista de ações do componente. `),Kg()(),Qc(2071,`h4`,17),Sk(2072,`Propriedades`),Kg(),Qc(2073,`table`,18)(2074,`tr`,19)(2075,`th`,20),Sk(2076,`Nome`),Kg(),Qc(2077,`th`,20),Sk(2078,`Tipo`),Kg(),Qc(2079,`th`,20),Sk(2080,`Descrição`),Kg()(),Qc(2081,`tr`,114)(2082,`td`,22)(2083,`div`,23)(2084,`span`,24),Sk(2085,` action`),vu(2086,`br`),Kg()()(),Qc(2087,`td`,25)(2088,`code`,115),Sk(2089,`Function`),Kg()(),Qc(2090,`td`,28)(2091,`em`)(2092,`strong`),Sk(2093,`(opcional)`),Kg()(),Qc(2094,`p`),Sk(2095,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(2096,`p`),Sk(2097,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(2098,`code`),Sk(2099,`subItems`),Kg(),Sk(2100,`.`),Kg(),Qc(2101,`blockquote`)(2102,`p`),Sk(2103,`Para que a função seja executada no contexto do componente, utilize `),Qc(2104,`em`),Sk(2105,`bind`),Kg(),Sk(2106,`:
`),Qc(2107,`code`),Sk(2108,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(2109,`tr`,116)(2110,`td`,22)(2111,`div`,23)(2112,`span`,24),Sk(2113,` disabled`),vu(2114,`br`),Kg()()(),Qc(2115,`td`,25)(2116,`code`,26),Sk(2117,`boolean `),Kg(),Qc(2118,`code`,115),Sk(2119,` Function`),Kg()(),Qc(2120,`td`,28)(2121,`em`)(2122,`strong`),Sk(2123,`(opcional)`),Kg()(),Qc(2124,`p`),Sk(2125,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(2126,`tr`,117)(2127,`td`,22)(2128,`div`,23)(2129,`span`,24),Sk(2130,` icon`),vu(2131,`br`),Kg()()(),Qc(2132,`td`,25)(2133,`code`,45),Sk(2134,`string `),Kg(),Qc(2135,`code`,118),Sk(2136,` TemplateRef<void>`),Kg()(),Qc(2137,`td`,28)(2138,`em`)(2139,`strong`),Sk(2140,`(opcional)`),Kg()(),Qc(2141,`p`),Sk(2142,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(2143,`p`),Sk(2144,`Aceita ícones da `),Qc(2145,`a`,31),Sk(2146,`Biblioteca de ícones`),Kg(),Sk(2147,`, fontes externas (ex: Font Awesome)
ou um `),Qc(2148,`code`),Sk(2149,`TemplateRef`),Kg(),Sk(2150,` para ícones customizados.`),Kg(),Qc(2151,`pre`)(2152,`code`),Sk(2153,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(2154,`tr`,119)(2155,`td`,22)(2156,`div`,23)(2157,`span`,24),Sk(2158,` label`),vu(2159,`br`),Kg()()(),Qc(2160,`td`,25)(2161,`code`,45),Sk(2162,`string`),Kg()(),Qc(2163,`td`,28)(2164,`p`),Sk(2165,`Rótulo da ação.`),Kg(),Qc(2166,`p`),Sk(2167,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(2168,`code`),Sk(2169,`subItems`),Kg(),Sk(2170,`.`),Kg()()(),Qc(2171,`tr`,120)(2172,`td`,22)(2173,`div`,23)(2174,`span`,24),Sk(2175,` selected`),vu(2176,`br`),Kg()()(),Qc(2177,`td`,25)(2178,`code`,26),Sk(2179,`boolean`),Kg()(),Qc(2180,`td`,28)(2181,`em`)(2182,`strong`),Sk(2183,`(opcional)`),Kg()(),Qc(2184,`p`),Sk(2185,`Define se a ação está selecionada.`),Kg()()(),Qc(2186,`tr`,121)(2187,`td`,22)(2188,`div`,23)(2189,`span`,24),Sk(2190,` separator`),vu(2191,`br`),Kg()()(),Qc(2192,`td`,25)(2193,`code`,26),Sk(2194,`boolean`),Kg()(),Qc(2195,`td`,28)(2196,`em`)(2197,`strong`),Sk(2198,`(opcional)`),Kg()(),Qc(2199,`p`),Sk(2200,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(2201,`tr`,122)(2202,`td`,22)(2203,`div`,23)(2204,`span`,24),Sk(2205,` subItems`),vu(2206,`br`),Kg()()(),Qc(2207,`td`,25)(2208,`code`,123),Sk(2209,`Array<PoPopupAction>`),Kg()(),Qc(2210,`td`,28)(2211,`em`)(2212,`strong`),Sk(2213,`(opcional)`),Kg()(),Qc(2214,`p`),Sk(2215,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(2216,`pre`)(2217,`code`),Sk(2218,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(2219,`p`),Sk(2220,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(2221,`blockquote`)(2222,`p`),Sk(2223,`As propriedades `),Qc(2224,`code`),Sk(2225,`disabled`),Kg(),Sk(2226,`, `),Qc(2227,`code`),Sk(2228,`type`),Kg(),Sk(2229,` e `),Qc(2230,`code`),Sk(2231,`visible`),Kg(),Sk(2232,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(2233,`blockquote`)(2234,`p`),Sk(2235,`Quando `),Qc(2236,`code`),Sk(2237,`url`),Kg(),Sk(2238,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(2239,`blockquote`)(2240,`p`),Sk(2241,`Em subníveis aninhados, o `),Qc(2242,`code`),Sk(2243,`icon`),Kg(),Sk(2244,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(2245,`tr`,124)(2246,`td`,22)(2247,`div`,23)(2248,`span`,24),Sk(2249,` subItemsLazy`),vu(2250,`br`),Kg()()(),Qc(2251,`td`,25)(2252,`code`,125),Sk(2253,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(2254,`td`,28)(2255,`em`)(2256,`strong`),Sk(2257,`(opcional)`),Kg()(),Qc(2258,`p`),Sk(2259,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(2260,`p`),Sk(2261,`Recebe o item agrupador e retorna um `),Qc(2262,`code`),Sk(2263,`Observable<Array<PoPopupAction>>`),Kg(),Sk(2264,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(2265,`strong`),Sk(2266,`apenas`),Kg(),Sk(2267,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(2268,`code`),Sk(2269,`po-skeleton`),Kg(),Sk(2270,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(2271,`pre`)(2272,`code`),Sk(2273,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(2274,`blockquote`)(2275,`p`),Sk(2276,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(2277,`p`),Sk(2278,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(2279,`tr`,126)(2280,`td`,22)(2281,`div`,23)(2282,`span`,24),Sk(2283,` type`),vu(2284,`br`),Kg()()(),Qc(2285,`td`,25)(2286,`code`,45),Sk(2287,`string`),Kg()(),Qc(2288,`td`,28)(2289,`em`)(2290,`strong`),Sk(2291,`(opcional)`),Kg()(),Qc(2292,`p`),Sk(2293,`Define a cor do item.`),Kg(),Qc(2294,`p`),Sk(2295,`Valores válidos:`),Kg(),Qc(2296,`ul`)(2297,`li`)(2298,`code`),Sk(2299,`default`),Kg()(),Qc(2300,`li`)(2301,`code`),Sk(2302,`danger`),Kg()()()()(),Qc(2303,`tr`,127)(2304,`td`,22)(2305,`div`,23)(2306,`span`,24),Sk(2307,` url`),vu(2308,`br`),Kg()()(),Qc(2309,`td`,25)(2310,`code`,45),Sk(2311,`string`),Kg()(),Qc(2312,`td`,28)(2313,`em`)(2314,`strong`),Sk(2315,`(opcional)`),Kg()(),Qc(2316,`p`),Sk(2317,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(2318,`p`),Sk(2319,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(2320,`code`),Sk(2321,`url`),Kg(),Sk(2322,` é informada em um agrupador, o clique `),Qc(2323,`strong`),Sk(2324,`não abrirá os subitens`),Kg(),Sk(2325,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(2326,`blockquote`)(2327,`p`),Sk(2328,`Quando informada, tem prioridade sobre a propriedade `),Qc(2329,`code`),Sk(2330,`action`),Kg(),Sk(2331,`.`),Kg()()()(),Qc(2332,`tr`,128)(2333,`td`,22)(2334,`div`,23)(2335,`span`,24),Sk(2336,` visible`),vu(2337,`br`),Kg()()(),Qc(2338,`td`,25)(2339,`code`,26),Sk(2340,`boolean `),Kg(),Qc(2341,`code`,115),Sk(2342,` Function`),Kg()(),Qc(2343,`td`,28)(2344,`em`)(2345,`strong`),Sk(2346,`(opcional)`),Kg()(),Qc(2347,`p`),Sk(2348,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(2349,`h4`,129)(2350,`code`,9),Sk(2351,`PoTableBoolean`),Kg()(),Qc(2352,`div`,2)(2353,`p`),Sk(2354,`Interface que define as colunas booleanas do `),Qc(2355,`code`),Sk(2356,`po-table`),Kg(),Sk(2357,`.`),Kg()(),Qc(2358,`h4`,17),Sk(2359,`Propriedades`),Kg(),Qc(2360,`table`,18)(2361,`tr`,19)(2362,`th`,20),Sk(2363,`Nome`),Kg(),Qc(2364,`th`,20),Sk(2365,`Tipo`),Kg(),Qc(2366,`th`,20),Sk(2367,`Descrição`),Kg()(),Qc(2368,`tr`,130)(2369,`td`,22)(2370,`div`,23)(2371,`span`,24),Sk(2372,` falseLabel`),vu(2373,`br`),Kg()()(),Qc(2374,`td`,25)(2375,`code`,45),Sk(2376,`string`),Kg()(),Qc(2377,`td`,28)(2378,`em`)(2379,`strong`),Sk(2380,`(opcional)`),Kg()(),Qc(2381,`p`),Sk(2382,`Define o rótulo para valores `),Qc(2383,`code`),Sk(2384,`false`),Kg(),Sk(2385,`.`),Kg()()(),Qc(2386,`tr`,131)(2387,`td`,22)(2388,`div`,23)(2389,`span`,24),Sk(2390,` trueLabel`),vu(2391,`br`),Kg()()(),Qc(2392,`td`,25)(2393,`code`,45),Sk(2394,`string`),Kg()(),Qc(2395,`td`,28)(2396,`em`)(2397,`strong`),Sk(2398,`(opcional)`),Kg()(),Qc(2399,`p`),Sk(2400,`Define o rótulo para valores `),Qc(2401,`code`),Sk(2402,`true`),Kg(),Sk(2403,`.`),Kg()()()(),Qc(2404,`h4`,132)(2405,`code`,9),Sk(2406,`PoTableColumnSort`),Kg()(),Qc(2407,`div`,2)(2408,`p`),Sk(2409,`Interface para ordenação das colunas do componente table.`),Kg()(),Qc(2410,`h4`,17),Sk(2411,`Propriedades`),Kg(),Qc(2412,`table`,18)(2413,`tr`,19)(2414,`th`,20),Sk(2415,`Nome`),Kg(),Qc(2416,`th`,20),Sk(2417,`Tipo`),Kg(),Qc(2418,`th`,20),Sk(2419,`Descrição`),Kg()(),Qc(2420,`tr`,133)(2421,`td`,22)(2422,`div`,23)(2423,`span`,24),Sk(2424,` column`),vu(2425,`br`),Kg()()(),Qc(2426,`td`,25)(2427,`code`,134),Sk(2428,`PoTableColumn`),Kg()(),Qc(2429,`td`,28)(2430,`em`)(2431,`strong`),Sk(2432,`(opcional)`),Kg()(),Qc(2433,`p`),Sk(2434,`Coluna pela qual a tabela está ordenada.`),Kg()()(),Qc(2435,`tr`,135)(2436,`td`,22)(2437,`div`,23)(2438,`span`,24),Sk(2439,` type`),vu(2440,`br`),Kg()()(),Qc(2441,`td`,25)(2442,`code`,136),Sk(2443,`PoTableColumnSortType`),Kg()(),Qc(2444,`td`,28)(2445,`p`),Sk(2446,`Tipo da ordenação.`),Kg()()()(),Qc(2447,`h4`,137)(2448,`code`,9),Sk(2449,`PoTableColumn`),Kg()(),Qc(2450,`div`,2)(2451,`p`),Sk(2452,`Interface para configuração das colunas do `),Qc(2453,`code`),Sk(2454,`po-table`),Kg(),Sk(2455,`.`),Kg(),Qc(2456,`p`),Sk(2457,`As definições das colunas serão aplicadas linha a linha.`),Kg()(),Qc(2458,`h4`,17),Sk(2459,`Propriedades`),Kg(),Qc(2460,`table`,18)(2461,`tr`,19)(2462,`th`,20),Sk(2463,`Nome`),Kg(),Qc(2464,`th`,20),Sk(2465,`Tipo`),Kg(),Qc(2466,`th`,20),Sk(2467,`Descrição`),Kg()(),Qc(2468,`tr`,138)(2469,`td`,22)(2470,`div`,23)(2471,`span`,24),Sk(2472,` action`),vu(2473,`br`),Kg()()(),Qc(2474,`td`,25)(2475,`code`,115),Sk(2476,`Function`),Kg()(),Qc(2477,`td`,28)(2478,`em`)(2479,`strong`),Sk(2480,`(opcional)`),Kg()(),Qc(2481,`p`),Sk(2482,`Define uma ação na coluna quando o tipo da coluna for `),Qc(2483,`code`),Sk(2484,`link`),Kg(),Sk(2485,` ou `),Qc(2486,`code`),Sk(2487,`icon`),Kg(),Sk(2488,`.`),Kg(),Qc(2489,`blockquote`)(2490,`p`),Sk(2491,`Quando for do tipo `),Qc(2492,`code`),Sk(2493,`link`),Kg(),Sk(2494,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),Kg()(),Qc(2495,`blockquote`)(2496,`p`),Sk(2497,`Quando for do tipo `),Qc(2498,`code`),Sk(2499,`icon`),Kg(),Sk(2500,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),Kg()()()(),Qc(2501,`tr`,139)(2502,`td`,22)(2503,`div`,23)(2504,`span`,24),Sk(2505,` boolean`),vu(2506,`br`),Kg()()(),Qc(2507,`td`,25)(2508,`code`,140),Sk(2509,`PoTableBoolean`),Kg()(),Qc(2510,`td`,28)(2511,`em`)(2512,`strong`),Sk(2513,`(opcional)`),Kg()(),Qc(2514,`p`),Sk(2515,`Define um objeto do tipo `),Qc(2516,`code`),Sk(2517,`PoTableBoolean`),Kg(),Sk(2518,` para as colunas do tipo `),Qc(2519,`em`),Sk(2520,`boolean`),Kg(),Sk(2521,`. Por exemplo:`),Kg(),Qc(2522,`pre`)(2523,`code`),Sk(2524,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),Kg()(),Qc(2525,`blockquote`)(2526,`p`),Sk(2527,`Caso não seja definido um objeto para colunas do tipo `),Qc(2528,`em`),Sk(2529,`boolean`),Kg(),Sk(2530,`,
esta exibir\xE1 por padr\xE3o `),Qc(2531,`code`),Sk(2532,`Sim`),Kg(),Sk(2533,` e `),Qc(2534,`code`),Sk(2535,`Não`),Kg(),Sk(2536,` de acordo com os valores `),Qc(2537,`em`),Sk(2538,`booleanos`),Kg(),Sk(2539,`.`),Kg()()()(),Qc(2540,`tr`,141)(2541,`td`,22)(2542,`div`,23)(2543,`span`,24),Sk(2544,` color`),vu(2545,`br`),Kg()()(),Qc(2546,`td`,25)(2547,`code`,45),Sk(2548,`string `),Kg(),Qc(2549,`code`,115),Sk(2550,` Function`),Kg()(),Qc(2551,`td`,28)(2552,`em`)(2553,`strong`),Sk(2554,`(opcional)`),Kg()(),Qc(2555,`p`),Sk(2556,`Define a cor que será aplicada no conteúdo da coluna.`),Kg(),Qc(2557,`p`),Sk(2558,`Valores válidos:`),Kg(),Qc(2559,`ul`)(2560,`li`),vu(2561,`span`,142),Qc(2562,`code`),Sk(2563,`color-01`),Kg()(),Qc(2564,`li`),vu(2565,`span`,143),Qc(2566,`code`),Sk(2567,`color-02`),Kg()(),Qc(2568,`li`),vu(2569,`span`,144),Qc(2570,`code`),Sk(2571,`color-03`),Kg()(),Qc(2572,`li`),vu(2573,`span`,145),Qc(2574,`code`),Sk(2575,`color-04`),Kg()(),Qc(2576,`li`),vu(2577,`span`,146),Qc(2578,`code`),Sk(2579,`color-05`),Kg()(),Qc(2580,`li`),vu(2581,`span`,147),Qc(2582,`code`),Sk(2583,`color-06`),Kg()(),Qc(2584,`li`),vu(2585,`span`,148),Qc(2586,`code`),Sk(2587,`color-07`),Kg()(),Qc(2588,`li`),vu(2589,`span`,149),Qc(2590,`code`),Sk(2591,`color-08`),Kg()(),Qc(2592,`li`),vu(2593,`span`,150),Qc(2594,`code`),Sk(2595,`color-09`),Kg()(),Qc(2596,`li`),vu(2597,`span`,151),Qc(2598,`code`),Sk(2599,`color-10`),Kg()(),Qc(2600,`li`),vu(2601,`span`,152),Qc(2602,`code`),Sk(2603,`color-11`),Kg()(),Qc(2604,`li`),vu(2605,`span`,153),Qc(2606,`code`),Sk(2607,`color-12`),Kg()()(),Qc(2608,`blockquote`)(2609,`p`),Sk(2610,`Também é possível utilizar as 35 cores da paleta `),Qc(2611,`strong`),Sk(2612,`Caption Tag Colors`),Kg(),Sk(2613,`:`),Kg()(),Qc(2614,`ul`)(2615,`li`),vu(2616,`span`,154),Qc(2617,`code`),Sk(2618,`caption-tag-01`),Kg(),vu(2619,`span`,155),Qc(2620,`code`),Sk(2621,`caption-tag-02`),Kg(),vu(2622,`span`,156),Qc(2623,`code`),Sk(2624,`caption-tag-03`),Kg(),vu(2625,`span`,157),Qc(2626,`code`),Sk(2627,`caption-tag-04`),Kg(),vu(2628,`span`,158),Qc(2629,`code`),Sk(2630,`caption-tag-05`),Kg()(),Qc(2631,`li`),vu(2632,`span`,159),Qc(2633,`code`),Sk(2634,`caption-tag-06`),Kg(),vu(2635,`span`,160),Qc(2636,`code`),Sk(2637,`caption-tag-07`),Kg(),vu(2638,`span`,161),Qc(2639,`code`),Sk(2640,`caption-tag-08`),Kg(),vu(2641,`span`,162),Qc(2642,`code`),Sk(2643,`caption-tag-09`),Kg(),vu(2644,`span`,163),Qc(2645,`code`),Sk(2646,`caption-tag-10`),Kg()(),Qc(2647,`li`),vu(2648,`span`,164),Qc(2649,`code`),Sk(2650,`caption-tag-11`),Kg(),vu(2651,`span`,165),Qc(2652,`code`),Sk(2653,`caption-tag-12`),Kg(),vu(2654,`span`,166),Qc(2655,`code`),Sk(2656,`caption-tag-13`),Kg(),vu(2657,`span`,167),Qc(2658,`code`),Sk(2659,`caption-tag-14`),Kg(),vu(2660,`span`,168),Qc(2661,`code`),Sk(2662,`caption-tag-15`),Kg()(),Qc(2663,`li`),vu(2664,`span`,169),Qc(2665,`code`),Sk(2666,`caption-tag-16`),Kg(),vu(2667,`span`,170),Qc(2668,`code`),Sk(2669,`caption-tag-17`),Kg(),vu(2670,`span`,171),Qc(2671,`code`),Sk(2672,`caption-tag-18`),Kg(),vu(2673,`span`,172),Qc(2674,`code`),Sk(2675,`caption-tag-19`),Kg(),vu(2676,`span`,173),Qc(2677,`code`),Sk(2678,`caption-tag-20`),Kg()(),Qc(2679,`li`),vu(2680,`span`,174),Qc(2681,`code`),Sk(2682,`caption-tag-21`),Kg(),vu(2683,`span`,175),Qc(2684,`code`),Sk(2685,`caption-tag-22`),Kg(),vu(2686,`span`,176),Qc(2687,`code`),Sk(2688,`caption-tag-23`),Kg(),vu(2689,`span`,177),Qc(2690,`code`),Sk(2691,`caption-tag-24`),Kg(),vu(2692,`span`,178),Qc(2693,`code`),Sk(2694,`caption-tag-25`),Kg()(),Qc(2695,`li`),vu(2696,`span`,179),Qc(2697,`code`),Sk(2698,`caption-tag-26`),Kg(),vu(2699,`span`,180),Qc(2700,`code`),Sk(2701,`caption-tag-27`),Kg(),vu(2702,`span`,181),Qc(2703,`code`),Sk(2704,`caption-tag-28`),Kg(),vu(2705,`span`,182),Qc(2706,`code`),Sk(2707,`caption-tag-29`),Kg(),vu(2708,`span`,183),Qc(2709,`code`),Sk(2710,`caption-tag-30`),Kg()(),Qc(2711,`li`),vu(2712,`span`,184),Qc(2713,`code`),Sk(2714,`caption-tag-31`),Kg(),vu(2715,`span`,185),Qc(2716,`code`),Sk(2717,`caption-tag-32`),Kg(),vu(2718,`span`,186),Qc(2719,`code`),Sk(2720,`caption-tag-33`),Kg(),vu(2721,`span`,187),Qc(2722,`code`),Sk(2723,`caption-tag-34`),Kg(),vu(2724,`span`,188),Qc(2725,`code`),Sk(2726,`caption-tag-35`),Kg()()(),Qc(2727,`blockquote`)(2728,`p`),Sk(2729,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),Kg()(),Qc(2730,`pre`)(2731,`code`),Sk(2732,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),Kg()(),Qc(2733,`blockquote`)(2734,`p`),Sk(2735,`É possível também usá-la na coluna do tipo `),Qc(2736,`code`),Sk(2737,`icons`),Kg(),Sk(2738,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),Kg()(),Qc(2739,`pre`)(2740,`code`),Sk(2741,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),Kg()()()(),Qc(2742,`tr`,189)(2743,`td`,22)(2744,`div`,23)(2745,`span`,24),Sk(2746,` detail`),vu(2747,`br`),Kg()()(),Qc(2748,`td`,25)(2749,`code`,190),Sk(2750,`PoTableDetail`),Kg()(),Qc(2751,`td`,28)(2752,`em`)(2753,`strong`),Sk(2754,`(opcional)`),Kg()(),Qc(2755,`p`),Sk(2756,`Define um objeto que segue a interface `),Qc(2757,`code`),Sk(2758,`PoTableDetail`),Kg(),Sk(2759,`, para as colunas de detalhes. Por exemplo:`),Kg(),Qc(2760,`pre`)(2761,`code`),Sk(2762,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),Kg()()()(),Qc(2763,`tr`,191)(2764,`td`,22)(2765,`div`,23)(2766,`span`,24),Sk(2767,` disabled`),vu(2768,`br`),Kg()()(),Qc(2769,`td`,25)(2770,`code`,115),Sk(2771,`Function`),Kg()(),Qc(2772,`td`,28)(2773,`em`)(2774,`strong`),Sk(2775,`(opcional)`),Kg()(),Qc(2776,`p`),Sk(2777,`Função que deve retornar um booleano para habilitar ou desabilitar o `),Qc(2778,`em`),Sk(2779,`link`),Kg(),Sk(2780,` e sua ação.`),Kg(),Qc(2781,`blockquote`)(2782,`p`),Sk(2783,`Propriedade disponível nas colunas do tipo `),Qc(2784,`code`),Sk(2785,`link`),Kg(),Sk(2786,`.`),Kg()()()(),Qc(2787,`tr`,192)(2788,`td`,22)(2789,`div`,23)(2790,`span`,24),Sk(2791,` format`),vu(2792,`br`),Kg()()(),Qc(2793,`td`,25)(2794,`code`,45),Sk(2795,`string`),Kg()(),Qc(2796,`td`,28)(2797,`em`)(2798,`strong`),Sk(2799,`(opcional)`),Kg()(),Qc(2800,`p`),Sk(2801,`Formato de exibição do valor da coluna.`),Kg(),Qc(2802,`table`)(2803,`thead`)(2804,`tr`)(2805,`th`),Sk(2806,`Formatação`),Kg(),Qc(2807,`th`),Sk(2808,`Type da Coluna`),Kg(),Qc(2809,`th`),Sk(2810,`Descrição`),Kg(),Qc(2811,`th`),Sk(2812,`Exemplos`),Kg()()(),Qc(2813,`tbody`)(2814,`tr`)(2815,`td`),Sk(2816,`Monetário`),Kg(),Qc(2817,`td`)(2818,`code`),Sk(2819,`currency`),Kg()(),Qc(2820,`td`),Sk(2821,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),Kg(),Qc(2822,`td`)(2823,`code`),Sk(2824,`'BRL'`),Kg(),Sk(2825,`, `),Qc(2826,`code`),Sk(2827,`'USD'`),Kg(),Sk(2828,`, `),Qc(2829,`code`),Sk(2830,`'EUR'`),Kg(),Sk(2831,`, `),Qc(2832,`code`),Sk(2833,`'RUB'`),Kg()()(),Qc(2834,`tr`)(2835,`td`),Sk(2836,`Data`),Kg(),Qc(2837,`td`)(2838,`code`),Sk(2839,`date`),Kg()(),Qc(2840,`td`),Sk(2841,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),Kg(),Qc(2842,`td`)(2843,`code`),Sk(2844,`'dd/MM/yyyy'`),Kg(),Sk(2845,`, `),Qc(2846,`code`),Sk(2847,`'dd-MM-yy'`),Kg(),Sk(2848,`, `),Qc(2849,`code`),Sk(2850,`'mm/dd/yyyy'`),Kg()()(),Qc(2851,`tr`)(2852,`td`),Sk(2853,`Data/Hora`),Kg(),Qc(2854,`td`)(2855,`code`),Sk(2856,`dateTime`),Kg()(),Qc(2857,`td`),Sk(2858,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),Kg(),Qc(2859,`td`)(2860,`code`),Sk(2861,`'dd/MM/yyyy HH:mm'`),Kg(),Sk(2862,`, `),Qc(2863,`code`),Sk(2864,`'dd/MM/yyyy HH:mm:ss'`),Kg(),Sk(2865,`, `),Qc(2866,`code`),Sk(2867,`'dd/MM/yyyy HH:mm:ss.SSS'`),Kg(),Sk(2868,`, `),Qc(2869,`code`),Sk(2870,`'MM/dd/yyyy hh:mm a'`),Kg(),Sk(2871,`, `),Qc(2872,`code`),Sk(2873,`'yyyy-MM-dd HH:mm'`),Kg(),Sk(2874,`, `),Qc(2875,`code`),Sk(2876,`'short'`),Kg(),Sk(2877,`, `),Qc(2878,`code`),Sk(2879,`'medium'`),Kg()()(),Qc(2880,`tr`)(2881,`td`),Sk(2882,`Hora`),Kg(),Qc(2883,`td`)(2884,`code`),Sk(2885,`time`),Kg()(),Qc(2886,`td`),Sk(2887,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),Kg(),Qc(2888,`td`)(2889,`code`),Sk(2890,`'HH:mm'`),Kg(),Sk(2891,`, `),Qc(2892,`code`),Sk(2893,`'HH:mm:ss.ffffff'`),Kg(),Sk(2894,`, `),Qc(2895,`code`),Sk(2896,`'HH:mm:ss.ff'`),Kg(),Sk(2897,`, `),Qc(2898,`code`),Sk(2899,`'mm:ss.fff'`),Kg()()(),Qc(2900,`tr`)(2901,`td`),Sk(2902,`Número`),Kg(),Qc(2903,`td`)(2904,`code`),Sk(2905,`number`),Kg()(),Qc(2906,`td`),Sk(2907,`Aceita um valor seguindo o padrão `),Qc(2908,`a`,193)(2909,`strong`),Sk(2910,`DecimalPipe`),Kg()(),Sk(2911,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),Kg(),Qc(2912,`td`)(2913,`code`),Sk(2914,`'1.2-5'`),Kg(),Sk(2915,` (ex.: `),Qc(2916,`code`),Sk(2917,`50`),Kg(),Sk(2918,` → `),Qc(2919,`code`),Sk(2920,`50.00`),Kg(),Sk(2921,`)`),Kg()()()(),Qc(2922,`p`),Sk(2923,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),Kg()()(),Qc(2924,`tr`,194)(2925,`td`,22)(2926,`div`,23)(2927,`span`,24),Sk(2928,` icons`),vu(2929,`br`),Kg()()(),Qc(2930,`td`,25)(2931,`code`,195),Sk(2932,`Array<PoTableColumnIcon>`),Kg()(),Qc(2933,`td`,28)(2934,`em`)(2935,`strong`),Sk(2936,`(opcional)`),Kg()(),Qc(2937,`p`),Sk(2938,`Define um `),Qc(2939,`em`),Sk(2940,`array`),Kg(),Sk(2941,` de objetos para colunas de ícones que irá sobrepor os valores como `),Qc(2942,`code`),Sk(2943,`action`),Kg(),Sk(2944,` e `),Qc(2945,`code`),Sk(2946,`color`),Kg(),Sk(2947,`
definidos na coluna, \xE0 partir do `),Qc(2948,`em`),Sk(2949,`value`),Kg(),Sk(2950,` da `),Qc(2951,`a`,196)(2952,`code`),Sk(2953,`PoTableColumnIcon`),Kg()(),Sk(2954,`, por exemplo:`),Kg(),Qc(2955,`pre`)(2956,`code`),Sk(2957,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),Kg()(),Qc(2958,`pre`)(2959,`code`),Sk(2960,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),Kg()()()(),Qc(2961,`tr`,197)(2962,`td`,22)(2963,`div`,23)(2964,`span`,24),Sk(2965,` label`),vu(2966,`br`),Kg()()(),Qc(2967,`td`,25)(2968,`code`,45),Sk(2969,`string`),Kg()(),Qc(2970,`td`,28)(2971,`em`)(2972,`strong`),Sk(2973,`(opcional)`),Kg()(),Qc(2974,`p`),Sk(2975,`Texto para título da coluna.`),Kg(),Qc(2976,`p`),Sk(2977,`Caso não seja informado, será utilizado como `),Qc(2978,`em`),Sk(2979,`label`),Kg(),Sk(2980,` o valor da propriedade `),Qc(2981,`em`),Sk(2982,`property`),Kg(),Sk(2983,` com a primeira letra em maiúsculo.`),Kg()()(),Qc(2984,`tr`,198)(2985,`td`,22)(2986,`div`,23)(2987,`span`,24),Sk(2988,` labels`),vu(2989,`br`),Kg()()(),Qc(2990,`td`,25)(2991,`code`,199),Sk(2992,`Array<PoTableColumnLabel>`),Kg()(),Qc(2993,`td`,28)(2994,`em`)(2995,`strong`),Sk(2996,`(opcional)`),Kg()(),Qc(2997,`p`),Sk(2998,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Qc(2999,`code`),Sk(3e3,`PoTableColumnLabel`),Kg(),Sk(3001,` na qual devem ser definidas os labels. Por exemplo:`),Kg(),Qc(3002,`pre`)(3003,`code`),Sk(3004,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),Kg()()()(),Qc(3005,`tr`,200)(3006,`td`,22)(3007,`div`,23)(3008,`span`,24),Sk(3009,` link`),vu(3010,`br`),Kg()()(),Qc(3011,`td`,25)(3012,`code`,45),Sk(3013,`string`),Kg()(),Qc(3014,`td`,28)(3015,`em`)(3016,`strong`),Sk(3017,`(opcional)`),Kg()(),Qc(3018,`p`),Sk(3019,`Define o nome da propriedade que conterá o `),Qc(3020,`code`),Sk(3021,`link`),Kg(),Sk(3022,` a ser redirecionado.`),Kg()()(),Qc(3023,`tr`,201)(3024,`td`,22)(3025,`div`,23)(3026,`span`,24),Sk(3027,` mask`),vu(3028,`br`),Kg()()(),Qc(3029,`td`,25)(3030,`code`,45),Sk(3031,`string`),Kg()(),Qc(3032,`td`,28)(3033,`em`)(3034,`strong`),Sk(3035,`(opcional)`),Kg()(),Qc(3036,`p`),Sk(3037,`Define uma máscara para formatação do valor exibido na coluna.`),Kg(),Qc(3038,`p`),Sk(3039,`A máscara é aplicada somente para `),Qc(3040,`strong`),Sk(3041,`exibição`),Kg(),Sk(3042,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),Kg(),Qc(3043,`p`),Sk(3044,`Caracteres válidos para a máscara:`),Kg(),Qc(3045,`ul`)(3046,`li`)(3047,`code`),Sk(3048,`9`),Kg(),Sk(3049,` : aceita um dígito numérico (0-9).`),Kg(),Qc(3050,`li`)(3051,`code`),Sk(3052,`@`),Kg(),Sk(3053,` : aceita um caractere alfabético (a-z, A-Z).`),Kg(),Qc(3054,`li`)(3055,`code`),Sk(3056,`w`),Kg(),Sk(3057,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),Kg(),Qc(3058,`li`),Sk(3059,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Qc(3060,`code`),Sk(3061,`.`),Kg(),Sk(3062,`, `),Qc(3063,`code`),Sk(3064,`-`),Kg(),Sk(3065,`, `),Qc(3066,`code`),Sk(3067,`/`),Kg(),Sk(3068,`, `),Qc(3069,`code`),Sk(3070,`(`),Kg(),Sk(3071,`, `),Qc(3072,`code`),Sk(3073,`)`),Kg(),Sk(3074,`, `),Qc(3075,`code`),Sk(3076,`+`),Kg(),Sk(3077,`, `),vu(3078,`code`),Sk(3079,`).`),Kg()(),Qc(3080,`p`),Sk(3081,`Exemplos de uso:`),Kg(),Qc(3082,`pre`)(3083,`code`),Sk(3084,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),Kg()(),Qc(3085,`blockquote`)(3086,`p`),Sk(3087,`Esta propriedade é utilizada apenas para colunas do tipo `),Qc(3088,`code`),Sk(3089,`string`),Kg(),Sk(3090,` (padr\xE3o).
Caso a coluna possua um `),Qc(3091,`code`),Sk(3092,`type`),Kg(),Sk(3093,` diferente de `),Qc(3094,`code`),Sk(3095,`string`),Kg(),Sk(3096,`, a máscara será ignorada.`),Kg()()()(),Qc(3097,`tr`,202)(3098,`td`,22)(3099,`div`,23)(3100,`span`,24),Sk(3101,` property`),vu(3102,`br`),Kg()()(),Qc(3103,`td`,25)(3104,`code`,45),Sk(3105,`string`),Kg()(),Qc(3106,`td`,28)(3107,`em`)(3108,`strong`),Sk(3109,`(opcional)`),Kg()(),Qc(3110,`p`),Sk(3111,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),Kg(),Qc(3112,`pre`)(3113,`code`),Sk(3114,`{ property: 'address.street', label: 'Rua' }
`),Kg()()()(),Qc(3115,`tr`,203)(3116,`td`,22)(3117,`div`,23)(3118,`span`,24),Sk(3119,` searchAiIgnore`),vu(3120,`br`),Kg()()(),Qc(3121,`td`,25)(3122,`code`,26),Sk(3123,`boolean`),Kg()(),Qc(3124,`td`,28)(3125,`em`)(3126,`strong`),Sk(3127,`(opcional)`),Kg()(),Qc(3128,`p`),Sk(3129,`Quando `),Qc(3130,`code`),Sk(3131,`true`),Kg(),Sk(3132,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),Qc(3133,`code`),Sk(3134,`p-search-ai-field`),Kg(),Sk(3135,`, independentemente de estar visível na tabela.`),Kg(),Qc(3136,`p`),Sk(3137,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),Kg()()(),Qc(3138,`tr`,204)(3139,`td`,22)(3140,`div`,23)(3141,`span`,24),Sk(3142,` sortable`),vu(3143,`br`),Kg()()(),Qc(3144,`td`,25)(3145,`code`,26),Sk(3146,`boolean`),Kg()(),Qc(3147,`td`,28)(3148,`em`)(3149,`strong`),Sk(3150,`(opcional)`),Kg()(),Qc(3151,`p`),Sk(3152,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),Kg()()(),Qc(3153,`tr`,205)(3154,`td`,22)(3155,`div`,23)(3156,`span`,24),Sk(3157,` subtitles`),vu(3158,`br`),Kg()()(),Qc(3159,`td`,25)(3160,`code`,206),Sk(3161,`Array<PoTableSubtitleColumn>`),Kg()(),Qc(3162,`td`,28)(3163,`em`)(3164,`strong`),Sk(3165,`(opcional)`),Kg()(),Qc(3166,`p`),Sk(3167,`Define um array de objetos para as colunas de legenda. Onde, `),Qc(3168,`code`),Sk(3169,`subtitles`),Kg(),Sk(3170,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),Kg(),Qc(3171,`pre`)(3172,`code`),Sk(3173,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),Kg()(),Qc(3174,`p`),Sk(3175,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),Kg()()(),Qc(3176,`tr`,207)(3177,`td`,22)(3178,`div`,23)(3179,`span`,24),Sk(3180,` tooltip`),vu(3181,`br`),Kg()()(),Qc(3182,`td`,25)(3183,`code`,45),Sk(3184,`string`),Kg()(),Qc(3185,`td`,28)(3186,`em`)(3187,`strong`),Sk(3188,`(opcional)`),Kg()(),Qc(3189,`p`),Sk(3190,`Define um texto de ajuda que será exibido ao passar o `),Qc(3191,`em`),Sk(3192,`mouse`),Kg(),Sk(3193,` sobre um texto.`),Kg(),Qc(3194,`blockquote`)(3195,`p`),Sk(3196,`O tooltip só será visível se for uma coluna do tipo `),Qc(3197,`em`),Sk(3198,`link`),Kg(),Sk(3199,`.`),Kg()(),Qc(3200,`blockquote`)(3201,`p`),Sk(3202,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Qc(3203,`em`),Sk(3204,`tooltip`),Kg(),Sk(3205,` e será exibido justamente o conteúdo da célula.`),Kg()()()(),Qc(3206,`tr`,208)(3207,`td`,22)(3208,`div`,23)(3209,`span`,24),Sk(3210,` type`),vu(3211,`br`),Kg()()(),Qc(3212,`td`,25)(3213,`code`,45),Sk(3214,`string`),Kg()(),Qc(3215,`td`,28)(3216,`em`)(3217,`strong`),Sk(3218,`(opcional)`),Kg()(),Qc(3219,`p`),Sk(3220,`Tipo da coluna.`),Kg(),Qc(3221,`p`),Sk(3222,`Valores válidos:`),Kg(),Qc(3223,`ul`)(3224,`li`)(3225,`p`)(3226,`code`),Sk(3227,`boolean`),Kg(),Sk(3228,`: Exibirá por padrão `),Qc(3229,`code`),Sk(3230,`Sim`),Kg(),Sk(3231,` e `),Qc(3232,`code`),Sk(3233,`Não`),Kg(),Sk(3234,` de acordo com os valores `),Qc(3235,`em`),Sk(3236,`booleanos`),Kg(),Sk(3237,`.`),Kg(),Qc(3238,`blockquote`)(3239,`p`),Sk(3240,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),Qc(3241,`code`),Sk(3242,`boolean`),Kg(),Sk(3243,` desta interface.`),Kg()()(),Qc(3244,`li`)(3245,`p`)(3246,`code`),Sk(3247,`currency`),Kg(),Sk(3248,`: valores monetários.`),Kg()(),Qc(3249,`li`)(3250,`p`)(3251,`code`),Sk(3252,`date`),Kg(),Sk(3253,`: valor de datas.`),Kg(),Qc(3254,`ul`)(3255,`li`),Sk(3256,`Aceita os tipos `),Qc(3257,`em`),Sk(3258,`string`),Kg(),Sk(3259,` e `),Qc(3260,`em`),Sk(3261,`Date`),Kg(),Sk(3262,` padr\xE3o do Javascript,
por exemplo: `),Qc(3263,`code`),Sk(3264,`'2017-11-28'`),Kg(),Sk(3265,` ou `),Qc(3266,`code`),Sk(3267,`new Date(2017, 10, 28)`),Kg(),Sk(3268,`.`),Kg()()(),Qc(3269,`li`)(3270,`p`)(3271,`code`),Sk(3272,`dateTime`),Kg(),Sk(3273,`: valor de data com horário.`),Kg(),Qc(3274,`ul`)(3275,`li`),Sk(3276,`Aceita o tipo `),Qc(3277,`em`),Sk(3278,`string`),Kg(),Sk(3279,` no formato `),Qc(3280,`strong`),Sk(3281,`ISO-8601`),Kg(),Sk(3282,` extendido `),Qc(3283,`strong`),Sk(3284,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),Kg(),Sk(3285,`
ou `),Qc(3286,`strong`),Sk(3287,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),Kg(),Sk(3288,` (sem segundos),
e o tipo `),Qc(3289,`em`),Sk(3290,`Date`),Kg(),Sk(3291,` padrão do Javascript, por exemplo: `),Qc(3292,`code`),Sk(3293,`'2017-11-28T00:00:00-02:00'`),Kg(),Sk(3294,`, `),Qc(3295,`code`),Sk(3296,`'2017-11-28T14:30-02:00'`),Kg(),Sk(3297,` ou `),Qc(3298,`code`),Sk(3299,`new Date(2017, 10, 28)`),Kg(),Sk(3300,`.`),Kg(),Qc(3301,`li`),Sk(3302,`A formatação de exibição pode ser configurada pela propriedade `),Qc(3303,`code`),Sk(3304,`format`),Kg(),Sk(3305,`.`),Kg()()(),Qc(3306,`li`)(3307,`p`)(3308,`code`),Sk(3309,`detail`),Kg(),Sk(3310,`: array de objetos para o master-detail.`),Kg(),Qc(3311,`ul`)(3312,`li`),Sk(3313,`Incompatível com `),Qc(3314,`code`),Sk(3315,`virtual-scroll`),Kg(),Sk(3316,`, que requer altura fixa nas linhas.`),Kg()()(),Qc(3317,`li`)(3318,`p`)(3319,`code`),Sk(3320,`icon`),Kg(),Sk(3321,`: `),Qc(3322,`em`),Sk(3323,`array`),Kg(),Sk(3324,` de `),Qc(3325,`em`),Sk(3326,`string`),Kg(),Sk(3327,` ou objetos para a coluna de ícones.`),Kg()(),Qc(3328,`li`)(3329,`p`)(3330,`code`),Sk(3331,`label`),Kg(),Sk(3332,`: texto com destaque.`),Kg()(),Qc(3333,`li`)(3334,`p`)(3335,`code`),Sk(3336,`link`),Kg(),Sk(3337,`: habilita link na coluna para ação ou navegação.`),Kg()(),Qc(3338,`li`)(3339,`p`)(3340,`code`),Sk(3341,`number`),Kg(),Sk(3342,`: valores numéricos.`),Kg()(),Qc(3343,`li`)(3344,`p`)(3345,`code`),Sk(3346,`string`),Kg(),Sk(3347,`: textos.`),Kg()(),Qc(3348,`li`)(3349,`p`)(3350,`code`),Sk(3351,`subtitle`),Kg(),Sk(3352,`: array de objetos para a coluna de legenda.`),Kg()(),Qc(3353,`li`)(3354,`p`)(3355,`code`),Sk(3356,`time`),Kg(),Sk(3357,`: valor de horário.`),Kg(),Qc(3358,`ul`)(3359,`li`),Sk(3360,`Aceita o tipo `),Qc(3361,`em`),Sk(3362,`string`),Kg(),Sk(3363,` nos formatos `),Qc(3364,`strong`),Sk(3365,`'HH:mm:ss'`),Kg(),Sk(3366,` ou `),Qc(3367,`strong`),Sk(3368,`'HH:mm:ss.ffffff'`),Kg(),Sk(3369,`, por exemplo: `),Qc(3370,`code`),Sk(3371,`'23:12:45'`),Kg(),Sk(3372,`.`),Kg()()(),Qc(3373,`li`)(3374,`p`)(3375,`code`),Sk(3376,`cellTemplate`),Kg(),Sk(3377,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Qc(3378,`a`,12),Sk(3379,`PoTableCellTemplate`),Kg(),Sk(3380,`.`),Kg()(),Qc(3381,`li`)(3382,`p`)(3383,`code`),Sk(3384,`columnTemplate`),Kg(),Sk(3385,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Qc(3386,`a`,11),Sk(3387,`PoTableColumnTemplate`),Kg(),Sk(3388,`.`),Kg()()()()(),Qc(3389,`tr`,209)(3390,`td`,22)(3391,`div`,23)(3392,`span`,24),Sk(3393,` visible`),vu(3394,`br`),Kg()()(),Qc(3395,`td`,25)(3396,`code`,26),Sk(3397,`boolean`),Kg()(),Qc(3398,`td`,28)(3399,`em`)(3400,`strong`),Sk(3401,`(opcional)`),Kg()(),Qc(3402,`p`),Sk(3403,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Qc(3404,`strong`),Sk(3405,`gerenciador de colunas`),Kg(),Sk(3406,`.`),Kg(),Qc(3407,`blockquote`)(3408,`p`),Sk(3409,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),Qc(3410,`code`),Sk(3411,`p-max-columns`),Kg(),Sk(3412,`.`),Kg()()()(),Qc(3413,`tr`,210)(3414,`td`,22)(3415,`div`,23)(3416,`span`,24),Sk(3417,` width`),vu(3418,`br`),Kg()()(),Qc(3419,`td`,25)(3420,`code`,45),Sk(3421,`string`),Kg()(),Qc(3422,`td`,28)(3423,`em`)(3424,`strong`),Sk(3425,`(opcional)`),Kg()(),Qc(3426,`p`),Sk(3427,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),Kg(),Qc(3428,`ul`)(3429,`li`),Sk(3430,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),Kg(),Qc(3431,`li`),Sk(3432,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),Kg()()()()(),Qc(3433,`h4`,211)(3434,`code`,9),Sk(3435,`PoTableLiterals`),Kg()(),Qc(3436,`div`,2)(3437,`p`),Sk(3438,`Interface para definição das literais usadas no `),Qc(3439,`code`),Sk(3440,`po-table`),Kg(),Sk(3441,`.`),Kg()(),Qc(3442,`h4`,17),Sk(3443,`Propriedades`),Kg(),Qc(3444,`table`,18)(3445,`tr`,19)(3446,`th`,20),Sk(3447,`Nome`),Kg(),Qc(3448,`th`,20),Sk(3449,`Tipo`),Kg(),Qc(3450,`th`,20),Sk(3451,`Descrição`),Kg()(),Qc(3452,`tr`,212)(3453,`td`,22)(3454,`div`,23)(3455,`span`,24),Sk(3456,` bodyDelete`),vu(3457,`br`),Kg()()(),Qc(3458,`td`,25)(3459,`code`,45),Sk(3460,`string`),Kg()(),Qc(3461,`td`,28)(3462,`em`)(3463,`strong`),Sk(3464,`(opcional)`),Kg()(),Qc(3465,`p`),Sk(3466,`Texto no corpo do Modal de exclusão`),Kg()()(),Qc(3467,`tr`,213)(3468,`td`,22)(3469,`div`,23)(3470,`span`,24),Sk(3471,` cancel`),vu(3472,`br`),Kg()()(),Qc(3473,`td`,25)(3474,`code`,45),Sk(3475,`string`),Kg()(),Qc(3476,`td`,28)(3477,`em`)(3478,`strong`),Sk(3479,`(opcional)`),Kg()(),Qc(3480,`p`),Sk(3481,`Texto no Modal para cancelar a exclusão`),Kg()()(),Qc(3482,`tr`,214)(3483,`td`,22)(3484,`div`,23)(3485,`span`,24),Sk(3486,` columnsManager`),vu(3487,`br`),Kg()()(),Qc(3488,`td`,25)(3489,`code`,45),Sk(3490,`string`),Kg()(),Qc(3491,`td`,28)(3492,`em`)(3493,`strong`),Sk(3494,`(opcional)`),Kg()(),Qc(3495,`p`),Sk(3496,`Texto do `),Qc(3497,`strong`),Sk(3498,`Gerenciador de colunas`),Kg(),Sk(3499,` localizado no canto superior direito da tabela.`),Kg()()(),Qc(3500,`tr`,215)(3501,`td`,22)(3502,`div`,23)(3503,`span`,24),Sk(3504,` completeSubtitle`),vu(3505,`br`),Kg()()(),Qc(3506,`td`,25)(3507,`code`,45),Sk(3508,`string`),Kg()(),Qc(3509,`td`,28)(3510,`em`)(3511,`strong`),Sk(3512,`(opcional)`),Kg()(),Qc(3513,`p`),Sk(3514,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),Kg()()(),Qc(3515,`tr`,216)(3516,`td`,22)(3517,`div`,23)(3518,`span`,24),Sk(3519,` delete`),vu(3520,`br`),Kg()()(),Qc(3521,`td`,25)(3522,`code`,45),Sk(3523,`string`),Kg()(),Qc(3524,`td`,28)(3525,`em`)(3526,`strong`),Sk(3527,`(opcional)`),Kg()(),Qc(3528,`p`),Sk(3529,`Texto no Modal para confirmar a exclusão`),Kg()()(),Qc(3530,`tr`,217)(3531,`td`,22)(3532,`div`,23)(3533,`span`,24),Sk(3534,` deleteApiError`),vu(3535,`br`),Kg()()(),Qc(3536,`td`,25)(3537,`code`,45),Sk(3538,`string`),Kg()(),Qc(3539,`td`,28)(3540,`em`)(3541,`strong`),Sk(3542,`(opcional)`),Kg()(),Qc(3543,`p`),Sk(3544,`Texto de notificação de erro na requisição Delete`),Kg()()(),Qc(3545,`tr`,218)(3546,`td`,22)(3547,`div`,23)(3548,`span`,24),Sk(3549,` deleteSuccessful`),vu(3550,`br`),Kg()()(),Qc(3551,`td`,25)(3552,`code`,45),Sk(3553,`string`),Kg()(),Qc(3554,`td`,28)(3555,`em`)(3556,`strong`),Sk(3557,`(opcional)`),Kg()(),Qc(3558,`p`),Sk(3559,`Texto de notificação de remoção com sucesso`),Kg()()(),Qc(3560,`tr`,219)(3561,`td`,22)(3562,`div`,23)(3563,`span`,24),Sk(3564,` loadMoreData`),vu(3565,`br`),Kg()()(),Qc(3566,`td`,25)(3567,`code`,45),Sk(3568,`string`),Kg()(),Qc(3569,`td`,28)(3570,`em`)(3571,`strong`),Sk(3572,`(opcional)`),Kg()(),Qc(3573,`p`),Sk(3574,`Texto do botão de `),Qc(3575,`strong`),Sk(3576,`Carregar mais resultados`),Kg(),Sk(3577,` localizado no rodapé da tabela.`),Kg()()(),Qc(3578,`tr`,220)(3579,`td`,22)(3580,`div`,23)(3581,`span`,24),Sk(3582,` loadingData`),vu(3583,`br`),Kg()()(),Qc(3584,`td`,25)(3585,`code`,45),Sk(3586,`string`),Kg()(),Qc(3587,`td`,28)(3588,`em`)(3589,`strong`),Sk(3590,`(opcional)`),Kg()(),Qc(3591,`p`),Sk(3592,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),Kg()()(),Qc(3593,`tr`,221)(3594,`td`,22)(3595,`div`,23)(3596,`span`,24),Sk(3597,` multipleItems`),vu(3598,`br`),Kg()()(),Qc(3599,`td`,25)(3600,`code`,45),Sk(3601,`string`),Kg()(),Qc(3602,`td`,28)(3603,`em`)(3604,`strong`),Sk(3605,`(opcional)`),Kg()(),Qc(3606,`p`),Sk(3607,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),Kg()()(),Qc(3608,`tr`,222)(3609,`td`,22)(3610,`div`,23)(3611,`span`,24),Sk(3612,` noColumns`),vu(3613,`br`),Kg()()(),Qc(3614,`td`,25)(3615,`code`,45),Sk(3616,`string`),Kg()(),Qc(3617,`td`,28)(3618,`em`)(3619,`strong`),Sk(3620,`(opcional)`),Kg()(),Qc(3621,`p`),Sk(3622,`Texto exibido quando não existem colunas definidas para a tabela.`),Kg()()(),Qc(3623,`tr`,223)(3624,`td`,22)(3625,`div`,23)(3626,`span`,24),Sk(3627,` noData`),vu(3628,`br`),Kg()()(),Qc(3629,`td`,25)(3630,`code`,45),Sk(3631,`string`),Kg()(),Qc(3632,`td`,28)(3633,`em`)(3634,`strong`),Sk(3635,`(opcional)`),Kg()(),Qc(3636,`p`),Sk(3637,`Texto exibido quando não existem itens para serem exibidos na tabela.`),Kg()()(),Qc(3638,`tr`,224)(3639,`td`,22)(3640,`div`,23)(3641,`span`,24),Sk(3642,` noItem`),vu(3643,`br`),Kg()()(),Qc(3644,`td`,25)(3645,`code`,45),Sk(3646,`string`),Kg()(),Qc(3647,`td`,28)(3648,`em`)(3649,`strong`),Sk(3650,`(opcional)`),Kg()(),Qc(3651,`p`),Sk(3652,`Texto exibido quando nenhum item for selecionado no checkbox.`),Kg()()(),Qc(3653,`tr`,225)(3654,`td`,22)(3655,`div`,23)(3656,`span`,24),Sk(3657,` noVisibleColumn`),vu(3658,`br`),Kg()()(),Qc(3659,`td`,25)(3660,`code`,45),Sk(3661,`string`),Kg()(),Qc(3662,`td`,28)(3663,`em`)(3664,`strong`),Sk(3665,`(opcional)`),Kg()(),Qc(3666,`p`),Sk(3667,`Texto exibido quando não existem colunas visíveis para a tabela.`),Kg()()(),Qc(3668,`tr`,226)(3669,`td`,22)(3670,`div`,23)(3671,`span`,24),Sk(3672,` oneItem`),vu(3673,`br`),Kg()()(),Qc(3674,`td`,25)(3675,`code`,45),Sk(3676,`string`),Kg()(),Qc(3677,`td`,28)(3678,`em`)(3679,`strong`),Sk(3680,`(opcional)`),Kg()(),Qc(3681,`p`),Sk(3682,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),Kg()()(),Qc(3683,`tr`,227)(3684,`td`,22)(3685,`div`,23)(3686,`span`,24),Sk(3687,` searchAiPlaceholder`),vu(3688,`br`),Kg()()(),Qc(3689,`td`,25)(3690,`code`,45),Sk(3691,`string`),Kg()(),Qc(3692,`td`,28)(3693,`em`)(3694,`strong`),Sk(3695,`(opcional)`),Kg()(),Qc(3696,`p`),Sk(3697,`Texto exibido como placeholder padrão no campo de busca por IA (`),Qc(3698,`code`),Sk(3699,`p-search-ai-field`),Kg(),Sk(3700,`) quando nenhum `),Qc(3701,`code`),Sk(3702,`placeholder`),Kg(),Sk(3703,` é informado.`),Kg()()(),Qc(3704,`tr`,228)(3705,`td`,22)(3706,`div`,23)(3707,`span`,24),Sk(3708,` seeCompleteSubtitle`),vu(3709,`br`),Kg()()(),Qc(3710,`td`,25)(3711,`code`,45),Sk(3712,`string`),Kg()(),Qc(3713,`td`,28)(3714,`em`)(3715,`strong`),Sk(3716,`(opcional)`),Kg()(),Qc(3717,`p`),Sk(3718,`Texto do botão `),Qc(3719,`strong`),Sk(3720,`Ver legenda completa`),Kg(),Sk(3721,` que aparece quando o rodapé de legendas é maior que a tabela.`),Kg()()()(),Qc(3722,`h4`,229)(3723,`code`,9),Sk(3724,`PoTableSearchAiField`),Kg()(),Qc(3725,`div`,2)(3726,`p`),Sk(3727,`Interface de configuração da busca por IA integrada ao `),Qc(3728,`code`),Sk(3729,`po-table`),Kg(),Sk(3730,`, utilizada pela
propriedade `),Qc(3731,`code`),Sk(3732,`p-search-ai-field`),Kg(),Sk(3733,`.`),Kg(),Qc(3734,`p`),Sk(3735,`Quando configurada, a tabela renderiza um campo `),Qc(3736,`code`),Sk(3737,`po-search-ai`),Kg(),Sk(3738,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),Qc(3739,`code`),Sk(3740,`po-search`),Kg(),Sk(3741,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),Qc(3742,`code`),Sk(3743,`apply`),Kg(),Sk(3744,`.`),Kg(),Qc(3745,`h4`),Sk(3746,`Endpoint de IA (`),Qc(3747,`code`),Sk(3748,`url`),Kg(),Sk(3749,`)`),Kg(),Qc(3750,`p`),Sk(3751,`O campo `),Qc(3752,`code`),Sk(3753,`url`),Kg(),Sk(3754,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),Qc(3755,`code`),Sk(3756,`po-search-ai`),Kg(),Sk(3757,`: recebe `),Qc(3758,`code`),Sk(3759,`{ query, columns }`),Kg(),Sk(3760,` via `),Qc(3761,`code`),Sk(3762,`POST`),Kg(),Sk(3763,` e responde com
`),Qc(3764,`code`),Sk(3765,`{ filter, description, confidence }`),Kg(),Sk(3766,`.`),Kg(),Qc(3767,`blockquote`)(3768,`p`),Sk(3769,`A integração com a LLM e a guarda de chaves devem ocorrer `),Qc(3770,`strong`),Sk(3771,`no backend`),Kg(),Sk(3772,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),Qc(3773,`a`,77)(3774,`code`),Sk(3775,`po-sample-api`),Kg()(),Sk(3776,`.`),Kg()(),Qc(3777,`h4`),Sk(3778,`Colunas enviadas à IA`),Kg(),Qc(3779,`p`),Sk(3780,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),Qc(3781,`code`),Sk(3782,`p-columns`),Kg(),Sk(3783,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),Qc(3784,`code`),Sk(3785,`searchAiIgnore: true`),Kg(),Sk(3786,`. O campo `),Qc(3787,`code`),Sk(3788,`columns`),Kg(),Sk(3789,` permite sobrescrever esse comportamento.`),Kg(),Qc(3790,`h4`),Sk(3791,`Estratégia de aplicação do filtro (`),Qc(3792,`code`),Sk(3793,`apply`),Kg(),Sk(3794,`)`),Kg(),Qc(3795,`table`)(3796,`thead`)(3797,`tr`)(3798,`th`),Sk(3799,`Valor`),Kg(),Qc(3800,`th`),Sk(3801,`Comportamento`),Kg()()(),Qc(3802,`tbody`)(3803,`tr`)(3804,`td`)(3805,`code`),Sk(3806,`'auto'`),Kg(),Sk(3807,` (padrão)`),Kg(),Qc(3808,`td`),Sk(3809,`Modo serviço: envia `),Qc(3810,`code`),Sk(3811,`$filter`),Kg(),Sk(3812,` ao `),Qc(3813,`code`),Sk(3814,`p-service-api`),Kg(),Sk(3815,`; modo local: aplica o parser OData interno sobre `),Qc(3816,`code`),Sk(3817,`p-items`),Kg(),Sk(3818,`.`),Kg()(),Qc(3819,`tr`)(3820,`td`)(3821,`code`),Sk(3822,`'parser'`),Kg()(),Qc(3823,`td`),Sk(3824,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),Kg()(),Qc(3825,`tr`)(3826,`td`)(3827,`code`),Sk(3828,`'server'`),Kg()(),Qc(3829,`td`),Sk(3830,`Sempre delega o filtro ao `),Qc(3831,`code`),Sk(3832,`p-service-api`),Kg(),Sk(3833,` via `),Qc(3834,`code`),Sk(3835,`$filter`),Kg(),Sk(3836,`.`),Kg()(),Qc(3837,`tr`)(3838,`td`)(3839,`code`),Sk(3840,`'none'`),Kg()(),Qc(3841,`td`),Sk(3842,`Não aplica o filtro; apenas emite `),Qc(3843,`code`),Sk(3844,`p-search-ai-result`),Kg(),Sk(3845,` para o desenvolvedor tratar.`),Kg()(),Qc(3846,`tr`)(3847,`td`)(3848,`code`),Sk(3849,`(result) => void`),Kg()(),Qc(3850,`td`),Sk(3851,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),Kg()()()()(),Qc(3852,`h4`,17),Sk(3853,`Propriedades`),Kg(),Qc(3854,`table`,18)(3855,`tr`,19)(3856,`th`,20),Sk(3857,`Nome`),Kg(),Qc(3858,`th`,20),Sk(3859,`Tipo`),Kg(),Qc(3860,`th`,20),Sk(3861,`Descrição`),Kg()(),Qc(3862,`tr`,230)(3863,`td`,22)(3864,`div`,23)(3865,`span`,24),Sk(3866,` apply`),vu(3867,`br`),Kg()()(),Qc(3868,`td`,25)(3869,`code`,231),Sk(3870,`'auto' `),Kg(),Qc(3871,`code`,232),Sk(3872,` 'parser' `),Kg(),Qc(3873,`code`,233),Sk(3874,` 'server' `),Kg(),Qc(3875,`code`,234),Sk(3876,` 'none' `),Kg(),Qc(3877,`code`,235),Sk(3878,` ((result: PoSearchAiResult) => void)`),Kg()(),Qc(3879,`td`,28)(3880,`em`)(3881,`strong`),Sk(3882,`(opcional)`),Kg()(),Qc(3883,`p`),Sk(3884,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),Kg(),Qc(3885,`ul`)(3886,`li`)(3887,`code`),Sk(3888,`'auto'`),Kg(),Qc(3889,`em`),Sk(3890,`(padrão)`),Kg(),Sk(3891,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),Qc(3892,`code`),Sk(3893,`$filter`),Kg(),Sk(3894,` ao `),Qc(3895,`code`),Sk(3896,`p-service-api`),Kg(),Sk(3897,`; modo local usa o parser
OData interno sobre `),Qc(3898,`code`),Sk(3899,`p-items`),Kg(),Sk(3900,`.`),Kg(),Qc(3901,`li`)(3902,`code`),Sk(3903,`'parser'`),Kg(),Sk(3904,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),Kg(),Qc(3905,`li`)(3906,`code`),Sk(3907,`'server'`),Kg(),Sk(3908,`: sempre envia `),Qc(3909,`code`),Sk(3910,`$filter`),Kg(),Sk(3911,` ao `),Qc(3912,`code`),Sk(3913,`p-service-api`),Kg(),Sk(3914,`, independentemente
do modo da tabela.`),Kg(),Qc(3915,`li`)(3916,`code`),Sk(3917,`'none'`),Kg(),Sk(3918,`: não aplica o filtro; apenas emite `),Qc(3919,`code`),Sk(3920,`p-search-ai-result`),Kg(),Sk(3921,`.`),Kg(),Qc(3922,`li`)(3923,`code`),Sk(3924,`(result: PoSearchAiResult) => void`),Kg(),Sk(3925,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),Kg()()()(),Qc(3926,`tr`,236)(3927,`td`,22)(3928,`div`,23)(3929,`span`,24),Sk(3930,` columns`),vu(3931,`br`),Kg()()(),Qc(3932,`td`,25)(3933,`code`,237),Sk(3934,`Array<PoSearchAiColumn>`),Kg()(),Qc(3935,`td`,28)(3936,`em`)(3937,`strong`),Sk(3938,`(opcional)`),Kg()(),Qc(3939,`p`),Sk(3940,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),Qc(3941,`code`),Sk(3942,`p-columns`),Kg(),Sk(3943,` da tabela, excluindo colunas com
`),Qc(3944,`code`),Sk(3945,`visible: false`),Kg(),Sk(3946,` ou `),Qc(3947,`code`),Sk(3948,`searchAiIgnore: true`),Kg(),Sk(3949,`.`),Kg()()(),Qc(3950,`tr`,238)(3951,`td`,22)(3952,`div`,23)(3953,`span`,24),Sk(3954,` literals`),vu(3955,`br`),Kg()()(),Qc(3956,`td`,25)(3957,`code`,239),Sk(3958,`PoSearchAiLiterals`),Kg()(),Qc(3959,`td`,28)(3960,`em`)(3961,`strong`),Sk(3962,`(opcional)`),Kg()(),Qc(3963,`p`),Sk(3964,`Objeto com os literais usados pelo `),Qc(3965,`code`),Sk(3966,`po-search-ai`),Kg(),Sk(3967,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),Kg()()(),Qc(3968,`tr`,240)(3969,`td`,22)(3970,`div`,23)(3971,`span`,24),Sk(3972,` minConfidence`),vu(3973,`br`),Kg()()(),Qc(3974,`td`,25)(3975,`code`,56),Sk(3976,`number`),Kg()(),Qc(3977,`td`,28)(3978,`em`)(3979,`strong`),Sk(3980,`(opcional)`),Kg()(),Qc(3981,`p`),Sk(3982,`Nível mínimo de confiança (`),Qc(3983,`code`),Sk(3984,`0.0`),Kg(),Sk(3985,` a `),Qc(3986,`code`),Sk(3987,`1.0`),Kg(),Sk(3988,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),Qc(3989,`code`),Sk(3990,`p-search-ai-low-confidence`),Kg(),Sk(3991,` é emitido em vez de `),Qc(3992,`code`),Sk(3993,`p-search-ai-result`),Kg(),Sk(3994,`.`),Kg()()(),Qc(3995,`tr`,241)(3996,`td`,22)(3997,`div`,23)(3998,`span`,24),Sk(3999,` placeholder`),vu(4e3,`br`),Kg()()(),Qc(4001,`td`,25)(4002,`code`,45),Sk(4003,`string`),Kg()(),Qc(4004,`td`,28)(4005,`em`)(4006,`strong`),Sk(4007,`(opcional)`),Kg()(),Qc(4008,`p`),Sk(4009,`Texto exibido como placeholder no campo de busca por IA.`),Kg()()(),Qc(4010,`tr`,242)(4011,`td`,22)(4012,`div`,23)(4013,`span`,24),Sk(4014,` timeout`),vu(4015,`br`),Kg()()(),Qc(4016,`td`,25)(4017,`code`,56),Sk(4018,`number`),Kg()(),Qc(4019,`td`,28)(4020,`em`)(4021,`strong`),Sk(4022,`(opcional)`),Kg()(),Qc(4023,`p`),Sk(4024,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),Kg()()(),Qc(4025,`tr`,243)(4026,`td`,22)(4027,`div`,23)(4028,`span`,24),Sk(4029,` url`),vu(4030,`br`),Kg()()(),Qc(4031,`td`,25)(4032,`code`,45),Sk(4033,`string`),Kg()(),Qc(4034,`td`,28)(4035,`p`),Sk(4036,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),Qc(4037,`code`),Sk(4038,`po-search-ai`),Kg(),Sk(4039,` via `),Qc(4040,`code`),Sk(4041,`p-url`),Kg(),Sk(4042,`.`),Kg(),Qc(4043,`p`),Sk(4044,`O endpoint deve seguir o contrato do backend de referência (`),Qc(4045,`code`),Sk(4046,`po-sample-api`),Kg(),Sk(4047,`):`),Kg(),Qc(4048,`ul`)(4049,`li`),Sk(4050,`Recebe: `),Qc(4051,`code`),Sk(4052,`POST { query: string, columns: PoSearchAiColumn[] }`),Kg()(),Qc(4053,`li`),Sk(4054,`Responde: `),Qc(4055,`code`),Sk(4056,`{ filter: string, description: string, confidence: number }`),Kg()()()()()(),Qc(4057,`h4`,244)(4058,`code`,9),Sk(4059,`PoTableColumnIcon`),Kg()(),Qc(4060,`div`,2)(4061,`p`),vu(4062,`a`,245),Kg(),Qc(4063,`p`),Sk(4064,`Interface que define a coluna com ícone(s) do `),Qc(4065,`code`),Sk(4066,`po-table`),Kg(),Sk(4067,`.`),Kg()(),Qc(4068,`h4`,17),Sk(4069,`Propriedades`),Kg(),Qc(4070,`table`,18)(4071,`tr`,19)(4072,`th`,20),Sk(4073,`Nome`),Kg(),Qc(4074,`th`,20),Sk(4075,`Tipo`),Kg(),Qc(4076,`th`,20),Sk(4077,`Descrição`),Kg()(),Qc(4078,`tr`,246)(4079,`td`,22)(4080,`div`,23)(4081,`span`,24),Sk(4082,` action`),vu(4083,`br`),Kg()()(),Qc(4084,`td`,25)(4085,`code`,115),Sk(4086,`Function`),Kg()(),Qc(4087,`td`,28)(4088,`em`)(4089,`strong`),Sk(4090,`(opcional)`),Kg()(),Qc(4091,`p`),Sk(4092,`Define a ação que será executada ao clicar no ícone.`),Kg()()(),Qc(4093,`tr`,247)(4094,`td`,22)(4095,`div`,23)(4096,`span`,24),Sk(4097,` color`),vu(4098,`br`),Kg()()(),Qc(4099,`td`,25)(4100,`code`,45),Sk(4101,`string `),Kg(),Qc(4102,`code`,115),Sk(4103,` Function`),Kg()(),Qc(4104,`td`,28)(4105,`em`)(4106,`strong`),Sk(4107,`(opcional)`),Kg()(),Qc(4108,`p`),Sk(4109,`Define a cor do ícone.`),Kg(),Qc(4110,`p`),Sk(4111,`Valores válidos:`),Kg(),Qc(4112,`ul`)(4113,`li`),vu(4114,`span`,142),Qc(4115,`code`),Sk(4116,`color-01`),Kg()(),Qc(4117,`li`),vu(4118,`span`,143),Qc(4119,`code`),Sk(4120,`color-02`),Kg()(),Qc(4121,`li`),vu(4122,`span`,144),Qc(4123,`code`),Sk(4124,`color-03`),Kg()(),Qc(4125,`li`),vu(4126,`span`,145),Qc(4127,`code`),Sk(4128,`color-04`),Kg()(),Qc(4129,`li`),vu(4130,`span`,146),Qc(4131,`code`),Sk(4132,`color-05`),Kg()(),Qc(4133,`li`),vu(4134,`span`,147),Qc(4135,`code`),Sk(4136,`color-06`),Kg()(),Qc(4137,`li`),vu(4138,`span`,148),Qc(4139,`code`),Sk(4140,`color-07`),Kg()(),Qc(4141,`li`),vu(4142,`span`,149),Qc(4143,`code`),Sk(4144,`color-08`),Kg()(),Qc(4145,`li`),vu(4146,`span`,150),Qc(4147,`code`),Sk(4148,`color-09`),Kg()(),Qc(4149,`li`),vu(4150,`span`,151),Qc(4151,`code`),Sk(4152,`color-10`),Kg()(),Qc(4153,`li`),vu(4154,`span`,152),Qc(4155,`code`),Sk(4156,`color-11`),Kg()(),Qc(4157,`li`),vu(4158,`span`,153),Qc(4159,`code`),Sk(4160,`color-12`),Kg()()(),Qc(4161,`blockquote`)(4162,`p`),Sk(4163,`Também é possível utilizar as 35 cores da paleta `),Qc(4164,`strong`),Sk(4165,`Caption Tag Colors`),Kg(),Sk(4166,`:`),Kg()(),Qc(4167,`ul`)(4168,`li`),vu(4169,`span`,154),Qc(4170,`code`),Sk(4171,`caption-tag-01`),Kg(),vu(4172,`span`,155),Qc(4173,`code`),Sk(4174,`caption-tag-02`),Kg(),vu(4175,`span`,156),Qc(4176,`code`),Sk(4177,`caption-tag-03`),Kg(),vu(4178,`span`,157),Qc(4179,`code`),Sk(4180,`caption-tag-04`),Kg(),vu(4181,`span`,158),Qc(4182,`code`),Sk(4183,`caption-tag-05`),Kg()(),Qc(4184,`li`),vu(4185,`span`,159),Qc(4186,`code`),Sk(4187,`caption-tag-06`),Kg(),vu(4188,`span`,160),Qc(4189,`code`),Sk(4190,`caption-tag-07`),Kg(),vu(4191,`span`,161),Qc(4192,`code`),Sk(4193,`caption-tag-08`),Kg(),vu(4194,`span`,162),Qc(4195,`code`),Sk(4196,`caption-tag-09`),Kg(),vu(4197,`span`,163),Qc(4198,`code`),Sk(4199,`caption-tag-10`),Kg()(),Qc(4200,`li`),vu(4201,`span`,164),Qc(4202,`code`),Sk(4203,`caption-tag-11`),Kg(),vu(4204,`span`,165),Qc(4205,`code`),Sk(4206,`caption-tag-12`),Kg(),vu(4207,`span`,166),Qc(4208,`code`),Sk(4209,`caption-tag-13`),Kg(),vu(4210,`span`,167),Qc(4211,`code`),Sk(4212,`caption-tag-14`),Kg(),vu(4213,`span`,168),Qc(4214,`code`),Sk(4215,`caption-tag-15`),Kg()(),Qc(4216,`li`),vu(4217,`span`,169),Qc(4218,`code`),Sk(4219,`caption-tag-16`),Kg(),vu(4220,`span`,170),Qc(4221,`code`),Sk(4222,`caption-tag-17`),Kg(),vu(4223,`span`,171),Qc(4224,`code`),Sk(4225,`caption-tag-18`),Kg(),vu(4226,`span`,172),Qc(4227,`code`),Sk(4228,`caption-tag-19`),Kg(),vu(4229,`span`,173),Qc(4230,`code`),Sk(4231,`caption-tag-20`),Kg()(),Qc(4232,`li`),vu(4233,`span`,174),Qc(4234,`code`),Sk(4235,`caption-tag-21`),Kg(),vu(4236,`span`,175),Qc(4237,`code`),Sk(4238,`caption-tag-22`),Kg(),vu(4239,`span`,176),Qc(4240,`code`),Sk(4241,`caption-tag-23`),Kg(),vu(4242,`span`,177),Qc(4243,`code`),Sk(4244,`caption-tag-24`),Kg(),vu(4245,`span`,178),Qc(4246,`code`),Sk(4247,`caption-tag-25`),Kg()(),Qc(4248,`li`),vu(4249,`span`,179),Qc(4250,`code`),Sk(4251,`caption-tag-26`),Kg(),vu(4252,`span`,180),Qc(4253,`code`),Sk(4254,`caption-tag-27`),Kg(),vu(4255,`span`,181),Qc(4256,`code`),Sk(4257,`caption-tag-28`),Kg(),vu(4258,`span`,182),Qc(4259,`code`),Sk(4260,`caption-tag-29`),Kg(),vu(4261,`span`,183),Qc(4262,`code`),Sk(4263,`caption-tag-30`),Kg()(),Qc(4264,`li`),vu(4265,`span`,184),Qc(4266,`code`),Sk(4267,`caption-tag-31`),Kg(),vu(4268,`span`,185),Qc(4269,`code`),Sk(4270,`caption-tag-32`),Kg(),vu(4271,`span`,186),Qc(4272,`code`),Sk(4273,`caption-tag-33`),Kg(),vu(4274,`span`,187),Qc(4275,`code`),Sk(4276,`caption-tag-34`),Kg(),vu(4277,`span`,188),Qc(4278,`code`),Sk(4279,`caption-tag-35`),Kg()()()()(),Qc(4280,`tr`,248)(4281,`td`,22)(4282,`div`,23)(4283,`span`,24),Sk(4284,` disabled`),vu(4285,`br`),Kg()()(),Qc(4286,`td`,25)(4287,`code`,115),Sk(4288,`Function`),Kg()(),Qc(4289,`td`,28)(4290,`em`)(4291,`strong`),Sk(4292,`(opcional)`),Kg()(),Qc(4293,`p`),Sk(4294,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),Kg()()(),Qc(4295,`tr`,249)(4296,`td`,22)(4297,`div`,23)(4298,`span`,24),Sk(4299,` icon`),vu(4300,`br`),Kg()()(),Qc(4301,`td`,25)(4302,`code`,45),Sk(4303,`string `),Kg(),Qc(4304,`code`,118),Sk(4305,` TemplateRef<void>`),Kg()(),Qc(4306,`td`,28)(4307,`em`)(4308,`strong`),Sk(4309,`(opcional)`),Kg()(),Qc(4310,`p`),Sk(4311,`É possível usar qualquer um dos ícones da `),Qc(4312,`a`,31),Sk(4313,`Biblioteca de ícones`),Kg(),Sk(4314,`. conforme exemplo abaixo:`),Kg(),Qc(4315,`pre`)(4316,`code`),Sk(4317,`[ { icon: 'an an-plus' } ]
`),Kg()(),Qc(4318,`p`),Sk(4319,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Kg(),Qc(4320,`pre`)(4321,`code`),Sk(4322,`[ {  icon: 'fas fa-plus' } ]
`),Kg()(),Qc(4323,`p`),Sk(4324,`Outra opção seria a customização do ícone através do `),Qc(4325,`code`),Sk(4326,`TemplateRef`),Kg(),Sk(4327,`, conforme exemplo abaixo:
`),Qc(4328,`code`),Sk(4329,`component.html`),Kg(),Sk(4330,`:`),Kg(),Qc(4331,`pre`)(4332,`code`),Sk(4333,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),Kg()(),Qc(4334,`p`)(4335,`code`),Sk(4336,`component.ts`),Kg(),Sk(4337,`:`),Kg(),Qc(4338,`pre`)(4339,`code`),Sk(4340,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),Kg()(),Qc(4341,`blockquote`)(4342,`p`),Sk(4343,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),Qc(4344,`code`),Sk(4345,`value`),Kg(),Sk(4346,`.`),Kg()()()(),Qc(4347,`tr`,250)(4348,`td`,22)(4349,`div`,23)(4350,`span`,24),Sk(4351,` tooltip`),vu(4352,`br`),Kg()()(),Qc(4353,`td`,25)(4354,`code`,45),Sk(4355,`string`),Kg()(),Qc(4356,`td`,28)(4357,`em`)(4358,`strong`),Sk(4359,`(opcional)`),Kg()(),Qc(4360,`p`),Sk(4361,`Define um texto de ajuda que será exibido ao passar o `),Qc(4362,`em`),Sk(4363,`mouse`),Kg(),Sk(4364,` em cima do ícone.`),Kg()()(),Qc(4365,`tr`,251)(4366,`td`,22)(4367,`div`,23)(4368,`span`,24),Sk(4369,` value`),vu(4370,`br`),Kg()()(),Qc(4371,`td`,25)(4372,`code`,45),Sk(4373,`string`),Kg()(),Qc(4374,`td`,28)(4375,`p`),Sk(4376,`Define o valor do ícone que será exibido.`),Kg()()()(),Qc(4377,`h4`,252)(4378,`code`,9),Sk(4379,`PoTableColumnLabel`),Kg()(),Qc(4380,`div`,2)(4381,`p`),Sk(4382,`Interface para configuração das colunas de labels do `),Qc(4383,`code`),Sk(4384,`po-table`),Kg(),Sk(4385,`.`),Kg()(),Qc(4386,`h4`,17),Sk(4387,`Propriedades`),Kg(),Qc(4388,`table`,18)(4389,`tr`,19)(4390,`th`,20),Sk(4391,`Nome`),Kg(),Qc(4392,`th`,20),Sk(4393,`Tipo`),Kg(),Qc(4394,`th`,20),Sk(4395,`Descrição`),Kg()(),Qc(4396,`tr`,253)(4397,`td`,22)(4398,`div`,23)(4399,`span`,24),Sk(4400,` color`),vu(4401,`br`),Kg()()(),Qc(4402,`td`,25)(4403,`code`,45),Sk(4404,`string`),Kg()(),Qc(4405,`td`,28)(4406,`em`)(4407,`strong`),Sk(4408,`(opcional)`),Kg()(),Qc(4409,`p`),Sk(4410,`Define a cor do label.`),Kg(),Qc(4411,`p`),Sk(4412,`Valores válidos:`),Kg(),Qc(4413,`ul`)(4414,`li`),vu(4415,`span`,142),Qc(4416,`code`),Sk(4417,`color-01`),Kg()(),Qc(4418,`li`),vu(4419,`span`,143),Qc(4420,`code`),Sk(4421,`color-02`),Kg()(),Qc(4422,`li`),vu(4423,`span`,144),Qc(4424,`code`),Sk(4425,`color-03`),Kg()(),Qc(4426,`li`),vu(4427,`span`,145),Qc(4428,`code`),Sk(4429,`color-04`),Kg()(),Qc(4430,`li`),vu(4431,`span`,146),Qc(4432,`code`),Sk(4433,`color-05`),Kg()(),Qc(4434,`li`),vu(4435,`span`,147),Qc(4436,`code`),Sk(4437,`color-06`),Kg()(),Qc(4438,`li`),vu(4439,`span`,148),Qc(4440,`code`),Sk(4441,`color-07`),Kg()(),Qc(4442,`li`),vu(4443,`span`,149),Qc(4444,`code`),Sk(4445,`color-08`),Kg()(),Qc(4446,`li`),vu(4447,`span`,150),Qc(4448,`code`),Sk(4449,`color-09`),Kg()(),Qc(4450,`li`),vu(4451,`span`,151),Qc(4452,`code`),Sk(4453,`color-10`),Kg()(),Qc(4454,`li`),vu(4455,`span`,152),Qc(4456,`code`),Sk(4457,`color-11`),Kg()(),Qc(4458,`li`),vu(4459,`span`,153),Qc(4460,`code`),Sk(4461,`color-12`),Kg()()(),Qc(4462,`blockquote`)(4463,`p`),Sk(4464,`Também é possível utilizar as 35 cores da paleta `),Qc(4465,`strong`),Sk(4466,`Caption Tag Colors`),Kg(),Sk(4467,`:`),Kg()(),Qc(4468,`ul`)(4469,`li`),vu(4470,`span`,154),Qc(4471,`code`),Sk(4472,`caption-tag-01`),Kg(),vu(4473,`span`,155),Qc(4474,`code`),Sk(4475,`caption-tag-02`),Kg(),vu(4476,`span`,156),Qc(4477,`code`),Sk(4478,`caption-tag-03`),Kg(),vu(4479,`span`,157),Qc(4480,`code`),Sk(4481,`caption-tag-04`),Kg(),vu(4482,`span`,158),Qc(4483,`code`),Sk(4484,`caption-tag-05`),Kg()(),Qc(4485,`li`),vu(4486,`span`,159),Qc(4487,`code`),Sk(4488,`caption-tag-06`),Kg(),vu(4489,`span`,160),Qc(4490,`code`),Sk(4491,`caption-tag-07`),Kg(),vu(4492,`span`,161),Qc(4493,`code`),Sk(4494,`caption-tag-08`),Kg(),vu(4495,`span`,162),Qc(4496,`code`),Sk(4497,`caption-tag-09`),Kg(),vu(4498,`span`,163),Qc(4499,`code`),Sk(4500,`caption-tag-10`),Kg()(),Qc(4501,`li`),vu(4502,`span`,164),Qc(4503,`code`),Sk(4504,`caption-tag-11`),Kg(),vu(4505,`span`,165),Qc(4506,`code`),Sk(4507,`caption-tag-12`),Kg(),vu(4508,`span`,166),Qc(4509,`code`),Sk(4510,`caption-tag-13`),Kg(),vu(4511,`span`,167),Qc(4512,`code`),Sk(4513,`caption-tag-14`),Kg(),vu(4514,`span`,168),Qc(4515,`code`),Sk(4516,`caption-tag-15`),Kg()(),Qc(4517,`li`),vu(4518,`span`,169),Qc(4519,`code`),Sk(4520,`caption-tag-16`),Kg(),vu(4521,`span`,170),Qc(4522,`code`),Sk(4523,`caption-tag-17`),Kg(),vu(4524,`span`,171),Qc(4525,`code`),Sk(4526,`caption-tag-18`),Kg(),vu(4527,`span`,172),Qc(4528,`code`),Sk(4529,`caption-tag-19`),Kg(),vu(4530,`span`,173),Qc(4531,`code`),Sk(4532,`caption-tag-20`),Kg()(),Qc(4533,`li`),vu(4534,`span`,174),Qc(4535,`code`),Sk(4536,`caption-tag-21`),Kg(),vu(4537,`span`,175),Qc(4538,`code`),Sk(4539,`caption-tag-22`),Kg(),vu(4540,`span`,176),Qc(4541,`code`),Sk(4542,`caption-tag-23`),Kg(),vu(4543,`span`,177),Qc(4544,`code`),Sk(4545,`caption-tag-24`),Kg(),vu(4546,`span`,178),Qc(4547,`code`),Sk(4548,`caption-tag-25`),Kg()(),Qc(4549,`li`),vu(4550,`span`,179),Qc(4551,`code`),Sk(4552,`caption-tag-26`),Kg(),vu(4553,`span`,180),Qc(4554,`code`),Sk(4555,`caption-tag-27`),Kg(),vu(4556,`span`,181),Qc(4557,`code`),Sk(4558,`caption-tag-28`),Kg(),vu(4559,`span`,182),Qc(4560,`code`),Sk(4561,`caption-tag-29`),Kg(),vu(4562,`span`,183),Qc(4563,`code`),Sk(4564,`caption-tag-30`),Kg()(),Qc(4565,`li`),vu(4566,`span`,184),Qc(4567,`code`),Sk(4568,`caption-tag-31`),Kg(),vu(4569,`span`,185),Qc(4570,`code`),Sk(4571,`caption-tag-32`),Kg(),vu(4572,`span`,186),Qc(4573,`code`),Sk(4574,`caption-tag-33`),Kg(),vu(4575,`span`,187),Qc(4576,`code`),Sk(4577,`caption-tag-34`),Kg(),vu(4578,`span`,188),Qc(4579,`code`),Sk(4580,`caption-tag-35`),Kg()()(),Qc(4581,`p`),Sk(4582,`Exemplo de uso:`),Kg(),Qc(4583,`pre`)(4584,`code`),Sk(4585,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),Kg()()()(),Qc(4586,`tr`,254)(4587,`td`,22)(4588,`div`,23)(4589,`span`,24),Sk(4590,` icon`),vu(4591,`br`),Kg()()(),Qc(4592,`td`,25)(4593,`code`,26),Sk(4594,`boolean `),Kg(),Qc(4595,`code`,45),Sk(4596,` string `),Kg(),Qc(4597,`code`,118),Sk(4598,` TemplateRef<void>`),Kg()(),Qc(4599,`td`,28)(4600,`em`)(4601,`strong`),Sk(4602,`(opcional)`),Kg()(),Qc(4603,`p`),Sk(4604,`Define ou ativa um ícone que será exibido ao lado do valor da `),Qc(4605,`em`),Sk(4606,`tag`),Kg(),Sk(4607,`.`),Kg(),Qc(4608,`p`),Sk(4609,`Quando `),Qc(4610,`code`),Sk(4611,`p-type`),Kg(),Sk(4612,` estiver definida, basta informar um valor igual a `),Qc(4613,`code`),Sk(4614,`true`),Kg(),Sk(4615,` para que o ícone seja exibido conforme descrições abaixo:`),Kg(),Qc(4616,`ul`)(4617,`li`),vu(4618,`span`,255),Sk(4619,` - `),Qc(4620,`code`),Sk(4621,`success`),Kg()(),Qc(4622,`li`),vu(4623,`span`,256),Sk(4624,` - `),Qc(4625,`code`),Sk(4626,`warning`),Kg()(),Qc(4627,`li`),vu(4628,`span`,257),Sk(4629,` - `),Qc(4630,`code`),Sk(4631,`danger`),Kg()(),Qc(4632,`li`),vu(4633,`span`,258),Sk(4634,` - `),Qc(4635,`code`),Sk(4636,`info`),Kg()()(),Qc(4637,`p`),Sk(4638,`Também É possível usar qualquer um dos ícones da `),Qc(4639,`a`,31),Sk(4640,`Biblioteca de ícones`),Kg(),Sk(4641,`. conforme exemplo abaixo:`),Kg(),Qc(4642,`pre`)(4643,`code`),Sk(4644,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),Kg()(),Qc(4645,`p`),Sk(4646,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(4647,`em`),Sk(4648,`Font Awesome`),Kg(),Sk(4649,`, da seguinte forma:`),Kg(),Qc(4650,`pre`)(4651,`code`),Sk(4652,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),Kg()(),Qc(4653,`p`),Sk(4654,`Outra opção seria a customização do ícone através do `),Qc(4655,`code`),Sk(4656,`TemplateRef`),Kg(),Sk(4657,`, conforme exemplo abaixo:`),Kg(),Qc(4658,`pre`)(4659,`code`),Sk(4660,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(4661,`blockquote`)(4662,`p`),Sk(4663,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(4664,`code`),Sk(4665,`font-size: inherit`),Kg(),Sk(4666,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(4667,`tr`,259)(4668,`td`,22)(4669,`div`,23)(4670,`span`,24),Sk(4671,` label`),vu(4672,`br`),Kg()()(),Qc(4673,`td`,25)(4674,`code`,45),Sk(4675,`string`),Kg()(),Qc(4676,`td`,28)(4677,`p`),Sk(4678,`Texto que será exibido na coluna.`),Kg()()(),Qc(4679,`tr`,260)(4680,`td`,22)(4681,`div`,23)(4682,`span`,24),Sk(4683,` textColor`),vu(4684,`br`),Kg()()(),Qc(4685,`td`,25)(4686,`code`,45),Sk(4687,`string`),Kg()(),Qc(4688,`td`,28)(4689,`em`)(4690,`strong`),Sk(4691,`(opcional)`),Kg()(),Qc(4692,`p`),Sk(4693,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),Kg(),Qc(4694,`ul`)(4695,`li`)(4696,`p`),Sk(4697,`Hexadeximal, por exemplo `),Qc(4698,`code`),Sk(4699,`#c64840`),Kg(),Sk(4700,`;`),Kg()(),Qc(4701,`li`)(4702,`p`),Sk(4703,`RGB, como `),Qc(4704,`code`),Sk(4705,`rgb(0, 0, 165)`),Kg(),Sk(4706,`;`),Kg()(),Qc(4707,`li`)(4708,`p`),Sk(4709,`O nome da cor, por exemplo `),Qc(4710,`code`),Sk(4711,`blue`),Kg(),Sk(4712,`;`),Kg()(),Qc(4713,`li`)(4714,`p`),Sk(4715,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Kg(),Qc(4716,`ul`)(4717,`li`),vu(4718,`span`,142),Qc(4719,`code`),Sk(4720,`color-01`),Kg()(),Qc(4721,`li`),vu(4722,`span`,143),Qc(4723,`code`),Sk(4724,`color-02`),Kg()(),Qc(4725,`li`),vu(4726,`span`,144),Qc(4727,`code`),Sk(4728,`color-03`),Kg()(),Qc(4729,`li`),vu(4730,`span`,145),Qc(4731,`code`),Sk(4732,`color-04`),Kg()(),Qc(4733,`li`),vu(4734,`span`,146),Qc(4735,`code`),Sk(4736,`color-05`),Kg()(),Qc(4737,`li`),vu(4738,`span`,147),Qc(4739,`code`),Sk(4740,`color-06`),Kg()(),Qc(4741,`li`),vu(4742,`span`,148),Qc(4743,`code`),Sk(4744,`color-07`),Kg()(),Qc(4745,`li`),vu(4746,`span`,149),Qc(4747,`code`),Sk(4748,`color-08`),Kg()(),Qc(4749,`li`),vu(4750,`span`,150),Qc(4751,`code`),Sk(4752,`color-09`),Kg()(),Qc(4753,`li`),vu(4754,`span`,151),Qc(4755,`code`),Sk(4756,`color-10`),Kg()(),Qc(4757,`li`),vu(4758,`span`,152),Qc(4759,`code`),Sk(4760,`color-11`),Kg()(),Qc(4761,`li`),vu(4762,`span`,153),Qc(4763,`code`),Sk(4764,`color-12`),Kg()()()(),Qc(4765,`li`)(4766,`p`),Sk(4767,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),Kg()()(),Qc(4768,`blockquote`)(4769,`p`)(4770,`strong`),Sk(4771,`Atenção:`),Kg(),Sk(4772,` A propriedade `),Qc(4773,`code`),Sk(4774,`p-type`),Kg(),Sk(4775,` sobrepõe esta definição.`),Kg()(),Qc(4776,`blockquote`)(4777,`p`)(4778,`strong`),Sk(4779,`Atenção:`),Kg(),Sk(4780,` As cores da paleta `),Qc(4781,`strong`),Sk(4782,`Caption Tag Colors`),Kg(),Sk(4783,` (`),Qc(4784,`code`),Sk(4785,`caption-tag-01`),Kg(),Sk(4786,` a `),Qc(4787,`code`),Sk(4788,`caption-tag-35`),Kg(),Sk(4789,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),Kg()()()(),Qc(4790,`tr`,261)(4791,`td`,22)(4792,`div`,23)(4793,`span`,24),Sk(4794,` tooltip`),vu(4795,`br`),Kg()()(),Qc(4796,`td`,25)(4797,`code`,45),Sk(4798,`string`),Kg()(),Qc(4799,`td`,28)(4800,`em`)(4801,`strong`),Sk(4802,`(opcional)`),Kg()(),Qc(4803,`p`),Sk(4804,`Define um texto de ajuda que será exibido ao passar o `),Qc(4805,`em`),Sk(4806,`mouse`),Kg(),Sk(4807,` em cima do `),Qc(4808,`em`),Sk(4809,`label`),Kg(),Sk(4810,`.`),Kg(),Qc(4811,`blockquote`)(4812,`p`),Sk(4813,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),Kg()()()(),Qc(4814,`tr`,262)(4815,`td`,22)(4816,`div`,23)(4817,`span`,24),Sk(4818,` type`),vu(4819,`br`),Kg()()(),Qc(4820,`td`,25)(4821,`code`,263),Sk(4822,`PoTagType`),Kg()(),Qc(4823,`td`,28)(4824,`em`)(4825,`strong`),Sk(4826,`(opcional)`),Kg()(),Qc(4827,`p`),Sk(4828,`Define o tipo da `),Qc(4829,`em`),Sk(4830,`tag`),Kg(),Sk(4831,`.`),Kg(),Qc(4832,`p`),Sk(4833,`Valores válidos:`),Kg(),Qc(4834,`ul`)(4835,`li`)(4836,`code`),Sk(4837,`success`),Kg(),Sk(4838,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Kg(),Qc(4839,`li`)(4840,`code`),Sk(4841,`warning`),Kg(),Sk(4842,`: cor amarela que representa aviso ou advertência.`),Kg(),Qc(4843,`li`)(4844,`code`),Sk(4845,`danger`),Kg(),Sk(4846,`: cor vermelha para erro ou aviso crítico.`),Kg(),Qc(4847,`li`)(4848,`code`),Sk(4849,`info`),Kg(),Sk(4850,`: cor cinza escuro que caracteriza conteúdo informativo.`),Kg()(),Qc(4851,`blockquote`)(4852,`p`),Sk(4853,`Quando esta propriedade for definida, irá sobrepor a definição de `),Qc(4854,`code`),Sk(4855,`p-color`),Kg(),Sk(4856,` e `),Qc(4857,`code`),Sk(4858,`p-icon`),Kg(),Sk(4859,` somente será exibido caso seja `),Qc(4860,`code`),Sk(4861,`true`),Kg(),Sk(4862,`.`),Kg()()()(),Qc(4863,`tr`,264)(4864,`td`,22)(4865,`div`,23)(4866,`span`,24),Sk(4867,` value`),vu(4868,`br`),Kg()()(),Qc(4869,`td`,25)(4870,`code`,45),Sk(4871,`string `),Kg(),Qc(4872,`code`,56),Sk(4873,` number`),Kg()(),Qc(4874,`td`,28)(4875,`p`),Sk(4876,`Valor que será usado como referência para exibição do conteúdo na coluna.`),Kg()()()(),Qc(4877,`h4`,265)(4878,`code`,9),Sk(4879,`PoTableDetailColumn`),Kg()(),Qc(4880,`div`,2)(4881,`p`),Sk(4882,`Interface para configuração das colunas do `),Qc(4883,`code`),Sk(4884,`po-table-detail`),Kg(),Sk(4885,`.`),Kg()(),Qc(4886,`h4`,17),Sk(4887,`Propriedades`),Kg(),Qc(4888,`table`,18)(4889,`tr`,19)(4890,`th`,20),Sk(4891,`Nome`),Kg(),Qc(4892,`th`,20),Sk(4893,`Tipo`),Kg(),Qc(4894,`th`,20),Sk(4895,`Descrição`),Kg()(),Qc(4896,`tr`,266)(4897,`td`,22)(4898,`div`,23)(4899,`span`,24),Sk(4900,` format`),vu(4901,`br`),Kg()()(),Qc(4902,`td`,25)(4903,`code`,45),Sk(4904,`string`),Kg()(),Qc(4905,`td`,28)(4906,`em`)(4907,`strong`),Sk(4908,`(opcional)`),Kg()(),Qc(4909,`p`),Sk(4910,`Formato de exibição do valor da coluna:`),Kg(),Qc(4911,`ul`)(4912,`li`)(4913,`p`),Sk(4914,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),Kg()(),Qc(4915,`li`)(4916,`p`),Sk(4917,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Kg()(),Qc(4918,`li`)(4919,`p`),Sk(4920,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),Kg()(),Qc(4921,`li`)(4922,`p`),Sk(4923,`Formato para números (number): aceita um valor seguindo o padrão `),Qc(4924,`a`,267)(4925,`strong`),Sk(4926,`DecimalPipe`),Kg()(),Sk(4927,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),Kg(),Qc(4928,`ul`)(4929,`li`),Sk(4930,`Valor de entrada: `),Qc(4931,`code`),Sk(4932,`50`),Kg(),Sk(4933,` e valor para formatação: `),Qc(4934,`code`),Sk(4935,`'1.2-5'`),Kg(),Sk(4936,` o resultado será: `),Qc(4937,`code`),Sk(4938,`50.00`),Kg()()()()()()(),Qc(4939,`tr`,268)(4940,`td`,22)(4941,`div`,23)(4942,`span`,24),Sk(4943,` label`),vu(4944,`br`),Kg()()(),Qc(4945,`td`,25)(4946,`code`,45),Sk(4947,`string`),Kg()(),Qc(4948,`td`,28)(4949,`em`)(4950,`strong`),Sk(4951,`(opcional)`),Kg()(),Qc(4952,`p`),Sk(4953,`Texto para título da coluna.`),Kg()()(),Qc(4954,`tr`,269)(4955,`td`,22)(4956,`div`,23)(4957,`span`,24),Sk(4958,` property`),vu(4959,`br`),Kg()()(),Qc(4960,`td`,25)(4961,`code`,45),Sk(4962,`string`),Kg()(),Qc(4963,`td`,28)(4964,`em`)(4965,`strong`),Sk(4966,`(opcional)`),Kg()(),Qc(4967,`p`),Sk(4968,`Nome identificador da coluna.`),Kg()()(),Qc(4969,`tr`,270)(4970,`td`,22)(4971,`div`,23)(4972,`span`,24),Sk(4973,` type`),vu(4974,`br`),Kg()()(),Qc(4975,`td`,25)(4976,`code`,45),Sk(4977,`string`),Kg()(),Qc(4978,`td`,28)(4979,`em`)(4980,`strong`),Sk(4981,`(opcional)`),Kg()(),Qc(4982,`p`),Sk(4983,`Tipo da coluna.`),Kg(),Qc(4984,`p`),Sk(4985,`Valores válidos:`),Kg(),Qc(4986,`ul`)(4987,`li`)(4988,`p`)(4989,`code`),Sk(4990,`currency`),Kg(),Sk(4991,`: valores monetários.`),Kg()(),Qc(4992,`li`)(4993,`p`)(4994,`code`),Sk(4995,`date`),Kg(),Sk(4996,`: valor de datas.`),Kg(),Qc(4997,`ul`)(4998,`li`),Sk(4999,`Aceita os tipos `),Qc(5e3,`em`),Sk(5001,`string`),Kg(),Sk(5002,` e `),Qc(5003,`em`),Sk(5004,`Date`),Kg(),Sk(5005,` padr\xE3o do Javascript,
por exemplo: `),Qc(5006,`code`),Sk(5007,`'2017-11-28'`),Kg(),Sk(5008,` ou `),Qc(5009,`code`),Sk(5010,`new Date(2017, 10, 28)`),Kg(),Sk(5011,`.`),Kg()()(),Qc(5012,`li`)(5013,`p`)(5014,`code`),Sk(5015,`time`),Kg(),Sk(5016,`: valor de horário.`),Kg()(),Qc(5017,`li`)(5018,`p`)(5019,`code`),Sk(5020,`number`),Kg(),Sk(5021,`: valores numéricos.`),Kg()(),Qc(5022,`li`)(5023,`p`)(5024,`code`),Sk(5025,`dateTime`),Kg(),Sk(5026,`: valor de data com horário.`),Kg(),Qc(5027,`ul`)(5028,`li`),Sk(5029,`Aceita o tipo `),Qc(5030,`em`),Sk(5031,`string`),Kg(),Sk(5032,` no formato `),Qc(5033,`strong`),Sk(5034,`ISO-8601`),Kg(),Sk(5035,` extendido `),Qc(5036,`strong`),Sk(5037,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Kg(),Sk(5038,`
e o tipo `),Qc(5039,`em`),Sk(5040,`Date`),Kg(),Sk(5041,` padrão do Javascript, por exemplo: `),Qc(5042,`code`),Sk(5043,`'2017-11-28T00:00:00-02:00'`),Kg(),Sk(5044,` ou `),Qc(5045,`code`),Sk(5046,`new Date(2017, 10, 28)`),Kg(),Sk(5047,`.`),Kg(),Qc(5048,`li`),Sk(5049,`Aceita o tipo `),Qc(5050,`em`),Sk(5051,`string`),Kg(),Sk(5052,` nos formatos `),Qc(5053,`strong`),Sk(5054,`'HH:mm:ss'`),Kg(),Sk(5055,` ou `),Qc(5056,`strong`),Sk(5057,`'HH:mm:ss.ffffff'`),Kg(),Sk(5058,`, por exemplo: `),Qc(5059,`code`),Sk(5060,`'23:12:45'`),Kg(),Sk(5061,`.`),Kg()()()()()()(),Qc(5062,`h4`,271)(5063,`code`,9),Sk(5064,`PoTableDetail`),Kg()(),Qc(5065,`div`,2)(5066,`p`),Sk(5067,`Interface para configuração do `),Qc(5068,`em`),Sk(5069,`detail`),Kg(),Sk(5070,` do componente `),Qc(5071,`code`),Sk(5072,`po-table`),Kg(),Sk(5073,`.`),Kg()(),Qc(5074,`h4`,17),Sk(5075,`Propriedades`),Kg(),Qc(5076,`table`,18)(5077,`tr`,19)(5078,`th`,20),Sk(5079,`Nome`),Kg(),Qc(5080,`th`,20),Sk(5081,`Tipo`),Kg(),Qc(5082,`th`,20),Sk(5083,`Descrição`),Kg()(),Qc(5084,`tr`,272)(5085,`td`,22)(5086,`div`,23)(5087,`span`,24),Sk(5088,` columns`),vu(5089,`br`),Kg()()(),Qc(5090,`td`,25)(5091,`code`,273),Sk(5092,`Array<PoTableDetailColumn>`),Kg()(),Qc(5093,`td`,28)(5094,`p`),Sk(5095,`Define uma lista do tipo `),Qc(5096,`code`),Sk(5097,`PoTableDetailColumn`),Kg(),Sk(5098,` para as colunas do objet `),Qc(5099,`em`),Sk(5100,`detail`),Kg(),Sk(5101,`. Por exemplo:`),Kg(),Qc(5102,`pre`)(5103,`code`),Sk(5104,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),Kg()()()(),Qc(5105,`tr`,274)(5106,`td`,22)(5107,`div`,23)(5108,`span`,24),Sk(5109,` hideSelect`),vu(5110,`br`),Kg()()(),Qc(5111,`td`,25)(5112,`code`,26),Sk(5113,`boolean`),Kg()(),Qc(5114,`td`,28)(5115,`em`)(5116,`strong`),Sk(5117,`(opcional)`),Kg()(),Qc(5118,`p`),Sk(5119,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),Kg()()(),Qc(5120,`tr`,275)(5121,`td`,22)(5122,`div`,23)(5123,`span`,24),Sk(5124,` typeHeader`),vu(5125,`br`),Kg()()(),Qc(5126,`td`,25)(5127,`code`,45),Sk(5128,`string`),Kg()(),Qc(5129,`td`,28)(5130,`em`)(5131,`strong`),Sk(5132,`(opcional)`),Kg()(),Qc(5133,`p`),Sk(5134,`Define o tipo de cabeçalho para o conteúdo do `),Qc(5135,`em`),Sk(5136,`detail`),Kg(),Sk(5137,` .`),Kg(),Qc(5138,`p`),Sk(5139,`Valores válidos:`),Kg(),Qc(5140,`ul`)(5141,`li`)(5142,`code`),Sk(5143,`inline`),Kg(),Sk(5144,`: Atribui o cabeçalho na mesma linha do `),Qc(5145,`em`),Sk(5146,`detail`),Kg(),Sk(5147,`.`),Kg(),Qc(5148,`li`)(5149,`code`),Sk(5150,`top`),Kg(),Sk(5151,`: Atribui o cabeçalho acima do `),Qc(5152,`em`),Sk(5153,`detail`),Kg(),Sk(5154,`, idêntico ao `),Qc(5155,`code`),Sk(5156,`po-table`),Kg(),Sk(5157,`.`),Kg(),Qc(5158,`li`)(5159,`code`),Sk(5160,`none`),Kg(),Sk(5161,`: Remove o cabeçalho do `),Qc(5162,`em`),Sk(5163,`detail`),Kg(),Sk(5164,`.`),Kg()()()()(),Qc(5165,`h4`,276)(5166,`code`,9),Sk(5167,`PoTableSubtitleColumn`),Kg()(),Qc(5168,`div`,2)(5169,`p`),Sk(5170,`Interface para configuração das colunas de legenda do Po-Table.`),Kg()(),Qc(5171,`h4`,17),Sk(5172,`Propriedades`),Kg(),Qc(5173,`table`,18)(5174,`tr`,19)(5175,`th`,20),Sk(5176,`Nome`),Kg(),Qc(5177,`th`,20),Sk(5178,`Tipo`),Kg(),Qc(5179,`th`,20),Sk(5180,`Descrição`),Kg()(),Qc(5181,`tr`,277)(5182,`td`,22)(5183,`div`,23)(5184,`span`,24),Sk(5185,` color`),vu(5186,`br`),Kg()()(),Qc(5187,`td`,25)(5188,`code`,45),Sk(5189,`string`),Kg()(),Qc(5190,`td`,28)(5191,`em`)(5192,`strong`),Sk(5193,`(opcional)`),Kg()(),Qc(5194,`p`),Sk(5195,`Define a cor do `),Qc(5196,`em`),Sk(5197,`status`),Kg(),Sk(5198,`.`),Kg(),Qc(5199,`p`),Sk(5200,`Valores válidos:`),Kg(),Qc(5201,`ul`)(5202,`li`),vu(5203,`span`,142),Qc(5204,`code`),Sk(5205,`color-01`),Kg()(),Qc(5206,`li`),vu(5207,`span`,143),Qc(5208,`code`),Sk(5209,`color-02`),Kg()(),Qc(5210,`li`),vu(5211,`span`,144),Qc(5212,`code`),Sk(5213,`color-03`),Kg()(),Qc(5214,`li`),vu(5215,`span`,145),Qc(5216,`code`),Sk(5217,`color-04`),Kg()(),Qc(5218,`li`),vu(5219,`span`,146),Qc(5220,`code`),Sk(5221,`color-05`),Kg()(),Qc(5222,`li`),vu(5223,`span`,147),Qc(5224,`code`),Sk(5225,`color-06`),Kg()(),Qc(5226,`li`),vu(5227,`span`,148),Qc(5228,`code`),Sk(5229,`color-07`),Kg()(),Qc(5230,`li`),vu(5231,`span`,149),Qc(5232,`code`),Sk(5233,`color-08`),Kg()(),Qc(5234,`li`),vu(5235,`span`,150),Qc(5236,`code`),Sk(5237,`color-09`),Kg()(),Qc(5238,`li`),vu(5239,`span`,151),Qc(5240,`code`),Sk(5241,`color-10`),Kg()(),Qc(5242,`li`),vu(5243,`span`,152),Qc(5244,`code`),Sk(5245,`color-11`),Kg()(),Qc(5246,`li`),vu(5247,`span`,153),Qc(5248,`code`),Sk(5249,`color-12`),Kg()()(),Qc(5250,`blockquote`)(5251,`p`),Sk(5252,`Também é possível utilizar as 35 cores da paleta `),Qc(5253,`strong`),Sk(5254,`Caption Tag Colors`),Kg(),Sk(5255,`:`),Kg()(),Qc(5256,`ul`)(5257,`li`),vu(5258,`span`,154),Qc(5259,`code`),Sk(5260,`caption-tag-01`),Kg(),vu(5261,`span`,155),Qc(5262,`code`),Sk(5263,`caption-tag-02`),Kg(),vu(5264,`span`,156),Qc(5265,`code`),Sk(5266,`caption-tag-03`),Kg(),vu(5267,`span`,157),Qc(5268,`code`),Sk(5269,`caption-tag-04`),Kg(),vu(5270,`span`,158),Qc(5271,`code`),Sk(5272,`caption-tag-05`),Kg()(),Qc(5273,`li`),vu(5274,`span`,159),Qc(5275,`code`),Sk(5276,`caption-tag-06`),Kg(),vu(5277,`span`,160),Qc(5278,`code`),Sk(5279,`caption-tag-07`),Kg(),vu(5280,`span`,161),Qc(5281,`code`),Sk(5282,`caption-tag-08`),Kg(),vu(5283,`span`,162),Qc(5284,`code`),Sk(5285,`caption-tag-09`),Kg(),vu(5286,`span`,163),Qc(5287,`code`),Sk(5288,`caption-tag-10`),Kg()(),Qc(5289,`li`),vu(5290,`span`,164),Qc(5291,`code`),Sk(5292,`caption-tag-11`),Kg(),vu(5293,`span`,165),Qc(5294,`code`),Sk(5295,`caption-tag-12`),Kg(),vu(5296,`span`,166),Qc(5297,`code`),Sk(5298,`caption-tag-13`),Kg(),vu(5299,`span`,167),Qc(5300,`code`),Sk(5301,`caption-tag-14`),Kg(),vu(5302,`span`,168),Qc(5303,`code`),Sk(5304,`caption-tag-15`),Kg()(),Qc(5305,`li`),vu(5306,`span`,169),Qc(5307,`code`),Sk(5308,`caption-tag-16`),Kg(),vu(5309,`span`,170),Qc(5310,`code`),Sk(5311,`caption-tag-17`),Kg(),vu(5312,`span`,171),Qc(5313,`code`),Sk(5314,`caption-tag-18`),Kg(),vu(5315,`span`,172),Qc(5316,`code`),Sk(5317,`caption-tag-19`),Kg(),vu(5318,`span`,173),Qc(5319,`code`),Sk(5320,`caption-tag-20`),Kg()(),Qc(5321,`li`),vu(5322,`span`,174),Qc(5323,`code`),Sk(5324,`caption-tag-21`),Kg(),vu(5325,`span`,175),Qc(5326,`code`),Sk(5327,`caption-tag-22`),Kg(),vu(5328,`span`,176),Qc(5329,`code`),Sk(5330,`caption-tag-23`),Kg(),vu(5331,`span`,177),Qc(5332,`code`),Sk(5333,`caption-tag-24`),Kg(),vu(5334,`span`,178),Qc(5335,`code`),Sk(5336,`caption-tag-25`),Kg()(),Qc(5337,`li`),vu(5338,`span`,179),Qc(5339,`code`),Sk(5340,`caption-tag-26`),Kg(),vu(5341,`span`,180),Qc(5342,`code`),Sk(5343,`caption-tag-27`),Kg(),vu(5344,`span`,181),Qc(5345,`code`),Sk(5346,`caption-tag-28`),Kg(),vu(5347,`span`,182),Qc(5348,`code`),Sk(5349,`caption-tag-29`),Kg(),vu(5350,`span`,183),Qc(5351,`code`),Sk(5352,`caption-tag-30`),Kg()(),Qc(5353,`li`),vu(5354,`span`,184),Qc(5355,`code`),Sk(5356,`caption-tag-31`),Kg(),vu(5357,`span`,185),Qc(5358,`code`),Sk(5359,`caption-tag-32`),Kg(),vu(5360,`span`,186),Qc(5361,`code`),Sk(5362,`caption-tag-33`),Kg(),vu(5363,`span`,187),Qc(5364,`code`),Sk(5365,`caption-tag-34`),Kg(),vu(5366,`span`,188),Qc(5367,`code`),Sk(5368,`caption-tag-35`),Kg()()()()(),Qc(5369,`tr`,278)(5370,`td`,22)(5371,`div`,23)(5372,`span`,24),Sk(5373,` content`),vu(5374,`br`),Kg()()(),Qc(5375,`td`,25)(5376,`code`,45),Sk(5377,`string`),Kg()(),Qc(5378,`td`,28)(5379,`p`),Sk(5380,`Conteúdo que será exibido na coluna da tabela.`),Kg()()(),Qc(5381,`tr`,279)(5382,`td`,22)(5383,`div`,23)(5384,`span`,24),Sk(5385,` label`),vu(5386,`br`),Kg()()(),Qc(5387,`td`,25)(5388,`code`,45),Sk(5389,`string`),Kg()(),Qc(5390,`td`,28)(5391,`p`),Sk(5392,`Texto que será exibido no rodapé da tabela como legenda.`),Kg()()(),Qc(5393,`tr`,280)(5394,`td`,22)(5395,`div`,23)(5396,`span`,24),Sk(5397,` value`),vu(5398,`br`),Kg()()(),Qc(5399,`td`,25)(5400,`code`,45),Sk(5401,`string `),Kg(),Qc(5402,`code`,56),Sk(5403,` number`),Kg()(),Qc(5404,`td`,28)(5405,`p`),Sk(5406,`Valor que será usado como referência para exibição do conteúdo na coluna.`),Kg()()()(),Qc(5407,`h3`),Sk(5408,`Enums`),Kg(),Qc(5409,`h4`,281)(5410,`code`,9),Sk(5411,`PoTableColumnSortType`),Kg()(),Qc(5412,`div`,2)(5413,`p`),Sk(5414,`Tipos de ordenação das colunas da tabela.`),Kg()(),Qc(5415,`h4`,17),Sk(5416,`Propriedades`),Kg(),Qc(5417,`table`,18)(5418,`tr`,19)(5419,`th`,20),Sk(5420,`Nome`),Kg(),Qc(5421,`th`,20),Sk(5422,`Descrição`),Kg()(),Qc(5423,`tr`,282)(5424,`td`,22)(5425,`div`,23)(5426,`span`,24),Sk(5427,` Ascending`),vu(5428,`br`),Kg()()(),Qc(5429,`td`,28)(5430,`p`),Sk(5431,`Ordenação ascendente`),Kg()()(),Qc(5432,`tr`,283)(5433,`td`,22)(5434,`div`,23)(5435,`span`,24),Sk(5436,` Descending`),vu(5437,`br`),Kg()()(),Qc(5438,`td`,28)(5439,`p`),Sk(5440,`Ordenação descendente`),Kg()()()(),Qc(5441,`h4`,284)(5442,`code`,9),Sk(5443,`PoTableColumnSpacing`),Kg()(),Qc(5444,`div`,2)(5445,`p`),Sk(5446,`Tipos de espaçamento interno (padding) das células (`),Qc(5447,`strong`),Sk(5448,`p-spacing`),Kg(),Sk(5449,`) do po-table.`),Kg()(),Qc(5450,`h4`,17),Sk(5451,`Propriedades`),Kg(),Qc(5452,`table`,18)(5453,`tr`,19)(5454,`th`,20),Sk(5455,`Nome`),Kg(),Qc(5456,`th`,20),Sk(5457,`Descrição`),Kg()(),Qc(5458,`tr`,285)(5459,`td`,22)(5460,`div`,23)(5461,`span`,24),Sk(5462,` ExtraSmall`),vu(5463,`br`),Kg()()(),Qc(5464,`td`,28)(5465,`p`),Sk(5466,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),Kg()()(),Qc(5467,`tr`,286)(5468,`td`,22)(5469,`div`,23)(5470,`span`,24),Sk(5471,` Small`),vu(5472,`br`),Kg()()(),Qc(5473,`td`,28)(5474,`p`),Sk(5475,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),Kg()()(),Qc(5476,`tr`,287)(5477,`td`,22)(5478,`div`,23)(5479,`span`,24),Sk(5480,` Medium`),vu(5481,`br`),Kg()()(),Qc(5482,`td`,28)(5483,`p`),Sk(5484,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),Kg()()(),Qc(5485,`tr`,288)(5486,`td`,22)(5487,`div`,23)(5488,`span`,24),Sk(5489,` Large`),vu(5490,`br`),Kg()()(),Qc(5491,`td`,28)(5492,`p`),Sk(5493,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return r})();function nn(r,N){if(r&1&&(Qc(0,`div`,1),vu(1,`sample-po-table-basic-view`)(2,`sample-po-table-labs-view`)(3,`sample-po-table-with-api-view`)(4,`sample-po-table-transport-view`)(5,`sample-po-table-airfare-view`)(6,`sample-po-table-components-view`)(7,`sample-po-table-heroes-view`)(8,`sample-po-table-draggable-view`)(9,`sample-po-table-search-ai-view`),Kg()),r&2){let o=ek();Rb(`hidden`,o.activeTab!==`web`)}}var an=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;title=`Table`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Table · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,a){l&1&&(Qc(0,`po-page-default`,0),FO(1,nn,10,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-table-doc`),Kg()()),l&2&&(Rb(`p-title`,a.title)(`p-actions`,a.actions),wg(),VO(a.hidePoWebSample?-1:1),wg(),Rb(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,Ze,tt,it,ot,rt,dt,pt,ut,Et,xt],encapsulation:2,changeDetection:1})}return r})()}];var gt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[GV.forChild(an),GV]})}return r})();var Si=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,gt]})}return r})();export{Si as DocPoTableModule};