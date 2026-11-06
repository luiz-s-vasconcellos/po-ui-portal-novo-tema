import{$n as Ak,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,cn as iie,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,i as Ac,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{f as ie,n as P,p as ki,t as M}from"./main-SRPMFWZC.js";var me=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(a,n){if(a&1){let p=ZO();_u(0,`po-modal-password-recovery`,null,0),Jc(2,`po-button`,1),vt(`p-click`,function(){U_(p);let s=sk(1);return H_(s.open())}),Zg()}},dependencies:[oi,ki],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Modal Password Recovery Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-modal-password-recovery-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,we,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{poDialog=p(iie);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:ie.All},{label:`Email`,value:ie.Email},{label:`SMS`,value:ie.SMS}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=ie.Email}submit(l){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty(`sms`)?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(a,n){if(a&1&&Cu(ki,5),a&2){let p;No(p=xo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let p=ZO();Jc(0,`po-modal-password-recovery`,1),vt(`p-code-submit`,function(s){return U_(p),n.submitCode(s),H_(n.changeEvent(`p-submit-code`))})(`p-submit`,function(s){return U_(p),n.submit(s),H_(n.changeEvent(`p-submit`))}),Zg(),Jc(1,`po-button`,2),vt(`p-click`,function(){return n.openPasswordRecoveryModal()}),Zg(),_u(2,`po-divider`),Jc(3,`div`,3),_u(4,`po-info`,4)(5,`po-info`,5),Zg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),W0(),Kb(`ngModelChange`,function(s){return U_(p),Ak(n.type,s)||(n.type=s),H_(s)}),Zg(),Jc(11,`po-input`,7),W0(),Kb(`ngModelChange`,function(s){return U_(p),Ak(n.invalidCodeMessage,s)||(n.invalidCodeMessage=s),H_(s)}),Zg(),Jc(12,`po-input`,8),W0(),Kb(`ngModelChange`,function(s){return U_(p),Ak(n.email,s)||(n.email=s),H_(s)}),Zg(),Jc(13,`po-input`,9),W0(),Kb(`ngModelChange`,function(s){return U_(p),Ak(n.phoneMask,s)||(n.phoneMask=s),H_(s)}),Zg(),Jc(14,`po-radio-group`,10),W0(),Kb(`ngModelChange`,function(s){return U_(p),Ak(n.componentsSize,s)||(n.componentsSize=s),H_(s)}),Zg()(),Jc(15,`div`,3)(16,`po-button`,11),vt(`p-click`,function(){return U_(p),sk(8).reset(),H_(n.restore())}),Zg()()()}a&2&&(Rb(`p-code-error`,n.codeError)(`p-components-size`,n.componentsSize)(`p-contact-email`,n.email)(`p-phone-mask`,n.phoneMask)(`p-type`,n.type),Ig(4),Rb(`p-value`,n.submitEvent),Ig(),Rb(`p-value`,n.event),Ig(5),Yb(`ngModel`,n.type),Rb(`p-options`,n.typeOptions),Y0(),Ig(),Yb(`ngModel`,n.invalidCodeMessage),Y0(),Ig(),Yb(`ngModel`,n.email),Y0(),Ig(),Yb(`ngModel`,n.phoneMask),Y0(),Ig(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,U4,Gte,Woe,Yoe,ki],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Modal Password Recovery Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-modal-password-recovery
  [p-code-error]="codeError"
  [p-components-size]="componentsSize"
  [p-contact-email]="email"
  [p-phone-mask]="phoneMask"
  [p-type]="type"
  (p-code-submit)="submitCode($event); changeEvent('p-submit-code')"
  (p-submit)="submit($event); changeEvent('p-submit')"
>
</po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="openPasswordRecoveryModal()"> </po-button>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="submitEvent"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

    <po-input
      class="po-md-6"
      name="invalidCodeMessage"
      [(ngModel)]="invalidCodeMessage"
      p-clean
      p-label="Code Error"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="email" [(ngModel)]="email" p-clean p-label="Email" p-maxlength="30" p-required>
    </po-input>

    <po-input class="po-md-6" name="phoneMask" [(ngModel)]="phoneMask" p-clean p-label="Phone Mask" p-required>
    </po-input>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';
import {
  PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent,
  PoModalPasswordRecoveryType
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-labs',
  templateUrl: './sample-po-modal-password-recovery-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  codeError: string;
  componentsSize: string;
  email: string;
  event: string;
  invalidCode: boolean = true;
  invalidCodeMessage: string;
  phoneMask: string;
  submitEvent: string;
  type: PoModalPasswordRecoveryType;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  typeOptions: Array<PoSelectOption> = [
    { label: 'All', value: PoModalPasswordRecoveryType.All },
    { label: 'Email', value: PoModalPasswordRecoveryType.Email },
    { label: 'SMS', value: PoModalPasswordRecoveryType.SMS }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }

  restore() {
    this.codeError = undefined;
    this.componentsSize = 'medium';
    this.email = undefined;
    this.event = undefined;
    this.phoneMask = undefined;
    this.submitEvent = undefined;
    this.type = PoModalPasswordRecoveryType.Email;
  }

  submit(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Change Password Requested By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.advanceModal(event)
    });
  }

  submitCode(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Emitted SMS Code By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.resendCode(event)
    });
  }

  private advanceModal(event: PoModalPasswordRecovery) {
    event.hasOwnProperty('sms') ? this.openSmsCode(event) : this.openConfirmation(event);
  }

  private openConfirmation(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openConfirmation();
  }

  private openSmsCode(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openSmsCode();
  }

  private resendCode(eventevent: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);

    if (this.invalidCode && this.invalidCodeMessage) {
      this.invalidCode = !this.invalidCode;
      this.codeError = this.invalidCodeMessage;

      this.poModalPasswordRecovery.openSmsCode();
    } else {
      this.codeError = undefined;
      this.invalidCode = !this.invalidCode;
      this.poModalPasswordRecovery.completed();
    }
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-modal-password-recovery-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{poModalPasswordRecovery;type=ie.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(a,n){if(a&1&&Cu(ki,5),a&2){let p;No(p=xo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(a,n){a&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Zg()(),Jc(5,`po-container`),_u(6,`img`,4),Jc(7,`div`,0)(8,`p`,5),Tk(9,`Oops!`),Zg(),Jc(10,`p`,6),Tk(11,` Password Recovery Requested by user `),Zg(),Jc(12,`po-button`,7),vt(`p-click`,function(){return n.openPasswordRecoveryModal()}),Zg()()(),_u(13,`po-modal-password-recovery`,8)),a&2&&(Ig(13),Rb(`p-type`,n.type)(`p-url-recovery`,n.urlRecovery))},dependencies:[oi,Ac,Yoe,ki],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Modal Password Recovery Request`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Data Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Data Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Data SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-container>
  <img class="po-page-blocked-user-image po-mb-5 po-mt-5" src="./assets/images/expired.svg" />

  <div class="po-row">
    <p class="po-font-title po-text-center po-md-12 po-mb-2">Oops!</p>
    <p class="po-font-text po-text-center po-md-12 po-mb-5 po-text-color-neutral-dark-40">
      Password Recovery Requested by user
    </p>
    <po-button
      class="po-mb-5 po-offset-md-3 po-md-6 po-offset-lg-4 po-lg-4 po-offset-xl-4 po-xl-4"
      p-label="Forgot your password?"
      p-kind="primary"
      (p-click)="openPasswordRecoveryModal()"
    >
    </po-button>
  </div>
</po-container>

<po-modal-password-recovery [p-type]="type" [p-url-recovery]="urlRecovery"> </po-modal-password-recovery>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryType } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-request',
  templateUrl: './sample-po-modal-password-recovery-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryRequestComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  type: PoModalPasswordRecoveryType = PoModalPasswordRecoveryType.All;
  urlRecovery: string = 'https://po-sample-api.onrender.com/v1/users';

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-modal-password-recovery-request`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Se],encapsulation:2,changeDetection:1})}return i})();var ye=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do template do po-modal-password-recovery.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoModalPasswordRecoveryComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-modal-password-recovery`),Zg(),Tk(17,` é utilizado como template para solicitação de troca de senha.`),Zg(),Jc(18,`p`),Tk(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),Zg(),Jc(20,`ul`)(21,`li`),Tk(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),Zg(),Jc(23,`li`),Tk(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),Zg(),Jc(25,`li`),Tk(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),Zg()(),Jc(27,`p`),Tk(28,`A propriedade `),Jc(29,`code`),Tk(30,`p-url-recovery`),Zg(),Tk(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Jc(32,`em`),Tk(33,`propriedades`),Zg(),Tk(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Zg(),Jc(35,`p`),Tk(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Jc(37,`code`),Tk(38,`p-code-error`),Zg(),Tk(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Jc(40,`code`),Tk(41,`p-code-submit`),Zg(),Tk(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),Zg(),Jc(43,`blockquote`)(44,`p`),Tk(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),Zg()(),Jc(46,`p`),Tk(47,`A modal de confirmação contém uma ação de reenvio e o evento `),Jc(48,`code`),Tk(49,`p-submit`),Zg(),Tk(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),Zg(),Jc(51,`blockquote`)(52,`p`),Tk(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),Zg()(),Jc(54,`blockquote`)(55,`p`),Tk(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),Jc(57,`em`),Tk(58,`browser`),Zg(),Tk(59,` (pt, en e es)`),Zg()(),Jc(60,`p`),Tk(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(62,`em`),Tk(63,`assets`),Zg(),Tk(64,` no arquivo `),Jc(65,`strong`),Tk(66,`angular.json`),Zg(),Tk(67,` da aplicação na seguinte ordem:`),Zg(),Jc(68,`pre`)(69,`code`),Tk(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Zg()()(),Jc(71,`div`,6)(72,`h4`,7),Tk(73,`Seletor`),Zg(),Jc(74,`pre`,8),Tk(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),Zg()(),Jc(76,`h4`,9),Tk(77,`Propriedades`),Zg(),Jc(78,`table`,10)(79,`tr`,11)(80,`th`,12),Tk(81,`Nome`),Zg(),Jc(82,`th`,12),Tk(83,`Tipo`),Zg(),Jc(84,`th`,12),Tk(85,`Padrão`),Zg(),Jc(86,`th`,12),Tk(87,`Descrição`),Zg()(),Jc(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),Tk(92,` p-code-error`),_u(93,`br`),Zg()()(),Jc(94,`td`,17)(95,`code`,18),Tk(96,`string`),Zg()(),Jc(97,`td`,19),Tk(98,`-`),Zg(),Jc(99,`td`,20)(100,`em`)(101,`strong`),Tk(102,`(opcional)`),Zg()(),Jc(103,`p`),Tk(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),Zg()()(),Jc(105,`tr`,13)(106,`td`,14)(107,`div`,21)(108,`span`,22),Tk(109,` (p-code-submit)`),_u(110,`br`),Zg()()(),Jc(111,`td`,17)(112,`code`,23),Tk(113,`EventEmitter`),Zg()(),Jc(114,`td`,19),Tk(115,`-`),Zg(),Jc(116,`td`,20)(117,`em`)(118,`strong`),Tk(119,`(opcional)`),Zg()(),Jc(120,`p`),Tk(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),Zg(),Jc(122,`blockquote`)(123,`p`),Tk(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(125,`code`),Tk(126,`p-url-recovery`),Zg(),Tk(127,`.`),Zg()()()(),Jc(128,`tr`,13)(129,`td`,14)(130,`div`,15)(131,`span`,16),Tk(132,` p-components-size`),_u(133,`br`),Zg()()(),Jc(134,`td`,17)(135,`code`,18),Tk(136,`string`),Zg()(),Jc(137,`td`,19)(138,`p`)(139,`code`),Tk(140,`medium`),Zg()()(),Jc(141,`td`,20)(142,`em`)(143,`strong`),Tk(144,`(opcional)`),Zg()(),Jc(145,`p`),Tk(146,`Define o tamanho dos componentes de formulário no modal:`),Zg(),Jc(147,`ul`)(148,`li`)(149,`code`),Tk(150,`small`),Zg(),Tk(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(152,`li`)(153,`code`),Tk(154,`medium`),Zg(),Tk(155,`: aplica a medida medium de cada componente.`),Zg()(),Jc(156,`blockquote`)(157,`p`),Tk(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(159,`code`),Tk(160,`medium`),Zg(),Tk(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(162,`a`,24),Tk(163,`po-theme`),Zg(),Tk(164,`.`),Zg()()()(),Jc(165,`tr`,13)(166,`td`,14)(167,`div`,15)(168,`span`,16),Tk(169,` p-contact-email`),_u(170,`br`),Zg()()(),Jc(171,`td`,17)(172,`code`,18),Tk(173,`string`),Zg()(),Jc(174,`td`,19),Tk(175,`-`),Zg(),Jc(176,`td`,20)(177,`em`)(178,`strong`),Tk(179,`(opcional)`),Zg()(),Jc(180,`p`),Tk(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Zg()()(),Jc(182,`tr`,13)(183,`td`,14)(184,`div`,15)(185,`span`,16),Tk(186,` p-phone-mask`),_u(187,`br`),Zg()()(),Jc(188,`td`,17)(189,`code`,18),Tk(190,`string`),Zg()(),Jc(191,`td`,19)(192,`p`)(193,`code`),Tk(194,`(99) 99999-9999`),Zg()()(),Jc(195,`td`,20)(196,`em`)(197,`strong`),Tk(198,`(opcional)`),Zg()(),Jc(199,`p`),Tk(200,`Definição da mascara do campo de telefone.`),Zg()()(),Jc(201,`tr`,13)(202,`td`,14)(203,`div`,21)(204,`span`,22),Tk(205,` (p-submit)`),_u(206,`br`),Zg()()(),Jc(207,`td`,17)(208,`code`,23),Tk(209,`EventEmitter`),Zg()(),Jc(210,`td`,19),Tk(211,`-`),Zg(),Jc(212,`td`,20)(213,`em`)(214,`strong`),Tk(215,`(opcional)`),Zg()(),Jc(216,`p`),Tk(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),Zg(),Jc(218,`blockquote`)(219,`p`),Tk(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(221,`code`),Tk(222,`p-url-recovery`),Zg(),Tk(223,`.`),Zg()()()(),Jc(224,`tr`,13)(225,`td`,14)(226,`div`,15)(227,`span`,16),Tk(228,` p-type`),_u(229,`br`),Zg()()(),Jc(230,`td`,17)(231,`code`,25),Tk(232,`PoModalPasswordRecoveryType`),Zg()(),Jc(233,`td`,19)(234,`p`)(235,`code`),Tk(236,`PoModalPasswordRecoveryType.Email`),Zg()()(),Jc(237,`td`,20)(238,`em`)(239,`strong`),Tk(240,`(opcional)`),Zg()(),Jc(241,`p`),Tk(242,`Define o tipo de recuperação de senha que será exibido.`),Zg()()(),Jc(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),Tk(247,` p-url-recovery`),_u(248,`br`),Zg()()(),Jc(249,`td`,17)(250,`code`,18),Tk(251,`string`),Zg()(),Jc(252,`td`,19),Tk(253,`-`),Zg(),Jc(254,`td`,20)(255,`em`)(256,`strong`),Tk(257,`(opcional)`),Zg()(),Jc(258,`p`),Tk(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Jc(260,`code`),Tk(261,`p-submit`),Zg(),Tk(262,` e `),Jc(263,`code`),Tk(264,`p-submit-code`),Zg(),Tk(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),Zg(),Jc(266,`h3`),Tk(267,`Processos`),Zg(),Jc(268,`p`),Tk(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),Jc(270,`strong`),Tk(271,`enviar`),Zg(),Tk(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Jc(273,`code`),Tk(274,`POST`),Zg(),Tk(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),Zg(),Jc(276,`pre`)(277,`code`),Tk(278,`body {
 email: email,
 retry?: retry
}
`),Zg()(),Jc(279,`h4`),Tk(280,`Recuperação por email`),Zg(),Jc(281,`p`),Tk(282,`Para a recuperação de senha por `),Jc(283,`strong`),Tk(284,`email`),Zg(),Tk(285,`, o código de resposta HTTP de status esperado é `),Jc(286,`code`),Tk(287,`204`),Zg(),Tk(288,`.`),Zg(),Jc(289,`p`),Tk(290,`Em caso de `),Jc(291,`strong`),Tk(292,`sucesso`),Zg(),Tk(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),Zg(),Jc(294,`blockquote`)(295,`p`),Tk(296,`A ação `),Jc(297,`strong`),Tk(298,`Reenviar`),Zg(),Tk(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Jc(300,`strong`),Tk(301,`retry`),Zg(),Tk(302,`.`),Zg()(),Jc(303,`p`)(304,`em`),Tk(305,`Processo finalizado.`),Zg()(),Jc(306,`h4`),Tk(307,`Recuperação por SMS`),Zg(),Jc(308,`p`),Tk(309,`Se a opção de recuperação for por `),Jc(310,`strong`),Tk(311,`SMS`),Zg(),Tk(312,`, o código de status de sucesso deve ser `),Jc(313,`code`),Tk(314,`200`),Zg(),Tk(315,`.
Em caso de `),Jc(316,`strong`),Tk(317,`sucesso`),Zg(),Tk(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),Zg(),Jc(319,`pre`)(320,`code`),Tk(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),Zg()(),Jc(322,`ul`)(323,`li`),Tk(324,`O `),Jc(325,`strong`),Tk(326,`hash`),Zg(),Tk(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),Zg(),Jc(328,`li`)(329,`strong`),Tk(330,`urlValidationCode`),Zg(),Tk(331,` é a url usada para validação do código enviado por SMS.`),Zg()(),Jc(332,`blockquote`)(333,`p`),Tk(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),Jc(335,`code`),Tk(336,`<p-url-recovery>/validation`),Zg(),Tk(337,`.`),Zg()(),Jc(338,`h4`),Tk(339,`Validação do código SMS`),Zg(),Jc(340,`p`),Tk(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),Jc(342,`strong`),Tk(343,`continuar`),Zg(),Tk(344,`, o componente fará uma requisição `),Jc(345,`code`),Tk(346,`POST`),Zg(),Tk(347,` contendo:`),Zg(),Jc(348,`pre`)(349,`code`),Tk(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),Zg()(),Jc(351,`p`),Tk(352,`O código de resposta HTTP de status esperado é `),Jc(353,`code`),Tk(354,`200`),Zg(),Tk(355,`.`),Zg(),Jc(356,`p`),Tk(357,`Em caso de `),Jc(358,`strong`),Tk(359,`erro`),Zg(),Tk(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),Zg(),Jc(361,`blockquote`)(362,`p`),Tk(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),Jc(364,`code`),Tk(365,`p-code-error`),Zg(),Tk(366,` conforme retorno abaixo:`),Zg()(),Jc(367,`pre`)(368,`code`),Tk(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),Zg()(),Jc(370,`p`),Tk(371,`Em caso de `),Jc(372,`strong`),Tk(373,`sucesso`),Zg(),Tk(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),Zg(),Jc(375,`pre`)(376,`code`),Tk(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),Zg()(),Jc(378,`ul`)(379,`li`)(380,`strong`),Tk(381,`token`),Zg(),Tk(382,`: Token de alteração de senha;`),Zg(),Jc(383,`li`)(384,`strong`),Tk(385,`urlChangePassword`),Zg(),Tk(386,`: url para o formulário de alteração de senha.`),Zg()(),Jc(387,`p`),Tk(388,`O componente está configurado para redirecionar para a url estabelecida em `),Jc(389,`code`),Tk(390,`urlChangePassword`),Zg(),Tk(391,`.`),Zg(),Jc(392,`blockquote`)(393,`p`),Tk(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Jc(395,`code`),Tk(396,`<p-url-recovery>/changePassword?token=<token>`),Zg(),Tk(397,`.`),Zg()(),Jc(398,`p`)(399,`em`),Tk(400,`Processo finalizado.`),Zg()()()()(),Jc(401,`h3`,9),Tk(402,`Métodos`),Zg(),Jc(403,`table`,26)(404,`tr`,13)(405,`th`,27)(406,`div`,15)(407,`h4`)(408,`span`,16),Tk(409,` completed `),Zg()()()()(),Jc(410,`tr`,20)(411,`td`,20)(412,`p`),Tk(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),Zg(),Jc(414,`blockquote`)(415,`p`),Tk(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),Zg()()()()(),_u(417,`br`),Jc(418,`table`,26)(419,`tr`,13)(420,`th`,27)(421,`div`,15)(422,`h4`)(423,`span`,16),Tk(424,` open `),Zg()()()()(),Jc(425,`tr`,20)(426,`td`,20)(427,`p`),Tk(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),Zg()()()(),_u(429,`br`),Jc(430,`table`,26)(431,`tr`,13)(432,`th`,27)(433,`div`,15)(434,`h4`)(435,`span`,16),Tk(436,` openConfirmation `),Zg()()()()(),Jc(437,`tr`,20)(438,`td`,20)(439,`p`),Tk(440,`Abre a modal de confirmação de envio de email.`),Zg()()()(),_u(441,`br`),Jc(442,`table`,26)(443,`tr`,13)(444,`th`,27)(445,`div`,15)(446,`h4`)(447,`span`,16),Tk(448,` openSmsCode `),Zg()()()()(),Jc(449,`tr`,20)(450,`td`,20)(451,`p`),Tk(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),Zg()()()(),_u(453,`br`),Jc(454,`h3`),Tk(455,`Interfaces`),Zg(),Jc(456,`h4`,28)(457,`code`,5),Tk(458,`PoModalPasswordRecovery`),Zg()(),Jc(459,`div`,2)(460,`p`),Tk(461,`Interface com a definição do objeto gerado pelo formulário do componente `),Jc(462,`code`),Tk(463,`po-modal-password-recovery`),Zg(),Tk(464,`.`),Zg()(),Jc(465,`h4`,9),Tk(466,`Propriedades`),Zg(),Jc(467,`table`,10)(468,`tr`,11)(469,`th`,12),Tk(470,`Nome`),Zg(),Jc(471,`th`,12),Tk(472,`Tipo`),Zg(),Jc(473,`th`,12),Tk(474,`Descrição`),Zg()(),Jc(475,`tr`,13)(476,`td`,14)(477,`div`,15)(478,`span`,16),Tk(479,` code`),_u(480,`br`),Zg()()(),Jc(481,`td`,17)(482,`code`,18),Tk(483,`string`),Zg()(),Jc(484,`td`,20)(485,`em`)(486,`strong`),Tk(487,`(opcional)`),Zg()(),Jc(488,`p`),Tk(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),Zg()()(),Jc(490,`tr`,13)(491,`td`,14)(492,`div`,15)(493,`span`,16),Tk(494,` email`),_u(495,`br`),Zg()()(),Jc(496,`td`,17)(497,`code`,18),Tk(498,`string`),Zg()(),Jc(499,`td`,20)(500,`em`)(501,`strong`),Tk(502,`(opcional)`),Zg()(),Jc(503,`p`),Tk(504,`Valor contendo o email enviado pelo usuário.`),Zg()()(),Jc(505,`tr`,13)(506,`td`,14)(507,`div`,15)(508,`span`,16),Tk(509,` hash`),_u(510,`br`),Zg()()(),Jc(511,`td`,17)(512,`code`,18),Tk(513,`string`),Zg()(),Jc(514,`td`,20)(515,`em`)(516,`strong`),Tk(517,`(opcional)`),Zg()(),Jc(518,`p`),Tk(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),Zg()()(),Jc(520,`tr`,13)(521,`td`,14)(522,`div`,15)(523,`span`,16),Tk(524,` retry`),_u(525,`br`),Zg()()(),Jc(526,`td`,17)(527,`code`,29),Tk(528,`number`),Zg()(),Jc(529,`td`,20)(530,`em`)(531,`strong`),Tk(532,`(opcional)`),Zg()(),Jc(533,`p`),Tk(534,`Número de tentativas de reenvio.`),Zg()()(),Jc(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),Tk(539,` sms`),_u(540,`br`),Zg()()(),Jc(541,`td`,17)(542,`code`,18),Tk(543,`string`),Zg()(),Jc(544,`td`,20)(545,`em`)(546,`strong`),Tk(547,`(opcional)`),Zg()(),Jc(548,`p`),Tk(549,`Valor contendo o número de telefone enviado pelo usuário.`),Zg()()(),Jc(550,`tr`,13)(551,`td`,14)(552,`div`,15)(553,`span`,16),Tk(554,` token`),_u(555,`br`),Zg()()(),Jc(556,`td`,17)(557,`code`,18),Tk(558,`string`),Zg()(),Jc(559,`td`,20)(560,`em`)(561,`strong`),Tk(562,`(opcional)`),Zg()(),Jc(563,`p`),Tk(564,`Token de alteração de senha`),Zg()()(),Jc(565,`tr`,13)(566,`td`,14)(567,`div`,15)(568,`span`,16),Tk(569,` urlChangePassword`),_u(570,`br`),Zg()()(),Jc(571,`td`,17)(572,`code`,18),Tk(573,`string`),Zg()(),Jc(574,`td`,20)(575,`em`)(576,`strong`),Tk(577,`(opcional)`),Zg()(),Jc(578,`p`),Tk(579,`URL para o formulário de alteração de senha`),Zg()()(),Jc(580,`tr`,13)(581,`td`,14)(582,`div`,15)(583,`span`,16),Tk(584,` urlValidationCode`),_u(585,`br`),Zg()()(),Jc(586,`td`,17)(587,`code`,18),Tk(588,`string`),Zg()(),Jc(589,`td`,20)(590,`em`)(591,`strong`),Tk(592,`(opcional)`),Zg()(),Jc(593,`p`),Tk(594,`URL usada para validação do código enviado por SMS`),Zg()()()(),Jc(595,`h3`),Tk(596,`Enums`),Zg(),Jc(597,`h4`,4)(598,`code`,5),Tk(599,`PoModalPasswordRecoveryType`),Zg()(),Jc(600,`div`,2)(601,`p`)(602,`em`),Tk(603,`Enum`),Zg(),Tk(604,` para especificação do tipo de recuperação de senha.`),Zg()(),Jc(605,`h4`,9),Tk(606,`Propriedades`),Zg(),Jc(607,`table`,10)(608,`tr`,11)(609,`th`,12),Tk(610,`Nome`),Zg(),Jc(611,`th`,12),Tk(612,`Descrição`),Zg()(),Jc(613,`tr`,13)(614,`td`,14)(615,`div`,15)(616,`span`,16),Tk(617,` All`),_u(618,`br`),Zg()()(),Jc(619,`td`,20)(620,`p`),Tk(621,`Possibilita ao usuário optar por envio via email ou SMS`),Zg()()(),Jc(622,`tr`,13)(623,`td`,14)(624,`div`,15)(625,`span`,16),Tk(626,` Email`),_u(627,`br`),Zg()()(),Jc(628,`td`,20)(629,`p`),Tk(630,`Definição para recuperação apenas por email`),Zg()()(),Jc(631,`tr`,13)(632,`td`,14)(633,`div`,15)(634,`span`,16),Tk(635,` SMS`),_u(636,`br`),Zg()()(),Jc(637,`td`,20)(638,`p`),Tk(639,`Definição para recuperação apenas por SMS`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function De(i,Oe){if(i&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-modal-password-recovery-basic-view`)(2,`sample-po-modal-password-recovery-labs-view`)(3,`sample-po-modal-password-recovery-request-view`),Zg()}if(i&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Modal Password Recovery`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,De,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-modal-password-recovery-doc`),Zg()()()),a&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ue,ve,ge,ye],encapsulation:2,changeDetection:1})}return i})()}];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[WV.forChild(qe),WV]})}return i})();var mt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,be]})}return i})();export{mt as DocPoModalPasswordRecoveryModule};