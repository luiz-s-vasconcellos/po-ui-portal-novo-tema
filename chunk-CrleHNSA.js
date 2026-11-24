import{m as P,p as M}from"./main-6GCKJMTQ.js";import{Ar as G0,At as Zte,Ba as p,Br as Jn,Ea as kZ,F as Joe,Fr as H_,G as Nf,Gi as ZL,Hr as KO,Ki as Zb,L as Koe,La as ok,Li as WL,Lr as I,Pn as tre,Pt as are,Rn as voe,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,bn as oi,co as wg,da as ge$1,eo as tk,ha as i1,j as I4,jr as GV,k as Goe,ki as U_,oo as vt,or as An,pi as QL,qr as LO,ra as de$1,sn as j4,ti as NZ,vi as Qm,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var re=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&_u(0,`po-decimal`,0)},dependencies:[voe],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-decimal-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Decimal Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-decimal-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return l})();var pe=(()=>{class l{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let u=KO();Jc(0,`po-decimal`,1),G0(),vt(`ngModelChange`,function(a){return i.decimal=a})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.label,a)||(i.label=a),H_(a)}),Kg(),Jc(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.help,a)||(i.help=a),H_(a)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.helperText,a)||(i.helperText=a),H_(a)}),Kg(),Jc(11,`po-input`,8),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.placeholder,a)||(i.placeholder=a),H_(a)}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.errorPattern,a)||(i.errorPattern=a),H_(a)}),Kg(),Jc(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.displayFormat,a)||(i.displayFormat=a),H_(a)}),Kg(),Jc(14,`po-select`,11),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.icon,a)||(i.icon=a),H_(a)}),Kg(),Jc(15,`po-number`,12),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.min,a)||(i.min=a),H_(a)}),Kg(),Jc(16,`po-number`,13),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.max,a)||(i.max=a),H_(a)}),Kg(),Jc(17,`po-select`,14),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.locale,a)||(i.locale=a),H_(a)}),Kg(),Jc(18,`po-number`,15),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.decimalsLength,a)||(i.decimalsLength=a),H_(a)}),Kg(),Jc(19,`po-number`,16),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.thousandMaxlength,a)||(i.thousandMaxlength=a),H_(a)}),Kg(),Jc(20,`po-checkbox-group`,17),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.properties,a)||(i.properties=a),H_(a)}),Kg(),Jc(21,`po-radio-group`,18),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.size,a)||(i.size=a),H_(a)}),Kg(),Jc(22,`div`,2)(23,`po-button`,19),vt(`p-click`,function(){return i.restore()}),Kg()()()}r&2&&(Ab(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),q0(),wg(3),Ab(`p-value`,i.decimal),wg(),Ab(`p-value`,i.event),wg(4),Kb(`ngModel`,i.label),q0(),wg(),Kb(`ngModel`,i.help),q0(),wg(),Kb(`ngModel`,i.helperText),q0(),wg(),Kb(`ngModel`,i.placeholder),q0(),wg(),Kb(`ngModel`,i.errorPattern),q0(),wg(),Kb(`ngModel`,i.displayFormat),q0(),wg(),Kb(`ngModel`,i.icon),Ab(`p-options`,i.iconOptions),q0(),wg(),Kb(`ngModel`,i.min),q0(),wg(),Kb(`ngModel`,i.max),q0(),wg(),Kb(`ngModel`,i.locale),Ab(`p-options`,i.localeOptions),q0(),wg(),Kb(`ngModel`,i.decimalsLength),Ab(`p-max`,i.maxDecimalsLength),q0(),wg(),Kb(`ngModel`,i.thousandMaxlength),Ab(`p-max`,i.maxThousandMaxlength),q0(),wg(),Kb(`ngModel`,i.properties),Ab(`p-columns`,4)(`p-options`,i.propertiesOptions),q0(),wg(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),q0())},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,I4,voe,j4,Goe,Zte,Koe,Joe],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-decimal-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Decimal Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-decimal-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-decimal
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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let m=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/m;this.hourlyWage=r}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let u=KO();Jc(0,`form`,null,0)(2,`div`,1),Mk(3,`Calculate hourly wage`),Kg(),_u(4,`po-divider`),Jc(5,`div`,2)(6,`po-number`,3),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.weekHours,a)||(i.weekHours=a),H_(a)}),Kg(),Jc(7,`po-number`,4),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),H_(a)}),Kg()(),Jc(8,`div`,2)(9,`po-number`,5),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),H_(a)}),Kg(),Jc(10,`po-decimal`,6),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.salary,a)||(i.salary=a),H_(a)}),vt(`p-change`,function(){return i.calculate()}),Kg()(),Jc(11,`div`,2)(12,`po-decimal`,7),G0(),Zb(`ngModelChange`,function(a){return U_(u),Rk(i.hourlyWage,a)||(i.hourlyWage=a),H_(a)}),Kg()(),Jc(13,`div`,2)(14,`po-button`,8),vt(`p-click`,function(){U_(u);let a=ok(1);return H_(a.reset())}),Kg(),Jc(15,`po-button`,9),vt(`p-click`,function(){return i.calculate()}),Kg()()()}r&2&&(wg(6),Kb(`ngModel`,i.weekHours),q0(),wg(),Kb(`ngModel`,i.workingDaysPerWeek),q0(),wg(2),Kb(`ngModel`,i.quantityDaysPerMonth),q0(),wg(),Kb(`ngModel`,i.salary),q0(),wg(2),Kb(`ngModel`,i.hourlyWage),q0(),wg(3),Ab(`p-disabled`,!i.hourlyWage))},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,voe,Goe],encapsulation:2,changeDetection:1})}return l})();var ce=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-decimal-hourly-wage`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Decimal - Hourly Wage`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-decimal-hourly-wage`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<form #f="ngForm">
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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{formBuilder=p(kZ);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,Qm.required],salary:[null,Qm.required],weekHours:[null,Qm.required],workingDaysPerWeek:[null,Qm.required]})}calculate(){let{weekHours:m,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:u}=this.formCalculateHourlyWage.value,a=u/(m/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Jc(0,`form`,0)(1,`div`,1),Mk(2,`Calculate hourly wage`),Kg(),_u(3,`po-divider`),Jc(4,`div`,2)(5,`po-number`,3),G0(),Kg(),Jc(6,`po-number`,4),G0(),Kg()(),Jc(7,`div`,2)(8,`po-number`,5),G0(),Kg(),Jc(9,`po-decimal`,6),G0(),vt(`p-change`,function(){return i.calculate()}),Kg()(),Jc(10,`div`,2)(11,`po-decimal`,7),G0(),Kg()(),Jc(12,`div`,2)(13,`po-button`,8),vt(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),Kg(),Jc(14,`po-button`,9),vt(`p-click`,function(){return i.calculate()}),Kg()()()),r&2&&(Ab(`formGroup`,i.formCalculateHourlyWage),wg(5),q0(),wg(),q0(),wg(2),q0(),wg(),q0(),wg(2),q0(),wg(3),Ab(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[NZ,TZ,RZ,ZL,i1,oi,Nf,voe,Goe],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-decimal-hourly-wage-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Decimal - Hourly Wage Reactive Form`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-decimal-hourly-wage-reactive-form`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<form [formGroup]="formCalculateHourlyWage">
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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let m=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=m,this.taxValue=m*((this.tax??0)/100),this.totalOrder=m+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(Jc(0,`div`,0),Mk(1,`Order Simulation`),Kg(),_u(2,`po-divider`),Jc(3,`div`,1)(4,`po-decimal`,2),G0(),vt(`ngModelChange`,function(p){return i.price=p}),Kg(),Jc(5,`po-decimal`,3),G0(),vt(`ngModelChange`,function(p){return i.quantity=p}),Kg(),Jc(6,`po-decimal`,4),G0(),vt(`ngModelChange`,function(p){return i.discount=p}),Kg()(),Jc(7,`div`,1)(8,`po-decimal`,5),G0(),vt(`ngModelChange`,function(p){return i.tax=p}),Kg(),Jc(9,`po-decimal`,6),G0(),vt(`ngModelChange`,function(p){return i.shipping=p}),Kg(),Jc(10,`div`,7)(11,`po-button`,8),vt(`p-click`,function(){return i.calculate()}),Kg()()(),_u(12,`po-divider`),Jc(13,`div`,1)(14,`po-decimal`,9),G0(),vt(`ngModelChange`,function(p){return i.subtotal=p}),Kg(),Jc(15,`po-decimal`,10),G0(),vt(`ngModelChange`,function(p){return i.taxValue=p}),Kg(),Jc(16,`po-decimal`,11),G0(),vt(`ngModelChange`,function(p){return i.totalOrder=p}),Kg()()),r&2&&(wg(4),Ab(`ngModel`,i.price),q0(),wg(),Ab(`p-decimals-length`,0)(`ngModel`,i.quantity),q0(),wg(),Ab(`ngModel`,i.discount),q0(),wg(2),Ab(`p-decimals-length`,3)(`ngModel`,i.tax),q0(),wg(),Ab(`p-optional`,!0)(`ngModel`,i.shipping),q0(),wg(5),Ab(`p-readonly`,!0)(`ngModel`,i.subtotal),q0(),wg(),Ab(`p-readonly`,!0)(`ngModel`,i.taxValue),q0(),wg(),Ab(`p-readonly`,!0)(`ngModel`,i.totalOrder),q0())},dependencies:[TZ,QL,oi,Nf,voe],encapsulation:2})}return l})();var he=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-decimal-display-format`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Decimal - Display Format`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-decimal-display-format`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<div class="po-font-title">Order Simulation</div>

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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{router=p(An);openDoc(m){this.router.navigate([`/documentation`,m],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-decimal-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-decimals-length`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-display-format`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`id`,`prop-p-emit-all-changes`,1,`docs-api-properties-row`],[`id`,`event-p-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-error-async-properties`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-error-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-locale`,1,`docs-api-properties-row`],[`href`,`documentation/po-i18n`],[`id`,`prop-p-mask`,1,`docs-api-properties-row`],[`id`,`prop-p-mask-format-model`,1,`docs-api-properties-row`],[`id`,`prop-p-mask-no-length-validation`,1,`docs-api-properties-row`],[`id`,`prop-p-max`,1,`docs-api-properties-row`],[`id`,`prop-p-maxlength`,1,`docs-api-properties-row`],[`id`,`prop-p-min`,1,`docs-api-properties-row`],[`id`,`prop-p-minlength`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-thousand-maxlength`,1,`docs-api-properties-row`],[`id`,`prop-p-upper-case`,1,`docs-api-properties-row`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[`id`,`interface-error-async-properties`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-error-async-properties-error-async`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`id`,`interface-error-async-properties-trigger-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoDecimalComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),Kg(),Jc(24,`p`),Mk(25,`Importante:`),Kg(),Jc(26,`ul`)(27,`li`),Mk(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),Kg()(),Jc(29,`h4`),Mk(30,`Tokens customizáveis`),Kg(),Jc(31,`p`),Mk(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(33,`br`),Mk(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(35,`code`),Mk(36,`.po-input`),Kg()(),Jc(37,`blockquote`)(38,`p`),Mk(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Jc(40,`a`,6),Mk(41,`Grid System`),Kg(),Mk(42,`.`),Kg()(),Jc(43,`blockquote`)(44,`p`),Mk(45,`Para maiores informações, acesse o guia `),Jc(46,`a`,7),Mk(47,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(48,`.`),Kg()(),Jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),Mk(53,`Propriedade`),Kg(),Jc(54,`th`),Mk(55,`Descrição`),Kg(),Jc(56,`th`),Mk(57,`Valor Padrão`),Kg()()(),Jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),Mk(62,`Default Values`),Kg()(),_u(63,`td`)(64,`td`),Kg(),Jc(65,`tr`)(66,`td`)(67,`code`),Mk(68,`--font-family`),Kg()(),Jc(69,`td`),Mk(70,`Família tipográfica usada`),Kg(),Jc(71,`td`)(72,`code`),Mk(73,`var(--font-family-theme)`),Kg()()(),Jc(74,`tr`)(75,`td`)(76,`code`),Mk(77,`--font-size`),Kg()(),Jc(78,`td`),Mk(79,`Tamanho da fonte`),Kg(),Jc(80,`td`)(81,`code`),Mk(82,`var(--font-size-default)`),Kg()()(),Jc(83,`tr`)(84,`td`)(85,`code`),Mk(86,`--text-color-placeholder`),Kg()(),Jc(87,`td`),Mk(88,`Cor do texto placeholder`),Kg(),Jc(89,`td`)(90,`code`),Mk(91,`var(--color-neutral-light-30)`),Kg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Mk(95,`--color`),Kg()(),Jc(96,`td`),Mk(97,`Cor pincipal do input`),Kg(),Jc(98,`td`)(99,`code`),Mk(100,`var(--color-neutral-dark-70)`),Kg()()(),Jc(101,`tr`)(102,`td`)(103,`code`),Mk(104,`--background`),Kg()(),Jc(105,`td`),Mk(106,`Cor de background`),Kg(),Jc(107,`td`)(108,`code`),Mk(109,`var(--color-neutral-light-05)`),Kg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Mk(113,`--padding`),Kg()(),Jc(114,`td`),Mk(115,`Preenchimento`),Kg(),Jc(116,`td`)(117,`code`),Mk(118,`0 0.5rem`),Kg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Mk(122,`--text-color`),Kg()(),Jc(123,`td`),Mk(124,`Cor do texto`),Kg(),Jc(125,`td`)(126,`code`),Mk(127,`var(--color-neutral-dark-90)`),Kg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Mk(131,`--field-container-title-justify`),Kg()(),Jc(132,`td`),Mk(133,`Alinhamento horizontal do título (`),Jc(134,`code`),Mk(135,`justify-content`),Kg(),Mk(136,`)`),Kg(),Jc(137,`td`)(138,`code`),Mk(139,`space-between`),Kg()()(),Jc(140,`tr`)(141,`td`)(142,`code`),Mk(143,`--field-container-title-flex`),Kg()(),Jc(144,`td`),Mk(145,`Flex do título (`),Jc(146,`code`),Mk(147,`flex`),Kg(),Mk(148,`)`),Kg(),Jc(149,`td`)(150,`code`),Mk(151,`1 auto`),Kg()()(),Jc(152,`tr`)(153,`td`)(154,`strong`),Mk(155,`Hover`),Kg()(),_u(156,`td`)(157,`td`),Kg(),Jc(158,`tr`)(159,`td`)(160,`code`),Mk(161,`--color-hover`),Kg()(),Jc(162,`td`),Mk(163,`Cor principal no estado hover`),Kg(),Jc(164,`td`)(165,`code`),Mk(166,`var(--color-brand-01-dark)`),Kg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Mk(170,`--background-hover`),Kg()(),Jc(171,`td`),Mk(172,`Cor de background no estado hover`),Kg(),Jc(173,`td`)(174,`code`),Mk(175,`var(--color-brand-01-lightest)`),Kg()()(),Jc(176,`tr`)(177,`td`)(178,`strong`),Mk(179,`Focused`),Kg()(),_u(180,`td`)(181,`td`),Kg(),Jc(182,`tr`)(183,`td`)(184,`code`),Mk(185,`--color-focused`),Kg()(),Jc(186,`td`),Mk(187,`Cor principal no estado de focus`),Kg(),Jc(188,`td`)(189,`code`),Mk(190,`var(--color-action-default)`),Kg()()(),Jc(191,`tr`)(192,`td`)(193,`code`),Mk(194,`--outline-color-focused`),Kg()(),Jc(195,`td`),Mk(196,`Cor do outline do estado de focus`),Kg(),Jc(197,`td`)(198,`code`),Mk(199,`var(--color-action-focus)`),Kg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Mk(203,`Disabled`),Kg()(),_u(204,`td`)(205,`td`),Kg(),Jc(206,`tr`)(207,`td`)(208,`code`),Mk(209,`--color-disabled`),Kg()(),Jc(210,`td`),Mk(211,`Cor principal no estado disabled`),Kg(),Jc(212,`td`)(213,`code`),Mk(214,`var(--color-neutral-light-30)`),Kg()()(),Jc(215,`tr`)(216,`td`)(217,`code`),Mk(218,`--background-disabled`),Kg()(),Jc(219,`td`),Mk(220,`Cor de background no estado disabled`),Kg(),Jc(221,`td`)(222,`code`),Mk(223,`var(--color-neutral-light-20)`),Kg()()(),Jc(224,`tr`)(225,`td`)(226,`code`),Mk(227,`--text-color-disabled`),Kg()(),Jc(228,`td`),Mk(229,`Cor do texto no estado disabled`),Kg(),Jc(230,`td`)(231,`code`),Mk(232,`var(--color-neutral-dark-70)`),Kg()()()()(),Jc(233,`p`),_u(234,`br`),Mk(235,` - O `),Jc(236,`code`),Mk(237,`po-decimal`),Kg(),Mk(238,` é um `),Jc(239,`em`),Mk(240,`input`),Kg(),Mk(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),Kg(),Jc(242,`ul`)(243,`li`),Mk(244,`Aceita apenas números;`),Kg(),Jc(245,`li`),Mk(246,`Utiliza ',' como separador de decimal;`),Kg(),Jc(247,`li`),Mk(248,`Utiliza '.' para separação de milhar;`),Kg(),Jc(249,`li`),Mk(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),Kg()(),Jc(251,`blockquote`)(252,`p`)(253,`strong`),Mk(254,`Importante:`),Kg(),Mk(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Jc(256,`code`),Mk(257,`32 bits`),Kg(),Mk(258,`, e para que os valores comportem-se devidamente,
o `),Jc(259,`code`),Mk(260,`po-decimal`),Kg(),Mk(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Jc(262,`code`),Mk(263,`p-decimals-length`),Kg(),Mk(264,` e `),Jc(265,`code`),Mk(266,`p-thousand-maxlength`),Kg(),Mk(267,`.`),Kg()()(),Jc(268,`div`,8)(269,`h4`,9),Mk(270,`Seletor`),Kg(),Jc(271,`pre`,10),Mk(272,`<po-decimal
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
`),Kg()(),Jc(273,`h4`,11),Mk(274,`Propriedades`),Kg(),Jc(275,`table`,12)(276,`tr`,13)(277,`th`,14),Mk(278,`Nome`),Kg(),Jc(279,`th`,14),Mk(280,`Tipo`),Kg(),Jc(281,`th`,14),Mk(282,`Padrão`),Kg(),Jc(283,`th`,14),Mk(284,`Descrição`),Kg()(),Jc(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),Mk(289,` (p-additional-help)`),_u(290,`br`),Kg()(),Jc(291,`div`,19),Mk(292,`Deprecated`),Kg()(),Jc(293,`td`,20)(294,`code`,21),Mk(295,`EventEmitter`),Kg()(),Jc(296,`td`,22),Mk(297,`-`),Kg(),Jc(298,`td`,23)(299,`em`)(300,`strong`),Mk(301,`(opcional)`),Kg()(),Jc(302,`p`),Mk(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(304,`blockquote`)(305,`p`),Mk(306,`Essa propriedade está `),Jc(307,`strong`),Mk(308,`depreciada`),Kg(),Mk(309,` e será removida na versão `),Jc(310,`code`),Mk(311,`23.x.x`),Kg(),Mk(312,`. Recomendamos utilizar a propriedade `),Jc(313,`code`),Mk(314,`p-helper`),Kg(),Mk(315,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(316,`tr`,24)(317,`td`,16)(318,`div`,25)(319,`span`,26),Mk(320,` p-additional-help-tooltip`),_u(321,`br`),Kg()(),Jc(322,`div`,19),Mk(323,`Deprecated`),Kg()(),Jc(324,`td`,20)(325,`code`,27),Mk(326,`string`),Kg()(),Jc(327,`td`,22),Mk(328,`-`),Kg(),Jc(329,`td`,23)(330,`em`)(331,`strong`),Mk(332,`(opcional)`),Kg()(),Jc(333,`p`),Mk(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(335,`code`),Mk(336,`po-helper`),Kg(),Mk(337,`.
`),Jc(338,`strong`),Mk(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(340,`blockquote`)(341,`p`),Mk(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(343,`blockquote`)(344,`p`),Mk(345,`Essa propriedade está `),Jc(346,`strong`),Mk(347,`depreciada`),Kg(),Mk(348,` e será removida na versão `),Jc(349,`code`),Mk(350,`23.x.x`),Kg(),Mk(351,`. Recomendamos utilizar a propriedade `),Jc(352,`code`),Mk(353,`p-helper`),Kg(),Mk(354,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(355,`tr`,28)(356,`td`,16)(357,`div`,25)(358,`span`,26),Mk(359,` p-append-in-body`),_u(360,`br`),Kg()()(),Jc(361,`td`,20)(362,`code`,29),Mk(363,`boolean`),Kg()(),Jc(364,`td`,22)(365,`p`)(366,`code`),Mk(367,`false`),Kg()()(),Jc(368,`td`,23)(369,`em`)(370,`strong`),Mk(371,`(opcional)`),Kg()(),Jc(372,`p`),Mk(373,`Define que o popover (`),Jc(374,`code`),Mk(375,`p-helper`),Kg(),Mk(376,` e/ou `),Jc(377,`code`),Mk(378,`p-error-limit`),Kg(),Mk(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(380,`blockquote`)(381,`p`),Mk(382,`Quando utilizado com `),Jc(383,`code`),Mk(384,`p-helper`),Kg(),Mk(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(386,`tr`,30)(387,`td`,16)(388,`div`,25)(389,`span`,26),Mk(390,` p-auto-focus`),_u(391,`br`),Kg()()(),Jc(392,`td`,20)(393,`code`,29),Mk(394,`boolean`),Kg()(),Jc(395,`td`,22)(396,`p`)(397,`code`),Mk(398,`false`),Kg()()(),Jc(399,`td`,23)(400,`em`)(401,`strong`),Mk(402,`(opcional)`),Kg()(),Jc(403,`p`),Mk(404,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(405,`blockquote`)(406,`p`),Mk(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(408,`tr`,31)(409,`td`,16)(410,`div`,17)(411,`span`,18),Mk(412,` (p-blur)`),_u(413,`br`),Kg()()(),Jc(414,`td`,20)(415,`code`,21),Mk(416,`EventEmitter`),Kg()(),Jc(417,`td`,22),Mk(418,`-`),Kg(),Jc(419,`td`,23)(420,`em`)(421,`strong`),Mk(422,`(opcional)`),Kg()(),Jc(423,`p`),Mk(424,`Evento disparado ao sair do campo.`),Kg()()(),Jc(425,`tr`,32)(426,`td`,16)(427,`div`,17)(428,`span`,18),Mk(429,` (p-change)`),_u(430,`br`),Kg()()(),Jc(431,`td`,20)(432,`code`,21),Mk(433,`EventEmitter`),Kg()(),Jc(434,`td`,22),Mk(435,`-`),Kg(),Jc(436,`td`,23)(437,`em`)(438,`strong`),Mk(439,`(opcional)`),Kg()(),Jc(440,`p`),Mk(441,`Evento disparado ao alterar valor e deixar o campo.`),Kg()()(),Jc(442,`tr`,33)(443,`td`,16)(444,`div`,17)(445,`span`,18),Mk(446,` (p-change-model)`),_u(447,`br`),Kg()()(),Jc(448,`td`,20)(449,`code`,21),Mk(450,`EventEmitter`),Kg()(),Jc(451,`td`,22),Mk(452,`-`),Kg(),Jc(453,`td`,23)(454,`em`)(455,`strong`),Mk(456,`(opcional)`),Kg()(),Jc(457,`p`),Mk(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(459,`code`),Mk(460,`setValue`),Kg(),Mk(461,`, `),Jc(462,`code`),Mk(463,`patchValue`),Kg(),Mk(464,`, carregamento assíncrono).`),Kg(),Jc(465,`p`),Mk(466,`Diferentemente do `),Jc(467,`code`),Mk(468,`p-change`),Kg(),Mk(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(470,`code`),Mk(471,`p-change-model`),Kg(),Mk(472,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(473,`p`),Mk(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(475,`tr`,34)(476,`td`,16)(477,`div`,25)(478,`span`,26),Mk(479,`p-clean`),_u(480,`br`),Kg()()(),Jc(481,`td`,20)(482,`code`,29),Mk(483,`boolean`),Kg()(),Jc(484,`td`,22),Mk(485,`-`),Kg(),Jc(486,`td`,23)(487,`em`)(488,`strong`),Mk(489,`(opcional)`),Kg()(),Jc(490,`p`),Mk(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg()()(),Jc(492,`tr`,35)(493,`td`,16)(494,`div`,25)(495,`span`,26),Mk(496,` p-compact-label`),_u(497,`br`),Kg()()(),Jc(498,`td`,20)(499,`code`,29),Mk(500,`boolean`),Kg()(),Jc(501,`td`,22)(502,`p`)(503,`code`),Mk(504,`false`),Kg()()(),Jc(505,`td`,23)(506,`em`)(507,`strong`),Mk(508,`(opcional)`),Kg()(),Jc(509,`p`),Mk(510,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(511,`p`),Mk(512,`Quando habilitado (`),Jc(513,`code`),Mk(514,`true`),Kg(),Mk(515,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(516,`ul`)(517,`li`)(518,`code`),Mk(519,`po-label`),Kg()(),Jc(520,`li`)(521,`code`),Mk(522,`p-requirement (showRequired)`),Kg()(),Jc(523,`li`)(524,`code`),Mk(525,`po-helper`),Kg()()(),Jc(526,`p`),Mk(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(528,`p`),Mk(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(530,`ul`)(531,`li`)(532,`code`),Mk(533,`--field-container-title-justify`),Kg()(),Jc(534,`li`)(535,`code`),Mk(536,`--field-container-title-flex`),Kg()()(),Jc(537,`p`),Mk(538,`Exemplo:`),Kg(),Jc(539,`pre`)(540,`code`),Mk(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(542,`p`),Mk(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(544,`tr`,36)(545,`td`,16)(546,`div`,25)(547,`span`,26),Mk(548,` p-decimals-length`),_u(549,`br`),Kg()()(),Jc(550,`td`,20)(551,`code`,37),Mk(552,`number`),Kg()(),Jc(553,`td`,22)(554,`p`)(555,`code`),Mk(556,`2`),Kg()()(),Jc(557,`td`,23)(558,`em`)(559,`strong`),Mk(560,`(opcional)`),Kg()(),Jc(561,`p`),Mk(562,`Quantidade máxima de casas decimais.`),Kg(),Jc(563,`blockquote`)(564,`p`)(565,`strong`),Mk(566,`Importante:`),Kg()()(),Jc(567,`ul`)(568,`li`),Mk(569,`O valor máximo permitido é 15;`),Kg(),Jc(570,`li`),Mk(571,`A soma total de `),Jc(572,`code`),Mk(573,`p-decimals-length`),Kg(),Mk(574,` com `),Jc(575,`code`),Mk(576,`p-thousand-maxlength`),Kg(),Mk(577,` limita-se à 16;`),Kg(),Jc(578,`li`),Mk(579,`Esta propriedade sobrepõe apenas o valor `),Jc(580,`strong`),Mk(581,`padrão`),Kg(),Mk(582,` de `),Jc(583,`code`),Mk(584,`p-thousand-maxlength`),Kg(),Mk(585,`;`),Kg(),Jc(586,`li`),Mk(587,`Caso `),Jc(588,`code`),Mk(589,`p-thousand-maxlength`),Kg(),Mk(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),Kg(),Jc(591,`li`),Mk(592,`Quando utilizado com `),Jc(593,`code`),Mk(594,`p-display-format`),Kg(),Mk(595,`, será respeitado o valor `),Jc(596,`strong`),Mk(597,`mais restritivo`),Kg(),Mk(598,` entre esta propriedade e o número de casas decimais definido no formato.`),Kg()()()(),Jc(599,`tr`,38)(600,`td`,16)(601,`div`,25)(602,`span`,26),Mk(603,`p-disabled`),_u(604,`br`),Kg()()(),Jc(605,`td`,20)(606,`code`,29),Mk(607,`boolean`),Kg()(),Jc(608,`td`,22)(609,`p`)(610,`code`),Mk(611,`false`),Kg()()(),Jc(612,`td`,23)(613,`em`)(614,`strong`),Mk(615,`(opcional)`),Kg()(),Jc(616,`p`),Mk(617,`Se verdadeiro, desabilita o campo.`),Kg()()(),Jc(618,`tr`,39)(619,`td`,16)(620,`div`,25)(621,`span`,26),Mk(622,` p-display-format`),_u(623,`br`),Kg()()(),Jc(624,`td`,20)(625,`code`,27),Mk(626,`string `),Kg(),Jc(627,`code`,40),Mk(628,` undefined`),Kg()(),Jc(629,`td`,22),Mk(630,`-`),Kg(),Jc(631,`td`,23)(632,`em`)(633,`strong`),Mk(634,`(opcional)`),Kg()(),Jc(635,`p`),Mk(636,`Define uma máscara de formatação numérica avançada para o campo.`),Kg(),Jc(637,`p`),Mk(638,`Simbologia suportada:`),Kg(),Jc(639,`ul`)(640,`li`)(641,`code`),Mk(642,`9`),Kg(),Mk(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Kg(),Jc(644,`li`)(645,`code`),Mk(646,`>`),Kg(),Mk(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),Kg(),Jc(648,`li`)(649,`code`),Mk(650,`<`),Kg(),Mk(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Kg(),Jc(652,`li`)(653,`code`),Mk(654,`,`),Kg(),Mk(655,` e `),Jc(656,`code`),Mk(657,`.`),Kg(),Mk(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),Jc(659,`code`),Mk(660,`p-locale`),Kg(),Mk(661,`);`),Kg(),Jc(662,`li`)(663,`code`),Mk(664,`-`),Kg(),Mk(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Kg()(),Jc(666,`blockquote`)(667,`p`)(668,`strong`),Mk(669,`Importante:`),Kg()()(),Jc(670,`ul`)(671,`li`),Mk(672,`A formatação via `),Jc(673,`code`),Mk(674,`p-display-format`),Kg(),Mk(675,` é apenas visual; o valor do model é sempre o número puro.`),Kg(),Jc(676,`li`),Mk(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),Jc(678,`code`),Mk(679,`-`),Kg(),Mk(680,`), o campo exibe com a formatação padrão do `),Jc(681,`code`),Mk(682,`po-decimal`),Kg(),Mk(683,` (separadores de milhar + `),Jc(684,`code`),Mk(685,`p-decimals-length`),Kg(),Mk(686,` casas decimais).`),Kg(),Jc(687,`li`),Mk(688,`Quando `),Jc(689,`code`),Mk(690,`p-decimals-length`),Kg(),Mk(691,` ou `),Jc(692,`code`),Mk(693,`p-thousand-maxlength`),Kg(),Mk(694,` são definidos, será respeitado o valor `),Jc(695,`strong`),Mk(696,`mais restritivo`),Kg(),Mk(697,` entre o formato e a propriedade.`),Kg(),Jc(698,`li`),Mk(699,`Incompatível com `),Jc(700,`code`),Mk(701,`p-mask`),Kg(),Mk(702,`, `),Jc(703,`code`),Mk(704,`p-mask-format-model`),Kg(),Mk(705,`, `),Jc(706,`code`),Mk(707,`p-mask-no-length-validation`),Kg(),Mk(708,` e `),Jc(709,`code`),Mk(710,`p-pattern`),Kg(),Mk(711,`.`),Kg()(),Jc(712,`p`),Mk(713,`Exemplos de formato: `),Jc(714,`code`),Mk(715,`>>>,>>>,>>9.99`),Kg(),Mk(716,`, `),Jc(717,`code`),Mk(718,`->>,>>9.99`),Kg(),Mk(719,`, `),Jc(720,`code`),Mk(721,`999.9`),Kg(),Mk(722,`, `),Jc(723,`code`),Mk(724,`>>>,>>9.9<<<<<<`),Kg()()()(),Jc(725,`tr`,41)(726,`td`,16)(727,`div`,25)(728,`span`,26),Mk(729,` p-emit-all-changes`),_u(730,`br`),Kg()()(),Jc(731,`td`,20)(732,`code`,29),Mk(733,`boolean`),Kg()(),Jc(734,`td`,22)(735,`p`)(736,`code`),Mk(737,`false`),Kg()()(),Jc(738,`td`,23)(739,`em`)(740,`strong`),Mk(741,`(opcional)`),Kg()(),Jc(742,`p`),Mk(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),Kg()()(),Jc(744,`tr`,42)(745,`td`,16)(746,`div`,17)(747,`span`,18),Mk(748,` (p-enter)`),_u(749,`br`),Kg()()(),Jc(750,`td`,20)(751,`code`,21),Mk(752,`EventEmitter`),Kg()(),Jc(753,`td`,22),Mk(754,`-`),Kg(),Jc(755,`td`,23)(756,`em`)(757,`strong`),Mk(758,`(opcional)`),Kg()(),Jc(759,`p`),Mk(760,`Evento disparado ao entrar do campo.`),Kg()()(),Jc(761,`tr`,43)(762,`td`,16)(763,`div`,25)(764,`span`,26),Mk(765,` p-error-async-properties`),_u(766,`br`),Kg()()(),Jc(767,`td`,20)(768,`code`,44),Mk(769,`ErrorAsyncProperties`),Kg()(),Jc(770,`td`,22),Mk(771,`-`),Kg(),Jc(772,`td`,23)(773,`em`)(774,`strong`),Mk(775,`(opcional)`),Kg()(),Jc(776,`p`),Mk(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Jc(778,`code`),Mk(779,`Reactive Forms`),Kg(),Mk(780,`. Em formulários reativos, pode-se utilizar o próprio `),Jc(781,`code`),Mk(782,`asyncValidators`),Kg(),Mk(783,`.`),Kg()()(),Jc(784,`tr`,45)(785,`td`,16)(786,`div`,25)(787,`span`,26),Mk(788,` p-error-limit`),_u(789,`br`),Kg()()(),Jc(790,`td`,20)(791,`code`,29),Mk(792,`boolean`),Kg()(),Jc(793,`td`,22)(794,`p`)(795,`code`),Mk(796,`false`),Kg()()(),Jc(797,`td`,23)(798,`em`)(799,`strong`),Mk(800,`(opcional)`),Kg()(),Jc(801,`p`),Mk(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(803,`blockquote`)(804,`p`),Mk(805,`Caso essa propriedade seja definida como `),Jc(806,`code`),Mk(807,`true`),Kg(),Mk(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(809,`tr`,46)(810,`td`,16)(811,`div`,25)(812,`span`,26),Mk(813,` p-error-pattern`),_u(814,`br`),Kg()()(),Jc(815,`td`,20)(816,`code`,27),Mk(817,`string`),Kg()(),Jc(818,`td`,22),Mk(819,`-`),Kg(),Jc(820,`td`,23)(821,`em`)(822,`strong`),Mk(823,`(opcional)`),Kg()(),Jc(824,`p`),Mk(825,`Mensagem que será apresentada quando o `),Jc(826,`code`),Mk(827,`pattern`),Kg(),Mk(828,` ou a máscara não for satisfeita.`),Kg(),Jc(829,`blockquote`)(830,`p`),Mk(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Jc(832,`code`),Mk(833,`p-required-field-error-message`),Kg(),Mk(834,` em conjunto.`),Kg()()()(),Jc(835,`tr`,47)(836,`td`,16)(837,`div`,25)(838,`span`,26),Mk(839,` p-help`),_u(840,`br`),Kg()()(),Jc(841,`td`,20)(842,`code`,27),Mk(843,`string`),Kg()(),Jc(844,`td`,22),Mk(845,`-`),Kg(),Jc(846,`td`,23)(847,`em`)(848,`strong`),Mk(849,`(opcional)`),Kg()(),Jc(850,`p`),Mk(851,`Texto de apoio do campo.`),Kg()()(),Jc(852,`tr`,48)(853,`td`,16)(854,`div`,25)(855,`span`,26),Mk(856,` p-icon`),_u(857,`br`),Kg()()(),Jc(858,`td`,20)(859,`code`,27),Mk(860,`string `),Kg(),Jc(861,`code`,49),Mk(862,` TemplateRef<void>`),Kg()(),Jc(863,`td`,22),Mk(864,`-`),Kg(),Jc(865,`td`,23)(866,`em`)(867,`strong`),Mk(868,`(opcional)`),Kg()(),Jc(869,`p`),Mk(870,`Define o ícone que será exibido no início do campo.`),Kg(),Jc(871,`p`),Mk(872,`É possível usar qualquer um dos ícones da `),Jc(873,`a`,50),Mk(874,`Biblioteca de ícones`),Kg(),Mk(875,`. conforme exemplo abaixo:`),Kg(),Jc(876,`pre`)(877,`code`),Mk(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),Kg()(),Jc(879,`p`),Mk(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(881,`em`),Mk(882,`Font Awesome`),Kg(),Mk(883,`, da seguinte forma:`),Kg(),Jc(884,`pre`)(885,`code`),Mk(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),Kg()(),Jc(887,`p`),Mk(888,`Outra opção seria a customização do ícone através do `),Jc(889,`code`),Mk(890,`TemplateRef`),Kg(),Mk(891,`, conforme exemplo abaixo:`),Kg(),Jc(892,`pre`)(893,`code`),Mk(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Jc(895,`blockquote`)(896,`p`),Mk(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(898,`code`),Mk(899,`font-size: inherit`),Kg(),Mk(900,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Jc(901,`tr`,51)(902,`td`,16)(903,`div`,17)(904,`span`,18),Mk(905,` (p-keydown)`),_u(906,`br`),Kg()()(),Jc(907,`td`,20)(908,`code`,21),Mk(909,`EventEmitter`),Kg()(),Jc(910,`td`,22),Mk(911,`-`),Kg(),Jc(912,`td`,23)(913,`em`)(914,`strong`),Mk(915,`(opcional)`),Kg()(),Jc(916,`p`),Mk(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(918,`code`),Mk(919,`KeyboardEvent`),Kg(),Mk(920,` com informações sobre a tecla.`),Kg()()(),Jc(921,`tr`,52)(922,`td`,16)(923,`div`,25)(924,`span`,26),Mk(925,` p-label`),_u(926,`br`),Kg()()(),Jc(927,`td`,20)(928,`code`,27),Mk(929,`string`),Kg()(),Jc(930,`td`,22),Mk(931,`-`),Kg(),Jc(932,`td`,23)(933,`em`)(934,`strong`),Mk(935,`(opcional)`),Kg()(),Jc(936,`p`),Mk(937,`Rótulo do campo.`),Kg()()(),Jc(938,`tr`,53)(939,`td`,16)(940,`div`,25)(941,`span`,26),Mk(942,` p-label-text-wrap`),_u(943,`br`),Kg()()(),Jc(944,`td`,20)(945,`code`,29),Mk(946,`boolean`),Kg()(),Jc(947,`td`,22)(948,`p`)(949,`code`),Mk(950,`false`),Kg()()(),Jc(951,`td`,23)(952,`em`)(953,`strong`),Mk(954,`(opcional)`),Kg()(),Jc(955,`p`),Mk(956,`Habilita a quebra automática do texto da propriedade `),Jc(957,`code`),Mk(958,`p-label`),Kg(),Mk(959,`. Quando `),Jc(960,`code`),Mk(961,`p-label-text-wrap`),Kg(),Mk(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(963,`tr`,54)(964,`td`,16)(965,`div`,25)(966,`span`,26),Mk(967,` p-loading`),_u(968,`br`),Kg()()(),Jc(969,`td`,20)(970,`code`,29),Mk(971,`boolean`),Kg()(),Jc(972,`td`,22)(973,`p`)(974,`code`),Mk(975,`false`),Kg()()(),Jc(976,`td`,23)(977,`em`)(978,`strong`),Mk(979,`(opcional)`),Kg()(),Jc(980,`p`),Mk(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Jc(982,`tr`,55)(983,`td`,16)(984,`div`,25)(985,`span`,26),Mk(986,` p-locale`),_u(987,`br`),Kg()()(),Jc(988,`td`,20)(989,`code`,27),Mk(990,`string`),Kg()(),Jc(991,`td`,22),Mk(992,`-`),Kg(),Jc(993,`td`,23)(994,`em`)(995,`strong`),Mk(996,`(opcional)`),Kg()(),Jc(997,`p`),Mk(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Jc(999,`a`,56)(1e3,`code`),Mk(1001,`I18n`),Kg()()(),Jc(1002,`blockquote`)(1003,`p`),Mk(1004,`Para ver quais linguagens suportadas acesse `),Jc(1005,`a`,56)(1006,`code`),Mk(1007,`I18n`),Kg()()()()()(),Jc(1008,`tr`,57)(1009,`td`,16)(1010,`div`,25)(1011,`span`,26),Mk(1012,`p-mask`),_u(1013,`br`),Kg()()(),Jc(1014,`td`,20)(1015,`code`,27),Mk(1016,`string`),Kg()(),Jc(1017,`td`,22),Mk(1018,`-`),Kg(),Jc(1019,`td`,23)(1020,`em`)(1021,`strong`),Mk(1022,`(opcional)`),Kg()(),Jc(1023,`p`),Mk(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),Kg()()(),Jc(1025,`tr`,58)(1026,`td`,16)(1027,`div`,25)(1028,`span`,26),Mk(1029,`p-mask-format-model`),_u(1030,`br`),Kg()()(),Jc(1031,`td`,20)(1032,`code`,29),Mk(1033,`boolean`),Kg()(),Jc(1034,`td`,22)(1035,`p`)(1036,`code`),Mk(1037,`false`),Kg()()(),Jc(1038,`td`,23)(1039,`em`)(1040,`strong`),Mk(1041,`(opcional)`),Kg()(),Jc(1042,`p`),Mk(1043,`Indica se o `),Jc(1044,`code`),Mk(1045,`model`),Kg(),Mk(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),Kg()()(),Jc(1047,`tr`,59)(1048,`td`,16)(1049,`div`,25)(1050,`span`,26),Mk(1051,` p-mask-no-length-validation`),_u(1052,`br`),Kg()()(),Jc(1053,`td`,20)(1054,`code`,29),Mk(1055,`boolean`),Kg()(),Jc(1056,`td`,22)(1057,`p`)(1058,`code`),Mk(1059,`false`),Kg()()(),Jc(1060,`td`,23)(1061,`p`),Mk(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),Jc(1063,`code`),Mk(1064,`minLength`),Kg(),Mk(1065,`) e máximo (`),Jc(1066,`code`),Mk(1067,`maxLength`),Kg(),Mk(1068,`) quando há uma máscara (`),Jc(1069,`code`),Mk(1070,`p-mask`),Kg(),Mk(1071,`) definida.`),Kg(),Jc(1072,`ul`)(1073,`li`),Mk(1074,`Quando `),Jc(1075,`code`),Mk(1076,`true`),Kg(),Mk(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Kg(),Jc(1078,`li`),Mk(1079,`Quando `),Jc(1080,`code`),Mk(1081,`false`),Kg(),Mk(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Kg()(),Jc(1083,`blockquote`)(1084,`p`),Mk(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),Jc(1086,`code`),Mk(1087,`p-mask-format-model`),Kg(),Mk(1088,`.`),Kg()(),Jc(1089,`p`),Mk(1090,`Exemplo:`),Kg(),Jc(1091,`pre`)(1092,`code`),Mk(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),Kg()(),Jc(1094,`ul`)(1095,`li`),Mk(1096,`Entrada: `),Jc(1097,`code`),Mk(1098,`123-456`),Kg(),Mk(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Jc(1100,`code`),Mk(1101,`-`),Kg(),Mk(1102,`.`),Kg()()()(),Jc(1103,`tr`,60)(1104,`td`,16)(1105,`div`,25)(1106,`span`,26),Mk(1107,` p-max`),_u(1108,`br`),Kg()()(),Jc(1109,`td`,20)(1110,`code`,37),Mk(1111,`number`),Kg()(),Jc(1112,`td`,22),Mk(1113,`-`),Kg(),Jc(1114,`td`,23)(1115,`em`)(1116,`strong`),Mk(1117,`(opcional)`),Kg()(),Jc(1118,`p`),Mk(1119,`Valor máximo.`),Kg()()(),Jc(1120,`tr`,61)(1121,`td`,16)(1122,`div`,25)(1123,`span`,26),Mk(1124,` p-maxlength`),_u(1125,`br`),Kg()()(),Jc(1126,`td`,20)(1127,`code`,37),Mk(1128,`number`),Kg()(),Jc(1129,`td`,22),Mk(1130,`-`),Kg(),Jc(1131,`td`,23)(1132,`em`)(1133,`strong`),Mk(1134,`(opcional)`),Kg()(),Jc(1135,`p`),Mk(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),Kg()()(),Jc(1137,`tr`,62)(1138,`td`,16)(1139,`div`,25)(1140,`span`,26),Mk(1141,` p-min`),_u(1142,`br`),Kg()()(),Jc(1143,`td`,20)(1144,`code`,37),Mk(1145,`number`),Kg()(),Jc(1146,`td`,22),Mk(1147,`-`),Kg(),Jc(1148,`td`,23)(1149,`em`)(1150,`strong`),Mk(1151,`(opcional)`),Kg()(),Jc(1152,`p`),Mk(1153,`Valor mínimo.`),Kg()()(),Jc(1154,`tr`,63)(1155,`td`,16)(1156,`div`,25)(1157,`span`,26),Mk(1158,` p-minlength`),_u(1159,`br`),Kg()()(),Jc(1160,`td`,20)(1161,`code`,37),Mk(1162,`number`),Kg()(),Jc(1163,`td`,22),Mk(1164,`-`),Kg(),Jc(1165,`td`,23)(1166,`em`)(1167,`strong`),Mk(1168,`(opcional)`),Kg()(),Jc(1169,`p`),Mk(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),Kg()()(),Jc(1171,`tr`,64)(1172,`td`,16)(1173,`div`,25)(1174,`span`,26),Mk(1175,` name`),_u(1176,`br`),Kg()()(),Jc(1177,`td`,20)(1178,`code`,27),Mk(1179,`string`),Kg()(),Jc(1180,`td`,22),Mk(1181,`-`),Kg(),Jc(1182,`td`,23)(1183,`p`),Mk(1184,`Nome e identificador do campo.`),Kg()()(),Jc(1185,`tr`,65)(1186,`td`,16)(1187,`div`,25)(1188,`span`,26),Mk(1189,` p-no-autocomplete`),_u(1190,`br`),Kg()()(),Jc(1191,`td`,20)(1192,`code`,29),Mk(1193,`boolean`),Kg()(),Jc(1194,`td`,22)(1195,`p`)(1196,`code`),Mk(1197,`false`),Kg()()(),Jc(1198,`td`,23)(1199,`em`)(1200,`strong`),Mk(1201,`(opcional)`),Kg()(),Jc(1202,`p`),Mk(1203,`Define a propriedade nativa `),Jc(1204,`code`),Mk(1205,`autocomplete`),Kg(),Mk(1206,` do campo como `),Jc(1207,`code`),Mk(1208,`off`),Kg(),Mk(1209,`.`),Kg(),Jc(1210,`blockquote`)(1211,`p`),Mk(1212,`No componente `),Jc(1213,`code`),Mk(1214,`po-password`),Kg(),Mk(1215,` será definido como `),Jc(1216,`code`),Mk(1217,`new-password`),Kg(),Mk(1218,`.`),Kg()(),Jc(1219,`p`),Mk(1220,`Nos componentes `),Jc(1221,`code`),Mk(1222,`po-password`),Kg(),Mk(1223,` e `),Jc(1224,`code`),Mk(1225,`po-login`),Kg(),Mk(1226,` o valor padrão será `),Jc(1227,`code`),Mk(1228,`true`),Kg(),Mk(1229,`.`),Kg()()(),Jc(1230,`tr`,66)(1231,`td`,16)(1232,`div`,25)(1233,`span`,26),Mk(1234,` p-optional`),_u(1235,`br`),Kg()()(),Jc(1236,`td`,20)(1237,`code`,29),Mk(1238,`boolean`),Kg()(),Jc(1239,`td`,22)(1240,`p`)(1241,`code`),Mk(1242,`false`),Kg()()(),Jc(1243,`td`,23)(1244,`em`)(1245,`strong`),Mk(1246,`(opcional)`),Kg()(),Jc(1247,`p`),Mk(1248,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(1249,`blockquote`)(1250,`p`),Mk(1251,`Não será exibida a indicação se:`),Kg()(),Jc(1252,`ul`)(1253,`li`),Mk(1254,`O campo conter `),Jc(1255,`code`),Mk(1256,`p-required`),Kg(),Mk(1257,`;`),Kg(),Jc(1258,`li`),Mk(1259,`Não possuir `),Jc(1260,`code`),Mk(1261,`p-help`),Kg(),Mk(1262,` e/ou `),Jc(1263,`code`),Mk(1264,`p-label`),Kg(),Mk(1265,`.`),Kg()()()(),Jc(1266,`tr`,67)(1267,`td`,16)(1268,`div`,25)(1269,`span`,26),Mk(1270,`p-pattern`),_u(1271,`br`),Kg()()(),Jc(1272,`td`,20)(1273,`code`,27),Mk(1274,`string`),Kg()(),Jc(1275,`td`,22),Mk(1276,`-`),Kg(),Jc(1277,`td`,23)(1278,`em`)(1279,`strong`),Mk(1280,`(opcional)`),Kg()(),Jc(1281,`p`),Mk(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Jc(1283,`code`),Mk(1284,`(p-mask)`),Kg(),Mk(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),Kg()()(),Jc(1286,`tr`,68)(1287,`td`,16)(1288,`div`,25)(1289,`span`,26),Mk(1290,` p-placeholder`),_u(1291,`br`),Kg()()(),Jc(1292,`td`,20)(1293,`code`,27),Mk(1294,`string`),Kg()(),Jc(1295,`td`,22)(1296,`p`),Mk(1297,`''`),Kg()(),Jc(1298,`td`,23)(1299,`em`)(1300,`strong`),Mk(1301,`(opcional)`),Kg()(),Jc(1302,`p`),Mk(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Jc(1304,`tr`,69)(1305,`td`,16)(1306,`div`,25)(1307,`span`,26),Mk(1308,` p-helper`),_u(1309,`br`),Kg()()(),Jc(1310,`td`,20)(1311,`code`,70),Mk(1312,`PoHelperOptions `),Kg(),Jc(1313,`code`,27),Mk(1314,` string`),Kg()(),Jc(1315,`td`,22),Mk(1316,`-`),Kg(),Jc(1317,`td`,23)(1318,`em`)(1319,`strong`),Mk(1320,`(opcional)`),Kg()(),Jc(1321,`p`),Mk(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1323,`code`),Mk(1324,`p-label`),Kg(),Mk(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1326,`code`),Mk(1327,`p-label`),Kg(),Mk(1328,`.`),Kg(),Jc(1329,`blockquote`)(1330,`p`),Mk(1331,`Para mais informações acesse: `),Jc(1332,`a`,71),Mk(1333,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(1334,`.`),Kg()(),Jc(1335,`blockquote`)(1336,`p`),Mk(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1338,`code`),Mk(1339,`p-additional-help-tooltip`),Kg(),Mk(1340,` e `),Jc(1341,`code`),Mk(1342,`p-additional-help`),Kg(),Mk(1343,`) será ignorado.`),Kg()()()(),Jc(1344,`tr`,72)(1345,`td`,16)(1346,`div`,25)(1347,`span`,26),Mk(1348,`p-readonly`),_u(1349,`br`),Kg()()(),Jc(1350,`td`,20)(1351,`code`,29),Mk(1352,`boolean`),Kg()(),Jc(1353,`td`,22),Mk(1354,`-`),Kg(),Jc(1355,`td`,23)(1356,`em`)(1357,`strong`),Mk(1358,`(opcional)`),Kg()(),Jc(1359,`p`),Mk(1360,`Indica que o campo será somente leitura.`),Kg()()(),Jc(1361,`tr`,73)(1362,`td`,16)(1363,`div`,25)(1364,`span`,26),Mk(1365,`p-required`),_u(1366,`br`),Kg()()(),Jc(1367,`td`,20)(1368,`code`,29),Mk(1369,`boolean`),Kg()(),Jc(1370,`td`,22)(1371,`p`)(1372,`code`),Mk(1373,`false`),Kg()()(),Jc(1374,`td`,23)(1375,`em`)(1376,`strong`),Mk(1377,`(opcional)`),Kg()(),Jc(1378,`p`),Mk(1379,`Define que o campo será obrigatório.`),Kg(),Jc(1380,`blockquote`)(1381,`p`),Mk(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),Jc(1383,`code`),Mk(1384,`(p-disabled)`),Kg(),Mk(1385,`.`),Kg()()()(),Jc(1386,`tr`,74)(1387,`td`,16)(1388,`div`,25)(1389,`span`,26),Mk(1390,` p-required-field-error-message`),_u(1391,`br`),Kg()()(),Jc(1392,`td`,20)(1393,`code`,29),Mk(1394,`boolean`),Kg()(),Jc(1395,`td`,22)(1396,`p`)(1397,`code`),Mk(1398,`false`),Kg()()(),Jc(1399,`td`,23)(1400,`em`)(1401,`strong`),Mk(1402,`(opcional)`),Kg()(),Jc(1403,`p`),Mk(1404,`Exibe a mensagem setada na propriedade `),Jc(1405,`code`),Mk(1406,`p-error-pattern`),Kg(),Mk(1407,` se o campo estiver vazio e for requerido.`),Kg(),Jc(1408,`blockquote`)(1409,`p`),Mk(1410,`Necessário que a propriedade `),Jc(1411,`code`),Mk(1412,`p-required`),Kg(),Mk(1413,` esteja habilitada.`),Kg()()()(),Jc(1414,`tr`,75)(1415,`td`,16)(1416,`div`,25)(1417,`span`,26),Mk(1418,` p-show-required`),_u(1419,`br`),Kg()()(),Jc(1420,`td`,20)(1421,`code`,29),Mk(1422,`boolean`),Kg()(),Jc(1423,`td`,22),Mk(1424,`-`),Kg(),Jc(1425,`td`,23)(1426,`p`),Mk(1427,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(1428,`blockquote`)(1429,`p`),Mk(1430,`Não será exibida a indicação se:`),Kg()(),Jc(1431,`ul`)(1432,`li`),Mk(1433,`Não possuir `),Jc(1434,`code`),Mk(1435,`p-help`),Kg(),Mk(1436,` e/ou `),Jc(1437,`code`),Mk(1438,`p-label`),Kg(),Mk(1439,`.`),Kg()()()(),Jc(1440,`tr`,76)(1441,`td`,16)(1442,`div`,25)(1443,`span`,26),Mk(1444,` p-size`),_u(1445,`br`),Kg()()(),Jc(1446,`td`,20)(1447,`code`,27),Mk(1448,`string`),Kg()(),Jc(1449,`td`,22)(1450,`p`)(1451,`code`),Mk(1452,`medium`),Kg()()(),Jc(1453,`td`,23)(1454,`em`)(1455,`strong`),Mk(1456,`(opcional)`),Kg()(),Jc(1457,`p`),Mk(1458,`Define o tamanho do componente:`),Kg(),Jc(1459,`ul`)(1460,`li`)(1461,`code`),Mk(1462,`small`),Kg(),Mk(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(1464,`li`)(1465,`code`),Mk(1466,`medium`),Kg(),Mk(1467,`: altura do input como 44px.`),Kg()(),Jc(1468,`blockquote`)(1469,`p`),Mk(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1471,`code`),Mk(1472,`medium`),Kg(),Mk(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1474,`a`,77),Mk(1475,`po-theme`),Kg(),Mk(1476,`.`),Kg()()()(),Jc(1477,`tr`,78)(1478,`td`,16)(1479,`div`,25)(1480,`span`,26),Mk(1481,` p-thousand-maxlength`),_u(1482,`br`),Kg()()(),Jc(1483,`td`,20)(1484,`code`,37),Mk(1485,`number`),Kg()(),Jc(1486,`td`,22)(1487,`p`)(1488,`code`),Mk(1489,`13`),Kg()()(),Jc(1490,`td`,23)(1491,`em`)(1492,`strong`),Mk(1493,`(opcional)`),Kg()(),Jc(1494,`p`),Mk(1495,`Quantidade máxima de dígitos antes do separador decimal.`),Kg(),Jc(1496,`blockquote`)(1497,`p`)(1498,`strong`),Mk(1499,`Importante:`),Kg()()(),Jc(1500,`ul`)(1501,`li`),Mk(1502,`O valor máximo permitido é 13;`),Kg(),Jc(1503,`li`),Mk(1504,`A soma total de `),Jc(1505,`code`),Mk(1506,`p-decimals-length`),Kg(),Mk(1507,` com `),Jc(1508,`code`),Mk(1509,`p-thousand-maxlength`),Kg(),Mk(1510,` limita-se à 16;`),Kg(),Jc(1511,`li`),Mk(1512,`Esta propriedade sobrepõe o valor definido em `),Jc(1513,`code`),Mk(1514,`p-decimals-length`),Kg(),Mk(1515,`.`),Kg(),Jc(1516,`li`),Mk(1517,`Quando utilizado com `),Jc(1518,`code`),Mk(1519,`p-display-format`),Kg(),Mk(1520,`, será respeitado o valor `),Jc(1521,`strong`),Mk(1522,`mais restritivo`),Kg(),Mk(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),Kg()()()(),Jc(1524,`tr`,79)(1525,`td`,16)(1526,`div`,25)(1527,`span`,26),Mk(1528,` p-upper-case`),_u(1529,`br`),Kg()()(),Jc(1530,`td`,20)(1531,`code`,29),Mk(1532,`boolean`),Kg()(),Jc(1533,`td`,22),Mk(1534,`-`),Kg(),Jc(1535,`td`,23)(1536,`p`),Mk(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),Kg()()()(),Jc(1538,`h3`,11),Mk(1539,`Métodos`),Kg(),Jc(1540,`table`,80)(1541,`tr`,81)(1542,`th`,82)(1543,`div`,25)(1544,`h4`)(1545,`span`,26),Mk(1546,` showAdditionalHelp `),Kg()()()()(),Jc(1547,`tr`,23)(1548,`td`,23)(1549,`p`),Mk(1550,`Método que exibe `),Jc(1551,`code`),Mk(1552,`p-helper`),Kg(),Mk(1553,` ou executa a ação definida em `),Jc(1554,`code`),Mk(1555,`p-helper{eventOnClick}`),Kg(),Mk(1556,` ou em `),Jc(1557,`code`),Mk(1558,`p-additionalHelp`),Kg(),Mk(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1560,`code`),Mk(1561,`p-keydown`),Kg(),Mk(1562,`.`),Kg(),Jc(1563,`blockquote`)(1564,`p`),Mk(1565,`Exibe ou oculta o conteúdo do componente `),Jc(1566,`code`),Mk(1567,`po-helper`),Kg(),Mk(1568,` quando o componente estiver com foco.`),Kg()(),Jc(1569,`pre`)(1570,`code`),Mk(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Kg()(),Jc(1572,`pre`)(1573,`code`),Mk(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1575,`br`),Jc(1576,`table`,83)(1577,`tr`,81)(1578,`th`,82)(1579,`div`,25)(1580,`h4`)(1581,`span`,26),Mk(1582,` focus `),Kg()()()()(),Jc(1583,`tr`,23)(1584,`td`,23)(1585,`p`),Mk(1586,`Função que atribui foco ao componente.`),Kg(),Jc(1587,`p`),Mk(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(1589,`pre`)(1590,`code`),Mk(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),Kg()()()()(),_u(1592,`br`),Jc(1593,`h3`),Mk(1594,`Interfaces`),Kg(),Jc(1595,`h4`,84)(1596,`code`,5),Mk(1597,`ErrorAsyncProperties`),Kg()(),Jc(1598,`div`,2)(1599,`p`),Mk(1600,`Interface para realizar uma validação assíncrona no componente.`),Kg()(),Jc(1601,`h4`,11),Mk(1602,`Propriedades`),Kg(),Jc(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),Mk(1606,`Nome`),Kg(),Jc(1607,`th`,14),Mk(1608,`Tipo`),Kg(),Jc(1609,`th`,14),Mk(1610,`Descrição`),Kg()(),Jc(1611,`tr`,85)(1612,`td`,16)(1613,`div`,25)(1614,`span`,26),Mk(1615,` errorAsync`),_u(1616,`br`),Kg()()(),Jc(1617,`td`,20)(1618,`code`,86),Mk(1619,`(value) => Observable<boolean>`),Kg()(),Jc(1620,`td`,23)(1621,`p`),Mk(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(1623,`code`),Mk(1624,`change`),Kg(),Mk(1625,` ou `),Jc(1626,`code`),Mk(1627,`change-model`),Kg(),Mk(1628,`, dependendo do valor da propriedade `),Jc(1629,`code`),Mk(1630,`triggerMode`),Kg(),Mk(1631,`.`),Kg()()(),Jc(1632,`tr`,87)(1633,`td`,16)(1634,`div`,25)(1635,`span`,26),Mk(1636,` triggerMode`),_u(1637,`br`),Kg()()(),Jc(1638,`td`,20)(1639,`code`,88),Mk(1640,`'change' `),Kg(),Jc(1641,`code`,89),Mk(1642,` 'changeModel'`),Kg()(),Jc(1643,`td`,23)(1644,`em`)(1645,`strong`),Mk(1646,`(opcional)`),Kg()(),Jc(1647,`p`),Mk(1648,`Controla se o método será executado no disparo do output `),Jc(1649,`code`),Mk(1650,`change`),Kg(),Mk(1651,` ou `),Jc(1652,`code`),Mk(1653,`change-model`),Kg(),Mk(1654,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function We(l,Te){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-decimal-basic-view`)(2,`sample-po-decimal-labs-view`)(3,`sample-po-decimal-hourly-wage-view`)(4,`sample-po-decimal-hourly-wage-reactive-form-view`)(5,`sample-po-decimal-display-format-view`),Kg()),l&2){let m=tk();Ab(`hidden`,m.activeTab!==`web`)}}var Fe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Decimal`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Decimal · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0),LO(1,We,6,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-decimal-doc`),Kg()()),r&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,me,de,ce,ge,he,xe],encapsulation:2,changeDetection:1})}return l})()}];var be=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[GV.forChild(Fe),GV]})}return l})();var bt=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[M,be]})}return l})();export{bt as DocPoDecimalModule};