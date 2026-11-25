import{b as Yn,j as ta,m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Kr as Kg,L as Koe,Li as WL,Ni as Vk,Oi as U_,Pn as tie,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,_r as Cu,aa as de,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,go as xo,ii as No,jn as sie,jr as GV,mi as QL,or as An,pa as ge$1,qi as Zb,rr as AZ,s as Aze,sn as j4,tt as R4,w as Fc,zr as I}from"./chunk-DdK63a0t.js";var ce=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&_u(0,`po-page-change-password`)},dependencies:[Yn],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-change-password-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Change Password Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-change-password-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-change-password></po-page-change-password>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poDialog=p(sie);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:``,status:!1}}restore(){this.componentsSize=`medium`,this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack=``,this.urlHome=``,this.recovery=``,this.requirement={requirement:``,status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-labs`]],viewQuery:function(o,i){if(o&1&&Cu(Yn,7),o&2){let l;No(l=xo())&&(i.changePassword=l.first)}},standalone:!1,decls:26,vars:19,consts:[[`f`,`ngForm`],[`fRequirements`,`ngForm`],[3,`p-submit`,`p-components-size`,`p-hide-current-password`,`p-logo`,`p-recovery`,`p-requirements`,`p-secondary-logo`,`p-url-back`,`p-url-home`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`urlHome`,`p-label`,`Url home`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-label`,`Recovery`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlBack`,`p-label`,`Url back`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`hideCurrentPassword`,`p-label`,`Hide current password`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`requirement`,`p-label`,`Requirement`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`requirementStatus`,`p-label`,`Requirement Status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Requirement`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let l=KO();Jc(0,`po-page-change-password`,2),_t(`p-submit`,function(p){return i.submit(p)}),Kg(),_u(1,`po-divider`,3),Jc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.urlHome,p)||(i.urlHome=p),H_(p)}),Kg(),Jc(6,`po-input`,6),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.recovery,p)||(i.recovery=p),H_(p)}),Kg()(),Jc(7,`div`,4)(8,`po-input`,7),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.urlBack,p)||(i.urlBack=p),H_(p)}),Kg(),Jc(9,`po-input`,8),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.logo,p)||(i.logo=p),H_(p)}),Kg()(),Jc(10,`div`,4)(11,`po-input`,9),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.secondaryLogo,p)||(i.secondaryLogo=p),H_(p)}),Kg(),Jc(12,`po-switch`,10),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.hideCurrentPassword,p)||(i.hideCurrentPassword=p),H_(p)}),Kg()(),Jc(13,`po-radio-group`,11),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.componentsSize,p)||(i.componentsSize=p),H_(p)}),Kg(),_u(14,`br`)(15,`po-divider`),Jc(16,`form`,null,1)(18,`div`,4)(19,`po-input`,12),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.requirement.requirement,p)||(i.requirement.requirement=p),H_(p)}),Kg(),Jc(20,`po-switch`,13),G0(),Zb(`ngModelChange`,function(p){return U_(l),Rk(i.requirement.status,p)||(i.requirement.status=p),H_(p)}),Kg()(),Jc(21,`div`,4)(22,`po-button`,14),_t(`p-click`,function(){return i.addRequirement()}),Kg()()(),_u(23,`po-divider`),Jc(24,`div`,4)(25,`po-button`,15),_t(`p-click`,function(){return i.restore()}),Kg()()()}if(o&2){let l=ok(17);Ab(`p-components-size`,i.componentsSize)(`p-hide-current-password`,i.hideCurrentPassword)(`p-logo`,i.logo)(`p-recovery`,i.recovery)(`p-requirements`,i.requirements)(`p-secondary-logo`,i.secondaryLogo)(`p-url-back`,i.urlBack)(`p-url-home`,i.urlHome),wg(5),Kb(`ngModel`,i.urlHome),q0(),wg(),Kb(`ngModel`,i.recovery),q0(),wg(2),Kb(`ngModel`,i.urlBack),q0(),wg(),Kb(`ngModel`,i.logo),q0(),wg(2),Kb(`ngModel`,i.secondaryLogo),q0(),wg(),Kb(`ngModel`,i.hideCurrentPassword),q0(),wg(),Kb(`ngModel`,i.componentsSize),Ab(`p-options`,i.componentsSizeOptions),q0(),wg(6),Kb(`ngModel`,i.requirement.requirement),q0(),wg(),Kb(`ngModel`,i.requirement.status),q0(),wg(2),Ab(`p-disabled`,l.form.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,Zte,R4,Yn],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-change-password-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Change Password Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-change-password-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-change-password
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return a})();function ke(a,N){if(a&1){let r=KO();Jc(0,`po-page-edit`,1)(1,`form`,null,0)(3,`div`,3)(4,`div`,3)(5,`po-input`,4),G0(),Kg(),Jc(6,`po-datepicker`,5),G0(),Zb(`ngModelChange`,function(i){U_(r);let l=tk();return Rk(l.birthday,i)||(l.birthday=i),H_(i)}),Kg(),Jc(7,`po-input`,6),G0(),Kg()(),Jc(8,`div`,3)(9,`po-select`,7),G0(),Zb(`ngModelChange`,function(i){U_(r);let l=tk();return Rk(l.country,i)||(l.country=i),H_(i)}),Kg(),Jc(10,`po-select`,8),G0(),Zb(`ngModelChange`,function(i){U_(r);let l=tk();return Rk(l.city,i)||(l.city=i),H_(i)}),Kg(),Jc(11,`po-input`,9),G0(),Kg()(),_u(12,`po-divider`,10),Jc(13,`po-button`,11),_t(`p-click`,function(){U_(r);let i=tk();return H_(i.showChangePasswordScreen())}),Kg()()()()}if(a&2){let r=tk();Ab(`p-breadcrumb`,r.breadcrumb),wg(5),Ab(`ngModel`,r.fullName),q0(),wg(),Kb(`ngModel`,r.birthday),q0(),wg(),Ab(`ngModel`,r.email),q0(),wg(2),Kb(`ngModel`,r.country),Ab(`p-options`,r.countryOptions),q0(),wg(),Kb(`ngModel`,r.city),Ab(`p-options`,r.cityOptions),q0(),wg(),Ab(`ngModel`,r.phoneNumber),q0()}}function Oe(a,N){if(a&1){let r=KO();Jc(0,`po-page-change-password`,12),_t(`p-submit`,function(){U_(r);let i=tk();return H_(i.onSubmit())}),Kg()}if(a&2){let r=tk();Ab(`p-url-back`,r.url)(`p-url-home`,r.url)}}var we=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:`Home`,link:`/documentation/po-page-change-password`},{label:`Profile`}]};cityOptions=[{label:`São Paulo`,value:`sp`}];countryOptions=[{label:`Brazil`,value:`br`}];ngOnInit(){this.initialize()}initialize(){this.birthday=`1991-11-28T00:00:00-02:00`,this.changePasswordScreen=!1,this.city=`sp`,this.country=`br`,this.email=`natasha.romanova@mail.com.br`,this.fullName=`Natasha Romanova`,this.phoneNumber=`119999999999`,this.url=`/home`}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-modify`]],viewQuery:function(o,i){if(o&1&&Cu(Yn,5),o&2){let l;No(l=xo())&&(i.changePassword=l.first)}},standalone:!1,decls:2,vars:1,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Profile`,3,`p-breadcrumb`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-url-back`,`p-url-home`],[1,`po-row`],[`name`,`fullName`,`p-label`,`Name`,1,`po-md-12`,3,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday Date`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-label`,`Email`,1,`po-md-6`,3,`ngModel`],[`name`,`country`,`p-disabled`,``,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`city`,`p-disabled`,``,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`phoneNumber`,`p-label`,`Phone Number`,`p-mask`,`(99)99999-9999`,1,`po-md-12`,3,`ngModel`],[`p-label`,`Change Password`,1,`po-md-12`,`po-mt-3`],[`p-label`,`Change Your Password`,1,`po-pb-3`,`po-pt-3`,`po-md-3`,3,`p-click`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-submit`,`p-url-back`,`p-url-home`]],template:function(o,i){o&1&&LO(0,ke,14,9,`po-page-edit`,1)(1,Oe,1,2,`po-page-change-password`,2),o&2&&jO(i.changePasswordScreen?1:0)},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,tie,j4,Koe,Aze,Yn],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-modify-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-change-password-modify`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Change Password Modify`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-change-password-modify`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`@if (!changePasswordScreen) {
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();function Te(a,N){if(a&1){let r=KO();Jc(0,`po-page-login`,2),_t(`p-login-submit`,function(){U_(r);let i=tk();return H_(i.checkLogin())}),Kg()}}function Ve(a,N){if(a&1){let r=KO();Jc(0,`po-page-change-password`,3),_t(`p-submit`,function(){U_(r);let i=tk();return H_(i.onSubmit())}),Kg()}if(a&2){let r=tk();Ab(`p-requirements`,r.requirements)}}var Ce=(()=>{class a{changePassword;login=!1;requirements=[{requirement:`Use at least one symbol (ex. !, @, #).`,status:this.validateSymbols.bind(this)},{requirement:`Mix uppercase and lowercase characters.`,status:this.validateCases.bind(this)},{requirement:`Min of 5 characters.`,status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let o=r.match(/[a-z]/g);return!(!o||o.length<1||(o=r.match(/[A-Z]/g),!o||o.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let o=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!o||o.length<1)}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-create`]],viewQuery:function(o,i){if(o&1&&Cu(Yn,7),o&2){let l;No(l=xo())&&(i.changePassword=l.first)}},standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-requirements`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-submit`,`p-requirements`]],template:function(o,i){o&1&&(LO(0,Te,1,0,`po-page-login`,0),LO(1,Ve,1,1,`po-page-change-password`,1)),o&2&&(jO(i.login?-1:0),wg(),jO(i.login?1:-1))},dependencies:[Yn,ta],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-create-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-change-password-create`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Change Password Create`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-change-password-create`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`@if (!login) {
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ce],encapsulation:2,changeDetection:1})}return a})();var Ae=()=>({url:`https://po-sample-api.onrender.com/v1/users`,type:`all`,contactMail:`support@mail.com`});var Ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-request`]],standalone:!1,decls:6,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your Password Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-token`,`rzDsQiSYoq`,`p-url-new-password`,`https://thf.totvs.com.br/sample/api/new-password`,3,`p-recovery`]],template:function(o,i){o&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Kg()(),_u(5,`po-page-change-password`,4)),o&2&&(wg(5),Ab(`p-recovery`,Vk(1,Ae)))},dependencies:[Fc,Joe,Yn],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-request-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-change-password-request`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Change Password Request`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-change-password-request`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-change-password-doc`]],standalone:!1,decls:671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-change-password-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-hide-current-password`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete-password`,1,`docs-api-properties-row`],[`id`,`prop-p-recovery`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRecovery`],[`id`,`prop-p-requirements`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRequirement[]`],[`id`,`prop-p-secondary-logo`,1,`docs-api-properties-row`],[`id`,`event-p-submit`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-token`,1,`docs-api-properties-row`],[`id`,`prop-p-url-back`,1,`docs-api-properties-row`],[`id`,`prop-p-url-home`,1,`docs-api-properties-row`],[`id`,`prop-p-url-new-password`,1,`docs-api-properties-row`],[`id`,`method-openConfirmation`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`interface-po-page-change-password-recovery`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-change-password-recovery-contact-mail`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-recovery-phone-mask`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-recovery-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`],[`id`,`interface-po-page-change-password-recovery-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-requirement`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-change-password-requirement-requirement`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-requirement-status`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-change-password-current-password`,1,`docs-api-properties-row`],[`id`,`interface-po-page-change-password-new-password`,1,`docs-api-properties-row`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageChangePasswordModule } from '@po-ui/ng-templates';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do template do po-page-change-password.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoPageChangePasswordComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-page-change-password`),Kg(),Mk(17,` é utilizado como template para tela de cadastro ou alteração de senha.`),Kg(),Jc(18,`p`),Mk(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),Kg(),Jc(20,`p`),Mk(21,`A propriedade `),Jc(22,`code`),Mk(23,`p-url-new-password`),Kg(),Mk(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Jc(25,`em`),Mk(26,`client side`),Kg(),Mk(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Jc(28,`em`),Mk(29,`propriedades`),Kg(),Mk(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Kg(),Jc(31,`p`),Mk(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(33,`em`),Mk(34,`assets`),Kg(),Mk(35,` no arquivo `),Jc(36,`strong`),Mk(37,`angular.json`),Kg(),Mk(38,` da aplicação na seguinte ordem:`),Kg(),Jc(39,`pre`)(40,`code`),Mk(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()()(),Jc(42,`div`,6)(43,`h4`,7),Mk(44,`Seletor`),Kg(),Jc(45,`pre`,8),Mk(46,`<po-page-change-password
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
`),Kg()(),Jc(47,`h4`,9),Mk(48,`Propriedades`),Kg(),Jc(49,`table`,10)(50,`tr`,11)(51,`th`,12),Mk(52,`Nome`),Kg(),Jc(53,`th`,12),Mk(54,`Tipo`),Kg(),Jc(55,`th`,12),Mk(56,`Padrão`),Kg(),Jc(57,`th`,12),Mk(58,`Descrição`),Kg()(),Jc(59,`tr`,13)(60,`td`,14)(61,`div`,15)(62,`span`,16),Mk(63,` p-components-size`),_u(64,`br`),Kg()()(),Jc(65,`td`,17)(66,`code`,18),Mk(67,`string`),Kg()(),Jc(68,`td`,19)(69,`p`)(70,`code`),Mk(71,`medium`),Kg()()(),Jc(72,`td`,20)(73,`em`)(74,`strong`),Mk(75,`(opcional)`),Kg()(),Jc(76,`p`),Mk(77,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(78,`ul`)(79,`li`)(80,`code`),Mk(81,`small`),Kg(),Mk(82,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(83,`li`)(84,`code`),Mk(85,`medium`),Kg(),Mk(86,`: aplica a medida medium de cada componente.`),Kg()(),Jc(87,`blockquote`)(88,`p`),Mk(89,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(90,`code`),Mk(91,`medium`),Kg(),Mk(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(93,`a`,21),Mk(94,`po-theme`),Kg(),Mk(95,`.`),Kg()()()(),Jc(96,`tr`,22)(97,`td`,14)(98,`div`,15)(99,`span`,16),Mk(100,` p-hide-current-password`),_u(101,`br`),Kg()()(),Jc(102,`td`,17)(103,`code`,23),Mk(104,`boolean`),Kg()(),Jc(105,`td`,19)(106,`p`)(107,`code`),Mk(108,`false`),Kg()()(),Jc(109,`td`,20)(110,`em`)(111,`strong`),Mk(112,`(opcional)`),Kg()(),Jc(113,`p`),Mk(114,`Esconde o campo `),Jc(115,`code`),Mk(116,`Senha atual`),Kg(),Mk(117,` para que o template seja para criação de senha.`),Kg()()(),Jc(118,`tr`,24)(119,`td`,14)(120,`div`,15)(121,`span`,16),Mk(122,` p-logo`),_u(123,`br`),Kg()()(),Jc(124,`td`,17)(125,`code`,18),Mk(126,`string`),Kg()(),Jc(127,`td`,19),Mk(128,`-`),Kg(),Jc(129,`td`,20)(130,`em`)(131,`strong`),Mk(132,`(opcional)`),Kg()(),Jc(133,`p`),Mk(134,`Caminho para a logomarca localizada na parte superior.`),Kg(),Jc(135,`blockquote`)(136,`p`),Mk(137,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),Kg()()()(),Jc(138,`tr`,25)(139,`td`,14)(140,`div`,15)(141,`span`,16),Mk(142,` p-no-autocomplete-password`),_u(143,`br`),Kg()()(),Jc(144,`td`,17)(145,`code`,23),Mk(146,`boolean`),Kg()(),Jc(147,`td`,19)(148,`p`)(149,`code`),Mk(150,`true`),Kg()()(),Jc(151,`td`,20)(152,`em`)(153,`strong`),Mk(154,`(opcional)`),Kg()(),Jc(155,`p`),Mk(156,`Define a propriedade nativa `),Jc(157,`code`),Mk(158,`autocomplete`),Kg(),Mk(159,` do campo como `),Jc(160,`code`),Mk(161,`off`),Kg(),Mk(162,`.`),Kg(),Jc(163,`blockquote`)(164,`p`),Mk(165,`No input de senha(`),Jc(166,`code`),Mk(167,`po-password`),Kg(),Mk(168,`) será definido como `),Jc(169,`code`),Mk(170,`new-password`),Kg(),Mk(171,`.`),Kg()()()(),Jc(172,`tr`,26)(173,`td`,14)(174,`div`,15)(175,`span`,16),Mk(176,` p-recovery`),_u(177,`br`),Kg()()(),Jc(178,`td`,17)(179,`code`,18),Mk(180,`string `),Kg(),Jc(181,`code`,27),Mk(182,` Function `),Kg(),Jc(183,`code`,28),Mk(184,` PoPageChangePasswordRecovery`),Kg()(),Jc(185,`td`,19),Mk(186,`-`),Kg(),Jc(187,`td`,20)(188,`em`)(189,`strong`),Mk(190,`(opcional)`),Kg()(),Jc(191,`p`),Mk(192,`URL para a ação do link `),Jc(193,`code`),Mk(194,`Esqueceu a senha`),Kg(),Mk(195,`.`),Kg(),Jc(196,`p`),Mk(197,`A propriedade aceita os seguintes tipos:`),Kg(),Jc(198,`ul`)(199,`li`)(200,`p`)(201,`strong`),Mk(202,`String`),Kg(),Mk(203,`: informe uma url externa ou uma rota válida;`),Kg()(),Jc(204,`li`)(205,`p`)(206,`strong`),Mk(207,`Function`),Kg(),Mk(208,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),Kg(),Jc(209,`pre`)(210,`code`),Mk(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),Kg()()(),Jc(212,`li`)(213,`p`)(214,`strong`),Mk(215,`PoPageChangePasswordRecovery`),Kg(),Mk(216,`: cria-se vínculo automático com o template `),Jc(217,`strong`),Mk(218,`po-modal-password-recovery`),Kg(),Mk(219,`.
O objeto deve conter a `),Jc(220,`strong`),Mk(221,`url`),Kg(),Mk(222,` para requisição dos recursos e pode-se definir o `),Jc(223,`strong`),Mk(224,`tipo`),Kg(),Mk(225,` de modal para recupera\xE7\xE3o de senha,
`),Jc(226,`strong`),Mk(227,`email`),Kg(),Mk(228,` para contato e `),Jc(229,`strong`),Mk(230,`máscara`),Kg(),Mk(231,` do campo de telefone.`),Kg()()(),Jc(232,`blockquote`)(233,`p`),Mk(234,`Caso não tenha valor o link `),Jc(235,`code`),Mk(236,`Esqueceu a senha`),Kg(),Mk(237,` desaparece.`),Kg()()()(),Jc(238,`tr`,29)(239,`td`,14)(240,`div`,15)(241,`span`,16),Mk(242,` p-requirements`),_u(243,`br`),Kg()()(),Jc(244,`td`,17)(245,`code`,30),Mk(246,`PoPageChangePasswordRequirement[]`),Kg()(),Jc(247,`td`,19),Mk(248,`-`),Kg(),Jc(249,`td`,20)(250,`em`)(251,`strong`),Mk(252,`(opcional)`),Kg()(),Jc(253,`p`),Mk(254,`Lista de regras para criação e alteração de senha.`),Kg()()(),Jc(255,`tr`,31)(256,`td`,14)(257,`div`,15)(258,`span`,16),Mk(259,` p-secondary-logo`),_u(260,`br`),Kg()()(),Jc(261,`td`,17)(262,`code`,18),Mk(263,`string`),Kg()(),Jc(264,`td`,19),Mk(265,`-`),Kg(),Jc(266,`td`,20)(267,`em`)(268,`strong`),Mk(269,`(opcional)`),Kg()(),Jc(270,`p`),Mk(271,`Caminho para a logomarca localizada no rodapé.`),Kg()()(),Jc(272,`tr`,32)(273,`td`,14)(274,`div`,33)(275,`span`,34),Mk(276,` (p-submit)`),_u(277,`br`),Kg()()(),Jc(278,`td`,17)(279,`code`,35),Mk(280,`EventEmitter`),Kg()(),Jc(281,`td`,19),Mk(282,`-`),Kg(),Jc(283,`td`,20)(284,`em`)(285,`strong`),Mk(286,`(opcional)`),Kg()(),Jc(287,`p`),Mk(288,`Função executada ao submeter o form pelo botão salvar.`),Kg(),Jc(289,`p`),Mk(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Jc(291,`code`),Mk(292,`openConfirmation`),Kg(),Mk(293,`. Exemplo:`),Kg(),Jc(294,`pre`)(295,`code`),Mk(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),Kg()(),Jc(297,`blockquote`)(298,`p`),Mk(299,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(300,`code`),Mk(301,`p-url-new-password`),Kg(),Mk(302,`.`),Kg()()()(),Jc(303,`tr`,36)(304,`td`,14)(305,`div`,15)(306,`span`,16),Mk(307,` p-token`),_u(308,`br`),Kg()()(),Jc(309,`td`,17)(310,`code`,18),Mk(311,`string`),Kg()(),Jc(312,`td`,19),Mk(313,`-`),Kg(),Jc(314,`td`,20)(315,`em`)(316,`strong`),Mk(317,`(opcional)`),Kg()(),Jc(318,`p`),Mk(319,`Token para solicitação de troca/recuperação de senha.`),Kg(),Jc(320,`blockquote`)(321,`p`),Mk(322,`Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.`),Kg()()()(),Jc(323,`tr`,37)(324,`td`,14)(325,`div`,15)(326,`span`,16),Mk(327,` p-url-back`),_u(328,`br`),Kg()()(),Jc(329,`td`,17)(330,`code`,18),Mk(331,`string`),Kg()(),Jc(332,`td`,19)(333,`p`)(334,`code`),Mk(335,`/`),Kg()()(),Jc(336,`td`,20)(337,`em`)(338,`strong`),Mk(339,`(opcional)`),Kg()(),Jc(340,`p`),Mk(341,`URL para a ação de retorno da página.`),Kg(),Jc(342,`blockquote`)(343,`p`),Mk(344,`O botão `),Jc(345,`code`),Mk(346,`Voltar`),Kg(),Mk(347,` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `),Jc(348,`code`),Mk(349,`p-hide-current-password`),Kg(),Mk(350,` for
falsa.`),Kg()()()(),Jc(351,`tr`,38)(352,`td`,14)(353,`div`,15)(354,`span`,16),Mk(355,` p-url-home`),_u(356,`br`),Kg()()(),Jc(357,`td`,17)(358,`code`,18),Mk(359,`string`),Kg()(),Jc(360,`td`,19)(361,`p`)(362,`code`),Mk(363,`/`),Kg()()(),Jc(364,`td`,20)(365,`em`)(366,`strong`),Mk(367,`(opcional)`),Kg()(),Jc(368,`p`),Mk(369,`URL para a ação do botão `),Jc(370,`code`),Mk(371,`Entrar no sistema`),Kg(),Mk(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Jc(373,`code`),Mk(374,`openConfirmation`),Kg(),Mk(375,`.`),Kg()()(),Jc(376,`tr`,39)(377,`td`,14)(378,`div`,15)(379,`span`,16),Mk(380,` p-url-new-password`),_u(381,`br`),Kg()()(),Jc(382,`td`,17)(383,`code`,18),Mk(384,`string`),Kg()(),Jc(385,`td`,19),Mk(386,`-`),Kg(),Jc(387,`td`,20)(388,`em`)(389,`strong`),Mk(390,`(opcional)`),Kg()(),Jc(391,`p`),Mk(392,`Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `),Jc(393,`code`),Mk(394,`p-submit`),Kg(),Mk(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),Kg(),Jc(396,`h3`),Mk(397,`Processo`),Kg(),Jc(398,`p`),Mk(399,`Ao digitar um valor válido nos campos de senha e pressionar `),Jc(400,`strong`),Mk(401,`salvar`),Kg(),Mk(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Jc(403,`code`),Mk(404,`POST`),Kg(),Mk(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),Kg(),Jc(406,`pre`)(407,`code`),Mk(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),Kg()(),Jc(409,`p`),Mk(410,`O código de resposta HTTP de status esperado é `),Jc(411,`code`),Mk(412,`204`),Kg(),Mk(413,`.`),Kg(),Jc(414,`p`),Mk(415,`Em caso de `),Jc(416,`strong`),Mk(417,`sucesso`),Kg(),Mk(418,`, será exibida a modal de confirmação de senha alterada.`),Kg(),Jc(419,`blockquote`)(420,`p`),Mk(421,`O token será informado pela propriedade `),Jc(422,`code`),Mk(423,`p-token`),Kg(),Mk(424,`do componente ou por um `),Jc(425,`em`),Mk(426,`query parameter`),Kg(),Mk(427,` na URL do template.`),Kg()(),Jc(428,`p`)(429,`em`),Mk(430,`Processo finalizado.`),Kg()(),_u(431,`hr`),Jc(432,`h4`),Mk(433,`Praticidade`),Kg(),Jc(434,`p`),Mk(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Jc(436,`code`),Mk(437,`po-page-change-password`),Kg(),Mk(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Jc(439,`code`),Mk(440,`/change-password`),Kg(),Mk(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),Kg(),Jc(442,`pre`)(443,`code`),Mk(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),Kg()(),Jc(445,`p`),Mk(446,`O metadado `),Jc(447,`code`),Mk(448,`serviceApi`),Kg(),Mk(449,` deve ser a `),Jc(450,`strong`),Mk(451,`url`),Kg(),Mk(452,` para requisição dos recursos de troca de senha. E `),Jc(453,`code`),Mk(454,`recovery`),Kg(),Mk(455,` \xE9 a interface
`),Jc(456,`code`),Mk(457,`PoPageChangePasswordRecovery`),Kg(),Mk(458,` responsável pelas especificações contidas na modal de recuperação de senha.`),Kg(),Jc(459,`blockquote`)(460,`p`),Mk(461,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),Kg()()()()(),Jc(462,`h3`,9),Mk(463,`Métodos`),Kg(),Jc(464,`table`,40)(465,`tr`,41)(466,`th`,42)(467,`div`,15)(468,`h4`)(469,`span`,16),Mk(470,` openConfirmation `),Kg()()()()(),Jc(471,`tr`,20)(472,`td`,20)(473,`p`),Mk(474,`Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `),Jc(475,`code`),Mk(476,`p-url-home`),Kg(),Mk(477,``),Kg()()()(),_u(478,`br`),Jc(479,`h3`),Mk(480,`Interfaces`),Kg(),Jc(481,`h4`,43)(482,`code`,5),Mk(483,`PoPageChangePasswordRecovery`),Kg()(),Jc(484,`div`,2)(485,`p`),Mk(486,`Interface para especificação do tipo de recuperação de senha no `),Jc(487,`code`),Mk(488,`po-modal-password-recovery`),Kg(),Mk(489,`.`),Kg()(),Jc(490,`h4`,9),Mk(491,`Propriedades`),Kg(),Jc(492,`table`,10)(493,`tr`,11)(494,`th`,12),Mk(495,`Nome`),Kg(),Jc(496,`th`,12),Mk(497,`Tipo`),Kg(),Jc(498,`th`,12),Mk(499,`Descrição`),Kg()(),Jc(500,`tr`,44)(501,`td`,14)(502,`div`,15)(503,`span`,16),Mk(504,` contactMail`),_u(505,`br`),Kg()()(),Jc(506,`td`,17)(507,`code`,18),Mk(508,`string`),Kg()(),Jc(509,`td`,20)(510,`em`)(511,`strong`),Mk(512,`(opcional)`),Kg()(),Jc(513,`p`),Mk(514,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Kg()()(),Jc(515,`tr`,45)(516,`td`,14)(517,`div`,15)(518,`span`,16),Mk(519,` phoneMask`),_u(520,`br`),Kg()()(),Jc(521,`td`,17)(522,`code`,18),Mk(523,`string`),Kg()(),Jc(524,`td`,20)(525,`em`)(526,`strong`),Mk(527,`(opcional)`),Kg()(),Jc(528,`p`),Mk(529,`Definição da máscara do campo de telefone.`),Kg()()(),Jc(530,`tr`,46)(531,`td`,14)(532,`div`,15)(533,`span`,16),Mk(534,` type`),_u(535,`br`),Kg()()(),Jc(536,`td`,17)(537,`code`,47),Mk(538,`PoModalPasswordRecoveryType`),Kg()(),Jc(539,`td`,20)(540,`em`)(541,`strong`),Mk(542,`(opcional)`),Kg()(),Jc(543,`p`),Mk(544,`Enum para especificação do tipo de recuperação de senha `),Jc(545,`a`,48),Mk(546,`PoModalPasswordRecoveryType`),Kg(),Mk(547,`.`),Kg(),Jc(548,`blockquote`)(549,`p`),Mk(550,`Caso não seja definido valor se assume o padrão `),Jc(551,`code`),Mk(552,`PoModalPasswordRecoveryType.Email`),Kg(),Mk(553,`.`),Kg()()()(),Jc(554,`tr`,49)(555,`td`,14)(556,`div`,15)(557,`span`,16),Mk(558,` url`),_u(559,`br`),Kg()()(),Jc(560,`td`,17)(561,`code`,18),Mk(562,`string`),Kg()(),Jc(563,`td`,20)(564,`p`),Mk(565,`Endpoint usado pelo template `),Jc(566,`strong`),Mk(567,`PoModalPasswordRecovery`),Kg(),Mk(568,` para requisição do recurso.`),Kg(),Jc(569,`blockquote`)(570,`p`),Mk(571,`Saiba mais em `),Jc(572,`a`,48),Mk(573,`PoModalPasswordRecovery`),Kg(),Mk(574,`.`),Kg()()()()(),Jc(575,`h4`,50)(576,`code`,5),Mk(577,`PoPageChangePasswordRequirement`),Kg()(),Jc(578,`div`,2)(579,`p`),Mk(580,`Interface com a definição dos objetos aceitos pela propriedade `),Jc(581,`code`),Mk(582,`p-password-requirements`),Kg(),Mk(583,`.`),Kg()(),Jc(584,`h4`,9),Mk(585,`Propriedades`),Kg(),Jc(586,`table`,10)(587,`tr`,11)(588,`th`,12),Mk(589,`Nome`),Kg(),Jc(590,`th`,12),Mk(591,`Tipo`),Kg(),Jc(592,`th`,12),Mk(593,`Descrição`),Kg()(),Jc(594,`tr`,51)(595,`td`,14)(596,`div`,15)(597,`span`,16),Mk(598,` requirement`),_u(599,`br`),Kg()()(),Jc(600,`td`,17)(601,`code`,18),Mk(602,`string`),Kg()(),Jc(603,`td`,20)(604,`p`),Mk(605,`Requisito.`),Kg()()(),Jc(606,`tr`,52)(607,`td`,14)(608,`div`,15)(609,`span`,16),Mk(610,` status`),_u(611,`br`),Kg()()(),Jc(612,`td`,17)(613,`code`,23),Mk(614,`boolean `),Kg(),Jc(615,`code`,27),Mk(616,` Function`),Kg()(),Jc(617,`td`,20)(618,`p`),Mk(619,`Função que deve retornar um booleano para validar um requisito de senha.`),Kg(),Jc(620,`p`),Mk(621,`Também é possível informar diretamente um valor booleano que representa esta validação.`),Kg()()()(),Jc(622,`h4`,53)(623,`code`,5),Mk(624,`PoPageChangePassword`),Kg()(),Jc(625,`div`,2)(626,`p`),Mk(627,`Interface com a definição do objeto gerado pelo formulário do componente `),Jc(628,`code`),Mk(629,`po-page-change-password`),Kg(),Mk(630,`.`),Kg()(),Jc(631,`h4`,9),Mk(632,`Propriedades`),Kg(),Jc(633,`table`,10)(634,`tr`,11)(635,`th`,12),Mk(636,`Nome`),Kg(),Jc(637,`th`,12),Mk(638,`Tipo`),Kg(),Jc(639,`th`,12),Mk(640,`Descrição`),Kg()(),Jc(641,`tr`,54)(642,`td`,14)(643,`div`,15)(644,`span`,16),Mk(645,` currentPassword`),_u(646,`br`),Kg()()(),Jc(647,`td`,17)(648,`code`,18),Mk(649,`string`),Kg()(),Jc(650,`td`,20)(651,`em`)(652,`strong`),Mk(653,`(opcional)`),Kg()(),Jc(654,`p`),Mk(655,`Senha atual`),Kg()()(),Jc(656,`tr`,55)(657,`td`,14)(658,`div`,15)(659,`span`,16),Mk(660,` newPassword`),_u(661,`br`),Kg()()(),Jc(662,`td`,17)(663,`code`,18),Mk(664,`string`),Kg()(),Jc(665,`td`,20)(666,`em`)(667,`strong`),Mk(668,`(opcional)`),Kg()(),Jc(669,`p`),Mk(670,`Nova senha`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function He(a,N){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-change-password-basic-view`)(2,`sample-po-page-change-password-labs-view`)(3,`sample-po-page-change-password-modify-view`)(4,`sample-po-page-change-password-create-view`)(5,`sample-po-page-change-password-request-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Ie=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Page Change Password`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Page Change Password · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0),LO(1,He,6,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-page-change-password-doc`),Kg()()),o&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,ge,he,Pe,Se,fe,be],encapsulation:2,changeDetection:1})}return a})()}];var ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Ie),GV]})}return a})();var Rt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,ye]})}return a})();export{Rt as DocPoPageChangePasswordModule};