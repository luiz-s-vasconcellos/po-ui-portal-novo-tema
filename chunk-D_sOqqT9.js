import{m as P,p as M}from"./main-OAHE3DMQ.js";import{Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Ni as Wb,Pr as I,Qn as AZ,Tr as G0,Vi as ZL,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,_n as q4,ar as B_,ca as ge$1,ea as de$1,er as Ab,fn as oi,g as Du,ii as PZ,it as Ru,jr as H_,li as QL,nt as R4,pa as i1,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var de=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,n){l&1&&_u(0,`po-switch`,0)},dependencies:[R4],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-switch-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-basic/sample-po-switch-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-basic/sample-po-switch-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Switch Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-switch-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:Du.Left},{label:`Right`,value:Du.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let b=KO();Jc(0,`po-switch`,1),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.switch,r)||(n.switch=r),H_(r)}),_t(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.label,r)||(n.label=r),H_(r)}),Kg(),Jc(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.help,r)||(n.help=r),H_(r)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.helperText,r)||(n.helperText=r),H_(r)}),Kg(),Jc(11,`po-input`,8),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.labelOff,r)||(n.labelOff=r),H_(r)}),Kg(),Jc(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.labelOn,r)||(n.labelOn=r),H_(r)}),Kg(),Jc(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),H_(r)}),Kg(),Jc(14,`po-radio-group`,11),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.labelPosition,r)||(n.labelPosition=r),H_(r)}),Kg(),Jc(15,`po-checkbox-group`,12),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.properties,r)||(n.properties=r),H_(r)}),Kg(),Jc(16,`po-radio-group`,13),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.size,r)||(n.size=r),H_(r)}),Kg(),Jc(17,`div`,2)(18,`po-button`,14),_t(`p-click`,function(){return n.restore()}),Kg()()()}l&2&&(Kb(`ngModel`,n.switch),Ab(`p-helper`,n.helperText)(`p-disabled`,n.properties.includes(`disabled`))(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-field-error-message`,n.fieldErrorMessage)(`p-format-model`,n.properties.includes(`formatModel`))(`p-help`,n.help)(`p-hide-label-status`,n.properties.includes(`hideLabelStatus`))(`p-invalid-value`,n.properties?.includes(`invalidValue`))(`p-label`,n.label)(`p-label-off`,n.labelOff)(`p-label-on`,n.labelOn)(`p-label-position`,n.labelPosition)(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-loading`,n.properties.includes(`loading`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),q0(),wg(3),Ab(`p-value`,n.switch),wg(),Ab(`p-value`,n.event),wg(4),Kb(`ngModel`,n.label),q0(),wg(),Kb(`ngModel`,n.help),q0(),wg(),Kb(`ngModel`,n.helperText),q0(),wg(),Kb(`ngModel`,n.labelOff),q0(),wg(),Kb(`ngModel`,n.labelOn),q0(),wg(),Kb(`ngModel`,n.fieldErrorMessage),q0(),wg(),Kb(`ngModel`,n.labelPosition),Ab(`p-options`,n.labelPositionOptions),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-switch-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-labs/sample-po-switch-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-labs/sample-po-switch-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Switch Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-switch-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="properties?.includes('invalidValue')"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  helperText: string;
  event: string;
  fieldErrorMessage: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'invalidValue', label: 'Invalid Value is On/True' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
    this.fieldErrorMessage = '';
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification=p(Ru);labelPosition=Du.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,n){if(l&1){let b=KO();Jc(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),_u(4,`po-table`,3),Jc(5,`po-switch`,4),G0(),Zb(`ngModelChange`,function(r){return U_(b),Rk(n.serviceFee,r)||(n.serviceFee=r),H_(r)}),_t(`p-change`,function(){return n.addServiceFee()}),Kg(),Jc(6,`div`,5)(7,`div`,6),Mk(8,`Total value`),Kg(),Jc(9,`span`,7),Mk(10,`R$`),Kg(),Jc(11,`span`,8),Mk(12),Kg()(),Jc(13,`div`,1)(14,`po-button`,9),_t(`p-click`,function(){return n.confirm()}),Kg()()()()()}l&2&&(wg(4),Ab(`p-columns`,n.columns)(`p-items`,n.items)(`p-hide-table-search`,!1),wg(),Kb(`ngModel`,n.serviceFee),Ab(`p-label-position`,n.labelPosition),q0(),wg(7),Wb(n.totalAmount))},dependencies:[xZ,RZ,AZ,QL,WL,oi,R4,q4,yae],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-switch-order`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-order/sample-po-switch-order.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-order/sample-po-switch-order.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Switch - Order Summary`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-switch-order`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-switch-order/sample-po-switch-order.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` totalAmount `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-switch-order/sample-po-switch-order.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  private poNotification = inject(PoNotificationService);

  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poNotification=p(Ru);formBuilder=p(PZ);formOrderSummary;labelPosition=Du.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let p=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=p?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),_u(3,`po-table`,3),Jc(4,`po-switch`,4),G0(),_t(`p-change`,function(){return n.addServiceFee()}),Kg(),Jc(5,`div`,5)(6,`div`,6),Mk(7,`Total value`),Kg(),Jc(8,`span`,7),Mk(9,`R$`),Kg(),Jc(10,`span`,8),Mk(11),Kg()(),Jc(12,`div`,0)(13,`po-button`,9),_t(`p-click`,function(){return n.confirm()}),Kg()()()()()),l&2&&(wg(2),Ab(`formGroup`,n.formOrderSummary),wg(),Ab(`p-columns`,n.columns)(`p-items`,n.items)(`p-hide-table-search`,!1),wg(),Ab(`p-label-position`,n.labelPosition),q0(),wg(7),Wb(n.totalAmount))},dependencies:[xZ,RZ,AZ,ZL,i1,oi,R4,q4,yae],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-switch-order-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Switch - Order Summary Reactive Form`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-switch-order-reactive-form`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` totalAmount `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-switch-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-format-model`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-label-status`,1,`docs-api-properties-row`],[`id`,`prop-p-invalid-value`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-off`,1,`docs-api-properties-row`],[`id`,`prop-p-label-on`,1,`docs-api-properties-row`],[`id`,`prop-p-label-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`enum-po-switch-label-position`,1,`docs-api-class-name`],[`id`,`enum-po-switch-label-position-right`,1,`docs-api-properties-row`],[`id`,`enum-po-switch-label-position-left`,1,`docs-api-properties-row`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoSwitchComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,` O componente `),Jc(24,`code`),Mk(25,`po-switch`),Kg(),Mk(26,` é um `),Jc(27,`a`,6),Mk(28,`checkbox`),Kg(),Mk(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),Kg(),Jc(30,`p`),Mk(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),Kg(),Jc(32,`p`),Mk(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),Kg(),Jc(34,`blockquote`)(35,`p`),Mk(36,`O componente não altera o valor incial informado no `),Jc(37,`em`),Mk(38,`model`),Kg(),Mk(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),Kg()(),Jc(40,`h4`),Mk(41,`Boas práticas`),Kg(),Jc(42,`ul`)(43,`li`),Mk(44,`Evite `),Jc(45,`code`),Mk(46,`labels`),Kg(),Mk(47,` extensos que quebram o layout do `),Jc(48,`code`),Mk(49,`po-switch`),Kg(),Mk(50,`, use `),Jc(51,`code`),Mk(52,`labels`),Kg(),Mk(53,` diretos, curtos e intuitivos.`),Kg()(),Jc(54,`h4`),Mk(55,`Acessibilidade tratada no componente`),Kg(),Jc(56,`p`),Mk(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Jc(58,`ul`)(59,`li`),Mk(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),Jc(61,`a`,7),Mk(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),Kg()(),Jc(63,`li`),Mk(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(65,`a`,8),Mk(66,`WCAG 2.4.12: Focus Appearance`),Kg()()(),Jc(67,`h4`),Mk(68,`Tokens customizáveis`),Kg(),Jc(69,`p`),Mk(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(71,`blockquote`)(72,`p`),Mk(73,`Para maiores informações, acesse o guia `),Jc(74,`a`,9),Mk(75,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(76,`.`),Kg()(),Jc(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),Mk(81,`Propriedade`),Kg(),Jc(82,`th`),Mk(83,`Descrição`),Kg(),Jc(84,`th`),Mk(85,`Valor Padrão`),Kg()()(),Jc(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),Mk(90,`Unchecked`),Kg()(),_u(91,`td`)(92,`td`),Kg(),Jc(93,`tr`)(94,`td`)(95,`code`),Mk(96,`--color-unchecked`),Kg()(),Jc(97,`td`),Mk(98,`Cor principal no estado desmarcado`),Kg(),Jc(99,`td`)(100,`code`),Mk(101,`var(--color-neutral-light-00)`),Kg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Mk(105,`--border-color`),Kg()(),Jc(106,`td`),Mk(107,`Cor da borda`),Kg(),Jc(108,`td`)(109,`code`),Mk(110,`var(--color-neutral-dark-70)`),Kg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Mk(114,`--track-unchecked`),Kg()(),Jc(115,`td`),Mk(116,`Cor principal da faixa no estado desmarcado`),Kg(),Jc(117,`td`)(118,`code`),Mk(119,`var(--color-neutral-light-20)`),Kg()()(),Jc(120,`tr`)(121,`td`)(122,`strong`),Mk(123,`Checked`),Kg()(),_u(124,`td`)(125,`td`),Kg(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--color-checked`),Kg()(),Jc(130,`td`),Mk(131,`Cor principal no estado selecionado`),Kg(),Jc(132,`td`)(133,`code`),Mk(134,`var(--color-action-default)`),Kg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Mk(138,`--track-checked`),Kg()(),Jc(139,`td`),Mk(140,`Cor da faixa no estado selecionado`),Kg(),Jc(141,`td`)(142,`code`),Mk(143,`var(--color-brand-01-light)`),Kg()()(),Jc(144,`tr`)(145,`td`)(146,`strong`),Mk(147,`Hover`),Kg()(),_u(148,`td`)(149,`td`),Kg(),Jc(150,`tr`)(151,`td`)(152,`code`),Mk(153,`--color-unchecked-hover`),Kg()(),Jc(154,`td`),Mk(155,`Cor principal no estado hover desmarcado`),Kg(),Jc(156,`td`)(157,`code`),Mk(158,`var(--color-action-pressed)`),Kg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Mk(162,`--color-checked-hover`),Kg()(),Jc(163,`td`),Mk(164,`Cor principal no estado hover marcado`),Kg(),Jc(165,`td`)(166,`code`),Mk(167,`var(--color-action-pressed)`),Kg()()(),Jc(168,`tr`)(169,`td`)(170,`strong`),Mk(171,`Focused`),Kg()(),_u(172,`td`)(173,`td`),Kg(),Jc(174,`tr`)(175,`td`)(176,`code`),Mk(177,`--outline-color-focused`),Kg()(),Jc(178,`td`),Mk(179,`Cor do outline do estado de focus`),Kg(),Jc(180,`td`)(181,`code`),Mk(182,`var(--color-action-focus)`),Kg()()(),Jc(183,`tr`)(184,`td`)(185,`strong`),Mk(186,`Disabled`),Kg()(),_u(187,`td`)(188,`td`),Kg(),Jc(189,`tr`)(190,`td`)(191,`code`),Mk(192,`--color-unchecked-disabled`),Kg()(),Jc(193,`td`),Mk(194,`Cor principal do disabled no estado desmarcado`),Kg(),Jc(195,`td`)(196,`code`),Mk(197,`var(--color-neutral-light-20)`),Kg()()(),Jc(198,`tr`)(199,`td`)(200,`code`),Mk(201,`--color-checked-disabled`),Kg()(),Jc(202,`td`),Mk(203,`Cor principal do disabled no estado marcado`),Kg(),Jc(204,`td`)(205,`code`),Mk(206,`var(--color-action-disabled)`),Kg()()()()()(),Jc(207,`div`,10)(208,`h4`,11),Mk(209,`Seletor`),Kg(),Jc(210,`pre`,12),Mk(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-invalid-value="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-switch>
`),Kg()(),Jc(212,`h4`,13),Mk(213,`Propriedades`),Kg(),Jc(214,`table`,14)(215,`tr`,15)(216,`th`,16),Mk(217,`Nome`),Kg(),Jc(218,`th`,16),Mk(219,`Tipo`),Kg(),Jc(220,`th`,16),Mk(221,`Padrão`),Kg(),Jc(222,`th`,16),Mk(223,`Descrição`),Kg()(),Jc(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),Mk(228,` (p-additional-help)`),_u(229,`br`),Kg()(),Jc(230,`div`,21),Mk(231,`Deprecated`),Kg()(),Jc(232,`td`,22)(233,`code`,23),Mk(234,`EventEmitter`),Kg()(),Jc(235,`td`,24),Mk(236,`-`),Kg(),Jc(237,`td`,25)(238,`em`)(239,`strong`),Mk(240,`(opcional)`),Kg()(),Jc(241,`p`),Mk(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(243,`blockquote`)(244,`p`),Mk(245,`Essa propriedade está `),Jc(246,`strong`),Mk(247,`depreciada`),Kg(),Mk(248,` e será removida na versão `),Jc(249,`code`),Mk(250,`23.x.x`),Kg(),Mk(251,`. Recomendamos utilizar a propriedade `),Jc(252,`code`),Mk(253,`p-helper`),Kg(),Mk(254,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(255,`tr`,26)(256,`td`,18)(257,`div`,27)(258,`span`,28),Mk(259,` p-additional-help-tooltip`),_u(260,`br`),Kg()(),Jc(261,`div`,21),Mk(262,`Deprecated`),Kg()(),Jc(263,`td`,22)(264,`code`,29),Mk(265,`string`),Kg()(),Jc(266,`td`,24),Mk(267,`-`),Kg(),Jc(268,`td`,25)(269,`em`)(270,`strong`),Mk(271,`(opcional)`),Kg()(),Jc(272,`p`),Mk(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(274,`code`),Mk(275,`po-helper`),Kg(),Mk(276,`.
`),Jc(277,`strong`),Mk(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(279,`blockquote`)(280,`p`),Mk(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(282,`blockquote`)(283,`p`),Mk(284,`Essa propriedade está `),Jc(285,`strong`),Mk(286,`depreciada`),Kg(),Mk(287,` e será removida na versão `),Jc(288,`code`),Mk(289,`23.x.x`),Kg(),Mk(290,`. Recomendamos utilizar a propriedade `),Jc(291,`code`),Mk(292,`p-helper`),Kg(),Mk(293,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(294,`tr`,30)(295,`td`,18)(296,`div`,27)(297,`span`,28),Mk(298,` p-append-in-body`),_u(299,`br`),Kg()()(),Jc(300,`td`,22)(301,`code`,31),Mk(302,`boolean`),Kg()(),Jc(303,`td`,24)(304,`p`)(305,`code`),Mk(306,`false`),Kg()()(),Jc(307,`td`,25)(308,`em`)(309,`strong`),Mk(310,`(opcional)`),Kg()(),Jc(311,`p`),Mk(312,`Define que o popover (`),Jc(313,`code`),Mk(314,`p-helper`),Kg(),Mk(315,` e/ou `),Jc(316,`code`),Mk(317,`p-error-limit`),Kg(),Mk(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(319,`blockquote`)(320,`p`),Mk(321,`Quando utilizado com `),Jc(322,`code`),Mk(323,`p-helper`),Kg(),Mk(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(325,`tr`,32)(326,`td`,18)(327,`div`,19)(328,`span`,20),Mk(329,` (p-change)`),_u(330,`br`),Kg()()(),Jc(331,`td`,22)(332,`code`,23),Mk(333,`EventEmitter`),Kg()(),Jc(334,`td`,24),Mk(335,`-`),Kg(),Jc(336,`td`,25)(337,`em`)(338,`strong`),Mk(339,`(opcional)`),Kg()(),Jc(340,`p`),Mk(341,`Evento disparado ao alterar valor do campo.`),Kg()()(),Jc(342,`tr`,33)(343,`td`,18)(344,`div`,19)(345,`span`,20),Mk(346,` (p-change-model)`),_u(347,`br`),Kg()()(),Jc(348,`td`,22)(349,`code`,23),Mk(350,`EventEmitter`),Kg()(),Jc(351,`td`,24),Mk(352,`-`),Kg(),Jc(353,`td`,25)(354,`em`)(355,`strong`),Mk(356,`(opcional)`),Kg()(),Jc(357,`p`),Mk(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(359,`code`),Mk(360,`setValue`),Kg(),Mk(361,`, `),Jc(362,`code`),Mk(363,`patchValue`),Kg(),Mk(364,`, carregamento assíncrono).`),Kg(),Jc(365,`p`),Mk(366,`Diferentemente do `),Jc(367,`code`),Mk(368,`p-change`),Kg(),Mk(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(370,`code`),Mk(371,`p-change-model`),Kg(),Mk(372,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(373,`p`),Mk(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(375,`tr`,34)(376,`td`,18)(377,`div`,27)(378,`span`,28),Mk(379,` p-compact-label`),_u(380,`br`),Kg()()(),Jc(381,`td`,22)(382,`code`,31),Mk(383,`boolean`),Kg()(),Jc(384,`td`,24)(385,`p`)(386,`code`),Mk(387,`false`),Kg()()(),Jc(388,`td`,25)(389,`em`)(390,`strong`),Mk(391,`(opcional)`),Kg()(),Jc(392,`p`),Mk(393,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(394,`p`),Mk(395,`Quando habilitado (`),Jc(396,`code`),Mk(397,`true`),Kg(),Mk(398,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(399,`ul`)(400,`li`)(401,`code`),Mk(402,`po-label`),Kg()(),Jc(403,`li`)(404,`code`),Mk(405,`p-requirement (showRequired)`),Kg()(),Jc(406,`li`)(407,`code`),Mk(408,`po-helper`),Kg()()(),Jc(409,`p`),Mk(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(411,`p`),Mk(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(413,`ul`)(414,`li`)(415,`code`),Mk(416,`--field-container-title-justify`),Kg()(),Jc(417,`li`)(418,`code`),Mk(419,`--field-container-title-flex`),Kg()()(),Jc(420,`p`),Mk(421,`Exemplo:`),Kg(),Jc(422,`pre`)(423,`code`),Mk(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(425,`p`),Mk(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(427,`tr`,35)(428,`td`,18)(429,`div`,27)(430,`span`,28),Mk(431,` p-disabled`),_u(432,`br`),Kg()()(),Jc(433,`td`,22)(434,`code`,31),Mk(435,`boolean`),Kg()(),Jc(436,`td`,24)(437,`p`)(438,`code`),Mk(439,`false`),Kg()()(),Jc(440,`td`,25)(441,`em`)(442,`strong`),Mk(443,`(opcional)`),Kg()(),Jc(444,`p`),Mk(445,`Indica se o campo será desabilitado.`),Kg()()(),Jc(446,`tr`,36)(447,`td`,18)(448,`div`,27)(449,`span`,28),Mk(450,` p-error-limit`),_u(451,`br`),Kg()()(),Jc(452,`td`,22)(453,`code`,31),Mk(454,`boolean`),Kg()(),Jc(455,`td`,24)(456,`p`)(457,`code`),Mk(458,`false`),Kg()()(),Jc(459,`td`,25)(460,`em`)(461,`strong`),Mk(462,`(opcional)`),Kg()(),Jc(463,`p`),Mk(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(465,`blockquote`)(466,`p`),Mk(467,`Caso essa propriedade seja definida como `),Jc(468,`code`),Mk(469,`true`),Kg(),Mk(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(471,`tr`,37)(472,`td`,18)(473,`div`,27)(474,`span`,28),Mk(475,` p-field-error-message`),_u(476,`br`),Kg()()(),Jc(477,`td`,22)(478,`code`,29),Mk(479,`string`),Kg()(),Jc(480,`td`,24),Mk(481,`-`),Kg(),Jc(482,`td`,25)(483,`em`)(484,`strong`),Mk(485,`(opcional)`),Kg()(),Jc(486,`p`),Mk(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),Kg()()(),Jc(488,`tr`,38)(489,`td`,18)(490,`div`,27)(491,`span`,28),Mk(492,` p-format-model`),_u(493,`br`),Kg()()(),Jc(494,`td`,22)(495,`code`,31),Mk(496,`boolean`),Kg()(),Jc(497,`td`,24)(498,`p`)(499,`code`),Mk(500,`false`),Kg()()(),Jc(501,`td`,25)(502,`em`)(503,`strong`),Mk(504,`(opcional)`),Kg()(),Jc(505,`p`),Mk(506,`Indica se o `),Jc(507,`code`),Mk(508,`model`),Kg(),Mk(509,` receberá o valor formatado pelas propriedades `),Jc(510,`code`),Mk(511,`p-label-on`),Kg(),Mk(512,` e `),Jc(513,`code`),Mk(514,`p-label-off`),Kg(),Mk(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Kg(),Jc(516,`blockquote`)(517,`p`),Mk(518,`Por padrão será atribuído `),Jc(519,`code`),Mk(520,`false`),Kg(),Mk(521,`.`),Kg()()()(),Jc(522,`tr`,39)(523,`td`,18)(524,`div`,27)(525,`span`,28),Mk(526,` p-help`),_u(527,`br`),Kg()()(),Jc(528,`td`,22)(529,`code`,29),Mk(530,`string`),Kg()(),Jc(531,`td`,24),Mk(532,`-`),Kg(),Jc(533,`td`,25)(534,`p`),Mk(535,`Texto de apoio para o campo.`),Kg()()(),Jc(536,`tr`,40)(537,`td`,18)(538,`div`,27)(539,`span`,28),Mk(540,` p-hide-label-status`),_u(541,`br`),Kg()()(),Jc(542,`td`,22)(543,`code`,31),Mk(544,`boolean`),Kg()(),Jc(545,`td`,24)(546,`p`)(547,`code`),Mk(548,`false`),Kg()()(),Jc(549,`td`,25)(550,`em`)(551,`strong`),Mk(552,`(opcional)`),Kg()(),Jc(553,`p`),Mk(554,`Indica se o status do `),Jc(555,`code`),Mk(556,`model`),Kg(),Mk(557,` será escondido visualmente ao lado do switch.`),Kg(),Jc(558,`blockquote`)(559,`p`),Mk(560,`Por padrão será atribuído `),Jc(561,`code`),Mk(562,`false`),Kg(),Mk(563,`.`),Kg()()()(),Jc(564,`tr`,41)(565,`td`,18)(566,`div`,27)(567,`span`,28),Mk(568,` p-invalid-value`),_u(569,`br`),Kg()()(),Jc(570,`td`,22)(571,`code`,31),Mk(572,`boolean`),Kg()(),Jc(573,`td`,24)(574,`p`)(575,`code`),Mk(576,`false`),Kg()()(),Jc(577,`td`,25)(578,`em`)(579,`strong`),Mk(580,`(opcional)`),Kg()(),Jc(581,`p`),Mk(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Jc(583,`code`),Mk(584,`p-field-error-message`),Kg(),Mk(585,`.`),Kg(),Jc(586,`blockquote`)(587,`p`),Mk(588,`Caso essa propriedade seja definida como `),Jc(589,`code`),Mk(590,`true`),Kg(),Mk(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Kg()()()(),Jc(592,`tr`,42)(593,`td`,18)(594,`div`,19)(595,`span`,20),Mk(596,` (p-keydown)`),_u(597,`br`),Kg()()(),Jc(598,`td`,22)(599,`code`,23),Mk(600,`EventEmitter`),Kg()(),Jc(601,`td`,24),Mk(602,`-`),Kg(),Jc(603,`td`,25)(604,`em`)(605,`strong`),Mk(606,`(opcional)`),Kg()(),Jc(607,`p`),Mk(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(609,`code`),Mk(610,`KeyboardEvent`),Kg(),Mk(611,` com informações sobre a tecla.`),Kg()()(),Jc(612,`tr`,43)(613,`td`,18)(614,`div`,27)(615,`span`,28),Mk(616,` p-label`),_u(617,`br`),Kg()()(),Jc(618,`td`,22)(619,`code`,29),Mk(620,`string`),Kg()(),Jc(621,`td`,24),Mk(622,`-`),Kg(),Jc(623,`td`,25)(624,`p`),Mk(625,`Rótulo exibido pelo componente.`),Kg()()(),Jc(626,`tr`,44)(627,`td`,18)(628,`div`,27)(629,`span`,28),Mk(630,` p-label-off`),_u(631,`br`),Kg()()(),Jc(632,`td`,22)(633,`code`,29),Mk(634,`string`),Kg()(),Jc(635,`td`,24)(636,`p`)(637,`code`),Mk(638,`false`),Kg()()(),Jc(639,`td`,25)(640,`p`),Mk(641,`Texto exibido quando o valor do componente for `),Jc(642,`code`),Mk(643,`false`),Kg(),Mk(644,`.`),Kg()()(),Jc(645,`tr`,45)(646,`td`,18)(647,`div`,27)(648,`span`,28),Mk(649,` p-label-on`),_u(650,`br`),Kg()()(),Jc(651,`td`,22)(652,`code`,29),Mk(653,`string`),Kg()(),Jc(654,`td`,24)(655,`p`)(656,`code`),Mk(657,`true`),Kg()()(),Jc(658,`td`,25)(659,`p`),Mk(660,`Texto exibido quando o valor do componente for `),Jc(661,`code`),Mk(662,`true`),Kg(),Mk(663,`.`),Kg()()(),Jc(664,`tr`,46)(665,`td`,18)(666,`div`,27)(667,`span`,28),Mk(668,` p-label-position`),_u(669,`br`),Kg()()(),Jc(670,`td`,22)(671,`code`,47),Mk(672,`PoSwitchLabelPosition`),Kg()(),Jc(673,`td`,24),Mk(674,`-`),Kg(),Jc(675,`td`,25)(676,`em`)(677,`strong`),Mk(678,`(opcional)`),Kg()(),Jc(679,`p`),Mk(680,`Posição de exibição do rótulo que fica ao lado do switch.`),Kg(),Jc(681,`blockquote`)(682,`p`),Mk(683,`Por padrão exibe à direita.`),Kg()()()(),Jc(684,`tr`,48)(685,`td`,18)(686,`div`,27)(687,`span`,28),Mk(688,` p-label-text-wrap`),_u(689,`br`),Kg()()(),Jc(690,`td`,22)(691,`code`,31),Mk(692,`boolean`),Kg()(),Jc(693,`td`,24)(694,`p`)(695,`code`),Mk(696,`false`),Kg()()(),Jc(697,`td`,25)(698,`em`)(699,`strong`),Mk(700,`(opcional)`),Kg()(),Jc(701,`p`),Mk(702,`Habilita a quebra automática do texto da propriedade `),Jc(703,`code`),Mk(704,`p-label`),Kg(),Mk(705,`. Quando `),Jc(706,`code`),Mk(707,`p-label-text-wrap`),Kg(),Mk(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(709,`tr`,49)(710,`td`,18)(711,`div`,27)(712,`span`,28),Mk(713,` p-loading`),_u(714,`br`),Kg()()(),Jc(715,`td`,22)(716,`code`,31),Mk(717,`boolean`),Kg()(),Jc(718,`td`,24)(719,`p`)(720,`code`),Mk(721,`false`),Kg()()(),Jc(722,`td`,25)(723,`em`)(724,`strong`),Mk(725,`(opcional)`),Kg()(),Jc(726,`p`),Mk(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),Kg()()(),Jc(728,`tr`,50)(729,`td`,18)(730,`div`,27)(731,`span`,28),Mk(732,` name`),_u(733,`br`),Kg()()(),Jc(734,`td`,22)(735,`code`,29),Mk(736,`string`),Kg()(),Jc(737,`td`,24),Mk(738,`-`),Kg(),Jc(739,`td`,25)(740,`p`),Mk(741,`Nome do componente.`),Kg()()(),Jc(742,`tr`,51)(743,`td`,18)(744,`div`,27)(745,`span`,28),Mk(746,` p-helper`),_u(747,`br`),Kg()()(),Jc(748,`td`,22)(749,`code`,52),Mk(750,`PoHelperOptions `),Kg(),Jc(751,`code`,29),Mk(752,` string`),Kg()(),Jc(753,`td`,24),Mk(754,`-`),Kg(),Jc(755,`td`,25)(756,`em`)(757,`strong`),Mk(758,`(opcional)`),Kg()(),Jc(759,`p`),Mk(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(761,`code`),Mk(762,`p-label`),Kg(),Mk(763,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(764,`code`),Mk(765,`p-label`),Kg(),Mk(766,`.`),Kg(),Jc(767,`blockquote`)(768,`p`),Mk(769,`Para mais informações acesse: `),Jc(770,`a`,53),Mk(771,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(772,`.`),Kg()(),Jc(773,`blockquote`)(774,`p`),Mk(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(776,`code`),Mk(777,`p-additional-help-tooltip`),Kg(),Mk(778,` e `),Jc(779,`code`),Mk(780,`p-additional-help`),Kg(),Mk(781,`) será ignorado.`),Kg()()()(),Jc(782,`tr`,54)(783,`td`,18)(784,`div`,27)(785,`span`,28),Mk(786,` p-size`),_u(787,`br`),Kg()()(),Jc(788,`td`,22)(789,`code`,29),Mk(790,`string`),Kg()(),Jc(791,`td`,24)(792,`p`)(793,`code`),Mk(794,`medium`),Kg()()(),Jc(795,`td`,25)(796,`em`)(797,`strong`),Mk(798,`(opcional)`),Kg()(),Jc(799,`p`),Mk(800,`Define o tamanho do componente:`),Kg(),Jc(801,`ul`)(802,`li`)(803,`code`),Mk(804,`small`),Kg(),Mk(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),Kg(),Jc(806,`li`)(807,`code`),Mk(808,`medium`),Kg(),Mk(809,`: altura de 24px.`),Kg()(),Jc(810,`blockquote`)(811,`p`),Mk(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(813,`code`),Mk(814,`medium`),Kg(),Mk(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(816,`a`,55),Mk(817,`po-theme`),Kg(),Mk(818,`.`),Kg()()()()(),Jc(819,`h3`,13),Mk(820,`Métodos`),Kg(),Jc(821,`table`,56)(822,`tr`,57)(823,`th`,58)(824,`div`,27)(825,`h4`)(826,`span`,28),Mk(827,` showAdditionalHelp `),Kg()()()()(),Jc(828,`tr`,25)(829,`td`,25)(830,`p`),Mk(831,`Método que exibe `),Jc(832,`code`),Mk(833,`p-helper`),Kg(),Mk(834,` ou executa a ação definida em `),Jc(835,`code`),Mk(836,`p-helper{eventOnClick}`),Kg(),Mk(837,` ou em `),Jc(838,`code`),Mk(839,`p-additionalHelp`),Kg(),Mk(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(841,`code`),Mk(842,`p-keydown`),Kg(),Mk(843,`.`),Kg(),Jc(844,`blockquote`)(845,`p`),Mk(846,`Exibe ou oculta o conteúdo do componente `),Jc(847,`code`),Mk(848,`po-helper`),Kg(),Mk(849,` quando o componente estiver com foco.`),Kg()(),Jc(850,`pre`)(851,`code`),Mk(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Kg()(),Jc(853,`pre`)(854,`code`),Mk(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(856,`br`),Jc(857,`table`,59)(858,`tr`,57)(859,`th`,58)(860,`div`,27)(861,`h4`)(862,`span`,28),Mk(863,` focus `),Kg()()()()(),Jc(864,`tr`,25)(865,`td`,25)(866,`p`),Mk(867,`Função que atribui foco ao componente.`),Kg(),Jc(868,`p`),Mk(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(870,`pre`)(871,`code`),Mk(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),Kg()()()()(),_u(873,`br`),Jc(874,`table`,56)(875,`tr`,57)(876,`th`,58)(877,`div`,27)(878,`h4`)(879,`span`,28),Mk(880,` showAdditionalHelp `),Kg()()()()(),Jc(881,`tr`,25)(882,`td`,25)(883,`p`),Mk(884,`Método que exibe `),Jc(885,`code`),Mk(886,`p-helper`),Kg(),Mk(887,` ou executa a ação definida em `),Jc(888,`code`),Mk(889,`p-helper{eventOnClick}`),Kg(),Mk(890,` ou em `),Jc(891,`code`),Mk(892,`p-additionalHelp`),Kg(),Mk(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(894,`code`),Mk(895,`p-keydown`),Kg(),Mk(896,`.`),Kg(),Jc(897,`blockquote`)(898,`p`),Mk(899,`Exibe ou oculta o conteúdo do componente `),Jc(900,`code`),Mk(901,`po-helper`),Kg(),Mk(902,` quando o componente estiver com foco.`),Kg()(),Jc(903,`pre`)(904,`code`),Mk(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),Kg()(),Jc(906,`pre`)(907,`code`,60),Mk(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(909,`br`),Jc(910,`h3`),Mk(911,`Enums`),Kg(),Jc(912,`h4`,61)(913,`code`,5),Mk(914,`PoSwitchLabelPosition`),Kg()(),Jc(915,`div`,2)(916,`p`),Mk(917,`Enum para posicionar o label do valor do po-switch.`),Kg()(),Jc(918,`h4`,13),Mk(919,`Propriedades`),Kg(),Jc(920,`table`,14)(921,`tr`,15)(922,`th`,16),Mk(923,`Nome`),Kg(),Jc(924,`th`,16),Mk(925,`Descrição`),Kg()(),Jc(926,`tr`,62)(927,`td`,18)(928,`div`,27)(929,`span`,28),Mk(930,` Right`),_u(931,`br`),Kg()()(),Jc(932,`td`,25)(933,`p`),Mk(934,`Posiciona o label do lado esquerdo do switch.`),Kg()()(),Jc(935,`tr`,63)(936,`td`,18)(937,`div`,27)(938,`span`,28),Mk(939,` Left`),_u(940,`br`),Kg()()(),Jc(941,`td`,25)(942,`p`),Mk(943,`Posiciona o label do lado direito do switch.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Oe(a,Le){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-switch-basic-view`)(2,`sample-po-switch-labs-view`)(3,`sample-po-switch-order-view`)(4,`sample-po-switch-order-reactive-form-view`),Kg()),a&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var Fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Switch`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Switch · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0),LO(1,Oe,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-switch-doc`),Kg()()),l&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,me,ue,be,Ee,ge],encapsulation:2,changeDetection:1})}return a})()}];var xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[GV.forChild(Fe),GV]})}return a})();var xt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[M,xe]})}return a})();export{xt as DocPoSwitchModule};