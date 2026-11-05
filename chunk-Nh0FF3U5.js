import{Cn as oi,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,ai as Sn,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{a as It,i as Gn,n as P,t as M,v as ta}from"./main-7FOYFSS2.js";var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&nu(0,`po-page-blocked-user`)},dependencies:[Gn],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Blocked User Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-blocked-user></po-page-blocked-user>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-blocked-user-basic`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ee,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,le],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=It.None;secondaryLogo;url;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];reasonOptions=[{label:`Default`,value:It.None},{label:`Expired Password`,value:It.ExpiredPassword},{label:`Exceeded Attempts`,value:It.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch(p){this.customParams=void 0}}restore(){this.componentsSize=`medium`,this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params=``,this.logo=``,this.reason=It.None,this.secondaryLogo=``,this.url=void 0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-labs`]],standalone:!1,decls:15,vars:18,consts:[[`f`,`ngForm`],[3,`p-components-size`,`p-contact-email`,`p-contact-phone`,`p-logo`,`p-params`,`p-reason`,`p-secondary-logo`,`p-url-back`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`contactPhone`,`p-clean`,``,`p-help`,`11 99999 9999`,`p-label`,`Contact Phone`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-help`,`user@po-ui.com.br`,`p-label`,`Contact Mail`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`reason`,`p-columns`,`4`,`p-label`,`Reason Screen Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`params`,`p-clean`,``,`p-help`,`{"attempts": 20, "days": 20, "hours": 20}`,`p-label`,`Custom Params`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-help`,`https://po-ui.io/home`,`p-label`,`URL Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Secondary logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let h=Ax();nu(0,`po-page-blocked-user`,1)(1,`po-divider`,2),jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.contactPhone,r)||(a.contactPhone=r),__(r)}),wg(),jc(6,`po-input`,5),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.contactMail,r)||(a.contactMail=r),__(r)}),wg(),jc(7,`po-radio-group`,6),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.reason,r)||(a.reason=r),__(r)}),wg(),jc(8,`po-input`,7),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.params,r)||(a.params=r),__(r)}),mt(`p-change`,function(){return a.changeLiterals()}),wg(),jc(9,`po-input`,8),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.url,r)||(a.url=r),__(r)}),wg(),jc(10,`po-input`,9),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.logo,r)||(a.logo=r),__(r)}),wg(),jc(11,`po-input`,10),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.secondaryLogo,r)||(a.secondaryLogo=r),__(r)}),wg(),jc(12,`po-radio-group`,11),r0(),ab(`ngModelChange`,function(r){return v_(h),uO(a.componentsSize,r)||(a.componentsSize=r),__(r)}),wg()(),jc(13,`div`,3)(14,`po-button`,12),mt(`p-click`,function(){return a.restore()}),wg()()()}i&2&&(UE(`p-components-size`,a.componentsSize)(`p-contact-email`,a.contactMail)(`p-contact-phone`,a.contactPhone)(`p-logo`,a.logo)(`p-params`,a.customParams)(`p-reason`,a.reason)(`p-secondary-logo`,a.secondaryLogo)(`p-url-back`,a.url),rg(5),sb(`ngModel`,a.contactPhone),o0(),rg(),sb(`ngModel`,a.contactMail),o0(),rg(),sb(`ngModel`,a.reason),UE(`p-options`,a.reasonOptions),o0(),rg(),sb(`ngModel`,a.params),o0(),rg(),sb(`ngModel`,a.url),o0(),rg(),sb(`ngModel`,a.logo),o0(),rg(),sb(`ngModel`,a.secondaryLogo),o0(),rg(),sb(`ngModel`,a.componentsSize),UE(`p-options`,a.componentsSizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,U4,Gte,Gn],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Blocked User Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-blocked-user
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-blocked-user-labs`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,fe,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,se],encapsulation:2,changeDetection:1})}return n})();function xe(n,N){if(n&1){let p=Ax();jc(0,`po-page-login`,2),mt(`p-login-submit`,function(){v_(p);let a=Fx();return __(a.checkLogin())}),wg()}}function ve(n,N){if(n&1&&nu(0,`po-page-blocked-user`,1),n&2){let p=Fx();UE(`p-params`,p.params)}}var me=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`,3,`p-params`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(vx(0,xe,1,0,`po-page-login`,0),vx(1,ve,1,1,`po-page-blocked-user`,1)),i&2&&(Dx(a.blocked?-1:0),rg(),Dx(a.blocked?1:-1))},dependencies:[Gn,ta],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Blocked User Exceeded Attempts`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`),wg(),jc(13,`pre`,7),lO(14,`@if (!blocked) {
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-blocked-user-exceeded-attempts`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Be,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,me],encapsulation:2,changeDetection:1})}return n})();function we(n,N){if(n&1){let p=Ax();jc(0,`po-page-login`,2),mt(`p-login-submit`,function(){v_(p);let a=Fx();return __(a.checkLogin())}),wg()}}function Me(n,N){n&1&&nu(0,`po-page-blocked-user`,1)}var ce=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`expiredPassword`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(vx(0,we,1,0,`po-page-login`,0),vx(1,Me,1,0,`po-page-blocked-user`,1)),i&2&&(Dx(a.blocked?-1:0),rg(),Dx(a.blocked?1:-1))},dependencies:[Gn,ta],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Blocked User Expired Password`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`),wg(),jc(13,`pre`,7),lO(14,`@if (!blocked) {
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-blocked-user-expired-password`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Te,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ce],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-page-blocked-user-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReasonParams`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReason`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(i,a){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPageBlockedUserModule } from '@po-ui/ng-templates';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do template do po-page-blocked-user.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoPageBlockedUserComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-page-blocked-user`),wg(),lO(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),wg(),jc(18,`p`),lO(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),wg(),jc(20,`p`),lO(21,`Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.`),wg(),jc(22,`p`),lO(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),jc(24,`em`),lO(25,`assets`),wg(),lO(26,` no arquivo `),jc(27,`strong`),lO(28,`angular.json`),wg(),lO(29,` da aplicação na seguinte ordem:`),wg(),jc(30,`pre`)(31,`code`),lO(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),wg()(),nu(33,`hr`),jc(34,`h4`),lO(35,`Praticidade`),wg(),jc(36,`p`),lO(37,`O `),jc(38,`code`),lO(39,`po-page-blocked-user`),wg(),lO(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),jc(41,`code`),lO(42,`/access-denied`),wg(),lO(43,`:`),wg(),jc(44,`pre`)(45,`code`),lO(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),wg()(),jc(47,`blockquote`)(48,`p`),lO(49,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. `),wg()()(),jc(50,`div`,6)(51,`h4`,7),lO(52,`Seletor`),wg(),jc(53,`pre`,8),lO(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),wg()(),jc(55,`h4`,9),lO(56,`Propriedades`),wg(),jc(57,`table`,10)(58,`tr`,11)(59,`th`,12),lO(60,`Nome`),wg(),jc(61,`th`,12),lO(62,`Tipo`),wg(),jc(63,`th`,12),lO(64,`Padrão`),wg(),jc(65,`th`,12),lO(66,`Descrição`),wg()(),jc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),lO(71,` p-components-size`),nu(72,`br`),wg()()(),jc(73,`td`,17)(74,`code`,18),lO(75,`string`),wg()(),jc(76,`td`,19)(77,`p`)(78,`code`),lO(79,`medium`),wg()()(),jc(80,`td`,20)(81,`em`)(82,`strong`),lO(83,`(opcional)`),wg()(),jc(84,`p`),lO(85,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(86,`ul`)(87,`li`)(88,`code`),lO(89,`small`),wg(),lO(90,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(91,`li`)(92,`code`),lO(93,`medium`),wg(),lO(94,`: aplica a medida medium de cada componente.`),wg()(),jc(95,`blockquote`)(96,`p`),lO(97,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(98,`code`),lO(99,`medium`),wg(),lO(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(101,`a`,21),lO(102,`po-theme`),wg(),lO(103,`.`),wg()()()(),jc(104,`tr`,13)(105,`td`,14)(106,`div`,15)(107,`span`,16),lO(108,` p-contact-email`),nu(109,`br`),wg()()(),jc(110,`td`,17)(111,`code`,18),lO(112,`string`),wg()(),jc(113,`td`,19),lO(114,`-`),wg(),jc(115,`td`,20)(116,`em`)(117,`strong`),lO(118,`(opcional)`),wg()(),jc(119,`p`),lO(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),wg()()(),jc(121,`tr`,13)(122,`td`,14)(123,`div`,15)(124,`span`,16),lO(125,` p-contact-phone`),nu(126,`br`),wg()()(),jc(127,`td`,17)(128,`code`,18),lO(129,`string`),wg()(),jc(130,`td`,19),lO(131,`-`),wg(),jc(132,`td`,20)(133,`em`)(134,`strong`),lO(135,`(opcional)`),wg()(),jc(136,`p`),lO(137,`Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.`),wg(),jc(138,`blockquote`)(139,`p`),lO(140,`A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.`),wg()()()(),jc(141,`tr`,13)(142,`td`,14)(143,`div`,15)(144,`span`,16),lO(145,` p-logo`),nu(146,`br`),wg()()(),jc(147,`td`,17)(148,`code`,18),lO(149,`string`),wg()(),jc(150,`td`,19),lO(151,`-`),wg(),jc(152,`td`,20)(153,`em`)(154,`strong`),lO(155,`(opcional)`),wg()(),jc(156,`p`),lO(157,`Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI.`),wg()()(),jc(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),lO(162,` p-params`),nu(163,`br`),wg()()(),jc(164,`td`,17)(165,`code`,22),lO(166,`PoPageBlockedUserReasonParams`),wg()(),jc(167,`td`,19),lO(168,`-`),wg(),jc(169,`td`,20)(170,`em`)(171,`strong`),lO(172,`(opcional)`),wg()(),jc(173,`p`),lO(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),wg(),jc(175,`pre`)(176,`code`),lO(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),wg()(),jc(178,`blockquote`)(179,`p`),lO(180,`Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.`),wg()(),jc(181,`blockquote`)(182,`p`),lO(183,`Veja os parâmetros customizáveis na interface `),jc(184,`code`),lO(185,`PoPageBlockedUserReasonParams`),wg(),lO(186,`.`),wg()()()(),jc(187,`tr`,13)(188,`td`,14)(189,`div`,15)(190,`span`,16),lO(191,` p-reason`),nu(192,`br`),wg()()(),jc(193,`td`,17)(194,`code`,23),lO(195,`PoPageBlockedUserReason`),wg()(),jc(196,`td`,19)(197,`p`)(198,`code`),lO(199,`PoPageBlockedUserReason.None`),wg()()(),jc(200,`td`,20)(201,`em`)(202,`strong`),lO(203,`(opcional)`),wg()(),jc(204,`p`),lO(205,`Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.`),wg(),jc(206,`blockquote`)(207,`p`),lO(208,`Veja os valores válidos no `),jc(209,`em`),lO(210,`enum`),wg(),jc(211,`code`),lO(212,`PoPageBlockedUserReason`),wg(),lO(213,`.`),wg()()()(),jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),lO(218,` p-secondary-logo`),nu(219,`br`),wg()()(),jc(220,`td`,17)(221,`code`,18),lO(222,`string`),wg()(),jc(223,`td`,19),lO(224,`-`),wg(),jc(225,`td`,20)(226,`em`)(227,`strong`),lO(228,`(opcional)`),wg()(),jc(229,`p`),lO(230,`Caminho para a logomarca localizada no rodapé.`),wg()()(),jc(231,`tr`,13)(232,`td`,14)(233,`div`,15)(234,`span`,16),lO(235,` p-url-back`),nu(236,`br`),wg()()(),jc(237,`td`,17)(238,`code`,18),lO(239,`string`),wg()(),jc(240,`td`,19)(241,`p`)(242,`code`),lO(243,`/`),wg()()(),jc(244,`td`,20)(245,`em`)(246,`strong`),lO(247,`(opcional)`),wg()(),jc(248,`p`),lO(249,`URL para a ação de retorno da página.`),wg()()()(),jc(250,`h3`),lO(251,`Interfaces`),wg(),jc(252,`h4`,24)(253,`code`,5),lO(254,`PoPageBlockedUserReasonParams`),wg()(),jc(255,`div`,2)(256,`p`),lO(257,`Interface que define os valores de customização da mensagem de bloqueio do componente `),jc(258,`code`),lO(259,`po-page-blocked-user`),wg(),lO(260,`.`),wg()(),jc(261,`h4`,9),lO(262,`Propriedades`),wg(),jc(263,`table`,10)(264,`tr`,11)(265,`th`,12),lO(266,`Nome`),wg(),jc(267,`th`,12),lO(268,`Tipo`),wg(),jc(269,`th`,12),lO(270,`Descrição`),wg()(),jc(271,`tr`,13)(272,`td`,14)(273,`div`,15)(274,`span`,16),lO(275,` attempts`),nu(276,`br`),wg()()(),jc(277,`td`,17)(278,`code`,25),lO(279,`number`),wg()(),jc(280,`td`,20)(281,`em`)(282,`strong`),lO(283,`(opcional)`),wg()(),jc(284,`p`),lO(285,`Quantidade máxima de tentativas.`),wg()()(),jc(286,`tr`,13)(287,`td`,14)(288,`div`,15)(289,`span`,16),lO(290,` days`),nu(291,`br`),wg()()(),jc(292,`td`,17)(293,`code`,25),lO(294,`number`),wg()(),jc(295,`td`,20)(296,`em`)(297,`strong`),lO(298,`(opcional)`),wg()(),jc(299,`p`),lO(300,`Quantidade de dias para expiração de senha.`),wg()()(),jc(301,`tr`,13)(302,`td`,14)(303,`div`,15)(304,`span`,16),lO(305,` hours`),nu(306,`br`),wg()()(),jc(307,`td`,17)(308,`code`,25),lO(309,`number`),wg()(),jc(310,`td`,20)(311,`em`)(312,`strong`),lO(313,`(opcional)`),wg()(),jc(314,`p`),lO(315,`Horas que o sistema permanecerá bloqueado.`),wg()()()(),jc(316,`h3`),lO(317,`Enums`),wg(),jc(318,`h4`,4)(319,`code`,5),lO(320,`PoPageBlockedUserReason`),wg()(),jc(321,`div`,2)(322,`p`)(323,`em`),lO(324,`Enum`),wg(),lO(325,` para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.`),wg()(),jc(326,`h4`,9),lO(327,`Propriedades`),wg(),jc(328,`table`,10)(329,`tr`,11)(330,`th`,12),lO(331,`Nome`),wg(),jc(332,`th`,12),lO(333,`Descrição`),wg()(),jc(334,`tr`,13)(335,`td`,14)(336,`div`,15)(337,`span`,16),lO(338,` None`),nu(339,`br`),wg()()(),jc(340,`td`,20)(341,`p`),lO(342,`Sem definição; a tela exibirá conteúdo de bloqueio genérico.`),wg()()(),jc(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),lO(347,` ExceededAttempts`),nu(348,`br`),wg()()(),jc(349,`td`,20)(350,`p`),lO(351,`Definição para tentativas de acesso esgotadas.`),wg()()(),jc(352,`tr`,13)(353,`td`,14)(354,`div`,15)(355,`span`,16),lO(356,` ExpiredPassword`),nu(357,`br`),wg()()(),jc(358,`td`,20)(359,`p`),lO(360,`Definição para senha expirada.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Oe(n,N){if(n&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let a=Fx();return __(a.changeTab(`web`))}),nu(1,`sample-po-page-blocked-user-basic-view`)(2,`sample-po-page-blocked-user-labs-view`)(3,`sample-po-page-blocked-user-exceeded-attempts-view`)(4,`sample-po-page-blocked-user-expired-password-view`),wg()}if(n&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var Ae=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Blocked User`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Oe,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(4,`sample-po-page-blocked-user-doc`),wg()()()),i&2&&(UE(`p-actions`,a.actions),rg(2),Dx(a.hidePoWebSample?-1:2),rg(),UE(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,re,de,ue,ge],encapsulation:2,changeDetection:1})}return n})()}];var be=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe$1({type:n});static ɵinj=ue$1({imports:[I1.forChild(Ae),I1]})}return n})();var dt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe$1({type:n});static ɵinj=ue$1({imports:[M,be]})}return n})();export{dt as DocPoPageBlockedUserModule};