import{r as t,t as r}from"./chunk-zystk1pz.js";import{$i as h,$n as AF,Ai as _O,Ar as Hk,Ci as Y,Cn as oi,Ct as Yoe,Da as pe,Ea as pO,Fa as rg,Fi as ab,Ga as vx,Gr as O$1,H as Lf,Ha as v_,Ia as sb,Ii as b,Ja as we,La as uO,Ln as w4,Mr as I1,Na as r0,Qa as xK,Qr as RK,Ra as ue,Sa as o0,Si as Xx,Sn as ob,T as Gte,Vr as Mm,Xt as ere,Ya as wg,Za as xF,ai as Sn,at as R4,b as Fu,ci as TO,dr as DO,f as Cre,ft as Tn,gr as Dx,ha as mT,hi as VF,ht as U4,i as Ac,ia as ir,ii as SO,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,si as T,ti as Rv,ui as UE,va as mt,w as Goe,wr as Fx,xa as nu,xi as Ww,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var Ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&nu(0,`po-lookup`,0)},dependencies:[ob],encapsulation:2,changeDetection:1})}return a})();var nt=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-lookup-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,nt,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ae],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=h(Ww);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,c=t(m,[`filterParams`,`advancedFilters`]),p=r(r(r({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=T({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Oe=(()=>{class a{sampleFilterService=h(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Tn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[we([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let c=Ax();jc(0,`po-lookup`,1),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.lookup,m)||(o.lookup=m),__(m)}),mt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),wg(),nu(1,`po-divider`),jc(2,`po-container`,2)(3,`div`,3),nu(4,`po-info`,4)(5,`po-info`,5),wg()(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`po-input`,6),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.label,m)||(o.label=m),__(m)}),wg(),jc(10,`po-checkbox-group`,7),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.columnsName,m)||(o.columnsName=m),__(m)}),mt(`p-change`,function(){return o.updateColumns()}),wg(),jc(11,`po-select`,8),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.fieldLabel,m)||(o.fieldLabel=m),__(m)}),wg(),jc(12,`po-select`,9),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.fieldValue,m)||(o.fieldValue=m),__(m)}),wg(),jc(13,`po-input`,10),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.filterService,m)||(o.filterService=m),__(m)}),wg(),jc(14,`po-input`,11),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),__(m)}),wg(),jc(15,`po-input`,12),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.help,m)||(o.help=m),__(m)}),wg(),jc(16,`po-input`,13),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.helperText,m)||(o.helperText=m),__(m)}),wg(),jc(17,`po-input`,14),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.placeholder,m)||(o.placeholder=m),__(m)}),wg(),jc(18,`po-input`,15),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.literals,m)||(o.literals=m),__(m)}),mt(`p-change`,function(){return o.changeLiterals()}),wg(),jc(19,`po-input`,16),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.formatField,m)||(o.formatField=m),__(m)}),mt(`p-change`,function(m){return o.onFieldFormatChange(m)}),wg(),jc(20,`po-checkbox-group`,17),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.properties,m)||(o.properties=m),__(m)}),wg(),jc(21,`po-radio-group`,18),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.spacing,m)||(o.spacing=m),__(m)}),wg(),jc(22,`po-radio-group`,19),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.size,m)||(o.size=m),__(m)}),wg(),jc(23,`po-textarea`,20),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.advancedFilters,m)||(o.advancedFilters=m),__(m)}),mt(`p-change`,function(){return o.changeAdvancedFilters()}),wg(),jc(24,`div`,3)(25,`po-button`,21),mt(`p-click`,function(){return o.restore()}),wg()()()}l&2&&(sb(`ngModel`,o.lookup),UE(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),o0(),rg(4),UE(`p-value`,o.lookup),rg(),UE(`p-value`,o.event),rg(4),sb(`ngModel`,o.label),o0(),rg(),sb(`ngModel`,o.columnsName),UE(`p-options`,o.columnsOptions),o0(),rg(),sb(`ngModel`,o.fieldLabel),UE(`p-options`,o.fieldLabelOptions),o0(),rg(),sb(`ngModel`,o.fieldValue),UE(`p-options`,o.fieldValueOptions),o0(),rg(),sb(`ngModel`,o.filterService),o0(),rg(),sb(`ngModel`,o.fieldErrorMessage),o0(),rg(),sb(`ngModel`,o.help),o0(),rg(),sb(`ngModel`,o.helperText),o0(),rg(),sb(`ngModel`,o.placeholder),o0(),rg(),sb(`ngModel`,o.literals),o0(),rg(),sb(`ngModel`,o.formatField),o0(),rg(),sb(`ngModel`,o.properties),UE(`p-options`,o.propertiesOptions),o0(),rg(),sb(`ngModel`,o.spacing),UE(`p-options`,o.typeSpacing),o0(),rg(),sb(`ngModel`,o.size),UE(`p-options`,o.sizeOptions),o0(),rg(),sb(`ngModel`,o.advancedFilters),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Ac,Lf,w4,U4,ob,Gte,Woe,Goe,Yoe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-lookup
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-labs`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,at,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Oe],encapsulation:2,changeDetection:1})}return a})();var rt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=h(O);notification=h(Fu);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[we([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let c=Ax();jc(0,`div`,1),nu(1,`po-info`,2),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.hero,m)||(o.hero=m),__(m)}),wg(),jc(7,`po-select`,4),r0(),ab(`ngModelChange`,function(m){return v_(c),uO(o.vehicle,m)||(o.vehicle=m),__(m)}),wg()(),jc(8,`div`,1)(9,`po-button`,5),mt(`p-click`,function(){return o.startMission()}),wg()()()}if(l&2){let c=Bx(4);rg(6),sb(`ngModel`,o.hero),UE(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,_O(10,rt)),o0(),rg(),sb(`ngModel`,o.vehicle),UE(`p-options`,o.vehicles),o0(),rg(2),UE(`p-disabled`,c.form.invalid||c.form.pending)}},dependencies:[RK,SK,MK,xF,SF,oi,Lf,ob,Woe,Yoe],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup - Hero`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-hero`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,dt,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ve],encapsulation:2,changeDetection:1})}return a})();var st=()=>[`nickname`,`label`];var ct=()=>({modalTitle:`Heroes available for mission`});var He=(()=>{class a{service=h(O);notification=h(Fu);formBuilder=h(xK);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,Mm.required],vehicle:[null,Mm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[we([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(jc(0,`div`,0),nu(1,`po-info`,1),wg(),nu(2,`po-divider`),jc(3,`form`,2)(4,`div`,0)(5,`po-lookup`,3),r0(),wg(),jc(6,`po-select`,4),r0(),wg()(),jc(7,`div`,0)(8,`po-button`,5),mt(`p-click`,function(){return o.startMission()}),wg()()()),l&2&&(rg(3),UE(`formGroup`,o.formMission),rg(2),UE(`p-columns`,o.columns)(`p-field-format`,_O(7,st))(`p-filter-service`,o.service)(`p-literals`,_O(8,ct)),o0(),rg(),UE(`p-options`,o.vehicles),o0(),rg(2),UE(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[RK,SK,MK,AF,VF,oi,Lf,ob,Woe,Yoe],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup - Hero Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-hero-reactive-form`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Et,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,He],encapsulation:2,changeDetection:1})}return a})();var St=()=>({modalTitle:`Select a hero`});var Be=(()=>{class a{service=h(O);hero;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`},{property:`email`,label:`E-mail`}];advancedFilters=[{property:`name`,label:`Name`,gridColumns:6},{property:`email`,label:`E-mail`,gridColumns:6},{property:`nickname`,label:`Hero`,gridColumns:6,initValue:`Hulk`,forceOptionsComponentType:Cre.radioGroup,options:[{label:`Batman`,value:`Batman`},{label:`Superman`,value:`Superman`},{label:`Hulk`,value:`Hulk`},{label:`Thor`,value:`Thor`}]}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-advanced-filter`]],standalone:!1,features:[we([O])],decls:7,vars:7,consts:[[1,`po-row`],[`p-label`,`Advanced filter with initial value`,`p-value`,`Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result.`,1,`po-lg-12`],[`name`,`hero`,`p-field-label`,`name`,`p-field-value`,`nickname`,`p-help`,`Select a hero`,`p-label`,`Hero`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-advanced-filters`,`p-literals`],[`p-label`,`Selected value`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(jc(0,`div`,0),nu(1,`po-info`,1),wg(),nu(2,`po-divider`),jc(3,`div`,0)(4,`po-lookup`,2),r0(),ab(`ngModelChange`,function(p){return uO(o.hero,p)||(o.hero=p),p}),wg()(),jc(5,`div`,0),nu(6,`po-info`,3),wg()),l&2&&(rg(4),sb(`ngModel`,o.hero),UE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,_O(6,St)),o0(),rg(2),UE(`p-value`,o.hero||`-`))},dependencies:[SK,xF,Lf,ob,Yoe],encapsulation:2})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-advanced-filter-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup - Advanced Filter`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject } from '@angular/core';

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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-advanced-filter`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,gt,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Be],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{http=h(Ww);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(Y(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(Y(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=T({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,et){if(a&1&&(jc(0,`div`,0),nu(1,`po-table`,3),wg()),a&2){let r=Fx();rg(),UE(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var We=(()=>{class a{filterService=h(Ee);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[we([Ee])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-radio-group`,1),r0(),ab(`ngModelChange`,function(p){return uO(o.filterParams,p)||(o.filterParams=p),p}),wg()(),nu(2,`po-divider`),jc(3,`div`,0)(4,`po-lookup`,2),SO(5,`titlecase`),r0(),ab(`ngModelChange`,function(p){return uO(o.entity,p)||(o.entity=p),p}),mt(`p-selected`,function(p){return o.onSelected(p)}),wg()(),vx(6,ht,2,4,`div`,0)),l&2&&(rg(),sb(`ngModel`,o.filterParams),UE(`p-options`,o.entities),o0(),rg(3),UE(`p-help`,pO(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,pO(``,TO(5,12,o.entityLabel),` of Star Wars`)),sb(`ngModel`,o.entity),UE(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),o0(),rg(2),Dx(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[SK,xF,Lf,ob,Gte,R4,Hk],encapsulation:2,changeDetection:1})}return a})();var kt=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup - Star Wars films`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-sw-films`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,kt,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,We],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{http=h(Ww);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(mT(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=T({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Qe=(()=>{class a{service=h(Ge);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-lookup`,1),r0(),ab(`ngModelChange`,function(p){return uO(o.multiLookup,p)||(o.multiLookup=p),p}),mt(`p-change`,function(p){return o.changeOptions(p)}),wg(),jc(2,`po-container`,2),nu(3,`po-table`,3),wg()()),l&2&&(rg(),sb(`ngModel`,o.multiLookup),UE(`p-multiple`,!0),o0(),rg(2),UE(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[SK,xF,Ac,ob,R4],encapsulation:2,changeDetection:1})}return a})();var Pt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup - Multiple`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-multiple`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Pt,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Qe],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(c=>c.name.toLowerCase().includes(l)||c.cpf.includes(l)||c.phone.includes(l)||c.cep.includes(l)||c.plate.toLowerCase().includes(l)):[...this.items];return O$1({items:o,hasNext:!1}).pipe(Rv(200))}getObjectByValue(r){return Array.isArray(r)?O$1(this.items.filter(l=>r.includes(l.value))).pipe(Rv(200)):O$1(this.items.find(l=>String(l.value)===String(r))).pipe(Rv(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=T({token:a,factory:a.ɵfac})}return a})();var Ye=(()=>{class a{service=h(xe);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[we([xe])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-lookup`,1),r0(),ab(`ngModelChange`,function(p){return uO(o.person,p)||(o.person=p),p}),wg()()),l&2&&(rg(),sb(`ngModel`,o.person),UE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),o0())},dependencies:[SK,xF,ob],encapsulation:2})}return a})();var Dt=a=>({"docs-sample-code-tabs":a});var Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Lookup - Mask`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject } from '@angular/core';

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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-mask`),wg(),nu(27,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Dt,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ye],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6548,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoLookupComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),jc(24,`code`),lO(25,`po-lookup`),wg(),lO(26,` permite que o usuário digite um valor e pressione a tecla `),jc(27,`em`),lO(28,`TAB`),wg(),lO(29,` para
buscar um registro.`),wg(),jc(30,`blockquote`)(31,`p`),lO(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),wg()(),jc(33,`blockquote`)(34,`p`),lO(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),jc(36,`a`,6),lO(37,`modelo`),wg(),lO(38,` como `),jc(39,`code`),lO(40,`pending`),wg(),lO(41,`.`),wg()(),jc(42,`p`),lO(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),jc(44,`code`),lO(45,`po-select`),wg(),lO(46,` ou o `),jc(47,`code`),lO(48,`po-combo`),wg(),lO(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(50,`a`,7),lO(51,`Guia de implementação das APIs TOTVS`),wg(),lO(52,`.`),wg(),jc(53,`p`),lO(54,`Importante:`),wg(),jc(55,`ul`)(56,`li`)(57,`p`),lO(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),wg(),jc(59,`pre`)(60,`code`),lO(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),wg()()(),jc(62,`li`)(63,`p`),lO(64,`Ao utilizar a propriedade `),jc(65,`code`),lO(66,`p-advanced-filters`),wg(),lO(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),jc(68,`code`),lO(69,`po-dynamic-form`),wg(),lO(70,`. Em aplicações que não importam o `),jc(71,`code`),lO(72,`PoModule`),wg(),lO(73,`, como projetos
`),jc(74,`em`),lO(75,`standalone`),wg(),lO(76,` ou que utilizam módulos específicos, é necessário importar o `),jc(77,`code`),lO(78,`PoDynamicModule`),wg(),lO(79,`
no componente ou m\xF3dulo onde o `),jc(80,`code`),lO(81,`po-lookup`),wg(),lO(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),jc(83,`code`),lO(84,`NG0201: No provider found for _TitleCasePipe`),wg(),lO(85,` ao abrir a busca avançada.`),wg(),jc(86,`pre`)(87,`code`),lO(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),wg()()()(),jc(89,`h4`),lO(90,`Tokens customizáveis`),wg(),jc(91,`p`),lO(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(93,`blockquote`)(94,`p`),lO(95,`Para maiores informações, acesse o guia `),jc(96,`a`,8),lO(97,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(98,`.`),wg()(),jc(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),lO(103,`Propriedade`),wg(),jc(104,`th`),lO(105,`Descrição`),wg(),jc(106,`th`),lO(107,`Valor Padrão`),wg()()(),jc(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),lO(112,`Default Values`),wg()(),nu(113,`td`)(114,`td`),wg(),jc(115,`tr`)(116,`td`)(117,`code`),lO(118,`--font-family`),wg()(),jc(119,`td`),lO(120,`Família tipográfica usada`),wg(),jc(121,`td`)(122,`code`),lO(123,`var(--font-family-theme)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),lO(127,`--font-size`),wg()(),jc(128,`td`),lO(129,`Tamanho da fonte`),wg(),jc(130,`td`)(131,`code`),lO(132,`var(--font-size-default)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),lO(136,`--text-color-placeholder`),wg()(),jc(137,`td`),lO(138,`Cor do texto no placeholder`),wg(),jc(139,`td`)(140,`code`),lO(141,`var(--color-neutral-light-30)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),lO(145,`--color`),wg()(),jc(146,`td`),lO(147,`Cor principal do lookup`),wg(),jc(148,`td`)(149,`code`),lO(150,`var(--color-neutral-dark-70)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),lO(154,`--border-radius`),wg()(),jc(155,`td`),lO(156,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(157,`td`)(158,`code`),lO(159,`var(--border-radius-md)`),wg()()(),jc(160,`tr`)(161,`td`)(162,`code`),lO(163,`--background`),wg()(),jc(164,`td`),lO(165,`Cor de background`),wg(),jc(166,`td`)(167,`code`),lO(168,`var(--color-neutral-light-05)`),wg()()(),jc(169,`tr`)(170,`td`)(171,`code`),lO(172,`--text-color`),wg()(),jc(173,`td`),lO(174,`Cor do texto`),wg(),jc(175,`td`)(176,`code`),lO(177,`var(--color-neutral-dark-90)`),wg()()(),jc(178,`tr`)(179,`td`)(180,`code`),lO(181,`--color-clear`),wg()(),jc(182,`td`),lO(183,`Cor principal do icone clear`),wg(),jc(184,`td`)(185,`code`),lO(186,`var(--color-action-default)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`strong`),lO(190,`Icon`),wg()(),nu(191,`td`)(192,`td`),wg(),jc(193,`tr`)(194,`td`)(195,`code`),lO(196,`--color-icon`),wg()(),jc(197,`td`),lO(198,`Cor principal do icone pesquisar`),wg(),jc(199,`td`)(200,`code`),lO(201,`var(--color-action-default)`),wg()()(),jc(202,`tr`)(203,`td`)(204,`strong`),lO(205,`Hover`),wg()(),nu(206,`td`)(207,`td`),wg(),jc(208,`tr`)(209,`td`)(210,`code`),lO(211,`--color-hover`),wg()(),jc(212,`td`),lO(213,`Cor principal no estado hover`),wg(),jc(214,`td`)(215,`code`),lO(216,`var(--color-brand-01-dark)`),wg()()(),jc(217,`tr`)(218,`td`)(219,`code`),lO(220,`--background-hover`),wg()(),jc(221,`td`),lO(222,`Cor de background no estado hover`),wg(),jc(223,`td`)(224,`code`),lO(225,`var(--color-brand-01-lightest)`),wg()()(),jc(226,`tr`)(227,`td`)(228,`strong`),lO(229,`Focused`),wg()(),nu(230,`td`)(231,`td`),wg(),jc(232,`tr`)(233,`td`)(234,`code`),lO(235,`--color-focused`),wg()(),jc(236,`td`),lO(237,`Cor principal no estado de focus`),wg(),jc(238,`td`)(239,`code`),lO(240,`var(--color-action-default)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`code`),lO(244,`--outline-color-focused`),wg()(),jc(245,`td`),lO(246,`Cor do outline do estado de focus`),wg(),jc(247,`td`)(248,`code`),lO(249,`var(--color-action-focus)`),wg()()(),jc(250,`tr`)(251,`td`)(252,`strong`),lO(253,`Disabled`),wg()(),nu(254,`td`)(255,`td`),wg(),jc(256,`tr`)(257,`td`)(258,`code`),lO(259,`--color-disabled`),wg()(),jc(260,`td`),lO(261,`Cor principal no estado disabled`),wg(),jc(262,`td`)(263,`code`),lO(264,`var(--color-action-disabled)`),wg()()(),jc(265,`tr`)(266,`td`)(267,`code`),lO(268,`--background-disabled`),wg()(),jc(269,`td`),lO(270,`Cor de background no estado disabled`),wg(),jc(271,`td`)(272,`code`),lO(273,`var(--color-neutral-light-20)`),wg()()(),jc(274,`tr`)(275,`td`)(276,`code`),lO(277,`--text-color-disabled`),wg()(),jc(278,`td`),lO(279,`Cor do texto quando campo está desabilitado`),wg(),jc(280,`td`)(281,`code`),lO(282,`var(--color-action-disabled)`),wg()()(),jc(283,`tr`)(284,`td`)(285,`strong`),lO(286,`Error`),wg()(),nu(287,`td`)(288,`td`),wg(),jc(289,`tr`)(290,`td`)(291,`code`),lO(292,`--color-error`),wg()(),jc(293,`td`),lO(294,`Cor de background no estado de requerido`),wg(),jc(295,`td`)(296,`code`),lO(297,`var(--color-feedback-negative-base)`),wg()()()()()(),jc(298,`div`,9)(299,`h4`,10),lO(300,`Seletor`),wg(),jc(301,`pre`,11),lO(302,`<po-lookup
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
`),wg()(),jc(303,`h4`,12),lO(304,`Propriedades`),wg(),jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),lO(308,`Nome`),wg(),jc(309,`th`,15),lO(310,`Tipo`),wg(),jc(311,`th`,15),lO(312,`Padrão`),wg(),jc(313,`th`,15),lO(314,`Descrição`),wg()(),jc(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),lO(319,` (p-additional-help)`),nu(320,`br`),wg()(),jc(321,`div`,20),lO(322,`Deprecated`),wg()(),jc(323,`td`,21)(324,`code`,22),lO(325,`EventEmitter`),wg()(),jc(326,`td`,23),lO(327,`-`),wg(),jc(328,`td`,24)(329,`em`)(330,`strong`),lO(331,`(opcional)`),wg()(),jc(332,`p`),lO(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(334,`blockquote`)(335,`p`),lO(336,`Essa propriedade está `),jc(337,`strong`),lO(338,`depreciada`),wg(),lO(339,` e será removida na versão `),jc(340,`code`),lO(341,`23.x.x`),wg(),lO(342,`. Recomendamos utilizar a propriedade `),jc(343,`code`),lO(344,`p-helper`),wg(),lO(345,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(346,`tr`,16)(347,`td`,17)(348,`div`,25)(349,`span`,26),lO(350,` p-additional-help-tooltip`),nu(351,`br`),wg()(),jc(352,`div`,20),lO(353,`Deprecated`),wg()(),jc(354,`td`,21)(355,`code`,27),lO(356,`string`),wg()(),jc(357,`td`,23),lO(358,`-`),wg(),jc(359,`td`,24)(360,`em`)(361,`strong`),lO(362,`(opcional)`),wg()(),jc(363,`p`),lO(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(365,`code`),lO(366,`po-helper`),wg(),lO(367,`.
`),jc(368,`strong`),lO(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(370,`blockquote`)(371,`p`),lO(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(373,`blockquote`)(374,`p`),lO(375,`Essa propriedade está `),jc(376,`strong`),lO(377,`depreciada`),wg(),lO(378,` e será removida na versão `),jc(379,`code`),lO(380,`23.x.x`),wg(),lO(381,`. Recomendamos utilizar a propriedade `),jc(382,`code`),lO(383,`p-helper`),wg(),lO(384,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(385,`tr`,16)(386,`td`,17)(387,`div`,25)(388,`span`,26),lO(389,` p-advanced-filters`),nu(390,`br`),wg()()(),jc(391,`td`,21)(392,`code`,28),lO(393,`Array<PoLookupAdvancedFilter>`),wg()(),jc(394,`td`,23),lO(395,`-`),wg(),jc(396,`td`,24)(397,`em`)(398,`strong`),lO(399,`(opcional)`),wg()(),jc(400,`p`),lO(401,`Lista de objetos dos campos que serão criados na busca avançada.`),wg(),jc(402,`blockquote`)(403,`p`),lO(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),wg()(),jc(405,`blockquote`)(406,`p`),lO(407,`A busca avançada é construída a partir do `),jc(408,`code`),lO(409,`po-dynamic-form`),wg(),lO(410,`. Em aplicações que não importam o `),jc(411,`code`),lO(412,`PoModule`),wg(),lO(413,`,
como projetos `),jc(414,`em`),lO(415,`standalone`),wg(),lO(416,` ou que utilizam módulos específicos, é necessário importar o `),jc(417,`code`),lO(418,`PoDynamicModule`),wg(),lO(419,`
no componente ou m\xF3dulo onde o `),jc(420,`code`),lO(421,`po-lookup`),wg(),lO(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),jc(423,`code`),lO(424,`NG0201: No provider found for _TitleCasePipe`),wg(),lO(425,` ao abrir a busca avançada.`),wg()(),jc(426,`p`),lO(427,`Exemplo de URL com busca avançada:`),wg(),jc(428,`pre`)(429,`code`),lO(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),wg()(),jc(431,`p`),lO(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),wg(),jc(433,`pre`)(434,`code`),lO(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),wg()(),jc(436,`p`),lO(437,`Também é possível definir um valor inicial para os campos da busca avançada através da propriedade `),jc(438,`code`),lO(439,`initValue`),wg(),lO(440,`,
que ser\xE1 atribu\xEDdo ao campo na primeira abertura da janela de busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro,
os campos s\xE3o preenchidos com os valores filtrados:`),wg(),jc(441,`pre`)(442,`code`),lO(443,`advancedFilters: Array<PoLookupAdvancedFilter> = [
  { property: 'nickname', label: 'Apelido' },
  { property: 'active', label: 'Ativo', initValue: false, options: [
    { label: 'Sim', value: true },
    { label: 'N\xE3o', value: false }
  ]}
];
`),wg()()()(),jc(444,`tr`,16)(445,`td`,17)(446,`div`,25)(447,`span`,26),lO(448,` p-append-in-body`),nu(449,`br`),wg()()(),jc(450,`td`,21)(451,`code`,29),lO(452,`boolean`),wg()(),jc(453,`td`,23)(454,`p`)(455,`code`),lO(456,`false`),wg()()(),jc(457,`td`,24)(458,`em`)(459,`strong`),lO(460,`(opcional)`),wg()(),jc(461,`p`),lO(462,`Define que o popover (`),jc(463,`code`),lO(464,`p-helper`),wg(),lO(465,` e/ou `),jc(466,`code`),lO(467,`p-error-limit`),wg(),lO(468,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(469,`blockquote`)(470,`p`),lO(471,`Quando utilizado com `),jc(472,`code`),lO(473,`p-helper`),wg(),lO(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(475,`tr`,16)(476,`td`,17)(477,`div`,25)(478,`span`,26),lO(479,` p-auto-focus`),nu(480,`br`),wg()()(),jc(481,`td`,21)(482,`code`,29),lO(483,`boolean`),wg()(),jc(484,`td`,23)(485,`p`)(486,`code`),lO(487,`false`),wg()()(),jc(488,`td`,24)(489,`em`)(490,`strong`),lO(491,`(opcional)`),wg()(),jc(492,`p`),lO(493,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(494,`blockquote`)(495,`p`),lO(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(497,`tr`,16)(498,`td`,17)(499,`div`,25)(500,`span`,26),lO(501,` p-auto-height`),nu(502,`br`),wg()()(),jc(503,`td`,21)(504,`code`,29),lO(505,`boolean`),wg()(),jc(506,`td`,23)(507,`p`)(508,`code`),lO(509,`false`),wg()()(),jc(510,`td`,24)(511,`em`)(512,`strong`),lO(513,`(opcional)`),wg()(),jc(514,`p`),lO(515,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),wg()()(),jc(516,`tr`,16)(517,`td`,17)(518,`div`,18)(519,`span`,19),lO(520,` (p-change)`),nu(521,`br`),wg()()(),jc(522,`td`,21)(523,`code`,22),lO(524,`EventEmitter`),wg()(),jc(525,`td`,23),lO(526,`-`),wg(),jc(527,`td`,24)(528,`em`)(529,`strong`),lO(530,`(opcional)`),wg()(),jc(531,`p`),lO(532,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),wg()()(),jc(533,`tr`,16)(534,`td`,17)(535,`div`,18)(536,`span`,19),lO(537,` (p-change-model)`),nu(538,`br`),wg()()(),jc(539,`td`,21)(540,`code`,22),lO(541,`EventEmitter`),wg()(),jc(542,`td`,23),lO(543,`-`),wg(),jc(544,`td`,24)(545,`em`)(546,`strong`),lO(547,`(opcional)`),wg()(),jc(548,`p`),lO(549,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(550,`code`),lO(551,`setValue`),wg(),lO(552,`, `),jc(553,`code`),lO(554,`patchValue`),wg(),lO(555,`, carregamento assíncrono).`),wg(),jc(556,`p`),lO(557,`Diferentemente do `),jc(558,`code`),lO(559,`p-change`),wg(),lO(560,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(561,`code`),lO(562,`p-change-model`),wg(),lO(563,` cobre todos os cenários de alteração de valor.`),wg(),jc(564,`p`),lO(565,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(566,`tr`,16)(567,`td`,17)(568,`div`,18)(569,`span`,19),lO(570,` (p-change-visible-columns)`),nu(571,`br`),wg()()(),jc(572,`td`,21)(573,`code`,22),lO(574,`EventEmitter`),wg()(),jc(575,`td`,23),lO(576,`-`),wg(),jc(577,`td`,24)(578,`em`)(579,`strong`),lO(580,`(opcional)`),wg()(),jc(581,`p`),lO(582,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(583,`p`),lO(584,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg()()(),jc(585,`tr`,16)(586,`td`,17)(587,`div`,25)(588,`span`,26),lO(589,` p-clean`),nu(590,`br`),wg()()(),jc(591,`td`,21)(592,`code`,29),lO(593,`boolean`),wg()(),jc(594,`td`,23),lO(595,`-`),wg(),jc(596,`td`,24)(597,`p`),lO(598,`Exibe um ícone que permite limpar o campo.`),wg()()(),jc(599,`tr`,16)(600,`td`,17)(601,`div`,18)(602,`span`,19),lO(603,` (p-restore-column-manager)`),nu(604,`br`),wg()()(),jc(605,`td`,21)(606,`code`,22),lO(607,`EventEmitter`),wg()(),jc(608,`td`,23),lO(609,`-`),wg(),jc(610,`td`,24)(611,`em`)(612,`strong`),lO(613,`(opcional)`),wg()(),jc(614,`p`),lO(615,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(616,`p`),lO(617,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg()()(),jc(618,`tr`,16)(619,`td`,17)(620,`div`,25)(621,`span`,26),lO(622,` p-columns`),nu(623,`br`),wg()()(),jc(624,`td`,21)(625,`code`,30),lO(626,`Array<PoLookupColumn>`),wg()(),jc(627,`td`,23),lO(628,`-`),wg(),jc(629,`td`,24)(630,`em`)(631,`strong`),lO(632,`(opcional)`),wg()(),jc(633,`p`),lO(634,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),wg()()(),jc(635,`tr`,16)(636,`td`,17)(637,`div`,25)(638,`span`,26),lO(639,` p-compact-label`),nu(640,`br`),wg()()(),jc(641,`td`,21)(642,`code`,29),lO(643,`boolean`),wg()(),jc(644,`td`,23)(645,`p`)(646,`code`),lO(647,`false`),wg()()(),jc(648,`td`,24)(649,`em`)(650,`strong`),lO(651,`(opcional)`),wg()(),jc(652,`p`),lO(653,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(654,`p`),lO(655,`Quando habilitado (`),jc(656,`code`),lO(657,`true`),wg(),lO(658,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(659,`ul`)(660,`li`)(661,`code`),lO(662,`po-label`),wg()(),jc(663,`li`)(664,`code`),lO(665,`p-requirement (showRequired)`),wg()(),jc(666,`li`)(667,`code`),lO(668,`po-helper`),wg()()(),jc(669,`p`),lO(670,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(671,`p`),lO(672,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(673,`ul`)(674,`li`)(675,`code`),lO(676,`--field-container-title-justify`),wg()(),jc(677,`li`)(678,`code`),lO(679,`--field-container-title-flex`),wg()()(),jc(680,`p`),lO(681,`Exemplo:`),wg(),jc(682,`pre`)(683,`code`),lO(684,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(685,`p`),lO(686,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(687,`tr`,16)(688,`td`,17)(689,`div`,25)(690,`span`,26),lO(691,` p-disabled`),nu(692,`br`),wg()()(),jc(693,`td`,21)(694,`code`,29),lO(695,`boolean`),wg()(),jc(696,`td`,23)(697,`p`),lO(698,`false`),wg()(),jc(699,`td`,24)(700,`em`)(701,`strong`),lO(702,`(opcional)`),wg()(),jc(703,`p`),lO(704,`Indica que o campo será desabilitado.`),wg()()(),jc(705,`tr`,16)(706,`td`,17)(707,`div`,25)(708,`span`,26),lO(709,` p-error-limit`),nu(710,`br`),wg()()(),jc(711,`td`,21)(712,`code`,29),lO(713,`boolean`),wg()(),jc(714,`td`,23)(715,`p`)(716,`code`),lO(717,`false`),wg()()(),jc(718,`td`,24)(719,`em`)(720,`strong`),lO(721,`(opcional)`),wg()(),jc(722,`p`),lO(723,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(724,`blockquote`)(725,`p`),lO(726,`Caso essa propriedade seja definida como `),jc(727,`code`),lO(728,`true`),wg(),lO(729,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(730,`tr`,16)(731,`td`,17)(732,`div`,25)(733,`span`,26),lO(734,` p-field-error-message`),nu(735,`br`),wg()()(),jc(736,`td`,21)(737,`code`,27),lO(738,`string`),wg()(),jc(739,`td`,23),lO(740,`-`),wg(),jc(741,`td`,24)(742,`em`)(743,`strong`),lO(744,`(opcional)`),wg()(),jc(745,`p`),lO(746,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(747,`blockquote`)(748,`p`),lO(749,`Necessário que a propriedade `),jc(750,`code`),lO(751,`p-required`),wg(),lO(752,` esteja habilitada.`),wg()()()(),jc(753,`tr`,16)(754,`td`,17)(755,`div`,25)(756,`span`,26),lO(757,` p-field-format`),nu(758,`br`),wg()()(),jc(759,`td`,21)(760,`code`,31),lO(761,`((value) => string) `),wg(),jc(762,`code`,32),lO(763,` Array<string>`),wg()(),jc(764,`td`,23),lO(765,`-`),wg(),jc(766,`td`,24)(767,`em`)(768,`strong`),lO(769,`(opcional)`),wg()(),jc(770,`p`),lO(771,`Formato de exibição do campo.`),wg(),jc(772,`p`),lO(773,`Recebe uma função que deve retornar uma `),jc(774,`em`),lO(775,`string`),wg(),lO(776,` com o/os valores do objeto formatados para exibição, por exemplo:`),wg(),jc(777,`pre`)(778,`code`),lO(779,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),wg()(),jc(780,`blockquote`)(781,`p`),lO(782,`Esta propriedade sobrepõe o valor da propriedade `),jc(783,`code`),lO(784,`p-field-label`),wg(),lO(785,` na descrição do campo.`),wg()(),jc(786,`p`),lO(787,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),wg(),jc(788,`pre`)(789,`code`),lO(790,`<po-lookup
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
`),wg()(),jc(791,`blockquote`)(792,`p`),lO(793,`Será utilizado `),jc(794,`code`),lO(795,`-`),wg(),lO(796,` como separador.`),wg()()()(),jc(797,`tr`,16)(798,`td`,17)(799,`div`,25)(800,`span`,26),lO(801,` p-field-label`),nu(802,`br`),wg()()(),jc(803,`td`,21)(804,`code`,27),lO(805,`string`),wg()(),jc(806,`td`,23),lO(807,`-`),wg(),jc(808,`td`,24)(809,`p`),lO(810,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),wg()()(),jc(811,`tr`,16)(812,`td`,17)(813,`div`,25)(814,`span`,26),lO(815,` p-field-value`),nu(816,`br`),wg()()(),jc(817,`td`,21)(818,`code`,27),lO(819,`string`),wg()(),jc(820,`td`,23),lO(821,`-`),wg(),jc(822,`td`,24)(823,`p`),lO(824,`Indica a coluna que será utilizada como valor do campo.`),wg(),jc(825,`blockquote`)(826,`p`),lO(827,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),wg()()()(),jc(828,`tr`,16)(829,`td`,17)(830,`div`,25)(831,`span`,26),lO(832,` p-filter-params`),nu(833,`br`),wg()()(),jc(834,`td`,21)(835,`code`,33),lO(836,`any`),wg()(),jc(837,`td`,23),lO(838,`-`),wg(),jc(839,`td`,24)(840,`em`)(841,`strong`),lO(842,`(opcional)`),wg()(),jc(843,`p`),lO(844,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),jc(845,`code`),lO(846,`PoLookupFilter`),wg(),lO(847,`.`),wg()()(),jc(848,`tr`,16)(849,`td`,17)(850,`div`,25)(851,`span`,26),lO(852,` p-filter-service`),nu(853,`br`),wg()()(),jc(854,`td`,21)(855,`code`,27),lO(856,`string `),wg(),jc(857,`code`,34),lO(858,` PoLookupFilter`),wg()(),jc(859,`td`,23),lO(860,`-`),wg(),jc(861,`td`,24)(862,`p`),lO(863,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),jc(864,`code`),lO(865,`PoLookupFilter`),wg(),lO(866,` ou uma URL.`),wg(),jc(867,`p`),lO(868,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),wg(),jc(869,`pre`)(870,`code`),lO(871,`url + ?page=1&pageSize=20&filter=Peter
`),wg()(),jc(872,`p`),lO(873,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),jc(874,`code`),lO(875,`order`),wg(),lO(876,`, por exemplo:`),wg(),jc(877,`ul`)(878,`li`)(879,`p`),lO(880,`Coluna decrescente:`),wg(),jc(881,`pre`)(882,`code`),lO(883,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),wg()()(),jc(884,`li`)(885,`p`),lO(886,`Coluna ascendente:`),wg(),jc(887,`pre`)(888,`code`),lO(889,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),wg()()()(),jc(890,`p`),lO(891,`Se for definido a propriedade `),jc(892,`code`),lO(893,`p-filter-params`),wg(),lO(894,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),jc(895,`code`),lO(896,`{ age: 23 }`),wg(),lO(897,` a URL ficaria:`),wg(),jc(898,`pre`)(899,`code`),lO(900,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),wg()(),jc(901,`p`),lO(902,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),wg(),jc(903,`pre`)(904,`code`),lO(905,`model = 1234;

GET url/1234
`),wg()(),jc(906,`p`),lO(907,`Caso estiver com múltipla seleção habilitada:`),wg(),jc(908,`pre`)(909,`code`),lO(910,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),wg()(),jc(911,`blockquote`)(912,`p`),lO(913,`Esta URL deve retornar e receber os dados no padrão de `),jc(914,`a`,7),lO(915,`API do PO UI`),wg(),lO(916,` e utiliza os valores
definidos nas propriedades `),jc(917,`code`),lO(918,`p-field-label`),wg(),lO(919,` e `),jc(920,`code`),lO(921,`p-field-value`),wg(),lO(922,` para a construção do `),jc(923,`code`),lO(924,`po-lookup`),wg(),lO(925,`.`),wg()(),jc(926,`p`),lO(927,`Caso o usuário digite um valor e pressione a tecla `),jc(928,`em`),lO(929,`TAB`),wg(),lO(930,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),jc(931,`a`,35),lO(932,`encodeURIComponent`),wg(),lO(933,`
e concatenado na URL da seguinte forma:`),wg(),jc(934,`pre`)(935,`code`),lO(936,`url/valor%20que%20se%20deseja%20filtrar
`),wg()(),jc(937,`blockquote`)(938,`p`),lO(939,`Quando informado um serviço que implemente a interface `),jc(940,`code`),lO(941,`PoLookupFilter`),wg(),lO(942,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),wg()()()(),jc(943,`tr`,16)(944,`td`,17)(945,`div`,25)(946,`span`,26),lO(947,` p-help`),nu(948,`br`),wg()()(),jc(949,`td`,21)(950,`code`,27),lO(951,`string`),wg()(),jc(952,`td`,23),lO(953,`-`),wg(),jc(954,`td`,24)(955,`em`)(956,`strong`),lO(957,`(opcional)`),wg()(),jc(958,`p`),lO(959,`Texto de apoio do campo.`),wg()()(),jc(960,`tr`,16)(961,`td`,17)(962,`div`,25)(963,`span`,26),lO(964,` p-hide-columns-manager`),nu(965,`br`),wg()()(),jc(966,`td`,21)(967,`code`,29),lO(968,`boolean`),wg()(),jc(969,`td`,23)(970,`p`)(971,`code`),lO(972,`false`),wg()()(),jc(973,`td`,24)(974,`em`)(975,`strong`),lO(976,`(opcional)`),wg()(),jc(977,`p`),lO(978,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),wg()()(),jc(979,`tr`,16)(980,`td`,17)(981,`div`,25)(982,`span`,26),lO(983,` p-infinite-scroll`),nu(984,`br`),wg()()(),jc(985,`td`,21)(986,`code`,29),lO(987,`boolean`),wg()(),jc(988,`td`,23)(989,`p`)(990,`code`),lO(991,`false`),wg()()(),jc(992,`td`,24)(993,`em`)(994,`strong`),lO(995,`(opcional)`),wg()(),jc(996,`p`),lO(997,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),wg()()(),jc(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),lO(1002,` (p-keydown)`),nu(1003,`br`),wg()()(),jc(1004,`td`,21)(1005,`code`,22),lO(1006,`EventEmitter`),wg()(),jc(1007,`td`,23),lO(1008,`-`),wg(),jc(1009,`td`,24)(1010,`em`)(1011,`strong`),lO(1012,`(opcional)`),wg()(),jc(1013,`p`),lO(1014,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(1015,`code`),lO(1016,`KeyboardEvent`),wg(),lO(1017,` com informações sobre a tecla.`),wg()()(),jc(1018,`tr`,16)(1019,`td`,17)(1020,`div`,25)(1021,`span`,26),lO(1022,` p-label`),nu(1023,`br`),wg()()(),jc(1024,`td`,21)(1025,`code`,27),lO(1026,`string`),wg()(),jc(1027,`td`,23),lO(1028,`-`),wg(),jc(1029,`td`,24)(1030,`em`)(1031,`strong`),lO(1032,`(opcional)`),wg()(),jc(1033,`p`),lO(1034,`Label do campo.`),wg(),jc(1035,`blockquote`)(1036,`p`),lO(1037,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),jc(1038,`code`),lO(1039,`modalTitle`),wg(),lO(1040,` na propriedade `),jc(1041,`code`),lO(1042,`p-literals`),wg(),lO(1043,`.`),wg()()()(),jc(1044,`tr`,16)(1045,`td`,17)(1046,`div`,25)(1047,`span`,26),lO(1048,` p-label-text-wrap`),nu(1049,`br`),wg()()(),jc(1050,`td`,21)(1051,`code`,29),lO(1052,`boolean`),wg()(),jc(1053,`td`,23)(1054,`p`)(1055,`code`),lO(1056,`false`),wg()()(),jc(1057,`td`,24)(1058,`em`)(1059,`strong`),lO(1060,`(opcional)`),wg()(),jc(1061,`p`),lO(1062,`Habilita a quebra automática do texto da propriedade `),jc(1063,`code`),lO(1064,`p-label`),wg(),lO(1065,`. Quando `),jc(1066,`code`),lO(1067,`p-label-text-wrap`),wg(),lO(1068,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(1069,`tr`,16)(1070,`td`,17)(1071,`div`,25)(1072,`span`,26),lO(1073,` p-literals`),nu(1074,`br`),wg()()(),jc(1075,`td`,21)(1076,`code`,36),lO(1077,`PoLookupLiterals`),wg()(),jc(1078,`td`,23),lO(1079,`-`),wg(),jc(1080,`td`,24)(1081,`p`),lO(1082,`Objeto com as literais usadas no `),jc(1083,`code`),lO(1084,`po-lookup`),wg(),lO(1085,`.`),wg(),jc(1086,`p`),lO(1087,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(1088,`pre`)(1089,`code`),lO(1090,`const customLiterals: PoLookupLiterals = {
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
`),wg()(),jc(1091,`p`),lO(1092,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(1093,`pre`)(1094,`code`),lO(1095,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),wg()(),jc(1096,`p`),lO(1097,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(1098,`pre`)(1099,`code`),lO(1100,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),wg()(),jc(1101,`blockquote`)(1102,`p`),lO(1103,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(1104,`a`,37)(1105,`code`),lO(1106,`PoI18nService`),wg()(),lO(1107,` ou do browser.`),wg()()()(),jc(1108,`tr`,16)(1109,`td`,17)(1110,`div`,25)(1111,`span`,26),lO(1112,` p-loading`),nu(1113,`br`),wg()()(),jc(1114,`td`,21)(1115,`code`,29),lO(1116,`boolean`),wg()(),jc(1117,`td`,23)(1118,`p`)(1119,`code`),lO(1120,`false`),wg()()(),jc(1121,`td`,24)(1122,`em`)(1123,`strong`),lO(1124,`(opcional)`),wg()(),jc(1125,`p`),lO(1126,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(1127,`tr`,16)(1128,`td`,17)(1129,`div`,25)(1130,`span`,26),lO(1131,` p-multiple`),nu(1132,`br`),wg()()(),jc(1133,`td`,21)(1134,`code`,29),lO(1135,`boolean`),wg()(),jc(1136,`td`,23)(1137,`p`)(1138,`code`),lO(1139,`false`),wg()()(),jc(1140,`td`,24)(1141,`em`)(1142,`strong`),lO(1143,`(opcional)`),wg()(),jc(1144,`p`),lO(1145,`Permite a seleção de múltiplos itens.`),wg(),jc(1146,`blockquote`)(1147,`p`),lO(1148,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),jc(1149,`code`),lO(1150,`[ 12345, 67890 ]`),wg()()()()(),jc(1151,`tr`,16)(1152,`td`,17)(1153,`div`,25)(1154,`span`,26),lO(1155,` name`),nu(1156,`br`),wg()()(),jc(1157,`td`,21)(1158,`code`,27),lO(1159,`string`),wg()(),jc(1160,`td`,23),lO(1161,`-`),wg(),jc(1162,`td`,24)(1163,`p`),lO(1164,`Nome e Id do componente.`),wg()()(),jc(1165,`tr`,16)(1166,`td`,17)(1167,`div`,25)(1168,`span`,26),lO(1169,` p-no-autocomplete`),nu(1170,`br`),wg()()(),jc(1171,`td`,21)(1172,`code`,29),lO(1173,`boolean`),wg()(),jc(1174,`td`,23)(1175,`p`)(1176,`code`),lO(1177,`false`),wg()()(),jc(1178,`td`,24)(1179,`em`)(1180,`strong`),lO(1181,`(opcional)`),wg()(),jc(1182,`p`),lO(1183,`Define a propriedade nativa `),jc(1184,`code`),lO(1185,`autocomplete`),wg(),lO(1186,` do campo como `),jc(1187,`code`),lO(1188,`off`),wg(),lO(1189,`.`),wg()()(),jc(1190,`tr`,16)(1191,`td`,17)(1192,`div`,18)(1193,`span`,19),lO(1194,` (p-error)`),nu(1195,`br`),wg()()(),jc(1196,`td`,21)(1197,`code`,22),lO(1198,`EventEmitter`),wg()(),jc(1199,`td`,23),lO(1200,`-`),wg(),jc(1201,`td`,24)(1202,`p`),lO(1203,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),wg()()(),jc(1204,`tr`,16)(1205,`td`,17)(1206,`div`,25)(1207,`span`,26),lO(1208,` p-optional`),nu(1209,`br`),wg()()(),jc(1210,`td`,21)(1211,`code`,29),lO(1212,`boolean`),wg()(),jc(1213,`td`,23)(1214,`p`)(1215,`code`),lO(1216,`false`),wg()()(),jc(1217,`td`,24)(1218,`em`)(1219,`strong`),lO(1220,`(opcional)`),wg()(),jc(1221,`p`),lO(1222,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1223,`blockquote`)(1224,`p`),lO(1225,`Não será exibida a indicação se:`),wg()(),jc(1226,`ul`)(1227,`li`),lO(1228,`O campo conter `),jc(1229,`code`),lO(1230,`p-required`),wg(),lO(1231,`;`),wg(),jc(1232,`li`),lO(1233,`Não possuir `),jc(1234,`code`),lO(1235,`p-help`),wg(),lO(1236,` e/ou `),jc(1237,`code`),lO(1238,`p-label`),wg(),lO(1239,`.`),wg()()()(),jc(1240,`tr`,16)(1241,`td`,17)(1242,`div`,25)(1243,`span`,26),lO(1244,` p-placeholder`),nu(1245,`br`),wg()()(),jc(1246,`td`,21)(1247,`code`,27),lO(1248,`string`),wg()(),jc(1249,`td`,23),lO(1250,`-`),wg(),jc(1251,`td`,24)(1252,`p`),lO(1253,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1254,`tr`,16)(1255,`td`,17)(1256,`div`,25)(1257,`span`,26),lO(1258,` p-helper`),nu(1259,`br`),wg()()(),jc(1260,`td`,21)(1261,`code`,38),lO(1262,`PoHelperOptions `),wg(),jc(1263,`code`,27),lO(1264,` string`),wg()(),jc(1265,`td`,23),lO(1266,`-`),wg(),jc(1267,`td`,24)(1268,`em`)(1269,`strong`),lO(1270,`(opcional)`),wg()(),jc(1271,`p`),lO(1272,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1273,`code`),lO(1274,`p-label`),wg(),lO(1275,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1276,`code`),lO(1277,`p-label`),wg(),lO(1278,`.`),wg(),jc(1279,`blockquote`)(1280,`p`),lO(1281,`Para mais informações acesse: `),jc(1282,`a`,39),lO(1283,`https://po-ui.io/documentation/po-helper`),wg(),lO(1284,`.`),wg()(),jc(1285,`blockquote`)(1286,`p`),lO(1287,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1288,`code`),lO(1289,`p-additional-help-tooltip`),wg(),lO(1290,` e `),jc(1291,`code`),lO(1292,`p-additional-help`),wg(),lO(1293,`) será ignorado.`),wg()()()(),jc(1294,`tr`,16)(1295,`td`,17)(1296,`div`,25)(1297,`span`,26),lO(1298,` p-required`),nu(1299,`br`),wg()()(),jc(1300,`td`,21)(1301,`code`,29),lO(1302,`boolean`),wg()(),jc(1303,`td`,23)(1304,`p`)(1305,`code`),lO(1306,`false`),wg()()(),jc(1307,`td`,24)(1308,`em`)(1309,`strong`),lO(1310,`(opcional)`),wg()(),jc(1311,`p`),lO(1312,`Define que o campo será obrigatório.`),wg(),jc(1313,`blockquote`)(1314,`p`),lO(1315,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1316,`code`),lO(1317,`(p-disabled)`),wg(),lO(1318,`.`),wg()()()(),jc(1319,`tr`,16)(1320,`td`,17)(1321,`div`,18)(1322,`span`,19),lO(1323,` (p-selected)`),nu(1324,`br`),wg()()(),jc(1325,`td`,21)(1326,`code`,22),lO(1327,`EventEmitter`),wg()(),jc(1328,`td`,23),lO(1329,`-`),wg(),jc(1330,`td`,24)(1331,`em`)(1332,`strong`),lO(1333,`(opcional)`),wg()(),jc(1334,`p`),lO(1335,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),wg()()(),jc(1336,`tr`,16)(1337,`td`,17)(1338,`div`,25)(1339,`span`,26),lO(1340,` p-show-required`),nu(1341,`br`),wg()()(),jc(1342,`td`,21)(1343,`code`,29),lO(1344,`boolean`),wg()(),jc(1345,`td`,23),lO(1346,`-`),wg(),jc(1347,`td`,24)(1348,`p`),lO(1349,`Define se a indicação de campo obrigatório seré exibida.`),wg(),jc(1350,`blockquote`)(1351,`p`),lO(1352,`Não será exibida a indicação se:`),wg()(),jc(1353,`ul`)(1354,`li`),lO(1355,`Não possuir `),jc(1356,`code`),lO(1357,`p-help`),wg(),lO(1358,` e/ou `),jc(1359,`code`),lO(1360,`p-label`),wg(),lO(1361,`.`),wg()()()(),jc(1362,`tr`,16)(1363,`td`,17)(1364,`div`,25)(1365,`span`,26),lO(1366,` p-size`),nu(1367,`br`),wg()()(),jc(1368,`td`,21)(1369,`code`,27),lO(1370,`string`),wg()(),jc(1371,`td`,23)(1372,`p`)(1373,`code`),lO(1374,`medium`),wg()()(),jc(1375,`td`,24)(1376,`em`)(1377,`strong`),lO(1378,`(opcional)`),wg()(),jc(1379,`p`),lO(1380,`Define o tamanho do componente:`),wg(),jc(1381,`ul`)(1382,`li`)(1383,`code`),lO(1384,`small`),wg(),lO(1385,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1386,`li`)(1387,`code`),lO(1388,`medium`),wg(),lO(1389,`: altura do input como 44px.`),wg()(),jc(1390,`blockquote`)(1391,`p`),lO(1392,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1393,`code`),lO(1394,`medium`),wg(),lO(1395,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1396,`a`,40),lO(1397,`po-theme`),wg(),lO(1398,`.`),wg()()()(),jc(1399,`tr`,16)(1400,`td`,17)(1401,`div`,25)(1402,`span`,26),lO(1403,` p-spacing`),nu(1404,`br`),wg()()(),jc(1405,`td`,21)(1406,`code`,27),lO(1407,`string`),wg()(),jc(1408,`td`,23)(1409,`p`)(1410,`code`),lO(1411,`medium`),wg()()(),jc(1412,`td`,24)(1413,`em`)(1414,`strong`),lO(1415,`(opcional)`),wg()(),jc(1416,`p`),lO(1417,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),jc(1418,`strong`),lO(1419,`PoTableColumnSpacing`),wg(),lO(1420,`.`),wg(),jc(1421,`blockquote`)(1422,`p`),lO(1423,`Em nível de acessibilidade `),jc(1424,`strong`),lO(1425,`AA`),wg(),lO(1426,`, caso o valor de `),jc(1427,`code`),lO(1428,`p-spacing`),wg(),lO(1429,` não seja definido, o valor padrão será `),jc(1430,`code`),lO(1431,`extraSmall`),wg(),lO(1432,`
nos seguintes cen\xE1rios:`),wg(),jc(1433,`ul`)(1434,`li`),lO(1435,`Quando o valor de `),jc(1436,`code`),lO(1437,`p-size`),wg(),lO(1438,` for `),jc(1439,`code`),lO(1440,`small`),wg(),lO(1441,`;`),wg(),jc(1442,`li`),lO(1443,`Quando o valor padrão dos componentes for configurado como `),jc(1444,`code`),lO(1445,`small`),wg(),lO(1446,` no
`),jc(1447,`a`,40),lO(1448,`serviço de tema`),wg(),lO(1449,`.`),wg()()()()(),jc(1450,`tr`,16)(1451,`td`,17)(1452,`div`,25)(1453,`span`,26),lO(1454,` p-text-wrap`),nu(1455,`br`),wg()()(),jc(1456,`td`,21)(1457,`code`,29),lO(1458,`boolean`),wg()(),jc(1459,`td`,23)(1460,`p`)(1461,`code`),lO(1462,`false`),wg()()(),jc(1463,`td`,24)(1464,`em`)(1465,`strong`),lO(1466,`(opcional)`),wg()(),jc(1467,`p`),lO(1468,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg(),jc(1469,`p`),lO(1470,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),wg(),jc(1471,`blockquote`)(1472,`p`),lO(1473,`Incompatível com `),jc(1474,`code`),lO(1475,`virtual-scroll`),wg(),lO(1476,`, que requer altura fixa nas linhas.`),wg()()()(),jc(1477,`tr`,16)(1478,`td`,17)(1479,`div`,25)(1480,`span`,26),lO(1481,` p-virtual-scroll`),nu(1482,`br`),wg()()(),jc(1483,`td`,21)(1484,`code`,29),lO(1485,`boolean`),wg()(),jc(1486,`td`,23)(1487,`p`)(1488,`code`),lO(1489,`true`),wg()()(),jc(1490,`td`,24)(1491,`em`)(1492,`strong`),lO(1493,`(opcional)`),wg()(),jc(1494,`p`),lO(1495,`Habilita o `),jc(1496,`code`),lO(1497,`virtual-scroll`),wg(),lO(1498,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),jc(1499,`code`),lO(1500,`virtual-scroll`),wg(),lO(1501,` será ativado automaticamente.`),wg(),jc(1502,`blockquote`)(1503,`p`),lO(1504,`Incompatível com `),jc(1505,`code`),lO(1506,`p-text-wrap`),wg(),lO(1507,` e `),jc(1508,`code`),lO(1509,`master-detail`),wg(),lO(1510,`, pois o `),jc(1511,`code`),lO(1512,`virtual-scroll`),wg(),lO(1513,` exige altura fixa nas linhas.`),wg()()()()(),jc(1514,`h3`,12),lO(1515,`Métodos`),wg(),jc(1516,`table`,41)(1517,`tr`,16)(1518,`th`,42)(1519,`div`,25)(1520,`h4`)(1521,`span`,26),lO(1522,` focus `),wg()()()()(),jc(1523,`tr`,24)(1524,`td`,24)(1525,`p`),lO(1526,`Função que atribui foco ao componente.`),wg(),jc(1527,`p`),lO(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1529,`pre`)(1530,`code`),lO(1531,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),wg()()()()(),nu(1532,`br`),jc(1533,`table`,41)(1534,`tr`,16)(1535,`th`,42)(1536,`div`,25)(1537,`h4`)(1538,`span`,26),lO(1539,` showAdditionalHelp `),wg()()()()(),jc(1540,`tr`,24)(1541,`td`,24)(1542,`p`),lO(1543,`Método que exibe `),jc(1544,`code`),lO(1545,`p-helper`),wg(),lO(1546,` ou executa a ação definida em `),jc(1547,`code`),lO(1548,`p-helper{eventOnClick}`),wg(),lO(1549,` ou em `),jc(1550,`code`),lO(1551,`p-additionalHelp`),wg(),lO(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1553,`code`),lO(1554,`p-keydown`),wg(),lO(1555,`.`),wg(),jc(1556,`blockquote`)(1557,`p`),lO(1558,`Exibe ou oculta o conteúdo do componente `),jc(1559,`code`),lO(1560,`po-helper`),wg(),lO(1561,` quando o componente estiver com foco.`),wg()(),jc(1562,`pre`)(1563,`code`),lO(1564,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),wg()(),jc(1565,`pre`)(1566,`code`),lO(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1568,`br`),jc(1569,`h3`),lO(1570,`Interfaces`),wg(),jc(1571,`h4`,43)(1572,`code`,5),lO(1573,`PoLookupAdvancedFilter`),wg()(),jc(1574,`div`,2)(1575,`p`),lO(1576,`Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente na busca avançada.`),wg()(),jc(1577,`h4`,12),lO(1578,`Propriedades`),wg(),jc(1579,`table`,13)(1580,`tr`,14)(1581,`th`,15),lO(1582,`Nome`),wg(),jc(1583,`th`,15),lO(1584,`Tipo`),wg(),jc(1585,`th`,15),lO(1586,`Descrição`),wg()(),jc(1587,`tr`,16)(1588,`td`,17)(1589,`div`,25)(1590,`span`,26),lO(1591,` additionalHelp`),nu(1592,`br`),wg()()(),jc(1593,`td`,21)(1594,`code`,44),lO(1595,`Function`),wg()(),jc(1596,`td`,24)(1597,`em`)(1598,`strong`),lO(1599,`(opcional)`),wg()(),jc(1600,`p`),lO(1601,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(1602,`blockquote`)(1603,`p`),lO(1604,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(1605,`tr`,16)(1606,`td`,17)(1607,`div`,25)(1608,`span`,26),lO(1609,` additionalHelpTooltip`),nu(1610,`br`),wg()()(),jc(1611,`td`,21)(1612,`code`,27),lO(1613,`string`),wg()(),jc(1614,`td`,24)(1615,`em`)(1616,`strong`),lO(1617,`(opcional)`),wg()(),jc(1618,`p`),lO(1619,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(1620,`code`),lO(1621,`po-helper`),wg(),lO(1622,`.
`),jc(1623,`strong`),lO(1624,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(1625,`blockquote`)(1626,`p`),lO(1627,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(1628,`tr`,16)(1629,`td`,17)(1630,`div`,25)(1631,`span`,26),lO(1632,` advancedFilters`),nu(1633,`br`),wg()()(),jc(1634,`td`,21)(1635,`code`,28),lO(1636,`Array<PoLookupAdvancedFilter>`),wg()(),jc(1637,`td`,24)(1638,`em`)(1639,`strong`),lO(1640,`(opcional)`),wg()(),jc(1641,`p`),lO(1642,`Lista de objetos dos campos que serão criados na busca avançada.`),wg(),jc(1643,`blockquote`)(1644,`p`),lO(1645,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),wg()(),jc(1646,`p`),lO(1647,`Exemplo de URL com busca avançada:`),wg(),jc(1648,`p`)(1649,`code`),lO(1650,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),wg()(),jc(1651,`p`),lO(1652,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),wg(),jc(1653,`p`)(1654,`code`),lO(1655,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),wg()()()(),jc(1656,`tr`,16)(1657,`td`,17)(1658,`div`,25)(1659,`span`,26),lO(1660,` appendBox`),nu(1661,`br`),wg()()(),jc(1662,`td`,21)(1663,`code`,29),lO(1664,`boolean`),wg()(),jc(1665,`td`,24)(1666,`em`)(1667,`strong`),lO(1668,`(opcional)`),wg()(),jc(1669,`p`),lO(1670,`Define que o `),jc(1671,`code`),lO(1672,`listbox`),wg(),lO(1673,` e/ou popover (`),jc(1674,`code`),lO(1675,`p-helper`),wg(),lO(1676,` e/ou `),jc(1677,`code`),lO(1678,`p-error-limit`),wg(),lO(1679,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),wg(),jc(1680,`blockquote`)(1681,`p`),lO(1682,`Quando utilizado com `),jc(1683,`code`),lO(1684,`p-helper`),wg(),lO(1685,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(1686,`tr`,16)(1687,`td`,17)(1688,`div`,25)(1689,`span`,26),lO(1690,` autoHeight`),nu(1691,`br`),wg()()(),jc(1692,`td`,21)(1693,`code`,29),lO(1694,`boolean`),wg()(),jc(1695,`td`,24)(1696,`em`)(1697,`strong`),lO(1698,`(opcional)`),wg()(),jc(1699,`p`),lO(1700,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),wg(),jc(1701,`p`)(1702,`strong`),lO(1703,`Componentes compatíveis:`),wg(),jc(1704,`code`),lO(1705,`po-multiselect`),wg(),lO(1706,`, `),jc(1707,`code`),lO(1708,`po-lookup`),wg(),lO(1709,`.`),wg()()(),jc(1710,`tr`,16)(1711,`td`,17)(1712,`div`,25)(1713,`span`,26),lO(1714,` autoUpload`),nu(1715,`br`),wg()()(),jc(1716,`td`,21)(1717,`code`,29),lO(1718,`boolean`),wg()(),jc(1719,`td`,24)(1720,`em`)(1721,`strong`),lO(1722,`(opcional)`),wg()(),jc(1723,`p`),lO(1724,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),wg(),jc(1725,`p`)(1726,`strong`),lO(1727,`Componente compatível`),wg(),lO(1728,`: `),jc(1729,`code`),lO(1730,`po-upload`),wg()()()(),jc(1731,`tr`,16)(1732,`td`,17)(1733,`div`,25)(1734,`span`,26),lO(1735,` booleanFalse`),nu(1736,`br`),wg()()(),jc(1737,`td`,21)(1738,`code`,27),lO(1739,`string`),wg()(),jc(1740,`td`,24)(1741,`em`)(1742,`strong`),lO(1743,`(opcional)`),wg()(),jc(1744,`p`),lO(1745,`Texto exibido quando o valor do componente for `),jc(1746,`em`),lO(1747,`false`),wg(),lO(1748,`.`),wg()()(),jc(1749,`tr`,16)(1750,`td`,17)(1751,`div`,25)(1752,`span`,26),lO(1753,` booleanTrue`),nu(1754,`br`),wg()()(),jc(1755,`td`,21)(1756,`code`,27),lO(1757,`string`),wg()(),jc(1758,`td`,24)(1759,`em`)(1760,`strong`),lO(1761,`(opcional)`),wg()(),jc(1762,`p`),lO(1763,`Texto exibido quando o valor do componente for `),jc(1764,`em`),lO(1765,`true`),wg(),lO(1766,`.`),wg()()(),jc(1767,`tr`,16)(1768,`td`,17)(1769,`div`,25)(1770,`span`,26),lO(1771,` changeOnEnter`),nu(1772,`br`),wg()()(),jc(1773,`td`,21)(1774,`code`,29),lO(1775,`boolean`),wg()(),jc(1776,`td`,24)(1777,`em`)(1778,`strong`),lO(1779,`(opcional)`),wg()(),jc(1780,`p`),lO(1781,`Indica que o evento `),jc(1782,`code`),lO(1783,`p-change`),wg(),lO(1784,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),jc(1785,`code`),lO(1786,`po-combo`),wg(),lO(1787,`.`),wg()()(),jc(1788,`tr`,16)(1789,`td`,17)(1790,`div`,25)(1791,`span`,26),lO(1792,` changeVisibleColumns`),nu(1793,`br`),wg()()(),jc(1794,`td`,21)(1795,`code`,44),lO(1796,`Function`),wg()(),jc(1797,`td`,24)(1798,`em`)(1799,`strong`),lO(1800,`(opcional)`),wg()(),jc(1801,`p`),lO(1802,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(1803,`p`),lO(1804,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(1805,`p`)(1806,`strong`),lO(1807,`Componente compatível`),wg(),lO(1808,`: `),jc(1809,`code`),lO(1810,`po-lookup`),wg()()()(),jc(1811,`tr`,16)(1812,`td`,17)(1813,`div`,25)(1814,`span`,26),lO(1815,` clean`),nu(1816,`br`),wg()()(),jc(1817,`td`,21)(1818,`code`,29),lO(1819,`boolean`),wg()(),jc(1820,`td`,24)(1821,`em`)(1822,`strong`),lO(1823,`(opcional)`),wg()(),jc(1824,`p`),lO(1825,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg(),jc(1826,`p`)(1827,`strong`),lO(1828,`Componentes compatíveis:`),wg(),jc(1829,`code`),lO(1830,`po-datepicker`),wg(),lO(1831,`, `),jc(1832,`code`),lO(1833,`po-datepicker-range`),wg(),lO(1834,`, `),jc(1835,`code`),lO(1836,`po-input`),wg(),lO(1837,`, `),jc(1838,`code`),lO(1839,`po-number`),wg(),lO(1840,`, `),jc(1841,`code`),lO(1842,`po-decimal`),wg(),lO(1843,`,
`),jc(1844,`code`),lO(1845,`po-combo`),wg(),lO(1846,`, `),jc(1847,`code`),lO(1848,`po-lookup`),wg(),lO(1849,`, `),jc(1850,`code`),lO(1851,`po-password`),wg(),lO(1852,`, `),jc(1853,`code`),lO(1854,`po-timepicker`),wg(),lO(1855,`.`),wg()()(),jc(1856,`tr`,16)(1857,`td`,17)(1858,`div`,25)(1859,`span`,26),lO(1860,` columnRestoreManager`),nu(1861,`br`),wg()()(),jc(1862,`td`,21)(1863,`code`,44),lO(1864,`Function`),wg()(),jc(1865,`td`,24)(1866,`em`)(1867,`strong`),lO(1868,`(opcional)`),wg()(),jc(1869,`p`),lO(1870,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(1871,`p`),lO(1872,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(1873,`p`)(1874,`strong`),lO(1875,`Componente compatível`),wg(),lO(1876,`: `),jc(1877,`code`),lO(1878,`po-lookup`),wg()()()(),jc(1879,`tr`,16)(1880,`td`,17)(1881,`div`,25)(1882,`span`,26),lO(1883,` columns`),nu(1884,`br`),wg()()(),jc(1885,`td`,21)(1886,`code`,30),lO(1887,`Array<PoLookupColumn> `),wg(),jc(1888,`code`,45),lO(1889,` number`),wg()(),jc(1890,`td`,24)(1891,`em`)(1892,`strong`),lO(1893,`(opcional)`),wg()(),jc(1894,`p`),lO(1895,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),jc(1896,`code`),lO(1897,`searchService`),wg(),lO(1898,`,
essa propriedade deve receber um array de objetos que implementam a interface `),jc(1899,`a`,46)(1900,`code`),lO(1901,`PoLookupColumn`),wg()(),lO(1902,`.`),wg(),jc(1903,`blockquote`)(1904,`p`),lO(1905,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),jc(1906,`em`),lO(1907,`label`),wg(),lO(1908,` e `),jc(1909,`em`),lO(1910,`value`),wg(),lO(1911,` para valores
de tela e do model respectivamente.`),wg()(),jc(1912,`p`)(1913,`strong`),lO(1914,`Componentes compatíveis:`),wg(),jc(1915,`code`),lO(1916,`po-radio-group`),wg(),lO(1917,`, `),jc(1918,`code`),lO(1919,`po-lookup`),wg(),lO(1920,`, `),jc(1921,`code`),lO(1922,`po-checkbox-group`),wg(),lO(1923,`.`),wg()()(),jc(1924,`tr`,16)(1925,`td`,17)(1926,`div`,25)(1927,`span`,26),lO(1928,` compactLabel`),nu(1929,`br`),wg()()(),jc(1930,`td`,21)(1931,`code`,29),lO(1932,`boolean`),wg()(),jc(1933,`td`,24)(1934,`em`)(1935,`strong`),lO(1936,`(opcional)`),wg()(),jc(1937,`p`),lO(1938,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(1939,`p`),lO(1940,`Quando habilitado (`),jc(1941,`code`),lO(1942,`true`),wg(),lO(1943,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(1944,`ul`)(1945,`li`)(1946,`code`),lO(1947,`po-label`),wg()(),jc(1948,`li`)(1949,`code`),lO(1950,`p-requirement (showRequired)`),wg()(),jc(1951,`li`)(1952,`code`),lO(1953,`po-helper`),wg()()(),jc(1954,`p`),lO(1955,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(1956,`p`),lO(1957,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(1958,`ul`)(1959,`li`)(1960,`code`),lO(1961,`--field-container-title-justify`),wg()(),jc(1962,`li`)(1963,`code`),lO(1964,`--field-container-title-flex`),wg()()(),jc(1965,`p`),lO(1966,`Exemplo:`),wg(),jc(1967,`pre`)(1968,`code`),lO(1969,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(1970,`p`),lO(1971,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(1972,`tr`,16)(1973,`td`,17)(1974,`div`,25)(1975,`span`,26),lO(1976,` container`),nu(1977,`br`),wg()()(),jc(1978,`td`,21)(1979,`code`,27),lO(1980,`string`),wg()(),jc(1981,`td`,24)(1982,`em`)(1983,`strong`),lO(1984,`(opcional)`),wg()(),jc(1985,`p`),lO(1986,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),wg(),jc(1987,`p`),lO(1988,`Está propriedade é do tipo string, o valor que será titulo do contianer`),wg()()(),jc(1989,`tr`,16)(1990,`td`,17)(1991,`div`,25)(1992,`span`,26),lO(1993,` customAction`),nu(1994,`br`),wg()()(),jc(1995,`td`,21)(1996,`code`,47),lO(1997,`PoProgressAction`),wg()(),jc(1998,`td`,24)(1999,`em`)(2e3,`strong`),lO(2001,`(opcional)`),wg()(),jc(2002,`p`),lO(2003,`Define uma ação personalizada no componente `),jc(2004,`code`),lO(2005,`po-upload`),wg(),lO(2006,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),wg(),jc(2007,`p`)(2008,`strong`),lO(2009,`Componente compatível`),wg(),lO(2010,`: `),jc(2011,`code`),lO(2012,`po-upload`),wg(),lO(2013,`,`),wg(),jc(2014,`p`)(2015,`strong`),lO(2016,`Exemplo de configuração`),wg(),lO(2017,`:`),wg(),jc(2018,`pre`)(2019,`code`,48),lO(2020,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),wg()()()(),jc(2021,`tr`,16)(2022,`td`,17)(2023,`div`,25)(2024,`span`,26),lO(2025,` customActionClick`),nu(2026,`br`),wg()()(),jc(2027,`td`,21)(2028,`code`,49),lO(2029,`(file: PoUploadFile) => void`),wg()(),jc(2030,`td`,24)(2031,`em`)(2032,`strong`),lO(2033,`(opcional)`),wg()(),jc(2034,`p`),lO(2035,`Evento emitido ao clicar na ação personalizada configurada no `),jc(2036,`code`),lO(2037,`p-custom-action`),wg(),lO(2038,`.`),wg(),jc(2039,`p`)(2040,`strong`),lO(2041,`Componente compatível`),wg(),lO(2042,`: `),jc(2043,`code`),lO(2044,`po-upload`),wg(),lO(2045,`,`),wg(),jc(2046,`p`),lO(2047,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),wg(),jc(2048,`p`)(2049,`strong`),lO(2050,`Parâmetro do evento`),wg(),lO(2051,`:`),wg(),jc(2052,`ul`)(2053,`li`)(2054,`code`),lO(2055,`file`),wg(),lO(2056,`: O arquivo associado ao botão de ação. Este objeto é da classe `),jc(2057,`code`),lO(2058,`PoUploadFile`),wg(),lO(2059,` e contém informações sobre o arquivo, como nome, status e progresso.`),wg()(),jc(2060,`p`)(2061,`strong`),lO(2062,`Exemplo de uso`),wg(),lO(2063,`:`),wg(),jc(2064,`pre`)(2065,`code`,48),lO(2066,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),wg()()()(),jc(2067,`tr`,16)(2068,`td`,17)(2069,`div`,25)(2070,`span`,26),lO(2071,` debounceTime`),nu(2072,`br`),wg()()(),jc(2073,`td`,21)(2074,`code`,45),lO(2075,`number`),wg()(),jc(2076,`td`,24)(2077,`em`)(2078,`strong`),lO(2079,`(opcional)`),wg()(),jc(2080,`p`),lO(2081,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),jc(2082,`code`),lO(2083,`p-filter-service`),wg(),lO(2084,`).`),wg(),jc(2085,`p`)(2086,`strong`),lO(2087,`Componentes compatíveis:`),wg(),jc(2088,`code`),lO(2089,`po-combo`),wg(),lO(2090,`, `),jc(2091,`code`),lO(2092,`po-multiselect`),wg(),lO(2093,`.`),wg()()(),jc(2094,`tr`,16)(2095,`td`,17)(2096,`div`,25)(2097,`span`,26),lO(2098,` decimalsLength`),nu(2099,`br`),wg()()(),jc(2100,`td`,21)(2101,`code`,45),lO(2102,`number`),wg()(),jc(2103,`td`,24)(2104,`em`)(2105,`strong`),lO(2106,`(opcional)`),wg()(),jc(2107,`p`),lO(2108,`Quantidade máxima de casas decimais.`),wg(),jc(2109,`blockquote`)(2110,`p`),lO(2111,`Esta propriedade só pode ser utilizada quando o `),jc(2112,`code`),lO(2113,`type`),wg(),lO(2114,` for `),jc(2115,`em`),lO(2116,`currency`),wg(),lO(2117,` ou `),jc(2118,`em`),lO(2119,`decimal`),wg(),lO(2120,`.`),wg()(),jc(2121,`blockquote`)(2122,`p`),lO(2123,`Quando utilizado com `),jc(2124,`code`),lO(2125,`displayFormat`),wg(),lO(2126,`, será respeitado o valor `),jc(2127,`strong`),lO(2128,`mais restritivo`),wg(),lO(2129,` entre esta propriedade e o número de casas decimais definido no formato.`),wg()()()(),jc(2130,`tr`,16)(2131,`td`,17)(2132,`div`,25)(2133,`span`,26),lO(2134,` directory`),nu(2135,`br`),wg()()(),jc(2136,`td`,21)(2137,`code`,29),lO(2138,`boolean`),wg()(),jc(2139,`td`,24)(2140,`em`)(2141,`strong`),lO(2142,`(opcional)`),wg()(),jc(2143,`p`),lO(2144,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),wg(),jc(2145,`blockquote`)(2146,`p`),lO(2147,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),wg()(),jc(2148,`blockquote`)(2149,`p`),lO(2150,`Definição não suportada pelo browser `),jc(2151,`strong`),lO(2152,`Internet Explorer`),wg(),lO(2153,`, todavia será possível a seleção de arquivos padrão.`),wg()(),jc(2154,`p`)(2155,`strong`),lO(2156,`Componente compatível`),wg(),lO(2157,`: `),jc(2158,`code`),lO(2159,`po-upload`),wg()()()(),jc(2160,`tr`,16)(2161,`td`,17)(2162,`div`,25)(2163,`span`,26),lO(2164,` disabled`),nu(2165,`br`),wg()()(),jc(2166,`td`,21)(2167,`code`,29),lO(2168,`boolean`),wg()(),jc(2169,`td`,24)(2170,`em`)(2171,`strong`),lO(2172,`(opcional)`),wg()(),jc(2173,`p`),lO(2174,`Desabilita o campo caso informar o valor `),jc(2175,`em`),lO(2176,`true`),wg(),lO(2177,`.`),wg()()(),jc(2178,`tr`,16)(2179,`td`,17)(2180,`div`,25)(2181,`span`,26),lO(2182,` disabledInitFilter`),nu(2183,`br`),wg()()(),jc(2184,`td`,21)(2185,`code`,29),lO(2186,`boolean`),wg()(),jc(2187,`td`,24)(2188,`em`)(2189,`strong`),lO(2190,`(opcional)`),wg()(),jc(2191,`p`),lO(2192,`Desabilita o filtro inicial no serviço do `),jc(2193,`code`),lO(2194,`po-combo`),wg(),lO(2195,`, que é executado no primeiro clique no campo.`),wg()()(),jc(2196,`tr`,16)(2197,`td`,17)(2198,`div`,25)(2199,`span`,26),lO(2200,` disabledTabFilter`),nu(2201,`br`),wg()()(),jc(2202,`td`,21)(2203,`code`,29),lO(2204,`boolean`),wg()(),jc(2205,`td`,24)(2206,`em`)(2207,`strong`),lO(2208,`(opcional)`),wg()(),jc(2209,`p`),lO(2210,`Se verdadeiro, desabilitará a busca de um item via TAB no `),jc(2211,`code`),lO(2212,`po-combo`),wg(),lO(2213,`.`),wg()()(),jc(2214,`tr`,16)(2215,`td`,17)(2216,`div`,25)(2217,`span`,26),lO(2218,` displayFormat`),nu(2219,`br`),wg()()(),jc(2220,`td`,21)(2221,`code`,27),lO(2222,`string`),wg()(),jc(2223,`td`,24)(2224,`em`)(2225,`strong`),lO(2226,`(opcional)`),wg()(),jc(2227,`p`),lO(2228,`Define uma máscara de formatação numérica avançada para o campo.`),wg(),jc(2229,`p`),lO(2230,`Simbologia suportada:`),wg(),jc(2231,`ul`)(2232,`li`)(2233,`code`),lO(2234,`9`),wg(),lO(2235,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),wg(),jc(2236,`li`)(2237,`code`),lO(2238,`>`),wg(),lO(2239,`: Supressão de zero à esquerda (dígito não obrigatório);`),wg(),jc(2240,`li`)(2241,`code`),lO(2242,`<`),wg(),lO(2243,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),wg(),jc(2244,`li`)(2245,`code`),lO(2246,`.`),wg(),lO(2247,`: Separador decimal (convertido conforme locale);`),wg(),jc(2248,`li`)(2249,`code`),lO(2250,`,`),wg(),lO(2251,`: Separador de milhar/grupo (convertido conforme locale);`),wg(),jc(2252,`li`)(2253,`code`),lO(2254,`-`),wg(),lO(2255,`: Sinal negativo (deve ser o primeiro caractere do formato).`),wg()(),jc(2256,`blockquote`)(2257,`p`),lO(2258,`Quando utilizado com `),jc(2259,`code`),lO(2260,`decimalsLength`),wg(),lO(2261,` ou `),jc(2262,`code`),lO(2263,`thousandMaxlength`),wg(),lO(2264,`, será respeitado o valor `),jc(2265,`strong`),lO(2266,`mais restritivo`),wg(),lO(2267,` entre a propriedade e o formato.`),wg()(),jc(2268,`p`),lO(2269,`Exemplos: `),jc(2270,`code`),lO(2271,`'>>>,>>>,>>9.99'`),wg(),lO(2272,`, `),jc(2273,`code`),lO(2274,`'->>9.99'`),wg(),lO(2275,`, `),jc(2276,`code`),lO(2277,`'999.9'`),wg()(),jc(2278,`blockquote`)(2279,`p`),lO(2280,`Esta propriedade só pode ser utilizada quando o `),jc(2281,`code`),lO(2282,`type`),wg(),lO(2283,` for `),jc(2284,`em`),lO(2285,`currency`),wg(),lO(2286,` ou `),jc(2287,`em`),lO(2288,`decimal`),wg(),lO(2289,`.`),wg()(),jc(2290,`p`)(2291,`strong`),lO(2292,`Componente compatível:`),wg(),jc(2293,`code`),lO(2294,`po-decimal`),wg(),lO(2295,`.`),wg()()(),jc(2296,`tr`,16)(2297,`td`,17)(2298,`div`,25)(2299,`span`,26),lO(2300,` divider`),nu(2301,`br`),wg()()(),jc(2302,`td`,21)(2303,`code`,27),lO(2304,`string`),wg()(),jc(2305,`td`,24)(2306,`em`)(2307,`strong`),lO(2308,`(opcional)`),wg()(),jc(2309,`p`),lO(2310,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),wg()()(),jc(2311,`tr`,16)(2312,`td`,17)(2313,`div`,25)(2314,`span`,26),lO(2315,` dragDrop`),nu(2316,`br`),wg()()(),jc(2317,`td`,21)(2318,`code`,29),lO(2319,`boolean`),wg()(),jc(2320,`td`,24)(2321,`em`)(2322,`strong`),lO(2323,`(opcional)`),wg()(),jc(2324,`p`),lO(2325,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),wg(),jc(2326,`blockquote`)(2327,`p`),lO(2328,`Recomendamos utilizar apenas um `),jc(2329,`code`),lO(2330,`po-upload`),wg(),lO(2331,` com esta funcionalidade por tela.`),wg()(),jc(2332,`p`)(2333,`strong`),lO(2334,`Componente compatível`),wg(),lO(2335,`: `),jc(2336,`code`),lO(2337,`po-upload`),wg()()()(),jc(2338,`tr`,16)(2339,`td`,17)(2340,`div`,25)(2341,`span`,26),lO(2342,` dragDropHeight`),nu(2343,`br`),wg()()(),jc(2344,`td`,21)(2345,`code`,45),lO(2346,`number`),wg()(),jc(2347,`td`,24)(2348,`em`)(2349,`strong`),lO(2350,`(opcional)`),wg()(),jc(2351,`p`),lO(2352,`Define em `),jc(2353,`em`),lO(2354,`pixels`),wg(),lO(2355,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),jc(2356,`code`),lO(2357,`160px`),wg(),lO(2358,`.`),wg(),jc(2359,`blockquote`)(2360,`p`),lO(2361,`Esta propriedade funciona somente se a propriedade `),jc(2362,`code`),lO(2363,`p-drag-drop`),wg(),lO(2364,` estiver habilitada.`),wg()(),jc(2365,`p`)(2366,`strong`),lO(2367,`Componente compatível`),wg(),lO(2368,`: `),jc(2369,`code`),lO(2370,`po-upload`),wg()()()(),jc(2371,`tr`,16)(2372,`td`,17)(2373,`div`,25)(2374,`span`,26),lO(2375,` errorAsyncFunction`),nu(2376,`br`),wg()()(),jc(2377,`td`,21)(2378,`code`,50),lO(2379,`(value) => Observable<boolean>`),wg()(),jc(2380,`td`,24)(2381,`em`)(2382,`strong`),lO(2383,`(opcional)`),wg()(),jc(2384,`p`),lO(2385,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(2386,`code`),lO(2387,`change`),wg(),lO(2388,` ou `),jc(2389,`code`),lO(2390,`change-model`),wg(),lO(2391,`, dependendo do valor da propriedade `),jc(2392,`code`),lO(2393,`triggerMode`),wg(),lO(2394,`.`),wg(),jc(2395,`blockquote`)(2396,`p`),lO(2397,`Retorna `),jc(2398,`code`),lO(2399,`Observable com o valor true`),wg(),lO(2400,` para sinalizar o erro `),jc(2401,`code`),lO(2402,`false`),wg(),lO(2403,` para indicar que não há erro.`),wg()(),jc(2404,`p`)(2405,`strong`),lO(2406,`Componente compatível`),wg(),lO(2407,`: `),jc(2408,`code`),lO(2409,`po-datepicker`),wg()()()(),jc(2410,`tr`,16)(2411,`td`,17)(2412,`div`,25)(2413,`span`,26),lO(2414,` errorAsyncProperties`),nu(2415,`br`),wg()()(),jc(2416,`td`,21)(2417,`code`,51),lO(2418,`ErrorAsyncProperties`),wg()(),jc(2419,`td`,24)(2420,`em`)(2421,`strong`),lO(2422,`(opcional)`),wg()(),jc(2423,`p`),lO(2424,`Realiza alguma validação customizada assíncrona no componente.`),wg(),jc(2425,`p`)(2426,`strong`),lO(2427,`Componentes compatíveis:`),wg(),jc(2428,`code`),lO(2429,`po-input`),wg(),lO(2430,`, `),jc(2431,`code`),lO(2432,`po-number`),wg(),lO(2433,`, `),jc(2434,`code`),lO(2435,`po-decimal`),wg(),lO(2436,`, `),jc(2437,`code`),lO(2438,`po-password`),wg(),lO(2439,`.`),wg()()(),jc(2440,`tr`,16)(2441,`td`,17)(2442,`div`,25)(2443,`span`,26),lO(2444,` errorLimit`),nu(2445,`br`),wg()()(),jc(2446,`td`,21)(2447,`code`,29),lO(2448,`boolean`),wg()(),jc(2449,`td`,24)(2450,`em`)(2451,`strong`),lO(2452,`(opcional)`),wg()(),jc(2453,`p`),lO(2454,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(2455,`blockquote`)(2456,`p`),lO(2457,`Caso essa propriedade seja definida como `),jc(2458,`code`),lO(2459,`true`),wg(),lO(2460,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()(),jc(2461,`p`)(2462,`strong`),lO(2463,`Componentes compatíveis:`),wg(),jc(2464,`code`),lO(2465,`po-checkbox-group`),wg(),lO(2466,`, `),jc(2467,`code`),lO(2468,`po-combo`),wg(),lO(2469,`, `),jc(2470,`code`),lO(2471,`po-datepicker`),wg(),lO(2472,`, `),jc(2473,`code`),lO(2474,`po-datepicker-range`),wg(),lO(2475,`, `),jc(2476,`code`),lO(2477,`po-decimal`),wg(),lO(2478,`, `),jc(2479,`code`),lO(2480,`po-input`),wg(),lO(2481,`, `),jc(2482,`code`),lO(2483,`po-lookup`),wg(),lO(2484,`, `),jc(2485,`code`),lO(2486,`po-multiselect`),wg(),lO(2487,`, `),jc(2488,`code`),lO(2489,`po-number`),wg(),lO(2490,`, `),jc(2491,`code`),lO(2492,`po-password`),wg(),lO(2493,`, `),jc(2494,`code`),lO(2495,`po-radio-group`),wg(),lO(2496,`, `),jc(2497,`code`),lO(2498,`po-select`),wg(),lO(2499,`,
`),jc(2500,`code`),lO(2501,`po-switch`),wg(),lO(2502,`, `),jc(2503,`code`),lO(2504,`po-textarea`),wg(),lO(2505,`, `),jc(2506,`code`),lO(2507,`po-timepicker`),wg(),lO(2508,`.`),wg()()(),jc(2509,`tr`,16)(2510,`td`,17)(2511,`div`,25)(2512,`span`,26),lO(2513,` errorMessage`),nu(2514,`br`),wg()()(),jc(2515,`td`,21)(2516,`code`,27),lO(2517,`string`),wg()(),jc(2518,`td`,24)(2519,`em`)(2520,`strong`),lO(2521,`(opcional)`),wg()(),jc(2522,`p`),lO(2523,`Mensagem que será apresentada quando o campo ficar inválido.`),wg(),jc(2524,`p`),lO(2525,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),wg(),jc(2526,`ul`)(2527,`li`),lO(2528,`pattern;`),wg(),jc(2529,`li`),lO(2530,`minValue;`),wg(),jc(2531,`li`),lO(2532,`maxValue;`),wg(),jc(2533,`li`),lO(2534,`required;`),wg()(),jc(2535,`blockquote`)(2536,`p`),lO(2537,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),jc(2538,`code`),lO(2539,`po-datepicker`),wg(),lO(2540,`, `),jc(2541,`code`),lO(2542,`po-input`),wg(),lO(2543,`, `),jc(2544,`code`),lO(2545,`po-number`),wg(),lO(2546,`, `),jc(2547,`code`),lO(2548,`po-decimal`),wg(),lO(2549,`, `),jc(2550,`code`),lO(2551,`po-password`),wg(),lO(2552,`, `),jc(2553,`code`),lO(2554,`po-timepicker`),wg(),lO(2555,`, \xE9 necess\xE1rio que a propriedade
`),jc(2556,`code`),lO(2557,`requiredFieldErrorMessage`),wg(),lO(2558,` esteja como `),jc(2559,`code`),lO(2560,`true`),wg(),lO(2561,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),jc(2562,`code`),lO(2563,`po-datepicker-range`),wg(),lO(2564,`, `),jc(2565,`code`),lO(2566,`po-select`),wg(),lO(2567,`, `),jc(2568,`code`),lO(2569,`po-checkbox-group`),wg(),lO(2570,`, `),jc(2571,`code`),lO(2572,`po-radio-group`),wg(),lO(2573,`, `),jc(2574,`code`),lO(2575,`po-multiselect`),wg(),lO(2576,`, `),jc(2577,`code`),lO(2578,`po-combo`),wg(),lO(2579,`,
`),jc(2580,`code`),lO(2581,`po-lookup`),wg(),lO(2582,` e `),jc(2583,`code`),lO(2584,`po-textarea`),wg(),lO(2585,` não é necessário passar a propriedade `),jc(2586,`code`),lO(2587,`requiredFieldErrorMessage`),wg(),lO(2588,`.`),wg()(),jc(2589,`p`)(2590,`strong`),lO(2591,`Componentes compatíveis:`),wg(),jc(2592,`code`),lO(2593,`po-checkbox-group`),wg(),lO(2594,`, `),jc(2595,`code`),lO(2596,`po-combo`),wg(),lO(2597,`, `),jc(2598,`code`),lO(2599,`po-datepicker`),wg(),lO(2600,`, `),jc(2601,`code`),lO(2602,`po-datepicker-range`),wg(),lO(2603,`, `),jc(2604,`code`),lO(2605,`po-decimal`),wg(),lO(2606,`, `),jc(2607,`code`),lO(2608,`po-input`),wg(),lO(2609,`, `),jc(2610,`code`),lO(2611,`po-lookup`),wg(),lO(2612,`, `),jc(2613,`code`),lO(2614,`po-multiselect`),wg(),lO(2615,`, `),jc(2616,`code`),lO(2617,`po-number`),wg(),lO(2618,`, `),jc(2619,`code`),lO(2620,`po-password`),wg(),lO(2621,`, `),jc(2622,`code`),lO(2623,`po-radio-group`),wg(),lO(2624,`, `),jc(2625,`code`),lO(2626,`po-select`),wg(),lO(2627,`,
`),jc(2628,`code`),lO(2629,`po-switch`),wg(),lO(2630,`, `),jc(2631,`code`),lO(2632,`po-textarea`),wg(),lO(2633,`, `),jc(2634,`code`),lO(2635,`po-timepicker`),wg(),lO(2636,`.`),wg()()(),jc(2637,`tr`,16)(2638,`td`,17)(2639,`div`,25)(2640,`span`,26),lO(2641,` fieldLabel`),nu(2642,`br`),wg()()(),jc(2643,`td`,21)(2644,`code`,27),lO(2645,`string`),wg()(),jc(2646,`td`,24)(2647,`em`)(2648,`strong`),lO(2649,`(opcional)`),wg()(),jc(2650,`p`),lO(2651,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),wg(),jc(2652,`p`),lO(2653,`O valor padrão é: `),jc(2654,`code`),lO(2655,`label`),wg(),lO(2656,`.`),wg(),jc(2657,`blockquote`)(2658,`p`),lO(2659,`Esta propriedade pode ser utilizada em conjunto com: `),jc(2660,`code`),lO(2661,`options`),wg(),lO(2662,`, `),jc(2663,`code`),lO(2664,`optionsService`),wg(),lO(2665,` e `),jc(2666,`code`),lO(2667,`searchService`),wg(),lO(2668,`.`),wg()()()(),jc(2669,`tr`,16)(2670,`td`,17)(2671,`div`,25)(2672,`span`,26),lO(2673,` fieldValue`),nu(2674,`br`),wg()()(),jc(2675,`td`,21)(2676,`code`,27),lO(2677,`string`),wg()(),jc(2678,`td`,24)(2679,`em`)(2680,`strong`),lO(2681,`(opcional)`),wg()(),jc(2682,`p`),lO(2683,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),wg(),jc(2684,`p`),lO(2685,`O valor padrão é: `),jc(2686,`code`),lO(2687,`value`),wg(),lO(2688,`.`),wg(),jc(2689,`blockquote`)(2690,`p`),lO(2691,`Esta propriedade pode ser utilizada em conjunto com: `),jc(2692,`code`),lO(2693,`options`),wg(),lO(2694,`, `),jc(2695,`code`),lO(2696,`optionsService`),wg(),lO(2697,` e `),jc(2698,`code`),lO(2699,`searchService`),wg(),lO(2700,`.`),wg()()()(),jc(2701,`tr`,16)(2702,`td`,17)(2703,`div`,25)(2704,`span`,26),lO(2705,` filterMinlength`),nu(2706,`br`),wg()()(),jc(2707,`td`,21)(2708,`code`,45),lO(2709,`number`),wg()(),jc(2710,`td`,24)(2711,`em`)(2712,`strong`),lO(2713,`(opcional)`),wg()(),jc(2714,`p`),lO(2715,`Valor mínimo de caracteres para realizar o filtro no serviço do `),jc(2716,`code`),lO(2717,`po-combo`),wg(),lO(2718,`.`),wg()()(),jc(2719,`tr`,16)(2720,`td`,17)(2721,`div`,25)(2722,`span`,26),lO(2723,` filterMode`),nu(2724,`br`),wg()()(),jc(2725,`td`,21)(2726,`code`,52),lO(2727,`PoMultiselectFilterMode`),wg()(),jc(2728,`td`,24)(2729,`em`)(2730,`strong`),lO(2731,`(opcional)`),wg()(),jc(2732,`p`),lO(2733,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),jc(2734,`code`),lO(2735,`startsWith`),wg(),lO(2736,`, `),jc(2737,`code`),lO(2738,`contains`),wg(),lO(2739,` ou `),jc(2740,`code`),lO(2741,`endsWith`),wg(),lO(2742,`.`),wg(),jc(2743,`blockquote`)(2744,`p`),lO(2745,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),wg()(),jc(2746,`p`)(2747,`strong`),lO(2748,`Componente compatível:`),wg(),jc(2749,`code`),lO(2750,`po-multiselect`),wg(),lO(2751,`.`),wg()()(),jc(2752,`tr`,16)(2753,`td`,17)(2754,`div`,25)(2755,`span`,26),lO(2756,` forceBooleanComponentType`),nu(2757,`br`),wg()()(),jc(2758,`td`,21)(2759,`code`,53),lO(2760,`ForceBooleanComponentEnum`),wg()(),jc(2761,`td`,24)(2762,`em`)(2763,`strong`),lO(2764,`(opcional)`),wg()(),jc(2765,`p`),lO(2766,`Valores aceitos:`),wg(),jc(2767,`ul`)(2768,`li`),lO(2769,`ForceBooleanComponentEnum.switch`),wg(),jc(2770,`li`),lO(2771,`ForceBooleanComponentEnum.checkbox`),wg()()()(),jc(2772,`tr`,16)(2773,`td`,17)(2774,`div`,25)(2775,`span`,26),lO(2776,` forceOptionsComponentType`),nu(2777,`br`),wg()()(),jc(2778,`td`,21)(2779,`code`,54),lO(2780,`ForceOptionComponentEnum`),wg()(),jc(2781,`td`,24)(2782,`em`)(2783,`strong`),lO(2784,`(opcional)`),wg()(),jc(2785,`p`),lO(2786,`pode ser utilizada em conjunto com a propriedade `),jc(2787,`code`),lO(2788,`options`),wg(),lO(2789,` forçando o componente a renderizar um `),jc(2790,`code`),lO(2791,`po-select`),wg(),lO(2792,` ou `),jc(2793,`code`),lO(2794,`po-radio-group`),wg(),lO(2795,`.`),wg(),jc(2796,`p`),lO(2797,`Valores aceitos:`),wg(),jc(2798,`ul`)(2799,`li`),lO(2800,`ForceOptionComponentEnum.radioGroup`),wg(),jc(2801,`li`),lO(2802,`ForceOptionComponentEnum.select`),wg()(),jc(2803,`blockquote`)(2804,`p`),lO(2805,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),jc(2806,`code`),lO(2807,`optionsMulti`),wg(),lO(2808,` e `),jc(2809,`code`),lO(2810,`optionsService`),wg(),lO(2811,`.`),wg()()()(),jc(2812,`tr`,16)(2813,`td`,17)(2814,`div`,25)(2815,`span`,26),lO(2816,` formField`),nu(2817,`br`),wg()()(),jc(2818,`td`,21)(2819,`code`,27),lO(2820,`string`),wg()(),jc(2821,`td`,24)(2822,`em`)(2823,`strong`),lO(2824,`(opcional)`),wg()(),jc(2825,`p`),lO(2826,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),jc(2827,`code`),lO(2828,`url`),wg(),lO(2829,`.`),wg(),jc(2830,`blockquote`)(2831,`p`),lO(2832,`O valor default é `),jc(2833,`code`),lO(2834,`files`),wg()()(),jc(2835,`p`)(2836,`strong`),lO(2837,`Componente compatível`),wg(),lO(2838,`: `),jc(2839,`code`),lO(2840,`po-upload`),wg()()()(),jc(2841,`tr`,16)(2842,`td`,17)(2843,`div`,25)(2844,`span`,26),lO(2845,` format`),nu(2846,`br`),wg()()(),jc(2847,`td`,21)(2848,`code`,27),lO(2849,`string `),wg(),jc(2850,`code`,32),lO(2851,` Array<string>`),wg()(),jc(2852,`td`,24)(2853,`em`)(2854,`strong`),lO(2855,`(opcional)`),wg()(),jc(2856,`p`),lO(2857,`Formato de exibição no campo.`),wg(),jc(2858,`p`),lO(2859,`Ao utilizar esta propriedade com o `),jc(2860,`code`),lO(2861,`type`),wg(),jc(2862,`em`),lO(2863,`PoDynamicFieldType.Date`),wg(),lO(2864,` ou `),jc(2865,`em`),lO(2866,`PoDynamicFieldType.DateTime`),wg(),lO(2867,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),wg(),jc(2868,`p`),lO(2869,`Valores válidos:`),wg(),jc(2870,`ul`)(2871,`li`),lO(2872,`dd/mm/yyyy`),wg(),jc(2873,`li`),lO(2874,`mm/dd/yyyy`),wg(),jc(2875,`li`),lO(2876,`yyyy/mm/dd`),wg()(),jc(2877,`p`),lO(2878,`Ao utilizar com o `),jc(2879,`code`),lO(2880,`type`),wg(),jc(2881,`em`),lO(2882,`PoDynamicFieldType.Time`),wg(),lO(2883,`, define o formato de exibição do horário:`),wg(),jc(2884,`p`),lO(2885,`Valores válidos:`),wg(),jc(2886,`ul`)(2887,`li`)(2888,`code`),lO(2889,`24`),wg(),lO(2890,`: formato de 24 horas (padrão)`),wg(),jc(2891,`li`)(2892,`code`),lO(2893,`12`),wg(),lO(2894,`: formato de 12 horas com indicador AM/PM`),wg()(),jc(2895,`p`),lO(2896,`Também pode-se utilizar em conjunto com `),jc(2897,`code`),lO(2898,`searchService`),wg(),lO(2899,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),wg(),jc(2900,`p`)(2901,`strong`),lO(2902,`Componentes compatíveis:`),wg(),jc(2903,`code`),lO(2904,`po-datepicker`),wg(),lO(2905,`, `),jc(2906,`code`),lO(2907,`po-datetimepicker`),wg(),lO(2908,`, `),jc(2909,`code`),lO(2910,`po-timepicker`),wg(),lO(2911,`, `),jc(2912,`code`),lO(2913,`po-lookup`),wg(),lO(2914,`.`),wg()()(),jc(2915,`tr`,16)(2916,`td`,17)(2917,`div`,25)(2918,`span`,26),lO(2919,` formatModel`),nu(2920,`br`),wg()()(),jc(2921,`td`,21)(2922,`code`,29),lO(2923,`boolean`),wg()(),jc(2924,`td`,24)(2925,`em`)(2926,`strong`),lO(2927,`(opcional)`),wg()(),jc(2928,`p`),lO(2929,`Indica se o `),jc(2930,`code`),lO(2931,`model`),wg(),lO(2932,` receberá o valor formatado pelas propriedades `),jc(2933,`code`),lO(2934,`p-label-on`),wg(),lO(2935,` e `),jc(2936,`code`),lO(2937,`p-label-off`),wg(),lO(2938,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),wg(),jc(2939,`p`),lO(2940,`O valor padrão é: `),jc(2941,`code`),lO(2942,`false`),wg(),lO(2943,`.`),wg(),jc(2944,`blockquote`)(2945,`p`),lO(2946,`Esta propriedade está disponivel apenas para o `),jc(2947,`code`),lO(2948,`swicth`),wg(),lO(2949,`.`),wg()()()(),jc(2950,`tr`,16)(2951,`td`,17)(2952,`div`,25)(2953,`span`,26),lO(2954,` formatTime`),nu(2955,`br`),wg()()(),jc(2956,`td`,21)(2957,`code`,27),lO(2958,`string`),wg()(),jc(2959,`td`,24)(2960,`em`)(2961,`strong`),lO(2962,`(opcional)`),wg()(),jc(2963,`p`),lO(2964,`Define o formato de exibição do timer (`),jc(2965,`code`),lO(2966,`'12'`),wg(),lO(2967,` ou `),jc(2968,`code`),lO(2969,`'24'`),wg(),lO(2970,`).`),wg(),jc(2971,`p`)(2972,`strong`),lO(2973,`Componente compatível:`),wg(),jc(2974,`code`),lO(2975,`po-datetimepicker`),wg()()()(),jc(2976,`tr`,16)(2977,`td`,17)(2978,`div`,25)(2979,`span`,26),lO(2980,` gridColumns`),nu(2981,`br`),wg()()(),jc(2982,`td`,21)(2983,`code`,45),lO(2984,`number`),wg()(),jc(2985,`td`,24)(2986,`em`)(2987,`strong`),lO(2988,`(opcional)`),wg()(),jc(2989,`p`),lO(2990,`Tamanho de exibição do campo em telas.`),wg(),jc(2991,`p`),lO(2992,`Deve ser usado o sistema de `),jc(2993,`strong`),lO(2994,`grid`),wg(),lO(2995,` do PO (1 ... 12 colunas).`),wg(),jc(2996,`blockquote`)(2997,`p`),lO(2998,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(2999,`tr`,16)(3e3,`td`,17)(3001,`div`,25)(3002,`span`,26),lO(3003,` gridLgColumns`),nu(3004,`br`),wg()()(),jc(3005,`td`,21)(3006,`code`,45),lO(3007,`number`),wg()(),jc(3008,`td`,24)(3009,`em`)(3010,`strong`),lO(3011,`(opcional)`),wg()(),jc(3012,`p`),lO(3013,`Tamanho de exibição do campo em telas grandes (lg).`),wg(),jc(3014,`p`),lO(3015,`Deve ser usado o sistema de `),jc(3016,`strong`),lO(3017,`grid`),wg(),lO(3018,` do PO (1 ... 12 colunas).`),wg(),jc(3019,`blockquote`)(3020,`p`),lO(3021,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3022,`code`),lO(3023,`gridColumns`),wg(),lO(3024,`.`),wg()()()(),jc(3025,`tr`,16)(3026,`td`,17)(3027,`div`,25)(3028,`span`,26),lO(3029,` gridLgPull`),nu(3030,`br`),wg()()(),jc(3031,`td`,21)(3032,`code`,45),lO(3033,`number`),wg()(),jc(3034,`td`,24)(3035,`em`)(3036,`strong`),lO(3037,`(opcional)`),wg()(),jc(3038,`p`),lO(3039,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),wg(),jc(3040,`p`),lO(3041,`Deve ser usado o sistema de `),jc(3042,`strong`),lO(3043,`grid`),wg(),lO(3044,` do PO (1 ... 11 colunas).`),wg(),jc(3045,`blockquote`)(3046,`p`),lO(3047,`Esta propriedade não funciona com a propriedade `),jc(3048,`code`),lO(3049,`gridColumns`),wg(),lO(3050,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3051,`tr`,16)(3052,`td`,17)(3053,`div`,25)(3054,`span`,26),lO(3055,` gridMdColumns`),nu(3056,`br`),wg()()(),jc(3057,`td`,21)(3058,`code`,45),lO(3059,`number`),wg()(),jc(3060,`td`,24)(3061,`em`)(3062,`strong`),lO(3063,`(opcional)`),wg()(),jc(3064,`p`),lO(3065,`Tamanho de exibição do campo em telas médias (md).`),wg(),jc(3066,`p`),lO(3067,`Deve ser usado o sistema de `),jc(3068,`strong`),lO(3069,`grid`),wg(),lO(3070,` do PO (1 ... 12 colunas).`),wg(),jc(3071,`blockquote`)(3072,`p`),lO(3073,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3074,`code`),lO(3075,`gridColumns`),wg(),lO(3076,`.`),wg()()()(),jc(3077,`tr`,16)(3078,`td`,17)(3079,`div`,25)(3080,`span`,26),lO(3081,` gridMdPull`),nu(3082,`br`),wg()()(),jc(3083,`td`,21)(3084,`code`,45),lO(3085,`number`),wg()(),jc(3086,`td`,24)(3087,`em`)(3088,`strong`),lO(3089,`(opcional)`),wg()(),jc(3090,`p`),lO(3091,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),wg(),jc(3092,`p`),lO(3093,`Deve ser usado o sistema de `),jc(3094,`strong`),lO(3095,`grid`),wg(),lO(3096,` do PO (1 ... 11 colunas).`),wg(),jc(3097,`blockquote`)(3098,`p`),lO(3099,`Esta propriedade não funciona com a propriedade `),jc(3100,`code`),lO(3101,`gridColumns`),wg(),lO(3102,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3103,`tr`,16)(3104,`td`,17)(3105,`div`,25)(3106,`span`,26),lO(3107,` gridSmColumns`),nu(3108,`br`),wg()()(),jc(3109,`td`,21)(3110,`code`,45),lO(3111,`number`),wg()(),jc(3112,`td`,24)(3113,`em`)(3114,`strong`),lO(3115,`(opcional)`),wg()(),jc(3116,`p`),lO(3117,`Tamanho de exibição do campo em telas menores (sm).`),wg(),jc(3118,`p`),lO(3119,`Deve ser usado o sistema de `),jc(3120,`strong`),lO(3121,`grid`),wg(),lO(3122,` do PO (1 ... 12 colunas).`),wg(),jc(3123,`blockquote`)(3124,`p`),lO(3125,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3126,`code`),lO(3127,`gridColumns`),wg(),lO(3128,`.`),wg()()()(),jc(3129,`tr`,16)(3130,`td`,17)(3131,`div`,25)(3132,`span`,26),lO(3133,` gridSmPull`),nu(3134,`br`),wg()()(),jc(3135,`td`,21)(3136,`code`,45),lO(3137,`number`),wg()(),jc(3138,`td`,24)(3139,`em`)(3140,`strong`),lO(3141,`(opcional)`),wg()(),jc(3142,`p`),lO(3143,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),wg(),jc(3144,`p`),lO(3145,`Deve ser usado o sistema de `),jc(3146,`strong`),lO(3147,`grid`),wg(),lO(3148,` do PO (1 ... 11 colunas).`),wg(),jc(3149,`blockquote`)(3150,`p`),lO(3151,`Esta propriedade não funciona com a propriedade `),jc(3152,`code`),lO(3153,`gridColumns`),wg(),lO(3154,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3155,`tr`,16)(3156,`td`,17)(3157,`div`,25)(3158,`span`,26),lO(3159,` gridXlColumns`),nu(3160,`br`),wg()()(),jc(3161,`td`,21)(3162,`code`,45),lO(3163,`number`),wg()(),jc(3164,`td`,24)(3165,`em`)(3166,`strong`),lO(3167,`(opcional)`),wg()(),jc(3168,`p`),lO(3169,`Tamanho de exibição do campo em telas extra grandes (xl).`),wg(),jc(3170,`p`),lO(3171,`Deve ser usado o sistema de `),jc(3172,`strong`),lO(3173,`grid`),wg(),lO(3174,` do PO (1 ... 12 colunas).`),wg(),jc(3175,`blockquote`)(3176,`p`),lO(3177,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3178,`code`),lO(3179,`gridColumns`),wg(),lO(3180,`.`),wg()()()(),jc(3181,`tr`,16)(3182,`td`,17)(3183,`div`,25)(3184,`span`,26),lO(3185,` gridXlPull`),nu(3186,`br`),wg()()(),jc(3187,`td`,21)(3188,`code`,45),lO(3189,`number`),wg()(),jc(3190,`td`,24)(3191,`em`)(3192,`strong`),lO(3193,`(opcional)`),wg()(),jc(3194,`p`),lO(3195,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),wg(),jc(3196,`p`),lO(3197,`Deve ser usado o sistema de `),jc(3198,`strong`),lO(3199,`grid`),wg(),lO(3200,` do PO (1 ... 11 colunas).`),wg(),jc(3201,`blockquote`)(3202,`p`),lO(3203,`Esta propriedade não funciona com a propriedade `),jc(3204,`code`),lO(3205,`gridColumns`),wg(),lO(3206,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3207,`tr`,16)(3208,`td`,17)(3209,`div`,25)(3210,`span`,26),lO(3211,` headers`),nu(3212,`br`),wg()()(),jc(3213,`td`,21)(3214,`code`,55),lO(3215,`{ [name: string]: string `),wg(),jc(3216,`code`,56),lO(3217,` Array<string>;
}`),wg()(),jc(3218,`td`,24)(3219,`em`)(3220,`strong`),lO(3221,`(opcional)`),wg()(),jc(3222,`p`),lO(3223,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),wg(),jc(3224,`p`)(3225,`strong`),lO(3226,`Componente compatível`),wg(),lO(3227,`: `),jc(3228,`code`),lO(3229,`po-upload`),wg()()()(),jc(3230,`tr`,16)(3231,`td`,17)(3232,`div`,25)(3233,`span`,26),lO(3234,` help`),nu(3235,`br`),wg()()(),jc(3236,`td`,21)(3237,`code`,27),lO(3238,`string`),wg()(),jc(3239,`td`,24)(3240,`em`)(3241,`strong`),lO(3242,`(opcional)`),wg()(),jc(3243,`p`),lO(3244,`Texto de ajuda.`),wg()()(),jc(3245,`tr`,16)(3246,`td`,17)(3247,`div`,25)(3248,`span`,26),lO(3249,` helper`),nu(3250,`br`),wg()()(),jc(3251,`td`,21)(3252,`code`,27),lO(3253,`string `),wg(),jc(3254,`code`,38),lO(3255,` PoHelperOptions`),wg()(),jc(3256,`td`,24)(3257,`em`)(3258,`strong`),lO(3259,`(opcional)`),wg()(),jc(3260,`p`),lO(3261,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),wg()()(),jc(3262,`tr`,16)(3263,`td`,17)(3264,`div`,25)(3265,`span`,26),lO(3266,` hideLabelStatus`),nu(3267,`br`),wg()()(),jc(3268,`td`,21)(3269,`code`,29),lO(3270,`boolean`),wg()(),jc(3271,`td`,24)(3272,`em`)(3273,`strong`),lO(3274,`(opcional)`),wg()(),jc(3275,`p`),lO(3276,`Indica se o status do `),jc(3277,`code`),lO(3278,`model`),wg(),lO(3279,` será escondido visualmente ao lado do switch`),wg()()(),jc(3280,`tr`,16)(3281,`td`,17)(3282,`div`,25)(3283,`span`,26),lO(3284,` hidePasswordPeek`),nu(3285,`br`),wg()()(),jc(3286,`td`,21)(3287,`code`,29),lO(3288,`boolean`),wg()(),jc(3289,`td`,24)(3290,`em`)(3291,`strong`),lO(3292,`(opcional)`),wg()(),jc(3293,`p`),lO(3294,`Permite esconder a função de espiar a senha digitada no `),jc(3295,`code`),lO(3296,`po-password`),wg(),lO(3297,`.`),wg()()(),jc(3298,`tr`,16)(3299,`td`,17)(3300,`div`,25)(3301,`span`,26),lO(3302,` hideRestrictionsInfo`),nu(3303,`br`),wg()()(),jc(3304,`td`,21)(3305,`code`,29),lO(3306,`boolean`),wg()(),jc(3307,`td`,24)(3308,`em`)(3309,`strong`),lO(3310,`(opcional)`),wg()(),jc(3311,`p`),lO(3312,`Oculta visualmente as informações de restrições para o upload.`),wg(),jc(3313,`p`)(3314,`strong`),lO(3315,`Componente compatível`),wg(),lO(3316,`: `),jc(3317,`code`),lO(3318,`po-upload`),wg()()()(),jc(3319,`tr`,16)(3320,`td`,17)(3321,`div`,25)(3322,`span`,26),lO(3323,` hideSearch`),nu(3324,`br`),wg()()(),jc(3325,`td`,21)(3326,`code`,29),lO(3327,`boolean`),wg()(),jc(3328,`td`,24)(3329,`em`)(3330,`strong`),lO(3331,`(opcional)`),wg()(),jc(3332,`p`),lO(3333,`Esconde o campo de pesquisa existente dentro do dropdown do `),jc(3334,`code`),lO(3335,`po-multiselect`),wg(),lO(3336,`.`),wg()()(),jc(3337,`tr`,16)(3338,`td`,17)(3339,`div`,25)(3340,`span`,26),lO(3341,` hideSelectAll`),nu(3342,`br`),wg()()(),jc(3343,`td`,21)(3344,`code`,29),lO(3345,`boolean`),wg()(),jc(3346,`td`,24)(3347,`em`)(3348,`strong`),lO(3349,`(opcional)`),wg()(),jc(3350,`p`),lO(3351,`Indica se o campo "Selecionar todos" do `),jc(3352,`code`),lO(3353,`po-multiselect`),wg(),lO(3354,` será escondido.`),wg()()(),jc(3355,`tr`,16)(3356,`td`,17)(3357,`div`,25)(3358,`span`,26),lO(3359,` hideSelectButton`),nu(3360,`br`),wg()()(),jc(3361,`td`,21)(3362,`code`,29),lO(3363,`boolean`),wg()(),jc(3364,`td`,24)(3365,`em`)(3366,`strong`),lO(3367,`(opcional)`),wg()(),jc(3368,`p`),lO(3369,`Omite o botão de seleção de arquivos.`),wg(),jc(3370,`blockquote`)(3371,`p`),lO(3372,`Caso o valor definido seja `),jc(3373,`code`),lO(3374,`true`),wg(),lO(3375,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(3376,`code`),lO(3377,`selectFiles()`),wg(),lO(3378,` para seleção de arquivos.`),wg()(),jc(3379,`p`)(3380,`strong`),lO(3381,`Componente compatível`),wg(),lO(3382,`: `),jc(3383,`code`),lO(3384,`po-upload`),wg()()()(),jc(3385,`tr`,16)(3386,`td`,17)(3387,`div`,25)(3388,`span`,26),lO(3389,` hideSendButton`),nu(3390,`br`),wg()()(),jc(3391,`td`,21)(3392,`code`,29),lO(3393,`boolean`),wg()(),jc(3394,`td`,24)(3395,`em`)(3396,`strong`),lO(3397,`(opcional)`),wg()(),jc(3398,`p`),lO(3399,`Omite o botão de envio de arquivos.`),wg(),jc(3400,`blockquote`)(3401,`p`),lO(3402,`Caso o valor definido seja `),jc(3403,`code`),lO(3404,`true`),wg(),lO(3405,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(3406,`code`),lO(3407,`sendFiles()`),wg(),lO(3408,` para envio do(s) arquivo(s) selecionado(s).`),wg()(),jc(3409,`p`)(3410,`strong`),lO(3411,`Componente compatível`),wg(),lO(3412,`: `),jc(3413,`code`),lO(3414,`po-upload`),wg()()()(),jc(3415,`tr`,16)(3416,`td`,17)(3417,`div`,25)(3418,`span`,26),lO(3419,` icon`),nu(3420,`br`),wg()()(),jc(3421,`td`,21)(3422,`code`,27),lO(3423,`string `),wg(),jc(3424,`code`,57),lO(3425,` TemplateRef<void>`),wg()(),jc(3426,`td`,24)(3427,`em`)(3428,`strong`),lO(3429,`(opcional)`),wg()(),jc(3430,`p`),lO(3431,`Define o ícone que será exibido no início do campo.`),wg(),jc(3432,`blockquote`)(3433,`p`),lO(3434,`Esta propriedade só pode ser utilizado nos campos:`),wg()(),jc(3435,`ul`)(3436,`li`),lO(3437,`Input;`),wg(),jc(3438,`li`),lO(3439,`Number;`),wg(),jc(3440,`li`),lO(3441,`Decimal;`),wg(),jc(3442,`li`),lO(3443,`Combo;`),wg(),jc(3444,`li`),lO(3445,`Password;`),wg()(),jc(3446,`blockquote`)(3447,`p`),lO(3448,`Veja a disponibilidade de ícones em `),jc(3449,`a`,58),lO(3450,`biblioteca de ícones`),wg(),lO(3451,`.`),wg()()()(),jc(3452,`tr`,16)(3453,`td`,17)(3454,`div`,25)(3455,`span`,26),lO(3456,` infiniteScroll`),nu(3457,`br`),wg()()(),jc(3458,`td`,21)(3459,`code`,29),lO(3460,`boolean`),wg()(),jc(3461,`td`,24)(3462,`em`)(3463,`strong`),lO(3464,`(opcional)`),wg()(),jc(3465,`p`),lO(3466,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),wg(),jc(3467,`p`)(3468,`strong`),lO(3469,`Componentes compatíveis:`),wg(),jc(3470,`code`),lO(3471,`po-combo`),wg(),lO(3472,`, `),jc(3473,`code`),lO(3474,`po-lookup`),wg(),lO(3475,`.`),wg()()(),jc(3476,`tr`,16)(3477,`td`,17)(3478,`div`,25)(3479,`span`,26),lO(3480,` infiniteScrollDistance`),nu(3481,`br`),wg()()(),jc(3482,`td`,21)(3483,`code`,45),lO(3484,`number`),wg()(),jc(3485,`td`,24)(3486,`em`)(3487,`strong`),lO(3488,`(opcional)`),wg()(),jc(3489,`p`),lO(3490,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),jc(3491,`strong`),lO(3492,`Exemplos`),wg(),jc(3493,`code`),lO(3494,`{ infiniteScrollDistance: 80 }`),wg(),lO(3495,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),wg(),jc(3496,`p`)(3497,`strong`),lO(3498,`Componente compatível:`),wg(),jc(3499,`code`),lO(3500,`po-combo`),wg(),lO(3501,`.`),wg()()(),jc(3502,`tr`,16)(3503,`td`,17)(3504,`div`,25)(3505,`span`,26),lO(3506,` initValue`),nu(3507,`br`),wg()()(),jc(3508,`td`,21)(3509,`code`,33),lO(3510,`any`),wg()(),jc(3511,`td`,24)(3512,`em`)(3513,`strong`),lO(3514,`(opcional)`),wg()(),jc(3515,`p`),lO(3516,`Define um valor inicial para um filtro de busca avançada.`),wg(),jc(3517,`p`),lO(3518,`O valor será atribuído ao campo correspondente à propriedade `),jc(3519,`code`),lO(3520,`property`),wg(),lO(3521,` na primeira abertura da janela de
busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro, os campos passam a ser preenchidos com os valores filtrados,
preservando as altera\xE7\xF5es realizadas.`),wg()()(),jc(3522,`tr`,16)(3523,`td`,17)(3524,`div`,25)(3525,`span`,26),lO(3526,` invalidValue`),nu(3527,`br`),wg()()(),jc(3528,`td`,21)(3529,`code`,29),lO(3530,`boolean`),wg()(),jc(3531,`td`,24)(3532,`em`)(3533,`strong`),lO(3534,`(opcional)`),wg()(),jc(3535,`p`),lO(3536,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),jc(3537,`code`),lO(3538,`p-field-error-message`),wg(),lO(3539,`.`),wg(),jc(3540,`blockquote`)(3541,`p`),lO(3542,`Caso essa propriedade seja definida como `),jc(3543,`code`),lO(3544,`true`),wg(),lO(3545,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),wg()(),jc(3546,`p`)(3547,`strong`),lO(3548,`Componente compatível`),wg(),lO(3549,`: `),jc(3550,`code`),lO(3551,`po-switch`),wg()()()(),jc(3552,`tr`,16)(3553,`td`,17)(3554,`div`,25)(3555,`span`,26),lO(3556,` isoFormat`),nu(3557,`br`),wg()()(),jc(3558,`td`,21)(3559,`code`,59),lO(3560,`PoDatepickerIsoFormat`),wg()(),jc(3561,`td`,24)(3562,`em`)(3563,`strong`),lO(3564,`(opcional)`),wg()(),jc(3565,`p`),lO(3566,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),wg(),jc(3567,`blockquote`)(3568,`p`),lO(3569,`Veja os valores válidos no `),jc(3570,`code`),lO(3571,`PoDatepickerIsoFormat`),wg(),lO(3572,`.`),wg()(),jc(3573,`p`)(3574,`strong`),lO(3575,`Componente compatível:`),wg(),jc(3576,`code`),lO(3577,`po-datepicker`),wg()()()(),jc(3578,`tr`,16)(3579,`td`,17)(3580,`div`,25)(3581,`span`,26),lO(3582,` key`),nu(3583,`br`),wg()()(),jc(3584,`td`,21)(3585,`code`,29),lO(3586,`boolean`),wg()(),jc(3587,`td`,24)(3588,`em`)(3589,`strong`),lO(3590,`(opcional)`),wg()(),jc(3591,`p`),lO(3592,`Identificador`),wg()()(),jc(3593,`tr`,16)(3594,`td`,17)(3595,`div`,25)(3596,`span`,26),lO(3597,` keydown`),nu(3598,`br`),wg()()(),jc(3599,`td`,21)(3600,`code`,44),lO(3601,`Function`),wg()(),jc(3602,`td`,24)(3603,`em`)(3604,`strong`),lO(3605,`(opcional)`),wg()(),jc(3606,`p`),lO(3607,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(3608,`code`),lO(3609,`KeyboardEvent`),wg(),lO(3610,` com informações sobre a tecla.`),wg()()(),jc(3611,`tr`,16)(3612,`td`,17)(3613,`div`,25)(3614,`span`,26),lO(3615,` label`),nu(3616,`br`),wg()()(),jc(3617,`td`,21)(3618,`code`,27),lO(3619,`string`),wg()(),jc(3620,`td`,24)(3621,`em`)(3622,`strong`),lO(3623,`(opcional)`),wg()(),jc(3624,`p`),lO(3625,`Rótulo do campo exibido.`),wg(),jc(3626,`p`),lO(3627,`Caso não seja informado, será utilizado como `),jc(3628,`code`),lO(3629,`label`),wg(),lO(3630,` o valor da propriedade `),jc(3631,`code`),lO(3632,`property`),wg(),lO(3633,` com a primeira letra em maiúsculo.`),wg()()(),jc(3634,`tr`,16)(3635,`td`,17)(3636,`div`,25)(3637,`span`,26),lO(3638,` labelPosition`),nu(3639,`br`),wg()()(),jc(3640,`td`,21)(3641,`code`,60),lO(3642,`PoSwitchLabelPosition`),wg()(),jc(3643,`td`,24)(3644,`em`)(3645,`strong`),lO(3646,`(opcional)`),wg()(),jc(3647,`p`),lO(3648,`Posição de exibição do rótulo do PoSwitch.`),wg(),jc(3649,`blockquote`)(3650,`p`),lO(3651,`Por padrão exibe à direita.`),wg()()()(),jc(3652,`tr`,16)(3653,`td`,17)(3654,`div`,25)(3655,`span`,26),lO(3656,` listboxControlPosition`),nu(3657,`br`),wg()()(),jc(3658,`td`,21)(3659,`code`,61),lO(3660,`'top' `),wg(),jc(3661,`code`,62),lO(3662,` 'bottom'`),wg()(),jc(3663,`td`,24)(3664,`em`)(3665,`strong`),lO(3666,`(opcional)`),wg()(),jc(3667,`p`),lO(3668,`Define a direção preferida para exibição do `),jc(3669,`code`),lO(3670,`listbox`),wg(),lO(3671,` em relação ao campo (`),jc(3672,`code`),lO(3673,`top`),wg(),lO(3674,` ou `),jc(3675,`code`),lO(3676,`bottom`),wg(),lO(3677,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),wg(),jc(3678,`p`)(3679,`strong`),lO(3680,`Componentes compatíveis:`),wg(),jc(3681,`code`),lO(3682,`po-multiselect`),wg(),lO(3683,`, `),jc(3684,`code`),lO(3685,`po-combo`),wg(),lO(3686,`.`),wg()()(),jc(3687,`tr`,16)(3688,`td`,17)(3689,`div`,25)(3690,`span`,26),lO(3691,` literals`),nu(3692,`br`),wg()()(),jc(3693,`td`,21)(3694,`code`,36),lO(3695,`PoLookupLiterals `),wg(),jc(3696,`code`,63),lO(3697,` PoMultiselectLiterals `),wg(),jc(3698,`code`,64),lO(3699,` PoComboLiterals `),wg(),jc(3700,`code`,65),lO(3701,` PoDatepickerRangeLiterals `),wg(),jc(3702,`code`,66),lO(3703,` PoUploadLiterals`),wg()(),jc(3704,`td`,24)(3705,`em`)(3706,`strong`),lO(3707,`(opcional)`),wg()(),jc(3708,`p`),lO(3709,`Objeto com as literais usadas para os seguintes componentes: `),jc(3710,`code`),lO(3711,`po-lookup`),wg(),lO(3712,`, `),jc(3713,`code`),lO(3714,`po-multiselect`),wg(),lO(3715,`, `),jc(3716,`code`),lO(3717,`po-combo`),wg(),lO(3718,` e `),jc(3719,`code`),lO(3720,`po-datepicker-range`),wg(),lO(3721,`.`),wg(),jc(3722,`blockquote`)(3723,`p`),lO(3724,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),wg()(),jc(3725,`p`)(3726,`strong`),lO(3727,`Componentes compatíveis:`),wg(),jc(3728,`code`),lO(3729,`po-lookup`),wg(),lO(3730,`, `),jc(3731,`code`),lO(3732,`po-multiselect`),wg(),lO(3733,`, `),jc(3734,`code`),lO(3735,`po-combo`),wg(),lO(3736,`, `),jc(3737,`code`),lO(3738,`po-datepicker-range`),wg()()()(),jc(3739,`tr`,16)(3740,`td`,17)(3741,`div`,25)(3742,`span`,26),lO(3743,` loading`),nu(3744,`br`),wg()()(),jc(3745,`td`,21)(3746,`code`,29),lO(3747,`boolean`),wg()(),jc(3748,`td`,24)(3749,`em`)(3750,`strong`),lO(3751,`(opcional)`),wg()(),jc(3752,`p`),lO(3753,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),wg(),jc(3754,`blockquote`)(3755,`p`),lO(3756,`Por padrão é `),jc(3757,`code`),lO(3758,`false`),wg(),lO(3759,`.`),wg()(),jc(3760,`p`)(3761,`strong`),lO(3762,`Componentes compatíveis:`),wg(),jc(3763,`code`),lO(3764,`po-datepicker`),wg(),lO(3765,`, `),jc(3766,`code`),lO(3767,`po-datepicker-range`),wg(),lO(3768,`, `),jc(3769,`code`),lO(3770,`po-number`),wg(),lO(3771,`, `),jc(3772,`code`),lO(3773,`po-decimal`),wg(),lO(3774,`,
`),jc(3775,`code`),lO(3776,`po-input`),wg(),lO(3777,`, `),jc(3778,`code`),lO(3779,`po-select`),wg(),lO(3780,`, `),jc(3781,`code`),lO(3782,`po-switch`),wg(),lO(3783,`, `),jc(3784,`code`),lO(3785,`po-combo`),wg(),lO(3786,`, `),jc(3787,`code`),lO(3788,`po-lookup`),wg(),lO(3789,`, `),jc(3790,`code`),lO(3791,`po-multiselect`),wg(),lO(3792,`,
`),jc(3793,`code`),lO(3794,`po-textarea`),wg(),lO(3795,`, `),jc(3796,`code`),lO(3797,`po-password`),wg(),lO(3798,`, `),jc(3799,`code`),lO(3800,`po-upload`),wg(),lO(3801,`.`),wg()()(),jc(3802,`tr`,16)(3803,`td`,17)(3804,`div`,25)(3805,`span`,26),lO(3806,` locale`),nu(3807,`br`),wg()()(),jc(3808,`td`,21)(3809,`code`,27),lO(3810,`string`),wg()(),jc(3811,`td`,24)(3812,`em`)(3813,`strong`),lO(3814,`(opcional)`),wg()(),jc(3815,`p`),lO(3816,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),jc(3817,`a`,67)(3818,`code`),lO(3819,`I18n`),wg()()(),jc(3820,`p`),lO(3821,`Exemplo de utilização:`),wg(),jc(3822,`pre`)(3823,`code`),lO(3824,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),wg()(),jc(3825,`blockquote`)(3826,`p`),lO(3827,`Para ver quais linguagens suportadas acesse `),jc(3828,`a`,67)(3829,`code`),lO(3830,`I18n`),wg()()()(),jc(3831,`p`)(3832,`strong`),lO(3833,`Componentes compatíveis:`),wg(),jc(3834,`code`),lO(3835,`po-datepicker`),wg(),lO(3836,`, `),jc(3837,`code`),lO(3838,`po-decimal`),wg(),lO(3839,`, `),jc(3840,`code`),lO(3841,`po-timepicker`),wg(),lO(3842,`.`),wg()()(),jc(3843,`tr`,16)(3844,`td`,17)(3845,`div`,25)(3846,`span`,26),lO(3847,` mask`),nu(3848,`br`),wg()()(),jc(3849,`td`,21)(3850,`code`,27),lO(3851,`string`),wg()(),jc(3852,`td`,24)(3853,`em`)(3854,`strong`),lO(3855,`(opcional)`),wg()(),jc(3856,`p`),lO(3857,`Máscara para o campo.`),wg(),jc(3858,`p`)(3859,`strong`),lO(3860,`Componente compatível:`),wg(),jc(3861,`code`),lO(3862,`po-input`),wg(),lO(3863,`.`),wg(),jc(3864,`blockquote`)(3865,`p`),lO(3866,`também é atribuído ao utilizar a propriedade `),jc(3867,`code`),lO(3868,`type: time`),wg(),lO(3869,`.`),wg()(),jc(3870,`blockquote`)(3871,`p`),lO(3872,`Incompatível com `),jc(3873,`code`),lO(3874,`po-decimal`),wg(),lO(3875,`.`),wg()()()(),jc(3876,`tr`,16)(3877,`td`,17)(3878,`div`,25)(3879,`span`,26),lO(3880,` maskFormatModel`),nu(3881,`br`),wg()()(),jc(3882,`td`,21)(3883,`code`,29),lO(3884,`boolean`),wg()(),jc(3885,`td`,24)(3886,`em`)(3887,`strong`),lO(3888,`(opcional)`),wg()(),jc(3889,`p`),lO(3890,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),jc(3891,`code`),lO(3892,`false`),wg(),lO(3893,`.`),wg(),jc(3894,`p`)(3895,`strong`),lO(3896,`Componente compatível:`),wg(),jc(3897,`code`),lO(3898,`po-input`),wg(),lO(3899,`.`),wg(),jc(3900,`blockquote`)(3901,`p`),lO(3902,`também é atribuído ao utilizar a propriedade `),jc(3903,`code`),lO(3904,`type: time`),wg(),lO(3905,`.`),wg()()()(),jc(3906,`tr`,16)(3907,`td`,17)(3908,`div`,25)(3909,`span`,26),lO(3910,` maskNoLengthValidation`),nu(3911,`br`),wg()()(),jc(3912,`td`,21)(3913,`code`,29),lO(3914,`boolean`),wg()(),jc(3915,`td`,24)(3916,`em`)(3917,`strong`),lO(3918,`(opcional)`),wg()(),jc(3919,`p`),lO(3920,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(3921,`code`),lO(3922,`minLength`),wg(),lO(3923,`) e máximo (`),jc(3924,`code`),lO(3925,`maxLength`),wg(),lO(3926,`) quando há uma máscara (`),jc(3927,`code`),lO(3928,`p-mask`),wg(),lO(3929,`) definida.`),wg(),jc(3930,`ul`)(3931,`li`),lO(3932,`Quando `),jc(3933,`code`),lO(3934,`true`),wg(),lO(3935,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(3936,`li`),lO(3937,`Quando `),jc(3938,`code`),lO(3939,`false`),wg(),lO(3940,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(3941,`p`)(3942,`strong`),lO(3943,`Componentes compatíveis:`),wg(),jc(3944,`code`),lO(3945,`po-input`),wg(),lO(3946,`, `),jc(3947,`code`),lO(3948,`po-decimal`),wg(),lO(3949,`.`),wg(),jc(3950,`blockquote`)(3951,`p`),lO(3952,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(3953,`code`),lO(3954,`p-mask-format-model`),wg(),lO(3955,`.`),wg()(),jc(3956,`p`),lO(3957,`Exemplo:`),wg(),jc(3958,`pre`)(3959,`code`),lO(3960,`fields:Array<PoDynamicFormField> = [
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
`),wg()(),jc(3961,`ul`)(3962,`li`),lO(3963,`Entrada: `),jc(3964,`code`),lO(3965,`11.111.111/1111-11`),wg(),lO(3966,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),wg()()()(),jc(3967,`tr`,16)(3968,`td`,17)(3969,`div`,25)(3970,`span`,26),lO(3971,` maxLength`),nu(3972,`br`),wg()()(),jc(3973,`td`,21)(3974,`code`,45),lO(3975,`number`),wg()(),jc(3976,`td`,24)(3977,`em`)(3978,`strong`),lO(3979,`(opcional)`),wg()(),jc(3980,`p`),lO(3981,`Tamanho máximo de caracteres.`),wg(),jc(3982,`p`)(3983,`strong`),lO(3984,`Componentes compatíveis:`),wg(),jc(3985,`code`),lO(3986,`po-input`),wg(),lO(3987,`, `),jc(3988,`code`),lO(3989,`po-number`),wg(),lO(3990,`, `),jc(3991,`code`),lO(3992,`po-decimal`),wg(),lO(3993,`, `),jc(3994,`code`),lO(3995,`po-textarea`),wg(),lO(3996,`, `),jc(3997,`code`),lO(3998,`po-password`),wg(),lO(3999,`.`),wg()()(),jc(4e3,`tr`,16)(4001,`td`,17)(4002,`div`,25)(4003,`span`,26),lO(4004,` maxTime`),nu(4005,`br`),wg()()(),jc(4006,`td`,21)(4007,`code`,27),lO(4008,`string`),wg()(),jc(4009,`td`,24)(4010,`em`)(4011,`strong`),lO(4012,`(opcional)`),wg()(),jc(4013,`p`),lO(4014,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(4015,`code`),lO(4016,`HH:mm`),wg(),lO(4017,` ou `),jc(4018,`code`),lO(4019,`HH:mm:ss`),wg(),lO(4020,`.`),wg(),jc(4021,`p`)(4022,`strong`),lO(4023,`Componente compatível:`),wg(),jc(4024,`code`),lO(4025,`po-datetimepicker`),wg(),lO(4026,`, `),jc(4027,`code`),lO(4028,`po-timepicker`),wg()()()(),jc(4029,`tr`,16)(4030,`td`,17)(4031,`div`,25)(4032,`span`,26),lO(4033,` maxValue`),nu(4034,`br`),wg()()(),jc(4035,`td`,21)(4036,`code`,27),lO(4037,`string `),wg(),jc(4038,`code`,45),lO(4039,` number`),wg()(),jc(4040,`td`,24)(4041,`em`)(4042,`strong`),lO(4043,`(opcional)`),wg()(),jc(4044,`p`),lO(4045,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(4046,`em`),lO(4047,`number`),wg(),lO(4048,`, `),jc(4049,`em`),lO(4050,`date`),wg(),lO(4051,`, `),jc(4052,`em`),lO(4053,`dateTime`),wg(),lO(4054,` ou `),jc(4055,`em`),lO(4056,`time`),wg(),lO(4057,`.`),wg(),jc(4058,`blockquote`)(4059,`p`),lO(4060,`Para `),jc(4061,`code`),lO(4062,`po-timepicker`),wg(),lO(4063,`, o valor deve estar no formato `),jc(4064,`code`),lO(4065,`HH:mm`),wg(),lO(4066,` ou `),jc(4067,`code`),lO(4068,`HH:mm:ss`),wg(),lO(4069,`.`),wg()(),jc(4070,`p`)(4071,`strong`),lO(4072,`Componentes compatíveis:`),wg(),jc(4073,`code`),lO(4074,`po-datepicker`),wg(),lO(4075,`, `),jc(4076,`code`),lO(4077,`po-datepicker-range`),wg(),lO(4078,`, `),jc(4079,`code`),lO(4080,`po-number`),wg(),lO(4081,`, `),jc(4082,`code`),lO(4083,`po-decimal`),wg(),lO(4084,`, `),jc(4085,`code`),lO(4086,`po-timepicker`),wg()()()(),jc(4087,`tr`,16)(4088,`td`,17)(4089,`div`,25)(4090,`span`,26),lO(4091,` minLength`),nu(4092,`br`),wg()()(),jc(4093,`td`,21)(4094,`code`,45),lO(4095,`number`),wg()(),jc(4096,`td`,24)(4097,`em`)(4098,`strong`),lO(4099,`(opcional)`),wg()(),jc(4100,`p`),lO(4101,`Tamanho mínimo de caracteres.`),wg(),jc(4102,`p`)(4103,`strong`),lO(4104,`Componentes compatíveis:`),wg(),jc(4105,`code`),lO(4106,`po-input`),wg(),lO(4107,`, `),jc(4108,`code`),lO(4109,`po-number`),wg(),lO(4110,`, `),jc(4111,`code`),lO(4112,`po-decimal`),wg(),lO(4113,`, `),jc(4114,`code`),lO(4115,`po-textarea`),wg(),lO(4116,`, `),jc(4117,`code`),lO(4118,`po-password`),wg(),lO(4119,`.`),wg()()(),jc(4120,`tr`,16)(4121,`td`,17)(4122,`div`,25)(4123,`span`,26),lO(4124,` minTime`),nu(4125,`br`),wg()()(),jc(4126,`td`,21)(4127,`code`,27),lO(4128,`string`),wg()(),jc(4129,`td`,24)(4130,`em`)(4131,`strong`),lO(4132,`(opcional)`),wg()(),jc(4133,`p`),lO(4134,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(4135,`code`),lO(4136,`HH:mm`),wg(),lO(4137,` ou `),jc(4138,`code`),lO(4139,`HH:mm:ss`),wg(),lO(4140,`.`),wg(),jc(4141,`p`)(4142,`strong`),lO(4143,`Componente compatível:`),wg(),jc(4144,`code`),lO(4145,`po-datetimepicker`),wg(),lO(4146,`, `),jc(4147,`code`),lO(4148,`po-timepicker`),wg()()()(),jc(4149,`tr`,16)(4150,`td`,17)(4151,`div`,25)(4152,`span`,26),lO(4153,` minValue`),nu(4154,`br`),wg()()(),jc(4155,`td`,21)(4156,`code`,27),lO(4157,`string `),wg(),jc(4158,`code`,45),lO(4159,` number`),wg()(),jc(4160,`td`,24)(4161,`em`)(4162,`strong`),lO(4163,`(opcional)`),wg()(),jc(4164,`p`),lO(4165,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(4166,`em`),lO(4167,`number`),wg(),lO(4168,`, `),jc(4169,`em`),lO(4170,`date`),wg(),lO(4171,`, `),jc(4172,`em`),lO(4173,`dateTime`),wg(),lO(4174,` ou `),jc(4175,`em`),lO(4176,`time`),wg(),lO(4177,`.`),wg(),jc(4178,`blockquote`)(4179,`p`),lO(4180,`Para `),jc(4181,`code`),lO(4182,`po-timepicker`),wg(),lO(4183,`, o valor deve estar no formato `),jc(4184,`code`),lO(4185,`HH:mm`),wg(),lO(4186,` ou `),jc(4187,`code`),lO(4188,`HH:mm:ss`),wg(),lO(4189,`.`),wg()(),jc(4190,`p`)(4191,`strong`),lO(4192,`Componentes compatíveis:`),wg(),jc(4193,`code`),lO(4194,`po-datepicker`),wg(),lO(4195,`, `),jc(4196,`code`),lO(4197,`po-datepicker-range`),wg(),lO(4198,`, `),jc(4199,`code`),lO(4200,`po-number`),wg(),lO(4201,`, `),jc(4202,`code`),lO(4203,`po-decimal`),wg(),lO(4204,`, `),jc(4205,`code`),lO(4206,`po-timepicker`),wg()()()(),jc(4207,`tr`,16)(4208,`td`,17)(4209,`div`,25)(4210,`span`,26),lO(4211,` minuteInterval`),nu(4212,`br`),wg()()(),jc(4213,`td`,21)(4214,`code`,45),lO(4215,`number`),wg()(),jc(4216,`td`,24)(4217,`em`)(4218,`strong`),lO(4219,`(opcional)`),wg()(),jc(4220,`p`),lO(4221,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),wg()()(),jc(4222,`tr`,16)(4223,`td`,17)(4224,`div`,25)(4225,`span`,26),lO(4226,` mode`),nu(4227,`br`),wg()()(),jc(4228,`td`,21)(4229,`code`,68),lO(4230,`'month-year' `),wg(),jc(4231,`code`,69),lO(4232,` 'year'`),wg()(),jc(4233,`td`,24)(4234,`em`)(4235,`strong`),lO(4236,`(opcional)`),wg()(),jc(4237,`p`),lO(4238,`Define o modo de seleção do `),jc(4239,`code`),lO(4240,`po-datepicker`),wg(),lO(4241,`.`),wg(),jc(4242,`p`),lO(4243,`Valores aceitos:`),wg(),jc(4244,`ul`)(4245,`li`)(4246,`code`),lO(4247,`'month-year'`),wg(),lO(4248,`: exibe seleção de mês e ano (formato `),jc(4249,`code`),lO(4250,`MM/YYYY`),wg(),lO(4251,`)`),wg(),jc(4252,`li`)(4253,`code`),lO(4254,`'year'`),wg(),lO(4255,`: exibe seleção apenas de ano (formato `),jc(4256,`code`),lO(4257,`YYYY`),wg(),lO(4258,`)`),wg()(),jc(4259,`p`)(4260,`strong`),lO(4261,`Componente compatível:`),wg(),jc(4262,`code`),lO(4263,`po-datepicker`),wg()()()(),jc(4264,`tr`,16)(4265,`td`,17)(4266,`div`,25)(4267,`span`,26),lO(4268,` modelFormat`),nu(4269,`br`),wg()()(),jc(4270,`td`,21)(4271,`code`,70),lO(4272,`PoTimepickerModelFormat`),wg()(),jc(4273,`td`,24)(4274,`em`)(4275,`strong`),lO(4276,`(opcional)`),wg()(),jc(4277,`p`),lO(4278,`Define o formato do valor do horário a ser utilizado no model do `),jc(4279,`code`),lO(4280,`po-timepicker`),wg(),lO(4281,`.`),wg(),jc(4282,`blockquote`)(4283,`p`),lO(4284,`Veja os valores válidos no `),jc(4285,`code`),lO(4286,`PoTimepickerModelFormat`),wg(),lO(4287,`.`),wg()(),jc(4288,`p`)(4289,`strong`),lO(4290,`Componente compatível:`),wg(),jc(4291,`code`),lO(4292,`po-timepicker`),wg()()()(),jc(4293,`tr`,16)(4294,`td`,17)(4295,`div`,25)(4296,`span`,26),lO(4297,` multiple`),nu(4298,`br`),wg()()(),jc(4299,`td`,21)(4300,`code`,29),lO(4301,`boolean`),wg()(),jc(4302,`td`,24)(4303,`em`)(4304,`strong`),lO(4305,`(opcional)`),wg()(),jc(4306,`p`),lO(4307,`Permite a seleção de múltiplos itens.`),wg(),jc(4308,`p`)(4309,`strong`),lO(4310,`Componentes compatíveis:`),wg(),jc(4311,`code`),lO(4312,`po-lookup`),wg(),lO(4313,`, `),jc(4314,`code`),lO(4315,`po-upload`),wg()()()(),jc(4316,`tr`,16)(4317,`td`,17)(4318,`div`,25)(4319,`span`,26),lO(4320,` noAutocomplete`),nu(4321,`br`),wg()()(),jc(4322,`td`,21)(4323,`code`,29),lO(4324,`boolean`),wg()(),jc(4325,`td`,24)(4326,`em`)(4327,`strong`),lO(4328,`(opcional)`),wg()(),jc(4329,`p`),lO(4330,`Define a propriedade nativa `),jc(4331,`code`),lO(4332,`autocomplete`),wg(),lO(4333,` do campo como off.`),wg(),jc(4334,`p`)(4335,`strong`),lO(4336,`Componentes compatíveis:`),wg(),jc(4337,`code`),lO(4338,`po-datepicker`),wg(),lO(4339,`, `),jc(4340,`code`),lO(4341,`po-datepicker-range`),wg(),lO(4342,`, `),jc(4343,`code`),lO(4344,`po-input`),wg(),lO(4345,`, `),jc(4346,`code`),lO(4347,`po-number`),wg(),lO(4348,`, `),jc(4349,`code`),lO(4350,`po-decimal`),wg(),lO(4351,`,
`),jc(4352,`code`),lO(4353,`po-lookup`),wg(),lO(4354,`, `),jc(4355,`code`),lO(4356,`po-password`),wg(),lO(4357,`, `),jc(4358,`code`),lO(4359,`po-timepicker`),wg(),lO(4360,`.`),wg()()(),jc(4361,`tr`,16)(4362,`td`,17)(4363,`div`,25)(4364,`span`,26),lO(4365,` offsetColumns`),nu(4366,`br`),wg()()(),jc(4367,`td`,21)(4368,`code`,45),lO(4369,`number`),wg()(),jc(4370,`td`,24)(4371,`em`)(4372,`strong`),lO(4373,`(opcional)`),wg()(),jc(4374,`p`),lO(4375,`Tamanho do espaço de exibição do campo em telas.`),wg(),jc(4376,`p`),lO(4377,`Deve ser usado o sistema de `),jc(4378,`strong`),lO(4379,`grid`),wg(),lO(4380,` do PO (1 ... 12 colunas).`),wg(),jc(4381,`blockquote`)(4382,`p`),lO(4383,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(4384,`tr`,16)(4385,`td`,17)(4386,`div`,25)(4387,`span`,26),lO(4388,` offsetLgColumns`),nu(4389,`br`),wg()()(),jc(4390,`td`,21)(4391,`code`,45),lO(4392,`number`),wg()(),jc(4393,`td`,24)(4394,`em`)(4395,`strong`),lO(4396,`(opcional)`),wg()(),jc(4397,`p`),lO(4398,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),wg(),jc(4399,`p`),lO(4400,`Deve ser usado o sistema de `),jc(4401,`strong`),lO(4402,`grid`),wg(),lO(4403,` do PO (1 ... 12 colunas).`),wg(),jc(4404,`blockquote`)(4405,`p`),lO(4406,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4407,`code`),lO(4408,`offsetColumns`),wg(),lO(4409,`.`),wg()()()(),jc(4410,`tr`,16)(4411,`td`,17)(4412,`div`,25)(4413,`span`,26),lO(4414,` offsetMdColumns`),nu(4415,`br`),wg()()(),jc(4416,`td`,21)(4417,`code`,45),lO(4418,`number`),wg()(),jc(4419,`td`,24)(4420,`em`)(4421,`strong`),lO(4422,`(opcional)`),wg()(),jc(4423,`p`),lO(4424,`Tamanho do espaço de exibição do campo em telas médias (md).`),wg(),jc(4425,`p`),lO(4426,`Deve ser usado o sistema de `),jc(4427,`strong`),lO(4428,`grid`),wg(),lO(4429,` do PO (1 ... 12 colunas).`),wg(),jc(4430,`blockquote`)(4431,`p`),lO(4432,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4433,`code`),lO(4434,`offsetColumns`),wg(),lO(4435,`.`),wg()()()(),jc(4436,`tr`,16)(4437,`td`,17)(4438,`div`,25)(4439,`span`,26),lO(4440,` offsetSmColumns`),nu(4441,`br`),wg()()(),jc(4442,`td`,21)(4443,`code`,45),lO(4444,`number`),wg()(),jc(4445,`td`,24)(4446,`em`)(4447,`strong`),lO(4448,`(opcional)`),wg()(),jc(4449,`p`),lO(4450,`Tamanho do espaço de exibição do campo em telas menores (sm).`),wg(),jc(4451,`p`),lO(4452,`Deve ser usado o sistema de `),jc(4453,`strong`),lO(4454,`grid`),wg(),lO(4455,` do PO (1 ... 12 colunas).`),wg(),jc(4456,`blockquote`)(4457,`p`),lO(4458,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4459,`code`),lO(4460,`offsetColumns`),wg(),lO(4461,`.`),wg()()()(),jc(4462,`tr`,16)(4463,`td`,17)(4464,`div`,25)(4465,`span`,26),lO(4466,` offsetXlColumns`),nu(4467,`br`),wg()()(),jc(4468,`td`,21)(4469,`code`,45),lO(4470,`number`),wg()(),jc(4471,`td`,24)(4472,`em`)(4473,`strong`),lO(4474,`(opcional)`),wg()(),jc(4475,`p`),lO(4476,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),wg(),jc(4477,`p`),lO(4478,`Deve ser usado o sistema de `),jc(4479,`strong`),lO(4480,`grid`),wg(),lO(4481,` do PO (1 ... 12 colunas).`),wg(),jc(4482,`blockquote`)(4483,`p`),lO(4484,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4485,`code`),lO(4486,`offsetColumns`),wg(),lO(4487,`.`),wg()()()(),jc(4488,`tr`,16)(4489,`td`,17)(4490,`div`,25)(4491,`span`,26),lO(4492,` onError`),nu(4493,`br`),wg()()(),jc(4494,`td`,21)(4495,`code`,44),lO(4496,`Function`),wg()(),jc(4497,`td`,24)(4498,`em`)(4499,`strong`),lO(4500,`(opcional)`),wg()(),jc(4501,`p`),lO(4502,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),wg(),jc(4503,`blockquote`)(4504,`p`),lO(4505,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(4506,`code`),lO(4507,`HttpErrorResponse`),wg(),lO(4508,`.`),wg()(),jc(4509,`p`)(4510,`strong`),lO(4511,`Componente compatível`),wg(),lO(4512,`: `),jc(4513,`code`),lO(4514,`po-upload`),wg()()()(),jc(4515,`tr`,16)(4516,`td`,17)(4517,`div`,25)(4518,`span`,26),lO(4519,` onSuccess`),nu(4520,`br`),wg()()(),jc(4521,`td`,21)(4522,`code`,44),lO(4523,`Function`),wg()(),jc(4524,`td`,24)(4525,`em`)(4526,`strong`),lO(4527,`(opcional)`),wg()(),jc(4528,`p`),lO(4529,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),wg(),jc(4530,`blockquote`)(4531,`p`),lO(4532,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(4533,`code`),lO(4534,`HttpResponse`),wg(),lO(4535,`.`),wg()(),jc(4536,`p`)(4537,`strong`),lO(4538,`Componente compatível`),wg(),lO(4539,`: `),jc(4540,`code`),lO(4541,`po-upload`),wg()()()(),jc(4542,`tr`,16)(4543,`td`,17)(4544,`div`,25)(4545,`span`,26),lO(4546,` onUpload`),nu(4547,`br`),wg()()(),jc(4548,`td`,21)(4549,`code`,44),lO(4550,`Function`),wg()(),jc(4551,`td`,24)(4552,`em`)(4553,`strong`),lO(4554,`(opcional)`),wg()(),jc(4555,`p`),lO(4556,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),wg(),jc(4557,`pre`)(4558,`code`),lO(4559,`event.data = {id: 'id do usu\xE1rio'};
`),wg()(),jc(4560,`p`)(4561,`strong`),lO(4562,`Componente compatível`),wg(),lO(4563,`: `),jc(4564,`code`),lO(4565,`po-upload`),wg()()()(),jc(4566,`tr`,16)(4567,`td`,17)(4568,`div`,25)(4569,`span`,26),lO(4570,` optional`),nu(4571,`br`),wg()()(),jc(4572,`td`,21)(4573,`code`,29),lO(4574,`boolean`),wg()(),jc(4575,`td`,24)(4576,`em`)(4577,`strong`),lO(4578,`(opcional)`),wg()(),jc(4579,`p`),lO(4580,`Define se a indicação de campo opcional será exibida.`),wg(),jc(4581,`blockquote`)(4582,`p`),lO(4583,`A indicação não será exibida, se:`),wg()(),jc(4584,`ul`)(4585,`li`),lO(4586,`O campo for `),jc(4587,`code`),lO(4588,`required`),wg(),lO(4589,`, ou;`),wg(),jc(4590,`li`),lO(4591,`Não possuir `),jc(4592,`code`),lO(4593,`help`),wg(),lO(4594,` e `),jc(4595,`code`),lO(4596,`label`),wg(),lO(4597,`.`),wg()(),jc(4598,`p`)(4599,`strong`),lO(4600,`Componentes compatíveis:`),wg(),jc(4601,`code`),lO(4602,`po-datepicker`),wg(),lO(4603,`, `),jc(4604,`code`),lO(4605,`po-datepicker-range`),wg(),lO(4606,`, `),jc(4607,`code`),lO(4608,`po-timepicker`),wg(),lO(4609,`, `),jc(4610,`code`),lO(4611,`po-input`),wg(),lO(4612,`, `),jc(4613,`code`),lO(4614,`po-number`),wg(),lO(4615,`,
`),jc(4616,`code`),lO(4617,`po-decimal`),wg(),lO(4618,`, `),jc(4619,`code`),lO(4620,`po-select`),wg(),lO(4621,`, `),jc(4622,`code`),lO(4623,`po-radio-group`),wg(),lO(4624,`, `),jc(4625,`code`),lO(4626,`po-combo`),wg(),lO(4627,`, `),jc(4628,`code`),lO(4629,`po-lookup`),wg(),lO(4630,`, `),jc(4631,`code`),lO(4632,`po-checkbox-group`),wg(),lO(4633,`, `),jc(4634,`code`),lO(4635,`po-multiselect`),wg(),lO(4636,`,
`),jc(4637,`code`),lO(4638,`po-textarea`),wg(),lO(4639,`, `),jc(4640,`code`),lO(4641,`po-password`),wg(),lO(4642,`.`),wg()()(),jc(4643,`tr`,16)(4644,`td`,17)(4645,`div`,25)(4646,`span`,26),lO(4647,` options`),nu(4648,`br`),wg()()(),jc(4649,`td`,21)(4650,`code`,32),lO(4651,`Array<string> `),wg(),jc(4652,`code`,71),lO(4653,` Array<PoSelectOption> `),wg(),jc(4654,`code`,72),lO(4655,` Array<PoMultiselectOption> `),wg(),jc(4656,`code`,73),lO(4657,` Array<PoCheckboxGroupOption> `),wg(),jc(4658,`code`,74),lO(4659,` Array<any>`),wg()(),jc(4660,`td`,24)(4661,`em`)(4662,`strong`),lO(4663,`(opcional)`),wg()(),jc(4664,`p`),lO(4665,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),wg(),jc(4666,`p`)(4667,`strong`),lO(4668,`Componentes compatíveis:`),wg(),jc(4669,`code`),lO(4670,`po-select`),wg(),lO(4671,`, `),jc(4672,`code`),lO(4673,`po-radio-group`),wg(),lO(4674,`, `),jc(4675,`code`),lO(4676,`po-checkbox-group`),wg(),lO(4677,`, `),jc(4678,`code`),lO(4679,`po-multiselect`),wg(),lO(4680,`.`),wg()()(),jc(4681,`tr`,16)(4682,`td`,17)(4683,`div`,25)(4684,`span`,26),lO(4685,` optionsMulti`),nu(4686,`br`),wg()()(),jc(4687,`td`,21)(4688,`code`,29),lO(4689,`boolean`),wg()(),jc(4690,`td`,24)(4691,`em`)(4692,`strong`),lO(4693,`(opcional)`),wg()(),jc(4694,`p`),lO(4695,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),wg()()(),jc(4696,`tr`,16)(4697,`td`,17)(4698,`div`,25)(4699,`span`,26),lO(4700,` optionsService`),nu(4701,`br`),wg()()(),jc(4702,`td`,21)(4703,`code`,27),lO(4704,`string `),wg(),jc(4705,`code`,75),lO(4706,` PoComboFilter `),wg(),jc(4707,`code`,76),lO(4708,` PoMultiselectFilter`),wg()(),jc(4709,`td`,24)(4710,`em`)(4711,`strong`),lO(4712,`(opcional)`),wg()(),jc(4713,`p`),lO(4714,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),jc(4715,`strong`),lO(4716,`Importante`),wg()(),jc(4717,`blockquote`)(4718,`p`),lO(4719,`Para que funcione corretamente, é importante que o serviço siga o `),jc(4720,`a`,7),lO(4721,`guia de API do PO UI`),wg(),lO(4722,`.`),wg()()()(),jc(4723,`tr`,16)(4724,`td`,17)(4725,`div`,25)(4726,`span`,26),lO(4727,` order`),nu(4728,`br`),wg()()(),jc(4729,`td`,21)(4730,`code`,45),lO(4731,`number`),wg()(),jc(4732,`td`,24)(4733,`em`)(4734,`strong`),lO(4735,`(opcional)`),wg()(),jc(4736,`p`),lO(4737,`Informa a ordem de exibição do campo.`),wg(),jc(4738,`p`),lO(4739,`Exemplo de utilização:`),wg(),jc(4740,`p`)(4741,`code`),lO(4742,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),wg()(),jc(4743,`p`),lO(4744,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),jc(4745,`code`),lO(4746,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),wg()(),jc(4747,`p`),lO(4748,`Só serão aceitos valores com números inteiros maiores do que zero.`),wg(),jc(4749,`p`),lO(4750,`Campos sem `),jc(4751,`code`),lO(4752,`order`),wg(),lO(4753,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),wg()()(),jc(4754,`tr`,16)(4755,`td`,17)(4756,`div`,25)(4757,`span`,26),lO(4758,` params`),nu(4759,`br`),wg()()(),jc(4760,`td`,21)(4761,`code`,33),lO(4762,`any`),wg()(),jc(4763,`td`,24)(4764,`em`)(4765,`strong`),lO(4766,`(opcional)`),wg()(),jc(4767,`p`),lO(4768,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),jc(4769,`code`),lO(4770,`po-lookup`),wg(),lO(4771,` e
`),jc(4772,`code`),lO(4773,`po-combo`),wg(),lO(4774,`.`),wg(),jc(4775,`p`),lO(4776,`Por exemplo, para o parâmetro `),jc(4777,`code`),lO(4778,`{ age: 23 }`),wg(),lO(4779,` a URL da requisição ficaria:`),wg(),jc(4780,`p`)(4781,`code`),lO(4782,`url + ?age=23&filter=Peter`),wg()()()(),jc(4783,`tr`,16)(4784,`td`,17)(4785,`div`,25)(4786,`span`,26),lO(4787,` pattern`),nu(4788,`br`),wg()()(),jc(4789,`td`,21)(4790,`code`,27),lO(4791,`string`),wg()(),jc(4792,`td`,24)(4793,`em`)(4794,`strong`),lO(4795,`(opcional)`),wg()(),jc(4796,`p`),lO(4797,`Regex para validação do campo.`),wg(),jc(4798,`p`)(4799,`strong`),lO(4800,`Componentes compatíveis:`),wg(),jc(4801,`code`),lO(4802,`po-input`),wg(),lO(4803,`, `),jc(4804,`code`),lO(4805,`po-password`),wg(),lO(4806,`.`),wg(),jc(4807,`blockquote`)(4808,`p`),lO(4809,`Incompatível com `),jc(4810,`code`),lO(4811,`po-decimal`),wg(),lO(4812,`.`),wg()()()(),jc(4813,`tr`,16)(4814,`td`,17)(4815,`div`,25)(4816,`span`,26),lO(4817,` placeholder`),nu(4818,`br`),wg()()(),jc(4819,`td`,21)(4820,`code`,27),lO(4821,`string`),wg()(),jc(4822,`td`,24)(4823,`em`)(4824,`strong`),lO(4825,`(opcional)`),wg()(),jc(4826,`p`),lO(4827,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),wg(),jc(4828,`p`)(4829,`strong`),lO(4830,`Componentes compatíveis:`),wg(),jc(4831,`code`),lO(4832,`po-datepicker`),wg(),lO(4833,`, `),jc(4834,`code`),lO(4835,`po-datepicker-range`),wg(),lO(4836,`, `),jc(4837,`code`),lO(4838,`po-timepicker`),wg(),lO(4839,`, `),jc(4840,`code`),lO(4841,`po-input`),wg(),lO(4842,`, `),jc(4843,`code`),lO(4844,`po-number`),wg(),lO(4845,`, `),jc(4846,`code`),lO(4847,`po-decimal`),wg(),lO(4848,`, `),jc(4849,`code`),lO(4850,`po-select`),wg(),lO(4851,`, `),jc(4852,`code`),lO(4853,`po-combo`),wg(),lO(4854,`, `),jc(4855,`code`),lO(4856,`po-lookup`),wg(),lO(4857,`, `),jc(4858,`code`),lO(4859,`po-multiselect`),wg(),lO(4860,`, `),jc(4861,`code`),lO(4862,`po-textarea`),wg(),lO(4863,`, `),jc(4864,`code`),lO(4865,`po-password`),wg(),lO(4866,`.`),wg()()(),jc(4867,`tr`,16)(4868,`td`,17)(4869,`div`,25)(4870,`span`,26),lO(4871,` placeholderSearch`),nu(4872,`br`),wg()()(),jc(4873,`td`,21)(4874,`code`,27),lO(4875,`string`),wg()(),jc(4876,`td`,24)(4877,`em`)(4878,`strong`),lO(4879,`(opcional)`),wg()(),jc(4880,`p`),lO(4881,`Placeholder do campo de pesquisa do `),jc(4882,`code`),lO(4883,`po-multiselect`),wg(),lO(4884,`.`),wg(),jc(4885,`blockquote`)(4886,`p`),lO(4887,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),wg()()()(),jc(4888,`tr`,16)(4889,`td`,17)(4890,`div`,25)(4891,`span`,26),lO(4892,` property`),nu(4893,`br`),wg()()(),jc(4894,`td`,21)(4895,`code`,27),lO(4896,`string`),wg()(),jc(4897,`td`,24)(4898,`p`),lO(4899,`Nome de referência do campo.`),wg()()(),jc(4900,`tr`,16)(4901,`td`,17)(4902,`div`,25)(4903,`span`,26),lO(4904,` range`),nu(4905,`br`),wg()()(),jc(4906,`td`,21)(4907,`code`,29),lO(4908,`boolean`),wg()(),jc(4909,`td`,24)(4910,`em`)(4911,`strong`),lO(4912,`(opcional)`),wg()(),jc(4913,`p`),lO(4914,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),wg(),jc(4915,`blockquote`)(4916,`p`),lO(4917,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),wg()()()(),jc(4918,`tr`,16)(4919,`td`,17)(4920,`div`,25)(4921,`span`,26),lO(4922,` rangePresetOptions`),nu(4923,`br`),wg()()(),jc(4924,`td`,21)(4925,`code`,77),lO(4926,`Array<PoCalendarRangePreset>`),wg()(),jc(4927,`td`,24)(4928,`em`)(4929,`strong`),lO(4930,`(opcional)`),wg()(),jc(4931,`p`),lO(4932,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),wg(),jc(4933,`p`),lO(4934,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),jc(4935,`code`),lO(4936,`PoCalendarRangePreset`),wg(),lO(4937,`.`),wg(),jc(4938,`p`)(4939,`strong`),lO(4940,`Componente compatível:`),wg(),jc(4941,`code`),lO(4942,`po-datepicker-range`),wg()()()(),jc(4943,`tr`,16)(4944,`td`,17)(4945,`div`,25)(4946,`span`,26),lO(4947,` rangePresets`),nu(4948,`br`),wg()()(),jc(4949,`td`,21)(4950,`code`,29),lO(4951,`boolean `),wg(),jc(4952,`code`,32),lO(4953,` Array<string>`),wg()(),jc(4954,`td`,24)(4955,`em`)(4956,`strong`),lO(4957,`(opcional)`),wg()(),jc(4958,`p`),lO(4959,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),wg(),jc(4960,`p`),lO(4961,`Aceita os seguintes valores:`),wg(),jc(4962,`ul`)(4963,`li`)(4964,`code`),lO(4965,`true`),wg(),lO(4966,`: exibe todos os presets padrão.`),wg(),jc(4967,`li`)(4968,`code`),lO(4969,`false`),wg(),lO(4970,`: não exibe os presets padrão.`),wg(),jc(4971,`li`)(4972,`code`),lO(4973,`Array<string>`),wg(),lO(4974,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),wg()(),jc(4975,`p`)(4976,`strong`),lO(4977,`Componente compatível:`),wg(),jc(4978,`code`),lO(4979,`po-datepicker-range`),wg()()()(),jc(4980,`tr`,16)(4981,`td`,17)(4982,`div`,25)(4983,`span`,26),lO(4984,` rangePresetsOrder`),nu(4985,`br`),wg()()(),jc(4986,`td`,21)(4987,`code`,78),lO(4988,`'asc' `),wg(),jc(4989,`code`,79),lO(4990,` 'desc'`),wg()(),jc(4991,`td`,24)(4992,`em`)(4993,`strong`),lO(4994,`(opcional)`),wg()(),jc(4995,`p`),lO(4996,`Define a ordenação dos presets na lista.`),wg(),jc(4997,`p`),lO(4998,`Valores aceitos:`),wg(),jc(4999,`ul`)(5e3,`li`)(5001,`code`),lO(5002,`'asc'`),wg(),lO(5003,`: ordenação crescente (passado → futuro)`),wg(),jc(5004,`li`)(5005,`code`),lO(5006,`'desc'`),wg(),lO(5007,`: ordenação decrescente (futuro → passado)`),wg()(),jc(5008,`p`)(5009,`strong`),lO(5010,`Componente compatível:`),wg(),jc(5011,`code`),lO(5012,`po-datepicker-range`),wg()()()(),jc(5013,`tr`,16)(5014,`td`,17)(5015,`div`,25)(5016,`span`,26),lO(5017,` readonly`),nu(5018,`br`),wg()()(),jc(5019,`td`,21)(5020,`code`,29),lO(5021,`boolean`),wg()(),jc(5022,`td`,24)(5023,`em`)(5024,`strong`),lO(5025,`(opcional)`),wg()(),jc(5026,`p`),lO(5027,`Indica que o campo será somente leitura.`),wg(),jc(5028,`p`)(5029,`strong`),lO(5030,`Componentes compatíveis:`),wg(),jc(5031,`code`),lO(5032,`po-datepicker`),wg(),lO(5033,`, `),jc(5034,`code`),lO(5035,`po-datepicker-range`),wg(),lO(5036,`, `),jc(5037,`code`),lO(5038,`po-timepicker`),wg(),lO(5039,`, `),jc(5040,`code`),lO(5041,`po-input`),wg(),lO(5042,`, `),jc(5043,`code`),lO(5044,`po-number`),wg(),lO(5045,`,
`),jc(5046,`code`),lO(5047,`po-decimal`),wg(),lO(5048,`, `),jc(5049,`code`),lO(5050,`po-select`),wg(),lO(5051,`, `),jc(5052,`code`),lO(5053,`po-textarea`),wg(),lO(5054,`, `),jc(5055,`code`),lO(5056,`po-password`),wg(),lO(5057,`.`),wg()()(),jc(5058,`tr`,16)(5059,`td`,17)(5060,`div`,25)(5061,`span`,26),lO(5062,` removeInitialFilter`),nu(5063,`br`),wg()()(),jc(5064,`td`,21)(5065,`code`,29),lO(5066,`boolean`),wg()(),jc(5067,`td`,24)(5068,`em`)(5069,`strong`),lO(5070,`(opcional)`),wg()(),jc(5071,`p`),lO(5072,`Define que o filtro no primeiro clique será removido.`),wg(),jc(5073,`blockquote`)(5074,`p`),lO(5075,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),wg()(),jc(5076,`p`)(5077,`strong`),lO(5078,`Componente compatível`),wg(),lO(5079,`: `),jc(5080,`code`),lO(5081,`po-combo`),wg()()()(),jc(5082,`tr`,16)(5083,`td`,17)(5084,`div`,25)(5085,`span`,26),lO(5086,` required`),nu(5087,`br`),wg()()(),jc(5088,`td`,21)(5089,`code`,29),lO(5090,`boolean`),wg()(),jc(5091,`td`,24)(5092,`em`)(5093,`strong`),lO(5094,`(opcional)`),wg()(),jc(5095,`p`),lO(5096,`Define a obrigatoriedade do campo.`),wg(),jc(5097,`p`)(5098,`strong`),lO(5099,`Componentes compatíveis:`),wg(),jc(5100,`code`),lO(5101,`po-datepicker`),wg(),lO(5102,`, `),jc(5103,`code`),lO(5104,`po-datepicker-range`),wg(),lO(5105,`, `),jc(5106,`code`),lO(5107,`po-timepicker`),wg(),lO(5108,`, `),jc(5109,`code`),lO(5110,`po-input`),wg(),lO(5111,`, `),jc(5112,`code`),lO(5113,`po-number`),wg(),lO(5114,`,
`),jc(5115,`code`),lO(5116,`po-decimal`),wg(),lO(5117,`, `),jc(5118,`code`),lO(5119,`po-select`),wg(),lO(5120,`, `),jc(5121,`code`),lO(5122,`po-radio-group`),wg(),lO(5123,`, `),jc(5124,`code`),lO(5125,`po-combo`),wg(),lO(5126,`, `),jc(5127,`code`),lO(5128,`po-lookup`),wg(),lO(5129,`, `),jc(5130,`code`),lO(5131,`po-checkbox-group`),wg(),lO(5132,`, `),jc(5133,`code`),lO(5134,`po-multiselect`),wg(),lO(5135,`,
`),jc(5136,`code`),lO(5137,`po-textarea`),wg(),lO(5138,`, `),jc(5139,`code`),lO(5140,"po-password``, "),wg(),lO(5141,"po-upload`."),wg()()(),jc(5142,`tr`,16)(5143,`td`,17)(5144,`div`,25)(5145,`span`,26),lO(5146,` requiredFieldErrorMessage`),nu(5147,`br`),wg()()(),jc(5148,`td`,21)(5149,`code`,29),lO(5150,`boolean`),wg()(),jc(5151,`td`,24)(5152,`em`)(5153,`strong`),lO(5154,`(opcional)`),wg()(),jc(5155,`p`),lO(5156,`Exibe a mensagem setada na propriedade `),jc(5157,`code`),lO(5158,`errorMessage`),wg(),lO(5159,` se o campo estiver vazio e for requerido.`),wg(),jc(5160,`blockquote`)(5161,`p`),lO(5162,`Necessário que a propriedade `),jc(5163,`code`),lO(5164,`required`),wg(),lO(5165,` esteja habilitada.`),wg()(),jc(5166,`p`)(5167,`strong`),lO(5168,`Componentes compatíveis:`),wg(),jc(5169,`code`),lO(5170,`po-datepicker`),wg(),lO(5171,`, `),jc(5172,`code`),lO(5173,`po-timepicker`),wg(),lO(5174,`, `),jc(5175,`code`),lO(5176,`po-input`),wg(),lO(5177,`, `),jc(5178,`code`),lO(5179,`po-number`),wg(),lO(5180,`, `),jc(5181,`code`),lO(5182,`po-decimal`),wg(),lO(5183,`, `),jc(5184,`code`),lO(5185,`po-password`),wg(),lO(5186,`.`),wg()()(),jc(5187,`tr`,16)(5188,`td`,17)(5189,`div`,25)(5190,`span`,26),lO(5191,` restrictions`),nu(5192,`br`),wg()()(),jc(5193,`td`,21)(5194,`code`,80),lO(5195,`PoUploadFileRestrictions`),wg()(),jc(5196,`td`,24)(5197,`em`)(5198,`strong`),lO(5199,`(opcional)`),wg()(),jc(5200,`p`),lO(5201,`Objeto que segue a definição da interface `),jc(5202,`code`),lO(5203,`PoUploadFileRestrictions`),wg(),lO(5204,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),wg(),jc(5205,`p`)(5206,`strong`),lO(5207,`Componente compatível`),wg(),lO(5208,`: `),jc(5209,`code`),lO(5210,`po-upload`),wg()()()(),jc(5211,`tr`,16)(5212,`td`,17)(5213,`div`,25)(5214,`span`,26),lO(5215,` rows`),nu(5216,`br`),wg()()(),jc(5217,`td`,21)(5218,`code`,45),lO(5219,`number`),wg()(),jc(5220,`td`,24)(5221,`em`)(5222,`strong`),lO(5223,`(opcional)`),wg()(),jc(5224,`p`),lO(5225,`Quantidade de linhas exibidas no `),jc(5226,`code`),lO(5227,`po-textarea`),wg(),lO(5228,`.`),wg()()(),jc(5229,`tr`,16)(5230,`td`,17)(5231,`div`,25)(5232,`span`,26),lO(5233,` searchService`),nu(5234,`br`),wg()()(),jc(5235,`td`,21)(5236,`code`,27),lO(5237,`string `),wg(),jc(5238,`code`,34),lO(5239,` PoLookupFilter`),wg()(),jc(5240,`td`,24)(5241,`em`)(5242,`strong`),lO(5243,`(opcional)`),wg()(),jc(5244,`p`),lO(5245,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),jc(5246,`code`),lO(5247,`columns`),wg(),lO(5248,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),jc(5249,`strong`),lO(5250,`Importante:`),wg()(),jc(5251,`blockquote`)(5252,`p`),lO(5253,`Caso utilizar a propriedade `),jc(5254,`code`),lO(5255,`optionsService`),wg(),lO(5256,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(5257,`a`,7),lO(5258,`guia de API do PO UI`),wg(),lO(5259,`.`),wg()()()(),jc(5260,`tr`,16)(5261,`td`,17)(5262,`div`,25)(5263,`span`,26),lO(5264,` secondInterval`),nu(5265,`br`),wg()()(),jc(5266,`td`,21)(5267,`code`,45),lO(5268,`number`),wg()(),jc(5269,`td`,24)(5270,`em`)(5271,`strong`),lO(5272,`(opcional)`),wg()(),jc(5273,`p`),lO(5274,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),wg()()(),jc(5275,`tr`,16)(5276,`td`,17)(5277,`div`,25)(5278,`span`,26),lO(5279,` secret`),nu(5280,`br`),wg()()(),jc(5281,`td`,21)(5282,`code`,29),lO(5283,`boolean`),wg()(),jc(5284,`td`,24)(5285,`em`)(5286,`strong`),lO(5287,`(opcional)`),wg()(),jc(5288,`p`),lO(5289,`Esconde a informação estilo `),jc(5290,`em`),lO(5291,`password`),wg(),lO(5292,`, pode ser utilizado quando o tipo de dado for `),jc(5293,`em`),lO(5294,`string`),wg(),lO(5295,`.`),wg()()(),jc(5296,`tr`,16)(5297,`td`,17)(5298,`div`,25)(5299,`span`,26),lO(5300,` showRequired`),nu(5301,`br`),wg()()(),jc(5302,`td`,21)(5303,`code`,29),lO(5304,`boolean`),wg()(),jc(5305,`td`,24)(5306,`em`)(5307,`strong`),lO(5308,`(opcional)`),wg()(),jc(5309,`p`),lO(5310,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(5311,`blockquote`)(5312,`p`),lO(5313,`Não será exibida a indicação se:`),wg()(),jc(5314,`ul`)(5315,`li`),lO(5316,`Não possuir `),jc(5317,`code`),lO(5318,`p-help`),wg(),lO(5319,` e/ou `),jc(5320,`code`),lO(5321,`p-label`),wg(),lO(5322,`.`),wg()(),jc(5323,`p`)(5324,`strong`),lO(5325,`Componentes compatíveis:`),wg(),jc(5326,`code`),lO(5327,`po-datepicker`),wg(),lO(5328,`, `),jc(5329,`code`),lO(5330,`po-datepicker-range`),wg(),lO(5331,`, `),jc(5332,`code`),lO(5333,`po-timepicker`),wg(),lO(5334,`, `),jc(5335,`code`),lO(5336,`po-input`),wg(),lO(5337,`, `),jc(5338,`code`),lO(5339,`po-number`),wg(),lO(5340,`,
`),jc(5341,`code`),lO(5342,`po-decimal`),wg(),lO(5343,`, `),jc(5344,`code`),lO(5345,`po-select`),wg(),lO(5346,`, `),jc(5347,`code`),lO(5348,`po-radio-group`),wg(),lO(5349,`, `),jc(5350,`code`),lO(5351,`po-combo`),wg(),lO(5352,`, `),jc(5353,`code`),lO(5354,`po-lookup`),wg(),lO(5355,`, `),jc(5356,`code`),lO(5357,`po-checkbox-group`),wg(),lO(5358,`, `),jc(5359,`code`),lO(5360,`po-multiselect`),wg(),lO(5361,`,
`),jc(5362,`code`),lO(5363,`po-textarea`),wg(),lO(5364,`, `),jc(5365,`code`),lO(5366,`po-password`),wg(),lO(5367,`, `),jc(5368,`code`),lO(5369,`po-upload`),wg(),lO(5370,`.`),wg()()(),jc(5371,`tr`,16)(5372,`td`,17)(5373,`div`,25)(5374,`span`,26),lO(5375,` showSeconds`),nu(5376,`br`),wg()()(),jc(5377,`td`,21)(5378,`code`,29),lO(5379,`boolean`),wg()(),jc(5380,`td`,24)(5381,`em`)(5382,`strong`),lO(5383,`(opcional)`),wg()(),jc(5384,`p`),lO(5385,`Exibe a coluna de segundos no painel do timepicker.`),wg()()(),jc(5386,`tr`,16)(5387,`td`,17)(5388,`div`,25)(5389,`span`,26),lO(5390,` showThumbnail`),nu(5391,`br`),wg()()(),jc(5392,`td`,21)(5393,`code`,29),lO(5394,`boolean`),wg()(),jc(5395,`td`,24)(5396,`em`)(5397,`strong`),lO(5398,`(opcional)`),wg()(),jc(5399,`p`),lO(5400,`Exibe a pré-visualização de imagens ao anexá-las.`),wg(),jc(5401,`blockquote`)(5402,`p`),lO(5403,`Propriedade funciona apenas em arquivos de formato de imagem (`),jc(5404,`code`),lO(5405,`.png`),wg(),lO(5406,`, `),jc(5407,`code`),lO(5408,`.jpg`),wg(),lO(5409,`, `),jc(5410,`code`),lO(5411,`.jpeg`),wg(),lO(5412,` e `),jc(5413,`code`),lO(5414,`.gif`),wg(),lO(5415,`).`),wg()(),jc(5416,`p`)(5417,`strong`),lO(5418,`Componente compatível`),wg(),lO(5419,`: `),jc(5420,`code`),lO(5421,`po-upload`),wg()()()(),jc(5422,`tr`,16)(5423,`td`,17)(5424,`div`,25)(5425,`span`,26),lO(5426,` size`),nu(5427,`br`),wg()()(),jc(5428,`td`,21)(5429,`code`,27),lO(5430,`string`),wg()(),jc(5431,`td`,24)(5432,`em`)(5433,`strong`),lO(5434,`(opcional)`),wg()(),jc(5435,`p`),lO(5436,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),wg(),jc(5437,`ul`)(5438,`li`)(5439,`code`),lO(5440,`small`),wg(),lO(5441,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(5442,`li`)(5443,`code`),lO(5444,`medium`),wg(),lO(5445,`: aplica a medida medium de cada componente.`),wg(),jc(5446,`li`)(5447,`code`),lO(5448,`large`),wg(),lO(5449,`: aplica a medida large de cada componente (disponível para `),jc(5450,`code`),lO(5451,`po-checkbox`),wg(),lO(5452,` e `),jc(5453,`code`),lO(5454,`po-radio-group`),wg(),lO(5455,`).`),jc(5456,`blockquote`)(5457,`p`),lO(5458,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(5459,`code`),lO(5460,`medium`),wg(),lO(5461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(5462,`a`,40),lO(5463,`po-theme`),wg(),lO(5464,`.`),wg()()()()()(),jc(5465,`tr`,16)(5466,`td`,17)(5467,`div`,25)(5468,`span`,26),lO(5469,` sort`),nu(5470,`br`),wg()()(),jc(5471,`td`,21)(5472,`code`,29),lO(5473,`boolean`),wg()(),jc(5474,`td`,24)(5475,`em`)(5476,`strong`),lO(5477,`(opcional)`),wg()(),jc(5478,`p`),lO(5479,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),wg(),jc(5480,`p`)(5481,`strong`),lO(5482,`Componentes compatíveis:`),wg(),jc(5483,`code`),lO(5484,`po-combo`),wg(),lO(5485,`, po-multiselect`),wg()()(),jc(5486,`tr`,16)(5487,`td`,17)(5488,`div`,25)(5489,`span`,26),lO(5490,` step`),nu(5491,`br`),wg()()(),jc(5492,`td`,21)(5493,`code`,45),lO(5494,`number`),wg()(),jc(5495,`td`,24)(5496,`em`)(5497,`strong`),lO(5498,`(opcional)`),wg()(),jc(5499,`p`),lO(5500,`Intervalo utilizado no `),jc(5501,`code`),lO(5502,`po-number`),wg(),lO(5503,`.`),wg()()(),jc(5504,`tr`,16)(5505,`td`,17)(5506,`div`,25)(5507,`span`,26),lO(5508,` thousandMaxlength`),nu(5509,`br`),wg()()(),jc(5510,`td`,21)(5511,`code`,45),lO(5512,`number`),wg()(),jc(5513,`td`,24)(5514,`em`)(5515,`strong`),lO(5516,`(opcional)`),wg()(),jc(5517,`p`),lO(5518,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),wg(),jc(5519,`blockquote`)(5520,`p`),lO(5521,`Esta propriedade só pode ser utilizada quando o `),jc(5522,`code`),lO(5523,`type`),wg(),lO(5524,` for `),jc(5525,`em`),lO(5526,`currency`),wg(),lO(5527,` ou `),jc(5528,`em`),lO(5529,`decimal`),wg(),lO(5530,`.`),wg()(),jc(5531,`blockquote`)(5532,`p`),lO(5533,`Quando utilizado com `),jc(5534,`code`),lO(5535,`displayFormat`),wg(),lO(5536,`, será respeitado o valor `),jc(5537,`strong`),lO(5538,`mais restritivo`),wg(),lO(5539,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),wg()()()(),jc(5540,`tr`,16)(5541,`td`,17)(5542,`div`,25)(5543,`span`,26),lO(5544,` type`),nu(5545,`br`),wg()()(),jc(5546,`td`,21)(5547,`code`,27),lO(5548,`string `),wg(),jc(5549,`code`,81),lO(5550,` PoDynamicFieldType`),wg()(),jc(5551,`td`,24)(5552,`em`)(5553,`strong`),lO(5554,`(opcional)`),wg()(),jc(5555,`p`),lO(5556,`Tipo do valor campo.`),wg(),jc(5557,`p`),lO(5558,`Valores válidos:`),wg(),jc(5559,`ul`)(5560,`li`)(5561,`code`),lO(5562,`boolean`),wg(),lO(5563,`: Valores `),jc(5564,`em`),lO(5565,`booleanos`),wg(),lO(5566,`.`),wg(),jc(5567,`li`)(5568,`code`),lO(5569,`currency`),wg(),lO(5570,`: Valores monetários.`),wg(),jc(5571,`li`)(5572,`code`),lO(5573,`decimal`),wg(),lO(5574,`: Valores decimais.`),wg(),jc(5575,`li`)(5576,`code`),lO(5577,`date`),wg(),lO(5578,`: Valores de datas.`),jc(5579,`ul`)(5580,`li`),lO(5581,`Aceita os tipos `),jc(5582,`strong`),lO(5583,`string`),wg(),lO(5584,` e `),jc(5585,`strong`),lO(5586,`Date`),wg(),lO(5587,` padr\xE3o do Javascript,
por exemplo: `),jc(5588,`code`),lO(5589,`'2017-11-28'`),wg(),lO(5590,` ou `),jc(5591,`code`),lO(5592,`new Date(2017, 10, 28)`),wg(),lO(5593,`.`),wg()()(),jc(5594,`li`)(5595,`code`),lO(5596,`dateTime`),wg(),lO(5597,`: Valor de data com horário.`),jc(5598,`ul`)(5599,`li`),lO(5600,`Aceita o tipo `),jc(5601,`em`),lO(5602,`string`),wg(),lO(5603,` no formato `),jc(5604,`strong`),lO(5605,`ISO-8601`),wg(),lO(5606,` extendido `),jc(5607,`strong`),lO(5608,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),wg(),lO(5609,`
e o tipo `),jc(5610,`strong`),lO(5611,`Date`),wg(),lO(5612,` padrão do Javascript, por exemplo: `),jc(5613,`code`),lO(5614,`'2017-11-28T00:00:00-02:00'`),wg(),lO(5615,` ou `),jc(5616,`code`),lO(5617,`new Date(2017, 10, 28)`),wg(),lO(5618,`.`),wg()()(),jc(5619,`li`)(5620,`code`),lO(5621,`number`),wg(),lO(5622,`: Valores numéricos.`),wg(),jc(5623,`li`)(5624,`code`),lO(5625,`string`),wg(),lO(5626,`: Textos.`),wg(),jc(5627,`li`)(5628,`code`),lO(5629,`time`),wg(),lO(5630,`: Valor do horário.`),jc(5631,`ul`)(5632,`li`),lO(5633,`Aceita o tipo `),jc(5634,`strong`),lO(5635,`string`),wg(),lO(5636,` nos formatos `),jc(5637,`strong`),lO(5638,`'HH:mm:ss'`),wg(),lO(5639,` ou `),jc(5640,`strong`),lO(5641,`'HH:mm:ss.ffffff'`),wg(),lO(5642,`, por exemplo: `),jc(5643,`code`),lO(5644,`'23:12:45'`),wg(),lO(5645,`.`),wg()()()()()(),jc(5646,`tr`,16)(5647,`td`,17)(5648,`div`,25)(5649,`span`,26),lO(5650,` url`),nu(5651,`br`),wg()()(),jc(5652,`td`,21)(5653,`code`,27),lO(5654,`string`),wg()(),jc(5655,`td`,24)(5656,`em`)(5657,`strong`),lO(5658,`(opcional)`),wg()(),jc(5659,`p`),lO(5660,`URL que deve ser feita a requisição com os arquivos selecionados.`),wg(),jc(5661,`p`)(5662,`strong`),lO(5663,`Componente compatível`),wg(),lO(5664,`: `),jc(5665,`code`),lO(5666,`po-upload`),wg()()()(),jc(5667,`tr`,16)(5668,`td`,17)(5669,`div`,25)(5670,`span`,26),lO(5671,` validate`),nu(5672,`br`),wg()()(),jc(5673,`td`,21)(5674,`code`,27),lO(5675,`string `),wg(),jc(5676,`code`,44),lO(5677,` Function`),wg()(),jc(5678,`td`,24)(5679,`em`)(5680,`strong`),lO(5681,`(opcional)`),wg()(),jc(5682,`p`),lO(5683,`Função ou serviço para validar as `),jc(5684,`strong`),lO(5685,`mudanças do campo`),wg(),lO(5686,`.`),wg(),jc(5687,`ul`)(5688,`li`),lO(5689,`A propriedade aceita os seguintes tipos:`),wg()(),jc(5690,`ul`)(5691,`li`)(5692,`strong`),lO(5693,`String`),wg(),lO(5694,`: Endpoint usado pelo componente para requisição via `),jc(5695,`code`),lO(5696,`POST`),wg(),lO(5697,`.`),wg(),jc(5698,`li`)(5699,`strong`),lO(5700,`Function`),wg(),lO(5701,`: Método que será executado.`),wg()(),jc(5702,`p`),lO(5703,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),jc(5704,`code`),lO(5705,`PoDynamicFormFieldChanged`),wg(),lO(5706,`:`),wg(),jc(5707,`p`)(5708,`code`),lO(5709,`{ property: 'property name', value: 'new value' }`),wg()(),jc(5710,`p`),lO(5711,`O retorno desta função deve ser do tipo `),jc(5712,`a`,82),lO(5713,`PoDynamicFormFieldValidation`),wg(),lO(5714,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),wg(),jc(5715,`pre`)(5716,`code`),lO(5717,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),wg()(),jc(5718,`p`),lO(5719,`Para referenciar a sua função utilize a propriedade `),jc(5720,`code`),lO(5721,`bind`),wg(),lO(5722,`, por exemplo:
`),jc(5723,`code`),lO(5724,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),wg()()()(),jc(5725,`tr`,16)(5726,`td`,17)(5727,`div`,25)(5728,`span`,26),lO(5729,` visible`),nu(5730,`br`),wg()()(),jc(5731,`td`,21)(5732,`code`,29),lO(5733,`boolean`),wg()(),jc(5734,`td`,24)(5735,`em`)(5736,`strong`),lO(5737,`(opcional)`),wg()(),jc(5738,`p`),lO(5739,`Indica se o campo será visível.`),wg()()(),jc(5740,`tr`,16)(5741,`td`,17)(5742,`div`,25)(5743,`span`,26),lO(5744,` yearRangeLimit`),nu(5745,`br`),wg()()(),jc(5746,`td`,21)(5747,`code`,45),lO(5748,`number`),wg()(),jc(5749,`td`,24)(5750,`em`)(5751,`strong`),lO(5752,`(opcional)`),wg()(),jc(5753,`p`),lO(5754,`Define o limite de anos exibidos na lista de anos do `),jc(5755,`code`),lO(5756,`po-datepicker`),wg(),lO(5757,` nos modos `),jc(5758,`code`),lO(5759,`month-year`),wg(),lO(5760,` e `),jc(5761,`code`),lO(5762,`year`),wg(),lO(5763,`.`),wg()()()(),jc(5764,`h4`,43)(5765,`code`,5),lO(5766,`PoLookupColumn`),wg()(),jc(5767,`div`,2)(5768,`p`),lO(5769,`Interface para configuração das colunas do po-lookup.`),wg()(),jc(5770,`h4`,12),lO(5771,`Propriedades`),wg(),jc(5772,`table`,13)(5773,`tr`,14)(5774,`th`,15),lO(5775,`Nome`),wg(),jc(5776,`th`,15),lO(5777,`Tipo`),wg(),jc(5778,`th`,15),lO(5779,`Descrição`),wg()(),jc(5780,`tr`,16)(5781,`td`,17)(5782,`div`,25)(5783,`span`,26),lO(5784,` fieldLabel`),nu(5785,`br`),wg()()(),jc(5786,`td`,21)(5787,`code`,29),lO(5788,`boolean`),wg()(),jc(5789,`td`,24)(5790,`em`)(5791,`strong`),lO(5792,`(opcional)`),wg()(),jc(5793,`p`),lO(5794,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),wg(),jc(5795,`p`),lO(5796,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),wg(),jc(5797,`p`),lO(5798,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),jc(5799,`code`),lO(5800,`p-field-format`),wg(),lO(5801,` ou `),jc(5802,`code`),lO(5803,`p-field-label`),wg(),lO(5804,` forem configurados no componente.`),wg()()(),jc(5805,`tr`,16)(5806,`td`,17)(5807,`div`,25)(5808,`span`,26),lO(5809,` format`),nu(5810,`br`),wg()()(),jc(5811,`td`,21)(5812,`code`,27),lO(5813,`string`),wg()(),jc(5814,`td`,24)(5815,`em`)(5816,`strong`),lO(5817,`(opcional)`),wg()(),jc(5818,`p`),lO(5819,`Formato de exibição do valor da coluna:`),wg(),jc(5820,`ul`)(5821,`li`),lO(5822,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),wg(),jc(5823,`li`),lO(5824,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),wg()()()(),jc(5825,`tr`,16)(5826,`td`,17)(5827,`div`,25)(5828,`span`,26),lO(5829,` label`),nu(5830,`br`),wg()()(),jc(5831,`td`,21)(5832,`code`,27),lO(5833,`string`),wg()(),jc(5834,`td`,24)(5835,`em`)(5836,`strong`),lO(5837,`(opcional)`),wg()(),jc(5838,`p`),lO(5839,`Texto para título da coluna.`),wg(),jc(5840,`p`),lO(5841,`Caso não seja informado, será utilizado como `),jc(5842,`em`),lO(5843,`label`),wg(),lO(5844,` o valor da propriedade `),jc(5845,`em`),lO(5846,`property`),wg(),lO(5847,` com a primeira letra em maiúsculo.`),wg()()(),jc(5848,`tr`,16)(5849,`td`,17)(5850,`div`,25)(5851,`span`,26),lO(5852,` mask`),nu(5853,`br`),wg()()(),jc(5854,`td`,21)(5855,`code`,27),lO(5856,`string`),wg()(),jc(5857,`td`,24)(5858,`em`)(5859,`strong`),lO(5860,`(opcional)`),wg()(),jc(5861,`p`),lO(5862,`Define uma máscara para formatação do valor exibido na coluna.`),wg(),jc(5863,`p`),lO(5864,`A máscara é aplicada somente para `),jc(5865,`strong`),lO(5866,`exibição`),wg(),lO(5867,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),wg(),jc(5868,`p`),lO(5869,`Caracteres válidos para a máscara:`),wg(),jc(5870,`ul`)(5871,`li`)(5872,`code`),lO(5873,`9`),wg(),lO(5874,` : aceita um dígito numérico (0-9).`),wg(),jc(5875,`li`)(5876,`code`),lO(5877,`@`),wg(),lO(5878,` : aceita um caractere alfabético (a-z, A-Z).`),wg(),jc(5879,`li`)(5880,`code`),lO(5881,`w`),wg(),lO(5882,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),wg(),jc(5883,`li`),lO(5884,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),jc(5885,`code`),lO(5886,`.`),wg(),lO(5887,`, `),jc(5888,`code`),lO(5889,`-`),wg(),lO(5890,`, `),jc(5891,`code`),lO(5892,`/`),wg(),lO(5893,`, `),jc(5894,`code`),lO(5895,`(`),wg(),lO(5896,`, `),jc(5897,`code`),lO(5898,`)`),wg(),lO(5899,`, `),jc(5900,`code`),lO(5901,`+`),wg(),lO(5902,`, `),nu(5903,`code`),lO(5904,`).`),wg()(),jc(5905,`p`),lO(5906,`Exemplos de uso:`),wg(),jc(5907,`pre`)(5908,`code`),lO(5909,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),wg()(),jc(5910,`blockquote`)(5911,`p`),lO(5912,`Esta propriedade é utilizada apenas para colunas do tipo `),jc(5913,`code`),lO(5914,`string`),wg(),lO(5915,` (padr\xE3o).
Caso a coluna possua um `),jc(5916,`code`),lO(5917,`type`),wg(),lO(5918,` diferente de `),jc(5919,`code`),lO(5920,`string`),wg(),lO(5921,`, a máscara será ignorada.`),wg()()()(),jc(5922,`tr`,16)(5923,`td`,17)(5924,`div`,25)(5925,`span`,26),lO(5926,` property`),nu(5927,`br`),wg()()(),jc(5928,`td`,21)(5929,`code`,27),lO(5930,`string`),wg()(),jc(5931,`td`,24)(5932,`em`)(5933,`strong`),lO(5934,`(opcional)`),wg()(),jc(5935,`p`),lO(5936,`Nome identificador da coluna.`),wg()()(),jc(5937,`tr`,16)(5938,`td`,17)(5939,`div`,25)(5940,`span`,26),lO(5941,` type`),nu(5942,`br`),wg()()(),jc(5943,`td`,21)(5944,`code`,27),lO(5945,`string`),wg()(),jc(5946,`td`,24)(5947,`em`)(5948,`strong`),lO(5949,`(opcional)`),wg()(),jc(5950,`p`),lO(5951,`Tipo da coluna:`),wg(),jc(5952,`ul`)(5953,`li`),lO(5954,`string (padrão): textos`),wg(),jc(5955,`li`),lO(5956,`number: valores numéricos`),wg(),jc(5957,`li`),lO(5958,`date: data`),wg(),jc(5959,`li`),lO(5960,`currency: valores monetários`),wg(),jc(5961,`li`),lO(5962,`dateTime: data e hora`),wg()()()(),jc(5963,`tr`,16)(5964,`td`,17)(5965,`div`,25)(5966,`span`,26),lO(5967,` width`),nu(5968,`br`),wg()()(),jc(5969,`td`,21)(5970,`code`,27),lO(5971,`string`),wg()(),jc(5972,`td`,24)(5973,`em`)(5974,`strong`),lO(5975,`(opcional)`),wg()(),jc(5976,`p`),lO(5977,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),wg()()()(),jc(5978,`h4`,43)(5979,`code`,5),lO(5980,`PoLookupFilter`),wg()(),jc(5981,`div`,2)(5982,`p`),lO(5983,`Define o tipo de busca utilizado no po-lookup.`),wg()(),jc(5984,`h4`,12),lO(5985,`Métodos`),wg(),jc(5986,`table`,41)(5987,`tr`,16)(5988,`th`,42)(5989,`div`,25)(5990,`h4`)(5991,`span`,26),lO(5992,` getFilteredItems `),wg()()()()(),jc(5993,`tr`,24)(5994,`td`,24)(5995,`p`),lO(5996,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),jc(5997,`em`),lO(5998,`Observable`),wg(),lO(5999,` com a resposta da API no formato da interface `),jc(6e3,`code`),lO(6001,`PoLookupResponseApi`),wg(),lO(6002,`.`),wg()()()(),jc(6003,`h5`)(6004,`b`),lO(6005,`Parâmetros`),wg()(),jc(6006,`table`,13)(6007,`tr`,14)(6008,`th`,15),lO(6009,`Nome`),wg(),jc(6010,`th`,15),lO(6011,`Tipo`),wg(),jc(6012,`th`,15),lO(6013,`Descrição`),wg()(),jc(6014,`tr`,16)(6015,`td`,17),lO(6016,` params`),wg(),jc(6017,`td`,21)(6018,`code`,83),lO(6019,` PoLookupFilteredItemsParams `),wg()(),jc(6020,`td`,24)(6021,`p`),lO(6022,`Objeto enviado por parâmetro que implementa a interface `),jc(6023,`code`),lO(6024,`PoLookupFilteredItemsParams`),wg(),lO(6025,`.`),wg()()()(),nu(6026,`br`),jc(6027,`table`,41)(6028,`tr`,16)(6029,`th`,42)(6030,`div`,25)(6031,`h4`)(6032,`span`,26),lO(6033,` getObjectByValue `),wg()()()()(),jc(6034,`tr`,24)(6035,`td`,24)(6036,`p`),lO(6037,`Método responsável por enviar um valor que será buscado no serviço.`),wg(),jc(6038,`p`),lO(6039,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),wg()()()(),jc(6040,`h5`)(6041,`b`),lO(6042,`Parâmetros`),wg()(),jc(6043,`table`,13)(6044,`tr`,14)(6045,`th`,15),lO(6046,`Nome`),wg(),jc(6047,`th`,15),lO(6048,`Tipo`),wg(),jc(6049,`th`,15),lO(6050,`Descrição`),wg()(),jc(6051,`tr`,16)(6052,`td`,17),lO(6053,` value`),wg(),jc(6054,`td`,21)(6055,`code`,27),lO(6056,` string `),wg(),jc(6057,`code`,74),lO(6058,` Array<any> `),wg()(),jc(6059,`td`,24)(6060,`p`),lO(6061,`Valor único a ser buscado na fonte de dados.`),wg()()(),jc(6062,`tr`,16)(6063,`td`,17),lO(6064,` filterParams`),wg(),jc(6065,`td`,21)(6066,`code`,83),lO(6067,` any `),wg()(),jc(6068,`td`,24)(6069,`p`),lO(6070,`Valor informado através da propriedade `),jc(6071,`code`),lO(6072,`p-filter-params`),wg(),lO(6073,`.`),wg()()()(),nu(6074,`br`),jc(6075,`h4`,43)(6076,`code`,5),lO(6077,`PoLookupFilteredItemsParams`),wg()(),jc(6078,`div`,2)(6079,`p`),lO(6080,`Interface do objeto enviado como parâmetro na função `),jc(6081,`code`),lO(6082,`getFilteredItems`),wg(),lO(6083,`.`),wg()(),jc(6084,`h4`,12),lO(6085,`Propriedades`),wg(),jc(6086,`table`,13)(6087,`tr`,14)(6088,`th`,15),lO(6089,`Nome`),wg(),jc(6090,`th`,15),lO(6091,`Tipo`),wg(),jc(6092,`th`,15),lO(6093,`Descrição`),wg()(),jc(6094,`tr`,16)(6095,`td`,17)(6096,`div`,25)(6097,`span`,26),lO(6098,` advancedFilters`),nu(6099,`br`),wg()()(),jc(6100,`td`,21)(6101,`code`,84),lO(6102,`{ [key: string]: any;
}`),wg()(),jc(6103,`td`,24)(6104,`em`)(6105,`strong`),lO(6106,`(opcional)`),wg()(),jc(6107,`p`),lO(6108,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),wg()()(),jc(6109,`tr`,16)(6110,`td`,17)(6111,`div`,25)(6112,`span`,26),lO(6113,` filter`),nu(6114,`br`),wg()()(),jc(6115,`td`,21)(6116,`code`,27),lO(6117,`string`),wg()(),jc(6118,`td`,24)(6119,`em`)(6120,`strong`),lO(6121,`(opcional)`),wg()(),jc(6122,`p`),lO(6123,`Conteúdo utilizado para filtrar a lista de itens.`),wg()()(),jc(6124,`tr`,16)(6125,`td`,17)(6126,`div`,25)(6127,`span`,26),lO(6128,` filterParams`),nu(6129,`br`),wg()()(),jc(6130,`td`,21)(6131,`code`,33),lO(6132,`any`),wg()(),jc(6133,`td`,24)(6134,`em`)(6135,`strong`),lO(6136,`(opcional)`),wg()(),jc(6137,`p`),lO(6138,`Valor informado através da propriedade `),jc(6139,`code`),lO(6140,`p-filter-params`),wg(),lO(6141,`.`),wg()()(),jc(6142,`tr`,16)(6143,`td`,17)(6144,`div`,25)(6145,`span`,26),lO(6146,` order`),nu(6147,`br`),wg()()(),jc(6148,`td`,21)(6149,`code`,27),lO(6150,`string`),wg()(),jc(6151,`td`,24)(6152,`em`)(6153,`strong`),lO(6154,`(opcional)`),wg()(),jc(6155,`p`),lO(6156,`Coluna que está sendo ordenada na tabela.`),wg(),jc(6157,`ul`)(6158,`li`),lO(6159,`Coluna decrescente será informada da seguinte forma: `),jc(6160,`code`),lO(6161,`-<colunaOrdenada>`),wg(),lO(6162,`, por exemplo `),jc(6163,`code`),lO(6164,`-name`),wg(),lO(6165,`.`),wg(),jc(6166,`li`),lO(6167,`Coluna ascendente será informada da seguinte forma: `),jc(6168,`code`),lO(6169,`<colunaOrdenada>`),wg(),lO(6170,`, por exemplo `),jc(6171,`code`),lO(6172,`name`),wg(),lO(6173,`.`),wg()()()(),jc(6174,`tr`,16)(6175,`td`,17)(6176,`div`,25)(6177,`span`,26),lO(6178,` page`),nu(6179,`br`),wg()()(),jc(6180,`td`,21)(6181,`code`,45),lO(6182,`number`),wg()(),jc(6183,`td`,24)(6184,`em`)(6185,`strong`),lO(6186,`(opcional)`),wg()(),jc(6187,`p`),lO(6188,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),wg()()(),jc(6189,`tr`,16)(6190,`td`,17)(6191,`div`,25)(6192,`span`,26),lO(6193,` pageSize`),nu(6194,`br`),wg()()(),jc(6195,`td`,21)(6196,`code`,45),lO(6197,`number`),wg()(),jc(6198,`td`,24)(6199,`em`)(6200,`strong`),lO(6201,`(opcional)`),wg()(),jc(6202,`p`),lO(6203,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),wg()()()(),jc(6204,`h4`,43)(6205,`code`,5),lO(6206,`PoLookupLiterals`),wg()(),jc(6207,`div`,2)(6208,`p`),lO(6209,`Interface para definição das literais usadas no `),jc(6210,`code`),lO(6211,`po-lookup`),wg(),lO(6212,`.`),wg()(),jc(6213,`h4`,12),lO(6214,`Propriedades`),wg(),jc(6215,`table`,13)(6216,`tr`,14)(6217,`th`,15),lO(6218,`Nome`),wg(),jc(6219,`th`,15),lO(6220,`Tipo`),wg(),jc(6221,`th`,15),lO(6222,`Descrição`),wg()(),jc(6223,`tr`,16)(6224,`td`,17)(6225,`div`,25)(6226,`span`,26),lO(6227,` clean`),nu(6228,`br`),wg()()(),jc(6229,`td`,21)(6230,`code`,27),lO(6231,`string`),wg()(),jc(6232,`td`,24)(6233,`em`)(6234,`strong`),lO(6235,`(opcional)`),wg()(),jc(6236,`p`),lO(6237,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),wg()()(),jc(6238,`tr`,16)(6239,`td`,17)(6240,`div`,25)(6241,`span`,26),lO(6242,` modalAdvancedSearch`),nu(6243,`br`),wg()()(),jc(6244,`td`,21)(6245,`code`,27),lO(6246,`string`),wg()(),jc(6247,`td`,24)(6248,`em`)(6249,`strong`),lO(6250,`(opcional)`),wg()(),jc(6251,`p`),lO(6252,`Texto do link de busca avançada.`),wg(),jc(6253,`p`),lO(6254,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),wg()()(),jc(6255,`tr`,16)(6256,`td`,17)(6257,`div`,25)(6258,`span`,26),lO(6259,` modalAdvancedSearchPrimaryActionLabel`),nu(6260,`br`),wg()()(),jc(6261,`td`,21)(6262,`code`,27),lO(6263,`string`),wg()(),jc(6264,`td`,24)(6265,`em`)(6266,`strong`),lO(6267,`(opcional)`),wg()(),jc(6268,`p`),lO(6269,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),wg()()(),jc(6270,`tr`,16)(6271,`td`,17)(6272,`div`,25)(6273,`span`,26),lO(6274,` modalAdvancedSearchSecondaryActionLabel`),nu(6275,`br`),wg()()(),jc(6276,`td`,21)(6277,`code`,27),lO(6278,`string`),wg()(),jc(6279,`td`,24)(6280,`em`)(6281,`strong`),lO(6282,`(opcional)`),wg()(),jc(6283,`p`),lO(6284,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),wg()()(),jc(6285,`tr`,16)(6286,`td`,17)(6287,`div`,25)(6288,`span`,26),lO(6289,` modalAdvancedSearchTitle`),nu(6290,`br`),wg()()(),jc(6291,`td`,21)(6292,`code`,27),lO(6293,`string`),wg()(),jc(6294,`td`,24)(6295,`em`)(6296,`strong`),lO(6297,`(opcional)`),wg()(),jc(6298,`p`),lO(6299,`Texto exibido no título da modal de busca avançada.`),wg()()(),jc(6300,`tr`,16)(6301,`td`,17)(6302,`div`,25)(6303,`span`,26),lO(6304,` modalDisclaimerGroupTitle`),nu(6305,`br`),wg()()(),jc(6306,`td`,21)(6307,`code`,27),lO(6308,`string`),wg()(),jc(6309,`td`,24)(6310,`em`)(6311,`strong`),lO(6312,`(opcional)`),wg()(),jc(6313,`p`),lO(6314,`Texto exibido no título do disclaimer.`),wg()()(),jc(6315,`tr`,16)(6316,`td`,17)(6317,`div`,25)(6318,`span`,26),lO(6319,` modalPlaceholder`),nu(6320,`br`),wg()()(),jc(6321,`td`,21)(6322,`code`,27),lO(6323,`string`),wg()(),jc(6324,`td`,24)(6325,`em`)(6326,`strong`),lO(6327,`(opcional)`),wg()(),jc(6328,`p`),lO(6329,`Texto exibido no placeholder do input da modal.`),wg()()(),jc(6330,`tr`,16)(6331,`td`,17)(6332,`div`,25)(6333,`span`,26),lO(6334,` modalPrimaryActionLabel`),nu(6335,`br`),wg()()(),jc(6336,`td`,21)(6337,`code`,27),lO(6338,`string`),wg()(),jc(6339,`td`,24)(6340,`em`)(6341,`strong`),lO(6342,`(opcional)`),wg()(),jc(6343,`p`),lO(6344,`Texto exibido no label do botão de ação primária da modal.`),wg()()(),jc(6345,`tr`,16)(6346,`td`,17)(6347,`div`,25)(6348,`span`,26),lO(6349,` modalSecondaryActionLabel`),nu(6350,`br`),wg()()(),jc(6351,`td`,21)(6352,`code`,27),lO(6353,`string`),wg()(),jc(6354,`td`,24)(6355,`em`)(6356,`strong`),lO(6357,`(opcional)`),wg()(),jc(6358,`p`),lO(6359,`Texto exibido no label do botão de ação secundária da modal.`),wg()()(),jc(6360,`tr`,16)(6361,`td`,17)(6362,`div`,25)(6363,`span`,26),lO(6364,` modalTableLoadMoreData`),nu(6365,`br`),wg()()(),jc(6366,`td`,21)(6367,`code`,27),lO(6368,`string`),wg()(),jc(6369,`td`,24)(6370,`em`)(6371,`strong`),lO(6372,`(opcional)`),wg()(),jc(6373,`p`),lO(6374,`Label do `),jc(6375,`code`),lO(6376,`button`),wg(),lO(6377,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),wg()()(),jc(6378,`tr`,16)(6379,`td`,17)(6380,`div`,25)(6381,`span`,26),lO(6382,` modalTableLoadingData`),nu(6383,`br`),wg()()(),jc(6384,`td`,21)(6385,`code`,27),lO(6386,`string`),wg()(),jc(6387,`td`,24)(6388,`em`)(6389,`strong`),lO(6390,`(opcional)`),wg()(),jc(6391,`p`),lO(6392,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),wg()()(),jc(6393,`tr`,16)(6394,`td`,17)(6395,`div`,25)(6396,`span`,26),lO(6397,` modalTableNoColumns`),nu(6398,`br`),wg()()(),jc(6399,`td`,21)(6400,`code`,27),lO(6401,`string`),wg()(),jc(6402,`td`,24)(6403,`em`)(6404,`strong`),lO(6405,`(opcional)`),wg()(),jc(6406,`p`),lO(6407,`Texto exibido quando não existem colunas definidas para a tabela.`),wg()()(),jc(6408,`tr`,16)(6409,`td`,17)(6410,`div`,25)(6411,`span`,26),lO(6412,` modalTableNoData`),nu(6413,`br`),wg()()(),jc(6414,`td`,21)(6415,`code`,27),lO(6416,`string`),wg()(),jc(6417,`td`,24)(6418,`em`)(6419,`strong`),lO(6420,`(opcional)`),wg()(),jc(6421,`p`),lO(6422,`Texto exibido quando não existem itens para serem exibidos na tabela.`),wg()()(),jc(6423,`tr`,16)(6424,`td`,17)(6425,`div`,25)(6426,`span`,26),lO(6427,` modalTitle`),nu(6428,`br`),wg()()(),jc(6429,`td`,21)(6430,`code`,27),lO(6431,`string`),wg()(),jc(6432,`td`,24)(6433,`em`)(6434,`strong`),lO(6435,`(opcional)`),wg()(),jc(6436,`p`),lO(6437,`Texto exibido no título da modal.`),wg()()(),jc(6438,`tr`,16)(6439,`td`,17)(6440,`div`,25)(6441,`span`,26),lO(6442,` search`),nu(6443,`br`),wg()()(),jc(6444,`td`,21)(6445,`code`,27),lO(6446,`string`),wg()(),jc(6447,`td`,24)(6448,`em`)(6449,`strong`),lO(6450,`(opcional)`),wg()(),jc(6451,`p`),lO(6452,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),wg()()()(),jc(6453,`h4`,43)(6454,`code`,5),lO(6455,`PoLookupResponseApi`),wg()(),jc(6456,`div`,2)(6457,`p`),lO(6458,`Interface que representa a estrutura de resposta de uma coleção de itens. `),wg()(),jc(6459,`h4`,12),lO(6460,`Propriedades`),wg(),jc(6461,`table`,13)(6462,`tr`,14)(6463,`th`,15),lO(6464,`Nome`),wg(),jc(6465,`th`,15),lO(6466,`Tipo`),wg(),jc(6467,`th`,15),lO(6468,`Descrição`),wg()(),jc(6469,`tr`,16)(6470,`td`,17)(6471,`div`,25)(6472,`span`,26),lO(6473,` hasNext`),nu(6474,`br`),wg()()(),jc(6475,`td`,21)(6476,`code`,29),lO(6477,`boolean`),wg()(),jc(6478,`td`,24)(6479,`p`),lO(6480,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),wg()()(),jc(6481,`tr`,16)(6482,`td`,17)(6483,`div`,25)(6484,`span`,26),lO(6485,` items`),nu(6486,`br`),wg()()(),jc(6487,`td`,21)(6488,`code`,85),lO(6489,`Array<object>`),wg()(),jc(6490,`td`,24)(6491,`p`),lO(6492,`Lista de itens retornados.`),wg()()()(),jc(6493,`h3`),lO(6494,`Enums`),wg(),jc(6495,`h4`,4)(6496,`code`,5),lO(6497,`PoTableColumnSpacing`),wg()(),jc(6498,`div`,2)(6499,`p`),lO(6500,`Tipos de espaçamento interno (padding) das células (`),jc(6501,`strong`),lO(6502,`p-spacing`),wg(),lO(6503,`) do po-table.`),wg()(),jc(6504,`h4`,12),lO(6505,`Propriedades`),wg(),jc(6506,`table`,13)(6507,`tr`,14)(6508,`th`,15),lO(6509,`Nome`),wg(),jc(6510,`th`,15),lO(6511,`Descrição`),wg()(),jc(6512,`tr`,16)(6513,`td`,17)(6514,`div`,25)(6515,`span`,26),lO(6516,` ExtraSmall`),nu(6517,`br`),wg()()(),jc(6518,`td`,24)(6519,`p`),lO(6520,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),wg()()(),jc(6521,`tr`,16)(6522,`td`,17)(6523,`div`,25)(6524,`span`,26),lO(6525,` Small`),nu(6526,`br`),wg()()(),jc(6527,`td`,24)(6528,`p`),lO(6529,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),wg()()(),jc(6530,`tr`,16)(6531,`td`,17)(6532,`div`,25)(6533,`span`,26),lO(6534,` Medium`),nu(6535,`br`),wg()()(),jc(6536,`td`,24)(6537,`p`),lO(6538,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),wg()()(),jc(6539,`tr`,16)(6540,`td`,17)(6541,`div`,25)(6542,`span`,26),lO(6543,` Large`),nu(6544,`br`),wg()()(),jc(6545,`td`,24)(6546,`p`),lO(6547,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function qt(a,et){if(a&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-lookup-basic-view`)(2,`sample-po-lookup-labs-view`)(3,`sample-po-lookup-hero-view`)(4,`sample-po-lookup-hero-reactive-form-view`)(5,`sample-po-lookup-advanced-filter-view`)(6,`sample-po-lookup-sw-films-view`)(7,`sample-po-lookup-multiple-view`)(8,`sample-po-lookup-mask-view`),wg()}if(a&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,qt,9,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-lookup-doc`),wg()()()),l&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,je,Ie,ze,Ne,Re,Ue,Je,Ke,Xe],encapsulation:2,changeDetection:1})}return a})()}];var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Tt),I1]})}return a})();var gi=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,Ze]})}return a})();export{gi as DocPoLookupModule};