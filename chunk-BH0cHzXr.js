import{m as P,p as M}from"./main-RBGX2DMP.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,Zr as No,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge,fo as xo,gi as Rb,io as vt,j as I4,li as Qc,ra as de$1,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik,yr as Du}from"./chunk-BQDTQO8h.js";var oe=(()=>{class a{poDialog;constructor(r){this.poDialog=r}static ɵfac=function(l){return new(l||a)(I(sie))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Dialog`,3,`p-click`]],template:function(l,o){l&1&&(Qc(0,`po-button`,0),vt(`p-click`,function(){return o.poDialog.alert({title:`PO Dialog`,message:`PO Dialog`})}),Kg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return a})();var ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dialog-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dialog Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-dialog-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{poAlert;action;actionOptions;componentsSize=`medium`;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];dialogActionOptions=[{label:`Ok`,value:`ok`},{label:`Cancel`,value:`cancel`},{label:`Confirm`,value:`confirm`},{label:`Close`,value:`close`}];dialogMethodOptions=[{label:`Alert`,value:`alert`},{label:`Confirm`,value:`confirm`}];constructor(r){this.poAlert=r}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes(`ok`)?this.action=`OK`:void 0})}changeLiterals(){let r;try{r=this.literals?JSON.parse(this.literals):void 0}catch(l){r=void 0}this.dialogMethod===`alert`?this.literalsAlert=r:this.dialogMethod===`confirm`&&(this.literalsConfirm=r)}changeMethod(){this.dialogMethod===`alert`?this.help=`Ex: { "ok": "Concluído" }`:this.help=`Ex: { "cancel": "Não", "confirm": "Sim" }`}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes(`confirm`)?this.action=`Confirm`:void 0,cancel:()=>this.actionOptions.includes(`cancel`)?this.action=`Cancel`:void 0,close:()=>this.actionOptions.includes(`close`)?this.action=`Close`:void 0})}openDialog(){this.action=``,this.dialogMethod===`alert`?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize=`medium`,this.title=`PO Dialog`,this.message=`PO Dialog`,this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=``}static ɵfac=function(l){return new(l||a)(I(sie))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-labs`]],standalone:!1,decls:15,vars:13,consts:[[`f`,`ngForm`],[`name`,`openDialog`,`p-label`,`Open Dialog`,3,`p-click`,`p-disabled`],[1,`po-row`],[`p-label`,`Action clicked`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dialogMethod`,`p-label`,`Dialog method`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`literals`,`p-clean`,``,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-blur`,`p-change-model`,`ngModel`,`p-disabled`,`p-help`],[`name`,`actionOptions`,`p-columns`,`4`,`p-label`,`Action options`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,o){if(l&1){let d=YO();Qc(0,`po-button`,1),vt(`p-click`,function(){return o.openDialog()}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Kg(),vu(4,`po-divider`),Qc(5,`form`,null,0)(7,`po-input`,4),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.title,n)||(o.title=n),U_(n)}),Kg(),Qc(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.message,n)||(o.message=n),U_(n)}),Kg(),Qc(9,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.dialogMethod,n)||(o.dialogMethod=n),U_(n)}),vt(`p-change`,function(){return o.changeMethod()}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.literals,n)||(o.literals=n),U_(n)}),vt(`p-blur`,function(){return o.changeLiterals()})(`p-change-model`,function(){return o.changeLiterals()}),Kg(),Qc(11,`po-checkbox-group`,8),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.actionOptions,n)||(o.actionOptions=n),U_(n)}),Kg(),Qc(12,`po-radio-group`,9),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.componentsSize,n)||(o.componentsSize=n),U_(n)}),Kg(),Qc(13,`div`,2)(14,`po-button`,10),vt(`p-click`,function(){return o.restore()}),Kg()()()}if(l&2){let d=ik(6);Rb(`p-disabled`,d.invalid),wg(3),Rb(`p-value`,o.action),wg(4),Yb(`ngModel`,o.title),W0(),wg(),Yb(`ngModel`,o.message),W0(),wg(),Yb(`ngModel`,o.dialogMethod),Rb(`p-options`,o.dialogMethodOptions),W0(),wg(),Yb(`ngModel`,o.literals),Rb(`p-disabled`,o.dialogMethod===void 0)(`p-help`,o.help),W0(),wg(),Yb(`ngModel`,o.actionOptions),Rb(`p-options`,o.dialogActionOptions),W0(),wg(),Yb(`ngModel`,o.componentsSize),Rb(`p-options`,o.componentsSizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Joe],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dialog-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dialog Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-dialog-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,le],encapsulation:2,changeDetection:1})}return a})();var Ce=[`form`];var pe=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:`Master Card`,value:`Master`},{label:`Visa`,value:`visa`},{label:`Diners`,value:`diners`},{label:`Hipercard`,value:`hipercard`}];statusSubscription;constructor(r,l){this.poDialog=r,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:`Cancel`,icon:`ICON_DELETE`,action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(r=>this.actionDisabledCheck(r))}actionDisabledCheck(r){this.action[0].disabled=r===`INVALID`}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:`Confirm`,message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static ɵfac=function(l){return new(l||a)(I(sie),I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card`]],viewQuery:function(l,o){if(l&1&&Du(Ce,7),l&2){let d;No(d=xo())&&(o.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[[`form`,`ngForm`],[`p-title`,`Credit Card Cancelation`,3,`p-actions`],[1,`po-row`],[`name`,`cardType`,`p-label`,`Card type`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`cardNumber`,`p-label`,`Card number`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-minlength`,`19`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`name`,`securityCode`,`p-label`,`Security code`,`p-mask`,`999`,`p-minlength`,`3`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-label`,`Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`stateProvince`,`p-label`,`State/Province`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`zipPostalCode`,`p-label`,`Zip/PostalCode`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`phoneNumber`,`p-label`,`Phone number`,`p-mask`,`(99) 9?9999-9999`,`p-mask-format-model`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,o){if(l&1){let d=YO();Qc(0,`po-page-default`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-radio-group`,3),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.cardType,n)||(o.cardType=n),U_(n)}),Kg()(),Qc(5,`div`,2)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.cardNumber,n)||(o.cardNumber=n),U_(n)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.securityCode,n)||(o.securityCode=n),U_(n)}),Kg()(),Qc(8,`div`,2)(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.name,n)||(o.name=n),U_(n)}),Kg()(),Qc(10,`div`,2)(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.address,n)||(o.address=n),U_(n)}),Kg(),Qc(12,`po-input`,8),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.city,n)||(o.city=n),U_(n)}),Kg(),Qc(13,`po-input`,9),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.stateProvince,n)||(o.stateProvince=n),U_(n)}),Kg(),Qc(14,`po-input`,10),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.zipPostalCode,n)||(o.zipPostalCode=n),U_(n)}),Kg()(),Qc(15,`div`,2)(16,`po-input`,11),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.phoneNumber,n)||(o.phoneNumber=n),U_(n)}),Kg(),Qc(17,`po-input`,12),z0(),Kb(`ngModelChange`,function(n){return B_(d),Tk(o.country,n)||(o.country=n),U_(n)}),Kg()()()()}l&2&&(Rb(`p-actions`,o.action),wg(4),Yb(`ngModel`,o.cardType),Rb(`p-options`,o.cardTypeOptions),W0(),wg(2),Yb(`ngModel`,o.cardNumber),W0(),wg(),Yb(`ngModel`,o.securityCode),W0(),wg(2),Yb(`ngModel`,o.name),W0(),wg(2),Yb(`ngModel`,o.address),W0(),wg(),Yb(`ngModel`,o.city),W0(),wg(),Yb(`ngModel`,o.stateProvince),W0(),wg(),Yb(`ngModel`,o.zipPostalCode),W0(),wg(2),Yb(`ngModel`,o.phoneNumber),W0(),wg(),Yb(`ngModel`,o.country),W0())},dependencies:[AZ,MZ,TZ,QL,WL,j4,Zte,Mze],encapsulation:2,changeDetection:1})}return a})();var de=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-dialog-cancel-credit-card`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Dialog - Cancel Credit Card`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-dialog-cancel-credit-card`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-doc`]],standalone:!1,decls:397,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-dialog-service`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-confirm`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`method-alert`,1,`docs-api-method-table`],[`id`,`interface-po-dialog-alert-literals`,1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`interface-po-dialog-alert-literals-ok`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-dialog-confirm-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-dialog-confirm-literals-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-literals-confirm`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-alert-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-dialog-confirm-options-components-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-dialog-alert-options-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDialogAlertLiterals`],[1,`language-typescript`],[`id`,`interface-po-dialog-confirm-options-message`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-alert-options-ok`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-dialog-confirm-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-dialog-confirm-options-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options-close`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options-confirm`,1,`docs-api-properties-row`],[`id`,`interface-po-dialog-confirm-options-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDialogConfirmLiterals`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoDialogModule } from '@po-ui/ng-components';`),Kg()(),vu(4,`div`,2),Qc(5,`h3`,3),Sk(6,`Services`),Kg(),Qc(7,`h4`,4)(8,`code`,5),Sk(9,`PoDialogService`),Kg()(),Qc(10,`div`,2)(11,`p`),Sk(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),Kg()(),Qc(13,`h3`,6),Sk(14,`Métodos`),Kg(),Qc(15,`table`,7)(16,`tr`,8)(17,`th`,9)(18,`div`,10)(19,`h4`)(20,`span`,11),Sk(21,` confirm `),Kg()()()()(),Qc(22,`tr`,12)(23,`td`,12)(24,`p`),Sk(25,`Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento.`),Kg()()()(),vu(26,`br`),Qc(27,`table`,13)(28,`tr`,8)(29,`th`,9)(30,`div`,10)(31,`h4`)(32,`span`,11),Sk(33,` alert `),Kg()()()()(),Qc(34,`tr`,12)(35,`td`,12)(36,`p`),Sk(37,`Exibe um diálogo de alerta.`),Kg()()()(),vu(38,`br`),Qc(39,`h3`),Sk(40,`Interfaces`),Kg(),Qc(41,`h4`,14)(42,`code`,5),Sk(43,`PoDialogAlertLiterals`),Kg()(),Qc(44,`div`,2)(45,`p`),Sk(46,`Interface para definição das literais usadas no serviço `),Qc(47,`code`),Sk(48,`po-dialog`),Kg(),Sk(49,` para o tipo alerta.`),Kg()(),Qc(50,`h4`,6),Sk(51,`Propriedades`),Kg(),Qc(52,`table`,15)(53,`tr`,16)(54,`th`,17),Sk(55,`Nome`),Kg(),Qc(56,`th`,17),Sk(57,`Tipo`),Kg(),Qc(58,`th`,17),Sk(59,`Descrição`),Kg()(),Qc(60,`tr`,18)(61,`td`,19)(62,`div`,10)(63,`span`,11),Sk(64,` ok`),vu(65,`br`),Kg()()(),Qc(66,`td`,20)(67,`code`,21),Sk(68,`string`),Kg()(),Qc(69,`td`,12)(70,`em`)(71,`strong`),Sk(72,`(opcional)`),Kg()(),Qc(73,`p`),Sk(74,`Rótulo do botão de "Ok".`),Kg()()()(),Qc(75,`h4`,22)(76,`code`,5),Sk(77,`PoDialogConfirmLiterals`),Kg()(),Qc(78,`div`,2)(79,`p`),Sk(80,`Interface para definição das literais usadas no serviço `),Qc(81,`code`),Sk(82,`po-dialog`),Kg(),Sk(83,` para o tipo confirmação.`),Kg()(),Qc(84,`h4`,6),Sk(85,`Propriedades`),Kg(),Qc(86,`table`,15)(87,`tr`,16)(88,`th`,17),Sk(89,`Nome`),Kg(),Qc(90,`th`,17),Sk(91,`Tipo`),Kg(),Qc(92,`th`,17),Sk(93,`Descrição`),Kg()(),Qc(94,`tr`,23)(95,`td`,19)(96,`div`,10)(97,`span`,11),Sk(98,` cancel`),vu(99,`br`),Kg()()(),Qc(100,`td`,20)(101,`code`,21),Sk(102,`string`),Kg()(),Qc(103,`td`,12)(104,`em`)(105,`strong`),Sk(106,`(opcional)`),Kg()(),Qc(107,`p`),Sk(108,`Rótulo do botão de "Cancelar".`),Kg()()(),Qc(109,`tr`,24)(110,`td`,19)(111,`div`,10)(112,`span`,11),Sk(113,` confirm`),vu(114,`br`),Kg()()(),Qc(115,`td`,20)(116,`code`,21),Sk(117,`string`),Kg()(),Qc(118,`td`,12)(119,`em`)(120,`strong`),Sk(121,`(opcional)`),Kg()(),Qc(122,`p`),Sk(123,`Rótulo do botão de "Confirmar".`),Kg()()()(),Qc(124,`h4`,25)(125,`code`,5),Sk(126,`PoDialogAlertOptions`),Kg()(),Qc(127,`div`,2)(128,`p`),Sk(129,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de alerta do serviço po-dialog.`),Kg()(),Qc(130,`h4`,6),Sk(131,`Propriedades`),Kg(),Qc(132,`table`,15)(133,`tr`,16)(134,`th`,17),Sk(135,`Nome`),Kg(),Qc(136,`th`,17),Sk(137,`Tipo`),Kg(),Qc(138,`th`,17),Sk(139,`Descrição`),Kg()(),Qc(140,`tr`,26)(141,`td`,19)(142,`div`,10)(143,`span`,11),Sk(144,` componentsSize`),vu(145,`br`),Kg()()(),Qc(146,`td`,20)(147,`code`,21),Sk(148,`string`),Kg()(),Qc(149,`td`,12)(150,`em`)(151,`strong`),Sk(152,`(opcional)`),Kg()(),Qc(153,`p`),Sk(154,`Define o tamanho dos componentes de formulário no dialog:`),Kg(),Qc(155,`ul`)(156,`li`)(157,`code`),Sk(158,`small`),Kg(),Sk(159,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(160,`li`)(161,`code`),Sk(162,`medium`),Kg(),Sk(163,`: aplica a medida medium de cada componente.`),Kg()(),Qc(164,`blockquote`)(165,`p`),Sk(166,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(167,`code`),Sk(168,`medium`),Kg(),Sk(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(170,`a`,27),Sk(171,`po-theme`),Kg(),Sk(172,`.`),Kg()()()(),Qc(173,`tr`,28)(174,`td`,19)(175,`div`,10)(176,`span`,11),Sk(177,` literals`),vu(178,`br`),Kg()()(),Qc(179,`td`,20)(180,`code`,29),Sk(181,`PoDialogAlertLiterals`),Kg()(),Qc(182,`td`,12)(183,`em`)(184,`strong`),Sk(185,`(opcional)`),Kg()(),Qc(186,`p`),Sk(187,`Objeto com as literais usadas no `),Qc(188,`code`),Sk(189,`po-dialog`),Kg(),Sk(190,` do tipo alerta.`),Kg(),Qc(191,`p`),Sk(192,`Para customizar o `),Qc(193,`em`),Sk(194,`label`),Kg(),Sk(195,`, pode ser enviado o objeto da seguinte forma:`),Kg(),Qc(196,`pre`)(197,`code`,30),Sk(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),Kg()(),Qc(199,`blockquote`)(200,`p`),Sk(201,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Qc(202,`em`),Sk(203,`browser`),Kg(),Sk(204,` (pt, en, es).`),Kg()()()(),Qc(205,`tr`,31)(206,`td`,19)(207,`div`,10)(208,`span`,11),Sk(209,` message`),vu(210,`br`),Kg()()(),Qc(211,`td`,20)(212,`code`,21),Sk(213,`string`),Kg()(),Qc(214,`td`,12)(215,`p`),Sk(216,`Mensagem da caixa de diálogo.`),Kg(),Qc(217,`blockquote`)(218,`p`),Sk(219,`Pode-se informar um conteúdo HTML na mensagem.`),Kg()()()(),Qc(220,`tr`,32)(221,`td`,19)(222,`div`,10)(223,`span`,11),Sk(224,` ok`),vu(225,`br`),Kg()()(),Qc(226,`td`,20)(227,`code`,33),Sk(228,`Function`),Kg()(),Qc(229,`td`,12)(230,`em`)(231,`strong`),Sk(232,`(opcional)`),Kg()(),Qc(233,`p`),Sk(234,`Ação executada ao fechar o alerta pelo botão "Ok".`),Kg()()(),Qc(235,`tr`,34)(236,`td`,19)(237,`div`,10)(238,`span`,11),Sk(239,` title`),vu(240,`br`),Kg()()(),Qc(241,`td`,20)(242,`code`,21),Sk(243,`string`),Kg()(),Qc(244,`td`,12)(245,`p`),Sk(246,`Título da caixa de diálogo.`),Kg()()()(),Qc(247,`h4`,35)(248,`code`,5),Sk(249,`PoDialogConfirmOptions`),Kg()(),Qc(250,`div`,2)(251,`p`),Sk(252,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de confirmação do serviço po-dialog.`),Kg()(),Qc(253,`h4`,6),Sk(254,`Propriedades`),Kg(),Qc(255,`table`,15)(256,`tr`,16)(257,`th`,17),Sk(258,`Nome`),Kg(),Qc(259,`th`,17),Sk(260,`Tipo`),Kg(),Qc(261,`th`,17),Sk(262,`Descrição`),Kg()(),Qc(263,`tr`,36)(264,`td`,19)(265,`div`,10)(266,`span`,11),Sk(267,` cancel`),vu(268,`br`),Kg()()(),Qc(269,`td`,20)(270,`code`,33),Sk(271,`Function`),Kg()(),Qc(272,`td`,12)(273,`em`)(274,`strong`),Sk(275,`(opcional)`),Kg()(),Qc(276,`p`),Sk(277,`Ação de cancelamento da caixa de diálogo.`),Kg()()(),Qc(278,`tr`,37)(279,`td`,19)(280,`div`,10)(281,`span`,11),Sk(282,` close`),vu(283,`br`),Kg()()(),Qc(284,`td`,20)(285,`code`,33),Sk(286,`Function`),Kg()(),Qc(287,`td`,12)(288,`em`)(289,`strong`),Sk(290,`(opcional)`),Kg()(),Qc(291,`p`),Sk(292,`Ação de fechamento da caixa de diálogo.`),Kg()()(),Qc(293,`tr`,26)(294,`td`,19)(295,`div`,10)(296,`span`,11),Sk(297,` componentsSize`),vu(298,`br`),Kg()()(),Qc(299,`td`,20)(300,`code`,21),Sk(301,`string`),Kg()(),Qc(302,`td`,12)(303,`em`)(304,`strong`),Sk(305,`(opcional)`),Kg()(),Qc(306,`p`),Sk(307,`Define o tamanho dos componentes de formulário no dialog:`),Kg(),Qc(308,`ul`)(309,`li`)(310,`code`),Sk(311,`small`),Kg(),Sk(312,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(313,`li`)(314,`code`),Sk(315,`medium`),Kg(),Sk(316,`: aplica a medida medium de cada componente.`),Kg()(),Qc(317,`blockquote`)(318,`p`),Sk(319,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(320,`code`),Sk(321,`medium`),Kg(),Sk(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(323,`a`,27),Sk(324,`po-theme`),Kg(),Sk(325,`.`),Kg()()()(),Qc(326,`tr`,38)(327,`td`,19)(328,`div`,10)(329,`span`,11),Sk(330,` confirm`),vu(331,`br`),Kg()()(),Qc(332,`td`,20)(333,`code`,33),Sk(334,`Function`),Kg()(),Qc(335,`td`,12)(336,`p`),Sk(337,`Ação de confirmação da caixa de diálogo.`),Kg()()(),Qc(338,`tr`,39)(339,`td`,19)(340,`div`,10)(341,`span`,11),Sk(342,` literals`),vu(343,`br`),Kg()()(),Qc(344,`td`,20)(345,`code`,40),Sk(346,`PoDialogConfirmLiterals`),Kg()(),Qc(347,`td`,12)(348,`em`)(349,`strong`),Sk(350,`(opcional)`),Kg()(),Qc(351,`p`),Sk(352,`Objeto com as literais usadas no `),Qc(353,`code`),Sk(354,`po-dialog`),Kg(),Sk(355,` do tipo confirmação.`),Kg(),Qc(356,`p`),Sk(357,`Para customizar os `),Qc(358,`em`),Sk(359,`labels`),Kg(),Sk(360,`, pode ser enviado o objeto da seguinte forma:`),Kg(),Qc(361,`pre`)(362,`code`,30),Sk(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),Kg()(),Qc(364,`blockquote`)(365,`p`),Sk(366,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Qc(367,`em`),Sk(368,`browser`),Kg(),Sk(369,` (pt, en, es).`),Kg()()()(),Qc(370,`tr`,31)(371,`td`,19)(372,`div`,10)(373,`span`,11),Sk(374,` message`),vu(375,`br`),Kg()()(),Qc(376,`td`,20)(377,`code`,21),Sk(378,`string`),Kg()(),Qc(379,`td`,12)(380,`p`),Sk(381,`Mensagem da caixa de diálogo.`),Kg(),Qc(382,`blockquote`)(383,`p`),Sk(384,`Pode-se informar um conteúdo HTML na mensagem.`),Kg()()()(),Qc(385,`tr`,34)(386,`td`,19)(387,`div`,10)(388,`span`,11),Sk(389,` title`),vu(390,`br`),Kg()()(),Qc(391,`td`,20)(392,`code`,21),Sk(393,`string`),Kg()(),Qc(394,`td`,12)(395,`p`),Sk(396,`Título da caixa de diálogo.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return a})();function ve(a,Pe){if(a&1&&(Qc(0,`div`,1),vu(1,`sample-po-dialog-basic-view`)(2,`sample-po-dialog-labs-view`)(3,`sample-po-dialog-cancel-credit-card-view`),Kg()),a&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Dialog`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Dialog · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,o){l&1&&(Qc(0,`po-page-default`,0),FO(1,ve,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-dialog-doc`),Kg()()),l&2&&(Rb(`p-title`,o.title)(`p-actions`,o.actions),wg(),VO(o.hidePoWebSample?-1:1),wg(),Rb(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,ae,re,de,se],encapsulation:2,changeDetection:1})}return a})()}];var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[GV.forChild(ye),GV]})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[M,ce]})}return a})();export{Xe as DocPoDialogModule};