import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,Da as kI,Dr as Gk,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ka as qk,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Rn as voe,Ta as jk,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vi as Xm,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Xr as Nk,Zi as ar,Zr as No,an as ia,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,eo as uF,ga as iF,gi as Rb,go as z0,h as Dte,ha as i1,hr as Db,io as vu,j as I4,ji as Vk,k as Goe,kt as Zoe,li as Qc,na as de,oo as wg,pi as R,qi as ZL,ro as vt$1,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du,zn as w4}from"./chunk-DtUf9FxZ.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,O)=>[a,O];var Ae=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&vu(0,`po-combo`,0),p&2&&Rb(`p-options`,jk(3,rt,Lk(1,at),Lk(2,lt)))},dependencies:[w4],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo Basic`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-basic`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,mt,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}]}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&`options`in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return[...m,{label:d,value:c}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let d=YO();Qc(0,`po-combo`,2),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.combo,i)||(n.combo=i),U_(i)}),vt$1(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,3),vu(3,`po-info`,4)(4,`po-info`,5),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0),vu(8,`po-divider`,6),Qc(9,`div`,3)(10,`po-switch`,7),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),U_(i)}),Kg(),Qc(11,`po-select`,8),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),U_(i)}),vt$1(`p-change`,function(){return n.optionsGroupSelection()}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.optionsGroup,i)||(n.optionsGroup=i),U_(i)}),Kg()(),vu(13,`po-divider`,10),Qc(14,`div`,3)(15,`po-input`,11),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.option.label,i)||(n.option.label=i),U_(i)}),Kg(),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.option.value,i)||(n.option.value=i),U_(i)}),Kg()(),Qc(17,`div`,3)(18,`po-button`,13),vt$1(`p-click`,function(){return n.addOption()}),Kg()()(),vu(19,`po-divider`),Qc(20,`form`,null,1)(22,`po-input`,14),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.label,i)||(n.label=i),U_(i)}),Kg(),Qc(23,`po-input`,15),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.help,i)||(n.help=i),U_(i)}),Kg(),Qc(24,`po-input`,16),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.helperText,i)||(n.helperText=i),U_(i)}),Kg(),Qc(25,`po-input`,17),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.placeholder,i)||(n.placeholder=i),U_(i)}),Kg(),Qc(26,`po-input`,18),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),U_(i)}),Kg(),Qc(27,`div`,3)(28,`po-checkbox-group`,19),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.properties,i)||(n.properties=i),U_(i)}),Kg(),Qc(29,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.icon,i)||(n.icon=i),U_(i)}),Kg(),Qc(30,`po-radio-group`,21),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.filterMode,i)||(n.filterMode=i),U_(i)}),Kg(),Qc(31,`po-radio-group`,22),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.size,i)||(n.size=i),U_(i)}),Kg(),Qc(32,`po-radio-group`,23),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.listboxPosition,i)||(n.listboxPosition=i),U_(i)}),Kg()(),Qc(33,`div`,3)(34,`po-input`,24),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.filterService,i)||(n.filterService=i),U_(i)}),Kg(),Qc(35,`po-input`,25),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.literals,i)||(n.literals=i),U_(i)}),vt$1(`p-change`,function(){return n.changeLiterals()}),Kg()(),Qc(36,`div`,3)(37,`po-input`,26),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.fieldValue,i)||(n.fieldValue=i),U_(i)}),Kg(),Qc(38,`po-input`,27),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.fieldLabel,i)||(n.fieldLabel=i),U_(i)}),Kg()(),Qc(39,`div`,3)(40,`po-number`,28),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.debounceTime,i)||(n.debounceTime=i),U_(i)}),Kg(),Qc(41,`po-number`,29),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.filterMinlength,i)||(n.filterMinlength=i),U_(i)}),Kg()(),Qc(42,`div`,3)(43,`po-button`,30),vt$1(`p-click`,function(){return n.restore()}),Kg()()()}if(p&2){let d=ik(7);Yb(`ngModel`,n.combo),Rb(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),W0(),wg(3),Rb(`p-value`,n.combo),wg(),Rb(`p-value`,n.event),wg(6),Yb(`ngModel`,n.comboOptionGroupSwitch),W0(),wg(),Yb(`ngModel`,n.selectedOptionsGroup),Rb(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),W0(),wg(),Yb(`ngModel`,n.optionsGroup),Rb(`p-disabled`,!n.comboOptionGroupSwitch),W0(),wg(3),Yb(`ngModel`,n.option.label),W0(),wg(),Yb(`ngModel`,n.option.value),W0(),wg(2),Rb(`p-disabled`,d.form.invalid),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.placeholder),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(2),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.icon),Rb(`p-options`,n.iconsOptions),W0(),wg(),Yb(`ngModel`,n.filterMode),Rb(`p-options`,n.filterModeOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.listboxPosition),Rb(`p-options`,n.listboxPositionOptions),W0(),wg(2),Yb(`ngModel`,n.filterService),W0(),wg(),Yb(`ngModel`,n.literals),W0(),wg(2),Yb(`ngModel`,n.fieldValue),W0(),wg(),Yb(`ngModel`,n.fieldLabel),W0(),wg(2),Yb(`ngModel`,n.debounceTime),W0(),wg(),Yb(`ngModel`,n.filterMinlength),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,w4,j4,Goe,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo Labs`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-helper]="helperText"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  helperText: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
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

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-labs`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ct,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ge],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var bt=[`schedulingForm`];function gt(a,O){if(a&1&&(Qc(0,`div`,3),vu(1,`po-avatar`,15),Qc(2,`p`,14),Sk(3),Kg()()),a&2){let m=ek().$implicit,p=ek();wg(),Rb(`p-src`,p.getStateByLabel(m.label)),wg(2),Gb(m.label)}}function ht(a,O){if(a&1&&(Qc(0,`div`,14),Sk(1),Kg()),a&2){let m=ek().$implicit;wg(),Gb(m.label)}}function ft(a,O){if(a&1&&FO(0,gt,4,2,`div`,3)(1,ht,2,1,`div`,14),a&2){let m=O.$implicit;VO(m.options?0:1)}}var ze=(()=>{class a{poNotification=p(Ru);schedulingService=p(Ee);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(m=``){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(m){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[m]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Du(bt,7),p&2){let d;No(d=xo())&&(n.form=d.first)}},standalone:!1,features:[we([Ee])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let d=YO();Qc(0,`div`,1)(1,`div`,2),Sk(2,`Pre-appointment scheduling`),Kg()(),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.name,i)||(n.name=i),U_(i)}),Kg(),Qc(7,`po-email`,5),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.email,i)||(n.email=i),U_(i)}),Kg()(),Qc(8,`div`,3)(9,`po-datepicker`,6),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.birthday,i)||(n.birthday=i),U_(i)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.phone,i)||(n.phone=i),U_(i)}),Kg()(),Qc(11,`div`,3)(12,`po-combo`,8),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.city,i)||(n.city=i),U_(i)}),Db(13,ft,2,1,`ng-template`,9),Kg(),Qc(14,`po-select`,10),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.typeScheduling,i)||(n.typeScheduling=i),U_(i)}),Kg(),Qc(15,`po-combo`,11),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.medicalSpecialty,i)||(n.medicalSpecialty=i),U_(i)}),Kg()(),Qc(16,`div`,3)(17,`po-textarea`,12),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.informations,i)||(n.informations=i),U_(i)}),Kg()(),Qc(18,`div`,3)(19,`po-button`,13),vt$1(`p-click`,function(){return n.confirmPreAppointment(n.name)}),Kg()()()}if(p&2){let d=ik(4);wg(6),Yb(`ngModel`,n.name),W0(),wg(),Yb(`ngModel`,n.email),W0(),wg(2),Yb(`ngModel`,n.birthday),W0(),wg(),Yb(`ngModel`,n.phone),W0(),wg(2),Yb(`ngModel`,n.city),Rb(`p-options`,n.citiesOptions),W0(),wg(2),Yb(`ngModel`,n.typeScheduling),Rb(`p-options`,n.typeSchedulings),W0(),wg(),Yb(`ngModel`,n.medicalSpecialty),Rb(`p-options`,n.medicalSpecialtyOptions),W0(),wg(2),Yb(`ngModel`,n.informations),W0(),wg(2),Rb(`p-disabled`,d.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,c4,oi,w4,Dte,tie,p5,j4,Koe,Zoe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:34,vars:6,consts:[[`id`,`sample-po-combo-scheduling`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Scheduling`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1 sample-combo-avatar-bg"
              p-size="xs"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  styleUrls: ['./sample-po-combo-scheduling.component.css'],
  providers: [SamplePoComboSchedulingService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),Kg()()(),Qc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Sk(28,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),Kg(),Qc(29,`pre`,11),Sk(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),Kg()()()()(),Qc(31,`div`,12),vu(32,`sample-po-combo-scheduling`),Kg(),vu(33,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Et,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var vt=[`transferForm`];function xt(a,O){if(a&1&&(Qc(0,`div`,3),vu(1,`po-avatar`,15),Qc(2,`div`,16)(3,`div`,17),Sk(4),Kg(),Qc(5,`div`,18),Sk(6),Kg()()()),a&2){let m=O.$implicit;wg(4),Gb(m.label),wg(2),tm(`Account: `,m.value)}}var Ue=(()=>{class a{poNotification=p(Ru);form;poModal;contact;dateTransfer=/* @__PURE__ */ new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:/* @__PURE__ */ new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Du(vt,7)(ia,7),p&2){let d;No(d=xo())&&(n.form=d.first),No(d=xo())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let d=YO();Qc(0,`div`,1)(1,`div`,2),Sk(2,`Banking Transfer`),Kg()(),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.typeAccount,i)||(n.typeAccount=i),U_(i)}),Kg(),Qc(7,`po-combo`,5),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.contact,i)||(n.contact=i),U_(i)}),Db(8,xt,7,2,`ng-template`,6),Kg()(),Qc(9,`div`,3)(10,`po-decimal`,7),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.value,i)||(n.value=i),U_(i)}),Kg(),Qc(11,`po-datepicker`,8),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.dateTransfer,i)||(n.dateTransfer=i),U_(i)}),Kg()(),Qc(12,`div`,3)(13,`po-button`,9),vt$1(`p-click`,function(){return n.transfer()}),Kg()()(),Qc(14,`po-modal`,10)(15,`div`,3),vu(16,`po-info`,11)(17,`po-info`,12),Kg(),vu(18,`po-divider`),Qc(19,`div`,3),vu(20,`po-info`,13)(21,`po-info`,14),Gk(22,`date`),Kg()()}if(p&2){let d=ik(4);wg(6),Yb(`ngModel`,n.typeAccount),Rb(`p-options`,n.typeAccounts),W0(),wg(),Yb(`ngModel`,n.contact),W0(),wg(3),Yb(`ngModel`,n.value),W0(),wg(),Yb(`ngModel`,n.dateTransfer),W0(),wg(2),Rb(`p-disabled`,d.invalid),wg(),Rb(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),wg(2),Rb(`p-value`,n.typeAccount),wg(),Rb(`p-value`,n.contact),wg(3),Rb(`p-value`,n.value),wg(),Rb(`p-value`,Nk(qk(22,13,n.dateTransfer)))}},dependencies:[AZ,MZ,TZ,QL,WL,c4,oi,Nf,w4,Dte,tie,voe,Koe,Joe,ia,uF],encapsulation:2,changeDetection:1})}return a})();var wt=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-transfer`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Banking Transfer`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-transfer`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,wt,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ue],encapsulation:2,changeDetection:1})}return a})();function Pt(a,O){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Kg()),a&2){let m=O;wg(),Rb(`p-value`,m.name),wg(),Rb(`p-value`,m.nickname),wg(),Rb(`p-value`,m.email)}}var Ke=(()=>{class a{http=p(kI);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Qc(0,`div`,0)(1,`po-widget`,1),vt$1(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Qc(2,`po-combo`,2),z0(),Kb(`ngModelChange`,function(c){return Tk(n.heroName,c)||(n.heroName=c),c}),vt$1(`p-change`,function(c){return n.onChangeHero(c)}),Kg(),FO(3,Pt,4,3,`div`,0),Gk(4,`async`),Kg()()),p&2){let d;wg(),Rb(`p-primary-label`,n.knowMoreLabel),wg(),Yb(`ngModel`,n.heroName),W0(),wg(),VO((d=qk(4,3,n.hero$))?3:-1,d)}},dependencies:[MZ,QL,w4,Joe,bae,iF],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Heroes`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-heroes`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Tt,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ke],encapsulation:2,changeDetection:1})}return a})();function Dt(a,O){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Kg()),a&2){let m=O;wg(),Rb(`p-value`,m.name),wg(),Rb(`p-value`,m.nickname),wg(),Rb(`p-value`,m.email)}}var Ye=(()=>{class a{http=p(kI);formBuilder=p(OZ);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,Xm.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let m=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Qc(0,`div`,0)(1,`po-widget`,1),vt$1(`p-primary-action`,function(){return n.knowMore()}),Qc(2,`div`,2)(3,`po-combo`,3),z0(),vt$1(`p-change`,function(c){return n.onChangeHero(c)}),Kg()(),FO(4,Dt,4,3,`div`,0),Gk(5,`async`),Kg()()),p&2){let d;wg(),Rb(`p-primary-label`,n.knowMoreLabel),wg(),Rb(`formGroup`,n.form),wg(),W0(),wg(),VO((d=qk(5,3,n.hero$))?4:-1,d)}},dependencies:[MZ,TZ,ZL,i1,w4,Joe,bae,iF],encapsulation:2,changeDetection:1})}return a})();var Ot=a=>({"docs-sample-code-tabs":a});var Xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-heroes-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Heroes Reactive Form`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-heroes-reactive-form`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ot,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ye],encapsulation:2,changeDetection:1})}return a})();function qt(a,O){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Kg()),a&2){let m=O;wg(),Rb(`p-value`,m.name),wg(),Rb(`p-value`,m.nickname),wg(),Rb(`p-value`,m.email)}}var Ze=(()=>{class a{http=p(kI);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m)}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),z0(),Kb(`ngModelChange`,function(c){return Tk(n.peopleName,c)||(n.peopleName=c),c}),vt$1(`p-change`,function(c){return n.onChangePeople(c)}),Kg(),FO(3,qt,4,3,`div`,0),Gk(4,`async`),Kg()()),p&2){let d;wg(2),Yb(`ngModel`,n.peopleName),Rb(`p-infinite-scroll`,!0),W0(),wg(),VO((d=qk(4,3,n.people$))?3:-1,d)}},dependencies:[MZ,QL,w4,Joe,bae,iF],encapsulation:2,changeDetection:1})}return a})();var Wt=a=>({"docs-sample-code-tabs":a});var $e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-infinity-scroll`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Inifity Scroll`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-infinity-scroll`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Wt,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ze],encapsulation:2,changeDetection:1})}return a})();var Bt=[`bookingForm`];var Ht=[`datepicker`];var et=(()=>{class a{poNotification=p(Ru);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(m){this.filterParams=m?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Du(Bt,7)(Ht,7),p&2){let d;No(d=xo())&&(n.form=d.first),No(d=xo())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let d=YO();Qc(0,`div`,2)(1,`div`,3),Sk(2,`Booking a Hotel`),Kg()(),Qc(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.checkin,i)||(n.checkin=i),U_(i)}),Kg(),Qc(8,`po-datepicker`,6),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.checkout,i)||(n.checkout=i),U_(i)}),Kg(),Qc(9,`po-switch`,7),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.category,i)||(n.category=i),U_(i)}),vt$1(`p-change`,function(i){return n.onChangeParams(i)}),Kg()(),Qc(10,`div`,4)(11,`po-select`,8),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.rooms,i)||(n.rooms=i),U_(i)}),Kg(),Qc(12,`po-select`,9),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.children,i)||(n.children=i),U_(i)}),Kg(),Qc(13,`po-select`,10),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.adults,i)||(n.adults=i),U_(i)}),Kg()(),Qc(14,`div`,4)(15,`po-combo`,11),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.hotel,i)||(n.hotel=i),U_(i)}),Kg()(),Qc(16,`div`,4)(17,`po-button`,12),vt$1(`p-click`,function(){return n.booking()}),Kg()()()}if(p&2){let d=ik(4);wg(6),Yb(`ngModel`,n.checkin),Rb(`p-max-date`,n.checkout),W0(),wg(2),Yb(`ngModel`,n.checkout),Rb(`p-min-date`,n.checkin),W0(),wg(),Yb(`ngModel`,n.category),W0(),wg(2),Yb(`ngModel`,n.rooms),Rb(`p-options`,n.roomsOptions),W0(),wg(),Yb(`ngModel`,n.children),Rb(`p-options`,n.childrenOptions),W0(),wg(),Yb(`ngModel`,n.adults),Rb(`p-options`,n.adultsOptions),W0(),wg(2),Yb(`ngModel`,n.hotel),Rb(`p-filter-params`,n.filterParams),W0(),wg(2),Rb(`p-disabled`,d.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,w4,tie,Koe,R4],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a});var tt=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-combo-hotels`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Booking Hotel`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-combo-hotels`),Kg(),vu(23,`hr`)),p&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,It,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1893,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-combo-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`prop-p-cache`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-change-on-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-debounce-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-init-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-tab-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-emit-object-value`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-minlength`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`id`,`prop-p-filter-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`event-p-input-change`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-remove-initial-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-combo-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-combo-filter-method-getObjectByValue`,1,`docs-api-method-table`],[`id`,`interface-po-combo-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-literals-choose-option`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-option-group-label`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-group-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`],[`id`,`interface-po-combo-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-value`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-combo-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode-ends-with`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-combo-option-template?view=doc`]],template:function(p,n){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoComboComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O `),Qc(24,`code`),Sk(25,`po-combo`),Kg(),Sk(26,` exibe uma lista de opções com fácil seleção e filtragem.`),Kg(),Qc(27,`p`),Sk(28,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),Kg(),Qc(29,`p`),Sk(30,`É possível selecionar e navegar entre as opções da lista tanto através do `),Qc(31,`em`),Sk(32,`mouse`),Kg(),Sk(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Qc(34,`em`),Sk(35,`Enter`),Kg(),Sk(36,` na opção que desejar.`),Kg(),Qc(37,`p`),Sk(38,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Qc(39,`code`),Sk(40,`p-filter-service`),Kg(),Sk(41,`.`),Kg(),Qc(42,`p`),Sk(43,`Em `),Qc(44,`code`),Sk(45,`p-filter-mode`),Kg(),Sk(46,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),Kg(),Qc(47,`p`),Sk(48,`O `),Qc(49,`code`),Sk(50,`po-combo`),Kg(),Sk(51,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Qc(52,`em`),Sk(53,`Esc`),Kg(),Sk(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Qc(55,`em`),Sk(56,`Enter`),Kg(),Sk(57,`.`),Kg(),Qc(58,`p`),Sk(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),Kg(),Qc(60,`h4`),Sk(61,`Tokens customizáveis`),Kg(),Qc(62,`p`),Sk(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(64,`blockquote`)(65,`p`),Sk(66,`Para maiores informações, acesse o guia `),Qc(67,`a`,6),Sk(68,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(69,`.`),Kg()(),Qc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Sk(74,`Propriedade`),Kg(),Qc(75,`th`),Sk(76,`Descrição`),Kg(),Qc(77,`th`),Sk(78,`Valor Padrão`),Kg()()(),Qc(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),Sk(83,`Default Values`),Kg()(),vu(84,`td`)(85,`td`),Kg(),Qc(86,`tr`)(87,`td`)(88,`code`),Sk(89,`--font-family`),Kg()(),Qc(90,`td`),Sk(91,`Família tipográfica usada`),Kg(),Qc(92,`td`)(93,`code`),Sk(94,`var(--font-family-theme)`),Kg()()(),Qc(95,`tr`)(96,`td`)(97,`code`),Sk(98,`--font-size`),Kg()(),Qc(99,`td`),Sk(100,`Tamanho da fonte`),Kg(),Qc(101,`td`)(102,`code`),Sk(103,`var(--font-size-default)`),Kg()()(),Qc(104,`tr`)(105,`td`)(106,`code`),Sk(107,`--text-color`),Kg()(),Qc(108,`td`),Sk(109,`Cor do texto`),Kg(),Qc(110,`td`)(111,`code`),Sk(112,`var(--color-neutral-dark-90)`),Kg()()(),Qc(113,`tr`)(114,`td`)(115,`code`),Sk(116,`--text-color-placeholder`),Kg()(),Qc(117,`td`),Sk(118,`Cor do texto no placeholder`),Kg(),Qc(119,`td`)(120,`code`),Sk(121,`var(--color-neutral-light-30)`),Kg()()(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--color`),Kg()(),Qc(126,`td`),Sk(127,`Cor principal do Combo`),Kg(),Qc(128,`td`)(129,`code`),Sk(130,`var(--color-neutral-dark-70)`),Kg()()(),Qc(131,`tr`)(132,`td`)(133,`code`),Sk(134,`--background`),Kg()(),Qc(135,`td`),Sk(136,`Cor de background`),Kg(),Qc(137,`td`)(138,`code`),Sk(139,`var(--color-neutral-light-05)`),Kg()()(),Qc(140,`tr`)(141,`td`)(142,`code`),Sk(143,`--border-radius`),Kg()(),Qc(144,`td`),Sk(145,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(146,`td`)(147,`code`),Sk(148,`var(--border-width-lg)`),Kg()()(),Qc(149,`tr`)(150,`td`)(151,`code`),Sk(152,`--min-width`),Kg()(),Qc(153,`td`),Sk(154,`Largura mínima do combo`),Kg(),Qc(155,`td`)(156,`code`),Sk(157,`150px`),Kg()()(),Qc(158,`tr`)(159,`td`)(160,`code`),Sk(161,`--field-container-title-justify`),Kg()(),Qc(162,`td`),Sk(163,`Alinhamento horizontal do título (`),Qc(164,`code`),Sk(165,`justify-content`),Kg(),Sk(166,`)`),Kg(),Qc(167,`td`)(168,`code`),Sk(169,`space-between`),Kg()()(),Qc(170,`tr`)(171,`td`)(172,`code`),Sk(173,`--field-container-title-flex`),Kg()(),Qc(174,`td`),Sk(175,`Flex do título (`),Qc(176,`code`),Sk(177,`flex`),Kg(),Sk(178,`)`),Kg(),Qc(179,`td`)(180,`code`),Sk(181,`1 auto`),Kg()()(),Qc(182,`tr`)(183,`td`)(184,`strong`),Sk(185,`Hover`),Kg()(),vu(186,`td`)(187,`td`),Kg(),Qc(188,`tr`)(189,`td`)(190,`code`),Sk(191,`--color-hover`),Kg()(),Qc(192,`td`),Sk(193,`Cor principal no estado hover`),Kg(),Qc(194,`td`)(195,`code`),Sk(196,`var(--color-action-hover)`),Kg()()(),Qc(197,`tr`)(198,`td`)(199,`code`),Sk(200,`--background-hover`),Kg()(),Qc(201,`td`),Sk(202,`Cor de background no estado hover`),Kg(),Qc(203,`td`)(204,`code`),Sk(205,`var(--color-brand-01-lightest)`),Kg()()(),Qc(206,`tr`)(207,`td`)(208,`strong`),Sk(209,`Focused`),Kg()(),vu(210,`td`)(211,`td`),Kg(),Qc(212,`tr`)(213,`td`)(214,`code`),Sk(215,`--color-focused`),Kg()(),Qc(216,`td`),Sk(217,`Cor principal no estado de focus`),Kg(),Qc(218,`td`)(219,`code`),Sk(220,`var(--color-action-default)`),Kg()()(),Qc(221,`tr`)(222,`td`)(223,`code`),Sk(224,`--outline-color-focused`),Kg()(),Qc(225,`td`),Sk(226,`Cor do outline do estado de focus`),Kg(),Qc(227,`td`)(228,`code`),Sk(229,`var(--color-action-focus)`),Kg()()(),Qc(230,`tr`)(231,`td`)(232,`strong`),Sk(233,`Error`),Kg()(),vu(234,`td`)(235,`td`),Kg(),Qc(236,`tr`)(237,`td`)(238,`code`),Sk(239,`--color-error`),Kg()(),Qc(240,`td`),Sk(241,`Cor principal no estado de erro`),Kg(),Qc(242,`td`)(243,`code`),Sk(244,`var(--color-feedback-negative-base)`),Kg()()(),Qc(245,`tr`)(246,`td`)(247,`strong`),Sk(248,`Disabled`),Kg()(),vu(249,`td`)(250,`td`),Kg(),Qc(251,`tr`)(252,`td`)(253,`code`),Sk(254,`--color-disabled`),Kg()(),Qc(255,`td`),Sk(256,`Cor principal no estado disabled`),Kg(),Qc(257,`td`)(258,`code`),Sk(259,`var(--color-neutral-light-30)`),Kg()()(),Qc(260,`tr`)(261,`td`)(262,`code`),Sk(263,`--background-disabled`),Kg()(),Qc(264,`td`),Sk(265,`Cor de background no estado disabled`),Kg(),Qc(266,`td`)(267,`code`),Sk(268,`var(--color-neutral-light-20)`),Kg()()(),Qc(269,`tr`)(270,`td`)(271,`strong`),Sk(272,`Suggestion`),Kg()(),vu(273,`td`)(274,`td`),Kg(),Qc(275,`tr`)(276,`td`)(277,`code`),Sk(278,`--text-color-suggestion`),Kg()(),Qc(279,`td`),Sk(280,`Cor do texto no estado suggestion`),Kg(),Qc(281,`td`)(282,`code`),Sk(283,`var(--color-neutral-mid-60)`),Kg()()(),Qc(284,`tr`)(285,`td`)(286,`code`),Sk(287,`--background-suggestion`),Kg()(),Qc(288,`td`),Sk(289,`Cor do background no estado suggestion`),Kg(),Qc(290,`td`)(291,`code`),Sk(292,`var(--color-brand-01-lightest)`),Kg()()()()()(),Qc(293,`div`,7)(294,`h4`,8),Sk(295,`Seletor`),Kg(),Qc(296,`pre`,9),Sk(297,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),Kg()(),Qc(298,`h4`,10),Sk(299,`Propriedades`),Kg(),Qc(300,`table`,11)(301,`tr`,12)(302,`th`,13),Sk(303,`Nome`),Kg(),Qc(304,`th`,13),Sk(305,`Tipo`),Kg(),Qc(306,`th`,13),Sk(307,`Padrão`),Kg(),Qc(308,`th`,13),Sk(309,`Descrição`),Kg()(),Qc(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),Sk(314,` (p-additional-help)`),vu(315,`br`),Kg()(),Qc(316,`div`,18),Sk(317,`Deprecated`),Kg()(),Qc(318,`td`,19)(319,`code`,20),Sk(320,`EventEmitter`),Kg()(),Qc(321,`td`,21),Sk(322,`-`),Kg(),Qc(323,`td`,22)(324,`em`)(325,`strong`),Sk(326,`(opcional)`),Kg()(),Qc(327,`p`),Sk(328,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(329,`blockquote`)(330,`p`),Sk(331,`Essa propriedade está `),Qc(332,`strong`),Sk(333,`depreciada`),Kg(),Sk(334,` e será removida na versão `),Qc(335,`code`),Sk(336,`23.x.x`),Kg(),Sk(337,`. Recomendamos utilizar a propriedade `),Qc(338,`code`),Sk(339,`p-helper`),Kg(),Sk(340,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(341,`tr`,23)(342,`td`,15)(343,`div`,24)(344,`span`,25),Sk(345,` p-additional-help-tooltip`),vu(346,`br`),Kg()(),Qc(347,`div`,18),Sk(348,`Deprecated`),Kg()(),Qc(349,`td`,19)(350,`code`,26),Sk(351,`string`),Kg()(),Qc(352,`td`,21),Sk(353,`-`),Kg(),Qc(354,`td`,22)(355,`em`)(356,`strong`),Sk(357,`(opcional)`),Kg()(),Qc(358,`p`),Sk(359,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(360,`code`),Sk(361,`po-helper`),Kg(),Sk(362,`.
`),Qc(363,`strong`),Sk(364,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(365,`blockquote`)(366,`p`),Sk(367,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(368,`blockquote`)(369,`p`),Sk(370,`Essa propriedade está `),Qc(371,`strong`),Sk(372,`depreciada`),Kg(),Sk(373,` e será removida na versão `),Qc(374,`code`),Sk(375,`23.x.x`),Kg(),Sk(376,`. Recomendamos utilizar a propriedade `),Qc(377,`code`),Sk(378,`p-helper`),Kg(),Sk(379,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(380,`tr`,27)(381,`td`,15)(382,`div`,24)(383,`span`,25),Sk(384,` p-append-in-body`),vu(385,`br`),Kg()()(),Qc(386,`td`,19)(387,`code`,28),Sk(388,`boolean`),Kg()(),Qc(389,`td`,21)(390,`p`)(391,`code`),Sk(392,`false`),Kg()()(),Qc(393,`td`,22)(394,`em`)(395,`strong`),Sk(396,`(opcional)`),Kg()(),Qc(397,`p`),Sk(398,`Define que o `),Qc(399,`code`),Sk(400,`listbox`),Kg(),Sk(401,` e/ou popover (`),Qc(402,`code`),Sk(403,`p-helper`),Kg(),Sk(404,` e/ou `),Qc(405,`code`),Sk(406,`p-error-limit`),Kg(),Sk(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Qc(408,`blockquote`)(409,`p`),Sk(410,`Quando utilizado com `),Qc(411,`code`),Sk(412,`p-helper`),Kg(),Sk(413,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(414,`tr`,29)(415,`td`,15)(416,`div`,24)(417,`span`,25),Sk(418,` p-auto-focus`),vu(419,`br`),Kg()()(),Qc(420,`td`,19)(421,`code`,28),Sk(422,`boolean`),Kg()(),Qc(423,`td`,21)(424,`p`)(425,`code`),Sk(426,`false`),Kg()()(),Qc(427,`td`,22)(428,`em`)(429,`strong`),Sk(430,`(opcional)`),Kg()(),Qc(431,`p`),Sk(432,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(433,`blockquote`)(434,`p`),Sk(435,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(436,`tr`,30)(437,`td`,15)(438,`div`,16)(439,`span`,17),Sk(440,` (p-blur)`),vu(441,`br`),Kg()()(),Qc(442,`td`,19)(443,`code`,20),Sk(444,`EventEmitter`),Kg()(),Qc(445,`td`,21),Sk(446,`-`),Kg(),Qc(447,`td`,22)(448,`em`)(449,`strong`),Sk(450,`(opcional)`),Kg()(),Qc(451,`p`),Sk(452,`Evento disparado ao sair do campo.`),Kg()()(),Qc(453,`tr`,31)(454,`td`,15)(455,`div`,24)(456,`span`,25),Sk(457,` p-cache`),vu(458,`br`),Kg()()(),Qc(459,`td`,19)(460,`code`,28),Sk(461,`boolean`),Kg()(),Qc(462,`td`,21)(463,`p`)(464,`code`),Sk(465,`true`),Kg()()(),Qc(466,`td`,22)(467,`em`)(468,`strong`),Sk(469,`(opcional)`),Kg()(),Qc(470,`p`),Sk(471,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),Kg(),Qc(472,`blockquote`)(473,`p`),Sk(474,`Caso o valor seja `),Qc(475,`code`),Sk(476,`false`),Kg(),Sk(477,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),Kg()()()(),Qc(478,`tr`,32)(479,`td`,15)(480,`div`,16)(481,`span`,17),Sk(482,` (p-change)`),vu(483,`br`),Kg()()(),Qc(484,`td`,19)(485,`code`,20),Sk(486,`EventEmitter`),Kg()(),Qc(487,`td`,21),Sk(488,`-`),Kg(),Qc(489,`td`,22)(490,`em`)(491,`strong`),Sk(492,`(opcional)`),Kg()(),Qc(493,`p`),Sk(494,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),Kg(),Qc(495,`blockquote`)(496,`p`),Sk(497,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Qc(498,`code`),Sk(499,`p-emit-object-value`),Kg(),Sk(500,`.`),Kg()()()(),Qc(501,`tr`,33)(502,`td`,15)(503,`div`,16)(504,`span`,17),Sk(505,` (p-change-model)`),vu(506,`br`),Kg()()(),Qc(507,`td`,19)(508,`code`,20),Sk(509,`EventEmitter`),Kg()(),Qc(510,`td`,21),Sk(511,`-`),Kg(),Qc(512,`td`,22)(513,`em`)(514,`strong`),Sk(515,`(opcional)`),Kg()(),Qc(516,`p`),Sk(517,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(518,`code`),Sk(519,`setValue`),Kg(),Sk(520,`, `),Qc(521,`code`),Sk(522,`patchValue`),Kg(),Sk(523,`, carregamento assíncrono).`),Kg(),Qc(524,`p`),Sk(525,`Diferentemente do `),Qc(526,`code`),Sk(527,`p-change`),Kg(),Sk(528,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(529,`code`),Sk(530,`p-change-model`),Kg(),Sk(531,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(532,`p`),Sk(533,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(534,`tr`,34)(535,`td`,15)(536,`div`,24)(537,`span`,25),Sk(538,` p-change-on-enter`),vu(539,`br`),Kg()()(),Qc(540,`td`,19)(541,`code`,28),Sk(542,`boolean`),Kg()(),Qc(543,`td`,21)(544,`p`)(545,`code`),Sk(546,`false`),Kg()()(),Qc(547,`td`,22)(548,`em`)(549,`strong`),Sk(550,`(opcional)`),Kg()(),Qc(551,`p`),Sk(552,`Indica que o evento `),Qc(553,`code`),Sk(554,`p-change`),Kg(),Sk(555,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),Kg()()(),Qc(556,`tr`,35)(557,`td`,15)(558,`div`,24)(559,`span`,25),Sk(560,` p-clean`),vu(561,`br`),Kg()()(),Qc(562,`td`,19)(563,`code`,28),Sk(564,`boolean`),Kg()(),Qc(565,`td`,21),Sk(566,`-`),Kg(),Qc(567,`td`,22)(568,`em`)(569,`strong`),Sk(570,`(opcional)`),Kg()(),Qc(571,`p`),Sk(572,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg()()(),Qc(573,`tr`,36)(574,`td`,15)(575,`div`,24)(576,`span`,25),Sk(577,` p-compact-label`),vu(578,`br`),Kg()()(),Qc(579,`td`,19)(580,`code`,28),Sk(581,`boolean`),Kg()(),Qc(582,`td`,21)(583,`p`)(584,`code`),Sk(585,`false`),Kg()()(),Qc(586,`td`,22)(587,`em`)(588,`strong`),Sk(589,`(opcional)`),Kg()(),Qc(590,`p`),Sk(591,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(592,`p`),Sk(593,`Quando habilitado (`),Qc(594,`code`),Sk(595,`true`),Kg(),Sk(596,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(597,`ul`)(598,`li`)(599,`code`),Sk(600,`po-label`),Kg()(),Qc(601,`li`)(602,`code`),Sk(603,`p-requirement (showRequired)`),Kg()(),Qc(604,`li`)(605,`code`),Sk(606,`po-helper`),Kg()()(),Qc(607,`p`),Sk(608,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(609,`p`),Sk(610,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(611,`ul`)(612,`li`)(613,`code`),Sk(614,`--field-container-title-justify`),Kg()(),Qc(615,`li`)(616,`code`),Sk(617,`--field-container-title-flex`),Kg()()(),Qc(618,`p`),Sk(619,`Exemplo:`),Kg(),Qc(620,`pre`)(621,`code`),Sk(622,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(623,`p`),Sk(624,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(625,`tr`,37)(626,`td`,15)(627,`div`,24)(628,`span`,25),Sk(629,` p-debounce-time`),vu(630,`br`),Kg()()(),Qc(631,`td`,19)(632,`code`,38),Sk(633,`number`),Kg()(),Qc(634,`td`,21)(635,`p`)(636,`code`),Sk(637,`400`),Kg()()(),Qc(638,`td`,22)(639,`em`)(640,`strong`),Sk(641,`(opcional)`),Kg()(),Qc(642,`p`),Sk(643,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Qc(644,`code`),Sk(645,`p-filter-service`),Kg(),Sk(646,`).`),Kg()()(),Qc(647,`tr`,39)(648,`td`,15)(649,`div`,24)(650,`span`,25),Sk(651,` p-disabled`),vu(652,`br`),Kg()()(),Qc(653,`td`,19)(654,`code`,28),Sk(655,`boolean`),Kg()(),Qc(656,`td`,21)(657,`p`)(658,`code`),Sk(659,`false`),Kg()()(),Qc(660,`td`,22)(661,`em`)(662,`strong`),Sk(663,`(opcional)`),Kg()(),Qc(664,`p`),Sk(665,`Indica que o campo será desabilitado.`),Kg()()(),Qc(666,`tr`,40)(667,`td`,15)(668,`div`,24)(669,`span`,25),Sk(670,` p-disabled-init-filter`),vu(671,`br`),Kg()()(),Qc(672,`td`,19)(673,`code`,28),Sk(674,`boolean`),Kg()(),Qc(675,`td`,21)(676,`p`)(677,`code`),Sk(678,`false`),Kg()()(),Qc(679,`td`,22)(680,`em`)(681,`strong`),Sk(682,`(opcional)`),Kg()(),Qc(683,`p`),Sk(684,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),Kg()()(),Qc(685,`tr`,41)(686,`td`,15)(687,`div`,24)(688,`span`,25),Sk(689,` p-disabled-tab-filter`),vu(690,`br`),Kg()()(),Qc(691,`td`,19)(692,`code`,28),Sk(693,`boolean`),Kg()(),Qc(694,`td`,21)(695,`p`)(696,`code`),Sk(697,`false`),Kg()()(),Qc(698,`td`,22)(699,`em`)(700,`strong`),Sk(701,`(opcional)`),Kg()(),Qc(702,`p`),Sk(703,`Se verdadeiro, desabilitará a busca de um item via TAB.`),Kg()()(),Qc(704,`tr`,42)(705,`td`,15)(706,`div`,24)(707,`span`,25),Sk(708,` p-emit-object-value`),vu(709,`br`),Kg()()(),Qc(710,`td`,19)(711,`code`,28),Sk(712,`boolean`),Kg()(),Qc(713,`td`,21)(714,`p`)(715,`code`),Sk(716,`false`),Kg()()(),Qc(717,`td`,22)(718,`em`)(719,`strong`),Sk(720,`(opcional)`),Kg()(),Qc(721,`p`),Sk(722,`Se verdadeiro, o evento `),Qc(723,`code`),Sk(724,`p-change`),Kg(),Sk(725,` receberá como argumento o `),Qc(726,`code`),Sk(727,`PoComboOption`),Kg(),Sk(728,` referente à opção selecionada.`),Kg()()(),Qc(729,`tr`,43)(730,`td`,15)(731,`div`,24)(732,`span`,25),Sk(733,` p-error-limit`),vu(734,`br`),Kg()()(),Qc(735,`td`,19)(736,`code`,28),Sk(737,`boolean`),Kg()(),Qc(738,`td`,21)(739,`p`)(740,`code`),Sk(741,`false`),Kg()()(),Qc(742,`td`,22)(743,`em`)(744,`strong`),Sk(745,`(opcional)`),Kg()(),Qc(746,`p`),Sk(747,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(748,`blockquote`)(749,`p`),Sk(750,`Caso essa propriedade seja definida como `),Qc(751,`code`),Sk(752,`true`),Kg(),Sk(753,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(754,`tr`,44)(755,`td`,15)(756,`div`,24)(757,`span`,25),Sk(758,` p-field-error-message`),vu(759,`br`),Kg()()(),Qc(760,`td`,19)(761,`code`,26),Sk(762,`string`),Kg()(),Qc(763,`td`,21),Sk(764,`-`),Kg(),Qc(765,`td`,22)(766,`em`)(767,`strong`),Sk(768,`(opcional)`),Kg()(),Qc(769,`p`),Sk(770,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(771,`blockquote`)(772,`p`),Sk(773,`Necessário que a propriedade `),Qc(774,`code`),Sk(775,`p-required`),Kg(),Sk(776,` esteja habilitada.`),Kg()()()(),Qc(777,`tr`,45)(778,`td`,15)(779,`div`,24)(780,`span`,25),Sk(781,` p-field-label`),vu(782,`br`),Kg()()(),Qc(783,`td`,19)(784,`code`,26),Sk(785,`string`),Kg()(),Qc(786,`td`,21)(787,`p`)(788,`code`),Sk(789,`label`),Kg()()(),Qc(790,`td`,22)(791,`em`)(792,`strong`),Sk(793,`(opcional)`),Kg()(),Qc(794,`p`),Sk(795,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(796,`code`),Sk(797,`p-options`),Kg(),Sk(798,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg(),Qc(799,`p`),Sk(800,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Kg()()(),Qc(801,`tr`,46)(802,`td`,15)(803,`div`,24)(804,`span`,25),Sk(805,` p-field-value`),vu(806,`br`),Kg()()(),Qc(807,`td`,19)(808,`code`,26),Sk(809,`string`),Kg()(),Qc(810,`td`,21)(811,`p`)(812,`code`),Sk(813,`value`),Kg()()(),Qc(814,`td`,22)(815,`em`)(816,`strong`),Sk(817,`(opcional)`),Kg()(),Qc(818,`p`),Sk(819,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(820,`code`),Sk(821,`p-options`),Kg(),Sk(822,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg(),Qc(823,`p`),Sk(824,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Kg()()(),Qc(825,`tr`,47)(826,`td`,15)(827,`div`,24)(828,`span`,25),Sk(829,` p-filter-minlength`),vu(830,`br`),Kg()()(),Qc(831,`td`,19)(832,`code`,38),Sk(833,`number`),Kg()(),Qc(834,`td`,21)(835,`p`)(836,`code`),Sk(837,`0`),Kg()()(),Qc(838,`td`,22)(839,`em`)(840,`strong`),Sk(841,`(opcional)`),Kg()(),Qc(842,`p`),Sk(843,`Valor mínimo de caracteres para realizar o filtro no serviço.`),Kg()()(),Qc(844,`tr`,48)(845,`td`,15)(846,`div`,24)(847,`span`,25),Sk(848,` p-filter-mode`),vu(849,`br`),Kg()()(),Qc(850,`td`,19)(851,`code`,49),Sk(852,`PoComboFilterMode`),Kg()(),Qc(853,`td`,21)(854,`p`)(855,`code`),Sk(856,`startsWith`),Kg()()(),Qc(857,`td`,22)(858,`em`)(859,`strong`),Sk(860,`(opcional)`),Kg()(),Qc(861,`p`),Sk(862,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Qc(863,`code`),Sk(864,`startsWith`),Kg(),Sk(865,`, `),Qc(866,`code`),Sk(867,`contains`),Kg(),Sk(868,` ou `),Qc(869,`code`),Sk(870,`endsWith`),Kg(),Sk(871,`.`),Kg(),Qc(872,`blockquote`)(873,`p`),Sk(874,`Quando utilizar a propriedade `),Qc(875,`code`),Sk(876,`p-filter-service`),Kg(),Sk(877,` esta propriedade será ignorada.`),Kg()()()(),Qc(878,`tr`,50)(879,`td`,15)(880,`div`,24)(881,`span`,25),Sk(882,` p-filter-params`),vu(883,`br`),Kg()()(),Qc(884,`td`,19)(885,`code`,51),Sk(886,`any`),Kg()(),Qc(887,`td`,21),Sk(888,`-`),Kg(),Qc(889,`td`,22)(890,`em`)(891,`strong`),Sk(892,`(opcional)`),Kg()(),Qc(893,`p`),Sk(894,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Qc(895,`em`),Sk(896,`PoComboFilter`),Kg(),Sk(897,`.`),Kg(),Qc(898,`blockquote`)(899,`p`),Sk(900,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),Kg()()()(),Qc(901,`tr`,52)(902,`td`,15)(903,`div`,24)(904,`span`,25),Sk(905,` p-filter-service`),vu(906,`br`),Kg()()(),Qc(907,`td`,19)(908,`code`,53),Sk(909,`PoComboFilter `),Kg(),Qc(910,`code`,26),Sk(911,` string`),Kg()(),Qc(912,`td`,21),Sk(913,`-`),Kg(),Qc(914,`td`,22)(915,`em`)(916,`strong`),Sk(917,`(opcional)`),Kg()(),Qc(918,`p`),Sk(919,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),Kg(),Qc(920,`p`),Sk(921,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Qc(922,`code`),Sk(923,`p-field-label`),Kg(),Sk(924,` e `),Qc(925,`code`),Sk(926,`p-field-value`),Kg(),Sk(927,` para a construção da lista de itens.`),Kg(),Qc(928,`p`),Sk(929,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Kg(),Qc(930,`pre`)(931,`code`),Sk(932,`url + ?filter=Peter
`),Kg()(),Qc(933,`p`),Sk(934,`Se for definida a propriedade `),Qc(935,`code`),Sk(936,`p-filter-params`),Kg(),Sk(937,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Qc(938,`code`),Sk(939,`{ age: 23 }`),Kg(),Sk(940,` a URL ficaria:`),Kg(),Qc(941,`pre`)(942,`code`),Sk(943,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Kg()()()(),Qc(944,`tr`,54)(945,`td`,15)(946,`div`,24)(947,`span`,25),Sk(948,` p-help`),vu(949,`br`),Kg()()(),Qc(950,`td`,19)(951,`code`,26),Sk(952,`string`),Kg()(),Qc(953,`td`,21),Sk(954,`-`),Kg(),Qc(955,`td`,22)(956,`em`)(957,`strong`),Sk(958,`(opcional)`),Kg()(),Qc(959,`p`),Sk(960,`Texto de apoio para o campo.`),Kg()()(),Qc(961,`tr`,55)(962,`td`,15)(963,`div`,24)(964,`span`,25),Sk(965,` p-icon`),vu(966,`br`),Kg()()(),Qc(967,`td`,19)(968,`code`,26),Sk(969,`string `),Kg(),Qc(970,`code`,56),Sk(971,` TemplateRef<void>`),Kg()(),Qc(972,`td`,21),Sk(973,`-`),Kg(),Qc(974,`td`,22)(975,`em`)(976,`strong`),Sk(977,`(opcional)`),Kg()(),Qc(978,`p`),Sk(979,`Define o ícone que será exibido no início do campo.`),Kg(),Qc(980,`p`),Sk(981,`É possível usar qualquer um dos ícones da `),Qc(982,`a`,57),Sk(983,`Biblioteca de ícones`),Kg(),Sk(984,`. conforme exemplo abaixo:`),Kg(),Qc(985,`pre`)(986,`code`),Sk(987,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),Kg()(),Qc(988,`p`),Sk(989,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(990,`em`),Sk(991,`Font Awesome`),Kg(),Sk(992,`, da seguinte forma:`),Kg(),Qc(993,`pre`)(994,`code`),Sk(995,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),Kg()(),Qc(996,`p`),Sk(997,`Outra opção seria a customização do ícone através do `),Qc(998,`code`),Sk(999,`TemplateRef`),Kg(),Sk(1e3,`, conforme exemplo abaixo:`),Kg(),Qc(1001,`pre`)(1002,`code`),Sk(1003,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(1004,`blockquote`)(1005,`p`),Sk(1006,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(1007,`code`),Sk(1008,`font-size: inherit`),Kg(),Sk(1009,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(1010,`tr`,58)(1011,`td`,15)(1012,`div`,24)(1013,`span`,25),Sk(1014,` p-infinite-scroll`),vu(1015,`br`),Kg()()(),Qc(1016,`td`,19)(1017,`code`,28),Sk(1018,`boolean`),Kg()(),Qc(1019,`td`,21)(1020,`p`)(1021,`code`),Sk(1022,`false`),Kg()()(),Qc(1023,`td`,22)(1024,`em`)(1025,`strong`),Sk(1026,`(opcional)`),Kg()(),Qc(1027,`p`),Sk(1028,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Kg()()(),Qc(1029,`tr`,59)(1030,`td`,15)(1031,`div`,24)(1032,`span`,25),Sk(1033,` p-infinite-scroll-distance`),vu(1034,`br`),Kg()()(),Qc(1035,`td`,19)(1036,`code`,38),Sk(1037,`number`),Kg()(),Qc(1038,`td`,21),Sk(1039,`-`),Kg(),Qc(1040,`td`,22)(1041,`em`)(1042,`strong`),Sk(1043,`(opcional)`),Kg()(),Qc(1044,`p`),Sk(1045,`Define o percentual necessário para disparar o evento `),Qc(1046,`code`),Sk(1047,`show-more`),Kg(),Sk(1048,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),Kg(),Qc(1049,`p`)(1050,`strong`),Sk(1051,`Exemplos`),Kg()(),Qc(1052,`ul`)(1053,`li`),Sk(1054,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Qc(1055,`code`),Sk(1056,`show-more`),Kg(),Sk(1057,` será disparado.`),Kg()()()(),Qc(1058,`tr`,60)(1059,`td`,15)(1060,`div`,16)(1061,`span`,17),Sk(1062,` (p-input-change)`),vu(1063,`br`),Kg()()(),Qc(1064,`td`,19)(1065,`code`,20),Sk(1066,`EventEmitter`),Kg()(),Qc(1067,`td`,21),Sk(1068,`-`),Kg(),Qc(1069,`td`,22)(1070,`em`)(1071,`strong`),Sk(1072,`(opcional)`),Kg()(),Qc(1073,`p`),Sk(1074,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),Kg()()(),Qc(1075,`tr`,61)(1076,`td`,15)(1077,`div`,16)(1078,`span`,17),Sk(1079,` (p-keydown)`),vu(1080,`br`),Kg()()(),Qc(1081,`td`,19)(1082,`code`,20),Sk(1083,`EventEmitter`),Kg()(),Qc(1084,`td`,21),Sk(1085,`-`),Kg(),Qc(1086,`td`,22)(1087,`em`)(1088,`strong`),Sk(1089,`(opcional)`),Kg()(),Qc(1090,`p`),Sk(1091,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(1092,`code`),Sk(1093,`KeyboardEvent`),Kg(),Sk(1094,` com informações sobre a tecla.`),Kg()()(),Qc(1095,`tr`,62)(1096,`td`,15)(1097,`div`,24)(1098,`span`,25),Sk(1099,` p-label`),vu(1100,`br`),Kg()()(),Qc(1101,`td`,19)(1102,`code`,26),Sk(1103,`string`),Kg()(),Qc(1104,`td`,21),Sk(1105,`-`),Kg(),Qc(1106,`td`,22)(1107,`em`)(1108,`strong`),Sk(1109,`(opcional)`),Kg()(),Qc(1110,`p`),Sk(1111,`Label no componente.`),Kg()()(),Qc(1112,`tr`,63)(1113,`td`,15)(1114,`div`,24)(1115,`span`,25),Sk(1116,` p-label-text-wrap`),vu(1117,`br`),Kg()()(),Qc(1118,`td`,19)(1119,`code`,28),Sk(1120,`boolean`),Kg()(),Qc(1121,`td`,21)(1122,`p`)(1123,`code`),Sk(1124,`false`),Kg()()(),Qc(1125,`td`,22)(1126,`em`)(1127,`strong`),Sk(1128,`(opcional)`),Kg()(),Qc(1129,`p`),Sk(1130,`Habilita a quebra automática do texto da propriedade `),Qc(1131,`code`),Sk(1132,`p-label`),Kg(),Sk(1133,`. Quando `),Qc(1134,`code`),Sk(1135,`p-label-text-wrap`),Kg(),Sk(1136,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(1137,`tr`,64)(1138,`td`,15)(1139,`div`,24)(1140,`span`,25),Sk(1141,` p-listbox-control-position`),vu(1142,`br`),Kg()()(),Qc(1143,`td`,19)(1144,`code`,65),Sk(1145,`'top' `),Kg(),Qc(1146,`code`,66),Sk(1147,` 'bottom'`),Kg()(),Qc(1148,`td`,21)(1149,`p`)(1150,`code`),Sk(1151,`bottom`),Kg()()(),Qc(1152,`td`,22)(1153,`em`)(1154,`strong`),Sk(1155,`(opcional)`),Kg()(),Qc(1156,`p`),Sk(1157,`Define a direção preferida para exibição do `),Qc(1158,`code`),Sk(1159,`listbox`),Kg(),Sk(1160,` em relação ao campo (`),Qc(1161,`code`),Sk(1162,`top`),Kg(),Sk(1163,` ou `),Qc(1164,`code`),Sk(1165,`bottom`),Kg(),Sk(1166,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg()()(),Qc(1167,`tr`,67)(1168,`td`,15)(1169,`div`,24)(1170,`span`,25),Sk(1171,` p-literals`),vu(1172,`br`),Kg()()(),Qc(1173,`td`,19)(1174,`code`,68),Sk(1175,`PoComboLiterals`),Kg()(),Qc(1176,`td`,21),Sk(1177,`-`),Kg(),Qc(1178,`td`,22)(1179,`em`)(1180,`strong`),Sk(1181,`(opcional)`),Kg()(),Qc(1182,`p`),Sk(1183,`Objeto com as literais usadas no `),Qc(1184,`code`),Sk(1185,`po-combo`),Kg(),Sk(1186,`.`),Kg(),Qc(1187,`p`),Sk(1188,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Qc(1189,`pre`)(1190,`code`),Sk(1191,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),Kg()(),Qc(1192,`p`),Sk(1193,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Qc(1194,`pre`)(1195,`code`),Sk(1196,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),Kg()(),Qc(1197,`blockquote`)(1198,`p`),Sk(1199,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(1200,`a`,69)(1201,`code`),Sk(1202,`PoI18nService`),Kg()(),Sk(1203,` ou do browser.`),Kg()()()(),Qc(1204,`tr`,70)(1205,`td`,15)(1206,`div`,24)(1207,`span`,25),Sk(1208,` p-loading`),vu(1209,`br`),Kg()()(),Qc(1210,`td`,19)(1211,`code`,28),Sk(1212,`boolean`),Kg()(),Qc(1213,`td`,21)(1214,`p`)(1215,`code`),Sk(1216,`false`),Kg()()(),Qc(1217,`td`,22)(1218,`em`)(1219,`strong`),Sk(1220,`(opcional)`),Kg()(),Qc(1221,`p`),Sk(1222,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(1223,`tr`,71)(1224,`td`,15)(1225,`div`,24)(1226,`span`,25),Sk(1227,` name`),vu(1228,`br`),Kg()()(),Qc(1229,`td`,19)(1230,`code`,26),Sk(1231,`string`),Kg()(),Qc(1232,`td`,21),Sk(1233,`-`),Kg(),Qc(1234,`td`,22)(1235,`p`),Sk(1236,`Nome do componente.`),Kg()()(),Qc(1237,`tr`,72)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),Sk(1241,` (ngModelChange)`),vu(1242,`br`),Kg()()(),Qc(1243,`td`,19)(1244,`code`,20),Sk(1245,`EventEmitter`),Kg()(),Qc(1246,`td`,21),Sk(1247,`-`),Kg(),Qc(1248,`td`,22)(1249,`em`)(1250,`strong`),Sk(1251,`(opcional)`),Kg()(),Qc(1252,`p`),Sk(1253,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Qc(1254,`p`),Sk(1255,`Na versão 12.2.0 do Angular a verificação `),Qc(1256,`code`),Sk(1257,`strictTemplates`),Kg(),Sk(1258,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Qc(1259,`pre`)(1260,`code`),Sk(1261,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),Kg()()()(),Qc(1262,`tr`,73)(1263,`td`,15)(1264,`div`,24)(1265,`span`,25),Sk(1266,` p-optional`),vu(1267,`br`),Kg()()(),Qc(1268,`td`,19)(1269,`code`,28),Sk(1270,`boolean`),Kg()(),Qc(1271,`td`,21)(1272,`p`)(1273,`code`),Sk(1274,`false`),Kg()()(),Qc(1275,`td`,22)(1276,`em`)(1277,`strong`),Sk(1278,`(opcional)`),Kg()(),Qc(1279,`p`),Sk(1280,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(1281,`blockquote`)(1282,`p`),Sk(1283,`Não será exibida a indicação se:`),Kg()(),Qc(1284,`ul`)(1285,`li`),Sk(1286,`O campo conter `),Qc(1287,`code`),Sk(1288,`p-required`),Kg(),Sk(1289,`;`),Kg(),Qc(1290,`li`),Sk(1291,`Não possuir `),Qc(1292,`code`),Sk(1293,`p-help`),Kg(),Sk(1294,` e/ou `),Qc(1295,`code`),Sk(1296,`p-label`),Kg(),Sk(1297,`.`),Kg()()()(),Qc(1298,`tr`,74)(1299,`td`,15)(1300,`div`,24)(1301,`span`,25),Sk(1302,` p-options`),vu(1303,`br`),Kg()()(),Qc(1304,`td`,19)(1305,`code`,75),Sk(1306,`Array<PoComboOption `),Kg(),Qc(1307,`code`,76),Sk(1308,` PoComboOptionGroup `),Kg(),Qc(1309,`code`,77),Sk(1310,` any>`),Kg()(),Qc(1311,`td`,21),Sk(1312,`-`),Kg(),Qc(1313,`td`,22)(1314,`p`),Sk(1315,`Nesta propriedade define a lista de opções do `),Qc(1316,`code`),Sk(1317,`po-combo`),Kg(),Sk(1318,`.`),Kg(),Qc(1319,`blockquote`)(1320,`p`),Sk(1321,`A lista pode ser definida utilizando um array com o valor representando o `),Qc(1322,`code`),Sk(1323,`value`),Kg(),Sk(1324,` e o `),Qc(1325,`code`),Sk(1326,`label`),Kg(),Sk(1327,` das seguintes formas:`),Kg()(),Qc(1328,`pre`)(1329,`code`),Sk(1330,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),Kg()(),Qc(1331,`pre`)(1332,`code`),Sk(1333,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),Kg()(),Qc(1334,`ul`)(1335,`li`),Sk(1336,`Aconselha-se utilizar valores distintos no `),Qc(1337,`code`),Sk(1338,`label`),Kg(),Sk(1339,` e `),Qc(1340,`code`),Sk(1341,`value`),Kg(),Sk(1342,` dos itens.`),Kg()()()(),Qc(1343,`tr`,78)(1344,`td`,15)(1345,`div`,24)(1346,`span`,25),Sk(1347,` p-placeholder`),vu(1348,`br`),Kg()()(),Qc(1349,`td`,19)(1350,`code`,26),Sk(1351,`string`),Kg()(),Qc(1352,`td`,21),Sk(1353,`-`),Kg(),Qc(1354,`td`,22)(1355,`p`),Sk(1356,`Mensagem apresentada enquanto o campo estiver vazio.`),Kg()()(),Qc(1357,`tr`,79)(1358,`td`,15)(1359,`div`,24)(1360,`span`,25),Sk(1361,` p-helper`),vu(1362,`br`),Kg()()(),Qc(1363,`td`,19)(1364,`code`,80),Sk(1365,`PoHelperOptions `),Kg(),Qc(1366,`code`,26),Sk(1367,` string`),Kg()(),Qc(1368,`td`,21),Sk(1369,`-`),Kg(),Qc(1370,`td`,22)(1371,`em`)(1372,`strong`),Sk(1373,`(opcional)`),Kg()(),Qc(1374,`p`),Sk(1375,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1376,`code`),Sk(1377,`p-label`),Kg(),Sk(1378,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1379,`code`),Sk(1380,`p-label`),Kg(),Sk(1381,`.`),Kg(),Qc(1382,`blockquote`)(1383,`p`),Sk(1384,`Para mais informações acesse: `),Qc(1385,`a`,81),Sk(1386,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1387,`.`),Kg()(),Qc(1388,`blockquote`)(1389,`p`),Sk(1390,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1391,`code`),Sk(1392,`p-additional-help-tooltip`),Kg(),Sk(1393,` e `),Qc(1394,`code`),Sk(1395,`p-additional-help`),Kg(),Sk(1396,`) será ignorado.`),Kg()()()(),Qc(1397,`tr`,82)(1398,`td`,15)(1399,`div`,24)(1400,`span`,25),Sk(1401,` p-remove-initial-filter`),vu(1402,`br`),Kg()()(),Qc(1403,`td`,19)(1404,`code`,28),Sk(1405,`boolean`),Kg()(),Qc(1406,`td`,21)(1407,`p`)(1408,`code`),Sk(1409,`false`),Kg()()(),Qc(1410,`td`,22)(1411,`em`)(1412,`strong`),Sk(1413,`(opcional)`),Kg()(),Qc(1414,`p`),Sk(1415,`Define se o filtro inicial será removido no primeiro clique do campo.`),Kg(),Qc(1416,`p`),Sk(1417,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),Kg()()(),Qc(1418,`tr`,83)(1419,`td`,15)(1420,`div`,24)(1421,`span`,25),Sk(1422,` p-required`),vu(1423,`br`),Kg()()(),Qc(1424,`td`,19)(1425,`code`,28),Sk(1426,`boolean`),Kg()(),Qc(1427,`td`,21)(1428,`p`)(1429,`code`),Sk(1430,`false`),Kg()()(),Qc(1431,`td`,22)(1432,`em`)(1433,`strong`),Sk(1434,`(opcional)`),Kg()(),Qc(1435,`p`),Sk(1436,`Define que o campo será obrigatório.`),Kg()()(),Qc(1437,`tr`,84)(1438,`td`,15)(1439,`div`,24)(1440,`span`,25),Sk(1441,` p-show-required`),vu(1442,`br`),Kg()()(),Qc(1443,`td`,19)(1444,`code`,28),Sk(1445,`boolean`),Kg()(),Qc(1446,`td`,21),Sk(1447,`-`),Kg(),Qc(1448,`td`,22)(1449,`p`),Sk(1450,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1451,`blockquote`)(1452,`p`),Sk(1453,`Não será exibida a indicação se:`),Kg()(),Qc(1454,`ul`)(1455,`li`),Sk(1456,`Não possuir `),Qc(1457,`code`),Sk(1458,`p-help`),Kg(),Sk(1459,` e/ou `),Qc(1460,`code`),Sk(1461,`p-label`),Kg(),Sk(1462,`.`),Kg()()()(),Qc(1463,`tr`,85)(1464,`td`,15)(1465,`div`,24)(1466,`span`,25),Sk(1467,` p-size`),vu(1468,`br`),Kg()()(),Qc(1469,`td`,19)(1470,`code`,26),Sk(1471,`string`),Kg()(),Qc(1472,`td`,21)(1473,`p`)(1474,`code`),Sk(1475,`medium`),Kg()()(),Qc(1476,`td`,22)(1477,`em`)(1478,`strong`),Sk(1479,`(opcional)`),Kg()(),Qc(1480,`p`),Sk(1481,`Define o tamanho do componente:`),Kg(),Qc(1482,`ul`)(1483,`li`)(1484,`code`),Sk(1485,`small`),Kg(),Sk(1486,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1487,`li`)(1488,`code`),Sk(1489,`medium`),Kg(),Sk(1490,`: altura do input como 44px.`),Kg()(),Qc(1491,`blockquote`)(1492,`p`),Sk(1493,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1494,`code`),Sk(1495,`medium`),Kg(),Sk(1496,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1497,`a`,86),Sk(1498,`po-theme`),Kg(),Sk(1499,`.`),Kg()()()(),Qc(1500,`tr`,87)(1501,`td`,15)(1502,`div`,24)(1503,`span`,25),Sk(1504,` p-sort`),vu(1505,`br`),Kg()()(),Qc(1506,`td`,19)(1507,`code`,28),Sk(1508,`boolean`),Kg()(),Qc(1509,`td`,21),Sk(1510,`-`),Kg(),Qc(1511,`td`,22)(1512,`p`),Sk(1513,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Kg()()()(),Qc(1514,`h3`,10),Sk(1515,`Métodos`),Kg(),Qc(1516,`table`,88)(1517,`tr`,89)(1518,`th`,90)(1519,`div`,24)(1520,`h4`)(1521,`span`,25),Sk(1522,` focus `),Kg()()()()(),Qc(1523,`tr`,22)(1524,`td`,22)(1525,`p`),Sk(1526,`Função que atribui foco ao componente.`),Kg(),Qc(1527,`p`),Sk(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1529,`pre`)(1530,`code`),Sk(1531,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),Kg()()()()(),vu(1532,`br`),Qc(1533,`table`,91)(1534,`tr`,89)(1535,`th`,90)(1536,`div`,24)(1537,`h4`)(1538,`span`,25),Sk(1539,` showAdditionalHelp `),Kg()()()()(),Qc(1540,`tr`,22)(1541,`td`,22)(1542,`p`),Sk(1543,`Método que exibe `),Qc(1544,`code`),Sk(1545,`p-helper`),Kg(),Sk(1546,` ou executa a ação definida em `),Qc(1547,`code`),Sk(1548,`p-helper{eventOnClick}`),Kg(),Sk(1549,` ou em `),Qc(1550,`code`),Sk(1551,`p-additionalHelp`),Kg(),Sk(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1553,`code`),Sk(1554,`p-keydown`),Kg(),Sk(1555,`.`),Kg(),Qc(1556,`blockquote`)(1557,`p`),Sk(1558,`Exibe ou oculta o conteúdo do componente `),Qc(1559,`code`),Sk(1560,`po-helper`),Kg(),Sk(1561,` quando o componente estiver com foco.`),Kg()(),Qc(1562,`pre`)(1563,`code`),Sk(1564,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),Kg()(),Qc(1565,`pre`)(1566,`code`),Sk(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1568,`br`),Qc(1569,`h3`),Sk(1570,`Interfaces`),Kg(),Qc(1571,`h4`,92)(1572,`code`,5),Sk(1573,`PoComboFilter`),Kg()(),Qc(1574,`div`,2)(1575,`p`),Sk(1576,`Interface para os serviços que serão utilizados no po-combo.`),Kg()(),Qc(1577,`h4`,10),Sk(1578,`Métodos`),Kg(),Qc(1579,`table`,93)(1580,`tr`,89)(1581,`th`,90)(1582,`div`,24)(1583,`h4`)(1584,`span`,25),Sk(1585,` getFilteredData `),Kg()()()()(),Qc(1586,`tr`,22)(1587,`td`,22)(1588,`p`),Sk(1589,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),Kg()()()(),Qc(1590,`h5`)(1591,`b`),Sk(1592,`Parâmetros`),Kg()(),Qc(1593,`table`,11)(1594,`tr`,12)(1595,`th`,13),Sk(1596,`Nome`),Kg(),Qc(1597,`th`,13),Sk(1598,`Tipo`),Kg(),Qc(1599,`th`,13),Sk(1600,`Descrição`),Kg()(),Qc(1601,`tr`,89)(1602,`td`,15),Sk(1603,` params`),Kg(),Qc(1604,`td`,19)(1605,`code`,94),Sk(1606,` any `),Kg()(),Qc(1607,`td`,22)(1608,`p`),Sk(1609,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Kg()()(),Qc(1610,`tr`,89)(1611,`td`,15),Sk(1612,` filterParams`),Kg(),Qc(1613,`td`,19)(1614,`code`,94),Sk(1615,` any `),Kg()(),Qc(1616,`td`,22)(1617,`p`),Sk(1618,`Valor informado através da propriedade `),Qc(1619,`code`),Sk(1620,`p-filter-params`),Kg(),Sk(1621,`.`),Kg()()()(),vu(1622,`br`),Qc(1623,`table`,95)(1624,`tr`,89)(1625,`th`,90)(1626,`div`,24)(1627,`h4`)(1628,`span`,25),Sk(1629,` getObjectByValue `),Kg()()()()(),Qc(1630,`tr`,22)(1631,`td`,22)(1632,`p`),Sk(1633,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),Kg()()()(),Qc(1634,`h5`)(1635,`b`),Sk(1636,`Parâmetros`),Kg()(),Qc(1637,`table`,11)(1638,`tr`,12)(1639,`th`,13),Sk(1640,`Nome`),Kg(),Qc(1641,`th`,13),Sk(1642,`Tipo`),Kg(),Qc(1643,`th`,13),Sk(1644,`Descrição`),Kg()(),Qc(1645,`tr`,89)(1646,`td`,15),Sk(1647,` value`),Kg(),Qc(1648,`td`,19)(1649,`code`,26),Sk(1650,` string `),Kg(),Qc(1651,`code`,38),Sk(1652,` number `),Kg()(),Qc(1653,`td`,22)(1654,`p`),Sk(1655,`Valor responsável por realizar a busca de um único objeto.`),Kg()()(),Qc(1656,`tr`,89)(1657,`td`,15),Sk(1658,` filterParams`),Kg(),Qc(1659,`td`,19)(1660,`code`,94),Sk(1661,` any `),Kg()(),Qc(1662,`td`,22)(1663,`p`),Sk(1664,`Valor informado através da propriedade `),Qc(1665,`code`),Sk(1666,`p-filter-params`),Kg(),Sk(1667,`.`),Kg()()()(),vu(1668,`br`),Qc(1669,`h4`,96)(1670,`code`,5),Sk(1671,`PoComboLiterals`),Kg()(),Qc(1672,`div`,2)(1673,`p`),Sk(1674,`Interface para definição das literais usadas no `),Qc(1675,`code`),Sk(1676,`po-combo`),Kg(),Sk(1677,`.`),Kg()(),Qc(1678,`h4`,10),Sk(1679,`Propriedades`),Kg(),Qc(1680,`table`,11)(1681,`tr`,12)(1682,`th`,13),Sk(1683,`Nome`),Kg(),Qc(1684,`th`,13),Sk(1685,`Tipo`),Kg(),Qc(1686,`th`,13),Sk(1687,`Descrição`),Kg()(),Qc(1688,`tr`,97)(1689,`td`,15)(1690,`div`,24)(1691,`span`,25),Sk(1692,` chooseOption`),vu(1693,`br`),Kg()()(),Qc(1694,`td`,19)(1695,`code`,26),Sk(1696,`string`),Kg()(),Qc(1697,`td`,22)(1698,`em`)(1699,`strong`),Sk(1700,`(opcional)`),Kg()(),Qc(1701,`p`),Sk(1702,`Texto exibido quando o combo estiver vazio.`),Kg()()(),Qc(1703,`tr`,98)(1704,`td`,15)(1705,`div`,24)(1706,`span`,25),Sk(1707,` clean`),vu(1708,`br`),Kg()()(),Qc(1709,`td`,19)(1710,`code`,26),Sk(1711,`string`),Kg()(),Qc(1712,`td`,22)(1713,`em`)(1714,`strong`),Sk(1715,`(opcional)`),Kg()(),Qc(1716,`p`),Sk(1717,`Texto do aria-label do botão de limpar`),Kg()()(),Qc(1718,`tr`,99)(1719,`td`,15)(1720,`div`,24)(1721,`span`,25),Sk(1722,` noData`),vu(1723,`br`),Kg()()(),Qc(1724,`td`,19)(1725,`code`,26),Sk(1726,`string`),Kg()(),Qc(1727,`td`,22)(1728,`em`)(1729,`strong`),Sk(1730,`(opcional)`),Kg()(),Qc(1731,`p`),Sk(1732,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),Kg()()()(),Qc(1733,`h4`,100)(1734,`code`,5),Sk(1735,`PoComboOptionGroup`),Kg()(),Qc(1736,`div`,2)(1737,`p`),Sk(1738,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Qc(1739,`code`),Sk(1740,`po-combo`),Kg(),Sk(1741,`.`),Kg()(),Qc(1742,`h4`,10),Sk(1743,`Propriedades`),Kg(),Qc(1744,`table`,11)(1745,`tr`,12)(1746,`th`,13),Sk(1747,`Nome`),Kg(),Qc(1748,`th`,13),Sk(1749,`Tipo`),Kg(),Qc(1750,`th`,13),Sk(1751,`Descrição`),Kg()(),Qc(1752,`tr`,101)(1753,`td`,15)(1754,`div`,24)(1755,`span`,25),Sk(1756,` label`),vu(1757,`br`),Kg()()(),Qc(1758,`td`,19)(1759,`code`,26),Sk(1760,`string`),Kg()(),Qc(1761,`td`,22)(1762,`p`),Sk(1763,`Título para cada grupo de opções.`),Kg(),Qc(1764,`p`),Sk(1765,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),Kg()()(),Qc(1766,`tr`,102)(1767,`td`,15)(1768,`div`,24)(1769,`span`,25),Sk(1770,` options`),vu(1771,`br`),Kg()()(),Qc(1772,`td`,19)(1773,`code`,103),Sk(1774,`Array<PoComboOption>`),Kg()(),Qc(1775,`td`,22)(1776,`p`),Sk(1777,`Lista de itens a serem exibidos.`),Kg()()()(),Qc(1778,`h4`,104)(1779,`code`,5),Sk(1780,`PoComboOption`),Kg()(),Qc(1781,`div`,2)(1782,`p`),Sk(1783,`Interface que define as opções que serão exibidas na lista do `),Qc(1784,`code`),Sk(1785,`po-combo`),Kg(),Sk(1786,`.`),Kg()(),Qc(1787,`h4`,10),Sk(1788,`Propriedades`),Kg(),Qc(1789,`table`,11)(1790,`tr`,12)(1791,`th`,13),Sk(1792,`Nome`),Kg(),Qc(1793,`th`,13),Sk(1794,`Tipo`),Kg(),Qc(1795,`th`,13),Sk(1796,`Descrição`),Kg()(),Qc(1797,`tr`,105)(1798,`td`,15)(1799,`div`,24)(1800,`span`,25),Sk(1801,` label`),vu(1802,`br`),Kg()()(),Qc(1803,`td`,19)(1804,`code`,26),Sk(1805,`string`),Kg()(),Qc(1806,`td`,22)(1807,`em`)(1808,`strong`),Sk(1809,`(opcional)`),Kg()(),Qc(1810,`p`),Sk(1811,`Descrição exibida nas opções da lista.`),Kg(),Qc(1812,`blockquote`)(1813,`p`),Sk(1814,`Caso não seja definida será assumido o valor definido na propriedade `),Qc(1815,`code`),Sk(1816,`value`),Kg(),Sk(1817,`.`),Kg()()()(),Qc(1818,`tr`,106)(1819,`td`,15)(1820,`div`,24)(1821,`span`,25),Sk(1822,` value`),vu(1823,`br`),Kg()()(),Qc(1824,`td`,19)(1825,`code`,26),Sk(1826,`string `),Kg(),Qc(1827,`code`,38),Sk(1828,` number`),Kg()(),Qc(1829,`td`,22)(1830,`p`),Sk(1831,`Valor do objeto que será atribuído ao `),Qc(1832,`em`),Sk(1833,`model`),Kg(),Sk(1834,`.`),Kg()()()(),Qc(1835,`h3`),Sk(1836,`Enums`),Kg(),Qc(1837,`h4`,107)(1838,`code`,5),Sk(1839,`PoComboFilterMode`),Kg()(),Qc(1840,`div`,2)(1841,`p`),Sk(1842,`Define o tipo de busca usado no po-combo.`),Kg()(),Qc(1843,`h4`,10),Sk(1844,`Propriedades`),Kg(),Qc(1845,`table`,11)(1846,`tr`,12)(1847,`th`,13),Sk(1848,`Nome`),Kg(),Qc(1849,`th`,13),Sk(1850,`Descrição`),Kg()(),Qc(1851,`tr`,108)(1852,`td`,15)(1853,`div`,24)(1854,`span`,25),Sk(1855,` startsWith`),vu(1856,`br`),Kg()()(),Qc(1857,`td`,22)(1858,`p`),Sk(1859,`Verifica se o texto `),Qc(1860,`em`),Sk(1861,`inicia`),Kg(),Sk(1862,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),Kg()()(),Qc(1863,`tr`,109)(1864,`td`,15)(1865,`div`,24)(1866,`span`,25),Sk(1867,` contains`),vu(1868,`br`),Kg()()(),Qc(1869,`td`,22)(1870,`p`),Sk(1871,`Verifica se o texto `),Qc(1872,`em`),Sk(1873,`contém`),Kg(),Sk(1874,` o valor pesquisado.`),Kg()()(),Qc(1875,`tr`,110)(1876,`td`,15)(1877,`div`,24)(1878,`span`,25),Sk(1879,` endsWith`),vu(1880,`br`),Kg()()(),Qc(1881,`td`,22)(1882,`p`),Sk(1883,`Verifica se o texto `),Qc(1884,`em`),Sk(1885,`finaliza`),Kg(),Sk(1886,` com o valor pesquisado.`),Kg()()()(),Qc(1887,`h3`,111),Sk(1888,`Subcomponentes`),Kg(),Qc(1889,`ul`,112)(1890,`li`)(1891,`a`,113),Sk(1892,`Combo Option Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function zt(a,O){if(a&1){let m=YO();Qc(0,`po-tab`,4),vt$1(`p-click`,function(){B_(m);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-combo-basic-view`)(2,`sample-po-combo-labs-view`)(3,`sample-po-combo-scheduling-view`)(4,`sample-po-combo-transfer-view`)(5,`sample-po-combo-heroes-view`)(6,`sample-po-combo-heroes-reactive-form-view`)(7,`sample-po-combo-infinity-scroll-view`)(8,`sample-po-combo-hotels-view`),Kg()}if(a&2){let m=ek();Rb(`p-active`,m.activeTab===`web`)}}var Rt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Combo`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,zt,9,1,`po-tab`,2),Qc(3,`po-tab`,3),vt$1(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-combo-doc`),Kg()()()),p&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Rt),GV]})}return a})();var un=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,it]})}return a})();export{un as DocPoComboModule};