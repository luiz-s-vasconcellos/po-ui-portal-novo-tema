import{$ as R4,$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,On as sie,Ot as Zte,P as Joe,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,ca as jk,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,jn as tie,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,s as Aze,va as nk,vn as oi,w as Fc,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{c as Yn,n as P,t as M,y as ta}from"./main-3VBI2GXJ.js";var Pe=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-basic`]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&_u(0,`po-page-change-password`)},dependencies:[Yn],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Change Password Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-change-password></po-page-change-password>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-change-password-basic`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Pe],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poDialog=p(sie);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:``,status:!1}}restore(){this.componentsSize=`medium`,this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack=``,this.urlHome=``,this.recovery=``,this.requirement={requirement:``,status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-labs`]],viewQuery:function(i,o){if(i&1&&Cu(Yn,7),i&2){let m;No(m=xo())&&(o.changePassword=m.first)}},standalone:!1,decls:26,vars:19,consts:[[`f`,`ngForm`],[`fRequirements`,`ngForm`],[3,`p-submit`,`p-components-size`,`p-hide-current-password`,`p-logo`,`p-recovery`,`p-requirements`,`p-secondary-logo`,`p-url-back`,`p-url-home`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`urlHome`,`p-label`,`Url home`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-label`,`Recovery`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlBack`,`p-label`,`Url back`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`hideCurrentPassword`,`p-label`,`Hide current password`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`requirement`,`p-label`,`Requirement`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`requirementStatus`,`p-label`,`Requirement Status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Requirement`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,o){if(i&1){let m=ZO();Jc(0,`po-page-change-password`,2),vt(`p-submit`,function(p){return o.submit(p)}),Zg(),_u(1,`po-divider`,3),Jc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.urlHome,p)||(o.urlHome=p),H_(p)}),Zg(),Jc(6,`po-input`,6),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.recovery,p)||(o.recovery=p),H_(p)}),Zg()(),Jc(7,`div`,4)(8,`po-input`,7),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.urlBack,p)||(o.urlBack=p),H_(p)}),Zg(),Jc(9,`po-input`,8),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.logo,p)||(o.logo=p),H_(p)}),Zg()(),Jc(10,`div`,4)(11,`po-input`,9),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.secondaryLogo,p)||(o.secondaryLogo=p),H_(p)}),Zg(),Jc(12,`po-switch`,10),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),H_(p)}),Zg()(),Jc(13,`po-radio-group`,11),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.componentsSize,p)||(o.componentsSize=p),H_(p)}),Zg(),_u(14,`br`)(15,`po-divider`),Jc(16,`form`,null,1)(18,`div`,4)(19,`po-input`,12),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.requirement.requirement,p)||(o.requirement.requirement=p),H_(p)}),Zg(),Jc(20,`po-switch`,13),W0(),Kb(`ngModelChange`,function(p){return U_(m),Ak(o.requirement.status,p)||(o.requirement.status=p),H_(p)}),Zg()(),Jc(21,`div`,4)(22,`po-button`,14),vt(`p-click`,function(){return o.addRequirement()}),Zg()()(),_u(23,`po-divider`),Jc(24,`div`,4)(25,`po-button`,15),vt(`p-click`,function(){return o.restore()}),Zg()()()}if(i&2){let m=sk(17);Rb(`p-components-size`,o.componentsSize)(`p-hide-current-password`,o.hideCurrentPassword)(`p-logo`,o.logo)(`p-recovery`,o.recovery)(`p-requirements`,o.requirements)(`p-secondary-logo`,o.secondaryLogo)(`p-url-back`,o.urlBack)(`p-url-home`,o.urlHome),Ig(5),Yb(`ngModel`,o.urlHome),Y0(),Ig(),Yb(`ngModel`,o.recovery),Y0(),Ig(2),Yb(`ngModel`,o.urlBack),Y0(),Ig(),Yb(`ngModel`,o.logo),Y0(),Ig(2),Yb(`ngModel`,o.secondaryLogo),Y0(),Ig(),Yb(`ngModel`,o.hideCurrentPassword),Y0(),Ig(),Yb(`ngModel`,o.componentsSize),Rb(`p-options`,o.componentsSizeOptions),Y0(),Ig(6),Yb(`ngModel`,o.requirement.requirement),Y0(),Ig(),Yb(`ngModel`,o.requirement.status),Y0(),Ig(2),Rb(`p-disabled`,m.form.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,Zte,R4,Yn],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Change Password Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-change-password
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-change-password-labs`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ve,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();function Ne(a,F){if(a&1){let r=ZO();Jc(0,`po-page-edit`,1)(1,`form`,null,0)(3,`div`,3)(4,`div`,3)(5,`po-input`,4),W0(),Zg(),Jc(6,`po-datepicker`,5),W0(),Kb(`ngModelChange`,function(o){U_(r);let m=nk();return Ak(m.birthday,o)||(m.birthday=o),H_(o)}),Zg(),Jc(7,`po-input`,6),W0(),Zg()(),Jc(8,`div`,3)(9,`po-select`,7),W0(),Kb(`ngModelChange`,function(o){U_(r);let m=nk();return Ak(m.country,o)||(m.country=o),H_(o)}),Zg(),Jc(10,`po-select`,8),W0(),Kb(`ngModelChange`,function(o){U_(r);let m=nk();return Ak(m.city,o)||(m.city=o),H_(o)}),Zg(),Jc(11,`po-input`,9),W0(),Zg()(),_u(12,`po-divider`,10),Jc(13,`po-button`,11),vt(`p-click`,function(){U_(r);let o=nk();return H_(o.showChangePasswordScreen())}),Zg()()()()}if(a&2){let r=nk();Rb(`p-breadcrumb`,r.breadcrumb),Ig(5),Rb(`ngModel`,r.fullName),Y0(),Ig(),Yb(`ngModel`,r.birthday),Y0(),Ig(),Rb(`ngModel`,r.email),Y0(),Ig(2),Yb(`ngModel`,r.country),Rb(`p-options`,r.countryOptions),Y0(),Ig(),Yb(`ngModel`,r.city),Rb(`p-options`,r.cityOptions),Y0(),Ig(),Rb(`ngModel`,r.phoneNumber),Y0()}}function ze(a,F){if(a&1){let r=ZO();Jc(0,`po-page-change-password`,12),vt(`p-submit`,function(){U_(r);let o=nk();return H_(o.onSubmit())}),Zg()}if(a&2){let r=nk();Rb(`p-url-back`,r.url)(`p-url-home`,r.url)}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:`Home`,link:`/documentation/po-page-change-password`},{label:`Profile`}]};cityOptions=[{label:`São Paulo`,value:`sp`}];countryOptions=[{label:`Brazil`,value:`br`}];ngOnInit(){this.initialize()}initialize(){this.birthday=`1991-11-28T00:00:00-02:00`,this.changePasswordScreen=!1,this.city=`sp`,this.country=`br`,this.email=`natasha.romanova@mail.com.br`,this.fullName=`Natasha Romanova`,this.phoneNumber=`119999999999`,this.url=`/home`}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-modify`]],viewQuery:function(i,o){if(i&1&&Cu(Yn,5),i&2){let m;No(m=xo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:1,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Profile`,3,`p-breadcrumb`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-url-back`,`p-url-home`],[1,`po-row`],[`name`,`fullName`,`p-label`,`Name`,1,`po-md-12`,3,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday Date`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-label`,`Email`,1,`po-md-6`,3,`ngModel`],[`name`,`country`,`p-disabled`,``,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`city`,`p-disabled`,``,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`phoneNumber`,`p-label`,`Phone Number`,`p-mask`,`(99)99999-9999`,1,`po-md-12`,3,`ngModel`],[`p-label`,`Change Password`,1,`po-md-12`,`po-mt-3`],[`p-label`,`Change Your Password`,1,`po-pb-3`,`po-pt-3`,`po-md-3`,3,`p-click`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-submit`,`p-url-back`,`p-url-home`]],template:function(i,o){i&1&&VO(0,Ne,14,9,`po-page-edit`,1)(1,ze,1,2,`po-page-change-password`,2),i&2&&BO(o.changePasswordScreen?1:0)},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,tie,j4,Koe,Aze,Yn],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-modify-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Change Password Modify`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`@if (!changePasswordScreen) {
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-change-password-modify`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Fe,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();function He(a,F){if(a&1){let r=ZO();Jc(0,`po-page-login`,2),vt(`p-login-submit`,function(){U_(r);let o=nk();return H_(o.checkLogin())}),Zg()}}function We(a,F){if(a&1){let r=ZO();Jc(0,`po-page-change-password`,3),vt(`p-submit`,function(){U_(r);let o=nk();return H_(o.onSubmit())}),Zg()}if(a&2){let r=nk();Rb(`p-requirements`,r.requirements)}}var xe=(()=>{class a{changePassword;login=!1;requirements=[{requirement:`Use at least one symbol (ex. !, @, #).`,status:this.validateSymbols.bind(this)},{requirement:`Mix uppercase and lowercase characters.`,status:this.validateCases.bind(this)},{requirement:`Min of 5 characters.`,status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-create`]],viewQuery:function(i,o){if(i&1&&Cu(Yn,7),i&2){let m;No(m=xo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-requirements`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-submit`,`p-requirements`]],template:function(i,o){i&1&&(VO(0,He,1,0,`po-page-login`,0),VO(1,We,1,1,`po-page-change-password`,1)),i&2&&(BO(o.login?-1:0),Ig(),BO(o.login?1:-1))},dependencies:[Yn,ta],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-create-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Change Password Create`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`@if (!login) {
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-change-password-create`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,je,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return a})();var Qe=()=>({url:`https://po-sample-api.onrender.com/v1/users`,type:`all`,contactMail:`support@mail.com`});var ve=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-request`]],standalone:!1,decls:6,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your Password Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-token`,`rzDsQiSYoq`,`p-url-new-password`,`https://thf.totvs.com.br/sample/api/new-password`,3,`p-recovery`]],template:function(i,o){i&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Zg()(),_u(5,`po-page-change-password`,4)),i&2&&(Ig(5),Rb(`p-recovery`,jk(1,Qe)))},dependencies:[Fc,Joe,Yn],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Change Password Request`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-change-password-request`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Je,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ve],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-doc`]],standalone:!1,decls:671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRecovery`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRequirement[]`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(i,o){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageChangePasswordModule } from '@po-ui/ng-templates';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do template do po-page-change-password.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoPageChangePasswordComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-page-change-password`),Zg(),Tk(17,` é utilizado como template para tela de cadastro ou alteração de senha.`),Zg(),Jc(18,`p`),Tk(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),Zg(),Jc(20,`p`),Tk(21,`A propriedade `),Jc(22,`code`),Tk(23,`p-url-new-password`),Zg(),Tk(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Jc(25,`em`),Tk(26,`client side`),Zg(),Tk(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Jc(28,`em`),Tk(29,`propriedades`),Zg(),Tk(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Zg(),Jc(31,`p`),Tk(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(33,`em`),Tk(34,`assets`),Zg(),Tk(35,` no arquivo `),Jc(36,`strong`),Tk(37,`angular.json`),Zg(),Tk(38,` da aplicação na seguinte ordem:`),Zg(),Jc(39,`pre`)(40,`code`),Tk(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Zg()()(),Jc(42,`div`,6)(43,`h4`,7),Tk(44,`Seletor`),Zg(),Jc(45,`pre`,8),Tk(46,`<po-page-change-password
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
`),Zg()(),Jc(47,`h4`,9),Tk(48,`Propriedades`),Zg(),Jc(49,`table`,10)(50,`tr`,11)(51,`th`,12),Tk(52,`Nome`),Zg(),Jc(53,`th`,12),Tk(54,`Tipo`),Zg(),Jc(55,`th`,12),Tk(56,`Padrão`),Zg(),Jc(57,`th`,12),Tk(58,`Descrição`),Zg()(),Jc(59,`tr`,13)(60,`td`,14)(61,`div`,15)(62,`span`,16),Tk(63,` p-components-size`),_u(64,`br`),Zg()()(),Jc(65,`td`,17)(66,`code`,18),Tk(67,`string`),Zg()(),Jc(68,`td`,19)(69,`p`)(70,`code`),Tk(71,`medium`),Zg()()(),Jc(72,`td`,20)(73,`em`)(74,`strong`),Tk(75,`(opcional)`),Zg()(),Jc(76,`p`),Tk(77,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(78,`ul`)(79,`li`)(80,`code`),Tk(81,`small`),Zg(),Tk(82,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(83,`li`)(84,`code`),Tk(85,`medium`),Zg(),Tk(86,`: aplica a medida medium de cada componente.`),Zg()(),Jc(87,`blockquote`)(88,`p`),Tk(89,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(90,`code`),Tk(91,`medium`),Zg(),Tk(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(93,`a`,21),Tk(94,`po-theme`),Zg(),Tk(95,`.`),Zg()()()(),Jc(96,`tr`,13)(97,`td`,14)(98,`div`,15)(99,`span`,16),Tk(100,` p-hide-current-password`),_u(101,`br`),Zg()()(),Jc(102,`td`,17)(103,`code`,22),Tk(104,`boolean`),Zg()(),Jc(105,`td`,19)(106,`p`)(107,`code`),Tk(108,`false`),Zg()()(),Jc(109,`td`,20)(110,`em`)(111,`strong`),Tk(112,`(opcional)`),Zg()(),Jc(113,`p`),Tk(114,`Esconde o campo `),Jc(115,`code`),Tk(116,`Senha atual`),Zg(),Tk(117,` para que o template seja para criação de senha.`),Zg()()(),Jc(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),Tk(122,` p-logo`),_u(123,`br`),Zg()()(),Jc(124,`td`,17)(125,`code`,18),Tk(126,`string`),Zg()(),Jc(127,`td`,19),Tk(128,`-`),Zg(),Jc(129,`td`,20)(130,`em`)(131,`strong`),Tk(132,`(opcional)`),Zg()(),Jc(133,`p`),Tk(134,`Caminho para a logomarca localizada na parte superior.`),Zg(),Jc(135,`blockquote`)(136,`p`),Tk(137,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),Zg()()()(),Jc(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),Tk(142,` p-no-autocomplete-password`),_u(143,`br`),Zg()()(),Jc(144,`td`,17)(145,`code`,22),Tk(146,`boolean`),Zg()(),Jc(147,`td`,19)(148,`p`)(149,`code`),Tk(150,`true`),Zg()()(),Jc(151,`td`,20)(152,`em`)(153,`strong`),Tk(154,`(opcional)`),Zg()(),Jc(155,`p`),Tk(156,`Define a propriedade nativa `),Jc(157,`code`),Tk(158,`autocomplete`),Zg(),Tk(159,` do campo como `),Jc(160,`code`),Tk(161,`off`),Zg(),Tk(162,`.`),Zg(),Jc(163,`blockquote`)(164,`p`),Tk(165,`No input de senha(`),Jc(166,`code`),Tk(167,`po-password`),Zg(),Tk(168,`) será definido como `),Jc(169,`code`),Tk(170,`new-password`),Zg(),Tk(171,`.`),Zg()()()(),Jc(172,`tr`,13)(173,`td`,14)(174,`div`,15)(175,`span`,16),Tk(176,` p-recovery`),_u(177,`br`),Zg()()(),Jc(178,`td`,17)(179,`code`,18),Tk(180,`string `),Zg(),Jc(181,`code`,23),Tk(182,` Function `),Zg(),Jc(183,`code`,24),Tk(184,` PoPageChangePasswordRecovery`),Zg()(),Jc(185,`td`,19),Tk(186,`-`),Zg(),Jc(187,`td`,20)(188,`em`)(189,`strong`),Tk(190,`(opcional)`),Zg()(),Jc(191,`p`),Tk(192,`URL para a ação do link `),Jc(193,`code`),Tk(194,`Esqueceu a senha`),Zg(),Tk(195,`.`),Zg(),Jc(196,`p`),Tk(197,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(198,`ul`)(199,`li`)(200,`p`)(201,`strong`),Tk(202,`String`),Zg(),Tk(203,`: informe uma url externa ou uma rota válida;`),Zg()(),Jc(204,`li`)(205,`p`)(206,`strong`),Tk(207,`Function`),Zg(),Tk(208,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),Zg(),Jc(209,`pre`)(210,`code`),Tk(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),Zg()()(),Jc(212,`li`)(213,`p`)(214,`strong`),Tk(215,`PoPageChangePasswordRecovery`),Zg(),Tk(216,`: cria-se vínculo automático com o template `),Jc(217,`strong`),Tk(218,`po-modal-password-recovery`),Zg(),Tk(219,`.
O objeto deve conter a `),Jc(220,`strong`),Tk(221,`url`),Zg(),Tk(222,` para requisição dos recursos e pode-se definir o `),Jc(223,`strong`),Tk(224,`tipo`),Zg(),Tk(225,` de modal para recupera\xE7\xE3o de senha,
`),Jc(226,`strong`),Tk(227,`email`),Zg(),Tk(228,` para contato e `),Jc(229,`strong`),Tk(230,`máscara`),Zg(),Tk(231,` do campo de telefone.`),Zg()()(),Jc(232,`blockquote`)(233,`p`),Tk(234,`Caso não tenha valor o link `),Jc(235,`code`),Tk(236,`Esqueceu a senha`),Zg(),Tk(237,` desaparece.`),Zg()()()(),Jc(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),Tk(242,` p-requirements`),_u(243,`br`),Zg()()(),Jc(244,`td`,17)(245,`code`,25),Tk(246,`PoPageChangePasswordRequirement[]`),Zg()(),Jc(247,`td`,19),Tk(248,`-`),Zg(),Jc(249,`td`,20)(250,`em`)(251,`strong`),Tk(252,`(opcional)`),Zg()(),Jc(253,`p`),Tk(254,`Lista de regras para criação e alteração de senha.`),Zg()()(),Jc(255,`tr`,13)(256,`td`,14)(257,`div`,15)(258,`span`,16),Tk(259,` p-secondary-logo`),_u(260,`br`),Zg()()(),Jc(261,`td`,17)(262,`code`,18),Tk(263,`string`),Zg()(),Jc(264,`td`,19),Tk(265,`-`),Zg(),Jc(266,`td`,20)(267,`em`)(268,`strong`),Tk(269,`(opcional)`),Zg()(),Jc(270,`p`),Tk(271,`Caminho para a logomarca localizada no rodapé.`),Zg()()(),Jc(272,`tr`,13)(273,`td`,14)(274,`div`,26)(275,`span`,27),Tk(276,` (p-submit)`),_u(277,`br`),Zg()()(),Jc(278,`td`,17)(279,`code`,28),Tk(280,`EventEmitter`),Zg()(),Jc(281,`td`,19),Tk(282,`-`),Zg(),Jc(283,`td`,20)(284,`em`)(285,`strong`),Tk(286,`(opcional)`),Zg()(),Jc(287,`p`),Tk(288,`Função executada ao submeter o form pelo botão salvar.`),Zg(),Jc(289,`p`),Tk(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Jc(291,`code`),Tk(292,`openConfirmation`),Zg(),Tk(293,`. Exemplo:`),Zg(),Jc(294,`pre`)(295,`code`),Tk(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),Zg()(),Jc(297,`blockquote`)(298,`p`),Tk(299,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(300,`code`),Tk(301,`p-url-new-password`),Zg(),Tk(302,`.`),Zg()()()(),Jc(303,`tr`,13)(304,`td`,14)(305,`div`,15)(306,`span`,16),Tk(307,` p-token`),_u(308,`br`),Zg()()(),Jc(309,`td`,17)(310,`code`,18),Tk(311,`string`),Zg()(),Jc(312,`td`,19),Tk(313,`-`),Zg(),Jc(314,`td`,20)(315,`em`)(316,`strong`),Tk(317,`(opcional)`),Zg()(),Jc(318,`p`),Tk(319,`Token para solicitação de troca/recuperação de senha.`),Zg(),Jc(320,`blockquote`)(321,`p`),Tk(322,`Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.`),Zg()()()(),Jc(323,`tr`,13)(324,`td`,14)(325,`div`,15)(326,`span`,16),Tk(327,` p-url-back`),_u(328,`br`),Zg()()(),Jc(329,`td`,17)(330,`code`,18),Tk(331,`string`),Zg()(),Jc(332,`td`,19)(333,`p`)(334,`code`),Tk(335,`/`),Zg()()(),Jc(336,`td`,20)(337,`em`)(338,`strong`),Tk(339,`(opcional)`),Zg()(),Jc(340,`p`),Tk(341,`URL para a ação de retorno da página.`),Zg(),Jc(342,`blockquote`)(343,`p`),Tk(344,`O botão `),Jc(345,`code`),Tk(346,`Voltar`),Zg(),Tk(347,` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `),Jc(348,`code`),Tk(349,`p-hide-current-password`),Zg(),Tk(350,` for
falsa.`),Zg()()()(),Jc(351,`tr`,13)(352,`td`,14)(353,`div`,15)(354,`span`,16),Tk(355,` p-url-home`),_u(356,`br`),Zg()()(),Jc(357,`td`,17)(358,`code`,18),Tk(359,`string`),Zg()(),Jc(360,`td`,19)(361,`p`)(362,`code`),Tk(363,`/`),Zg()()(),Jc(364,`td`,20)(365,`em`)(366,`strong`),Tk(367,`(opcional)`),Zg()(),Jc(368,`p`),Tk(369,`URL para a ação do botão `),Jc(370,`code`),Tk(371,`Entrar no sistema`),Zg(),Tk(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Jc(373,`code`),Tk(374,`openConfirmation`),Zg(),Tk(375,`.`),Zg()()(),Jc(376,`tr`,13)(377,`td`,14)(378,`div`,15)(379,`span`,16),Tk(380,` p-url-new-password`),_u(381,`br`),Zg()()(),Jc(382,`td`,17)(383,`code`,18),Tk(384,`string`),Zg()(),Jc(385,`td`,19),Tk(386,`-`),Zg(),Jc(387,`td`,20)(388,`em`)(389,`strong`),Tk(390,`(opcional)`),Zg()(),Jc(391,`p`),Tk(392,`Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `),Jc(393,`code`),Tk(394,`p-submit`),Zg(),Tk(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),Zg(),Jc(396,`h3`),Tk(397,`Processo`),Zg(),Jc(398,`p`),Tk(399,`Ao digitar um valor válido nos campos de senha e pressionar `),Jc(400,`strong`),Tk(401,`salvar`),Zg(),Tk(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Jc(403,`code`),Tk(404,`POST`),Zg(),Tk(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),Zg(),Jc(406,`pre`)(407,`code`),Tk(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),Zg()(),Jc(409,`p`),Tk(410,`O código de resposta HTTP de status esperado é `),Jc(411,`code`),Tk(412,`204`),Zg(),Tk(413,`.`),Zg(),Jc(414,`p`),Tk(415,`Em caso de `),Jc(416,`strong`),Tk(417,`sucesso`),Zg(),Tk(418,`, será exibida a modal de confirmação de senha alterada.`),Zg(),Jc(419,`blockquote`)(420,`p`),Tk(421,`O token será informado pela propriedade `),Jc(422,`code`),Tk(423,`p-token`),Zg(),Tk(424,`do componente ou por um `),Jc(425,`em`),Tk(426,`query parameter`),Zg(),Tk(427,` na URL do template.`),Zg()(),Jc(428,`p`)(429,`em`),Tk(430,`Processo finalizado.`),Zg()(),_u(431,`hr`),Jc(432,`h4`),Tk(433,`Praticidade`),Zg(),Jc(434,`p`),Tk(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Jc(436,`code`),Tk(437,`po-page-change-password`),Zg(),Tk(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Jc(439,`code`),Tk(440,`/change-password`),Zg(),Tk(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),Zg(),Jc(442,`pre`)(443,`code`),Tk(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),Zg()(),Jc(445,`p`),Tk(446,`O metadado `),Jc(447,`code`),Tk(448,`serviceApi`),Zg(),Tk(449,` deve ser a `),Jc(450,`strong`),Tk(451,`url`),Zg(),Tk(452,` para requisição dos recursos de troca de senha. E `),Jc(453,`code`),Tk(454,`recovery`),Zg(),Tk(455,` \xE9 a interface
`),Jc(456,`code`),Tk(457,`PoPageChangePasswordRecovery`),Zg(),Tk(458,` responsável pelas especificações contidas na modal de recuperação de senha.`),Zg(),Jc(459,`blockquote`)(460,`p`),Tk(461,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),Zg()()()()(),Jc(462,`h3`,9),Tk(463,`Métodos`),Zg(),Jc(464,`table`,29)(465,`tr`,13)(466,`th`,30)(467,`div`,15)(468,`h4`)(469,`span`,16),Tk(470,` openConfirmation `),Zg()()()()(),Jc(471,`tr`,20)(472,`td`,20)(473,`p`),Tk(474,`Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `),Jc(475,`code`),Tk(476,`p-url-home`),Zg(),Tk(477,``),Zg()()()(),_u(478,`br`),Jc(479,`h3`),Tk(480,`Interfaces`),Zg(),Jc(481,`h4`,31)(482,`code`,5),Tk(483,`PoPageChangePasswordRecovery`),Zg()(),Jc(484,`div`,2)(485,`p`),Tk(486,`Interface para especificação do tipo de recuperação de senha no `),Jc(487,`code`),Tk(488,`po-modal-password-recovery`),Zg(),Tk(489,`.`),Zg()(),Jc(490,`h4`,9),Tk(491,`Propriedades`),Zg(),Jc(492,`table`,10)(493,`tr`,11)(494,`th`,12),Tk(495,`Nome`),Zg(),Jc(496,`th`,12),Tk(497,`Tipo`),Zg(),Jc(498,`th`,12),Tk(499,`Descrição`),Zg()(),Jc(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),Tk(504,` contactMail`),_u(505,`br`),Zg()()(),Jc(506,`td`,17)(507,`code`,18),Tk(508,`string`),Zg()(),Jc(509,`td`,20)(510,`em`)(511,`strong`),Tk(512,`(opcional)`),Zg()(),Jc(513,`p`),Tk(514,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Zg()()(),Jc(515,`tr`,13)(516,`td`,14)(517,`div`,15)(518,`span`,16),Tk(519,` phoneMask`),_u(520,`br`),Zg()()(),Jc(521,`td`,17)(522,`code`,18),Tk(523,`string`),Zg()(),Jc(524,`td`,20)(525,`em`)(526,`strong`),Tk(527,`(opcional)`),Zg()(),Jc(528,`p`),Tk(529,`Definição da máscara do campo de telefone.`),Zg()()(),Jc(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),Tk(534,` type`),_u(535,`br`),Zg()()(),Jc(536,`td`,17)(537,`code`,32),Tk(538,`PoModalPasswordRecoveryType`),Zg()(),Jc(539,`td`,20)(540,`em`)(541,`strong`),Tk(542,`(opcional)`),Zg()(),Jc(543,`p`),Tk(544,`Enum para especificação do tipo de recuperação de senha `),Jc(545,`a`,33),Tk(546,`PoModalPasswordRecoveryType`),Zg(),Tk(547,`.`),Zg(),Jc(548,`blockquote`)(549,`p`),Tk(550,`Caso não seja definido valor se assume o padrão `),Jc(551,`code`),Tk(552,`PoModalPasswordRecoveryType.Email`),Zg(),Tk(553,`.`),Zg()()()(),Jc(554,`tr`,13)(555,`td`,14)(556,`div`,15)(557,`span`,16),Tk(558,` url`),_u(559,`br`),Zg()()(),Jc(560,`td`,17)(561,`code`,18),Tk(562,`string`),Zg()(),Jc(563,`td`,20)(564,`p`),Tk(565,`Endpoint usado pelo template `),Jc(566,`strong`),Tk(567,`PoModalPasswordRecovery`),Zg(),Tk(568,` para requisição do recurso.`),Zg(),Jc(569,`blockquote`)(570,`p`),Tk(571,`Saiba mais em `),Jc(572,`a`,33),Tk(573,`PoModalPasswordRecovery`),Zg(),Tk(574,`.`),Zg()()()()(),Jc(575,`h4`,31)(576,`code`,5),Tk(577,`PoPageChangePasswordRequirement`),Zg()(),Jc(578,`div`,2)(579,`p`),Tk(580,`Interface com a definição dos objetos aceitos pela propriedade `),Jc(581,`code`),Tk(582,`p-password-requirements`),Zg(),Tk(583,`.`),Zg()(),Jc(584,`h4`,9),Tk(585,`Propriedades`),Zg(),Jc(586,`table`,10)(587,`tr`,11)(588,`th`,12),Tk(589,`Nome`),Zg(),Jc(590,`th`,12),Tk(591,`Tipo`),Zg(),Jc(592,`th`,12),Tk(593,`Descrição`),Zg()(),Jc(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),Tk(598,` requirement`),_u(599,`br`),Zg()()(),Jc(600,`td`,17)(601,`code`,18),Tk(602,`string`),Zg()(),Jc(603,`td`,20)(604,`p`),Tk(605,`Requisito.`),Zg()()(),Jc(606,`tr`,13)(607,`td`,14)(608,`div`,15)(609,`span`,16),Tk(610,` status`),_u(611,`br`),Zg()()(),Jc(612,`td`,17)(613,`code`,22),Tk(614,`boolean `),Zg(),Jc(615,`code`,23),Tk(616,` Function`),Zg()(),Jc(617,`td`,20)(618,`p`),Tk(619,`Função que deve retornar um booleano para validar um requisito de senha.`),Zg(),Jc(620,`p`),Tk(621,`Também é possível informar diretamente um valor booleano que representa esta validação.`),Zg()()()(),Jc(622,`h4`,31)(623,`code`,5),Tk(624,`PoPageChangePassword`),Zg()(),Jc(625,`div`,2)(626,`p`),Tk(627,`Interface com a definição do objeto gerado pelo formulário do componente `),Jc(628,`code`),Tk(629,`po-page-change-password`),Zg(),Tk(630,`.`),Zg()(),Jc(631,`h4`,9),Tk(632,`Propriedades`),Zg(),Jc(633,`table`,10)(634,`tr`,11)(635,`th`,12),Tk(636,`Nome`),Zg(),Jc(637,`th`,12),Tk(638,`Tipo`),Zg(),Jc(639,`th`,12),Tk(640,`Descrição`),Zg()(),Jc(641,`tr`,13)(642,`td`,14)(643,`div`,15)(644,`span`,16),Tk(645,` currentPassword`),_u(646,`br`),Zg()()(),Jc(647,`td`,17)(648,`code`,18),Tk(649,`string`),Zg()(),Jc(650,`td`,20)(651,`em`)(652,`strong`),Tk(653,`(opcional)`),Zg()(),Jc(654,`p`),Tk(655,`Senha atual`),Zg()()(),Jc(656,`tr`,13)(657,`td`,14)(658,`div`,15)(659,`span`,16),Tk(660,` newPassword`),_u(661,`br`),Zg()()(),Jc(662,`td`,17)(663,`code`,18),Tk(664,`string`),Zg()(),Jc(665,`td`,20)(666,`em`)(667,`strong`),Tk(668,`(opcional)`),Zg()(),Jc(669,`p`),Tk(670,`Nova senha`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Xe(a,F){if(a&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-page-change-password-basic-view`)(2,`sample-po-page-change-password-labs-view`)(3,`sample-po-page-change-password-modify-view`)(4,`sample-po-page-change-password-create-view`)(5,`sample-po-page-change-password-request-view`),Zg()}if(a&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var $e=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Change Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,o){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Xe,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-page-change-password-doc`),Zg()()()),i&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,we,Ee,fe,ye,_e,Me],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild($e),WV]})}return a})();var At=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Te]})}return a})();export{At as DocPoPageChangePasswordModule};