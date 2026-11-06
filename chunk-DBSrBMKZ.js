import{$n as Ak,Ai as XL,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,It as aP,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Pr as Jm,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,b as Fu,ba as o1,cn as iie,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fa as kZ,fi as Rb,gi as Tk,hi as TZ,ht as U4,it as Qte,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datepicker`,`p-label`,`PO Datepicker`]],template:function(r,i){r&1&&_u(0,`po-datepicker`,0)},dependencies:[Qte],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Le,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Se],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:`Basic`,value:aP.Basic},{label:`Extended`,value:aP.Extended}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-labs`]],standalone:!1,decls:22,vars:47,consts:[[`f`,`ngForm`],[`name`,`datepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-max-date`,`p-error-pattern`,`p-format`,`p-help`,`p-iso-format`,`p-label`,`p-locale`,`p-min-date`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`,`p-format`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-format`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`isoFormat`,`p-columns`,`4`,`p-label`,`Iso Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`po-datepicker`,1),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.datepicker,l)||(i.datepicker=l),H_(l)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.label,l)||(i.label=l),H_(l)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.help,l)||(i.help=l),H_(l)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.helperText,l)||(i.helperText=l),H_(l)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.placeholder,l)||(i.placeholder=l),H_(l)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.errorPattern,l)||(i.errorPattern=l),H_(l)}),Zg(),Jc(13,`po-datepicker`,10),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.minDate,l)||(i.minDate=l),H_(l)}),Zg(),Jc(14,`po-datepicker`,11),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.maxDate,l)||(i.maxDate=l),H_(l)}),Zg(),Jc(15,`po-checkbox-group`,12),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.properties,l)||(i.properties=l),H_(l)}),Zg(),Jc(16,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.locale,l)||(i.locale=l),H_(l)}),Zg(),Jc(17,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.format,l)||(i.format=l),H_(l)}),Zg(),Jc(18,`po-radio-group`,15),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.isoFormat,l)||(i.isoFormat=l),H_(l)}),Zg(),Jc(19,`po-radio-group`,16),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.size,l)||(i.size=l),H_(l)}),Zg(),Jc(20,`div`,2)(21,`po-button`,17),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Yb(`ngModel`,i.datepicker),Rb(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-max-date`,i.maxDate)(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-help`,i.help)(`p-iso-format`,i.isoFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-min-date`,i.minDate)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`)),Y0(),Ig(3),Rb(`p-value`,i.datepicker),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.errorPattern),Y0(),Ig(),Yb(`ngModel`,i.minDate),Rb(`p-max-date`,i.maxDate)(`p-format`,i.format),Y0(),Ig(),Yb(`ngModel`,i.maxDate),Rb(`p-format`,i.format)(`p-min-date`,i.minDate),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.locale),Rb(`p-options`,i.localeOptions),Y0(),Ig(),Yb(`ngModel`,i.format),Rb(`p-options`,i.formatOptions),Y0(),Ig(),Yb(`ngModel`,i.isoFormat),Rb(`p-options`,i.isoFormatOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,Qte,U4,Gte,Yoe],encapsulation:2,changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ne,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{selectedYear=(/* @__PURE__ */ new Date(`2026-04-30`)).getFullYear();event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`yearPicker`,`p-label`,`Year Picker`,`p-placeholder`,`Select a year`,`p-mode`,`year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-datepicker`,0),W0(),Kb(`ngModelChange`,function(c){return Ak(i.selectedYear,c)||(i.selectedYear=c),c}),vt(`p-change`,function(c){return i.changeEvent(c)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,1),_u(3,`po-info`,2)(4,`po-info`,3),Zg()),r&2&&(Yb(`ngModel`,i.selectedYear),Y0(),Ig(3),Rb(`p-value`,i.selectedYear),Ig(),Rb(`p-value`,i.event))},dependencies:[TZ,JL,Lf,Qte,Yoe],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker Year`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-year/sample-po-datepicker-year.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-year`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ie,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ve],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{selectedMonthYear=/* @__PURE__ */ new Date(`2026-12-02`);event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-month-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`monthYearPicker`,`p-label`,`Month/Year Picker`,`p-placeholder`,`Select month and year`,`p-mode`,`month-year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Jc(0,`po-datepicker`,0),W0(),Kb(`ngModelChange`,function(c){return Ak(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),vt(`p-change`,function(c){return i.changeEvent(c)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,1),_u(3,`po-info`,2)(4,`po-info`,3),Zg()),r&2&&(Yb(`ngModel`,i.selectedMonthYear),Y0(),Ig(3),Rb(`p-value`,i.selectedMonthYear),Ig(),Rb(`p-value`,i.event))},dependencies:[TZ,JL,Lf,Qte,Yoe],encapsulation:2,changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-month-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker MonthYear`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datepicker
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-month-year`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Re,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ye],encapsulation:2,changeDetection:1})}return o})();var Ge=[`formAirfare`];var ke=(()=>{class o{poDialog=p(iie);poNotification=p(Fu);formAirfare;accompany=0;destination;endDate=/* @__PURE__ */ new Date;origin;startDate=/* @__PURE__ */ new Date;ticketClass=`Economy`;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:`Confirm`,message:m,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:/* @__PURE__ */ new Date,startDate:/* @__PURE__ */ new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare`]],viewQuery:function(r,i){if(r&1&&Cu(Ge,7),r&2){let s;No(s=xo())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[[`formAirfare`,`ngForm`],[1,`po-row`],[`name`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`clas`,`po-row`],[`name`,`ticketClass`,`p-label`,`Class`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompany`,`p-label`,`Accompany`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-datepicker`,2),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.startDate,l)||(i.startDate=l),H_(l)}),Zg(),Jc(4,`po-datepicker`,3),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.endDate,l)||(i.endDate=l),H_(l)}),Zg()(),Jc(5,`div`,1)(6,`po-input`,4),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.origin,l)||(i.origin=l),H_(l)}),Zg(),Jc(7,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.destination,l)||(i.destination=l),H_(l)}),Zg()(),Jc(8,`div`,6)(9,`po-select`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.ticketClass,l)||(i.ticketClass=l),H_(l)}),Zg(),Jc(10,`po-select`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.accompany,l)||(i.accompany=l),H_(l)}),Zg()(),Jc(11,`div`,1)(12,`po-button`,9),vt(`p-click`,function(){return i.apply()}),Zg()()()}if(r&2){let s=sk(1);Ig(3),Yb(`ngModel`,i.startDate),Rb(`p-max-date`,i.endDate),Y0(),Ig(),Yb(`ngModel`,i.endDate),Rb(`p-min-date`,i.startDate),Y0(),Ig(2),Yb(`ngModel`,i.origin),Y0(),Ig(),Yb(`ngModel`,i.destination),Y0(),Ig(2),Yb(`ngModel`,i.ticketClass),Rb(`p-options`,i.ticketClassOptions),Y0(),Ig(),Yb(`ngModel`,i.accompany),Rb(`p-options`,i.accompanyNumber),Y0(),Ig(2),Rb(`p-disabled`,s.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Qte,U4,Woe],encapsulation:2,changeDetection:1})}return o})();var Qe=o=>({"docs-sample-code-tabs":o});var we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker - Airfare`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formAirfare="ngForm">
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-airfare`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ke],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{formBuilder=p(kZ);poDialog=p(iie);poNotification=p(Fu);formAirfare;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,Jm.required],destination:[``,Jm.required],endDate:[/* @__PURE__ */ new Date,Jm.required],origin:[``,Jm.required],startDate:[/* @__PURE__ */ new Date,Jm.required],ticketClass:[`Economy`,Jm.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:qe}=m.value,Ae=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(qe)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:`Confirm`,message:Ae,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:/* @__PURE__ */ new Date,startDate:/* @__PURE__ */ new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare-reactive-form`]],standalone:!1,decls:12,vars:6,consts:[[3,`formGroup`],[1,`po-row`],[`formControlName`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,1,`po-md-6`,3,`p-max-date`],[`formControlName`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,1,`po-md-6`,3,`p-min-date`],[`formControlName`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,1,`po-md-6`],[`formControlName`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,1,`po-md-6`],[`clas`,`po-row`],[`formControlName`,`ticketClass`,`p-label`,`Class`,1,`po-md-6`,3,`p-options`],[`formControlName`,`accompany`,`p-label`,`Accompany`,1,`po-md-6`,3,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Jc(0,`form`,0)(1,`div`,1)(2,`po-datepicker`,2),W0(),Zg(),Jc(3,`po-datepicker`,3),W0(),Zg()(),Jc(4,`div`,1)(5,`po-input`,4),W0(),Zg(),Jc(6,`po-input`,5),W0(),Zg()(),Jc(7,`div`,6)(8,`po-select`,7),W0(),Zg(),Jc(9,`po-select`,8),W0(),Zg()(),Jc(10,`div`,1)(11,`po-button`,9),vt(`p-click`,function(){return i.apply(i.formAirfare)}),Zg()()()),r&2&&(Rb(`formGroup`,i.formAirfare),Ig(2),Rb(`p-max-date`,i.formAirfare.get(`endDate`).value),Y0(),Ig(),Rb(`p-min-date`,i.formAirfare.get(`startDate`).value),Y0(),Ig(2),Y0(),Ig(),Y0(),Ig(2),Rb(`p-options`,i.ticketClassOptions),Y0(),Ig(),Rb(`p-options`,i.accompanyNumber),Y0(),Ig(2),Rb(`p-disabled`,i.formAirfare.invalid))},dependencies:[NZ,TZ,RZ,XL,o1,oi,Qte,U4,Woe],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({"docs-sample-code-tabs":o});var _e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-airfare-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datepicker - Airfare Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form [formGroup]="formAirfare">
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datepicker-airfare-reactive-form`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Je,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Pe],encapsulation:2,changeDetection:1})}return o})();var Me=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-datepicker-doc`]],standalone:!1,decls:1321,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoDatepickerComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-datepicker`),Zg(),Tk(26,` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.`),Zg(),Jc(27,`p`),Tk(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Jc(29,`code`),Tk(30,`p-format`),Zg(),Tk(31,`).`),Zg(),Jc(32,`p`),Tk(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Jc(34,`code`),Tk(35,`p-locale`),Zg(),Tk(36,`.`),Zg(),Jc(37,`p`),Tk(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),Zg(),Jc(39,`blockquote`)(40,`p`),Tk(41,`Por padrão, o formato de saída do `),Jc(42,`em`),Tk(43,`model`),Zg(),Tk(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Jc(45,`code`),Tk(46,`p-iso-format`),Zg(),Tk(47,` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:`),Zg()(),Jc(48,`ul`)(49,`li`)(50,`p`),Tk(51,`Formato de entrada e saída (E8601DZw) - `),Jc(52,`code`),Tk(53,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(54,`;`),Zg()(),Jc(55,`li`)(56,`p`),Tk(57,`Formato de entrada e saída (E8601DAw) - `),Jc(58,`code`),Tk(59,`'2017-11-28'`),Zg(),Tk(60,`;`),Zg()(),Jc(61,`li`)(62,`p`),Tk(63,`Formato de entrada (Date) - `),Jc(64,`code`),Tk(65,`new Date(2017, 10, 28)`),Zg(),Tk(66,` e saída (E8601DAw) - `),Jc(67,`code`),Tk(68,`'2017-11-28'`),Zg(),Tk(69,`;`),Zg()()(),Jc(70,`p`)(71,`strong`),Tk(72,`Importante:`),Zg()(),Jc(73,`ul`)(74,`li`),Tk(75,`Para utilizar datas com ano inferior a 100, verificar o comportamento do `),Jc(76,`a`,6)(77,`code`),Tk(78,`new Date`),Zg()(),Tk(79,`
e utilizar o m\xE9todo `),Jc(80,`a`,7)(81,`code`),Tk(82,`setFullYear`),Zg()(),Tk(83,`.`),Zg(),Jc(84,`li`),Tk(85,`Caso a data esteja inválida, o `),Jc(86,`code`),Tk(87,`model`),Zg(),Tk(88,` receberá `),Jc(89,`strong`),Tk(90,`'Data inválida'`),Zg(),Tk(91,`.`),Zg(),Jc(92,`li`),Tk(93,`Caso o `),Jc(94,`code`),Tk(95,`input`),Zg(),Tk(96,` esteja passando um `),Jc(97,`code`),Tk(98,`[(ngModel)]`),Zg(),Tk(99,`, mas não tenha um `),Jc(100,`code`),Tk(101,`name`),Zg(),Tk(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Jc(103,`code`),Tk(104,`[ngModelOptions]="{standalone: true}"`),Zg(),Tk(105,`).`),Zg()(),Jc(106,`p`),Tk(107,`Exemplo:`),Zg(),Jc(108,`pre`)(109,`code`),Tk(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),Zg()(),Jc(111,`blockquote`)(112,`p`),Tk(113,`Não esqueça de importar o `),Jc(114,`code`),Tk(115,`FormsModule`),Zg(),Tk(116,` em seu módulo, tal como para utilizar o `),Jc(117,`code`),Tk(118,`input default`),Zg(),Tk(119,`.`),Zg()(),Jc(120,`h4`),Tk(121,`Tokens customizáveis`),Zg(),Jc(122,`p`),Tk(123,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(124,`br`),Tk(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(126,`code`),Tk(127,`.po-input`),Zg()(),Jc(128,`blockquote`)(129,`p`),Tk(130,`Para maiores informações, acesse o guia `),Jc(131,`a`,8),Tk(132,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(133,`.`),Zg()(),Jc(134,`table`)(135,`thead`)(136,`tr`)(137,`th`),Tk(138,`Propriedade`),Zg(),Jc(139,`th`),Tk(140,`Descrição`),Zg(),Jc(141,`th`),Tk(142,`Valor Padrão`),Zg()()(),Jc(143,`tbody`)(144,`tr`)(145,`td`)(146,`strong`),Tk(147,`Default Values`),Zg()(),_u(148,`td`)(149,`td`),Zg(),Jc(150,`tr`)(151,`td`)(152,`code`),Tk(153,`--font-family`),Zg()(),Jc(154,`td`),Tk(155,`Família tipográfica usada`),Zg(),Jc(156,`td`)(157,`code`),Tk(158,`var(--font-family-theme)`),Zg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Tk(162,`--font-size`),Zg()(),Jc(163,`td`),Tk(164,`Tamanho da fonte`),Zg(),Jc(165,`td`)(166,`code`),Tk(167,`var(--font-size-default)`),Zg()()(),Jc(168,`tr`)(169,`td`)(170,`code`),Tk(171,`--text-color-placeholder`),Zg(),Tk(172,` \xA0`),Zg(),Jc(173,`td`),Tk(174,`Cor principal do texto do placeholder`),Zg(),Jc(175,`td`)(176,`code`),Tk(177,`var(--color-neutral-light-30)`),Zg()()(),Jc(178,`tr`)(179,`td`)(180,`code`),Tk(181,`--color`),Zg()(),Jc(182,`td`),Tk(183,`Cor principal do datepicker`),Zg(),Jc(184,`td`)(185,`code`),Tk(186,`var(--color-neutral-dark-70)`),Zg()()(),Jc(187,`tr`)(188,`td`)(189,`code`),Tk(190,`--background`),Zg()(),Jc(191,`td`),Tk(192,`Cor de background`),Zg(),Jc(193,`td`)(194,`code`),Tk(195,`var(--color-neutral-light-05)`),Zg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Tk(199,`--padding`),Zg()(),Jc(200,`td`),Tk(201,`Preenchimento`),Zg(),Jc(202,`td`)(203,`code`),Tk(204,`0 0.5rem`),Zg()()(),Jc(205,`tr`)(206,`td`)(207,`code`),Tk(208,`--text-color`),Zg()(),Jc(209,`td`),Tk(210,`Cor do texto`),Zg(),Jc(211,`td`)(212,`code`),Tk(213,`var(--color-neutral-dark-90)`),Zg()()(),Jc(214,`tr`)(215,`td`)(216,`code`),Tk(217,`--field-container-title-justify`),Zg()(),Jc(218,`td`),Tk(219,`Alinhamento horizontal do título (`),Jc(220,`code`),Tk(221,`justify-content`),Zg(),Tk(222,`)`),Zg(),Jc(223,`td`)(224,`code`),Tk(225,`space-between`),Zg()()(),Jc(226,`tr`)(227,`td`)(228,`code`),Tk(229,`--field-container-title-flex`),Zg()(),Jc(230,`td`),Tk(231,`Flex do título (`),Jc(232,`code`),Tk(233,`flex`),Zg(),Tk(234,`)`),Zg(),Jc(235,`td`)(236,`code`),Tk(237,`1 auto`),Zg()()(),Jc(238,`tr`)(239,`td`)(240,`strong`),Tk(241,`Hover`),Zg()(),_u(242,`td`)(243,`td`),Zg(),Jc(244,`tr`)(245,`td`)(246,`code`),Tk(247,`--color-hover`),Zg()(),Jc(248,`td`),Tk(249,`Cor principal no estado hover`),Zg(),Jc(250,`td`)(251,`code`),Tk(252,`var(--color-brand-01-dark)`),Zg()()(),Jc(253,`tr`)(254,`td`)(255,`code`),Tk(256,`--background-hover`),Zg()(),Jc(257,`td`),Tk(258,`Cor de background no estado hover`),Zg(),Jc(259,`td`)(260,`code`),Tk(261,`var(--color-brand-01-lightest)`),Zg()()(),Jc(262,`tr`)(263,`td`)(264,`strong`),Tk(265,`Focused`),Zg()(),_u(266,`td`)(267,`td`),Zg(),Jc(268,`tr`)(269,`td`)(270,`code`),Tk(271,`--color-focused`),Zg()(),Jc(272,`td`),Tk(273,`Cor principal no estado de focus`),Zg(),Jc(274,`td`)(275,`code`),Tk(276,`var(--color-action-default)`),Zg()()(),Jc(277,`tr`)(278,`td`)(279,`code`),Tk(280,`--outline-color-focused`),Zg()(),Jc(281,`td`),Tk(282,`Cor do outline do estado de focus`),Zg(),Jc(283,`td`)(284,`code`),Tk(285,`var(--color-action-focus)`),Zg()()(),Jc(286,`tr`)(287,`td`)(288,`strong`),Tk(289,`Disabled`),Zg()(),_u(290,`td`)(291,`td`),Zg(),Jc(292,`tr`)(293,`td`)(294,`code`),Tk(295,`--color-disabled`),Zg()(),Jc(296,`td`),Tk(297,`Cor principal no estado disabled`),Zg(),Jc(298,`td`)(299,`code`),Tk(300,`var(--color-neutral-light-30)`),Zg()()(),Jc(301,`tr`)(302,`td`)(303,`code`),Tk(304,`--background-disabled`),Zg()(),Jc(305,`td`),Tk(306,`Cor de background no estado disabled \xA0`),Zg(),Jc(307,`td`)(308,`code`),Tk(309,`var(--color-neutral-light-20)`),Zg()()(),Jc(310,`tr`)(311,`td`)(312,`code`),Tk(313,`--text-color-disabled`),Zg()(),Jc(314,`td`),Tk(315,`Cor do texto no estado disabled`),Zg(),Jc(316,`td`)(317,`code`),Tk(318,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(319,`div`,9)(320,`h4`,10),Tk(321,`Seletor`),Zg(),Jc(322,`pre`,11),Tk(323,`<po-datepicker
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
`),Zg()(),Jc(324,`h4`,12),Tk(325,`Propriedades`),Zg(),Jc(326,`table`,13)(327,`tr`,14)(328,`th`,15),Tk(329,`Nome`),Zg(),Jc(330,`th`,15),Tk(331,`Tipo`),Zg(),Jc(332,`th`,15),Tk(333,`Padrão`),Zg(),Jc(334,`th`,15),Tk(335,`Descrição`),Zg()(),Jc(336,`tr`,16)(337,`td`,17)(338,`div`,18)(339,`span`,19),Tk(340,`p-locale`),_u(341,`br`),Zg()()(),Jc(342,`td`,20)(343,`code`,21),Tk(344,`string`),Zg()(),Jc(345,`td`,22),Tk(346,`-`),Zg(),Jc(347,`td`,23)(348,`em`)(349,`strong`),Tk(350,`(opcional)`),Zg()(),Jc(351,`p`),Tk(352,`Idioma do Datepicker.`),Zg(),Jc(353,`blockquote`)(354,`p`),Tk(355,`O locale padrão sera recuperado com base no `),Jc(356,`a`,24)(357,`code`),Tk(358,`PoI18nService`),Zg()(),Tk(359,` ou `),Jc(360,`em`),Tk(361,`browser`),Zg(),Tk(362,`.`),Zg()()()(),Jc(363,`tr`,16)(364,`td`,17)(365,`div`,25)(366,`span`,26),Tk(367,` (p-additional-help)`),_u(368,`br`),Zg()(),Jc(369,`div`,27),Tk(370,`Deprecated`),Zg()(),Jc(371,`td`,20)(372,`code`,28),Tk(373,`EventEmitter`),Zg()(),Jc(374,`td`,22),Tk(375,`-`),Zg(),Jc(376,`td`,23)(377,`em`)(378,`strong`),Tk(379,`(opcional)`),Zg()(),Jc(380,`p`),Tk(381,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(382,`blockquote`)(383,`p`),Tk(384,`Essa propriedade está `),Jc(385,`strong`),Tk(386,`depreciada`),Zg(),Tk(387,` e será removida na versão `),Jc(388,`code`),Tk(389,`23.x.x`),Zg(),Tk(390,`. Recomendamos utilizar a propriedade `),Jc(391,`code`),Tk(392,`p-helper`),Zg(),Tk(393,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),Tk(398,` p-additional-help-tooltip`),_u(399,`br`),Zg()(),Jc(400,`div`,27),Tk(401,`Deprecated`),Zg()(),Jc(402,`td`,20)(403,`code`,21),Tk(404,`string`),Zg()(),Jc(405,`td`,22),Tk(406,`-`),Zg(),Jc(407,`td`,23)(408,`em`)(409,`strong`),Tk(410,`(opcional)`),Zg()(),Jc(411,`p`),Tk(412,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(413,`code`),Tk(414,`po-helper`),Zg(),Tk(415,`.
`),Jc(416,`strong`),Tk(417,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(418,`blockquote`)(419,`p`),Tk(420,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(421,`blockquote`)(422,`p`),Tk(423,`Essa propriedade está `),Jc(424,`strong`),Tk(425,`depreciada`),Zg(),Tk(426,` e será removida na versão `),Jc(427,`code`),Tk(428,`23.x.x`),Zg(),Tk(429,`. Recomendamos utilizar a propriedade `),Jc(430,`code`),Tk(431,`p-helper`),Zg(),Tk(432,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),Tk(437,` p-append-in-body`),_u(438,`br`),Zg()()(),Jc(439,`td`,20)(440,`code`,29),Tk(441,`boolean`),Zg()(),Jc(442,`td`,22)(443,`p`)(444,`code`),Tk(445,`false`),Zg()()(),Jc(446,`td`,23)(447,`em`)(448,`strong`),Tk(449,`(opcional)`),Zg()(),Jc(450,`p`),Tk(451,`Define que o `),Jc(452,`code`),Tk(453,`calendar`),Zg(),Tk(454,` e/ou tooltip (`),Jc(455,`code`),Tk(456,`p-additional-help-tooltip`),Zg(),Tk(457,` e/ou `),Jc(458,`code`),Tk(459,`p-error-limit`),Zg(),Tk(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Zg(),Jc(461,`blockquote`)(462,`p`),Tk(463,`Quando utilizado com `),Jc(464,`code`),Tk(465,`p-helper`),Zg(),Tk(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(467,`tr`,16)(468,`td`,17)(469,`div`,18)(470,`span`,19),Tk(471,` p-auto-focus`),_u(472,`br`),Zg()()(),Jc(473,`td`,20)(474,`code`,29),Tk(475,`boolean`),Zg()(),Jc(476,`td`,22)(477,`p`)(478,`code`),Tk(479,`false`),Zg()()(),Jc(480,`td`,23)(481,`em`)(482,`strong`),Tk(483,`(opcional)`),Zg()(),Jc(484,`p`),Tk(485,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(486,`blockquote`)(487,`p`),Tk(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),Tk(493,` (p-change-model)`),_u(494,`br`),Zg()()(),Jc(495,`td`,20)(496,`code`,28),Tk(497,`EventEmitter`),Zg()(),Jc(498,`td`,22),Tk(499,`-`),Zg(),Jc(500,`td`,23)(501,`em`)(502,`strong`),Tk(503,`(opcional)`),Zg()(),Jc(504,`p`),Tk(505,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(506,`code`),Tk(507,`setValue`),Zg(),Tk(508,`, `),Jc(509,`code`),Tk(510,`patchValue`),Zg(),Tk(511,`, carregamento assíncrono).`),Zg(),Jc(512,`p`),Tk(513,`Diferentemente do `),Jc(514,`code`),Tk(515,`p-change`),Zg(),Tk(516,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(517,`code`),Tk(518,`p-change-model`),Zg(),Tk(519,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(520,`p`),Tk(521,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(522,`tr`,16)(523,`td`,17)(524,`div`,18)(525,`span`,19),Tk(526,`p-clean`),_u(527,`br`),Zg()()(),Jc(528,`td`,20)(529,`code`,29),Tk(530,`boolean`),Zg()(),Jc(531,`td`,22),Tk(532,`-`),Zg(),Jc(533,`td`,23)(534,`em`)(535,`strong`),Tk(536,`(opcional)`),Zg()(),Jc(537,`p`),Tk(538,`Habilita ação para limpar o campo.`),Zg()()(),Jc(539,`tr`,16)(540,`td`,17)(541,`div`,18)(542,`span`,19),Tk(543,` p-compact-label`),_u(544,`br`),Zg()()(),Jc(545,`td`,20)(546,`code`,29),Tk(547,`boolean`),Zg()(),Jc(548,`td`,22)(549,`p`)(550,`code`),Tk(551,`false`),Zg()()(),Jc(552,`td`,23)(553,`em`)(554,`strong`),Tk(555,`(opcional)`),Zg()(),Jc(556,`p`),Tk(557,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(558,`p`),Tk(559,`Quando habilitado (`),Jc(560,`code`),Tk(561,`true`),Zg(),Tk(562,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(563,`ul`)(564,`li`)(565,`code`),Tk(566,`po-label`),Zg()(),Jc(567,`li`)(568,`code`),Tk(569,`p-requirement (showRequired)`),Zg()(),Jc(570,`li`)(571,`code`),Tk(572,`po-helper`),Zg()()(),Jc(573,`p`),Tk(574,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(575,`p`),Tk(576,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(577,`ul`)(578,`li`)(579,`code`),Tk(580,`--field-container-title-justify`),Zg()(),Jc(581,`li`)(582,`code`),Tk(583,`--field-container-title-flex`),Zg()()(),Jc(584,`p`),Tk(585,`Exemplo:`),Zg(),Jc(586,`pre`)(587,`code`),Tk(588,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(589,`p`),Tk(590,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),Tk(595,`p-disabled`),_u(596,`br`),Zg()()(),Jc(597,`td`,20)(598,`code`,29),Tk(599,`boolean`),Zg()(),Jc(600,`td`,22),Tk(601,`-`),Zg(),Jc(602,`td`,23)(603,`em`)(604,`strong`),Tk(605,`(opcional)`),Zg()(),Jc(606,`p`),Tk(607,`Desabilita o campo.`),Zg()()(),Jc(608,`tr`,16)(609,`td`,17)(610,`div`,18)(611,`span`,19),Tk(612,` p-error-async`),_u(613,`br`),Zg()()(),Jc(614,`td`,20)(615,`code`,30),Tk(616,`(value) => Observable<boolean>`),Zg()(),Jc(617,`td`,22),Tk(618,`-`),Zg(),Jc(619,`td`,23)(620,`em`)(621,`strong`),Tk(622,`(opcional)`),Zg()(),Jc(623,`p`),Tk(624,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(625,`code`),Tk(626,`change`),Zg(),Tk(627,`.`),Zg()()(),Jc(628,`tr`,16)(629,`td`,17)(630,`div`,18)(631,`span`,19),Tk(632,` p-error-limit`),_u(633,`br`),Zg()()(),Jc(634,`td`,20)(635,`code`,29),Tk(636,`boolean`),Zg()(),Jc(637,`td`,22)(638,`p`)(639,`code`),Tk(640,`false`),Zg()()(),Jc(641,`td`,23)(642,`em`)(643,`strong`),Tk(644,`(opcional)`),Zg()(),Jc(645,`p`),Tk(646,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(647,`blockquote`)(648,`p`),Tk(649,`Caso essa propriedade seja definida como `),Jc(650,`code`),Tk(651,`true`),Zg(),Tk(652,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(653,`tr`,16)(654,`td`,17)(655,`div`,18)(656,`span`,19),Tk(657,` p-error-pattern`),_u(658,`br`),Zg()()(),Jc(659,`td`,20)(660,`code`,21),Tk(661,`string`),Zg()(),Jc(662,`td`,22),Tk(663,`-`),Zg(),Jc(664,`td`,23)(665,`em`)(666,`strong`),Tk(667,`(opcional)`),Zg()(),Jc(668,`p`),Tk(669,`Mensagem apresentada quando a data for inválida ou fora do período.`),Zg(),Jc(670,`blockquote`)(671,`p`),Tk(672,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Jc(673,`code`),Tk(674,`p-required-field-error-message`),Zg(),Tk(675,` em conjunto.`),Zg()()()(),Jc(676,`tr`,16)(677,`td`,17)(678,`div`,18)(679,`span`,19),Tk(680,` p-format`),_u(681,`br`),Zg()()(),Jc(682,`td`,20)(683,`code`,21),Tk(684,`string`),Zg()(),Jc(685,`td`,22)(686,`p`)(687,`code`),Tk(688,`dd/mm/yyyy`),Zg()()(),Jc(689,`td`,23)(690,`em`)(691,`strong`),Tk(692,`(opcional)`),Zg()(),Jc(693,`p`),Tk(694,`Formato de exibição da data.`),Zg(),Jc(695,`p`),Tk(696,`Valores válidos:`),Zg(),Jc(697,`ul`)(698,`li`)(699,`code`),Tk(700,`dd/mm/yyyy`),Zg()(),Jc(701,`li`)(702,`code`),Tk(703,`mm/dd/yyyy`),Zg()(),Jc(704,`li`)(705,`code`),Tk(706,`yyyy/mm/dd`),Zg()()(),Jc(707,`p`),Tk(708,`Propriedade incompatível com as variações month-year e year.`),Zg()()(),Jc(709,`tr`,16)(710,`td`,17)(711,`div`,18)(712,`span`,19),Tk(713,` p-help`),_u(714,`br`),Zg()()(),Jc(715,`td`,20)(716,`code`,21),Tk(717,`string`),Zg()(),Jc(718,`td`,22),Tk(719,`-`),Zg(),Jc(720,`td`,23)(721,`em`)(722,`strong`),Tk(723,`(opcional)`),Zg()(),Jc(724,`p`),Tk(725,`Texto de apoio do campo.`),Zg()()(),Jc(726,`tr`,16)(727,`td`,17)(728,`div`,18)(729,`span`,19),Tk(730,` p-iso-format`),_u(731,`br`),Zg()()(),Jc(732,`td`,20)(733,`code`,31),Tk(734,`PoDatepickerIsoFormat`),Zg()(),Jc(735,`td`,22),Tk(736,`-`),Zg(),Jc(737,`td`,23)(738,`em`)(739,`strong`),Tk(740,`(opcional)`),Zg()(),Jc(741,`p`),Tk(742,`Padrão de formatação para saída do `),Jc(743,`em`),Tk(744,`model`),Zg(),Tk(745,`, independentemente do formato de entrada.`),Zg(),Jc(746,`blockquote`)(747,`p`),Tk(748,`Veja os valores válidos no `),Jc(749,`em`),Tk(750,`enum`),Zg(),Jc(751,`code`),Tk(752,`PoDatepickerIsoFormat`),Zg(),Tk(753,`.`),Zg()(),Jc(754,`p`),Tk(755,`Propriedade incompatível com as variações month-year e year.`),Zg()()(),Jc(756,`tr`,16)(757,`td`,17)(758,`div`,25)(759,`span`,26),Tk(760,` (p-keydown)`),_u(761,`br`),Zg()()(),Jc(762,`td`,20)(763,`code`,28),Tk(764,`EventEmitter`),Zg()(),Jc(765,`td`,22),Tk(766,`-`),Zg(),Jc(767,`td`,23)(768,`em`)(769,`strong`),Tk(770,`(opcional)`),Zg()(),Jc(771,`p`),Tk(772,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(773,`code`),Tk(774,`KeyboardEvent`),Zg(),Tk(775,` com informações sobre a tecla.`),Zg()()(),Jc(776,`tr`,16)(777,`td`,17)(778,`div`,18)(779,`span`,19),Tk(780,` p-label`),_u(781,`br`),Zg()()(),Jc(782,`td`,20)(783,`code`,21),Tk(784,`string`),Zg()(),Jc(785,`td`,22),Tk(786,`-`),Zg(),Jc(787,`td`,23)(788,`em`)(789,`strong`),Tk(790,`(opcional)`),Zg()(),Jc(791,`p`),Tk(792,`Rótulo do campo.`),Zg()()(),Jc(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),Tk(797,` p-label-text-wrap`),_u(798,`br`),Zg()()(),Jc(799,`td`,20)(800,`code`,29),Tk(801,`boolean`),Zg()(),Jc(802,`td`,22)(803,`p`)(804,`code`),Tk(805,`false`),Zg()()(),Jc(806,`td`,23)(807,`em`)(808,`strong`),Tk(809,`(opcional)`),Zg()(),Jc(810,`p`),Tk(811,`Habilita a quebra automática do texto da propriedade `),Jc(812,`code`),Tk(813,`p-label`),Zg(),Tk(814,`. Quando `),Jc(815,`code`),Tk(816,`p-label-text-wrap`),Zg(),Tk(817,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(818,`tr`,16)(819,`td`,17)(820,`div`,18)(821,`span`,19),Tk(822,` p-loading`),_u(823,`br`),Zg()()(),Jc(824,`td`,20)(825,`code`,29),Tk(826,`boolean`),Zg()(),Jc(827,`td`,22)(828,`p`)(829,`code`),Tk(830,`false`),Zg()()(),Jc(831,`td`,23)(832,`em`)(833,`strong`),Tk(834,`(opcional)`),Zg()(),Jc(835,`p`),Tk(836,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(837,`tr`,16)(838,`td`,17)(839,`div`,18)(840,`span`,19),Tk(841,` p-max-date`),_u(842,`br`),Zg()()(),Jc(843,`td`,20)(844,`code`,21),Tk(845,`string `),Zg(),Jc(846,`code`,32),Tk(847,` Date`),Zg()(),Jc(848,`td`,22),Tk(849,`-`),Zg(),Jc(850,`td`,23)(851,`em`)(852,`strong`),Tk(853,`(opcional)`),Zg()(),Jc(854,`p`),Tk(855,`Define uma data máxima para o `),Jc(856,`code`),Tk(857,`po-datepicker`),Zg(),Tk(858,`.`),Zg()()(),Jc(859,`tr`,16)(860,`td`,17)(861,`div`,18)(862,`span`,19),Tk(863,` p-min-date`),_u(864,`br`),Zg()()(),Jc(865,`td`,20)(866,`code`,21),Tk(867,`string `),Zg(),Jc(868,`code`,32),Tk(869,` Date`),Zg()(),Jc(870,`td`,22),Tk(871,`-`),Zg(),Jc(872,`td`,23)(873,`em`)(874,`strong`),Tk(875,`(opcional)`),Zg()(),Jc(876,`p`),Tk(877,`Define uma data mínima para o `),Jc(878,`code`),Tk(879,`po-datepicker`),Zg(),Tk(880,`.`),Zg()()(),Jc(881,`tr`,16)(882,`td`,17)(883,`div`,18)(884,`span`,19),Tk(885,` p-mode`),_u(886,`br`),Zg()()(),Jc(887,`td`,20)(888,`code`,33),Tk(889,`'month-year' `),Zg(),Jc(890,`code`,34),Tk(891,` 'year'`),Zg()(),Jc(892,`td`,22),Tk(893,`-`),Zg(),Jc(894,`td`,23)(895,`em`)(896,`strong`),Tk(897,`(opcional)`),Zg()(),Jc(898,`p`),Tk(899,`Define o modo de operação do datepicker.`),Zg(),Jc(900,`p`),Tk(901,`Permite configurar o componente para seleção de:`),Zg(),Jc(902,`ul`)(903,`li`),Tk(904,`Mês e ano (`),Jc(905,`code`),Tk(906,`month-year`),Zg(),Tk(907,`);`),Zg(),Jc(908,`li`),Tk(909,`Apenas ano (`),Jc(910,`code`),Tk(911,`year`),Zg(),Tk(912,`).`),Zg()()()(),Jc(913,`tr`,16)(914,`td`,17)(915,`div`,18)(916,`span`,19),Tk(917,` p-no-autocomplete`),_u(918,`br`),Zg()()(),Jc(919,`td`,20)(920,`code`,29),Tk(921,`boolean`),Zg()(),Jc(922,`td`,22)(923,`p`)(924,`code`),Tk(925,`false`),Zg()()(),Jc(926,`td`,23)(927,`em`)(928,`strong`),Tk(929,`(opcional)`),Zg()(),Jc(930,`p`),Tk(931,`Define a propriedade nativa `),Jc(932,`code`),Tk(933,`autocomplete`),Zg(),Tk(934,` do campo como `),Jc(935,`code`),Tk(936,`off`),Zg(),Tk(937,`.`),Zg()()(),Jc(938,`tr`,16)(939,`td`,17)(940,`div`,25)(941,`span`,26),Tk(942,` (p-blur)`),_u(943,`br`),Zg()()(),Jc(944,`td`,20)(945,`code`,28),Tk(946,`EventEmitter`),Zg()(),Jc(947,`td`,22),Tk(948,`-`),Zg(),Jc(949,`td`,23)(950,`em`)(951,`strong`),Tk(952,`(opcional)`),Zg()(),Jc(953,`p`),Tk(954,`Evento disparado ao sair do campo.`),Zg()()(),Jc(955,`tr`,16)(956,`td`,17)(957,`div`,25)(958,`span`,26),Tk(959,` (p-change)`),_u(960,`br`),Zg()()(),Jc(961,`td`,20)(962,`code`,28),Tk(963,`EventEmitter`),Zg()(),Jc(964,`td`,22),Tk(965,`-`),Zg(),Jc(966,`td`,23)(967,`em`)(968,`strong`),Tk(969,`(opcional)`),Zg()(),Jc(970,`p`),Tk(971,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(972,`tr`,16)(973,`td`,17)(974,`div`,18)(975,`span`,19),Tk(976,` p-optional`),_u(977,`br`),Zg()()(),Jc(978,`td`,20)(979,`code`,29),Tk(980,`boolean`),Zg()(),Jc(981,`td`,22)(982,`p`)(983,`code`),Tk(984,`false`),Zg()()(),Jc(985,`td`,23)(986,`em`)(987,`strong`),Tk(988,`(opcional)`),Zg()(),Jc(989,`p`),Tk(990,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(991,`blockquote`)(992,`p`),Tk(993,`Não será exibida a indicação se:`),Zg()(),Jc(994,`ul`)(995,`li`),Tk(996,`O campo conter `),Jc(997,`code`),Tk(998,`p-required`),Zg(),Tk(999,`;`),Zg(),Jc(1e3,`li`),Tk(1001,`Não possuir `),Jc(1002,`code`),Tk(1003,`p-help`),Zg(),Tk(1004,` e/ou `),Jc(1005,`code`),Tk(1006,`p-label`),Zg(),Tk(1007,`.`),Zg()()()(),Jc(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),Tk(1012,` p-placeholder`),_u(1013,`br`),Zg()()(),Jc(1014,`td`,20)(1015,`code`,21),Tk(1016,`string`),Zg()(),Jc(1017,`td`,22),Tk(1018,`-`),Zg(),Jc(1019,`td`,23)(1020,`em`)(1021,`strong`),Tk(1022,`(opcional)`),Zg()(),Jc(1023,`p`),Tk(1024,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(1025,`tr`,16)(1026,`td`,17)(1027,`div`,18)(1028,`span`,19),Tk(1029,` p-helper`),_u(1030,`br`),Zg()()(),Jc(1031,`td`,20)(1032,`code`,35),Tk(1033,`PoHelperOptions `),Zg(),Jc(1034,`code`,21),Tk(1035,` string`),Zg()(),Jc(1036,`td`,22),Tk(1037,`-`),Zg(),Jc(1038,`td`,23)(1039,`em`)(1040,`strong`),Tk(1041,`(opcional)`),Zg()(),Jc(1042,`p`),Tk(1043,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1044,`code`),Tk(1045,`p-label`),Zg(),Tk(1046,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1047,`code`),Tk(1048,`p-label`),Zg(),Tk(1049,`.`),Zg(),Jc(1050,`blockquote`)(1051,`p`),Tk(1052,`Para mais informações acesse: `),Jc(1053,`a`,36),Tk(1054,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1055,`.`),Zg()(),Jc(1056,`blockquote`)(1057,`p`),Tk(1058,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1059,`code`),Tk(1060,`p-additional-help-tooltip`),Zg(),Tk(1061,` e `),Jc(1062,`code`),Tk(1063,`p-additional-help`),Zg(),Tk(1064,`) será ignorado.`),Zg()()()(),Jc(1065,`tr`,16)(1066,`td`,17)(1067,`div`,18)(1068,`span`,19),Tk(1069,`p-readonly`),_u(1070,`br`),Zg()()(),Jc(1071,`td`,20)(1072,`code`,29),Tk(1073,`boolean`),Zg()(),Jc(1074,`td`,22),Tk(1075,`-`),Zg(),Jc(1076,`td`,23)(1077,`em`)(1078,`strong`),Tk(1079,`(opcional)`),Zg()(),Jc(1080,`p`),Tk(1081,`Torna o elemento somente leitura.`),Zg()()(),Jc(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),Tk(1086,`p-required`),_u(1087,`br`),Zg()()(),Jc(1088,`td`,20)(1089,`code`,29),Tk(1090,`boolean`),Zg()(),Jc(1091,`td`,22)(1092,`p`)(1093,`code`),Tk(1094,`false`),Zg()()(),Jc(1095,`td`,23)(1096,`em`)(1097,`strong`),Tk(1098,`(opcional)`),Zg()(),Jc(1099,`p`),Tk(1100,`Define que o campo será obrigatório.`),Zg()()(),Jc(1101,`tr`,16)(1102,`td`,17)(1103,`div`,18)(1104,`span`,19),Tk(1105,` p-required-field-error-message`),_u(1106,`br`),Zg()()(),Jc(1107,`td`,20)(1108,`code`,29),Tk(1109,`boolean`),Zg()(),Jc(1110,`td`,22)(1111,`p`)(1112,`code`),Tk(1113,`false`),Zg()()(),Jc(1114,`td`,23)(1115,`em`)(1116,`strong`),Tk(1117,`(opcional)`),Zg()(),Jc(1118,`p`),Tk(1119,`Exibe a mensagem setada na propriedade `),Jc(1120,`code`),Tk(1121,`p-error-pattern`),Zg(),Tk(1122,` se o campo estiver vazio e for requerido.`),Zg(),Jc(1123,`blockquote`)(1124,`p`),Tk(1125,`Necessário que a propriedade `),Jc(1126,`code`),Tk(1127,`p-required`),Zg(),Tk(1128,` esteja habilitada.`),Zg()()()(),Jc(1129,`tr`,16)(1130,`td`,17)(1131,`div`,18)(1132,`span`,19),Tk(1133,` p-show-required`),_u(1134,`br`),Zg()()(),Jc(1135,`td`,20)(1136,`code`,29),Tk(1137,`boolean`),Zg()(),Jc(1138,`td`,22),Tk(1139,`-`),Zg(),Jc(1140,`td`,23)(1141,`p`),Tk(1142,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1143,`blockquote`)(1144,`p`),Tk(1145,`Não será exibida a indicação se:`),Zg()(),Jc(1146,`ul`)(1147,`li`),Tk(1148,`Não possuir `),Jc(1149,`code`),Tk(1150,`p-help`),Zg(),Tk(1151,` e/ou `),Jc(1152,`code`),Tk(1153,`p-label`),Zg(),Tk(1154,`.`),Zg()()()(),Jc(1155,`tr`,16)(1156,`td`,17)(1157,`div`,18)(1158,`span`,19),Tk(1159,` p-size`),_u(1160,`br`),Zg()()(),Jc(1161,`td`,20)(1162,`code`,21),Tk(1163,`string`),Zg()(),Jc(1164,`td`,22)(1165,`p`)(1166,`code`),Tk(1167,`medium`),Zg()()(),Jc(1168,`td`,23)(1169,`em`)(1170,`strong`),Tk(1171,`(opcional)`),Zg()(),Jc(1172,`p`),Tk(1173,`Define o tamanho do componente:`),Zg(),Jc(1174,`ul`)(1175,`li`)(1176,`code`),Tk(1177,`small`),Zg(),Tk(1178,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1179,`li`)(1180,`code`),Tk(1181,`medium`),Zg(),Tk(1182,`: altura do input como 44px.`),Zg()(),Jc(1183,`blockquote`)(1184,`p`),Tk(1185,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1186,`code`),Tk(1187,`medium`),Zg(),Tk(1188,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1189,`a`,37),Tk(1190,`po-theme`),Zg(),Tk(1191,`.`),Zg()()()(),Jc(1192,`tr`,16)(1193,`td`,17)(1194,`div`,18)(1195,`span`,19),Tk(1196,` p-year-range-limit`),_u(1197,`br`),Zg()()(),Jc(1198,`td`,20)(1199,`code`,38),Tk(1200,`number`),Zg()(),Jc(1201,`td`,22)(1202,`p`),Tk(1203,`150`),Zg()(),Jc(1204,`td`,23)(1205,`p`),Tk(1206,`Define o limite de anos exibidos nas variações `),Jc(1207,`code`),Tk(1208,`month-year`),Zg(),Tk(1209,` e `),Jc(1210,`code`),Tk(1211,`year`),Zg(),Tk(1212,`,
considerando a data atual como refer\xEAncia.`),Zg(),Jc(1213,`p`),Tk(1214,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),Zg()()()(),Jc(1215,`h3`,12),Tk(1216,`Métodos`),Zg(),Jc(1217,`table`,39)(1218,`tr`,16)(1219,`th`,40)(1220,`div`,18)(1221,`h4`)(1222,`span`,19),Tk(1223,` focus `),Zg()()()()(),Jc(1224,`tr`,23)(1225,`td`,23)(1226,`p`),Tk(1227,`Função que atribui foco ao componente.`),Zg(),Jc(1228,`p`),Tk(1229,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1230,`pre`)(1231,`code`),Tk(1232,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),Zg()()()()(),_u(1233,`br`),Jc(1234,`table`,39)(1235,`tr`,16)(1236,`th`,40)(1237,`div`,18)(1238,`h4`)(1239,`span`,19),Tk(1240,` showAdditionalHelp `),Zg()()()()(),Jc(1241,`tr`,23)(1242,`td`,23)(1243,`p`),Tk(1244,`Método que exibe `),Jc(1245,`code`),Tk(1246,`p-helper`),Zg(),Tk(1247,` ou executa a ação definida em `),Jc(1248,`code`),Tk(1249,`p-helper{eventOnClick}`),Zg(),Tk(1250,` ou em `),Jc(1251,`code`),Tk(1252,`p-additionalHelp`),Zg(),Tk(1253,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1254,`code`),Tk(1255,`p-keydown`),Zg(),Tk(1256,`.`),Zg(),Jc(1257,`blockquote`)(1258,`p`),Tk(1259,`Exibe ou oculta o conteúdo do componente `),Jc(1260,`code`),Tk(1261,`po-helper`),Zg(),Tk(1262,` quando o componente estiver com foco.`),Zg()(),Jc(1263,`pre`)(1264,`code`),Tk(1265,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),Zg()(),Jc(1266,`pre`)(1267,`code`),Tk(1268,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1269,`br`),Jc(1270,`h3`),Tk(1271,`Enums`),Zg(),Jc(1272,`h4`,4)(1273,`code`,5),Tk(1274,`PoDatepickerIsoFormat`),Zg()(),Jc(1275,`div`,2)(1276,`p`)(1277,`em`),Tk(1278,`Enum`),Zg(),Tk(1279,` que define o padrão de formatação das datas.`),Zg(),Jc(1280,`blockquote`)(1281,`p`),Tk(1282,`Caso um formato padrão seja definido, o mesmo não será mais alterado de acordo com o formato de entrada.`),Zg()()(),Jc(1283,`h4`,12),Tk(1284,`Propriedades`),Zg(),Jc(1285,`table`,13)(1286,`tr`,14)(1287,`th`,15),Tk(1288,`Nome`),Zg(),Jc(1289,`th`,15),Tk(1290,`Descrição`),Zg()(),Jc(1291,`tr`,16)(1292,`td`,17)(1293,`div`,18)(1294,`span`,19),Tk(1295,` Basic`),_u(1296,`br`),Zg()()(),Jc(1297,`td`,23)(1298,`p`),Tk(1299,`Padrão `),Jc(1300,`strong`),Tk(1301,`E8601DAw`),Zg(),Tk(1302,` (`),Jc(1303,`em`),Tk(1304,`yyyy-mm-dd`),Zg(),Tk(1305,`).`),Zg()()(),Jc(1306,`tr`,16)(1307,`td`,17)(1308,`div`,18)(1309,`span`,19),Tk(1310,` Extended`),_u(1311,`br`),Zg()()(),Jc(1312,`td`,23)(1313,`p`),Tk(1314,`Padrão `),Jc(1315,`strong`),Tk(1316,`E8601DZw`),Zg(),Tk(1317,` (`),Jc(1318,`em`),Tk(1319,`yyyy-mm-ddThh:mm:ss+|-hh:mm`),Zg(),Tk(1320,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function et(o,nt){if(o&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(m);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-datepicker-basic-view`)(2,`sample-po-datepicker-labs-view`)(3,`sample-po-datepicker-year-view`)(4,`sample-po-datepicker-month-year-view`)(5,`sample-po-datepicker-airfare-view`)(6,`sample-po-datepicker-airfare-reactive-form-view`),Zg()}if(o&2){let m=nk();Rb(`p-active`,m.activeTab===`web`)}}var tt=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Datepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,et,7,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-datepicker-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,fe,xe,Ce,De,we,_e,Me],encapsulation:2,changeDetection:1})}return o})()}];var Fe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(tt),WV]})}return o})();var Kt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Fe]})}return o})();export{Kt as DocPoDatepickerModule};