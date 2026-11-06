import{$n as Ak,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,b as Fu,cn as iie,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var le=(()=>{class a{poDialog;constructor(r){this.poDialog=r}static ɵfac=function(l){return new(l||a)(I(iie))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Dialog`,3,`p-click`]],template:function(l,n){l&1&&(Jc(0,`po-button`,0),vt(`p-click`,function(){return n.poDialog.alert({title:`PO Dialog`,message:`PO Dialog`})}),Zg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a});var se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dialog Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dialog-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,fe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,le],encapsulation:2,changeDetection:1})}return a})();var de=(()=>{class a{poAlert;action;actionOptions;componentsSize=`medium`;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];dialogActionOptions=[{label:`Ok`,value:`ok`},{label:`Cancel`,value:`cancel`},{label:`Confirm`,value:`confirm`},{label:`Close`,value:`close`}];dialogMethodOptions=[{label:`Alert`,value:`alert`},{label:`Confirm`,value:`confirm`}];constructor(r){this.poAlert=r}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes(`ok`)?this.action=`OK`:void 0})}changeLiterals(){let r;try{r=this.literals?JSON.parse(this.literals):void 0}catch(l){r=void 0}this.dialogMethod===`alert`?this.literalsAlert=r:this.dialogMethod===`confirm`&&(this.literalsConfirm=r)}changeMethod(){this.dialogMethod===`alert`?this.help=`Ex: { "ok": "Concluído" }`:this.help=`Ex: { "cancel": "Não", "confirm": "Sim" }`}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes(`confirm`)?this.action=`Confirm`:void 0,cancel:()=>this.actionOptions.includes(`cancel`)?this.action=`Cancel`:void 0,close:()=>this.actionOptions.includes(`close`)?this.action=`Close`:void 0})}openDialog(){this.action=``,this.dialogMethod===`alert`?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize=`medium`,this.title=`PO Dialog`,this.message=`PO Dialog`,this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=``}static ɵfac=function(l){return new(l||a)(I(iie))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-labs`]],standalone:!1,decls:15,vars:13,consts:[[`f`,`ngForm`],[`name`,`openDialog`,`p-label`,`Open Dialog`,3,`p-click`,`p-disabled`],[1,`po-row`],[`p-label`,`Action clicked`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dialogMethod`,`p-label`,`Dialog method`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`literals`,`p-clean`,``,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-blur`,`p-change-model`,`ngModel`,`p-disabled`,`p-help`],[`name`,`actionOptions`,`p-columns`,`4`,`p-label`,`Action options`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=ZO();Jc(0,`po-button`,1),vt(`p-click`,function(){return n.openDialog()}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Zg(),_u(4,`po-divider`),Jc(5,`form`,null,0)(7,`po-input`,4),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.title,o)||(n.title=o),H_(o)}),Zg(),Jc(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.message,o)||(n.message=o),H_(o)}),Zg(),Jc(9,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.dialogMethod,o)||(n.dialogMethod=o),H_(o)}),vt(`p-change`,function(){return n.changeMethod()}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.literals,o)||(n.literals=o),H_(o)}),vt(`p-blur`,function(){return n.changeLiterals()})(`p-change-model`,function(){return n.changeLiterals()}),Zg(),Jc(11,`po-checkbox-group`,8),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.actionOptions,o)||(n.actionOptions=o),H_(o)}),Zg(),Jc(12,`po-radio-group`,9),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.componentsSize,o)||(n.componentsSize=o),H_(o)}),Zg(),Jc(13,`div`,2)(14,`po-button`,10),vt(`p-click`,function(){return n.restore()}),Zg()()()}if(l&2){let d=sk(6);Rb(`p-disabled`,d.invalid),Ig(3),Rb(`p-value`,n.action),Ig(4),Yb(`ngModel`,n.title),Y0(),Ig(),Yb(`ngModel`,n.message),Y0(),Ig(),Yb(`ngModel`,n.dialogMethod),Rb(`p-options`,n.dialogMethodOptions),Y0(),Ig(),Yb(`ngModel`,n.literals),Rb(`p-disabled`,n.dialogMethod===void 0)(`p-help`,n.help),Y0(),Ig(),Yb(`ngModel`,n.actionOptions),Rb(`p-options`,n.dialogActionOptions),Y0(),Ig(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Gte,Yoe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dialog Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dialog-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ve,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return a})();var Pe=[`form`];var ce=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:`Master Card`,value:`Master`},{label:`Visa`,value:`visa`},{label:`Diners`,value:`diners`},{label:`Hipercard`,value:`hipercard`}];statusSubscription;constructor(r,l){this.poDialog=r,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:`Cancel`,icon:`ICON_DELETE`,action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(r=>this.actionDisabledCheck(r))}actionDisabledCheck(r){this.action[0].disabled=r===`INVALID`}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:`Confirm`,message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static ɵfac=function(l){return new(l||a)(I(iie),I(Fu))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card`]],viewQuery:function(l,n){if(l&1&&Cu(Pe,7),l&2){let d;No(d=xo())&&(n.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[[`form`,`ngForm`],[`p-title`,`Credit Card Cancelation`,3,`p-actions`],[1,`po-row`],[`name`,`cardType`,`p-label`,`Card type`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`cardNumber`,`p-label`,`Card number`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-minlength`,`19`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`name`,`securityCode`,`p-label`,`Security code`,`p-mask`,`999`,`p-minlength`,`3`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-label`,`Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`stateProvince`,`p-label`,`State/Province`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`zipPostalCode`,`p-label`,`Zip/PostalCode`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`phoneNumber`,`p-label`,`Phone number`,`p-mask`,`(99) 9?9999-9999`,`p-mask-format-model`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let d=ZO();Jc(0,`po-page-default`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-radio-group`,3),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.cardType,o)||(n.cardType=o),H_(o)}),Zg()(),Jc(5,`div`,2)(6,`po-input`,4),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.cardNumber,o)||(n.cardNumber=o),H_(o)}),Zg(),Jc(7,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.securityCode,o)||(n.securityCode=o),H_(o)}),Zg()(),Jc(8,`div`,2)(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.name,o)||(n.name=o),H_(o)}),Zg()(),Jc(10,`div`,2)(11,`po-input`,7),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.address,o)||(n.address=o),H_(o)}),Zg(),Jc(12,`po-input`,8),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.city,o)||(n.city=o),H_(o)}),Zg(),Jc(13,`po-input`,9),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.stateProvince,o)||(n.stateProvince=o),H_(o)}),Zg(),Jc(14,`po-input`,10),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.zipPostalCode,o)||(n.zipPostalCode=o),H_(o)}),Zg()(),Jc(15,`div`,2)(16,`po-input`,11),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.phoneNumber,o)||(n.phoneNumber=o),H_(o)}),Zg(),Jc(17,`po-input`,12),W0(),Kb(`ngModelChange`,function(o){return U_(d),Ak(n.country,o)||(n.country=o),H_(o)}),Zg()()()()}l&2&&(Rb(`p-actions`,n.action),Ig(4),Yb(`ngModel`,n.cardType),Rb(`p-options`,n.cardTypeOptions),Y0(),Ig(2),Yb(`ngModel`,n.cardNumber),Y0(),Ig(),Yb(`ngModel`,n.securityCode),Y0(),Ig(2),Yb(`ngModel`,n.name),Y0(),Ig(2),Yb(`ngModel`,n.address),Y0(),Ig(),Yb(`ngModel`,n.city),Y0(),Ig(),Yb(`ngModel`,n.stateProvince),Y0(),Ig(),Yb(`ngModel`,n.zipPostalCode),Y0(),Ig(2),Yb(`ngModel`,n.phoneNumber),Y0(),Ig(),Yb(`ngModel`,n.country),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,U4,Gte,Tze],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dialog - Cancel Credit Card`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dialog-cancel-credit-card`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-dialog-doc`]],standalone:!1,decls:397,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDialogAlertLiterals`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoDialogConfirmLiterals`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoDialogModule } from '@po-ui/ng-components';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Services`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoDialogService`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),Zg()(),Jc(13,`h3`,6),Tk(14,`Métodos`),Zg(),Jc(15,`table`,7)(16,`tr`,8)(17,`th`,9)(18,`div`,10)(19,`h4`)(20,`span`,11),Tk(21,` confirm `),Zg()()()()(),Jc(22,`tr`,12)(23,`td`,12)(24,`p`),Tk(25,`Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento.`),Zg()()()(),_u(26,`br`),Jc(27,`table`,7)(28,`tr`,8)(29,`th`,9)(30,`div`,10)(31,`h4`)(32,`span`,11),Tk(33,` alert `),Zg()()()()(),Jc(34,`tr`,12)(35,`td`,12)(36,`p`),Tk(37,`Exibe um diálogo de alerta.`),Zg()()()(),_u(38,`br`),Jc(39,`h3`),Tk(40,`Interfaces`),Zg(),Jc(41,`h4`,13)(42,`code`,5),Tk(43,`PoDialogAlertLiterals`),Zg()(),Jc(44,`div`,2)(45,`p`),Tk(46,`Interface para definição das literais usadas no serviço `),Jc(47,`code`),Tk(48,`po-dialog`),Zg(),Tk(49,` para o tipo alerta.`),Zg()(),Jc(50,`h4`,6),Tk(51,`Propriedades`),Zg(),Jc(52,`table`,14)(53,`tr`,15)(54,`th`,16),Tk(55,`Nome`),Zg(),Jc(56,`th`,16),Tk(57,`Tipo`),Zg(),Jc(58,`th`,16),Tk(59,`Descrição`),Zg()(),Jc(60,`tr`,8)(61,`td`,17)(62,`div`,10)(63,`span`,11),Tk(64,` ok`),_u(65,`br`),Zg()()(),Jc(66,`td`,18)(67,`code`,19),Tk(68,`string`),Zg()(),Jc(69,`td`,12)(70,`em`)(71,`strong`),Tk(72,`(opcional)`),Zg()(),Jc(73,`p`),Tk(74,`Rótulo do botão de "Ok".`),Zg()()()(),Jc(75,`h4`,13)(76,`code`,5),Tk(77,`PoDialogConfirmLiterals`),Zg()(),Jc(78,`div`,2)(79,`p`),Tk(80,`Interface para definição das literais usadas no serviço `),Jc(81,`code`),Tk(82,`po-dialog`),Zg(),Tk(83,` para o tipo confirmação.`),Zg()(),Jc(84,`h4`,6),Tk(85,`Propriedades`),Zg(),Jc(86,`table`,14)(87,`tr`,15)(88,`th`,16),Tk(89,`Nome`),Zg(),Jc(90,`th`,16),Tk(91,`Tipo`),Zg(),Jc(92,`th`,16),Tk(93,`Descrição`),Zg()(),Jc(94,`tr`,8)(95,`td`,17)(96,`div`,10)(97,`span`,11),Tk(98,` cancel`),_u(99,`br`),Zg()()(),Jc(100,`td`,18)(101,`code`,19),Tk(102,`string`),Zg()(),Jc(103,`td`,12)(104,`em`)(105,`strong`),Tk(106,`(opcional)`),Zg()(),Jc(107,`p`),Tk(108,`Rótulo do botão de "Cancelar".`),Zg()()(),Jc(109,`tr`,8)(110,`td`,17)(111,`div`,10)(112,`span`,11),Tk(113,` confirm`),_u(114,`br`),Zg()()(),Jc(115,`td`,18)(116,`code`,19),Tk(117,`string`),Zg()(),Jc(118,`td`,12)(119,`em`)(120,`strong`),Tk(121,`(opcional)`),Zg()(),Jc(122,`p`),Tk(123,`Rótulo do botão de "Confirmar".`),Zg()()()(),Jc(124,`h4`,13)(125,`code`,5),Tk(126,`PoDialogAlertOptions`),Zg()(),Jc(127,`div`,2)(128,`p`),Tk(129,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de alerta do serviço po-dialog.`),Zg()(),Jc(130,`h4`,6),Tk(131,`Propriedades`),Zg(),Jc(132,`table`,14)(133,`tr`,15)(134,`th`,16),Tk(135,`Nome`),Zg(),Jc(136,`th`,16),Tk(137,`Tipo`),Zg(),Jc(138,`th`,16),Tk(139,`Descrição`),Zg()(),Jc(140,`tr`,8)(141,`td`,17)(142,`div`,10)(143,`span`,11),Tk(144,` componentsSize`),_u(145,`br`),Zg()()(),Jc(146,`td`,18)(147,`code`,19),Tk(148,`string`),Zg()(),Jc(149,`td`,12)(150,`em`)(151,`strong`),Tk(152,`(opcional)`),Zg()(),Jc(153,`p`),Tk(154,`Define o tamanho dos componentes de formulário no dialog:`),Zg(),Jc(155,`ul`)(156,`li`)(157,`code`),Tk(158,`small`),Zg(),Tk(159,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(160,`li`)(161,`code`),Tk(162,`medium`),Zg(),Tk(163,`: aplica a medida medium de cada componente.`),Zg()(),Jc(164,`blockquote`)(165,`p`),Tk(166,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(167,`code`),Tk(168,`medium`),Zg(),Tk(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(170,`a`,20),Tk(171,`po-theme`),Zg(),Tk(172,`.`),Zg()()()(),Jc(173,`tr`,8)(174,`td`,17)(175,`div`,10)(176,`span`,11),Tk(177,` literals`),_u(178,`br`),Zg()()(),Jc(179,`td`,18)(180,`code`,21),Tk(181,`PoDialogAlertLiterals`),Zg()(),Jc(182,`td`,12)(183,`em`)(184,`strong`),Tk(185,`(opcional)`),Zg()(),Jc(186,`p`),Tk(187,`Objeto com as literais usadas no `),Jc(188,`code`),Tk(189,`po-dialog`),Zg(),Tk(190,` do tipo alerta.`),Zg(),Jc(191,`p`),Tk(192,`Para customizar o `),Jc(193,`em`),Tk(194,`label`),Zg(),Tk(195,`, pode ser enviado o objeto da seguinte forma:`),Zg(),Jc(196,`pre`)(197,`code`,22),Tk(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),Zg()(),Jc(199,`blockquote`)(200,`p`),Tk(201,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(202,`em`),Tk(203,`browser`),Zg(),Tk(204,` (pt, en, es).`),Zg()()()(),Jc(205,`tr`,8)(206,`td`,17)(207,`div`,10)(208,`span`,11),Tk(209,` message`),_u(210,`br`),Zg()()(),Jc(211,`td`,18)(212,`code`,19),Tk(213,`string`),Zg()(),Jc(214,`td`,12)(215,`p`),Tk(216,`Mensagem da caixa de diálogo.`),Zg(),Jc(217,`blockquote`)(218,`p`),Tk(219,`Pode-se informar um conteúdo HTML na mensagem.`),Zg()()()(),Jc(220,`tr`,8)(221,`td`,17)(222,`div`,10)(223,`span`,11),Tk(224,` ok`),_u(225,`br`),Zg()()(),Jc(226,`td`,18)(227,`code`,23),Tk(228,`Function`),Zg()(),Jc(229,`td`,12)(230,`em`)(231,`strong`),Tk(232,`(opcional)`),Zg()(),Jc(233,`p`),Tk(234,`Ação executada ao fechar o alerta pelo botão "Ok".`),Zg()()(),Jc(235,`tr`,8)(236,`td`,17)(237,`div`,10)(238,`span`,11),Tk(239,` title`),_u(240,`br`),Zg()()(),Jc(241,`td`,18)(242,`code`,19),Tk(243,`string`),Zg()(),Jc(244,`td`,12)(245,`p`),Tk(246,`Título da caixa de diálogo.`),Zg()()()(),Jc(247,`h4`,13)(248,`code`,5),Tk(249,`PoDialogConfirmOptions`),Zg()(),Jc(250,`div`,2)(251,`p`),Tk(252,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de confirmação do serviço po-dialog.`),Zg()(),Jc(253,`h4`,6),Tk(254,`Propriedades`),Zg(),Jc(255,`table`,14)(256,`tr`,15)(257,`th`,16),Tk(258,`Nome`),Zg(),Jc(259,`th`,16),Tk(260,`Tipo`),Zg(),Jc(261,`th`,16),Tk(262,`Descrição`),Zg()(),Jc(263,`tr`,8)(264,`td`,17)(265,`div`,10)(266,`span`,11),Tk(267,` cancel`),_u(268,`br`),Zg()()(),Jc(269,`td`,18)(270,`code`,23),Tk(271,`Function`),Zg()(),Jc(272,`td`,12)(273,`em`)(274,`strong`),Tk(275,`(opcional)`),Zg()(),Jc(276,`p`),Tk(277,`Ação de cancelamento da caixa de diálogo.`),Zg()()(),Jc(278,`tr`,8)(279,`td`,17)(280,`div`,10)(281,`span`,11),Tk(282,` close`),_u(283,`br`),Zg()()(),Jc(284,`td`,18)(285,`code`,23),Tk(286,`Function`),Zg()(),Jc(287,`td`,12)(288,`em`)(289,`strong`),Tk(290,`(opcional)`),Zg()(),Jc(291,`p`),Tk(292,`Ação de fechamento da caixa de diálogo.`),Zg()()(),Jc(293,`tr`,8)(294,`td`,17)(295,`div`,10)(296,`span`,11),Tk(297,` componentsSize`),_u(298,`br`),Zg()()(),Jc(299,`td`,18)(300,`code`,19),Tk(301,`string`),Zg()(),Jc(302,`td`,12)(303,`em`)(304,`strong`),Tk(305,`(opcional)`),Zg()(),Jc(306,`p`),Tk(307,`Define o tamanho dos componentes de formulário no dialog:`),Zg(),Jc(308,`ul`)(309,`li`)(310,`code`),Tk(311,`small`),Zg(),Tk(312,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(313,`li`)(314,`code`),Tk(315,`medium`),Zg(),Tk(316,`: aplica a medida medium de cada componente.`),Zg()(),Jc(317,`blockquote`)(318,`p`),Tk(319,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(320,`code`),Tk(321,`medium`),Zg(),Tk(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(323,`a`,20),Tk(324,`po-theme`),Zg(),Tk(325,`.`),Zg()()()(),Jc(326,`tr`,8)(327,`td`,17)(328,`div`,10)(329,`span`,11),Tk(330,` confirm`),_u(331,`br`),Zg()()(),Jc(332,`td`,18)(333,`code`,23),Tk(334,`Function`),Zg()(),Jc(335,`td`,12)(336,`p`),Tk(337,`Ação de confirmação da caixa de diálogo.`),Zg()()(),Jc(338,`tr`,8)(339,`td`,17)(340,`div`,10)(341,`span`,11),Tk(342,` literals`),_u(343,`br`),Zg()()(),Jc(344,`td`,18)(345,`code`,24),Tk(346,`PoDialogConfirmLiterals`),Zg()(),Jc(347,`td`,12)(348,`em`)(349,`strong`),Tk(350,`(opcional)`),Zg()(),Jc(351,`p`),Tk(352,`Objeto com as literais usadas no `),Jc(353,`code`),Tk(354,`po-dialog`),Zg(),Tk(355,` do tipo confirmação.`),Zg(),Jc(356,`p`),Tk(357,`Para customizar os `),Jc(358,`em`),Tk(359,`labels`),Zg(),Tk(360,`, pode ser enviado o objeto da seguinte forma:`),Zg(),Jc(361,`pre`)(362,`code`,22),Tk(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),Zg()(),Jc(364,`blockquote`)(365,`p`),Tk(366,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(367,`em`),Tk(368,`browser`),Zg(),Tk(369,` (pt, en, es).`),Zg()()()(),Jc(370,`tr`,8)(371,`td`,17)(372,`div`,10)(373,`span`,11),Tk(374,` message`),_u(375,`br`),Zg()()(),Jc(376,`td`,18)(377,`code`,19),Tk(378,`string`),Zg()(),Jc(379,`td`,12)(380,`p`),Tk(381,`Mensagem da caixa de diálogo.`),Zg(),Jc(382,`blockquote`)(383,`p`),Tk(384,`Pode-se informar um conteúdo HTML na mensagem.`),Zg()()()(),Jc(385,`tr`,8)(386,`td`,17)(387,`div`,10)(388,`span`,11),Tk(389,` title`),_u(390,`br`),Zg()()(),Jc(391,`td`,18)(392,`code`,19),Tk(393,`string`),Zg()(),Jc(394,`td`,12)(395,`p`),Tk(396,`Título da caixa de diálogo.`),Zg()()()()())},encapsulation:2,changeDetection:1})}return a})();function Te(a,ke){if(a&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-dialog-basic-view`)(2,`sample-po-dialog-labs-view`)(3,`sample-po-dialog-cancel-credit-card-view`),Zg()}if(a&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dialog`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Te,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-dialog-doc`),Zg()()()),l&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,se,me,ge,ue],encapsulation:2,changeDetection:1})}return a})()}];var Ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[WV.forChild(Oe),WV]})}return a})();var tt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[M,Ce]})}return a})();export{tt as DocPoDialogModule};