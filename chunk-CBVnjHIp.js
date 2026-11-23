import{m as P,p as M}from"./main-RBGX2DMP.js";import{$a as tm,Ar as I,At as Zte,Ca as j_,Dr as Gk,Ea as jk,F as Joe,G as Nf,Gi as Yb,Ha as p,Hi as Xm,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ji as ZL,L as Koe,Lr as Kg,Nn as tie,Oa as kI,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Qr as OZ,Rn as voe,Ti as U_,Tr as Gb,Vt as c4,W as Mze,Wi as YO,Wr as MZ,Xr as Nk,Zr as No,_a as iF,_o as z0,an as ia,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge,fo as xo,ga as i1,gi as Rb,h as Dte,hr as Db,io as vt,j as I4,k as Goe,ki as V_,kt as Zoe,li as Qc,lt as Ss,oo as we,pi as R,qa as qk,ra as de,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,to as uF,tt as R4,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,ya as ik,yr as Du,zn as w4}from"./chunk-BQDTQO8h.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,D)=>[a,D];var Be=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&vu(0,`po-combo`,0),p&2&&Rb(`p-options`,jk(3,rt,Lk(1,at),Lk(2,lt)))},dependencies:[w4],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-basic/sample-po-combo-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-basic/sample-po-combo-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Be],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,n){let{label:m,value:s}=p;if(n){let i=r.findIndex(Se=>Se.label===n&&`options`in Se);return i===-1?(this.insertGroupIntoSelectInput(n),[...r,{label:n,options:[{label:m,value:s}]}]):(r[i].options.push({label:m,value:s}),r)}return[...r,{label:m,value:s}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let m=YO();Qc(0,`po-combo`,2),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.combo,i)||(n.combo=i),U_(i)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,3),vu(3,`po-info`,4)(4,`po-info`,5),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0),vu(8,`po-divider`,6),Qc(9,`div`,3)(10,`po-switch`,7),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),U_(i)}),Kg(),Qc(11,`po-select`,8),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),U_(i)}),vt(`p-change`,function(){return n.optionsGroupSelection()}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.optionsGroup,i)||(n.optionsGroup=i),U_(i)}),Kg()(),vu(13,`po-divider`,10),Qc(14,`div`,3)(15,`po-input`,11),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.option.label,i)||(n.option.label=i),U_(i)}),Kg(),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.option.value,i)||(n.option.value=i),U_(i)}),Kg()(),Qc(17,`div`,3)(18,`po-button`,13),vt(`p-click`,function(){return n.addOption()}),Kg()()(),vu(19,`po-divider`),Qc(20,`form`,null,1)(22,`po-input`,14),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.label,i)||(n.label=i),U_(i)}),Kg(),Qc(23,`po-input`,15),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.help,i)||(n.help=i),U_(i)}),Kg(),Qc(24,`po-input`,16),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.helperText,i)||(n.helperText=i),U_(i)}),Kg(),Qc(25,`po-input`,17),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.placeholder,i)||(n.placeholder=i),U_(i)}),Kg(),Qc(26,`po-input`,18),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),U_(i)}),Kg(),Qc(27,`div`,3)(28,`po-checkbox-group`,19),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.properties,i)||(n.properties=i),U_(i)}),Kg(),Qc(29,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.icon,i)||(n.icon=i),U_(i)}),Kg(),Qc(30,`po-radio-group`,21),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.filterMode,i)||(n.filterMode=i),U_(i)}),Kg(),Qc(31,`po-radio-group`,22),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.size,i)||(n.size=i),U_(i)}),Kg(),Qc(32,`po-radio-group`,23),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.listboxPosition,i)||(n.listboxPosition=i),U_(i)}),Kg()(),Qc(33,`div`,3)(34,`po-input`,24),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.filterService,i)||(n.filterService=i),U_(i)}),Kg(),Qc(35,`po-input`,25),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.literals,i)||(n.literals=i),U_(i)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg()(),Qc(36,`div`,3)(37,`po-input`,26),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.fieldValue,i)||(n.fieldValue=i),U_(i)}),Kg(),Qc(38,`po-input`,27),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.fieldLabel,i)||(n.fieldLabel=i),U_(i)}),Kg()(),Qc(39,`div`,3)(40,`po-number`,28),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.debounceTime,i)||(n.debounceTime=i),U_(i)}),Kg(),Qc(41,`po-number`,29),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.filterMinlength,i)||(n.filterMinlength=i),U_(i)}),Kg()(),Qc(42,`div`,3)(43,`po-button`,30),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(p&2){let m=ik(7);Yb(`ngModel`,n.combo),Rb(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),W0(),wg(3),Rb(`p-value`,n.combo),wg(),Rb(`p-value`,n.event),wg(6),Yb(`ngModel`,n.comboOptionGroupSwitch),W0(),wg(),Yb(`ngModel`,n.selectedOptionsGroup),Rb(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),W0(),wg(),Yb(`ngModel`,n.optionsGroup),Rb(`p-disabled`,!n.comboOptionGroupSwitch),W0(),wg(3),Yb(`ngModel`,n.option.label),W0(),wg(),Yb(`ngModel`,n.option.value),W0(),wg(2),Rb(`p-disabled`,m.form.invalid),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.placeholder),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(2),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.icon),Rb(`p-options`,n.iconsOptions),W0(),wg(),Yb(`ngModel`,n.filterMode),Rb(`p-options`,n.filterModeOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.listboxPosition),Rb(`p-options`,n.listboxPositionOptions),W0(),wg(2),Yb(`ngModel`,n.filterService),W0(),wg(),Yb(`ngModel`,n.literals),W0(),wg(2),Yb(`ngModel`,n.fieldValue),W0(),wg(),Yb(`ngModel`,n.fieldLabel),W0(),wg(2),Yb(`ngModel`,n.debounceTime),W0(),wg(),Yb(`ngModel`,n.filterMinlength),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,w4,j4,Goe,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var Ie=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-labs/sample-po-combo-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-labs/sample-po-combo-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-combo
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,je],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var ct=[`schedulingForm`];function ut(a,D){if(a&1&&(Qc(0,`div`,3),vu(1,`po-avatar`,15),Qc(2,`p`,14),Sk(3),Kg()()),a&2){let r=ek().$implicit,p=ek();wg(),Rb(`p-src`,p.getStateByLabel(r.label)),wg(2),Gb(r.label)}}function bt(a,D){if(a&1&&(Qc(0,`div`,14),Sk(1),Kg()),a&2){let r=ek().$implicit;wg(),Gb(r.label)}}function gt(a,D){if(a&1&&FO(0,ut,4,2,`div`,3)(1,bt,2,1,`div`,14),a&2){let r=D.$implicit;VO(r.options?0:1)}}var ze=(()=>{class a{poNotification=p(Ru);schedulingService=p(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(r=``){this.poNotification.success(`Great ${r}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(r){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[r]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Du(ct,7),p&2){let m;No(m=xo())&&(n.form=m.first)}},standalone:!1,features:[we([fe])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let m=YO();Qc(0,`div`,1)(1,`div`,2),Sk(2,`Pre-appointment scheduling`),Kg()(),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.name,i)||(n.name=i),U_(i)}),Kg(),Qc(7,`po-email`,5),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.email,i)||(n.email=i),U_(i)}),Kg()(),Qc(8,`div`,3)(9,`po-datepicker`,6),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.birthday,i)||(n.birthday=i),U_(i)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.phone,i)||(n.phone=i),U_(i)}),Kg()(),Qc(11,`div`,3)(12,`po-combo`,8),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.city,i)||(n.city=i),U_(i)}),Db(13,gt,2,1,`ng-template`,9),Kg(),Qc(14,`po-select`,10),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.typeScheduling,i)||(n.typeScheduling=i),U_(i)}),Kg(),Qc(15,`po-combo`,11),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.medicalSpecialty,i)||(n.medicalSpecialty=i),U_(i)}),Kg()(),Qc(16,`div`,3)(17,`po-textarea`,12),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.informations,i)||(n.informations=i),U_(i)}),Kg()(),Qc(18,`div`,3)(19,`po-button`,13),vt(`p-click`,function(){return n.confirmPreAppointment(n.name)}),Kg()()()}if(p&2){let m=ik(4);wg(6),Yb(`ngModel`,n.name),W0(),wg(),Yb(`ngModel`,n.email),W0(),wg(2),Yb(`ngModel`,n.birthday),W0(),wg(),Yb(`ngModel`,n.phone),W0(),wg(2),Yb(`ngModel`,n.city),Rb(`p-options`,n.citiesOptions),W0(),wg(2),Yb(`ngModel`,n.typeScheduling),Rb(`p-options`,n.typeSchedulings),W0(),wg(),Yb(`ngModel`,n.medicalSpecialty),Rb(`p-options`,n.medicalSpecialtyOptions),W0(),wg(2),Yb(`ngModel`,n.informations),W0(),wg(2),Rb(`p-disabled`,m.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,c4,oi,w4,Dte,tie,p5,j4,Koe,Zoe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-combo-scheduling`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Scheduling`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-scheduling`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-text-center">
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
            <p class="po-sm-10 po-md-9 po-lg-11">`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` option.label `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` option.label `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
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
`),Kg()()()(),Qc(28,`po-tab`,9)(29,`div`)(30,`label`,6),Sk(31,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),Kg(),Qc(32,`div`,10)(33,`pre`,11),Sk(34,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Qc(35,`label`,6),Sk(36,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),Kg(),Qc(37,`div`,12)(38,`pre`,11),Sk(39,`import { Injectable } from '@angular/core';

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
`),Kg()()()(),Qc(40,`po-tab`,13)(41,`div`)(42,`label`,6),Sk(43,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),Kg(),Qc(44,`div`,14)(45,`pre`,15),Sk(46,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),Kg()()()()()(),vu(47,`hr`))},dependencies:[P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var Et=[`transferForm`];function St(a,D){if(a&1&&(Qc(0,`div`,3),vu(1,`po-avatar`,15),Qc(2,`div`,16)(3,`div`,17),Sk(4),Kg(),Qc(5,`div`,18),Sk(6),Kg()()()),a&2){let r=D.$implicit;wg(4),Gb(r.label),wg(2),tm(`Account: `,r.value)}}var Ue=(()=>{class a{poNotification=p(Ru);form;poModal;contact;dateTransfer=/* @__PURE__ */ new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:/* @__PURE__ */ new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Du(Et,7)(ia,7),p&2){let m;No(m=xo())&&(n.form=m.first),No(m=xo())&&(n.poModal=m.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let m=YO();Qc(0,`div`,1)(1,`div`,2),Sk(2,`Banking Transfer`),Kg()(),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.typeAccount,i)||(n.typeAccount=i),U_(i)}),Kg(),Qc(7,`po-combo`,5),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.contact,i)||(n.contact=i),U_(i)}),Db(8,St,7,2,`ng-template`,6),Kg()(),Qc(9,`div`,3)(10,`po-decimal`,7),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.value,i)||(n.value=i),U_(i)}),Kg(),Qc(11,`po-datepicker`,8),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.dateTransfer,i)||(n.dateTransfer=i),U_(i)}),Kg()(),Qc(12,`div`,3)(13,`po-button`,9),vt(`p-click`,function(){return n.transfer()}),Kg()()(),Qc(14,`po-modal`,10)(15,`div`,3),vu(16,`po-info`,11)(17,`po-info`,12),Kg(),vu(18,`po-divider`),Qc(19,`div`,3),vu(20,`po-info`,13)(21,`po-info`,14),Gk(22,`date`),Kg()()}if(p&2){let m=ik(4);wg(6),Yb(`ngModel`,n.typeAccount),Rb(`p-options`,n.typeAccounts),W0(),wg(),Yb(`ngModel`,n.contact),W0(),wg(3),Yb(`ngModel`,n.value),W0(),wg(),Yb(`ngModel`,n.dateTransfer),W0(),wg(2),Rb(`p-disabled`,m.invalid),wg(),Rb(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),wg(2),Rb(`p-value`,n.typeAccount),wg(),Rb(`p-value`,n.contact),wg(3),Rb(`p-value`,n.value),wg(),Rb(`p-value`,Nk(qk(22,13,n.dateTransfer)))}},dependencies:[AZ,MZ,TZ,QL,WL,c4,oi,Nf,w4,Dte,tie,voe,Koe,Joe,ia,uF],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-combo-transfer`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Banking Transfer`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-transfer`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-text-center">
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
            <div class="po-font-text-large-bold">`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` option.label `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</div>
            <div class="po-font-text-smaller">Account: `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` option.value `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</div>
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

    <po-info class="po-md-6" p-label="Date to transfer" p-value="`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` dateTransfer | date `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`"> </po-info>
  </div>
</po-modal>
`),Kg()()()(),Qc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Sk(37,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),Kg(),Qc(38,`div`,10)(39,`pre`,11),Sk(40,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(41,`hr`))},dependencies:[P,tre,are,Ue],encapsulation:2,changeDetection:1})}return a})();function xt(a,D){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Kg()),a&2){let r=D;wg(),Rb(`p-value`,r.name),wg(),Rb(`p-value`,r.nickname),wg(),Rb(`p-value`,r.email)}}var Ke=(()=>{class a{http=p(kI);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}onChangeHero(r){this.hero$=this.getHero(r)}getHero(r){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Qc(0,`div`,0)(1,`po-widget`,1),vt(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Qc(2,`po-combo`,2),z0(),Kb(`ngModelChange`,function(s){return Tk(n.heroName,s)||(n.heroName=s),s}),vt(`p-change`,function(s){return n.onChangeHero(s)}),Kg(),FO(3,xt,4,3,`div`,0),Gk(4,`async`),Kg()()),p&2){let m;wg(),Rb(`p-primary-label`,n.knowMoreLabel),wg(),Yb(`ngModel`,n.heroName),W0(),wg(),VO((m=qk(4,3,n.hero$))?3:-1,m)}},dependencies:[MZ,QL,w4,Joe,bae,iF],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Heroes`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-heroes`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Ke],encapsulation:2,changeDetection:1})}return a})();function Pt(a,D){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Kg()),a&2){let r=D;wg(),Rb(`p-value`,r.name),wg(),Rb(`p-value`,r.nickname),wg(),Rb(`p-value`,r.email)}}var Ye=(()=>{class a{http=p(kI);formBuilder=p(OZ);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,Xm.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let r=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${r}`,`_blank`)}onChangeHero(r){this.hero$=this.getHero(r)}getHero(r){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Qc(0,`div`,0)(1,`po-widget`,1),vt(`p-primary-action`,function(){return n.knowMore()}),Qc(2,`div`,2)(3,`po-combo`,3),z0(),vt(`p-change`,function(s){return n.onChangeHero(s)}),Kg()(),FO(4,Pt,4,3,`div`,0),Gk(5,`async`),Kg()()),p&2){let m;wg(),Rb(`p-primary-label`,n.knowMoreLabel),wg(),Rb(`formGroup`,n.form),wg(),W0(),wg(),VO((m=qk(5,3,n.hero$))?4:-1,m)}},dependencies:[MZ,TZ,ZL,i1,w4,Joe,bae,iF],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-heroes-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Heroes Reactive Form`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-heroes-reactive-form`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Ye],encapsulation:2,changeDetection:1})}return a})();function kt(a,D){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Kg()),a&2){let r=D;wg(),Rb(`p-value`,r.name),wg(),Rb(`p-value`,r.nickname),wg(),Rb(`p-value`,r.email)}}var Ze=(()=>{class a{http=p(kI);peopleName;people$;onChangePeople(r){this.people$=this.getPeople(r)}getPeople(r){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),z0(),Kb(`ngModelChange`,function(s){return Tk(n.peopleName,s)||(n.peopleName=s),s}),vt(`p-change`,function(s){return n.onChangePeople(s)}),Kg(),FO(3,kt,4,3,`div`,0),Gk(4,`async`),Kg()()),p&2){let m;wg(2),Yb(`ngModel`,n.peopleName),Rb(`p-infinite-scroll`,!0),W0(),wg(),VO((m=qk(4,3,n.people$))?3:-1,m)}},dependencies:[MZ,QL,w4,Joe,bae,iF],encapsulation:2,changeDetection:1})}return a})();var $e=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-infinity-scroll`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Inifity Scroll`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-infinity-scroll`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Ze],encapsulation:2,changeDetection:1})}return a})();var Ot=[`bookingForm`];var Lt=[`datepicker`];var et=(()=>{class a{poNotification=p(Ru);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(r){this.filterParams=r?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Du(Ot,7)(Lt,7),p&2){let m;No(m=xo())&&(n.form=m.first),No(m=xo())&&(n.datepickerComponent=m.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let m=YO();Qc(0,`div`,2)(1,`div`,3),Sk(2,`Booking a Hotel`),Kg()(),Qc(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.checkin,i)||(n.checkin=i),U_(i)}),Kg(),Qc(8,`po-datepicker`,6),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.checkout,i)||(n.checkout=i),U_(i)}),Kg(),Qc(9,`po-switch`,7),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.category,i)||(n.category=i),U_(i)}),vt(`p-change`,function(i){return n.onChangeParams(i)}),Kg()(),Qc(10,`div`,4)(11,`po-select`,8),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.rooms,i)||(n.rooms=i),U_(i)}),Kg(),Qc(12,`po-select`,9),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.children,i)||(n.children=i),U_(i)}),Kg(),Qc(13,`po-select`,10),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.adults,i)||(n.adults=i),U_(i)}),Kg()(),Qc(14,`div`,4)(15,`po-combo`,11),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.hotel,i)||(n.hotel=i),U_(i)}),Kg()(),Qc(16,`div`,4)(17,`po-button`,12),vt(`p-click`,function(){return n.booking()}),Kg()()()}if(p&2){let m=ik(4);wg(6),Yb(`ngModel`,n.checkin),Rb(`p-max-date`,n.checkout),W0(),wg(2),Yb(`ngModel`,n.checkout),Rb(`p-min-date`,n.checkin),W0(),wg(),Yb(`ngModel`,n.category),W0(),wg(2),Yb(`ngModel`,n.rooms),Rb(`p-options`,n.roomsOptions),W0(),wg(),Yb(`ngModel`,n.children),Rb(`p-options`,n.childrenOptions),W0(),wg(),Yb(`ngModel`,n.adults),Rb(`p-options`,n.adultsOptions),W0(),wg(2),Yb(`ngModel`,n.hotel),Rb(`p-filter-params`,n.filterParams),W0(),wg(2),Rb(`p-disabled`,m.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,w4,tie,Koe,R4],encapsulation:2,changeDetection:1})}return a})();var tt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-hotels`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Combo - Booking Hotel`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-combo-hotels`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-text-center">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1891,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Combo Option Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-combo-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`prop-p-cache`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-change-on-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-debounce-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-init-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-tab-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-emit-object-value`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-minlength`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`id`,`prop-p-filter-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`event-p-input-change`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-remove-initial-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-combo-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-combo-filter-method-getObjectByValue`,1,`docs-api-method-table`],[`id`,`interface-po-combo-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-literals-choose-option`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-option-group-label`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-group-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`],[`id`,`interface-po-combo-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-value`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-combo-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode-ends-with`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`blockquote`,3)(17,`strong`),Sk(18,`Subcomponentes:`),Kg(),Qc(19,`po-tag`,4),vt(`p-click`,function(){return n.openDoc(`po-combo-option-template`)}),Kg()(),Qc(20,`h3`,5),Sk(21,`Componente`),Kg(),Qc(22,`h4`,6)(23,`code`,7),Sk(24,`PoComboComponent`),Kg()(),Qc(25,`div`,2)(26,`p`),Sk(27,`O `),Qc(28,`code`),Sk(29,`po-combo`),Kg(),Sk(30,` exibe uma lista de opções com fácil seleção e filtragem.`),Kg(),Qc(31,`p`),Sk(32,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),Kg(),Qc(33,`p`),Sk(34,`É possível selecionar e navegar entre as opções da lista tanto através do `),Qc(35,`em`),Sk(36,`mouse`),Kg(),Sk(37,` quanto do teclado. No teclado navegue com
as setas e pressione `),Qc(38,`em`),Sk(39,`Enter`),Kg(),Sk(40,` na opção que desejar.`),Kg(),Qc(41,`p`),Sk(42,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Qc(43,`code`),Sk(44,`p-filter-service`),Kg(),Sk(45,`.`),Kg(),Qc(46,`p`),Sk(47,`Em `),Qc(48,`code`),Sk(49,`p-filter-mode`),Kg(),Sk(50,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),Kg(),Qc(51,`p`),Sk(52,`O `),Qc(53,`code`),Sk(54,`po-combo`),Kg(),Sk(55,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Qc(56,`em`),Sk(57,`Esc`),Kg(),Sk(58,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Qc(59,`em`),Sk(60,`Enter`),Kg(),Sk(61,`.`),Kg(),Qc(62,`p`),Sk(63,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),Kg(),Qc(64,`h4`),Sk(65,`Tokens customizáveis`),Kg(),Qc(66,`p`),Sk(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(68,`blockquote`)(69,`p`),Sk(70,`Para maiores informações, acesse o guia `),Qc(71,`a`,8),Sk(72,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(73,`.`),Kg()(),Qc(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),Sk(78,`Propriedade`),Kg(),Qc(79,`th`),Sk(80,`Descrição`),Kg(),Qc(81,`th`),Sk(82,`Valor Padrão`),Kg()()(),Qc(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),Sk(87,`Default Values`),Kg()(),vu(88,`td`)(89,`td`),Kg(),Qc(90,`tr`)(91,`td`)(92,`code`),Sk(93,`--font-family`),Kg()(),Qc(94,`td`),Sk(95,`Família tipográfica usada`),Kg(),Qc(96,`td`)(97,`code`),Sk(98,`var(--font-family-theme)`),Kg()()(),Qc(99,`tr`)(100,`td`)(101,`code`),Sk(102,`--font-size`),Kg()(),Qc(103,`td`),Sk(104,`Tamanho da fonte`),Kg(),Qc(105,`td`)(106,`code`),Sk(107,`var(--font-size-default)`),Kg()()(),Qc(108,`tr`)(109,`td`)(110,`code`),Sk(111,`--text-color`),Kg()(),Qc(112,`td`),Sk(113,`Cor do texto`),Kg(),Qc(114,`td`)(115,`code`),Sk(116,`var(--color-neutral-dark-90)`),Kg()()(),Qc(117,`tr`)(118,`td`)(119,`code`),Sk(120,`--text-color-placeholder`),Kg()(),Qc(121,`td`),Sk(122,`Cor do texto no placeholder`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--color-neutral-light-30)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--color`),Kg()(),Qc(130,`td`),Sk(131,`Cor principal do Combo`),Kg(),Qc(132,`td`)(133,`code`),Sk(134,`var(--color-neutral-dark-70)`),Kg()()(),Qc(135,`tr`)(136,`td`)(137,`code`),Sk(138,`--background`),Kg()(),Qc(139,`td`),Sk(140,`Cor de background`),Kg(),Qc(141,`td`)(142,`code`),Sk(143,`var(--color-neutral-light-05)`),Kg()()(),Qc(144,`tr`)(145,`td`)(146,`code`),Sk(147,`--border-radius`),Kg()(),Qc(148,`td`),Sk(149,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(150,`td`)(151,`code`),Sk(152,`var(--border-width-lg)`),Kg()()(),Qc(153,`tr`)(154,`td`)(155,`code`),Sk(156,`--min-width`),Kg()(),Qc(157,`td`),Sk(158,`Largura mínima do combo`),Kg(),Qc(159,`td`)(160,`code`),Sk(161,`150px`),Kg()()(),Qc(162,`tr`)(163,`td`)(164,`code`),Sk(165,`--field-container-title-justify`),Kg()(),Qc(166,`td`),Sk(167,`Alinhamento horizontal do título (`),Qc(168,`code`),Sk(169,`justify-content`),Kg(),Sk(170,`)`),Kg(),Qc(171,`td`)(172,`code`),Sk(173,`space-between`),Kg()()(),Qc(174,`tr`)(175,`td`)(176,`code`),Sk(177,`--field-container-title-flex`),Kg()(),Qc(178,`td`),Sk(179,`Flex do título (`),Qc(180,`code`),Sk(181,`flex`),Kg(),Sk(182,`)`),Kg(),Qc(183,`td`)(184,`code`),Sk(185,`1 auto`),Kg()()(),Qc(186,`tr`)(187,`td`)(188,`strong`),Sk(189,`Hover`),Kg()(),vu(190,`td`)(191,`td`),Kg(),Qc(192,`tr`)(193,`td`)(194,`code`),Sk(195,`--color-hover`),Kg()(),Qc(196,`td`),Sk(197,`Cor principal no estado hover`),Kg(),Qc(198,`td`)(199,`code`),Sk(200,`var(--color-action-hover)`),Kg()()(),Qc(201,`tr`)(202,`td`)(203,`code`),Sk(204,`--background-hover`),Kg()(),Qc(205,`td`),Sk(206,`Cor de background no estado hover`),Kg(),Qc(207,`td`)(208,`code`),Sk(209,`var(--color-brand-01-lightest)`),Kg()()(),Qc(210,`tr`)(211,`td`)(212,`strong`),Sk(213,`Focused`),Kg()(),vu(214,`td`)(215,`td`),Kg(),Qc(216,`tr`)(217,`td`)(218,`code`),Sk(219,`--color-focused`),Kg()(),Qc(220,`td`),Sk(221,`Cor principal no estado de focus`),Kg(),Qc(222,`td`)(223,`code`),Sk(224,`var(--color-action-default)`),Kg()()(),Qc(225,`tr`)(226,`td`)(227,`code`),Sk(228,`--outline-color-focused`),Kg()(),Qc(229,`td`),Sk(230,`Cor do outline do estado de focus`),Kg(),Qc(231,`td`)(232,`code`),Sk(233,`var(--color-action-focus)`),Kg()()(),Qc(234,`tr`)(235,`td`)(236,`strong`),Sk(237,`Error`),Kg()(),vu(238,`td`)(239,`td`),Kg(),Qc(240,`tr`)(241,`td`)(242,`code`),Sk(243,`--color-error`),Kg()(),Qc(244,`td`),Sk(245,`Cor principal no estado de erro`),Kg(),Qc(246,`td`)(247,`code`),Sk(248,`var(--color-feedback-negative-base)`),Kg()()(),Qc(249,`tr`)(250,`td`)(251,`strong`),Sk(252,`Disabled`),Kg()(),vu(253,`td`)(254,`td`),Kg(),Qc(255,`tr`)(256,`td`)(257,`code`),Sk(258,`--color-disabled`),Kg()(),Qc(259,`td`),Sk(260,`Cor principal no estado disabled`),Kg(),Qc(261,`td`)(262,`code`),Sk(263,`var(--color-neutral-light-30)`),Kg()()(),Qc(264,`tr`)(265,`td`)(266,`code`),Sk(267,`--background-disabled`),Kg()(),Qc(268,`td`),Sk(269,`Cor de background no estado disabled`),Kg(),Qc(270,`td`)(271,`code`),Sk(272,`var(--color-neutral-light-20)`),Kg()()(),Qc(273,`tr`)(274,`td`)(275,`strong`),Sk(276,`Suggestion`),Kg()(),vu(277,`td`)(278,`td`),Kg(),Qc(279,`tr`)(280,`td`)(281,`code`),Sk(282,`--text-color-suggestion`),Kg()(),Qc(283,`td`),Sk(284,`Cor do texto no estado suggestion`),Kg(),Qc(285,`td`)(286,`code`),Sk(287,`var(--color-neutral-mid-60)`),Kg()()(),Qc(288,`tr`)(289,`td`)(290,`code`),Sk(291,`--background-suggestion`),Kg()(),Qc(292,`td`),Sk(293,`Cor do background no estado suggestion`),Kg(),Qc(294,`td`)(295,`code`),Sk(296,`var(--color-brand-01-lightest)`),Kg()()()()()(),Qc(297,`div`,9)(298,`h4`,10),Sk(299,`Seletor`),Kg(),Qc(300,`pre`,11),Sk(301,`<po-combo
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
`),Kg()(),Qc(302,`h4`,12),Sk(303,`Propriedades`),Kg(),Qc(304,`table`,13)(305,`tr`,14)(306,`th`,15),Sk(307,`Nome`),Kg(),Qc(308,`th`,15),Sk(309,`Tipo`),Kg(),Qc(310,`th`,15),Sk(311,`Padrão`),Kg(),Qc(312,`th`,15),Sk(313,`Descrição`),Kg()(),Qc(314,`tr`,16)(315,`td`,17)(316,`div`,18)(317,`span`,19),Sk(318,` (p-additional-help)`),vu(319,`br`),Kg()(),Qc(320,`div`,20),Sk(321,`Deprecated`),Kg()(),Qc(322,`td`,21)(323,`code`,22),Sk(324,`EventEmitter`),Kg()(),Qc(325,`td`,23),Sk(326,`-`),Kg(),Qc(327,`td`,24)(328,`em`)(329,`strong`),Sk(330,`(opcional)`),Kg()(),Qc(331,`p`),Sk(332,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(333,`blockquote`)(334,`p`),Sk(335,`Essa propriedade está `),Qc(336,`strong`),Sk(337,`depreciada`),Kg(),Sk(338,` e será removida na versão `),Qc(339,`code`),Sk(340,`23.x.x`),Kg(),Sk(341,`. Recomendamos utilizar a propriedade `),Qc(342,`code`),Sk(343,`p-helper`),Kg(),Sk(344,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(345,`tr`,25)(346,`td`,17)(347,`div`,26)(348,`span`,27),Sk(349,` p-additional-help-tooltip`),vu(350,`br`),Kg()(),Qc(351,`div`,20),Sk(352,`Deprecated`),Kg()(),Qc(353,`td`,21)(354,`code`,28),Sk(355,`string`),Kg()(),Qc(356,`td`,23),Sk(357,`-`),Kg(),Qc(358,`td`,24)(359,`em`)(360,`strong`),Sk(361,`(opcional)`),Kg()(),Qc(362,`p`),Sk(363,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(364,`code`),Sk(365,`po-helper`),Kg(),Sk(366,`.
`),Qc(367,`strong`),Sk(368,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(369,`blockquote`)(370,`p`),Sk(371,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(372,`blockquote`)(373,`p`),Sk(374,`Essa propriedade está `),Qc(375,`strong`),Sk(376,`depreciada`),Kg(),Sk(377,` e será removida na versão `),Qc(378,`code`),Sk(379,`23.x.x`),Kg(),Sk(380,`. Recomendamos utilizar a propriedade `),Qc(381,`code`),Sk(382,`p-helper`),Kg(),Sk(383,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(384,`tr`,29)(385,`td`,17)(386,`div`,26)(387,`span`,27),Sk(388,` p-append-in-body`),vu(389,`br`),Kg()()(),Qc(390,`td`,21)(391,`code`,30),Sk(392,`boolean`),Kg()(),Qc(393,`td`,23)(394,`p`)(395,`code`),Sk(396,`false`),Kg()()(),Qc(397,`td`,24)(398,`em`)(399,`strong`),Sk(400,`(opcional)`),Kg()(),Qc(401,`p`),Sk(402,`Define que o `),Qc(403,`code`),Sk(404,`listbox`),Kg(),Sk(405,` e/ou popover (`),Qc(406,`code`),Sk(407,`p-helper`),Kg(),Sk(408,` e/ou `),Qc(409,`code`),Sk(410,`p-error-limit`),Kg(),Sk(411,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Qc(412,`blockquote`)(413,`p`),Sk(414,`Quando utilizado com `),Qc(415,`code`),Sk(416,`p-helper`),Kg(),Sk(417,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(418,`tr`,31)(419,`td`,17)(420,`div`,26)(421,`span`,27),Sk(422,` p-auto-focus`),vu(423,`br`),Kg()()(),Qc(424,`td`,21)(425,`code`,30),Sk(426,`boolean`),Kg()(),Qc(427,`td`,23)(428,`p`)(429,`code`),Sk(430,`false`),Kg()()(),Qc(431,`td`,24)(432,`em`)(433,`strong`),Sk(434,`(opcional)`),Kg()(),Qc(435,`p`),Sk(436,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(437,`blockquote`)(438,`p`),Sk(439,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(440,`tr`,32)(441,`td`,17)(442,`div`,18)(443,`span`,19),Sk(444,` (p-blur)`),vu(445,`br`),Kg()()(),Qc(446,`td`,21)(447,`code`,22),Sk(448,`EventEmitter`),Kg()(),Qc(449,`td`,23),Sk(450,`-`),Kg(),Qc(451,`td`,24)(452,`em`)(453,`strong`),Sk(454,`(opcional)`),Kg()(),Qc(455,`p`),Sk(456,`Evento disparado ao sair do campo.`),Kg()()(),Qc(457,`tr`,33)(458,`td`,17)(459,`div`,26)(460,`span`,27),Sk(461,` p-cache`),vu(462,`br`),Kg()()(),Qc(463,`td`,21)(464,`code`,30),Sk(465,`boolean`),Kg()(),Qc(466,`td`,23)(467,`p`)(468,`code`),Sk(469,`true`),Kg()()(),Qc(470,`td`,24)(471,`em`)(472,`strong`),Sk(473,`(opcional)`),Kg()(),Qc(474,`p`),Sk(475,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),Kg(),Qc(476,`blockquote`)(477,`p`),Sk(478,`Caso o valor seja `),Qc(479,`code`),Sk(480,`false`),Kg(),Sk(481,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),Kg()()()(),Qc(482,`tr`,34)(483,`td`,17)(484,`div`,18)(485,`span`,19),Sk(486,` (p-change)`),vu(487,`br`),Kg()()(),Qc(488,`td`,21)(489,`code`,22),Sk(490,`EventEmitter`),Kg()(),Qc(491,`td`,23),Sk(492,`-`),Kg(),Qc(493,`td`,24)(494,`em`)(495,`strong`),Sk(496,`(opcional)`),Kg()(),Qc(497,`p`),Sk(498,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),Kg(),Qc(499,`blockquote`)(500,`p`),Sk(501,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Qc(502,`code`),Sk(503,`p-emit-object-value`),Kg(),Sk(504,`.`),Kg()()()(),Qc(505,`tr`,35)(506,`td`,17)(507,`div`,18)(508,`span`,19),Sk(509,` (p-change-model)`),vu(510,`br`),Kg()()(),Qc(511,`td`,21)(512,`code`,22),Sk(513,`EventEmitter`),Kg()(),Qc(514,`td`,23),Sk(515,`-`),Kg(),Qc(516,`td`,24)(517,`em`)(518,`strong`),Sk(519,`(opcional)`),Kg()(),Qc(520,`p`),Sk(521,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(522,`code`),Sk(523,`setValue`),Kg(),Sk(524,`, `),Qc(525,`code`),Sk(526,`patchValue`),Kg(),Sk(527,`, carregamento assíncrono).`),Kg(),Qc(528,`p`),Sk(529,`Diferentemente do `),Qc(530,`code`),Sk(531,`p-change`),Kg(),Sk(532,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(533,`code`),Sk(534,`p-change-model`),Kg(),Sk(535,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(536,`p`),Sk(537,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(538,`tr`,36)(539,`td`,17)(540,`div`,26)(541,`span`,27),Sk(542,` p-change-on-enter`),vu(543,`br`),Kg()()(),Qc(544,`td`,21)(545,`code`,30),Sk(546,`boolean`),Kg()(),Qc(547,`td`,23)(548,`p`)(549,`code`),Sk(550,`false`),Kg()()(),Qc(551,`td`,24)(552,`em`)(553,`strong`),Sk(554,`(opcional)`),Kg()(),Qc(555,`p`),Sk(556,`Indica que o evento `),Qc(557,`code`),Sk(558,`p-change`),Kg(),Sk(559,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),Kg()()(),Qc(560,`tr`,37)(561,`td`,17)(562,`div`,26)(563,`span`,27),Sk(564,` p-clean`),vu(565,`br`),Kg()()(),Qc(566,`td`,21)(567,`code`,30),Sk(568,`boolean`),Kg()(),Qc(569,`td`,23),Sk(570,`-`),Kg(),Qc(571,`td`,24)(572,`em`)(573,`strong`),Sk(574,`(opcional)`),Kg()(),Qc(575,`p`),Sk(576,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg()()(),Qc(577,`tr`,38)(578,`td`,17)(579,`div`,26)(580,`span`,27),Sk(581,` p-compact-label`),vu(582,`br`),Kg()()(),Qc(583,`td`,21)(584,`code`,30),Sk(585,`boolean`),Kg()(),Qc(586,`td`,23)(587,`p`)(588,`code`),Sk(589,`false`),Kg()()(),Qc(590,`td`,24)(591,`em`)(592,`strong`),Sk(593,`(opcional)`),Kg()(),Qc(594,`p`),Sk(595,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(596,`p`),Sk(597,`Quando habilitado (`),Qc(598,`code`),Sk(599,`true`),Kg(),Sk(600,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(601,`ul`)(602,`li`)(603,`code`),Sk(604,`po-label`),Kg()(),Qc(605,`li`)(606,`code`),Sk(607,`p-requirement (showRequired)`),Kg()(),Qc(608,`li`)(609,`code`),Sk(610,`po-helper`),Kg()()(),Qc(611,`p`),Sk(612,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(613,`p`),Sk(614,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(615,`ul`)(616,`li`)(617,`code`),Sk(618,`--field-container-title-justify`),Kg()(),Qc(619,`li`)(620,`code`),Sk(621,`--field-container-title-flex`),Kg()()(),Qc(622,`p`),Sk(623,`Exemplo:`),Kg(),Qc(624,`pre`)(625,`code`),Sk(626,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(627,`p`),Sk(628,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(629,`tr`,39)(630,`td`,17)(631,`div`,26)(632,`span`,27),Sk(633,` p-debounce-time`),vu(634,`br`),Kg()()(),Qc(635,`td`,21)(636,`code`,40),Sk(637,`number`),Kg()(),Qc(638,`td`,23)(639,`p`)(640,`code`),Sk(641,`400`),Kg()()(),Qc(642,`td`,24)(643,`em`)(644,`strong`),Sk(645,`(opcional)`),Kg()(),Qc(646,`p`),Sk(647,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Qc(648,`code`),Sk(649,`p-filter-service`),Kg(),Sk(650,`).`),Kg()()(),Qc(651,`tr`,41)(652,`td`,17)(653,`div`,26)(654,`span`,27),Sk(655,` p-disabled`),vu(656,`br`),Kg()()(),Qc(657,`td`,21)(658,`code`,30),Sk(659,`boolean`),Kg()(),Qc(660,`td`,23)(661,`p`)(662,`code`),Sk(663,`false`),Kg()()(),Qc(664,`td`,24)(665,`em`)(666,`strong`),Sk(667,`(opcional)`),Kg()(),Qc(668,`p`),Sk(669,`Indica que o campo será desabilitado.`),Kg()()(),Qc(670,`tr`,42)(671,`td`,17)(672,`div`,26)(673,`span`,27),Sk(674,` p-disabled-init-filter`),vu(675,`br`),Kg()()(),Qc(676,`td`,21)(677,`code`,30),Sk(678,`boolean`),Kg()(),Qc(679,`td`,23)(680,`p`)(681,`code`),Sk(682,`false`),Kg()()(),Qc(683,`td`,24)(684,`em`)(685,`strong`),Sk(686,`(opcional)`),Kg()(),Qc(687,`p`),Sk(688,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),Kg()()(),Qc(689,`tr`,43)(690,`td`,17)(691,`div`,26)(692,`span`,27),Sk(693,` p-disabled-tab-filter`),vu(694,`br`),Kg()()(),Qc(695,`td`,21)(696,`code`,30),Sk(697,`boolean`),Kg()(),Qc(698,`td`,23)(699,`p`)(700,`code`),Sk(701,`false`),Kg()()(),Qc(702,`td`,24)(703,`em`)(704,`strong`),Sk(705,`(opcional)`),Kg()(),Qc(706,`p`),Sk(707,`Se verdadeiro, desabilitará a busca de um item via TAB.`),Kg()()(),Qc(708,`tr`,44)(709,`td`,17)(710,`div`,26)(711,`span`,27),Sk(712,` p-emit-object-value`),vu(713,`br`),Kg()()(),Qc(714,`td`,21)(715,`code`,30),Sk(716,`boolean`),Kg()(),Qc(717,`td`,23)(718,`p`)(719,`code`),Sk(720,`false`),Kg()()(),Qc(721,`td`,24)(722,`em`)(723,`strong`),Sk(724,`(opcional)`),Kg()(),Qc(725,`p`),Sk(726,`Se verdadeiro, o evento `),Qc(727,`code`),Sk(728,`p-change`),Kg(),Sk(729,` receberá como argumento o `),Qc(730,`code`),Sk(731,`PoComboOption`),Kg(),Sk(732,` referente à opção selecionada.`),Kg()()(),Qc(733,`tr`,45)(734,`td`,17)(735,`div`,26)(736,`span`,27),Sk(737,` p-error-limit`),vu(738,`br`),Kg()()(),Qc(739,`td`,21)(740,`code`,30),Sk(741,`boolean`),Kg()(),Qc(742,`td`,23)(743,`p`)(744,`code`),Sk(745,`false`),Kg()()(),Qc(746,`td`,24)(747,`em`)(748,`strong`),Sk(749,`(opcional)`),Kg()(),Qc(750,`p`),Sk(751,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(752,`blockquote`)(753,`p`),Sk(754,`Caso essa propriedade seja definida como `),Qc(755,`code`),Sk(756,`true`),Kg(),Sk(757,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(758,`tr`,46)(759,`td`,17)(760,`div`,26)(761,`span`,27),Sk(762,` p-field-error-message`),vu(763,`br`),Kg()()(),Qc(764,`td`,21)(765,`code`,28),Sk(766,`string`),Kg()(),Qc(767,`td`,23),Sk(768,`-`),Kg(),Qc(769,`td`,24)(770,`em`)(771,`strong`),Sk(772,`(opcional)`),Kg()(),Qc(773,`p`),Sk(774,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(775,`blockquote`)(776,`p`),Sk(777,`Necessário que a propriedade `),Qc(778,`code`),Sk(779,`p-required`),Kg(),Sk(780,` esteja habilitada.`),Kg()()()(),Qc(781,`tr`,47)(782,`td`,17)(783,`div`,26)(784,`span`,27),Sk(785,` p-field-label`),vu(786,`br`),Kg()()(),Qc(787,`td`,21)(788,`code`,28),Sk(789,`string`),Kg()(),Qc(790,`td`,23)(791,`p`)(792,`code`),Sk(793,`label`),Kg()()(),Qc(794,`td`,24)(795,`em`)(796,`strong`),Sk(797,`(opcional)`),Kg()(),Qc(798,`p`),Sk(799,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(800,`code`),Sk(801,`p-options`),Kg(),Sk(802,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg(),Qc(803,`p`),Sk(804,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Kg()()(),Qc(805,`tr`,48)(806,`td`,17)(807,`div`,26)(808,`span`,27),Sk(809,` p-field-value`),vu(810,`br`),Kg()()(),Qc(811,`td`,21)(812,`code`,28),Sk(813,`string`),Kg()(),Qc(814,`td`,23)(815,`p`)(816,`code`),Sk(817,`value`),Kg()()(),Qc(818,`td`,24)(819,`em`)(820,`strong`),Sk(821,`(opcional)`),Kg()(),Qc(822,`p`),Sk(823,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Qc(824,`code`),Sk(825,`p-options`),Kg(),Sk(826,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg(),Qc(827,`p`),Sk(828,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Kg()()(),Qc(829,`tr`,49)(830,`td`,17)(831,`div`,26)(832,`span`,27),Sk(833,` p-filter-minlength`),vu(834,`br`),Kg()()(),Qc(835,`td`,21)(836,`code`,40),Sk(837,`number`),Kg()(),Qc(838,`td`,23)(839,`p`)(840,`code`),Sk(841,`0`),Kg()()(),Qc(842,`td`,24)(843,`em`)(844,`strong`),Sk(845,`(opcional)`),Kg()(),Qc(846,`p`),Sk(847,`Valor mínimo de caracteres para realizar o filtro no serviço.`),Kg()()(),Qc(848,`tr`,50)(849,`td`,17)(850,`div`,26)(851,`span`,27),Sk(852,` p-filter-mode`),vu(853,`br`),Kg()()(),Qc(854,`td`,21)(855,`code`,51),Sk(856,`PoComboFilterMode`),Kg()(),Qc(857,`td`,23)(858,`p`)(859,`code`),Sk(860,`startsWith`),Kg()()(),Qc(861,`td`,24)(862,`em`)(863,`strong`),Sk(864,`(opcional)`),Kg()(),Qc(865,`p`),Sk(866,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Qc(867,`code`),Sk(868,`startsWith`),Kg(),Sk(869,`, `),Qc(870,`code`),Sk(871,`contains`),Kg(),Sk(872,` ou `),Qc(873,`code`),Sk(874,`endsWith`),Kg(),Sk(875,`.`),Kg(),Qc(876,`blockquote`)(877,`p`),Sk(878,`Quando utilizar a propriedade `),Qc(879,`code`),Sk(880,`p-filter-service`),Kg(),Sk(881,` esta propriedade será ignorada.`),Kg()()()(),Qc(882,`tr`,52)(883,`td`,17)(884,`div`,26)(885,`span`,27),Sk(886,` p-filter-params`),vu(887,`br`),Kg()()(),Qc(888,`td`,21)(889,`code`,53),Sk(890,`any`),Kg()(),Qc(891,`td`,23),Sk(892,`-`),Kg(),Qc(893,`td`,24)(894,`em`)(895,`strong`),Sk(896,`(opcional)`),Kg()(),Qc(897,`p`),Sk(898,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Qc(899,`em`),Sk(900,`PoComboFilter`),Kg(),Sk(901,`.`),Kg(),Qc(902,`blockquote`)(903,`p`),Sk(904,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),Kg()()()(),Qc(905,`tr`,54)(906,`td`,17)(907,`div`,26)(908,`span`,27),Sk(909,` p-filter-service`),vu(910,`br`),Kg()()(),Qc(911,`td`,21)(912,`code`,55),Sk(913,`PoComboFilter `),Kg(),Qc(914,`code`,28),Sk(915,` string`),Kg()(),Qc(916,`td`,23),Sk(917,`-`),Kg(),Qc(918,`td`,24)(919,`em`)(920,`strong`),Sk(921,`(opcional)`),Kg()(),Qc(922,`p`),Sk(923,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),Kg(),Qc(924,`p`),Sk(925,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Qc(926,`code`),Sk(927,`p-field-label`),Kg(),Sk(928,` e `),Qc(929,`code`),Sk(930,`p-field-value`),Kg(),Sk(931,` para a construção da lista de itens.`),Kg(),Qc(932,`p`),Sk(933,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Kg(),Qc(934,`pre`)(935,`code`),Sk(936,`url + ?filter=Peter
`),Kg()(),Qc(937,`p`),Sk(938,`Se for definida a propriedade `),Qc(939,`code`),Sk(940,`p-filter-params`),Kg(),Sk(941,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Qc(942,`code`),Sk(943,`{ age: 23 }`),Kg(),Sk(944,` a URL ficaria:`),Kg(),Qc(945,`pre`)(946,`code`),Sk(947,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Kg()()()(),Qc(948,`tr`,56)(949,`td`,17)(950,`div`,26)(951,`span`,27),Sk(952,` p-help`),vu(953,`br`),Kg()()(),Qc(954,`td`,21)(955,`code`,28),Sk(956,`string`),Kg()(),Qc(957,`td`,23),Sk(958,`-`),Kg(),Qc(959,`td`,24)(960,`em`)(961,`strong`),Sk(962,`(opcional)`),Kg()(),Qc(963,`p`),Sk(964,`Texto de apoio para o campo.`),Kg()()(),Qc(965,`tr`,57)(966,`td`,17)(967,`div`,26)(968,`span`,27),Sk(969,` p-icon`),vu(970,`br`),Kg()()(),Qc(971,`td`,21)(972,`code`,28),Sk(973,`string `),Kg(),Qc(974,`code`,58),Sk(975,` TemplateRef<void>`),Kg()(),Qc(976,`td`,23),Sk(977,`-`),Kg(),Qc(978,`td`,24)(979,`em`)(980,`strong`),Sk(981,`(opcional)`),Kg()(),Qc(982,`p`),Sk(983,`Define o ícone que será exibido no início do campo.`),Kg(),Qc(984,`p`),Sk(985,`É possível usar qualquer um dos ícones da `),Qc(986,`a`,59),Sk(987,`Biblioteca de ícones`),Kg(),Sk(988,`. conforme exemplo abaixo:`),Kg(),Qc(989,`pre`)(990,`code`),Sk(991,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),Kg()(),Qc(992,`p`),Sk(993,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(994,`em`),Sk(995,`Font Awesome`),Kg(),Sk(996,`, da seguinte forma:`),Kg(),Qc(997,`pre`)(998,`code`),Sk(999,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),Kg()(),Qc(1e3,`p`),Sk(1001,`Outra opção seria a customização do ícone através do `),Qc(1002,`code`),Sk(1003,`TemplateRef`),Kg(),Sk(1004,`, conforme exemplo abaixo:`),Kg(),Qc(1005,`pre`)(1006,`code`),Sk(1007,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(1008,`blockquote`)(1009,`p`),Sk(1010,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(1011,`code`),Sk(1012,`font-size: inherit`),Kg(),Sk(1013,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(1014,`tr`,60)(1015,`td`,17)(1016,`div`,26)(1017,`span`,27),Sk(1018,` p-infinite-scroll`),vu(1019,`br`),Kg()()(),Qc(1020,`td`,21)(1021,`code`,30),Sk(1022,`boolean`),Kg()(),Qc(1023,`td`,23)(1024,`p`)(1025,`code`),Sk(1026,`false`),Kg()()(),Qc(1027,`td`,24)(1028,`em`)(1029,`strong`),Sk(1030,`(opcional)`),Kg()(),Qc(1031,`p`),Sk(1032,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Kg()()(),Qc(1033,`tr`,61)(1034,`td`,17)(1035,`div`,26)(1036,`span`,27),Sk(1037,` p-infinite-scroll-distance`),vu(1038,`br`),Kg()()(),Qc(1039,`td`,21)(1040,`code`,40),Sk(1041,`number`),Kg()(),Qc(1042,`td`,23),Sk(1043,`-`),Kg(),Qc(1044,`td`,24)(1045,`em`)(1046,`strong`),Sk(1047,`(opcional)`),Kg()(),Qc(1048,`p`),Sk(1049,`Define o percentual necessário para disparar o evento `),Qc(1050,`code`),Sk(1051,`show-more`),Kg(),Sk(1052,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),Kg(),Qc(1053,`p`)(1054,`strong`),Sk(1055,`Exemplos`),Kg()(),Qc(1056,`ul`)(1057,`li`),Sk(1058,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Qc(1059,`code`),Sk(1060,`show-more`),Kg(),Sk(1061,` será disparado.`),Kg()()()(),Qc(1062,`tr`,62)(1063,`td`,17)(1064,`div`,18)(1065,`span`,19),Sk(1066,` (p-input-change)`),vu(1067,`br`),Kg()()(),Qc(1068,`td`,21)(1069,`code`,22),Sk(1070,`EventEmitter`),Kg()(),Qc(1071,`td`,23),Sk(1072,`-`),Kg(),Qc(1073,`td`,24)(1074,`em`)(1075,`strong`),Sk(1076,`(opcional)`),Kg()(),Qc(1077,`p`),Sk(1078,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),Kg()()(),Qc(1079,`tr`,63)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),Sk(1083,` (p-keydown)`),vu(1084,`br`),Kg()()(),Qc(1085,`td`,21)(1086,`code`,22),Sk(1087,`EventEmitter`),Kg()(),Qc(1088,`td`,23),Sk(1089,`-`),Kg(),Qc(1090,`td`,24)(1091,`em`)(1092,`strong`),Sk(1093,`(opcional)`),Kg()(),Qc(1094,`p`),Sk(1095,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(1096,`code`),Sk(1097,`KeyboardEvent`),Kg(),Sk(1098,` com informações sobre a tecla.`),Kg()()(),Qc(1099,`tr`,64)(1100,`td`,17)(1101,`div`,26)(1102,`span`,27),Sk(1103,` p-label`),vu(1104,`br`),Kg()()(),Qc(1105,`td`,21)(1106,`code`,28),Sk(1107,`string`),Kg()(),Qc(1108,`td`,23),Sk(1109,`-`),Kg(),Qc(1110,`td`,24)(1111,`em`)(1112,`strong`),Sk(1113,`(opcional)`),Kg()(),Qc(1114,`p`),Sk(1115,`Label no componente.`),Kg()()(),Qc(1116,`tr`,65)(1117,`td`,17)(1118,`div`,26)(1119,`span`,27),Sk(1120,` p-label-text-wrap`),vu(1121,`br`),Kg()()(),Qc(1122,`td`,21)(1123,`code`,30),Sk(1124,`boolean`),Kg()(),Qc(1125,`td`,23)(1126,`p`)(1127,`code`),Sk(1128,`false`),Kg()()(),Qc(1129,`td`,24)(1130,`em`)(1131,`strong`),Sk(1132,`(opcional)`),Kg()(),Qc(1133,`p`),Sk(1134,`Habilita a quebra automática do texto da propriedade `),Qc(1135,`code`),Sk(1136,`p-label`),Kg(),Sk(1137,`. Quando `),Qc(1138,`code`),Sk(1139,`p-label-text-wrap`),Kg(),Sk(1140,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(1141,`tr`,66)(1142,`td`,17)(1143,`div`,26)(1144,`span`,27),Sk(1145,` p-listbox-control-position`),vu(1146,`br`),Kg()()(),Qc(1147,`td`,21)(1148,`code`,67),Sk(1149,`'top' `),Kg(),Qc(1150,`code`,68),Sk(1151,` 'bottom'`),Kg()(),Qc(1152,`td`,23)(1153,`p`)(1154,`code`),Sk(1155,`bottom`),Kg()()(),Qc(1156,`td`,24)(1157,`em`)(1158,`strong`),Sk(1159,`(opcional)`),Kg()(),Qc(1160,`p`),Sk(1161,`Define a direção preferida para exibição do `),Qc(1162,`code`),Sk(1163,`listbox`),Kg(),Sk(1164,` em relação ao campo (`),Qc(1165,`code`),Sk(1166,`top`),Kg(),Sk(1167,` ou `),Qc(1168,`code`),Sk(1169,`bottom`),Kg(),Sk(1170,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg()()(),Qc(1171,`tr`,69)(1172,`td`,17)(1173,`div`,26)(1174,`span`,27),Sk(1175,` p-literals`),vu(1176,`br`),Kg()()(),Qc(1177,`td`,21)(1178,`code`,70),Sk(1179,`PoComboLiterals`),Kg()(),Qc(1180,`td`,23),Sk(1181,`-`),Kg(),Qc(1182,`td`,24)(1183,`em`)(1184,`strong`),Sk(1185,`(opcional)`),Kg()(),Qc(1186,`p`),Sk(1187,`Objeto com as literais usadas no `),Qc(1188,`code`),Sk(1189,`po-combo`),Kg(),Sk(1190,`.`),Kg(),Qc(1191,`p`),Sk(1192,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Qc(1193,`pre`)(1194,`code`),Sk(1195,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),Kg()(),Qc(1196,`p`),Sk(1197,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Qc(1198,`pre`)(1199,`code`),Sk(1200,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),Kg()(),Qc(1201,`blockquote`)(1202,`p`),Sk(1203,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(1204,`a`,71)(1205,`code`),Sk(1206,`PoI18nService`),Kg()(),Sk(1207,` ou do browser.`),Kg()()()(),Qc(1208,`tr`,72)(1209,`td`,17)(1210,`div`,26)(1211,`span`,27),Sk(1212,` p-loading`),vu(1213,`br`),Kg()()(),Qc(1214,`td`,21)(1215,`code`,30),Sk(1216,`boolean`),Kg()(),Qc(1217,`td`,23)(1218,`p`)(1219,`code`),Sk(1220,`false`),Kg()()(),Qc(1221,`td`,24)(1222,`em`)(1223,`strong`),Sk(1224,`(opcional)`),Kg()(),Qc(1225,`p`),Sk(1226,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(1227,`tr`,73)(1228,`td`,17)(1229,`div`,26)(1230,`span`,27),Sk(1231,` name`),vu(1232,`br`),Kg()()(),Qc(1233,`td`,21)(1234,`code`,28),Sk(1235,`string`),Kg()(),Qc(1236,`td`,23),Sk(1237,`-`),Kg(),Qc(1238,`td`,24)(1239,`p`),Sk(1240,`Nome do componente.`),Kg()()(),Qc(1241,`tr`,74)(1242,`td`,17)(1243,`div`,18)(1244,`span`,19),Sk(1245,` (ngModelChange)`),vu(1246,`br`),Kg()()(),Qc(1247,`td`,21)(1248,`code`,22),Sk(1249,`EventEmitter`),Kg()(),Qc(1250,`td`,23),Sk(1251,`-`),Kg(),Qc(1252,`td`,24)(1253,`em`)(1254,`strong`),Sk(1255,`(opcional)`),Kg()(),Qc(1256,`p`),Sk(1257,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Qc(1258,`p`),Sk(1259,`Na versão 12.2.0 do Angular a verificação `),Qc(1260,`code`),Sk(1261,`strictTemplates`),Kg(),Sk(1262,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Qc(1263,`pre`)(1264,`code`),Sk(1265,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),Kg()()()(),Qc(1266,`tr`,75)(1267,`td`,17)(1268,`div`,26)(1269,`span`,27),Sk(1270,` p-optional`),vu(1271,`br`),Kg()()(),Qc(1272,`td`,21)(1273,`code`,30),Sk(1274,`boolean`),Kg()(),Qc(1275,`td`,23)(1276,`p`)(1277,`code`),Sk(1278,`false`),Kg()()(),Qc(1279,`td`,24)(1280,`em`)(1281,`strong`),Sk(1282,`(opcional)`),Kg()(),Qc(1283,`p`),Sk(1284,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(1285,`blockquote`)(1286,`p`),Sk(1287,`Não será exibida a indicação se:`),Kg()(),Qc(1288,`ul`)(1289,`li`),Sk(1290,`O campo conter `),Qc(1291,`code`),Sk(1292,`p-required`),Kg(),Sk(1293,`;`),Kg(),Qc(1294,`li`),Sk(1295,`Não possuir `),Qc(1296,`code`),Sk(1297,`p-help`),Kg(),Sk(1298,` e/ou `),Qc(1299,`code`),Sk(1300,`p-label`),Kg(),Sk(1301,`.`),Kg()()()(),Qc(1302,`tr`,76)(1303,`td`,17)(1304,`div`,26)(1305,`span`,27),Sk(1306,` p-options`),vu(1307,`br`),Kg()()(),Qc(1308,`td`,21)(1309,`code`,77),Sk(1310,`Array<PoComboOption `),Kg(),Qc(1311,`code`,78),Sk(1312,` PoComboOptionGroup `),Kg(),Qc(1313,`code`,79),Sk(1314,` any>`),Kg()(),Qc(1315,`td`,23),Sk(1316,`-`),Kg(),Qc(1317,`td`,24)(1318,`p`),Sk(1319,`Nesta propriedade define a lista de opções do `),Qc(1320,`code`),Sk(1321,`po-combo`),Kg(),Sk(1322,`.`),Kg(),Qc(1323,`blockquote`)(1324,`p`),Sk(1325,`A lista pode ser definida utilizando um array com o valor representando o `),Qc(1326,`code`),Sk(1327,`value`),Kg(),Sk(1328,` e o `),Qc(1329,`code`),Sk(1330,`label`),Kg(),Sk(1331,` das seguintes formas:`),Kg()(),Qc(1332,`pre`)(1333,`code`),Sk(1334,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),Kg()(),Qc(1335,`pre`)(1336,`code`),Sk(1337,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),Kg()(),Qc(1338,`ul`)(1339,`li`),Sk(1340,`Aconselha-se utilizar valores distintos no `),Qc(1341,`code`),Sk(1342,`label`),Kg(),Sk(1343,` e `),Qc(1344,`code`),Sk(1345,`value`),Kg(),Sk(1346,` dos itens.`),Kg()()()(),Qc(1347,`tr`,80)(1348,`td`,17)(1349,`div`,26)(1350,`span`,27),Sk(1351,` p-placeholder`),vu(1352,`br`),Kg()()(),Qc(1353,`td`,21)(1354,`code`,28),Sk(1355,`string`),Kg()(),Qc(1356,`td`,23),Sk(1357,`-`),Kg(),Qc(1358,`td`,24)(1359,`p`),Sk(1360,`Mensagem apresentada enquanto o campo estiver vazio.`),Kg()()(),Qc(1361,`tr`,81)(1362,`td`,17)(1363,`div`,26)(1364,`span`,27),Sk(1365,` p-helper`),vu(1366,`br`),Kg()()(),Qc(1367,`td`,21)(1368,`code`,82),Sk(1369,`PoHelperOptions `),Kg(),Qc(1370,`code`,28),Sk(1371,` string`),Kg()(),Qc(1372,`td`,23),Sk(1373,`-`),Kg(),Qc(1374,`td`,24)(1375,`em`)(1376,`strong`),Sk(1377,`(opcional)`),Kg()(),Qc(1378,`p`),Sk(1379,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1380,`code`),Sk(1381,`p-label`),Kg(),Sk(1382,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1383,`code`),Sk(1384,`p-label`),Kg(),Sk(1385,`.`),Kg(),Qc(1386,`blockquote`)(1387,`p`),Sk(1388,`Para mais informações acesse: `),Qc(1389,`a`,83),Sk(1390,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1391,`.`),Kg()(),Qc(1392,`blockquote`)(1393,`p`),Sk(1394,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1395,`code`),Sk(1396,`p-additional-help-tooltip`),Kg(),Sk(1397,` e `),Qc(1398,`code`),Sk(1399,`p-additional-help`),Kg(),Sk(1400,`) será ignorado.`),Kg()()()(),Qc(1401,`tr`,84)(1402,`td`,17)(1403,`div`,26)(1404,`span`,27),Sk(1405,` p-remove-initial-filter`),vu(1406,`br`),Kg()()(),Qc(1407,`td`,21)(1408,`code`,30),Sk(1409,`boolean`),Kg()(),Qc(1410,`td`,23)(1411,`p`)(1412,`code`),Sk(1413,`false`),Kg()()(),Qc(1414,`td`,24)(1415,`em`)(1416,`strong`),Sk(1417,`(opcional)`),Kg()(),Qc(1418,`p`),Sk(1419,`Define se o filtro inicial será removido no primeiro clique do campo.`),Kg(),Qc(1420,`p`),Sk(1421,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),Kg()()(),Qc(1422,`tr`,85)(1423,`td`,17)(1424,`div`,26)(1425,`span`,27),Sk(1426,` p-required`),vu(1427,`br`),Kg()()(),Qc(1428,`td`,21)(1429,`code`,30),Sk(1430,`boolean`),Kg()(),Qc(1431,`td`,23)(1432,`p`)(1433,`code`),Sk(1434,`false`),Kg()()(),Qc(1435,`td`,24)(1436,`em`)(1437,`strong`),Sk(1438,`(opcional)`),Kg()(),Qc(1439,`p`),Sk(1440,`Define que o campo será obrigatório.`),Kg()()(),Qc(1441,`tr`,86)(1442,`td`,17)(1443,`div`,26)(1444,`span`,27),Sk(1445,` p-show-required`),vu(1446,`br`),Kg()()(),Qc(1447,`td`,21)(1448,`code`,30),Sk(1449,`boolean`),Kg()(),Qc(1450,`td`,23),Sk(1451,`-`),Kg(),Qc(1452,`td`,24)(1453,`p`),Sk(1454,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1455,`blockquote`)(1456,`p`),Sk(1457,`Não será exibida a indicação se:`),Kg()(),Qc(1458,`ul`)(1459,`li`),Sk(1460,`Não possuir `),Qc(1461,`code`),Sk(1462,`p-help`),Kg(),Sk(1463,` e/ou `),Qc(1464,`code`),Sk(1465,`p-label`),Kg(),Sk(1466,`.`),Kg()()()(),Qc(1467,`tr`,87)(1468,`td`,17)(1469,`div`,26)(1470,`span`,27),Sk(1471,` p-size`),vu(1472,`br`),Kg()()(),Qc(1473,`td`,21)(1474,`code`,28),Sk(1475,`string`),Kg()(),Qc(1476,`td`,23)(1477,`p`)(1478,`code`),Sk(1479,`medium`),Kg()()(),Qc(1480,`td`,24)(1481,`em`)(1482,`strong`),Sk(1483,`(opcional)`),Kg()(),Qc(1484,`p`),Sk(1485,`Define o tamanho do componente:`),Kg(),Qc(1486,`ul`)(1487,`li`)(1488,`code`),Sk(1489,`small`),Kg(),Sk(1490,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1491,`li`)(1492,`code`),Sk(1493,`medium`),Kg(),Sk(1494,`: altura do input como 44px.`),Kg()(),Qc(1495,`blockquote`)(1496,`p`),Sk(1497,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1498,`code`),Sk(1499,`medium`),Kg(),Sk(1500,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1501,`a`,88),Sk(1502,`po-theme`),Kg(),Sk(1503,`.`),Kg()()()(),Qc(1504,`tr`,89)(1505,`td`,17)(1506,`div`,26)(1507,`span`,27),Sk(1508,` p-sort`),vu(1509,`br`),Kg()()(),Qc(1510,`td`,21)(1511,`code`,30),Sk(1512,`boolean`),Kg()(),Qc(1513,`td`,23),Sk(1514,`-`),Kg(),Qc(1515,`td`,24)(1516,`p`),Sk(1517,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Kg()()()(),Qc(1518,`h3`,12),Sk(1519,`Métodos`),Kg(),Qc(1520,`table`,90)(1521,`tr`,91)(1522,`th`,92)(1523,`div`,26)(1524,`h4`)(1525,`span`,27),Sk(1526,` focus `),Kg()()()()(),Qc(1527,`tr`,24)(1528,`td`,24)(1529,`p`),Sk(1530,`Função que atribui foco ao componente.`),Kg(),Qc(1531,`p`),Sk(1532,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1533,`pre`)(1534,`code`),Sk(1535,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),Kg()()()()(),vu(1536,`br`),Qc(1537,`table`,93)(1538,`tr`,91)(1539,`th`,92)(1540,`div`,26)(1541,`h4`)(1542,`span`,27),Sk(1543,` showAdditionalHelp `),Kg()()()()(),Qc(1544,`tr`,24)(1545,`td`,24)(1546,`p`),Sk(1547,`Método que exibe `),Qc(1548,`code`),Sk(1549,`p-helper`),Kg(),Sk(1550,` ou executa a ação definida em `),Qc(1551,`code`),Sk(1552,`p-helper{eventOnClick}`),Kg(),Sk(1553,` ou em `),Qc(1554,`code`),Sk(1555,`p-additionalHelp`),Kg(),Sk(1556,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1557,`code`),Sk(1558,`p-keydown`),Kg(),Sk(1559,`.`),Kg(),Qc(1560,`blockquote`)(1561,`p`),Sk(1562,`Exibe ou oculta o conteúdo do componente `),Qc(1563,`code`),Sk(1564,`po-helper`),Kg(),Sk(1565,` quando o componente estiver com foco.`),Kg()(),Qc(1566,`pre`)(1567,`code`),Sk(1568,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),Kg()(),Qc(1569,`pre`)(1570,`code`),Sk(1571,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1572,`br`),Qc(1573,`h3`),Sk(1574,`Interfaces`),Kg(),Qc(1575,`h4`,94)(1576,`code`,7),Sk(1577,`PoComboFilter`),Kg()(),Qc(1578,`div`,2)(1579,`p`),Sk(1580,`Interface para os serviços que serão utilizados no po-combo.`),Kg()(),Qc(1581,`h4`,12),Sk(1582,`Métodos`),Kg(),Qc(1583,`table`,95)(1584,`tr`,91)(1585,`th`,92)(1586,`div`,26)(1587,`h4`)(1588,`span`,27),Sk(1589,` getFilteredData `),Kg()()()()(),Qc(1590,`tr`,24)(1591,`td`,24)(1592,`p`),Sk(1593,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),Kg()()()(),Qc(1594,`h5`)(1595,`b`),Sk(1596,`Parâmetros`),Kg()(),Qc(1597,`table`,13)(1598,`tr`,14)(1599,`th`,15),Sk(1600,`Nome`),Kg(),Qc(1601,`th`,15),Sk(1602,`Tipo`),Kg(),Qc(1603,`th`,15),Sk(1604,`Descrição`),Kg()(),Qc(1605,`tr`,91)(1606,`td`,17),Sk(1607,` params`),Kg(),Qc(1608,`td`,21)(1609,`code`,96),Sk(1610,` any `),Kg()(),Qc(1611,`td`,24)(1612,`p`),Sk(1613,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Kg()()(),Qc(1614,`tr`,91)(1615,`td`,17),Sk(1616,` filterParams`),Kg(),Qc(1617,`td`,21)(1618,`code`,96),Sk(1619,` any `),Kg()(),Qc(1620,`td`,24)(1621,`p`),Sk(1622,`Valor informado através da propriedade `),Qc(1623,`code`),Sk(1624,`p-filter-params`),Kg(),Sk(1625,`.`),Kg()()()(),vu(1626,`br`),Qc(1627,`table`,97)(1628,`tr`,91)(1629,`th`,92)(1630,`div`,26)(1631,`h4`)(1632,`span`,27),Sk(1633,` getObjectByValue `),Kg()()()()(),Qc(1634,`tr`,24)(1635,`td`,24)(1636,`p`),Sk(1637,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),Kg()()()(),Qc(1638,`h5`)(1639,`b`),Sk(1640,`Parâmetros`),Kg()(),Qc(1641,`table`,13)(1642,`tr`,14)(1643,`th`,15),Sk(1644,`Nome`),Kg(),Qc(1645,`th`,15),Sk(1646,`Tipo`),Kg(),Qc(1647,`th`,15),Sk(1648,`Descrição`),Kg()(),Qc(1649,`tr`,91)(1650,`td`,17),Sk(1651,` value`),Kg(),Qc(1652,`td`,21)(1653,`code`,28),Sk(1654,` string `),Kg(),Qc(1655,`code`,40),Sk(1656,` number `),Kg()(),Qc(1657,`td`,24)(1658,`p`),Sk(1659,`Valor responsável por realizar a busca de um único objeto.`),Kg()()(),Qc(1660,`tr`,91)(1661,`td`,17),Sk(1662,` filterParams`),Kg(),Qc(1663,`td`,21)(1664,`code`,96),Sk(1665,` any `),Kg()(),Qc(1666,`td`,24)(1667,`p`),Sk(1668,`Valor informado através da propriedade `),Qc(1669,`code`),Sk(1670,`p-filter-params`),Kg(),Sk(1671,`.`),Kg()()()(),vu(1672,`br`),Qc(1673,`h4`,98)(1674,`code`,7),Sk(1675,`PoComboLiterals`),Kg()(),Qc(1676,`div`,2)(1677,`p`),Sk(1678,`Interface para definição das literais usadas no `),Qc(1679,`code`),Sk(1680,`po-combo`),Kg(),Sk(1681,`.`),Kg()(),Qc(1682,`h4`,12),Sk(1683,`Propriedades`),Kg(),Qc(1684,`table`,13)(1685,`tr`,14)(1686,`th`,15),Sk(1687,`Nome`),Kg(),Qc(1688,`th`,15),Sk(1689,`Tipo`),Kg(),Qc(1690,`th`,15),Sk(1691,`Descrição`),Kg()(),Qc(1692,`tr`,99)(1693,`td`,17)(1694,`div`,26)(1695,`span`,27),Sk(1696,` chooseOption`),vu(1697,`br`),Kg()()(),Qc(1698,`td`,21)(1699,`code`,28),Sk(1700,`string`),Kg()(),Qc(1701,`td`,24)(1702,`em`)(1703,`strong`),Sk(1704,`(opcional)`),Kg()(),Qc(1705,`p`),Sk(1706,`Texto exibido quando o combo estiver vazio.`),Kg()()(),Qc(1707,`tr`,100)(1708,`td`,17)(1709,`div`,26)(1710,`span`,27),Sk(1711,` clean`),vu(1712,`br`),Kg()()(),Qc(1713,`td`,21)(1714,`code`,28),Sk(1715,`string`),Kg()(),Qc(1716,`td`,24)(1717,`em`)(1718,`strong`),Sk(1719,`(opcional)`),Kg()(),Qc(1720,`p`),Sk(1721,`Texto do aria-label do botão de limpar`),Kg()()(),Qc(1722,`tr`,101)(1723,`td`,17)(1724,`div`,26)(1725,`span`,27),Sk(1726,` noData`),vu(1727,`br`),Kg()()(),Qc(1728,`td`,21)(1729,`code`,28),Sk(1730,`string`),Kg()(),Qc(1731,`td`,24)(1732,`em`)(1733,`strong`),Sk(1734,`(opcional)`),Kg()(),Qc(1735,`p`),Sk(1736,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),Kg()()()(),Qc(1737,`h4`,102)(1738,`code`,7),Sk(1739,`PoComboOptionGroup`),Kg()(),Qc(1740,`div`,2)(1741,`p`),Sk(1742,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Qc(1743,`code`),Sk(1744,`po-combo`),Kg(),Sk(1745,`.`),Kg()(),Qc(1746,`h4`,12),Sk(1747,`Propriedades`),Kg(),Qc(1748,`table`,13)(1749,`tr`,14)(1750,`th`,15),Sk(1751,`Nome`),Kg(),Qc(1752,`th`,15),Sk(1753,`Tipo`),Kg(),Qc(1754,`th`,15),Sk(1755,`Descrição`),Kg()(),Qc(1756,`tr`,103)(1757,`td`,17)(1758,`div`,26)(1759,`span`,27),Sk(1760,` label`),vu(1761,`br`),Kg()()(),Qc(1762,`td`,21)(1763,`code`,28),Sk(1764,`string`),Kg()(),Qc(1765,`td`,24)(1766,`p`),Sk(1767,`Título para cada grupo de opções.`),Kg(),Qc(1768,`p`),Sk(1769,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),Kg()()(),Qc(1770,`tr`,104)(1771,`td`,17)(1772,`div`,26)(1773,`span`,27),Sk(1774,` options`),vu(1775,`br`),Kg()()(),Qc(1776,`td`,21)(1777,`code`,105),Sk(1778,`Array<PoComboOption>`),Kg()(),Qc(1779,`td`,24)(1780,`p`),Sk(1781,`Lista de itens a serem exibidos.`),Kg()()()(),Qc(1782,`h4`,106)(1783,`code`,7),Sk(1784,`PoComboOption`),Kg()(),Qc(1785,`div`,2)(1786,`p`),Sk(1787,`Interface que define as opções que serão exibidas na lista do `),Qc(1788,`code`),Sk(1789,`po-combo`),Kg(),Sk(1790,`.`),Kg()(),Qc(1791,`h4`,12),Sk(1792,`Propriedades`),Kg(),Qc(1793,`table`,13)(1794,`tr`,14)(1795,`th`,15),Sk(1796,`Nome`),Kg(),Qc(1797,`th`,15),Sk(1798,`Tipo`),Kg(),Qc(1799,`th`,15),Sk(1800,`Descrição`),Kg()(),Qc(1801,`tr`,107)(1802,`td`,17)(1803,`div`,26)(1804,`span`,27),Sk(1805,` label`),vu(1806,`br`),Kg()()(),Qc(1807,`td`,21)(1808,`code`,28),Sk(1809,`string`),Kg()(),Qc(1810,`td`,24)(1811,`em`)(1812,`strong`),Sk(1813,`(opcional)`),Kg()(),Qc(1814,`p`),Sk(1815,`Descrição exibida nas opções da lista.`),Kg(),Qc(1816,`blockquote`)(1817,`p`),Sk(1818,`Caso não seja definida será assumido o valor definido na propriedade `),Qc(1819,`code`),Sk(1820,`value`),Kg(),Sk(1821,`.`),Kg()()()(),Qc(1822,`tr`,108)(1823,`td`,17)(1824,`div`,26)(1825,`span`,27),Sk(1826,` value`),vu(1827,`br`),Kg()()(),Qc(1828,`td`,21)(1829,`code`,28),Sk(1830,`string `),Kg(),Qc(1831,`code`,40),Sk(1832,` number`),Kg()(),Qc(1833,`td`,24)(1834,`p`),Sk(1835,`Valor do objeto que será atribuído ao `),Qc(1836,`em`),Sk(1837,`model`),Kg(),Sk(1838,`.`),Kg()()()(),Qc(1839,`h3`),Sk(1840,`Enums`),Kg(),Qc(1841,`h4`,109)(1842,`code`,7),Sk(1843,`PoComboFilterMode`),Kg()(),Qc(1844,`div`,2)(1845,`p`),Sk(1846,`Define o tipo de busca usado no po-combo.`),Kg()(),Qc(1847,`h4`,12),Sk(1848,`Propriedades`),Kg(),Qc(1849,`table`,13)(1850,`tr`,14)(1851,`th`,15),Sk(1852,`Nome`),Kg(),Qc(1853,`th`,15),Sk(1854,`Descrição`),Kg()(),Qc(1855,`tr`,110)(1856,`td`,17)(1857,`div`,26)(1858,`span`,27),Sk(1859,` startsWith`),vu(1860,`br`),Kg()()(),Qc(1861,`td`,24)(1862,`p`),Sk(1863,`Verifica se o texto `),Qc(1864,`em`),Sk(1865,`inicia`),Kg(),Sk(1866,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),Kg()()(),Qc(1867,`tr`,111)(1868,`td`,17)(1869,`div`,26)(1870,`span`,27),Sk(1871,` contains`),vu(1872,`br`),Kg()()(),Qc(1873,`td`,24)(1874,`p`),Sk(1875,`Verifica se o texto `),Qc(1876,`em`),Sk(1877,`contém`),Kg(),Sk(1878,` o valor pesquisado.`),Kg()()(),Qc(1879,`tr`,112)(1880,`td`,17)(1881,`div`,26)(1882,`span`,27),Sk(1883,` endsWith`),vu(1884,`br`),Kg()()(),Qc(1885,`td`,24)(1886,`p`),Sk(1887,`Verifica se o texto `),Qc(1888,`em`),Sk(1889,`finaliza`),Kg(),Sk(1890,` com o valor pesquisado.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function Wt(a,D){if(a&1&&(Qc(0,`div`,1),vu(1,`sample-po-combo-basic-view`)(2,`sample-po-combo-labs-view`)(3,`sample-po-combo-scheduling-view`)(4,`sample-po-combo-transfer-view`)(5,`sample-po-combo-heroes-view`)(6,`sample-po-combo-heroes-reactive-form-view`)(7,`sample-po-combo-infinity-scroll-view`)(8,`sample-po-combo-hotels-view`),Kg()),a&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var Nt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;title=`Combo`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Combo · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(p,n){p&1&&(Qc(0,`po-page-default`,0),FO(1,Wt,9,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-combo-doc`),Kg()()),p&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,Ge,Ie,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Nt),GV]})}return a})();var mn=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,it]})}return a})();export{mn as DocPoComboModule};