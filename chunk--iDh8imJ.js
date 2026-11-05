import{$i as h,A as Hoe,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Wa as vo,Xt as ere,Ya as wg,Za as xF,aa as iu,ai as Sn,b as Fu,cn as iie,dr as DO,gr as Dx,ht as U4,ia as ir,it as Qte,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,sn as ib,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,zr as MK,zt as ane}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,i){r&1&&nu(0,`po-timepicker`,0)},dependencies:[ane],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Timepicker Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,we,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:ib.HourMinute},{label:`HourMinuteSecond`,value:ib.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Ax();jc(0,`po-timepicker`,1),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.timepicker,o)||(i.timepicker=o),__(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.label,o)||(i.label=o),__(o)}),wg(),jc(9,`po-input`,6),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.help,o)||(i.help=o),__(o)}),wg(),jc(10,`po-input`,7),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.helper,o)||(i.helper=o),__(o)}),wg(),jc(11,`po-input`,8),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.placeholder,o)||(i.placeholder=o),__(o)}),wg(),jc(12,`po-input`,9),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.errorPattern,o)||(i.errorPattern=o),__(o)}),wg(),jc(13,`po-timepicker`,10),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.minTime,o)||(i.minTime=o),__(o)}),wg(),jc(14,`po-timepicker`,11),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.maxTime,o)||(i.maxTime=o),__(o)}),wg(),jc(15,`po-number`,12),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.minuteInterval,o)||(i.minuteInterval=o),__(o)}),wg(),jc(16,`po-number`,13),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.secondInterval,o)||(i.secondInterval=o),__(o)}),wg(),jc(17,`po-checkbox-group`,14),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.properties,o)||(i.properties=o),__(o)}),wg(),jc(18,`po-radio-group`,15),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.locale,o)||(i.locale=o),__(o)}),wg(),jc(19,`po-radio-group`,16),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.format,o)||(i.format=o),__(o)}),wg(),jc(20,`po-radio-group`,17),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.modelFormat,o)||(i.modelFormat=o),__(o)}),wg(),jc(21,`po-radio-group`,18),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.size,o)||(i.size=o),__(o)}),wg(),jc(22,`div`,2)(23,`po-button`,19),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(sb(`ngModel`,i.timepicker),UE(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-helper`,i.helper)(`p-help`,i.help)(`p-model-format`,i.modelFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-max-time`,i.maxTime)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-second-interval`,i.secondInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-append-in-body`,i.properties?.includes(`appendInBody`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-size`,i.size),o0(),rg(3),UE(`p-value`,i.timepicker),rg(),UE(`p-value`,i.event),rg(4),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.help),o0(),rg(),sb(`ngModel`,i.helper),o0(),rg(),sb(`ngModel`,i.placeholder),o0(),rg(),sb(`ngModel`,i.errorPattern),o0(),rg(),sb(`ngModel`,i.minTime),o0(),rg(),sb(`ngModel`,i.maxTime),o0(),rg(),sb(`ngModel`,i.minuteInterval),o0(),rg(),sb(`ngModel`,i.secondInterval),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.locale),UE(`p-options`,i.localeOptions),o0(),rg(),sb(`ngModel`,i.format),UE(`p-options`,i.formatOptions),o0(),rg(),sb(`ngModel`,i.modelFormat),UE(`p-options`,i.modelFormatOptions),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Hoe,Gte,ane,Yoe],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Timepicker Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-timepicker
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,De,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return l})();var Le=[`formScheduling`];var fe=(()=>{class l{poDialog=h(iie);poNotification=h(Fu);formScheduling;title=``;date=/* @__PURE__ */ new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let p=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:p,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(p){return p&&p.slice(0,10)}getRoomLabel(){let p=this.roomOptions.find(r=>r.value===this.room);return p?p.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&iu(Le,7),r&2){let s;yo(s=vo())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Ax();jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.title,o)||(i.title=o),__(o)}),wg(),jc(4,`po-datepicker`,3),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.date,o)||(i.date=o),__(o)}),wg()(),jc(5,`div`,1)(6,`po-timepicker`,4),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.startTime,o)||(i.startTime=o),__(o)}),wg(),jc(7,`po-timepicker`,5),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.endTime,o)||(i.endTime=o),__(o)}),wg(),jc(8,`po-select`,6),r0(),ab(`ngModelChange`,function(o){return v_(s),uO(i.room,o)||(i.room=o),__(o)}),wg()(),jc(9,`div`,1)(10,`po-button`,7),mt(`p-click`,function(){return i.schedule()}),wg()()()}if(r&2){let s=Bx(1);rg(3),sb(`ngModel`,i.title),o0(),rg(),sb(`ngModel`,i.date),o0(),rg(2),sb(`ngModel`,i.startTime),UE(`p-show-required`,!0),o0(),rg(),sb(`ngModel`,i.endTime),UE(`p-show-required`,!0),o0(),rg(),sb(`ngModel`,i.room),UE(`p-options`,i.roomOptions),o0(),rg(2),UE(`p-disabled`,s.invalid)}},dependencies:[RK,SK,MK,xF,SF,oi,Qte,U4,Woe,ane],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Timepicker - Scheduling`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),wg(),jc(13,`pre`,7),lO(14,`<form #formScheduling="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-scheduling`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,fe],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{poNotification=h(Fu);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`po-timepicker`,1),r0(),ab(`ngModelChange`,function(d){return uO(i.openTime,d)||(i.openTime=d),d}),wg(),jc(2,`po-timepicker`,2),r0(),ab(`ngModelChange`,function(d){return uO(i.closeTime,d)||(i.closeTime=d),d}),wg()(),jc(3,`div`,0)(4,`po-timepicker`,3),r0(),ab(`ngModelChange`,function(d){return uO(i.lunchStart,d)||(i.lunchStart=d),d}),wg(),jc(5,`po-timepicker`,4),r0(),ab(`ngModelChange`,function(d){return uO(i.lunchEnd,d)||(i.lunchEnd=d),d}),wg()(),jc(6,`div`,0)(7,`po-button`,5),mt(`p-click`,function(){return i.save()}),wg()()),r&2&&(rg(),sb(`ngModel`,i.openTime),UE(`p-max-time`,i.lunchStart)(`p-minute-interval`,30),o0(),rg(),sb(`ngModel`,i.closeTime),UE(`p-min-time`,i.lunchEnd)(`p-minute-interval`,30),o0(),rg(2),sb(`ngModel`,i.lunchStart),UE(`p-min-time`,i.openTime)(`p-max-time`,i.lunchEnd)(`p-minute-interval`,15),o0(),rg(),sb(`ngModel`,i.lunchEnd),UE(`p-min-time`,i.lunchStart)(`p-max-time`,i.closeTime)(`p-minute-interval`,15),o0())},dependencies:[SK,xF,oi,ane],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Timepicker - Business Hours`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-business-hours`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ve,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoTimepickerComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`O `),jc(24,`code`),lO(25,`po-timepicker`),wg(),lO(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),wg(),jc(27,`p`),lO(28,`O formato de exibição do horário pode ser de 24 horas (`),jc(29,`code`),lO(30,`HH:mm`),wg(),lO(31,`) ou 12 horas (`),jc(32,`code`),lO(33,`hh:mm AM/PM`),wg(),lO(34,`),
e opcionalmente incluir segundos (`),jc(35,`code`),lO(36,`HH:mm:ss`),wg(),lO(37,`).`),wg(),jc(38,`p`),lO(39,`O valor de saída segue o formato ISO 8601 para horários (`),jc(40,`code`),lO(41,`HH:mm`),wg(),lO(42,` ou `),jc(43,`code`),lO(44,`HH:mm:ss`),wg(),lO(45,`).`),wg(),jc(46,`p`)(47,`strong`),lO(48,`Importante:`),wg()(),jc(49,`ul`)(50,`li`),lO(51,`Caso o valor digitado seja inválido, o `),jc(52,`code`),lO(53,`model`),wg(),lO(54,` receberá uma string vazia.`),wg(),jc(55,`li`),lO(56,`Caso o `),jc(57,`code`),lO(58,`input`),wg(),lO(59,` esteja passando um `),jc(60,`code`),lO(61,`[(ngModel)]`),wg(),lO(62,`, mas não tenha um `),jc(63,`code`),lO(64,`name`),wg(),lO(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),jc(66,`code`),lO(67,`[ngModelOptions]="{standalone: true}"`),wg(),lO(68,`).`),wg()(),jc(69,`blockquote`)(70,`p`),lO(71,`Não esqueça de importar o `),jc(72,`code`),lO(73,`FormsModule`),wg(),lO(74,` em seu módulo, tal como para utilizar o `),jc(75,`code`),lO(76,`input default`),wg(),lO(77,`.`),wg()(),jc(78,`h4`),lO(79,`Tokens customizáveis`),wg(),jc(80,`p`),lO(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(82,`code`),lO(83,`.po-input`),wg()(),jc(84,`blockquote`)(85,`p`),lO(86,`Para maiores informações, acesse o guia `),jc(87,`a`,6),lO(88,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(89,`.`),wg()(),jc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),lO(94,`Propriedade`),wg(),jc(95,`th`),lO(96,`Descrição`),wg(),jc(97,`th`),lO(98,`Valor Padrão`),wg()()(),jc(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),lO(103,`Default Values`),wg()(),nu(104,`td`)(105,`td`),wg(),jc(106,`tr`)(107,`td`)(108,`code`),lO(109,`--font-family`),wg()(),jc(110,`td`),lO(111,`Família tipográfica usada`),wg(),jc(112,`td`)(113,`code`),lO(114,`var(--font-family-theme)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`code`),lO(118,`--font-size`),wg()(),jc(119,`td`),lO(120,`Tamanho da fonte`),wg(),jc(121,`td`)(122,`code`),lO(123,`var(--font-size-default)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),lO(127,`--text-color-placeholder`),wg()(),jc(128,`td`),lO(129,`Cor do texto placeholder`),wg(),jc(130,`td`)(131,`code`),lO(132,`var(--color-neutral-light-30)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),lO(136,`--color`),wg()(),jc(137,`td`),lO(138,`Cor principal do timepicker`),wg(),jc(139,`td`)(140,`code`),lO(141,`var(--color-neutral-dark-70)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),lO(145,`--background`),wg()(),jc(146,`td`),lO(147,`Cor de background`),wg(),jc(148,`td`)(149,`code`),lO(150,`var(--color-neutral-light-05)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),lO(154,`--padding`),wg()(),jc(155,`td`),lO(156,`Preenchimento`),wg(),jc(157,`td`)(158,`code`),lO(159,`0 0.5rem`),wg()()(),jc(160,`tr`)(161,`td`)(162,`code`),lO(163,`--text-color`),wg()(),jc(164,`td`),lO(165,`Cor do texto`),wg(),jc(166,`td`)(167,`code`),lO(168,`var(--color-neutral-dark-90)`),wg()()(),jc(169,`tr`)(170,`td`)(171,`code`),lO(172,`--field-container-title-justify`),wg()(),jc(173,`td`),lO(174,`Alinhamento horizontal do título (`),jc(175,`code`),lO(176,`justify-content`),wg(),lO(177,`)`),wg(),jc(178,`td`)(179,`code`),lO(180,`space-between`),wg()()(),jc(181,`tr`)(182,`td`)(183,`code`),lO(184,`--field-container-title-flex`),wg()(),jc(185,`td`),lO(186,`Flex do título (`),jc(187,`code`),lO(188,`flex`),wg(),lO(189,`)`),wg(),jc(190,`td`)(191,`code`),lO(192,`1 auto`),wg()()(),jc(193,`tr`)(194,`td`)(195,`strong`),lO(196,`Hover`),wg()(),nu(197,`td`)(198,`td`),wg(),jc(199,`tr`)(200,`td`)(201,`code`),lO(202,`--color-hover`),wg()(),jc(203,`td`),lO(204,`Cor principal no estado hover`),wg(),jc(205,`td`)(206,`code`),lO(207,`var(--color-brand-01-dark)`),wg()()(),jc(208,`tr`)(209,`td`)(210,`code`),lO(211,`--background-hover`),wg()(),jc(212,`td`),lO(213,`Cor de background no estado hover`),wg(),jc(214,`td`)(215,`code`),lO(216,`var(--color-brand-01-lightest)`),wg()()(),jc(217,`tr`)(218,`td`)(219,`strong`),lO(220,`Focused`),wg()(),nu(221,`td`)(222,`td`),wg(),jc(223,`tr`)(224,`td`)(225,`code`),lO(226,`--color-focused`),wg()(),jc(227,`td`),lO(228,`Cor principal no estado de focus`),wg(),jc(229,`td`)(230,`code`),lO(231,`var(--color-action-default)`),wg()()(),jc(232,`tr`)(233,`td`)(234,`code`),lO(235,`--outline-color-focused`),wg()(),jc(236,`td`),lO(237,`Cor do outline do estado de focus`),wg(),jc(238,`td`)(239,`code`),lO(240,`var(--color-action-focus)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`strong`),lO(244,`Disabled`),wg()(),nu(245,`td`)(246,`td`),wg(),jc(247,`tr`)(248,`td`)(249,`code`),lO(250,`--color-disabled`),wg()(),jc(251,`td`),lO(252,`Cor principal no estado disabled`),wg(),jc(253,`td`)(254,`code`),lO(255,`var(--color-neutral-light-30)`),wg()()(),jc(256,`tr`)(257,`td`)(258,`code`),lO(259,`--background-disabled`),wg()(),jc(260,`td`),lO(261,`Cor de background no estado disabled`),wg(),jc(262,`td`)(263,`code`),lO(264,`var(--color-neutral-light-20)`),wg()()(),jc(265,`tr`)(266,`td`)(267,`code`),lO(268,`--text-color-disabled`),wg()(),jc(269,`td`),lO(270,`Cor do texto no estado disabled`),wg(),jc(271,`td`)(272,`code`),lO(273,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(274,`div`,7)(275,`h4`,8),lO(276,`Seletor`),wg(),jc(277,`pre`,9),lO(278,`<po-timepicker
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
`),wg()(),jc(279,`h4`,10),lO(280,`Propriedades`),wg(),jc(281,`table`,11)(282,`tr`,12)(283,`th`,13),lO(284,`Nome`),wg(),jc(285,`th`,13),lO(286,`Tipo`),wg(),jc(287,`th`,13),lO(288,`Padrão`),wg(),jc(289,`th`,13),lO(290,`Descrição`),wg()(),jc(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),lO(295,` p-append-in-body`),nu(296,`br`),wg()()(),jc(297,`td`,18)(298,`code`,19),lO(299,`boolean`),wg()(),jc(300,`td`,20)(301,`p`)(302,`code`),lO(303,`false`),wg()()(),jc(304,`td`,21)(305,`em`)(306,`strong`),lO(307,`(opcional)`),wg()(),jc(308,`p`),lO(309,`Define que o painel do timer será incluído no body da página.`),wg()()(),jc(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),lO(314,` p-auto-focus`),nu(315,`br`),wg()()(),jc(316,`td`,18)(317,`code`,19),lO(318,`boolean`),wg()(),jc(319,`td`,20)(320,`p`)(321,`code`),lO(322,`false`),wg()()(),jc(323,`td`,21)(324,`em`)(325,`strong`),lO(326,`(opcional)`),wg()(),jc(327,`p`),lO(328,`Aplica foco no elemento ao ser iniciado.`),wg()()(),jc(329,`tr`,14)(330,`td`,15)(331,`div`,22)(332,`span`,23),lO(333,` (p-change-model)`),nu(334,`br`),wg()()(),jc(335,`td`,18)(336,`code`,24),lO(337,`EventEmitter`),wg()(),jc(338,`td`,20),lO(339,`-`),wg(),jc(340,`td`,21)(341,`em`)(342,`strong`),lO(343,`(opcional)`),wg()(),jc(344,`p`),lO(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(346,`code`),lO(347,`setValue`),wg(),lO(348,`, `),jc(349,`code`),lO(350,`patchValue`),wg(),lO(351,`, carregamento assíncrono).`),wg(),jc(352,`p`),lO(353,`Diferentemente do `),jc(354,`code`),lO(355,`p-change`),wg(),lO(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(357,`code`),lO(358,`p-change-model`),wg(),lO(359,` cobre todos os cenários de alteração de valor.`),wg(),jc(360,`p`),lO(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(362,`tr`,14)(363,`td`,15)(364,`div`,16)(365,`span`,17),lO(366,`p-clean`),nu(367,`br`),wg()()(),jc(368,`td`,18)(369,`code`,19),lO(370,`boolean`),wg()(),jc(371,`td`,20),lO(372,`-`),wg(),jc(373,`td`,21)(374,`em`)(375,`strong`),lO(376,`(opcional)`),wg()(),jc(377,`p`),lO(378,`Habilita ação para limpar o campo.`),wg()()(),jc(379,`tr`,14)(380,`td`,15)(381,`div`,16)(382,`span`,17),lO(383,` p-compact-label`),nu(384,`br`),wg()()(),jc(385,`td`,18)(386,`code`,19),lO(387,`boolean`),wg()(),jc(388,`td`,20)(389,`p`)(390,`code`),lO(391,`false`),wg()()(),jc(392,`td`,21)(393,`em`)(394,`strong`),lO(395,`(opcional)`),wg()(),jc(396,`p`),lO(397,`Define se o título do campo será exibido de forma compacta.`),wg()()(),jc(398,`tr`,14)(399,`td`,15)(400,`div`,16)(401,`span`,17),lO(402,`p-disabled`),nu(403,`br`),wg()()(),jc(404,`td`,18)(405,`code`,19),lO(406,`boolean`),wg()(),jc(407,`td`,20),lO(408,`-`),wg(),jc(409,`td`,21)(410,`em`)(411,`strong`),lO(412,`(opcional)`),wg()(),jc(413,`p`),lO(414,`Desabilita o campo.`),wg()()(),jc(415,`tr`,14)(416,`td`,15)(417,`div`,16)(418,`span`,17),lO(419,` p-error-limit`),nu(420,`br`),wg()()(),jc(421,`td`,18)(422,`code`,19),lO(423,`boolean`),wg()(),jc(424,`td`,20)(425,`p`)(426,`code`),lO(427,`false`),wg()()(),jc(428,`td`,21)(429,`em`)(430,`strong`),lO(431,`(opcional)`),wg()(),jc(432,`p`),lO(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg()()(),jc(434,`tr`,14)(435,`td`,15)(436,`div`,16)(437,`span`,17),lO(438,` p-error-pattern`),nu(439,`br`),wg()()(),jc(440,`td`,18)(441,`code`,25),lO(442,`string`),wg()(),jc(443,`td`,20),lO(444,`-`),wg(),jc(445,`td`,21)(446,`em`)(447,`strong`),lO(448,`(opcional)`),wg()(),jc(449,`p`),lO(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),wg(),jc(451,`blockquote`)(452,`p`),lO(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),wg()()()(),jc(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),lO(458,` p-format`),nu(459,`br`),wg()()(),jc(460,`td`,18)(461,`code`,26),lO(462,`PoTimerFormat`),wg()(),jc(463,`td`,20)(464,`p`)(465,`code`),lO(466,`24`),wg()()(),jc(467,`td`,21)(468,`em`)(469,`strong`),lO(470,`(opcional)`),wg()(),jc(471,`p`),lO(472,`Define o formato de exibição do timer.`),wg(),jc(473,`p`),lO(474,`Valores válidos:`),wg(),jc(475,`ul`)(476,`li`)(477,`code`),lO(478,`24`),wg(),lO(479,`: formato de 24 horas (padrão)`),wg(),jc(480,`li`)(481,`code`),lO(482,`12`),wg(),lO(483,`: formato de 12 horas com indicador AM/PM`),wg()()()(),jc(484,`tr`,14)(485,`td`,15)(486,`div`,16)(487,`span`,17),lO(488,` p-help`),nu(489,`br`),wg()()(),jc(490,`td`,18)(491,`code`,25),lO(492,`string`),wg()(),jc(493,`td`,20),lO(494,`-`),wg(),jc(495,`td`,21)(496,`em`)(497,`strong`),lO(498,`(opcional)`),wg()(),jc(499,`p`),lO(500,`Texto de apoio do campo.`),wg()()(),jc(501,`tr`,14)(502,`td`,15)(503,`div`,22)(504,`span`,23),lO(505,` (p-keydown)`),nu(506,`br`),wg()()(),jc(507,`td`,18)(508,`code`,24),lO(509,`EventEmitter`),wg()(),jc(510,`td`,20),lO(511,`-`),wg(),jc(512,`td`,21)(513,`p`),lO(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),wg()()(),jc(515,`tr`,14)(516,`td`,15)(517,`div`,16)(518,`span`,17),lO(519,` p-label`),nu(520,`br`),wg()()(),jc(521,`td`,18)(522,`code`,25),lO(523,`string`),wg()(),jc(524,`td`,20),lO(525,`-`),wg(),jc(526,`td`,21)(527,`em`)(528,`strong`),lO(529,`(opcional)`),wg()(),jc(530,`p`),lO(531,`Rótulo do campo.`),wg()()(),jc(532,`tr`,14)(533,`td`,15)(534,`div`,16)(535,`span`,17),lO(536,` p-label-text-wrap`),nu(537,`br`),wg()()(),jc(538,`td`,18)(539,`code`,19),lO(540,`boolean`),wg()(),jc(541,`td`,20)(542,`p`)(543,`code`),lO(544,`false`),wg()()(),jc(545,`td`,21)(546,`em`)(547,`strong`),lO(548,`(opcional)`),wg()(),jc(549,`p`),lO(550,`Habilita a quebra automática do texto da propriedade `),jc(551,`code`),lO(552,`p-label`),wg(),lO(553,`.`),wg()()(),jc(554,`tr`,14)(555,`td`,15)(556,`div`,16)(557,`span`,17),lO(558,` p-loading`),nu(559,`br`),wg()()(),jc(560,`td`,18)(561,`code`,19),lO(562,`boolean`),wg()(),jc(563,`td`,20)(564,`p`)(565,`code`),lO(566,`false`),wg()()(),jc(567,`td`,21)(568,`em`)(569,`strong`),lO(570,`(opcional)`),wg()(),jc(571,`p`),lO(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),lO(577,` p-locale`),nu(578,`br`),wg()()(),jc(579,`td`,18)(580,`code`,25),lO(581,`string`),wg()(),jc(582,`td`,20),lO(583,`-`),wg(),jc(584,`td`,21)(585,`em`)(586,`strong`),lO(587,`(opcional)`),wg()(),jc(588,`p`),lO(589,`Idioma do componente.`),wg()()(),jc(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),lO(594,` p-max-time`),nu(595,`br`),wg()()(),jc(596,`td`,18)(597,`code`,25),lO(598,`string`),wg()(),jc(599,`td`,20),lO(600,`-`),wg(),jc(601,`td`,21)(602,`em`)(603,`strong`),lO(604,`(opcional)`),wg()(),jc(605,`p`),lO(606,`Define o horário máximo permitido. Formato: `),jc(607,`code`),lO(608,`HH:mm`),wg(),lO(609,` ou `),jc(610,`code`),lO(611,`HH:mm:ss`),wg(),lO(612,`.`),wg()()(),jc(613,`tr`,14)(614,`td`,15)(615,`div`,16)(616,`span`,17),lO(617,` p-min-time`),nu(618,`br`),wg()()(),jc(619,`td`,18)(620,`code`,25),lO(621,`string`),wg()(),jc(622,`td`,20),lO(623,`-`),wg(),jc(624,`td`,21)(625,`em`)(626,`strong`),lO(627,`(opcional)`),wg()(),jc(628,`p`),lO(629,`Define o horário mínimo permitido. Formato: `),jc(630,`code`),lO(631,`HH:mm`),wg(),lO(632,` ou `),jc(633,`code`),lO(634,`HH:mm:ss`),wg(),lO(635,`.`),wg()()(),jc(636,`tr`,14)(637,`td`,15)(638,`div`,16)(639,`span`,17),lO(640,` p-minute-interval`),nu(641,`br`),wg()()(),jc(642,`td`,18)(643,`code`,27),lO(644,`number`),wg()(),jc(645,`td`,20)(646,`p`)(647,`code`),lO(648,`5`),wg()()(),jc(649,`td`,21)(650,`em`)(651,`strong`),lO(652,`(opcional)`),wg()(),jc(653,`p`),lO(654,`Define o intervalo entre os minutos exibidos no painel.`),wg()()(),jc(655,`tr`,14)(656,`td`,15)(657,`div`,16)(658,`span`,17),lO(659,` p-model-format`),nu(660,`br`),wg()()(),jc(661,`td`,18)(662,`code`,28),lO(663,`PoTimepickerModelFormat`),wg()(),jc(664,`td`,20),lO(665,`-`),wg(),jc(666,`td`,21)(667,`em`)(668,`strong`),lO(669,`(opcional)`),wg()(),jc(670,`p`),lO(671,`Padrão de formatação para saída do `),jc(672,`em`),lO(673,`model`),wg(),lO(674,`.`),wg(),jc(675,`blockquote`)(676,`p`),lO(677,`Veja os valores válidos no `),jc(678,`em`),lO(679,`enum`),wg(),jc(680,`code`),lO(681,`PoTimepickerModelFormat`),wg(),lO(682,`.`),wg()()()(),jc(683,`tr`,14)(684,`td`,15)(685,`div`,16)(686,`span`,17),lO(687,` name`),nu(688,`br`),wg()()(),jc(689,`td`,18)(690,`code`,25),lO(691,`string`),wg()(),jc(692,`td`,20),lO(693,`-`),wg(),jc(694,`td`,21)(695,`p`),lO(696,`Nome do componente.`),wg()()(),jc(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),lO(701,` p-no-autocomplete`),nu(702,`br`),wg()()(),jc(703,`td`,18)(704,`code`,19),lO(705,`boolean`),wg()(),jc(706,`td`,20)(707,`p`)(708,`code`),lO(709,`false`),wg()()(),jc(710,`td`,21)(711,`em`)(712,`strong`),lO(713,`(opcional)`),wg()(),jc(714,`p`),lO(715,`Define a propriedade nativa `),jc(716,`code`),lO(717,`autocomplete`),wg(),lO(718,` do campo como `),jc(719,`code`),lO(720,`off`),wg(),lO(721,`.`),wg()()(),jc(722,`tr`,14)(723,`td`,15)(724,`div`,22)(725,`span`,23),lO(726,` (p-blur)`),nu(727,`br`),wg()()(),jc(728,`td`,18)(729,`code`,24),lO(730,`EventEmitter`),wg()(),jc(731,`td`,20),lO(732,`-`),wg(),jc(733,`td`,21)(734,`p`),lO(735,`Evento disparado ao sair do campo.`),wg()()(),jc(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),lO(740,` (p-change)`),nu(741,`br`),wg()()(),jc(742,`td`,18)(743,`code`,24),lO(744,`EventEmitter`),wg()(),jc(745,`td`,20),lO(746,`-`),wg(),jc(747,`td`,21)(748,`p`),lO(749,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(750,`tr`,14)(751,`td`,15)(752,`div`,16)(753,`span`,17),lO(754,` p-optional`),nu(755,`br`),wg()()(),jc(756,`td`,18)(757,`code`,19),lO(758,`boolean`),wg()(),jc(759,`td`,20)(760,`p`)(761,`code`),lO(762,`false`),wg()()(),jc(763,`td`,21)(764,`em`)(765,`strong`),lO(766,`(opcional)`),wg()(),jc(767,`p`),lO(768,`Define se a indicação de campo opcional será exibida.`),wg()()(),jc(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),lO(773,` p-placeholder`),nu(774,`br`),wg()()(),jc(775,`td`,18)(776,`code`,25),lO(777,`string`),wg()(),jc(778,`td`,20),lO(779,`-`),wg(),jc(780,`td`,21)(781,`em`)(782,`strong`),lO(783,`(opcional)`),wg()(),jc(784,`p`),lO(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg(),jc(786,`p`),lO(787,`Para personalizar os segmentos, informe o valor no formato `),jc(788,`code`),lO(789,`HH:mm`),wg(),lO(790,` ou `),jc(791,`code`),lO(792,`HH:mm:ss`),wg(),lO(793,`.`),wg()()(),jc(794,`tr`,14)(795,`td`,15)(796,`div`,16)(797,`span`,17),lO(798,` p-helper`),nu(799,`br`),wg()()(),jc(800,`td`,18)(801,`code`,29),lO(802,`PoHelperOptions `),wg(),jc(803,`code`,25),lO(804,` string`),wg()(),jc(805,`td`,20),lO(806,`-`),wg(),jc(807,`td`,21)(808,`em`)(809,`strong`),lO(810,`(opcional)`),wg()(),jc(811,`p`),lO(812,`Define as opções do componente de ajuda (po-helper).`),wg()()(),jc(813,`tr`,14)(814,`td`,15)(815,`div`,16)(816,`span`,17),lO(817,`p-readonly`),nu(818,`br`),wg()()(),jc(819,`td`,18)(820,`code`,19),lO(821,`boolean`),wg()(),jc(822,`td`,20),lO(823,`-`),wg(),jc(824,`td`,21)(825,`em`)(826,`strong`),lO(827,`(opcional)`),wg()(),jc(828,`p`),lO(829,`Torna o elemento somente leitura.`),wg()()(),jc(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),lO(834,`p-required`),nu(835,`br`),wg()()(),jc(836,`td`,18)(837,`code`,19),lO(838,`boolean`),wg()(),jc(839,`td`,20)(840,`p`)(841,`code`),lO(842,`false`),wg()()(),jc(843,`td`,21)(844,`em`)(845,`strong`),lO(846,`(opcional)`),wg()(),jc(847,`p`),lO(848,`Define que o campo será obrigatório.`),wg()()(),jc(849,`tr`,14)(850,`td`,15)(851,`div`,16)(852,`span`,17),lO(853,` p-second-interval`),nu(854,`br`),wg()()(),jc(855,`td`,18)(856,`code`,27),lO(857,`number`),wg()(),jc(858,`td`,20)(859,`p`)(860,`code`),lO(861,`1`),wg()()(),jc(862,`td`,21)(863,`em`)(864,`strong`),lO(865,`(opcional)`),wg()(),jc(866,`p`),lO(867,`Define o intervalo entre os segundos exibidos no painel.`),wg()()(),jc(868,`tr`,14)(869,`td`,15)(870,`div`,16)(871,`span`,17),lO(872,` p-required-field-error-message`),nu(873,`br`),wg()()(),jc(874,`td`,18)(875,`code`,19),lO(876,`boolean`),wg()(),jc(877,`td`,20)(878,`p`)(879,`code`),lO(880,`false`),wg()()(),jc(881,`td`,21)(882,`em`)(883,`strong`),lO(884,`(opcional)`),wg()(),jc(885,`p`),lO(886,`Exibe a mensagem setada na propriedade `),jc(887,`code`),lO(888,`p-error-pattern`),wg(),lO(889,` se o campo estiver vazio e for requerido.`),wg()()(),jc(890,`tr`,14)(891,`td`,15)(892,`div`,16)(893,`span`,17),lO(894,` p-show-required`),nu(895,`br`),wg()()(),jc(896,`td`,18)(897,`code`,19),lO(898,`boolean`),wg()(),jc(899,`td`,20),lO(900,`-`),wg(),jc(901,`td`,21)(902,`p`),lO(903,`Define se a indicação de campo obrigatório será exibida.`),wg()()(),jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),lO(908,` p-show-seconds`),nu(909,`br`),wg()()(),jc(910,`td`,18)(911,`code`,19),lO(912,`boolean`),wg()(),jc(913,`td`,20)(914,`p`)(915,`code`),lO(916,`false`),wg()()(),jc(917,`td`,21)(918,`em`)(919,`strong`),lO(920,`(opcional)`),wg()(),jc(921,`p`),lO(922,`Exibe a coluna de segundos no painel.`),wg()()(),jc(923,`tr`,14)(924,`td`,15)(925,`div`,16)(926,`span`,17),lO(927,` p-size`),nu(928,`br`),wg()()(),jc(929,`td`,18)(930,`code`,25),lO(931,`string`),wg()(),jc(932,`td`,20)(933,`p`)(934,`code`),lO(935,`medium`),wg()()(),jc(936,`td`,21)(937,`em`)(938,`strong`),lO(939,`(opcional)`),wg()(),jc(940,`p`),lO(941,`Define o tamanho do componente:`),wg(),jc(942,`ul`)(943,`li`)(944,`code`),lO(945,`small`),wg(),lO(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(947,`li`)(948,`code`),lO(949,`medium`),wg(),lO(950,`: altura do input como 44px.`),wg()()()()(),jc(951,`h3`,10),lO(952,`Métodos`),wg(),jc(953,`table`,30)(954,`tr`,14)(955,`th`,31)(956,`div`,16)(957,`h4`)(958,`span`,17),lO(959,` focus `),wg()()()()(),jc(960,`tr`,21)(961,`td`,21)(962,`p`),lO(963,`Função que atribui foco ao componente.`),wg(),jc(964,`p`),lO(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(966,`pre`)(967,`code`),lO(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),wg()()()()(),nu(969,`br`),jc(970,`table`,30)(971,`tr`,14)(972,`th`,31)(973,`div`,16)(974,`h4`)(975,`span`,17),lO(976,` showAdditionalHelp `),wg()()()()(),jc(977,`tr`,21)(978,`td`,21)(979,`p`),lO(980,`Método que exibe `),jc(981,`code`),lO(982,`p-helper`),wg(),lO(983,` ou executa a ação definida em `),jc(984,`code`),lO(985,`p-helper{eventOnClick}`),wg(),lO(986,` ou em `),jc(987,`code`),lO(988,`p-additionalHelp`),wg(),lO(989,`.`),wg()()()(),nu(990,`br`),jc(991,`h3`),lO(992,`Enums`),wg(),jc(993,`h4`,4)(994,`code`,5),lO(995,`PoTimepickerModelFormat`),wg()(),jc(996,`div`,2)(997,`p`)(998,`em`),lO(999,`Enum`),wg(),lO(1e3,` que define o padrão de formatação do model de saída do timepicker.`),wg()(),jc(1001,`h4`,10),lO(1002,`Propriedades`),wg(),jc(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),lO(1006,`Nome`),wg(),jc(1007,`th`,13),lO(1008,`Descrição`),wg()(),jc(1009,`tr`,14)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),lO(1013,` HourMinute`),nu(1014,`br`),wg()()(),jc(1015,`td`,21)(1016,`p`),lO(1017,`Formato básico `),jc(1018,`code`),lO(1019,`HH:mm`),wg(),lO(1020,` (ex: `),jc(1021,`code`),lO(1022,`14:30`),wg(),lO(1023,`).`),wg()()(),jc(1024,`tr`,14)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),lO(1028,` HourMinuteSecond`),nu(1029,`br`),wg()()(),jc(1030,`td`,21)(1031,`p`),lO(1032,`Formato com segundos `),jc(1033,`code`),lO(1034,`HH:mm:ss`),wg(),lO(1035,` (ex: `),jc(1036,`code`),lO(1037,`14:30:00`),wg(),lO(1038,`).`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ne(l,ze){if(l&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-timepicker-basic-view`)(2,`sample-po-timepicker-labs-view`)(3,`sample-po-timepicker-scheduling-view`)(4,`sample-po-timepicker-business-hours-view`),wg()}if(l&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var Ae=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ne,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-timepicker-doc`),wg()()()),r&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,he,be,ve,xe,ke],encapsulation:2,changeDetection:1})}return l})()}];var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[I1.forChild(Ae),I1]})}return l})();var _t=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[M,ye]})}return l})();export{_t as DocPoTimepickerModule};