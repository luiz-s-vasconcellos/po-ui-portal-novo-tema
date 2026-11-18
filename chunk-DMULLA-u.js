import{b as Yn,j as ta,m as P,p as M}from"./main-FL7X32TP.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,s as Aze,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,va as ik,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var Pe=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-basic`]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&vu(0,`po-page-change-password`)},dependencies:[Yn],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-change-password-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Change Password Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-change-password></po-page-change-password>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-change-password-basic`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Pe],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poDialog=p(sie);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:``,status:!1}}restore(){this.componentsSize=`medium`,this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack=``,this.urlHome=``,this.recovery=``,this.requirement={requirement:``,status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-labs`]],viewQuery:function(i,o){if(i&1&&Du(Yn,7),i&2){let m;No(m=xo())&&(o.changePassword=m.first)}},standalone:!1,decls:26,vars:19,consts:[[`f`,`ngForm`],[`fRequirements`,`ngForm`],[3,`p-submit`,`p-components-size`,`p-hide-current-password`,`p-logo`,`p-recovery`,`p-requirements`,`p-secondary-logo`,`p-url-back`,`p-url-home`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`urlHome`,`p-label`,`Url home`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-label`,`Recovery`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlBack`,`p-label`,`Url back`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`hideCurrentPassword`,`p-label`,`Hide current password`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`requirement`,`p-label`,`Requirement`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`requirementStatus`,`p-label`,`Requirement Status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Requirement`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,o){if(i&1){let m=YO();Qc(0,`po-page-change-password`,2),vt(`p-submit`,function(l){return o.submit(l)}),Kg(),vu(1,`po-divider`,3),Qc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.urlHome,l)||(o.urlHome=l),U_(l)}),Kg(),Qc(6,`po-input`,6),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.recovery,l)||(o.recovery=l),U_(l)}),Kg()(),Qc(7,`div`,4)(8,`po-input`,7),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.urlBack,l)||(o.urlBack=l),U_(l)}),Kg(),Qc(9,`po-input`,8),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.logo,l)||(o.logo=l),U_(l)}),Kg()(),Qc(10,`div`,4)(11,`po-input`,9),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.secondaryLogo,l)||(o.secondaryLogo=l),U_(l)}),Kg(),Qc(12,`po-switch`,10),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.hideCurrentPassword,l)||(o.hideCurrentPassword=l),U_(l)}),Kg()(),Qc(13,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.componentsSize,l)||(o.componentsSize=l),U_(l)}),Kg(),vu(14,`br`)(15,`po-divider`),Qc(16,`form`,null,1)(18,`div`,4)(19,`po-input`,12),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.requirement.requirement,l)||(o.requirement.requirement=l),U_(l)}),Kg(),Qc(20,`po-switch`,13),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(o.requirement.status,l)||(o.requirement.status=l),U_(l)}),Kg()(),Qc(21,`div`,4)(22,`po-button`,14),vt(`p-click`,function(){return o.addRequirement()}),Kg()()(),vu(23,`po-divider`),Qc(24,`div`,4)(25,`po-button`,15),vt(`p-click`,function(){return o.restore()}),Kg()()()}if(i&2){let m=ik(17);Rb(`p-components-size`,o.componentsSize)(`p-hide-current-password`,o.hideCurrentPassword)(`p-logo`,o.logo)(`p-recovery`,o.recovery)(`p-requirements`,o.requirements)(`p-secondary-logo`,o.secondaryLogo)(`p-url-back`,o.urlBack)(`p-url-home`,o.urlHome),wg(5),Yb(`ngModel`,o.urlHome),W0(),wg(),Yb(`ngModel`,o.recovery),W0(),wg(2),Yb(`ngModel`,o.urlBack),W0(),wg(),Yb(`ngModel`,o.logo),W0(),wg(2),Yb(`ngModel`,o.secondaryLogo),W0(),wg(),Yb(`ngModel`,o.hideCurrentPassword),W0(),wg(),Yb(`ngModel`,o.componentsSize),Rb(`p-options`,o.componentsSizeOptions),W0(),wg(6),Yb(`ngModel`,o.requirement.requirement),W0(),wg(),Yb(`ngModel`,o.requirement.status),W0(),wg(2),Rb(`p-disabled`,m.form.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Zte,R4,Yn],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-change-password-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Change Password Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-change-password
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-change-password-labs`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ve,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();function Ne(a,F){if(a&1){let r=YO();Qc(0,`po-page-edit`,1)(1,`form`,null,0)(3,`div`,3)(4,`div`,3)(5,`po-input`,4),z0(),Kg(),Qc(6,`po-datepicker`,5),z0(),Kb(`ngModelChange`,function(o){B_(r);let m=ek();return Tk(m.birthday,o)||(m.birthday=o),U_(o)}),Kg(),Qc(7,`po-input`,6),z0(),Kg()(),Qc(8,`div`,3)(9,`po-select`,7),z0(),Kb(`ngModelChange`,function(o){B_(r);let m=ek();return Tk(m.country,o)||(m.country=o),U_(o)}),Kg(),Qc(10,`po-select`,8),z0(),Kb(`ngModelChange`,function(o){B_(r);let m=ek();return Tk(m.city,o)||(m.city=o),U_(o)}),Kg(),Qc(11,`po-input`,9),z0(),Kg()(),vu(12,`po-divider`,10),Qc(13,`po-button`,11),vt(`p-click`,function(){B_(r);let o=ek();return U_(o.showChangePasswordScreen())}),Kg()()()()}if(a&2){let r=ek();Rb(`p-breadcrumb`,r.breadcrumb),wg(5),Rb(`ngModel`,r.fullName),W0(),wg(),Yb(`ngModel`,r.birthday),W0(),wg(),Rb(`ngModel`,r.email),W0(),wg(2),Yb(`ngModel`,r.country),Rb(`p-options`,r.countryOptions),W0(),wg(),Yb(`ngModel`,r.city),Rb(`p-options`,r.cityOptions),W0(),wg(),Rb(`ngModel`,r.phoneNumber),W0()}}function ze(a,F){if(a&1){let r=YO();Qc(0,`po-page-change-password`,12),vt(`p-submit`,function(){B_(r);let o=ek();return U_(o.onSubmit())}),Kg()}if(a&2){let r=ek();Rb(`p-url-back`,r.url)(`p-url-home`,r.url)}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:`Home`,link:`/documentation/po-page-change-password`},{label:`Profile`}]};cityOptions=[{label:`São Paulo`,value:`sp`}];countryOptions=[{label:`Brazil`,value:`br`}];ngOnInit(){this.initialize()}initialize(){this.birthday=`1991-11-28T00:00:00-02:00`,this.changePasswordScreen=!1,this.city=`sp`,this.country=`br`,this.email=`natasha.romanova@mail.com.br`,this.fullName=`Natasha Romanova`,this.phoneNumber=`119999999999`,this.url=`/home`}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-modify`]],viewQuery:function(i,o){if(i&1&&Du(Yn,5),i&2){let m;No(m=xo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:1,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Profile`,3,`p-breadcrumb`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-url-back`,`p-url-home`],[1,`po-row`],[`name`,`fullName`,`p-label`,`Name`,1,`po-md-12`,3,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday Date`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-label`,`Email`,1,`po-md-6`,3,`ngModel`],[`name`,`country`,`p-disabled`,``,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`city`,`p-disabled`,``,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`phoneNumber`,`p-label`,`Phone Number`,`p-mask`,`(99)99999-9999`,1,`po-md-12`,3,`ngModel`],[`p-label`,`Change Password`,1,`po-md-12`,`po-mt-3`],[`p-label`,`Change Your Password`,1,`po-pb-3`,`po-pt-3`,`po-md-3`,3,`p-click`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-submit`,`p-url-back`,`p-url-home`]],template:function(i,o){i&1&&FO(0,Ne,14,9,`po-page-edit`,1)(1,ze,1,2,`po-page-change-password`,2),i&2&&VO(o.changePasswordScreen?1:0)},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,tie,j4,Koe,Aze,Yn],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-modify-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-change-password-modify`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Change Password Modify`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`@if (!changePasswordScreen) {
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-change-password-modify`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Fe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();function He(a,F){if(a&1){let r=YO();Qc(0,`po-page-login`,2),vt(`p-login-submit`,function(){B_(r);let o=ek();return U_(o.checkLogin())}),Kg()}}function We(a,F){if(a&1){let r=YO();Qc(0,`po-page-change-password`,3),vt(`p-submit`,function(){B_(r);let o=ek();return U_(o.onSubmit())}),Kg()}if(a&2){let r=ek();Rb(`p-requirements`,r.requirements)}}var ye=(()=>{class a{changePassword;login=!1;requirements=[{requirement:`Use at least one symbol (ex. !, @, #).`,status:this.validateSymbols.bind(this)},{requirement:`Mix uppercase and lowercase characters.`,status:this.validateCases.bind(this)},{requirement:`Min of 5 characters.`,status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-create`]],viewQuery:function(i,o){if(i&1&&Du(Yn,7),i&2){let m;No(m=xo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-requirements`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-submit`,`p-requirements`]],template:function(i,o){i&1&&(FO(0,He,1,0,`po-page-login`,0),FO(1,We,1,1,`po-page-change-password`,1)),i&2&&(VO(o.login?-1:0),wg(),VO(o.login?1:-1))},dependencies:[Yn,ta],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-create-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-change-password-create`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Change Password Create`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`@if (!login) {
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-change-password-create`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,je,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return a})();var Qe=()=>({url:`https://po-sample-api.onrender.com/v1/users`,type:`all`,contactMail:`support@mail.com`});var ve=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-request`]],standalone:!1,decls:6,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your Password Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-token`,`rzDsQiSYoq`,`p-url-new-password`,`https://thf.totvs.com.br/sample/api/new-password`,3,`p-recovery`]],template:function(i,o){i&1&&(Qc(0,`po-container`)(1,`div`,0),vu(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Kg()(),vu(5,`po-page-change-password`,4)),i&2&&(wg(5),Rb(`p-recovery`,Lk(1,Qe)))},dependencies:[Fc,Joe,Yn],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-request-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-change-password-request`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Change Password Request`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-container>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-change-password-request`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Je,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ve],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-doc`]],standalone:!1,decls:671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-change-password-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-hide-current-password`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete-password`,1,`docs-api-properties-row`],[`id`,`prop-p-recovery`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRecovery`],[`id`,`prop-p-requirements`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRequirement[]`],[`id`,`prop-p-secondary-logo`,1,`docs-api-properties-row`],[`id`,`event-p-submit`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-token`,1,`docs-api-properties-row`],[`id`,`prop-p-url-back`,1,`docs-api-properties-row`],[`id`,`prop-p-url-home`,1,`docs-api-properties-row`],[`id`,`prop-p-url-new-password`,1,`docs-api-properties-row`],[`id`,`method-openConfirmation`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`interface-po-page-change-password-recovery`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-change-password-recovery-contact-mail`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-recovery-phone-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-recovery-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`],[`id`,`interface-po-page-change-password-recovery-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-requirement`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-change-password-requirement-requirement`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-requirement-status`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-change-password-current-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-new-password`,1,`docs-api-properties-row`]],template:function(i,o){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageChangePasswordModule } from '@po-ui/ng-templates';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do template do po-page-change-password.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoPageChangePasswordComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-page-change-password`),Kg(),Sk(17,` é utilizado como template para tela de cadastro ou alteração de senha.`),Kg(),Qc(18,`p`),Sk(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),Kg(),Qc(20,`p`),Sk(21,`A propriedade `),Qc(22,`code`),Sk(23,`p-url-new-password`),Kg(),Sk(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Qc(25,`em`),Sk(26,`client side`),Kg(),Sk(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Qc(28,`em`),Sk(29,`propriedades`),Kg(),Sk(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Kg(),Qc(31,`p`),Sk(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Qc(33,`em`),Sk(34,`assets`),Kg(),Sk(35,` no arquivo `),Qc(36,`strong`),Sk(37,`angular.json`),Kg(),Sk(38,` da aplicação na seguinte ordem:`),Kg(),Qc(39,`pre`)(40,`code`),Sk(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()()(),Qc(42,`div`,6)(43,`h4`,7),Sk(44,`Seletor`),Kg(),Qc(45,`pre`,8),Sk(46,`<po-page-change-password
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
`),Kg()(),Qc(47,`h4`,9),Sk(48,`Propriedades`),Kg(),Qc(49,`table`,10)(50,`tr`,11)(51,`th`,12),Sk(52,`Nome`),Kg(),Qc(53,`th`,12),Sk(54,`Tipo`),Kg(),Qc(55,`th`,12),Sk(56,`Padrão`),Kg(),Qc(57,`th`,12),Sk(58,`Descrição`),Kg()(),Qc(59,`tr`,13)(60,`td`,14)(61,`div`,15)(62,`span`,16),Sk(63,` p-components-size`),vu(64,`br`),Kg()()(),Qc(65,`td`,17)(66,`code`,18),Sk(67,`string`),Kg()(),Qc(68,`td`,19)(69,`p`)(70,`code`),Sk(71,`medium`),Kg()()(),Qc(72,`td`,20)(73,`em`)(74,`strong`),Sk(75,`(opcional)`),Kg()(),Qc(76,`p`),Sk(77,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(78,`ul`)(79,`li`)(80,`code`),Sk(81,`small`),Kg(),Sk(82,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(83,`li`)(84,`code`),Sk(85,`medium`),Kg(),Sk(86,`: aplica a medida medium de cada componente.`),Kg()(),Qc(87,`blockquote`)(88,`p`),Sk(89,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(90,`code`),Sk(91,`medium`),Kg(),Sk(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(93,`a`,21),Sk(94,`po-theme`),Kg(),Sk(95,`.`),Kg()()()(),Qc(96,`tr`,22)(97,`td`,14)(98,`div`,15)(99,`span`,16),Sk(100,` p-hide-current-password`),vu(101,`br`),Kg()()(),Qc(102,`td`,17)(103,`code`,23),Sk(104,`boolean`),Kg()(),Qc(105,`td`,19)(106,`p`)(107,`code`),Sk(108,`false`),Kg()()(),Qc(109,`td`,20)(110,`em`)(111,`strong`),Sk(112,`(opcional)`),Kg()(),Qc(113,`p`),Sk(114,`Esconde o campo `),Qc(115,`code`),Sk(116,`Senha atual`),Kg(),Sk(117,` para que o template seja para criação de senha.`),Kg()()(),Qc(118,`tr`,24)(119,`td`,14)(120,`div`,15)(121,`span`,16),Sk(122,` p-logo`),vu(123,`br`),Kg()()(),Qc(124,`td`,17)(125,`code`,18),Sk(126,`string`),Kg()(),Qc(127,`td`,19),Sk(128,`-`),Kg(),Qc(129,`td`,20)(130,`em`)(131,`strong`),Sk(132,`(opcional)`),Kg()(),Qc(133,`p`),Sk(134,`Caminho para a logomarca localizada na parte superior.`),Kg(),Qc(135,`blockquote`)(136,`p`),Sk(137,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),Kg()()()(),Qc(138,`tr`,25)(139,`td`,14)(140,`div`,15)(141,`span`,16),Sk(142,` p-no-autocomplete-password`),vu(143,`br`),Kg()()(),Qc(144,`td`,17)(145,`code`,23),Sk(146,`boolean`),Kg()(),Qc(147,`td`,19)(148,`p`)(149,`code`),Sk(150,`true`),Kg()()(),Qc(151,`td`,20)(152,`em`)(153,`strong`),Sk(154,`(opcional)`),Kg()(),Qc(155,`p`),Sk(156,`Define a propriedade nativa `),Qc(157,`code`),Sk(158,`autocomplete`),Kg(),Sk(159,` do campo como `),Qc(160,`code`),Sk(161,`off`),Kg(),Sk(162,`.`),Kg(),Qc(163,`blockquote`)(164,`p`),Sk(165,`No input de senha(`),Qc(166,`code`),Sk(167,`po-password`),Kg(),Sk(168,`) será definido como `),Qc(169,`code`),Sk(170,`new-password`),Kg(),Sk(171,`.`),Kg()()()(),Qc(172,`tr`,26)(173,`td`,14)(174,`div`,15)(175,`span`,16),Sk(176,` p-recovery`),vu(177,`br`),Kg()()(),Qc(178,`td`,17)(179,`code`,18),Sk(180,`string `),Kg(),Qc(181,`code`,27),Sk(182,` Function `),Kg(),Qc(183,`code`,28),Sk(184,` PoPageChangePasswordRecovery`),Kg()(),Qc(185,`td`,19),Sk(186,`-`),Kg(),Qc(187,`td`,20)(188,`em`)(189,`strong`),Sk(190,`(opcional)`),Kg()(),Qc(191,`p`),Sk(192,`URL para a ação do link `),Qc(193,`code`),Sk(194,`Esqueceu a senha`),Kg(),Sk(195,`.`),Kg(),Qc(196,`p`),Sk(197,`A propriedade aceita os seguintes tipos:`),Kg(),Qc(198,`ul`)(199,`li`)(200,`p`)(201,`strong`),Sk(202,`String`),Kg(),Sk(203,`: informe uma url externa ou uma rota válida;`),Kg()(),Qc(204,`li`)(205,`p`)(206,`strong`),Sk(207,`Function`),Kg(),Sk(208,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),Kg(),Qc(209,`pre`)(210,`code`),Sk(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),Kg()()(),Qc(212,`li`)(213,`p`)(214,`strong`),Sk(215,`PoPageChangePasswordRecovery`),Kg(),Sk(216,`: cria-se vínculo automático com o template `),Qc(217,`strong`),Sk(218,`po-modal-password-recovery`),Kg(),Sk(219,`.
O objeto deve conter a `),Qc(220,`strong`),Sk(221,`url`),Kg(),Sk(222,` para requisição dos recursos e pode-se definir o `),Qc(223,`strong`),Sk(224,`tipo`),Kg(),Sk(225,` de modal para recupera\xE7\xE3o de senha,
`),Qc(226,`strong`),Sk(227,`email`),Kg(),Sk(228,` para contato e `),Qc(229,`strong`),Sk(230,`máscara`),Kg(),Sk(231,` do campo de telefone.`),Kg()()(),Qc(232,`blockquote`)(233,`p`),Sk(234,`Caso não tenha valor o link `),Qc(235,`code`),Sk(236,`Esqueceu a senha`),Kg(),Sk(237,` desaparece.`),Kg()()()(),Qc(238,`tr`,29)(239,`td`,14)(240,`div`,15)(241,`span`,16),Sk(242,` p-requirements`),vu(243,`br`),Kg()()(),Qc(244,`td`,17)(245,`code`,30),Sk(246,`PoPageChangePasswordRequirement[]`),Kg()(),Qc(247,`td`,19),Sk(248,`-`),Kg(),Qc(249,`td`,20)(250,`em`)(251,`strong`),Sk(252,`(opcional)`),Kg()(),Qc(253,`p`),Sk(254,`Lista de regras para criação e alteração de senha.`),Kg()()(),Qc(255,`tr`,31)(256,`td`,14)(257,`div`,15)(258,`span`,16),Sk(259,` p-secondary-logo`),vu(260,`br`),Kg()()(),Qc(261,`td`,17)(262,`code`,18),Sk(263,`string`),Kg()(),Qc(264,`td`,19),Sk(265,`-`),Kg(),Qc(266,`td`,20)(267,`em`)(268,`strong`),Sk(269,`(opcional)`),Kg()(),Qc(270,`p`),Sk(271,`Caminho para a logomarca localizada no rodapé.`),Kg()()(),Qc(272,`tr`,32)(273,`td`,14)(274,`div`,33)(275,`span`,34),Sk(276,` (p-submit)`),vu(277,`br`),Kg()()(),Qc(278,`td`,17)(279,`code`,35),Sk(280,`EventEmitter`),Kg()(),Qc(281,`td`,19),Sk(282,`-`),Kg(),Qc(283,`td`,20)(284,`em`)(285,`strong`),Sk(286,`(opcional)`),Kg()(),Qc(287,`p`),Sk(288,`Função executada ao submeter o form pelo botão salvar.`),Kg(),Qc(289,`p`),Sk(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Qc(291,`code`),Sk(292,`openConfirmation`),Kg(),Sk(293,`. Exemplo:`),Kg(),Qc(294,`pre`)(295,`code`),Sk(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),Kg()(),Qc(297,`blockquote`)(298,`p`),Sk(299,`Esta propriedade será ignorada se for definido valor para a propriedade `),Qc(300,`code`),Sk(301,`p-url-new-password`),Kg(),Sk(302,`.`),Kg()()()(),Qc(303,`tr`,36)(304,`td`,14)(305,`div`,15)(306,`span`,16),Sk(307,` p-token`),vu(308,`br`),Kg()()(),Qc(309,`td`,17)(310,`code`,18),Sk(311,`string`),Kg()(),Qc(312,`td`,19),Sk(313,`-`),Kg(),Qc(314,`td`,20)(315,`em`)(316,`strong`),Sk(317,`(opcional)`),Kg()(),Qc(318,`p`),Sk(319,`Token para solicitação de troca/recuperação de senha.`),Kg(),Qc(320,`blockquote`)(321,`p`),Sk(322,`Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.`),Kg()()()(),Qc(323,`tr`,37)(324,`td`,14)(325,`div`,15)(326,`span`,16),Sk(327,` p-url-back`),vu(328,`br`),Kg()()(),Qc(329,`td`,17)(330,`code`,18),Sk(331,`string`),Kg()(),Qc(332,`td`,19)(333,`p`)(334,`code`),Sk(335,`/`),Kg()()(),Qc(336,`td`,20)(337,`em`)(338,`strong`),Sk(339,`(opcional)`),Kg()(),Qc(340,`p`),Sk(341,`URL para a ação de retorno da página.`),Kg(),Qc(342,`blockquote`)(343,`p`),Sk(344,`O botão `),Qc(345,`code`),Sk(346,`Voltar`),Kg(),Sk(347,` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `),Qc(348,`code`),Sk(349,`p-hide-current-password`),Kg(),Sk(350,` for
falsa.`),Kg()()()(),Qc(351,`tr`,38)(352,`td`,14)(353,`div`,15)(354,`span`,16),Sk(355,` p-url-home`),vu(356,`br`),Kg()()(),Qc(357,`td`,17)(358,`code`,18),Sk(359,`string`),Kg()(),Qc(360,`td`,19)(361,`p`)(362,`code`),Sk(363,`/`),Kg()()(),Qc(364,`td`,20)(365,`em`)(366,`strong`),Sk(367,`(opcional)`),Kg()(),Qc(368,`p`),Sk(369,`URL para a ação do botão `),Qc(370,`code`),Sk(371,`Entrar no sistema`),Kg(),Sk(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Qc(373,`code`),Sk(374,`openConfirmation`),Kg(),Sk(375,`.`),Kg()()(),Qc(376,`tr`,39)(377,`td`,14)(378,`div`,15)(379,`span`,16),Sk(380,` p-url-new-password`),vu(381,`br`),Kg()()(),Qc(382,`td`,17)(383,`code`,18),Sk(384,`string`),Kg()(),Qc(385,`td`,19),Sk(386,`-`),Kg(),Qc(387,`td`,20)(388,`em`)(389,`strong`),Sk(390,`(opcional)`),Kg()(),Qc(391,`p`),Sk(392,`Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `),Qc(393,`code`),Sk(394,`p-submit`),Kg(),Sk(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),Kg(),Qc(396,`h3`),Sk(397,`Processo`),Kg(),Qc(398,`p`),Sk(399,`Ao digitar um valor válido nos campos de senha e pressionar `),Qc(400,`strong`),Sk(401,`salvar`),Kg(),Sk(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Qc(403,`code`),Sk(404,`POST`),Kg(),Sk(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),Kg(),Qc(406,`pre`)(407,`code`),Sk(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),Kg()(),Qc(409,`p`),Sk(410,`O código de resposta HTTP de status esperado é `),Qc(411,`code`),Sk(412,`204`),Kg(),Sk(413,`.`),Kg(),Qc(414,`p`),Sk(415,`Em caso de `),Qc(416,`strong`),Sk(417,`sucesso`),Kg(),Sk(418,`, será exibida a modal de confirmação de senha alterada.`),Kg(),Qc(419,`blockquote`)(420,`p`),Sk(421,`O token será informado pela propriedade `),Qc(422,`code`),Sk(423,`p-token`),Kg(),Sk(424,`do componente ou por um `),Qc(425,`em`),Sk(426,`query parameter`),Kg(),Sk(427,` na URL do template.`),Kg()(),Qc(428,`p`)(429,`em`),Sk(430,`Processo finalizado.`),Kg()(),vu(431,`hr`),Qc(432,`h4`),Sk(433,`Praticidade`),Kg(),Qc(434,`p`),Sk(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Qc(436,`code`),Sk(437,`po-page-change-password`),Kg(),Sk(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Qc(439,`code`),Sk(440,`/change-password`),Kg(),Sk(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),Kg(),Qc(442,`pre`)(443,`code`),Sk(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),Kg()(),Qc(445,`p`),Sk(446,`O metadado `),Qc(447,`code`),Sk(448,`serviceApi`),Kg(),Sk(449,` deve ser a `),Qc(450,`strong`),Sk(451,`url`),Kg(),Sk(452,` para requisição dos recursos de troca de senha. E `),Qc(453,`code`),Sk(454,`recovery`),Kg(),Sk(455,` \xE9 a interface
`),Qc(456,`code`),Sk(457,`PoPageChangePasswordRecovery`),Kg(),Sk(458,` responsável pelas especificações contidas na modal de recuperação de senha.`),Kg(),Qc(459,`blockquote`)(460,`p`),Sk(461,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),Kg()()()()(),Qc(462,`h3`,9),Sk(463,`Métodos`),Kg(),Qc(464,`table`,40)(465,`tr`,41)(466,`th`,42)(467,`div`,15)(468,`h4`)(469,`span`,16),Sk(470,` openConfirmation `),Kg()()()()(),Qc(471,`tr`,20)(472,`td`,20)(473,`p`),Sk(474,`Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `),Qc(475,`code`),Sk(476,`p-url-home`),Kg(),Sk(477,``),Kg()()()(),vu(478,`br`),Qc(479,`h3`),Sk(480,`Interfaces`),Kg(),Qc(481,`h4`,43)(482,`code`,5),Sk(483,`PoPageChangePasswordRecovery`),Kg()(),Qc(484,`div`,2)(485,`p`),Sk(486,`Interface para especificação do tipo de recuperação de senha no `),Qc(487,`code`),Sk(488,`po-modal-password-recovery`),Kg(),Sk(489,`.`),Kg()(),Qc(490,`h4`,9),Sk(491,`Propriedades`),Kg(),Qc(492,`table`,10)(493,`tr`,11)(494,`th`,12),Sk(495,`Nome`),Kg(),Qc(496,`th`,12),Sk(497,`Tipo`),Kg(),Qc(498,`th`,12),Sk(499,`Descrição`),Kg()(),Qc(500,`tr`,44)(501,`td`,14)(502,`div`,15)(503,`span`,16),Sk(504,` contactMail`),vu(505,`br`),Kg()()(),Qc(506,`td`,17)(507,`code`,18),Sk(508,`string`),Kg()(),Qc(509,`td`,20)(510,`em`)(511,`strong`),Sk(512,`(opcional)`),Kg()(),Qc(513,`p`),Sk(514,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Kg()()(),Qc(515,`tr`,45)(516,`td`,14)(517,`div`,15)(518,`span`,16),Sk(519,` phoneMask`),vu(520,`br`),Kg()()(),Qc(521,`td`,17)(522,`code`,18),Sk(523,`string`),Kg()(),Qc(524,`td`,20)(525,`em`)(526,`strong`),Sk(527,`(opcional)`),Kg()(),Qc(528,`p`),Sk(529,`Definição da máscara do campo de telefone.`),Kg()()(),Qc(530,`tr`,46)(531,`td`,14)(532,`div`,15)(533,`span`,16),Sk(534,` type`),vu(535,`br`),Kg()()(),Qc(536,`td`,17)(537,`code`,47),Sk(538,`PoModalPasswordRecoveryType`),Kg()(),Qc(539,`td`,20)(540,`em`)(541,`strong`),Sk(542,`(opcional)`),Kg()(),Qc(543,`p`),Sk(544,`Enum para especificação do tipo de recuperação de senha `),Qc(545,`a`,48),Sk(546,`PoModalPasswordRecoveryType`),Kg(),Sk(547,`.`),Kg(),Qc(548,`blockquote`)(549,`p`),Sk(550,`Caso não seja definido valor se assume o padrão `),Qc(551,`code`),Sk(552,`PoModalPasswordRecoveryType.Email`),Kg(),Sk(553,`.`),Kg()()()(),Qc(554,`tr`,49)(555,`td`,14)(556,`div`,15)(557,`span`,16),Sk(558,` url`),vu(559,`br`),Kg()()(),Qc(560,`td`,17)(561,`code`,18),Sk(562,`string`),Kg()(),Qc(563,`td`,20)(564,`p`),Sk(565,`Endpoint usado pelo template `),Qc(566,`strong`),Sk(567,`PoModalPasswordRecovery`),Kg(),Sk(568,` para requisição do recurso.`),Kg(),Qc(569,`blockquote`)(570,`p`),Sk(571,`Saiba mais em `),Qc(572,`a`,48),Sk(573,`PoModalPasswordRecovery`),Kg(),Sk(574,`.`),Kg()()()()(),Qc(575,`h4`,50)(576,`code`,5),Sk(577,`PoPageChangePasswordRequirement`),Kg()(),Qc(578,`div`,2)(579,`p`),Sk(580,`Interface com a definição dos objetos aceitos pela propriedade `),Qc(581,`code`),Sk(582,`p-password-requirements`),Kg(),Sk(583,`.`),Kg()(),Qc(584,`h4`,9),Sk(585,`Propriedades`),Kg(),Qc(586,`table`,10)(587,`tr`,11)(588,`th`,12),Sk(589,`Nome`),Kg(),Qc(590,`th`,12),Sk(591,`Tipo`),Kg(),Qc(592,`th`,12),Sk(593,`Descrição`),Kg()(),Qc(594,`tr`,51)(595,`td`,14)(596,`div`,15)(597,`span`,16),Sk(598,` requirement`),vu(599,`br`),Kg()()(),Qc(600,`td`,17)(601,`code`,18),Sk(602,`string`),Kg()(),Qc(603,`td`,20)(604,`p`),Sk(605,`Requisito.`),Kg()()(),Qc(606,`tr`,52)(607,`td`,14)(608,`div`,15)(609,`span`,16),Sk(610,` status`),vu(611,`br`),Kg()()(),Qc(612,`td`,17)(613,`code`,23),Sk(614,`boolean `),Kg(),Qc(615,`code`,27),Sk(616,` Function`),Kg()(),Qc(617,`td`,20)(618,`p`),Sk(619,`Função que deve retornar um booleano para validar um requisito de senha.`),Kg(),Qc(620,`p`),Sk(621,`Também é possível informar diretamente um valor booleano que representa esta validação.`),Kg()()()(),Qc(622,`h4`,53)(623,`code`,5),Sk(624,`PoPageChangePassword`),Kg()(),Qc(625,`div`,2)(626,`p`),Sk(627,`Interface com a definição do objeto gerado pelo formulário do componente `),Qc(628,`code`),Sk(629,`po-page-change-password`),Kg(),Sk(630,`.`),Kg()(),Qc(631,`h4`,9),Sk(632,`Propriedades`),Kg(),Qc(633,`table`,10)(634,`tr`,11)(635,`th`,12),Sk(636,`Nome`),Kg(),Qc(637,`th`,12),Sk(638,`Tipo`),Kg(),Qc(639,`th`,12),Sk(640,`Descrição`),Kg()(),Qc(641,`tr`,54)(642,`td`,14)(643,`div`,15)(644,`span`,16),Sk(645,` currentPassword`),vu(646,`br`),Kg()()(),Qc(647,`td`,17)(648,`code`,18),Sk(649,`string`),Kg()(),Qc(650,`td`,20)(651,`em`)(652,`strong`),Sk(653,`(opcional)`),Kg()(),Qc(654,`p`),Sk(655,`Senha atual`),Kg()()(),Qc(656,`tr`,55)(657,`td`,14)(658,`div`,15)(659,`span`,16),Sk(660,` newPassword`),vu(661,`br`),Kg()()(),Qc(662,`td`,17)(663,`code`,18),Sk(664,`string`),Kg()(),Qc(665,`td`,20)(666,`em`)(667,`strong`),Sk(668,`(opcional)`),Kg()(),Qc(669,`p`),Sk(670,`Nova senha`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Xe(a,F){if(a&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-page-change-password-basic-view`)(2,`sample-po-page-change-password-labs-view`)(3,`sample-po-page-change-password-modify-view`)(4,`sample-po-page-change-password-create-view`)(5,`sample-po-page-change-password-request-view`),Kg()}if(a&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var $e=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Change Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,o){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Xe,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-page-change-password-doc`),Kg()()()),i&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,we,Ee,fe,xe,_e,Me],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild($e),GV]})}return a})();var Wt=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Te]})}return a})();export{Wt as DocPoPageChangePasswordModule};