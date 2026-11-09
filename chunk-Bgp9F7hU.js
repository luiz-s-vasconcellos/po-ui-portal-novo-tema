import{$n as Ak,Ai as XL,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,Gt as dP,H as Mze,Hi as ar,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,On as sie,Ot as Zte,P as Joe,Pr as Jm,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,ba as o1,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fa as kZ,fi as Rb,gi as Tk,hi as TZ,j as I4,jn as tie,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var he=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datepicker`,`p-label`,`PO Datepicker`]],template:function(r,i){r&1&&_u(0,`po-datepicker`,0)},dependencies:[tie],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Le,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:`Basic`,value:dP.Basic},{label:`Extended`,value:dP.Extended}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-labs`]],standalone:!1,decls:22,vars:47,consts:[[`f`,`ngForm`],[`name`,`datepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-max-date`,`p-error-pattern`,`p-format`,`p-help`,`p-iso-format`,`p-label`,`p-locale`,`p-min-date`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`,`p-format`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-format`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`isoFormat`,`p-columns`,`4`,`p-label`,`Iso Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`po-datepicker`,1),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.datepicker,l)||(i.datepicker=l),H_(l)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.label,l)||(i.label=l),H_(l)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.help,l)||(i.help=l),H_(l)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.helperText,l)||(i.helperText=l),H_(l)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.placeholder,l)||(i.placeholder=l),H_(l)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.errorPattern,l)||(i.errorPattern=l),H_(l)}),Zg(),Jc(13,`po-datepicker`,10),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.minDate,l)||(i.minDate=l),H_(l)}),Zg(),Jc(14,`po-datepicker`,11),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.maxDate,l)||(i.maxDate=l),H_(l)}),Zg(),Jc(15,`po-checkbox-group`,12),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.properties,l)||(i.properties=l),H_(l)}),Zg(),Jc(16,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.locale,l)||(i.locale=l),H_(l)}),Zg(),Jc(17,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.format,l)||(i.format=l),H_(l)}),Zg(),Jc(18,`po-radio-group`,15),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.isoFormat,l)||(i.isoFormat=l),H_(l)}),Zg(),Jc(19,`po-radio-group`,16),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.size,l)||(i.size=l),H_(l)}),Zg(),Jc(20,`div`,2)(21,`po-button`,17),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Yb(`ngModel`,i.datepicker),Rb(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-max-date`,i.maxDate)(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-help`,i.help)(`p-iso-format`,i.isoFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-min-date`,i.minDate)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`)),Y0(),Ig(3),Rb(`p-value`,i.datepicker),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.errorPattern),Y0(),Ig(),Yb(`ngModel`,i.minDate),Rb(`p-max-date`,i.maxDate)(`p-format`,i.format),Y0(),Ig(),Yb(`ngModel`,i.maxDate),Rb(`p-format`,i.format)(`p-min-date`,i.minDate),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.locale),Rb(`p-options`,i.localeOptions),Y0(),Ig(),Yb(`ngModel`,i.format),Rb(`p-options`,i.formatOptions),Y0(),Ig(),Yb(`ngModel`,i.isoFormat),Rb(`p-options`,i.isoFormatOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,tie,j4,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  helperText: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ne,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{selectedYear=(/* @__PURE__ */ new Date(`2026-04-30`)).getFullYear();event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`yearPicker`,`p-label`,`Year Picker`,`p-placeholder`,`Select a year`,`p-mode`,`year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-datepicker`,0),W0(),Kb(`ngModelChange`,function(c){return Ak(i.selectedYear,c)||(i.selectedYear=c),c}),vt(`p-change`,function(c){return i.changeEvent(c)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,1),_u(3,`po-info`,2)(4,`po-info`,3),Zg()),r&2&&(Yb(`ngModel`,i.selectedYear),Y0(),Ig(3),Rb(`p-value`,i.selectedYear),Ig(),Rb(`p-value`,i.event))},dependencies:[TZ,JL,Nf,tie,Joe],encapsulation:2,changeDetection:1})}return o})();var ze=o=>({"docs-sample-code-tabs":o});var ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker Year`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-year/sample-po-datepicker-year.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker
  name="yearPicker"
  [(ngModel)]="selectedYear"
  p-label="Year Picker"
  p-placeholder="Select a year"
  p-mode="year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-year/sample-po-datepicker-year.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-year',
  templateUrl: './sample-po-datepicker-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerYearComponent {
  selectedYear = new Date('2026-04-30').getFullYear();
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-year`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ze,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ve],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{selectedMonthYear=/* @__PURE__ */ new Date(`2026-12-02`);event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-month-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`monthYearPicker`,`p-label`,`Month/Year Picker`,`p-placeholder`,`Select month and year`,`p-mode`,`month-year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-datepicker`,0),W0(),Kb(`ngModelChange`,function(c){return Ak(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),vt(`p-change`,function(c){return i.changeEvent(c)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,1),_u(3,`po-info`,2)(4,`po-info`,3),Zg()),r&2&&(Yb(`ngModel`,i.selectedMonthYear),Y0(),Ig(3),Rb(`p-value`,i.selectedMonthYear),Ig(),Rb(`p-value`,i.event))},dependencies:[TZ,JL,Nf,tie,Joe],encapsulation:2,changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-month-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker MonthYear`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker
  name="monthYearPicker"
  [(ngModel)]="selectedMonthYear"
  p-label="Month/Year Picker"
  p-placeholder="Select month and year"
  p-mode="month-year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedMonthYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-month-year',
  templateUrl: './sample-po-datepicker-month-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerMonthYearComponent {
  selectedMonthYear = new Date('2026-12-02');
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-month-year`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Re,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return o})();var Ge=[`formAirfare`];var ke=(()=>{class o{poDialog=p(sie);poNotification=p(Ru);formAirfare;accompany=0;destination;endDate=/* @__PURE__ */ new Date;origin;startDate=/* @__PURE__ */ new Date;ticketClass=`Economy`;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:`Confirm`,message:m,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:/* @__PURE__ */ new Date,startDate:/* @__PURE__ */ new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare`]],viewQuery:function(r,i){if(r&1&&Cu(Ge,7),r&2){let s;No(s=xo())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[[`formAirfare`,`ngForm`],[1,`po-row`],[`name`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`clas`,`po-row`],[`name`,`ticketClass`,`p-label`,`Class`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompany`,`p-label`,`Accompany`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-datepicker`,2),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.startDate,l)||(i.startDate=l),H_(l)}),Zg(),Jc(4,`po-datepicker`,3),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.endDate,l)||(i.endDate=l),H_(l)}),Zg()(),Jc(5,`div`,1)(6,`po-input`,4),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.origin,l)||(i.origin=l),H_(l)}),Zg(),Jc(7,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.destination,l)||(i.destination=l),H_(l)}),Zg()(),Jc(8,`div`,6)(9,`po-select`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.ticketClass,l)||(i.ticketClass=l),H_(l)}),Zg(),Jc(10,`po-select`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.accompany,l)||(i.accompany=l),H_(l)}),Zg()(),Jc(11,`div`,1)(12,`po-button`,9),vt(`p-click`,function(){return i.apply()}),Zg()()()}if(r&2){let s=sk(1);Ig(3),Yb(`ngModel`,i.startDate),Rb(`p-max-date`,i.endDate),Y0(),Ig(),Yb(`ngModel`,i.endDate),Rb(`p-min-date`,i.startDate),Y0(),Ig(2),Yb(`ngModel`,i.origin),Y0(),Ig(),Yb(`ngModel`,i.destination),Y0(),Ig(2),Yb(`ngModel`,i.ticketClass),Rb(`p-options`,i.ticketClassOptions),Y0(),Ig(),Yb(`ngModel`,i.accompany),Rb(`p-options`,i.accompanyNumber),Y0(),Ig(2),Rb(`p-disabled`,s.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,tie,j4,Koe],encapsulation:2,changeDetection:1})}return o})();var Qe=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker - Airfare`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-airfare`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ke],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{formBuilder=p(kZ);poDialog=p(sie);poNotification=p(Ru);formAirfare;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,Jm.required],destination:[``,Jm.required],endDate:[/* @__PURE__ */ new Date,Jm.required],origin:[``,Jm.required],startDate:[/* @__PURE__ */ new Date,Jm.required],ticketClass:[`Economy`,Jm.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:qe}=m.value,Ae=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(qe)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:`Confirm`,message:Ae,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:/* @__PURE__ */ new Date,startDate:/* @__PURE__ */ new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare-reactive-form`]],standalone:!1,decls:12,vars:6,consts:[[3,`formGroup`],[1,`po-row`],[`formControlName`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,1,`po-md-6`,3,`p-max-date`],[`formControlName`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,1,`po-md-6`,3,`p-min-date`],[`formControlName`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,1,`po-md-6`],[`formControlName`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,1,`po-md-6`],[`clas`,`po-row`],[`formControlName`,`ticketClass`,`p-label`,`Class`,1,`po-md-6`,3,`p-options`],[`formControlName`,`accompany`,`p-label`,`Accompany`,1,`po-md-6`,3,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Jc(0,`form`,0)(1,`div`,1)(2,`po-datepicker`,2),W0(),Zg(),Jc(3,`po-datepicker`,3),W0(),Zg()(),Jc(4,`div`,1)(5,`po-input`,4),W0(),Zg(),Jc(6,`po-input`,5),W0(),Zg()(),Jc(7,`div`,6)(8,`po-select`,7),W0(),Zg(),Jc(9,`po-select`,8),W0(),Zg()(),Jc(10,`div`,1)(11,`po-button`,9),vt(`p-click`,function(){return i.apply(i.formAirfare)}),Zg()()()),r&2&&(Rb(`formGroup`,i.formAirfare),Ig(2),Rb(`p-max-date`,i.formAirfare.get(`endDate`).value),Y0(),Ig(),Rb(`p-min-date`,i.formAirfare.get(`startDate`).value),Y0(),Ig(2),Y0(),Ig(),Y0(),Ig(2),Rb(`p-options`,i.ticketClassOptions),Y0(),Ig(),Rb(`p-options`,i.accompanyNumber),Y0(),Ig(2),Rb(`p-disabled`,i.formAirfare.invalid))},dependencies:[NZ,TZ,RZ,XL,o1,oi,tie,j4,Koe],encapsulation:2,changeDetection:1})}return o})();var Xe=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker - Airfare Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-airfare-reactive-form`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Xe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Pe],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-doc`]],standalone:!1,decls:1359,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoDatepickerComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-datepicker`),Zg(),Tk(26,` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.`),Zg(),Jc(27,`p`),Tk(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Jc(29,`code`),Tk(30,`p-format`),Zg(),Tk(31,`).`),Zg(),Jc(32,`p`),Tk(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Jc(34,`code`),Tk(35,`p-locale`),Zg(),Tk(36,`.`),Zg(),Jc(37,`p`),Tk(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),Zg(),Jc(39,`blockquote`)(40,`p`),Tk(41,`Por padrão, o formato de saída do `),Jc(42,`em`),Tk(43,`model`),Zg(),Tk(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Jc(45,`code`),Tk(46,`p-iso-format`),Zg(),Tk(47,` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:`),Zg()(),Jc(48,`ul`)(49,`li`)(50,`p`),Tk(51,`Formato de entrada e saída (E8601DZw) - `),Jc(52,`code`),Tk(53,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(54,`;`),Zg()(),Jc(55,`li`)(56,`p`),Tk(57,`Formato de entrada e saída (E8601DAw) - `),Jc(58,`code`),Tk(59,`'2017-11-28'`),Zg(),Tk(60,`;`),Zg()(),Jc(61,`li`)(62,`p`),Tk(63,`Formato de entrada (Date) - `),Jc(64,`code`),Tk(65,`new Date(2017, 10, 28)`),Zg(),Tk(66,` e saída (E8601DAw) - `),Jc(67,`code`),Tk(68,`'2017-11-28'`),Zg(),Tk(69,`;`),Zg()()(),Jc(70,`p`)(71,`strong`),Tk(72,`Importante:`),Zg()(),Jc(73,`ul`)(74,`li`),Tk(75,`S\xE3o aceitas datas com ano entre 0000 e 9999. No calend\xE1rio, al\xE9m dos anos listados no seletor, \xE9 poss\xEDvel
digitar qualquer ano com 4 d\xEDgitos.`),Zg(),Jc(76,`li`),Tk(77,`Datas no formato ISO (ex.: `),Jc(78,`code`),Tk(79,`'0050-05-10'`),Zg(),Tk(80,`) com ano inferior a 100 são mantidas. Ao informar um objeto `),Jc(81,`code`),Tk(82,`Date`),Zg(),Tk(83,`
com ano inferior a 100, utilize o m\xE9todo `),Jc(84,`a`,6)(85,`code`),Tk(86,`setFullYear`),Zg()(),Tk(87,`,
pois o `),Jc(88,`a`,7)(89,`code`),Tk(90,`new Date`),Zg()(),Tk(91,` converte esses anos para 19XX.`),Zg(),Jc(92,`li`),Tk(93,`Caso a data esteja inválida, o `),Jc(94,`code`),Tk(95,`model`),Zg(),Tk(96,` receberá `),Jc(97,`strong`),Tk(98,`'Data inválida'`),Zg(),Tk(99,`.`),Zg(),Jc(100,`li`),Tk(101,`Caso o `),Jc(102,`code`),Tk(103,`input`),Zg(),Tk(104,` esteja passando um `),Jc(105,`code`),Tk(106,`[(ngModel)]`),Zg(),Tk(107,`, mas não tenha um `),Jc(108,`code`),Tk(109,`name`),Zg(),Tk(110,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Jc(111,`code`),Tk(112,`[ngModelOptions]="{standalone: true}"`),Zg(),Tk(113,`).`),Zg()(),Jc(114,`p`),Tk(115,`Exemplo:`),Zg(),Jc(116,`pre`)(117,`code`),Tk(118,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),Zg()(),Jc(119,`blockquote`)(120,`p`),Tk(121,`Não esqueça de importar o `),Jc(122,`code`),Tk(123,`FormsModule`),Zg(),Tk(124,` em seu módulo, tal como para utilizar o `),Jc(125,`code`),Tk(126,`input default`),Zg(),Tk(127,`.`),Zg()(),Jc(128,`h4`),Tk(129,`Tokens customizáveis`),Zg(),Jc(130,`p`),Tk(131,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(132,`br`),Tk(133,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(134,`code`),Tk(135,`.po-input`),Zg()(),Jc(136,`blockquote`)(137,`p`),Tk(138,`Para maiores informações, acesse o guia `),Jc(139,`a`,8),Tk(140,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(141,`.`),Zg()(),Jc(142,`table`)(143,`thead`)(144,`tr`)(145,`th`),Tk(146,`Propriedade`),Zg(),Jc(147,`th`),Tk(148,`Descrição`),Zg(),Jc(149,`th`),Tk(150,`Valor Padrão`),Zg()()(),Jc(151,`tbody`)(152,`tr`)(153,`td`)(154,`strong`),Tk(155,`Default Values`),Zg()(),_u(156,`td`)(157,`td`),Zg(),Jc(158,`tr`)(159,`td`)(160,`code`),Tk(161,`--font-family`),Zg()(),Jc(162,`td`),Tk(163,`Família tipográfica usada`),Zg(),Jc(164,`td`)(165,`code`),Tk(166,`var(--font-family-theme)`),Zg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Tk(170,`--font-size`),Zg()(),Jc(171,`td`),Tk(172,`Tamanho da fonte`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`var(--font-size-default)`),Zg()()(),Jc(176,`tr`)(177,`td`)(178,`code`),Tk(179,`--text-color-placeholder`),Zg(),Tk(180,` \xA0`),Zg(),Jc(181,`td`),Tk(182,`Cor principal do texto do placeholder`),Zg(),Jc(183,`td`)(184,`code`),Tk(185,`var(--color-neutral-light-30)`),Zg()()(),Jc(186,`tr`)(187,`td`)(188,`code`),Tk(189,`--color`),Zg()(),Jc(190,`td`),Tk(191,`Cor principal do datepicker`),Zg(),Jc(192,`td`)(193,`code`),Tk(194,`var(--color-neutral-dark-70)`),Zg()()(),Jc(195,`tr`)(196,`td`)(197,`code`),Tk(198,`--background`),Zg()(),Jc(199,`td`),Tk(200,`Cor de background`),Zg(),Jc(201,`td`)(202,`code`),Tk(203,`var(--color-neutral-light-05)`),Zg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Tk(207,`--padding`),Zg()(),Jc(208,`td`),Tk(209,`Preenchimento`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`0 0.5rem`),Zg()()(),Jc(213,`tr`)(214,`td`)(215,`code`),Tk(216,`--text-color`),Zg()(),Jc(217,`td`),Tk(218,`Cor do texto`),Zg(),Jc(219,`td`)(220,`code`),Tk(221,`var(--color-neutral-dark-90)`),Zg()()(),Jc(222,`tr`)(223,`td`)(224,`code`),Tk(225,`--field-container-title-justify`),Zg()(),Jc(226,`td`),Tk(227,`Alinhamento horizontal do título (`),Jc(228,`code`),Tk(229,`justify-content`),Zg(),Tk(230,`)`),Zg(),Jc(231,`td`)(232,`code`),Tk(233,`space-between`),Zg()()(),Jc(234,`tr`)(235,`td`)(236,`code`),Tk(237,`--field-container-title-flex`),Zg()(),Jc(238,`td`),Tk(239,`Flex do título (`),Jc(240,`code`),Tk(241,`flex`),Zg(),Tk(242,`)`),Zg(),Jc(243,`td`)(244,`code`),Tk(245,`1 auto`),Zg()()(),Jc(246,`tr`)(247,`td`)(248,`strong`),Tk(249,`Hover`),Zg()(),_u(250,`td`)(251,`td`),Zg(),Jc(252,`tr`)(253,`td`)(254,`code`),Tk(255,`--color-hover`),Zg()(),Jc(256,`td`),Tk(257,`Cor principal no estado hover`),Zg(),Jc(258,`td`)(259,`code`),Tk(260,`var(--color-brand-01-dark)`),Zg()()(),Jc(261,`tr`)(262,`td`)(263,`code`),Tk(264,`--background-hover`),Zg()(),Jc(265,`td`),Tk(266,`Cor de background no estado hover`),Zg(),Jc(267,`td`)(268,`code`),Tk(269,`var(--color-brand-01-lightest)`),Zg()()(),Jc(270,`tr`)(271,`td`)(272,`strong`),Tk(273,`Focused`),Zg()(),_u(274,`td`)(275,`td`),Zg(),Jc(276,`tr`)(277,`td`)(278,`code`),Tk(279,`--color-focused`),Zg()(),Jc(280,`td`),Tk(281,`Cor principal no estado de focus`),Zg(),Jc(282,`td`)(283,`code`),Tk(284,`var(--color-action-default)`),Zg()()(),Jc(285,`tr`)(286,`td`)(287,`code`),Tk(288,`--outline-color-focused`),Zg()(),Jc(289,`td`),Tk(290,`Cor do outline do estado de focus`),Zg(),Jc(291,`td`)(292,`code`),Tk(293,`var(--color-action-focus)`),Zg()()(),Jc(294,`tr`)(295,`td`)(296,`strong`),Tk(297,`Disabled`),Zg()(),_u(298,`td`)(299,`td`),Zg(),Jc(300,`tr`)(301,`td`)(302,`code`),Tk(303,`--color-disabled`),Zg()(),Jc(304,`td`),Tk(305,`Cor principal no estado disabled`),Zg(),Jc(306,`td`)(307,`code`),Tk(308,`var(--color-neutral-light-30)`),Zg()()(),Jc(309,`tr`)(310,`td`)(311,`code`),Tk(312,`--background-disabled`),Zg()(),Jc(313,`td`),Tk(314,`Cor de background no estado disabled \xA0`),Zg(),Jc(315,`td`)(316,`code`),Tk(317,`var(--color-neutral-light-20)`),Zg()()(),Jc(318,`tr`)(319,`td`)(320,`code`),Tk(321,`--text-color-disabled`),Zg()(),Jc(322,`td`),Tk(323,`Cor do texto no estado disabled`),Zg(),Jc(324,`td`)(325,`code`),Tk(326,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(327,`div`,9)(328,`h4`,10),Tk(329,`Seletor`),Zg(),Jc(330,`pre`,11),Tk(331,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-mode="'month-year' | 'year'"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-year-range-limit="number" >
</po-datepicker>
`),Zg()(),Jc(332,`h4`,12),Tk(333,`Propriedades`),Zg(),Jc(334,`table`,13)(335,`tr`,14)(336,`th`,15),Tk(337,`Nome`),Zg(),Jc(338,`th`,15),Tk(339,`Tipo`),Zg(),Jc(340,`th`,15),Tk(341,`Padrão`),Zg(),Jc(342,`th`,15),Tk(343,`Descrição`),Zg()(),Jc(344,`tr`,16)(345,`td`,17)(346,`div`,18)(347,`span`,19),Tk(348,`p-locale`),_u(349,`br`),Zg()()(),Jc(350,`td`,20)(351,`code`,21),Tk(352,`string`),Zg()(),Jc(353,`td`,22),Tk(354,`-`),Zg(),Jc(355,`td`,23)(356,`em`)(357,`strong`),Tk(358,`(opcional)`),Zg()(),Jc(359,`p`),Tk(360,`Idioma do Datepicker.`),Zg(),Jc(361,`blockquote`)(362,`p`),Tk(363,`O locale padrão sera recuperado com base no `),Jc(364,`a`,24)(365,`code`),Tk(366,`PoI18nService`),Zg()(),Tk(367,` ou `),Jc(368,`em`),Tk(369,`browser`),Zg(),Tk(370,`.`),Zg()()()(),Jc(371,`tr`,16)(372,`td`,17)(373,`div`,25)(374,`span`,26),Tk(375,` (p-additional-help)`),_u(376,`br`),Zg()(),Jc(377,`div`,27),Tk(378,`Deprecated`),Zg()(),Jc(379,`td`,20)(380,`code`,28),Tk(381,`EventEmitter`),Zg()(),Jc(382,`td`,22),Tk(383,`-`),Zg(),Jc(384,`td`,23)(385,`em`)(386,`strong`),Tk(387,`(opcional)`),Zg()(),Jc(388,`p`),Tk(389,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(390,`blockquote`)(391,`p`),Tk(392,`Essa propriedade está `),Jc(393,`strong`),Tk(394,`depreciada`),Zg(),Tk(395,` e será removida na versão `),Jc(396,`code`),Tk(397,`23.x.x`),Zg(),Tk(398,`. Recomendamos utilizar a propriedade `),Jc(399,`code`),Tk(400,`p-helper`),Zg(),Tk(401,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(402,`tr`,16)(403,`td`,17)(404,`div`,18)(405,`span`,19),Tk(406,` p-additional-help-tooltip`),_u(407,`br`),Zg()(),Jc(408,`div`,27),Tk(409,`Deprecated`),Zg()(),Jc(410,`td`,20)(411,`code`,21),Tk(412,`string`),Zg()(),Jc(413,`td`,22),Tk(414,`-`),Zg(),Jc(415,`td`,23)(416,`em`)(417,`strong`),Tk(418,`(opcional)`),Zg()(),Jc(419,`p`),Tk(420,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(421,`code`),Tk(422,`po-helper`),Zg(),Tk(423,`.
`),Jc(424,`strong`),Tk(425,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(426,`blockquote`)(427,`p`),Tk(428,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(429,`blockquote`)(430,`p`),Tk(431,`Essa propriedade está `),Jc(432,`strong`),Tk(433,`depreciada`),Zg(),Tk(434,` e será removida na versão `),Jc(435,`code`),Tk(436,`23.x.x`),Zg(),Tk(437,`. Recomendamos utilizar a propriedade `),Jc(438,`code`),Tk(439,`p-helper`),Zg(),Tk(440,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(441,`tr`,16)(442,`td`,17)(443,`div`,18)(444,`span`,19),Tk(445,` p-append-in-body`),_u(446,`br`),Zg()()(),Jc(447,`td`,20)(448,`code`,29),Tk(449,`boolean`),Zg()(),Jc(450,`td`,22)(451,`p`)(452,`code`),Tk(453,`false`),Zg()()(),Jc(454,`td`,23)(455,`em`)(456,`strong`),Tk(457,`(opcional)`),Zg()(),Jc(458,`p`),Tk(459,`Define que o `),Jc(460,`code`),Tk(461,`calendar`),Zg(),Tk(462,` e/ou tooltip (`),Jc(463,`code`),Tk(464,`p-additional-help-tooltip`),Zg(),Tk(465,` e/ou `),Jc(466,`code`),Tk(467,`p-error-limit`),Zg(),Tk(468,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Zg(),Jc(469,`blockquote`)(470,`p`),Tk(471,`Quando utilizado com `),Jc(472,`code`),Tk(473,`p-helper`),Zg(),Tk(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(475,`tr`,16)(476,`td`,17)(477,`div`,18)(478,`span`,19),Tk(479,` p-auto-focus`),_u(480,`br`),Zg()()(),Jc(481,`td`,20)(482,`code`,29),Tk(483,`boolean`),Zg()(),Jc(484,`td`,22)(485,`p`)(486,`code`),Tk(487,`false`),Zg()()(),Jc(488,`td`,23)(489,`em`)(490,`strong`),Tk(491,`(opcional)`),Zg()(),Jc(492,`p`),Tk(493,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(494,`blockquote`)(495,`p`),Tk(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(497,`tr`,16)(498,`td`,17)(499,`div`,25)(500,`span`,26),Tk(501,` (p-change-model)`),_u(502,`br`),Zg()()(),Jc(503,`td`,20)(504,`code`,28),Tk(505,`EventEmitter`),Zg()(),Jc(506,`td`,22),Tk(507,`-`),Zg(),Jc(508,`td`,23)(509,`em`)(510,`strong`),Tk(511,`(opcional)`),Zg()(),Jc(512,`p`),Tk(513,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(514,`code`),Tk(515,`setValue`),Zg(),Tk(516,`, `),Jc(517,`code`),Tk(518,`patchValue`),Zg(),Tk(519,`, carregamento assíncrono).`),Zg(),Jc(520,`p`),Tk(521,`Diferentemente do `),Jc(522,`code`),Tk(523,`p-change`),Zg(),Tk(524,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(525,`code`),Tk(526,`p-change-model`),Zg(),Tk(527,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(528,`p`),Tk(529,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(530,`tr`,16)(531,`td`,17)(532,`div`,18)(533,`span`,19),Tk(534,`p-clean`),_u(535,`br`),Zg()()(),Jc(536,`td`,20)(537,`code`,29),Tk(538,`boolean`),Zg()(),Jc(539,`td`,22),Tk(540,`-`),Zg(),Jc(541,`td`,23)(542,`em`)(543,`strong`),Tk(544,`(opcional)`),Zg()(),Jc(545,`p`),Tk(546,`Habilita ação para limpar o campo.`),Zg()()(),Jc(547,`tr`,16)(548,`td`,17)(549,`div`,18)(550,`span`,19),Tk(551,` p-compact-label`),_u(552,`br`),Zg()()(),Jc(553,`td`,20)(554,`code`,29),Tk(555,`boolean`),Zg()(),Jc(556,`td`,22)(557,`p`)(558,`code`),Tk(559,`false`),Zg()()(),Jc(560,`td`,23)(561,`em`)(562,`strong`),Tk(563,`(opcional)`),Zg()(),Jc(564,`p`),Tk(565,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(566,`p`),Tk(567,`Quando habilitado (`),Jc(568,`code`),Tk(569,`true`),Zg(),Tk(570,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(571,`ul`)(572,`li`)(573,`code`),Tk(574,`po-label`),Zg()(),Jc(575,`li`)(576,`code`),Tk(577,`p-requirement (showRequired)`),Zg()(),Jc(578,`li`)(579,`code`),Tk(580,`po-helper`),Zg()()(),Jc(581,`p`),Tk(582,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(583,`p`),Tk(584,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(585,`ul`)(586,`li`)(587,`code`),Tk(588,`--field-container-title-justify`),Zg()(),Jc(589,`li`)(590,`code`),Tk(591,`--field-container-title-flex`),Zg()()(),Jc(592,`p`),Tk(593,`Exemplo:`),Zg(),Jc(594,`pre`)(595,`code`),Tk(596,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(597,`p`),Tk(598,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(599,`tr`,16)(600,`td`,17)(601,`div`,18)(602,`span`,19),Tk(603,`p-disabled`),_u(604,`br`),Zg()()(),Jc(605,`td`,20)(606,`code`,29),Tk(607,`boolean`),Zg()(),Jc(608,`td`,22),Tk(609,`-`),Zg(),Jc(610,`td`,23)(611,`em`)(612,`strong`),Tk(613,`(opcional)`),Zg()(),Jc(614,`p`),Tk(615,`Desabilita o campo.`),Zg()()(),Jc(616,`tr`,16)(617,`td`,17)(618,`div`,18)(619,`span`,19),Tk(620,` p-error-async`),_u(621,`br`),Zg()()(),Jc(622,`td`,20)(623,`code`,30),Tk(624,`(value) => Observable<boolean>`),Zg()(),Jc(625,`td`,22),Tk(626,`-`),Zg(),Jc(627,`td`,23)(628,`em`)(629,`strong`),Tk(630,`(opcional)`),Zg()(),Jc(631,`p`),Tk(632,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(633,`code`),Tk(634,`change`),Zg(),Tk(635,`.`),Zg()()(),Jc(636,`tr`,16)(637,`td`,17)(638,`div`,18)(639,`span`,19),Tk(640,` p-error-limit`),_u(641,`br`),Zg()()(),Jc(642,`td`,20)(643,`code`,29),Tk(644,`boolean`),Zg()(),Jc(645,`td`,22)(646,`p`)(647,`code`),Tk(648,`false`),Zg()()(),Jc(649,`td`,23)(650,`em`)(651,`strong`),Tk(652,`(opcional)`),Zg()(),Jc(653,`p`),Tk(654,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(655,`blockquote`)(656,`p`),Tk(657,`Caso essa propriedade seja definida como `),Jc(658,`code`),Tk(659,`true`),Zg(),Tk(660,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(661,`tr`,16)(662,`td`,17)(663,`div`,18)(664,`span`,19),Tk(665,` p-error-pattern`),_u(666,`br`),Zg()()(),Jc(667,`td`,20)(668,`code`,21),Tk(669,`string`),Zg()(),Jc(670,`td`,22),Tk(671,`-`),Zg(),Jc(672,`td`,23)(673,`em`)(674,`strong`),Tk(675,`(opcional)`),Zg()(),Jc(676,`p`),Tk(677,`Mensagem apresentada quando a data for inválida ou fora do período.`),Zg(),Jc(678,`blockquote`)(679,`p`),Tk(680,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Jc(681,`code`),Tk(682,`p-required-field-error-message`),Zg(),Tk(683,` em conjunto.`),Zg()()()(),Jc(684,`tr`,16)(685,`td`,17)(686,`div`,18)(687,`span`,19),Tk(688,` p-format`),_u(689,`br`),Zg()()(),Jc(690,`td`,20)(691,`code`,21),Tk(692,`string`),Zg()(),Jc(693,`td`,22)(694,`p`)(695,`code`),Tk(696,`dd/mm/yyyy`),Zg()()(),Jc(697,`td`,23)(698,`em`)(699,`strong`),Tk(700,`(opcional)`),Zg()(),Jc(701,`p`),Tk(702,`Formato de exibição da data.`),Zg(),Jc(703,`p`),Tk(704,`Valores válidos:`),Zg(),Jc(705,`ul`)(706,`li`)(707,`code`),Tk(708,`dd/mm/yyyy`),Zg()(),Jc(709,`li`)(710,`code`),Tk(711,`mm/dd/yyyy`),Zg()(),Jc(712,`li`)(713,`code`),Tk(714,`yyyy/mm/dd`),Zg()()(),Jc(715,`p`),Tk(716,`Propriedade incompatível com as variações month-year e year.`),Zg()()(),Jc(717,`tr`,16)(718,`td`,17)(719,`div`,18)(720,`span`,19),Tk(721,` p-help`),_u(722,`br`),Zg()()(),Jc(723,`td`,20)(724,`code`,21),Tk(725,`string`),Zg()(),Jc(726,`td`,22),Tk(727,`-`),Zg(),Jc(728,`td`,23)(729,`em`)(730,`strong`),Tk(731,`(opcional)`),Zg()(),Jc(732,`p`),Tk(733,`Texto de apoio do campo.`),Zg()()(),Jc(734,`tr`,16)(735,`td`,17)(736,`div`,18)(737,`span`,19),Tk(738,` p-iso-format`),_u(739,`br`),Zg()()(),Jc(740,`td`,20)(741,`code`,31),Tk(742,`PoDatepickerIsoFormat`),Zg()(),Jc(743,`td`,22),Tk(744,`-`),Zg(),Jc(745,`td`,23)(746,`em`)(747,`strong`),Tk(748,`(opcional)`),Zg()(),Jc(749,`p`),Tk(750,`Padrão de formatação para saída do `),Jc(751,`em`),Tk(752,`model`),Zg(),Tk(753,`, independentemente do formato de entrada.`),Zg(),Jc(754,`blockquote`)(755,`p`),Tk(756,`Veja os valores válidos no `),Jc(757,`em`),Tk(758,`enum`),Zg(),Jc(759,`code`),Tk(760,`PoDatepickerIsoFormat`),Zg(),Tk(761,`.`),Zg()(),Jc(762,`p`),Tk(763,`Propriedade incompatível com as variações month-year e year.`),Zg()()(),Jc(764,`tr`,16)(765,`td`,17)(766,`div`,25)(767,`span`,26),Tk(768,` (p-keydown)`),_u(769,`br`),Zg()()(),Jc(770,`td`,20)(771,`code`,28),Tk(772,`EventEmitter`),Zg()(),Jc(773,`td`,22),Tk(774,`-`),Zg(),Jc(775,`td`,23)(776,`em`)(777,`strong`),Tk(778,`(opcional)`),Zg()(),Jc(779,`p`),Tk(780,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(781,`code`),Tk(782,`KeyboardEvent`),Zg(),Tk(783,` com informações sobre a tecla.`),Zg()()(),Jc(784,`tr`,16)(785,`td`,17)(786,`div`,18)(787,`span`,19),Tk(788,` p-label`),_u(789,`br`),Zg()()(),Jc(790,`td`,20)(791,`code`,21),Tk(792,`string`),Zg()(),Jc(793,`td`,22),Tk(794,`-`),Zg(),Jc(795,`td`,23)(796,`em`)(797,`strong`),Tk(798,`(opcional)`),Zg()(),Jc(799,`p`),Tk(800,`Rótulo do campo.`),Zg()()(),Jc(801,`tr`,16)(802,`td`,17)(803,`div`,18)(804,`span`,19),Tk(805,` p-label-text-wrap`),_u(806,`br`),Zg()()(),Jc(807,`td`,20)(808,`code`,29),Tk(809,`boolean`),Zg()(),Jc(810,`td`,22)(811,`p`)(812,`code`),Tk(813,`false`),Zg()()(),Jc(814,`td`,23)(815,`em`)(816,`strong`),Tk(817,`(opcional)`),Zg()(),Jc(818,`p`),Tk(819,`Habilita a quebra automática do texto da propriedade `),Jc(820,`code`),Tk(821,`p-label`),Zg(),Tk(822,`. Quando `),Jc(823,`code`),Tk(824,`p-label-text-wrap`),Zg(),Tk(825,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(826,`tr`,16)(827,`td`,17)(828,`div`,18)(829,`span`,19),Tk(830,` p-loading`),_u(831,`br`),Zg()()(),Jc(832,`td`,20)(833,`code`,29),Tk(834,`boolean`),Zg()(),Jc(835,`td`,22)(836,`p`)(837,`code`),Tk(838,`false`),Zg()()(),Jc(839,`td`,23)(840,`em`)(841,`strong`),Tk(842,`(opcional)`),Zg()(),Jc(843,`p`),Tk(844,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(845,`tr`,16)(846,`td`,17)(847,`div`,18)(848,`span`,19),Tk(849,` p-max-date`),_u(850,`br`),Zg()()(),Jc(851,`td`,20)(852,`code`,21),Tk(853,`string `),Zg(),Jc(854,`code`,32),Tk(855,` Date`),Zg()(),Jc(856,`td`,22),Tk(857,`-`),Zg(),Jc(858,`td`,23)(859,`em`)(860,`strong`),Tk(861,`(opcional)`),Zg()(),Jc(862,`p`),Tk(863,`Define uma data máxima para o `),Jc(864,`code`),Tk(865,`po-datepicker`),Zg(),Tk(866,`.`),Zg()()(),Jc(867,`tr`,16)(868,`td`,17)(869,`div`,18)(870,`span`,19),Tk(871,` p-min-date`),_u(872,`br`),Zg()()(),Jc(873,`td`,20)(874,`code`,21),Tk(875,`string `),Zg(),Jc(876,`code`,32),Tk(877,` Date`),Zg()(),Jc(878,`td`,22),Tk(879,`-`),Zg(),Jc(880,`td`,23)(881,`em`)(882,`strong`),Tk(883,`(opcional)`),Zg()(),Jc(884,`p`),Tk(885,`Define uma data mínima para o `),Jc(886,`code`),Tk(887,`po-datepicker`),Zg(),Tk(888,`.`),Zg()()(),Jc(889,`tr`,16)(890,`td`,17)(891,`div`,18)(892,`span`,19),Tk(893,` p-mode`),_u(894,`br`),Zg()()(),Jc(895,`td`,20)(896,`code`,33),Tk(897,`'month-year' `),Zg(),Jc(898,`code`,34),Tk(899,` 'year'`),Zg()(),Jc(900,`td`,22),Tk(901,`-`),Zg(),Jc(902,`td`,23)(903,`em`)(904,`strong`),Tk(905,`(opcional)`),Zg()(),Jc(906,`p`),Tk(907,`Define o modo de operação do datepicker.`),Zg(),Jc(908,`p`),Tk(909,`Permite configurar o componente para seleção de:`),Zg(),Jc(910,`ul`)(911,`li`),Tk(912,`Mês e ano (`),Jc(913,`code`),Tk(914,`month-year`),Zg(),Tk(915,`), com o `),Jc(916,`em`),Tk(917,`model`),Zg(),Tk(918,` no formato `),Jc(919,`code`),Tk(920,`mm/yyyy`),Zg(),Tk(921,` (ex.: `),Jc(922,`code`),Tk(923,`'03/2025'`),Zg(),Tk(924,`);`),Zg(),Jc(925,`li`),Tk(926,`Apenas ano (`),Jc(927,`code`),Tk(928,`year`),Zg(),Tk(929,`), com o `),Jc(930,`em`),Tk(931,`model`),Zg(),Tk(932,` no formato `),Jc(933,`code`),Tk(934,`yyyy`),Zg(),Tk(935,` (ex.: `),Jc(936,`code`),Tk(937,`'2025'`),Zg(),Tk(938,`).`),Zg()(),Jc(939,`blockquote`)(940,`p`),Tk(941,`O ano é sempre representado com 4 dígitos, inclusive para anos inferiores a 1000 (ex.: `),Jc(942,`code`),Tk(943,`'03/0050'`),Zg(),Tk(944,`).`),Zg()()()(),Jc(945,`tr`,16)(946,`td`,17)(947,`div`,18)(948,`span`,19),Tk(949,` p-no-autocomplete`),_u(950,`br`),Zg()()(),Jc(951,`td`,20)(952,`code`,29),Tk(953,`boolean`),Zg()(),Jc(954,`td`,22)(955,`p`)(956,`code`),Tk(957,`false`),Zg()()(),Jc(958,`td`,23)(959,`em`)(960,`strong`),Tk(961,`(opcional)`),Zg()(),Jc(962,`p`),Tk(963,`Define a propriedade nativa `),Jc(964,`code`),Tk(965,`autocomplete`),Zg(),Tk(966,` do campo como `),Jc(967,`code`),Tk(968,`off`),Zg(),Tk(969,`.`),Zg()()(),Jc(970,`tr`,16)(971,`td`,17)(972,`div`,25)(973,`span`,26),Tk(974,` (p-blur)`),_u(975,`br`),Zg()()(),Jc(976,`td`,20)(977,`code`,28),Tk(978,`EventEmitter`),Zg()(),Jc(979,`td`,22),Tk(980,`-`),Zg(),Jc(981,`td`,23)(982,`em`)(983,`strong`),Tk(984,`(opcional)`),Zg()(),Jc(985,`p`),Tk(986,`Evento disparado ao sair do campo.`),Zg()()(),Jc(987,`tr`,16)(988,`td`,17)(989,`div`,25)(990,`span`,26),Tk(991,` (p-change)`),_u(992,`br`),Zg()()(),Jc(993,`td`,20)(994,`code`,28),Tk(995,`EventEmitter`),Zg()(),Jc(996,`td`,22),Tk(997,`-`),Zg(),Jc(998,`td`,23)(999,`em`)(1e3,`strong`),Tk(1001,`(opcional)`),Zg()(),Jc(1002,`p`),Tk(1003,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(1004,`tr`,16)(1005,`td`,17)(1006,`div`,18)(1007,`span`,19),Tk(1008,` p-optional`),_u(1009,`br`),Zg()()(),Jc(1010,`td`,20)(1011,`code`,29),Tk(1012,`boolean`),Zg()(),Jc(1013,`td`,22)(1014,`p`)(1015,`code`),Tk(1016,`false`),Zg()()(),Jc(1017,`td`,23)(1018,`em`)(1019,`strong`),Tk(1020,`(opcional)`),Zg()(),Jc(1021,`p`),Tk(1022,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(1023,`blockquote`)(1024,`p`),Tk(1025,`Não será exibida a indicação se:`),Zg()(),Jc(1026,`ul`)(1027,`li`),Tk(1028,`O campo conter `),Jc(1029,`code`),Tk(1030,`p-required`),Zg(),Tk(1031,`;`),Zg(),Jc(1032,`li`),Tk(1033,`Não possuir `),Jc(1034,`code`),Tk(1035,`p-help`),Zg(),Tk(1036,` e/ou `),Jc(1037,`code`),Tk(1038,`p-label`),Zg(),Tk(1039,`.`),Zg()()()(),Jc(1040,`tr`,16)(1041,`td`,17)(1042,`div`,18)(1043,`span`,19),Tk(1044,` p-placeholder`),_u(1045,`br`),Zg()()(),Jc(1046,`td`,20)(1047,`code`,21),Tk(1048,`string`),Zg()(),Jc(1049,`td`,22),Tk(1050,`-`),Zg(),Jc(1051,`td`,23)(1052,`em`)(1053,`strong`),Tk(1054,`(opcional)`),Zg()(),Jc(1055,`p`),Tk(1056,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(1057,`tr`,16)(1058,`td`,17)(1059,`div`,18)(1060,`span`,19),Tk(1061,` p-helper`),_u(1062,`br`),Zg()()(),Jc(1063,`td`,20)(1064,`code`,35),Tk(1065,`PoHelperOptions `),Zg(),Jc(1066,`code`,21),Tk(1067,` string`),Zg()(),Jc(1068,`td`,22),Tk(1069,`-`),Zg(),Jc(1070,`td`,23)(1071,`em`)(1072,`strong`),Tk(1073,`(opcional)`),Zg()(),Jc(1074,`p`),Tk(1075,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1076,`code`),Tk(1077,`p-label`),Zg(),Tk(1078,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1079,`code`),Tk(1080,`p-label`),Zg(),Tk(1081,`.`),Zg(),Jc(1082,`blockquote`)(1083,`p`),Tk(1084,`Para mais informações acesse: `),Jc(1085,`a`,36),Tk(1086,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1087,`.`),Zg()(),Jc(1088,`blockquote`)(1089,`p`),Tk(1090,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1091,`code`),Tk(1092,`p-additional-help-tooltip`),Zg(),Tk(1093,` e `),Jc(1094,`code`),Tk(1095,`p-additional-help`),Zg(),Tk(1096,`) será ignorado.`),Zg()()()(),Jc(1097,`tr`,16)(1098,`td`,17)(1099,`div`,18)(1100,`span`,19),Tk(1101,`p-readonly`),_u(1102,`br`),Zg()()(),Jc(1103,`td`,20)(1104,`code`,29),Tk(1105,`boolean`),Zg()(),Jc(1106,`td`,22),Tk(1107,`-`),Zg(),Jc(1108,`td`,23)(1109,`em`)(1110,`strong`),Tk(1111,`(opcional)`),Zg()(),Jc(1112,`p`),Tk(1113,`Torna o elemento somente leitura.`),Zg()()(),Jc(1114,`tr`,16)(1115,`td`,17)(1116,`div`,18)(1117,`span`,19),Tk(1118,`p-required`),_u(1119,`br`),Zg()()(),Jc(1120,`td`,20)(1121,`code`,29),Tk(1122,`boolean`),Zg()(),Jc(1123,`td`,22)(1124,`p`)(1125,`code`),Tk(1126,`false`),Zg()()(),Jc(1127,`td`,23)(1128,`em`)(1129,`strong`),Tk(1130,`(opcional)`),Zg()(),Jc(1131,`p`),Tk(1132,`Define que o campo será obrigatório.`),Zg()()(),Jc(1133,`tr`,16)(1134,`td`,17)(1135,`div`,18)(1136,`span`,19),Tk(1137,` p-required-field-error-message`),_u(1138,`br`),Zg()()(),Jc(1139,`td`,20)(1140,`code`,29),Tk(1141,`boolean`),Zg()(),Jc(1142,`td`,22)(1143,`p`)(1144,`code`),Tk(1145,`false`),Zg()()(),Jc(1146,`td`,23)(1147,`em`)(1148,`strong`),Tk(1149,`(opcional)`),Zg()(),Jc(1150,`p`),Tk(1151,`Exibe a mensagem setada na propriedade `),Jc(1152,`code`),Tk(1153,`p-error-pattern`),Zg(),Tk(1154,` se o campo estiver vazio e for requerido.`),Zg(),Jc(1155,`blockquote`)(1156,`p`),Tk(1157,`Necessário que a propriedade `),Jc(1158,`code`),Tk(1159,`p-required`),Zg(),Tk(1160,` esteja habilitada.`),Zg()()()(),Jc(1161,`tr`,16)(1162,`td`,17)(1163,`div`,18)(1164,`span`,19),Tk(1165,` p-show-required`),_u(1166,`br`),Zg()()(),Jc(1167,`td`,20)(1168,`code`,29),Tk(1169,`boolean`),Zg()(),Jc(1170,`td`,22),Tk(1171,`-`),Zg(),Jc(1172,`td`,23)(1173,`p`),Tk(1174,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1175,`blockquote`)(1176,`p`),Tk(1177,`Não será exibida a indicação se:`),Zg()(),Jc(1178,`ul`)(1179,`li`),Tk(1180,`Não possuir `),Jc(1181,`code`),Tk(1182,`p-help`),Zg(),Tk(1183,` e/ou `),Jc(1184,`code`),Tk(1185,`p-label`),Zg(),Tk(1186,`.`),Zg()()()(),Jc(1187,`tr`,16)(1188,`td`,17)(1189,`div`,18)(1190,`span`,19),Tk(1191,` p-size`),_u(1192,`br`),Zg()()(),Jc(1193,`td`,20)(1194,`code`,21),Tk(1195,`string`),Zg()(),Jc(1196,`td`,22)(1197,`p`)(1198,`code`),Tk(1199,`medium`),Zg()()(),Jc(1200,`td`,23)(1201,`em`)(1202,`strong`),Tk(1203,`(opcional)`),Zg()(),Jc(1204,`p`),Tk(1205,`Define o tamanho do componente:`),Zg(),Jc(1206,`ul`)(1207,`li`)(1208,`code`),Tk(1209,`small`),Zg(),Tk(1210,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1211,`li`)(1212,`code`),Tk(1213,`medium`),Zg(),Tk(1214,`: altura do input como 44px.`),Zg()(),Jc(1215,`blockquote`)(1216,`p`),Tk(1217,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1218,`code`),Tk(1219,`medium`),Zg(),Tk(1220,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1221,`a`,37),Tk(1222,`po-theme`),Zg(),Tk(1223,`.`),Zg()()()(),Jc(1224,`tr`,16)(1225,`td`,17)(1226,`div`,18)(1227,`span`,19),Tk(1228,` p-year-range-limit`),_u(1229,`br`),Zg()()(),Jc(1230,`td`,20)(1231,`code`,38),Tk(1232,`number`),Zg()(),Jc(1233,`td`,22)(1234,`p`),Tk(1235,`150`),Zg()(),Jc(1236,`td`,23)(1237,`p`),Tk(1238,`Define o limite de anos exibidos nas variações `),Jc(1239,`code`),Tk(1240,`month-year`),Zg(),Tk(1241,` e `),Jc(1242,`code`),Tk(1243,`year`),Zg(),Tk(1244,`,
considerando a data atual como refer\xEAncia.`),Zg(),Jc(1245,`p`),Tk(1246,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),Zg(),Jc(1247,`blockquote`)(1248,`p`),Tk(1249,`Caso o ano selecionado esteja fora desse intervalo, ele tamb\xE9m \xE9 exibido na lista. Esta propriedade
n\xE3o se aplica ao seletor de ano do calend\xE1rio padr\xE3o (sem `),Jc(1250,`code`),Tk(1251,`p-mode`),Zg(),Tk(1252,`).`),Zg()()()()(),Jc(1253,`h3`,12),Tk(1254,`Métodos`),Zg(),Jc(1255,`table`,39)(1256,`tr`,16)(1257,`th`,40)(1258,`div`,18)(1259,`h4`)(1260,`span`,19),Tk(1261,` focus `),Zg()()()()(),Jc(1262,`tr`,23)(1263,`td`,23)(1264,`p`),Tk(1265,`Função que atribui foco ao componente.`),Zg(),Jc(1266,`p`),Tk(1267,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1268,`pre`)(1269,`code`),Tk(1270,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),Zg()()()()(),_u(1271,`br`),Jc(1272,`table`,39)(1273,`tr`,16)(1274,`th`,40)(1275,`div`,18)(1276,`h4`)(1277,`span`,19),Tk(1278,` showAdditionalHelp `),Zg()()()()(),Jc(1279,`tr`,23)(1280,`td`,23)(1281,`p`),Tk(1282,`Método que exibe `),Jc(1283,`code`),Tk(1284,`p-helper`),Zg(),Tk(1285,` ou executa a ação definida em `),Jc(1286,`code`),Tk(1287,`p-helper{eventOnClick}`),Zg(),Tk(1288,` ou em `),Jc(1289,`code`),Tk(1290,`p-additionalHelp`),Zg(),Tk(1291,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1292,`code`),Tk(1293,`p-keydown`),Zg(),Tk(1294,`.`),Zg(),Jc(1295,`blockquote`)(1296,`p`),Tk(1297,`Exibe ou oculta o conteúdo do componente `),Jc(1298,`code`),Tk(1299,`po-helper`),Zg(),Tk(1300,` quando o componente estiver com foco.`),Zg()(),Jc(1301,`pre`)(1302,`code`),Tk(1303,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),Zg()(),Jc(1304,`pre`)(1305,`code`),Tk(1306,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1307,`br`),Jc(1308,`h3`),Tk(1309,`Enums`),Zg(),Jc(1310,`h4`,4)(1311,`code`,5),Tk(1312,`PoDatepickerIsoFormat`),Zg()(),Jc(1313,`div`,2)(1314,`p`)(1315,`em`),Tk(1316,`Enum`),Zg(),Tk(1317,` que define o padrão de formatação das datas.`),Zg(),Jc(1318,`blockquote`)(1319,`p`),Tk(1320,`Caso um formato padrão seja definido, o mesmo não será mais alterado de acordo com o formato de entrada.`),Zg()()(),Jc(1321,`h4`,12),Tk(1322,`Propriedades`),Zg(),Jc(1323,`table`,13)(1324,`tr`,14)(1325,`th`,15),Tk(1326,`Nome`),Zg(),Jc(1327,`th`,15),Tk(1328,`Descrição`),Zg()(),Jc(1329,`tr`,16)(1330,`td`,17)(1331,`div`,18)(1332,`span`,19),Tk(1333,` Basic`),_u(1334,`br`),Zg()()(),Jc(1335,`td`,23)(1336,`p`),Tk(1337,`Padrão `),Jc(1338,`strong`),Tk(1339,`E8601DAw`),Zg(),Tk(1340,` (`),Jc(1341,`em`),Tk(1342,`yyyy-mm-dd`),Zg(),Tk(1343,`).`),Zg()()(),Jc(1344,`tr`,16)(1345,`td`,17)(1346,`div`,18)(1347,`span`,19),Tk(1348,` Extended`),_u(1349,`br`),Zg()()(),Jc(1350,`td`,23)(1351,`p`),Tk(1352,`Padrão `),Jc(1353,`strong`),Tk(1354,`E8601DZw`),Zg(),Tk(1355,` (`),Jc(1356,`em`),Tk(1357,`yyyy-mm-ddThh:mm:ss+|-hh:mm`),Zg(),Tk(1358,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function et(o,nt){if(o&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(m);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-datepicker-basic-view`)(2,`sample-po-datepicker-labs-view`)(3,`sample-po-datepicker-year-view`)(4,`sample-po-datepicker-month-year-view`)(5,`sample-po-datepicker-airfare-view`)(6,`sample-po-datepicker-airfare-reactive-form-view`),Zg()}if(o&2){let m=nk();Rb(`p-active`,m.activeTab===`web`)}}var tt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Datepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,et,7,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-datepicker-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,fe,xe,ye,De,we,_e,Me],encapsulation:2,changeDetection:1})}return o})()}];var Fe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(tt),WV]})}return o})();var Kt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Fe]})}return o})();export{Kt as DocPoDatepickerModule};