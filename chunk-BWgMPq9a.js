import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,It as bae,Lr as Kg,Lt as bi,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,ln as joe,na as de$1,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Tooltip`,`p-tooltip`,`po-tooltip`]],template:function(a,i){a&1&&vu(0,`po-button`,0)},dependencies:[oi,bi],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-tooltip-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tooltip Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-tooltip-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,we,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`},{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`}];ngOnInit(){this.restore()}restore(){this.tooltip=``,this.tooltipPosition=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-labs`]],standalone:!1,decls:12,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-md-4`,`po-lg-2`,`po-offset-md-4`,`po-offset-lg-5`,`po-offset-xl-5`],[`p-label`,`Po-Tooltip`,3,`p-tooltip`,`p-tooltip-position`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`tooltipPosition`,`p-label`,`Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let d=YO();Qc(0,`div`,1)(1,`div`,2),vu(2,`po-button`,3),Kg()(),vu(3,`po-divider`),Qc(4,`form`,null,0)(6,`div`,1)(7,`po-input`,4),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.tooltip,l)||(i.tooltip=l),U_(l)}),Kg()(),Qc(8,`div`,1)(9,`po-radio-group`,5),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.tooltipPosition,l)||(i.tooltipPosition=l),U_(l)}),Kg()(),Qc(10,`div`,1)(11,`po-button`,6),vt(`p-click`,function(){return i.restore()}),Kg()()()}a&2&&(wg(2),Rb(`p-tooltip`,i.tooltip)(`p-tooltip-position`,i.tooltipPosition),wg(5),Yb(`ngModel`,i.tooltip),W0(),wg(2),Yb(`ngModel`,i.tooltipPosition),Rb(`p-options`,i.tooltipPositionOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Zte,bi],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-tooltip-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tooltip Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <div class="po-md-4 po-lg-2 po-offset-md-4 po-offset-lg-5 po-offset-xl-5">
    <po-button [p-tooltip]="tooltip" [p-tooltip-position]="tooltipPosition" p-label="Po-Tooltip"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-12" name="tooltip" [(ngModel)]="tooltip" p-clean p-label="Tooltip"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="tooltipPosition"
      [(ngModel)]="tooltipPosition"
      p-label="Position"
      [p-options]="tooltipPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-labs',
  templateUrl: './sample-po-tooltip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipLabsComponent implements OnInit {
  tooltip: string;
  tooltipPosition: string;

  public readonly tooltipPositionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.tooltip = '';
    this.tooltipPosition = undefined;
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-tooltip-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pe,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return n})();var _e=[`formNewUser`];var ge=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(p){this.poNotification=p}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success(`New user registered`),this.cancel()):this.poNotification.error(`Please fill in the required fields`)}initialize(){this.emailTooltip=`your_account@po-ui.com`,this.nameTooltip=`Enter full name`,this.passwordTooltip=`Password must contain at least 8 characters`,this.registrationTooltip=`The registration number is on the registration form`}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-new-user`]],viewQuery:function(a,i){if(a&1&&Du(_e,7),a&2){let d;No(d=xo())&&(i.formNewUser=d.first)}},standalone:!1,decls:16,vars:13,consts:[[`formNewUser`,`ngForm`],[1,`po-row`],[`p-primary-label`,`Cancel`,`p-secondary-label`,`Confirm`,`p-title`,`Register New User`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`],[`name`,`registration`,`p-clean`,``,`p-label`,`Registration`,`p-mask`,`99999-99/99`,`p-minlength`,`11`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-pattern`,`@po-ui.com`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`CPF`,`p-clean`,``,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-minlength`,`14`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`p-clean`,``,`p-label`,`Password`,`p-minlength`,`8`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`confirmPassword`,`p-clean`,``,`p-label`,`Confirm Password`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-pattern`]],template:function(a,i){if(a&1){let d=YO();Qc(0,`div`,1)(1,`po-widget`,2),vt(`p-primary-action`,function(){return i.cancel()})(`p-secondary-action`,function(){return i.confirm()}),Qc(2,`form`,null,0)(4,`div`,1)(5,`po-input`,3),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.registration,l)||(i.registration=l),U_(l)}),Kg(),Qc(6,`po-email`,4),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.email,l)||(i.email=l),U_(l)}),Kg()(),Qc(7,`div`,1)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.name,l)||(i.name=l),U_(l)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.CPF,l)||(i.CPF=l),U_(l)}),Kg()(),Qc(10,`div`,1)(11,`po-datepicker`,7),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.birthDate,l)||(i.birthDate=l),U_(l)}),Kg(),Qc(12,`po-input`,8),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.genre,l)||(i.genre=l),U_(l)}),Kg()(),Qc(13,`div`,1)(14,`po-password`,9),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.password,l)||(i.password=l),U_(l)}),Kg(),Qc(15,`po-password`,10),z0(),Kb(`ngModelChange`,function(l){return B_(d),Tk(i.confirmPassword,l)||(i.confirmPassword=l),U_(l)}),Kg()()()()()}a&2&&(wg(5),Yb(`ngModel`,i.registration),Rb(`p-tooltip`,i.registrationTooltip),W0(),wg(),Yb(`ngModel`,i.email),Rb(`p-tooltip`,i.emailTooltip),W0(),wg(2),Yb(`ngModel`,i.name),Rb(`p-tooltip`,i.nameTooltip),W0(),wg(),Yb(`ngModel`,i.CPF),W0(),wg(2),Yb(`ngModel`,i.birthDate),W0(),wg(),Yb(`ngModel`,i.genre),W0(),wg(2),Yb(`ngModel`,i.password),Rb(`p-tooltip`,i.passwordTooltip),W0(),wg(),Yb(`ngModel`,i.confirmPassword),Rb(`p-pattern`,i.password),W0())},dependencies:[AZ,MZ,TZ,QL,WL,tie,p5,j4,joe,bae,bi],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-new-user-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-tooltip-new-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tooltip - New User`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget
    class="po-md-12"
    p-primary-label="Cancel"
    p-secondary-label="Confirm"
    p-title="Register New User"
    (p-primary-action)="cancel()"
    (p-secondary-action)="confirm()"
  >
    <form #formNewUser="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="registration"
          [(ngModel)]="registration"
          p-clean
          p-label="Registration"
          p-mask="99999-99/99"
          p-minlength="11"
          p-required
          [p-tooltip]="registrationTooltip"
        >
        </po-input>

        <po-email
          class="po-md-6"
          name="email"
          [(ngModel)]="email"
          p-clean
          p-label="Email"
          p-pattern="@po-ui.com"
          p-required
          [p-tooltip]="emailTooltip"
        >
        </po-email>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="name"
          [(ngModel)]="name"
          p-clean
          p-label="Name"
          p-required
          [p-tooltip]="nameTooltip"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="CPF"
          [(ngModel)]="CPF"
          p-clean
          p-label="CPF"
          p-mask="999.999.999-99"
          p-minlength="14"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
        </po-datepicker>

        <po-input class="po-md-6" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
      </div>

      <div class="po-row">
        <po-password
          class="po-md-6"
          name="password"
          [(ngModel)]="password"
          p-clean
          p-label="Password"
          p-minlength="8"
          p-required
          [p-tooltip]="passwordTooltip"
        >
        </po-password>

        <po-password
          class="po-md-6"
          name="confirmPassword"
          [(ngModel)]="confirmPassword"
          p-clean
          p-label="Confirm Password"
          p-required
          [p-pattern]="password"
        >
        </po-password>
      </div>
    </form>
  </po-widget>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-new-user',
  templateUrl: './sample-po-tooltip-new-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipNewUserComponent implements OnInit {
  @ViewChild('formNewUser', { static: true }) formNewUser: UntypedFormControl;

  birthDate: Date;
  confirmPassword: string;
  CPF: string;
  email: string;
  emailTooltip: string;
  genre: string;
  name: string;
  nameTooltip: string;
  password: string;
  passwordTooltip: string;
  registration: number;
  registrationTooltip: string;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.formNewUser.reset();
  }

  confirm() {
    if (this.formNewUser.valid) {
      this.poNotification.success(\`New user registered\`);
      this.cancel();
    } else {
      this.poNotification.error(\`Please fill in the required fields\`);
    }
  }

  initialize() {
    this.emailTooltip = 'your_account@po-ui.com';
    this.nameTooltip = 'Enter full name';
    this.passwordTooltip = 'Password must contain at least 8 characters';
    this.registrationTooltip = 'The registration number is on the registration form';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-tooltip-new-user`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-doc`]],standalone:!1,decls:267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-tooltip-directive`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-popover?view=doc`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-hide-arrow`,1,`docs-api-properties-row`],[`id`,`prop-p-inner-html`,1,`docs-api-properties-row`],[`id`,`prop-p-tooltip`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-tooltip-position`,1,`docs-api-properties-row`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTooltipModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo da diretiva Po-Tooltip.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoTooltipDirective`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),Kg(),Qc(15,`p`),Sk(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),Kg(),Qc(17,`p`),Sk(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Qc(19,`a`,6)(20,`strong`),Sk(21,`po-popover`),Kg()(),Sk(22,`.`),Kg(),Qc(23,`h4`),Sk(24,`Tokens customizáveis`),Kg(),Qc(25,`p`),Sk(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(27,`blockquote`)(28,`p`),Sk(29,`Para maiores informações, acesse o guia `),Qc(30,`a`,7),Sk(31,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(32,`.`),Kg()(),Qc(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),Sk(37,`Propriedade`),Kg(),Qc(38,`th`),Sk(39,`Descrição`),Kg(),Qc(40,`th`),Sk(41,`Valor Padrão`),Kg()()(),Qc(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),Sk(46,`Default Values`),Kg()(),vu(47,`td`)(48,`td`),Kg(),Qc(49,`tr`)(50,`td`)(51,`code`),Sk(52,`--border-radius`),Kg(),Sk(53,` \xA0`),Kg(),Qc(54,`td`),Sk(55,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(56,`td`)(57,`code`),Sk(58,`var(--border-radius-md)`),Kg()()(),Qc(59,`tr`)(60,`td`)(61,`code`),Sk(62,`--color`),Kg()(),Qc(63,`td`),Sk(64,`Cor principal da tooltip`),Kg(),Qc(65,`td`)(66,`code`),Sk(67,`var(--color-neutral-dark-80)`),Kg()()(),Qc(68,`tr`)(69,`td`)(70,`code`),Sk(71,`--font-family`),Kg()(),Qc(72,`td`),Sk(73,`Família tipográfica usada`),Kg(),Qc(74,`td`)(75,`code`),Sk(76,`var(--font-family-theme)`),Kg()()(),Qc(77,`tr`)(78,`td`)(79,`code`),Sk(80,`--text-color`),Kg()(),Qc(81,`td`),Sk(82,`Cor do texto`),Kg(),Qc(83,`td`)(84,`code`),Sk(85,`var(--color-neutral-light-00)`),Kg()()()()()(),Qc(86,`div`,8)(87,`h4`,9),Sk(88,`Seletor`),Kg(),Qc(89,`pre`,10),Sk(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),Kg()(),Qc(91,`h4`,11),Sk(92,`Propriedades`),Kg(),Qc(93,`table`,12)(94,`tr`,13)(95,`th`,14),Sk(96,`Nome`),Kg(),Qc(97,`th`,14),Sk(98,`Tipo`),Kg(),Qc(99,`th`,14),Sk(100,`Padrão`),Kg(),Qc(101,`th`,14),Sk(102,`Descrição`),Kg()(),Qc(103,`tr`,15)(104,`td`,16)(105,`div`,17)(106,`span`,18),Sk(107,` p-append-in-body`),vu(108,`br`),Kg()()(),Qc(109,`td`,19)(110,`code`,20),Sk(111,`boolean`),Kg()(),Qc(112,`td`,21)(113,`p`)(114,`code`),Sk(115,`false`),Kg()()(),Qc(116,`td`,22)(117,`em`)(118,`strong`),Sk(119,`(opcional)`),Kg()(),Qc(120,`p`),Sk(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),Kg()()(),Qc(122,`tr`,23)(123,`td`,16)(124,`div`,17)(125,`span`,18),Sk(126,` p-hide-arrow`),vu(127,`br`),Kg()()(),Qc(128,`td`,19)(129,`code`,20),Sk(130,`boolean`),Kg()(),Qc(131,`td`,21)(132,`p`)(133,`code`),Sk(134,`false`),Kg()()(),Qc(135,`td`,22)(136,`em`)(137,`strong`),Sk(138,`(opcional)`),Kg()(),Qc(139,`p`),Sk(140,`Controla a exibição da seta de indicação da tooltip.`),Kg(),Qc(141,`p`),Sk(142,`Quando `),Qc(143,`code`),Sk(144,`true`),Kg(),Sk(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Qc(146,`code`),Sk(147,`false`),Kg(),Sk(148,`, a seta será exibida normalmente.`),Kg(),Qc(149,`p`),Sk(150,`Essa propriedade é útil em cenários onde a seta não é necessária ou pode interferir no layout da aplicação.`),Kg()()(),Qc(151,`tr`,24)(152,`td`,16)(153,`div`,17)(154,`span`,18),Sk(155,` p-inner-html`),vu(156,`br`),Kg()()(),Qc(157,`td`,19)(158,`code`,20),Sk(159,`boolean`),Kg()(),Qc(160,`td`,21)(161,`p`)(162,`code`),Sk(163,`false`),Kg()()(),Qc(164,`td`,22)(165,`em`)(166,`strong`),Sk(167,`(opcional)`),Kg()(),Qc(168,`p`),Sk(169,`Permite a renderização de conteúdo HTML dentro da tooltip.`),Kg(),Qc(170,`p`),Sk(171,`Quando `),Qc(172,`code`),Sk(173,`true`),Kg(),Sk(174,`, o valor da propriedade `),Qc(175,`code`),Sk(176,`tooltip`),Kg(),Sk(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Qc(178,`code`),Sk(179,`false`),Kg(),Sk(180,`, o conteúdo será tratado como texto puro.`),Kg()()(),Qc(181,`tr`,25)(182,`td`,16)(183,`div`,17)(184,`span`,18),Sk(185,` p-tooltip`),vu(186,`br`),Kg()()(),Qc(187,`td`,19)(188,`code`,26),Sk(189,`string`),Kg()(),Qc(190,`td`,21),Sk(191,`-`),Kg(),Qc(192,`td`,22)(193,`p`),Sk(194,`Habilita e atribui um texto ao po-tooltip.`),Kg(),Qc(195,`p`)(196,`strong`),Sk(197,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()()()(),Qc(198,`tr`,27)(199,`td`,16)(200,`div`,17)(201,`span`,18),Sk(202,` p-tooltip-position`),vu(203,`br`),Kg()()(),Qc(204,`td`,19)(205,`code`,26),Sk(206,`string`),Kg()(),Qc(207,`td`,21)(208,`p`),Sk(209,`bottom`),Kg()(),Qc(210,`td`,22)(211,`em`)(212,`strong`),Sk(213,`(opcional)`),Kg()(),Qc(214,`p`),Sk(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Kg(),Qc(216,`p`),Sk(217,`Posições válidas:`),Kg(),Qc(218,`ul`)(219,`li`)(220,`code`),Sk(221,`right`),Kg(),Sk(222,`: Posiciona o po-tooltip no lado direito do componente alvo.`),Kg(),Qc(223,`li`)(224,`code`),Sk(225,`right-bottom`),Kg(),Sk(226,`: Posiciona o po-tooltip no lado direito inferior do componente alvo.`),Kg(),Qc(227,`li`)(228,`code`),Sk(229,`right-top`),Kg(),Sk(230,`: Posiciona o po-tooltip no lado direito superior do componente alvo.`),Kg(),Qc(231,`li`)(232,`code`),Sk(233,`bottom`),Kg(),Sk(234,`: Posiciona o po-tooltip abaixo do componente alvo.`),Kg(),Qc(235,`li`)(236,`code`),Sk(237,`bottom-left`),Kg(),Sk(238,`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.`),Kg(),Qc(239,`li`)(240,`code`),Sk(241,`bottom-right`),Kg(),Sk(242,`: Posiciona o po-tooltip abaixo e à direita do componente alvo.`),Kg(),Qc(243,`li`)(244,`code`),Sk(245,`left`),Kg(),Sk(246,`: Posiciona o po-tooltip no lado esquerdo do componente alvo.`),Kg(),Qc(247,`li`)(248,`code`),Sk(249,`left-top`),Kg(),Sk(250,`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.`),Kg(),Qc(251,`li`)(252,`code`),Sk(253,`left-bottom`),Kg(),Sk(254,`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.`),Kg(),Qc(255,`li`)(256,`code`),Sk(257,`top`),Kg(),Sk(258,`: Posiciona o po-tooltip acima do componente alvo.`),Kg(),Qc(259,`li`)(260,`code`),Sk(261,`top-right`),Kg(),Sk(262,`: Posiciona o po-tooltip acima e à direita do componente alvo.`),Kg(),Qc(263,`li`)(264,`code`),Sk(265,`top-left`),Kg(),Sk(266,`: Posiciona o po-tooltip acima e à esquerda do componente alvo.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function ke(n,Le){if(n&1){let p=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(p);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-tooltip-basic-view`)(2,`sample-po-tooltip-labs-view`)(3,`sample-po-tooltip-new-user-view`),Kg()}if(n&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var Be=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tooltip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ke,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-tooltip-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,de,ue,he,fe],encapsulation:2,changeDetection:1})}return n})()}];var Ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[GV.forChild(Be),GV]})}return n})();var pt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,Ce]})}return n})();export{pt as DocPoTooltipModule};