import{$n as Ak,A as Hoe,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var oe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`number`,`p-label`,`PO Number`]],template:function(r,i){r&1&&_u(0,`po-number`,0)},dependencies:[Hoe],encapsulation:2,changeDetection:1})}return l})();var be=l=>({"docs-sample-code-tabs":l});var le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Number Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-number-basic/sample-po-number-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-number-basic/sample-po-number-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-number-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,be,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,oe],encapsulation:2,changeDetection:1})}return l})();var re=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:`an an-currency-circle-dollar`,label:`an an-currency-circle-dollar`},{value:`an an-currency-btc`,label:`an an-currency-btc`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event=``,this.messageErrorPattern=``,this.label=void 0,this.placeholder=``,this.help=``,this.icon=``,this.size=`medium`,this.step=void 0,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-labs`]],standalone:!1,decls:23,vars:43,consts:[[`f`,`ngForm`],[`name`,`PO number`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-max`,`p-maxlength`,`p-min`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-step`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`messageErrorPattern`,`p-clean`,``,`p-label`,`Message error pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Minlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Maxlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`step`,`p-clean`,``,`p-label`,`Step`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=ZO();Jc(0,`po-number`,1),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.number,o)||(i.number=o),H_(o)}),vt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.label,o)||(i.label=o),H_(o)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.help,o)||(i.help=o),H_(o)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.helperText,o)||(i.helperText=o),H_(o)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.placeholder,o)||(i.placeholder=o),H_(o)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.messageErrorPattern,o)||(i.messageErrorPattern=o),H_(o)}),Zg(),Jc(13,`po-number`,10),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.min,o)||(i.min=o),H_(o)}),Zg(),Jc(14,`po-number`,11),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.minlength,o)||(i.minlength=o),H_(o)}),Zg(),Jc(15,`po-number`,12),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.max,o)||(i.max=o),H_(o)}),Zg(),Jc(16,`po-number`,13),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.maxlength,o)||(i.maxlength=o),H_(o)}),Zg(),Jc(17,`po-number`,14),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.step,o)||(i.step=o),H_(o)}),Zg(),Jc(18,`po-select`,15),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.icon,o)||(i.icon=o),H_(o)}),Zg(),Jc(19,`po-checkbox-group`,16),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.properties,o)||(i.properties=o),H_(o)}),Zg(),Jc(20,`po-radio-group`,17),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.size,o)||(i.size=o),H_(o)}),Zg(),Jc(21,`div`,2)(22,`po-button`,18),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Yb(`ngModel`,i.number),Rb(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.messageErrorPattern)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-max`,i.max)(`p-maxlength`,i.maxlength)(`p-min`,i.min)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-step`,i.step)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),Y0(),Ig(3),Rb(`p-value`,i.number),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.messageErrorPattern),Y0(),Ig(),Yb(`ngModel`,i.min),Y0(),Ig(),Yb(`ngModel`,i.minlength),Y0(),Ig(),Yb(`ngModel`,i.max),Y0(),Ig(),Yb(`ngModel`,i.maxlength),Y0(),Ig(),Yb(`ngModel`,i.step),Y0(),Ig(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconOptions),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Hoe,Gte,Woe,Yoe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l});var me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Number Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-number-labs/sample-po-number-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-number
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-number-labs/sample-po-number-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-number-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,he,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,re],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:`São Paulo`},{value:17,label:`Alagoas`},{value:15,label:`Ceará`}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-calculate`]],standalone:!1,decls:16,vars:9,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`price`,`p-label`,`Price`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,`p-required`,``,`p-sort`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icms`,`p-label`,`ICMS %`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`liquid`,`p-label`,`Liquid`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`total`,`p-label`,`Total`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Calculate`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let p=ZO();Jc(0,`h3`),Tk(1,`Calculate Tax`),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,2),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.price,o)||(i.price=o),H_(o)}),Zg(),Jc(7,`po-number`,3),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.quantity,o)||(i.quantity=o),H_(o)}),Zg()(),Jc(8,`div`)(9,`po-select`,4),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.state,o)||(i.state=o),H_(o)}),vt(`p-change`,function(){return i.loadICMS()}),Zg(),Jc(10,`po-number`,5),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.icms,o)||(i.icms=o),H_(o)}),Zg(),Jc(11,`po-number`,6),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.liquid,o)||(i.liquid=o),H_(o)}),Zg(),Jc(12,`po-number`,7),W0(),Kb(`ngModelChange`,function(o){return U_(p),Ak(i.total,o)||(i.total=o),H_(o)}),Zg()(),Jc(13,`div`,1)(14,`po-button`,8),vt(`p-click`,function(){return i.calculate()}),Zg(),Jc(15,`po-button`,9),vt(`p-click`,function(){U_(p);let o=sk(4);return H_(o.reset())}),Zg()()()}if(r&2){let p=sk(4);Ig(6),Yb(`ngModel`,i.price),Y0(),Ig(),Yb(`ngModel`,i.quantity),Y0(),Ig(2),Yb(`ngModel`,i.state),Rb(`p-options`,i.statesOptions),Y0(),Ig(),Yb(`ngModel`,i.icms),Y0(),Ig(),Yb(`ngModel`,i.liquid),Y0(),Ig(),Yb(`ngModel`,i.total),Y0(),Ig(2),Rb(`p-disabled`,p.invalid),Ig(),Rb(`p-disabled`,p.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,Hoe,Woe],encapsulation:2,changeDetection:1})}return l})();var Ce=l=>({"docs-sample-code-tabs":l});var pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-calculate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Number - Calculate`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-number-calculate/sample-po-number-calculate.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<h3>Calculate Tax</h3>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-number-calculate/sample-po-number-calculate.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-number-calculate`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ce,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-number-doc`]],standalone:!1,decls:1434,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoNumberComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),Zg(),Jc(24,`p`),Tk(25,`Importante:`),Zg(),Jc(26,`ul`)(27,`li`),Tk(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),Zg()(),Jc(29,`h4`),Tk(30,`Tokens customizáveis`),Zg(),Jc(31,`p`),Tk(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(33,`br`),Tk(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(35,`code`),Tk(36,`.po-input`),Zg()(),Jc(37,`blockquote`)(38,`p`),Tk(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Jc(40,`a`,6),Tk(41,`Grid System`),Zg(),Tk(42,`.`),Zg()(),Jc(43,`blockquote`)(44,`p`),Tk(45,`Para maiores informações, acesse o guia `),Jc(46,`a`,7),Tk(47,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(48,`.`),Zg()(),Jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),Tk(53,`Propriedade`),Zg(),Jc(54,`th`),Tk(55,`Descrição`),Zg(),Jc(56,`th`),Tk(57,`Valor Padrão`),Zg()()(),Jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),Tk(62,`Default Values`),Zg()(),_u(63,`td`)(64,`td`),Zg(),Jc(65,`tr`)(66,`td`)(67,`code`),Tk(68,`--font-family`),Zg()(),Jc(69,`td`),Tk(70,`Família tipográfica usada`),Zg(),Jc(71,`td`)(72,`code`),Tk(73,`var(--font-family-theme)`),Zg()()(),Jc(74,`tr`)(75,`td`)(76,`code`),Tk(77,`--font-size`),Zg()(),Jc(78,`td`),Tk(79,`Tamanho da fonte`),Zg(),Jc(80,`td`)(81,`code`),Tk(82,`var(--font-size-default)`),Zg()()(),Jc(83,`tr`)(84,`td`)(85,`code`),Tk(86,`--text-color-placeholder`),Zg()(),Jc(87,`td`),Tk(88,`Cor do texto placeholder`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--color-neutral-light-30)`),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--color`),Zg()(),Jc(96,`td`),Tk(97,`Cor pincipal do input`),Zg(),Jc(98,`td`)(99,`code`),Tk(100,`var(--color-neutral-dark-70)`),Zg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--background`),Zg()(),Jc(105,`td`),Tk(106,`Cor de background`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--color-neutral-light-05)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Tk(113,`--padding`),Zg()(),Jc(114,`td`),Tk(115,`Preenchimento`),Zg(),Jc(116,`td`)(117,`code`),Tk(118,`0 0.5rem`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Tk(122,`--text-color`),Zg()(),Jc(123,`td`),Tk(124,`Cor do texto`),Zg(),Jc(125,`td`)(126,`code`),Tk(127,`var(--color-neutral-dark-90)`),Zg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Tk(131,`--field-container-title-justify`),Zg()(),Jc(132,`td`),Tk(133,`Alinhamento horizontal do título (`),Jc(134,`code`),Tk(135,`justify-content`),Zg(),Tk(136,`)`),Zg(),Jc(137,`td`)(138,`code`),Tk(139,`space-between`),Zg()()(),Jc(140,`tr`)(141,`td`)(142,`code`),Tk(143,`--field-container-title-flex`),Zg()(),Jc(144,`td`),Tk(145,`Flex do título (`),Jc(146,`code`),Tk(147,`flex`),Zg(),Tk(148,`)`),Zg(),Jc(149,`td`)(150,`code`),Tk(151,`1 auto`),Zg()()(),Jc(152,`tr`)(153,`td`)(154,`strong`),Tk(155,`Hover`),Zg()(),_u(156,`td`)(157,`td`),Zg(),Jc(158,`tr`)(159,`td`)(160,`code`),Tk(161,`--color-hover`),Zg()(),Jc(162,`td`),Tk(163,`Cor principal no estado hover`),Zg(),Jc(164,`td`)(165,`code`),Tk(166,`var(--color-brand-01-dark)`),Zg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Tk(170,`--background-hover`),Zg()(),Jc(171,`td`),Tk(172,`Cor de background no estado hover`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`var(--color-brand-01-lightest)`),Zg()()(),Jc(176,`tr`)(177,`td`)(178,`strong`),Tk(179,`Focused`),Zg()(),_u(180,`td`)(181,`td`),Zg(),Jc(182,`tr`)(183,`td`)(184,`code`),Tk(185,`--color-focused`),Zg()(),Jc(186,`td`),Tk(187,`Cor principal no estado de focus`),Zg(),Jc(188,`td`)(189,`code`),Tk(190,`var(--color-action-default)`),Zg()()(),Jc(191,`tr`)(192,`td`)(193,`code`),Tk(194,`--outline-color-focused`),Zg()(),Jc(195,`td`),Tk(196,`Cor do outline do estado de focus`),Zg(),Jc(197,`td`)(198,`code`),Tk(199,`var(--color-action-focus)`),Zg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Tk(203,`Disabled`),Zg()(),_u(204,`td`)(205,`td`),Zg(),Jc(206,`tr`)(207,`td`)(208,`code`),Tk(209,`--color-disabled`),Zg()(),Jc(210,`td`),Tk(211,`Cor principal no estado disabled`),Zg(),Jc(212,`td`)(213,`code`),Tk(214,`var(--color-neutral-light-30)`),Zg()()(),Jc(215,`tr`)(216,`td`)(217,`code`),Tk(218,`--background-disabled`),Zg()(),Jc(219,`td`),Tk(220,`Cor de background no estado disabled`),Zg(),Jc(221,`td`)(222,`code`),Tk(223,`var(--color-neutral-light-20)`),Zg()()(),Jc(224,`tr`)(225,`td`)(226,`code`),Tk(227,`--text-color-disabled`),Zg()(),Jc(228,`td`),Tk(229,`Cor do texto no estado disabled`),Zg(),Jc(230,`td`)(231,`code`),Tk(232,`var(--color-neutral-dark-70)`),Zg()()()()(),Jc(233,`p`),_u(234,`br`),Tk(235,` O `),Jc(236,`code`),Tk(237,`po-number`),Zg(),Tk(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),Zg()(),Jc(239,`div`,8)(240,`h4`,9),Tk(241,`Seletor`),Zg(),Jc(242,`pre`,10),Tk(243,`<po-number
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
`),Zg()(),Jc(244,`h4`,11),Tk(245,`Propriedades`),Zg(),Jc(246,`table`,12)(247,`tr`,13)(248,`th`,14),Tk(249,`Nome`),Zg(),Jc(250,`th`,14),Tk(251,`Tipo`),Zg(),Jc(252,`th`,14),Tk(253,`Padrão`),Zg(),Jc(254,`th`,14),Tk(255,`Descrição`),Zg()(),Jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),Tk(260,` (p-additional-help)`),_u(261,`br`),Zg()(),Jc(262,`div`,19),Tk(263,`Deprecated`),Zg()(),Jc(264,`td`,20)(265,`code`,21),Tk(266,`EventEmitter`),Zg()(),Jc(267,`td`,22),Tk(268,`-`),Zg(),Jc(269,`td`,23)(270,`em`)(271,`strong`),Tk(272,`(opcional)`),Zg()(),Jc(273,`p`),Tk(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(275,`blockquote`)(276,`p`),Tk(277,`Essa propriedade está `),Jc(278,`strong`),Tk(279,`depreciada`),Zg(),Tk(280,` e será removida na versão `),Jc(281,`code`),Tk(282,`23.x.x`),Zg(),Tk(283,`. Recomendamos utilizar a propriedade `),Jc(284,`code`),Tk(285,`p-helper`),Zg(),Tk(286,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),Tk(291,` p-additional-help-tooltip`),_u(292,`br`),Zg()(),Jc(293,`div`,19),Tk(294,`Deprecated`),Zg()(),Jc(295,`td`,20)(296,`code`,26),Tk(297,`string`),Zg()(),Jc(298,`td`,22),Tk(299,`-`),Zg(),Jc(300,`td`,23)(301,`em`)(302,`strong`),Tk(303,`(opcional)`),Zg()(),Jc(304,`p`),Tk(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(306,`code`),Tk(307,`po-helper`),Zg(),Tk(308,`.
`),Jc(309,`strong`),Tk(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(311,`blockquote`)(312,`p`),Tk(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(314,`blockquote`)(315,`p`),Tk(316,`Essa propriedade está `),Jc(317,`strong`),Tk(318,`depreciada`),Zg(),Tk(319,` e será removida na versão `),Jc(320,`code`),Tk(321,`23.x.x`),Zg(),Tk(322,`. Recomendamos utilizar a propriedade `),Jc(323,`code`),Tk(324,`p-helper`),Zg(),Tk(325,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),Tk(330,` p-append-in-body`),_u(331,`br`),Zg()()(),Jc(332,`td`,20)(333,`code`,27),Tk(334,`boolean`),Zg()(),Jc(335,`td`,22)(336,`p`)(337,`code`),Tk(338,`false`),Zg()()(),Jc(339,`td`,23)(340,`em`)(341,`strong`),Tk(342,`(opcional)`),Zg()(),Jc(343,`p`),Tk(344,`Define que o popover (`),Jc(345,`code`),Tk(346,`p-helper`),Zg(),Tk(347,` e/ou `),Jc(348,`code`),Tk(349,`p-error-limit`),Zg(),Tk(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(351,`blockquote`)(352,`p`),Tk(353,`Quando utilizado com `),Jc(354,`code`),Tk(355,`p-helper`),Zg(),Tk(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),Tk(361,` p-auto-focus`),_u(362,`br`),Zg()()(),Jc(363,`td`,20)(364,`code`,27),Tk(365,`boolean`),Zg()(),Jc(366,`td`,22)(367,`p`)(368,`code`),Tk(369,`false`),Zg()()(),Jc(370,`td`,23)(371,`em`)(372,`strong`),Tk(373,`(opcional)`),Zg()(),Jc(374,`p`),Tk(375,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(376,`blockquote`)(377,`p`),Tk(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),Tk(383,` (p-blur)`),_u(384,`br`),Zg()()(),Jc(385,`td`,20)(386,`code`,21),Tk(387,`EventEmitter`),Zg()(),Jc(388,`td`,22),Tk(389,`-`),Zg(),Jc(390,`td`,23)(391,`em`)(392,`strong`),Tk(393,`(opcional)`),Zg()(),Jc(394,`p`),Tk(395,`Evento disparado ao sair do campo.`),Zg()()(),Jc(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),Tk(400,` (p-change)`),_u(401,`br`),Zg()()(),Jc(402,`td`,20)(403,`code`,21),Tk(404,`EventEmitter`),Zg()(),Jc(405,`td`,22),Tk(406,`-`),Zg(),Jc(407,`td`,23)(408,`em`)(409,`strong`),Tk(410,`(opcional)`),Zg()(),Jc(411,`p`),Tk(412,`Evento disparado ao alterar valor e deixar o campo.`),Zg()()(),Jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),Tk(417,` (p-change-model)`),_u(418,`br`),Zg()()(),Jc(419,`td`,20)(420,`code`,21),Tk(421,`EventEmitter`),Zg()(),Jc(422,`td`,22),Tk(423,`-`),Zg(),Jc(424,`td`,23)(425,`em`)(426,`strong`),Tk(427,`(opcional)`),Zg()(),Jc(428,`p`),Tk(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(430,`code`),Tk(431,`setValue`),Zg(),Tk(432,`, `),Jc(433,`code`),Tk(434,`patchValue`),Zg(),Tk(435,`, carregamento assíncrono).`),Zg(),Jc(436,`p`),Tk(437,`Diferentemente do `),Jc(438,`code`),Tk(439,`p-change`),Zg(),Tk(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(441,`code`),Tk(442,`p-change-model`),Zg(),Tk(443,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(444,`p`),Tk(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),Tk(450,`p-clean`),_u(451,`br`),Zg()()(),Jc(452,`td`,20)(453,`code`,27),Tk(454,`boolean`),Zg()(),Jc(455,`td`,22),Tk(456,`-`),Zg(),Jc(457,`td`,23)(458,`em`)(459,`strong`),Tk(460,`(opcional)`),Zg()(),Jc(461,`p`),Tk(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Zg()()(),Jc(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),Tk(467,` p-compact-label`),_u(468,`br`),Zg()()(),Jc(469,`td`,20)(470,`code`,27),Tk(471,`boolean`),Zg()(),Jc(472,`td`,22)(473,`p`)(474,`code`),Tk(475,`false`),Zg()()(),Jc(476,`td`,23)(477,`em`)(478,`strong`),Tk(479,`(opcional)`),Zg()(),Jc(480,`p`),Tk(481,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(482,`p`),Tk(483,`Quando habilitado (`),Jc(484,`code`),Tk(485,`true`),Zg(),Tk(486,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(487,`ul`)(488,`li`)(489,`code`),Tk(490,`po-label`),Zg()(),Jc(491,`li`)(492,`code`),Tk(493,`p-requirement (showRequired)`),Zg()(),Jc(494,`li`)(495,`code`),Tk(496,`po-helper`),Zg()()(),Jc(497,`p`),Tk(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(499,`p`),Tk(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(501,`ul`)(502,`li`)(503,`code`),Tk(504,`--field-container-title-justify`),Zg()(),Jc(505,`li`)(506,`code`),Tk(507,`--field-container-title-flex`),Zg()()(),Jc(508,`p`),Tk(509,`Exemplo:`),Zg(),Jc(510,`pre`)(511,`code`),Tk(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(513,`p`),Tk(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),Tk(519,`p-disabled`),_u(520,`br`),Zg()()(),Jc(521,`td`,20)(522,`code`,27),Tk(523,`boolean`),Zg()(),Jc(524,`td`,22)(525,`p`)(526,`code`),Tk(527,`false`),Zg()()(),Jc(528,`td`,23)(529,`em`)(530,`strong`),Tk(531,`(opcional)`),Zg()(),Jc(532,`p`),Tk(533,`Se verdadeiro, desabilita o campo.`),Zg()()(),Jc(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),Tk(538,` p-emit-all-changes`),_u(539,`br`),Zg()()(),Jc(540,`td`,20)(541,`code`,27),Tk(542,`boolean`),Zg()(),Jc(543,`td`,22)(544,`p`)(545,`code`),Tk(546,`false`),Zg()()(),Jc(547,`td`,23)(548,`em`)(549,`strong`),Tk(550,`(opcional)`),Zg()(),Jc(551,`p`),Tk(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),Zg()()(),Jc(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),Tk(557,` (p-enter)`),_u(558,`br`),Zg()()(),Jc(559,`td`,20)(560,`code`,21),Tk(561,`EventEmitter`),Zg()(),Jc(562,`td`,22),Tk(563,`-`),Zg(),Jc(564,`td`,23)(565,`em`)(566,`strong`),Tk(567,`(opcional)`),Zg()(),Jc(568,`p`),Tk(569,`Evento disparado ao entrar do campo.`),Zg()()(),Jc(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),Tk(574,` p-error-async-properties`),_u(575,`br`),Zg()()(),Jc(576,`td`,20)(577,`code`,28),Tk(578,`ErrorAsyncProperties`),Zg()(),Jc(579,`td`,22),Tk(580,`-`),Zg(),Jc(581,`td`,23)(582,`em`)(583,`strong`),Tk(584,`(opcional)`),Zg()(),Jc(585,`p`),Tk(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Jc(587,`code`),Tk(588,`Reactive Forms`),Zg(),Tk(589,`. Em formulários reativos, pode-se utilizar o próprio `),Jc(590,`code`),Tk(591,`asyncValidators`),Zg(),Tk(592,`.`),Zg()()(),Jc(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),Tk(597,` p-error-limit`),_u(598,`br`),Zg()()(),Jc(599,`td`,20)(600,`code`,27),Tk(601,`boolean`),Zg()(),Jc(602,`td`,22)(603,`p`)(604,`code`),Tk(605,`false`),Zg()()(),Jc(606,`td`,23)(607,`em`)(608,`strong`),Tk(609,`(opcional)`),Zg()(),Jc(610,`p`),Tk(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(612,`blockquote`)(613,`p`),Tk(614,`Caso essa propriedade seja definida como `),Jc(615,`code`),Tk(616,`true`),Zg(),Tk(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),Tk(622,` p-error-pattern`),_u(623,`br`),Zg()()(),Jc(624,`td`,20)(625,`code`,26),Tk(626,`string`),Zg()(),Jc(627,`td`,22),Tk(628,`-`),Zg(),Jc(629,`td`,23)(630,`em`)(631,`strong`),Tk(632,`(opcional)`),Zg()(),Jc(633,`p`),Tk(634,`Mensagem que será apresentada quando o `),Jc(635,`code`),Tk(636,`pattern`),Zg(),Tk(637,` ou a máscara não for satisfeita.`),Zg(),Jc(638,`blockquote`)(639,`p`),Tk(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Jc(641,`code`),Tk(642,`p-required-field-error-message`),Zg(),Tk(643,` em conjunto.`),Zg()()()(),Jc(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),Tk(648,` p-help`),_u(649,`br`),Zg()()(),Jc(650,`td`,20)(651,`code`,26),Tk(652,`string`),Zg()(),Jc(653,`td`,22),Tk(654,`-`),Zg(),Jc(655,`td`,23)(656,`em`)(657,`strong`),Tk(658,`(opcional)`),Zg()(),Jc(659,`p`),Tk(660,`Texto de apoio do campo.`),Zg()()(),Jc(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),Tk(665,` p-icon`),_u(666,`br`),Zg()()(),Jc(667,`td`,20)(668,`code`,26),Tk(669,`string `),Zg(),Jc(670,`code`,29),Tk(671,` TemplateRef<void>`),Zg()(),Jc(672,`td`,22),Tk(673,`-`),Zg(),Jc(674,`td`,23)(675,`em`)(676,`strong`),Tk(677,`(opcional)`),Zg()(),Jc(678,`p`),Tk(679,`Define o ícone que será exibido no início do campo.`),Zg(),Jc(680,`p`),Tk(681,`É possível usar qualquer um dos ícones da `),Jc(682,`a`,30),Tk(683,`Biblioteca de ícones`),Zg(),Tk(684,`. conforme exemplo abaixo:`),Zg(),Jc(685,`pre`)(686,`code`),Tk(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),Zg()(),Jc(688,`p`),Tk(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(690,`em`),Tk(691,`Font Awesome`),Zg(),Tk(692,`, da seguinte forma:`),Zg(),Jc(693,`pre`)(694,`code`),Tk(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),Zg()(),Jc(696,`p`),Tk(697,`Outra opção seria a customização do ícone através do `),Jc(698,`code`),Tk(699,`TemplateRef`),Zg(),Tk(700,`, conforme exemplo abaixo:`),Zg(),Jc(701,`pre`)(702,`code`),Tk(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(704,`blockquote`)(705,`p`),Tk(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(707,`code`),Tk(708,`font-size: inherit`),Zg(),Tk(709,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),Tk(714,` (p-keydown)`),_u(715,`br`),Zg()()(),Jc(716,`td`,20)(717,`code`,21),Tk(718,`EventEmitter`),Zg()(),Jc(719,`td`,22),Tk(720,`-`),Zg(),Jc(721,`td`,23)(722,`em`)(723,`strong`),Tk(724,`(opcional)`),Zg()(),Jc(725,`p`),Tk(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(727,`code`),Tk(728,`KeyboardEvent`),Zg(),Tk(729,` com informações sobre a tecla.`),Zg()()(),Jc(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),Tk(734,` p-label`),_u(735,`br`),Zg()()(),Jc(736,`td`,20)(737,`code`,26),Tk(738,`string`),Zg()(),Jc(739,`td`,22),Tk(740,`-`),Zg(),Jc(741,`td`,23)(742,`em`)(743,`strong`),Tk(744,`(opcional)`),Zg()(),Jc(745,`p`),Tk(746,`Rótulo do campo.`),Zg()()(),Jc(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),Tk(751,` p-label-text-wrap`),_u(752,`br`),Zg()()(),Jc(753,`td`,20)(754,`code`,27),Tk(755,`boolean`),Zg()(),Jc(756,`td`,22)(757,`p`)(758,`code`),Tk(759,`false`),Zg()()(),Jc(760,`td`,23)(761,`em`)(762,`strong`),Tk(763,`(opcional)`),Zg()(),Jc(764,`p`),Tk(765,`Habilita a quebra automática do texto da propriedade `),Jc(766,`code`),Tk(767,`p-label`),Zg(),Tk(768,`. Quando `),Jc(769,`code`),Tk(770,`p-label-text-wrap`),Zg(),Tk(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),Tk(776,` p-loading`),_u(777,`br`),Zg()()(),Jc(778,`td`,20)(779,`code`,27),Tk(780,`boolean`),Zg()(),Jc(781,`td`,22)(782,`p`)(783,`code`),Tk(784,`false`),Zg()()(),Jc(785,`td`,23)(786,`em`)(787,`strong`),Tk(788,`(opcional)`),Zg()(),Jc(789,`p`),Tk(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),Tk(795,`p-mask`),_u(796,`br`),Zg()()(),Jc(797,`td`,20)(798,`code`,26),Tk(799,`string`),Zg()(),Jc(800,`td`,22),Tk(801,`-`),Zg(),Jc(802,`td`,23)(803,`em`)(804,`strong`),Tk(805,`(opcional)`),Zg()(),Jc(806,`p`),Tk(807,`Indica uma máscara para o campo, porém é incompatível com o `),Jc(808,`code`),Tk(809,`po-number`),Zg(),Tk(810,`.`),Zg(),Jc(811,`blockquote`)(812,`p`)(813,`strong`),Tk(814,`Componentes compatíveis:`),Zg(),Jc(815,`code`),Tk(816,`po-input`),Zg(),Tk(817,`,`),Jc(818,`code`),Tk(819,`po-decimal`),Zg(),Tk(820,`.`),Zg()()()(),Jc(821,`tr`,15)(822,`td`,16)(823,`div`,24)(824,`span`,25),Tk(825,`p-mask-format-model`),_u(826,`br`),Zg()()(),Jc(827,`td`,20)(828,`code`,27),Tk(829,`boolean`),Zg()(),Jc(830,`td`,22)(831,`p`)(832,`code`),Tk(833,`false`),Zg()()(),Jc(834,`td`,23)(835,`em`)(836,`strong`),Tk(837,`(opcional)`),Zg()(),Jc(838,`p`),Tk(839,`Indica se o `),Jc(840,`code`),Tk(841,`model`),Zg(),Tk(842,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),Zg()()(),Jc(843,`tr`,15)(844,`td`,16)(845,`div`,24)(846,`span`,25),Tk(847,` p-mask-no-length-validation`),_u(848,`br`),Zg()()(),Jc(849,`td`,20)(850,`code`,27),Tk(851,`boolean`),Zg()(),Jc(852,`td`,22)(853,`p`)(854,`code`),Tk(855,`false`),Zg()()(),Jc(856,`td`,23)(857,`p`),Tk(858,`Controla como o componente aplica as validações de comprimento mínimo (`),Jc(859,`code`),Tk(860,`minLength`),Zg(),Tk(861,`) e máximo (`),Jc(862,`code`),Tk(863,`maxLength`),Zg(),Tk(864,`) quando há uma máscara (`),Jc(865,`code`),Tk(866,`p-mask`),Zg(),Tk(867,`) definida.`),Zg(),Jc(868,`ul`)(869,`li`),Tk(870,`Quando `),Jc(871,`code`),Tk(872,`true`),Zg(),Tk(873,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Zg(),Jc(874,`li`),Tk(875,`Quando `),Jc(876,`code`),Tk(877,`false`),Zg(),Tk(878,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Zg()(),Jc(879,`blockquote`)(880,`p`),Tk(881,`Esta propriedade é ignorada quando utilizada em conjunto com `),Jc(882,`code`),Tk(883,`p-mask-format-model`),Zg(),Tk(884,`.`),Zg()(),Jc(885,`p`),Tk(886,`Exemplo:`),Zg(),Jc(887,`pre`)(888,`code`),Tk(889,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),Zg()(),Jc(890,`ul`)(891,`li`),Tk(892,`Entrada: `),Jc(893,`code`),Tk(894,`123-456`),Zg(),Tk(895,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Jc(896,`code`),Tk(897,`-`),Zg(),Tk(898,`.`),Zg()()()(),Jc(899,`tr`,15)(900,`td`,16)(901,`div`,24)(902,`span`,25),Tk(903,`p-max`),_u(904,`br`),Zg()()(),Jc(905,`td`,20)(906,`code`,31),Tk(907,`number`),Zg()(),Jc(908,`td`,22),Tk(909,`-`),Zg(),Jc(910,`td`,23)(911,`em`)(912,`strong`),Tk(913,`(opcional)`),Zg()(),Jc(914,`p`),Tk(915,`Valor máximo.`),Zg(),Jc(916,`blockquote`)(917,`p`),Tk(918,`Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `),Jc(919,`code`),Tk(920,`p-step`),Zg(),Tk(921,` também passando a ela um valor decimal.`),Zg()()()(),Jc(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),Tk(926,` p-maxlength`),_u(927,`br`),Zg()()(),Jc(928,`td`,20)(929,`code`,31),Tk(930,`number`),Zg()(),Jc(931,`td`,22),Tk(932,`-`),Zg(),Jc(933,`td`,23)(934,`em`)(935,`strong`),Tk(936,`(opcional)`),Zg()(),Jc(937,`p`),Tk(938,`Indica a quantidade máxima de caracteres que o campo aceita.`),Zg()()(),Jc(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),Tk(943,`p-min`),_u(944,`br`),Zg()()(),Jc(945,`td`,20)(946,`code`,31),Tk(947,`number`),Zg()(),Jc(948,`td`,22),Tk(949,`-`),Zg(),Jc(950,`td`,23)(951,`em`)(952,`strong`),Tk(953,`(opcional)`),Zg()(),Jc(954,`p`),Tk(955,`Valor mínimo.`),Zg(),Jc(956,`blockquote`)(957,`p`),Tk(958,`Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `),Jc(959,`code`),Tk(960,`p-step`),Zg(),Tk(961,` também passando a ela um valor decimal.`),Zg()()()(),Jc(962,`tr`,15)(963,`td`,16)(964,`div`,24)(965,`span`,25),Tk(966,` p-minlength`),_u(967,`br`),Zg()()(),Jc(968,`td`,20)(969,`code`,31),Tk(970,`number`),Zg()(),Jc(971,`td`,22),Tk(972,`-`),Zg(),Jc(973,`td`,23)(974,`em`)(975,`strong`),Tk(976,`(opcional)`),Zg()(),Jc(977,`p`),Tk(978,`Indica a quantidade mínima de caracteres que o campo aceita.`),Zg()()(),Jc(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),Tk(983,` name`),_u(984,`br`),Zg()()(),Jc(985,`td`,20)(986,`code`,26),Tk(987,`string`),Zg()(),Jc(988,`td`,22),Tk(989,`-`),Zg(),Jc(990,`td`,23)(991,`p`),Tk(992,`Nome e identificador do campo.`),Zg()()(),Jc(993,`tr`,15)(994,`td`,16)(995,`div`,24)(996,`span`,25),Tk(997,` p-no-autocomplete`),_u(998,`br`),Zg()()(),Jc(999,`td`,20)(1e3,`code`,27),Tk(1001,`boolean`),Zg()(),Jc(1002,`td`,22)(1003,`p`)(1004,`code`),Tk(1005,`false`),Zg()()(),Jc(1006,`td`,23)(1007,`em`)(1008,`strong`),Tk(1009,`(opcional)`),Zg()(),Jc(1010,`p`),Tk(1011,`Define a propriedade nativa `),Jc(1012,`code`),Tk(1013,`autocomplete`),Zg(),Tk(1014,` do campo como `),Jc(1015,`code`),Tk(1016,`off`),Zg(),Tk(1017,`.`),Zg(),Jc(1018,`blockquote`)(1019,`p`),Tk(1020,`No componente `),Jc(1021,`code`),Tk(1022,`po-password`),Zg(),Tk(1023,` será definido como `),Jc(1024,`code`),Tk(1025,`new-password`),Zg(),Tk(1026,`.`),Zg()(),Jc(1027,`p`),Tk(1028,`Nos componentes `),Jc(1029,`code`),Tk(1030,`po-password`),Zg(),Tk(1031,` e `),Jc(1032,`code`),Tk(1033,`po-login`),Zg(),Tk(1034,` o valor padrão será `),Jc(1035,`code`),Tk(1036,`true`),Zg(),Tk(1037,`.`),Zg()()(),Jc(1038,`tr`,15)(1039,`td`,16)(1040,`div`,24)(1041,`span`,25),Tk(1042,` p-optional`),_u(1043,`br`),Zg()()(),Jc(1044,`td`,20)(1045,`code`,27),Tk(1046,`boolean`),Zg()(),Jc(1047,`td`,22)(1048,`p`)(1049,`code`),Tk(1050,`false`),Zg()()(),Jc(1051,`td`,23)(1052,`em`)(1053,`strong`),Tk(1054,`(opcional)`),Zg()(),Jc(1055,`p`),Tk(1056,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(1057,`blockquote`)(1058,`p`),Tk(1059,`Não será exibida a indicação se:`),Zg()(),Jc(1060,`ul`)(1061,`li`),Tk(1062,`O campo conter `),Jc(1063,`code`),Tk(1064,`p-required`),Zg(),Tk(1065,`;`),Zg(),Jc(1066,`li`),Tk(1067,`Não possuir `),Jc(1068,`code`),Tk(1069,`p-help`),Zg(),Tk(1070,` e/ou `),Jc(1071,`code`),Tk(1072,`p-label`),Zg(),Tk(1073,`.`),Zg()()()(),Jc(1074,`tr`,15)(1075,`td`,16)(1076,`div`,24)(1077,`span`,25),Tk(1078,`p-pattern`),_u(1079,`br`),Zg()()(),Jc(1080,`td`,20)(1081,`code`,26),Tk(1082,`string`),Zg()(),Jc(1083,`td`,22),Tk(1084,`-`),Zg(),Jc(1085,`td`,23)(1086,`em`)(1087,`strong`),Tk(1088,`(opcional)`),Zg()(),Jc(1089,`p`),Tk(1090,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Jc(1091,`code`),Tk(1092,`(p-mask)`),Zg(),Tk(1093,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),Zg()()(),Jc(1094,`tr`,15)(1095,`td`,16)(1096,`div`,24)(1097,`span`,25),Tk(1098,` p-placeholder`),_u(1099,`br`),Zg()()(),Jc(1100,`td`,20)(1101,`code`,26),Tk(1102,`string`),Zg()(),Jc(1103,`td`,22)(1104,`p`),Tk(1105,`''`),Zg()(),Jc(1106,`td`,23)(1107,`em`)(1108,`strong`),Tk(1109,`(opcional)`),Zg()(),Jc(1110,`p`),Tk(1111,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),Tk(1116,` p-helper`),_u(1117,`br`),Zg()()(),Jc(1118,`td`,20)(1119,`code`,32),Tk(1120,`PoHelperOptions `),Zg(),Jc(1121,`code`,26),Tk(1122,` string`),Zg()(),Jc(1123,`td`,22),Tk(1124,`-`),Zg(),Jc(1125,`td`,23)(1126,`em`)(1127,`strong`),Tk(1128,`(opcional)`),Zg()(),Jc(1129,`p`),Tk(1130,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1131,`code`),Tk(1132,`p-label`),Zg(),Tk(1133,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1134,`code`),Tk(1135,`p-label`),Zg(),Tk(1136,`.`),Zg(),Jc(1137,`blockquote`)(1138,`p`),Tk(1139,`Para mais informações acesse: `),Jc(1140,`a`,33),Tk(1141,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1142,`.`),Zg()(),Jc(1143,`blockquote`)(1144,`p`),Tk(1145,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1146,`code`),Tk(1147,`p-additional-help-tooltip`),Zg(),Tk(1148,` e `),Jc(1149,`code`),Tk(1150,`p-additional-help`),Zg(),Tk(1151,`) será ignorado.`),Zg()()()(),Jc(1152,`tr`,15)(1153,`td`,16)(1154,`div`,24)(1155,`span`,25),Tk(1156,`p-readonly`),_u(1157,`br`),Zg()()(),Jc(1158,`td`,20)(1159,`code`,27),Tk(1160,`boolean`),Zg()(),Jc(1161,`td`,22),Tk(1162,`-`),Zg(),Jc(1163,`td`,23)(1164,`em`)(1165,`strong`),Tk(1166,`(opcional)`),Zg()(),Jc(1167,`p`),Tk(1168,`Indica que o campo será somente leitura.`),Zg()()(),Jc(1169,`tr`,15)(1170,`td`,16)(1171,`div`,24)(1172,`span`,25),Tk(1173,`p-required`),_u(1174,`br`),Zg()()(),Jc(1175,`td`,20)(1176,`code`,27),Tk(1177,`boolean`),Zg()(),Jc(1178,`td`,22)(1179,`p`)(1180,`code`),Tk(1181,`false`),Zg()()(),Jc(1182,`td`,23)(1183,`em`)(1184,`strong`),Tk(1185,`(opcional)`),Zg()(),Jc(1186,`p`),Tk(1187,`Define que o campo será obrigatório.`),Zg(),Jc(1188,`blockquote`)(1189,`p`),Tk(1190,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1191,`code`),Tk(1192,`(p-disabled)`),Zg(),Tk(1193,`.`),Zg()()()(),Jc(1194,`tr`,15)(1195,`td`,16)(1196,`div`,24)(1197,`span`,25),Tk(1198,` p-required-field-error-message`),_u(1199,`br`),Zg()()(),Jc(1200,`td`,20)(1201,`code`,27),Tk(1202,`boolean`),Zg()(),Jc(1203,`td`,22)(1204,`p`)(1205,`code`),Tk(1206,`false`),Zg()()(),Jc(1207,`td`,23)(1208,`em`)(1209,`strong`),Tk(1210,`(opcional)`),Zg()(),Jc(1211,`p`),Tk(1212,`Exibe a mensagem setada na propriedade `),Jc(1213,`code`),Tk(1214,`p-error-pattern`),Zg(),Tk(1215,` se o campo estiver vazio e for requerido.`),Zg(),Jc(1216,`blockquote`)(1217,`p`),Tk(1218,`Necessário que a propriedade `),Jc(1219,`code`),Tk(1220,`p-required`),Zg(),Tk(1221,` esteja habilitada.`),Zg()()()(),Jc(1222,`tr`,15)(1223,`td`,16)(1224,`div`,24)(1225,`span`,25),Tk(1226,` p-show-required`),_u(1227,`br`),Zg()()(),Jc(1228,`td`,20)(1229,`code`,27),Tk(1230,`boolean`),Zg()(),Jc(1231,`td`,22),Tk(1232,`-`),Zg(),Jc(1233,`td`,23)(1234,`p`),Tk(1235,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1236,`blockquote`)(1237,`p`),Tk(1238,`Não será exibida a indicação se:`),Zg()(),Jc(1239,`ul`)(1240,`li`),Tk(1241,`Não possuir `),Jc(1242,`code`),Tk(1243,`p-help`),Zg(),Tk(1244,` e/ou `),Jc(1245,`code`),Tk(1246,`p-label`),Zg(),Tk(1247,`.`),Zg()()()(),Jc(1248,`tr`,15)(1249,`td`,16)(1250,`div`,24)(1251,`span`,25),Tk(1252,` p-size`),_u(1253,`br`),Zg()()(),Jc(1254,`td`,20)(1255,`code`,26),Tk(1256,`string`),Zg()(),Jc(1257,`td`,22)(1258,`p`)(1259,`code`),Tk(1260,`medium`),Zg()()(),Jc(1261,`td`,23)(1262,`em`)(1263,`strong`),Tk(1264,`(opcional)`),Zg()(),Jc(1265,`p`),Tk(1266,`Define o tamanho do componente:`),Zg(),Jc(1267,`ul`)(1268,`li`)(1269,`code`),Tk(1270,`small`),Zg(),Tk(1271,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1272,`li`)(1273,`code`),Tk(1274,`medium`),Zg(),Tk(1275,`: altura do input como 44px.`),Zg()(),Jc(1276,`blockquote`)(1277,`p`),Tk(1278,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1279,`code`),Tk(1280,`medium`),Zg(),Tk(1281,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1282,`a`,34),Tk(1283,`po-theme`),Zg(),Tk(1284,`.`),Zg()()()(),Jc(1285,`tr`,15)(1286,`td`,16)(1287,`div`,24)(1288,`span`,25),Tk(1289,` p-step`),_u(1290,`br`),Zg()()(),Jc(1291,`td`,20)(1292,`code`,26),Tk(1293,`string`),Zg()(),Jc(1294,`td`,22)(1295,`p`),Tk(1296,`1`),Zg()(),Jc(1297,`td`,23)(1298,`em`)(1299,`strong`),Tk(1300,`(opcional)`),Zg()(),Jc(1301,`p`),Tk(1302,`Intervalo.`),Zg()()(),Jc(1303,`tr`,15)(1304,`td`,16)(1305,`div`,24)(1306,`span`,25),Tk(1307,` p-upper-case`),_u(1308,`br`),Zg()()(),Jc(1309,`td`,20)(1310,`code`,27),Tk(1311,`boolean`),Zg()(),Jc(1312,`td`,22),Tk(1313,`-`),Zg(),Jc(1314,`td`,23)(1315,`p`),Tk(1316,`Converte o conteúdo do campo em maiúsulo automaticamente.`),Zg()()()(),Jc(1317,`h3`,11),Tk(1318,`Métodos`),Zg(),Jc(1319,`table`,35)(1320,`tr`,15)(1321,`th`,36)(1322,`div`,24)(1323,`h4`)(1324,`span`,25),Tk(1325,` showAdditionalHelp `),Zg()()()()(),Jc(1326,`tr`,23)(1327,`td`,23)(1328,`p`),Tk(1329,`Método que exibe `),Jc(1330,`code`),Tk(1331,`p-helper`),Zg(),Tk(1332,` ou executa a ação definida em `),Jc(1333,`code`),Tk(1334,`p-helper{eventOnClick}`),Zg(),Tk(1335,` ou em `),Jc(1336,`code`),Tk(1337,`p-additionalHelp`),Zg(),Tk(1338,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1339,`code`),Tk(1340,`p-keydown`),Zg(),Tk(1341,`.`),Zg(),Jc(1342,`blockquote`)(1343,`p`),Tk(1344,`Exibe ou oculta o conteúdo do componente `),Jc(1345,`code`),Tk(1346,`po-helper`),Zg(),Tk(1347,` quando o componente estiver com foco.`),Zg()(),Jc(1348,`pre`)(1349,`code`),Tk(1350,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Zg()(),Jc(1351,`pre`)(1352,`code`),Tk(1353,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1354,`br`),Jc(1355,`table`,35)(1356,`tr`,15)(1357,`th`,36)(1358,`div`,24)(1359,`h4`)(1360,`span`,25),Tk(1361,` focus `),Zg()()()()(),Jc(1362,`tr`,23)(1363,`td`,23)(1364,`p`),Tk(1365,`Função que atribui foco ao componente.`),Zg(),Jc(1366,`p`),Tk(1367,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1368,`pre`)(1369,`code`),Tk(1370,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),Zg()()()()(),_u(1371,`br`),Jc(1372,`h3`),Tk(1373,`Interfaces`),Zg(),Jc(1374,`h4`,37)(1375,`code`,5),Tk(1376,`ErrorAsyncProperties`),Zg()(),Jc(1377,`div`,2)(1378,`p`),Tk(1379,`Interface para realizar uma validação assíncrona no componente.`),Zg()(),Jc(1380,`h4`,11),Tk(1381,`Propriedades`),Zg(),Jc(1382,`table`,12)(1383,`tr`,13)(1384,`th`,14),Tk(1385,`Nome`),Zg(),Jc(1386,`th`,14),Tk(1387,`Tipo`),Zg(),Jc(1388,`th`,14),Tk(1389,`Descrição`),Zg()(),Jc(1390,`tr`,15)(1391,`td`,16)(1392,`div`,24)(1393,`span`,25),Tk(1394,` errorAsync`),_u(1395,`br`),Zg()()(),Jc(1396,`td`,20)(1397,`code`,38),Tk(1398,`(value) => Observable<boolean>`),Zg()(),Jc(1399,`td`,23)(1400,`p`),Tk(1401,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(1402,`code`),Tk(1403,`change`),Zg(),Tk(1404,` ou `),Jc(1405,`code`),Tk(1406,`change-model`),Zg(),Tk(1407,`, dependendo do valor da propriedade `),Jc(1408,`code`),Tk(1409,`triggerMode`),Zg(),Tk(1410,`.`),Zg()()(),Jc(1411,`tr`,15)(1412,`td`,16)(1413,`div`,24)(1414,`span`,25),Tk(1415,` triggerMode`),_u(1416,`br`),Zg()()(),Jc(1417,`td`,20)(1418,`code`,39),Tk(1419,`'change' `),Zg(),Jc(1420,`code`,40),Tk(1421,` 'changeModel'`),Zg()(),Jc(1422,`td`,23)(1423,`em`)(1424,`strong`),Tk(1425,`(opcional)`),Zg()(),Jc(1426,`p`),Tk(1427,`Controla se o método será executado no disparo do output `),Jc(1428,`code`),Tk(1429,`change`),Zg(),Tk(1430,` ou `),Jc(1431,`code`),Tk(1432,`change-model`),Zg(),Tk(1433,`.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function we(l,Pe){if(l&1){let d=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(d);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-number-basic-view`)(2,`sample-po-number-labs-view`)(3,`sample-po-number-calculate-view`),Zg()}if(l&2){let d=nk();Rb(`p-active`,d.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Number`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,we,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-number-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,le,me,pe,se],encapsulation:2,changeDetection:1})}return l})()}];var ue=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge({type:l});static ɵinj=de$1({imports:[WV.forChild(Me),WV]})}return l})();var Ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge({type:l});static ɵinj=de$1({imports:[M,ue]})}return l})();export{Ye as DocPoNumberModule};