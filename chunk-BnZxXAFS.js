import{m as P,p as M}from"./main-5ZHUK4IE.js";import{An as sie,Ar as I,At as Zte,Ci as UO,Da as kI,Dr as Gk,F as Joe,G as Nf,Gi as Yk,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ka as qk,L as Koe,Lr as Kg,Ma as lF,O as Gne,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Tr as Gb,Ui as YO,Ut as cae,W as Mze,Wi as Yb,Wr as MZ,Xr as Nk,Z as P4,Zi as ar,Zr as No,_i as S,an as ia,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,fa as hF,gi as Rb,go as z0,hr as Db,i as $ne,io as vu,j as I4,ji as Vk,k as Goe,kt as Zoe,li as Qc,na as de,oo as wg,pi as R,pt as Tn,qa as rR,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,sr as BO,ti as Ok,tt as R4,ua as ge,un as kf,uo as xk,vi as Sk,wn as q4,wr as GV,x as Eu,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var ht=()=>({table:`PO Table`,angular:`PO-UI`});var gt=r=>[r];var Xe=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&vu(0,`po-table`,0),l&2&&Rb(`p-items`,Vk(2,gt,Lk(1,ht)))},dependencies:[q4],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-table-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-basic/sample-po-table-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-basic/sample-po-table-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-table-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ft,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Xe],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:/* @__PURE__ */ new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:/* @__PURE__ */ new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Ye=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=Tn.Medium;filterType=Eu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Eu.startsWith},{label:`Contains`,value:Eu.contains},{label:`Ends With`,value:Eu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=Tn.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(I(be))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(a.poModal=m.first)}},standalone:!1,features:[we([be])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=YO();Qc(0,`po-table`,1),vt(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Kg(),vu(4,`po-divider`),Qc(5,`div`,2)(6,`po-button`,4),vt(`p-click`,function(){return a.addItem()}),Kg()(),vu(7,`po-divider`),Qc(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.columnsName,s)||(a.columnsName=s),U_(s)}),vt(`p-change`,function(){return a.updateColumns()}),Kg()(),Qc(12,`div`,2)(13,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),U_(s)}),Kg(),Qc(14,`po-switch`,7),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),U_(s)}),Kg()(),Qc(15,`div`,2)(16,`po-checkbox-group`,8),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.properties,s)||(a.properties=s),U_(s)}),Kg()(),Qc(17,`div`,2)(18,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.actionsDefinition,s)||(a.actionsDefinition=s),U_(s)}),vt(`p-change`,function(){return a.changeActionOptions()}),Kg()(),Qc(19,`div`,2)(20,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.spacing,s)||(a.spacing=s),U_(s)}),Kg()(),Qc(21,`div`,2)(22,`po-checkbox-group`,11),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.selection,s)||(a.selection=s),U_(s)}),vt(`p-change`,function(){return a.changeSelectionOptions()}),Kg(),Qc(23,`po-radio-group`,12),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.filterType,s)||(a.filterType=s),U_(s)}),Kg(),Qc(24,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.componentsSize,s)||(a.componentsSize=s),U_(s)}),Kg()(),Qc(25,`div`,2)(26,`po-input`,14),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.literals,s)||(a.literals=s),U_(s)}),vt(`p-change`,function(){return a.changeLiterals()}),Kg(),Qc(27,`po-input`,15),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.filteredColumns,s)||(a.filteredColumns=s),U_(s)}),vt(`p-change`,function(){return a.changeFilteredColumns()}),Kg(),Qc(28,`po-number`,16),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.height,s)||(a.height=s),U_(s)}),Kg(),Qc(29,`po-number`,17),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.maxColumns,s)||(a.maxColumns=s),U_(s)}),Kg()(),Qc(30,`div`,2)(31,`po-button`,18),vt(`p-click`,function(){return a.restore()}),Kg()()(),Qc(32,`po-modal`,19),vu(33,`po-info`,20),Kg()}l&2&&(Rb(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),wg(3),Rb(`p-value`,a.event),wg(8),Yb(`ngModel`,a.columnsName),Rb(`p-options`,a.columnsOptions),W0(),wg(2),Yb(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),Rb(`p-options`,a.typeHeaderOptions),W0(),wg(),Yb(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),W0(),wg(2),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),W0(),wg(2),Yb(`ngModel`,a.actionsDefinition),Rb(`p-options`,a.actionsDefinitionOptions),W0(),wg(2),Yb(`ngModel`,a.spacing),Rb(`p-options`,a.typeSpacing),W0(),wg(2),Yb(`ngModel`,a.selection),Rb(`p-options`,a.selectionOptions),W0(),wg(),Yb(`ngModel`,a.filterType),Rb(`p-options`,a.filterModeOptions),W0(),wg(),Yb(`ngModel`,a.componentsSize),Rb(`p-options`,a.componentsSizeOptions),W0(),wg(2),Yb(`ngModel`,a.literals),W0(),wg(),Yb(`ngModel`,a.filteredColumns),W0(),wg(),Yb(`ngModel`,a.height),W0(),wg(),Yb(`ngModel`,a.maxColumns),W0(),wg(4),Rb(`p-value`,a.currentItem))},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,R4,Joe,ia,q4],encapsulation:2,changeDetection:1})}return r})();var wt=r=>({"docs-sample-code-tabs":r});var et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-table-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-labs/sample-po-table-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-table
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-labs/sample-po-table-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-table-labs/sample-po-table-labs.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

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
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-table-labs`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,wt,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ye],encapsulation:2,changeDetection:1})}return r})();var Dt=[`table`];var tt=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&Du(Dt,5),l&2){let m;No(m=xo())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=YO();Qc(0,`div`,1)(1,`po-input`,2),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.service,s)||(a.service=s),U_(s)}),vt(`p-change`,function(){return a.changeService(a.service)}),Kg()(),Qc(2,`div`,1),vu(3,`po-divider`,3),Qc(4,`po-textarea`,4),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.stringColumns,s)||(a.stringColumns=s),U_(s)}),vt(`p-change`,function(s){return a.onChangeColumns(s)}),Kg()(),Qc(5,`div`,1),vu(6,`po-divider`,5),Qc(7,`po-input`,6),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.key,s)||(a.key=s),U_(s)}),Kg(),Qc(8,`po-input`,7),z0(),Kb(`ngModelChange`,function(s){return B_(m),Tk(a.value,s)||(a.value=s),U_(s)}),Kg()(),Qc(9,`div`,1)(10,`po-button`,8),vt(`p-click`,function(){return a.addFilter(a.key,a.value)}),Kg()(),Qc(11,`div`,1)(12,`po-disclaimer-group`,9),vt(`p-remove`,function(s){return a.removeItem(s)})(`p-remove-all`,function(){return a.removeAllItems()}),Kg()(),Qc(13,`div`,1),vu(14,`po-table`,10,0),Kg()}l&2&&(wg(),Yb(`ngModel`,a.service),W0(),wg(3),Yb(`ngModel`,a.stringColumns),Rb(`p-rows`,5),W0(),wg(3),Yb(`ngModel`,a.key),W0(),wg(),Yb(`ngModel`,a.value),W0(),wg(2),Rb(`p-disabled`,!a.key||!a.value),wg(2),Rb(`p-disclaimers`,a.filters),wg(2),Rb(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[MZ,QL,oi,P4,Nf,j4,Zoe,q4],encapsulation:2,changeDetection:1})}return r$1})();var At=r=>({"docs-sample-code-tabs":r});var nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-table-with-api`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table using API`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-table-with-api`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,At,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,tt],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Mt(r,W){if(r&1){let o=YO();Qc(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),z0(),Kb(`ngModelChange`,function(a){let m=B_(o).$implicit;return Tk(m.status,a)||(m.status=a),U_(a)}),Kg()(),Qc(3,`div`,3),vu(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),Kg()()}if(r&2){let o=W.$implicit,l=ek();Rb(`p-title`,xk(`Transport detail `,o.code)),wg(2),Yb(`ngModel`,o.status),Rb(`p-options`,l.statusOptions),W0(),wg(2),Rb(`p-value`,o.batch_product),wg(),Rb(`p-value`,o.driver),wg(),Rb(`p-value`,o.license_plate)}}var it=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(I(Ee))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[we([Ee])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(Qc(0,`po-table`,0),Db(1,Mt,7,7,`ng-template`,1),Kg()),l&2&&(Rb(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),wg(),Rb(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[MZ,QL,Koe,Joe,q4,Gne,bae],encapsulation:2,changeDetection:1})}return r})();var Ot=r=>({"docs-sample-code-tabs":r});var at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-table-transport`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Transport`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-transport/sample-po-table-transport.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-table
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-transport/sample-po-table-transport.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-table-transport/sample-po-table-transport.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

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
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-table-transport`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ot,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,it],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var ot=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`)}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(I(Se),I(Ru),I(sie))};static ɵcmp=Jn({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&Du(ia,7)(q4,7),l&2){let m;No(m=xo())&&(a.poModal=m.first),No(m=xo())&&(a.poTable=m.first)}},standalone:!1,features:[we([Se,sie])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(Qc(0,`div`,0),Sk(1,`Choose one or more promotional airfares`),Kg(),vu(2,`po-divider`),Qc(3,`po-table`,1),vt(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(p){return a.sumTotal(p)})(`p-unselected`,function(p){return a.decreaseTotal(p)})(`p-change-visible-columns`,function(p){return a.changeColumnVisible(p)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(p){return a.deleteItems(p)}),Kg(),vu(4,`po-divider`)(5,`po-info`,2),Gk(6,`currency`),vu(7,`po-info`,3),Qc(8,`div`,4)(9,`po-button`,5),vt(`p-click`,function(){return a.addToCart()}),Kg(),Qc(10,`po-button`,6),vt(`p-click`,function(){return a.expandAll()}),Kg(),Qc(11,`po-button`,7),vt(`p-click`,function(){return a.collapseAll()}),Kg()(),Qc(12,`po-modal`,8),vu(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),Kg()),l&2&&(wg(3),Rb(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),wg(2),Rb(`p-value`,Nk(Yk(6,21,a.total,`USD`))),wg(2),Rb(`p-value`,a.totalExpanded),wg(5),Rb(`p-title`,Ok(``,a.detail?.destination,` - `,a.detail?.country)),wg(),Rb(`p-value`,a.detail?.airline),wg(),Rb(`p-value`,a.detail?.initials),wg(),Rb(`p-value`,a.detail?.class))},dependencies:[oi,Nf,Joe,ia,q4,hF],encapsulation:2,changeDetection:1})}return r$2})();var Rt=r=>({"docs-sample-code-tabs":r});var lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-table-airfare`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Airfare`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

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
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-table-airfare`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Rt,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ot],encapsulation:2,changeDetection:1})}return r})();var j;(function(r){r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`})(j||(j={}));var xe=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(`.`).length>1){let s=m.split(`.`)[0],ye=m.split(`.`)[1];return o[s][ye]<l[s][ye]?p===kf.Ascending?-1:1:p===kf.Ascending?1:-1}else return o[m]<l[m]?p===kf.Ascending?-1:1:p===kf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Ht(r,W){if(r&1&&(Qc(0,`div`),Sk(1),Gk(2,`uppercase`),Kg()),r&2){let o=W.$implicit;gk(xk(`badge `,o)),wg(),Gb(qk(2,4,o))}}function jt(r,W){if(r&1&&(Qc(0,`ul`)(1,`li`,4),Sk(2),Kg(),vu(3,`po-divider`),Kg()),r&2){let o=W.$implicit;wg(2),Gb(o)}}var rt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:j.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:j.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:j.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===j.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==j.Stable}canShowExtras(o){return o?.component?.status!==j.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(I(xe),I(An))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(a.poModal=m.first)}},standalone:!1,features:[we([xe])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(Qc(0,`div`,0),Sk(1,`PO UI Library`),Kg(),vu(2,`po-divider`),Qc(3,`po-table`,1),vt(`p-show-more`,function(p){return a.showMore(p)})(`p-sort-by`,function(p){return a.sort(p)}),Db(4,Ht,3,6,`ng-template`,2),Kg(),Qc(5,`po-modal`,3),UO(6,jt,4,1,`ul`,null,BO),Kg()),l&2&&(wg(3),Rb(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),wg(),Rb(`p-property`,`component.type`),wg(),Rb(`p-title`,Ok(``,a.title,` - `,a.extraInformation?.component)),wg(),HO(a.extraInformation?.extras))},dependencies:[Nf,ia,q4,$ne,lF],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var Ut=r=>({"docs-sample-code-tabs":r});var mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:38,vars:6,consts:[[`id`,`sample-po-table-components`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Po Field Components`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-components/sample-po-table-components.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-components/sample-po-table-components.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-table-components/sample-po-table-components.enum.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),Kg(),Qc(25,`label`,6),Sk(26,`sample-po-table-components/sample-po-table-components.service.ts`),Kg(),Qc(27,`pre`,9),Sk(28,`import { Injectable } from '@angular/core';

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
`),Kg()()(),Qc(29,`po-tab`,10)(30,`div`)(31,`label`,6),Sk(32,`sample-po-table-components/sample-po-table-components.component.css`),Kg(),Qc(33,`pre`,11),Sk(34,`.badge {
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
`),Kg()()()()(),Qc(35,`div`,12),vu(36,`sample-po-table-components`),Kg(),vu(37,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ut,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,rt],encapsulation:2,changeDetection:1})}return r})();var he=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(rR(`items`))}static ɵfac=function(l){return new(l||r)(S(kI))};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var $t=[`POItemsOri`];var Jt=[`POItemsSelected`];var dt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(I(he))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&Du($t,7)(Jt,7),l&2){let m;No(m=xo())&&(a.poItemsOri=m.first),No(m=xo())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[we([he])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(Qc(0,`div`,2)(1,`div`,3)(2,`div`,4),Sk(3,`Choose one or more heroes for your team`),Kg(),Qc(4,`po-table`,5,0),vt(`p-selected`,function(p){return a.changeOptions(p,`new`)})(`p-unselected`,function(p){return a.changeOptions(p,`change`)})(`p-delete-items`,function(p){return a.deleteItems(p)}),Kg()(),Qc(6,`div`,3)(7,`div`,4),Sk(8,`Here your chosen heroes`),Kg(),vu(9,`po-table`,6,1),Kg()()),l&2&&(wg(4),Rb(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),wg(5),Rb(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[q4],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r});var st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-table-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Heroes`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row po-pb-2">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-table-heroes`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Kt,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,dt],encapsulation:2,changeDetection:1})}return r})();var Yt=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var en=r=>[r];var pt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(Qc(0,`div`,0),Sk(1,` Choose one column and drag to another horizontal position in the table and drop
`),Kg(),vu(2,`po-divider`)(3,`po-table`,1)),l&2&&(wg(3),Rb(`p-items`,Vk(5,en,Lk(4,Yt)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[Nf,q4],encapsulation:2,changeDetection:1})}return r})();var nn=r=>({"docs-sample-code-tabs":r});var ct=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-table-draggable`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table Drag and Drop`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-table-draggable`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,nn,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,pt],encapsulation:2,changeDetection:1})}return r})();function on(r,W){if(r&1){let o=YO();Qc(0,`po-filter-chip`,6),vt(`p-selected-change`,function(a){let m=B_(o).$implicit,p=ek();return U_(p.onSuggestionChange(m,a))}),Kg()}if(r&2){let o=W.$implicit,l=ek();Rb(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var ut=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(I(Ru))};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&Du(q4,5),l&2){let m;No(m=xo())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(Qc(0,`p`,0),Sk(1,`PO Search A.I.`),Kg(),Qc(2,`p`,1),Sk(3,` O `),Qc(4,`strong`),Sk(5,`PO Search A.I.`),Kg(),Sk(6,` é um recurso de busca inteligente integrado ao `),Qc(7,`code`),Sk(8,`po-table`),Kg(),Sk(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),Kg(),Qc(10,`p`,2),Sk(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),Kg(),Qc(12,`div`,3),UO(13,on,1,3,`po-filter-chip`,4,BO),Kg(),Qc(15,`po-table`,5),vt(`p-search-ai-result`,function(p){return a.onAiResult(p)})(`p-search-ai-low-confidence`,function(p){return a.onAiLowConfidence(p)})(`p-search-ai-error`,function(p){return a.onAiError(p)}),Kg()),l&2&&(wg(13),HO(a.examples),wg(2),Rb(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[cae,q4],encapsulation:2})}return r})();var rn=r=>({"docs-sample-code-tabs":r});var bt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-table-search-ai`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Table - Search A.I.`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-table-search-ai`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,rn,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ut],encapsulation:2,changeDetection:1})}return r})();var Et=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5500,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-table-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions-right`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[`id`,`event-p-all-selected`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-all-unselected`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-collapse`,1,`docs-api-properties-row`],[`id`,`event-p-change-fixed-columns`,1,`docs-api-properties-row`],[`id`,`event-p-change-visible-columns`,1,`docs-api-properties-row`],[`id`,`event-p-collapsed`,1,`docs-api-properties-row`],[`id`,`event-p-restore-column-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-container`,1,`docs-api-properties-row`],[`id`,`prop-p-draggable`,1,`docs-api-properties-row`],[`id`,`event-p-delete-items`,1,`docs-api-properties-row`],[`id`,`event-p-expanded`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`id`,`prop-p-filtered-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-hide-action-fixed-columns`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-batch-actions`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-columns-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-detail`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-all`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-table-search`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-loading-show-more`,1,`docs-api-properties-row`],[`id`,`prop-p-max-columns`,1,`docs-api-properties-row`],[`id`,`prop-p-param-delete-api`,1,`docs-api-properties-row`],[`id`,`event-p-search-ai-error`,1,`docs-api-properties-row`],[`id`,`prop-p-search-ai-field`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`id`,`event-p-search-ai-low-confidence`,1,`docs-api-properties-row`],[`id`,`event-p-search-ai-result`,1,`docs-api-properties-row`],[`id`,`prop-p-selectable`,1,`docs-api-properties-row`],[`id`,`prop-p-selectable-entire-line`,1,`docs-api-properties-row`],[`id`,`event-p-selected`,1,`docs-api-properties-row`],[`id`,`prop-p-service-api`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prop-p-service-delete`,1,`docs-api-properties-row`],[`id`,`event-p-show-more`,1,`docs-api-properties-row`],[`id`,`prop-p-show-more-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-single-select`,1,`docs-api-properties-row`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`event-p-sort-by`,1,`docs-api-properties-row`],[`id`,`prop-p-spacing`,1,`docs-api-properties-row`],[`id`,`prop-p-striped`,1,`docs-api-properties-row`],[`id`,`prop-p-text-wrap`,1,`docs-api-properties-row`],[`id`,`event-p-unselected`,1,`docs-api-properties-row`],[`id`,`prop-p-virtual-scroll`,1,`docs-api-properties-row`],[`id`,`method-applyFilters`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`id`,`method-applyFixedColumns`,1,`docs-api-method-table`],[`id`,`method-collapse`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-expand`,1,`docs-api-method-table`],[`id`,`method-getSelectedRows`,1,`docs-api-method-table`],[`id`,`method-getUnselectedRows`,1,`docs-api-method-table`],[`id`,`method-unselectRows`,1,`docs-api-method-table`],[`id`,`method-unselectRowItem`,1,`docs-api-method-table`],[`id`,`method-selectRowItem`,1,`docs-api-method-table`],[`id`,`method-deleteItems`,1,`docs-api-method-table`],[`id`,`method-updateSearchAIQuery`,1,`docs-api-method-table`],[`id`,`method-removeItem`,1,`docs-api-method-table`],[`id`,`method-updateItem`,1,`docs-api-method-table`],[`id`,`interface-po-table-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-table-boolean`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-boolean-false-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-boolean-true-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-sort`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-column-sort-column`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`id`,`interface-po-table-column-sort-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`id`,`interface-po-table-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-column-action`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-boolean`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[`id`,`interface-po-table-column-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`id`,`interface-po-table-column-detail`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`id`,`interface-po-table-column-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-format`,1,`docs-api-properties-row`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`id`,`interface-po-table-column-icons`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`id`,`interface-po-table-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-labels`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`id`,`interface-po-table-column-link`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-search-ai-ignore`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-sortable`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-subtitles`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`id`,`interface-po-table-column-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-width`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-literals-body-delete`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-columns-manager`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-complete-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-delete`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-delete-api-error`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-delete-successful`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-load-more-data`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-loading-data`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-multiple-items`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-item`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-no-visible-column`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-one-item`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-search-ai-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-table-literals-see-complete-subtitle`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-search-ai-field-apply`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`id`,`interface-po-table-search-ai-field-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`id`,`interface-po-table-search-ai-field-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`interface-po-table-search-ai-field-min-confidence`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field-timeout`,1,`docs-api-properties-row`],[`id`,`interface-po-table-search-ai-field-url`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`tableColumnIcon`],[`id`,`interface-po-table-column-icon-action`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-icon-value`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-column-label-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-icon`,1,`docs-api-properties-row`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`id`,`interface-po-table-column-label-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-text-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-table-column-label-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`id`,`interface-po-table-column-label-value`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-detail-column-format`,1,`docs-api-properties-row`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`id`,`interface-po-table-detail-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-detail-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`],[`id`,`interface-po-table-detail-hide-select`,1,`docs-api-properties-row`],[`id`,`interface-po-table-detail-type-header`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-table-subtitle-column-color`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column-content`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-table-subtitle-column-value`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-sort-type`,1,`docs-api-class-name`],[`id`,`enum-po-table-column-sort-type-ascending`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-sort-type-descending`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing`,1,`docs-api-class-name`],[`id`,`enum-po-table-column-spacing-extra-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-medium`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-large`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-table-cell-template?view=doc`],[`href`,`/documentation/po-table-column-template?view=doc`],[`href`,`/documentation/po-table-row-template?view=doc`]],template:function(l,a){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-table`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoTableComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),Kg(),Qc(15,`p`),Sk(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Qc(17,`strong`),Sk(18,`Carregar mais resultados`),Kg(),Sk(19,`.`),Kg(),Qc(20,`blockquote`)(21,`p`),Sk(22,`As linhas de detalhes podem também ser customizadas através do `),Qc(23,`a`,6)(24,`code`),Sk(25,`p-table-row-template`),Kg()(),Sk(26,`.`),Kg()(),Qc(27,`blockquote`)(28,`p`),Sk(29,`As colunas podem ser customizadas através dos templates `),Qc(30,`a`,7)(31,`code`),Sk(32,`p-table-column-template`),Kg()(),Sk(33,`
e `),Qc(34,`a`,8)(35,`code`),Sk(36,`p-table-cell-template`),Kg()(),Sk(37,`.`),Kg()(),Qc(38,`p`),Sk(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),Kg(),Qc(40,`p`),Sk(41,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),Qc(42,`em`),Sk(43,`scroll`),Kg(),Sk(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),Kg(),Qc(45,`h4`),Sk(46,`Tokens customizáveis`),Kg(),Qc(47,`p`),Sk(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(49,`blockquote`)(50,`p`),Sk(51,`Para maiores informações, acesse o guia `),Qc(52,`a`,9),Sk(53,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(54,`.`),Kg()(),Qc(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),Sk(59,`Propriedade`),Kg(),Qc(60,`th`),Sk(61,`Descrição`),Kg(),Qc(62,`th`),Sk(63,`Valor Padrão`),Kg()()(),Qc(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),Sk(68,`Default Values`),Kg()(),vu(69,`td`)(70,`td`),Kg(),Qc(71,`tr`)(72,`td`)(73,`code`),Sk(74,`--font-family`),Kg()(),Qc(75,`td`),Sk(76,`Família tipográfica usada`),Kg(),Qc(77,`td`)(78,`code`),Sk(79,`var(--font-family-theme)`),Kg()()(),Qc(80,`tr`)(81,`td`)(82,`code`),Sk(83,`--background-color`),Kg()(),Qc(84,`td`),Sk(85,`Cor de background`),Kg(),Qc(86,`td`)(87,`code`),Sk(88,`var(--color-neutral-light-00)`),Kg()()(),Qc(89,`tr`)(90,`td`)(91,`code`),Sk(92,`--color`),Kg()(),Qc(93,`td`),Sk(94,`Cor principal da table`),Kg(),Qc(95,`td`)(96,`code`),Sk(97,`var(--color-neutral-dark-95)`),Kg()()(),Qc(98,`tr`)(99,`td`)(100,`code`),Sk(101,`--background-striped-color`),Kg()(),Qc(102,`td`),Sk(103,`Cor do background quando striped`),Kg(),Qc(104,`td`)(105,`code`),Sk(106,`var(--color-neutral-light-05)`),Kg()()(),Qc(107,`tr`)(108,`td`)(109,`code`),Sk(110,`--color-line`),Kg()(),Qc(111,`td`),Sk(112,`Cor das linhas`),Kg(),Qc(113,`td`)(114,`code`),Sk(115,`var(--color-neutral-mid-40)`),Kg()()(),Qc(116,`tr`)(117,`td`)(118,`strong`),Sk(119,`Hover`),Kg()(),vu(120,`td`)(121,`td`),Kg(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--color-hover`),Kg()(),Qc(126,`td`),Sk(127,`Cor principal no estado hover`),Kg(),Qc(128,`td`)(129,`code`),Sk(130,`var(--color-action-hover)`),Kg()()(),Qc(131,`tr`)(132,`td`)(133,`code`),Sk(134,`--background-color-hover`),Kg()(),Qc(135,`td`),Sk(136,`Cor de background no estado hover`),Kg(),Qc(137,`td`)(138,`code`),Sk(139,`var(--color-brand-01-lighter)`),Kg()()(),Qc(140,`tr`)(141,`td`)(142,`strong`),Sk(143,`Focused`),Kg()(),vu(144,`td`)(145,`td`),Kg(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--outline-color-focused`),Kg()(),Qc(150,`td`),Sk(151,`Cor do outline do estado de focus`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`var(--color-action-focus)`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`strong`),Sk(158,`Disabled`),Kg()(),vu(159,`td`)(160,`td`),Kg(),Qc(161,`tr`)(162,`td`)(163,`code`),Sk(164,`--color-disabled`),Kg()(),Qc(165,`td`),Sk(166,`Cor principal no estado disabled`),Kg(),Qc(167,`td`)(168,`code`),Sk(169,`var(--color-neutral-mid-40)`),Kg()()(),Qc(170,`tr`)(171,`td`)(172,`strong`),Sk(173,`Headline`),Kg()(),vu(174,`td`)(175,`td`),Kg(),Qc(176,`tr`)(177,`td`)(178,`code`),Sk(179,`--background-color-headline`),Kg(),Sk(180,` \xA0`),Kg(),Qc(181,`td`),Sk(182,`Cor do cabeçalho`),Kg(),Qc(183,`td`)(184,`code`),Sk(185,`var(--color-neutral-light-10)`),Kg()()(),Qc(186,`tr`)(187,`td`)(188,`code`),Sk(189,`--font-weight-headline`),Kg()(),Qc(190,`td`),Sk(191,`Peso da fonte do cabeçalho`),Kg(),Qc(192,`td`)(193,`code`),Sk(194,`var(--font-weight-bold)`),Kg()()(),Qc(195,`tr`)(196,`td`)(197,`strong`),Sk(198,`Selected`),Kg()(),vu(199,`td`)(200,`td`),Kg(),Qc(201,`tr`)(202,`td`)(203,`code`),Sk(204,`--background-color-selected`),Kg(),Sk(205,`\xA0`),Kg(),Qc(206,`td`),Sk(207,`Cor de background no estado de selecionado`),Kg(),Qc(208,`td`)(209,`code`),Sk(210,`var(--color-brand-01-lightest)`),Kg()()(),Qc(211,`tr`)(212,`td`)(213,`strong`),Sk(214,`Actived`),Kg()(),vu(215,`td`)(216,`td`),Kg(),Qc(217,`tr`)(218,`td`)(219,`code`),Sk(220,`--color-actived`),Kg()(),Qc(221,`td`),Sk(222,`Cor do texto no estado de selecionado`),Kg(),Qc(223,`td`)(224,`code`),Sk(225,`var(--color-neutral-dark-90)`),Kg()()(),Qc(226,`tr`)(227,`td`)(228,`code`),Sk(229,`--background-color-actived`),Kg()(),Qc(230,`td`),Sk(231,`Cor de background no estado de selecionado`),Kg(),Qc(232,`td`)(233,`code`),Sk(234,`var(--color-brand-01-light)`),Kg()()()()()(),Qc(235,`div`,10)(236,`h4`,11),Sk(237,`Seletor`),Kg(),Qc(238,`pre`,12),Sk(239,`<po-table
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
`),Kg()(),Qc(240,`h4`,13),Sk(241,`Propriedades`),Kg(),Qc(242,`table`,14)(243,`tr`,15)(244,`th`,16),Sk(245,`Nome`),Kg(),Qc(246,`th`,16),Sk(247,`Tipo`),Kg(),Qc(248,`th`,16),Sk(249,`Padrão`),Kg(),Qc(250,`th`,16),Sk(251,`Descrição`),Kg()(),Qc(252,`tr`,17)(253,`td`,18)(254,`div`,19)(255,`span`,20),Sk(256,` p-actions-right`),vu(257,`br`),Kg()()(),Qc(258,`td`,21)(259,`code`,22),Sk(260,`boolean`),Kg()(),Qc(261,`td`,23)(262,`p`)(263,`code`),Sk(264,`false`),Kg()()(),Qc(265,`td`,24)(266,`em`)(267,`strong`),Sk(268,`(opcional)`),Kg()(),Qc(269,`p`),Sk(270,`Define que a coluna de ações ficará no lado direito da tabela.`),Kg()()(),Qc(271,`tr`,25)(272,`td`,18)(273,`div`,19)(274,`span`,20),Sk(275,` p-actions`),vu(276,`br`),Kg()()(),Qc(277,`td`,21)(278,`code`,26),Sk(279,`PoTableAction[]`),Kg()(),Qc(280,`td`,23),Sk(281,`-`),Kg(),Qc(282,`td`,24)(283,`em`)(284,`strong`),Sk(285,`(opcional)`),Kg()(),Qc(286,`p`),Sk(287,`Define uma lista de ações.`),Kg(),Qc(288,`p`),Sk(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Qc(290,`a`,27)(291,`strong`),Sk(292,`an an-dots-three`),Kg()(),Sk(293,` que listará as ações ao ser clicado.`),Kg(),Qc(294,`p`)(295,`strong`),Sk(296,`A coluna de ações não será exibida quando:`),Kg()(),Qc(297,`ul`)(298,`li`),Sk(299,`a lista conter valores inválidos ou indefinidos.`),Kg(),Qc(300,`li`),Sk(301,`tenha uma única ação e a mesma não for visível.`),Kg()()()(),Qc(302,`tr`,28)(303,`td`,18)(304,`div`,29)(305,`span`,30),Sk(306,` (p-all-selected)`),vu(307,`br`),Kg()()(),Qc(308,`td`,21)(309,`code`,31),Sk(310,`EventEmitter`),Kg()(),Qc(311,`td`,23),Sk(312,`-`),Kg(),Qc(313,`td`,24)(314,`em`)(315,`strong`),Sk(316,`(opcional)`),Kg()(),Qc(317,`p`),Sk(318,`Evento executado quando todas as linhas são selecionadas por meio do `),Qc(319,`em`),Sk(320,`checkbox`),Kg(),Sk(321,` que seleciona todas as linhas.`),Kg()()(),Qc(322,`tr`,32)(323,`td`,18)(324,`div`,29)(325,`span`,30),Sk(326,` (p-all-unselected)`),vu(327,`br`),Kg()()(),Qc(328,`td`,21)(329,`code`,31),Sk(330,`EventEmitter`),Kg()(),Qc(331,`td`,23),Sk(332,`-`),Kg(),Qc(333,`td`,24)(334,`em`)(335,`strong`),Sk(336,`(opcional)`),Kg()(),Qc(337,`p`),Sk(338,`Evento executado quando a seleção das linhas é desmarcada por meio do `),Qc(339,`em`),Sk(340,`checkbox`),Kg(),Sk(341,` que seleciona todas as linhas.`),Kg()()(),Qc(342,`tr`,33)(343,`td`,18)(344,`div`,19)(345,`span`,20),Sk(346,` p-auto-collapse`),vu(347,`br`),Kg()()(),Qc(348,`td`,21)(349,`code`,22),Sk(350,`boolean`),Kg()(),Qc(351,`td`,23)(352,`p`)(353,`code`),Sk(354,`false`),Kg()()(),Qc(355,`td`,24)(356,`em`)(357,`strong`),Sk(358,`(opcional)`),Kg()(),Qc(359,`p`),Sk(360,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),Kg()()(),Qc(361,`tr`,34)(362,`td`,18)(363,`div`,29)(364,`span`,30),Sk(365,` (p-change-fixed-columns)`),vu(366,`br`),Kg()()(),Qc(367,`td`,21)(368,`code`,31),Sk(369,`EventEmitter`),Kg()(),Qc(370,`td`,23),Sk(371,`-`),Kg(),Qc(372,`td`,24)(373,`em`)(374,`strong`),Sk(375,`(opcional)`),Kg()(),Qc(376,`p`),Sk(377,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),Kg(),Qc(378,`p`),Sk(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),Kg(),Qc(380,`blockquote`)(381,`p`),Sk(382,`Incompatível com `),Qc(383,`code`),Sk(384,`p-hide-action-fixed-columns`),Kg(),Sk(385,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),Kg()()()(),Qc(386,`tr`,35)(387,`td`,18)(388,`div`,29)(389,`span`,30),Sk(390,` (p-change-visible-columns)`),vu(391,`br`),Kg()()(),Qc(392,`td`,21)(393,`code`,31),Sk(394,`EventEmitter`),Kg()(),Qc(395,`td`,23),Sk(396,`-`),Kg(),Qc(397,`td`,24)(398,`em`)(399,`strong`),Sk(400,`(opcional)`),Kg()(),Qc(401,`p`),Sk(402,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),Kg(),Qc(403,`p`),Sk(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Qc(405,`tr`,36)(406,`td`,18)(407,`div`,29)(408,`span`,30),Sk(409,` (p-collapsed)`),vu(410,`br`),Kg()()(),Qc(411,`td`,21)(412,`code`,31),Sk(413,`EventEmitter`),Kg()(),Qc(414,`td`,23),Sk(415,`-`),Kg(),Qc(416,`td`,24)(417,`em`)(418,`strong`),Sk(419,`(opcional)`),Kg()(),Qc(420,`p`),Sk(421,`Evento executado ao colapsar uma linha do `),Qc(422,`code`),Sk(423,`po-table`),Kg(),Sk(424,`.`),Kg(),Qc(425,`blockquote`)(426,`p`),Sk(427,`Como parâmetro o componente envia o item colapsado.`),Kg()()()(),Qc(428,`tr`,37)(429,`td`,18)(430,`div`,29)(431,`span`,30),Sk(432,` (p-restore-column-manager)`),vu(433,`br`),Kg()()(),Qc(434,`td`,21)(435,`code`,31),Sk(436,`EventEmitter`),Kg()(),Qc(437,`td`,23),Sk(438,`-`),Kg(),Qc(439,`td`,24)(440,`em`)(441,`strong`),Sk(442,`(opcional)`),Kg()(),Qc(443,`p`),Sk(444,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Kg(),Qc(445,`p`),Sk(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Qc(447,`tr`,38)(448,`td`,18)(449,`div`,19)(450,`span`,20),Sk(451,` p-columns`),vu(452,`br`),Kg()()(),Qc(453,`td`,21)(454,`code`,39),Sk(455,`PoTableColumn[]`),Kg()(),Qc(456,`td`,23),Sk(457,`-`),Kg(),Qc(458,`td`,24)(459,`em`)(460,`strong`),Sk(461,`(opcional)`),Kg()(),Qc(462,`p`),Sk(463,`Lista das colunas da tabela, deve receber um `),Qc(464,`em`),Sk(465,`array`),Kg(),Sk(466,` de objetos que implementam a interface `),Qc(467,`code`),Sk(468,`PoTableColumn`),Kg(),Sk(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),Kg(),Qc(470,`blockquote`)(471,`p`),Sk(472,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),Kg()()()(),Qc(473,`tr`,40)(474,`td`,18)(475,`div`,19)(476,`span`,20),Sk(477,` p-components-size`),vu(478,`br`),Kg()()(),Qc(479,`td`,21)(480,`code`,41),Sk(481,`string`),Kg()(),Qc(482,`td`,23)(483,`p`)(484,`code`),Sk(485,`medium`),Kg()()(),Qc(486,`td`,24)(487,`em`)(488,`strong`),Sk(489,`(opcional)`),Kg()(),Qc(490,`p`),Sk(491,`Define o tamanho dos componentes de formulário no table:`),Kg(),Qc(492,`ul`)(493,`li`)(494,`code`),Sk(495,`small`),Kg(),Sk(496,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(497,`li`)(498,`code`),Sk(499,`medium`),Kg(),Sk(500,`: aplica a medida medium de cada componente.`),Kg()(),Qc(501,`blockquote`)(502,`p`),Sk(503,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(504,`code`),Sk(505,`medium`),Kg(),Sk(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(507,`a`,42),Sk(508,`po-theme`),Kg(),Sk(509,`.`),Kg()()()(),Qc(510,`tr`,43)(511,`td`,18)(512,`div`,19)(513,`span`,20),Sk(514,` p-container`),vu(515,`br`),Kg()()(),Qc(516,`td`,21)(517,`code`,41),Sk(518,`string`),Kg()(),Qc(519,`td`,23)(520,`p`)(521,`code`),Sk(522,`border`),Kg()()(),Qc(523,`td`,24)(524,`em`)(525,`strong`),Sk(526,`(opcional)`),Kg()(),Qc(527,`p`),Sk(528,`Adiciona um contorno arredondado ao `),Qc(529,`code`),Sk(530,`po-table`),Kg(),Sk(531,`, as opções são:`),Kg(),Qc(532,`ul`)(533,`li`)(534,`code`),Sk(535,`border`),Kg(),Sk(536,`: com bordas/linhas.`),Kg(),Qc(537,`li`)(538,`code`),Sk(539,`shadow`),Kg(),Sk(540,`: com sombras.`),Kg()()()(),Qc(541,`tr`,44)(542,`td`,18)(543,`div`,19)(544,`span`,20),Sk(545,` p-draggable`),vu(546,`br`),Kg()()(),Qc(547,`td`,21)(548,`code`,22),Sk(549,`boolean`),Kg()(),Qc(550,`td`,23)(551,`p`)(552,`code`),Sk(553,`false`),Kg()()(),Qc(554,`td`,24)(555,`em`)(556,`strong`),Sk(557,`(opcional)`),Kg()(),Qc(558,`p`),Sk(559,`Habilita o modo drag and drop para as colunas da tabela.`),Kg()()(),Qc(560,`tr`,45)(561,`td`,18)(562,`div`,29)(563,`span`,30),Sk(564,` (p-delete-items)`),vu(565,`br`),Kg()()(),Qc(566,`td`,21)(567,`code`,31),Sk(568,`EventEmitter`),Kg()(),Qc(569,`td`,23),Sk(570,`-`),Kg(),Qc(571,`td`,24)(572,`em`)(573,`strong`),Sk(574,`(opcional)`),Kg()(),Qc(575,`p`),Sk(576,`Evento executado após o método de exclusão ser finalizado.`),Kg(),Qc(577,`pre`)(578,`code`),Sk(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),Kg()(),Qc(580,`blockquote`)(581,`p`),Sk(582,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),Kg()()()(),Qc(583,`tr`,46)(584,`td`,18)(585,`div`,29)(586,`span`,30),Sk(587,` (p-expanded)`),vu(588,`br`),Kg()()(),Qc(589,`td`,21)(590,`code`,31),Sk(591,`EventEmitter`),Kg()(),Qc(592,`td`,23),Sk(593,`-`),Kg(),Qc(594,`td`,24)(595,`em`)(596,`strong`),Sk(597,`(opcional)`),Kg()(),Qc(598,`p`),Sk(599,`Evento executado ao expandir uma linha do `),Qc(600,`code`),Sk(601,`po-table`),Kg(),Sk(602,`.`),Kg(),Qc(603,`blockquote`)(604,`p`),Sk(605,`Como parâmetro o componente envia o item expandido.`),Kg()()()(),Qc(606,`tr`,47)(607,`td`,18)(608,`div`,19)(609,`span`,20),Sk(610,` p-filter-type`),vu(611,`br`),Kg()()(),Qc(612,`td`,21)(613,`code`,48),Sk(614,`PoSearchFilterMode`),Kg()(),Qc(615,`td`,23)(616,`p`)(617,`code`),Sk(618,`startsWith`),Kg()()(),Qc(619,`td`,24)(620,`em`)(621,`strong`),Sk(622,`(opcional)`),Kg()(),Qc(623,`p`),Sk(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),Kg(),Qc(625,`blockquote`)(626,`p`),Sk(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),Kg()()()(),Qc(628,`tr`,49)(629,`td`,18)(630,`div`,19)(631,`span`,20),Sk(632,` p-filtered-columns`),vu(633,`br`),Kg()()(),Qc(634,`td`,21)(635,`code`,50),Sk(636,`Array<string>`),Kg()(),Qc(637,`td`,23),Sk(638,`-`),Kg(),Qc(639,`td`,24)(640,`em`)(641,`strong`),Sk(642,`(opcional)`),Kg()(),Qc(643,`p`),Sk(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),Kg()()(),Qc(645,`tr`,51)(646,`td`,18)(647,`div`,19)(648,`span`,20),Sk(649,` p-height`),vu(650,`br`),Kg()()(),Qc(651,`td`,21)(652,`code`,52),Sk(653,`number`),Kg()(),Qc(654,`td`,23),Sk(655,`-`),Kg(),Qc(656,`td`,24)(657,`em`)(658,`strong`),Sk(659,`(opcional)`),Kg()(),Qc(660,`p`),Sk(661,`Define a altura da tabela em `),Qc(662,`em`),Sk(663,`pixels`),Kg(),Sk(664,` e fixa o cabeçalho.`),Kg(),Qc(665,`p`),Sk(666,`Ao utilizar essa propriedade será inserido o `),Qc(667,`code`),Sk(668,`virtual-scroll`),Kg(),Sk(669,` na tabela melhorando a performance.`),Kg()()(),Qc(670,`tr`,53)(671,`td`,18)(672,`div`,19)(673,`span`,20),Sk(674,` p-hide-action-fixed-columns`),vu(675,`br`),Kg()()(),Qc(676,`td`,21)(677,`code`,22),Sk(678,`boolean`),Kg()(),Qc(679,`td`,23)(680,`p`)(681,`code`),Sk(682,`false`),Kg()()(),Qc(683,`td`,24)(684,`em`)(685,`strong`),Sk(686,`(opcional)`),Kg()(),Qc(687,`p`),Sk(688,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),Kg()()(),Qc(689,`tr`,54)(690,`td`,18)(691,`div`,19)(692,`span`,20),Sk(693,` p-hide-batch-actions`),vu(694,`br`),Kg()()(),Qc(695,`td`,21)(696,`code`,22),Sk(697,`boolean`),Kg()(),Qc(698,`td`,23)(699,`p`)(700,`code`),Sk(701,`true`),Kg()()(),Qc(702,`td`,24)(703,`em`)(704,`strong`),Sk(705,`(opcional)`),Kg()(),Qc(706,`p`),Sk(707,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),Kg()()(),Qc(708,`tr`,55)(709,`td`,18)(710,`div`,19)(711,`span`,20),Sk(712,` p-hide-columns-manager`),vu(713,`br`),Kg()()(),Qc(714,`td`,21)(715,`code`,22),Sk(716,`boolean`),Kg()(),Qc(717,`td`,23)(718,`p`)(719,`code`),Sk(720,`false`),Kg()()(),Qc(721,`td`,24)(722,`em`)(723,`strong`),Sk(724,`(opcional)`),Kg()(),Qc(725,`p`),Sk(726,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),Kg()()(),Qc(727,`tr`,56)(728,`td`,18)(729,`div`,19)(730,`span`,20),Sk(731,` p-hide-detail`),vu(732,`br`),Kg()()(),Qc(733,`td`,21)(734,`code`,22),Sk(735,`boolean`),Kg()(),Qc(736,`td`,23)(737,`p`)(738,`code`),Sk(739,`false`),Kg()()(),Qc(740,`td`,24)(741,`em`)(742,`strong`),Sk(743,`(opcional)`),Kg()(),Qc(744,`p`),Sk(745,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),Kg()()(),Qc(746,`tr`,57)(747,`td`,18)(748,`div`,19)(749,`span`,20),Sk(750,` p-hide-select-all`),vu(751,`br`),Kg()()(),Qc(752,`td`,21)(753,`code`,22),Sk(754,`boolean`),Kg()(),Qc(755,`td`,23)(756,`p`)(757,`code`),Sk(758,`false`),Kg()()(),Qc(759,`td`,24)(760,`p`),Sk(761,`Esconde o `),Qc(762,`em`),Sk(763,`checkbox`),Kg(),Sk(764,` para seleção de todas as linhas.`),Kg(),Qc(765,`blockquote`)(766,`p`),Sk(767,`Sempre receberá `),Qc(768,`em`),Sk(769,`true`),Kg(),Sk(770,` caso a seleção de apenas uma linha esteja ativa.`),Kg()()()(),Qc(771,`tr`,58)(772,`td`,18)(773,`div`,19)(774,`span`,20),Sk(775,` p-hide-table-search`),vu(776,`br`),Kg()()(),Qc(777,`td`,21)(778,`code`,22),Sk(779,`boolean`),Kg()(),Qc(780,`td`,23)(781,`p`)(782,`code`),Sk(783,`true`),Kg()()(),Qc(784,`td`,24)(785,`em`)(786,`strong`),Sk(787,`(opcional)`),Kg()(),Qc(788,`p`),Sk(789,`Permite que o campo de pesquisa seja escondido.`),Kg()()(),Qc(790,`tr`,59)(791,`td`,18)(792,`div`,19)(793,`span`,20),Sk(794,` p-infinite-scroll`),vu(795,`br`),Kg()()(),Qc(796,`td`,21)(797,`code`,22),Sk(798,`boolean`),Kg()(),Qc(799,`td`,23)(800,`p`)(801,`code`),Sk(802,`false`),Kg()()(),Qc(803,`td`,24)(804,`em`)(805,`strong`),Sk(806,`(opcional)`),Kg()(),Qc(807,`p`),Sk(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Qc(809,`code`),Sk(810,`p-show-more`),Kg(),Sk(811,`.`),Kg(),Qc(812,`p`)(813,`strong`),Sk(814,`Regras de utilização:`),Kg()(),Qc(815,`ul`)(816,`li`),Sk(817,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),Qc(818,`code`),Sk(819,`p-height`),Kg(),Sk(820,` e que possuem o scroll já na carga inicial dos dados.`),Kg()()()(),Qc(821,`tr`,60)(822,`td`,18)(823,`div`,19)(824,`span`,20),Sk(825,` p-infinite-scroll-distance`),vu(826,`br`),Kg()()(),Qc(827,`td`,21)(828,`code`,52),Sk(829,`number`),Kg()(),Qc(830,`td`,23),Sk(831,`-`),Kg(),Qc(832,`td`,24)(833,`em`)(834,`strong`),Sk(835,`(opcional)`),Kg()(),Qc(836,`p`),Sk(837,`Define o percentual necessário para disparar o evento `),Qc(838,`code`),Sk(839,`p-show-more`),Kg(),Sk(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),Kg(),Qc(841,`p`)(842,`strong`),Sk(843,`Exemplos:`),Kg()(),Qc(844,`ul`)(845,`li`),Sk(846,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),Qc(847,`code`),Sk(848,`p-show-more`),Kg(),Sk(849,` será disparado.`),Kg()()()(),Qc(850,`tr`,61)(851,`td`,18)(852,`div`,19)(853,`span`,20),Sk(854,` p-items`),vu(855,`br`),Kg()()(),Qc(856,`td`,21)(857,`code`,62),Sk(858,`any[]`),Kg()(),Qc(859,`td`,23),Sk(860,`-`),Kg(),Qc(861,`td`,24)(862,`p`),Sk(863,`Lista de itens da tabela.`),Kg(),Qc(864,`blockquote`)(865,`p`),Sk(866,`Se falso, será inicializado como um `),Qc(867,`em`),Sk(868,`array`),Kg(),Sk(869,` vazio.`),Kg()()()(),Qc(870,`tr`,63)(871,`td`,18)(872,`div`,19)(873,`span`,20),Sk(874,` p-literals`),vu(875,`br`),Kg()()(),Qc(876,`td`,21)(877,`code`,64),Sk(878,`PoTableLiterals`),Kg()(),Qc(879,`td`,23),Sk(880,`-`),Kg(),Qc(881,`td`,24)(882,`em`)(883,`strong`),Sk(884,`(opcional)`),Kg()(),Qc(885,`p`),Sk(886,`Objeto com as literais usadas no `),Qc(887,`code`),Sk(888,`po-table`),Kg(),Sk(889,`.`),Kg(),Qc(890,`p`),Sk(891,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(892,`pre`)(893,`code`),Sk(894,`const customLiterals: PoTableLiterals = {
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
`),Kg()(),Qc(895,`p`),Sk(896,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(897,`pre`)(898,`code`),Sk(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),Kg()(),Qc(900,`p`),Sk(901,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(902,`pre`)(903,`code`),Sk(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),Kg()(),Qc(905,`blockquote`)(906,`p`),Sk(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(908,`a`,65)(909,`code`),Sk(910,`PoI18nService`),Kg()(),Sk(911,` ou do browser.`),Kg()()()(),Qc(912,`tr`,66)(913,`td`,18)(914,`div`,19)(915,`span`,20),Sk(916,` p-loading`),vu(917,`br`),Kg()()(),Qc(918,`td`,21)(919,`code`,22),Sk(920,`boolean`),Kg()(),Qc(921,`td`,23)(922,`p`)(923,`code`),Sk(924,`false`),Kg()()(),Qc(925,`td`,24)(926,`em`)(927,`strong`),Sk(928,`(opcional)`),Kg()(),Qc(929,`p`),Sk(930,`Bloqueia a interação do usuário com os dados da `),Qc(931,`em`),Sk(932,`table`),Kg(),Sk(933,`.`),Kg()()(),Qc(934,`tr`,67)(935,`td`,18)(936,`div`,19)(937,`span`,20),Sk(938,` p-loading-show-more`),vu(939,`br`),Kg()()(),Qc(940,`td`,21)(941,`code`,22),Sk(942,`boolean`),Kg()(),Qc(943,`td`,23)(944,`p`)(945,`code`),Sk(946,`false`),Kg()()(),Qc(947,`td`,24)(948,`em`)(949,`strong`),Sk(950,`(opcional)`),Kg()(),Qc(951,`p`),Sk(952,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),Kg()()(),Qc(953,`tr`,68)(954,`td`,18)(955,`div`,19)(956,`span`,20),Sk(957,` p-max-columns`),vu(958,`br`),Kg()()(),Qc(959,`td`,21)(960,`code`,52),Sk(961,`number`),Kg()(),Qc(962,`td`,23),Sk(963,`-`),Kg(),Qc(964,`td`,24)(965,`em`)(966,`strong`),Sk(967,`(opcional)`),Kg()(),Qc(968,`p`),Sk(969,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),Kg(),Qc(970,`p`),Sk(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),Kg()()(),Qc(972,`tr`,69)(973,`td`,18)(974,`div`,19)(975,`span`,20),Sk(976,` p-param-delete-api`),vu(977,`br`),Kg()()(),Qc(978,`td`,21)(979,`code`,41),Sk(980,`string`),Kg()(),Qc(981,`td`,23)(982,`p`)(983,`code`),Sk(984,`id`),Kg()()(),Qc(985,`td`,24)(986,`em`)(987,`strong`),Sk(988,`(opcional)`),Kg()(),Qc(989,`p`),Sk(990,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),Kg(),Qc(991,`p`),Sk(992,`É necessário a utilização da propriedade `),Qc(993,`code`),Sk(994,`p-service-delete`),Kg(),Sk(995,` em conjunto.`),Kg()()(),Qc(996,`tr`,70)(997,`td`,18)(998,`div`,29)(999,`span`,30),Sk(1e3,` (p-search-ai-error)`),vu(1001,`br`),Kg()()(),Qc(1002,`td`,21)(1003,`code`,31),Sk(1004,`EventEmitter`),Kg()(),Qc(1005,`td`,23),Sk(1006,`-`),Kg(),Qc(1007,`td`,24)(1008,`em`)(1009,`strong`),Sk(1010,`(opcional)`),Kg()(),Qc(1011,`p`),Sk(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),Qc(1013,`code`),Sk(1014,`p-search-ai-field`),Kg(),Sk(1015,`.`),Kg(),Qc(1016,`p`),Sk(1017,`O parâmetro enviado é um objeto `),Qc(1018,`code`),Sk(1019,`PoSearchAiError`),Kg(),Sk(1020,` contendo:`),Kg(),Qc(1021,`ul`)(1022,`li`)(1023,`code`),Sk(1024,`statusCode`),Kg(),Sk(1025,`: código HTTP do erro (ex: `),Qc(1026,`code`),Sk(1027,`408`),Kg(),Sk(1028,` para timeout, `),Qc(1029,`code`),Sk(1030,`500`),Kg(),Sk(1031,` para erro interno).`),Kg(),Qc(1032,`li`)(1033,`code`),Sk(1034,`message`),Kg(),Sk(1035,`: mensagem descritiva do erro.`),Kg()()()(),Qc(1036,`tr`,71)(1037,`td`,18)(1038,`div`,19)(1039,`span`,20),Sk(1040,` p-search-ai-field`),vu(1041,`br`),Kg()()(),Qc(1042,`td`,21)(1043,`code`,72),Sk(1044,`PoTableSearchAiField`),Kg()(),Qc(1045,`td`,23),Sk(1046,`-`),Kg(),Qc(1047,`td`,24)(1048,`em`)(1049,`strong`),Sk(1050,`(opcional)`),Kg()(),Qc(1051,`p`),Sk(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),Qc(1053,`code`),Sk(1054,`po-search`),Kg(),Sk(1055,`) pelo componente `),Qc(1056,`code`),Sk(1057,`po-search-ai`),Kg(),Sk(1058,` na barra de ações.`),Kg(),Qc(1059,`p`),Sk(1060,`Recebe um objeto do tipo `),Qc(1061,`code`),Sk(1062,`PoTableSearchAiField`),Kg(),Sk(1063,` com as configurações necessárias:`),Kg(),Qc(1064,`ul`)(1065,`li`)(1066,`code`),Sk(1067,`url`),Kg(),Qc(1068,`em`),Sk(1069,`(obrigatório)`),Kg(),Sk(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),Qc(1071,`a`,73)(1072,`code`),Sk(1073,`po-sample-api`),Kg()(),Sk(1074,`.`),Kg(),Qc(1075,`li`)(1076,`code`),Sk(1077,`columns`),Kg(),Sk(1078,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),Qc(1079,`code`),Sk(1080,`p-columns`),Kg(),Sk(1081,`.`),Kg(),Qc(1082,`li`)(1083,`code`),Sk(1084,`minConfidence`),Kg(),Sk(1085,`: confiança mínima para aplicação automática do filtro (padrão `),Qc(1086,`code`),Sk(1087,`0.5`),Kg(),Sk(1088,`).`),Kg(),Qc(1089,`li`)(1090,`code`),Sk(1091,`timeout`),Kg(),Sk(1092,`: tempo máximo de espera pela resposta da IA em ms (padrão `),Qc(1093,`code`),Sk(1094,`10000`),Kg(),Sk(1095,`).`),Kg(),Qc(1096,`li`)(1097,`code`),Sk(1098,`placeholder`),Kg(),Sk(1099,`: texto exibido como placeholder no campo.`),Kg(),Qc(1100,`li`)(1101,`code`),Sk(1102,`literals`),Kg(),Sk(1103,`: literais customizadas do `),Qc(1104,`code`),Sk(1105,`po-search-ai`),Kg(),Sk(1106,`.`),Kg(),Qc(1107,`li`)(1108,`code`),Sk(1109,`apply`),Kg(),Sk(1110,`: estratégia de aplicação do filtro — `),Qc(1111,`code`),Sk(1112,`'auto'`),Kg(),Sk(1113,` (padrão), `),Qc(1114,`code`),Sk(1115,`'parser'`),Kg(),Sk(1116,`, `),Qc(1117,`code`),Sk(1118,`'server'`),Kg(),Sk(1119,`, `),Qc(1120,`code`),Sk(1121,`'none'`),Kg(),Sk(1122,`
ou uma fun\xE7\xE3o `),Qc(1123,`code`),Sk(1124,`(result: PoSearchAiResult) => void`),Kg(),Sk(1125,`.`),Kg()(),Qc(1126,`p`),Sk(1127,`Quando esta propriedade está definida, os eventos `),Qc(1128,`code`),Sk(1129,`p-search-ai-result`),Kg(),Sk(1130,`, `),Qc(1131,`code`),Sk(1132,`p-search-ai-low-confidence`),Kg(),Sk(1133,`
e `),Qc(1134,`code`),Sk(1135,`p-search-ai-error`),Kg(),Sk(1136,` ficam disponíveis para tratamento customizado.`),Kg()()(),Qc(1137,`tr`,74)(1138,`td`,18)(1139,`div`,29)(1140,`span`,30),Sk(1141,` (p-search-ai-low-confidence)`),vu(1142,`br`),Kg()()(),Qc(1143,`td`,21)(1144,`code`,31),Sk(1145,`EventEmitter`),Kg()(),Qc(1146,`td`,23),Sk(1147,`-`),Kg(),Qc(1148,`td`,24)(1149,`em`)(1150,`strong`),Sk(1151,`(opcional)`),Kg()(),Qc(1152,`p`),Sk(1153,`Evento emitido quando o `),Qc(1154,`code`),Sk(1155,`po-search-ai`),Kg(),Sk(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),Qc(1157,`code`),Sk(1158,`minConfidence`),Kg(),Sk(1159,` configurado em `),Qc(1160,`code`),Sk(1161,`p-search-ai-field`),Kg(),Sk(1162,`. Nesse caso, o filtro `),Qc(1163,`strong`),Sk(1164,`não`),Kg(),Sk(1165,` \xE9 aplicado
automaticamente.`),Kg(),Qc(1166,`p`),Sk(1167,`O parâmetro enviado é um objeto `),Qc(1168,`code`),Sk(1169,`PoSearchAiResult`),Kg(),Sk(1170,` com os mesmos campos de `),Qc(1171,`code`),Sk(1172,`p-search-ai-result`),Kg(),Sk(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),Kg()()(),Qc(1174,`tr`,75)(1175,`td`,18)(1176,`div`,29)(1177,`span`,30),Sk(1178,` (p-search-ai-result)`),vu(1179,`br`),Kg()()(),Qc(1180,`td`,21)(1181,`code`,31),Sk(1182,`EventEmitter`),Kg()(),Qc(1183,`td`,23),Sk(1184,`-`),Kg(),Qc(1185,`td`,24)(1186,`em`)(1187,`strong`),Sk(1188,`(opcional)`),Kg()(),Qc(1189,`p`),Sk(1190,`Evento emitido quando o `),Qc(1191,`code`),Sk(1192,`po-search-ai`),Kg(),Sk(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),Qc(1194,`code`),Sk(1195,`minConfidence`),Kg(),Sk(1196,` configurado em `),Qc(1197,`code`),Sk(1198,`p-search-ai-field`),Kg(),Sk(1199,`.`),Kg(),Qc(1200,`p`),Sk(1201,`O parâmetro enviado é um objeto `),Qc(1202,`code`),Sk(1203,`PoSearchAiResult`),Kg(),Sk(1204,` contendo:`),Kg(),Qc(1205,`ul`)(1206,`li`)(1207,`code`),Sk(1208,`filter`),Kg(),Sk(1209,`: string de filtro OData v4 gerada pela IA (ex: `),Qc(1210,`code`),Sk(1211,`"city eq 'SP' and salary gt 5000"`),Kg(),Sk(1212,`).`),Kg(),Qc(1213,`li`)(1214,`code`),Sk(1215,`description`),Kg(),Sk(1216,`: descrição em linguagem natural do filtro aplicado.`),Kg(),Qc(1217,`li`)(1218,`code`),Sk(1219,`confidence`),Kg(),Sk(1220,`: nível de confiança da resposta (0.0 a 1.0).`),Kg()(),Qc(1221,`blockquote`)(1222,`p`),Sk(1223,`Quando `),Qc(1224,`code`),Sk(1225,`apply`),Kg(),Sk(1226,` for diferente de `),Qc(1227,`code`),Sk(1228,`'none'`),Kg(),Sk(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),Kg()()()(),Qc(1230,`tr`,76)(1231,`td`,18)(1232,`div`,19)(1233,`span`,20),Sk(1234,` p-selectable`),vu(1235,`br`),Kg()()(),Qc(1236,`td`,21)(1237,`code`,22),Sk(1238,`boolean`),Kg()(),Qc(1239,`td`,23)(1240,`p`)(1241,`code`),Sk(1242,`false`),Kg()()(),Qc(1243,`td`,24)(1244,`em`)(1245,`strong`),Sk(1246,`(opcional)`),Kg()(),Qc(1247,`p`),Sk(1248,`Permite a seleção de linhas na tabela e, caso a propriedade `),Qc(1249,`code`),Sk(1250,`p-single-select`),Kg(),Sk(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),Kg(),Qc(1252,`p`)(1253,`strong`),Sk(1254,`Importante:`),Kg()(),Qc(1255,`ul`)(1256,`li`),Sk(1257,`As linhas de detalhe definidas em `),Qc(1258,`code`),Sk(1259,`PoTableDetail`),Kg(),Sk(1260,` possuem comportamento independente da linha mestre;`),Kg(),Qc(1261,`li`),Sk(1262,`Cada linha possui por padrão a propriedade dinâmica `),Qc(1263,`code`),Sk(1264,`$selected`),Kg(),Sk(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Qc(1266,`code`),Sk(1267,`item.$selected`),Kg(),Sk(1268,` ou `),Qc(1269,`code`),Sk(1270,`item['$selected']`),Kg(),Sk(1271,`.`),Kg()()()(),Qc(1272,`tr`,77)(1273,`td`,18)(1274,`div`,19)(1275,`span`,20),Sk(1276,` p-selectable-entire-line`),vu(1277,`br`),Kg()()(),Qc(1278,`td`,21)(1279,`code`,22),Sk(1280,`boolean`),Kg()(),Qc(1281,`td`,23)(1282,`p`)(1283,`code`),Sk(1284,`true`),Kg()()(),Qc(1285,`td`,24)(1286,`p`),Sk(1287,`Permite selecionar um item da tabela clicando na linha.`),Kg(),Qc(1288,`blockquote`)(1289,`p`),Sk(1290,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),Qc(1291,`code`),Sk(1292,`false`),Kg(),Sk(1293,`.`),Kg()()()(),Qc(1294,`tr`,78)(1295,`td`,18)(1296,`div`,29)(1297,`span`,30),Sk(1298,` (p-selected)`),vu(1299,`br`),Kg()()(),Qc(1300,`td`,21)(1301,`code`,31),Sk(1302,`EventEmitter`),Kg()(),Qc(1303,`td`,23),Sk(1304,`-`),Kg(),Qc(1305,`td`,24)(1306,`em`)(1307,`strong`),Sk(1308,`(opcional)`),Kg()(),Qc(1309,`p`),Sk(1310,`Evento executado ao selecionar uma linha do `),Qc(1311,`code`),Sk(1312,`po-table`),Kg(),Sk(1313,`.`),Kg()()(),Qc(1314,`tr`,79)(1315,`td`,18)(1316,`div`,19)(1317,`span`,20),Sk(1318,` p-service-api`),vu(1319,`br`),Kg()()(),Qc(1320,`td`,21)(1321,`code`,41),Sk(1322,`string`),Kg()(),Qc(1323,`td`,23),Sk(1324,`-`),Kg(),Qc(1325,`td`,24)(1326,`em`)(1327,`strong`),Sk(1328,`(opcional)`),Kg()(),Qc(1329,`p`),Sk(1330,`URL da API responsável por retornar os registros.`),Kg(),Qc(1331,`p`),Sk(1332,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),Qc(1333,`code`),Sk(1334,`page`),Kg(),Sk(1335,` e `),Qc(1336,`code`),Sk(1337,`pageSize`),Kg(),Sk(1338,`, conforme abaixo:`),Kg(),Qc(1339,`pre`)(1340,`code`),Sk(1341,`url + ?page=1&pageSize=10
`),Kg()(),Qc(1342,`p`),Sk(1343,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Qc(1344,`code`),Sk(1345,`order`),Kg(),Sk(1346,`, por exemplo:`),Kg(),Qc(1347,`ul`)(1348,`li`)(1349,`p`),Sk(1350,`Coluna decrescente:`),Kg(),Qc(1351,`pre`)(1352,`code`),Sk(1353,`url + ?page=1&pageSize=10&order=-name
`),Kg()()(),Qc(1354,`li`)(1355,`p`),Sk(1356,`Coluna ascendente:`),Kg(),Qc(1357,`pre`)(1358,`code`),Sk(1359,`url + ?page=1&pageSize=10&order=name
`),Kg()()()(),Qc(1360,`blockquote`)(1361,`p`),Sk(1362,`Esta URL deve retornar e receber os dados no padrão de `),Qc(1363,`a`,80),Sk(1364,`API do PO UI`),Kg(),Sk(1365,`.`),Kg()()()(),Qc(1366,`tr`,81)(1367,`td`,18)(1368,`div`,19)(1369,`span`,20),Sk(1370,` p-service-delete`),vu(1371,`br`),Kg()()(),Qc(1372,`td`,21)(1373,`code`,41),Sk(1374,`string`),Kg()(),Qc(1375,`td`,23),Sk(1376,`-`),Kg(),Qc(1377,`td`,24)(1378,`em`)(1379,`strong`),Sk(1380,`(opcional)`),Kg()(),Qc(1381,`p`),Sk(1382,`URL da API responsável por excluir os registros.`),Kg(),Qc(1383,`p`),Sk(1384,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),Qc(1385,`code`),Sk(1386,`p-param-delete-api`),Kg(),Sk(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Qc(1388,`code`),Sk(1389,`id`),Kg(),Sk(1390,`.`),Kg(),Qc(1391,`blockquote`)(1392,`p`),Sk(1393,`Esta URL deve retornar e receber os dados no padrão de `),Qc(1394,`a`,80),Sk(1395,`API do PO UI`),Kg(),Sk(1396,`.`),Kg()()()(),Qc(1397,`tr`,82)(1398,`td`,18)(1399,`div`,29)(1400,`span`,30),Sk(1401,` (p-show-more)`),vu(1402,`br`),Kg()()(),Qc(1403,`td`,21)(1404,`code`,31),Sk(1405,`EventEmitter`),Kg()(),Qc(1406,`td`,23),Sk(1407,`-`),Kg(),Qc(1408,`td`,24)(1409,`em`)(1410,`strong`),Sk(1411,`(opcional)`),Kg()(),Qc(1412,`p`),Sk(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),Kg(),Qc(1414,`p`),Sk(1415,`Recebe um objeto `),Qc(1416,`code`),Sk(1417,`{ column, type }`),Kg(),Sk(1418,` onde:`),Kg(),Qc(1419,`ul`)(1420,`li`),Sk(1421,`column (`),Qc(1422,`code`),Sk(1423,`PoTableColumn`),Kg(),Sk(1424,`): objeto da coluna que está ordenada.`),Kg(),Qc(1425,`li`),Sk(1426,`type (`),Qc(1427,`code`),Sk(1428,`PoTableColumnSortType`),Kg(),Sk(1429,`): tipo da ordenação.`),Kg()()()(),Qc(1430,`tr`,83)(1431,`td`,18)(1432,`div`,19)(1433,`span`,20),Sk(1434,` p-show-more-disabled`),vu(1435,`br`),Kg()()(),Qc(1436,`td`,21)(1437,`code`,22),Sk(1438,`boolean`),Kg()(),Qc(1439,`td`,23)(1440,`p`)(1441,`code`),Sk(1442,`false`),Kg()()(),Qc(1443,`td`,24)(1444,`p`),Sk(1445,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),Kg()()(),Qc(1446,`tr`,84)(1447,`td`,18)(1448,`div`,19)(1449,`span`,20),Sk(1450,` p-single-select`),vu(1451,`br`),Kg()()(),Qc(1452,`td`,21)(1453,`code`,22),Sk(1454,`boolean`),Kg()(),Qc(1455,`td`,23),Sk(1456,`-`),Kg(),Qc(1457,`td`,24)(1458,`p`),Sk(1459,`Define que somente uma linha da tabela pode ser selecionada.`),Kg(),Qc(1460,`blockquote`)(1461,`p`),Sk(1462,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),Kg()()()(),Qc(1463,`tr`,85)(1464,`td`,18)(1465,`div`,19)(1466,`span`,20),Sk(1467,` p-sort`),vu(1468,`br`),Kg()()(),Qc(1469,`td`,21)(1470,`code`,22),Sk(1471,`boolean`),Kg()(),Qc(1472,`td`,23)(1473,`p`)(1474,`code`),Sk(1475,`false`),Kg()()(),Qc(1476,`td`,24)(1477,`em`)(1478,`strong`),Sk(1479,`(opcional)`),Kg()(),Qc(1480,`p`),Sk(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),Kg()()(),Qc(1482,`tr`,86)(1483,`td`,18)(1484,`div`,29)(1485,`span`,30),Sk(1486,` (p-sort-by)`),vu(1487,`br`),Kg()()(),Qc(1488,`td`,21)(1489,`code`,31),Sk(1490,`EventEmitter`),Kg()(),Qc(1491,`td`,23),Sk(1492,`-`),Kg(),Qc(1493,`td`,24)(1494,`em`)(1495,`strong`),Sk(1496,`(opcional)`),Kg()(),Qc(1497,`p`),Sk(1498,`Evento executado ao ordenar colunas da tabela.`),Kg(),Qc(1499,`p`),Sk(1500,`Recebe um objeto `),Qc(1501,`code`),Sk(1502,`{ column, type }`),Kg(),Sk(1503,` onde:`),Kg(),Qc(1504,`ul`)(1505,`li`),Sk(1506,`column (`),Qc(1507,`code`),Sk(1508,`PoTableColumn`),Kg(),Sk(1509,`): objeto da coluna que foi clicada/ordenada.`),Kg(),Qc(1510,`li`),Sk(1511,`type (`),Qc(1512,`code`),Sk(1513,`PoTableColumnSortType`),Kg(),Sk(1514,`): tipo da ordenação.`),Kg()()()(),Qc(1515,`tr`,87)(1516,`td`,18)(1517,`div`,19)(1518,`span`,20),Sk(1519,` p-spacing`),vu(1520,`br`),Kg()()(),Qc(1521,`td`,21)(1522,`code`,41),Sk(1523,`string`),Kg()(),Qc(1524,`td`,23)(1525,`p`)(1526,`code`),Sk(1527,`medium`),Kg()()(),Qc(1528,`td`,24)(1529,`em`)(1530,`strong`),Sk(1531,`(opcional)`),Kg()(),Qc(1532,`p`),Sk(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Qc(1534,`strong`),Sk(1535,`PoTableColumnSpacing`),Kg(),Sk(1536,`.`),Kg(),Qc(1537,`blockquote`)(1538,`p`),Sk(1539,`Em nível de acessibilidade `),Qc(1540,`strong`),Sk(1541,`AA`),Kg(),Sk(1542,`, caso o valor de `),Qc(1543,`code`),Sk(1544,`p-spacing`),Kg(),Sk(1545,` não seja definido, o valor padrão será `),Qc(1546,`code`),Sk(1547,`extraSmall`),Kg(),Sk(1548,`
nos seguintes cen\xE1rios:`),Kg(),Qc(1549,`ul`)(1550,`li`),Sk(1551,`Quando o valor de `),Qc(1552,`code`),Sk(1553,`p-components-size`),Kg(),Sk(1554,` for `),Qc(1555,`code`),Sk(1556,`small`),Kg(),Sk(1557,`;`),Kg(),Qc(1558,`li`),Sk(1559,`Quando o valor padrão dos componentes for configurado como `),Qc(1560,`code`),Sk(1561,`small`),Kg(),Sk(1562,` no
`),Qc(1563,`a`,42),Sk(1564,`serviço de tema`),Kg(),Sk(1565,`.`),Kg()()()()(),Qc(1566,`tr`,88)(1567,`td`,18)(1568,`div`,19)(1569,`span`,20),Sk(1570,` p-striped`),vu(1571,`br`),Kg()()(),Qc(1572,`td`,21)(1573,`code`,22),Sk(1574,`boolean`),Kg()(),Qc(1575,`td`,23)(1576,`p`)(1577,`code`),Sk(1578,`false`),Kg()()(),Qc(1579,`td`,24)(1580,`p`),Sk(1581,`Habilita ou desabilita o estilo listrado da tabela (`),Qc(1582,`code`),Sk(1583,`striped`),Kg(),Sk(1584,`).`),Kg(),Qc(1585,`blockquote`)(1586,`p`),Sk(1587,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),Kg()()()(),Qc(1588,`tr`,89)(1589,`td`,18)(1590,`div`,19)(1591,`span`,20),Sk(1592,` p-text-wrap`),vu(1593,`br`),Kg()()(),Qc(1594,`td`,21)(1595,`code`,22),Sk(1596,`boolean`),Kg()(),Qc(1597,`td`,23)(1598,`p`)(1599,`code`),Sk(1600,`false`),Kg()()(),Qc(1601,`td`,24)(1602,`em`)(1603,`strong`),Sk(1604,`(opcional)`),Kg()(),Qc(1605,`p`),Sk(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg(),Qc(1607,`blockquote`)(1608,`p`),Sk(1609,`Incompatível com `),Qc(1610,`code`),Sk(1611,`virtual-scroll`),Kg(),Sk(1612,`, que requer altura fixa nas linhas.`),Kg()()()(),Qc(1613,`tr`,90)(1614,`td`,18)(1615,`div`,29)(1616,`span`,30),Sk(1617,` (p-unselected)`),vu(1618,`br`),Kg()()(),Qc(1619,`td`,21)(1620,`code`,31),Sk(1621,`EventEmitter`),Kg()(),Qc(1622,`td`,23),Sk(1623,`-`),Kg(),Qc(1624,`td`,24)(1625,`em`)(1626,`strong`),Sk(1627,`(opcional)`),Kg()(),Qc(1628,`p`),Sk(1629,`Evento executado ao desmarcar a seleção de uma linha do `),Qc(1630,`code`),Sk(1631,`po-table`),Kg(),Sk(1632,`.`),Kg()()(),Qc(1633,`tr`,91)(1634,`td`,18)(1635,`div`,19)(1636,`span`,20),Sk(1637,` p-virtual-scroll`),vu(1638,`br`),Kg()()(),Qc(1639,`td`,21)(1640,`code`,22),Sk(1641,`boolean`),Kg()(),Qc(1642,`td`,23)(1643,`p`)(1644,`code`),Sk(1645,`true`),Kg()()(),Qc(1646,`td`,24)(1647,`em`)(1648,`strong`),Sk(1649,`(opcional)`),Kg()(),Qc(1650,`p`),Sk(1651,`Habilita o `),Qc(1652,`code`),Sk(1653,`virtual-scroll`),Kg(),Sk(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Qc(1655,`code`),Sk(1656,`p-height`),Kg(),Sk(1657,`) para funcionar corretamente.`),Kg(),Qc(1658,`blockquote`)(1659,`p`),Sk(1660,`Incompatível com `),Qc(1661,`code`),Sk(1662,`p-text-wrap`),Kg(),Sk(1663,` e `),Qc(1664,`code`),Sk(1665,`master-detail`),Kg(),Sk(1666,`, pois o `),Qc(1667,`code`),Sk(1668,`virtual-scroll`),Kg(),Sk(1669,` exige altura fixa nas linhas.`),Kg()()()()(),Qc(1670,`h3`,13),Sk(1671,`Métodos`),Kg(),Qc(1672,`table`,92)(1673,`tr`,93)(1674,`th`,94)(1675,`div`,19)(1676,`h4`)(1677,`span`,20),Sk(1678,` applyFilters `),Kg()()()()(),Qc(1679,`tr`,24)(1680,`td`,24)(1681,`p`),Sk(1682,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),Kg(),Qc(1683,`p`),Sk(1684,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),Kg(),Qc(1685,`pre`)(1686,`code`),Sk(1687,`url + ?page=1&pageSize=10
`),Kg()(),Qc(1688,`blockquote`)(1689,`p`),Sk(1690,`Obs: os parâmetros `),Qc(1691,`code`),Sk(1692,`page`),Kg(),Sk(1693,` e `),Qc(1694,`code`),Sk(1695,`pageSize`),Kg(),Sk(1696,` sempre serão chamados independente de ser enviados outros parâmetros.`),Kg()(),Qc(1697,`p`),Sk(1698,`Caso sejam informados os parâmetros `),Qc(1699,`code`),Sk(1700,`{ name: 'JOHN', age: '23' }`),Kg(),Sk(1701,`, todos serão adicionados ao GET, conforme abaixo:`),Kg(),Qc(1702,`pre`)(1703,`code`),Sk(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),Kg()()()()(),Qc(1705,`h5`)(1706,`b`),Sk(1707,`Parâmetros`),Kg()(),Qc(1708,`table`,14)(1709,`tr`,15)(1710,`th`,16),Sk(1711,`Nome`),Kg(),Qc(1712,`th`,16),Sk(1713,`Tipo`),Kg(),Qc(1714,`th`,16),Sk(1715,`Descrição`),Kg()(),Qc(1716,`tr`,93)(1717,`td`,18),Sk(1718,` queryParams`),Kg(),Qc(1719,`td`,21)(1720,`code`,95),Sk(1721,` { key: value } `),Kg()(),Qc(1722,`td`,24)(1723,`p`),Sk(1724,`Formato do objeto a ser enviado.`),Kg(),Qc(1725,`blockquote`)(1726,`p`),Sk(1727,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),Kg()()()()(),vu(1728,`br`),Qc(1729,`table`,96)(1730,`tr`,93)(1731,`th`,94)(1732,`div`,19)(1733,`h4`)(1734,`span`,20),Sk(1735,` applyFixedColumns `),Kg()()()()(),Qc(1736,`tr`,24)(1737,`td`,24)(1738,`p`),Sk(1739,`Verifica se columns possuem a propriedade width.`),Kg()()()(),vu(1740,`br`),Qc(1741,`table`,97)(1742,`tr`,93)(1743,`th`,94)(1744,`div`,19)(1745,`h4`)(1746,`span`,20),Sk(1747,` collapse `),Kg()()()()(),Qc(1748,`tr`,24)(1749,`td`,24)(1750,`p`),Sk(1751,`Método que colapsa uma linha com detalhe quando executada.`),Kg()()()(),Qc(1752,`h5`)(1753,`b`),Sk(1754,`Parâmetros`),Kg()(),Qc(1755,`table`,14)(1756,`tr`,15)(1757,`th`,16),Sk(1758,`Nome`),Kg(),Qc(1759,`th`,16),Sk(1760,`Tipo`),Kg(),Qc(1761,`th`,16),Sk(1762,`Descrição`),Kg()(),Qc(1763,`tr`,93)(1764,`td`,18),Sk(1765,` rowIndex`),Kg(),Qc(1766,`td`,21)(1767,`code`,98),Sk(1768,` number `),Kg()(),Qc(1769,`td`,24)(1770,`p`),Sk(1771,`Índice da linha que será colapsada.`),Kg(),Qc(1772,`blockquote`)(1773,`p`),Sk(1774,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),Kg()()()()(),vu(1775,`br`),Qc(1776,`table`,99)(1777,`tr`,93)(1778,`th`,94)(1779,`div`,19)(1780,`h4`)(1781,`span`,20),Sk(1782,` expand `),Kg()()()()(),Qc(1783,`tr`,24)(1784,`td`,24)(1785,`p`),Sk(1786,`Método que expande uma linha com detalhe quando executada.`),Kg()()()(),Qc(1787,`h5`)(1788,`b`),Sk(1789,`Parâmetros`),Kg()(),Qc(1790,`table`,14)(1791,`tr`,15)(1792,`th`,16),Sk(1793,`Nome`),Kg(),Qc(1794,`th`,16),Sk(1795,`Tipo`),Kg(),Qc(1796,`th`,16),Sk(1797,`Descrição`),Kg()(),Qc(1798,`tr`,93)(1799,`td`,18),Sk(1800,` rowIndex`),Kg(),Qc(1801,`td`,21)(1802,`code`,98),Sk(1803,` number `),Kg()(),Qc(1804,`td`,24)(1805,`p`),Sk(1806,`Índice da linha que será expandida.`),Kg(),Qc(1807,`blockquote`)(1808,`p`),Sk(1809,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),Kg()()()()(),vu(1810,`br`),Qc(1811,`table`,100)(1812,`tr`,93)(1813,`th`,94)(1814,`div`,19)(1815,`h4`)(1816,`span`,20),Sk(1817,` getSelectedRows `),Kg()()()()(),Qc(1818,`tr`,24)(1819,`td`,24)(1820,`p`),Sk(1821,`Retorna as linhas do `),Qc(1822,`code`),Sk(1823,`po-table`),Kg(),Sk(1824,` que estão selecionadas.`),Kg()()()(),vu(1825,`br`),Qc(1826,`table`,101)(1827,`tr`,93)(1828,`th`,94)(1829,`div`,19)(1830,`h4`)(1831,`span`,20),Sk(1832,` getUnselectedRows `),Kg()()()()(),Qc(1833,`tr`,24)(1834,`td`,24)(1835,`p`),Sk(1836,`Retorna as linhas do `),Qc(1837,`code`),Sk(1838,`po-table`),Kg(),Sk(1839,` que não estão selecionadas.`),Kg()()()(),vu(1840,`br`),Qc(1841,`table`,102)(1842,`tr`,93)(1843,`th`,94)(1844,`div`,19)(1845,`h4`)(1846,`span`,20),Sk(1847,` unselectRows `),Kg()()()()(),Qc(1848,`tr`,24)(1849,`td`,24)(1850,`p`),Sk(1851,`Desmarca as linhas que estão selecionadas.`),Kg()()()(),vu(1852,`br`),Qc(1853,`table`,103)(1854,`tr`,93)(1855,`th`,94)(1856,`div`,19)(1857,`h4`)(1858,`span`,20),Sk(1859,` unselectRowItem `),Kg()()()()(),Qc(1860,`tr`,24)(1861,`td`,24)(1862,`p`),Sk(1863,`Desmarca uma linha que está selecionada.`),Kg()()()(),vu(1864,`br`),Qc(1865,`table`,104)(1866,`tr`,93)(1867,`th`,94)(1868,`div`,19)(1869,`h4`)(1870,`span`,20),Sk(1871,` selectRowItem `),Kg()()()()(),Qc(1872,`tr`,24)(1873,`td`,24)(1874,`p`),Sk(1875,`Seleciona uma linha do 'po-table'.`),Kg()()()(),vu(1876,`br`),Qc(1877,`table`,105)(1878,`tr`,93)(1879,`th`,94)(1880,`div`,19)(1881,`h4`)(1882,`span`,20),Sk(1883,` deleteItems `),Kg()()()()(),Qc(1884,`tr`,24)(1885,`td`,24)(1886,`p`),Sk(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Qc(1888,`code`),Sk(1889,`p-service-delete`),Kg(),Sk(1890,`, será necessário excluir 1 item por vez.`),Kg(),Qc(1891,`p`),Sk(1892,`Ao utilizar `),Qc(1893,`code`),Sk(1894,`p-service-delete`),Kg(),Sk(1895,` mas sem a propriedade `),Qc(1896,`code`),Sk(1897,`p-service-api`),Kg(),Sk(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),Kg(),Qc(1899,`p`),Sk(1900,`Caso a tabela utilize `),Qc(1901,`code`),Sk(1902,`p-height`),Kg(),Sk(1903,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),Qc(1904,`code`),Sk(1905,`(p-delete-items)`),Kg(),Sk(1906,`, por exemplo:`),Kg(),Qc(1907,`pre`)(1908,`code`),Sk(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),Kg()()()()(),vu(1910,`br`),Qc(1911,`table`,106)(1912,`tr`,93)(1913,`th`,94)(1914,`div`,19)(1915,`h4`)(1916,`span`,20),Sk(1917,` updateSearchAIQuery `),Kg()()()()(),Qc(1918,`tr`,24)(1919,`td`,24)(1920,`p`),Sk(1921,`Atualiza programaticamente o valor do campo de busca por IA (`),Qc(1922,`code`),Sk(1923,`po-search-ai`),Kg(),Sk(1924,`) integrado \xE0 tabela
via `),Qc(1925,`code`),Sk(1926,`p-search-ai-field`),Kg(),Sk(1927,`.`),Kg(),Qc(1928,`p`),Sk(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),Kg(),Qc(1930,`blockquote`)(1931,`p`),Sk(1932,`Só tem efeito quando a propriedade `),Qc(1933,`code`),Sk(1934,`p-search-ai-field`),Kg(),Sk(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),Kg()()()()(),Qc(1936,`h5`)(1937,`b`),Sk(1938,`Parâmetros`),Kg()(),Qc(1939,`table`,14)(1940,`tr`,15)(1941,`th`,16),Sk(1942,`Nome`),Kg(),Qc(1943,`th`,16),Sk(1944,`Tipo`),Kg(),Qc(1945,`th`,16),Sk(1946,`Descrição`),Kg()(),Qc(1947,`tr`,93)(1948,`td`,18),Sk(1949,` value`),Kg(),Qc(1950,`td`,21)(1951,`code`,98),Sk(1952,` string `),Kg()(),Qc(1953,`td`,24)(1954,`p`),Sk(1955,`Texto da consulta a ser inserido no campo de busca por IA.`),Kg()()(),Qc(1956,`tr`,93)(1957,`td`,18),Sk(1958,` triggerSearch`),Kg(),Qc(1959,`td`,21)(1960,`code`,98),Sk(1961,` boolean `),Kg()(),Qc(1962,`td`,24)(1963,`p`),Sk(1964,`Quando `),Qc(1965,`code`),Sk(1966,`true`),Kg(),Sk(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),Qc(1968,`code`),Sk(1969,`false`),Kg(),Qc(1970,`em`),Sk(1971,`(padrão)`),Kg(),Sk(1972,`, apenas preenche o campo.`),Kg()()()(),vu(1973,`br`),Qc(1974,`table`,107)(1975,`tr`,93)(1976,`th`,94)(1977,`div`,19)(1978,`h4`)(1979,`span`,20),Sk(1980,` removeItem `),Kg()()()()(),Qc(1981,`tr`,24)(1982,`td`,24)(1983,`p`),Sk(1984,`Método que remove um item da tabela.`),Kg()()()(),Qc(1985,`h5`)(1986,`b`),Sk(1987,`Parâmetros`),Kg()(),Qc(1988,`table`,14)(1989,`tr`,15)(1990,`th`,16),Sk(1991,`Nome`),Kg(),Qc(1992,`th`,16),Sk(1993,`Tipo`),Kg(),Qc(1994,`th`,16),Sk(1995,`Descrição`),Kg()(),Qc(1996,`tr`,93)(1997,`td`,18),Sk(1998,` item`),Kg(),Qc(1999,`td`,21)(2e3,`code`,52),Sk(2001,` number `),Kg(),Qc(2002,`code`,95),Sk(2003,` { key: value } `),Kg()(),Qc(2004,`td`,24)(2005,`p`),Sk(2006,`Índice da linha ou o item que será removido.`),Kg(),Qc(2007,`blockquote`)(2008,`p`),Sk(2009,`Ao remover o item, a linha que o representa será excluída da tabela.`),Kg()()()()(),vu(2010,`br`),Qc(2011,`table`,108)(2012,`tr`,93)(2013,`th`,94)(2014,`div`,19)(2015,`h4`)(2016,`span`,20),Sk(2017,` updateItem `),Kg()()()()(),Qc(2018,`tr`,24)(2019,`td`,24)(2020,`p`),Sk(2021,`Método que atualiza um item da tabela.`),Kg()()()(),Qc(2022,`h5`)(2023,`b`),Sk(2024,`Parâmetros`),Kg()(),Qc(2025,`table`,14)(2026,`tr`,15)(2027,`th`,16),Sk(2028,`Nome`),Kg(),Qc(2029,`th`,16),Sk(2030,`Tipo`),Kg(),Qc(2031,`th`,16),Sk(2032,`Descrição`),Kg()(),Qc(2033,`tr`,93)(2034,`td`,18),Sk(2035,` item`),Kg(),Qc(2036,`td`,21)(2037,`code`,52),Sk(2038,` number `),Kg(),Qc(2039,`code`,95),Sk(2040,` { key: value } `),Kg()(),Qc(2041,`td`,24)(2042,`p`),Sk(2043,`Índice da linha ou o item que será atualizado.`),Kg()()(),Qc(2044,`tr`,93)(2045,`td`,18),Sk(2046,` updatedItem`),Kg(),Qc(2047,`td`,21)(2048,`code`,95),Sk(2049,` { key: value } `),Kg()(),Qc(2050,`td`,24)(2051,`p`),Sk(2052,`Item que foi atualizado.`),Kg(),Qc(2053,`blockquote`)(2054,`p`),Sk(2055,`Ao atualizar o item, a informação será alterada na tabela.`),Kg()()()()(),vu(2056,`br`),Qc(2057,`h3`),Sk(2058,`Interfaces`),Kg(),Qc(2059,`h4`,109)(2060,`code`,5),Sk(2061,`PoTableAction`),Kg()(),Qc(2062,`div`,2)(2063,`p`),Sk(2064,`Interface para lista de ações do componente. `),Kg()(),Qc(2065,`h4`,13),Sk(2066,`Propriedades`),Kg(),Qc(2067,`table`,14)(2068,`tr`,15)(2069,`th`,16),Sk(2070,`Nome`),Kg(),Qc(2071,`th`,16),Sk(2072,`Tipo`),Kg(),Qc(2073,`th`,16),Sk(2074,`Descrição`),Kg()(),Qc(2075,`tr`,110)(2076,`td`,18)(2077,`div`,19)(2078,`span`,20),Sk(2079,` action`),vu(2080,`br`),Kg()()(),Qc(2081,`td`,21)(2082,`code`,111),Sk(2083,`Function`),Kg()(),Qc(2084,`td`,24)(2085,`em`)(2086,`strong`),Sk(2087,`(opcional)`),Kg()(),Qc(2088,`p`),Sk(2089,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(2090,`p`),Sk(2091,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(2092,`code`),Sk(2093,`subItems`),Kg(),Sk(2094,`.`),Kg(),Qc(2095,`blockquote`)(2096,`p`),Sk(2097,`Para que a função seja executada no contexto do componente, utilize `),Qc(2098,`em`),Sk(2099,`bind`),Kg(),Sk(2100,`:
`),Qc(2101,`code`),Sk(2102,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(2103,`tr`,112)(2104,`td`,18)(2105,`div`,19)(2106,`span`,20),Sk(2107,` disabled`),vu(2108,`br`),Kg()()(),Qc(2109,`td`,21)(2110,`code`,22),Sk(2111,`boolean `),Kg(),Qc(2112,`code`,111),Sk(2113,` Function`),Kg()(),Qc(2114,`td`,24)(2115,`em`)(2116,`strong`),Sk(2117,`(opcional)`),Kg()(),Qc(2118,`p`),Sk(2119,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(2120,`tr`,113)(2121,`td`,18)(2122,`div`,19)(2123,`span`,20),Sk(2124,` icon`),vu(2125,`br`),Kg()()(),Qc(2126,`td`,21)(2127,`code`,41),Sk(2128,`string `),Kg(),Qc(2129,`code`,114),Sk(2130,` TemplateRef<void>`),Kg()(),Qc(2131,`td`,24)(2132,`em`)(2133,`strong`),Sk(2134,`(opcional)`),Kg()(),Qc(2135,`p`),Sk(2136,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(2137,`p`),Sk(2138,`Aceita ícones da `),Qc(2139,`a`,27),Sk(2140,`Biblioteca de ícones`),Kg(),Sk(2141,`, fontes externas (ex: Font Awesome)
ou um `),Qc(2142,`code`),Sk(2143,`TemplateRef`),Kg(),Sk(2144,` para ícones customizados.`),Kg(),Qc(2145,`pre`)(2146,`code`),Sk(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(2148,`tr`,115)(2149,`td`,18)(2150,`div`,19)(2151,`span`,20),Sk(2152,` label`),vu(2153,`br`),Kg()()(),Qc(2154,`td`,21)(2155,`code`,41),Sk(2156,`string`),Kg()(),Qc(2157,`td`,24)(2158,`p`),Sk(2159,`Rótulo da ação.`),Kg(),Qc(2160,`p`),Sk(2161,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(2162,`code`),Sk(2163,`subItems`),Kg(),Sk(2164,`.`),Kg()()(),Qc(2165,`tr`,116)(2166,`td`,18)(2167,`div`,19)(2168,`span`,20),Sk(2169,` selected`),vu(2170,`br`),Kg()()(),Qc(2171,`td`,21)(2172,`code`,22),Sk(2173,`boolean`),Kg()(),Qc(2174,`td`,24)(2175,`em`)(2176,`strong`),Sk(2177,`(opcional)`),Kg()(),Qc(2178,`p`),Sk(2179,`Define se a ação está selecionada.`),Kg()()(),Qc(2180,`tr`,117)(2181,`td`,18)(2182,`div`,19)(2183,`span`,20),Sk(2184,` separator`),vu(2185,`br`),Kg()()(),Qc(2186,`td`,21)(2187,`code`,22),Sk(2188,`boolean`),Kg()(),Qc(2189,`td`,24)(2190,`em`)(2191,`strong`),Sk(2192,`(opcional)`),Kg()(),Qc(2193,`p`),Sk(2194,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(2195,`tr`,118)(2196,`td`,18)(2197,`div`,19)(2198,`span`,20),Sk(2199,` subItems`),vu(2200,`br`),Kg()()(),Qc(2201,`td`,21)(2202,`code`,119),Sk(2203,`Array<PoPopupAction>`),Kg()(),Qc(2204,`td`,24)(2205,`em`)(2206,`strong`),Sk(2207,`(opcional)`),Kg()(),Qc(2208,`p`),Sk(2209,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(2210,`pre`)(2211,`code`),Sk(2212,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(2213,`p`),Sk(2214,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(2215,`blockquote`)(2216,`p`),Sk(2217,`As propriedades `),Qc(2218,`code`),Sk(2219,`disabled`),Kg(),Sk(2220,`, `),Qc(2221,`code`),Sk(2222,`type`),Kg(),Sk(2223,` e `),Qc(2224,`code`),Sk(2225,`visible`),Kg(),Sk(2226,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(2227,`blockquote`)(2228,`p`),Sk(2229,`Quando `),Qc(2230,`code`),Sk(2231,`url`),Kg(),Sk(2232,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(2233,`blockquote`)(2234,`p`),Sk(2235,`Em subníveis aninhados, o `),Qc(2236,`code`),Sk(2237,`icon`),Kg(),Sk(2238,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(2239,`tr`,120)(2240,`td`,18)(2241,`div`,19)(2242,`span`,20),Sk(2243,` subItemsLazy`),vu(2244,`br`),Kg()()(),Qc(2245,`td`,21)(2246,`code`,121),Sk(2247,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(2248,`td`,24)(2249,`em`)(2250,`strong`),Sk(2251,`(opcional)`),Kg()(),Qc(2252,`p`),Sk(2253,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(2254,`p`),Sk(2255,`Recebe o item agrupador e retorna um `),Qc(2256,`code`),Sk(2257,`Observable<Array<PoPopupAction>>`),Kg(),Sk(2258,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(2259,`strong`),Sk(2260,`apenas`),Kg(),Sk(2261,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(2262,`code`),Sk(2263,`po-skeleton`),Kg(),Sk(2264,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(2265,`pre`)(2266,`code`),Sk(2267,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(2268,`blockquote`)(2269,`p`),Sk(2270,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(2271,`p`),Sk(2272,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(2273,`tr`,122)(2274,`td`,18)(2275,`div`,19)(2276,`span`,20),Sk(2277,` type`),vu(2278,`br`),Kg()()(),Qc(2279,`td`,21)(2280,`code`,41),Sk(2281,`string`),Kg()(),Qc(2282,`td`,24)(2283,`em`)(2284,`strong`),Sk(2285,`(opcional)`),Kg()(),Qc(2286,`p`),Sk(2287,`Define a cor do item.`),Kg(),Qc(2288,`p`),Sk(2289,`Valores válidos:`),Kg(),Qc(2290,`ul`)(2291,`li`)(2292,`code`),Sk(2293,`default`),Kg()(),Qc(2294,`li`)(2295,`code`),Sk(2296,`danger`),Kg()()()()(),Qc(2297,`tr`,123)(2298,`td`,18)(2299,`div`,19)(2300,`span`,20),Sk(2301,` url`),vu(2302,`br`),Kg()()(),Qc(2303,`td`,21)(2304,`code`,41),Sk(2305,`string`),Kg()(),Qc(2306,`td`,24)(2307,`em`)(2308,`strong`),Sk(2309,`(opcional)`),Kg()(),Qc(2310,`p`),Sk(2311,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(2312,`p`),Sk(2313,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(2314,`code`),Sk(2315,`url`),Kg(),Sk(2316,` é informada em um agrupador, o clique `),Qc(2317,`strong`),Sk(2318,`não abrirá os subitens`),Kg(),Sk(2319,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(2320,`blockquote`)(2321,`p`),Sk(2322,`Quando informada, tem prioridade sobre a propriedade `),Qc(2323,`code`),Sk(2324,`action`),Kg(),Sk(2325,`.`),Kg()()()(),Qc(2326,`tr`,124)(2327,`td`,18)(2328,`div`,19)(2329,`span`,20),Sk(2330,` visible`),vu(2331,`br`),Kg()()(),Qc(2332,`td`,21)(2333,`code`,22),Sk(2334,`boolean `),Kg(),Qc(2335,`code`,111),Sk(2336,` Function`),Kg()(),Qc(2337,`td`,24)(2338,`em`)(2339,`strong`),Sk(2340,`(opcional)`),Kg()(),Qc(2341,`p`),Sk(2342,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()(),Qc(2343,`h4`,125)(2344,`code`,5),Sk(2345,`PoTableBoolean`),Kg()(),Qc(2346,`div`,2)(2347,`p`),Sk(2348,`Interface que define as colunas booleanas do `),Qc(2349,`code`),Sk(2350,`po-table`),Kg(),Sk(2351,`.`),Kg()(),Qc(2352,`h4`,13),Sk(2353,`Propriedades`),Kg(),Qc(2354,`table`,14)(2355,`tr`,15)(2356,`th`,16),Sk(2357,`Nome`),Kg(),Qc(2358,`th`,16),Sk(2359,`Tipo`),Kg(),Qc(2360,`th`,16),Sk(2361,`Descrição`),Kg()(),Qc(2362,`tr`,126)(2363,`td`,18)(2364,`div`,19)(2365,`span`,20),Sk(2366,` falseLabel`),vu(2367,`br`),Kg()()(),Qc(2368,`td`,21)(2369,`code`,41),Sk(2370,`string`),Kg()(),Qc(2371,`td`,24)(2372,`em`)(2373,`strong`),Sk(2374,`(opcional)`),Kg()(),Qc(2375,`p`),Sk(2376,`Define o rótulo para valores `),Qc(2377,`code`),Sk(2378,`false`),Kg(),Sk(2379,`.`),Kg()()(),Qc(2380,`tr`,127)(2381,`td`,18)(2382,`div`,19)(2383,`span`,20),Sk(2384,` trueLabel`),vu(2385,`br`),Kg()()(),Qc(2386,`td`,21)(2387,`code`,41),Sk(2388,`string`),Kg()(),Qc(2389,`td`,24)(2390,`em`)(2391,`strong`),Sk(2392,`(opcional)`),Kg()(),Qc(2393,`p`),Sk(2394,`Define o rótulo para valores `),Qc(2395,`code`),Sk(2396,`true`),Kg(),Sk(2397,`.`),Kg()()()(),Qc(2398,`h4`,128)(2399,`code`,5),Sk(2400,`PoTableColumnSort`),Kg()(),Qc(2401,`div`,2)(2402,`p`),Sk(2403,`Interface para ordenação das colunas do componente table.`),Kg()(),Qc(2404,`h4`,13),Sk(2405,`Propriedades`),Kg(),Qc(2406,`table`,14)(2407,`tr`,15)(2408,`th`,16),Sk(2409,`Nome`),Kg(),Qc(2410,`th`,16),Sk(2411,`Tipo`),Kg(),Qc(2412,`th`,16),Sk(2413,`Descrição`),Kg()(),Qc(2414,`tr`,129)(2415,`td`,18)(2416,`div`,19)(2417,`span`,20),Sk(2418,` column`),vu(2419,`br`),Kg()()(),Qc(2420,`td`,21)(2421,`code`,130),Sk(2422,`PoTableColumn`),Kg()(),Qc(2423,`td`,24)(2424,`em`)(2425,`strong`),Sk(2426,`(opcional)`),Kg()(),Qc(2427,`p`),Sk(2428,`Coluna pela qual a tabela está ordenada.`),Kg()()(),Qc(2429,`tr`,131)(2430,`td`,18)(2431,`div`,19)(2432,`span`,20),Sk(2433,` type`),vu(2434,`br`),Kg()()(),Qc(2435,`td`,21)(2436,`code`,132),Sk(2437,`PoTableColumnSortType`),Kg()(),Qc(2438,`td`,24)(2439,`p`),Sk(2440,`Tipo da ordenação.`),Kg()()()(),Qc(2441,`h4`,133)(2442,`code`,5),Sk(2443,`PoTableColumn`),Kg()(),Qc(2444,`div`,2)(2445,`p`),Sk(2446,`Interface para configuração das colunas do `),Qc(2447,`code`),Sk(2448,`po-table`),Kg(),Sk(2449,`.`),Kg(),Qc(2450,`p`),Sk(2451,`As definições das colunas serão aplicadas linha a linha.`),Kg()(),Qc(2452,`h4`,13),Sk(2453,`Propriedades`),Kg(),Qc(2454,`table`,14)(2455,`tr`,15)(2456,`th`,16),Sk(2457,`Nome`),Kg(),Qc(2458,`th`,16),Sk(2459,`Tipo`),Kg(),Qc(2460,`th`,16),Sk(2461,`Descrição`),Kg()(),Qc(2462,`tr`,134)(2463,`td`,18)(2464,`div`,19)(2465,`span`,20),Sk(2466,` action`),vu(2467,`br`),Kg()()(),Qc(2468,`td`,21)(2469,`code`,111),Sk(2470,`Function`),Kg()(),Qc(2471,`td`,24)(2472,`em`)(2473,`strong`),Sk(2474,`(opcional)`),Kg()(),Qc(2475,`p`),Sk(2476,`Define uma ação na coluna quando o tipo da coluna for `),Qc(2477,`code`),Sk(2478,`link`),Kg(),Sk(2479,` ou `),Qc(2480,`code`),Sk(2481,`icon`),Kg(),Sk(2482,`.`),Kg(),Qc(2483,`blockquote`)(2484,`p`),Sk(2485,`Quando for do tipo `),Qc(2486,`code`),Sk(2487,`link`),Kg(),Sk(2488,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),Kg()(),Qc(2489,`blockquote`)(2490,`p`),Sk(2491,`Quando for do tipo `),Qc(2492,`code`),Sk(2493,`icon`),Kg(),Sk(2494,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),Kg()()()(),Qc(2495,`tr`,135)(2496,`td`,18)(2497,`div`,19)(2498,`span`,20),Sk(2499,` boolean`),vu(2500,`br`),Kg()()(),Qc(2501,`td`,21)(2502,`code`,136),Sk(2503,`PoTableBoolean`),Kg()(),Qc(2504,`td`,24)(2505,`em`)(2506,`strong`),Sk(2507,`(opcional)`),Kg()(),Qc(2508,`p`),Sk(2509,`Define um objeto do tipo `),Qc(2510,`code`),Sk(2511,`PoTableBoolean`),Kg(),Sk(2512,` para as colunas do tipo `),Qc(2513,`em`),Sk(2514,`boolean`),Kg(),Sk(2515,`. Por exemplo:`),Kg(),Qc(2516,`pre`)(2517,`code`),Sk(2518,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),Kg()(),Qc(2519,`blockquote`)(2520,`p`),Sk(2521,`Caso não seja definido um objeto para colunas do tipo `),Qc(2522,`em`),Sk(2523,`boolean`),Kg(),Sk(2524,`,
esta exibir\xE1 por padr\xE3o `),Qc(2525,`code`),Sk(2526,`Sim`),Kg(),Sk(2527,` e `),Qc(2528,`code`),Sk(2529,`Não`),Kg(),Sk(2530,` de acordo com os valores `),Qc(2531,`em`),Sk(2532,`booleanos`),Kg(),Sk(2533,`.`),Kg()()()(),Qc(2534,`tr`,137)(2535,`td`,18)(2536,`div`,19)(2537,`span`,20),Sk(2538,` color`),vu(2539,`br`),Kg()()(),Qc(2540,`td`,21)(2541,`code`,41),Sk(2542,`string `),Kg(),Qc(2543,`code`,111),Sk(2544,` Function`),Kg()(),Qc(2545,`td`,24)(2546,`em`)(2547,`strong`),Sk(2548,`(opcional)`),Kg()(),Qc(2549,`p`),Sk(2550,`Define a cor que será aplicada no conteúdo da coluna.`),Kg(),Qc(2551,`p`),Sk(2552,`Valores válidos:`),Kg(),Qc(2553,`ul`)(2554,`li`),vu(2555,`span`,138),Qc(2556,`code`),Sk(2557,`color-01`),Kg()(),Qc(2558,`li`),vu(2559,`span`,139),Qc(2560,`code`),Sk(2561,`color-02`),Kg()(),Qc(2562,`li`),vu(2563,`span`,140),Qc(2564,`code`),Sk(2565,`color-03`),Kg()(),Qc(2566,`li`),vu(2567,`span`,141),Qc(2568,`code`),Sk(2569,`color-04`),Kg()(),Qc(2570,`li`),vu(2571,`span`,142),Qc(2572,`code`),Sk(2573,`color-05`),Kg()(),Qc(2574,`li`),vu(2575,`span`,143),Qc(2576,`code`),Sk(2577,`color-06`),Kg()(),Qc(2578,`li`),vu(2579,`span`,144),Qc(2580,`code`),Sk(2581,`color-07`),Kg()(),Qc(2582,`li`),vu(2583,`span`,145),Qc(2584,`code`),Sk(2585,`color-08`),Kg()(),Qc(2586,`li`),vu(2587,`span`,146),Qc(2588,`code`),Sk(2589,`color-09`),Kg()(),Qc(2590,`li`),vu(2591,`span`,147),Qc(2592,`code`),Sk(2593,`color-10`),Kg()(),Qc(2594,`li`),vu(2595,`span`,148),Qc(2596,`code`),Sk(2597,`color-11`),Kg()(),Qc(2598,`li`),vu(2599,`span`,149),Qc(2600,`code`),Sk(2601,`color-12`),Kg()()(),Qc(2602,`blockquote`)(2603,`p`),Sk(2604,`Também é possível utilizar as 35 cores da paleta `),Qc(2605,`strong`),Sk(2606,`Caption Tag Colors`),Kg(),Sk(2607,`:`),Kg()(),Qc(2608,`ul`)(2609,`li`),vu(2610,`span`,150),Qc(2611,`code`),Sk(2612,`caption-tag-01`),Kg(),vu(2613,`span`,151),Qc(2614,`code`),Sk(2615,`caption-tag-02`),Kg(),vu(2616,`span`,152),Qc(2617,`code`),Sk(2618,`caption-tag-03`),Kg(),vu(2619,`span`,153),Qc(2620,`code`),Sk(2621,`caption-tag-04`),Kg(),vu(2622,`span`,154),Qc(2623,`code`),Sk(2624,`caption-tag-05`),Kg()(),Qc(2625,`li`),vu(2626,`span`,155),Qc(2627,`code`),Sk(2628,`caption-tag-06`),Kg(),vu(2629,`span`,156),Qc(2630,`code`),Sk(2631,`caption-tag-07`),Kg(),vu(2632,`span`,157),Qc(2633,`code`),Sk(2634,`caption-tag-08`),Kg(),vu(2635,`span`,158),Qc(2636,`code`),Sk(2637,`caption-tag-09`),Kg(),vu(2638,`span`,159),Qc(2639,`code`),Sk(2640,`caption-tag-10`),Kg()(),Qc(2641,`li`),vu(2642,`span`,160),Qc(2643,`code`),Sk(2644,`caption-tag-11`),Kg(),vu(2645,`span`,161),Qc(2646,`code`),Sk(2647,`caption-tag-12`),Kg(),vu(2648,`span`,162),Qc(2649,`code`),Sk(2650,`caption-tag-13`),Kg(),vu(2651,`span`,163),Qc(2652,`code`),Sk(2653,`caption-tag-14`),Kg(),vu(2654,`span`,164),Qc(2655,`code`),Sk(2656,`caption-tag-15`),Kg()(),Qc(2657,`li`),vu(2658,`span`,165),Qc(2659,`code`),Sk(2660,`caption-tag-16`),Kg(),vu(2661,`span`,166),Qc(2662,`code`),Sk(2663,`caption-tag-17`),Kg(),vu(2664,`span`,167),Qc(2665,`code`),Sk(2666,`caption-tag-18`),Kg(),vu(2667,`span`,168),Qc(2668,`code`),Sk(2669,`caption-tag-19`),Kg(),vu(2670,`span`,169),Qc(2671,`code`),Sk(2672,`caption-tag-20`),Kg()(),Qc(2673,`li`),vu(2674,`span`,170),Qc(2675,`code`),Sk(2676,`caption-tag-21`),Kg(),vu(2677,`span`,171),Qc(2678,`code`),Sk(2679,`caption-tag-22`),Kg(),vu(2680,`span`,172),Qc(2681,`code`),Sk(2682,`caption-tag-23`),Kg(),vu(2683,`span`,173),Qc(2684,`code`),Sk(2685,`caption-tag-24`),Kg(),vu(2686,`span`,174),Qc(2687,`code`),Sk(2688,`caption-tag-25`),Kg()(),Qc(2689,`li`),vu(2690,`span`,175),Qc(2691,`code`),Sk(2692,`caption-tag-26`),Kg(),vu(2693,`span`,176),Qc(2694,`code`),Sk(2695,`caption-tag-27`),Kg(),vu(2696,`span`,177),Qc(2697,`code`),Sk(2698,`caption-tag-28`),Kg(),vu(2699,`span`,178),Qc(2700,`code`),Sk(2701,`caption-tag-29`),Kg(),vu(2702,`span`,179),Qc(2703,`code`),Sk(2704,`caption-tag-30`),Kg()(),Qc(2705,`li`),vu(2706,`span`,180),Qc(2707,`code`),Sk(2708,`caption-tag-31`),Kg(),vu(2709,`span`,181),Qc(2710,`code`),Sk(2711,`caption-tag-32`),Kg(),vu(2712,`span`,182),Qc(2713,`code`),Sk(2714,`caption-tag-33`),Kg(),vu(2715,`span`,183),Qc(2716,`code`),Sk(2717,`caption-tag-34`),Kg(),vu(2718,`span`,184),Qc(2719,`code`),Sk(2720,`caption-tag-35`),Kg()()(),Qc(2721,`blockquote`)(2722,`p`),Sk(2723,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),Kg()(),Qc(2724,`pre`)(2725,`code`),Sk(2726,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),Kg()(),Qc(2727,`blockquote`)(2728,`p`),Sk(2729,`É possível também usá-la na coluna do tipo `),Qc(2730,`code`),Sk(2731,`icons`),Kg(),Sk(2732,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),Kg()(),Qc(2733,`pre`)(2734,`code`),Sk(2735,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),Kg()()()(),Qc(2736,`tr`,185)(2737,`td`,18)(2738,`div`,19)(2739,`span`,20),Sk(2740,` detail`),vu(2741,`br`),Kg()()(),Qc(2742,`td`,21)(2743,`code`,186),Sk(2744,`PoTableDetail`),Kg()(),Qc(2745,`td`,24)(2746,`em`)(2747,`strong`),Sk(2748,`(opcional)`),Kg()(),Qc(2749,`p`),Sk(2750,`Define um objeto que segue a interface `),Qc(2751,`code`),Sk(2752,`PoTableDetail`),Kg(),Sk(2753,`, para as colunas de detalhes. Por exemplo:`),Kg(),Qc(2754,`pre`)(2755,`code`),Sk(2756,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),Kg()()()(),Qc(2757,`tr`,187)(2758,`td`,18)(2759,`div`,19)(2760,`span`,20),Sk(2761,` disabled`),vu(2762,`br`),Kg()()(),Qc(2763,`td`,21)(2764,`code`,111),Sk(2765,`Function`),Kg()(),Qc(2766,`td`,24)(2767,`em`)(2768,`strong`),Sk(2769,`(opcional)`),Kg()(),Qc(2770,`p`),Sk(2771,`Função que deve retornar um booleano para habilitar ou desabilitar o `),Qc(2772,`em`),Sk(2773,`link`),Kg(),Sk(2774,` e sua ação.`),Kg(),Qc(2775,`blockquote`)(2776,`p`),Sk(2777,`Propriedade disponível nas colunas do tipo `),Qc(2778,`code`),Sk(2779,`link`),Kg(),Sk(2780,`.`),Kg()()()(),Qc(2781,`tr`,188)(2782,`td`,18)(2783,`div`,19)(2784,`span`,20),Sk(2785,` format`),vu(2786,`br`),Kg()()(),Qc(2787,`td`,21)(2788,`code`,41),Sk(2789,`string`),Kg()(),Qc(2790,`td`,24)(2791,`em`)(2792,`strong`),Sk(2793,`(opcional)`),Kg()(),Qc(2794,`p`),Sk(2795,`Formato de exibição do valor da coluna.`),Kg(),Qc(2796,`table`)(2797,`thead`)(2798,`tr`)(2799,`th`),Sk(2800,`Formatação`),Kg(),Qc(2801,`th`),Sk(2802,`Type da Coluna`),Kg(),Qc(2803,`th`),Sk(2804,`Descrição`),Kg(),Qc(2805,`th`),Sk(2806,`Exemplos`),Kg()()(),Qc(2807,`tbody`)(2808,`tr`)(2809,`td`),Sk(2810,`Monetário`),Kg(),Qc(2811,`td`)(2812,`code`),Sk(2813,`currency`),Kg()(),Qc(2814,`td`),Sk(2815,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),Kg(),Qc(2816,`td`)(2817,`code`),Sk(2818,`'BRL'`),Kg(),Sk(2819,`, `),Qc(2820,`code`),Sk(2821,`'USD'`),Kg(),Sk(2822,`, `),Qc(2823,`code`),Sk(2824,`'EUR'`),Kg(),Sk(2825,`, `),Qc(2826,`code`),Sk(2827,`'RUB'`),Kg()()(),Qc(2828,`tr`)(2829,`td`),Sk(2830,`Data`),Kg(),Qc(2831,`td`)(2832,`code`),Sk(2833,`date`),Kg()(),Qc(2834,`td`),Sk(2835,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),Kg(),Qc(2836,`td`)(2837,`code`),Sk(2838,`'dd/MM/yyyy'`),Kg(),Sk(2839,`, `),Qc(2840,`code`),Sk(2841,`'dd-MM-yy'`),Kg(),Sk(2842,`, `),Qc(2843,`code`),Sk(2844,`'mm/dd/yyyy'`),Kg()()(),Qc(2845,`tr`)(2846,`td`),Sk(2847,`Data/Hora`),Kg(),Qc(2848,`td`)(2849,`code`),Sk(2850,`dateTime`),Kg()(),Qc(2851,`td`),Sk(2852,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),Kg(),Qc(2853,`td`)(2854,`code`),Sk(2855,`'dd/MM/yyyy HH:mm'`),Kg(),Sk(2856,`, `),Qc(2857,`code`),Sk(2858,`'dd/MM/yyyy HH:mm:ss'`),Kg(),Sk(2859,`, `),Qc(2860,`code`),Sk(2861,`'dd/MM/yyyy HH:mm:ss.SSS'`),Kg(),Sk(2862,`, `),Qc(2863,`code`),Sk(2864,`'MM/dd/yyyy hh:mm a'`),Kg(),Sk(2865,`, `),Qc(2866,`code`),Sk(2867,`'yyyy-MM-dd HH:mm'`),Kg(),Sk(2868,`, `),Qc(2869,`code`),Sk(2870,`'short'`),Kg(),Sk(2871,`, `),Qc(2872,`code`),Sk(2873,`'medium'`),Kg()()(),Qc(2874,`tr`)(2875,`td`),Sk(2876,`Hora`),Kg(),Qc(2877,`td`)(2878,`code`),Sk(2879,`time`),Kg()(),Qc(2880,`td`),Sk(2881,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),Kg(),Qc(2882,`td`)(2883,`code`),Sk(2884,`'HH:mm'`),Kg(),Sk(2885,`, `),Qc(2886,`code`),Sk(2887,`'HH:mm:ss.ffffff'`),Kg(),Sk(2888,`, `),Qc(2889,`code`),Sk(2890,`'HH:mm:ss.ff'`),Kg(),Sk(2891,`, `),Qc(2892,`code`),Sk(2893,`'mm:ss.fff'`),Kg()()(),Qc(2894,`tr`)(2895,`td`),Sk(2896,`Número`),Kg(),Qc(2897,`td`)(2898,`code`),Sk(2899,`number`),Kg()(),Qc(2900,`td`),Sk(2901,`Aceita um valor seguindo o padrão `),Qc(2902,`a`,189)(2903,`strong`),Sk(2904,`DecimalPipe`),Kg()(),Sk(2905,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),Kg(),Qc(2906,`td`)(2907,`code`),Sk(2908,`'1.2-5'`),Kg(),Sk(2909,` (ex.: `),Qc(2910,`code`),Sk(2911,`50`),Kg(),Sk(2912,` → `),Qc(2913,`code`),Sk(2914,`50.00`),Kg(),Sk(2915,`)`),Kg()()()(),Qc(2916,`p`),Sk(2917,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),Kg()()(),Qc(2918,`tr`,190)(2919,`td`,18)(2920,`div`,19)(2921,`span`,20),Sk(2922,` icons`),vu(2923,`br`),Kg()()(),Qc(2924,`td`,21)(2925,`code`,191),Sk(2926,`Array<PoTableColumnIcon>`),Kg()(),Qc(2927,`td`,24)(2928,`em`)(2929,`strong`),Sk(2930,`(opcional)`),Kg()(),Qc(2931,`p`),Sk(2932,`Define um `),Qc(2933,`em`),Sk(2934,`array`),Kg(),Sk(2935,` de objetos para colunas de ícones que irá sobrepor os valores como `),Qc(2936,`code`),Sk(2937,`action`),Kg(),Sk(2938,` e `),Qc(2939,`code`),Sk(2940,`color`),Kg(),Sk(2941,`
definidos na coluna, \xE0 partir do `),Qc(2942,`em`),Sk(2943,`value`),Kg(),Sk(2944,` da `),Qc(2945,`a`,192)(2946,`code`),Sk(2947,`PoTableColumnIcon`),Kg()(),Sk(2948,`, por exemplo:`),Kg(),Qc(2949,`pre`)(2950,`code`),Sk(2951,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),Kg()(),Qc(2952,`pre`)(2953,`code`),Sk(2954,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),Kg()()()(),Qc(2955,`tr`,193)(2956,`td`,18)(2957,`div`,19)(2958,`span`,20),Sk(2959,` label`),vu(2960,`br`),Kg()()(),Qc(2961,`td`,21)(2962,`code`,41),Sk(2963,`string`),Kg()(),Qc(2964,`td`,24)(2965,`em`)(2966,`strong`),Sk(2967,`(opcional)`),Kg()(),Qc(2968,`p`),Sk(2969,`Texto para título da coluna.`),Kg(),Qc(2970,`p`),Sk(2971,`Caso não seja informado, será utilizado como `),Qc(2972,`em`),Sk(2973,`label`),Kg(),Sk(2974,` o valor da propriedade `),Qc(2975,`em`),Sk(2976,`property`),Kg(),Sk(2977,` com a primeira letra em maiúsculo.`),Kg()()(),Qc(2978,`tr`,194)(2979,`td`,18)(2980,`div`,19)(2981,`span`,20),Sk(2982,` labels`),vu(2983,`br`),Kg()()(),Qc(2984,`td`,21)(2985,`code`,195),Sk(2986,`Array<PoTableColumnLabel>`),Kg()(),Qc(2987,`td`,24)(2988,`em`)(2989,`strong`),Sk(2990,`(opcional)`),Kg()(),Qc(2991,`p`),Sk(2992,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Qc(2993,`code`),Sk(2994,`PoTableColumnLabel`),Kg(),Sk(2995,` na qual devem ser definidas os labels. Por exemplo:`),Kg(),Qc(2996,`pre`)(2997,`code`),Sk(2998,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),Kg()()()(),Qc(2999,`tr`,196)(3e3,`td`,18)(3001,`div`,19)(3002,`span`,20),Sk(3003,` link`),vu(3004,`br`),Kg()()(),Qc(3005,`td`,21)(3006,`code`,41),Sk(3007,`string`),Kg()(),Qc(3008,`td`,24)(3009,`em`)(3010,`strong`),Sk(3011,`(opcional)`),Kg()(),Qc(3012,`p`),Sk(3013,`Define o nome da propriedade que conterá o `),Qc(3014,`code`),Sk(3015,`link`),Kg(),Sk(3016,` a ser redirecionado.`),Kg()()(),Qc(3017,`tr`,197)(3018,`td`,18)(3019,`div`,19)(3020,`span`,20),Sk(3021,` mask`),vu(3022,`br`),Kg()()(),Qc(3023,`td`,21)(3024,`code`,41),Sk(3025,`string`),Kg()(),Qc(3026,`td`,24)(3027,`em`)(3028,`strong`),Sk(3029,`(opcional)`),Kg()(),Qc(3030,`p`),Sk(3031,`Define uma máscara para formatação do valor exibido na coluna.`),Kg(),Qc(3032,`p`),Sk(3033,`A máscara é aplicada somente para `),Qc(3034,`strong`),Sk(3035,`exibição`),Kg(),Sk(3036,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),Kg(),Qc(3037,`p`),Sk(3038,`Caracteres válidos para a máscara:`),Kg(),Qc(3039,`ul`)(3040,`li`)(3041,`code`),Sk(3042,`9`),Kg(),Sk(3043,` : aceita um dígito numérico (0-9).`),Kg(),Qc(3044,`li`)(3045,`code`),Sk(3046,`@`),Kg(),Sk(3047,` : aceita um caractere alfabético (a-z, A-Z).`),Kg(),Qc(3048,`li`)(3049,`code`),Sk(3050,`w`),Kg(),Sk(3051,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),Kg(),Qc(3052,`li`),Sk(3053,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Qc(3054,`code`),Sk(3055,`.`),Kg(),Sk(3056,`, `),Qc(3057,`code`),Sk(3058,`-`),Kg(),Sk(3059,`, `),Qc(3060,`code`),Sk(3061,`/`),Kg(),Sk(3062,`, `),Qc(3063,`code`),Sk(3064,`(`),Kg(),Sk(3065,`, `),Qc(3066,`code`),Sk(3067,`)`),Kg(),Sk(3068,`, `),Qc(3069,`code`),Sk(3070,`+`),Kg(),Sk(3071,`, `),vu(3072,`code`),Sk(3073,`).`),Kg()(),Qc(3074,`p`),Sk(3075,`Exemplos de uso:`),Kg(),Qc(3076,`pre`)(3077,`code`),Sk(3078,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),Kg()(),Qc(3079,`blockquote`)(3080,`p`),Sk(3081,`Esta propriedade é utilizada apenas para colunas do tipo `),Qc(3082,`code`),Sk(3083,`string`),Kg(),Sk(3084,` (padr\xE3o).
Caso a coluna possua um `),Qc(3085,`code`),Sk(3086,`type`),Kg(),Sk(3087,` diferente de `),Qc(3088,`code`),Sk(3089,`string`),Kg(),Sk(3090,`, a máscara será ignorada.`),Kg()()()(),Qc(3091,`tr`,198)(3092,`td`,18)(3093,`div`,19)(3094,`span`,20),Sk(3095,` property`),vu(3096,`br`),Kg()()(),Qc(3097,`td`,21)(3098,`code`,41),Sk(3099,`string`),Kg()(),Qc(3100,`td`,24)(3101,`em`)(3102,`strong`),Sk(3103,`(opcional)`),Kg()(),Qc(3104,`p`),Sk(3105,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),Kg(),Qc(3106,`pre`)(3107,`code`),Sk(3108,`{ property: 'address.street', label: 'Rua' }
`),Kg()()()(),Qc(3109,`tr`,199)(3110,`td`,18)(3111,`div`,19)(3112,`span`,20),Sk(3113,` searchAiIgnore`),vu(3114,`br`),Kg()()(),Qc(3115,`td`,21)(3116,`code`,22),Sk(3117,`boolean`),Kg()(),Qc(3118,`td`,24)(3119,`em`)(3120,`strong`),Sk(3121,`(opcional)`),Kg()(),Qc(3122,`p`),Sk(3123,`Quando `),Qc(3124,`code`),Sk(3125,`true`),Kg(),Sk(3126,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),Qc(3127,`code`),Sk(3128,`p-search-ai-field`),Kg(),Sk(3129,`, independentemente de estar visível na tabela.`),Kg(),Qc(3130,`p`),Sk(3131,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),Kg()()(),Qc(3132,`tr`,200)(3133,`td`,18)(3134,`div`,19)(3135,`span`,20),Sk(3136,` sortable`),vu(3137,`br`),Kg()()(),Qc(3138,`td`,21)(3139,`code`,22),Sk(3140,`boolean`),Kg()(),Qc(3141,`td`,24)(3142,`em`)(3143,`strong`),Sk(3144,`(opcional)`),Kg()(),Qc(3145,`p`),Sk(3146,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),Kg()()(),Qc(3147,`tr`,201)(3148,`td`,18)(3149,`div`,19)(3150,`span`,20),Sk(3151,` subtitles`),vu(3152,`br`),Kg()()(),Qc(3153,`td`,21)(3154,`code`,202),Sk(3155,`Array<PoTableSubtitleColumn>`),Kg()(),Qc(3156,`td`,24)(3157,`em`)(3158,`strong`),Sk(3159,`(opcional)`),Kg()(),Qc(3160,`p`),Sk(3161,`Define um array de objetos para as colunas de legenda. Onde, `),Qc(3162,`code`),Sk(3163,`subtitles`),Kg(),Sk(3164,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),Kg(),Qc(3165,`pre`)(3166,`code`),Sk(3167,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),Kg()(),Qc(3168,`p`),Sk(3169,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),Kg()()(),Qc(3170,`tr`,203)(3171,`td`,18)(3172,`div`,19)(3173,`span`,20),Sk(3174,` tooltip`),vu(3175,`br`),Kg()()(),Qc(3176,`td`,21)(3177,`code`,41),Sk(3178,`string`),Kg()(),Qc(3179,`td`,24)(3180,`em`)(3181,`strong`),Sk(3182,`(opcional)`),Kg()(),Qc(3183,`p`),Sk(3184,`Define um texto de ajuda que será exibido ao passar o `),Qc(3185,`em`),Sk(3186,`mouse`),Kg(),Sk(3187,` sobre um texto.`),Kg(),Qc(3188,`blockquote`)(3189,`p`),Sk(3190,`O tooltip só será visível se for uma coluna do tipo `),Qc(3191,`em`),Sk(3192,`link`),Kg(),Sk(3193,`.`),Kg()(),Qc(3194,`blockquote`)(3195,`p`),Sk(3196,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Qc(3197,`em`),Sk(3198,`tooltip`),Kg(),Sk(3199,` e será exibido justamente o conteúdo da célula.`),Kg()()()(),Qc(3200,`tr`,204)(3201,`td`,18)(3202,`div`,19)(3203,`span`,20),Sk(3204,` type`),vu(3205,`br`),Kg()()(),Qc(3206,`td`,21)(3207,`code`,41),Sk(3208,`string`),Kg()(),Qc(3209,`td`,24)(3210,`em`)(3211,`strong`),Sk(3212,`(opcional)`),Kg()(),Qc(3213,`p`),Sk(3214,`Tipo da coluna.`),Kg(),Qc(3215,`p`),Sk(3216,`Valores válidos:`),Kg(),Qc(3217,`ul`)(3218,`li`)(3219,`p`)(3220,`code`),Sk(3221,`boolean`),Kg(),Sk(3222,`: Exibirá por padrão `),Qc(3223,`code`),Sk(3224,`Sim`),Kg(),Sk(3225,` e `),Qc(3226,`code`),Sk(3227,`Não`),Kg(),Sk(3228,` de acordo com os valores `),Qc(3229,`em`),Sk(3230,`booleanos`),Kg(),Sk(3231,`.`),Kg(),Qc(3232,`blockquote`)(3233,`p`),Sk(3234,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),Qc(3235,`code`),Sk(3236,`boolean`),Kg(),Sk(3237,` desta interface.`),Kg()()(),Qc(3238,`li`)(3239,`p`)(3240,`code`),Sk(3241,`currency`),Kg(),Sk(3242,`: valores monetários.`),Kg()(),Qc(3243,`li`)(3244,`p`)(3245,`code`),Sk(3246,`date`),Kg(),Sk(3247,`: valor de datas.`),Kg(),Qc(3248,`ul`)(3249,`li`),Sk(3250,`Aceita os tipos `),Qc(3251,`em`),Sk(3252,`string`),Kg(),Sk(3253,` e `),Qc(3254,`em`),Sk(3255,`Date`),Kg(),Sk(3256,` padr\xE3o do Javascript,
por exemplo: `),Qc(3257,`code`),Sk(3258,`'2017-11-28'`),Kg(),Sk(3259,` ou `),Qc(3260,`code`),Sk(3261,`new Date(2017, 10, 28)`),Kg(),Sk(3262,`.`),Kg()()(),Qc(3263,`li`)(3264,`p`)(3265,`code`),Sk(3266,`dateTime`),Kg(),Sk(3267,`: valor de data com horário.`),Kg(),Qc(3268,`ul`)(3269,`li`),Sk(3270,`Aceita o tipo `),Qc(3271,`em`),Sk(3272,`string`),Kg(),Sk(3273,` no formato `),Qc(3274,`strong`),Sk(3275,`ISO-8601`),Kg(),Sk(3276,` extendido `),Qc(3277,`strong`),Sk(3278,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),Kg(),Sk(3279,`
ou `),Qc(3280,`strong`),Sk(3281,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),Kg(),Sk(3282,` (sem segundos),
e o tipo `),Qc(3283,`em`),Sk(3284,`Date`),Kg(),Sk(3285,` padrão do Javascript, por exemplo: `),Qc(3286,`code`),Sk(3287,`'2017-11-28T00:00:00-02:00'`),Kg(),Sk(3288,`, `),Qc(3289,`code`),Sk(3290,`'2017-11-28T14:30-02:00'`),Kg(),Sk(3291,` ou `),Qc(3292,`code`),Sk(3293,`new Date(2017, 10, 28)`),Kg(),Sk(3294,`.`),Kg(),Qc(3295,`li`),Sk(3296,`A formatação de exibição pode ser configurada pela propriedade `),Qc(3297,`code`),Sk(3298,`format`),Kg(),Sk(3299,`.`),Kg()()(),Qc(3300,`li`)(3301,`p`)(3302,`code`),Sk(3303,`detail`),Kg(),Sk(3304,`: array de objetos para o master-detail.`),Kg(),Qc(3305,`ul`)(3306,`li`),Sk(3307,`Incompatível com `),Qc(3308,`code`),Sk(3309,`virtual-scroll`),Kg(),Sk(3310,`, que requer altura fixa nas linhas.`),Kg()()(),Qc(3311,`li`)(3312,`p`)(3313,`code`),Sk(3314,`icon`),Kg(),Sk(3315,`: `),Qc(3316,`em`),Sk(3317,`array`),Kg(),Sk(3318,` de `),Qc(3319,`em`),Sk(3320,`string`),Kg(),Sk(3321,` ou objetos para a coluna de ícones.`),Kg()(),Qc(3322,`li`)(3323,`p`)(3324,`code`),Sk(3325,`label`),Kg(),Sk(3326,`: texto com destaque.`),Kg()(),Qc(3327,`li`)(3328,`p`)(3329,`code`),Sk(3330,`link`),Kg(),Sk(3331,`: habilita link na coluna para ação ou navegação.`),Kg()(),Qc(3332,`li`)(3333,`p`)(3334,`code`),Sk(3335,`number`),Kg(),Sk(3336,`: valores numéricos.`),Kg()(),Qc(3337,`li`)(3338,`p`)(3339,`code`),Sk(3340,`string`),Kg(),Sk(3341,`: textos.`),Kg()(),Qc(3342,`li`)(3343,`p`)(3344,`code`),Sk(3345,`subtitle`),Kg(),Sk(3346,`: array de objetos para a coluna de legenda.`),Kg()(),Qc(3347,`li`)(3348,`p`)(3349,`code`),Sk(3350,`time`),Kg(),Sk(3351,`: valor de horário.`),Kg(),Qc(3352,`ul`)(3353,`li`),Sk(3354,`Aceita o tipo `),Qc(3355,`em`),Sk(3356,`string`),Kg(),Sk(3357,` nos formatos `),Qc(3358,`strong`),Sk(3359,`'HH:mm:ss'`),Kg(),Sk(3360,` ou `),Qc(3361,`strong`),Sk(3362,`'HH:mm:ss.ffffff'`),Kg(),Sk(3363,`, por exemplo: `),Qc(3364,`code`),Sk(3365,`'23:12:45'`),Kg(),Sk(3366,`.`),Kg()()(),Qc(3367,`li`)(3368,`p`)(3369,`code`),Sk(3370,`cellTemplate`),Kg(),Sk(3371,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Qc(3372,`a`,8),Sk(3373,`PoTableCellTemplate`),Kg(),Sk(3374,`.`),Kg()(),Qc(3375,`li`)(3376,`p`)(3377,`code`),Sk(3378,`columnTemplate`),Kg(),Sk(3379,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Qc(3380,`a`,7),Sk(3381,`PoTableColumnTemplate`),Kg(),Sk(3382,`.`),Kg()()()()(),Qc(3383,`tr`,205)(3384,`td`,18)(3385,`div`,19)(3386,`span`,20),Sk(3387,` visible`),vu(3388,`br`),Kg()()(),Qc(3389,`td`,21)(3390,`code`,22),Sk(3391,`boolean`),Kg()(),Qc(3392,`td`,24)(3393,`em`)(3394,`strong`),Sk(3395,`(opcional)`),Kg()(),Qc(3396,`p`),Sk(3397,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Qc(3398,`strong`),Sk(3399,`gerenciador de colunas`),Kg(),Sk(3400,`.`),Kg(),Qc(3401,`blockquote`)(3402,`p`),Sk(3403,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),Qc(3404,`code`),Sk(3405,`p-max-columns`),Kg(),Sk(3406,`.`),Kg()()()(),Qc(3407,`tr`,206)(3408,`td`,18)(3409,`div`,19)(3410,`span`,20),Sk(3411,` width`),vu(3412,`br`),Kg()()(),Qc(3413,`td`,21)(3414,`code`,41),Sk(3415,`string`),Kg()(),Qc(3416,`td`,24)(3417,`em`)(3418,`strong`),Sk(3419,`(opcional)`),Kg()(),Qc(3420,`p`),Sk(3421,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),Kg(),Qc(3422,`ul`)(3423,`li`),Sk(3424,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),Kg(),Qc(3425,`li`),Sk(3426,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),Kg()()()()(),Qc(3427,`h4`,207)(3428,`code`,5),Sk(3429,`PoTableLiterals`),Kg()(),Qc(3430,`div`,2)(3431,`p`),Sk(3432,`Interface para definição das literais usadas no `),Qc(3433,`code`),Sk(3434,`po-table`),Kg(),Sk(3435,`.`),Kg()(),Qc(3436,`h4`,13),Sk(3437,`Propriedades`),Kg(),Qc(3438,`table`,14)(3439,`tr`,15)(3440,`th`,16),Sk(3441,`Nome`),Kg(),Qc(3442,`th`,16),Sk(3443,`Tipo`),Kg(),Qc(3444,`th`,16),Sk(3445,`Descrição`),Kg()(),Qc(3446,`tr`,208)(3447,`td`,18)(3448,`div`,19)(3449,`span`,20),Sk(3450,` bodyDelete`),vu(3451,`br`),Kg()()(),Qc(3452,`td`,21)(3453,`code`,41),Sk(3454,`string`),Kg()(),Qc(3455,`td`,24)(3456,`em`)(3457,`strong`),Sk(3458,`(opcional)`),Kg()(),Qc(3459,`p`),Sk(3460,`Texto no corpo do Modal de exclusão`),Kg()()(),Qc(3461,`tr`,209)(3462,`td`,18)(3463,`div`,19)(3464,`span`,20),Sk(3465,` cancel`),vu(3466,`br`),Kg()()(),Qc(3467,`td`,21)(3468,`code`,41),Sk(3469,`string`),Kg()(),Qc(3470,`td`,24)(3471,`em`)(3472,`strong`),Sk(3473,`(opcional)`),Kg()(),Qc(3474,`p`),Sk(3475,`Texto no Modal para cancelar a exclusão`),Kg()()(),Qc(3476,`tr`,210)(3477,`td`,18)(3478,`div`,19)(3479,`span`,20),Sk(3480,` columnsManager`),vu(3481,`br`),Kg()()(),Qc(3482,`td`,21)(3483,`code`,41),Sk(3484,`string`),Kg()(),Qc(3485,`td`,24)(3486,`em`)(3487,`strong`),Sk(3488,`(opcional)`),Kg()(),Qc(3489,`p`),Sk(3490,`Texto do `),Qc(3491,`strong`),Sk(3492,`Gerenciador de colunas`),Kg(),Sk(3493,` localizado no canto superior direito da tabela.`),Kg()()(),Qc(3494,`tr`,211)(3495,`td`,18)(3496,`div`,19)(3497,`span`,20),Sk(3498,` completeSubtitle`),vu(3499,`br`),Kg()()(),Qc(3500,`td`,21)(3501,`code`,41),Sk(3502,`string`),Kg()(),Qc(3503,`td`,24)(3504,`em`)(3505,`strong`),Sk(3506,`(opcional)`),Kg()(),Qc(3507,`p`),Sk(3508,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),Kg()()(),Qc(3509,`tr`,212)(3510,`td`,18)(3511,`div`,19)(3512,`span`,20),Sk(3513,` delete`),vu(3514,`br`),Kg()()(),Qc(3515,`td`,21)(3516,`code`,41),Sk(3517,`string`),Kg()(),Qc(3518,`td`,24)(3519,`em`)(3520,`strong`),Sk(3521,`(opcional)`),Kg()(),Qc(3522,`p`),Sk(3523,`Texto no Modal para confirmar a exclusão`),Kg()()(),Qc(3524,`tr`,213)(3525,`td`,18)(3526,`div`,19)(3527,`span`,20),Sk(3528,` deleteApiError`),vu(3529,`br`),Kg()()(),Qc(3530,`td`,21)(3531,`code`,41),Sk(3532,`string`),Kg()(),Qc(3533,`td`,24)(3534,`em`)(3535,`strong`),Sk(3536,`(opcional)`),Kg()(),Qc(3537,`p`),Sk(3538,`Texto de notificação de erro na requisição Delete`),Kg()()(),Qc(3539,`tr`,214)(3540,`td`,18)(3541,`div`,19)(3542,`span`,20),Sk(3543,` deleteSuccessful`),vu(3544,`br`),Kg()()(),Qc(3545,`td`,21)(3546,`code`,41),Sk(3547,`string`),Kg()(),Qc(3548,`td`,24)(3549,`em`)(3550,`strong`),Sk(3551,`(opcional)`),Kg()(),Qc(3552,`p`),Sk(3553,`Texto de notificação de remoção com sucesso`),Kg()()(),Qc(3554,`tr`,215)(3555,`td`,18)(3556,`div`,19)(3557,`span`,20),Sk(3558,` loadMoreData`),vu(3559,`br`),Kg()()(),Qc(3560,`td`,21)(3561,`code`,41),Sk(3562,`string`),Kg()(),Qc(3563,`td`,24)(3564,`em`)(3565,`strong`),Sk(3566,`(opcional)`),Kg()(),Qc(3567,`p`),Sk(3568,`Texto do botão de `),Qc(3569,`strong`),Sk(3570,`Carregar mais resultados`),Kg(),Sk(3571,` localizado no rodapé da tabela.`),Kg()()(),Qc(3572,`tr`,216)(3573,`td`,18)(3574,`div`,19)(3575,`span`,20),Sk(3576,` loadingData`),vu(3577,`br`),Kg()()(),Qc(3578,`td`,21)(3579,`code`,41),Sk(3580,`string`),Kg()(),Qc(3581,`td`,24)(3582,`em`)(3583,`strong`),Sk(3584,`(opcional)`),Kg()(),Qc(3585,`p`),Sk(3586,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),Kg()()(),Qc(3587,`tr`,217)(3588,`td`,18)(3589,`div`,19)(3590,`span`,20),Sk(3591,` multipleItems`),vu(3592,`br`),Kg()()(),Qc(3593,`td`,21)(3594,`code`,41),Sk(3595,`string`),Kg()(),Qc(3596,`td`,24)(3597,`em`)(3598,`strong`),Sk(3599,`(opcional)`),Kg()(),Qc(3600,`p`),Sk(3601,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),Kg()()(),Qc(3602,`tr`,218)(3603,`td`,18)(3604,`div`,19)(3605,`span`,20),Sk(3606,` noColumns`),vu(3607,`br`),Kg()()(),Qc(3608,`td`,21)(3609,`code`,41),Sk(3610,`string`),Kg()(),Qc(3611,`td`,24)(3612,`em`)(3613,`strong`),Sk(3614,`(opcional)`),Kg()(),Qc(3615,`p`),Sk(3616,`Texto exibido quando não existem colunas definidas para a tabela.`),Kg()()(),Qc(3617,`tr`,219)(3618,`td`,18)(3619,`div`,19)(3620,`span`,20),Sk(3621,` noData`),vu(3622,`br`),Kg()()(),Qc(3623,`td`,21)(3624,`code`,41),Sk(3625,`string`),Kg()(),Qc(3626,`td`,24)(3627,`em`)(3628,`strong`),Sk(3629,`(opcional)`),Kg()(),Qc(3630,`p`),Sk(3631,`Texto exibido quando não existem itens para serem exibidos na tabela.`),Kg()()(),Qc(3632,`tr`,220)(3633,`td`,18)(3634,`div`,19)(3635,`span`,20),Sk(3636,` noItem`),vu(3637,`br`),Kg()()(),Qc(3638,`td`,21)(3639,`code`,41),Sk(3640,`string`),Kg()(),Qc(3641,`td`,24)(3642,`em`)(3643,`strong`),Sk(3644,`(opcional)`),Kg()(),Qc(3645,`p`),Sk(3646,`Texto exibido quando nenhum item for selecionado no checkbox.`),Kg()()(),Qc(3647,`tr`,221)(3648,`td`,18)(3649,`div`,19)(3650,`span`,20),Sk(3651,` noVisibleColumn`),vu(3652,`br`),Kg()()(),Qc(3653,`td`,21)(3654,`code`,41),Sk(3655,`string`),Kg()(),Qc(3656,`td`,24)(3657,`em`)(3658,`strong`),Sk(3659,`(opcional)`),Kg()(),Qc(3660,`p`),Sk(3661,`Texto exibido quando não existem colunas visíveis para a tabela.`),Kg()()(),Qc(3662,`tr`,222)(3663,`td`,18)(3664,`div`,19)(3665,`span`,20),Sk(3666,` oneItem`),vu(3667,`br`),Kg()()(),Qc(3668,`td`,21)(3669,`code`,41),Sk(3670,`string`),Kg()(),Qc(3671,`td`,24)(3672,`em`)(3673,`strong`),Sk(3674,`(opcional)`),Kg()(),Qc(3675,`p`),Sk(3676,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),Kg()()(),Qc(3677,`tr`,223)(3678,`td`,18)(3679,`div`,19)(3680,`span`,20),Sk(3681,` searchAiPlaceholder`),vu(3682,`br`),Kg()()(),Qc(3683,`td`,21)(3684,`code`,41),Sk(3685,`string`),Kg()(),Qc(3686,`td`,24)(3687,`em`)(3688,`strong`),Sk(3689,`(opcional)`),Kg()(),Qc(3690,`p`),Sk(3691,`Texto exibido como placeholder padrão no campo de busca por IA (`),Qc(3692,`code`),Sk(3693,`p-search-ai-field`),Kg(),Sk(3694,`) quando nenhum `),Qc(3695,`code`),Sk(3696,`placeholder`),Kg(),Sk(3697,` é informado.`),Kg()()(),Qc(3698,`tr`,224)(3699,`td`,18)(3700,`div`,19)(3701,`span`,20),Sk(3702,` seeCompleteSubtitle`),vu(3703,`br`),Kg()()(),Qc(3704,`td`,21)(3705,`code`,41),Sk(3706,`string`),Kg()(),Qc(3707,`td`,24)(3708,`em`)(3709,`strong`),Sk(3710,`(opcional)`),Kg()(),Qc(3711,`p`),Sk(3712,`Texto do botão `),Qc(3713,`strong`),Sk(3714,`Ver legenda completa`),Kg(),Sk(3715,` que aparece quando o rodapé de legendas é maior que a tabela.`),Kg()()()(),Qc(3716,`h4`,225)(3717,`code`,5),Sk(3718,`PoTableSearchAiField`),Kg()(),Qc(3719,`div`,2)(3720,`p`),Sk(3721,`Interface de configuração da busca por IA integrada ao `),Qc(3722,`code`),Sk(3723,`po-table`),Kg(),Sk(3724,`, utilizada pela
propriedade `),Qc(3725,`code`),Sk(3726,`p-search-ai-field`),Kg(),Sk(3727,`.`),Kg(),Qc(3728,`p`),Sk(3729,`Quando configurada, a tabela renderiza um campo `),Qc(3730,`code`),Sk(3731,`po-search-ai`),Kg(),Sk(3732,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),Qc(3733,`code`),Sk(3734,`po-search`),Kg(),Sk(3735,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),Qc(3736,`code`),Sk(3737,`apply`),Kg(),Sk(3738,`.`),Kg(),Qc(3739,`h4`),Sk(3740,`Endpoint de IA (`),Qc(3741,`code`),Sk(3742,`url`),Kg(),Sk(3743,`)`),Kg(),Qc(3744,`p`),Sk(3745,`O campo `),Qc(3746,`code`),Sk(3747,`url`),Kg(),Sk(3748,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),Qc(3749,`code`),Sk(3750,`po-search-ai`),Kg(),Sk(3751,`: recebe `),Qc(3752,`code`),Sk(3753,`{ query, columns }`),Kg(),Sk(3754,` via `),Qc(3755,`code`),Sk(3756,`POST`),Kg(),Sk(3757,` e responde com
`),Qc(3758,`code`),Sk(3759,`{ filter, description, confidence }`),Kg(),Sk(3760,`.`),Kg(),Qc(3761,`blockquote`)(3762,`p`),Sk(3763,`A integração com a LLM e a guarda de chaves devem ocorrer `),Qc(3764,`strong`),Sk(3765,`no backend`),Kg(),Sk(3766,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),Qc(3767,`a`,73)(3768,`code`),Sk(3769,`po-sample-api`),Kg()(),Sk(3770,`.`),Kg()(),Qc(3771,`h4`),Sk(3772,`Colunas enviadas à IA`),Kg(),Qc(3773,`p`),Sk(3774,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),Qc(3775,`code`),Sk(3776,`p-columns`),Kg(),Sk(3777,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),Qc(3778,`code`),Sk(3779,`searchAiIgnore: true`),Kg(),Sk(3780,`. O campo `),Qc(3781,`code`),Sk(3782,`columns`),Kg(),Sk(3783,` permite sobrescrever esse comportamento.`),Kg(),Qc(3784,`h4`),Sk(3785,`Estratégia de aplicação do filtro (`),Qc(3786,`code`),Sk(3787,`apply`),Kg(),Sk(3788,`)`),Kg(),Qc(3789,`table`)(3790,`thead`)(3791,`tr`)(3792,`th`),Sk(3793,`Valor`),Kg(),Qc(3794,`th`),Sk(3795,`Comportamento`),Kg()()(),Qc(3796,`tbody`)(3797,`tr`)(3798,`td`)(3799,`code`),Sk(3800,`'auto'`),Kg(),Sk(3801,` (padrão)`),Kg(),Qc(3802,`td`),Sk(3803,`Modo serviço: envia `),Qc(3804,`code`),Sk(3805,`$filter`),Kg(),Sk(3806,` ao `),Qc(3807,`code`),Sk(3808,`p-service-api`),Kg(),Sk(3809,`; modo local: aplica o parser OData interno sobre `),Qc(3810,`code`),Sk(3811,`p-items`),Kg(),Sk(3812,`.`),Kg()(),Qc(3813,`tr`)(3814,`td`)(3815,`code`),Sk(3816,`'parser'`),Kg()(),Qc(3817,`td`),Sk(3818,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),Kg()(),Qc(3819,`tr`)(3820,`td`)(3821,`code`),Sk(3822,`'server'`),Kg()(),Qc(3823,`td`),Sk(3824,`Sempre delega o filtro ao `),Qc(3825,`code`),Sk(3826,`p-service-api`),Kg(),Sk(3827,` via `),Qc(3828,`code`),Sk(3829,`$filter`),Kg(),Sk(3830,`.`),Kg()(),Qc(3831,`tr`)(3832,`td`)(3833,`code`),Sk(3834,`'none'`),Kg()(),Qc(3835,`td`),Sk(3836,`Não aplica o filtro; apenas emite `),Qc(3837,`code`),Sk(3838,`p-search-ai-result`),Kg(),Sk(3839,` para o desenvolvedor tratar.`),Kg()(),Qc(3840,`tr`)(3841,`td`)(3842,`code`),Sk(3843,`(result) => void`),Kg()(),Qc(3844,`td`),Sk(3845,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),Kg()()()()(),Qc(3846,`h4`,13),Sk(3847,`Propriedades`),Kg(),Qc(3848,`table`,14)(3849,`tr`,15)(3850,`th`,16),Sk(3851,`Nome`),Kg(),Qc(3852,`th`,16),Sk(3853,`Tipo`),Kg(),Qc(3854,`th`,16),Sk(3855,`Descrição`),Kg()(),Qc(3856,`tr`,226)(3857,`td`,18)(3858,`div`,19)(3859,`span`,20),Sk(3860,` apply`),vu(3861,`br`),Kg()()(),Qc(3862,`td`,21)(3863,`code`,227),Sk(3864,`'auto' `),Kg(),Qc(3865,`code`,228),Sk(3866,` 'parser' `),Kg(),Qc(3867,`code`,229),Sk(3868,` 'server' `),Kg(),Qc(3869,`code`,230),Sk(3870,` 'none' `),Kg(),Qc(3871,`code`,231),Sk(3872,` ((result: PoSearchAiResult) => void)`),Kg()(),Qc(3873,`td`,24)(3874,`em`)(3875,`strong`),Sk(3876,`(opcional)`),Kg()(),Qc(3877,`p`),Sk(3878,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),Kg(),Qc(3879,`ul`)(3880,`li`)(3881,`code`),Sk(3882,`'auto'`),Kg(),Qc(3883,`em`),Sk(3884,`(padrão)`),Kg(),Sk(3885,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),Qc(3886,`code`),Sk(3887,`$filter`),Kg(),Sk(3888,` ao `),Qc(3889,`code`),Sk(3890,`p-service-api`),Kg(),Sk(3891,`; modo local usa o parser
OData interno sobre `),Qc(3892,`code`),Sk(3893,`p-items`),Kg(),Sk(3894,`.`),Kg(),Qc(3895,`li`)(3896,`code`),Sk(3897,`'parser'`),Kg(),Sk(3898,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),Kg(),Qc(3899,`li`)(3900,`code`),Sk(3901,`'server'`),Kg(),Sk(3902,`: sempre envia `),Qc(3903,`code`),Sk(3904,`$filter`),Kg(),Sk(3905,` ao `),Qc(3906,`code`),Sk(3907,`p-service-api`),Kg(),Sk(3908,`, independentemente
do modo da tabela.`),Kg(),Qc(3909,`li`)(3910,`code`),Sk(3911,`'none'`),Kg(),Sk(3912,`: não aplica o filtro; apenas emite `),Qc(3913,`code`),Sk(3914,`p-search-ai-result`),Kg(),Sk(3915,`.`),Kg(),Qc(3916,`li`)(3917,`code`),Sk(3918,`(result: PoSearchAiResult) => void`),Kg(),Sk(3919,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),Kg()()()(),Qc(3920,`tr`,232)(3921,`td`,18)(3922,`div`,19)(3923,`span`,20),Sk(3924,` columns`),vu(3925,`br`),Kg()()(),Qc(3926,`td`,21)(3927,`code`,233),Sk(3928,`Array<PoSearchAiColumn>`),Kg()(),Qc(3929,`td`,24)(3930,`em`)(3931,`strong`),Sk(3932,`(opcional)`),Kg()(),Qc(3933,`p`),Sk(3934,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),Qc(3935,`code`),Sk(3936,`p-columns`),Kg(),Sk(3937,` da tabela, excluindo colunas com
`),Qc(3938,`code`),Sk(3939,`visible: false`),Kg(),Sk(3940,` ou `),Qc(3941,`code`),Sk(3942,`searchAiIgnore: true`),Kg(),Sk(3943,`.`),Kg()()(),Qc(3944,`tr`,234)(3945,`td`,18)(3946,`div`,19)(3947,`span`,20),Sk(3948,` literals`),vu(3949,`br`),Kg()()(),Qc(3950,`td`,21)(3951,`code`,235),Sk(3952,`PoSearchAiLiterals`),Kg()(),Qc(3953,`td`,24)(3954,`em`)(3955,`strong`),Sk(3956,`(opcional)`),Kg()(),Qc(3957,`p`),Sk(3958,`Objeto com os literais usados pelo `),Qc(3959,`code`),Sk(3960,`po-search-ai`),Kg(),Sk(3961,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),Kg()()(),Qc(3962,`tr`,236)(3963,`td`,18)(3964,`div`,19)(3965,`span`,20),Sk(3966,` minConfidence`),vu(3967,`br`),Kg()()(),Qc(3968,`td`,21)(3969,`code`,52),Sk(3970,`number`),Kg()(),Qc(3971,`td`,24)(3972,`em`)(3973,`strong`),Sk(3974,`(opcional)`),Kg()(),Qc(3975,`p`),Sk(3976,`Nível mínimo de confiança (`),Qc(3977,`code`),Sk(3978,`0.0`),Kg(),Sk(3979,` a `),Qc(3980,`code`),Sk(3981,`1.0`),Kg(),Sk(3982,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),Qc(3983,`code`),Sk(3984,`p-search-ai-low-confidence`),Kg(),Sk(3985,` é emitido em vez de `),Qc(3986,`code`),Sk(3987,`p-search-ai-result`),Kg(),Sk(3988,`.`),Kg()()(),Qc(3989,`tr`,237)(3990,`td`,18)(3991,`div`,19)(3992,`span`,20),Sk(3993,` placeholder`),vu(3994,`br`),Kg()()(),Qc(3995,`td`,21)(3996,`code`,41),Sk(3997,`string`),Kg()(),Qc(3998,`td`,24)(3999,`em`)(4e3,`strong`),Sk(4001,`(opcional)`),Kg()(),Qc(4002,`p`),Sk(4003,`Texto exibido como placeholder no campo de busca por IA.`),Kg()()(),Qc(4004,`tr`,238)(4005,`td`,18)(4006,`div`,19)(4007,`span`,20),Sk(4008,` timeout`),vu(4009,`br`),Kg()()(),Qc(4010,`td`,21)(4011,`code`,52),Sk(4012,`number`),Kg()(),Qc(4013,`td`,24)(4014,`em`)(4015,`strong`),Sk(4016,`(opcional)`),Kg()(),Qc(4017,`p`),Sk(4018,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),Kg()()(),Qc(4019,`tr`,239)(4020,`td`,18)(4021,`div`,19)(4022,`span`,20),Sk(4023,` url`),vu(4024,`br`),Kg()()(),Qc(4025,`td`,21)(4026,`code`,41),Sk(4027,`string`),Kg()(),Qc(4028,`td`,24)(4029,`p`),Sk(4030,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),Qc(4031,`code`),Sk(4032,`po-search-ai`),Kg(),Sk(4033,` via `),Qc(4034,`code`),Sk(4035,`p-url`),Kg(),Sk(4036,`.`),Kg(),Qc(4037,`p`),Sk(4038,`O endpoint deve seguir o contrato do backend de referência (`),Qc(4039,`code`),Sk(4040,`po-sample-api`),Kg(),Sk(4041,`):`),Kg(),Qc(4042,`ul`)(4043,`li`),Sk(4044,`Recebe: `),Qc(4045,`code`),Sk(4046,`POST { query: string, columns: PoSearchAiColumn[] }`),Kg()(),Qc(4047,`li`),Sk(4048,`Responde: `),Qc(4049,`code`),Sk(4050,`{ filter: string, description: string, confidence: number }`),Kg()()()()()(),Qc(4051,`h4`,240)(4052,`code`,5),Sk(4053,`PoTableColumnIcon`),Kg()(),Qc(4054,`div`,2)(4055,`p`),vu(4056,`a`,241),Kg(),Qc(4057,`p`),Sk(4058,`Interface que define a coluna com ícone(s) do `),Qc(4059,`code`),Sk(4060,`po-table`),Kg(),Sk(4061,`.`),Kg()(),Qc(4062,`h4`,13),Sk(4063,`Propriedades`),Kg(),Qc(4064,`table`,14)(4065,`tr`,15)(4066,`th`,16),Sk(4067,`Nome`),Kg(),Qc(4068,`th`,16),Sk(4069,`Tipo`),Kg(),Qc(4070,`th`,16),Sk(4071,`Descrição`),Kg()(),Qc(4072,`tr`,242)(4073,`td`,18)(4074,`div`,19)(4075,`span`,20),Sk(4076,` action`),vu(4077,`br`),Kg()()(),Qc(4078,`td`,21)(4079,`code`,111),Sk(4080,`Function`),Kg()(),Qc(4081,`td`,24)(4082,`em`)(4083,`strong`),Sk(4084,`(opcional)`),Kg()(),Qc(4085,`p`),Sk(4086,`Define a ação que será executada ao clicar no ícone.`),Kg()()(),Qc(4087,`tr`,243)(4088,`td`,18)(4089,`div`,19)(4090,`span`,20),Sk(4091,` color`),vu(4092,`br`),Kg()()(),Qc(4093,`td`,21)(4094,`code`,41),Sk(4095,`string `),Kg(),Qc(4096,`code`,111),Sk(4097,` Function`),Kg()(),Qc(4098,`td`,24)(4099,`em`)(4100,`strong`),Sk(4101,`(opcional)`),Kg()(),Qc(4102,`p`),Sk(4103,`Define a cor do ícone.`),Kg(),Qc(4104,`p`),Sk(4105,`Valores válidos:`),Kg(),Qc(4106,`ul`)(4107,`li`),vu(4108,`span`,138),Qc(4109,`code`),Sk(4110,`color-01`),Kg()(),Qc(4111,`li`),vu(4112,`span`,139),Qc(4113,`code`),Sk(4114,`color-02`),Kg()(),Qc(4115,`li`),vu(4116,`span`,140),Qc(4117,`code`),Sk(4118,`color-03`),Kg()(),Qc(4119,`li`),vu(4120,`span`,141),Qc(4121,`code`),Sk(4122,`color-04`),Kg()(),Qc(4123,`li`),vu(4124,`span`,142),Qc(4125,`code`),Sk(4126,`color-05`),Kg()(),Qc(4127,`li`),vu(4128,`span`,143),Qc(4129,`code`),Sk(4130,`color-06`),Kg()(),Qc(4131,`li`),vu(4132,`span`,144),Qc(4133,`code`),Sk(4134,`color-07`),Kg()(),Qc(4135,`li`),vu(4136,`span`,145),Qc(4137,`code`),Sk(4138,`color-08`),Kg()(),Qc(4139,`li`),vu(4140,`span`,146),Qc(4141,`code`),Sk(4142,`color-09`),Kg()(),Qc(4143,`li`),vu(4144,`span`,147),Qc(4145,`code`),Sk(4146,`color-10`),Kg()(),Qc(4147,`li`),vu(4148,`span`,148),Qc(4149,`code`),Sk(4150,`color-11`),Kg()(),Qc(4151,`li`),vu(4152,`span`,149),Qc(4153,`code`),Sk(4154,`color-12`),Kg()()(),Qc(4155,`blockquote`)(4156,`p`),Sk(4157,`Também é possível utilizar as 35 cores da paleta `),Qc(4158,`strong`),Sk(4159,`Caption Tag Colors`),Kg(),Sk(4160,`:`),Kg()(),Qc(4161,`ul`)(4162,`li`),vu(4163,`span`,150),Qc(4164,`code`),Sk(4165,`caption-tag-01`),Kg(),vu(4166,`span`,151),Qc(4167,`code`),Sk(4168,`caption-tag-02`),Kg(),vu(4169,`span`,152),Qc(4170,`code`),Sk(4171,`caption-tag-03`),Kg(),vu(4172,`span`,153),Qc(4173,`code`),Sk(4174,`caption-tag-04`),Kg(),vu(4175,`span`,154),Qc(4176,`code`),Sk(4177,`caption-tag-05`),Kg()(),Qc(4178,`li`),vu(4179,`span`,155),Qc(4180,`code`),Sk(4181,`caption-tag-06`),Kg(),vu(4182,`span`,156),Qc(4183,`code`),Sk(4184,`caption-tag-07`),Kg(),vu(4185,`span`,157),Qc(4186,`code`),Sk(4187,`caption-tag-08`),Kg(),vu(4188,`span`,158),Qc(4189,`code`),Sk(4190,`caption-tag-09`),Kg(),vu(4191,`span`,159),Qc(4192,`code`),Sk(4193,`caption-tag-10`),Kg()(),Qc(4194,`li`),vu(4195,`span`,160),Qc(4196,`code`),Sk(4197,`caption-tag-11`),Kg(),vu(4198,`span`,161),Qc(4199,`code`),Sk(4200,`caption-tag-12`),Kg(),vu(4201,`span`,162),Qc(4202,`code`),Sk(4203,`caption-tag-13`),Kg(),vu(4204,`span`,163),Qc(4205,`code`),Sk(4206,`caption-tag-14`),Kg(),vu(4207,`span`,164),Qc(4208,`code`),Sk(4209,`caption-tag-15`),Kg()(),Qc(4210,`li`),vu(4211,`span`,165),Qc(4212,`code`),Sk(4213,`caption-tag-16`),Kg(),vu(4214,`span`,166),Qc(4215,`code`),Sk(4216,`caption-tag-17`),Kg(),vu(4217,`span`,167),Qc(4218,`code`),Sk(4219,`caption-tag-18`),Kg(),vu(4220,`span`,168),Qc(4221,`code`),Sk(4222,`caption-tag-19`),Kg(),vu(4223,`span`,169),Qc(4224,`code`),Sk(4225,`caption-tag-20`),Kg()(),Qc(4226,`li`),vu(4227,`span`,170),Qc(4228,`code`),Sk(4229,`caption-tag-21`),Kg(),vu(4230,`span`,171),Qc(4231,`code`),Sk(4232,`caption-tag-22`),Kg(),vu(4233,`span`,172),Qc(4234,`code`),Sk(4235,`caption-tag-23`),Kg(),vu(4236,`span`,173),Qc(4237,`code`),Sk(4238,`caption-tag-24`),Kg(),vu(4239,`span`,174),Qc(4240,`code`),Sk(4241,`caption-tag-25`),Kg()(),Qc(4242,`li`),vu(4243,`span`,175),Qc(4244,`code`),Sk(4245,`caption-tag-26`),Kg(),vu(4246,`span`,176),Qc(4247,`code`),Sk(4248,`caption-tag-27`),Kg(),vu(4249,`span`,177),Qc(4250,`code`),Sk(4251,`caption-tag-28`),Kg(),vu(4252,`span`,178),Qc(4253,`code`),Sk(4254,`caption-tag-29`),Kg(),vu(4255,`span`,179),Qc(4256,`code`),Sk(4257,`caption-tag-30`),Kg()(),Qc(4258,`li`),vu(4259,`span`,180),Qc(4260,`code`),Sk(4261,`caption-tag-31`),Kg(),vu(4262,`span`,181),Qc(4263,`code`),Sk(4264,`caption-tag-32`),Kg(),vu(4265,`span`,182),Qc(4266,`code`),Sk(4267,`caption-tag-33`),Kg(),vu(4268,`span`,183),Qc(4269,`code`),Sk(4270,`caption-tag-34`),Kg(),vu(4271,`span`,184),Qc(4272,`code`),Sk(4273,`caption-tag-35`),Kg()()()()(),Qc(4274,`tr`,244)(4275,`td`,18)(4276,`div`,19)(4277,`span`,20),Sk(4278,` disabled`),vu(4279,`br`),Kg()()(),Qc(4280,`td`,21)(4281,`code`,111),Sk(4282,`Function`),Kg()(),Qc(4283,`td`,24)(4284,`em`)(4285,`strong`),Sk(4286,`(opcional)`),Kg()(),Qc(4287,`p`),Sk(4288,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),Kg()()(),Qc(4289,`tr`,245)(4290,`td`,18)(4291,`div`,19)(4292,`span`,20),Sk(4293,` icon`),vu(4294,`br`),Kg()()(),Qc(4295,`td`,21)(4296,`code`,41),Sk(4297,`string `),Kg(),Qc(4298,`code`,114),Sk(4299,` TemplateRef<void>`),Kg()(),Qc(4300,`td`,24)(4301,`em`)(4302,`strong`),Sk(4303,`(opcional)`),Kg()(),Qc(4304,`p`),Sk(4305,`É possível usar qualquer um dos ícones da `),Qc(4306,`a`,27),Sk(4307,`Biblioteca de ícones`),Kg(),Sk(4308,`. conforme exemplo abaixo:`),Kg(),Qc(4309,`pre`)(4310,`code`),Sk(4311,`[ { icon: 'an an-plus' } ]
`),Kg()(),Qc(4312,`p`),Sk(4313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Kg(),Qc(4314,`pre`)(4315,`code`),Sk(4316,`[ {  icon: 'fas fa-plus' } ]
`),Kg()(),Qc(4317,`p`),Sk(4318,`Outra opção seria a customização do ícone através do `),Qc(4319,`code`),Sk(4320,`TemplateRef`),Kg(),Sk(4321,`, conforme exemplo abaixo:
`),Qc(4322,`code`),Sk(4323,`component.html`),Kg(),Sk(4324,`:`),Kg(),Qc(4325,`pre`)(4326,`code`),Sk(4327,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),Kg()(),Qc(4328,`p`)(4329,`code`),Sk(4330,`component.ts`),Kg(),Sk(4331,`:`),Kg(),Qc(4332,`pre`)(4333,`code`),Sk(4334,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),Kg()(),Qc(4335,`blockquote`)(4336,`p`),Sk(4337,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),Qc(4338,`code`),Sk(4339,`value`),Kg(),Sk(4340,`.`),Kg()()()(),Qc(4341,`tr`,246)(4342,`td`,18)(4343,`div`,19)(4344,`span`,20),Sk(4345,` tooltip`),vu(4346,`br`),Kg()()(),Qc(4347,`td`,21)(4348,`code`,41),Sk(4349,`string`),Kg()(),Qc(4350,`td`,24)(4351,`em`)(4352,`strong`),Sk(4353,`(opcional)`),Kg()(),Qc(4354,`p`),Sk(4355,`Define um texto de ajuda que será exibido ao passar o `),Qc(4356,`em`),Sk(4357,`mouse`),Kg(),Sk(4358,` em cima do ícone.`),Kg()()(),Qc(4359,`tr`,247)(4360,`td`,18)(4361,`div`,19)(4362,`span`,20),Sk(4363,` value`),vu(4364,`br`),Kg()()(),Qc(4365,`td`,21)(4366,`code`,41),Sk(4367,`string`),Kg()(),Qc(4368,`td`,24)(4369,`p`),Sk(4370,`Define o valor do ícone que será exibido.`),Kg()()()(),Qc(4371,`h4`,248)(4372,`code`,5),Sk(4373,`PoTableColumnLabel`),Kg()(),Qc(4374,`div`,2)(4375,`p`),Sk(4376,`Interface para configuração das colunas de labels do `),Qc(4377,`code`),Sk(4378,`po-table`),Kg(),Sk(4379,`.`),Kg()(),Qc(4380,`h4`,13),Sk(4381,`Propriedades`),Kg(),Qc(4382,`table`,14)(4383,`tr`,15)(4384,`th`,16),Sk(4385,`Nome`),Kg(),Qc(4386,`th`,16),Sk(4387,`Tipo`),Kg(),Qc(4388,`th`,16),Sk(4389,`Descrição`),Kg()(),Qc(4390,`tr`,249)(4391,`td`,18)(4392,`div`,19)(4393,`span`,20),Sk(4394,` color`),vu(4395,`br`),Kg()()(),Qc(4396,`td`,21)(4397,`code`,41),Sk(4398,`string`),Kg()(),Qc(4399,`td`,24)(4400,`em`)(4401,`strong`),Sk(4402,`(opcional)`),Kg()(),Qc(4403,`p`),Sk(4404,`Define a cor do label.`),Kg(),Qc(4405,`p`),Sk(4406,`Valores válidos:`),Kg(),Qc(4407,`ul`)(4408,`li`),vu(4409,`span`,138),Qc(4410,`code`),Sk(4411,`color-01`),Kg()(),Qc(4412,`li`),vu(4413,`span`,139),Qc(4414,`code`),Sk(4415,`color-02`),Kg()(),Qc(4416,`li`),vu(4417,`span`,140),Qc(4418,`code`),Sk(4419,`color-03`),Kg()(),Qc(4420,`li`),vu(4421,`span`,141),Qc(4422,`code`),Sk(4423,`color-04`),Kg()(),Qc(4424,`li`),vu(4425,`span`,142),Qc(4426,`code`),Sk(4427,`color-05`),Kg()(),Qc(4428,`li`),vu(4429,`span`,143),Qc(4430,`code`),Sk(4431,`color-06`),Kg()(),Qc(4432,`li`),vu(4433,`span`,144),Qc(4434,`code`),Sk(4435,`color-07`),Kg()(),Qc(4436,`li`),vu(4437,`span`,145),Qc(4438,`code`),Sk(4439,`color-08`),Kg()(),Qc(4440,`li`),vu(4441,`span`,146),Qc(4442,`code`),Sk(4443,`color-09`),Kg()(),Qc(4444,`li`),vu(4445,`span`,147),Qc(4446,`code`),Sk(4447,`color-10`),Kg()(),Qc(4448,`li`),vu(4449,`span`,148),Qc(4450,`code`),Sk(4451,`color-11`),Kg()(),Qc(4452,`li`),vu(4453,`span`,149),Qc(4454,`code`),Sk(4455,`color-12`),Kg()()(),Qc(4456,`blockquote`)(4457,`p`),Sk(4458,`Também é possível utilizar as 35 cores da paleta `),Qc(4459,`strong`),Sk(4460,`Caption Tag Colors`),Kg(),Sk(4461,`:`),Kg()(),Qc(4462,`ul`)(4463,`li`),vu(4464,`span`,150),Qc(4465,`code`),Sk(4466,`caption-tag-01`),Kg(),vu(4467,`span`,151),Qc(4468,`code`),Sk(4469,`caption-tag-02`),Kg(),vu(4470,`span`,152),Qc(4471,`code`),Sk(4472,`caption-tag-03`),Kg(),vu(4473,`span`,153),Qc(4474,`code`),Sk(4475,`caption-tag-04`),Kg(),vu(4476,`span`,154),Qc(4477,`code`),Sk(4478,`caption-tag-05`),Kg()(),Qc(4479,`li`),vu(4480,`span`,155),Qc(4481,`code`),Sk(4482,`caption-tag-06`),Kg(),vu(4483,`span`,156),Qc(4484,`code`),Sk(4485,`caption-tag-07`),Kg(),vu(4486,`span`,157),Qc(4487,`code`),Sk(4488,`caption-tag-08`),Kg(),vu(4489,`span`,158),Qc(4490,`code`),Sk(4491,`caption-tag-09`),Kg(),vu(4492,`span`,159),Qc(4493,`code`),Sk(4494,`caption-tag-10`),Kg()(),Qc(4495,`li`),vu(4496,`span`,160),Qc(4497,`code`),Sk(4498,`caption-tag-11`),Kg(),vu(4499,`span`,161),Qc(4500,`code`),Sk(4501,`caption-tag-12`),Kg(),vu(4502,`span`,162),Qc(4503,`code`),Sk(4504,`caption-tag-13`),Kg(),vu(4505,`span`,163),Qc(4506,`code`),Sk(4507,`caption-tag-14`),Kg(),vu(4508,`span`,164),Qc(4509,`code`),Sk(4510,`caption-tag-15`),Kg()(),Qc(4511,`li`),vu(4512,`span`,165),Qc(4513,`code`),Sk(4514,`caption-tag-16`),Kg(),vu(4515,`span`,166),Qc(4516,`code`),Sk(4517,`caption-tag-17`),Kg(),vu(4518,`span`,167),Qc(4519,`code`),Sk(4520,`caption-tag-18`),Kg(),vu(4521,`span`,168),Qc(4522,`code`),Sk(4523,`caption-tag-19`),Kg(),vu(4524,`span`,169),Qc(4525,`code`),Sk(4526,`caption-tag-20`),Kg()(),Qc(4527,`li`),vu(4528,`span`,170),Qc(4529,`code`),Sk(4530,`caption-tag-21`),Kg(),vu(4531,`span`,171),Qc(4532,`code`),Sk(4533,`caption-tag-22`),Kg(),vu(4534,`span`,172),Qc(4535,`code`),Sk(4536,`caption-tag-23`),Kg(),vu(4537,`span`,173),Qc(4538,`code`),Sk(4539,`caption-tag-24`),Kg(),vu(4540,`span`,174),Qc(4541,`code`),Sk(4542,`caption-tag-25`),Kg()(),Qc(4543,`li`),vu(4544,`span`,175),Qc(4545,`code`),Sk(4546,`caption-tag-26`),Kg(),vu(4547,`span`,176),Qc(4548,`code`),Sk(4549,`caption-tag-27`),Kg(),vu(4550,`span`,177),Qc(4551,`code`),Sk(4552,`caption-tag-28`),Kg(),vu(4553,`span`,178),Qc(4554,`code`),Sk(4555,`caption-tag-29`),Kg(),vu(4556,`span`,179),Qc(4557,`code`),Sk(4558,`caption-tag-30`),Kg()(),Qc(4559,`li`),vu(4560,`span`,180),Qc(4561,`code`),Sk(4562,`caption-tag-31`),Kg(),vu(4563,`span`,181),Qc(4564,`code`),Sk(4565,`caption-tag-32`),Kg(),vu(4566,`span`,182),Qc(4567,`code`),Sk(4568,`caption-tag-33`),Kg(),vu(4569,`span`,183),Qc(4570,`code`),Sk(4571,`caption-tag-34`),Kg(),vu(4572,`span`,184),Qc(4573,`code`),Sk(4574,`caption-tag-35`),Kg()()(),Qc(4575,`p`),Sk(4576,`Exemplo de uso:`),Kg(),Qc(4577,`pre`)(4578,`code`),Sk(4579,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),Kg()()()(),Qc(4580,`tr`,250)(4581,`td`,18)(4582,`div`,19)(4583,`span`,20),Sk(4584,` icon`),vu(4585,`br`),Kg()()(),Qc(4586,`td`,21)(4587,`code`,22),Sk(4588,`boolean `),Kg(),Qc(4589,`code`,41),Sk(4590,` string `),Kg(),Qc(4591,`code`,114),Sk(4592,` TemplateRef<void>`),Kg()(),Qc(4593,`td`,24)(4594,`em`)(4595,`strong`),Sk(4596,`(opcional)`),Kg()(),Qc(4597,`p`),Sk(4598,`Define ou ativa um ícone que será exibido ao lado do valor da `),Qc(4599,`em`),Sk(4600,`tag`),Kg(),Sk(4601,`.`),Kg(),Qc(4602,`p`),Sk(4603,`Quando `),Qc(4604,`code`),Sk(4605,`p-type`),Kg(),Sk(4606,` estiver definida, basta informar um valor igual a `),Qc(4607,`code`),Sk(4608,`true`),Kg(),Sk(4609,` para que o ícone seja exibido conforme descrições abaixo:`),Kg(),Qc(4610,`ul`)(4611,`li`),vu(4612,`span`,251),Sk(4613,` - `),Qc(4614,`code`),Sk(4615,`success`),Kg()(),Qc(4616,`li`),vu(4617,`span`,252),Sk(4618,` - `),Qc(4619,`code`),Sk(4620,`warning`),Kg()(),Qc(4621,`li`),vu(4622,`span`,253),Sk(4623,` - `),Qc(4624,`code`),Sk(4625,`danger`),Kg()(),Qc(4626,`li`),vu(4627,`span`,254),Sk(4628,` - `),Qc(4629,`code`),Sk(4630,`info`),Kg()()(),Qc(4631,`p`),Sk(4632,`Também É possível usar qualquer um dos ícones da `),Qc(4633,`a`,27),Sk(4634,`Biblioteca de ícones`),Kg(),Sk(4635,`. conforme exemplo abaixo:`),Kg(),Qc(4636,`pre`)(4637,`code`),Sk(4638,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),Kg()(),Qc(4639,`p`),Sk(4640,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(4641,`em`),Sk(4642,`Font Awesome`),Kg(),Sk(4643,`, da seguinte forma:`),Kg(),Qc(4644,`pre`)(4645,`code`),Sk(4646,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),Kg()(),Qc(4647,`p`),Sk(4648,`Outra opção seria a customização do ícone através do `),Qc(4649,`code`),Sk(4650,`TemplateRef`),Kg(),Sk(4651,`, conforme exemplo abaixo:`),Kg(),Qc(4652,`pre`)(4653,`code`),Sk(4654,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(4655,`blockquote`)(4656,`p`),Sk(4657,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(4658,`code`),Sk(4659,`font-size: inherit`),Kg(),Sk(4660,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(4661,`tr`,255)(4662,`td`,18)(4663,`div`,19)(4664,`span`,20),Sk(4665,` label`),vu(4666,`br`),Kg()()(),Qc(4667,`td`,21)(4668,`code`,41),Sk(4669,`string`),Kg()(),Qc(4670,`td`,24)(4671,`p`),Sk(4672,`Texto que será exibido na coluna.`),Kg()()(),Qc(4673,`tr`,256)(4674,`td`,18)(4675,`div`,19)(4676,`span`,20),Sk(4677,` textColor`),vu(4678,`br`),Kg()()(),Qc(4679,`td`,21)(4680,`code`,41),Sk(4681,`string`),Kg()(),Qc(4682,`td`,24)(4683,`em`)(4684,`strong`),Sk(4685,`(opcional)`),Kg()(),Qc(4686,`p`),Sk(4687,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),Kg(),Qc(4688,`ul`)(4689,`li`)(4690,`p`),Sk(4691,`Hexadeximal, por exemplo `),Qc(4692,`code`),Sk(4693,`#c64840`),Kg(),Sk(4694,`;`),Kg()(),Qc(4695,`li`)(4696,`p`),Sk(4697,`RGB, como `),Qc(4698,`code`),Sk(4699,`rgb(0, 0, 165)`),Kg(),Sk(4700,`;`),Kg()(),Qc(4701,`li`)(4702,`p`),Sk(4703,`O nome da cor, por exemplo `),Qc(4704,`code`),Sk(4705,`blue`),Kg(),Sk(4706,`;`),Kg()(),Qc(4707,`li`)(4708,`p`),Sk(4709,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Kg(),Qc(4710,`ul`)(4711,`li`),vu(4712,`span`,138),Qc(4713,`code`),Sk(4714,`color-01`),Kg()(),Qc(4715,`li`),vu(4716,`span`,139),Qc(4717,`code`),Sk(4718,`color-02`),Kg()(),Qc(4719,`li`),vu(4720,`span`,140),Qc(4721,`code`),Sk(4722,`color-03`),Kg()(),Qc(4723,`li`),vu(4724,`span`,141),Qc(4725,`code`),Sk(4726,`color-04`),Kg()(),Qc(4727,`li`),vu(4728,`span`,142),Qc(4729,`code`),Sk(4730,`color-05`),Kg()(),Qc(4731,`li`),vu(4732,`span`,143),Qc(4733,`code`),Sk(4734,`color-06`),Kg()(),Qc(4735,`li`),vu(4736,`span`,144),Qc(4737,`code`),Sk(4738,`color-07`),Kg()(),Qc(4739,`li`),vu(4740,`span`,145),Qc(4741,`code`),Sk(4742,`color-08`),Kg()(),Qc(4743,`li`),vu(4744,`span`,146),Qc(4745,`code`),Sk(4746,`color-09`),Kg()(),Qc(4747,`li`),vu(4748,`span`,147),Qc(4749,`code`),Sk(4750,`color-10`),Kg()(),Qc(4751,`li`),vu(4752,`span`,148),Qc(4753,`code`),Sk(4754,`color-11`),Kg()(),Qc(4755,`li`),vu(4756,`span`,149),Qc(4757,`code`),Sk(4758,`color-12`),Kg()()()(),Qc(4759,`li`)(4760,`p`),Sk(4761,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),Kg()()(),Qc(4762,`blockquote`)(4763,`p`)(4764,`strong`),Sk(4765,`Atenção:`),Kg(),Sk(4766,` A propriedade `),Qc(4767,`code`),Sk(4768,`p-type`),Kg(),Sk(4769,` sobrepõe esta definição.`),Kg()(),Qc(4770,`blockquote`)(4771,`p`)(4772,`strong`),Sk(4773,`Atenção:`),Kg(),Sk(4774,` As cores da paleta `),Qc(4775,`strong`),Sk(4776,`Caption Tag Colors`),Kg(),Sk(4777,` (`),Qc(4778,`code`),Sk(4779,`caption-tag-01`),Kg(),Sk(4780,` a `),Qc(4781,`code`),Sk(4782,`caption-tag-35`),Kg(),Sk(4783,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),Kg()()()(),Qc(4784,`tr`,257)(4785,`td`,18)(4786,`div`,19)(4787,`span`,20),Sk(4788,` tooltip`),vu(4789,`br`),Kg()()(),Qc(4790,`td`,21)(4791,`code`,41),Sk(4792,`string`),Kg()(),Qc(4793,`td`,24)(4794,`em`)(4795,`strong`),Sk(4796,`(opcional)`),Kg()(),Qc(4797,`p`),Sk(4798,`Define um texto de ajuda que será exibido ao passar o `),Qc(4799,`em`),Sk(4800,`mouse`),Kg(),Sk(4801,` em cima do `),Qc(4802,`em`),Sk(4803,`label`),Kg(),Sk(4804,`.`),Kg(),Qc(4805,`blockquote`)(4806,`p`),Sk(4807,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),Kg()()()(),Qc(4808,`tr`,258)(4809,`td`,18)(4810,`div`,19)(4811,`span`,20),Sk(4812,` type`),vu(4813,`br`),Kg()()(),Qc(4814,`td`,21)(4815,`code`,259),Sk(4816,`PoTagType`),Kg()(),Qc(4817,`td`,24)(4818,`em`)(4819,`strong`),Sk(4820,`(opcional)`),Kg()(),Qc(4821,`p`),Sk(4822,`Define o tipo da `),Qc(4823,`em`),Sk(4824,`tag`),Kg(),Sk(4825,`.`),Kg(),Qc(4826,`p`),Sk(4827,`Valores válidos:`),Kg(),Qc(4828,`ul`)(4829,`li`)(4830,`code`),Sk(4831,`success`),Kg(),Sk(4832,`: cor verde utilizada para simbolizar sucesso ou êxito.`),Kg(),Qc(4833,`li`)(4834,`code`),Sk(4835,`warning`),Kg(),Sk(4836,`: cor amarela que representa aviso ou advertência.`),Kg(),Qc(4837,`li`)(4838,`code`),Sk(4839,`danger`),Kg(),Sk(4840,`: cor vermelha para erro ou aviso crítico.`),Kg(),Qc(4841,`li`)(4842,`code`),Sk(4843,`info`),Kg(),Sk(4844,`: cor cinza escuro que caracteriza conteúdo informativo.`),Kg()(),Qc(4845,`blockquote`)(4846,`p`),Sk(4847,`Quando esta propriedade for definida, irá sobrepor a definição de `),Qc(4848,`code`),Sk(4849,`p-color`),Kg(),Sk(4850,` e `),Qc(4851,`code`),Sk(4852,`p-icon`),Kg(),Sk(4853,` somente será exibido caso seja `),Qc(4854,`code`),Sk(4855,`true`),Kg(),Sk(4856,`.`),Kg()()()(),Qc(4857,`tr`,260)(4858,`td`,18)(4859,`div`,19)(4860,`span`,20),Sk(4861,` value`),vu(4862,`br`),Kg()()(),Qc(4863,`td`,21)(4864,`code`,41),Sk(4865,`string `),Kg(),Qc(4866,`code`,52),Sk(4867,` number`),Kg()(),Qc(4868,`td`,24)(4869,`p`),Sk(4870,`Valor que será usado como referência para exibição do conteúdo na coluna.`),Kg()()()(),Qc(4871,`h4`,261)(4872,`code`,5),Sk(4873,`PoTableDetailColumn`),Kg()(),Qc(4874,`div`,2)(4875,`p`),Sk(4876,`Interface para configuração das colunas do `),Qc(4877,`code`),Sk(4878,`po-table-detail`),Kg(),Sk(4879,`.`),Kg()(),Qc(4880,`h4`,13),Sk(4881,`Propriedades`),Kg(),Qc(4882,`table`,14)(4883,`tr`,15)(4884,`th`,16),Sk(4885,`Nome`),Kg(),Qc(4886,`th`,16),Sk(4887,`Tipo`),Kg(),Qc(4888,`th`,16),Sk(4889,`Descrição`),Kg()(),Qc(4890,`tr`,262)(4891,`td`,18)(4892,`div`,19)(4893,`span`,20),Sk(4894,` format`),vu(4895,`br`),Kg()()(),Qc(4896,`td`,21)(4897,`code`,41),Sk(4898,`string`),Kg()(),Qc(4899,`td`,24)(4900,`em`)(4901,`strong`),Sk(4902,`(opcional)`),Kg()(),Qc(4903,`p`),Sk(4904,`Formato de exibição do valor da coluna:`),Kg(),Qc(4905,`ul`)(4906,`li`)(4907,`p`),Sk(4908,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),Kg()(),Qc(4909,`li`)(4910,`p`),Sk(4911,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Kg()(),Qc(4912,`li`)(4913,`p`),Sk(4914,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),Kg()(),Qc(4915,`li`)(4916,`p`),Sk(4917,`Formato para números (number): aceita um valor seguindo o padrão `),Qc(4918,`a`,263)(4919,`strong`),Sk(4920,`DecimalPipe`),Kg()(),Sk(4921,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),Kg(),Qc(4922,`ul`)(4923,`li`),Sk(4924,`Valor de entrada: `),Qc(4925,`code`),Sk(4926,`50`),Kg(),Sk(4927,` e valor para formatação: `),Qc(4928,`code`),Sk(4929,`'1.2-5'`),Kg(),Sk(4930,` o resultado será: `),Qc(4931,`code`),Sk(4932,`50.00`),Kg()()()()()()(),Qc(4933,`tr`,264)(4934,`td`,18)(4935,`div`,19)(4936,`span`,20),Sk(4937,` label`),vu(4938,`br`),Kg()()(),Qc(4939,`td`,21)(4940,`code`,41),Sk(4941,`string`),Kg()(),Qc(4942,`td`,24)(4943,`em`)(4944,`strong`),Sk(4945,`(opcional)`),Kg()(),Qc(4946,`p`),Sk(4947,`Texto para título da coluna.`),Kg()()(),Qc(4948,`tr`,265)(4949,`td`,18)(4950,`div`,19)(4951,`span`,20),Sk(4952,` property`),vu(4953,`br`),Kg()()(),Qc(4954,`td`,21)(4955,`code`,41),Sk(4956,`string`),Kg()(),Qc(4957,`td`,24)(4958,`em`)(4959,`strong`),Sk(4960,`(opcional)`),Kg()(),Qc(4961,`p`),Sk(4962,`Nome identificador da coluna.`),Kg()()(),Qc(4963,`tr`,266)(4964,`td`,18)(4965,`div`,19)(4966,`span`,20),Sk(4967,` type`),vu(4968,`br`),Kg()()(),Qc(4969,`td`,21)(4970,`code`,41),Sk(4971,`string`),Kg()(),Qc(4972,`td`,24)(4973,`em`)(4974,`strong`),Sk(4975,`(opcional)`),Kg()(),Qc(4976,`p`),Sk(4977,`Tipo da coluna.`),Kg(),Qc(4978,`p`),Sk(4979,`Valores válidos:`),Kg(),Qc(4980,`ul`)(4981,`li`)(4982,`p`)(4983,`code`),Sk(4984,`currency`),Kg(),Sk(4985,`: valores monetários.`),Kg()(),Qc(4986,`li`)(4987,`p`)(4988,`code`),Sk(4989,`date`),Kg(),Sk(4990,`: valor de datas.`),Kg(),Qc(4991,`ul`)(4992,`li`),Sk(4993,`Aceita os tipos `),Qc(4994,`em`),Sk(4995,`string`),Kg(),Sk(4996,` e `),Qc(4997,`em`),Sk(4998,`Date`),Kg(),Sk(4999,` padr\xE3o do Javascript,
por exemplo: `),Qc(5e3,`code`),Sk(5001,`'2017-11-28'`),Kg(),Sk(5002,` ou `),Qc(5003,`code`),Sk(5004,`new Date(2017, 10, 28)`),Kg(),Sk(5005,`.`),Kg()()(),Qc(5006,`li`)(5007,`p`)(5008,`code`),Sk(5009,`time`),Kg(),Sk(5010,`: valor de horário.`),Kg()(),Qc(5011,`li`)(5012,`p`)(5013,`code`),Sk(5014,`number`),Kg(),Sk(5015,`: valores numéricos.`),Kg()(),Qc(5016,`li`)(5017,`p`)(5018,`code`),Sk(5019,`dateTime`),Kg(),Sk(5020,`: valor de data com horário.`),Kg(),Qc(5021,`ul`)(5022,`li`),Sk(5023,`Aceita o tipo `),Qc(5024,`em`),Sk(5025,`string`),Kg(),Sk(5026,` no formato `),Qc(5027,`strong`),Sk(5028,`ISO-8601`),Kg(),Sk(5029,` extendido `),Qc(5030,`strong`),Sk(5031,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Kg(),Sk(5032,`
e o tipo `),Qc(5033,`em`),Sk(5034,`Date`),Kg(),Sk(5035,` padrão do Javascript, por exemplo: `),Qc(5036,`code`),Sk(5037,`'2017-11-28T00:00:00-02:00'`),Kg(),Sk(5038,` ou `),Qc(5039,`code`),Sk(5040,`new Date(2017, 10, 28)`),Kg(),Sk(5041,`.`),Kg(),Qc(5042,`li`),Sk(5043,`Aceita o tipo `),Qc(5044,`em`),Sk(5045,`string`),Kg(),Sk(5046,` nos formatos `),Qc(5047,`strong`),Sk(5048,`'HH:mm:ss'`),Kg(),Sk(5049,` ou `),Qc(5050,`strong`),Sk(5051,`'HH:mm:ss.ffffff'`),Kg(),Sk(5052,`, por exemplo: `),Qc(5053,`code`),Sk(5054,`'23:12:45'`),Kg(),Sk(5055,`.`),Kg()()()()()()(),Qc(5056,`h4`,267)(5057,`code`,5),Sk(5058,`PoTableDetail`),Kg()(),Qc(5059,`div`,2)(5060,`p`),Sk(5061,`Interface para configuração do `),Qc(5062,`em`),Sk(5063,`detail`),Kg(),Sk(5064,` do componente `),Qc(5065,`code`),Sk(5066,`po-table`),Kg(),Sk(5067,`.`),Kg()(),Qc(5068,`h4`,13),Sk(5069,`Propriedades`),Kg(),Qc(5070,`table`,14)(5071,`tr`,15)(5072,`th`,16),Sk(5073,`Nome`),Kg(),Qc(5074,`th`,16),Sk(5075,`Tipo`),Kg(),Qc(5076,`th`,16),Sk(5077,`Descrição`),Kg()(),Qc(5078,`tr`,268)(5079,`td`,18)(5080,`div`,19)(5081,`span`,20),Sk(5082,` columns`),vu(5083,`br`),Kg()()(),Qc(5084,`td`,21)(5085,`code`,269),Sk(5086,`Array<PoTableDetailColumn>`),Kg()(),Qc(5087,`td`,24)(5088,`p`),Sk(5089,`Define uma lista do tipo `),Qc(5090,`code`),Sk(5091,`PoTableDetailColumn`),Kg(),Sk(5092,` para as colunas do objet `),Qc(5093,`em`),Sk(5094,`detail`),Kg(),Sk(5095,`. Por exemplo:`),Kg(),Qc(5096,`pre`)(5097,`code`),Sk(5098,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),Kg()()()(),Qc(5099,`tr`,270)(5100,`td`,18)(5101,`div`,19)(5102,`span`,20),Sk(5103,` hideSelect`),vu(5104,`br`),Kg()()(),Qc(5105,`td`,21)(5106,`code`,22),Sk(5107,`boolean`),Kg()(),Qc(5108,`td`,24)(5109,`em`)(5110,`strong`),Sk(5111,`(opcional)`),Kg()(),Qc(5112,`p`),Sk(5113,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),Kg()()(),Qc(5114,`tr`,271)(5115,`td`,18)(5116,`div`,19)(5117,`span`,20),Sk(5118,` typeHeader`),vu(5119,`br`),Kg()()(),Qc(5120,`td`,21)(5121,`code`,41),Sk(5122,`string`),Kg()(),Qc(5123,`td`,24)(5124,`em`)(5125,`strong`),Sk(5126,`(opcional)`),Kg()(),Qc(5127,`p`),Sk(5128,`Define o tipo de cabeçalho para o conteúdo do `),Qc(5129,`em`),Sk(5130,`detail`),Kg(),Sk(5131,` .`),Kg(),Qc(5132,`p`),Sk(5133,`Valores válidos:`),Kg(),Qc(5134,`ul`)(5135,`li`)(5136,`code`),Sk(5137,`inline`),Kg(),Sk(5138,`: Atribui o cabeçalho na mesma linha do `),Qc(5139,`em`),Sk(5140,`detail`),Kg(),Sk(5141,`.`),Kg(),Qc(5142,`li`)(5143,`code`),Sk(5144,`top`),Kg(),Sk(5145,`: Atribui o cabeçalho acima do `),Qc(5146,`em`),Sk(5147,`detail`),Kg(),Sk(5148,`, idêntico ao `),Qc(5149,`code`),Sk(5150,`po-table`),Kg(),Sk(5151,`.`),Kg(),Qc(5152,`li`)(5153,`code`),Sk(5154,`none`),Kg(),Sk(5155,`: Remove o cabeçalho do `),Qc(5156,`em`),Sk(5157,`detail`),Kg(),Sk(5158,`.`),Kg()()()()(),Qc(5159,`h4`,272)(5160,`code`,5),Sk(5161,`PoTableSubtitleColumn`),Kg()(),Qc(5162,`div`,2)(5163,`p`),Sk(5164,`Interface para configuração das colunas de legenda do Po-Table.`),Kg()(),Qc(5165,`h4`,13),Sk(5166,`Propriedades`),Kg(),Qc(5167,`table`,14)(5168,`tr`,15)(5169,`th`,16),Sk(5170,`Nome`),Kg(),Qc(5171,`th`,16),Sk(5172,`Tipo`),Kg(),Qc(5173,`th`,16),Sk(5174,`Descrição`),Kg()(),Qc(5175,`tr`,273)(5176,`td`,18)(5177,`div`,19)(5178,`span`,20),Sk(5179,` color`),vu(5180,`br`),Kg()()(),Qc(5181,`td`,21)(5182,`code`,41),Sk(5183,`string`),Kg()(),Qc(5184,`td`,24)(5185,`em`)(5186,`strong`),Sk(5187,`(opcional)`),Kg()(),Qc(5188,`p`),Sk(5189,`Define a cor do `),Qc(5190,`em`),Sk(5191,`status`),Kg(),Sk(5192,`.`),Kg(),Qc(5193,`p`),Sk(5194,`Valores válidos:`),Kg(),Qc(5195,`ul`)(5196,`li`),vu(5197,`span`,138),Qc(5198,`code`),Sk(5199,`color-01`),Kg()(),Qc(5200,`li`),vu(5201,`span`,139),Qc(5202,`code`),Sk(5203,`color-02`),Kg()(),Qc(5204,`li`),vu(5205,`span`,140),Qc(5206,`code`),Sk(5207,`color-03`),Kg()(),Qc(5208,`li`),vu(5209,`span`,141),Qc(5210,`code`),Sk(5211,`color-04`),Kg()(),Qc(5212,`li`),vu(5213,`span`,142),Qc(5214,`code`),Sk(5215,`color-05`),Kg()(),Qc(5216,`li`),vu(5217,`span`,143),Qc(5218,`code`),Sk(5219,`color-06`),Kg()(),Qc(5220,`li`),vu(5221,`span`,144),Qc(5222,`code`),Sk(5223,`color-07`),Kg()(),Qc(5224,`li`),vu(5225,`span`,145),Qc(5226,`code`),Sk(5227,`color-08`),Kg()(),Qc(5228,`li`),vu(5229,`span`,146),Qc(5230,`code`),Sk(5231,`color-09`),Kg()(),Qc(5232,`li`),vu(5233,`span`,147),Qc(5234,`code`),Sk(5235,`color-10`),Kg()(),Qc(5236,`li`),vu(5237,`span`,148),Qc(5238,`code`),Sk(5239,`color-11`),Kg()(),Qc(5240,`li`),vu(5241,`span`,149),Qc(5242,`code`),Sk(5243,`color-12`),Kg()()(),Qc(5244,`blockquote`)(5245,`p`),Sk(5246,`Também é possível utilizar as 35 cores da paleta `),Qc(5247,`strong`),Sk(5248,`Caption Tag Colors`),Kg(),Sk(5249,`:`),Kg()(),Qc(5250,`ul`)(5251,`li`),vu(5252,`span`,150),Qc(5253,`code`),Sk(5254,`caption-tag-01`),Kg(),vu(5255,`span`,151),Qc(5256,`code`),Sk(5257,`caption-tag-02`),Kg(),vu(5258,`span`,152),Qc(5259,`code`),Sk(5260,`caption-tag-03`),Kg(),vu(5261,`span`,153),Qc(5262,`code`),Sk(5263,`caption-tag-04`),Kg(),vu(5264,`span`,154),Qc(5265,`code`),Sk(5266,`caption-tag-05`),Kg()(),Qc(5267,`li`),vu(5268,`span`,155),Qc(5269,`code`),Sk(5270,`caption-tag-06`),Kg(),vu(5271,`span`,156),Qc(5272,`code`),Sk(5273,`caption-tag-07`),Kg(),vu(5274,`span`,157),Qc(5275,`code`),Sk(5276,`caption-tag-08`),Kg(),vu(5277,`span`,158),Qc(5278,`code`),Sk(5279,`caption-tag-09`),Kg(),vu(5280,`span`,159),Qc(5281,`code`),Sk(5282,`caption-tag-10`),Kg()(),Qc(5283,`li`),vu(5284,`span`,160),Qc(5285,`code`),Sk(5286,`caption-tag-11`),Kg(),vu(5287,`span`,161),Qc(5288,`code`),Sk(5289,`caption-tag-12`),Kg(),vu(5290,`span`,162),Qc(5291,`code`),Sk(5292,`caption-tag-13`),Kg(),vu(5293,`span`,163),Qc(5294,`code`),Sk(5295,`caption-tag-14`),Kg(),vu(5296,`span`,164),Qc(5297,`code`),Sk(5298,`caption-tag-15`),Kg()(),Qc(5299,`li`),vu(5300,`span`,165),Qc(5301,`code`),Sk(5302,`caption-tag-16`),Kg(),vu(5303,`span`,166),Qc(5304,`code`),Sk(5305,`caption-tag-17`),Kg(),vu(5306,`span`,167),Qc(5307,`code`),Sk(5308,`caption-tag-18`),Kg(),vu(5309,`span`,168),Qc(5310,`code`),Sk(5311,`caption-tag-19`),Kg(),vu(5312,`span`,169),Qc(5313,`code`),Sk(5314,`caption-tag-20`),Kg()(),Qc(5315,`li`),vu(5316,`span`,170),Qc(5317,`code`),Sk(5318,`caption-tag-21`),Kg(),vu(5319,`span`,171),Qc(5320,`code`),Sk(5321,`caption-tag-22`),Kg(),vu(5322,`span`,172),Qc(5323,`code`),Sk(5324,`caption-tag-23`),Kg(),vu(5325,`span`,173),Qc(5326,`code`),Sk(5327,`caption-tag-24`),Kg(),vu(5328,`span`,174),Qc(5329,`code`),Sk(5330,`caption-tag-25`),Kg()(),Qc(5331,`li`),vu(5332,`span`,175),Qc(5333,`code`),Sk(5334,`caption-tag-26`),Kg(),vu(5335,`span`,176),Qc(5336,`code`),Sk(5337,`caption-tag-27`),Kg(),vu(5338,`span`,177),Qc(5339,`code`),Sk(5340,`caption-tag-28`),Kg(),vu(5341,`span`,178),Qc(5342,`code`),Sk(5343,`caption-tag-29`),Kg(),vu(5344,`span`,179),Qc(5345,`code`),Sk(5346,`caption-tag-30`),Kg()(),Qc(5347,`li`),vu(5348,`span`,180),Qc(5349,`code`),Sk(5350,`caption-tag-31`),Kg(),vu(5351,`span`,181),Qc(5352,`code`),Sk(5353,`caption-tag-32`),Kg(),vu(5354,`span`,182),Qc(5355,`code`),Sk(5356,`caption-tag-33`),Kg(),vu(5357,`span`,183),Qc(5358,`code`),Sk(5359,`caption-tag-34`),Kg(),vu(5360,`span`,184),Qc(5361,`code`),Sk(5362,`caption-tag-35`),Kg()()()()(),Qc(5363,`tr`,274)(5364,`td`,18)(5365,`div`,19)(5366,`span`,20),Sk(5367,` content`),vu(5368,`br`),Kg()()(),Qc(5369,`td`,21)(5370,`code`,41),Sk(5371,`string`),Kg()(),Qc(5372,`td`,24)(5373,`p`),Sk(5374,`Conteúdo que será exibido na coluna da tabela.`),Kg()()(),Qc(5375,`tr`,275)(5376,`td`,18)(5377,`div`,19)(5378,`span`,20),Sk(5379,` label`),vu(5380,`br`),Kg()()(),Qc(5381,`td`,21)(5382,`code`,41),Sk(5383,`string`),Kg()(),Qc(5384,`td`,24)(5385,`p`),Sk(5386,`Texto que será exibido no rodapé da tabela como legenda.`),Kg()()(),Qc(5387,`tr`,276)(5388,`td`,18)(5389,`div`,19)(5390,`span`,20),Sk(5391,` value`),vu(5392,`br`),Kg()()(),Qc(5393,`td`,21)(5394,`code`,41),Sk(5395,`string `),Kg(),Qc(5396,`code`,52),Sk(5397,` number`),Kg()(),Qc(5398,`td`,24)(5399,`p`),Sk(5400,`Valor que será usado como referência para exibição do conteúdo na coluna.`),Kg()()()(),Qc(5401,`h3`),Sk(5402,`Enums`),Kg(),Qc(5403,`h4`,277)(5404,`code`,5),Sk(5405,`PoTableColumnSortType`),Kg()(),Qc(5406,`div`,2)(5407,`p`),Sk(5408,`Tipos de ordenação das colunas da tabela.`),Kg()(),Qc(5409,`h4`,13),Sk(5410,`Propriedades`),Kg(),Qc(5411,`table`,14)(5412,`tr`,15)(5413,`th`,16),Sk(5414,`Nome`),Kg(),Qc(5415,`th`,16),Sk(5416,`Descrição`),Kg()(),Qc(5417,`tr`,278)(5418,`td`,18)(5419,`div`,19)(5420,`span`,20),Sk(5421,` Ascending`),vu(5422,`br`),Kg()()(),Qc(5423,`td`,24)(5424,`p`),Sk(5425,`Ordenação ascendente`),Kg()()(),Qc(5426,`tr`,279)(5427,`td`,18)(5428,`div`,19)(5429,`span`,20),Sk(5430,` Descending`),vu(5431,`br`),Kg()()(),Qc(5432,`td`,24)(5433,`p`),Sk(5434,`Ordenação descendente`),Kg()()()(),Qc(5435,`h4`,280)(5436,`code`,5),Sk(5437,`PoTableColumnSpacing`),Kg()(),Qc(5438,`div`,2)(5439,`p`),Sk(5440,`Tipos de espaçamento interno (padding) das células (`),Qc(5441,`strong`),Sk(5442,`p-spacing`),Kg(),Sk(5443,`) do po-table.`),Kg()(),Qc(5444,`h4`,13),Sk(5445,`Propriedades`),Kg(),Qc(5446,`table`,14)(5447,`tr`,15)(5448,`th`,16),Sk(5449,`Nome`),Kg(),Qc(5450,`th`,16),Sk(5451,`Descrição`),Kg()(),Qc(5452,`tr`,281)(5453,`td`,18)(5454,`div`,19)(5455,`span`,20),Sk(5456,` ExtraSmall`),vu(5457,`br`),Kg()()(),Qc(5458,`td`,24)(5459,`p`),Sk(5460,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),Kg()()(),Qc(5461,`tr`,282)(5462,`td`,18)(5463,`div`,19)(5464,`span`,20),Sk(5465,` Small`),vu(5466,`br`),Kg()()(),Qc(5467,`td`,24)(5468,`p`),Sk(5469,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),Kg()()(),Qc(5470,`tr`,283)(5471,`td`,18)(5472,`div`,19)(5473,`span`,20),Sk(5474,` Medium`),vu(5475,`br`),Kg()()(),Qc(5476,`td`,24)(5477,`p`),Sk(5478,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),Kg()()(),Qc(5479,`tr`,284)(5480,`td`,18)(5481,`div`,19)(5482,`span`,20),Sk(5483,` Large`),vu(5484,`br`),Kg()()(),Qc(5485,`td`,24)(5486,`p`),Sk(5487,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),Kg()()()(),Qc(5488,`h3`,285),Sk(5489,`Subcomponentes`),Kg(),Qc(5490,`ul`,286)(5491,`li`)(5492,`a`,287),Sk(5493,`Table Cell Template`),Kg()(),Qc(5494,`li`)(5495,`a`,288),Sk(5496,`Table Column Template`),Kg()(),Qc(5497,`li`)(5498,`a`,289),Sk(5499,`Table Row Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function sn(r,W){if(r&1){let o=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(o);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-table-basic-view`)(2,`sample-po-table-labs-view`)(3,`sample-po-table-with-api-view`)(4,`sample-po-table-transport-view`)(5,`sample-po-table-airfare-view`)(6,`sample-po-table-components-view`)(7,`sample-po-table-heroes-view`)(8,`sample-po-table-draggable-view`)(9,`sample-po-table-search-ai-view`),Kg()}if(r&2){let o=ek();Rb(`p-active`,o.activeTab===`web`)}}var pn=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,a){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,sn,10,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-table-doc`),Kg()()()),l&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,Ke,et,nt,at,lt,mt,st,ct,bt,Et],encapsulation:2,changeDetection:1})}return r})()}];var xt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[GV.forChild(pn),GV]})}return r})();var vi=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,xt]})}return r})();export{vi as DocPoTableModule};