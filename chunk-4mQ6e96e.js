import{_ as It,g as Gn,j as ta,m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var pe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&vu(0,`po-page-blocked-user`)},dependencies:[Gn],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-blocked-user-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Blocked User Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-blocked-user></po-page-blocked-user>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-blocked-user-basic`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ee,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=It.None;secondaryLogo;url;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];reasonOptions=[{label:`Default`,value:It.None},{label:`Expired Password`,value:It.ExpiredPassword},{label:`Exceeded Attempts`,value:It.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch(l){this.customParams=void 0}}restore(){this.componentsSize=`medium`,this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params=``,this.logo=``,this.reason=It.None,this.secondaryLogo=``,this.url=void 0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-labs`]],standalone:!1,decls:15,vars:18,consts:[[`f`,`ngForm`],[3,`p-components-size`,`p-contact-email`,`p-contact-phone`,`p-logo`,`p-params`,`p-reason`,`p-secondary-logo`,`p-url-back`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`contactPhone`,`p-clean`,``,`p-help`,`11 99999 9999`,`p-label`,`Contact Phone`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-help`,`user@po-ui.com.br`,`p-label`,`Contact Mail`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`reason`,`p-columns`,`4`,`p-label`,`Reason Screen Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`params`,`p-clean`,``,`p-help`,`{"attempts": 20, "days": 20, "hours": 20}`,`p-label`,`Custom Params`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-help`,`https://po-ui.io/home`,`p-label`,`URL Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Secondary logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let b=YO();vu(0,`po-page-blocked-user`,1)(1,`po-divider`,2),Qc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.contactPhone,r)||(a.contactPhone=r),U_(r)}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.contactMail,r)||(a.contactMail=r),U_(r)}),Kg(),Qc(7,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.reason,r)||(a.reason=r),U_(r)}),Kg(),Qc(8,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.params,r)||(a.params=r),U_(r)}),vt(`p-change`,function(){return a.changeLiterals()}),Kg(),Qc(9,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.url,r)||(a.url=r),U_(r)}),Kg(),Qc(10,`po-input`,9),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.logo,r)||(a.logo=r),U_(r)}),Kg(),Qc(11,`po-input`,10),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.secondaryLogo,r)||(a.secondaryLogo=r),U_(r)}),Kg(),Qc(12,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(a.componentsSize,r)||(a.componentsSize=r),U_(r)}),Kg()(),Qc(13,`div`,3)(14,`po-button`,12),vt(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(Rb(`p-components-size`,a.componentsSize)(`p-contact-email`,a.contactMail)(`p-contact-phone`,a.contactPhone)(`p-logo`,a.logo)(`p-params`,a.customParams)(`p-reason`,a.reason)(`p-secondary-logo`,a.secondaryLogo)(`p-url-back`,a.url),wg(5),Yb(`ngModel`,a.contactPhone),W0(),wg(),Yb(`ngModel`,a.contactMail),W0(),wg(),Yb(`ngModel`,a.reason),Rb(`p-options`,a.reasonOptions),W0(),wg(),Yb(`ngModel`,a.params),W0(),wg(),Yb(`ngModel`,a.url),W0(),wg(),Yb(`ngModel`,a.logo),W0(),wg(),Yb(`ngModel`,a.secondaryLogo),W0(),wg(),Yb(`ngModel`,a.componentsSize),Rb(`p-options`,a.componentsSizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Zte,Gn],encapsulation:2,changeDetection:1})}return n})();var ke=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-blocked-user-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Blocked User Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-blocked-user
  [p-components-size]="componentsSize"
  [p-contact-email]="contactMail"
  [p-contact-phone]="contactPhone"
  [p-logo]="logo"
  [p-params]="customParams"
  [p-reason]="reason"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="url"
>
</po-page-blocked-user>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="contactPhone"
      [(ngModel)]="contactPhone"
      p-clean
      p-help="11 99999 9999"
      p-label="Contact Phone"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="contactMail"
      [(ngModel)]="contactMail"
      p-help="user@po-ui.com.br"
      p-label="Contact Mail"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="reason"
      [(ngModel)]="reason"
      p-columns="4"
      p-label="Reason Screen Type"
      [p-options]="reasonOptions"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="params"
      [(ngModel)]="params"
      p-clean
      p-help='{"attempts": 20, "days": 20, "hours": 20}'
      p-label="Custom Params"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-help="https://po-ui.io/home" p-label="URL Link">
    </po-input>

    <po-input
      class="po-md-6"
      name="logo"
      [(ngModel)]="logo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Logo"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="secondaryLogo"
      [(ngModel)]="secondaryLogo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Secondary logo"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { PoPageBlockedUserReason, PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-labs',
  templateUrl: './sample-po-page-blocked-user-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserLabsComponent implements OnInit {
  componentsSize: string;
  contactMail: string;
  contactPhone: string;
  customParams: PoPageBlockedUserReasonParams;
  params: string;
  logo: string;
  reason: PoPageBlockedUserReason = PoPageBlockedUserReason.None;
  secondaryLogo: string;
  url: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly reasonOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoPageBlockedUserReason.None },
    { label: 'Expired Password', value: PoPageBlockedUserReason.ExpiredPassword },
    { label: 'Exceeded Attempts', value: PoPageBlockedUserReason.ExceededAttempts }
  ];

  ngOnInit() {
    this.restore();
  }

  changeLiterals() {
    try {
      this.customParams = JSON.parse(this.params);
    } catch {
      this.customParams = undefined;
    }
  }

  restore() {
    this.componentsSize = 'medium';
    this.contactMail = undefined;
    this.contactPhone = undefined;
    this.customParams = { attempts: 5, days: 90, hours: 24 };
    this.params = '';
    this.logo = '';
    this.reason = PoPageBlockedUserReason.None;
    this.secondaryLogo = '';
    this.url = undefined;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-blocked-user-labs`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();function xe(n,V){if(n&1){let l=YO();Qc(0,`po-page-login`,2),vt(`p-login-submit`,function(){B_(l);let a=ek();return U_(a.checkLogin())}),Kg()}}function ve(n,V){if(n&1&&vu(0,`po-page-blocked-user`,1),n&2){let l=ek();Rb(`p-params`,l.params)}}var de=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`,3,`p-params`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(FO(0,xe,1,0,`po-page-login`,0),FO(1,ve,1,1,`po-page-blocked-user`,1)),i&2&&(VO(a.blocked?-1:0),wg(),VO(a.blocked?1:-1))},dependencies:[Gn,ta],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-blocked-user-exceeded-attempts`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Blocked User Exceeded Attempts`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`@if (!blocked) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (blocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="exceededAttempts"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
    [p-params]="params"
  >
  </po-page-blocked-user>
}
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-exceeded-attempts',
  templateUrl: './sample-po-page-blocked-user-exceeded-attempts.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserExceededAttemptsComponent {
  blocked = false;
  params: PoPageBlockedUserReasonParams = { attempts: 1, hours: 48 };

  checkLogin() {
    this.blocked = true;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-blocked-user-exceeded-attempts`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();function _e(n,V){if(n&1){let l=YO();Qc(0,`po-page-login`,2),vt(`p-login-submit`,function(){B_(l);let a=ek();return U_(a.checkLogin())}),Kg()}}function Me(n,V){n&1&&vu(0,`po-page-blocked-user`,1)}var ce=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`expiredPassword`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(FO(0,_e,1,0,`po-page-login`,0),FO(1,Me,1,0,`po-page-blocked-user`,1)),i&2&&(VO(a.blocked?-1:0),wg(),VO(a.blocked?1:-1))},dependencies:[Gn,ta],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-blocked-user-expired-password`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Blocked User Expired Password`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`@if (!blocked) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (blocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="expiredPassword"
    p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
  >
  </po-page-blocked-user>
}
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-expired-password',
  templateUrl: './sample-po-page-blocked-user-expired-password.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserExpiredPasswordComponent {
  blocked = false;

  checkLogin() {
    this.blocked = true;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-blocked-user-expired-password`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Te,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-blocked-user-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-contact-email`,1,`docs-api-properties-row`],[`id`,`prop-p-contact-phone`,1,`docs-api-properties-row`],[`id`,`prop-p-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReasonParams`],[`id`,`prop-p-reason`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReason`],[`id`,`prop-p-secondary-logo`,1,`docs-api-properties-row`],[`id`,`prop-p-url-back`,1,`docs-api-properties-row`],[`id`,`interface-po-page-blocked-user-reason-params`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-blocked-user-reason-params-attempts`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-page-blocked-user-reason-params-days`,1,`docs-api-properties-row`],[`id`,`interface-po-page-blocked-user-reason-params-hours`,1,`docs-api-properties-row`],[`id`,`enum-po-page-blocked-user-reason`,1,`docs-api-class-name`],[`id`,`enum-po-page-blocked-user-reason-none`,1,`docs-api-properties-row`],[`id`,`enum-po-page-blocked-user-reason-exceeded-attempts`,1,`docs-api-properties-row`],[`id`,`enum-po-page-blocked-user-reason-expired-password`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageBlockedUserModule } from '@po-ui/ng-templates';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do template do po-page-blocked-user.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoPageBlockedUserComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-page-blocked-user`),Kg(),Sk(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),Kg(),Qc(18,`p`),Sk(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),Kg(),Qc(20,`p`),Sk(21,`Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.`),Kg(),Qc(22,`p`),Sk(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Qc(24,`em`),Sk(25,`assets`),Kg(),Sk(26,` no arquivo `),Qc(27,`strong`),Sk(28,`angular.json`),Kg(),Sk(29,` da aplicação na seguinte ordem:`),Kg(),Qc(30,`pre`)(31,`code`),Sk(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()(),vu(33,`hr`),Qc(34,`h4`),Sk(35,`Praticidade`),Kg(),Qc(36,`p`),Sk(37,`O `),Qc(38,`code`),Sk(39,`po-page-blocked-user`),Kg(),Sk(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Qc(41,`code`),Sk(42,`/access-denied`),Kg(),Sk(43,`:`),Kg(),Qc(44,`pre`)(45,`code`),Sk(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'access-denied', component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.po@po-ui.com',
      contactPhone: '0800 1234 000',
      reason: PoPageBlockedUserReason.ExpiredPassword,
      urlBack: '/home'
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),Kg()(),Qc(47,`blockquote`)(48,`p`),Sk(49,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. `),Kg()()(),Qc(50,`div`,6)(51,`h4`,7),Sk(52,`Seletor`),Kg(),Qc(53,`pre`,8),Sk(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),Kg()(),Qc(55,`h4`,9),Sk(56,`Propriedades`),Kg(),Qc(57,`table`,10)(58,`tr`,11)(59,`th`,12),Sk(60,`Nome`),Kg(),Qc(61,`th`,12),Sk(62,`Tipo`),Kg(),Qc(63,`th`,12),Sk(64,`Padrão`),Kg(),Qc(65,`th`,12),Sk(66,`Descrição`),Kg()(),Qc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),Sk(71,` p-components-size`),vu(72,`br`),Kg()()(),Qc(73,`td`,17)(74,`code`,18),Sk(75,`string`),Kg()(),Qc(76,`td`,19)(77,`p`)(78,`code`),Sk(79,`medium`),Kg()()(),Qc(80,`td`,20)(81,`em`)(82,`strong`),Sk(83,`(opcional)`),Kg()(),Qc(84,`p`),Sk(85,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(86,`ul`)(87,`li`)(88,`code`),Sk(89,`small`),Kg(),Sk(90,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(91,`li`)(92,`code`),Sk(93,`medium`),Kg(),Sk(94,`: aplica a medida medium de cada componente.`),Kg()(),Qc(95,`blockquote`)(96,`p`),Sk(97,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(98,`code`),Sk(99,`medium`),Kg(),Sk(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(101,`a`,21),Sk(102,`po-theme`),Kg(),Sk(103,`.`),Kg()()()(),Qc(104,`tr`,22)(105,`td`,14)(106,`div`,15)(107,`span`,16),Sk(108,` p-contact-email`),vu(109,`br`),Kg()()(),Qc(110,`td`,17)(111,`code`,18),Sk(112,`string`),Kg()(),Qc(113,`td`,19),Sk(114,`-`),Kg(),Qc(115,`td`,20)(116,`em`)(117,`strong`),Sk(118,`(opcional)`),Kg()(),Qc(119,`p`),Sk(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),Kg()()(),Qc(121,`tr`,23)(122,`td`,14)(123,`div`,15)(124,`span`,16),Sk(125,` p-contact-phone`),vu(126,`br`),Kg()()(),Qc(127,`td`,17)(128,`code`,18),Sk(129,`string`),Kg()(),Qc(130,`td`,19),Sk(131,`-`),Kg(),Qc(132,`td`,20)(133,`em`)(134,`strong`),Sk(135,`(opcional)`),Kg()(),Qc(136,`p`),Sk(137,`Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.`),Kg(),Qc(138,`blockquote`)(139,`p`),Sk(140,`A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.`),Kg()()()(),Qc(141,`tr`,24)(142,`td`,14)(143,`div`,15)(144,`span`,16),Sk(145,` p-logo`),vu(146,`br`),Kg()()(),Qc(147,`td`,17)(148,`code`,18),Sk(149,`string`),Kg()(),Qc(150,`td`,19),Sk(151,`-`),Kg(),Qc(152,`td`,20)(153,`em`)(154,`strong`),Sk(155,`(opcional)`),Kg()(),Qc(156,`p`),Sk(157,`Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI.`),Kg()()(),Qc(158,`tr`,25)(159,`td`,14)(160,`div`,15)(161,`span`,16),Sk(162,` p-params`),vu(163,`br`),Kg()()(),Qc(164,`td`,17)(165,`code`,26),Sk(166,`PoPageBlockedUserReasonParams`),Kg()(),Qc(167,`td`,19),Sk(168,`-`),Kg(),Qc(169,`td`,20)(170,`em`)(171,`strong`),Sk(172,`(opcional)`),Kg()(),Qc(173,`p`),Sk(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),Kg(),Qc(175,`pre`)(176,`code`),Sk(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),Kg()(),Qc(178,`blockquote`)(179,`p`),Sk(180,`Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.`),Kg()(),Qc(181,`blockquote`)(182,`p`),Sk(183,`Veja os parâmetros customizáveis na interface `),Qc(184,`code`),Sk(185,`PoPageBlockedUserReasonParams`),Kg(),Sk(186,`.`),Kg()()()(),Qc(187,`tr`,27)(188,`td`,14)(189,`div`,15)(190,`span`,16),Sk(191,` p-reason`),vu(192,`br`),Kg()()(),Qc(193,`td`,17)(194,`code`,28),Sk(195,`PoPageBlockedUserReason`),Kg()(),Qc(196,`td`,19)(197,`p`)(198,`code`),Sk(199,`PoPageBlockedUserReason.None`),Kg()()(),Qc(200,`td`,20)(201,`em`)(202,`strong`),Sk(203,`(opcional)`),Kg()(),Qc(204,`p`),Sk(205,`Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.`),Kg(),Qc(206,`blockquote`)(207,`p`),Sk(208,`Veja os valores válidos no `),Qc(209,`em`),Sk(210,`enum`),Kg(),Qc(211,`code`),Sk(212,`PoPageBlockedUserReason`),Kg(),Sk(213,`.`),Kg()()()(),Qc(214,`tr`,29)(215,`td`,14)(216,`div`,15)(217,`span`,16),Sk(218,` p-secondary-logo`),vu(219,`br`),Kg()()(),Qc(220,`td`,17)(221,`code`,18),Sk(222,`string`),Kg()(),Qc(223,`td`,19),Sk(224,`-`),Kg(),Qc(225,`td`,20)(226,`em`)(227,`strong`),Sk(228,`(opcional)`),Kg()(),Qc(229,`p`),Sk(230,`Caminho para a logomarca localizada no rodapé.`),Kg()()(),Qc(231,`tr`,30)(232,`td`,14)(233,`div`,15)(234,`span`,16),Sk(235,` p-url-back`),vu(236,`br`),Kg()()(),Qc(237,`td`,17)(238,`code`,18),Sk(239,`string`),Kg()(),Qc(240,`td`,19)(241,`p`)(242,`code`),Sk(243,`/`),Kg()()(),Qc(244,`td`,20)(245,`em`)(246,`strong`),Sk(247,`(opcional)`),Kg()(),Qc(248,`p`),Sk(249,`URL para a ação de retorno da página.`),Kg()()()(),Qc(250,`h3`),Sk(251,`Interfaces`),Kg(),Qc(252,`h4`,31)(253,`code`,5),Sk(254,`PoPageBlockedUserReasonParams`),Kg()(),Qc(255,`div`,2)(256,`p`),Sk(257,`Interface que define os valores de customização da mensagem de bloqueio do componente `),Qc(258,`code`),Sk(259,`po-page-blocked-user`),Kg(),Sk(260,`.`),Kg()(),Qc(261,`h4`,9),Sk(262,`Propriedades`),Kg(),Qc(263,`table`,10)(264,`tr`,11)(265,`th`,12),Sk(266,`Nome`),Kg(),Qc(267,`th`,12),Sk(268,`Tipo`),Kg(),Qc(269,`th`,12),Sk(270,`Descrição`),Kg()(),Qc(271,`tr`,32)(272,`td`,14)(273,`div`,15)(274,`span`,16),Sk(275,` attempts`),vu(276,`br`),Kg()()(),Qc(277,`td`,17)(278,`code`,33),Sk(279,`number`),Kg()(),Qc(280,`td`,20)(281,`em`)(282,`strong`),Sk(283,`(opcional)`),Kg()(),Qc(284,`p`),Sk(285,`Quantidade máxima de tentativas.`),Kg()()(),Qc(286,`tr`,34)(287,`td`,14)(288,`div`,15)(289,`span`,16),Sk(290,` days`),vu(291,`br`),Kg()()(),Qc(292,`td`,17)(293,`code`,33),Sk(294,`number`),Kg()(),Qc(295,`td`,20)(296,`em`)(297,`strong`),Sk(298,`(opcional)`),Kg()(),Qc(299,`p`),Sk(300,`Quantidade de dias para expiração de senha.`),Kg()()(),Qc(301,`tr`,35)(302,`td`,14)(303,`div`,15)(304,`span`,16),Sk(305,` hours`),vu(306,`br`),Kg()()(),Qc(307,`td`,17)(308,`code`,33),Sk(309,`number`),Kg()(),Qc(310,`td`,20)(311,`em`)(312,`strong`),Sk(313,`(opcional)`),Kg()(),Qc(314,`p`),Sk(315,`Horas que o sistema permanecerá bloqueado.`),Kg()()()(),Qc(316,`h3`),Sk(317,`Enums`),Kg(),Qc(318,`h4`,36)(319,`code`,5),Sk(320,`PoPageBlockedUserReason`),Kg()(),Qc(321,`div`,2)(322,`p`)(323,`em`),Sk(324,`Enum`),Kg(),Sk(325,` para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.`),Kg()(),Qc(326,`h4`,9),Sk(327,`Propriedades`),Kg(),Qc(328,`table`,10)(329,`tr`,11)(330,`th`,12),Sk(331,`Nome`),Kg(),Qc(332,`th`,12),Sk(333,`Descrição`),Kg()(),Qc(334,`tr`,37)(335,`td`,14)(336,`div`,15)(337,`span`,16),Sk(338,` None`),vu(339,`br`),Kg()()(),Qc(340,`td`,20)(341,`p`),Sk(342,`Sem definição; a tela exibirá conteúdo de bloqueio genérico.`),Kg()()(),Qc(343,`tr`,38)(344,`td`,14)(345,`div`,15)(346,`span`,16),Sk(347,` ExceededAttempts`),vu(348,`br`),Kg()()(),Qc(349,`td`,20)(350,`p`),Sk(351,`Definição para tentativas de acesso esgotadas.`),Kg()()(),Qc(352,`tr`,39)(353,`td`,14)(354,`div`,15)(355,`span`,16),Sk(356,` ExpiredPassword`),vu(357,`br`),Kg()()(),Qc(358,`td`,20)(359,`p`),Sk(360,`Definição para senha expirada.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Oe(n,V){if(n&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-page-blocked-user-basic-view`)(2,`sample-po-page-blocked-user-labs-view`)(3,`sample-po-page-blocked-user-exceeded-attempts-view`)(4,`sample-po-page-blocked-user-expired-password-view`),Kg()}if(n&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Ae=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Blocked User`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Oe,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-page-blocked-user-doc`),Kg()()()),i&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,le,re,me,ue,ge],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[GV.forChild(Ae),GV]})}return n})();var bt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,he]})}return n})();export{bt as DocPoPageBlockedUserModule};