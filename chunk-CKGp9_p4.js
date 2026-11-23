import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,At as Zte,Ca as j_,F as Joe,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,It as bae,Ji as ZL,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Qr as OZ,Ti as U_,Tr as Gb,W as Mze,Wi as YO,Wr as MZ,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,g as Du,ga as i1,gi as Rb,io as vt,j as I4,ki as V_,li as Qc,ra as de$1,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,tt as R4,vi as Sk,wn as q4,wr as GV,xi as Tk,xr as FO}from"./chunk-BQDTQO8h.js";var de=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,n){l&1&&vu(0,`po-switch`,0)},dependencies:[R4],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-switch-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-basic/sample-po-switch-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-basic/sample-po-switch-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Switch Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-switch-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:Du.Left},{label:`Right`,value:Du.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let b=YO();Qc(0,`po-switch`,1),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.switch,r)||(n.switch=r),U_(r)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3)(4,`po-info`,4),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.label,r)||(n.label=r),U_(r)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.help,r)||(n.help=r),U_(r)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.helperText,r)||(n.helperText=r),U_(r)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.labelOff,r)||(n.labelOff=r),U_(r)}),Kg(),Qc(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.labelOn,r)||(n.labelOn=r),U_(r)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),U_(r)}),Kg(),Qc(14,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.labelPosition,r)||(n.labelPosition=r),U_(r)}),Kg(),Qc(15,`po-checkbox-group`,12),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.properties,r)||(n.properties=r),U_(r)}),Kg(),Qc(16,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.size,r)||(n.size=r),U_(r)}),Kg(),Qc(17,`div`,2)(18,`po-button`,14),vt(`p-click`,function(){return n.restore()}),Kg()()()}l&2&&(Yb(`ngModel`,n.switch),Rb(`p-helper`,n.helperText)(`p-disabled`,n.properties.includes(`disabled`))(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-field-error-message`,n.fieldErrorMessage)(`p-format-model`,n.properties.includes(`formatModel`))(`p-help`,n.help)(`p-hide-label-status`,n.properties.includes(`hideLabelStatus`))(`p-invalid-value`,n.properties?.includes(`invalidValue`))(`p-label`,n.label)(`p-label-off`,n.labelOff)(`p-label-on`,n.labelOn)(`p-label-position`,n.labelPosition)(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-loading`,n.properties.includes(`loading`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),W0(),wg(3),Rb(`p-value`,n.switch),wg(),Rb(`p-value`,n.event),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.labelOff),W0(),wg(),Yb(`ngModel`,n.labelOn),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,n.labelPosition),Rb(`p-options`,n.labelPositionOptions),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,R4,Joe],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-switch-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-labs/sample-po-switch-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-labs/sample-po-switch-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Switch Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-switch-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-switch
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification=p(Ru);labelPosition=Du.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,n){if(l&1){let b=YO();Qc(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),vu(4,`po-table`,3),Qc(5,`po-switch`,4),z0(),Kb(`ngModelChange`,function(r){return B_(b),Tk(n.serviceFee,r)||(n.serviceFee=r),U_(r)}),vt(`p-change`,function(){return n.addServiceFee()}),Kg(),Qc(6,`div`,5)(7,`div`,6),Sk(8,`Total value`),Kg(),Qc(9,`span`,7),Sk(10,`R$`),Kg(),Qc(11,`span`,8),Sk(12),Kg()(),Qc(13,`div`,1)(14,`po-button`,9),vt(`p-click`,function(){return n.confirm()}),Kg()()()()()}l&2&&(wg(4),Rb(`p-columns`,n.columns)(`p-items`,n.items)(`p-hide-table-search`,!1),wg(),Yb(`ngModel`,n.serviceFee),Rb(`p-label-position`,n.labelPosition),W0(),wg(7),Gb(n.totalAmount))},dependencies:[AZ,MZ,TZ,QL,WL,oi,R4,q4,bae],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-switch-order`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-order/sample-po-switch-order.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-order/sample-po-switch-order.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Switch - Order Summary`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-switch-order`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-switch-order/sample-po-switch-order.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
        <span class="po-pull-right po-font-title">`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` totalAmount `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</span>
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-switch-order/sample-po-switch-order.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(29,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poNotification=p(Ru);formBuilder=p(OZ);formOrderSummary;labelPosition=Du.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let p=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=p?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),vu(3,`po-table`,3),Qc(4,`po-switch`,4),z0(),vt(`p-change`,function(){return n.addServiceFee()}),Kg(),Qc(5,`div`,5)(6,`div`,6),Sk(7,`Total value`),Kg(),Qc(8,`span`,7),Sk(9,`R$`),Kg(),Qc(10,`span`,8),Sk(11),Kg()(),Qc(12,`div`,0)(13,`po-button`,9),vt(`p-click`,function(){return n.confirm()}),Kg()()()()()),l&2&&(wg(2),Rb(`formGroup`,n.formOrderSummary),wg(),Rb(`p-columns`,n.columns)(`p-items`,n.items)(`p-hide-table-search`,!1),wg(),Rb(`p-label-position`,n.labelPosition),W0(),wg(7),Gb(n.totalAmount))},dependencies:[AZ,MZ,TZ,ZL,i1,oi,R4,q4,bae],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-switch-order-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Switch - Order Summary Reactive Form`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-switch-order-reactive-form`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
        <span class="po-pull-right po-font-title">`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` totalAmount `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(29,`hr`))},dependencies:[P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-switch-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-format-model`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-label-status`,1,`docs-api-properties-row`],[`id`,`prop-p-invalid-value`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-off`,1,`docs-api-properties-row`],[`id`,`prop-p-label-on`,1,`docs-api-properties-row`],[`id`,`prop-p-label-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`enum-po-switch-label-position`,1,`docs-api-class-name`],[`id`,`enum-po-switch-label-position-right`,1,`docs-api-properties-row`],[`id`,`enum-po-switch-label-position-left`,1,`docs-api-properties-row`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoSwitchComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,` O componente `),Qc(24,`code`),Sk(25,`po-switch`),Kg(),Sk(26,` é um `),Qc(27,`a`,6),Sk(28,`checkbox`),Kg(),Sk(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),Kg(),Qc(30,`p`),Sk(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),Kg(),Qc(32,`p`),Sk(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),Kg(),Qc(34,`blockquote`)(35,`p`),Sk(36,`O componente não altera o valor incial informado no `),Qc(37,`em`),Sk(38,`model`),Kg(),Sk(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),Kg()(),Qc(40,`h4`),Sk(41,`Boas práticas`),Kg(),Qc(42,`ul`)(43,`li`),Sk(44,`Evite `),Qc(45,`code`),Sk(46,`labels`),Kg(),Sk(47,` extensos que quebram o layout do `),Qc(48,`code`),Sk(49,`po-switch`),Kg(),Sk(50,`, use `),Qc(51,`code`),Sk(52,`labels`),Kg(),Sk(53,` diretos, curtos e intuitivos.`),Kg()(),Qc(54,`h4`),Sk(55,`Acessibilidade tratada no componente`),Kg(),Qc(56,`p`),Sk(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(58,`ul`)(59,`li`),Sk(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),Qc(61,`a`,7),Sk(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),Kg()(),Qc(63,`li`),Sk(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Qc(65,`a`,8),Sk(66,`WCAG 2.4.12: Focus Appearance`),Kg()()(),Qc(67,`h4`),Sk(68,`Tokens customizáveis`),Kg(),Qc(69,`p`),Sk(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(71,`blockquote`)(72,`p`),Sk(73,`Para maiores informações, acesse o guia `),Qc(74,`a`,9),Sk(75,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(76,`.`),Kg()(),Qc(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),Sk(81,`Propriedade`),Kg(),Qc(82,`th`),Sk(83,`Descrição`),Kg(),Qc(84,`th`),Sk(85,`Valor Padrão`),Kg()()(),Qc(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),Sk(90,`Unchecked`),Kg()(),vu(91,`td`)(92,`td`),Kg(),Qc(93,`tr`)(94,`td`)(95,`code`),Sk(96,`--color-unchecked`),Kg()(),Qc(97,`td`),Sk(98,`Cor principal no estado desmarcado`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--color-neutral-light-00)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`code`),Sk(105,`--border-color`),Kg()(),Qc(106,`td`),Sk(107,`Cor da borda`),Kg(),Qc(108,`td`)(109,`code`),Sk(110,`var(--color-neutral-dark-70)`),Kg()()(),Qc(111,`tr`)(112,`td`)(113,`code`),Sk(114,`--track-unchecked`),Kg()(),Qc(115,`td`),Sk(116,`Cor principal da faixa no estado desmarcado`),Kg(),Qc(117,`td`)(118,`code`),Sk(119,`var(--color-neutral-light-20)`),Kg()()(),Qc(120,`tr`)(121,`td`)(122,`strong`),Sk(123,`Checked`),Kg()(),vu(124,`td`)(125,`td`),Kg(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--color-checked`),Kg()(),Qc(130,`td`),Sk(131,`Cor principal no estado selecionado`),Kg(),Qc(132,`td`)(133,`code`),Sk(134,`var(--color-action-default)`),Kg()()(),Qc(135,`tr`)(136,`td`)(137,`code`),Sk(138,`--track-checked`),Kg()(),Qc(139,`td`),Sk(140,`Cor da faixa no estado selecionado`),Kg(),Qc(141,`td`)(142,`code`),Sk(143,`var(--color-brand-01-light)`),Kg()()(),Qc(144,`tr`)(145,`td`)(146,`strong`),Sk(147,`Hover`),Kg()(),vu(148,`td`)(149,`td`),Kg(),Qc(150,`tr`)(151,`td`)(152,`code`),Sk(153,`--color-unchecked-hover`),Kg()(),Qc(154,`td`),Sk(155,`Cor principal no estado hover desmarcado`),Kg(),Qc(156,`td`)(157,`code`),Sk(158,`var(--color-action-pressed)`),Kg()()(),Qc(159,`tr`)(160,`td`)(161,`code`),Sk(162,`--color-checked-hover`),Kg()(),Qc(163,`td`),Sk(164,`Cor principal no estado hover marcado`),Kg(),Qc(165,`td`)(166,`code`),Sk(167,`var(--color-action-pressed)`),Kg()()(),Qc(168,`tr`)(169,`td`)(170,`strong`),Sk(171,`Focused`),Kg()(),vu(172,`td`)(173,`td`),Kg(),Qc(174,`tr`)(175,`td`)(176,`code`),Sk(177,`--outline-color-focused`),Kg()(),Qc(178,`td`),Sk(179,`Cor do outline do estado de focus`),Kg(),Qc(180,`td`)(181,`code`),Sk(182,`var(--color-action-focus)`),Kg()()(),Qc(183,`tr`)(184,`td`)(185,`strong`),Sk(186,`Disabled`),Kg()(),vu(187,`td`)(188,`td`),Kg(),Qc(189,`tr`)(190,`td`)(191,`code`),Sk(192,`--color-unchecked-disabled`),Kg()(),Qc(193,`td`),Sk(194,`Cor principal do disabled no estado desmarcado`),Kg(),Qc(195,`td`)(196,`code`),Sk(197,`var(--color-neutral-light-20)`),Kg()()(),Qc(198,`tr`)(199,`td`)(200,`code`),Sk(201,`--color-checked-disabled`),Kg()(),Qc(202,`td`),Sk(203,`Cor principal do disabled no estado marcado`),Kg(),Qc(204,`td`)(205,`code`),Sk(206,`var(--color-action-disabled)`),Kg()()()()()(),Qc(207,`div`,10)(208,`h4`,11),Sk(209,`Seletor`),Kg(),Qc(210,`pre`,12),Sk(211,`<po-switch
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
`),Kg()(),Qc(212,`h4`,13),Sk(213,`Propriedades`),Kg(),Qc(214,`table`,14)(215,`tr`,15)(216,`th`,16),Sk(217,`Nome`),Kg(),Qc(218,`th`,16),Sk(219,`Tipo`),Kg(),Qc(220,`th`,16),Sk(221,`Padrão`),Kg(),Qc(222,`th`,16),Sk(223,`Descrição`),Kg()(),Qc(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),Sk(228,` (p-additional-help)`),vu(229,`br`),Kg()(),Qc(230,`div`,21),Sk(231,`Deprecated`),Kg()(),Qc(232,`td`,22)(233,`code`,23),Sk(234,`EventEmitter`),Kg()(),Qc(235,`td`,24),Sk(236,`-`),Kg(),Qc(237,`td`,25)(238,`em`)(239,`strong`),Sk(240,`(opcional)`),Kg()(),Qc(241,`p`),Sk(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(243,`blockquote`)(244,`p`),Sk(245,`Essa propriedade está `),Qc(246,`strong`),Sk(247,`depreciada`),Kg(),Sk(248,` e será removida na versão `),Qc(249,`code`),Sk(250,`23.x.x`),Kg(),Sk(251,`. Recomendamos utilizar a propriedade `),Qc(252,`code`),Sk(253,`p-helper`),Kg(),Sk(254,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(255,`tr`,26)(256,`td`,18)(257,`div`,27)(258,`span`,28),Sk(259,` p-additional-help-tooltip`),vu(260,`br`),Kg()(),Qc(261,`div`,21),Sk(262,`Deprecated`),Kg()(),Qc(263,`td`,22)(264,`code`,29),Sk(265,`string`),Kg()(),Qc(266,`td`,24),Sk(267,`-`),Kg(),Qc(268,`td`,25)(269,`em`)(270,`strong`),Sk(271,`(opcional)`),Kg()(),Qc(272,`p`),Sk(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(274,`code`),Sk(275,`po-helper`),Kg(),Sk(276,`.
`),Qc(277,`strong`),Sk(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(279,`blockquote`)(280,`p`),Sk(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(282,`blockquote`)(283,`p`),Sk(284,`Essa propriedade está `),Qc(285,`strong`),Sk(286,`depreciada`),Kg(),Sk(287,` e será removida na versão `),Qc(288,`code`),Sk(289,`23.x.x`),Kg(),Sk(290,`. Recomendamos utilizar a propriedade `),Qc(291,`code`),Sk(292,`p-helper`),Kg(),Sk(293,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(294,`tr`,30)(295,`td`,18)(296,`div`,27)(297,`span`,28),Sk(298,` p-append-in-body`),vu(299,`br`),Kg()()(),Qc(300,`td`,22)(301,`code`,31),Sk(302,`boolean`),Kg()(),Qc(303,`td`,24)(304,`p`)(305,`code`),Sk(306,`false`),Kg()()(),Qc(307,`td`,25)(308,`em`)(309,`strong`),Sk(310,`(opcional)`),Kg()(),Qc(311,`p`),Sk(312,`Define que o popover (`),Qc(313,`code`),Sk(314,`p-helper`),Kg(),Sk(315,` e/ou `),Qc(316,`code`),Sk(317,`p-error-limit`),Kg(),Sk(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(319,`blockquote`)(320,`p`),Sk(321,`Quando utilizado com `),Qc(322,`code`),Sk(323,`p-helper`),Kg(),Sk(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(325,`tr`,32)(326,`td`,18)(327,`div`,19)(328,`span`,20),Sk(329,` (p-change)`),vu(330,`br`),Kg()()(),Qc(331,`td`,22)(332,`code`,23),Sk(333,`EventEmitter`),Kg()(),Qc(334,`td`,24),Sk(335,`-`),Kg(),Qc(336,`td`,25)(337,`em`)(338,`strong`),Sk(339,`(opcional)`),Kg()(),Qc(340,`p`),Sk(341,`Evento disparado ao alterar valor do campo.`),Kg()()(),Qc(342,`tr`,33)(343,`td`,18)(344,`div`,19)(345,`span`,20),Sk(346,` (p-change-model)`),vu(347,`br`),Kg()()(),Qc(348,`td`,22)(349,`code`,23),Sk(350,`EventEmitter`),Kg()(),Qc(351,`td`,24),Sk(352,`-`),Kg(),Qc(353,`td`,25)(354,`em`)(355,`strong`),Sk(356,`(opcional)`),Kg()(),Qc(357,`p`),Sk(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(359,`code`),Sk(360,`setValue`),Kg(),Sk(361,`, `),Qc(362,`code`),Sk(363,`patchValue`),Kg(),Sk(364,`, carregamento assíncrono).`),Kg(),Qc(365,`p`),Sk(366,`Diferentemente do `),Qc(367,`code`),Sk(368,`p-change`),Kg(),Sk(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(370,`code`),Sk(371,`p-change-model`),Kg(),Sk(372,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(373,`p`),Sk(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(375,`tr`,34)(376,`td`,18)(377,`div`,27)(378,`span`,28),Sk(379,` p-compact-label`),vu(380,`br`),Kg()()(),Qc(381,`td`,22)(382,`code`,31),Sk(383,`boolean`),Kg()(),Qc(384,`td`,24)(385,`p`)(386,`code`),Sk(387,`false`),Kg()()(),Qc(388,`td`,25)(389,`em`)(390,`strong`),Sk(391,`(opcional)`),Kg()(),Qc(392,`p`),Sk(393,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(394,`p`),Sk(395,`Quando habilitado (`),Qc(396,`code`),Sk(397,`true`),Kg(),Sk(398,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(399,`ul`)(400,`li`)(401,`code`),Sk(402,`po-label`),Kg()(),Qc(403,`li`)(404,`code`),Sk(405,`p-requirement (showRequired)`),Kg()(),Qc(406,`li`)(407,`code`),Sk(408,`po-helper`),Kg()()(),Qc(409,`p`),Sk(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(411,`p`),Sk(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(413,`ul`)(414,`li`)(415,`code`),Sk(416,`--field-container-title-justify`),Kg()(),Qc(417,`li`)(418,`code`),Sk(419,`--field-container-title-flex`),Kg()()(),Qc(420,`p`),Sk(421,`Exemplo:`),Kg(),Qc(422,`pre`)(423,`code`),Sk(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(425,`p`),Sk(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(427,`tr`,35)(428,`td`,18)(429,`div`,27)(430,`span`,28),Sk(431,` p-disabled`),vu(432,`br`),Kg()()(),Qc(433,`td`,22)(434,`code`,31),Sk(435,`boolean`),Kg()(),Qc(436,`td`,24)(437,`p`)(438,`code`),Sk(439,`false`),Kg()()(),Qc(440,`td`,25)(441,`em`)(442,`strong`),Sk(443,`(opcional)`),Kg()(),Qc(444,`p`),Sk(445,`Indica se o campo será desabilitado.`),Kg()()(),Qc(446,`tr`,36)(447,`td`,18)(448,`div`,27)(449,`span`,28),Sk(450,` p-error-limit`),vu(451,`br`),Kg()()(),Qc(452,`td`,22)(453,`code`,31),Sk(454,`boolean`),Kg()(),Qc(455,`td`,24)(456,`p`)(457,`code`),Sk(458,`false`),Kg()()(),Qc(459,`td`,25)(460,`em`)(461,`strong`),Sk(462,`(opcional)`),Kg()(),Qc(463,`p`),Sk(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(465,`blockquote`)(466,`p`),Sk(467,`Caso essa propriedade seja definida como `),Qc(468,`code`),Sk(469,`true`),Kg(),Sk(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(471,`tr`,37)(472,`td`,18)(473,`div`,27)(474,`span`,28),Sk(475,` p-field-error-message`),vu(476,`br`),Kg()()(),Qc(477,`td`,22)(478,`code`,29),Sk(479,`string`),Kg()(),Qc(480,`td`,24),Sk(481,`-`),Kg(),Qc(482,`td`,25)(483,`em`)(484,`strong`),Sk(485,`(opcional)`),Kg()(),Qc(486,`p`),Sk(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),Kg()()(),Qc(488,`tr`,38)(489,`td`,18)(490,`div`,27)(491,`span`,28),Sk(492,` p-format-model`),vu(493,`br`),Kg()()(),Qc(494,`td`,22)(495,`code`,31),Sk(496,`boolean`),Kg()(),Qc(497,`td`,24)(498,`p`)(499,`code`),Sk(500,`false`),Kg()()(),Qc(501,`td`,25)(502,`em`)(503,`strong`),Sk(504,`(opcional)`),Kg()(),Qc(505,`p`),Sk(506,`Indica se o `),Qc(507,`code`),Sk(508,`model`),Kg(),Sk(509,` receberá o valor formatado pelas propriedades `),Qc(510,`code`),Sk(511,`p-label-on`),Kg(),Sk(512,` e `),Qc(513,`code`),Sk(514,`p-label-off`),Kg(),Sk(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Kg(),Qc(516,`blockquote`)(517,`p`),Sk(518,`Por padrão será atribuído `),Qc(519,`code`),Sk(520,`false`),Kg(),Sk(521,`.`),Kg()()()(),Qc(522,`tr`,39)(523,`td`,18)(524,`div`,27)(525,`span`,28),Sk(526,` p-help`),vu(527,`br`),Kg()()(),Qc(528,`td`,22)(529,`code`,29),Sk(530,`string`),Kg()(),Qc(531,`td`,24),Sk(532,`-`),Kg(),Qc(533,`td`,25)(534,`p`),Sk(535,`Texto de apoio para o campo.`),Kg()()(),Qc(536,`tr`,40)(537,`td`,18)(538,`div`,27)(539,`span`,28),Sk(540,` p-hide-label-status`),vu(541,`br`),Kg()()(),Qc(542,`td`,22)(543,`code`,31),Sk(544,`boolean`),Kg()(),Qc(545,`td`,24)(546,`p`)(547,`code`),Sk(548,`false`),Kg()()(),Qc(549,`td`,25)(550,`em`)(551,`strong`),Sk(552,`(opcional)`),Kg()(),Qc(553,`p`),Sk(554,`Indica se o status do `),Qc(555,`code`),Sk(556,`model`),Kg(),Sk(557,` será escondido visualmente ao lado do switch.`),Kg(),Qc(558,`blockquote`)(559,`p`),Sk(560,`Por padrão será atribuído `),Qc(561,`code`),Sk(562,`false`),Kg(),Sk(563,`.`),Kg()()()(),Qc(564,`tr`,41)(565,`td`,18)(566,`div`,27)(567,`span`,28),Sk(568,` p-invalid-value`),vu(569,`br`),Kg()()(),Qc(570,`td`,22)(571,`code`,31),Sk(572,`boolean`),Kg()(),Qc(573,`td`,24)(574,`p`)(575,`code`),Sk(576,`false`),Kg()()(),Qc(577,`td`,25)(578,`em`)(579,`strong`),Sk(580,`(opcional)`),Kg()(),Qc(581,`p`),Sk(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Qc(583,`code`),Sk(584,`p-field-error-message`),Kg(),Sk(585,`.`),Kg(),Qc(586,`blockquote`)(587,`p`),Sk(588,`Caso essa propriedade seja definida como `),Qc(589,`code`),Sk(590,`true`),Kg(),Sk(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Kg()()()(),Qc(592,`tr`,42)(593,`td`,18)(594,`div`,19)(595,`span`,20),Sk(596,` (p-keydown)`),vu(597,`br`),Kg()()(),Qc(598,`td`,22)(599,`code`,23),Sk(600,`EventEmitter`),Kg()(),Qc(601,`td`,24),Sk(602,`-`),Kg(),Qc(603,`td`,25)(604,`em`)(605,`strong`),Sk(606,`(opcional)`),Kg()(),Qc(607,`p`),Sk(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(609,`code`),Sk(610,`KeyboardEvent`),Kg(),Sk(611,` com informações sobre a tecla.`),Kg()()(),Qc(612,`tr`,43)(613,`td`,18)(614,`div`,27)(615,`span`,28),Sk(616,` p-label`),vu(617,`br`),Kg()()(),Qc(618,`td`,22)(619,`code`,29),Sk(620,`string`),Kg()(),Qc(621,`td`,24),Sk(622,`-`),Kg(),Qc(623,`td`,25)(624,`p`),Sk(625,`Rótulo exibido pelo componente.`),Kg()()(),Qc(626,`tr`,44)(627,`td`,18)(628,`div`,27)(629,`span`,28),Sk(630,` p-label-off`),vu(631,`br`),Kg()()(),Qc(632,`td`,22)(633,`code`,29),Sk(634,`string`),Kg()(),Qc(635,`td`,24)(636,`p`)(637,`code`),Sk(638,`false`),Kg()()(),Qc(639,`td`,25)(640,`p`),Sk(641,`Texto exibido quando o valor do componente for `),Qc(642,`code`),Sk(643,`false`),Kg(),Sk(644,`.`),Kg()()(),Qc(645,`tr`,45)(646,`td`,18)(647,`div`,27)(648,`span`,28),Sk(649,` p-label-on`),vu(650,`br`),Kg()()(),Qc(651,`td`,22)(652,`code`,29),Sk(653,`string`),Kg()(),Qc(654,`td`,24)(655,`p`)(656,`code`),Sk(657,`true`),Kg()()(),Qc(658,`td`,25)(659,`p`),Sk(660,`Texto exibido quando o valor do componente for `),Qc(661,`code`),Sk(662,`true`),Kg(),Sk(663,`.`),Kg()()(),Qc(664,`tr`,46)(665,`td`,18)(666,`div`,27)(667,`span`,28),Sk(668,` p-label-position`),vu(669,`br`),Kg()()(),Qc(670,`td`,22)(671,`code`,47),Sk(672,`PoSwitchLabelPosition`),Kg()(),Qc(673,`td`,24),Sk(674,`-`),Kg(),Qc(675,`td`,25)(676,`em`)(677,`strong`),Sk(678,`(opcional)`),Kg()(),Qc(679,`p`),Sk(680,`Posição de exibição do rótulo que fica ao lado do switch.`),Kg(),Qc(681,`blockquote`)(682,`p`),Sk(683,`Por padrão exibe à direita.`),Kg()()()(),Qc(684,`tr`,48)(685,`td`,18)(686,`div`,27)(687,`span`,28),Sk(688,` p-label-text-wrap`),vu(689,`br`),Kg()()(),Qc(690,`td`,22)(691,`code`,31),Sk(692,`boolean`),Kg()(),Qc(693,`td`,24)(694,`p`)(695,`code`),Sk(696,`false`),Kg()()(),Qc(697,`td`,25)(698,`em`)(699,`strong`),Sk(700,`(opcional)`),Kg()(),Qc(701,`p`),Sk(702,`Habilita a quebra automática do texto da propriedade `),Qc(703,`code`),Sk(704,`p-label`),Kg(),Sk(705,`. Quando `),Qc(706,`code`),Sk(707,`p-label-text-wrap`),Kg(),Sk(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(709,`tr`,49)(710,`td`,18)(711,`div`,27)(712,`span`,28),Sk(713,` p-loading`),vu(714,`br`),Kg()()(),Qc(715,`td`,22)(716,`code`,31),Sk(717,`boolean`),Kg()(),Qc(718,`td`,24)(719,`p`)(720,`code`),Sk(721,`false`),Kg()()(),Qc(722,`td`,25)(723,`em`)(724,`strong`),Sk(725,`(opcional)`),Kg()(),Qc(726,`p`),Sk(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),Kg()()(),Qc(728,`tr`,50)(729,`td`,18)(730,`div`,27)(731,`span`,28),Sk(732,` name`),vu(733,`br`),Kg()()(),Qc(734,`td`,22)(735,`code`,29),Sk(736,`string`),Kg()(),Qc(737,`td`,24),Sk(738,`-`),Kg(),Qc(739,`td`,25)(740,`p`),Sk(741,`Nome do componente.`),Kg()()(),Qc(742,`tr`,51)(743,`td`,18)(744,`div`,27)(745,`span`,28),Sk(746,` p-helper`),vu(747,`br`),Kg()()(),Qc(748,`td`,22)(749,`code`,52),Sk(750,`PoHelperOptions `),Kg(),Qc(751,`code`,29),Sk(752,` string`),Kg()(),Qc(753,`td`,24),Sk(754,`-`),Kg(),Qc(755,`td`,25)(756,`em`)(757,`strong`),Sk(758,`(opcional)`),Kg()(),Qc(759,`p`),Sk(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(761,`code`),Sk(762,`p-label`),Kg(),Sk(763,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(764,`code`),Sk(765,`p-label`),Kg(),Sk(766,`.`),Kg(),Qc(767,`blockquote`)(768,`p`),Sk(769,`Para mais informações acesse: `),Qc(770,`a`,53),Sk(771,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(772,`.`),Kg()(),Qc(773,`blockquote`)(774,`p`),Sk(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(776,`code`),Sk(777,`p-additional-help-tooltip`),Kg(),Sk(778,` e `),Qc(779,`code`),Sk(780,`p-additional-help`),Kg(),Sk(781,`) será ignorado.`),Kg()()()(),Qc(782,`tr`,54)(783,`td`,18)(784,`div`,27)(785,`span`,28),Sk(786,` p-size`),vu(787,`br`),Kg()()(),Qc(788,`td`,22)(789,`code`,29),Sk(790,`string`),Kg()(),Qc(791,`td`,24)(792,`p`)(793,`code`),Sk(794,`medium`),Kg()()(),Qc(795,`td`,25)(796,`em`)(797,`strong`),Sk(798,`(opcional)`),Kg()(),Qc(799,`p`),Sk(800,`Define o tamanho do componente:`),Kg(),Qc(801,`ul`)(802,`li`)(803,`code`),Sk(804,`small`),Kg(),Sk(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),Kg(),Qc(806,`li`)(807,`code`),Sk(808,`medium`),Kg(),Sk(809,`: altura de 24px.`),Kg()(),Qc(810,`blockquote`)(811,`p`),Sk(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(813,`code`),Sk(814,`medium`),Kg(),Sk(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(816,`a`,55),Sk(817,`po-theme`),Kg(),Sk(818,`.`),Kg()()()()(),Qc(819,`h3`,13),Sk(820,`Métodos`),Kg(),Qc(821,`table`,56)(822,`tr`,57)(823,`th`,58)(824,`div`,27)(825,`h4`)(826,`span`,28),Sk(827,` showAdditionalHelp `),Kg()()()()(),Qc(828,`tr`,25)(829,`td`,25)(830,`p`),Sk(831,`Método que exibe `),Qc(832,`code`),Sk(833,`p-helper`),Kg(),Sk(834,` ou executa a ação definida em `),Qc(835,`code`),Sk(836,`p-helper{eventOnClick}`),Kg(),Sk(837,` ou em `),Qc(838,`code`),Sk(839,`p-additionalHelp`),Kg(),Sk(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(841,`code`),Sk(842,`p-keydown`),Kg(),Sk(843,`.`),Kg(),Qc(844,`blockquote`)(845,`p`),Sk(846,`Exibe ou oculta o conteúdo do componente `),Qc(847,`code`),Sk(848,`po-helper`),Kg(),Sk(849,` quando o componente estiver com foco.`),Kg()(),Qc(850,`pre`)(851,`code`),Sk(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Kg()(),Qc(853,`pre`)(854,`code`),Sk(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(856,`br`),Qc(857,`table`,59)(858,`tr`,57)(859,`th`,58)(860,`div`,27)(861,`h4`)(862,`span`,28),Sk(863,` focus `),Kg()()()()(),Qc(864,`tr`,25)(865,`td`,25)(866,`p`),Sk(867,`Função que atribui foco ao componente.`),Kg(),Qc(868,`p`),Sk(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(870,`pre`)(871,`code`),Sk(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),Kg()()()()(),vu(873,`br`),Qc(874,`table`,56)(875,`tr`,57)(876,`th`,58)(877,`div`,27)(878,`h4`)(879,`span`,28),Sk(880,` showAdditionalHelp `),Kg()()()()(),Qc(881,`tr`,25)(882,`td`,25)(883,`p`),Sk(884,`Método que exibe `),Qc(885,`code`),Sk(886,`p-helper`),Kg(),Sk(887,` ou executa a ação definida em `),Qc(888,`code`),Sk(889,`p-helper{eventOnClick}`),Kg(),Sk(890,` ou em `),Qc(891,`code`),Sk(892,`p-additionalHelp`),Kg(),Sk(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(894,`code`),Sk(895,`p-keydown`),Kg(),Sk(896,`.`),Kg(),Qc(897,`blockquote`)(898,`p`),Sk(899,`Exibe ou oculta o conteúdo do componente `),Qc(900,`code`),Sk(901,`po-helper`),Kg(),Sk(902,` quando o componente estiver com foco.`),Kg()(),Qc(903,`pre`)(904,`code`),Sk(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),Kg()(),Qc(906,`pre`)(907,`code`,60),Sk(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(909,`br`),Qc(910,`h3`),Sk(911,`Enums`),Kg(),Qc(912,`h4`,61)(913,`code`,5),Sk(914,`PoSwitchLabelPosition`),Kg()(),Qc(915,`div`,2)(916,`p`),Sk(917,`Enum para posicionar o label do valor do po-switch.`),Kg()(),Qc(918,`h4`,13),Sk(919,`Propriedades`),Kg(),Qc(920,`table`,14)(921,`tr`,15)(922,`th`,16),Sk(923,`Nome`),Kg(),Qc(924,`th`,16),Sk(925,`Descrição`),Kg()(),Qc(926,`tr`,62)(927,`td`,18)(928,`div`,27)(929,`span`,28),Sk(930,` Right`),vu(931,`br`),Kg()()(),Qc(932,`td`,25)(933,`p`),Sk(934,`Posiciona o label do lado esquerdo do switch.`),Kg()()(),Qc(935,`tr`,63)(936,`td`,18)(937,`div`,27)(938,`span`,28),Sk(939,` Left`),vu(940,`br`),Kg()()(),Qc(941,`td`,25)(942,`p`),Sk(943,`Posiciona o label do lado direito do switch.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Oe(a,Le){if(a&1&&(Qc(0,`div`,1),vu(1,`sample-po-switch-basic-view`)(2,`sample-po-switch-labs-view`)(3,`sample-po-switch-order-view`)(4,`sample-po-switch-order-reactive-form-view`),Kg()),a&2){let p=ek();Rb(`hidden`,p.activeTab!==`web`)}}var Fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Switch`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Switch · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,n){l&1&&(Qc(0,`po-page-default`,0),FO(1,Oe,5,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-switch-doc`),Kg()()),l&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,me,ue,be,Ee,ge],encapsulation:2,changeDetection:1})}return a})()}];var xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[GV.forChild(Fe),GV]})}return a})();var xt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de$1({imports:[M,xe]})}return a})();export{xt as DocPoSwitchModule};