import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,Aa as qk,Di as Wb,Dt as Zoe,Ei as WV,Fn as voe,Fr as Jc,H as Mze,Hi as ar,Hr as Kk,I as Koe,Ia as sk,Ii as ZO,In as w4,Ja as we,Ji as eF,Li as Zb,Lr as Jm,Mi as Y0,Mn as tre,Mt as are,Na as sF,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,P as Joe,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Xi as fF,Yr as NZ,Zn as $_,Zr as No,an as j4,ba as o1,bi as Uk,cr as Bk,di as R,ea as ge,ei as Ok,eo as xo,er as Ab,fi as RZ,gi as Tk,h as Dte,hi as TZ,ir as BO,j as I4,jn as tie,jr as I,k as Goe,ki as XL,ni as PI,no as yk,nr as An,pr as Cu,qa as vt$1,qi as de,rn as ia,sa as jk,tr as Ak,tt as Ru,ua as kZ,ur as Cb,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yn as p5,zt as c4}from"./chunk-BJubg121.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,O)=>[a,O];var Ae=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&_u(0,`po-combo`,0),p&2&&Ab(`p-options`,Uk(3,rt,jk(1,at),jk(2,lt)))},dependencies:[w4],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo Basic`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-basic`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,mt,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}]}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&`options`in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return[...m,{label:d,value:c}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let d=ZO();Jc(0,`po-combo`,2),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.combo,i)||(n.combo=i),$_(i)}),vt$1(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4)(4,`po-info`,5),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0),_u(8,`po-divider`,6),Jc(9,`div`,3)(10,`po-switch`,7),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),$_(i)}),Zg(),Jc(11,`po-select`,8),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),$_(i)}),vt$1(`p-change`,function(){return n.optionsGroupSelection()}),Zg(),Jc(12,`po-input`,9),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.optionsGroup,i)||(n.optionsGroup=i),$_(i)}),Zg()(),_u(13,`po-divider`,10),Jc(14,`div`,3)(15,`po-input`,11),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.option.label,i)||(n.option.label=i),$_(i)}),Zg(),Jc(16,`po-input`,12),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.option.value,i)||(n.option.value=i),$_(i)}),Zg()(),Jc(17,`div`,3)(18,`po-button`,13),vt$1(`p-click`,function(){return n.addOption()}),Zg()()(),_u(19,`po-divider`),Jc(20,`form`,null,1)(22,`po-input`,14),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.label,i)||(n.label=i),$_(i)}),Zg(),Jc(23,`po-input`,15),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.help,i)||(n.help=i),$_(i)}),Zg(),Jc(24,`po-input`,16),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.helperText,i)||(n.helperText=i),$_(i)}),Zg(),Jc(25,`po-input`,17),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.placeholder,i)||(n.placeholder=i),$_(i)}),Zg(),Jc(26,`po-input`,18),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),$_(i)}),Zg(),Jc(27,`div`,3)(28,`po-checkbox-group`,19),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.properties,i)||(n.properties=i),$_(i)}),Zg(),Jc(29,`po-radio-group`,20),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.icon,i)||(n.icon=i),$_(i)}),Zg(),Jc(30,`po-radio-group`,21),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.filterMode,i)||(n.filterMode=i),$_(i)}),Zg(),Jc(31,`po-radio-group`,22),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.size,i)||(n.size=i),$_(i)}),Zg(),Jc(32,`po-radio-group`,23),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.listboxPosition,i)||(n.listboxPosition=i),$_(i)}),Zg()(),Jc(33,`div`,3)(34,`po-input`,24),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.filterService,i)||(n.filterService=i),$_(i)}),Zg(),Jc(35,`po-input`,25),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.literals,i)||(n.literals=i),$_(i)}),vt$1(`p-change`,function(){return n.changeLiterals()}),Zg()(),Jc(36,`div`,3)(37,`po-input`,26),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.fieldValue,i)||(n.fieldValue=i),$_(i)}),Zg(),Jc(38,`po-input`,27),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.fieldLabel,i)||(n.fieldLabel=i),$_(i)}),Zg()(),Jc(39,`div`,3)(40,`po-number`,28),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.debounceTime,i)||(n.debounceTime=i),$_(i)}),Zg(),Jc(41,`po-number`,29),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.filterMinlength,i)||(n.filterMinlength=i),$_(i)}),Zg()(),Jc(42,`div`,3)(43,`po-button`,30),vt$1(`p-click`,function(){return n.restore()}),Zg()()()}if(p&2){let d=sk(7);Kb(`ngModel`,n.combo),Ab(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),Y0(),Ig(3),Ab(`p-value`,n.combo),Ig(),Ab(`p-value`,n.event),Ig(6),Kb(`ngModel`,n.comboOptionGroupSwitch),Y0(),Ig(),Kb(`ngModel`,n.selectedOptionsGroup),Ab(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),Y0(),Ig(),Kb(`ngModel`,n.optionsGroup),Ab(`p-disabled`,!n.comboOptionGroupSwitch),Y0(),Ig(3),Kb(`ngModel`,n.option.label),Y0(),Ig(),Kb(`ngModel`,n.option.value),Y0(),Ig(2),Ab(`p-disabled`,d.form.invalid),Ig(4),Kb(`ngModel`,n.label),Y0(),Ig(),Kb(`ngModel`,n.help),Y0(),Ig(),Kb(`ngModel`,n.helperText),Y0(),Ig(),Kb(`ngModel`,n.placeholder),Y0(),Ig(),Kb(`ngModel`,n.fieldErrorMessage),Y0(),Ig(2),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),Y0(),Ig(),Kb(`ngModel`,n.icon),Ab(`p-options`,n.iconsOptions),Y0(),Ig(),Kb(`ngModel`,n.filterMode),Ab(`p-options`,n.filterModeOptions),Y0(),Ig(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),Y0(),Ig(),Kb(`ngModel`,n.listboxPosition),Ab(`p-options`,n.listboxPositionOptions),Y0(),Ig(2),Kb(`ngModel`,n.filterService),Y0(),Ig(),Kb(`ngModel`,n.literals),Y0(),Ig(2),Kb(`ngModel`,n.fieldValue),Y0(),Ig(),Kb(`ngModel`,n.fieldLabel),Y0(),Ig(2),Kb(`ngModel`,n.debounceTime),Y0(),Ig(),Kb(`ngModel`,n.filterMinlength),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,w4,j4,Goe,Zte,Koe,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo Labs`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-combo
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-labs`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ct,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ge],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var bt=[`schedulingForm`];function gt(a,O){if(a&1&&(Jc(0,`div`,3),_u(1,`po-avatar`,15),Jc(2,`p`,14),Tk(3),Zg()()),a&2){let m=nk().$implicit,p=nk();Ig(),Ab(`p-src`,p.getStateByLabel(m.label)),Ig(2),Wb(m.label)}}function ht(a,O){if(a&1&&(Jc(0,`div`,14),Tk(1),Zg()),a&2){let m=nk().$implicit;Ig(),Wb(m.label)}}function St(a,O){if(a&1&&VO(0,gt,4,2,`div`,3)(1,ht,2,1,`div`,14),a&2){let m=O.$implicit;BO(m.options?0:1)}}var ze=(()=>{class a{poNotification=p(Ru);schedulingService=p(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(m=``){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(m){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[m]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Cu(bt,7),p&2){let d;No(d=xo())&&(n.form=d.first)}},standalone:!1,features:[we([fe])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let d=ZO();Jc(0,`div`,1)(1,`div`,2),Tk(2,`Pre-appointment scheduling`),Zg()(),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.name,i)||(n.name=i),$_(i)}),Zg(),Jc(7,`po-email`,5),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.email,i)||(n.email=i),$_(i)}),Zg()(),Jc(8,`div`,3)(9,`po-datepicker`,6),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.birthday,i)||(n.birthday=i),$_(i)}),Zg(),Jc(10,`po-input`,7),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.phone,i)||(n.phone=i),$_(i)}),Zg()(),Jc(11,`div`,3)(12,`po-combo`,8),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.city,i)||(n.city=i),$_(i)}),Cb(13,St,2,1,`ng-template`,9),Zg(),Jc(14,`po-select`,10),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.typeScheduling,i)||(n.typeScheduling=i),$_(i)}),Zg(),Jc(15,`po-combo`,11),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.medicalSpecialty,i)||(n.medicalSpecialty=i),$_(i)}),Zg()(),Jc(16,`div`,3)(17,`po-textarea`,12),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.informations,i)||(n.informations=i),$_(i)}),Zg()(),Jc(18,`div`,3)(19,`po-button`,13),vt$1(`p-click`,function(){return n.confirmPreAppointment(n.name)}),Zg()()()}if(p&2){let d=sk(4);Ig(6),Kb(`ngModel`,n.name),Y0(),Ig(),Kb(`ngModel`,n.email),Y0(),Ig(2),Kb(`ngModel`,n.birthday),Y0(),Ig(),Kb(`ngModel`,n.phone),Y0(),Ig(2),Kb(`ngModel`,n.city),Ab(`p-options`,n.citiesOptions),Y0(),Ig(2),Kb(`ngModel`,n.typeScheduling),Ab(`p-options`,n.typeSchedulings),Y0(),Ig(),Kb(`ngModel`,n.medicalSpecialty),Ab(`p-options`,n.medicalSpecialtyOptions),Y0(),Ig(2),Kb(`ngModel`,n.informations),Y0(),Ig(2),Ab(`p-disabled`,d.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,c4,oi,w4,Dte,tie,p5,j4,Koe,Zoe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo - Scheduling`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-text-center">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()(),Jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Tk(28,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),Zg(),Jc(29,`pre`,11),Tk(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),Zg()()()()(),Jc(31,`div`,12),_u(32,`sample-po-combo-scheduling`),Zg(),_u(33,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ft,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var vt=[`transferForm`];function xt(a,O){if(a&1&&(Jc(0,`div`,3),_u(1,`po-avatar`,15),Jc(2,`div`,16)(3,`div`,17),Tk(4),Zg(),Jc(5,`div`,18),Tk(6),Zg()()()),a&2){let m=O.$implicit;Ig(4),Wb(m.label),Ig(2),nm(`Account: `,m.value)}}var Ue=(()=>{class a{poNotification=p(Ru);form;poModal;contact;dateTransfer=/* @__PURE__ */ new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:/* @__PURE__ */ new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Cu(vt,7)(ia,7),p&2){let d;No(d=xo())&&(n.form=d.first),No(d=xo())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let d=ZO();Jc(0,`div`,1)(1,`div`,2),Tk(2,`Banking Transfer`),Zg()(),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.typeAccount,i)||(n.typeAccount=i),$_(i)}),Zg(),Jc(7,`po-combo`,5),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.contact,i)||(n.contact=i),$_(i)}),Cb(8,xt,7,2,`ng-template`,6),Zg()(),Jc(9,`div`,3)(10,`po-decimal`,7),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.value,i)||(n.value=i),$_(i)}),Zg(),Jc(11,`po-datepicker`,8),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.dateTransfer,i)||(n.dateTransfer=i),$_(i)}),Zg()(),Jc(12,`div`,3)(13,`po-button`,9),vt$1(`p-click`,function(){return n.transfer()}),Zg()()(),Jc(14,`po-modal`,10)(15,`div`,3),_u(16,`po-info`,11)(17,`po-info`,12),Zg(),_u(18,`po-divider`),Jc(19,`div`,3),_u(20,`po-info`,13)(21,`po-info`,14),qk(22,`date`),Zg()()}if(p&2){let d=sk(4);Ig(6),Kb(`ngModel`,n.typeAccount),Ab(`p-options`,n.typeAccounts),Y0(),Ig(),Kb(`ngModel`,n.contact),Y0(),Ig(3),Kb(`ngModel`,n.value),Y0(),Ig(),Kb(`ngModel`,n.dateTransfer),Y0(),Ig(2),Ab(`p-disabled`,d.invalid),Ig(),Ab(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),Ig(2),Ab(`p-value`,n.typeAccount),Ig(),Ab(`p-value`,n.contact),Ig(3),Ab(`p-value`,n.value),Ig(),Ab(`p-value`,Ok(Kk(22,13,n.dateTransfer)))}},dependencies:[NZ,TZ,RZ,JL,qL,c4,oi,Nf,w4,Dte,tie,voe,Koe,Joe,ia,fF],encapsulation:2,changeDetection:1})}return a})();var _t=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo - Banking Transfer`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-text-center">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-transfer`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,_t,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ue],encapsulation:2,changeDetection:1})}return a})();function Pt(a,O){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Zg()),a&2){let m=O;Ig(),Ab(`p-value`,m.name),Ig(),Ab(`p-value`,m.nickname),Ig(),Ab(`p-value`,m.email)}}var Ke=(()=>{class a{http=p(PI);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Jc(0,`div`,0)(1,`po-widget`,1),vt$1(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Jc(2,`po-combo`,2),W0(),Zb(`ngModelChange`,function(c){return Ak(n.heroName,c)||(n.heroName=c),c}),vt$1(`p-change`,function(c){return n.onChangeHero(c)}),Zg(),VO(3,Pt,4,3,`div`,0),qk(4,`async`),Zg()()),p&2){let d;Ig(),Ab(`p-primary-label`,n.knowMoreLabel),Ig(),Kb(`ngModel`,n.heroName),Y0(),Ig(),BO((d=Kk(4,3,n.hero$))?3:-1,d)}},dependencies:[TZ,JL,w4,Joe,bae,sF],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo - Heroes`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-heroes`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Tt,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ke],encapsulation:2,changeDetection:1})}return a})();function Dt(a,O){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Zg()),a&2){let m=O;Ig(),Ab(`p-value`,m.name),Ig(),Ab(`p-value`,m.nickname),Ig(),Ab(`p-value`,m.email)}}var Ye=(()=>{class a{http=p(PI);formBuilder=p(kZ);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,Jm.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let m=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Jc(0,`div`,0)(1,`po-widget`,1),vt$1(`p-primary-action`,function(){return n.knowMore()}),Jc(2,`div`,2)(3,`po-combo`,3),W0(),vt$1(`p-change`,function(c){return n.onChangeHero(c)}),Zg()(),VO(4,Dt,4,3,`div`,0),qk(5,`async`),Zg()()),p&2){let d;Ig(),Ab(`p-primary-label`,n.knowMoreLabel),Ig(),Ab(`formGroup`,n.form),Ig(),Y0(),Ig(),BO((d=Kk(5,3,n.hero$))?4:-1,d)}},dependencies:[TZ,RZ,XL,o1,w4,Joe,bae,sF],encapsulation:2,changeDetection:1})}return a})();var Ot=a=>({"docs-sample-code-tabs":a});var Xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo - Heroes Reactive Form`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-heroes-reactive-form`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ot,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ye],encapsulation:2,changeDetection:1})}return a})();function qt(a,O){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),Zg()),a&2){let m=O;Ig(),Ab(`p-value`,m.name),Ig(),Ab(`p-value`,m.nickname),Ig(),Ab(`p-value`,m.email)}}var Ze=(()=>{class a{http=p(PI);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m)}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),W0(),Zb(`ngModelChange`,function(c){return Ak(n.peopleName,c)||(n.peopleName=c),c}),vt$1(`p-change`,function(c){return n.onChangePeople(c)}),Zg(),VO(3,qt,4,3,`div`,0),qk(4,`async`),Zg()()),p&2){let d;Ig(2),Kb(`ngModel`,n.peopleName),Ab(`p-infinite-scroll`,!0),Y0(),Ig(),BO((d=Kk(4,3,n.people$))?3:-1,d)}},dependencies:[TZ,JL,w4,Joe,bae,sF],encapsulation:2,changeDetection:1})}return a})();var Wt=a=>({"docs-sample-code-tabs":a});var $e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo - Inifity Scroll`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-infinity-scroll`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Wt,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ze],encapsulation:2,changeDetection:1})}return a})();var Bt=[`bookingForm`];var Ht=[`datepicker`];var et=(()=>{class a{poNotification=p(Ru);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(m){this.filterParams=m?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Cu(Bt,7)(Ht,7),p&2){let d;No(d=xo())&&(n.form=d.first),No(d=xo())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let d=ZO();Jc(0,`div`,2)(1,`div`,3),Tk(2,`Booking a Hotel`),Zg()(),Jc(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.checkin,i)||(n.checkin=i),$_(i)}),Zg(),Jc(8,`po-datepicker`,6),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.checkout,i)||(n.checkout=i),$_(i)}),Zg(),Jc(9,`po-switch`,7),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.category,i)||(n.category=i),$_(i)}),vt$1(`p-change`,function(i){return n.onChangeParams(i)}),Zg()(),Jc(10,`div`,4)(11,`po-select`,8),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.rooms,i)||(n.rooms=i),$_(i)}),Zg(),Jc(12,`po-select`,9),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.children,i)||(n.children=i),$_(i)}),Zg(),Jc(13,`po-select`,10),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.adults,i)||(n.adults=i),$_(i)}),Zg()(),Jc(14,`div`,4)(15,`po-combo`,11),W0(),Zb(`ngModelChange`,function(i){return H_(d),Ak(n.hotel,i)||(n.hotel=i),$_(i)}),Zg()(),Jc(16,`div`,4)(17,`po-button`,12),vt$1(`p-click`,function(){return n.booking()}),Zg()()()}if(p&2){let d=sk(4);Ig(6),Kb(`ngModel`,n.checkin),Ab(`p-max-date`,n.checkout),Y0(),Ig(2),Kb(`ngModel`,n.checkout),Ab(`p-min-date`,n.checkin),Y0(),Ig(),Kb(`ngModel`,n.category),Y0(),Ig(2),Kb(`ngModel`,n.rooms),Ab(`p-options`,n.roomsOptions),Y0(),Ig(),Kb(`ngModel`,n.children),Ab(`p-options`,n.childrenOptions),Y0(),Ig(),Kb(`ngModel`,n.adults),Ab(`p-options`,n.adultsOptions),Y0(),Ig(2),Kb(`ngModel`,n.hotel),Ab(`p-filter-params`,n.filterParams),Y0(),Ig(2),Ab(`p-disabled`,d.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,w4,tie,Koe,R4],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a});var tt=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Combo - Booking Hotel`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-text-center">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-combo-hotels`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,It,n.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1887,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoComboComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-combo`),Zg(),Tk(26,` exibe uma lista de opções com fácil seleção e filtragem.`),Zg(),Jc(27,`p`),Tk(28,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),Zg(),Jc(29,`p`),Tk(30,`É possível selecionar e navegar entre as opções da lista tanto através do `),Jc(31,`em`),Tk(32,`mouse`),Zg(),Tk(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Jc(34,`em`),Tk(35,`Enter`),Zg(),Tk(36,` na opção que desejar.`),Zg(),Jc(37,`p`),Tk(38,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Jc(39,`code`),Tk(40,`p-filter-service`),Zg(),Tk(41,`.`),Zg(),Jc(42,`p`),Tk(43,`Em `),Jc(44,`code`),Tk(45,`p-filter-mode`),Zg(),Tk(46,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),Zg(),Jc(47,`p`),Tk(48,`O `),Jc(49,`code`),Tk(50,`po-combo`),Zg(),Tk(51,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Jc(52,`em`),Tk(53,`Esc`),Zg(),Tk(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Jc(55,`em`),Tk(56,`Enter`),Zg(),Tk(57,`.`),Zg(),Jc(58,`p`),Tk(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),Zg(),Jc(60,`h4`),Tk(61,`Tokens customizáveis`),Zg(),Jc(62,`p`),Tk(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(64,`blockquote`)(65,`p`),Tk(66,`Para maiores informações, acesse o guia `),Jc(67,`a`,6),Tk(68,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(69,`.`),Zg()(),Jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Tk(74,`Propriedade`),Zg(),Jc(75,`th`),Tk(76,`Descrição`),Zg(),Jc(77,`th`),Tk(78,`Valor Padrão`),Zg()()(),Jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),Tk(83,`Default Values`),Zg()(),_u(84,`td`)(85,`td`),Zg(),Jc(86,`tr`)(87,`td`)(88,`code`),Tk(89,`--font-family`),Zg()(),Jc(90,`td`),Tk(91,`Família tipográfica usada`),Zg(),Jc(92,`td`)(93,`code`),Tk(94,`var(--font-family-theme)`),Zg()()(),Jc(95,`tr`)(96,`td`)(97,`code`),Tk(98,`--font-size`),Zg()(),Jc(99,`td`),Tk(100,`Tamanho da fonte`),Zg(),Jc(101,`td`)(102,`code`),Tk(103,`var(--font-size-default)`),Zg()()(),Jc(104,`tr`)(105,`td`)(106,`code`),Tk(107,`--text-color`),Zg()(),Jc(108,`td`),Tk(109,`Cor do texto`),Zg(),Jc(110,`td`)(111,`code`),Tk(112,`var(--color-neutral-dark-90)`),Zg()()(),Jc(113,`tr`)(114,`td`)(115,`code`),Tk(116,`--text-color-placeholder`),Zg()(),Jc(117,`td`),Tk(118,`Cor do texto no placeholder`),Zg(),Jc(119,`td`)(120,`code`),Tk(121,`var(--color-neutral-light-30)`),Zg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Tk(125,`--color`),Zg()(),Jc(126,`td`),Tk(127,`Cor principal do Combo`),Zg(),Jc(128,`td`)(129,`code`),Tk(130,`var(--color-neutral-dark-70)`),Zg()()(),Jc(131,`tr`)(132,`td`)(133,`code`),Tk(134,`--background`),Zg()(),Jc(135,`td`),Tk(136,`Cor de background`),Zg(),Jc(137,`td`)(138,`code`),Tk(139,`var(--color-neutral-light-05)`),Zg()()(),Jc(140,`tr`)(141,`td`)(142,`code`),Tk(143,`--border-radius`),Zg()(),Jc(144,`td`),Tk(145,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(146,`td`)(147,`code`),Tk(148,`var(--border-width-lg)`),Zg()()(),Jc(149,`tr`)(150,`td`)(151,`code`),Tk(152,`--min-width`),Zg()(),Jc(153,`td`),Tk(154,`Largura mínima do combo`),Zg(),Jc(155,`td`)(156,`code`),Tk(157,`150px`),Zg()()(),Jc(158,`tr`)(159,`td`)(160,`code`),Tk(161,`--field-container-title-justify`),Zg()(),Jc(162,`td`),Tk(163,`Alinhamento horizontal do título (`),Jc(164,`code`),Tk(165,`justify-content`),Zg(),Tk(166,`)`),Zg(),Jc(167,`td`)(168,`code`),Tk(169,`space-between`),Zg()()(),Jc(170,`tr`)(171,`td`)(172,`code`),Tk(173,`--field-container-title-flex`),Zg()(),Jc(174,`td`),Tk(175,`Flex do título (`),Jc(176,`code`),Tk(177,`flex`),Zg(),Tk(178,`)`),Zg(),Jc(179,`td`)(180,`code`),Tk(181,`1 auto`),Zg()()(),Jc(182,`tr`)(183,`td`)(184,`strong`),Tk(185,`Hover`),Zg()(),_u(186,`td`)(187,`td`),Zg(),Jc(188,`tr`)(189,`td`)(190,`code`),Tk(191,`--color-hover`),Zg()(),Jc(192,`td`),Tk(193,`Cor principal no estado hover`),Zg(),Jc(194,`td`)(195,`code`),Tk(196,`var(--color-action-hover)`),Zg()()(),Jc(197,`tr`)(198,`td`)(199,`code`),Tk(200,`--background-hover`),Zg()(),Jc(201,`td`),Tk(202,`Cor de background no estado hover`),Zg(),Jc(203,`td`)(204,`code`),Tk(205,`var(--color-brand-01-lightest)`),Zg()()(),Jc(206,`tr`)(207,`td`)(208,`strong`),Tk(209,`Focused`),Zg()(),_u(210,`td`)(211,`td`),Zg(),Jc(212,`tr`)(213,`td`)(214,`code`),Tk(215,`--color-focused`),Zg()(),Jc(216,`td`),Tk(217,`Cor principal no estado de focus`),Zg(),Jc(218,`td`)(219,`code`),Tk(220,`var(--color-action-default)`),Zg()()(),Jc(221,`tr`)(222,`td`)(223,`code`),Tk(224,`--outline-color-focused`),Zg()(),Jc(225,`td`),Tk(226,`Cor do outline do estado de focus`),Zg(),Jc(227,`td`)(228,`code`),Tk(229,`var(--color-action-focus)`),Zg()()(),Jc(230,`tr`)(231,`td`)(232,`strong`),Tk(233,`Error`),Zg()(),_u(234,`td`)(235,`td`),Zg(),Jc(236,`tr`)(237,`td`)(238,`code`),Tk(239,`--color-error`),Zg()(),Jc(240,`td`),Tk(241,`Cor principal no estado de erro`),Zg(),Jc(242,`td`)(243,`code`),Tk(244,`var(--color-feedback-negative-base)`),Zg()()(),Jc(245,`tr`)(246,`td`)(247,`strong`),Tk(248,`Disabled`),Zg()(),_u(249,`td`)(250,`td`),Zg(),Jc(251,`tr`)(252,`td`)(253,`code`),Tk(254,`--color-disabled`),Zg()(),Jc(255,`td`),Tk(256,`Cor principal no estado disabled`),Zg(),Jc(257,`td`)(258,`code`),Tk(259,`var(--color-neutral-light-30)`),Zg()()(),Jc(260,`tr`)(261,`td`)(262,`code`),Tk(263,`--background-disabled`),Zg()(),Jc(264,`td`),Tk(265,`Cor de background no estado disabled`),Zg(),Jc(266,`td`)(267,`code`),Tk(268,`var(--color-neutral-light-20)`),Zg()()(),Jc(269,`tr`)(270,`td`)(271,`strong`),Tk(272,`Suggestion`),Zg()(),_u(273,`td`)(274,`td`),Zg(),Jc(275,`tr`)(276,`td`)(277,`code`),Tk(278,`--text-color-suggestion`),Zg()(),Jc(279,`td`),Tk(280,`Cor do texto no estado suggestion`),Zg(),Jc(281,`td`)(282,`code`),Tk(283,`var(--color-neutral-mid-60)`),Zg()()(),Jc(284,`tr`)(285,`td`)(286,`code`),Tk(287,`--background-suggestion`),Zg()(),Jc(288,`td`),Tk(289,`Cor do background no estado suggestion`),Zg(),Jc(290,`td`)(291,`code`),Tk(292,`var(--color-brand-01-lightest)`),Zg()()()()()(),Jc(293,`div`,7)(294,`h4`,8),Tk(295,`Seletor`),Zg(),Jc(296,`pre`,9),Tk(297,`<po-combo
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
`),Zg()(),Jc(298,`h4`,10),Tk(299,`Propriedades`),Zg(),Jc(300,`table`,11)(301,`tr`,12)(302,`th`,13),Tk(303,`Nome`),Zg(),Jc(304,`th`,13),Tk(305,`Tipo`),Zg(),Jc(306,`th`,13),Tk(307,`Padrão`),Zg(),Jc(308,`th`,13),Tk(309,`Descrição`),Zg()(),Jc(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),Tk(314,` (p-additional-help)`),_u(315,`br`),Zg()(),Jc(316,`div`,18),Tk(317,`Deprecated`),Zg()(),Jc(318,`td`,19)(319,`code`,20),Tk(320,`EventEmitter`),Zg()(),Jc(321,`td`,21),Tk(322,`-`),Zg(),Jc(323,`td`,22)(324,`em`)(325,`strong`),Tk(326,`(opcional)`),Zg()(),Jc(327,`p`),Tk(328,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(329,`blockquote`)(330,`p`),Tk(331,`Essa propriedade está `),Jc(332,`strong`),Tk(333,`depreciada`),Zg(),Tk(334,` e será removida na versão `),Jc(335,`code`),Tk(336,`23.x.x`),Zg(),Tk(337,`. Recomendamos utilizar a propriedade `),Jc(338,`code`),Tk(339,`p-helper`),Zg(),Tk(340,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(341,`tr`,14)(342,`td`,15)(343,`div`,23)(344,`span`,24),Tk(345,` p-additional-help-tooltip`),_u(346,`br`),Zg()(),Jc(347,`div`,18),Tk(348,`Deprecated`),Zg()(),Jc(349,`td`,19)(350,`code`,25),Tk(351,`string`),Zg()(),Jc(352,`td`,21),Tk(353,`-`),Zg(),Jc(354,`td`,22)(355,`em`)(356,`strong`),Tk(357,`(opcional)`),Zg()(),Jc(358,`p`),Tk(359,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(360,`code`),Tk(361,`po-helper`),Zg(),Tk(362,`.
`),Jc(363,`strong`),Tk(364,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(365,`blockquote`)(366,`p`),Tk(367,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(368,`blockquote`)(369,`p`),Tk(370,`Essa propriedade está `),Jc(371,`strong`),Tk(372,`depreciada`),Zg(),Tk(373,` e será removida na versão `),Jc(374,`code`),Tk(375,`23.x.x`),Zg(),Tk(376,`. Recomendamos utilizar a propriedade `),Jc(377,`code`),Tk(378,`p-helper`),Zg(),Tk(379,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),Tk(384,` p-append-in-body`),_u(385,`br`),Zg()()(),Jc(386,`td`,19)(387,`code`,26),Tk(388,`boolean`),Zg()(),Jc(389,`td`,21)(390,`p`)(391,`code`),Tk(392,`false`),Zg()()(),Jc(393,`td`,22)(394,`em`)(395,`strong`),Tk(396,`(opcional)`),Zg()(),Jc(397,`p`),Tk(398,`Define que o `),Jc(399,`code`),Tk(400,`listbox`),Zg(),Tk(401,` e/ou popover (`),Jc(402,`code`),Tk(403,`p-helper`),Zg(),Tk(404,` e/ou `),Jc(405,`code`),Tk(406,`p-error-limit`),Zg(),Tk(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Zg(),Jc(408,`blockquote`)(409,`p`),Tk(410,`Quando utilizado com `),Jc(411,`code`),Tk(412,`p-helper`),Zg(),Tk(413,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(414,`tr`,14)(415,`td`,15)(416,`div`,23)(417,`span`,24),Tk(418,` p-auto-focus`),_u(419,`br`),Zg()()(),Jc(420,`td`,19)(421,`code`,26),Tk(422,`boolean`),Zg()(),Jc(423,`td`,21)(424,`p`)(425,`code`),Tk(426,`false`),Zg()()(),Jc(427,`td`,22)(428,`em`)(429,`strong`),Tk(430,`(opcional)`),Zg()(),Jc(431,`p`),Tk(432,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(433,`blockquote`)(434,`p`),Tk(435,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(436,`tr`,14)(437,`td`,15)(438,`div`,16)(439,`span`,17),Tk(440,` (p-blur)`),_u(441,`br`),Zg()()(),Jc(442,`td`,19)(443,`code`,20),Tk(444,`EventEmitter`),Zg()(),Jc(445,`td`,21),Tk(446,`-`),Zg(),Jc(447,`td`,22)(448,`em`)(449,`strong`),Tk(450,`(opcional)`),Zg()(),Jc(451,`p`),Tk(452,`Evento disparado ao sair do campo.`),Zg()()(),Jc(453,`tr`,14)(454,`td`,15)(455,`div`,23)(456,`span`,24),Tk(457,` p-cache`),_u(458,`br`),Zg()()(),Jc(459,`td`,19)(460,`code`,26),Tk(461,`boolean`),Zg()(),Jc(462,`td`,21)(463,`p`)(464,`code`),Tk(465,`true`),Zg()()(),Jc(466,`td`,22)(467,`em`)(468,`strong`),Tk(469,`(opcional)`),Zg()(),Jc(470,`p`),Tk(471,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),Zg(),Jc(472,`blockquote`)(473,`p`),Tk(474,`Caso o valor seja `),Jc(475,`code`),Tk(476,`false`),Zg(),Tk(477,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),Zg()()()(),Jc(478,`tr`,14)(479,`td`,15)(480,`div`,16)(481,`span`,17),Tk(482,` (p-change)`),_u(483,`br`),Zg()()(),Jc(484,`td`,19)(485,`code`,20),Tk(486,`EventEmitter`),Zg()(),Jc(487,`td`,21),Tk(488,`-`),Zg(),Jc(489,`td`,22)(490,`em`)(491,`strong`),Tk(492,`(opcional)`),Zg()(),Jc(493,`p`),Tk(494,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),Zg(),Jc(495,`blockquote`)(496,`p`),Tk(497,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Jc(498,`code`),Tk(499,`p-emit-object-value`),Zg(),Tk(500,`.`),Zg()()()(),Jc(501,`tr`,14)(502,`td`,15)(503,`div`,16)(504,`span`,17),Tk(505,` (p-change-model)`),_u(506,`br`),Zg()()(),Jc(507,`td`,19)(508,`code`,20),Tk(509,`EventEmitter`),Zg()(),Jc(510,`td`,21),Tk(511,`-`),Zg(),Jc(512,`td`,22)(513,`em`)(514,`strong`),Tk(515,`(opcional)`),Zg()(),Jc(516,`p`),Tk(517,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(518,`code`),Tk(519,`setValue`),Zg(),Tk(520,`, `),Jc(521,`code`),Tk(522,`patchValue`),Zg(),Tk(523,`, carregamento assíncrono).`),Zg(),Jc(524,`p`),Tk(525,`Diferentemente do `),Jc(526,`code`),Tk(527,`p-change`),Zg(),Tk(528,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(529,`code`),Tk(530,`p-change-model`),Zg(),Tk(531,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(532,`p`),Tk(533,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(534,`tr`,14)(535,`td`,15)(536,`div`,23)(537,`span`,24),Tk(538,` p-change-on-enter`),_u(539,`br`),Zg()()(),Jc(540,`td`,19)(541,`code`,26),Tk(542,`boolean`),Zg()(),Jc(543,`td`,21)(544,`p`)(545,`code`),Tk(546,`false`),Zg()()(),Jc(547,`td`,22)(548,`em`)(549,`strong`),Tk(550,`(opcional)`),Zg()(),Jc(551,`p`),Tk(552,`Indica que o evento `),Jc(553,`code`),Tk(554,`p-change`),Zg(),Tk(555,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),Zg()()(),Jc(556,`tr`,14)(557,`td`,15)(558,`div`,23)(559,`span`,24),Tk(560,` p-clean`),_u(561,`br`),Zg()()(),Jc(562,`td`,19)(563,`code`,26),Tk(564,`boolean`),Zg()(),Jc(565,`td`,21),Tk(566,`-`),Zg(),Jc(567,`td`,22)(568,`em`)(569,`strong`),Tk(570,`(opcional)`),Zg()(),Jc(571,`p`),Tk(572,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Zg()()(),Jc(573,`tr`,14)(574,`td`,15)(575,`div`,23)(576,`span`,24),Tk(577,` p-compact-label`),_u(578,`br`),Zg()()(),Jc(579,`td`,19)(580,`code`,26),Tk(581,`boolean`),Zg()(),Jc(582,`td`,21)(583,`p`)(584,`code`),Tk(585,`false`),Zg()()(),Jc(586,`td`,22)(587,`em`)(588,`strong`),Tk(589,`(opcional)`),Zg()(),Jc(590,`p`),Tk(591,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(592,`p`),Tk(593,`Quando habilitado (`),Jc(594,`code`),Tk(595,`true`),Zg(),Tk(596,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(597,`ul`)(598,`li`)(599,`code`),Tk(600,`po-label`),Zg()(),Jc(601,`li`)(602,`code`),Tk(603,`p-requirement (showRequired)`),Zg()(),Jc(604,`li`)(605,`code`),Tk(606,`po-helper`),Zg()()(),Jc(607,`p`),Tk(608,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(609,`p`),Tk(610,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(611,`ul`)(612,`li`)(613,`code`),Tk(614,`--field-container-title-justify`),Zg()(),Jc(615,`li`)(616,`code`),Tk(617,`--field-container-title-flex`),Zg()()(),Jc(618,`p`),Tk(619,`Exemplo:`),Zg(),Jc(620,`pre`)(621,`code`),Tk(622,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(623,`p`),Tk(624,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),Tk(629,` p-debounce-time`),_u(630,`br`),Zg()()(),Jc(631,`td`,19)(632,`code`,27),Tk(633,`number`),Zg()(),Jc(634,`td`,21)(635,`p`)(636,`code`),Tk(637,`400`),Zg()()(),Jc(638,`td`,22)(639,`em`)(640,`strong`),Tk(641,`(opcional)`),Zg()(),Jc(642,`p`),Tk(643,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Jc(644,`code`),Tk(645,`p-filter-service`),Zg(),Tk(646,`).`),Zg()()(),Jc(647,`tr`,14)(648,`td`,15)(649,`div`,23)(650,`span`,24),Tk(651,` p-disabled`),_u(652,`br`),Zg()()(),Jc(653,`td`,19)(654,`code`,26),Tk(655,`boolean`),Zg()(),Jc(656,`td`,21)(657,`p`)(658,`code`),Tk(659,`false`),Zg()()(),Jc(660,`td`,22)(661,`em`)(662,`strong`),Tk(663,`(opcional)`),Zg()(),Jc(664,`p`),Tk(665,`Indica que o campo será desabilitado.`),Zg()()(),Jc(666,`tr`,14)(667,`td`,15)(668,`div`,23)(669,`span`,24),Tk(670,` p-disabled-init-filter`),_u(671,`br`),Zg()()(),Jc(672,`td`,19)(673,`code`,26),Tk(674,`boolean`),Zg()(),Jc(675,`td`,21)(676,`p`)(677,`code`),Tk(678,`false`),Zg()()(),Jc(679,`td`,22)(680,`em`)(681,`strong`),Tk(682,`(opcional)`),Zg()(),Jc(683,`p`),Tk(684,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),Zg()()(),Jc(685,`tr`,14)(686,`td`,15)(687,`div`,23)(688,`span`,24),Tk(689,` p-disabled-tab-filter`),_u(690,`br`),Zg()()(),Jc(691,`td`,19)(692,`code`,26),Tk(693,`boolean`),Zg()(),Jc(694,`td`,21)(695,`p`)(696,`code`),Tk(697,`false`),Zg()()(),Jc(698,`td`,22)(699,`em`)(700,`strong`),Tk(701,`(opcional)`),Zg()(),Jc(702,`p`),Tk(703,`Se verdadeiro, desabilitará a busca de um item via TAB.`),Zg()()(),Jc(704,`tr`,14)(705,`td`,15)(706,`div`,23)(707,`span`,24),Tk(708,` p-emit-object-value`),_u(709,`br`),Zg()()(),Jc(710,`td`,19)(711,`code`,26),Tk(712,`boolean`),Zg()(),Jc(713,`td`,21)(714,`p`)(715,`code`),Tk(716,`false`),Zg()()(),Jc(717,`td`,22)(718,`em`)(719,`strong`),Tk(720,`(opcional)`),Zg()(),Jc(721,`p`),Tk(722,`Se verdadeiro, o evento `),Jc(723,`code`),Tk(724,`p-change`),Zg(),Tk(725,` receberá como argumento o `),Jc(726,`code`),Tk(727,`PoComboOption`),Zg(),Tk(728,` referente à opção selecionada.`),Zg()()(),Jc(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),Tk(733,` p-error-limit`),_u(734,`br`),Zg()()(),Jc(735,`td`,19)(736,`code`,26),Tk(737,`boolean`),Zg()(),Jc(738,`td`,21)(739,`p`)(740,`code`),Tk(741,`false`),Zg()()(),Jc(742,`td`,22)(743,`em`)(744,`strong`),Tk(745,`(opcional)`),Zg()(),Jc(746,`p`),Tk(747,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(748,`blockquote`)(749,`p`),Tk(750,`Caso essa propriedade seja definida como `),Jc(751,`code`),Tk(752,`true`),Zg(),Tk(753,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(754,`tr`,14)(755,`td`,15)(756,`div`,23)(757,`span`,24),Tk(758,` p-field-error-message`),_u(759,`br`),Zg()()(),Jc(760,`td`,19)(761,`code`,25),Tk(762,`string`),Zg()(),Jc(763,`td`,21),Tk(764,`-`),Zg(),Jc(765,`td`,22)(766,`em`)(767,`strong`),Tk(768,`(opcional)`),Zg()(),Jc(769,`p`),Tk(770,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(771,`blockquote`)(772,`p`),Tk(773,`Necessário que a propriedade `),Jc(774,`code`),Tk(775,`p-required`),Zg(),Tk(776,` esteja habilitada.`),Zg()()()(),Jc(777,`tr`,14)(778,`td`,15)(779,`div`,23)(780,`span`,24),Tk(781,` p-field-label`),_u(782,`br`),Zg()()(),Jc(783,`td`,19)(784,`code`,25),Tk(785,`string`),Zg()(),Jc(786,`td`,21)(787,`p`)(788,`code`),Tk(789,`label`),Zg()()(),Jc(790,`td`,22)(791,`em`)(792,`strong`),Tk(793,`(opcional)`),Zg()(),Jc(794,`p`),Tk(795,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(796,`code`),Tk(797,`p-options`),Zg(),Tk(798,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),Zg(),Jc(799,`p`),Tk(800,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Zg()()(),Jc(801,`tr`,14)(802,`td`,15)(803,`div`,23)(804,`span`,24),Tk(805,` p-field-value`),_u(806,`br`),Zg()()(),Jc(807,`td`,19)(808,`code`,25),Tk(809,`string`),Zg()(),Jc(810,`td`,21)(811,`p`)(812,`code`),Tk(813,`value`),Zg()()(),Jc(814,`td`,22)(815,`em`)(816,`strong`),Tk(817,`(opcional)`),Zg()(),Jc(818,`p`),Tk(819,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Jc(820,`code`),Tk(821,`p-options`),Zg(),Tk(822,`), esta propriedade será responsável pelo valor de cada item da lista.`),Zg(),Jc(823,`p`),Tk(824,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),Zg()()(),Jc(825,`tr`,14)(826,`td`,15)(827,`div`,23)(828,`span`,24),Tk(829,` p-filter-minlength`),_u(830,`br`),Zg()()(),Jc(831,`td`,19)(832,`code`,27),Tk(833,`number`),Zg()(),Jc(834,`td`,21)(835,`p`)(836,`code`),Tk(837,`0`),Zg()()(),Jc(838,`td`,22)(839,`em`)(840,`strong`),Tk(841,`(opcional)`),Zg()(),Jc(842,`p`),Tk(843,`Valor mínimo de caracteres para realizar o filtro no serviço.`),Zg()()(),Jc(844,`tr`,14)(845,`td`,15)(846,`div`,23)(847,`span`,24),Tk(848,` p-filter-mode`),_u(849,`br`),Zg()()(),Jc(850,`td`,19)(851,`code`,28),Tk(852,`PoComboFilterMode`),Zg()(),Jc(853,`td`,21)(854,`p`)(855,`code`),Tk(856,`startsWith`),Zg()()(),Jc(857,`td`,22)(858,`em`)(859,`strong`),Tk(860,`(opcional)`),Zg()(),Jc(861,`p`),Tk(862,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Jc(863,`code`),Tk(864,`startsWith`),Zg(),Tk(865,`, `),Jc(866,`code`),Tk(867,`contains`),Zg(),Tk(868,` ou `),Jc(869,`code`),Tk(870,`endsWith`),Zg(),Tk(871,`.`),Zg(),Jc(872,`blockquote`)(873,`p`),Tk(874,`Quando utilizar a propriedade `),Jc(875,`code`),Tk(876,`p-filter-service`),Zg(),Tk(877,` esta propriedade será ignorada.`),Zg()()()(),Jc(878,`tr`,14)(879,`td`,15)(880,`div`,23)(881,`span`,24),Tk(882,` p-filter-params`),_u(883,`br`),Zg()()(),Jc(884,`td`,19)(885,`code`,29),Tk(886,`any`),Zg()(),Jc(887,`td`,21),Tk(888,`-`),Zg(),Jc(889,`td`,22)(890,`em`)(891,`strong`),Tk(892,`(opcional)`),Zg()(),Jc(893,`p`),Tk(894,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Jc(895,`em`),Tk(896,`PoComboFilter`),Zg(),Tk(897,`.`),Zg(),Jc(898,`blockquote`)(899,`p`),Tk(900,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),Zg()()()(),Jc(901,`tr`,14)(902,`td`,15)(903,`div`,23)(904,`span`,24),Tk(905,` p-filter-service`),_u(906,`br`),Zg()()(),Jc(907,`td`,19)(908,`code`,30),Tk(909,`PoComboFilter `),Zg(),Jc(910,`code`,25),Tk(911,` string`),Zg()(),Jc(912,`td`,21),Tk(913,`-`),Zg(),Jc(914,`td`,22)(915,`em`)(916,`strong`),Tk(917,`(opcional)`),Zg()(),Jc(918,`p`),Tk(919,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),Zg(),Jc(920,`p`),Tk(921,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Jc(922,`code`),Tk(923,`p-field-label`),Zg(),Tk(924,` e `),Jc(925,`code`),Tk(926,`p-field-value`),Zg(),Tk(927,` para a construção da lista de itens.`),Zg(),Jc(928,`p`),Tk(929,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),Zg(),Jc(930,`pre`)(931,`code`),Tk(932,`url + ?filter=Peter
`),Zg()(),Jc(933,`p`),Tk(934,`Se for definida a propriedade `),Jc(935,`code`),Tk(936,`p-filter-params`),Zg(),Tk(937,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Jc(938,`code`),Tk(939,`{ age: 23 }`),Zg(),Tk(940,` a URL ficaria:`),Zg(),Jc(941,`pre`)(942,`code`),Tk(943,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Zg()()()(),Jc(944,`tr`,14)(945,`td`,15)(946,`div`,23)(947,`span`,24),Tk(948,` p-help`),_u(949,`br`),Zg()()(),Jc(950,`td`,19)(951,`code`,25),Tk(952,`string`),Zg()(),Jc(953,`td`,21),Tk(954,`-`),Zg(),Jc(955,`td`,22)(956,`em`)(957,`strong`),Tk(958,`(opcional)`),Zg()(),Jc(959,`p`),Tk(960,`Texto de apoio para o campo.`),Zg()()(),Jc(961,`tr`,14)(962,`td`,15)(963,`div`,23)(964,`span`,24),Tk(965,` p-icon`),_u(966,`br`),Zg()()(),Jc(967,`td`,19)(968,`code`,25),Tk(969,`string `),Zg(),Jc(970,`code`,31),Tk(971,` TemplateRef<void>`),Zg()(),Jc(972,`td`,21),Tk(973,`-`),Zg(),Jc(974,`td`,22)(975,`em`)(976,`strong`),Tk(977,`(opcional)`),Zg()(),Jc(978,`p`),Tk(979,`Define o ícone que será exibido no início do campo.`),Zg(),Jc(980,`p`),Tk(981,`É possível usar qualquer um dos ícones da `),Jc(982,`a`,32),Tk(983,`Biblioteca de ícones`),Zg(),Tk(984,`. conforme exemplo abaixo:`),Zg(),Jc(985,`pre`)(986,`code`),Tk(987,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),Zg()(),Jc(988,`p`),Tk(989,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(990,`em`),Tk(991,`Font Awesome`),Zg(),Tk(992,`, da seguinte forma:`),Zg(),Jc(993,`pre`)(994,`code`),Tk(995,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),Zg()(),Jc(996,`p`),Tk(997,`Outra opção seria a customização do ícone através do `),Jc(998,`code`),Tk(999,`TemplateRef`),Zg(),Tk(1e3,`, conforme exemplo abaixo:`),Zg(),Jc(1001,`pre`)(1002,`code`),Tk(1003,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(1004,`blockquote`)(1005,`p`),Tk(1006,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(1007,`code`),Tk(1008,`font-size: inherit`),Zg(),Tk(1009,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(1010,`tr`,14)(1011,`td`,15)(1012,`div`,23)(1013,`span`,24),Tk(1014,` p-infinite-scroll`),_u(1015,`br`),Zg()()(),Jc(1016,`td`,19)(1017,`code`,26),Tk(1018,`boolean`),Zg()(),Jc(1019,`td`,21)(1020,`p`)(1021,`code`),Tk(1022,`false`),Zg()()(),Jc(1023,`td`,22)(1024,`em`)(1025,`strong`),Tk(1026,`(opcional)`),Zg()(),Jc(1027,`p`),Tk(1028,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Zg()()(),Jc(1029,`tr`,14)(1030,`td`,15)(1031,`div`,23)(1032,`span`,24),Tk(1033,` p-infinite-scroll-distance`),_u(1034,`br`),Zg()()(),Jc(1035,`td`,19)(1036,`code`,27),Tk(1037,`number`),Zg()(),Jc(1038,`td`,21),Tk(1039,`-`),Zg(),Jc(1040,`td`,22)(1041,`em`)(1042,`strong`),Tk(1043,`(opcional)`),Zg()(),Jc(1044,`p`),Tk(1045,`Define o percentual necessário para disparar o evento `),Jc(1046,`code`),Tk(1047,`show-more`),Zg(),Tk(1048,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),Zg(),Jc(1049,`p`)(1050,`strong`),Tk(1051,`Exemplos`),Zg()(),Jc(1052,`ul`)(1053,`li`),Tk(1054,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Jc(1055,`code`),Tk(1056,`show-more`),Zg(),Tk(1057,` será disparado.`),Zg()()()(),Jc(1058,`tr`,14)(1059,`td`,15)(1060,`div`,16)(1061,`span`,17),Tk(1062,` (p-input-change)`),_u(1063,`br`),Zg()()(),Jc(1064,`td`,19)(1065,`code`,20),Tk(1066,`EventEmitter`),Zg()(),Jc(1067,`td`,21),Tk(1068,`-`),Zg(),Jc(1069,`td`,22)(1070,`em`)(1071,`strong`),Tk(1072,`(opcional)`),Zg()(),Jc(1073,`p`),Tk(1074,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),Zg()()(),Jc(1075,`tr`,14)(1076,`td`,15)(1077,`div`,16)(1078,`span`,17),Tk(1079,` (p-keydown)`),_u(1080,`br`),Zg()()(),Jc(1081,`td`,19)(1082,`code`,20),Tk(1083,`EventEmitter`),Zg()(),Jc(1084,`td`,21),Tk(1085,`-`),Zg(),Jc(1086,`td`,22)(1087,`em`)(1088,`strong`),Tk(1089,`(opcional)`),Zg()(),Jc(1090,`p`),Tk(1091,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(1092,`code`),Tk(1093,`KeyboardEvent`),Zg(),Tk(1094,` com informações sobre a tecla.`),Zg()()(),Jc(1095,`tr`,14)(1096,`td`,15)(1097,`div`,23)(1098,`span`,24),Tk(1099,` p-label`),_u(1100,`br`),Zg()()(),Jc(1101,`td`,19)(1102,`code`,25),Tk(1103,`string`),Zg()(),Jc(1104,`td`,21),Tk(1105,`-`),Zg(),Jc(1106,`td`,22)(1107,`em`)(1108,`strong`),Tk(1109,`(opcional)`),Zg()(),Jc(1110,`p`),Tk(1111,`Label no componente.`),Zg()()(),Jc(1112,`tr`,14)(1113,`td`,15)(1114,`div`,23)(1115,`span`,24),Tk(1116,` p-label-text-wrap`),_u(1117,`br`),Zg()()(),Jc(1118,`td`,19)(1119,`code`,26),Tk(1120,`boolean`),Zg()(),Jc(1121,`td`,21)(1122,`p`)(1123,`code`),Tk(1124,`false`),Zg()()(),Jc(1125,`td`,22)(1126,`em`)(1127,`strong`),Tk(1128,`(opcional)`),Zg()(),Jc(1129,`p`),Tk(1130,`Habilita a quebra automática do texto da propriedade `),Jc(1131,`code`),Tk(1132,`p-label`),Zg(),Tk(1133,`. Quando `),Jc(1134,`code`),Tk(1135,`p-label-text-wrap`),Zg(),Tk(1136,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(1137,`tr`,14)(1138,`td`,15)(1139,`div`,23)(1140,`span`,24),Tk(1141,` p-listbox-control-position`),_u(1142,`br`),Zg()()(),Jc(1143,`td`,19)(1144,`code`,33),Tk(1145,`'top' `),Zg(),Jc(1146,`code`,34),Tk(1147,` 'bottom'`),Zg()(),Jc(1148,`td`,21)(1149,`p`)(1150,`code`),Tk(1151,`bottom`),Zg()()(),Jc(1152,`td`,22)(1153,`em`)(1154,`strong`),Tk(1155,`(opcional)`),Zg()(),Jc(1156,`p`),Tk(1157,`Define a direção preferida para exibição do `),Jc(1158,`code`),Tk(1159,`listbox`),Zg(),Tk(1160,` em relação ao campo (`),Jc(1161,`code`),Tk(1162,`top`),Zg(),Tk(1163,` ou `),Jc(1164,`code`),Tk(1165,`bottom`),Zg(),Tk(1166,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Zg()()(),Jc(1167,`tr`,14)(1168,`td`,15)(1169,`div`,23)(1170,`span`,24),Tk(1171,` p-literals`),_u(1172,`br`),Zg()()(),Jc(1173,`td`,19)(1174,`code`,35),Tk(1175,`PoComboLiterals`),Zg()(),Jc(1176,`td`,21),Tk(1177,`-`),Zg(),Jc(1178,`td`,22)(1179,`em`)(1180,`strong`),Tk(1181,`(opcional)`),Zg()(),Jc(1182,`p`),Tk(1183,`Objeto com as literais usadas no `),Jc(1184,`code`),Tk(1185,`po-combo`),Zg(),Tk(1186,`.`),Zg(),Jc(1187,`p`),Tk(1188,`Para utilizar basta passar a literal que deseja customizar:`),Zg(),Jc(1189,`pre`)(1190,`code`),Tk(1191,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),Zg()(),Jc(1192,`p`),Tk(1193,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Zg(),Jc(1194,`pre`)(1195,`code`),Tk(1196,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),Zg()(),Jc(1197,`blockquote`)(1198,`p`),Tk(1199,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(1200,`a`,36)(1201,`code`),Tk(1202,`PoI18nService`),Zg()(),Tk(1203,` ou do browser.`),Zg()()()(),Jc(1204,`tr`,14)(1205,`td`,15)(1206,`div`,23)(1207,`span`,24),Tk(1208,` p-loading`),_u(1209,`br`),Zg()()(),Jc(1210,`td`,19)(1211,`code`,26),Tk(1212,`boolean`),Zg()(),Jc(1213,`td`,21)(1214,`p`)(1215,`code`),Tk(1216,`false`),Zg()()(),Jc(1217,`td`,22)(1218,`em`)(1219,`strong`),Tk(1220,`(opcional)`),Zg()(),Jc(1221,`p`),Tk(1222,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(1223,`tr`,14)(1224,`td`,15)(1225,`div`,23)(1226,`span`,24),Tk(1227,` name`),_u(1228,`br`),Zg()()(),Jc(1229,`td`,19)(1230,`code`,25),Tk(1231,`string`),Zg()(),Jc(1232,`td`,21),Tk(1233,`-`),Zg(),Jc(1234,`td`,22)(1235,`p`),Tk(1236,`Nome do componente.`),Zg()()(),Jc(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),Tk(1241,` (ngModelChange)`),_u(1242,`br`),Zg()()(),Jc(1243,`td`,19)(1244,`code`,20),Tk(1245,`EventEmitter`),Zg()(),Jc(1246,`td`,21),Tk(1247,`-`),Zg(),Jc(1248,`td`,22)(1249,`em`)(1250,`strong`),Tk(1251,`(opcional)`),Zg()(),Jc(1252,`p`),Tk(1253,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),Zg(),Jc(1254,`p`),Tk(1255,`Na versão 12.2.0 do Angular a verificação `),Jc(1256,`code`),Tk(1257,`strictTemplates`),Zg(),Tk(1258,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Zg(),Jc(1259,`pre`)(1260,`code`),Tk(1261,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),Zg()()()(),Jc(1262,`tr`,14)(1263,`td`,15)(1264,`div`,23)(1265,`span`,24),Tk(1266,` p-optional`),_u(1267,`br`),Zg()()(),Jc(1268,`td`,19)(1269,`code`,26),Tk(1270,`boolean`),Zg()(),Jc(1271,`td`,21)(1272,`p`)(1273,`code`),Tk(1274,`false`),Zg()()(),Jc(1275,`td`,22)(1276,`em`)(1277,`strong`),Tk(1278,`(opcional)`),Zg()(),Jc(1279,`p`),Tk(1280,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(1281,`blockquote`)(1282,`p`),Tk(1283,`Não será exibida a indicação se:`),Zg()(),Jc(1284,`ul`)(1285,`li`),Tk(1286,`O campo conter `),Jc(1287,`code`),Tk(1288,`p-required`),Zg(),Tk(1289,`;`),Zg(),Jc(1290,`li`),Tk(1291,`Não possuir `),Jc(1292,`code`),Tk(1293,`p-help`),Zg(),Tk(1294,` e/ou `),Jc(1295,`code`),Tk(1296,`p-label`),Zg(),Tk(1297,`.`),Zg()()()(),Jc(1298,`tr`,14)(1299,`td`,15)(1300,`div`,23)(1301,`span`,24),Tk(1302,` p-options`),_u(1303,`br`),Zg()()(),Jc(1304,`td`,19)(1305,`code`,37),Tk(1306,`Array<PoComboOption `),Zg(),Jc(1307,`code`,38),Tk(1308,` PoComboOptionGroup `),Zg(),Jc(1309,`code`,39),Tk(1310,` any>`),Zg()(),Jc(1311,`td`,21),Tk(1312,`-`),Zg(),Jc(1313,`td`,22)(1314,`p`),Tk(1315,`Nesta propriedade define a lista de opções do `),Jc(1316,`code`),Tk(1317,`po-combo`),Zg(),Tk(1318,`.`),Zg(),Jc(1319,`blockquote`)(1320,`p`),Tk(1321,`A lista pode ser definida utilizando um array com o valor representando o `),Jc(1322,`code`),Tk(1323,`value`),Zg(),Tk(1324,` e o `),Jc(1325,`code`),Tk(1326,`label`),Zg(),Tk(1327,` das seguintes formas:`),Zg()(),Jc(1328,`pre`)(1329,`code`),Tk(1330,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),Zg()(),Jc(1331,`pre`)(1332,`code`),Tk(1333,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),Zg()(),Jc(1334,`ul`)(1335,`li`),Tk(1336,`Aconselha-se utilizar valores distintos no `),Jc(1337,`code`),Tk(1338,`label`),Zg(),Tk(1339,` e `),Jc(1340,`code`),Tk(1341,`value`),Zg(),Tk(1342,` dos itens.`),Zg()()()(),Jc(1343,`tr`,14)(1344,`td`,15)(1345,`div`,23)(1346,`span`,24),Tk(1347,` p-placeholder`),_u(1348,`br`),Zg()()(),Jc(1349,`td`,19)(1350,`code`,25),Tk(1351,`string`),Zg()(),Jc(1352,`td`,21),Tk(1353,`-`),Zg(),Jc(1354,`td`,22)(1355,`p`),Tk(1356,`Mensagem apresentada enquanto o campo estiver vazio.`),Zg()()(),Jc(1357,`tr`,14)(1358,`td`,15)(1359,`div`,23)(1360,`span`,24),Tk(1361,` p-helper`),_u(1362,`br`),Zg()()(),Jc(1363,`td`,19)(1364,`code`,40),Tk(1365,`PoHelperOptions `),Zg(),Jc(1366,`code`,25),Tk(1367,` string`),Zg()(),Jc(1368,`td`,21),Tk(1369,`-`),Zg(),Jc(1370,`td`,22)(1371,`em`)(1372,`strong`),Tk(1373,`(opcional)`),Zg()(),Jc(1374,`p`),Tk(1375,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1376,`code`),Tk(1377,`p-label`),Zg(),Tk(1378,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1379,`code`),Tk(1380,`p-label`),Zg(),Tk(1381,`.`),Zg(),Jc(1382,`blockquote`)(1383,`p`),Tk(1384,`Para mais informações acesse: `),Jc(1385,`a`,41),Tk(1386,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1387,`.`),Zg()(),Jc(1388,`blockquote`)(1389,`p`),Tk(1390,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1391,`code`),Tk(1392,`p-additional-help-tooltip`),Zg(),Tk(1393,` e `),Jc(1394,`code`),Tk(1395,`p-additional-help`),Zg(),Tk(1396,`) será ignorado.`),Zg()()()(),Jc(1397,`tr`,14)(1398,`td`,15)(1399,`div`,23)(1400,`span`,24),Tk(1401,` p-remove-initial-filter`),_u(1402,`br`),Zg()()(),Jc(1403,`td`,19)(1404,`code`,26),Tk(1405,`boolean`),Zg()(),Jc(1406,`td`,21)(1407,`p`)(1408,`code`),Tk(1409,`false`),Zg()()(),Jc(1410,`td`,22)(1411,`em`)(1412,`strong`),Tk(1413,`(opcional)`),Zg()(),Jc(1414,`p`),Tk(1415,`Define se o filtro inicial será removido no primeiro clique do campo.`),Zg(),Jc(1416,`p`),Tk(1417,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),Zg()()(),Jc(1418,`tr`,14)(1419,`td`,15)(1420,`div`,23)(1421,`span`,24),Tk(1422,` p-required`),_u(1423,`br`),Zg()()(),Jc(1424,`td`,19)(1425,`code`,26),Tk(1426,`boolean`),Zg()(),Jc(1427,`td`,21)(1428,`p`)(1429,`code`),Tk(1430,`false`),Zg()()(),Jc(1431,`td`,22)(1432,`em`)(1433,`strong`),Tk(1434,`(opcional)`),Zg()(),Jc(1435,`p`),Tk(1436,`Define que o campo será obrigatório.`),Zg()()(),Jc(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),Tk(1441,` p-show-required`),_u(1442,`br`),Zg()()(),Jc(1443,`td`,19)(1444,`code`,26),Tk(1445,`boolean`),Zg()(),Jc(1446,`td`,21),Tk(1447,`-`),Zg(),Jc(1448,`td`,22)(1449,`p`),Tk(1450,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1451,`blockquote`)(1452,`p`),Tk(1453,`Não será exibida a indicação se:`),Zg()(),Jc(1454,`ul`)(1455,`li`),Tk(1456,`Não possuir `),Jc(1457,`code`),Tk(1458,`p-help`),Zg(),Tk(1459,` e/ou `),Jc(1460,`code`),Tk(1461,`p-label`),Zg(),Tk(1462,`.`),Zg()()()(),Jc(1463,`tr`,14)(1464,`td`,15)(1465,`div`,23)(1466,`span`,24),Tk(1467,` p-size`),_u(1468,`br`),Zg()()(),Jc(1469,`td`,19)(1470,`code`,25),Tk(1471,`string`),Zg()(),Jc(1472,`td`,21)(1473,`p`)(1474,`code`),Tk(1475,`medium`),Zg()()(),Jc(1476,`td`,22)(1477,`em`)(1478,`strong`),Tk(1479,`(opcional)`),Zg()(),Jc(1480,`p`),Tk(1481,`Define o tamanho do componente:`),Zg(),Jc(1482,`ul`)(1483,`li`)(1484,`code`),Tk(1485,`small`),Zg(),Tk(1486,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1487,`li`)(1488,`code`),Tk(1489,`medium`),Zg(),Tk(1490,`: altura do input como 44px.`),Zg()(),Jc(1491,`blockquote`)(1492,`p`),Tk(1493,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1494,`code`),Tk(1495,`medium`),Zg(),Tk(1496,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1497,`a`,42),Tk(1498,`po-theme`),Zg(),Tk(1499,`.`),Zg()()()(),Jc(1500,`tr`,14)(1501,`td`,15)(1502,`div`,23)(1503,`span`,24),Tk(1504,` p-sort`),_u(1505,`br`),Zg()()(),Jc(1506,`td`,19)(1507,`code`,26),Tk(1508,`boolean`),Zg()(),Jc(1509,`td`,21),Tk(1510,`-`),Zg(),Jc(1511,`td`,22)(1512,`p`),Tk(1513,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Zg()()()(),Jc(1514,`h3`,10),Tk(1515,`Métodos`),Zg(),Jc(1516,`table`,43)(1517,`tr`,14)(1518,`th`,44)(1519,`div`,23)(1520,`h4`)(1521,`span`,24),Tk(1522,` focus `),Zg()()()()(),Jc(1523,`tr`,22)(1524,`td`,22)(1525,`p`),Tk(1526,`Função que atribui foco ao componente.`),Zg(),Jc(1527,`p`),Tk(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1529,`pre`)(1530,`code`),Tk(1531,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),Zg()()()()(),_u(1532,`br`),Jc(1533,`table`,43)(1534,`tr`,14)(1535,`th`,44)(1536,`div`,23)(1537,`h4`)(1538,`span`,24),Tk(1539,` showAdditionalHelp `),Zg()()()()(),Jc(1540,`tr`,22)(1541,`td`,22)(1542,`p`),Tk(1543,`Método que exibe `),Jc(1544,`code`),Tk(1545,`p-helper`),Zg(),Tk(1546,` ou executa a ação definida em `),Jc(1547,`code`),Tk(1548,`p-helper{eventOnClick}`),Zg(),Tk(1549,` ou em `),Jc(1550,`code`),Tk(1551,`p-additionalHelp`),Zg(),Tk(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1553,`code`),Tk(1554,`p-keydown`),Zg(),Tk(1555,`.`),Zg(),Jc(1556,`blockquote`)(1557,`p`),Tk(1558,`Exibe ou oculta o conteúdo do componente `),Jc(1559,`code`),Tk(1560,`po-helper`),Zg(),Tk(1561,` quando o componente estiver com foco.`),Zg()(),Jc(1562,`pre`)(1563,`code`),Tk(1564,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),Zg()(),Jc(1565,`pre`)(1566,`code`),Tk(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1568,`br`),Jc(1569,`h3`),Tk(1570,`Interfaces`),Zg(),Jc(1571,`h4`,45)(1572,`code`,5),Tk(1573,`PoComboFilter`),Zg()(),Jc(1574,`div`,2)(1575,`p`),Tk(1576,`Interface para os serviços que serão utilizados no po-combo.`),Zg()(),Jc(1577,`h4`,10),Tk(1578,`Métodos`),Zg(),Jc(1579,`table`,43)(1580,`tr`,14)(1581,`th`,44)(1582,`div`,23)(1583,`h4`)(1584,`span`,24),Tk(1585,` getFilteredData `),Zg()()()()(),Jc(1586,`tr`,22)(1587,`td`,22)(1588,`p`),Tk(1589,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),Zg()()()(),Jc(1590,`h5`)(1591,`b`),Tk(1592,`Parâmetros`),Zg()(),Jc(1593,`table`,11)(1594,`tr`,12)(1595,`th`,13),Tk(1596,`Nome`),Zg(),Jc(1597,`th`,13),Tk(1598,`Tipo`),Zg(),Jc(1599,`th`,13),Tk(1600,`Descrição`),Zg()(),Jc(1601,`tr`,14)(1602,`td`,15),Tk(1603,` params`),Zg(),Jc(1604,`td`,19)(1605,`code`,46),Tk(1606,` any `),Zg()(),Jc(1607,`td`,22)(1608,`p`),Tk(1609,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),Zg()()(),Jc(1610,`tr`,14)(1611,`td`,15),Tk(1612,` filterParams`),Zg(),Jc(1613,`td`,19)(1614,`code`,46),Tk(1615,` any `),Zg()(),Jc(1616,`td`,22)(1617,`p`),Tk(1618,`Valor informado através da propriedade `),Jc(1619,`code`),Tk(1620,`p-filter-params`),Zg(),Tk(1621,`.`),Zg()()()(),_u(1622,`br`),Jc(1623,`table`,43)(1624,`tr`,14)(1625,`th`,44)(1626,`div`,23)(1627,`h4`)(1628,`span`,24),Tk(1629,` getObjectByValue `),Zg()()()()(),Jc(1630,`tr`,22)(1631,`td`,22)(1632,`p`),Tk(1633,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),Zg()()()(),Jc(1634,`h5`)(1635,`b`),Tk(1636,`Parâmetros`),Zg()(),Jc(1637,`table`,11)(1638,`tr`,12)(1639,`th`,13),Tk(1640,`Nome`),Zg(),Jc(1641,`th`,13),Tk(1642,`Tipo`),Zg(),Jc(1643,`th`,13),Tk(1644,`Descrição`),Zg()(),Jc(1645,`tr`,14)(1646,`td`,15),Tk(1647,` value`),Zg(),Jc(1648,`td`,19)(1649,`code`,25),Tk(1650,` string `),Zg(),Jc(1651,`code`,27),Tk(1652,` number `),Zg()(),Jc(1653,`td`,22)(1654,`p`),Tk(1655,`Valor responsável por realizar a busca de um único objeto.`),Zg()()(),Jc(1656,`tr`,14)(1657,`td`,15),Tk(1658,` filterParams`),Zg(),Jc(1659,`td`,19)(1660,`code`,46),Tk(1661,` any `),Zg()(),Jc(1662,`td`,22)(1663,`p`),Tk(1664,`Valor informado através da propriedade `),Jc(1665,`code`),Tk(1666,`p-filter-params`),Zg(),Tk(1667,`.`),Zg()()()(),_u(1668,`br`),Jc(1669,`h4`,45)(1670,`code`,5),Tk(1671,`PoComboLiterals`),Zg()(),Jc(1672,`div`,2)(1673,`p`),Tk(1674,`Interface para definição das literais usadas no `),Jc(1675,`code`),Tk(1676,`po-combo`),Zg(),Tk(1677,`.`),Zg()(),Jc(1678,`h4`,10),Tk(1679,`Propriedades`),Zg(),Jc(1680,`table`,11)(1681,`tr`,12)(1682,`th`,13),Tk(1683,`Nome`),Zg(),Jc(1684,`th`,13),Tk(1685,`Tipo`),Zg(),Jc(1686,`th`,13),Tk(1687,`Descrição`),Zg()(),Jc(1688,`tr`,14)(1689,`td`,15)(1690,`div`,23)(1691,`span`,24),Tk(1692,` chooseOption`),_u(1693,`br`),Zg()()(),Jc(1694,`td`,19)(1695,`code`,25),Tk(1696,`string`),Zg()(),Jc(1697,`td`,22)(1698,`em`)(1699,`strong`),Tk(1700,`(opcional)`),Zg()(),Jc(1701,`p`),Tk(1702,`Texto exibido quando o combo estiver vazio.`),Zg()()(),Jc(1703,`tr`,14)(1704,`td`,15)(1705,`div`,23)(1706,`span`,24),Tk(1707,` clean`),_u(1708,`br`),Zg()()(),Jc(1709,`td`,19)(1710,`code`,25),Tk(1711,`string`),Zg()(),Jc(1712,`td`,22)(1713,`em`)(1714,`strong`),Tk(1715,`(opcional)`),Zg()(),Jc(1716,`p`),Tk(1717,`Texto do aria-label do botão de limpar`),Zg()()(),Jc(1718,`tr`,14)(1719,`td`,15)(1720,`div`,23)(1721,`span`,24),Tk(1722,` noData`),_u(1723,`br`),Zg()()(),Jc(1724,`td`,19)(1725,`code`,25),Tk(1726,`string`),Zg()(),Jc(1727,`td`,22)(1728,`em`)(1729,`strong`),Tk(1730,`(opcional)`),Zg()(),Jc(1731,`p`),Tk(1732,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),Zg()()()(),Jc(1733,`h4`,45)(1734,`code`,5),Tk(1735,`PoComboOptionGroup`),Zg()(),Jc(1736,`div`,2)(1737,`p`),Tk(1738,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Jc(1739,`code`),Tk(1740,`po-combo`),Zg(),Tk(1741,`.`),Zg()(),Jc(1742,`h4`,10),Tk(1743,`Propriedades`),Zg(),Jc(1744,`table`,11)(1745,`tr`,12)(1746,`th`,13),Tk(1747,`Nome`),Zg(),Jc(1748,`th`,13),Tk(1749,`Tipo`),Zg(),Jc(1750,`th`,13),Tk(1751,`Descrição`),Zg()(),Jc(1752,`tr`,14)(1753,`td`,15)(1754,`div`,23)(1755,`span`,24),Tk(1756,` label`),_u(1757,`br`),Zg()()(),Jc(1758,`td`,19)(1759,`code`,25),Tk(1760,`string`),Zg()(),Jc(1761,`td`,22)(1762,`p`),Tk(1763,`Título para cada grupo de opções.`),Zg(),Jc(1764,`p`),Tk(1765,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),Zg()()(),Jc(1766,`tr`,14)(1767,`td`,15)(1768,`div`,23)(1769,`span`,24),Tk(1770,` options`),_u(1771,`br`),Zg()()(),Jc(1772,`td`,19)(1773,`code`,47),Tk(1774,`Array<PoComboOption>`),Zg()(),Jc(1775,`td`,22)(1776,`p`),Tk(1777,`Lista de itens a serem exibidos.`),Zg()()()(),Jc(1778,`h4`,45)(1779,`code`,5),Tk(1780,`PoComboOption`),Zg()(),Jc(1781,`div`,2)(1782,`p`),Tk(1783,`Interface que define as opções que serão exibidas na lista do `),Jc(1784,`code`),Tk(1785,`po-combo`),Zg(),Tk(1786,`.`),Zg()(),Jc(1787,`h4`,10),Tk(1788,`Propriedades`),Zg(),Jc(1789,`table`,11)(1790,`tr`,12)(1791,`th`,13),Tk(1792,`Nome`),Zg(),Jc(1793,`th`,13),Tk(1794,`Tipo`),Zg(),Jc(1795,`th`,13),Tk(1796,`Descrição`),Zg()(),Jc(1797,`tr`,14)(1798,`td`,15)(1799,`div`,23)(1800,`span`,24),Tk(1801,` label`),_u(1802,`br`),Zg()()(),Jc(1803,`td`,19)(1804,`code`,25),Tk(1805,`string`),Zg()(),Jc(1806,`td`,22)(1807,`em`)(1808,`strong`),Tk(1809,`(opcional)`),Zg()(),Jc(1810,`p`),Tk(1811,`Descrição exibida nas opções da lista.`),Zg(),Jc(1812,`blockquote`)(1813,`p`),Tk(1814,`Caso não seja definida será assumido o valor definido na propriedade `),Jc(1815,`code`),Tk(1816,`value`),Zg(),Tk(1817,`.`),Zg()()()(),Jc(1818,`tr`,14)(1819,`td`,15)(1820,`div`,23)(1821,`span`,24),Tk(1822,` value`),_u(1823,`br`),Zg()()(),Jc(1824,`td`,19)(1825,`code`,25),Tk(1826,`string `),Zg(),Jc(1827,`code`,27),Tk(1828,` number`),Zg()(),Jc(1829,`td`,22)(1830,`p`),Tk(1831,`Valor do objeto que será atribuído ao `),Jc(1832,`em`),Tk(1833,`model`),Zg(),Tk(1834,`.`),Zg()()()(),Jc(1835,`h3`),Tk(1836,`Enums`),Zg(),Jc(1837,`h4`,4)(1838,`code`,5),Tk(1839,`PoComboFilterMode`),Zg()(),Jc(1840,`div`,2)(1841,`p`),Tk(1842,`Define o tipo de busca usado no po-combo.`),Zg()(),Jc(1843,`h4`,10),Tk(1844,`Propriedades`),Zg(),Jc(1845,`table`,11)(1846,`tr`,12)(1847,`th`,13),Tk(1848,`Nome`),Zg(),Jc(1849,`th`,13),Tk(1850,`Descrição`),Zg()(),Jc(1851,`tr`,14)(1852,`td`,15)(1853,`div`,23)(1854,`span`,24),Tk(1855,` startsWith`),_u(1856,`br`),Zg()()(),Jc(1857,`td`,22)(1858,`p`),Tk(1859,`Verifica se o texto `),Jc(1860,`em`),Tk(1861,`inicia`),Zg(),Tk(1862,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),Zg()()(),Jc(1863,`tr`,14)(1864,`td`,15)(1865,`div`,23)(1866,`span`,24),Tk(1867,` contains`),_u(1868,`br`),Zg()()(),Jc(1869,`td`,22)(1870,`p`),Tk(1871,`Verifica se o texto `),Jc(1872,`em`),Tk(1873,`contém`),Zg(),Tk(1874,` o valor pesquisado.`),Zg()()(),Jc(1875,`tr`,14)(1876,`td`,15)(1877,`div`,23)(1878,`span`,24),Tk(1879,` endsWith`),_u(1880,`br`),Zg()()(),Jc(1881,`td`,22)(1882,`p`),Tk(1883,`Verifica se o texto `),Jc(1884,`em`),Tk(1885,`finaliza`),Zg(),Tk(1886,` com o valor pesquisado.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function zt(a,O){if(a&1){let m=ZO();Jc(0,`po-tab`,4),vt$1(`p-click`,function(){H_(m);let n=nk();return $_(n.changeTab(`web`))}),_u(1,`sample-po-combo-basic-view`)(2,`sample-po-combo-labs-view`)(3,`sample-po-combo-scheduling-view`)(4,`sample-po-combo-transfer-view`)(5,`sample-po-combo-heroes-view`)(6,`sample-po-combo-heroes-reactive-form-view`)(7,`sample-po-combo-infinity-scroll-view`)(8,`sample-po-combo-hotels-view`),Zg()}if(a&2){let m=nk();Ab(`p-active`,m.activeTab===`web`)}}var Rt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Combo`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,zt,9,1,`po-tab`,2),Jc(3,`po-tab`,3),vt$1(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-combo-doc`),Zg()()()),p&2&&(Ab(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Rt),WV]})}return a})();var un=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,it]})}return a})();export{un as DocPoComboModule};