import{m as P,p as M}from"./main-5NWS7DIP.js";import{$a as t_,$i as ar,Ar as G0,At as Zte,Ca as j_,Ci as Rk,Da as k,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Ki as ZL,Kr as Kg,L as Koe,Li as WL,Ni as Vk,Oi as U_,Pt as are,Qi as aF,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,Tn as q4,U as Mze,Va as p,Vi as Y,Vr as Jc,W as Nf,Wi as Yk,Wr as KO,Wt as cb,Xi as _t,Yr as LO,Zi as _u,aa as de,ar as Ab,ba as iR,bn as oi,ci as PI,co as wg,eo as tk,fo as xZ,j as I4,jr as GV,kt as Zoe,li as PZ,m as Dre,mi as QL,oi as Ok,or as An,pa as ge,pt as Tn,qi as Zb,rr as AZ,rt as Ru,sn as j4,so as we,ur as B_,va as i1,w as Fc,xi as R,yi as Qm,zi as Wk,zr as I}from"./chunk-DdK63a0t.js";import{r as t,t as r}from"./chunk-zystk1pz.js";var Me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&_u(0,`po-lookup`,0)},dependencies:[cb],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-lookup-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Me],encapsulation:2,changeDetection:1})}return a})();var T=(()=>{class a{httpClient=p(PI);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let d=r$1,{filterParams:l,advancedFilters:o}=d,s=t(d,[`filterParams`,`advancedFilters`]),m=r(r(r({},s),l),o);return this.httpClient.get(this.url,{params:m})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Ae=(()=>{class a{sampleFilterService=p(T);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Tn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[we([T])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=KO();Jc(0,`po-lookup`,1),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.lookup,d)||(o.lookup=d),H_(d)}),_t(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),Kg(),_u(1,`po-divider`),Jc(2,`po-container`,2)(3,`div`,3),_u(4,`po-info`,4)(5,`po-info`,5),Kg()(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.label,d)||(o.label=d),H_(d)}),Kg(),Jc(10,`po-checkbox-group`,7),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.columnsName,d)||(o.columnsName=d),H_(d)}),_t(`p-change`,function(){return o.updateColumns()}),Kg(),Jc(11,`po-select`,8),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.fieldLabel,d)||(o.fieldLabel=d),H_(d)}),Kg(),Jc(12,`po-select`,9),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.fieldValue,d)||(o.fieldValue=d),H_(d)}),Kg(),Jc(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.filterService,d)||(o.filterService=d),H_(d)}),Kg(),Jc(14,`po-input`,11),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.fieldErrorMessage,d)||(o.fieldErrorMessage=d),H_(d)}),Kg(),Jc(15,`po-input`,12),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.help,d)||(o.help=d),H_(d)}),Kg(),Jc(16,`po-input`,13),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.helperText,d)||(o.helperText=d),H_(d)}),Kg(),Jc(17,`po-input`,14),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.placeholder,d)||(o.placeholder=d),H_(d)}),Kg(),Jc(18,`po-input`,15),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.literals,d)||(o.literals=d),H_(d)}),_t(`p-change`,function(){return o.changeLiterals()}),Kg(),Jc(19,`po-input`,16),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.formatField,d)||(o.formatField=d),H_(d)}),_t(`p-change`,function(d){return o.onFieldFormatChange(d)}),Kg(),Jc(20,`po-checkbox-group`,17),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.properties,d)||(o.properties=d),H_(d)}),Kg(),Jc(21,`po-radio-group`,18),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.spacing,d)||(o.spacing=d),H_(d)}),Kg(),Jc(22,`po-radio-group`,19),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.size,d)||(o.size=d),H_(d)}),Kg(),Jc(23,`po-textarea`,20),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.advancedFilters,d)||(o.advancedFilters=d),H_(d)}),_t(`p-change`,function(){return o.changeAdvancedFilters()}),Kg(),Jc(24,`div`,3)(25,`po-button`,21),_t(`p-click`,function(){return o.restore()}),Kg()()()}l&2&&(Kb(`ngModel`,o.lookup),Ab(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),q0(),wg(4),Ab(`p-value`,o.lookup),wg(),Ab(`p-value`,o.event),wg(4),Kb(`ngModel`,o.label),q0(),wg(),Kb(`ngModel`,o.columnsName),Ab(`p-options`,o.columnsOptions),q0(),wg(),Kb(`ngModel`,o.fieldLabel),Ab(`p-options`,o.fieldLabelOptions),q0(),wg(),Kb(`ngModel`,o.fieldValue),Ab(`p-options`,o.fieldValueOptions),q0(),wg(),Kb(`ngModel`,o.filterService),q0(),wg(),Kb(`ngModel`,o.fieldErrorMessage),q0(),wg(),Kb(`ngModel`,o.help),q0(),wg(),Kb(`ngModel`,o.helperText),q0(),wg(),Kb(`ngModel`,o.placeholder),q0(),wg(),Kb(`ngModel`,o.literals),q0(),wg(),Kb(`ngModel`,o.formatField),q0(),wg(),Kb(`ngModel`,o.properties),Ab(`p-options`,o.propertiesOptions),q0(),wg(),Kb(`ngModel`,o.spacing),Ab(`p-options`,o.typeSpacing),q0(),wg(),Kb(`ngModel`,o.size),Ab(`p-options`,o.sizeOptions),q0(),wg(),Kb(`ngModel`,o.advancedFilters),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Fc,Nf,I4,j4,cb,Zte,Koe,Zoe,Joe],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-lookup-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-lookup
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-lookup.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,Ae],encapsulation:2,changeDetection:1})}return a})();var it=()=>({modalTitle:`Heroes available for mission`});var je=(()=>{class a{service=p(T);notification=p(Ru);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[we([T])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let s=KO();Jc(0,`div`,1),_u(1,`po-info`,2),Kg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.hero,d)||(o.hero=d),H_(d)}),Kg(),Jc(7,`po-select`,4),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(o.vehicle,d)||(o.vehicle=d),H_(d)}),Kg()(),Jc(8,`div`,1)(9,`po-button`,5),_t(`p-click`,function(){return o.startMission()}),Kg()()()}if(l&2){let s=ok(4);wg(6),Kb(`ngModel`,o.hero),Ab(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,Vk(10,it)),q0(),wg(),Kb(`ngModel`,o.vehicle),Ab(`p-options`,o.vehicles),q0(),wg(2),Ab(`p-disabled`,s.form.invalid||s.form.pending)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,cb,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var Oe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-lookup-hero`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup - Hero`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-hero`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-lookup.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,je],encapsulation:2,changeDetection:1})}return a})();var at=()=>[`nickname`,`label`];var lt=()=>({modalTitle:`Heroes available for mission`});var ze=(()=>{class a{service=p(T);notification=p(Ru);formBuilder=p(PZ);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,Qm.required],vehicle:[null,Qm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[we([T])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Jc(0,`div`,0),_u(1,`po-info`,1),Kg(),_u(2,`po-divider`),Jc(3,`form`,2)(4,`div`,0)(5,`po-lookup`,3),G0(),Kg(),Jc(6,`po-select`,4),G0(),Kg()(),Jc(7,`div`,0)(8,`po-button`,5),_t(`p-click`,function(){return o.startMission()}),Kg()()()),l&2&&(wg(3),Ab(`formGroup`,o.formMission),wg(2),Ab(`p-columns`,o.columns)(`p-field-format`,Vk(7,at))(`p-filter-service`,o.service)(`p-literals`,Vk(8,lt)),q0(),wg(),Ab(`p-options`,o.vehicles),q0(),wg(2),Ab(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[xZ,RZ,AZ,ZL,i1,oi,Nf,cb,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var Ve=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-lookup-hero-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup - Hero Reactive Form`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-hero-reactive-form`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-lookup.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var mt=()=>({modalTitle:`Select a hero`});var He=(()=>{class a{service=p(T);hero;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`},{property:`email`,label:`E-mail`}];advancedFilters=[{property:`name`,label:`Name`,gridColumns:6},{property:`email`,label:`E-mail`,gridColumns:6},{property:`nickname`,label:`Hero`,gridColumns:6,initValue:`Hulk`,forceOptionsComponentType:Dre.radioGroup,options:[{label:`Batman`,value:`Batman`},{label:`Superman`,value:`Superman`},{label:`Hulk`,value:`Hulk`},{label:`Thor`,value:`Thor`}]}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-advanced-filter`]],standalone:!1,features:[we([T])],decls:7,vars:7,consts:[[1,`po-row`],[`p-label`,`Advanced filter with initial value`,`p-value`,`Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result.`,1,`po-lg-12`],[`name`,`hero`,`p-field-label`,`name`,`p-field-value`,`nickname`,`p-help`,`Select a hero`,`p-label`,`Hero`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-advanced-filters`,`p-literals`],[`p-label`,`Selected value`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Jc(0,`div`,0),_u(1,`po-info`,1),Kg(),_u(2,`po-divider`),Jc(3,`div`,0)(4,`po-lookup`,2),G0(),Zb(`ngModelChange`,function(m){return Rk(o.hero,m)||(o.hero=m),m}),Kg()(),Jc(5,`div`,0),_u(6,`po-info`,3),Kg()),l&2&&(wg(4),Kb(`ngModel`,o.hero),Ab(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,Vk(6,mt)),q0(),wg(2),Ab(`p-value`,o.hero||`-`))},dependencies:[RZ,QL,Nf,cb,Joe],encapsulation:2})}return a})();var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-advanced-filter-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-lookup-advanced-filter`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup - Advanced Filter`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-advanced-filter`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-lookup.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,He],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{http=p(PI);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(Y(m=>({items:m.results,hasNext:!!m.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(Y(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ct(a,Xe){if(a&1&&(Jc(0,`div`,0),_u(1,`po-table`,3),Kg()),a&2){let r=tk();wg(),Ab(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var Ne=(()=>{class a{filterService=p(ce);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[we([ce])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`po-radio-group`,1),G0(),Zb(`ngModelChange`,function(m){return Rk(o.filterParams,m)||(o.filterParams=m),m}),Kg()(),_u(2,`po-divider`),Jc(3,`div`,0)(4,`po-lookup`,2),Wk(5,`titlecase`),G0(),Zb(`ngModelChange`,function(m){return Rk(o.entity,m)||(o.entity=m),m}),_t(`p-selected`,function(m){return o.onSelected(m)}),Kg()(),LO(6,ct,2,4,`div`,0)),l&2&&(wg(),Kb(`ngModel`,o.filterParams),Ab(`p-options`,o.entities),q0(),wg(3),Ab(`p-help`,Ok(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,Ok(``,Yk(5,12,o.entityLabel),` of Star Wars`)),Kb(`ngModel`,o.entity),Ab(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),q0(),wg(2),jO(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[RZ,QL,Nf,cb,Zte,q4,aF],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:41,vars:0,consts:[[`id`,`sample-po-lookup-sw-films`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup - Star Wars films`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-sw-films`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
    p-help="Select a `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` entityLabel `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,` to see the list of movies in which it participated"
    p-label="`),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` entityLabel | titlecase `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,` of Star Wars"
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
`),Kg()()()(),Jc(28,`po-tab`,10)(29,`div`)(30,`label`,7),Mk(31,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),Kg(),Jc(32,`div`,11)(33,`pre`,12),Mk(34,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(35,`label`,7),Mk(36,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),Kg(),Jc(37,`div`,13)(38,`pre`,12),Mk(39,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(40,`hr`))},dependencies:[P,tre,are,Ne],encapsulation:2,changeDetection:1})}return a})();var We=(()=>{class a{http=p(PI);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(iR(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Be=(()=>{class a{service=p(We);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`po-lookup`,1),G0(),Zb(`ngModelChange`,function(m){return Rk(o.multiLookup,m)||(o.multiLookup=m),m}),_t(`p-change`,function(m){return o.changeOptions(m)}),Kg(),Jc(2,`po-container`,2),_u(3,`po-table`,3),Kg()()),l&2&&(wg(),Kb(`ngModel`,o.multiLookup),Ab(`p-multiple`,!0),q0(),wg(2),Ab(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[RZ,QL,Fc,cb,q4],encapsulation:2,changeDetection:1})}return a})();var Ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-lookup-multiple`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup - Multiple`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-multiple`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,Be],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items];return k({items:o,hasNext:!1}).pipe(t_(200))}getObjectByValue(r){return Array.isArray(r)?k(this.items.filter(l=>r.includes(l.value))).pipe(t_(200)):k(this.items.find(l=>String(l.value)===String(r))).pipe(t_(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac})}return a})();var Ge=(()=>{class a{service=p(ue);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[we([ue])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`po-lookup`,1),G0(),Zb(`ngModelChange`,function(m){return Rk(o.person,m)||(o.person=m),m}),Kg()()),l&2&&(wg(),Kb(`ngModel`,o.person),Ab(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),q0())},dependencies:[RZ,QL,cb],encapsulation:2})}return a})();var Qe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-lookup-mask`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`,1,`docs-code-block`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Lookup - Mask`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-lookup-mask`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { Injectable } from '@angular/core';

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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,Ge],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6548,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-lookup-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-advanced-filters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-height`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`event-p-change-visible-columns`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`event-p-restore-column-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-field-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`prop-p-field-label`,1,`docs-api-properties-row`],[`id`,`prop-p-field-value`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`prop-p-filter-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-columns-manager`,1,`docs-api-properties-row`],[`id`,`prop-p-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-multiple`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`event-p-selected`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-spacing`,1,`docs-api-properties-row`],[`id`,`prop-p-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-virtual-scroll`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-lookup-advanced-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-advanced-filter-additional-help`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-lookup-advanced-filter-additional-help-tooltip`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-advanced-filters`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-append-box`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-auto-height`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-auto-upload`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-boolean-false`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-boolean-true`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-change-on-enter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-change-visible-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-column-restore-manager`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`id`,`interface-po-lookup-advanced-filter-compact-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-container`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-custom-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`id`,`interface-po-lookup-advanced-filter-custom-action-click`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`id`,`interface-po-lookup-advanced-filter-debounce-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-decimals-length`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-directory`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-disabled-init-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-disabled-tab-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-display-format`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-divider`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-drag-drop`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-drag-drop-height`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-error-async-function`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`id`,`interface-po-lookup-advanced-filter-error-async-properties`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`id`,`interface-po-lookup-advanced-filter-error-limit`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-field-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-field-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-filter-minlength`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`id`,`interface-po-lookup-advanced-filter-force-boolean-component-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`id`,`interface-po-lookup-advanced-filter-force-options-component-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`id`,`interface-po-lookup-advanced-filter-form-field`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-format`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-format-model`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-format-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-lg-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-lg-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-md-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-md-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-sm-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-sm-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-xl-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-grid-xl-pull`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-headers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`id`,`interface-po-lookup-advanced-filter-help`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-helper`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-label-status`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-password-peek`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-restrictions-info`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-select-all`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-select-button`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-hide-send-button`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-lookup-advanced-filter-infinite-scroll`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-infinite-scroll-distance`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-init-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-invalid-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-iso-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`id`,`interface-po-lookup-advanced-filter-key`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-keydown`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-label-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`id`,`interface-po-lookup-advanced-filter-listbox-control-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`interface-po-lookup-advanced-filter-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`id`,`interface-po-lookup-advanced-filter-loading`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-locale`,1,`docs-api-properties-row`],[`href`,`documentation/po-i18n`],[`id`,`interface-po-lookup-advanced-filter-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-mask-format-model`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-mask-no-length-validation`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-max-length`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-max-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-max-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-min-length`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-min-time`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-min-value`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-minute-interval`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`id`,`interface-po-lookup-advanced-filter-model-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`id`,`interface-po-lookup-advanced-filter-multiple`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-lg-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-md-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-sm-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-offset-xl-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-on-error`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-on-success`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-on-upload`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-optional`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`id`,`interface-po-lookup-advanced-filter-options-multi`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-options-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`id`,`interface-po-lookup-advanced-filter-order`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-params`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-pattern`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-placeholder-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-property`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-range`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-range-preset-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`id`,`interface-po-lookup-advanced-filter-range-presets`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-range-presets-order`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`id`,`interface-po-lookup-advanced-filter-readonly`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-remove-initial-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-required`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-restrictions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`id`,`interface-po-lookup-advanced-filter-rows`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-search-service`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-second-interval`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-secret`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-show-required`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-show-seconds`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-show-thumbnail`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-size`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-sort`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-step`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-thousand-maxlength`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`id`,`interface-po-lookup-advanced-filter-url`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-validate`,1,`docs-api-properties-row`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`interface-po-lookup-advanced-filter-visible`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-advanced-filter-year-range-limit`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-column-field-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-format`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-property`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-type`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-column-width`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filter`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-filter-method-getFilteredItems`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-lookup-filter-method-getObjectByValue`,1,`docs-api-method-table`],[`id`,`interface-po-lookup-filtered-items-params`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-filtered-items-params-advanced-filters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`id`,`interface-po-lookup-filtered-items-params-filter`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-filter-params`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-order`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-page`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-filtered-items-params-page-size`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search-primary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search-secondary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-advanced-search-title`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-disclaimer-group-title`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-placeholder`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-primary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-secondary-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-load-more-data`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-loading-data`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-no-columns`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-table-no-data`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-modal-title`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-literals-search`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-response-api`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-lookup-response-api-has-next`,1,`docs-api-properties-row`],[`id`,`interface-po-lookup-response-api-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`],[`id`,`enum-po-table-column-spacing`,1,`docs-api-class-name`],[`id`,`enum-po-table-column-spacing-extra-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-small`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-medium`,1,`docs-api-properties-row`],[`id`,`enum-po-table-column-spacing-large`,1,`docs-api-properties-row`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoLookupComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Jc(24,`code`),Mk(25,`po-lookup`),Kg(),Mk(26,` permite que o usuário digite um valor e pressione a tecla `),Jc(27,`em`),Mk(28,`TAB`),Kg(),Mk(29,` para
buscar um registro.`),Kg(),Jc(30,`blockquote`)(31,`p`),Mk(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),Kg()(),Jc(33,`blockquote`)(34,`p`),Mk(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Jc(36,`a`,6),Mk(37,`modelo`),Kg(),Mk(38,` como `),Jc(39,`code`),Mk(40,`pending`),Kg(),Mk(41,`.`),Kg()(),Jc(42,`p`),Mk(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Jc(44,`code`),Mk(45,`po-select`),Kg(),Mk(46,` ou o `),Jc(47,`code`),Mk(48,`po-combo`),Kg(),Mk(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Jc(50,`a`,7),Mk(51,`Guia de implementação das APIs TOTVS`),Kg(),Mk(52,`.`),Kg(),Jc(53,`p`),Mk(54,`Importante:`),Kg(),Jc(55,`ul`)(56,`li`)(57,`p`),Mk(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Kg(),Jc(59,`pre`)(60,`code`),Mk(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),Kg()()(),Jc(62,`li`)(63,`p`),Mk(64,`Ao utilizar a propriedade `),Jc(65,`code`),Mk(66,`p-advanced-filters`),Kg(),Mk(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),Jc(68,`code`),Mk(69,`po-dynamic-form`),Kg(),Mk(70,`. Em aplicações que não importam o `),Jc(71,`code`),Mk(72,`PoModule`),Kg(),Mk(73,`, como projetos
`),Jc(74,`em`),Mk(75,`standalone`),Kg(),Mk(76,` ou que utilizam módulos específicos, é necessário importar o `),Jc(77,`code`),Mk(78,`PoDynamicModule`),Kg(),Mk(79,`
no componente ou m\xF3dulo onde o `),Jc(80,`code`),Mk(81,`po-lookup`),Kg(),Mk(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Jc(83,`code`),Mk(84,`NG0201: No provider found for _TitleCasePipe`),Kg(),Mk(85,` ao abrir a busca avançada.`),Kg(),Jc(86,`pre`)(87,`code`),Mk(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),Kg()()()(),Jc(89,`h4`),Mk(90,`Tokens customizáveis`),Kg(),Jc(91,`p`),Mk(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(93,`blockquote`)(94,`p`),Mk(95,`Para maiores informações, acesse o guia `),Jc(96,`a`,8),Mk(97,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(98,`.`),Kg()(),Jc(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),Mk(103,`Propriedade`),Kg(),Jc(104,`th`),Mk(105,`Descrição`),Kg(),Jc(106,`th`),Mk(107,`Valor Padrão`),Kg()()(),Jc(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),Mk(112,`Default Values`),Kg()(),_u(113,`td`)(114,`td`),Kg(),Jc(115,`tr`)(116,`td`)(117,`code`),Mk(118,`--font-family`),Kg()(),Jc(119,`td`),Mk(120,`Família tipográfica usada`),Kg(),Jc(121,`td`)(122,`code`),Mk(123,`var(--font-family-theme)`),Kg()()(),Jc(124,`tr`)(125,`td`)(126,`code`),Mk(127,`--font-size`),Kg()(),Jc(128,`td`),Mk(129,`Tamanho da fonte`),Kg(),Jc(130,`td`)(131,`code`),Mk(132,`var(--font-size-default)`),Kg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Mk(136,`--text-color-placeholder`),Kg()(),Jc(137,`td`),Mk(138,`Cor do texto no placeholder`),Kg(),Jc(139,`td`)(140,`code`),Mk(141,`var(--color-neutral-light-30)`),Kg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Mk(145,`--color`),Kg()(),Jc(146,`td`),Mk(147,`Cor principal do lookup`),Kg(),Jc(148,`td`)(149,`code`),Mk(150,`var(--color-neutral-dark-70)`),Kg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Mk(154,`--border-radius`),Kg()(),Jc(155,`td`),Mk(156,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(157,`td`)(158,`code`),Mk(159,`var(--border-radius-md)`),Kg()()(),Jc(160,`tr`)(161,`td`)(162,`code`),Mk(163,`--background`),Kg()(),Jc(164,`td`),Mk(165,`Cor de background`),Kg(),Jc(166,`td`)(167,`code`),Mk(168,`var(--color-neutral-light-05)`),Kg()()(),Jc(169,`tr`)(170,`td`)(171,`code`),Mk(172,`--text-color`),Kg()(),Jc(173,`td`),Mk(174,`Cor do texto`),Kg(),Jc(175,`td`)(176,`code`),Mk(177,`var(--color-neutral-dark-90)`),Kg()()(),Jc(178,`tr`)(179,`td`)(180,`code`),Mk(181,`--color-clear`),Kg()(),Jc(182,`td`),Mk(183,`Cor principal do icone clear`),Kg(),Jc(184,`td`)(185,`code`),Mk(186,`var(--color-action-default)`),Kg()()(),Jc(187,`tr`)(188,`td`)(189,`strong`),Mk(190,`Icon`),Kg()(),_u(191,`td`)(192,`td`),Kg(),Jc(193,`tr`)(194,`td`)(195,`code`),Mk(196,`--color-icon`),Kg()(),Jc(197,`td`),Mk(198,`Cor principal do icone pesquisar`),Kg(),Jc(199,`td`)(200,`code`),Mk(201,`var(--color-action-default)`),Kg()()(),Jc(202,`tr`)(203,`td`)(204,`strong`),Mk(205,`Hover`),Kg()(),_u(206,`td`)(207,`td`),Kg(),Jc(208,`tr`)(209,`td`)(210,`code`),Mk(211,`--color-hover`),Kg()(),Jc(212,`td`),Mk(213,`Cor principal no estado hover`),Kg(),Jc(214,`td`)(215,`code`),Mk(216,`var(--color-brand-01-dark)`),Kg()()(),Jc(217,`tr`)(218,`td`)(219,`code`),Mk(220,`--background-hover`),Kg()(),Jc(221,`td`),Mk(222,`Cor de background no estado hover`),Kg(),Jc(223,`td`)(224,`code`),Mk(225,`var(--color-brand-01-lightest)`),Kg()()(),Jc(226,`tr`)(227,`td`)(228,`strong`),Mk(229,`Focused`),Kg()(),_u(230,`td`)(231,`td`),Kg(),Jc(232,`tr`)(233,`td`)(234,`code`),Mk(235,`--color-focused`),Kg()(),Jc(236,`td`),Mk(237,`Cor principal no estado de focus`),Kg(),Jc(238,`td`)(239,`code`),Mk(240,`var(--color-action-default)`),Kg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Mk(244,`--outline-color-focused`),Kg()(),Jc(245,`td`),Mk(246,`Cor do outline do estado de focus`),Kg(),Jc(247,`td`)(248,`code`),Mk(249,`var(--color-action-focus)`),Kg()()(),Jc(250,`tr`)(251,`td`)(252,`strong`),Mk(253,`Disabled`),Kg()(),_u(254,`td`)(255,`td`),Kg(),Jc(256,`tr`)(257,`td`)(258,`code`),Mk(259,`--color-disabled`),Kg()(),Jc(260,`td`),Mk(261,`Cor principal no estado disabled`),Kg(),Jc(262,`td`)(263,`code`),Mk(264,`var(--color-action-disabled)`),Kg()()(),Jc(265,`tr`)(266,`td`)(267,`code`),Mk(268,`--background-disabled`),Kg()(),Jc(269,`td`),Mk(270,`Cor de background no estado disabled`),Kg(),Jc(271,`td`)(272,`code`),Mk(273,`var(--color-neutral-light-20)`),Kg()()(),Jc(274,`tr`)(275,`td`)(276,`code`),Mk(277,`--text-color-disabled`),Kg()(),Jc(278,`td`),Mk(279,`Cor do texto quando campo está desabilitado`),Kg(),Jc(280,`td`)(281,`code`),Mk(282,`var(--color-action-disabled)`),Kg()()(),Jc(283,`tr`)(284,`td`)(285,`strong`),Mk(286,`Error`),Kg()(),_u(287,`td`)(288,`td`),Kg(),Jc(289,`tr`)(290,`td`)(291,`code`),Mk(292,`--color-error`),Kg()(),Jc(293,`td`),Mk(294,`Cor de background no estado de requerido`),Kg(),Jc(295,`td`)(296,`code`),Mk(297,`var(--color-feedback-negative-base)`),Kg()()()()()(),Jc(298,`div`,9)(299,`h4`,10),Mk(300,`Seletor`),Kg(),Jc(301,`pre`,11),Mk(302,`<po-lookup
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
`),Kg()(),Jc(303,`h4`,12),Mk(304,`Propriedades`),Kg(),Jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),Mk(308,`Nome`),Kg(),Jc(309,`th`,15),Mk(310,`Tipo`),Kg(),Jc(311,`th`,15),Mk(312,`Padrão`),Kg(),Jc(313,`th`,15),Mk(314,`Descrição`),Kg()(),Jc(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),Mk(319,` (p-additional-help)`),_u(320,`br`),Kg()(),Jc(321,`div`,20),Mk(322,`Deprecated`),Kg()(),Jc(323,`td`,21)(324,`code`,22),Mk(325,`EventEmitter`),Kg()(),Jc(326,`td`,23),Mk(327,`-`),Kg(),Jc(328,`td`,24)(329,`em`)(330,`strong`),Mk(331,`(opcional)`),Kg()(),Jc(332,`p`),Mk(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(334,`blockquote`)(335,`p`),Mk(336,`Essa propriedade está `),Jc(337,`strong`),Mk(338,`depreciada`),Kg(),Mk(339,` e será removida na versão `),Jc(340,`code`),Mk(341,`23.x.x`),Kg(),Mk(342,`. Recomendamos utilizar a propriedade `),Jc(343,`code`),Mk(344,`p-helper`),Kg(),Mk(345,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(346,`tr`,25)(347,`td`,17)(348,`div`,26)(349,`span`,27),Mk(350,` p-additional-help-tooltip`),_u(351,`br`),Kg()(),Jc(352,`div`,20),Mk(353,`Deprecated`),Kg()(),Jc(354,`td`,21)(355,`code`,28),Mk(356,`string`),Kg()(),Jc(357,`td`,23),Mk(358,`-`),Kg(),Jc(359,`td`,24)(360,`em`)(361,`strong`),Mk(362,`(opcional)`),Kg()(),Jc(363,`p`),Mk(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(365,`code`),Mk(366,`po-helper`),Kg(),Mk(367,`.
`),Jc(368,`strong`),Mk(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(370,`blockquote`)(371,`p`),Mk(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(373,`blockquote`)(374,`p`),Mk(375,`Essa propriedade está `),Jc(376,`strong`),Mk(377,`depreciada`),Kg(),Mk(378,` e será removida na versão `),Jc(379,`code`),Mk(380,`23.x.x`),Kg(),Mk(381,`. Recomendamos utilizar a propriedade `),Jc(382,`code`),Mk(383,`p-helper`),Kg(),Mk(384,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(385,`tr`,29)(386,`td`,17)(387,`div`,26)(388,`span`,27),Mk(389,` p-advanced-filters`),_u(390,`br`),Kg()()(),Jc(391,`td`,21)(392,`code`,30),Mk(393,`Array<PoLookupAdvancedFilter>`),Kg()(),Jc(394,`td`,23),Mk(395,`-`),Kg(),Jc(396,`td`,24)(397,`em`)(398,`strong`),Mk(399,`(opcional)`),Kg()(),Jc(400,`p`),Mk(401,`Lista de objetos dos campos que serão criados na busca avançada.`),Kg(),Jc(402,`blockquote`)(403,`p`),Mk(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Kg()(),Jc(405,`blockquote`)(406,`p`),Mk(407,`A busca avançada é construída a partir do `),Jc(408,`code`),Mk(409,`po-dynamic-form`),Kg(),Mk(410,`. Em aplicações que não importam o `),Jc(411,`code`),Mk(412,`PoModule`),Kg(),Mk(413,`,
como projetos `),Jc(414,`em`),Mk(415,`standalone`),Kg(),Mk(416,` ou que utilizam módulos específicos, é necessário importar o `),Jc(417,`code`),Mk(418,`PoDynamicModule`),Kg(),Mk(419,`
no componente ou m\xF3dulo onde o `),Jc(420,`code`),Mk(421,`po-lookup`),Kg(),Mk(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Jc(423,`code`),Mk(424,`NG0201: No provider found for _TitleCasePipe`),Kg(),Mk(425,` ao abrir a busca avançada.`),Kg()(),Jc(426,`p`),Mk(427,`Exemplo de URL com busca avançada:`),Kg(),Jc(428,`pre`)(429,`code`),Mk(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),Kg()(),Jc(431,`p`),Mk(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),Kg(),Jc(433,`pre`)(434,`code`),Mk(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),Kg()(),Jc(436,`p`),Mk(437,`Também é possível definir um valor inicial para os campos da busca avançada através da propriedade `),Jc(438,`code`),Mk(439,`initValue`),Kg(),Mk(440,`,
que ser\xE1 atribu\xEDdo ao campo na primeira abertura da janela de busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro,
os campos s\xE3o preenchidos com os valores filtrados:`),Kg(),Jc(441,`pre`)(442,`code`),Mk(443,`advancedFilters: Array<PoLookupAdvancedFilter> = [
  { property: 'nickname', label: 'Apelido' },
  { property: 'active', label: 'Ativo', initValue: false, options: [
    { label: 'Sim', value: true },
    { label: 'N\xE3o', value: false }
  ]}
];
`),Kg()()()(),Jc(444,`tr`,31)(445,`td`,17)(446,`div`,26)(447,`span`,27),Mk(448,` p-append-in-body`),_u(449,`br`),Kg()()(),Jc(450,`td`,21)(451,`code`,32),Mk(452,`boolean`),Kg()(),Jc(453,`td`,23)(454,`p`)(455,`code`),Mk(456,`false`),Kg()()(),Jc(457,`td`,24)(458,`em`)(459,`strong`),Mk(460,`(opcional)`),Kg()(),Jc(461,`p`),Mk(462,`Define que o popover (`),Jc(463,`code`),Mk(464,`p-helper`),Kg(),Mk(465,` e/ou `),Jc(466,`code`),Mk(467,`p-error-limit`),Kg(),Mk(468,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(469,`blockquote`)(470,`p`),Mk(471,`Quando utilizado com `),Jc(472,`code`),Mk(473,`p-helper`),Kg(),Mk(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(475,`tr`,33)(476,`td`,17)(477,`div`,26)(478,`span`,27),Mk(479,` p-auto-focus`),_u(480,`br`),Kg()()(),Jc(481,`td`,21)(482,`code`,32),Mk(483,`boolean`),Kg()(),Jc(484,`td`,23)(485,`p`)(486,`code`),Mk(487,`false`),Kg()()(),Jc(488,`td`,24)(489,`em`)(490,`strong`),Mk(491,`(opcional)`),Kg()(),Jc(492,`p`),Mk(493,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(494,`blockquote`)(495,`p`),Mk(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(497,`tr`,34)(498,`td`,17)(499,`div`,26)(500,`span`,27),Mk(501,` p-auto-height`),_u(502,`br`),Kg()()(),Jc(503,`td`,21)(504,`code`,32),Mk(505,`boolean`),Kg()(),Jc(506,`td`,23)(507,`p`)(508,`code`),Mk(509,`false`),Kg()()(),Jc(510,`td`,24)(511,`em`)(512,`strong`),Mk(513,`(opcional)`),Kg()(),Jc(514,`p`),Mk(515,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Kg()()(),Jc(516,`tr`,35)(517,`td`,17)(518,`div`,18)(519,`span`,19),Mk(520,` (p-change)`),_u(521,`br`),Kg()()(),Jc(522,`td`,21)(523,`code`,22),Mk(524,`EventEmitter`),Kg()(),Jc(525,`td`,23),Mk(526,`-`),Kg(),Jc(527,`td`,24)(528,`em`)(529,`strong`),Mk(530,`(opcional)`),Kg()(),Jc(531,`p`),Mk(532,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),Kg()()(),Jc(533,`tr`,36)(534,`td`,17)(535,`div`,18)(536,`span`,19),Mk(537,` (p-change-model)`),_u(538,`br`),Kg()()(),Jc(539,`td`,21)(540,`code`,22),Mk(541,`EventEmitter`),Kg()(),Jc(542,`td`,23),Mk(543,`-`),Kg(),Jc(544,`td`,24)(545,`em`)(546,`strong`),Mk(547,`(opcional)`),Kg()(),Jc(548,`p`),Mk(549,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(550,`code`),Mk(551,`setValue`),Kg(),Mk(552,`, `),Jc(553,`code`),Mk(554,`patchValue`),Kg(),Mk(555,`, carregamento assíncrono).`),Kg(),Jc(556,`p`),Mk(557,`Diferentemente do `),Jc(558,`code`),Mk(559,`p-change`),Kg(),Mk(560,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(561,`code`),Mk(562,`p-change-model`),Kg(),Mk(563,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(564,`p`),Mk(565,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(566,`tr`,37)(567,`td`,17)(568,`div`,18)(569,`span`,19),Mk(570,` (p-change-visible-columns)`),_u(571,`br`),Kg()()(),Jc(572,`td`,21)(573,`code`,22),Mk(574,`EventEmitter`),Kg()(),Jc(575,`td`,23),Mk(576,`-`),Kg(),Jc(577,`td`,24)(578,`em`)(579,`strong`),Mk(580,`(opcional)`),Kg()(),Jc(581,`p`),Mk(582,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Kg(),Jc(583,`p`),Mk(584,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Jc(585,`tr`,38)(586,`td`,17)(587,`div`,26)(588,`span`,27),Mk(589,` p-clean`),_u(590,`br`),Kg()()(),Jc(591,`td`,21)(592,`code`,32),Mk(593,`boolean`),Kg()(),Jc(594,`td`,23),Mk(595,`-`),Kg(),Jc(596,`td`,24)(597,`p`),Mk(598,`Exibe um ícone que permite limpar o campo.`),Kg()()(),Jc(599,`tr`,39)(600,`td`,17)(601,`div`,18)(602,`span`,19),Mk(603,` (p-restore-column-manager)`),_u(604,`br`),Kg()()(),Jc(605,`td`,21)(606,`code`,22),Mk(607,`EventEmitter`),Kg()(),Jc(608,`td`,23),Mk(609,`-`),Kg(),Jc(610,`td`,24)(611,`em`)(612,`strong`),Mk(613,`(opcional)`),Kg()(),Jc(614,`p`),Mk(615,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Kg(),Jc(616,`p`),Mk(617,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg()()(),Jc(618,`tr`,40)(619,`td`,17)(620,`div`,26)(621,`span`,27),Mk(622,` p-columns`),_u(623,`br`),Kg()()(),Jc(624,`td`,21)(625,`code`,41),Mk(626,`Array<PoLookupColumn>`),Kg()(),Jc(627,`td`,23),Mk(628,`-`),Kg(),Jc(629,`td`,24)(630,`em`)(631,`strong`),Mk(632,`(opcional)`),Kg()(),Jc(633,`p`),Mk(634,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),Kg()()(),Jc(635,`tr`,42)(636,`td`,17)(637,`div`,26)(638,`span`,27),Mk(639,` p-compact-label`),_u(640,`br`),Kg()()(),Jc(641,`td`,21)(642,`code`,32),Mk(643,`boolean`),Kg()(),Jc(644,`td`,23)(645,`p`)(646,`code`),Mk(647,`false`),Kg()()(),Jc(648,`td`,24)(649,`em`)(650,`strong`),Mk(651,`(opcional)`),Kg()(),Jc(652,`p`),Mk(653,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(654,`p`),Mk(655,`Quando habilitado (`),Jc(656,`code`),Mk(657,`true`),Kg(),Mk(658,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(659,`ul`)(660,`li`)(661,`code`),Mk(662,`po-label`),Kg()(),Jc(663,`li`)(664,`code`),Mk(665,`p-requirement (showRequired)`),Kg()(),Jc(666,`li`)(667,`code`),Mk(668,`po-helper`),Kg()()(),Jc(669,`p`),Mk(670,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(671,`p`),Mk(672,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(673,`ul`)(674,`li`)(675,`code`),Mk(676,`--field-container-title-justify`),Kg()(),Jc(677,`li`)(678,`code`),Mk(679,`--field-container-title-flex`),Kg()()(),Jc(680,`p`),Mk(681,`Exemplo:`),Kg(),Jc(682,`pre`)(683,`code`),Mk(684,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(685,`p`),Mk(686,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(687,`tr`,43)(688,`td`,17)(689,`div`,26)(690,`span`,27),Mk(691,` p-disabled`),_u(692,`br`),Kg()()(),Jc(693,`td`,21)(694,`code`,32),Mk(695,`boolean`),Kg()(),Jc(696,`td`,23)(697,`p`),Mk(698,`false`),Kg()(),Jc(699,`td`,24)(700,`em`)(701,`strong`),Mk(702,`(opcional)`),Kg()(),Jc(703,`p`),Mk(704,`Indica que o campo será desabilitado.`),Kg()()(),Jc(705,`tr`,44)(706,`td`,17)(707,`div`,26)(708,`span`,27),Mk(709,` p-error-limit`),_u(710,`br`),Kg()()(),Jc(711,`td`,21)(712,`code`,32),Mk(713,`boolean`),Kg()(),Jc(714,`td`,23)(715,`p`)(716,`code`),Mk(717,`false`),Kg()()(),Jc(718,`td`,24)(719,`em`)(720,`strong`),Mk(721,`(opcional)`),Kg()(),Jc(722,`p`),Mk(723,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(724,`blockquote`)(725,`p`),Mk(726,`Caso essa propriedade seja definida como `),Jc(727,`code`),Mk(728,`true`),Kg(),Mk(729,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(730,`tr`,45)(731,`td`,17)(732,`div`,26)(733,`span`,27),Mk(734,` p-field-error-message`),_u(735,`br`),Kg()()(),Jc(736,`td`,21)(737,`code`,28),Mk(738,`string`),Kg()(),Jc(739,`td`,23),Mk(740,`-`),Kg(),Jc(741,`td`,24)(742,`em`)(743,`strong`),Mk(744,`(opcional)`),Kg()(),Jc(745,`p`),Mk(746,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Jc(747,`blockquote`)(748,`p`),Mk(749,`Necessário que a propriedade `),Jc(750,`code`),Mk(751,`p-required`),Kg(),Mk(752,` esteja habilitada.`),Kg()()()(),Jc(753,`tr`,46)(754,`td`,17)(755,`div`,26)(756,`span`,27),Mk(757,` p-field-format`),_u(758,`br`),Kg()()(),Jc(759,`td`,21)(760,`code`,47),Mk(761,`((value) => string) `),Kg(),Jc(762,`code`,48),Mk(763,` Array<string>`),Kg()(),Jc(764,`td`,23),Mk(765,`-`),Kg(),Jc(766,`td`,24)(767,`em`)(768,`strong`),Mk(769,`(opcional)`),Kg()(),Jc(770,`p`),Mk(771,`Formato de exibição do campo.`),Kg(),Jc(772,`p`),Mk(773,`Recebe uma função que deve retornar uma `),Jc(774,`em`),Mk(775,`string`),Kg(),Mk(776,` com o/os valores do objeto formatados para exibição, por exemplo:`),Kg(),Jc(777,`pre`)(778,`code`),Mk(779,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),Kg()(),Jc(780,`blockquote`)(781,`p`),Mk(782,`Esta propriedade sobrepõe o valor da propriedade `),Jc(783,`code`),Mk(784,`p-field-label`),Kg(),Mk(785,` na descrição do campo.`),Kg()(),Jc(786,`p`),Mk(787,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),Kg(),Jc(788,`pre`)(789,`code`),Mk(790,`<po-lookup
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
`),Kg()(),Jc(791,`blockquote`)(792,`p`),Mk(793,`Será utilizado `),Jc(794,`code`),Mk(795,`-`),Kg(),Mk(796,` como separador.`),Kg()()()(),Jc(797,`tr`,49)(798,`td`,17)(799,`div`,26)(800,`span`,27),Mk(801,` p-field-label`),_u(802,`br`),Kg()()(),Jc(803,`td`,21)(804,`code`,28),Mk(805,`string`),Kg()(),Jc(806,`td`,23),Mk(807,`-`),Kg(),Jc(808,`td`,24)(809,`p`),Mk(810,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),Kg()()(),Jc(811,`tr`,50)(812,`td`,17)(813,`div`,26)(814,`span`,27),Mk(815,` p-field-value`),_u(816,`br`),Kg()()(),Jc(817,`td`,21)(818,`code`,28),Mk(819,`string`),Kg()(),Jc(820,`td`,23),Mk(821,`-`),Kg(),Jc(822,`td`,24)(823,`p`),Mk(824,`Indica a coluna que será utilizada como valor do campo.`),Kg(),Jc(825,`blockquote`)(826,`p`),Mk(827,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),Kg()()()(),Jc(828,`tr`,51)(829,`td`,17)(830,`div`,26)(831,`span`,27),Mk(832,` p-filter-params`),_u(833,`br`),Kg()()(),Jc(834,`td`,21)(835,`code`,52),Mk(836,`any`),Kg()(),Jc(837,`td`,23),Mk(838,`-`),Kg(),Jc(839,`td`,24)(840,`em`)(841,`strong`),Mk(842,`(opcional)`),Kg()(),Jc(843,`p`),Mk(844,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Jc(845,`code`),Mk(846,`PoLookupFilter`),Kg(),Mk(847,`.`),Kg()()(),Jc(848,`tr`,53)(849,`td`,17)(850,`div`,26)(851,`span`,27),Mk(852,` p-filter-service`),_u(853,`br`),Kg()()(),Jc(854,`td`,21)(855,`code`,28),Mk(856,`string `),Kg(),Jc(857,`code`,54),Mk(858,` PoLookupFilter`),Kg()(),Jc(859,`td`,23),Mk(860,`-`),Kg(),Jc(861,`td`,24)(862,`p`),Mk(863,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Jc(864,`code`),Mk(865,`PoLookupFilter`),Kg(),Mk(866,` ou uma URL.`),Kg(),Jc(867,`p`),Mk(868,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),Kg(),Jc(869,`pre`)(870,`code`),Mk(871,`url + ?page=1&pageSize=20&filter=Peter
`),Kg()(),Jc(872,`p`),Mk(873,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Jc(874,`code`),Mk(875,`order`),Kg(),Mk(876,`, por exemplo:`),Kg(),Jc(877,`ul`)(878,`li`)(879,`p`),Mk(880,`Coluna decrescente:`),Kg(),Jc(881,`pre`)(882,`code`),Mk(883,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),Kg()()(),Jc(884,`li`)(885,`p`),Mk(886,`Coluna ascendente:`),Kg(),Jc(887,`pre`)(888,`code`),Mk(889,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),Kg()()()(),Jc(890,`p`),Mk(891,`Se for definido a propriedade `),Jc(892,`code`),Mk(893,`p-filter-params`),Kg(),Mk(894,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Jc(895,`code`),Mk(896,`{ age: 23 }`),Kg(),Mk(897,` a URL ficaria:`),Kg(),Jc(898,`pre`)(899,`code`),Mk(900,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Kg()(),Jc(901,`p`),Mk(902,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),Kg(),Jc(903,`pre`)(904,`code`),Mk(905,`model = 1234;

GET url/1234
`),Kg()(),Jc(906,`p`),Mk(907,`Caso estiver com múltipla seleção habilitada:`),Kg(),Jc(908,`pre`)(909,`code`),Mk(910,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),Kg()(),Jc(911,`blockquote`)(912,`p`),Mk(913,`Esta URL deve retornar e receber os dados no padrão de `),Jc(914,`a`,7),Mk(915,`API do PO UI`),Kg(),Mk(916,` e utiliza os valores
definidos nas propriedades `),Jc(917,`code`),Mk(918,`p-field-label`),Kg(),Mk(919,` e `),Jc(920,`code`),Mk(921,`p-field-value`),Kg(),Mk(922,` para a construção do `),Jc(923,`code`),Mk(924,`po-lookup`),Kg(),Mk(925,`.`),Kg()(),Jc(926,`p`),Mk(927,`Caso o usuário digite um valor e pressione a tecla `),Jc(928,`em`),Mk(929,`TAB`),Kg(),Mk(930,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Jc(931,`a`,55),Mk(932,`encodeURIComponent`),Kg(),Mk(933,`
e concatenado na URL da seguinte forma:`),Kg(),Jc(934,`pre`)(935,`code`),Mk(936,`url/valor%20que%20se%20deseja%20filtrar
`),Kg()(),Jc(937,`blockquote`)(938,`p`),Mk(939,`Quando informado um serviço que implemente a interface `),Jc(940,`code`),Mk(941,`PoLookupFilter`),Kg(),Mk(942,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),Kg()()()(),Jc(943,`tr`,56)(944,`td`,17)(945,`div`,26)(946,`span`,27),Mk(947,` p-help`),_u(948,`br`),Kg()()(),Jc(949,`td`,21)(950,`code`,28),Mk(951,`string`),Kg()(),Jc(952,`td`,23),Mk(953,`-`),Kg(),Jc(954,`td`,24)(955,`em`)(956,`strong`),Mk(957,`(opcional)`),Kg()(),Jc(958,`p`),Mk(959,`Texto de apoio do campo.`),Kg()()(),Jc(960,`tr`,57)(961,`td`,17)(962,`div`,26)(963,`span`,27),Mk(964,` p-hide-columns-manager`),_u(965,`br`),Kg()()(),Jc(966,`td`,21)(967,`code`,32),Mk(968,`boolean`),Kg()(),Jc(969,`td`,23)(970,`p`)(971,`code`),Mk(972,`false`),Kg()()(),Jc(973,`td`,24)(974,`em`)(975,`strong`),Mk(976,`(opcional)`),Kg()(),Jc(977,`p`),Mk(978,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),Kg()()(),Jc(979,`tr`,58)(980,`td`,17)(981,`div`,26)(982,`span`,27),Mk(983,` p-infinite-scroll`),_u(984,`br`),Kg()()(),Jc(985,`td`,21)(986,`code`,32),Mk(987,`boolean`),Kg()(),Jc(988,`td`,23)(989,`p`)(990,`code`),Mk(991,`false`),Kg()()(),Jc(992,`td`,24)(993,`em`)(994,`strong`),Mk(995,`(opcional)`),Kg()(),Jc(996,`p`),Mk(997,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),Kg()()(),Jc(998,`tr`,59)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),Mk(1002,` (p-keydown)`),_u(1003,`br`),Kg()()(),Jc(1004,`td`,21)(1005,`code`,22),Mk(1006,`EventEmitter`),Kg()(),Jc(1007,`td`,23),Mk(1008,`-`),Kg(),Jc(1009,`td`,24)(1010,`em`)(1011,`strong`),Mk(1012,`(opcional)`),Kg()(),Jc(1013,`p`),Mk(1014,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(1015,`code`),Mk(1016,`KeyboardEvent`),Kg(),Mk(1017,` com informações sobre a tecla.`),Kg()()(),Jc(1018,`tr`,60)(1019,`td`,17)(1020,`div`,26)(1021,`span`,27),Mk(1022,` p-label`),_u(1023,`br`),Kg()()(),Jc(1024,`td`,21)(1025,`code`,28),Mk(1026,`string`),Kg()(),Jc(1027,`td`,23),Mk(1028,`-`),Kg(),Jc(1029,`td`,24)(1030,`em`)(1031,`strong`),Mk(1032,`(opcional)`),Kg()(),Jc(1033,`p`),Mk(1034,`Label do campo.`),Kg(),Jc(1035,`blockquote`)(1036,`p`),Mk(1037,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Jc(1038,`code`),Mk(1039,`modalTitle`),Kg(),Mk(1040,` na propriedade `),Jc(1041,`code`),Mk(1042,`p-literals`),Kg(),Mk(1043,`.`),Kg()()()(),Jc(1044,`tr`,61)(1045,`td`,17)(1046,`div`,26)(1047,`span`,27),Mk(1048,` p-label-text-wrap`),_u(1049,`br`),Kg()()(),Jc(1050,`td`,21)(1051,`code`,32),Mk(1052,`boolean`),Kg()(),Jc(1053,`td`,23)(1054,`p`)(1055,`code`),Mk(1056,`false`),Kg()()(),Jc(1057,`td`,24)(1058,`em`)(1059,`strong`),Mk(1060,`(opcional)`),Kg()(),Jc(1061,`p`),Mk(1062,`Habilita a quebra automática do texto da propriedade `),Jc(1063,`code`),Mk(1064,`p-label`),Kg(),Mk(1065,`. Quando `),Jc(1066,`code`),Mk(1067,`p-label-text-wrap`),Kg(),Mk(1068,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(1069,`tr`,62)(1070,`td`,17)(1071,`div`,26)(1072,`span`,27),Mk(1073,` p-literals`),_u(1074,`br`),Kg()()(),Jc(1075,`td`,21)(1076,`code`,63),Mk(1077,`PoLookupLiterals`),Kg()(),Jc(1078,`td`,23),Mk(1079,`-`),Kg(),Jc(1080,`td`,24)(1081,`p`),Mk(1082,`Objeto com as literais usadas no `),Jc(1083,`code`),Mk(1084,`po-lookup`),Kg(),Mk(1085,`.`),Kg(),Jc(1086,`p`),Mk(1087,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(1088,`pre`)(1089,`code`),Mk(1090,`const customLiterals: PoLookupLiterals = {
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
`),Kg()(),Jc(1091,`p`),Mk(1092,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(1093,`pre`)(1094,`code`),Mk(1095,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),Kg()(),Jc(1096,`p`),Mk(1097,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(1098,`pre`)(1099,`code`),Mk(1100,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),Kg()(),Jc(1101,`blockquote`)(1102,`p`),Mk(1103,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(1104,`a`,64)(1105,`code`),Mk(1106,`PoI18nService`),Kg()(),Mk(1107,` ou do browser.`),Kg()()()(),Jc(1108,`tr`,65)(1109,`td`,17)(1110,`div`,26)(1111,`span`,27),Mk(1112,` p-loading`),_u(1113,`br`),Kg()()(),Jc(1114,`td`,21)(1115,`code`,32),Mk(1116,`boolean`),Kg()(),Jc(1117,`td`,23)(1118,`p`)(1119,`code`),Mk(1120,`false`),Kg()()(),Jc(1121,`td`,24)(1122,`em`)(1123,`strong`),Mk(1124,`(opcional)`),Kg()(),Jc(1125,`p`),Mk(1126,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Jc(1127,`tr`,66)(1128,`td`,17)(1129,`div`,26)(1130,`span`,27),Mk(1131,` p-multiple`),_u(1132,`br`),Kg()()(),Jc(1133,`td`,21)(1134,`code`,32),Mk(1135,`boolean`),Kg()(),Jc(1136,`td`,23)(1137,`p`)(1138,`code`),Mk(1139,`false`),Kg()()(),Jc(1140,`td`,24)(1141,`em`)(1142,`strong`),Mk(1143,`(opcional)`),Kg()(),Jc(1144,`p`),Mk(1145,`Permite a seleção de múltiplos itens.`),Kg(),Jc(1146,`blockquote`)(1147,`p`),Mk(1148,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Jc(1149,`code`),Mk(1150,`[ 12345, 67890 ]`),Kg()()()()(),Jc(1151,`tr`,67)(1152,`td`,17)(1153,`div`,26)(1154,`span`,27),Mk(1155,` name`),_u(1156,`br`),Kg()()(),Jc(1157,`td`,21)(1158,`code`,28),Mk(1159,`string`),Kg()(),Jc(1160,`td`,23),Mk(1161,`-`),Kg(),Jc(1162,`td`,24)(1163,`p`),Mk(1164,`Nome e Id do componente.`),Kg()()(),Jc(1165,`tr`,68)(1166,`td`,17)(1167,`div`,26)(1168,`span`,27),Mk(1169,` p-no-autocomplete`),_u(1170,`br`),Kg()()(),Jc(1171,`td`,21)(1172,`code`,32),Mk(1173,`boolean`),Kg()(),Jc(1174,`td`,23)(1175,`p`)(1176,`code`),Mk(1177,`false`),Kg()()(),Jc(1178,`td`,24)(1179,`em`)(1180,`strong`),Mk(1181,`(opcional)`),Kg()(),Jc(1182,`p`),Mk(1183,`Define a propriedade nativa `),Jc(1184,`code`),Mk(1185,`autocomplete`),Kg(),Mk(1186,` do campo como `),Jc(1187,`code`),Mk(1188,`off`),Kg(),Mk(1189,`.`),Kg()()(),Jc(1190,`tr`,69)(1191,`td`,17)(1192,`div`,18)(1193,`span`,19),Mk(1194,` (p-error)`),_u(1195,`br`),Kg()()(),Jc(1196,`td`,21)(1197,`code`,22),Mk(1198,`EventEmitter`),Kg()(),Jc(1199,`td`,23),Mk(1200,`-`),Kg(),Jc(1201,`td`,24)(1202,`p`),Mk(1203,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),Kg()()(),Jc(1204,`tr`,70)(1205,`td`,17)(1206,`div`,26)(1207,`span`,27),Mk(1208,` p-optional`),_u(1209,`br`),Kg()()(),Jc(1210,`td`,21)(1211,`code`,32),Mk(1212,`boolean`),Kg()(),Jc(1213,`td`,23)(1214,`p`)(1215,`code`),Mk(1216,`false`),Kg()()(),Jc(1217,`td`,24)(1218,`em`)(1219,`strong`),Mk(1220,`(opcional)`),Kg()(),Jc(1221,`p`),Mk(1222,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(1223,`blockquote`)(1224,`p`),Mk(1225,`Não será exibida a indicação se:`),Kg()(),Jc(1226,`ul`)(1227,`li`),Mk(1228,`O campo conter `),Jc(1229,`code`),Mk(1230,`p-required`),Kg(),Mk(1231,`;`),Kg(),Jc(1232,`li`),Mk(1233,`Não possuir `),Jc(1234,`code`),Mk(1235,`p-help`),Kg(),Mk(1236,` e/ou `),Jc(1237,`code`),Mk(1238,`p-label`),Kg(),Mk(1239,`.`),Kg()()()(),Jc(1240,`tr`,71)(1241,`td`,17)(1242,`div`,26)(1243,`span`,27),Mk(1244,` p-placeholder`),_u(1245,`br`),Kg()()(),Jc(1246,`td`,21)(1247,`code`,28),Mk(1248,`string`),Kg()(),Jc(1249,`td`,23),Mk(1250,`-`),Kg(),Jc(1251,`td`,24)(1252,`p`),Mk(1253,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Jc(1254,`tr`,72)(1255,`td`,17)(1256,`div`,26)(1257,`span`,27),Mk(1258,` p-helper`),_u(1259,`br`),Kg()()(),Jc(1260,`td`,21)(1261,`code`,73),Mk(1262,`PoHelperOptions `),Kg(),Jc(1263,`code`,28),Mk(1264,` string`),Kg()(),Jc(1265,`td`,23),Mk(1266,`-`),Kg(),Jc(1267,`td`,24)(1268,`em`)(1269,`strong`),Mk(1270,`(opcional)`),Kg()(),Jc(1271,`p`),Mk(1272,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1273,`code`),Mk(1274,`p-label`),Kg(),Mk(1275,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1276,`code`),Mk(1277,`p-label`),Kg(),Mk(1278,`.`),Kg(),Jc(1279,`blockquote`)(1280,`p`),Mk(1281,`Para mais informações acesse: `),Jc(1282,`a`,74),Mk(1283,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(1284,`.`),Kg()(),Jc(1285,`blockquote`)(1286,`p`),Mk(1287,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1288,`code`),Mk(1289,`p-additional-help-tooltip`),Kg(),Mk(1290,` e `),Jc(1291,`code`),Mk(1292,`p-additional-help`),Kg(),Mk(1293,`) será ignorado.`),Kg()()()(),Jc(1294,`tr`,75)(1295,`td`,17)(1296,`div`,26)(1297,`span`,27),Mk(1298,` p-required`),_u(1299,`br`),Kg()()(),Jc(1300,`td`,21)(1301,`code`,32),Mk(1302,`boolean`),Kg()(),Jc(1303,`td`,23)(1304,`p`)(1305,`code`),Mk(1306,`false`),Kg()()(),Jc(1307,`td`,24)(1308,`em`)(1309,`strong`),Mk(1310,`(opcional)`),Kg()(),Jc(1311,`p`),Mk(1312,`Define que o campo será obrigatório.`),Kg(),Jc(1313,`blockquote`)(1314,`p`),Mk(1315,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1316,`code`),Mk(1317,`(p-disabled)`),Kg(),Mk(1318,`.`),Kg()()()(),Jc(1319,`tr`,76)(1320,`td`,17)(1321,`div`,18)(1322,`span`,19),Mk(1323,` (p-selected)`),_u(1324,`br`),Kg()()(),Jc(1325,`td`,21)(1326,`code`,22),Mk(1327,`EventEmitter`),Kg()(),Jc(1328,`td`,23),Mk(1329,`-`),Kg(),Jc(1330,`td`,24)(1331,`em`)(1332,`strong`),Mk(1333,`(opcional)`),Kg()(),Jc(1334,`p`),Mk(1335,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),Kg()()(),Jc(1336,`tr`,77)(1337,`td`,17)(1338,`div`,26)(1339,`span`,27),Mk(1340,` p-show-required`),_u(1341,`br`),Kg()()(),Jc(1342,`td`,21)(1343,`code`,32),Mk(1344,`boolean`),Kg()(),Jc(1345,`td`,23),Mk(1346,`-`),Kg(),Jc(1347,`td`,24)(1348,`p`),Mk(1349,`Define se a indicação de campo obrigatório seré exibida.`),Kg(),Jc(1350,`blockquote`)(1351,`p`),Mk(1352,`Não será exibida a indicação se:`),Kg()(),Jc(1353,`ul`)(1354,`li`),Mk(1355,`Não possuir `),Jc(1356,`code`),Mk(1357,`p-help`),Kg(),Mk(1358,` e/ou `),Jc(1359,`code`),Mk(1360,`p-label`),Kg(),Mk(1361,`.`),Kg()()()(),Jc(1362,`tr`,78)(1363,`td`,17)(1364,`div`,26)(1365,`span`,27),Mk(1366,` p-size`),_u(1367,`br`),Kg()()(),Jc(1368,`td`,21)(1369,`code`,28),Mk(1370,`string`),Kg()(),Jc(1371,`td`,23)(1372,`p`)(1373,`code`),Mk(1374,`medium`),Kg()()(),Jc(1375,`td`,24)(1376,`em`)(1377,`strong`),Mk(1378,`(opcional)`),Kg()(),Jc(1379,`p`),Mk(1380,`Define o tamanho do componente:`),Kg(),Jc(1381,`ul`)(1382,`li`)(1383,`code`),Mk(1384,`small`),Kg(),Mk(1385,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(1386,`li`)(1387,`code`),Mk(1388,`medium`),Kg(),Mk(1389,`: altura do input como 44px.`),Kg()(),Jc(1390,`blockquote`)(1391,`p`),Mk(1392,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1393,`code`),Mk(1394,`medium`),Kg(),Mk(1395,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1396,`a`,79),Mk(1397,`po-theme`),Kg(),Mk(1398,`.`),Kg()()()(),Jc(1399,`tr`,80)(1400,`td`,17)(1401,`div`,26)(1402,`span`,27),Mk(1403,` p-spacing`),_u(1404,`br`),Kg()()(),Jc(1405,`td`,21)(1406,`code`,28),Mk(1407,`string`),Kg()(),Jc(1408,`td`,23)(1409,`p`)(1410,`code`),Mk(1411,`medium`),Kg()()(),Jc(1412,`td`,24)(1413,`em`)(1414,`strong`),Mk(1415,`(opcional)`),Kg()(),Jc(1416,`p`),Mk(1417,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Jc(1418,`strong`),Mk(1419,`PoTableColumnSpacing`),Kg(),Mk(1420,`.`),Kg(),Jc(1421,`blockquote`)(1422,`p`),Mk(1423,`Em nível de acessibilidade `),Jc(1424,`strong`),Mk(1425,`AA`),Kg(),Mk(1426,`, caso o valor de `),Jc(1427,`code`),Mk(1428,`p-spacing`),Kg(),Mk(1429,` não seja definido, o valor padrão será `),Jc(1430,`code`),Mk(1431,`extraSmall`),Kg(),Mk(1432,`
nos seguintes cen\xE1rios:`),Kg(),Jc(1433,`ul`)(1434,`li`),Mk(1435,`Quando o valor de `),Jc(1436,`code`),Mk(1437,`p-size`),Kg(),Mk(1438,` for `),Jc(1439,`code`),Mk(1440,`small`),Kg(),Mk(1441,`;`),Kg(),Jc(1442,`li`),Mk(1443,`Quando o valor padrão dos componentes for configurado como `),Jc(1444,`code`),Mk(1445,`small`),Kg(),Mk(1446,` no
`),Jc(1447,`a`,79),Mk(1448,`serviço de tema`),Kg(),Mk(1449,`.`),Kg()()()()(),Jc(1450,`tr`,81)(1451,`td`,17)(1452,`div`,26)(1453,`span`,27),Mk(1454,` p-text-wrap`),_u(1455,`br`),Kg()()(),Jc(1456,`td`,21)(1457,`code`,32),Mk(1458,`boolean`),Kg()(),Jc(1459,`td`,23)(1460,`p`)(1461,`code`),Mk(1462,`false`),Kg()()(),Jc(1463,`td`,24)(1464,`em`)(1465,`strong`),Mk(1466,`(opcional)`),Kg()(),Jc(1467,`p`),Mk(1468,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg(),Jc(1469,`p`),Mk(1470,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),Kg(),Jc(1471,`blockquote`)(1472,`p`),Mk(1473,`Incompatível com `),Jc(1474,`code`),Mk(1475,`virtual-scroll`),Kg(),Mk(1476,`, que requer altura fixa nas linhas.`),Kg()()()(),Jc(1477,`tr`,82)(1478,`td`,17)(1479,`div`,26)(1480,`span`,27),Mk(1481,` p-virtual-scroll`),_u(1482,`br`),Kg()()(),Jc(1483,`td`,21)(1484,`code`,32),Mk(1485,`boolean`),Kg()(),Jc(1486,`td`,23)(1487,`p`)(1488,`code`),Mk(1489,`true`),Kg()()(),Jc(1490,`td`,24)(1491,`em`)(1492,`strong`),Mk(1493,`(opcional)`),Kg()(),Jc(1494,`p`),Mk(1495,`Habilita o `),Jc(1496,`code`),Mk(1497,`virtual-scroll`),Kg(),Mk(1498,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Jc(1499,`code`),Mk(1500,`virtual-scroll`),Kg(),Mk(1501,` será ativado automaticamente.`),Kg(),Jc(1502,`blockquote`)(1503,`p`),Mk(1504,`Incompatível com `),Jc(1505,`code`),Mk(1506,`p-text-wrap`),Kg(),Mk(1507,` e `),Jc(1508,`code`),Mk(1509,`master-detail`),Kg(),Mk(1510,`, pois o `),Jc(1511,`code`),Mk(1512,`virtual-scroll`),Kg(),Mk(1513,` exige altura fixa nas linhas.`),Kg()()()()(),Jc(1514,`h3`,12),Mk(1515,`Métodos`),Kg(),Jc(1516,`table`,83)(1517,`tr`,84)(1518,`th`,85)(1519,`div`,26)(1520,`h4`)(1521,`span`,27),Mk(1522,` focus `),Kg()()()()(),Jc(1523,`tr`,24)(1524,`td`,24)(1525,`p`),Mk(1526,`Função que atribui foco ao componente.`),Kg(),Jc(1527,`p`),Mk(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(1529,`pre`)(1530,`code`),Mk(1531,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),Kg()()()()(),_u(1532,`br`),Jc(1533,`table`,86)(1534,`tr`,84)(1535,`th`,85)(1536,`div`,26)(1537,`h4`)(1538,`span`,27),Mk(1539,` showAdditionalHelp `),Kg()()()()(),Jc(1540,`tr`,24)(1541,`td`,24)(1542,`p`),Mk(1543,`Método que exibe `),Jc(1544,`code`),Mk(1545,`p-helper`),Kg(),Mk(1546,` ou executa a ação definida em `),Jc(1547,`code`),Mk(1548,`p-helper{eventOnClick}`),Kg(),Mk(1549,` ou em `),Jc(1550,`code`),Mk(1551,`p-additionalHelp`),Kg(),Mk(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1553,`code`),Mk(1554,`p-keydown`),Kg(),Mk(1555,`.`),Kg(),Jc(1556,`blockquote`)(1557,`p`),Mk(1558,`Exibe ou oculta o conteúdo do componente `),Jc(1559,`code`),Mk(1560,`po-helper`),Kg(),Mk(1561,` quando o componente estiver com foco.`),Kg()(),Jc(1562,`pre`)(1563,`code`),Mk(1564,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),Kg()(),Jc(1565,`pre`)(1566,`code`),Mk(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1568,`br`),Jc(1569,`h3`),Mk(1570,`Interfaces`),Kg(),Jc(1571,`h4`,87)(1572,`code`,5),Mk(1573,`PoLookupAdvancedFilter`),Kg()(),Jc(1574,`div`,2)(1575,`p`),Mk(1576,`Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente na busca avançada.`),Kg()(),Jc(1577,`h4`,12),Mk(1578,`Propriedades`),Kg(),Jc(1579,`table`,13)(1580,`tr`,14)(1581,`th`,15),Mk(1582,`Nome`),Kg(),Jc(1583,`th`,15),Mk(1584,`Tipo`),Kg(),Jc(1585,`th`,15),Mk(1586,`Descrição`),Kg()(),Jc(1587,`tr`,88)(1588,`td`,17)(1589,`div`,26)(1590,`span`,27),Mk(1591,` additionalHelp`),_u(1592,`br`),Kg()()(),Jc(1593,`td`,21)(1594,`code`,89),Mk(1595,`Function`),Kg()(),Jc(1596,`td`,24)(1597,`em`)(1598,`strong`),Mk(1599,`(opcional)`),Kg()(),Jc(1600,`p`),Mk(1601,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(1602,`blockquote`)(1603,`p`),Mk(1604,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(1605,`tr`,90)(1606,`td`,17)(1607,`div`,26)(1608,`span`,27),Mk(1609,` additionalHelpTooltip`),_u(1610,`br`),Kg()()(),Jc(1611,`td`,21)(1612,`code`,28),Mk(1613,`string`),Kg()(),Jc(1614,`td`,24)(1615,`em`)(1616,`strong`),Mk(1617,`(opcional)`),Kg()(),Jc(1618,`p`),Mk(1619,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(1620,`code`),Mk(1621,`po-helper`),Kg(),Mk(1622,`.
`),Jc(1623,`strong`),Mk(1624,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(1625,`blockquote`)(1626,`p`),Mk(1627,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(1628,`tr`,91)(1629,`td`,17)(1630,`div`,26)(1631,`span`,27),Mk(1632,` advancedFilters`),_u(1633,`br`),Kg()()(),Jc(1634,`td`,21)(1635,`code`,30),Mk(1636,`Array<PoLookupAdvancedFilter>`),Kg()(),Jc(1637,`td`,24)(1638,`em`)(1639,`strong`),Mk(1640,`(opcional)`),Kg()(),Jc(1641,`p`),Mk(1642,`Lista de objetos dos campos que serão criados na busca avançada.`),Kg(),Jc(1643,`blockquote`)(1644,`p`),Mk(1645,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Kg()(),Jc(1646,`p`),Mk(1647,`Exemplo de URL com busca avançada:`),Kg(),Jc(1648,`p`)(1649,`code`),Mk(1650,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),Kg()(),Jc(1651,`p`),Mk(1652,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),Kg(),Jc(1653,`p`)(1654,`code`),Mk(1655,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),Kg()()()(),Jc(1656,`tr`,92)(1657,`td`,17)(1658,`div`,26)(1659,`span`,27),Mk(1660,` appendBox`),_u(1661,`br`),Kg()()(),Jc(1662,`td`,21)(1663,`code`,32),Mk(1664,`boolean`),Kg()(),Jc(1665,`td`,24)(1666,`em`)(1667,`strong`),Mk(1668,`(opcional)`),Kg()(),Jc(1669,`p`),Mk(1670,`Define que o `),Jc(1671,`code`),Mk(1672,`listbox`),Kg(),Mk(1673,` e/ou popover (`),Jc(1674,`code`),Mk(1675,`p-helper`),Kg(),Mk(1676,` e/ou `),Jc(1677,`code`),Mk(1678,`p-error-limit`),Kg(),Mk(1679,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Kg(),Jc(1680,`blockquote`)(1681,`p`),Mk(1682,`Quando utilizado com `),Jc(1683,`code`),Mk(1684,`p-helper`),Kg(),Mk(1685,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(1686,`tr`,93)(1687,`td`,17)(1688,`div`,26)(1689,`span`,27),Mk(1690,` autoHeight`),_u(1691,`br`),Kg()()(),Jc(1692,`td`,21)(1693,`code`,32),Mk(1694,`boolean`),Kg()(),Jc(1695,`td`,24)(1696,`em`)(1697,`strong`),Mk(1698,`(opcional)`),Kg()(),Jc(1699,`p`),Mk(1700,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),Kg(),Jc(1701,`p`)(1702,`strong`),Mk(1703,`Componentes compatíveis:`),Kg(),Jc(1704,`code`),Mk(1705,`po-multiselect`),Kg(),Mk(1706,`, `),Jc(1707,`code`),Mk(1708,`po-lookup`),Kg(),Mk(1709,`.`),Kg()()(),Jc(1710,`tr`,94)(1711,`td`,17)(1712,`div`,26)(1713,`span`,27),Mk(1714,` autoUpload`),_u(1715,`br`),Kg()()(),Jc(1716,`td`,21)(1717,`code`,32),Mk(1718,`boolean`),Kg()(),Jc(1719,`td`,24)(1720,`em`)(1721,`strong`),Mk(1722,`(opcional)`),Kg()(),Jc(1723,`p`),Mk(1724,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Kg(),Jc(1725,`p`)(1726,`strong`),Mk(1727,`Componente compatível`),Kg(),Mk(1728,`: `),Jc(1729,`code`),Mk(1730,`po-upload`),Kg()()()(),Jc(1731,`tr`,95)(1732,`td`,17)(1733,`div`,26)(1734,`span`,27),Mk(1735,` booleanFalse`),_u(1736,`br`),Kg()()(),Jc(1737,`td`,21)(1738,`code`,28),Mk(1739,`string`),Kg()(),Jc(1740,`td`,24)(1741,`em`)(1742,`strong`),Mk(1743,`(opcional)`),Kg()(),Jc(1744,`p`),Mk(1745,`Texto exibido quando o valor do componente for `),Jc(1746,`em`),Mk(1747,`false`),Kg(),Mk(1748,`.`),Kg()()(),Jc(1749,`tr`,96)(1750,`td`,17)(1751,`div`,26)(1752,`span`,27),Mk(1753,` booleanTrue`),_u(1754,`br`),Kg()()(),Jc(1755,`td`,21)(1756,`code`,28),Mk(1757,`string`),Kg()(),Jc(1758,`td`,24)(1759,`em`)(1760,`strong`),Mk(1761,`(opcional)`),Kg()(),Jc(1762,`p`),Mk(1763,`Texto exibido quando o valor do componente for `),Jc(1764,`em`),Mk(1765,`true`),Kg(),Mk(1766,`.`),Kg()()(),Jc(1767,`tr`,97)(1768,`td`,17)(1769,`div`,26)(1770,`span`,27),Mk(1771,` changeOnEnter`),_u(1772,`br`),Kg()()(),Jc(1773,`td`,21)(1774,`code`,32),Mk(1775,`boolean`),Kg()(),Jc(1776,`td`,24)(1777,`em`)(1778,`strong`),Mk(1779,`(opcional)`),Kg()(),Jc(1780,`p`),Mk(1781,`Indica que o evento `),Jc(1782,`code`),Mk(1783,`p-change`),Kg(),Mk(1784,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Jc(1785,`code`),Mk(1786,`po-combo`),Kg(),Mk(1787,`.`),Kg()()(),Jc(1788,`tr`,98)(1789,`td`,17)(1790,`div`,26)(1791,`span`,27),Mk(1792,` changeVisibleColumns`),_u(1793,`br`),Kg()()(),Jc(1794,`td`,21)(1795,`code`,89),Mk(1796,`Function`),Kg()(),Jc(1797,`td`,24)(1798,`em`)(1799,`strong`),Mk(1800,`(opcional)`),Kg()(),Jc(1801,`p`),Mk(1802,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Kg(),Jc(1803,`p`),Mk(1804,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg(),Jc(1805,`p`)(1806,`strong`),Mk(1807,`Componente compatível`),Kg(),Mk(1808,`: `),Jc(1809,`code`),Mk(1810,`po-lookup`),Kg()()()(),Jc(1811,`tr`,99)(1812,`td`,17)(1813,`div`,26)(1814,`span`,27),Mk(1815,` clean`),_u(1816,`br`),Kg()()(),Jc(1817,`td`,21)(1818,`code`,32),Mk(1819,`boolean`),Kg()(),Jc(1820,`td`,24)(1821,`em`)(1822,`strong`),Mk(1823,`(opcional)`),Kg()(),Jc(1824,`p`),Mk(1825,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg(),Jc(1826,`p`)(1827,`strong`),Mk(1828,`Componentes compatíveis:`),Kg(),Jc(1829,`code`),Mk(1830,`po-datepicker`),Kg(),Mk(1831,`, `),Jc(1832,`code`),Mk(1833,`po-datepicker-range`),Kg(),Mk(1834,`, `),Jc(1835,`code`),Mk(1836,`po-input`),Kg(),Mk(1837,`, `),Jc(1838,`code`),Mk(1839,`po-number`),Kg(),Mk(1840,`, `),Jc(1841,`code`),Mk(1842,`po-decimal`),Kg(),Mk(1843,`,
`),Jc(1844,`code`),Mk(1845,`po-combo`),Kg(),Mk(1846,`, `),Jc(1847,`code`),Mk(1848,`po-lookup`),Kg(),Mk(1849,`, `),Jc(1850,`code`),Mk(1851,`po-password`),Kg(),Mk(1852,`, `),Jc(1853,`code`),Mk(1854,`po-timepicker`),Kg(),Mk(1855,`.`),Kg()()(),Jc(1856,`tr`,100)(1857,`td`,17)(1858,`div`,26)(1859,`span`,27),Mk(1860,` columnRestoreManager`),_u(1861,`br`),Kg()()(),Jc(1862,`td`,21)(1863,`code`,89),Mk(1864,`Function`),Kg()(),Jc(1865,`td`,24)(1866,`em`)(1867,`strong`),Mk(1868,`(opcional)`),Kg()(),Jc(1869,`p`),Mk(1870,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Kg(),Jc(1871,`p`),Mk(1872,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Kg(),Jc(1873,`p`)(1874,`strong`),Mk(1875,`Componente compatível`),Kg(),Mk(1876,`: `),Jc(1877,`code`),Mk(1878,`po-lookup`),Kg()()()(),Jc(1879,`tr`,101)(1880,`td`,17)(1881,`div`,26)(1882,`span`,27),Mk(1883,` columns`),_u(1884,`br`),Kg()()(),Jc(1885,`td`,21)(1886,`code`,41),Mk(1887,`Array<PoLookupColumn> `),Kg(),Jc(1888,`code`,102),Mk(1889,` number`),Kg()(),Jc(1890,`td`,24)(1891,`em`)(1892,`strong`),Mk(1893,`(opcional)`),Kg()(),Jc(1894,`p`),Mk(1895,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Jc(1896,`code`),Mk(1897,`searchService`),Kg(),Mk(1898,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Jc(1899,`a`,103)(1900,`code`),Mk(1901,`PoLookupColumn`),Kg()(),Mk(1902,`.`),Kg(),Jc(1903,`blockquote`)(1904,`p`),Mk(1905,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Jc(1906,`em`),Mk(1907,`label`),Kg(),Mk(1908,` e `),Jc(1909,`em`),Mk(1910,`value`),Kg(),Mk(1911,` para valores
de tela e do model respectivamente.`),Kg()(),Jc(1912,`p`)(1913,`strong`),Mk(1914,`Componentes compatíveis:`),Kg(),Jc(1915,`code`),Mk(1916,`po-radio-group`),Kg(),Mk(1917,`, `),Jc(1918,`code`),Mk(1919,`po-lookup`),Kg(),Mk(1920,`, `),Jc(1921,`code`),Mk(1922,`po-checkbox-group`),Kg(),Mk(1923,`.`),Kg()()(),Jc(1924,`tr`,104)(1925,`td`,17)(1926,`div`,26)(1927,`span`,27),Mk(1928,` compactLabel`),_u(1929,`br`),Kg()()(),Jc(1930,`td`,21)(1931,`code`,32),Mk(1932,`boolean`),Kg()(),Jc(1933,`td`,24)(1934,`em`)(1935,`strong`),Mk(1936,`(opcional)`),Kg()(),Jc(1937,`p`),Mk(1938,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(1939,`p`),Mk(1940,`Quando habilitado (`),Jc(1941,`code`),Mk(1942,`true`),Kg(),Mk(1943,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(1944,`ul`)(1945,`li`)(1946,`code`),Mk(1947,`po-label`),Kg()(),Jc(1948,`li`)(1949,`code`),Mk(1950,`p-requirement (showRequired)`),Kg()(),Jc(1951,`li`)(1952,`code`),Mk(1953,`po-helper`),Kg()()(),Jc(1954,`p`),Mk(1955,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(1956,`p`),Mk(1957,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(1958,`ul`)(1959,`li`)(1960,`code`),Mk(1961,`--field-container-title-justify`),Kg()(),Jc(1962,`li`)(1963,`code`),Mk(1964,`--field-container-title-flex`),Kg()()(),Jc(1965,`p`),Mk(1966,`Exemplo:`),Kg(),Jc(1967,`pre`)(1968,`code`),Mk(1969,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(1970,`p`),Mk(1971,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(1972,`tr`,105)(1973,`td`,17)(1974,`div`,26)(1975,`span`,27),Mk(1976,` container`),_u(1977,`br`),Kg()()(),Jc(1978,`td`,21)(1979,`code`,28),Mk(1980,`string`),Kg()(),Jc(1981,`td`,24)(1982,`em`)(1983,`strong`),Mk(1984,`(opcional)`),Kg()(),Jc(1985,`p`),Mk(1986,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),Kg(),Jc(1987,`p`),Mk(1988,`Está propriedade é do tipo string, o valor que será titulo do contianer`),Kg()()(),Jc(1989,`tr`,106)(1990,`td`,17)(1991,`div`,26)(1992,`span`,27),Mk(1993,` customAction`),_u(1994,`br`),Kg()()(),Jc(1995,`td`,21)(1996,`code`,107),Mk(1997,`PoProgressAction`),Kg()(),Jc(1998,`td`,24)(1999,`em`)(2e3,`strong`),Mk(2001,`(opcional)`),Kg()(),Jc(2002,`p`),Mk(2003,`Define uma ação personalizada no componente `),Jc(2004,`code`),Mk(2005,`po-upload`),Kg(),Mk(2006,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Kg(),Jc(2007,`p`)(2008,`strong`),Mk(2009,`Componente compatível`),Kg(),Mk(2010,`: `),Jc(2011,`code`),Mk(2012,`po-upload`),Kg(),Mk(2013,`,`),Kg(),Jc(2014,`p`)(2015,`strong`),Mk(2016,`Exemplo de configuração`),Kg(),Mk(2017,`:`),Kg(),Jc(2018,`pre`)(2019,`code`,108),Mk(2020,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),Kg()()()(),Jc(2021,`tr`,109)(2022,`td`,17)(2023,`div`,26)(2024,`span`,27),Mk(2025,` customActionClick`),_u(2026,`br`),Kg()()(),Jc(2027,`td`,21)(2028,`code`,110),Mk(2029,`(file: PoUploadFile) => void`),Kg()(),Jc(2030,`td`,24)(2031,`em`)(2032,`strong`),Mk(2033,`(opcional)`),Kg()(),Jc(2034,`p`),Mk(2035,`Evento emitido ao clicar na ação personalizada configurada no `),Jc(2036,`code`),Mk(2037,`p-custom-action`),Kg(),Mk(2038,`.`),Kg(),Jc(2039,`p`)(2040,`strong`),Mk(2041,`Componente compatível`),Kg(),Mk(2042,`: `),Jc(2043,`code`),Mk(2044,`po-upload`),Kg(),Mk(2045,`,`),Kg(),Jc(2046,`p`),Mk(2047,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Kg(),Jc(2048,`p`)(2049,`strong`),Mk(2050,`Parâmetro do evento`),Kg(),Mk(2051,`:`),Kg(),Jc(2052,`ul`)(2053,`li`)(2054,`code`),Mk(2055,`file`),Kg(),Mk(2056,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Jc(2057,`code`),Mk(2058,`PoUploadFile`),Kg(),Mk(2059,` e contém informações sobre o arquivo, como nome, status e progresso.`),Kg()(),Jc(2060,`p`)(2061,`strong`),Mk(2062,`Exemplo de uso`),Kg(),Mk(2063,`:`),Kg(),Jc(2064,`pre`)(2065,`code`,108),Mk(2066,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),Kg()()()(),Jc(2067,`tr`,111)(2068,`td`,17)(2069,`div`,26)(2070,`span`,27),Mk(2071,` debounceTime`),_u(2072,`br`),Kg()()(),Jc(2073,`td`,21)(2074,`code`,102),Mk(2075,`number`),Kg()(),Jc(2076,`td`,24)(2077,`em`)(2078,`strong`),Mk(2079,`(opcional)`),Kg()(),Jc(2080,`p`),Mk(2081,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Jc(2082,`code`),Mk(2083,`p-filter-service`),Kg(),Mk(2084,`).`),Kg(),Jc(2085,`p`)(2086,`strong`),Mk(2087,`Componentes compatíveis:`),Kg(),Jc(2088,`code`),Mk(2089,`po-combo`),Kg(),Mk(2090,`, `),Jc(2091,`code`),Mk(2092,`po-multiselect`),Kg(),Mk(2093,`.`),Kg()()(),Jc(2094,`tr`,112)(2095,`td`,17)(2096,`div`,26)(2097,`span`,27),Mk(2098,` decimalsLength`),_u(2099,`br`),Kg()()(),Jc(2100,`td`,21)(2101,`code`,102),Mk(2102,`number`),Kg()(),Jc(2103,`td`,24)(2104,`em`)(2105,`strong`),Mk(2106,`(opcional)`),Kg()(),Jc(2107,`p`),Mk(2108,`Quantidade máxima de casas decimais.`),Kg(),Jc(2109,`blockquote`)(2110,`p`),Mk(2111,`Esta propriedade só pode ser utilizada quando o `),Jc(2112,`code`),Mk(2113,`type`),Kg(),Mk(2114,` for `),Jc(2115,`em`),Mk(2116,`currency`),Kg(),Mk(2117,` ou `),Jc(2118,`em`),Mk(2119,`decimal`),Kg(),Mk(2120,`.`),Kg()(),Jc(2121,`blockquote`)(2122,`p`),Mk(2123,`Quando utilizado com `),Jc(2124,`code`),Mk(2125,`displayFormat`),Kg(),Mk(2126,`, será respeitado o valor `),Jc(2127,`strong`),Mk(2128,`mais restritivo`),Kg(),Mk(2129,` entre esta propriedade e o número de casas decimais definido no formato.`),Kg()()()(),Jc(2130,`tr`,113)(2131,`td`,17)(2132,`div`,26)(2133,`span`,27),Mk(2134,` directory`),_u(2135,`br`),Kg()()(),Jc(2136,`td`,21)(2137,`code`,32),Mk(2138,`boolean`),Kg()(),Jc(2139,`td`,24)(2140,`em`)(2141,`strong`),Mk(2142,`(opcional)`),Kg()(),Jc(2143,`p`),Mk(2144,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Kg(),Jc(2145,`blockquote`)(2146,`p`),Mk(2147,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Kg()(),Jc(2148,`blockquote`)(2149,`p`),Mk(2150,`Definição não suportada pelo browser `),Jc(2151,`strong`),Mk(2152,`Internet Explorer`),Kg(),Mk(2153,`, todavia será possível a seleção de arquivos padrão.`),Kg()(),Jc(2154,`p`)(2155,`strong`),Mk(2156,`Componente compatível`),Kg(),Mk(2157,`: `),Jc(2158,`code`),Mk(2159,`po-upload`),Kg()()()(),Jc(2160,`tr`,114)(2161,`td`,17)(2162,`div`,26)(2163,`span`,27),Mk(2164,` disabled`),_u(2165,`br`),Kg()()(),Jc(2166,`td`,21)(2167,`code`,32),Mk(2168,`boolean`),Kg()(),Jc(2169,`td`,24)(2170,`em`)(2171,`strong`),Mk(2172,`(opcional)`),Kg()(),Jc(2173,`p`),Mk(2174,`Desabilita o campo caso informar o valor `),Jc(2175,`em`),Mk(2176,`true`),Kg(),Mk(2177,`.`),Kg()()(),Jc(2178,`tr`,115)(2179,`td`,17)(2180,`div`,26)(2181,`span`,27),Mk(2182,` disabledInitFilter`),_u(2183,`br`),Kg()()(),Jc(2184,`td`,21)(2185,`code`,32),Mk(2186,`boolean`),Kg()(),Jc(2187,`td`,24)(2188,`em`)(2189,`strong`),Mk(2190,`(opcional)`),Kg()(),Jc(2191,`p`),Mk(2192,`Desabilita o filtro inicial no serviço do `),Jc(2193,`code`),Mk(2194,`po-combo`),Kg(),Mk(2195,`, que é executado no primeiro clique no campo.`),Kg()()(),Jc(2196,`tr`,116)(2197,`td`,17)(2198,`div`,26)(2199,`span`,27),Mk(2200,` disabledTabFilter`),_u(2201,`br`),Kg()()(),Jc(2202,`td`,21)(2203,`code`,32),Mk(2204,`boolean`),Kg()(),Jc(2205,`td`,24)(2206,`em`)(2207,`strong`),Mk(2208,`(opcional)`),Kg()(),Jc(2209,`p`),Mk(2210,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Jc(2211,`code`),Mk(2212,`po-combo`),Kg(),Mk(2213,`.`),Kg()()(),Jc(2214,`tr`,117)(2215,`td`,17)(2216,`div`,26)(2217,`span`,27),Mk(2218,` displayFormat`),_u(2219,`br`),Kg()()(),Jc(2220,`td`,21)(2221,`code`,28),Mk(2222,`string`),Kg()(),Jc(2223,`td`,24)(2224,`em`)(2225,`strong`),Mk(2226,`(opcional)`),Kg()(),Jc(2227,`p`),Mk(2228,`Define uma máscara de formatação numérica avançada para o campo.`),Kg(),Jc(2229,`p`),Mk(2230,`Simbologia suportada:`),Kg(),Jc(2231,`ul`)(2232,`li`)(2233,`code`),Mk(2234,`9`),Kg(),Mk(2235,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Kg(),Jc(2236,`li`)(2237,`code`),Mk(2238,`>`),Kg(),Mk(2239,`: Supressão de zero à esquerda (dígito não obrigatório);`),Kg(),Jc(2240,`li`)(2241,`code`),Mk(2242,`<`),Kg(),Mk(2243,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Kg(),Jc(2244,`li`)(2245,`code`),Mk(2246,`.`),Kg(),Mk(2247,`: Separador decimal (convertido conforme locale);`),Kg(),Jc(2248,`li`)(2249,`code`),Mk(2250,`,`),Kg(),Mk(2251,`: Separador de milhar/grupo (convertido conforme locale);`),Kg(),Jc(2252,`li`)(2253,`code`),Mk(2254,`-`),Kg(),Mk(2255,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Kg()(),Jc(2256,`blockquote`)(2257,`p`),Mk(2258,`Quando utilizado com `),Jc(2259,`code`),Mk(2260,`decimalsLength`),Kg(),Mk(2261,` ou `),Jc(2262,`code`),Mk(2263,`thousandMaxlength`),Kg(),Mk(2264,`, será respeitado o valor `),Jc(2265,`strong`),Mk(2266,`mais restritivo`),Kg(),Mk(2267,` entre a propriedade e o formato.`),Kg()(),Jc(2268,`p`),Mk(2269,`Exemplos: `),Jc(2270,`code`),Mk(2271,`'>>>,>>>,>>9.99'`),Kg(),Mk(2272,`, `),Jc(2273,`code`),Mk(2274,`'->>9.99'`),Kg(),Mk(2275,`, `),Jc(2276,`code`),Mk(2277,`'999.9'`),Kg()(),Jc(2278,`blockquote`)(2279,`p`),Mk(2280,`Esta propriedade só pode ser utilizada quando o `),Jc(2281,`code`),Mk(2282,`type`),Kg(),Mk(2283,` for `),Jc(2284,`em`),Mk(2285,`currency`),Kg(),Mk(2286,` ou `),Jc(2287,`em`),Mk(2288,`decimal`),Kg(),Mk(2289,`.`),Kg()(),Jc(2290,`p`)(2291,`strong`),Mk(2292,`Componente compatível:`),Kg(),Jc(2293,`code`),Mk(2294,`po-decimal`),Kg(),Mk(2295,`.`),Kg()()(),Jc(2296,`tr`,118)(2297,`td`,17)(2298,`div`,26)(2299,`span`,27),Mk(2300,` divider`),_u(2301,`br`),Kg()()(),Jc(2302,`td`,21)(2303,`code`,28),Mk(2304,`string`),Kg()(),Jc(2305,`td`,24)(2306,`em`)(2307,`strong`),Mk(2308,`(opcional)`),Kg()(),Jc(2309,`p`),Mk(2310,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),Kg()()(),Jc(2311,`tr`,119)(2312,`td`,17)(2313,`div`,26)(2314,`span`,27),Mk(2315,` dragDrop`),_u(2316,`br`),Kg()()(),Jc(2317,`td`,21)(2318,`code`,32),Mk(2319,`boolean`),Kg()(),Jc(2320,`td`,24)(2321,`em`)(2322,`strong`),Mk(2323,`(opcional)`),Kg()(),Jc(2324,`p`),Mk(2325,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Kg(),Jc(2326,`blockquote`)(2327,`p`),Mk(2328,`Recomendamos utilizar apenas um `),Jc(2329,`code`),Mk(2330,`po-upload`),Kg(),Mk(2331,` com esta funcionalidade por tela.`),Kg()(),Jc(2332,`p`)(2333,`strong`),Mk(2334,`Componente compatível`),Kg(),Mk(2335,`: `),Jc(2336,`code`),Mk(2337,`po-upload`),Kg()()()(),Jc(2338,`tr`,120)(2339,`td`,17)(2340,`div`,26)(2341,`span`,27),Mk(2342,` dragDropHeight`),_u(2343,`br`),Kg()()(),Jc(2344,`td`,21)(2345,`code`,102),Mk(2346,`number`),Kg()(),Jc(2347,`td`,24)(2348,`em`)(2349,`strong`),Mk(2350,`(opcional)`),Kg()(),Jc(2351,`p`),Mk(2352,`Define em `),Jc(2353,`em`),Mk(2354,`pixels`),Kg(),Mk(2355,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Jc(2356,`code`),Mk(2357,`160px`),Kg(),Mk(2358,`.`),Kg(),Jc(2359,`blockquote`)(2360,`p`),Mk(2361,`Esta propriedade funciona somente se a propriedade `),Jc(2362,`code`),Mk(2363,`p-drag-drop`),Kg(),Mk(2364,` estiver habilitada.`),Kg()(),Jc(2365,`p`)(2366,`strong`),Mk(2367,`Componente compatível`),Kg(),Mk(2368,`: `),Jc(2369,`code`),Mk(2370,`po-upload`),Kg()()()(),Jc(2371,`tr`,121)(2372,`td`,17)(2373,`div`,26)(2374,`span`,27),Mk(2375,` errorAsyncFunction`),_u(2376,`br`),Kg()()(),Jc(2377,`td`,21)(2378,`code`,122),Mk(2379,`(value) => Observable<boolean>`),Kg()(),Jc(2380,`td`,24)(2381,`em`)(2382,`strong`),Mk(2383,`(opcional)`),Kg()(),Jc(2384,`p`),Mk(2385,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(2386,`code`),Mk(2387,`change`),Kg(),Mk(2388,` ou `),Jc(2389,`code`),Mk(2390,`change-model`),Kg(),Mk(2391,`, dependendo do valor da propriedade `),Jc(2392,`code`),Mk(2393,`triggerMode`),Kg(),Mk(2394,`.`),Kg(),Jc(2395,`blockquote`)(2396,`p`),Mk(2397,`Retorna `),Jc(2398,`code`),Mk(2399,`Observable com o valor true`),Kg(),Mk(2400,` para sinalizar o erro `),Jc(2401,`code`),Mk(2402,`false`),Kg(),Mk(2403,` para indicar que não há erro.`),Kg()(),Jc(2404,`p`)(2405,`strong`),Mk(2406,`Componente compatível`),Kg(),Mk(2407,`: `),Jc(2408,`code`),Mk(2409,`po-datepicker`),Kg()()()(),Jc(2410,`tr`,123)(2411,`td`,17)(2412,`div`,26)(2413,`span`,27),Mk(2414,` errorAsyncProperties`),_u(2415,`br`),Kg()()(),Jc(2416,`td`,21)(2417,`code`,124),Mk(2418,`ErrorAsyncProperties`),Kg()(),Jc(2419,`td`,24)(2420,`em`)(2421,`strong`),Mk(2422,`(opcional)`),Kg()(),Jc(2423,`p`),Mk(2424,`Realiza alguma validação customizada assíncrona no componente.`),Kg(),Jc(2425,`p`)(2426,`strong`),Mk(2427,`Componentes compatíveis:`),Kg(),Jc(2428,`code`),Mk(2429,`po-input`),Kg(),Mk(2430,`, `),Jc(2431,`code`),Mk(2432,`po-number`),Kg(),Mk(2433,`, `),Jc(2434,`code`),Mk(2435,`po-decimal`),Kg(),Mk(2436,`, `),Jc(2437,`code`),Mk(2438,`po-password`),Kg(),Mk(2439,`.`),Kg()()(),Jc(2440,`tr`,125)(2441,`td`,17)(2442,`div`,26)(2443,`span`,27),Mk(2444,` errorLimit`),_u(2445,`br`),Kg()()(),Jc(2446,`td`,21)(2447,`code`,32),Mk(2448,`boolean`),Kg()(),Jc(2449,`td`,24)(2450,`em`)(2451,`strong`),Mk(2452,`(opcional)`),Kg()(),Jc(2453,`p`),Mk(2454,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(2455,`blockquote`)(2456,`p`),Mk(2457,`Caso essa propriedade seja definida como `),Jc(2458,`code`),Mk(2459,`true`),Kg(),Mk(2460,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()(),Jc(2461,`p`)(2462,`strong`),Mk(2463,`Componentes compatíveis:`),Kg(),Jc(2464,`code`),Mk(2465,`po-checkbox-group`),Kg(),Mk(2466,`, `),Jc(2467,`code`),Mk(2468,`po-combo`),Kg(),Mk(2469,`, `),Jc(2470,`code`),Mk(2471,`po-datepicker`),Kg(),Mk(2472,`, `),Jc(2473,`code`),Mk(2474,`po-datepicker-range`),Kg(),Mk(2475,`, `),Jc(2476,`code`),Mk(2477,`po-decimal`),Kg(),Mk(2478,`, `),Jc(2479,`code`),Mk(2480,`po-input`),Kg(),Mk(2481,`, `),Jc(2482,`code`),Mk(2483,`po-lookup`),Kg(),Mk(2484,`, `),Jc(2485,`code`),Mk(2486,`po-multiselect`),Kg(),Mk(2487,`, `),Jc(2488,`code`),Mk(2489,`po-number`),Kg(),Mk(2490,`, `),Jc(2491,`code`),Mk(2492,`po-password`),Kg(),Mk(2493,`, `),Jc(2494,`code`),Mk(2495,`po-radio-group`),Kg(),Mk(2496,`, `),Jc(2497,`code`),Mk(2498,`po-select`),Kg(),Mk(2499,`,
`),Jc(2500,`code`),Mk(2501,`po-switch`),Kg(),Mk(2502,`, `),Jc(2503,`code`),Mk(2504,`po-textarea`),Kg(),Mk(2505,`, `),Jc(2506,`code`),Mk(2507,`po-timepicker`),Kg(),Mk(2508,`.`),Kg()()(),Jc(2509,`tr`,126)(2510,`td`,17)(2511,`div`,26)(2512,`span`,27),Mk(2513,` errorMessage`),_u(2514,`br`),Kg()()(),Jc(2515,`td`,21)(2516,`code`,28),Mk(2517,`string`),Kg()(),Jc(2518,`td`,24)(2519,`em`)(2520,`strong`),Mk(2521,`(opcional)`),Kg()(),Jc(2522,`p`),Mk(2523,`Mensagem que será apresentada quando o campo ficar inválido.`),Kg(),Jc(2524,`p`),Mk(2525,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),Kg(),Jc(2526,`ul`)(2527,`li`),Mk(2528,`pattern;`),Kg(),Jc(2529,`li`),Mk(2530,`minValue;`),Kg(),Jc(2531,`li`),Mk(2532,`maxValue;`),Kg(),Jc(2533,`li`),Mk(2534,`required;`),Kg()(),Jc(2535,`blockquote`)(2536,`p`),Mk(2537,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Jc(2538,`code`),Mk(2539,`po-datepicker`),Kg(),Mk(2540,`, `),Jc(2541,`code`),Mk(2542,`po-input`),Kg(),Mk(2543,`, `),Jc(2544,`code`),Mk(2545,`po-number`),Kg(),Mk(2546,`, `),Jc(2547,`code`),Mk(2548,`po-decimal`),Kg(),Mk(2549,`, `),Jc(2550,`code`),Mk(2551,`po-password`),Kg(),Mk(2552,`, `),Jc(2553,`code`),Mk(2554,`po-timepicker`),Kg(),Mk(2555,`, \xE9 necess\xE1rio que a propriedade
`),Jc(2556,`code`),Mk(2557,`requiredFieldErrorMessage`),Kg(),Mk(2558,` esteja como `),Jc(2559,`code`),Mk(2560,`true`),Kg(),Mk(2561,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Jc(2562,`code`),Mk(2563,`po-datepicker-range`),Kg(),Mk(2564,`, `),Jc(2565,`code`),Mk(2566,`po-select`),Kg(),Mk(2567,`, `),Jc(2568,`code`),Mk(2569,`po-checkbox-group`),Kg(),Mk(2570,`, `),Jc(2571,`code`),Mk(2572,`po-radio-group`),Kg(),Mk(2573,`, `),Jc(2574,`code`),Mk(2575,`po-multiselect`),Kg(),Mk(2576,`, `),Jc(2577,`code`),Mk(2578,`po-combo`),Kg(),Mk(2579,`,
`),Jc(2580,`code`),Mk(2581,`po-lookup`),Kg(),Mk(2582,` e `),Jc(2583,`code`),Mk(2584,`po-textarea`),Kg(),Mk(2585,` não é necessário passar a propriedade `),Jc(2586,`code`),Mk(2587,`requiredFieldErrorMessage`),Kg(),Mk(2588,`.`),Kg()(),Jc(2589,`p`)(2590,`strong`),Mk(2591,`Componentes compatíveis:`),Kg(),Jc(2592,`code`),Mk(2593,`po-checkbox-group`),Kg(),Mk(2594,`, `),Jc(2595,`code`),Mk(2596,`po-combo`),Kg(),Mk(2597,`, `),Jc(2598,`code`),Mk(2599,`po-datepicker`),Kg(),Mk(2600,`, `),Jc(2601,`code`),Mk(2602,`po-datepicker-range`),Kg(),Mk(2603,`, `),Jc(2604,`code`),Mk(2605,`po-decimal`),Kg(),Mk(2606,`, `),Jc(2607,`code`),Mk(2608,`po-input`),Kg(),Mk(2609,`, `),Jc(2610,`code`),Mk(2611,`po-lookup`),Kg(),Mk(2612,`, `),Jc(2613,`code`),Mk(2614,`po-multiselect`),Kg(),Mk(2615,`, `),Jc(2616,`code`),Mk(2617,`po-number`),Kg(),Mk(2618,`, `),Jc(2619,`code`),Mk(2620,`po-password`),Kg(),Mk(2621,`, `),Jc(2622,`code`),Mk(2623,`po-radio-group`),Kg(),Mk(2624,`, `),Jc(2625,`code`),Mk(2626,`po-select`),Kg(),Mk(2627,`,
`),Jc(2628,`code`),Mk(2629,`po-switch`),Kg(),Mk(2630,`, `),Jc(2631,`code`),Mk(2632,`po-textarea`),Kg(),Mk(2633,`, `),Jc(2634,`code`),Mk(2635,`po-timepicker`),Kg(),Mk(2636,`.`),Kg()()(),Jc(2637,`tr`,127)(2638,`td`,17)(2639,`div`,26)(2640,`span`,27),Mk(2641,` fieldLabel`),_u(2642,`br`),Kg()()(),Jc(2643,`td`,21)(2644,`code`,28),Mk(2645,`string`),Kg()(),Jc(2646,`td`,24)(2647,`em`)(2648,`strong`),Mk(2649,`(opcional)`),Kg()(),Jc(2650,`p`),Mk(2651,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),Kg(),Jc(2652,`p`),Mk(2653,`O valor padrão é: `),Jc(2654,`code`),Mk(2655,`label`),Kg(),Mk(2656,`.`),Kg(),Jc(2657,`blockquote`)(2658,`p`),Mk(2659,`Esta propriedade pode ser utilizada em conjunto com: `),Jc(2660,`code`),Mk(2661,`options`),Kg(),Mk(2662,`, `),Jc(2663,`code`),Mk(2664,`optionsService`),Kg(),Mk(2665,` e `),Jc(2666,`code`),Mk(2667,`searchService`),Kg(),Mk(2668,`.`),Kg()()()(),Jc(2669,`tr`,128)(2670,`td`,17)(2671,`div`,26)(2672,`span`,27),Mk(2673,` fieldValue`),_u(2674,`br`),Kg()()(),Jc(2675,`td`,21)(2676,`code`,28),Mk(2677,`string`),Kg()(),Jc(2678,`td`,24)(2679,`em`)(2680,`strong`),Mk(2681,`(opcional)`),Kg()(),Jc(2682,`p`),Mk(2683,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),Kg(),Jc(2684,`p`),Mk(2685,`O valor padrão é: `),Jc(2686,`code`),Mk(2687,`value`),Kg(),Mk(2688,`.`),Kg(),Jc(2689,`blockquote`)(2690,`p`),Mk(2691,`Esta propriedade pode ser utilizada em conjunto com: `),Jc(2692,`code`),Mk(2693,`options`),Kg(),Mk(2694,`, `),Jc(2695,`code`),Mk(2696,`optionsService`),Kg(),Mk(2697,` e `),Jc(2698,`code`),Mk(2699,`searchService`),Kg(),Mk(2700,`.`),Kg()()()(),Jc(2701,`tr`,129)(2702,`td`,17)(2703,`div`,26)(2704,`span`,27),Mk(2705,` filterMinlength`),_u(2706,`br`),Kg()()(),Jc(2707,`td`,21)(2708,`code`,102),Mk(2709,`number`),Kg()(),Jc(2710,`td`,24)(2711,`em`)(2712,`strong`),Mk(2713,`(opcional)`),Kg()(),Jc(2714,`p`),Mk(2715,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Jc(2716,`code`),Mk(2717,`po-combo`),Kg(),Mk(2718,`.`),Kg()()(),Jc(2719,`tr`,130)(2720,`td`,17)(2721,`div`,26)(2722,`span`,27),Mk(2723,` filterMode`),_u(2724,`br`),Kg()()(),Jc(2725,`td`,21)(2726,`code`,131),Mk(2727,`PoMultiselectFilterMode`),Kg()(),Jc(2728,`td`,24)(2729,`em`)(2730,`strong`),Mk(2731,`(opcional)`),Kg()(),Jc(2732,`p`),Mk(2733,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Jc(2734,`code`),Mk(2735,`startsWith`),Kg(),Mk(2736,`, `),Jc(2737,`code`),Mk(2738,`contains`),Kg(),Mk(2739,` ou `),Jc(2740,`code`),Mk(2741,`endsWith`),Kg(),Mk(2742,`.`),Kg(),Jc(2743,`blockquote`)(2744,`p`),Mk(2745,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),Kg()(),Jc(2746,`p`)(2747,`strong`),Mk(2748,`Componente compatível:`),Kg(),Jc(2749,`code`),Mk(2750,`po-multiselect`),Kg(),Mk(2751,`.`),Kg()()(),Jc(2752,`tr`,132)(2753,`td`,17)(2754,`div`,26)(2755,`span`,27),Mk(2756,` forceBooleanComponentType`),_u(2757,`br`),Kg()()(),Jc(2758,`td`,21)(2759,`code`,133),Mk(2760,`ForceBooleanComponentEnum`),Kg()(),Jc(2761,`td`,24)(2762,`em`)(2763,`strong`),Mk(2764,`(opcional)`),Kg()(),Jc(2765,`p`),Mk(2766,`Valores aceitos:`),Kg(),Jc(2767,`ul`)(2768,`li`),Mk(2769,`ForceBooleanComponentEnum.switch`),Kg(),Jc(2770,`li`),Mk(2771,`ForceBooleanComponentEnum.checkbox`),Kg()()()(),Jc(2772,`tr`,134)(2773,`td`,17)(2774,`div`,26)(2775,`span`,27),Mk(2776,` forceOptionsComponentType`),_u(2777,`br`),Kg()()(),Jc(2778,`td`,21)(2779,`code`,135),Mk(2780,`ForceOptionComponentEnum`),Kg()(),Jc(2781,`td`,24)(2782,`em`)(2783,`strong`),Mk(2784,`(opcional)`),Kg()(),Jc(2785,`p`),Mk(2786,`pode ser utilizada em conjunto com a propriedade `),Jc(2787,`code`),Mk(2788,`options`),Kg(),Mk(2789,` forçando o componente a renderizar um `),Jc(2790,`code`),Mk(2791,`po-select`),Kg(),Mk(2792,` ou `),Jc(2793,`code`),Mk(2794,`po-radio-group`),Kg(),Mk(2795,`.`),Kg(),Jc(2796,`p`),Mk(2797,`Valores aceitos:`),Kg(),Jc(2798,`ul`)(2799,`li`),Mk(2800,`ForceOptionComponentEnum.radioGroup`),Kg(),Jc(2801,`li`),Mk(2802,`ForceOptionComponentEnum.select`),Kg()(),Jc(2803,`blockquote`)(2804,`p`),Mk(2805,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Jc(2806,`code`),Mk(2807,`optionsMulti`),Kg(),Mk(2808,` e `),Jc(2809,`code`),Mk(2810,`optionsService`),Kg(),Mk(2811,`.`),Kg()()()(),Jc(2812,`tr`,136)(2813,`td`,17)(2814,`div`,26)(2815,`span`,27),Mk(2816,` formField`),_u(2817,`br`),Kg()()(),Jc(2818,`td`,21)(2819,`code`,28),Mk(2820,`string`),Kg()(),Jc(2821,`td`,24)(2822,`em`)(2823,`strong`),Mk(2824,`(opcional)`),Kg()(),Jc(2825,`p`),Mk(2826,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Jc(2827,`code`),Mk(2828,`url`),Kg(),Mk(2829,`.`),Kg(),Jc(2830,`blockquote`)(2831,`p`),Mk(2832,`O valor default é `),Jc(2833,`code`),Mk(2834,`files`),Kg()()(),Jc(2835,`p`)(2836,`strong`),Mk(2837,`Componente compatível`),Kg(),Mk(2838,`: `),Jc(2839,`code`),Mk(2840,`po-upload`),Kg()()()(),Jc(2841,`tr`,137)(2842,`td`,17)(2843,`div`,26)(2844,`span`,27),Mk(2845,` format`),_u(2846,`br`),Kg()()(),Jc(2847,`td`,21)(2848,`code`,28),Mk(2849,`string `),Kg(),Jc(2850,`code`,48),Mk(2851,` Array<string>`),Kg()(),Jc(2852,`td`,24)(2853,`em`)(2854,`strong`),Mk(2855,`(opcional)`),Kg()(),Jc(2856,`p`),Mk(2857,`Formato de exibição no campo.`),Kg(),Jc(2858,`p`),Mk(2859,`Ao utilizar esta propriedade com o `),Jc(2860,`code`),Mk(2861,`type`),Kg(),Jc(2862,`em`),Mk(2863,`PoDynamicFieldType.Date`),Kg(),Mk(2864,` ou `),Jc(2865,`em`),Mk(2866,`PoDynamicFieldType.DateTime`),Kg(),Mk(2867,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),Kg(),Jc(2868,`p`),Mk(2869,`Valores válidos:`),Kg(),Jc(2870,`ul`)(2871,`li`),Mk(2872,`dd/mm/yyyy`),Kg(),Jc(2873,`li`),Mk(2874,`mm/dd/yyyy`),Kg(),Jc(2875,`li`),Mk(2876,`yyyy/mm/dd`),Kg()(),Jc(2877,`p`),Mk(2878,`Ao utilizar com o `),Jc(2879,`code`),Mk(2880,`type`),Kg(),Jc(2881,`em`),Mk(2882,`PoDynamicFieldType.Time`),Kg(),Mk(2883,`, define o formato de exibição do horário:`),Kg(),Jc(2884,`p`),Mk(2885,`Valores válidos:`),Kg(),Jc(2886,`ul`)(2887,`li`)(2888,`code`),Mk(2889,`24`),Kg(),Mk(2890,`: formato de 24 horas (padrão)`),Kg(),Jc(2891,`li`)(2892,`code`),Mk(2893,`12`),Kg(),Mk(2894,`: formato de 12 horas com indicador AM/PM`),Kg()(),Jc(2895,`p`),Mk(2896,`Também pode-se utilizar em conjunto com `),Jc(2897,`code`),Mk(2898,`searchService`),Kg(),Mk(2899,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),Kg(),Jc(2900,`p`)(2901,`strong`),Mk(2902,`Componentes compatíveis:`),Kg(),Jc(2903,`code`),Mk(2904,`po-datepicker`),Kg(),Mk(2905,`, `),Jc(2906,`code`),Mk(2907,`po-datetimepicker`),Kg(),Mk(2908,`, `),Jc(2909,`code`),Mk(2910,`po-timepicker`),Kg(),Mk(2911,`, `),Jc(2912,`code`),Mk(2913,`po-lookup`),Kg(),Mk(2914,`.`),Kg()()(),Jc(2915,`tr`,138)(2916,`td`,17)(2917,`div`,26)(2918,`span`,27),Mk(2919,` formatModel`),_u(2920,`br`),Kg()()(),Jc(2921,`td`,21)(2922,`code`,32),Mk(2923,`boolean`),Kg()(),Jc(2924,`td`,24)(2925,`em`)(2926,`strong`),Mk(2927,`(opcional)`),Kg()(),Jc(2928,`p`),Mk(2929,`Indica se o `),Jc(2930,`code`),Mk(2931,`model`),Kg(),Mk(2932,` receberá o valor formatado pelas propriedades `),Jc(2933,`code`),Mk(2934,`p-label-on`),Kg(),Mk(2935,` e `),Jc(2936,`code`),Mk(2937,`p-label-off`),Kg(),Mk(2938,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Kg(),Jc(2939,`p`),Mk(2940,`O valor padrão é: `),Jc(2941,`code`),Mk(2942,`false`),Kg(),Mk(2943,`.`),Kg(),Jc(2944,`blockquote`)(2945,`p`),Mk(2946,`Esta propriedade está disponivel apenas para o `),Jc(2947,`code`),Mk(2948,`swicth`),Kg(),Mk(2949,`.`),Kg()()()(),Jc(2950,`tr`,139)(2951,`td`,17)(2952,`div`,26)(2953,`span`,27),Mk(2954,` formatTime`),_u(2955,`br`),Kg()()(),Jc(2956,`td`,21)(2957,`code`,28),Mk(2958,`string`),Kg()(),Jc(2959,`td`,24)(2960,`em`)(2961,`strong`),Mk(2962,`(opcional)`),Kg()(),Jc(2963,`p`),Mk(2964,`Define o formato de exibição do timer (`),Jc(2965,`code`),Mk(2966,`'12'`),Kg(),Mk(2967,` ou `),Jc(2968,`code`),Mk(2969,`'24'`),Kg(),Mk(2970,`).`),Kg(),Jc(2971,`p`)(2972,`strong`),Mk(2973,`Componente compatível:`),Kg(),Jc(2974,`code`),Mk(2975,`po-datetimepicker`),Kg()()()(),Jc(2976,`tr`,140)(2977,`td`,17)(2978,`div`,26)(2979,`span`,27),Mk(2980,` gridColumns`),_u(2981,`br`),Kg()()(),Jc(2982,`td`,21)(2983,`code`,102),Mk(2984,`number`),Kg()(),Jc(2985,`td`,24)(2986,`em`)(2987,`strong`),Mk(2988,`(opcional)`),Kg()(),Jc(2989,`p`),Mk(2990,`Tamanho de exibição do campo em telas.`),Kg(),Jc(2991,`p`),Mk(2992,`Deve ser usado o sistema de `),Jc(2993,`strong`),Mk(2994,`grid`),Kg(),Mk(2995,` do PO (1 ... 12 colunas).`),Kg(),Jc(2996,`blockquote`)(2997,`p`),Mk(2998,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),Kg()()()(),Jc(2999,`tr`,141)(3e3,`td`,17)(3001,`div`,26)(3002,`span`,27),Mk(3003,` gridLgColumns`),_u(3004,`br`),Kg()()(),Jc(3005,`td`,21)(3006,`code`,102),Mk(3007,`number`),Kg()(),Jc(3008,`td`,24)(3009,`em`)(3010,`strong`),Mk(3011,`(opcional)`),Kg()(),Jc(3012,`p`),Mk(3013,`Tamanho de exibição do campo em telas grandes (lg).`),Kg(),Jc(3014,`p`),Mk(3015,`Deve ser usado o sistema de `),Jc(3016,`strong`),Mk(3017,`grid`),Kg(),Mk(3018,` do PO (1 ... 12 colunas).`),Kg(),Jc(3019,`blockquote`)(3020,`p`),Mk(3021,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3022,`code`),Mk(3023,`gridColumns`),Kg(),Mk(3024,`.`),Kg()()()(),Jc(3025,`tr`,142)(3026,`td`,17)(3027,`div`,26)(3028,`span`,27),Mk(3029,` gridLgPull`),_u(3030,`br`),Kg()()(),Jc(3031,`td`,21)(3032,`code`,102),Mk(3033,`number`),Kg()(),Jc(3034,`td`,24)(3035,`em`)(3036,`strong`),Mk(3037,`(opcional)`),Kg()(),Jc(3038,`p`),Mk(3039,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),Kg(),Jc(3040,`p`),Mk(3041,`Deve ser usado o sistema de `),Jc(3042,`strong`),Mk(3043,`grid`),Kg(),Mk(3044,` do PO (1 ... 11 colunas).`),Kg(),Jc(3045,`blockquote`)(3046,`p`),Mk(3047,`Esta propriedade não funciona com a propriedade `),Jc(3048,`code`),Mk(3049,`gridColumns`),Kg(),Mk(3050,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Jc(3051,`tr`,143)(3052,`td`,17)(3053,`div`,26)(3054,`span`,27),Mk(3055,` gridMdColumns`),_u(3056,`br`),Kg()()(),Jc(3057,`td`,21)(3058,`code`,102),Mk(3059,`number`),Kg()(),Jc(3060,`td`,24)(3061,`em`)(3062,`strong`),Mk(3063,`(opcional)`),Kg()(),Jc(3064,`p`),Mk(3065,`Tamanho de exibição do campo em telas médias (md).`),Kg(),Jc(3066,`p`),Mk(3067,`Deve ser usado o sistema de `),Jc(3068,`strong`),Mk(3069,`grid`),Kg(),Mk(3070,` do PO (1 ... 12 colunas).`),Kg(),Jc(3071,`blockquote`)(3072,`p`),Mk(3073,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3074,`code`),Mk(3075,`gridColumns`),Kg(),Mk(3076,`.`),Kg()()()(),Jc(3077,`tr`,144)(3078,`td`,17)(3079,`div`,26)(3080,`span`,27),Mk(3081,` gridMdPull`),_u(3082,`br`),Kg()()(),Jc(3083,`td`,21)(3084,`code`,102),Mk(3085,`number`),Kg()(),Jc(3086,`td`,24)(3087,`em`)(3088,`strong`),Mk(3089,`(opcional)`),Kg()(),Jc(3090,`p`),Mk(3091,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),Kg(),Jc(3092,`p`),Mk(3093,`Deve ser usado o sistema de `),Jc(3094,`strong`),Mk(3095,`grid`),Kg(),Mk(3096,` do PO (1 ... 11 colunas).`),Kg(),Jc(3097,`blockquote`)(3098,`p`),Mk(3099,`Esta propriedade não funciona com a propriedade `),Jc(3100,`code`),Mk(3101,`gridColumns`),Kg(),Mk(3102,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Jc(3103,`tr`,145)(3104,`td`,17)(3105,`div`,26)(3106,`span`,27),Mk(3107,` gridSmColumns`),_u(3108,`br`),Kg()()(),Jc(3109,`td`,21)(3110,`code`,102),Mk(3111,`number`),Kg()(),Jc(3112,`td`,24)(3113,`em`)(3114,`strong`),Mk(3115,`(opcional)`),Kg()(),Jc(3116,`p`),Mk(3117,`Tamanho de exibição do campo em telas menores (sm).`),Kg(),Jc(3118,`p`),Mk(3119,`Deve ser usado o sistema de `),Jc(3120,`strong`),Mk(3121,`grid`),Kg(),Mk(3122,` do PO (1 ... 12 colunas).`),Kg(),Jc(3123,`blockquote`)(3124,`p`),Mk(3125,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3126,`code`),Mk(3127,`gridColumns`),Kg(),Mk(3128,`.`),Kg()()()(),Jc(3129,`tr`,146)(3130,`td`,17)(3131,`div`,26)(3132,`span`,27),Mk(3133,` gridSmPull`),_u(3134,`br`),Kg()()(),Jc(3135,`td`,21)(3136,`code`,102),Mk(3137,`number`),Kg()(),Jc(3138,`td`,24)(3139,`em`)(3140,`strong`),Mk(3141,`(opcional)`),Kg()(),Jc(3142,`p`),Mk(3143,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),Kg(),Jc(3144,`p`),Mk(3145,`Deve ser usado o sistema de `),Jc(3146,`strong`),Mk(3147,`grid`),Kg(),Mk(3148,` do PO (1 ... 11 colunas).`),Kg(),Jc(3149,`blockquote`)(3150,`p`),Mk(3151,`Esta propriedade não funciona com a propriedade `),Jc(3152,`code`),Mk(3153,`gridColumns`),Kg(),Mk(3154,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Jc(3155,`tr`,147)(3156,`td`,17)(3157,`div`,26)(3158,`span`,27),Mk(3159,` gridXlColumns`),_u(3160,`br`),Kg()()(),Jc(3161,`td`,21)(3162,`code`,102),Mk(3163,`number`),Kg()(),Jc(3164,`td`,24)(3165,`em`)(3166,`strong`),Mk(3167,`(opcional)`),Kg()(),Jc(3168,`p`),Mk(3169,`Tamanho de exibição do campo em telas extra grandes (xl).`),Kg(),Jc(3170,`p`),Mk(3171,`Deve ser usado o sistema de `),Jc(3172,`strong`),Mk(3173,`grid`),Kg(),Mk(3174,` do PO (1 ... 12 colunas).`),Kg(),Jc(3175,`blockquote`)(3176,`p`),Mk(3177,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3178,`code`),Mk(3179,`gridColumns`),Kg(),Mk(3180,`.`),Kg()()()(),Jc(3181,`tr`,148)(3182,`td`,17)(3183,`div`,26)(3184,`span`,27),Mk(3185,` gridXlPull`),_u(3186,`br`),Kg()()(),Jc(3187,`td`,21)(3188,`code`,102),Mk(3189,`number`),Kg()(),Jc(3190,`td`,24)(3191,`em`)(3192,`strong`),Mk(3193,`(opcional)`),Kg()(),Jc(3194,`p`),Mk(3195,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),Kg(),Jc(3196,`p`),Mk(3197,`Deve ser usado o sistema de `),Jc(3198,`strong`),Mk(3199,`grid`),Kg(),Mk(3200,` do PO (1 ... 11 colunas).`),Kg(),Jc(3201,`blockquote`)(3202,`p`),Mk(3203,`Esta propriedade não funciona com a propriedade `),Jc(3204,`code`),Mk(3205,`gridColumns`),Kg(),Mk(3206,`. Deve-se especificar o tamanho da tela.`),Kg()()()(),Jc(3207,`tr`,149)(3208,`td`,17)(3209,`div`,26)(3210,`span`,27),Mk(3211,` headers`),_u(3212,`br`),Kg()()(),Jc(3213,`td`,21)(3214,`code`,150),Mk(3215,`{ [name: string]: string `),Kg(),Jc(3216,`code`,151),Mk(3217,` Array<string>;
}`),Kg()(),Jc(3218,`td`,24)(3219,`em`)(3220,`strong`),Mk(3221,`(opcional)`),Kg()(),Jc(3222,`p`),Mk(3223,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Kg(),Jc(3224,`p`)(3225,`strong`),Mk(3226,`Componente compatível`),Kg(),Mk(3227,`: `),Jc(3228,`code`),Mk(3229,`po-upload`),Kg()()()(),Jc(3230,`tr`,152)(3231,`td`,17)(3232,`div`,26)(3233,`span`,27),Mk(3234,` help`),_u(3235,`br`),Kg()()(),Jc(3236,`td`,21)(3237,`code`,28),Mk(3238,`string`),Kg()(),Jc(3239,`td`,24)(3240,`em`)(3241,`strong`),Mk(3242,`(opcional)`),Kg()(),Jc(3243,`p`),Mk(3244,`Texto de ajuda.`),Kg()()(),Jc(3245,`tr`,153)(3246,`td`,17)(3247,`div`,26)(3248,`span`,27),Mk(3249,` helper`),_u(3250,`br`),Kg()()(),Jc(3251,`td`,21)(3252,`code`,28),Mk(3253,`string `),Kg(),Jc(3254,`code`,73),Mk(3255,` PoHelperOptions`),Kg()(),Jc(3256,`td`,24)(3257,`em`)(3258,`strong`),Mk(3259,`(opcional)`),Kg()(),Jc(3260,`p`),Mk(3261,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),Kg()()(),Jc(3262,`tr`,154)(3263,`td`,17)(3264,`div`,26)(3265,`span`,27),Mk(3266,` hideLabelStatus`),_u(3267,`br`),Kg()()(),Jc(3268,`td`,21)(3269,`code`,32),Mk(3270,`boolean`),Kg()(),Jc(3271,`td`,24)(3272,`em`)(3273,`strong`),Mk(3274,`(opcional)`),Kg()(),Jc(3275,`p`),Mk(3276,`Indica se o status do `),Jc(3277,`code`),Mk(3278,`model`),Kg(),Mk(3279,` será escondido visualmente ao lado do switch`),Kg()()(),Jc(3280,`tr`,155)(3281,`td`,17)(3282,`div`,26)(3283,`span`,27),Mk(3284,` hidePasswordPeek`),_u(3285,`br`),Kg()()(),Jc(3286,`td`,21)(3287,`code`,32),Mk(3288,`boolean`),Kg()(),Jc(3289,`td`,24)(3290,`em`)(3291,`strong`),Mk(3292,`(opcional)`),Kg()(),Jc(3293,`p`),Mk(3294,`Permite esconder a função de espiar a senha digitada no `),Jc(3295,`code`),Mk(3296,`po-password`),Kg(),Mk(3297,`.`),Kg()()(),Jc(3298,`tr`,156)(3299,`td`,17)(3300,`div`,26)(3301,`span`,27),Mk(3302,` hideRestrictionsInfo`),_u(3303,`br`),Kg()()(),Jc(3304,`td`,21)(3305,`code`,32),Mk(3306,`boolean`),Kg()(),Jc(3307,`td`,24)(3308,`em`)(3309,`strong`),Mk(3310,`(opcional)`),Kg()(),Jc(3311,`p`),Mk(3312,`Oculta visualmente as informações de restrições para o upload.`),Kg(),Jc(3313,`p`)(3314,`strong`),Mk(3315,`Componente compatível`),Kg(),Mk(3316,`: `),Jc(3317,`code`),Mk(3318,`po-upload`),Kg()()()(),Jc(3319,`tr`,157)(3320,`td`,17)(3321,`div`,26)(3322,`span`,27),Mk(3323,` hideSearch`),_u(3324,`br`),Kg()()(),Jc(3325,`td`,21)(3326,`code`,32),Mk(3327,`boolean`),Kg()(),Jc(3328,`td`,24)(3329,`em`)(3330,`strong`),Mk(3331,`(opcional)`),Kg()(),Jc(3332,`p`),Mk(3333,`Esconde o campo de pesquisa existente dentro do dropdown do `),Jc(3334,`code`),Mk(3335,`po-multiselect`),Kg(),Mk(3336,`.`),Kg()()(),Jc(3337,`tr`,158)(3338,`td`,17)(3339,`div`,26)(3340,`span`,27),Mk(3341,` hideSelectAll`),_u(3342,`br`),Kg()()(),Jc(3343,`td`,21)(3344,`code`,32),Mk(3345,`boolean`),Kg()(),Jc(3346,`td`,24)(3347,`em`)(3348,`strong`),Mk(3349,`(opcional)`),Kg()(),Jc(3350,`p`),Mk(3351,`Indica se o campo "Selecionar todos" do `),Jc(3352,`code`),Mk(3353,`po-multiselect`),Kg(),Mk(3354,` será escondido.`),Kg()()(),Jc(3355,`tr`,159)(3356,`td`,17)(3357,`div`,26)(3358,`span`,27),Mk(3359,` hideSelectButton`),_u(3360,`br`),Kg()()(),Jc(3361,`td`,21)(3362,`code`,32),Mk(3363,`boolean`),Kg()(),Jc(3364,`td`,24)(3365,`em`)(3366,`strong`),Mk(3367,`(opcional)`),Kg()(),Jc(3368,`p`),Mk(3369,`Omite o botão de seleção de arquivos.`),Kg(),Jc(3370,`blockquote`)(3371,`p`),Mk(3372,`Caso o valor definido seja `),Jc(3373,`code`),Mk(3374,`true`),Kg(),Mk(3375,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(3376,`code`),Mk(3377,`selectFiles()`),Kg(),Mk(3378,` para seleção de arquivos.`),Kg()(),Jc(3379,`p`)(3380,`strong`),Mk(3381,`Componente compatível`),Kg(),Mk(3382,`: `),Jc(3383,`code`),Mk(3384,`po-upload`),Kg()()()(),Jc(3385,`tr`,160)(3386,`td`,17)(3387,`div`,26)(3388,`span`,27),Mk(3389,` hideSendButton`),_u(3390,`br`),Kg()()(),Jc(3391,`td`,21)(3392,`code`,32),Mk(3393,`boolean`),Kg()(),Jc(3394,`td`,24)(3395,`em`)(3396,`strong`),Mk(3397,`(opcional)`),Kg()(),Jc(3398,`p`),Mk(3399,`Omite o botão de envio de arquivos.`),Kg(),Jc(3400,`blockquote`)(3401,`p`),Mk(3402,`Caso o valor definido seja `),Jc(3403,`code`),Mk(3404,`true`),Kg(),Mk(3405,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(3406,`code`),Mk(3407,`sendFiles()`),Kg(),Mk(3408,` para envio do(s) arquivo(s) selecionado(s).`),Kg()(),Jc(3409,`p`)(3410,`strong`),Mk(3411,`Componente compatível`),Kg(),Mk(3412,`: `),Jc(3413,`code`),Mk(3414,`po-upload`),Kg()()()(),Jc(3415,`tr`,161)(3416,`td`,17)(3417,`div`,26)(3418,`span`,27),Mk(3419,` icon`),_u(3420,`br`),Kg()()(),Jc(3421,`td`,21)(3422,`code`,28),Mk(3423,`string `),Kg(),Jc(3424,`code`,162),Mk(3425,` TemplateRef<void>`),Kg()(),Jc(3426,`td`,24)(3427,`em`)(3428,`strong`),Mk(3429,`(opcional)`),Kg()(),Jc(3430,`p`),Mk(3431,`Define o ícone que será exibido no início do campo.`),Kg(),Jc(3432,`blockquote`)(3433,`p`),Mk(3434,`Esta propriedade só pode ser utilizado nos campos:`),Kg()(),Jc(3435,`ul`)(3436,`li`),Mk(3437,`Input;`),Kg(),Jc(3438,`li`),Mk(3439,`Number;`),Kg(),Jc(3440,`li`),Mk(3441,`Decimal;`),Kg(),Jc(3442,`li`),Mk(3443,`Combo;`),Kg(),Jc(3444,`li`),Mk(3445,`Password;`),Kg()(),Jc(3446,`blockquote`)(3447,`p`),Mk(3448,`Veja a disponibilidade de ícones em `),Jc(3449,`a`,163),Mk(3450,`biblioteca de ícones`),Kg(),Mk(3451,`.`),Kg()()()(),Jc(3452,`tr`,164)(3453,`td`,17)(3454,`div`,26)(3455,`span`,27),Mk(3456,` infiniteScroll`),_u(3457,`br`),Kg()()(),Jc(3458,`td`,21)(3459,`code`,32),Mk(3460,`boolean`),Kg()(),Jc(3461,`td`,24)(3462,`em`)(3463,`strong`),Mk(3464,`(opcional)`),Kg()(),Jc(3465,`p`),Mk(3466,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Kg(),Jc(3467,`p`)(3468,`strong`),Mk(3469,`Componentes compatíveis:`),Kg(),Jc(3470,`code`),Mk(3471,`po-combo`),Kg(),Mk(3472,`, `),Jc(3473,`code`),Mk(3474,`po-lookup`),Kg(),Mk(3475,`.`),Kg()()(),Jc(3476,`tr`,165)(3477,`td`,17)(3478,`div`,26)(3479,`span`,27),Mk(3480,` infiniteScrollDistance`),_u(3481,`br`),Kg()()(),Jc(3482,`td`,21)(3483,`code`,102),Mk(3484,`number`),Kg()(),Jc(3485,`td`,24)(3486,`em`)(3487,`strong`),Mk(3488,`(opcional)`),Kg()(),Jc(3489,`p`),Mk(3490,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Jc(3491,`strong`),Mk(3492,`Exemplos`),Kg(),Jc(3493,`code`),Mk(3494,`{ infiniteScrollDistance: 80 }`),Kg(),Mk(3495,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),Kg(),Jc(3496,`p`)(3497,`strong`),Mk(3498,`Componente compatível:`),Kg(),Jc(3499,`code`),Mk(3500,`po-combo`),Kg(),Mk(3501,`.`),Kg()()(),Jc(3502,`tr`,166)(3503,`td`,17)(3504,`div`,26)(3505,`span`,27),Mk(3506,` initValue`),_u(3507,`br`),Kg()()(),Jc(3508,`td`,21)(3509,`code`,52),Mk(3510,`any`),Kg()(),Jc(3511,`td`,24)(3512,`em`)(3513,`strong`),Mk(3514,`(opcional)`),Kg()(),Jc(3515,`p`),Mk(3516,`Define um valor inicial para um filtro de busca avançada.`),Kg(),Jc(3517,`p`),Mk(3518,`O valor será atribuído ao campo correspondente à propriedade `),Jc(3519,`code`),Mk(3520,`property`),Kg(),Mk(3521,` na primeira abertura da janela de
busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro, os campos passam a ser preenchidos com os valores filtrados,
preservando as altera\xE7\xF5es realizadas.`),Kg()()(),Jc(3522,`tr`,167)(3523,`td`,17)(3524,`div`,26)(3525,`span`,27),Mk(3526,` invalidValue`),_u(3527,`br`),Kg()()(),Jc(3528,`td`,21)(3529,`code`,32),Mk(3530,`boolean`),Kg()(),Jc(3531,`td`,24)(3532,`em`)(3533,`strong`),Mk(3534,`(opcional)`),Kg()(),Jc(3535,`p`),Mk(3536,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Jc(3537,`code`),Mk(3538,`p-field-error-message`),Kg(),Mk(3539,`.`),Kg(),Jc(3540,`blockquote`)(3541,`p`),Mk(3542,`Caso essa propriedade seja definida como `),Jc(3543,`code`),Mk(3544,`true`),Kg(),Mk(3545,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Kg()(),Jc(3546,`p`)(3547,`strong`),Mk(3548,`Componente compatível`),Kg(),Mk(3549,`: `),Jc(3550,`code`),Mk(3551,`po-switch`),Kg()()()(),Jc(3552,`tr`,168)(3553,`td`,17)(3554,`div`,26)(3555,`span`,27),Mk(3556,` isoFormat`),_u(3557,`br`),Kg()()(),Jc(3558,`td`,21)(3559,`code`,169),Mk(3560,`PoDatepickerIsoFormat`),Kg()(),Jc(3561,`td`,24)(3562,`em`)(3563,`strong`),Mk(3564,`(opcional)`),Kg()(),Jc(3565,`p`),Mk(3566,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),Kg(),Jc(3567,`blockquote`)(3568,`p`),Mk(3569,`Veja os valores válidos no `),Jc(3570,`code`),Mk(3571,`PoDatepickerIsoFormat`),Kg(),Mk(3572,`.`),Kg()(),Jc(3573,`p`)(3574,`strong`),Mk(3575,`Componente compatível:`),Kg(),Jc(3576,`code`),Mk(3577,`po-datepicker`),Kg()()()(),Jc(3578,`tr`,170)(3579,`td`,17)(3580,`div`,26)(3581,`span`,27),Mk(3582,` key`),_u(3583,`br`),Kg()()(),Jc(3584,`td`,21)(3585,`code`,32),Mk(3586,`boolean`),Kg()(),Jc(3587,`td`,24)(3588,`em`)(3589,`strong`),Mk(3590,`(opcional)`),Kg()(),Jc(3591,`p`),Mk(3592,`Identificador`),Kg()()(),Jc(3593,`tr`,171)(3594,`td`,17)(3595,`div`,26)(3596,`span`,27),Mk(3597,` keydown`),_u(3598,`br`),Kg()()(),Jc(3599,`td`,21)(3600,`code`,89),Mk(3601,`Function`),Kg()(),Jc(3602,`td`,24)(3603,`em`)(3604,`strong`),Mk(3605,`(opcional)`),Kg()(),Jc(3606,`p`),Mk(3607,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(3608,`code`),Mk(3609,`KeyboardEvent`),Kg(),Mk(3610,` com informações sobre a tecla.`),Kg()()(),Jc(3611,`tr`,172)(3612,`td`,17)(3613,`div`,26)(3614,`span`,27),Mk(3615,` label`),_u(3616,`br`),Kg()()(),Jc(3617,`td`,21)(3618,`code`,28),Mk(3619,`string`),Kg()(),Jc(3620,`td`,24)(3621,`em`)(3622,`strong`),Mk(3623,`(opcional)`),Kg()(),Jc(3624,`p`),Mk(3625,`Rótulo do campo exibido.`),Kg(),Jc(3626,`p`),Mk(3627,`Caso não seja informado, será utilizado como `),Jc(3628,`code`),Mk(3629,`label`),Kg(),Mk(3630,` o valor da propriedade `),Jc(3631,`code`),Mk(3632,`property`),Kg(),Mk(3633,` com a primeira letra em maiúsculo.`),Kg()()(),Jc(3634,`tr`,173)(3635,`td`,17)(3636,`div`,26)(3637,`span`,27),Mk(3638,` labelPosition`),_u(3639,`br`),Kg()()(),Jc(3640,`td`,21)(3641,`code`,174),Mk(3642,`PoSwitchLabelPosition`),Kg()(),Jc(3643,`td`,24)(3644,`em`)(3645,`strong`),Mk(3646,`(opcional)`),Kg()(),Jc(3647,`p`),Mk(3648,`Posição de exibição do rótulo do PoSwitch.`),Kg(),Jc(3649,`blockquote`)(3650,`p`),Mk(3651,`Por padrão exibe à direita.`),Kg()()()(),Jc(3652,`tr`,175)(3653,`td`,17)(3654,`div`,26)(3655,`span`,27),Mk(3656,` listboxControlPosition`),_u(3657,`br`),Kg()()(),Jc(3658,`td`,21)(3659,`code`,176),Mk(3660,`'top' `),Kg(),Jc(3661,`code`,177),Mk(3662,` 'bottom'`),Kg()(),Jc(3663,`td`,24)(3664,`em`)(3665,`strong`),Mk(3666,`(opcional)`),Kg()(),Jc(3667,`p`),Mk(3668,`Define a direção preferida para exibição do `),Jc(3669,`code`),Mk(3670,`listbox`),Kg(),Mk(3671,` em relação ao campo (`),Jc(3672,`code`),Mk(3673,`top`),Kg(),Mk(3674,` ou `),Jc(3675,`code`),Mk(3676,`bottom`),Kg(),Mk(3677,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Kg(),Jc(3678,`p`)(3679,`strong`),Mk(3680,`Componentes compatíveis:`),Kg(),Jc(3681,`code`),Mk(3682,`po-multiselect`),Kg(),Mk(3683,`, `),Jc(3684,`code`),Mk(3685,`po-combo`),Kg(),Mk(3686,`.`),Kg()()(),Jc(3687,`tr`,178)(3688,`td`,17)(3689,`div`,26)(3690,`span`,27),Mk(3691,` literals`),_u(3692,`br`),Kg()()(),Jc(3693,`td`,21)(3694,`code`,63),Mk(3695,`PoLookupLiterals `),Kg(),Jc(3696,`code`,179),Mk(3697,` PoMultiselectLiterals `),Kg(),Jc(3698,`code`,180),Mk(3699,` PoComboLiterals `),Kg(),Jc(3700,`code`,181),Mk(3701,` PoDatepickerRangeLiterals `),Kg(),Jc(3702,`code`,182),Mk(3703,` PoUploadLiterals`),Kg()(),Jc(3704,`td`,24)(3705,`em`)(3706,`strong`),Mk(3707,`(opcional)`),Kg()(),Jc(3708,`p`),Mk(3709,`Objeto com as literais usadas para os seguintes componentes: `),Jc(3710,`code`),Mk(3711,`po-lookup`),Kg(),Mk(3712,`, `),Jc(3713,`code`),Mk(3714,`po-multiselect`),Kg(),Mk(3715,`, `),Jc(3716,`code`),Mk(3717,`po-combo`),Kg(),Mk(3718,` e `),Jc(3719,`code`),Mk(3720,`po-datepicker-range`),Kg(),Mk(3721,`.`),Kg(),Jc(3722,`blockquote`)(3723,`p`),Mk(3724,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),Kg()(),Jc(3725,`p`)(3726,`strong`),Mk(3727,`Componentes compatíveis:`),Kg(),Jc(3728,`code`),Mk(3729,`po-lookup`),Kg(),Mk(3730,`, `),Jc(3731,`code`),Mk(3732,`po-multiselect`),Kg(),Mk(3733,`, `),Jc(3734,`code`),Mk(3735,`po-combo`),Kg(),Mk(3736,`, `),Jc(3737,`code`),Mk(3738,`po-datepicker-range`),Kg()()()(),Jc(3739,`tr`,183)(3740,`td`,17)(3741,`div`,26)(3742,`span`,27),Mk(3743,` loading`),_u(3744,`br`),Kg()()(),Jc(3745,`td`,21)(3746,`code`,32),Mk(3747,`boolean`),Kg()(),Jc(3748,`td`,24)(3749,`em`)(3750,`strong`),Mk(3751,`(opcional)`),Kg()(),Jc(3752,`p`),Mk(3753,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),Kg(),Jc(3754,`blockquote`)(3755,`p`),Mk(3756,`Por padrão é `),Jc(3757,`code`),Mk(3758,`false`),Kg(),Mk(3759,`.`),Kg()(),Jc(3760,`p`)(3761,`strong`),Mk(3762,`Componentes compatíveis:`),Kg(),Jc(3763,`code`),Mk(3764,`po-datepicker`),Kg(),Mk(3765,`, `),Jc(3766,`code`),Mk(3767,`po-datepicker-range`),Kg(),Mk(3768,`, `),Jc(3769,`code`),Mk(3770,`po-number`),Kg(),Mk(3771,`, `),Jc(3772,`code`),Mk(3773,`po-decimal`),Kg(),Mk(3774,`,
`),Jc(3775,`code`),Mk(3776,`po-input`),Kg(),Mk(3777,`, `),Jc(3778,`code`),Mk(3779,`po-select`),Kg(),Mk(3780,`, `),Jc(3781,`code`),Mk(3782,`po-switch`),Kg(),Mk(3783,`, `),Jc(3784,`code`),Mk(3785,`po-combo`),Kg(),Mk(3786,`, `),Jc(3787,`code`),Mk(3788,`po-lookup`),Kg(),Mk(3789,`, `),Jc(3790,`code`),Mk(3791,`po-multiselect`),Kg(),Mk(3792,`,
`),Jc(3793,`code`),Mk(3794,`po-textarea`),Kg(),Mk(3795,`, `),Jc(3796,`code`),Mk(3797,`po-password`),Kg(),Mk(3798,`, `),Jc(3799,`code`),Mk(3800,`po-upload`),Kg(),Mk(3801,`.`),Kg()()(),Jc(3802,`tr`,184)(3803,`td`,17)(3804,`div`,26)(3805,`span`,27),Mk(3806,` locale`),_u(3807,`br`),Kg()()(),Jc(3808,`td`,21)(3809,`code`,28),Mk(3810,`string`),Kg()(),Jc(3811,`td`,24)(3812,`em`)(3813,`strong`),Mk(3814,`(opcional)`),Kg()(),Jc(3815,`p`),Mk(3816,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Jc(3817,`a`,185)(3818,`code`),Mk(3819,`I18n`),Kg()()(),Jc(3820,`p`),Mk(3821,`Exemplo de utilização:`),Kg(),Jc(3822,`pre`)(3823,`code`),Mk(3824,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),Kg()(),Jc(3825,`blockquote`)(3826,`p`),Mk(3827,`Para ver quais linguagens suportadas acesse `),Jc(3828,`a`,185)(3829,`code`),Mk(3830,`I18n`),Kg()()()(),Jc(3831,`p`)(3832,`strong`),Mk(3833,`Componentes compatíveis:`),Kg(),Jc(3834,`code`),Mk(3835,`po-datepicker`),Kg(),Mk(3836,`, `),Jc(3837,`code`),Mk(3838,`po-decimal`),Kg(),Mk(3839,`, `),Jc(3840,`code`),Mk(3841,`po-timepicker`),Kg(),Mk(3842,`.`),Kg()()(),Jc(3843,`tr`,186)(3844,`td`,17)(3845,`div`,26)(3846,`span`,27),Mk(3847,` mask`),_u(3848,`br`),Kg()()(),Jc(3849,`td`,21)(3850,`code`,28),Mk(3851,`string`),Kg()(),Jc(3852,`td`,24)(3853,`em`)(3854,`strong`),Mk(3855,`(opcional)`),Kg()(),Jc(3856,`p`),Mk(3857,`Máscara para o campo.`),Kg(),Jc(3858,`p`)(3859,`strong`),Mk(3860,`Componente compatível:`),Kg(),Jc(3861,`code`),Mk(3862,`po-input`),Kg(),Mk(3863,`.`),Kg(),Jc(3864,`blockquote`)(3865,`p`),Mk(3866,`também é atribuído ao utilizar a propriedade `),Jc(3867,`code`),Mk(3868,`type: time`),Kg(),Mk(3869,`.`),Kg()(),Jc(3870,`blockquote`)(3871,`p`),Mk(3872,`Incompatível com `),Jc(3873,`code`),Mk(3874,`po-decimal`),Kg(),Mk(3875,`.`),Kg()()()(),Jc(3876,`tr`,187)(3877,`td`,17)(3878,`div`,26)(3879,`span`,27),Mk(3880,` maskFormatModel`),_u(3881,`br`),Kg()()(),Jc(3882,`td`,21)(3883,`code`,32),Mk(3884,`boolean`),Kg()(),Jc(3885,`td`,24)(3886,`em`)(3887,`strong`),Mk(3888,`(opcional)`),Kg()(),Jc(3889,`p`),Mk(3890,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Jc(3891,`code`),Mk(3892,`false`),Kg(),Mk(3893,`.`),Kg(),Jc(3894,`p`)(3895,`strong`),Mk(3896,`Componente compatível:`),Kg(),Jc(3897,`code`),Mk(3898,`po-input`),Kg(),Mk(3899,`.`),Kg(),Jc(3900,`blockquote`)(3901,`p`),Mk(3902,`também é atribuído ao utilizar a propriedade `),Jc(3903,`code`),Mk(3904,`type: time`),Kg(),Mk(3905,`.`),Kg()()()(),Jc(3906,`tr`,188)(3907,`td`,17)(3908,`div`,26)(3909,`span`,27),Mk(3910,` maskNoLengthValidation`),_u(3911,`br`),Kg()()(),Jc(3912,`td`,21)(3913,`code`,32),Mk(3914,`boolean`),Kg()(),Jc(3915,`td`,24)(3916,`em`)(3917,`strong`),Mk(3918,`(opcional)`),Kg()(),Jc(3919,`p`),Mk(3920,`Controla como o componente aplica as validações de comprimento mínimo (`),Jc(3921,`code`),Mk(3922,`minLength`),Kg(),Mk(3923,`) e máximo (`),Jc(3924,`code`),Mk(3925,`maxLength`),Kg(),Mk(3926,`) quando há uma máscara (`),Jc(3927,`code`),Mk(3928,`p-mask`),Kg(),Mk(3929,`) definida.`),Kg(),Jc(3930,`ul`)(3931,`li`),Mk(3932,`Quando `),Jc(3933,`code`),Mk(3934,`true`),Kg(),Mk(3935,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Kg(),Jc(3936,`li`),Mk(3937,`Quando `),Jc(3938,`code`),Mk(3939,`false`),Kg(),Mk(3940,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Kg()(),Jc(3941,`p`)(3942,`strong`),Mk(3943,`Componentes compatíveis:`),Kg(),Jc(3944,`code`),Mk(3945,`po-input`),Kg(),Mk(3946,`, `),Jc(3947,`code`),Mk(3948,`po-decimal`),Kg(),Mk(3949,`.`),Kg(),Jc(3950,`blockquote`)(3951,`p`),Mk(3952,`Esta propriedade é ignorada quando utilizada em conjunto com `),Jc(3953,`code`),Mk(3954,`p-mask-format-model`),Kg(),Mk(3955,`.`),Kg()(),Jc(3956,`p`),Mk(3957,`Exemplo:`),Kg(),Jc(3958,`pre`)(3959,`code`),Mk(3960,`fields:Array<PoDynamicFormField> = [
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
`),Kg()(),Jc(3961,`ul`)(3962,`li`),Mk(3963,`Entrada: `),Jc(3964,`code`),Mk(3965,`11.111.111/1111-11`),Kg(),Mk(3966,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),Kg()()()(),Jc(3967,`tr`,189)(3968,`td`,17)(3969,`div`,26)(3970,`span`,27),Mk(3971,` maxLength`),_u(3972,`br`),Kg()()(),Jc(3973,`td`,21)(3974,`code`,102),Mk(3975,`number`),Kg()(),Jc(3976,`td`,24)(3977,`em`)(3978,`strong`),Mk(3979,`(opcional)`),Kg()(),Jc(3980,`p`),Mk(3981,`Tamanho máximo de caracteres.`),Kg(),Jc(3982,`p`)(3983,`strong`),Mk(3984,`Componentes compatíveis:`),Kg(),Jc(3985,`code`),Mk(3986,`po-input`),Kg(),Mk(3987,`, `),Jc(3988,`code`),Mk(3989,`po-number`),Kg(),Mk(3990,`, `),Jc(3991,`code`),Mk(3992,`po-decimal`),Kg(),Mk(3993,`, `),Jc(3994,`code`),Mk(3995,`po-textarea`),Kg(),Mk(3996,`, `),Jc(3997,`code`),Mk(3998,`po-password`),Kg(),Mk(3999,`.`),Kg()()(),Jc(4e3,`tr`,190)(4001,`td`,17)(4002,`div`,26)(4003,`span`,27),Mk(4004,` maxTime`),_u(4005,`br`),Kg()()(),Jc(4006,`td`,21)(4007,`code`,28),Mk(4008,`string`),Kg()(),Jc(4009,`td`,24)(4010,`em`)(4011,`strong`),Mk(4012,`(opcional)`),Kg()(),Jc(4013,`p`),Mk(4014,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Jc(4015,`code`),Mk(4016,`HH:mm`),Kg(),Mk(4017,` ou `),Jc(4018,`code`),Mk(4019,`HH:mm:ss`),Kg(),Mk(4020,`.`),Kg(),Jc(4021,`p`)(4022,`strong`),Mk(4023,`Componente compatível:`),Kg(),Jc(4024,`code`),Mk(4025,`po-datetimepicker`),Kg(),Mk(4026,`, `),Jc(4027,`code`),Mk(4028,`po-timepicker`),Kg()()()(),Jc(4029,`tr`,191)(4030,`td`,17)(4031,`div`,26)(4032,`span`,27),Mk(4033,` maxValue`),_u(4034,`br`),Kg()()(),Jc(4035,`td`,21)(4036,`code`,28),Mk(4037,`string `),Kg(),Jc(4038,`code`,102),Mk(4039,` number`),Kg()(),Jc(4040,`td`,24)(4041,`em`)(4042,`strong`),Mk(4043,`(opcional)`),Kg()(),Jc(4044,`p`),Mk(4045,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Jc(4046,`em`),Mk(4047,`number`),Kg(),Mk(4048,`, `),Jc(4049,`em`),Mk(4050,`date`),Kg(),Mk(4051,`, `),Jc(4052,`em`),Mk(4053,`dateTime`),Kg(),Mk(4054,` ou `),Jc(4055,`em`),Mk(4056,`time`),Kg(),Mk(4057,`.`),Kg(),Jc(4058,`blockquote`)(4059,`p`),Mk(4060,`Para `),Jc(4061,`code`),Mk(4062,`po-timepicker`),Kg(),Mk(4063,`, o valor deve estar no formato `),Jc(4064,`code`),Mk(4065,`HH:mm`),Kg(),Mk(4066,` ou `),Jc(4067,`code`),Mk(4068,`HH:mm:ss`),Kg(),Mk(4069,`.`),Kg()(),Jc(4070,`p`)(4071,`strong`),Mk(4072,`Componentes compatíveis:`),Kg(),Jc(4073,`code`),Mk(4074,`po-datepicker`),Kg(),Mk(4075,`, `),Jc(4076,`code`),Mk(4077,`po-datepicker-range`),Kg(),Mk(4078,`, `),Jc(4079,`code`),Mk(4080,`po-number`),Kg(),Mk(4081,`, `),Jc(4082,`code`),Mk(4083,`po-decimal`),Kg(),Mk(4084,`, `),Jc(4085,`code`),Mk(4086,`po-timepicker`),Kg()()()(),Jc(4087,`tr`,192)(4088,`td`,17)(4089,`div`,26)(4090,`span`,27),Mk(4091,` minLength`),_u(4092,`br`),Kg()()(),Jc(4093,`td`,21)(4094,`code`,102),Mk(4095,`number`),Kg()(),Jc(4096,`td`,24)(4097,`em`)(4098,`strong`),Mk(4099,`(opcional)`),Kg()(),Jc(4100,`p`),Mk(4101,`Tamanho mínimo de caracteres.`),Kg(),Jc(4102,`p`)(4103,`strong`),Mk(4104,`Componentes compatíveis:`),Kg(),Jc(4105,`code`),Mk(4106,`po-input`),Kg(),Mk(4107,`, `),Jc(4108,`code`),Mk(4109,`po-number`),Kg(),Mk(4110,`, `),Jc(4111,`code`),Mk(4112,`po-decimal`),Kg(),Mk(4113,`, `),Jc(4114,`code`),Mk(4115,`po-textarea`),Kg(),Mk(4116,`, `),Jc(4117,`code`),Mk(4118,`po-password`),Kg(),Mk(4119,`.`),Kg()()(),Jc(4120,`tr`,193)(4121,`td`,17)(4122,`div`,26)(4123,`span`,27),Mk(4124,` minTime`),_u(4125,`br`),Kg()()(),Jc(4126,`td`,21)(4127,`code`,28),Mk(4128,`string`),Kg()(),Jc(4129,`td`,24)(4130,`em`)(4131,`strong`),Mk(4132,`(opcional)`),Kg()(),Jc(4133,`p`),Mk(4134,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Jc(4135,`code`),Mk(4136,`HH:mm`),Kg(),Mk(4137,` ou `),Jc(4138,`code`),Mk(4139,`HH:mm:ss`),Kg(),Mk(4140,`.`),Kg(),Jc(4141,`p`)(4142,`strong`),Mk(4143,`Componente compatível:`),Kg(),Jc(4144,`code`),Mk(4145,`po-datetimepicker`),Kg(),Mk(4146,`, `),Jc(4147,`code`),Mk(4148,`po-timepicker`),Kg()()()(),Jc(4149,`tr`,194)(4150,`td`,17)(4151,`div`,26)(4152,`span`,27),Mk(4153,` minValue`),_u(4154,`br`),Kg()()(),Jc(4155,`td`,21)(4156,`code`,28),Mk(4157,`string `),Kg(),Jc(4158,`code`,102),Mk(4159,` number`),Kg()(),Jc(4160,`td`,24)(4161,`em`)(4162,`strong`),Mk(4163,`(opcional)`),Kg()(),Jc(4164,`p`),Mk(4165,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Jc(4166,`em`),Mk(4167,`number`),Kg(),Mk(4168,`, `),Jc(4169,`em`),Mk(4170,`date`),Kg(),Mk(4171,`, `),Jc(4172,`em`),Mk(4173,`dateTime`),Kg(),Mk(4174,` ou `),Jc(4175,`em`),Mk(4176,`time`),Kg(),Mk(4177,`.`),Kg(),Jc(4178,`blockquote`)(4179,`p`),Mk(4180,`Para `),Jc(4181,`code`),Mk(4182,`po-timepicker`),Kg(),Mk(4183,`, o valor deve estar no formato `),Jc(4184,`code`),Mk(4185,`HH:mm`),Kg(),Mk(4186,` ou `),Jc(4187,`code`),Mk(4188,`HH:mm:ss`),Kg(),Mk(4189,`.`),Kg()(),Jc(4190,`p`)(4191,`strong`),Mk(4192,`Componentes compatíveis:`),Kg(),Jc(4193,`code`),Mk(4194,`po-datepicker`),Kg(),Mk(4195,`, `),Jc(4196,`code`),Mk(4197,`po-datepicker-range`),Kg(),Mk(4198,`, `),Jc(4199,`code`),Mk(4200,`po-number`),Kg(),Mk(4201,`, `),Jc(4202,`code`),Mk(4203,`po-decimal`),Kg(),Mk(4204,`, `),Jc(4205,`code`),Mk(4206,`po-timepicker`),Kg()()()(),Jc(4207,`tr`,195)(4208,`td`,17)(4209,`div`,26)(4210,`span`,27),Mk(4211,` minuteInterval`),_u(4212,`br`),Kg()()(),Jc(4213,`td`,21)(4214,`code`,102),Mk(4215,`number`),Kg()(),Jc(4216,`td`,24)(4217,`em`)(4218,`strong`),Mk(4219,`(opcional)`),Kg()(),Jc(4220,`p`),Mk(4221,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),Kg()()(),Jc(4222,`tr`,196)(4223,`td`,17)(4224,`div`,26)(4225,`span`,27),Mk(4226,` mode`),_u(4227,`br`),Kg()()(),Jc(4228,`td`,21)(4229,`code`,197),Mk(4230,`'month-year' `),Kg(),Jc(4231,`code`,198),Mk(4232,` 'year'`),Kg()(),Jc(4233,`td`,24)(4234,`em`)(4235,`strong`),Mk(4236,`(opcional)`),Kg()(),Jc(4237,`p`),Mk(4238,`Define o modo de seleção do `),Jc(4239,`code`),Mk(4240,`po-datepicker`),Kg(),Mk(4241,`.`),Kg(),Jc(4242,`p`),Mk(4243,`Valores aceitos:`),Kg(),Jc(4244,`ul`)(4245,`li`)(4246,`code`),Mk(4247,`'month-year'`),Kg(),Mk(4248,`: exibe seleção de mês e ano (formato `),Jc(4249,`code`),Mk(4250,`MM/YYYY`),Kg(),Mk(4251,`)`),Kg(),Jc(4252,`li`)(4253,`code`),Mk(4254,`'year'`),Kg(),Mk(4255,`: exibe seleção apenas de ano (formato `),Jc(4256,`code`),Mk(4257,`YYYY`),Kg(),Mk(4258,`)`),Kg()(),Jc(4259,`p`)(4260,`strong`),Mk(4261,`Componente compatível:`),Kg(),Jc(4262,`code`),Mk(4263,`po-datepicker`),Kg()()()(),Jc(4264,`tr`,199)(4265,`td`,17)(4266,`div`,26)(4267,`span`,27),Mk(4268,` modelFormat`),_u(4269,`br`),Kg()()(),Jc(4270,`td`,21)(4271,`code`,200),Mk(4272,`PoTimepickerModelFormat`),Kg()(),Jc(4273,`td`,24)(4274,`em`)(4275,`strong`),Mk(4276,`(opcional)`),Kg()(),Jc(4277,`p`),Mk(4278,`Define o formato do valor do horário a ser utilizado no model do `),Jc(4279,`code`),Mk(4280,`po-timepicker`),Kg(),Mk(4281,`.`),Kg(),Jc(4282,`blockquote`)(4283,`p`),Mk(4284,`Veja os valores válidos no `),Jc(4285,`code`),Mk(4286,`PoTimepickerModelFormat`),Kg(),Mk(4287,`.`),Kg()(),Jc(4288,`p`)(4289,`strong`),Mk(4290,`Componente compatível:`),Kg(),Jc(4291,`code`),Mk(4292,`po-timepicker`),Kg()()()(),Jc(4293,`tr`,201)(4294,`td`,17)(4295,`div`,26)(4296,`span`,27),Mk(4297,` multiple`),_u(4298,`br`),Kg()()(),Jc(4299,`td`,21)(4300,`code`,32),Mk(4301,`boolean`),Kg()(),Jc(4302,`td`,24)(4303,`em`)(4304,`strong`),Mk(4305,`(opcional)`),Kg()(),Jc(4306,`p`),Mk(4307,`Permite a seleção de múltiplos itens.`),Kg(),Jc(4308,`p`)(4309,`strong`),Mk(4310,`Componentes compatíveis:`),Kg(),Jc(4311,`code`),Mk(4312,`po-lookup`),Kg(),Mk(4313,`, `),Jc(4314,`code`),Mk(4315,`po-upload`),Kg()()()(),Jc(4316,`tr`,202)(4317,`td`,17)(4318,`div`,26)(4319,`span`,27),Mk(4320,` noAutocomplete`),_u(4321,`br`),Kg()()(),Jc(4322,`td`,21)(4323,`code`,32),Mk(4324,`boolean`),Kg()(),Jc(4325,`td`,24)(4326,`em`)(4327,`strong`),Mk(4328,`(opcional)`),Kg()(),Jc(4329,`p`),Mk(4330,`Define a propriedade nativa `),Jc(4331,`code`),Mk(4332,`autocomplete`),Kg(),Mk(4333,` do campo como off.`),Kg(),Jc(4334,`p`)(4335,`strong`),Mk(4336,`Componentes compatíveis:`),Kg(),Jc(4337,`code`),Mk(4338,`po-datepicker`),Kg(),Mk(4339,`, `),Jc(4340,`code`),Mk(4341,`po-datepicker-range`),Kg(),Mk(4342,`, `),Jc(4343,`code`),Mk(4344,`po-input`),Kg(),Mk(4345,`, `),Jc(4346,`code`),Mk(4347,`po-number`),Kg(),Mk(4348,`, `),Jc(4349,`code`),Mk(4350,`po-decimal`),Kg(),Mk(4351,`,
`),Jc(4352,`code`),Mk(4353,`po-lookup`),Kg(),Mk(4354,`, `),Jc(4355,`code`),Mk(4356,`po-password`),Kg(),Mk(4357,`, `),Jc(4358,`code`),Mk(4359,`po-timepicker`),Kg(),Mk(4360,`.`),Kg()()(),Jc(4361,`tr`,203)(4362,`td`,17)(4363,`div`,26)(4364,`span`,27),Mk(4365,` offsetColumns`),_u(4366,`br`),Kg()()(),Jc(4367,`td`,21)(4368,`code`,102),Mk(4369,`number`),Kg()(),Jc(4370,`td`,24)(4371,`em`)(4372,`strong`),Mk(4373,`(opcional)`),Kg()(),Jc(4374,`p`),Mk(4375,`Tamanho do espaço de exibição do campo em telas.`),Kg(),Jc(4376,`p`),Mk(4377,`Deve ser usado o sistema de `),Jc(4378,`strong`),Mk(4379,`grid`),Kg(),Mk(4380,` do PO (1 ... 12 colunas).`),Kg(),Jc(4381,`blockquote`)(4382,`p`),Mk(4383,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),Kg()()()(),Jc(4384,`tr`,204)(4385,`td`,17)(4386,`div`,26)(4387,`span`,27),Mk(4388,` offsetLgColumns`),_u(4389,`br`),Kg()()(),Jc(4390,`td`,21)(4391,`code`,102),Mk(4392,`number`),Kg()(),Jc(4393,`td`,24)(4394,`em`)(4395,`strong`),Mk(4396,`(opcional)`),Kg()(),Jc(4397,`p`),Mk(4398,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),Kg(),Jc(4399,`p`),Mk(4400,`Deve ser usado o sistema de `),Jc(4401,`strong`),Mk(4402,`grid`),Kg(),Mk(4403,` do PO (1 ... 12 colunas).`),Kg(),Jc(4404,`blockquote`)(4405,`p`),Mk(4406,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4407,`code`),Mk(4408,`offsetColumns`),Kg(),Mk(4409,`.`),Kg()()()(),Jc(4410,`tr`,205)(4411,`td`,17)(4412,`div`,26)(4413,`span`,27),Mk(4414,` offsetMdColumns`),_u(4415,`br`),Kg()()(),Jc(4416,`td`,21)(4417,`code`,102),Mk(4418,`number`),Kg()(),Jc(4419,`td`,24)(4420,`em`)(4421,`strong`),Mk(4422,`(opcional)`),Kg()(),Jc(4423,`p`),Mk(4424,`Tamanho do espaço de exibição do campo em telas médias (md).`),Kg(),Jc(4425,`p`),Mk(4426,`Deve ser usado o sistema de `),Jc(4427,`strong`),Mk(4428,`grid`),Kg(),Mk(4429,` do PO (1 ... 12 colunas).`),Kg(),Jc(4430,`blockquote`)(4431,`p`),Mk(4432,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4433,`code`),Mk(4434,`offsetColumns`),Kg(),Mk(4435,`.`),Kg()()()(),Jc(4436,`tr`,206)(4437,`td`,17)(4438,`div`,26)(4439,`span`,27),Mk(4440,` offsetSmColumns`),_u(4441,`br`),Kg()()(),Jc(4442,`td`,21)(4443,`code`,102),Mk(4444,`number`),Kg()(),Jc(4445,`td`,24)(4446,`em`)(4447,`strong`),Mk(4448,`(opcional)`),Kg()(),Jc(4449,`p`),Mk(4450,`Tamanho do espaço de exibição do campo em telas menores (sm).`),Kg(),Jc(4451,`p`),Mk(4452,`Deve ser usado o sistema de `),Jc(4453,`strong`),Mk(4454,`grid`),Kg(),Mk(4455,` do PO (1 ... 12 colunas).`),Kg(),Jc(4456,`blockquote`)(4457,`p`),Mk(4458,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4459,`code`),Mk(4460,`offsetColumns`),Kg(),Mk(4461,`.`),Kg()()()(),Jc(4462,`tr`,207)(4463,`td`,17)(4464,`div`,26)(4465,`span`,27),Mk(4466,` offsetXlColumns`),_u(4467,`br`),Kg()()(),Jc(4468,`td`,21)(4469,`code`,102),Mk(4470,`number`),Kg()(),Jc(4471,`td`,24)(4472,`em`)(4473,`strong`),Mk(4474,`(opcional)`),Kg()(),Jc(4475,`p`),Mk(4476,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),Kg(),Jc(4477,`p`),Mk(4478,`Deve ser usado o sistema de `),Jc(4479,`strong`),Mk(4480,`grid`),Kg(),Mk(4481,` do PO (1 ... 12 colunas).`),Kg(),Jc(4482,`blockquote`)(4483,`p`),Mk(4484,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4485,`code`),Mk(4486,`offsetColumns`),Kg(),Mk(4487,`.`),Kg()()()(),Jc(4488,`tr`,208)(4489,`td`,17)(4490,`div`,26)(4491,`span`,27),Mk(4492,` onError`),_u(4493,`br`),Kg()()(),Jc(4494,`td`,21)(4495,`code`,89),Mk(4496,`Function`),Kg()(),Jc(4497,`td`,24)(4498,`em`)(4499,`strong`),Mk(4500,`(opcional)`),Kg()(),Jc(4501,`p`),Mk(4502,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Kg(),Jc(4503,`blockquote`)(4504,`p`),Mk(4505,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(4506,`code`),Mk(4507,`HttpErrorResponse`),Kg(),Mk(4508,`.`),Kg()(),Jc(4509,`p`)(4510,`strong`),Mk(4511,`Componente compatível`),Kg(),Mk(4512,`: `),Jc(4513,`code`),Mk(4514,`po-upload`),Kg()()()(),Jc(4515,`tr`,209)(4516,`td`,17)(4517,`div`,26)(4518,`span`,27),Mk(4519,` onSuccess`),_u(4520,`br`),Kg()()(),Jc(4521,`td`,21)(4522,`code`,89),Mk(4523,`Function`),Kg()(),Jc(4524,`td`,24)(4525,`em`)(4526,`strong`),Mk(4527,`(opcional)`),Kg()(),Jc(4528,`p`),Mk(4529,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Kg(),Jc(4530,`blockquote`)(4531,`p`),Mk(4532,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(4533,`code`),Mk(4534,`HttpResponse`),Kg(),Mk(4535,`.`),Kg()(),Jc(4536,`p`)(4537,`strong`),Mk(4538,`Componente compatível`),Kg(),Mk(4539,`: `),Jc(4540,`code`),Mk(4541,`po-upload`),Kg()()()(),Jc(4542,`tr`,210)(4543,`td`,17)(4544,`div`,26)(4545,`span`,27),Mk(4546,` onUpload`),_u(4547,`br`),Kg()()(),Jc(4548,`td`,21)(4549,`code`,89),Mk(4550,`Function`),Kg()(),Jc(4551,`td`,24)(4552,`em`)(4553,`strong`),Mk(4554,`(opcional)`),Kg()(),Jc(4555,`p`),Mk(4556,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Kg(),Jc(4557,`pre`)(4558,`code`),Mk(4559,`event.data = {id: 'id do usu\xE1rio'};
`),Kg()(),Jc(4560,`p`)(4561,`strong`),Mk(4562,`Componente compatível`),Kg(),Mk(4563,`: `),Jc(4564,`code`),Mk(4565,`po-upload`),Kg()()()(),Jc(4566,`tr`,211)(4567,`td`,17)(4568,`div`,26)(4569,`span`,27),Mk(4570,` optional`),_u(4571,`br`),Kg()()(),Jc(4572,`td`,21)(4573,`code`,32),Mk(4574,`boolean`),Kg()(),Jc(4575,`td`,24)(4576,`em`)(4577,`strong`),Mk(4578,`(opcional)`),Kg()(),Jc(4579,`p`),Mk(4580,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(4581,`blockquote`)(4582,`p`),Mk(4583,`A indicação não será exibida, se:`),Kg()(),Jc(4584,`ul`)(4585,`li`),Mk(4586,`O campo for `),Jc(4587,`code`),Mk(4588,`required`),Kg(),Mk(4589,`, ou;`),Kg(),Jc(4590,`li`),Mk(4591,`Não possuir `),Jc(4592,`code`),Mk(4593,`help`),Kg(),Mk(4594,` e `),Jc(4595,`code`),Mk(4596,`label`),Kg(),Mk(4597,`.`),Kg()(),Jc(4598,`p`)(4599,`strong`),Mk(4600,`Componentes compatíveis:`),Kg(),Jc(4601,`code`),Mk(4602,`po-datepicker`),Kg(),Mk(4603,`, `),Jc(4604,`code`),Mk(4605,`po-datepicker-range`),Kg(),Mk(4606,`, `),Jc(4607,`code`),Mk(4608,`po-timepicker`),Kg(),Mk(4609,`, `),Jc(4610,`code`),Mk(4611,`po-input`),Kg(),Mk(4612,`, `),Jc(4613,`code`),Mk(4614,`po-number`),Kg(),Mk(4615,`,
`),Jc(4616,`code`),Mk(4617,`po-decimal`),Kg(),Mk(4618,`, `),Jc(4619,`code`),Mk(4620,`po-select`),Kg(),Mk(4621,`, `),Jc(4622,`code`),Mk(4623,`po-radio-group`),Kg(),Mk(4624,`, `),Jc(4625,`code`),Mk(4626,`po-combo`),Kg(),Mk(4627,`, `),Jc(4628,`code`),Mk(4629,`po-lookup`),Kg(),Mk(4630,`, `),Jc(4631,`code`),Mk(4632,`po-checkbox-group`),Kg(),Mk(4633,`, `),Jc(4634,`code`),Mk(4635,`po-multiselect`),Kg(),Mk(4636,`,
`),Jc(4637,`code`),Mk(4638,`po-textarea`),Kg(),Mk(4639,`, `),Jc(4640,`code`),Mk(4641,`po-password`),Kg(),Mk(4642,`.`),Kg()()(),Jc(4643,`tr`,212)(4644,`td`,17)(4645,`div`,26)(4646,`span`,27),Mk(4647,` options`),_u(4648,`br`),Kg()()(),Jc(4649,`td`,21)(4650,`code`,48),Mk(4651,`Array<string> `),Kg(),Jc(4652,`code`,213),Mk(4653,` Array<PoSelectOption> `),Kg(),Jc(4654,`code`,214),Mk(4655,` Array<PoMultiselectOption> `),Kg(),Jc(4656,`code`,215),Mk(4657,` Array<PoCheckboxGroupOption> `),Kg(),Jc(4658,`code`,216),Mk(4659,` Array<any>`),Kg()(),Jc(4660,`td`,24)(4661,`em`)(4662,`strong`),Mk(4663,`(opcional)`),Kg()(),Jc(4664,`p`),Mk(4665,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),Kg(),Jc(4666,`p`)(4667,`strong`),Mk(4668,`Componentes compatíveis:`),Kg(),Jc(4669,`code`),Mk(4670,`po-select`),Kg(),Mk(4671,`, `),Jc(4672,`code`),Mk(4673,`po-radio-group`),Kg(),Mk(4674,`, `),Jc(4675,`code`),Mk(4676,`po-checkbox-group`),Kg(),Mk(4677,`, `),Jc(4678,`code`),Mk(4679,`po-multiselect`),Kg(),Mk(4680,`.`),Kg()()(),Jc(4681,`tr`,217)(4682,`td`,17)(4683,`div`,26)(4684,`span`,27),Mk(4685,` optionsMulti`),_u(4686,`br`),Kg()()(),Jc(4687,`td`,21)(4688,`code`,32),Mk(4689,`boolean`),Kg()(),Jc(4690,`td`,24)(4691,`em`)(4692,`strong`),Mk(4693,`(opcional)`),Kg()(),Jc(4694,`p`),Mk(4695,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),Kg()()(),Jc(4696,`tr`,218)(4697,`td`,17)(4698,`div`,26)(4699,`span`,27),Mk(4700,` optionsService`),_u(4701,`br`),Kg()()(),Jc(4702,`td`,21)(4703,`code`,28),Mk(4704,`string `),Kg(),Jc(4705,`code`,219),Mk(4706,` PoComboFilter `),Kg(),Jc(4707,`code`,220),Mk(4708,` PoMultiselectFilter`),Kg()(),Jc(4709,`td`,24)(4710,`em`)(4711,`strong`),Mk(4712,`(opcional)`),Kg()(),Jc(4713,`p`),Mk(4714,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Jc(4715,`strong`),Mk(4716,`Importante`),Kg()(),Jc(4717,`blockquote`)(4718,`p`),Mk(4719,`Para que funcione corretamente, é importante que o serviço siga o `),Jc(4720,`a`,7),Mk(4721,`guia de API do PO UI`),Kg(),Mk(4722,`.`),Kg()()()(),Jc(4723,`tr`,221)(4724,`td`,17)(4725,`div`,26)(4726,`span`,27),Mk(4727,` order`),_u(4728,`br`),Kg()()(),Jc(4729,`td`,21)(4730,`code`,102),Mk(4731,`number`),Kg()(),Jc(4732,`td`,24)(4733,`em`)(4734,`strong`),Mk(4735,`(opcional)`),Kg()(),Jc(4736,`p`),Mk(4737,`Informa a ordem de exibição do campo.`),Kg(),Jc(4738,`p`),Mk(4739,`Exemplo de utilização:`),Kg(),Jc(4740,`p`)(4741,`code`),Mk(4742,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),Kg()(),Jc(4743,`p`),Mk(4744,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Jc(4745,`code`),Mk(4746,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),Kg()(),Jc(4747,`p`),Mk(4748,`Só serão aceitos valores com números inteiros maiores do que zero.`),Kg(),Jc(4749,`p`),Mk(4750,`Campos sem `),Jc(4751,`code`),Mk(4752,`order`),Kg(),Mk(4753,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),Kg()()(),Jc(4754,`tr`,222)(4755,`td`,17)(4756,`div`,26)(4757,`span`,27),Mk(4758,` params`),_u(4759,`br`),Kg()()(),Jc(4760,`td`,21)(4761,`code`,52),Mk(4762,`any`),Kg()(),Jc(4763,`td`,24)(4764,`em`)(4765,`strong`),Mk(4766,`(opcional)`),Kg()(),Jc(4767,`p`),Mk(4768,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Jc(4769,`code`),Mk(4770,`po-lookup`),Kg(),Mk(4771,` e
`),Jc(4772,`code`),Mk(4773,`po-combo`),Kg(),Mk(4774,`.`),Kg(),Jc(4775,`p`),Mk(4776,`Por exemplo, para o parâmetro `),Jc(4777,`code`),Mk(4778,`{ age: 23 }`),Kg(),Mk(4779,` a URL da requisição ficaria:`),Kg(),Jc(4780,`p`)(4781,`code`),Mk(4782,`url + ?age=23&filter=Peter`),Kg()()()(),Jc(4783,`tr`,223)(4784,`td`,17)(4785,`div`,26)(4786,`span`,27),Mk(4787,` pattern`),_u(4788,`br`),Kg()()(),Jc(4789,`td`,21)(4790,`code`,28),Mk(4791,`string`),Kg()(),Jc(4792,`td`,24)(4793,`em`)(4794,`strong`),Mk(4795,`(opcional)`),Kg()(),Jc(4796,`p`),Mk(4797,`Regex para validação do campo.`),Kg(),Jc(4798,`p`)(4799,`strong`),Mk(4800,`Componentes compatíveis:`),Kg(),Jc(4801,`code`),Mk(4802,`po-input`),Kg(),Mk(4803,`, `),Jc(4804,`code`),Mk(4805,`po-password`),Kg(),Mk(4806,`.`),Kg(),Jc(4807,`blockquote`)(4808,`p`),Mk(4809,`Incompatível com `),Jc(4810,`code`),Mk(4811,`po-decimal`),Kg(),Mk(4812,`.`),Kg()()()(),Jc(4813,`tr`,224)(4814,`td`,17)(4815,`div`,26)(4816,`span`,27),Mk(4817,` placeholder`),_u(4818,`br`),Kg()()(),Jc(4819,`td`,21)(4820,`code`,28),Mk(4821,`string`),Kg()(),Jc(4822,`td`,24)(4823,`em`)(4824,`strong`),Mk(4825,`(opcional)`),Kg()(),Jc(4826,`p`),Mk(4827,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),Kg(),Jc(4828,`p`)(4829,`strong`),Mk(4830,`Componentes compatíveis:`),Kg(),Jc(4831,`code`),Mk(4832,`po-datepicker`),Kg(),Mk(4833,`, `),Jc(4834,`code`),Mk(4835,`po-datepicker-range`),Kg(),Mk(4836,`, `),Jc(4837,`code`),Mk(4838,`po-timepicker`),Kg(),Mk(4839,`, `),Jc(4840,`code`),Mk(4841,`po-input`),Kg(),Mk(4842,`, `),Jc(4843,`code`),Mk(4844,`po-number`),Kg(),Mk(4845,`, `),Jc(4846,`code`),Mk(4847,`po-decimal`),Kg(),Mk(4848,`, `),Jc(4849,`code`),Mk(4850,`po-select`),Kg(),Mk(4851,`, `),Jc(4852,`code`),Mk(4853,`po-combo`),Kg(),Mk(4854,`, `),Jc(4855,`code`),Mk(4856,`po-lookup`),Kg(),Mk(4857,`, `),Jc(4858,`code`),Mk(4859,`po-multiselect`),Kg(),Mk(4860,`, `),Jc(4861,`code`),Mk(4862,`po-textarea`),Kg(),Mk(4863,`, `),Jc(4864,`code`),Mk(4865,`po-password`),Kg(),Mk(4866,`.`),Kg()()(),Jc(4867,`tr`,225)(4868,`td`,17)(4869,`div`,26)(4870,`span`,27),Mk(4871,` placeholderSearch`),_u(4872,`br`),Kg()()(),Jc(4873,`td`,21)(4874,`code`,28),Mk(4875,`string`),Kg()(),Jc(4876,`td`,24)(4877,`em`)(4878,`strong`),Mk(4879,`(opcional)`),Kg()(),Jc(4880,`p`),Mk(4881,`Placeholder do campo de pesquisa do `),Jc(4882,`code`),Mk(4883,`po-multiselect`),Kg(),Mk(4884,`.`),Kg(),Jc(4885,`blockquote`)(4886,`p`),Mk(4887,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Kg()()()(),Jc(4888,`tr`,226)(4889,`td`,17)(4890,`div`,26)(4891,`span`,27),Mk(4892,` property`),_u(4893,`br`),Kg()()(),Jc(4894,`td`,21)(4895,`code`,28),Mk(4896,`string`),Kg()(),Jc(4897,`td`,24)(4898,`p`),Mk(4899,`Nome de referência do campo.`),Kg()()(),Jc(4900,`tr`,227)(4901,`td`,17)(4902,`div`,26)(4903,`span`,27),Mk(4904,` range`),_u(4905,`br`),Kg()()(),Jc(4906,`td`,21)(4907,`code`,32),Mk(4908,`boolean`),Kg()(),Jc(4909,`td`,24)(4910,`em`)(4911,`strong`),Mk(4912,`(opcional)`),Kg()(),Jc(4913,`p`),Mk(4914,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),Kg(),Jc(4915,`blockquote`)(4916,`p`),Mk(4917,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),Kg()()()(),Jc(4918,`tr`,228)(4919,`td`,17)(4920,`div`,26)(4921,`span`,27),Mk(4922,` rangePresetOptions`),_u(4923,`br`),Kg()()(),Jc(4924,`td`,21)(4925,`code`,229),Mk(4926,`Array<PoCalendarRangePreset>`),Kg()(),Jc(4927,`td`,24)(4928,`em`)(4929,`strong`),Mk(4930,`(opcional)`),Kg()(),Jc(4931,`p`),Mk(4932,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),Kg(),Jc(4933,`p`),Mk(4934,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Jc(4935,`code`),Mk(4936,`PoCalendarRangePreset`),Kg(),Mk(4937,`.`),Kg(),Jc(4938,`p`)(4939,`strong`),Mk(4940,`Componente compatível:`),Kg(),Jc(4941,`code`),Mk(4942,`po-datepicker-range`),Kg()()()(),Jc(4943,`tr`,230)(4944,`td`,17)(4945,`div`,26)(4946,`span`,27),Mk(4947,` rangePresets`),_u(4948,`br`),Kg()()(),Jc(4949,`td`,21)(4950,`code`,32),Mk(4951,`boolean `),Kg(),Jc(4952,`code`,48),Mk(4953,` Array<string>`),Kg()(),Jc(4954,`td`,24)(4955,`em`)(4956,`strong`),Mk(4957,`(opcional)`),Kg()(),Jc(4958,`p`),Mk(4959,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),Kg(),Jc(4960,`p`),Mk(4961,`Aceita os seguintes valores:`),Kg(),Jc(4962,`ul`)(4963,`li`)(4964,`code`),Mk(4965,`true`),Kg(),Mk(4966,`: exibe todos os presets padrão.`),Kg(),Jc(4967,`li`)(4968,`code`),Mk(4969,`false`),Kg(),Mk(4970,`: não exibe os presets padrão.`),Kg(),Jc(4971,`li`)(4972,`code`),Mk(4973,`Array<string>`),Kg(),Mk(4974,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),Kg()(),Jc(4975,`p`)(4976,`strong`),Mk(4977,`Componente compatível:`),Kg(),Jc(4978,`code`),Mk(4979,`po-datepicker-range`),Kg()()()(),Jc(4980,`tr`,231)(4981,`td`,17)(4982,`div`,26)(4983,`span`,27),Mk(4984,` rangePresetsOrder`),_u(4985,`br`),Kg()()(),Jc(4986,`td`,21)(4987,`code`,232),Mk(4988,`'asc' `),Kg(),Jc(4989,`code`,233),Mk(4990,` 'desc'`),Kg()(),Jc(4991,`td`,24)(4992,`em`)(4993,`strong`),Mk(4994,`(opcional)`),Kg()(),Jc(4995,`p`),Mk(4996,`Define a ordenação dos presets na lista.`),Kg(),Jc(4997,`p`),Mk(4998,`Valores aceitos:`),Kg(),Jc(4999,`ul`)(5e3,`li`)(5001,`code`),Mk(5002,`'asc'`),Kg(),Mk(5003,`: ordenação crescente (passado → futuro)`),Kg(),Jc(5004,`li`)(5005,`code`),Mk(5006,`'desc'`),Kg(),Mk(5007,`: ordenação decrescente (futuro → passado)`),Kg()(),Jc(5008,`p`)(5009,`strong`),Mk(5010,`Componente compatível:`),Kg(),Jc(5011,`code`),Mk(5012,`po-datepicker-range`),Kg()()()(),Jc(5013,`tr`,234)(5014,`td`,17)(5015,`div`,26)(5016,`span`,27),Mk(5017,` readonly`),_u(5018,`br`),Kg()()(),Jc(5019,`td`,21)(5020,`code`,32),Mk(5021,`boolean`),Kg()(),Jc(5022,`td`,24)(5023,`em`)(5024,`strong`),Mk(5025,`(opcional)`),Kg()(),Jc(5026,`p`),Mk(5027,`Indica que o campo será somente leitura.`),Kg(),Jc(5028,`p`)(5029,`strong`),Mk(5030,`Componentes compatíveis:`),Kg(),Jc(5031,`code`),Mk(5032,`po-datepicker`),Kg(),Mk(5033,`, `),Jc(5034,`code`),Mk(5035,`po-datepicker-range`),Kg(),Mk(5036,`, `),Jc(5037,`code`),Mk(5038,`po-timepicker`),Kg(),Mk(5039,`, `),Jc(5040,`code`),Mk(5041,`po-input`),Kg(),Mk(5042,`, `),Jc(5043,`code`),Mk(5044,`po-number`),Kg(),Mk(5045,`,
`),Jc(5046,`code`),Mk(5047,`po-decimal`),Kg(),Mk(5048,`, `),Jc(5049,`code`),Mk(5050,`po-select`),Kg(),Mk(5051,`, `),Jc(5052,`code`),Mk(5053,`po-textarea`),Kg(),Mk(5054,`, `),Jc(5055,`code`),Mk(5056,`po-password`),Kg(),Mk(5057,`.`),Kg()()(),Jc(5058,`tr`,235)(5059,`td`,17)(5060,`div`,26)(5061,`span`,27),Mk(5062,` removeInitialFilter`),_u(5063,`br`),Kg()()(),Jc(5064,`td`,21)(5065,`code`,32),Mk(5066,`boolean`),Kg()(),Jc(5067,`td`,24)(5068,`em`)(5069,`strong`),Mk(5070,`(opcional)`),Kg()(),Jc(5071,`p`),Mk(5072,`Define que o filtro no primeiro clique será removido.`),Kg(),Jc(5073,`blockquote`)(5074,`p`),Mk(5075,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),Kg()(),Jc(5076,`p`)(5077,`strong`),Mk(5078,`Componente compatível`),Kg(),Mk(5079,`: `),Jc(5080,`code`),Mk(5081,`po-combo`),Kg()()()(),Jc(5082,`tr`,236)(5083,`td`,17)(5084,`div`,26)(5085,`span`,27),Mk(5086,` required`),_u(5087,`br`),Kg()()(),Jc(5088,`td`,21)(5089,`code`,32),Mk(5090,`boolean`),Kg()(),Jc(5091,`td`,24)(5092,`em`)(5093,`strong`),Mk(5094,`(opcional)`),Kg()(),Jc(5095,`p`),Mk(5096,`Define a obrigatoriedade do campo.`),Kg(),Jc(5097,`p`)(5098,`strong`),Mk(5099,`Componentes compatíveis:`),Kg(),Jc(5100,`code`),Mk(5101,`po-datepicker`),Kg(),Mk(5102,`, `),Jc(5103,`code`),Mk(5104,`po-datepicker-range`),Kg(),Mk(5105,`, `),Jc(5106,`code`),Mk(5107,`po-timepicker`),Kg(),Mk(5108,`, `),Jc(5109,`code`),Mk(5110,`po-input`),Kg(),Mk(5111,`, `),Jc(5112,`code`),Mk(5113,`po-number`),Kg(),Mk(5114,`,
`),Jc(5115,`code`),Mk(5116,`po-decimal`),Kg(),Mk(5117,`, `),Jc(5118,`code`),Mk(5119,`po-select`),Kg(),Mk(5120,`, `),Jc(5121,`code`),Mk(5122,`po-radio-group`),Kg(),Mk(5123,`, `),Jc(5124,`code`),Mk(5125,`po-combo`),Kg(),Mk(5126,`, `),Jc(5127,`code`),Mk(5128,`po-lookup`),Kg(),Mk(5129,`, `),Jc(5130,`code`),Mk(5131,`po-checkbox-group`),Kg(),Mk(5132,`, `),Jc(5133,`code`),Mk(5134,`po-multiselect`),Kg(),Mk(5135,`,
`),Jc(5136,`code`),Mk(5137,`po-textarea`),Kg(),Mk(5138,`, `),Jc(5139,`code`),Mk(5140,"po-password``, "),Kg(),Mk(5141,"po-upload`."),Kg()()(),Jc(5142,`tr`,237)(5143,`td`,17)(5144,`div`,26)(5145,`span`,27),Mk(5146,` requiredFieldErrorMessage`),_u(5147,`br`),Kg()()(),Jc(5148,`td`,21)(5149,`code`,32),Mk(5150,`boolean`),Kg()(),Jc(5151,`td`,24)(5152,`em`)(5153,`strong`),Mk(5154,`(opcional)`),Kg()(),Jc(5155,`p`),Mk(5156,`Exibe a mensagem setada na propriedade `),Jc(5157,`code`),Mk(5158,`errorMessage`),Kg(),Mk(5159,` se o campo estiver vazio e for requerido.`),Kg(),Jc(5160,`blockquote`)(5161,`p`),Mk(5162,`Necessário que a propriedade `),Jc(5163,`code`),Mk(5164,`required`),Kg(),Mk(5165,` esteja habilitada.`),Kg()(),Jc(5166,`p`)(5167,`strong`),Mk(5168,`Componentes compatíveis:`),Kg(),Jc(5169,`code`),Mk(5170,`po-datepicker`),Kg(),Mk(5171,`, `),Jc(5172,`code`),Mk(5173,`po-timepicker`),Kg(),Mk(5174,`, `),Jc(5175,`code`),Mk(5176,`po-input`),Kg(),Mk(5177,`, `),Jc(5178,`code`),Mk(5179,`po-number`),Kg(),Mk(5180,`, `),Jc(5181,`code`),Mk(5182,`po-decimal`),Kg(),Mk(5183,`, `),Jc(5184,`code`),Mk(5185,`po-password`),Kg(),Mk(5186,`.`),Kg()()(),Jc(5187,`tr`,238)(5188,`td`,17)(5189,`div`,26)(5190,`span`,27),Mk(5191,` restrictions`),_u(5192,`br`),Kg()()(),Jc(5193,`td`,21)(5194,`code`,239),Mk(5195,`PoUploadFileRestrictions`),Kg()(),Jc(5196,`td`,24)(5197,`em`)(5198,`strong`),Mk(5199,`(opcional)`),Kg()(),Jc(5200,`p`),Mk(5201,`Objeto que segue a definição da interface `),Jc(5202,`code`),Mk(5203,`PoUploadFileRestrictions`),Kg(),Mk(5204,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Kg(),Jc(5205,`p`)(5206,`strong`),Mk(5207,`Componente compatível`),Kg(),Mk(5208,`: `),Jc(5209,`code`),Mk(5210,`po-upload`),Kg()()()(),Jc(5211,`tr`,240)(5212,`td`,17)(5213,`div`,26)(5214,`span`,27),Mk(5215,` rows`),_u(5216,`br`),Kg()()(),Jc(5217,`td`,21)(5218,`code`,102),Mk(5219,`number`),Kg()(),Jc(5220,`td`,24)(5221,`em`)(5222,`strong`),Mk(5223,`(opcional)`),Kg()(),Jc(5224,`p`),Mk(5225,`Quantidade de linhas exibidas no `),Jc(5226,`code`),Mk(5227,`po-textarea`),Kg(),Mk(5228,`.`),Kg()()(),Jc(5229,`tr`,241)(5230,`td`,17)(5231,`div`,26)(5232,`span`,27),Mk(5233,` searchService`),_u(5234,`br`),Kg()()(),Jc(5235,`td`,21)(5236,`code`,28),Mk(5237,`string `),Kg(),Jc(5238,`code`,54),Mk(5239,` PoLookupFilter`),Kg()(),Jc(5240,`td`,24)(5241,`em`)(5242,`strong`),Mk(5243,`(opcional)`),Kg()(),Jc(5244,`p`),Mk(5245,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Jc(5246,`code`),Mk(5247,`columns`),Kg(),Mk(5248,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Jc(5249,`strong`),Mk(5250,`Importante:`),Kg()(),Jc(5251,`blockquote`)(5252,`p`),Mk(5253,`Caso utilizar a propriedade `),Jc(5254,`code`),Mk(5255,`optionsService`),Kg(),Mk(5256,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Jc(5257,`a`,7),Mk(5258,`guia de API do PO UI`),Kg(),Mk(5259,`.`),Kg()()()(),Jc(5260,`tr`,242)(5261,`td`,17)(5262,`div`,26)(5263,`span`,27),Mk(5264,` secondInterval`),_u(5265,`br`),Kg()()(),Jc(5266,`td`,21)(5267,`code`,102),Mk(5268,`number`),Kg()(),Jc(5269,`td`,24)(5270,`em`)(5271,`strong`),Mk(5272,`(opcional)`),Kg()(),Jc(5273,`p`),Mk(5274,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),Kg()()(),Jc(5275,`tr`,243)(5276,`td`,17)(5277,`div`,26)(5278,`span`,27),Mk(5279,` secret`),_u(5280,`br`),Kg()()(),Jc(5281,`td`,21)(5282,`code`,32),Mk(5283,`boolean`),Kg()(),Jc(5284,`td`,24)(5285,`em`)(5286,`strong`),Mk(5287,`(opcional)`),Kg()(),Jc(5288,`p`),Mk(5289,`Esconde a informação estilo `),Jc(5290,`em`),Mk(5291,`password`),Kg(),Mk(5292,`, pode ser utilizado quando o tipo de dado for `),Jc(5293,`em`),Mk(5294,`string`),Kg(),Mk(5295,`.`),Kg()()(),Jc(5296,`tr`,244)(5297,`td`,17)(5298,`div`,26)(5299,`span`,27),Mk(5300,` showRequired`),_u(5301,`br`),Kg()()(),Jc(5302,`td`,21)(5303,`code`,32),Mk(5304,`boolean`),Kg()(),Jc(5305,`td`,24)(5306,`em`)(5307,`strong`),Mk(5308,`(opcional)`),Kg()(),Jc(5309,`p`),Mk(5310,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(5311,`blockquote`)(5312,`p`),Mk(5313,`Não será exibida a indicação se:`),Kg()(),Jc(5314,`ul`)(5315,`li`),Mk(5316,`Não possuir `),Jc(5317,`code`),Mk(5318,`p-help`),Kg(),Mk(5319,` e/ou `),Jc(5320,`code`),Mk(5321,`p-label`),Kg(),Mk(5322,`.`),Kg()(),Jc(5323,`p`)(5324,`strong`),Mk(5325,`Componentes compatíveis:`),Kg(),Jc(5326,`code`),Mk(5327,`po-datepicker`),Kg(),Mk(5328,`, `),Jc(5329,`code`),Mk(5330,`po-datepicker-range`),Kg(),Mk(5331,`, `),Jc(5332,`code`),Mk(5333,`po-timepicker`),Kg(),Mk(5334,`, `),Jc(5335,`code`),Mk(5336,`po-input`),Kg(),Mk(5337,`, `),Jc(5338,`code`),Mk(5339,`po-number`),Kg(),Mk(5340,`,
`),Jc(5341,`code`),Mk(5342,`po-decimal`),Kg(),Mk(5343,`, `),Jc(5344,`code`),Mk(5345,`po-select`),Kg(),Mk(5346,`, `),Jc(5347,`code`),Mk(5348,`po-radio-group`),Kg(),Mk(5349,`, `),Jc(5350,`code`),Mk(5351,`po-combo`),Kg(),Mk(5352,`, `),Jc(5353,`code`),Mk(5354,`po-lookup`),Kg(),Mk(5355,`, `),Jc(5356,`code`),Mk(5357,`po-checkbox-group`),Kg(),Mk(5358,`, `),Jc(5359,`code`),Mk(5360,`po-multiselect`),Kg(),Mk(5361,`,
`),Jc(5362,`code`),Mk(5363,`po-textarea`),Kg(),Mk(5364,`, `),Jc(5365,`code`),Mk(5366,`po-password`),Kg(),Mk(5367,`, `),Jc(5368,`code`),Mk(5369,`po-upload`),Kg(),Mk(5370,`.`),Kg()()(),Jc(5371,`tr`,245)(5372,`td`,17)(5373,`div`,26)(5374,`span`,27),Mk(5375,` showSeconds`),_u(5376,`br`),Kg()()(),Jc(5377,`td`,21)(5378,`code`,32),Mk(5379,`boolean`),Kg()(),Jc(5380,`td`,24)(5381,`em`)(5382,`strong`),Mk(5383,`(opcional)`),Kg()(),Jc(5384,`p`),Mk(5385,`Exibe a coluna de segundos no painel do timepicker.`),Kg()()(),Jc(5386,`tr`,246)(5387,`td`,17)(5388,`div`,26)(5389,`span`,27),Mk(5390,` showThumbnail`),_u(5391,`br`),Kg()()(),Jc(5392,`td`,21)(5393,`code`,32),Mk(5394,`boolean`),Kg()(),Jc(5395,`td`,24)(5396,`em`)(5397,`strong`),Mk(5398,`(opcional)`),Kg()(),Jc(5399,`p`),Mk(5400,`Exibe a pré-visualização de imagens ao anexá-las.`),Kg(),Jc(5401,`blockquote`)(5402,`p`),Mk(5403,`Propriedade funciona apenas em arquivos de formato de imagem (`),Jc(5404,`code`),Mk(5405,`.png`),Kg(),Mk(5406,`, `),Jc(5407,`code`),Mk(5408,`.jpg`),Kg(),Mk(5409,`, `),Jc(5410,`code`),Mk(5411,`.jpeg`),Kg(),Mk(5412,` e `),Jc(5413,`code`),Mk(5414,`.gif`),Kg(),Mk(5415,`).`),Kg()(),Jc(5416,`p`)(5417,`strong`),Mk(5418,`Componente compatível`),Kg(),Mk(5419,`: `),Jc(5420,`code`),Mk(5421,`po-upload`),Kg()()()(),Jc(5422,`tr`,247)(5423,`td`,17)(5424,`div`,26)(5425,`span`,27),Mk(5426,` size`),_u(5427,`br`),Kg()()(),Jc(5428,`td`,21)(5429,`code`,28),Mk(5430,`string`),Kg()(),Jc(5431,`td`,24)(5432,`em`)(5433,`strong`),Mk(5434,`(opcional)`),Kg()(),Jc(5435,`p`),Mk(5436,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),Kg(),Jc(5437,`ul`)(5438,`li`)(5439,`code`),Mk(5440,`small`),Kg(),Mk(5441,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(5442,`li`)(5443,`code`),Mk(5444,`medium`),Kg(),Mk(5445,`: aplica a medida medium de cada componente.`),Kg(),Jc(5446,`li`)(5447,`code`),Mk(5448,`large`),Kg(),Mk(5449,`: aplica a medida large de cada componente (disponível para `),Jc(5450,`code`),Mk(5451,`po-checkbox`),Kg(),Mk(5452,` e `),Jc(5453,`code`),Mk(5454,`po-radio-group`),Kg(),Mk(5455,`).`),Jc(5456,`blockquote`)(5457,`p`),Mk(5458,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(5459,`code`),Mk(5460,`medium`),Kg(),Mk(5461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(5462,`a`,79),Mk(5463,`po-theme`),Kg(),Mk(5464,`.`),Kg()()()()()(),Jc(5465,`tr`,248)(5466,`td`,17)(5467,`div`,26)(5468,`span`,27),Mk(5469,` sort`),_u(5470,`br`),Kg()()(),Jc(5471,`td`,21)(5472,`code`,32),Mk(5473,`boolean`),Kg()(),Jc(5474,`td`,24)(5475,`em`)(5476,`strong`),Mk(5477,`(opcional)`),Kg()(),Jc(5478,`p`),Mk(5479,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Kg(),Jc(5480,`p`)(5481,`strong`),Mk(5482,`Componentes compatíveis:`),Kg(),Jc(5483,`code`),Mk(5484,`po-combo`),Kg(),Mk(5485,`, po-multiselect`),Kg()()(),Jc(5486,`tr`,249)(5487,`td`,17)(5488,`div`,26)(5489,`span`,27),Mk(5490,` step`),_u(5491,`br`),Kg()()(),Jc(5492,`td`,21)(5493,`code`,102),Mk(5494,`number`),Kg()(),Jc(5495,`td`,24)(5496,`em`)(5497,`strong`),Mk(5498,`(opcional)`),Kg()(),Jc(5499,`p`),Mk(5500,`Intervalo utilizado no `),Jc(5501,`code`),Mk(5502,`po-number`),Kg(),Mk(5503,`.`),Kg()()(),Jc(5504,`tr`,250)(5505,`td`,17)(5506,`div`,26)(5507,`span`,27),Mk(5508,` thousandMaxlength`),_u(5509,`br`),Kg()()(),Jc(5510,`td`,21)(5511,`code`,102),Mk(5512,`number`),Kg()(),Jc(5513,`td`,24)(5514,`em`)(5515,`strong`),Mk(5516,`(opcional)`),Kg()(),Jc(5517,`p`),Mk(5518,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),Kg(),Jc(5519,`blockquote`)(5520,`p`),Mk(5521,`Esta propriedade só pode ser utilizada quando o `),Jc(5522,`code`),Mk(5523,`type`),Kg(),Mk(5524,` for `),Jc(5525,`em`),Mk(5526,`currency`),Kg(),Mk(5527,` ou `),Jc(5528,`em`),Mk(5529,`decimal`),Kg(),Mk(5530,`.`),Kg()(),Jc(5531,`blockquote`)(5532,`p`),Mk(5533,`Quando utilizado com `),Jc(5534,`code`),Mk(5535,`displayFormat`),Kg(),Mk(5536,`, será respeitado o valor `),Jc(5537,`strong`),Mk(5538,`mais restritivo`),Kg(),Mk(5539,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),Kg()()()(),Jc(5540,`tr`,251)(5541,`td`,17)(5542,`div`,26)(5543,`span`,27),Mk(5544,` type`),_u(5545,`br`),Kg()()(),Jc(5546,`td`,21)(5547,`code`,28),Mk(5548,`string `),Kg(),Jc(5549,`code`,252),Mk(5550,` PoDynamicFieldType`),Kg()(),Jc(5551,`td`,24)(5552,`em`)(5553,`strong`),Mk(5554,`(opcional)`),Kg()(),Jc(5555,`p`),Mk(5556,`Tipo do valor campo.`),Kg(),Jc(5557,`p`),Mk(5558,`Valores válidos:`),Kg(),Jc(5559,`ul`)(5560,`li`)(5561,`code`),Mk(5562,`boolean`),Kg(),Mk(5563,`: Valores `),Jc(5564,`em`),Mk(5565,`booleanos`),Kg(),Mk(5566,`.`),Kg(),Jc(5567,`li`)(5568,`code`),Mk(5569,`currency`),Kg(),Mk(5570,`: Valores monetários.`),Kg(),Jc(5571,`li`)(5572,`code`),Mk(5573,`decimal`),Kg(),Mk(5574,`: Valores decimais.`),Kg(),Jc(5575,`li`)(5576,`code`),Mk(5577,`date`),Kg(),Mk(5578,`: Valores de datas.`),Jc(5579,`ul`)(5580,`li`),Mk(5581,`Aceita os tipos `),Jc(5582,`strong`),Mk(5583,`string`),Kg(),Mk(5584,` e `),Jc(5585,`strong`),Mk(5586,`Date`),Kg(),Mk(5587,` padr\xE3o do Javascript,
por exemplo: `),Jc(5588,`code`),Mk(5589,`'2017-11-28'`),Kg(),Mk(5590,` ou `),Jc(5591,`code`),Mk(5592,`new Date(2017, 10, 28)`),Kg(),Mk(5593,`.`),Kg()()(),Jc(5594,`li`)(5595,`code`),Mk(5596,`dateTime`),Kg(),Mk(5597,`: Valor de data com horário.`),Jc(5598,`ul`)(5599,`li`),Mk(5600,`Aceita o tipo `),Jc(5601,`em`),Mk(5602,`string`),Kg(),Mk(5603,` no formato `),Jc(5604,`strong`),Mk(5605,`ISO-8601`),Kg(),Mk(5606,` extendido `),Jc(5607,`strong`),Mk(5608,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Kg(),Mk(5609,`
e o tipo `),Jc(5610,`strong`),Mk(5611,`Date`),Kg(),Mk(5612,` padrão do Javascript, por exemplo: `),Jc(5613,`code`),Mk(5614,`'2017-11-28T00:00:00-02:00'`),Kg(),Mk(5615,` ou `),Jc(5616,`code`),Mk(5617,`new Date(2017, 10, 28)`),Kg(),Mk(5618,`.`),Kg()()(),Jc(5619,`li`)(5620,`code`),Mk(5621,`number`),Kg(),Mk(5622,`: Valores numéricos.`),Kg(),Jc(5623,`li`)(5624,`code`),Mk(5625,`string`),Kg(),Mk(5626,`: Textos.`),Kg(),Jc(5627,`li`)(5628,`code`),Mk(5629,`time`),Kg(),Mk(5630,`: Valor do horário.`),Jc(5631,`ul`)(5632,`li`),Mk(5633,`Aceita o tipo `),Jc(5634,`strong`),Mk(5635,`string`),Kg(),Mk(5636,` nos formatos `),Jc(5637,`strong`),Mk(5638,`'HH:mm:ss'`),Kg(),Mk(5639,` ou `),Jc(5640,`strong`),Mk(5641,`'HH:mm:ss.ffffff'`),Kg(),Mk(5642,`, por exemplo: `),Jc(5643,`code`),Mk(5644,`'23:12:45'`),Kg(),Mk(5645,`.`),Kg()()()()()(),Jc(5646,`tr`,253)(5647,`td`,17)(5648,`div`,26)(5649,`span`,27),Mk(5650,` url`),_u(5651,`br`),Kg()()(),Jc(5652,`td`,21)(5653,`code`,28),Mk(5654,`string`),Kg()(),Jc(5655,`td`,24)(5656,`em`)(5657,`strong`),Mk(5658,`(opcional)`),Kg()(),Jc(5659,`p`),Mk(5660,`URL que deve ser feita a requisição com os arquivos selecionados.`),Kg(),Jc(5661,`p`)(5662,`strong`),Mk(5663,`Componente compatível`),Kg(),Mk(5664,`: `),Jc(5665,`code`),Mk(5666,`po-upload`),Kg()()()(),Jc(5667,`tr`,254)(5668,`td`,17)(5669,`div`,26)(5670,`span`,27),Mk(5671,` validate`),_u(5672,`br`),Kg()()(),Jc(5673,`td`,21)(5674,`code`,28),Mk(5675,`string `),Kg(),Jc(5676,`code`,89),Mk(5677,` Function`),Kg()(),Jc(5678,`td`,24)(5679,`em`)(5680,`strong`),Mk(5681,`(opcional)`),Kg()(),Jc(5682,`p`),Mk(5683,`Função ou serviço para validar as `),Jc(5684,`strong`),Mk(5685,`mudanças do campo`),Kg(),Mk(5686,`.`),Kg(),Jc(5687,`ul`)(5688,`li`),Mk(5689,`A propriedade aceita os seguintes tipos:`),Kg()(),Jc(5690,`ul`)(5691,`li`)(5692,`strong`),Mk(5693,`String`),Kg(),Mk(5694,`: Endpoint usado pelo componente para requisição via `),Jc(5695,`code`),Mk(5696,`POST`),Kg(),Mk(5697,`.`),Kg(),Jc(5698,`li`)(5699,`strong`),Mk(5700,`Function`),Kg(),Mk(5701,`: Método que será executado.`),Kg()(),Jc(5702,`p`),Mk(5703,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Jc(5704,`code`),Mk(5705,`PoDynamicFormFieldChanged`),Kg(),Mk(5706,`:`),Kg(),Jc(5707,`p`)(5708,`code`),Mk(5709,`{ property: 'property name', value: 'new value' }`),Kg()(),Jc(5710,`p`),Mk(5711,`O retorno desta função deve ser do tipo `),Jc(5712,`a`,255),Mk(5713,`PoDynamicFormFieldValidation`),Kg(),Mk(5714,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),Kg(),Jc(5715,`pre`)(5716,`code`),Mk(5717,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),Kg()(),Jc(5718,`p`),Mk(5719,`Para referenciar a sua função utilize a propriedade `),Jc(5720,`code`),Mk(5721,`bind`),Kg(),Mk(5722,`, por exemplo:
`),Jc(5723,`code`),Mk(5724,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),Kg()()()(),Jc(5725,`tr`,256)(5726,`td`,17)(5727,`div`,26)(5728,`span`,27),Mk(5729,` visible`),_u(5730,`br`),Kg()()(),Jc(5731,`td`,21)(5732,`code`,32),Mk(5733,`boolean`),Kg()(),Jc(5734,`td`,24)(5735,`em`)(5736,`strong`),Mk(5737,`(opcional)`),Kg()(),Jc(5738,`p`),Mk(5739,`Indica se o campo será visível.`),Kg()()(),Jc(5740,`tr`,257)(5741,`td`,17)(5742,`div`,26)(5743,`span`,27),Mk(5744,` yearRangeLimit`),_u(5745,`br`),Kg()()(),Jc(5746,`td`,21)(5747,`code`,102),Mk(5748,`number`),Kg()(),Jc(5749,`td`,24)(5750,`em`)(5751,`strong`),Mk(5752,`(opcional)`),Kg()(),Jc(5753,`p`),Mk(5754,`Define o limite de anos exibidos na lista de anos do `),Jc(5755,`code`),Mk(5756,`po-datepicker`),Kg(),Mk(5757,` nos modos `),Jc(5758,`code`),Mk(5759,`month-year`),Kg(),Mk(5760,` e `),Jc(5761,`code`),Mk(5762,`year`),Kg(),Mk(5763,`.`),Kg()()()(),Jc(5764,`h4`,258)(5765,`code`,5),Mk(5766,`PoLookupColumn`),Kg()(),Jc(5767,`div`,2)(5768,`p`),Mk(5769,`Interface para configuração das colunas do po-lookup.`),Kg()(),Jc(5770,`h4`,12),Mk(5771,`Propriedades`),Kg(),Jc(5772,`table`,13)(5773,`tr`,14)(5774,`th`,15),Mk(5775,`Nome`),Kg(),Jc(5776,`th`,15),Mk(5777,`Tipo`),Kg(),Jc(5778,`th`,15),Mk(5779,`Descrição`),Kg()(),Jc(5780,`tr`,259)(5781,`td`,17)(5782,`div`,26)(5783,`span`,27),Mk(5784,` fieldLabel`),_u(5785,`br`),Kg()()(),Jc(5786,`td`,21)(5787,`code`,32),Mk(5788,`boolean`),Kg()(),Jc(5789,`td`,24)(5790,`em`)(5791,`strong`),Mk(5792,`(opcional)`),Kg()(),Jc(5793,`p`),Mk(5794,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),Kg(),Jc(5795,`p`),Mk(5796,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),Kg(),Jc(5797,`p`),Mk(5798,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Jc(5799,`code`),Mk(5800,`p-field-format`),Kg(),Mk(5801,` ou `),Jc(5802,`code`),Mk(5803,`p-field-label`),Kg(),Mk(5804,` forem configurados no componente.`),Kg()()(),Jc(5805,`tr`,260)(5806,`td`,17)(5807,`div`,26)(5808,`span`,27),Mk(5809,` format`),_u(5810,`br`),Kg()()(),Jc(5811,`td`,21)(5812,`code`,28),Mk(5813,`string`),Kg()(),Jc(5814,`td`,24)(5815,`em`)(5816,`strong`),Mk(5817,`(opcional)`),Kg()(),Jc(5818,`p`),Mk(5819,`Formato de exibição do valor da coluna:`),Kg(),Jc(5820,`ul`)(5821,`li`),Mk(5822,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),Kg(),Jc(5823,`li`),Mk(5824,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Kg()()()(),Jc(5825,`tr`,261)(5826,`td`,17)(5827,`div`,26)(5828,`span`,27),Mk(5829,` label`),_u(5830,`br`),Kg()()(),Jc(5831,`td`,21)(5832,`code`,28),Mk(5833,`string`),Kg()(),Jc(5834,`td`,24)(5835,`em`)(5836,`strong`),Mk(5837,`(opcional)`),Kg()(),Jc(5838,`p`),Mk(5839,`Texto para título da coluna.`),Kg(),Jc(5840,`p`),Mk(5841,`Caso não seja informado, será utilizado como `),Jc(5842,`em`),Mk(5843,`label`),Kg(),Mk(5844,` o valor da propriedade `),Jc(5845,`em`),Mk(5846,`property`),Kg(),Mk(5847,` com a primeira letra em maiúsculo.`),Kg()()(),Jc(5848,`tr`,262)(5849,`td`,17)(5850,`div`,26)(5851,`span`,27),Mk(5852,` mask`),_u(5853,`br`),Kg()()(),Jc(5854,`td`,21)(5855,`code`,28),Mk(5856,`string`),Kg()(),Jc(5857,`td`,24)(5858,`em`)(5859,`strong`),Mk(5860,`(opcional)`),Kg()(),Jc(5861,`p`),Mk(5862,`Define uma máscara para formatação do valor exibido na coluna.`),Kg(),Jc(5863,`p`),Mk(5864,`A máscara é aplicada somente para `),Jc(5865,`strong`),Mk(5866,`exibição`),Kg(),Mk(5867,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),Kg(),Jc(5868,`p`),Mk(5869,`Caracteres válidos para a máscara:`),Kg(),Jc(5870,`ul`)(5871,`li`)(5872,`code`),Mk(5873,`9`),Kg(),Mk(5874,` : aceita um dígito numérico (0-9).`),Kg(),Jc(5875,`li`)(5876,`code`),Mk(5877,`@`),Kg(),Mk(5878,` : aceita um caractere alfabético (a-z, A-Z).`),Kg(),Jc(5879,`li`)(5880,`code`),Mk(5881,`w`),Kg(),Mk(5882,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),Kg(),Jc(5883,`li`),Mk(5884,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Jc(5885,`code`),Mk(5886,`.`),Kg(),Mk(5887,`, `),Jc(5888,`code`),Mk(5889,`-`),Kg(),Mk(5890,`, `),Jc(5891,`code`),Mk(5892,`/`),Kg(),Mk(5893,`, `),Jc(5894,`code`),Mk(5895,`(`),Kg(),Mk(5896,`, `),Jc(5897,`code`),Mk(5898,`)`),Kg(),Mk(5899,`, `),Jc(5900,`code`),Mk(5901,`+`),Kg(),Mk(5902,`, `),_u(5903,`code`),Mk(5904,`).`),Kg()(),Jc(5905,`p`),Mk(5906,`Exemplos de uso:`),Kg(),Jc(5907,`pre`)(5908,`code`),Mk(5909,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),Kg()(),Jc(5910,`blockquote`)(5911,`p`),Mk(5912,`Esta propriedade é utilizada apenas para colunas do tipo `),Jc(5913,`code`),Mk(5914,`string`),Kg(),Mk(5915,` (padr\xE3o).
Caso a coluna possua um `),Jc(5916,`code`),Mk(5917,`type`),Kg(),Mk(5918,` diferente de `),Jc(5919,`code`),Mk(5920,`string`),Kg(),Mk(5921,`, a máscara será ignorada.`),Kg()()()(),Jc(5922,`tr`,263)(5923,`td`,17)(5924,`div`,26)(5925,`span`,27),Mk(5926,` property`),_u(5927,`br`),Kg()()(),Jc(5928,`td`,21)(5929,`code`,28),Mk(5930,`string`),Kg()(),Jc(5931,`td`,24)(5932,`em`)(5933,`strong`),Mk(5934,`(opcional)`),Kg()(),Jc(5935,`p`),Mk(5936,`Nome identificador da coluna.`),Kg()()(),Jc(5937,`tr`,264)(5938,`td`,17)(5939,`div`,26)(5940,`span`,27),Mk(5941,` type`),_u(5942,`br`),Kg()()(),Jc(5943,`td`,21)(5944,`code`,28),Mk(5945,`string`),Kg()(),Jc(5946,`td`,24)(5947,`em`)(5948,`strong`),Mk(5949,`(opcional)`),Kg()(),Jc(5950,`p`),Mk(5951,`Tipo da coluna:`),Kg(),Jc(5952,`ul`)(5953,`li`),Mk(5954,`string (padrão): textos`),Kg(),Jc(5955,`li`),Mk(5956,`number: valores numéricos`),Kg(),Jc(5957,`li`),Mk(5958,`date: data`),Kg(),Jc(5959,`li`),Mk(5960,`currency: valores monetários`),Kg(),Jc(5961,`li`),Mk(5962,`dateTime: data e hora`),Kg()()()(),Jc(5963,`tr`,265)(5964,`td`,17)(5965,`div`,26)(5966,`span`,27),Mk(5967,` width`),_u(5968,`br`),Kg()()(),Jc(5969,`td`,21)(5970,`code`,28),Mk(5971,`string`),Kg()(),Jc(5972,`td`,24)(5973,`em`)(5974,`strong`),Mk(5975,`(opcional)`),Kg()(),Jc(5976,`p`),Mk(5977,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),Kg()()()(),Jc(5978,`h4`,266)(5979,`code`,5),Mk(5980,`PoLookupFilter`),Kg()(),Jc(5981,`div`,2)(5982,`p`),Mk(5983,`Define o tipo de busca utilizado no po-lookup.`),Kg()(),Jc(5984,`h4`,12),Mk(5985,`Métodos`),Kg(),Jc(5986,`table`,267)(5987,`tr`,84)(5988,`th`,85)(5989,`div`,26)(5990,`h4`)(5991,`span`,27),Mk(5992,` getFilteredItems `),Kg()()()()(),Jc(5993,`tr`,24)(5994,`td`,24)(5995,`p`),Mk(5996,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Jc(5997,`em`),Mk(5998,`Observable`),Kg(),Mk(5999,` com a resposta da API no formato da interface `),Jc(6e3,`code`),Mk(6001,`PoLookupResponseApi`),Kg(),Mk(6002,`.`),Kg()()()(),Jc(6003,`h5`)(6004,`b`),Mk(6005,`Parâmetros`),Kg()(),Jc(6006,`table`,13)(6007,`tr`,14)(6008,`th`,15),Mk(6009,`Nome`),Kg(),Jc(6010,`th`,15),Mk(6011,`Tipo`),Kg(),Jc(6012,`th`,15),Mk(6013,`Descrição`),Kg()(),Jc(6014,`tr`,84)(6015,`td`,17),Mk(6016,` params`),Kg(),Jc(6017,`td`,21)(6018,`code`,268),Mk(6019,` PoLookupFilteredItemsParams `),Kg()(),Jc(6020,`td`,24)(6021,`p`),Mk(6022,`Objeto enviado por parâmetro que implementa a interface `),Jc(6023,`code`),Mk(6024,`PoLookupFilteredItemsParams`),Kg(),Mk(6025,`.`),Kg()()()(),_u(6026,`br`),Jc(6027,`table`,269)(6028,`tr`,84)(6029,`th`,85)(6030,`div`,26)(6031,`h4`)(6032,`span`,27),Mk(6033,` getObjectByValue `),Kg()()()()(),Jc(6034,`tr`,24)(6035,`td`,24)(6036,`p`),Mk(6037,`Método responsável por enviar um valor que será buscado no serviço.`),Kg(),Jc(6038,`p`),Mk(6039,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),Kg()()()(),Jc(6040,`h5`)(6041,`b`),Mk(6042,`Parâmetros`),Kg()(),Jc(6043,`table`,13)(6044,`tr`,14)(6045,`th`,15),Mk(6046,`Nome`),Kg(),Jc(6047,`th`,15),Mk(6048,`Tipo`),Kg(),Jc(6049,`th`,15),Mk(6050,`Descrição`),Kg()(),Jc(6051,`tr`,84)(6052,`td`,17),Mk(6053,` value`),Kg(),Jc(6054,`td`,21)(6055,`code`,28),Mk(6056,` string `),Kg(),Jc(6057,`code`,216),Mk(6058,` Array<any> `),Kg()(),Jc(6059,`td`,24)(6060,`p`),Mk(6061,`Valor único a ser buscado na fonte de dados.`),Kg()()(),Jc(6062,`tr`,84)(6063,`td`,17),Mk(6064,` filterParams`),Kg(),Jc(6065,`td`,21)(6066,`code`,268),Mk(6067,` any `),Kg()(),Jc(6068,`td`,24)(6069,`p`),Mk(6070,`Valor informado através da propriedade `),Jc(6071,`code`),Mk(6072,`p-filter-params`),Kg(),Mk(6073,`.`),Kg()()()(),_u(6074,`br`),Jc(6075,`h4`,270)(6076,`code`,5),Mk(6077,`PoLookupFilteredItemsParams`),Kg()(),Jc(6078,`div`,2)(6079,`p`),Mk(6080,`Interface do objeto enviado como parâmetro na função `),Jc(6081,`code`),Mk(6082,`getFilteredItems`),Kg(),Mk(6083,`.`),Kg()(),Jc(6084,`h4`,12),Mk(6085,`Propriedades`),Kg(),Jc(6086,`table`,13)(6087,`tr`,14)(6088,`th`,15),Mk(6089,`Nome`),Kg(),Jc(6090,`th`,15),Mk(6091,`Tipo`),Kg(),Jc(6092,`th`,15),Mk(6093,`Descrição`),Kg()(),Jc(6094,`tr`,271)(6095,`td`,17)(6096,`div`,26)(6097,`span`,27),Mk(6098,` advancedFilters`),_u(6099,`br`),Kg()()(),Jc(6100,`td`,21)(6101,`code`,272),Mk(6102,`{ [key: string]: any;
}`),Kg()(),Jc(6103,`td`,24)(6104,`em`)(6105,`strong`),Mk(6106,`(opcional)`),Kg()(),Jc(6107,`p`),Mk(6108,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),Kg()()(),Jc(6109,`tr`,273)(6110,`td`,17)(6111,`div`,26)(6112,`span`,27),Mk(6113,` filter`),_u(6114,`br`),Kg()()(),Jc(6115,`td`,21)(6116,`code`,28),Mk(6117,`string`),Kg()(),Jc(6118,`td`,24)(6119,`em`)(6120,`strong`),Mk(6121,`(opcional)`),Kg()(),Jc(6122,`p`),Mk(6123,`Conteúdo utilizado para filtrar a lista de itens.`),Kg()()(),Jc(6124,`tr`,274)(6125,`td`,17)(6126,`div`,26)(6127,`span`,27),Mk(6128,` filterParams`),_u(6129,`br`),Kg()()(),Jc(6130,`td`,21)(6131,`code`,52),Mk(6132,`any`),Kg()(),Jc(6133,`td`,24)(6134,`em`)(6135,`strong`),Mk(6136,`(opcional)`),Kg()(),Jc(6137,`p`),Mk(6138,`Valor informado através da propriedade `),Jc(6139,`code`),Mk(6140,`p-filter-params`),Kg(),Mk(6141,`.`),Kg()()(),Jc(6142,`tr`,275)(6143,`td`,17)(6144,`div`,26)(6145,`span`,27),Mk(6146,` order`),_u(6147,`br`),Kg()()(),Jc(6148,`td`,21)(6149,`code`,28),Mk(6150,`string`),Kg()(),Jc(6151,`td`,24)(6152,`em`)(6153,`strong`),Mk(6154,`(opcional)`),Kg()(),Jc(6155,`p`),Mk(6156,`Coluna que está sendo ordenada na tabela.`),Kg(),Jc(6157,`ul`)(6158,`li`),Mk(6159,`Coluna decrescente será informada da seguinte forma: `),Jc(6160,`code`),Mk(6161,`-<colunaOrdenada>`),Kg(),Mk(6162,`, por exemplo `),Jc(6163,`code`),Mk(6164,`-name`),Kg(),Mk(6165,`.`),Kg(),Jc(6166,`li`),Mk(6167,`Coluna ascendente será informada da seguinte forma: `),Jc(6168,`code`),Mk(6169,`<colunaOrdenada>`),Kg(),Mk(6170,`, por exemplo `),Jc(6171,`code`),Mk(6172,`name`),Kg(),Mk(6173,`.`),Kg()()()(),Jc(6174,`tr`,276)(6175,`td`,17)(6176,`div`,26)(6177,`span`,27),Mk(6178,` page`),_u(6179,`br`),Kg()()(),Jc(6180,`td`,21)(6181,`code`,102),Mk(6182,`number`),Kg()(),Jc(6183,`td`,24)(6184,`em`)(6185,`strong`),Mk(6186,`(opcional)`),Kg()(),Jc(6187,`p`),Mk(6188,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),Kg()()(),Jc(6189,`tr`,277)(6190,`td`,17)(6191,`div`,26)(6192,`span`,27),Mk(6193,` pageSize`),_u(6194,`br`),Kg()()(),Jc(6195,`td`,21)(6196,`code`,102),Mk(6197,`number`),Kg()(),Jc(6198,`td`,24)(6199,`em`)(6200,`strong`),Mk(6201,`(opcional)`),Kg()(),Jc(6202,`p`),Mk(6203,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),Kg()()()(),Jc(6204,`h4`,278)(6205,`code`,5),Mk(6206,`PoLookupLiterals`),Kg()(),Jc(6207,`div`,2)(6208,`p`),Mk(6209,`Interface para definição das literais usadas no `),Jc(6210,`code`),Mk(6211,`po-lookup`),Kg(),Mk(6212,`.`),Kg()(),Jc(6213,`h4`,12),Mk(6214,`Propriedades`),Kg(),Jc(6215,`table`,13)(6216,`tr`,14)(6217,`th`,15),Mk(6218,`Nome`),Kg(),Jc(6219,`th`,15),Mk(6220,`Tipo`),Kg(),Jc(6221,`th`,15),Mk(6222,`Descrição`),Kg()(),Jc(6223,`tr`,279)(6224,`td`,17)(6225,`div`,26)(6226,`span`,27),Mk(6227,` clean`),_u(6228,`br`),Kg()()(),Jc(6229,`td`,21)(6230,`code`,28),Mk(6231,`string`),Kg()(),Jc(6232,`td`,24)(6233,`em`)(6234,`strong`),Mk(6235,`(opcional)`),Kg()(),Jc(6236,`p`),Mk(6237,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),Kg()()(),Jc(6238,`tr`,280)(6239,`td`,17)(6240,`div`,26)(6241,`span`,27),Mk(6242,` modalAdvancedSearch`),_u(6243,`br`),Kg()()(),Jc(6244,`td`,21)(6245,`code`,28),Mk(6246,`string`),Kg()(),Jc(6247,`td`,24)(6248,`em`)(6249,`strong`),Mk(6250,`(opcional)`),Kg()(),Jc(6251,`p`),Mk(6252,`Texto do link de busca avançada.`),Kg(),Jc(6253,`p`),Mk(6254,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),Kg()()(),Jc(6255,`tr`,281)(6256,`td`,17)(6257,`div`,26)(6258,`span`,27),Mk(6259,` modalAdvancedSearchPrimaryActionLabel`),_u(6260,`br`),Kg()()(),Jc(6261,`td`,21)(6262,`code`,28),Mk(6263,`string`),Kg()(),Jc(6264,`td`,24)(6265,`em`)(6266,`strong`),Mk(6267,`(opcional)`),Kg()(),Jc(6268,`p`),Mk(6269,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),Kg()()(),Jc(6270,`tr`,282)(6271,`td`,17)(6272,`div`,26)(6273,`span`,27),Mk(6274,` modalAdvancedSearchSecondaryActionLabel`),_u(6275,`br`),Kg()()(),Jc(6276,`td`,21)(6277,`code`,28),Mk(6278,`string`),Kg()(),Jc(6279,`td`,24)(6280,`em`)(6281,`strong`),Mk(6282,`(opcional)`),Kg()(),Jc(6283,`p`),Mk(6284,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),Kg()()(),Jc(6285,`tr`,283)(6286,`td`,17)(6287,`div`,26)(6288,`span`,27),Mk(6289,` modalAdvancedSearchTitle`),_u(6290,`br`),Kg()()(),Jc(6291,`td`,21)(6292,`code`,28),Mk(6293,`string`),Kg()(),Jc(6294,`td`,24)(6295,`em`)(6296,`strong`),Mk(6297,`(opcional)`),Kg()(),Jc(6298,`p`),Mk(6299,`Texto exibido no título da modal de busca avançada.`),Kg()()(),Jc(6300,`tr`,284)(6301,`td`,17)(6302,`div`,26)(6303,`span`,27),Mk(6304,` modalDisclaimerGroupTitle`),_u(6305,`br`),Kg()()(),Jc(6306,`td`,21)(6307,`code`,28),Mk(6308,`string`),Kg()(),Jc(6309,`td`,24)(6310,`em`)(6311,`strong`),Mk(6312,`(opcional)`),Kg()(),Jc(6313,`p`),Mk(6314,`Texto exibido no título do disclaimer.`),Kg()()(),Jc(6315,`tr`,285)(6316,`td`,17)(6317,`div`,26)(6318,`span`,27),Mk(6319,` modalPlaceholder`),_u(6320,`br`),Kg()()(),Jc(6321,`td`,21)(6322,`code`,28),Mk(6323,`string`),Kg()(),Jc(6324,`td`,24)(6325,`em`)(6326,`strong`),Mk(6327,`(opcional)`),Kg()(),Jc(6328,`p`),Mk(6329,`Texto exibido no placeholder do input da modal.`),Kg()()(),Jc(6330,`tr`,286)(6331,`td`,17)(6332,`div`,26)(6333,`span`,27),Mk(6334,` modalPrimaryActionLabel`),_u(6335,`br`),Kg()()(),Jc(6336,`td`,21)(6337,`code`,28),Mk(6338,`string`),Kg()(),Jc(6339,`td`,24)(6340,`em`)(6341,`strong`),Mk(6342,`(opcional)`),Kg()(),Jc(6343,`p`),Mk(6344,`Texto exibido no label do botão de ação primária da modal.`),Kg()()(),Jc(6345,`tr`,287)(6346,`td`,17)(6347,`div`,26)(6348,`span`,27),Mk(6349,` modalSecondaryActionLabel`),_u(6350,`br`),Kg()()(),Jc(6351,`td`,21)(6352,`code`,28),Mk(6353,`string`),Kg()(),Jc(6354,`td`,24)(6355,`em`)(6356,`strong`),Mk(6357,`(opcional)`),Kg()(),Jc(6358,`p`),Mk(6359,`Texto exibido no label do botão de ação secundária da modal.`),Kg()()(),Jc(6360,`tr`,288)(6361,`td`,17)(6362,`div`,26)(6363,`span`,27),Mk(6364,` modalTableLoadMoreData`),_u(6365,`br`),Kg()()(),Jc(6366,`td`,21)(6367,`code`,28),Mk(6368,`string`),Kg()(),Jc(6369,`td`,24)(6370,`em`)(6371,`strong`),Mk(6372,`(opcional)`),Kg()(),Jc(6373,`p`),Mk(6374,`Label do `),Jc(6375,`code`),Mk(6376,`button`),Kg(),Mk(6377,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),Kg()()(),Jc(6378,`tr`,289)(6379,`td`,17)(6380,`div`,26)(6381,`span`,27),Mk(6382,` modalTableLoadingData`),_u(6383,`br`),Kg()()(),Jc(6384,`td`,21)(6385,`code`,28),Mk(6386,`string`),Kg()(),Jc(6387,`td`,24)(6388,`em`)(6389,`strong`),Mk(6390,`(opcional)`),Kg()(),Jc(6391,`p`),Mk(6392,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),Kg()()(),Jc(6393,`tr`,290)(6394,`td`,17)(6395,`div`,26)(6396,`span`,27),Mk(6397,` modalTableNoColumns`),_u(6398,`br`),Kg()()(),Jc(6399,`td`,21)(6400,`code`,28),Mk(6401,`string`),Kg()(),Jc(6402,`td`,24)(6403,`em`)(6404,`strong`),Mk(6405,`(opcional)`),Kg()(),Jc(6406,`p`),Mk(6407,`Texto exibido quando não existem colunas definidas para a tabela.`),Kg()()(),Jc(6408,`tr`,291)(6409,`td`,17)(6410,`div`,26)(6411,`span`,27),Mk(6412,` modalTableNoData`),_u(6413,`br`),Kg()()(),Jc(6414,`td`,21)(6415,`code`,28),Mk(6416,`string`),Kg()(),Jc(6417,`td`,24)(6418,`em`)(6419,`strong`),Mk(6420,`(opcional)`),Kg()(),Jc(6421,`p`),Mk(6422,`Texto exibido quando não existem itens para serem exibidos na tabela.`),Kg()()(),Jc(6423,`tr`,292)(6424,`td`,17)(6425,`div`,26)(6426,`span`,27),Mk(6427,` modalTitle`),_u(6428,`br`),Kg()()(),Jc(6429,`td`,21)(6430,`code`,28),Mk(6431,`string`),Kg()(),Jc(6432,`td`,24)(6433,`em`)(6434,`strong`),Mk(6435,`(opcional)`),Kg()(),Jc(6436,`p`),Mk(6437,`Texto exibido no título da modal.`),Kg()()(),Jc(6438,`tr`,293)(6439,`td`,17)(6440,`div`,26)(6441,`span`,27),Mk(6442,` search`),_u(6443,`br`),Kg()()(),Jc(6444,`td`,21)(6445,`code`,28),Mk(6446,`string`),Kg()(),Jc(6447,`td`,24)(6448,`em`)(6449,`strong`),Mk(6450,`(opcional)`),Kg()(),Jc(6451,`p`),Mk(6452,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),Kg()()()(),Jc(6453,`h4`,294)(6454,`code`,5),Mk(6455,`PoLookupResponseApi`),Kg()(),Jc(6456,`div`,2)(6457,`p`),Mk(6458,`Interface que representa a estrutura de resposta de uma coleção de itens. `),Kg()(),Jc(6459,`h4`,12),Mk(6460,`Propriedades`),Kg(),Jc(6461,`table`,13)(6462,`tr`,14)(6463,`th`,15),Mk(6464,`Nome`),Kg(),Jc(6465,`th`,15),Mk(6466,`Tipo`),Kg(),Jc(6467,`th`,15),Mk(6468,`Descrição`),Kg()(),Jc(6469,`tr`,295)(6470,`td`,17)(6471,`div`,26)(6472,`span`,27),Mk(6473,` hasNext`),_u(6474,`br`),Kg()()(),Jc(6475,`td`,21)(6476,`code`,32),Mk(6477,`boolean`),Kg()(),Jc(6478,`td`,24)(6479,`p`),Mk(6480,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),Kg()()(),Jc(6481,`tr`,296)(6482,`td`,17)(6483,`div`,26)(6484,`span`,27),Mk(6485,` items`),_u(6486,`br`),Kg()()(),Jc(6487,`td`,21)(6488,`code`,297),Mk(6489,`Array<object>`),Kg()(),Jc(6490,`td`,24)(6491,`p`),Mk(6492,`Lista de itens retornados.`),Kg()()()(),Jc(6493,`h3`),Mk(6494,`Enums`),Kg(),Jc(6495,`h4`,298)(6496,`code`,5),Mk(6497,`PoTableColumnSpacing`),Kg()(),Jc(6498,`div`,2)(6499,`p`),Mk(6500,`Tipos de espaçamento interno (padding) das células (`),Jc(6501,`strong`),Mk(6502,`p-spacing`),Kg(),Mk(6503,`) do po-table.`),Kg()(),Jc(6504,`h4`,12),Mk(6505,`Propriedades`),Kg(),Jc(6506,`table`,13)(6507,`tr`,14)(6508,`th`,15),Mk(6509,`Nome`),Kg(),Jc(6510,`th`,15),Mk(6511,`Descrição`),Kg()(),Jc(6512,`tr`,299)(6513,`td`,17)(6514,`div`,26)(6515,`span`,27),Mk(6516,` ExtraSmall`),_u(6517,`br`),Kg()()(),Jc(6518,`td`,24)(6519,`p`),Mk(6520,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),Kg()()(),Jc(6521,`tr`,300)(6522,`td`,17)(6523,`div`,26)(6524,`span`,27),Mk(6525,` Small`),_u(6526,`br`),Kg()()(),Jc(6527,`td`,24)(6528,`p`),Mk(6529,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),Kg()()(),Jc(6530,`tr`,301)(6531,`td`,17)(6532,`div`,26)(6533,`span`,27),Mk(6534,` Medium`),_u(6535,`br`),Kg()()(),Jc(6536,`td`,24)(6537,`p`),Mk(6538,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),Kg()()(),Jc(6539,`tr`,302)(6540,`td`,17)(6541,`div`,26)(6542,`span`,27),Mk(6543,` Large`),_u(6544,`br`),Kg()()(),Jc(6545,`td`,24)(6546,`p`),Mk(6547,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function gt(a,Xe){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-lookup-basic-view`)(2,`sample-po-lookup-labs-view`)(3,`sample-po-lookup-hero-view`)(4,`sample-po-lookup-hero-reactive-form-view`)(5,`sample-po-lookup-advanced-filter-view`)(6,`sample-po-lookup-sw-films-view`)(7,`sample-po-lookup-multiple-view`)(8,`sample-po-lookup-mask-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var ht=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;title=`Lookup`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Lookup · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0),LO(1,gt,9,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-lookup-doc`),Kg()()),l&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,Te,_e,Oe,Ve,Ie,Re,Ue,Qe,Je],encapsulation:2,changeDetection:1})}return a})()}];var Ke=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(ht),GV]})}return a})();var cn=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ke]})}return a})();export{cn as DocPoLookupModule};