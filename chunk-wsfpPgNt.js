import{T as ki,m as P,p as M,w as ie}from"./main-DMA7KEAR.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var me=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(a,n){if(a&1){let p=YO();vu(0,`po-modal-password-recovery`,null,0),Qc(2,`po-button`,1),vt(`p-click`,function(){B_(p);let d=ik(1);return U_(d.open())}),Kg()}},dependencies:[oi,ki],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-modal-password-recovery-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Password Recovery Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-modal-password-recovery-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,fe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{poDialog=p(sie);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:ie.All},{label:`Email`,value:ie.Email},{label:`SMS`,value:ie.SMS}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=ie.Email}submit(s){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(s)}`,ok:()=>this.advanceModal(s)})}submitCode(s){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(s)}`,ok:()=>this.resendCode(s)})}advanceModal(s){s.hasOwnProperty(`sms`)?this.openSmsCode(s):this.openConfirmation(s)}openConfirmation(s){this.submitEvent=JSON.stringify(s),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(s){this.submitEvent=JSON.stringify(s),this.poModalPasswordRecovery.openSmsCode()}resendCode(s){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(a,n){if(a&1&&Du(ki,5),a&2){let p;No(p=xo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,n){if(a&1){let p=YO();Qc(0,`po-modal-password-recovery`,1),vt(`p-code-submit`,function(d){return B_(p),n.submitCode(d),U_(n.changeEvent(`p-submit-code`))})(`p-submit`,function(d){return B_(p),n.submit(d),U_(n.changeEvent(`p-submit`))}),Kg(),Qc(1,`po-button`,2),vt(`p-click`,function(){return n.openPasswordRecoveryModal()}),Kg(),vu(2,`po-divider`),Qc(3,`div`,3),vu(4,`po-info`,4)(5,`po-info`,5),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(n.type,d)||(n.type=d),U_(d)}),Kg(),Qc(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),U_(d)}),Kg(),Qc(12,`po-input`,8),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(n.email,d)||(n.email=d),U_(d)}),Kg(),Qc(13,`po-input`,9),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(n.phoneMask,d)||(n.phoneMask=d),U_(d)}),Kg(),Qc(14,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(d){return B_(p),Tk(n.componentsSize,d)||(n.componentsSize=d),U_(d)}),Kg()(),Qc(15,`div`,3)(16,`po-button`,11),vt(`p-click`,function(){return B_(p),ik(8).reset(),U_(n.restore())}),Kg()()()}a&2&&(Rb(`p-code-error`,n.codeError)(`p-components-size`,n.componentsSize)(`p-contact-email`,n.email)(`p-phone-mask`,n.phoneMask)(`p-type`,n.type),wg(4),Rb(`p-value`,n.submitEvent),wg(),Rb(`p-value`,n.event),wg(5),Yb(`ngModel`,n.type),Rb(`p-options`,n.typeOptions),W0(),wg(),Yb(`ngModel`,n.invalidCodeMessage),W0(),wg(),Yb(`ngModel`,n.email),W0(),wg(),Yb(`ngModel`,n.phoneMask),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Zte,Koe,Joe,ki],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-modal-password-recovery-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Password Recovery Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-modal-password-recovery
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-modal-password-recovery-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,xe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ve],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{poModalPasswordRecovery;type=ie.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(a,n){if(a&1&&Du(ki,5),a&2){let p;No(p=xo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(a,n){a&1&&(Qc(0,`po-container`)(1,`div`,0),vu(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Kg()(),Qc(5,`po-container`),vu(6,`img`,4),Qc(7,`div`,0)(8,`p`,5),Sk(9,`Oops!`),Kg(),Qc(10,`p`,6),Sk(11,` Password Recovery Requested by user `),Kg(),Qc(12,`po-button`,7),vt(`p-click`,function(){return n.openPasswordRecoveryModal()}),Kg()()(),vu(13,`po-modal-password-recovery`,8)),a&2&&(wg(13),Rb(`p-type`,n.type)(`p-url-recovery`,n.urlRecovery))},dependencies:[oi,Fc,Joe,ki],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var ye=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-modal-password-recovery-request`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Password Recovery Request`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container>
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-modal-password-recovery-request`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{router=p(An);openDoc(s){this.router.navigate([`/documentation`,s],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-modal-password-recovery-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-code-error`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-code-submit`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-contact-email`,1,`docs-api-properties-row`],[`id`,`prop-p-phone-mask`,1,`docs-api-properties-row`],[`id`,`event-p-submit`,1,`docs-api-properties-row`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`id`,`prop-p-url-recovery`,1,`docs-api-properties-row`],[`id`,`method-completed`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`method-openConfirmation`,1,`docs-api-method-table`],[`id`,`method-openSmsCode`,1,`docs-api-method-table`],[`id`,`interface-po-modal-password-recovery`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-modal-password-recovery-code`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-email`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-hash`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-retry`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-modal-password-recovery-sms`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-token`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-url-change-password`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-url-validation-code`,1,`docs-api-properties-row`],[`id`,`enum-po-modal-password-recovery-type`,1,`docs-api-class-name`],[`id`,`enum-po-modal-password-recovery-type-all`,1,`docs-api-properties-row`],[`id`,`enum-po-modal-password-recovery-type-email`,1,`docs-api-properties-row`],[`id`,`enum-po-modal-password-recovery-type-sms`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do template do po-modal-password-recovery.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoModalPasswordRecoveryComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-modal-password-recovery`),Kg(),Sk(17,` é utilizado como template para solicitação de troca de senha.`),Kg(),Qc(18,`p`),Sk(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),Kg(),Qc(20,`ul`)(21,`li`),Sk(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),Kg(),Qc(23,`li`),Sk(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),Kg(),Qc(25,`li`),Sk(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),Kg()(),Qc(27,`p`),Sk(28,`A propriedade `),Qc(29,`code`),Sk(30,`p-url-recovery`),Kg(),Sk(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Qc(32,`em`),Sk(33,`propriedades`),Kg(),Sk(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Kg(),Qc(35,`p`),Sk(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Qc(37,`code`),Sk(38,`p-code-error`),Kg(),Sk(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Qc(40,`code`),Sk(41,`p-code-submit`),Kg(),Sk(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),Kg(),Qc(43,`blockquote`)(44,`p`),Sk(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),Kg()(),Qc(46,`p`),Sk(47,`A modal de confirmação contém uma ação de reenvio e o evento `),Qc(48,`code`),Sk(49,`p-submit`),Kg(),Sk(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),Kg(),Qc(51,`blockquote`)(52,`p`),Sk(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),Kg()(),Qc(54,`blockquote`)(55,`p`),Sk(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),Qc(57,`em`),Sk(58,`browser`),Kg(),Sk(59,` (pt, en e es)`),Kg()(),Qc(60,`p`),Sk(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Qc(62,`em`),Sk(63,`assets`),Kg(),Sk(64,` no arquivo `),Qc(65,`strong`),Sk(66,`angular.json`),Kg(),Sk(67,` da aplicação na seguinte ordem:`),Kg(),Qc(68,`pre`)(69,`code`),Sk(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()()(),Qc(71,`div`,6)(72,`h4`,7),Sk(73,`Seletor`),Kg(),Qc(74,`pre`,8),Sk(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),Kg()(),Qc(76,`h4`,9),Sk(77,`Propriedades`),Kg(),Qc(78,`table`,10)(79,`tr`,11)(80,`th`,12),Sk(81,`Nome`),Kg(),Qc(82,`th`,12),Sk(83,`Tipo`),Kg(),Qc(84,`th`,12),Sk(85,`Padrão`),Kg(),Qc(86,`th`,12),Sk(87,`Descrição`),Kg()(),Qc(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),Sk(92,` p-code-error`),vu(93,`br`),Kg()()(),Qc(94,`td`,17)(95,`code`,18),Sk(96,`string`),Kg()(),Qc(97,`td`,19),Sk(98,`-`),Kg(),Qc(99,`td`,20)(100,`em`)(101,`strong`),Sk(102,`(opcional)`),Kg()(),Qc(103,`p`),Sk(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),Kg()()(),Qc(105,`tr`,21)(106,`td`,14)(107,`div`,22)(108,`span`,23),Sk(109,` (p-code-submit)`),vu(110,`br`),Kg()()(),Qc(111,`td`,17)(112,`code`,24),Sk(113,`EventEmitter`),Kg()(),Qc(114,`td`,19),Sk(115,`-`),Kg(),Qc(116,`td`,20)(117,`em`)(118,`strong`),Sk(119,`(opcional)`),Kg()(),Qc(120,`p`),Sk(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),Kg(),Qc(122,`blockquote`)(123,`p`),Sk(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),Qc(125,`code`),Sk(126,`p-url-recovery`),Kg(),Sk(127,`.`),Kg()()()(),Qc(128,`tr`,25)(129,`td`,14)(130,`div`,15)(131,`span`,16),Sk(132,` p-components-size`),vu(133,`br`),Kg()()(),Qc(134,`td`,17)(135,`code`,18),Sk(136,`string`),Kg()(),Qc(137,`td`,19)(138,`p`)(139,`code`),Sk(140,`medium`),Kg()()(),Qc(141,`td`,20)(142,`em`)(143,`strong`),Sk(144,`(opcional)`),Kg()(),Qc(145,`p`),Sk(146,`Define o tamanho dos componentes de formulário no modal:`),Kg(),Qc(147,`ul`)(148,`li`)(149,`code`),Sk(150,`small`),Kg(),Sk(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(152,`li`)(153,`code`),Sk(154,`medium`),Kg(),Sk(155,`: aplica a medida medium de cada componente.`),Kg()(),Qc(156,`blockquote`)(157,`p`),Sk(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(159,`code`),Sk(160,`medium`),Kg(),Sk(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(162,`a`,26),Sk(163,`po-theme`),Kg(),Sk(164,`.`),Kg()()()(),Qc(165,`tr`,27)(166,`td`,14)(167,`div`,15)(168,`span`,16),Sk(169,` p-contact-email`),vu(170,`br`),Kg()()(),Qc(171,`td`,17)(172,`code`,18),Sk(173,`string`),Kg()(),Qc(174,`td`,19),Sk(175,`-`),Kg(),Qc(176,`td`,20)(177,`em`)(178,`strong`),Sk(179,`(opcional)`),Kg()(),Qc(180,`p`),Sk(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Kg()()(),Qc(182,`tr`,28)(183,`td`,14)(184,`div`,15)(185,`span`,16),Sk(186,` p-phone-mask`),vu(187,`br`),Kg()()(),Qc(188,`td`,17)(189,`code`,18),Sk(190,`string`),Kg()(),Qc(191,`td`,19)(192,`p`)(193,`code`),Sk(194,`(99) 99999-9999`),Kg()()(),Qc(195,`td`,20)(196,`em`)(197,`strong`),Sk(198,`(opcional)`),Kg()(),Qc(199,`p`),Sk(200,`Definição da mascara do campo de telefone.`),Kg()()(),Qc(201,`tr`,29)(202,`td`,14)(203,`div`,22)(204,`span`,23),Sk(205,` (p-submit)`),vu(206,`br`),Kg()()(),Qc(207,`td`,17)(208,`code`,24),Sk(209,`EventEmitter`),Kg()(),Qc(210,`td`,19),Sk(211,`-`),Kg(),Qc(212,`td`,20)(213,`em`)(214,`strong`),Sk(215,`(opcional)`),Kg()(),Qc(216,`p`),Sk(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),Kg(),Qc(218,`blockquote`)(219,`p`),Sk(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),Qc(221,`code`),Sk(222,`p-url-recovery`),Kg(),Sk(223,`.`),Kg()()()(),Qc(224,`tr`,30)(225,`td`,14)(226,`div`,15)(227,`span`,16),Sk(228,` p-type`),vu(229,`br`),Kg()()(),Qc(230,`td`,17)(231,`code`,31),Sk(232,`PoModalPasswordRecoveryType`),Kg()(),Qc(233,`td`,19)(234,`p`)(235,`code`),Sk(236,`PoModalPasswordRecoveryType.Email`),Kg()()(),Qc(237,`td`,20)(238,`em`)(239,`strong`),Sk(240,`(opcional)`),Kg()(),Qc(241,`p`),Sk(242,`Define o tipo de recuperação de senha que será exibido.`),Kg()()(),Qc(243,`tr`,32)(244,`td`,14)(245,`div`,15)(246,`span`,16),Sk(247,` p-url-recovery`),vu(248,`br`),Kg()()(),Qc(249,`td`,17)(250,`code`,18),Sk(251,`string`),Kg()(),Qc(252,`td`,19),Sk(253,`-`),Kg(),Qc(254,`td`,20)(255,`em`)(256,`strong`),Sk(257,`(opcional)`),Kg()(),Qc(258,`p`),Sk(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Qc(260,`code`),Sk(261,`p-submit`),Kg(),Sk(262,` e `),Qc(263,`code`),Sk(264,`p-submit-code`),Kg(),Sk(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),Kg(),Qc(266,`h3`),Sk(267,`Processos`),Kg(),Qc(268,`p`),Sk(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),Qc(270,`strong`),Sk(271,`enviar`),Kg(),Sk(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Qc(273,`code`),Sk(274,`POST`),Kg(),Sk(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),Kg(),Qc(276,`pre`)(277,`code`),Sk(278,`body {
 email: email,
 retry?: retry
}
`),Kg()(),Qc(279,`h4`),Sk(280,`Recuperação por email`),Kg(),Qc(281,`p`),Sk(282,`Para a recuperação de senha por `),Qc(283,`strong`),Sk(284,`email`),Kg(),Sk(285,`, o código de resposta HTTP de status esperado é `),Qc(286,`code`),Sk(287,`204`),Kg(),Sk(288,`.`),Kg(),Qc(289,`p`),Sk(290,`Em caso de `),Qc(291,`strong`),Sk(292,`sucesso`),Kg(),Sk(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),Kg(),Qc(294,`blockquote`)(295,`p`),Sk(296,`A ação `),Qc(297,`strong`),Sk(298,`Reenviar`),Kg(),Sk(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Qc(300,`strong`),Sk(301,`retry`),Kg(),Sk(302,`.`),Kg()(),Qc(303,`p`)(304,`em`),Sk(305,`Processo finalizado.`),Kg()(),Qc(306,`h4`),Sk(307,`Recuperação por SMS`),Kg(),Qc(308,`p`),Sk(309,`Se a opção de recuperação for por `),Qc(310,`strong`),Sk(311,`SMS`),Kg(),Sk(312,`, o código de status de sucesso deve ser `),Qc(313,`code`),Sk(314,`200`),Kg(),Sk(315,`.
Em caso de `),Qc(316,`strong`),Sk(317,`sucesso`),Kg(),Sk(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),Kg(),Qc(319,`pre`)(320,`code`),Sk(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),Kg()(),Qc(322,`ul`)(323,`li`),Sk(324,`O `),Qc(325,`strong`),Sk(326,`hash`),Kg(),Sk(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),Kg(),Qc(328,`li`)(329,`strong`),Sk(330,`urlValidationCode`),Kg(),Sk(331,` é a url usada para validação do código enviado por SMS.`),Kg()(),Qc(332,`blockquote`)(333,`p`),Sk(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),Qc(335,`code`),Sk(336,`<p-url-recovery>/validation`),Kg(),Sk(337,`.`),Kg()(),Qc(338,`h4`),Sk(339,`Validação do código SMS`),Kg(),Qc(340,`p`),Sk(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),Qc(342,`strong`),Sk(343,`continuar`),Kg(),Sk(344,`, o componente fará uma requisição `),Qc(345,`code`),Sk(346,`POST`),Kg(),Sk(347,` contendo:`),Kg(),Qc(348,`pre`)(349,`code`),Sk(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),Kg()(),Qc(351,`p`),Sk(352,`O código de resposta HTTP de status esperado é `),Qc(353,`code`),Sk(354,`200`),Kg(),Sk(355,`.`),Kg(),Qc(356,`p`),Sk(357,`Em caso de `),Qc(358,`strong`),Sk(359,`erro`),Kg(),Sk(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),Kg(),Qc(361,`blockquote`)(362,`p`),Sk(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),Qc(364,`code`),Sk(365,`p-code-error`),Kg(),Sk(366,` conforme retorno abaixo:`),Kg()(),Qc(367,`pre`)(368,`code`),Sk(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),Kg()(),Qc(370,`p`),Sk(371,`Em caso de `),Qc(372,`strong`),Sk(373,`sucesso`),Kg(),Sk(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),Kg(),Qc(375,`pre`)(376,`code`),Sk(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),Kg()(),Qc(378,`ul`)(379,`li`)(380,`strong`),Sk(381,`token`),Kg(),Sk(382,`: Token de alteração de senha;`),Kg(),Qc(383,`li`)(384,`strong`),Sk(385,`urlChangePassword`),Kg(),Sk(386,`: url para o formulário de alteração de senha.`),Kg()(),Qc(387,`p`),Sk(388,`O componente está configurado para redirecionar para a url estabelecida em `),Qc(389,`code`),Sk(390,`urlChangePassword`),Kg(),Sk(391,`.`),Kg(),Qc(392,`blockquote`)(393,`p`),Sk(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Qc(395,`code`),Sk(396,`<p-url-recovery>/changePassword?token=<token>`),Kg(),Sk(397,`.`),Kg()(),Qc(398,`p`)(399,`em`),Sk(400,`Processo finalizado.`),Kg()()()()(),Qc(401,`h3`,9),Sk(402,`Métodos`),Kg(),Qc(403,`table`,33)(404,`tr`,34)(405,`th`,35)(406,`div`,15)(407,`h4`)(408,`span`,16),Sk(409,` completed `),Kg()()()()(),Qc(410,`tr`,20)(411,`td`,20)(412,`p`),Sk(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),Kg(),Qc(414,`blockquote`)(415,`p`),Sk(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),Kg()()()()(),vu(417,`br`),Qc(418,`table`,36)(419,`tr`,34)(420,`th`,35)(421,`div`,15)(422,`h4`)(423,`span`,16),Sk(424,` open `),Kg()()()()(),Qc(425,`tr`,20)(426,`td`,20)(427,`p`),Sk(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),Kg()()()(),vu(429,`br`),Qc(430,`table`,37)(431,`tr`,34)(432,`th`,35)(433,`div`,15)(434,`h4`)(435,`span`,16),Sk(436,` openConfirmation `),Kg()()()()(),Qc(437,`tr`,20)(438,`td`,20)(439,`p`),Sk(440,`Abre a modal de confirmação de envio de email.`),Kg()()()(),vu(441,`br`),Qc(442,`table`,38)(443,`tr`,34)(444,`th`,35)(445,`div`,15)(446,`h4`)(447,`span`,16),Sk(448,` openSmsCode `),Kg()()()()(),Qc(449,`tr`,20)(450,`td`,20)(451,`p`),Sk(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),Kg()()()(),vu(453,`br`),Qc(454,`h3`),Sk(455,`Interfaces`),Kg(),Qc(456,`h4`,39)(457,`code`,5),Sk(458,`PoModalPasswordRecovery`),Kg()(),Qc(459,`div`,2)(460,`p`),Sk(461,`Interface com a definição do objeto gerado pelo formulário do componente `),Qc(462,`code`),Sk(463,`po-modal-password-recovery`),Kg(),Sk(464,`.`),Kg()(),Qc(465,`h4`,9),Sk(466,`Propriedades`),Kg(),Qc(467,`table`,10)(468,`tr`,11)(469,`th`,12),Sk(470,`Nome`),Kg(),Qc(471,`th`,12),Sk(472,`Tipo`),Kg(),Qc(473,`th`,12),Sk(474,`Descrição`),Kg()(),Qc(475,`tr`,40)(476,`td`,14)(477,`div`,15)(478,`span`,16),Sk(479,` code`),vu(480,`br`),Kg()()(),Qc(481,`td`,17)(482,`code`,18),Sk(483,`string`),Kg()(),Qc(484,`td`,20)(485,`em`)(486,`strong`),Sk(487,`(opcional)`),Kg()(),Qc(488,`p`),Sk(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),Kg()()(),Qc(490,`tr`,41)(491,`td`,14)(492,`div`,15)(493,`span`,16),Sk(494,` email`),vu(495,`br`),Kg()()(),Qc(496,`td`,17)(497,`code`,18),Sk(498,`string`),Kg()(),Qc(499,`td`,20)(500,`em`)(501,`strong`),Sk(502,`(opcional)`),Kg()(),Qc(503,`p`),Sk(504,`Valor contendo o email enviado pelo usuário.`),Kg()()(),Qc(505,`tr`,42)(506,`td`,14)(507,`div`,15)(508,`span`,16),Sk(509,` hash`),vu(510,`br`),Kg()()(),Qc(511,`td`,17)(512,`code`,18),Sk(513,`string`),Kg()(),Qc(514,`td`,20)(515,`em`)(516,`strong`),Sk(517,`(opcional)`),Kg()(),Qc(518,`p`),Sk(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),Kg()()(),Qc(520,`tr`,43)(521,`td`,14)(522,`div`,15)(523,`span`,16),Sk(524,` retry`),vu(525,`br`),Kg()()(),Qc(526,`td`,17)(527,`code`,44),Sk(528,`number`),Kg()(),Qc(529,`td`,20)(530,`em`)(531,`strong`),Sk(532,`(opcional)`),Kg()(),Qc(533,`p`),Sk(534,`Número de tentativas de reenvio.`),Kg()()(),Qc(535,`tr`,45)(536,`td`,14)(537,`div`,15)(538,`span`,16),Sk(539,` sms`),vu(540,`br`),Kg()()(),Qc(541,`td`,17)(542,`code`,18),Sk(543,`string`),Kg()(),Qc(544,`td`,20)(545,`em`)(546,`strong`),Sk(547,`(opcional)`),Kg()(),Qc(548,`p`),Sk(549,`Valor contendo o número de telefone enviado pelo usuário.`),Kg()()(),Qc(550,`tr`,46)(551,`td`,14)(552,`div`,15)(553,`span`,16),Sk(554,` token`),vu(555,`br`),Kg()()(),Qc(556,`td`,17)(557,`code`,18),Sk(558,`string`),Kg()(),Qc(559,`td`,20)(560,`em`)(561,`strong`),Sk(562,`(opcional)`),Kg()(),Qc(563,`p`),Sk(564,`Token de alteração de senha`),Kg()()(),Qc(565,`tr`,47)(566,`td`,14)(567,`div`,15)(568,`span`,16),Sk(569,` urlChangePassword`),vu(570,`br`),Kg()()(),Qc(571,`td`,17)(572,`code`,18),Sk(573,`string`),Kg()(),Qc(574,`td`,20)(575,`em`)(576,`strong`),Sk(577,`(opcional)`),Kg()(),Qc(578,`p`),Sk(579,`URL para o formulário de alteração de senha`),Kg()()(),Qc(580,`tr`,48)(581,`td`,14)(582,`div`,15)(583,`span`,16),Sk(584,` urlValidationCode`),vu(585,`br`),Kg()()(),Qc(586,`td`,17)(587,`code`,18),Sk(588,`string`),Kg()(),Qc(589,`td`,20)(590,`em`)(591,`strong`),Sk(592,`(opcional)`),Kg()(),Qc(593,`p`),Sk(594,`URL usada para validação do código enviado por SMS`),Kg()()()(),Qc(595,`h3`),Sk(596,`Enums`),Kg(),Qc(597,`h4`,49)(598,`code`,5),Sk(599,`PoModalPasswordRecoveryType`),Kg()(),Qc(600,`div`,2)(601,`p`)(602,`em`),Sk(603,`Enum`),Kg(),Sk(604,` para especificação do tipo de recuperação de senha.`),Kg()(),Qc(605,`h4`,9),Sk(606,`Propriedades`),Kg(),Qc(607,`table`,10)(608,`tr`,11)(609,`th`,12),Sk(610,`Nome`),Kg(),Qc(611,`th`,12),Sk(612,`Descrição`),Kg()(),Qc(613,`tr`,50)(614,`td`,14)(615,`div`,15)(616,`span`,16),Sk(617,` All`),vu(618,`br`),Kg()()(),Qc(619,`td`,20)(620,`p`),Sk(621,`Possibilita ao usuário optar por envio via email ou SMS`),Kg()()(),Qc(622,`tr`,51)(623,`td`,14)(624,`div`,15)(625,`span`,16),Sk(626,` Email`),vu(627,`br`),Kg()()(),Qc(628,`td`,20)(629,`p`),Sk(630,`Definição para recuperação apenas por email`),Kg()()(),Qc(631,`tr`,52)(632,`td`,14)(633,`div`,15)(634,`span`,16),Sk(635,` SMS`),vu(636,`br`),Kg()()(),Qc(637,`td`,20)(638,`p`),Sk(639,`Definição para recuperação apenas por SMS`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function De(i,Oe){if(i&1){let s=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(s);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-modal-password-recovery-basic-view`)(2,`sample-po-modal-password-recovery-labs-view`)(3,`sample-po-modal-password-recovery-request-view`),Kg()}if(i&2){let s=ek();Rb(`p-active`,s.activeTab===`web`)}}var qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Modal Password Recovery`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,De,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-modal-password-recovery-doc`),Kg()()()),a&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,Ee,ye,he],encapsulation:2,changeDetection:1})}return i})()}];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(qe),GV]})}return i})();var Et=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,be]})}return i})();export{Et as DocPoModalPasswordRecoveryModule};