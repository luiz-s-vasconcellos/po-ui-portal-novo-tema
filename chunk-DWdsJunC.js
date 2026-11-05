import{$i as h,A as Hoe,Cn as oi,Ct as Yoe,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,Ja as we,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,_t as Uoe,ai as Sn,cn as iie,dr as DO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var le=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`password`,`p-label`,`PO Password`]],template:function(l,i){l&1&&nu(0,`po-password`,0)},dependencies:[Uoe],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Password Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-password-basic/sample-po-password-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-password-basic/sample-po-password-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-password-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,he,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`hidepasswordpeek`,label:`Hide Password Peek`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern=``,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-labs`]],standalone:!1,decls:20,vars:37,consts:[[`f`,`ngForm`],[`name`,`password`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-hide-password-peek`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '[a-zA]{5}[Z0-9]{3}'`,`p-label`,`Pattern (Regex)`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let m=Ax();jc(0,`po-password`,1),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.password,r)||(i.password=r),__(r)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.label,r)||(i.label=r),__(r)}),wg(),jc(9,`po-input`,6),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.help,r)||(i.help=r),__(r)}),wg(),jc(10,`po-input`,7),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.helperText,r)||(i.helperText=r),__(r)}),wg(),jc(11,`po-input`,8),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.placeholder,r)||(i.placeholder=r),__(r)}),wg(),jc(12,`po-input`,9),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.errorPattern,r)||(i.errorPattern=r),__(r)}),wg(),jc(13,`po-input`,10),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.pattern,r)||(i.pattern=r),__(r)}),wg(),jc(14,`po-number`,11),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.minlength,r)||(i.minlength=r),__(r)}),wg(),jc(15,`po-number`,12),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.maxlength,r)||(i.maxlength=r),__(r)}),wg(),jc(16,`po-checkbox-group`,13),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.properties,r)||(i.properties=r),__(r)}),wg(),jc(17,`po-radio-group`,14),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.size,r)||(i.size=r),__(r)}),wg(),jc(18,`div`,2)(19,`po-button`,15),mt(`p-click`,function(){return i.restore()}),wg()()()}l&2&&(sb(`ngModel`,i.password),UE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-hide-password-peek`,i.properties.includes(`hidepasswordpeek`))(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-pattern`,i.pattern)(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),o0(),rg(3),UE(`p-value`,i.password),rg(),UE(`p-value`,i.event),rg(4),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.help),o0(),rg(),sb(`ngModel`,i.helperText),o0(),rg(),sb(`ngModel`,i.placeholder),o0(),rg(),sb(`ngModel`,i.errorPattern),o0(),rg(),sb(`ngModel`,i.pattern),o0(),rg(),sb(`ngModel`,i.minlength),o0(),rg(),sb(`ngModel`,i.maxlength),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Hoe,Uoe,Gte,Yoe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Password Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-password-labs/sample-po-password-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-password
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-password-labs/sample-po-password-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-password-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ve,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{poAlert=h(iie);confirmNewPassword;currentPassword;errorPattern;help=`Initial password = 123456`;newPassword;password=`123456`;setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:`Password Reset`,message:`Password saved successfully`,ok:()=>this.reset()})):this.poAlert.alert({title:`Password Error`,message:`Your (new passsword) is different of (confirm new password)`,ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-reset`]],standalone:!1,features:[we([iie])],decls:7,vars:7,consts:[[`passwordForm`,`ngForm`],[`name`,`currentPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Current Password`,`p-mask`,`999999`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-help`],[`name`,`newPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`New password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`confirmNewPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Confirm New Password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let m=Ax();jc(0,`form`,null,0)(2,`po-password`,1),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.currentPassword,r)||(i.currentPassword=r),__(r)}),wg(),jc(3,`po-password`,2),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.newPassword,r)||(i.newPassword=r),__(r)}),wg(),jc(4,`po-password`,3),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.confirmNewPassword,r)||(i.confirmNewPassword=r),__(r)}),wg(),jc(5,`div`,4)(6,`po-button`,5),mt(`p-click`,function(){return i.setPassword()}),wg()()()}if(l&2){let m=Bx(1);rg(2),sb(`ngModel`,i.currentPassword),UE(`p-help`,i.help),o0(),rg(),sb(`ngModel`,i.newPassword),UE(`p-disabled`,i.currentPassword!==i.password),o0(),rg(),sb(`ngModel`,i.confirmNewPassword),UE(`p-disabled`,i.currentPassword!==i.password),o0(),rg(2),UE(`p-disabled`,m.invalid)}},dependencies:[RK,SK,MK,xF,SF,oi,Uoe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-reset-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Password - Reset`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-password-reset/sample-po-password-reset.component.html`),wg(),jc(13,`pre`,7),lO(14,`<form #passwordForm="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-password-reset/sample-po-password-reset.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-password-reset`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ye,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-password-doc`]],standalone:!1,decls:1376,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoPasswordComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),wg(),jc(24,`p`),lO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),lO(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),wg()(),jc(29,`h4`),lO(30,`Tokens customizáveis`),wg(),jc(31,`p`),lO(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(33,`br`),lO(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(35,`code`),lO(36,`.po-input`),wg()(),jc(37,`blockquote`)(38,`p`),lO(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),jc(40,`a`,6),lO(41,`Grid System`),wg(),lO(42,`.`),wg()(),jc(43,`blockquote`)(44,`p`),lO(45,`Para maiores informações, acesse o guia `),jc(46,`a`,7),lO(47,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(48,`.`),wg()(),jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),lO(53,`Propriedade`),wg(),jc(54,`th`),lO(55,`Descrição`),wg(),jc(56,`th`),lO(57,`Valor Padrão`),wg()()(),jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),lO(62,`Default Values`),wg()(),nu(63,`td`)(64,`td`),wg(),jc(65,`tr`)(66,`td`)(67,`code`),lO(68,`--font-family`),wg()(),jc(69,`td`),lO(70,`Família tipográfica usada`),wg(),jc(71,`td`)(72,`code`),lO(73,`var(--font-family-theme)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),lO(77,`--font-size`),wg()(),jc(78,`td`),lO(79,`Tamanho da fonte`),wg(),jc(80,`td`)(81,`code`),lO(82,`var(--font-size-default)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),lO(86,`--text-color-placeholder`),wg()(),jc(87,`td`),lO(88,`Cor do texto placeholder`),wg(),jc(89,`td`)(90,`code`),lO(91,`var(--color-neutral-light-30)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),lO(95,`--color`),wg()(),jc(96,`td`),lO(97,`Cor pincipal do input`),wg(),jc(98,`td`)(99,`code`),lO(100,`var(--color-neutral-dark-70)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),lO(104,`--background`),wg()(),jc(105,`td`),lO(106,`Cor de background`),wg(),jc(107,`td`)(108,`code`),lO(109,`var(--color-neutral-light-05)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),lO(113,`--padding`),wg()(),jc(114,`td`),lO(115,`Preenchimento`),wg(),jc(116,`td`)(117,`code`),lO(118,`0 0.5rem`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),lO(122,`--text-color`),wg()(),jc(123,`td`),lO(124,`Cor do texto`),wg(),jc(125,`td`)(126,`code`),lO(127,`var(--color-neutral-dark-90)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),lO(131,`--field-container-title-justify`),wg()(),jc(132,`td`),lO(133,`Alinhamento horizontal do título (`),jc(134,`code`),lO(135,`justify-content`),wg(),lO(136,`)`),wg(),jc(137,`td`)(138,`code`),lO(139,`space-between`),wg()()(),jc(140,`tr`)(141,`td`)(142,`code`),lO(143,`--field-container-title-flex`),wg()(),jc(144,`td`),lO(145,`Flex do título (`),jc(146,`code`),lO(147,`flex`),wg(),lO(148,`)`),wg(),jc(149,`td`)(150,`code`),lO(151,`1 auto`),wg()()(),jc(152,`tr`)(153,`td`)(154,`strong`),lO(155,`Hover`),wg()(),nu(156,`td`)(157,`td`),wg(),jc(158,`tr`)(159,`td`)(160,`code`),lO(161,`--color-hover`),wg()(),jc(162,`td`),lO(163,`Cor principal no estado hover`),wg(),jc(164,`td`)(165,`code`),lO(166,`var(--color-brand-01-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),lO(170,`--background-hover`),wg()(),jc(171,`td`),lO(172,`Cor de background no estado hover`),wg(),jc(173,`td`)(174,`code`),lO(175,`var(--color-brand-01-lightest)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`strong`),lO(179,`Focused`),wg()(),nu(180,`td`)(181,`td`),wg(),jc(182,`tr`)(183,`td`)(184,`code`),lO(185,`--color-focused`),wg()(),jc(186,`td`),lO(187,`Cor principal no estado de focus`),wg(),jc(188,`td`)(189,`code`),lO(190,`var(--color-action-default)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),lO(194,`--outline-color-focused`),wg()(),jc(195,`td`),lO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),lO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),lO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),lO(209,`--color-disabled`),wg()(),jc(210,`td`),lO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),lO(214,`var(--color-neutral-light-30)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),lO(218,`--background-disabled`),wg()(),jc(219,`td`),lO(220,`Cor de background no estado disabled`),wg(),jc(221,`td`)(222,`code`),lO(223,`var(--color-neutral-light-20)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),lO(227,`--text-color-disabled`),wg()(),jc(228,`td`),lO(229,`Cor do texto no estado disabled`),wg(),jc(230,`td`)(231,`code`),lO(232,`var(--color-neutral-dark-70)`),wg()()()()(),jc(233,`p`),nu(234,`br`),lO(235,` O `),jc(236,`code`),lO(237,`po-password`),wg(),lO(238,` é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.`),wg()(),jc(239,`div`,8)(240,`h4`,9),lO(241,`Seletor`),wg(),jc(242,`pre`,10),lO(243,`<po-password
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(641,`code`),lO(642,`p-required-field-error-message`),wg(),lO(643,` em conjunto.`),wg()()()(),jc(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),lO(648,` p-help`),nu(649,`br`),wg()()(),jc(650,`td`,20)(651,`code`,26),lO(652,`string`),wg()(),jc(653,`td`,22),lO(654,`-`),wg(),jc(655,`td`,23)(656,`em`)(657,`strong`),lO(658,`(opcional)`),wg()(),jc(659,`p`),lO(660,`Texto de apoio do campo.`),wg()()(),jc(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),lO(665,` p-hide-password-peek`),nu(666,`br`),wg()()(),jc(667,`td`,20)(668,`code`,27),lO(669,`boolean`),wg()(),jc(670,`td`,22)(671,`p`)(672,`code`),lO(673,`false`),wg()()(),jc(674,`td`,23)(675,`em`)(676,`strong`),lO(677,`(opcional)`),wg()(),jc(678,`p`),lO(679,`Permite esconder a função de espiar a senha digitada.`),wg()()(),jc(680,`tr`,15)(681,`td`,16)(682,`div`,24)(683,`span`,25),lO(684,` p-icon`),nu(685,`br`),wg()()(),jc(686,`td`,20)(687,`code`,26),lO(688,`string `),wg(),jc(689,`code`,29),lO(690,` TemplateRef<void>`),wg()(),jc(691,`td`,22),lO(692,`-`),wg(),jc(693,`td`,23)(694,`em`)(695,`strong`),lO(696,`(opcional)`),wg()(),jc(697,`p`),lO(698,`Define o ícone que será exibido no início do campo.`),wg(),jc(699,`p`),lO(700,`É possível usar qualquer um dos ícones da `),jc(701,`a`,30),lO(702,`Biblioteca de ícones`),wg(),lO(703,`. conforme exemplo abaixo:`),wg(),jc(704,`pre`)(705,`code`),lO(706,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),wg()(),jc(707,`p`),lO(708,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(709,`em`),lO(710,`Font Awesome`),wg(),lO(711,`, da seguinte forma:`),wg(),jc(712,`pre`)(713,`code`),lO(714,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),wg()(),jc(715,`p`),lO(716,`Outra opção seria a customização do ícone através do `),jc(717,`code`),lO(718,`TemplateRef`),wg(),lO(719,`, conforme exemplo abaixo:`),wg(),jc(720,`pre`)(721,`code`),lO(722,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(723,`blockquote`)(724,`p`),lO(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(726,`code`),lO(727,`font-size: inherit`),wg(),lO(728,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(729,`tr`,15)(730,`td`,16)(731,`div`,17)(732,`span`,18),lO(733,` (p-keydown)`),nu(734,`br`),wg()()(),jc(735,`td`,20)(736,`code`,21),lO(737,`EventEmitter`),wg()(),jc(738,`td`,22),lO(739,`-`),wg(),jc(740,`td`,23)(741,`em`)(742,`strong`),lO(743,`(opcional)`),wg()(),jc(744,`p`),lO(745,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(746,`code`),lO(747,`KeyboardEvent`),wg(),lO(748,` com informações sobre a tecla.`),wg()()(),jc(749,`tr`,15)(750,`td`,16)(751,`div`,24)(752,`span`,25),lO(753,` p-label`),nu(754,`br`),wg()()(),jc(755,`td`,20)(756,`code`,26),lO(757,`string`),wg()(),jc(758,`td`,22),lO(759,`-`),wg(),jc(760,`td`,23)(761,`em`)(762,`strong`),lO(763,`(opcional)`),wg()(),jc(764,`p`),lO(765,`Rótulo do campo.`),wg()()(),jc(766,`tr`,15)(767,`td`,16)(768,`div`,24)(769,`span`,25),lO(770,` p-label-text-wrap`),nu(771,`br`),wg()()(),jc(772,`td`,20)(773,`code`,27),lO(774,`boolean`),wg()(),jc(775,`td`,22)(776,`p`)(777,`code`),lO(778,`false`),wg()()(),jc(779,`td`,23)(780,`em`)(781,`strong`),lO(782,`(opcional)`),wg()(),jc(783,`p`),lO(784,`Habilita a quebra automática do texto da propriedade `),jc(785,`code`),lO(786,`p-label`),wg(),lO(787,`. Quando `),jc(788,`code`),lO(789,`p-label-text-wrap`),wg(),lO(790,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),lO(795,` p-loading`),nu(796,`br`),wg()()(),jc(797,`td`,20)(798,`code`,27),lO(799,`boolean`),wg()(),jc(800,`td`,22)(801,`p`)(802,`code`),lO(803,`false`),wg()()(),jc(804,`td`,23)(805,`em`)(806,`strong`),lO(807,`(opcional)`),wg()(),jc(808,`p`),lO(809,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(810,`tr`,15)(811,`td`,16)(812,`div`,24)(813,`span`,25),lO(814,`p-mask`),nu(815,`br`),wg()()(),jc(816,`td`,20)(817,`code`,26),lO(818,`string`),wg()(),jc(819,`td`,22),lO(820,`-`),wg(),jc(821,`td`,23)(822,`em`)(823,`strong`),lO(824,`(opcional)`),wg()(),jc(825,`p`),lO(826,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),wg()()(),jc(827,`tr`,15)(828,`td`,16)(829,`div`,24)(830,`span`,25),lO(831,`p-mask-format-model`),nu(832,`br`),wg()()(),jc(833,`td`,20)(834,`code`,27),lO(835,`boolean`),wg()(),jc(836,`td`,22)(837,`p`)(838,`code`),lO(839,`false`),wg()()(),jc(840,`td`,23)(841,`em`)(842,`strong`),lO(843,`(opcional)`),wg()(),jc(844,`p`),lO(845,`Indica se o `),jc(846,`code`),lO(847,`model`),wg(),lO(848,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),wg()()(),jc(849,`tr`,15)(850,`td`,16)(851,`div`,24)(852,`span`,25),lO(853,` p-mask-no-length-validation`),nu(854,`br`),wg()()(),jc(855,`td`,20)(856,`code`,27),lO(857,`boolean`),wg()(),jc(858,`td`,22)(859,`p`)(860,`code`),lO(861,`false`),wg()()(),jc(862,`td`,23)(863,`p`),lO(864,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(865,`code`),lO(866,`minLength`),wg(),lO(867,`) e máximo (`),jc(868,`code`),lO(869,`maxLength`),wg(),lO(870,`) quando há uma máscara (`),jc(871,`code`),lO(872,`p-mask`),wg(),lO(873,`) definida.`),wg(),jc(874,`ul`)(875,`li`),lO(876,`Quando `),jc(877,`code`),lO(878,`true`),wg(),lO(879,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(880,`li`),lO(881,`Quando `),jc(882,`code`),lO(883,`false`),wg(),lO(884,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(885,`blockquote`)(886,`p`),lO(887,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(888,`code`),lO(889,`p-mask-format-model`),wg(),lO(890,`.`),wg()(),jc(891,`p`),lO(892,`Exemplo:`),wg(),jc(893,`pre`)(894,`code`),lO(895,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),wg()(),jc(896,`ul`)(897,`li`),lO(898,`Entrada: `),jc(899,`code`),lO(900,`123-456`),wg(),lO(901,` → Validação será aplicada somente aos números, ignorando o caractere especial `),jc(902,`code`),lO(903,`-`),wg(),lO(904,`.`),wg()()()(),jc(905,`tr`,15)(906,`td`,16)(907,`div`,24)(908,`span`,25),lO(909,` p-maxlength`),nu(910,`br`),wg()()(),jc(911,`td`,20)(912,`code`,31),lO(913,`number`),wg()(),jc(914,`td`,22),lO(915,`-`),wg(),jc(916,`td`,23)(917,`em`)(918,`strong`),lO(919,`(opcional)`),wg()(),jc(920,`p`),lO(921,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),lO(926,` p-minlength`),nu(927,`br`),wg()()(),jc(928,`td`,20)(929,`code`,31),lO(930,`number`),wg()(),jc(931,`td`,22),lO(932,`-`),wg(),jc(933,`td`,23)(934,`em`)(935,`strong`),lO(936,`(opcional)`),wg()(),jc(937,`p`),lO(938,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),lO(943,` name`),nu(944,`br`),wg()()(),jc(945,`td`,20)(946,`code`,26),lO(947,`string`),wg()(),jc(948,`td`,22),lO(949,`-`),wg(),jc(950,`td`,23)(951,`p`),lO(952,`Nome e identificador do campo.`),wg()()(),jc(953,`tr`,15)(954,`td`,16)(955,`div`,24)(956,`span`,25),lO(957,` p-no-autocomplete`),nu(958,`br`),wg()()(),jc(959,`td`,20)(960,`code`,27),lO(961,`boolean`),wg()(),jc(962,`td`,22)(963,`p`)(964,`code`),lO(965,`false`),wg()()(),jc(966,`td`,23)(967,`em`)(968,`strong`),lO(969,`(opcional)`),wg()(),jc(970,`p`),lO(971,`Define a propriedade nativa `),jc(972,`code`),lO(973,`autocomplete`),wg(),lO(974,` do campo como `),jc(975,`code`),lO(976,`off`),wg(),lO(977,`.`),wg(),jc(978,`blockquote`)(979,`p`),lO(980,`No componente `),jc(981,`code`),lO(982,`po-password`),wg(),lO(983,` será definido como `),jc(984,`code`),lO(985,`new-password`),wg(),lO(986,`.`),wg()(),jc(987,`p`),lO(988,`Nos componentes `),jc(989,`code`),lO(990,`po-password`),wg(),lO(991,` e `),jc(992,`code`),lO(993,`po-login`),wg(),lO(994,` o valor padrão será `),jc(995,`code`),lO(996,`true`),wg(),lO(997,`.`),wg()()(),jc(998,`tr`,15)(999,`td`,16)(1e3,`div`,24)(1001,`span`,25),lO(1002,` p-optional`),nu(1003,`br`),wg()()(),jc(1004,`td`,20)(1005,`code`,27),lO(1006,`boolean`),wg()(),jc(1007,`td`,22)(1008,`p`)(1009,`code`),lO(1010,`false`),wg()()(),jc(1011,`td`,23)(1012,`em`)(1013,`strong`),lO(1014,`(opcional)`),wg()(),jc(1015,`p`),lO(1016,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1017,`blockquote`)(1018,`p`),lO(1019,`Não será exibida a indicação se:`),wg()(),jc(1020,`ul`)(1021,`li`),lO(1022,`O campo conter `),jc(1023,`code`),lO(1024,`p-required`),wg(),lO(1025,`;`),wg(),jc(1026,`li`),lO(1027,`Não possuir `),jc(1028,`code`),lO(1029,`p-help`),wg(),lO(1030,` e/ou `),jc(1031,`code`),lO(1032,`p-label`),wg(),lO(1033,`.`),wg()()()(),jc(1034,`tr`,15)(1035,`td`,16)(1036,`div`,24)(1037,`span`,25),lO(1038,`p-pattern`),nu(1039,`br`),wg()()(),jc(1040,`td`,20)(1041,`code`,26),lO(1042,`string`),wg()(),jc(1043,`td`,22),lO(1044,`-`),wg(),jc(1045,`td`,23)(1046,`em`)(1047,`strong`),lO(1048,`(opcional)`),wg()(),jc(1049,`p`),lO(1050,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),jc(1051,`code`),lO(1052,`(p-mask)`),wg(),lO(1053,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),wg()()(),jc(1054,`tr`,15)(1055,`td`,16)(1056,`div`,24)(1057,`span`,25),lO(1058,` p-placeholder`),nu(1059,`br`),wg()()(),jc(1060,`td`,20)(1061,`code`,26),lO(1062,`string`),wg()(),jc(1063,`td`,22)(1064,`p`),lO(1065,`''`),wg()(),jc(1066,`td`,23)(1067,`em`)(1068,`strong`),lO(1069,`(opcional)`),wg()(),jc(1070,`p`),lO(1071,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1072,`tr`,15)(1073,`td`,16)(1074,`div`,24)(1075,`span`,25),lO(1076,` p-helper`),nu(1077,`br`),wg()()(),jc(1078,`td`,20)(1079,`code`,32),lO(1080,`PoHelperOptions `),wg(),jc(1081,`code`,26),lO(1082,` string`),wg()(),jc(1083,`td`,22),lO(1084,`-`),wg(),jc(1085,`td`,23)(1086,`em`)(1087,`strong`),lO(1088,`(opcional)`),wg()(),jc(1089,`p`),lO(1090,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1091,`code`),lO(1092,`p-label`),wg(),lO(1093,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1094,`code`),lO(1095,`p-label`),wg(),lO(1096,`.`),wg(),jc(1097,`blockquote`)(1098,`p`),lO(1099,`Para mais informações acesse: `),jc(1100,`a`,33),lO(1101,`https://po-ui.io/documentation/po-helper`),wg(),lO(1102,`.`),wg()(),jc(1103,`blockquote`)(1104,`p`),lO(1105,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1106,`code`),lO(1107,`p-additional-help-tooltip`),wg(),lO(1108,` e `),jc(1109,`code`),lO(1110,`p-additional-help`),wg(),lO(1111,`) será ignorado.`),wg()()()(),jc(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),lO(1116,`p-readonly`),nu(1117,`br`),wg()()(),jc(1118,`td`,20)(1119,`code`,27),lO(1120,`boolean`),wg()(),jc(1121,`td`,22),lO(1122,`-`),wg(),jc(1123,`td`,23)(1124,`em`)(1125,`strong`),lO(1126,`(opcional)`),wg()(),jc(1127,`p`),lO(1128,`Indica que o campo será somente leitura.`),wg()()(),jc(1129,`tr`,15)(1130,`td`,16)(1131,`div`,24)(1132,`span`,25),lO(1133,`p-required`),nu(1134,`br`),wg()()(),jc(1135,`td`,20)(1136,`code`,27),lO(1137,`boolean`),wg()(),jc(1138,`td`,22)(1139,`p`)(1140,`code`),lO(1141,`false`),wg()()(),jc(1142,`td`,23)(1143,`em`)(1144,`strong`),lO(1145,`(opcional)`),wg()(),jc(1146,`p`),lO(1147,`Define que o campo será obrigatório.`),wg(),jc(1148,`blockquote`)(1149,`p`),lO(1150,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1151,`code`),lO(1152,`(p-disabled)`),wg(),lO(1153,`.`),wg()()()(),jc(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),lO(1158,` p-required-field-error-message`),nu(1159,`br`),wg()()(),jc(1160,`td`,20)(1161,`code`,27),lO(1162,`boolean`),wg()(),jc(1163,`td`,22)(1164,`p`)(1165,`code`),lO(1166,`false`),wg()()(),jc(1167,`td`,23)(1168,`em`)(1169,`strong`),lO(1170,`(opcional)`),wg()(),jc(1171,`p`),lO(1172,`Exibe a mensagem setada na propriedade `),jc(1173,`code`),lO(1174,`p-error-pattern`),wg(),lO(1175,` se o campo estiver vazio e for requerido.`),wg(),jc(1176,`blockquote`)(1177,`p`),lO(1178,`Necessário que a propriedade `),jc(1179,`code`),lO(1180,`p-required`),wg(),lO(1181,` esteja habilitada.`),wg()()()(),jc(1182,`tr`,15)(1183,`td`,16)(1184,`div`,24)(1185,`span`,25),lO(1186,` p-show-required`),nu(1187,`br`),wg()()(),jc(1188,`td`,20)(1189,`code`,27),lO(1190,`boolean`),wg()(),jc(1191,`td`,22),lO(1192,`-`),wg(),jc(1193,`td`,23)(1194,`p`),lO(1195,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1196,`blockquote`)(1197,`p`),lO(1198,`Não será exibida a indicação se:`),wg()(),jc(1199,`ul`)(1200,`li`),lO(1201,`Não possuir `),jc(1202,`code`),lO(1203,`p-help`),wg(),lO(1204,` e/ou `),jc(1205,`code`),lO(1206,`p-label`),wg(),lO(1207,`.`),wg()()()(),jc(1208,`tr`,15)(1209,`td`,16)(1210,`div`,24)(1211,`span`,25),lO(1212,` p-size`),nu(1213,`br`),wg()()(),jc(1214,`td`,20)(1215,`code`,26),lO(1216,`string`),wg()(),jc(1217,`td`,22)(1218,`p`)(1219,`code`),lO(1220,`medium`),wg()()(),jc(1221,`td`,23)(1222,`em`)(1223,`strong`),lO(1224,`(opcional)`),wg()(),jc(1225,`p`),lO(1226,`Define o tamanho do componente:`),wg(),jc(1227,`ul`)(1228,`li`)(1229,`code`),lO(1230,`small`),wg(),lO(1231,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1232,`li`)(1233,`code`),lO(1234,`medium`),wg(),lO(1235,`: altura do input como 44px.`),wg()(),jc(1236,`blockquote`)(1237,`p`),lO(1238,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1239,`code`),lO(1240,`medium`),wg(),lO(1241,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1242,`a`,34),lO(1243,`po-theme`),wg(),lO(1244,`.`),wg()()()(),jc(1245,`tr`,15)(1246,`td`,16)(1247,`div`,24)(1248,`span`,25),lO(1249,` p-upper-case`),nu(1250,`br`),wg()()(),jc(1251,`td`,20)(1252,`code`,27),lO(1253,`boolean`),wg()(),jc(1254,`td`,22),lO(1255,`-`),wg(),jc(1256,`td`,23)(1257,`p`),lO(1258,`Converte o conteúdo do campo em maiúsulo automaticamente.`),wg()()()(),jc(1259,`h3`,11),lO(1260,`Métodos`),wg(),jc(1261,`table`,35)(1262,`tr`,15)(1263,`th`,36)(1264,`div`,24)(1265,`h4`)(1266,`span`,25),lO(1267,` showAdditionalHelp `),wg()()()()(),jc(1268,`tr`,23)(1269,`td`,23)(1270,`p`),lO(1271,`Método que exibe `),jc(1272,`code`),lO(1273,`p-helper`),wg(),lO(1274,` ou executa a ação definida em `),jc(1275,`code`),lO(1276,`p-helper{eventOnClick}`),wg(),lO(1277,` ou em `),jc(1278,`code`),lO(1279,`p-additionalHelp`),wg(),lO(1280,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1281,`code`),lO(1282,`p-keydown`),wg(),lO(1283,`.`),wg(),jc(1284,`blockquote`)(1285,`p`),lO(1286,`Exibe ou oculta o conteúdo do componente `),jc(1287,`code`),lO(1288,`po-helper`),wg(),lO(1289,` quando o componente estiver com foco.`),wg()(),jc(1290,`pre`)(1291,`code`),lO(1292,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(1293,`pre`)(1294,`code`),lO(1295,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1296,`br`),jc(1297,`table`,35)(1298,`tr`,15)(1299,`th`,36)(1300,`div`,24)(1301,`h4`)(1302,`span`,25),lO(1303,` focus `),wg()()()()(),jc(1304,`tr`,23)(1305,`td`,23)(1306,`p`),lO(1307,`Função que atribui foco ao componente.`),wg(),jc(1308,`p`),lO(1309,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1310,`pre`)(1311,`code`),lO(1312,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),wg()()()()(),nu(1313,`br`),jc(1314,`h3`),lO(1315,`Interfaces`),wg(),jc(1316,`h4`,37)(1317,`code`,5),lO(1318,`ErrorAsyncProperties`),wg()(),jc(1319,`div`,2)(1320,`p`),lO(1321,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(1322,`h4`,11),lO(1323,`Propriedades`),wg(),jc(1324,`table`,12)(1325,`tr`,13)(1326,`th`,14),lO(1327,`Nome`),wg(),jc(1328,`th`,14),lO(1329,`Tipo`),wg(),jc(1330,`th`,14),lO(1331,`Descrição`),wg()(),jc(1332,`tr`,15)(1333,`td`,16)(1334,`div`,24)(1335,`span`,25),lO(1336,` errorAsync`),nu(1337,`br`),wg()()(),jc(1338,`td`,20)(1339,`code`,38),lO(1340,`(value) => Observable<boolean>`),wg()(),jc(1341,`td`,23)(1342,`p`),lO(1343,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1344,`code`),lO(1345,`change`),wg(),lO(1346,` ou `),jc(1347,`code`),lO(1348,`change-model`),wg(),lO(1349,`, dependendo do valor da propriedade `),jc(1350,`code`),lO(1351,`triggerMode`),wg(),lO(1352,`.`),wg()()(),jc(1353,`tr`,15)(1354,`td`,16)(1355,`div`,24)(1356,`span`,25),lO(1357,` triggerMode`),nu(1358,`br`),wg()()(),jc(1359,`td`,20)(1360,`code`,39),lO(1361,`'change' `),wg(),jc(1362,`code`,40),lO(1363,` 'changeModel'`),wg()(),jc(1364,`td`,23)(1365,`em`)(1366,`strong`),lO(1367,`(opcional)`),wg()(),jc(1368,`p`),lO(1369,`Controla se o método será executado no disparo do output `),jc(1370,`code`),lO(1371,`change`),wg(),lO(1372,` ou `),jc(1373,`code`),lO(1374,`change-model`),wg(),lO(1375,`.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function De(a,qe){if(a&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-password-basic-view`)(2,`sample-po-password-labs-view`)(3,`sample-po-password-reset-view`),wg()}if(a&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,De,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-password-doc`),wg()()()),l&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,se,ue,Ee],encapsulation:2,changeDetection:1})}return a})()}];var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue$1({imports:[I1.forChild(ke),I1]})}return a})();var ot=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue$1({imports:[M,ge]})}return a})();export{ot as DocPoPasswordModule};