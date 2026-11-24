import{m as P,p as M}from"./main-QQSPUZS3.js";import{An as sie,Ar as G0,At as Zte,Ba as p,Br as Jn,F as Joe,Fr as H_,G as Nf,Hr as KO,Ki as Zb,La as ok,Li as WL,Lr as I,Pn as tre,Pt as are,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,ar as Ab,bn as oi,co as wg,da as ge,eo as tk,ho as xo,j as I4,jr as GV,ki as U_,oo as vt,or as An,pi as QL,qr as LO,ra as de$1,ri as No,rt as Ru,sn as j4,ti as NZ,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var oe=(()=>{class a{poDialog;constructor(r){this.poDialog=r}static ɵfac=function(l){return new(l||a)(I(sie))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Dialog`,3,`p-click`]],template:function(l,o){l&1&&(Jc(0,`po-button`,0),vt(`p-click`,function(){return o.poDialog.alert({title:`PO Dialog`,message:`PO Dialog`})}),Kg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return a})();var ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dialog-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dialog Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dialog-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-basic',
  templateUrl: './sample-po-dialog-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogBasicComponent {
  constructor(public poDialog: PoDialogService) {}
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{poAlert;action;actionOptions;componentsSize=`medium`;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];dialogActionOptions=[{label:`Ok`,value:`ok`},{label:`Cancel`,value:`cancel`},{label:`Confirm`,value:`confirm`},{label:`Close`,value:`close`}];dialogMethodOptions=[{label:`Alert`,value:`alert`},{label:`Confirm`,value:`confirm`}];constructor(r){this.poAlert=r}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes(`ok`)?this.action=`OK`:void 0})}changeLiterals(){let r;try{r=this.literals?JSON.parse(this.literals):void 0}catch(l){r=void 0}this.dialogMethod===`alert`?this.literalsAlert=r:this.dialogMethod===`confirm`&&(this.literalsConfirm=r)}changeMethod(){this.dialogMethod===`alert`?this.help=`Ex: { "ok": "Concluído" }`:this.help=`Ex: { "cancel": "Não", "confirm": "Sim" }`}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes(`confirm`)?this.action=`Confirm`:void 0,cancel:()=>this.actionOptions.includes(`cancel`)?this.action=`Cancel`:void 0,close:()=>this.actionOptions.includes(`close`)?this.action=`Close`:void 0})}openDialog(){this.action=``,this.dialogMethod===`alert`?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize=`medium`,this.title=`PO Dialog`,this.message=`PO Dialog`,this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=``}static ɵfac=function(l){return new(l||a)(I(sie))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-labs`]],standalone:!1,decls:15,vars:13,consts:[[`f`,`ngForm`],[`name`,`openDialog`,`p-label`,`Open Dialog`,3,`p-click`,`p-disabled`],[1,`po-row`],[`p-label`,`Action clicked`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dialogMethod`,`p-label`,`Dialog method`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`literals`,`p-clean`,``,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-blur`,`p-change-model`,`ngModel`,`p-disabled`,`p-help`],[`name`,`actionOptions`,`p-columns`,`4`,`p-label`,`Action options`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let d=KO();Jc(0,`po-button`,1),vt(`p-click`,function(){return o.openDialog()}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Kg(),_u(4,`po-divider`),Jc(5,`form`,null,0)(7,`po-input`,4),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.title,n)||(o.title=n),H_(n)}),Kg(),Jc(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.message,n)||(o.message=n),H_(n)}),Kg(),Jc(9,`po-radio-group`,6),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.dialogMethod,n)||(o.dialogMethod=n),H_(n)}),vt(`p-change`,function(){return o.changeMethod()}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.literals,n)||(o.literals=n),H_(n)}),vt(`p-blur`,function(){return o.changeLiterals()})(`p-change-model`,function(){return o.changeLiterals()}),Kg(),Jc(11,`po-checkbox-group`,8),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.actionOptions,n)||(o.actionOptions=n),H_(n)}),Kg(),Jc(12,`po-radio-group`,9),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.componentsSize,n)||(o.componentsSize=n),H_(n)}),Kg(),Jc(13,`div`,2)(14,`po-button`,10),vt(`p-click`,function(){return o.restore()}),Kg()()()}if(l&2){let d=ok(6);Ab(`p-disabled`,d.invalid),wg(3),Ab(`p-value`,o.action),wg(4),Kb(`ngModel`,o.title),q0(),wg(),Kb(`ngModel`,o.message),q0(),wg(),Kb(`ngModel`,o.dialogMethod),Ab(`p-options`,o.dialogMethodOptions),q0(),wg(),Kb(`ngModel`,o.literals),Ab(`p-disabled`,o.dialogMethod===void 0)(`p-help`,o.help),q0(),wg(),Kb(`ngModel`,o.actionOptions),Ab(`p-options`,o.dialogActionOptions),q0(),wg(),Kb(`ngModel`,o.componentsSize),Ab(`p-options`,o.componentsSizeOptions),q0()}},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,I4,j4,Zte,Joe],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dialog-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dialog Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dialog-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

<po-divider />

<div class="po-row">
  <po-info class="po-md-12" p-label="Action clicked" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

  <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

  <po-radio-group
    class="po-lg-6"
    name="dialogMethod"
    [(ngModel)]="dialogMethod"
    p-label="Dialog method"
    [p-options]="dialogMethodOptions"
    (p-change)="changeMethod()"
  >
  </po-radio-group>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-clean
    p-label="Literals"
    [p-disabled]="dialogMethod === undefined"
    [p-help]="help"
    (p-blur)="changeLiterals()"
    (p-change-model)="changeLiterals()"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="actionOptions"
    [(ngModel)]="actionOptions"
    p-columns="4"
    p-label="Action options"
    [p-options]="dialogActionOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-labs',
  templateUrl: './sample-po-dialog-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogLabsComponent implements OnInit {
  action: string;
  actionOptions: Array<string>;
  componentsSize: string = 'medium';
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  message: string;
  title: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly dialogActionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Ok', value: 'ok' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Confirm', value: 'confirm' },
    { label: 'Close', value: 'close' }
  ];

  public readonly dialogMethodOptions: Array<PoRadioGroupOption> = [
    { label: 'Alert', value: 'alert' },
    { label: 'Confirm', value: 'confirm' }
  ];

  constructor(private poAlert: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  alertDialog() {
    this.poAlert.alert({
      componentsSize: this.componentsSize,
      literals: this.literalsAlert,
      title: this.title,
      message: this.message,
      ok: () => (this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined)
    });
  }

  changeLiterals() {
    let literalsModel;
    try {
      literalsModel = this.literals ? JSON.parse(this.literals) : undefined;
    } catch (error) {
      literalsModel = undefined;
    }

    if (this.dialogMethod === 'alert') {
      this.literalsAlert = literalsModel;
    } else if (this.dialogMethod === 'confirm') {
      this.literalsConfirm = literalsModel;
    }
  }

  changeMethod() {
    if (this.dialogMethod === 'alert') {
      this.help = 'Ex: { "ok": "Conclu\xEDdo" }';
    } else {
      this.help = 'Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';
    }
  }

  confirmDialog() {
    this.poAlert.confirm({
      componentsSize: this.componentsSize,
      literals: this.literalsConfirm,
      title: this.title,
      message: this.message,
      confirm: () => (this.actionOptions.includes('confirm') ? (this.action = 'Confirm') : undefined),
      cancel: () => (this.actionOptions.includes('cancel') ? (this.action = 'Cancel') : undefined),
      close: () => (this.actionOptions.includes('close') ? (this.action = 'Close') : undefined)
    });
  }

  openDialog() {
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.componentsSize = 'medium';
    this.title = 'PO Dialog';
    this.message = 'PO Dialog';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,le],encapsulation:2,changeDetection:1})}return a})();var Ce=[`form`];var pe=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:`Master Card`,value:`Master`},{label:`Visa`,value:`visa`},{label:`Diners`,value:`diners`},{label:`Hipercard`,value:`hipercard`}];statusSubscription;constructor(r,l){this.poDialog=r,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:`Cancel`,icon:`ICON_DELETE`,action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(r=>this.actionDisabledCheck(r))}actionDisabledCheck(r){this.action[0].disabled=r===`INVALID`}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:`Confirm`,message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static ɵfac=function(l){return new(l||a)(I(sie),I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card`]],viewQuery:function(l,o){if(l&1&&Cu(Ce,7),l&2){let d;No(d=xo())&&(o.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[[`form`,`ngForm`],[`p-title`,`Credit Card Cancelation`,3,`p-actions`],[1,`po-row`],[`name`,`cardType`,`p-label`,`Card type`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`cardNumber`,`p-label`,`Card number`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-minlength`,`19`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`name`,`securityCode`,`p-label`,`Security code`,`p-mask`,`999`,`p-minlength`,`3`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-label`,`Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`stateProvince`,`p-label`,`State/Province`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`zipPostalCode`,`p-label`,`Zip/PostalCode`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`phoneNumber`,`p-label`,`Phone number`,`p-mask`,`(99) 9?9999-9999`,`p-mask-format-model`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,o){if(l&1){let d=KO();Jc(0,`po-page-default`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-radio-group`,3),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.cardType,n)||(o.cardType=n),H_(n)}),Kg()(),Jc(5,`div`,2)(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.cardNumber,n)||(o.cardNumber=n),H_(n)}),Kg(),Jc(7,`po-input`,5),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.securityCode,n)||(o.securityCode=n),H_(n)}),Kg()(),Jc(8,`div`,2)(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.name,n)||(o.name=n),H_(n)}),Kg()(),Jc(10,`div`,2)(11,`po-input`,7),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.address,n)||(o.address=n),H_(n)}),Kg(),Jc(12,`po-input`,8),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.city,n)||(o.city=n),H_(n)}),Kg(),Jc(13,`po-input`,9),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.stateProvince,n)||(o.stateProvince=n),H_(n)}),Kg(),Jc(14,`po-input`,10),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.zipPostalCode,n)||(o.zipPostalCode=n),H_(n)}),Kg()(),Jc(15,`div`,2)(16,`po-input`,11),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.phoneNumber,n)||(o.phoneNumber=n),H_(n)}),Kg(),Jc(17,`po-input`,12),G0(),Zb(`ngModelChange`,function(n){return U_(d),Rk(o.country,n)||(o.country=n),H_(n)}),Kg()()()()}l&2&&(Ab(`p-actions`,o.action),wg(4),Kb(`ngModel`,o.cardType),Ab(`p-options`,o.cardTypeOptions),q0(),wg(2),Kb(`ngModel`,o.cardNumber),q0(),wg(),Kb(`ngModel`,o.securityCode),q0(),wg(2),Kb(`ngModel`,o.name),q0(),wg(2),Kb(`ngModel`,o.address),q0(),wg(),Kb(`ngModel`,o.city),q0(),wg(),Kb(`ngModel`,o.stateProvince),q0(),wg(),Kb(`ngModel`,o.zipPostalCode),q0(),wg(2),Kb(`ngModel`,o.phoneNumber),q0(),wg(),Kb(`ngModel`,o.country),q0())},dependencies:[NZ,TZ,RZ,QL,WL,j4,Zte,Mze],encapsulation:2,changeDetection:1})}return a})();var de=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dialog-cancel-credit-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Dialog - Cancel Credit Card`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-dialog-cancel-credit-card`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
  <form #form="ngForm">
    <div class="po-row">
      <po-radio-group
        class="po-md-8"
        name="cardType"
        [(ngModel)]="cardType"
        p-label="Card type"
        p-required
        [p-options]="cardTypeOptions"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-8"
        name="cardNumber"
        [(ngModel)]="cardNumber"
        p-label="Card number"
        p-mask="9999 9999 9999 9999"
        p-mask-format-model
        p-minlength="19"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-4"
        name="securityCode"
        [(ngModel)]="securityCode"
        p-label="Security code"
        p-mask="999"
        p-minlength="3"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-12" name="name" [(ngModel)]="name" p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-6 po-lg-3" name="address" [(ngModel)]="address" p-label="Address"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="city" [(ngModel)]="city" p-label="City"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="stateProvince" [(ngModel)]="stateProvince" p-label="State/Province">
      </po-input>

      <po-input class="po-md-6 po-lg-3" name="zipPostalCode" [(ngModel)]="zipPostalCode" p-label="Zip/PostalCode">
      </po-input>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-6"
        name="phoneNumber"
        [(ngModel)]="phoneNumber"
        p-label="Phone number"
        p-mask="(99) 9?9999-9999"
        p-mask-format-model
      >
      </po-input>

      <po-input class="po-md-6" name="country" [(ngModel)]="country" p-label="Country"> </po-input>
    </div>
  </form>
</po-page-default>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { PoDialogService, PoNotificationService, PoPageAction, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-cancel-credit-card',
  templateUrl: './sample-po-dialog-cancel-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogCancelCreditCardComponent implements OnDestroy, OnInit {
  @ViewChild('form', { static: true }) form: UntypedFormControl;

  action: Array<PoPageAction>;
  address: string;
  cardNumber: string;
  cardType: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  securityCode: string;
  stateProvince: string;
  zipPostalCode: string;

  public readonly cardTypeOptions: Array<PoRadioGroupOption> = [
    { label: 'Master Card', value: 'Master' },
    { label: 'Visa', value: 'visa' },
    { label: 'Diners', value: 'diners' },
    { label: 'Hipercard', value: 'hipercard' }
  ];

  private statusSubscription: Subscription;

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit() {
    this.action = [
      {
        label: 'Cancel',
        icon: 'ICON_DELETE',
        action: this.openConfirmDialog.bind(this),
        disabled: true
      }
    ];
    this.statusSubscription = this.form.statusChanges.subscribe(status => this.actionDisabledCheck(status));
  }

  actionDisabledCheck(status: string) {
    this.action[0].disabled = status === 'INVALID';
  }

  confirmCancelation() {
    this.poNotification.success(\`Credit card \${this.cardNumber} canceled\`);
    this.form.reset();
  }

  openConfirmDialog() {
    this.poDialog.confirm({
      title: 'Confirm',
      message: \`<p>Hi <b>\${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>\${this.cardNumber}<b>? </p>\`,
      confirm: () => this.confirmCancelation()
    });
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-doc`]],standalone:!1,decls:397,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-dialog-service`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-confirm`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`method-alert`,1,`docs-api-method-table`],[`id`,`interface-po-dialog-alert-literals`,1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`interface-po-dialog-alert-literals-ok`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-dialog-confirm-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-dialog-confirm-literals-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-literals-confirm`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-alert-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-dialog-confirm-options-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-dialog-alert-options-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDialogAlertLiterals`],[1,`language-typescript`],[`id`,`interface-po-dialog-confirm-options-message`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-alert-options-ok`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-dialog-confirm-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-dialog-confirm-options-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options-close`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options-confirm`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDialogConfirmLiterals`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoDialogModule } from '@po-ui/ng-components';`),Kg()(),_u(4,`div`,2),Jc(5,`h3`,3),Mk(6,`Services`),Kg(),Jc(7,`h4`,4)(8,`code`,5),Mk(9,`PoDialogService`),Kg()(),Jc(10,`div`,2)(11,`p`),Mk(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),Kg()(),Jc(13,`h3`,6),Mk(14,`Métodos`),Kg(),Jc(15,`table`,7)(16,`tr`,8)(17,`th`,9)(18,`div`,10)(19,`h4`)(20,`span`,11),Mk(21,` confirm `),Kg()()()()(),Jc(22,`tr`,12)(23,`td`,12)(24,`p`),Mk(25,`Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento.`),Kg()()()(),_u(26,`br`),Jc(27,`table`,13)(28,`tr`,8)(29,`th`,9)(30,`div`,10)(31,`h4`)(32,`span`,11),Mk(33,` alert `),Kg()()()()(),Jc(34,`tr`,12)(35,`td`,12)(36,`p`),Mk(37,`Exibe um diálogo de alerta.`),Kg()()()(),_u(38,`br`),Jc(39,`h3`),Mk(40,`Interfaces`),Kg(),Jc(41,`h4`,14)(42,`code`,5),Mk(43,`PoDialogAlertLiterals`),Kg()(),Jc(44,`div`,2)(45,`p`),Mk(46,`Interface para definição das literais usadas no serviço `),Jc(47,`code`),Mk(48,`po-dialog`),Kg(),Mk(49,` para o tipo alerta.`),Kg()(),Jc(50,`h4`,6),Mk(51,`Propriedades`),Kg(),Jc(52,`table`,15)(53,`tr`,16)(54,`th`,17),Mk(55,`Nome`),Kg(),Jc(56,`th`,17),Mk(57,`Tipo`),Kg(),Jc(58,`th`,17),Mk(59,`Descrição`),Kg()(),Jc(60,`tr`,18)(61,`td`,19)(62,`div`,10)(63,`span`,11),Mk(64,` ok`),_u(65,`br`),Kg()()(),Jc(66,`td`,20)(67,`code`,21),Mk(68,`string`),Kg()(),Jc(69,`td`,12)(70,`em`)(71,`strong`),Mk(72,`(opcional)`),Kg()(),Jc(73,`p`),Mk(74,`Rótulo do botão de "Ok".`),Kg()()()(),Jc(75,`h4`,22)(76,`code`,5),Mk(77,`PoDialogConfirmLiterals`),Kg()(),Jc(78,`div`,2)(79,`p`),Mk(80,`Interface para definição das literais usadas no serviço `),Jc(81,`code`),Mk(82,`po-dialog`),Kg(),Mk(83,` para o tipo confirmação.`),Kg()(),Jc(84,`h4`,6),Mk(85,`Propriedades`),Kg(),Jc(86,`table`,15)(87,`tr`,16)(88,`th`,17),Mk(89,`Nome`),Kg(),Jc(90,`th`,17),Mk(91,`Tipo`),Kg(),Jc(92,`th`,17),Mk(93,`Descrição`),Kg()(),Jc(94,`tr`,23)(95,`td`,19)(96,`div`,10)(97,`span`,11),Mk(98,` cancel`),_u(99,`br`),Kg()()(),Jc(100,`td`,20)(101,`code`,21),Mk(102,`string`),Kg()(),Jc(103,`td`,12)(104,`em`)(105,`strong`),Mk(106,`(opcional)`),Kg()(),Jc(107,`p`),Mk(108,`Rótulo do botão de "Cancelar".`),Kg()()(),Jc(109,`tr`,24)(110,`td`,19)(111,`div`,10)(112,`span`,11),Mk(113,` confirm`),_u(114,`br`),Kg()()(),Jc(115,`td`,20)(116,`code`,21),Mk(117,`string`),Kg()(),Jc(118,`td`,12)(119,`em`)(120,`strong`),Mk(121,`(opcional)`),Kg()(),Jc(122,`p`),Mk(123,`Rótulo do botão de "Confirmar".`),Kg()()()(),Jc(124,`h4`,25)(125,`code`,5),Mk(126,`PoDialogAlertOptions`),Kg()(),Jc(127,`div`,2)(128,`p`),Mk(129,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de alerta do serviço po-dialog.`),Kg()(),Jc(130,`h4`,6),Mk(131,`Propriedades`),Kg(),Jc(132,`table`,15)(133,`tr`,16)(134,`th`,17),Mk(135,`Nome`),Kg(),Jc(136,`th`,17),Mk(137,`Tipo`),Kg(),Jc(138,`th`,17),Mk(139,`Descrição`),Kg()(),Jc(140,`tr`,26)(141,`td`,19)(142,`div`,10)(143,`span`,11),Mk(144,` componentsSize`),_u(145,`br`),Kg()()(),Jc(146,`td`,20)(147,`code`,21),Mk(148,`string`),Kg()(),Jc(149,`td`,12)(150,`em`)(151,`strong`),Mk(152,`(opcional)`),Kg()(),Jc(153,`p`),Mk(154,`Define o tamanho dos componentes de formulário no dialog:`),Kg(),Jc(155,`ul`)(156,`li`)(157,`code`),Mk(158,`small`),Kg(),Mk(159,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(160,`li`)(161,`code`),Mk(162,`medium`),Kg(),Mk(163,`: aplica a medida medium de cada componente.`),Kg()(),Jc(164,`blockquote`)(165,`p`),Mk(166,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(167,`code`),Mk(168,`medium`),Kg(),Mk(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(170,`a`,27),Mk(171,`po-theme`),Kg(),Mk(172,`.`),Kg()()()(),Jc(173,`tr`,28)(174,`td`,19)(175,`div`,10)(176,`span`,11),Mk(177,` literals`),_u(178,`br`),Kg()()(),Jc(179,`td`,20)(180,`code`,29),Mk(181,`PoDialogAlertLiterals`),Kg()(),Jc(182,`td`,12)(183,`em`)(184,`strong`),Mk(185,`(opcional)`),Kg()(),Jc(186,`p`),Mk(187,`Objeto com as literais usadas no `),Jc(188,`code`),Mk(189,`po-dialog`),Kg(),Mk(190,` do tipo alerta.`),Kg(),Jc(191,`p`),Mk(192,`Para customizar o `),Jc(193,`em`),Mk(194,`label`),Kg(),Mk(195,`, pode ser enviado o objeto da seguinte forma:`),Kg(),Jc(196,`pre`)(197,`code`,30),Mk(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),Kg()(),Jc(199,`blockquote`)(200,`p`),Mk(201,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(202,`em`),Mk(203,`browser`),Kg(),Mk(204,` (pt, en, es).`),Kg()()()(),Jc(205,`tr`,31)(206,`td`,19)(207,`div`,10)(208,`span`,11),Mk(209,` message`),_u(210,`br`),Kg()()(),Jc(211,`td`,20)(212,`code`,21),Mk(213,`string`),Kg()(),Jc(214,`td`,12)(215,`p`),Mk(216,`Mensagem da caixa de diálogo.`),Kg(),Jc(217,`blockquote`)(218,`p`),Mk(219,`Pode-se informar um conteúdo HTML na mensagem.`),Kg()()()(),Jc(220,`tr`,32)(221,`td`,19)(222,`div`,10)(223,`span`,11),Mk(224,` ok`),_u(225,`br`),Kg()()(),Jc(226,`td`,20)(227,`code`,33),Mk(228,`Function`),Kg()(),Jc(229,`td`,12)(230,`em`)(231,`strong`),Mk(232,`(opcional)`),Kg()(),Jc(233,`p`),Mk(234,`Ação executada ao fechar o alerta pelo botão "Ok".`),Kg()()(),Jc(235,`tr`,34)(236,`td`,19)(237,`div`,10)(238,`span`,11),Mk(239,` title`),_u(240,`br`),Kg()()(),Jc(241,`td`,20)(242,`code`,21),Mk(243,`string`),Kg()(),Jc(244,`td`,12)(245,`p`),Mk(246,`Título da caixa de diálogo.`),Kg()()()(),Jc(247,`h4`,35)(248,`code`,5),Mk(249,`PoDialogConfirmOptions`),Kg()(),Jc(250,`div`,2)(251,`p`),Mk(252,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de confirmação do serviço po-dialog.`),Kg()(),Jc(253,`h4`,6),Mk(254,`Propriedades`),Kg(),Jc(255,`table`,15)(256,`tr`,16)(257,`th`,17),Mk(258,`Nome`),Kg(),Jc(259,`th`,17),Mk(260,`Tipo`),Kg(),Jc(261,`th`,17),Mk(262,`Descrição`),Kg()(),Jc(263,`tr`,36)(264,`td`,19)(265,`div`,10)(266,`span`,11),Mk(267,` cancel`),_u(268,`br`),Kg()()(),Jc(269,`td`,20)(270,`code`,33),Mk(271,`Function`),Kg()(),Jc(272,`td`,12)(273,`em`)(274,`strong`),Mk(275,`(opcional)`),Kg()(),Jc(276,`p`),Mk(277,`Ação de cancelamento da caixa de diálogo.`),Kg()()(),Jc(278,`tr`,37)(279,`td`,19)(280,`div`,10)(281,`span`,11),Mk(282,` close`),_u(283,`br`),Kg()()(),Jc(284,`td`,20)(285,`code`,33),Mk(286,`Function`),Kg()(),Jc(287,`td`,12)(288,`em`)(289,`strong`),Mk(290,`(opcional)`),Kg()(),Jc(291,`p`),Mk(292,`Ação de fechamento da caixa de diálogo.`),Kg()()(),Jc(293,`tr`,26)(294,`td`,19)(295,`div`,10)(296,`span`,11),Mk(297,` componentsSize`),_u(298,`br`),Kg()()(),Jc(299,`td`,20)(300,`code`,21),Mk(301,`string`),Kg()(),Jc(302,`td`,12)(303,`em`)(304,`strong`),Mk(305,`(opcional)`),Kg()(),Jc(306,`p`),Mk(307,`Define o tamanho dos componentes de formulário no dialog:`),Kg(),Jc(308,`ul`)(309,`li`)(310,`code`),Mk(311,`small`),Kg(),Mk(312,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(313,`li`)(314,`code`),Mk(315,`medium`),Kg(),Mk(316,`: aplica a medida medium de cada componente.`),Kg()(),Jc(317,`blockquote`)(318,`p`),Mk(319,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(320,`code`),Mk(321,`medium`),Kg(),Mk(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(323,`a`,27),Mk(324,`po-theme`),Kg(),Mk(325,`.`),Kg()()()(),Jc(326,`tr`,38)(327,`td`,19)(328,`div`,10)(329,`span`,11),Mk(330,` confirm`),_u(331,`br`),Kg()()(),Jc(332,`td`,20)(333,`code`,33),Mk(334,`Function`),Kg()(),Jc(335,`td`,12)(336,`p`),Mk(337,`Ação de confirmação da caixa de diálogo.`),Kg()()(),Jc(338,`tr`,39)(339,`td`,19)(340,`div`,10)(341,`span`,11),Mk(342,` literals`),_u(343,`br`),Kg()()(),Jc(344,`td`,20)(345,`code`,40),Mk(346,`PoDialogConfirmLiterals`),Kg()(),Jc(347,`td`,12)(348,`em`)(349,`strong`),Mk(350,`(opcional)`),Kg()(),Jc(351,`p`),Mk(352,`Objeto com as literais usadas no `),Jc(353,`code`),Mk(354,`po-dialog`),Kg(),Mk(355,` do tipo confirmação.`),Kg(),Jc(356,`p`),Mk(357,`Para customizar os `),Jc(358,`em`),Mk(359,`labels`),Kg(),Mk(360,`, pode ser enviado o objeto da seguinte forma:`),Kg(),Jc(361,`pre`)(362,`code`,30),Mk(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),Kg()(),Jc(364,`blockquote`)(365,`p`),Mk(366,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(367,`em`),Mk(368,`browser`),Kg(),Mk(369,` (pt, en, es).`),Kg()()()(),Jc(370,`tr`,31)(371,`td`,19)(372,`div`,10)(373,`span`,11),Mk(374,` message`),_u(375,`br`),Kg()()(),Jc(376,`td`,20)(377,`code`,21),Mk(378,`string`),Kg()(),Jc(379,`td`,12)(380,`p`),Mk(381,`Mensagem da caixa de diálogo.`),Kg(),Jc(382,`blockquote`)(383,`p`),Mk(384,`Pode-se informar um conteúdo HTML na mensagem.`),Kg()()()(),Jc(385,`tr`,34)(386,`td`,19)(387,`div`,10)(388,`span`,11),Mk(389,` title`),_u(390,`br`),Kg()()(),Jc(391,`td`,20)(392,`code`,21),Mk(393,`string`),Kg()(),Jc(394,`td`,12)(395,`p`),Mk(396,`Título da caixa de diálogo.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return a})();function ve(a,Pe){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-dialog-basic-view`)(2,`sample-po-dialog-labs-view`)(3,`sample-po-dialog-cancel-credit-card-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Dialog`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Dialog · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0),LO(1,ve,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-dialog-doc`),Kg()()),l&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,ae,re,de,se],encapsulation:2,changeDetection:1})}return a})()}];var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[GV.forChild(ye),GV]})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[M,ce]})}return a})();export{Xe as DocPoDialogModule};