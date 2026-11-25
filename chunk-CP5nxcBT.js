import{m as P,p as M}from"./main-RWBWY5VM.js";import{$r as No,A as Goe,Ba as q0,Br as Kb,Bt as cne,Ci as U_,Cn as sie,Dn as tre,En as tie,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Pr as I,Qn as AZ,R as Koe,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ca as ge$1,do as xo,ea as de$1,er as Ab,fn as oi,fr as Cu,it as Ru,jr as H_,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zn as yP,zr as KO}from"./chunk-CTJH0VS3.js";var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,n){r&1&&_u(0,`po-datetimepicker`,0)},dependencies:[yP],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Datetimepicker Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-datetimepicker-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return l})();var ce=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=KO();Jc(0,`po-datetimepicker`,1),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.datetimepicker,o)||(n.datetimepicker=o),H_(o)}),_t(`p-blur`,function(){return n.changeEvent(`p-blur`)})(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.label,o)||(n.label=o),H_(o)}),Kg(),Jc(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.help,o)||(n.help=o),H_(o)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.helperText,o)||(n.helperText=o),H_(o)}),Kg(),Jc(11,`po-input`,8),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.placeholder,o)||(n.placeholder=o),H_(o)}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.errorPattern,o)||(n.errorPattern=o),H_(o)}),Kg(),Jc(13,`po-number`,10),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.minuteInterval,o)||(n.minuteInterval=o),H_(o)}),Kg(),Jc(14,`po-number`,11),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.secondInterval,o)||(n.secondInterval=o),H_(o)}),Kg(),Jc(15,`po-timepicker`,12),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.minTime,o)||(n.minTime=o),H_(o)}),Kg(),Jc(16,`po-timepicker`,13),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.maxTime,o)||(n.maxTime=o),H_(o)}),Kg(),Jc(17,`po-datepicker`,14),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.minDate,o)||(n.minDate=o),H_(o)}),Kg(),Jc(18,`po-datepicker`,15),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.maxDate,o)||(n.maxDate=o),H_(o)}),Kg(),Jc(19,`po-checkbox-group`,16),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.properties,o)||(n.properties=o),H_(o)}),Kg(),Jc(20,`po-radio-group`,17),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.locale,o)||(n.locale=o),H_(o)}),Kg(),Jc(21,`po-radio-group`,18),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.formatDate,o)||(n.formatDate=o),H_(o)}),Kg(),Jc(22,`po-radio-group`,19),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.formatTime,o)||(n.formatTime=o),H_(o)}),Kg(),Jc(23,`po-radio-group`,20),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.size,o)||(n.size=o),H_(o)}),Kg(),Jc(24,`div`,2)(25,`po-button`,21),_t(`p-click`,function(){return n.restore()}),Kg()()()}r&2&&(Kb(`ngModel`,n.datetimepicker),Ab(`p-clean`,n.properties.includes(`clean`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-disabled`,n.properties.includes(`disabled`))(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-error-pattern`,n.errorPattern)(`p-format-date`,n.formatDate)(`p-format-time`,n.formatTime)(`p-help`,n.help)(`p-helper`,n.helperText)(`p-label`,n.label)(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-loading`,n.properties.includes(`loading`))(`p-locale`,n.locale)(`p-max-date`,n.maxDate)(`p-max-time`,n.maxTime)(`p-min-date`,n.minDate)(`p-min-time`,n.minTime)(`p-minute-interval`,n.minuteInterval)(`p-no-autocomplete`,n.properties?.includes(`noAutocomplete`))(`p-optional`,n.properties.includes(`optional`))(`p-placeholder`,n.placeholder)(`p-readonly`,n.properties.includes(`readonly`))(`p-required`,n.properties.includes(`required`))(`p-required-field-error-message`,n.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,n.secondInterval)(`p-show-required`,n.properties.includes(`showRequired`))(`p-show-seconds`,n.properties.includes(`showSeconds`))(`p-size`,n.size),q0(),wg(3),Ab(`p-value`,n.datetimepicker),wg(),Ab(`p-value`,n.event),wg(4),Kb(`ngModel`,n.label),q0(),wg(),Kb(`ngModel`,n.help),q0(),wg(),Kb(`ngModel`,n.helperText),q0(),wg(),Kb(`ngModel`,n.placeholder),q0(),wg(),Kb(`ngModel`,n.errorPattern),q0(),wg(),Kb(`ngModel`,n.minuteInterval),q0(),wg(),Kb(`ngModel`,n.secondInterval),q0(),wg(),Kb(`ngModel`,n.minTime),q0(),wg(),Kb(`ngModel`,n.maxTime),q0(),wg(),Kb(`ngModel`,n.minDate),Ab(`p-max-date`,n.maxDate),q0(),wg(),Kb(`ngModel`,n.maxDate),Ab(`p-min-date`,n.minDate),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.locale),Ab(`p-options`,n.localeOptions),q0(),wg(),Kb(`ngModel`,n.formatDate),Ab(`p-options`,n.formatDateOptions),q0(),wg(),Kb(`ngModel`,n.formatTime),Ab(`p-options`,n.formatTimeOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,tie,yP,j4,Goe,Zte,cne,Joe],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Datetimepicker Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-datetimepicker-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-datetimepicker
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,n){r&1&&(Jc(0,`po-datetimepicker`,0),G0(),Zb(`ngModelChange`,function(m){return Rk(n.datetime,m)||(n.datetime=m),m}),Kg()),r&2&&(Kb(`ngModel`,n.datetime),q0())},dependencies:[RZ,QL,yP],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-12h-seconds`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Datetimepicker - 12h with Seconds`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-datetimepicker-12h-seconds`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ge],encapsulation:2,changeDetection:1})}return l})();var Me=[`formScheduling`];var Ee=(()=>{class l{poDialog=p(sie);poNotification=p(Ru);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,n){if(r&1&&Cu(Me,7),r&2){let d;No(d=xo())&&(n.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,n){if(r&1){let d=KO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.patient,o)||(n.patient=o),H_(o)}),Kg(),Jc(4,`po-input`,3),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.doctor,o)||(n.doctor=o),H_(o)}),Kg()(),Jc(5,`div`,1)(6,`po-select`,4),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.specialty,o)||(n.specialty=o),H_(o)}),Kg(),Jc(7,`po-datetimepicker`,5),G0(),Zb(`ngModelChange`,function(o){return U_(d),Rk(n.appointment,o)||(n.appointment=o),H_(o)}),Kg()(),Jc(8,`div`,1)(9,`po-button`,6),_t(`p-click`,function(){return n.confirm()}),Kg()()()}if(r&2){let d=ok(1);wg(3),Kb(`ngModel`,n.patient),q0(),wg(),Kb(`ngModel`,n.doctor),q0(),wg(2),Kb(`ngModel`,n.specialty),Ab(`p-options`,n.specialtyOptions),q0(),wg(),Kb(`ngModel`,n.appointment),q0(),wg(2),Ab(`p-disabled`,d.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,yP,j4,Koe],encapsulation:2,changeDetection:1})}return l})();var he=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-datetimepicker-scheduling`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Datetimepicker - Scheduling`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-datetimepicker-scheduling`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #formScheduling="ngForm">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { UntypedFormControl } from '@angular/forms';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-datetimepicker-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-format-date`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-error-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-locale`,1,`docs-api-properties-row`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-max-date`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`id`,`prop-p-max-time`,1,`docs-api-properties-row`],[`id`,`prop-p-min-date`,1,`docs-api-properties-row`],[`id`,`prop-p-min-time`,1,`docs-api-properties-row`],[`id`,`prop-p-minute-interval`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-second-interval`,1,`docs-api-properties-row`],[`id`,`prop-p-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-seconds`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`id`,`prop-p-format-time`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,n){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoDatetimepickerComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`O `),Jc(24,`code`),Mk(25,`po-datetimepicker`),Kg(),Mk(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),Kg(),Jc(27,`p`),Mk(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Jc(29,`code`),Mk(30,`p-format-date`),Kg(),Mk(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Jc(32,`code`),Mk(33,`p-format-time`),Kg(),Mk(34,`.`),Kg(),Jc(35,`p`),Mk(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Jc(37,`code`),Mk(38,`p-locale`),Kg(),Mk(39,`.`),Kg(),Jc(40,`p`),Mk(41,`O componente aceita os seguintes formatos de entrada:`),Kg(),Jc(42,`ul`)(43,`li`),Mk(44,`ISO 8601 com timezone: `),Jc(45,`code`),Mk(46,`'2026-05-12T14:30:00-03:00'`),Kg()(),Jc(47,`li`),Mk(48,`ISO 8601 UTC: `),Jc(49,`code`),Mk(50,`'2026-05-12T14:30:00Z'`),Kg()(),Jc(51,`li`),Mk(52,`ISO 8601 sem timezone: `),Jc(53,`code`),Mk(54,`'2026-05-12T14:30:00'`),Kg()(),Jc(55,`li`),Mk(56,`ISO 8601 apenas data: `),Jc(57,`code`),Mk(58,`'2026-05-12'`),Kg()(),Jc(59,`li`),Mk(60,`JavaScript Date Object: `),Jc(61,`code`),Mk(62,`new Date(2026, 4, 12, 14, 30)`),Kg()()(),Jc(63,`p`),Mk(64,`O formato de saída do `),Jc(65,`em`),Mk(66,`model`),Kg(),Mk(67,` é sempre ISO 8601 com timezone local: `),Jc(68,`code`),Mk(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),Kg(),Mk(70,`
(ou `),Jc(71,`code`),Mk(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),Kg(),Mk(73,` quando `),Jc(74,`code`),Mk(75,`p-show-seconds`),Kg(),Mk(76,` está ativo).`),Kg(),Jc(77,`p`)(78,`strong`),Mk(79,`Importante:`),Kg()(),Jc(80,`ul`)(81,`li`),Mk(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),Kg(),Jc(83,`li`),Mk(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),Kg(),Jc(85,`li`),Mk(86,`Caso a data/hora esteja inválida, o `),Jc(87,`code`),Mk(88,`model`),Kg(),Mk(89,` receberá a mensagem de erro localizada.`),Kg(),Jc(90,`li`),Mk(91,`Datas no formato ISO (ex.: `),Jc(92,`code`),Mk(93,`'0050-05-10'`),Kg(),Mk(94,`) com ano inferior a 100 são mantidas. Ao informar um objeto `),Jc(95,`code`),Mk(96,`Date`),Kg(),Mk(97,`
com ano inferior a 100, utilize o m\xE9todo `),Jc(98,`a`,6)(99,`code`),Mk(100,`setFullYear`),Kg()(),Mk(101,`,
pois o `),Jc(102,`a`,7)(103,`code`),Mk(104,`new Date`),Kg()(),Mk(105,` converte esses anos para 19XX.`),Kg(),Jc(106,`li`),Mk(107,`Caso o `),Jc(108,`code`),Mk(109,`input`),Kg(),Mk(110,` esteja passando um `),Jc(111,`code`),Mk(112,`[(ngModel)]`),Kg(),Mk(113,`, mas não tenha um `),Jc(114,`code`),Mk(115,`name`),Kg(),Mk(116,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Jc(117,`code`),Mk(118,`[ngModelOptions]="{standalone: true}"`),Kg(),Mk(119,`).`),Kg()(),Jc(120,`p`),Mk(121,`Exemplo:`),Kg(),Jc(122,`pre`)(123,`code`),Mk(124,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),Kg()(),Jc(125,`blockquote`)(126,`p`),Mk(127,`Não esqueça de importar o `),Jc(128,`code`),Mk(129,`FormsModule`),Kg(),Mk(130,` em seu módulo, tal como para utilizar o `),Jc(131,`code`),Mk(132,`input default`),Kg(),Mk(133,`.`),Kg()(),Jc(134,`h4`),Mk(135,`Tokens customizáveis`),Kg(),Jc(136,`p`),Mk(137,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(138,`br`),Mk(139,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(140,`code`),Mk(141,`.po-input`),Kg()(),Jc(142,`blockquote`)(143,`p`),Mk(144,`Para maiores informações, acesse o guia `),Jc(145,`a`,8),Mk(146,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(147,`.`),Kg()(),Jc(148,`table`)(149,`thead`)(150,`tr`)(151,`th`),Mk(152,`Propriedade`),Kg(),Jc(153,`th`),Mk(154,`Descrição`),Kg(),Jc(155,`th`),Mk(156,`Valor Padrão`),Kg()()(),Jc(157,`tbody`)(158,`tr`)(159,`td`)(160,`strong`),Mk(161,`Default Values`),Kg()(),_u(162,`td`)(163,`td`),Kg(),Jc(164,`tr`)(165,`td`)(166,`code`),Mk(167,`--font-family`),Kg()(),Jc(168,`td`),Mk(169,`Família tipográfica usada`),Kg(),Jc(170,`td`)(171,`code`),Mk(172,`var(--font-family-theme)`),Kg()()(),Jc(173,`tr`)(174,`td`)(175,`code`),Mk(176,`--font-size`),Kg()(),Jc(177,`td`),Mk(178,`Tamanho da fonte`),Kg(),Jc(179,`td`)(180,`code`),Mk(181,`var(--font-size-default)`),Kg()()(),Jc(182,`tr`)(183,`td`)(184,`code`),Mk(185,`--text-color-placeholder`),Kg(),Mk(186,` \xA0`),Kg(),Jc(187,`td`),Mk(188,`Cor principal do texto do placeholder`),Kg(),Jc(189,`td`)(190,`code`),Mk(191,`var(--color-neutral-light-30)`),Kg()()(),Jc(192,`tr`)(193,`td`)(194,`code`),Mk(195,`--color`),Kg()(),Jc(196,`td`),Mk(197,`Cor principal do datetimepicker`),Kg(),Jc(198,`td`)(199,`code`),Mk(200,`var(--color-neutral-dark-70)`),Kg()()(),Jc(201,`tr`)(202,`td`)(203,`code`),Mk(204,`--background`),Kg()(),Jc(205,`td`),Mk(206,`Cor de background`),Kg(),Jc(207,`td`)(208,`code`),Mk(209,`var(--color-neutral-light-05)`),Kg()()(),Jc(210,`tr`)(211,`td`)(212,`code`),Mk(213,`--padding`),Kg()(),Jc(214,`td`),Mk(215,`Preenchimento`),Kg(),Jc(216,`td`)(217,`code`),Mk(218,`0 0.5rem`),Kg()()(),Jc(219,`tr`)(220,`td`)(221,`code`),Mk(222,`--text-color`),Kg()(),Jc(223,`td`),Mk(224,`Cor do texto`),Kg(),Jc(225,`td`)(226,`code`),Mk(227,`var(--color-neutral-dark-90)`),Kg()()(),Jc(228,`tr`)(229,`td`)(230,`code`),Mk(231,`--field-container-title-justify`),Kg()(),Jc(232,`td`),Mk(233,`Alinhamento horizontal do título (`),Jc(234,`code`),Mk(235,`justify-content`),Kg(),Mk(236,`)`),Kg(),Jc(237,`td`)(238,`code`),Mk(239,`space-between`),Kg()()(),Jc(240,`tr`)(241,`td`)(242,`code`),Mk(243,`--field-container-title-flex`),Kg()(),Jc(244,`td`),Mk(245,`Flex do título (`),Jc(246,`code`),Mk(247,`flex`),Kg(),Mk(248,`)`),Kg(),Jc(249,`td`)(250,`code`),Mk(251,`1 auto`),Kg()()(),Jc(252,`tr`)(253,`td`)(254,`strong`),Mk(255,`Hover`),Kg()(),_u(256,`td`)(257,`td`),Kg(),Jc(258,`tr`)(259,`td`)(260,`code`),Mk(261,`--color-hover`),Kg()(),Jc(262,`td`),Mk(263,`Cor principal no estado hover`),Kg(),Jc(264,`td`)(265,`code`),Mk(266,`var(--color-brand-01-dark)`),Kg()()(),Jc(267,`tr`)(268,`td`)(269,`code`),Mk(270,`--background-hover`),Kg()(),Jc(271,`td`),Mk(272,`Cor de background no estado hover`),Kg(),Jc(273,`td`)(274,`code`),Mk(275,`var(--color-brand-01-lightest)`),Kg()()(),Jc(276,`tr`)(277,`td`)(278,`strong`),Mk(279,`Focused`),Kg()(),_u(280,`td`)(281,`td`),Kg(),Jc(282,`tr`)(283,`td`)(284,`code`),Mk(285,`--color-focused`),Kg()(),Jc(286,`td`),Mk(287,`Cor principal no estado de focus`),Kg(),Jc(288,`td`)(289,`code`),Mk(290,`var(--color-action-default)`),Kg()()(),Jc(291,`tr`)(292,`td`)(293,`code`),Mk(294,`--outline-color-focused`),Kg()(),Jc(295,`td`),Mk(296,`Cor do outline do estado de focus`),Kg(),Jc(297,`td`)(298,`code`),Mk(299,`var(--color-action-focus)`),Kg()()(),Jc(300,`tr`)(301,`td`)(302,`strong`),Mk(303,`Disabled`),Kg()(),_u(304,`td`)(305,`td`),Kg(),Jc(306,`tr`)(307,`td`)(308,`code`),Mk(309,`--color-disabled`),Kg()(),Jc(310,`td`),Mk(311,`Cor principal no estado disabled`),Kg(),Jc(312,`td`)(313,`code`),Mk(314,`var(--color-neutral-light-30)`),Kg()()(),Jc(315,`tr`)(316,`td`)(317,`code`),Mk(318,`--background-disabled`),Kg()(),Jc(319,`td`),Mk(320,`Cor de background no estado disabled \xA0`),Kg(),Jc(321,`td`)(322,`code`),Mk(323,`var(--color-neutral-light-20)`),Kg()()(),Jc(324,`tr`)(325,`td`)(326,`code`),Mk(327,`--text-color-disabled`),Kg()(),Jc(328,`td`),Mk(329,`Cor do texto no estado disabled`),Kg(),Jc(330,`td`)(331,`code`),Mk(332,`var(--color-neutral-dark-70)`),Kg()()()()()(),Jc(333,`div`,9)(334,`h4`,10),Mk(335,`Seletor`),Kg(),Jc(336,`pre`,11),Mk(337,`<po-datetimepicker
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
`),Kg()(),Jc(338,`h4`,12),Mk(339,`Propriedades`),Kg(),Jc(340,`table`,13)(341,`tr`,14)(342,`th`,15),Mk(343,`Nome`),Kg(),Jc(344,`th`,15),Mk(345,`Tipo`),Kg(),Jc(346,`th`,15),Mk(347,`Padrão`),Kg(),Jc(348,`th`,15),Mk(349,`Descrição`),Kg()(),Jc(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),Mk(354,` p-append-in-body`),_u(355,`br`),Kg()()(),Jc(356,`td`,20)(357,`code`,21),Mk(358,`boolean`),Kg()(),Jc(359,`td`,22)(360,`p`)(361,`code`),Mk(362,`false`),Kg()()(),Jc(363,`td`,23)(364,`em`)(365,`strong`),Mk(366,`(opcional)`),Kg()(),Jc(367,`p`),Mk(368,`Define que o `),Jc(369,`code`),Mk(370,`calendar`),Kg(),Mk(371,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),Kg()()(),Jc(372,`tr`,24)(373,`td`,17)(374,`div`,18)(375,`span`,19),Mk(376,` p-auto-focus`),_u(377,`br`),Kg()()(),Jc(378,`td`,20)(379,`code`,21),Mk(380,`boolean`),Kg()(),Jc(381,`td`,22)(382,`p`)(383,`code`),Mk(384,`false`),Kg()()(),Jc(385,`td`,23)(386,`em`)(387,`strong`),Mk(388,`(opcional)`),Kg()(),Jc(389,`p`),Mk(390,`Aplica foco no elemento ao ser iniciado.`),Kg()()(),Jc(391,`tr`,25)(392,`td`,17)(393,`div`,26)(394,`span`,27),Mk(395,` (p-change-model)`),_u(396,`br`),Kg()()(),Jc(397,`td`,20)(398,`code`,28),Mk(399,`EventEmitter`),Kg()(),Jc(400,`td`,22),Mk(401,`-`),Kg(),Jc(402,`td`,23)(403,`em`)(404,`strong`),Mk(405,`(opcional)`),Kg()(),Jc(406,`p`),Mk(407,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(408,`code`),Mk(409,`setValue`),Kg(),Mk(410,`, `),Jc(411,`code`),Mk(412,`patchValue`),Kg(),Mk(413,`, carregamento assíncrono).`),Kg(),Jc(414,`p`),Mk(415,`Diferentemente do `),Jc(416,`code`),Mk(417,`p-change`),Kg(),Mk(418,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(419,`code`),Mk(420,`p-change-model`),Kg(),Mk(421,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(422,`p`),Mk(423,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(424,`tr`,29)(425,`td`,17)(426,`div`,18)(427,`span`,19),Mk(428,` p-clean`),_u(429,`br`),Kg()()(),Jc(430,`td`,20)(431,`code`,21),Mk(432,`boolean `),Kg(),Jc(433,`code`,30),Mk(434,` string`),Kg()(),Jc(435,`td`,22)(436,`p`)(437,`code`),Mk(438,`false`),Kg()()(),Jc(439,`td`,23)(440,`em`)(441,`strong`),Mk(442,`(opcional)`),Kg()(),Jc(443,`p`),Mk(444,`Habilita ação para limpar o campo.`),Kg()()(),Jc(445,`tr`,31)(446,`td`,17)(447,`div`,18)(448,`span`,19),Mk(449,` p-compact-label`),_u(450,`br`),Kg()()(),Jc(451,`td`,20)(452,`code`,21),Mk(453,`boolean`),Kg()(),Jc(454,`td`,22)(455,`p`)(456,`code`),Mk(457,`false`),Kg()()(),Jc(458,`td`,23)(459,`em`)(460,`strong`),Mk(461,`(opcional)`),Kg()(),Jc(462,`p`),Mk(463,`Define se o título do campo será exibido de forma compacta.`),Kg()()(),Jc(464,`tr`,32)(465,`td`,17)(466,`div`,18)(467,`span`,19),Mk(468,` p-format-date`),_u(469,`br`),Kg()()(),Jc(470,`td`,20)(471,`code`,30),Mk(472,`string`),Kg()(),Jc(473,`td`,22)(474,`p`),Mk(475,`Determinado pelo locale`),Kg()(),Jc(476,`td`,23)(477,`em`)(478,`strong`),Mk(479,`(opcional)`),Kg()(),Jc(480,`p`),Mk(481,`Define o formato de exibição da data.`),Kg(),Jc(482,`p`),Mk(483,`Valores válidos:`),Kg(),Jc(484,`ul`)(485,`li`)(486,`code`),Mk(487,`dd/mm/yyyy`),Kg()(),Jc(488,`li`)(489,`code`),Mk(490,`mm/dd/yyyy`),Kg()(),Jc(491,`li`)(492,`code`),Mk(493,`yyyy/mm/dd`),Kg()()(),Jc(494,`p`),Mk(495,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Kg(),Jc(496,`ul`)(497,`li`)(498,`code`),Mk(499,`en`),Kg(),Mk(500,` → `),Jc(501,`code`),Mk(502,`mm/dd/yyyy`),Kg()(),Jc(503,`li`)(504,`code`),Mk(505,`pt`),Kg(),Mk(506,`, `),Jc(507,`code`),Mk(508,`es`),Kg(),Mk(509,`, `),Jc(510,`code`),Mk(511,`ru`),Kg(),Mk(512,` → `),Jc(513,`code`),Mk(514,`dd/mm/yyyy`),Kg()()()()(),Jc(515,`tr`,33)(516,`td`,17)(517,`div`,18)(518,`span`,19),Mk(519,` p-disabled`),_u(520,`br`),Kg()()(),Jc(521,`td`,20)(522,`code`,21),Mk(523,`boolean `),Kg(),Jc(524,`code`,30),Mk(525,` string`),Kg()(),Jc(526,`td`,22)(527,`p`)(528,`code`),Mk(529,`false`),Kg()()(),Jc(530,`td`,23)(531,`em`)(532,`strong`),Mk(533,`(opcional)`),Kg()(),Jc(534,`p`),Mk(535,`Desabilita o campo.`),Kg()()(),Jc(536,`tr`,34)(537,`td`,17)(538,`div`,18)(539,`span`,19),Mk(540,` p-error-limit`),_u(541,`br`),Kg()()(),Jc(542,`td`,20)(543,`code`,21),Mk(544,`boolean`),Kg()(),Jc(545,`td`,22)(546,`p`)(547,`code`),Mk(548,`false`),Kg()()(),Jc(549,`td`,23)(550,`em`)(551,`strong`),Mk(552,`(opcional)`),Kg()(),Jc(553,`p`),Mk(554,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg()()(),Jc(555,`tr`,35)(556,`td`,17)(557,`div`,18)(558,`span`,19),Mk(559,` p-error-pattern`),_u(560,`br`),Kg()()(),Jc(561,`td`,20)(562,`code`,30),Mk(563,`string`),Kg()(),Jc(564,`td`,22),Mk(565,`-`),Kg(),Jc(566,`td`,23)(567,`em`)(568,`strong`),Mk(569,`(opcional)`),Kg()(),Jc(570,`p`),Mk(571,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),Kg()()(),Jc(572,`tr`,36)(573,`td`,17)(574,`div`,18)(575,`span`,19),Mk(576,` p-help`),_u(577,`br`),Kg()()(),Jc(578,`td`,20)(579,`code`,30),Mk(580,`string`),Kg()(),Jc(581,`td`,22),Mk(582,`-`),Kg(),Jc(583,`td`,23)(584,`em`)(585,`strong`),Mk(586,`(opcional)`),Kg()(),Jc(587,`p`),Mk(588,`Texto de apoio do campo.`),Kg()()(),Jc(589,`tr`,37)(590,`td`,17)(591,`div`,26)(592,`span`,27),Mk(593,` (p-keydown)`),_u(594,`br`),Kg()()(),Jc(595,`td`,20)(596,`code`,28),Mk(597,`EventEmitter`),Kg()(),Jc(598,`td`,22),Mk(599,`-`),Kg(),Jc(600,`td`,23)(601,`em`)(602,`strong`),Mk(603,`(opcional)`),Kg()(),Jc(604,`p`),Mk(605,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),Kg()()(),Jc(606,`tr`,38)(607,`td`,17)(608,`div`,18)(609,`span`,19),Mk(610,` p-label`),_u(611,`br`),Kg()()(),Jc(612,`td`,20)(613,`code`,30),Mk(614,`string`),Kg()(),Jc(615,`td`,22),Mk(616,`-`),Kg(),Jc(617,`td`,23)(618,`em`)(619,`strong`),Mk(620,`(opcional)`),Kg()(),Jc(621,`p`),Mk(622,`Rótulo do campo.`),Kg()()(),Jc(623,`tr`,39)(624,`td`,17)(625,`div`,18)(626,`span`,19),Mk(627,` p-label-text-wrap`),_u(628,`br`),Kg()()(),Jc(629,`td`,20)(630,`code`,21),Mk(631,`boolean`),Kg()(),Jc(632,`td`,22)(633,`p`)(634,`code`),Mk(635,`false`),Kg()()(),Jc(636,`td`,23)(637,`em`)(638,`strong`),Mk(639,`(opcional)`),Kg()(),Jc(640,`p`),Mk(641,`Habilita a quebra automática do texto da propriedade `),Jc(642,`code`),Mk(643,`p-label`),Kg(),Mk(644,`.`),Kg()()(),Jc(645,`tr`,40)(646,`td`,17)(647,`div`,18)(648,`span`,19),Mk(649,` p-loading`),_u(650,`br`),Kg()()(),Jc(651,`td`,20)(652,`code`,21),Mk(653,`boolean `),Kg(),Jc(654,`code`,30),Mk(655,` string`),Kg()(),Jc(656,`td`,22)(657,`p`)(658,`code`),Mk(659,`false`),Kg()()(),Jc(660,`td`,23)(661,`em`)(662,`strong`),Mk(663,`(opcional)`),Kg()(),Jc(664,`p`),Mk(665,`Exibe um ícone de carregamento no lado direito do campo.`),Kg()()(),Jc(666,`tr`,41)(667,`td`,17)(668,`div`,18)(669,`span`,19),Mk(670,` p-locale`),_u(671,`br`),Kg()()(),Jc(672,`td`,20)(673,`code`,30),Mk(674,`string`),Kg()(),Jc(675,`td`,22),Mk(676,`-`),Kg(),Jc(677,`td`,23)(678,`em`)(679,`strong`),Mk(680,`(opcional)`),Kg()(),Jc(681,`p`),Mk(682,`Idioma do componente.`),Kg(),Jc(683,`blockquote`)(684,`p`),Mk(685,`O locale padrão será recuperado com base no `),Jc(686,`a`,42)(687,`code`),Mk(688,`PoI18nService`),Kg()(),Mk(689,` ou `),Jc(690,`em`),Mk(691,`browser`),Kg(),Mk(692,`.`),Kg()()()(),Jc(693,`tr`,43)(694,`td`,17)(695,`div`,18)(696,`span`,19),Mk(697,` p-max-date`),_u(698,`br`),Kg()()(),Jc(699,`td`,20)(700,`code`,30),Mk(701,`string `),Kg(),Jc(702,`code`,44),Mk(703,` Date`),Kg()(),Jc(704,`td`,22),Mk(705,`-`),Kg(),Jc(706,`td`,23)(707,`em`)(708,`strong`),Mk(709,`(opcional)`),Kg()(),Jc(710,`p`),Mk(711,`Define uma data máxima para o `),Jc(712,`code`),Mk(713,`po-datetimepicker`),Kg(),Mk(714,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),Kg(),Jc(715,`p`),Mk(716,`Aceita os formatos:`),Kg(),Jc(717,`ul`)(718,`li`)(719,`code`),Mk(720,`Date`),Kg(),Mk(721,` object: `),Jc(722,`code`),Mk(723,`new Date(2026, 4, 31)`),Kg()(),Jc(724,`li`),Mk(725,`ISO string: `),Jc(726,`code`),Mk(727,`'2026-05-31'`),Kg()(),Jc(728,`li`),Mk(729,`ISO com hora: `),Jc(730,`code`),Mk(731,`'2026-05-31T23:59:59-03:00'`),Kg()()()()(),Jc(732,`tr`,45)(733,`td`,17)(734,`div`,18)(735,`span`,19),Mk(736,` p-max-time`),_u(737,`br`),Kg()()(),Jc(738,`td`,20)(739,`code`,30),Mk(740,`string`),Kg()(),Jc(741,`td`,22),Mk(742,`-`),Kg(),Jc(743,`td`,23)(744,`em`)(745,`strong`),Mk(746,`(opcional)`),Kg()(),Jc(747,`p`),Mk(748,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),Kg(),Jc(749,`p`),Mk(750,`Formato aceito: `),Jc(751,`code`),Mk(752,`HH:mm`),Kg(),Mk(753,` ou `),Jc(754,`code`),Mk(755,`HH:mm:ss`),Kg(),Mk(756,`.`),Kg()()(),Jc(757,`tr`,46)(758,`td`,17)(759,`div`,18)(760,`span`,19),Mk(761,` p-min-date`),_u(762,`br`),Kg()()(),Jc(763,`td`,20)(764,`code`,30),Mk(765,`string `),Kg(),Jc(766,`code`,44),Mk(767,` Date`),Kg()(),Jc(768,`td`,22),Mk(769,`-`),Kg(),Jc(770,`td`,23)(771,`em`)(772,`strong`),Mk(773,`(opcional)`),Kg()(),Jc(774,`p`),Mk(775,`Define uma data mínima para o `),Jc(776,`code`),Mk(777,`po-datetimepicker`),Kg(),Mk(778,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),Kg(),Jc(779,`p`),Mk(780,`Aceita os formatos:`),Kg(),Jc(781,`ul`)(782,`li`)(783,`code`),Mk(784,`Date`),Kg(),Mk(785,` object: `),Jc(786,`code`),Mk(787,`new Date(2026, 0, 1)`),Kg()(),Jc(788,`li`),Mk(789,`ISO string: `),Jc(790,`code`),Mk(791,`'2026-01-01'`),Kg()(),Jc(792,`li`),Mk(793,`ISO com hora: `),Jc(794,`code`),Mk(795,`'2026-01-01T00:00:00-03:00'`),Kg()()()()(),Jc(796,`tr`,47)(797,`td`,17)(798,`div`,18)(799,`span`,19),Mk(800,` p-min-time`),_u(801,`br`),Kg()()(),Jc(802,`td`,20)(803,`code`,30),Mk(804,`string`),Kg()(),Jc(805,`td`,22),Mk(806,`-`),Kg(),Jc(807,`td`,23)(808,`em`)(809,`strong`),Mk(810,`(opcional)`),Kg()(),Jc(811,`p`),Mk(812,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),Kg(),Jc(813,`p`),Mk(814,`Formato aceito: `),Jc(815,`code`),Mk(816,`HH:mm`),Kg(),Mk(817,` ou `),Jc(818,`code`),Mk(819,`HH:mm:ss`),Kg(),Mk(820,`.`),Kg()()(),Jc(821,`tr`,48)(822,`td`,17)(823,`div`,18)(824,`span`,19),Mk(825,` p-minute-interval`),_u(826,`br`),Kg()()(),Jc(827,`td`,20)(828,`code`,49),Mk(829,`number`),Kg()(),Jc(830,`td`,22)(831,`p`)(832,`code`),Mk(833,`5`),Kg()()(),Jc(834,`td`,23)(835,`em`)(836,`strong`),Mk(837,`(opcional)`),Kg()(),Jc(838,`p`),Mk(839,`Define o intervalo entre os minutos exibidos no painel do timer.`),Kg()()(),Jc(840,`tr`,50)(841,`td`,17)(842,`div`,18)(843,`span`,19),Mk(844,` name`),_u(845,`br`),Kg()()(),Jc(846,`td`,20)(847,`code`,30),Mk(848,`string`),Kg()(),Jc(849,`td`,22),Mk(850,`-`),Kg(),Jc(851,`td`,23)(852,`em`)(853,`strong`),Mk(854,`(opcional)`),Kg()(),Jc(855,`p`),Mk(856,`Nome do componente.`),Kg()()(),Jc(857,`tr`,51)(858,`td`,17)(859,`div`,18)(860,`span`,19),Mk(861,` p-no-autocomplete`),_u(862,`br`),Kg()()(),Jc(863,`td`,20)(864,`code`,21),Mk(865,`boolean `),Kg(),Jc(866,`code`,30),Mk(867,` string`),Kg()(),Jc(868,`td`,22)(869,`p`)(870,`code`),Mk(871,`false`),Kg()()(),Jc(872,`td`,23)(873,`em`)(874,`strong`),Mk(875,`(opcional)`),Kg()(),Jc(876,`p`),Mk(877,`Define a propriedade nativa `),Jc(878,`code`),Mk(879,`autocomplete`),Kg(),Mk(880,` do campo como `),Jc(881,`code`),Mk(882,`off`),Kg(),Mk(883,`.`),Kg()()(),Jc(884,`tr`,52)(885,`td`,17)(886,`div`,26)(887,`span`,27),Mk(888,` (p-blur)`),_u(889,`br`),Kg()()(),Jc(890,`td`,20)(891,`code`,28),Mk(892,`EventEmitter`),Kg()(),Jc(893,`td`,22),Mk(894,`-`),Kg(),Jc(895,`td`,23)(896,`em`)(897,`strong`),Mk(898,`(opcional)`),Kg()(),Jc(899,`p`),Mk(900,`Evento disparado ao sair do campo (blur).`),Kg()()(),Jc(901,`tr`,53)(902,`td`,17)(903,`div`,26)(904,`span`,27),Mk(905,` (p-change)`),_u(906,`br`),Kg()()(),Jc(907,`td`,20)(908,`code`,28),Mk(909,`EventEmitter`),Kg()(),Jc(910,`td`,22),Mk(911,`-`),Kg(),Jc(912,`td`,23)(913,`em`)(914,`strong`),Mk(915,`(opcional)`),Kg()(),Jc(916,`p`),Mk(917,`Evento disparado ao alterar valor do campo.`),Kg()()(),Jc(918,`tr`,54)(919,`td`,17)(920,`div`,18)(921,`span`,19),Mk(922,` p-optional`),_u(923,`br`),Kg()()(),Jc(924,`td`,20)(925,`code`,21),Mk(926,`boolean`),Kg()(),Jc(927,`td`,22)(928,`p`)(929,`code`),Mk(930,`false`),Kg()()(),Jc(931,`td`,23)(932,`em`)(933,`strong`),Mk(934,`(opcional)`),Kg()(),Jc(935,`p`),Mk(936,`Define se a indicação de campo opcional será exibida.`),Kg()()(),Jc(937,`tr`,55)(938,`td`,17)(939,`div`,18)(940,`span`,19),Mk(941,` p-placeholder`),_u(942,`br`),Kg()()(),Jc(943,`td`,20)(944,`code`,30),Mk(945,`string`),Kg()(),Jc(946,`td`,22),Mk(947,`-`),Kg(),Jc(948,`td`,23)(949,`em`)(950,`strong`),Mk(951,`(opcional)`),Kg()(),Jc(952,`p`),Mk(953,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Jc(954,`tr`,56)(955,`td`,17)(956,`div`,18)(957,`span`,19),Mk(958,` p-helper`),_u(959,`br`),Kg()()(),Jc(960,`td`,20)(961,`code`,57),Mk(962,`PoHelperOptions `),Kg(),Jc(963,`code`,30),Mk(964,` string`),Kg()(),Jc(965,`td`,22),Mk(966,`-`),Kg(),Jc(967,`td`,23)(968,`em`)(969,`strong`),Mk(970,`(opcional)`),Kg()(),Jc(971,`p`),Mk(972,`Define as opções do componente de ajuda (po-helper).`),Kg(),Jc(973,`blockquote`)(974,`p`),Mk(975,`Para mais informações acesse: `),Jc(976,`a`,58),Mk(977,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(978,`.`),Kg()()()(),Jc(979,`tr`,59)(980,`td`,17)(981,`div`,18)(982,`span`,19),Mk(983,` p-readonly`),_u(984,`br`),Kg()()(),Jc(985,`td`,20)(986,`code`,21),Mk(987,`boolean `),Kg(),Jc(988,`code`,30),Mk(989,` string`),Kg()(),Jc(990,`td`,22)(991,`p`)(992,`code`),Mk(993,`false`),Kg()()(),Jc(994,`td`,23)(995,`em`)(996,`strong`),Mk(997,`(opcional)`),Kg()(),Jc(998,`p`),Mk(999,`Torna o componente somente leitura.`),Kg()()(),Jc(1e3,`tr`,60)(1001,`td`,17)(1002,`div`,18)(1003,`span`,19),Mk(1004,` p-required`),_u(1005,`br`),Kg()()(),Jc(1006,`td`,20)(1007,`code`,21),Mk(1008,`boolean `),Kg(),Jc(1009,`code`,30),Mk(1010,` string`),Kg()(),Jc(1011,`td`,22)(1012,`p`)(1013,`code`),Mk(1014,`false`),Kg()()(),Jc(1015,`td`,23)(1016,`em`)(1017,`strong`),Mk(1018,`(opcional)`),Kg()(),Jc(1019,`p`),Mk(1020,`Define que o campo será obrigatório.`),Kg()()(),Jc(1021,`tr`,61)(1022,`td`,17)(1023,`div`,18)(1024,`span`,19),Mk(1025,` p-second-interval`),_u(1026,`br`),Kg()()(),Jc(1027,`td`,20)(1028,`code`,49),Mk(1029,`number`),Kg()(),Jc(1030,`td`,22)(1031,`p`)(1032,`code`),Mk(1033,`1`),Kg()()(),Jc(1034,`td`,23)(1035,`em`)(1036,`strong`),Mk(1037,`(opcional)`),Kg()(),Jc(1038,`p`),Mk(1039,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Jc(1040,`code`),Mk(1041,`p-show-seconds`),Kg(),Mk(1042,` está ativo.`),Kg()()(),Jc(1043,`tr`,62)(1044,`td`,17)(1045,`div`,18)(1046,`span`,19),Mk(1047,` p-required-field-error-message`),_u(1048,`br`),Kg()()(),Jc(1049,`td`,20)(1050,`code`,21),Mk(1051,`boolean`),Kg()(),Jc(1052,`td`,22)(1053,`p`)(1054,`code`),Mk(1055,`false`),Kg()()(),Jc(1056,`td`,23)(1057,`em`)(1058,`strong`),Mk(1059,`(opcional)`),Kg()(),Jc(1060,`p`),Mk(1061,`Exibe a mensagem setada na propriedade `),Jc(1062,`code`),Mk(1063,`p-error-pattern`),Kg(),Mk(1064,` se o campo estiver vazio e for requerido.`),Kg(),Jc(1065,`blockquote`)(1066,`p`),Mk(1067,`Necessário que a propriedade `),Jc(1068,`code`),Mk(1069,`p-required`),Kg(),Mk(1070,` esteja habilitada.`),Kg()()()(),Jc(1071,`tr`,63)(1072,`td`,17)(1073,`div`,18)(1074,`span`,19),Mk(1075,` p-show-required`),_u(1076,`br`),Kg()()(),Jc(1077,`td`,20)(1078,`code`,21),Mk(1079,`boolean`),Kg()(),Jc(1080,`td`,22)(1081,`p`)(1082,`code`),Mk(1083,`false`),Kg()()(),Jc(1084,`td`,23)(1085,`em`)(1086,`strong`),Mk(1087,`(opcional)`),Kg()(),Jc(1088,`p`),Mk(1089,`Define se a indicação de campo obrigatório será exibida.`),Kg()()(),Jc(1090,`tr`,64)(1091,`td`,17)(1092,`div`,18)(1093,`span`,19),Mk(1094,` p-show-seconds`),_u(1095,`br`),Kg()()(),Jc(1096,`td`,20)(1097,`code`,21),Mk(1098,`boolean`),Kg()(),Jc(1099,`td`,22)(1100,`p`)(1101,`code`),Mk(1102,`false`),Kg()()(),Jc(1103,`td`,23)(1104,`em`)(1105,`strong`),Mk(1106,`(opcional)`),Kg()(),Jc(1107,`p`),Mk(1108,`Exibe a coluna de segundos no painel de seleção do timer.`),Kg()()(),Jc(1109,`tr`,65)(1110,`td`,17)(1111,`div`,18)(1112,`span`,19),Mk(1113,` p-size`),_u(1114,`br`),Kg()()(),Jc(1115,`td`,20)(1116,`code`,30),Mk(1117,`string`),Kg()(),Jc(1118,`td`,22)(1119,`p`)(1120,`code`),Mk(1121,`medium`),Kg()()(),Jc(1122,`td`,23)(1123,`em`)(1124,`strong`),Mk(1125,`(opcional)`),Kg()(),Jc(1126,`p`),Mk(1127,`Define o tamanho do componente:`),Kg(),Jc(1128,`ul`)(1129,`li`)(1130,`code`),Mk(1131,`small`),Kg(),Mk(1132,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(1133,`li`)(1134,`code`),Mk(1135,`medium`),Kg(),Mk(1136,`: altura do input como 44px.`),Kg()()()(),Jc(1137,`tr`,66)(1138,`td`,17)(1139,`div`,18)(1140,`span`,19),Mk(1141,` p-format-time`),_u(1142,`br`),Kg()()(),Jc(1143,`td`,20)(1144,`code`,67),Mk(1145,`PoTimerFormat`),Kg()(),Jc(1146,`td`,22)(1147,`p`),Mk(1148,`Determinado pelo locale`),Kg()(),Jc(1149,`td`,23)(1150,`em`)(1151,`strong`),Mk(1152,`(opcional)`),Kg()(),Jc(1153,`p`),Mk(1154,`Define o formato de exibição do timer.`),Kg(),Jc(1155,`p`),Mk(1156,`Valores válidos:`),Kg(),Jc(1157,`ul`)(1158,`li`)(1159,`code`),Mk(1160,`24`),Kg(),Mk(1161,`: formato de 24 horas (padrão para pt, es, ru)`),Kg(),Jc(1162,`li`)(1163,`code`),Mk(1164,`12`),Kg(),Mk(1165,`: formato de 12 horas com indicador AM/PM (padrão para en)`),Kg()(),Jc(1166,`p`),Mk(1167,`Quando não informado, o formato será determinado automaticamente pelo locale:`),Kg(),Jc(1168,`ul`)(1169,`li`)(1170,`code`),Mk(1171,`en`),Kg(),Mk(1172,` → 12h (AM/PM)`),Kg(),Jc(1173,`li`)(1174,`code`),Mk(1175,`pt`),Kg(),Mk(1176,`, `),Jc(1177,`code`),Mk(1178,`es`),Kg(),Mk(1179,`, `),Jc(1180,`code`),Mk(1181,`ru`),Kg(),Mk(1182,` → 24h`),Kg()()()()(),Jc(1183,`h3`,12),Mk(1184,`Métodos`),Kg(),Jc(1185,`table`,68)(1186,`tr`,69)(1187,`th`,70)(1188,`div`,18)(1189,`h4`)(1190,`span`,19),Mk(1191,` showAdditionalHelp `),Kg()()()()(),Jc(1192,`tr`,23)(1193,`td`,23)(1194,`p`),Mk(1195,`Método que exibe `),Jc(1196,`code`),Mk(1197,`p-helper`),Kg(),Mk(1198,` ou executa a ação definida em `),Jc(1199,`code`),Mk(1200,`p-helper{eventOnClick}`),Kg(),Mk(1201,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1202,`code`),Mk(1203,`p-keydown`),Kg(),Mk(1204,`.`),Kg(),Jc(1205,`blockquote`)(1206,`p`),Mk(1207,`Exibe ou oculta o conteúdo do componente `),Jc(1208,`code`),Mk(1209,`po-helper`),Kg(),Mk(1210,` quando o componente estiver com foco.`),Kg()(),Jc(1211,`pre`)(1212,`code`),Mk(1213,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),Kg()(),Jc(1214,`pre`)(1215,`code`),Mk(1216,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1217,`br`),Kg())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Le(l,Oe){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-datetimepicker-basic-view`)(2,`sample-po-datetimepicker-labs-view`)(3,`sample-po-datetimepicker-12h-seconds-view`)(4,`sample-po-datetimepicker-scheduling-view`),Kg()),l&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var qe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Datetimepicker`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Datetimepicker · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(r,n){r&1&&(Jc(0,`po-page-default`,0),LO(1,Le,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-datetimepicker-doc`),Kg()()),r&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,ue,Se,he,be],encapsulation:2,changeDetection:1})}return l})()}];var fe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[GV.forChild(qe),GV]})}return l})();var Et=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[M,fe]})}return l})();export{Et as DocPoDatetimepickerModule};