import{$n as Ak,A as Hoe,Ai as XL,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mn as uoe,Mr as Jc,Ni as Y0,Pr as Jm,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,ba as o1,di as RZ,ea as ge$1,er as An,fa as kZ,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var ce=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&_u(0,`po-decimal`,0)},dependencies:[uoe],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Decimal Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-decimal-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,we,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`po-decimal`,1),W0(),vt(`ngModelChange`,function(l){return i.decimal=l})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.label,l)||(i.label=l),H_(l)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.help,l)||(i.help=l),H_(l)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.helperText,l)||(i.helperText=l),H_(l)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.placeholder,l)||(i.placeholder=l),H_(l)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.errorPattern,l)||(i.errorPattern=l),H_(l)}),Zg(),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.displayFormat,l)||(i.displayFormat=l),H_(l)}),Zg(),Jc(14,`po-select`,11),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.icon,l)||(i.icon=l),H_(l)}),Zg(),Jc(15,`po-number`,12),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.min,l)||(i.min=l),H_(l)}),Zg(),Jc(16,`po-number`,13),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.max,l)||(i.max=l),H_(l)}),Zg(),Jc(17,`po-select`,14),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.locale,l)||(i.locale=l),H_(l)}),Zg(),Jc(18,`po-number`,15),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.decimalsLength,l)||(i.decimalsLength=l),H_(l)}),Zg(),Jc(19,`po-number`,16),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.thousandMaxlength,l)||(i.thousandMaxlength=l),H_(l)}),Zg(),Jc(20,`po-checkbox-group`,17),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.properties,l)||(i.properties=l),H_(l)}),Zg(),Jc(21,`po-radio-group`,18),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.size,l)||(i.size=l),H_(l)}),Zg(),Jc(22,`div`,2)(23,`po-button`,19),vt(`p-click`,function(){return i.restore()}),Zg()()()}r&2&&(Rb(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),Y0(),Ig(3),Rb(`p-value`,i.decimal),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.placeholder),Y0(),Ig(),Yb(`ngModel`,i.errorPattern),Y0(),Ig(),Yb(`ngModel`,i.displayFormat),Y0(),Ig(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconOptions),Y0(),Ig(),Yb(`ngModel`,i.min),Y0(),Ig(),Yb(`ngModel`,i.max),Y0(),Ig(),Yb(`ngModel`,i.locale),Rb(`p-options`,i.localeOptions),Y0(),Ig(),Yb(`ngModel`,i.decimalsLength),Rb(`p-max`,i.maxDecimalsLength),Y0(),Ig(),Yb(`ngModel`,i.thousandMaxlength),Rb(`p-max`,i.maxThousandMaxlength),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-columns`,4)(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,uoe,U4,Hoe,Gte,Woe,Yoe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Decimal Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-decimal
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-decimal-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ge],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=ZO();Jc(0,`form`,null,0)(2,`div`,1),Tk(3,`Calculate hourly wage`),Zg(),_u(4,`po-divider`),Jc(5,`div`,2)(6,`po-number`,3),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.weekHours,l)||(i.weekHours=l),H_(l)}),Zg(),Jc(7,`po-number`,4),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.workingDaysPerWeek,l)||(i.workingDaysPerWeek=l),H_(l)}),Zg()(),Jc(8,`div`,2)(9,`po-number`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.quantityDaysPerMonth,l)||(i.quantityDaysPerMonth=l),H_(l)}),Zg(),Jc(10,`po-decimal`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.salary,l)||(i.salary=l),H_(l)}),vt(`p-change`,function(){return i.calculate()}),Zg()(),Jc(11,`div`,2)(12,`po-decimal`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(i.hourlyWage,l)||(i.hourlyWage=l),H_(l)}),Zg()(),Jc(13,`div`,2)(14,`po-button`,8),vt(`p-click`,function(){U_(s);let l=sk(1);return H_(l.reset())}),Zg(),Jc(15,`po-button`,9),vt(`p-click`,function(){return i.calculate()}),Zg()()()}r&2&&(Ig(6),Yb(`ngModel`,i.weekHours),Y0(),Ig(),Yb(`ngModel`,i.workingDaysPerWeek),Y0(),Ig(2),Yb(`ngModel`,i.quantityDaysPerMonth),Y0(),Ig(),Yb(`ngModel`,i.salary),Y0(),Ig(2),Yb(`ngModel`,i.hourlyWage),Y0(),Ig(3),Rb(`p-disabled`,!i.hourlyWage))},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,uoe,Hoe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Decimal - Hourly Wage`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #f="ngForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-decimal-hourly-wage`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,We,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{formBuilder=p(kZ);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,Jm.required],salary:[null,Jm.required],weekHours:[null,Jm.required],workingDaysPerWeek:[null,Jm.required]})}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:s}=this.formCalculateHourlyWage.value,l=s/(d/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:l})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Jc(0,`form`,0)(1,`div`,1),Tk(2,`Calculate hourly wage`),Zg(),_u(3,`po-divider`),Jc(4,`div`,2)(5,`po-number`,3),W0(),Zg(),Jc(6,`po-number`,4),W0(),Zg()(),Jc(7,`div`,2)(8,`po-number`,5),W0(),Zg(),Jc(9,`po-decimal`,6),W0(),vt(`p-change`,function(){return i.calculate()}),Zg()(),Jc(10,`div`,2)(11,`po-decimal`,7),W0(),Zg()(),Jc(12,`div`,2)(13,`po-button`,8),vt(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),Zg(),Jc(14,`po-button`,9),vt(`p-click`,function(){return i.calculate()}),Zg()()()),r&2&&(Rb(`formGroup`,i.formCalculateHourlyWage),Ig(5),Y0(),Ig(),Y0(),Ig(2),Y0(),Ig(),Y0(),Ig(2),Y0(),Ig(3),Rb(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[NZ,TZ,RZ,XL,o1,oi,Lf,uoe,Hoe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Decimal - Hourly Wage Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-decimal-hourly-wage-reactive-form`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,He,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let d=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=d,this.taxValue=d*((this.tax??0)/100),this.totalOrder=d+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(Jc(0,`div`,0),Tk(1,`Order Simulation`),Zg(),_u(2,`po-divider`),Jc(3,`div`,1)(4,`po-decimal`,2),W0(),vt(`ngModelChange`,function(p){return i.price=p}),Zg(),Jc(5,`po-decimal`,3),W0(),vt(`ngModelChange`,function(p){return i.quantity=p}),Zg(),Jc(6,`po-decimal`,4),W0(),vt(`ngModelChange`,function(p){return i.discount=p}),Zg()(),Jc(7,`div`,1)(8,`po-decimal`,5),W0(),vt(`ngModelChange`,function(p){return i.tax=p}),Zg(),Jc(9,`po-decimal`,6),W0(),vt(`ngModelChange`,function(p){return i.shipping=p}),Zg(),Jc(10,`div`,7)(11,`po-button`,8),vt(`p-click`,function(){return i.calculate()}),Zg()()(),_u(12,`po-divider`),Jc(13,`div`,1)(14,`po-decimal`,9),W0(),vt(`ngModelChange`,function(p){return i.subtotal=p}),Zg(),Jc(15,`po-decimal`,10),W0(),vt(`ngModelChange`,function(p){return i.taxValue=p}),Zg(),Jc(16,`po-decimal`,11),W0(),vt(`ngModelChange`,function(p){return i.totalOrder=p}),Zg()()),r&2&&(Ig(4),Rb(`ngModel`,i.price),Y0(),Ig(),Rb(`p-decimals-length`,0)(`ngModel`,i.quantity),Y0(),Ig(),Rb(`ngModel`,i.discount),Y0(),Ig(2),Rb(`p-decimals-length`,3)(`ngModel`,i.tax),Y0(),Ig(),Rb(`p-optional`,!0)(`ngModel`,i.shipping),Y0(),Ig(5),Rb(`p-readonly`,!0)(`ngModel`,i.subtotal),Y0(),Ig(),Rb(`p-readonly`,!0)(`ngModel`,i.taxValue),Y0(),Ig(),Rb(`p-readonly`,!0)(`ngModel`,i.totalOrder),Y0())},dependencies:[TZ,JL,oi,Lf,uoe],encapsulation:2})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Decimal - Display Format`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-title">Order Simulation</div>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-decimal-display-format`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ze,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,fe],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoDecimalComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),Zg(),Jc(24,`p`),Tk(25,`Importante:`),Zg(),Jc(26,`ul`)(27,`li`),Tk(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),Zg()(),Jc(29,`h4`),Tk(30,`Tokens customizáveis`),Zg(),Jc(31,`p`),Tk(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(33,`br`),Tk(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(35,`code`),Tk(36,`.po-input`),Zg()(),Jc(37,`blockquote`)(38,`p`),Tk(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Jc(40,`a`,6),Tk(41,`Grid System`),Zg(),Tk(42,`.`),Zg()(),Jc(43,`blockquote`)(44,`p`),Tk(45,`Para maiores informações, acesse o guia `),Jc(46,`a`,7),Tk(47,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(48,`.`),Zg()(),Jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),Tk(53,`Propriedade`),Zg(),Jc(54,`th`),Tk(55,`Descrição`),Zg(),Jc(56,`th`),Tk(57,`Valor Padrão`),Zg()()(),Jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),Tk(62,`Default Values`),Zg()(),_u(63,`td`)(64,`td`),Zg(),Jc(65,`tr`)(66,`td`)(67,`code`),Tk(68,`--font-family`),Zg()(),Jc(69,`td`),Tk(70,`Família tipográfica usada`),Zg(),Jc(71,`td`)(72,`code`),Tk(73,`var(--font-family-theme)`),Zg()()(),Jc(74,`tr`)(75,`td`)(76,`code`),Tk(77,`--font-size`),Zg()(),Jc(78,`td`),Tk(79,`Tamanho da fonte`),Zg(),Jc(80,`td`)(81,`code`),Tk(82,`var(--font-size-default)`),Zg()()(),Jc(83,`tr`)(84,`td`)(85,`code`),Tk(86,`--text-color-placeholder`),Zg()(),Jc(87,`td`),Tk(88,`Cor do texto placeholder`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--color-neutral-light-30)`),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--color`),Zg()(),Jc(96,`td`),Tk(97,`Cor pincipal do input`),Zg(),Jc(98,`td`)(99,`code`),Tk(100,`var(--color-neutral-dark-70)`),Zg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--background`),Zg()(),Jc(105,`td`),Tk(106,`Cor de background`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--color-neutral-light-05)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Tk(113,`--padding`),Zg()(),Jc(114,`td`),Tk(115,`Preenchimento`),Zg(),Jc(116,`td`)(117,`code`),Tk(118,`0 0.5rem`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Tk(122,`--text-color`),Zg()(),Jc(123,`td`),Tk(124,`Cor do texto`),Zg(),Jc(125,`td`)(126,`code`),Tk(127,`var(--color-neutral-dark-90)`),Zg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Tk(131,`--field-container-title-justify`),Zg()(),Jc(132,`td`),Tk(133,`Alinhamento horizontal do título (`),Jc(134,`code`),Tk(135,`justify-content`),Zg(),Tk(136,`)`),Zg(),Jc(137,`td`)(138,`code`),Tk(139,`space-between`),Zg()()(),Jc(140,`tr`)(141,`td`)(142,`code`),Tk(143,`--field-container-title-flex`),Zg()(),Jc(144,`td`),Tk(145,`Flex do título (`),Jc(146,`code`),Tk(147,`flex`),Zg(),Tk(148,`)`),Zg(),Jc(149,`td`)(150,`code`),Tk(151,`1 auto`),Zg()()(),Jc(152,`tr`)(153,`td`)(154,`strong`),Tk(155,`Hover`),Zg()(),_u(156,`td`)(157,`td`),Zg(),Jc(158,`tr`)(159,`td`)(160,`code`),Tk(161,`--color-hover`),Zg()(),Jc(162,`td`),Tk(163,`Cor principal no estado hover`),Zg(),Jc(164,`td`)(165,`code`),Tk(166,`var(--color-brand-01-dark)`),Zg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Tk(170,`--background-hover`),Zg()(),Jc(171,`td`),Tk(172,`Cor de background no estado hover`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`var(--color-brand-01-lightest)`),Zg()()(),Jc(176,`tr`)(177,`td`)(178,`strong`),Tk(179,`Focused`),Zg()(),_u(180,`td`)(181,`td`),Zg(),Jc(182,`tr`)(183,`td`)(184,`code`),Tk(185,`--color-focused`),Zg()(),Jc(186,`td`),Tk(187,`Cor principal no estado de focus`),Zg(),Jc(188,`td`)(189,`code`),Tk(190,`var(--color-action-default)`),Zg()()(),Jc(191,`tr`)(192,`td`)(193,`code`),Tk(194,`--outline-color-focused`),Zg()(),Jc(195,`td`),Tk(196,`Cor do outline do estado de focus`),Zg(),Jc(197,`td`)(198,`code`),Tk(199,`var(--color-action-focus)`),Zg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Tk(203,`Disabled`),Zg()(),_u(204,`td`)(205,`td`),Zg(),Jc(206,`tr`)(207,`td`)(208,`code`),Tk(209,`--color-disabled`),Zg()(),Jc(210,`td`),Tk(211,`Cor principal no estado disabled`),Zg(),Jc(212,`td`)(213,`code`),Tk(214,`var(--color-neutral-light-30)`),Zg()()(),Jc(215,`tr`)(216,`td`)(217,`code`),Tk(218,`--background-disabled`),Zg()(),Jc(219,`td`),Tk(220,`Cor de background no estado disabled`),Zg(),Jc(221,`td`)(222,`code`),Tk(223,`var(--color-neutral-light-20)`),Zg()()(),Jc(224,`tr`)(225,`td`)(226,`code`),Tk(227,`--text-color-disabled`),Zg()(),Jc(228,`td`),Tk(229,`Cor do texto no estado disabled`),Zg(),Jc(230,`td`)(231,`code`),Tk(232,`var(--color-neutral-dark-70)`),Zg()()()()(),Jc(233,`p`),_u(234,`br`),Tk(235,` - O `),Jc(236,`code`),Tk(237,`po-decimal`),Zg(),Tk(238,` é um `),Jc(239,`em`),Tk(240,`input`),Zg(),Tk(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),Zg(),Jc(242,`ul`)(243,`li`),Tk(244,`Aceita apenas números;`),Zg(),Jc(245,`li`),Tk(246,`Utiliza ',' como separador de decimal;`),Zg(),Jc(247,`li`),Tk(248,`Utiliza '.' para separação de milhar;`),Zg(),Jc(249,`li`),Tk(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),Zg()(),Jc(251,`blockquote`)(252,`p`)(253,`strong`),Tk(254,`Importante:`),Zg(),Tk(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Jc(256,`code`),Tk(257,`32 bits`),Zg(),Tk(258,`, e para que os valores comportem-se devidamente,
o `),Jc(259,`code`),Tk(260,`po-decimal`),Zg(),Tk(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Jc(262,`code`),Tk(263,`p-decimals-length`),Zg(),Tk(264,` e `),Jc(265,`code`),Tk(266,`p-thousand-maxlength`),Zg(),Tk(267,`.`),Zg()()(),Jc(268,`div`,8)(269,`h4`,9),Tk(270,`Seletor`),Zg(),Jc(271,`pre`,10),Tk(272,`<po-decimal
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
`),Zg()(),Jc(273,`h4`,11),Tk(274,`Propriedades`),Zg(),Jc(275,`table`,12)(276,`tr`,13)(277,`th`,14),Tk(278,`Nome`),Zg(),Jc(279,`th`,14),Tk(280,`Tipo`),Zg(),Jc(281,`th`,14),Tk(282,`Padrão`),Zg(),Jc(283,`th`,14),Tk(284,`Descrição`),Zg()(),Jc(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),Tk(289,` (p-additional-help)`),_u(290,`br`),Zg()(),Jc(291,`div`,19),Tk(292,`Deprecated`),Zg()(),Jc(293,`td`,20)(294,`code`,21),Tk(295,`EventEmitter`),Zg()(),Jc(296,`td`,22),Tk(297,`-`),Zg(),Jc(298,`td`,23)(299,`em`)(300,`strong`),Tk(301,`(opcional)`),Zg()(),Jc(302,`p`),Tk(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(304,`blockquote`)(305,`p`),Tk(306,`Essa propriedade está `),Jc(307,`strong`),Tk(308,`depreciada`),Zg(),Tk(309,` e será removida na versão `),Jc(310,`code`),Tk(311,`23.x.x`),Zg(),Tk(312,`. Recomendamos utilizar a propriedade `),Jc(313,`code`),Tk(314,`p-helper`),Zg(),Tk(315,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(316,`tr`,15)(317,`td`,16)(318,`div`,24)(319,`span`,25),Tk(320,` p-additional-help-tooltip`),_u(321,`br`),Zg()(),Jc(322,`div`,19),Tk(323,`Deprecated`),Zg()(),Jc(324,`td`,20)(325,`code`,26),Tk(326,`string`),Zg()(),Jc(327,`td`,22),Tk(328,`-`),Zg(),Jc(329,`td`,23)(330,`em`)(331,`strong`),Tk(332,`(opcional)`),Zg()(),Jc(333,`p`),Tk(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(335,`code`),Tk(336,`po-helper`),Zg(),Tk(337,`.
`),Jc(338,`strong`),Tk(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(340,`blockquote`)(341,`p`),Tk(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(343,`blockquote`)(344,`p`),Tk(345,`Essa propriedade está `),Jc(346,`strong`),Tk(347,`depreciada`),Zg(),Tk(348,` e será removida na versão `),Jc(349,`code`),Tk(350,`23.x.x`),Zg(),Tk(351,`. Recomendamos utilizar a propriedade `),Jc(352,`code`),Tk(353,`p-helper`),Zg(),Tk(354,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(355,`tr`,15)(356,`td`,16)(357,`div`,24)(358,`span`,25),Tk(359,` p-append-in-body`),_u(360,`br`),Zg()()(),Jc(361,`td`,20)(362,`code`,27),Tk(363,`boolean`),Zg()(),Jc(364,`td`,22)(365,`p`)(366,`code`),Tk(367,`false`),Zg()()(),Jc(368,`td`,23)(369,`em`)(370,`strong`),Tk(371,`(opcional)`),Zg()(),Jc(372,`p`),Tk(373,`Define que o popover (`),Jc(374,`code`),Tk(375,`p-helper`),Zg(),Tk(376,` e/ou `),Jc(377,`code`),Tk(378,`p-error-limit`),Zg(),Tk(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(380,`blockquote`)(381,`p`),Tk(382,`Quando utilizado com `),Jc(383,`code`),Tk(384,`p-helper`),Zg(),Tk(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(386,`tr`,15)(387,`td`,16)(388,`div`,24)(389,`span`,25),Tk(390,` p-auto-focus`),_u(391,`br`),Zg()()(),Jc(392,`td`,20)(393,`code`,27),Tk(394,`boolean`),Zg()(),Jc(395,`td`,22)(396,`p`)(397,`code`),Tk(398,`false`),Zg()()(),Jc(399,`td`,23)(400,`em`)(401,`strong`),Tk(402,`(opcional)`),Zg()(),Jc(403,`p`),Tk(404,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(405,`blockquote`)(406,`p`),Tk(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),Tk(412,` (p-blur)`),_u(413,`br`),Zg()()(),Jc(414,`td`,20)(415,`code`,21),Tk(416,`EventEmitter`),Zg()(),Jc(417,`td`,22),Tk(418,`-`),Zg(),Jc(419,`td`,23)(420,`em`)(421,`strong`),Tk(422,`(opcional)`),Zg()(),Jc(423,`p`),Tk(424,`Evento disparado ao sair do campo.`),Zg()()(),Jc(425,`tr`,15)(426,`td`,16)(427,`div`,17)(428,`span`,18),Tk(429,` (p-change)`),_u(430,`br`),Zg()()(),Jc(431,`td`,20)(432,`code`,21),Tk(433,`EventEmitter`),Zg()(),Jc(434,`td`,22),Tk(435,`-`),Zg(),Jc(436,`td`,23)(437,`em`)(438,`strong`),Tk(439,`(opcional)`),Zg()(),Jc(440,`p`),Tk(441,`Evento disparado ao alterar valor e deixar o campo.`),Zg()()(),Jc(442,`tr`,15)(443,`td`,16)(444,`div`,17)(445,`span`,18),Tk(446,` (p-change-model)`),_u(447,`br`),Zg()()(),Jc(448,`td`,20)(449,`code`,21),Tk(450,`EventEmitter`),Zg()(),Jc(451,`td`,22),Tk(452,`-`),Zg(),Jc(453,`td`,23)(454,`em`)(455,`strong`),Tk(456,`(opcional)`),Zg()(),Jc(457,`p`),Tk(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(459,`code`),Tk(460,`setValue`),Zg(),Tk(461,`, `),Jc(462,`code`),Tk(463,`patchValue`),Zg(),Tk(464,`, carregamento assíncrono).`),Zg(),Jc(465,`p`),Tk(466,`Diferentemente do `),Jc(467,`code`),Tk(468,`p-change`),Zg(),Tk(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(470,`code`),Tk(471,`p-change-model`),Zg(),Tk(472,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(473,`p`),Tk(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(475,`tr`,15)(476,`td`,16)(477,`div`,24)(478,`span`,25),Tk(479,`p-clean`),_u(480,`br`),Zg()()(),Jc(481,`td`,20)(482,`code`,27),Tk(483,`boolean`),Zg()(),Jc(484,`td`,22),Tk(485,`-`),Zg(),Jc(486,`td`,23)(487,`em`)(488,`strong`),Tk(489,`(opcional)`),Zg()(),Jc(490,`p`),Tk(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Zg()()(),Jc(492,`tr`,15)(493,`td`,16)(494,`div`,24)(495,`span`,25),Tk(496,` p-compact-label`),_u(497,`br`),Zg()()(),Jc(498,`td`,20)(499,`code`,27),Tk(500,`boolean`),Zg()(),Jc(501,`td`,22)(502,`p`)(503,`code`),Tk(504,`false`),Zg()()(),Jc(505,`td`,23)(506,`em`)(507,`strong`),Tk(508,`(opcional)`),Zg()(),Jc(509,`p`),Tk(510,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(511,`p`),Tk(512,`Quando habilitado (`),Jc(513,`code`),Tk(514,`true`),Zg(),Tk(515,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(516,`ul`)(517,`li`)(518,`code`),Tk(519,`po-label`),Zg()(),Jc(520,`li`)(521,`code`),Tk(522,`p-requirement (showRequired)`),Zg()(),Jc(523,`li`)(524,`code`),Tk(525,`po-helper`),Zg()()(),Jc(526,`p`),Tk(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(528,`p`),Tk(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(530,`ul`)(531,`li`)(532,`code`),Tk(533,`--field-container-title-justify`),Zg()(),Jc(534,`li`)(535,`code`),Tk(536,`--field-container-title-flex`),Zg()()(),Jc(537,`p`),Tk(538,`Exemplo:`),Zg(),Jc(539,`pre`)(540,`code`),Tk(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(542,`p`),Tk(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(544,`tr`,15)(545,`td`,16)(546,`div`,24)(547,`span`,25),Tk(548,` p-decimals-length`),_u(549,`br`),Zg()()(),Jc(550,`td`,20)(551,`code`,28),Tk(552,`number`),Zg()(),Jc(553,`td`,22)(554,`p`)(555,`code`),Tk(556,`2`),Zg()()(),Jc(557,`td`,23)(558,`em`)(559,`strong`),Tk(560,`(opcional)`),Zg()(),Jc(561,`p`),Tk(562,`Quantidade máxima de casas decimais.`),Zg(),Jc(563,`blockquote`)(564,`p`)(565,`strong`),Tk(566,`Importante:`),Zg()()(),Jc(567,`ul`)(568,`li`),Tk(569,`O valor máximo permitido é 15;`),Zg(),Jc(570,`li`),Tk(571,`A soma total de `),Jc(572,`code`),Tk(573,`p-decimals-length`),Zg(),Tk(574,` com `),Jc(575,`code`),Tk(576,`p-thousand-maxlength`),Zg(),Tk(577,` limita-se à 16;`),Zg(),Jc(578,`li`),Tk(579,`Esta propriedade sobrepõe apenas o valor `),Jc(580,`strong`),Tk(581,`padrão`),Zg(),Tk(582,` de `),Jc(583,`code`),Tk(584,`p-thousand-maxlength`),Zg(),Tk(585,`;`),Zg(),Jc(586,`li`),Tk(587,`Caso `),Jc(588,`code`),Tk(589,`p-thousand-maxlength`),Zg(),Tk(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),Zg(),Jc(591,`li`),Tk(592,`Quando utilizado com `),Jc(593,`code`),Tk(594,`p-display-format`),Zg(),Tk(595,`, será respeitado o valor `),Jc(596,`strong`),Tk(597,`mais restritivo`),Zg(),Tk(598,` entre esta propriedade e o número de casas decimais definido no formato.`),Zg()()()(),Jc(599,`tr`,15)(600,`td`,16)(601,`div`,24)(602,`span`,25),Tk(603,`p-disabled`),_u(604,`br`),Zg()()(),Jc(605,`td`,20)(606,`code`,27),Tk(607,`boolean`),Zg()(),Jc(608,`td`,22)(609,`p`)(610,`code`),Tk(611,`false`),Zg()()(),Jc(612,`td`,23)(613,`em`)(614,`strong`),Tk(615,`(opcional)`),Zg()(),Jc(616,`p`),Tk(617,`Se verdadeiro, desabilita o campo.`),Zg()()(),Jc(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),Tk(622,` p-display-format`),_u(623,`br`),Zg()()(),Jc(624,`td`,20)(625,`code`,26),Tk(626,`string `),Zg(),Jc(627,`code`,29),Tk(628,` undefined`),Zg()(),Jc(629,`td`,22),Tk(630,`-`),Zg(),Jc(631,`td`,23)(632,`em`)(633,`strong`),Tk(634,`(opcional)`),Zg()(),Jc(635,`p`),Tk(636,`Define uma máscara de formatação numérica avançada para o campo.`),Zg(),Jc(637,`p`),Tk(638,`Simbologia suportada:`),Zg(),Jc(639,`ul`)(640,`li`)(641,`code`),Tk(642,`9`),Zg(),Tk(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Zg(),Jc(644,`li`)(645,`code`),Tk(646,`>`),Zg(),Tk(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),Zg(),Jc(648,`li`)(649,`code`),Tk(650,`<`),Zg(),Tk(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Zg(),Jc(652,`li`)(653,`code`),Tk(654,`,`),Zg(),Tk(655,` e `),Jc(656,`code`),Tk(657,`.`),Zg(),Tk(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),Jc(659,`code`),Tk(660,`p-locale`),Zg(),Tk(661,`);`),Zg(),Jc(662,`li`)(663,`code`),Tk(664,`-`),Zg(),Tk(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Zg()(),Jc(666,`blockquote`)(667,`p`)(668,`strong`),Tk(669,`Importante:`),Zg()()(),Jc(670,`ul`)(671,`li`),Tk(672,`A formatação via `),Jc(673,`code`),Tk(674,`p-display-format`),Zg(),Tk(675,` é apenas visual; o valor do model é sempre o número puro.`),Zg(),Jc(676,`li`),Tk(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),Jc(678,`code`),Tk(679,`-`),Zg(),Tk(680,`), o campo exibe com a formatação padrão do `),Jc(681,`code`),Tk(682,`po-decimal`),Zg(),Tk(683,` (separadores de milhar + `),Jc(684,`code`),Tk(685,`p-decimals-length`),Zg(),Tk(686,` casas decimais).`),Zg(),Jc(687,`li`),Tk(688,`Quando `),Jc(689,`code`),Tk(690,`p-decimals-length`),Zg(),Tk(691,` ou `),Jc(692,`code`),Tk(693,`p-thousand-maxlength`),Zg(),Tk(694,` são definidos, será respeitado o valor `),Jc(695,`strong`),Tk(696,`mais restritivo`),Zg(),Tk(697,` entre o formato e a propriedade.`),Zg(),Jc(698,`li`),Tk(699,`Incompatível com `),Jc(700,`code`),Tk(701,`p-mask`),Zg(),Tk(702,`, `),Jc(703,`code`),Tk(704,`p-mask-format-model`),Zg(),Tk(705,`, `),Jc(706,`code`),Tk(707,`p-mask-no-length-validation`),Zg(),Tk(708,` e `),Jc(709,`code`),Tk(710,`p-pattern`),Zg(),Tk(711,`.`),Zg()(),Jc(712,`p`),Tk(713,`Exemplos de formato: `),Jc(714,`code`),Tk(715,`>>>,>>>,>>9.99`),Zg(),Tk(716,`, `),Jc(717,`code`),Tk(718,`->>,>>9.99`),Zg(),Tk(719,`, `),Jc(720,`code`),Tk(721,`999.9`),Zg(),Tk(722,`, `),Jc(723,`code`),Tk(724,`>>>,>>9.9<<<<<<`),Zg()()()(),Jc(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),Tk(729,` p-emit-all-changes`),_u(730,`br`),Zg()()(),Jc(731,`td`,20)(732,`code`,27),Tk(733,`boolean`),Zg()(),Jc(734,`td`,22)(735,`p`)(736,`code`),Tk(737,`false`),Zg()()(),Jc(738,`td`,23)(739,`em`)(740,`strong`),Tk(741,`(opcional)`),Zg()(),Jc(742,`p`),Tk(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),Zg()()(),Jc(744,`tr`,15)(745,`td`,16)(746,`div`,17)(747,`span`,18),Tk(748,` (p-enter)`),_u(749,`br`),Zg()()(),Jc(750,`td`,20)(751,`code`,21),Tk(752,`EventEmitter`),Zg()(),Jc(753,`td`,22),Tk(754,`-`),Zg(),Jc(755,`td`,23)(756,`em`)(757,`strong`),Tk(758,`(opcional)`),Zg()(),Jc(759,`p`),Tk(760,`Evento disparado ao entrar do campo.`),Zg()()(),Jc(761,`tr`,15)(762,`td`,16)(763,`div`,24)(764,`span`,25),Tk(765,` p-error-async-properties`),_u(766,`br`),Zg()()(),Jc(767,`td`,20)(768,`code`,30),Tk(769,`ErrorAsyncProperties`),Zg()(),Jc(770,`td`,22),Tk(771,`-`),Zg(),Jc(772,`td`,23)(773,`em`)(774,`strong`),Tk(775,`(opcional)`),Zg()(),Jc(776,`p`),Tk(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Jc(778,`code`),Tk(779,`Reactive Forms`),Zg(),Tk(780,`. Em formulários reativos, pode-se utilizar o próprio `),Jc(781,`code`),Tk(782,`asyncValidators`),Zg(),Tk(783,`.`),Zg()()(),Jc(784,`tr`,15)(785,`td`,16)(786,`div`,24)(787,`span`,25),Tk(788,` p-error-limit`),_u(789,`br`),Zg()()(),Jc(790,`td`,20)(791,`code`,27),Tk(792,`boolean`),Zg()(),Jc(793,`td`,22)(794,`p`)(795,`code`),Tk(796,`false`),Zg()()(),Jc(797,`td`,23)(798,`em`)(799,`strong`),Tk(800,`(opcional)`),Zg()(),Jc(801,`p`),Tk(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(803,`blockquote`)(804,`p`),Tk(805,`Caso essa propriedade seja definida como `),Jc(806,`code`),Tk(807,`true`),Zg(),Tk(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(809,`tr`,15)(810,`td`,16)(811,`div`,24)(812,`span`,25),Tk(813,` p-error-pattern`),_u(814,`br`),Zg()()(),Jc(815,`td`,20)(816,`code`,26),Tk(817,`string`),Zg()(),Jc(818,`td`,22),Tk(819,`-`),Zg(),Jc(820,`td`,23)(821,`em`)(822,`strong`),Tk(823,`(opcional)`),Zg()(),Jc(824,`p`),Tk(825,`Mensagem que será apresentada quando o `),Jc(826,`code`),Tk(827,`pattern`),Zg(),Tk(828,` ou a máscara não for satisfeita.`),Zg(),Jc(829,`blockquote`)(830,`p`),Tk(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Jc(832,`code`),Tk(833,`p-required-field-error-message`),Zg(),Tk(834,` em conjunto.`),Zg()()()(),Jc(835,`tr`,15)(836,`td`,16)(837,`div`,24)(838,`span`,25),Tk(839,` p-help`),_u(840,`br`),Zg()()(),Jc(841,`td`,20)(842,`code`,26),Tk(843,`string`),Zg()(),Jc(844,`td`,22),Tk(845,`-`),Zg(),Jc(846,`td`,23)(847,`em`)(848,`strong`),Tk(849,`(opcional)`),Zg()(),Jc(850,`p`),Tk(851,`Texto de apoio do campo.`),Zg()()(),Jc(852,`tr`,15)(853,`td`,16)(854,`div`,24)(855,`span`,25),Tk(856,` p-icon`),_u(857,`br`),Zg()()(),Jc(858,`td`,20)(859,`code`,26),Tk(860,`string `),Zg(),Jc(861,`code`,31),Tk(862,` TemplateRef<void>`),Zg()(),Jc(863,`td`,22),Tk(864,`-`),Zg(),Jc(865,`td`,23)(866,`em`)(867,`strong`),Tk(868,`(opcional)`),Zg()(),Jc(869,`p`),Tk(870,`Define o ícone que será exibido no início do campo.`),Zg(),Jc(871,`p`),Tk(872,`É possível usar qualquer um dos ícones da `),Jc(873,`a`,32),Tk(874,`Biblioteca de ícones`),Zg(),Tk(875,`. conforme exemplo abaixo:`),Zg(),Jc(876,`pre`)(877,`code`),Tk(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),Zg()(),Jc(879,`p`),Tk(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(881,`em`),Tk(882,`Font Awesome`),Zg(),Tk(883,`, da seguinte forma:`),Zg(),Jc(884,`pre`)(885,`code`),Tk(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),Zg()(),Jc(887,`p`),Tk(888,`Outra opção seria a customização do ícone através do `),Jc(889,`code`),Tk(890,`TemplateRef`),Zg(),Tk(891,`, conforme exemplo abaixo:`),Zg(),Jc(892,`pre`)(893,`code`),Tk(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(895,`blockquote`)(896,`p`),Tk(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(898,`code`),Tk(899,`font-size: inherit`),Zg(),Tk(900,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(901,`tr`,15)(902,`td`,16)(903,`div`,17)(904,`span`,18),Tk(905,` (p-keydown)`),_u(906,`br`),Zg()()(),Jc(907,`td`,20)(908,`code`,21),Tk(909,`EventEmitter`),Zg()(),Jc(910,`td`,22),Tk(911,`-`),Zg(),Jc(912,`td`,23)(913,`em`)(914,`strong`),Tk(915,`(opcional)`),Zg()(),Jc(916,`p`),Tk(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(918,`code`),Tk(919,`KeyboardEvent`),Zg(),Tk(920,` com informações sobre a tecla.`),Zg()()(),Jc(921,`tr`,15)(922,`td`,16)(923,`div`,24)(924,`span`,25),Tk(925,` p-label`),_u(926,`br`),Zg()()(),Jc(927,`td`,20)(928,`code`,26),Tk(929,`string`),Zg()(),Jc(930,`td`,22),Tk(931,`-`),Zg(),Jc(932,`td`,23)(933,`em`)(934,`strong`),Tk(935,`(opcional)`),Zg()(),Jc(936,`p`),Tk(937,`Rótulo do campo.`),Zg()()(),Jc(938,`tr`,15)(939,`td`,16)(940,`div`,24)(941,`span`,25),Tk(942,` p-label-text-wrap`),_u(943,`br`),Zg()()(),Jc(944,`td`,20)(945,`code`,27),Tk(946,`boolean`),Zg()(),Jc(947,`td`,22)(948,`p`)(949,`code`),Tk(950,`false`),Zg()()(),Jc(951,`td`,23)(952,`em`)(953,`strong`),Tk(954,`(opcional)`),Zg()(),Jc(955,`p`),Tk(956,`Habilita a quebra automática do texto da propriedade `),Jc(957,`code`),Tk(958,`p-label`),Zg(),Tk(959,`. Quando `),Jc(960,`code`),Tk(961,`p-label-text-wrap`),Zg(),Tk(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(963,`tr`,15)(964,`td`,16)(965,`div`,24)(966,`span`,25),Tk(967,` p-loading`),_u(968,`br`),Zg()()(),Jc(969,`td`,20)(970,`code`,27),Tk(971,`boolean`),Zg()(),Jc(972,`td`,22)(973,`p`)(974,`code`),Tk(975,`false`),Zg()()(),Jc(976,`td`,23)(977,`em`)(978,`strong`),Tk(979,`(opcional)`),Zg()(),Jc(980,`p`),Tk(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(982,`tr`,15)(983,`td`,16)(984,`div`,24)(985,`span`,25),Tk(986,` p-locale`),_u(987,`br`),Zg()()(),Jc(988,`td`,20)(989,`code`,26),Tk(990,`string`),Zg()(),Jc(991,`td`,22),Tk(992,`-`),Zg(),Jc(993,`td`,23)(994,`em`)(995,`strong`),Tk(996,`(opcional)`),Zg()(),Jc(997,`p`),Tk(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Jc(999,`a`,33)(1e3,`code`),Tk(1001,`I18n`),Zg()()(),Jc(1002,`blockquote`)(1003,`p`),Tk(1004,`Para ver quais linguagens suportadas acesse `),Jc(1005,`a`,33)(1006,`code`),Tk(1007,`I18n`),Zg()()()()()(),Jc(1008,`tr`,15)(1009,`td`,16)(1010,`div`,24)(1011,`span`,25),Tk(1012,`p-mask`),_u(1013,`br`),Zg()()(),Jc(1014,`td`,20)(1015,`code`,26),Tk(1016,`string`),Zg()(),Jc(1017,`td`,22),Tk(1018,`-`),Zg(),Jc(1019,`td`,23)(1020,`em`)(1021,`strong`),Tk(1022,`(opcional)`),Zg()(),Jc(1023,`p`),Tk(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),Zg()()(),Jc(1025,`tr`,15)(1026,`td`,16)(1027,`div`,24)(1028,`span`,25),Tk(1029,`p-mask-format-model`),_u(1030,`br`),Zg()()(),Jc(1031,`td`,20)(1032,`code`,27),Tk(1033,`boolean`),Zg()(),Jc(1034,`td`,22)(1035,`p`)(1036,`code`),Tk(1037,`false`),Zg()()(),Jc(1038,`td`,23)(1039,`em`)(1040,`strong`),Tk(1041,`(opcional)`),Zg()(),Jc(1042,`p`),Tk(1043,`Indica se o `),Jc(1044,`code`),Tk(1045,`model`),Zg(),Tk(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),Zg()()(),Jc(1047,`tr`,15)(1048,`td`,16)(1049,`div`,24)(1050,`span`,25),Tk(1051,` p-mask-no-length-validation`),_u(1052,`br`),Zg()()(),Jc(1053,`td`,20)(1054,`code`,27),Tk(1055,`boolean`),Zg()(),Jc(1056,`td`,22)(1057,`p`)(1058,`code`),Tk(1059,`false`),Zg()()(),Jc(1060,`td`,23)(1061,`p`),Tk(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),Jc(1063,`code`),Tk(1064,`minLength`),Zg(),Tk(1065,`) e máximo (`),Jc(1066,`code`),Tk(1067,`maxLength`),Zg(),Tk(1068,`) quando há uma máscara (`),Jc(1069,`code`),Tk(1070,`p-mask`),Zg(),Tk(1071,`) definida.`),Zg(),Jc(1072,`ul`)(1073,`li`),Tk(1074,`Quando `),Jc(1075,`code`),Tk(1076,`true`),Zg(),Tk(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Zg(),Jc(1078,`li`),Tk(1079,`Quando `),Jc(1080,`code`),Tk(1081,`false`),Zg(),Tk(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Zg()(),Jc(1083,`blockquote`)(1084,`p`),Tk(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),Jc(1086,`code`),Tk(1087,`p-mask-format-model`),Zg(),Tk(1088,`.`),Zg()(),Jc(1089,`p`),Tk(1090,`Exemplo:`),Zg(),Jc(1091,`pre`)(1092,`code`),Tk(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),Zg()(),Jc(1094,`ul`)(1095,`li`),Tk(1096,`Entrada: `),Jc(1097,`code`),Tk(1098,`123-456`),Zg(),Tk(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Jc(1100,`code`),Tk(1101,`-`),Zg(),Tk(1102,`.`),Zg()()()(),Jc(1103,`tr`,15)(1104,`td`,16)(1105,`div`,24)(1106,`span`,25),Tk(1107,` p-max`),_u(1108,`br`),Zg()()(),Jc(1109,`td`,20)(1110,`code`,28),Tk(1111,`number`),Zg()(),Jc(1112,`td`,22),Tk(1113,`-`),Zg(),Jc(1114,`td`,23)(1115,`em`)(1116,`strong`),Tk(1117,`(opcional)`),Zg()(),Jc(1118,`p`),Tk(1119,`Valor máximo.`),Zg()()(),Jc(1120,`tr`,15)(1121,`td`,16)(1122,`div`,24)(1123,`span`,25),Tk(1124,` p-maxlength`),_u(1125,`br`),Zg()()(),Jc(1126,`td`,20)(1127,`code`,28),Tk(1128,`number`),Zg()(),Jc(1129,`td`,22),Tk(1130,`-`),Zg(),Jc(1131,`td`,23)(1132,`em`)(1133,`strong`),Tk(1134,`(opcional)`),Zg()(),Jc(1135,`p`),Tk(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),Zg()()(),Jc(1137,`tr`,15)(1138,`td`,16)(1139,`div`,24)(1140,`span`,25),Tk(1141,` p-min`),_u(1142,`br`),Zg()()(),Jc(1143,`td`,20)(1144,`code`,28),Tk(1145,`number`),Zg()(),Jc(1146,`td`,22),Tk(1147,`-`),Zg(),Jc(1148,`td`,23)(1149,`em`)(1150,`strong`),Tk(1151,`(opcional)`),Zg()(),Jc(1152,`p`),Tk(1153,`Valor mínimo.`),Zg()()(),Jc(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),Tk(1158,` p-minlength`),_u(1159,`br`),Zg()()(),Jc(1160,`td`,20)(1161,`code`,28),Tk(1162,`number`),Zg()(),Jc(1163,`td`,22),Tk(1164,`-`),Zg(),Jc(1165,`td`,23)(1166,`em`)(1167,`strong`),Tk(1168,`(opcional)`),Zg()(),Jc(1169,`p`),Tk(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),Zg()()(),Jc(1171,`tr`,15)(1172,`td`,16)(1173,`div`,24)(1174,`span`,25),Tk(1175,` name`),_u(1176,`br`),Zg()()(),Jc(1177,`td`,20)(1178,`code`,26),Tk(1179,`string`),Zg()(),Jc(1180,`td`,22),Tk(1181,`-`),Zg(),Jc(1182,`td`,23)(1183,`p`),Tk(1184,`Nome e identificador do campo.`),Zg()()(),Jc(1185,`tr`,15)(1186,`td`,16)(1187,`div`,24)(1188,`span`,25),Tk(1189,` p-no-autocomplete`),_u(1190,`br`),Zg()()(),Jc(1191,`td`,20)(1192,`code`,27),Tk(1193,`boolean`),Zg()(),Jc(1194,`td`,22)(1195,`p`)(1196,`code`),Tk(1197,`false`),Zg()()(),Jc(1198,`td`,23)(1199,`em`)(1200,`strong`),Tk(1201,`(opcional)`),Zg()(),Jc(1202,`p`),Tk(1203,`Define a propriedade nativa `),Jc(1204,`code`),Tk(1205,`autocomplete`),Zg(),Tk(1206,` do campo como `),Jc(1207,`code`),Tk(1208,`off`),Zg(),Tk(1209,`.`),Zg(),Jc(1210,`blockquote`)(1211,`p`),Tk(1212,`No componente `),Jc(1213,`code`),Tk(1214,`po-password`),Zg(),Tk(1215,` será definido como `),Jc(1216,`code`),Tk(1217,`new-password`),Zg(),Tk(1218,`.`),Zg()(),Jc(1219,`p`),Tk(1220,`Nos componentes `),Jc(1221,`code`),Tk(1222,`po-password`),Zg(),Tk(1223,` e `),Jc(1224,`code`),Tk(1225,`po-login`),Zg(),Tk(1226,` o valor padrão será `),Jc(1227,`code`),Tk(1228,`true`),Zg(),Tk(1229,`.`),Zg()()(),Jc(1230,`tr`,15)(1231,`td`,16)(1232,`div`,24)(1233,`span`,25),Tk(1234,` p-optional`),_u(1235,`br`),Zg()()(),Jc(1236,`td`,20)(1237,`code`,27),Tk(1238,`boolean`),Zg()(),Jc(1239,`td`,22)(1240,`p`)(1241,`code`),Tk(1242,`false`),Zg()()(),Jc(1243,`td`,23)(1244,`em`)(1245,`strong`),Tk(1246,`(opcional)`),Zg()(),Jc(1247,`p`),Tk(1248,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(1249,`blockquote`)(1250,`p`),Tk(1251,`Não será exibida a indicação se:`),Zg()(),Jc(1252,`ul`)(1253,`li`),Tk(1254,`O campo conter `),Jc(1255,`code`),Tk(1256,`p-required`),Zg(),Tk(1257,`;`),Zg(),Jc(1258,`li`),Tk(1259,`Não possuir `),Jc(1260,`code`),Tk(1261,`p-help`),Zg(),Tk(1262,` e/ou `),Jc(1263,`code`),Tk(1264,`p-label`),Zg(),Tk(1265,`.`),Zg()()()(),Jc(1266,`tr`,15)(1267,`td`,16)(1268,`div`,24)(1269,`span`,25),Tk(1270,`p-pattern`),_u(1271,`br`),Zg()()(),Jc(1272,`td`,20)(1273,`code`,26),Tk(1274,`string`),Zg()(),Jc(1275,`td`,22),Tk(1276,`-`),Zg(),Jc(1277,`td`,23)(1278,`em`)(1279,`strong`),Tk(1280,`(opcional)`),Zg()(),Jc(1281,`p`),Tk(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Jc(1283,`code`),Tk(1284,`(p-mask)`),Zg(),Tk(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),Zg()()(),Jc(1286,`tr`,15)(1287,`td`,16)(1288,`div`,24)(1289,`span`,25),Tk(1290,` p-placeholder`),_u(1291,`br`),Zg()()(),Jc(1292,`td`,20)(1293,`code`,26),Tk(1294,`string`),Zg()(),Jc(1295,`td`,22)(1296,`p`),Tk(1297,`''`),Zg()(),Jc(1298,`td`,23)(1299,`em`)(1300,`strong`),Tk(1301,`(opcional)`),Zg()(),Jc(1302,`p`),Tk(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Zg()()(),Jc(1304,`tr`,15)(1305,`td`,16)(1306,`div`,24)(1307,`span`,25),Tk(1308,` p-helper`),_u(1309,`br`),Zg()()(),Jc(1310,`td`,20)(1311,`code`,34),Tk(1312,`PoHelperOptions `),Zg(),Jc(1313,`code`,26),Tk(1314,` string`),Zg()(),Jc(1315,`td`,22),Tk(1316,`-`),Zg(),Jc(1317,`td`,23)(1318,`em`)(1319,`strong`),Tk(1320,`(opcional)`),Zg()(),Jc(1321,`p`),Tk(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1323,`code`),Tk(1324,`p-label`),Zg(),Tk(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1326,`code`),Tk(1327,`p-label`),Zg(),Tk(1328,`.`),Zg(),Jc(1329,`blockquote`)(1330,`p`),Tk(1331,`Para mais informações acesse: `),Jc(1332,`a`,35),Tk(1333,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1334,`.`),Zg()(),Jc(1335,`blockquote`)(1336,`p`),Tk(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1338,`code`),Tk(1339,`p-additional-help-tooltip`),Zg(),Tk(1340,` e `),Jc(1341,`code`),Tk(1342,`p-additional-help`),Zg(),Tk(1343,`) será ignorado.`),Zg()()()(),Jc(1344,`tr`,15)(1345,`td`,16)(1346,`div`,24)(1347,`span`,25),Tk(1348,`p-readonly`),_u(1349,`br`),Zg()()(),Jc(1350,`td`,20)(1351,`code`,27),Tk(1352,`boolean`),Zg()(),Jc(1353,`td`,22),Tk(1354,`-`),Zg(),Jc(1355,`td`,23)(1356,`em`)(1357,`strong`),Tk(1358,`(opcional)`),Zg()(),Jc(1359,`p`),Tk(1360,`Indica que o campo será somente leitura.`),Zg()()(),Jc(1361,`tr`,15)(1362,`td`,16)(1363,`div`,24)(1364,`span`,25),Tk(1365,`p-required`),_u(1366,`br`),Zg()()(),Jc(1367,`td`,20)(1368,`code`,27),Tk(1369,`boolean`),Zg()(),Jc(1370,`td`,22)(1371,`p`)(1372,`code`),Tk(1373,`false`),Zg()()(),Jc(1374,`td`,23)(1375,`em`)(1376,`strong`),Tk(1377,`(opcional)`),Zg()(),Jc(1378,`p`),Tk(1379,`Define que o campo será obrigatório.`),Zg(),Jc(1380,`blockquote`)(1381,`p`),Tk(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1383,`code`),Tk(1384,`(p-disabled)`),Zg(),Tk(1385,`.`),Zg()()()(),Jc(1386,`tr`,15)(1387,`td`,16)(1388,`div`,24)(1389,`span`,25),Tk(1390,` p-required-field-error-message`),_u(1391,`br`),Zg()()(),Jc(1392,`td`,20)(1393,`code`,27),Tk(1394,`boolean`),Zg()(),Jc(1395,`td`,22)(1396,`p`)(1397,`code`),Tk(1398,`false`),Zg()()(),Jc(1399,`td`,23)(1400,`em`)(1401,`strong`),Tk(1402,`(opcional)`),Zg()(),Jc(1403,`p`),Tk(1404,`Exibe a mensagem setada na propriedade `),Jc(1405,`code`),Tk(1406,`p-error-pattern`),Zg(),Tk(1407,` se o campo estiver vazio e for requerido.`),Zg(),Jc(1408,`blockquote`)(1409,`p`),Tk(1410,`Necessário que a propriedade `),Jc(1411,`code`),Tk(1412,`p-required`),Zg(),Tk(1413,` esteja habilitada.`),Zg()()()(),Jc(1414,`tr`,15)(1415,`td`,16)(1416,`div`,24)(1417,`span`,25),Tk(1418,` p-show-required`),_u(1419,`br`),Zg()()(),Jc(1420,`td`,20)(1421,`code`,27),Tk(1422,`boolean`),Zg()(),Jc(1423,`td`,22),Tk(1424,`-`),Zg(),Jc(1425,`td`,23)(1426,`p`),Tk(1427,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1428,`blockquote`)(1429,`p`),Tk(1430,`Não será exibida a indicação se:`),Zg()(),Jc(1431,`ul`)(1432,`li`),Tk(1433,`Não possuir `),Jc(1434,`code`),Tk(1435,`p-help`),Zg(),Tk(1436,` e/ou `),Jc(1437,`code`),Tk(1438,`p-label`),Zg(),Tk(1439,`.`),Zg()()()(),Jc(1440,`tr`,15)(1441,`td`,16)(1442,`div`,24)(1443,`span`,25),Tk(1444,` p-size`),_u(1445,`br`),Zg()()(),Jc(1446,`td`,20)(1447,`code`,26),Tk(1448,`string`),Zg()(),Jc(1449,`td`,22)(1450,`p`)(1451,`code`),Tk(1452,`medium`),Zg()()(),Jc(1453,`td`,23)(1454,`em`)(1455,`strong`),Tk(1456,`(opcional)`),Zg()(),Jc(1457,`p`),Tk(1458,`Define o tamanho do componente:`),Zg(),Jc(1459,`ul`)(1460,`li`)(1461,`code`),Tk(1462,`small`),Zg(),Tk(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1464,`li`)(1465,`code`),Tk(1466,`medium`),Zg(),Tk(1467,`: altura do input como 44px.`),Zg()(),Jc(1468,`blockquote`)(1469,`p`),Tk(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1471,`code`),Tk(1472,`medium`),Zg(),Tk(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1474,`a`,36),Tk(1475,`po-theme`),Zg(),Tk(1476,`.`),Zg()()()(),Jc(1477,`tr`,15)(1478,`td`,16)(1479,`div`,24)(1480,`span`,25),Tk(1481,` p-thousand-maxlength`),_u(1482,`br`),Zg()()(),Jc(1483,`td`,20)(1484,`code`,28),Tk(1485,`number`),Zg()(),Jc(1486,`td`,22)(1487,`p`)(1488,`code`),Tk(1489,`13`),Zg()()(),Jc(1490,`td`,23)(1491,`em`)(1492,`strong`),Tk(1493,`(opcional)`),Zg()(),Jc(1494,`p`),Tk(1495,`Quantidade máxima de dígitos antes do separador decimal.`),Zg(),Jc(1496,`blockquote`)(1497,`p`)(1498,`strong`),Tk(1499,`Importante:`),Zg()()(),Jc(1500,`ul`)(1501,`li`),Tk(1502,`O valor máximo permitido é 13;`),Zg(),Jc(1503,`li`),Tk(1504,`A soma total de `),Jc(1505,`code`),Tk(1506,`p-decimals-length`),Zg(),Tk(1507,` com `),Jc(1508,`code`),Tk(1509,`p-thousand-maxlength`),Zg(),Tk(1510,` limita-se à 16;`),Zg(),Jc(1511,`li`),Tk(1512,`Esta propriedade sobrepõe o valor definido em `),Jc(1513,`code`),Tk(1514,`p-decimals-length`),Zg(),Tk(1515,`.`),Zg(),Jc(1516,`li`),Tk(1517,`Quando utilizado com `),Jc(1518,`code`),Tk(1519,`p-display-format`),Zg(),Tk(1520,`, será respeitado o valor `),Jc(1521,`strong`),Tk(1522,`mais restritivo`),Zg(),Tk(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),Zg()()()(),Jc(1524,`tr`,15)(1525,`td`,16)(1526,`div`,24)(1527,`span`,25),Tk(1528,` p-upper-case`),_u(1529,`br`),Zg()()(),Jc(1530,`td`,20)(1531,`code`,27),Tk(1532,`boolean`),Zg()(),Jc(1533,`td`,22),Tk(1534,`-`),Zg(),Jc(1535,`td`,23)(1536,`p`),Tk(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),Zg()()()(),Jc(1538,`h3`,11),Tk(1539,`Métodos`),Zg(),Jc(1540,`table`,37)(1541,`tr`,15)(1542,`th`,38)(1543,`div`,24)(1544,`h4`)(1545,`span`,25),Tk(1546,` showAdditionalHelp `),Zg()()()()(),Jc(1547,`tr`,23)(1548,`td`,23)(1549,`p`),Tk(1550,`Método que exibe `),Jc(1551,`code`),Tk(1552,`p-helper`),Zg(),Tk(1553,` ou executa a ação definida em `),Jc(1554,`code`),Tk(1555,`p-helper{eventOnClick}`),Zg(),Tk(1556,` ou em `),Jc(1557,`code`),Tk(1558,`p-additionalHelp`),Zg(),Tk(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1560,`code`),Tk(1561,`p-keydown`),Zg(),Tk(1562,`.`),Zg(),Jc(1563,`blockquote`)(1564,`p`),Tk(1565,`Exibe ou oculta o conteúdo do componente `),Jc(1566,`code`),Tk(1567,`po-helper`),Zg(),Tk(1568,` quando o componente estiver com foco.`),Zg()(),Jc(1569,`pre`)(1570,`code`),Tk(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Zg()(),Jc(1572,`pre`)(1573,`code`),Tk(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1575,`br`),Jc(1576,`table`,37)(1577,`tr`,15)(1578,`th`,38)(1579,`div`,24)(1580,`h4`)(1581,`span`,25),Tk(1582,` focus `),Zg()()()()(),Jc(1583,`tr`,23)(1584,`td`,23)(1585,`p`),Tk(1586,`Função que atribui foco ao componente.`),Zg(),Jc(1587,`p`),Tk(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1589,`pre`)(1590,`code`),Tk(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),Zg()()()()(),_u(1592,`br`),Jc(1593,`h3`),Tk(1594,`Interfaces`),Zg(),Jc(1595,`h4`,39)(1596,`code`,5),Tk(1597,`ErrorAsyncProperties`),Zg()(),Jc(1598,`div`,2)(1599,`p`),Tk(1600,`Interface para realizar uma validação assíncrona no componente.`),Zg()(),Jc(1601,`h4`,11),Tk(1602,`Propriedades`),Zg(),Jc(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),Tk(1606,`Nome`),Zg(),Jc(1607,`th`,14),Tk(1608,`Tipo`),Zg(),Jc(1609,`th`,14),Tk(1610,`Descrição`),Zg()(),Jc(1611,`tr`,15)(1612,`td`,16)(1613,`div`,24)(1614,`span`,25),Tk(1615,` errorAsync`),_u(1616,`br`),Zg()()(),Jc(1617,`td`,20)(1618,`code`,40),Tk(1619,`(value) => Observable<boolean>`),Zg()(),Jc(1620,`td`,23)(1621,`p`),Tk(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(1623,`code`),Tk(1624,`change`),Zg(),Tk(1625,` ou `),Jc(1626,`code`),Tk(1627,`change-model`),Zg(),Tk(1628,`, dependendo do valor da propriedade `),Jc(1629,`code`),Tk(1630,`triggerMode`),Zg(),Tk(1631,`.`),Zg()()(),Jc(1632,`tr`,15)(1633,`td`,16)(1634,`div`,24)(1635,`span`,25),Tk(1636,` triggerMode`),_u(1637,`br`),Zg()()(),Jc(1638,`td`,20)(1639,`code`,41),Tk(1640,`'change' `),Zg(),Jc(1641,`code`,42),Tk(1642,` 'changeModel'`),Zg()(),Jc(1643,`td`,23)(1644,`em`)(1645,`strong`),Tk(1646,`(opcional)`),Zg()(),Jc(1647,`p`),Tk(1648,`Controla se o método será executado no disparo do output `),Jc(1649,`code`),Tk(1650,`change`),Zg(),Tk(1651,` ou `),Jc(1652,`code`),Tk(1653,`change-model`),Zg(),Tk(1654,`.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ne(a,Ie){if(a&1){let d=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(d);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-decimal-basic-view`)(2,`sample-po-decimal-labs-view`)(3,`sample-po-decimal-hourly-wage-view`)(4,`sample-po-decimal-hourly-wage-reactive-form-view`)(5,`sample-po-decimal-display-format-view`),Zg()}if(a&2){let d=nk();Rb(`p-active`,d.activeTab===`web`)}}var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Decimal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ne,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-decimal-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ue,Ee,Se,xe,ye,ve],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[WV.forChild(Re),WV]})}return a})();var _t=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,De]})}return a})();export{_t as DocPoDecimalModule};