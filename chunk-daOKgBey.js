import{m as P,p as M}from"./main-DMA7KEAR.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Gt as cne,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,k as Goe,li as Qc,na as de,oo as wg,pn as lb,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,n){r&1&&vu(0,`po-timepicker`,0)},dependencies:[cne],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-timepicker-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Timepicker Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-timepicker-basic`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:lb.HourMinute},{label:`HourMinuteSecond`,value:lb.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let s=YO();Qc(0,`po-timepicker`,1),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.timepicker,o)||(n.timepicker=o),U_(o)}),vt(`p-blur`,function(){return n.changeEvent(`p-blur`)})(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.label,o)||(n.label=o),U_(o)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.help,o)||(n.help=o),U_(o)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.helper,o)||(n.helper=o),U_(o)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.placeholder,o)||(n.placeholder=o),U_(o)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.errorPattern,o)||(n.errorPattern=o),U_(o)}),Kg(),Qc(13,`po-timepicker`,10),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.minTime,o)||(n.minTime=o),U_(o)}),Kg(),Qc(14,`po-timepicker`,11),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.maxTime,o)||(n.maxTime=o),U_(o)}),Kg(),Qc(15,`po-number`,12),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.minuteInterval,o)||(n.minuteInterval=o),U_(o)}),Kg(),Qc(16,`po-number`,13),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.secondInterval,o)||(n.secondInterval=o),U_(o)}),Kg(),Qc(17,`po-checkbox-group`,14),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.properties,o)||(n.properties=o),U_(o)}),Kg(),Qc(18,`po-radio-group`,15),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.locale,o)||(n.locale=o),U_(o)}),Kg(),Qc(19,`po-radio-group`,16),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.format,o)||(n.format=o),U_(o)}),Kg(),Qc(20,`po-radio-group`,17),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.modelFormat,o)||(n.modelFormat=o),U_(o)}),Kg(),Qc(21,`po-radio-group`,18),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.size,o)||(n.size=o),U_(o)}),Kg(),Qc(22,`div`,2)(23,`po-button`,19),vt(`p-click`,function(){return n.restore()}),Kg()()()}r&2&&(Yb(`ngModel`,n.timepicker),Rb(`p-clean`,n.properties.includes(`clean`))(`p-disabled`,n.properties.includes(`disabled`))(`p-error-pattern`,n.errorPattern)(`p-format`,n.format)(`p-helper`,n.helper)(`p-help`,n.help)(`p-model-format`,n.modelFormat)(`p-label`,n.label)(`p-locale`,n.locale)(`p-max-time`,n.maxTime)(`p-min-time`,n.minTime)(`p-minute-interval`,n.minuteInterval)(`p-second-interval`,n.secondInterval)(`p-no-autocomplete`,n.properties?.includes(`noAutocomplete`))(`p-optional`,n.properties.includes(`optional`))(`p-placeholder`,n.placeholder)(`p-readonly`,n.properties.includes(`readonly`))(`p-required`,n.properties.includes(`required`))(`p-required-field-error-message`,n.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-show-seconds`,n.properties.includes(`showSeconds`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-loading`,n.properties.includes(`loading`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-append-in-body`,n.properties?.includes(`appendInBody`))(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-size`,n.size),W0(),wg(3),Rb(`p-value`,n.timepicker),wg(),Rb(`p-value`,n.event),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helper),W0(),wg(),Yb(`ngModel`,n.placeholder),W0(),wg(),Yb(`ngModel`,n.errorPattern),W0(),wg(),Yb(`ngModel`,n.minTime),W0(),wg(),Yb(`ngModel`,n.maxTime),W0(),wg(),Yb(`ngModel`,n.minuteInterval),W0(),wg(),Yb(`ngModel`,n.secondInterval),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.locale),Rb(`p-options`,n.localeOptions),W0(),wg(),Yb(`ngModel`,n.format),Rb(`p-options`,n.formatOptions),W0(),wg(),Yb(`ngModel`,n.modelFormat),Rb(`p-options`,n.modelFormatOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,cne,Joe],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-timepicker-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Timepicker Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-timepicker
  class="po-sm-12"
  name="timepicker"
  [(ngModel)]="timepicker"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-helper]="helper"
  [p-help]="help"
  [p-model-format]="modelFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-max-time]="maxTime"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-second-interval]="secondInterval"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-append-in-body]="properties?.includes('appendInBody')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-timepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="timepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helper" [(ngModel)]="helper" p-clean p-label="Helper"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
  </po-number>

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
    name="modelFormat"
    [(ngModel)]="modelFormat"
    p-columns="4"
    p-label="Model Format"
    [p-options]="modelFormatOptions"
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoTimepickerModelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-labs',
  templateUrl: './sample-po-timepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerLabsComponent implements OnInit {
  timepicker: string;
  event: string;
  errorPattern: string;
  format: string;
  help: string;
  helper: string;
  modelFormat: string;
  label: string;
  locale: string;
  maxTime: string;
  minTime: string;
  minuteInterval: number;
  secondInterval: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly modelFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'HourMinute', value: PoTimepickerModelFormat.HourMinute },
    { label: 'HourMinuteSecond', value: PoTimepickerModelFormat.HourMinuteSecond }
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
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'appendInBody', label: 'Append In Body' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: '24', value: '24' },
    { label: '12', value: '12' }
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
    this.timepicker = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.helper = undefined;
    this.modelFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.maxTime = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.secondInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.size = 'medium';
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-timepicker-labs`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,De,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return l})();var Le=[`formScheduling`];var fe=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);formScheduling;title=``;date=/* @__PURE__ */ new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let m=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:m,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(m){return m&&m.slice(0,10)}getRoomLabel(){let m=this.roomOptions.find(r=>r.value===this.room);return m?m.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,n){if(r&1&&Du(Le,7),r&2){let s;No(s=xo())&&(n.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,n){if(r&1){let s=YO();Qc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.title,o)||(n.title=o),U_(o)}),Kg(),Qc(4,`po-datepicker`,3),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.date,o)||(n.date=o),U_(o)}),Kg()(),Qc(5,`div`,1)(6,`po-timepicker`,4),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.startTime,o)||(n.startTime=o),U_(o)}),Kg(),Qc(7,`po-timepicker`,5),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.endTime,o)||(n.endTime=o),U_(o)}),Kg(),Qc(8,`po-select`,6),z0(),Kb(`ngModelChange`,function(o){return B_(s),Tk(n.room,o)||(n.room=o),U_(o)}),Kg()(),Qc(9,`div`,1)(10,`po-button`,7),vt(`p-click`,function(){return n.schedule()}),Kg()()()}if(r&2){let s=ik(1);wg(3),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.date),W0(),wg(2),Yb(`ngModel`,n.startTime),Rb(`p-show-required`,!0),W0(),wg(),Yb(`ngModel`,n.endTime),Rb(`p-show-required`,!0),W0(),wg(),Yb(`ngModel`,n.room),Rb(`p-options`,n.roomOptions),W0(),wg(2),Rb(`p-disabled`,s.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,tie,j4,Koe,cne],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-timepicker-scheduling`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Timepicker - Scheduling`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="title"
      [(ngModel)]="title"
      p-label="T\xEDtulo do agendamento"
      p-placeholder="Ex: Reuni\xE3o de planejamento"
      p-required
    >
    </po-input>

    <po-datepicker
      class="po-md-6"
      name="date"
      [(ngModel)]="date"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Data"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-timepicker
      class="po-md-4"
      name="startTime"
      [(ngModel)]="startTime"
      p-label="Hor\xE1rio de in\xEDcio"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-timepicker
      class="po-md-4"
      name="endTime"
      [(ngModel)]="endTime"
      p-label="Hor\xE1rio de t\xE9rmino"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-select class="po-md-4" name="room" [(ngModel)]="room" p-label="Sala" p-required [p-options]="roomOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="scheduleButton"
      p-label="Agendar"
      [p-disabled]="formScheduling.invalid"
      (p-click)="schedule()"
    >
    </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-scheduling',
  templateUrl: './sample-po-timepicker-scheduling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  title: string = '';
  date: string = <any>new Date();
  startTime: string = '';
  endTime: string = '';
  room: string = '';

  public readonly roomOptions: Array<PoSelectOption> = [
    { value: 'sala-a', label: 'Sala A' },
    { value: 'sala-b', label: 'Sala B' },
    { value: 'sala-c', label: 'Sala C' },
    { value: 'auditorio', label: 'Audit\xF3rio' }
  ];

  schedule() {
    const message = \`Deseja confirmar o agendamento "\${this.title}" no dia \${this.getFormatedDate(this.date)} das \${this.startTime} \xE0s \${this.endTime} na \${this.getRoomLabel()}?\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Agendamento confirmado com sucesso!');

        this.formScheduling.reset({
          date: '',
          room: ''
        });
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }

  private getRoomLabel(): string {
    const option = this.roomOptions.find(o => o.value === this.room);
    return option ? option.label : this.room;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-timepicker-scheduling`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,qe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{poNotification=p(Ru);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`po-timepicker`,1),z0(),Kb(`ngModelChange`,function(d){return Tk(n.openTime,d)||(n.openTime=d),d}),Kg(),Qc(2,`po-timepicker`,2),z0(),Kb(`ngModelChange`,function(d){return Tk(n.closeTime,d)||(n.closeTime=d),d}),Kg()(),Qc(3,`div`,0)(4,`po-timepicker`,3),z0(),Kb(`ngModelChange`,function(d){return Tk(n.lunchStart,d)||(n.lunchStart=d),d}),Kg(),Qc(5,`po-timepicker`,4),z0(),Kb(`ngModelChange`,function(d){return Tk(n.lunchEnd,d)||(n.lunchEnd=d),d}),Kg()(),Qc(6,`div`,0)(7,`po-button`,5),vt(`p-click`,function(){return n.save()}),Kg()()),r&2&&(wg(),Yb(`ngModel`,n.openTime),Rb(`p-max-time`,n.lunchStart)(`p-minute-interval`,30),W0(),wg(),Yb(`ngModel`,n.closeTime),Rb(`p-min-time`,n.lunchEnd)(`p-minute-interval`,30),W0(),wg(2),Yb(`ngModel`,n.lunchStart),Rb(`p-min-time`,n.openTime)(`p-max-time`,n.lunchEnd)(`p-minute-interval`,15),W0(),wg(),Yb(`ngModel`,n.lunchEnd),Rb(`p-min-time`,n.lunchStart)(`p-max-time`,n.closeTime)(`p-minute-interval`,15),W0())},dependencies:[MZ,QL,oi,cne],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-timepicker-business-hours`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Timepicker - Business Hours`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="openTime"
    [(ngModel)]="openTime"
    p-label="Abertura"
    p-clean
    p-min-time="06:00"
    [p-max-time]="lunchStart"
    [p-minute-interval]="30"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="closeTime"
    [(ngModel)]="closeTime"
    p-label="Fechamento"
    p-clean
    [p-min-time]="lunchEnd"
    p-max-time="23:00"
    [p-minute-interval]="30"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="lunchStart"
    [(ngModel)]="lunchStart"
    p-label="In\xEDcio do almo\xE7o"
    p-clean
    [p-min-time]="openTime"
    [p-max-time]="lunchEnd"
    [p-minute-interval]="15"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="lunchEnd"
    [(ngModel)]="lunchEnd"
    p-label="Fim do almo\xE7o"
    p-clean
    [p-min-time]="lunchStart"
    [p-max-time]="closeTime"
    [p-minute-interval]="15"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-button class="po-md-3 po-offset-md-9" p-label="Salvar" p-kind="primary" (p-click)="save()"> </po-button>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-business-hours',
  templateUrl: './sample-po-timepicker-business-hours.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBusinessHoursComponent {
  private poNotification = inject(PoNotificationService);

  openTime: string = '08:00';
  closeTime: string = '18:00';
  lunchStart: string = '12:00';
  lunchEnd: string = '13:00';

  save() {
    this.poNotification.success(
      \`Hor\xE1rio comercial salvo: \${this.openTime} - \${this.closeTime} (Almo\xE7o: \${this.lunchStart} - \${this.lunchEnd})\`
    );
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-timepicker-business-hours`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ve,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{router=p(An);openDoc(m){this.router.navigate([`/documentation`,m],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-timepicker-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-error-pattern`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-locale`,1,`docs-api-properties-row`],[`id`,`prop-p-max-time`,1,`docs-api-properties-row`],[`id`,`prop-p-min-time`,1,`docs-api-properties-row`],[`id`,`prop-p-minute-interval`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-model-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-second-interval`,1,`docs-api-properties-row`],[`id`,`prop-p-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-seconds`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`enum-po-timepicker-model-format`,1,`docs-api-class-name`],[`id`,`enum-po-timepicker-model-format-hour-minute`,1,`docs-api-properties-row`],[`id`,`enum-po-timepicker-model-format-hour-minute-second`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoTimepickerComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O `),Qc(24,`code`),Sk(25,`po-timepicker`),Kg(),Sk(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),Kg(),Qc(27,`p`),Sk(28,`O formato de exibição do horário pode ser de 24 horas (`),Qc(29,`code`),Sk(30,`HH:mm`),Kg(),Sk(31,`) ou 12 horas (`),Qc(32,`code`),Sk(33,`hh:mm AM/PM`),Kg(),Sk(34,`),
e opcionalmente incluir segundos (`),Qc(35,`code`),Sk(36,`HH:mm:ss`),Kg(),Sk(37,`).`),Kg(),Qc(38,`p`),Sk(39,`O valor de saída segue o formato ISO 8601 para horários (`),Qc(40,`code`),Sk(41,`HH:mm`),Kg(),Sk(42,` ou `),Qc(43,`code`),Sk(44,`HH:mm:ss`),Kg(),Sk(45,`).`),Kg(),Qc(46,`p`)(47,`strong`),Sk(48,`Importante:`),Kg()(),Qc(49,`ul`)(50,`li`),Sk(51,`Caso o valor digitado seja inválido, o `),Qc(52,`code`),Sk(53,`model`),Kg(),Sk(54,` receberá uma string vazia.`),Kg(),Qc(55,`li`),Sk(56,`Caso o `),Qc(57,`code`),Sk(58,`input`),Kg(),Sk(59,` esteja passando um `),Qc(60,`code`),Sk(61,`[(ngModel)]`),Kg(),Sk(62,`, mas não tenha um `),Qc(63,`code`),Sk(64,`name`),Kg(),Sk(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Qc(66,`code`),Sk(67,`[ngModelOptions]="{standalone: true}"`),Kg(),Sk(68,`).`),Kg()(),Qc(69,`blockquote`)(70,`p`),Sk(71,`Não esqueça de importar o `),Qc(72,`code`),Sk(73,`FormsModule`),Kg(),Sk(74,` em seu módulo, tal como para utilizar o `),Qc(75,`code`),Sk(76,`input default`),Kg(),Sk(77,`.`),Kg()(),Qc(78,`h4`),Sk(79,`Tokens customizáveis`),Kg(),Qc(80,`p`),Sk(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Qc(82,`code`),Sk(83,`.po-input`),Kg()(),Qc(84,`blockquote`)(85,`p`),Sk(86,`Para maiores informações, acesse o guia `),Qc(87,`a`,6),Sk(88,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(89,`.`),Kg()(),Qc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),Sk(94,`Propriedade`),Kg(),Qc(95,`th`),Sk(96,`Descrição`),Kg(),Qc(97,`th`),Sk(98,`Valor Padrão`),Kg()()(),Qc(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),Sk(103,`Default Values`),Kg()(),vu(104,`td`)(105,`td`),Kg(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--font-family`),Kg()(),Qc(110,`td`),Sk(111,`Família tipográfica usada`),Kg(),Qc(112,`td`)(113,`code`),Sk(114,`var(--font-family-theme)`),Kg()()(),Qc(115,`tr`)(116,`td`)(117,`code`),Sk(118,`--font-size`),Kg()(),Qc(119,`td`),Sk(120,`Tamanho da fonte`),Kg(),Qc(121,`td`)(122,`code`),Sk(123,`var(--font-size-default)`),Kg()()(),Qc(124,`tr`)(125,`td`)(126,`code`),Sk(127,`--text-color-placeholder`),Kg()(),Qc(128,`td`),Sk(129,`Cor do texto placeholder`),Kg(),Qc(130,`td`)(131,`code`),Sk(132,`var(--color-neutral-light-30)`),Kg()()(),Qc(133,`tr`)(134,`td`)(135,`code`),Sk(136,`--color`),Kg()(),Qc(137,`td`),Sk(138,`Cor principal do timepicker`),Kg(),Qc(139,`td`)(140,`code`),Sk(141,`var(--color-neutral-dark-70)`),Kg()()(),Qc(142,`tr`)(143,`td`)(144,`code`),Sk(145,`--background`),Kg()(),Qc(146,`td`),Sk(147,`Cor de background`),Kg(),Qc(148,`td`)(149,`code`),Sk(150,`var(--color-neutral-light-05)`),Kg()()(),Qc(151,`tr`)(152,`td`)(153,`code`),Sk(154,`--padding`),Kg()(),Qc(155,`td`),Sk(156,`Preenchimento`),Kg(),Qc(157,`td`)(158,`code`),Sk(159,`0 0.5rem`),Kg()()(),Qc(160,`tr`)(161,`td`)(162,`code`),Sk(163,`--text-color`),Kg()(),Qc(164,`td`),Sk(165,`Cor do texto`),Kg(),Qc(166,`td`)(167,`code`),Sk(168,`var(--color-neutral-dark-90)`),Kg()()(),Qc(169,`tr`)(170,`td`)(171,`code`),Sk(172,`--field-container-title-justify`),Kg()(),Qc(173,`td`),Sk(174,`Alinhamento horizontal do título (`),Qc(175,`code`),Sk(176,`justify-content`),Kg(),Sk(177,`)`),Kg(),Qc(178,`td`)(179,`code`),Sk(180,`space-between`),Kg()()(),Qc(181,`tr`)(182,`td`)(183,`code`),Sk(184,`--field-container-title-flex`),Kg()(),Qc(185,`td`),Sk(186,`Flex do título (`),Qc(187,`code`),Sk(188,`flex`),Kg(),Sk(189,`)`),Kg(),Qc(190,`td`)(191,`code`),Sk(192,`1 auto`),Kg()()(),Qc(193,`tr`)(194,`td`)(195,`strong`),Sk(196,`Hover`),Kg()(),vu(197,`td`)(198,`td`),Kg(),Qc(199,`tr`)(200,`td`)(201,`code`),Sk(202,`--color-hover`),Kg()(),Qc(203,`td`),Sk(204,`Cor principal no estado hover`),Kg(),Qc(205,`td`)(206,`code`),Sk(207,`var(--color-brand-01-dark)`),Kg()()(),Qc(208,`tr`)(209,`td`)(210,`code`),Sk(211,`--background-hover`),Kg()(),Qc(212,`td`),Sk(213,`Cor de background no estado hover`),Kg(),Qc(214,`td`)(215,`code`),Sk(216,`var(--color-brand-01-lightest)`),Kg()()(),Qc(217,`tr`)(218,`td`)(219,`strong`),Sk(220,`Focused`),Kg()(),vu(221,`td`)(222,`td`),Kg(),Qc(223,`tr`)(224,`td`)(225,`code`),Sk(226,`--color-focused`),Kg()(),Qc(227,`td`),Sk(228,`Cor principal no estado de focus`),Kg(),Qc(229,`td`)(230,`code`),Sk(231,`var(--color-action-default)`),Kg()()(),Qc(232,`tr`)(233,`td`)(234,`code`),Sk(235,`--outline-color-focused`),Kg()(),Qc(236,`td`),Sk(237,`Cor do outline do estado de focus`),Kg(),Qc(238,`td`)(239,`code`),Sk(240,`var(--color-action-focus)`),Kg()()(),Qc(241,`tr`)(242,`td`)(243,`strong`),Sk(244,`Disabled`),Kg()(),vu(245,`td`)(246,`td`),Kg(),Qc(247,`tr`)(248,`td`)(249,`code`),Sk(250,`--color-disabled`),Kg()(),Qc(251,`td`),Sk(252,`Cor principal no estado disabled`),Kg(),Qc(253,`td`)(254,`code`),Sk(255,`var(--color-neutral-light-30)`),Kg()()(),Qc(256,`tr`)(257,`td`)(258,`code`),Sk(259,`--background-disabled`),Kg()(),Qc(260,`td`),Sk(261,`Cor de background no estado disabled`),Kg(),Qc(262,`td`)(263,`code`),Sk(264,`var(--color-neutral-light-20)`),Kg()()(),Qc(265,`tr`)(266,`td`)(267,`code`),Sk(268,`--text-color-disabled`),Kg()(),Qc(269,`td`),Sk(270,`Cor do texto no estado disabled`),Kg(),Qc(271,`td`)(272,`code`),Sk(273,`var(--color-neutral-dark-70)`),Kg()()()()()(),Qc(274,`div`,7)(275,`h4`,8),Sk(276,`Seletor`),Kg(),Qc(277,`pre`,9),Sk(278,`<po-timepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="PoTimerFormat"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-locale="string"
    p-max-time="string"
    p-min-time="string"
    p-minute-interval="number"
    p-model-format="PoTimepickerModelFormat"
    name="string"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string" >
</po-timepicker>
`),Kg()(),Qc(279,`h4`,10),Sk(280,`Propriedades`),Kg(),Qc(281,`table`,11)(282,`tr`,12)(283,`th`,13),Sk(284,`Nome`),Kg(),Qc(285,`th`,13),Sk(286,`Tipo`),Kg(),Qc(287,`th`,13),Sk(288,`Padrão`),Kg(),Qc(289,`th`,13),Sk(290,`Descrição`),Kg()(),Qc(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),Sk(295,` p-append-in-body`),vu(296,`br`),Kg()()(),Qc(297,`td`,18)(298,`code`,19),Sk(299,`boolean`),Kg()(),Qc(300,`td`,20)(301,`p`)(302,`code`),Sk(303,`false`),Kg()()(),Qc(304,`td`,21)(305,`em`)(306,`strong`),Sk(307,`(opcional)`),Kg()(),Qc(308,`p`),Sk(309,`Define que o painel do timer será incluído no body da página.`),Kg()()(),Qc(310,`tr`,22)(311,`td`,15)(312,`div`,16)(313,`span`,17),Sk(314,` p-auto-focus`),vu(315,`br`),Kg()()(),Qc(316,`td`,18)(317,`code`,19),Sk(318,`boolean`),Kg()(),Qc(319,`td`,20)(320,`p`)(321,`code`),Sk(322,`false`),Kg()()(),Qc(323,`td`,21)(324,`em`)(325,`strong`),Sk(326,`(opcional)`),Kg()(),Qc(327,`p`),Sk(328,`Aplica foco no elemento ao ser iniciado.`),Kg()()(),Qc(329,`tr`,23)(330,`td`,15)(331,`div`,24)(332,`span`,25),Sk(333,` (p-change-model)`),vu(334,`br`),Kg()()(),Qc(335,`td`,18)(336,`code`,26),Sk(337,`EventEmitter`),Kg()(),Qc(338,`td`,20),Sk(339,`-`),Kg(),Qc(340,`td`,21)(341,`em`)(342,`strong`),Sk(343,`(opcional)`),Kg()(),Qc(344,`p`),Sk(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(346,`code`),Sk(347,`setValue`),Kg(),Sk(348,`, `),Qc(349,`code`),Sk(350,`patchValue`),Kg(),Sk(351,`, carregamento assíncrono).`),Kg(),Qc(352,`p`),Sk(353,`Diferentemente do `),Qc(354,`code`),Sk(355,`p-change`),Kg(),Sk(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(357,`code`),Sk(358,`p-change-model`),Kg(),Sk(359,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(360,`p`),Sk(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(362,`tr`,27)(363,`td`,15)(364,`div`,16)(365,`span`,17),Sk(366,`p-clean`),vu(367,`br`),Kg()()(),Qc(368,`td`,18)(369,`code`,19),Sk(370,`boolean`),Kg()(),Qc(371,`td`,20),Sk(372,`-`),Kg(),Qc(373,`td`,21)(374,`em`)(375,`strong`),Sk(376,`(opcional)`),Kg()(),Qc(377,`p`),Sk(378,`Habilita ação para limpar o campo.`),Kg()()(),Qc(379,`tr`,28)(380,`td`,15)(381,`div`,16)(382,`span`,17),Sk(383,` p-compact-label`),vu(384,`br`),Kg()()(),Qc(385,`td`,18)(386,`code`,19),Sk(387,`boolean`),Kg()(),Qc(388,`td`,20)(389,`p`)(390,`code`),Sk(391,`false`),Kg()()(),Qc(392,`td`,21)(393,`em`)(394,`strong`),Sk(395,`(opcional)`),Kg()(),Qc(396,`p`),Sk(397,`Define se o título do campo será exibido de forma compacta.`),Kg()()(),Qc(398,`tr`,29)(399,`td`,15)(400,`div`,16)(401,`span`,17),Sk(402,`p-disabled`),vu(403,`br`),Kg()()(),Qc(404,`td`,18)(405,`code`,19),Sk(406,`boolean`),Kg()(),Qc(407,`td`,20),Sk(408,`-`),Kg(),Qc(409,`td`,21)(410,`em`)(411,`strong`),Sk(412,`(opcional)`),Kg()(),Qc(413,`p`),Sk(414,`Desabilita o campo.`),Kg()()(),Qc(415,`tr`,30)(416,`td`,15)(417,`div`,16)(418,`span`,17),Sk(419,` p-error-limit`),vu(420,`br`),Kg()()(),Qc(421,`td`,18)(422,`code`,19),Sk(423,`boolean`),Kg()(),Qc(424,`td`,20)(425,`p`)(426,`code`),Sk(427,`false`),Kg()()(),Qc(428,`td`,21)(429,`em`)(430,`strong`),Sk(431,`(opcional)`),Kg()(),Qc(432,`p`),Sk(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg()()(),Qc(434,`tr`,31)(435,`td`,15)(436,`div`,16)(437,`span`,17),Sk(438,` p-error-pattern`),vu(439,`br`),Kg()()(),Qc(440,`td`,18)(441,`code`,32),Sk(442,`string`),Kg()(),Qc(443,`td`,20),Sk(444,`-`),Kg(),Qc(445,`td`,21)(446,`em`)(447,`strong`),Sk(448,`(opcional)`),Kg()(),Qc(449,`p`),Sk(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),Kg(),Qc(451,`blockquote`)(452,`p`),Sk(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),Kg()()()(),Qc(454,`tr`,33)(455,`td`,15)(456,`div`,16)(457,`span`,17),Sk(458,` p-format`),vu(459,`br`),Kg()()(),Qc(460,`td`,18)(461,`code`,34),Sk(462,`PoTimerFormat`),Kg()(),Qc(463,`td`,20)(464,`p`)(465,`code`),Sk(466,`24`),Kg()()(),Qc(467,`td`,21)(468,`em`)(469,`strong`),Sk(470,`(opcional)`),Kg()(),Qc(471,`p`),Sk(472,`Define o formato de exibição do timer.`),Kg(),Qc(473,`p`),Sk(474,`Valores válidos:`),Kg(),Qc(475,`ul`)(476,`li`)(477,`code`),Sk(478,`24`),Kg(),Sk(479,`: formato de 24 horas (padrão)`),Kg(),Qc(480,`li`)(481,`code`),Sk(482,`12`),Kg(),Sk(483,`: formato de 12 horas com indicador AM/PM`),Kg()()()(),Qc(484,`tr`,35)(485,`td`,15)(486,`div`,16)(487,`span`,17),Sk(488,` p-help`),vu(489,`br`),Kg()()(),Qc(490,`td`,18)(491,`code`,32),Sk(492,`string`),Kg()(),Qc(493,`td`,20),Sk(494,`-`),Kg(),Qc(495,`td`,21)(496,`em`)(497,`strong`),Sk(498,`(opcional)`),Kg()(),Qc(499,`p`),Sk(500,`Texto de apoio do campo.`),Kg()()(),Qc(501,`tr`,36)(502,`td`,15)(503,`div`,24)(504,`span`,25),Sk(505,` (p-keydown)`),vu(506,`br`),Kg()()(),Qc(507,`td`,18)(508,`code`,26),Sk(509,`EventEmitter`),Kg()(),Qc(510,`td`,20),Sk(511,`-`),Kg(),Qc(512,`td`,21)(513,`p`),Sk(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),Kg()()(),Qc(515,`tr`,37)(516,`td`,15)(517,`div`,16)(518,`span`,17),Sk(519,` p-label`),vu(520,`br`),Kg()()(),Qc(521,`td`,18)(522,`code`,32),Sk(523,`string`),Kg()(),Qc(524,`td`,20),Sk(525,`-`),Kg(),Qc(526,`td`,21)(527,`em`)(528,`strong`),Sk(529,`(opcional)`),Kg()(),Qc(530,`p`),Sk(531,`Rótulo do campo.`),Kg()()(),Qc(532,`tr`,38)(533,`td`,15)(534,`div`,16)(535,`span`,17),Sk(536,` p-label-text-wrap`),vu(537,`br`),Kg()()(),Qc(538,`td`,18)(539,`code`,19),Sk(540,`boolean`),Kg()(),Qc(541,`td`,20)(542,`p`)(543,`code`),Sk(544,`false`),Kg()()(),Qc(545,`td`,21)(546,`em`)(547,`strong`),Sk(548,`(opcional)`),Kg()(),Qc(549,`p`),Sk(550,`Habilita a quebra automática do texto da propriedade `),Qc(551,`code`),Sk(552,`p-label`),Kg(),Sk(553,`.`),Kg()()(),Qc(554,`tr`,39)(555,`td`,15)(556,`div`,16)(557,`span`,17),Sk(558,` p-loading`),vu(559,`br`),Kg()()(),Qc(560,`td`,18)(561,`code`,19),Sk(562,`boolean`),Kg()(),Qc(563,`td`,20)(564,`p`)(565,`code`),Sk(566,`false`),Kg()()(),Qc(567,`td`,21)(568,`em`)(569,`strong`),Sk(570,`(opcional)`),Kg()(),Qc(571,`p`),Sk(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(573,`tr`,40)(574,`td`,15)(575,`div`,16)(576,`span`,17),Sk(577,` p-locale`),vu(578,`br`),Kg()()(),Qc(579,`td`,18)(580,`code`,32),Sk(581,`string`),Kg()(),Qc(582,`td`,20),Sk(583,`-`),Kg(),Qc(584,`td`,21)(585,`em`)(586,`strong`),Sk(587,`(opcional)`),Kg()(),Qc(588,`p`),Sk(589,`Idioma do componente.`),Kg()()(),Qc(590,`tr`,41)(591,`td`,15)(592,`div`,16)(593,`span`,17),Sk(594,` p-max-time`),vu(595,`br`),Kg()()(),Qc(596,`td`,18)(597,`code`,32),Sk(598,`string`),Kg()(),Qc(599,`td`,20),Sk(600,`-`),Kg(),Qc(601,`td`,21)(602,`em`)(603,`strong`),Sk(604,`(opcional)`),Kg()(),Qc(605,`p`),Sk(606,`Define o horário máximo permitido. Formato: `),Qc(607,`code`),Sk(608,`HH:mm`),Kg(),Sk(609,` ou `),Qc(610,`code`),Sk(611,`HH:mm:ss`),Kg(),Sk(612,`.`),Kg()()(),Qc(613,`tr`,42)(614,`td`,15)(615,`div`,16)(616,`span`,17),Sk(617,` p-min-time`),vu(618,`br`),Kg()()(),Qc(619,`td`,18)(620,`code`,32),Sk(621,`string`),Kg()(),Qc(622,`td`,20),Sk(623,`-`),Kg(),Qc(624,`td`,21)(625,`em`)(626,`strong`),Sk(627,`(opcional)`),Kg()(),Qc(628,`p`),Sk(629,`Define o horário mínimo permitido. Formato: `),Qc(630,`code`),Sk(631,`HH:mm`),Kg(),Sk(632,` ou `),Qc(633,`code`),Sk(634,`HH:mm:ss`),Kg(),Sk(635,`.`),Kg()()(),Qc(636,`tr`,43)(637,`td`,15)(638,`div`,16)(639,`span`,17),Sk(640,` p-minute-interval`),vu(641,`br`),Kg()()(),Qc(642,`td`,18)(643,`code`,44),Sk(644,`number`),Kg()(),Qc(645,`td`,20)(646,`p`)(647,`code`),Sk(648,`5`),Kg()()(),Qc(649,`td`,21)(650,`em`)(651,`strong`),Sk(652,`(opcional)`),Kg()(),Qc(653,`p`),Sk(654,`Define o intervalo entre os minutos exibidos no painel.`),Kg()()(),Qc(655,`tr`,45)(656,`td`,15)(657,`div`,16)(658,`span`,17),Sk(659,` p-model-format`),vu(660,`br`),Kg()()(),Qc(661,`td`,18)(662,`code`,46),Sk(663,`PoTimepickerModelFormat`),Kg()(),Qc(664,`td`,20),Sk(665,`-`),Kg(),Qc(666,`td`,21)(667,`em`)(668,`strong`),Sk(669,`(opcional)`),Kg()(),Qc(670,`p`),Sk(671,`Padrão de formatação para saída do `),Qc(672,`em`),Sk(673,`model`),Kg(),Sk(674,`.`),Kg(),Qc(675,`blockquote`)(676,`p`),Sk(677,`Veja os valores válidos no `),Qc(678,`em`),Sk(679,`enum`),Kg(),Qc(680,`code`),Sk(681,`PoTimepickerModelFormat`),Kg(),Sk(682,`.`),Kg()()()(),Qc(683,`tr`,47)(684,`td`,15)(685,`div`,16)(686,`span`,17),Sk(687,` name`),vu(688,`br`),Kg()()(),Qc(689,`td`,18)(690,`code`,32),Sk(691,`string`),Kg()(),Qc(692,`td`,20),Sk(693,`-`),Kg(),Qc(694,`td`,21)(695,`p`),Sk(696,`Nome do componente.`),Kg()()(),Qc(697,`tr`,48)(698,`td`,15)(699,`div`,16)(700,`span`,17),Sk(701,` p-no-autocomplete`),vu(702,`br`),Kg()()(),Qc(703,`td`,18)(704,`code`,19),Sk(705,`boolean`),Kg()(),Qc(706,`td`,20)(707,`p`)(708,`code`),Sk(709,`false`),Kg()()(),Qc(710,`td`,21)(711,`em`)(712,`strong`),Sk(713,`(opcional)`),Kg()(),Qc(714,`p`),Sk(715,`Define a propriedade nativa `),Qc(716,`code`),Sk(717,`autocomplete`),Kg(),Sk(718,` do campo como `),Qc(719,`code`),Sk(720,`off`),Kg(),Sk(721,`.`),Kg()()(),Qc(722,`tr`,49)(723,`td`,15)(724,`div`,24)(725,`span`,25),Sk(726,` (p-blur)`),vu(727,`br`),Kg()()(),Qc(728,`td`,18)(729,`code`,26),Sk(730,`EventEmitter`),Kg()(),Qc(731,`td`,20),Sk(732,`-`),Kg(),Qc(733,`td`,21)(734,`p`),Sk(735,`Evento disparado ao sair do campo.`),Kg()()(),Qc(736,`tr`,50)(737,`td`,15)(738,`div`,24)(739,`span`,25),Sk(740,` (p-change)`),vu(741,`br`),Kg()()(),Qc(742,`td`,18)(743,`code`,26),Sk(744,`EventEmitter`),Kg()(),Qc(745,`td`,20),Sk(746,`-`),Kg(),Qc(747,`td`,21)(748,`p`),Sk(749,`Evento disparado ao alterar valor do campo.`),Kg()()(),Qc(750,`tr`,51)(751,`td`,15)(752,`div`,16)(753,`span`,17),Sk(754,` p-optional`),vu(755,`br`),Kg()()(),Qc(756,`td`,18)(757,`code`,19),Sk(758,`boolean`),Kg()(),Qc(759,`td`,20)(760,`p`)(761,`code`),Sk(762,`false`),Kg()()(),Qc(763,`td`,21)(764,`em`)(765,`strong`),Sk(766,`(opcional)`),Kg()(),Qc(767,`p`),Sk(768,`Define se a indicação de campo opcional será exibida.`),Kg()()(),Qc(769,`tr`,52)(770,`td`,15)(771,`div`,16)(772,`span`,17),Sk(773,` p-placeholder`),vu(774,`br`),Kg()()(),Qc(775,`td`,18)(776,`code`,32),Sk(777,`string`),Kg()(),Qc(778,`td`,20),Sk(779,`-`),Kg(),Qc(780,`td`,21)(781,`em`)(782,`strong`),Sk(783,`(opcional)`),Kg()(),Qc(784,`p`),Sk(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg(),Qc(786,`p`),Sk(787,`Para personalizar os segmentos, informe o valor no formato `),Qc(788,`code`),Sk(789,`HH:mm`),Kg(),Sk(790,` ou `),Qc(791,`code`),Sk(792,`HH:mm:ss`),Kg(),Sk(793,`.`),Kg()()(),Qc(794,`tr`,53)(795,`td`,15)(796,`div`,16)(797,`span`,17),Sk(798,` p-helper`),vu(799,`br`),Kg()()(),Qc(800,`td`,18)(801,`code`,54),Sk(802,`PoHelperOptions `),Kg(),Qc(803,`code`,32),Sk(804,` string`),Kg()(),Qc(805,`td`,20),Sk(806,`-`),Kg(),Qc(807,`td`,21)(808,`em`)(809,`strong`),Sk(810,`(opcional)`),Kg()(),Qc(811,`p`),Sk(812,`Define as opções do componente de ajuda (po-helper).`),Kg()()(),Qc(813,`tr`,55)(814,`td`,15)(815,`div`,16)(816,`span`,17),Sk(817,`p-readonly`),vu(818,`br`),Kg()()(),Qc(819,`td`,18)(820,`code`,19),Sk(821,`boolean`),Kg()(),Qc(822,`td`,20),Sk(823,`-`),Kg(),Qc(824,`td`,21)(825,`em`)(826,`strong`),Sk(827,`(opcional)`),Kg()(),Qc(828,`p`),Sk(829,`Torna o elemento somente leitura.`),Kg()()(),Qc(830,`tr`,56)(831,`td`,15)(832,`div`,16)(833,`span`,17),Sk(834,`p-required`),vu(835,`br`),Kg()()(),Qc(836,`td`,18)(837,`code`,19),Sk(838,`boolean`),Kg()(),Qc(839,`td`,20)(840,`p`)(841,`code`),Sk(842,`false`),Kg()()(),Qc(843,`td`,21)(844,`em`)(845,`strong`),Sk(846,`(opcional)`),Kg()(),Qc(847,`p`),Sk(848,`Define que o campo será obrigatório.`),Kg()()(),Qc(849,`tr`,57)(850,`td`,15)(851,`div`,16)(852,`span`,17),Sk(853,` p-second-interval`),vu(854,`br`),Kg()()(),Qc(855,`td`,18)(856,`code`,44),Sk(857,`number`),Kg()(),Qc(858,`td`,20)(859,`p`)(860,`code`),Sk(861,`1`),Kg()()(),Qc(862,`td`,21)(863,`em`)(864,`strong`),Sk(865,`(opcional)`),Kg()(),Qc(866,`p`),Sk(867,`Define o intervalo entre os segundos exibidos no painel.`),Kg()()(),Qc(868,`tr`,58)(869,`td`,15)(870,`div`,16)(871,`span`,17),Sk(872,` p-required-field-error-message`),vu(873,`br`),Kg()()(),Qc(874,`td`,18)(875,`code`,19),Sk(876,`boolean`),Kg()(),Qc(877,`td`,20)(878,`p`)(879,`code`),Sk(880,`false`),Kg()()(),Qc(881,`td`,21)(882,`em`)(883,`strong`),Sk(884,`(opcional)`),Kg()(),Qc(885,`p`),Sk(886,`Exibe a mensagem setada na propriedade `),Qc(887,`code`),Sk(888,`p-error-pattern`),Kg(),Sk(889,` se o campo estiver vazio e for requerido.`),Kg()()(),Qc(890,`tr`,59)(891,`td`,15)(892,`div`,16)(893,`span`,17),Sk(894,` p-show-required`),vu(895,`br`),Kg()()(),Qc(896,`td`,18)(897,`code`,19),Sk(898,`boolean`),Kg()(),Qc(899,`td`,20),Sk(900,`-`),Kg(),Qc(901,`td`,21)(902,`p`),Sk(903,`Define se a indicação de campo obrigatório será exibida.`),Kg()()(),Qc(904,`tr`,60)(905,`td`,15)(906,`div`,16)(907,`span`,17),Sk(908,` p-show-seconds`),vu(909,`br`),Kg()()(),Qc(910,`td`,18)(911,`code`,19),Sk(912,`boolean`),Kg()(),Qc(913,`td`,20)(914,`p`)(915,`code`),Sk(916,`false`),Kg()()(),Qc(917,`td`,21)(918,`em`)(919,`strong`),Sk(920,`(opcional)`),Kg()(),Qc(921,`p`),Sk(922,`Exibe a coluna de segundos no painel.`),Kg()()(),Qc(923,`tr`,61)(924,`td`,15)(925,`div`,16)(926,`span`,17),Sk(927,` p-size`),vu(928,`br`),Kg()()(),Qc(929,`td`,18)(930,`code`,32),Sk(931,`string`),Kg()(),Qc(932,`td`,20)(933,`p`)(934,`code`),Sk(935,`medium`),Kg()()(),Qc(936,`td`,21)(937,`em`)(938,`strong`),Sk(939,`(opcional)`),Kg()(),Qc(940,`p`),Sk(941,`Define o tamanho do componente:`),Kg(),Qc(942,`ul`)(943,`li`)(944,`code`),Sk(945,`small`),Kg(),Sk(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(947,`li`)(948,`code`),Sk(949,`medium`),Kg(),Sk(950,`: altura do input como 44px.`),Kg()()()()(),Qc(951,`h3`,10),Sk(952,`Métodos`),Kg(),Qc(953,`table`,62)(954,`tr`,63)(955,`th`,64)(956,`div`,16)(957,`h4`)(958,`span`,17),Sk(959,` focus `),Kg()()()()(),Qc(960,`tr`,21)(961,`td`,21)(962,`p`),Sk(963,`Função que atribui foco ao componente.`),Kg(),Qc(964,`p`),Sk(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(966,`pre`)(967,`code`),Sk(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),Kg()()()()(),vu(969,`br`),Qc(970,`table`,65)(971,`tr`,63)(972,`th`,64)(973,`div`,16)(974,`h4`)(975,`span`,17),Sk(976,` showAdditionalHelp `),Kg()()()()(),Qc(977,`tr`,21)(978,`td`,21)(979,`p`),Sk(980,`Método que exibe `),Qc(981,`code`),Sk(982,`p-helper`),Kg(),Sk(983,` ou executa a ação definida em `),Qc(984,`code`),Sk(985,`p-helper{eventOnClick}`),Kg(),Sk(986,` ou em `),Qc(987,`code`),Sk(988,`p-additionalHelp`),Kg(),Sk(989,`.`),Kg()()()(),vu(990,`br`),Qc(991,`h3`),Sk(992,`Enums`),Kg(),Qc(993,`h4`,66)(994,`code`,5),Sk(995,`PoTimepickerModelFormat`),Kg()(),Qc(996,`div`,2)(997,`p`)(998,`em`),Sk(999,`Enum`),Kg(),Sk(1e3,` que define o padrão de formatação do model de saída do timepicker.`),Kg()(),Qc(1001,`h4`,10),Sk(1002,`Propriedades`),Kg(),Qc(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),Sk(1006,`Nome`),Kg(),Qc(1007,`th`,13),Sk(1008,`Descrição`),Kg()(),Qc(1009,`tr`,67)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),Sk(1013,` HourMinute`),vu(1014,`br`),Kg()()(),Qc(1015,`td`,21)(1016,`p`),Sk(1017,`Formato básico `),Qc(1018,`code`),Sk(1019,`HH:mm`),Kg(),Sk(1020,` (ex: `),Qc(1021,`code`),Sk(1022,`14:30`),Kg(),Sk(1023,`).`),Kg()()(),Qc(1024,`tr`,68)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),Sk(1028,` HourMinuteSecond`),vu(1029,`br`),Kg()()(),Qc(1030,`td`,21)(1031,`p`),Sk(1032,`Formato com segundos `),Qc(1033,`code`),Sk(1034,`HH:mm:ss`),Kg(),Sk(1035,` (ex: `),Qc(1036,`code`),Sk(1037,`14:30:00`),Kg(),Sk(1038,`).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ae(l,ze){if(l&1){let m=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(m);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-timepicker-basic-view`)(2,`sample-po-timepicker-labs-view`)(3,`sample-po-timepicker-scheduling-view`)(4,`sample-po-timepicker-business-hours-view`),Kg()}if(l&2){let m=ek();Rb(`p-active`,m.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ae,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-timepicker-doc`),Kg()()()),r&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,he,Ee,ve,xe,ke],encapsulation:2,changeDetection:1})}return l})()}];var we=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[GV.forChild(Ne),GV]})}return l})();var Dt=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[M,we]})}return l})();export{Dt as DocPoTimepickerModule};