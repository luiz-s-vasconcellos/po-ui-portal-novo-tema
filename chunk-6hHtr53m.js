import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Cn as rie,Et as Yoe,Ga as vo,Ia as rg,Ii as ab,Jr as Ok,K as Nze,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Wt as eie,Xa as wg,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ea as h,fr as DO,ha as lO,ii as SK,io as yo,ir as Ax,ji as _O,ln as lre,mt as V4,oa as iu,oi as Sn,ri as SF,rr as Ag,s as Ac,sr as Bx,tt as Qte,wt as Xoe,x as Ff,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{c as Yn,n as P,t as M,v as ta}from"./main-ZQ7GH27Y.js";var Pe=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-basic`]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&nu(0,`po-page-change-password`)},dependencies:[Yn],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Change Password Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-change-password></po-page-change-password>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-change-password-basic`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ke,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Pe],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poDialog=h(rie);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:``,status:!1}}restore(){this.componentsSize=`medium`,this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack=``,this.urlHome=``,this.recovery=``,this.requirement={requirement:``,status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-labs`]],viewQuery:function(i,o){if(i&1&&iu(Yn,7),i&2){let m;yo(m=vo())&&(o.changePassword=m.first)}},standalone:!1,decls:26,vars:19,consts:[[`f`,`ngForm`],[`fRequirements`,`ngForm`],[3,`p-submit`,`p-components-size`,`p-hide-current-password`,`p-logo`,`p-recovery`,`p-requirements`,`p-secondary-logo`,`p-url-back`,`p-url-home`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`urlHome`,`p-label`,`Url home`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-label`,`Recovery`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlBack`,`p-label`,`Url back`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`hideCurrentPassword`,`p-label`,`Hide current password`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`requirement`,`p-label`,`Requirement`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`requirementStatus`,`p-label`,`Requirement Status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Requirement`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,o){if(i&1){let m=Ax();jc(0,`po-page-change-password`,2),mt(`p-submit`,function(p){return o.submit(p)}),wg(),nu(1,`po-divider`,3),jc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.urlHome,p)||(o.urlHome=p),__(p)}),wg(),jc(6,`po-input`,6),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.recovery,p)||(o.recovery=p),__(p)}),wg()(),jc(7,`div`,4)(8,`po-input`,7),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.urlBack,p)||(o.urlBack=p),__(p)}),wg(),jc(9,`po-input`,8),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.logo,p)||(o.logo=p),__(p)}),wg()(),jc(10,`div`,4)(11,`po-input`,9),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.secondaryLogo,p)||(o.secondaryLogo=p),__(p)}),wg(),jc(12,`po-switch`,10),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),__(p)}),wg()(),jc(13,`po-radio-group`,11),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.componentsSize,p)||(o.componentsSize=p),__(p)}),wg(),nu(14,`br`)(15,`po-divider`),jc(16,`form`,null,1)(18,`div`,4)(19,`po-input`,12),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.requirement.requirement,p)||(o.requirement.requirement=p),__(p)}),wg(),jc(20,`po-switch`,13),r0(),ab(`ngModelChange`,function(p){return v_(m),uO(o.requirement.status,p)||(o.requirement.status=p),__(p)}),wg()(),jc(21,`div`,4)(22,`po-button`,14),mt(`p-click`,function(){return o.addRequirement()}),wg()()(),nu(23,`po-divider`),jc(24,`div`,4)(25,`po-button`,15),mt(`p-click`,function(){return o.restore()}),wg()()()}if(i&2){let m=Bx(17);UE(`p-components-size`,o.componentsSize)(`p-hide-current-password`,o.hideCurrentPassword)(`p-logo`,o.logo)(`p-recovery`,o.recovery)(`p-requirements`,o.requirements)(`p-secondary-logo`,o.secondaryLogo)(`p-url-back`,o.urlBack)(`p-url-home`,o.urlHome),rg(5),sb(`ngModel`,o.urlHome),o0(),rg(),sb(`ngModel`,o.recovery),o0(),rg(2),sb(`ngModel`,o.urlBack),o0(),rg(),sb(`ngModel`,o.logo),o0(),rg(2),sb(`ngModel`,o.secondaryLogo),o0(),rg(),sb(`ngModel`,o.hideCurrentPassword),o0(),rg(),sb(`ngModel`,o.componentsSize),UE(`p-options`,o.componentsSizeOptions),o0(),rg(6),sb(`ngModel`,o.requirement.requirement),o0(),rg(),sb(`ngModel`,o.requirement.status),o0(),rg(2),UE(`p-disabled`,m.form.invalid)}},dependencies:[RK,SK,MK,xF,SF,ri,Ff,G4,Qte,V4,Yn],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Change Password Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-change-password
  [p-components-size]="componentsSize"
  [p-hide-current-password]="hideCurrentPassword"
  [p-logo]="logo"
  [p-recovery]="recovery"
  [p-requirements]="requirements"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="urlBack"
  [p-url-home]="urlHome"
  (p-submit)="submit($event)"
>
</po-page-change-password>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="urlHome" [(ngModel)]="urlHome" p-label="Url home"> </po-input>

    <po-input class="po-md-6" name="recovery" [(ngModel)]="recovery" p-label="Recovery"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="urlBack" [(ngModel)]="urlBack" p-label="Url back"> </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>

    <po-switch
      class="po-lg-6"
      name="hideCurrentPassword"
      [(ngModel)]="hideCurrentPassword"
      p-label="Hide current password"
    >
    </po-switch>
  </div>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <br />

  <po-divider />

  <form #fRequirements="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="requirement"
        [(ngModel)]="requirement.requirement"
        p-label="Requirement"
        p-required
      >
      </po-input>

      <po-switch class="po-md-6" name="requirementStatus" [(ngModel)]="requirement.status" p-label="Requirement Status">
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-3"
        p-label="Add Password Requirement"
        [p-disabled]="fRequirements.form.invalid"
        (p-click)="addRequirement()"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption } from '@po-ui/ng-components';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-labs',
  templateUrl: './sample-po-page-change-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  componentsSize: string;
  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.componentsSize = 'medium';
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      componentsSize: this.componentsSize,
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-change-password-labs`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ve,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Se],encapsulation:2,changeDetection:1})}return a})();function Ne(a,F){if(a&1){let r=Ax();jc(0,`po-page-edit`,1)(1,`form`,null,0)(3,`div`,3)(4,`div`,3)(5,`po-input`,4),r0(),wg(),jc(6,`po-datepicker`,5),r0(),ab(`ngModelChange`,function(o){v_(r);let m=Fx();return uO(m.birthday,o)||(m.birthday=o),__(o)}),wg(),jc(7,`po-input`,6),r0(),wg()(),jc(8,`div`,3)(9,`po-select`,7),r0(),ab(`ngModelChange`,function(o){v_(r);let m=Fx();return uO(m.country,o)||(m.country=o),__(o)}),wg(),jc(10,`po-select`,8),r0(),ab(`ngModelChange`,function(o){v_(r);let m=Fx();return uO(m.city,o)||(m.city=o),__(o)}),wg(),jc(11,`po-input`,9),r0(),wg()(),nu(12,`po-divider`,10),jc(13,`po-button`,11),mt(`p-click`,function(){v_(r);let o=Fx();return __(o.showChangePasswordScreen())}),wg()()()()}if(a&2){let r=Fx();UE(`p-breadcrumb`,r.breadcrumb),rg(5),UE(`ngModel`,r.fullName),o0(),rg(),sb(`ngModel`,r.birthday),o0(),rg(),UE(`ngModel`,r.email),o0(),rg(2),sb(`ngModel`,r.country),UE(`p-options`,r.countryOptions),o0(),rg(),sb(`ngModel`,r.city),UE(`p-options`,r.cityOptions),o0(),rg(),UE(`ngModel`,r.phoneNumber),o0()}}function ze(a,F){if(a&1){let r=Ax();jc(0,`po-page-change-password`,12),mt(`p-submit`,function(){v_(r);let o=Fx();return __(o.onSubmit())}),wg()}if(a&2){let r=Fx();UE(`p-url-back`,r.url)(`p-url-home`,r.url)}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:`Home`,link:`/documentation/po-page-change-password`},{label:`Profile`}]};cityOptions=[{label:`São Paulo`,value:`sp`}];countryOptions=[{label:`Brazil`,value:`br`}];ngOnInit(){this.initialize()}initialize(){this.birthday=`1991-11-28T00:00:00-02:00`,this.changePasswordScreen=!1,this.city=`sp`,this.country=`br`,this.email=`natasha.romanova@mail.com.br`,this.fullName=`Natasha Romanova`,this.phoneNumber=`119999999999`,this.url=`/home`}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-modify`]],viewQuery:function(i,o){if(i&1&&iu(Yn,5),i&2){let m;yo(m=vo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:1,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Profile`,3,`p-breadcrumb`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-url-back`,`p-url-home`],[1,`po-row`],[`name`,`fullName`,`p-label`,`Name`,1,`po-md-12`,3,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday Date`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-label`,`Email`,1,`po-md-6`,3,`ngModel`],[`name`,`country`,`p-disabled`,``,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`city`,`p-disabled`,``,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`phoneNumber`,`p-label`,`Phone Number`,`p-mask`,`(99)99999-9999`,1,`po-md-12`,3,`ngModel`],[`p-label`,`Change Password`,1,`po-md-12`,`po-mt-3`],[`p-label`,`Change Your Password`,1,`po-pb-3`,`po-pt-3`,`po-md-3`,3,`p-click`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-submit`,`p-url-back`,`p-url-home`]],template:function(i,o){i&1&&vx(0,Ne,14,9,`po-page-edit`,1)(1,ze,1,2,`po-page-change-password`,2),i&2&&Dx(o.changePasswordScreen?1:0)},dependencies:[RK,SK,MK,xF,SF,ri,Ff,eie,G4,Yoe,Nze,Yn],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-modify-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Change Password Modify`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`),wg(),jc(13,`pre`,7),lO(14,`@if (!changePasswordScreen) {
  <po-page-edit p-title="User Profile" [p-breadcrumb]="breadcrumb">
    <form #formEditUser="ngForm">
      <div class="po-row">
        <div class="po-row">
          <po-input class="po-md-12" name="fullName" [ngModel]="fullName" p-label="Name"> </po-input>
          <po-datepicker
            class="po-md-6"
            name="birthday"
            [(ngModel)]="birthday"
            p-clean
            p-format="dd/mm/yyyy"
            p-label="Birthday Date"
            p-required
          >
          </po-datepicker>
          <po-input class="po-md-6" name="email" [ngModel]="email" p-label="Email"> </po-input>
        </div>
        <div class="po-row">
          <po-select
            class="po-md-6"
            name="country"
            [(ngModel)]="country"
            p-disabled
            p-label="Country"
            [p-options]="countryOptions"
          >
          </po-select>
          <po-select class="po-md-6" name="city" [(ngModel)]="city" p-disabled p-label="City" [p-options]="cityOptions">
          </po-select>
          <po-input
            class="po-md-12"
            name="phoneNumber"
            [ngModel]="phoneNumber"
            p-label="Phone Number"
            p-mask="(99)99999-9999"
          >
          </po-input>
        </div>
        <po-divider class="po-md-12 po-mt-3" p-label="Change Password"> </po-divider>
        <po-button
          class="po-pb-3 po-pt-3 po-md-3"
          p-label="Change Your Password"
          (p-click)="showChangePasswordScreen()"
        >
        </po-button>
      </div>
    </form>
  </po-page-edit>
} @else {
  <po-page-change-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-url-back]="url"
    [p-url-home]="url"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoPageChangePasswordComponent } from '@po-ui/ng-templates';

import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-change-password-modify',
  templateUrl: './sample-po-page-change-password-modify.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordModifyComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

  birthday: string;
  changePasswordScreen: boolean;
  city: string;
  country: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  url: string;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/documentation/po-page-change-password' }, { label: 'Profile' }]
  };

  public readonly cityOptions: Array<PoSelectOption> = [{ label: 'S\xE3o Paulo', value: 'sp' }];

  public readonly countryOptions: Array<PoSelectOption> = [{ label: 'Brazil', value: 'br' }];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.birthday = '1991-11-28T00:00:00-02:00';
    this.changePasswordScreen = false;
    this.city = 'sp';
    this.country = 'br';
    this.email = 'natasha.romanova@mail.com.br';
    this.fullName = 'Natasha Romanova';
    this.phoneNumber = '119999999999';
    this.url = '/home';
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  showChangePasswordScreen() {
    this.changePasswordScreen = true;
  }

  showProfileScreen() {
    this.changePasswordScreen = false;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-change-password-modify`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Fe,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,be],encapsulation:2,changeDetection:1})}return a})();function He(a,F){if(a&1){let r=Ax();jc(0,`po-page-login`,2),mt(`p-login-submit`,function(){v_(r);let o=Fx();return __(o.checkLogin())}),wg()}}function We(a,F){if(a&1){let r=Ax();jc(0,`po-page-change-password`,3),mt(`p-submit`,function(){v_(r);let o=Fx();return __(o.onSubmit())}),wg()}if(a&2){let r=Fx();UE(`p-requirements`,r.requirements)}}var xe=(()=>{class a{changePassword;login=!1;requirements=[{requirement:`Use at least one symbol (ex. !, @, #).`,status:this.validateSymbols.bind(this)},{requirement:`Mix uppercase and lowercase characters.`,status:this.validateCases.bind(this)},{requirement:`Min of 5 characters.`,status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-create`]],viewQuery:function(i,o){if(i&1&&iu(Yn,7),i&2){let m;yo(m=vo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-requirements`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-submit`,`p-requirements`]],template:function(i,o){i&1&&(vx(0,He,1,0,`po-page-login`,0),vx(1,We,1,1,`po-page-change-password`,1)),i&2&&(Dx(o.login?-1:0),rg(),Dx(o.login?1:-1))},dependencies:[Yn,ta],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-create-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Change Password Create`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`),wg(),jc(13,`pre`,7),lO(14,`@if (!login) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (login) {
  <po-page-change-password
    p-hide-current-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-home="/home"
    [p-requirements]="requirements"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoPageChangePasswordComponent, PoPageChangePasswordRequirement } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-create',
  templateUrl: './sample-po-page-change-password-create.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordCreateComponent {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  login: boolean = false;
  requirements: Array<PoPageChangePasswordRequirement> = [
    { requirement: 'Use at least one symbol (ex. !, @, #).', status: this.validateSymbols.bind(this) },
    { requirement: 'Mix uppercase and lowercase characters.', status: this.validateCases.bind(this) },
    { requirement: 'Min of 5 characters.', status: this.validateCharacters.bind(this) }
  ];

  checkLogin() {
    this.login = !this.login;
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  validateCases(newPassword: string) {
    if (newPassword) {
      let result = newPassword.match(/[a-z]/g);

      if (!result || result.length < 1) {
        return false;
      }

      result = newPassword.match(/[A-Z]/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }

  validateCharacters(newPassword: string) {
    return newPassword && newPassword.length >= 5;
  }

  validateSymbols(newPassword: string) {
    if (newPassword) {
      const result = newPassword.match(/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-change-password-create`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,je,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,xe],encapsulation:2,changeDetection:1})}return a})();var Qe=()=>({url:`https://po-sample-api.onrender.com/v1/users`,type:`all`,contactMail:`support@mail.com`});var ve=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-request`]],standalone:!1,decls:6,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your Password Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-token`,`rzDsQiSYoq`,`p-url-new-password`,`https://thf.totvs.com.br/sample/api/new-password`,3,`p-recovery`]],template:function(i,o){i&1&&(jc(0,`po-container`)(1,`div`,0),nu(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),wg()(),nu(5,`po-page-change-password`,4)),i&2&&(rg(5),UE(`p-recovery`,_O(1,Qe)))},dependencies:[Ac,Xoe,Yn],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Change Password Request`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your Password Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-change-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-token="rzDsQiSYoq"
  p-url-new-password="https://thf.totvs.com.br/sample/api/new-password"
  [p-recovery]="{ url: 'https://po-sample-api.onrender.com/v1/users', type: 'all', contactMail: 'support@mail.com' }"
>
</po-page-change-password>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-change-password-request`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Je,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ve],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-change-password-doc`]],standalone:!1,decls:671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRecovery`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRequirement[]`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(i,o){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPageChangePasswordModule } from '@po-ui/ng-templates';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do template do po-page-change-password.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoPageChangePasswordComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-page-change-password`),wg(),lO(17,` é utilizado como template para tela de cadastro ou alteração de senha.`),wg(),jc(18,`p`),lO(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),wg(),jc(20,`p`),lO(21,`A propriedade `),jc(22,`code`),lO(23,`p-url-new-password`),wg(),lO(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),jc(25,`em`),lO(26,`client side`),wg(),lO(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),jc(28,`em`),lO(29,`propriedades`),wg(),lO(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),wg(),jc(31,`p`),lO(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),jc(33,`em`),lO(34,`assets`),wg(),lO(35,` no arquivo `),jc(36,`strong`),lO(37,`angular.json`),wg(),lO(38,` da aplicação na seguinte ordem:`),wg(),jc(39,`pre`)(40,`code`),lO(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),wg()()(),jc(42,`div`,6)(43,`h4`,7),lO(44,`Seletor`),wg(),jc(45,`pre`,8),lO(46,`<po-page-change-password
    p-components-size="string"
    p-hide-current-password="boolean"
    p-logo="string"
    p-no-autocomplete-password="boolean"
    p-recovery="string | Function | PoPageChangePasswordRecovery"
    p-requirements="PoPageChangePasswordRequirement[]"
    p-secondary-logo="string"
    (p-submit)="EventEmitter"
    p-token="string"
    p-url-back="string"
    p-url-home="string"
    p-url-new-password="string" >
</po-page-change-password>
`),wg()(),jc(47,`h4`,9),lO(48,`Propriedades`),wg(),jc(49,`table`,10)(50,`tr`,11)(51,`th`,12),lO(52,`Nome`),wg(),jc(53,`th`,12),lO(54,`Tipo`),wg(),jc(55,`th`,12),lO(56,`Padrão`),wg(),jc(57,`th`,12),lO(58,`Descrição`),wg()(),jc(59,`tr`,13)(60,`td`,14)(61,`div`,15)(62,`span`,16),lO(63,` p-components-size`),nu(64,`br`),wg()()(),jc(65,`td`,17)(66,`code`,18),lO(67,`string`),wg()(),jc(68,`td`,19)(69,`p`)(70,`code`),lO(71,`medium`),wg()()(),jc(72,`td`,20)(73,`em`)(74,`strong`),lO(75,`(opcional)`),wg()(),jc(76,`p`),lO(77,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(78,`ul`)(79,`li`)(80,`code`),lO(81,`small`),wg(),lO(82,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(83,`li`)(84,`code`),lO(85,`medium`),wg(),lO(86,`: aplica a medida medium de cada componente.`),wg()(),jc(87,`blockquote`)(88,`p`),lO(89,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(90,`code`),lO(91,`medium`),wg(),lO(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(93,`a`,21),lO(94,`po-theme`),wg(),lO(95,`.`),wg()()()(),jc(96,`tr`,13)(97,`td`,14)(98,`div`,15)(99,`span`,16),lO(100,` p-hide-current-password`),nu(101,`br`),wg()()(),jc(102,`td`,17)(103,`code`,22),lO(104,`boolean`),wg()(),jc(105,`td`,19)(106,`p`)(107,`code`),lO(108,`false`),wg()()(),jc(109,`td`,20)(110,`em`)(111,`strong`),lO(112,`(opcional)`),wg()(),jc(113,`p`),lO(114,`Esconde o campo `),jc(115,`code`),lO(116,`Senha atual`),wg(),lO(117,` para que o template seja para criação de senha.`),wg()()(),jc(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),lO(122,` p-logo`),nu(123,`br`),wg()()(),jc(124,`td`,17)(125,`code`,18),lO(126,`string`),wg()(),jc(127,`td`,19),lO(128,`-`),wg(),jc(129,`td`,20)(130,`em`)(131,`strong`),lO(132,`(opcional)`),wg()(),jc(133,`p`),lO(134,`Caminho para a logomarca localizada na parte superior.`),wg(),jc(135,`blockquote`)(136,`p`),lO(137,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),wg()()()(),jc(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),lO(142,` p-no-autocomplete-password`),nu(143,`br`),wg()()(),jc(144,`td`,17)(145,`code`,22),lO(146,`boolean`),wg()(),jc(147,`td`,19)(148,`p`)(149,`code`),lO(150,`true`),wg()()(),jc(151,`td`,20)(152,`em`)(153,`strong`),lO(154,`(opcional)`),wg()(),jc(155,`p`),lO(156,`Define a propriedade nativa `),jc(157,`code`),lO(158,`autocomplete`),wg(),lO(159,` do campo como `),jc(160,`code`),lO(161,`off`),wg(),lO(162,`.`),wg(),jc(163,`blockquote`)(164,`p`),lO(165,`No input de senha(`),jc(166,`code`),lO(167,`po-password`),wg(),lO(168,`) será definido como `),jc(169,`code`),lO(170,`new-password`),wg(),lO(171,`.`),wg()()()(),jc(172,`tr`,13)(173,`td`,14)(174,`div`,15)(175,`span`,16),lO(176,` p-recovery`),nu(177,`br`),wg()()(),jc(178,`td`,17)(179,`code`,18),lO(180,`string `),wg(),jc(181,`code`,23),lO(182,` Function `),wg(),jc(183,`code`,24),lO(184,` PoPageChangePasswordRecovery`),wg()(),jc(185,`td`,19),lO(186,`-`),wg(),jc(187,`td`,20)(188,`em`)(189,`strong`),lO(190,`(opcional)`),wg()(),jc(191,`p`),lO(192,`URL para a ação do link `),jc(193,`code`),lO(194,`Esqueceu a senha`),wg(),lO(195,`.`),wg(),jc(196,`p`),lO(197,`A propriedade aceita os seguintes tipos:`),wg(),jc(198,`ul`)(199,`li`)(200,`p`)(201,`strong`),lO(202,`String`),wg(),lO(203,`: informe uma url externa ou uma rota válida;`),wg()(),jc(204,`li`)(205,`p`)(206,`strong`),lO(207,`Function`),wg(),lO(208,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),wg(),jc(209,`pre`)(210,`code`),lO(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),wg()()(),jc(212,`li`)(213,`p`)(214,`strong`),lO(215,`PoPageChangePasswordRecovery`),wg(),lO(216,`: cria-se vínculo automático com o template `),jc(217,`strong`),lO(218,`po-modal-password-recovery`),wg(),lO(219,`.
O objeto deve conter a `),jc(220,`strong`),lO(221,`url`),wg(),lO(222,` para requisição dos recursos e pode-se definir o `),jc(223,`strong`),lO(224,`tipo`),wg(),lO(225,` de modal para recupera\xE7\xE3o de senha,
`),jc(226,`strong`),lO(227,`email`),wg(),lO(228,` para contato e `),jc(229,`strong`),lO(230,`máscara`),wg(),lO(231,` do campo de telefone.`),wg()()(),jc(232,`blockquote`)(233,`p`),lO(234,`Caso não tenha valor o link `),jc(235,`code`),lO(236,`Esqueceu a senha`),wg(),lO(237,` desaparece.`),wg()()()(),jc(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),lO(242,` p-requirements`),nu(243,`br`),wg()()(),jc(244,`td`,17)(245,`code`,25),lO(246,`PoPageChangePasswordRequirement[]`),wg()(),jc(247,`td`,19),lO(248,`-`),wg(),jc(249,`td`,20)(250,`em`)(251,`strong`),lO(252,`(opcional)`),wg()(),jc(253,`p`),lO(254,`Lista de regras para criação e alteração de senha.`),wg()()(),jc(255,`tr`,13)(256,`td`,14)(257,`div`,15)(258,`span`,16),lO(259,` p-secondary-logo`),nu(260,`br`),wg()()(),jc(261,`td`,17)(262,`code`,18),lO(263,`string`),wg()(),jc(264,`td`,19),lO(265,`-`),wg(),jc(266,`td`,20)(267,`em`)(268,`strong`),lO(269,`(opcional)`),wg()(),jc(270,`p`),lO(271,`Caminho para a logomarca localizada no rodapé.`),wg()()(),jc(272,`tr`,13)(273,`td`,14)(274,`div`,26)(275,`span`,27),lO(276,` (p-submit)`),nu(277,`br`),wg()()(),jc(278,`td`,17)(279,`code`,28),lO(280,`EventEmitter`),wg()(),jc(281,`td`,19),lO(282,`-`),wg(),jc(283,`td`,20)(284,`em`)(285,`strong`),lO(286,`(opcional)`),wg()(),jc(287,`p`),lO(288,`Função executada ao submeter o form pelo botão salvar.`),wg(),jc(289,`p`),lO(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),jc(291,`code`),lO(292,`openConfirmation`),wg(),lO(293,`. Exemplo:`),wg(),jc(294,`pre`)(295,`code`),lO(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),wg()(),jc(297,`blockquote`)(298,`p`),lO(299,`Esta propriedade será ignorada se for definido valor para a propriedade `),jc(300,`code`),lO(301,`p-url-new-password`),wg(),lO(302,`.`),wg()()()(),jc(303,`tr`,13)(304,`td`,14)(305,`div`,15)(306,`span`,16),lO(307,` p-token`),nu(308,`br`),wg()()(),jc(309,`td`,17)(310,`code`,18),lO(311,`string`),wg()(),jc(312,`td`,19),lO(313,`-`),wg(),jc(314,`td`,20)(315,`em`)(316,`strong`),lO(317,`(opcional)`),wg()(),jc(318,`p`),lO(319,`Token para solicitação de troca/recuperação de senha.`),wg(),jc(320,`blockquote`)(321,`p`),lO(322,`Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.`),wg()()()(),jc(323,`tr`,13)(324,`td`,14)(325,`div`,15)(326,`span`,16),lO(327,` p-url-back`),nu(328,`br`),wg()()(),jc(329,`td`,17)(330,`code`,18),lO(331,`string`),wg()(),jc(332,`td`,19)(333,`p`)(334,`code`),lO(335,`/`),wg()()(),jc(336,`td`,20)(337,`em`)(338,`strong`),lO(339,`(opcional)`),wg()(),jc(340,`p`),lO(341,`URL para a ação de retorno da página.`),wg(),jc(342,`blockquote`)(343,`p`),lO(344,`O botão `),jc(345,`code`),lO(346,`Voltar`),wg(),lO(347,` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `),jc(348,`code`),lO(349,`p-hide-current-password`),wg(),lO(350,` for
falsa.`),wg()()()(),jc(351,`tr`,13)(352,`td`,14)(353,`div`,15)(354,`span`,16),lO(355,` p-url-home`),nu(356,`br`),wg()()(),jc(357,`td`,17)(358,`code`,18),lO(359,`string`),wg()(),jc(360,`td`,19)(361,`p`)(362,`code`),lO(363,`/`),wg()()(),jc(364,`td`,20)(365,`em`)(366,`strong`),lO(367,`(opcional)`),wg()(),jc(368,`p`),lO(369,`URL para a ação do botão `),jc(370,`code`),lO(371,`Entrar no sistema`),wg(),lO(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),jc(373,`code`),lO(374,`openConfirmation`),wg(),lO(375,`.`),wg()()(),jc(376,`tr`,13)(377,`td`,14)(378,`div`,15)(379,`span`,16),lO(380,` p-url-new-password`),nu(381,`br`),wg()()(),jc(382,`td`,17)(383,`code`,18),lO(384,`string`),wg()(),jc(385,`td`,19),lO(386,`-`),wg(),jc(387,`td`,20)(388,`em`)(389,`strong`),lO(390,`(opcional)`),wg()(),jc(391,`p`),lO(392,`Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `),jc(393,`code`),lO(394,`p-submit`),wg(),lO(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),wg(),jc(396,`h3`),lO(397,`Processo`),wg(),jc(398,`p`),lO(399,`Ao digitar um valor válido nos campos de senha e pressionar `),jc(400,`strong`),lO(401,`salvar`),wg(),lO(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),jc(403,`code`),lO(404,`POST`),wg(),lO(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),wg(),jc(406,`pre`)(407,`code`),lO(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),wg()(),jc(409,`p`),lO(410,`O código de resposta HTTP de status esperado é `),jc(411,`code`),lO(412,`204`),wg(),lO(413,`.`),wg(),jc(414,`p`),lO(415,`Em caso de `),jc(416,`strong`),lO(417,`sucesso`),wg(),lO(418,`, será exibida a modal de confirmação de senha alterada.`),wg(),jc(419,`blockquote`)(420,`p`),lO(421,`O token será informado pela propriedade `),jc(422,`code`),lO(423,`p-token`),wg(),lO(424,`do componente ou por um `),jc(425,`em`),lO(426,`query parameter`),wg(),lO(427,` na URL do template.`),wg()(),jc(428,`p`)(429,`em`),lO(430,`Processo finalizado.`),wg()(),nu(431,`hr`),jc(432,`h4`),lO(433,`Praticidade`),wg(),jc(434,`p`),lO(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),jc(436,`code`),lO(437,`po-page-change-password`),wg(),lO(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),jc(439,`code`),lO(440,`/change-password`),wg(),lO(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),wg(),jc(442,`pre`)(443,`code`),lO(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'change-password', component: PoPageChangePasswordComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/new-password',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      }
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),wg()(),jc(445,`p`),lO(446,`O metadado `),jc(447,`code`),lO(448,`serviceApi`),wg(),lO(449,` deve ser a `),jc(450,`strong`),lO(451,`url`),wg(),lO(452,` para requisição dos recursos de troca de senha. E `),jc(453,`code`),lO(454,`recovery`),wg(),lO(455,` \xE9 a interface
`),jc(456,`code`),lO(457,`PoPageChangePasswordRecovery`),wg(),lO(458,` responsável pelas especificações contidas na modal de recuperação de senha.`),wg(),jc(459,`blockquote`)(460,`p`),lO(461,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),wg()()()()(),jc(462,`h3`,9),lO(463,`Métodos`),wg(),jc(464,`table`,29)(465,`tr`,13)(466,`th`,30)(467,`div`,15)(468,`h4`)(469,`span`,16),lO(470,` openConfirmation `),wg()()()()(),jc(471,`tr`,20)(472,`td`,20)(473,`p`),lO(474,`Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `),jc(475,`code`),lO(476,`p-url-home`),wg(),lO(477,``),wg()()()(),nu(478,`br`),jc(479,`h3`),lO(480,`Interfaces`),wg(),jc(481,`h4`,31)(482,`code`,5),lO(483,`PoPageChangePasswordRecovery`),wg()(),jc(484,`div`,2)(485,`p`),lO(486,`Interface para especificação do tipo de recuperação de senha no `),jc(487,`code`),lO(488,`po-modal-password-recovery`),wg(),lO(489,`.`),wg()(),jc(490,`h4`,9),lO(491,`Propriedades`),wg(),jc(492,`table`,10)(493,`tr`,11)(494,`th`,12),lO(495,`Nome`),wg(),jc(496,`th`,12),lO(497,`Tipo`),wg(),jc(498,`th`,12),lO(499,`Descrição`),wg()(),jc(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),lO(504,` contactMail`),nu(505,`br`),wg()()(),jc(506,`td`,17)(507,`code`,18),lO(508,`string`),wg()(),jc(509,`td`,20)(510,`em`)(511,`strong`),lO(512,`(opcional)`),wg()(),jc(513,`p`),lO(514,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),wg()()(),jc(515,`tr`,13)(516,`td`,14)(517,`div`,15)(518,`span`,16),lO(519,` phoneMask`),nu(520,`br`),wg()()(),jc(521,`td`,17)(522,`code`,18),lO(523,`string`),wg()(),jc(524,`td`,20)(525,`em`)(526,`strong`),lO(527,`(opcional)`),wg()(),jc(528,`p`),lO(529,`Definição da máscara do campo de telefone.`),wg()()(),jc(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),lO(534,` type`),nu(535,`br`),wg()()(),jc(536,`td`,17)(537,`code`,32),lO(538,`PoModalPasswordRecoveryType`),wg()(),jc(539,`td`,20)(540,`em`)(541,`strong`),lO(542,`(opcional)`),wg()(),jc(543,`p`),lO(544,`Enum para especificação do tipo de recuperação de senha `),jc(545,`a`,33),lO(546,`PoModalPasswordRecoveryType`),wg(),lO(547,`.`),wg(),jc(548,`blockquote`)(549,`p`),lO(550,`Caso não seja definido valor se assume o padrão `),jc(551,`code`),lO(552,`PoModalPasswordRecoveryType.Email`),wg(),lO(553,`.`),wg()()()(),jc(554,`tr`,13)(555,`td`,14)(556,`div`,15)(557,`span`,16),lO(558,` url`),nu(559,`br`),wg()()(),jc(560,`td`,17)(561,`code`,18),lO(562,`string`),wg()(),jc(563,`td`,20)(564,`p`),lO(565,`Endpoint usado pelo template `),jc(566,`strong`),lO(567,`PoModalPasswordRecovery`),wg(),lO(568,` para requisição do recurso.`),wg(),jc(569,`blockquote`)(570,`p`),lO(571,`Saiba mais em `),jc(572,`a`,33),lO(573,`PoModalPasswordRecovery`),wg(),lO(574,`.`),wg()()()()(),jc(575,`h4`,31)(576,`code`,5),lO(577,`PoPageChangePasswordRequirement`),wg()(),jc(578,`div`,2)(579,`p`),lO(580,`Interface com a definição dos objetos aceitos pela propriedade `),jc(581,`code`),lO(582,`p-password-requirements`),wg(),lO(583,`.`),wg()(),jc(584,`h4`,9),lO(585,`Propriedades`),wg(),jc(586,`table`,10)(587,`tr`,11)(588,`th`,12),lO(589,`Nome`),wg(),jc(590,`th`,12),lO(591,`Tipo`),wg(),jc(592,`th`,12),lO(593,`Descrição`),wg()(),jc(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),lO(598,` requirement`),nu(599,`br`),wg()()(),jc(600,`td`,17)(601,`code`,18),lO(602,`string`),wg()(),jc(603,`td`,20)(604,`p`),lO(605,`Requisito.`),wg()()(),jc(606,`tr`,13)(607,`td`,14)(608,`div`,15)(609,`span`,16),lO(610,` status`),nu(611,`br`),wg()()(),jc(612,`td`,17)(613,`code`,22),lO(614,`boolean `),wg(),jc(615,`code`,23),lO(616,` Function`),wg()(),jc(617,`td`,20)(618,`p`),lO(619,`Função que deve retornar um booleano para validar um requisito de senha.`),wg(),jc(620,`p`),lO(621,`Também é possível informar diretamente um valor booleano que representa esta validação.`),wg()()()(),jc(622,`h4`,31)(623,`code`,5),lO(624,`PoPageChangePassword`),wg()(),jc(625,`div`,2)(626,`p`),lO(627,`Interface com a definição do objeto gerado pelo formulário do componente `),jc(628,`code`),lO(629,`po-page-change-password`),wg(),lO(630,`.`),wg()(),jc(631,`h4`,9),lO(632,`Propriedades`),wg(),jc(633,`table`,10)(634,`tr`,11)(635,`th`,12),lO(636,`Nome`),wg(),jc(637,`th`,12),lO(638,`Tipo`),wg(),jc(639,`th`,12),lO(640,`Descrição`),wg()(),jc(641,`tr`,13)(642,`td`,14)(643,`div`,15)(644,`span`,16),lO(645,` currentPassword`),nu(646,`br`),wg()()(),jc(647,`td`,17)(648,`code`,18),lO(649,`string`),wg()(),jc(650,`td`,20)(651,`em`)(652,`strong`),lO(653,`(opcional)`),wg()(),jc(654,`p`),lO(655,`Senha atual`),wg()()(),jc(656,`tr`,13)(657,`td`,14)(658,`div`,15)(659,`span`,16),lO(660,` newPassword`),nu(661,`br`),wg()()(),jc(662,`td`,17)(663,`code`,18),lO(664,`string`),wg()(),jc(665,`td`,20)(666,`em`)(667,`strong`),lO(668,`(opcional)`),wg()(),jc(669,`p`),lO(670,`Nova senha`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Xe(a,F){if(a&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-page-change-password-basic-view`)(2,`sample-po-page-change-password-labs-view`)(3,`sample-po-page-change-password-modify-view`)(4,`sample-po-page-change-password-create-view`)(5,`sample-po-page-change-password-request-view`),wg()}if(a&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var $e=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Change Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,o){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Xe,6,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-page-change-password-doc`),wg()()()),i&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Vze,lre,ure,we,Ee,fe,ye,_e,Me],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild($e),I1]})}return a})();var At=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,Te]})}return a})();export{At as DocPoPageChangePasswordModule};