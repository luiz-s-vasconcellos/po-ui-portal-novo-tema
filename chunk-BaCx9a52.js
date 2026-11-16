import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,Da as kI,Dr as Gk,Ea as k,F as Joe,G as Nf,Hi as Y,Hr as Lk,Ii as WL,Ir as Kb,Ka as qk,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Ti as U_,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Wt as cb,Yi as aF,Zi as ar,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,ha as i1,io as vu,j as I4,ji as Vk,kt as Zoe,li as Qc,m as Dre,na as de,oa as e_,oo as wg,pi as R,pt as Tn,qa as rR,qi as ZL,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,uo as xk,va as ik,vi as Sk,w as Fc,wn as q4,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{r as t,t as r}from"./chunk-zystk1pz.js";var Ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&vu(0,`po-lookup`,0)},dependencies:[cb],encapsulation:2,changeDetection:1})}return a})();var it=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-lookup-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-lookup-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,it,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=p(kI);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let d=r$1,{filterParams:l,advancedFilters:o}=d,c=t(d,[`filterParams`,`advancedFilters`]),p=r(r(r({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Oe=(()=>{class a{sampleFilterService=p(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Tn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[we([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let c=YO();Qc(0,`po-lookup`,1),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.lookup,d)||(o.lookup=d),U_(d)}),vt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),Kg(),vu(1,`po-divider`),Qc(2,`po-container`,2)(3,`div`,3),vu(4,`po-info`,4)(5,`po-info`,5),Kg()(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.label,d)||(o.label=d),U_(d)}),Kg(),Qc(10,`po-checkbox-group`,7),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.columnsName,d)||(o.columnsName=d),U_(d)}),vt(`p-change`,function(){return o.updateColumns()}),Kg(),Qc(11,`po-select`,8),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.fieldLabel,d)||(o.fieldLabel=d),U_(d)}),Kg(),Qc(12,`po-select`,9),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.fieldValue,d)||(o.fieldValue=d),U_(d)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.filterService,d)||(o.filterService=d),U_(d)}),Kg(),Qc(14,`po-input`,11),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.fieldErrorMessage,d)||(o.fieldErrorMessage=d),U_(d)}),Kg(),Qc(15,`po-input`,12),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.help,d)||(o.help=d),U_(d)}),Kg(),Qc(16,`po-input`,13),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.helperText,d)||(o.helperText=d),U_(d)}),Kg(),Qc(17,`po-input`,14),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.placeholder,d)||(o.placeholder=d),U_(d)}),Kg(),Qc(18,`po-input`,15),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.literals,d)||(o.literals=d),U_(d)}),vt(`p-change`,function(){return o.changeLiterals()}),Kg(),Qc(19,`po-input`,16),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.formatField,d)||(o.formatField=d),U_(d)}),vt(`p-change`,function(d){return o.onFieldFormatChange(d)}),Kg(),Qc(20,`po-checkbox-group`,17),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.properties,d)||(o.properties=d),U_(d)}),Kg(),Qc(21,`po-radio-group`,18),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.spacing,d)||(o.spacing=d),U_(d)}),Kg(),Qc(22,`po-radio-group`,19),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.size,d)||(o.size=d),U_(d)}),Kg(),Qc(23,`po-textarea`,20),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.advancedFilters,d)||(o.advancedFilters=d),U_(d)}),vt(`p-change`,function(){return o.changeAdvancedFilters()}),Kg(),Qc(24,`div`,3)(25,`po-button`,21),vt(`p-click`,function(){return o.restore()}),Kg()()()}l&2&&(Yb(`ngModel`,o.lookup),Rb(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),W0(),wg(4),Rb(`p-value`,o.lookup),wg(),Rb(`p-value`,o.event),wg(4),Yb(`ngModel`,o.label),W0(),wg(),Yb(`ngModel`,o.columnsName),Rb(`p-options`,o.columnsOptions),W0(),wg(),Yb(`ngModel`,o.fieldLabel),Rb(`p-options`,o.fieldLabelOptions),W0(),wg(),Yb(`ngModel`,o.fieldValue),Rb(`p-options`,o.fieldValueOptions),W0(),wg(),Yb(`ngModel`,o.filterService),W0(),wg(),Yb(`ngModel`,o.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,o.help),W0(),wg(),Yb(`ngModel`,o.helperText),W0(),wg(),Yb(`ngModel`,o.placeholder),W0(),wg(),Yb(`ngModel`,o.literals),W0(),wg(),Yb(`ngModel`,o.formatField),W0(),wg(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),W0(),wg(),Yb(`ngModel`,o.spacing),Rb(`p-options`,o.typeSpacing),W0(),wg(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0(),wg(),Yb(`ngModel`,o.advancedFilters),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Fc,Nf,I4,j4,cb,Zte,Koe,Zoe,Joe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

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

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-labs`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,at,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Oe],encapsulation:2,changeDetection:1})}return a})();var rt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=p(O);notification=p(Ru);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[we([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let c=YO();Qc(0,`div`,1),vu(1,`po-info`,2),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.hero,d)||(o.hero=d),U_(d)}),Kg(),Qc(7,`po-select`,4),z0(),Kb(`ngModelChange`,function(d){return B_(c),Tk(o.vehicle,d)||(o.vehicle=d),U_(d)}),Kg()(),Qc(8,`div`,1)(9,`po-button`,5),vt(`p-click`,function(){return o.startMission()}),Kg()()()}if(l&2){let c=ik(4);wg(6),Yb(`ngModel`,o.hero),Rb(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,Lk(10,rt)),W0(),wg(),Yb(`ngModel`,o.vehicle),Rb(`p-options`,o.vehicles),W0(),wg(2),Rb(`p-disabled`,c.form.invalid||c.form.pending)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,cb,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-hero`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup - Hero`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-hero`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,mt,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return a})();var st=()=>[`nickname`,`label`];var ct=()=>({modalTitle:`Heroes available for mission`});var He=(()=>{class a{service=p(O);notification=p(Ru);formBuilder=p(OZ);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,Xm.required],vehicle:[null,Xm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[we([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Qc(0,`div`,0),vu(1,`po-info`,1),Kg(),vu(2,`po-divider`),Qc(3,`form`,2)(4,`div`,0)(5,`po-lookup`,3),z0(),Kg(),Qc(6,`po-select`,4),z0(),Kg()(),Qc(7,`div`,0)(8,`po-button`,5),vt(`p-click`,function(){return o.startMission()}),Kg()()()),l&2&&(wg(3),Rb(`formGroup`,o.formMission),wg(2),Rb(`p-columns`,o.columns)(`p-field-format`,Lk(7,st))(`p-filter-service`,o.service)(`p-literals`,Lk(8,ct)),W0(),wg(),Rb(`p-options`,o.vehicles),W0(),wg(2),Rb(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[AZ,MZ,TZ,ZL,i1,oi,Nf,cb,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-hero-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup - Hero Reactive Form`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-hero-reactive-form`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Et,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,He],encapsulation:2,changeDetection:1})}return a})();var St=()=>({modalTitle:`Select a hero`});var Be=(()=>{class a{service=p(O);hero;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`},{property:`email`,label:`E-mail`}];advancedFilters=[{property:`name`,label:`Name`,gridColumns:6},{property:`email`,label:`E-mail`,gridColumns:6},{property:`nickname`,label:`Hero`,gridColumns:6,initValue:`Hulk`,forceOptionsComponentType:Dre.radioGroup,options:[{label:`Batman`,value:`Batman`},{label:`Superman`,value:`Superman`},{label:`Hulk`,value:`Hulk`},{label:`Thor`,value:`Thor`}]}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-advanced-filter`]],standalone:!1,features:[we([O])],decls:7,vars:7,consts:[[1,`po-row`],[`p-label`,`Advanced filter with initial value`,`p-value`,`Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result.`,1,`po-lg-12`],[`name`,`hero`,`p-field-label`,`name`,`p-field-value`,`nickname`,`p-help`,`Select a hero`,`p-label`,`Hero`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-advanced-filters`,`p-literals`],[`p-label`,`Selected value`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Qc(0,`div`,0),vu(1,`po-info`,1),Kg(),vu(2,`po-divider`),Qc(3,`div`,0)(4,`po-lookup`,2),z0(),Kb(`ngModelChange`,function(p){return Tk(o.hero,p)||(o.hero=p),p}),Kg()(),Qc(5,`div`,0),vu(6,`po-info`,3),Kg()),l&2&&(wg(4),Yb(`ngModel`,o.hero),Rb(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,Lk(6,St)),W0(),wg(2),Rb(`p-value`,o.hero||`-`))},dependencies:[MZ,QL,Nf,cb,Joe],encapsulation:2})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-advanced-filter-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-advanced-filter`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup - Advanced Filter`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-info
    class="po-lg-12"
    p-label="Advanced filter with initial value"
    p-value="Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result."
  >
  </po-info>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="hero"
    [(ngModel)]="hero"
    p-field-label="name"
    p-field-value="nickname"
    p-help="Select a hero"
    p-label="Hero"
    p-clean
    [p-columns]="columns"
    [p-filter-service]="service"
    [p-advanced-filters]="advancedFilters"
    [p-literals]="{ 'modalTitle': 'Select a hero' }"
  >
  </po-lookup>
</div>

<div class="po-row">
  <po-info class="po-md-6" p-label="Selected value" [p-value]="hero || '-'"> </po-info>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject } from '@angular/core';

import { ForceOptionComponentEnum, PoLookupAdvancedFilter, PoLookupColumn } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-advanced-filter',
  templateUrl: './sample-po-lookup-advanced-filter.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupAdvancedFilterComponent {
  service = inject(SamplePoLookupService);

  hero: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' },
    { property: 'email', label: 'E-mail' }
  ];

  /**
   * A propriedade \`initValue\` define o valor inicial de cada campo ao abrir a busca avan\xE7ada.
   * Neste exemplo a busca avan\xE7ada j\xE1 \xE9 aberta filtrando o her\xF3i \`Hulk\`.
   */
  public readonly advancedFilters: Array<PoLookupAdvancedFilter> = [
    { property: 'name', label: 'Name', gridColumns: 6 },
    { property: 'email', label: 'E-mail', gridColumns: 6 },
    {
      property: 'nickname',
      label: 'Hero',
      gridColumns: 6,
      initValue: 'Hulk',
      forceOptionsComponentType: ForceOptionComponentEnum.radioGroup,
      options: [
        { label: 'Batman', value: 'Batman' },
        { label: 'Superman', value: 'Superman' },
        { label: 'Hulk', value: 'Hulk' },
        { label: 'Thor', value: 'Thor' }
      ]
    }
  ];
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-advanced-filter`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ft,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Be],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{http=p(kI);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(Y(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(Y(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function gt(a,et){if(a&1&&(Qc(0,`div`,0),vu(1,`po-table`,3),Kg()),a&2){let r=ek();wg(),Rb(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var We=(()=>{class a{filterService=p(Ee);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[we([Ee])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`po-radio-group`,1),z0(),Kb(`ngModelChange`,function(p){return Tk(o.filterParams,p)||(o.filterParams=p),p}),Kg()(),vu(2,`po-divider`),Qc(3,`div`,0)(4,`po-lookup`,2),Gk(5,`titlecase`),z0(),Kb(`ngModelChange`,function(p){return Tk(o.entity,p)||(o.entity=p),p}),vt(`p-selected`,function(p){return o.onSelected(p)}),Kg()(),FO(6,gt,2,4,`div`,0)),l&2&&(wg(),Yb(`ngModel`,o.filterParams),Rb(`p-options`,o.entities),W0(),wg(3),Rb(`p-help`,xk(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,xk(``,qk(5,12,o.entityLabel),` of Star Wars`)),Yb(`ngModel`,o.entity),Rb(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),W0(),wg(2),VO(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[MZ,QL,Nf,cb,Zte,q4,aF],encapsulation:2,changeDetection:1})}return a})();var kt=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-sw-films`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup - Star Wars films`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-sw-films`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,kt,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,We],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{http=p(kI);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(rR(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Qe=(()=>{class a{service=p(Ge);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`po-lookup`,1),z0(),Kb(`ngModelChange`,function(p){return Tk(o.multiLookup,p)||(o.multiLookup=p),p}),vt(`p-change`,function(p){return o.changeOptions(p)}),Kg(),Qc(2,`po-container`,2),vu(3,`po-table`,3),Kg()()),l&2&&(wg(),Yb(`ngModel`,o.multiLookup),Rb(`p-multiple`,!0),W0(),wg(2),Rb(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[MZ,QL,Fc,cb,q4],encapsulation:2,changeDetection:1})}return a})();var Pt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-multiple`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup - Multiple`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-multiple`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pt,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Qe],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(c=>c.name.toLowerCase().includes(l)||c.cpf.includes(l)||c.phone.includes(l)||c.cep.includes(l)||c.plate.toLowerCase().includes(l)):[...this.items];return k({items:o,hasNext:!1}).pipe(e_(200))}getObjectByValue(r){return Array.isArray(r)?k(this.items.filter(l=>r.includes(l.value))).pipe(e_(200)):k(this.items.find(l=>String(l.value)===String(r))).pipe(e_(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac})}return a})();var Ye=(()=>{class a{service=p(xe);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[we([xe])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`po-lookup`,1),z0(),Kb(`ngModelChange`,function(p){return Tk(o.person,p)||(o.person=p),p}),Kg()()),l&2&&(wg(),Yb(`ngModel`,o.person),Rb(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),W0())},dependencies:[MZ,QL,cb],encapsulation:2})}return a})();var Ft=a=>({"docs-sample-code-tabs":a});var Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-lookup-mask`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Lookup - Mask`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-lookup
    name="person"
    class="po-md-12"
    [(ngModel)]="person"
    p-field-label="name"
    p-field-value="value"
    p-label="Pessoa"
    p-help="Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas"
    [p-columns]="columns"
    [p-filter-service]="service"
    [p-hide-columns-manager]="true"
  >
  </po-lookup>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn } from '@po-ui/ng-components';

import { SamplePoLookupMaskService } from './sample-po-lookup-mask.service';

@Component({
  selector: 'sample-po-lookup-mask',
  templateUrl: './sample-po-lookup-mask.component.html',
  providers: [SamplePoLookupMaskService],
  standalone: false
})
export class SamplePoLookupMaskComponent {
  service = inject(SamplePoLookupMaskService);

  person: string;

  readonly columns: Array<PoLookupColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99' },
    { property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' },
    { property: 'cep', label: 'CEP', mask: '99999-999' },
    { property: 'plate', label: 'Placa', mask: '@@@ 9w99' }
  ];
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PoLookupFilter, PoLookupFilteredItemsParams, PoLookupResponseApi } from '@po-ui/ng-components';

@Injectable()
export class SamplePoLookupMaskService implements PoLookupFilter {
  private readonly items = [
    { value: 1, name: 'Maria Silva', cpf: '12345678901', phone: '11999887766', cep: '89201000', plate: 'ABC1D23' },
    { value: 2, name: 'Jo\xE3o Santos', cpf: '98765432100', phone: '21988776655', cep: '01310100', plate: 'XYZ4E56' },
    { value: 3, name: 'Ana Oliveira', cpf: '11122233344', phone: '47912345678', cep: '80010000', plate: 'MNO7F89' },
    { value: 4, name: 'Carlos Souza', cpf: '55566677788', phone: '41987654321', cep: '88010000', plate: 'QRS2G01' },
    { value: 5, name: 'Fernanda Lima', cpf: '99988877766', phone: '48991234567', cep: '89010000', plate: 'DEF3H45' }
  ];

  getFilteredItems(params: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const filter = params.filter ? params.filter.toLowerCase() : '';

    const filtered = filter
      ? this.items.filter(
          item =>
            item.name.toLowerCase().includes(filter) ||
            item.cpf.includes(filter) ||
            item.phone.includes(filter) ||
            item.cep.includes(filter) ||
            item.plate.toLowerCase().includes(filter)
        )
      : [...this.items];

    return of({ items: filtered, hasNext: false }).pipe(delay(200));
  }

  getObjectByValue(value: string | Array<any>): Observable<any> {
    if (Array.isArray(value)) {
      return of(this.items.filter(item => value.includes(item.value))).pipe(delay(200));
    }
    return of(this.items.find(item => String(item.value) === String(value))).pipe(delay(200));
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-lookup-mask`),Kg(),vu(27,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ft,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ye],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6548,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-lookup-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-advanced-filters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-height`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`event-p-change-visible-columns`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`event-p-restore-column-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-columns-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-multiple`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`event-p-selected`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-spacing`,1,`docs-api-properties-row`],[`id`,`prop-p-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-virtual-scroll`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-lookup-advanced-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-advanced-filter-additional-help`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-lookup-advanced-filter-additional-help-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-advanced-filters`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-append-box`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-auto-height`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-auto-upload`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-boolean-false`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-boolean-true`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-change-on-enter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-change-visible-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-column-restore-manager`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`id`,`interface-po-lookup-advanced-filter-compact-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-container`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-custom-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`id`,`interface-po-lookup-advanced-filter-custom-action-click`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`id`,`interface-po-lookup-advanced-filter-debounce-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-decimals-length`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-directory`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-disabled-init-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-disabled-tab-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-display-format`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-divider`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-drag-drop`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-drag-drop-height`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-error-async-function`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`id`,`interface-po-lookup-advanced-filter-error-async-properties`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`id`,`interface-po-lookup-advanced-filter-error-limit`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-field-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-field-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-filter-minlength`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`id`,`interface-po-lookup-advanced-filter-force-boolean-component-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`id`,`interface-po-lookup-advanced-filter-force-options-component-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`id`,`interface-po-lookup-advanced-filter-form-field`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-format`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-format-model`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-format-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-lg-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-lg-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-md-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-md-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-sm-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-sm-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-xl-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-xl-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-headers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`id`,`interface-po-lookup-advanced-filter-help`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-helper`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-label-status`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-password-peek`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-restrictions-info`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-select-all`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-select-button`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-send-button`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-lookup-advanced-filter-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-init-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-invalid-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-iso-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`id`,`interface-po-lookup-advanced-filter-key`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-keydown`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-label-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`id`,`interface-po-lookup-advanced-filter-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`interface-po-lookup-advanced-filter-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`id`,`interface-po-lookup-advanced-filter-loading`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-locale`,1,`docs-api-properties-row`],[`href`,`documentation/po-i18n`],[`id`,`interface-po-lookup-advanced-filter-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-mask-format-model`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-mask-no-length-validation`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-max-length`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-max-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-max-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-min-length`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-min-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-min-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-minute-interval`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`id`,`interface-po-lookup-advanced-filter-model-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`id`,`interface-po-lookup-advanced-filter-multiple`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-lg-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-md-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-sm-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-xl-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-on-error`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-on-success`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-on-upload`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-optional`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`id`,`interface-po-lookup-advanced-filter-options-multi`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-options-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`id`,`interface-po-lookup-advanced-filter-order`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-params`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-placeholder-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-property`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-range`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-range-preset-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`id`,`interface-po-lookup-advanced-filter-range-presets`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-range-presets-order`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`id`,`interface-po-lookup-advanced-filter-readonly`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-remove-initial-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-required`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-restrictions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`id`,`interface-po-lookup-advanced-filter-rows`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-search-service`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-second-interval`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-secret`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-show-required`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-show-seconds`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-show-thumbnail`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-size`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-sort`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-step`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-thousand-maxlength`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`id`,`interface-po-lookup-advanced-filter-url`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-validate`,1,`docs-api-properties-row`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`interface-po-lookup-advanced-filter-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-year-range-limit`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-column-field-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-format`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-width`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-filter-method-getFilteredItems`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-lookup-filter-method-getObjectByValue`,1,`docs-api-method-table`],[`id`,`interface-po-lookup-filtered-items-params`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-filtered-items-params-advanced-filters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`id`,`interface-po-lookup-filtered-items-params-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-filter-params`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-order`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-page`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-page-size`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search-primary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search-secondary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search-title`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-disclaimer-group-title`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-primary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-secondary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-load-more-data`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-loading-data`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-no-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-title`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-response-api`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-response-api-has-next`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-response-api-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`],[`id`,`enum-po-table-column-spacing`,1,`docs-api-class-name`],[`id`,`enum-po-table-column-spacing-extra-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-medium`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-large`,1,`docs-api-properties-row`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoLookupComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Qc(24,`code`),Sk(25,`po-lookup`),Kg(),Sk(26,` permite que o usuário digite um valor e pressione a tecla `),Qc(27,`em`),Sk(28,`TAB`),Kg(),Sk(29,` para
buscar um registro.`),Kg(),Qc(30,`blockquote`)(31,`p`),Sk(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),Kg()(),Qc(33,`blockquote`)(34,`p`),Sk(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Qc(36,`a`,6),Sk(37,`modelo`),Kg(),Sk(38,` como `),Qc(39,`code`),Sk(40,`pending`),Kg(),Sk(41,`.`),Kg()(),Qc(42,`p`),Sk(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Qc(44,`code`),Sk(45,`po-select`),Kg(),Sk(46,` ou o `),Qc(47,`code`),Sk(48,`po-combo`),Kg(),Sk(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Qc(50,`a`,7),Sk(51,`Guia de implementação das APIs TOTVS`),Kg(),Sk(52,`.`),Kg(),Qc(53,`p`),Sk(54,`Importante:`),Kg(),Qc(55,`ul`)(56,`li`)(57,`p`),Sk(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Kg(),Qc(59,`pre`)(60,`code`),Sk(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),Kg()()(),Qc(62,`li`)(63,`p`),Sk(64,`Ao utilizar a propriedade `),Qc(65,`code`),Sk(66,`p-advanced-filters`),Kg(),Sk(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),Qc(68,`code`),Sk(69,`po-dynamic-form`),Kg(),Sk(70,`. Em aplicações que não importam o `),Qc(71,`code`),Sk(72,`PoModule`),Kg(),Sk(73,`, como projetos
`),Qc(74,`em`),Sk(75,`standalone`),Kg(),Sk(76,` ou que utilizam módulos específicos, é necessário importar o `),Qc(77,`code`),Sk(78,`PoDynamicModule`),Kg(),Sk(79,`
no componente ou m\xF3dulo onde o `),Qc(80,`code`),Sk(81,`po-lookup`),Kg(),Sk(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Qc(83,`code`),Sk(84,`NG0201: No provider found for _TitleCasePipe`),Kg(),Sk(85,` ao abrir a busca avançada.`),Kg(),Qc(86,`pre`)(87,`code`),Sk(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),Kg()()()(),Qc(89,`h4`),Sk(90,`Tokens customizáveis`),Kg(),Qc(91,`p`),Sk(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(93,`blockquote`)(94,`p`),Sk(95,`Para maiores informações, acesse o guia `),Qc(96,`a`,8),Sk(97,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(98,`.`),Kg()(),Qc(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),Sk(103,`Propriedade`),Kg(),Qc(104,`th`),Sk(105,`Descrição`),Kg(),Qc(106,`th`),Sk(107,`Valor Padrão`),Kg()()(),Qc(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),Sk(112,`Default Values`),Kg()(),vu(113,`td`)(114,`td`),Kg(),Qc(115,`tr`)(116,`td`)(117,`code`),Sk(118,`--font-family`),Kg()(),Qc(119,`td`),Sk(120,`Família tipográfica usada`),Kg(),Qc(121,`td`)(122,`code`),Sk(123,`var(--font-family-theme)`),Kg()()(),Qc(124,`tr`)(125,`td`)(126,`code`),Sk(127,`--font-size`),Kg()(),Qc(128,`td`),Sk(129,`Tamanho da fonte`),Kg(),Qc(130,`td`)(131,`code`),Sk(132,`var(--font-size-default)`),Kg()()(),Qc(133,`tr`)(134,`td`)(135,`code`),Sk(136,`--text-color-placeholder`),Kg()(),Qc(137,`td`),Sk(138,`Cor do texto no placeholder`),Kg(),Qc(139,`td`)(140,`code`),Sk(141,`var(--color-neutral-light-30)`),Kg()()(),Qc(142,`tr`)(143,`td`)(144,`code`),Sk(145,`--color`),Kg()(),Qc(146,`td`),Sk(147,`Cor principal do lookup`),Kg(),Qc(148,`td`)(149,`code`),Sk(150,`var(--color-neutral-dark-70)`),Kg()()(),Qc(151,`tr`)(152,`td`)(153,`code`),Sk(154,`--border-radius`),Kg()(),Qc(155,`td`),Sk(156,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(157,`td`)(158,`code`),Sk(159,`var(--border-radius-md)`),Kg()()(),Qc(160,`tr`)(161,`td`)(162,`code`),Sk(163,`--background`),Kg()(),Qc(164,`td`),Sk(165,`Cor de background`),Kg(),Qc(166,`td`)(167,`code`),Sk(168,`var(--color-neutral-light-05)`),Kg()()(),Qc(169,`tr`)(170,`td`)(171,`code`),Sk(172,`--text-color`),Kg()(),Qc(173,`td`),Sk(174,`Cor do texto`),Kg(),Qc(175,`td`)(176,`code`),Sk(177,`var(--color-neutral-dark-90)`),Kg()()(),Qc(178,`tr`)(179,`td`)(180,`code`),Sk(181,`--color-clear`),Kg()(),Qc(182,`td`),Sk(183,`Cor principal do icone clear`),Kg(),Qc(184,`td`)(185,`code`),Sk(186,`var(--color-action-default)`),Kg()()(),Qc(187,`tr`)(188,`td`)(189,`strong`),Sk(190,`Icon`),Kg()(),vu(191,`td`)(192,`td`),Kg(),Qc(193,`tr`)(194,`td`)(195,`code`),Sk(196,`--color-icon`),Kg()(),Qc(197,`td`),Sk(198,`Cor principal do icone pesquisar`),Kg(),Qc(199,`td`)(200,`code`),Sk(201,`var(--color-action-default)`),Kg()()(),Qc(202,`tr`)(203,`td`)(204,`strong`),Sk(205,`Hover`),Kg()(),vu(206,`td`)(207,`td`),Kg(),Qc(208,`tr`)(209,`td`)(210,`code`),Sk(211,`--color-hover`),Kg()(),Qc(212,`td`),Sk(213,`Cor principal no estado hover`),Kg(),Qc(214,`td`)(215,`code`),Sk(216,`var(--color-brand-01-dark)`),Kg()()(),Qc(217,`tr`)(218,`td`)(219,`code`),Sk(220,`--background-hover`),Kg()(),Qc(221,`td`),Sk(222,`Cor de background no estado hover`),Kg(),Qc(223,`td`)(224,`code`),Sk(225,`var(--color-brand-01-lightest)`),Kg()()(),Qc(226,`tr`)(227,`td`)(228,`strong`),Sk(229,`Focused`),Kg()(),vu(230,`td`)(231,`td`),Kg(),Qc(232,`tr`)(233,`td`)(234,`code`),Sk(235,`--color-focused`),Kg()(),Qc(236,`td`),Sk(237,`Cor principal no estado de focus`),Kg(),Qc(238,`td`)(239,`code`),Sk(240,`var(--color-action-default)`),Kg()()(),Qc(241,`tr`)(242,`td`)(243,`code`),Sk(244,`--outline-color-focused`),Kg()(),Qc(245,`td`),Sk(246,`Cor do outline do estado de focus`),Kg(),Qc(247,`td`)(248,`code`),Sk(249,`var(--color-action-focus)`),Kg()()(),Qc(250,`tr`)(251,`td`)(252,`strong`),Sk(253,`Disabled`),Kg()(),vu(254,`td`)(255,`td`),Kg(),Qc(256,`tr`)(257,`td`)(258,`code`),Sk(259,`--color-disabled`),Kg()(),Qc(260,`td`),Sk(261,`Cor principal no estado disabled`),Kg(),Qc(262,`td`)(263,`code`),Sk(264,`var(--color-action-disabled)`),Kg()()(),Qc(265,`tr`)(266,`td`)(267,`code`),Sk(268,`--background-disabled`),Kg()(),Qc(269,`td`),Sk(270,`Cor de background no estado disabled`),Kg(),Qc(271,`td`)(272,`code`),Sk(273,`var(--color-neutral-light-20)`),Kg()()(),Qc(274,`tr`)(275,`td`)(276,`code`),Sk(277,`--text-color-disabled`),Kg()(),Qc(278,`td`),Sk(279,`Cor do texto quando campo está desabilitado`),Kg(),Qc(280,`td`)(281,`code`),Sk(282,`var(--color-action-disabled)`),Kg()()(),Qc(283,`tr`)(284,`td`)(285,`strong`),Sk(286,`Error`),Kg()(),vu(287,`td`)(288,`td`),Kg(),Qc(289,`tr`)(290,`td`)(291,`code`),Sk(292,`--color-error`),Kg()(),Qc(293,`td`),Sk(294,`Cor de background no estado de requerido`),Kg(),Qc(295,`td`)(296,`code`),Sk(297,`var(--color-feedback-negative-base)`),Kg()()()()()(),Qc(298,`div`,9)(299,`h4`,10),Sk(300,`Seletor`),Kg(),Qc(301,`pre`,11),Sk(302,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-loading="boolean"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),Kg()(),Qc(303,`h4`,12),Sk(304,`Propriedades`),Kg(),Qc(305,`table`,13)(306,`tr`,14)(307,`th`,15),Sk(308,`Nome`),Kg(),Qc(309,`th`,15),Sk(310,`Tipo`),Kg(),Qc(311,`th`,15),Sk(312,`Padrão`),Kg(),Qc(313,`th`,15),Sk(314,`Descrição`),Kg()(),Qc(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),Sk(319,` (p-additional-help)`),vu(320,`br`),Kg()(),Qc(321,`div`,20),Sk(322,`Deprecated`),Kg()(),Qc(323,`td`,21)(324,`code`,22),Sk(325,`EventEmitter`),Kg()(),Qc(326,`td`,23),Sk(327,`-`),Kg(),Qc(328,`td`,24)(329,`em`)(330,`strong`),Sk(331,`(opcional)`),Kg()(),Qc(332,`p`),Sk(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(334,`blockquote`)(335,`p`),Sk(336,`Essa propriedade está `),Qc(337,`strong`),Sk(338,`depreciada`),Kg(),Sk(339,` e será removida na versão `),Qc(340,`code`),Sk(341,`23.x.x`),Kg(),Sk(342,`. Recomendamos utilizar a propriedade `),Qc(343,`code`),Sk(344,`p-helper`),Kg(),Sk(345,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(346,`tr`,25)(347,`td`,17)(348,`div`,26)(349,`span`,27),Sk(350,` p-additional-help-tooltip`),vu(351,`br`),Kg()(),Qc(352,`div`,20),Sk(353,`Deprecated`),Kg()(),Qc(354,`td`,21)(355,`code`,28),Sk(356,`string`),Kg()(),Qc(357,`td`,23),Sk(358,`-`),Kg(),Qc(359,`td`,24)(360,`em`)(361,`strong`),Sk(362,`(opcional)`),Kg()(),Qc(363,`p`),Sk(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(365,`code`),Sk(366,`po-helper`),Kg(),Sk(367,`.
`),Qc(368,`strong`),Sk(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(370,`blockquote`)(371,`p`),Sk(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(373,`blockquote`)(374,`p`),Sk(375,`Essa propriedade está `),Qc(376,`strong`),Sk(377,`depreciada`),Kg(),Sk(378,` e será removida na versão `),Qc(379,`code`),Sk(380,`23.x.x`),Kg(),Sk(381,`. Recomendamos utilizar a propriedade `),Qc(382,`code`),Sk(383,`p-helper`),Kg(),Sk(384,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(385,`tr`,29)(386,`td`,17)(387,`div`,26)(388,`span`,27),Sk(389,` p-advanced-filters`),vu(390,`br`),Kg()()(),Qc(391,`td`,21)(392,`code`,30),Sk(393,`Array<PoLookupAdvancedFilter>`),Kg()(),Qc(394,`td`,23),Sk(395,`-`),Kg(),Qc(396,`td`,24)(397,`em`)(398,`strong`),Sk(399,`(opcional)`),Kg()(),Qc(400,`p`),Sk(401,`Lista de objetos dos campos que serão criados na busca avançada.`),Kg(),Qc(402,`blockquote`)(403,`p`),Sk(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Kg()(),Qc(405,`blockquote`)(406,`p`),Sk(407,`A busca avançada é construída a partir do `),Qc(408,`code`),Sk(409,`po-dynamic-form`),Kg(),Sk(410,`. Em aplicações que não importam o `),Qc(411,`code`),Sk(412,`PoModule`),Kg(),Sk(413,`,
como projetos `),Qc(414,`em`),Sk(415,`standalone`),Kg(),Sk(416,` ou que utilizam módulos específicos, é necessário importar o `),Qc(417,`code`),Sk(418,`PoDynamicModule`),Kg(),Sk(419,`
no componente ou m\xF3dulo onde o `),Qc(420,`code`),Sk(421,`po-lookup`),Kg(),Sk(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Qc(423,`code`),Sk(424,`NG0201: No provider found for _TitleCasePipe`),Kg(),Sk(425,` ao abrir a busca avançada.`),Kg()(),Qc(426,`p`),Sk(427,`Exemplo de URL com busca avançada:`),Kg(),Qc(428,`pre`)(429,`code`),Sk(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),Kg()(),Qc(431,`p`),Sk(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),Kg(),Qc(433,`pre`)(434,`code`),Sk(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),Kg()(),Qc(436,`p`),Sk(437,`Também é possível definir um valor inicial para os campos da busca avançada através da propriedade `),Qc(438,`code`),Sk(439,`initValue`),Kg(),Sk(440,`,
que ser\xE1 atribu\xEDdo ao campo na primeira abertura da janela de busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro,
os campos s\xE3o preenchidos com os valores filtrados:`),Kg(),Qc(441,`pre`)(442,`code`),Sk(443,`advancedFilters: Array<PoLookupAdvancedFilter> = [
  { property: 'nickname', label: 'Apelido' },
  { property: 'active', label: 'Ativo', initValue: false, options: [
    { label: 'Sim', value: true },
    { label: 'N\xE3o', value: false }
  ]}
];
`),Kg()()()(),Qc(444,`tr`,31)(445,`td`,17)(446,`div`,26)(447,`span`,27),Sk(448,` p-append-in-body`),vu(449,`br`),Kg()()(),Qc(450,`td`,21)(451,`code`,32),Sk(452,`boolean`),Kg()(),Qc(453,`td`,23)(454,`p`)(455,`code`),Sk(456,`false`),Kg()()(),Qc(457,`td`,24)(458,`em`)(459,`strong`),Sk(460,`(opcional)`),Kg()(),Qc(461,`p`),Sk(462,`Define que o popover (`),Qc(463,`code`),Sk(464,`p-helper`),Kg(),Sk(465,` e/ou `),Qc(466,`code`),Sk(467,`p-error-limit`),Kg(),Sk(468,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(469,`blockquote`)(470,`p`),Sk(471,`Quando utilizado com `),Qc(472,`code`),Sk(473,`p-helper`),Kg(),Sk(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(475,`tr`,33)(476,`td`,17)(477,`div`,26)(478,`span`,27),Sk(479,` p-auto-focus`),vu(480,`br`),Kg()()(),Qc(481,`td`,21)(482,`code`,32),Sk(483,`boolean`),Kg()(),Qc(484,`td`,23)(485,`p`)(486,`code`),Sk(487,`false`),Kg()()(),Qc(488,`td`,24)(489,`em`)(490,`strong`),Sk(491,`(opcional)`),Kg()(),Qc(492,`p`),Sk(493,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(494,`blockquote`)(495,`p`),Sk(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(497,`tr`,34)(498,`td`,17)(499,`div`,26)(500,`span`,27),Sk(501,` p-auto-height`),vu(502,`br`),Kg()()(),Qc(503,`td`,21)(504,`code`,32),Sk(505,`boolean`),Kg()(),Qc(506,`td`,23)(507,`p`)(508,`code`),Sk(509,`false`),Kg()()(),Qc(510,`td`,24)(511,`em`)(512,`strong`),Sk(513,`(opcional)`),Kg()(),Qc(514,`p`),Sk(515,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Kg()()(),Qc(516,`tr`,35)(517,`td`,17)(518,`div`,18)(519,`span`,19),Sk(520,` (p-change)`),vu(521,`br`),Kg()()(),Qc(522,`td`,21)(523,`code`,22),Sk(524,`EventEmitter`),Kg()(),Qc(525,`td`,23),Sk(526,`-`),Kg(),Qc(527,`td`,24)(528,`em`)(529,`strong`),Sk(530,`(opcional)`),Kg()(),Qc(531,`p`),Sk(532,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),Kg()()(),Qc(533,`tr`,36)(534,`td`,17)(535,`div`,18)(536,`span`,19),Sk(537,` (p-change-model)`),vu(538,`br`),Kg()()(),Qc(539,`td`,21)(540,`code`,22),Sk(541,`EventEmitter`),Kg()(),Qc(542,`td`,23),Sk(543,`-`),Kg(),Qc(544,`td`,24)(545,`em`)(546,`strong`),Sk(547,`(opcional)`),Kg()(),Qc(548,`p`),Sk(549,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(550,`code`),Sk(551,`setValue`),Kg(),Sk(552,`, `),Qc(553,`code`),Sk(554,`patchValue`),Kg(),Sk(555,`, carregamento assíncrono).`),Kg(),Qc(556,`p`),Sk(557,`Diferentemente do `),Qc(558,`code`),Sk(559,`p-change`),Kg(),Sk(560,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(561,`code`),Sk(562,`p-change-model`),Kg(),Sk(563,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(564,`p`),Sk(565,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(566,`tr`,37)(567,`td`,17)(568,`div`,18)(569,`span`,19),Sk(570,` (p-change-visible-columns)`),vu(571,`br`),Kg()()(),Qc(572,`td`,21)(573,`code`,22),Sk(574,`EventEmitter`),Kg()(),Qc(575,`td`,23),Sk(576,`-`),Kg(),Qc(577,`td`,24)(578,`em`)(579,`strong`),Sk(580,`(opcional)`),Kg()(),Qc(581,`p`),Sk(582,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Kg(),Qc(583,`p`),Sk(584,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Qc(585,`tr`,38)(586,`td`,17)(587,`div`,26)(588,`span`,27),Sk(589,` p-clean`),vu(590,`br`),Kg()()(),Qc(591,`td`,21)(592,`code`,32),Sk(593,`boolean`),Kg()(),Qc(594,`td`,23),Sk(595,`-`),Kg(),Qc(596,`td`,24)(597,`p`),Sk(598,`Exibe um ícone que permite limpar o campo.`),Kg()()(),Qc(599,`tr`,39)(600,`td`,17)(601,`div`,18)(602,`span`,19),Sk(603,` (p-restore-column-manager)`),vu(604,`br`),Kg()()(),Qc(605,`td`,21)(606,`code`,22),Sk(607,`EventEmitter`),Kg()(),Qc(608,`td`,23),Sk(609,`-`),Kg(),Qc(610,`td`,24)(611,`em`)(612,`strong`),Sk(613,`(opcional)`),Kg()(),Qc(614,`p`),Sk(615,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Kg(),Qc(616,`p`),Sk(617,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Qc(618,`tr`,40)(619,`td`,17)(620,`div`,26)(621,`span`,27),Sk(622,` p-columns`),vu(623,`br`),Kg()()(),Qc(624,`td`,21)(625,`code`,41),Sk(626,`Array<PoLookupColumn>`),Kg()(),Qc(627,`td`,23),Sk(628,`-`),Kg(),Qc(629,`td`,24)(630,`em`)(631,`strong`),Sk(632,`(opcional)`),Kg()(),Qc(633,`p`),Sk(634,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),Kg()()(),Qc(635,`tr`,42)(636,`td`,17)(637,`div`,26)(638,`span`,27),Sk(639,` p-compact-label`),vu(640,`br`),Kg()()(),Qc(641,`td`,21)(642,`code`,32),Sk(643,`boolean`),Kg()(),Qc(644,`td`,23)(645,`p`)(646,`code`),Sk(647,`false`),Kg()()(),Qc(648,`td`,24)(649,`em`)(650,`strong`),Sk(651,`(opcional)`),Kg()(),Qc(652,`p`),Sk(653,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(654,`p`),Sk(655,`Quando habilitado (`),Qc(656,`code`),Sk(657,`true`),Kg(),Sk(658,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(659,`ul`)(660,`li`)(661,`code`),Sk(662,`po-label`),Kg()(),Qc(663,`li`)(664,`code`),Sk(665,`p-requirement (showRequired)`),Kg()(),Qc(666,`li`)(667,`code`),Sk(668,`po-helper`),Kg()()(),Qc(669,`p`),Sk(670,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(671,`p`),Sk(672,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(673,`ul`)(674,`li`)(675,`code`),Sk(676,`--field-container-title-justify`),Kg()(),Qc(677,`li`)(678,`code`),Sk(679,`--field-container-title-flex`),Kg()()(),Qc(680,`p`),Sk(681,`Exemplo:`),Kg(),Qc(682,`pre`)(683,`code`),Sk(684,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(685,`p`),Sk(686,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(687,`tr`,43)(688,`td`,17)(689,`div`,26)(690,`span`,27),Sk(691,` p-disabled`),vu(692,`br`),Kg()()(),Qc(693,`td`,21)(694,`code`,32),Sk(695,`boolean`),Kg()(),Qc(696,`td`,23)(697,`p`),Sk(698,`false`),Kg()(),Qc(699,`td`,24)(700,`em`)(701,`strong`),Sk(702,`(opcional)`),Kg()(),Qc(703,`p`),Sk(704,`Indica que o campo será desabilitado.`),Kg()()(),Qc(705,`tr`,44)(706,`td`,17)(707,`div`,26)(708,`span`,27),Sk(709,` p-error-limit`),vu(710,`br`),Kg()()(),Qc(711,`td`,21)(712,`code`,32),Sk(713,`boolean`),Kg()(),Qc(714,`td`,23)(715,`p`)(716,`code`),Sk(717,`false`),Kg()()(),Qc(718,`td`,24)(719,`em`)(720,`strong`),Sk(721,`(opcional)`),Kg()(),Qc(722,`p`),Sk(723,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(724,`blockquote`)(725,`p`),Sk(726,`Caso essa propriedade seja definida como `),Qc(727,`code`),Sk(728,`true`),Kg(),Sk(729,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(730,`tr`,45)(731,`td`,17)(732,`div`,26)(733,`span`,27),Sk(734,` p-field-error-message`),vu(735,`br`),Kg()()(),Qc(736,`td`,21)(737,`code`,28),Sk(738,`string`),Kg()(),Qc(739,`td`,23),Sk(740,`-`),Kg(),Qc(741,`td`,24)(742,`em`)(743,`strong`),Sk(744,`(opcional)`),Kg()(),Qc(745,`p`),Sk(746,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(747,`blockquote`)(748,`p`),Sk(749,`Necessário que a propriedade `),Qc(750,`code`),Sk(751,`p-required`),Kg(),Sk(752,` esteja habilitada.`),Kg()()()(),Qc(753,`tr`,46)(754,`td`,17)(755,`div`,26)(756,`span`,27),Sk(757,` p-field-format`),vu(758,`br`),Kg()()(),Qc(759,`td`,21)(760,`code`,47),Sk(761,`((value) => string) `),Kg(),Qc(762,`code`,48),Sk(763,` Array<string>`),Kg()(),Qc(764,`td`,23),Sk(765,`-`),Kg(),Qc(766,`td`,24)(767,`em`)(768,`strong`),Sk(769,`(opcional)`),Kg()(),Qc(770,`p`),Sk(771,`Formato de exibição do campo.`),Kg(),Qc(772,`p`),Sk(773,`Recebe uma função que deve retornar uma `),Qc(774,`em`),Sk(775,`string`),Kg(),Sk(776,` com o/os valores do objeto formatados para exibição, por exemplo:`),Kg(),Qc(777,`pre`)(778,`code`),Sk(779,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),Kg()(),Qc(780,`blockquote`)(781,`p`),Sk(782,`Esta propriedade sobrepõe o valor da propriedade `),Qc(783,`code`),Sk(784,`p-field-label`),Kg(),Sk(785,` na descrição do campo.`),Kg()(),Qc(786,`p`),Sk(787,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),Kg(),Qc(788,`pre`)(789,`code`),Sk(790,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),Kg()(),Qc(791,`blockquote`)(792,`p`),Sk(793,`Será utilizado `),Qc(794,`code`),Sk(795,`-`),Kg(),Sk(796,` como separador.`),Kg()()()(),Qc(797,`tr`,49)(798,`td`,17)(799,`div`,26)(800,`span`,27),Sk(801,` p-field-label`),vu(802,`br`),Kg()()(),Qc(803,`td`,21)(804,`code`,28),Sk(805,`string`),Kg()(),Qc(806,`td`,23),Sk(807,`-`),Kg(),Qc(808,`td`,24)(809,`p`),Sk(810,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),Kg()()(),Qc(811,`tr`,50)(812,`td`,17)(813,`div`,26)(814,`span`,27),Sk(815,` p-field-value`),vu(816,`br`),Kg()()(),Qc(817,`td`,21)(818,`code`,28),Sk(819,`string`),Kg()(),Qc(820,`td`,23),Sk(821,`-`),Kg(),Qc(822,`td`,24)(823,`p`),Sk(824,`Indica a coluna que será utilizada como valor do campo.`),Kg(),Qc(825,`blockquote`)(826,`p`),Sk(827,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),Kg()()()(),Qc(828,`tr`,51)(829,`td`,17)(830,`div`,26)(831,`span`,27),Sk(832,` p-filter-params`),vu(833,`br`),Kg()()(),Qc(834,`td`,21)(835,`code`,52),Sk(836,`any`),Kg()(),Qc(837,`td`,23),Sk(838,`-`),Kg(),Qc(839,`td`,24)(840,`em`)(841,`strong`),Sk(842,`(opcional)`),Kg()(),Qc(843,`p`),Sk(844,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Qc(845,`code`),Sk(846,`PoLookupFilter`),Kg(),Sk(847,`.`),Kg()()(),Qc(848,`tr`,53)(849,`td`,17)(850,`div`,26)(851,`span`,27),Sk(852,` p-filter-service`),vu(853,`br`),Kg()()(),Qc(854,`td`,21)(855,`code`,28),Sk(856,`string `),Kg(),Qc(857,`code`,54),Sk(858,` PoLookupFilter`),Kg()(),Qc(859,`td`,23),Sk(860,`-`),Kg(),Qc(861,`td`,24)(862,`p`),Sk(863,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Qc(864,`code`),Sk(865,`PoLookupFilter`),Kg(),Sk(866,` ou uma URL.`),Kg(),Qc(867,`p`),Sk(868,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),Kg(),Qc(869,`pre`)(870,`code`),Sk(871,`url + ?page=1&pageSize=20&filter=Peter
`),Kg()(),Qc(872,`p`),Sk(873,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Qc(874,`code`),Sk(875,`order`),Kg(),Sk(876,`, por exemplo:`),Kg(),Qc(877,`ul`)(878,`li`)(879,`p`),Sk(880,`Coluna decrescente:`),Kg(),Qc(881,`pre`)(882,`code`),Sk(883,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),Kg()()(),Qc(884,`li`)(885,`p`),Sk(886,`Coluna ascendente:`),Kg(),Qc(887,`pre`)(888,`code`),Sk(889,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),Kg()()()(),Qc(890,`p`),Sk(891,`Se for definido a propriedade `),Qc(892,`code`),Sk(893,`p-filter-params`),Kg(),Sk(894,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Qc(895,`code`),Sk(896,`{ age: 23 }`),Kg(),Sk(897,` a URL ficaria:`),Kg(),Qc(898,`pre`)(899,`code`),Sk(900,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Kg()(),Qc(901,`p`),Sk(902,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),Kg(),Qc(903,`pre`)(904,`code`),Sk(905,`model = 1234;

GET url/1234
`),Kg()(),Qc(906,`p`),Sk(907,`Caso estiver com múltipla seleção habilitada:`),Kg(),Qc(908,`pre`)(909,`code`),Sk(910,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),Kg()(),Qc(911,`blockquote`)(912,`p`),Sk(913,`Esta URL deve retornar e receber os dados no padrão de `),Qc(914,`a`,7),Sk(915,`API do PO UI`),Kg(),Sk(916,` e utiliza os valores
definidos nas propriedades `),Qc(917,`code`),Sk(918,`p-field-label`),Kg(),Sk(919,` e `),Qc(920,`code`),Sk(921,`p-field-value`),Kg(),Sk(922,` para a construção do `),Qc(923,`code`),Sk(924,`po-lookup`),Kg(),Sk(925,`.`),Kg()(),Qc(926,`p`),Sk(927,`Caso o usuário digite um valor e pressione a tecla `),Qc(928,`em`),Sk(929,`TAB`),Kg(),Sk(930,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Qc(931,`a`,55),Sk(932,`encodeURIComponent`),Kg(),Sk(933,`
e concatenado na URL da seguinte forma:`),Kg(),Qc(934,`pre`)(935,`code`),Sk(936,`url/valor%20que%20se%20deseja%20filtrar
`),Kg()(),Qc(937,`blockquote`)(938,`p`),Sk(939,`Quando informado um serviço que implemente a interface `),Qc(940,`code`),Sk(941,`PoLookupFilter`),Kg(),Sk(942,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),Kg()()()(),Qc(943,`tr`,56)(944,`td`,17)(945,`div`,26)(946,`span`,27),Sk(947,` p-help`),vu(948,`br`),Kg()()(),Qc(949,`td`,21)(950,`code`,28),Sk(951,`string`),Kg()(),Qc(952,`td`,23),Sk(953,`-`),Kg(),Qc(954,`td`,24)(955,`em`)(956,`strong`),Sk(957,`(opcional)`),Kg()(),Qc(958,`p`),Sk(959,`Texto de apoio do campo.`),Kg()()(),Qc(960,`tr`,57)(961,`td`,17)(962,`div`,26)(963,`span`,27),Sk(964,` p-hide-columns-manager`),vu(965,`br`),Kg()()(),Qc(966,`td`,21)(967,`code`,32),Sk(968,`boolean`),Kg()(),Qc(969,`td`,23)(970,`p`)(971,`code`),Sk(972,`false`),Kg()()(),Qc(973,`td`,24)(974,`em`)(975,`strong`),Sk(976,`(opcional)`),Kg()(),Qc(977,`p`),Sk(978,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),Kg()()(),Qc(979,`tr`,58)(980,`td`,17)(981,`div`,26)(982,`span`,27),Sk(983,` p-infinite-scroll`),vu(984,`br`),Kg()()(),Qc(985,`td`,21)(986,`code`,32),Sk(987,`boolean`),Kg()(),Qc(988,`td`,23)(989,`p`)(990,`code`),Sk(991,`false`),Kg()()(),Qc(992,`td`,24)(993,`em`)(994,`strong`),Sk(995,`(opcional)`),Kg()(),Qc(996,`p`),Sk(997,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),Kg()()(),Qc(998,`tr`,59)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),Sk(1002,` (p-keydown)`),vu(1003,`br`),Kg()()(),Qc(1004,`td`,21)(1005,`code`,22),Sk(1006,`EventEmitter`),Kg()(),Qc(1007,`td`,23),Sk(1008,`-`),Kg(),Qc(1009,`td`,24)(1010,`em`)(1011,`strong`),Sk(1012,`(opcional)`),Kg()(),Qc(1013,`p`),Sk(1014,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(1015,`code`),Sk(1016,`KeyboardEvent`),Kg(),Sk(1017,` com informações sobre a tecla.`),Kg()()(),Qc(1018,`tr`,60)(1019,`td`,17)(1020,`div`,26)(1021,`span`,27),Sk(1022,` p-label`),vu(1023,`br`),Kg()()(),Qc(1024,`td`,21)(1025,`code`,28),Sk(1026,`string`),Kg()(),Qc(1027,`td`,23),Sk(1028,`-`),Kg(),Qc(1029,`td`,24)(1030,`em`)(1031,`strong`),Sk(1032,`(opcional)`),Kg()(),Qc(1033,`p`),Sk(1034,`Label do campo.`),Kg(),Qc(1035,`blockquote`)(1036,`p`),Sk(1037,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Qc(1038,`code`),Sk(1039,`modalTitle`),Kg(),Sk(1040,` na propriedade `),Qc(1041,`code`),Sk(1042,`p-literals`),Kg(),Sk(1043,`.`),Kg()()()(),Qc(1044,`tr`,61)(1045,`td`,17)(1046,`div`,26)(1047,`span`,27),Sk(1048,` p-label-text-wrap`),vu(1049,`br`),Kg()()(),Qc(1050,`td`,21)(1051,`code`,32),Sk(1052,`boolean`),Kg()(),Qc(1053,`td`,23)(1054,`p`)(1055,`code`),Sk(1056,`false`),Kg()()(),Qc(1057,`td`,24)(1058,`em`)(1059,`strong`),Sk(1060,`(opcional)`),Kg()(),Qc(1061,`p`),Sk(1062,`Habilita a quebra automática do texto da propriedade `),Qc(1063,`code`),Sk(1064,`p-label`),Kg(),Sk(1065,`. Quando `),Qc(1066,`code`),Sk(1067,`p-label-text-wrap`),Kg(),Sk(1068,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(1069,`tr`,62)(1070,`td`,17)(1071,`div`,26)(1072,`span`,27),Sk(1073,` p-literals`),vu(1074,`br`),Kg()()(),Qc(1075,`td`,21)(1076,`code`,63),Sk(1077,`PoLookupLiterals`),Kg()(),Qc(1078,`td`,23),Sk(1079,`-`),Kg(),Qc(1080,`td`,24)(1081,`p`),Sk(1082,`Objeto com as literais usadas no `),Qc(1083,`code`),Sk(1084,`po-lookup`),Kg(),Sk(1085,`.`),Kg(),Qc(1086,`p`),Sk(1087,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(1088,`pre`)(1089,`code`),Sk(1090,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),Kg()(),Qc(1091,`p`),Sk(1092,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(1093,`pre`)(1094,`code`),Sk(1095,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),Kg()(),Qc(1096,`p`),Sk(1097,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(1098,`pre`)(1099,`code`),Sk(1100,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),Kg()(),Qc(1101,`blockquote`)(1102,`p`),Sk(1103,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(1104,`a`,64)(1105,`code`),Sk(1106,`PoI18nService`),Kg()(),Sk(1107,` ou do browser.`),Kg()()()(),Qc(1108,`tr`,65)(1109,`td`,17)(1110,`div`,26)(1111,`span`,27),Sk(1112,` p-loading`),vu(1113,`br`),Kg()()(),Qc(1114,`td`,21)(1115,`code`,32),Sk(1116,`boolean`),Kg()(),Qc(1117,`td`,23)(1118,`p`)(1119,`code`),Sk(1120,`false`),Kg()()(),Qc(1121,`td`,24)(1122,`em`)(1123,`strong`),Sk(1124,`(opcional)`),Kg()(),Qc(1125,`p`),Sk(1126,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(1127,`tr`,66)(1128,`td`,17)(1129,`div`,26)(1130,`span`,27),Sk(1131,` p-multiple`),vu(1132,`br`),Kg()()(),Qc(1133,`td`,21)(1134,`code`,32),Sk(1135,`boolean`),Kg()(),Qc(1136,`td`,23)(1137,`p`)(1138,`code`),Sk(1139,`false`),Kg()()(),Qc(1140,`td`,24)(1141,`em`)(1142,`strong`),Sk(1143,`(opcional)`),Kg()(),Qc(1144,`p`),Sk(1145,`Permite a seleção de múltiplos itens.`),Kg(),Qc(1146,`blockquote`)(1147,`p`),Sk(1148,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Qc(1149,`code`),Sk(1150,`[ 12345, 67890 ]`),Kg()()()()(),Qc(1151,`tr`,67)(1152,`td`,17)(1153,`div`,26)(1154,`span`,27),Sk(1155,` name`),vu(1156,`br`),Kg()()(),Qc(1157,`td`,21)(1158,`code`,28),Sk(1159,`string`),Kg()(),Qc(1160,`td`,23),Sk(1161,`-`),Kg(),Qc(1162,`td`,24)(1163,`p`),Sk(1164,`Nome e Id do componente.`),Kg()()(),Qc(1165,`tr`,68)(1166,`td`,17)(1167,`div`,26)(1168,`span`,27),Sk(1169,` p-no-autocomplete`),vu(1170,`br`),Kg()()(),Qc(1171,`td`,21)(1172,`code`,32),Sk(1173,`boolean`),Kg()(),Qc(1174,`td`,23)(1175,`p`)(1176,`code`),Sk(1177,`false`),Kg()()(),Qc(1178,`td`,24)(1179,`em`)(1180,`strong`),Sk(1181,`(opcional)`),Kg()(),Qc(1182,`p`),Sk(1183,`Define a propriedade nativa `),Qc(1184,`code`),Sk(1185,`autocomplete`),Kg(),Sk(1186,` do campo como `),Qc(1187,`code`),Sk(1188,`off`),Kg(),Sk(1189,`.`),Kg()()(),Qc(1190,`tr`,69)(1191,`td`,17)(1192,`div`,18)(1193,`span`,19),Sk(1194,` (p-error)`),vu(1195,`br`),Kg()()(),Qc(1196,`td`,21)(1197,`code`,22),Sk(1198,`EventEmitter`),Kg()(),Qc(1199,`td`,23),Sk(1200,`-`),Kg(),Qc(1201,`td`,24)(1202,`p`),Sk(1203,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),Kg()()(),Qc(1204,`tr`,70)(1205,`td`,17)(1206,`div`,26)(1207,`span`,27),Sk(1208,` p-optional`),vu(1209,`br`),Kg()()(),Qc(1210,`td`,21)(1211,`code`,32),Sk(1212,`boolean`),Kg()(),Qc(1213,`td`,23)(1214,`p`)(1215,`code`),Sk(1216,`false`),Kg()()(),Qc(1217,`td`,24)(1218,`em`)(1219,`strong`),Sk(1220,`(opcional)`),Kg()(),Qc(1221,`p`),Sk(1222,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(1223,`blockquote`)(1224,`p`),Sk(1225,`Não será exibida a indicação se:`),Kg()(),Qc(1226,`ul`)(1227,`li`),Sk(1228,`O campo conter `),Qc(1229,`code`),Sk(1230,`p-required`),Kg(),Sk(1231,`;`),Kg(),Qc(1232,`li`),Sk(1233,`Não possuir `),Qc(1234,`code`),Sk(1235,`p-help`),Kg(),Sk(1236,` e/ou `),Qc(1237,`code`),Sk(1238,`p-label`),Kg(),Sk(1239,`.`),Kg()()()(),Qc(1240,`tr`,71)(1241,`td`,17)(1242,`div`,26)(1243,`span`,27),Sk(1244,` p-placeholder`),vu(1245,`br`),Kg()()(),Qc(1246,`td`,21)(1247,`code`,28),Sk(1248,`string`),Kg()(),Qc(1249,`td`,23),Sk(1250,`-`),Kg(),Qc(1251,`td`,24)(1252,`p`),Sk(1253,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Qc(1254,`tr`,72)(1255,`td`,17)(1256,`div`,26)(1257,`span`,27),Sk(1258,` p-helper`),vu(1259,`br`),Kg()()(),Qc(1260,`td`,21)(1261,`code`,73),Sk(1262,`PoHelperOptions `),Kg(),Qc(1263,`code`,28),Sk(1264,` string`),Kg()(),Qc(1265,`td`,23),Sk(1266,`-`),Kg(),Qc(1267,`td`,24)(1268,`em`)(1269,`strong`),Sk(1270,`(opcional)`),Kg()(),Qc(1271,`p`),Sk(1272,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1273,`code`),Sk(1274,`p-label`),Kg(),Sk(1275,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1276,`code`),Sk(1277,`p-label`),Kg(),Sk(1278,`.`),Kg(),Qc(1279,`blockquote`)(1280,`p`),Sk(1281,`Para mais informações acesse: `),Qc(1282,`a`,74),Sk(1283,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1284,`.`),Kg()(),Qc(1285,`blockquote`)(1286,`p`),Sk(1287,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1288,`code`),Sk(1289,`p-additional-help-tooltip`),Kg(),Sk(1290,` e `),Qc(1291,`code`),Sk(1292,`p-additional-help`),Kg(),Sk(1293,`) será ignorado.`),Kg()()()(),Qc(1294,`tr`,75)(1295,`td`,17)(1296,`div`,26)(1297,`span`,27),Sk(1298,` p-required`),vu(1299,`br`),Kg()()(),Qc(1300,`td`,21)(1301,`code`,32),Sk(1302,`boolean`),Kg()(),Qc(1303,`td`,23)(1304,`p`)(1305,`code`),Sk(1306,`false`),Kg()()(),Qc(1307,`td`,24)(1308,`em`)(1309,`strong`),Sk(1310,`(opcional)`),Kg()(),Qc(1311,`p`),Sk(1312,`Define que o campo será obrigatório.`),Kg(),Qc(1313,`blockquote`)(1314,`p`),Sk(1315,`Esta propriedade é desconsiderada quando o input está desabilitado `),Qc(1316,`code`),Sk(1317,`(p-disabled)`),Kg(),Sk(1318,`.`),Kg()()()(),Qc(1319,`tr`,76)(1320,`td`,17)(1321,`div`,18)(1322,`span`,19),Sk(1323,` (p-selected)`),vu(1324,`br`),Kg()()(),Qc(1325,`td`,21)(1326,`code`,22),Sk(1327,`EventEmitter`),Kg()(),Qc(1328,`td`,23),Sk(1329,`-`),Kg(),Qc(1330,`td`,24)(1331,`em`)(1332,`strong`),Sk(1333,`(opcional)`),Kg()(),Qc(1334,`p`),Sk(1335,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),Kg()()(),Qc(1336,`tr`,77)(1337,`td`,17)(1338,`div`,26)(1339,`span`,27),Sk(1340,` p-show-required`),vu(1341,`br`),Kg()()(),Qc(1342,`td`,21)(1343,`code`,32),Sk(1344,`boolean`),Kg()(),Qc(1345,`td`,23),Sk(1346,`-`),Kg(),Qc(1347,`td`,24)(1348,`p`),Sk(1349,`Define se a indicação de campo obrigatório seré exibida.`),Kg(),Qc(1350,`blockquote`)(1351,`p`),Sk(1352,`Não será exibida a indicação se:`),Kg()(),Qc(1353,`ul`)(1354,`li`),Sk(1355,`Não possuir `),Qc(1356,`code`),Sk(1357,`p-help`),Kg(),Sk(1358,` e/ou `),Qc(1359,`code`),Sk(1360,`p-label`),Kg(),Sk(1361,`.`),Kg()()()(),Qc(1362,`tr`,78)(1363,`td`,17)(1364,`div`,26)(1365,`span`,27),Sk(1366,` p-size`),vu(1367,`br`),Kg()()(),Qc(1368,`td`,21)(1369,`code`,28),Sk(1370,`string`),Kg()(),Qc(1371,`td`,23)(1372,`p`)(1373,`code`),Sk(1374,`medium`),Kg()()(),Qc(1375,`td`,24)(1376,`em`)(1377,`strong`),Sk(1378,`(opcional)`),Kg()(),Qc(1379,`p`),Sk(1380,`Define o tamanho do componente:`),Kg(),Qc(1381,`ul`)(1382,`li`)(1383,`code`),Sk(1384,`small`),Kg(),Sk(1385,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1386,`li`)(1387,`code`),Sk(1388,`medium`),Kg(),Sk(1389,`: altura do input como 44px.`),Kg()(),Qc(1390,`blockquote`)(1391,`p`),Sk(1392,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1393,`code`),Sk(1394,`medium`),Kg(),Sk(1395,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1396,`a`,79),Sk(1397,`po-theme`),Kg(),Sk(1398,`.`),Kg()()()(),Qc(1399,`tr`,80)(1400,`td`,17)(1401,`div`,26)(1402,`span`,27),Sk(1403,` p-spacing`),vu(1404,`br`),Kg()()(),Qc(1405,`td`,21)(1406,`code`,28),Sk(1407,`string`),Kg()(),Qc(1408,`td`,23)(1409,`p`)(1410,`code`),Sk(1411,`medium`),Kg()()(),Qc(1412,`td`,24)(1413,`em`)(1414,`strong`),Sk(1415,`(opcional)`),Kg()(),Qc(1416,`p`),Sk(1417,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Qc(1418,`strong`),Sk(1419,`PoTableColumnSpacing`),Kg(),Sk(1420,`.`),Kg(),Qc(1421,`blockquote`)(1422,`p`),Sk(1423,`Em nível de acessibilidade `),Qc(1424,`strong`),Sk(1425,`AA`),Kg(),Sk(1426,`, caso o valor de `),Qc(1427,`code`),Sk(1428,`p-spacing`),Kg(),Sk(1429,` não seja definido, o valor padrão será `),Qc(1430,`code`),Sk(1431,`extraSmall`),Kg(),Sk(1432,`
nos seguintes cen\xE1rios:`),Kg(),Qc(1433,`ul`)(1434,`li`),Sk(1435,`Quando o valor de `),Qc(1436,`code`),Sk(1437,`p-size`),Kg(),Sk(1438,` for `),Qc(1439,`code`),Sk(1440,`small`),Kg(),Sk(1441,`;`),Kg(),Qc(1442,`li`),Sk(1443,`Quando o valor padrão dos componentes for configurado como `),Qc(1444,`code`),Sk(1445,`small`),Kg(),Sk(1446,` no
`),Qc(1447,`a`,79),Sk(1448,`serviço de tema`),Kg(),Sk(1449,`.`),Kg()()()()(),Qc(1450,`tr`,81)(1451,`td`,17)(1452,`div`,26)(1453,`span`,27),Sk(1454,` p-text-wrap`),vu(1455,`br`),Kg()()(),Qc(1456,`td`,21)(1457,`code`,32),Sk(1458,`boolean`),Kg()(),Qc(1459,`td`,23)(1460,`p`)(1461,`code`),Sk(1462,`false`),Kg()()(),Qc(1463,`td`,24)(1464,`em`)(1465,`strong`),Sk(1466,`(opcional)`),Kg()(),Qc(1467,`p`),Sk(1468,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg(),Qc(1469,`p`),Sk(1470,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),Kg(),Qc(1471,`blockquote`)(1472,`p`),Sk(1473,`Incompatível com `),Qc(1474,`code`),Sk(1475,`virtual-scroll`),Kg(),Sk(1476,`, que requer altura fixa nas linhas.`),Kg()()()(),Qc(1477,`tr`,82)(1478,`td`,17)(1479,`div`,26)(1480,`span`,27),Sk(1481,` p-virtual-scroll`),vu(1482,`br`),Kg()()(),Qc(1483,`td`,21)(1484,`code`,32),Sk(1485,`boolean`),Kg()(),Qc(1486,`td`,23)(1487,`p`)(1488,`code`),Sk(1489,`true`),Kg()()(),Qc(1490,`td`,24)(1491,`em`)(1492,`strong`),Sk(1493,`(opcional)`),Kg()(),Qc(1494,`p`),Sk(1495,`Habilita o `),Qc(1496,`code`),Sk(1497,`virtual-scroll`),Kg(),Sk(1498,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Qc(1499,`code`),Sk(1500,`virtual-scroll`),Kg(),Sk(1501,` será ativado automaticamente.`),Kg(),Qc(1502,`blockquote`)(1503,`p`),Sk(1504,`Incompatível com `),Qc(1505,`code`),Sk(1506,`p-text-wrap`),Kg(),Sk(1507,` e `),Qc(1508,`code`),Sk(1509,`master-detail`),Kg(),Sk(1510,`, pois o `),Qc(1511,`code`),Sk(1512,`virtual-scroll`),Kg(),Sk(1513,` exige altura fixa nas linhas.`),Kg()()()()(),Qc(1514,`h3`,12),Sk(1515,`Métodos`),Kg(),Qc(1516,`table`,83)(1517,`tr`,84)(1518,`th`,85)(1519,`div`,26)(1520,`h4`)(1521,`span`,27),Sk(1522,` focus `),Kg()()()()(),Qc(1523,`tr`,24)(1524,`td`,24)(1525,`p`),Sk(1526,`Função que atribui foco ao componente.`),Kg(),Qc(1527,`p`),Sk(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1529,`pre`)(1530,`code`),Sk(1531,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),Kg()()()()(),vu(1532,`br`),Qc(1533,`table`,86)(1534,`tr`,84)(1535,`th`,85)(1536,`div`,26)(1537,`h4`)(1538,`span`,27),Sk(1539,` showAdditionalHelp `),Kg()()()()(),Qc(1540,`tr`,24)(1541,`td`,24)(1542,`p`),Sk(1543,`Método que exibe `),Qc(1544,`code`),Sk(1545,`p-helper`),Kg(),Sk(1546,` ou executa a ação definida em `),Qc(1547,`code`),Sk(1548,`p-helper{eventOnClick}`),Kg(),Sk(1549,` ou em `),Qc(1550,`code`),Sk(1551,`p-additionalHelp`),Kg(),Sk(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1553,`code`),Sk(1554,`p-keydown`),Kg(),Sk(1555,`.`),Kg(),Qc(1556,`blockquote`)(1557,`p`),Sk(1558,`Exibe ou oculta o conteúdo do componente `),Qc(1559,`code`),Sk(1560,`po-helper`),Kg(),Sk(1561,` quando o componente estiver com foco.`),Kg()(),Qc(1562,`pre`)(1563,`code`),Sk(1564,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),Kg()(),Qc(1565,`pre`)(1566,`code`),Sk(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1568,`br`),Qc(1569,`h3`),Sk(1570,`Interfaces`),Kg(),Qc(1571,`h4`,87)(1572,`code`,5),Sk(1573,`PoLookupAdvancedFilter`),Kg()(),Qc(1574,`div`,2)(1575,`p`),Sk(1576,`Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente na busca avançada.`),Kg()(),Qc(1577,`h4`,12),Sk(1578,`Propriedades`),Kg(),Qc(1579,`table`,13)(1580,`tr`,14)(1581,`th`,15),Sk(1582,`Nome`),Kg(),Qc(1583,`th`,15),Sk(1584,`Tipo`),Kg(),Qc(1585,`th`,15),Sk(1586,`Descrição`),Kg()(),Qc(1587,`tr`,88)(1588,`td`,17)(1589,`div`,26)(1590,`span`,27),Sk(1591,` additionalHelp`),vu(1592,`br`),Kg()()(),Qc(1593,`td`,21)(1594,`code`,89),Sk(1595,`Function`),Kg()(),Qc(1596,`td`,24)(1597,`em`)(1598,`strong`),Sk(1599,`(opcional)`),Kg()(),Qc(1600,`p`),Sk(1601,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(1602,`blockquote`)(1603,`p`),Sk(1604,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(1605,`tr`,90)(1606,`td`,17)(1607,`div`,26)(1608,`span`,27),Sk(1609,` additionalHelpTooltip`),vu(1610,`br`),Kg()()(),Qc(1611,`td`,21)(1612,`code`,28),Sk(1613,`string`),Kg()(),Qc(1614,`td`,24)(1615,`em`)(1616,`strong`),Sk(1617,`(opcional)`),Kg()(),Qc(1618,`p`),Sk(1619,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(1620,`code`),Sk(1621,`po-helper`),Kg(),Sk(1622,`.
`),Qc(1623,`strong`),Sk(1624,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(1625,`blockquote`)(1626,`p`),Sk(1627,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(1628,`tr`,91)(1629,`td`,17)(1630,`div`,26)(1631,`span`,27),Sk(1632,` advancedFilters`),vu(1633,`br`),Kg()()(),Qc(1634,`td`,21)(1635,`code`,30),Sk(1636,`Array<PoLookupAdvancedFilter>`),Kg()(),Qc(1637,`td`,24)(1638,`em`)(1639,`strong`),Sk(1640,`(opcional)`),Kg()(),Qc(1641,`p`),Sk(1642,`Lista de objetos dos campos que serão criados na busca avançada.`),Kg(),Qc(1643,`blockquote`)(1644,`p`),Sk(1645,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Kg()(),Qc(1646,`p`),Sk(1647,`Exemplo de URL com busca avançada:`),Kg(),Qc(1648,`p`)(1649,`code`),Sk(1650,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),Kg()(),Qc(1651,`p`),Sk(1652,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),Kg(),Qc(1653,`p`)(1654,`code`),Sk(1655,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),Kg()()()(),Qc(1656,`tr`,92)(1657,`td`,17)(1658,`div`,26)(1659,`span`,27),Sk(1660,` appendBox`),vu(1661,`br`),Kg()()(),Qc(1662,`td`,21)(1663,`code`,32),Sk(1664,`boolean`),Kg()(),Qc(1665,`td`,24)(1666,`em`)(1667,`strong`),Sk(1668,`(opcional)`),Kg()(),Qc(1669,`p`),Sk(1670,`Define que o `),Qc(1671,`code`),Sk(1672,`listbox`),Kg(),Sk(1673,` e/ou popover (`),Qc(1674,`code`),Sk(1675,`p-helper`),Kg(),Sk(1676,` e/ou `),Qc(1677,`code`),Sk(1678,`p-error-limit`),Kg(),Sk(1679,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Qc(1680,`blockquote`)(1681,`p`),Sk(1682,`Quando utilizado com `),Qc(1683,`code`),Sk(1684,`p-helper`),Kg(),Sk(1685,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(1686,`tr`,93)(1687,`td`,17)(1688,`div`,26)(1689,`span`,27),Sk(1690,` autoHeight`),vu(1691,`br`),Kg()()(),Qc(1692,`td`,21)(1693,`code`,32),Sk(1694,`boolean`),Kg()(),Qc(1695,`td`,24)(1696,`em`)(1697,`strong`),Sk(1698,`(opcional)`),Kg()(),Qc(1699,`p`),Sk(1700,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),Kg(),Qc(1701,`p`)(1702,`strong`),Sk(1703,`Componentes compatíveis:`),Kg(),Qc(1704,`code`),Sk(1705,`po-multiselect`),Kg(),Sk(1706,`, `),Qc(1707,`code`),Sk(1708,`po-lookup`),Kg(),Sk(1709,`.`),Kg()()(),Qc(1710,`tr`,94)(1711,`td`,17)(1712,`div`,26)(1713,`span`,27),Sk(1714,` autoUpload`),vu(1715,`br`),Kg()()(),Qc(1716,`td`,21)(1717,`code`,32),Sk(1718,`boolean`),Kg()(),Qc(1719,`td`,24)(1720,`em`)(1721,`strong`),Sk(1722,`(opcional)`),Kg()(),Qc(1723,`p`),Sk(1724,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Kg(),Qc(1725,`p`)(1726,`strong`),Sk(1727,`Componente compatível`),Kg(),Sk(1728,`: `),Qc(1729,`code`),Sk(1730,`po-upload`),Kg()()()(),Qc(1731,`tr`,95)(1732,`td`,17)(1733,`div`,26)(1734,`span`,27),Sk(1735,` booleanFalse`),vu(1736,`br`),Kg()()(),Qc(1737,`td`,21)(1738,`code`,28),Sk(1739,`string`),Kg()(),Qc(1740,`td`,24)(1741,`em`)(1742,`strong`),Sk(1743,`(opcional)`),Kg()(),Qc(1744,`p`),Sk(1745,`Texto exibido quando o valor do componente for `),Qc(1746,`em`),Sk(1747,`false`),Kg(),Sk(1748,`.`),Kg()()(),Qc(1749,`tr`,96)(1750,`td`,17)(1751,`div`,26)(1752,`span`,27),Sk(1753,` booleanTrue`),vu(1754,`br`),Kg()()(),Qc(1755,`td`,21)(1756,`code`,28),Sk(1757,`string`),Kg()(),Qc(1758,`td`,24)(1759,`em`)(1760,`strong`),Sk(1761,`(opcional)`),Kg()(),Qc(1762,`p`),Sk(1763,`Texto exibido quando o valor do componente for `),Qc(1764,`em`),Sk(1765,`true`),Kg(),Sk(1766,`.`),Kg()()(),Qc(1767,`tr`,97)(1768,`td`,17)(1769,`div`,26)(1770,`span`,27),Sk(1771,` changeOnEnter`),vu(1772,`br`),Kg()()(),Qc(1773,`td`,21)(1774,`code`,32),Sk(1775,`boolean`),Kg()(),Qc(1776,`td`,24)(1777,`em`)(1778,`strong`),Sk(1779,`(opcional)`),Kg()(),Qc(1780,`p`),Sk(1781,`Indica que o evento `),Qc(1782,`code`),Sk(1783,`p-change`),Kg(),Sk(1784,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Qc(1785,`code`),Sk(1786,`po-combo`),Kg(),Sk(1787,`.`),Kg()()(),Qc(1788,`tr`,98)(1789,`td`,17)(1790,`div`,26)(1791,`span`,27),Sk(1792,` changeVisibleColumns`),vu(1793,`br`),Kg()()(),Qc(1794,`td`,21)(1795,`code`,89),Sk(1796,`Function`),Kg()(),Qc(1797,`td`,24)(1798,`em`)(1799,`strong`),Sk(1800,`(opcional)`),Kg()(),Qc(1801,`p`),Sk(1802,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Kg(),Qc(1803,`p`),Sk(1804,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg(),Qc(1805,`p`)(1806,`strong`),Sk(1807,`Componente compatível`),Kg(),Sk(1808,`: `),Qc(1809,`code`),Sk(1810,`po-lookup`),Kg()()()(),Qc(1811,`tr`,99)(1812,`td`,17)(1813,`div`,26)(1814,`span`,27),Sk(1815,` clean`),vu(1816,`br`),Kg()()(),Qc(1817,`td`,21)(1818,`code`,32),Sk(1819,`boolean`),Kg()(),Qc(1820,`td`,24)(1821,`em`)(1822,`strong`),Sk(1823,`(opcional)`),Kg()(),Qc(1824,`p`),Sk(1825,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg(),Qc(1826,`p`)(1827,`strong`),Sk(1828,`Componentes compatíveis:`),Kg(),Qc(1829,`code`),Sk(1830,`po-datepicker`),Kg(),Sk(1831,`, `),Qc(1832,`code`),Sk(1833,`po-datepicker-range`),Kg(),Sk(1834,`, `),Qc(1835,`code`),Sk(1836,`po-input`),Kg(),Sk(1837,`, `),Qc(1838,`code`),Sk(1839,`po-number`),Kg(),Sk(1840,`, `),Qc(1841,`code`),Sk(1842,`po-decimal`),Kg(),Sk(1843,`,
`),Qc(1844,`code`),Sk(1845,`po-combo`),Kg(),Sk(1846,`, `),Qc(1847,`code`),Sk(1848,`po-lookup`),Kg(),Sk(1849,`, `),Qc(1850,`code`),Sk(1851,`po-password`),Kg(),Sk(1852,`, `),Qc(1853,`code`),Sk(1854,`po-timepicker`),Kg(),Sk(1855,`.`),Kg()()(),Qc(1856,`tr`,100)(1857,`td`,17)(1858,`div`,26)(1859,`span`,27),Sk(1860,` columnRestoreManager`),vu(1861,`br`),Kg()()(),Qc(1862,`td`,21)(1863,`code`,89),Sk(1864,`Function`),Kg()(),Qc(1865,`td`,24)(1866,`em`)(1867,`strong`),Sk(1868,`(opcional)`),Kg()(),Qc(1869,`p`),Sk(1870,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Kg(),Qc(1871,`p`),Sk(1872,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg(),Qc(1873,`p`)(1874,`strong`),Sk(1875,`Componente compatível`),Kg(),Sk(1876,`: `),Qc(1877,`code`),Sk(1878,`po-lookup`),Kg()()()(),Qc(1879,`tr`,101)(1880,`td`,17)(1881,`div`,26)(1882,`span`,27),Sk(1883,` columns`),vu(1884,`br`),Kg()()(),Qc(1885,`td`,21)(1886,`code`,41),Sk(1887,`Array<PoLookupColumn> `),Kg(),Qc(1888,`code`,102),Sk(1889,` number`),Kg()(),Qc(1890,`td`,24)(1891,`em`)(1892,`strong`),Sk(1893,`(opcional)`),Kg()(),Qc(1894,`p`),Sk(1895,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Qc(1896,`code`),Sk(1897,`searchService`),Kg(),Sk(1898,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Qc(1899,`a`,103)(1900,`code`),Sk(1901,`PoLookupColumn`),Kg()(),Sk(1902,`.`),Kg(),Qc(1903,`blockquote`)(1904,`p`),Sk(1905,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Qc(1906,`em`),Sk(1907,`label`),Kg(),Sk(1908,` e `),Qc(1909,`em`),Sk(1910,`value`),Kg(),Sk(1911,` para valores
de tela e do model respectivamente.`),Kg()(),Qc(1912,`p`)(1913,`strong`),Sk(1914,`Componentes compatíveis:`),Kg(),Qc(1915,`code`),Sk(1916,`po-radio-group`),Kg(),Sk(1917,`, `),Qc(1918,`code`),Sk(1919,`po-lookup`),Kg(),Sk(1920,`, `),Qc(1921,`code`),Sk(1922,`po-checkbox-group`),Kg(),Sk(1923,`.`),Kg()()(),Qc(1924,`tr`,104)(1925,`td`,17)(1926,`div`,26)(1927,`span`,27),Sk(1928,` compactLabel`),vu(1929,`br`),Kg()()(),Qc(1930,`td`,21)(1931,`code`,32),Sk(1932,`boolean`),Kg()(),Qc(1933,`td`,24)(1934,`em`)(1935,`strong`),Sk(1936,`(opcional)`),Kg()(),Qc(1937,`p`),Sk(1938,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(1939,`p`),Sk(1940,`Quando habilitado (`),Qc(1941,`code`),Sk(1942,`true`),Kg(),Sk(1943,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(1944,`ul`)(1945,`li`)(1946,`code`),Sk(1947,`po-label`),Kg()(),Qc(1948,`li`)(1949,`code`),Sk(1950,`p-requirement (showRequired)`),Kg()(),Qc(1951,`li`)(1952,`code`),Sk(1953,`po-helper`),Kg()()(),Qc(1954,`p`),Sk(1955,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(1956,`p`),Sk(1957,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(1958,`ul`)(1959,`li`)(1960,`code`),Sk(1961,`--field-container-title-justify`),Kg()(),Qc(1962,`li`)(1963,`code`),Sk(1964,`--field-container-title-flex`),Kg()()(),Qc(1965,`p`),Sk(1966,`Exemplo:`),Kg(),Qc(1967,`pre`)(1968,`code`),Sk(1969,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(1970,`p`),Sk(1971,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(1972,`tr`,105)(1973,`td`,17)(1974,`div`,26)(1975,`span`,27),Sk(1976,` container`),vu(1977,`br`),Kg()()(),Qc(1978,`td`,21)(1979,`code`,28),Sk(1980,`string`),Kg()(),Qc(1981,`td`,24)(1982,`em`)(1983,`strong`),Sk(1984,`(opcional)`),Kg()(),Qc(1985,`p`),Sk(1986,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),Kg(),Qc(1987,`p`),Sk(1988,`Está propriedade é do tipo string, o valor que será titulo do contianer`),Kg()()(),Qc(1989,`tr`,106)(1990,`td`,17)(1991,`div`,26)(1992,`span`,27),Sk(1993,` customAction`),vu(1994,`br`),Kg()()(),Qc(1995,`td`,21)(1996,`code`,107),Sk(1997,`PoProgressAction`),Kg()(),Qc(1998,`td`,24)(1999,`em`)(2e3,`strong`),Sk(2001,`(opcional)`),Kg()(),Qc(2002,`p`),Sk(2003,`Define uma ação personalizada no componente `),Qc(2004,`code`),Sk(2005,`po-upload`),Kg(),Sk(2006,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Kg(),Qc(2007,`p`)(2008,`strong`),Sk(2009,`Componente compatível`),Kg(),Sk(2010,`: `),Qc(2011,`code`),Sk(2012,`po-upload`),Kg(),Sk(2013,`,`),Kg(),Qc(2014,`p`)(2015,`strong`),Sk(2016,`Exemplo de configuração`),Kg(),Sk(2017,`:`),Kg(),Qc(2018,`pre`)(2019,`code`,108),Sk(2020,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),Kg()()()(),Qc(2021,`tr`,109)(2022,`td`,17)(2023,`div`,26)(2024,`span`,27),Sk(2025,` customActionClick`),vu(2026,`br`),Kg()()(),Qc(2027,`td`,21)(2028,`code`,110),Sk(2029,`(file: PoUploadFile) => void`),Kg()(),Qc(2030,`td`,24)(2031,`em`)(2032,`strong`),Sk(2033,`(opcional)`),Kg()(),Qc(2034,`p`),Sk(2035,`Evento emitido ao clicar na ação personalizada configurada no `),Qc(2036,`code`),Sk(2037,`p-custom-action`),Kg(),Sk(2038,`.`),Kg(),Qc(2039,`p`)(2040,`strong`),Sk(2041,`Componente compatível`),Kg(),Sk(2042,`: `),Qc(2043,`code`),Sk(2044,`po-upload`),Kg(),Sk(2045,`,`),Kg(),Qc(2046,`p`),Sk(2047,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Kg(),Qc(2048,`p`)(2049,`strong`),Sk(2050,`Parâmetro do evento`),Kg(),Sk(2051,`:`),Kg(),Qc(2052,`ul`)(2053,`li`)(2054,`code`),Sk(2055,`file`),Kg(),Sk(2056,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Qc(2057,`code`),Sk(2058,`PoUploadFile`),Kg(),Sk(2059,` e contém informações sobre o arquivo, como nome, status e progresso.`),Kg()(),Qc(2060,`p`)(2061,`strong`),Sk(2062,`Exemplo de uso`),Kg(),Sk(2063,`:`),Kg(),Qc(2064,`pre`)(2065,`code`,108),Sk(2066,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),Kg()()()(),Qc(2067,`tr`,111)(2068,`td`,17)(2069,`div`,26)(2070,`span`,27),Sk(2071,` debounceTime`),vu(2072,`br`),Kg()()(),Qc(2073,`td`,21)(2074,`code`,102),Sk(2075,`number`),Kg()(),Qc(2076,`td`,24)(2077,`em`)(2078,`strong`),Sk(2079,`(opcional)`),Kg()(),Qc(2080,`p`),Sk(2081,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Qc(2082,`code`),Sk(2083,`p-filter-service`),Kg(),Sk(2084,`).`),Kg(),Qc(2085,`p`)(2086,`strong`),Sk(2087,`Componentes compatíveis:`),Kg(),Qc(2088,`code`),Sk(2089,`po-combo`),Kg(),Sk(2090,`, `),Qc(2091,`code`),Sk(2092,`po-multiselect`),Kg(),Sk(2093,`.`),Kg()()(),Qc(2094,`tr`,112)(2095,`td`,17)(2096,`div`,26)(2097,`span`,27),Sk(2098,` decimalsLength`),vu(2099,`br`),Kg()()(),Qc(2100,`td`,21)(2101,`code`,102),Sk(2102,`number`),Kg()(),Qc(2103,`td`,24)(2104,`em`)(2105,`strong`),Sk(2106,`(opcional)`),Kg()(),Qc(2107,`p`),Sk(2108,`Quantidade máxima de casas decimais.`),Kg(),Qc(2109,`blockquote`)(2110,`p`),Sk(2111,`Esta propriedade só pode ser utilizada quando o `),Qc(2112,`code`),Sk(2113,`type`),Kg(),Sk(2114,` for `),Qc(2115,`em`),Sk(2116,`currency`),Kg(),Sk(2117,` ou `),Qc(2118,`em`),Sk(2119,`decimal`),Kg(),Sk(2120,`.`),Kg()(),Qc(2121,`blockquote`)(2122,`p`),Sk(2123,`Quando utilizado com `),Qc(2124,`code`),Sk(2125,`displayFormat`),Kg(),Sk(2126,`, será respeitado o valor `),Qc(2127,`strong`),Sk(2128,`mais restritivo`),Kg(),Sk(2129,` entre esta propriedade e o número de casas decimais definido no formato.`),Kg()()()(),Qc(2130,`tr`,113)(2131,`td`,17)(2132,`div`,26)(2133,`span`,27),Sk(2134,` directory`),vu(2135,`br`),Kg()()(),Qc(2136,`td`,21)(2137,`code`,32),Sk(2138,`boolean`),Kg()(),Qc(2139,`td`,24)(2140,`em`)(2141,`strong`),Sk(2142,`(opcional)`),Kg()(),Qc(2143,`p`),Sk(2144,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Kg(),Qc(2145,`blockquote`)(2146,`p`),Sk(2147,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Kg()(),Qc(2148,`blockquote`)(2149,`p`),Sk(2150,`Definição não suportada pelo browser `),Qc(2151,`strong`),Sk(2152,`Internet Explorer`),Kg(),Sk(2153,`, todavia será possível a seleção de arquivos padrão.`),Kg()(),Qc(2154,`p`)(2155,`strong`),Sk(2156,`Componente compatível`),Kg(),Sk(2157,`: `),Qc(2158,`code`),Sk(2159,`po-upload`),Kg()()()(),Qc(2160,`tr`,114)(2161,`td`,17)(2162,`div`,26)(2163,`span`,27),Sk(2164,` disabled`),vu(2165,`br`),Kg()()(),Qc(2166,`td`,21)(2167,`code`,32),Sk(2168,`boolean`),Kg()(),Qc(2169,`td`,24)(2170,`em`)(2171,`strong`),Sk(2172,`(opcional)`),Kg()(),Qc(2173,`p`),Sk(2174,`Desabilita o campo caso informar o valor `),Qc(2175,`em`),Sk(2176,`true`),Kg(),Sk(2177,`.`),Kg()()(),Qc(2178,`tr`,115)(2179,`td`,17)(2180,`div`,26)(2181,`span`,27),Sk(2182,` disabledInitFilter`),vu(2183,`br`),Kg()()(),Qc(2184,`td`,21)(2185,`code`,32),Sk(2186,`boolean`),Kg()(),Qc(2187,`td`,24)(2188,`em`)(2189,`strong`),Sk(2190,`(opcional)`),Kg()(),Qc(2191,`p`),Sk(2192,`Desabilita o filtro inicial no serviço do `),Qc(2193,`code`),Sk(2194,`po-combo`),Kg(),Sk(2195,`, que é executado no primeiro clique no campo.`),Kg()()(),Qc(2196,`tr`,116)(2197,`td`,17)(2198,`div`,26)(2199,`span`,27),Sk(2200,` disabledTabFilter`),vu(2201,`br`),Kg()()(),Qc(2202,`td`,21)(2203,`code`,32),Sk(2204,`boolean`),Kg()(),Qc(2205,`td`,24)(2206,`em`)(2207,`strong`),Sk(2208,`(opcional)`),Kg()(),Qc(2209,`p`),Sk(2210,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Qc(2211,`code`),Sk(2212,`po-combo`),Kg(),Sk(2213,`.`),Kg()()(),Qc(2214,`tr`,117)(2215,`td`,17)(2216,`div`,26)(2217,`span`,27),Sk(2218,` displayFormat`),vu(2219,`br`),Kg()()(),Qc(2220,`td`,21)(2221,`code`,28),Sk(2222,`string`),Kg()(),Qc(2223,`td`,24)(2224,`em`)(2225,`strong`),Sk(2226,`(opcional)`),Kg()(),Qc(2227,`p`),Sk(2228,`Define uma máscara de formatação numérica avançada para o campo.`),Kg(),Qc(2229,`p`),Sk(2230,`Simbologia suportada:`),Kg(),Qc(2231,`ul`)(2232,`li`)(2233,`code`),Sk(2234,`9`),Kg(),Sk(2235,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Kg(),Qc(2236,`li`)(2237,`code`),Sk(2238,`>`),Kg(),Sk(2239,`: Supressão de zero à esquerda (dígito não obrigatório);`),Kg(),Qc(2240,`li`)(2241,`code`),Sk(2242,`<`),Kg(),Sk(2243,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Kg(),Qc(2244,`li`)(2245,`code`),Sk(2246,`.`),Kg(),Sk(2247,`: Separador decimal (convertido conforme locale);`),Kg(),Qc(2248,`li`)(2249,`code`),Sk(2250,`,`),Kg(),Sk(2251,`: Separador de milhar/grupo (convertido conforme locale);`),Kg(),Qc(2252,`li`)(2253,`code`),Sk(2254,`-`),Kg(),Sk(2255,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Kg()(),Qc(2256,`blockquote`)(2257,`p`),Sk(2258,`Quando utilizado com `),Qc(2259,`code`),Sk(2260,`decimalsLength`),Kg(),Sk(2261,` ou `),Qc(2262,`code`),Sk(2263,`thousandMaxlength`),Kg(),Sk(2264,`, será respeitado o valor `),Qc(2265,`strong`),Sk(2266,`mais restritivo`),Kg(),Sk(2267,` entre a propriedade e o formato.`),Kg()(),Qc(2268,`p`),Sk(2269,`Exemplos: `),Qc(2270,`code`),Sk(2271,`'>>>,>>>,>>9.99'`),Kg(),Sk(2272,`, `),Qc(2273,`code`),Sk(2274,`'->>9.99'`),Kg(),Sk(2275,`, `),Qc(2276,`code`),Sk(2277,`'999.9'`),Kg()(),Qc(2278,`blockquote`)(2279,`p`),Sk(2280,`Esta propriedade só pode ser utilizada quando o `),Qc(2281,`code`),Sk(2282,`type`),Kg(),Sk(2283,` for `),Qc(2284,`em`),Sk(2285,`currency`),Kg(),Sk(2286,` ou `),Qc(2287,`em`),Sk(2288,`decimal`),Kg(),Sk(2289,`.`),Kg()(),Qc(2290,`p`)(2291,`strong`),Sk(2292,`Componente compatível:`),Kg(),Qc(2293,`code`),Sk(2294,`po-decimal`),Kg(),Sk(2295,`.`),Kg()()(),Qc(2296,`tr`,118)(2297,`td`,17)(2298,`div`,26)(2299,`span`,27),Sk(2300,` divider`),vu(2301,`br`),Kg()()(),Qc(2302,`td`,21)(2303,`code`,28),Sk(2304,`string`),Kg()(),Qc(2305,`td`,24)(2306,`em`)(2307,`strong`),Sk(2308,`(opcional)`),Kg()(),Qc(2309,`p`),Sk(2310,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),Kg()()(),Qc(2311,`tr`,119)(2312,`td`,17)(2313,`div`,26)(2314,`span`,27),Sk(2315,` dragDrop`),vu(2316,`br`),Kg()()(),Qc(2317,`td`,21)(2318,`code`,32),Sk(2319,`boolean`),Kg()(),Qc(2320,`td`,24)(2321,`em`)(2322,`strong`),Sk(2323,`(opcional)`),Kg()(),Qc(2324,`p`),Sk(2325,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Kg(),Qc(2326,`blockquote`)(2327,`p`),Sk(2328,`Recomendamos utilizar apenas um `),Qc(2329,`code`),Sk(2330,`po-upload`),Kg(),Sk(2331,` com esta funcionalidade por tela.`),Kg()(),Qc(2332,`p`)(2333,`strong`),Sk(2334,`Componente compatível`),Kg(),Sk(2335,`: `),Qc(2336,`code`),Sk(2337,`po-upload`),Kg()()()(),Qc(2338,`tr`,120)(2339,`td`,17)(2340,`div`,26)(2341,`span`,27),Sk(2342,` dragDropHeight`),vu(2343,`br`),Kg()()(),Qc(2344,`td`,21)(2345,`code`,102),Sk(2346,`number`),Kg()(),Qc(2347,`td`,24)(2348,`em`)(2349,`strong`),Sk(2350,`(opcional)`),Kg()(),Qc(2351,`p`),Sk(2352,`Define em `),Qc(2353,`em`),Sk(2354,`pixels`),Kg(),Sk(2355,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Qc(2356,`code`),Sk(2357,`160px`),Kg(),Sk(2358,`.`),Kg(),Qc(2359,`blockquote`)(2360,`p`),Sk(2361,`Esta propriedade funciona somente se a propriedade `),Qc(2362,`code`),Sk(2363,`p-drag-drop`),Kg(),Sk(2364,` estiver habilitada.`),Kg()(),Qc(2365,`p`)(2366,`strong`),Sk(2367,`Componente compatível`),Kg(),Sk(2368,`: `),Qc(2369,`code`),Sk(2370,`po-upload`),Kg()()()(),Qc(2371,`tr`,121)(2372,`td`,17)(2373,`div`,26)(2374,`span`,27),Sk(2375,` errorAsyncFunction`),vu(2376,`br`),Kg()()(),Qc(2377,`td`,21)(2378,`code`,122),Sk(2379,`(value) => Observable<boolean>`),Kg()(),Qc(2380,`td`,24)(2381,`em`)(2382,`strong`),Sk(2383,`(opcional)`),Kg()(),Qc(2384,`p`),Sk(2385,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Qc(2386,`code`),Sk(2387,`change`),Kg(),Sk(2388,` ou `),Qc(2389,`code`),Sk(2390,`change-model`),Kg(),Sk(2391,`, dependendo do valor da propriedade `),Qc(2392,`code`),Sk(2393,`triggerMode`),Kg(),Sk(2394,`.`),Kg(),Qc(2395,`blockquote`)(2396,`p`),Sk(2397,`Retorna `),Qc(2398,`code`),Sk(2399,`Observable com o valor true`),Kg(),Sk(2400,` para sinalizar o erro `),Qc(2401,`code`),Sk(2402,`false`),Kg(),Sk(2403,` para indicar que não há erro.`),Kg()(),Qc(2404,`p`)(2405,`strong`),Sk(2406,`Componente compatível`),Kg(),Sk(2407,`: `),Qc(2408,`code`),Sk(2409,`po-datepicker`),Kg()()()(),Qc(2410,`tr`,123)(2411,`td`,17)(2412,`div`,26)(2413,`span`,27),Sk(2414,` errorAsyncProperties`),vu(2415,`br`),Kg()()(),Qc(2416,`td`,21)(2417,`code`,124),Sk(2418,`ErrorAsyncProperties`),Kg()(),Qc(2419,`td`,24)(2420,`em`)(2421,`strong`),Sk(2422,`(opcional)`),Kg()(),Qc(2423,`p`),Sk(2424,`Realiza alguma validação customizada assíncrona no componente.`),Kg(),Qc(2425,`p`)(2426,`strong`),Sk(2427,`Componentes compatíveis:`),Kg(),Qc(2428,`code`),Sk(2429,`po-input`),Kg(),Sk(2430,`, `),Qc(2431,`code`),Sk(2432,`po-number`),Kg(),Sk(2433,`, `),Qc(2434,`code`),Sk(2435,`po-decimal`),Kg(),Sk(2436,`, `),Qc(2437,`code`),Sk(2438,`po-password`),Kg(),Sk(2439,`.`),Kg()()(),Qc(2440,`tr`,125)(2441,`td`,17)(2442,`div`,26)(2443,`span`,27),Sk(2444,` errorLimit`),vu(2445,`br`),Kg()()(),Qc(2446,`td`,21)(2447,`code`,32),Sk(2448,`boolean`),Kg()(),Qc(2449,`td`,24)(2450,`em`)(2451,`strong`),Sk(2452,`(opcional)`),Kg()(),Qc(2453,`p`),Sk(2454,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(2455,`blockquote`)(2456,`p`),Sk(2457,`Caso essa propriedade seja definida como `),Qc(2458,`code`),Sk(2459,`true`),Kg(),Sk(2460,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()(),Qc(2461,`p`)(2462,`strong`),Sk(2463,`Componentes compatíveis:`),Kg(),Qc(2464,`code`),Sk(2465,`po-checkbox-group`),Kg(),Sk(2466,`, `),Qc(2467,`code`),Sk(2468,`po-combo`),Kg(),Sk(2469,`, `),Qc(2470,`code`),Sk(2471,`po-datepicker`),Kg(),Sk(2472,`, `),Qc(2473,`code`),Sk(2474,`po-datepicker-range`),Kg(),Sk(2475,`, `),Qc(2476,`code`),Sk(2477,`po-decimal`),Kg(),Sk(2478,`, `),Qc(2479,`code`),Sk(2480,`po-input`),Kg(),Sk(2481,`, `),Qc(2482,`code`),Sk(2483,`po-lookup`),Kg(),Sk(2484,`, `),Qc(2485,`code`),Sk(2486,`po-multiselect`),Kg(),Sk(2487,`, `),Qc(2488,`code`),Sk(2489,`po-number`),Kg(),Sk(2490,`, `),Qc(2491,`code`),Sk(2492,`po-password`),Kg(),Sk(2493,`, `),Qc(2494,`code`),Sk(2495,`po-radio-group`),Kg(),Sk(2496,`, `),Qc(2497,`code`),Sk(2498,`po-select`),Kg(),Sk(2499,`,
`),Qc(2500,`code`),Sk(2501,`po-switch`),Kg(),Sk(2502,`, `),Qc(2503,`code`),Sk(2504,`po-textarea`),Kg(),Sk(2505,`, `),Qc(2506,`code`),Sk(2507,`po-timepicker`),Kg(),Sk(2508,`.`),Kg()()(),Qc(2509,`tr`,126)(2510,`td`,17)(2511,`div`,26)(2512,`span`,27),Sk(2513,` errorMessage`),vu(2514,`br`),Kg()()(),Qc(2515,`td`,21)(2516,`code`,28),Sk(2517,`string`),Kg()(),Qc(2518,`td`,24)(2519,`em`)(2520,`strong`),Sk(2521,`(opcional)`),Kg()(),Qc(2522,`p`),Sk(2523,`Mensagem que será apresentada quando o campo ficar inválido.`),Kg(),Qc(2524,`p`),Sk(2525,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),Kg(),Qc(2526,`ul`)(2527,`li`),Sk(2528,`pattern;`),Kg(),Qc(2529,`li`),Sk(2530,`minValue;`),Kg(),Qc(2531,`li`),Sk(2532,`maxValue;`),Kg(),Qc(2533,`li`),Sk(2534,`required;`),Kg()(),Qc(2535,`blockquote`)(2536,`p`),Sk(2537,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Qc(2538,`code`),Sk(2539,`po-datepicker`),Kg(),Sk(2540,`, `),Qc(2541,`code`),Sk(2542,`po-input`),Kg(),Sk(2543,`, `),Qc(2544,`code`),Sk(2545,`po-number`),Kg(),Sk(2546,`, `),Qc(2547,`code`),Sk(2548,`po-decimal`),Kg(),Sk(2549,`, `),Qc(2550,`code`),Sk(2551,`po-password`),Kg(),Sk(2552,`, `),Qc(2553,`code`),Sk(2554,`po-timepicker`),Kg(),Sk(2555,`, \xE9 necess\xE1rio que a propriedade
`),Qc(2556,`code`),Sk(2557,`requiredFieldErrorMessage`),Kg(),Sk(2558,` esteja como `),Qc(2559,`code`),Sk(2560,`true`),Kg(),Sk(2561,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Qc(2562,`code`),Sk(2563,`po-datepicker-range`),Kg(),Sk(2564,`, `),Qc(2565,`code`),Sk(2566,`po-select`),Kg(),Sk(2567,`, `),Qc(2568,`code`),Sk(2569,`po-checkbox-group`),Kg(),Sk(2570,`, `),Qc(2571,`code`),Sk(2572,`po-radio-group`),Kg(),Sk(2573,`, `),Qc(2574,`code`),Sk(2575,`po-multiselect`),Kg(),Sk(2576,`, `),Qc(2577,`code`),Sk(2578,`po-combo`),Kg(),Sk(2579,`,
`),Qc(2580,`code`),Sk(2581,`po-lookup`),Kg(),Sk(2582,` e `),Qc(2583,`code`),Sk(2584,`po-textarea`),Kg(),Sk(2585,` não é necessário passar a propriedade `),Qc(2586,`code`),Sk(2587,`requiredFieldErrorMessage`),Kg(),Sk(2588,`.`),Kg()(),Qc(2589,`p`)(2590,`strong`),Sk(2591,`Componentes compatíveis:`),Kg(),Qc(2592,`code`),Sk(2593,`po-checkbox-group`),Kg(),Sk(2594,`, `),Qc(2595,`code`),Sk(2596,`po-combo`),Kg(),Sk(2597,`, `),Qc(2598,`code`),Sk(2599,`po-datepicker`),Kg(),Sk(2600,`, `),Qc(2601,`code`),Sk(2602,`po-datepicker-range`),Kg(),Sk(2603,`, `),Qc(2604,`code`),Sk(2605,`po-decimal`),Kg(),Sk(2606,`, `),Qc(2607,`code`),Sk(2608,`po-input`),Kg(),Sk(2609,`, `),Qc(2610,`code`),Sk(2611,`po-lookup`),Kg(),Sk(2612,`, `),Qc(2613,`code`),Sk(2614,`po-multiselect`),Kg(),Sk(2615,`, `),Qc(2616,`code`),Sk(2617,`po-number`),Kg(),Sk(2618,`, `),Qc(2619,`code`),Sk(2620,`po-password`),Kg(),Sk(2621,`, `),Qc(2622,`code`),Sk(2623,`po-radio-group`),Kg(),Sk(2624,`, `),Qc(2625,`code`),Sk(2626,`po-select`),Kg(),Sk(2627,`,
`),Qc(2628,`code`),Sk(2629,`po-switch`),Kg(),Sk(2630,`, `),Qc(2631,`code`),Sk(2632,`po-textarea`),Kg(),Sk(2633,`, `),Qc(2634,`code`),Sk(2635,`po-timepicker`),Kg(),Sk(2636,`.`),Kg()()(),Qc(2637,`tr`,127)(2638,`td`,17)(2639,`div`,26)(2640,`span`,27),Sk(2641,` fieldLabel`),vu(2642,`br`),Kg()()(),Qc(2643,`td`,21)(2644,`code`,28),Sk(2645,`string`),Kg()(),Qc(2646,`td`,24)(2647,`em`)(2648,`strong`),Sk(2649,`(opcional)`),Kg()(),Qc(2650,`p`),Sk(2651,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),Kg(),Qc(2652,`p`),Sk(2653,`O valor padrão é: `),Qc(2654,`code`),Sk(2655,`label`),Kg(),Sk(2656,`.`),Kg(),Qc(2657,`blockquote`)(2658,`p`),Sk(2659,`Esta propriedade pode ser utilizada em conjunto com: `),Qc(2660,`code`),Sk(2661,`options`),Kg(),Sk(2662,`, `),Qc(2663,`code`),Sk(2664,`optionsService`),Kg(),Sk(2665,` e `),Qc(2666,`code`),Sk(2667,`searchService`),Kg(),Sk(2668,`.`),Kg()()()(),Qc(2669,`tr`,128)(2670,`td`,17)(2671,`div`,26)(2672,`span`,27),Sk(2673,` fieldValue`),vu(2674,`br`),Kg()()(),Qc(2675,`td`,21)(2676,`code`,28),Sk(2677,`string`),Kg()(),Qc(2678,`td`,24)(2679,`em`)(2680,`strong`),Sk(2681,`(opcional)`),Kg()(),Qc(2682,`p`),Sk(2683,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),Kg(),Qc(2684,`p`),Sk(2685,`O valor padrão é: `),Qc(2686,`code`),Sk(2687,`value`),Kg(),Sk(2688,`.`),Kg(),Qc(2689,`blockquote`)(2690,`p`),Sk(2691,`Esta propriedade pode ser utilizada em conjunto com: `),Qc(2692,`code`),Sk(2693,`options`),Kg(),Sk(2694,`, `),Qc(2695,`code`),Sk(2696,`optionsService`),Kg(),Sk(2697,` e `),Qc(2698,`code`),Sk(2699,`searchService`),Kg(),Sk(2700,`.`),Kg()()()(),Qc(2701,`tr`,129)(2702,`td`,17)(2703,`div`,26)(2704,`span`,27),Sk(2705,` filterMinlength`),vu(2706,`br`),Kg()()(),Qc(2707,`td`,21)(2708,`code`,102),Sk(2709,`number`),Kg()(),Qc(2710,`td`,24)(2711,`em`)(2712,`strong`),Sk(2713,`(opcional)`),Kg()(),Qc(2714,`p`),Sk(2715,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Qc(2716,`code`),Sk(2717,`po-combo`),Kg(),Sk(2718,`.`),Kg()()(),Qc(2719,`tr`,130)(2720,`td`,17)(2721,`div`,26)(2722,`span`,27),Sk(2723,` filterMode`),vu(2724,`br`),Kg()()(),Qc(2725,`td`,21)(2726,`code`,131),Sk(2727,`PoMultiselectFilterMode`),Kg()(),Qc(2728,`td`,24)(2729,`em`)(2730,`strong`),Sk(2731,`(opcional)`),Kg()(),Qc(2732,`p`),Sk(2733,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Qc(2734,`code`),Sk(2735,`startsWith`),Kg(),Sk(2736,`, `),Qc(2737,`code`),Sk(2738,`contains`),Kg(),Sk(2739,` ou `),Qc(2740,`code`),Sk(2741,`endsWith`),Kg(),Sk(2742,`.`),Kg(),Qc(2743,`blockquote`)(2744,`p`),Sk(2745,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),Kg()(),Qc(2746,`p`)(2747,`strong`),Sk(2748,`Componente compatível:`),Kg(),Qc(2749,`code`),Sk(2750,`po-multiselect`),Kg(),Sk(2751,`.`),Kg()()(),Qc(2752,`tr`,132)(2753,`td`,17)(2754,`div`,26)(2755,`span`,27),Sk(2756,` forceBooleanComponentType`),vu(2757,`br`),Kg()()(),Qc(2758,`td`,21)(2759,`code`,133),Sk(2760,`ForceBooleanComponentEnum`),Kg()(),Qc(2761,`td`,24)(2762,`em`)(2763,`strong`),Sk(2764,`(opcional)`),Kg()(),Qc(2765,`p`),Sk(2766,`Valores aceitos:`),Kg(),Qc(2767,`ul`)(2768,`li`),Sk(2769,`ForceBooleanComponentEnum.switch`),Kg(),Qc(2770,`li`),Sk(2771,`ForceBooleanComponentEnum.checkbox`),Kg()()()(),Qc(2772,`tr`,134)(2773,`td`,17)(2774,`div`,26)(2775,`span`,27),Sk(2776,` forceOptionsComponentType`),vu(2777,`br`),Kg()()(),Qc(2778,`td`,21)(2779,`code`,135),Sk(2780,`ForceOptionComponentEnum`),Kg()(),Qc(2781,`td`,24)(2782,`em`)(2783,`strong`),Sk(2784,`(opcional)`),Kg()(),Qc(2785,`p`),Sk(2786,`pode ser utilizada em conjunto com a propriedade `),Qc(2787,`code`),Sk(2788,`options`),Kg(),Sk(2789,` forçando o componente a renderizar um `),Qc(2790,`code`),Sk(2791,`po-select`),Kg(),Sk(2792,` ou `),Qc(2793,`code`),Sk(2794,`po-radio-group`),Kg(),Sk(2795,`.`),Kg(),Qc(2796,`p`),Sk(2797,`Valores aceitos:`),Kg(),Qc(2798,`ul`)(2799,`li`),Sk(2800,`ForceOptionComponentEnum.radioGroup`),Kg(),Qc(2801,`li`),Sk(2802,`ForceOptionComponentEnum.select`),Kg()(),Qc(2803,`blockquote`)(2804,`p`),Sk(2805,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Qc(2806,`code`),Sk(2807,`optionsMulti`),Kg(),Sk(2808,` e `),Qc(2809,`code`),Sk(2810,`optionsService`),Kg(),Sk(2811,`.`),Kg()()()(),Qc(2812,`tr`,136)(2813,`td`,17)(2814,`div`,26)(2815,`span`,27),Sk(2816,` formField`),vu(2817,`br`),Kg()()(),Qc(2818,`td`,21)(2819,`code`,28),Sk(2820,`string`),Kg()(),Qc(2821,`td`,24)(2822,`em`)(2823,`strong`),Sk(2824,`(opcional)`),Kg()(),Qc(2825,`p`),Sk(2826,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Qc(2827,`code`),Sk(2828,`url`),Kg(),Sk(2829,`.`),Kg(),Qc(2830,`blockquote`)(2831,`p`),Sk(2832,`O valor default é `),Qc(2833,`code`),Sk(2834,`files`),Kg()()(),Qc(2835,`p`)(2836,`strong`),Sk(2837,`Componente compatível`),Kg(),Sk(2838,`: `),Qc(2839,`code`),Sk(2840,`po-upload`),Kg()()()(),Qc(2841,`tr`,137)(2842,`td`,17)(2843,`div`,26)(2844,`span`,27),Sk(2845,` format`),vu(2846,`br`),Kg()()(),Qc(2847,`td`,21)(2848,`code`,28),Sk(2849,`string `),Kg(),Qc(2850,`code`,48),Sk(2851,` Array<string>`),Kg()(),Qc(2852,`td`,24)(2853,`em`)(2854,`strong`),Sk(2855,`(opcional)`),Kg()(),Qc(2856,`p`),Sk(2857,`Formato de exibição no campo.`),Kg(),Qc(2858,`p`),Sk(2859,`Ao utilizar esta propriedade com o `),Qc(2860,`code`),Sk(2861,`type`),Kg(),Qc(2862,`em`),Sk(2863,`PoDynamicFieldType.Date`),Kg(),Sk(2864,` ou `),Qc(2865,`em`),Sk(2866,`PoDynamicFieldType.DateTime`),Kg(),Sk(2867,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),Kg(),Qc(2868,`p`),Sk(2869,`Valores válidos:`),Kg(),Qc(2870,`ul`)(2871,`li`),Sk(2872,`dd/mm/yyyy`),Kg(),Qc(2873,`li`),Sk(2874,`mm/dd/yyyy`),Kg(),Qc(2875,`li`),Sk(2876,`yyyy/mm/dd`),Kg()(),Qc(2877,`p`),Sk(2878,`Ao utilizar com o `),Qc(2879,`code`),Sk(2880,`type`),Kg(),Qc(2881,`em`),Sk(2882,`PoDynamicFieldType.Time`),Kg(),Sk(2883,`, define o formato de exibição do horário:`),Kg(),Qc(2884,`p`),Sk(2885,`Valores válidos:`),Kg(),Qc(2886,`ul`)(2887,`li`)(2888,`code`),Sk(2889,`24`),Kg(),Sk(2890,`: formato de 24 horas (padrão)`),Kg(),Qc(2891,`li`)(2892,`code`),Sk(2893,`12`),Kg(),Sk(2894,`: formato de 12 horas com indicador AM/PM`),Kg()(),Qc(2895,`p`),Sk(2896,`Também pode-se utilizar em conjunto com `),Qc(2897,`code`),Sk(2898,`searchService`),Kg(),Sk(2899,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),Kg(),Qc(2900,`p`)(2901,`strong`),Sk(2902,`Componentes compatíveis:`),Kg(),Qc(2903,`code`),Sk(2904,`po-datepicker`),Kg(),Sk(2905,`, `),Qc(2906,`code`),Sk(2907,`po-datetimepicker`),Kg(),Sk(2908,`, `),Qc(2909,`code`),Sk(2910,`po-timepicker`),Kg(),Sk(2911,`, `),Qc(2912,`code`),Sk(2913,`po-lookup`),Kg(),Sk(2914,`.`),Kg()()(),Qc(2915,`tr`,138)(2916,`td`,17)(2917,`div`,26)(2918,`span`,27),Sk(2919,` formatModel`),vu(2920,`br`),Kg()()(),Qc(2921,`td`,21)(2922,`code`,32),Sk(2923,`boolean`),Kg()(),Qc(2924,`td`,24)(2925,`em`)(2926,`strong`),Sk(2927,`(opcional)`),Kg()(),Qc(2928,`p`),Sk(2929,`Indica se o `),Qc(2930,`code`),Sk(2931,`model`),Kg(),Sk(2932,` receberá o valor formatado pelas propriedades `),Qc(2933,`code`),Sk(2934,`p-label-on`),Kg(),Sk(2935,` e `),Qc(2936,`code`),Sk(2937,`p-label-off`),Kg(),Sk(2938,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Kg(),Qc(2939,`p`),Sk(2940,`O valor padrão é: `),Qc(2941,`code`),Sk(2942,`false`),Kg(),Sk(2943,`.`),Kg(),Qc(2944,`blockquote`)(2945,`p`),Sk(2946,`Esta propriedade está disponivel apenas para o `),Qc(2947,`code`),Sk(2948,`swicth`),Kg(),Sk(2949,`.`),Kg()()()(),Qc(2950,`tr`,139)(2951,`td`,17)(2952,`div`,26)(2953,`span`,27),Sk(2954,` formatTime`),vu(2955,`br`),Kg()()(),Qc(2956,`td`,21)(2957,`code`,28),Sk(2958,`string`),Kg()(),Qc(2959,`td`,24)(2960,`em`)(2961,`strong`),Sk(2962,`(opcional)`),Kg()(),Qc(2963,`p`),Sk(2964,`Define o formato de exibição do timer (`),Qc(2965,`code`),Sk(2966,`'12'`),Kg(),Sk(2967,` ou `),Qc(2968,`code`),Sk(2969,`'24'`),Kg(),Sk(2970,`).`),Kg(),Qc(2971,`p`)(2972,`strong`),Sk(2973,`Componente compatível:`),Kg(),Qc(2974,`code`),Sk(2975,`po-datetimepicker`),Kg()()()(),Qc(2976,`tr`,140)(2977,`td`,17)(2978,`div`,26)(2979,`span`,27),Sk(2980,` gridColumns`),vu(2981,`br`),Kg()()(),Qc(2982,`td`,21)(2983,`code`,102),Sk(2984,`number`),Kg()(),Qc(2985,`td`,24)(2986,`em`)(2987,`strong`),Sk(2988,`(opcional)`),Kg()(),Qc(2989,`p`),Sk(2990,`Tamanho de exibição do campo em telas.`),Kg(),Qc(2991,`p`),Sk(2992,`Deve ser usado o sistema de `),Qc(2993,`strong`),Sk(2994,`grid`),Kg(),Sk(2995,` do PO (1 ... 12 colunas).`),Kg(),Qc(2996,`blockquote`)(2997,`p`),Sk(2998,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),Kg()()()(),Qc(2999,`tr`,141)(3e3,`td`,17)(3001,`div`,26)(3002,`span`,27),Sk(3003,` gridLgColumns`),vu(3004,`br`),Kg()()(),Qc(3005,`td`,21)(3006,`code`,102),Sk(3007,`number`),Kg()(),Qc(3008,`td`,24)(3009,`em`)(3010,`strong`),Sk(3011,`(opcional)`),Kg()(),Qc(3012,`p`),Sk(3013,`Tamanho de exibição do campo em telas grandes (lg).`),Kg(),Qc(3014,`p`),Sk(3015,`Deve ser usado o sistema de `),Qc(3016,`strong`),Sk(3017,`grid`),Kg(),Sk(3018,` do PO (1 ... 12 colunas).`),Kg(),Qc(3019,`blockquote`)(3020,`p`),Sk(3021,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(3022,`code`),Sk(3023,`gridColumns`),Kg(),Sk(3024,`.`),Kg()()()(),Qc(3025,`tr`,142)(3026,`td`,17)(3027,`div`,26)(3028,`span`,27),Sk(3029,` gridLgPull`),vu(3030,`br`),Kg()()(),Qc(3031,`td`,21)(3032,`code`,102),Sk(3033,`number`),Kg()(),Qc(3034,`td`,24)(3035,`em`)(3036,`strong`),Sk(3037,`(opcional)`),Kg()(),Qc(3038,`p`),Sk(3039,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),Kg(),Qc(3040,`p`),Sk(3041,`Deve ser usado o sistema de `),Qc(3042,`strong`),Sk(3043,`grid`),Kg(),Sk(3044,` do PO (1 ... 11 colunas).`),Kg(),Qc(3045,`blockquote`)(3046,`p`),Sk(3047,`Esta propriedade não funciona com a propriedade `),Qc(3048,`code`),Sk(3049,`gridColumns`),Kg(),Sk(3050,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Qc(3051,`tr`,143)(3052,`td`,17)(3053,`div`,26)(3054,`span`,27),Sk(3055,` gridMdColumns`),vu(3056,`br`),Kg()()(),Qc(3057,`td`,21)(3058,`code`,102),Sk(3059,`number`),Kg()(),Qc(3060,`td`,24)(3061,`em`)(3062,`strong`),Sk(3063,`(opcional)`),Kg()(),Qc(3064,`p`),Sk(3065,`Tamanho de exibição do campo em telas médias (md).`),Kg(),Qc(3066,`p`),Sk(3067,`Deve ser usado o sistema de `),Qc(3068,`strong`),Sk(3069,`grid`),Kg(),Sk(3070,` do PO (1 ... 12 colunas).`),Kg(),Qc(3071,`blockquote`)(3072,`p`),Sk(3073,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(3074,`code`),Sk(3075,`gridColumns`),Kg(),Sk(3076,`.`),Kg()()()(),Qc(3077,`tr`,144)(3078,`td`,17)(3079,`div`,26)(3080,`span`,27),Sk(3081,` gridMdPull`),vu(3082,`br`),Kg()()(),Qc(3083,`td`,21)(3084,`code`,102),Sk(3085,`number`),Kg()(),Qc(3086,`td`,24)(3087,`em`)(3088,`strong`),Sk(3089,`(opcional)`),Kg()(),Qc(3090,`p`),Sk(3091,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),Kg(),Qc(3092,`p`),Sk(3093,`Deve ser usado o sistema de `),Qc(3094,`strong`),Sk(3095,`grid`),Kg(),Sk(3096,` do PO (1 ... 11 colunas).`),Kg(),Qc(3097,`blockquote`)(3098,`p`),Sk(3099,`Esta propriedade não funciona com a propriedade `),Qc(3100,`code`),Sk(3101,`gridColumns`),Kg(),Sk(3102,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Qc(3103,`tr`,145)(3104,`td`,17)(3105,`div`,26)(3106,`span`,27),Sk(3107,` gridSmColumns`),vu(3108,`br`),Kg()()(),Qc(3109,`td`,21)(3110,`code`,102),Sk(3111,`number`),Kg()(),Qc(3112,`td`,24)(3113,`em`)(3114,`strong`),Sk(3115,`(opcional)`),Kg()(),Qc(3116,`p`),Sk(3117,`Tamanho de exibição do campo em telas menores (sm).`),Kg(),Qc(3118,`p`),Sk(3119,`Deve ser usado o sistema de `),Qc(3120,`strong`),Sk(3121,`grid`),Kg(),Sk(3122,` do PO (1 ... 12 colunas).`),Kg(),Qc(3123,`blockquote`)(3124,`p`),Sk(3125,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(3126,`code`),Sk(3127,`gridColumns`),Kg(),Sk(3128,`.`),Kg()()()(),Qc(3129,`tr`,146)(3130,`td`,17)(3131,`div`,26)(3132,`span`,27),Sk(3133,` gridSmPull`),vu(3134,`br`),Kg()()(),Qc(3135,`td`,21)(3136,`code`,102),Sk(3137,`number`),Kg()(),Qc(3138,`td`,24)(3139,`em`)(3140,`strong`),Sk(3141,`(opcional)`),Kg()(),Qc(3142,`p`),Sk(3143,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),Kg(),Qc(3144,`p`),Sk(3145,`Deve ser usado o sistema de `),Qc(3146,`strong`),Sk(3147,`grid`),Kg(),Sk(3148,` do PO (1 ... 11 colunas).`),Kg(),Qc(3149,`blockquote`)(3150,`p`),Sk(3151,`Esta propriedade não funciona com a propriedade `),Qc(3152,`code`),Sk(3153,`gridColumns`),Kg(),Sk(3154,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Qc(3155,`tr`,147)(3156,`td`,17)(3157,`div`,26)(3158,`span`,27),Sk(3159,` gridXlColumns`),vu(3160,`br`),Kg()()(),Qc(3161,`td`,21)(3162,`code`,102),Sk(3163,`number`),Kg()(),Qc(3164,`td`,24)(3165,`em`)(3166,`strong`),Sk(3167,`(opcional)`),Kg()(),Qc(3168,`p`),Sk(3169,`Tamanho de exibição do campo em telas extra grandes (xl).`),Kg(),Qc(3170,`p`),Sk(3171,`Deve ser usado o sistema de `),Qc(3172,`strong`),Sk(3173,`grid`),Kg(),Sk(3174,` do PO (1 ... 12 colunas).`),Kg(),Qc(3175,`blockquote`)(3176,`p`),Sk(3177,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(3178,`code`),Sk(3179,`gridColumns`),Kg(),Sk(3180,`.`),Kg()()()(),Qc(3181,`tr`,148)(3182,`td`,17)(3183,`div`,26)(3184,`span`,27),Sk(3185,` gridXlPull`),vu(3186,`br`),Kg()()(),Qc(3187,`td`,21)(3188,`code`,102),Sk(3189,`number`),Kg()(),Qc(3190,`td`,24)(3191,`em`)(3192,`strong`),Sk(3193,`(opcional)`),Kg()(),Qc(3194,`p`),Sk(3195,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),Kg(),Qc(3196,`p`),Sk(3197,`Deve ser usado o sistema de `),Qc(3198,`strong`),Sk(3199,`grid`),Kg(),Sk(3200,` do PO (1 ... 11 colunas).`),Kg(),Qc(3201,`blockquote`)(3202,`p`),Sk(3203,`Esta propriedade não funciona com a propriedade `),Qc(3204,`code`),Sk(3205,`gridColumns`),Kg(),Sk(3206,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Qc(3207,`tr`,149)(3208,`td`,17)(3209,`div`,26)(3210,`span`,27),Sk(3211,` headers`),vu(3212,`br`),Kg()()(),Qc(3213,`td`,21)(3214,`code`,150),Sk(3215,`{ [name: string]: string `),Kg(),Qc(3216,`code`,151),Sk(3217,` Array<string>;
}`),Kg()(),Qc(3218,`td`,24)(3219,`em`)(3220,`strong`),Sk(3221,`(opcional)`),Kg()(),Qc(3222,`p`),Sk(3223,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Kg(),Qc(3224,`p`)(3225,`strong`),Sk(3226,`Componente compatível`),Kg(),Sk(3227,`: `),Qc(3228,`code`),Sk(3229,`po-upload`),Kg()()()(),Qc(3230,`tr`,152)(3231,`td`,17)(3232,`div`,26)(3233,`span`,27),Sk(3234,` help`),vu(3235,`br`),Kg()()(),Qc(3236,`td`,21)(3237,`code`,28),Sk(3238,`string`),Kg()(),Qc(3239,`td`,24)(3240,`em`)(3241,`strong`),Sk(3242,`(opcional)`),Kg()(),Qc(3243,`p`),Sk(3244,`Texto de ajuda.`),Kg()()(),Qc(3245,`tr`,153)(3246,`td`,17)(3247,`div`,26)(3248,`span`,27),Sk(3249,` helper`),vu(3250,`br`),Kg()()(),Qc(3251,`td`,21)(3252,`code`,28),Sk(3253,`string `),Kg(),Qc(3254,`code`,73),Sk(3255,` PoHelperOptions`),Kg()(),Qc(3256,`td`,24)(3257,`em`)(3258,`strong`),Sk(3259,`(opcional)`),Kg()(),Qc(3260,`p`),Sk(3261,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),Kg()()(),Qc(3262,`tr`,154)(3263,`td`,17)(3264,`div`,26)(3265,`span`,27),Sk(3266,` hideLabelStatus`),vu(3267,`br`),Kg()()(),Qc(3268,`td`,21)(3269,`code`,32),Sk(3270,`boolean`),Kg()(),Qc(3271,`td`,24)(3272,`em`)(3273,`strong`),Sk(3274,`(opcional)`),Kg()(),Qc(3275,`p`),Sk(3276,`Indica se o status do `),Qc(3277,`code`),Sk(3278,`model`),Kg(),Sk(3279,` será escondido visualmente ao lado do switch`),Kg()()(),Qc(3280,`tr`,155)(3281,`td`,17)(3282,`div`,26)(3283,`span`,27),Sk(3284,` hidePasswordPeek`),vu(3285,`br`),Kg()()(),Qc(3286,`td`,21)(3287,`code`,32),Sk(3288,`boolean`),Kg()(),Qc(3289,`td`,24)(3290,`em`)(3291,`strong`),Sk(3292,`(opcional)`),Kg()(),Qc(3293,`p`),Sk(3294,`Permite esconder a função de espiar a senha digitada no `),Qc(3295,`code`),Sk(3296,`po-password`),Kg(),Sk(3297,`.`),Kg()()(),Qc(3298,`tr`,156)(3299,`td`,17)(3300,`div`,26)(3301,`span`,27),Sk(3302,` hideRestrictionsInfo`),vu(3303,`br`),Kg()()(),Qc(3304,`td`,21)(3305,`code`,32),Sk(3306,`boolean`),Kg()(),Qc(3307,`td`,24)(3308,`em`)(3309,`strong`),Sk(3310,`(opcional)`),Kg()(),Qc(3311,`p`),Sk(3312,`Oculta visualmente as informações de restrições para o upload.`),Kg(),Qc(3313,`p`)(3314,`strong`),Sk(3315,`Componente compatível`),Kg(),Sk(3316,`: `),Qc(3317,`code`),Sk(3318,`po-upload`),Kg()()()(),Qc(3319,`tr`,157)(3320,`td`,17)(3321,`div`,26)(3322,`span`,27),Sk(3323,` hideSearch`),vu(3324,`br`),Kg()()(),Qc(3325,`td`,21)(3326,`code`,32),Sk(3327,`boolean`),Kg()(),Qc(3328,`td`,24)(3329,`em`)(3330,`strong`),Sk(3331,`(opcional)`),Kg()(),Qc(3332,`p`),Sk(3333,`Esconde o campo de pesquisa existente dentro do dropdown do `),Qc(3334,`code`),Sk(3335,`po-multiselect`),Kg(),Sk(3336,`.`),Kg()()(),Qc(3337,`tr`,158)(3338,`td`,17)(3339,`div`,26)(3340,`span`,27),Sk(3341,` hideSelectAll`),vu(3342,`br`),Kg()()(),Qc(3343,`td`,21)(3344,`code`,32),Sk(3345,`boolean`),Kg()(),Qc(3346,`td`,24)(3347,`em`)(3348,`strong`),Sk(3349,`(opcional)`),Kg()(),Qc(3350,`p`),Sk(3351,`Indica se o campo "Selecionar todos" do `),Qc(3352,`code`),Sk(3353,`po-multiselect`),Kg(),Sk(3354,` será escondido.`),Kg()()(),Qc(3355,`tr`,159)(3356,`td`,17)(3357,`div`,26)(3358,`span`,27),Sk(3359,` hideSelectButton`),vu(3360,`br`),Kg()()(),Qc(3361,`td`,21)(3362,`code`,32),Sk(3363,`boolean`),Kg()(),Qc(3364,`td`,24)(3365,`em`)(3366,`strong`),Sk(3367,`(opcional)`),Kg()(),Qc(3368,`p`),Sk(3369,`Omite o botão de seleção de arquivos.`),Kg(),Qc(3370,`blockquote`)(3371,`p`),Sk(3372,`Caso o valor definido seja `),Qc(3373,`code`),Sk(3374,`true`),Kg(),Sk(3375,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Qc(3376,`code`),Sk(3377,`selectFiles()`),Kg(),Sk(3378,` para seleção de arquivos.`),Kg()(),Qc(3379,`p`)(3380,`strong`),Sk(3381,`Componente compatível`),Kg(),Sk(3382,`: `),Qc(3383,`code`),Sk(3384,`po-upload`),Kg()()()(),Qc(3385,`tr`,160)(3386,`td`,17)(3387,`div`,26)(3388,`span`,27),Sk(3389,` hideSendButton`),vu(3390,`br`),Kg()()(),Qc(3391,`td`,21)(3392,`code`,32),Sk(3393,`boolean`),Kg()(),Qc(3394,`td`,24)(3395,`em`)(3396,`strong`),Sk(3397,`(opcional)`),Kg()(),Qc(3398,`p`),Sk(3399,`Omite o botão de envio de arquivos.`),Kg(),Qc(3400,`blockquote`)(3401,`p`),Sk(3402,`Caso o valor definido seja `),Qc(3403,`code`),Sk(3404,`true`),Kg(),Sk(3405,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Qc(3406,`code`),Sk(3407,`sendFiles()`),Kg(),Sk(3408,` para envio do(s) arquivo(s) selecionado(s).`),Kg()(),Qc(3409,`p`)(3410,`strong`),Sk(3411,`Componente compatível`),Kg(),Sk(3412,`: `),Qc(3413,`code`),Sk(3414,`po-upload`),Kg()()()(),Qc(3415,`tr`,161)(3416,`td`,17)(3417,`div`,26)(3418,`span`,27),Sk(3419,` icon`),vu(3420,`br`),Kg()()(),Qc(3421,`td`,21)(3422,`code`,28),Sk(3423,`string `),Kg(),Qc(3424,`code`,162),Sk(3425,` TemplateRef<void>`),Kg()(),Qc(3426,`td`,24)(3427,`em`)(3428,`strong`),Sk(3429,`(opcional)`),Kg()(),Qc(3430,`p`),Sk(3431,`Define o ícone que será exibido no início do campo.`),Kg(),Qc(3432,`blockquote`)(3433,`p`),Sk(3434,`Esta propriedade só pode ser utilizado nos campos:`),Kg()(),Qc(3435,`ul`)(3436,`li`),Sk(3437,`Input;`),Kg(),Qc(3438,`li`),Sk(3439,`Number;`),Kg(),Qc(3440,`li`),Sk(3441,`Decimal;`),Kg(),Qc(3442,`li`),Sk(3443,`Combo;`),Kg(),Qc(3444,`li`),Sk(3445,`Password;`),Kg()(),Qc(3446,`blockquote`)(3447,`p`),Sk(3448,`Veja a disponibilidade de ícones em `),Qc(3449,`a`,163),Sk(3450,`biblioteca de ícones`),Kg(),Sk(3451,`.`),Kg()()()(),Qc(3452,`tr`,164)(3453,`td`,17)(3454,`div`,26)(3455,`span`,27),Sk(3456,` infiniteScroll`),vu(3457,`br`),Kg()()(),Qc(3458,`td`,21)(3459,`code`,32),Sk(3460,`boolean`),Kg()(),Qc(3461,`td`,24)(3462,`em`)(3463,`strong`),Sk(3464,`(opcional)`),Kg()(),Qc(3465,`p`),Sk(3466,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Kg(),Qc(3467,`p`)(3468,`strong`),Sk(3469,`Componentes compatíveis:`),Kg(),Qc(3470,`code`),Sk(3471,`po-combo`),Kg(),Sk(3472,`, `),Qc(3473,`code`),Sk(3474,`po-lookup`),Kg(),Sk(3475,`.`),Kg()()(),Qc(3476,`tr`,165)(3477,`td`,17)(3478,`div`,26)(3479,`span`,27),Sk(3480,` infiniteScrollDistance`),vu(3481,`br`),Kg()()(),Qc(3482,`td`,21)(3483,`code`,102),Sk(3484,`number`),Kg()(),Qc(3485,`td`,24)(3486,`em`)(3487,`strong`),Sk(3488,`(opcional)`),Kg()(),Qc(3489,`p`),Sk(3490,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Qc(3491,`strong`),Sk(3492,`Exemplos`),Kg(),Qc(3493,`code`),Sk(3494,`{ infiniteScrollDistance: 80 }`),Kg(),Sk(3495,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),Kg(),Qc(3496,`p`)(3497,`strong`),Sk(3498,`Componente compatível:`),Kg(),Qc(3499,`code`),Sk(3500,`po-combo`),Kg(),Sk(3501,`.`),Kg()()(),Qc(3502,`tr`,166)(3503,`td`,17)(3504,`div`,26)(3505,`span`,27),Sk(3506,` initValue`),vu(3507,`br`),Kg()()(),Qc(3508,`td`,21)(3509,`code`,52),Sk(3510,`any`),Kg()(),Qc(3511,`td`,24)(3512,`em`)(3513,`strong`),Sk(3514,`(opcional)`),Kg()(),Qc(3515,`p`),Sk(3516,`Define um valor inicial para um filtro de busca avançada.`),Kg(),Qc(3517,`p`),Sk(3518,`O valor será atribuído ao campo correspondente à propriedade `),Qc(3519,`code`),Sk(3520,`property`),Kg(),Sk(3521,` na primeira abertura da janela de
busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro, os campos passam a ser preenchidos com os valores filtrados,
preservando as altera\xE7\xF5es realizadas.`),Kg()()(),Qc(3522,`tr`,167)(3523,`td`,17)(3524,`div`,26)(3525,`span`,27),Sk(3526,` invalidValue`),vu(3527,`br`),Kg()()(),Qc(3528,`td`,21)(3529,`code`,32),Sk(3530,`boolean`),Kg()(),Qc(3531,`td`,24)(3532,`em`)(3533,`strong`),Sk(3534,`(opcional)`),Kg()(),Qc(3535,`p`),Sk(3536,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Qc(3537,`code`),Sk(3538,`p-field-error-message`),Kg(),Sk(3539,`.`),Kg(),Qc(3540,`blockquote`)(3541,`p`),Sk(3542,`Caso essa propriedade seja definida como `),Qc(3543,`code`),Sk(3544,`true`),Kg(),Sk(3545,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Kg()(),Qc(3546,`p`)(3547,`strong`),Sk(3548,`Componente compatível`),Kg(),Sk(3549,`: `),Qc(3550,`code`),Sk(3551,`po-switch`),Kg()()()(),Qc(3552,`tr`,168)(3553,`td`,17)(3554,`div`,26)(3555,`span`,27),Sk(3556,` isoFormat`),vu(3557,`br`),Kg()()(),Qc(3558,`td`,21)(3559,`code`,169),Sk(3560,`PoDatepickerIsoFormat`),Kg()(),Qc(3561,`td`,24)(3562,`em`)(3563,`strong`),Sk(3564,`(opcional)`),Kg()(),Qc(3565,`p`),Sk(3566,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),Kg(),Qc(3567,`blockquote`)(3568,`p`),Sk(3569,`Veja os valores válidos no `),Qc(3570,`code`),Sk(3571,`PoDatepickerIsoFormat`),Kg(),Sk(3572,`.`),Kg()(),Qc(3573,`p`)(3574,`strong`),Sk(3575,`Componente compatível:`),Kg(),Qc(3576,`code`),Sk(3577,`po-datepicker`),Kg()()()(),Qc(3578,`tr`,170)(3579,`td`,17)(3580,`div`,26)(3581,`span`,27),Sk(3582,` key`),vu(3583,`br`),Kg()()(),Qc(3584,`td`,21)(3585,`code`,32),Sk(3586,`boolean`),Kg()(),Qc(3587,`td`,24)(3588,`em`)(3589,`strong`),Sk(3590,`(opcional)`),Kg()(),Qc(3591,`p`),Sk(3592,`Identificador`),Kg()()(),Qc(3593,`tr`,171)(3594,`td`,17)(3595,`div`,26)(3596,`span`,27),Sk(3597,` keydown`),vu(3598,`br`),Kg()()(),Qc(3599,`td`,21)(3600,`code`,89),Sk(3601,`Function`),Kg()(),Qc(3602,`td`,24)(3603,`em`)(3604,`strong`),Sk(3605,`(opcional)`),Kg()(),Qc(3606,`p`),Sk(3607,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(3608,`code`),Sk(3609,`KeyboardEvent`),Kg(),Sk(3610,` com informações sobre a tecla.`),Kg()()(),Qc(3611,`tr`,172)(3612,`td`,17)(3613,`div`,26)(3614,`span`,27),Sk(3615,` label`),vu(3616,`br`),Kg()()(),Qc(3617,`td`,21)(3618,`code`,28),Sk(3619,`string`),Kg()(),Qc(3620,`td`,24)(3621,`em`)(3622,`strong`),Sk(3623,`(opcional)`),Kg()(),Qc(3624,`p`),Sk(3625,`Rótulo do campo exibido.`),Kg(),Qc(3626,`p`),Sk(3627,`Caso não seja informado, será utilizado como `),Qc(3628,`code`),Sk(3629,`label`),Kg(),Sk(3630,` o valor da propriedade `),Qc(3631,`code`),Sk(3632,`property`),Kg(),Sk(3633,` com a primeira letra em maiúsculo.`),Kg()()(),Qc(3634,`tr`,173)(3635,`td`,17)(3636,`div`,26)(3637,`span`,27),Sk(3638,` labelPosition`),vu(3639,`br`),Kg()()(),Qc(3640,`td`,21)(3641,`code`,174),Sk(3642,`PoSwitchLabelPosition`),Kg()(),Qc(3643,`td`,24)(3644,`em`)(3645,`strong`),Sk(3646,`(opcional)`),Kg()(),Qc(3647,`p`),Sk(3648,`Posição de exibição do rótulo do PoSwitch.`),Kg(),Qc(3649,`blockquote`)(3650,`p`),Sk(3651,`Por padrão exibe à direita.`),Kg()()()(),Qc(3652,`tr`,175)(3653,`td`,17)(3654,`div`,26)(3655,`span`,27),Sk(3656,` listboxControlPosition`),vu(3657,`br`),Kg()()(),Qc(3658,`td`,21)(3659,`code`,176),Sk(3660,`'top' `),Kg(),Qc(3661,`code`,177),Sk(3662,` 'bottom'`),Kg()(),Qc(3663,`td`,24)(3664,`em`)(3665,`strong`),Sk(3666,`(opcional)`),Kg()(),Qc(3667,`p`),Sk(3668,`Define a direção preferida para exibição do `),Qc(3669,`code`),Sk(3670,`listbox`),Kg(),Sk(3671,` em relação ao campo (`),Qc(3672,`code`),Sk(3673,`top`),Kg(),Sk(3674,` ou `),Qc(3675,`code`),Sk(3676,`bottom`),Kg(),Sk(3677,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg(),Qc(3678,`p`)(3679,`strong`),Sk(3680,`Componentes compatíveis:`),Kg(),Qc(3681,`code`),Sk(3682,`po-multiselect`),Kg(),Sk(3683,`, `),Qc(3684,`code`),Sk(3685,`po-combo`),Kg(),Sk(3686,`.`),Kg()()(),Qc(3687,`tr`,178)(3688,`td`,17)(3689,`div`,26)(3690,`span`,27),Sk(3691,` literals`),vu(3692,`br`),Kg()()(),Qc(3693,`td`,21)(3694,`code`,63),Sk(3695,`PoLookupLiterals `),Kg(),Qc(3696,`code`,179),Sk(3697,` PoMultiselectLiterals `),Kg(),Qc(3698,`code`,180),Sk(3699,` PoComboLiterals `),Kg(),Qc(3700,`code`,181),Sk(3701,` PoDatepickerRangeLiterals `),Kg(),Qc(3702,`code`,182),Sk(3703,` PoUploadLiterals`),Kg()(),Qc(3704,`td`,24)(3705,`em`)(3706,`strong`),Sk(3707,`(opcional)`),Kg()(),Qc(3708,`p`),Sk(3709,`Objeto com as literais usadas para os seguintes componentes: `),Qc(3710,`code`),Sk(3711,`po-lookup`),Kg(),Sk(3712,`, `),Qc(3713,`code`),Sk(3714,`po-multiselect`),Kg(),Sk(3715,`, `),Qc(3716,`code`),Sk(3717,`po-combo`),Kg(),Sk(3718,` e `),Qc(3719,`code`),Sk(3720,`po-datepicker-range`),Kg(),Sk(3721,`.`),Kg(),Qc(3722,`blockquote`)(3723,`p`),Sk(3724,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),Kg()(),Qc(3725,`p`)(3726,`strong`),Sk(3727,`Componentes compatíveis:`),Kg(),Qc(3728,`code`),Sk(3729,`po-lookup`),Kg(),Sk(3730,`, `),Qc(3731,`code`),Sk(3732,`po-multiselect`),Kg(),Sk(3733,`, `),Qc(3734,`code`),Sk(3735,`po-combo`),Kg(),Sk(3736,`, `),Qc(3737,`code`),Sk(3738,`po-datepicker-range`),Kg()()()(),Qc(3739,`tr`,183)(3740,`td`,17)(3741,`div`,26)(3742,`span`,27),Sk(3743,` loading`),vu(3744,`br`),Kg()()(),Qc(3745,`td`,21)(3746,`code`,32),Sk(3747,`boolean`),Kg()(),Qc(3748,`td`,24)(3749,`em`)(3750,`strong`),Sk(3751,`(opcional)`),Kg()(),Qc(3752,`p`),Sk(3753,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),Kg(),Qc(3754,`blockquote`)(3755,`p`),Sk(3756,`Por padrão é `),Qc(3757,`code`),Sk(3758,`false`),Kg(),Sk(3759,`.`),Kg()(),Qc(3760,`p`)(3761,`strong`),Sk(3762,`Componentes compatíveis:`),Kg(),Qc(3763,`code`),Sk(3764,`po-datepicker`),Kg(),Sk(3765,`, `),Qc(3766,`code`),Sk(3767,`po-datepicker-range`),Kg(),Sk(3768,`, `),Qc(3769,`code`),Sk(3770,`po-number`),Kg(),Sk(3771,`, `),Qc(3772,`code`),Sk(3773,`po-decimal`),Kg(),Sk(3774,`,
`),Qc(3775,`code`),Sk(3776,`po-input`),Kg(),Sk(3777,`, `),Qc(3778,`code`),Sk(3779,`po-select`),Kg(),Sk(3780,`, `),Qc(3781,`code`),Sk(3782,`po-switch`),Kg(),Sk(3783,`, `),Qc(3784,`code`),Sk(3785,`po-combo`),Kg(),Sk(3786,`, `),Qc(3787,`code`),Sk(3788,`po-lookup`),Kg(),Sk(3789,`, `),Qc(3790,`code`),Sk(3791,`po-multiselect`),Kg(),Sk(3792,`,
`),Qc(3793,`code`),Sk(3794,`po-textarea`),Kg(),Sk(3795,`, `),Qc(3796,`code`),Sk(3797,`po-password`),Kg(),Sk(3798,`, `),Qc(3799,`code`),Sk(3800,`po-upload`),Kg(),Sk(3801,`.`),Kg()()(),Qc(3802,`tr`,184)(3803,`td`,17)(3804,`div`,26)(3805,`span`,27),Sk(3806,` locale`),vu(3807,`br`),Kg()()(),Qc(3808,`td`,21)(3809,`code`,28),Sk(3810,`string`),Kg()(),Qc(3811,`td`,24)(3812,`em`)(3813,`strong`),Sk(3814,`(opcional)`),Kg()(),Qc(3815,`p`),Sk(3816,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Qc(3817,`a`,185)(3818,`code`),Sk(3819,`I18n`),Kg()()(),Qc(3820,`p`),Sk(3821,`Exemplo de utilização:`),Kg(),Qc(3822,`pre`)(3823,`code`),Sk(3824,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),Kg()(),Qc(3825,`blockquote`)(3826,`p`),Sk(3827,`Para ver quais linguagens suportadas acesse `),Qc(3828,`a`,185)(3829,`code`),Sk(3830,`I18n`),Kg()()()(),Qc(3831,`p`)(3832,`strong`),Sk(3833,`Componentes compatíveis:`),Kg(),Qc(3834,`code`),Sk(3835,`po-datepicker`),Kg(),Sk(3836,`, `),Qc(3837,`code`),Sk(3838,`po-decimal`),Kg(),Sk(3839,`, `),Qc(3840,`code`),Sk(3841,`po-timepicker`),Kg(),Sk(3842,`.`),Kg()()(),Qc(3843,`tr`,186)(3844,`td`,17)(3845,`div`,26)(3846,`span`,27),Sk(3847,` mask`),vu(3848,`br`),Kg()()(),Qc(3849,`td`,21)(3850,`code`,28),Sk(3851,`string`),Kg()(),Qc(3852,`td`,24)(3853,`em`)(3854,`strong`),Sk(3855,`(opcional)`),Kg()(),Qc(3856,`p`),Sk(3857,`Máscara para o campo.`),Kg(),Qc(3858,`p`)(3859,`strong`),Sk(3860,`Componente compatível:`),Kg(),Qc(3861,`code`),Sk(3862,`po-input`),Kg(),Sk(3863,`.`),Kg(),Qc(3864,`blockquote`)(3865,`p`),Sk(3866,`também é atribuído ao utilizar a propriedade `),Qc(3867,`code`),Sk(3868,`type: time`),Kg(),Sk(3869,`.`),Kg()(),Qc(3870,`blockquote`)(3871,`p`),Sk(3872,`Incompatível com `),Qc(3873,`code`),Sk(3874,`po-decimal`),Kg(),Sk(3875,`.`),Kg()()()(),Qc(3876,`tr`,187)(3877,`td`,17)(3878,`div`,26)(3879,`span`,27),Sk(3880,` maskFormatModel`),vu(3881,`br`),Kg()()(),Qc(3882,`td`,21)(3883,`code`,32),Sk(3884,`boolean`),Kg()(),Qc(3885,`td`,24)(3886,`em`)(3887,`strong`),Sk(3888,`(opcional)`),Kg()(),Qc(3889,`p`),Sk(3890,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Qc(3891,`code`),Sk(3892,`false`),Kg(),Sk(3893,`.`),Kg(),Qc(3894,`p`)(3895,`strong`),Sk(3896,`Componente compatível:`),Kg(),Qc(3897,`code`),Sk(3898,`po-input`),Kg(),Sk(3899,`.`),Kg(),Qc(3900,`blockquote`)(3901,`p`),Sk(3902,`também é atribuído ao utilizar a propriedade `),Qc(3903,`code`),Sk(3904,`type: time`),Kg(),Sk(3905,`.`),Kg()()()(),Qc(3906,`tr`,188)(3907,`td`,17)(3908,`div`,26)(3909,`span`,27),Sk(3910,` maskNoLengthValidation`),vu(3911,`br`),Kg()()(),Qc(3912,`td`,21)(3913,`code`,32),Sk(3914,`boolean`),Kg()(),Qc(3915,`td`,24)(3916,`em`)(3917,`strong`),Sk(3918,`(opcional)`),Kg()(),Qc(3919,`p`),Sk(3920,`Controla como o componente aplica as validações de comprimento mínimo (`),Qc(3921,`code`),Sk(3922,`minLength`),Kg(),Sk(3923,`) e máximo (`),Qc(3924,`code`),Sk(3925,`maxLength`),Kg(),Sk(3926,`) quando há uma máscara (`),Qc(3927,`code`),Sk(3928,`p-mask`),Kg(),Sk(3929,`) definida.`),Kg(),Qc(3930,`ul`)(3931,`li`),Sk(3932,`Quando `),Qc(3933,`code`),Sk(3934,`true`),Kg(),Sk(3935,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Kg(),Qc(3936,`li`),Sk(3937,`Quando `),Qc(3938,`code`),Sk(3939,`false`),Kg(),Sk(3940,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Kg()(),Qc(3941,`p`)(3942,`strong`),Sk(3943,`Componentes compatíveis:`),Kg(),Qc(3944,`code`),Sk(3945,`po-input`),Kg(),Sk(3946,`, `),Qc(3947,`code`),Sk(3948,`po-decimal`),Kg(),Sk(3949,`.`),Kg(),Qc(3950,`blockquote`)(3951,`p`),Sk(3952,`Esta propriedade é ignorada quando utilizada em conjunto com `),Qc(3953,`code`),Sk(3954,`p-mask-format-model`),Kg(),Sk(3955,`.`),Kg()(),Qc(3956,`p`),Sk(3957,`Exemplo:`),Kg(),Qc(3958,`pre`)(3959,`code`),Sk(3960,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),Kg()(),Qc(3961,`ul`)(3962,`li`),Sk(3963,`Entrada: `),Qc(3964,`code`),Sk(3965,`11.111.111/1111-11`),Kg(),Sk(3966,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),Kg()()()(),Qc(3967,`tr`,189)(3968,`td`,17)(3969,`div`,26)(3970,`span`,27),Sk(3971,` maxLength`),vu(3972,`br`),Kg()()(),Qc(3973,`td`,21)(3974,`code`,102),Sk(3975,`number`),Kg()(),Qc(3976,`td`,24)(3977,`em`)(3978,`strong`),Sk(3979,`(opcional)`),Kg()(),Qc(3980,`p`),Sk(3981,`Tamanho máximo de caracteres.`),Kg(),Qc(3982,`p`)(3983,`strong`),Sk(3984,`Componentes compatíveis:`),Kg(),Qc(3985,`code`),Sk(3986,`po-input`),Kg(),Sk(3987,`, `),Qc(3988,`code`),Sk(3989,`po-number`),Kg(),Sk(3990,`, `),Qc(3991,`code`),Sk(3992,`po-decimal`),Kg(),Sk(3993,`, `),Qc(3994,`code`),Sk(3995,`po-textarea`),Kg(),Sk(3996,`, `),Qc(3997,`code`),Sk(3998,`po-password`),Kg(),Sk(3999,`.`),Kg()()(),Qc(4e3,`tr`,190)(4001,`td`,17)(4002,`div`,26)(4003,`span`,27),Sk(4004,` maxTime`),vu(4005,`br`),Kg()()(),Qc(4006,`td`,21)(4007,`code`,28),Sk(4008,`string`),Kg()(),Qc(4009,`td`,24)(4010,`em`)(4011,`strong`),Sk(4012,`(opcional)`),Kg()(),Qc(4013,`p`),Sk(4014,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Qc(4015,`code`),Sk(4016,`HH:mm`),Kg(),Sk(4017,` ou `),Qc(4018,`code`),Sk(4019,`HH:mm:ss`),Kg(),Sk(4020,`.`),Kg(),Qc(4021,`p`)(4022,`strong`),Sk(4023,`Componente compatível:`),Kg(),Qc(4024,`code`),Sk(4025,`po-datetimepicker`),Kg(),Sk(4026,`, `),Qc(4027,`code`),Sk(4028,`po-timepicker`),Kg()()()(),Qc(4029,`tr`,191)(4030,`td`,17)(4031,`div`,26)(4032,`span`,27),Sk(4033,` maxValue`),vu(4034,`br`),Kg()()(),Qc(4035,`td`,21)(4036,`code`,28),Sk(4037,`string `),Kg(),Qc(4038,`code`,102),Sk(4039,` number`),Kg()(),Qc(4040,`td`,24)(4041,`em`)(4042,`strong`),Sk(4043,`(opcional)`),Kg()(),Qc(4044,`p`),Sk(4045,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Qc(4046,`em`),Sk(4047,`number`),Kg(),Sk(4048,`, `),Qc(4049,`em`),Sk(4050,`date`),Kg(),Sk(4051,`, `),Qc(4052,`em`),Sk(4053,`dateTime`),Kg(),Sk(4054,` ou `),Qc(4055,`em`),Sk(4056,`time`),Kg(),Sk(4057,`.`),Kg(),Qc(4058,`blockquote`)(4059,`p`),Sk(4060,`Para `),Qc(4061,`code`),Sk(4062,`po-timepicker`),Kg(),Sk(4063,`, o valor deve estar no formato `),Qc(4064,`code`),Sk(4065,`HH:mm`),Kg(),Sk(4066,` ou `),Qc(4067,`code`),Sk(4068,`HH:mm:ss`),Kg(),Sk(4069,`.`),Kg()(),Qc(4070,`p`)(4071,`strong`),Sk(4072,`Componentes compatíveis:`),Kg(),Qc(4073,`code`),Sk(4074,`po-datepicker`),Kg(),Sk(4075,`, `),Qc(4076,`code`),Sk(4077,`po-datepicker-range`),Kg(),Sk(4078,`, `),Qc(4079,`code`),Sk(4080,`po-number`),Kg(),Sk(4081,`, `),Qc(4082,`code`),Sk(4083,`po-decimal`),Kg(),Sk(4084,`, `),Qc(4085,`code`),Sk(4086,`po-timepicker`),Kg()()()(),Qc(4087,`tr`,192)(4088,`td`,17)(4089,`div`,26)(4090,`span`,27),Sk(4091,` minLength`),vu(4092,`br`),Kg()()(),Qc(4093,`td`,21)(4094,`code`,102),Sk(4095,`number`),Kg()(),Qc(4096,`td`,24)(4097,`em`)(4098,`strong`),Sk(4099,`(opcional)`),Kg()(),Qc(4100,`p`),Sk(4101,`Tamanho mínimo de caracteres.`),Kg(),Qc(4102,`p`)(4103,`strong`),Sk(4104,`Componentes compatíveis:`),Kg(),Qc(4105,`code`),Sk(4106,`po-input`),Kg(),Sk(4107,`, `),Qc(4108,`code`),Sk(4109,`po-number`),Kg(),Sk(4110,`, `),Qc(4111,`code`),Sk(4112,`po-decimal`),Kg(),Sk(4113,`, `),Qc(4114,`code`),Sk(4115,`po-textarea`),Kg(),Sk(4116,`, `),Qc(4117,`code`),Sk(4118,`po-password`),Kg(),Sk(4119,`.`),Kg()()(),Qc(4120,`tr`,193)(4121,`td`,17)(4122,`div`,26)(4123,`span`,27),Sk(4124,` minTime`),vu(4125,`br`),Kg()()(),Qc(4126,`td`,21)(4127,`code`,28),Sk(4128,`string`),Kg()(),Qc(4129,`td`,24)(4130,`em`)(4131,`strong`),Sk(4132,`(opcional)`),Kg()(),Qc(4133,`p`),Sk(4134,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Qc(4135,`code`),Sk(4136,`HH:mm`),Kg(),Sk(4137,` ou `),Qc(4138,`code`),Sk(4139,`HH:mm:ss`),Kg(),Sk(4140,`.`),Kg(),Qc(4141,`p`)(4142,`strong`),Sk(4143,`Componente compatível:`),Kg(),Qc(4144,`code`),Sk(4145,`po-datetimepicker`),Kg(),Sk(4146,`, `),Qc(4147,`code`),Sk(4148,`po-timepicker`),Kg()()()(),Qc(4149,`tr`,194)(4150,`td`,17)(4151,`div`,26)(4152,`span`,27),Sk(4153,` minValue`),vu(4154,`br`),Kg()()(),Qc(4155,`td`,21)(4156,`code`,28),Sk(4157,`string `),Kg(),Qc(4158,`code`,102),Sk(4159,` number`),Kg()(),Qc(4160,`td`,24)(4161,`em`)(4162,`strong`),Sk(4163,`(opcional)`),Kg()(),Qc(4164,`p`),Sk(4165,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Qc(4166,`em`),Sk(4167,`number`),Kg(),Sk(4168,`, `),Qc(4169,`em`),Sk(4170,`date`),Kg(),Sk(4171,`, `),Qc(4172,`em`),Sk(4173,`dateTime`),Kg(),Sk(4174,` ou `),Qc(4175,`em`),Sk(4176,`time`),Kg(),Sk(4177,`.`),Kg(),Qc(4178,`blockquote`)(4179,`p`),Sk(4180,`Para `),Qc(4181,`code`),Sk(4182,`po-timepicker`),Kg(),Sk(4183,`, o valor deve estar no formato `),Qc(4184,`code`),Sk(4185,`HH:mm`),Kg(),Sk(4186,` ou `),Qc(4187,`code`),Sk(4188,`HH:mm:ss`),Kg(),Sk(4189,`.`),Kg()(),Qc(4190,`p`)(4191,`strong`),Sk(4192,`Componentes compatíveis:`),Kg(),Qc(4193,`code`),Sk(4194,`po-datepicker`),Kg(),Sk(4195,`, `),Qc(4196,`code`),Sk(4197,`po-datepicker-range`),Kg(),Sk(4198,`, `),Qc(4199,`code`),Sk(4200,`po-number`),Kg(),Sk(4201,`, `),Qc(4202,`code`),Sk(4203,`po-decimal`),Kg(),Sk(4204,`, `),Qc(4205,`code`),Sk(4206,`po-timepicker`),Kg()()()(),Qc(4207,`tr`,195)(4208,`td`,17)(4209,`div`,26)(4210,`span`,27),Sk(4211,` minuteInterval`),vu(4212,`br`),Kg()()(),Qc(4213,`td`,21)(4214,`code`,102),Sk(4215,`number`),Kg()(),Qc(4216,`td`,24)(4217,`em`)(4218,`strong`),Sk(4219,`(opcional)`),Kg()(),Qc(4220,`p`),Sk(4221,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),Kg()()(),Qc(4222,`tr`,196)(4223,`td`,17)(4224,`div`,26)(4225,`span`,27),Sk(4226,` mode`),vu(4227,`br`),Kg()()(),Qc(4228,`td`,21)(4229,`code`,197),Sk(4230,`'month-year' `),Kg(),Qc(4231,`code`,198),Sk(4232,` 'year'`),Kg()(),Qc(4233,`td`,24)(4234,`em`)(4235,`strong`),Sk(4236,`(opcional)`),Kg()(),Qc(4237,`p`),Sk(4238,`Define o modo de seleção do `),Qc(4239,`code`),Sk(4240,`po-datepicker`),Kg(),Sk(4241,`.`),Kg(),Qc(4242,`p`),Sk(4243,`Valores aceitos:`),Kg(),Qc(4244,`ul`)(4245,`li`)(4246,`code`),Sk(4247,`'month-year'`),Kg(),Sk(4248,`: exibe seleção de mês e ano (formato `),Qc(4249,`code`),Sk(4250,`MM/YYYY`),Kg(),Sk(4251,`)`),Kg(),Qc(4252,`li`)(4253,`code`),Sk(4254,`'year'`),Kg(),Sk(4255,`: exibe seleção apenas de ano (formato `),Qc(4256,`code`),Sk(4257,`YYYY`),Kg(),Sk(4258,`)`),Kg()(),Qc(4259,`p`)(4260,`strong`),Sk(4261,`Componente compatível:`),Kg(),Qc(4262,`code`),Sk(4263,`po-datepicker`),Kg()()()(),Qc(4264,`tr`,199)(4265,`td`,17)(4266,`div`,26)(4267,`span`,27),Sk(4268,` modelFormat`),vu(4269,`br`),Kg()()(),Qc(4270,`td`,21)(4271,`code`,200),Sk(4272,`PoTimepickerModelFormat`),Kg()(),Qc(4273,`td`,24)(4274,`em`)(4275,`strong`),Sk(4276,`(opcional)`),Kg()(),Qc(4277,`p`),Sk(4278,`Define o formato do valor do horário a ser utilizado no model do `),Qc(4279,`code`),Sk(4280,`po-timepicker`),Kg(),Sk(4281,`.`),Kg(),Qc(4282,`blockquote`)(4283,`p`),Sk(4284,`Veja os valores válidos no `),Qc(4285,`code`),Sk(4286,`PoTimepickerModelFormat`),Kg(),Sk(4287,`.`),Kg()(),Qc(4288,`p`)(4289,`strong`),Sk(4290,`Componente compatível:`),Kg(),Qc(4291,`code`),Sk(4292,`po-timepicker`),Kg()()()(),Qc(4293,`tr`,201)(4294,`td`,17)(4295,`div`,26)(4296,`span`,27),Sk(4297,` multiple`),vu(4298,`br`),Kg()()(),Qc(4299,`td`,21)(4300,`code`,32),Sk(4301,`boolean`),Kg()(),Qc(4302,`td`,24)(4303,`em`)(4304,`strong`),Sk(4305,`(opcional)`),Kg()(),Qc(4306,`p`),Sk(4307,`Permite a seleção de múltiplos itens.`),Kg(),Qc(4308,`p`)(4309,`strong`),Sk(4310,`Componentes compatíveis:`),Kg(),Qc(4311,`code`),Sk(4312,`po-lookup`),Kg(),Sk(4313,`, `),Qc(4314,`code`),Sk(4315,`po-upload`),Kg()()()(),Qc(4316,`tr`,202)(4317,`td`,17)(4318,`div`,26)(4319,`span`,27),Sk(4320,` noAutocomplete`),vu(4321,`br`),Kg()()(),Qc(4322,`td`,21)(4323,`code`,32),Sk(4324,`boolean`),Kg()(),Qc(4325,`td`,24)(4326,`em`)(4327,`strong`),Sk(4328,`(opcional)`),Kg()(),Qc(4329,`p`),Sk(4330,`Define a propriedade nativa `),Qc(4331,`code`),Sk(4332,`autocomplete`),Kg(),Sk(4333,` do campo como off.`),Kg(),Qc(4334,`p`)(4335,`strong`),Sk(4336,`Componentes compatíveis:`),Kg(),Qc(4337,`code`),Sk(4338,`po-datepicker`),Kg(),Sk(4339,`, `),Qc(4340,`code`),Sk(4341,`po-datepicker-range`),Kg(),Sk(4342,`, `),Qc(4343,`code`),Sk(4344,`po-input`),Kg(),Sk(4345,`, `),Qc(4346,`code`),Sk(4347,`po-number`),Kg(),Sk(4348,`, `),Qc(4349,`code`),Sk(4350,`po-decimal`),Kg(),Sk(4351,`,
`),Qc(4352,`code`),Sk(4353,`po-lookup`),Kg(),Sk(4354,`, `),Qc(4355,`code`),Sk(4356,`po-password`),Kg(),Sk(4357,`, `),Qc(4358,`code`),Sk(4359,`po-timepicker`),Kg(),Sk(4360,`.`),Kg()()(),Qc(4361,`tr`,203)(4362,`td`,17)(4363,`div`,26)(4364,`span`,27),Sk(4365,` offsetColumns`),vu(4366,`br`),Kg()()(),Qc(4367,`td`,21)(4368,`code`,102),Sk(4369,`number`),Kg()(),Qc(4370,`td`,24)(4371,`em`)(4372,`strong`),Sk(4373,`(opcional)`),Kg()(),Qc(4374,`p`),Sk(4375,`Tamanho do espaço de exibição do campo em telas.`),Kg(),Qc(4376,`p`),Sk(4377,`Deve ser usado o sistema de `),Qc(4378,`strong`),Sk(4379,`grid`),Kg(),Sk(4380,` do PO (1 ... 12 colunas).`),Kg(),Qc(4381,`blockquote`)(4382,`p`),Sk(4383,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),Kg()()()(),Qc(4384,`tr`,204)(4385,`td`,17)(4386,`div`,26)(4387,`span`,27),Sk(4388,` offsetLgColumns`),vu(4389,`br`),Kg()()(),Qc(4390,`td`,21)(4391,`code`,102),Sk(4392,`number`),Kg()(),Qc(4393,`td`,24)(4394,`em`)(4395,`strong`),Sk(4396,`(opcional)`),Kg()(),Qc(4397,`p`),Sk(4398,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),Kg(),Qc(4399,`p`),Sk(4400,`Deve ser usado o sistema de `),Qc(4401,`strong`),Sk(4402,`grid`),Kg(),Sk(4403,` do PO (1 ... 12 colunas).`),Kg(),Qc(4404,`blockquote`)(4405,`p`),Sk(4406,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(4407,`code`),Sk(4408,`offsetColumns`),Kg(),Sk(4409,`.`),Kg()()()(),Qc(4410,`tr`,205)(4411,`td`,17)(4412,`div`,26)(4413,`span`,27),Sk(4414,` offsetMdColumns`),vu(4415,`br`),Kg()()(),Qc(4416,`td`,21)(4417,`code`,102),Sk(4418,`number`),Kg()(),Qc(4419,`td`,24)(4420,`em`)(4421,`strong`),Sk(4422,`(opcional)`),Kg()(),Qc(4423,`p`),Sk(4424,`Tamanho do espaço de exibição do campo em telas médias (md).`),Kg(),Qc(4425,`p`),Sk(4426,`Deve ser usado o sistema de `),Qc(4427,`strong`),Sk(4428,`grid`),Kg(),Sk(4429,` do PO (1 ... 12 colunas).`),Kg(),Qc(4430,`blockquote`)(4431,`p`),Sk(4432,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(4433,`code`),Sk(4434,`offsetColumns`),Kg(),Sk(4435,`.`),Kg()()()(),Qc(4436,`tr`,206)(4437,`td`,17)(4438,`div`,26)(4439,`span`,27),Sk(4440,` offsetSmColumns`),vu(4441,`br`),Kg()()(),Qc(4442,`td`,21)(4443,`code`,102),Sk(4444,`number`),Kg()(),Qc(4445,`td`,24)(4446,`em`)(4447,`strong`),Sk(4448,`(opcional)`),Kg()(),Qc(4449,`p`),Sk(4450,`Tamanho do espaço de exibição do campo em telas menores (sm).`),Kg(),Qc(4451,`p`),Sk(4452,`Deve ser usado o sistema de `),Qc(4453,`strong`),Sk(4454,`grid`),Kg(),Sk(4455,` do PO (1 ... 12 colunas).`),Kg(),Qc(4456,`blockquote`)(4457,`p`),Sk(4458,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(4459,`code`),Sk(4460,`offsetColumns`),Kg(),Sk(4461,`.`),Kg()()()(),Qc(4462,`tr`,207)(4463,`td`,17)(4464,`div`,26)(4465,`span`,27),Sk(4466,` offsetXlColumns`),vu(4467,`br`),Kg()()(),Qc(4468,`td`,21)(4469,`code`,102),Sk(4470,`number`),Kg()(),Qc(4471,`td`,24)(4472,`em`)(4473,`strong`),Sk(4474,`(opcional)`),Kg()(),Qc(4475,`p`),Sk(4476,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),Kg(),Qc(4477,`p`),Sk(4478,`Deve ser usado o sistema de `),Qc(4479,`strong`),Sk(4480,`grid`),Kg(),Sk(4481,` do PO (1 ... 12 colunas).`),Kg(),Qc(4482,`blockquote`)(4483,`p`),Sk(4484,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Qc(4485,`code`),Sk(4486,`offsetColumns`),Kg(),Sk(4487,`.`),Kg()()()(),Qc(4488,`tr`,208)(4489,`td`,17)(4490,`div`,26)(4491,`span`,27),Sk(4492,` onError`),vu(4493,`br`),Kg()()(),Qc(4494,`td`,21)(4495,`code`,89),Sk(4496,`Function`),Kg()(),Qc(4497,`td`,24)(4498,`em`)(4499,`strong`),Sk(4500,`(opcional)`),Kg()(),Qc(4501,`p`),Sk(4502,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Kg(),Qc(4503,`blockquote`)(4504,`p`),Sk(4505,`Por parâmetro será passado o objeto do retorno que é do tipo `),Qc(4506,`code`),Sk(4507,`HttpErrorResponse`),Kg(),Sk(4508,`.`),Kg()(),Qc(4509,`p`)(4510,`strong`),Sk(4511,`Componente compatível`),Kg(),Sk(4512,`: `),Qc(4513,`code`),Sk(4514,`po-upload`),Kg()()()(),Qc(4515,`tr`,209)(4516,`td`,17)(4517,`div`,26)(4518,`span`,27),Sk(4519,` onSuccess`),vu(4520,`br`),Kg()()(),Qc(4521,`td`,21)(4522,`code`,89),Sk(4523,`Function`),Kg()(),Qc(4524,`td`,24)(4525,`em`)(4526,`strong`),Sk(4527,`(opcional)`),Kg()(),Qc(4528,`p`),Sk(4529,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Kg(),Qc(4530,`blockquote`)(4531,`p`),Sk(4532,`Por parâmetro será passado o objeto do retorno que é do tipo `),Qc(4533,`code`),Sk(4534,`HttpResponse`),Kg(),Sk(4535,`.`),Kg()(),Qc(4536,`p`)(4537,`strong`),Sk(4538,`Componente compatível`),Kg(),Sk(4539,`: `),Qc(4540,`code`),Sk(4541,`po-upload`),Kg()()()(),Qc(4542,`tr`,210)(4543,`td`,17)(4544,`div`,26)(4545,`span`,27),Sk(4546,` onUpload`),vu(4547,`br`),Kg()()(),Qc(4548,`td`,21)(4549,`code`,89),Sk(4550,`Function`),Kg()(),Qc(4551,`td`,24)(4552,`em`)(4553,`strong`),Sk(4554,`(opcional)`),Kg()(),Qc(4555,`p`),Sk(4556,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Kg(),Qc(4557,`pre`)(4558,`code`),Sk(4559,`event.data = {id: 'id do usu\xE1rio'};
`),Kg()(),Qc(4560,`p`)(4561,`strong`),Sk(4562,`Componente compatível`),Kg(),Sk(4563,`: `),Qc(4564,`code`),Sk(4565,`po-upload`),Kg()()()(),Qc(4566,`tr`,211)(4567,`td`,17)(4568,`div`,26)(4569,`span`,27),Sk(4570,` optional`),vu(4571,`br`),Kg()()(),Qc(4572,`td`,21)(4573,`code`,32),Sk(4574,`boolean`),Kg()(),Qc(4575,`td`,24)(4576,`em`)(4577,`strong`),Sk(4578,`(opcional)`),Kg()(),Qc(4579,`p`),Sk(4580,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(4581,`blockquote`)(4582,`p`),Sk(4583,`A indicação não será exibida, se:`),Kg()(),Qc(4584,`ul`)(4585,`li`),Sk(4586,`O campo for `),Qc(4587,`code`),Sk(4588,`required`),Kg(),Sk(4589,`, ou;`),Kg(),Qc(4590,`li`),Sk(4591,`Não possuir `),Qc(4592,`code`),Sk(4593,`help`),Kg(),Sk(4594,` e `),Qc(4595,`code`),Sk(4596,`label`),Kg(),Sk(4597,`.`),Kg()(),Qc(4598,`p`)(4599,`strong`),Sk(4600,`Componentes compatíveis:`),Kg(),Qc(4601,`code`),Sk(4602,`po-datepicker`),Kg(),Sk(4603,`, `),Qc(4604,`code`),Sk(4605,`po-datepicker-range`),Kg(),Sk(4606,`, `),Qc(4607,`code`),Sk(4608,`po-timepicker`),Kg(),Sk(4609,`, `),Qc(4610,`code`),Sk(4611,`po-input`),Kg(),Sk(4612,`, `),Qc(4613,`code`),Sk(4614,`po-number`),Kg(),Sk(4615,`,
`),Qc(4616,`code`),Sk(4617,`po-decimal`),Kg(),Sk(4618,`, `),Qc(4619,`code`),Sk(4620,`po-select`),Kg(),Sk(4621,`, `),Qc(4622,`code`),Sk(4623,`po-radio-group`),Kg(),Sk(4624,`, `),Qc(4625,`code`),Sk(4626,`po-combo`),Kg(),Sk(4627,`, `),Qc(4628,`code`),Sk(4629,`po-lookup`),Kg(),Sk(4630,`, `),Qc(4631,`code`),Sk(4632,`po-checkbox-group`),Kg(),Sk(4633,`, `),Qc(4634,`code`),Sk(4635,`po-multiselect`),Kg(),Sk(4636,`,
`),Qc(4637,`code`),Sk(4638,`po-textarea`),Kg(),Sk(4639,`, `),Qc(4640,`code`),Sk(4641,`po-password`),Kg(),Sk(4642,`.`),Kg()()(),Qc(4643,`tr`,212)(4644,`td`,17)(4645,`div`,26)(4646,`span`,27),Sk(4647,` options`),vu(4648,`br`),Kg()()(),Qc(4649,`td`,21)(4650,`code`,48),Sk(4651,`Array<string> `),Kg(),Qc(4652,`code`,213),Sk(4653,` Array<PoSelectOption> `),Kg(),Qc(4654,`code`,214),Sk(4655,` Array<PoMultiselectOption> `),Kg(),Qc(4656,`code`,215),Sk(4657,` Array<PoCheckboxGroupOption> `),Kg(),Qc(4658,`code`,216),Sk(4659,` Array<any>`),Kg()(),Qc(4660,`td`,24)(4661,`em`)(4662,`strong`),Sk(4663,`(opcional)`),Kg()(),Qc(4664,`p`),Sk(4665,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),Kg(),Qc(4666,`p`)(4667,`strong`),Sk(4668,`Componentes compatíveis:`),Kg(),Qc(4669,`code`),Sk(4670,`po-select`),Kg(),Sk(4671,`, `),Qc(4672,`code`),Sk(4673,`po-radio-group`),Kg(),Sk(4674,`, `),Qc(4675,`code`),Sk(4676,`po-checkbox-group`),Kg(),Sk(4677,`, `),Qc(4678,`code`),Sk(4679,`po-multiselect`),Kg(),Sk(4680,`.`),Kg()()(),Qc(4681,`tr`,217)(4682,`td`,17)(4683,`div`,26)(4684,`span`,27),Sk(4685,` optionsMulti`),vu(4686,`br`),Kg()()(),Qc(4687,`td`,21)(4688,`code`,32),Sk(4689,`boolean`),Kg()(),Qc(4690,`td`,24)(4691,`em`)(4692,`strong`),Sk(4693,`(opcional)`),Kg()(),Qc(4694,`p`),Sk(4695,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),Kg()()(),Qc(4696,`tr`,218)(4697,`td`,17)(4698,`div`,26)(4699,`span`,27),Sk(4700,` optionsService`),vu(4701,`br`),Kg()()(),Qc(4702,`td`,21)(4703,`code`,28),Sk(4704,`string `),Kg(),Qc(4705,`code`,219),Sk(4706,` PoComboFilter `),Kg(),Qc(4707,`code`,220),Sk(4708,` PoMultiselectFilter`),Kg()(),Qc(4709,`td`,24)(4710,`em`)(4711,`strong`),Sk(4712,`(opcional)`),Kg()(),Qc(4713,`p`),Sk(4714,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Qc(4715,`strong`),Sk(4716,`Importante`),Kg()(),Qc(4717,`blockquote`)(4718,`p`),Sk(4719,`Para que funcione corretamente, é importante que o serviço siga o `),Qc(4720,`a`,7),Sk(4721,`guia de API do PO UI`),Kg(),Sk(4722,`.`),Kg()()()(),Qc(4723,`tr`,221)(4724,`td`,17)(4725,`div`,26)(4726,`span`,27),Sk(4727,` order`),vu(4728,`br`),Kg()()(),Qc(4729,`td`,21)(4730,`code`,102),Sk(4731,`number`),Kg()(),Qc(4732,`td`,24)(4733,`em`)(4734,`strong`),Sk(4735,`(opcional)`),Kg()(),Qc(4736,`p`),Sk(4737,`Informa a ordem de exibição do campo.`),Kg(),Qc(4738,`p`),Sk(4739,`Exemplo de utilização:`),Kg(),Qc(4740,`p`)(4741,`code`),Sk(4742,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),Kg()(),Qc(4743,`p`),Sk(4744,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Qc(4745,`code`),Sk(4746,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),Kg()(),Qc(4747,`p`),Sk(4748,`Só serão aceitos valores com números inteiros maiores do que zero.`),Kg(),Qc(4749,`p`),Sk(4750,`Campos sem `),Qc(4751,`code`),Sk(4752,`order`),Kg(),Sk(4753,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),Kg()()(),Qc(4754,`tr`,222)(4755,`td`,17)(4756,`div`,26)(4757,`span`,27),Sk(4758,` params`),vu(4759,`br`),Kg()()(),Qc(4760,`td`,21)(4761,`code`,52),Sk(4762,`any`),Kg()(),Qc(4763,`td`,24)(4764,`em`)(4765,`strong`),Sk(4766,`(opcional)`),Kg()(),Qc(4767,`p`),Sk(4768,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Qc(4769,`code`),Sk(4770,`po-lookup`),Kg(),Sk(4771,` e
`),Qc(4772,`code`),Sk(4773,`po-combo`),Kg(),Sk(4774,`.`),Kg(),Qc(4775,`p`),Sk(4776,`Por exemplo, para o parâmetro `),Qc(4777,`code`),Sk(4778,`{ age: 23 }`),Kg(),Sk(4779,` a URL da requisição ficaria:`),Kg(),Qc(4780,`p`)(4781,`code`),Sk(4782,`url + ?age=23&filter=Peter`),Kg()()()(),Qc(4783,`tr`,223)(4784,`td`,17)(4785,`div`,26)(4786,`span`,27),Sk(4787,` pattern`),vu(4788,`br`),Kg()()(),Qc(4789,`td`,21)(4790,`code`,28),Sk(4791,`string`),Kg()(),Qc(4792,`td`,24)(4793,`em`)(4794,`strong`),Sk(4795,`(opcional)`),Kg()(),Qc(4796,`p`),Sk(4797,`Regex para validação do campo.`),Kg(),Qc(4798,`p`)(4799,`strong`),Sk(4800,`Componentes compatíveis:`),Kg(),Qc(4801,`code`),Sk(4802,`po-input`),Kg(),Sk(4803,`, `),Qc(4804,`code`),Sk(4805,`po-password`),Kg(),Sk(4806,`.`),Kg(),Qc(4807,`blockquote`)(4808,`p`),Sk(4809,`Incompatível com `),Qc(4810,`code`),Sk(4811,`po-decimal`),Kg(),Sk(4812,`.`),Kg()()()(),Qc(4813,`tr`,224)(4814,`td`,17)(4815,`div`,26)(4816,`span`,27),Sk(4817,` placeholder`),vu(4818,`br`),Kg()()(),Qc(4819,`td`,21)(4820,`code`,28),Sk(4821,`string`),Kg()(),Qc(4822,`td`,24)(4823,`em`)(4824,`strong`),Sk(4825,`(opcional)`),Kg()(),Qc(4826,`p`),Sk(4827,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),Kg(),Qc(4828,`p`)(4829,`strong`),Sk(4830,`Componentes compatíveis:`),Kg(),Qc(4831,`code`),Sk(4832,`po-datepicker`),Kg(),Sk(4833,`, `),Qc(4834,`code`),Sk(4835,`po-datepicker-range`),Kg(),Sk(4836,`, `),Qc(4837,`code`),Sk(4838,`po-timepicker`),Kg(),Sk(4839,`, `),Qc(4840,`code`),Sk(4841,`po-input`),Kg(),Sk(4842,`, `),Qc(4843,`code`),Sk(4844,`po-number`),Kg(),Sk(4845,`, `),Qc(4846,`code`),Sk(4847,`po-decimal`),Kg(),Sk(4848,`, `),Qc(4849,`code`),Sk(4850,`po-select`),Kg(),Sk(4851,`, `),Qc(4852,`code`),Sk(4853,`po-combo`),Kg(),Sk(4854,`, `),Qc(4855,`code`),Sk(4856,`po-lookup`),Kg(),Sk(4857,`, `),Qc(4858,`code`),Sk(4859,`po-multiselect`),Kg(),Sk(4860,`, `),Qc(4861,`code`),Sk(4862,`po-textarea`),Kg(),Sk(4863,`, `),Qc(4864,`code`),Sk(4865,`po-password`),Kg(),Sk(4866,`.`),Kg()()(),Qc(4867,`tr`,225)(4868,`td`,17)(4869,`div`,26)(4870,`span`,27),Sk(4871,` placeholderSearch`),vu(4872,`br`),Kg()()(),Qc(4873,`td`,21)(4874,`code`,28),Sk(4875,`string`),Kg()(),Qc(4876,`td`,24)(4877,`em`)(4878,`strong`),Sk(4879,`(opcional)`),Kg()(),Qc(4880,`p`),Sk(4881,`Placeholder do campo de pesquisa do `),Qc(4882,`code`),Sk(4883,`po-multiselect`),Kg(),Sk(4884,`.`),Kg(),Qc(4885,`blockquote`)(4886,`p`),Sk(4887,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Kg()()()(),Qc(4888,`tr`,226)(4889,`td`,17)(4890,`div`,26)(4891,`span`,27),Sk(4892,` property`),vu(4893,`br`),Kg()()(),Qc(4894,`td`,21)(4895,`code`,28),Sk(4896,`string`),Kg()(),Qc(4897,`td`,24)(4898,`p`),Sk(4899,`Nome de referência do campo.`),Kg()()(),Qc(4900,`tr`,227)(4901,`td`,17)(4902,`div`,26)(4903,`span`,27),Sk(4904,` range`),vu(4905,`br`),Kg()()(),Qc(4906,`td`,21)(4907,`code`,32),Sk(4908,`boolean`),Kg()(),Qc(4909,`td`,24)(4910,`em`)(4911,`strong`),Sk(4912,`(opcional)`),Kg()(),Qc(4913,`p`),Sk(4914,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),Kg(),Qc(4915,`blockquote`)(4916,`p`),Sk(4917,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),Kg()()()(),Qc(4918,`tr`,228)(4919,`td`,17)(4920,`div`,26)(4921,`span`,27),Sk(4922,` rangePresetOptions`),vu(4923,`br`),Kg()()(),Qc(4924,`td`,21)(4925,`code`,229),Sk(4926,`Array<PoCalendarRangePreset>`),Kg()(),Qc(4927,`td`,24)(4928,`em`)(4929,`strong`),Sk(4930,`(opcional)`),Kg()(),Qc(4931,`p`),Sk(4932,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),Kg(),Qc(4933,`p`),Sk(4934,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Qc(4935,`code`),Sk(4936,`PoCalendarRangePreset`),Kg(),Sk(4937,`.`),Kg(),Qc(4938,`p`)(4939,`strong`),Sk(4940,`Componente compatível:`),Kg(),Qc(4941,`code`),Sk(4942,`po-datepicker-range`),Kg()()()(),Qc(4943,`tr`,230)(4944,`td`,17)(4945,`div`,26)(4946,`span`,27),Sk(4947,` rangePresets`),vu(4948,`br`),Kg()()(),Qc(4949,`td`,21)(4950,`code`,32),Sk(4951,`boolean `),Kg(),Qc(4952,`code`,48),Sk(4953,` Array<string>`),Kg()(),Qc(4954,`td`,24)(4955,`em`)(4956,`strong`),Sk(4957,`(opcional)`),Kg()(),Qc(4958,`p`),Sk(4959,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),Kg(),Qc(4960,`p`),Sk(4961,`Aceita os seguintes valores:`),Kg(),Qc(4962,`ul`)(4963,`li`)(4964,`code`),Sk(4965,`true`),Kg(),Sk(4966,`: exibe todos os presets padrão.`),Kg(),Qc(4967,`li`)(4968,`code`),Sk(4969,`false`),Kg(),Sk(4970,`: não exibe os presets padrão.`),Kg(),Qc(4971,`li`)(4972,`code`),Sk(4973,`Array<string>`),Kg(),Sk(4974,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),Kg()(),Qc(4975,`p`)(4976,`strong`),Sk(4977,`Componente compatível:`),Kg(),Qc(4978,`code`),Sk(4979,`po-datepicker-range`),Kg()()()(),Qc(4980,`tr`,231)(4981,`td`,17)(4982,`div`,26)(4983,`span`,27),Sk(4984,` rangePresetsOrder`),vu(4985,`br`),Kg()()(),Qc(4986,`td`,21)(4987,`code`,232),Sk(4988,`'asc' `),Kg(),Qc(4989,`code`,233),Sk(4990,` 'desc'`),Kg()(),Qc(4991,`td`,24)(4992,`em`)(4993,`strong`),Sk(4994,`(opcional)`),Kg()(),Qc(4995,`p`),Sk(4996,`Define a ordenação dos presets na lista.`),Kg(),Qc(4997,`p`),Sk(4998,`Valores aceitos:`),Kg(),Qc(4999,`ul`)(5e3,`li`)(5001,`code`),Sk(5002,`'asc'`),Kg(),Sk(5003,`: ordenação crescente (passado → futuro)`),Kg(),Qc(5004,`li`)(5005,`code`),Sk(5006,`'desc'`),Kg(),Sk(5007,`: ordenação decrescente (futuro → passado)`),Kg()(),Qc(5008,`p`)(5009,`strong`),Sk(5010,`Componente compatível:`),Kg(),Qc(5011,`code`),Sk(5012,`po-datepicker-range`),Kg()()()(),Qc(5013,`tr`,234)(5014,`td`,17)(5015,`div`,26)(5016,`span`,27),Sk(5017,` readonly`),vu(5018,`br`),Kg()()(),Qc(5019,`td`,21)(5020,`code`,32),Sk(5021,`boolean`),Kg()(),Qc(5022,`td`,24)(5023,`em`)(5024,`strong`),Sk(5025,`(opcional)`),Kg()(),Qc(5026,`p`),Sk(5027,`Indica que o campo será somente leitura.`),Kg(),Qc(5028,`p`)(5029,`strong`),Sk(5030,`Componentes compatíveis:`),Kg(),Qc(5031,`code`),Sk(5032,`po-datepicker`),Kg(),Sk(5033,`, `),Qc(5034,`code`),Sk(5035,`po-datepicker-range`),Kg(),Sk(5036,`, `),Qc(5037,`code`),Sk(5038,`po-timepicker`),Kg(),Sk(5039,`, `),Qc(5040,`code`),Sk(5041,`po-input`),Kg(),Sk(5042,`, `),Qc(5043,`code`),Sk(5044,`po-number`),Kg(),Sk(5045,`,
`),Qc(5046,`code`),Sk(5047,`po-decimal`),Kg(),Sk(5048,`, `),Qc(5049,`code`),Sk(5050,`po-select`),Kg(),Sk(5051,`, `),Qc(5052,`code`),Sk(5053,`po-textarea`),Kg(),Sk(5054,`, `),Qc(5055,`code`),Sk(5056,`po-password`),Kg(),Sk(5057,`.`),Kg()()(),Qc(5058,`tr`,235)(5059,`td`,17)(5060,`div`,26)(5061,`span`,27),Sk(5062,` removeInitialFilter`),vu(5063,`br`),Kg()()(),Qc(5064,`td`,21)(5065,`code`,32),Sk(5066,`boolean`),Kg()(),Qc(5067,`td`,24)(5068,`em`)(5069,`strong`),Sk(5070,`(opcional)`),Kg()(),Qc(5071,`p`),Sk(5072,`Define que o filtro no primeiro clique será removido.`),Kg(),Qc(5073,`blockquote`)(5074,`p`),Sk(5075,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),Kg()(),Qc(5076,`p`)(5077,`strong`),Sk(5078,`Componente compatível`),Kg(),Sk(5079,`: `),Qc(5080,`code`),Sk(5081,`po-combo`),Kg()()()(),Qc(5082,`tr`,236)(5083,`td`,17)(5084,`div`,26)(5085,`span`,27),Sk(5086,` required`),vu(5087,`br`),Kg()()(),Qc(5088,`td`,21)(5089,`code`,32),Sk(5090,`boolean`),Kg()(),Qc(5091,`td`,24)(5092,`em`)(5093,`strong`),Sk(5094,`(opcional)`),Kg()(),Qc(5095,`p`),Sk(5096,`Define a obrigatoriedade do campo.`),Kg(),Qc(5097,`p`)(5098,`strong`),Sk(5099,`Componentes compatíveis:`),Kg(),Qc(5100,`code`),Sk(5101,`po-datepicker`),Kg(),Sk(5102,`, `),Qc(5103,`code`),Sk(5104,`po-datepicker-range`),Kg(),Sk(5105,`, `),Qc(5106,`code`),Sk(5107,`po-timepicker`),Kg(),Sk(5108,`, `),Qc(5109,`code`),Sk(5110,`po-input`),Kg(),Sk(5111,`, `),Qc(5112,`code`),Sk(5113,`po-number`),Kg(),Sk(5114,`,
`),Qc(5115,`code`),Sk(5116,`po-decimal`),Kg(),Sk(5117,`, `),Qc(5118,`code`),Sk(5119,`po-select`),Kg(),Sk(5120,`, `),Qc(5121,`code`),Sk(5122,`po-radio-group`),Kg(),Sk(5123,`, `),Qc(5124,`code`),Sk(5125,`po-combo`),Kg(),Sk(5126,`, `),Qc(5127,`code`),Sk(5128,`po-lookup`),Kg(),Sk(5129,`, `),Qc(5130,`code`),Sk(5131,`po-checkbox-group`),Kg(),Sk(5132,`, `),Qc(5133,`code`),Sk(5134,`po-multiselect`),Kg(),Sk(5135,`,
`),Qc(5136,`code`),Sk(5137,`po-textarea`),Kg(),Sk(5138,`, `),Qc(5139,`code`),Sk(5140,"po-password``, "),Kg(),Sk(5141,"po-upload`."),Kg()()(),Qc(5142,`tr`,237)(5143,`td`,17)(5144,`div`,26)(5145,`span`,27),Sk(5146,` requiredFieldErrorMessage`),vu(5147,`br`),Kg()()(),Qc(5148,`td`,21)(5149,`code`,32),Sk(5150,`boolean`),Kg()(),Qc(5151,`td`,24)(5152,`em`)(5153,`strong`),Sk(5154,`(opcional)`),Kg()(),Qc(5155,`p`),Sk(5156,`Exibe a mensagem setada na propriedade `),Qc(5157,`code`),Sk(5158,`errorMessage`),Kg(),Sk(5159,` se o campo estiver vazio e for requerido.`),Kg(),Qc(5160,`blockquote`)(5161,`p`),Sk(5162,`Necessário que a propriedade `),Qc(5163,`code`),Sk(5164,`required`),Kg(),Sk(5165,` esteja habilitada.`),Kg()(),Qc(5166,`p`)(5167,`strong`),Sk(5168,`Componentes compatíveis:`),Kg(),Qc(5169,`code`),Sk(5170,`po-datepicker`),Kg(),Sk(5171,`, `),Qc(5172,`code`),Sk(5173,`po-timepicker`),Kg(),Sk(5174,`, `),Qc(5175,`code`),Sk(5176,`po-input`),Kg(),Sk(5177,`, `),Qc(5178,`code`),Sk(5179,`po-number`),Kg(),Sk(5180,`, `),Qc(5181,`code`),Sk(5182,`po-decimal`),Kg(),Sk(5183,`, `),Qc(5184,`code`),Sk(5185,`po-password`),Kg(),Sk(5186,`.`),Kg()()(),Qc(5187,`tr`,238)(5188,`td`,17)(5189,`div`,26)(5190,`span`,27),Sk(5191,` restrictions`),vu(5192,`br`),Kg()()(),Qc(5193,`td`,21)(5194,`code`,239),Sk(5195,`PoUploadFileRestrictions`),Kg()(),Qc(5196,`td`,24)(5197,`em`)(5198,`strong`),Sk(5199,`(opcional)`),Kg()(),Qc(5200,`p`),Sk(5201,`Objeto que segue a definição da interface `),Qc(5202,`code`),Sk(5203,`PoUploadFileRestrictions`),Kg(),Sk(5204,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Kg(),Qc(5205,`p`)(5206,`strong`),Sk(5207,`Componente compatível`),Kg(),Sk(5208,`: `),Qc(5209,`code`),Sk(5210,`po-upload`),Kg()()()(),Qc(5211,`tr`,240)(5212,`td`,17)(5213,`div`,26)(5214,`span`,27),Sk(5215,` rows`),vu(5216,`br`),Kg()()(),Qc(5217,`td`,21)(5218,`code`,102),Sk(5219,`number`),Kg()(),Qc(5220,`td`,24)(5221,`em`)(5222,`strong`),Sk(5223,`(opcional)`),Kg()(),Qc(5224,`p`),Sk(5225,`Quantidade de linhas exibidas no `),Qc(5226,`code`),Sk(5227,`po-textarea`),Kg(),Sk(5228,`.`),Kg()()(),Qc(5229,`tr`,241)(5230,`td`,17)(5231,`div`,26)(5232,`span`,27),Sk(5233,` searchService`),vu(5234,`br`),Kg()()(),Qc(5235,`td`,21)(5236,`code`,28),Sk(5237,`string `),Kg(),Qc(5238,`code`,54),Sk(5239,` PoLookupFilter`),Kg()(),Qc(5240,`td`,24)(5241,`em`)(5242,`strong`),Sk(5243,`(opcional)`),Kg()(),Qc(5244,`p`),Sk(5245,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Qc(5246,`code`),Sk(5247,`columns`),Kg(),Sk(5248,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Qc(5249,`strong`),Sk(5250,`Importante:`),Kg()(),Qc(5251,`blockquote`)(5252,`p`),Sk(5253,`Caso utilizar a propriedade `),Qc(5254,`code`),Sk(5255,`optionsService`),Kg(),Sk(5256,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Qc(5257,`a`,7),Sk(5258,`guia de API do PO UI`),Kg(),Sk(5259,`.`),Kg()()()(),Qc(5260,`tr`,242)(5261,`td`,17)(5262,`div`,26)(5263,`span`,27),Sk(5264,` secondInterval`),vu(5265,`br`),Kg()()(),Qc(5266,`td`,21)(5267,`code`,102),Sk(5268,`number`),Kg()(),Qc(5269,`td`,24)(5270,`em`)(5271,`strong`),Sk(5272,`(opcional)`),Kg()(),Qc(5273,`p`),Sk(5274,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),Kg()()(),Qc(5275,`tr`,243)(5276,`td`,17)(5277,`div`,26)(5278,`span`,27),Sk(5279,` secret`),vu(5280,`br`),Kg()()(),Qc(5281,`td`,21)(5282,`code`,32),Sk(5283,`boolean`),Kg()(),Qc(5284,`td`,24)(5285,`em`)(5286,`strong`),Sk(5287,`(opcional)`),Kg()(),Qc(5288,`p`),Sk(5289,`Esconde a informação estilo `),Qc(5290,`em`),Sk(5291,`password`),Kg(),Sk(5292,`, pode ser utilizado quando o tipo de dado for `),Qc(5293,`em`),Sk(5294,`string`),Kg(),Sk(5295,`.`),Kg()()(),Qc(5296,`tr`,244)(5297,`td`,17)(5298,`div`,26)(5299,`span`,27),Sk(5300,` showRequired`),vu(5301,`br`),Kg()()(),Qc(5302,`td`,21)(5303,`code`,32),Sk(5304,`boolean`),Kg()(),Qc(5305,`td`,24)(5306,`em`)(5307,`strong`),Sk(5308,`(opcional)`),Kg()(),Qc(5309,`p`),Sk(5310,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(5311,`blockquote`)(5312,`p`),Sk(5313,`Não será exibida a indicação se:`),Kg()(),Qc(5314,`ul`)(5315,`li`),Sk(5316,`Não possuir `),Qc(5317,`code`),Sk(5318,`p-help`),Kg(),Sk(5319,` e/ou `),Qc(5320,`code`),Sk(5321,`p-label`),Kg(),Sk(5322,`.`),Kg()(),Qc(5323,`p`)(5324,`strong`),Sk(5325,`Componentes compatíveis:`),Kg(),Qc(5326,`code`),Sk(5327,`po-datepicker`),Kg(),Sk(5328,`, `),Qc(5329,`code`),Sk(5330,`po-datepicker-range`),Kg(),Sk(5331,`, `),Qc(5332,`code`),Sk(5333,`po-timepicker`),Kg(),Sk(5334,`, `),Qc(5335,`code`),Sk(5336,`po-input`),Kg(),Sk(5337,`, `),Qc(5338,`code`),Sk(5339,`po-number`),Kg(),Sk(5340,`,
`),Qc(5341,`code`),Sk(5342,`po-decimal`),Kg(),Sk(5343,`, `),Qc(5344,`code`),Sk(5345,`po-select`),Kg(),Sk(5346,`, `),Qc(5347,`code`),Sk(5348,`po-radio-group`),Kg(),Sk(5349,`, `),Qc(5350,`code`),Sk(5351,`po-combo`),Kg(),Sk(5352,`, `),Qc(5353,`code`),Sk(5354,`po-lookup`),Kg(),Sk(5355,`, `),Qc(5356,`code`),Sk(5357,`po-checkbox-group`),Kg(),Sk(5358,`, `),Qc(5359,`code`),Sk(5360,`po-multiselect`),Kg(),Sk(5361,`,
`),Qc(5362,`code`),Sk(5363,`po-textarea`),Kg(),Sk(5364,`, `),Qc(5365,`code`),Sk(5366,`po-password`),Kg(),Sk(5367,`, `),Qc(5368,`code`),Sk(5369,`po-upload`),Kg(),Sk(5370,`.`),Kg()()(),Qc(5371,`tr`,245)(5372,`td`,17)(5373,`div`,26)(5374,`span`,27),Sk(5375,` showSeconds`),vu(5376,`br`),Kg()()(),Qc(5377,`td`,21)(5378,`code`,32),Sk(5379,`boolean`),Kg()(),Qc(5380,`td`,24)(5381,`em`)(5382,`strong`),Sk(5383,`(opcional)`),Kg()(),Qc(5384,`p`),Sk(5385,`Exibe a coluna de segundos no painel do timepicker.`),Kg()()(),Qc(5386,`tr`,246)(5387,`td`,17)(5388,`div`,26)(5389,`span`,27),Sk(5390,` showThumbnail`),vu(5391,`br`),Kg()()(),Qc(5392,`td`,21)(5393,`code`,32),Sk(5394,`boolean`),Kg()(),Qc(5395,`td`,24)(5396,`em`)(5397,`strong`),Sk(5398,`(opcional)`),Kg()(),Qc(5399,`p`),Sk(5400,`Exibe a pré-visualização de imagens ao anexá-las.`),Kg(),Qc(5401,`blockquote`)(5402,`p`),Sk(5403,`Propriedade funciona apenas em arquivos de formato de imagem (`),Qc(5404,`code`),Sk(5405,`.png`),Kg(),Sk(5406,`, `),Qc(5407,`code`),Sk(5408,`.jpg`),Kg(),Sk(5409,`, `),Qc(5410,`code`),Sk(5411,`.jpeg`),Kg(),Sk(5412,` e `),Qc(5413,`code`),Sk(5414,`.gif`),Kg(),Sk(5415,`).`),Kg()(),Qc(5416,`p`)(5417,`strong`),Sk(5418,`Componente compatível`),Kg(),Sk(5419,`: `),Qc(5420,`code`),Sk(5421,`po-upload`),Kg()()()(),Qc(5422,`tr`,247)(5423,`td`,17)(5424,`div`,26)(5425,`span`,27),Sk(5426,` size`),vu(5427,`br`),Kg()()(),Qc(5428,`td`,21)(5429,`code`,28),Sk(5430,`string`),Kg()(),Qc(5431,`td`,24)(5432,`em`)(5433,`strong`),Sk(5434,`(opcional)`),Kg()(),Qc(5435,`p`),Sk(5436,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),Kg(),Qc(5437,`ul`)(5438,`li`)(5439,`code`),Sk(5440,`small`),Kg(),Sk(5441,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(5442,`li`)(5443,`code`),Sk(5444,`medium`),Kg(),Sk(5445,`: aplica a medida medium de cada componente.`),Kg(),Qc(5446,`li`)(5447,`code`),Sk(5448,`large`),Kg(),Sk(5449,`: aplica a medida large de cada componente (disponível para `),Qc(5450,`code`),Sk(5451,`po-checkbox`),Kg(),Sk(5452,` e `),Qc(5453,`code`),Sk(5454,`po-radio-group`),Kg(),Sk(5455,`).`),Qc(5456,`blockquote`)(5457,`p`),Sk(5458,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(5459,`code`),Sk(5460,`medium`),Kg(),Sk(5461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(5462,`a`,79),Sk(5463,`po-theme`),Kg(),Sk(5464,`.`),Kg()()()()()(),Qc(5465,`tr`,248)(5466,`td`,17)(5467,`div`,26)(5468,`span`,27),Sk(5469,` sort`),vu(5470,`br`),Kg()()(),Qc(5471,`td`,21)(5472,`code`,32),Sk(5473,`boolean`),Kg()(),Qc(5474,`td`,24)(5475,`em`)(5476,`strong`),Sk(5477,`(opcional)`),Kg()(),Qc(5478,`p`),Sk(5479,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Kg(),Qc(5480,`p`)(5481,`strong`),Sk(5482,`Componentes compatíveis:`),Kg(),Qc(5483,`code`),Sk(5484,`po-combo`),Kg(),Sk(5485,`, po-multiselect`),Kg()()(),Qc(5486,`tr`,249)(5487,`td`,17)(5488,`div`,26)(5489,`span`,27),Sk(5490,` step`),vu(5491,`br`),Kg()()(),Qc(5492,`td`,21)(5493,`code`,102),Sk(5494,`number`),Kg()(),Qc(5495,`td`,24)(5496,`em`)(5497,`strong`),Sk(5498,`(opcional)`),Kg()(),Qc(5499,`p`),Sk(5500,`Intervalo utilizado no `),Qc(5501,`code`),Sk(5502,`po-number`),Kg(),Sk(5503,`.`),Kg()()(),Qc(5504,`tr`,250)(5505,`td`,17)(5506,`div`,26)(5507,`span`,27),Sk(5508,` thousandMaxlength`),vu(5509,`br`),Kg()()(),Qc(5510,`td`,21)(5511,`code`,102),Sk(5512,`number`),Kg()(),Qc(5513,`td`,24)(5514,`em`)(5515,`strong`),Sk(5516,`(opcional)`),Kg()(),Qc(5517,`p`),Sk(5518,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),Kg(),Qc(5519,`blockquote`)(5520,`p`),Sk(5521,`Esta propriedade só pode ser utilizada quando o `),Qc(5522,`code`),Sk(5523,`type`),Kg(),Sk(5524,` for `),Qc(5525,`em`),Sk(5526,`currency`),Kg(),Sk(5527,` ou `),Qc(5528,`em`),Sk(5529,`decimal`),Kg(),Sk(5530,`.`),Kg()(),Qc(5531,`blockquote`)(5532,`p`),Sk(5533,`Quando utilizado com `),Qc(5534,`code`),Sk(5535,`displayFormat`),Kg(),Sk(5536,`, será respeitado o valor `),Qc(5537,`strong`),Sk(5538,`mais restritivo`),Kg(),Sk(5539,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),Kg()()()(),Qc(5540,`tr`,251)(5541,`td`,17)(5542,`div`,26)(5543,`span`,27),Sk(5544,` type`),vu(5545,`br`),Kg()()(),Qc(5546,`td`,21)(5547,`code`,28),Sk(5548,`string `),Kg(),Qc(5549,`code`,252),Sk(5550,` PoDynamicFieldType`),Kg()(),Qc(5551,`td`,24)(5552,`em`)(5553,`strong`),Sk(5554,`(opcional)`),Kg()(),Qc(5555,`p`),Sk(5556,`Tipo do valor campo.`),Kg(),Qc(5557,`p`),Sk(5558,`Valores válidos:`),Kg(),Qc(5559,`ul`)(5560,`li`)(5561,`code`),Sk(5562,`boolean`),Kg(),Sk(5563,`: Valores `),Qc(5564,`em`),Sk(5565,`booleanos`),Kg(),Sk(5566,`.`),Kg(),Qc(5567,`li`)(5568,`code`),Sk(5569,`currency`),Kg(),Sk(5570,`: Valores monetários.`),Kg(),Qc(5571,`li`)(5572,`code`),Sk(5573,`decimal`),Kg(),Sk(5574,`: Valores decimais.`),Kg(),Qc(5575,`li`)(5576,`code`),Sk(5577,`date`),Kg(),Sk(5578,`: Valores de datas.`),Qc(5579,`ul`)(5580,`li`),Sk(5581,`Aceita os tipos `),Qc(5582,`strong`),Sk(5583,`string`),Kg(),Sk(5584,` e `),Qc(5585,`strong`),Sk(5586,`Date`),Kg(),Sk(5587,` padr\xE3o do Javascript,
por exemplo: `),Qc(5588,`code`),Sk(5589,`'2017-11-28'`),Kg(),Sk(5590,` ou `),Qc(5591,`code`),Sk(5592,`new Date(2017, 10, 28)`),Kg(),Sk(5593,`.`),Kg()()(),Qc(5594,`li`)(5595,`code`),Sk(5596,`dateTime`),Kg(),Sk(5597,`: Valor de data com horário.`),Qc(5598,`ul`)(5599,`li`),Sk(5600,`Aceita o tipo `),Qc(5601,`em`),Sk(5602,`string`),Kg(),Sk(5603,` no formato `),Qc(5604,`strong`),Sk(5605,`ISO-8601`),Kg(),Sk(5606,` extendido `),Qc(5607,`strong`),Sk(5608,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Kg(),Sk(5609,`
e o tipo `),Qc(5610,`strong`),Sk(5611,`Date`),Kg(),Sk(5612,` padrão do Javascript, por exemplo: `),Qc(5613,`code`),Sk(5614,`'2017-11-28T00:00:00-02:00'`),Kg(),Sk(5615,` ou `),Qc(5616,`code`),Sk(5617,`new Date(2017, 10, 28)`),Kg(),Sk(5618,`.`),Kg()()(),Qc(5619,`li`)(5620,`code`),Sk(5621,`number`),Kg(),Sk(5622,`: Valores numéricos.`),Kg(),Qc(5623,`li`)(5624,`code`),Sk(5625,`string`),Kg(),Sk(5626,`: Textos.`),Kg(),Qc(5627,`li`)(5628,`code`),Sk(5629,`time`),Kg(),Sk(5630,`: Valor do horário.`),Qc(5631,`ul`)(5632,`li`),Sk(5633,`Aceita o tipo `),Qc(5634,`strong`),Sk(5635,`string`),Kg(),Sk(5636,` nos formatos `),Qc(5637,`strong`),Sk(5638,`'HH:mm:ss'`),Kg(),Sk(5639,` ou `),Qc(5640,`strong`),Sk(5641,`'HH:mm:ss.ffffff'`),Kg(),Sk(5642,`, por exemplo: `),Qc(5643,`code`),Sk(5644,`'23:12:45'`),Kg(),Sk(5645,`.`),Kg()()()()()(),Qc(5646,`tr`,253)(5647,`td`,17)(5648,`div`,26)(5649,`span`,27),Sk(5650,` url`),vu(5651,`br`),Kg()()(),Qc(5652,`td`,21)(5653,`code`,28),Sk(5654,`string`),Kg()(),Qc(5655,`td`,24)(5656,`em`)(5657,`strong`),Sk(5658,`(opcional)`),Kg()(),Qc(5659,`p`),Sk(5660,`URL que deve ser feita a requisição com os arquivos selecionados.`),Kg(),Qc(5661,`p`)(5662,`strong`),Sk(5663,`Componente compatível`),Kg(),Sk(5664,`: `),Qc(5665,`code`),Sk(5666,`po-upload`),Kg()()()(),Qc(5667,`tr`,254)(5668,`td`,17)(5669,`div`,26)(5670,`span`,27),Sk(5671,` validate`),vu(5672,`br`),Kg()()(),Qc(5673,`td`,21)(5674,`code`,28),Sk(5675,`string `),Kg(),Qc(5676,`code`,89),Sk(5677,` Function`),Kg()(),Qc(5678,`td`,24)(5679,`em`)(5680,`strong`),Sk(5681,`(opcional)`),Kg()(),Qc(5682,`p`),Sk(5683,`Função ou serviço para validar as `),Qc(5684,`strong`),Sk(5685,`mudanças do campo`),Kg(),Sk(5686,`.`),Kg(),Qc(5687,`ul`)(5688,`li`),Sk(5689,`A propriedade aceita os seguintes tipos:`),Kg()(),Qc(5690,`ul`)(5691,`li`)(5692,`strong`),Sk(5693,`String`),Kg(),Sk(5694,`: Endpoint usado pelo componente para requisição via `),Qc(5695,`code`),Sk(5696,`POST`),Kg(),Sk(5697,`.`),Kg(),Qc(5698,`li`)(5699,`strong`),Sk(5700,`Function`),Kg(),Sk(5701,`: Método que será executado.`),Kg()(),Qc(5702,`p`),Sk(5703,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Qc(5704,`code`),Sk(5705,`PoDynamicFormFieldChanged`),Kg(),Sk(5706,`:`),Kg(),Qc(5707,`p`)(5708,`code`),Sk(5709,`{ property: 'property name', value: 'new value' }`),Kg()(),Qc(5710,`p`),Sk(5711,`O retorno desta função deve ser do tipo `),Qc(5712,`a`,255),Sk(5713,`PoDynamicFormFieldValidation`),Kg(),Sk(5714,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),Kg(),Qc(5715,`pre`)(5716,`code`),Sk(5717,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),Kg()(),Qc(5718,`p`),Sk(5719,`Para referenciar a sua função utilize a propriedade `),Qc(5720,`code`),Sk(5721,`bind`),Kg(),Sk(5722,`, por exemplo:
`),Qc(5723,`code`),Sk(5724,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),Kg()()()(),Qc(5725,`tr`,256)(5726,`td`,17)(5727,`div`,26)(5728,`span`,27),Sk(5729,` visible`),vu(5730,`br`),Kg()()(),Qc(5731,`td`,21)(5732,`code`,32),Sk(5733,`boolean`),Kg()(),Qc(5734,`td`,24)(5735,`em`)(5736,`strong`),Sk(5737,`(opcional)`),Kg()(),Qc(5738,`p`),Sk(5739,`Indica se o campo será visível.`),Kg()()(),Qc(5740,`tr`,257)(5741,`td`,17)(5742,`div`,26)(5743,`span`,27),Sk(5744,` yearRangeLimit`),vu(5745,`br`),Kg()()(),Qc(5746,`td`,21)(5747,`code`,102),Sk(5748,`number`),Kg()(),Qc(5749,`td`,24)(5750,`em`)(5751,`strong`),Sk(5752,`(opcional)`),Kg()(),Qc(5753,`p`),Sk(5754,`Define o limite de anos exibidos na lista de anos do `),Qc(5755,`code`),Sk(5756,`po-datepicker`),Kg(),Sk(5757,` nos modos `),Qc(5758,`code`),Sk(5759,`month-year`),Kg(),Sk(5760,` e `),Qc(5761,`code`),Sk(5762,`year`),Kg(),Sk(5763,`.`),Kg()()()(),Qc(5764,`h4`,258)(5765,`code`,5),Sk(5766,`PoLookupColumn`),Kg()(),Qc(5767,`div`,2)(5768,`p`),Sk(5769,`Interface para configuração das colunas do po-lookup.`),Kg()(),Qc(5770,`h4`,12),Sk(5771,`Propriedades`),Kg(),Qc(5772,`table`,13)(5773,`tr`,14)(5774,`th`,15),Sk(5775,`Nome`),Kg(),Qc(5776,`th`,15),Sk(5777,`Tipo`),Kg(),Qc(5778,`th`,15),Sk(5779,`Descrição`),Kg()(),Qc(5780,`tr`,259)(5781,`td`,17)(5782,`div`,26)(5783,`span`,27),Sk(5784,` fieldLabel`),vu(5785,`br`),Kg()()(),Qc(5786,`td`,21)(5787,`code`,32),Sk(5788,`boolean`),Kg()(),Qc(5789,`td`,24)(5790,`em`)(5791,`strong`),Sk(5792,`(opcional)`),Kg()(),Qc(5793,`p`),Sk(5794,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),Kg(),Qc(5795,`p`),Sk(5796,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),Kg(),Qc(5797,`p`),Sk(5798,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Qc(5799,`code`),Sk(5800,`p-field-format`),Kg(),Sk(5801,` ou `),Qc(5802,`code`),Sk(5803,`p-field-label`),Kg(),Sk(5804,` forem configurados no componente.`),Kg()()(),Qc(5805,`tr`,260)(5806,`td`,17)(5807,`div`,26)(5808,`span`,27),Sk(5809,` format`),vu(5810,`br`),Kg()()(),Qc(5811,`td`,21)(5812,`code`,28),Sk(5813,`string`),Kg()(),Qc(5814,`td`,24)(5815,`em`)(5816,`strong`),Sk(5817,`(opcional)`),Kg()(),Qc(5818,`p`),Sk(5819,`Formato de exibição do valor da coluna:`),Kg(),Qc(5820,`ul`)(5821,`li`),Sk(5822,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),Kg(),Qc(5823,`li`),Sk(5824,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Kg()()()(),Qc(5825,`tr`,261)(5826,`td`,17)(5827,`div`,26)(5828,`span`,27),Sk(5829,` label`),vu(5830,`br`),Kg()()(),Qc(5831,`td`,21)(5832,`code`,28),Sk(5833,`string`),Kg()(),Qc(5834,`td`,24)(5835,`em`)(5836,`strong`),Sk(5837,`(opcional)`),Kg()(),Qc(5838,`p`),Sk(5839,`Texto para título da coluna.`),Kg(),Qc(5840,`p`),Sk(5841,`Caso não seja informado, será utilizado como `),Qc(5842,`em`),Sk(5843,`label`),Kg(),Sk(5844,` o valor da propriedade `),Qc(5845,`em`),Sk(5846,`property`),Kg(),Sk(5847,` com a primeira letra em maiúsculo.`),Kg()()(),Qc(5848,`tr`,262)(5849,`td`,17)(5850,`div`,26)(5851,`span`,27),Sk(5852,` mask`),vu(5853,`br`),Kg()()(),Qc(5854,`td`,21)(5855,`code`,28),Sk(5856,`string`),Kg()(),Qc(5857,`td`,24)(5858,`em`)(5859,`strong`),Sk(5860,`(opcional)`),Kg()(),Qc(5861,`p`),Sk(5862,`Define uma máscara para formatação do valor exibido na coluna.`),Kg(),Qc(5863,`p`),Sk(5864,`A máscara é aplicada somente para `),Qc(5865,`strong`),Sk(5866,`exibição`),Kg(),Sk(5867,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),Kg(),Qc(5868,`p`),Sk(5869,`Caracteres válidos para a máscara:`),Kg(),Qc(5870,`ul`)(5871,`li`)(5872,`code`),Sk(5873,`9`),Kg(),Sk(5874,` : aceita um dígito numérico (0-9).`),Kg(),Qc(5875,`li`)(5876,`code`),Sk(5877,`@`),Kg(),Sk(5878,` : aceita um caractere alfabético (a-z, A-Z).`),Kg(),Qc(5879,`li`)(5880,`code`),Sk(5881,`w`),Kg(),Sk(5882,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),Kg(),Qc(5883,`li`),Sk(5884,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Qc(5885,`code`),Sk(5886,`.`),Kg(),Sk(5887,`, `),Qc(5888,`code`),Sk(5889,`-`),Kg(),Sk(5890,`, `),Qc(5891,`code`),Sk(5892,`/`),Kg(),Sk(5893,`, `),Qc(5894,`code`),Sk(5895,`(`),Kg(),Sk(5896,`, `),Qc(5897,`code`),Sk(5898,`)`),Kg(),Sk(5899,`, `),Qc(5900,`code`),Sk(5901,`+`),Kg(),Sk(5902,`, `),vu(5903,`code`),Sk(5904,`).`),Kg()(),Qc(5905,`p`),Sk(5906,`Exemplos de uso:`),Kg(),Qc(5907,`pre`)(5908,`code`),Sk(5909,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),Kg()(),Qc(5910,`blockquote`)(5911,`p`),Sk(5912,`Esta propriedade é utilizada apenas para colunas do tipo `),Qc(5913,`code`),Sk(5914,`string`),Kg(),Sk(5915,` (padr\xE3o).
Caso a coluna possua um `),Qc(5916,`code`),Sk(5917,`type`),Kg(),Sk(5918,` diferente de `),Qc(5919,`code`),Sk(5920,`string`),Kg(),Sk(5921,`, a máscara será ignorada.`),Kg()()()(),Qc(5922,`tr`,263)(5923,`td`,17)(5924,`div`,26)(5925,`span`,27),Sk(5926,` property`),vu(5927,`br`),Kg()()(),Qc(5928,`td`,21)(5929,`code`,28),Sk(5930,`string`),Kg()(),Qc(5931,`td`,24)(5932,`em`)(5933,`strong`),Sk(5934,`(opcional)`),Kg()(),Qc(5935,`p`),Sk(5936,`Nome identificador da coluna.`),Kg()()(),Qc(5937,`tr`,264)(5938,`td`,17)(5939,`div`,26)(5940,`span`,27),Sk(5941,` type`),vu(5942,`br`),Kg()()(),Qc(5943,`td`,21)(5944,`code`,28),Sk(5945,`string`),Kg()(),Qc(5946,`td`,24)(5947,`em`)(5948,`strong`),Sk(5949,`(opcional)`),Kg()(),Qc(5950,`p`),Sk(5951,`Tipo da coluna:`),Kg(),Qc(5952,`ul`)(5953,`li`),Sk(5954,`string (padrão): textos`),Kg(),Qc(5955,`li`),Sk(5956,`number: valores numéricos`),Kg(),Qc(5957,`li`),Sk(5958,`date: data`),Kg(),Qc(5959,`li`),Sk(5960,`currency: valores monetários`),Kg(),Qc(5961,`li`),Sk(5962,`dateTime: data e hora`),Kg()()()(),Qc(5963,`tr`,265)(5964,`td`,17)(5965,`div`,26)(5966,`span`,27),Sk(5967,` width`),vu(5968,`br`),Kg()()(),Qc(5969,`td`,21)(5970,`code`,28),Sk(5971,`string`),Kg()(),Qc(5972,`td`,24)(5973,`em`)(5974,`strong`),Sk(5975,`(opcional)`),Kg()(),Qc(5976,`p`),Sk(5977,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),Kg()()()(),Qc(5978,`h4`,266)(5979,`code`,5),Sk(5980,`PoLookupFilter`),Kg()(),Qc(5981,`div`,2)(5982,`p`),Sk(5983,`Define o tipo de busca utilizado no po-lookup.`),Kg()(),Qc(5984,`h4`,12),Sk(5985,`Métodos`),Kg(),Qc(5986,`table`,267)(5987,`tr`,84)(5988,`th`,85)(5989,`div`,26)(5990,`h4`)(5991,`span`,27),Sk(5992,` getFilteredItems `),Kg()()()()(),Qc(5993,`tr`,24)(5994,`td`,24)(5995,`p`),Sk(5996,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Qc(5997,`em`),Sk(5998,`Observable`),Kg(),Sk(5999,` com a resposta da API no formato da interface `),Qc(6e3,`code`),Sk(6001,`PoLookupResponseApi`),Kg(),Sk(6002,`.`),Kg()()()(),Qc(6003,`h5`)(6004,`b`),Sk(6005,`Parâmetros`),Kg()(),Qc(6006,`table`,13)(6007,`tr`,14)(6008,`th`,15),Sk(6009,`Nome`),Kg(),Qc(6010,`th`,15),Sk(6011,`Tipo`),Kg(),Qc(6012,`th`,15),Sk(6013,`Descrição`),Kg()(),Qc(6014,`tr`,84)(6015,`td`,17),Sk(6016,` params`),Kg(),Qc(6017,`td`,21)(6018,`code`,268),Sk(6019,` PoLookupFilteredItemsParams `),Kg()(),Qc(6020,`td`,24)(6021,`p`),Sk(6022,`Objeto enviado por parâmetro que implementa a interface `),Qc(6023,`code`),Sk(6024,`PoLookupFilteredItemsParams`),Kg(),Sk(6025,`.`),Kg()()()(),vu(6026,`br`),Qc(6027,`table`,269)(6028,`tr`,84)(6029,`th`,85)(6030,`div`,26)(6031,`h4`)(6032,`span`,27),Sk(6033,` getObjectByValue `),Kg()()()()(),Qc(6034,`tr`,24)(6035,`td`,24)(6036,`p`),Sk(6037,`Método responsável por enviar um valor que será buscado no serviço.`),Kg(),Qc(6038,`p`),Sk(6039,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),Kg()()()(),Qc(6040,`h5`)(6041,`b`),Sk(6042,`Parâmetros`),Kg()(),Qc(6043,`table`,13)(6044,`tr`,14)(6045,`th`,15),Sk(6046,`Nome`),Kg(),Qc(6047,`th`,15),Sk(6048,`Tipo`),Kg(),Qc(6049,`th`,15),Sk(6050,`Descrição`),Kg()(),Qc(6051,`tr`,84)(6052,`td`,17),Sk(6053,` value`),Kg(),Qc(6054,`td`,21)(6055,`code`,28),Sk(6056,` string `),Kg(),Qc(6057,`code`,216),Sk(6058,` Array<any> `),Kg()(),Qc(6059,`td`,24)(6060,`p`),Sk(6061,`Valor único a ser buscado na fonte de dados.`),Kg()()(),Qc(6062,`tr`,84)(6063,`td`,17),Sk(6064,` filterParams`),Kg(),Qc(6065,`td`,21)(6066,`code`,268),Sk(6067,` any `),Kg()(),Qc(6068,`td`,24)(6069,`p`),Sk(6070,`Valor informado através da propriedade `),Qc(6071,`code`),Sk(6072,`p-filter-params`),Kg(),Sk(6073,`.`),Kg()()()(),vu(6074,`br`),Qc(6075,`h4`,270)(6076,`code`,5),Sk(6077,`PoLookupFilteredItemsParams`),Kg()(),Qc(6078,`div`,2)(6079,`p`),Sk(6080,`Interface do objeto enviado como parâmetro na função `),Qc(6081,`code`),Sk(6082,`getFilteredItems`),Kg(),Sk(6083,`.`),Kg()(),Qc(6084,`h4`,12),Sk(6085,`Propriedades`),Kg(),Qc(6086,`table`,13)(6087,`tr`,14)(6088,`th`,15),Sk(6089,`Nome`),Kg(),Qc(6090,`th`,15),Sk(6091,`Tipo`),Kg(),Qc(6092,`th`,15),Sk(6093,`Descrição`),Kg()(),Qc(6094,`tr`,271)(6095,`td`,17)(6096,`div`,26)(6097,`span`,27),Sk(6098,` advancedFilters`),vu(6099,`br`),Kg()()(),Qc(6100,`td`,21)(6101,`code`,272),Sk(6102,`{ [key: string]: any;
}`),Kg()(),Qc(6103,`td`,24)(6104,`em`)(6105,`strong`),Sk(6106,`(opcional)`),Kg()(),Qc(6107,`p`),Sk(6108,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),Kg()()(),Qc(6109,`tr`,273)(6110,`td`,17)(6111,`div`,26)(6112,`span`,27),Sk(6113,` filter`),vu(6114,`br`),Kg()()(),Qc(6115,`td`,21)(6116,`code`,28),Sk(6117,`string`),Kg()(),Qc(6118,`td`,24)(6119,`em`)(6120,`strong`),Sk(6121,`(opcional)`),Kg()(),Qc(6122,`p`),Sk(6123,`Conteúdo utilizado para filtrar a lista de itens.`),Kg()()(),Qc(6124,`tr`,274)(6125,`td`,17)(6126,`div`,26)(6127,`span`,27),Sk(6128,` filterParams`),vu(6129,`br`),Kg()()(),Qc(6130,`td`,21)(6131,`code`,52),Sk(6132,`any`),Kg()(),Qc(6133,`td`,24)(6134,`em`)(6135,`strong`),Sk(6136,`(opcional)`),Kg()(),Qc(6137,`p`),Sk(6138,`Valor informado através da propriedade `),Qc(6139,`code`),Sk(6140,`p-filter-params`),Kg(),Sk(6141,`.`),Kg()()(),Qc(6142,`tr`,275)(6143,`td`,17)(6144,`div`,26)(6145,`span`,27),Sk(6146,` order`),vu(6147,`br`),Kg()()(),Qc(6148,`td`,21)(6149,`code`,28),Sk(6150,`string`),Kg()(),Qc(6151,`td`,24)(6152,`em`)(6153,`strong`),Sk(6154,`(opcional)`),Kg()(),Qc(6155,`p`),Sk(6156,`Coluna que está sendo ordenada na tabela.`),Kg(),Qc(6157,`ul`)(6158,`li`),Sk(6159,`Coluna decrescente será informada da seguinte forma: `),Qc(6160,`code`),Sk(6161,`-<colunaOrdenada>`),Kg(),Sk(6162,`, por exemplo `),Qc(6163,`code`),Sk(6164,`-name`),Kg(),Sk(6165,`.`),Kg(),Qc(6166,`li`),Sk(6167,`Coluna ascendente será informada da seguinte forma: `),Qc(6168,`code`),Sk(6169,`<colunaOrdenada>`),Kg(),Sk(6170,`, por exemplo `),Qc(6171,`code`),Sk(6172,`name`),Kg(),Sk(6173,`.`),Kg()()()(),Qc(6174,`tr`,276)(6175,`td`,17)(6176,`div`,26)(6177,`span`,27),Sk(6178,` page`),vu(6179,`br`),Kg()()(),Qc(6180,`td`,21)(6181,`code`,102),Sk(6182,`number`),Kg()(),Qc(6183,`td`,24)(6184,`em`)(6185,`strong`),Sk(6186,`(opcional)`),Kg()(),Qc(6187,`p`),Sk(6188,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),Kg()()(),Qc(6189,`tr`,277)(6190,`td`,17)(6191,`div`,26)(6192,`span`,27),Sk(6193,` pageSize`),vu(6194,`br`),Kg()()(),Qc(6195,`td`,21)(6196,`code`,102),Sk(6197,`number`),Kg()(),Qc(6198,`td`,24)(6199,`em`)(6200,`strong`),Sk(6201,`(opcional)`),Kg()(),Qc(6202,`p`),Sk(6203,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),Kg()()()(),Qc(6204,`h4`,278)(6205,`code`,5),Sk(6206,`PoLookupLiterals`),Kg()(),Qc(6207,`div`,2)(6208,`p`),Sk(6209,`Interface para definição das literais usadas no `),Qc(6210,`code`),Sk(6211,`po-lookup`),Kg(),Sk(6212,`.`),Kg()(),Qc(6213,`h4`,12),Sk(6214,`Propriedades`),Kg(),Qc(6215,`table`,13)(6216,`tr`,14)(6217,`th`,15),Sk(6218,`Nome`),Kg(),Qc(6219,`th`,15),Sk(6220,`Tipo`),Kg(),Qc(6221,`th`,15),Sk(6222,`Descrição`),Kg()(),Qc(6223,`tr`,279)(6224,`td`,17)(6225,`div`,26)(6226,`span`,27),Sk(6227,` clean`),vu(6228,`br`),Kg()()(),Qc(6229,`td`,21)(6230,`code`,28),Sk(6231,`string`),Kg()(),Qc(6232,`td`,24)(6233,`em`)(6234,`strong`),Sk(6235,`(opcional)`),Kg()(),Qc(6236,`p`),Sk(6237,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),Kg()()(),Qc(6238,`tr`,280)(6239,`td`,17)(6240,`div`,26)(6241,`span`,27),Sk(6242,` modalAdvancedSearch`),vu(6243,`br`),Kg()()(),Qc(6244,`td`,21)(6245,`code`,28),Sk(6246,`string`),Kg()(),Qc(6247,`td`,24)(6248,`em`)(6249,`strong`),Sk(6250,`(opcional)`),Kg()(),Qc(6251,`p`),Sk(6252,`Texto do link de busca avançada.`),Kg(),Qc(6253,`p`),Sk(6254,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),Kg()()(),Qc(6255,`tr`,281)(6256,`td`,17)(6257,`div`,26)(6258,`span`,27),Sk(6259,` modalAdvancedSearchPrimaryActionLabel`),vu(6260,`br`),Kg()()(),Qc(6261,`td`,21)(6262,`code`,28),Sk(6263,`string`),Kg()(),Qc(6264,`td`,24)(6265,`em`)(6266,`strong`),Sk(6267,`(opcional)`),Kg()(),Qc(6268,`p`),Sk(6269,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),Kg()()(),Qc(6270,`tr`,282)(6271,`td`,17)(6272,`div`,26)(6273,`span`,27),Sk(6274,` modalAdvancedSearchSecondaryActionLabel`),vu(6275,`br`),Kg()()(),Qc(6276,`td`,21)(6277,`code`,28),Sk(6278,`string`),Kg()(),Qc(6279,`td`,24)(6280,`em`)(6281,`strong`),Sk(6282,`(opcional)`),Kg()(),Qc(6283,`p`),Sk(6284,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),Kg()()(),Qc(6285,`tr`,283)(6286,`td`,17)(6287,`div`,26)(6288,`span`,27),Sk(6289,` modalAdvancedSearchTitle`),vu(6290,`br`),Kg()()(),Qc(6291,`td`,21)(6292,`code`,28),Sk(6293,`string`),Kg()(),Qc(6294,`td`,24)(6295,`em`)(6296,`strong`),Sk(6297,`(opcional)`),Kg()(),Qc(6298,`p`),Sk(6299,`Texto exibido no título da modal de busca avançada.`),Kg()()(),Qc(6300,`tr`,284)(6301,`td`,17)(6302,`div`,26)(6303,`span`,27),Sk(6304,` modalDisclaimerGroupTitle`),vu(6305,`br`),Kg()()(),Qc(6306,`td`,21)(6307,`code`,28),Sk(6308,`string`),Kg()(),Qc(6309,`td`,24)(6310,`em`)(6311,`strong`),Sk(6312,`(opcional)`),Kg()(),Qc(6313,`p`),Sk(6314,`Texto exibido no título do disclaimer.`),Kg()()(),Qc(6315,`tr`,285)(6316,`td`,17)(6317,`div`,26)(6318,`span`,27),Sk(6319,` modalPlaceholder`),vu(6320,`br`),Kg()()(),Qc(6321,`td`,21)(6322,`code`,28),Sk(6323,`string`),Kg()(),Qc(6324,`td`,24)(6325,`em`)(6326,`strong`),Sk(6327,`(opcional)`),Kg()(),Qc(6328,`p`),Sk(6329,`Texto exibido no placeholder do input da modal.`),Kg()()(),Qc(6330,`tr`,286)(6331,`td`,17)(6332,`div`,26)(6333,`span`,27),Sk(6334,` modalPrimaryActionLabel`),vu(6335,`br`),Kg()()(),Qc(6336,`td`,21)(6337,`code`,28),Sk(6338,`string`),Kg()(),Qc(6339,`td`,24)(6340,`em`)(6341,`strong`),Sk(6342,`(opcional)`),Kg()(),Qc(6343,`p`),Sk(6344,`Texto exibido no label do botão de ação primária da modal.`),Kg()()(),Qc(6345,`tr`,287)(6346,`td`,17)(6347,`div`,26)(6348,`span`,27),Sk(6349,` modalSecondaryActionLabel`),vu(6350,`br`),Kg()()(),Qc(6351,`td`,21)(6352,`code`,28),Sk(6353,`string`),Kg()(),Qc(6354,`td`,24)(6355,`em`)(6356,`strong`),Sk(6357,`(opcional)`),Kg()(),Qc(6358,`p`),Sk(6359,`Texto exibido no label do botão de ação secundária da modal.`),Kg()()(),Qc(6360,`tr`,288)(6361,`td`,17)(6362,`div`,26)(6363,`span`,27),Sk(6364,` modalTableLoadMoreData`),vu(6365,`br`),Kg()()(),Qc(6366,`td`,21)(6367,`code`,28),Sk(6368,`string`),Kg()(),Qc(6369,`td`,24)(6370,`em`)(6371,`strong`),Sk(6372,`(opcional)`),Kg()(),Qc(6373,`p`),Sk(6374,`Label do `),Qc(6375,`code`),Sk(6376,`button`),Kg(),Sk(6377,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),Kg()()(),Qc(6378,`tr`,289)(6379,`td`,17)(6380,`div`,26)(6381,`span`,27),Sk(6382,` modalTableLoadingData`),vu(6383,`br`),Kg()()(),Qc(6384,`td`,21)(6385,`code`,28),Sk(6386,`string`),Kg()(),Qc(6387,`td`,24)(6388,`em`)(6389,`strong`),Sk(6390,`(opcional)`),Kg()(),Qc(6391,`p`),Sk(6392,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),Kg()()(),Qc(6393,`tr`,290)(6394,`td`,17)(6395,`div`,26)(6396,`span`,27),Sk(6397,` modalTableNoColumns`),vu(6398,`br`),Kg()()(),Qc(6399,`td`,21)(6400,`code`,28),Sk(6401,`string`),Kg()(),Qc(6402,`td`,24)(6403,`em`)(6404,`strong`),Sk(6405,`(opcional)`),Kg()(),Qc(6406,`p`),Sk(6407,`Texto exibido quando não existem colunas definidas para a tabela.`),Kg()()(),Qc(6408,`tr`,291)(6409,`td`,17)(6410,`div`,26)(6411,`span`,27),Sk(6412,` modalTableNoData`),vu(6413,`br`),Kg()()(),Qc(6414,`td`,21)(6415,`code`,28),Sk(6416,`string`),Kg()(),Qc(6417,`td`,24)(6418,`em`)(6419,`strong`),Sk(6420,`(opcional)`),Kg()(),Qc(6421,`p`),Sk(6422,`Texto exibido quando não existem itens para serem exibidos na tabela.`),Kg()()(),Qc(6423,`tr`,292)(6424,`td`,17)(6425,`div`,26)(6426,`span`,27),Sk(6427,` modalTitle`),vu(6428,`br`),Kg()()(),Qc(6429,`td`,21)(6430,`code`,28),Sk(6431,`string`),Kg()(),Qc(6432,`td`,24)(6433,`em`)(6434,`strong`),Sk(6435,`(opcional)`),Kg()(),Qc(6436,`p`),Sk(6437,`Texto exibido no título da modal.`),Kg()()(),Qc(6438,`tr`,293)(6439,`td`,17)(6440,`div`,26)(6441,`span`,27),Sk(6442,` search`),vu(6443,`br`),Kg()()(),Qc(6444,`td`,21)(6445,`code`,28),Sk(6446,`string`),Kg()(),Qc(6447,`td`,24)(6448,`em`)(6449,`strong`),Sk(6450,`(opcional)`),Kg()(),Qc(6451,`p`),Sk(6452,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),Kg()()()(),Qc(6453,`h4`,294)(6454,`code`,5),Sk(6455,`PoLookupResponseApi`),Kg()(),Qc(6456,`div`,2)(6457,`p`),Sk(6458,`Interface que representa a estrutura de resposta de uma coleção de itens. `),Kg()(),Qc(6459,`h4`,12),Sk(6460,`Propriedades`),Kg(),Qc(6461,`table`,13)(6462,`tr`,14)(6463,`th`,15),Sk(6464,`Nome`),Kg(),Qc(6465,`th`,15),Sk(6466,`Tipo`),Kg(),Qc(6467,`th`,15),Sk(6468,`Descrição`),Kg()(),Qc(6469,`tr`,295)(6470,`td`,17)(6471,`div`,26)(6472,`span`,27),Sk(6473,` hasNext`),vu(6474,`br`),Kg()()(),Qc(6475,`td`,21)(6476,`code`,32),Sk(6477,`boolean`),Kg()(),Qc(6478,`td`,24)(6479,`p`),Sk(6480,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),Kg()()(),Qc(6481,`tr`,296)(6482,`td`,17)(6483,`div`,26)(6484,`span`,27),Sk(6485,` items`),vu(6486,`br`),Kg()()(),Qc(6487,`td`,21)(6488,`code`,297),Sk(6489,`Array<object>`),Kg()(),Qc(6490,`td`,24)(6491,`p`),Sk(6492,`Lista de itens retornados.`),Kg()()()(),Qc(6493,`h3`),Sk(6494,`Enums`),Kg(),Qc(6495,`h4`,298)(6496,`code`,5),Sk(6497,`PoTableColumnSpacing`),Kg()(),Qc(6498,`div`,2)(6499,`p`),Sk(6500,`Tipos de espaçamento interno (padding) das células (`),Qc(6501,`strong`),Sk(6502,`p-spacing`),Kg(),Sk(6503,`) do po-table.`),Kg()(),Qc(6504,`h4`,12),Sk(6505,`Propriedades`),Kg(),Qc(6506,`table`,13)(6507,`tr`,14)(6508,`th`,15),Sk(6509,`Nome`),Kg(),Qc(6510,`th`,15),Sk(6511,`Descrição`),Kg()(),Qc(6512,`tr`,299)(6513,`td`,17)(6514,`div`,26)(6515,`span`,27),Sk(6516,` ExtraSmall`),vu(6517,`br`),Kg()()(),Qc(6518,`td`,24)(6519,`p`),Sk(6520,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),Kg()()(),Qc(6521,`tr`,300)(6522,`td`,17)(6523,`div`,26)(6524,`span`,27),Sk(6525,` Small`),vu(6526,`br`),Kg()()(),Qc(6527,`td`,24)(6528,`p`),Sk(6529,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),Kg()()(),Qc(6530,`tr`,301)(6531,`td`,17)(6532,`div`,26)(6533,`span`,27),Sk(6534,` Medium`),vu(6535,`br`),Kg()()(),Qc(6536,`td`,24)(6537,`p`),Sk(6538,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),Kg()()(),Qc(6539,`tr`,302)(6540,`td`,17)(6541,`div`,26)(6542,`span`,27),Sk(6543,` Large`),vu(6544,`br`),Kg()()(),Qc(6545,`td`,24)(6546,`p`),Sk(6547,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Mt(a,et){if(a&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-lookup-basic-view`)(2,`sample-po-lookup-labs-view`)(3,`sample-po-lookup-hero-view`)(4,`sample-po-lookup-hero-reactive-form-view`)(5,`sample-po-lookup-advanced-filter-view`)(6,`sample-po-lookup-sw-films-view`)(7,`sample-po-lookup-multiple-view`)(8,`sample-po-lookup-mask-view`),Kg()}if(a&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Mt,9,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-lookup-doc`),Kg()()()),l&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,je,Ie,ze,Ne,Re,Ue,Je,Ke,Xe],encapsulation:2,changeDetection:1})}return a})()}];var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Tt),GV]})}return a})();var fn=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ze]})}return a})();export{fn as DocPoLookupModule};