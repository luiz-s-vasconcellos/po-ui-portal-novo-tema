import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,On as sie,Or as H_,Ot as Zte,P as Joe,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Ut as cne,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,Zr as No,an as j4,cr as Bk,dn as lb,ea as ge$1,eo as xo,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jn as tie,jr as I,k as Goe,no as yk,nr as An,pr as Cu,qa as vt,qi as de,tr as Ak,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm}from"./chunk-BJubg121.js";var ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,i){r&1&&_u(0,`po-timepicker`,0)},dependencies:[cne],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Timepicker Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-timepicker-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,we,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:lb.HourMinute},{label:`HourMinuteSecond`,value:lb.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`po-timepicker`,1),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.timepicker,o)||(i.timepicker=o),$_(o)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.label,o)||(i.label=o),$_(o)}),Zg(),Jc(9,`po-input`,6),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.help,o)||(i.help=o),$_(o)}),Zg(),Jc(10,`po-input`,7),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.helper,o)||(i.helper=o),$_(o)}),Zg(),Jc(11,`po-input`,8),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.placeholder,o)||(i.placeholder=o),$_(o)}),Zg(),Jc(12,`po-input`,9),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.errorPattern,o)||(i.errorPattern=o),$_(o)}),Zg(),Jc(13,`po-timepicker`,10),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.minTime,o)||(i.minTime=o),$_(o)}),Zg(),Jc(14,`po-timepicker`,11),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.maxTime,o)||(i.maxTime=o),$_(o)}),Zg(),Jc(15,`po-number`,12),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.minuteInterval,o)||(i.minuteInterval=o),$_(o)}),Zg(),Jc(16,`po-number`,13),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.secondInterval,o)||(i.secondInterval=o),$_(o)}),Zg(),Jc(17,`po-checkbox-group`,14),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.properties,o)||(i.properties=o),$_(o)}),Zg(),Jc(18,`po-radio-group`,15),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.locale,o)||(i.locale=o),$_(o)}),Zg(),Jc(19,`po-radio-group`,16),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.format,o)||(i.format=o),$_(o)}),Zg(),Jc(20,`po-radio-group`,17),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.modelFormat,o)||(i.modelFormat=o),$_(o)}),Zg(),Jc(21,`po-radio-group`,18),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.size,o)||(i.size=o),$_(o)}),Zg(),Jc(22,`div`,2)(23,`po-button`,19),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Kb(`ngModel`,i.timepicker),Ab(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-helper`,i.helper)(`p-help`,i.help)(`p-model-format`,i.modelFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-max-time`,i.maxTime)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-second-interval`,i.secondInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-append-in-body`,i.properties?.includes(`appendInBody`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-size`,i.size),Y0(),Ig(3),Ab(`p-value`,i.timepicker),Ig(),Ab(`p-value`,i.event),Ig(4),Kb(`ngModel`,i.label),Y0(),Ig(),Kb(`ngModel`,i.help),Y0(),Ig(),Kb(`ngModel`,i.helper),Y0(),Ig(),Kb(`ngModel`,i.placeholder),Y0(),Ig(),Kb(`ngModel`,i.errorPattern),Y0(),Ig(),Kb(`ngModel`,i.minTime),Y0(),Ig(),Kb(`ngModel`,i.maxTime),Y0(),Ig(),Kb(`ngModel`,i.minuteInterval),Y0(),Ig(),Kb(`ngModel`,i.secondInterval),Y0(),Ig(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),Y0(),Ig(),Kb(`ngModel`,i.locale),Ab(`p-options`,i.localeOptions),Y0(),Ig(),Kb(`ngModel`,i.format),Ab(`p-options`,i.formatOptions),Y0(),Ig(),Kb(`ngModel`,i.modelFormat),Ab(`p-options`,i.modelFormatOptions),Y0(),Ig(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Goe,Zte,cne,Joe],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Timepicker Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-timepicker
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-timepicker-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,De,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return l})();var Le=[`formScheduling`];var fe=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);formScheduling;title=``;date=/* @__PURE__ */ new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let p=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:p,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(p){return p&&p.slice(0,10)}getRoomLabel(){let p=this.roomOptions.find(r=>r.value===this.room);return p?p.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Cu(Le,7),r&2){let s;No(s=xo())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.title,o)||(i.title=o),$_(o)}),Zg(),Jc(4,`po-datepicker`,3),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.date,o)||(i.date=o),$_(o)}),Zg()(),Jc(5,`div`,1)(6,`po-timepicker`,4),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.startTime,o)||(i.startTime=o),$_(o)}),Zg(),Jc(7,`po-timepicker`,5),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.endTime,o)||(i.endTime=o),$_(o)}),Zg(),Jc(8,`po-select`,6),W0(),Zb(`ngModelChange`,function(o){return H_(s),Ak(i.room,o)||(i.room=o),$_(o)}),Zg()(),Jc(9,`div`,1)(10,`po-button`,7),vt(`p-click`,function(){return i.schedule()}),Zg()()()}if(r&2){let s=sk(1);Ig(3),Kb(`ngModel`,i.title),Y0(),Ig(),Kb(`ngModel`,i.date),Y0(),Ig(2),Kb(`ngModel`,i.startTime),Ab(`p-show-required`,!0),Y0(),Ig(),Kb(`ngModel`,i.endTime),Ab(`p-show-required`,!0),Y0(),Ig(),Kb(`ngModel`,i.room),Ab(`p-options`,i.roomOptions),Y0(),Ig(2),Ab(`p-disabled`,s.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,tie,j4,Koe,cne],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Timepicker - Scheduling`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formScheduling="ngForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-timepicker-scheduling`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Be,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,fe],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{poNotification=p(Ru);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`po-timepicker`,1),W0(),Zb(`ngModelChange`,function(d){return Ak(i.openTime,d)||(i.openTime=d),d}),Zg(),Jc(2,`po-timepicker`,2),W0(),Zb(`ngModelChange`,function(d){return Ak(i.closeTime,d)||(i.closeTime=d),d}),Zg()(),Jc(3,`div`,0)(4,`po-timepicker`,3),W0(),Zb(`ngModelChange`,function(d){return Ak(i.lunchStart,d)||(i.lunchStart=d),d}),Zg(),Jc(5,`po-timepicker`,4),W0(),Zb(`ngModelChange`,function(d){return Ak(i.lunchEnd,d)||(i.lunchEnd=d),d}),Zg()(),Jc(6,`div`,0)(7,`po-button`,5),vt(`p-click`,function(){return i.save()}),Zg()()),r&2&&(Ig(),Kb(`ngModel`,i.openTime),Ab(`p-max-time`,i.lunchStart)(`p-minute-interval`,30),Y0(),Ig(),Kb(`ngModel`,i.closeTime),Ab(`p-min-time`,i.lunchEnd)(`p-minute-interval`,30),Y0(),Ig(2),Kb(`ngModel`,i.lunchStart),Ab(`p-min-time`,i.openTime)(`p-max-time`,i.lunchEnd)(`p-minute-interval`,15),Y0(),Ig(),Kb(`ngModel`,i.lunchEnd),Ab(`p-min-time`,i.lunchStart)(`p-max-time`,i.closeTime)(`p-minute-interval`,15),Y0())},dependencies:[TZ,JL,oi,cne],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Timepicker - Business Hours`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-timepicker-business-hours`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ve,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoTimepickerComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O `),Jc(24,`code`),Tk(25,`po-timepicker`),Zg(),Tk(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),Zg(),Jc(27,`p`),Tk(28,`O formato de exibição do horário pode ser de 24 horas (`),Jc(29,`code`),Tk(30,`HH:mm`),Zg(),Tk(31,`) ou 12 horas (`),Jc(32,`code`),Tk(33,`hh:mm AM/PM`),Zg(),Tk(34,`),
e opcionalmente incluir segundos (`),Jc(35,`code`),Tk(36,`HH:mm:ss`),Zg(),Tk(37,`).`),Zg(),Jc(38,`p`),Tk(39,`O valor de saída segue o formato ISO 8601 para horários (`),Jc(40,`code`),Tk(41,`HH:mm`),Zg(),Tk(42,` ou `),Jc(43,`code`),Tk(44,`HH:mm:ss`),Zg(),Tk(45,`).`),Zg(),Jc(46,`p`)(47,`strong`),Tk(48,`Importante:`),Zg()(),Jc(49,`ul`)(50,`li`),Tk(51,`Caso o valor digitado seja inválido, o `),Jc(52,`code`),Tk(53,`model`),Zg(),Tk(54,` receberá uma string vazia.`),Zg(),Jc(55,`li`),Tk(56,`Caso o `),Jc(57,`code`),Tk(58,`input`),Zg(),Tk(59,` esteja passando um `),Jc(60,`code`),Tk(61,`[(ngModel)]`),Zg(),Tk(62,`, mas não tenha um `),Jc(63,`code`),Tk(64,`name`),Zg(),Tk(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Jc(66,`code`),Tk(67,`[ngModelOptions]="{standalone: true}"`),Zg(),Tk(68,`).`),Zg()(),Jc(69,`blockquote`)(70,`p`),Tk(71,`Não esqueça de importar o `),Jc(72,`code`),Tk(73,`FormsModule`),Zg(),Tk(74,` em seu módulo, tal como para utilizar o `),Jc(75,`code`),Tk(76,`input default`),Zg(),Tk(77,`.`),Zg()(),Jc(78,`h4`),Tk(79,`Tokens customizáveis`),Zg(),Jc(80,`p`),Tk(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(82,`code`),Tk(83,`.po-input`),Zg()(),Jc(84,`blockquote`)(85,`p`),Tk(86,`Para maiores informações, acesse o guia `),Jc(87,`a`,6),Tk(88,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(89,`.`),Zg()(),Jc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),Tk(94,`Propriedade`),Zg(),Jc(95,`th`),Tk(96,`Descrição`),Zg(),Jc(97,`th`),Tk(98,`Valor Padrão`),Zg()()(),Jc(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),Tk(103,`Default Values`),Zg()(),_u(104,`td`)(105,`td`),Zg(),Jc(106,`tr`)(107,`td`)(108,`code`),Tk(109,`--font-family`),Zg()(),Jc(110,`td`),Tk(111,`Família tipográfica usada`),Zg(),Jc(112,`td`)(113,`code`),Tk(114,`var(--font-family-theme)`),Zg()()(),Jc(115,`tr`)(116,`td`)(117,`code`),Tk(118,`--font-size`),Zg()(),Jc(119,`td`),Tk(120,`Tamanho da fonte`),Zg(),Jc(121,`td`)(122,`code`),Tk(123,`var(--font-size-default)`),Zg()()(),Jc(124,`tr`)(125,`td`)(126,`code`),Tk(127,`--text-color-placeholder`),Zg()(),Jc(128,`td`),Tk(129,`Cor do texto placeholder`),Zg(),Jc(130,`td`)(131,`code`),Tk(132,`var(--color-neutral-light-30)`),Zg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Tk(136,`--color`),Zg()(),Jc(137,`td`),Tk(138,`Cor principal do timepicker`),Zg(),Jc(139,`td`)(140,`code`),Tk(141,`var(--color-neutral-dark-70)`),Zg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Tk(145,`--background`),Zg()(),Jc(146,`td`),Tk(147,`Cor de background`),Zg(),Jc(148,`td`)(149,`code`),Tk(150,`var(--color-neutral-light-05)`),Zg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Tk(154,`--padding`),Zg()(),Jc(155,`td`),Tk(156,`Preenchimento`),Zg(),Jc(157,`td`)(158,`code`),Tk(159,`0 0.5rem`),Zg()()(),Jc(160,`tr`)(161,`td`)(162,`code`),Tk(163,`--text-color`),Zg()(),Jc(164,`td`),Tk(165,`Cor do texto`),Zg(),Jc(166,`td`)(167,`code`),Tk(168,`var(--color-neutral-dark-90)`),Zg()()(),Jc(169,`tr`)(170,`td`)(171,`code`),Tk(172,`--field-container-title-justify`),Zg()(),Jc(173,`td`),Tk(174,`Alinhamento horizontal do título (`),Jc(175,`code`),Tk(176,`justify-content`),Zg(),Tk(177,`)`),Zg(),Jc(178,`td`)(179,`code`),Tk(180,`space-between`),Zg()()(),Jc(181,`tr`)(182,`td`)(183,`code`),Tk(184,`--field-container-title-flex`),Zg()(),Jc(185,`td`),Tk(186,`Flex do título (`),Jc(187,`code`),Tk(188,`flex`),Zg(),Tk(189,`)`),Zg(),Jc(190,`td`)(191,`code`),Tk(192,`1 auto`),Zg()()(),Jc(193,`tr`)(194,`td`)(195,`strong`),Tk(196,`Hover`),Zg()(),_u(197,`td`)(198,`td`),Zg(),Jc(199,`tr`)(200,`td`)(201,`code`),Tk(202,`--color-hover`),Zg()(),Jc(203,`td`),Tk(204,`Cor principal no estado hover`),Zg(),Jc(205,`td`)(206,`code`),Tk(207,`var(--color-brand-01-dark)`),Zg()()(),Jc(208,`tr`)(209,`td`)(210,`code`),Tk(211,`--background-hover`),Zg()(),Jc(212,`td`),Tk(213,`Cor de background no estado hover`),Zg(),Jc(214,`td`)(215,`code`),Tk(216,`var(--color-brand-01-lightest)`),Zg()()(),Jc(217,`tr`)(218,`td`)(219,`strong`),Tk(220,`Focused`),Zg()(),_u(221,`td`)(222,`td`),Zg(),Jc(223,`tr`)(224,`td`)(225,`code`),Tk(226,`--color-focused`),Zg()(),Jc(227,`td`),Tk(228,`Cor principal no estado de focus`),Zg(),Jc(229,`td`)(230,`code`),Tk(231,`var(--color-action-default)`),Zg()()(),Jc(232,`tr`)(233,`td`)(234,`code`),Tk(235,`--outline-color-focused`),Zg()(),Jc(236,`td`),Tk(237,`Cor do outline do estado de focus`),Zg(),Jc(238,`td`)(239,`code`),Tk(240,`var(--color-action-focus)`),Zg()()(),Jc(241,`tr`)(242,`td`)(243,`strong`),Tk(244,`Disabled`),Zg()(),_u(245,`td`)(246,`td`),Zg(),Jc(247,`tr`)(248,`td`)(249,`code`),Tk(250,`--color-disabled`),Zg()(),Jc(251,`td`),Tk(252,`Cor principal no estado disabled`),Zg(),Jc(253,`td`)(254,`code`),Tk(255,`var(--color-neutral-light-30)`),Zg()()(),Jc(256,`tr`)(257,`td`)(258,`code`),Tk(259,`--background-disabled`),Zg()(),Jc(260,`td`),Tk(261,`Cor de background no estado disabled`),Zg(),Jc(262,`td`)(263,`code`),Tk(264,`var(--color-neutral-light-20)`),Zg()()(),Jc(265,`tr`)(266,`td`)(267,`code`),Tk(268,`--text-color-disabled`),Zg()(),Jc(269,`td`),Tk(270,`Cor do texto no estado disabled`),Zg(),Jc(271,`td`)(272,`code`),Tk(273,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(274,`div`,7)(275,`h4`,8),Tk(276,`Seletor`),Zg(),Jc(277,`pre`,9),Tk(278,`<po-timepicker
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
`),Zg()(),Jc(279,`h4`,10),Tk(280,`Propriedades`),Zg(),Jc(281,`table`,11)(282,`tr`,12)(283,`th`,13),Tk(284,`Nome`),Zg(),Jc(285,`th`,13),Tk(286,`Tipo`),Zg(),Jc(287,`th`,13),Tk(288,`Padrão`),Zg(),Jc(289,`th`,13),Tk(290,`Descrição`),Zg()(),Jc(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),Tk(295,` p-append-in-body`),_u(296,`br`),Zg()()(),Jc(297,`td`,18)(298,`code`,19),Tk(299,`boolean`),Zg()(),Jc(300,`td`,20)(301,`p`)(302,`code`),Tk(303,`false`),Zg()()(),Jc(304,`td`,21)(305,`em`)(306,`strong`),Tk(307,`(opcional)`),Zg()(),Jc(308,`p`),Tk(309,`Define que o painel do timer será incluído no body da página.`),Zg()()(),Jc(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),Tk(314,` p-auto-focus`),_u(315,`br`),Zg()()(),Jc(316,`td`,18)(317,`code`,19),Tk(318,`boolean`),Zg()(),Jc(319,`td`,20)(320,`p`)(321,`code`),Tk(322,`false`),Zg()()(),Jc(323,`td`,21)(324,`em`)(325,`strong`),Tk(326,`(opcional)`),Zg()(),Jc(327,`p`),Tk(328,`Aplica foco no elemento ao ser iniciado.`),Zg()()(),Jc(329,`tr`,14)(330,`td`,15)(331,`div`,22)(332,`span`,23),Tk(333,` (p-change-model)`),_u(334,`br`),Zg()()(),Jc(335,`td`,18)(336,`code`,24),Tk(337,`EventEmitter`),Zg()(),Jc(338,`td`,20),Tk(339,`-`),Zg(),Jc(340,`td`,21)(341,`em`)(342,`strong`),Tk(343,`(opcional)`),Zg()(),Jc(344,`p`),Tk(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(346,`code`),Tk(347,`setValue`),Zg(),Tk(348,`, `),Jc(349,`code`),Tk(350,`patchValue`),Zg(),Tk(351,`, carregamento assíncrono).`),Zg(),Jc(352,`p`),Tk(353,`Diferentemente do `),Jc(354,`code`),Tk(355,`p-change`),Zg(),Tk(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(357,`code`),Tk(358,`p-change-model`),Zg(),Tk(359,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(360,`p`),Tk(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(362,`tr`,14)(363,`td`,15)(364,`div`,16)(365,`span`,17),Tk(366,`p-clean`),_u(367,`br`),Zg()()(),Jc(368,`td`,18)(369,`code`,19),Tk(370,`boolean`),Zg()(),Jc(371,`td`,20),Tk(372,`-`),Zg(),Jc(373,`td`,21)(374,`em`)(375,`strong`),Tk(376,`(opcional)`),Zg()(),Jc(377,`p`),Tk(378,`Habilita ação para limpar o campo.`),Zg()()(),Jc(379,`tr`,14)(380,`td`,15)(381,`div`,16)(382,`span`,17),Tk(383,` p-compact-label`),_u(384,`br`),Zg()()(),Jc(385,`td`,18)(386,`code`,19),Tk(387,`boolean`),Zg()(),Jc(388,`td`,20)(389,`p`)(390,`code`),Tk(391,`false`),Zg()()(),Jc(392,`td`,21)(393,`em`)(394,`strong`),Tk(395,`(opcional)`),Zg()(),Jc(396,`p`),Tk(397,`Define se o título do campo será exibido de forma compacta.`),Zg()()(),Jc(398,`tr`,14)(399,`td`,15)(400,`div`,16)(401,`span`,17),Tk(402,`p-disabled`),_u(403,`br`),Zg()()(),Jc(404,`td`,18)(405,`code`,19),Tk(406,`boolean`),Zg()(),Jc(407,`td`,20),Tk(408,`-`),Zg(),Jc(409,`td`,21)(410,`em`)(411,`strong`),Tk(412,`(opcional)`),Zg()(),Jc(413,`p`),Tk(414,`Desabilita o campo.`),Zg()()(),Jc(415,`tr`,14)(416,`td`,15)(417,`div`,16)(418,`span`,17),Tk(419,` p-error-limit`),_u(420,`br`),Zg()()(),Jc(421,`td`,18)(422,`code`,19),Tk(423,`boolean`),Zg()(),Jc(424,`td`,20)(425,`p`)(426,`code`),Tk(427,`false`),Zg()()(),Jc(428,`td`,21)(429,`em`)(430,`strong`),Tk(431,`(opcional)`),Zg()(),Jc(432,`p`),Tk(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg()()(),Jc(434,`tr`,14)(435,`td`,15)(436,`div`,16)(437,`span`,17),Tk(438,` p-error-pattern`),_u(439,`br`),Zg()()(),Jc(440,`td`,18)(441,`code`,25),Tk(442,`string`),Zg()(),Jc(443,`td`,20),Tk(444,`-`),Zg(),Jc(445,`td`,21)(446,`em`)(447,`strong`),Tk(448,`(opcional)`),Zg()(),Jc(449,`p`),Tk(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),Zg(),Jc(451,`blockquote`)(452,`p`),Tk(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),Zg()()()(),Jc(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),Tk(458,` p-format`),_u(459,`br`),Zg()()(),Jc(460,`td`,18)(461,`code`,26),Tk(462,`PoTimerFormat`),Zg()(),Jc(463,`td`,20)(464,`p`)(465,`code`),Tk(466,`24`),Zg()()(),Jc(467,`td`,21)(468,`em`)(469,`strong`),Tk(470,`(opcional)`),Zg()(),Jc(471,`p`),Tk(472,`Define o formato de exibição do timer.`),Zg(),Jc(473,`p`),Tk(474,`Valores válidos:`),Zg(),Jc(475,`ul`)(476,`li`)(477,`code`),Tk(478,`24`),Zg(),Tk(479,`: formato de 24 horas (padrão)`),Zg(),Jc(480,`li`)(481,`code`),Tk(482,`12`),Zg(),Tk(483,`: formato de 12 horas com indicador AM/PM`),Zg()()()(),Jc(484,`tr`,14)(485,`td`,15)(486,`div`,16)(487,`span`,17),Tk(488,` p-help`),_u(489,`br`),Zg()()(),Jc(490,`td`,18)(491,`code`,25),Tk(492,`string`),Zg()(),Jc(493,`td`,20),Tk(494,`-`),Zg(),Jc(495,`td`,21)(496,`em`)(497,`strong`),Tk(498,`(opcional)`),Zg()(),Jc(499,`p`),Tk(500,`Texto de apoio do campo.`),Zg()()(),Jc(501,`tr`,14)(502,`td`,15)(503,`div`,22)(504,`span`,23),Tk(505,` (p-keydown)`),_u(506,`br`),Zg()()(),Jc(507,`td`,18)(508,`code`,24),Tk(509,`EventEmitter`),Zg()(),Jc(510,`td`,20),Tk(511,`-`),Zg(),Jc(512,`td`,21)(513,`p`),Tk(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),Zg()()(),Jc(515,`tr`,14)(516,`td`,15)(517,`div`,16)(518,`span`,17),Tk(519,` p-label`),_u(520,`br`),Zg()()(),Jc(521,`td`,18)(522,`code`,25),Tk(523,`string`),Zg()(),Jc(524,`td`,20),Tk(525,`-`),Zg(),Jc(526,`td`,21)(527,`em`)(528,`strong`),Tk(529,`(opcional)`),Zg()(),Jc(530,`p`),Tk(531,`Rótulo do campo.`),Zg()()(),Jc(532,`tr`,14)(533,`td`,15)(534,`div`,16)(535,`span`,17),Tk(536,` p-label-text-wrap`),_u(537,`br`),Zg()()(),Jc(538,`td`,18)(539,`code`,19),Tk(540,`boolean`),Zg()(),Jc(541,`td`,20)(542,`p`)(543,`code`),Tk(544,`false`),Zg()()(),Jc(545,`td`,21)(546,`em`)(547,`strong`),Tk(548,`(opcional)`),Zg()(),Jc(549,`p`),Tk(550,`Habilita a quebra automática do texto da propriedade `),Jc(551,`code`),Tk(552,`p-label`),Zg(),Tk(553,`.`),Zg()()(),Jc(554,`tr`,14)(555,`td`,15)(556,`div`,16)(557,`span`,17),Tk(558,` p-loading`),_u(559,`br`),Zg()()(),Jc(560,`td`,18)(561,`code`,19),Tk(562,`boolean`),Zg()(),Jc(563,`td`,20)(564,`p`)(565,`code`),Tk(566,`false`),Zg()()(),Jc(567,`td`,21)(568,`em`)(569,`strong`),Tk(570,`(opcional)`),Zg()(),Jc(571,`p`),Tk(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),Tk(577,` p-locale`),_u(578,`br`),Zg()()(),Jc(579,`td`,18)(580,`code`,25),Tk(581,`string`),Zg()(),Jc(582,`td`,20),Tk(583,`-`),Zg(),Jc(584,`td`,21)(585,`em`)(586,`strong`),Tk(587,`(opcional)`),Zg()(),Jc(588,`p`),Tk(589,`Idioma do componente.`),Zg()()(),Jc(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),Tk(594,` p-max-time`),_u(595,`br`),Zg()()(),Jc(596,`td`,18)(597,`code`,25),Tk(598,`string`),Zg()(),Jc(599,`td`,20),Tk(600,`-`),Zg(),Jc(601,`td`,21)(602,`em`)(603,`strong`),Tk(604,`(opcional)`),Zg()(),Jc(605,`p`),Tk(606,`Define o horário máximo permitido. Formato: `),Jc(607,`code`),Tk(608,`HH:mm`),Zg(),Tk(609,` ou `),Jc(610,`code`),Tk(611,`HH:mm:ss`),Zg(),Tk(612,`.`),Zg()()(),Jc(613,`tr`,14)(614,`td`,15)(615,`div`,16)(616,`span`,17),Tk(617,` p-min-time`),_u(618,`br`),Zg()()(),Jc(619,`td`,18)(620,`code`,25),Tk(621,`string`),Zg()(),Jc(622,`td`,20),Tk(623,`-`),Zg(),Jc(624,`td`,21)(625,`em`)(626,`strong`),Tk(627,`(opcional)`),Zg()(),Jc(628,`p`),Tk(629,`Define o horário mínimo permitido. Formato: `),Jc(630,`code`),Tk(631,`HH:mm`),Zg(),Tk(632,` ou `),Jc(633,`code`),Tk(634,`HH:mm:ss`),Zg(),Tk(635,`.`),Zg()()(),Jc(636,`tr`,14)(637,`td`,15)(638,`div`,16)(639,`span`,17),Tk(640,` p-minute-interval`),_u(641,`br`),Zg()()(),Jc(642,`td`,18)(643,`code`,27),Tk(644,`number`),Zg()(),Jc(645,`td`,20)(646,`p`)(647,`code`),Tk(648,`5`),Zg()()(),Jc(649,`td`,21)(650,`em`)(651,`strong`),Tk(652,`(opcional)`),Zg()(),Jc(653,`p`),Tk(654,`Define o intervalo entre os minutos exibidos no painel.`),Zg()()(),Jc(655,`tr`,14)(656,`td`,15)(657,`div`,16)(658,`span`,17),Tk(659,` p-model-format`),_u(660,`br`),Zg()()(),Jc(661,`td`,18)(662,`code`,28),Tk(663,`PoTimepickerModelFormat`),Zg()(),Jc(664,`td`,20),Tk(665,`-`),Zg(),Jc(666,`td`,21)(667,`em`)(668,`strong`),Tk(669,`(opcional)`),Zg()(),Jc(670,`p`),Tk(671,`Padrão de formatação para saída do `),Jc(672,`em`),Tk(673,`model`),Zg(),Tk(674,`.`),Zg(),Jc(675,`blockquote`)(676,`p`),Tk(677,`Veja os valores válidos no `),Jc(678,`em`),Tk(679,`enum`),Zg(),Jc(680,`code`),Tk(681,`PoTimepickerModelFormat`),Zg(),Tk(682,`.`),Zg()()()(),Jc(683,`tr`,14)(684,`td`,15)(685,`div`,16)(686,`span`,17),Tk(687,` name`),_u(688,`br`),Zg()()(),Jc(689,`td`,18)(690,`code`,25),Tk(691,`string`),Zg()(),Jc(692,`td`,20),Tk(693,`-`),Zg(),Jc(694,`td`,21)(695,`p`),Tk(696,`Nome do componente.`),Zg()()(),Jc(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),Tk(701,` p-no-autocomplete`),_u(702,`br`),Zg()()(),Jc(703,`td`,18)(704,`code`,19),Tk(705,`boolean`),Zg()(),Jc(706,`td`,20)(707,`p`)(708,`code`),Tk(709,`false`),Zg()()(),Jc(710,`td`,21)(711,`em`)(712,`strong`),Tk(713,`(opcional)`),Zg()(),Jc(714,`p`),Tk(715,`Define a propriedade nativa `),Jc(716,`code`),Tk(717,`autocomplete`),Zg(),Tk(718,` do campo como `),Jc(719,`code`),Tk(720,`off`),Zg(),Tk(721,`.`),Zg()()(),Jc(722,`tr`,14)(723,`td`,15)(724,`div`,22)(725,`span`,23),Tk(726,` (p-blur)`),_u(727,`br`),Zg()()(),Jc(728,`td`,18)(729,`code`,24),Tk(730,`EventEmitter`),Zg()(),Jc(731,`td`,20),Tk(732,`-`),Zg(),Jc(733,`td`,21)(734,`p`),Tk(735,`Evento disparado ao sair do campo.`),Zg()()(),Jc(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),Tk(740,` (p-change)`),_u(741,`br`),Zg()()(),Jc(742,`td`,18)(743,`code`,24),Tk(744,`EventEmitter`),Zg()(),Jc(745,`td`,20),Tk(746,`-`),Zg(),Jc(747,`td`,21)(748,`p`),Tk(749,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(750,`tr`,14)(751,`td`,15)(752,`div`,16)(753,`span`,17),Tk(754,` p-optional`),_u(755,`br`),Zg()()(),Jc(756,`td`,18)(757,`code`,19),Tk(758,`boolean`),Zg()(),Jc(759,`td`,20)(760,`p`)(761,`code`),Tk(762,`false`),Zg()()(),Jc(763,`td`,21)(764,`em`)(765,`strong`),Tk(766,`(opcional)`),Zg()(),Jc(767,`p`),Tk(768,`Define se a indicação de campo opcional será exibida.`),Zg()()(),Jc(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),Tk(773,` p-placeholder`),_u(774,`br`),Zg()()(),Jc(775,`td`,18)(776,`code`,25),Tk(777,`string`),Zg()(),Jc(778,`td`,20),Tk(779,`-`),Zg(),Jc(780,`td`,21)(781,`em`)(782,`strong`),Tk(783,`(opcional)`),Zg()(),Jc(784,`p`),Tk(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg(),Jc(786,`p`),Tk(787,`Para personalizar os segmentos, informe o valor no formato `),Jc(788,`code`),Tk(789,`HH:mm`),Zg(),Tk(790,` ou `),Jc(791,`code`),Tk(792,`HH:mm:ss`),Zg(),Tk(793,`.`),Zg()()(),Jc(794,`tr`,14)(795,`td`,15)(796,`div`,16)(797,`span`,17),Tk(798,` p-helper`),_u(799,`br`),Zg()()(),Jc(800,`td`,18)(801,`code`,29),Tk(802,`PoHelperOptions `),Zg(),Jc(803,`code`,25),Tk(804,` string`),Zg()(),Jc(805,`td`,20),Tk(806,`-`),Zg(),Jc(807,`td`,21)(808,`em`)(809,`strong`),Tk(810,`(opcional)`),Zg()(),Jc(811,`p`),Tk(812,`Define as opções do componente de ajuda (po-helper).`),Zg()()(),Jc(813,`tr`,14)(814,`td`,15)(815,`div`,16)(816,`span`,17),Tk(817,`p-readonly`),_u(818,`br`),Zg()()(),Jc(819,`td`,18)(820,`code`,19),Tk(821,`boolean`),Zg()(),Jc(822,`td`,20),Tk(823,`-`),Zg(),Jc(824,`td`,21)(825,`em`)(826,`strong`),Tk(827,`(opcional)`),Zg()(),Jc(828,`p`),Tk(829,`Torna o elemento somente leitura.`),Zg()()(),Jc(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),Tk(834,`p-required`),_u(835,`br`),Zg()()(),Jc(836,`td`,18)(837,`code`,19),Tk(838,`boolean`),Zg()(),Jc(839,`td`,20)(840,`p`)(841,`code`),Tk(842,`false`),Zg()()(),Jc(843,`td`,21)(844,`em`)(845,`strong`),Tk(846,`(opcional)`),Zg()(),Jc(847,`p`),Tk(848,`Define que o campo será obrigatório.`),Zg()()(),Jc(849,`tr`,14)(850,`td`,15)(851,`div`,16)(852,`span`,17),Tk(853,` p-second-interval`),_u(854,`br`),Zg()()(),Jc(855,`td`,18)(856,`code`,27),Tk(857,`number`),Zg()(),Jc(858,`td`,20)(859,`p`)(860,`code`),Tk(861,`1`),Zg()()(),Jc(862,`td`,21)(863,`em`)(864,`strong`),Tk(865,`(opcional)`),Zg()(),Jc(866,`p`),Tk(867,`Define o intervalo entre os segundos exibidos no painel.`),Zg()()(),Jc(868,`tr`,14)(869,`td`,15)(870,`div`,16)(871,`span`,17),Tk(872,` p-required-field-error-message`),_u(873,`br`),Zg()()(),Jc(874,`td`,18)(875,`code`,19),Tk(876,`boolean`),Zg()(),Jc(877,`td`,20)(878,`p`)(879,`code`),Tk(880,`false`),Zg()()(),Jc(881,`td`,21)(882,`em`)(883,`strong`),Tk(884,`(opcional)`),Zg()(),Jc(885,`p`),Tk(886,`Exibe a mensagem setada na propriedade `),Jc(887,`code`),Tk(888,`p-error-pattern`),Zg(),Tk(889,` se o campo estiver vazio e for requerido.`),Zg()()(),Jc(890,`tr`,14)(891,`td`,15)(892,`div`,16)(893,`span`,17),Tk(894,` p-show-required`),_u(895,`br`),Zg()()(),Jc(896,`td`,18)(897,`code`,19),Tk(898,`boolean`),Zg()(),Jc(899,`td`,20),Tk(900,`-`),Zg(),Jc(901,`td`,21)(902,`p`),Tk(903,`Define se a indicação de campo obrigatório será exibida.`),Zg()()(),Jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),Tk(908,` p-show-seconds`),_u(909,`br`),Zg()()(),Jc(910,`td`,18)(911,`code`,19),Tk(912,`boolean`),Zg()(),Jc(913,`td`,20)(914,`p`)(915,`code`),Tk(916,`false`),Zg()()(),Jc(917,`td`,21)(918,`em`)(919,`strong`),Tk(920,`(opcional)`),Zg()(),Jc(921,`p`),Tk(922,`Exibe a coluna de segundos no painel.`),Zg()()(),Jc(923,`tr`,14)(924,`td`,15)(925,`div`,16)(926,`span`,17),Tk(927,` p-size`),_u(928,`br`),Zg()()(),Jc(929,`td`,18)(930,`code`,25),Tk(931,`string`),Zg()(),Jc(932,`td`,20)(933,`p`)(934,`code`),Tk(935,`medium`),Zg()()(),Jc(936,`td`,21)(937,`em`)(938,`strong`),Tk(939,`(opcional)`),Zg()(),Jc(940,`p`),Tk(941,`Define o tamanho do componente:`),Zg(),Jc(942,`ul`)(943,`li`)(944,`code`),Tk(945,`small`),Zg(),Tk(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(947,`li`)(948,`code`),Tk(949,`medium`),Zg(),Tk(950,`: altura do input como 44px.`),Zg()()()()(),Jc(951,`h3`,10),Tk(952,`Métodos`),Zg(),Jc(953,`table`,30)(954,`tr`,14)(955,`th`,31)(956,`div`,16)(957,`h4`)(958,`span`,17),Tk(959,` focus `),Zg()()()()(),Jc(960,`tr`,21)(961,`td`,21)(962,`p`),Tk(963,`Função que atribui foco ao componente.`),Zg(),Jc(964,`p`),Tk(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(966,`pre`)(967,`code`),Tk(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),Zg()()()()(),_u(969,`br`),Jc(970,`table`,30)(971,`tr`,14)(972,`th`,31)(973,`div`,16)(974,`h4`)(975,`span`,17),Tk(976,` showAdditionalHelp `),Zg()()()()(),Jc(977,`tr`,21)(978,`td`,21)(979,`p`),Tk(980,`Método que exibe `),Jc(981,`code`),Tk(982,`p-helper`),Zg(),Tk(983,` ou executa a ação definida em `),Jc(984,`code`),Tk(985,`p-helper{eventOnClick}`),Zg(),Tk(986,` ou em `),Jc(987,`code`),Tk(988,`p-additionalHelp`),Zg(),Tk(989,`.`),Zg()()()(),_u(990,`br`),Jc(991,`h3`),Tk(992,`Enums`),Zg(),Jc(993,`h4`,4)(994,`code`,5),Tk(995,`PoTimepickerModelFormat`),Zg()(),Jc(996,`div`,2)(997,`p`)(998,`em`),Tk(999,`Enum`),Zg(),Tk(1e3,` que define o padrão de formatação do model de saída do timepicker.`),Zg()(),Jc(1001,`h4`,10),Tk(1002,`Propriedades`),Zg(),Jc(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),Tk(1006,`Nome`),Zg(),Jc(1007,`th`,13),Tk(1008,`Descrição`),Zg()(),Jc(1009,`tr`,14)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),Tk(1013,` HourMinute`),_u(1014,`br`),Zg()()(),Jc(1015,`td`,21)(1016,`p`),Tk(1017,`Formato básico `),Jc(1018,`code`),Tk(1019,`HH:mm`),Zg(),Tk(1020,` (ex: `),Jc(1021,`code`),Tk(1022,`14:30`),Zg(),Tk(1023,`).`),Zg()()(),Jc(1024,`tr`,14)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),Tk(1028,` HourMinuteSecond`),_u(1029,`br`),Zg()()(),Jc(1030,`td`,21)(1031,`p`),Tk(1032,`Formato com segundos `),Jc(1033,`code`),Tk(1034,`HH:mm:ss`),Zg(),Tk(1035,` (ex: `),Jc(1036,`code`),Tk(1037,`14:30:00`),Zg(),Tk(1038,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ne(l,ze){if(l&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(p);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-timepicker-basic-view`)(2,`sample-po-timepicker-labs-view`)(3,`sample-po-timepicker-scheduling-view`)(4,`sample-po-timepicker-business-hours-view`),Zg()}if(l&2){let p=nk();Ab(`p-active`,p.activeTab===`web`)}}var Ae=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ne,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-timepicker-doc`),Zg()()()),r&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,he,be,ve,xe,ke],encapsulation:2,changeDetection:1})}return l})()}];var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[WV.forChild(Ae),WV]})}return l})();var _t=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de({imports:[M,ye]})}return l})();export{_t as DocPoTimepickerModule};