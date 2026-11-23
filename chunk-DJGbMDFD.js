import{m as P,p as M}from"./main-RBGX2DMP.js";import{An as sie,Ar as I,At as Zte,F as Joe,Ft as bP,G as Nf,Gi as Yb,Gt as cne,Ha as p,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,Zr as No,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,fo as xo,gi as Rb,io as vt,j as I4,k as Goe,li as Qc,ra as de$1,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik,yr as Du}from"./chunk-BQDTQO8h.js";var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,n){r&1&&vu(0,`po-datetimepicker`,0)},dependencies:[bP],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Datetimepicker Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-datetimepicker-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return l})();var ce=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=YO();Qc(0,`po-datetimepicker`,1),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.datetimepicker,o)||(n.datetimepicker=o),U_(o)}),vt(`p-blur`,function(){return n.changeEvent(`p-blur`)})(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.label,o)||(n.label=o),U_(o)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.help,o)||(n.help=o),U_(o)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.helperText,o)||(n.helperText=o),U_(o)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.placeholder,o)||(n.placeholder=o),U_(o)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.errorPattern,o)||(n.errorPattern=o),U_(o)}),Kg(),Qc(13,`po-number`,10),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.minuteInterval,o)||(n.minuteInterval=o),U_(o)}),Kg(),Qc(14,`po-number`,11),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.secondInterval,o)||(n.secondInterval=o),U_(o)}),Kg(),Qc(15,`po-timepicker`,12),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.minTime,o)||(n.minTime=o),U_(o)}),Kg(),Qc(16,`po-timepicker`,13),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.maxTime,o)||(n.maxTime=o),U_(o)}),Kg(),Qc(17,`po-datepicker`,14),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.minDate,o)||(n.minDate=o),U_(o)}),Kg(),Qc(18,`po-datepicker`,15),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.maxDate,o)||(n.maxDate=o),U_(o)}),Kg(),Qc(19,`po-checkbox-group`,16),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.properties,o)||(n.properties=o),U_(o)}),Kg(),Qc(20,`po-radio-group`,17),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.locale,o)||(n.locale=o),U_(o)}),Kg(),Qc(21,`po-radio-group`,18),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.formatDate,o)||(n.formatDate=o),U_(o)}),Kg(),Qc(22,`po-radio-group`,19),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.formatTime,o)||(n.formatTime=o),U_(o)}),Kg(),Qc(23,`po-radio-group`,20),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.size,o)||(n.size=o),U_(o)}),Kg(),Qc(24,`div`,2)(25,`po-button`,21),vt(`p-click`,function(){return n.restore()}),Kg()()()}r&2&&(Yb(`ngModel`,n.datetimepicker),Rb(`p-clean`,n.properties.includes(`clean`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-disabled`,n.properties.includes(`disabled`))(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-error-pattern`,n.errorPattern)(`p-format-date`,n.formatDate)(`p-format-time`,n.formatTime)(`p-help`,n.help)(`p-helper`,n.helperText)(`p-label`,n.label)(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-loading`,n.properties.includes(`loading`))(`p-locale`,n.locale)(`p-max-date`,n.maxDate)(`p-max-time`,n.maxTime)(`p-min-date`,n.minDate)(`p-min-time`,n.minTime)(`p-minute-interval`,n.minuteInterval)(`p-no-autocomplete`,n.properties?.includes(`noAutocomplete`))(`p-optional`,n.properties.includes(`optional`))(`p-placeholder`,n.placeholder)(`p-readonly`,n.properties.includes(`readonly`))(`p-required`,n.properties.includes(`required`))(`p-required-field-error-message`,n.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,n.secondInterval)(`p-show-required`,n.properties.includes(`showRequired`))(`p-show-seconds`,n.properties.includes(`showSeconds`))(`p-size`,n.size),W0(),wg(3),Rb(`p-value`,n.datetimepicker),wg(),Rb(`p-value`,n.event),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.placeholder),W0(),wg(),Yb(`ngModel`,n.errorPattern),W0(),wg(),Yb(`ngModel`,n.minuteInterval),W0(),wg(),Yb(`ngModel`,n.secondInterval),W0(),wg(),Yb(`ngModel`,n.minTime),W0(),wg(),Yb(`ngModel`,n.maxTime),W0(),wg(),Yb(`ngModel`,n.minDate),Rb(`p-max-date`,n.maxDate),W0(),wg(),Yb(`ngModel`,n.maxDate),Rb(`p-min-date`,n.minDate),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.locale),Rb(`p-options`,n.localeOptions),W0(),wg(),Yb(`ngModel`,n.formatDate),Rb(`p-options`,n.formatDateOptions),W0(),wg(),Yb(`ngModel`,n.formatTime),Rb(`p-options`,n.formatTimeOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,tie,bP,j4,Goe,Zte,cne,Joe],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Datetimepicker Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-datetimepicker-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-datetimepicker
  class="po-sm-12"
  name="datetimepicker"
  [(ngModel)]="datetimepicker"
  [p-clean]="properties.includes('clean')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-error-pattern]="errorPattern"
  [p-format-date]="formatDate"
  [p-format-time]="formatTime"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-max-date]="maxDate"
  [p-max-time]="maxTime"
  [p-min-date]="minDate"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-second-interval]="secondInterval"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-datetimepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datetimepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
  </po-number>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min Date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max Date" [p-min-date]="minDate">
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
    name="formatDate"
    [(ngModel)]="formatDate"
    p-columns="4"
    p-label="Format Date"
    [p-options]="formatDateOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="formatTime"
    [(ngModel)]="formatTime"
    p-columns="4"
    p-label="Format Time"
    [p-options]="formatTimeOptions"
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-labs',
  templateUrl: './sample-po-datetimepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerLabsComponent implements OnInit {
  datetimepicker: string;
  errorPattern: string;
  event: string;
  formatDate: string;
  formatTime: string;
  help: string;
  helperText: string;
  label: string;
  locale: string;
  maxDate: string | Date;
  maxTime: string;
  minDate: string | Date;
  minTime: string;
  minuteInterval: number;
  placeholder: string;
  properties: Array<string>;
  secondInterval: number;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatDateOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly formatTimeOptions: Array<PoRadioGroupOption> = [
    { label: '24h', value: '24' },
    { label: '12h (AM/PM)', value: '12' }
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
    this.datetimepicker = undefined;
    this.errorPattern = undefined;
    this.event = undefined;
    this.formatDate = undefined;
    this.formatTime = undefined;
    this.help = undefined;
    this.helperText = '';
    this.label = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.maxTime = undefined;
    this.minDate = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.secondInterval = undefined;
    this.size = 'medium';
  }
}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,n){r&1&&(Qc(0,`po-datetimepicker`,0),z0(),Kb(`ngModelChange`,function(m){return Tk(n.datetime,m)||(n.datetime=m),m}),Kg()),r&2&&(Yb(`ngModel`,n.datetime),W0())},dependencies:[MZ,QL,bP],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-12h-seconds`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Datetimepicker - 12h with Seconds`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-datetimepicker-12h-seconds`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return l})();var Me=[`formScheduling`];var Ee=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,n){if(r&1&&Du(Me,7),r&2){let d;No(d=xo())&&(n.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,n){if(r&1){let d=YO();Qc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.patient,o)||(n.patient=o),U_(o)}),Kg(),Qc(4,`po-input`,3),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.doctor,o)||(n.doctor=o),U_(o)}),Kg()(),Qc(5,`div`,1)(6,`po-select`,4),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.specialty,o)||(n.specialty=o),U_(o)}),Kg(),Qc(7,`po-datetimepicker`,5),z0(),Kb(`ngModelChange`,function(o){return B_(d),Tk(n.appointment,o)||(n.appointment=o),U_(o)}),Kg()(),Qc(8,`div`,1)(9,`po-button`,6),vt(`p-click`,function(){return n.confirm()}),Kg()()()}if(r&2){let d=ik(1);wg(3),Yb(`ngModel`,n.patient),W0(),wg(),Yb(`ngModel`,n.doctor),W0(),wg(2),Yb(`ngModel`,n.specialty),Rb(`p-options`,n.specialtyOptions),W0(),wg(),Yb(`ngModel`,n.appointment),W0(),wg(2),Rb(`p-disabled`,d.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,bP,j4,Koe],encapsulation:2,changeDetection:1})}return l})();var he=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-scheduling`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Datetimepicker - Scheduling`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-datetimepicker-scheduling`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="patient"
      [(ngModel)]="patient"
      p-label="Paciente"
      p-placeholder="Nome do paciente"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="doctor"
      [(ngModel)]="doctor"
      p-label="M\xE9dico"
      p-placeholder="Nome do m\xE9dico"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="specialty"
      [(ngModel)]="specialty"
      p-label="Especialidade"
      p-required
      [p-options]="specialtyOptions"
    >
    </po-select>

    <po-datetimepicker
      class="po-md-6"
      name="appointment"
      [(ngModel)]="appointment"
      p-clean
      p-label="Data e Hora da Consulta"
      p-min-time="08:00"
      p-max-time="18:00"
      p-minute-interval="15"
      p-required
    >
    </po-datetimepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="confirmButton"
      p-label="Agendar Consulta"
      [p-disabled]="formScheduling.invalid"
      (p-click)="confirm()"
    >
    </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { UntypedFormControl } from '@angular/forms';
import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-scheduling',
  templateUrl: './sample-po-datetimepicker-scheduling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  appointment: string;
  doctor: string;
  patient: string;
  specialty: string;

  public readonly specialtyOptions: Array<PoSelectOption> = [
    { value: 'general', label: 'Cl\xEDnico Geral' },
    { value: 'cardiology', label: 'Cardiologia' },
    { value: 'dermatology', label: 'Dermatologia' },
    { value: 'orthopedics', label: 'Ortopedia' },
    { value: 'neurology', label: 'Neurologia' }
  ];

  confirm() {
    const dateFormatted = this.appointment ? this.appointment.slice(0, 16) : '';

    const message =
      \`Confirmar agendamento de consulta?\\n\\n\` +
      \`Paciente: \${this.patient}\\n\` +
      \`M\xE9dico: \${this.doctor}\\n\` +
      \`Especialidade: \${this.getSpecialtyLabel()}\\n\` +
      \`Data/Hora: \${dateFormatted}\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Consulta agendada com sucesso!');
        this.formScheduling.reset();
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getSpecialtyLabel(): string {
    const option = this.specialtyOptions.find(o => o.value === this.specialty);
    return option ? option.label : '';
  }
}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-datetimepicker-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-format-date`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-error-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-locale`,1,`docs-api-properties-row`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-max-date`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`id`,`prop-p-max-time`,1,`docs-api-properties-row`],[`id`,`prop-p-min-date`,1,`docs-api-properties-row`],[`id`,`prop-p-min-time`,1,`docs-api-properties-row`],[`id`,`prop-p-minute-interval`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-second-interval`,1,`docs-api-properties-row`],[`id`,`prop-p-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-seconds`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`id`,`prop-p-format-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoDatetimepickerComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O `),Qc(24,`code`),Sk(25,`po-datetimepicker`),Kg(),Sk(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),Kg(),Qc(27,`p`),Sk(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Qc(29,`code`),Sk(30,`p-format-date`),Kg(),Sk(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Qc(32,`code`),Sk(33,`p-format-time`),Kg(),Sk(34,`.`),Kg(),Qc(35,`p`),Sk(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Qc(37,`code`),Sk(38,`p-locale`),Kg(),Sk(39,`.`),Kg(),Qc(40,`p`),Sk(41,`O componente aceita os seguintes formatos de entrada:`),Kg(),Qc(42,`ul`)(43,`li`),Sk(44,`ISO 8601 com timezone: `),Qc(45,`code`),Sk(46,`'2026-05-12T14:30:00-03:00'`),Kg()(),Qc(47,`li`),Sk(48,`ISO 8601 UTC: `),Qc(49,`code`),Sk(50,`'2026-05-12T14:30:00Z'`),Kg()(),Qc(51,`li`),Sk(52,`ISO 8601 sem timezone: `),Qc(53,`code`),Sk(54,`'2026-05-12T14:30:00'`),Kg()(),Qc(55,`li`),Sk(56,`ISO 8601 apenas data: `),Qc(57,`code`),Sk(58,`'2026-05-12'`),Kg()(),Qc(59,`li`),Sk(60,`JavaScript Date Object: `),Qc(61,`code`),Sk(62,`new Date(2026, 4, 12, 14, 30)`),Kg()()(),Qc(63,`p`),Sk(64,`O formato de saída do `),Qc(65,`em`),Sk(66,`model`),Kg(),Sk(67,` é sempre ISO 8601 com timezone local: `),Qc(68,`code`),Sk(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),Kg(),Sk(70,`
(ou `),Qc(71,`code`),Sk(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),Kg(),Sk(73,` quando `),Qc(74,`code`),Sk(75,`p-show-seconds`),Kg(),Sk(76,` está ativo).`),Kg(),Qc(77,`p`)(78,`strong`),Sk(79,`Importante:`),Kg()(),Qc(80,`ul`)(81,`li`),Sk(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),Kg(),Qc(83,`li`),Sk(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),Kg(),Qc(85,`li`),Sk(86,`Caso a data/hora esteja inválida, o `),Qc(87,`code`),Sk(88,`model`),Kg(),Sk(89,` receberá a mensagem de erro localizada.`),Kg(),Qc(90,`li`),Sk(91,`Datas no formato ISO (ex.: `),Qc(92,`code`),Sk(93,`'0050-05-10'`),Kg(),Sk(94,`) com ano inferior a 100 são mantidas. Ao informar um objeto `),Qc(95,`code`),Sk(96,`Date`),Kg(),Sk(97,`
com ano inferior a 100, utilize o m\xE9todo `),Qc(98,`a`,6)(99,`code`),Sk(100,`setFullYear`),Kg()(),Sk(101,`,
pois o `),Qc(102,`a`,7)(103,`code`),Sk(104,`new Date`),Kg()(),Sk(105,` converte esses anos para 19XX.`),Kg(),Qc(106,`li`),Sk(107,`Caso o `),Qc(108,`code`),Sk(109,`input`),Kg(),Sk(110,` esteja passando um `),Qc(111,`code`),Sk(112,`[(ngModel)]`),Kg(),Sk(113,`, mas não tenha um `),Qc(114,`code`),Sk(115,`name`),Kg(),Sk(116,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Qc(117,`code`),Sk(118,`[ngModelOptions]="{standalone: true}"`),Kg(),Sk(119,`).`),Kg()(),Qc(120,`p`),Sk(121,`Exemplo:`),Kg(),Qc(122,`pre`)(123,`code`),Sk(124,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),Kg()(),Qc(125,`blockquote`)(126,`p`),Sk(127,`Não esqueça de importar o `),Qc(128,`code`),Sk(129,`FormsModule`),Kg(),Sk(130,` em seu módulo, tal como para utilizar o `),Qc(131,`code`),Sk(132,`input default`),Kg(),Sk(133,`.`),Kg()(),Qc(134,`h4`),Sk(135,`Tokens customizáveis`),Kg(),Qc(136,`p`),Sk(137,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),vu(138,`br`),Sk(139,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Qc(140,`code`),Sk(141,`.po-input`),Kg()(),Qc(142,`blockquote`)(143,`p`),Sk(144,`Para maiores informações, acesse o guia `),Qc(145,`a`,8),Sk(146,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(147,`.`),Kg()(),Qc(148,`table`)(149,`thead`)(150,`tr`)(151,`th`),Sk(152,`Propriedade`),Kg(),Qc(153,`th`),Sk(154,`Descrição`),Kg(),Qc(155,`th`),Sk(156,`Valor Padrão`),Kg()()(),Qc(157,`tbody`)(158,`tr`)(159,`td`)(160,`strong`),Sk(161,`Default Values`),Kg()(),vu(162,`td`)(163,`td`),Kg(),Qc(164,`tr`)(165,`td`)(166,`code`),Sk(167,`--font-family`),Kg()(),Qc(168,`td`),Sk(169,`Família tipográfica usada`),Kg(),Qc(170,`td`)(171,`code`),Sk(172,`var(--font-family-theme)`),Kg()()(),Qc(173,`tr`)(174,`td`)(175,`code`),Sk(176,`--font-size`),Kg()(),Qc(177,`td`),Sk(178,`Tamanho da fonte`),Kg(),Qc(179,`td`)(180,`code`),Sk(181,`var(--font-size-default)`),Kg()()(),Qc(182,`tr`)(183,`td`)(184,`code`),Sk(185,`--text-color-placeholder`),Kg(),Sk(186,` \xA0`),Kg(),Qc(187,`td`),Sk(188,`Cor principal do texto do placeholder`),Kg(),Qc(189,`td`)(190,`code`),Sk(191,`var(--color-neutral-light-30)`),Kg()()(),Qc(192,`tr`)(193,`td`)(194,`code`),Sk(195,`--color`),Kg()(),Qc(196,`td`),Sk(197,`Cor principal do datetimepicker`),Kg(),Qc(198,`td`)(199,`code`),Sk(200,`var(--color-neutral-dark-70)`),Kg()()(),Qc(201,`tr`)(202,`td`)(203,`code`),Sk(204,`--background`),Kg()(),Qc(205,`td`),Sk(206,`Cor de background`),Kg(),Qc(207,`td`)(208,`code`),Sk(209,`var(--color-neutral-light-05)`),Kg()()(),Qc(210,`tr`)(211,`td`)(212,`code`),Sk(213,`--padding`),Kg()(),Qc(214,`td`),Sk(215,`Preenchimento`),Kg(),Qc(216,`td`)(217,`code`),Sk(218,`0 0.5rem`),Kg()()(),Qc(219,`tr`)(220,`td`)(221,`code`),Sk(222,`--text-color`),Kg()(),Qc(223,`td`),Sk(224,`Cor do texto`),Kg(),Qc(225,`td`)(226,`code`),Sk(227,`var(--color-neutral-dark-90)`),Kg()()(),Qc(228,`tr`)(229,`td`)(230,`code`),Sk(231,`--field-container-title-justify`),Kg()(),Qc(232,`td`),Sk(233,`Alinhamento horizontal do título (`),Qc(234,`code`),Sk(235,`justify-content`),Kg(),Sk(236,`)`),Kg(),Qc(237,`td`)(238,`code`),Sk(239,`space-between`),Kg()()(),Qc(240,`tr`)(241,`td`)(242,`code`),Sk(243,`--field-container-title-flex`),Kg()(),Qc(244,`td`),Sk(245,`Flex do título (`),Qc(246,`code`),Sk(247,`flex`),Kg(),Sk(248,`)`),Kg(),Qc(249,`td`)(250,`code`),Sk(251,`1 auto`),Kg()()(),Qc(252,`tr`)(253,`td`)(254,`strong`),Sk(255,`Hover`),Kg()(),vu(256,`td`)(257,`td`),Kg(),Qc(258,`tr`)(259,`td`)(260,`code`),Sk(261,`--color-hover`),Kg()(),Qc(262,`td`),Sk(263,`Cor principal no estado hover`),Kg(),Qc(264,`td`)(265,`code`),Sk(266,`var(--color-brand-01-dark)`),Kg()()(),Qc(267,`tr`)(268,`td`)(269,`code`),Sk(270,`--background-hover`),Kg()(),Qc(271,`td`),Sk(272,`Cor de background no estado hover`),Kg(),Qc(273,`td`)(274,`code`),Sk(275,`var(--color-brand-01-lightest)`),Kg()()(),Qc(276,`tr`)(277,`td`)(278,`strong`),Sk(279,`Focused`),Kg()(),vu(280,`td`)(281,`td`),Kg(),Qc(282,`tr`)(283,`td`)(284,`code`),Sk(285,`--color-focused`),Kg()(),Qc(286,`td`),Sk(287,`Cor principal no estado de focus`),Kg(),Qc(288,`td`)(289,`code`),Sk(290,`var(--color-action-default)`),Kg()()(),Qc(291,`tr`)(292,`td`)(293,`code`),Sk(294,`--outline-color-focused`),Kg()(),Qc(295,`td`),Sk(296,`Cor do outline do estado de focus`),Kg(),Qc(297,`td`)(298,`code`),Sk(299,`var(--color-action-focus)`),Kg()()(),Qc(300,`tr`)(301,`td`)(302,`strong`),Sk(303,`Disabled`),Kg()(),vu(304,`td`)(305,`td`),Kg(),Qc(306,`tr`)(307,`td`)(308,`code`),Sk(309,`--color-disabled`),Kg()(),Qc(310,`td`),Sk(311,`Cor principal no estado disabled`),Kg(),Qc(312,`td`)(313,`code`),Sk(314,`var(--color-neutral-light-30)`),Kg()()(),Qc(315,`tr`)(316,`td`)(317,`code`),Sk(318,`--background-disabled`),Kg()(),Qc(319,`td`),Sk(320,`Cor de background no estado disabled \xA0`),Kg(),Qc(321,`td`)(322,`code`),Sk(323,`var(--color-neutral-light-20)`),Kg()()(),Qc(324,`tr`)(325,`td`)(326,`code`),Sk(327,`--text-color-disabled`),Kg()(),Qc(328,`td`),Sk(329,`Cor do texto no estado disabled`),Kg(),Qc(330,`td`)(331,`code`),Sk(332,`var(--color-neutral-dark-70)`),Kg()()()()()(),Qc(333,`div`,9)(334,`h4`,10),Sk(335,`Seletor`),Kg(),Qc(336,`pre`,11),Sk(337,`<po-datetimepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change-model)="EventEmitter"
    p-clean="boolean | string"
    p-compact-label="boolean"
    p-format-date="string"
    p-disabled="boolean | string"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean | string"
    p-locale="string"
    p-max-date="string | Date"
    p-max-time="string"
    p-min-date="string | Date"
    p-min-time="string"
    p-minute-interval="number"
    name="string"
    p-no-autocomplete="boolean | string"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean | string"
    p-required="boolean | string"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string"
    p-format-time="PoTimerFormat" >
</po-datetimepicker>
`),Kg()(),Qc(338,`h4`,12),Sk(339,`Propriedades`),Kg(),Qc(340,`table`,13)(341,`tr`,14)(342,`th`,15),Sk(343,`Nome`),Kg(),Qc(344,`th`,15),Sk(345,`Tipo`),Kg(),Qc(346,`th`,15),Sk(347,`Padrão`),Kg(),Qc(348,`th`,15),Sk(349,`Descrição`),Kg()(),Qc(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),Sk(354,` p-append-in-body`),vu(355,`br`),Kg()()(),Qc(356,`td`,20)(357,`code`,21),Sk(358,`boolean`),Kg()(),Qc(359,`td`,22)(360,`p`)(361,`code`),Sk(362,`false`),Kg()()(),Qc(363,`td`,23)(364,`em`)(365,`strong`),Sk(366,`(opcional)`),Kg()(),Qc(367,`p`),Sk(368,`Define que o `),Qc(369,`code`),Sk(370,`calendar`),Kg(),Sk(371,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),Kg()()(),Qc(372,`tr`,24)(373,`td`,17)(374,`div`,18)(375,`span`,19),Sk(376,` p-auto-focus`),vu(377,`br`),Kg()()(),Qc(378,`td`,20)(379,`code`,21),Sk(380,`boolean`),Kg()(),Qc(381,`td`,22)(382,`p`)(383,`code`),Sk(384,`false`),Kg()()(),Qc(385,`td`,23)(386,`em`)(387,`strong`),Sk(388,`(opcional)`),Kg()(),Qc(389,`p`),Sk(390,`Aplica foco no elemento ao ser iniciado.`),Kg()()(),Qc(391,`tr`,25)(392,`td`,17)(393,`div`,26)(394,`span`,27),Sk(395,` (p-change-model)`),vu(396,`br`),Kg()()(),Qc(397,`td`,20)(398,`code`,28),Sk(399,`EventEmitter`),Kg()(),Qc(400,`td`,22),Sk(401,`-`),Kg(),Qc(402,`td`,23)(403,`em`)(404,`strong`),Sk(405,`(opcional)`),Kg()(),Qc(406,`p`),Sk(407,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(408,`code`),Sk(409,`setValue`),Kg(),Sk(410,`, `),Qc(411,`code`),Sk(412,`patchValue`),Kg(),Sk(413,`, carregamento assíncrono).`),Kg(),Qc(414,`p`),Sk(415,`Diferentemente do `),Qc(416,`code`),Sk(417,`p-change`),Kg(),Sk(418,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(419,`code`),Sk(420,`p-change-model`),Kg(),Sk(421,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(422,`p`),Sk(423,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(424,`tr`,29)(425,`td`,17)(426,`div`,18)(427,`span`,19),Sk(428,` p-clean`),vu(429,`br`),Kg()()(),Qc(430,`td`,20)(431,`code`,21),Sk(432,`boolean `),Kg(),Qc(433,`code`,30),Sk(434,` string`),Kg()(),Qc(435,`td`,22)(436,`p`)(437,`code`),Sk(438,`false`),Kg()()(),Qc(439,`td`,23)(440,`em`)(441,`strong`),Sk(442,`(opcional)`),Kg()(),Qc(443,`p`),Sk(444,`Habilita ação para limpar o campo.`),Kg()()(),Qc(445,`tr`,31)(446,`td`,17)(447,`div`,18)(448,`span`,19),Sk(449,` p-compact-label`),vu(450,`br`),Kg()()(),Qc(451,`td`,20)(452,`code`,21),Sk(453,`boolean`),Kg()(),Qc(454,`td`,22)(455,`p`)(456,`code`),Sk(457,`false`),Kg()()(),Qc(458,`td`,23)(459,`em`)(460,`strong`),Sk(461,`(opcional)`),Kg()(),Qc(462,`p`),Sk(463,`Define se o título do campo será exibido de forma compacta.`),Kg()()(),Qc(464,`tr`,32)(465,`td`,17)(466,`div`,18)(467,`span`,19),Sk(468,` p-format-date`),vu(469,`br`),Kg()()(),Qc(470,`td`,20)(471,`code`,30),Sk(472,`string`),Kg()(),Qc(473,`td`,22)(474,`p`),Sk(475,`Determinado pelo locale`),Kg()(),Qc(476,`td`,23)(477,`em`)(478,`strong`),Sk(479,`(opcional)`),Kg()(),Qc(480,`p`),Sk(481,`Define o formato de exibição da data.`),Kg(),Qc(482,`p`),Sk(483,`Valores válidos:`),Kg(),Qc(484,`ul`)(485,`li`)(486,`code`),Sk(487,`dd/mm/yyyy`),Kg()(),Qc(488,`li`)(489,`code`),Sk(490,`mm/dd/yyyy`),Kg()(),Qc(491,`li`)(492,`code`),Sk(493,`yyyy/mm/dd`),Kg()()(),Qc(494,`p`),Sk(495,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Kg(),Qc(496,`ul`)(497,`li`)(498,`code`),Sk(499,`en`),Kg(),Sk(500,` → `),Qc(501,`code`),Sk(502,`mm/dd/yyyy`),Kg()(),Qc(503,`li`)(504,`code`),Sk(505,`pt`),Kg(),Sk(506,`, `),Qc(507,`code`),Sk(508,`es`),Kg(),Sk(509,`, `),Qc(510,`code`),Sk(511,`ru`),Kg(),Sk(512,` → `),Qc(513,`code`),Sk(514,`dd/mm/yyyy`),Kg()()()()(),Qc(515,`tr`,33)(516,`td`,17)(517,`div`,18)(518,`span`,19),Sk(519,` p-disabled`),vu(520,`br`),Kg()()(),Qc(521,`td`,20)(522,`code`,21),Sk(523,`boolean `),Kg(),Qc(524,`code`,30),Sk(525,` string`),Kg()(),Qc(526,`td`,22)(527,`p`)(528,`code`),Sk(529,`false`),Kg()()(),Qc(530,`td`,23)(531,`em`)(532,`strong`),Sk(533,`(opcional)`),Kg()(),Qc(534,`p`),Sk(535,`Desabilita o campo.`),Kg()()(),Qc(536,`tr`,34)(537,`td`,17)(538,`div`,18)(539,`span`,19),Sk(540,` p-error-limit`),vu(541,`br`),Kg()()(),Qc(542,`td`,20)(543,`code`,21),Sk(544,`boolean`),Kg()(),Qc(545,`td`,22)(546,`p`)(547,`code`),Sk(548,`false`),Kg()()(),Qc(549,`td`,23)(550,`em`)(551,`strong`),Sk(552,`(opcional)`),Kg()(),Qc(553,`p`),Sk(554,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg()()(),Qc(555,`tr`,35)(556,`td`,17)(557,`div`,18)(558,`span`,19),Sk(559,` p-error-pattern`),vu(560,`br`),Kg()()(),Qc(561,`td`,20)(562,`code`,30),Sk(563,`string`),Kg()(),Qc(564,`td`,22),Sk(565,`-`),Kg(),Qc(566,`td`,23)(567,`em`)(568,`strong`),Sk(569,`(opcional)`),Kg()(),Qc(570,`p`),Sk(571,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),Kg()()(),Qc(572,`tr`,36)(573,`td`,17)(574,`div`,18)(575,`span`,19),Sk(576,` p-help`),vu(577,`br`),Kg()()(),Qc(578,`td`,20)(579,`code`,30),Sk(580,`string`),Kg()(),Qc(581,`td`,22),Sk(582,`-`),Kg(),Qc(583,`td`,23)(584,`em`)(585,`strong`),Sk(586,`(opcional)`),Kg()(),Qc(587,`p`),Sk(588,`Texto de apoio do campo.`),Kg()()(),Qc(589,`tr`,37)(590,`td`,17)(591,`div`,26)(592,`span`,27),Sk(593,` (p-keydown)`),vu(594,`br`),Kg()()(),Qc(595,`td`,20)(596,`code`,28),Sk(597,`EventEmitter`),Kg()(),Qc(598,`td`,22),Sk(599,`-`),Kg(),Qc(600,`td`,23)(601,`em`)(602,`strong`),Sk(603,`(opcional)`),Kg()(),Qc(604,`p`),Sk(605,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),Kg()()(),Qc(606,`tr`,38)(607,`td`,17)(608,`div`,18)(609,`span`,19),Sk(610,` p-label`),vu(611,`br`),Kg()()(),Qc(612,`td`,20)(613,`code`,30),Sk(614,`string`),Kg()(),Qc(615,`td`,22),Sk(616,`-`),Kg(),Qc(617,`td`,23)(618,`em`)(619,`strong`),Sk(620,`(opcional)`),Kg()(),Qc(621,`p`),Sk(622,`Rótulo do campo.`),Kg()()(),Qc(623,`tr`,39)(624,`td`,17)(625,`div`,18)(626,`span`,19),Sk(627,` p-label-text-wrap`),vu(628,`br`),Kg()()(),Qc(629,`td`,20)(630,`code`,21),Sk(631,`boolean`),Kg()(),Qc(632,`td`,22)(633,`p`)(634,`code`),Sk(635,`false`),Kg()()(),Qc(636,`td`,23)(637,`em`)(638,`strong`),Sk(639,`(opcional)`),Kg()(),Qc(640,`p`),Sk(641,`Habilita a quebra automática do texto da propriedade `),Qc(642,`code`),Sk(643,`p-label`),Kg(),Sk(644,`.`),Kg()()(),Qc(645,`tr`,40)(646,`td`,17)(647,`div`,18)(648,`span`,19),Sk(649,` p-loading`),vu(650,`br`),Kg()()(),Qc(651,`td`,20)(652,`code`,21),Sk(653,`boolean `),Kg(),Qc(654,`code`,30),Sk(655,` string`),Kg()(),Qc(656,`td`,22)(657,`p`)(658,`code`),Sk(659,`false`),Kg()()(),Qc(660,`td`,23)(661,`em`)(662,`strong`),Sk(663,`(opcional)`),Kg()(),Qc(664,`p`),Sk(665,`Exibe um ícone de carregamento no lado direito do campo.`),Kg()()(),Qc(666,`tr`,41)(667,`td`,17)(668,`div`,18)(669,`span`,19),Sk(670,` p-locale`),vu(671,`br`),Kg()()(),Qc(672,`td`,20)(673,`code`,30),Sk(674,`string`),Kg()(),Qc(675,`td`,22),Sk(676,`-`),Kg(),Qc(677,`td`,23)(678,`em`)(679,`strong`),Sk(680,`(opcional)`),Kg()(),Qc(681,`p`),Sk(682,`Idioma do componente.`),Kg(),Qc(683,`blockquote`)(684,`p`),Sk(685,`O locale padrão será recuperado com base no `),Qc(686,`a`,42)(687,`code`),Sk(688,`PoI18nService`),Kg()(),Sk(689,` ou `),Qc(690,`em`),Sk(691,`browser`),Kg(),Sk(692,`.`),Kg()()()(),Qc(693,`tr`,43)(694,`td`,17)(695,`div`,18)(696,`span`,19),Sk(697,` p-max-date`),vu(698,`br`),Kg()()(),Qc(699,`td`,20)(700,`code`,30),Sk(701,`string `),Kg(),Qc(702,`code`,44),Sk(703,` Date`),Kg()(),Qc(704,`td`,22),Sk(705,`-`),Kg(),Qc(706,`td`,23)(707,`em`)(708,`strong`),Sk(709,`(opcional)`),Kg()(),Qc(710,`p`),Sk(711,`Define uma data máxima para o `),Qc(712,`code`),Sk(713,`po-datetimepicker`),Kg(),Sk(714,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),Kg(),Qc(715,`p`),Sk(716,`Aceita os formatos:`),Kg(),Qc(717,`ul`)(718,`li`)(719,`code`),Sk(720,`Date`),Kg(),Sk(721,` object: `),Qc(722,`code`),Sk(723,`new Date(2026, 4, 31)`),Kg()(),Qc(724,`li`),Sk(725,`ISO string: `),Qc(726,`code`),Sk(727,`'2026-05-31'`),Kg()(),Qc(728,`li`),Sk(729,`ISO com hora: `),Qc(730,`code`),Sk(731,`'2026-05-31T23:59:59-03:00'`),Kg()()()()(),Qc(732,`tr`,45)(733,`td`,17)(734,`div`,18)(735,`span`,19),Sk(736,` p-max-time`),vu(737,`br`),Kg()()(),Qc(738,`td`,20)(739,`code`,30),Sk(740,`string`),Kg()(),Qc(741,`td`,22),Sk(742,`-`),Kg(),Qc(743,`td`,23)(744,`em`)(745,`strong`),Sk(746,`(opcional)`),Kg()(),Qc(747,`p`),Sk(748,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),Kg(),Qc(749,`p`),Sk(750,`Formato aceito: `),Qc(751,`code`),Sk(752,`HH:mm`),Kg(),Sk(753,` ou `),Qc(754,`code`),Sk(755,`HH:mm:ss`),Kg(),Sk(756,`.`),Kg()()(),Qc(757,`tr`,46)(758,`td`,17)(759,`div`,18)(760,`span`,19),Sk(761,` p-min-date`),vu(762,`br`),Kg()()(),Qc(763,`td`,20)(764,`code`,30),Sk(765,`string `),Kg(),Qc(766,`code`,44),Sk(767,` Date`),Kg()(),Qc(768,`td`,22),Sk(769,`-`),Kg(),Qc(770,`td`,23)(771,`em`)(772,`strong`),Sk(773,`(opcional)`),Kg()(),Qc(774,`p`),Sk(775,`Define uma data mínima para o `),Qc(776,`code`),Sk(777,`po-datetimepicker`),Kg(),Sk(778,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),Kg(),Qc(779,`p`),Sk(780,`Aceita os formatos:`),Kg(),Qc(781,`ul`)(782,`li`)(783,`code`),Sk(784,`Date`),Kg(),Sk(785,` object: `),Qc(786,`code`),Sk(787,`new Date(2026, 0, 1)`),Kg()(),Qc(788,`li`),Sk(789,`ISO string: `),Qc(790,`code`),Sk(791,`'2026-01-01'`),Kg()(),Qc(792,`li`),Sk(793,`ISO com hora: `),Qc(794,`code`),Sk(795,`'2026-01-01T00:00:00-03:00'`),Kg()()()()(),Qc(796,`tr`,47)(797,`td`,17)(798,`div`,18)(799,`span`,19),Sk(800,` p-min-time`),vu(801,`br`),Kg()()(),Qc(802,`td`,20)(803,`code`,30),Sk(804,`string`),Kg()(),Qc(805,`td`,22),Sk(806,`-`),Kg(),Qc(807,`td`,23)(808,`em`)(809,`strong`),Sk(810,`(opcional)`),Kg()(),Qc(811,`p`),Sk(812,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),Kg(),Qc(813,`p`),Sk(814,`Formato aceito: `),Qc(815,`code`),Sk(816,`HH:mm`),Kg(),Sk(817,` ou `),Qc(818,`code`),Sk(819,`HH:mm:ss`),Kg(),Sk(820,`.`),Kg()()(),Qc(821,`tr`,48)(822,`td`,17)(823,`div`,18)(824,`span`,19),Sk(825,` p-minute-interval`),vu(826,`br`),Kg()()(),Qc(827,`td`,20)(828,`code`,49),Sk(829,`number`),Kg()(),Qc(830,`td`,22)(831,`p`)(832,`code`),Sk(833,`5`),Kg()()(),Qc(834,`td`,23)(835,`em`)(836,`strong`),Sk(837,`(opcional)`),Kg()(),Qc(838,`p`),Sk(839,`Define o intervalo entre os minutos exibidos no painel do timer.`),Kg()()(),Qc(840,`tr`,50)(841,`td`,17)(842,`div`,18)(843,`span`,19),Sk(844,` name`),vu(845,`br`),Kg()()(),Qc(846,`td`,20)(847,`code`,30),Sk(848,`string`),Kg()(),Qc(849,`td`,22),Sk(850,`-`),Kg(),Qc(851,`td`,23)(852,`em`)(853,`strong`),Sk(854,`(opcional)`),Kg()(),Qc(855,`p`),Sk(856,`Nome do componente.`),Kg()()(),Qc(857,`tr`,51)(858,`td`,17)(859,`div`,18)(860,`span`,19),Sk(861,` p-no-autocomplete`),vu(862,`br`),Kg()()(),Qc(863,`td`,20)(864,`code`,21),Sk(865,`boolean `),Kg(),Qc(866,`code`,30),Sk(867,` string`),Kg()(),Qc(868,`td`,22)(869,`p`)(870,`code`),Sk(871,`false`),Kg()()(),Qc(872,`td`,23)(873,`em`)(874,`strong`),Sk(875,`(opcional)`),Kg()(),Qc(876,`p`),Sk(877,`Define a propriedade nativa `),Qc(878,`code`),Sk(879,`autocomplete`),Kg(),Sk(880,` do campo como `),Qc(881,`code`),Sk(882,`off`),Kg(),Sk(883,`.`),Kg()()(),Qc(884,`tr`,52)(885,`td`,17)(886,`div`,26)(887,`span`,27),Sk(888,` (p-blur)`),vu(889,`br`),Kg()()(),Qc(890,`td`,20)(891,`code`,28),Sk(892,`EventEmitter`),Kg()(),Qc(893,`td`,22),Sk(894,`-`),Kg(),Qc(895,`td`,23)(896,`em`)(897,`strong`),Sk(898,`(opcional)`),Kg()(),Qc(899,`p`),Sk(900,`Evento disparado ao sair do campo (blur).`),Kg()()(),Qc(901,`tr`,53)(902,`td`,17)(903,`div`,26)(904,`span`,27),Sk(905,` (p-change)`),vu(906,`br`),Kg()()(),Qc(907,`td`,20)(908,`code`,28),Sk(909,`EventEmitter`),Kg()(),Qc(910,`td`,22),Sk(911,`-`),Kg(),Qc(912,`td`,23)(913,`em`)(914,`strong`),Sk(915,`(opcional)`),Kg()(),Qc(916,`p`),Sk(917,`Evento disparado ao alterar valor do campo.`),Kg()()(),Qc(918,`tr`,54)(919,`td`,17)(920,`div`,18)(921,`span`,19),Sk(922,` p-optional`),vu(923,`br`),Kg()()(),Qc(924,`td`,20)(925,`code`,21),Sk(926,`boolean`),Kg()(),Qc(927,`td`,22)(928,`p`)(929,`code`),Sk(930,`false`),Kg()()(),Qc(931,`td`,23)(932,`em`)(933,`strong`),Sk(934,`(opcional)`),Kg()(),Qc(935,`p`),Sk(936,`Define se a indicação de campo opcional será exibida.`),Kg()()(),Qc(937,`tr`,55)(938,`td`,17)(939,`div`,18)(940,`span`,19),Sk(941,` p-placeholder`),vu(942,`br`),Kg()()(),Qc(943,`td`,20)(944,`code`,30),Sk(945,`string`),Kg()(),Qc(946,`td`,22),Sk(947,`-`),Kg(),Qc(948,`td`,23)(949,`em`)(950,`strong`),Sk(951,`(opcional)`),Kg()(),Qc(952,`p`),Sk(953,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Qc(954,`tr`,56)(955,`td`,17)(956,`div`,18)(957,`span`,19),Sk(958,` p-helper`),vu(959,`br`),Kg()()(),Qc(960,`td`,20)(961,`code`,57),Sk(962,`PoHelperOptions `),Kg(),Qc(963,`code`,30),Sk(964,` string`),Kg()(),Qc(965,`td`,22),Sk(966,`-`),Kg(),Qc(967,`td`,23)(968,`em`)(969,`strong`),Sk(970,`(opcional)`),Kg()(),Qc(971,`p`),Sk(972,`Define as opções do componente de ajuda (po-helper).`),Kg(),Qc(973,`blockquote`)(974,`p`),Sk(975,`Para mais informações acesse: `),Qc(976,`a`,58),Sk(977,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(978,`.`),Kg()()()(),Qc(979,`tr`,59)(980,`td`,17)(981,`div`,18)(982,`span`,19),Sk(983,` p-readonly`),vu(984,`br`),Kg()()(),Qc(985,`td`,20)(986,`code`,21),Sk(987,`boolean `),Kg(),Qc(988,`code`,30),Sk(989,` string`),Kg()(),Qc(990,`td`,22)(991,`p`)(992,`code`),Sk(993,`false`),Kg()()(),Qc(994,`td`,23)(995,`em`)(996,`strong`),Sk(997,`(opcional)`),Kg()(),Qc(998,`p`),Sk(999,`Torna o componente somente leitura.`),Kg()()(),Qc(1e3,`tr`,60)(1001,`td`,17)(1002,`div`,18)(1003,`span`,19),Sk(1004,` p-required`),vu(1005,`br`),Kg()()(),Qc(1006,`td`,20)(1007,`code`,21),Sk(1008,`boolean `),Kg(),Qc(1009,`code`,30),Sk(1010,` string`),Kg()(),Qc(1011,`td`,22)(1012,`p`)(1013,`code`),Sk(1014,`false`),Kg()()(),Qc(1015,`td`,23)(1016,`em`)(1017,`strong`),Sk(1018,`(opcional)`),Kg()(),Qc(1019,`p`),Sk(1020,`Define que o campo será obrigatório.`),Kg()()(),Qc(1021,`tr`,61)(1022,`td`,17)(1023,`div`,18)(1024,`span`,19),Sk(1025,` p-second-interval`),vu(1026,`br`),Kg()()(),Qc(1027,`td`,20)(1028,`code`,49),Sk(1029,`number`),Kg()(),Qc(1030,`td`,22)(1031,`p`)(1032,`code`),Sk(1033,`1`),Kg()()(),Qc(1034,`td`,23)(1035,`em`)(1036,`strong`),Sk(1037,`(opcional)`),Kg()(),Qc(1038,`p`),Sk(1039,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Qc(1040,`code`),Sk(1041,`p-show-seconds`),Kg(),Sk(1042,` está ativo.`),Kg()()(),Qc(1043,`tr`,62)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),Sk(1047,` p-required-field-error-message`),vu(1048,`br`),Kg()()(),Qc(1049,`td`,20)(1050,`code`,21),Sk(1051,`boolean`),Kg()(),Qc(1052,`td`,22)(1053,`p`)(1054,`code`),Sk(1055,`false`),Kg()()(),Qc(1056,`td`,23)(1057,`em`)(1058,`strong`),Sk(1059,`(opcional)`),Kg()(),Qc(1060,`p`),Sk(1061,`Exibe a mensagem setada na propriedade `),Qc(1062,`code`),Sk(1063,`p-error-pattern`),Kg(),Sk(1064,` se o campo estiver vazio e for requerido.`),Kg(),Qc(1065,`blockquote`)(1066,`p`),Sk(1067,`Necessário que a propriedade `),Qc(1068,`code`),Sk(1069,`p-required`),Kg(),Sk(1070,` esteja habilitada.`),Kg()()()(),Qc(1071,`tr`,63)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),Sk(1075,` p-show-required`),vu(1076,`br`),Kg()()(),Qc(1077,`td`,20)(1078,`code`,21),Sk(1079,`boolean`),Kg()(),Qc(1080,`td`,22)(1081,`p`)(1082,`code`),Sk(1083,`false`),Kg()()(),Qc(1084,`td`,23)(1085,`em`)(1086,`strong`),Sk(1087,`(opcional)`),Kg()(),Qc(1088,`p`),Sk(1089,`Define se a indicação de campo obrigatório será exibida.`),Kg()()(),Qc(1090,`tr`,64)(1091,`td`,17)(1092,`div`,18)(1093,`span`,19),Sk(1094,` p-show-seconds`),vu(1095,`br`),Kg()()(),Qc(1096,`td`,20)(1097,`code`,21),Sk(1098,`boolean`),Kg()(),Qc(1099,`td`,22)(1100,`p`)(1101,`code`),Sk(1102,`false`),Kg()()(),Qc(1103,`td`,23)(1104,`em`)(1105,`strong`),Sk(1106,`(opcional)`),Kg()(),Qc(1107,`p`),Sk(1108,`Exibe a coluna de segundos no painel de seleção do timer.`),Kg()()(),Qc(1109,`tr`,65)(1110,`td`,17)(1111,`div`,18)(1112,`span`,19),Sk(1113,` p-size`),vu(1114,`br`),Kg()()(),Qc(1115,`td`,20)(1116,`code`,30),Sk(1117,`string`),Kg()(),Qc(1118,`td`,22)(1119,`p`)(1120,`code`),Sk(1121,`medium`),Kg()()(),Qc(1122,`td`,23)(1123,`em`)(1124,`strong`),Sk(1125,`(opcional)`),Kg()(),Qc(1126,`p`),Sk(1127,`Define o tamanho do componente:`),Kg(),Qc(1128,`ul`)(1129,`li`)(1130,`code`),Sk(1131,`small`),Kg(),Sk(1132,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1133,`li`)(1134,`code`),Sk(1135,`medium`),Kg(),Sk(1136,`: altura do input como 44px.`),Kg()()()(),Qc(1137,`tr`,66)(1138,`td`,17)(1139,`div`,18)(1140,`span`,19),Sk(1141,` p-format-time`),vu(1142,`br`),Kg()()(),Qc(1143,`td`,20)(1144,`code`,67),Sk(1145,`PoTimerFormat`),Kg()(),Qc(1146,`td`,22)(1147,`p`),Sk(1148,`Determinado pelo locale`),Kg()(),Qc(1149,`td`,23)(1150,`em`)(1151,`strong`),Sk(1152,`(opcional)`),Kg()(),Qc(1153,`p`),Sk(1154,`Define o formato de exibição do timer.`),Kg(),Qc(1155,`p`),Sk(1156,`Valores válidos:`),Kg(),Qc(1157,`ul`)(1158,`li`)(1159,`code`),Sk(1160,`24`),Kg(),Sk(1161,`: formato de 24 horas (padrão para pt, es, ru)`),Kg(),Qc(1162,`li`)(1163,`code`),Sk(1164,`12`),Kg(),Sk(1165,`: formato de 12 horas com indicador AM/PM (padrão para en)`),Kg()(),Qc(1166,`p`),Sk(1167,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Kg(),Qc(1168,`ul`)(1169,`li`)(1170,`code`),Sk(1171,`en`),Kg(),Sk(1172,` → 12h (AM/PM)`),Kg(),Qc(1173,`li`)(1174,`code`),Sk(1175,`pt`),Kg(),Sk(1176,`, `),Qc(1177,`code`),Sk(1178,`es`),Kg(),Sk(1179,`, `),Qc(1180,`code`),Sk(1181,`ru`),Kg(),Sk(1182,` → 24h`),Kg()()()()(),Qc(1183,`h3`,12),Sk(1184,`Métodos`),Kg(),Qc(1185,`table`,68)(1186,`tr`,69)(1187,`th`,70)(1188,`div`,18)(1189,`h4`)(1190,`span`,19),Sk(1191,` showAdditionalHelp `),Kg()()()()(),Qc(1192,`tr`,23)(1193,`td`,23)(1194,`p`),Sk(1195,`Método que exibe `),Qc(1196,`code`),Sk(1197,`p-helper`),Kg(),Sk(1198,` ou executa a ação definida em `),Qc(1199,`code`),Sk(1200,`p-helper{eventOnClick}`),Kg(),Sk(1201,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1202,`code`),Sk(1203,`p-keydown`),Kg(),Sk(1204,`.`),Kg(),Qc(1205,`blockquote`)(1206,`p`),Sk(1207,`Exibe ou oculta o conteúdo do componente `),Qc(1208,`code`),Sk(1209,`po-helper`),Kg(),Sk(1210,` quando o componente estiver com foco.`),Kg()(),Qc(1211,`pre`)(1212,`code`),Sk(1213,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),Kg()(),Qc(1214,`pre`)(1215,`code`),Sk(1216,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1217,`br`),Kg())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Le(l,Oe){if(l&1&&(Qc(0,`div`,1),vu(1,`sample-po-datetimepicker-basic-view`)(2,`sample-po-datetimepicker-labs-view`)(3,`sample-po-datetimepicker-12h-seconds-view`)(4,`sample-po-datetimepicker-scheduling-view`),Kg()),l&2){let p=ek();Rb(`hidden`,p.activeTab!==`web`)}}var qe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Datetimepicker`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Datetimepicker · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0),FO(1,Le,5,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-datetimepicker-doc`),Kg()()),r&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,ue,Se,he,be],encapsulation:2,changeDetection:1})}return l})()}];var fe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[GV.forChild(qe),GV]})}return l})();var Et=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[M,fe]})}return l})();export{Et as DocPoDatetimepickerModule};