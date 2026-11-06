import{r as t,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Aa as qk,Ai as XL,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Hr as Me,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mi as Y,Mr as Jc,Ni as Y0,Pr as Jm,Ri as Zg,Rr as Kb,Sn as ob,T as Gte,Ti as W0,Ui as cF,Va as t_,Vi as _u,Xt as ere,Yi as eF,at as R4,b as Fu,ba as o1,ca as jk,da as kI,di as RZ,ea as ge,er as An,f as Cre,fa as kZ,fi as Rb,ft as Tn,gi as Tk,hi as TZ,ht as U4,i as Ac,ia as iR,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,pa as kk,qi as de,qr as NZ,rt as Qae,ua as k,ui as R,va as nk,w as Goe,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_,zr as Kk}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var Ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&_u(0,`po-lookup`,0)},dependencies:[ob],encapsulation:2,changeDetection:1})}return a})();var nt=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-lookup-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,nt,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ae],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=p(kI);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,c=t(m,[`filterParams`,`advancedFilters`]),p=r(r(r({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Oe=(()=>{class a{sampleFilterService=p(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Tn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[Me([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let c=ZO();Jc(0,`po-lookup`,1),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.lookup,m)||(o.lookup=m),H_(m)}),vt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),Zg(),_u(1,`po-divider`),Jc(2,`po-container`,2)(3,`div`,3),_u(4,`po-info`,4)(5,`po-info`,5),Zg()(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.label,m)||(o.label=m),H_(m)}),Zg(),Jc(10,`po-checkbox-group`,7),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.columnsName,m)||(o.columnsName=m),H_(m)}),vt(`p-change`,function(){return o.updateColumns()}),Zg(),Jc(11,`po-select`,8),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.fieldLabel,m)||(o.fieldLabel=m),H_(m)}),Zg(),Jc(12,`po-select`,9),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.fieldValue,m)||(o.fieldValue=m),H_(m)}),Zg(),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.filterService,m)||(o.filterService=m),H_(m)}),Zg(),Jc(14,`po-input`,11),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),H_(m)}),Zg(),Jc(15,`po-input`,12),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.help,m)||(o.help=m),H_(m)}),Zg(),Jc(16,`po-input`,13),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.helperText,m)||(o.helperText=m),H_(m)}),Zg(),Jc(17,`po-input`,14),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.placeholder,m)||(o.placeholder=m),H_(m)}),Zg(),Jc(18,`po-input`,15),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.literals,m)||(o.literals=m),H_(m)}),vt(`p-change`,function(){return o.changeLiterals()}),Zg(),Jc(19,`po-input`,16),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.formatField,m)||(o.formatField=m),H_(m)}),vt(`p-change`,function(m){return o.onFieldFormatChange(m)}),Zg(),Jc(20,`po-checkbox-group`,17),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.properties,m)||(o.properties=m),H_(m)}),Zg(),Jc(21,`po-radio-group`,18),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.spacing,m)||(o.spacing=m),H_(m)}),Zg(),Jc(22,`po-radio-group`,19),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.size,m)||(o.size=m),H_(m)}),Zg(),Jc(23,`po-textarea`,20),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.advancedFilters,m)||(o.advancedFilters=m),H_(m)}),vt(`p-change`,function(){return o.changeAdvancedFilters()}),Zg(),Jc(24,`div`,3)(25,`po-button`,21),vt(`p-click`,function(){return o.restore()}),Zg()()()}l&2&&(Yb(`ngModel`,o.lookup),Rb(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),Y0(),Ig(4),Rb(`p-value`,o.lookup),Ig(),Rb(`p-value`,o.event),Ig(4),Yb(`ngModel`,o.label),Y0(),Ig(),Yb(`ngModel`,o.columnsName),Rb(`p-options`,o.columnsOptions),Y0(),Ig(),Yb(`ngModel`,o.fieldLabel),Rb(`p-options`,o.fieldLabelOptions),Y0(),Ig(),Yb(`ngModel`,o.fieldValue),Rb(`p-options`,o.fieldValueOptions),Y0(),Ig(),Yb(`ngModel`,o.filterService),Y0(),Ig(),Yb(`ngModel`,o.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,o.help),Y0(),Ig(),Yb(`ngModel`,o.helperText),Y0(),Ig(),Yb(`ngModel`,o.placeholder),Y0(),Ig(),Yb(`ngModel`,o.literals),Y0(),Ig(),Yb(`ngModel`,o.formatField),Y0(),Ig(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,o.spacing),Rb(`p-options`,o.typeSpacing),Y0(),Ig(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),Y0(),Ig(),Yb(`ngModel`,o.advancedFilters),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Ac,Lf,w4,U4,ob,Gte,Woe,Goe,Yoe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-lookup
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-labs`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,at,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Oe],encapsulation:2,changeDetection:1})}return a})();var rt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=p(O);notification=p(Fu);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[Me([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let c=ZO();Jc(0,`div`,1),_u(1,`po-info`,2),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.hero,m)||(o.hero=m),H_(m)}),Zg(),Jc(7,`po-select`,4),W0(),Kb(`ngModelChange`,function(m){return U_(c),Ak(o.vehicle,m)||(o.vehicle=m),H_(m)}),Zg()(),Jc(8,`div`,1)(9,`po-button`,5),vt(`p-click`,function(){return o.startMission()}),Zg()()()}if(l&2){let c=sk(4);Ig(6),Yb(`ngModel`,o.hero),Rb(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,jk(10,rt)),Y0(),Ig(),Yb(`ngModel`,o.vehicle),Rb(`p-options`,o.vehicles),Y0(),Ig(2),Rb(`p-disabled`,c.form.invalid||c.form.pending)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,ob,Woe,Yoe],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup - Hero`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-hero`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,dt,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ve],encapsulation:2,changeDetection:1})}return a})();var st=()=>[`nickname`,`label`];var ct=()=>({modalTitle:`Heroes available for mission`});var He=(()=>{class a{service=p(O);notification=p(Fu);formBuilder=p(kZ);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,Jm.required],vehicle:[null,Jm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[Me([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(Jc(0,`div`,0),_u(1,`po-info`,1),Zg(),_u(2,`po-divider`),Jc(3,`form`,2)(4,`div`,0)(5,`po-lookup`,3),W0(),Zg(),Jc(6,`po-select`,4),W0(),Zg()(),Jc(7,`div`,0)(8,`po-button`,5),vt(`p-click`,function(){return o.startMission()}),Zg()()()),l&2&&(Ig(3),Rb(`formGroup`,o.formMission),Ig(2),Rb(`p-columns`,o.columns)(`p-field-format`,jk(7,st))(`p-filter-service`,o.service)(`p-literals`,jk(8,ct)),Y0(),Ig(),Rb(`p-options`,o.vehicles),Y0(),Ig(2),Rb(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[NZ,TZ,RZ,XL,o1,oi,Lf,ob,Woe,Yoe],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup - Hero Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-hero-reactive-form`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Et,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,He],encapsulation:2,changeDetection:1})}return a})();var St=()=>({modalTitle:`Select a hero`});var Be=(()=>{class a{service=p(O);hero;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`},{property:`email`,label:`E-mail`}];advancedFilters=[{property:`name`,label:`Name`,gridColumns:6},{property:`email`,label:`E-mail`,gridColumns:6},{property:`nickname`,label:`Hero`,gridColumns:6,initValue:`Hulk`,forceOptionsComponentType:Cre.radioGroup,options:[{label:`Batman`,value:`Batman`},{label:`Superman`,value:`Superman`},{label:`Hulk`,value:`Hulk`},{label:`Thor`,value:`Thor`}]}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-advanced-filter`]],standalone:!1,features:[Me([O])],decls:7,vars:7,consts:[[1,`po-row`],[`p-label`,`Advanced filter with initial value`,`p-value`,`Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result.`,1,`po-lg-12`],[`name`,`hero`,`p-field-label`,`name`,`p-field-value`,`nickname`,`p-help`,`Select a hero`,`p-label`,`Hero`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-advanced-filters`,`p-literals`],[`p-label`,`Selected value`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Jc(0,`div`,0),_u(1,`po-info`,1),Zg(),_u(2,`po-divider`),Jc(3,`div`,0)(4,`po-lookup`,2),W0(),Kb(`ngModelChange`,function(p){return Ak(o.hero,p)||(o.hero=p),p}),Zg()(),Jc(5,`div`,0),_u(6,`po-info`,3),Zg()),l&2&&(Ig(4),Yb(`ngModel`,o.hero),Rb(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,jk(6,St)),Y0(),Ig(2),Rb(`p-value`,o.hero||`-`))},dependencies:[TZ,JL,Lf,ob,Yoe],encapsulation:2})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-advanced-filter-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup - Advanced Filter`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-advanced-filter`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,gt,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Be],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{http=p(kI);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(Y(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(Y(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,et){if(a&1&&(Jc(0,`div`,0),_u(1,`po-table`,3),Zg()),a&2){let r=nk();Ig(),Rb(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var We=(()=>{class a{filterService=p(Ee);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[Me([Ee])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`po-radio-group`,1),W0(),Kb(`ngModelChange`,function(p){return Ak(o.filterParams,p)||(o.filterParams=p),p}),Zg()(),_u(2,`po-divider`),Jc(3,`div`,0)(4,`po-lookup`,2),qk(5,`titlecase`),W0(),Kb(`ngModelChange`,function(p){return Ak(o.entity,p)||(o.entity=p),p}),vt(`p-selected`,function(p){return o.onSelected(p)}),Zg()(),VO(6,ht,2,4,`div`,0)),l&2&&(Ig(),Yb(`ngModel`,o.filterParams),Rb(`p-options`,o.entities),Y0(),Ig(3),Rb(`p-help`,kk(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,kk(``,Kk(5,12,o.entityLabel),` of Star Wars`)),Yb(`ngModel`,o.entity),Rb(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),Y0(),Ig(2),BO(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[TZ,JL,Lf,ob,Gte,R4,cF],encapsulation:2,changeDetection:1})}return a})();var kt=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup - Star Wars films`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-sw-films`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,kt,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,We],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{http=p(kI);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(iR(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Qe=(()=>{class a{service=p(Ge);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`po-lookup`,1),W0(),Kb(`ngModelChange`,function(p){return Ak(o.multiLookup,p)||(o.multiLookup=p),p}),vt(`p-change`,function(p){return o.changeOptions(p)}),Zg(),Jc(2,`po-container`,2),_u(3,`po-table`,3),Zg()()),l&2&&(Ig(),Yb(`ngModel`,o.multiLookup),Rb(`p-multiple`,!0),Y0(),Ig(2),Rb(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[TZ,JL,Ac,ob,R4],encapsulation:2,changeDetection:1})}return a})();var Pt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup - Multiple`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-multiple`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Pt,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Qe],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(c=>c.name.toLowerCase().includes(l)||c.cpf.includes(l)||c.phone.includes(l)||c.cep.includes(l)||c.plate.toLowerCase().includes(l)):[...this.items];return k({items:o,hasNext:!1}).pipe(t_(200))}getObjectByValue(r){return Array.isArray(r)?k(this.items.filter(l=>r.includes(l.value))).pipe(t_(200)):k(this.items.find(l=>String(l.value)===String(r))).pipe(t_(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac})}return a})();var Ye=(()=>{class a{service=p(xe);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[Me([xe])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`po-lookup`,1),W0(),Kb(`ngModelChange`,function(p){return Ak(o.person,p)||(o.person=p),p}),Zg()()),l&2&&(Ig(),Yb(`ngModel`,o.person),Rb(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),Y0())},dependencies:[TZ,JL,ob],encapsulation:2})}return a})();var Dt=a=>({"docs-sample-code-tabs":a});var Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Lookup - Mask`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-lookup-mask`),Zg(),_u(27,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Dt,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ye],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6548,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoLookupComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Jc(24,`code`),Tk(25,`po-lookup`),Zg(),Tk(26,` permite que o usuário digite um valor e pressione a tecla `),Jc(27,`em`),Tk(28,`TAB`),Zg(),Tk(29,` para
buscar um registro.`),Zg(),Jc(30,`blockquote`)(31,`p`),Tk(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),Zg()(),Jc(33,`blockquote`)(34,`p`),Tk(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Jc(36,`a`,6),Tk(37,`modelo`),Zg(),Tk(38,` como `),Jc(39,`code`),Tk(40,`pending`),Zg(),Tk(41,`.`),Zg()(),Jc(42,`p`),Tk(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Jc(44,`code`),Tk(45,`po-select`),Zg(),Tk(46,` ou o `),Jc(47,`code`),Tk(48,`po-combo`),Zg(),Tk(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Jc(50,`a`,7),Tk(51,`Guia de implementação das APIs TOTVS`),Zg(),Tk(52,`.`),Zg(),Jc(53,`p`),Tk(54,`Importante:`),Zg(),Jc(55,`ul`)(56,`li`)(57,`p`),Tk(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Zg(),Jc(59,`pre`)(60,`code`),Tk(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),Zg()()(),Jc(62,`li`)(63,`p`),Tk(64,`Ao utilizar a propriedade `),Jc(65,`code`),Tk(66,`p-advanced-filters`),Zg(),Tk(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),Jc(68,`code`),Tk(69,`po-dynamic-form`),Zg(),Tk(70,`. Em aplicações que não importam o `),Jc(71,`code`),Tk(72,`PoModule`),Zg(),Tk(73,`, como projetos
`),Jc(74,`em`),Tk(75,`standalone`),Zg(),Tk(76,` ou que utilizam módulos específicos, é necessário importar o `),Jc(77,`code`),Tk(78,`PoDynamicModule`),Zg(),Tk(79,`
no componente ou m\xF3dulo onde o `),Jc(80,`code`),Tk(81,`po-lookup`),Zg(),Tk(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Jc(83,`code`),Tk(84,`NG0201: No provider found for _TitleCasePipe`),Zg(),Tk(85,` ao abrir a busca avançada.`),Zg(),Jc(86,`pre`)(87,`code`),Tk(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),Zg()()()(),Jc(89,`h4`),Tk(90,`Tokens customizáveis`),Zg(),Jc(91,`p`),Tk(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(93,`blockquote`)(94,`p`),Tk(95,`Para maiores informações, acesse o guia `),Jc(96,`a`,8),Tk(97,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(98,`.`),Zg()(),Jc(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),Tk(103,`Propriedade`),Zg(),Jc(104,`th`),Tk(105,`Descrição`),Zg(),Jc(106,`th`),Tk(107,`Valor Padrão`),Zg()()(),Jc(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),Tk(112,`Default Values`),Zg()(),_u(113,`td`)(114,`td`),Zg(),Jc(115,`tr`)(116,`td`)(117,`code`),Tk(118,`--font-family`),Zg()(),Jc(119,`td`),Tk(120,`Família tipográfica usada`),Zg(),Jc(121,`td`)(122,`code`),Tk(123,`var(--font-family-theme)`),Zg()()(),Jc(124,`tr`)(125,`td`)(126,`code`),Tk(127,`--font-size`),Zg()(),Jc(128,`td`),Tk(129,`Tamanho da fonte`),Zg(),Jc(130,`td`)(131,`code`),Tk(132,`var(--font-size-default)`),Zg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Tk(136,`--text-color-placeholder`),Zg()(),Jc(137,`td`),Tk(138,`Cor do texto no placeholder`),Zg(),Jc(139,`td`)(140,`code`),Tk(141,`var(--color-neutral-light-30)`),Zg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Tk(145,`--color`),Zg()(),Jc(146,`td`),Tk(147,`Cor principal do lookup`),Zg(),Jc(148,`td`)(149,`code`),Tk(150,`var(--color-neutral-dark-70)`),Zg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Tk(154,`--border-radius`),Zg()(),Jc(155,`td`),Tk(156,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(157,`td`)(158,`code`),Tk(159,`var(--border-radius-md)`),Zg()()(),Jc(160,`tr`)(161,`td`)(162,`code`),Tk(163,`--background`),Zg()(),Jc(164,`td`),Tk(165,`Cor de background`),Zg(),Jc(166,`td`)(167,`code`),Tk(168,`var(--color-neutral-light-05)`),Zg()()(),Jc(169,`tr`)(170,`td`)(171,`code`),Tk(172,`--text-color`),Zg()(),Jc(173,`td`),Tk(174,`Cor do texto`),Zg(),Jc(175,`td`)(176,`code`),Tk(177,`var(--color-neutral-dark-90)`),Zg()()(),Jc(178,`tr`)(179,`td`)(180,`code`),Tk(181,`--color-clear`),Zg()(),Jc(182,`td`),Tk(183,`Cor principal do icone clear`),Zg(),Jc(184,`td`)(185,`code`),Tk(186,`var(--color-action-default)`),Zg()()(),Jc(187,`tr`)(188,`td`)(189,`strong`),Tk(190,`Icon`),Zg()(),_u(191,`td`)(192,`td`),Zg(),Jc(193,`tr`)(194,`td`)(195,`code`),Tk(196,`--color-icon`),Zg()(),Jc(197,`td`),Tk(198,`Cor principal do icone pesquisar`),Zg(),Jc(199,`td`)(200,`code`),Tk(201,`var(--color-action-default)`),Zg()()(),Jc(202,`tr`)(203,`td`)(204,`strong`),Tk(205,`Hover`),Zg()(),_u(206,`td`)(207,`td`),Zg(),Jc(208,`tr`)(209,`td`)(210,`code`),Tk(211,`--color-hover`),Zg()(),Jc(212,`td`),Tk(213,`Cor principal no estado hover`),Zg(),Jc(214,`td`)(215,`code`),Tk(216,`var(--color-brand-01-dark)`),Zg()()(),Jc(217,`tr`)(218,`td`)(219,`code`),Tk(220,`--background-hover`),Zg()(),Jc(221,`td`),Tk(222,`Cor de background no estado hover`),Zg(),Jc(223,`td`)(224,`code`),Tk(225,`var(--color-brand-01-lightest)`),Zg()()(),Jc(226,`tr`)(227,`td`)(228,`strong`),Tk(229,`Focused`),Zg()(),_u(230,`td`)(231,`td`),Zg(),Jc(232,`tr`)(233,`td`)(234,`code`),Tk(235,`--color-focused`),Zg()(),Jc(236,`td`),Tk(237,`Cor principal no estado de focus`),Zg(),Jc(238,`td`)(239,`code`),Tk(240,`var(--color-action-default)`),Zg()()(),Jc(241,`tr`)(242,`td`)(243,`code`),Tk(244,`--outline-color-focused`),Zg()(),Jc(245,`td`),Tk(246,`Cor do outline do estado de focus`),Zg(),Jc(247,`td`)(248,`code`),Tk(249,`var(--color-action-focus)`),Zg()()(),Jc(250,`tr`)(251,`td`)(252,`strong`),Tk(253,`Disabled`),Zg()(),_u(254,`td`)(255,`td`),Zg(),Jc(256,`tr`)(257,`td`)(258,`code`),Tk(259,`--color-disabled`),Zg()(),Jc(260,`td`),Tk(261,`Cor principal no estado disabled`),Zg(),Jc(262,`td`)(263,`code`),Tk(264,`var(--color-action-disabled)`),Zg()()(),Jc(265,`tr`)(266,`td`)(267,`code`),Tk(268,`--background-disabled`),Zg()(),Jc(269,`td`),Tk(270,`Cor de background no estado disabled`),Zg(),Jc(271,`td`)(272,`code`),Tk(273,`var(--color-neutral-light-20)`),Zg()()(),Jc(274,`tr`)(275,`td`)(276,`code`),Tk(277,`--text-color-disabled`),Zg()(),Jc(278,`td`),Tk(279,`Cor do texto quando campo está desabilitado`),Zg(),Jc(280,`td`)(281,`code`),Tk(282,`var(--color-action-disabled)`),Zg()()(),Jc(283,`tr`)(284,`td`)(285,`strong`),Tk(286,`Error`),Zg()(),_u(287,`td`)(288,`td`),Zg(),Jc(289,`tr`)(290,`td`)(291,`code`),Tk(292,`--color-error`),Zg()(),Jc(293,`td`),Tk(294,`Cor de background no estado de requerido`),Zg(),Jc(295,`td`)(296,`code`),Tk(297,`var(--color-feedback-negative-base)`),Zg()()()()()(),Jc(298,`div`,9)(299,`h4`,10),Tk(300,`Seletor`),Zg(),Jc(301,`pre`,11),Tk(302,`<po-lookup
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
`),Zg()(),Jc(303,`h4`,12),Tk(304,`Propriedades`),Zg(),Jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),Tk(308,`Nome`),Zg(),Jc(309,`th`,15),Tk(310,`Tipo`),Zg(),Jc(311,`th`,15),Tk(312,`Padrão`),Zg(),Jc(313,`th`,15),Tk(314,`Descrição`),Zg()(),Jc(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),Tk(319,` (p-additional-help)`),_u(320,`br`),Zg()(),Jc(321,`div`,20),Tk(322,`Deprecated`),Zg()(),Jc(323,`td`,21)(324,`code`,22),Tk(325,`EventEmitter`),Zg()(),Jc(326,`td`,23),Tk(327,`-`),Zg(),Jc(328,`td`,24)(329,`em`)(330,`strong`),Tk(331,`(opcional)`),Zg()(),Jc(332,`p`),Tk(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(334,`blockquote`)(335,`p`),Tk(336,`Essa propriedade está `),Jc(337,`strong`),Tk(338,`depreciada`),Zg(),Tk(339,` e será removida na versão `),Jc(340,`code`),Tk(341,`23.x.x`),Zg(),Tk(342,`. Recomendamos utilizar a propriedade `),Jc(343,`code`),Tk(344,`p-helper`),Zg(),Tk(345,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(346,`tr`,16)(347,`td`,17)(348,`div`,25)(349,`span`,26),Tk(350,` p-additional-help-tooltip`),_u(351,`br`),Zg()(),Jc(352,`div`,20),Tk(353,`Deprecated`),Zg()(),Jc(354,`td`,21)(355,`code`,27),Tk(356,`string`),Zg()(),Jc(357,`td`,23),Tk(358,`-`),Zg(),Jc(359,`td`,24)(360,`em`)(361,`strong`),Tk(362,`(opcional)`),Zg()(),Jc(363,`p`),Tk(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(365,`code`),Tk(366,`po-helper`),Zg(),Tk(367,`.
`),Jc(368,`strong`),Tk(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(370,`blockquote`)(371,`p`),Tk(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(373,`blockquote`)(374,`p`),Tk(375,`Essa propriedade está `),Jc(376,`strong`),Tk(377,`depreciada`),Zg(),Tk(378,` e será removida na versão `),Jc(379,`code`),Tk(380,`23.x.x`),Zg(),Tk(381,`. Recomendamos utilizar a propriedade `),Jc(382,`code`),Tk(383,`p-helper`),Zg(),Tk(384,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(385,`tr`,16)(386,`td`,17)(387,`div`,25)(388,`span`,26),Tk(389,` p-advanced-filters`),_u(390,`br`),Zg()()(),Jc(391,`td`,21)(392,`code`,28),Tk(393,`Array<PoLookupAdvancedFilter>`),Zg()(),Jc(394,`td`,23),Tk(395,`-`),Zg(),Jc(396,`td`,24)(397,`em`)(398,`strong`),Tk(399,`(opcional)`),Zg()(),Jc(400,`p`),Tk(401,`Lista de objetos dos campos que serão criados na busca avançada.`),Zg(),Jc(402,`blockquote`)(403,`p`),Tk(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Zg()(),Jc(405,`blockquote`)(406,`p`),Tk(407,`A busca avançada é construída a partir do `),Jc(408,`code`),Tk(409,`po-dynamic-form`),Zg(),Tk(410,`. Em aplicações que não importam o `),Jc(411,`code`),Tk(412,`PoModule`),Zg(),Tk(413,`,
como projetos `),Jc(414,`em`),Tk(415,`standalone`),Zg(),Tk(416,` ou que utilizam módulos específicos, é necessário importar o `),Jc(417,`code`),Tk(418,`PoDynamicModule`),Zg(),Tk(419,`
no componente ou m\xF3dulo onde o `),Jc(420,`code`),Tk(421,`po-lookup`),Zg(),Tk(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),Jc(423,`code`),Tk(424,`NG0201: No provider found for _TitleCasePipe`),Zg(),Tk(425,` ao abrir a busca avançada.`),Zg()(),Jc(426,`p`),Tk(427,`Exemplo de URL com busca avançada:`),Zg(),Jc(428,`pre`)(429,`code`),Tk(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),Zg()(),Jc(431,`p`),Tk(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),Zg(),Jc(433,`pre`)(434,`code`),Tk(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),Zg()(),Jc(436,`p`),Tk(437,`Também é possível definir um valor inicial para os campos da busca avançada através da propriedade `),Jc(438,`code`),Tk(439,`initValue`),Zg(),Tk(440,`,
que ser\xE1 atribu\xEDdo ao campo na primeira abertura da janela de busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro,
os campos s\xE3o preenchidos com os valores filtrados:`),Zg(),Jc(441,`pre`)(442,`code`),Tk(443,`advancedFilters: Array<PoLookupAdvancedFilter> = [
  { property: 'nickname', label: 'Apelido' },
  { property: 'active', label: 'Ativo', initValue: false, options: [
    { label: 'Sim', value: true },
    { label: 'N\xE3o', value: false }
  ]}
];
`),Zg()()()(),Jc(444,`tr`,16)(445,`td`,17)(446,`div`,25)(447,`span`,26),Tk(448,` p-append-in-body`),_u(449,`br`),Zg()()(),Jc(450,`td`,21)(451,`code`,29),Tk(452,`boolean`),Zg()(),Jc(453,`td`,23)(454,`p`)(455,`code`),Tk(456,`false`),Zg()()(),Jc(457,`td`,24)(458,`em`)(459,`strong`),Tk(460,`(opcional)`),Zg()(),Jc(461,`p`),Tk(462,`Define que o popover (`),Jc(463,`code`),Tk(464,`p-helper`),Zg(),Tk(465,` e/ou `),Jc(466,`code`),Tk(467,`p-error-limit`),Zg(),Tk(468,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(469,`blockquote`)(470,`p`),Tk(471,`Quando utilizado com `),Jc(472,`code`),Tk(473,`p-helper`),Zg(),Tk(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(475,`tr`,16)(476,`td`,17)(477,`div`,25)(478,`span`,26),Tk(479,` p-auto-focus`),_u(480,`br`),Zg()()(),Jc(481,`td`,21)(482,`code`,29),Tk(483,`boolean`),Zg()(),Jc(484,`td`,23)(485,`p`)(486,`code`),Tk(487,`false`),Zg()()(),Jc(488,`td`,24)(489,`em`)(490,`strong`),Tk(491,`(opcional)`),Zg()(),Jc(492,`p`),Tk(493,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(494,`blockquote`)(495,`p`),Tk(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(497,`tr`,16)(498,`td`,17)(499,`div`,25)(500,`span`,26),Tk(501,` p-auto-height`),_u(502,`br`),Zg()()(),Jc(503,`td`,21)(504,`code`,29),Tk(505,`boolean`),Zg()(),Jc(506,`td`,23)(507,`p`)(508,`code`),Tk(509,`false`),Zg()()(),Jc(510,`td`,24)(511,`em`)(512,`strong`),Tk(513,`(opcional)`),Zg()(),Jc(514,`p`),Tk(515,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),Zg()()(),Jc(516,`tr`,16)(517,`td`,17)(518,`div`,18)(519,`span`,19),Tk(520,` (p-change)`),_u(521,`br`),Zg()()(),Jc(522,`td`,21)(523,`code`,22),Tk(524,`EventEmitter`),Zg()(),Jc(525,`td`,23),Tk(526,`-`),Zg(),Jc(527,`td`,24)(528,`em`)(529,`strong`),Tk(530,`(opcional)`),Zg()(),Jc(531,`p`),Tk(532,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),Zg()()(),Jc(533,`tr`,16)(534,`td`,17)(535,`div`,18)(536,`span`,19),Tk(537,` (p-change-model)`),_u(538,`br`),Zg()()(),Jc(539,`td`,21)(540,`code`,22),Tk(541,`EventEmitter`),Zg()(),Jc(542,`td`,23),Tk(543,`-`),Zg(),Jc(544,`td`,24)(545,`em`)(546,`strong`),Tk(547,`(opcional)`),Zg()(),Jc(548,`p`),Tk(549,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(550,`code`),Tk(551,`setValue`),Zg(),Tk(552,`, `),Jc(553,`code`),Tk(554,`patchValue`),Zg(),Tk(555,`, carregamento assíncrono).`),Zg(),Jc(556,`p`),Tk(557,`Diferentemente do `),Jc(558,`code`),Tk(559,`p-change`),Zg(),Tk(560,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(561,`code`),Tk(562,`p-change-model`),Zg(),Tk(563,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(564,`p`),Tk(565,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(566,`tr`,16)(567,`td`,17)(568,`div`,18)(569,`span`,19),Tk(570,` (p-change-visible-columns)`),_u(571,`br`),Zg()()(),Jc(572,`td`,21)(573,`code`,22),Tk(574,`EventEmitter`),Zg()(),Jc(575,`td`,23),Tk(576,`-`),Zg(),Jc(577,`td`,24)(578,`em`)(579,`strong`),Tk(580,`(opcional)`),Zg()(),Jc(581,`p`),Tk(582,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Zg(),Jc(583,`p`),Tk(584,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg()()(),Jc(585,`tr`,16)(586,`td`,17)(587,`div`,25)(588,`span`,26),Tk(589,` p-clean`),_u(590,`br`),Zg()()(),Jc(591,`td`,21)(592,`code`,29),Tk(593,`boolean`),Zg()(),Jc(594,`td`,23),Tk(595,`-`),Zg(),Jc(596,`td`,24)(597,`p`),Tk(598,`Exibe um ícone que permite limpar o campo.`),Zg()()(),Jc(599,`tr`,16)(600,`td`,17)(601,`div`,18)(602,`span`,19),Tk(603,` (p-restore-column-manager)`),_u(604,`br`),Zg()()(),Jc(605,`td`,21)(606,`code`,22),Tk(607,`EventEmitter`),Zg()(),Jc(608,`td`,23),Tk(609,`-`),Zg(),Jc(610,`td`,24)(611,`em`)(612,`strong`),Tk(613,`(opcional)`),Zg()(),Jc(614,`p`),Tk(615,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Zg(),Jc(616,`p`),Tk(617,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg()()(),Jc(618,`tr`,16)(619,`td`,17)(620,`div`,25)(621,`span`,26),Tk(622,` p-columns`),_u(623,`br`),Zg()()(),Jc(624,`td`,21)(625,`code`,30),Tk(626,`Array<PoLookupColumn>`),Zg()(),Jc(627,`td`,23),Tk(628,`-`),Zg(),Jc(629,`td`,24)(630,`em`)(631,`strong`),Tk(632,`(opcional)`),Zg()(),Jc(633,`p`),Tk(634,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),Zg()()(),Jc(635,`tr`,16)(636,`td`,17)(637,`div`,25)(638,`span`,26),Tk(639,` p-compact-label`),_u(640,`br`),Zg()()(),Jc(641,`td`,21)(642,`code`,29),Tk(643,`boolean`),Zg()(),Jc(644,`td`,23)(645,`p`)(646,`code`),Tk(647,`false`),Zg()()(),Jc(648,`td`,24)(649,`em`)(650,`strong`),Tk(651,`(opcional)`),Zg()(),Jc(652,`p`),Tk(653,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(654,`p`),Tk(655,`Quando habilitado (`),Jc(656,`code`),Tk(657,`true`),Zg(),Tk(658,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(659,`ul`)(660,`li`)(661,`code`),Tk(662,`po-label`),Zg()(),Jc(663,`li`)(664,`code`),Tk(665,`p-requirement (showRequired)`),Zg()(),Jc(666,`li`)(667,`code`),Tk(668,`po-helper`),Zg()()(),Jc(669,`p`),Tk(670,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(671,`p`),Tk(672,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(673,`ul`)(674,`li`)(675,`code`),Tk(676,`--field-container-title-justify`),Zg()(),Jc(677,`li`)(678,`code`),Tk(679,`--field-container-title-flex`),Zg()()(),Jc(680,`p`),Tk(681,`Exemplo:`),Zg(),Jc(682,`pre`)(683,`code`),Tk(684,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(685,`p`),Tk(686,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(687,`tr`,16)(688,`td`,17)(689,`div`,25)(690,`span`,26),Tk(691,` p-disabled`),_u(692,`br`),Zg()()(),Jc(693,`td`,21)(694,`code`,29),Tk(695,`boolean`),Zg()(),Jc(696,`td`,23)(697,`p`),Tk(698,`false`),Zg()(),Jc(699,`td`,24)(700,`em`)(701,`strong`),Tk(702,`(opcional)`),Zg()(),Jc(703,`p`),Tk(704,`Indica que o campo será desabilitado.`),Zg()()(),Jc(705,`tr`,16)(706,`td`,17)(707,`div`,25)(708,`span`,26),Tk(709,` p-error-limit`),_u(710,`br`),Zg()()(),Jc(711,`td`,21)(712,`code`,29),Tk(713,`boolean`),Zg()(),Jc(714,`td`,23)(715,`p`)(716,`code`),Tk(717,`false`),Zg()()(),Jc(718,`td`,24)(719,`em`)(720,`strong`),Tk(721,`(opcional)`),Zg()(),Jc(722,`p`),Tk(723,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(724,`blockquote`)(725,`p`),Tk(726,`Caso essa propriedade seja definida como `),Jc(727,`code`),Tk(728,`true`),Zg(),Tk(729,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(730,`tr`,16)(731,`td`,17)(732,`div`,25)(733,`span`,26),Tk(734,` p-field-error-message`),_u(735,`br`),Zg()()(),Jc(736,`td`,21)(737,`code`,27),Tk(738,`string`),Zg()(),Jc(739,`td`,23),Tk(740,`-`),Zg(),Jc(741,`td`,24)(742,`em`)(743,`strong`),Tk(744,`(opcional)`),Zg()(),Jc(745,`p`),Tk(746,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(747,`blockquote`)(748,`p`),Tk(749,`Necessário que a propriedade `),Jc(750,`code`),Tk(751,`p-required`),Zg(),Tk(752,` esteja habilitada.`),Zg()()()(),Jc(753,`tr`,16)(754,`td`,17)(755,`div`,25)(756,`span`,26),Tk(757,` p-field-format`),_u(758,`br`),Zg()()(),Jc(759,`td`,21)(760,`code`,31),Tk(761,`((value) => string) `),Zg(),Jc(762,`code`,32),Tk(763,` Array<string>`),Zg()(),Jc(764,`td`,23),Tk(765,`-`),Zg(),Jc(766,`td`,24)(767,`em`)(768,`strong`),Tk(769,`(opcional)`),Zg()(),Jc(770,`p`),Tk(771,`Formato de exibição do campo.`),Zg(),Jc(772,`p`),Tk(773,`Recebe uma função que deve retornar uma `),Jc(774,`em`),Tk(775,`string`),Zg(),Tk(776,` com o/os valores do objeto formatados para exibição, por exemplo:`),Zg(),Jc(777,`pre`)(778,`code`),Tk(779,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),Zg()(),Jc(780,`blockquote`)(781,`p`),Tk(782,`Esta propriedade sobrepõe o valor da propriedade `),Jc(783,`code`),Tk(784,`p-field-label`),Zg(),Tk(785,` na descrição do campo.`),Zg()(),Jc(786,`p`),Tk(787,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),Zg(),Jc(788,`pre`)(789,`code`),Tk(790,`<po-lookup
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
`),Zg()(),Jc(791,`blockquote`)(792,`p`),Tk(793,`Será utilizado `),Jc(794,`code`),Tk(795,`-`),Zg(),Tk(796,` como separador.`),Zg()()()(),Jc(797,`tr`,16)(798,`td`,17)(799,`div`,25)(800,`span`,26),Tk(801,` p-field-label`),_u(802,`br`),Zg()()(),Jc(803,`td`,21)(804,`code`,27),Tk(805,`string`),Zg()(),Jc(806,`td`,23),Tk(807,`-`),Zg(),Jc(808,`td`,24)(809,`p`),Tk(810,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),Zg()()(),Jc(811,`tr`,16)(812,`td`,17)(813,`div`,25)(814,`span`,26),Tk(815,` p-field-value`),_u(816,`br`),Zg()()(),Jc(817,`td`,21)(818,`code`,27),Tk(819,`string`),Zg()(),Jc(820,`td`,23),Tk(821,`-`),Zg(),Jc(822,`td`,24)(823,`p`),Tk(824,`Indica a coluna que será utilizada como valor do campo.`),Zg(),Jc(825,`blockquote`)(826,`p`),Tk(827,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),Zg()()()(),Jc(828,`tr`,16)(829,`td`,17)(830,`div`,25)(831,`span`,26),Tk(832,` p-filter-params`),_u(833,`br`),Zg()()(),Jc(834,`td`,21)(835,`code`,33),Tk(836,`any`),Zg()(),Jc(837,`td`,23),Tk(838,`-`),Zg(),Jc(839,`td`,24)(840,`em`)(841,`strong`),Tk(842,`(opcional)`),Zg()(),Jc(843,`p`),Tk(844,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Jc(845,`code`),Tk(846,`PoLookupFilter`),Zg(),Tk(847,`.`),Zg()()(),Jc(848,`tr`,16)(849,`td`,17)(850,`div`,25)(851,`span`,26),Tk(852,` p-filter-service`),_u(853,`br`),Zg()()(),Jc(854,`td`,21)(855,`code`,27),Tk(856,`string `),Zg(),Jc(857,`code`,34),Tk(858,` PoLookupFilter`),Zg()(),Jc(859,`td`,23),Tk(860,`-`),Zg(),Jc(861,`td`,24)(862,`p`),Tk(863,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Jc(864,`code`),Tk(865,`PoLookupFilter`),Zg(),Tk(866,` ou uma URL.`),Zg(),Jc(867,`p`),Tk(868,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),Zg(),Jc(869,`pre`)(870,`code`),Tk(871,`url + ?page=1&pageSize=20&filter=Peter
`),Zg()(),Jc(872,`p`),Tk(873,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Jc(874,`code`),Tk(875,`order`),Zg(),Tk(876,`, por exemplo:`),Zg(),Jc(877,`ul`)(878,`li`)(879,`p`),Tk(880,`Coluna decrescente:`),Zg(),Jc(881,`pre`)(882,`code`),Tk(883,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),Zg()()(),Jc(884,`li`)(885,`p`),Tk(886,`Coluna ascendente:`),Zg(),Jc(887,`pre`)(888,`code`),Tk(889,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),Zg()()()(),Jc(890,`p`),Tk(891,`Se for definido a propriedade `),Jc(892,`code`),Tk(893,`p-filter-params`),Zg(),Tk(894,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Jc(895,`code`),Tk(896,`{ age: 23 }`),Zg(),Tk(897,` a URL ficaria:`),Zg(),Jc(898,`pre`)(899,`code`),Tk(900,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),Zg()(),Jc(901,`p`),Tk(902,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),Zg(),Jc(903,`pre`)(904,`code`),Tk(905,`model = 1234;

GET url/1234
`),Zg()(),Jc(906,`p`),Tk(907,`Caso estiver com múltipla seleção habilitada:`),Zg(),Jc(908,`pre`)(909,`code`),Tk(910,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),Zg()(),Jc(911,`blockquote`)(912,`p`),Tk(913,`Esta URL deve retornar e receber os dados no padrão de `),Jc(914,`a`,7),Tk(915,`API do PO UI`),Zg(),Tk(916,` e utiliza os valores
definidos nas propriedades `),Jc(917,`code`),Tk(918,`p-field-label`),Zg(),Tk(919,` e `),Jc(920,`code`),Tk(921,`p-field-value`),Zg(),Tk(922,` para a construção do `),Jc(923,`code`),Tk(924,`po-lookup`),Zg(),Tk(925,`.`),Zg()(),Jc(926,`p`),Tk(927,`Caso o usuário digite um valor e pressione a tecla `),Jc(928,`em`),Tk(929,`TAB`),Zg(),Tk(930,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Jc(931,`a`,35),Tk(932,`encodeURIComponent`),Zg(),Tk(933,`
e concatenado na URL da seguinte forma:`),Zg(),Jc(934,`pre`)(935,`code`),Tk(936,`url/valor%20que%20se%20deseja%20filtrar
`),Zg()(),Jc(937,`blockquote`)(938,`p`),Tk(939,`Quando informado um serviço que implemente a interface `),Jc(940,`code`),Tk(941,`PoLookupFilter`),Zg(),Tk(942,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),Zg()()()(),Jc(943,`tr`,16)(944,`td`,17)(945,`div`,25)(946,`span`,26),Tk(947,` p-help`),_u(948,`br`),Zg()()(),Jc(949,`td`,21)(950,`code`,27),Tk(951,`string`),Zg()(),Jc(952,`td`,23),Tk(953,`-`),Zg(),Jc(954,`td`,24)(955,`em`)(956,`strong`),Tk(957,`(opcional)`),Zg()(),Jc(958,`p`),Tk(959,`Texto de apoio do campo.`),Zg()()(),Jc(960,`tr`,16)(961,`td`,17)(962,`div`,25)(963,`span`,26),Tk(964,` p-hide-columns-manager`),_u(965,`br`),Zg()()(),Jc(966,`td`,21)(967,`code`,29),Tk(968,`boolean`),Zg()(),Jc(969,`td`,23)(970,`p`)(971,`code`),Tk(972,`false`),Zg()()(),Jc(973,`td`,24)(974,`em`)(975,`strong`),Tk(976,`(opcional)`),Zg()(),Jc(977,`p`),Tk(978,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),Zg()()(),Jc(979,`tr`,16)(980,`td`,17)(981,`div`,25)(982,`span`,26),Tk(983,` p-infinite-scroll`),_u(984,`br`),Zg()()(),Jc(985,`td`,21)(986,`code`,29),Tk(987,`boolean`),Zg()(),Jc(988,`td`,23)(989,`p`)(990,`code`),Tk(991,`false`),Zg()()(),Jc(992,`td`,24)(993,`em`)(994,`strong`),Tk(995,`(opcional)`),Zg()(),Jc(996,`p`),Tk(997,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),Zg()()(),Jc(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),Tk(1002,` (p-keydown)`),_u(1003,`br`),Zg()()(),Jc(1004,`td`,21)(1005,`code`,22),Tk(1006,`EventEmitter`),Zg()(),Jc(1007,`td`,23),Tk(1008,`-`),Zg(),Jc(1009,`td`,24)(1010,`em`)(1011,`strong`),Tk(1012,`(opcional)`),Zg()(),Jc(1013,`p`),Tk(1014,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(1015,`code`),Tk(1016,`KeyboardEvent`),Zg(),Tk(1017,` com informações sobre a tecla.`),Zg()()(),Jc(1018,`tr`,16)(1019,`td`,17)(1020,`div`,25)(1021,`span`,26),Tk(1022,` p-label`),_u(1023,`br`),Zg()()(),Jc(1024,`td`,21)(1025,`code`,27),Tk(1026,`string`),Zg()(),Jc(1027,`td`,23),Tk(1028,`-`),Zg(),Jc(1029,`td`,24)(1030,`em`)(1031,`strong`),Tk(1032,`(opcional)`),Zg()(),Jc(1033,`p`),Tk(1034,`Label do campo.`),Zg(),Jc(1035,`blockquote`)(1036,`p`),Tk(1037,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Jc(1038,`code`),Tk(1039,`modalTitle`),Zg(),Tk(1040,` na propriedade `),Jc(1041,`code`),Tk(1042,`p-literals`),Zg(),Tk(1043,`.`),Zg()()()(),Jc(1044,`tr`,16)(1045,`td`,17)(1046,`div`,25)(1047,`span`,26),Tk(1048,` p-label-text-wrap`),_u(1049,`br`),Zg()()(),Jc(1050,`td`,21)(1051,`code`,29),Tk(1052,`boolean`),Zg()(),Jc(1053,`td`,23)(1054,`p`)(1055,`code`),Tk(1056,`false`),Zg()()(),Jc(1057,`td`,24)(1058,`em`)(1059,`strong`),Tk(1060,`(opcional)`),Zg()(),Jc(1061,`p`),Tk(1062,`Habilita a quebra automática do texto da propriedade `),Jc(1063,`code`),Tk(1064,`p-label`),Zg(),Tk(1065,`. Quando `),Jc(1066,`code`),Tk(1067,`p-label-text-wrap`),Zg(),Tk(1068,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(1069,`tr`,16)(1070,`td`,17)(1071,`div`,25)(1072,`span`,26),Tk(1073,` p-literals`),_u(1074,`br`),Zg()()(),Jc(1075,`td`,21)(1076,`code`,36),Tk(1077,`PoLookupLiterals`),Zg()(),Jc(1078,`td`,23),Tk(1079,`-`),Zg(),Jc(1080,`td`,24)(1081,`p`),Tk(1082,`Objeto com as literais usadas no `),Jc(1083,`code`),Tk(1084,`po-lookup`),Zg(),Tk(1085,`.`),Zg(),Jc(1086,`p`),Tk(1087,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(1088,`pre`)(1089,`code`),Tk(1090,`const customLiterals: PoLookupLiterals = {
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
`),Zg()(),Jc(1091,`p`),Tk(1092,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(1093,`pre`)(1094,`code`),Tk(1095,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),Zg()(),Jc(1096,`p`),Tk(1097,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(1098,`pre`)(1099,`code`),Tk(1100,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),Zg()(),Jc(1101,`blockquote`)(1102,`p`),Tk(1103,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(1104,`a`,37)(1105,`code`),Tk(1106,`PoI18nService`),Zg()(),Tk(1107,` ou do browser.`),Zg()()()(),Jc(1108,`tr`,16)(1109,`td`,17)(1110,`div`,25)(1111,`span`,26),Tk(1112,` p-loading`),_u(1113,`br`),Zg()()(),Jc(1114,`td`,21)(1115,`code`,29),Tk(1116,`boolean`),Zg()(),Jc(1117,`td`,23)(1118,`p`)(1119,`code`),Tk(1120,`false`),Zg()()(),Jc(1121,`td`,24)(1122,`em`)(1123,`strong`),Tk(1124,`(opcional)`),Zg()(),Jc(1125,`p`),Tk(1126,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(1127,`tr`,16)(1128,`td`,17)(1129,`div`,25)(1130,`span`,26),Tk(1131,` p-multiple`),_u(1132,`br`),Zg()()(),Jc(1133,`td`,21)(1134,`code`,29),Tk(1135,`boolean`),Zg()(),Jc(1136,`td`,23)(1137,`p`)(1138,`code`),Tk(1139,`false`),Zg()()(),Jc(1140,`td`,24)(1141,`em`)(1142,`strong`),Tk(1143,`(opcional)`),Zg()(),Jc(1144,`p`),Tk(1145,`Permite a seleção de múltiplos itens.`),Zg(),Jc(1146,`blockquote`)(1147,`p`),Tk(1148,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),Jc(1149,`code`),Tk(1150,`[ 12345, 67890 ]`),Zg()()()()(),Jc(1151,`tr`,16)(1152,`td`,17)(1153,`div`,25)(1154,`span`,26),Tk(1155,` name`),_u(1156,`br`),Zg()()(),Jc(1157,`td`,21)(1158,`code`,27),Tk(1159,`string`),Zg()(),Jc(1160,`td`,23),Tk(1161,`-`),Zg(),Jc(1162,`td`,24)(1163,`p`),Tk(1164,`Nome e Id do componente.`),Zg()()(),Jc(1165,`tr`,16)(1166,`td`,17)(1167,`div`,25)(1168,`span`,26),Tk(1169,` p-no-autocomplete`),_u(1170,`br`),Zg()()(),Jc(1171,`td`,21)(1172,`code`,29),Tk(1173,`boolean`),Zg()(),Jc(1174,`td`,23)(1175,`p`)(1176,`code`),Tk(1177,`false`),Zg()()(),Jc(1178,`td`,24)(1179,`em`)(1180,`strong`),Tk(1181,`(opcional)`),Zg()(),Jc(1182,`p`),Tk(1183,`Define a propriedade nativa `),Jc(1184,`code`),Tk(1185,`autocomplete`),Zg(),Tk(1186,` do campo como `),Jc(1187,`code`),Tk(1188,`off`),Zg(),Tk(1189,`.`),Zg()()(),Jc(1190,`tr`,16)(1191,`td`,17)(1192,`div`,18)(1193,`span`,19),Tk(1194,` (p-error)`),_u(1195,`br`),Zg()()(),Jc(1196,`td`,21)(1197,`code`,22),Tk(1198,`EventEmitter`),Zg()(),Jc(1199,`td`,23),Tk(1200,`-`),Zg(),Jc(1201,`td`,24)(1202,`p`),Tk(1203,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),Zg()()(),Jc(1204,`tr`,16)(1205,`td`,17)(1206,`div`,25)(1207,`span`,26),Tk(1208,` p-optional`),_u(1209,`br`),Zg()()(),Jc(1210,`td`,21)(1211,`code`,29),Tk(1212,`boolean`),Zg()(),Jc(1213,`td`,23)(1214,`p`)(1215,`code`),Tk(1216,`false`),Zg()()(),Jc(1217,`td`,24)(1218,`em`)(1219,`strong`),Tk(1220,`(opcional)`),Zg()(),Jc(1221,`p`),Tk(1222,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(1223,`blockquote`)(1224,`p`),Tk(1225,`Não será exibida a indicação se:`),Zg()(),Jc(1226,`ul`)(1227,`li`),Tk(1228,`O campo conter `),Jc(1229,`code`),Tk(1230,`p-required`),Zg(),Tk(1231,`;`),Zg(),Jc(1232,`li`),Tk(1233,`Não possuir `),Jc(1234,`code`),Tk(1235,`p-help`),Zg(),Tk(1236,` e/ou `),Jc(1237,`code`),Tk(1238,`p-label`),Zg(),Tk(1239,`.`),Zg()()()(),Jc(1240,`tr`,16)(1241,`td`,17)(1242,`div`,25)(1243,`span`,26),Tk(1244,` p-placeholder`),_u(1245,`br`),Zg()()(),Jc(1246,`td`,21)(1247,`code`,27),Tk(1248,`string`),Zg()(),Jc(1249,`td`,23),Tk(1250,`-`),Zg(),Jc(1251,`td`,24)(1252,`p`),Tk(1253,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(1254,`tr`,16)(1255,`td`,17)(1256,`div`,25)(1257,`span`,26),Tk(1258,` p-helper`),_u(1259,`br`),Zg()()(),Jc(1260,`td`,21)(1261,`code`,38),Tk(1262,`PoHelperOptions `),Zg(),Jc(1263,`code`,27),Tk(1264,` string`),Zg()(),Jc(1265,`td`,23),Tk(1266,`-`),Zg(),Jc(1267,`td`,24)(1268,`em`)(1269,`strong`),Tk(1270,`(opcional)`),Zg()(),Jc(1271,`p`),Tk(1272,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1273,`code`),Tk(1274,`p-label`),Zg(),Tk(1275,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1276,`code`),Tk(1277,`p-label`),Zg(),Tk(1278,`.`),Zg(),Jc(1279,`blockquote`)(1280,`p`),Tk(1281,`Para mais informações acesse: `),Jc(1282,`a`,39),Tk(1283,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1284,`.`),Zg()(),Jc(1285,`blockquote`)(1286,`p`),Tk(1287,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1288,`code`),Tk(1289,`p-additional-help-tooltip`),Zg(),Tk(1290,` e `),Jc(1291,`code`),Tk(1292,`p-additional-help`),Zg(),Tk(1293,`) será ignorado.`),Zg()()()(),Jc(1294,`tr`,16)(1295,`td`,17)(1296,`div`,25)(1297,`span`,26),Tk(1298,` p-required`),_u(1299,`br`),Zg()()(),Jc(1300,`td`,21)(1301,`code`,29),Tk(1302,`boolean`),Zg()(),Jc(1303,`td`,23)(1304,`p`)(1305,`code`),Tk(1306,`false`),Zg()()(),Jc(1307,`td`,24)(1308,`em`)(1309,`strong`),Tk(1310,`(opcional)`),Zg()(),Jc(1311,`p`),Tk(1312,`Define que o campo será obrigatório.`),Zg(),Jc(1313,`blockquote`)(1314,`p`),Tk(1315,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1316,`code`),Tk(1317,`(p-disabled)`),Zg(),Tk(1318,`.`),Zg()()()(),Jc(1319,`tr`,16)(1320,`td`,17)(1321,`div`,18)(1322,`span`,19),Tk(1323,` (p-selected)`),_u(1324,`br`),Zg()()(),Jc(1325,`td`,21)(1326,`code`,22),Tk(1327,`EventEmitter`),Zg()(),Jc(1328,`td`,23),Tk(1329,`-`),Zg(),Jc(1330,`td`,24)(1331,`em`)(1332,`strong`),Tk(1333,`(opcional)`),Zg()(),Jc(1334,`p`),Tk(1335,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),Zg()()(),Jc(1336,`tr`,16)(1337,`td`,17)(1338,`div`,25)(1339,`span`,26),Tk(1340,` p-show-required`),_u(1341,`br`),Zg()()(),Jc(1342,`td`,21)(1343,`code`,29),Tk(1344,`boolean`),Zg()(),Jc(1345,`td`,23),Tk(1346,`-`),Zg(),Jc(1347,`td`,24)(1348,`p`),Tk(1349,`Define se a indicação de campo obrigatório seré exibida.`),Zg(),Jc(1350,`blockquote`)(1351,`p`),Tk(1352,`Não será exibida a indicação se:`),Zg()(),Jc(1353,`ul`)(1354,`li`),Tk(1355,`Não possuir `),Jc(1356,`code`),Tk(1357,`p-help`),Zg(),Tk(1358,` e/ou `),Jc(1359,`code`),Tk(1360,`p-label`),Zg(),Tk(1361,`.`),Zg()()()(),Jc(1362,`tr`,16)(1363,`td`,17)(1364,`div`,25)(1365,`span`,26),Tk(1366,` p-size`),_u(1367,`br`),Zg()()(),Jc(1368,`td`,21)(1369,`code`,27),Tk(1370,`string`),Zg()(),Jc(1371,`td`,23)(1372,`p`)(1373,`code`),Tk(1374,`medium`),Zg()()(),Jc(1375,`td`,24)(1376,`em`)(1377,`strong`),Tk(1378,`(opcional)`),Zg()(),Jc(1379,`p`),Tk(1380,`Define o tamanho do componente:`),Zg(),Jc(1381,`ul`)(1382,`li`)(1383,`code`),Tk(1384,`small`),Zg(),Tk(1385,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1386,`li`)(1387,`code`),Tk(1388,`medium`),Zg(),Tk(1389,`: altura do input como 44px.`),Zg()(),Jc(1390,`blockquote`)(1391,`p`),Tk(1392,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1393,`code`),Tk(1394,`medium`),Zg(),Tk(1395,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1396,`a`,40),Tk(1397,`po-theme`),Zg(),Tk(1398,`.`),Zg()()()(),Jc(1399,`tr`,16)(1400,`td`,17)(1401,`div`,25)(1402,`span`,26),Tk(1403,` p-spacing`),_u(1404,`br`),Zg()()(),Jc(1405,`td`,21)(1406,`code`,27),Tk(1407,`string`),Zg()(),Jc(1408,`td`,23)(1409,`p`)(1410,`code`),Tk(1411,`medium`),Zg()()(),Jc(1412,`td`,24)(1413,`em`)(1414,`strong`),Tk(1415,`(opcional)`),Zg()(),Jc(1416,`p`),Tk(1417,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Jc(1418,`strong`),Tk(1419,`PoTableColumnSpacing`),Zg(),Tk(1420,`.`),Zg(),Jc(1421,`blockquote`)(1422,`p`),Tk(1423,`Em nível de acessibilidade `),Jc(1424,`strong`),Tk(1425,`AA`),Zg(),Tk(1426,`, caso o valor de `),Jc(1427,`code`),Tk(1428,`p-spacing`),Zg(),Tk(1429,` não seja definido, o valor padrão será `),Jc(1430,`code`),Tk(1431,`extraSmall`),Zg(),Tk(1432,`
nos seguintes cen\xE1rios:`),Zg(),Jc(1433,`ul`)(1434,`li`),Tk(1435,`Quando o valor de `),Jc(1436,`code`),Tk(1437,`p-size`),Zg(),Tk(1438,` for `),Jc(1439,`code`),Tk(1440,`small`),Zg(),Tk(1441,`;`),Zg(),Jc(1442,`li`),Tk(1443,`Quando o valor padrão dos componentes for configurado como `),Jc(1444,`code`),Tk(1445,`small`),Zg(),Tk(1446,` no
`),Jc(1447,`a`,40),Tk(1448,`serviço de tema`),Zg(),Tk(1449,`.`),Zg()()()()(),Jc(1450,`tr`,16)(1451,`td`,17)(1452,`div`,25)(1453,`span`,26),Tk(1454,` p-text-wrap`),_u(1455,`br`),Zg()()(),Jc(1456,`td`,21)(1457,`code`,29),Tk(1458,`boolean`),Zg()(),Jc(1459,`td`,23)(1460,`p`)(1461,`code`),Tk(1462,`false`),Zg()()(),Jc(1463,`td`,24)(1464,`em`)(1465,`strong`),Tk(1466,`(opcional)`),Zg()(),Jc(1467,`p`),Tk(1468,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg(),Jc(1469,`p`),Tk(1470,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),Zg(),Jc(1471,`blockquote`)(1472,`p`),Tk(1473,`Incompatível com `),Jc(1474,`code`),Tk(1475,`virtual-scroll`),Zg(),Tk(1476,`, que requer altura fixa nas linhas.`),Zg()()()(),Jc(1477,`tr`,16)(1478,`td`,17)(1479,`div`,25)(1480,`span`,26),Tk(1481,` p-virtual-scroll`),_u(1482,`br`),Zg()()(),Jc(1483,`td`,21)(1484,`code`,29),Tk(1485,`boolean`),Zg()(),Jc(1486,`td`,23)(1487,`p`)(1488,`code`),Tk(1489,`true`),Zg()()(),Jc(1490,`td`,24)(1491,`em`)(1492,`strong`),Tk(1493,`(opcional)`),Zg()(),Jc(1494,`p`),Tk(1495,`Habilita o `),Jc(1496,`code`),Tk(1497,`virtual-scroll`),Zg(),Tk(1498,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Jc(1499,`code`),Tk(1500,`virtual-scroll`),Zg(),Tk(1501,` será ativado automaticamente.`),Zg(),Jc(1502,`blockquote`)(1503,`p`),Tk(1504,`Incompatível com `),Jc(1505,`code`),Tk(1506,`p-text-wrap`),Zg(),Tk(1507,` e `),Jc(1508,`code`),Tk(1509,`master-detail`),Zg(),Tk(1510,`, pois o `),Jc(1511,`code`),Tk(1512,`virtual-scroll`),Zg(),Tk(1513,` exige altura fixa nas linhas.`),Zg()()()()(),Jc(1514,`h3`,12),Tk(1515,`Métodos`),Zg(),Jc(1516,`table`,41)(1517,`tr`,16)(1518,`th`,42)(1519,`div`,25)(1520,`h4`)(1521,`span`,26),Tk(1522,` focus `),Zg()()()()(),Jc(1523,`tr`,24)(1524,`td`,24)(1525,`p`),Tk(1526,`Função que atribui foco ao componente.`),Zg(),Jc(1527,`p`),Tk(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1529,`pre`)(1530,`code`),Tk(1531,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),Zg()()()()(),_u(1532,`br`),Jc(1533,`table`,41)(1534,`tr`,16)(1535,`th`,42)(1536,`div`,25)(1537,`h4`)(1538,`span`,26),Tk(1539,` showAdditionalHelp `),Zg()()()()(),Jc(1540,`tr`,24)(1541,`td`,24)(1542,`p`),Tk(1543,`Método que exibe `),Jc(1544,`code`),Tk(1545,`p-helper`),Zg(),Tk(1546,` ou executa a ação definida em `),Jc(1547,`code`),Tk(1548,`p-helper{eventOnClick}`),Zg(),Tk(1549,` ou em `),Jc(1550,`code`),Tk(1551,`p-additionalHelp`),Zg(),Tk(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1553,`code`),Tk(1554,`p-keydown`),Zg(),Tk(1555,`.`),Zg(),Jc(1556,`blockquote`)(1557,`p`),Tk(1558,`Exibe ou oculta o conteúdo do componente `),Jc(1559,`code`),Tk(1560,`po-helper`),Zg(),Tk(1561,` quando o componente estiver com foco.`),Zg()(),Jc(1562,`pre`)(1563,`code`),Tk(1564,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),Zg()(),Jc(1565,`pre`)(1566,`code`),Tk(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1568,`br`),Jc(1569,`h3`),Tk(1570,`Interfaces`),Zg(),Jc(1571,`h4`,43)(1572,`code`,5),Tk(1573,`PoLookupAdvancedFilter`),Zg()(),Jc(1574,`div`,2)(1575,`p`),Tk(1576,`Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente na busca avançada.`),Zg()(),Jc(1577,`h4`,12),Tk(1578,`Propriedades`),Zg(),Jc(1579,`table`,13)(1580,`tr`,14)(1581,`th`,15),Tk(1582,`Nome`),Zg(),Jc(1583,`th`,15),Tk(1584,`Tipo`),Zg(),Jc(1585,`th`,15),Tk(1586,`Descrição`),Zg()(),Jc(1587,`tr`,16)(1588,`td`,17)(1589,`div`,25)(1590,`span`,26),Tk(1591,` additionalHelp`),_u(1592,`br`),Zg()()(),Jc(1593,`td`,21)(1594,`code`,44),Tk(1595,`Function`),Zg()(),Jc(1596,`td`,24)(1597,`em`)(1598,`strong`),Tk(1599,`(opcional)`),Zg()(),Jc(1600,`p`),Tk(1601,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(1602,`blockquote`)(1603,`p`),Tk(1604,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(1605,`tr`,16)(1606,`td`,17)(1607,`div`,25)(1608,`span`,26),Tk(1609,` additionalHelpTooltip`),_u(1610,`br`),Zg()()(),Jc(1611,`td`,21)(1612,`code`,27),Tk(1613,`string`),Zg()(),Jc(1614,`td`,24)(1615,`em`)(1616,`strong`),Tk(1617,`(opcional)`),Zg()(),Jc(1618,`p`),Tk(1619,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(1620,`code`),Tk(1621,`po-helper`),Zg(),Tk(1622,`.
`),Jc(1623,`strong`),Tk(1624,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(1625,`blockquote`)(1626,`p`),Tk(1627,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(1628,`tr`,16)(1629,`td`,17)(1630,`div`,25)(1631,`span`,26),Tk(1632,` advancedFilters`),_u(1633,`br`),Zg()()(),Jc(1634,`td`,21)(1635,`code`,28),Tk(1636,`Array<PoLookupAdvancedFilter>`),Zg()(),Jc(1637,`td`,24)(1638,`em`)(1639,`strong`),Tk(1640,`(opcional)`),Zg()(),Jc(1641,`p`),Tk(1642,`Lista de objetos dos campos que serão criados na busca avançada.`),Zg(),Jc(1643,`blockquote`)(1644,`p`),Tk(1645,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Zg()(),Jc(1646,`p`),Tk(1647,`Exemplo de URL com busca avançada:`),Zg(),Jc(1648,`p`)(1649,`code`),Tk(1650,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),Zg()(),Jc(1651,`p`),Tk(1652,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),Zg(),Jc(1653,`p`)(1654,`code`),Tk(1655,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),Zg()()()(),Jc(1656,`tr`,16)(1657,`td`,17)(1658,`div`,25)(1659,`span`,26),Tk(1660,` appendBox`),_u(1661,`br`),Zg()()(),Jc(1662,`td`,21)(1663,`code`,29),Tk(1664,`boolean`),Zg()(),Jc(1665,`td`,24)(1666,`em`)(1667,`strong`),Tk(1668,`(opcional)`),Zg()(),Jc(1669,`p`),Tk(1670,`Define que o `),Jc(1671,`code`),Tk(1672,`listbox`),Zg(),Tk(1673,` e/ou popover (`),Jc(1674,`code`),Tk(1675,`p-helper`),Zg(),Tk(1676,` e/ou `),Jc(1677,`code`),Tk(1678,`p-error-limit`),Zg(),Tk(1679,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Zg(),Jc(1680,`blockquote`)(1681,`p`),Tk(1682,`Quando utilizado com `),Jc(1683,`code`),Tk(1684,`p-helper`),Zg(),Tk(1685,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(1686,`tr`,16)(1687,`td`,17)(1688,`div`,25)(1689,`span`,26),Tk(1690,` autoHeight`),_u(1691,`br`),Zg()()(),Jc(1692,`td`,21)(1693,`code`,29),Tk(1694,`boolean`),Zg()(),Jc(1695,`td`,24)(1696,`em`)(1697,`strong`),Tk(1698,`(opcional)`),Zg()(),Jc(1699,`p`),Tk(1700,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),Zg(),Jc(1701,`p`)(1702,`strong`),Tk(1703,`Componentes compatíveis:`),Zg(),Jc(1704,`code`),Tk(1705,`po-multiselect`),Zg(),Tk(1706,`, `),Jc(1707,`code`),Tk(1708,`po-lookup`),Zg(),Tk(1709,`.`),Zg()()(),Jc(1710,`tr`,16)(1711,`td`,17)(1712,`div`,25)(1713,`span`,26),Tk(1714,` autoUpload`),_u(1715,`br`),Zg()()(),Jc(1716,`td`,21)(1717,`code`,29),Tk(1718,`boolean`),Zg()(),Jc(1719,`td`,24)(1720,`em`)(1721,`strong`),Tk(1722,`(opcional)`),Zg()(),Jc(1723,`p`),Tk(1724,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Zg(),Jc(1725,`p`)(1726,`strong`),Tk(1727,`Componente compatível`),Zg(),Tk(1728,`: `),Jc(1729,`code`),Tk(1730,`po-upload`),Zg()()()(),Jc(1731,`tr`,16)(1732,`td`,17)(1733,`div`,25)(1734,`span`,26),Tk(1735,` booleanFalse`),_u(1736,`br`),Zg()()(),Jc(1737,`td`,21)(1738,`code`,27),Tk(1739,`string`),Zg()(),Jc(1740,`td`,24)(1741,`em`)(1742,`strong`),Tk(1743,`(opcional)`),Zg()(),Jc(1744,`p`),Tk(1745,`Texto exibido quando o valor do componente for `),Jc(1746,`em`),Tk(1747,`false`),Zg(),Tk(1748,`.`),Zg()()(),Jc(1749,`tr`,16)(1750,`td`,17)(1751,`div`,25)(1752,`span`,26),Tk(1753,` booleanTrue`),_u(1754,`br`),Zg()()(),Jc(1755,`td`,21)(1756,`code`,27),Tk(1757,`string`),Zg()(),Jc(1758,`td`,24)(1759,`em`)(1760,`strong`),Tk(1761,`(opcional)`),Zg()(),Jc(1762,`p`),Tk(1763,`Texto exibido quando o valor do componente for `),Jc(1764,`em`),Tk(1765,`true`),Zg(),Tk(1766,`.`),Zg()()(),Jc(1767,`tr`,16)(1768,`td`,17)(1769,`div`,25)(1770,`span`,26),Tk(1771,` changeOnEnter`),_u(1772,`br`),Zg()()(),Jc(1773,`td`,21)(1774,`code`,29),Tk(1775,`boolean`),Zg()(),Jc(1776,`td`,24)(1777,`em`)(1778,`strong`),Tk(1779,`(opcional)`),Zg()(),Jc(1780,`p`),Tk(1781,`Indica que o evento `),Jc(1782,`code`),Tk(1783,`p-change`),Zg(),Tk(1784,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Jc(1785,`code`),Tk(1786,`po-combo`),Zg(),Tk(1787,`.`),Zg()()(),Jc(1788,`tr`,16)(1789,`td`,17)(1790,`div`,25)(1791,`span`,26),Tk(1792,` changeVisibleColumns`),_u(1793,`br`),Zg()()(),Jc(1794,`td`,21)(1795,`code`,44),Tk(1796,`Function`),Zg()(),Jc(1797,`td`,24)(1798,`em`)(1799,`strong`),Tk(1800,`(opcional)`),Zg()(),Jc(1801,`p`),Tk(1802,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Zg(),Jc(1803,`p`),Tk(1804,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg(),Jc(1805,`p`)(1806,`strong`),Tk(1807,`Componente compatível`),Zg(),Tk(1808,`: `),Jc(1809,`code`),Tk(1810,`po-lookup`),Zg()()()(),Jc(1811,`tr`,16)(1812,`td`,17)(1813,`div`,25)(1814,`span`,26),Tk(1815,` clean`),_u(1816,`br`),Zg()()(),Jc(1817,`td`,21)(1818,`code`,29),Tk(1819,`boolean`),Zg()(),Jc(1820,`td`,24)(1821,`em`)(1822,`strong`),Tk(1823,`(opcional)`),Zg()(),Jc(1824,`p`),Tk(1825,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Zg(),Jc(1826,`p`)(1827,`strong`),Tk(1828,`Componentes compatíveis:`),Zg(),Jc(1829,`code`),Tk(1830,`po-datepicker`),Zg(),Tk(1831,`, `),Jc(1832,`code`),Tk(1833,`po-datepicker-range`),Zg(),Tk(1834,`, `),Jc(1835,`code`),Tk(1836,`po-input`),Zg(),Tk(1837,`, `),Jc(1838,`code`),Tk(1839,`po-number`),Zg(),Tk(1840,`, `),Jc(1841,`code`),Tk(1842,`po-decimal`),Zg(),Tk(1843,`,
`),Jc(1844,`code`),Tk(1845,`po-combo`),Zg(),Tk(1846,`, `),Jc(1847,`code`),Tk(1848,`po-lookup`),Zg(),Tk(1849,`, `),Jc(1850,`code`),Tk(1851,`po-password`),Zg(),Tk(1852,`, `),Jc(1853,`code`),Tk(1854,`po-timepicker`),Zg(),Tk(1855,`.`),Zg()()(),Jc(1856,`tr`,16)(1857,`td`,17)(1858,`div`,25)(1859,`span`,26),Tk(1860,` columnRestoreManager`),_u(1861,`br`),Zg()()(),Jc(1862,`td`,21)(1863,`code`,44),Tk(1864,`Function`),Zg()(),Jc(1865,`td`,24)(1866,`em`)(1867,`strong`),Tk(1868,`(opcional)`),Zg()(),Jc(1869,`p`),Tk(1870,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Zg(),Jc(1871,`p`),Tk(1872,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg(),Jc(1873,`p`)(1874,`strong`),Tk(1875,`Componente compatível`),Zg(),Tk(1876,`: `),Jc(1877,`code`),Tk(1878,`po-lookup`),Zg()()()(),Jc(1879,`tr`,16)(1880,`td`,17)(1881,`div`,25)(1882,`span`,26),Tk(1883,` columns`),_u(1884,`br`),Zg()()(),Jc(1885,`td`,21)(1886,`code`,30),Tk(1887,`Array<PoLookupColumn> `),Zg(),Jc(1888,`code`,45),Tk(1889,` number`),Zg()(),Jc(1890,`td`,24)(1891,`em`)(1892,`strong`),Tk(1893,`(opcional)`),Zg()(),Jc(1894,`p`),Tk(1895,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Jc(1896,`code`),Tk(1897,`searchService`),Zg(),Tk(1898,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Jc(1899,`a`,46)(1900,`code`),Tk(1901,`PoLookupColumn`),Zg()(),Tk(1902,`.`),Zg(),Jc(1903,`blockquote`)(1904,`p`),Tk(1905,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Jc(1906,`em`),Tk(1907,`label`),Zg(),Tk(1908,` e `),Jc(1909,`em`),Tk(1910,`value`),Zg(),Tk(1911,` para valores
de tela e do model respectivamente.`),Zg()(),Jc(1912,`p`)(1913,`strong`),Tk(1914,`Componentes compatíveis:`),Zg(),Jc(1915,`code`),Tk(1916,`po-radio-group`),Zg(),Tk(1917,`, `),Jc(1918,`code`),Tk(1919,`po-lookup`),Zg(),Tk(1920,`, `),Jc(1921,`code`),Tk(1922,`po-checkbox-group`),Zg(),Tk(1923,`.`),Zg()()(),Jc(1924,`tr`,16)(1925,`td`,17)(1926,`div`,25)(1927,`span`,26),Tk(1928,` compactLabel`),_u(1929,`br`),Zg()()(),Jc(1930,`td`,21)(1931,`code`,29),Tk(1932,`boolean`),Zg()(),Jc(1933,`td`,24)(1934,`em`)(1935,`strong`),Tk(1936,`(opcional)`),Zg()(),Jc(1937,`p`),Tk(1938,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(1939,`p`),Tk(1940,`Quando habilitado (`),Jc(1941,`code`),Tk(1942,`true`),Zg(),Tk(1943,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(1944,`ul`)(1945,`li`)(1946,`code`),Tk(1947,`po-label`),Zg()(),Jc(1948,`li`)(1949,`code`),Tk(1950,`p-requirement (showRequired)`),Zg()(),Jc(1951,`li`)(1952,`code`),Tk(1953,`po-helper`),Zg()()(),Jc(1954,`p`),Tk(1955,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(1956,`p`),Tk(1957,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(1958,`ul`)(1959,`li`)(1960,`code`),Tk(1961,`--field-container-title-justify`),Zg()(),Jc(1962,`li`)(1963,`code`),Tk(1964,`--field-container-title-flex`),Zg()()(),Jc(1965,`p`),Tk(1966,`Exemplo:`),Zg(),Jc(1967,`pre`)(1968,`code`),Tk(1969,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(1970,`p`),Tk(1971,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(1972,`tr`,16)(1973,`td`,17)(1974,`div`,25)(1975,`span`,26),Tk(1976,` container`),_u(1977,`br`),Zg()()(),Jc(1978,`td`,21)(1979,`code`,27),Tk(1980,`string`),Zg()(),Jc(1981,`td`,24)(1982,`em`)(1983,`strong`),Tk(1984,`(opcional)`),Zg()(),Jc(1985,`p`),Tk(1986,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),Zg(),Jc(1987,`p`),Tk(1988,`Está propriedade é do tipo string, o valor que será titulo do contianer`),Zg()()(),Jc(1989,`tr`,16)(1990,`td`,17)(1991,`div`,25)(1992,`span`,26),Tk(1993,` customAction`),_u(1994,`br`),Zg()()(),Jc(1995,`td`,21)(1996,`code`,47),Tk(1997,`PoProgressAction`),Zg()(),Jc(1998,`td`,24)(1999,`em`)(2e3,`strong`),Tk(2001,`(opcional)`),Zg()(),Jc(2002,`p`),Tk(2003,`Define uma ação personalizada no componente `),Jc(2004,`code`),Tk(2005,`po-upload`),Zg(),Tk(2006,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Zg(),Jc(2007,`p`)(2008,`strong`),Tk(2009,`Componente compatível`),Zg(),Tk(2010,`: `),Jc(2011,`code`),Tk(2012,`po-upload`),Zg(),Tk(2013,`,`),Zg(),Jc(2014,`p`)(2015,`strong`),Tk(2016,`Exemplo de configuração`),Zg(),Tk(2017,`:`),Zg(),Jc(2018,`pre`)(2019,`code`,48),Tk(2020,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),Zg()()()(),Jc(2021,`tr`,16)(2022,`td`,17)(2023,`div`,25)(2024,`span`,26),Tk(2025,` customActionClick`),_u(2026,`br`),Zg()()(),Jc(2027,`td`,21)(2028,`code`,49),Tk(2029,`(file: PoUploadFile) => void`),Zg()(),Jc(2030,`td`,24)(2031,`em`)(2032,`strong`),Tk(2033,`(opcional)`),Zg()(),Jc(2034,`p`),Tk(2035,`Evento emitido ao clicar na ação personalizada configurada no `),Jc(2036,`code`),Tk(2037,`p-custom-action`),Zg(),Tk(2038,`.`),Zg(),Jc(2039,`p`)(2040,`strong`),Tk(2041,`Componente compatível`),Zg(),Tk(2042,`: `),Jc(2043,`code`),Tk(2044,`po-upload`),Zg(),Tk(2045,`,`),Zg(),Jc(2046,`p`),Tk(2047,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Zg(),Jc(2048,`p`)(2049,`strong`),Tk(2050,`Parâmetro do evento`),Zg(),Tk(2051,`:`),Zg(),Jc(2052,`ul`)(2053,`li`)(2054,`code`),Tk(2055,`file`),Zg(),Tk(2056,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Jc(2057,`code`),Tk(2058,`PoUploadFile`),Zg(),Tk(2059,` e contém informações sobre o arquivo, como nome, status e progresso.`),Zg()(),Jc(2060,`p`)(2061,`strong`),Tk(2062,`Exemplo de uso`),Zg(),Tk(2063,`:`),Zg(),Jc(2064,`pre`)(2065,`code`,48),Tk(2066,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),Zg()()()(),Jc(2067,`tr`,16)(2068,`td`,17)(2069,`div`,25)(2070,`span`,26),Tk(2071,` debounceTime`),_u(2072,`br`),Zg()()(),Jc(2073,`td`,21)(2074,`code`,45),Tk(2075,`number`),Zg()(),Jc(2076,`td`,24)(2077,`em`)(2078,`strong`),Tk(2079,`(opcional)`),Zg()(),Jc(2080,`p`),Tk(2081,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Jc(2082,`code`),Tk(2083,`p-filter-service`),Zg(),Tk(2084,`).`),Zg(),Jc(2085,`p`)(2086,`strong`),Tk(2087,`Componentes compatíveis:`),Zg(),Jc(2088,`code`),Tk(2089,`po-combo`),Zg(),Tk(2090,`, `),Jc(2091,`code`),Tk(2092,`po-multiselect`),Zg(),Tk(2093,`.`),Zg()()(),Jc(2094,`tr`,16)(2095,`td`,17)(2096,`div`,25)(2097,`span`,26),Tk(2098,` decimalsLength`),_u(2099,`br`),Zg()()(),Jc(2100,`td`,21)(2101,`code`,45),Tk(2102,`number`),Zg()(),Jc(2103,`td`,24)(2104,`em`)(2105,`strong`),Tk(2106,`(opcional)`),Zg()(),Jc(2107,`p`),Tk(2108,`Quantidade máxima de casas decimais.`),Zg(),Jc(2109,`blockquote`)(2110,`p`),Tk(2111,`Esta propriedade só pode ser utilizada quando o `),Jc(2112,`code`),Tk(2113,`type`),Zg(),Tk(2114,` for `),Jc(2115,`em`),Tk(2116,`currency`),Zg(),Tk(2117,` ou `),Jc(2118,`em`),Tk(2119,`decimal`),Zg(),Tk(2120,`.`),Zg()(),Jc(2121,`blockquote`)(2122,`p`),Tk(2123,`Quando utilizado com `),Jc(2124,`code`),Tk(2125,`displayFormat`),Zg(),Tk(2126,`, será respeitado o valor `),Jc(2127,`strong`),Tk(2128,`mais restritivo`),Zg(),Tk(2129,` entre esta propriedade e o número de casas decimais definido no formato.`),Zg()()()(),Jc(2130,`tr`,16)(2131,`td`,17)(2132,`div`,25)(2133,`span`,26),Tk(2134,` directory`),_u(2135,`br`),Zg()()(),Jc(2136,`td`,21)(2137,`code`,29),Tk(2138,`boolean`),Zg()(),Jc(2139,`td`,24)(2140,`em`)(2141,`strong`),Tk(2142,`(opcional)`),Zg()(),Jc(2143,`p`),Tk(2144,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Zg(),Jc(2145,`blockquote`)(2146,`p`),Tk(2147,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Zg()(),Jc(2148,`blockquote`)(2149,`p`),Tk(2150,`Definição não suportada pelo browser `),Jc(2151,`strong`),Tk(2152,`Internet Explorer`),Zg(),Tk(2153,`, todavia será possível a seleção de arquivos padrão.`),Zg()(),Jc(2154,`p`)(2155,`strong`),Tk(2156,`Componente compatível`),Zg(),Tk(2157,`: `),Jc(2158,`code`),Tk(2159,`po-upload`),Zg()()()(),Jc(2160,`tr`,16)(2161,`td`,17)(2162,`div`,25)(2163,`span`,26),Tk(2164,` disabled`),_u(2165,`br`),Zg()()(),Jc(2166,`td`,21)(2167,`code`,29),Tk(2168,`boolean`),Zg()(),Jc(2169,`td`,24)(2170,`em`)(2171,`strong`),Tk(2172,`(opcional)`),Zg()(),Jc(2173,`p`),Tk(2174,`Desabilita o campo caso informar o valor `),Jc(2175,`em`),Tk(2176,`true`),Zg(),Tk(2177,`.`),Zg()()(),Jc(2178,`tr`,16)(2179,`td`,17)(2180,`div`,25)(2181,`span`,26),Tk(2182,` disabledInitFilter`),_u(2183,`br`),Zg()()(),Jc(2184,`td`,21)(2185,`code`,29),Tk(2186,`boolean`),Zg()(),Jc(2187,`td`,24)(2188,`em`)(2189,`strong`),Tk(2190,`(opcional)`),Zg()(),Jc(2191,`p`),Tk(2192,`Desabilita o filtro inicial no serviço do `),Jc(2193,`code`),Tk(2194,`po-combo`),Zg(),Tk(2195,`, que é executado no primeiro clique no campo.`),Zg()()(),Jc(2196,`tr`,16)(2197,`td`,17)(2198,`div`,25)(2199,`span`,26),Tk(2200,` disabledTabFilter`),_u(2201,`br`),Zg()()(),Jc(2202,`td`,21)(2203,`code`,29),Tk(2204,`boolean`),Zg()(),Jc(2205,`td`,24)(2206,`em`)(2207,`strong`),Tk(2208,`(opcional)`),Zg()(),Jc(2209,`p`),Tk(2210,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Jc(2211,`code`),Tk(2212,`po-combo`),Zg(),Tk(2213,`.`),Zg()()(),Jc(2214,`tr`,16)(2215,`td`,17)(2216,`div`,25)(2217,`span`,26),Tk(2218,` displayFormat`),_u(2219,`br`),Zg()()(),Jc(2220,`td`,21)(2221,`code`,27),Tk(2222,`string`),Zg()(),Jc(2223,`td`,24)(2224,`em`)(2225,`strong`),Tk(2226,`(opcional)`),Zg()(),Jc(2227,`p`),Tk(2228,`Define uma máscara de formatação numérica avançada para o campo.`),Zg(),Jc(2229,`p`),Tk(2230,`Simbologia suportada:`),Zg(),Jc(2231,`ul`)(2232,`li`)(2233,`code`),Tk(2234,`9`),Zg(),Tk(2235,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Zg(),Jc(2236,`li`)(2237,`code`),Tk(2238,`>`),Zg(),Tk(2239,`: Supressão de zero à esquerda (dígito não obrigatório);`),Zg(),Jc(2240,`li`)(2241,`code`),Tk(2242,`<`),Zg(),Tk(2243,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Zg(),Jc(2244,`li`)(2245,`code`),Tk(2246,`.`),Zg(),Tk(2247,`: Separador decimal (convertido conforme locale);`),Zg(),Jc(2248,`li`)(2249,`code`),Tk(2250,`,`),Zg(),Tk(2251,`: Separador de milhar/grupo (convertido conforme locale);`),Zg(),Jc(2252,`li`)(2253,`code`),Tk(2254,`-`),Zg(),Tk(2255,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Zg()(),Jc(2256,`blockquote`)(2257,`p`),Tk(2258,`Quando utilizado com `),Jc(2259,`code`),Tk(2260,`decimalsLength`),Zg(),Tk(2261,` ou `),Jc(2262,`code`),Tk(2263,`thousandMaxlength`),Zg(),Tk(2264,`, será respeitado o valor `),Jc(2265,`strong`),Tk(2266,`mais restritivo`),Zg(),Tk(2267,` entre a propriedade e o formato.`),Zg()(),Jc(2268,`p`),Tk(2269,`Exemplos: `),Jc(2270,`code`),Tk(2271,`'>>>,>>>,>>9.99'`),Zg(),Tk(2272,`, `),Jc(2273,`code`),Tk(2274,`'->>9.99'`),Zg(),Tk(2275,`, `),Jc(2276,`code`),Tk(2277,`'999.9'`),Zg()(),Jc(2278,`blockquote`)(2279,`p`),Tk(2280,`Esta propriedade só pode ser utilizada quando o `),Jc(2281,`code`),Tk(2282,`type`),Zg(),Tk(2283,` for `),Jc(2284,`em`),Tk(2285,`currency`),Zg(),Tk(2286,` ou `),Jc(2287,`em`),Tk(2288,`decimal`),Zg(),Tk(2289,`.`),Zg()(),Jc(2290,`p`)(2291,`strong`),Tk(2292,`Componente compatível:`),Zg(),Jc(2293,`code`),Tk(2294,`po-decimal`),Zg(),Tk(2295,`.`),Zg()()(),Jc(2296,`tr`,16)(2297,`td`,17)(2298,`div`,25)(2299,`span`,26),Tk(2300,` divider`),_u(2301,`br`),Zg()()(),Jc(2302,`td`,21)(2303,`code`,27),Tk(2304,`string`),Zg()(),Jc(2305,`td`,24)(2306,`em`)(2307,`strong`),Tk(2308,`(opcional)`),Zg()(),Jc(2309,`p`),Tk(2310,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),Zg()()(),Jc(2311,`tr`,16)(2312,`td`,17)(2313,`div`,25)(2314,`span`,26),Tk(2315,` dragDrop`),_u(2316,`br`),Zg()()(),Jc(2317,`td`,21)(2318,`code`,29),Tk(2319,`boolean`),Zg()(),Jc(2320,`td`,24)(2321,`em`)(2322,`strong`),Tk(2323,`(opcional)`),Zg()(),Jc(2324,`p`),Tk(2325,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Zg(),Jc(2326,`blockquote`)(2327,`p`),Tk(2328,`Recomendamos utilizar apenas um `),Jc(2329,`code`),Tk(2330,`po-upload`),Zg(),Tk(2331,` com esta funcionalidade por tela.`),Zg()(),Jc(2332,`p`)(2333,`strong`),Tk(2334,`Componente compatível`),Zg(),Tk(2335,`: `),Jc(2336,`code`),Tk(2337,`po-upload`),Zg()()()(),Jc(2338,`tr`,16)(2339,`td`,17)(2340,`div`,25)(2341,`span`,26),Tk(2342,` dragDropHeight`),_u(2343,`br`),Zg()()(),Jc(2344,`td`,21)(2345,`code`,45),Tk(2346,`number`),Zg()(),Jc(2347,`td`,24)(2348,`em`)(2349,`strong`),Tk(2350,`(opcional)`),Zg()(),Jc(2351,`p`),Tk(2352,`Define em `),Jc(2353,`em`),Tk(2354,`pixels`),Zg(),Tk(2355,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Jc(2356,`code`),Tk(2357,`160px`),Zg(),Tk(2358,`.`),Zg(),Jc(2359,`blockquote`)(2360,`p`),Tk(2361,`Esta propriedade funciona somente se a propriedade `),Jc(2362,`code`),Tk(2363,`p-drag-drop`),Zg(),Tk(2364,` estiver habilitada.`),Zg()(),Jc(2365,`p`)(2366,`strong`),Tk(2367,`Componente compatível`),Zg(),Tk(2368,`: `),Jc(2369,`code`),Tk(2370,`po-upload`),Zg()()()(),Jc(2371,`tr`,16)(2372,`td`,17)(2373,`div`,25)(2374,`span`,26),Tk(2375,` errorAsyncFunction`),_u(2376,`br`),Zg()()(),Jc(2377,`td`,21)(2378,`code`,50),Tk(2379,`(value) => Observable<boolean>`),Zg()(),Jc(2380,`td`,24)(2381,`em`)(2382,`strong`),Tk(2383,`(opcional)`),Zg()(),Jc(2384,`p`),Tk(2385,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(2386,`code`),Tk(2387,`change`),Zg(),Tk(2388,` ou `),Jc(2389,`code`),Tk(2390,`change-model`),Zg(),Tk(2391,`, dependendo do valor da propriedade `),Jc(2392,`code`),Tk(2393,`triggerMode`),Zg(),Tk(2394,`.`),Zg(),Jc(2395,`blockquote`)(2396,`p`),Tk(2397,`Retorna `),Jc(2398,`code`),Tk(2399,`Observable com o valor true`),Zg(),Tk(2400,` para sinalizar o erro `),Jc(2401,`code`),Tk(2402,`false`),Zg(),Tk(2403,` para indicar que não há erro.`),Zg()(),Jc(2404,`p`)(2405,`strong`),Tk(2406,`Componente compatível`),Zg(),Tk(2407,`: `),Jc(2408,`code`),Tk(2409,`po-datepicker`),Zg()()()(),Jc(2410,`tr`,16)(2411,`td`,17)(2412,`div`,25)(2413,`span`,26),Tk(2414,` errorAsyncProperties`),_u(2415,`br`),Zg()()(),Jc(2416,`td`,21)(2417,`code`,51),Tk(2418,`ErrorAsyncProperties`),Zg()(),Jc(2419,`td`,24)(2420,`em`)(2421,`strong`),Tk(2422,`(opcional)`),Zg()(),Jc(2423,`p`),Tk(2424,`Realiza alguma validação customizada assíncrona no componente.`),Zg(),Jc(2425,`p`)(2426,`strong`),Tk(2427,`Componentes compatíveis:`),Zg(),Jc(2428,`code`),Tk(2429,`po-input`),Zg(),Tk(2430,`, `),Jc(2431,`code`),Tk(2432,`po-number`),Zg(),Tk(2433,`, `),Jc(2434,`code`),Tk(2435,`po-decimal`),Zg(),Tk(2436,`, `),Jc(2437,`code`),Tk(2438,`po-password`),Zg(),Tk(2439,`.`),Zg()()(),Jc(2440,`tr`,16)(2441,`td`,17)(2442,`div`,25)(2443,`span`,26),Tk(2444,` errorLimit`),_u(2445,`br`),Zg()()(),Jc(2446,`td`,21)(2447,`code`,29),Tk(2448,`boolean`),Zg()(),Jc(2449,`td`,24)(2450,`em`)(2451,`strong`),Tk(2452,`(opcional)`),Zg()(),Jc(2453,`p`),Tk(2454,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(2455,`blockquote`)(2456,`p`),Tk(2457,`Caso essa propriedade seja definida como `),Jc(2458,`code`),Tk(2459,`true`),Zg(),Tk(2460,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()(),Jc(2461,`p`)(2462,`strong`),Tk(2463,`Componentes compatíveis:`),Zg(),Jc(2464,`code`),Tk(2465,`po-checkbox-group`),Zg(),Tk(2466,`, `),Jc(2467,`code`),Tk(2468,`po-combo`),Zg(),Tk(2469,`, `),Jc(2470,`code`),Tk(2471,`po-datepicker`),Zg(),Tk(2472,`, `),Jc(2473,`code`),Tk(2474,`po-datepicker-range`),Zg(),Tk(2475,`, `),Jc(2476,`code`),Tk(2477,`po-decimal`),Zg(),Tk(2478,`, `),Jc(2479,`code`),Tk(2480,`po-input`),Zg(),Tk(2481,`, `),Jc(2482,`code`),Tk(2483,`po-lookup`),Zg(),Tk(2484,`, `),Jc(2485,`code`),Tk(2486,`po-multiselect`),Zg(),Tk(2487,`, `),Jc(2488,`code`),Tk(2489,`po-number`),Zg(),Tk(2490,`, `),Jc(2491,`code`),Tk(2492,`po-password`),Zg(),Tk(2493,`, `),Jc(2494,`code`),Tk(2495,`po-radio-group`),Zg(),Tk(2496,`, `),Jc(2497,`code`),Tk(2498,`po-select`),Zg(),Tk(2499,`,
`),Jc(2500,`code`),Tk(2501,`po-switch`),Zg(),Tk(2502,`, `),Jc(2503,`code`),Tk(2504,`po-textarea`),Zg(),Tk(2505,`, `),Jc(2506,`code`),Tk(2507,`po-timepicker`),Zg(),Tk(2508,`.`),Zg()()(),Jc(2509,`tr`,16)(2510,`td`,17)(2511,`div`,25)(2512,`span`,26),Tk(2513,` errorMessage`),_u(2514,`br`),Zg()()(),Jc(2515,`td`,21)(2516,`code`,27),Tk(2517,`string`),Zg()(),Jc(2518,`td`,24)(2519,`em`)(2520,`strong`),Tk(2521,`(opcional)`),Zg()(),Jc(2522,`p`),Tk(2523,`Mensagem que será apresentada quando o campo ficar inválido.`),Zg(),Jc(2524,`p`),Tk(2525,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),Zg(),Jc(2526,`ul`)(2527,`li`),Tk(2528,`pattern;`),Zg(),Jc(2529,`li`),Tk(2530,`minValue;`),Zg(),Jc(2531,`li`),Tk(2532,`maxValue;`),Zg(),Jc(2533,`li`),Tk(2534,`required;`),Zg()(),Jc(2535,`blockquote`)(2536,`p`),Tk(2537,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Jc(2538,`code`),Tk(2539,`po-datepicker`),Zg(),Tk(2540,`, `),Jc(2541,`code`),Tk(2542,`po-input`),Zg(),Tk(2543,`, `),Jc(2544,`code`),Tk(2545,`po-number`),Zg(),Tk(2546,`, `),Jc(2547,`code`),Tk(2548,`po-decimal`),Zg(),Tk(2549,`, `),Jc(2550,`code`),Tk(2551,`po-password`),Zg(),Tk(2552,`, `),Jc(2553,`code`),Tk(2554,`po-timepicker`),Zg(),Tk(2555,`, \xE9 necess\xE1rio que a propriedade
`),Jc(2556,`code`),Tk(2557,`requiredFieldErrorMessage`),Zg(),Tk(2558,` esteja como `),Jc(2559,`code`),Tk(2560,`true`),Zg(),Tk(2561,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Jc(2562,`code`),Tk(2563,`po-datepicker-range`),Zg(),Tk(2564,`, `),Jc(2565,`code`),Tk(2566,`po-select`),Zg(),Tk(2567,`, `),Jc(2568,`code`),Tk(2569,`po-checkbox-group`),Zg(),Tk(2570,`, `),Jc(2571,`code`),Tk(2572,`po-radio-group`),Zg(),Tk(2573,`, `),Jc(2574,`code`),Tk(2575,`po-multiselect`),Zg(),Tk(2576,`, `),Jc(2577,`code`),Tk(2578,`po-combo`),Zg(),Tk(2579,`,
`),Jc(2580,`code`),Tk(2581,`po-lookup`),Zg(),Tk(2582,` e `),Jc(2583,`code`),Tk(2584,`po-textarea`),Zg(),Tk(2585,` não é necessário passar a propriedade `),Jc(2586,`code`),Tk(2587,`requiredFieldErrorMessage`),Zg(),Tk(2588,`.`),Zg()(),Jc(2589,`p`)(2590,`strong`),Tk(2591,`Componentes compatíveis:`),Zg(),Jc(2592,`code`),Tk(2593,`po-checkbox-group`),Zg(),Tk(2594,`, `),Jc(2595,`code`),Tk(2596,`po-combo`),Zg(),Tk(2597,`, `),Jc(2598,`code`),Tk(2599,`po-datepicker`),Zg(),Tk(2600,`, `),Jc(2601,`code`),Tk(2602,`po-datepicker-range`),Zg(),Tk(2603,`, `),Jc(2604,`code`),Tk(2605,`po-decimal`),Zg(),Tk(2606,`, `),Jc(2607,`code`),Tk(2608,`po-input`),Zg(),Tk(2609,`, `),Jc(2610,`code`),Tk(2611,`po-lookup`),Zg(),Tk(2612,`, `),Jc(2613,`code`),Tk(2614,`po-multiselect`),Zg(),Tk(2615,`, `),Jc(2616,`code`),Tk(2617,`po-number`),Zg(),Tk(2618,`, `),Jc(2619,`code`),Tk(2620,`po-password`),Zg(),Tk(2621,`, `),Jc(2622,`code`),Tk(2623,`po-radio-group`),Zg(),Tk(2624,`, `),Jc(2625,`code`),Tk(2626,`po-select`),Zg(),Tk(2627,`,
`),Jc(2628,`code`),Tk(2629,`po-switch`),Zg(),Tk(2630,`, `),Jc(2631,`code`),Tk(2632,`po-textarea`),Zg(),Tk(2633,`, `),Jc(2634,`code`),Tk(2635,`po-timepicker`),Zg(),Tk(2636,`.`),Zg()()(),Jc(2637,`tr`,16)(2638,`td`,17)(2639,`div`,25)(2640,`span`,26),Tk(2641,` fieldLabel`),_u(2642,`br`),Zg()()(),Jc(2643,`td`,21)(2644,`code`,27),Tk(2645,`string`),Zg()(),Jc(2646,`td`,24)(2647,`em`)(2648,`strong`),Tk(2649,`(opcional)`),Zg()(),Jc(2650,`p`),Tk(2651,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),Zg(),Jc(2652,`p`),Tk(2653,`O valor padrão é: `),Jc(2654,`code`),Tk(2655,`label`),Zg(),Tk(2656,`.`),Zg(),Jc(2657,`blockquote`)(2658,`p`),Tk(2659,`Esta propriedade pode ser utilizada em conjunto com: `),Jc(2660,`code`),Tk(2661,`options`),Zg(),Tk(2662,`, `),Jc(2663,`code`),Tk(2664,`optionsService`),Zg(),Tk(2665,` e `),Jc(2666,`code`),Tk(2667,`searchService`),Zg(),Tk(2668,`.`),Zg()()()(),Jc(2669,`tr`,16)(2670,`td`,17)(2671,`div`,25)(2672,`span`,26),Tk(2673,` fieldValue`),_u(2674,`br`),Zg()()(),Jc(2675,`td`,21)(2676,`code`,27),Tk(2677,`string`),Zg()(),Jc(2678,`td`,24)(2679,`em`)(2680,`strong`),Tk(2681,`(opcional)`),Zg()(),Jc(2682,`p`),Tk(2683,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),Zg(),Jc(2684,`p`),Tk(2685,`O valor padrão é: `),Jc(2686,`code`),Tk(2687,`value`),Zg(),Tk(2688,`.`),Zg(),Jc(2689,`blockquote`)(2690,`p`),Tk(2691,`Esta propriedade pode ser utilizada em conjunto com: `),Jc(2692,`code`),Tk(2693,`options`),Zg(),Tk(2694,`, `),Jc(2695,`code`),Tk(2696,`optionsService`),Zg(),Tk(2697,` e `),Jc(2698,`code`),Tk(2699,`searchService`),Zg(),Tk(2700,`.`),Zg()()()(),Jc(2701,`tr`,16)(2702,`td`,17)(2703,`div`,25)(2704,`span`,26),Tk(2705,` filterMinlength`),_u(2706,`br`),Zg()()(),Jc(2707,`td`,21)(2708,`code`,45),Tk(2709,`number`),Zg()(),Jc(2710,`td`,24)(2711,`em`)(2712,`strong`),Tk(2713,`(opcional)`),Zg()(),Jc(2714,`p`),Tk(2715,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Jc(2716,`code`),Tk(2717,`po-combo`),Zg(),Tk(2718,`.`),Zg()()(),Jc(2719,`tr`,16)(2720,`td`,17)(2721,`div`,25)(2722,`span`,26),Tk(2723,` filterMode`),_u(2724,`br`),Zg()()(),Jc(2725,`td`,21)(2726,`code`,52),Tk(2727,`PoMultiselectFilterMode`),Zg()(),Jc(2728,`td`,24)(2729,`em`)(2730,`strong`),Tk(2731,`(opcional)`),Zg()(),Jc(2732,`p`),Tk(2733,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Jc(2734,`code`),Tk(2735,`startsWith`),Zg(),Tk(2736,`, `),Jc(2737,`code`),Tk(2738,`contains`),Zg(),Tk(2739,` ou `),Jc(2740,`code`),Tk(2741,`endsWith`),Zg(),Tk(2742,`.`),Zg(),Jc(2743,`blockquote`)(2744,`p`),Tk(2745,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),Zg()(),Jc(2746,`p`)(2747,`strong`),Tk(2748,`Componente compatível:`),Zg(),Jc(2749,`code`),Tk(2750,`po-multiselect`),Zg(),Tk(2751,`.`),Zg()()(),Jc(2752,`tr`,16)(2753,`td`,17)(2754,`div`,25)(2755,`span`,26),Tk(2756,` forceBooleanComponentType`),_u(2757,`br`),Zg()()(),Jc(2758,`td`,21)(2759,`code`,53),Tk(2760,`ForceBooleanComponentEnum`),Zg()(),Jc(2761,`td`,24)(2762,`em`)(2763,`strong`),Tk(2764,`(opcional)`),Zg()(),Jc(2765,`p`),Tk(2766,`Valores aceitos:`),Zg(),Jc(2767,`ul`)(2768,`li`),Tk(2769,`ForceBooleanComponentEnum.switch`),Zg(),Jc(2770,`li`),Tk(2771,`ForceBooleanComponentEnum.checkbox`),Zg()()()(),Jc(2772,`tr`,16)(2773,`td`,17)(2774,`div`,25)(2775,`span`,26),Tk(2776,` forceOptionsComponentType`),_u(2777,`br`),Zg()()(),Jc(2778,`td`,21)(2779,`code`,54),Tk(2780,`ForceOptionComponentEnum`),Zg()(),Jc(2781,`td`,24)(2782,`em`)(2783,`strong`),Tk(2784,`(opcional)`),Zg()(),Jc(2785,`p`),Tk(2786,`pode ser utilizada em conjunto com a propriedade `),Jc(2787,`code`),Tk(2788,`options`),Zg(),Tk(2789,` forçando o componente a renderizar um `),Jc(2790,`code`),Tk(2791,`po-select`),Zg(),Tk(2792,` ou `),Jc(2793,`code`),Tk(2794,`po-radio-group`),Zg(),Tk(2795,`.`),Zg(),Jc(2796,`p`),Tk(2797,`Valores aceitos:`),Zg(),Jc(2798,`ul`)(2799,`li`),Tk(2800,`ForceOptionComponentEnum.radioGroup`),Zg(),Jc(2801,`li`),Tk(2802,`ForceOptionComponentEnum.select`),Zg()(),Jc(2803,`blockquote`)(2804,`p`),Tk(2805,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Jc(2806,`code`),Tk(2807,`optionsMulti`),Zg(),Tk(2808,` e `),Jc(2809,`code`),Tk(2810,`optionsService`),Zg(),Tk(2811,`.`),Zg()()()(),Jc(2812,`tr`,16)(2813,`td`,17)(2814,`div`,25)(2815,`span`,26),Tk(2816,` formField`),_u(2817,`br`),Zg()()(),Jc(2818,`td`,21)(2819,`code`,27),Tk(2820,`string`),Zg()(),Jc(2821,`td`,24)(2822,`em`)(2823,`strong`),Tk(2824,`(opcional)`),Zg()(),Jc(2825,`p`),Tk(2826,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Jc(2827,`code`),Tk(2828,`url`),Zg(),Tk(2829,`.`),Zg(),Jc(2830,`blockquote`)(2831,`p`),Tk(2832,`O valor default é `),Jc(2833,`code`),Tk(2834,`files`),Zg()()(),Jc(2835,`p`)(2836,`strong`),Tk(2837,`Componente compatível`),Zg(),Tk(2838,`: `),Jc(2839,`code`),Tk(2840,`po-upload`),Zg()()()(),Jc(2841,`tr`,16)(2842,`td`,17)(2843,`div`,25)(2844,`span`,26),Tk(2845,` format`),_u(2846,`br`),Zg()()(),Jc(2847,`td`,21)(2848,`code`,27),Tk(2849,`string `),Zg(),Jc(2850,`code`,32),Tk(2851,` Array<string>`),Zg()(),Jc(2852,`td`,24)(2853,`em`)(2854,`strong`),Tk(2855,`(opcional)`),Zg()(),Jc(2856,`p`),Tk(2857,`Formato de exibição no campo.`),Zg(),Jc(2858,`p`),Tk(2859,`Ao utilizar esta propriedade com o `),Jc(2860,`code`),Tk(2861,`type`),Zg(),Jc(2862,`em`),Tk(2863,`PoDynamicFieldType.Date`),Zg(),Tk(2864,` ou `),Jc(2865,`em`),Tk(2866,`PoDynamicFieldType.DateTime`),Zg(),Tk(2867,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),Zg(),Jc(2868,`p`),Tk(2869,`Valores válidos:`),Zg(),Jc(2870,`ul`)(2871,`li`),Tk(2872,`dd/mm/yyyy`),Zg(),Jc(2873,`li`),Tk(2874,`mm/dd/yyyy`),Zg(),Jc(2875,`li`),Tk(2876,`yyyy/mm/dd`),Zg()(),Jc(2877,`p`),Tk(2878,`Ao utilizar com o `),Jc(2879,`code`),Tk(2880,`type`),Zg(),Jc(2881,`em`),Tk(2882,`PoDynamicFieldType.Time`),Zg(),Tk(2883,`, define o formato de exibição do horário:`),Zg(),Jc(2884,`p`),Tk(2885,`Valores válidos:`),Zg(),Jc(2886,`ul`)(2887,`li`)(2888,`code`),Tk(2889,`24`),Zg(),Tk(2890,`: formato de 24 horas (padrão)`),Zg(),Jc(2891,`li`)(2892,`code`),Tk(2893,`12`),Zg(),Tk(2894,`: formato de 12 horas com indicador AM/PM`),Zg()(),Jc(2895,`p`),Tk(2896,`Também pode-se utilizar em conjunto com `),Jc(2897,`code`),Tk(2898,`searchService`),Zg(),Tk(2899,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),Zg(),Jc(2900,`p`)(2901,`strong`),Tk(2902,`Componentes compatíveis:`),Zg(),Jc(2903,`code`),Tk(2904,`po-datepicker`),Zg(),Tk(2905,`, `),Jc(2906,`code`),Tk(2907,`po-datetimepicker`),Zg(),Tk(2908,`, `),Jc(2909,`code`),Tk(2910,`po-timepicker`),Zg(),Tk(2911,`, `),Jc(2912,`code`),Tk(2913,`po-lookup`),Zg(),Tk(2914,`.`),Zg()()(),Jc(2915,`tr`,16)(2916,`td`,17)(2917,`div`,25)(2918,`span`,26),Tk(2919,` formatModel`),_u(2920,`br`),Zg()()(),Jc(2921,`td`,21)(2922,`code`,29),Tk(2923,`boolean`),Zg()(),Jc(2924,`td`,24)(2925,`em`)(2926,`strong`),Tk(2927,`(opcional)`),Zg()(),Jc(2928,`p`),Tk(2929,`Indica se o `),Jc(2930,`code`),Tk(2931,`model`),Zg(),Tk(2932,` receberá o valor formatado pelas propriedades `),Jc(2933,`code`),Tk(2934,`p-label-on`),Zg(),Tk(2935,` e `),Jc(2936,`code`),Tk(2937,`p-label-off`),Zg(),Tk(2938,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Zg(),Jc(2939,`p`),Tk(2940,`O valor padrão é: `),Jc(2941,`code`),Tk(2942,`false`),Zg(),Tk(2943,`.`),Zg(),Jc(2944,`blockquote`)(2945,`p`),Tk(2946,`Esta propriedade está disponivel apenas para o `),Jc(2947,`code`),Tk(2948,`swicth`),Zg(),Tk(2949,`.`),Zg()()()(),Jc(2950,`tr`,16)(2951,`td`,17)(2952,`div`,25)(2953,`span`,26),Tk(2954,` formatTime`),_u(2955,`br`),Zg()()(),Jc(2956,`td`,21)(2957,`code`,27),Tk(2958,`string`),Zg()(),Jc(2959,`td`,24)(2960,`em`)(2961,`strong`),Tk(2962,`(opcional)`),Zg()(),Jc(2963,`p`),Tk(2964,`Define o formato de exibição do timer (`),Jc(2965,`code`),Tk(2966,`'12'`),Zg(),Tk(2967,` ou `),Jc(2968,`code`),Tk(2969,`'24'`),Zg(),Tk(2970,`).`),Zg(),Jc(2971,`p`)(2972,`strong`),Tk(2973,`Componente compatível:`),Zg(),Jc(2974,`code`),Tk(2975,`po-datetimepicker`),Zg()()()(),Jc(2976,`tr`,16)(2977,`td`,17)(2978,`div`,25)(2979,`span`,26),Tk(2980,` gridColumns`),_u(2981,`br`),Zg()()(),Jc(2982,`td`,21)(2983,`code`,45),Tk(2984,`number`),Zg()(),Jc(2985,`td`,24)(2986,`em`)(2987,`strong`),Tk(2988,`(opcional)`),Zg()(),Jc(2989,`p`),Tk(2990,`Tamanho de exibição do campo em telas.`),Zg(),Jc(2991,`p`),Tk(2992,`Deve ser usado o sistema de `),Jc(2993,`strong`),Tk(2994,`grid`),Zg(),Tk(2995,` do PO (1 ... 12 colunas).`),Zg(),Jc(2996,`blockquote`)(2997,`p`),Tk(2998,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),Zg()()()(),Jc(2999,`tr`,16)(3e3,`td`,17)(3001,`div`,25)(3002,`span`,26),Tk(3003,` gridLgColumns`),_u(3004,`br`),Zg()()(),Jc(3005,`td`,21)(3006,`code`,45),Tk(3007,`number`),Zg()(),Jc(3008,`td`,24)(3009,`em`)(3010,`strong`),Tk(3011,`(opcional)`),Zg()(),Jc(3012,`p`),Tk(3013,`Tamanho de exibição do campo em telas grandes (lg).`),Zg(),Jc(3014,`p`),Tk(3015,`Deve ser usado o sistema de `),Jc(3016,`strong`),Tk(3017,`grid`),Zg(),Tk(3018,` do PO (1 ... 12 colunas).`),Zg(),Jc(3019,`blockquote`)(3020,`p`),Tk(3021,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3022,`code`),Tk(3023,`gridColumns`),Zg(),Tk(3024,`.`),Zg()()()(),Jc(3025,`tr`,16)(3026,`td`,17)(3027,`div`,25)(3028,`span`,26),Tk(3029,` gridLgPull`),_u(3030,`br`),Zg()()(),Jc(3031,`td`,21)(3032,`code`,45),Tk(3033,`number`),Zg()(),Jc(3034,`td`,24)(3035,`em`)(3036,`strong`),Tk(3037,`(opcional)`),Zg()(),Jc(3038,`p`),Tk(3039,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),Zg(),Jc(3040,`p`),Tk(3041,`Deve ser usado o sistema de `),Jc(3042,`strong`),Tk(3043,`grid`),Zg(),Tk(3044,` do PO (1 ... 11 colunas).`),Zg(),Jc(3045,`blockquote`)(3046,`p`),Tk(3047,`Esta propriedade não funciona com a propriedade `),Jc(3048,`code`),Tk(3049,`gridColumns`),Zg(),Tk(3050,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(3051,`tr`,16)(3052,`td`,17)(3053,`div`,25)(3054,`span`,26),Tk(3055,` gridMdColumns`),_u(3056,`br`),Zg()()(),Jc(3057,`td`,21)(3058,`code`,45),Tk(3059,`number`),Zg()(),Jc(3060,`td`,24)(3061,`em`)(3062,`strong`),Tk(3063,`(opcional)`),Zg()(),Jc(3064,`p`),Tk(3065,`Tamanho de exibição do campo em telas médias (md).`),Zg(),Jc(3066,`p`),Tk(3067,`Deve ser usado o sistema de `),Jc(3068,`strong`),Tk(3069,`grid`),Zg(),Tk(3070,` do PO (1 ... 12 colunas).`),Zg(),Jc(3071,`blockquote`)(3072,`p`),Tk(3073,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3074,`code`),Tk(3075,`gridColumns`),Zg(),Tk(3076,`.`),Zg()()()(),Jc(3077,`tr`,16)(3078,`td`,17)(3079,`div`,25)(3080,`span`,26),Tk(3081,` gridMdPull`),_u(3082,`br`),Zg()()(),Jc(3083,`td`,21)(3084,`code`,45),Tk(3085,`number`),Zg()(),Jc(3086,`td`,24)(3087,`em`)(3088,`strong`),Tk(3089,`(opcional)`),Zg()(),Jc(3090,`p`),Tk(3091,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),Zg(),Jc(3092,`p`),Tk(3093,`Deve ser usado o sistema de `),Jc(3094,`strong`),Tk(3095,`grid`),Zg(),Tk(3096,` do PO (1 ... 11 colunas).`),Zg(),Jc(3097,`blockquote`)(3098,`p`),Tk(3099,`Esta propriedade não funciona com a propriedade `),Jc(3100,`code`),Tk(3101,`gridColumns`),Zg(),Tk(3102,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(3103,`tr`,16)(3104,`td`,17)(3105,`div`,25)(3106,`span`,26),Tk(3107,` gridSmColumns`),_u(3108,`br`),Zg()()(),Jc(3109,`td`,21)(3110,`code`,45),Tk(3111,`number`),Zg()(),Jc(3112,`td`,24)(3113,`em`)(3114,`strong`),Tk(3115,`(opcional)`),Zg()(),Jc(3116,`p`),Tk(3117,`Tamanho de exibição do campo em telas menores (sm).`),Zg(),Jc(3118,`p`),Tk(3119,`Deve ser usado o sistema de `),Jc(3120,`strong`),Tk(3121,`grid`),Zg(),Tk(3122,` do PO (1 ... 12 colunas).`),Zg(),Jc(3123,`blockquote`)(3124,`p`),Tk(3125,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3126,`code`),Tk(3127,`gridColumns`),Zg(),Tk(3128,`.`),Zg()()()(),Jc(3129,`tr`,16)(3130,`td`,17)(3131,`div`,25)(3132,`span`,26),Tk(3133,` gridSmPull`),_u(3134,`br`),Zg()()(),Jc(3135,`td`,21)(3136,`code`,45),Tk(3137,`number`),Zg()(),Jc(3138,`td`,24)(3139,`em`)(3140,`strong`),Tk(3141,`(opcional)`),Zg()(),Jc(3142,`p`),Tk(3143,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),Zg(),Jc(3144,`p`),Tk(3145,`Deve ser usado o sistema de `),Jc(3146,`strong`),Tk(3147,`grid`),Zg(),Tk(3148,` do PO (1 ... 11 colunas).`),Zg(),Jc(3149,`blockquote`)(3150,`p`),Tk(3151,`Esta propriedade não funciona com a propriedade `),Jc(3152,`code`),Tk(3153,`gridColumns`),Zg(),Tk(3154,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(3155,`tr`,16)(3156,`td`,17)(3157,`div`,25)(3158,`span`,26),Tk(3159,` gridXlColumns`),_u(3160,`br`),Zg()()(),Jc(3161,`td`,21)(3162,`code`,45),Tk(3163,`number`),Zg()(),Jc(3164,`td`,24)(3165,`em`)(3166,`strong`),Tk(3167,`(opcional)`),Zg()(),Jc(3168,`p`),Tk(3169,`Tamanho de exibição do campo em telas extra grandes (xl).`),Zg(),Jc(3170,`p`),Tk(3171,`Deve ser usado o sistema de `),Jc(3172,`strong`),Tk(3173,`grid`),Zg(),Tk(3174,` do PO (1 ... 12 colunas).`),Zg(),Jc(3175,`blockquote`)(3176,`p`),Tk(3177,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3178,`code`),Tk(3179,`gridColumns`),Zg(),Tk(3180,`.`),Zg()()()(),Jc(3181,`tr`,16)(3182,`td`,17)(3183,`div`,25)(3184,`span`,26),Tk(3185,` gridXlPull`),_u(3186,`br`),Zg()()(),Jc(3187,`td`,21)(3188,`code`,45),Tk(3189,`number`),Zg()(),Jc(3190,`td`,24)(3191,`em`)(3192,`strong`),Tk(3193,`(opcional)`),Zg()(),Jc(3194,`p`),Tk(3195,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),Zg(),Jc(3196,`p`),Tk(3197,`Deve ser usado o sistema de `),Jc(3198,`strong`),Tk(3199,`grid`),Zg(),Tk(3200,` do PO (1 ... 11 colunas).`),Zg(),Jc(3201,`blockquote`)(3202,`p`),Tk(3203,`Esta propriedade não funciona com a propriedade `),Jc(3204,`code`),Tk(3205,`gridColumns`),Zg(),Tk(3206,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(3207,`tr`,16)(3208,`td`,17)(3209,`div`,25)(3210,`span`,26),Tk(3211,` headers`),_u(3212,`br`),Zg()()(),Jc(3213,`td`,21)(3214,`code`,55),Tk(3215,`{ [name: string]: string `),Zg(),Jc(3216,`code`,56),Tk(3217,` Array<string>;
}`),Zg()(),Jc(3218,`td`,24)(3219,`em`)(3220,`strong`),Tk(3221,`(opcional)`),Zg()(),Jc(3222,`p`),Tk(3223,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Zg(),Jc(3224,`p`)(3225,`strong`),Tk(3226,`Componente compatível`),Zg(),Tk(3227,`: `),Jc(3228,`code`),Tk(3229,`po-upload`),Zg()()()(),Jc(3230,`tr`,16)(3231,`td`,17)(3232,`div`,25)(3233,`span`,26),Tk(3234,` help`),_u(3235,`br`),Zg()()(),Jc(3236,`td`,21)(3237,`code`,27),Tk(3238,`string`),Zg()(),Jc(3239,`td`,24)(3240,`em`)(3241,`strong`),Tk(3242,`(opcional)`),Zg()(),Jc(3243,`p`),Tk(3244,`Texto de ajuda.`),Zg()()(),Jc(3245,`tr`,16)(3246,`td`,17)(3247,`div`,25)(3248,`span`,26),Tk(3249,` helper`),_u(3250,`br`),Zg()()(),Jc(3251,`td`,21)(3252,`code`,27),Tk(3253,`string `),Zg(),Jc(3254,`code`,38),Tk(3255,` PoHelperOptions`),Zg()(),Jc(3256,`td`,24)(3257,`em`)(3258,`strong`),Tk(3259,`(opcional)`),Zg()(),Jc(3260,`p`),Tk(3261,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),Zg()()(),Jc(3262,`tr`,16)(3263,`td`,17)(3264,`div`,25)(3265,`span`,26),Tk(3266,` hideLabelStatus`),_u(3267,`br`),Zg()()(),Jc(3268,`td`,21)(3269,`code`,29),Tk(3270,`boolean`),Zg()(),Jc(3271,`td`,24)(3272,`em`)(3273,`strong`),Tk(3274,`(opcional)`),Zg()(),Jc(3275,`p`),Tk(3276,`Indica se o status do `),Jc(3277,`code`),Tk(3278,`model`),Zg(),Tk(3279,` será escondido visualmente ao lado do switch`),Zg()()(),Jc(3280,`tr`,16)(3281,`td`,17)(3282,`div`,25)(3283,`span`,26),Tk(3284,` hidePasswordPeek`),_u(3285,`br`),Zg()()(),Jc(3286,`td`,21)(3287,`code`,29),Tk(3288,`boolean`),Zg()(),Jc(3289,`td`,24)(3290,`em`)(3291,`strong`),Tk(3292,`(opcional)`),Zg()(),Jc(3293,`p`),Tk(3294,`Permite esconder a função de espiar a senha digitada no `),Jc(3295,`code`),Tk(3296,`po-password`),Zg(),Tk(3297,`.`),Zg()()(),Jc(3298,`tr`,16)(3299,`td`,17)(3300,`div`,25)(3301,`span`,26),Tk(3302,` hideRestrictionsInfo`),_u(3303,`br`),Zg()()(),Jc(3304,`td`,21)(3305,`code`,29),Tk(3306,`boolean`),Zg()(),Jc(3307,`td`,24)(3308,`em`)(3309,`strong`),Tk(3310,`(opcional)`),Zg()(),Jc(3311,`p`),Tk(3312,`Oculta visualmente as informações de restrições para o upload.`),Zg(),Jc(3313,`p`)(3314,`strong`),Tk(3315,`Componente compatível`),Zg(),Tk(3316,`: `),Jc(3317,`code`),Tk(3318,`po-upload`),Zg()()()(),Jc(3319,`tr`,16)(3320,`td`,17)(3321,`div`,25)(3322,`span`,26),Tk(3323,` hideSearch`),_u(3324,`br`),Zg()()(),Jc(3325,`td`,21)(3326,`code`,29),Tk(3327,`boolean`),Zg()(),Jc(3328,`td`,24)(3329,`em`)(3330,`strong`),Tk(3331,`(opcional)`),Zg()(),Jc(3332,`p`),Tk(3333,`Esconde o campo de pesquisa existente dentro do dropdown do `),Jc(3334,`code`),Tk(3335,`po-multiselect`),Zg(),Tk(3336,`.`),Zg()()(),Jc(3337,`tr`,16)(3338,`td`,17)(3339,`div`,25)(3340,`span`,26),Tk(3341,` hideSelectAll`),_u(3342,`br`),Zg()()(),Jc(3343,`td`,21)(3344,`code`,29),Tk(3345,`boolean`),Zg()(),Jc(3346,`td`,24)(3347,`em`)(3348,`strong`),Tk(3349,`(opcional)`),Zg()(),Jc(3350,`p`),Tk(3351,`Indica se o campo "Selecionar todos" do `),Jc(3352,`code`),Tk(3353,`po-multiselect`),Zg(),Tk(3354,` será escondido.`),Zg()()(),Jc(3355,`tr`,16)(3356,`td`,17)(3357,`div`,25)(3358,`span`,26),Tk(3359,` hideSelectButton`),_u(3360,`br`),Zg()()(),Jc(3361,`td`,21)(3362,`code`,29),Tk(3363,`boolean`),Zg()(),Jc(3364,`td`,24)(3365,`em`)(3366,`strong`),Tk(3367,`(opcional)`),Zg()(),Jc(3368,`p`),Tk(3369,`Omite o botão de seleção de arquivos.`),Zg(),Jc(3370,`blockquote`)(3371,`p`),Tk(3372,`Caso o valor definido seja `),Jc(3373,`code`),Tk(3374,`true`),Zg(),Tk(3375,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(3376,`code`),Tk(3377,`selectFiles()`),Zg(),Tk(3378,` para seleção de arquivos.`),Zg()(),Jc(3379,`p`)(3380,`strong`),Tk(3381,`Componente compatível`),Zg(),Tk(3382,`: `),Jc(3383,`code`),Tk(3384,`po-upload`),Zg()()()(),Jc(3385,`tr`,16)(3386,`td`,17)(3387,`div`,25)(3388,`span`,26),Tk(3389,` hideSendButton`),_u(3390,`br`),Zg()()(),Jc(3391,`td`,21)(3392,`code`,29),Tk(3393,`boolean`),Zg()(),Jc(3394,`td`,24)(3395,`em`)(3396,`strong`),Tk(3397,`(opcional)`),Zg()(),Jc(3398,`p`),Tk(3399,`Omite o botão de envio de arquivos.`),Zg(),Jc(3400,`blockquote`)(3401,`p`),Tk(3402,`Caso o valor definido seja `),Jc(3403,`code`),Tk(3404,`true`),Zg(),Tk(3405,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(3406,`code`),Tk(3407,`sendFiles()`),Zg(),Tk(3408,` para envio do(s) arquivo(s) selecionado(s).`),Zg()(),Jc(3409,`p`)(3410,`strong`),Tk(3411,`Componente compatível`),Zg(),Tk(3412,`: `),Jc(3413,`code`),Tk(3414,`po-upload`),Zg()()()(),Jc(3415,`tr`,16)(3416,`td`,17)(3417,`div`,25)(3418,`span`,26),Tk(3419,` icon`),_u(3420,`br`),Zg()()(),Jc(3421,`td`,21)(3422,`code`,27),Tk(3423,`string `),Zg(),Jc(3424,`code`,57),Tk(3425,` TemplateRef<void>`),Zg()(),Jc(3426,`td`,24)(3427,`em`)(3428,`strong`),Tk(3429,`(opcional)`),Zg()(),Jc(3430,`p`),Tk(3431,`Define o ícone que será exibido no início do campo.`),Zg(),Jc(3432,`blockquote`)(3433,`p`),Tk(3434,`Esta propriedade só pode ser utilizado nos campos:`),Zg()(),Jc(3435,`ul`)(3436,`li`),Tk(3437,`Input;`),Zg(),Jc(3438,`li`),Tk(3439,`Number;`),Zg(),Jc(3440,`li`),Tk(3441,`Decimal;`),Zg(),Jc(3442,`li`),Tk(3443,`Combo;`),Zg(),Jc(3444,`li`),Tk(3445,`Password;`),Zg()(),Jc(3446,`blockquote`)(3447,`p`),Tk(3448,`Veja a disponibilidade de ícones em `),Jc(3449,`a`,58),Tk(3450,`biblioteca de ícones`),Zg(),Tk(3451,`.`),Zg()()()(),Jc(3452,`tr`,16)(3453,`td`,17)(3454,`div`,25)(3455,`span`,26),Tk(3456,` infiniteScroll`),_u(3457,`br`),Zg()()(),Jc(3458,`td`,21)(3459,`code`,29),Tk(3460,`boolean`),Zg()(),Jc(3461,`td`,24)(3462,`em`)(3463,`strong`),Tk(3464,`(opcional)`),Zg()(),Jc(3465,`p`),Tk(3466,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Zg(),Jc(3467,`p`)(3468,`strong`),Tk(3469,`Componentes compatíveis:`),Zg(),Jc(3470,`code`),Tk(3471,`po-combo`),Zg(),Tk(3472,`, `),Jc(3473,`code`),Tk(3474,`po-lookup`),Zg(),Tk(3475,`.`),Zg()()(),Jc(3476,`tr`,16)(3477,`td`,17)(3478,`div`,25)(3479,`span`,26),Tk(3480,` infiniteScrollDistance`),_u(3481,`br`),Zg()()(),Jc(3482,`td`,21)(3483,`code`,45),Tk(3484,`number`),Zg()(),Jc(3485,`td`,24)(3486,`em`)(3487,`strong`),Tk(3488,`(opcional)`),Zg()(),Jc(3489,`p`),Tk(3490,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Jc(3491,`strong`),Tk(3492,`Exemplos`),Zg(),Jc(3493,`code`),Tk(3494,`{ infiniteScrollDistance: 80 }`),Zg(),Tk(3495,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),Zg(),Jc(3496,`p`)(3497,`strong`),Tk(3498,`Componente compatível:`),Zg(),Jc(3499,`code`),Tk(3500,`po-combo`),Zg(),Tk(3501,`.`),Zg()()(),Jc(3502,`tr`,16)(3503,`td`,17)(3504,`div`,25)(3505,`span`,26),Tk(3506,` initValue`),_u(3507,`br`),Zg()()(),Jc(3508,`td`,21)(3509,`code`,33),Tk(3510,`any`),Zg()(),Jc(3511,`td`,24)(3512,`em`)(3513,`strong`),Tk(3514,`(opcional)`),Zg()(),Jc(3515,`p`),Tk(3516,`Define um valor inicial para um filtro de busca avançada.`),Zg(),Jc(3517,`p`),Tk(3518,`O valor será atribuído ao campo correspondente à propriedade `),Jc(3519,`code`),Tk(3520,`property`),Zg(),Tk(3521,` na primeira abertura da janela de
busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro, os campos passam a ser preenchidos com os valores filtrados,
preservando as altera\xE7\xF5es realizadas.`),Zg()()(),Jc(3522,`tr`,16)(3523,`td`,17)(3524,`div`,25)(3525,`span`,26),Tk(3526,` invalidValue`),_u(3527,`br`),Zg()()(),Jc(3528,`td`,21)(3529,`code`,29),Tk(3530,`boolean`),Zg()(),Jc(3531,`td`,24)(3532,`em`)(3533,`strong`),Tk(3534,`(opcional)`),Zg()(),Jc(3535,`p`),Tk(3536,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Jc(3537,`code`),Tk(3538,`p-field-error-message`),Zg(),Tk(3539,`.`),Zg(),Jc(3540,`blockquote`)(3541,`p`),Tk(3542,`Caso essa propriedade seja definida como `),Jc(3543,`code`),Tk(3544,`true`),Zg(),Tk(3545,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Zg()(),Jc(3546,`p`)(3547,`strong`),Tk(3548,`Componente compatível`),Zg(),Tk(3549,`: `),Jc(3550,`code`),Tk(3551,`po-switch`),Zg()()()(),Jc(3552,`tr`,16)(3553,`td`,17)(3554,`div`,25)(3555,`span`,26),Tk(3556,` isoFormat`),_u(3557,`br`),Zg()()(),Jc(3558,`td`,21)(3559,`code`,59),Tk(3560,`PoDatepickerIsoFormat`),Zg()(),Jc(3561,`td`,24)(3562,`em`)(3563,`strong`),Tk(3564,`(opcional)`),Zg()(),Jc(3565,`p`),Tk(3566,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),Zg(),Jc(3567,`blockquote`)(3568,`p`),Tk(3569,`Veja os valores válidos no `),Jc(3570,`code`),Tk(3571,`PoDatepickerIsoFormat`),Zg(),Tk(3572,`.`),Zg()(),Jc(3573,`p`)(3574,`strong`),Tk(3575,`Componente compatível:`),Zg(),Jc(3576,`code`),Tk(3577,`po-datepicker`),Zg()()()(),Jc(3578,`tr`,16)(3579,`td`,17)(3580,`div`,25)(3581,`span`,26),Tk(3582,` key`),_u(3583,`br`),Zg()()(),Jc(3584,`td`,21)(3585,`code`,29),Tk(3586,`boolean`),Zg()(),Jc(3587,`td`,24)(3588,`em`)(3589,`strong`),Tk(3590,`(opcional)`),Zg()(),Jc(3591,`p`),Tk(3592,`Identificador`),Zg()()(),Jc(3593,`tr`,16)(3594,`td`,17)(3595,`div`,25)(3596,`span`,26),Tk(3597,` keydown`),_u(3598,`br`),Zg()()(),Jc(3599,`td`,21)(3600,`code`,44),Tk(3601,`Function`),Zg()(),Jc(3602,`td`,24)(3603,`em`)(3604,`strong`),Tk(3605,`(opcional)`),Zg()(),Jc(3606,`p`),Tk(3607,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(3608,`code`),Tk(3609,`KeyboardEvent`),Zg(),Tk(3610,` com informações sobre a tecla.`),Zg()()(),Jc(3611,`tr`,16)(3612,`td`,17)(3613,`div`,25)(3614,`span`,26),Tk(3615,` label`),_u(3616,`br`),Zg()()(),Jc(3617,`td`,21)(3618,`code`,27),Tk(3619,`string`),Zg()(),Jc(3620,`td`,24)(3621,`em`)(3622,`strong`),Tk(3623,`(opcional)`),Zg()(),Jc(3624,`p`),Tk(3625,`Rótulo do campo exibido.`),Zg(),Jc(3626,`p`),Tk(3627,`Caso não seja informado, será utilizado como `),Jc(3628,`code`),Tk(3629,`label`),Zg(),Tk(3630,` o valor da propriedade `),Jc(3631,`code`),Tk(3632,`property`),Zg(),Tk(3633,` com a primeira letra em maiúsculo.`),Zg()()(),Jc(3634,`tr`,16)(3635,`td`,17)(3636,`div`,25)(3637,`span`,26),Tk(3638,` labelPosition`),_u(3639,`br`),Zg()()(),Jc(3640,`td`,21)(3641,`code`,60),Tk(3642,`PoSwitchLabelPosition`),Zg()(),Jc(3643,`td`,24)(3644,`em`)(3645,`strong`),Tk(3646,`(opcional)`),Zg()(),Jc(3647,`p`),Tk(3648,`Posição de exibição do rótulo do PoSwitch.`),Zg(),Jc(3649,`blockquote`)(3650,`p`),Tk(3651,`Por padrão exibe à direita.`),Zg()()()(),Jc(3652,`tr`,16)(3653,`td`,17)(3654,`div`,25)(3655,`span`,26),Tk(3656,` listboxControlPosition`),_u(3657,`br`),Zg()()(),Jc(3658,`td`,21)(3659,`code`,61),Tk(3660,`'top' `),Zg(),Jc(3661,`code`,62),Tk(3662,` 'bottom'`),Zg()(),Jc(3663,`td`,24)(3664,`em`)(3665,`strong`),Tk(3666,`(opcional)`),Zg()(),Jc(3667,`p`),Tk(3668,`Define a direção preferida para exibição do `),Jc(3669,`code`),Tk(3670,`listbox`),Zg(),Tk(3671,` em relação ao campo (`),Jc(3672,`code`),Tk(3673,`top`),Zg(),Tk(3674,` ou `),Jc(3675,`code`),Tk(3676,`bottom`),Zg(),Tk(3677,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Zg(),Jc(3678,`p`)(3679,`strong`),Tk(3680,`Componentes compatíveis:`),Zg(),Jc(3681,`code`),Tk(3682,`po-multiselect`),Zg(),Tk(3683,`, `),Jc(3684,`code`),Tk(3685,`po-combo`),Zg(),Tk(3686,`.`),Zg()()(),Jc(3687,`tr`,16)(3688,`td`,17)(3689,`div`,25)(3690,`span`,26),Tk(3691,` literals`),_u(3692,`br`),Zg()()(),Jc(3693,`td`,21)(3694,`code`,36),Tk(3695,`PoLookupLiterals `),Zg(),Jc(3696,`code`,63),Tk(3697,` PoMultiselectLiterals `),Zg(),Jc(3698,`code`,64),Tk(3699,` PoComboLiterals `),Zg(),Jc(3700,`code`,65),Tk(3701,` PoDatepickerRangeLiterals `),Zg(),Jc(3702,`code`,66),Tk(3703,` PoUploadLiterals`),Zg()(),Jc(3704,`td`,24)(3705,`em`)(3706,`strong`),Tk(3707,`(opcional)`),Zg()(),Jc(3708,`p`),Tk(3709,`Objeto com as literais usadas para os seguintes componentes: `),Jc(3710,`code`),Tk(3711,`po-lookup`),Zg(),Tk(3712,`, `),Jc(3713,`code`),Tk(3714,`po-multiselect`),Zg(),Tk(3715,`, `),Jc(3716,`code`),Tk(3717,`po-combo`),Zg(),Tk(3718,` e `),Jc(3719,`code`),Tk(3720,`po-datepicker-range`),Zg(),Tk(3721,`.`),Zg(),Jc(3722,`blockquote`)(3723,`p`),Tk(3724,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),Zg()(),Jc(3725,`p`)(3726,`strong`),Tk(3727,`Componentes compatíveis:`),Zg(),Jc(3728,`code`),Tk(3729,`po-lookup`),Zg(),Tk(3730,`, `),Jc(3731,`code`),Tk(3732,`po-multiselect`),Zg(),Tk(3733,`, `),Jc(3734,`code`),Tk(3735,`po-combo`),Zg(),Tk(3736,`, `),Jc(3737,`code`),Tk(3738,`po-datepicker-range`),Zg()()()(),Jc(3739,`tr`,16)(3740,`td`,17)(3741,`div`,25)(3742,`span`,26),Tk(3743,` loading`),_u(3744,`br`),Zg()()(),Jc(3745,`td`,21)(3746,`code`,29),Tk(3747,`boolean`),Zg()(),Jc(3748,`td`,24)(3749,`em`)(3750,`strong`),Tk(3751,`(opcional)`),Zg()(),Jc(3752,`p`),Tk(3753,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),Zg(),Jc(3754,`blockquote`)(3755,`p`),Tk(3756,`Por padrão é `),Jc(3757,`code`),Tk(3758,`false`),Zg(),Tk(3759,`.`),Zg()(),Jc(3760,`p`)(3761,`strong`),Tk(3762,`Componentes compatíveis:`),Zg(),Jc(3763,`code`),Tk(3764,`po-datepicker`),Zg(),Tk(3765,`, `),Jc(3766,`code`),Tk(3767,`po-datepicker-range`),Zg(),Tk(3768,`, `),Jc(3769,`code`),Tk(3770,`po-number`),Zg(),Tk(3771,`, `),Jc(3772,`code`),Tk(3773,`po-decimal`),Zg(),Tk(3774,`,
`),Jc(3775,`code`),Tk(3776,`po-input`),Zg(),Tk(3777,`, `),Jc(3778,`code`),Tk(3779,`po-select`),Zg(),Tk(3780,`, `),Jc(3781,`code`),Tk(3782,`po-switch`),Zg(),Tk(3783,`, `),Jc(3784,`code`),Tk(3785,`po-combo`),Zg(),Tk(3786,`, `),Jc(3787,`code`),Tk(3788,`po-lookup`),Zg(),Tk(3789,`, `),Jc(3790,`code`),Tk(3791,`po-multiselect`),Zg(),Tk(3792,`,
`),Jc(3793,`code`),Tk(3794,`po-textarea`),Zg(),Tk(3795,`, `),Jc(3796,`code`),Tk(3797,`po-password`),Zg(),Tk(3798,`, `),Jc(3799,`code`),Tk(3800,`po-upload`),Zg(),Tk(3801,`.`),Zg()()(),Jc(3802,`tr`,16)(3803,`td`,17)(3804,`div`,25)(3805,`span`,26),Tk(3806,` locale`),_u(3807,`br`),Zg()()(),Jc(3808,`td`,21)(3809,`code`,27),Tk(3810,`string`),Zg()(),Jc(3811,`td`,24)(3812,`em`)(3813,`strong`),Tk(3814,`(opcional)`),Zg()(),Jc(3815,`p`),Tk(3816,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Jc(3817,`a`,67)(3818,`code`),Tk(3819,`I18n`),Zg()()(),Jc(3820,`p`),Tk(3821,`Exemplo de utilização:`),Zg(),Jc(3822,`pre`)(3823,`code`),Tk(3824,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),Zg()(),Jc(3825,`blockquote`)(3826,`p`),Tk(3827,`Para ver quais linguagens suportadas acesse `),Jc(3828,`a`,67)(3829,`code`),Tk(3830,`I18n`),Zg()()()(),Jc(3831,`p`)(3832,`strong`),Tk(3833,`Componentes compatíveis:`),Zg(),Jc(3834,`code`),Tk(3835,`po-datepicker`),Zg(),Tk(3836,`, `),Jc(3837,`code`),Tk(3838,`po-decimal`),Zg(),Tk(3839,`, `),Jc(3840,`code`),Tk(3841,`po-timepicker`),Zg(),Tk(3842,`.`),Zg()()(),Jc(3843,`tr`,16)(3844,`td`,17)(3845,`div`,25)(3846,`span`,26),Tk(3847,` mask`),_u(3848,`br`),Zg()()(),Jc(3849,`td`,21)(3850,`code`,27),Tk(3851,`string`),Zg()(),Jc(3852,`td`,24)(3853,`em`)(3854,`strong`),Tk(3855,`(opcional)`),Zg()(),Jc(3856,`p`),Tk(3857,`Máscara para o campo.`),Zg(),Jc(3858,`p`)(3859,`strong`),Tk(3860,`Componente compatível:`),Zg(),Jc(3861,`code`),Tk(3862,`po-input`),Zg(),Tk(3863,`.`),Zg(),Jc(3864,`blockquote`)(3865,`p`),Tk(3866,`também é atribuído ao utilizar a propriedade `),Jc(3867,`code`),Tk(3868,`type: time`),Zg(),Tk(3869,`.`),Zg()(),Jc(3870,`blockquote`)(3871,`p`),Tk(3872,`Incompatível com `),Jc(3873,`code`),Tk(3874,`po-decimal`),Zg(),Tk(3875,`.`),Zg()()()(),Jc(3876,`tr`,16)(3877,`td`,17)(3878,`div`,25)(3879,`span`,26),Tk(3880,` maskFormatModel`),_u(3881,`br`),Zg()()(),Jc(3882,`td`,21)(3883,`code`,29),Tk(3884,`boolean`),Zg()(),Jc(3885,`td`,24)(3886,`em`)(3887,`strong`),Tk(3888,`(opcional)`),Zg()(),Jc(3889,`p`),Tk(3890,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Jc(3891,`code`),Tk(3892,`false`),Zg(),Tk(3893,`.`),Zg(),Jc(3894,`p`)(3895,`strong`),Tk(3896,`Componente compatível:`),Zg(),Jc(3897,`code`),Tk(3898,`po-input`),Zg(),Tk(3899,`.`),Zg(),Jc(3900,`blockquote`)(3901,`p`),Tk(3902,`também é atribuído ao utilizar a propriedade `),Jc(3903,`code`),Tk(3904,`type: time`),Zg(),Tk(3905,`.`),Zg()()()(),Jc(3906,`tr`,16)(3907,`td`,17)(3908,`div`,25)(3909,`span`,26),Tk(3910,` maskNoLengthValidation`),_u(3911,`br`),Zg()()(),Jc(3912,`td`,21)(3913,`code`,29),Tk(3914,`boolean`),Zg()(),Jc(3915,`td`,24)(3916,`em`)(3917,`strong`),Tk(3918,`(opcional)`),Zg()(),Jc(3919,`p`),Tk(3920,`Controla como o componente aplica as validações de comprimento mínimo (`),Jc(3921,`code`),Tk(3922,`minLength`),Zg(),Tk(3923,`) e máximo (`),Jc(3924,`code`),Tk(3925,`maxLength`),Zg(),Tk(3926,`) quando há uma máscara (`),Jc(3927,`code`),Tk(3928,`p-mask`),Zg(),Tk(3929,`) definida.`),Zg(),Jc(3930,`ul`)(3931,`li`),Tk(3932,`Quando `),Jc(3933,`code`),Tk(3934,`true`),Zg(),Tk(3935,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Zg(),Jc(3936,`li`),Tk(3937,`Quando `),Jc(3938,`code`),Tk(3939,`false`),Zg(),Tk(3940,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Zg()(),Jc(3941,`p`)(3942,`strong`),Tk(3943,`Componentes compatíveis:`),Zg(),Jc(3944,`code`),Tk(3945,`po-input`),Zg(),Tk(3946,`, `),Jc(3947,`code`),Tk(3948,`po-decimal`),Zg(),Tk(3949,`.`),Zg(),Jc(3950,`blockquote`)(3951,`p`),Tk(3952,`Esta propriedade é ignorada quando utilizada em conjunto com `),Jc(3953,`code`),Tk(3954,`p-mask-format-model`),Zg(),Tk(3955,`.`),Zg()(),Jc(3956,`p`),Tk(3957,`Exemplo:`),Zg(),Jc(3958,`pre`)(3959,`code`),Tk(3960,`fields:Array<PoDynamicFormField> = [
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
`),Zg()(),Jc(3961,`ul`)(3962,`li`),Tk(3963,`Entrada: `),Jc(3964,`code`),Tk(3965,`11.111.111/1111-11`),Zg(),Tk(3966,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),Zg()()()(),Jc(3967,`tr`,16)(3968,`td`,17)(3969,`div`,25)(3970,`span`,26),Tk(3971,` maxLength`),_u(3972,`br`),Zg()()(),Jc(3973,`td`,21)(3974,`code`,45),Tk(3975,`number`),Zg()(),Jc(3976,`td`,24)(3977,`em`)(3978,`strong`),Tk(3979,`(opcional)`),Zg()(),Jc(3980,`p`),Tk(3981,`Tamanho máximo de caracteres.`),Zg(),Jc(3982,`p`)(3983,`strong`),Tk(3984,`Componentes compatíveis:`),Zg(),Jc(3985,`code`),Tk(3986,`po-input`),Zg(),Tk(3987,`, `),Jc(3988,`code`),Tk(3989,`po-number`),Zg(),Tk(3990,`, `),Jc(3991,`code`),Tk(3992,`po-decimal`),Zg(),Tk(3993,`, `),Jc(3994,`code`),Tk(3995,`po-textarea`),Zg(),Tk(3996,`, `),Jc(3997,`code`),Tk(3998,`po-password`),Zg(),Tk(3999,`.`),Zg()()(),Jc(4e3,`tr`,16)(4001,`td`,17)(4002,`div`,25)(4003,`span`,26),Tk(4004,` maxTime`),_u(4005,`br`),Zg()()(),Jc(4006,`td`,21)(4007,`code`,27),Tk(4008,`string`),Zg()(),Jc(4009,`td`,24)(4010,`em`)(4011,`strong`),Tk(4012,`(opcional)`),Zg()(),Jc(4013,`p`),Tk(4014,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Jc(4015,`code`),Tk(4016,`HH:mm`),Zg(),Tk(4017,` ou `),Jc(4018,`code`),Tk(4019,`HH:mm:ss`),Zg(),Tk(4020,`.`),Zg(),Jc(4021,`p`)(4022,`strong`),Tk(4023,`Componente compatível:`),Zg(),Jc(4024,`code`),Tk(4025,`po-datetimepicker`),Zg(),Tk(4026,`, `),Jc(4027,`code`),Tk(4028,`po-timepicker`),Zg()()()(),Jc(4029,`tr`,16)(4030,`td`,17)(4031,`div`,25)(4032,`span`,26),Tk(4033,` maxValue`),_u(4034,`br`),Zg()()(),Jc(4035,`td`,21)(4036,`code`,27),Tk(4037,`string `),Zg(),Jc(4038,`code`,45),Tk(4039,` number`),Zg()(),Jc(4040,`td`,24)(4041,`em`)(4042,`strong`),Tk(4043,`(opcional)`),Zg()(),Jc(4044,`p`),Tk(4045,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Jc(4046,`em`),Tk(4047,`number`),Zg(),Tk(4048,`, `),Jc(4049,`em`),Tk(4050,`date`),Zg(),Tk(4051,`, `),Jc(4052,`em`),Tk(4053,`dateTime`),Zg(),Tk(4054,` ou `),Jc(4055,`em`),Tk(4056,`time`),Zg(),Tk(4057,`.`),Zg(),Jc(4058,`blockquote`)(4059,`p`),Tk(4060,`Para `),Jc(4061,`code`),Tk(4062,`po-timepicker`),Zg(),Tk(4063,`, o valor deve estar no formato `),Jc(4064,`code`),Tk(4065,`HH:mm`),Zg(),Tk(4066,` ou `),Jc(4067,`code`),Tk(4068,`HH:mm:ss`),Zg(),Tk(4069,`.`),Zg()(),Jc(4070,`p`)(4071,`strong`),Tk(4072,`Componentes compatíveis:`),Zg(),Jc(4073,`code`),Tk(4074,`po-datepicker`),Zg(),Tk(4075,`, `),Jc(4076,`code`),Tk(4077,`po-datepicker-range`),Zg(),Tk(4078,`, `),Jc(4079,`code`),Tk(4080,`po-number`),Zg(),Tk(4081,`, `),Jc(4082,`code`),Tk(4083,`po-decimal`),Zg(),Tk(4084,`, `),Jc(4085,`code`),Tk(4086,`po-timepicker`),Zg()()()(),Jc(4087,`tr`,16)(4088,`td`,17)(4089,`div`,25)(4090,`span`,26),Tk(4091,` minLength`),_u(4092,`br`),Zg()()(),Jc(4093,`td`,21)(4094,`code`,45),Tk(4095,`number`),Zg()(),Jc(4096,`td`,24)(4097,`em`)(4098,`strong`),Tk(4099,`(opcional)`),Zg()(),Jc(4100,`p`),Tk(4101,`Tamanho mínimo de caracteres.`),Zg(),Jc(4102,`p`)(4103,`strong`),Tk(4104,`Componentes compatíveis:`),Zg(),Jc(4105,`code`),Tk(4106,`po-input`),Zg(),Tk(4107,`, `),Jc(4108,`code`),Tk(4109,`po-number`),Zg(),Tk(4110,`, `),Jc(4111,`code`),Tk(4112,`po-decimal`),Zg(),Tk(4113,`, `),Jc(4114,`code`),Tk(4115,`po-textarea`),Zg(),Tk(4116,`, `),Jc(4117,`code`),Tk(4118,`po-password`),Zg(),Tk(4119,`.`),Zg()()(),Jc(4120,`tr`,16)(4121,`td`,17)(4122,`div`,25)(4123,`span`,26),Tk(4124,` minTime`),_u(4125,`br`),Zg()()(),Jc(4126,`td`,21)(4127,`code`,27),Tk(4128,`string`),Zg()(),Jc(4129,`td`,24)(4130,`em`)(4131,`strong`),Tk(4132,`(opcional)`),Zg()(),Jc(4133,`p`),Tk(4134,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Jc(4135,`code`),Tk(4136,`HH:mm`),Zg(),Tk(4137,` ou `),Jc(4138,`code`),Tk(4139,`HH:mm:ss`),Zg(),Tk(4140,`.`),Zg(),Jc(4141,`p`)(4142,`strong`),Tk(4143,`Componente compatível:`),Zg(),Jc(4144,`code`),Tk(4145,`po-datetimepicker`),Zg(),Tk(4146,`, `),Jc(4147,`code`),Tk(4148,`po-timepicker`),Zg()()()(),Jc(4149,`tr`,16)(4150,`td`,17)(4151,`div`,25)(4152,`span`,26),Tk(4153,` minValue`),_u(4154,`br`),Zg()()(),Jc(4155,`td`,21)(4156,`code`,27),Tk(4157,`string `),Zg(),Jc(4158,`code`,45),Tk(4159,` number`),Zg()(),Jc(4160,`td`,24)(4161,`em`)(4162,`strong`),Tk(4163,`(opcional)`),Zg()(),Jc(4164,`p`),Tk(4165,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Jc(4166,`em`),Tk(4167,`number`),Zg(),Tk(4168,`, `),Jc(4169,`em`),Tk(4170,`date`),Zg(),Tk(4171,`, `),Jc(4172,`em`),Tk(4173,`dateTime`),Zg(),Tk(4174,` ou `),Jc(4175,`em`),Tk(4176,`time`),Zg(),Tk(4177,`.`),Zg(),Jc(4178,`blockquote`)(4179,`p`),Tk(4180,`Para `),Jc(4181,`code`),Tk(4182,`po-timepicker`),Zg(),Tk(4183,`, o valor deve estar no formato `),Jc(4184,`code`),Tk(4185,`HH:mm`),Zg(),Tk(4186,` ou `),Jc(4187,`code`),Tk(4188,`HH:mm:ss`),Zg(),Tk(4189,`.`),Zg()(),Jc(4190,`p`)(4191,`strong`),Tk(4192,`Componentes compatíveis:`),Zg(),Jc(4193,`code`),Tk(4194,`po-datepicker`),Zg(),Tk(4195,`, `),Jc(4196,`code`),Tk(4197,`po-datepicker-range`),Zg(),Tk(4198,`, `),Jc(4199,`code`),Tk(4200,`po-number`),Zg(),Tk(4201,`, `),Jc(4202,`code`),Tk(4203,`po-decimal`),Zg(),Tk(4204,`, `),Jc(4205,`code`),Tk(4206,`po-timepicker`),Zg()()()(),Jc(4207,`tr`,16)(4208,`td`,17)(4209,`div`,25)(4210,`span`,26),Tk(4211,` minuteInterval`),_u(4212,`br`),Zg()()(),Jc(4213,`td`,21)(4214,`code`,45),Tk(4215,`number`),Zg()(),Jc(4216,`td`,24)(4217,`em`)(4218,`strong`),Tk(4219,`(opcional)`),Zg()(),Jc(4220,`p`),Tk(4221,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),Zg()()(),Jc(4222,`tr`,16)(4223,`td`,17)(4224,`div`,25)(4225,`span`,26),Tk(4226,` mode`),_u(4227,`br`),Zg()()(),Jc(4228,`td`,21)(4229,`code`,68),Tk(4230,`'month-year' `),Zg(),Jc(4231,`code`,69),Tk(4232,` 'year'`),Zg()(),Jc(4233,`td`,24)(4234,`em`)(4235,`strong`),Tk(4236,`(opcional)`),Zg()(),Jc(4237,`p`),Tk(4238,`Define o modo de seleção do `),Jc(4239,`code`),Tk(4240,`po-datepicker`),Zg(),Tk(4241,`.`),Zg(),Jc(4242,`p`),Tk(4243,`Valores aceitos:`),Zg(),Jc(4244,`ul`)(4245,`li`)(4246,`code`),Tk(4247,`'month-year'`),Zg(),Tk(4248,`: exibe seleção de mês e ano (formato `),Jc(4249,`code`),Tk(4250,`MM/YYYY`),Zg(),Tk(4251,`)`),Zg(),Jc(4252,`li`)(4253,`code`),Tk(4254,`'year'`),Zg(),Tk(4255,`: exibe seleção apenas de ano (formato `),Jc(4256,`code`),Tk(4257,`YYYY`),Zg(),Tk(4258,`)`),Zg()(),Jc(4259,`p`)(4260,`strong`),Tk(4261,`Componente compatível:`),Zg(),Jc(4262,`code`),Tk(4263,`po-datepicker`),Zg()()()(),Jc(4264,`tr`,16)(4265,`td`,17)(4266,`div`,25)(4267,`span`,26),Tk(4268,` modelFormat`),_u(4269,`br`),Zg()()(),Jc(4270,`td`,21)(4271,`code`,70),Tk(4272,`PoTimepickerModelFormat`),Zg()(),Jc(4273,`td`,24)(4274,`em`)(4275,`strong`),Tk(4276,`(opcional)`),Zg()(),Jc(4277,`p`),Tk(4278,`Define o formato do valor do horário a ser utilizado no model do `),Jc(4279,`code`),Tk(4280,`po-timepicker`),Zg(),Tk(4281,`.`),Zg(),Jc(4282,`blockquote`)(4283,`p`),Tk(4284,`Veja os valores válidos no `),Jc(4285,`code`),Tk(4286,`PoTimepickerModelFormat`),Zg(),Tk(4287,`.`),Zg()(),Jc(4288,`p`)(4289,`strong`),Tk(4290,`Componente compatível:`),Zg(),Jc(4291,`code`),Tk(4292,`po-timepicker`),Zg()()()(),Jc(4293,`tr`,16)(4294,`td`,17)(4295,`div`,25)(4296,`span`,26),Tk(4297,` multiple`),_u(4298,`br`),Zg()()(),Jc(4299,`td`,21)(4300,`code`,29),Tk(4301,`boolean`),Zg()(),Jc(4302,`td`,24)(4303,`em`)(4304,`strong`),Tk(4305,`(opcional)`),Zg()(),Jc(4306,`p`),Tk(4307,`Permite a seleção de múltiplos itens.`),Zg(),Jc(4308,`p`)(4309,`strong`),Tk(4310,`Componentes compatíveis:`),Zg(),Jc(4311,`code`),Tk(4312,`po-lookup`),Zg(),Tk(4313,`, `),Jc(4314,`code`),Tk(4315,`po-upload`),Zg()()()(),Jc(4316,`tr`,16)(4317,`td`,17)(4318,`div`,25)(4319,`span`,26),Tk(4320,` noAutocomplete`),_u(4321,`br`),Zg()()(),Jc(4322,`td`,21)(4323,`code`,29),Tk(4324,`boolean`),Zg()(),Jc(4325,`td`,24)(4326,`em`)(4327,`strong`),Tk(4328,`(opcional)`),Zg()(),Jc(4329,`p`),Tk(4330,`Define a propriedade nativa `),Jc(4331,`code`),Tk(4332,`autocomplete`),Zg(),Tk(4333,` do campo como off.`),Zg(),Jc(4334,`p`)(4335,`strong`),Tk(4336,`Componentes compatíveis:`),Zg(),Jc(4337,`code`),Tk(4338,`po-datepicker`),Zg(),Tk(4339,`, `),Jc(4340,`code`),Tk(4341,`po-datepicker-range`),Zg(),Tk(4342,`, `),Jc(4343,`code`),Tk(4344,`po-input`),Zg(),Tk(4345,`, `),Jc(4346,`code`),Tk(4347,`po-number`),Zg(),Tk(4348,`, `),Jc(4349,`code`),Tk(4350,`po-decimal`),Zg(),Tk(4351,`,
`),Jc(4352,`code`),Tk(4353,`po-lookup`),Zg(),Tk(4354,`, `),Jc(4355,`code`),Tk(4356,`po-password`),Zg(),Tk(4357,`, `),Jc(4358,`code`),Tk(4359,`po-timepicker`),Zg(),Tk(4360,`.`),Zg()()(),Jc(4361,`tr`,16)(4362,`td`,17)(4363,`div`,25)(4364,`span`,26),Tk(4365,` offsetColumns`),_u(4366,`br`),Zg()()(),Jc(4367,`td`,21)(4368,`code`,45),Tk(4369,`number`),Zg()(),Jc(4370,`td`,24)(4371,`em`)(4372,`strong`),Tk(4373,`(opcional)`),Zg()(),Jc(4374,`p`),Tk(4375,`Tamanho do espaço de exibição do campo em telas.`),Zg(),Jc(4376,`p`),Tk(4377,`Deve ser usado o sistema de `),Jc(4378,`strong`),Tk(4379,`grid`),Zg(),Tk(4380,` do PO (1 ... 12 colunas).`),Zg(),Jc(4381,`blockquote`)(4382,`p`),Tk(4383,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),Zg()()()(),Jc(4384,`tr`,16)(4385,`td`,17)(4386,`div`,25)(4387,`span`,26),Tk(4388,` offsetLgColumns`),_u(4389,`br`),Zg()()(),Jc(4390,`td`,21)(4391,`code`,45),Tk(4392,`number`),Zg()(),Jc(4393,`td`,24)(4394,`em`)(4395,`strong`),Tk(4396,`(opcional)`),Zg()(),Jc(4397,`p`),Tk(4398,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),Zg(),Jc(4399,`p`),Tk(4400,`Deve ser usado o sistema de `),Jc(4401,`strong`),Tk(4402,`grid`),Zg(),Tk(4403,` do PO (1 ... 12 colunas).`),Zg(),Jc(4404,`blockquote`)(4405,`p`),Tk(4406,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4407,`code`),Tk(4408,`offsetColumns`),Zg(),Tk(4409,`.`),Zg()()()(),Jc(4410,`tr`,16)(4411,`td`,17)(4412,`div`,25)(4413,`span`,26),Tk(4414,` offsetMdColumns`),_u(4415,`br`),Zg()()(),Jc(4416,`td`,21)(4417,`code`,45),Tk(4418,`number`),Zg()(),Jc(4419,`td`,24)(4420,`em`)(4421,`strong`),Tk(4422,`(opcional)`),Zg()(),Jc(4423,`p`),Tk(4424,`Tamanho do espaço de exibição do campo em telas médias (md).`),Zg(),Jc(4425,`p`),Tk(4426,`Deve ser usado o sistema de `),Jc(4427,`strong`),Tk(4428,`grid`),Zg(),Tk(4429,` do PO (1 ... 12 colunas).`),Zg(),Jc(4430,`blockquote`)(4431,`p`),Tk(4432,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4433,`code`),Tk(4434,`offsetColumns`),Zg(),Tk(4435,`.`),Zg()()()(),Jc(4436,`tr`,16)(4437,`td`,17)(4438,`div`,25)(4439,`span`,26),Tk(4440,` offsetSmColumns`),_u(4441,`br`),Zg()()(),Jc(4442,`td`,21)(4443,`code`,45),Tk(4444,`number`),Zg()(),Jc(4445,`td`,24)(4446,`em`)(4447,`strong`),Tk(4448,`(opcional)`),Zg()(),Jc(4449,`p`),Tk(4450,`Tamanho do espaço de exibição do campo em telas menores (sm).`),Zg(),Jc(4451,`p`),Tk(4452,`Deve ser usado o sistema de `),Jc(4453,`strong`),Tk(4454,`grid`),Zg(),Tk(4455,` do PO (1 ... 12 colunas).`),Zg(),Jc(4456,`blockquote`)(4457,`p`),Tk(4458,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4459,`code`),Tk(4460,`offsetColumns`),Zg(),Tk(4461,`.`),Zg()()()(),Jc(4462,`tr`,16)(4463,`td`,17)(4464,`div`,25)(4465,`span`,26),Tk(4466,` offsetXlColumns`),_u(4467,`br`),Zg()()(),Jc(4468,`td`,21)(4469,`code`,45),Tk(4470,`number`),Zg()(),Jc(4471,`td`,24)(4472,`em`)(4473,`strong`),Tk(4474,`(opcional)`),Zg()(),Jc(4475,`p`),Tk(4476,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),Zg(),Jc(4477,`p`),Tk(4478,`Deve ser usado o sistema de `),Jc(4479,`strong`),Tk(4480,`grid`),Zg(),Tk(4481,` do PO (1 ... 12 colunas).`),Zg(),Jc(4482,`blockquote`)(4483,`p`),Tk(4484,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(4485,`code`),Tk(4486,`offsetColumns`),Zg(),Tk(4487,`.`),Zg()()()(),Jc(4488,`tr`,16)(4489,`td`,17)(4490,`div`,25)(4491,`span`,26),Tk(4492,` onError`),_u(4493,`br`),Zg()()(),Jc(4494,`td`,21)(4495,`code`,44),Tk(4496,`Function`),Zg()(),Jc(4497,`td`,24)(4498,`em`)(4499,`strong`),Tk(4500,`(opcional)`),Zg()(),Jc(4501,`p`),Tk(4502,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Zg(),Jc(4503,`blockquote`)(4504,`p`),Tk(4505,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(4506,`code`),Tk(4507,`HttpErrorResponse`),Zg(),Tk(4508,`.`),Zg()(),Jc(4509,`p`)(4510,`strong`),Tk(4511,`Componente compatível`),Zg(),Tk(4512,`: `),Jc(4513,`code`),Tk(4514,`po-upload`),Zg()()()(),Jc(4515,`tr`,16)(4516,`td`,17)(4517,`div`,25)(4518,`span`,26),Tk(4519,` onSuccess`),_u(4520,`br`),Zg()()(),Jc(4521,`td`,21)(4522,`code`,44),Tk(4523,`Function`),Zg()(),Jc(4524,`td`,24)(4525,`em`)(4526,`strong`),Tk(4527,`(opcional)`),Zg()(),Jc(4528,`p`),Tk(4529,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Zg(),Jc(4530,`blockquote`)(4531,`p`),Tk(4532,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(4533,`code`),Tk(4534,`HttpResponse`),Zg(),Tk(4535,`.`),Zg()(),Jc(4536,`p`)(4537,`strong`),Tk(4538,`Componente compatível`),Zg(),Tk(4539,`: `),Jc(4540,`code`),Tk(4541,`po-upload`),Zg()()()(),Jc(4542,`tr`,16)(4543,`td`,17)(4544,`div`,25)(4545,`span`,26),Tk(4546,` onUpload`),_u(4547,`br`),Zg()()(),Jc(4548,`td`,21)(4549,`code`,44),Tk(4550,`Function`),Zg()(),Jc(4551,`td`,24)(4552,`em`)(4553,`strong`),Tk(4554,`(opcional)`),Zg()(),Jc(4555,`p`),Tk(4556,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Zg(),Jc(4557,`pre`)(4558,`code`),Tk(4559,`event.data = {id: 'id do usu\xE1rio'};
`),Zg()(),Jc(4560,`p`)(4561,`strong`),Tk(4562,`Componente compatível`),Zg(),Tk(4563,`: `),Jc(4564,`code`),Tk(4565,`po-upload`),Zg()()()(),Jc(4566,`tr`,16)(4567,`td`,17)(4568,`div`,25)(4569,`span`,26),Tk(4570,` optional`),_u(4571,`br`),Zg()()(),Jc(4572,`td`,21)(4573,`code`,29),Tk(4574,`boolean`),Zg()(),Jc(4575,`td`,24)(4576,`em`)(4577,`strong`),Tk(4578,`(opcional)`),Zg()(),Jc(4579,`p`),Tk(4580,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(4581,`blockquote`)(4582,`p`),Tk(4583,`A indicação não será exibida, se:`),Zg()(),Jc(4584,`ul`)(4585,`li`),Tk(4586,`O campo for `),Jc(4587,`code`),Tk(4588,`required`),Zg(),Tk(4589,`, ou;`),Zg(),Jc(4590,`li`),Tk(4591,`Não possuir `),Jc(4592,`code`),Tk(4593,`help`),Zg(),Tk(4594,` e `),Jc(4595,`code`),Tk(4596,`label`),Zg(),Tk(4597,`.`),Zg()(),Jc(4598,`p`)(4599,`strong`),Tk(4600,`Componentes compatíveis:`),Zg(),Jc(4601,`code`),Tk(4602,`po-datepicker`),Zg(),Tk(4603,`, `),Jc(4604,`code`),Tk(4605,`po-datepicker-range`),Zg(),Tk(4606,`, `),Jc(4607,`code`),Tk(4608,`po-timepicker`),Zg(),Tk(4609,`, `),Jc(4610,`code`),Tk(4611,`po-input`),Zg(),Tk(4612,`, `),Jc(4613,`code`),Tk(4614,`po-number`),Zg(),Tk(4615,`,
`),Jc(4616,`code`),Tk(4617,`po-decimal`),Zg(),Tk(4618,`, `),Jc(4619,`code`),Tk(4620,`po-select`),Zg(),Tk(4621,`, `),Jc(4622,`code`),Tk(4623,`po-radio-group`),Zg(),Tk(4624,`, `),Jc(4625,`code`),Tk(4626,`po-combo`),Zg(),Tk(4627,`, `),Jc(4628,`code`),Tk(4629,`po-lookup`),Zg(),Tk(4630,`, `),Jc(4631,`code`),Tk(4632,`po-checkbox-group`),Zg(),Tk(4633,`, `),Jc(4634,`code`),Tk(4635,`po-multiselect`),Zg(),Tk(4636,`,
`),Jc(4637,`code`),Tk(4638,`po-textarea`),Zg(),Tk(4639,`, `),Jc(4640,`code`),Tk(4641,`po-password`),Zg(),Tk(4642,`.`),Zg()()(),Jc(4643,`tr`,16)(4644,`td`,17)(4645,`div`,25)(4646,`span`,26),Tk(4647,` options`),_u(4648,`br`),Zg()()(),Jc(4649,`td`,21)(4650,`code`,32),Tk(4651,`Array<string> `),Zg(),Jc(4652,`code`,71),Tk(4653,` Array<PoSelectOption> `),Zg(),Jc(4654,`code`,72),Tk(4655,` Array<PoMultiselectOption> `),Zg(),Jc(4656,`code`,73),Tk(4657,` Array<PoCheckboxGroupOption> `),Zg(),Jc(4658,`code`,74),Tk(4659,` Array<any>`),Zg()(),Jc(4660,`td`,24)(4661,`em`)(4662,`strong`),Tk(4663,`(opcional)`),Zg()(),Jc(4664,`p`),Tk(4665,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),Zg(),Jc(4666,`p`)(4667,`strong`),Tk(4668,`Componentes compatíveis:`),Zg(),Jc(4669,`code`),Tk(4670,`po-select`),Zg(),Tk(4671,`, `),Jc(4672,`code`),Tk(4673,`po-radio-group`),Zg(),Tk(4674,`, `),Jc(4675,`code`),Tk(4676,`po-checkbox-group`),Zg(),Tk(4677,`, `),Jc(4678,`code`),Tk(4679,`po-multiselect`),Zg(),Tk(4680,`.`),Zg()()(),Jc(4681,`tr`,16)(4682,`td`,17)(4683,`div`,25)(4684,`span`,26),Tk(4685,` optionsMulti`),_u(4686,`br`),Zg()()(),Jc(4687,`td`,21)(4688,`code`,29),Tk(4689,`boolean`),Zg()(),Jc(4690,`td`,24)(4691,`em`)(4692,`strong`),Tk(4693,`(opcional)`),Zg()(),Jc(4694,`p`),Tk(4695,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),Zg()()(),Jc(4696,`tr`,16)(4697,`td`,17)(4698,`div`,25)(4699,`span`,26),Tk(4700,` optionsService`),_u(4701,`br`),Zg()()(),Jc(4702,`td`,21)(4703,`code`,27),Tk(4704,`string `),Zg(),Jc(4705,`code`,75),Tk(4706,` PoComboFilter `),Zg(),Jc(4707,`code`,76),Tk(4708,` PoMultiselectFilter`),Zg()(),Jc(4709,`td`,24)(4710,`em`)(4711,`strong`),Tk(4712,`(opcional)`),Zg()(),Jc(4713,`p`),Tk(4714,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Jc(4715,`strong`),Tk(4716,`Importante`),Zg()(),Jc(4717,`blockquote`)(4718,`p`),Tk(4719,`Para que funcione corretamente, é importante que o serviço siga o `),Jc(4720,`a`,7),Tk(4721,`guia de API do PO UI`),Zg(),Tk(4722,`.`),Zg()()()(),Jc(4723,`tr`,16)(4724,`td`,17)(4725,`div`,25)(4726,`span`,26),Tk(4727,` order`),_u(4728,`br`),Zg()()(),Jc(4729,`td`,21)(4730,`code`,45),Tk(4731,`number`),Zg()(),Jc(4732,`td`,24)(4733,`em`)(4734,`strong`),Tk(4735,`(opcional)`),Zg()(),Jc(4736,`p`),Tk(4737,`Informa a ordem de exibição do campo.`),Zg(),Jc(4738,`p`),Tk(4739,`Exemplo de utilização:`),Zg(),Jc(4740,`p`)(4741,`code`),Tk(4742,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),Zg()(),Jc(4743,`p`),Tk(4744,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Jc(4745,`code`),Tk(4746,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),Zg()(),Jc(4747,`p`),Tk(4748,`Só serão aceitos valores com números inteiros maiores do que zero.`),Zg(),Jc(4749,`p`),Tk(4750,`Campos sem `),Jc(4751,`code`),Tk(4752,`order`),Zg(),Tk(4753,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),Zg()()(),Jc(4754,`tr`,16)(4755,`td`,17)(4756,`div`,25)(4757,`span`,26),Tk(4758,` params`),_u(4759,`br`),Zg()()(),Jc(4760,`td`,21)(4761,`code`,33),Tk(4762,`any`),Zg()(),Jc(4763,`td`,24)(4764,`em`)(4765,`strong`),Tk(4766,`(opcional)`),Zg()(),Jc(4767,`p`),Tk(4768,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Jc(4769,`code`),Tk(4770,`po-lookup`),Zg(),Tk(4771,` e
`),Jc(4772,`code`),Tk(4773,`po-combo`),Zg(),Tk(4774,`.`),Zg(),Jc(4775,`p`),Tk(4776,`Por exemplo, para o parâmetro `),Jc(4777,`code`),Tk(4778,`{ age: 23 }`),Zg(),Tk(4779,` a URL da requisição ficaria:`),Zg(),Jc(4780,`p`)(4781,`code`),Tk(4782,`url + ?age=23&filter=Peter`),Zg()()()(),Jc(4783,`tr`,16)(4784,`td`,17)(4785,`div`,25)(4786,`span`,26),Tk(4787,` pattern`),_u(4788,`br`),Zg()()(),Jc(4789,`td`,21)(4790,`code`,27),Tk(4791,`string`),Zg()(),Jc(4792,`td`,24)(4793,`em`)(4794,`strong`),Tk(4795,`(opcional)`),Zg()(),Jc(4796,`p`),Tk(4797,`Regex para validação do campo.`),Zg(),Jc(4798,`p`)(4799,`strong`),Tk(4800,`Componentes compatíveis:`),Zg(),Jc(4801,`code`),Tk(4802,`po-input`),Zg(),Tk(4803,`, `),Jc(4804,`code`),Tk(4805,`po-password`),Zg(),Tk(4806,`.`),Zg(),Jc(4807,`blockquote`)(4808,`p`),Tk(4809,`Incompatível com `),Jc(4810,`code`),Tk(4811,`po-decimal`),Zg(),Tk(4812,`.`),Zg()()()(),Jc(4813,`tr`,16)(4814,`td`,17)(4815,`div`,25)(4816,`span`,26),Tk(4817,` placeholder`),_u(4818,`br`),Zg()()(),Jc(4819,`td`,21)(4820,`code`,27),Tk(4821,`string`),Zg()(),Jc(4822,`td`,24)(4823,`em`)(4824,`strong`),Tk(4825,`(opcional)`),Zg()(),Jc(4826,`p`),Tk(4827,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),Zg(),Jc(4828,`p`)(4829,`strong`),Tk(4830,`Componentes compatíveis:`),Zg(),Jc(4831,`code`),Tk(4832,`po-datepicker`),Zg(),Tk(4833,`, `),Jc(4834,`code`),Tk(4835,`po-datepicker-range`),Zg(),Tk(4836,`, `),Jc(4837,`code`),Tk(4838,`po-timepicker`),Zg(),Tk(4839,`, `),Jc(4840,`code`),Tk(4841,`po-input`),Zg(),Tk(4842,`, `),Jc(4843,`code`),Tk(4844,`po-number`),Zg(),Tk(4845,`, `),Jc(4846,`code`),Tk(4847,`po-decimal`),Zg(),Tk(4848,`, `),Jc(4849,`code`),Tk(4850,`po-select`),Zg(),Tk(4851,`, `),Jc(4852,`code`),Tk(4853,`po-combo`),Zg(),Tk(4854,`, `),Jc(4855,`code`),Tk(4856,`po-lookup`),Zg(),Tk(4857,`, `),Jc(4858,`code`),Tk(4859,`po-multiselect`),Zg(),Tk(4860,`, `),Jc(4861,`code`),Tk(4862,`po-textarea`),Zg(),Tk(4863,`, `),Jc(4864,`code`),Tk(4865,`po-password`),Zg(),Tk(4866,`.`),Zg()()(),Jc(4867,`tr`,16)(4868,`td`,17)(4869,`div`,25)(4870,`span`,26),Tk(4871,` placeholderSearch`),_u(4872,`br`),Zg()()(),Jc(4873,`td`,21)(4874,`code`,27),Tk(4875,`string`),Zg()(),Jc(4876,`td`,24)(4877,`em`)(4878,`strong`),Tk(4879,`(opcional)`),Zg()(),Jc(4880,`p`),Tk(4881,`Placeholder do campo de pesquisa do `),Jc(4882,`code`),Tk(4883,`po-multiselect`),Zg(),Tk(4884,`.`),Zg(),Jc(4885,`blockquote`)(4886,`p`),Tk(4887,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Zg()()()(),Jc(4888,`tr`,16)(4889,`td`,17)(4890,`div`,25)(4891,`span`,26),Tk(4892,` property`),_u(4893,`br`),Zg()()(),Jc(4894,`td`,21)(4895,`code`,27),Tk(4896,`string`),Zg()(),Jc(4897,`td`,24)(4898,`p`),Tk(4899,`Nome de referência do campo.`),Zg()()(),Jc(4900,`tr`,16)(4901,`td`,17)(4902,`div`,25)(4903,`span`,26),Tk(4904,` range`),_u(4905,`br`),Zg()()(),Jc(4906,`td`,21)(4907,`code`,29),Tk(4908,`boolean`),Zg()(),Jc(4909,`td`,24)(4910,`em`)(4911,`strong`),Tk(4912,`(opcional)`),Zg()(),Jc(4913,`p`),Tk(4914,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),Zg(),Jc(4915,`blockquote`)(4916,`p`),Tk(4917,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),Zg()()()(),Jc(4918,`tr`,16)(4919,`td`,17)(4920,`div`,25)(4921,`span`,26),Tk(4922,` rangePresetOptions`),_u(4923,`br`),Zg()()(),Jc(4924,`td`,21)(4925,`code`,77),Tk(4926,`Array<PoCalendarRangePreset>`),Zg()(),Jc(4927,`td`,24)(4928,`em`)(4929,`strong`),Tk(4930,`(opcional)`),Zg()(),Jc(4931,`p`),Tk(4932,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),Zg(),Jc(4933,`p`),Tk(4934,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Jc(4935,`code`),Tk(4936,`PoCalendarRangePreset`),Zg(),Tk(4937,`.`),Zg(),Jc(4938,`p`)(4939,`strong`),Tk(4940,`Componente compatível:`),Zg(),Jc(4941,`code`),Tk(4942,`po-datepicker-range`),Zg()()()(),Jc(4943,`tr`,16)(4944,`td`,17)(4945,`div`,25)(4946,`span`,26),Tk(4947,` rangePresets`),_u(4948,`br`),Zg()()(),Jc(4949,`td`,21)(4950,`code`,29),Tk(4951,`boolean `),Zg(),Jc(4952,`code`,32),Tk(4953,` Array<string>`),Zg()(),Jc(4954,`td`,24)(4955,`em`)(4956,`strong`),Tk(4957,`(opcional)`),Zg()(),Jc(4958,`p`),Tk(4959,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),Zg(),Jc(4960,`p`),Tk(4961,`Aceita os seguintes valores:`),Zg(),Jc(4962,`ul`)(4963,`li`)(4964,`code`),Tk(4965,`true`),Zg(),Tk(4966,`: exibe todos os presets padrão.`),Zg(),Jc(4967,`li`)(4968,`code`),Tk(4969,`false`),Zg(),Tk(4970,`: não exibe os presets padrão.`),Zg(),Jc(4971,`li`)(4972,`code`),Tk(4973,`Array<string>`),Zg(),Tk(4974,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),Zg()(),Jc(4975,`p`)(4976,`strong`),Tk(4977,`Componente compatível:`),Zg(),Jc(4978,`code`),Tk(4979,`po-datepicker-range`),Zg()()()(),Jc(4980,`tr`,16)(4981,`td`,17)(4982,`div`,25)(4983,`span`,26),Tk(4984,` rangePresetsOrder`),_u(4985,`br`),Zg()()(),Jc(4986,`td`,21)(4987,`code`,78),Tk(4988,`'asc' `),Zg(),Jc(4989,`code`,79),Tk(4990,` 'desc'`),Zg()(),Jc(4991,`td`,24)(4992,`em`)(4993,`strong`),Tk(4994,`(opcional)`),Zg()(),Jc(4995,`p`),Tk(4996,`Define a ordenação dos presets na lista.`),Zg(),Jc(4997,`p`),Tk(4998,`Valores aceitos:`),Zg(),Jc(4999,`ul`)(5e3,`li`)(5001,`code`),Tk(5002,`'asc'`),Zg(),Tk(5003,`: ordenação crescente (passado → futuro)`),Zg(),Jc(5004,`li`)(5005,`code`),Tk(5006,`'desc'`),Zg(),Tk(5007,`: ordenação decrescente (futuro → passado)`),Zg()(),Jc(5008,`p`)(5009,`strong`),Tk(5010,`Componente compatível:`),Zg(),Jc(5011,`code`),Tk(5012,`po-datepicker-range`),Zg()()()(),Jc(5013,`tr`,16)(5014,`td`,17)(5015,`div`,25)(5016,`span`,26),Tk(5017,` readonly`),_u(5018,`br`),Zg()()(),Jc(5019,`td`,21)(5020,`code`,29),Tk(5021,`boolean`),Zg()(),Jc(5022,`td`,24)(5023,`em`)(5024,`strong`),Tk(5025,`(opcional)`),Zg()(),Jc(5026,`p`),Tk(5027,`Indica que o campo será somente leitura.`),Zg(),Jc(5028,`p`)(5029,`strong`),Tk(5030,`Componentes compatíveis:`),Zg(),Jc(5031,`code`),Tk(5032,`po-datepicker`),Zg(),Tk(5033,`, `),Jc(5034,`code`),Tk(5035,`po-datepicker-range`),Zg(),Tk(5036,`, `),Jc(5037,`code`),Tk(5038,`po-timepicker`),Zg(),Tk(5039,`, `),Jc(5040,`code`),Tk(5041,`po-input`),Zg(),Tk(5042,`, `),Jc(5043,`code`),Tk(5044,`po-number`),Zg(),Tk(5045,`,
`),Jc(5046,`code`),Tk(5047,`po-decimal`),Zg(),Tk(5048,`, `),Jc(5049,`code`),Tk(5050,`po-select`),Zg(),Tk(5051,`, `),Jc(5052,`code`),Tk(5053,`po-textarea`),Zg(),Tk(5054,`, `),Jc(5055,`code`),Tk(5056,`po-password`),Zg(),Tk(5057,`.`),Zg()()(),Jc(5058,`tr`,16)(5059,`td`,17)(5060,`div`,25)(5061,`span`,26),Tk(5062,` removeInitialFilter`),_u(5063,`br`),Zg()()(),Jc(5064,`td`,21)(5065,`code`,29),Tk(5066,`boolean`),Zg()(),Jc(5067,`td`,24)(5068,`em`)(5069,`strong`),Tk(5070,`(opcional)`),Zg()(),Jc(5071,`p`),Tk(5072,`Define que o filtro no primeiro clique será removido.`),Zg(),Jc(5073,`blockquote`)(5074,`p`),Tk(5075,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),Zg()(),Jc(5076,`p`)(5077,`strong`),Tk(5078,`Componente compatível`),Zg(),Tk(5079,`: `),Jc(5080,`code`),Tk(5081,`po-combo`),Zg()()()(),Jc(5082,`tr`,16)(5083,`td`,17)(5084,`div`,25)(5085,`span`,26),Tk(5086,` required`),_u(5087,`br`),Zg()()(),Jc(5088,`td`,21)(5089,`code`,29),Tk(5090,`boolean`),Zg()(),Jc(5091,`td`,24)(5092,`em`)(5093,`strong`),Tk(5094,`(opcional)`),Zg()(),Jc(5095,`p`),Tk(5096,`Define a obrigatoriedade do campo.`),Zg(),Jc(5097,`p`)(5098,`strong`),Tk(5099,`Componentes compatíveis:`),Zg(),Jc(5100,`code`),Tk(5101,`po-datepicker`),Zg(),Tk(5102,`, `),Jc(5103,`code`),Tk(5104,`po-datepicker-range`),Zg(),Tk(5105,`, `),Jc(5106,`code`),Tk(5107,`po-timepicker`),Zg(),Tk(5108,`, `),Jc(5109,`code`),Tk(5110,`po-input`),Zg(),Tk(5111,`, `),Jc(5112,`code`),Tk(5113,`po-number`),Zg(),Tk(5114,`,
`),Jc(5115,`code`),Tk(5116,`po-decimal`),Zg(),Tk(5117,`, `),Jc(5118,`code`),Tk(5119,`po-select`),Zg(),Tk(5120,`, `),Jc(5121,`code`),Tk(5122,`po-radio-group`),Zg(),Tk(5123,`, `),Jc(5124,`code`),Tk(5125,`po-combo`),Zg(),Tk(5126,`, `),Jc(5127,`code`),Tk(5128,`po-lookup`),Zg(),Tk(5129,`, `),Jc(5130,`code`),Tk(5131,`po-checkbox-group`),Zg(),Tk(5132,`, `),Jc(5133,`code`),Tk(5134,`po-multiselect`),Zg(),Tk(5135,`,
`),Jc(5136,`code`),Tk(5137,`po-textarea`),Zg(),Tk(5138,`, `),Jc(5139,`code`),Tk(5140,"po-password``, "),Zg(),Tk(5141,"po-upload`."),Zg()()(),Jc(5142,`tr`,16)(5143,`td`,17)(5144,`div`,25)(5145,`span`,26),Tk(5146,` requiredFieldErrorMessage`),_u(5147,`br`),Zg()()(),Jc(5148,`td`,21)(5149,`code`,29),Tk(5150,`boolean`),Zg()(),Jc(5151,`td`,24)(5152,`em`)(5153,`strong`),Tk(5154,`(opcional)`),Zg()(),Jc(5155,`p`),Tk(5156,`Exibe a mensagem setada na propriedade `),Jc(5157,`code`),Tk(5158,`errorMessage`),Zg(),Tk(5159,` se o campo estiver vazio e for requerido.`),Zg(),Jc(5160,`blockquote`)(5161,`p`),Tk(5162,`Necessário que a propriedade `),Jc(5163,`code`),Tk(5164,`required`),Zg(),Tk(5165,` esteja habilitada.`),Zg()(),Jc(5166,`p`)(5167,`strong`),Tk(5168,`Componentes compatíveis:`),Zg(),Jc(5169,`code`),Tk(5170,`po-datepicker`),Zg(),Tk(5171,`, `),Jc(5172,`code`),Tk(5173,`po-timepicker`),Zg(),Tk(5174,`, `),Jc(5175,`code`),Tk(5176,`po-input`),Zg(),Tk(5177,`, `),Jc(5178,`code`),Tk(5179,`po-number`),Zg(),Tk(5180,`, `),Jc(5181,`code`),Tk(5182,`po-decimal`),Zg(),Tk(5183,`, `),Jc(5184,`code`),Tk(5185,`po-password`),Zg(),Tk(5186,`.`),Zg()()(),Jc(5187,`tr`,16)(5188,`td`,17)(5189,`div`,25)(5190,`span`,26),Tk(5191,` restrictions`),_u(5192,`br`),Zg()()(),Jc(5193,`td`,21)(5194,`code`,80),Tk(5195,`PoUploadFileRestrictions`),Zg()(),Jc(5196,`td`,24)(5197,`em`)(5198,`strong`),Tk(5199,`(opcional)`),Zg()(),Jc(5200,`p`),Tk(5201,`Objeto que segue a definição da interface `),Jc(5202,`code`),Tk(5203,`PoUploadFileRestrictions`),Zg(),Tk(5204,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Zg(),Jc(5205,`p`)(5206,`strong`),Tk(5207,`Componente compatível`),Zg(),Tk(5208,`: `),Jc(5209,`code`),Tk(5210,`po-upload`),Zg()()()(),Jc(5211,`tr`,16)(5212,`td`,17)(5213,`div`,25)(5214,`span`,26),Tk(5215,` rows`),_u(5216,`br`),Zg()()(),Jc(5217,`td`,21)(5218,`code`,45),Tk(5219,`number`),Zg()(),Jc(5220,`td`,24)(5221,`em`)(5222,`strong`),Tk(5223,`(opcional)`),Zg()(),Jc(5224,`p`),Tk(5225,`Quantidade de linhas exibidas no `),Jc(5226,`code`),Tk(5227,`po-textarea`),Zg(),Tk(5228,`.`),Zg()()(),Jc(5229,`tr`,16)(5230,`td`,17)(5231,`div`,25)(5232,`span`,26),Tk(5233,` searchService`),_u(5234,`br`),Zg()()(),Jc(5235,`td`,21)(5236,`code`,27),Tk(5237,`string `),Zg(),Jc(5238,`code`,34),Tk(5239,` PoLookupFilter`),Zg()(),Jc(5240,`td`,24)(5241,`em`)(5242,`strong`),Tk(5243,`(opcional)`),Zg()(),Jc(5244,`p`),Tk(5245,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Jc(5246,`code`),Tk(5247,`columns`),Zg(),Tk(5248,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Jc(5249,`strong`),Tk(5250,`Importante:`),Zg()(),Jc(5251,`blockquote`)(5252,`p`),Tk(5253,`Caso utilizar a propriedade `),Jc(5254,`code`),Tk(5255,`optionsService`),Zg(),Tk(5256,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Jc(5257,`a`,7),Tk(5258,`guia de API do PO UI`),Zg(),Tk(5259,`.`),Zg()()()(),Jc(5260,`tr`,16)(5261,`td`,17)(5262,`div`,25)(5263,`span`,26),Tk(5264,` secondInterval`),_u(5265,`br`),Zg()()(),Jc(5266,`td`,21)(5267,`code`,45),Tk(5268,`number`),Zg()(),Jc(5269,`td`,24)(5270,`em`)(5271,`strong`),Tk(5272,`(opcional)`),Zg()(),Jc(5273,`p`),Tk(5274,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),Zg()()(),Jc(5275,`tr`,16)(5276,`td`,17)(5277,`div`,25)(5278,`span`,26),Tk(5279,` secret`),_u(5280,`br`),Zg()()(),Jc(5281,`td`,21)(5282,`code`,29),Tk(5283,`boolean`),Zg()(),Jc(5284,`td`,24)(5285,`em`)(5286,`strong`),Tk(5287,`(opcional)`),Zg()(),Jc(5288,`p`),Tk(5289,`Esconde a informação estilo `),Jc(5290,`em`),Tk(5291,`password`),Zg(),Tk(5292,`, pode ser utilizado quando o tipo de dado for `),Jc(5293,`em`),Tk(5294,`string`),Zg(),Tk(5295,`.`),Zg()()(),Jc(5296,`tr`,16)(5297,`td`,17)(5298,`div`,25)(5299,`span`,26),Tk(5300,` showRequired`),_u(5301,`br`),Zg()()(),Jc(5302,`td`,21)(5303,`code`,29),Tk(5304,`boolean`),Zg()(),Jc(5305,`td`,24)(5306,`em`)(5307,`strong`),Tk(5308,`(opcional)`),Zg()(),Jc(5309,`p`),Tk(5310,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(5311,`blockquote`)(5312,`p`),Tk(5313,`Não será exibida a indicação se:`),Zg()(),Jc(5314,`ul`)(5315,`li`),Tk(5316,`Não possuir `),Jc(5317,`code`),Tk(5318,`p-help`),Zg(),Tk(5319,` e/ou `),Jc(5320,`code`),Tk(5321,`p-label`),Zg(),Tk(5322,`.`),Zg()(),Jc(5323,`p`)(5324,`strong`),Tk(5325,`Componentes compatíveis:`),Zg(),Jc(5326,`code`),Tk(5327,`po-datepicker`),Zg(),Tk(5328,`, `),Jc(5329,`code`),Tk(5330,`po-datepicker-range`),Zg(),Tk(5331,`, `),Jc(5332,`code`),Tk(5333,`po-timepicker`),Zg(),Tk(5334,`, `),Jc(5335,`code`),Tk(5336,`po-input`),Zg(),Tk(5337,`, `),Jc(5338,`code`),Tk(5339,`po-number`),Zg(),Tk(5340,`,
`),Jc(5341,`code`),Tk(5342,`po-decimal`),Zg(),Tk(5343,`, `),Jc(5344,`code`),Tk(5345,`po-select`),Zg(),Tk(5346,`, `),Jc(5347,`code`),Tk(5348,`po-radio-group`),Zg(),Tk(5349,`, `),Jc(5350,`code`),Tk(5351,`po-combo`),Zg(),Tk(5352,`, `),Jc(5353,`code`),Tk(5354,`po-lookup`),Zg(),Tk(5355,`, `),Jc(5356,`code`),Tk(5357,`po-checkbox-group`),Zg(),Tk(5358,`, `),Jc(5359,`code`),Tk(5360,`po-multiselect`),Zg(),Tk(5361,`,
`),Jc(5362,`code`),Tk(5363,`po-textarea`),Zg(),Tk(5364,`, `),Jc(5365,`code`),Tk(5366,`po-password`),Zg(),Tk(5367,`, `),Jc(5368,`code`),Tk(5369,`po-upload`),Zg(),Tk(5370,`.`),Zg()()(),Jc(5371,`tr`,16)(5372,`td`,17)(5373,`div`,25)(5374,`span`,26),Tk(5375,` showSeconds`),_u(5376,`br`),Zg()()(),Jc(5377,`td`,21)(5378,`code`,29),Tk(5379,`boolean`),Zg()(),Jc(5380,`td`,24)(5381,`em`)(5382,`strong`),Tk(5383,`(opcional)`),Zg()(),Jc(5384,`p`),Tk(5385,`Exibe a coluna de segundos no painel do timepicker.`),Zg()()(),Jc(5386,`tr`,16)(5387,`td`,17)(5388,`div`,25)(5389,`span`,26),Tk(5390,` showThumbnail`),_u(5391,`br`),Zg()()(),Jc(5392,`td`,21)(5393,`code`,29),Tk(5394,`boolean`),Zg()(),Jc(5395,`td`,24)(5396,`em`)(5397,`strong`),Tk(5398,`(opcional)`),Zg()(),Jc(5399,`p`),Tk(5400,`Exibe a pré-visualização de imagens ao anexá-las.`),Zg(),Jc(5401,`blockquote`)(5402,`p`),Tk(5403,`Propriedade funciona apenas em arquivos de formato de imagem (`),Jc(5404,`code`),Tk(5405,`.png`),Zg(),Tk(5406,`, `),Jc(5407,`code`),Tk(5408,`.jpg`),Zg(),Tk(5409,`, `),Jc(5410,`code`),Tk(5411,`.jpeg`),Zg(),Tk(5412,` e `),Jc(5413,`code`),Tk(5414,`.gif`),Zg(),Tk(5415,`).`),Zg()(),Jc(5416,`p`)(5417,`strong`),Tk(5418,`Componente compatível`),Zg(),Tk(5419,`: `),Jc(5420,`code`),Tk(5421,`po-upload`),Zg()()()(),Jc(5422,`tr`,16)(5423,`td`,17)(5424,`div`,25)(5425,`span`,26),Tk(5426,` size`),_u(5427,`br`),Zg()()(),Jc(5428,`td`,21)(5429,`code`,27),Tk(5430,`string`),Zg()(),Jc(5431,`td`,24)(5432,`em`)(5433,`strong`),Tk(5434,`(opcional)`),Zg()(),Jc(5435,`p`),Tk(5436,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),Zg(),Jc(5437,`ul`)(5438,`li`)(5439,`code`),Tk(5440,`small`),Zg(),Tk(5441,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(5442,`li`)(5443,`code`),Tk(5444,`medium`),Zg(),Tk(5445,`: aplica a medida medium de cada componente.`),Zg(),Jc(5446,`li`)(5447,`code`),Tk(5448,`large`),Zg(),Tk(5449,`: aplica a medida large de cada componente (disponível para `),Jc(5450,`code`),Tk(5451,`po-checkbox`),Zg(),Tk(5452,` e `),Jc(5453,`code`),Tk(5454,`po-radio-group`),Zg(),Tk(5455,`).`),Jc(5456,`blockquote`)(5457,`p`),Tk(5458,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(5459,`code`),Tk(5460,`medium`),Zg(),Tk(5461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(5462,`a`,40),Tk(5463,`po-theme`),Zg(),Tk(5464,`.`),Zg()()()()()(),Jc(5465,`tr`,16)(5466,`td`,17)(5467,`div`,25)(5468,`span`,26),Tk(5469,` sort`),_u(5470,`br`),Zg()()(),Jc(5471,`td`,21)(5472,`code`,29),Tk(5473,`boolean`),Zg()(),Jc(5474,`td`,24)(5475,`em`)(5476,`strong`),Tk(5477,`(opcional)`),Zg()(),Jc(5478,`p`),Tk(5479,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Zg(),Jc(5480,`p`)(5481,`strong`),Tk(5482,`Componentes compatíveis:`),Zg(),Jc(5483,`code`),Tk(5484,`po-combo`),Zg(),Tk(5485,`, po-multiselect`),Zg()()(),Jc(5486,`tr`,16)(5487,`td`,17)(5488,`div`,25)(5489,`span`,26),Tk(5490,` step`),_u(5491,`br`),Zg()()(),Jc(5492,`td`,21)(5493,`code`,45),Tk(5494,`number`),Zg()(),Jc(5495,`td`,24)(5496,`em`)(5497,`strong`),Tk(5498,`(opcional)`),Zg()(),Jc(5499,`p`),Tk(5500,`Intervalo utilizado no `),Jc(5501,`code`),Tk(5502,`po-number`),Zg(),Tk(5503,`.`),Zg()()(),Jc(5504,`tr`,16)(5505,`td`,17)(5506,`div`,25)(5507,`span`,26),Tk(5508,` thousandMaxlength`),_u(5509,`br`),Zg()()(),Jc(5510,`td`,21)(5511,`code`,45),Tk(5512,`number`),Zg()(),Jc(5513,`td`,24)(5514,`em`)(5515,`strong`),Tk(5516,`(opcional)`),Zg()(),Jc(5517,`p`),Tk(5518,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),Zg(),Jc(5519,`blockquote`)(5520,`p`),Tk(5521,`Esta propriedade só pode ser utilizada quando o `),Jc(5522,`code`),Tk(5523,`type`),Zg(),Tk(5524,` for `),Jc(5525,`em`),Tk(5526,`currency`),Zg(),Tk(5527,` ou `),Jc(5528,`em`),Tk(5529,`decimal`),Zg(),Tk(5530,`.`),Zg()(),Jc(5531,`blockquote`)(5532,`p`),Tk(5533,`Quando utilizado com `),Jc(5534,`code`),Tk(5535,`displayFormat`),Zg(),Tk(5536,`, será respeitado o valor `),Jc(5537,`strong`),Tk(5538,`mais restritivo`),Zg(),Tk(5539,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),Zg()()()(),Jc(5540,`tr`,16)(5541,`td`,17)(5542,`div`,25)(5543,`span`,26),Tk(5544,` type`),_u(5545,`br`),Zg()()(),Jc(5546,`td`,21)(5547,`code`,27),Tk(5548,`string `),Zg(),Jc(5549,`code`,81),Tk(5550,` PoDynamicFieldType`),Zg()(),Jc(5551,`td`,24)(5552,`em`)(5553,`strong`),Tk(5554,`(opcional)`),Zg()(),Jc(5555,`p`),Tk(5556,`Tipo do valor campo.`),Zg(),Jc(5557,`p`),Tk(5558,`Valores válidos:`),Zg(),Jc(5559,`ul`)(5560,`li`)(5561,`code`),Tk(5562,`boolean`),Zg(),Tk(5563,`: Valores `),Jc(5564,`em`),Tk(5565,`booleanos`),Zg(),Tk(5566,`.`),Zg(),Jc(5567,`li`)(5568,`code`),Tk(5569,`currency`),Zg(),Tk(5570,`: Valores monetários.`),Zg(),Jc(5571,`li`)(5572,`code`),Tk(5573,`decimal`),Zg(),Tk(5574,`: Valores decimais.`),Zg(),Jc(5575,`li`)(5576,`code`),Tk(5577,`date`),Zg(),Tk(5578,`: Valores de datas.`),Jc(5579,`ul`)(5580,`li`),Tk(5581,`Aceita os tipos `),Jc(5582,`strong`),Tk(5583,`string`),Zg(),Tk(5584,` e `),Jc(5585,`strong`),Tk(5586,`Date`),Zg(),Tk(5587,` padr\xE3o do Javascript,
por exemplo: `),Jc(5588,`code`),Tk(5589,`'2017-11-28'`),Zg(),Tk(5590,` ou `),Jc(5591,`code`),Tk(5592,`new Date(2017, 10, 28)`),Zg(),Tk(5593,`.`),Zg()()(),Jc(5594,`li`)(5595,`code`),Tk(5596,`dateTime`),Zg(),Tk(5597,`: Valor de data com horário.`),Jc(5598,`ul`)(5599,`li`),Tk(5600,`Aceita o tipo `),Jc(5601,`em`),Tk(5602,`string`),Zg(),Tk(5603,` no formato `),Jc(5604,`strong`),Tk(5605,`ISO-8601`),Zg(),Tk(5606,` extendido `),Jc(5607,`strong`),Tk(5608,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Zg(),Tk(5609,`
e o tipo `),Jc(5610,`strong`),Tk(5611,`Date`),Zg(),Tk(5612,` padrão do Javascript, por exemplo: `),Jc(5613,`code`),Tk(5614,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(5615,` ou `),Jc(5616,`code`),Tk(5617,`new Date(2017, 10, 28)`),Zg(),Tk(5618,`.`),Zg()()(),Jc(5619,`li`)(5620,`code`),Tk(5621,`number`),Zg(),Tk(5622,`: Valores numéricos.`),Zg(),Jc(5623,`li`)(5624,`code`),Tk(5625,`string`),Zg(),Tk(5626,`: Textos.`),Zg(),Jc(5627,`li`)(5628,`code`),Tk(5629,`time`),Zg(),Tk(5630,`: Valor do horário.`),Jc(5631,`ul`)(5632,`li`),Tk(5633,`Aceita o tipo `),Jc(5634,`strong`),Tk(5635,`string`),Zg(),Tk(5636,` nos formatos `),Jc(5637,`strong`),Tk(5638,`'HH:mm:ss'`),Zg(),Tk(5639,` ou `),Jc(5640,`strong`),Tk(5641,`'HH:mm:ss.ffffff'`),Zg(),Tk(5642,`, por exemplo: `),Jc(5643,`code`),Tk(5644,`'23:12:45'`),Zg(),Tk(5645,`.`),Zg()()()()()(),Jc(5646,`tr`,16)(5647,`td`,17)(5648,`div`,25)(5649,`span`,26),Tk(5650,` url`),_u(5651,`br`),Zg()()(),Jc(5652,`td`,21)(5653,`code`,27),Tk(5654,`string`),Zg()(),Jc(5655,`td`,24)(5656,`em`)(5657,`strong`),Tk(5658,`(opcional)`),Zg()(),Jc(5659,`p`),Tk(5660,`URL que deve ser feita a requisição com os arquivos selecionados.`),Zg(),Jc(5661,`p`)(5662,`strong`),Tk(5663,`Componente compatível`),Zg(),Tk(5664,`: `),Jc(5665,`code`),Tk(5666,`po-upload`),Zg()()()(),Jc(5667,`tr`,16)(5668,`td`,17)(5669,`div`,25)(5670,`span`,26),Tk(5671,` validate`),_u(5672,`br`),Zg()()(),Jc(5673,`td`,21)(5674,`code`,27),Tk(5675,`string `),Zg(),Jc(5676,`code`,44),Tk(5677,` Function`),Zg()(),Jc(5678,`td`,24)(5679,`em`)(5680,`strong`),Tk(5681,`(opcional)`),Zg()(),Jc(5682,`p`),Tk(5683,`Função ou serviço para validar as `),Jc(5684,`strong`),Tk(5685,`mudanças do campo`),Zg(),Tk(5686,`.`),Zg(),Jc(5687,`ul`)(5688,`li`),Tk(5689,`A propriedade aceita os seguintes tipos:`),Zg()(),Jc(5690,`ul`)(5691,`li`)(5692,`strong`),Tk(5693,`String`),Zg(),Tk(5694,`: Endpoint usado pelo componente para requisição via `),Jc(5695,`code`),Tk(5696,`POST`),Zg(),Tk(5697,`.`),Zg(),Jc(5698,`li`)(5699,`strong`),Tk(5700,`Function`),Zg(),Tk(5701,`: Método que será executado.`),Zg()(),Jc(5702,`p`),Tk(5703,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Jc(5704,`code`),Tk(5705,`PoDynamicFormFieldChanged`),Zg(),Tk(5706,`:`),Zg(),Jc(5707,`p`)(5708,`code`),Tk(5709,`{ property: 'property name', value: 'new value' }`),Zg()(),Jc(5710,`p`),Tk(5711,`O retorno desta função deve ser do tipo `),Jc(5712,`a`,82),Tk(5713,`PoDynamicFormFieldValidation`),Zg(),Tk(5714,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),Zg(),Jc(5715,`pre`)(5716,`code`),Tk(5717,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),Zg()(),Jc(5718,`p`),Tk(5719,`Para referenciar a sua função utilize a propriedade `),Jc(5720,`code`),Tk(5721,`bind`),Zg(),Tk(5722,`, por exemplo:
`),Jc(5723,`code`),Tk(5724,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),Zg()()()(),Jc(5725,`tr`,16)(5726,`td`,17)(5727,`div`,25)(5728,`span`,26),Tk(5729,` visible`),_u(5730,`br`),Zg()()(),Jc(5731,`td`,21)(5732,`code`,29),Tk(5733,`boolean`),Zg()(),Jc(5734,`td`,24)(5735,`em`)(5736,`strong`),Tk(5737,`(opcional)`),Zg()(),Jc(5738,`p`),Tk(5739,`Indica se o campo será visível.`),Zg()()(),Jc(5740,`tr`,16)(5741,`td`,17)(5742,`div`,25)(5743,`span`,26),Tk(5744,` yearRangeLimit`),_u(5745,`br`),Zg()()(),Jc(5746,`td`,21)(5747,`code`,45),Tk(5748,`number`),Zg()(),Jc(5749,`td`,24)(5750,`em`)(5751,`strong`),Tk(5752,`(opcional)`),Zg()(),Jc(5753,`p`),Tk(5754,`Define o limite de anos exibidos na lista de anos do `),Jc(5755,`code`),Tk(5756,`po-datepicker`),Zg(),Tk(5757,` nos modos `),Jc(5758,`code`),Tk(5759,`month-year`),Zg(),Tk(5760,` e `),Jc(5761,`code`),Tk(5762,`year`),Zg(),Tk(5763,`.`),Zg()()()(),Jc(5764,`h4`,43)(5765,`code`,5),Tk(5766,`PoLookupColumn`),Zg()(),Jc(5767,`div`,2)(5768,`p`),Tk(5769,`Interface para configuração das colunas do po-lookup.`),Zg()(),Jc(5770,`h4`,12),Tk(5771,`Propriedades`),Zg(),Jc(5772,`table`,13)(5773,`tr`,14)(5774,`th`,15),Tk(5775,`Nome`),Zg(),Jc(5776,`th`,15),Tk(5777,`Tipo`),Zg(),Jc(5778,`th`,15),Tk(5779,`Descrição`),Zg()(),Jc(5780,`tr`,16)(5781,`td`,17)(5782,`div`,25)(5783,`span`,26),Tk(5784,` fieldLabel`),_u(5785,`br`),Zg()()(),Jc(5786,`td`,21)(5787,`code`,29),Tk(5788,`boolean`),Zg()(),Jc(5789,`td`,24)(5790,`em`)(5791,`strong`),Tk(5792,`(opcional)`),Zg()(),Jc(5793,`p`),Tk(5794,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),Zg(),Jc(5795,`p`),Tk(5796,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),Zg(),Jc(5797,`p`),Tk(5798,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Jc(5799,`code`),Tk(5800,`p-field-format`),Zg(),Tk(5801,` ou `),Jc(5802,`code`),Tk(5803,`p-field-label`),Zg(),Tk(5804,` forem configurados no componente.`),Zg()()(),Jc(5805,`tr`,16)(5806,`td`,17)(5807,`div`,25)(5808,`span`,26),Tk(5809,` format`),_u(5810,`br`),Zg()()(),Jc(5811,`td`,21)(5812,`code`,27),Tk(5813,`string`),Zg()(),Jc(5814,`td`,24)(5815,`em`)(5816,`strong`),Tk(5817,`(opcional)`),Zg()(),Jc(5818,`p`),Tk(5819,`Formato de exibição do valor da coluna:`),Zg(),Jc(5820,`ul`)(5821,`li`),Tk(5822,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),Zg(),Jc(5823,`li`),Tk(5824,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Zg()()()(),Jc(5825,`tr`,16)(5826,`td`,17)(5827,`div`,25)(5828,`span`,26),Tk(5829,` label`),_u(5830,`br`),Zg()()(),Jc(5831,`td`,21)(5832,`code`,27),Tk(5833,`string`),Zg()(),Jc(5834,`td`,24)(5835,`em`)(5836,`strong`),Tk(5837,`(opcional)`),Zg()(),Jc(5838,`p`),Tk(5839,`Texto para título da coluna.`),Zg(),Jc(5840,`p`),Tk(5841,`Caso não seja informado, será utilizado como `),Jc(5842,`em`),Tk(5843,`label`),Zg(),Tk(5844,` o valor da propriedade `),Jc(5845,`em`),Tk(5846,`property`),Zg(),Tk(5847,` com a primeira letra em maiúsculo.`),Zg()()(),Jc(5848,`tr`,16)(5849,`td`,17)(5850,`div`,25)(5851,`span`,26),Tk(5852,` mask`),_u(5853,`br`),Zg()()(),Jc(5854,`td`,21)(5855,`code`,27),Tk(5856,`string`),Zg()(),Jc(5857,`td`,24)(5858,`em`)(5859,`strong`),Tk(5860,`(opcional)`),Zg()(),Jc(5861,`p`),Tk(5862,`Define uma máscara para formatação do valor exibido na coluna.`),Zg(),Jc(5863,`p`),Tk(5864,`A máscara é aplicada somente para `),Jc(5865,`strong`),Tk(5866,`exibição`),Zg(),Tk(5867,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),Zg(),Jc(5868,`p`),Tk(5869,`Caracteres válidos para a máscara:`),Zg(),Jc(5870,`ul`)(5871,`li`)(5872,`code`),Tk(5873,`9`),Zg(),Tk(5874,` : aceita um dígito numérico (0-9).`),Zg(),Jc(5875,`li`)(5876,`code`),Tk(5877,`@`),Zg(),Tk(5878,` : aceita um caractere alfabético (a-z, A-Z).`),Zg(),Jc(5879,`li`)(5880,`code`),Tk(5881,`w`),Zg(),Tk(5882,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),Zg(),Jc(5883,`li`),Tk(5884,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Jc(5885,`code`),Tk(5886,`.`),Zg(),Tk(5887,`, `),Jc(5888,`code`),Tk(5889,`-`),Zg(),Tk(5890,`, `),Jc(5891,`code`),Tk(5892,`/`),Zg(),Tk(5893,`, `),Jc(5894,`code`),Tk(5895,`(`),Zg(),Tk(5896,`, `),Jc(5897,`code`),Tk(5898,`)`),Zg(),Tk(5899,`, `),Jc(5900,`code`),Tk(5901,`+`),Zg(),Tk(5902,`, `),_u(5903,`code`),Tk(5904,`).`),Zg()(),Jc(5905,`p`),Tk(5906,`Exemplos de uso:`),Zg(),Jc(5907,`pre`)(5908,`code`),Tk(5909,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),Zg()(),Jc(5910,`blockquote`)(5911,`p`),Tk(5912,`Esta propriedade é utilizada apenas para colunas do tipo `),Jc(5913,`code`),Tk(5914,`string`),Zg(),Tk(5915,` (padr\xE3o).
Caso a coluna possua um `),Jc(5916,`code`),Tk(5917,`type`),Zg(),Tk(5918,` diferente de `),Jc(5919,`code`),Tk(5920,`string`),Zg(),Tk(5921,`, a máscara será ignorada.`),Zg()()()(),Jc(5922,`tr`,16)(5923,`td`,17)(5924,`div`,25)(5925,`span`,26),Tk(5926,` property`),_u(5927,`br`),Zg()()(),Jc(5928,`td`,21)(5929,`code`,27),Tk(5930,`string`),Zg()(),Jc(5931,`td`,24)(5932,`em`)(5933,`strong`),Tk(5934,`(opcional)`),Zg()(),Jc(5935,`p`),Tk(5936,`Nome identificador da coluna.`),Zg()()(),Jc(5937,`tr`,16)(5938,`td`,17)(5939,`div`,25)(5940,`span`,26),Tk(5941,` type`),_u(5942,`br`),Zg()()(),Jc(5943,`td`,21)(5944,`code`,27),Tk(5945,`string`),Zg()(),Jc(5946,`td`,24)(5947,`em`)(5948,`strong`),Tk(5949,`(opcional)`),Zg()(),Jc(5950,`p`),Tk(5951,`Tipo da coluna:`),Zg(),Jc(5952,`ul`)(5953,`li`),Tk(5954,`string (padrão): textos`),Zg(),Jc(5955,`li`),Tk(5956,`number: valores numéricos`),Zg(),Jc(5957,`li`),Tk(5958,`date: data`),Zg(),Jc(5959,`li`),Tk(5960,`currency: valores monetários`),Zg(),Jc(5961,`li`),Tk(5962,`dateTime: data e hora`),Zg()()()(),Jc(5963,`tr`,16)(5964,`td`,17)(5965,`div`,25)(5966,`span`,26),Tk(5967,` width`),_u(5968,`br`),Zg()()(),Jc(5969,`td`,21)(5970,`code`,27),Tk(5971,`string`),Zg()(),Jc(5972,`td`,24)(5973,`em`)(5974,`strong`),Tk(5975,`(opcional)`),Zg()(),Jc(5976,`p`),Tk(5977,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),Zg()()()(),Jc(5978,`h4`,43)(5979,`code`,5),Tk(5980,`PoLookupFilter`),Zg()(),Jc(5981,`div`,2)(5982,`p`),Tk(5983,`Define o tipo de busca utilizado no po-lookup.`),Zg()(),Jc(5984,`h4`,12),Tk(5985,`Métodos`),Zg(),Jc(5986,`table`,41)(5987,`tr`,16)(5988,`th`,42)(5989,`div`,25)(5990,`h4`)(5991,`span`,26),Tk(5992,` getFilteredItems `),Zg()()()()(),Jc(5993,`tr`,24)(5994,`td`,24)(5995,`p`),Tk(5996,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Jc(5997,`em`),Tk(5998,`Observable`),Zg(),Tk(5999,` com a resposta da API no formato da interface `),Jc(6e3,`code`),Tk(6001,`PoLookupResponseApi`),Zg(),Tk(6002,`.`),Zg()()()(),Jc(6003,`h5`)(6004,`b`),Tk(6005,`Parâmetros`),Zg()(),Jc(6006,`table`,13)(6007,`tr`,14)(6008,`th`,15),Tk(6009,`Nome`),Zg(),Jc(6010,`th`,15),Tk(6011,`Tipo`),Zg(),Jc(6012,`th`,15),Tk(6013,`Descrição`),Zg()(),Jc(6014,`tr`,16)(6015,`td`,17),Tk(6016,` params`),Zg(),Jc(6017,`td`,21)(6018,`code`,83),Tk(6019,` PoLookupFilteredItemsParams `),Zg()(),Jc(6020,`td`,24)(6021,`p`),Tk(6022,`Objeto enviado por parâmetro que implementa a interface `),Jc(6023,`code`),Tk(6024,`PoLookupFilteredItemsParams`),Zg(),Tk(6025,`.`),Zg()()()(),_u(6026,`br`),Jc(6027,`table`,41)(6028,`tr`,16)(6029,`th`,42)(6030,`div`,25)(6031,`h4`)(6032,`span`,26),Tk(6033,` getObjectByValue `),Zg()()()()(),Jc(6034,`tr`,24)(6035,`td`,24)(6036,`p`),Tk(6037,`Método responsável por enviar um valor que será buscado no serviço.`),Zg(),Jc(6038,`p`),Tk(6039,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),Zg()()()(),Jc(6040,`h5`)(6041,`b`),Tk(6042,`Parâmetros`),Zg()(),Jc(6043,`table`,13)(6044,`tr`,14)(6045,`th`,15),Tk(6046,`Nome`),Zg(),Jc(6047,`th`,15),Tk(6048,`Tipo`),Zg(),Jc(6049,`th`,15),Tk(6050,`Descrição`),Zg()(),Jc(6051,`tr`,16)(6052,`td`,17),Tk(6053,` value`),Zg(),Jc(6054,`td`,21)(6055,`code`,27),Tk(6056,` string `),Zg(),Jc(6057,`code`,74),Tk(6058,` Array<any> `),Zg()(),Jc(6059,`td`,24)(6060,`p`),Tk(6061,`Valor único a ser buscado na fonte de dados.`),Zg()()(),Jc(6062,`tr`,16)(6063,`td`,17),Tk(6064,` filterParams`),Zg(),Jc(6065,`td`,21)(6066,`code`,83),Tk(6067,` any `),Zg()(),Jc(6068,`td`,24)(6069,`p`),Tk(6070,`Valor informado através da propriedade `),Jc(6071,`code`),Tk(6072,`p-filter-params`),Zg(),Tk(6073,`.`),Zg()()()(),_u(6074,`br`),Jc(6075,`h4`,43)(6076,`code`,5),Tk(6077,`PoLookupFilteredItemsParams`),Zg()(),Jc(6078,`div`,2)(6079,`p`),Tk(6080,`Interface do objeto enviado como parâmetro na função `),Jc(6081,`code`),Tk(6082,`getFilteredItems`),Zg(),Tk(6083,`.`),Zg()(),Jc(6084,`h4`,12),Tk(6085,`Propriedades`),Zg(),Jc(6086,`table`,13)(6087,`tr`,14)(6088,`th`,15),Tk(6089,`Nome`),Zg(),Jc(6090,`th`,15),Tk(6091,`Tipo`),Zg(),Jc(6092,`th`,15),Tk(6093,`Descrição`),Zg()(),Jc(6094,`tr`,16)(6095,`td`,17)(6096,`div`,25)(6097,`span`,26),Tk(6098,` advancedFilters`),_u(6099,`br`),Zg()()(),Jc(6100,`td`,21)(6101,`code`,84),Tk(6102,`{ [key: string]: any;
}`),Zg()(),Jc(6103,`td`,24)(6104,`em`)(6105,`strong`),Tk(6106,`(opcional)`),Zg()(),Jc(6107,`p`),Tk(6108,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),Zg()()(),Jc(6109,`tr`,16)(6110,`td`,17)(6111,`div`,25)(6112,`span`,26),Tk(6113,` filter`),_u(6114,`br`),Zg()()(),Jc(6115,`td`,21)(6116,`code`,27),Tk(6117,`string`),Zg()(),Jc(6118,`td`,24)(6119,`em`)(6120,`strong`),Tk(6121,`(opcional)`),Zg()(),Jc(6122,`p`),Tk(6123,`Conteúdo utilizado para filtrar a lista de itens.`),Zg()()(),Jc(6124,`tr`,16)(6125,`td`,17)(6126,`div`,25)(6127,`span`,26),Tk(6128,` filterParams`),_u(6129,`br`),Zg()()(),Jc(6130,`td`,21)(6131,`code`,33),Tk(6132,`any`),Zg()(),Jc(6133,`td`,24)(6134,`em`)(6135,`strong`),Tk(6136,`(opcional)`),Zg()(),Jc(6137,`p`),Tk(6138,`Valor informado através da propriedade `),Jc(6139,`code`),Tk(6140,`p-filter-params`),Zg(),Tk(6141,`.`),Zg()()(),Jc(6142,`tr`,16)(6143,`td`,17)(6144,`div`,25)(6145,`span`,26),Tk(6146,` order`),_u(6147,`br`),Zg()()(),Jc(6148,`td`,21)(6149,`code`,27),Tk(6150,`string`),Zg()(),Jc(6151,`td`,24)(6152,`em`)(6153,`strong`),Tk(6154,`(opcional)`),Zg()(),Jc(6155,`p`),Tk(6156,`Coluna que está sendo ordenada na tabela.`),Zg(),Jc(6157,`ul`)(6158,`li`),Tk(6159,`Coluna decrescente será informada da seguinte forma: `),Jc(6160,`code`),Tk(6161,`-<colunaOrdenada>`),Zg(),Tk(6162,`, por exemplo `),Jc(6163,`code`),Tk(6164,`-name`),Zg(),Tk(6165,`.`),Zg(),Jc(6166,`li`),Tk(6167,`Coluna ascendente será informada da seguinte forma: `),Jc(6168,`code`),Tk(6169,`<colunaOrdenada>`),Zg(),Tk(6170,`, por exemplo `),Jc(6171,`code`),Tk(6172,`name`),Zg(),Tk(6173,`.`),Zg()()()(),Jc(6174,`tr`,16)(6175,`td`,17)(6176,`div`,25)(6177,`span`,26),Tk(6178,` page`),_u(6179,`br`),Zg()()(),Jc(6180,`td`,21)(6181,`code`,45),Tk(6182,`number`),Zg()(),Jc(6183,`td`,24)(6184,`em`)(6185,`strong`),Tk(6186,`(opcional)`),Zg()(),Jc(6187,`p`),Tk(6188,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),Zg()()(),Jc(6189,`tr`,16)(6190,`td`,17)(6191,`div`,25)(6192,`span`,26),Tk(6193,` pageSize`),_u(6194,`br`),Zg()()(),Jc(6195,`td`,21)(6196,`code`,45),Tk(6197,`number`),Zg()(),Jc(6198,`td`,24)(6199,`em`)(6200,`strong`),Tk(6201,`(opcional)`),Zg()(),Jc(6202,`p`),Tk(6203,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),Zg()()()(),Jc(6204,`h4`,43)(6205,`code`,5),Tk(6206,`PoLookupLiterals`),Zg()(),Jc(6207,`div`,2)(6208,`p`),Tk(6209,`Interface para definição das literais usadas no `),Jc(6210,`code`),Tk(6211,`po-lookup`),Zg(),Tk(6212,`.`),Zg()(),Jc(6213,`h4`,12),Tk(6214,`Propriedades`),Zg(),Jc(6215,`table`,13)(6216,`tr`,14)(6217,`th`,15),Tk(6218,`Nome`),Zg(),Jc(6219,`th`,15),Tk(6220,`Tipo`),Zg(),Jc(6221,`th`,15),Tk(6222,`Descrição`),Zg()(),Jc(6223,`tr`,16)(6224,`td`,17)(6225,`div`,25)(6226,`span`,26),Tk(6227,` clean`),_u(6228,`br`),Zg()()(),Jc(6229,`td`,21)(6230,`code`,27),Tk(6231,`string`),Zg()(),Jc(6232,`td`,24)(6233,`em`)(6234,`strong`),Tk(6235,`(opcional)`),Zg()(),Jc(6236,`p`),Tk(6237,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),Zg()()(),Jc(6238,`tr`,16)(6239,`td`,17)(6240,`div`,25)(6241,`span`,26),Tk(6242,` modalAdvancedSearch`),_u(6243,`br`),Zg()()(),Jc(6244,`td`,21)(6245,`code`,27),Tk(6246,`string`),Zg()(),Jc(6247,`td`,24)(6248,`em`)(6249,`strong`),Tk(6250,`(opcional)`),Zg()(),Jc(6251,`p`),Tk(6252,`Texto do link de busca avançada.`),Zg(),Jc(6253,`p`),Tk(6254,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),Zg()()(),Jc(6255,`tr`,16)(6256,`td`,17)(6257,`div`,25)(6258,`span`,26),Tk(6259,` modalAdvancedSearchPrimaryActionLabel`),_u(6260,`br`),Zg()()(),Jc(6261,`td`,21)(6262,`code`,27),Tk(6263,`string`),Zg()(),Jc(6264,`td`,24)(6265,`em`)(6266,`strong`),Tk(6267,`(opcional)`),Zg()(),Jc(6268,`p`),Tk(6269,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),Zg()()(),Jc(6270,`tr`,16)(6271,`td`,17)(6272,`div`,25)(6273,`span`,26),Tk(6274,` modalAdvancedSearchSecondaryActionLabel`),_u(6275,`br`),Zg()()(),Jc(6276,`td`,21)(6277,`code`,27),Tk(6278,`string`),Zg()(),Jc(6279,`td`,24)(6280,`em`)(6281,`strong`),Tk(6282,`(opcional)`),Zg()(),Jc(6283,`p`),Tk(6284,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),Zg()()(),Jc(6285,`tr`,16)(6286,`td`,17)(6287,`div`,25)(6288,`span`,26),Tk(6289,` modalAdvancedSearchTitle`),_u(6290,`br`),Zg()()(),Jc(6291,`td`,21)(6292,`code`,27),Tk(6293,`string`),Zg()(),Jc(6294,`td`,24)(6295,`em`)(6296,`strong`),Tk(6297,`(opcional)`),Zg()(),Jc(6298,`p`),Tk(6299,`Texto exibido no título da modal de busca avançada.`),Zg()()(),Jc(6300,`tr`,16)(6301,`td`,17)(6302,`div`,25)(6303,`span`,26),Tk(6304,` modalDisclaimerGroupTitle`),_u(6305,`br`),Zg()()(),Jc(6306,`td`,21)(6307,`code`,27),Tk(6308,`string`),Zg()(),Jc(6309,`td`,24)(6310,`em`)(6311,`strong`),Tk(6312,`(opcional)`),Zg()(),Jc(6313,`p`),Tk(6314,`Texto exibido no título do disclaimer.`),Zg()()(),Jc(6315,`tr`,16)(6316,`td`,17)(6317,`div`,25)(6318,`span`,26),Tk(6319,` modalPlaceholder`),_u(6320,`br`),Zg()()(),Jc(6321,`td`,21)(6322,`code`,27),Tk(6323,`string`),Zg()(),Jc(6324,`td`,24)(6325,`em`)(6326,`strong`),Tk(6327,`(opcional)`),Zg()(),Jc(6328,`p`),Tk(6329,`Texto exibido no placeholder do input da modal.`),Zg()()(),Jc(6330,`tr`,16)(6331,`td`,17)(6332,`div`,25)(6333,`span`,26),Tk(6334,` modalPrimaryActionLabel`),_u(6335,`br`),Zg()()(),Jc(6336,`td`,21)(6337,`code`,27),Tk(6338,`string`),Zg()(),Jc(6339,`td`,24)(6340,`em`)(6341,`strong`),Tk(6342,`(opcional)`),Zg()(),Jc(6343,`p`),Tk(6344,`Texto exibido no label do botão de ação primária da modal.`),Zg()()(),Jc(6345,`tr`,16)(6346,`td`,17)(6347,`div`,25)(6348,`span`,26),Tk(6349,` modalSecondaryActionLabel`),_u(6350,`br`),Zg()()(),Jc(6351,`td`,21)(6352,`code`,27),Tk(6353,`string`),Zg()(),Jc(6354,`td`,24)(6355,`em`)(6356,`strong`),Tk(6357,`(opcional)`),Zg()(),Jc(6358,`p`),Tk(6359,`Texto exibido no label do botão de ação secundária da modal.`),Zg()()(),Jc(6360,`tr`,16)(6361,`td`,17)(6362,`div`,25)(6363,`span`,26),Tk(6364,` modalTableLoadMoreData`),_u(6365,`br`),Zg()()(),Jc(6366,`td`,21)(6367,`code`,27),Tk(6368,`string`),Zg()(),Jc(6369,`td`,24)(6370,`em`)(6371,`strong`),Tk(6372,`(opcional)`),Zg()(),Jc(6373,`p`),Tk(6374,`Label do `),Jc(6375,`code`),Tk(6376,`button`),Zg(),Tk(6377,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),Zg()()(),Jc(6378,`tr`,16)(6379,`td`,17)(6380,`div`,25)(6381,`span`,26),Tk(6382,` modalTableLoadingData`),_u(6383,`br`),Zg()()(),Jc(6384,`td`,21)(6385,`code`,27),Tk(6386,`string`),Zg()(),Jc(6387,`td`,24)(6388,`em`)(6389,`strong`),Tk(6390,`(opcional)`),Zg()(),Jc(6391,`p`),Tk(6392,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),Zg()()(),Jc(6393,`tr`,16)(6394,`td`,17)(6395,`div`,25)(6396,`span`,26),Tk(6397,` modalTableNoColumns`),_u(6398,`br`),Zg()()(),Jc(6399,`td`,21)(6400,`code`,27),Tk(6401,`string`),Zg()(),Jc(6402,`td`,24)(6403,`em`)(6404,`strong`),Tk(6405,`(opcional)`),Zg()(),Jc(6406,`p`),Tk(6407,`Texto exibido quando não existem colunas definidas para a tabela.`),Zg()()(),Jc(6408,`tr`,16)(6409,`td`,17)(6410,`div`,25)(6411,`span`,26),Tk(6412,` modalTableNoData`),_u(6413,`br`),Zg()()(),Jc(6414,`td`,21)(6415,`code`,27),Tk(6416,`string`),Zg()(),Jc(6417,`td`,24)(6418,`em`)(6419,`strong`),Tk(6420,`(opcional)`),Zg()(),Jc(6421,`p`),Tk(6422,`Texto exibido quando não existem itens para serem exibidos na tabela.`),Zg()()(),Jc(6423,`tr`,16)(6424,`td`,17)(6425,`div`,25)(6426,`span`,26),Tk(6427,` modalTitle`),_u(6428,`br`),Zg()()(),Jc(6429,`td`,21)(6430,`code`,27),Tk(6431,`string`),Zg()(),Jc(6432,`td`,24)(6433,`em`)(6434,`strong`),Tk(6435,`(opcional)`),Zg()(),Jc(6436,`p`),Tk(6437,`Texto exibido no título da modal.`),Zg()()(),Jc(6438,`tr`,16)(6439,`td`,17)(6440,`div`,25)(6441,`span`,26),Tk(6442,` search`),_u(6443,`br`),Zg()()(),Jc(6444,`td`,21)(6445,`code`,27),Tk(6446,`string`),Zg()(),Jc(6447,`td`,24)(6448,`em`)(6449,`strong`),Tk(6450,`(opcional)`),Zg()(),Jc(6451,`p`),Tk(6452,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),Zg()()()(),Jc(6453,`h4`,43)(6454,`code`,5),Tk(6455,`PoLookupResponseApi`),Zg()(),Jc(6456,`div`,2)(6457,`p`),Tk(6458,`Interface que representa a estrutura de resposta de uma coleção de itens. `),Zg()(),Jc(6459,`h4`,12),Tk(6460,`Propriedades`),Zg(),Jc(6461,`table`,13)(6462,`tr`,14)(6463,`th`,15),Tk(6464,`Nome`),Zg(),Jc(6465,`th`,15),Tk(6466,`Tipo`),Zg(),Jc(6467,`th`,15),Tk(6468,`Descrição`),Zg()(),Jc(6469,`tr`,16)(6470,`td`,17)(6471,`div`,25)(6472,`span`,26),Tk(6473,` hasNext`),_u(6474,`br`),Zg()()(),Jc(6475,`td`,21)(6476,`code`,29),Tk(6477,`boolean`),Zg()(),Jc(6478,`td`,24)(6479,`p`),Tk(6480,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),Zg()()(),Jc(6481,`tr`,16)(6482,`td`,17)(6483,`div`,25)(6484,`span`,26),Tk(6485,` items`),_u(6486,`br`),Zg()()(),Jc(6487,`td`,21)(6488,`code`,85),Tk(6489,`Array<object>`),Zg()(),Jc(6490,`td`,24)(6491,`p`),Tk(6492,`Lista de itens retornados.`),Zg()()()(),Jc(6493,`h3`),Tk(6494,`Enums`),Zg(),Jc(6495,`h4`,4)(6496,`code`,5),Tk(6497,`PoTableColumnSpacing`),Zg()(),Jc(6498,`div`,2)(6499,`p`),Tk(6500,`Tipos de espaçamento interno (padding) das células (`),Jc(6501,`strong`),Tk(6502,`p-spacing`),Zg(),Tk(6503,`) do po-table.`),Zg()(),Jc(6504,`h4`,12),Tk(6505,`Propriedades`),Zg(),Jc(6506,`table`,13)(6507,`tr`,14)(6508,`th`,15),Tk(6509,`Nome`),Zg(),Jc(6510,`th`,15),Tk(6511,`Descrição`),Zg()(),Jc(6512,`tr`,16)(6513,`td`,17)(6514,`div`,25)(6515,`span`,26),Tk(6516,` ExtraSmall`),_u(6517,`br`),Zg()()(),Jc(6518,`td`,24)(6519,`p`),Tk(6520,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),Zg()()(),Jc(6521,`tr`,16)(6522,`td`,17)(6523,`div`,25)(6524,`span`,26),Tk(6525,` Small`),_u(6526,`br`),Zg()()(),Jc(6527,`td`,24)(6528,`p`),Tk(6529,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),Zg()()(),Jc(6530,`tr`,16)(6531,`td`,17)(6532,`div`,25)(6533,`span`,26),Tk(6534,` Medium`),_u(6535,`br`),Zg()()(),Jc(6536,`td`,24)(6537,`p`),Tk(6538,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),Zg()()(),Jc(6539,`tr`,16)(6540,`td`,17)(6541,`div`,25)(6542,`span`,26),Tk(6543,` Large`),_u(6544,`br`),Zg()()(),Jc(6545,`td`,24)(6546,`p`),Tk(6547,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function qt(a,et){if(a&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-lookup-basic-view`)(2,`sample-po-lookup-labs-view`)(3,`sample-po-lookup-hero-view`)(4,`sample-po-lookup-hero-reactive-form-view`)(5,`sample-po-lookup-advanced-filter-view`)(6,`sample-po-lookup-sw-films-view`)(7,`sample-po-lookup-multiple-view`)(8,`sample-po-lookup-mask-view`),Zg()}if(a&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,qt,9,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-lookup-doc`),Zg()()()),l&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,je,Ie,ze,Ne,Re,Ue,Je,Ke,Xe],encapsulation:2,changeDetection:1})}return a})()}];var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Tt),WV]})}return a})();var gi=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ze]})}return a})();export{gi as DocPoLookupModule};