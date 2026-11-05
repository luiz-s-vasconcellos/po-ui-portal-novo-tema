import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Cn as rie,Et as Yoe,Ga as vo,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Xa as wg,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ea as h,fr as DO,ha as lO,ii as SK,io as yo,ir as Ax,ln as lre,oa as iu,oi as Sn,ri as SF,rr as Ag,s as Ac,sr as Bx,tt as Qte,wt as Xoe,x as Ff,ya as mt$1,za as ue$1}from"./chunk-CtaZqRb_.js";import{f as ie,n as P,p as ki,t as M}from"./main-ZQ7GH27Y.js";var me=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(a,n){if(a&1){let p=Ax();nu(0,`po-modal-password-recovery`,null,0),jc(2,`po-button`,1),mt$1(`p-click`,function(){v_(p);let s=Bx(1);return __(s.open())}),wg()}},dependencies:[ri,ki],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Modal Password Recovery Basic`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-modal-password-recovery-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,we,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,me],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{poDialog=h(rie);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:ie.All},{label:`Email`,value:ie.Email},{label:`SMS`,value:ie.SMS}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=ie.Email}submit(l){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty(`sms`)?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(a,n){if(a&1&&iu(ki,5),a&2){let p;yo(p=vo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let p=Ax();jc(0,`po-modal-password-recovery`,1),mt$1(`p-code-submit`,function(s){return v_(p),n.submitCode(s),__(n.changeEvent(`p-submit-code`))})(`p-submit`,function(s){return v_(p),n.submit(s),__(n.changeEvent(`p-submit`))}),wg(),jc(1,`po-button`,2),mt$1(`p-click`,function(){return n.openPasswordRecoveryModal()}),wg(),nu(2,`po-divider`),jc(3,`div`,3),nu(4,`po-info`,4)(5,`po-info`,5),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),r0(),ab(`ngModelChange`,function(s){return v_(p),uO(n.type,s)||(n.type=s),__(s)}),wg(),jc(11,`po-input`,7),r0(),ab(`ngModelChange`,function(s){return v_(p),uO(n.invalidCodeMessage,s)||(n.invalidCodeMessage=s),__(s)}),wg(),jc(12,`po-input`,8),r0(),ab(`ngModelChange`,function(s){return v_(p),uO(n.email,s)||(n.email=s),__(s)}),wg(),jc(13,`po-input`,9),r0(),ab(`ngModelChange`,function(s){return v_(p),uO(n.phoneMask,s)||(n.phoneMask=s),__(s)}),wg(),jc(14,`po-radio-group`,10),r0(),ab(`ngModelChange`,function(s){return v_(p),uO(n.componentsSize,s)||(n.componentsSize=s),__(s)}),wg()(),jc(15,`div`,3)(16,`po-button`,11),mt$1(`p-click`,function(){return v_(p),Bx(8).reset(),__(n.restore())}),wg()()()}a&2&&(UE(`p-code-error`,n.codeError)(`p-components-size`,n.componentsSize)(`p-contact-email`,n.email)(`p-phone-mask`,n.phoneMask)(`p-type`,n.type),rg(4),UE(`p-value`,n.submitEvent),rg(),UE(`p-value`,n.event),rg(5),sb(`ngModel`,n.type),UE(`p-options`,n.typeOptions),o0(),rg(),sb(`ngModel`,n.invalidCodeMessage),o0(),rg(),sb(`ngModel`,n.email),o0(),rg(),sb(`ngModel`,n.phoneMask),o0(),rg(),sb(`ngModel`,n.componentsSize),UE(`p-options`,n.componentsSizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,ri,Ff,G4,Qte,Yoe,Xoe,ki],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Modal Password Recovery Labs`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-modal-password-recovery
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-modal-password-recovery-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,xe,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Ee],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{poModalPasswordRecovery;type=ie.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(a,n){if(a&1&&iu(ki,5),a&2){let p;yo(p=vo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(a,n){a&1&&(jc(0,`po-container`)(1,`div`,0),nu(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),wg()(),jc(5,`po-container`),nu(6,`img`,4),jc(7,`div`,0)(8,`p`,5),lO(9,`Oops!`),wg(),jc(10,`p`,6),lO(11,` Password Recovery Requested by user `),wg(),jc(12,`po-button`,7),mt$1(`p-click`,function(){return n.openPasswordRecoveryModal()}),wg()()(),nu(13,`po-modal-password-recovery`,8)),a&2&&(rg(13),UE(`p-type`,n.type)(`p-url-recovery`,n.urlRecovery))},dependencies:[ri,Ac,Xoe,ki],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Modal Password Recovery Request`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-container>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-modal-password-recovery-request`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,_e,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Se],encapsulation:2,changeDetection:1})}return i})();var ye=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(a,n){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do template do po-modal-password-recovery.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoModalPasswordRecoveryComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-modal-password-recovery`),wg(),lO(17,` é utilizado como template para solicitação de troca de senha.`),wg(),jc(18,`p`),lO(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),wg(),jc(20,`ul`)(21,`li`),lO(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),wg(),jc(23,`li`),lO(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),wg(),jc(25,`li`),lO(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),wg()(),jc(27,`p`),lO(28,`A propriedade `),jc(29,`code`),lO(30,`p-url-recovery`),wg(),lO(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),jc(32,`em`),lO(33,`propriedades`),wg(),lO(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),wg(),jc(35,`p`),lO(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),jc(37,`code`),lO(38,`p-code-error`),wg(),lO(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),jc(40,`code`),lO(41,`p-code-submit`),wg(),lO(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),wg(),jc(43,`blockquote`)(44,`p`),lO(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),wg()(),jc(46,`p`),lO(47,`A modal de confirmação contém uma ação de reenvio e o evento `),jc(48,`code`),lO(49,`p-submit`),wg(),lO(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),wg(),jc(51,`blockquote`)(52,`p`),lO(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),wg()(),jc(54,`blockquote`)(55,`p`),lO(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),jc(57,`em`),lO(58,`browser`),wg(),lO(59,` (pt, en e es)`),wg()(),jc(60,`p`),lO(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),jc(62,`em`),lO(63,`assets`),wg(),lO(64,` no arquivo `),jc(65,`strong`),lO(66,`angular.json`),wg(),lO(67,` da aplicação na seguinte ordem:`),wg(),jc(68,`pre`)(69,`code`),lO(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),wg()()(),jc(71,`div`,6)(72,`h4`,7),lO(73,`Seletor`),wg(),jc(74,`pre`,8),lO(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),wg()(),jc(76,`h4`,9),lO(77,`Propriedades`),wg(),jc(78,`table`,10)(79,`tr`,11)(80,`th`,12),lO(81,`Nome`),wg(),jc(82,`th`,12),lO(83,`Tipo`),wg(),jc(84,`th`,12),lO(85,`Padrão`),wg(),jc(86,`th`,12),lO(87,`Descrição`),wg()(),jc(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),lO(92,` p-code-error`),nu(93,`br`),wg()()(),jc(94,`td`,17)(95,`code`,18),lO(96,`string`),wg()(),jc(97,`td`,19),lO(98,`-`),wg(),jc(99,`td`,20)(100,`em`)(101,`strong`),lO(102,`(opcional)`),wg()(),jc(103,`p`),lO(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),wg()()(),jc(105,`tr`,13)(106,`td`,14)(107,`div`,21)(108,`span`,22),lO(109,` (p-code-submit)`),nu(110,`br`),wg()()(),jc(111,`td`,17)(112,`code`,23),lO(113,`EventEmitter`),wg()(),jc(114,`td`,19),lO(115,`-`),wg(),jc(116,`td`,20)(117,`em`)(118,`strong`),lO(119,`(opcional)`),wg()(),jc(120,`p`),lO(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),wg(),jc(122,`blockquote`)(123,`p`),lO(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),jc(125,`code`),lO(126,`p-url-recovery`),wg(),lO(127,`.`),wg()()()(),jc(128,`tr`,13)(129,`td`,14)(130,`div`,15)(131,`span`,16),lO(132,` p-components-size`),nu(133,`br`),wg()()(),jc(134,`td`,17)(135,`code`,18),lO(136,`string`),wg()(),jc(137,`td`,19)(138,`p`)(139,`code`),lO(140,`medium`),wg()()(),jc(141,`td`,20)(142,`em`)(143,`strong`),lO(144,`(opcional)`),wg()(),jc(145,`p`),lO(146,`Define o tamanho dos componentes de formulário no modal:`),wg(),jc(147,`ul`)(148,`li`)(149,`code`),lO(150,`small`),wg(),lO(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(152,`li`)(153,`code`),lO(154,`medium`),wg(),lO(155,`: aplica a medida medium de cada componente.`),wg()(),jc(156,`blockquote`)(157,`p`),lO(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(159,`code`),lO(160,`medium`),wg(),lO(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(162,`a`,24),lO(163,`po-theme`),wg(),lO(164,`.`),wg()()()(),jc(165,`tr`,13)(166,`td`,14)(167,`div`,15)(168,`span`,16),lO(169,` p-contact-email`),nu(170,`br`),wg()()(),jc(171,`td`,17)(172,`code`,18),lO(173,`string`),wg()(),jc(174,`td`,19),lO(175,`-`),wg(),jc(176,`td`,20)(177,`em`)(178,`strong`),lO(179,`(opcional)`),wg()(),jc(180,`p`),lO(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),wg()()(),jc(182,`tr`,13)(183,`td`,14)(184,`div`,15)(185,`span`,16),lO(186,` p-phone-mask`),nu(187,`br`),wg()()(),jc(188,`td`,17)(189,`code`,18),lO(190,`string`),wg()(),jc(191,`td`,19)(192,`p`)(193,`code`),lO(194,`(99) 99999-9999`),wg()()(),jc(195,`td`,20)(196,`em`)(197,`strong`),lO(198,`(opcional)`),wg()(),jc(199,`p`),lO(200,`Definição da mascara do campo de telefone.`),wg()()(),jc(201,`tr`,13)(202,`td`,14)(203,`div`,21)(204,`span`,22),lO(205,` (p-submit)`),nu(206,`br`),wg()()(),jc(207,`td`,17)(208,`code`,23),lO(209,`EventEmitter`),wg()(),jc(210,`td`,19),lO(211,`-`),wg(),jc(212,`td`,20)(213,`em`)(214,`strong`),lO(215,`(opcional)`),wg()(),jc(216,`p`),lO(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),wg(),jc(218,`blockquote`)(219,`p`),lO(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),jc(221,`code`),lO(222,`p-url-recovery`),wg(),lO(223,`.`),wg()()()(),jc(224,`tr`,13)(225,`td`,14)(226,`div`,15)(227,`span`,16),lO(228,` p-type`),nu(229,`br`),wg()()(),jc(230,`td`,17)(231,`code`,25),lO(232,`PoModalPasswordRecoveryType`),wg()(),jc(233,`td`,19)(234,`p`)(235,`code`),lO(236,`PoModalPasswordRecoveryType.Email`),wg()()(),jc(237,`td`,20)(238,`em`)(239,`strong`),lO(240,`(opcional)`),wg()(),jc(241,`p`),lO(242,`Define o tipo de recuperação de senha que será exibido.`),wg()()(),jc(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),lO(247,` p-url-recovery`),nu(248,`br`),wg()()(),jc(249,`td`,17)(250,`code`,18),lO(251,`string`),wg()(),jc(252,`td`,19),lO(253,`-`),wg(),jc(254,`td`,20)(255,`em`)(256,`strong`),lO(257,`(opcional)`),wg()(),jc(258,`p`),lO(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),jc(260,`code`),lO(261,`p-submit`),wg(),lO(262,` e `),jc(263,`code`),lO(264,`p-submit-code`),wg(),lO(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),wg(),jc(266,`h3`),lO(267,`Processos`),wg(),jc(268,`p`),lO(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),jc(270,`strong`),lO(271,`enviar`),wg(),lO(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),jc(273,`code`),lO(274,`POST`),wg(),lO(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),wg(),jc(276,`pre`)(277,`code`),lO(278,`body {
 email: email,
 retry?: retry
}
`),wg()(),jc(279,`h4`),lO(280,`Recuperação por email`),wg(),jc(281,`p`),lO(282,`Para a recuperação de senha por `),jc(283,`strong`),lO(284,`email`),wg(),lO(285,`, o código de resposta HTTP de status esperado é `),jc(286,`code`),lO(287,`204`),wg(),lO(288,`.`),wg(),jc(289,`p`),lO(290,`Em caso de `),jc(291,`strong`),lO(292,`sucesso`),wg(),lO(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),wg(),jc(294,`blockquote`)(295,`p`),lO(296,`A ação `),jc(297,`strong`),lO(298,`Reenviar`),wg(),lO(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),jc(300,`strong`),lO(301,`retry`),wg(),lO(302,`.`),wg()(),jc(303,`p`)(304,`em`),lO(305,`Processo finalizado.`),wg()(),jc(306,`h4`),lO(307,`Recuperação por SMS`),wg(),jc(308,`p`),lO(309,`Se a opção de recuperação for por `),jc(310,`strong`),lO(311,`SMS`),wg(),lO(312,`, o código de status de sucesso deve ser `),jc(313,`code`),lO(314,`200`),wg(),lO(315,`.
Em caso de `),jc(316,`strong`),lO(317,`sucesso`),wg(),lO(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),wg(),jc(319,`pre`)(320,`code`),lO(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),wg()(),jc(322,`ul`)(323,`li`),lO(324,`O `),jc(325,`strong`),lO(326,`hash`),wg(),lO(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),wg(),jc(328,`li`)(329,`strong`),lO(330,`urlValidationCode`),wg(),lO(331,` é a url usada para validação do código enviado por SMS.`),wg()(),jc(332,`blockquote`)(333,`p`),lO(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),jc(335,`code`),lO(336,`<p-url-recovery>/validation`),wg(),lO(337,`.`),wg()(),jc(338,`h4`),lO(339,`Validação do código SMS`),wg(),jc(340,`p`),lO(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),jc(342,`strong`),lO(343,`continuar`),wg(),lO(344,`, o componente fará uma requisição `),jc(345,`code`),lO(346,`POST`),wg(),lO(347,` contendo:`),wg(),jc(348,`pre`)(349,`code`),lO(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),wg()(),jc(351,`p`),lO(352,`O código de resposta HTTP de status esperado é `),jc(353,`code`),lO(354,`200`),wg(),lO(355,`.`),wg(),jc(356,`p`),lO(357,`Em caso de `),jc(358,`strong`),lO(359,`erro`),wg(),lO(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),wg(),jc(361,`blockquote`)(362,`p`),lO(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),jc(364,`code`),lO(365,`p-code-error`),wg(),lO(366,` conforme retorno abaixo:`),wg()(),jc(367,`pre`)(368,`code`),lO(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),wg()(),jc(370,`p`),lO(371,`Em caso de `),jc(372,`strong`),lO(373,`sucesso`),wg(),lO(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),wg(),jc(375,`pre`)(376,`code`),lO(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),wg()(),jc(378,`ul`)(379,`li`)(380,`strong`),lO(381,`token`),wg(),lO(382,`: Token de alteração de senha;`),wg(),jc(383,`li`)(384,`strong`),lO(385,`urlChangePassword`),wg(),lO(386,`: url para o formulário de alteração de senha.`),wg()(),jc(387,`p`),lO(388,`O componente está configurado para redirecionar para a url estabelecida em `),jc(389,`code`),lO(390,`urlChangePassword`),wg(),lO(391,`.`),wg(),jc(392,`blockquote`)(393,`p`),lO(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),jc(395,`code`),lO(396,`<p-url-recovery>/changePassword?token=<token>`),wg(),lO(397,`.`),wg()(),jc(398,`p`)(399,`em`),lO(400,`Processo finalizado.`),wg()()()()(),jc(401,`h3`,9),lO(402,`Métodos`),wg(),jc(403,`table`,26)(404,`tr`,13)(405,`th`,27)(406,`div`,15)(407,`h4`)(408,`span`,16),lO(409,` completed `),wg()()()()(),jc(410,`tr`,20)(411,`td`,20)(412,`p`),lO(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),wg(),jc(414,`blockquote`)(415,`p`),lO(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),wg()()()()(),nu(417,`br`),jc(418,`table`,26)(419,`tr`,13)(420,`th`,27)(421,`div`,15)(422,`h4`)(423,`span`,16),lO(424,` open `),wg()()()()(),jc(425,`tr`,20)(426,`td`,20)(427,`p`),lO(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),wg()()()(),nu(429,`br`),jc(430,`table`,26)(431,`tr`,13)(432,`th`,27)(433,`div`,15)(434,`h4`)(435,`span`,16),lO(436,` openConfirmation `),wg()()()()(),jc(437,`tr`,20)(438,`td`,20)(439,`p`),lO(440,`Abre a modal de confirmação de envio de email.`),wg()()()(),nu(441,`br`),jc(442,`table`,26)(443,`tr`,13)(444,`th`,27)(445,`div`,15)(446,`h4`)(447,`span`,16),lO(448,` openSmsCode `),wg()()()()(),jc(449,`tr`,20)(450,`td`,20)(451,`p`),lO(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),wg()()()(),nu(453,`br`),jc(454,`h3`),lO(455,`Interfaces`),wg(),jc(456,`h4`,28)(457,`code`,5),lO(458,`PoModalPasswordRecovery`),wg()(),jc(459,`div`,2)(460,`p`),lO(461,`Interface com a definição do objeto gerado pelo formulário do componente `),jc(462,`code`),lO(463,`po-modal-password-recovery`),wg(),lO(464,`.`),wg()(),jc(465,`h4`,9),lO(466,`Propriedades`),wg(),jc(467,`table`,10)(468,`tr`,11)(469,`th`,12),lO(470,`Nome`),wg(),jc(471,`th`,12),lO(472,`Tipo`),wg(),jc(473,`th`,12),lO(474,`Descrição`),wg()(),jc(475,`tr`,13)(476,`td`,14)(477,`div`,15)(478,`span`,16),lO(479,` code`),nu(480,`br`),wg()()(),jc(481,`td`,17)(482,`code`,18),lO(483,`string`),wg()(),jc(484,`td`,20)(485,`em`)(486,`strong`),lO(487,`(opcional)`),wg()(),jc(488,`p`),lO(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),wg()()(),jc(490,`tr`,13)(491,`td`,14)(492,`div`,15)(493,`span`,16),lO(494,` email`),nu(495,`br`),wg()()(),jc(496,`td`,17)(497,`code`,18),lO(498,`string`),wg()(),jc(499,`td`,20)(500,`em`)(501,`strong`),lO(502,`(opcional)`),wg()(),jc(503,`p`),lO(504,`Valor contendo o email enviado pelo usuário.`),wg()()(),jc(505,`tr`,13)(506,`td`,14)(507,`div`,15)(508,`span`,16),lO(509,` hash`),nu(510,`br`),wg()()(),jc(511,`td`,17)(512,`code`,18),lO(513,`string`),wg()(),jc(514,`td`,20)(515,`em`)(516,`strong`),lO(517,`(opcional)`),wg()(),jc(518,`p`),lO(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),wg()()(),jc(520,`tr`,13)(521,`td`,14)(522,`div`,15)(523,`span`,16),lO(524,` retry`),nu(525,`br`),wg()()(),jc(526,`td`,17)(527,`code`,29),lO(528,`number`),wg()(),jc(529,`td`,20)(530,`em`)(531,`strong`),lO(532,`(opcional)`),wg()(),jc(533,`p`),lO(534,`Número de tentativas de reenvio.`),wg()()(),jc(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),lO(539,` sms`),nu(540,`br`),wg()()(),jc(541,`td`,17)(542,`code`,18),lO(543,`string`),wg()(),jc(544,`td`,20)(545,`em`)(546,`strong`),lO(547,`(opcional)`),wg()(),jc(548,`p`),lO(549,`Valor contendo o número de telefone enviado pelo usuário.`),wg()()(),jc(550,`tr`,13)(551,`td`,14)(552,`div`,15)(553,`span`,16),lO(554,` token`),nu(555,`br`),wg()()(),jc(556,`td`,17)(557,`code`,18),lO(558,`string`),wg()(),jc(559,`td`,20)(560,`em`)(561,`strong`),lO(562,`(opcional)`),wg()(),jc(563,`p`),lO(564,`Token de alteração de senha`),wg()()(),jc(565,`tr`,13)(566,`td`,14)(567,`div`,15)(568,`span`,16),lO(569,` urlChangePassword`),nu(570,`br`),wg()()(),jc(571,`td`,17)(572,`code`,18),lO(573,`string`),wg()(),jc(574,`td`,20)(575,`em`)(576,`strong`),lO(577,`(opcional)`),wg()(),jc(578,`p`),lO(579,`URL para o formulário de alteração de senha`),wg()()(),jc(580,`tr`,13)(581,`td`,14)(582,`div`,15)(583,`span`,16),lO(584,` urlValidationCode`),nu(585,`br`),wg()()(),jc(586,`td`,17)(587,`code`,18),lO(588,`string`),wg()(),jc(589,`td`,20)(590,`em`)(591,`strong`),lO(592,`(opcional)`),wg()(),jc(593,`p`),lO(594,`URL usada para validação do código enviado por SMS`),wg()()()(),jc(595,`h3`),lO(596,`Enums`),wg(),jc(597,`h4`,4)(598,`code`,5),lO(599,`PoModalPasswordRecoveryType`),wg()(),jc(600,`div`,2)(601,`p`)(602,`em`),lO(603,`Enum`),wg(),lO(604,` para especificação do tipo de recuperação de senha.`),wg()(),jc(605,`h4`,9),lO(606,`Propriedades`),wg(),jc(607,`table`,10)(608,`tr`,11)(609,`th`,12),lO(610,`Nome`),wg(),jc(611,`th`,12),lO(612,`Descrição`),wg()(),jc(613,`tr`,13)(614,`td`,14)(615,`div`,15)(616,`span`,16),lO(617,` All`),nu(618,`br`),wg()()(),jc(619,`td`,20)(620,`p`),lO(621,`Possibilita ao usuário optar por envio via email ou SMS`),wg()()(),jc(622,`tr`,13)(623,`td`,14)(624,`div`,15)(625,`span`,16),lO(626,` Email`),nu(627,`br`),wg()()(),jc(628,`td`,20)(629,`p`),lO(630,`Definição para recuperação apenas por email`),wg()()(),jc(631,`tr`,13)(632,`td`,14)(633,`div`,15)(634,`span`,16),lO(635,` SMS`),nu(636,`br`),wg()()(),jc(637,`td`,20)(638,`p`),lO(639,`Definição para recuperação apenas por SMS`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function De(i,Oe){if(i&1){let l=Ax();jc(0,`po-tab`,4),mt$1(`p-click`,function(){v_(l);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-modal-password-recovery-basic-view`)(2,`sample-po-modal-password-recovery-labs-view`)(3,`sample-po-modal-password-recovery-request-view`),wg()}if(i&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Modal Password Recovery`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,De,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt$1(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-modal-password-recovery-doc`),wg()()()),a&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Vze,lre,ure,ue,ve,ge,ye],encapsulation:2,changeDetection:1})}return i})()}];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[I1.forChild(qe),I1]})}return i})();var mt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[M,be]})}return i})();export{mt as DocPoModalPasswordRecoveryModule};