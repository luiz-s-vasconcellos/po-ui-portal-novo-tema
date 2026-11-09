import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Nt as bP,On as sie,Ot as Zte,P as Joe,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Ut as cne,Vi as _u,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jn as tie,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,i){r&1&&_u(0,`po-datetimepicker`,0)},dependencies:[bP],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ge],encapsulation:2,changeDetection:1})}return l})();var he=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=ZO();Jc(0,`po-datetimepicker`,1),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.datetimepicker,o)||(i.datetimepicker=o),H_(o)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.label,o)||(i.label=o),H_(o)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.help,o)||(i.help=o),H_(o)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.helperText,o)||(i.helperText=o),H_(o)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.placeholder,o)||(i.placeholder=o),H_(o)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.errorPattern,o)||(i.errorPattern=o),H_(o)}),Zg(),Jc(13,`po-number`,10),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.minuteInterval,o)||(i.minuteInterval=o),H_(o)}),Zg(),Jc(14,`po-number`,11),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.secondInterval,o)||(i.secondInterval=o),H_(o)}),Zg(),Jc(15,`po-timepicker`,12),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.minTime,o)||(i.minTime=o),H_(o)}),Zg(),Jc(16,`po-timepicker`,13),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.maxTime,o)||(i.maxTime=o),H_(o)}),Zg(),Jc(17,`po-datepicker`,14),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.minDate,o)||(i.minDate=o),H_(o)}),Zg(),Jc(18,`po-datepicker`,15),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.maxDate,o)||(i.maxDate=o),H_(o)}),Zg(),Jc(19,`po-checkbox-group`,16),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.properties,o)||(i.properties=o),H_(o)}),Zg(),Jc(20,`po-radio-group`,17),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.locale,o)||(i.locale=o),H_(o)}),Zg(),Jc(21,`po-radio-group`,18),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.formatDate,o)||(i.formatDate=o),H_(o)}),Zg(),Jc(22,`po-radio-group`,19),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.formatTime,o)||(i.formatTime=o),H_(o)}),Zg(),Jc(23,`po-radio-group`,20),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.size,o)||(i.size=o),H_(o)}),Zg(),Jc(24,`div`,2)(25,`po-button`,21),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Yb(`ngModel`,i.datetimepicker),Rb(`p-clean`,i.properties.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-error-pattern`,i.errorPattern)(`p-format-date`,i.formatDate)(`p-format-time`,i.formatTime)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-max-date`,i.maxDate)(`p-max-time`,i.maxTime)(`p-min-date`,i.minDate)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,i.secondInterval)(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-size`,i.size),Y0(),Ig(3),Rb(`p-value`,i.datetimepicker),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.errorPattern),Y0(),Ig(),Yb(`ngModel`,i.minuteInterval),Y0(),Ig(),Yb(`ngModel`,i.secondInterval),Y0(),Ig(),Yb(`ngModel`,i.minTime),Y0(),Ig(),Yb(`ngModel`,i.maxTime),Y0(),Ig(),Yb(`ngModel`,i.minDate),Rb(`p-max-date`,i.maxDate),Y0(),Ig(),Yb(`ngModel`,i.maxDate),Rb(`p-min-date`,i.minDate),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.locale),Rb(`p-options`,i.localeOptions),Y0(),Ig(),Yb(`ngModel`,i.formatDate),Rb(`p-options`,i.formatDateOptions),Y0(),Ig(),Yb(`ngModel`,i.formatTime),Rb(`p-options`,i.formatTimeOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,tie,bP,j4,Goe,Zte,cne,Joe],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datetimepicker
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,i){r&1&&(Jc(0,`po-datetimepicker`,0),W0(),Kb(`ngModelChange`,function(s){return Ak(i.datetime,s)||(i.datetime=s),s}),Zg()),r&2&&(Yb(`ngModel`,i.datetime),Y0())},dependencies:[TZ,JL,bP],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker - 12h with Seconds`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-12h-seconds`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return l})();var We=[`formScheduling`];var Ce=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Cu(We,7),r&2){let d;No(d=xo())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let d=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.patient,o)||(i.patient=o),H_(o)}),Zg(),Jc(4,`po-input`,3),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.doctor,o)||(i.doctor=o),H_(o)}),Zg()(),Jc(5,`div`,1)(6,`po-select`,4),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.specialty,o)||(i.specialty=o),H_(o)}),Zg(),Jc(7,`po-datetimepicker`,5),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.appointment,o)||(i.appointment=o),H_(o)}),Zg()(),Jc(8,`div`,1)(9,`po-button`,6),vt(`p-click`,function(){return i.confirm()}),Zg()()()}if(r&2){let d=sk(1);Ig(3),Yb(`ngModel`,i.patient),Y0(),Ig(),Yb(`ngModel`,i.doctor),Y0(),Ig(2),Yb(`ngModel`,i.specialty),Rb(`p-options`,i.specialtyOptions),Y0(),Ig(),Yb(`ngModel`,i.appointment),Y0(),Ig(2),Rb(`p-disabled`,d.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,bP,j4,Koe],encapsulation:2,changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker - Scheduling`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formScheduling="ngForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { UntypedFormControl } from '@angular/forms';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-scheduling`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return l})();var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoDatetimepickerComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-datetimepicker`),Zg(),Tk(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),Zg(),Jc(27,`p`),Tk(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Jc(29,`code`),Tk(30,`p-format-date`),Zg(),Tk(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Jc(32,`code`),Tk(33,`p-format-time`),Zg(),Tk(34,`.`),Zg(),Jc(35,`p`),Tk(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Jc(37,`code`),Tk(38,`p-locale`),Zg(),Tk(39,`.`),Zg(),Jc(40,`p`),Tk(41,`O componente aceita os seguintes formatos de entrada:`),Zg(),Jc(42,`ul`)(43,`li`),Tk(44,`ISO 8601 com timezone: `),Jc(45,`code`),Tk(46,`'2026-05-12T14:30:00-03:00'`),Zg()(),Jc(47,`li`),Tk(48,`ISO 8601 UTC: `),Jc(49,`code`),Tk(50,`'2026-05-12T14:30:00Z'`),Zg()(),Jc(51,`li`),Tk(52,`ISO 8601 sem timezone: `),Jc(53,`code`),Tk(54,`'2026-05-12T14:30:00'`),Zg()(),Jc(55,`li`),Tk(56,`ISO 8601 apenas data: `),Jc(57,`code`),Tk(58,`'2026-05-12'`),Zg()(),Jc(59,`li`),Tk(60,`JavaScript Date Object: `),Jc(61,`code`),Tk(62,`new Date(2026, 4, 12, 14, 30)`),Zg()()(),Jc(63,`p`),Tk(64,`O formato de saída do `),Jc(65,`em`),Tk(66,`model`),Zg(),Tk(67,` é sempre ISO 8601 com timezone local: `),Jc(68,`code`),Tk(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),Zg(),Tk(70,`
(ou `),Jc(71,`code`),Tk(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),Zg(),Tk(73,` quando `),Jc(74,`code`),Tk(75,`p-show-seconds`),Zg(),Tk(76,` está ativo).`),Zg(),Jc(77,`p`)(78,`strong`),Tk(79,`Importante:`),Zg()(),Jc(80,`ul`)(81,`li`),Tk(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),Zg(),Jc(83,`li`),Tk(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),Zg(),Jc(85,`li`),Tk(86,`Caso a data/hora esteja inválida, o `),Jc(87,`code`),Tk(88,`model`),Zg(),Tk(89,` receberá a mensagem de erro localizada.`),Zg(),Jc(90,`li`),Tk(91,`Datas no formato ISO (ex.: `),Jc(92,`code`),Tk(93,`'0050-05-10'`),Zg(),Tk(94,`) com ano inferior a 100 são mantidas. Ao informar um objeto `),Jc(95,`code`),Tk(96,`Date`),Zg(),Tk(97,`
com ano inferior a 100, utilize o m\xE9todo `),Jc(98,`a`,6)(99,`code`),Tk(100,`setFullYear`),Zg()(),Tk(101,`,
pois o `),Jc(102,`a`,7)(103,`code`),Tk(104,`new Date`),Zg()(),Tk(105,` converte esses anos para 19XX.`),Zg(),Jc(106,`li`),Tk(107,`Caso o `),Jc(108,`code`),Tk(109,`input`),Zg(),Tk(110,` esteja passando um `),Jc(111,`code`),Tk(112,`[(ngModel)]`),Zg(),Tk(113,`, mas não tenha um `),Jc(114,`code`),Tk(115,`name`),Zg(),Tk(116,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Jc(117,`code`),Tk(118,`[ngModelOptions]="{standalone: true}"`),Zg(),Tk(119,`).`),Zg()(),Jc(120,`p`),Tk(121,`Exemplo:`),Zg(),Jc(122,`pre`)(123,`code`),Tk(124,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),Zg()(),Jc(125,`blockquote`)(126,`p`),Tk(127,`Não esqueça de importar o `),Jc(128,`code`),Tk(129,`FormsModule`),Zg(),Tk(130,` em seu módulo, tal como para utilizar o `),Jc(131,`code`),Tk(132,`input default`),Zg(),Tk(133,`.`),Zg()(),Jc(134,`h4`),Tk(135,`Tokens customizáveis`),Zg(),Jc(136,`p`),Tk(137,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(138,`br`),Tk(139,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(140,`code`),Tk(141,`.po-input`),Zg()(),Jc(142,`blockquote`)(143,`p`),Tk(144,`Para maiores informações, acesse o guia `),Jc(145,`a`,8),Tk(146,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(147,`.`),Zg()(),Jc(148,`table`)(149,`thead`)(150,`tr`)(151,`th`),Tk(152,`Propriedade`),Zg(),Jc(153,`th`),Tk(154,`Descrição`),Zg(),Jc(155,`th`),Tk(156,`Valor Padrão`),Zg()()(),Jc(157,`tbody`)(158,`tr`)(159,`td`)(160,`strong`),Tk(161,`Default Values`),Zg()(),_u(162,`td`)(163,`td`),Zg(),Jc(164,`tr`)(165,`td`)(166,`code`),Tk(167,`--font-family`),Zg()(),Jc(168,`td`),Tk(169,`Família tipográfica usada`),Zg(),Jc(170,`td`)(171,`code`),Tk(172,`var(--font-family-theme)`),Zg()()(),Jc(173,`tr`)(174,`td`)(175,`code`),Tk(176,`--font-size`),Zg()(),Jc(177,`td`),Tk(178,`Tamanho da fonte`),Zg(),Jc(179,`td`)(180,`code`),Tk(181,`var(--font-size-default)`),Zg()()(),Jc(182,`tr`)(183,`td`)(184,`code`),Tk(185,`--text-color-placeholder`),Zg(),Tk(186,` \xA0`),Zg(),Jc(187,`td`),Tk(188,`Cor principal do texto do placeholder`),Zg(),Jc(189,`td`)(190,`code`),Tk(191,`var(--color-neutral-light-30)`),Zg()()(),Jc(192,`tr`)(193,`td`)(194,`code`),Tk(195,`--color`),Zg()(),Jc(196,`td`),Tk(197,`Cor principal do datetimepicker`),Zg(),Jc(198,`td`)(199,`code`),Tk(200,`var(--color-neutral-dark-70)`),Zg()()(),Jc(201,`tr`)(202,`td`)(203,`code`),Tk(204,`--background`),Zg()(),Jc(205,`td`),Tk(206,`Cor de background`),Zg(),Jc(207,`td`)(208,`code`),Tk(209,`var(--color-neutral-light-05)`),Zg()()(),Jc(210,`tr`)(211,`td`)(212,`code`),Tk(213,`--padding`),Zg()(),Jc(214,`td`),Tk(215,`Preenchimento`),Zg(),Jc(216,`td`)(217,`code`),Tk(218,`0 0.5rem`),Zg()()(),Jc(219,`tr`)(220,`td`)(221,`code`),Tk(222,`--text-color`),Zg()(),Jc(223,`td`),Tk(224,`Cor do texto`),Zg(),Jc(225,`td`)(226,`code`),Tk(227,`var(--color-neutral-dark-90)`),Zg()()(),Jc(228,`tr`)(229,`td`)(230,`code`),Tk(231,`--field-container-title-justify`),Zg()(),Jc(232,`td`),Tk(233,`Alinhamento horizontal do título (`),Jc(234,`code`),Tk(235,`justify-content`),Zg(),Tk(236,`)`),Zg(),Jc(237,`td`)(238,`code`),Tk(239,`space-between`),Zg()()(),Jc(240,`tr`)(241,`td`)(242,`code`),Tk(243,`--field-container-title-flex`),Zg()(),Jc(244,`td`),Tk(245,`Flex do título (`),Jc(246,`code`),Tk(247,`flex`),Zg(),Tk(248,`)`),Zg(),Jc(249,`td`)(250,`code`),Tk(251,`1 auto`),Zg()()(),Jc(252,`tr`)(253,`td`)(254,`strong`),Tk(255,`Hover`),Zg()(),_u(256,`td`)(257,`td`),Zg(),Jc(258,`tr`)(259,`td`)(260,`code`),Tk(261,`--color-hover`),Zg()(),Jc(262,`td`),Tk(263,`Cor principal no estado hover`),Zg(),Jc(264,`td`)(265,`code`),Tk(266,`var(--color-brand-01-dark)`),Zg()()(),Jc(267,`tr`)(268,`td`)(269,`code`),Tk(270,`--background-hover`),Zg()(),Jc(271,`td`),Tk(272,`Cor de background no estado hover`),Zg(),Jc(273,`td`)(274,`code`),Tk(275,`var(--color-brand-01-lightest)`),Zg()()(),Jc(276,`tr`)(277,`td`)(278,`strong`),Tk(279,`Focused`),Zg()(),_u(280,`td`)(281,`td`),Zg(),Jc(282,`tr`)(283,`td`)(284,`code`),Tk(285,`--color-focused`),Zg()(),Jc(286,`td`),Tk(287,`Cor principal no estado de focus`),Zg(),Jc(288,`td`)(289,`code`),Tk(290,`var(--color-action-default)`),Zg()()(),Jc(291,`tr`)(292,`td`)(293,`code`),Tk(294,`--outline-color-focused`),Zg()(),Jc(295,`td`),Tk(296,`Cor do outline do estado de focus`),Zg(),Jc(297,`td`)(298,`code`),Tk(299,`var(--color-action-focus)`),Zg()()(),Jc(300,`tr`)(301,`td`)(302,`strong`),Tk(303,`Disabled`),Zg()(),_u(304,`td`)(305,`td`),Zg(),Jc(306,`tr`)(307,`td`)(308,`code`),Tk(309,`--color-disabled`),Zg()(),Jc(310,`td`),Tk(311,`Cor principal no estado disabled`),Zg(),Jc(312,`td`)(313,`code`),Tk(314,`var(--color-neutral-light-30)`),Zg()()(),Jc(315,`tr`)(316,`td`)(317,`code`),Tk(318,`--background-disabled`),Zg()(),Jc(319,`td`),Tk(320,`Cor de background no estado disabled \xA0`),Zg(),Jc(321,`td`)(322,`code`),Tk(323,`var(--color-neutral-light-20)`),Zg()()(),Jc(324,`tr`)(325,`td`)(326,`code`),Tk(327,`--text-color-disabled`),Zg()(),Jc(328,`td`),Tk(329,`Cor do texto no estado disabled`),Zg(),Jc(330,`td`)(331,`code`),Tk(332,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(333,`div`,9)(334,`h4`,10),Tk(335,`Seletor`),Zg(),Jc(336,`pre`,11),Tk(337,`<po-datetimepicker
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
`),Zg()(),Jc(338,`h4`,12),Tk(339,`Propriedades`),Zg(),Jc(340,`table`,13)(341,`tr`,14)(342,`th`,15),Tk(343,`Nome`),Zg(),Jc(344,`th`,15),Tk(345,`Tipo`),Zg(),Jc(346,`th`,15),Tk(347,`Padrão`),Zg(),Jc(348,`th`,15),Tk(349,`Descrição`),Zg()(),Jc(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),Tk(354,` p-append-in-body`),_u(355,`br`),Zg()()(),Jc(356,`td`,20)(357,`code`,21),Tk(358,`boolean`),Zg()(),Jc(359,`td`,22)(360,`p`)(361,`code`),Tk(362,`false`),Zg()()(),Jc(363,`td`,23)(364,`em`)(365,`strong`),Tk(366,`(opcional)`),Zg()(),Jc(367,`p`),Tk(368,`Define que o `),Jc(369,`code`),Tk(370,`calendar`),Zg(),Tk(371,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),Zg()()(),Jc(372,`tr`,16)(373,`td`,17)(374,`div`,18)(375,`span`,19),Tk(376,` p-auto-focus`),_u(377,`br`),Zg()()(),Jc(378,`td`,20)(379,`code`,21),Tk(380,`boolean`),Zg()(),Jc(381,`td`,22)(382,`p`)(383,`code`),Tk(384,`false`),Zg()()(),Jc(385,`td`,23)(386,`em`)(387,`strong`),Tk(388,`(opcional)`),Zg()(),Jc(389,`p`),Tk(390,`Aplica foco no elemento ao ser iniciado.`),Zg()()(),Jc(391,`tr`,16)(392,`td`,17)(393,`div`,24)(394,`span`,25),Tk(395,` (p-change-model)`),_u(396,`br`),Zg()()(),Jc(397,`td`,20)(398,`code`,26),Tk(399,`EventEmitter`),Zg()(),Jc(400,`td`,22),Tk(401,`-`),Zg(),Jc(402,`td`,23)(403,`em`)(404,`strong`),Tk(405,`(opcional)`),Zg()(),Jc(406,`p`),Tk(407,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(408,`code`),Tk(409,`setValue`),Zg(),Tk(410,`, `),Jc(411,`code`),Tk(412,`patchValue`),Zg(),Tk(413,`, carregamento assíncrono).`),Zg(),Jc(414,`p`),Tk(415,`Diferentemente do `),Jc(416,`code`),Tk(417,`p-change`),Zg(),Tk(418,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(419,`code`),Tk(420,`p-change-model`),Zg(),Tk(421,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(422,`p`),Tk(423,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(424,`tr`,16)(425,`td`,17)(426,`div`,18)(427,`span`,19),Tk(428,` p-clean`),_u(429,`br`),Zg()()(),Jc(430,`td`,20)(431,`code`,21),Tk(432,`boolean `),Zg(),Jc(433,`code`,27),Tk(434,` string`),Zg()(),Jc(435,`td`,22)(436,`p`)(437,`code`),Tk(438,`false`),Zg()()(),Jc(439,`td`,23)(440,`em`)(441,`strong`),Tk(442,`(opcional)`),Zg()(),Jc(443,`p`),Tk(444,`Habilita ação para limpar o campo.`),Zg()()(),Jc(445,`tr`,16)(446,`td`,17)(447,`div`,18)(448,`span`,19),Tk(449,` p-compact-label`),_u(450,`br`),Zg()()(),Jc(451,`td`,20)(452,`code`,21),Tk(453,`boolean`),Zg()(),Jc(454,`td`,22)(455,`p`)(456,`code`),Tk(457,`false`),Zg()()(),Jc(458,`td`,23)(459,`em`)(460,`strong`),Tk(461,`(opcional)`),Zg()(),Jc(462,`p`),Tk(463,`Define se o título do campo será exibido de forma compacta.`),Zg()()(),Jc(464,`tr`,16)(465,`td`,17)(466,`div`,18)(467,`span`,19),Tk(468,` p-format-date`),_u(469,`br`),Zg()()(),Jc(470,`td`,20)(471,`code`,27),Tk(472,`string`),Zg()(),Jc(473,`td`,22)(474,`p`),Tk(475,`Determinado pelo locale`),Zg()(),Jc(476,`td`,23)(477,`em`)(478,`strong`),Tk(479,`(opcional)`),Zg()(),Jc(480,`p`),Tk(481,`Define o formato de exibição da data.`),Zg(),Jc(482,`p`),Tk(483,`Valores válidos:`),Zg(),Jc(484,`ul`)(485,`li`)(486,`code`),Tk(487,`dd/mm/yyyy`),Zg()(),Jc(488,`li`)(489,`code`),Tk(490,`mm/dd/yyyy`),Zg()(),Jc(491,`li`)(492,`code`),Tk(493,`yyyy/mm/dd`),Zg()()(),Jc(494,`p`),Tk(495,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Zg(),Jc(496,`ul`)(497,`li`)(498,`code`),Tk(499,`en`),Zg(),Tk(500,` → `),Jc(501,`code`),Tk(502,`mm/dd/yyyy`),Zg()(),Jc(503,`li`)(504,`code`),Tk(505,`pt`),Zg(),Tk(506,`, `),Jc(507,`code`),Tk(508,`es`),Zg(),Tk(509,`, `),Jc(510,`code`),Tk(511,`ru`),Zg(),Tk(512,` → `),Jc(513,`code`),Tk(514,`dd/mm/yyyy`),Zg()()()()(),Jc(515,`tr`,16)(516,`td`,17)(517,`div`,18)(518,`span`,19),Tk(519,` p-disabled`),_u(520,`br`),Zg()()(),Jc(521,`td`,20)(522,`code`,21),Tk(523,`boolean `),Zg(),Jc(524,`code`,27),Tk(525,` string`),Zg()(),Jc(526,`td`,22)(527,`p`)(528,`code`),Tk(529,`false`),Zg()()(),Jc(530,`td`,23)(531,`em`)(532,`strong`),Tk(533,`(opcional)`),Zg()(),Jc(534,`p`),Tk(535,`Desabilita o campo.`),Zg()()(),Jc(536,`tr`,16)(537,`td`,17)(538,`div`,18)(539,`span`,19),Tk(540,` p-error-limit`),_u(541,`br`),Zg()()(),Jc(542,`td`,20)(543,`code`,21),Tk(544,`boolean`),Zg()(),Jc(545,`td`,22)(546,`p`)(547,`code`),Tk(548,`false`),Zg()()(),Jc(549,`td`,23)(550,`em`)(551,`strong`),Tk(552,`(opcional)`),Zg()(),Jc(553,`p`),Tk(554,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg()()(),Jc(555,`tr`,16)(556,`td`,17)(557,`div`,18)(558,`span`,19),Tk(559,` p-error-pattern`),_u(560,`br`),Zg()()(),Jc(561,`td`,20)(562,`code`,27),Tk(563,`string`),Zg()(),Jc(564,`td`,22),Tk(565,`-`),Zg(),Jc(566,`td`,23)(567,`em`)(568,`strong`),Tk(569,`(opcional)`),Zg()(),Jc(570,`p`),Tk(571,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),Zg()()(),Jc(572,`tr`,16)(573,`td`,17)(574,`div`,18)(575,`span`,19),Tk(576,` p-help`),_u(577,`br`),Zg()()(),Jc(578,`td`,20)(579,`code`,27),Tk(580,`string`),Zg()(),Jc(581,`td`,22),Tk(582,`-`),Zg(),Jc(583,`td`,23)(584,`em`)(585,`strong`),Tk(586,`(opcional)`),Zg()(),Jc(587,`p`),Tk(588,`Texto de apoio do campo.`),Zg()()(),Jc(589,`tr`,16)(590,`td`,17)(591,`div`,24)(592,`span`,25),Tk(593,` (p-keydown)`),_u(594,`br`),Zg()()(),Jc(595,`td`,20)(596,`code`,26),Tk(597,`EventEmitter`),Zg()(),Jc(598,`td`,22),Tk(599,`-`),Zg(),Jc(600,`td`,23)(601,`em`)(602,`strong`),Tk(603,`(opcional)`),Zg()(),Jc(604,`p`),Tk(605,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),Zg()()(),Jc(606,`tr`,16)(607,`td`,17)(608,`div`,18)(609,`span`,19),Tk(610,` p-label`),_u(611,`br`),Zg()()(),Jc(612,`td`,20)(613,`code`,27),Tk(614,`string`),Zg()(),Jc(615,`td`,22),Tk(616,`-`),Zg(),Jc(617,`td`,23)(618,`em`)(619,`strong`),Tk(620,`(opcional)`),Zg()(),Jc(621,`p`),Tk(622,`Rótulo do campo.`),Zg()()(),Jc(623,`tr`,16)(624,`td`,17)(625,`div`,18)(626,`span`,19),Tk(627,` p-label-text-wrap`),_u(628,`br`),Zg()()(),Jc(629,`td`,20)(630,`code`,21),Tk(631,`boolean`),Zg()(),Jc(632,`td`,22)(633,`p`)(634,`code`),Tk(635,`false`),Zg()()(),Jc(636,`td`,23)(637,`em`)(638,`strong`),Tk(639,`(opcional)`),Zg()(),Jc(640,`p`),Tk(641,`Habilita a quebra automática do texto da propriedade `),Jc(642,`code`),Tk(643,`p-label`),Zg(),Tk(644,`.`),Zg()()(),Jc(645,`tr`,16)(646,`td`,17)(647,`div`,18)(648,`span`,19),Tk(649,` p-loading`),_u(650,`br`),Zg()()(),Jc(651,`td`,20)(652,`code`,21),Tk(653,`boolean `),Zg(),Jc(654,`code`,27),Tk(655,` string`),Zg()(),Jc(656,`td`,22)(657,`p`)(658,`code`),Tk(659,`false`),Zg()()(),Jc(660,`td`,23)(661,`em`)(662,`strong`),Tk(663,`(opcional)`),Zg()(),Jc(664,`p`),Tk(665,`Exibe um ícone de carregamento no lado direito do campo.`),Zg()()(),Jc(666,`tr`,16)(667,`td`,17)(668,`div`,18)(669,`span`,19),Tk(670,` p-locale`),_u(671,`br`),Zg()()(),Jc(672,`td`,20)(673,`code`,27),Tk(674,`string`),Zg()(),Jc(675,`td`,22),Tk(676,`-`),Zg(),Jc(677,`td`,23)(678,`em`)(679,`strong`),Tk(680,`(opcional)`),Zg()(),Jc(681,`p`),Tk(682,`Idioma do componente.`),Zg(),Jc(683,`blockquote`)(684,`p`),Tk(685,`O locale padrão será recuperado com base no `),Jc(686,`a`,28)(687,`code`),Tk(688,`PoI18nService`),Zg()(),Tk(689,` ou `),Jc(690,`em`),Tk(691,`browser`),Zg(),Tk(692,`.`),Zg()()()(),Jc(693,`tr`,16)(694,`td`,17)(695,`div`,18)(696,`span`,19),Tk(697,` p-max-date`),_u(698,`br`),Zg()()(),Jc(699,`td`,20)(700,`code`,27),Tk(701,`string `),Zg(),Jc(702,`code`,29),Tk(703,` Date`),Zg()(),Jc(704,`td`,22),Tk(705,`-`),Zg(),Jc(706,`td`,23)(707,`em`)(708,`strong`),Tk(709,`(opcional)`),Zg()(),Jc(710,`p`),Tk(711,`Define uma data máxima para o `),Jc(712,`code`),Tk(713,`po-datetimepicker`),Zg(),Tk(714,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),Zg(),Jc(715,`p`),Tk(716,`Aceita os formatos:`),Zg(),Jc(717,`ul`)(718,`li`)(719,`code`),Tk(720,`Date`),Zg(),Tk(721,` object: `),Jc(722,`code`),Tk(723,`new Date(2026, 4, 31)`),Zg()(),Jc(724,`li`),Tk(725,`ISO string: `),Jc(726,`code`),Tk(727,`'2026-05-31'`),Zg()(),Jc(728,`li`),Tk(729,`ISO com hora: `),Jc(730,`code`),Tk(731,`'2026-05-31T23:59:59-03:00'`),Zg()()()()(),Jc(732,`tr`,16)(733,`td`,17)(734,`div`,18)(735,`span`,19),Tk(736,` p-max-time`),_u(737,`br`),Zg()()(),Jc(738,`td`,20)(739,`code`,27),Tk(740,`string`),Zg()(),Jc(741,`td`,22),Tk(742,`-`),Zg(),Jc(743,`td`,23)(744,`em`)(745,`strong`),Tk(746,`(opcional)`),Zg()(),Jc(747,`p`),Tk(748,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),Zg(),Jc(749,`p`),Tk(750,`Formato aceito: `),Jc(751,`code`),Tk(752,`HH:mm`),Zg(),Tk(753,` ou `),Jc(754,`code`),Tk(755,`HH:mm:ss`),Zg(),Tk(756,`.`),Zg()()(),Jc(757,`tr`,16)(758,`td`,17)(759,`div`,18)(760,`span`,19),Tk(761,` p-min-date`),_u(762,`br`),Zg()()(),Jc(763,`td`,20)(764,`code`,27),Tk(765,`string `),Zg(),Jc(766,`code`,29),Tk(767,` Date`),Zg()(),Jc(768,`td`,22),Tk(769,`-`),Zg(),Jc(770,`td`,23)(771,`em`)(772,`strong`),Tk(773,`(opcional)`),Zg()(),Jc(774,`p`),Tk(775,`Define uma data mínima para o `),Jc(776,`code`),Tk(777,`po-datetimepicker`),Zg(),Tk(778,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),Zg(),Jc(779,`p`),Tk(780,`Aceita os formatos:`),Zg(),Jc(781,`ul`)(782,`li`)(783,`code`),Tk(784,`Date`),Zg(),Tk(785,` object: `),Jc(786,`code`),Tk(787,`new Date(2026, 0, 1)`),Zg()(),Jc(788,`li`),Tk(789,`ISO string: `),Jc(790,`code`),Tk(791,`'2026-01-01'`),Zg()(),Jc(792,`li`),Tk(793,`ISO com hora: `),Jc(794,`code`),Tk(795,`'2026-01-01T00:00:00-03:00'`),Zg()()()()(),Jc(796,`tr`,16)(797,`td`,17)(798,`div`,18)(799,`span`,19),Tk(800,` p-min-time`),_u(801,`br`),Zg()()(),Jc(802,`td`,20)(803,`code`,27),Tk(804,`string`),Zg()(),Jc(805,`td`,22),Tk(806,`-`),Zg(),Jc(807,`td`,23)(808,`em`)(809,`strong`),Tk(810,`(opcional)`),Zg()(),Jc(811,`p`),Tk(812,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),Zg(),Jc(813,`p`),Tk(814,`Formato aceito: `),Jc(815,`code`),Tk(816,`HH:mm`),Zg(),Tk(817,` ou `),Jc(818,`code`),Tk(819,`HH:mm:ss`),Zg(),Tk(820,`.`),Zg()()(),Jc(821,`tr`,16)(822,`td`,17)(823,`div`,18)(824,`span`,19),Tk(825,` p-minute-interval`),_u(826,`br`),Zg()()(),Jc(827,`td`,20)(828,`code`,30),Tk(829,`number`),Zg()(),Jc(830,`td`,22)(831,`p`)(832,`code`),Tk(833,`5`),Zg()()(),Jc(834,`td`,23)(835,`em`)(836,`strong`),Tk(837,`(opcional)`),Zg()(),Jc(838,`p`),Tk(839,`Define o intervalo entre os minutos exibidos no painel do timer.`),Zg()()(),Jc(840,`tr`,16)(841,`td`,17)(842,`div`,18)(843,`span`,19),Tk(844,` name`),_u(845,`br`),Zg()()(),Jc(846,`td`,20)(847,`code`,27),Tk(848,`string`),Zg()(),Jc(849,`td`,22),Tk(850,`-`),Zg(),Jc(851,`td`,23)(852,`em`)(853,`strong`),Tk(854,`(opcional)`),Zg()(),Jc(855,`p`),Tk(856,`Nome do componente.`),Zg()()(),Jc(857,`tr`,16)(858,`td`,17)(859,`div`,18)(860,`span`,19),Tk(861,` p-no-autocomplete`),_u(862,`br`),Zg()()(),Jc(863,`td`,20)(864,`code`,21),Tk(865,`boolean `),Zg(),Jc(866,`code`,27),Tk(867,` string`),Zg()(),Jc(868,`td`,22)(869,`p`)(870,`code`),Tk(871,`false`),Zg()()(),Jc(872,`td`,23)(873,`em`)(874,`strong`),Tk(875,`(opcional)`),Zg()(),Jc(876,`p`),Tk(877,`Define a propriedade nativa `),Jc(878,`code`),Tk(879,`autocomplete`),Zg(),Tk(880,` do campo como `),Jc(881,`code`),Tk(882,`off`),Zg(),Tk(883,`.`),Zg()()(),Jc(884,`tr`,16)(885,`td`,17)(886,`div`,24)(887,`span`,25),Tk(888,` (p-blur)`),_u(889,`br`),Zg()()(),Jc(890,`td`,20)(891,`code`,26),Tk(892,`EventEmitter`),Zg()(),Jc(893,`td`,22),Tk(894,`-`),Zg(),Jc(895,`td`,23)(896,`em`)(897,`strong`),Tk(898,`(opcional)`),Zg()(),Jc(899,`p`),Tk(900,`Evento disparado ao sair do campo (blur).`),Zg()()(),Jc(901,`tr`,16)(902,`td`,17)(903,`div`,24)(904,`span`,25),Tk(905,` (p-change)`),_u(906,`br`),Zg()()(),Jc(907,`td`,20)(908,`code`,26),Tk(909,`EventEmitter`),Zg()(),Jc(910,`td`,22),Tk(911,`-`),Zg(),Jc(912,`td`,23)(913,`em`)(914,`strong`),Tk(915,`(opcional)`),Zg()(),Jc(916,`p`),Tk(917,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(918,`tr`,16)(919,`td`,17)(920,`div`,18)(921,`span`,19),Tk(922,` p-optional`),_u(923,`br`),Zg()()(),Jc(924,`td`,20)(925,`code`,21),Tk(926,`boolean`),Zg()(),Jc(927,`td`,22)(928,`p`)(929,`code`),Tk(930,`false`),Zg()()(),Jc(931,`td`,23)(932,`em`)(933,`strong`),Tk(934,`(opcional)`),Zg()(),Jc(935,`p`),Tk(936,`Define se a indicação de campo opcional será exibida.`),Zg()()(),Jc(937,`tr`,16)(938,`td`,17)(939,`div`,18)(940,`span`,19),Tk(941,` p-placeholder`),_u(942,`br`),Zg()()(),Jc(943,`td`,20)(944,`code`,27),Tk(945,`string`),Zg()(),Jc(946,`td`,22),Tk(947,`-`),Zg(),Jc(948,`td`,23)(949,`em`)(950,`strong`),Tk(951,`(opcional)`),Zg()(),Jc(952,`p`),Tk(953,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(954,`tr`,16)(955,`td`,17)(956,`div`,18)(957,`span`,19),Tk(958,` p-helper`),_u(959,`br`),Zg()()(),Jc(960,`td`,20)(961,`code`,31),Tk(962,`PoHelperOptions `),Zg(),Jc(963,`code`,27),Tk(964,` string`),Zg()(),Jc(965,`td`,22),Tk(966,`-`),Zg(),Jc(967,`td`,23)(968,`em`)(969,`strong`),Tk(970,`(opcional)`),Zg()(),Jc(971,`p`),Tk(972,`Define as opções do componente de ajuda (po-helper).`),Zg(),Jc(973,`blockquote`)(974,`p`),Tk(975,`Para mais informações acesse: `),Jc(976,`a`,32),Tk(977,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(978,`.`),Zg()()()(),Jc(979,`tr`,16)(980,`td`,17)(981,`div`,18)(982,`span`,19),Tk(983,` p-readonly`),_u(984,`br`),Zg()()(),Jc(985,`td`,20)(986,`code`,21),Tk(987,`boolean `),Zg(),Jc(988,`code`,27),Tk(989,` string`),Zg()(),Jc(990,`td`,22)(991,`p`)(992,`code`),Tk(993,`false`),Zg()()(),Jc(994,`td`,23)(995,`em`)(996,`strong`),Tk(997,`(opcional)`),Zg()(),Jc(998,`p`),Tk(999,`Torna o componente somente leitura.`),Zg()()(),Jc(1e3,`tr`,16)(1001,`td`,17)(1002,`div`,18)(1003,`span`,19),Tk(1004,` p-required`),_u(1005,`br`),Zg()()(),Jc(1006,`td`,20)(1007,`code`,21),Tk(1008,`boolean `),Zg(),Jc(1009,`code`,27),Tk(1010,` string`),Zg()(),Jc(1011,`td`,22)(1012,`p`)(1013,`code`),Tk(1014,`false`),Zg()()(),Jc(1015,`td`,23)(1016,`em`)(1017,`strong`),Tk(1018,`(opcional)`),Zg()(),Jc(1019,`p`),Tk(1020,`Define que o campo será obrigatório.`),Zg()()(),Jc(1021,`tr`,16)(1022,`td`,17)(1023,`div`,18)(1024,`span`,19),Tk(1025,` p-second-interval`),_u(1026,`br`),Zg()()(),Jc(1027,`td`,20)(1028,`code`,30),Tk(1029,`number`),Zg()(),Jc(1030,`td`,22)(1031,`p`)(1032,`code`),Tk(1033,`1`),Zg()()(),Jc(1034,`td`,23)(1035,`em`)(1036,`strong`),Tk(1037,`(opcional)`),Zg()(),Jc(1038,`p`),Tk(1039,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Jc(1040,`code`),Tk(1041,`p-show-seconds`),Zg(),Tk(1042,` está ativo.`),Zg()()(),Jc(1043,`tr`,16)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),Tk(1047,` p-required-field-error-message`),_u(1048,`br`),Zg()()(),Jc(1049,`td`,20)(1050,`code`,21),Tk(1051,`boolean`),Zg()(),Jc(1052,`td`,22)(1053,`p`)(1054,`code`),Tk(1055,`false`),Zg()()(),Jc(1056,`td`,23)(1057,`em`)(1058,`strong`),Tk(1059,`(opcional)`),Zg()(),Jc(1060,`p`),Tk(1061,`Exibe a mensagem setada na propriedade `),Jc(1062,`code`),Tk(1063,`p-error-pattern`),Zg(),Tk(1064,` se o campo estiver vazio e for requerido.`),Zg(),Jc(1065,`blockquote`)(1066,`p`),Tk(1067,`Necessário que a propriedade `),Jc(1068,`code`),Tk(1069,`p-required`),Zg(),Tk(1070,` esteja habilitada.`),Zg()()()(),Jc(1071,`tr`,16)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),Tk(1075,` p-show-required`),_u(1076,`br`),Zg()()(),Jc(1077,`td`,20)(1078,`code`,21),Tk(1079,`boolean`),Zg()(),Jc(1080,`td`,22)(1081,`p`)(1082,`code`),Tk(1083,`false`),Zg()()(),Jc(1084,`td`,23)(1085,`em`)(1086,`strong`),Tk(1087,`(opcional)`),Zg()(),Jc(1088,`p`),Tk(1089,`Define se a indicação de campo obrigatório será exibida.`),Zg()()(),Jc(1090,`tr`,16)(1091,`td`,17)(1092,`div`,18)(1093,`span`,19),Tk(1094,` p-show-seconds`),_u(1095,`br`),Zg()()(),Jc(1096,`td`,20)(1097,`code`,21),Tk(1098,`boolean`),Zg()(),Jc(1099,`td`,22)(1100,`p`)(1101,`code`),Tk(1102,`false`),Zg()()(),Jc(1103,`td`,23)(1104,`em`)(1105,`strong`),Tk(1106,`(opcional)`),Zg()(),Jc(1107,`p`),Tk(1108,`Exibe a coluna de segundos no painel de seleção do timer.`),Zg()()(),Jc(1109,`tr`,16)(1110,`td`,17)(1111,`div`,18)(1112,`span`,19),Tk(1113,` p-size`),_u(1114,`br`),Zg()()(),Jc(1115,`td`,20)(1116,`code`,27),Tk(1117,`string`),Zg()(),Jc(1118,`td`,22)(1119,`p`)(1120,`code`),Tk(1121,`medium`),Zg()()(),Jc(1122,`td`,23)(1123,`em`)(1124,`strong`),Tk(1125,`(opcional)`),Zg()(),Jc(1126,`p`),Tk(1127,`Define o tamanho do componente:`),Zg(),Jc(1128,`ul`)(1129,`li`)(1130,`code`),Tk(1131,`small`),Zg(),Tk(1132,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1133,`li`)(1134,`code`),Tk(1135,`medium`),Zg(),Tk(1136,`: altura do input como 44px.`),Zg()()()(),Jc(1137,`tr`,16)(1138,`td`,17)(1139,`div`,18)(1140,`span`,19),Tk(1141,` p-format-time`),_u(1142,`br`),Zg()()(),Jc(1143,`td`,20)(1144,`code`,33),Tk(1145,`PoTimerFormat`),Zg()(),Jc(1146,`td`,22)(1147,`p`),Tk(1148,`Determinado pelo locale`),Zg()(),Jc(1149,`td`,23)(1150,`em`)(1151,`strong`),Tk(1152,`(opcional)`),Zg()(),Jc(1153,`p`),Tk(1154,`Define o formato de exibição do timer.`),Zg(),Jc(1155,`p`),Tk(1156,`Valores válidos:`),Zg(),Jc(1157,`ul`)(1158,`li`)(1159,`code`),Tk(1160,`24`),Zg(),Tk(1161,`: formato de 24 horas (padrão para pt, es, ru)`),Zg(),Jc(1162,`li`)(1163,`code`),Tk(1164,`12`),Zg(),Tk(1165,`: formato de 12 horas com indicador AM/PM (padrão para en)`),Zg()(),Jc(1166,`p`),Tk(1167,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Zg(),Jc(1168,`ul`)(1169,`li`)(1170,`code`),Tk(1171,`en`),Zg(),Tk(1172,` → 12h (AM/PM)`),Zg(),Jc(1173,`li`)(1174,`code`),Tk(1175,`pt`),Zg(),Tk(1176,`, `),Jc(1177,`code`),Tk(1178,`es`),Zg(),Tk(1179,`, `),Jc(1180,`code`),Tk(1181,`ru`),Zg(),Tk(1182,` → 24h`),Zg()()()()(),Jc(1183,`h3`,12),Tk(1184,`Métodos`),Zg(),Jc(1185,`table`,34)(1186,`tr`,16)(1187,`th`,35)(1188,`div`,18)(1189,`h4`)(1190,`span`,19),Tk(1191,` showAdditionalHelp `),Zg()()()()(),Jc(1192,`tr`,23)(1193,`td`,23)(1194,`p`),Tk(1195,`Método que exibe `),Jc(1196,`code`),Tk(1197,`p-helper`),Zg(),Tk(1198,` ou executa a ação definida em `),Jc(1199,`code`),Tk(1200,`p-helper{eventOnClick}`),Zg(),Tk(1201,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1202,`code`),Tk(1203,`p-keydown`),Zg(),Tk(1204,`.`),Zg(),Jc(1205,`blockquote`)(1206,`p`),Tk(1207,`Exibe ou oculta o conteúdo do componente `),Jc(1208,`code`),Tk(1209,`po-helper`),Zg(),Tk(1210,` quando o componente estiver com foco.`),Zg()(),Jc(1211,`pre`)(1212,`code`),Tk(1213,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),Zg()(),Jc(1214,`pre`)(1215,`code`),Tk(1216,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1217,`br`),Zg())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function ze(l,Ne){if(l&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-datetimepicker-basic-view`)(2,`sample-po-datetimepicker-labs-view`)(3,`sample-po-datetimepicker-12h-seconds-view`)(4,`sample-po-datetimepicker-scheduling-view`),Zg()}if(l&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var Ae=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Datetimepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ze,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-datetimepicker-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Se,be,fe,ve,ye],encapsulation:2,changeDetection:1})}return l})()}];var ke=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[WV.forChild(Ae),WV]})}return l})();var Ct=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[M,ke]})}return l})();export{Ct as DocPoDatetimepickerModule};