import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,F as Joe,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Rn as voe,Ti as U_,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,ha as i1,io as vu,j as I4,ji as Vk,k as Goe,li as Qc,na as de,oo as wg,qi as ZL,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ce=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&vu(0,`po-decimal`,0)},dependencies:[voe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-decimal-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Decimal Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-decimal-basic`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=YO();Qc(0,`po-decimal`,1),z0(),vt(`ngModelChange`,function(l){return i.decimal=l})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.label,l)||(i.label=l),U_(l)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.help,l)||(i.help=l),U_(l)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.helperText,l)||(i.helperText=l),U_(l)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.placeholder,l)||(i.placeholder=l),U_(l)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.errorPattern,l)||(i.errorPattern=l),U_(l)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.displayFormat,l)||(i.displayFormat=l),U_(l)}),Kg(),Qc(14,`po-select`,11),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.icon,l)||(i.icon=l),U_(l)}),Kg(),Qc(15,`po-number`,12),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.min,l)||(i.min=l),U_(l)}),Kg(),Qc(16,`po-number`,13),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.max,l)||(i.max=l),U_(l)}),Kg(),Qc(17,`po-select`,14),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.locale,l)||(i.locale=l),U_(l)}),Kg(),Qc(18,`po-number`,15),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.decimalsLength,l)||(i.decimalsLength=l),U_(l)}),Kg(),Qc(19,`po-number`,16),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.thousandMaxlength,l)||(i.thousandMaxlength=l),U_(l)}),Kg(),Qc(20,`po-checkbox-group`,17),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.properties,l)||(i.properties=l),U_(l)}),Kg(),Qc(21,`po-radio-group`,18),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.size,l)||(i.size=l),U_(l)}),Kg(),Qc(22,`div`,2)(23,`po-button`,19),vt(`p-click`,function(){return i.restore()}),Kg()()()}r&2&&(Rb(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),W0(),wg(3),Rb(`p-value`,i.decimal),wg(),Rb(`p-value`,i.event),wg(4),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.help),W0(),wg(),Yb(`ngModel`,i.helperText),W0(),wg(),Yb(`ngModel`,i.placeholder),W0(),wg(),Yb(`ngModel`,i.errorPattern),W0(),wg(),Yb(`ngModel`,i.displayFormat),W0(),wg(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconOptions),W0(),wg(),Yb(`ngModel`,i.min),W0(),wg(),Yb(`ngModel`,i.max),W0(),wg(),Yb(`ngModel`,i.locale),Rb(`p-options`,i.localeOptions),W0(),wg(),Yb(`ngModel`,i.decimalsLength),Rb(`p-max`,i.maxDecimalsLength),W0(),wg(),Yb(`ngModel`,i.thousandMaxlength),Rb(`p-max`,i.maxThousandMaxlength),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-columns`,4)(`p-options`,i.propertiesOptions),W0(),wg(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,voe,j4,Goe,Zte,Koe,Joe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-decimal-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Decimal Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-decimal
  class="po-md-12"
  name="decimal"
  [ngModel]="decimal"
  (ngModelChange)="decimal = $event"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-display-format]="displayFormat"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-decimal>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-6"
    name="displayFormat"
    [(ngModel)]="displayFormat"
    p-clean
    p-label="Display Format"
    p-help="Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<"
  >
  </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    [p-columns]="4"
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  helperText: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  displayFormat: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
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

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.displayFormat = undefined;
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-decimal-labs`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=YO();Qc(0,`form`,null,0)(2,`div`,1),Sk(3,`Calculate hourly wage`),Kg(),vu(4,`po-divider`),Qc(5,`div`,2)(6,`po-number`,3),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.weekHours,l)||(i.weekHours=l),U_(l)}),Kg(),Qc(7,`po-number`,4),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.workingDaysPerWeek,l)||(i.workingDaysPerWeek=l),U_(l)}),Kg()(),Qc(8,`div`,2)(9,`po-number`,5),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.quantityDaysPerMonth,l)||(i.quantityDaysPerMonth=l),U_(l)}),Kg(),Qc(10,`po-decimal`,6),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.salary,l)||(i.salary=l),U_(l)}),vt(`p-change`,function(){return i.calculate()}),Kg()(),Qc(11,`div`,2)(12,`po-decimal`,7),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(i.hourlyWage,l)||(i.hourlyWage=l),U_(l)}),Kg()(),Qc(13,`div`,2)(14,`po-button`,8),vt(`p-click`,function(){B_(s);let l=ik(1);return U_(l.reset())}),Kg(),Qc(15,`po-button`,9),vt(`p-click`,function(){return i.calculate()}),Kg()()()}r&2&&(wg(6),Yb(`ngModel`,i.weekHours),W0(),wg(),Yb(`ngModel`,i.workingDaysPerWeek),W0(),wg(2),Yb(`ngModel`,i.quantityDaysPerMonth),W0(),wg(),Yb(`ngModel`,i.salary),W0(),wg(2),Yb(`ngModel`,i.hourlyWage),W0(),wg(3),Rb(`p-disabled`,!i.hourlyWage))},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,voe,Goe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-decimal-hourly-wage`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Decimal - Hourly Wage`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-decimal-hourly-wage`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,We,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{formBuilder=p(OZ);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,Xm.required],salary:[null,Xm.required],weekHours:[null,Xm.required],workingDaysPerWeek:[null,Xm.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:s}=this.formCalculateHourlyWage.value,l=s/(p/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:l})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Qc(0,`form`,0)(1,`div`,1),Sk(2,`Calculate hourly wage`),Kg(),vu(3,`po-divider`),Qc(4,`div`,2)(5,`po-number`,3),z0(),Kg(),Qc(6,`po-number`,4),z0(),Kg()(),Qc(7,`div`,2)(8,`po-number`,5),z0(),Kg(),Qc(9,`po-decimal`,6),z0(),vt(`p-change`,function(){return i.calculate()}),Kg()(),Qc(10,`div`,2)(11,`po-decimal`,7),z0(),Kg()(),Qc(12,`div`,2)(13,`po-button`,8),vt(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),Kg(),Qc(14,`po-button`,9),vt(`p-click`,function(){return i.calculate()}),Kg()()()),r&2&&(Rb(`formGroup`,i.formCalculateHourlyWage),wg(5),W0(),wg(),W0(),wg(2),W0(),wg(),W0(),wg(2),W0(),wg(3),Rb(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[AZ,MZ,TZ,ZL,i1,oi,Nf,voe,Goe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-decimal-hourly-wage-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Decimal - Hourly Wage Reactive Form`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-decimal-hourly-wage-reactive-form`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let p=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=p,this.taxValue=p*((this.tax??0)/100),this.totalOrder=p+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(Qc(0,`div`,0),Sk(1,`Order Simulation`),Kg(),vu(2,`po-divider`),Qc(3,`div`,1)(4,`po-decimal`,2),z0(),vt(`ngModelChange`,function(d){return i.price=d}),Kg(),Qc(5,`po-decimal`,3),z0(),vt(`ngModelChange`,function(d){return i.quantity=d}),Kg(),Qc(6,`po-decimal`,4),z0(),vt(`ngModelChange`,function(d){return i.discount=d}),Kg()(),Qc(7,`div`,1)(8,`po-decimal`,5),z0(),vt(`ngModelChange`,function(d){return i.tax=d}),Kg(),Qc(9,`po-decimal`,6),z0(),vt(`ngModelChange`,function(d){return i.shipping=d}),Kg(),Qc(10,`div`,7)(11,`po-button`,8),vt(`p-click`,function(){return i.calculate()}),Kg()()(),vu(12,`po-divider`),Qc(13,`div`,1)(14,`po-decimal`,9),z0(),vt(`ngModelChange`,function(d){return i.subtotal=d}),Kg(),Qc(15,`po-decimal`,10),z0(),vt(`ngModelChange`,function(d){return i.taxValue=d}),Kg(),Qc(16,`po-decimal`,11),z0(),vt(`ngModelChange`,function(d){return i.totalOrder=d}),Kg()()),r&2&&(wg(4),Rb(`ngModel`,i.price),W0(),wg(),Rb(`p-decimals-length`,0)(`ngModel`,i.quantity),W0(),wg(),Rb(`ngModel`,i.discount),W0(),wg(2),Rb(`p-decimals-length`,3)(`ngModel`,i.tax),W0(),wg(),Rb(`p-optional`,!0)(`ngModel`,i.shipping),W0(),wg(5),Rb(`p-readonly`,!0)(`ngModel`,i.subtotal),W0(),wg(),Rb(`p-readonly`,!0)(`ngModel`,i.taxValue),W0(),wg(),Rb(`p-readonly`,!0)(`ngModel`,i.totalOrder),W0())},dependencies:[MZ,QL,oi,Nf,voe],encapsulation:2})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-decimal-display-format`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Decimal - Display Format`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-title">Order Simulation</div>

<po-divider />

<div class="po-row">
  <po-decimal
    class="po-lg-4 po-md-6"
    name="price"
    p-label="Unit Price"
    p-help="Enter the product price"
    p-display-format=">>>>>>>>9.99"
    p-icon="an an-tag-simple"
    [ngModel]="price"
    (ngModelChange)="price = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="quantity"
    p-label="Quantity"
    p-help="Enter the number of items"
    p-display-format="999"
    [p-decimals-length]="0"
    [ngModel]="quantity"
    (ngModelChange)="quantity = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="discount"
    p-label="Discount"
    p-help="Enter a discount (use negative for deduction)"
    p-display-format="->>9.99"
    [ngModel]="discount"
    (ngModelChange)="discount = $event"
  >
  </po-decimal>
</div>

<div class="po-row">
  <po-decimal
    class="po-lg-4 po-md-6"
    name="tax"
    p-label="Tax (%)"
    p-help="Tax percentage applied to the subtotal"
    p-display-format=">>9.9<<"
    [p-decimals-length]="3"
    [ngModel]="tax"
    (ngModelChange)="tax = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="shipping"
    p-label="Shipping"
    p-help="Shipping cost"
    p-display-format=">>>,>>9.99"
    [p-optional]="true"
    [ngModel]="shipping"
    (ngModelChange)="shipping = $event"
  >
  </po-decimal>

  <div class="po-lg-4 po-md-6 po-mt-4">
    <po-button p-label="Calculate Total" p-icon="an an-calculator" p-kind="primary" (p-click)="calculate()">
    </po-button>
  </div>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-decimal
    class="po-lg-4 po-md-6"
    name="subtotal"
    p-label="Subtotal"
    p-display-format=">>>,>>>,>>9.99"
    p-icon="an an-equals"
    [p-readonly]="true"
    [ngModel]="subtotal"
    (ngModelChange)="subtotal = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="taxValue"
    p-label="Taxes"
    p-display-format=">>>,>>>,>>9.99"
    [p-readonly]="true"
    [ngModel]="taxValue"
    (ngModelChange)="taxValue = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="totalOrder"
    p-label="Order Total"
    p-display-format=">>>,>>>,>>9.99"
    p-icon="an an-currency-dollar-simple"
    [p-readonly]="true"
    [ngModel]="totalOrder"
    (ngModelChange)="totalOrder = $event"
  >
  </po-decimal>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-display-format',
  templateUrl: './sample-po-decimal-display-format.component.html',
  standalone: false
})
export class SamplePoDecimalDisplayFormatComponent {
  price: number = 99.9;
  quantity: number = 3;
  discount: number = -10.5;
  tax: number = 8.5;
  shipping: number = 15.0;
  subtotal: number | undefined;
  taxValue: number | undefined;
  totalOrder: number | undefined;

  calculate(): void {
    const sub = (this.price ?? 0) * (this.quantity ?? 0) + (this.discount ?? 0);
    this.subtotal = sub;
    this.taxValue = sub * ((this.tax ?? 0) / 100);
    this.totalOrder = sub + this.taxValue + (this.shipping ?? 0);
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-decimal-display-format`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ze,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-decimal-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-decimals-length`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-display-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`id`,`prop-p-emit-all-changes`,1,`docs-api-properties-row`],[`id`,`event-p-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-error-async-properties`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-error-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-locale`,1,`docs-api-properties-row`],[`href`,`documentation/po-i18n`],[`id`,`prop-p-mask`,1,`docs-api-properties-row`],[`id`,`prop-p-mask-format-model`,1,`docs-api-properties-row`],[`id`,`prop-p-mask-no-length-validation`,1,`docs-api-properties-row`],[`id`,`prop-p-max`,1,`docs-api-properties-row`],[`id`,`prop-p-maxlength`,1,`docs-api-properties-row`],[`id`,`prop-p-min`,1,`docs-api-properties-row`],[`id`,`prop-p-minlength`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-thousand-maxlength`,1,`docs-api-properties-row`],[`id`,`prop-p-upper-case`,1,`docs-api-properties-row`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[`id`,`interface-error-async-properties`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-error-async-properties-error-async`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`id`,`interface-error-async-properties-trigger-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoDecimalComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),Kg(),Qc(24,`p`),Sk(25,`Importante:`),Kg(),Qc(26,`ul`)(27,`li`),Sk(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),Kg()(),Qc(29,`h4`),Sk(30,`Tokens customizáveis`),Kg(),Qc(31,`p`),Sk(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),vu(33,`br`),Sk(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Qc(35,`code`),Sk(36,`.po-input`),Kg()(),Qc(37,`blockquote`)(38,`p`),Sk(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Qc(40,`a`,6),Sk(41,`Grid System`),Kg(),Sk(42,`.`),Kg()(),Qc(43,`blockquote`)(44,`p`),Sk(45,`Para maiores informações, acesse o guia `),Qc(46,`a`,7),Sk(47,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(48,`.`),Kg()(),Qc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),Sk(53,`Propriedade`),Kg(),Qc(54,`th`),Sk(55,`Descrição`),Kg(),Qc(56,`th`),Sk(57,`Valor Padrão`),Kg()()(),Qc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),Sk(62,`Default Values`),Kg()(),vu(63,`td`)(64,`td`),Kg(),Qc(65,`tr`)(66,`td`)(67,`code`),Sk(68,`--font-family`),Kg()(),Qc(69,`td`),Sk(70,`Família tipográfica usada`),Kg(),Qc(71,`td`)(72,`code`),Sk(73,`var(--font-family-theme)`),Kg()()(),Qc(74,`tr`)(75,`td`)(76,`code`),Sk(77,`--font-size`),Kg()(),Qc(78,`td`),Sk(79,`Tamanho da fonte`),Kg(),Qc(80,`td`)(81,`code`),Sk(82,`var(--font-size-default)`),Kg()()(),Qc(83,`tr`)(84,`td`)(85,`code`),Sk(86,`--text-color-placeholder`),Kg()(),Qc(87,`td`),Sk(88,`Cor do texto placeholder`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--color-neutral-light-30)`),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--color`),Kg()(),Qc(96,`td`),Sk(97,`Cor pincipal do input`),Kg(),Qc(98,`td`)(99,`code`),Sk(100,`var(--color-neutral-dark-70)`),Kg()()(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--background`),Kg()(),Qc(105,`td`),Sk(106,`Cor de background`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--color-neutral-light-05)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`code`),Sk(113,`--padding`),Kg()(),Qc(114,`td`),Sk(115,`Preenchimento`),Kg(),Qc(116,`td`)(117,`code`),Sk(118,`0 0.5rem`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`code`),Sk(122,`--text-color`),Kg()(),Qc(123,`td`),Sk(124,`Cor do texto`),Kg(),Qc(125,`td`)(126,`code`),Sk(127,`var(--color-neutral-dark-90)`),Kg()()(),Qc(128,`tr`)(129,`td`)(130,`code`),Sk(131,`--field-container-title-justify`),Kg()(),Qc(132,`td`),Sk(133,`Alinhamento horizontal do título (`),Qc(134,`code`),Sk(135,`justify-content`),Kg(),Sk(136,`)`),Kg(),Qc(137,`td`)(138,`code`),Sk(139,`space-between`),Kg()()(),Qc(140,`tr`)(141,`td`)(142,`code`),Sk(143,`--field-container-title-flex`),Kg()(),Qc(144,`td`),Sk(145,`Flex do título (`),Qc(146,`code`),Sk(147,`flex`),Kg(),Sk(148,`)`),Kg(),Qc(149,`td`)(150,`code`),Sk(151,`1 auto`),Kg()()(),Qc(152,`tr`)(153,`td`)(154,`strong`),Sk(155,`Hover`),Kg()(),vu(156,`td`)(157,`td`),Kg(),Qc(158,`tr`)(159,`td`)(160,`code`),Sk(161,`--color-hover`),Kg()(),Qc(162,`td`),Sk(163,`Cor principal no estado hover`),Kg(),Qc(164,`td`)(165,`code`),Sk(166,`var(--color-brand-01-dark)`),Kg()()(),Qc(167,`tr`)(168,`td`)(169,`code`),Sk(170,`--background-hover`),Kg()(),Qc(171,`td`),Sk(172,`Cor de background no estado hover`),Kg(),Qc(173,`td`)(174,`code`),Sk(175,`var(--color-brand-01-lightest)`),Kg()()(),Qc(176,`tr`)(177,`td`)(178,`strong`),Sk(179,`Focused`),Kg()(),vu(180,`td`)(181,`td`),Kg(),Qc(182,`tr`)(183,`td`)(184,`code`),Sk(185,`--color-focused`),Kg()(),Qc(186,`td`),Sk(187,`Cor principal no estado de focus`),Kg(),Qc(188,`td`)(189,`code`),Sk(190,`var(--color-action-default)`),Kg()()(),Qc(191,`tr`)(192,`td`)(193,`code`),Sk(194,`--outline-color-focused`),Kg()(),Qc(195,`td`),Sk(196,`Cor do outline do estado de focus`),Kg(),Qc(197,`td`)(198,`code`),Sk(199,`var(--color-action-focus)`),Kg()()(),Qc(200,`tr`)(201,`td`)(202,`strong`),Sk(203,`Disabled`),Kg()(),vu(204,`td`)(205,`td`),Kg(),Qc(206,`tr`)(207,`td`)(208,`code`),Sk(209,`--color-disabled`),Kg()(),Qc(210,`td`),Sk(211,`Cor principal no estado disabled`),Kg(),Qc(212,`td`)(213,`code`),Sk(214,`var(--color-neutral-light-30)`),Kg()()(),Qc(215,`tr`)(216,`td`)(217,`code`),Sk(218,`--background-disabled`),Kg()(),Qc(219,`td`),Sk(220,`Cor de background no estado disabled`),Kg(),Qc(221,`td`)(222,`code`),Sk(223,`var(--color-neutral-light-20)`),Kg()()(),Qc(224,`tr`)(225,`td`)(226,`code`),Sk(227,`--text-color-disabled`),Kg()(),Qc(228,`td`),Sk(229,`Cor do texto no estado disabled`),Kg(),Qc(230,`td`)(231,`code`),Sk(232,`var(--color-neutral-dark-70)`),Kg()()()()(),Qc(233,`p`),vu(234,`br`),Sk(235,` - O `),Qc(236,`code`),Sk(237,`po-decimal`),Kg(),Sk(238,` é um `),Qc(239,`em`),Sk(240,`input`),Kg(),Sk(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),Kg(),Qc(242,`ul`)(243,`li`),Sk(244,`Aceita apenas números;`),Kg(),Qc(245,`li`),Sk(246,`Utiliza ',' como separador de decimal;`),Kg(),Qc(247,`li`),Sk(248,`Utiliza '.' para separação de milhar;`),Kg(),Qc(249,`li`),Sk(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),Kg()(),Qc(251,`blockquote`)(252,`p`)(253,`strong`),Sk(254,`Importante:`),Kg(),Sk(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Qc(256,`code`),Sk(257,`32 bits`),Kg(),Sk(258,`, e para que os valores comportem-se devidamente,
o `),Qc(259,`code`),Sk(260,`po-decimal`),Kg(),Sk(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Qc(262,`code`),Sk(263,`p-decimals-length`),Kg(),Sk(264,` e `),Qc(265,`code`),Sk(266,`p-thousand-maxlength`),Kg(),Sk(267,`.`),Kg()()(),Qc(268,`div`,8)(269,`h4`,9),Sk(270,`Seletor`),Kg(),Qc(271,`pre`,10),Sk(272,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-decimals-length="number"
    p-disabled="boolean"
    p-display-format="string | undefined"
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
    p-locale="string"
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
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),Kg()(),Qc(273,`h4`,11),Sk(274,`Propriedades`),Kg(),Qc(275,`table`,12)(276,`tr`,13)(277,`th`,14),Sk(278,`Nome`),Kg(),Qc(279,`th`,14),Sk(280,`Tipo`),Kg(),Qc(281,`th`,14),Sk(282,`Padrão`),Kg(),Qc(283,`th`,14),Sk(284,`Descrição`),Kg()(),Qc(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),Sk(289,` (p-additional-help)`),vu(290,`br`),Kg()(),Qc(291,`div`,19),Sk(292,`Deprecated`),Kg()(),Qc(293,`td`,20)(294,`code`,21),Sk(295,`EventEmitter`),Kg()(),Qc(296,`td`,22),Sk(297,`-`),Kg(),Qc(298,`td`,23)(299,`em`)(300,`strong`),Sk(301,`(opcional)`),Kg()(),Qc(302,`p`),Sk(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(304,`blockquote`)(305,`p`),Sk(306,`Essa propriedade está `),Qc(307,`strong`),Sk(308,`depreciada`),Kg(),Sk(309,` e será removida na versão `),Qc(310,`code`),Sk(311,`23.x.x`),Kg(),Sk(312,`. Recomendamos utilizar a propriedade `),Qc(313,`code`),Sk(314,`p-helper`),Kg(),Sk(315,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(316,`tr`,24)(317,`td`,16)(318,`div`,25)(319,`span`,26),Sk(320,` p-additional-help-tooltip`),vu(321,`br`),Kg()(),Qc(322,`div`,19),Sk(323,`Deprecated`),Kg()(),Qc(324,`td`,20)(325,`code`,27),Sk(326,`string`),Kg()(),Qc(327,`td`,22),Sk(328,`-`),Kg(),Qc(329,`td`,23)(330,`em`)(331,`strong`),Sk(332,`(opcional)`),Kg()(),Qc(333,`p`),Sk(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(335,`code`),Sk(336,`po-helper`),Kg(),Sk(337,`.
`),Qc(338,`strong`),Sk(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(340,`blockquote`)(341,`p`),Sk(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(343,`blockquote`)(344,`p`),Sk(345,`Essa propriedade está `),Qc(346,`strong`),Sk(347,`depreciada`),Kg(),Sk(348,` e será removida na versão `),Qc(349,`code`),Sk(350,`23.x.x`),Kg(),Sk(351,`. Recomendamos utilizar a propriedade `),Qc(352,`code`),Sk(353,`p-helper`),Kg(),Sk(354,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(355,`tr`,28)(356,`td`,16)(357,`div`,25)(358,`span`,26),Sk(359,` p-append-in-body`),vu(360,`br`),Kg()()(),Qc(361,`td`,20)(362,`code`,29),Sk(363,`boolean`),Kg()(),Qc(364,`td`,22)(365,`p`)(366,`code`),Sk(367,`false`),Kg()()(),Qc(368,`td`,23)(369,`em`)(370,`strong`),Sk(371,`(opcional)`),Kg()(),Qc(372,`p`),Sk(373,`Define que o popover (`),Qc(374,`code`),Sk(375,`p-helper`),Kg(),Sk(376,` e/ou `),Qc(377,`code`),Sk(378,`p-error-limit`),Kg(),Sk(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(380,`blockquote`)(381,`p`),Sk(382,`Quando utilizado com `),Qc(383,`code`),Sk(384,`p-helper`),Kg(),Sk(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(386,`tr`,30)(387,`td`,16)(388,`div`,25)(389,`span`,26),Sk(390,` p-auto-focus`),vu(391,`br`),Kg()()(),Qc(392,`td`,20)(393,`code`,29),Sk(394,`boolean`),Kg()(),Qc(395,`td`,22)(396,`p`)(397,`code`),Sk(398,`false`),Kg()()(),Qc(399,`td`,23)(400,`em`)(401,`strong`),Sk(402,`(opcional)`),Kg()(),Qc(403,`p`),Sk(404,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(405,`blockquote`)(406,`p`),Sk(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(408,`tr`,31)(409,`td`,16)(410,`div`,17)(411,`span`,18),Sk(412,` (p-blur)`),vu(413,`br`),Kg()()(),Qc(414,`td`,20)(415,`code`,21),Sk(416,`EventEmitter`),Kg()(),Qc(417,`td`,22),Sk(418,`-`),Kg(),Qc(419,`td`,23)(420,`em`)(421,`strong`),Sk(422,`(opcional)`),Kg()(),Qc(423,`p`),Sk(424,`Evento disparado ao sair do campo.`),Kg()()(),Qc(425,`tr`,32)(426,`td`,16)(427,`div`,17)(428,`span`,18),Sk(429,` (p-change)`),vu(430,`br`),Kg()()(),Qc(431,`td`,20)(432,`code`,21),Sk(433,`EventEmitter`),Kg()(),Qc(434,`td`,22),Sk(435,`-`),Kg(),Qc(436,`td`,23)(437,`em`)(438,`strong`),Sk(439,`(opcional)`),Kg()(),Qc(440,`p`),Sk(441,`Evento disparado ao alterar valor e deixar o campo.`),Kg()()(),Qc(442,`tr`,33)(443,`td`,16)(444,`div`,17)(445,`span`,18),Sk(446,` (p-change-model)`),vu(447,`br`),Kg()()(),Qc(448,`td`,20)(449,`code`,21),Sk(450,`EventEmitter`),Kg()(),Qc(451,`td`,22),Sk(452,`-`),Kg(),Qc(453,`td`,23)(454,`em`)(455,`strong`),Sk(456,`(opcional)`),Kg()(),Qc(457,`p`),Sk(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(459,`code`),Sk(460,`setValue`),Kg(),Sk(461,`, `),Qc(462,`code`),Sk(463,`patchValue`),Kg(),Sk(464,`, carregamento assíncrono).`),Kg(),Qc(465,`p`),Sk(466,`Diferentemente do `),Qc(467,`code`),Sk(468,`p-change`),Kg(),Sk(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(470,`code`),Sk(471,`p-change-model`),Kg(),Sk(472,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(473,`p`),Sk(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(475,`tr`,34)(476,`td`,16)(477,`div`,25)(478,`span`,26),Sk(479,`p-clean`),vu(480,`br`),Kg()()(),Qc(481,`td`,20)(482,`code`,29),Sk(483,`boolean`),Kg()(),Qc(484,`td`,22),Sk(485,`-`),Kg(),Qc(486,`td`,23)(487,`em`)(488,`strong`),Sk(489,`(opcional)`),Kg()(),Qc(490,`p`),Sk(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg()()(),Qc(492,`tr`,35)(493,`td`,16)(494,`div`,25)(495,`span`,26),Sk(496,` p-compact-label`),vu(497,`br`),Kg()()(),Qc(498,`td`,20)(499,`code`,29),Sk(500,`boolean`),Kg()(),Qc(501,`td`,22)(502,`p`)(503,`code`),Sk(504,`false`),Kg()()(),Qc(505,`td`,23)(506,`em`)(507,`strong`),Sk(508,`(opcional)`),Kg()(),Qc(509,`p`),Sk(510,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(511,`p`),Sk(512,`Quando habilitado (`),Qc(513,`code`),Sk(514,`true`),Kg(),Sk(515,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(516,`ul`)(517,`li`)(518,`code`),Sk(519,`po-label`),Kg()(),Qc(520,`li`)(521,`code`),Sk(522,`p-requirement (showRequired)`),Kg()(),Qc(523,`li`)(524,`code`),Sk(525,`po-helper`),Kg()()(),Qc(526,`p`),Sk(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(528,`p`),Sk(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(530,`ul`)(531,`li`)(532,`code`),Sk(533,`--field-container-title-justify`),Kg()(),Qc(534,`li`)(535,`code`),Sk(536,`--field-container-title-flex`),Kg()()(),Qc(537,`p`),Sk(538,`Exemplo:`),Kg(),Qc(539,`pre`)(540,`code`),Sk(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(542,`p`),Sk(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(544,`tr`,36)(545,`td`,16)(546,`div`,25)(547,`span`,26),Sk(548,` p-decimals-length`),vu(549,`br`),Kg()()(),Qc(550,`td`,20)(551,`code`,37),Sk(552,`number`),Kg()(),Qc(553,`td`,22)(554,`p`)(555,`code`),Sk(556,`2`),Kg()()(),Qc(557,`td`,23)(558,`em`)(559,`strong`),Sk(560,`(opcional)`),Kg()(),Qc(561,`p`),Sk(562,`Quantidade máxima de casas decimais.`),Kg(),Qc(563,`blockquote`)(564,`p`)(565,`strong`),Sk(566,`Importante:`),Kg()()(),Qc(567,`ul`)(568,`li`),Sk(569,`O valor máximo permitido é 15;`),Kg(),Qc(570,`li`),Sk(571,`A soma total de `),Qc(572,`code`),Sk(573,`p-decimals-length`),Kg(),Sk(574,` com `),Qc(575,`code`),Sk(576,`p-thousand-maxlength`),Kg(),Sk(577,` limita-se à 16;`),Kg(),Qc(578,`li`),Sk(579,`Esta propriedade sobrepõe apenas o valor `),Qc(580,`strong`),Sk(581,`padrão`),Kg(),Sk(582,` de `),Qc(583,`code`),Sk(584,`p-thousand-maxlength`),Kg(),Sk(585,`;`),Kg(),Qc(586,`li`),Sk(587,`Caso `),Qc(588,`code`),Sk(589,`p-thousand-maxlength`),Kg(),Sk(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),Kg(),Qc(591,`li`),Sk(592,`Quando utilizado com `),Qc(593,`code`),Sk(594,`p-display-format`),Kg(),Sk(595,`, será respeitado o valor `),Qc(596,`strong`),Sk(597,`mais restritivo`),Kg(),Sk(598,` entre esta propriedade e o número de casas decimais definido no formato.`),Kg()()()(),Qc(599,`tr`,38)(600,`td`,16)(601,`div`,25)(602,`span`,26),Sk(603,`p-disabled`),vu(604,`br`),Kg()()(),Qc(605,`td`,20)(606,`code`,29),Sk(607,`boolean`),Kg()(),Qc(608,`td`,22)(609,`p`)(610,`code`),Sk(611,`false`),Kg()()(),Qc(612,`td`,23)(613,`em`)(614,`strong`),Sk(615,`(opcional)`),Kg()(),Qc(616,`p`),Sk(617,`Se verdadeiro, desabilita o campo.`),Kg()()(),Qc(618,`tr`,39)(619,`td`,16)(620,`div`,25)(621,`span`,26),Sk(622,` p-display-format`),vu(623,`br`),Kg()()(),Qc(624,`td`,20)(625,`code`,27),Sk(626,`string `),Kg(),Qc(627,`code`,40),Sk(628,` undefined`),Kg()(),Qc(629,`td`,22),Sk(630,`-`),Kg(),Qc(631,`td`,23)(632,`em`)(633,`strong`),Sk(634,`(opcional)`),Kg()(),Qc(635,`p`),Sk(636,`Define uma máscara de formatação numérica avançada para o campo.`),Kg(),Qc(637,`p`),Sk(638,`Simbologia suportada:`),Kg(),Qc(639,`ul`)(640,`li`)(641,`code`),Sk(642,`9`),Kg(),Sk(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Kg(),Qc(644,`li`)(645,`code`),Sk(646,`>`),Kg(),Sk(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),Kg(),Qc(648,`li`)(649,`code`),Sk(650,`<`),Kg(),Sk(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Kg(),Qc(652,`li`)(653,`code`),Sk(654,`,`),Kg(),Sk(655,` e `),Qc(656,`code`),Sk(657,`.`),Kg(),Sk(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),Qc(659,`code`),Sk(660,`p-locale`),Kg(),Sk(661,`);`),Kg(),Qc(662,`li`)(663,`code`),Sk(664,`-`),Kg(),Sk(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Kg()(),Qc(666,`blockquote`)(667,`p`)(668,`strong`),Sk(669,`Importante:`),Kg()()(),Qc(670,`ul`)(671,`li`),Sk(672,`A formatação via `),Qc(673,`code`),Sk(674,`p-display-format`),Kg(),Sk(675,` é apenas visual; o valor do model é sempre o número puro.`),Kg(),Qc(676,`li`),Sk(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),Qc(678,`code`),Sk(679,`-`),Kg(),Sk(680,`), o campo exibe com a formatação padrão do `),Qc(681,`code`),Sk(682,`po-decimal`),Kg(),Sk(683,` (separadores de milhar + `),Qc(684,`code`),Sk(685,`p-decimals-length`),Kg(),Sk(686,` casas decimais).`),Kg(),Qc(687,`li`),Sk(688,`Quando `),Qc(689,`code`),Sk(690,`p-decimals-length`),Kg(),Sk(691,` ou `),Qc(692,`code`),Sk(693,`p-thousand-maxlength`),Kg(),Sk(694,` são definidos, será respeitado o valor `),Qc(695,`strong`),Sk(696,`mais restritivo`),Kg(),Sk(697,` entre o formato e a propriedade.`),Kg(),Qc(698,`li`),Sk(699,`Incompatível com `),Qc(700,`code`),Sk(701,`p-mask`),Kg(),Sk(702,`, `),Qc(703,`code`),Sk(704,`p-mask-format-model`),Kg(),Sk(705,`, `),Qc(706,`code`),Sk(707,`p-mask-no-length-validation`),Kg(),Sk(708,` e `),Qc(709,`code`),Sk(710,`p-pattern`),Kg(),Sk(711,`.`),Kg()(),Qc(712,`p`),Sk(713,`Exemplos de formato: `),Qc(714,`code`),Sk(715,`>>>,>>>,>>9.99`),Kg(),Sk(716,`, `),Qc(717,`code`),Sk(718,`->>,>>9.99`),Kg(),Sk(719,`, `),Qc(720,`code`),Sk(721,`999.9`),Kg(),Sk(722,`, `),Qc(723,`code`),Sk(724,`>>>,>>9.9<<<<<<`),Kg()()()(),Qc(725,`tr`,41)(726,`td`,16)(727,`div`,25)(728,`span`,26),Sk(729,` p-emit-all-changes`),vu(730,`br`),Kg()()(),Qc(731,`td`,20)(732,`code`,29),Sk(733,`boolean`),Kg()(),Qc(734,`td`,22)(735,`p`)(736,`code`),Sk(737,`false`),Kg()()(),Qc(738,`td`,23)(739,`em`)(740,`strong`),Sk(741,`(opcional)`),Kg()(),Qc(742,`p`),Sk(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),Kg()()(),Qc(744,`tr`,42)(745,`td`,16)(746,`div`,17)(747,`span`,18),Sk(748,` (p-enter)`),vu(749,`br`),Kg()()(),Qc(750,`td`,20)(751,`code`,21),Sk(752,`EventEmitter`),Kg()(),Qc(753,`td`,22),Sk(754,`-`),Kg(),Qc(755,`td`,23)(756,`em`)(757,`strong`),Sk(758,`(opcional)`),Kg()(),Qc(759,`p`),Sk(760,`Evento disparado ao entrar do campo.`),Kg()()(),Qc(761,`tr`,43)(762,`td`,16)(763,`div`,25)(764,`span`,26),Sk(765,` p-error-async-properties`),vu(766,`br`),Kg()()(),Qc(767,`td`,20)(768,`code`,44),Sk(769,`ErrorAsyncProperties`),Kg()(),Qc(770,`td`,22),Sk(771,`-`),Kg(),Qc(772,`td`,23)(773,`em`)(774,`strong`),Sk(775,`(opcional)`),Kg()(),Qc(776,`p`),Sk(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Qc(778,`code`),Sk(779,`Reactive Forms`),Kg(),Sk(780,`. Em formulários reativos, pode-se utilizar o próprio `),Qc(781,`code`),Sk(782,`asyncValidators`),Kg(),Sk(783,`.`),Kg()()(),Qc(784,`tr`,45)(785,`td`,16)(786,`div`,25)(787,`span`,26),Sk(788,` p-error-limit`),vu(789,`br`),Kg()()(),Qc(790,`td`,20)(791,`code`,29),Sk(792,`boolean`),Kg()(),Qc(793,`td`,22)(794,`p`)(795,`code`),Sk(796,`false`),Kg()()(),Qc(797,`td`,23)(798,`em`)(799,`strong`),Sk(800,`(opcional)`),Kg()(),Qc(801,`p`),Sk(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(803,`blockquote`)(804,`p`),Sk(805,`Caso essa propriedade seja definida como `),Qc(806,`code`),Sk(807,`true`),Kg(),Sk(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(809,`tr`,46)(810,`td`,16)(811,`div`,25)(812,`span`,26),Sk(813,` p-error-pattern`),vu(814,`br`),Kg()()(),Qc(815,`td`,20)(816,`code`,27),Sk(817,`string`),Kg()(),Qc(818,`td`,22),Sk(819,`-`),Kg(),Qc(820,`td`,23)(821,`em`)(822,`strong`),Sk(823,`(opcional)`),Kg()(),Qc(824,`p`),Sk(825,`Mensagem que será apresentada quando o `),Qc(826,`code`),Sk(827,`pattern`),Kg(),Sk(828,` ou a máscara não for satisfeita.`),Kg(),Qc(829,`blockquote`)(830,`p`),Sk(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Qc(832,`code`),Sk(833,`p-required-field-error-message`),Kg(),Sk(834,` em conjunto.`),Kg()()()(),Qc(835,`tr`,47)(836,`td`,16)(837,`div`,25)(838,`span`,26),Sk(839,` p-help`),vu(840,`br`),Kg()()(),Qc(841,`td`,20)(842,`code`,27),Sk(843,`string`),Kg()(),Qc(844,`td`,22),Sk(845,`-`),Kg(),Qc(846,`td`,23)(847,`em`)(848,`strong`),Sk(849,`(opcional)`),Kg()(),Qc(850,`p`),Sk(851,`Texto de apoio do campo.`),Kg()()(),Qc(852,`tr`,48)(853,`td`,16)(854,`div`,25)(855,`span`,26),Sk(856,` p-icon`),vu(857,`br`),Kg()()(),Qc(858,`td`,20)(859,`code`,27),Sk(860,`string `),Kg(),Qc(861,`code`,49),Sk(862,` TemplateRef<void>`),Kg()(),Qc(863,`td`,22),Sk(864,`-`),Kg(),Qc(865,`td`,23)(866,`em`)(867,`strong`),Sk(868,`(opcional)`),Kg()(),Qc(869,`p`),Sk(870,`Define o ícone que será exibido no início do campo.`),Kg(),Qc(871,`p`),Sk(872,`É possível usar qualquer um dos ícones da `),Qc(873,`a`,50),Sk(874,`Biblioteca de ícones`),Kg(),Sk(875,`. conforme exemplo abaixo:`),Kg(),Qc(876,`pre`)(877,`code`),Sk(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),Kg()(),Qc(879,`p`),Sk(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(881,`em`),Sk(882,`Font Awesome`),Kg(),Sk(883,`, da seguinte forma:`),Kg(),Qc(884,`pre`)(885,`code`),Sk(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),Kg()(),Qc(887,`p`),Sk(888,`Outra opção seria a customização do ícone através do `),Qc(889,`code`),Sk(890,`TemplateRef`),Kg(),Sk(891,`, conforme exemplo abaixo:`),Kg(),Qc(892,`pre`)(893,`code`),Sk(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(895,`blockquote`)(896,`p`),Sk(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(898,`code`),Sk(899,`font-size: inherit`),Kg(),Sk(900,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(901,`tr`,51)(902,`td`,16)(903,`div`,17)(904,`span`,18),Sk(905,` (p-keydown)`),vu(906,`br`),Kg()()(),Qc(907,`td`,20)(908,`code`,21),Sk(909,`EventEmitter`),Kg()(),Qc(910,`td`,22),Sk(911,`-`),Kg(),Qc(912,`td`,23)(913,`em`)(914,`strong`),Sk(915,`(opcional)`),Kg()(),Qc(916,`p`),Sk(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(918,`code`),Sk(919,`KeyboardEvent`),Kg(),Sk(920,` com informações sobre a tecla.`),Kg()()(),Qc(921,`tr`,52)(922,`td`,16)(923,`div`,25)(924,`span`,26),Sk(925,` p-label`),vu(926,`br`),Kg()()(),Qc(927,`td`,20)(928,`code`,27),Sk(929,`string`),Kg()(),Qc(930,`td`,22),Sk(931,`-`),Kg(),Qc(932,`td`,23)(933,`em`)(934,`strong`),Sk(935,`(opcional)`),Kg()(),Qc(936,`p`),Sk(937,`Rótulo do campo.`),Kg()()(),Qc(938,`tr`,53)(939,`td`,16)(940,`div`,25)(941,`span`,26),Sk(942,` p-label-text-wrap`),vu(943,`br`),Kg()()(),Qc(944,`td`,20)(945,`code`,29),Sk(946,`boolean`),Kg()(),Qc(947,`td`,22)(948,`p`)(949,`code`),Sk(950,`false`),Kg()()(),Qc(951,`td`,23)(952,`em`)(953,`strong`),Sk(954,`(opcional)`),Kg()(),Qc(955,`p`),Sk(956,`Habilita a quebra automática do texto da propriedade `),Qc(957,`code`),Sk(958,`p-label`),Kg(),Sk(959,`. Quando `),Qc(960,`code`),Sk(961,`p-label-text-wrap`),Kg(),Sk(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(963,`tr`,54)(964,`td`,16)(965,`div`,25)(966,`span`,26),Sk(967,` p-loading`),vu(968,`br`),Kg()()(),Qc(969,`td`,20)(970,`code`,29),Sk(971,`boolean`),Kg()(),Qc(972,`td`,22)(973,`p`)(974,`code`),Sk(975,`false`),Kg()()(),Qc(976,`td`,23)(977,`em`)(978,`strong`),Sk(979,`(opcional)`),Kg()(),Qc(980,`p`),Sk(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(982,`tr`,55)(983,`td`,16)(984,`div`,25)(985,`span`,26),Sk(986,` p-locale`),vu(987,`br`),Kg()()(),Qc(988,`td`,20)(989,`code`,27),Sk(990,`string`),Kg()(),Qc(991,`td`,22),Sk(992,`-`),Kg(),Qc(993,`td`,23)(994,`em`)(995,`strong`),Sk(996,`(opcional)`),Kg()(),Qc(997,`p`),Sk(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Qc(999,`a`,56)(1e3,`code`),Sk(1001,`I18n`),Kg()()(),Qc(1002,`blockquote`)(1003,`p`),Sk(1004,`Para ver quais linguagens suportadas acesse `),Qc(1005,`a`,56)(1006,`code`),Sk(1007,`I18n`),Kg()()()()()(),Qc(1008,`tr`,57)(1009,`td`,16)(1010,`div`,25)(1011,`span`,26),Sk(1012,`p-mask`),vu(1013,`br`),Kg()()(),Qc(1014,`td`,20)(1015,`code`,27),Sk(1016,`string`),Kg()(),Qc(1017,`td`,22),Sk(1018,`-`),Kg(),Qc(1019,`td`,23)(1020,`em`)(1021,`strong`),Sk(1022,`(opcional)`),Kg()(),Qc(1023,`p`),Sk(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),Kg()()(),Qc(1025,`tr`,58)(1026,`td`,16)(1027,`div`,25)(1028,`span`,26),Sk(1029,`p-mask-format-model`),vu(1030,`br`),Kg()()(),Qc(1031,`td`,20)(1032,`code`,29),Sk(1033,`boolean`),Kg()(),Qc(1034,`td`,22)(1035,`p`)(1036,`code`),Sk(1037,`false`),Kg()()(),Qc(1038,`td`,23)(1039,`em`)(1040,`strong`),Sk(1041,`(opcional)`),Kg()(),Qc(1042,`p`),Sk(1043,`Indica se o `),Qc(1044,`code`),Sk(1045,`model`),Kg(),Sk(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),Kg()()(),Qc(1047,`tr`,59)(1048,`td`,16)(1049,`div`,25)(1050,`span`,26),Sk(1051,` p-mask-no-length-validation`),vu(1052,`br`),Kg()()(),Qc(1053,`td`,20)(1054,`code`,29),Sk(1055,`boolean`),Kg()(),Qc(1056,`td`,22)(1057,`p`)(1058,`code`),Sk(1059,`false`),Kg()()(),Qc(1060,`td`,23)(1061,`p`),Sk(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),Qc(1063,`code`),Sk(1064,`minLength`),Kg(),Sk(1065,`) e máximo (`),Qc(1066,`code`),Sk(1067,`maxLength`),Kg(),Sk(1068,`) quando há uma máscara (`),Qc(1069,`code`),Sk(1070,`p-mask`),Kg(),Sk(1071,`) definida.`),Kg(),Qc(1072,`ul`)(1073,`li`),Sk(1074,`Quando `),Qc(1075,`code`),Sk(1076,`true`),Kg(),Sk(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Kg(),Qc(1078,`li`),Sk(1079,`Quando `),Qc(1080,`code`),Sk(1081,`false`),Kg(),Sk(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Kg()(),Qc(1083,`blockquote`)(1084,`p`),Sk(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),Qc(1086,`code`),Sk(1087,`p-mask-format-model`),Kg(),Sk(1088,`.`),Kg()(),Qc(1089,`p`),Sk(1090,`Exemplo:`),Kg(),Qc(1091,`pre`)(1092,`code`),Sk(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),Kg()(),Qc(1094,`ul`)(1095,`li`),Sk(1096,`Entrada: `),Qc(1097,`code`),Sk(1098,`123-456`),Kg(),Sk(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Qc(1100,`code`),Sk(1101,`-`),Kg(),Sk(1102,`.`),Kg()()()(),Qc(1103,`tr`,60)(1104,`td`,16)(1105,`div`,25)(1106,`span`,26),Sk(1107,` p-max`),vu(1108,`br`),Kg()()(),Qc(1109,`td`,20)(1110,`code`,37),Sk(1111,`number`),Kg()(),Qc(1112,`td`,22),Sk(1113,`-`),Kg(),Qc(1114,`td`,23)(1115,`em`)(1116,`strong`),Sk(1117,`(opcional)`),Kg()(),Qc(1118,`p`),Sk(1119,`Valor máximo.`),Kg()()(),Qc(1120,`tr`,61)(1121,`td`,16)(1122,`div`,25)(1123,`span`,26),Sk(1124,` p-maxlength`),vu(1125,`br`),Kg()()(),Qc(1126,`td`,20)(1127,`code`,37),Sk(1128,`number`),Kg()(),Qc(1129,`td`,22),Sk(1130,`-`),Kg(),Qc(1131,`td`,23)(1132,`em`)(1133,`strong`),Sk(1134,`(opcional)`),Kg()(),Qc(1135,`p`),Sk(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),Kg()()(),Qc(1137,`tr`,62)(1138,`td`,16)(1139,`div`,25)(1140,`span`,26),Sk(1141,` p-min`),vu(1142,`br`),Kg()()(),Qc(1143,`td`,20)(1144,`code`,37),Sk(1145,`number`),Kg()(),Qc(1146,`td`,22),Sk(1147,`-`),Kg(),Qc(1148,`td`,23)(1149,`em`)(1150,`strong`),Sk(1151,`(opcional)`),Kg()(),Qc(1152,`p`),Sk(1153,`Valor mínimo.`),Kg()()(),Qc(1154,`tr`,63)(1155,`td`,16)(1156,`div`,25)(1157,`span`,26),Sk(1158,` p-minlength`),vu(1159,`br`),Kg()()(),Qc(1160,`td`,20)(1161,`code`,37),Sk(1162,`number`),Kg()(),Qc(1163,`td`,22),Sk(1164,`-`),Kg(),Qc(1165,`td`,23)(1166,`em`)(1167,`strong`),Sk(1168,`(opcional)`),Kg()(),Qc(1169,`p`),Sk(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),Kg()()(),Qc(1171,`tr`,64)(1172,`td`,16)(1173,`div`,25)(1174,`span`,26),Sk(1175,` name`),vu(1176,`br`),Kg()()(),Qc(1177,`td`,20)(1178,`code`,27),Sk(1179,`string`),Kg()(),Qc(1180,`td`,22),Sk(1181,`-`),Kg(),Qc(1182,`td`,23)(1183,`p`),Sk(1184,`Nome e identificador do campo.`),Kg()()(),Qc(1185,`tr`,65)(1186,`td`,16)(1187,`div`,25)(1188,`span`,26),Sk(1189,` p-no-autocomplete`),vu(1190,`br`),Kg()()(),Qc(1191,`td`,20)(1192,`code`,29),Sk(1193,`boolean`),Kg()(),Qc(1194,`td`,22)(1195,`p`)(1196,`code`),Sk(1197,`false`),Kg()()(),Qc(1198,`td`,23)(1199,`em`)(1200,`strong`),Sk(1201,`(opcional)`),Kg()(),Qc(1202,`p`),Sk(1203,`Define a propriedade nativa `),Qc(1204,`code`),Sk(1205,`autocomplete`),Kg(),Sk(1206,` do campo como `),Qc(1207,`code`),Sk(1208,`off`),Kg(),Sk(1209,`.`),Kg(),Qc(1210,`blockquote`)(1211,`p`),Sk(1212,`No componente `),Qc(1213,`code`),Sk(1214,`po-password`),Kg(),Sk(1215,` será definido como `),Qc(1216,`code`),Sk(1217,`new-password`),Kg(),Sk(1218,`.`),Kg()(),Qc(1219,`p`),Sk(1220,`Nos componentes `),Qc(1221,`code`),Sk(1222,`po-password`),Kg(),Sk(1223,` e `),Qc(1224,`code`),Sk(1225,`po-login`),Kg(),Sk(1226,` o valor padrão será `),Qc(1227,`code`),Sk(1228,`true`),Kg(),Sk(1229,`.`),Kg()()(),Qc(1230,`tr`,66)(1231,`td`,16)(1232,`div`,25)(1233,`span`,26),Sk(1234,` p-optional`),vu(1235,`br`),Kg()()(),Qc(1236,`td`,20)(1237,`code`,29),Sk(1238,`boolean`),Kg()(),Qc(1239,`td`,22)(1240,`p`)(1241,`code`),Sk(1242,`false`),Kg()()(),Qc(1243,`td`,23)(1244,`em`)(1245,`strong`),Sk(1246,`(opcional)`),Kg()(),Qc(1247,`p`),Sk(1248,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(1249,`blockquote`)(1250,`p`),Sk(1251,`Não será exibida a indicação se:`),Kg()(),Qc(1252,`ul`)(1253,`li`),Sk(1254,`O campo conter `),Qc(1255,`code`),Sk(1256,`p-required`),Kg(),Sk(1257,`;`),Kg(),Qc(1258,`li`),Sk(1259,`Não possuir `),Qc(1260,`code`),Sk(1261,`p-help`),Kg(),Sk(1262,` e/ou `),Qc(1263,`code`),Sk(1264,`p-label`),Kg(),Sk(1265,`.`),Kg()()()(),Qc(1266,`tr`,67)(1267,`td`,16)(1268,`div`,25)(1269,`span`,26),Sk(1270,`p-pattern`),vu(1271,`br`),Kg()()(),Qc(1272,`td`,20)(1273,`code`,27),Sk(1274,`string`),Kg()(),Qc(1275,`td`,22),Sk(1276,`-`),Kg(),Qc(1277,`td`,23)(1278,`em`)(1279,`strong`),Sk(1280,`(opcional)`),Kg()(),Qc(1281,`p`),Sk(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Qc(1283,`code`),Sk(1284,`(p-mask)`),Kg(),Sk(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),Kg()()(),Qc(1286,`tr`,68)(1287,`td`,16)(1288,`div`,25)(1289,`span`,26),Sk(1290,` p-placeholder`),vu(1291,`br`),Kg()()(),Qc(1292,`td`,20)(1293,`code`,27),Sk(1294,`string`),Kg()(),Qc(1295,`td`,22)(1296,`p`),Sk(1297,`''`),Kg()(),Qc(1298,`td`,23)(1299,`em`)(1300,`strong`),Sk(1301,`(opcional)`),Kg()(),Qc(1302,`p`),Sk(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Qc(1304,`tr`,69)(1305,`td`,16)(1306,`div`,25)(1307,`span`,26),Sk(1308,` p-helper`),vu(1309,`br`),Kg()()(),Qc(1310,`td`,20)(1311,`code`,70),Sk(1312,`PoHelperOptions `),Kg(),Qc(1313,`code`,27),Sk(1314,` string`),Kg()(),Qc(1315,`td`,22),Sk(1316,`-`),Kg(),Qc(1317,`td`,23)(1318,`em`)(1319,`strong`),Sk(1320,`(opcional)`),Kg()(),Qc(1321,`p`),Sk(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1323,`code`),Sk(1324,`p-label`),Kg(),Sk(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1326,`code`),Sk(1327,`p-label`),Kg(),Sk(1328,`.`),Kg(),Qc(1329,`blockquote`)(1330,`p`),Sk(1331,`Para mais informações acesse: `),Qc(1332,`a`,71),Sk(1333,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1334,`.`),Kg()(),Qc(1335,`blockquote`)(1336,`p`),Sk(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1338,`code`),Sk(1339,`p-additional-help-tooltip`),Kg(),Sk(1340,` e `),Qc(1341,`code`),Sk(1342,`p-additional-help`),Kg(),Sk(1343,`) será ignorado.`),Kg()()()(),Qc(1344,`tr`,72)(1345,`td`,16)(1346,`div`,25)(1347,`span`,26),Sk(1348,`p-readonly`),vu(1349,`br`),Kg()()(),Qc(1350,`td`,20)(1351,`code`,29),Sk(1352,`boolean`),Kg()(),Qc(1353,`td`,22),Sk(1354,`-`),Kg(),Qc(1355,`td`,23)(1356,`em`)(1357,`strong`),Sk(1358,`(opcional)`),Kg()(),Qc(1359,`p`),Sk(1360,`Indica que o campo será somente leitura.`),Kg()()(),Qc(1361,`tr`,73)(1362,`td`,16)(1363,`div`,25)(1364,`span`,26),Sk(1365,`p-required`),vu(1366,`br`),Kg()()(),Qc(1367,`td`,20)(1368,`code`,29),Sk(1369,`boolean`),Kg()(),Qc(1370,`td`,22)(1371,`p`)(1372,`code`),Sk(1373,`false`),Kg()()(),Qc(1374,`td`,23)(1375,`em`)(1376,`strong`),Sk(1377,`(opcional)`),Kg()(),Qc(1378,`p`),Sk(1379,`Define que o campo será obrigatório.`),Kg(),Qc(1380,`blockquote`)(1381,`p`),Sk(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),Qc(1383,`code`),Sk(1384,`(p-disabled)`),Kg(),Sk(1385,`.`),Kg()()()(),Qc(1386,`tr`,74)(1387,`td`,16)(1388,`div`,25)(1389,`span`,26),Sk(1390,` p-required-field-error-message`),vu(1391,`br`),Kg()()(),Qc(1392,`td`,20)(1393,`code`,29),Sk(1394,`boolean`),Kg()(),Qc(1395,`td`,22)(1396,`p`)(1397,`code`),Sk(1398,`false`),Kg()()(),Qc(1399,`td`,23)(1400,`em`)(1401,`strong`),Sk(1402,`(opcional)`),Kg()(),Qc(1403,`p`),Sk(1404,`Exibe a mensagem setada na propriedade `),Qc(1405,`code`),Sk(1406,`p-error-pattern`),Kg(),Sk(1407,` se o campo estiver vazio e for requerido.`),Kg(),Qc(1408,`blockquote`)(1409,`p`),Sk(1410,`Necessário que a propriedade `),Qc(1411,`code`),Sk(1412,`p-required`),Kg(),Sk(1413,` esteja habilitada.`),Kg()()()(),Qc(1414,`tr`,75)(1415,`td`,16)(1416,`div`,25)(1417,`span`,26),Sk(1418,` p-show-required`),vu(1419,`br`),Kg()()(),Qc(1420,`td`,20)(1421,`code`,29),Sk(1422,`boolean`),Kg()(),Qc(1423,`td`,22),Sk(1424,`-`),Kg(),Qc(1425,`td`,23)(1426,`p`),Sk(1427,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1428,`blockquote`)(1429,`p`),Sk(1430,`Não será exibida a indicação se:`),Kg()(),Qc(1431,`ul`)(1432,`li`),Sk(1433,`Não possuir `),Qc(1434,`code`),Sk(1435,`p-help`),Kg(),Sk(1436,` e/ou `),Qc(1437,`code`),Sk(1438,`p-label`),Kg(),Sk(1439,`.`),Kg()()()(),Qc(1440,`tr`,76)(1441,`td`,16)(1442,`div`,25)(1443,`span`,26),Sk(1444,` p-size`),vu(1445,`br`),Kg()()(),Qc(1446,`td`,20)(1447,`code`,27),Sk(1448,`string`),Kg()(),Qc(1449,`td`,22)(1450,`p`)(1451,`code`),Sk(1452,`medium`),Kg()()(),Qc(1453,`td`,23)(1454,`em`)(1455,`strong`),Sk(1456,`(opcional)`),Kg()(),Qc(1457,`p`),Sk(1458,`Define o tamanho do componente:`),Kg(),Qc(1459,`ul`)(1460,`li`)(1461,`code`),Sk(1462,`small`),Kg(),Sk(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1464,`li`)(1465,`code`),Sk(1466,`medium`),Kg(),Sk(1467,`: altura do input como 44px.`),Kg()(),Qc(1468,`blockquote`)(1469,`p`),Sk(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1471,`code`),Sk(1472,`medium`),Kg(),Sk(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1474,`a`,77),Sk(1475,`po-theme`),Kg(),Sk(1476,`.`),Kg()()()(),Qc(1477,`tr`,78)(1478,`td`,16)(1479,`div`,25)(1480,`span`,26),Sk(1481,` p-thousand-maxlength`),vu(1482,`br`),Kg()()(),Qc(1483,`td`,20)(1484,`code`,37),Sk(1485,`number`),Kg()(),Qc(1486,`td`,22)(1487,`p`)(1488,`code`),Sk(1489,`13`),Kg()()(),Qc(1490,`td`,23)(1491,`em`)(1492,`strong`),Sk(1493,`(opcional)`),Kg()(),Qc(1494,`p`),Sk(1495,`Quantidade máxima de dígitos antes do separador decimal.`),Kg(),Qc(1496,`blockquote`)(1497,`p`)(1498,`strong`),Sk(1499,`Importante:`),Kg()()(),Qc(1500,`ul`)(1501,`li`),Sk(1502,`O valor máximo permitido é 13;`),Kg(),Qc(1503,`li`),Sk(1504,`A soma total de `),Qc(1505,`code`),Sk(1506,`p-decimals-length`),Kg(),Sk(1507,` com `),Qc(1508,`code`),Sk(1509,`p-thousand-maxlength`),Kg(),Sk(1510,` limita-se à 16;`),Kg(),Qc(1511,`li`),Sk(1512,`Esta propriedade sobrepõe o valor definido em `),Qc(1513,`code`),Sk(1514,`p-decimals-length`),Kg(),Sk(1515,`.`),Kg(),Qc(1516,`li`),Sk(1517,`Quando utilizado com `),Qc(1518,`code`),Sk(1519,`p-display-format`),Kg(),Sk(1520,`, será respeitado o valor `),Qc(1521,`strong`),Sk(1522,`mais restritivo`),Kg(),Sk(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),Kg()()()(),Qc(1524,`tr`,79)(1525,`td`,16)(1526,`div`,25)(1527,`span`,26),Sk(1528,` p-upper-case`),vu(1529,`br`),Kg()()(),Qc(1530,`td`,20)(1531,`code`,29),Sk(1532,`boolean`),Kg()(),Qc(1533,`td`,22),Sk(1534,`-`),Kg(),Qc(1535,`td`,23)(1536,`p`),Sk(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),Kg()()()(),Qc(1538,`h3`,11),Sk(1539,`Métodos`),Kg(),Qc(1540,`table`,80)(1541,`tr`,81)(1542,`th`,82)(1543,`div`,25)(1544,`h4`)(1545,`span`,26),Sk(1546,` showAdditionalHelp `),Kg()()()()(),Qc(1547,`tr`,23)(1548,`td`,23)(1549,`p`),Sk(1550,`Método que exibe `),Qc(1551,`code`),Sk(1552,`p-helper`),Kg(),Sk(1553,` ou executa a ação definida em `),Qc(1554,`code`),Sk(1555,`p-helper{eventOnClick}`),Kg(),Sk(1556,` ou em `),Qc(1557,`code`),Sk(1558,`p-additionalHelp`),Kg(),Sk(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1560,`code`),Sk(1561,`p-keydown`),Kg(),Sk(1562,`.`),Kg(),Qc(1563,`blockquote`)(1564,`p`),Sk(1565,`Exibe ou oculta o conteúdo do componente `),Qc(1566,`code`),Sk(1567,`po-helper`),Kg(),Sk(1568,` quando o componente estiver com foco.`),Kg()(),Qc(1569,`pre`)(1570,`code`),Sk(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Kg()(),Qc(1572,`pre`)(1573,`code`),Sk(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1575,`br`),Qc(1576,`table`,83)(1577,`tr`,81)(1578,`th`,82)(1579,`div`,25)(1580,`h4`)(1581,`span`,26),Sk(1582,` focus `),Kg()()()()(),Qc(1583,`tr`,23)(1584,`td`,23)(1585,`p`),Sk(1586,`Função que atribui foco ao componente.`),Kg(),Qc(1587,`p`),Sk(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1589,`pre`)(1590,`code`),Sk(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),Kg()()()()(),vu(1592,`br`),Qc(1593,`h3`),Sk(1594,`Interfaces`),Kg(),Qc(1595,`h4`,84)(1596,`code`,5),Sk(1597,`ErrorAsyncProperties`),Kg()(),Qc(1598,`div`,2)(1599,`p`),Sk(1600,`Interface para realizar uma validação assíncrona no componente.`),Kg()(),Qc(1601,`h4`,11),Sk(1602,`Propriedades`),Kg(),Qc(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),Sk(1606,`Nome`),Kg(),Qc(1607,`th`,14),Sk(1608,`Tipo`),Kg(),Qc(1609,`th`,14),Sk(1610,`Descrição`),Kg()(),Qc(1611,`tr`,85)(1612,`td`,16)(1613,`div`,25)(1614,`span`,26),Sk(1615,` errorAsync`),vu(1616,`br`),Kg()()(),Qc(1617,`td`,20)(1618,`code`,86),Sk(1619,`(value) => Observable<boolean>`),Kg()(),Qc(1620,`td`,23)(1621,`p`),Sk(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Qc(1623,`code`),Sk(1624,`change`),Kg(),Sk(1625,` ou `),Qc(1626,`code`),Sk(1627,`change-model`),Kg(),Sk(1628,`, dependendo do valor da propriedade `),Qc(1629,`code`),Sk(1630,`triggerMode`),Kg(),Sk(1631,`.`),Kg()()(),Qc(1632,`tr`,87)(1633,`td`,16)(1634,`div`,25)(1635,`span`,26),Sk(1636,` triggerMode`),vu(1637,`br`),Kg()()(),Qc(1638,`td`,20)(1639,`code`,88),Sk(1640,`'change' `),Kg(),Qc(1641,`code`,89),Sk(1642,` 'changeModel'`),Kg()(),Qc(1643,`td`,23)(1644,`em`)(1645,`strong`),Sk(1646,`(opcional)`),Kg()(),Qc(1647,`p`),Sk(1648,`Controla se o método será executado no disparo do output `),Qc(1649,`code`),Sk(1650,`change`),Kg(),Sk(1651,` ou `),Qc(1652,`code`),Sk(1653,`change-model`),Kg(),Sk(1654,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ne(a,Ie){if(a&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-decimal-basic-view`)(2,`sample-po-decimal-labs-view`)(3,`sample-po-decimal-hourly-wage-view`)(4,`sample-po-decimal-hourly-wage-reactive-form-view`)(5,`sample-po-decimal-display-format-view`),Kg()}if(a&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Decimal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ne,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-decimal-doc`),Kg()()()),r&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,Ee,Se,xe,ye,ve],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Re),GV]})}return a})();var kt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,we]})}return a})();export{kt as DocPoDecimalModule};