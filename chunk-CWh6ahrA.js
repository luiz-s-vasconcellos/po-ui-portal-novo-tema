import{T as ki,m as P,p as M,w as ie}from"./main-5NWS7DIP.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Kr as Kg,L as Koe,Li as WL,Oi as U_,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,_r as Cu,aa as de$1,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,go as xo,ii as No,jn as sie,jr as GV,mi as QL,or as An,pa as ge,qi as Zb,rr as AZ,sn as j4,w as Fc,zr as I}from"./chunk-DdK63a0t.js";var de=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(a,r){if(a&1){let l=KO();_u(0,`po-modal-password-recovery`,null,0),Jc(2,`po-button`,1),_t(`p-click`,function(){U_(l);let s=ok(1);return H_(s.open())}),Kg()}},dependencies:[oi,ki],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-modal-password-recovery-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Modal Password Recovery Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-modal-password-recovery-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{poDialog=p(sie);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:ie.All},{label:`Email`,value:ie.Email},{label:`SMS`,value:ie.SMS}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=ie.Email}submit(d){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(d)}`,ok:()=>this.advanceModal(d)})}submitCode(d){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(d)}`,ok:()=>this.resendCode(d)})}advanceModal(d){d.hasOwnProperty(`sms`)?this.openSmsCode(d):this.openConfirmation(d)}openConfirmation(d){this.submitEvent=JSON.stringify(d),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(d){this.submitEvent=JSON.stringify(d),this.poModalPasswordRecovery.openSmsCode()}resendCode(d){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(a,r){if(a&1&&Cu(ki,5),a&2){let l;No(l=xo())&&(r.poModalPasswordRecovery=l.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,r){if(a&1){let l=KO();Jc(0,`po-modal-password-recovery`,1),_t(`p-code-submit`,function(s){return U_(l),r.submitCode(s),H_(r.changeEvent(`p-submit-code`))})(`p-submit`,function(s){return U_(l),r.submit(s),H_(r.changeEvent(`p-submit`))}),Kg(),Jc(1,`po-button`,2),_t(`p-click`,function(){return r.openPasswordRecoveryModal()}),Kg(),_u(2,`po-divider`),Jc(3,`div`,3),_u(4,`po-info`,4)(5,`po-info`,5),Kg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),G0(),Zb(`ngModelChange`,function(s){return U_(l),Rk(r.type,s)||(r.type=s),H_(s)}),Kg(),Jc(11,`po-input`,7),G0(),Zb(`ngModelChange`,function(s){return U_(l),Rk(r.invalidCodeMessage,s)||(r.invalidCodeMessage=s),H_(s)}),Kg(),Jc(12,`po-input`,8),G0(),Zb(`ngModelChange`,function(s){return U_(l),Rk(r.email,s)||(r.email=s),H_(s)}),Kg(),Jc(13,`po-input`,9),G0(),Zb(`ngModelChange`,function(s){return U_(l),Rk(r.phoneMask,s)||(r.phoneMask=s),H_(s)}),Kg(),Jc(14,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(s){return U_(l),Rk(r.componentsSize,s)||(r.componentsSize=s),H_(s)}),Kg()(),Jc(15,`div`,3)(16,`po-button`,11),_t(`p-click`,function(){return U_(l),ok(8).reset(),H_(r.restore())}),Kg()()()}a&2&&(Ab(`p-code-error`,r.codeError)(`p-components-size`,r.componentsSize)(`p-contact-email`,r.email)(`p-phone-mask`,r.phoneMask)(`p-type`,r.type),wg(4),Ab(`p-value`,r.submitEvent),wg(),Ab(`p-value`,r.event),wg(5),Kb(`ngModel`,r.type),Ab(`p-options`,r.typeOptions),q0(),wg(),Kb(`ngModel`,r.invalidCodeMessage),q0(),wg(),Kb(`ngModel`,r.email),q0(),wg(),Kb(`ngModel`,r.phoneMask),q0(),wg(),Kb(`ngModel`,r.componentsSize),Ab(`p-options`,r.componentsSizeOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,Zte,Koe,Joe,ki],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-modal-password-recovery-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Modal Password Recovery Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-modal-password-recovery-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-modal-password-recovery
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,le],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{poModalPasswordRecovery;type=ie.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(a,r){if(a&1&&Cu(ki,5),a&2){let l;No(l=xo())&&(r.poModalPasswordRecovery=l.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(a,r){a&1&&(Jc(0,`po-container`)(1,`div`,0),_u(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),Kg()(),Jc(5,`po-container`),_u(6,`img`,4),Jc(7,`div`,0)(8,`p`,5),Mk(9,`Oops!`),Kg(),Jc(10,`p`,6),Mk(11,` Password Recovery Requested by user `),Kg(),Jc(12,`po-button`,7),_t(`p-click`,function(){return r.openPasswordRecoveryModal()}),Kg()()(),_u(13,`po-modal-password-recovery`,8)),a&2&&(wg(13),Ab(`p-type`,r.type)(`p-url-recovery`,r.urlRecovery))},dependencies:[oi,Fc,Joe,ki],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-modal-password-recovery-request`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Modal Password Recovery Request`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-modal-password-recovery-request`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{router=p(An);openDoc(d){this.router.navigate([`/documentation`,d],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-modal-password-recovery-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-code-error`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-code-submit`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-contact-email`,1,`docs-api-properties-row`],[`id`,`prop-p-phone-mask`,1,`docs-api-properties-row`],[`id`,`event-p-submit`,1,`docs-api-properties-row`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`id`,`prop-p-url-recovery`,1,`docs-api-properties-row`],[`id`,`method-completed`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`method-openConfirmation`,1,`docs-api-method-table`],[`id`,`method-openSmsCode`,1,`docs-api-method-table`],[`id`,`interface-po-modal-password-recovery`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-modal-password-recovery-code`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-email`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-hash`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-retry`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-modal-password-recovery-sms`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-token`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-url-change-password`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-password-recovery-url-validation-code`,1,`docs-api-properties-row`],[`id`,`enum-po-modal-password-recovery-type`,1,`docs-api-class-name`],[`id`,`enum-po-modal-password-recovery-type-all`,1,`docs-api-properties-row`],[`id`,`enum-po-modal-password-recovery-type-email`,1,`docs-api-properties-row`],[`id`,`enum-po-modal-password-recovery-type-sms`,1,`docs-api-properties-row`]],template:function(a,r){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do template do po-modal-password-recovery.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoModalPasswordRecoveryComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-modal-password-recovery`),Kg(),Mk(17,` é utilizado como template para solicitação de troca de senha.`),Kg(),Jc(18,`p`),Mk(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),Kg(),Jc(20,`ul`)(21,`li`),Mk(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),Kg(),Jc(23,`li`),Mk(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),Kg(),Jc(25,`li`),Mk(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),Kg()(),Jc(27,`p`),Mk(28,`A propriedade `),Jc(29,`code`),Mk(30,`p-url-recovery`),Kg(),Mk(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Jc(32,`em`),Mk(33,`propriedades`),Kg(),Mk(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),Kg(),Jc(35,`p`),Mk(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Jc(37,`code`),Mk(38,`p-code-error`),Kg(),Mk(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Jc(40,`code`),Mk(41,`p-code-submit`),Kg(),Mk(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),Kg(),Jc(43,`blockquote`)(44,`p`),Mk(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),Kg()(),Jc(46,`p`),Mk(47,`A modal de confirmação contém uma ação de reenvio e o evento `),Jc(48,`code`),Mk(49,`p-submit`),Kg(),Mk(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),Kg(),Jc(51,`blockquote`)(52,`p`),Mk(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),Kg()(),Jc(54,`blockquote`)(55,`p`),Mk(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),Jc(57,`em`),Mk(58,`browser`),Kg(),Mk(59,` (pt, en e es)`),Kg()(),Jc(60,`p`),Mk(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Jc(62,`em`),Mk(63,`assets`),Kg(),Mk(64,` no arquivo `),Jc(65,`strong`),Mk(66,`angular.json`),Kg(),Mk(67,` da aplicação na seguinte ordem:`),Kg(),Jc(68,`pre`)(69,`code`),Mk(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),Kg()()(),Jc(71,`div`,6)(72,`h4`,7),Mk(73,`Seletor`),Kg(),Jc(74,`pre`,8),Mk(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),Kg()(),Jc(76,`h4`,9),Mk(77,`Propriedades`),Kg(),Jc(78,`table`,10)(79,`tr`,11)(80,`th`,12),Mk(81,`Nome`),Kg(),Jc(82,`th`,12),Mk(83,`Tipo`),Kg(),Jc(84,`th`,12),Mk(85,`Padrão`),Kg(),Jc(86,`th`,12),Mk(87,`Descrição`),Kg()(),Jc(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),Mk(92,` p-code-error`),_u(93,`br`),Kg()()(),Jc(94,`td`,17)(95,`code`,18),Mk(96,`string`),Kg()(),Jc(97,`td`,19),Mk(98,`-`),Kg(),Jc(99,`td`,20)(100,`em`)(101,`strong`),Mk(102,`(opcional)`),Kg()(),Jc(103,`p`),Mk(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),Kg()()(),Jc(105,`tr`,21)(106,`td`,14)(107,`div`,22)(108,`span`,23),Mk(109,` (p-code-submit)`),_u(110,`br`),Kg()()(),Jc(111,`td`,17)(112,`code`,24),Mk(113,`EventEmitter`),Kg()(),Jc(114,`td`,19),Mk(115,`-`),Kg(),Jc(116,`td`,20)(117,`em`)(118,`strong`),Mk(119,`(opcional)`),Kg()(),Jc(120,`p`),Mk(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),Kg(),Jc(122,`blockquote`)(123,`p`),Mk(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(125,`code`),Mk(126,`p-url-recovery`),Kg(),Mk(127,`.`),Kg()()()(),Jc(128,`tr`,25)(129,`td`,14)(130,`div`,15)(131,`span`,16),Mk(132,` p-components-size`),_u(133,`br`),Kg()()(),Jc(134,`td`,17)(135,`code`,18),Mk(136,`string`),Kg()(),Jc(137,`td`,19)(138,`p`)(139,`code`),Mk(140,`medium`),Kg()()(),Jc(141,`td`,20)(142,`em`)(143,`strong`),Mk(144,`(opcional)`),Kg()(),Jc(145,`p`),Mk(146,`Define o tamanho dos componentes de formulário no modal:`),Kg(),Jc(147,`ul`)(148,`li`)(149,`code`),Mk(150,`small`),Kg(),Mk(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(152,`li`)(153,`code`),Mk(154,`medium`),Kg(),Mk(155,`: aplica a medida medium de cada componente.`),Kg()(),Jc(156,`blockquote`)(157,`p`),Mk(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(159,`code`),Mk(160,`medium`),Kg(),Mk(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(162,`a`,26),Mk(163,`po-theme`),Kg(),Mk(164,`.`),Kg()()()(),Jc(165,`tr`,27)(166,`td`,14)(167,`div`,15)(168,`span`,16),Mk(169,` p-contact-email`),_u(170,`br`),Kg()()(),Jc(171,`td`,17)(172,`code`,18),Mk(173,`string`),Kg()(),Jc(174,`td`,19),Mk(175,`-`),Kg(),Jc(176,`td`,20)(177,`em`)(178,`strong`),Mk(179,`(opcional)`),Kg()(),Jc(180,`p`),Mk(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),Kg()()(),Jc(182,`tr`,28)(183,`td`,14)(184,`div`,15)(185,`span`,16),Mk(186,` p-phone-mask`),_u(187,`br`),Kg()()(),Jc(188,`td`,17)(189,`code`,18),Mk(190,`string`),Kg()(),Jc(191,`td`,19)(192,`p`)(193,`code`),Mk(194,`(99) 99999-9999`),Kg()()(),Jc(195,`td`,20)(196,`em`)(197,`strong`),Mk(198,`(opcional)`),Kg()(),Jc(199,`p`),Mk(200,`Definição da mascara do campo de telefone.`),Kg()()(),Jc(201,`tr`,29)(202,`td`,14)(203,`div`,22)(204,`span`,23),Mk(205,` (p-submit)`),_u(206,`br`),Kg()()(),Jc(207,`td`,17)(208,`code`,24),Mk(209,`EventEmitter`),Kg()(),Jc(210,`td`,19),Mk(211,`-`),Kg(),Jc(212,`td`,20)(213,`em`)(214,`strong`),Mk(215,`(opcional)`),Kg()(),Jc(216,`p`),Mk(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),Kg(),Jc(218,`blockquote`)(219,`p`),Mk(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),Jc(221,`code`),Mk(222,`p-url-recovery`),Kg(),Mk(223,`.`),Kg()()()(),Jc(224,`tr`,30)(225,`td`,14)(226,`div`,15)(227,`span`,16),Mk(228,` p-type`),_u(229,`br`),Kg()()(),Jc(230,`td`,17)(231,`code`,31),Mk(232,`PoModalPasswordRecoveryType`),Kg()(),Jc(233,`td`,19)(234,`p`)(235,`code`),Mk(236,`PoModalPasswordRecoveryType.Email`),Kg()()(),Jc(237,`td`,20)(238,`em`)(239,`strong`),Mk(240,`(opcional)`),Kg()(),Jc(241,`p`),Mk(242,`Define o tipo de recuperação de senha que será exibido.`),Kg()()(),Jc(243,`tr`,32)(244,`td`,14)(245,`div`,15)(246,`span`,16),Mk(247,` p-url-recovery`),_u(248,`br`),Kg()()(),Jc(249,`td`,17)(250,`code`,18),Mk(251,`string`),Kg()(),Jc(252,`td`,19),Mk(253,`-`),Kg(),Jc(254,`td`,20)(255,`em`)(256,`strong`),Mk(257,`(opcional)`),Kg()(),Jc(258,`p`),Mk(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Jc(260,`code`),Mk(261,`p-submit`),Kg(),Mk(262,` e `),Jc(263,`code`),Mk(264,`p-submit-code`),Kg(),Mk(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),Kg(),Jc(266,`h3`),Mk(267,`Processos`),Kg(),Jc(268,`p`),Mk(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),Jc(270,`strong`),Mk(271,`enviar`),Kg(),Mk(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Jc(273,`code`),Mk(274,`POST`),Kg(),Mk(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),Kg(),Jc(276,`pre`)(277,`code`),Mk(278,`body {
 email: email,
 retry?: retry
}
`),Kg()(),Jc(279,`h4`),Mk(280,`Recuperação por email`),Kg(),Jc(281,`p`),Mk(282,`Para a recuperação de senha por `),Jc(283,`strong`),Mk(284,`email`),Kg(),Mk(285,`, o código de resposta HTTP de status esperado é `),Jc(286,`code`),Mk(287,`204`),Kg(),Mk(288,`.`),Kg(),Jc(289,`p`),Mk(290,`Em caso de `),Jc(291,`strong`),Mk(292,`sucesso`),Kg(),Mk(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),Kg(),Jc(294,`blockquote`)(295,`p`),Mk(296,`A ação `),Jc(297,`strong`),Mk(298,`Reenviar`),Kg(),Mk(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Jc(300,`strong`),Mk(301,`retry`),Kg(),Mk(302,`.`),Kg()(),Jc(303,`p`)(304,`em`),Mk(305,`Processo finalizado.`),Kg()(),Jc(306,`h4`),Mk(307,`Recuperação por SMS`),Kg(),Jc(308,`p`),Mk(309,`Se a opção de recuperação for por `),Jc(310,`strong`),Mk(311,`SMS`),Kg(),Mk(312,`, o código de status de sucesso deve ser `),Jc(313,`code`),Mk(314,`200`),Kg(),Mk(315,`.
Em caso de `),Jc(316,`strong`),Mk(317,`sucesso`),Kg(),Mk(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),Kg(),Jc(319,`pre`)(320,`code`),Mk(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),Kg()(),Jc(322,`ul`)(323,`li`),Mk(324,`O `),Jc(325,`strong`),Mk(326,`hash`),Kg(),Mk(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),Kg(),Jc(328,`li`)(329,`strong`),Mk(330,`urlValidationCode`),Kg(),Mk(331,` é a url usada para validação do código enviado por SMS.`),Kg()(),Jc(332,`blockquote`)(333,`p`),Mk(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),Jc(335,`code`),Mk(336,`<p-url-recovery>/validation`),Kg(),Mk(337,`.`),Kg()(),Jc(338,`h4`),Mk(339,`Validação do código SMS`),Kg(),Jc(340,`p`),Mk(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),Jc(342,`strong`),Mk(343,`continuar`),Kg(),Mk(344,`, o componente fará uma requisição `),Jc(345,`code`),Mk(346,`POST`),Kg(),Mk(347,` contendo:`),Kg(),Jc(348,`pre`)(349,`code`),Mk(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),Kg()(),Jc(351,`p`),Mk(352,`O código de resposta HTTP de status esperado é `),Jc(353,`code`),Mk(354,`200`),Kg(),Mk(355,`.`),Kg(),Jc(356,`p`),Mk(357,`Em caso de `),Jc(358,`strong`),Mk(359,`erro`),Kg(),Mk(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),Kg(),Jc(361,`blockquote`)(362,`p`),Mk(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),Jc(364,`code`),Mk(365,`p-code-error`),Kg(),Mk(366,` conforme retorno abaixo:`),Kg()(),Jc(367,`pre`)(368,`code`),Mk(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),Kg()(),Jc(370,`p`),Mk(371,`Em caso de `),Jc(372,`strong`),Mk(373,`sucesso`),Kg(),Mk(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),Kg(),Jc(375,`pre`)(376,`code`),Mk(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),Kg()(),Jc(378,`ul`)(379,`li`)(380,`strong`),Mk(381,`token`),Kg(),Mk(382,`: Token de alteração de senha;`),Kg(),Jc(383,`li`)(384,`strong`),Mk(385,`urlChangePassword`),Kg(),Mk(386,`: url para o formulário de alteração de senha.`),Kg()(),Jc(387,`p`),Mk(388,`O componente está configurado para redirecionar para a url estabelecida em `),Jc(389,`code`),Mk(390,`urlChangePassword`),Kg(),Mk(391,`.`),Kg(),Jc(392,`blockquote`)(393,`p`),Mk(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Jc(395,`code`),Mk(396,`<p-url-recovery>/changePassword?token=<token>`),Kg(),Mk(397,`.`),Kg()(),Jc(398,`p`)(399,`em`),Mk(400,`Processo finalizado.`),Kg()()()()(),Jc(401,`h3`,9),Mk(402,`Métodos`),Kg(),Jc(403,`table`,33)(404,`tr`,34)(405,`th`,35)(406,`div`,15)(407,`h4`)(408,`span`,16),Mk(409,` completed `),Kg()()()()(),Jc(410,`tr`,20)(411,`td`,20)(412,`p`),Mk(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),Kg(),Jc(414,`blockquote`)(415,`p`),Mk(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),Kg()()()()(),_u(417,`br`),Jc(418,`table`,36)(419,`tr`,34)(420,`th`,35)(421,`div`,15)(422,`h4`)(423,`span`,16),Mk(424,` open `),Kg()()()()(),Jc(425,`tr`,20)(426,`td`,20)(427,`p`),Mk(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),Kg()()()(),_u(429,`br`),Jc(430,`table`,37)(431,`tr`,34)(432,`th`,35)(433,`div`,15)(434,`h4`)(435,`span`,16),Mk(436,` openConfirmation `),Kg()()()()(),Jc(437,`tr`,20)(438,`td`,20)(439,`p`),Mk(440,`Abre a modal de confirmação de envio de email.`),Kg()()()(),_u(441,`br`),Jc(442,`table`,38)(443,`tr`,34)(444,`th`,35)(445,`div`,15)(446,`h4`)(447,`span`,16),Mk(448,` openSmsCode `),Kg()()()()(),Jc(449,`tr`,20)(450,`td`,20)(451,`p`),Mk(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),Kg()()()(),_u(453,`br`),Jc(454,`h3`),Mk(455,`Interfaces`),Kg(),Jc(456,`h4`,39)(457,`code`,5),Mk(458,`PoModalPasswordRecovery`),Kg()(),Jc(459,`div`,2)(460,`p`),Mk(461,`Interface com a definição do objeto gerado pelo formulário do componente `),Jc(462,`code`),Mk(463,`po-modal-password-recovery`),Kg(),Mk(464,`.`),Kg()(),Jc(465,`h4`,9),Mk(466,`Propriedades`),Kg(),Jc(467,`table`,10)(468,`tr`,11)(469,`th`,12),Mk(470,`Nome`),Kg(),Jc(471,`th`,12),Mk(472,`Tipo`),Kg(),Jc(473,`th`,12),Mk(474,`Descrição`),Kg()(),Jc(475,`tr`,40)(476,`td`,14)(477,`div`,15)(478,`span`,16),Mk(479,` code`),_u(480,`br`),Kg()()(),Jc(481,`td`,17)(482,`code`,18),Mk(483,`string`),Kg()(),Jc(484,`td`,20)(485,`em`)(486,`strong`),Mk(487,`(opcional)`),Kg()(),Jc(488,`p`),Mk(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),Kg()()(),Jc(490,`tr`,41)(491,`td`,14)(492,`div`,15)(493,`span`,16),Mk(494,` email`),_u(495,`br`),Kg()()(),Jc(496,`td`,17)(497,`code`,18),Mk(498,`string`),Kg()(),Jc(499,`td`,20)(500,`em`)(501,`strong`),Mk(502,`(opcional)`),Kg()(),Jc(503,`p`),Mk(504,`Valor contendo o email enviado pelo usuário.`),Kg()()(),Jc(505,`tr`,42)(506,`td`,14)(507,`div`,15)(508,`span`,16),Mk(509,` hash`),_u(510,`br`),Kg()()(),Jc(511,`td`,17)(512,`code`,18),Mk(513,`string`),Kg()(),Jc(514,`td`,20)(515,`em`)(516,`strong`),Mk(517,`(opcional)`),Kg()(),Jc(518,`p`),Mk(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),Kg()()(),Jc(520,`tr`,43)(521,`td`,14)(522,`div`,15)(523,`span`,16),Mk(524,` retry`),_u(525,`br`),Kg()()(),Jc(526,`td`,17)(527,`code`,44),Mk(528,`number`),Kg()(),Jc(529,`td`,20)(530,`em`)(531,`strong`),Mk(532,`(opcional)`),Kg()(),Jc(533,`p`),Mk(534,`Número de tentativas de reenvio.`),Kg()()(),Jc(535,`tr`,45)(536,`td`,14)(537,`div`,15)(538,`span`,16),Mk(539,` sms`),_u(540,`br`),Kg()()(),Jc(541,`td`,17)(542,`code`,18),Mk(543,`string`),Kg()(),Jc(544,`td`,20)(545,`em`)(546,`strong`),Mk(547,`(opcional)`),Kg()(),Jc(548,`p`),Mk(549,`Valor contendo o número de telefone enviado pelo usuário.`),Kg()()(),Jc(550,`tr`,46)(551,`td`,14)(552,`div`,15)(553,`span`,16),Mk(554,` token`),_u(555,`br`),Kg()()(),Jc(556,`td`,17)(557,`code`,18),Mk(558,`string`),Kg()(),Jc(559,`td`,20)(560,`em`)(561,`strong`),Mk(562,`(opcional)`),Kg()(),Jc(563,`p`),Mk(564,`Token de alteração de senha`),Kg()()(),Jc(565,`tr`,47)(566,`td`,14)(567,`div`,15)(568,`span`,16),Mk(569,` urlChangePassword`),_u(570,`br`),Kg()()(),Jc(571,`td`,17)(572,`code`,18),Mk(573,`string`),Kg()(),Jc(574,`td`,20)(575,`em`)(576,`strong`),Mk(577,`(opcional)`),Kg()(),Jc(578,`p`),Mk(579,`URL para o formulário de alteração de senha`),Kg()()(),Jc(580,`tr`,48)(581,`td`,14)(582,`div`,15)(583,`span`,16),Mk(584,` urlValidationCode`),_u(585,`br`),Kg()()(),Jc(586,`td`,17)(587,`code`,18),Mk(588,`string`),Kg()(),Jc(589,`td`,20)(590,`em`)(591,`strong`),Mk(592,`(opcional)`),Kg()(),Jc(593,`p`),Mk(594,`URL usada para validação do código enviado por SMS`),Kg()()()(),Jc(595,`h3`),Mk(596,`Enums`),Kg(),Jc(597,`h4`,49)(598,`code`,5),Mk(599,`PoModalPasswordRecoveryType`),Kg()(),Jc(600,`div`,2)(601,`p`)(602,`em`),Mk(603,`Enum`),Kg(),Mk(604,` para especificação do tipo de recuperação de senha.`),Kg()(),Jc(605,`h4`,9),Mk(606,`Propriedades`),Kg(),Jc(607,`table`,10)(608,`tr`,11)(609,`th`,12),Mk(610,`Nome`),Kg(),Jc(611,`th`,12),Mk(612,`Descrição`),Kg()(),Jc(613,`tr`,50)(614,`td`,14)(615,`div`,15)(616,`span`,16),Mk(617,` All`),_u(618,`br`),Kg()()(),Jc(619,`td`,20)(620,`p`),Mk(621,`Possibilita ao usuário optar por envio via email ou SMS`),Kg()()(),Jc(622,`tr`,51)(623,`td`,14)(624,`div`,15)(625,`span`,16),Mk(626,` Email`),_u(627,`br`),Kg()()(),Jc(628,`td`,20)(629,`p`),Mk(630,`Definição para recuperação apenas por email`),Kg()()(),Jc(631,`tr`,52)(632,`td`,14)(633,`div`,15)(634,`span`,16),Mk(635,` SMS`),_u(636,`br`),Kg()()(),Jc(637,`td`,20)(638,`p`),Mk(639,`Definição para recuperação apenas por SMS`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Pe(n,Me){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-modal-password-recovery-basic-view`)(2,`sample-po-modal-password-recovery-labs-view`)(3,`sample-po-modal-password-recovery-request-view`),Kg()),n&2){let d=tk();Ab(`hidden`,d.activeTab!==`web`)}}var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Modal Password Recovery`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Modal Password Recovery · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(a,r){a&1&&(Jc(0,`po-page-default`,0),LO(1,Pe,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-modal-password-recovery-doc`),Kg()()),a&2&&(Ab(`p-title`,r.title)(`p-actions`,r.actions),wg(),jO(r.hidePoWebSample?-1:1),wg(),Ab(`hidden`,r.activeTab!==`doc`))},dependencies:[Mze,se,pe,ce,ue],encapsulation:2,changeDetection:1})}return n})()}];var Ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[GV.forChild(xe),GV]})}return n})();var dt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,Ee]})}return n})();export{dt as DocPoModalPasswordRecoveryModule};