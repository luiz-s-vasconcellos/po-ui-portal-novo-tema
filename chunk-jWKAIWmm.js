import{A as Hoe,Cn as oi,Ct as Yoe,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,ai as Sn,dr as DO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var oe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`number`,`p-label`,`PO Number`]],template:function(r,i){r&1&&nu(0,`po-number`,0)},dependencies:[Hoe],encapsulation:2,changeDetection:1})}return l})();var be=l=>({"docs-sample-code-tabs":l});var le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Number Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-number-basic/sample-po-number-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-number-basic/sample-po-number-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-number-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,be,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,oe],encapsulation:2,changeDetection:1})}return l})();var re=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:`an an-currency-circle-dollar`,label:`an an-currency-circle-dollar`},{value:`an an-currency-btc`,label:`an an-currency-btc`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event=``,this.messageErrorPattern=``,this.label=void 0,this.placeholder=``,this.help=``,this.icon=``,this.size=`medium`,this.step=void 0,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-labs`]],standalone:!1,decls:23,vars:43,consts:[[`f`,`ngForm`],[`name`,`PO number`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-max`,`p-maxlength`,`p-min`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-step`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`messageErrorPattern`,`p-clean`,``,`p-label`,`Message error pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Minlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Maxlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`step`,`p-clean`,``,`p-label`,`Step`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Ax();jc(0,`po-number`,1),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.number,o)||(i.number=o),__(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.label,o)||(i.label=o),__(o)}),wg(),jc(9,`po-input`,6),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.help,o)||(i.help=o),__(o)}),wg(),jc(10,`po-input`,7),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.helperText,o)||(i.helperText=o),__(o)}),wg(),jc(11,`po-input`,8),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.placeholder,o)||(i.placeholder=o),__(o)}),wg(),jc(12,`po-input`,9),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.messageErrorPattern,o)||(i.messageErrorPattern=o),__(o)}),wg(),jc(13,`po-number`,10),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.min,o)||(i.min=o),__(o)}),wg(),jc(14,`po-number`,11),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.minlength,o)||(i.minlength=o),__(o)}),wg(),jc(15,`po-number`,12),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.max,o)||(i.max=o),__(o)}),wg(),jc(16,`po-number`,13),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.maxlength,o)||(i.maxlength=o),__(o)}),wg(),jc(17,`po-number`,14),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.step,o)||(i.step=o),__(o)}),wg(),jc(18,`po-select`,15),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.icon,o)||(i.icon=o),__(o)}),wg(),jc(19,`po-checkbox-group`,16),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.properties,o)||(i.properties=o),__(o)}),wg(),jc(20,`po-radio-group`,17),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.size,o)||(i.size=o),__(o)}),wg(),jc(21,`div`,2)(22,`po-button`,18),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(sb(`ngModel`,i.number),UE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.messageErrorPattern)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-max`,i.max)(`p-maxlength`,i.maxlength)(`p-min`,i.min)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-step`,i.step)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),o0(),rg(3),UE(`p-value`,i.number),rg(),UE(`p-value`,i.event),rg(4),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.help),o0(),rg(),sb(`ngModel`,i.helperText),o0(),rg(),sb(`ngModel`,i.placeholder),o0(),rg(),sb(`ngModel`,i.messageErrorPattern),o0(),rg(),sb(`ngModel`,i.min),o0(),rg(),sb(`ngModel`,i.minlength),o0(),rg(),sb(`ngModel`,i.max),o0(),rg(),sb(`ngModel`,i.maxlength),o0(),rg(),sb(`ngModel`,i.step),o0(),rg(),sb(`ngModel`,i.icon),UE(`p-options`,i.iconOptions),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Hoe,Gte,Woe,Yoe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l});var me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Number Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-number-labs/sample-po-number-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-number>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-number-labs/sample-po-number-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  helperText: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
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
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-number-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,he,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,re],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:`São Paulo`},{value:17,label:`Alagoas`},{value:15,label:`Ceará`}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-calculate`]],standalone:!1,decls:16,vars:9,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`price`,`p-label`,`Price`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,`p-required`,``,`p-sort`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icms`,`p-label`,`ICMS %`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`liquid`,`p-label`,`Liquid`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`total`,`p-label`,`Total`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Calculate`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let p=Ax();jc(0,`h3`),lO(1,`Calculate Tax`),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,2),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.price,o)||(i.price=o),__(o)}),wg(),jc(7,`po-number`,3),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.quantity,o)||(i.quantity=o),__(o)}),wg()(),jc(8,`div`)(9,`po-select`,4),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.state,o)||(i.state=o),__(o)}),mt(`p-change`,function(){return i.loadICMS()}),wg(),jc(10,`po-number`,5),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.icms,o)||(i.icms=o),__(o)}),wg(),jc(11,`po-number`,6),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.liquid,o)||(i.liquid=o),__(o)}),wg(),jc(12,`po-number`,7),r0(),ab(`ngModelChange`,function(o){return v_(p),uO(i.total,o)||(i.total=o),__(o)}),wg()(),jc(13,`div`,1)(14,`po-button`,8),mt(`p-click`,function(){return i.calculate()}),wg(),jc(15,`po-button`,9),mt(`p-click`,function(){v_(p);let o=Bx(4);return __(o.reset())}),wg()()()}if(r&2){let p=Bx(4);rg(6),sb(`ngModel`,i.price),o0(),rg(),sb(`ngModel`,i.quantity),o0(),rg(2),sb(`ngModel`,i.state),UE(`p-options`,i.statesOptions),o0(),rg(),sb(`ngModel`,i.icms),o0(),rg(),sb(`ngModel`,i.liquid),o0(),rg(),sb(`ngModel`,i.total),o0(),rg(2),UE(`p-disabled`,p.invalid),rg(),UE(`p-disabled`,p.invalid)}},dependencies:[RK,SK,MK,xF,SF,oi,Lf,Hoe,Woe],encapsulation:2,changeDetection:1})}return l})();var Ce=l=>({"docs-sample-code-tabs":l});var pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-calculate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Number - Calculate`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-number-calculate/sample-po-number-calculate.component.html`),wg(),jc(13,`pre`,7),lO(14,`<h3>Calculate Tax</h3>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-number-calculate/sample-po-number-calculate.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-number-calculate`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ce,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-doc`]],standalone:!1,decls:1434,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoNumberComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),wg(),jc(24,`p`),lO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),lO(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),wg()(),jc(29,`h4`),lO(30,`Tokens customizáveis`),wg(),jc(31,`p`),lO(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(33,`br`),lO(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(35,`code`),lO(36,`.po-input`),wg()(),jc(37,`blockquote`)(38,`p`),lO(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),jc(40,`a`,6),lO(41,`Grid System`),wg(),lO(42,`.`),wg()(),jc(43,`blockquote`)(44,`p`),lO(45,`Para maiores informações, acesse o guia `),jc(46,`a`,7),lO(47,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(48,`.`),wg()(),jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),lO(53,`Propriedade`),wg(),jc(54,`th`),lO(55,`Descrição`),wg(),jc(56,`th`),lO(57,`Valor Padrão`),wg()()(),jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),lO(62,`Default Values`),wg()(),nu(63,`td`)(64,`td`),wg(),jc(65,`tr`)(66,`td`)(67,`code`),lO(68,`--font-family`),wg()(),jc(69,`td`),lO(70,`Família tipográfica usada`),wg(),jc(71,`td`)(72,`code`),lO(73,`var(--font-family-theme)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),lO(77,`--font-size`),wg()(),jc(78,`td`),lO(79,`Tamanho da fonte`),wg(),jc(80,`td`)(81,`code`),lO(82,`var(--font-size-default)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),lO(86,`--text-color-placeholder`),wg()(),jc(87,`td`),lO(88,`Cor do texto placeholder`),wg(),jc(89,`td`)(90,`code`),lO(91,`var(--color-neutral-light-30)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),lO(95,`--color`),wg()(),jc(96,`td`),lO(97,`Cor pincipal do input`),wg(),jc(98,`td`)(99,`code`),lO(100,`var(--color-neutral-dark-70)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),lO(104,`--background`),wg()(),jc(105,`td`),lO(106,`Cor de background`),wg(),jc(107,`td`)(108,`code`),lO(109,`var(--color-neutral-light-05)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),lO(113,`--padding`),wg()(),jc(114,`td`),lO(115,`Preenchimento`),wg(),jc(116,`td`)(117,`code`),lO(118,`0 0.5rem`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),lO(122,`--text-color`),wg()(),jc(123,`td`),lO(124,`Cor do texto`),wg(),jc(125,`td`)(126,`code`),lO(127,`var(--color-neutral-dark-90)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),lO(131,`--field-container-title-justify`),wg()(),jc(132,`td`),lO(133,`Alinhamento horizontal do título (`),jc(134,`code`),lO(135,`justify-content`),wg(),lO(136,`)`),wg(),jc(137,`td`)(138,`code`),lO(139,`space-between`),wg()()(),jc(140,`tr`)(141,`td`)(142,`code`),lO(143,`--field-container-title-flex`),wg()(),jc(144,`td`),lO(145,`Flex do título (`),jc(146,`code`),lO(147,`flex`),wg(),lO(148,`)`),wg(),jc(149,`td`)(150,`code`),lO(151,`1 auto`),wg()()(),jc(152,`tr`)(153,`td`)(154,`strong`),lO(155,`Hover`),wg()(),nu(156,`td`)(157,`td`),wg(),jc(158,`tr`)(159,`td`)(160,`code`),lO(161,`--color-hover`),wg()(),jc(162,`td`),lO(163,`Cor principal no estado hover`),wg(),jc(164,`td`)(165,`code`),lO(166,`var(--color-brand-01-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),lO(170,`--background-hover`),wg()(),jc(171,`td`),lO(172,`Cor de background no estado hover`),wg(),jc(173,`td`)(174,`code`),lO(175,`var(--color-brand-01-lightest)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`strong`),lO(179,`Focused`),wg()(),nu(180,`td`)(181,`td`),wg(),jc(182,`tr`)(183,`td`)(184,`code`),lO(185,`--color-focused`),wg()(),jc(186,`td`),lO(187,`Cor principal no estado de focus`),wg(),jc(188,`td`)(189,`code`),lO(190,`var(--color-action-default)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),lO(194,`--outline-color-focused`),wg()(),jc(195,`td`),lO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),lO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),lO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),lO(209,`--color-disabled`),wg()(),jc(210,`td`),lO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),lO(214,`var(--color-neutral-light-30)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),lO(218,`--background-disabled`),wg()(),jc(219,`td`),lO(220,`Cor de background no estado disabled`),wg(),jc(221,`td`)(222,`code`),lO(223,`var(--color-neutral-light-20)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),lO(227,`--text-color-disabled`),wg()(),jc(228,`td`),lO(229,`Cor do texto no estado disabled`),wg(),jc(230,`td`)(231,`code`),lO(232,`var(--color-neutral-dark-70)`),wg()()()()(),jc(233,`p`),nu(234,`br`),lO(235,` O `),jc(236,`code`),lO(237,`po-number`),wg(),lO(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),wg()(),jc(239,`div`,8)(240,`h4`,9),lO(241,`Seletor`),wg(),jc(242,`pre`,10),lO(243,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),wg()(),jc(244,`h4`,11),lO(245,`Propriedades`),wg(),jc(246,`table`,12)(247,`tr`,13)(248,`th`,14),lO(249,`Nome`),wg(),jc(250,`th`,14),lO(251,`Tipo`),wg(),jc(252,`th`,14),lO(253,`Padrão`),wg(),jc(254,`th`,14),lO(255,`Descrição`),wg()(),jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),lO(260,` (p-additional-help)`),nu(261,`br`),wg()(),jc(262,`div`,19),lO(263,`Deprecated`),wg()(),jc(264,`td`,20)(265,`code`,21),lO(266,`EventEmitter`),wg()(),jc(267,`td`,22),lO(268,`-`),wg(),jc(269,`td`,23)(270,`em`)(271,`strong`),lO(272,`(opcional)`),wg()(),jc(273,`p`),lO(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(275,`blockquote`)(276,`p`),lO(277,`Essa propriedade está `),jc(278,`strong`),lO(279,`depreciada`),wg(),lO(280,` e será removida na versão `),jc(281,`code`),lO(282,`23.x.x`),wg(),lO(283,`. Recomendamos utilizar a propriedade `),jc(284,`code`),lO(285,`p-helper`),wg(),lO(286,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),lO(291,` p-additional-help-tooltip`),nu(292,`br`),wg()(),jc(293,`div`,19),lO(294,`Deprecated`),wg()(),jc(295,`td`,20)(296,`code`,26),lO(297,`string`),wg()(),jc(298,`td`,22),lO(299,`-`),wg(),jc(300,`td`,23)(301,`em`)(302,`strong`),lO(303,`(opcional)`),wg()(),jc(304,`p`),lO(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(306,`code`),lO(307,`po-helper`),wg(),lO(308,`.
`),jc(309,`strong`),lO(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(311,`blockquote`)(312,`p`),lO(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(314,`blockquote`)(315,`p`),lO(316,`Essa propriedade está `),jc(317,`strong`),lO(318,`depreciada`),wg(),lO(319,` e será removida na versão `),jc(320,`code`),lO(321,`23.x.x`),wg(),lO(322,`. Recomendamos utilizar a propriedade `),jc(323,`code`),lO(324,`p-helper`),wg(),lO(325,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),lO(330,` p-append-in-body`),nu(331,`br`),wg()()(),jc(332,`td`,20)(333,`code`,27),lO(334,`boolean`),wg()(),jc(335,`td`,22)(336,`p`)(337,`code`),lO(338,`false`),wg()()(),jc(339,`td`,23)(340,`em`)(341,`strong`),lO(342,`(opcional)`),wg()(),jc(343,`p`),lO(344,`Define que o popover (`),jc(345,`code`),lO(346,`p-helper`),wg(),lO(347,` e/ou `),jc(348,`code`),lO(349,`p-error-limit`),wg(),lO(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(351,`blockquote`)(352,`p`),lO(353,`Quando utilizado com `),jc(354,`code`),lO(355,`p-helper`),wg(),lO(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),lO(361,` p-auto-focus`),nu(362,`br`),wg()()(),jc(363,`td`,20)(364,`code`,27),lO(365,`boolean`),wg()(),jc(366,`td`,22)(367,`p`)(368,`code`),lO(369,`false`),wg()()(),jc(370,`td`,23)(371,`em`)(372,`strong`),lO(373,`(opcional)`),wg()(),jc(374,`p`),lO(375,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(376,`blockquote`)(377,`p`),lO(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),lO(383,` (p-blur)`),nu(384,`br`),wg()()(),jc(385,`td`,20)(386,`code`,21),lO(387,`EventEmitter`),wg()(),jc(388,`td`,22),lO(389,`-`),wg(),jc(390,`td`,23)(391,`em`)(392,`strong`),lO(393,`(opcional)`),wg()(),jc(394,`p`),lO(395,`Evento disparado ao sair do campo.`),wg()()(),jc(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),lO(400,` (p-change)`),nu(401,`br`),wg()()(),jc(402,`td`,20)(403,`code`,21),lO(404,`EventEmitter`),wg()(),jc(405,`td`,22),lO(406,`-`),wg(),jc(407,`td`,23)(408,`em`)(409,`strong`),lO(410,`(opcional)`),wg()(),jc(411,`p`),lO(412,`Evento disparado ao alterar valor e deixar o campo.`),wg()()(),jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),lO(417,` (p-change-model)`),nu(418,`br`),wg()()(),jc(419,`td`,20)(420,`code`,21),lO(421,`EventEmitter`),wg()(),jc(422,`td`,22),lO(423,`-`),wg(),jc(424,`td`,23)(425,`em`)(426,`strong`),lO(427,`(opcional)`),wg()(),jc(428,`p`),lO(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(430,`code`),lO(431,`setValue`),wg(),lO(432,`, `),jc(433,`code`),lO(434,`patchValue`),wg(),lO(435,`, carregamento assíncrono).`),wg(),jc(436,`p`),lO(437,`Diferentemente do `),jc(438,`code`),lO(439,`p-change`),wg(),lO(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(441,`code`),lO(442,`p-change-model`),wg(),lO(443,` cobre todos os cenários de alteração de valor.`),wg(),jc(444,`p`),lO(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),lO(450,`p-clean`),nu(451,`br`),wg()()(),jc(452,`td`,20)(453,`code`,27),lO(454,`boolean`),wg()(),jc(455,`td`,22),lO(456,`-`),wg(),jc(457,`td`,23)(458,`em`)(459,`strong`),lO(460,`(opcional)`),wg()(),jc(461,`p`),lO(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg()()(),jc(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),lO(467,` p-compact-label`),nu(468,`br`),wg()()(),jc(469,`td`,20)(470,`code`,27),lO(471,`boolean`),wg()(),jc(472,`td`,22)(473,`p`)(474,`code`),lO(475,`false`),wg()()(),jc(476,`td`,23)(477,`em`)(478,`strong`),lO(479,`(opcional)`),wg()(),jc(480,`p`),lO(481,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(482,`p`),lO(483,`Quando habilitado (`),jc(484,`code`),lO(485,`true`),wg(),lO(486,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(487,`ul`)(488,`li`)(489,`code`),lO(490,`po-label`),wg()(),jc(491,`li`)(492,`code`),lO(493,`p-requirement (showRequired)`),wg()(),jc(494,`li`)(495,`code`),lO(496,`po-helper`),wg()()(),jc(497,`p`),lO(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(499,`p`),lO(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(501,`ul`)(502,`li`)(503,`code`),lO(504,`--field-container-title-justify`),wg()(),jc(505,`li`)(506,`code`),lO(507,`--field-container-title-flex`),wg()()(),jc(508,`p`),lO(509,`Exemplo:`),wg(),jc(510,`pre`)(511,`code`),lO(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(513,`p`),lO(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),lO(519,`p-disabled`),nu(520,`br`),wg()()(),jc(521,`td`,20)(522,`code`,27),lO(523,`boolean`),wg()(),jc(524,`td`,22)(525,`p`)(526,`code`),lO(527,`false`),wg()()(),jc(528,`td`,23)(529,`em`)(530,`strong`),lO(531,`(opcional)`),wg()(),jc(532,`p`),lO(533,`Se verdadeiro, desabilita o campo.`),wg()()(),jc(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),lO(538,` p-emit-all-changes`),nu(539,`br`),wg()()(),jc(540,`td`,20)(541,`code`,27),lO(542,`boolean`),wg()(),jc(543,`td`,22)(544,`p`)(545,`code`),lO(546,`false`),wg()()(),jc(547,`td`,23)(548,`em`)(549,`strong`),lO(550,`(opcional)`),wg()(),jc(551,`p`),lO(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),wg()()(),jc(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),lO(557,` (p-enter)`),nu(558,`br`),wg()()(),jc(559,`td`,20)(560,`code`,21),lO(561,`EventEmitter`),wg()(),jc(562,`td`,22),lO(563,`-`),wg(),jc(564,`td`,23)(565,`em`)(566,`strong`),lO(567,`(opcional)`),wg()(),jc(568,`p`),lO(569,`Evento disparado ao entrar do campo.`),wg()()(),jc(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),lO(574,` p-error-async-properties`),nu(575,`br`),wg()()(),jc(576,`td`,20)(577,`code`,28),lO(578,`ErrorAsyncProperties`),wg()(),jc(579,`td`,22),lO(580,`-`),wg(),jc(581,`td`,23)(582,`em`)(583,`strong`),lO(584,`(opcional)`),wg()(),jc(585,`p`),lO(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),jc(587,`code`),lO(588,`Reactive Forms`),wg(),lO(589,`. Em formulários reativos, pode-se utilizar o próprio `),jc(590,`code`),lO(591,`asyncValidators`),wg(),lO(592,`.`),wg()()(),jc(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),lO(597,` p-error-limit`),nu(598,`br`),wg()()(),jc(599,`td`,20)(600,`code`,27),lO(601,`boolean`),wg()(),jc(602,`td`,22)(603,`p`)(604,`code`),lO(605,`false`),wg()()(),jc(606,`td`,23)(607,`em`)(608,`strong`),lO(609,`(opcional)`),wg()(),jc(610,`p`),lO(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(612,`blockquote`)(613,`p`),lO(614,`Caso essa propriedade seja definida como `),jc(615,`code`),lO(616,`true`),wg(),lO(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),lO(622,` p-error-pattern`),nu(623,`br`),wg()()(),jc(624,`td`,20)(625,`code`,26),lO(626,`string`),wg()(),jc(627,`td`,22),lO(628,`-`),wg(),jc(629,`td`,23)(630,`em`)(631,`strong`),lO(632,`(opcional)`),wg()(),jc(633,`p`),lO(634,`Mensagem que será apresentada quando o `),jc(635,`code`),lO(636,`pattern`),wg(),lO(637,` ou a máscara não for satisfeita.`),wg(),jc(638,`blockquote`)(639,`p`),lO(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(641,`code`),lO(642,`p-required-field-error-message`),wg(),lO(643,` em conjunto.`),wg()()()(),jc(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),lO(648,` p-help`),nu(649,`br`),wg()()(),jc(650,`td`,20)(651,`code`,26),lO(652,`string`),wg()(),jc(653,`td`,22),lO(654,`-`),wg(),jc(655,`td`,23)(656,`em`)(657,`strong`),lO(658,`(opcional)`),wg()(),jc(659,`p`),lO(660,`Texto de apoio do campo.`),wg()()(),jc(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),lO(665,` p-icon`),nu(666,`br`),wg()()(),jc(667,`td`,20)(668,`code`,26),lO(669,`string `),wg(),jc(670,`code`,29),lO(671,` TemplateRef<void>`),wg()(),jc(672,`td`,22),lO(673,`-`),wg(),jc(674,`td`,23)(675,`em`)(676,`strong`),lO(677,`(opcional)`),wg()(),jc(678,`p`),lO(679,`Define o ícone que será exibido no início do campo.`),wg(),jc(680,`p`),lO(681,`É possível usar qualquer um dos ícones da `),jc(682,`a`,30),lO(683,`Biblioteca de ícones`),wg(),lO(684,`. conforme exemplo abaixo:`),wg(),jc(685,`pre`)(686,`code`),lO(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),wg()(),jc(688,`p`),lO(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(690,`em`),lO(691,`Font Awesome`),wg(),lO(692,`, da seguinte forma:`),wg(),jc(693,`pre`)(694,`code`),lO(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),wg()(),jc(696,`p`),lO(697,`Outra opção seria a customização do ícone através do `),jc(698,`code`),lO(699,`TemplateRef`),wg(),lO(700,`, conforme exemplo abaixo:`),wg(),jc(701,`pre`)(702,`code`),lO(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(704,`blockquote`)(705,`p`),lO(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(707,`code`),lO(708,`font-size: inherit`),wg(),lO(709,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),lO(714,` (p-keydown)`),nu(715,`br`),wg()()(),jc(716,`td`,20)(717,`code`,21),lO(718,`EventEmitter`),wg()(),jc(719,`td`,22),lO(720,`-`),wg(),jc(721,`td`,23)(722,`em`)(723,`strong`),lO(724,`(opcional)`),wg()(),jc(725,`p`),lO(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(727,`code`),lO(728,`KeyboardEvent`),wg(),lO(729,` com informações sobre a tecla.`),wg()()(),jc(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),lO(734,` p-label`),nu(735,`br`),wg()()(),jc(736,`td`,20)(737,`code`,26),lO(738,`string`),wg()(),jc(739,`td`,22),lO(740,`-`),wg(),jc(741,`td`,23)(742,`em`)(743,`strong`),lO(744,`(opcional)`),wg()(),jc(745,`p`),lO(746,`Rótulo do campo.`),wg()()(),jc(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),lO(751,` p-label-text-wrap`),nu(752,`br`),wg()()(),jc(753,`td`,20)(754,`code`,27),lO(755,`boolean`),wg()(),jc(756,`td`,22)(757,`p`)(758,`code`),lO(759,`false`),wg()()(),jc(760,`td`,23)(761,`em`)(762,`strong`),lO(763,`(opcional)`),wg()(),jc(764,`p`),lO(765,`Habilita a quebra automática do texto da propriedade `),jc(766,`code`),lO(767,`p-label`),wg(),lO(768,`. Quando `),jc(769,`code`),lO(770,`p-label-text-wrap`),wg(),lO(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),lO(776,` p-loading`),nu(777,`br`),wg()()(),jc(778,`td`,20)(779,`code`,27),lO(780,`boolean`),wg()(),jc(781,`td`,22)(782,`p`)(783,`code`),lO(784,`false`),wg()()(),jc(785,`td`,23)(786,`em`)(787,`strong`),lO(788,`(opcional)`),wg()(),jc(789,`p`),lO(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),lO(795,`p-mask`),nu(796,`br`),wg()()(),jc(797,`td`,20)(798,`code`,26),lO(799,`string`),wg()(),jc(800,`td`,22),lO(801,`-`),wg(),jc(802,`td`,23)(803,`em`)(804,`strong`),lO(805,`(opcional)`),wg()(),jc(806,`p`),lO(807,`Indica uma máscara para o campo, porém é incompatível com o `),jc(808,`code`),lO(809,`po-number`),wg(),lO(810,`.`),wg(),jc(811,`blockquote`)(812,`p`)(813,`strong`),lO(814,`Componentes compatíveis:`),wg(),jc(815,`code`),lO(816,`po-input`),wg(),lO(817,`,`),jc(818,`code`),lO(819,`po-decimal`),wg(),lO(820,`.`),wg()()()(),jc(821,`tr`,15)(822,`td`,16)(823,`div`,24)(824,`span`,25),lO(825,`p-mask-format-model`),nu(826,`br`),wg()()(),jc(827,`td`,20)(828,`code`,27),lO(829,`boolean`),wg()(),jc(830,`td`,22)(831,`p`)(832,`code`),lO(833,`false`),wg()()(),jc(834,`td`,23)(835,`em`)(836,`strong`),lO(837,`(opcional)`),wg()(),jc(838,`p`),lO(839,`Indica se o `),jc(840,`code`),lO(841,`model`),wg(),lO(842,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),wg()()(),jc(843,`tr`,15)(844,`td`,16)(845,`div`,24)(846,`span`,25),lO(847,` p-mask-no-length-validation`),nu(848,`br`),wg()()(),jc(849,`td`,20)(850,`code`,27),lO(851,`boolean`),wg()(),jc(852,`td`,22)(853,`p`)(854,`code`),lO(855,`false`),wg()()(),jc(856,`td`,23)(857,`p`),lO(858,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(859,`code`),lO(860,`minLength`),wg(),lO(861,`) e máximo (`),jc(862,`code`),lO(863,`maxLength`),wg(),lO(864,`) quando há uma máscara (`),jc(865,`code`),lO(866,`p-mask`),wg(),lO(867,`) definida.`),wg(),jc(868,`ul`)(869,`li`),lO(870,`Quando `),jc(871,`code`),lO(872,`true`),wg(),lO(873,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(874,`li`),lO(875,`Quando `),jc(876,`code`),lO(877,`false`),wg(),lO(878,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(879,`blockquote`)(880,`p`),lO(881,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(882,`code`),lO(883,`p-mask-format-model`),wg(),lO(884,`.`),wg()(),jc(885,`p`),lO(886,`Exemplo:`),wg(),jc(887,`pre`)(888,`code`),lO(889,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),wg()(),jc(890,`ul`)(891,`li`),lO(892,`Entrada: `),jc(893,`code`),lO(894,`123-456`),wg(),lO(895,` → Validação será aplicada somente aos números, ignorando o caractere especial `),jc(896,`code`),lO(897,`-`),wg(),lO(898,`.`),wg()()()(),jc(899,`tr`,15)(900,`td`,16)(901,`div`,24)(902,`span`,25),lO(903,`p-max`),nu(904,`br`),wg()()(),jc(905,`td`,20)(906,`code`,31),lO(907,`number`),wg()(),jc(908,`td`,22),lO(909,`-`),wg(),jc(910,`td`,23)(911,`em`)(912,`strong`),lO(913,`(opcional)`),wg()(),jc(914,`p`),lO(915,`Valor máximo.`),wg(),jc(916,`blockquote`)(917,`p`),lO(918,`Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `),jc(919,`code`),lO(920,`p-step`),wg(),lO(921,` também passando a ela um valor decimal.`),wg()()()(),jc(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),lO(926,` p-maxlength`),nu(927,`br`),wg()()(),jc(928,`td`,20)(929,`code`,31),lO(930,`number`),wg()(),jc(931,`td`,22),lO(932,`-`),wg(),jc(933,`td`,23)(934,`em`)(935,`strong`),lO(936,`(opcional)`),wg()(),jc(937,`p`),lO(938,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),lO(943,`p-min`),nu(944,`br`),wg()()(),jc(945,`td`,20)(946,`code`,31),lO(947,`number`),wg()(),jc(948,`td`,22),lO(949,`-`),wg(),jc(950,`td`,23)(951,`em`)(952,`strong`),lO(953,`(opcional)`),wg()(),jc(954,`p`),lO(955,`Valor mínimo.`),wg(),jc(956,`blockquote`)(957,`p`),lO(958,`Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `),jc(959,`code`),lO(960,`p-step`),wg(),lO(961,` também passando a ela um valor decimal.`),wg()()()(),jc(962,`tr`,15)(963,`td`,16)(964,`div`,24)(965,`span`,25),lO(966,` p-minlength`),nu(967,`br`),wg()()(),jc(968,`td`,20)(969,`code`,31),lO(970,`number`),wg()(),jc(971,`td`,22),lO(972,`-`),wg(),jc(973,`td`,23)(974,`em`)(975,`strong`),lO(976,`(opcional)`),wg()(),jc(977,`p`),lO(978,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),lO(983,` name`),nu(984,`br`),wg()()(),jc(985,`td`,20)(986,`code`,26),lO(987,`string`),wg()(),jc(988,`td`,22),lO(989,`-`),wg(),jc(990,`td`,23)(991,`p`),lO(992,`Nome e identificador do campo.`),wg()()(),jc(993,`tr`,15)(994,`td`,16)(995,`div`,24)(996,`span`,25),lO(997,` p-no-autocomplete`),nu(998,`br`),wg()()(),jc(999,`td`,20)(1e3,`code`,27),lO(1001,`boolean`),wg()(),jc(1002,`td`,22)(1003,`p`)(1004,`code`),lO(1005,`false`),wg()()(),jc(1006,`td`,23)(1007,`em`)(1008,`strong`),lO(1009,`(opcional)`),wg()(),jc(1010,`p`),lO(1011,`Define a propriedade nativa `),jc(1012,`code`),lO(1013,`autocomplete`),wg(),lO(1014,` do campo como `),jc(1015,`code`),lO(1016,`off`),wg(),lO(1017,`.`),wg(),jc(1018,`blockquote`)(1019,`p`),lO(1020,`No componente `),jc(1021,`code`),lO(1022,`po-password`),wg(),lO(1023,` será definido como `),jc(1024,`code`),lO(1025,`new-password`),wg(),lO(1026,`.`),wg()(),jc(1027,`p`),lO(1028,`Nos componentes `),jc(1029,`code`),lO(1030,`po-password`),wg(),lO(1031,` e `),jc(1032,`code`),lO(1033,`po-login`),wg(),lO(1034,` o valor padrão será `),jc(1035,`code`),lO(1036,`true`),wg(),lO(1037,`.`),wg()()(),jc(1038,`tr`,15)(1039,`td`,16)(1040,`div`,24)(1041,`span`,25),lO(1042,` p-optional`),nu(1043,`br`),wg()()(),jc(1044,`td`,20)(1045,`code`,27),lO(1046,`boolean`),wg()(),jc(1047,`td`,22)(1048,`p`)(1049,`code`),lO(1050,`false`),wg()()(),jc(1051,`td`,23)(1052,`em`)(1053,`strong`),lO(1054,`(opcional)`),wg()(),jc(1055,`p`),lO(1056,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1057,`blockquote`)(1058,`p`),lO(1059,`Não será exibida a indicação se:`),wg()(),jc(1060,`ul`)(1061,`li`),lO(1062,`O campo conter `),jc(1063,`code`),lO(1064,`p-required`),wg(),lO(1065,`;`),wg(),jc(1066,`li`),lO(1067,`Não possuir `),jc(1068,`code`),lO(1069,`p-help`),wg(),lO(1070,` e/ou `),jc(1071,`code`),lO(1072,`p-label`),wg(),lO(1073,`.`),wg()()()(),jc(1074,`tr`,15)(1075,`td`,16)(1076,`div`,24)(1077,`span`,25),lO(1078,`p-pattern`),nu(1079,`br`),wg()()(),jc(1080,`td`,20)(1081,`code`,26),lO(1082,`string`),wg()(),jc(1083,`td`,22),lO(1084,`-`),wg(),jc(1085,`td`,23)(1086,`em`)(1087,`strong`),lO(1088,`(opcional)`),wg()(),jc(1089,`p`),lO(1090,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),jc(1091,`code`),lO(1092,`(p-mask)`),wg(),lO(1093,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),wg()()(),jc(1094,`tr`,15)(1095,`td`,16)(1096,`div`,24)(1097,`span`,25),lO(1098,` p-placeholder`),nu(1099,`br`),wg()()(),jc(1100,`td`,20)(1101,`code`,26),lO(1102,`string`),wg()(),jc(1103,`td`,22)(1104,`p`),lO(1105,`''`),wg()(),jc(1106,`td`,23)(1107,`em`)(1108,`strong`),lO(1109,`(opcional)`),wg()(),jc(1110,`p`),lO(1111,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),lO(1116,` p-helper`),nu(1117,`br`),wg()()(),jc(1118,`td`,20)(1119,`code`,32),lO(1120,`PoHelperOptions `),wg(),jc(1121,`code`,26),lO(1122,` string`),wg()(),jc(1123,`td`,22),lO(1124,`-`),wg(),jc(1125,`td`,23)(1126,`em`)(1127,`strong`),lO(1128,`(opcional)`),wg()(),jc(1129,`p`),lO(1130,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1131,`code`),lO(1132,`p-label`),wg(),lO(1133,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1134,`code`),lO(1135,`p-label`),wg(),lO(1136,`.`),wg(),jc(1137,`blockquote`)(1138,`p`),lO(1139,`Para mais informações acesse: `),jc(1140,`a`,33),lO(1141,`https://po-ui.io/documentation/po-helper`),wg(),lO(1142,`.`),wg()(),jc(1143,`blockquote`)(1144,`p`),lO(1145,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1146,`code`),lO(1147,`p-additional-help-tooltip`),wg(),lO(1148,` e `),jc(1149,`code`),lO(1150,`p-additional-help`),wg(),lO(1151,`) será ignorado.`),wg()()()(),jc(1152,`tr`,15)(1153,`td`,16)(1154,`div`,24)(1155,`span`,25),lO(1156,`p-readonly`),nu(1157,`br`),wg()()(),jc(1158,`td`,20)(1159,`code`,27),lO(1160,`boolean`),wg()(),jc(1161,`td`,22),lO(1162,`-`),wg(),jc(1163,`td`,23)(1164,`em`)(1165,`strong`),lO(1166,`(opcional)`),wg()(),jc(1167,`p`),lO(1168,`Indica que o campo será somente leitura.`),wg()()(),jc(1169,`tr`,15)(1170,`td`,16)(1171,`div`,24)(1172,`span`,25),lO(1173,`p-required`),nu(1174,`br`),wg()()(),jc(1175,`td`,20)(1176,`code`,27),lO(1177,`boolean`),wg()(),jc(1178,`td`,22)(1179,`p`)(1180,`code`),lO(1181,`false`),wg()()(),jc(1182,`td`,23)(1183,`em`)(1184,`strong`),lO(1185,`(opcional)`),wg()(),jc(1186,`p`),lO(1187,`Define que o campo será obrigatório.`),wg(),jc(1188,`blockquote`)(1189,`p`),lO(1190,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1191,`code`),lO(1192,`(p-disabled)`),wg(),lO(1193,`.`),wg()()()(),jc(1194,`tr`,15)(1195,`td`,16)(1196,`div`,24)(1197,`span`,25),lO(1198,` p-required-field-error-message`),nu(1199,`br`),wg()()(),jc(1200,`td`,20)(1201,`code`,27),lO(1202,`boolean`),wg()(),jc(1203,`td`,22)(1204,`p`)(1205,`code`),lO(1206,`false`),wg()()(),jc(1207,`td`,23)(1208,`em`)(1209,`strong`),lO(1210,`(opcional)`),wg()(),jc(1211,`p`),lO(1212,`Exibe a mensagem setada na propriedade `),jc(1213,`code`),lO(1214,`p-error-pattern`),wg(),lO(1215,` se o campo estiver vazio e for requerido.`),wg(),jc(1216,`blockquote`)(1217,`p`),lO(1218,`Necessário que a propriedade `),jc(1219,`code`),lO(1220,`p-required`),wg(),lO(1221,` esteja habilitada.`),wg()()()(),jc(1222,`tr`,15)(1223,`td`,16)(1224,`div`,24)(1225,`span`,25),lO(1226,` p-show-required`),nu(1227,`br`),wg()()(),jc(1228,`td`,20)(1229,`code`,27),lO(1230,`boolean`),wg()(),jc(1231,`td`,22),lO(1232,`-`),wg(),jc(1233,`td`,23)(1234,`p`),lO(1235,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1236,`blockquote`)(1237,`p`),lO(1238,`Não será exibida a indicação se:`),wg()(),jc(1239,`ul`)(1240,`li`),lO(1241,`Não possuir `),jc(1242,`code`),lO(1243,`p-help`),wg(),lO(1244,` e/ou `),jc(1245,`code`),lO(1246,`p-label`),wg(),lO(1247,`.`),wg()()()(),jc(1248,`tr`,15)(1249,`td`,16)(1250,`div`,24)(1251,`span`,25),lO(1252,` p-size`),nu(1253,`br`),wg()()(),jc(1254,`td`,20)(1255,`code`,26),lO(1256,`string`),wg()(),jc(1257,`td`,22)(1258,`p`)(1259,`code`),lO(1260,`medium`),wg()()(),jc(1261,`td`,23)(1262,`em`)(1263,`strong`),lO(1264,`(opcional)`),wg()(),jc(1265,`p`),lO(1266,`Define o tamanho do componente:`),wg(),jc(1267,`ul`)(1268,`li`)(1269,`code`),lO(1270,`small`),wg(),lO(1271,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1272,`li`)(1273,`code`),lO(1274,`medium`),wg(),lO(1275,`: altura do input como 44px.`),wg()(),jc(1276,`blockquote`)(1277,`p`),lO(1278,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1279,`code`),lO(1280,`medium`),wg(),lO(1281,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1282,`a`,34),lO(1283,`po-theme`),wg(),lO(1284,`.`),wg()()()(),jc(1285,`tr`,15)(1286,`td`,16)(1287,`div`,24)(1288,`span`,25),lO(1289,` p-step`),nu(1290,`br`),wg()()(),jc(1291,`td`,20)(1292,`code`,26),lO(1293,`string`),wg()(),jc(1294,`td`,22)(1295,`p`),lO(1296,`1`),wg()(),jc(1297,`td`,23)(1298,`em`)(1299,`strong`),lO(1300,`(opcional)`),wg()(),jc(1301,`p`),lO(1302,`Intervalo.`),wg()()(),jc(1303,`tr`,15)(1304,`td`,16)(1305,`div`,24)(1306,`span`,25),lO(1307,` p-upper-case`),nu(1308,`br`),wg()()(),jc(1309,`td`,20)(1310,`code`,27),lO(1311,`boolean`),wg()(),jc(1312,`td`,22),lO(1313,`-`),wg(),jc(1314,`td`,23)(1315,`p`),lO(1316,`Converte o conteúdo do campo em maiúsulo automaticamente.`),wg()()()(),jc(1317,`h3`,11),lO(1318,`Métodos`),wg(),jc(1319,`table`,35)(1320,`tr`,15)(1321,`th`,36)(1322,`div`,24)(1323,`h4`)(1324,`span`,25),lO(1325,` showAdditionalHelp `),wg()()()()(),jc(1326,`tr`,23)(1327,`td`,23)(1328,`p`),lO(1329,`Método que exibe `),jc(1330,`code`),lO(1331,`p-helper`),wg(),lO(1332,` ou executa a ação definida em `),jc(1333,`code`),lO(1334,`p-helper{eventOnClick}`),wg(),lO(1335,` ou em `),jc(1336,`code`),lO(1337,`p-additionalHelp`),wg(),lO(1338,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1339,`code`),lO(1340,`p-keydown`),wg(),lO(1341,`.`),wg(),jc(1342,`blockquote`)(1343,`p`),lO(1344,`Exibe ou oculta o conteúdo do componente `),jc(1345,`code`),lO(1346,`po-helper`),wg(),lO(1347,` quando o componente estiver com foco.`),wg()(),jc(1348,`pre`)(1349,`code`),lO(1350,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(1351,`pre`)(1352,`code`),lO(1353,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1354,`br`),jc(1355,`table`,35)(1356,`tr`,15)(1357,`th`,36)(1358,`div`,24)(1359,`h4`)(1360,`span`,25),lO(1361,` focus `),wg()()()()(),jc(1362,`tr`,23)(1363,`td`,23)(1364,`p`),lO(1365,`Função que atribui foco ao componente.`),wg(),jc(1366,`p`),lO(1367,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1368,`pre`)(1369,`code`),lO(1370,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),wg()()()()(),nu(1371,`br`),jc(1372,`h3`),lO(1373,`Interfaces`),wg(),jc(1374,`h4`,37)(1375,`code`,5),lO(1376,`ErrorAsyncProperties`),wg()(),jc(1377,`div`,2)(1378,`p`),lO(1379,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(1380,`h4`,11),lO(1381,`Propriedades`),wg(),jc(1382,`table`,12)(1383,`tr`,13)(1384,`th`,14),lO(1385,`Nome`),wg(),jc(1386,`th`,14),lO(1387,`Tipo`),wg(),jc(1388,`th`,14),lO(1389,`Descrição`),wg()(),jc(1390,`tr`,15)(1391,`td`,16)(1392,`div`,24)(1393,`span`,25),lO(1394,` errorAsync`),nu(1395,`br`),wg()()(),jc(1396,`td`,20)(1397,`code`,38),lO(1398,`(value) => Observable<boolean>`),wg()(),jc(1399,`td`,23)(1400,`p`),lO(1401,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1402,`code`),lO(1403,`change`),wg(),lO(1404,` ou `),jc(1405,`code`),lO(1406,`change-model`),wg(),lO(1407,`, dependendo do valor da propriedade `),jc(1408,`code`),lO(1409,`triggerMode`),wg(),lO(1410,`.`),wg()()(),jc(1411,`tr`,15)(1412,`td`,16)(1413,`div`,24)(1414,`span`,25),lO(1415,` triggerMode`),nu(1416,`br`),wg()()(),jc(1417,`td`,20)(1418,`code`,39),lO(1419,`'change' `),wg(),jc(1420,`code`,40),lO(1421,` 'changeModel'`),wg()(),jc(1422,`td`,23)(1423,`em`)(1424,`strong`),lO(1425,`(opcional)`),wg()(),jc(1426,`p`),lO(1427,`Controla se o método será executado no disparo do output `),jc(1428,`code`),lO(1429,`change`),wg(),lO(1430,` ou `),jc(1431,`code`),lO(1432,`change-model`),wg(),lO(1433,`.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function we(l,Pe){if(l&1){let d=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(d);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-number-basic-view`)(2,`sample-po-number-labs-view`)(3,`sample-po-number-calculate-view`),wg()}if(l&2){let d=Fx();UE(`p-active`,d.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Number`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,we,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-number-doc`),wg()()()),r&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,le,me,pe,se],encapsulation:2,changeDetection:1})}return l})()}];var ue=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe$1({type:l});static ɵinj=ue$1({imports:[I1.forChild(Me),I1]})}return l})();var Ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe$1({type:l});static ɵinj=ue$1({imports:[M,ue]})}return l})();export{Ye as DocPoNumberModule};