import{$n as Ak,A as Hoe,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,b as Fu,cn as iie,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,hn as mP,ht as U4,it as Qte,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_,zt as ane}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,i){r&1&&_u(0,`po-datetimepicker`,0)},dependencies:[mP],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ge],encapsulation:2,changeDetection:1})}return l})();var he=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=ZO();Jc(0,`po-datetimepicker`,1),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.datetimepicker,o)||(i.datetimepicker=o),H_(o)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.label,o)||(i.label=o),H_(o)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.help,o)||(i.help=o),H_(o)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.helperText,o)||(i.helperText=o),H_(o)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.placeholder,o)||(i.placeholder=o),H_(o)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.errorPattern,o)||(i.errorPattern=o),H_(o)}),Zg(),Jc(13,`po-number`,10),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.minuteInterval,o)||(i.minuteInterval=o),H_(o)}),Zg(),Jc(14,`po-number`,11),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.secondInterval,o)||(i.secondInterval=o),H_(o)}),Zg(),Jc(15,`po-timepicker`,12),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.minTime,o)||(i.minTime=o),H_(o)}),Zg(),Jc(16,`po-timepicker`,13),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.maxTime,o)||(i.maxTime=o),H_(o)}),Zg(),Jc(17,`po-datepicker`,14),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.minDate,o)||(i.minDate=o),H_(o)}),Zg(),Jc(18,`po-datepicker`,15),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.maxDate,o)||(i.maxDate=o),H_(o)}),Zg(),Jc(19,`po-checkbox-group`,16),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.properties,o)||(i.properties=o),H_(o)}),Zg(),Jc(20,`po-radio-group`,17),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.locale,o)||(i.locale=o),H_(o)}),Zg(),Jc(21,`po-radio-group`,18),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.formatDate,o)||(i.formatDate=o),H_(o)}),Zg(),Jc(22,`po-radio-group`,19),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.formatTime,o)||(i.formatTime=o),H_(o)}),Zg(),Jc(23,`po-radio-group`,20),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.size,o)||(i.size=o),H_(o)}),Zg(),Jc(24,`div`,2)(25,`po-button`,21),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Yb(`ngModel`,i.datetimepicker),Rb(`p-clean`,i.properties.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-error-pattern`,i.errorPattern)(`p-format-date`,i.formatDate)(`p-format-time`,i.formatTime)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-max-date`,i.maxDate)(`p-max-time`,i.maxTime)(`p-min-date`,i.minDate)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,i.secondInterval)(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-size`,i.size),Y0(),Ig(3),Rb(`p-value`,i.datetimepicker),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.errorPattern),Y0(),Ig(),Yb(`ngModel`,i.minuteInterval),Y0(),Ig(),Yb(`ngModel`,i.secondInterval),Y0(),Ig(),Yb(`ngModel`,i.minTime),Y0(),Ig(),Yb(`ngModel`,i.maxTime),Y0(),Ig(),Yb(`ngModel`,i.minDate),Rb(`p-max-date`,i.maxDate),Y0(),Ig(),Yb(`ngModel`,i.maxDate),Rb(`p-min-date`,i.minDate),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.locale),Rb(`p-options`,i.localeOptions),Y0(),Ig(),Yb(`ngModel`,i.formatDate),Rb(`p-options`,i.formatDateOptions),Y0(),Ig(),Yb(`ngModel`,i.formatTime),Rb(`p-options`,i.formatTimeOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,Qte,mP,U4,Hoe,Gte,ane,Yoe],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datetimepicker
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,i){r&1&&(Jc(0,`po-datetimepicker`,0),W0(),Kb(`ngModelChange`,function(s){return Ak(i.datetime,s)||(i.datetime=s),s}),Zg()),r&2&&(Yb(`ngModel`,i.datetime),Y0())},dependencies:[TZ,JL,mP],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker - 12h with Seconds`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-datetimepicker
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-12h-seconds`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return l})();var We=[`formScheduling`];var Ce=(()=>{class l{poDialog=p(iie);poNotification=p(Fu);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Cu(We,7),r&2){let d;No(d=xo())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let d=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.patient,o)||(i.patient=o),H_(o)}),Zg(),Jc(4,`po-input`,3),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.doctor,o)||(i.doctor=o),H_(o)}),Zg()(),Jc(5,`div`,1)(6,`po-select`,4),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.specialty,o)||(i.specialty=o),H_(o)}),Zg(),Jc(7,`po-datetimepicker`,5),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(i.appointment,o)||(i.appointment=o),H_(o)}),Zg()(),Jc(8,`div`,1)(9,`po-button`,6),vt(`p-click`,function(){return i.confirm()}),Zg()()()}if(r&2){let d=sk(1);Ig(3),Yb(`ngModel`,i.patient),Y0(),Ig(),Yb(`ngModel`,i.doctor),Y0(),Ig(2),Yb(`ngModel`,i.specialty),Rb(`p-options`,i.specialtyOptions),Y0(),Ig(),Yb(`ngModel`,i.appointment),Y0(),Ig(2),Rb(`p-disabled`,d.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,mP,U4,Woe],encapsulation:2,changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Datetimepicker - Scheduling`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formScheduling="ngForm">
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-datetimepicker-scheduling`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return l})();var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1202,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoDatetimepickerComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-datetimepicker`),Zg(),Tk(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),Zg(),Jc(27,`p`),Tk(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Jc(29,`code`),Tk(30,`p-format-date`),Zg(),Tk(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Jc(32,`code`),Tk(33,`p-format-time`),Zg(),Tk(34,`.`),Zg(),Jc(35,`p`),Tk(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Jc(37,`code`),Tk(38,`p-locale`),Zg(),Tk(39,`.`),Zg(),Jc(40,`p`),Tk(41,`O componente aceita os seguintes formatos de entrada:`),Zg(),Jc(42,`ul`)(43,`li`),Tk(44,`ISO 8601 com timezone: `),Jc(45,`code`),Tk(46,`'2026-05-12T14:30:00-03:00'`),Zg()(),Jc(47,`li`),Tk(48,`ISO 8601 UTC: `),Jc(49,`code`),Tk(50,`'2026-05-12T14:30:00Z'`),Zg()(),Jc(51,`li`),Tk(52,`ISO 8601 sem timezone: `),Jc(53,`code`),Tk(54,`'2026-05-12T14:30:00'`),Zg()(),Jc(55,`li`),Tk(56,`ISO 8601 apenas data: `),Jc(57,`code`),Tk(58,`'2026-05-12'`),Zg()(),Jc(59,`li`),Tk(60,`JavaScript Date Object: `),Jc(61,`code`),Tk(62,`new Date(2026, 4, 12, 14, 30)`),Zg()()(),Jc(63,`p`),Tk(64,`O formato de saída do `),Jc(65,`em`),Tk(66,`model`),Zg(),Tk(67,` é sempre ISO 8601 com timezone local: `),Jc(68,`code`),Tk(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),Zg(),Tk(70,`
(ou `),Jc(71,`code`),Tk(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),Zg(),Tk(73,` quando `),Jc(74,`code`),Tk(75,`p-show-seconds`),Zg(),Tk(76,` está ativo).`),Zg(),Jc(77,`p`)(78,`strong`),Tk(79,`Importante:`),Zg()(),Jc(80,`ul`)(81,`li`),Tk(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),Zg(),Jc(83,`li`),Tk(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),Zg(),Jc(85,`li`),Tk(86,`Caso a data/hora esteja inválida, o `),Jc(87,`code`),Tk(88,`model`),Zg(),Tk(89,` receberá a mensagem de erro localizada.`),Zg(),Jc(90,`li`),Tk(91,`Caso o `),Jc(92,`code`),Tk(93,`input`),Zg(),Tk(94,` esteja passando um `),Jc(95,`code`),Tk(96,`[(ngModel)]`),Zg(),Tk(97,`, mas não tenha um `),Jc(98,`code`),Tk(99,`name`),Zg(),Tk(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Jc(101,`code`),Tk(102,`[ngModelOptions]="{standalone: true}"`),Zg(),Tk(103,`).`),Zg()(),Jc(104,`p`),Tk(105,`Exemplo:`),Zg(),Jc(106,`pre`)(107,`code`),Tk(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),Zg()(),Jc(109,`blockquote`)(110,`p`),Tk(111,`Não esqueça de importar o `),Jc(112,`code`),Tk(113,`FormsModule`),Zg(),Tk(114,` em seu módulo, tal como para utilizar o `),Jc(115,`code`),Tk(116,`input default`),Zg(),Tk(117,`.`),Zg()(),Jc(118,`h4`),Tk(119,`Tokens customizáveis`),Zg(),Jc(120,`p`),Tk(121,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(122,`br`),Tk(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(124,`code`),Tk(125,`.po-input`),Zg()(),Jc(126,`blockquote`)(127,`p`),Tk(128,`Para maiores informações, acesse o guia `),Jc(129,`a`,6),Tk(130,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(131,`.`),Zg()(),Jc(132,`table`)(133,`thead`)(134,`tr`)(135,`th`),Tk(136,`Propriedade`),Zg(),Jc(137,`th`),Tk(138,`Descrição`),Zg(),Jc(139,`th`),Tk(140,`Valor Padrão`),Zg()()(),Jc(141,`tbody`)(142,`tr`)(143,`td`)(144,`strong`),Tk(145,`Default Values`),Zg()(),_u(146,`td`)(147,`td`),Zg(),Jc(148,`tr`)(149,`td`)(150,`code`),Tk(151,`--font-family`),Zg()(),Jc(152,`td`),Tk(153,`Família tipográfica usada`),Zg(),Jc(154,`td`)(155,`code`),Tk(156,`var(--font-family-theme)`),Zg()()(),Jc(157,`tr`)(158,`td`)(159,`code`),Tk(160,`--font-size`),Zg()(),Jc(161,`td`),Tk(162,`Tamanho da fonte`),Zg(),Jc(163,`td`)(164,`code`),Tk(165,`var(--font-size-default)`),Zg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--text-color-placeholder`),Zg(),Tk(170,` \xA0`),Zg(),Jc(171,`td`),Tk(172,`Cor principal do texto do placeholder`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`var(--color-neutral-light-30)`),Zg()()(),Jc(176,`tr`)(177,`td`)(178,`code`),Tk(179,`--color`),Zg()(),Jc(180,`td`),Tk(181,`Cor principal do datetimepicker`),Zg(),Jc(182,`td`)(183,`code`),Tk(184,`var(--color-neutral-dark-70)`),Zg()()(),Jc(185,`tr`)(186,`td`)(187,`code`),Tk(188,`--background`),Zg()(),Jc(189,`td`),Tk(190,`Cor de background`),Zg(),Jc(191,`td`)(192,`code`),Tk(193,`var(--color-neutral-light-05)`),Zg()()(),Jc(194,`tr`)(195,`td`)(196,`code`),Tk(197,`--padding`),Zg()(),Jc(198,`td`),Tk(199,`Preenchimento`),Zg(),Jc(200,`td`)(201,`code`),Tk(202,`0 0.5rem`),Zg()()(),Jc(203,`tr`)(204,`td`)(205,`code`),Tk(206,`--text-color`),Zg()(),Jc(207,`td`),Tk(208,`Cor do texto`),Zg(),Jc(209,`td`)(210,`code`),Tk(211,`var(--color-neutral-dark-90)`),Zg()()(),Jc(212,`tr`)(213,`td`)(214,`code`),Tk(215,`--field-container-title-justify`),Zg()(),Jc(216,`td`),Tk(217,`Alinhamento horizontal do título (`),Jc(218,`code`),Tk(219,`justify-content`),Zg(),Tk(220,`)`),Zg(),Jc(221,`td`)(222,`code`),Tk(223,`space-between`),Zg()()(),Jc(224,`tr`)(225,`td`)(226,`code`),Tk(227,`--field-container-title-flex`),Zg()(),Jc(228,`td`),Tk(229,`Flex do título (`),Jc(230,`code`),Tk(231,`flex`),Zg(),Tk(232,`)`),Zg(),Jc(233,`td`)(234,`code`),Tk(235,`1 auto`),Zg()()(),Jc(236,`tr`)(237,`td`)(238,`strong`),Tk(239,`Hover`),Zg()(),_u(240,`td`)(241,`td`),Zg(),Jc(242,`tr`)(243,`td`)(244,`code`),Tk(245,`--color-hover`),Zg()(),Jc(246,`td`),Tk(247,`Cor principal no estado hover`),Zg(),Jc(248,`td`)(249,`code`),Tk(250,`var(--color-brand-01-dark)`),Zg()()(),Jc(251,`tr`)(252,`td`)(253,`code`),Tk(254,`--background-hover`),Zg()(),Jc(255,`td`),Tk(256,`Cor de background no estado hover`),Zg(),Jc(257,`td`)(258,`code`),Tk(259,`var(--color-brand-01-lightest)`),Zg()()(),Jc(260,`tr`)(261,`td`)(262,`strong`),Tk(263,`Focused`),Zg()(),_u(264,`td`)(265,`td`),Zg(),Jc(266,`tr`)(267,`td`)(268,`code`),Tk(269,`--color-focused`),Zg()(),Jc(270,`td`),Tk(271,`Cor principal no estado de focus`),Zg(),Jc(272,`td`)(273,`code`),Tk(274,`var(--color-action-default)`),Zg()()(),Jc(275,`tr`)(276,`td`)(277,`code`),Tk(278,`--outline-color-focused`),Zg()(),Jc(279,`td`),Tk(280,`Cor do outline do estado de focus`),Zg(),Jc(281,`td`)(282,`code`),Tk(283,`var(--color-action-focus)`),Zg()()(),Jc(284,`tr`)(285,`td`)(286,`strong`),Tk(287,`Disabled`),Zg()(),_u(288,`td`)(289,`td`),Zg(),Jc(290,`tr`)(291,`td`)(292,`code`),Tk(293,`--color-disabled`),Zg()(),Jc(294,`td`),Tk(295,`Cor principal no estado disabled`),Zg(),Jc(296,`td`)(297,`code`),Tk(298,`var(--color-neutral-light-30)`),Zg()()(),Jc(299,`tr`)(300,`td`)(301,`code`),Tk(302,`--background-disabled`),Zg()(),Jc(303,`td`),Tk(304,`Cor de background no estado disabled \xA0`),Zg(),Jc(305,`td`)(306,`code`),Tk(307,`var(--color-neutral-light-20)`),Zg()()(),Jc(308,`tr`)(309,`td`)(310,`code`),Tk(311,`--text-color-disabled`),Zg()(),Jc(312,`td`),Tk(313,`Cor do texto no estado disabled`),Zg(),Jc(314,`td`)(315,`code`),Tk(316,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(317,`div`,7)(318,`h4`,8),Tk(319,`Seletor`),Zg(),Jc(320,`pre`,9),Tk(321,`<po-datetimepicker
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
`),Zg()(),Jc(322,`h4`,10),Tk(323,`Propriedades`),Zg(),Jc(324,`table`,11)(325,`tr`,12)(326,`th`,13),Tk(327,`Nome`),Zg(),Jc(328,`th`,13),Tk(329,`Tipo`),Zg(),Jc(330,`th`,13),Tk(331,`Padrão`),Zg(),Jc(332,`th`,13),Tk(333,`Descrição`),Zg()(),Jc(334,`tr`,14)(335,`td`,15)(336,`div`,16)(337,`span`,17),Tk(338,` p-append-in-body`),_u(339,`br`),Zg()()(),Jc(340,`td`,18)(341,`code`,19),Tk(342,`boolean`),Zg()(),Jc(343,`td`,20)(344,`p`)(345,`code`),Tk(346,`false`),Zg()()(),Jc(347,`td`,21)(348,`em`)(349,`strong`),Tk(350,`(opcional)`),Zg()(),Jc(351,`p`),Tk(352,`Define que o `),Jc(353,`code`),Tk(354,`calendar`),Zg(),Tk(355,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),Zg()()(),Jc(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),Tk(360,` p-auto-focus`),_u(361,`br`),Zg()()(),Jc(362,`td`,18)(363,`code`,19),Tk(364,`boolean`),Zg()(),Jc(365,`td`,20)(366,`p`)(367,`code`),Tk(368,`false`),Zg()()(),Jc(369,`td`,21)(370,`em`)(371,`strong`),Tk(372,`(opcional)`),Zg()(),Jc(373,`p`),Tk(374,`Aplica foco no elemento ao ser iniciado.`),Zg()()(),Jc(375,`tr`,14)(376,`td`,15)(377,`div`,22)(378,`span`,23),Tk(379,` (p-change-model)`),_u(380,`br`),Zg()()(),Jc(381,`td`,18)(382,`code`,24),Tk(383,`EventEmitter`),Zg()(),Jc(384,`td`,20),Tk(385,`-`),Zg(),Jc(386,`td`,21)(387,`em`)(388,`strong`),Tk(389,`(opcional)`),Zg()(),Jc(390,`p`),Tk(391,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(392,`code`),Tk(393,`setValue`),Zg(),Tk(394,`, `),Jc(395,`code`),Tk(396,`patchValue`),Zg(),Tk(397,`, carregamento assíncrono).`),Zg(),Jc(398,`p`),Tk(399,`Diferentemente do `),Jc(400,`code`),Tk(401,`p-change`),Zg(),Tk(402,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(403,`code`),Tk(404,`p-change-model`),Zg(),Tk(405,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(406,`p`),Tk(407,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(408,`tr`,14)(409,`td`,15)(410,`div`,16)(411,`span`,17),Tk(412,` p-clean`),_u(413,`br`),Zg()()(),Jc(414,`td`,18)(415,`code`,19),Tk(416,`boolean `),Zg(),Jc(417,`code`,25),Tk(418,` string`),Zg()(),Jc(419,`td`,20)(420,`p`)(421,`code`),Tk(422,`false`),Zg()()(),Jc(423,`td`,21)(424,`em`)(425,`strong`),Tk(426,`(opcional)`),Zg()(),Jc(427,`p`),Tk(428,`Habilita ação para limpar o campo.`),Zg()()(),Jc(429,`tr`,14)(430,`td`,15)(431,`div`,16)(432,`span`,17),Tk(433,` p-compact-label`),_u(434,`br`),Zg()()(),Jc(435,`td`,18)(436,`code`,19),Tk(437,`boolean`),Zg()(),Jc(438,`td`,20)(439,`p`)(440,`code`),Tk(441,`false`),Zg()()(),Jc(442,`td`,21)(443,`em`)(444,`strong`),Tk(445,`(opcional)`),Zg()(),Jc(446,`p`),Tk(447,`Define se o título do campo será exibido de forma compacta.`),Zg()()(),Jc(448,`tr`,14)(449,`td`,15)(450,`div`,16)(451,`span`,17),Tk(452,` p-format-date`),_u(453,`br`),Zg()()(),Jc(454,`td`,18)(455,`code`,25),Tk(456,`string`),Zg()(),Jc(457,`td`,20)(458,`p`),Tk(459,`Determinado pelo locale`),Zg()(),Jc(460,`td`,21)(461,`em`)(462,`strong`),Tk(463,`(opcional)`),Zg()(),Jc(464,`p`),Tk(465,`Define o formato de exibição da data.`),Zg(),Jc(466,`p`),Tk(467,`Valores válidos:`),Zg(),Jc(468,`ul`)(469,`li`)(470,`code`),Tk(471,`dd/mm/yyyy`),Zg()(),Jc(472,`li`)(473,`code`),Tk(474,`mm/dd/yyyy`),Zg()(),Jc(475,`li`)(476,`code`),Tk(477,`yyyy/mm/dd`),Zg()()(),Jc(478,`p`),Tk(479,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Zg(),Jc(480,`ul`)(481,`li`)(482,`code`),Tk(483,`en`),Zg(),Tk(484,` → `),Jc(485,`code`),Tk(486,`mm/dd/yyyy`),Zg()(),Jc(487,`li`)(488,`code`),Tk(489,`pt`),Zg(),Tk(490,`, `),Jc(491,`code`),Tk(492,`es`),Zg(),Tk(493,`, `),Jc(494,`code`),Tk(495,`ru`),Zg(),Tk(496,` → `),Jc(497,`code`),Tk(498,`dd/mm/yyyy`),Zg()()()()(),Jc(499,`tr`,14)(500,`td`,15)(501,`div`,16)(502,`span`,17),Tk(503,` p-disabled`),_u(504,`br`),Zg()()(),Jc(505,`td`,18)(506,`code`,19),Tk(507,`boolean `),Zg(),Jc(508,`code`,25),Tk(509,` string`),Zg()(),Jc(510,`td`,20)(511,`p`)(512,`code`),Tk(513,`false`),Zg()()(),Jc(514,`td`,21)(515,`em`)(516,`strong`),Tk(517,`(opcional)`),Zg()(),Jc(518,`p`),Tk(519,`Desabilita o campo.`),Zg()()(),Jc(520,`tr`,14)(521,`td`,15)(522,`div`,16)(523,`span`,17),Tk(524,` p-error-limit`),_u(525,`br`),Zg()()(),Jc(526,`td`,18)(527,`code`,19),Tk(528,`boolean`),Zg()(),Jc(529,`td`,20)(530,`p`)(531,`code`),Tk(532,`false`),Zg()()(),Jc(533,`td`,21)(534,`em`)(535,`strong`),Tk(536,`(opcional)`),Zg()(),Jc(537,`p`),Tk(538,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg()()(),Jc(539,`tr`,14)(540,`td`,15)(541,`div`,16)(542,`span`,17),Tk(543,` p-error-pattern`),_u(544,`br`),Zg()()(),Jc(545,`td`,18)(546,`code`,25),Tk(547,`string`),Zg()(),Jc(548,`td`,20),Tk(549,`-`),Zg(),Jc(550,`td`,21)(551,`em`)(552,`strong`),Tk(553,`(opcional)`),Zg()(),Jc(554,`p`),Tk(555,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),Zg()()(),Jc(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),Tk(560,` p-help`),_u(561,`br`),Zg()()(),Jc(562,`td`,18)(563,`code`,25),Tk(564,`string`),Zg()(),Jc(565,`td`,20),Tk(566,`-`),Zg(),Jc(567,`td`,21)(568,`em`)(569,`strong`),Tk(570,`(opcional)`),Zg()(),Jc(571,`p`),Tk(572,`Texto de apoio do campo.`),Zg()()(),Jc(573,`tr`,14)(574,`td`,15)(575,`div`,22)(576,`span`,23),Tk(577,` (p-keydown)`),_u(578,`br`),Zg()()(),Jc(579,`td`,18)(580,`code`,24),Tk(581,`EventEmitter`),Zg()(),Jc(582,`td`,20),Tk(583,`-`),Zg(),Jc(584,`td`,21)(585,`em`)(586,`strong`),Tk(587,`(opcional)`),Zg()(),Jc(588,`p`),Tk(589,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),Zg()()(),Jc(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),Tk(594,` p-label`),_u(595,`br`),Zg()()(),Jc(596,`td`,18)(597,`code`,25),Tk(598,`string`),Zg()(),Jc(599,`td`,20),Tk(600,`-`),Zg(),Jc(601,`td`,21)(602,`em`)(603,`strong`),Tk(604,`(opcional)`),Zg()(),Jc(605,`p`),Tk(606,`Rótulo do campo.`),Zg()()(),Jc(607,`tr`,14)(608,`td`,15)(609,`div`,16)(610,`span`,17),Tk(611,` p-label-text-wrap`),_u(612,`br`),Zg()()(),Jc(613,`td`,18)(614,`code`,19),Tk(615,`boolean`),Zg()(),Jc(616,`td`,20)(617,`p`)(618,`code`),Tk(619,`false`),Zg()()(),Jc(620,`td`,21)(621,`em`)(622,`strong`),Tk(623,`(opcional)`),Zg()(),Jc(624,`p`),Tk(625,`Habilita a quebra automática do texto da propriedade `),Jc(626,`code`),Tk(627,`p-label`),Zg(),Tk(628,`.`),Zg()()(),Jc(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),Tk(633,` p-loading`),_u(634,`br`),Zg()()(),Jc(635,`td`,18)(636,`code`,19),Tk(637,`boolean `),Zg(),Jc(638,`code`,25),Tk(639,` string`),Zg()(),Jc(640,`td`,20)(641,`p`)(642,`code`),Tk(643,`false`),Zg()()(),Jc(644,`td`,21)(645,`em`)(646,`strong`),Tk(647,`(opcional)`),Zg()(),Jc(648,`p`),Tk(649,`Exibe um ícone de carregamento no lado direito do campo.`),Zg()()(),Jc(650,`tr`,14)(651,`td`,15)(652,`div`,16)(653,`span`,17),Tk(654,` p-locale`),_u(655,`br`),Zg()()(),Jc(656,`td`,18)(657,`code`,25),Tk(658,`string`),Zg()(),Jc(659,`td`,20),Tk(660,`-`),Zg(),Jc(661,`td`,21)(662,`em`)(663,`strong`),Tk(664,`(opcional)`),Zg()(),Jc(665,`p`),Tk(666,`Idioma do componente.`),Zg(),Jc(667,`blockquote`)(668,`p`),Tk(669,`O locale padrão será recuperado com base no `),Jc(670,`a`,26)(671,`code`),Tk(672,`PoI18nService`),Zg()(),Tk(673,` ou `),Jc(674,`em`),Tk(675,`browser`),Zg(),Tk(676,`.`),Zg()()()(),Jc(677,`tr`,14)(678,`td`,15)(679,`div`,16)(680,`span`,17),Tk(681,` p-max-date`),_u(682,`br`),Zg()()(),Jc(683,`td`,18)(684,`code`,25),Tk(685,`string `),Zg(),Jc(686,`code`,27),Tk(687,` Date`),Zg()(),Jc(688,`td`,20),Tk(689,`-`),Zg(),Jc(690,`td`,21)(691,`em`)(692,`strong`),Tk(693,`(opcional)`),Zg()(),Jc(694,`p`),Tk(695,`Define uma data máxima para o `),Jc(696,`code`),Tk(697,`po-datetimepicker`),Zg(),Tk(698,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),Zg(),Jc(699,`p`),Tk(700,`Aceita os formatos:`),Zg(),Jc(701,`ul`)(702,`li`)(703,`code`),Tk(704,`Date`),Zg(),Tk(705,` object: `),Jc(706,`code`),Tk(707,`new Date(2026, 4, 31)`),Zg()(),Jc(708,`li`),Tk(709,`ISO string: `),Jc(710,`code`),Tk(711,`'2026-05-31'`),Zg()(),Jc(712,`li`),Tk(713,`ISO com hora: `),Jc(714,`code`),Tk(715,`'2026-05-31T23:59:59-03:00'`),Zg()()()()(),Jc(716,`tr`,14)(717,`td`,15)(718,`div`,16)(719,`span`,17),Tk(720,` p-max-time`),_u(721,`br`),Zg()()(),Jc(722,`td`,18)(723,`code`,25),Tk(724,`string`),Zg()(),Jc(725,`td`,20),Tk(726,`-`),Zg(),Jc(727,`td`,21)(728,`em`)(729,`strong`),Tk(730,`(opcional)`),Zg()(),Jc(731,`p`),Tk(732,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),Zg(),Jc(733,`p`),Tk(734,`Formato aceito: `),Jc(735,`code`),Tk(736,`HH:mm`),Zg(),Tk(737,` ou `),Jc(738,`code`),Tk(739,`HH:mm:ss`),Zg(),Tk(740,`.`),Zg()()(),Jc(741,`tr`,14)(742,`td`,15)(743,`div`,16)(744,`span`,17),Tk(745,` p-min-date`),_u(746,`br`),Zg()()(),Jc(747,`td`,18)(748,`code`,25),Tk(749,`string `),Zg(),Jc(750,`code`,27),Tk(751,` Date`),Zg()(),Jc(752,`td`,20),Tk(753,`-`),Zg(),Jc(754,`td`,21)(755,`em`)(756,`strong`),Tk(757,`(opcional)`),Zg()(),Jc(758,`p`),Tk(759,`Define uma data mínima para o `),Jc(760,`code`),Tk(761,`po-datetimepicker`),Zg(),Tk(762,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),Zg(),Jc(763,`p`),Tk(764,`Aceita os formatos:`),Zg(),Jc(765,`ul`)(766,`li`)(767,`code`),Tk(768,`Date`),Zg(),Tk(769,` object: `),Jc(770,`code`),Tk(771,`new Date(2026, 0, 1)`),Zg()(),Jc(772,`li`),Tk(773,`ISO string: `),Jc(774,`code`),Tk(775,`'2026-01-01'`),Zg()(),Jc(776,`li`),Tk(777,`ISO com hora: `),Jc(778,`code`),Tk(779,`'2026-01-01T00:00:00-03:00'`),Zg()()()()(),Jc(780,`tr`,14)(781,`td`,15)(782,`div`,16)(783,`span`,17),Tk(784,` p-min-time`),_u(785,`br`),Zg()()(),Jc(786,`td`,18)(787,`code`,25),Tk(788,`string`),Zg()(),Jc(789,`td`,20),Tk(790,`-`),Zg(),Jc(791,`td`,21)(792,`em`)(793,`strong`),Tk(794,`(opcional)`),Zg()(),Jc(795,`p`),Tk(796,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),Zg(),Jc(797,`p`),Tk(798,`Formato aceito: `),Jc(799,`code`),Tk(800,`HH:mm`),Zg(),Tk(801,` ou `),Jc(802,`code`),Tk(803,`HH:mm:ss`),Zg(),Tk(804,`.`),Zg()()(),Jc(805,`tr`,14)(806,`td`,15)(807,`div`,16)(808,`span`,17),Tk(809,` p-minute-interval`),_u(810,`br`),Zg()()(),Jc(811,`td`,18)(812,`code`,28),Tk(813,`number`),Zg()(),Jc(814,`td`,20)(815,`p`)(816,`code`),Tk(817,`5`),Zg()()(),Jc(818,`td`,21)(819,`em`)(820,`strong`),Tk(821,`(opcional)`),Zg()(),Jc(822,`p`),Tk(823,`Define o intervalo entre os minutos exibidos no painel do timer.`),Zg()()(),Jc(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),Tk(828,` name`),_u(829,`br`),Zg()()(),Jc(830,`td`,18)(831,`code`,25),Tk(832,`string`),Zg()(),Jc(833,`td`,20),Tk(834,`-`),Zg(),Jc(835,`td`,21)(836,`em`)(837,`strong`),Tk(838,`(opcional)`),Zg()(),Jc(839,`p`),Tk(840,`Nome do componente.`),Zg()()(),Jc(841,`tr`,14)(842,`td`,15)(843,`div`,16)(844,`span`,17),Tk(845,` p-no-autocomplete`),_u(846,`br`),Zg()()(),Jc(847,`td`,18)(848,`code`,19),Tk(849,`boolean `),Zg(),Jc(850,`code`,25),Tk(851,` string`),Zg()(),Jc(852,`td`,20)(853,`p`)(854,`code`),Tk(855,`false`),Zg()()(),Jc(856,`td`,21)(857,`em`)(858,`strong`),Tk(859,`(opcional)`),Zg()(),Jc(860,`p`),Tk(861,`Define a propriedade nativa `),Jc(862,`code`),Tk(863,`autocomplete`),Zg(),Tk(864,` do campo como `),Jc(865,`code`),Tk(866,`off`),Zg(),Tk(867,`.`),Zg()()(),Jc(868,`tr`,14)(869,`td`,15)(870,`div`,22)(871,`span`,23),Tk(872,` (p-blur)`),_u(873,`br`),Zg()()(),Jc(874,`td`,18)(875,`code`,24),Tk(876,`EventEmitter`),Zg()(),Jc(877,`td`,20),Tk(878,`-`),Zg(),Jc(879,`td`,21)(880,`em`)(881,`strong`),Tk(882,`(opcional)`),Zg()(),Jc(883,`p`),Tk(884,`Evento disparado ao sair do campo (blur).`),Zg()()(),Jc(885,`tr`,14)(886,`td`,15)(887,`div`,22)(888,`span`,23),Tk(889,` (p-change)`),_u(890,`br`),Zg()()(),Jc(891,`td`,18)(892,`code`,24),Tk(893,`EventEmitter`),Zg()(),Jc(894,`td`,20),Tk(895,`-`),Zg(),Jc(896,`td`,21)(897,`em`)(898,`strong`),Tk(899,`(opcional)`),Zg()(),Jc(900,`p`),Tk(901,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(902,`tr`,14)(903,`td`,15)(904,`div`,16)(905,`span`,17),Tk(906,` p-optional`),_u(907,`br`),Zg()()(),Jc(908,`td`,18)(909,`code`,19),Tk(910,`boolean`),Zg()(),Jc(911,`td`,20)(912,`p`)(913,`code`),Tk(914,`false`),Zg()()(),Jc(915,`td`,21)(916,`em`)(917,`strong`),Tk(918,`(opcional)`),Zg()(),Jc(919,`p`),Tk(920,`Define se a indicação de campo opcional será exibida.`),Zg()()(),Jc(921,`tr`,14)(922,`td`,15)(923,`div`,16)(924,`span`,17),Tk(925,` p-placeholder`),_u(926,`br`),Zg()()(),Jc(927,`td`,18)(928,`code`,25),Tk(929,`string`),Zg()(),Jc(930,`td`,20),Tk(931,`-`),Zg(),Jc(932,`td`,21)(933,`em`)(934,`strong`),Tk(935,`(opcional)`),Zg()(),Jc(936,`p`),Tk(937,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(938,`tr`,14)(939,`td`,15)(940,`div`,16)(941,`span`,17),Tk(942,` p-helper`),_u(943,`br`),Zg()()(),Jc(944,`td`,18)(945,`code`,29),Tk(946,`PoHelperOptions `),Zg(),Jc(947,`code`,25),Tk(948,` string`),Zg()(),Jc(949,`td`,20),Tk(950,`-`),Zg(),Jc(951,`td`,21)(952,`em`)(953,`strong`),Tk(954,`(opcional)`),Zg()(),Jc(955,`p`),Tk(956,`Define as opções do componente de ajuda (po-helper).`),Zg(),Jc(957,`blockquote`)(958,`p`),Tk(959,`Para mais informações acesse: `),Jc(960,`a`,30),Tk(961,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(962,`.`),Zg()()()(),Jc(963,`tr`,14)(964,`td`,15)(965,`div`,16)(966,`span`,17),Tk(967,` p-readonly`),_u(968,`br`),Zg()()(),Jc(969,`td`,18)(970,`code`,19),Tk(971,`boolean `),Zg(),Jc(972,`code`,25),Tk(973,` string`),Zg()(),Jc(974,`td`,20)(975,`p`)(976,`code`),Tk(977,`false`),Zg()()(),Jc(978,`td`,21)(979,`em`)(980,`strong`),Tk(981,`(opcional)`),Zg()(),Jc(982,`p`),Tk(983,`Torna o componente somente leitura.`),Zg()()(),Jc(984,`tr`,14)(985,`td`,15)(986,`div`,16)(987,`span`,17),Tk(988,` p-required`),_u(989,`br`),Zg()()(),Jc(990,`td`,18)(991,`code`,19),Tk(992,`boolean `),Zg(),Jc(993,`code`,25),Tk(994,` string`),Zg()(),Jc(995,`td`,20)(996,`p`)(997,`code`),Tk(998,`false`),Zg()()(),Jc(999,`td`,21)(1e3,`em`)(1001,`strong`),Tk(1002,`(opcional)`),Zg()(),Jc(1003,`p`),Tk(1004,`Define que o campo será obrigatório.`),Zg()()(),Jc(1005,`tr`,14)(1006,`td`,15)(1007,`div`,16)(1008,`span`,17),Tk(1009,` p-second-interval`),_u(1010,`br`),Zg()()(),Jc(1011,`td`,18)(1012,`code`,28),Tk(1013,`number`),Zg()(),Jc(1014,`td`,20)(1015,`p`)(1016,`code`),Tk(1017,`1`),Zg()()(),Jc(1018,`td`,21)(1019,`em`)(1020,`strong`),Tk(1021,`(opcional)`),Zg()(),Jc(1022,`p`),Tk(1023,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Jc(1024,`code`),Tk(1025,`p-show-seconds`),Zg(),Tk(1026,` está ativo.`),Zg()()(),Jc(1027,`tr`,14)(1028,`td`,15)(1029,`div`,16)(1030,`span`,17),Tk(1031,` p-required-field-error-message`),_u(1032,`br`),Zg()()(),Jc(1033,`td`,18)(1034,`code`,19),Tk(1035,`boolean`),Zg()(),Jc(1036,`td`,20)(1037,`p`)(1038,`code`),Tk(1039,`false`),Zg()()(),Jc(1040,`td`,21)(1041,`em`)(1042,`strong`),Tk(1043,`(opcional)`),Zg()(),Jc(1044,`p`),Tk(1045,`Exibe a mensagem setada na propriedade `),Jc(1046,`code`),Tk(1047,`p-error-pattern`),Zg(),Tk(1048,` se o campo estiver vazio e for requerido.`),Zg(),Jc(1049,`blockquote`)(1050,`p`),Tk(1051,`Necessário que a propriedade `),Jc(1052,`code`),Tk(1053,`p-required`),Zg(),Tk(1054,` esteja habilitada.`),Zg()()()(),Jc(1055,`tr`,14)(1056,`td`,15)(1057,`div`,16)(1058,`span`,17),Tk(1059,` p-show-required`),_u(1060,`br`),Zg()()(),Jc(1061,`td`,18)(1062,`code`,19),Tk(1063,`boolean`),Zg()(),Jc(1064,`td`,20)(1065,`p`)(1066,`code`),Tk(1067,`false`),Zg()()(),Jc(1068,`td`,21)(1069,`em`)(1070,`strong`),Tk(1071,`(opcional)`),Zg()(),Jc(1072,`p`),Tk(1073,`Define se a indicação de campo obrigatório será exibida.`),Zg()()(),Jc(1074,`tr`,14)(1075,`td`,15)(1076,`div`,16)(1077,`span`,17),Tk(1078,` p-show-seconds`),_u(1079,`br`),Zg()()(),Jc(1080,`td`,18)(1081,`code`,19),Tk(1082,`boolean`),Zg()(),Jc(1083,`td`,20)(1084,`p`)(1085,`code`),Tk(1086,`false`),Zg()()(),Jc(1087,`td`,21)(1088,`em`)(1089,`strong`),Tk(1090,`(opcional)`),Zg()(),Jc(1091,`p`),Tk(1092,`Exibe a coluna de segundos no painel de seleção do timer.`),Zg()()(),Jc(1093,`tr`,14)(1094,`td`,15)(1095,`div`,16)(1096,`span`,17),Tk(1097,` p-size`),_u(1098,`br`),Zg()()(),Jc(1099,`td`,18)(1100,`code`,25),Tk(1101,`string`),Zg()(),Jc(1102,`td`,20)(1103,`p`)(1104,`code`),Tk(1105,`medium`),Zg()()(),Jc(1106,`td`,21)(1107,`em`)(1108,`strong`),Tk(1109,`(opcional)`),Zg()(),Jc(1110,`p`),Tk(1111,`Define o tamanho do componente:`),Zg(),Jc(1112,`ul`)(1113,`li`)(1114,`code`),Tk(1115,`small`),Zg(),Tk(1116,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1117,`li`)(1118,`code`),Tk(1119,`medium`),Zg(),Tk(1120,`: altura do input como 44px.`),Zg()()()(),Jc(1121,`tr`,14)(1122,`td`,15)(1123,`div`,16)(1124,`span`,17),Tk(1125,` p-format-time`),_u(1126,`br`),Zg()()(),Jc(1127,`td`,18)(1128,`code`,31),Tk(1129,`PoTimerFormat`),Zg()(),Jc(1130,`td`,20)(1131,`p`),Tk(1132,`Determinado pelo locale`),Zg()(),Jc(1133,`td`,21)(1134,`em`)(1135,`strong`),Tk(1136,`(opcional)`),Zg()(),Jc(1137,`p`),Tk(1138,`Define o formato de exibição do timer.`),Zg(),Jc(1139,`p`),Tk(1140,`Valores válidos:`),Zg(),Jc(1141,`ul`)(1142,`li`)(1143,`code`),Tk(1144,`24`),Zg(),Tk(1145,`: formato de 24 horas (padrão para pt, es, ru)`),Zg(),Jc(1146,`li`)(1147,`code`),Tk(1148,`12`),Zg(),Tk(1149,`: formato de 12 horas com indicador AM/PM (padrão para en)`),Zg()(),Jc(1150,`p`),Tk(1151,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Zg(),Jc(1152,`ul`)(1153,`li`)(1154,`code`),Tk(1155,`en`),Zg(),Tk(1156,` → 12h (AM/PM)`),Zg(),Jc(1157,`li`)(1158,`code`),Tk(1159,`pt`),Zg(),Tk(1160,`, `),Jc(1161,`code`),Tk(1162,`es`),Zg(),Tk(1163,`, `),Jc(1164,`code`),Tk(1165,`ru`),Zg(),Tk(1166,` → 24h`),Zg()()()()(),Jc(1167,`h3`,10),Tk(1168,`Métodos`),Zg(),Jc(1169,`table`,32)(1170,`tr`,14)(1171,`th`,33)(1172,`div`,16)(1173,`h4`)(1174,`span`,17),Tk(1175,` showAdditionalHelp `),Zg()()()()(),Jc(1176,`tr`,21)(1177,`td`,21)(1178,`p`),Tk(1179,`Método que exibe `),Jc(1180,`code`),Tk(1181,`p-helper`),Zg(),Tk(1182,` ou executa a ação definida em `),Jc(1183,`code`),Tk(1184,`p-helper{eventOnClick}`),Zg(),Tk(1185,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1186,`code`),Tk(1187,`p-keydown`),Zg(),Tk(1188,`.`),Zg(),Jc(1189,`blockquote`)(1190,`p`),Tk(1191,`Exibe ou oculta o conteúdo do componente `),Jc(1192,`code`),Tk(1193,`po-helper`),Zg(),Tk(1194,` quando o componente estiver com foco.`),Zg()(),Jc(1195,`pre`)(1196,`code`),Tk(1197,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),Zg()(),Jc(1198,`pre`)(1199,`code`),Tk(1200,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1201,`br`),Zg())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function ze(l,Ne){if(l&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-datetimepicker-basic-view`)(2,`sample-po-datetimepicker-labs-view`)(3,`sample-po-datetimepicker-12h-seconds-view`)(4,`sample-po-datetimepicker-scheduling-view`),Zg()}if(l&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var Ae=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Datetimepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ze,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-datetimepicker-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Se,be,fe,ve,ye],encapsulation:2,changeDetection:1})}return l})()}];var ke=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[WV.forChild(Ae),WV]})}return l})();var Ct=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[M,ke]})}return l})();export{Ct as DocPoDatetimepickerModule};