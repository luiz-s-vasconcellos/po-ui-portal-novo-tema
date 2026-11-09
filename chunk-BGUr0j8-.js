import{$ as R4,$n as Ak,Ai as XL,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Pt as bae,Ri as Zg,Rr as Kb,Sn as q4,Ti as W0,U as Nf,Vi as _u,Yi as eF,an as j4,ba as o1,di as RZ,ea as ge$1,er as An,fa as kZ,fi as Rb,g as Du,gi as Tk,hi as TZ,j as I4,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,xr as Gb,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,i){l&1&&_u(0,`po-switch`,0)},dependencies:[R4],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Switch Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-switch-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:Du.Left},{label:`Right`,value:Du.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let u=ZO();Jc(0,`po-switch`,1),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.switch,r)||(i.switch=r),H_(r)}),vt(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3)(4,`po-info`,4),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.label,r)||(i.label=r),H_(r)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.help,r)||(i.help=r),H_(r)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.helperText,r)||(i.helperText=r),H_(r)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.labelOff,r)||(i.labelOff=r),H_(r)}),Zg(),Jc(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.labelOn,r)||(i.labelOn=r),H_(r)}),Zg(),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),H_(r)}),Zg(),Jc(14,`po-radio-group`,11),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.labelPosition,r)||(i.labelPosition=r),H_(r)}),Zg(),Jc(15,`po-checkbox-group`,12),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.properties,r)||(i.properties=r),H_(r)}),Zg(),Jc(16,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.size,r)||(i.size=r),H_(r)}),Zg(),Jc(17,`div`,2)(18,`po-button`,14),vt(`p-click`,function(){return i.restore()}),Zg()()()}l&2&&(Yb(`ngModel`,i.switch),Rb(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-field-error-message`,i.fieldErrorMessage)(`p-format-model`,i.properties.includes(`formatModel`))(`p-help`,i.help)(`p-hide-label-status`,i.properties.includes(`hideLabelStatus`))(`p-invalid-value`,i.properties?.includes(`invalidValue`))(`p-label`,i.label)(`p-label-off`,i.labelOff)(`p-label-on`,i.labelOn)(`p-label-position`,i.labelPosition)(`p-label-text-wrap`,i.properties.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size),Y0(),Ig(3),Rb(`p-value`,i.switch),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.help),Y0(),Ig(),Yb(`ngModel`,i.helperText),Y0(),Ig(),Yb(`ngModel`,i.labelOff),Y0(),Ig(),Yb(`ngModel`,i.labelOn),Y0(),Ig(),Yb(`ngModel`,i.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,i.labelPosition),Rb(`p-options`,i.labelPositionOptions),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,R4,Joe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Switch Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-switch
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-switch-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Se],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{poNotification=p(Ru);labelPosition=Du.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){if(l&1){let u=ZO();Jc(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),_u(4,`po-table`,3),Jc(5,`po-switch`,4),W0(),Kb(`ngModelChange`,function(r){return U_(u),Ak(i.serviceFee,r)||(i.serviceFee=r),H_(r)}),vt(`p-change`,function(){return i.addServiceFee()}),Zg(),Jc(6,`div`,5)(7,`div`,6),Tk(8,`Total value`),Zg(),Jc(9,`span`,7),Tk(10,`R$`),Zg(),Jc(11,`span`,8),Tk(12),Zg()(),Jc(13,`div`,1)(14,`po-button`,9),vt(`p-click`,function(){return i.confirm()}),Zg()()()()()}l&2&&(Ig(4),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Ig(),Yb(`ngModel`,i.serviceFee),Rb(`p-label-position`,i.labelPosition),Y0(),Ig(7),Gb(i.totalAmount))},dependencies:[NZ,TZ,RZ,JL,qL,oi,R4,q4,bae],encapsulation:2,changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Switch - Order Summary`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-switch-order/sample-po-switch-order.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-switch-order/sample-po-switch-order.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-switch-order`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Oe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{poNotification=p(Ru);formBuilder=p(kZ);formOrderSummary;labelPosition=Du.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let m=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),_u(3,`po-table`,3),Jc(4,`po-switch`,4),W0(),vt(`p-change`,function(){return i.addServiceFee()}),Zg(),Jc(5,`div`,5)(6,`div`,6),Tk(7,`Total value`),Zg(),Jc(8,`span`,7),Tk(9,`R$`),Zg(),Jc(10,`span`,8),Tk(11),Zg()(),Jc(12,`div`,0)(13,`po-button`,9),vt(`p-click`,function(){return i.confirm()}),Zg()()()()()),l&2&&(Ig(2),Rb(`formGroup`,i.formOrderSummary),Ig(),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Ig(),Rb(`p-label-position`,i.labelPosition),Y0(),Ig(7),Gb(i.totalAmount))},dependencies:[NZ,TZ,RZ,XL,o1,oi,R4,q4,bae],encapsulation:2,changeDetection:1})}return o})();var Ae=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Switch - Order Summary Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-switch-order-reactive-form`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,fe],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoSwitchComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,` O componente `),Jc(24,`code`),Tk(25,`po-switch`),Zg(),Tk(26,` é um `),Jc(27,`a`,6),Tk(28,`checkbox`),Zg(),Tk(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),Zg(),Jc(30,`p`),Tk(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),Zg(),Jc(32,`p`),Tk(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),Zg(),Jc(34,`blockquote`)(35,`p`),Tk(36,`O componente não altera o valor incial informado no `),Jc(37,`em`),Tk(38,`model`),Zg(),Tk(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),Zg()(),Jc(40,`h4`),Tk(41,`Boas práticas`),Zg(),Jc(42,`ul`)(43,`li`),Tk(44,`Evite `),Jc(45,`code`),Tk(46,`labels`),Zg(),Tk(47,` extensos que quebram o layout do `),Jc(48,`code`),Tk(49,`po-switch`),Zg(),Tk(50,`, use `),Jc(51,`code`),Tk(52,`labels`),Zg(),Tk(53,` diretos, curtos e intuitivos.`),Zg()(),Jc(54,`h4`),Tk(55,`Acessibilidade tratada no componente`),Zg(),Jc(56,`p`),Tk(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(58,`ul`)(59,`li`),Tk(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),Jc(61,`a`,7),Tk(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),Zg()(),Jc(63,`li`),Tk(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(65,`a`,8),Tk(66,`WCAG 2.4.12: Focus Appearance`),Zg()()(),Jc(67,`h4`),Tk(68,`Tokens customizáveis`),Zg(),Jc(69,`p`),Tk(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(71,`blockquote`)(72,`p`),Tk(73,`Para maiores informações, acesse o guia `),Jc(74,`a`,9),Tk(75,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(76,`.`),Zg()(),Jc(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),Tk(81,`Propriedade`),Zg(),Jc(82,`th`),Tk(83,`Descrição`),Zg(),Jc(84,`th`),Tk(85,`Valor Padrão`),Zg()()(),Jc(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),Tk(90,`Unchecked`),Zg()(),_u(91,`td`)(92,`td`),Zg(),Jc(93,`tr`)(94,`td`)(95,`code`),Tk(96,`--color-unchecked`),Zg()(),Jc(97,`td`),Tk(98,`Cor principal no estado desmarcado`),Zg(),Jc(99,`td`)(100,`code`),Tk(101,`var(--color-neutral-light-00)`),Zg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Tk(105,`--border-color`),Zg()(),Jc(106,`td`),Tk(107,`Cor da borda`),Zg(),Jc(108,`td`)(109,`code`),Tk(110,`var(--color-neutral-dark-70)`),Zg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Tk(114,`--track-unchecked`),Zg()(),Jc(115,`td`),Tk(116,`Cor principal da faixa no estado desmarcado`),Zg(),Jc(117,`td`)(118,`code`),Tk(119,`var(--color-neutral-light-20)`),Zg()()(),Jc(120,`tr`)(121,`td`)(122,`strong`),Tk(123,`Checked`),Zg()(),_u(124,`td`)(125,`td`),Zg(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`--color-checked`),Zg()(),Jc(130,`td`),Tk(131,`Cor principal no estado selecionado`),Zg(),Jc(132,`td`)(133,`code`),Tk(134,`var(--color-action-default)`),Zg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Tk(138,`--track-checked`),Zg()(),Jc(139,`td`),Tk(140,`Cor da faixa no estado selecionado`),Zg(),Jc(141,`td`)(142,`code`),Tk(143,`var(--color-brand-01-light)`),Zg()()(),Jc(144,`tr`)(145,`td`)(146,`strong`),Tk(147,`Hover`),Zg()(),_u(148,`td`)(149,`td`),Zg(),Jc(150,`tr`)(151,`td`)(152,`code`),Tk(153,`--color-unchecked-hover`),Zg()(),Jc(154,`td`),Tk(155,`Cor principal no estado hover desmarcado`),Zg(),Jc(156,`td`)(157,`code`),Tk(158,`var(--color-action-pressed)`),Zg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Tk(162,`--color-checked-hover`),Zg()(),Jc(163,`td`),Tk(164,`Cor principal no estado hover marcado`),Zg(),Jc(165,`td`)(166,`code`),Tk(167,`var(--color-action-pressed)`),Zg()()(),Jc(168,`tr`)(169,`td`)(170,`strong`),Tk(171,`Focused`),Zg()(),_u(172,`td`)(173,`td`),Zg(),Jc(174,`tr`)(175,`td`)(176,`code`),Tk(177,`--outline-color-focused`),Zg()(),Jc(178,`td`),Tk(179,`Cor do outline do estado de focus`),Zg(),Jc(180,`td`)(181,`code`),Tk(182,`var(--color-action-focus)`),Zg()()(),Jc(183,`tr`)(184,`td`)(185,`strong`),Tk(186,`Disabled`),Zg()(),_u(187,`td`)(188,`td`),Zg(),Jc(189,`tr`)(190,`td`)(191,`code`),Tk(192,`--color-unchecked-disabled`),Zg()(),Jc(193,`td`),Tk(194,`Cor principal do disabled no estado desmarcado`),Zg(),Jc(195,`td`)(196,`code`),Tk(197,`var(--color-neutral-light-20)`),Zg()()(),Jc(198,`tr`)(199,`td`)(200,`code`),Tk(201,`--color-checked-disabled`),Zg()(),Jc(202,`td`),Tk(203,`Cor principal do disabled no estado marcado`),Zg(),Jc(204,`td`)(205,`code`),Tk(206,`var(--color-action-disabled)`),Zg()()()()()(),Jc(207,`div`,10)(208,`h4`,11),Tk(209,`Seletor`),Zg(),Jc(210,`pre`,12),Tk(211,`<po-switch
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
`),Zg()(),Jc(212,`h4`,13),Tk(213,`Propriedades`),Zg(),Jc(214,`table`,14)(215,`tr`,15)(216,`th`,16),Tk(217,`Nome`),Zg(),Jc(218,`th`,16),Tk(219,`Tipo`),Zg(),Jc(220,`th`,16),Tk(221,`Padrão`),Zg(),Jc(222,`th`,16),Tk(223,`Descrição`),Zg()(),Jc(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),Tk(228,` (p-additional-help)`),_u(229,`br`),Zg()(),Jc(230,`div`,21),Tk(231,`Deprecated`),Zg()(),Jc(232,`td`,22)(233,`code`,23),Tk(234,`EventEmitter`),Zg()(),Jc(235,`td`,24),Tk(236,`-`),Zg(),Jc(237,`td`,25)(238,`em`)(239,`strong`),Tk(240,`(opcional)`),Zg()(),Jc(241,`p`),Tk(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(243,`blockquote`)(244,`p`),Tk(245,`Essa propriedade está `),Jc(246,`strong`),Tk(247,`depreciada`),Zg(),Tk(248,` e será removida na versão `),Jc(249,`code`),Tk(250,`23.x.x`),Zg(),Tk(251,`. Recomendamos utilizar a propriedade `),Jc(252,`code`),Tk(253,`p-helper`),Zg(),Tk(254,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(255,`tr`,17)(256,`td`,18)(257,`div`,26)(258,`span`,27),Tk(259,` p-additional-help-tooltip`),_u(260,`br`),Zg()(),Jc(261,`div`,21),Tk(262,`Deprecated`),Zg()(),Jc(263,`td`,22)(264,`code`,28),Tk(265,`string`),Zg()(),Jc(266,`td`,24),Tk(267,`-`),Zg(),Jc(268,`td`,25)(269,`em`)(270,`strong`),Tk(271,`(opcional)`),Zg()(),Jc(272,`p`),Tk(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(274,`code`),Tk(275,`po-helper`),Zg(),Tk(276,`.
`),Jc(277,`strong`),Tk(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(279,`blockquote`)(280,`p`),Tk(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(282,`blockquote`)(283,`p`),Tk(284,`Essa propriedade está `),Jc(285,`strong`),Tk(286,`depreciada`),Zg(),Tk(287,` e será removida na versão `),Jc(288,`code`),Tk(289,`23.x.x`),Zg(),Tk(290,`. Recomendamos utilizar a propriedade `),Jc(291,`code`),Tk(292,`p-helper`),Zg(),Tk(293,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(294,`tr`,17)(295,`td`,18)(296,`div`,26)(297,`span`,27),Tk(298,` p-append-in-body`),_u(299,`br`),Zg()()(),Jc(300,`td`,22)(301,`code`,29),Tk(302,`boolean`),Zg()(),Jc(303,`td`,24)(304,`p`)(305,`code`),Tk(306,`false`),Zg()()(),Jc(307,`td`,25)(308,`em`)(309,`strong`),Tk(310,`(opcional)`),Zg()(),Jc(311,`p`),Tk(312,`Define que o popover (`),Jc(313,`code`),Tk(314,`p-helper`),Zg(),Tk(315,` e/ou `),Jc(316,`code`),Tk(317,`p-error-limit`),Zg(),Tk(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(319,`blockquote`)(320,`p`),Tk(321,`Quando utilizado com `),Jc(322,`code`),Tk(323,`p-helper`),Zg(),Tk(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(325,`tr`,17)(326,`td`,18)(327,`div`,19)(328,`span`,20),Tk(329,` (p-change)`),_u(330,`br`),Zg()()(),Jc(331,`td`,22)(332,`code`,23),Tk(333,`EventEmitter`),Zg()(),Jc(334,`td`,24),Tk(335,`-`),Zg(),Jc(336,`td`,25)(337,`em`)(338,`strong`),Tk(339,`(opcional)`),Zg()(),Jc(340,`p`),Tk(341,`Evento disparado ao alterar valor do campo.`),Zg()()(),Jc(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),Tk(346,` (p-change-model)`),_u(347,`br`),Zg()()(),Jc(348,`td`,22)(349,`code`,23),Tk(350,`EventEmitter`),Zg()(),Jc(351,`td`,24),Tk(352,`-`),Zg(),Jc(353,`td`,25)(354,`em`)(355,`strong`),Tk(356,`(opcional)`),Zg()(),Jc(357,`p`),Tk(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(359,`code`),Tk(360,`setValue`),Zg(),Tk(361,`, `),Jc(362,`code`),Tk(363,`patchValue`),Zg(),Tk(364,`, carregamento assíncrono).`),Zg(),Jc(365,`p`),Tk(366,`Diferentemente do `),Jc(367,`code`),Tk(368,`p-change`),Zg(),Tk(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(370,`code`),Tk(371,`p-change-model`),Zg(),Tk(372,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(373,`p`),Tk(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(375,`tr`,17)(376,`td`,18)(377,`div`,26)(378,`span`,27),Tk(379,` p-compact-label`),_u(380,`br`),Zg()()(),Jc(381,`td`,22)(382,`code`,29),Tk(383,`boolean`),Zg()(),Jc(384,`td`,24)(385,`p`)(386,`code`),Tk(387,`false`),Zg()()(),Jc(388,`td`,25)(389,`em`)(390,`strong`),Tk(391,`(opcional)`),Zg()(),Jc(392,`p`),Tk(393,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(394,`p`),Tk(395,`Quando habilitado (`),Jc(396,`code`),Tk(397,`true`),Zg(),Tk(398,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(399,`ul`)(400,`li`)(401,`code`),Tk(402,`po-label`),Zg()(),Jc(403,`li`)(404,`code`),Tk(405,`p-requirement (showRequired)`),Zg()(),Jc(406,`li`)(407,`code`),Tk(408,`po-helper`),Zg()()(),Jc(409,`p`),Tk(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(411,`p`),Tk(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(413,`ul`)(414,`li`)(415,`code`),Tk(416,`--field-container-title-justify`),Zg()(),Jc(417,`li`)(418,`code`),Tk(419,`--field-container-title-flex`),Zg()()(),Jc(420,`p`),Tk(421,`Exemplo:`),Zg(),Jc(422,`pre`)(423,`code`),Tk(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(425,`p`),Tk(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(427,`tr`,17)(428,`td`,18)(429,`div`,26)(430,`span`,27),Tk(431,` p-disabled`),_u(432,`br`),Zg()()(),Jc(433,`td`,22)(434,`code`,29),Tk(435,`boolean`),Zg()(),Jc(436,`td`,24)(437,`p`)(438,`code`),Tk(439,`false`),Zg()()(),Jc(440,`td`,25)(441,`em`)(442,`strong`),Tk(443,`(opcional)`),Zg()(),Jc(444,`p`),Tk(445,`Indica se o campo será desabilitado.`),Zg()()(),Jc(446,`tr`,17)(447,`td`,18)(448,`div`,26)(449,`span`,27),Tk(450,` p-error-limit`),_u(451,`br`),Zg()()(),Jc(452,`td`,22)(453,`code`,29),Tk(454,`boolean`),Zg()(),Jc(455,`td`,24)(456,`p`)(457,`code`),Tk(458,`false`),Zg()()(),Jc(459,`td`,25)(460,`em`)(461,`strong`),Tk(462,`(opcional)`),Zg()(),Jc(463,`p`),Tk(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(465,`blockquote`)(466,`p`),Tk(467,`Caso essa propriedade seja definida como `),Jc(468,`code`),Tk(469,`true`),Zg(),Tk(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(471,`tr`,17)(472,`td`,18)(473,`div`,26)(474,`span`,27),Tk(475,` p-field-error-message`),_u(476,`br`),Zg()()(),Jc(477,`td`,22)(478,`code`,28),Tk(479,`string`),Zg()(),Jc(480,`td`,24),Tk(481,`-`),Zg(),Jc(482,`td`,25)(483,`em`)(484,`strong`),Tk(485,`(opcional)`),Zg()(),Jc(486,`p`),Tk(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),Zg()()(),Jc(488,`tr`,17)(489,`td`,18)(490,`div`,26)(491,`span`,27),Tk(492,` p-format-model`),_u(493,`br`),Zg()()(),Jc(494,`td`,22)(495,`code`,29),Tk(496,`boolean`),Zg()(),Jc(497,`td`,24)(498,`p`)(499,`code`),Tk(500,`false`),Zg()()(),Jc(501,`td`,25)(502,`em`)(503,`strong`),Tk(504,`(opcional)`),Zg()(),Jc(505,`p`),Tk(506,`Indica se o `),Jc(507,`code`),Tk(508,`model`),Zg(),Tk(509,` receberá o valor formatado pelas propriedades `),Jc(510,`code`),Tk(511,`p-label-on`),Zg(),Tk(512,` e `),Jc(513,`code`),Tk(514,`p-label-off`),Zg(),Tk(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Zg(),Jc(516,`blockquote`)(517,`p`),Tk(518,`Por padrão será atribuído `),Jc(519,`code`),Tk(520,`false`),Zg(),Tk(521,`.`),Zg()()()(),Jc(522,`tr`,17)(523,`td`,18)(524,`div`,26)(525,`span`,27),Tk(526,` p-help`),_u(527,`br`),Zg()()(),Jc(528,`td`,22)(529,`code`,28),Tk(530,`string`),Zg()(),Jc(531,`td`,24),Tk(532,`-`),Zg(),Jc(533,`td`,25)(534,`p`),Tk(535,`Texto de apoio para o campo.`),Zg()()(),Jc(536,`tr`,17)(537,`td`,18)(538,`div`,26)(539,`span`,27),Tk(540,` p-hide-label-status`),_u(541,`br`),Zg()()(),Jc(542,`td`,22)(543,`code`,29),Tk(544,`boolean`),Zg()(),Jc(545,`td`,24)(546,`p`)(547,`code`),Tk(548,`false`),Zg()()(),Jc(549,`td`,25)(550,`em`)(551,`strong`),Tk(552,`(opcional)`),Zg()(),Jc(553,`p`),Tk(554,`Indica se o status do `),Jc(555,`code`),Tk(556,`model`),Zg(),Tk(557,` será escondido visualmente ao lado do switch.`),Zg(),Jc(558,`blockquote`)(559,`p`),Tk(560,`Por padrão será atribuído `),Jc(561,`code`),Tk(562,`false`),Zg(),Tk(563,`.`),Zg()()()(),Jc(564,`tr`,17)(565,`td`,18)(566,`div`,26)(567,`span`,27),Tk(568,` p-invalid-value`),_u(569,`br`),Zg()()(),Jc(570,`td`,22)(571,`code`,29),Tk(572,`boolean`),Zg()(),Jc(573,`td`,24)(574,`p`)(575,`code`),Tk(576,`false`),Zg()()(),Jc(577,`td`,25)(578,`em`)(579,`strong`),Tk(580,`(opcional)`),Zg()(),Jc(581,`p`),Tk(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Jc(583,`code`),Tk(584,`p-field-error-message`),Zg(),Tk(585,`.`),Zg(),Jc(586,`blockquote`)(587,`p`),Tk(588,`Caso essa propriedade seja definida como `),Jc(589,`code`),Tk(590,`true`),Zg(),Tk(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Zg()()()(),Jc(592,`tr`,17)(593,`td`,18)(594,`div`,19)(595,`span`,20),Tk(596,` (p-keydown)`),_u(597,`br`),Zg()()(),Jc(598,`td`,22)(599,`code`,23),Tk(600,`EventEmitter`),Zg()(),Jc(601,`td`,24),Tk(602,`-`),Zg(),Jc(603,`td`,25)(604,`em`)(605,`strong`),Tk(606,`(opcional)`),Zg()(),Jc(607,`p`),Tk(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(609,`code`),Tk(610,`KeyboardEvent`),Zg(),Tk(611,` com informações sobre a tecla.`),Zg()()(),Jc(612,`tr`,17)(613,`td`,18)(614,`div`,26)(615,`span`,27),Tk(616,` p-label`),_u(617,`br`),Zg()()(),Jc(618,`td`,22)(619,`code`,28),Tk(620,`string`),Zg()(),Jc(621,`td`,24),Tk(622,`-`),Zg(),Jc(623,`td`,25)(624,`p`),Tk(625,`Rótulo exibido pelo componente.`),Zg()()(),Jc(626,`tr`,17)(627,`td`,18)(628,`div`,26)(629,`span`,27),Tk(630,` p-label-off`),_u(631,`br`),Zg()()(),Jc(632,`td`,22)(633,`code`,28),Tk(634,`string`),Zg()(),Jc(635,`td`,24)(636,`p`)(637,`code`),Tk(638,`false`),Zg()()(),Jc(639,`td`,25)(640,`p`),Tk(641,`Texto exibido quando o valor do componente for `),Jc(642,`code`),Tk(643,`false`),Zg(),Tk(644,`.`),Zg()()(),Jc(645,`tr`,17)(646,`td`,18)(647,`div`,26)(648,`span`,27),Tk(649,` p-label-on`),_u(650,`br`),Zg()()(),Jc(651,`td`,22)(652,`code`,28),Tk(653,`string`),Zg()(),Jc(654,`td`,24)(655,`p`)(656,`code`),Tk(657,`true`),Zg()()(),Jc(658,`td`,25)(659,`p`),Tk(660,`Texto exibido quando o valor do componente for `),Jc(661,`code`),Tk(662,`true`),Zg(),Tk(663,`.`),Zg()()(),Jc(664,`tr`,17)(665,`td`,18)(666,`div`,26)(667,`span`,27),Tk(668,` p-label-position`),_u(669,`br`),Zg()()(),Jc(670,`td`,22)(671,`code`,30),Tk(672,`PoSwitchLabelPosition`),Zg()(),Jc(673,`td`,24),Tk(674,`-`),Zg(),Jc(675,`td`,25)(676,`em`)(677,`strong`),Tk(678,`(opcional)`),Zg()(),Jc(679,`p`),Tk(680,`Posição de exibição do rótulo que fica ao lado do switch.`),Zg(),Jc(681,`blockquote`)(682,`p`),Tk(683,`Por padrão exibe à direita.`),Zg()()()(),Jc(684,`tr`,17)(685,`td`,18)(686,`div`,26)(687,`span`,27),Tk(688,` p-label-text-wrap`),_u(689,`br`),Zg()()(),Jc(690,`td`,22)(691,`code`,29),Tk(692,`boolean`),Zg()(),Jc(693,`td`,24)(694,`p`)(695,`code`),Tk(696,`false`),Zg()()(),Jc(697,`td`,25)(698,`em`)(699,`strong`),Tk(700,`(opcional)`),Zg()(),Jc(701,`p`),Tk(702,`Habilita a quebra automática do texto da propriedade `),Jc(703,`code`),Tk(704,`p-label`),Zg(),Tk(705,`. Quando `),Jc(706,`code`),Tk(707,`p-label-text-wrap`),Zg(),Tk(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(709,`tr`,17)(710,`td`,18)(711,`div`,26)(712,`span`,27),Tk(713,` p-loading`),_u(714,`br`),Zg()()(),Jc(715,`td`,22)(716,`code`,29),Tk(717,`boolean`),Zg()(),Jc(718,`td`,24)(719,`p`)(720,`code`),Tk(721,`false`),Zg()()(),Jc(722,`td`,25)(723,`em`)(724,`strong`),Tk(725,`(opcional)`),Zg()(),Jc(726,`p`),Tk(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),Zg()()(),Jc(728,`tr`,17)(729,`td`,18)(730,`div`,26)(731,`span`,27),Tk(732,` name`),_u(733,`br`),Zg()()(),Jc(734,`td`,22)(735,`code`,28),Tk(736,`string`),Zg()(),Jc(737,`td`,24),Tk(738,`-`),Zg(),Jc(739,`td`,25)(740,`p`),Tk(741,`Nome do componente.`),Zg()()(),Jc(742,`tr`,17)(743,`td`,18)(744,`div`,26)(745,`span`,27),Tk(746,` p-helper`),_u(747,`br`),Zg()()(),Jc(748,`td`,22)(749,`code`,31),Tk(750,`PoHelperOptions `),Zg(),Jc(751,`code`,28),Tk(752,` string`),Zg()(),Jc(753,`td`,24),Tk(754,`-`),Zg(),Jc(755,`td`,25)(756,`em`)(757,`strong`),Tk(758,`(opcional)`),Zg()(),Jc(759,`p`),Tk(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(761,`code`),Tk(762,`p-label`),Zg(),Tk(763,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(764,`code`),Tk(765,`p-label`),Zg(),Tk(766,`.`),Zg(),Jc(767,`blockquote`)(768,`p`),Tk(769,`Para mais informações acesse: `),Jc(770,`a`,32),Tk(771,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(772,`.`),Zg()(),Jc(773,`blockquote`)(774,`p`),Tk(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(776,`code`),Tk(777,`p-additional-help-tooltip`),Zg(),Tk(778,` e `),Jc(779,`code`),Tk(780,`p-additional-help`),Zg(),Tk(781,`) será ignorado.`),Zg()()()(),Jc(782,`tr`,17)(783,`td`,18)(784,`div`,26)(785,`span`,27),Tk(786,` p-size`),_u(787,`br`),Zg()()(),Jc(788,`td`,22)(789,`code`,28),Tk(790,`string`),Zg()(),Jc(791,`td`,24)(792,`p`)(793,`code`),Tk(794,`medium`),Zg()()(),Jc(795,`td`,25)(796,`em`)(797,`strong`),Tk(798,`(opcional)`),Zg()(),Jc(799,`p`),Tk(800,`Define o tamanho do componente:`),Zg(),Jc(801,`ul`)(802,`li`)(803,`code`),Tk(804,`small`),Zg(),Tk(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),Zg(),Jc(806,`li`)(807,`code`),Tk(808,`medium`),Zg(),Tk(809,`: altura de 24px.`),Zg()(),Jc(810,`blockquote`)(811,`p`),Tk(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(813,`code`),Tk(814,`medium`),Zg(),Tk(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(816,`a`,33),Tk(817,`po-theme`),Zg(),Tk(818,`.`),Zg()()()()(),Jc(819,`h3`,13),Tk(820,`Métodos`),Zg(),Jc(821,`table`,34)(822,`tr`,17)(823,`th`,35)(824,`div`,26)(825,`h4`)(826,`span`,27),Tk(827,` showAdditionalHelp `),Zg()()()()(),Jc(828,`tr`,25)(829,`td`,25)(830,`p`),Tk(831,`Método que exibe `),Jc(832,`code`),Tk(833,`p-helper`),Zg(),Tk(834,` ou executa a ação definida em `),Jc(835,`code`),Tk(836,`p-helper{eventOnClick}`),Zg(),Tk(837,` ou em `),Jc(838,`code`),Tk(839,`p-additionalHelp`),Zg(),Tk(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(841,`code`),Tk(842,`p-keydown`),Zg(),Tk(843,`.`),Zg(),Jc(844,`blockquote`)(845,`p`),Tk(846,`Exibe ou oculta o conteúdo do componente `),Jc(847,`code`),Tk(848,`po-helper`),Zg(),Tk(849,` quando o componente estiver com foco.`),Zg()(),Jc(850,`pre`)(851,`code`),Tk(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),Zg()(),Jc(853,`pre`)(854,`code`),Tk(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(856,`br`),Jc(857,`table`,34)(858,`tr`,17)(859,`th`,35)(860,`div`,26)(861,`h4`)(862,`span`,27),Tk(863,` focus `),Zg()()()()(),Jc(864,`tr`,25)(865,`td`,25)(866,`p`),Tk(867,`Função que atribui foco ao componente.`),Zg(),Jc(868,`p`),Tk(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(870,`pre`)(871,`code`),Tk(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),Zg()()()()(),_u(873,`br`),Jc(874,`table`,34)(875,`tr`,17)(876,`th`,35)(877,`div`,26)(878,`h4`)(879,`span`,27),Tk(880,` showAdditionalHelp `),Zg()()()()(),Jc(881,`tr`,25)(882,`td`,25)(883,`p`),Tk(884,`Método que exibe `),Jc(885,`code`),Tk(886,`p-helper`),Zg(),Tk(887,` ou executa a ação definida em `),Jc(888,`code`),Tk(889,`p-helper{eventOnClick}`),Zg(),Tk(890,` ou em `),Jc(891,`code`),Tk(892,`p-additionalHelp`),Zg(),Tk(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(894,`code`),Tk(895,`p-keydown`),Zg(),Tk(896,`.`),Zg(),Jc(897,`blockquote`)(898,`p`),Tk(899,`Exibe ou oculta o conteúdo do componente `),Jc(900,`code`),Tk(901,`po-helper`),Zg(),Tk(902,` quando o componente estiver com foco.`),Zg()(),Jc(903,`pre`)(904,`code`),Tk(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),Zg()(),Jc(906,`pre`)(907,`code`,36),Tk(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(909,`br`),Jc(910,`h3`),Tk(911,`Enums`),Zg(),Jc(912,`h4`,4)(913,`code`,5),Tk(914,`PoSwitchLabelPosition`),Zg()(),Jc(915,`div`,2)(916,`p`),Tk(917,`Enum para posicionar o label do valor do po-switch.`),Zg()(),Jc(918,`h4`,13),Tk(919,`Propriedades`),Zg(),Jc(920,`table`,14)(921,`tr`,15)(922,`th`,16),Tk(923,`Nome`),Zg(),Jc(924,`th`,16),Tk(925,`Descrição`),Zg()(),Jc(926,`tr`,17)(927,`td`,18)(928,`div`,26)(929,`span`,27),Tk(930,` Right`),_u(931,`br`),Zg()()(),Jc(932,`td`,25)(933,`p`),Tk(934,`Posiciona o label do lado esquerdo do switch.`),Zg()()(),Jc(935,`tr`,17)(936,`td`,18)(937,`div`,26)(938,`span`,27),Tk(939,` Left`),_u(940,`br`),Zg()()(),Jc(941,`td`,25)(942,`p`),Tk(943,`Posiciona o label do lado direito do switch.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Be(o,Re){if(o&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(m);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-switch-basic-view`)(2,`sample-po-switch-labs-view`)(3,`sample-po-switch-order-view`)(4,`sample-po-switch-order-reactive-form-view`),Zg()}if(o&2){let m=nk();Rb(`p-active`,m.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Switch`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Be,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-switch-doc`),Zg()()()),l&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,be,ge,xe,ve],encapsulation:2,changeDetection:1})}return o})()}];var Ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(Ne),WV]})}return o})();var Ct=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,Ce]})}return o})();export{Ct as DocPoSwitchModule};