import{m as P,p as M}from"./main-5ZHUK4IE.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,k as Goe,li as Qc,ln as joe,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var le=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`password`,`p-label`,`PO Password`]],template:function(l,o){l&1&&vu(0,`po-password`,0)},dependencies:[joe],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-password-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Password Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-password-basic/sample-po-password-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-password-basic/sample-po-password-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-password-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,he,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,le],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`hidepasswordpeek`,label:`Hide Password Peek`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern=``,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-labs`]],standalone:!1,decls:20,vars:37,consts:[[`f`,`ngForm`],[`name`,`password`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-hide-password-peek`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '[a-zA]{5}[Z0-9]{3}'`,`p-label`,`Pattern (Regex)`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=YO();Qc(0,`po-password`,1),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.password,r)||(o.password=r),U_(r)}),vt(`p-blur`,function(){return o.changeEvent(`p-blur`)})(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-enter`,function(){return o.changeEvent(`p-enter`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.label,r)||(o.label=r),U_(r)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.help,r)||(o.help=r),U_(r)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.helperText,r)||(o.helperText=r),U_(r)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.placeholder,r)||(o.placeholder=r),U_(r)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.errorPattern,r)||(o.errorPattern=r),U_(r)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.pattern,r)||(o.pattern=r),U_(r)}),Kg(),Qc(14,`po-number`,11),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.minlength,r)||(o.minlength=r),U_(r)}),Kg(),Qc(15,`po-number`,12),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.maxlength,r)||(o.maxlength=r),U_(r)}),Kg(),Qc(16,`po-checkbox-group`,13),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.properties,r)||(o.properties=r),U_(r)}),Kg(),Qc(17,`po-radio-group`,14),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.size,r)||(o.size=r),U_(r)}),Kg(),Qc(18,`div`,2)(19,`po-button`,15),vt(`p-click`,function(){return o.restore()}),Kg()()()}l&2&&(Yb(`ngModel`,o.password),Rb(`p-helper`,o.helperText)(`p-clean`,o.properties.includes(`clean`))(`p-disabled`,o.properties.includes(`disabled`))(`p-error-pattern`,o.errorPattern)(`p-help`,o.help)(`p-hide-password-peek`,o.properties.includes(`hidepasswordpeek`))(`p-label`,o.label)(`p-loading`,o.properties?.includes(`loading`))(`p-maxlength`,o.maxlength)(`p-minlength`,o.minlength)(`p-no-autocomplete`,o.properties?.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-pattern`,o.pattern)(`p-placeholder`,o.placeholder)(`p-readonly`,o.properties.includes(`readonly`))(`p-required`,o.properties.includes(`required`))(`p-required-field-error-message`,o.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),W0(),wg(3),Rb(`p-value`,o.password),wg(),Rb(`p-value`,o.event),wg(4),Yb(`ngModel`,o.label),W0(),wg(),Yb(`ngModel`,o.help),W0(),wg(),Yb(`ngModel`,o.helperText),W0(),wg(),Yb(`ngModel`,o.placeholder),W0(),wg(),Yb(`ngModel`,o.errorPattern),W0(),wg(),Yb(`ngModel`,o.pattern),W0(),wg(),Yb(`ngModel`,o.minlength),W0(),wg(),Yb(`ngModel`,o.maxlength),W0(),wg(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),W0(),wg(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Goe,joe,Zte,Joe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-password-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Password Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-password-labs/sample-po-password-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-password-labs/sample-po-password-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-password-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ve,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{poAlert=p(sie);confirmNewPassword;currentPassword;errorPattern;help=`Initial password = 123456`;newPassword;password=`123456`;setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:`Password Reset`,message:`Password saved successfully`,ok:()=>this.reset()})):this.poAlert.alert({title:`Password Error`,message:`Your (new passsword) is different of (confirm new password)`,ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-reset`]],standalone:!1,features:[we([sie])],decls:7,vars:7,consts:[[`passwordForm`,`ngForm`],[`name`,`currentPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Current Password`,`p-mask`,`999999`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-help`],[`name`,`newPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`New password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`confirmNewPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Confirm New Password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let s=YO();Qc(0,`form`,null,0)(2,`po-password`,1),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.currentPassword,r)||(o.currentPassword=r),U_(r)}),Kg(),Qc(3,`po-password`,2),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.newPassword,r)||(o.newPassword=r),U_(r)}),Kg(),Qc(4,`po-password`,3),z0(),Kb(`ngModelChange`,function(r){return B_(s),Tk(o.confirmNewPassword,r)||(o.confirmNewPassword=r),U_(r)}),Kg(),Qc(5,`div`,4)(6,`po-button`,5),vt(`p-click`,function(){return o.setPassword()}),Kg()()()}if(l&2){let s=ik(1);wg(2),Yb(`ngModel`,o.currentPassword),Rb(`p-help`,o.help),W0(),wg(),Yb(`ngModel`,o.newPassword),Rb(`p-disabled`,o.currentPassword!==o.password),W0(),wg(),Yb(`ngModel`,o.confirmNewPassword),Rb(`p-disabled`,o.currentPassword!==o.password),W0(),wg(2),Rb(`p-disabled`,s.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,joe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-reset-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-password-reset`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Password - Reset`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-password-reset/sample-po-password-reset.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-password-reset/sample-po-password-reset.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-password-reset`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-password-doc`]],standalone:!1,decls:1376,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-password-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-clean`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-emit-all-changes`,1,`docs-api-properties-row`],[`id`,`event-p-enter`,1,`docs-api-properties-row`],[`id`,`prop-p-error-async-properties`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-error-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-password-peek`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-mask`,1,`docs-api-properties-row`],[`id`,`prop-p-mask-format-model`,1,`docs-api-properties-row`],[`id`,`prop-p-mask-no-length-validation`,1,`docs-api-properties-row`],[`id`,`prop-p-maxlength`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-minlength`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-pattern`,1,`docs-api-properties-row`],[`id`,`prop-p-placeholder`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-readonly`,1,`docs-api-properties-row`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-required-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-upper-case`,1,`docs-api-properties-row`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[`id`,`interface-error-async-properties`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-error-async-properties-error-async`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`id`,`interface-error-async-properties-trigger-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoPasswordComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),Kg(),Qc(24,`p`),Sk(25,`Importante:`),Kg(),Qc(26,`ul`)(27,`li`),Sk(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),Kg()(),Qc(29,`h4`),Sk(30,`Tokens customizáveis`),Kg(),Qc(31,`p`),Sk(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),vu(33,`br`),Sk(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Qc(35,`code`),Sk(36,`.po-input`),Kg()(),Qc(37,`blockquote`)(38,`p`),Sk(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Qc(40,`a`,6),Sk(41,`Grid System`),Kg(),Sk(42,`.`),Kg()(),Qc(43,`blockquote`)(44,`p`),Sk(45,`Para maiores informações, acesse o guia `),Qc(46,`a`,7),Sk(47,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(48,`.`),Kg()(),Qc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),Sk(53,`Propriedade`),Kg(),Qc(54,`th`),Sk(55,`Descrição`),Kg(),Qc(56,`th`),Sk(57,`Valor Padrão`),Kg()()(),Qc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),Sk(62,`Default Values`),Kg()(),vu(63,`td`)(64,`td`),Kg(),Qc(65,`tr`)(66,`td`)(67,`code`),Sk(68,`--font-family`),Kg()(),Qc(69,`td`),Sk(70,`Família tipográfica usada`),Kg(),Qc(71,`td`)(72,`code`),Sk(73,`var(--font-family-theme)`),Kg()()(),Qc(74,`tr`)(75,`td`)(76,`code`),Sk(77,`--font-size`),Kg()(),Qc(78,`td`),Sk(79,`Tamanho da fonte`),Kg(),Qc(80,`td`)(81,`code`),Sk(82,`var(--font-size-default)`),Kg()()(),Qc(83,`tr`)(84,`td`)(85,`code`),Sk(86,`--text-color-placeholder`),Kg()(),Qc(87,`td`),Sk(88,`Cor do texto placeholder`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--color-neutral-light-30)`),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--color`),Kg()(),Qc(96,`td`),Sk(97,`Cor pincipal do input`),Kg(),Qc(98,`td`)(99,`code`),Sk(100,`var(--color-neutral-dark-70)`),Kg()()(),Qc(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--background`),Kg()(),Qc(105,`td`),Sk(106,`Cor de background`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--color-neutral-light-05)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`code`),Sk(113,`--padding`),Kg()(),Qc(114,`td`),Sk(115,`Preenchimento`),Kg(),Qc(116,`td`)(117,`code`),Sk(118,`0 0.5rem`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`code`),Sk(122,`--text-color`),Kg()(),Qc(123,`td`),Sk(124,`Cor do texto`),Kg(),Qc(125,`td`)(126,`code`),Sk(127,`var(--color-neutral-dark-90)`),Kg()()(),Qc(128,`tr`)(129,`td`)(130,`code`),Sk(131,`--field-container-title-justify`),Kg()(),Qc(132,`td`),Sk(133,`Alinhamento horizontal do título (`),Qc(134,`code`),Sk(135,`justify-content`),Kg(),Sk(136,`)`),Kg(),Qc(137,`td`)(138,`code`),Sk(139,`space-between`),Kg()()(),Qc(140,`tr`)(141,`td`)(142,`code`),Sk(143,`--field-container-title-flex`),Kg()(),Qc(144,`td`),Sk(145,`Flex do título (`),Qc(146,`code`),Sk(147,`flex`),Kg(),Sk(148,`)`),Kg(),Qc(149,`td`)(150,`code`),Sk(151,`1 auto`),Kg()()(),Qc(152,`tr`)(153,`td`)(154,`strong`),Sk(155,`Hover`),Kg()(),vu(156,`td`)(157,`td`),Kg(),Qc(158,`tr`)(159,`td`)(160,`code`),Sk(161,`--color-hover`),Kg()(),Qc(162,`td`),Sk(163,`Cor principal no estado hover`),Kg(),Qc(164,`td`)(165,`code`),Sk(166,`var(--color-brand-01-dark)`),Kg()()(),Qc(167,`tr`)(168,`td`)(169,`code`),Sk(170,`--background-hover`),Kg()(),Qc(171,`td`),Sk(172,`Cor de background no estado hover`),Kg(),Qc(173,`td`)(174,`code`),Sk(175,`var(--color-brand-01-lightest)`),Kg()()(),Qc(176,`tr`)(177,`td`)(178,`strong`),Sk(179,`Focused`),Kg()(),vu(180,`td`)(181,`td`),Kg(),Qc(182,`tr`)(183,`td`)(184,`code`),Sk(185,`--color-focused`),Kg()(),Qc(186,`td`),Sk(187,`Cor principal no estado de focus`),Kg(),Qc(188,`td`)(189,`code`),Sk(190,`var(--color-action-default)`),Kg()()(),Qc(191,`tr`)(192,`td`)(193,`code`),Sk(194,`--outline-color-focused`),Kg()(),Qc(195,`td`),Sk(196,`Cor do outline do estado de focus`),Kg(),Qc(197,`td`)(198,`code`),Sk(199,`var(--color-action-focus)`),Kg()()(),Qc(200,`tr`)(201,`td`)(202,`strong`),Sk(203,`Disabled`),Kg()(),vu(204,`td`)(205,`td`),Kg(),Qc(206,`tr`)(207,`td`)(208,`code`),Sk(209,`--color-disabled`),Kg()(),Qc(210,`td`),Sk(211,`Cor principal no estado disabled`),Kg(),Qc(212,`td`)(213,`code`),Sk(214,`var(--color-neutral-light-30)`),Kg()()(),Qc(215,`tr`)(216,`td`)(217,`code`),Sk(218,`--background-disabled`),Kg()(),Qc(219,`td`),Sk(220,`Cor de background no estado disabled`),Kg(),Qc(221,`td`)(222,`code`),Sk(223,`var(--color-neutral-light-20)`),Kg()()(),Qc(224,`tr`)(225,`td`)(226,`code`),Sk(227,`--text-color-disabled`),Kg()(),Qc(228,`td`),Sk(229,`Cor do texto no estado disabled`),Kg(),Qc(230,`td`)(231,`code`),Sk(232,`var(--color-neutral-dark-70)`),Kg()()()()(),Qc(233,`p`),vu(234,`br`),Sk(235,` O `),Qc(236,`code`),Sk(237,`po-password`),Kg(),Sk(238,` é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.`),Kg()(),Qc(239,`div`,8)(240,`h4`,9),Sk(241,`Seletor`),Kg(),Qc(242,`pre`,10),Sk(243,`<po-password
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
    p-hide-password-peek="boolean"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-password>
`),Kg()(),Qc(244,`h4`,11),Sk(245,`Propriedades`),Kg(),Qc(246,`table`,12)(247,`tr`,13)(248,`th`,14),Sk(249,`Nome`),Kg(),Qc(250,`th`,14),Sk(251,`Tipo`),Kg(),Qc(252,`th`,14),Sk(253,`Padrão`),Kg(),Qc(254,`th`,14),Sk(255,`Descrição`),Kg()(),Qc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),Sk(260,` (p-additional-help)`),vu(261,`br`),Kg()(),Qc(262,`div`,19),Sk(263,`Deprecated`),Kg()(),Qc(264,`td`,20)(265,`code`,21),Sk(266,`EventEmitter`),Kg()(),Qc(267,`td`,22),Sk(268,`-`),Kg(),Qc(269,`td`,23)(270,`em`)(271,`strong`),Sk(272,`(opcional)`),Kg()(),Qc(273,`p`),Sk(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(275,`blockquote`)(276,`p`),Sk(277,`Essa propriedade está `),Qc(278,`strong`),Sk(279,`depreciada`),Kg(),Sk(280,` e será removida na versão `),Qc(281,`code`),Sk(282,`23.x.x`),Kg(),Sk(283,`. Recomendamos utilizar a propriedade `),Qc(284,`code`),Sk(285,`p-helper`),Kg(),Sk(286,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(287,`tr`,24)(288,`td`,16)(289,`div`,25)(290,`span`,26),Sk(291,` p-additional-help-tooltip`),vu(292,`br`),Kg()(),Qc(293,`div`,19),Sk(294,`Deprecated`),Kg()(),Qc(295,`td`,20)(296,`code`,27),Sk(297,`string`),Kg()(),Qc(298,`td`,22),Sk(299,`-`),Kg(),Qc(300,`td`,23)(301,`em`)(302,`strong`),Sk(303,`(opcional)`),Kg()(),Qc(304,`p`),Sk(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(306,`code`),Sk(307,`po-helper`),Kg(),Sk(308,`.
`),Qc(309,`strong`),Sk(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(311,`blockquote`)(312,`p`),Sk(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(314,`blockquote`)(315,`p`),Sk(316,`Essa propriedade está `),Qc(317,`strong`),Sk(318,`depreciada`),Kg(),Sk(319,` e será removida na versão `),Qc(320,`code`),Sk(321,`23.x.x`),Kg(),Sk(322,`. Recomendamos utilizar a propriedade `),Qc(323,`code`),Sk(324,`p-helper`),Kg(),Sk(325,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(326,`tr`,28)(327,`td`,16)(328,`div`,25)(329,`span`,26),Sk(330,` p-append-in-body`),vu(331,`br`),Kg()()(),Qc(332,`td`,20)(333,`code`,29),Sk(334,`boolean`),Kg()(),Qc(335,`td`,22)(336,`p`)(337,`code`),Sk(338,`false`),Kg()()(),Qc(339,`td`,23)(340,`em`)(341,`strong`),Sk(342,`(opcional)`),Kg()(),Qc(343,`p`),Sk(344,`Define que o popover (`),Qc(345,`code`),Sk(346,`p-helper`),Kg(),Sk(347,` e/ou `),Qc(348,`code`),Sk(349,`p-error-limit`),Kg(),Sk(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(351,`blockquote`)(352,`p`),Sk(353,`Quando utilizado com `),Qc(354,`code`),Sk(355,`p-helper`),Kg(),Sk(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(357,`tr`,30)(358,`td`,16)(359,`div`,25)(360,`span`,26),Sk(361,` p-auto-focus`),vu(362,`br`),Kg()()(),Qc(363,`td`,20)(364,`code`,29),Sk(365,`boolean`),Kg()(),Qc(366,`td`,22)(367,`p`)(368,`code`),Sk(369,`false`),Kg()()(),Qc(370,`td`,23)(371,`em`)(372,`strong`),Sk(373,`(opcional)`),Kg()(),Qc(374,`p`),Sk(375,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(376,`blockquote`)(377,`p`),Sk(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(379,`tr`,31)(380,`td`,16)(381,`div`,17)(382,`span`,18),Sk(383,` (p-blur)`),vu(384,`br`),Kg()()(),Qc(385,`td`,20)(386,`code`,21),Sk(387,`EventEmitter`),Kg()(),Qc(388,`td`,22),Sk(389,`-`),Kg(),Qc(390,`td`,23)(391,`em`)(392,`strong`),Sk(393,`(opcional)`),Kg()(),Qc(394,`p`),Sk(395,`Evento disparado ao sair do campo.`),Kg()()(),Qc(396,`tr`,32)(397,`td`,16)(398,`div`,17)(399,`span`,18),Sk(400,` (p-change)`),vu(401,`br`),Kg()()(),Qc(402,`td`,20)(403,`code`,21),Sk(404,`EventEmitter`),Kg()(),Qc(405,`td`,22),Sk(406,`-`),Kg(),Qc(407,`td`,23)(408,`em`)(409,`strong`),Sk(410,`(opcional)`),Kg()(),Qc(411,`p`),Sk(412,`Evento disparado ao alterar valor e deixar o campo.`),Kg()()(),Qc(413,`tr`,33)(414,`td`,16)(415,`div`,17)(416,`span`,18),Sk(417,` (p-change-model)`),vu(418,`br`),Kg()()(),Qc(419,`td`,20)(420,`code`,21),Sk(421,`EventEmitter`),Kg()(),Qc(422,`td`,22),Sk(423,`-`),Kg(),Qc(424,`td`,23)(425,`em`)(426,`strong`),Sk(427,`(opcional)`),Kg()(),Qc(428,`p`),Sk(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(430,`code`),Sk(431,`setValue`),Kg(),Sk(432,`, `),Qc(433,`code`),Sk(434,`patchValue`),Kg(),Sk(435,`, carregamento assíncrono).`),Kg(),Qc(436,`p`),Sk(437,`Diferentemente do `),Qc(438,`code`),Sk(439,`p-change`),Kg(),Sk(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(441,`code`),Sk(442,`p-change-model`),Kg(),Sk(443,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(444,`p`),Sk(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(446,`tr`,34)(447,`td`,16)(448,`div`,25)(449,`span`,26),Sk(450,`p-clean`),vu(451,`br`),Kg()()(),Qc(452,`td`,20)(453,`code`,29),Sk(454,`boolean`),Kg()(),Qc(455,`td`,22),Sk(456,`-`),Kg(),Qc(457,`td`,23)(458,`em`)(459,`strong`),Sk(460,`(opcional)`),Kg()(),Qc(461,`p`),Sk(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Kg()()(),Qc(463,`tr`,35)(464,`td`,16)(465,`div`,25)(466,`span`,26),Sk(467,` p-compact-label`),vu(468,`br`),Kg()()(),Qc(469,`td`,20)(470,`code`,29),Sk(471,`boolean`),Kg()(),Qc(472,`td`,22)(473,`p`)(474,`code`),Sk(475,`false`),Kg()()(),Qc(476,`td`,23)(477,`em`)(478,`strong`),Sk(479,`(opcional)`),Kg()(),Qc(480,`p`),Sk(481,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(482,`p`),Sk(483,`Quando habilitado (`),Qc(484,`code`),Sk(485,`true`),Kg(),Sk(486,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(487,`ul`)(488,`li`)(489,`code`),Sk(490,`po-label`),Kg()(),Qc(491,`li`)(492,`code`),Sk(493,`p-requirement (showRequired)`),Kg()(),Qc(494,`li`)(495,`code`),Sk(496,`po-helper`),Kg()()(),Qc(497,`p`),Sk(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(499,`p`),Sk(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(501,`ul`)(502,`li`)(503,`code`),Sk(504,`--field-container-title-justify`),Kg()(),Qc(505,`li`)(506,`code`),Sk(507,`--field-container-title-flex`),Kg()()(),Qc(508,`p`),Sk(509,`Exemplo:`),Kg(),Qc(510,`pre`)(511,`code`),Sk(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(513,`p`),Sk(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(515,`tr`,36)(516,`td`,16)(517,`div`,25)(518,`span`,26),Sk(519,`p-disabled`),vu(520,`br`),Kg()()(),Qc(521,`td`,20)(522,`code`,29),Sk(523,`boolean`),Kg()(),Qc(524,`td`,22)(525,`p`)(526,`code`),Sk(527,`false`),Kg()()(),Qc(528,`td`,23)(529,`em`)(530,`strong`),Sk(531,`(opcional)`),Kg()(),Qc(532,`p`),Sk(533,`Se verdadeiro, desabilita o campo.`),Kg()()(),Qc(534,`tr`,37)(535,`td`,16)(536,`div`,25)(537,`span`,26),Sk(538,` p-emit-all-changes`),vu(539,`br`),Kg()()(),Qc(540,`td`,20)(541,`code`,29),Sk(542,`boolean`),Kg()(),Qc(543,`td`,22)(544,`p`)(545,`code`),Sk(546,`false`),Kg()()(),Qc(547,`td`,23)(548,`em`)(549,`strong`),Sk(550,`(opcional)`),Kg()(),Qc(551,`p`),Sk(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),Kg()()(),Qc(553,`tr`,38)(554,`td`,16)(555,`div`,17)(556,`span`,18),Sk(557,` (p-enter)`),vu(558,`br`),Kg()()(),Qc(559,`td`,20)(560,`code`,21),Sk(561,`EventEmitter`),Kg()(),Qc(562,`td`,22),Sk(563,`-`),Kg(),Qc(564,`td`,23)(565,`em`)(566,`strong`),Sk(567,`(opcional)`),Kg()(),Qc(568,`p`),Sk(569,`Evento disparado ao entrar do campo.`),Kg()()(),Qc(570,`tr`,39)(571,`td`,16)(572,`div`,25)(573,`span`,26),Sk(574,` p-error-async-properties`),vu(575,`br`),Kg()()(),Qc(576,`td`,20)(577,`code`,40),Sk(578,`ErrorAsyncProperties`),Kg()(),Qc(579,`td`,22),Sk(580,`-`),Kg(),Qc(581,`td`,23)(582,`em`)(583,`strong`),Sk(584,`(opcional)`),Kg()(),Qc(585,`p`),Sk(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Qc(587,`code`),Sk(588,`Reactive Forms`),Kg(),Sk(589,`. Em formulários reativos, pode-se utilizar o próprio `),Qc(590,`code`),Sk(591,`asyncValidators`),Kg(),Sk(592,`.`),Kg()()(),Qc(593,`tr`,41)(594,`td`,16)(595,`div`,25)(596,`span`,26),Sk(597,` p-error-limit`),vu(598,`br`),Kg()()(),Qc(599,`td`,20)(600,`code`,29),Sk(601,`boolean`),Kg()(),Qc(602,`td`,22)(603,`p`)(604,`code`),Sk(605,`false`),Kg()()(),Qc(606,`td`,23)(607,`em`)(608,`strong`),Sk(609,`(opcional)`),Kg()(),Qc(610,`p`),Sk(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(612,`blockquote`)(613,`p`),Sk(614,`Caso essa propriedade seja definida como `),Qc(615,`code`),Sk(616,`true`),Kg(),Sk(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(618,`tr`,42)(619,`td`,16)(620,`div`,25)(621,`span`,26),Sk(622,` p-error-pattern`),vu(623,`br`),Kg()()(),Qc(624,`td`,20)(625,`code`,27),Sk(626,`string`),Kg()(),Qc(627,`td`,22),Sk(628,`-`),Kg(),Qc(629,`td`,23)(630,`em`)(631,`strong`),Sk(632,`(opcional)`),Kg()(),Qc(633,`p`),Sk(634,`Mensagem que será apresentada quando o `),Qc(635,`code`),Sk(636,`pattern`),Kg(),Sk(637,` ou a máscara não for satisfeita.`),Kg(),Qc(638,`blockquote`)(639,`p`),Sk(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Qc(641,`code`),Sk(642,`p-required-field-error-message`),Kg(),Sk(643,` em conjunto.`),Kg()()()(),Qc(644,`tr`,43)(645,`td`,16)(646,`div`,25)(647,`span`,26),Sk(648,` p-help`),vu(649,`br`),Kg()()(),Qc(650,`td`,20)(651,`code`,27),Sk(652,`string`),Kg()(),Qc(653,`td`,22),Sk(654,`-`),Kg(),Qc(655,`td`,23)(656,`em`)(657,`strong`),Sk(658,`(opcional)`),Kg()(),Qc(659,`p`),Sk(660,`Texto de apoio do campo.`),Kg()()(),Qc(661,`tr`,44)(662,`td`,16)(663,`div`,25)(664,`span`,26),Sk(665,` p-hide-password-peek`),vu(666,`br`),Kg()()(),Qc(667,`td`,20)(668,`code`,29),Sk(669,`boolean`),Kg()(),Qc(670,`td`,22)(671,`p`)(672,`code`),Sk(673,`false`),Kg()()(),Qc(674,`td`,23)(675,`em`)(676,`strong`),Sk(677,`(opcional)`),Kg()(),Qc(678,`p`),Sk(679,`Permite esconder a função de espiar a senha digitada.`),Kg()()(),Qc(680,`tr`,45)(681,`td`,16)(682,`div`,25)(683,`span`,26),Sk(684,` p-icon`),vu(685,`br`),Kg()()(),Qc(686,`td`,20)(687,`code`,27),Sk(688,`string `),Kg(),Qc(689,`code`,46),Sk(690,` TemplateRef<void>`),Kg()(),Qc(691,`td`,22),Sk(692,`-`),Kg(),Qc(693,`td`,23)(694,`em`)(695,`strong`),Sk(696,`(opcional)`),Kg()(),Qc(697,`p`),Sk(698,`Define o ícone que será exibido no início do campo.`),Kg(),Qc(699,`p`),Sk(700,`É possível usar qualquer um dos ícones da `),Qc(701,`a`,47),Sk(702,`Biblioteca de ícones`),Kg(),Sk(703,`. conforme exemplo abaixo:`),Kg(),Qc(704,`pre`)(705,`code`),Sk(706,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),Kg()(),Qc(707,`p`),Sk(708,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(709,`em`),Sk(710,`Font Awesome`),Kg(),Sk(711,`, da seguinte forma:`),Kg(),Qc(712,`pre`)(713,`code`),Sk(714,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),Kg()(),Qc(715,`p`),Sk(716,`Outra opção seria a customização do ícone através do `),Qc(717,`code`),Sk(718,`TemplateRef`),Kg(),Sk(719,`, conforme exemplo abaixo:`),Kg(),Qc(720,`pre`)(721,`code`),Sk(722,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(723,`blockquote`)(724,`p`),Sk(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(726,`code`),Sk(727,`font-size: inherit`),Kg(),Sk(728,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(729,`tr`,48)(730,`td`,16)(731,`div`,17)(732,`span`,18),Sk(733,` (p-keydown)`),vu(734,`br`),Kg()()(),Qc(735,`td`,20)(736,`code`,21),Sk(737,`EventEmitter`),Kg()(),Qc(738,`td`,22),Sk(739,`-`),Kg(),Qc(740,`td`,23)(741,`em`)(742,`strong`),Sk(743,`(opcional)`),Kg()(),Qc(744,`p`),Sk(745,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(746,`code`),Sk(747,`KeyboardEvent`),Kg(),Sk(748,` com informações sobre a tecla.`),Kg()()(),Qc(749,`tr`,49)(750,`td`,16)(751,`div`,25)(752,`span`,26),Sk(753,` p-label`),vu(754,`br`),Kg()()(),Qc(755,`td`,20)(756,`code`,27),Sk(757,`string`),Kg()(),Qc(758,`td`,22),Sk(759,`-`),Kg(),Qc(760,`td`,23)(761,`em`)(762,`strong`),Sk(763,`(opcional)`),Kg()(),Qc(764,`p`),Sk(765,`Rótulo do campo.`),Kg()()(),Qc(766,`tr`,50)(767,`td`,16)(768,`div`,25)(769,`span`,26),Sk(770,` p-label-text-wrap`),vu(771,`br`),Kg()()(),Qc(772,`td`,20)(773,`code`,29),Sk(774,`boolean`),Kg()(),Qc(775,`td`,22)(776,`p`)(777,`code`),Sk(778,`false`),Kg()()(),Qc(779,`td`,23)(780,`em`)(781,`strong`),Sk(782,`(opcional)`),Kg()(),Qc(783,`p`),Sk(784,`Habilita a quebra automática do texto da propriedade `),Qc(785,`code`),Sk(786,`p-label`),Kg(),Sk(787,`. Quando `),Qc(788,`code`),Sk(789,`p-label-text-wrap`),Kg(),Sk(790,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(791,`tr`,51)(792,`td`,16)(793,`div`,25)(794,`span`,26),Sk(795,` p-loading`),vu(796,`br`),Kg()()(),Qc(797,`td`,20)(798,`code`,29),Sk(799,`boolean`),Kg()(),Qc(800,`td`,22)(801,`p`)(802,`code`),Sk(803,`false`),Kg()()(),Qc(804,`td`,23)(805,`em`)(806,`strong`),Sk(807,`(opcional)`),Kg()(),Qc(808,`p`),Sk(809,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(810,`tr`,52)(811,`td`,16)(812,`div`,25)(813,`span`,26),Sk(814,`p-mask`),vu(815,`br`),Kg()()(),Qc(816,`td`,20)(817,`code`,27),Sk(818,`string`),Kg()(),Qc(819,`td`,22),Sk(820,`-`),Kg(),Qc(821,`td`,23)(822,`em`)(823,`strong`),Sk(824,`(opcional)`),Kg()(),Qc(825,`p`),Sk(826,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),Kg()()(),Qc(827,`tr`,53)(828,`td`,16)(829,`div`,25)(830,`span`,26),Sk(831,`p-mask-format-model`),vu(832,`br`),Kg()()(),Qc(833,`td`,20)(834,`code`,29),Sk(835,`boolean`),Kg()(),Qc(836,`td`,22)(837,`p`)(838,`code`),Sk(839,`false`),Kg()()(),Qc(840,`td`,23)(841,`em`)(842,`strong`),Sk(843,`(opcional)`),Kg()(),Qc(844,`p`),Sk(845,`Indica se o `),Qc(846,`code`),Sk(847,`model`),Kg(),Sk(848,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),Kg()()(),Qc(849,`tr`,54)(850,`td`,16)(851,`div`,25)(852,`span`,26),Sk(853,` p-mask-no-length-validation`),vu(854,`br`),Kg()()(),Qc(855,`td`,20)(856,`code`,29),Sk(857,`boolean`),Kg()(),Qc(858,`td`,22)(859,`p`)(860,`code`),Sk(861,`false`),Kg()()(),Qc(862,`td`,23)(863,`p`),Sk(864,`Controla como o componente aplica as validações de comprimento mínimo (`),Qc(865,`code`),Sk(866,`minLength`),Kg(),Sk(867,`) e máximo (`),Qc(868,`code`),Sk(869,`maxLength`),Kg(),Sk(870,`) quando há uma máscara (`),Qc(871,`code`),Sk(872,`p-mask`),Kg(),Sk(873,`) definida.`),Kg(),Qc(874,`ul`)(875,`li`),Sk(876,`Quando `),Qc(877,`code`),Sk(878,`true`),Kg(),Sk(879,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Kg(),Qc(880,`li`),Sk(881,`Quando `),Qc(882,`code`),Sk(883,`false`),Kg(),Sk(884,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Kg()(),Qc(885,`blockquote`)(886,`p`),Sk(887,`Esta propriedade é ignorada quando utilizada em conjunto com `),Qc(888,`code`),Sk(889,`p-mask-format-model`),Kg(),Sk(890,`.`),Kg()(),Qc(891,`p`),Sk(892,`Exemplo:`),Kg(),Qc(893,`pre`)(894,`code`),Sk(895,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),Kg()(),Qc(896,`ul`)(897,`li`),Sk(898,`Entrada: `),Qc(899,`code`),Sk(900,`123-456`),Kg(),Sk(901,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Qc(902,`code`),Sk(903,`-`),Kg(),Sk(904,`.`),Kg()()()(),Qc(905,`tr`,55)(906,`td`,16)(907,`div`,25)(908,`span`,26),Sk(909,` p-maxlength`),vu(910,`br`),Kg()()(),Qc(911,`td`,20)(912,`code`,56),Sk(913,`number`),Kg()(),Qc(914,`td`,22),Sk(915,`-`),Kg(),Qc(916,`td`,23)(917,`em`)(918,`strong`),Sk(919,`(opcional)`),Kg()(),Qc(920,`p`),Sk(921,`Indica a quantidade máxima de caracteres que o campo aceita.`),Kg()()(),Qc(922,`tr`,57)(923,`td`,16)(924,`div`,25)(925,`span`,26),Sk(926,` p-minlength`),vu(927,`br`),Kg()()(),Qc(928,`td`,20)(929,`code`,56),Sk(930,`number`),Kg()(),Qc(931,`td`,22),Sk(932,`-`),Kg(),Qc(933,`td`,23)(934,`em`)(935,`strong`),Sk(936,`(opcional)`),Kg()(),Qc(937,`p`),Sk(938,`Indica a quantidade mínima de caracteres que o campo aceita.`),Kg()()(),Qc(939,`tr`,58)(940,`td`,16)(941,`div`,25)(942,`span`,26),Sk(943,` name`),vu(944,`br`),Kg()()(),Qc(945,`td`,20)(946,`code`,27),Sk(947,`string`),Kg()(),Qc(948,`td`,22),Sk(949,`-`),Kg(),Qc(950,`td`,23)(951,`p`),Sk(952,`Nome e identificador do campo.`),Kg()()(),Qc(953,`tr`,59)(954,`td`,16)(955,`div`,25)(956,`span`,26),Sk(957,` p-no-autocomplete`),vu(958,`br`),Kg()()(),Qc(959,`td`,20)(960,`code`,29),Sk(961,`boolean`),Kg()(),Qc(962,`td`,22)(963,`p`)(964,`code`),Sk(965,`false`),Kg()()(),Qc(966,`td`,23)(967,`em`)(968,`strong`),Sk(969,`(opcional)`),Kg()(),Qc(970,`p`),Sk(971,`Define a propriedade nativa `),Qc(972,`code`),Sk(973,`autocomplete`),Kg(),Sk(974,` do campo como `),Qc(975,`code`),Sk(976,`off`),Kg(),Sk(977,`.`),Kg(),Qc(978,`blockquote`)(979,`p`),Sk(980,`No componente `),Qc(981,`code`),Sk(982,`po-password`),Kg(),Sk(983,` será definido como `),Qc(984,`code`),Sk(985,`new-password`),Kg(),Sk(986,`.`),Kg()(),Qc(987,`p`),Sk(988,`Nos componentes `),Qc(989,`code`),Sk(990,`po-password`),Kg(),Sk(991,` e `),Qc(992,`code`),Sk(993,`po-login`),Kg(),Sk(994,` o valor padrão será `),Qc(995,`code`),Sk(996,`true`),Kg(),Sk(997,`.`),Kg()()(),Qc(998,`tr`,60)(999,`td`,16)(1e3,`div`,25)(1001,`span`,26),Sk(1002,` p-optional`),vu(1003,`br`),Kg()()(),Qc(1004,`td`,20)(1005,`code`,29),Sk(1006,`boolean`),Kg()(),Qc(1007,`td`,22)(1008,`p`)(1009,`code`),Sk(1010,`false`),Kg()()(),Qc(1011,`td`,23)(1012,`em`)(1013,`strong`),Sk(1014,`(opcional)`),Kg()(),Qc(1015,`p`),Sk(1016,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(1017,`blockquote`)(1018,`p`),Sk(1019,`Não será exibida a indicação se:`),Kg()(),Qc(1020,`ul`)(1021,`li`),Sk(1022,`O campo conter `),Qc(1023,`code`),Sk(1024,`p-required`),Kg(),Sk(1025,`;`),Kg(),Qc(1026,`li`),Sk(1027,`Não possuir `),Qc(1028,`code`),Sk(1029,`p-help`),Kg(),Sk(1030,` e/ou `),Qc(1031,`code`),Sk(1032,`p-label`),Kg(),Sk(1033,`.`),Kg()()()(),Qc(1034,`tr`,61)(1035,`td`,16)(1036,`div`,25)(1037,`span`,26),Sk(1038,`p-pattern`),vu(1039,`br`),Kg()()(),Qc(1040,`td`,20)(1041,`code`,27),Sk(1042,`string`),Kg()(),Qc(1043,`td`,22),Sk(1044,`-`),Kg(),Qc(1045,`td`,23)(1046,`em`)(1047,`strong`),Sk(1048,`(opcional)`),Kg()(),Qc(1049,`p`),Sk(1050,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Qc(1051,`code`),Sk(1052,`(p-mask)`),Kg(),Sk(1053,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),Kg()()(),Qc(1054,`tr`,62)(1055,`td`,16)(1056,`div`,25)(1057,`span`,26),Sk(1058,` p-placeholder`),vu(1059,`br`),Kg()()(),Qc(1060,`td`,20)(1061,`code`,27),Sk(1062,`string`),Kg()(),Qc(1063,`td`,22)(1064,`p`),Sk(1065,`''`),Kg()(),Qc(1066,`td`,23)(1067,`em`)(1068,`strong`),Sk(1069,`(opcional)`),Kg()(),Qc(1070,`p`),Sk(1071,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),Kg()()(),Qc(1072,`tr`,63)(1073,`td`,16)(1074,`div`,25)(1075,`span`,26),Sk(1076,` p-helper`),vu(1077,`br`),Kg()()(),Qc(1078,`td`,20)(1079,`code`,64),Sk(1080,`PoHelperOptions `),Kg(),Qc(1081,`code`,27),Sk(1082,` string`),Kg()(),Qc(1083,`td`,22),Sk(1084,`-`),Kg(),Qc(1085,`td`,23)(1086,`em`)(1087,`strong`),Sk(1088,`(opcional)`),Kg()(),Qc(1089,`p`),Sk(1090,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1091,`code`),Sk(1092,`p-label`),Kg(),Sk(1093,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1094,`code`),Sk(1095,`p-label`),Kg(),Sk(1096,`.`),Kg(),Qc(1097,`blockquote`)(1098,`p`),Sk(1099,`Para mais informações acesse: `),Qc(1100,`a`,65),Sk(1101,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1102,`.`),Kg()(),Qc(1103,`blockquote`)(1104,`p`),Sk(1105,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1106,`code`),Sk(1107,`p-additional-help-tooltip`),Kg(),Sk(1108,` e `),Qc(1109,`code`),Sk(1110,`p-additional-help`),Kg(),Sk(1111,`) será ignorado.`),Kg()()()(),Qc(1112,`tr`,66)(1113,`td`,16)(1114,`div`,25)(1115,`span`,26),Sk(1116,`p-readonly`),vu(1117,`br`),Kg()()(),Qc(1118,`td`,20)(1119,`code`,29),Sk(1120,`boolean`),Kg()(),Qc(1121,`td`,22),Sk(1122,`-`),Kg(),Qc(1123,`td`,23)(1124,`em`)(1125,`strong`),Sk(1126,`(opcional)`),Kg()(),Qc(1127,`p`),Sk(1128,`Indica que o campo será somente leitura.`),Kg()()(),Qc(1129,`tr`,67)(1130,`td`,16)(1131,`div`,25)(1132,`span`,26),Sk(1133,`p-required`),vu(1134,`br`),Kg()()(),Qc(1135,`td`,20)(1136,`code`,29),Sk(1137,`boolean`),Kg()(),Qc(1138,`td`,22)(1139,`p`)(1140,`code`),Sk(1141,`false`),Kg()()(),Qc(1142,`td`,23)(1143,`em`)(1144,`strong`),Sk(1145,`(opcional)`),Kg()(),Qc(1146,`p`),Sk(1147,`Define que o campo será obrigatório.`),Kg(),Qc(1148,`blockquote`)(1149,`p`),Sk(1150,`Esta propriedade é desconsiderada quando o input está desabilitado `),Qc(1151,`code`),Sk(1152,`(p-disabled)`),Kg(),Sk(1153,`.`),Kg()()()(),Qc(1154,`tr`,68)(1155,`td`,16)(1156,`div`,25)(1157,`span`,26),Sk(1158,` p-required-field-error-message`),vu(1159,`br`),Kg()()(),Qc(1160,`td`,20)(1161,`code`,29),Sk(1162,`boolean`),Kg()(),Qc(1163,`td`,22)(1164,`p`)(1165,`code`),Sk(1166,`false`),Kg()()(),Qc(1167,`td`,23)(1168,`em`)(1169,`strong`),Sk(1170,`(opcional)`),Kg()(),Qc(1171,`p`),Sk(1172,`Exibe a mensagem setada na propriedade `),Qc(1173,`code`),Sk(1174,`p-error-pattern`),Kg(),Sk(1175,` se o campo estiver vazio e for requerido.`),Kg(),Qc(1176,`blockquote`)(1177,`p`),Sk(1178,`Necessário que a propriedade `),Qc(1179,`code`),Sk(1180,`p-required`),Kg(),Sk(1181,` esteja habilitada.`),Kg()()()(),Qc(1182,`tr`,69)(1183,`td`,16)(1184,`div`,25)(1185,`span`,26),Sk(1186,` p-show-required`),vu(1187,`br`),Kg()()(),Qc(1188,`td`,20)(1189,`code`,29),Sk(1190,`boolean`),Kg()(),Qc(1191,`td`,22),Sk(1192,`-`),Kg(),Qc(1193,`td`,23)(1194,`p`),Sk(1195,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1196,`blockquote`)(1197,`p`),Sk(1198,`Não será exibida a indicação se:`),Kg()(),Qc(1199,`ul`)(1200,`li`),Sk(1201,`Não possuir `),Qc(1202,`code`),Sk(1203,`p-help`),Kg(),Sk(1204,` e/ou `),Qc(1205,`code`),Sk(1206,`p-label`),Kg(),Sk(1207,`.`),Kg()()()(),Qc(1208,`tr`,70)(1209,`td`,16)(1210,`div`,25)(1211,`span`,26),Sk(1212,` p-size`),vu(1213,`br`),Kg()()(),Qc(1214,`td`,20)(1215,`code`,27),Sk(1216,`string`),Kg()(),Qc(1217,`td`,22)(1218,`p`)(1219,`code`),Sk(1220,`medium`),Kg()()(),Qc(1221,`td`,23)(1222,`em`)(1223,`strong`),Sk(1224,`(opcional)`),Kg()(),Qc(1225,`p`),Sk(1226,`Define o tamanho do componente:`),Kg(),Qc(1227,`ul`)(1228,`li`)(1229,`code`),Sk(1230,`small`),Kg(),Sk(1231,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1232,`li`)(1233,`code`),Sk(1234,`medium`),Kg(),Sk(1235,`: altura do input como 44px.`),Kg()(),Qc(1236,`blockquote`)(1237,`p`),Sk(1238,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1239,`code`),Sk(1240,`medium`),Kg(),Sk(1241,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1242,`a`,71),Sk(1243,`po-theme`),Kg(),Sk(1244,`.`),Kg()()()(),Qc(1245,`tr`,72)(1246,`td`,16)(1247,`div`,25)(1248,`span`,26),Sk(1249,` p-upper-case`),vu(1250,`br`),Kg()()(),Qc(1251,`td`,20)(1252,`code`,29),Sk(1253,`boolean`),Kg()(),Qc(1254,`td`,22),Sk(1255,`-`),Kg(),Qc(1256,`td`,23)(1257,`p`),Sk(1258,`Converte o conteúdo do campo em maiúsulo automaticamente.`),Kg()()()(),Qc(1259,`h3`,11),Sk(1260,`Métodos`),Kg(),Qc(1261,`table`,73)(1262,`tr`,74)(1263,`th`,75)(1264,`div`,25)(1265,`h4`)(1266,`span`,26),Sk(1267,` showAdditionalHelp `),Kg()()()()(),Qc(1268,`tr`,23)(1269,`td`,23)(1270,`p`),Sk(1271,`Método que exibe `),Qc(1272,`code`),Sk(1273,`p-helper`),Kg(),Sk(1274,` ou executa a ação definida em `),Qc(1275,`code`),Sk(1276,`p-helper{eventOnClick}`),Kg(),Sk(1277,` ou em `),Qc(1278,`code`),Sk(1279,`p-additionalHelp`),Kg(),Sk(1280,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1281,`code`),Sk(1282,`p-keydown`),Kg(),Sk(1283,`.`),Kg(),Qc(1284,`blockquote`)(1285,`p`),Sk(1286,`Exibe ou oculta o conteúdo do componente `),Qc(1287,`code`),Sk(1288,`po-helper`),Kg(),Sk(1289,` quando o componente estiver com foco.`),Kg()(),Qc(1290,`pre`)(1291,`code`),Sk(1292,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Kg()(),Qc(1293,`pre`)(1294,`code`),Sk(1295,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1296,`br`),Qc(1297,`table`,76)(1298,`tr`,74)(1299,`th`,75)(1300,`div`,25)(1301,`h4`)(1302,`span`,26),Sk(1303,` focus `),Kg()()()()(),Qc(1304,`tr`,23)(1305,`td`,23)(1306,`p`),Sk(1307,`Função que atribui foco ao componente.`),Kg(),Qc(1308,`p`),Sk(1309,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1310,`pre`)(1311,`code`),Sk(1312,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),Kg()()()()(),vu(1313,`br`),Qc(1314,`h3`),Sk(1315,`Interfaces`),Kg(),Qc(1316,`h4`,77)(1317,`code`,5),Sk(1318,`ErrorAsyncProperties`),Kg()(),Qc(1319,`div`,2)(1320,`p`),Sk(1321,`Interface para realizar uma validação assíncrona no componente.`),Kg()(),Qc(1322,`h4`,11),Sk(1323,`Propriedades`),Kg(),Qc(1324,`table`,12)(1325,`tr`,13)(1326,`th`,14),Sk(1327,`Nome`),Kg(),Qc(1328,`th`,14),Sk(1329,`Tipo`),Kg(),Qc(1330,`th`,14),Sk(1331,`Descrição`),Kg()(),Qc(1332,`tr`,78)(1333,`td`,16)(1334,`div`,25)(1335,`span`,26),Sk(1336,` errorAsync`),vu(1337,`br`),Kg()()(),Qc(1338,`td`,20)(1339,`code`,79),Sk(1340,`(value) => Observable<boolean>`),Kg()(),Qc(1341,`td`,23)(1342,`p`),Sk(1343,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Qc(1344,`code`),Sk(1345,`change`),Kg(),Sk(1346,` ou `),Qc(1347,`code`),Sk(1348,`change-model`),Kg(),Sk(1349,`, dependendo do valor da propriedade `),Qc(1350,`code`),Sk(1351,`triggerMode`),Kg(),Sk(1352,`.`),Kg()()(),Qc(1353,`tr`,80)(1354,`td`,16)(1355,`div`,25)(1356,`span`,26),Sk(1357,` triggerMode`),vu(1358,`br`),Kg()()(),Qc(1359,`td`,20)(1360,`code`,81),Sk(1361,`'change' `),Kg(),Qc(1362,`code`,82),Sk(1363,` 'changeModel'`),Kg()(),Qc(1364,`td`,23)(1365,`em`)(1366,`strong`),Sk(1367,`(opcional)`),Kg()(),Qc(1368,`p`),Sk(1369,`Controla se o método será executado no disparo do output `),Qc(1370,`code`),Sk(1371,`change`),Kg(),Sk(1372,` ou `),Qc(1373,`code`),Sk(1374,`change-model`),Kg(),Sk(1375,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ke(a,qe){if(a&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-password-basic-view`)(2,`sample-po-password-labs-view`)(3,`sample-po-password-reset-view`),Kg()}if(a&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var De=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ke,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-password-doc`),Kg()()()),l&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,me,ue,Ee],encapsulation:2,changeDetection:1})}return a})()}];var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(De),GV]})}return a})();var it=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,ge]})}return a})();export{it as DocPoPasswordModule};