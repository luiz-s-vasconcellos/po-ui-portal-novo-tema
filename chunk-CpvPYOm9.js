import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{$r as No,$t as ia,A as Goe,An as voe,Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,En as tie,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Lt as c4,M as I4,Mi as WL,Mt as Zte,Na as ok,Ni as Wb,Oi as Vk,Pi as Wk,Pr as I,Qa as uF,Qn as AZ,R as Koe,Tr as G0,Vi as ZL,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ar as B_,ca as ge,cr as Bk,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,gi as R,h as Dte,ii as PZ,it as Ru,ja as nm,jn as w4,jr as H_,jt as Zoe,li as QL,lt as Ss,ma as iF,mi as Qm,no as we,nt as R4,pa as i1,pn as p5,qr as Mk,ri as PI,ro as wg,so as xZ,tn as j4,tr as An,uo as xk,ur as Cb,va as j_,vi as Rk,zi as Yk,zr as KO}from"./chunk-CTJH0VS3.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,D)=>[a,D];var Be=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&_u(0,`po-combo`,0),p&2&&Ab(`p-options`,Bk(3,rt,Vk(1,at),Vk(2,lt)))},dependencies:[w4],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-basic/sample-po-combo-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-basic/sample-po-combo-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Be],encapsulation:2,changeDetection:1})}return a})();var je=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,n){let{label:m,value:s}=p;if(n){let i=r.findIndex(Se=>Se.label===n&&`options`in Se);return i===-1?(this.insertGroupIntoSelectInput(n),[...r,{label:n,options:[{label:m,value:s}]}]):(r[i].options.push({label:m,value:s}),r)}return[...r,{label:m,value:s}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let m=KO();Jc(0,`po-combo`,2),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.combo,i)||(n.combo=i),H_(i)}),_t(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4)(4,`po-info`,5),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0),_u(8,`po-divider`,6),Jc(9,`div`,3)(10,`po-switch`,7),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),H_(i)}),Kg(),Jc(11,`po-select`,8),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),H_(i)}),_t(`p-change`,function(){return n.optionsGroupSelection()}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.optionsGroup,i)||(n.optionsGroup=i),H_(i)}),Kg()(),_u(13,`po-divider`,10),Jc(14,`div`,3)(15,`po-input`,11),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.option.label,i)||(n.option.label=i),H_(i)}),Kg(),Jc(16,`po-input`,12),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.option.value,i)||(n.option.value=i),H_(i)}),Kg()(),Jc(17,`div`,3)(18,`po-button`,13),_t(`p-click`,function(){return n.addOption()}),Kg()()(),_u(19,`po-divider`),Jc(20,`form`,null,1)(22,`po-input`,14),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.label,i)||(n.label=i),H_(i)}),Kg(),Jc(23,`po-input`,15),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.help,i)||(n.help=i),H_(i)}),Kg(),Jc(24,`po-input`,16),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.helperText,i)||(n.helperText=i),H_(i)}),Kg(),Jc(25,`po-input`,17),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.placeholder,i)||(n.placeholder=i),H_(i)}),Kg(),Jc(26,`po-input`,18),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),H_(i)}),Kg(),Jc(27,`div`,3)(28,`po-checkbox-group`,19),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.properties,i)||(n.properties=i),H_(i)}),Kg(),Jc(29,`po-radio-group`,20),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.icon,i)||(n.icon=i),H_(i)}),Kg(),Jc(30,`po-radio-group`,21),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.filterMode,i)||(n.filterMode=i),H_(i)}),Kg(),Jc(31,`po-radio-group`,22),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.size,i)||(n.size=i),H_(i)}),Kg(),Jc(32,`po-radio-group`,23),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.listboxPosition,i)||(n.listboxPosition=i),H_(i)}),Kg()(),Jc(33,`div`,3)(34,`po-input`,24),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.filterService,i)||(n.filterService=i),H_(i)}),Kg(),Jc(35,`po-input`,25),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.literals,i)||(n.literals=i),H_(i)}),_t(`p-change`,function(){return n.changeLiterals()}),Kg()(),Jc(36,`div`,3)(37,`po-input`,26),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.fieldValue,i)||(n.fieldValue=i),H_(i)}),Kg(),Jc(38,`po-input`,27),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.fieldLabel,i)||(n.fieldLabel=i),H_(i)}),Kg()(),Jc(39,`div`,3)(40,`po-number`,28),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.debounceTime,i)||(n.debounceTime=i),H_(i)}),Kg(),Jc(41,`po-number`,29),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.filterMinlength,i)||(n.filterMinlength=i),H_(i)}),Kg()(),Jc(42,`div`,3)(43,`po-button`,30),_t(`p-click`,function(){return n.restore()}),Kg()()()}if(p&2){let m=ok(7);Kb(`ngModel`,n.combo),Ab(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),q0(),wg(3),Ab(`p-value`,n.combo),wg(),Ab(`p-value`,n.event),wg(6),Kb(`ngModel`,n.comboOptionGroupSwitch),q0(),wg(),Kb(`ngModel`,n.selectedOptionsGroup),Ab(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),q0(),wg(),Kb(`ngModel`,n.optionsGroup),Ab(`p-disabled`,!n.comboOptionGroupSwitch),q0(),wg(3),Kb(`ngModel`,n.option.label),q0(),wg(),Kb(`ngModel`,n.option.value),q0(),wg(2),Ab(`p-disabled`,m.form.invalid),wg(4),Kb(`ngModel`,n.label),q0(),wg(),Kb(`ngModel`,n.help),q0(),wg(),Kb(`ngModel`,n.helperText),q0(),wg(),Kb(`ngModel`,n.placeholder),q0(),wg(),Kb(`ngModel`,n.fieldErrorMessage),q0(),wg(2),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.icon),Ab(`p-options`,n.iconsOptions),q0(),wg(),Kb(`ngModel`,n.filterMode),Ab(`p-options`,n.filterModeOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0(),wg(),Kb(`ngModel`,n.listboxPosition),Ab(`p-options`,n.listboxPositionOptions),q0(),wg(2),Kb(`ngModel`,n.filterService),q0(),wg(),Kb(`ngModel`,n.literals),q0(),wg(2),Kb(`ngModel`,n.fieldValue),q0(),wg(),Kb(`ngModel`,n.fieldLabel),q0(),wg(2),Kb(`ngModel`,n.debounceTime),q0(),wg(),Kb(`ngModel`,n.filterMinlength),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,w4,j4,Goe,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var Ie=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-labs/sample-po-combo-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-labs/sample-po-combo-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-combo
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,je],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var ct=[`schedulingForm`];function ut(a,D){if(a&1&&(Jc(0,`div`,3),_u(1,`po-avatar`,15),Jc(2,`p`,14),Mk(3),Kg()()),a&2){let r=tk().$implicit,p=tk();wg(),Ab(`p-src`,p.getStateByLabel(r.label)),wg(2),Wb(r.label)}}function bt(a,D){if(a&1&&(Jc(0,`div`,14),Mk(1),Kg()),a&2){let r=tk().$implicit;wg(),Wb(r.label)}}function gt(a,D){if(a&1&&LO(0,ut,4,2,`div`,3)(1,bt,2,1,`div`,14),a&2){let r=D.$implicit;jO(r.options?0:1)}}var ze=(()=>{class a{poNotification=p(Ru);schedulingService=p(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(r=``){this.poNotification.success(`Great ${r}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(r){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[r]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Cu(ct,7),p&2){let m;No(m=xo())&&(n.form=m.first)}},standalone:!1,features:[we([fe])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let m=KO();Jc(0,`div`,1)(1,`div`,2),Mk(2,`Pre-appointment scheduling`),Kg()(),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.name,i)||(n.name=i),H_(i)}),Kg(),Jc(7,`po-email`,5),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.email,i)||(n.email=i),H_(i)}),Kg()(),Jc(8,`div`,3)(9,`po-datepicker`,6),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.birthday,i)||(n.birthday=i),H_(i)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.phone,i)||(n.phone=i),H_(i)}),Kg()(),Jc(11,`div`,3)(12,`po-combo`,8),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.city,i)||(n.city=i),H_(i)}),Cb(13,gt,2,1,`ng-template`,9),Kg(),Jc(14,`po-select`,10),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.typeScheduling,i)||(n.typeScheduling=i),H_(i)}),Kg(),Jc(15,`po-combo`,11),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.medicalSpecialty,i)||(n.medicalSpecialty=i),H_(i)}),Kg()(),Jc(16,`div`,3)(17,`po-textarea`,12),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.informations,i)||(n.informations=i),H_(i)}),Kg()(),Jc(18,`div`,3)(19,`po-button`,13),_t(`p-click`,function(){return n.confirmPreAppointment(n.name)}),Kg()()()}if(p&2){let m=ok(4);wg(6),Kb(`ngModel`,n.name),q0(),wg(),Kb(`ngModel`,n.email),q0(),wg(2),Kb(`ngModel`,n.birthday),q0(),wg(),Kb(`ngModel`,n.phone),q0(),wg(2),Kb(`ngModel`,n.city),Ab(`p-options`,n.citiesOptions),q0(),wg(2),Kb(`ngModel`,n.typeScheduling),Ab(`p-options`,n.typeSchedulings),q0(),wg(),Kb(`ngModel`,n.medicalSpecialty),Ab(`p-options`,n.medicalSpecialtyOptions),q0(),wg(2),Kb(`ngModel`,n.informations),q0(),wg(2),Ab(`p-disabled`,m.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,c4,oi,w4,Dte,tie,p5,j4,Koe,Zoe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-combo-scheduling`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo - Scheduling`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-scheduling`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-text-center">
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
            <p class="po-sm-10 po-md-9 po-lg-11">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` option.label `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">`),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` option.label `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
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
`),Kg()()()(),Jc(28,`po-tab`,10)(29,`div`)(30,`label`,7),Mk(31,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),Kg(),Jc(32,`div`,11)(33,`pre`,12),Mk(34,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(35,`label`,7),Mk(36,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),Kg(),Jc(37,`div`,13)(38,`pre`,12),Mk(39,`import { Injectable } from '@angular/core';

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
`),Kg()()()(),Jc(40,`po-tab`,14)(41,`div`)(42,`label`,7),Mk(43,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),Kg(),Jc(44,`div`,15)(45,`pre`,16),Mk(46,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var Et=[`transferForm`];function St(a,D){if(a&1&&(Jc(0,`div`,3),_u(1,`po-avatar`,15),Jc(2,`div`,16)(3,`div`,17),Mk(4),Kg(),Jc(5,`div`,18),Mk(6),Kg()()()),a&2){let r=D.$implicit;wg(4),Wb(r.label),wg(2),nm(`Account: `,r.value)}}var Ue=(()=>{class a{poNotification=p(Ru);form;poModal;contact;dateTransfer=/* @__PURE__ */ new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:/* @__PURE__ */ new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Cu(Et,7)(ia,7),p&2){let m;No(m=xo())&&(n.form=m.first),No(m=xo())&&(n.poModal=m.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let m=KO();Jc(0,`div`,1)(1,`div`,2),Mk(2,`Banking Transfer`),Kg()(),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.typeAccount,i)||(n.typeAccount=i),H_(i)}),Kg(),Jc(7,`po-combo`,5),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.contact,i)||(n.contact=i),H_(i)}),Cb(8,St,7,2,`ng-template`,6),Kg()(),Jc(9,`div`,3)(10,`po-decimal`,7),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.value,i)||(n.value=i),H_(i)}),Kg(),Jc(11,`po-datepicker`,8),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.dateTransfer,i)||(n.dateTransfer=i),H_(i)}),Kg()(),Jc(12,`div`,3)(13,`po-button`,9),_t(`p-click`,function(){return n.transfer()}),Kg()()(),Jc(14,`po-modal`,10)(15,`div`,3),_u(16,`po-info`,11)(17,`po-info`,12),Kg(),_u(18,`po-divider`),Jc(19,`div`,3),_u(20,`po-info`,13)(21,`po-info`,14),Wk(22,`date`),Kg()()}if(p&2){let m=ok(4);wg(6),Kb(`ngModel`,n.typeAccount),Ab(`p-options`,n.typeAccounts),q0(),wg(),Kb(`ngModel`,n.contact),q0(),wg(3),Kb(`ngModel`,n.value),q0(),wg(),Kb(`ngModel`,n.dateTransfer),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(),Ab(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),wg(2),Ab(`p-value`,n.typeAccount),wg(),Ab(`p-value`,n.contact),wg(3),Ab(`p-value`,n.value),wg(),Ab(`p-value`,xk(Yk(22,13,n.dateTransfer)))}},dependencies:[xZ,RZ,AZ,QL,WL,c4,oi,Nf,w4,Dte,tie,voe,Koe,Joe,ia,uF],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-combo-transfer`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo - Banking Transfer`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-transfer`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-text-center">
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
            <div class="po-font-text-large-bold">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` option.label `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</div>
            <div class="po-font-text-smaller">Account: `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` option.value `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</div>
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

    <po-info class="po-md-6" p-label="Date to transfer" p-value="`),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` dateTransfer | date `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`"> </po-info>
  </div>
</po-modal>
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,Ue],encapsulation:2,changeDetection:1})}return a})();function xt(a,D){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Kg()),a&2){let r=D;wg(),Ab(`p-value`,r.name),wg(),Ab(`p-value`,r.nickname),wg(),Ab(`p-value`,r.email)}}var Ke=(()=>{class a{http=p(PI);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}onChangeHero(r){this.hero$=this.getHero(r)}getHero(r){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Jc(0,`div`,0)(1,`po-widget`,1),_t(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Jc(2,`po-combo`,2),G0(),Zb(`ngModelChange`,function(s){return Rk(n.heroName,s)||(n.heroName=s),s}),_t(`p-change`,function(s){return n.onChangeHero(s)}),Kg(),LO(3,xt,4,3,`div`,0),Wk(4,`async`),Kg()()),p&2){let m;wg(),Ab(`p-primary-label`,n.knowMoreLabel),wg(),Kb(`ngModel`,n.heroName),q0(),wg(),jO((m=Yk(4,3,n.hero$))?3:-1,m)}},dependencies:[RZ,QL,w4,Joe,yae,iF],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-heroes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo - Heroes`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-heroes`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ke],encapsulation:2,changeDetection:1})}return a})();function Pt(a,D){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Kg()),a&2){let r=D;wg(),Ab(`p-value`,r.name),wg(),Ab(`p-value`,r.nickname),wg(),Ab(`p-value`,r.email)}}var Ye=(()=>{class a{http=p(PI);formBuilder=p(PZ);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,Qm.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let r=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${r}`,`_blank`)}onChangeHero(r){this.hero$=this.getHero(r)}getHero(r){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Jc(0,`div`,0)(1,`po-widget`,1),_t(`p-primary-action`,function(){return n.knowMore()}),Jc(2,`div`,2)(3,`po-combo`,3),G0(),_t(`p-change`,function(s){return n.onChangeHero(s)}),Kg()(),LO(4,Pt,4,3,`div`,0),Wk(5,`async`),Kg()()),p&2){let m;wg(),Ab(`p-primary-label`,n.knowMoreLabel),wg(),Ab(`formGroup`,n.form),wg(),q0(),wg(),jO((m=Yk(5,3,n.hero$))?4:-1,m)}},dependencies:[RZ,AZ,ZL,i1,w4,Joe,yae,iF],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-heroes-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo - Heroes Reactive Form`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-heroes-reactive-form`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ye],encapsulation:2,changeDetection:1})}return a})();function kt(a,D){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Kg()),a&2){let r=D;wg(),Ab(`p-value`,r.name),wg(),Ab(`p-value`,r.nickname),wg(),Ab(`p-value`,r.email)}}var Ze=(()=>{class a{http=p(PI);peopleName;people$;onChangePeople(r){this.people$=this.getPeople(r)}getPeople(r){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${r}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),G0(),Zb(`ngModelChange`,function(s){return Rk(n.peopleName,s)||(n.peopleName=s),s}),_t(`p-change`,function(s){return n.onChangePeople(s)}),Kg(),LO(3,kt,4,3,`div`,0),Wk(4,`async`),Kg()()),p&2){let m;wg(2),Kb(`ngModel`,n.peopleName),Ab(`p-infinite-scroll`,!0),q0(),wg(),jO((m=Yk(4,3,n.people$))?3:-1,m)}},dependencies:[RZ,QL,w4,Joe,yae,iF],encapsulation:2,changeDetection:1})}return a})();var $e=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-infinity-scroll`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo - Inifity Scroll`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-infinity-scroll`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ze],encapsulation:2,changeDetection:1})}return a})();var Ot=[`bookingForm`];var Lt=[`datepicker`];var et=(()=>{class a{poNotification=p(Ru);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(r){this.filterParams=r?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Cu(Ot,7)(Lt,7),p&2){let m;No(m=xo())&&(n.form=m.first),No(m=xo())&&(n.datepickerComponent=m.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let m=KO();Jc(0,`div`,2)(1,`div`,3),Mk(2,`Booking a Hotel`),Kg()(),Jc(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.checkin,i)||(n.checkin=i),H_(i)}),Kg(),Jc(8,`po-datepicker`,6),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.checkout,i)||(n.checkout=i),H_(i)}),Kg(),Jc(9,`po-switch`,7),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.category,i)||(n.category=i),H_(i)}),_t(`p-change`,function(i){return n.onChangeParams(i)}),Kg()(),Jc(10,`div`,4)(11,`po-select`,8),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.rooms,i)||(n.rooms=i),H_(i)}),Kg(),Jc(12,`po-select`,9),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.children,i)||(n.children=i),H_(i)}),Kg(),Jc(13,`po-select`,10),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.adults,i)||(n.adults=i),H_(i)}),Kg()(),Jc(14,`div`,4)(15,`po-combo`,11),G0(),Zb(`ngModelChange`,function(i){return U_(m),Rk(n.hotel,i)||(n.hotel=i),H_(i)}),Kg()(),Jc(16,`div`,4)(17,`po-button`,12),_t(`p-click`,function(){return n.booking()}),Kg()()()}if(p&2){let m=ok(4);wg(6),Kb(`ngModel`,n.checkin),Ab(`p-max-date`,n.checkout),q0(),wg(2),Kb(`ngModel`,n.checkout),Ab(`p-min-date`,n.checkin),q0(),wg(),Kb(`ngModel`,n.category),q0(),wg(2),Kb(`ngModel`,n.rooms),Ab(`p-options`,n.roomsOptions),q0(),wg(),Kb(`ngModel`,n.children),Ab(`p-options`,n.childrenOptions),q0(),wg(),Kb(`ngModel`,n.adults),Ab(`p-options`,n.adultsOptions),q0(),wg(2),Kb(`ngModel`,n.hotel),Ab(`p-filter-params`,n.filterParams),q0(),wg(2),Ab(`p-disabled`,m.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,w4,tie,Koe,R4],encapsulation:2,changeDetection:1})}return a})();var tt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-combo-hotels`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Combo - Booking Hotel`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-combo-hotels`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-text-center">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1891,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Combo Option Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-combo-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`prop-p-cache`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-change-on-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-debounce-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-init-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-tab-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-emit-object-value`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-minlength`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`id`,`prop-p-filter-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`event-p-input-change`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-remove-initial-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-sort`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-combo-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-filter-method-getFilteredData`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-combo-filter-method-getObjectByValue`,1,`docs-api-method-table`],[`id`,`interface-po-combo-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-literals-choose-option`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-literals-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-group`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-option-group-label`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-group-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`],[`id`,`interface-po-combo-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-combo-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-combo-option-value`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-combo-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-combo-filter-mode-ends-with`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`blockquote`,3)(17,`strong`),Mk(18,`Subcomponentes:`),Kg(),Jc(19,`po-tag`,4),_t(`p-click`,function(){return n.openDoc(`po-combo-option-template`)}),Kg()(),Jc(20,`h3`,5),Mk(21,`Componente`),Kg(),Jc(22,`h4`,6)(23,`code`,7),Mk(24,`PoComboComponent`),Kg()(),Jc(25,`div`,2)(26,`p`),Mk(27,`O `),Jc(28,`code`),Mk(29,`po-combo`),Kg(),Mk(30,` exibe uma lista de opções com fácil seleção e filtragem.`),Kg(),Jc(31,`p`),Mk(32,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),Kg(),Jc(33,`p`),Mk(34,`É possível selecionar e navegar entre as opções da lista tanto através do `),Jc(35,`em`),Mk(36,`mouse`),Kg(),Mk(37,` quanto do teclado. No teclado navegue com
as setas e pressione `),Jc(38,`em`),Mk(39,`Enter`),Kg(),Mk(40,` na opção que desejar.`),Kg(),Jc(41,`p`),Mk(42,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Jc(43,`code`),Mk(44,`p-filter-service`),Kg(),Mk(45,`.`),Kg(),Jc(46,`p`),Mk(47,`Em `),Jc(48,`code`),Mk(49,`p-filter-mode`),Kg(),Mk(50,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),Kg(),Jc(51,`p`),Mk(52,`O `),Jc(53,`code`),Mk(54,`po-combo`),Kg(),Mk(55,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Jc(56,`em`),Mk(57,`Esc`),Kg(),Mk(58,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Jc(59,`em`),Mk(60,`Enter`),Kg(),Mk(61,`.`),Kg(),Jc(62,`p`),Mk(63,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),Kg(),Jc(64,`h4`),Mk(65,`Tokens customizáveis`),Kg(),Jc(66,`p`),Mk(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(68,`blockquote`)(69,`p`),Mk(70,`Para maiores informações, acesse o guia `),Jc(71,`a`,8),Mk(72,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(73,`.`),Kg()(),Jc(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),Mk(78,`Propriedade`),Kg(),Jc(79,`th`),Mk(80,`Descrição`),Kg(),Jc(81,`th`),Mk(82,`Valor Padrão`),Kg()()(),Jc(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),Mk(87,`Default Values`),Kg()(),_u(88,`td`)(89,`td`),Kg(),Jc(90,`tr`)(91,`td`)(92,`code`),Mk(93,`--font-family`),Kg()(),Jc(94,`td`),Mk(95,`Família tipográfica usada`),Kg(),Jc(96,`td`)(97,`code`),Mk(98,`var(--font-family-theme)`),Kg()()(),Jc(99,`tr`)(100,`td`)(101,`code`),Mk(102,`--font-size`),Kg()(),Jc(103,`td`),Mk(104,`Tamanho da fonte`),Kg(),Jc(105,`td`)(106,`code`),Mk(107,`var(--font-size-default)`),Kg()()(),Jc(108,`tr`)(109,`td`)(110,`code`),Mk(111,`--text-color`),Kg()(),Jc(112,`td`),Mk(113,`Cor do texto`),Kg(),Jc(114,`td`)(115,`code`),Mk(116,`var(--color-neutral-dark-90)`),Kg()()(),Jc(117,`tr`)(118,`td`)(119,`code`),Mk(120,`--text-color-placeholder`),Kg()(),Jc(121,`td`),Mk(122,`Cor do texto no placeholder`),Kg(),Jc(123,`td`)(124,`code`),Mk(125,`var(--color-neutral-light-30)`),Kg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--color`),Kg()(),Jc(130,`td`),Mk(131,`Cor principal do Combo`),Kg(),Jc(132,`td`)(133,`code`),Mk(134,`var(--color-neutral-dark-70)`),Kg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Mk(138,`--background`),Kg()(),Jc(139,`td`),Mk(140,`Cor de background`),Kg(),Jc(141,`td`)(142,`code`),Mk(143,`var(--color-neutral-light-05)`),Kg()()(),Jc(144,`tr`)(145,`td`)(146,`code`),Mk(147,`--border-radius`),Kg()(),Jc(148,`td`),Mk(149,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(150,`td`)(151,`code`),Mk(152,`var(--border-width-lg)`),Kg()()(),Jc(153,`tr`)(154,`td`)(155,`code`),Mk(156,`--min-width`),Kg()(),Jc(157,`td`),Mk(158,`Largura mínima do combo`),Kg(),Jc(159,`td`)(160,`code`),Mk(161,`150px`),Kg()()(),Jc(162,`tr`)(163,`td`)(164,`code`),Mk(165,`--field-container-title-justify`),Kg()(),Jc(166,`td`),Mk(167,`Alinhamento horizontal do título (`),Jc(168,`code`),Mk(169,`justify-content`),Kg(),Mk(170,`)`),Kg(),Jc(171,`td`)(172,`code`),Mk(173,`space-between`),Kg()()(),Jc(174,`tr`)(175,`td`)(176,`code`),Mk(177,`--field-container-title-flex`),Kg()(),Jc(178,`td`),Mk(179,`Flex do título (`),Jc(180,`code`),Mk(181,`flex`),Kg(),Mk(182,`)`),Kg(),Jc(183,`td`)(184,`code`),Mk(185,`1 auto`),Kg()()(),Jc(186,`tr`)(187,`td`)(188,`strong`),Mk(189,`Hover`),Kg()(),_u(190,`td`)(191,`td`),Kg(),Jc(192,`tr`)(193,`td`)(194,`code`),Mk(195,`--color-hover`),Kg()(),Jc(196,`td`),Mk(197,`Cor principal no estado hover`),Kg(),Jc(198,`td`)(199,`code`),Mk(200,`var(--color-action-hover)`),Kg()()(),Jc(201,`tr`)(202,`td`)(203,`code`),Mk(204,`--background-hover`),Kg()(),Jc(205,`td`),Mk(206,`Cor de background no estado hover`),Kg(),Jc(207,`td`)(208,`code`),Mk(209,`var(--color-brand-01-lightest)`),Kg()()(),Jc(210,`tr`)(211,`td`)(212,`strong`),Mk(213,`Focused`),Kg()(),_u(214,`td`)(215,`td`),Kg(),Jc(216,`tr`)(217,`td`)(218,`code`),Mk(219,`--color-focused`),Kg()(),Jc(220,`td`),Mk(221,`Cor principal no estado de focus`),Kg(),Jc(222,`td`)(223,`code`),Mk(224,`var(--color-action-default)`),Kg()()(),Jc(225,`tr`)(226,`td`)(227,`code`),Mk(228,`--outline-color-focused`),Kg()(),Jc(229,`td`),Mk(230,`Cor do outline do estado de focus`),Kg(),Jc(231,`td`)(232,`code`),Mk(233,`var(--color-action-focus)`),Kg()()(),Jc(234,`tr`)(235,`td`)(236,`strong`),Mk(237,`Error`),Kg()(),_u(238,`td`)(239,`td`),Kg(),Jc(240,`tr`)(241,`td`)(242,`code`),Mk(243,`--color-error`),Kg()(),Jc(244,`td`),Mk(245,`Cor principal no estado de erro`),Kg(),Jc(246,`td`)(247,`code`),Mk(248,`var(--color-feedback-negative-base)`),Kg()()(),Jc(249,`tr`)(250,`td`)(251,`strong`),Mk(252,`Disabled`),Kg()(),_u(253,`td`)(254,`td`),Kg(),Jc(255,`tr`)(256,`td`)(257,`code`),Mk(258,`--color-disabled`),Kg()(),Jc(259,`td`),Mk(260,`Cor principal no estado disabled`),Kg(),Jc(261,`td`)(262,`code`),Mk(263,`var(--color-neutral-light-30)`),Kg()()(),Jc(264,`tr`)(265,`td`)(266,`code`),Mk(267,`--background-disabled`),Kg()(),Jc(268,`td`),Mk(269,`Cor de background no estado disabled`),Kg(),Jc(270,`td`)(271,`code`),Mk(272,`var(--color-neutral-light-20)`),Kg()()(),Jc(273,`tr`)(274,`td`)(275,`strong`),Mk(276,`Suggestion`),Kg()(),_u(277,`td`)(278,`td`),Kg(),Jc(279,`tr`)(280,`td`)(281,`code`),Mk(282,`--text-color-suggestion`),Kg()(),Jc(283,`td`),Mk(284,`Cor do texto no estado suggestion`),Kg(),Jc(285,`td`)(286,`code`),Mk(287,`var(--color-neutral-mid-60)`),Kg()()(),Jc(288,`tr`)(289,`td`)(290,`code`),Mk(291,`--background-suggestion`),Kg()(),Jc(292,`td`),Mk(293,`Cor do background no estado suggestion`),Kg(),Jc(294,`td`)(295,`code`),Mk(296,`var(--color-brand-01-lightest)`),Kg()()()()()(),Jc(297,`div`,9)(298,`h4`,10),Mk(299,`Seletor`),Kg(),Jc(300,`pre`,11),Mk(301,`<po-combo
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
`),Kg()(),Jc(302,`h4`,12),Mk(303,`Propriedades`),Kg(),Jc(304,`table`,13)(305,`tr`,14)(306,`th`,15),Mk(307,`Nome`),Kg(),Jc(308,`th`,15),Mk(309,`Tipo`),Kg(),Jc(310,`th`,15),Mk(311,`Padrão`),Kg(),Jc(312,`th`,15),Mk(313,`Descrição`),Kg()(),Jc(314,`tr`,16)(315,`td`,17)(316,`div`,18)(317,`span`,19),Mk(318,` (p-additional-help)`),_u(319,`br`),Kg()(),Jc(320,`div`,20),Mk(321,`Deprecated`),Kg()(),Jc(322,`td`,21)(323,`code`,22),Mk(324,`EventEmitter`),Kg()(),Jc(325,`td`,23),Mk(326,`-`),Kg(),Jc(327,`td`,24)(328,`em`)(329,`strong`),Mk(330,`(opcional)`),Kg()(),Jc(331,`p`),Mk(332,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(333,`blockquote`)(334,`p`),Mk(335,`Essa propriedade está `),Jc(336,`strong`),Mk(337,`depreciada`),Kg(),Mk(338,` e será removida na versão `),Jc(339,`code`),Mk(340,`23.x.x`),Kg(),Mk(341,`. Recomendamos utilizar a propriedade `),Jc(342,`code`),Mk(343,`p-helper`),Kg(),Mk(344,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(345,`tr`,25)(346,`td`,17)(347,`div`,26)(348,`span`,27),Mk(349,` p-additional-help-tooltip`),_u(350,`br`),Kg()(),Jc(351,`div`,20),Mk(352,`Deprecated`),Kg()(),Jc(353,`td`,21)(354,`code`,28),Mk(355,`string`),Kg()(),Jc(356,`td`,23),Mk(357,`-`),Kg(),Jc(358,`td`,24)(359,`em`)(360,`strong`),Mk(361,`(opcional)`),Kg()(),Jc(362,`p`),Mk(363,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(364,`code`),Mk(365,`po-helper`),Kg(),Mk(366,`.
`),Jc(367,`strong`),Mk(368,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(369,`blockquote`)(370,`p`),Mk(371,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(372,`blockquote`)(373,`p`),Mk(374,`Essa propriedade está `),Jc(375,`strong`),Mk(376,`depreciada`),Kg(),Mk(377,` e será removida na versão `),Jc(378,`code`),Mk(379,`23.x.x`),Kg(),Mk(380,`. Recomendamos utilizar a propriedade `),Jc(381,`code`),Mk(382,`p-helper`),Kg(),Mk(383,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(384,`tr`,29)(385,`td`,17)(386,`div`,26)(387,`span`,27),Mk(388,` p-append-in-body`),_u(389,`br`),Kg()()(),Jc(390,`td`,21)(391,`code`,30),Mk(392,`boolean`),Kg()(),Jc(393,`td`,23)(394,`p`)(395,`code`),Mk(396,`false`),Kg()()(),Jc(397,`td`,24)(398,`em`)(399,`strong`),Mk(400,`(opcional)`),Kg()(),Jc(401,`p`),Mk(402,`Define que o `),Jc(403,`code`),Mk(404,`listbox`),Kg(),Mk(405,` e/ou popover (`),Jc(406,`code`),Mk(407,`p-helper`),Kg(),Mk(408,` e/ou `),Jc(409,`code`),Mk(410,`p-error-limit`),Kg(),Mk(411,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Jc(412,`blockquote`)(413,`p`),Mk(414,`Quando utilizado com `),Jc(415,`code`),Mk(416,`p-helper`),Kg(),Mk(417,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(418,`tr`,31)(419,`td`,17)(420,`div`,26)(421,`span`,27),Mk(422,` p-auto-focus`),_u(423,`br`),Kg()()(),Jc(424,`td`,21)(425,`code`,30),Mk(426,`boolean`),Kg()(),Jc(427,`td`,23)(428,`p`)(429,`code`),Mk(430,`false`),Kg()()(),Jc(431,`td`,24)(432,`em`)(433,`strong`),Mk(434,`(opcional)`),Kg()(),Jc(435,`p`),Mk(436,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(437,`blockquote`)(438,`p`),Mk(439,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(440,`tr`,32)(441,`td`,17)(442,`div`,18)(443,`span`,19),Mk(444,` (p-blur)`),_u(445,`br`),Kg()()(),Jc(446,`td`,21)(447,`code`,22),Mk(448,`EventEmitter`),Kg()(),Jc(449,`td`,23),Mk(450,`-`),Kg(),Jc(451,`td`,24)(452,`em`)(453,`strong`),Mk(454,`(opcional)`),Kg()(),Jc(455,`p`),Mk(456,`Evento disparado ao sair do campo.`),Kg()()(),Jc(457,`tr`,33)(458,`td`,17)(459,`div`,26)(460,`span`,27),Mk(461,` p-cache`),_u(462,`br`),Kg()()(),Jc(463,`td`,21)(464,`code`,30),Mk(465,`boolean`),Kg()(),Jc(466,`td`,23)(467,`p`)(468,`code`),Mk(469,`true`),Kg()()(),Jc(470,`td`,24)(471,`em`)(472,`strong`),Mk(473,`(opcional)`),Kg()(),Jc(474,`p`),Mk(475,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),Kg(),Jc(476,`blockquote`)(477,`p`),Mk(478,`Caso o valor seja `),Jc(479,`code`),Mk(480,`false`),Kg(),Mk(481,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),Kg()()()(),Jc(482,`tr`,34)(483,`td`,17)(484,`div`,18)(485,`span`,19),Mk(486,` (p-change)`),_u(487,`br`),Kg()()(),Jc(488,`td`,21)(489,`code`,22),Mk(490,`EventEmitter`),Kg()(),Jc(491,`td`,23),Mk(492,`-`),Kg(),Jc(493,`td`,24)(494,`em`)(495,`strong`),Mk(496,`(opcional)`),Kg()(),Jc(497,`p`),Mk(498,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),Kg(),Jc(499,`blockquote`)(500,`p`),Mk(501,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Jc(502,`code`),Mk(503,`p-emit-object-value`),Kg(),Mk(504,`.`),Kg()()()(),Jc(505,`tr`,35)(506,`td`,17)(507,`div`,18)(508,`span`,19),Mk(509,` (p-change-model)`),_u(510,`br`),Kg()()(),Jc(511,`td`,21)(512,`code`,22),Mk(513,`EventEmitter`),Kg()(),Jc(514,`td`,23),Mk(515,`-`),Kg(),Jc(516,`td`,24)(517,`em`)(518,`strong`),Mk(519,`(opcional)`),Kg()(),Jc(520,`p`),Mk(521,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(522,`code`),Mk(523,`setValue`),Kg(),Mk(524,`, `),Jc(525,`code`),Mk(526,`patchValue`),Kg(),Mk(527,`, carregamento assíncrono).`),Kg(),Jc(528,`p`),Mk(529,`Diferentemente do `),Jc(530,`code`),Mk(531,`p-change`),Kg(),Mk(532,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(533,`code`),Mk(534,`p-change-model`),Kg(),Mk(535,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(536,`p`),Mk(537,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(538,`tr`,36)(539,`td`,17)(540,`div`,26)(541,`span`,27),Mk(542,` p-change-on-enter`),_u(543,`br`),Kg()()(),Jc(544,`td`,21)(545,`code`,30),Mk(546,`boolean`),Kg()(),Jc(547,`td`,23)(548,`p`)(549,`code`),Mk(550,`false`),Kg()()(),Jc(551,`td`,24)(552,`em`)(553,`strong`),Mk(554,`(opcional)`),Kg()(),Jc(555,`p`),Mk(556,`Indica que o evento `),Jc(557,`code`),Mk(558,`p-change`),Kg(),Mk(559,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),Kg()()(),Jc(560,`tr`,37)(561,`td`,17)(562,`div`,26)(563,`span`,27),Mk(564,` p-clean`),_u(565,`br`),Kg()()(),Jc(566,`td`,21)(567,`code`,30),Mk(568,`boolean`),Kg()(),Jc(569,`td`,23),Mk(570,`-`),Kg(),Jc(571,`td`,24)(572,`em`)(573,`strong`),Mk(574,`(opcional)`),Kg()(),Jc(575,`p`),Mk(576,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg()()(),Jc(577,`tr`,38)(578,`td`,17)(579,`div`,26)(580,`span`,27),Mk(581,` p-compact-label`),_u(582,`br`),Kg()()(),Jc(583,`td`,21)(584,`code`,30),Mk(585,`boolean`),Kg()(),Jc(586,`td`,23)(587,`p`)(588,`code`),Mk(589,`false`),Kg()()(),Jc(590,`td`,24)(591,`em`)(592,`strong`),Mk(593,`(opcional)`),Kg()(),Jc(594,`p`),Mk(595,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(596,`p`),Mk(597,`Quando habilitado (`),Jc(598,`code`),Mk(599,`true`),Kg(),Mk(600,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(601,`ul`)(602,`li`)(603,`code`),Mk(604,`po-label`),Kg()(),Jc(605,`li`)(606,`code`),Mk(607,`p-requirement (showRequired)`),Kg()(),Jc(608,`li`)(609,`code`),Mk(610,`po-helper`),Kg()()(),Jc(611,`p`),Mk(612,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(613,`p`),Mk(614,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(615,`ul`)(616,`li`)(617,`code`),Mk(618,`--field-container-title-justify`),Kg()(),Jc(619,`li`)(620,`code`),Mk(621,`--field-container-title-flex`),Kg()()(),Jc(622,`p`),Mk(623,`Exemplo:`),Kg(),Jc(624,`pre`)(625,`code`),Mk(626,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(627,`p`),Mk(628,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(629,`tr`,39)(630,`td`,17)(631,`div`,26)(632,`span`,27),Mk(633,` p-debounce-time`),_u(634,`br`),Kg()()(),Jc(635,`td`,21)(636,`code`,40),Mk(637,`number`),Kg()(),Jc(638,`td`,23)(639,`p`)(640,`code`),Mk(641,`400`),Kg()()(),Jc(642,`td`,24)(643,`em`)(644,`strong`),Mk(645,`(opcional)`),Kg()(),Jc(646,`p`),Mk(647,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Jc(648,`code`),Mk(649,`p-filter-service`),Kg(),Mk(650,`).`),Kg()()(),Jc(651,`tr`,41)(652,`td`,17)(653,`div`,26)(654,`span`,27),Mk(655,` p-disabled`),_u(656,`br`),Kg()()(),Jc(657,`td`,21)(658,`code`,30),Mk(659,`boolean`),Kg()(),Jc(660,`td`,23)(661,`p`)(662,`code`),Mk(663,`false`),Kg()()(),Jc(664,`td`,24)(665,`em`)(666,`strong`),Mk(667,`(opcional)`),Kg()(),Jc(668,`p`),Mk(669,`Indica que o campo será desabilitado.`),Kg()()(),Jc(670,`tr`,42)(671,`td`,17)(672,`div`,26)(673,`span`,27),Mk(674,` p-disabled-init-filter`),_u(675,`br`),Kg()()(),Jc(676,`td`,21)(677,`code`,30),Mk(678,`boolean`),Kg()(),Jc(679,`td`,23)(680,`p`)(681,`code`),Mk(682,`false`),Kg()()(),Jc(683,`td`,24)(684,`em`)(685,`strong`),Mk(686,`(opcional)`),Kg()(),Jc(687,`p`),Mk(688,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),Kg()()(),Jc(689,`tr`,43)(690,`td`,17)(691,`div`,26)(692,`span`,27),Mk(693,` p-disabled-tab-filter`),_u(694,`br`),Kg()()(),Jc(695,`td`,21)(696,`code`,30),Mk(697,`boolean`),Kg()(),Jc(698,`td`,23)(699,`p`)(700,`code`),Mk(701,`false`),Kg()()(),Jc(702,`td`,24)(703,`em`)(704,`strong`),Mk(705,`(opcional)`),Kg()(),Jc(706,`p`),Mk(707,`Se verdadeiro, desabilitará a busca de um item via TAB.`),Kg()()(),Jc(708,`tr`,44)(709,`td`,17)(710,`div`,26)(711,`span`,27),Mk(712,` p-emit-object-value`),_u(713,`br`),Kg()()(),Jc(714,`td`,21)(715,`code`,30),Mk(716,`boolean`),Kg()(),Jc(717,`td`,23)(718,`p`)(719,`code`),Mk(720,`false`),Kg()()(),Jc(721,`td`,24)(722,`em`)(723,`strong`),Mk(724,`(opcional)`),Kg()(),Jc(725,`p`),Mk(726,`Se verdadeiro, o evento `),Jc(727,`code`),Mk(728,`p-change`),Kg(),Mk(729,` receberá como argumento o `),Jc(730,`code`),Mk(731,`PoComboOption`),Kg(),Mk(732,` referente à opção selecionada.`),Kg()()(),Jc(733,`tr`,45)(734,`td`,17)(735,`div`,26)(736,`span`,27),Mk(737,` p-error-limit`),_u(738,`br`),Kg()()(),Jc(739,`td`,21)(740,`code`,30),Mk(741,`boolean`),Kg()(),Jc(742,`td`,23)(743,`p`)(744,`code`),Mk(745,`false`),Kg()()(),Jc(746,`td`,24)(747,`em`)(748,`strong`),Mk(749,`(opcional)`),Kg()(),Jc(750,`p`),Mk(751,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(752,`blockquote`)(753,`p`),Mk(754,`Caso essa propriedade seja definida como `),Jc(755,`code`),Mk(756,`true`),Kg(),Mk(757,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(758,`tr`,46)(759,`td`,17)(760,`div`,26)(761,`span`,27),Mk(762,` p-field-error-message`),_u(763,`br`),Kg()()(),Jc(764,`td`,21)(765,`code`,28),Mk(766,`string`),Kg()(),Jc(767,`td`,23),Mk(768,`-`),Kg(),Jc(769,`td`,24)(770,`em`)(771,`strong`),Mk(772,`(opcional)`),Kg()(),Jc(773,`p`),Mk(774,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Jc(775,`blockquote`)(776,`p`),Mk(777,`Necessário que a propriedade `),Jc(778,`code`),Mk(779,`p-required`),Kg(),Mk(780,` esteja habilitada.`),Kg()()()(),Jc(781,`tr`,47)(782,`td`,17)(783,`div`,26)(784,`span`,27),Mk(785,` p-field-label`),_u(786,`br`),Kg()()(),Jc(787,`td`,21)(788,`code`,28),Mk(789,`string`),Kg()(),Jc(790,`td`,23)(791,`p`)(792,`code`),Mk(793,`label`),Kg()()(),Jc(794,`td`,24)(795,`em`)(796,`strong`),Mk(797,`(opcional)`),Kg()(),Jc(798,`p`),Mk(799,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(800,`code`),Mk(801,`p-options`),Kg(),Mk(802,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Kg(),Jc(803,`p`),Mk(804,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Kg()()(),Jc(805,`tr`,48)(806,`td`,17)(807,`div`,26)(808,`span`,27),Mk(809,` p-field-value`),_u(810,`br`),Kg()()(),Jc(811,`td`,21)(812,`code`,28),Mk(813,`string`),Kg()(),Jc(814,`td`,23)(815,`p`)(816,`code`),Mk(817,`value`),Kg()()(),Jc(818,`td`,24)(819,`em`)(820,`strong`),Mk(821,`(opcional)`),Kg()(),Jc(822,`p`),Mk(823,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(824,`code`),Mk(825,`p-options`),Kg(),Mk(826,`), esta propriedade será responsável pelo valor de cada item da lista.`),Kg(),Jc(827,`p`),Mk(828,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Kg()()(),Jc(829,`tr`,49)(830,`td`,17)(831,`div`,26)(832,`span`,27),Mk(833,` p-filter-minlength`),_u(834,`br`),Kg()()(),Jc(835,`td`,21)(836,`code`,40),Mk(837,`number`),Kg()(),Jc(838,`td`,23)(839,`p`)(840,`code`),Mk(841,`0`),Kg()()(),Jc(842,`td`,24)(843,`em`)(844,`strong`),Mk(845,`(opcional)`),Kg()(),Jc(846,`p`),Mk(847,`Valor mínimo de caracteres para realizar o filtro no serviço.`),Kg()()(),Jc(848,`tr`,50)(849,`td`,17)(850,`div`,26)(851,`span`,27),Mk(852,` p-filter-mode`),_u(853,`br`),Kg()()(),Jc(854,`td`,21)(855,`code`,51),Mk(856,`PoComboFilterMode`),Kg()(),Jc(857,`td`,23)(858,`p`)(859,`code`),Mk(860,`startsWith`),Kg()()(),Jc(861,`td`,24)(862,`em`)(863,`strong`),Mk(864,`(opcional)`),Kg()(),Jc(865,`p`),Mk(866,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Jc(867,`code`),Mk(868,`startsWith`),Kg(),Mk(869,`, `),Jc(870,`code`),Mk(871,`contains`),Kg(),Mk(872,` ou `),Jc(873,`code`),Mk(874,`endsWith`),Kg(),Mk(875,`.`),Kg(),Jc(876,`blockquote`)(877,`p`),Mk(878,`Quando utilizar a propriedade `),Jc(879,`code`),Mk(880,`p-filter-service`),Kg(),Mk(881,` esta propriedade será ignorada.`),Kg()()()(),Jc(882,`tr`,52)(883,`td`,17)(884,`div`,26)(885,`span`,27),Mk(886,` p-filter-params`),_u(887,`br`),Kg()()(),Jc(888,`td`,21)(889,`code`,53),Mk(890,`any`),Kg()(),Jc(891,`td`,23),Mk(892,`-`),Kg(),Jc(893,`td`,24)(894,`em`)(895,`strong`),Mk(896,`(opcional)`),Kg()(),Jc(897,`p`),Mk(898,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Jc(899,`em`),Mk(900,`PoComboFilter`),Kg(),Mk(901,`.`),Kg(),Jc(902,`blockquote`)(903,`p`),Mk(904,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),Kg()()()(),Jc(905,`tr`,54)(906,`td`,17)(907,`div`,26)(908,`span`,27),Mk(909,` p-filter-service`),_u(910,`br`),Kg()()(),Jc(911,`td`,21)(912,`code`,55),Mk(913,`PoComboFilter `),Kg(),Jc(914,`code`,28),Mk(915,` string`),Kg()(),Jc(916,`td`,23),Mk(917,`-`),Kg(),Jc(918,`td`,24)(919,`em`)(920,`strong`),Mk(921,`(opcional)`),Kg()(),Jc(922,`p`),Mk(923,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),Kg(),Jc(924,`p`),Mk(925,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Jc(926,`code`),Mk(927,`p-field-label`),Kg(),Mk(928,` e `),Jc(929,`code`),Mk(930,`p-field-value`),Kg(),Mk(931,` para a construção da lista de itens.`),Kg(),Jc(932,`p`),Mk(933,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Kg(),Jc(934,`pre`)(935,`code`),Mk(936,`url + ?filter=Peter
`),Kg()(),Jc(937,`p`),Mk(938,`Se for definida a propriedade `),Jc(939,`code`),Mk(940,`p-filter-params`),Kg(),Mk(941,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Jc(942,`code`),Mk(943,`{ age: 23 }`),Kg(),Mk(944,` a URL ficaria:`),Kg(),Jc(945,`pre`)(946,`code`),Mk(947,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Kg()()()(),Jc(948,`tr`,56)(949,`td`,17)(950,`div`,26)(951,`span`,27),Mk(952,` p-help`),_u(953,`br`),Kg()()(),Jc(954,`td`,21)(955,`code`,28),Mk(956,`string`),Kg()(),Jc(957,`td`,23),Mk(958,`-`),Kg(),Jc(959,`td`,24)(960,`em`)(961,`strong`),Mk(962,`(opcional)`),Kg()(),Jc(963,`p`),Mk(964,`Texto de apoio para o campo.`),Kg()()(),Jc(965,`tr`,57)(966,`td`,17)(967,`div`,26)(968,`span`,27),Mk(969,` p-icon`),_u(970,`br`),Kg()()(),Jc(971,`td`,21)(972,`code`,28),Mk(973,`string `),Kg(),Jc(974,`code`,58),Mk(975,` TemplateRef<void>`),Kg()(),Jc(976,`td`,23),Mk(977,`-`),Kg(),Jc(978,`td`,24)(979,`em`)(980,`strong`),Mk(981,`(opcional)`),Kg()(),Jc(982,`p`),Mk(983,`Define o ícone que será exibido no início do campo.`),Kg(),Jc(984,`p`),Mk(985,`É possível usar qualquer um dos ícones da `),Jc(986,`a`,59),Mk(987,`Biblioteca de ícones`),Kg(),Mk(988,`. conforme exemplo abaixo:`),Kg(),Jc(989,`pre`)(990,`code`),Mk(991,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),Kg()(),Jc(992,`p`),Mk(993,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(994,`em`),Mk(995,`Font Awesome`),Kg(),Mk(996,`, da seguinte forma:`),Kg(),Jc(997,`pre`)(998,`code`),Mk(999,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),Kg()(),Jc(1e3,`p`),Mk(1001,`Outra opção seria a customização do ícone através do `),Jc(1002,`code`),Mk(1003,`TemplateRef`),Kg(),Mk(1004,`, conforme exemplo abaixo:`),Kg(),Jc(1005,`pre`)(1006,`code`),Mk(1007,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Jc(1008,`blockquote`)(1009,`p`),Mk(1010,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(1011,`code`),Mk(1012,`font-size: inherit`),Kg(),Mk(1013,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Jc(1014,`tr`,60)(1015,`td`,17)(1016,`div`,26)(1017,`span`,27),Mk(1018,` p-infinite-scroll`),_u(1019,`br`),Kg()()(),Jc(1020,`td`,21)(1021,`code`,30),Mk(1022,`boolean`),Kg()(),Jc(1023,`td`,23)(1024,`p`)(1025,`code`),Mk(1026,`false`),Kg()()(),Jc(1027,`td`,24)(1028,`em`)(1029,`strong`),Mk(1030,`(opcional)`),Kg()(),Jc(1031,`p`),Mk(1032,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Kg()()(),Jc(1033,`tr`,61)(1034,`td`,17)(1035,`div`,26)(1036,`span`,27),Mk(1037,` p-infinite-scroll-distance`),_u(1038,`br`),Kg()()(),Jc(1039,`td`,21)(1040,`code`,40),Mk(1041,`number`),Kg()(),Jc(1042,`td`,23),Mk(1043,`-`),Kg(),Jc(1044,`td`,24)(1045,`em`)(1046,`strong`),Mk(1047,`(opcional)`),Kg()(),Jc(1048,`p`),Mk(1049,`Define o percentual necessário para disparar o evento `),Jc(1050,`code`),Mk(1051,`show-more`),Kg(),Mk(1052,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),Kg(),Jc(1053,`p`)(1054,`strong`),Mk(1055,`Exemplos`),Kg()(),Jc(1056,`ul`)(1057,`li`),Mk(1058,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Jc(1059,`code`),Mk(1060,`show-more`),Kg(),Mk(1061,` será disparado.`),Kg()()()(),Jc(1062,`tr`,62)(1063,`td`,17)(1064,`div`,18)(1065,`span`,19),Mk(1066,` (p-input-change)`),_u(1067,`br`),Kg()()(),Jc(1068,`td`,21)(1069,`code`,22),Mk(1070,`EventEmitter`),Kg()(),Jc(1071,`td`,23),Mk(1072,`-`),Kg(),Jc(1073,`td`,24)(1074,`em`)(1075,`strong`),Mk(1076,`(opcional)`),Kg()(),Jc(1077,`p`),Mk(1078,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),Kg()()(),Jc(1079,`tr`,63)(1080,`td`,17)(1081,`div`,18)(1082,`span`,19),Mk(1083,` (p-keydown)`),_u(1084,`br`),Kg()()(),Jc(1085,`td`,21)(1086,`code`,22),Mk(1087,`EventEmitter`),Kg()(),Jc(1088,`td`,23),Mk(1089,`-`),Kg(),Jc(1090,`td`,24)(1091,`em`)(1092,`strong`),Mk(1093,`(opcional)`),Kg()(),Jc(1094,`p`),Mk(1095,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(1096,`code`),Mk(1097,`KeyboardEvent`),Kg(),Mk(1098,` com informações sobre a tecla.`),Kg()()(),Jc(1099,`tr`,64)(1100,`td`,17)(1101,`div`,26)(1102,`span`,27),Mk(1103,` p-label`),_u(1104,`br`),Kg()()(),Jc(1105,`td`,21)(1106,`code`,28),Mk(1107,`string`),Kg()(),Jc(1108,`td`,23),Mk(1109,`-`),Kg(),Jc(1110,`td`,24)(1111,`em`)(1112,`strong`),Mk(1113,`(opcional)`),Kg()(),Jc(1114,`p`),Mk(1115,`Label no componente.`),Kg()()(),Jc(1116,`tr`,65)(1117,`td`,17)(1118,`div`,26)(1119,`span`,27),Mk(1120,` p-label-text-wrap`),_u(1121,`br`),Kg()()(),Jc(1122,`td`,21)(1123,`code`,30),Mk(1124,`boolean`),Kg()(),Jc(1125,`td`,23)(1126,`p`)(1127,`code`),Mk(1128,`false`),Kg()()(),Jc(1129,`td`,24)(1130,`em`)(1131,`strong`),Mk(1132,`(opcional)`),Kg()(),Jc(1133,`p`),Mk(1134,`Habilita a quebra automática do texto da propriedade `),Jc(1135,`code`),Mk(1136,`p-label`),Kg(),Mk(1137,`. Quando `),Jc(1138,`code`),Mk(1139,`p-label-text-wrap`),Kg(),Mk(1140,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(1141,`tr`,66)(1142,`td`,17)(1143,`div`,26)(1144,`span`,27),Mk(1145,` p-listbox-control-position`),_u(1146,`br`),Kg()()(),Jc(1147,`td`,21)(1148,`code`,67),Mk(1149,`'top' `),Kg(),Jc(1150,`code`,68),Mk(1151,` 'bottom'`),Kg()(),Jc(1152,`td`,23)(1153,`p`)(1154,`code`),Mk(1155,`bottom`),Kg()()(),Jc(1156,`td`,24)(1157,`em`)(1158,`strong`),Mk(1159,`(opcional)`),Kg()(),Jc(1160,`p`),Mk(1161,`Define a direção preferida para exibição do `),Jc(1162,`code`),Mk(1163,`listbox`),Kg(),Mk(1164,` em relação ao campo (`),Jc(1165,`code`),Mk(1166,`top`),Kg(),Mk(1167,` ou `),Jc(1168,`code`),Mk(1169,`bottom`),Kg(),Mk(1170,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg()()(),Jc(1171,`tr`,69)(1172,`td`,17)(1173,`div`,26)(1174,`span`,27),Mk(1175,` p-literals`),_u(1176,`br`),Kg()()(),Jc(1177,`td`,21)(1178,`code`,70),Mk(1179,`PoComboLiterals`),Kg()(),Jc(1180,`td`,23),Mk(1181,`-`),Kg(),Jc(1182,`td`,24)(1183,`em`)(1184,`strong`),Mk(1185,`(opcional)`),Kg()(),Jc(1186,`p`),Mk(1187,`Objeto com as literais usadas no `),Jc(1188,`code`),Mk(1189,`po-combo`),Kg(),Mk(1190,`.`),Kg(),Jc(1191,`p`),Mk(1192,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Jc(1193,`pre`)(1194,`code`),Mk(1195,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),Kg()(),Jc(1196,`p`),Mk(1197,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Jc(1198,`pre`)(1199,`code`),Mk(1200,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),Kg()(),Jc(1201,`blockquote`)(1202,`p`),Mk(1203,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(1204,`a`,71)(1205,`code`),Mk(1206,`PoI18nService`),Kg()(),Mk(1207,` ou do browser.`),Kg()()()(),Jc(1208,`tr`,72)(1209,`td`,17)(1210,`div`,26)(1211,`span`,27),Mk(1212,` p-loading`),_u(1213,`br`),Kg()()(),Jc(1214,`td`,21)(1215,`code`,30),Mk(1216,`boolean`),Kg()(),Jc(1217,`td`,23)(1218,`p`)(1219,`code`),Mk(1220,`false`),Kg()()(),Jc(1221,`td`,24)(1222,`em`)(1223,`strong`),Mk(1224,`(opcional)`),Kg()(),Jc(1225,`p`),Mk(1226,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Jc(1227,`tr`,73)(1228,`td`,17)(1229,`div`,26)(1230,`span`,27),Mk(1231,` name`),_u(1232,`br`),Kg()()(),Jc(1233,`td`,21)(1234,`code`,28),Mk(1235,`string`),Kg()(),Jc(1236,`td`,23),Mk(1237,`-`),Kg(),Jc(1238,`td`,24)(1239,`p`),Mk(1240,`Nome do componente.`),Kg()()(),Jc(1241,`tr`,74)(1242,`td`,17)(1243,`div`,18)(1244,`span`,19),Mk(1245,` (ngModelChange)`),_u(1246,`br`),Kg()()(),Jc(1247,`td`,21)(1248,`code`,22),Mk(1249,`EventEmitter`),Kg()(),Jc(1250,`td`,23),Mk(1251,`-`),Kg(),Jc(1252,`td`,24)(1253,`em`)(1254,`strong`),Mk(1255,`(opcional)`),Kg()(),Jc(1256,`p`),Mk(1257,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Jc(1258,`p`),Mk(1259,`Na versão 12.2.0 do Angular a verificação `),Jc(1260,`code`),Mk(1261,`strictTemplates`),Kg(),Mk(1262,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Jc(1263,`pre`)(1264,`code`),Mk(1265,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),Kg()()()(),Jc(1266,`tr`,75)(1267,`td`,17)(1268,`div`,26)(1269,`span`,27),Mk(1270,` p-optional`),_u(1271,`br`),Kg()()(),Jc(1272,`td`,21)(1273,`code`,30),Mk(1274,`boolean`),Kg()(),Jc(1275,`td`,23)(1276,`p`)(1277,`code`),Mk(1278,`false`),Kg()()(),Jc(1279,`td`,24)(1280,`em`)(1281,`strong`),Mk(1282,`(opcional)`),Kg()(),Jc(1283,`p`),Mk(1284,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(1285,`blockquote`)(1286,`p`),Mk(1287,`Não será exibida a indicação se:`),Kg()(),Jc(1288,`ul`)(1289,`li`),Mk(1290,`O campo conter `),Jc(1291,`code`),Mk(1292,`p-required`),Kg(),Mk(1293,`;`),Kg(),Jc(1294,`li`),Mk(1295,`Não possuir `),Jc(1296,`code`),Mk(1297,`p-help`),Kg(),Mk(1298,` e/ou `),Jc(1299,`code`),Mk(1300,`p-label`),Kg(),Mk(1301,`.`),Kg()()()(),Jc(1302,`tr`,76)(1303,`td`,17)(1304,`div`,26)(1305,`span`,27),Mk(1306,` p-options`),_u(1307,`br`),Kg()()(),Jc(1308,`td`,21)(1309,`code`,77),Mk(1310,`Array<PoComboOption `),Kg(),Jc(1311,`code`,78),Mk(1312,` PoComboOptionGroup `),Kg(),Jc(1313,`code`,79),Mk(1314,` any>`),Kg()(),Jc(1315,`td`,23),Mk(1316,`-`),Kg(),Jc(1317,`td`,24)(1318,`p`),Mk(1319,`Nesta propriedade define a lista de opções do `),Jc(1320,`code`),Mk(1321,`po-combo`),Kg(),Mk(1322,`.`),Kg(),Jc(1323,`blockquote`)(1324,`p`),Mk(1325,`A lista pode ser definida utilizando um array com o valor representando o `),Jc(1326,`code`),Mk(1327,`value`),Kg(),Mk(1328,` e o `),Jc(1329,`code`),Mk(1330,`label`),Kg(),Mk(1331,` das seguintes formas:`),Kg()(),Jc(1332,`pre`)(1333,`code`),Mk(1334,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),Kg()(),Jc(1335,`pre`)(1336,`code`),Mk(1337,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),Kg()(),Jc(1338,`ul`)(1339,`li`),Mk(1340,`Aconselha-se utilizar valores distintos no `),Jc(1341,`code`),Mk(1342,`label`),Kg(),Mk(1343,` e `),Jc(1344,`code`),Mk(1345,`value`),Kg(),Mk(1346,` dos itens.`),Kg()()()(),Jc(1347,`tr`,80)(1348,`td`,17)(1349,`div`,26)(1350,`span`,27),Mk(1351,` p-placeholder`),_u(1352,`br`),Kg()()(),Jc(1353,`td`,21)(1354,`code`,28),Mk(1355,`string`),Kg()(),Jc(1356,`td`,23),Mk(1357,`-`),Kg(),Jc(1358,`td`,24)(1359,`p`),Mk(1360,`Mensagem apresentada enquanto o campo estiver vazio.`),Kg()()(),Jc(1361,`tr`,81)(1362,`td`,17)(1363,`div`,26)(1364,`span`,27),Mk(1365,` p-helper`),_u(1366,`br`),Kg()()(),Jc(1367,`td`,21)(1368,`code`,82),Mk(1369,`PoHelperOptions `),Kg(),Jc(1370,`code`,28),Mk(1371,` string`),Kg()(),Jc(1372,`td`,23),Mk(1373,`-`),Kg(),Jc(1374,`td`,24)(1375,`em`)(1376,`strong`),Mk(1377,`(opcional)`),Kg()(),Jc(1378,`p`),Mk(1379,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1380,`code`),Mk(1381,`p-label`),Kg(),Mk(1382,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1383,`code`),Mk(1384,`p-label`),Kg(),Mk(1385,`.`),Kg(),Jc(1386,`blockquote`)(1387,`p`),Mk(1388,`Para mais informações acesse: `),Jc(1389,`a`,83),Mk(1390,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(1391,`.`),Kg()(),Jc(1392,`blockquote`)(1393,`p`),Mk(1394,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1395,`code`),Mk(1396,`p-additional-help-tooltip`),Kg(),Mk(1397,` e `),Jc(1398,`code`),Mk(1399,`p-additional-help`),Kg(),Mk(1400,`) será ignorado.`),Kg()()()(),Jc(1401,`tr`,84)(1402,`td`,17)(1403,`div`,26)(1404,`span`,27),Mk(1405,` p-remove-initial-filter`),_u(1406,`br`),Kg()()(),Jc(1407,`td`,21)(1408,`code`,30),Mk(1409,`boolean`),Kg()(),Jc(1410,`td`,23)(1411,`p`)(1412,`code`),Mk(1413,`false`),Kg()()(),Jc(1414,`td`,24)(1415,`em`)(1416,`strong`),Mk(1417,`(opcional)`),Kg()(),Jc(1418,`p`),Mk(1419,`Define se o filtro inicial será removido no primeiro clique do campo.`),Kg(),Jc(1420,`p`),Mk(1421,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),Kg()()(),Jc(1422,`tr`,85)(1423,`td`,17)(1424,`div`,26)(1425,`span`,27),Mk(1426,` p-required`),_u(1427,`br`),Kg()()(),Jc(1428,`td`,21)(1429,`code`,30),Mk(1430,`boolean`),Kg()(),Jc(1431,`td`,23)(1432,`p`)(1433,`code`),Mk(1434,`false`),Kg()()(),Jc(1435,`td`,24)(1436,`em`)(1437,`strong`),Mk(1438,`(opcional)`),Kg()(),Jc(1439,`p`),Mk(1440,`Define que o campo será obrigatório.`),Kg()()(),Jc(1441,`tr`,86)(1442,`td`,17)(1443,`div`,26)(1444,`span`,27),Mk(1445,` p-show-required`),_u(1446,`br`),Kg()()(),Jc(1447,`td`,21)(1448,`code`,30),Mk(1449,`boolean`),Kg()(),Jc(1450,`td`,23),Mk(1451,`-`),Kg(),Jc(1452,`td`,24)(1453,`p`),Mk(1454,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(1455,`blockquote`)(1456,`p`),Mk(1457,`Não será exibida a indicação se:`),Kg()(),Jc(1458,`ul`)(1459,`li`),Mk(1460,`Não possuir `),Jc(1461,`code`),Mk(1462,`p-help`),Kg(),Mk(1463,` e/ou `),Jc(1464,`code`),Mk(1465,`p-label`),Kg(),Mk(1466,`.`),Kg()()()(),Jc(1467,`tr`,87)(1468,`td`,17)(1469,`div`,26)(1470,`span`,27),Mk(1471,` p-size`),_u(1472,`br`),Kg()()(),Jc(1473,`td`,21)(1474,`code`,28),Mk(1475,`string`),Kg()(),Jc(1476,`td`,23)(1477,`p`)(1478,`code`),Mk(1479,`medium`),Kg()()(),Jc(1480,`td`,24)(1481,`em`)(1482,`strong`),Mk(1483,`(opcional)`),Kg()(),Jc(1484,`p`),Mk(1485,`Define o tamanho do componente:`),Kg(),Jc(1486,`ul`)(1487,`li`)(1488,`code`),Mk(1489,`small`),Kg(),Mk(1490,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(1491,`li`)(1492,`code`),Mk(1493,`medium`),Kg(),Mk(1494,`: altura do input como 44px.`),Kg()(),Jc(1495,`blockquote`)(1496,`p`),Mk(1497,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1498,`code`),Mk(1499,`medium`),Kg(),Mk(1500,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1501,`a`,88),Mk(1502,`po-theme`),Kg(),Mk(1503,`.`),Kg()()()(),Jc(1504,`tr`,89)(1505,`td`,17)(1506,`div`,26)(1507,`span`,27),Mk(1508,` p-sort`),_u(1509,`br`),Kg()()(),Jc(1510,`td`,21)(1511,`code`,30),Mk(1512,`boolean`),Kg()(),Jc(1513,`td`,23),Mk(1514,`-`),Kg(),Jc(1515,`td`,24)(1516,`p`),Mk(1517,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Kg()()()(),Jc(1518,`h3`,12),Mk(1519,`Métodos`),Kg(),Jc(1520,`table`,90)(1521,`tr`,91)(1522,`th`,92)(1523,`div`,26)(1524,`h4`)(1525,`span`,27),Mk(1526,` focus `),Kg()()()()(),Jc(1527,`tr`,24)(1528,`td`,24)(1529,`p`),Mk(1530,`Função que atribui foco ao componente.`),Kg(),Jc(1531,`p`),Mk(1532,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(1533,`pre`)(1534,`code`),Mk(1535,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),Kg()()()()(),_u(1536,`br`),Jc(1537,`table`,93)(1538,`tr`,91)(1539,`th`,92)(1540,`div`,26)(1541,`h4`)(1542,`span`,27),Mk(1543,` showAdditionalHelp `),Kg()()()()(),Jc(1544,`tr`,24)(1545,`td`,24)(1546,`p`),Mk(1547,`Método que exibe `),Jc(1548,`code`),Mk(1549,`p-helper`),Kg(),Mk(1550,` ou executa a ação definida em `),Jc(1551,`code`),Mk(1552,`p-helper{eventOnClick}`),Kg(),Mk(1553,` ou em `),Jc(1554,`code`),Mk(1555,`p-additionalHelp`),Kg(),Mk(1556,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1557,`code`),Mk(1558,`p-keydown`),Kg(),Mk(1559,`.`),Kg(),Jc(1560,`blockquote`)(1561,`p`),Mk(1562,`Exibe ou oculta o conteúdo do componente `),Jc(1563,`code`),Mk(1564,`po-helper`),Kg(),Mk(1565,` quando o componente estiver com foco.`),Kg()(),Jc(1566,`pre`)(1567,`code`),Mk(1568,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),Kg()(),Jc(1569,`pre`)(1570,`code`),Mk(1571,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1572,`br`),Jc(1573,`h3`),Mk(1574,`Interfaces`),Kg(),Jc(1575,`h4`,94)(1576,`code`,7),Mk(1577,`PoComboFilter`),Kg()(),Jc(1578,`div`,2)(1579,`p`),Mk(1580,`Interface para os serviços que serão utilizados no po-combo.`),Kg()(),Jc(1581,`h4`,12),Mk(1582,`Métodos`),Kg(),Jc(1583,`table`,95)(1584,`tr`,91)(1585,`th`,92)(1586,`div`,26)(1587,`h4`)(1588,`span`,27),Mk(1589,` getFilteredData `),Kg()()()()(),Jc(1590,`tr`,24)(1591,`td`,24)(1592,`p`),Mk(1593,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),Kg()()()(),Jc(1594,`h5`)(1595,`b`),Mk(1596,`Parâmetros`),Kg()(),Jc(1597,`table`,13)(1598,`tr`,14)(1599,`th`,15),Mk(1600,`Nome`),Kg(),Jc(1601,`th`,15),Mk(1602,`Tipo`),Kg(),Jc(1603,`th`,15),Mk(1604,`Descrição`),Kg()(),Jc(1605,`tr`,91)(1606,`td`,17),Mk(1607,` params`),Kg(),Jc(1608,`td`,21)(1609,`code`,96),Mk(1610,` any `),Kg()(),Jc(1611,`td`,24)(1612,`p`),Mk(1613,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Kg()()(),Jc(1614,`tr`,91)(1615,`td`,17),Mk(1616,` filterParams`),Kg(),Jc(1617,`td`,21)(1618,`code`,96),Mk(1619,` any `),Kg()(),Jc(1620,`td`,24)(1621,`p`),Mk(1622,`Valor informado através da propriedade `),Jc(1623,`code`),Mk(1624,`p-filter-params`),Kg(),Mk(1625,`.`),Kg()()()(),_u(1626,`br`),Jc(1627,`table`,97)(1628,`tr`,91)(1629,`th`,92)(1630,`div`,26)(1631,`h4`)(1632,`span`,27),Mk(1633,` getObjectByValue `),Kg()()()()(),Jc(1634,`tr`,24)(1635,`td`,24)(1636,`p`),Mk(1637,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),Kg()()()(),Jc(1638,`h5`)(1639,`b`),Mk(1640,`Parâmetros`),Kg()(),Jc(1641,`table`,13)(1642,`tr`,14)(1643,`th`,15),Mk(1644,`Nome`),Kg(),Jc(1645,`th`,15),Mk(1646,`Tipo`),Kg(),Jc(1647,`th`,15),Mk(1648,`Descrição`),Kg()(),Jc(1649,`tr`,91)(1650,`td`,17),Mk(1651,` value`),Kg(),Jc(1652,`td`,21)(1653,`code`,28),Mk(1654,` string `),Kg(),Jc(1655,`code`,40),Mk(1656,` number `),Kg()(),Jc(1657,`td`,24)(1658,`p`),Mk(1659,`Valor responsável por realizar a busca de um único objeto.`),Kg()()(),Jc(1660,`tr`,91)(1661,`td`,17),Mk(1662,` filterParams`),Kg(),Jc(1663,`td`,21)(1664,`code`,96),Mk(1665,` any `),Kg()(),Jc(1666,`td`,24)(1667,`p`),Mk(1668,`Valor informado através da propriedade `),Jc(1669,`code`),Mk(1670,`p-filter-params`),Kg(),Mk(1671,`.`),Kg()()()(),_u(1672,`br`),Jc(1673,`h4`,98)(1674,`code`,7),Mk(1675,`PoComboLiterals`),Kg()(),Jc(1676,`div`,2)(1677,`p`),Mk(1678,`Interface para definição das literais usadas no `),Jc(1679,`code`),Mk(1680,`po-combo`),Kg(),Mk(1681,`.`),Kg()(),Jc(1682,`h4`,12),Mk(1683,`Propriedades`),Kg(),Jc(1684,`table`,13)(1685,`tr`,14)(1686,`th`,15),Mk(1687,`Nome`),Kg(),Jc(1688,`th`,15),Mk(1689,`Tipo`),Kg(),Jc(1690,`th`,15),Mk(1691,`Descrição`),Kg()(),Jc(1692,`tr`,99)(1693,`td`,17)(1694,`div`,26)(1695,`span`,27),Mk(1696,` chooseOption`),_u(1697,`br`),Kg()()(),Jc(1698,`td`,21)(1699,`code`,28),Mk(1700,`string`),Kg()(),Jc(1701,`td`,24)(1702,`em`)(1703,`strong`),Mk(1704,`(opcional)`),Kg()(),Jc(1705,`p`),Mk(1706,`Texto exibido quando o combo estiver vazio.`),Kg()()(),Jc(1707,`tr`,100)(1708,`td`,17)(1709,`div`,26)(1710,`span`,27),Mk(1711,` clean`),_u(1712,`br`),Kg()()(),Jc(1713,`td`,21)(1714,`code`,28),Mk(1715,`string`),Kg()(),Jc(1716,`td`,24)(1717,`em`)(1718,`strong`),Mk(1719,`(opcional)`),Kg()(),Jc(1720,`p`),Mk(1721,`Texto do aria-label do botão de limpar`),Kg()()(),Jc(1722,`tr`,101)(1723,`td`,17)(1724,`div`,26)(1725,`span`,27),Mk(1726,` noData`),_u(1727,`br`),Kg()()(),Jc(1728,`td`,21)(1729,`code`,28),Mk(1730,`string`),Kg()(),Jc(1731,`td`,24)(1732,`em`)(1733,`strong`),Mk(1734,`(opcional)`),Kg()(),Jc(1735,`p`),Mk(1736,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),Kg()()()(),Jc(1737,`h4`,102)(1738,`code`,7),Mk(1739,`PoComboOptionGroup`),Kg()(),Jc(1740,`div`,2)(1741,`p`),Mk(1742,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Jc(1743,`code`),Mk(1744,`po-combo`),Kg(),Mk(1745,`.`),Kg()(),Jc(1746,`h4`,12),Mk(1747,`Propriedades`),Kg(),Jc(1748,`table`,13)(1749,`tr`,14)(1750,`th`,15),Mk(1751,`Nome`),Kg(),Jc(1752,`th`,15),Mk(1753,`Tipo`),Kg(),Jc(1754,`th`,15),Mk(1755,`Descrição`),Kg()(),Jc(1756,`tr`,103)(1757,`td`,17)(1758,`div`,26)(1759,`span`,27),Mk(1760,` label`),_u(1761,`br`),Kg()()(),Jc(1762,`td`,21)(1763,`code`,28),Mk(1764,`string`),Kg()(),Jc(1765,`td`,24)(1766,`p`),Mk(1767,`Título para cada grupo de opções.`),Kg(),Jc(1768,`p`),Mk(1769,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),Kg()()(),Jc(1770,`tr`,104)(1771,`td`,17)(1772,`div`,26)(1773,`span`,27),Mk(1774,` options`),_u(1775,`br`),Kg()()(),Jc(1776,`td`,21)(1777,`code`,105),Mk(1778,`Array<PoComboOption>`),Kg()(),Jc(1779,`td`,24)(1780,`p`),Mk(1781,`Lista de itens a serem exibidos.`),Kg()()()(),Jc(1782,`h4`,106)(1783,`code`,7),Mk(1784,`PoComboOption`),Kg()(),Jc(1785,`div`,2)(1786,`p`),Mk(1787,`Interface que define as opções que serão exibidas na lista do `),Jc(1788,`code`),Mk(1789,`po-combo`),Kg(),Mk(1790,`.`),Kg()(),Jc(1791,`h4`,12),Mk(1792,`Propriedades`),Kg(),Jc(1793,`table`,13)(1794,`tr`,14)(1795,`th`,15),Mk(1796,`Nome`),Kg(),Jc(1797,`th`,15),Mk(1798,`Tipo`),Kg(),Jc(1799,`th`,15),Mk(1800,`Descrição`),Kg()(),Jc(1801,`tr`,107)(1802,`td`,17)(1803,`div`,26)(1804,`span`,27),Mk(1805,` label`),_u(1806,`br`),Kg()()(),Jc(1807,`td`,21)(1808,`code`,28),Mk(1809,`string`),Kg()(),Jc(1810,`td`,24)(1811,`em`)(1812,`strong`),Mk(1813,`(opcional)`),Kg()(),Jc(1814,`p`),Mk(1815,`Descrição exibida nas opções da lista.`),Kg(),Jc(1816,`blockquote`)(1817,`p`),Mk(1818,`Caso não seja definida será assumido o valor definido na propriedade `),Jc(1819,`code`),Mk(1820,`value`),Kg(),Mk(1821,`.`),Kg()()()(),Jc(1822,`tr`,108)(1823,`td`,17)(1824,`div`,26)(1825,`span`,27),Mk(1826,` value`),_u(1827,`br`),Kg()()(),Jc(1828,`td`,21)(1829,`code`,28),Mk(1830,`string `),Kg(),Jc(1831,`code`,40),Mk(1832,` number`),Kg()(),Jc(1833,`td`,24)(1834,`p`),Mk(1835,`Valor do objeto que será atribuído ao `),Jc(1836,`em`),Mk(1837,`model`),Kg(),Mk(1838,`.`),Kg()()()(),Jc(1839,`h3`),Mk(1840,`Enums`),Kg(),Jc(1841,`h4`,109)(1842,`code`,7),Mk(1843,`PoComboFilterMode`),Kg()(),Jc(1844,`div`,2)(1845,`p`),Mk(1846,`Define o tipo de busca usado no po-combo.`),Kg()(),Jc(1847,`h4`,12),Mk(1848,`Propriedades`),Kg(),Jc(1849,`table`,13)(1850,`tr`,14)(1851,`th`,15),Mk(1852,`Nome`),Kg(),Jc(1853,`th`,15),Mk(1854,`Descrição`),Kg()(),Jc(1855,`tr`,110)(1856,`td`,17)(1857,`div`,26)(1858,`span`,27),Mk(1859,` startsWith`),_u(1860,`br`),Kg()()(),Jc(1861,`td`,24)(1862,`p`),Mk(1863,`Verifica se o texto `),Jc(1864,`em`),Mk(1865,`inicia`),Kg(),Mk(1866,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),Kg()()(),Jc(1867,`tr`,111)(1868,`td`,17)(1869,`div`,26)(1870,`span`,27),Mk(1871,` contains`),_u(1872,`br`),Kg()()(),Jc(1873,`td`,24)(1874,`p`),Mk(1875,`Verifica se o texto `),Jc(1876,`em`),Mk(1877,`contém`),Kg(),Mk(1878,` o valor pesquisado.`),Kg()()(),Jc(1879,`tr`,112)(1880,`td`,17)(1881,`div`,26)(1882,`span`,27),Mk(1883,` endsWith`),_u(1884,`br`),Kg()()(),Jc(1885,`td`,24)(1886,`p`),Mk(1887,`Verifica se o texto `),Jc(1888,`em`),Mk(1889,`finaliza`),Kg(),Mk(1890,` com o valor pesquisado.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function Wt(a,D){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-combo-basic-view`)(2,`sample-po-combo-labs-view`)(3,`sample-po-combo-scheduling-view`)(4,`sample-po-combo-transfer-view`)(5,`sample-po-combo-heroes-view`)(6,`sample-po-combo-heroes-reactive-form-view`)(7,`sample-po-combo-infinity-scroll-view`)(8,`sample-po-combo-hotels-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Nt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;title=`Combo`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Combo · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0),LO(1,Wt,9,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-combo-doc`),Kg()()),p&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,Ge,Ie,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Nt),GV]})}return a})();var mn=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,it]})}return a})();export{mn as DocPoComboModule};