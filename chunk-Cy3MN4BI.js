import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Yi as eF,an as j4,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,va as nk,vn as oi,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{a as It,i as Gn,n as P,t as M,y as ta}from"./main-3VBI2GXJ.js";var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&_u(0,`po-page-blocked-user`)},dependencies:[Gn],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Blocked User Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-blocked-user></po-page-blocked-user>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-blocked-user-basic`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Pe,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ie],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=It.None;secondaryLogo;url;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];reasonOptions=[{label:`Default`,value:It.None},{label:`Expired Password`,value:It.ExpiredPassword},{label:`Exceeded Attempts`,value:It.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch(p){this.customParams=void 0}}restore(){this.componentsSize=`medium`,this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params=``,this.logo=``,this.reason=It.None,this.secondaryLogo=``,this.url=void 0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-labs`]],standalone:!1,decls:15,vars:18,consts:[[`f`,`ngForm`],[3,`p-components-size`,`p-contact-email`,`p-contact-phone`,`p-logo`,`p-params`,`p-reason`,`p-secondary-logo`,`p-url-back`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`contactPhone`,`p-clean`,``,`p-help`,`11 99999 9999`,`p-label`,`Contact Phone`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-help`,`user@po-ui.com.br`,`p-label`,`Contact Mail`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`reason`,`p-columns`,`4`,`p-label`,`Reason Screen Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`params`,`p-clean`,``,`p-help`,`{"attempts": 20, "days": 20, "hours": 20}`,`p-label`,`Custom Params`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-help`,`https://po-ui.io/home`,`p-label`,`URL Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Secondary logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let h=ZO();_u(0,`po-page-blocked-user`,1)(1,`po-divider`,2),Jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.contactPhone,r)||(a.contactPhone=r),H_(r)}),Zg(),Jc(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.contactMail,r)||(a.contactMail=r),H_(r)}),Zg(),Jc(7,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.reason,r)||(a.reason=r),H_(r)}),Zg(),Jc(8,`po-input`,7),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.params,r)||(a.params=r),H_(r)}),vt(`p-change`,function(){return a.changeLiterals()}),Zg(),Jc(9,`po-input`,8),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.url,r)||(a.url=r),H_(r)}),Zg(),Jc(10,`po-input`,9),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.logo,r)||(a.logo=r),H_(r)}),Zg(),Jc(11,`po-input`,10),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.secondaryLogo,r)||(a.secondaryLogo=r),H_(r)}),Zg(),Jc(12,`po-radio-group`,11),W0(),Kb(`ngModelChange`,function(r){return U_(h),Ak(a.componentsSize,r)||(a.componentsSize=r),H_(r)}),Zg()(),Jc(13,`div`,3)(14,`po-button`,12),vt(`p-click`,function(){return a.restore()}),Zg()()()}i&2&&(Rb(`p-components-size`,a.componentsSize)(`p-contact-email`,a.contactMail)(`p-contact-phone`,a.contactPhone)(`p-logo`,a.logo)(`p-params`,a.customParams)(`p-reason`,a.reason)(`p-secondary-logo`,a.secondaryLogo)(`p-url-back`,a.url),Ig(5),Yb(`ngModel`,a.contactPhone),Y0(),Ig(),Yb(`ngModel`,a.contactMail),Y0(),Ig(),Yb(`ngModel`,a.reason),Rb(`p-options`,a.reasonOptions),Y0(),Ig(),Yb(`ngModel`,a.params),Y0(),Ig(),Yb(`ngModel`,a.url),Y0(),Ig(),Yb(`ngModel`,a.logo),Y0(),Ig(),Yb(`ngModel`,a.secondaryLogo),Y0(),Ig(),Yb(`ngModel`,a.componentsSize),Rb(`p-options`,a.componentsSizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,Zte,Gn],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Blocked User Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-blocked-user
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-blocked-user-labs`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ce,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();function ke(n,V){if(n&1){let p=ZO();Jc(0,`po-page-login`,2),vt(`p-login-submit`,function(){U_(p);let a=nk();return H_(a.checkLogin())}),Zg()}}function xe(n,V){if(n&1&&_u(0,`po-page-blocked-user`,1),n&2){let p=nk();Rb(`p-params`,p.params)}}var re=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`,3,`p-params`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(VO(0,ke,1,0,`po-page-login`,0),VO(1,xe,1,1,`po-page-blocked-user`,1)),i&2&&(BO(a.blocked?-1:0),Ig(),BO(a.blocked?1:-1))},dependencies:[Gn,ta],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Blocked User Exceeded Attempts`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`@if (!blocked) {
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-blocked-user-exceeded-attempts`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return n})();function _e(n,V){if(n&1){let p=ZO();Jc(0,`po-page-login`,2),vt(`p-login-submit`,function(){U_(p);let a=nk();return H_(a.checkLogin())}),Zg()}}function we(n,V){n&1&&_u(0,`po-page-blocked-user`,1)}var de=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`expiredPassword`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(VO(0,_e,1,0,`po-page-login`,0),VO(1,we,1,0,`po-page-blocked-user`,1)),i&2&&(BO(a.blocked?-1:0),Ig(),BO(a.blocked?1:-1))},dependencies:[Gn,ta],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Blocked User Expired Password`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`@if (!blocked) {
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-blocked-user-expired-password`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ue,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-blocked-user-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReasonParams`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReason`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageBlockedUserModule } from '@po-ui/ng-templates';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do template do po-page-blocked-user.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoPageBlockedUserComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-page-blocked-user`),Zg(),Tk(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),Zg(),Jc(18,`p`),Tk(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),Zg(),Jc(20,`p`),Tk(21,`Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.`),Zg(),Jc(22,`p`),Tk(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(24,`em`),Tk(25,`assets`),Zg(),Tk(26,` no arquivo `),Jc(27,`strong`),Tk(28,`angular.json`),Zg(),Tk(29,` da aplicação na seguinte ordem:`),Zg(),Jc(30,`pre`)(31,`code`),Tk(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Zg()(),_u(33,`hr`),Jc(34,`h4`),Tk(35,`Praticidade`),Zg(),Jc(36,`p`),Tk(37,`O `),Jc(38,`code`),Tk(39,`po-page-blocked-user`),Zg(),Tk(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Jc(41,`code`),Tk(42,`/access-denied`),Zg(),Tk(43,`:`),Zg(),Jc(44,`pre`)(45,`code`),Tk(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),Zg()(),Jc(47,`blockquote`)(48,`p`),Tk(49,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. `),Zg()()(),Jc(50,`div`,6)(51,`h4`,7),Tk(52,`Seletor`),Zg(),Jc(53,`pre`,8),Tk(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),Zg()(),Jc(55,`h4`,9),Tk(56,`Propriedades`),Zg(),Jc(57,`table`,10)(58,`tr`,11)(59,`th`,12),Tk(60,`Nome`),Zg(),Jc(61,`th`,12),Tk(62,`Tipo`),Zg(),Jc(63,`th`,12),Tk(64,`Padrão`),Zg(),Jc(65,`th`,12),Tk(66,`Descrição`),Zg()(),Jc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),Tk(71,` p-components-size`),_u(72,`br`),Zg()()(),Jc(73,`td`,17)(74,`code`,18),Tk(75,`string`),Zg()(),Jc(76,`td`,19)(77,`p`)(78,`code`),Tk(79,`medium`),Zg()()(),Jc(80,`td`,20)(81,`em`)(82,`strong`),Tk(83,`(opcional)`),Zg()(),Jc(84,`p`),Tk(85,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(86,`ul`)(87,`li`)(88,`code`),Tk(89,`small`),Zg(),Tk(90,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(91,`li`)(92,`code`),Tk(93,`medium`),Zg(),Tk(94,`: aplica a medida medium de cada componente.`),Zg()(),Jc(95,`blockquote`)(96,`p`),Tk(97,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(98,`code`),Tk(99,`medium`),Zg(),Tk(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(101,`a`,21),Tk(102,`po-theme`),Zg(),Tk(103,`.`),Zg()()()(),Jc(104,`tr`,13)(105,`td`,14)(106,`div`,15)(107,`span`,16),Tk(108,` p-contact-email`),_u(109,`br`),Zg()()(),Jc(110,`td`,17)(111,`code`,18),Tk(112,`string`),Zg()(),Jc(113,`td`,19),Tk(114,`-`),Zg(),Jc(115,`td`,20)(116,`em`)(117,`strong`),Tk(118,`(opcional)`),Zg()(),Jc(119,`p`),Tk(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),Zg()()(),Jc(121,`tr`,13)(122,`td`,14)(123,`div`,15)(124,`span`,16),Tk(125,` p-contact-phone`),_u(126,`br`),Zg()()(),Jc(127,`td`,17)(128,`code`,18),Tk(129,`string`),Zg()(),Jc(130,`td`,19),Tk(131,`-`),Zg(),Jc(132,`td`,20)(133,`em`)(134,`strong`),Tk(135,`(opcional)`),Zg()(),Jc(136,`p`),Tk(137,`Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.`),Zg(),Jc(138,`blockquote`)(139,`p`),Tk(140,`A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.`),Zg()()()(),Jc(141,`tr`,13)(142,`td`,14)(143,`div`,15)(144,`span`,16),Tk(145,` p-logo`),_u(146,`br`),Zg()()(),Jc(147,`td`,17)(148,`code`,18),Tk(149,`string`),Zg()(),Jc(150,`td`,19),Tk(151,`-`),Zg(),Jc(152,`td`,20)(153,`em`)(154,`strong`),Tk(155,`(opcional)`),Zg()(),Jc(156,`p`),Tk(157,`Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI.`),Zg()()(),Jc(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),Tk(162,` p-params`),_u(163,`br`),Zg()()(),Jc(164,`td`,17)(165,`code`,22),Tk(166,`PoPageBlockedUserReasonParams`),Zg()(),Jc(167,`td`,19),Tk(168,`-`),Zg(),Jc(169,`td`,20)(170,`em`)(171,`strong`),Tk(172,`(opcional)`),Zg()(),Jc(173,`p`),Tk(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),Zg(),Jc(175,`pre`)(176,`code`),Tk(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),Zg()(),Jc(178,`blockquote`)(179,`p`),Tk(180,`Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.`),Zg()(),Jc(181,`blockquote`)(182,`p`),Tk(183,`Veja os parâmetros customizáveis na interface `),Jc(184,`code`),Tk(185,`PoPageBlockedUserReasonParams`),Zg(),Tk(186,`.`),Zg()()()(),Jc(187,`tr`,13)(188,`td`,14)(189,`div`,15)(190,`span`,16),Tk(191,` p-reason`),_u(192,`br`),Zg()()(),Jc(193,`td`,17)(194,`code`,23),Tk(195,`PoPageBlockedUserReason`),Zg()(),Jc(196,`td`,19)(197,`p`)(198,`code`),Tk(199,`PoPageBlockedUserReason.None`),Zg()()(),Jc(200,`td`,20)(201,`em`)(202,`strong`),Tk(203,`(opcional)`),Zg()(),Jc(204,`p`),Tk(205,`Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.`),Zg(),Jc(206,`blockquote`)(207,`p`),Tk(208,`Veja os valores válidos no `),Jc(209,`em`),Tk(210,`enum`),Zg(),Jc(211,`code`),Tk(212,`PoPageBlockedUserReason`),Zg(),Tk(213,`.`),Zg()()()(),Jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),Tk(218,` p-secondary-logo`),_u(219,`br`),Zg()()(),Jc(220,`td`,17)(221,`code`,18),Tk(222,`string`),Zg()(),Jc(223,`td`,19),Tk(224,`-`),Zg(),Jc(225,`td`,20)(226,`em`)(227,`strong`),Tk(228,`(opcional)`),Zg()(),Jc(229,`p`),Tk(230,`Caminho para a logomarca localizada no rodapé.`),Zg()()(),Jc(231,`tr`,13)(232,`td`,14)(233,`div`,15)(234,`span`,16),Tk(235,` p-url-back`),_u(236,`br`),Zg()()(),Jc(237,`td`,17)(238,`code`,18),Tk(239,`string`),Zg()(),Jc(240,`td`,19)(241,`p`)(242,`code`),Tk(243,`/`),Zg()()(),Jc(244,`td`,20)(245,`em`)(246,`strong`),Tk(247,`(opcional)`),Zg()(),Jc(248,`p`),Tk(249,`URL para a ação de retorno da página.`),Zg()()()(),Jc(250,`h3`),Tk(251,`Interfaces`),Zg(),Jc(252,`h4`,24)(253,`code`,5),Tk(254,`PoPageBlockedUserReasonParams`),Zg()(),Jc(255,`div`,2)(256,`p`),Tk(257,`Interface que define os valores de customização da mensagem de bloqueio do componente `),Jc(258,`code`),Tk(259,`po-page-blocked-user`),Zg(),Tk(260,`.`),Zg()(),Jc(261,`h4`,9),Tk(262,`Propriedades`),Zg(),Jc(263,`table`,10)(264,`tr`,11)(265,`th`,12),Tk(266,`Nome`),Zg(),Jc(267,`th`,12),Tk(268,`Tipo`),Zg(),Jc(269,`th`,12),Tk(270,`Descrição`),Zg()(),Jc(271,`tr`,13)(272,`td`,14)(273,`div`,15)(274,`span`,16),Tk(275,` attempts`),_u(276,`br`),Zg()()(),Jc(277,`td`,17)(278,`code`,25),Tk(279,`number`),Zg()(),Jc(280,`td`,20)(281,`em`)(282,`strong`),Tk(283,`(opcional)`),Zg()(),Jc(284,`p`),Tk(285,`Quantidade máxima de tentativas.`),Zg()()(),Jc(286,`tr`,13)(287,`td`,14)(288,`div`,15)(289,`span`,16),Tk(290,` days`),_u(291,`br`),Zg()()(),Jc(292,`td`,17)(293,`code`,25),Tk(294,`number`),Zg()(),Jc(295,`td`,20)(296,`em`)(297,`strong`),Tk(298,`(opcional)`),Zg()(),Jc(299,`p`),Tk(300,`Quantidade de dias para expiração de senha.`),Zg()()(),Jc(301,`tr`,13)(302,`td`,14)(303,`div`,15)(304,`span`,16),Tk(305,` hours`),_u(306,`br`),Zg()()(),Jc(307,`td`,17)(308,`code`,25),Tk(309,`number`),Zg()(),Jc(310,`td`,20)(311,`em`)(312,`strong`),Tk(313,`(opcional)`),Zg()(),Jc(314,`p`),Tk(315,`Horas que o sistema permanecerá bloqueado.`),Zg()()()(),Jc(316,`h3`),Tk(317,`Enums`),Zg(),Jc(318,`h4`,4)(319,`code`,5),Tk(320,`PoPageBlockedUserReason`),Zg()(),Jc(321,`div`,2)(322,`p`)(323,`em`),Tk(324,`Enum`),Zg(),Tk(325,` para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.`),Zg()(),Jc(326,`h4`,9),Tk(327,`Propriedades`),Zg(),Jc(328,`table`,10)(329,`tr`,11)(330,`th`,12),Tk(331,`Nome`),Zg(),Jc(332,`th`,12),Tk(333,`Descrição`),Zg()(),Jc(334,`tr`,13)(335,`td`,14)(336,`div`,15)(337,`span`,16),Tk(338,` None`),_u(339,`br`),Zg()()(),Jc(340,`td`,20)(341,`p`),Tk(342,`Sem definição; a tela exibirá conteúdo de bloqueio genérico.`),Zg()()(),Jc(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),Tk(347,` ExceededAttempts`),_u(348,`br`),Zg()()(),Jc(349,`td`,20)(350,`p`),Tk(351,`Definição para tentativas de acesso esgotadas.`),Zg()()(),Jc(352,`tr`,13)(353,`td`,14)(354,`div`,15)(355,`span`,16),Tk(356,` ExpiredPassword`),_u(357,`br`),Zg()()(),Jc(358,`td`,20)(359,`p`),Tk(360,`Definição para senha expirada.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Le(n,V){if(n&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-page-blocked-user-basic-view`)(2,`sample-po-page-blocked-user-labs-view`)(3,`sample-po-page-blocked-user-exceeded-attempts-view`)(4,`sample-po-page-blocked-user-expired-password-view`),Zg()}if(n&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Blocked User`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Le,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-page-blocked-user-doc`),Zg()()()),i&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,le,se,me,ce,ue],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[WV.forChild(Oe),WV]})}return n})();var mt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,he]})}return n})();export{mt as DocPoPageBlockedUserModule};