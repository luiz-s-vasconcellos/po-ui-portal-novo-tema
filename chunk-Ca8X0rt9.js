import{$n as Ak,Ar as Ig,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ht as bi,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,Zt as fae,_t as Uoe,b as Fu,bn as o5,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,it as Qte,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var re=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Tooltip`,`p-tooltip`,`po-tooltip`]],template:function(a,i){a&1&&_u(0,`po-button`,0)},dependencies:[oi,bi],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tooltip Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tooltip-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Se,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,re],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`},{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`}];ngOnInit(){this.restore()}restore(){this.tooltip=``,this.tooltipPosition=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-labs`]],standalone:!1,decls:12,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-md-4`,`po-lg-2`,`po-offset-md-4`,`po-offset-lg-5`,`po-offset-xl-5`],[`p-label`,`Po-Tooltip`,3,`p-tooltip`,`p-tooltip-position`],[`name`,`tooltip`,`p-clean`,``,`p-label`,`Tooltip`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`tooltipPosition`,`p-label`,`Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let d=ZO();Jc(0,`div`,1)(1,`div`,2),_u(2,`po-button`,3),Zg()(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`div`,1)(7,`po-input`,4),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.tooltip,l)||(i.tooltip=l),H_(l)}),Zg()(),Jc(8,`div`,1)(9,`po-radio-group`,5),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.tooltipPosition,l)||(i.tooltipPosition=l),H_(l)}),Zg()(),Jc(10,`div`,1)(11,`po-button`,6),vt(`p-click`,function(){return i.restore()}),Zg()()()}a&2&&(Ig(2),Rb(`p-tooltip`,i.tooltip)(`p-tooltip-position`,i.tooltipPosition),Ig(5),Yb(`ngModel`,i.tooltip),Y0(),Ig(2),Yb(`ngModel`,i.tooltipPosition),Rb(`p-options`,i.tooltipPositionOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,U4,Gte,bi],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tooltip Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tooltip-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return n})();var ye=[`formNewUser`];var ue=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(p){this.poNotification=p}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success(`New user registered`),this.cancel()):this.poNotification.error(`Please fill in the required fields`)}initialize(){this.emailTooltip=`your_account@po-ui.com`,this.nameTooltip=`Enter full name`,this.passwordTooltip=`Password must contain at least 8 characters`,this.registrationTooltip=`The registration number is on the registration form`}static ɵfac=function(a){return new(a||n)(I(Fu))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-new-user`]],viewQuery:function(a,i){if(a&1&&Cu(ye,7),a&2){let d;No(d=xo())&&(i.formNewUser=d.first)}},standalone:!1,decls:16,vars:13,consts:[[`formNewUser`,`ngForm`],[1,`po-row`],[`p-primary-label`,`Cancel`,`p-secondary-label`,`Confirm`,`p-title`,`Register New User`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`],[`name`,`registration`,`p-clean`,``,`p-label`,`Registration`,`p-mask`,`99999-99/99`,`p-minlength`,`11`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-pattern`,`@po-ui.com`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`CPF`,`p-clean`,``,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-minlength`,`14`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`p-clean`,``,`p-label`,`Password`,`p-minlength`,`8`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-tooltip`],[`name`,`confirmPassword`,`p-clean`,``,`p-label`,`Confirm Password`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-pattern`]],template:function(a,i){if(a&1){let d=ZO();Jc(0,`div`,1)(1,`po-widget`,2),vt(`p-primary-action`,function(){return i.cancel()})(`p-secondary-action`,function(){return i.confirm()}),Jc(2,`form`,null,0)(4,`div`,1)(5,`po-input`,3),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.registration,l)||(i.registration=l),H_(l)}),Zg(),Jc(6,`po-email`,4),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.email,l)||(i.email=l),H_(l)}),Zg()(),Jc(7,`div`,1)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.name,l)||(i.name=l),H_(l)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.CPF,l)||(i.CPF=l),H_(l)}),Zg()(),Jc(10,`div`,1)(11,`po-datepicker`,7),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.birthDate,l)||(i.birthDate=l),H_(l)}),Zg(),Jc(12,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.genre,l)||(i.genre=l),H_(l)}),Zg()(),Jc(13,`div`,1)(14,`po-password`,9),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.password,l)||(i.password=l),H_(l)}),Zg(),Jc(15,`po-password`,10),W0(),Kb(`ngModelChange`,function(l){return U_(d),Ak(i.confirmPassword,l)||(i.confirmPassword=l),H_(l)}),Zg()()()()()}a&2&&(Ig(5),Yb(`ngModel`,i.registration),Rb(`p-tooltip`,i.registrationTooltip),Y0(),Ig(),Yb(`ngModel`,i.email),Rb(`p-tooltip`,i.emailTooltip),Y0(),Ig(2),Yb(`ngModel`,i.name),Rb(`p-tooltip`,i.nameTooltip),Y0(),Ig(),Yb(`ngModel`,i.CPF),Y0(),Ig(2),Yb(`ngModel`,i.birthDate),Y0(),Ig(),Yb(`ngModel`,i.genre),Y0(),Ig(2),Yb(`ngModel`,i.password),Rb(`p-tooltip`,i.passwordTooltip),Y0(),Ig(),Yb(`ngModel`,i.confirmPassword),Rb(`p-pattern`,i.password),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,Qte,o5,U4,Uoe,fae,bi],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-new-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tooltip - New User`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tooltip-new-user`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ue],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-tooltip-doc`]],standalone:!1,decls:267,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/documentation/po-popover?view=doc`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTooltipModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo da diretiva Po-Tooltip.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoTooltipDirective`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),Zg(),Jc(15,`p`),Tk(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),Zg(),Jc(17,`p`),Tk(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Jc(19,`a`,6)(20,`strong`),Tk(21,`po-popover`),Zg()(),Tk(22,`.`),Zg(),Jc(23,`h4`),Tk(24,`Tokens customizáveis`),Zg(),Jc(25,`p`),Tk(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(27,`blockquote`)(28,`p`),Tk(29,`Para maiores informações, acesse o guia `),Jc(30,`a`,7),Tk(31,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(32,`.`),Zg()(),Jc(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),Tk(37,`Propriedade`),Zg(),Jc(38,`th`),Tk(39,`Descrição`),Zg(),Jc(40,`th`),Tk(41,`Valor Padrão`),Zg()()(),Jc(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),Tk(46,`Default Values`),Zg()(),_u(47,`td`)(48,`td`),Zg(),Jc(49,`tr`)(50,`td`)(51,`code`),Tk(52,`--border-radius`),Zg(),Tk(53,` \xA0`),Zg(),Jc(54,`td`),Tk(55,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(56,`td`)(57,`code`),Tk(58,`var(--border-radius-md)`),Zg()()(),Jc(59,`tr`)(60,`td`)(61,`code`),Tk(62,`--color`),Zg()(),Jc(63,`td`),Tk(64,`Cor principal da tooltip`),Zg(),Jc(65,`td`)(66,`code`),Tk(67,`var(--color-neutral-dark-80)`),Zg()()(),Jc(68,`tr`)(69,`td`)(70,`code`),Tk(71,`--font-family`),Zg()(),Jc(72,`td`),Tk(73,`Família tipográfica usada`),Zg(),Jc(74,`td`)(75,`code`),Tk(76,`var(--font-family-theme)`),Zg()()(),Jc(77,`tr`)(78,`td`)(79,`code`),Tk(80,`--text-color`),Zg()(),Jc(81,`td`),Tk(82,`Cor do texto`),Zg(),Jc(83,`td`)(84,`code`),Tk(85,`var(--color-neutral-light-00)`),Zg()()()()()(),Jc(86,`div`,8)(87,`h4`,9),Tk(88,`Seletor`),Zg(),Jc(89,`pre`,10),Tk(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),Zg()(),Jc(91,`h4`,11),Tk(92,`Propriedades`),Zg(),Jc(93,`table`,12)(94,`tr`,13)(95,`th`,14),Tk(96,`Nome`),Zg(),Jc(97,`th`,14),Tk(98,`Tipo`),Zg(),Jc(99,`th`,14),Tk(100,`Padrão`),Zg(),Jc(101,`th`,14),Tk(102,`Descrição`),Zg()(),Jc(103,`tr`,15)(104,`td`,16)(105,`div`,17)(106,`span`,18),Tk(107,` p-append-in-body`),_u(108,`br`),Zg()()(),Jc(109,`td`,19)(110,`code`,20),Tk(111,`boolean`),Zg()(),Jc(112,`td`,21)(113,`p`)(114,`code`),Tk(115,`false`),Zg()()(),Jc(116,`td`,22)(117,`em`)(118,`strong`),Tk(119,`(opcional)`),Zg()(),Jc(120,`p`),Tk(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),Zg()()(),Jc(122,`tr`,15)(123,`td`,16)(124,`div`,17)(125,`span`,18),Tk(126,` p-hide-arrow`),_u(127,`br`),Zg()()(),Jc(128,`td`,19)(129,`code`,20),Tk(130,`boolean`),Zg()(),Jc(131,`td`,21)(132,`p`)(133,`code`),Tk(134,`false`),Zg()()(),Jc(135,`td`,22)(136,`em`)(137,`strong`),Tk(138,`(opcional)`),Zg()(),Jc(139,`p`),Tk(140,`Controla a exibição da seta de indicação da tooltip.`),Zg(),Jc(141,`p`),Tk(142,`Quando `),Jc(143,`code`),Tk(144,`true`),Zg(),Tk(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Jc(146,`code`),Tk(147,`false`),Zg(),Tk(148,`, a seta será exibida normalmente.`),Zg(),Jc(149,`p`),Tk(150,`Essa propriedade é útil em cenários onde a seta não é necessária ou pode interferir no layout da aplicação.`),Zg()()(),Jc(151,`tr`,15)(152,`td`,16)(153,`div`,17)(154,`span`,18),Tk(155,` p-inner-html`),_u(156,`br`),Zg()()(),Jc(157,`td`,19)(158,`code`,20),Tk(159,`boolean`),Zg()(),Jc(160,`td`,21)(161,`p`)(162,`code`),Tk(163,`false`),Zg()()(),Jc(164,`td`,22)(165,`em`)(166,`strong`),Tk(167,`(opcional)`),Zg()(),Jc(168,`p`),Tk(169,`Permite a renderização de conteúdo HTML dentro da tooltip.`),Zg(),Jc(170,`p`),Tk(171,`Quando `),Jc(172,`code`),Tk(173,`true`),Zg(),Tk(174,`, o valor da propriedade `),Jc(175,`code`),Tk(176,`tooltip`),Zg(),Tk(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Jc(178,`code`),Tk(179,`false`),Zg(),Tk(180,`, o conteúdo será tratado como texto puro.`),Zg()()(),Jc(181,`tr`,15)(182,`td`,16)(183,`div`,17)(184,`span`,18),Tk(185,` p-tooltip`),_u(186,`br`),Zg()()(),Jc(187,`td`,19)(188,`code`,23),Tk(189,`string`),Zg()(),Jc(190,`td`,21),Tk(191,`-`),Zg(),Jc(192,`td`,22)(193,`p`),Tk(194,`Habilita e atribui um texto ao po-tooltip.`),Zg(),Jc(195,`p`)(196,`strong`),Tk(197,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()()()(),Jc(198,`tr`,15)(199,`td`,16)(200,`div`,17)(201,`span`,18),Tk(202,` p-tooltip-position`),_u(203,`br`),Zg()()(),Jc(204,`td`,19)(205,`code`,23),Tk(206,`string`),Zg()(),Jc(207,`td`,21)(208,`p`),Tk(209,`bottom`),Zg()(),Jc(210,`td`,22)(211,`em`)(212,`strong`),Tk(213,`(opcional)`),Zg()(),Jc(214,`p`),Tk(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Zg(),Jc(216,`p`),Tk(217,`Posições válidas:`),Zg(),Jc(218,`ul`)(219,`li`)(220,`code`),Tk(221,`right`),Zg(),Tk(222,`: Posiciona o po-tooltip no lado direito do componente alvo.`),Zg(),Jc(223,`li`)(224,`code`),Tk(225,`right-bottom`),Zg(),Tk(226,`: Posiciona o po-tooltip no lado direito inferior do componente alvo.`),Zg(),Jc(227,`li`)(228,`code`),Tk(229,`right-top`),Zg(),Tk(230,`: Posiciona o po-tooltip no lado direito superior do componente alvo.`),Zg(),Jc(231,`li`)(232,`code`),Tk(233,`bottom`),Zg(),Tk(234,`: Posiciona o po-tooltip abaixo do componente alvo.`),Zg(),Jc(235,`li`)(236,`code`),Tk(237,`bottom-left`),Zg(),Tk(238,`: Posiciona o po-tooltip abaixo e à esquerda do componente alvo.`),Zg(),Jc(239,`li`)(240,`code`),Tk(241,`bottom-right`),Zg(),Tk(242,`: Posiciona o po-tooltip abaixo e à direita do componente alvo.`),Zg(),Jc(243,`li`)(244,`code`),Tk(245,`left`),Zg(),Tk(246,`: Posiciona o po-tooltip no lado esquerdo do componente alvo.`),Zg(),Jc(247,`li`)(248,`code`),Tk(249,`left-top`),Zg(),Tk(250,`: Posiciona o po-tooltip no lado esquerdo superior do componente alvo.`),Zg(),Jc(251,`li`)(252,`code`),Tk(253,`left-bottom`),Zg(),Tk(254,`: Posiciona o po-tooltip no lado esquerdo inferior do componente alvo.`),Zg(),Jc(255,`li`)(256,`code`),Tk(257,`top`),Zg(),Tk(258,`: Posiciona o po-tooltip acima do componente alvo.`),Zg(),Jc(259,`li`)(260,`code`),Tk(261,`top-right`),Zg(),Tk(262,`: Posiciona o po-tooltip acima e à direita do componente alvo.`),Zg(),Jc(263,`li`)(264,`code`),Tk(265,`top-left`),Zg(),Tk(266,`: Posiciona o po-tooltip acima e à esquerda do componente alvo.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Ne(n,Be){if(n&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-tooltip-basic-view`)(2,`sample-po-tooltip-labs-view`)(3,`sample-po-tooltip-new-user-view`),Zg()}if(n&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tooltip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ne,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-tooltip-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,me,ce,ge,he],encapsulation:2,changeDetection:1})}return n})()}];var be=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[WV.forChild(ke),WV]})}return n})();var ot=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,be]})}return n})();export{ot as DocPoTooltipModule};