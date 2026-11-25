import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,At as Zte,Ca as j_,Ci as Rk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ia as nm,Ir as H_,It as bae,Kr as Kg,L as Koe,Li as WL,Oi as U_,Pn as tie,Pr as HO,Pt as are,Qn as zze,Qr as Mk,Ra as ok,Ri as Wb,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,Vt as c4,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,_r as Cu,aa as de,ar as Ab,bn as oi,co as wg,cr as BO,eo as tk,er as $O,fo as xZ,go as xo,ho as xk,ht as Tt,ii as No,jr as GV,mi as QL,oi as Ok,or as An,pa as ge,qi as Zb,qr as Kk,ro as uF,rr as AZ,rt as Ru,sn as j4,ur as B_,yn as oae,zi as Wk,zr as I}from"./chunk-DdK63a0t.js";var Te=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(a,o){a&1&&(Jc(0,`po-context-tabs`),_u(1,`po-tab`,0)(2,`po-tab`,1),Kg())},dependencies:[tre,zze],encapsulation:2,changeDetection:1})}return l})();var ye=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-context-tabs-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context Tabs Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-tabs-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Te],encapsulation:2,changeDetection:1})}return l})();var Ne=[`poTab`];function Ae(l,F){if(l&1){let i=KO();Jc(0,`po-tab`,9),_t(`p-click`,function(){let o=U_(i).$implicit,d=tk();return H_(d.onClick(o))})(`p-close-tab`,function(){let o=U_(i).$implicit,d=tk();return H_(d.onClose(o))}),Jc(1,`div`,10),Mk(2),Kg()()}if(l&2){let i=F.$implicit,a=F.$index;Ab(`p-active`,i.active)(`p-disabled`,i.disabled)(`p-hide`,i.hide)(`p-hide-close`,i.hideClose)(`p-label`,i.label),wg(2),nm(`Tab Content `,a)}}var Ee=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:4},{property:`click`,gridColumns:4},{property:`closeTab`,label:`Close Tab`,gridColumns:4},{property:`active`,type:`boolean`,gridColumns:3},{property:`disabled`,type:`boolean`,gridColumns:3},{property:`hide`,type:`boolean`,gridColumns:3},{property:`hideClose`,label:`Hide Close`,type:`boolean`,gridColumns:3}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;constructor(i){this.poNotification=i}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(i){let a=Object.assign({},i);a.click=a.click?this.showClick.bind(this,a.click):void 0,a.closeTab=a.closeTab?this.dispachClose.bind(this,a.closeTab):void 0,this.tabs.push(a),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(i){i.click&&i.click()}onClose(i){i.closeTab&&i.closeTab()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(i){this.poNotification.success(`Action clicked: ${i}`)}dispachClose(i){this.poNotification.success(`Action closed: ${i}`)}static ɵfac=function(a){return new(a||l)(I(Ru))};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-labs`]],viewQuery:function(a,o){if(a&1&&Cu(Ne,7),a&2){let d;No(d=xo())&&(o.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-close-tab`,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[1,`po-font-subtitle`]],template:function(a,o){if(a&1){let d=KO();Jc(0,`po-context-tabs`,2,0),HO(2,Ae,3,6,`po-tab`,3,BO),Kg(),_u(4,`po-dynamic-form`,4,1),Jc(6,`div`,5)(7,`po-button`,6),_t(`p-click`,function(){U_(d);let r=ok(5);return o.addTab(r.form.value),H_(r.form.reset())}),Kg()(),_u(8,`po-divider`),Jc(9,`po-radio-group`,7),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.size,r)||(o.size=r),H_(r)}),Kg(),Jc(10,`div`,5)(11,`po-button`,8),_t(`p-click`,function(){return o.restore()}),Kg()()}if(a&2){let d=ok(5);Ab(`p-size`,o.size),wg(2),$O(o.tabs),wg(2),Ab(`p-fields`,o.tabsFieldsForm)(`p-value`,o.tabs),wg(3),Ab(`p-disabled`,d.form.invalid),wg(2),Kb(`ngModel`,o.size),Ab(`p-options`,o.sizeOptions),q0()}},dependencies:[RZ,QL,oi,Nf,oae,Zte,tre,zze],encapsulation:2,changeDetection:1})}return l})();var we=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-context-tabs-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context Tabs Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-tabs-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-context-tabs #poTab [p-size]="size">
  @for (tab of tabs; track $index; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-hide-close]="tab.hideClose"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
      (p-close-tab)="onClose(tab)"
    >
      <div class="po-font-subtitle">Tab Content `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` i `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</div>
    </po-tab>
  }
</po-context-tabs>

<po-dynamic-form #tabsForm [p-fields]="tabsFieldsForm" [p-value]="tabs"> </po-dynamic-form>

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Tab"
    [p-disabled]="tabsForm.form.invalid"
    (p-click)="addTab(tabsForm.form.value); tabsForm.form.reset()"
  >
  </po-button>
</div>

<po-divider></po-divider>

<po-radio-group
  class="po-md-12"
  name="size"
  [(ngModel)]="size"
  p-columns="4"
  p-label="Size"
  p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
  [p-options]="sizeOptions"
>
</po-radio-group>

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoContextTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-labs',
  templateUrl: './sample-po-context-tabs-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsLabsComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 4 },
    { property: 'click', gridColumns: 4 },
    { property: 'closeTab', label: 'Close Tab', gridColumns: 4 },
    { property: 'active', type: 'boolean', gridColumns: 3 },
    { property: 'disabled', type: 'boolean', gridColumns: 3 },
    { property: 'hide', type: 'boolean', gridColumns: 3 },
    { property: 'hideClose', label: 'Hide Close', type: 'boolean', gridColumns: 3 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
    newTab.closeTab = newTab.closeTab ? this.dispachClose.bind(this, newTab.closeTab) : undefined;
    this.tabs.push(newTab);
    if (this.tabs.length <= 4) {
      this.poTab.setQuantityTabsButton(this.tabs.length);
    } else if (this.tabs.length > 4) {
      this.poTab.setQuantityTabsButton(4);
    }
  }

  onClick(tab: PoTab) {
    if (tab.click) {
      tab.click();
    }
  }

  onClose(tab: PoTab) {
    if (tab.closeTab) {
      tab.closeTab();
    }
  }

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  private dispachClose(action: string): any {
    this.poNotification.success(\`Action closed: \${action}\`);
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return l})();var Pe=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];constructor(i){this.poNotificationService=i}bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(i,a,o){return i.valid&&this.transportation===`flight`&&o.valid||i.valid&&this.transportation===`train`&&a.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(a){return new(a||l)(I(Ru))};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-travel`]],standalone:!1,decls:47,vars:30,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`,`p-hide-close`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`,`p-hide-close`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`,`p-hide-close`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`,3,`p-hide-close`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,o){if(a&1){let d=KO();Jc(0,`po-context-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.origin,r)||(o.origin=r),H_(r)}),Kg()(),Jc(6,`div`,5)(7,`po-input`,7),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.destination,r)||(o.destination=r),H_(r)}),Kg()(),Jc(8,`div`,5)(9,`po-datepicker`,8),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.departDate,r)||(o.departDate=r),H_(r)}),Kg(),Jc(10,`po-datepicker`,9),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.returnDate,r)||(o.returnDate=r),H_(r)}),Kg()(),Jc(11,`div`,5)(12,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.transportation,r)||(o.transportation=r),H_(r)}),Kg()()()(),Jc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.trainCompany,r)||(o.trainCompany=r),H_(r)}),Kg()(),Jc(18,`div`,5)(19,`po-select`,13),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.classTrain,r)||(o.classTrain=r),H_(r)}),Kg()()()(),Jc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.flightCompany,r)||(o.flightCompany=r),H_(r)}),Kg()(),Jc(25,`div`,5)(26,`po-select`,16),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.classFlight,r)||(o.classFlight=r),H_(r)}),Kg()()()(),Jc(27,`po-tab`,17)(28,`div`,5),_u(29,`po-info`,18),Kg(),Jc(30,`po-context-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.cardName,r)||(o.cardName=r),H_(r)}),Kg()(),Jc(36,`div`,5)(37,`po-input`,21),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.card,r)||(o.card=r),H_(r)}),Kg()(),Jc(38,`div`,5)(39,`po-input`,22),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.expiryMonth,r)||(o.expiryMonth=r),H_(r)}),Kg(),Jc(40,`po-input`,23),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.expiryYear,r)||(o.expiryYear=r),H_(r)}),Kg(),Jc(41,`po-input`,24),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(o.cvv,r)||(o.cvv=r),H_(r)}),Kg()(),Jc(42,`div`,5)(43,`po-button`,25),_t(`p-click`,function(){return o.payment()}),Kg()()()(),Jc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),_t(`p-click`,function(){return o.bankBillet()}),Kg()()()()()()}if(a&2){let d=ok(3),u=ok(15),r=ok(22),Ve=ok(33);wg(5),Kb(`ngModel`,o.origin),q0(),wg(2),Kb(`ngModel`,o.destination),q0(),wg(2),Kb(`ngModel`,o.departDate),q0(),wg(),Kb(`ngModel`,o.returnDate),Ab(`p-min-date`,o.departDate),q0(),wg(2),Kb(`ngModel`,o.transportation),Ab(`p-options`,o.transportationOptions),q0(),wg(),Ab(`p-hide`,o.transportation!==`train`)(`p-hide-close`,!0),wg(4),Kb(`ngModel`,o.trainCompany),Ab(`p-options`,o.trainCompanyOptions),q0(),wg(2),Kb(`ngModel`,o.classTrain),Ab(`p-options`,o.classTrainOptions),q0(),wg(),Ab(`p-hide`,o.transportation!==`flight`)(`p-hide-close`,!0),wg(4),Kb(`ngModel`,o.flightCompany),Ab(`p-options`,o.flightCompanyOptions),q0(),wg(2),Kb(`ngModel`,o.classFlight),Ab(`p-options`,o.classFlightOptions),q0(),wg(),Ab(`p-disabled`,o.isPaymentEnable(d,u,r)===!1)(`p-hide-close`,!0),wg(2),Ab(`p-value`,o.getTotalCost()),wg(6),Kb(`ngModel`,o.cardName),q0(),wg(2),Kb(`ngModel`,o.card),q0(),wg(2),Kb(`ngModel`,o.expiryMonth),q0(),wg(),Kb(`ngModel`,o.expiryYear),q0(),wg(),Kb(`ngModel`,o.cvv),q0(),wg(2),Ab(`p-disabled`,!Ve.form.valid||!o.totalCost),wg(),Ab(`p-hide-close`,!0),wg(2),Ab(`p-disabled`,!o.totalCost)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,tie,j4,Zte,Koe,Joe,tre,zze],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-travel-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-context-tabs-travel`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context Tabs - Travel`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-tabs-travel`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-context-tabs>
  <po-tab p-active p-label="Destination">
    <form #formTravel="ngForm">
      <div class="po-row">
        <po-input class="po-lg-12" name="origin" [(ngModel)]="origin" p-label="Origin" p-required> </po-input>
      </div>

      <div class="po-row">
        <po-input class="po-lg-12" name="destination" [(ngModel)]="destination" p-label="Destination" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="departDate" [(ngModel)]="departDate" p-label="Depart" p-required>
        </po-datepicker>

        <po-datepicker
          class="po-md-6"
          name="returnDate"
          [(ngModel)]="returnDate"
          p-label="Return"
          p-required
          [p-min-date]="departDate"
        >
        </po-datepicker>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="transportation"
          [(ngModel)]="transportation"
          p-label="Transportation"
          p-required
          [p-options]="transportationOptions"
        >
        </po-radio-group>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'" [p-hide-close]="true">
    <form #formTrain="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="trainCompany"
          [(ngModel)]="trainCompany"
          p-label="Tran Company"
          p-required
          [p-options]="trainCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classTrain"
          [(ngModel)]="classTrain"
          p-label="Class"
          p-required
          [p-options]="classTrainOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'" [p-hide-close]="true">
    <form #formFlight="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="flightCompany"
          [(ngModel)]="flightCompany"
          p-label="Flight Company"
          p-required
          [p-options]="flightCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classFlight"
          [(ngModel)]="classFlight"
          p-label="Class"
          p-required
          [p-options]="classFlightOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab
    p-label="Payment"
    [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false"
    [p-hide-close]="true"
  >
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-context-tabs>
      <po-tab p-active p-label="Credit Card">
        <form #formCreditCard="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name on Card"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="card"
              [(ngModel)]="card"
              p-clean
              p-label="Card Number"
              p-mask="9999 9999 9999 9999"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-2"
              name="expiryMonth"
              [(ngModel)]="expiryMonth"
              p-clean
              p-label="Expiry Month"
              p-mask="19"
              p-required
            >
            </po-input>

            <po-input
              class="po-md-2"
              name="expiryYear"
              [(ngModel)]="expiryYear"
              p-clean
              p-label="Year"
              p-mask="2999"
              p-required
            >
            </po-input>

            <po-input class="po-md-2" name="cvv" [(ngModel)]="cvv" p-clean p-label="CVV" p-mask="9999" p-required>
            </po-input>
          </div>

          <div class="po-row">
            <po-button
              class="po-md-3"
              p-label="Pay now"
              [p-disabled]="!formCreditCard.form.valid || !totalCost"
              (p-click)="payment()"
            >
            </po-button>
          </div>
        </form>
      </po-tab>

      <po-tab p-label="Bank Billet" [p-hide-close]="true">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-context-tabs>
  </po-tab>
</po-context-tabs>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-travel',
  templateUrl: './sample-po-context-tabs-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsTravelComponent {
  card: number;
  cardName: string;
  classFlight: number;
  classTrain: number;
  cvv: number;
  departDate: Date;
  destination: string;
  expiryMonth: number;
  expiryYear: number;
  flightCompany: string;
  origin: string;
  returnDate: Date;
  totalCost: number;
  trainCompany: string;
  transportation: string;

  public readonly classFlightOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Business', value: 2 },
    { label: 'Comfort', value: 3 },
    { label: 'First Class', value: 4 }
  ];

  public readonly classTrainOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Cabin', value: 2 },
    { label: 'First Class', value: 3 }
  ];

  public readonly flightCompanyOptions: Array<PoSelectOption> = [
    { label: 'American Airlines', value: 'american' },
    { label: 'Avianca', value: 'avianca' },
    { label: 'Delta Airlines', value: 'delta' },
    { label: 'Emirates', value: 'emirates' },
    { label: 'Latam', value: 'latam' }
  ];

  public readonly trainCompanyOptions: Array<PoSelectOption> = [
    { label: 'EuroStar', value: 'eurostar' },
    { label: 'OBB', value: 'obb' },
    { label: 'Renfe', value: 'renfe' },
    { label: 'TrenItalia', value: 'trenitalia' }
  ];

  public readonly transportationOptions: Array<PoRadioGroupOption> = [
    { label: 'Flights', value: 'flight' },
    { label: 'Trains', value: 'train' }
  ];

  constructor(private poNotificationService: PoNotificationService) {}

  bankBillet() {
    this.poNotificationService.warning('Bank billet sent to email');
  }

  isPaymentEnable(formTravel, formTrain, formFlight) {
    return (
      (formTravel.valid && this.transportation === 'flight' && formFlight.valid) ||
      (formTravel.valid && this.transportation === 'train' && formTrain.valid)
    );
  }

  getTotalCost() {
    if (this.transportation === 'flight' && this.classFlight) {
      this.totalCost = 800 * this.classFlight;
      return \`$\${this.totalCost}\`;
    }

    if (this.transportation === 'train' && this.classTrain) {
      this.totalCost = 300 * this.classTrain;
      return \`$\${this.totalCost}\`;
    }

    this.totalCost = undefined;
    return 'Fields are missing';
  }

  payment() {
    this.poNotificationService.success('Order confirmed');
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Pe],encapsulation:2,changeDetection:1})}return l})();var He=[`poTab`];var je=(l,F)=>F.id;function Qe(l,F){if(l&1){let i=KO();Jc(0,`po-tab`,2),Wk(1,`date`),Jc(2,`div`,7)(3,`div`,5)(4,`div`,4)(5,`div`,8)(6,`po-widget`)(7,`div`,4)(8,`div`,9),_u(9,`po-avatar`,10),Kg(),Jc(10,`div`,11)(11,`div`,12),_u(12,`po-info`,13),Kg(),Jc(13,`div`,12),_u(14,`po-info`,14),Kg(),Jc(15,`div`,12),_u(16,`po-info`,15),Kg()()()()(),Jc(17,`div`,16)(18,`po-widget`,17)(19,`div`,18),Mk(20,`TFace Conference Week`),Kg(),Jc(21,`div`,19),Mk(22,`From 21th September until 26th setember 2018`),Kg(),_u(23,`hr`),Jc(24,`div`,4)(25,`div`,20)(26,`span`,21),_u(27,`po-icon`,22),Kg(),Jc(28,`span`,23),Mk(29),Wk(30,`date`),Kg()(),Jc(31,`div`,20)(32,`span`,21),_u(33,`po-icon`,24),Kg(),Jc(34,`span`,25),Mk(35,`Av. Braz Leme, 1000, Santana`),Kg()()(),Jc(36,`div`,26)(37,`po-button`,27),_t(`p-click`,function(){let o=U_(i).$implicit,d=tk();return H_(d.confirmSubscription(o))}),Kg()()()()()()()()}if(l&2){let i=F.$implicit;Ab(`p-label`,xk(Kk(1,10,i.createdDate,`MMM d`)))(`p-active`,i.id===`1`)(`p-hide`,i.subscribe),wg(9),Ab(`p-src`,Ok(`assets/graphics/`,i.photo)),wg(3),Ab(`p-value`,i.name),wg(2),Ab(`p-value`,i.email),wg(2),Ab(`p-value`,i.description),wg(13),Wb(Kk(30,13,i.createdDate,`MM/dd/yyyy`))}}var ke=(()=>{class l{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(i){this.poNotification=i}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(i=>i.subscribe=!1)}confirmSubscription(i){this.disableRestoreBtn=!1,i.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(a){return new(a||l)(I(Ru))};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-business-conf`]],viewQuery:function(a,o){if(a&1&&Cu(He,7),a&2){let d;No(d=xo())&&(o.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`,`po-mt-0`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,1)(1,`po-context-tabs`,null,0),HO(3,Qe,38,16,`po-tab`,2,je),Kg(),_u(5,`hr`,3),Jc(6,`div`,4)(7,`div`,5)(8,`div`,4)(9,`po-button`,6),_t(`p-click`,function(){return o.cancelSubscription()}),Kg()()()()()),a&2&&(wg(3),$O(o.speakers),wg(6),Ab(`p-disabled`,o.disableRestoreBtn))},dependencies:[c4,oi,Tt,Joe,Mze,tre,zze,bae,uF],encapsulation:2,changeDetection:1})}return l})();var Me=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-business-conf-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-context-tabs-business-conf`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context Tabs - Business Conference`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-tabs-business-conf`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="Check the speaker's list">
  <po-context-tabs #poTab>
    @for (speaker of speakers; track speaker.id) {
      <po-tab
        p-label="`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` speaker.createdDate | date: 'MMM d' `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`"
        [p-active]="speaker.id === '1'"
        [p-hide]="speaker.subscribe"
      >
        <div class="po-row po-mt-5">
          <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
            <div class="po-row">
              <div class="po-lg-8 po-mb-2">
                <po-widget>
                  <div class="po-row">
                    <div class="po-md-5 po-lg-4">
                      <po-avatar p-size="xl" p-src="assets/graphics/`),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` speaker.photo `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`"></po-avatar>
                    </div>
                    <div class="po-md-7 po-lg-8">
                      <div class="po-mb-2">
                        <po-info p-label="Speaker" [p-value]="speaker.name"></po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mt-5" p-label="Email" [p-value]="speaker.email"> </po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mb-5" p-label="Description" [p-value]="speaker.description"> </po-info>
                      </div>
                    </div>
                  </div>
                </po-widget>
              </div>

              <div class="po-lg-4 po-mb-2">
                <po-widget p-title="Subscription">
                  <div class="po-font-subtitle po-mb-2">TFace Conference Week</div>
                  <div class="po-font-text-bold po-mb-5">From 21th September until 26th setember 2018</div>
                  <hr />
                  <div class="po-row">
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-calendar-dots"></po-icon>
                      </span>
                      <span class="po-font-text po-mb-2">`),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` speaker.createdDate | date: 'MM/dd/yyyy' `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`</span>
                    </div>
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-map-pin"></po-icon>
                      </span>
                      <span class="po-font-text">Av. Braz Leme, 1000, Santana</span>
                    </div>
                  </div>
                  <div class="po-mt-5">
                    <po-button class="po-mt-5" p-label="Subscription" (p-click)="confirmSubscription(speaker)">
                    </po-button>
                  </div>
                </po-widget>
              </div>
            </div>
          </div>
        </div>
      </po-tab>
    }
  </po-context-tabs>

  <hr class="po-offset-lg-1 po-offset-xl-1 po-lg-10 po-mt-0" />

  <div class="po-row">
    <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
      <div class="po-row">
        <po-button
          class="po-offset-lg-8 po-offset-xl-8 po-lg-4"
          p-label="Cancel Subscription"
          [p-disabled]="disableRestoreBtn"
          (p-click)="cancelSubscription()"
        >
        </po-button>
      </div>
    </div>
  </div>
</po-page-default>
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoContextTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-business-conf',
  templateUrl: './sample-po-context-tabs-business-conf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBusinessConfComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.speakers = this.getSpeakers();
    this.pageWidth = window.innerWidth;
    if (this.pageWidth <= 600) {
      this.poTab.setQuantityTabsButton(3);
    }
  }

  cancelSubscription() {
    this.disableRestoreBtn = true;
    this.speakers.forEach(item => (item.subscribe = false));
  }

  confirmSubscription(speaker) {
    this.disableRestoreBtn = false;

    speaker.subscribe = true;

    this.poNotification.success('Registration completed successfully. See you soon!');
  }

  private getSpeakers() {
    return [
      {
        'id': '1',
        'name': 'Peter Benjamin Parker',
        'email': 'peter.parker@po-ui.com.br',
        'photo': 'avatar1.png',
        'description': 'Nodejs developer with 4 years experience',
        'createdDate': '2018-09-21T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '2',
        'name': 'Natasha Romanova',
        'email': 'natasha.romanova@po-ui.com.br',
        'photo': 'avatar2.png',
        'description': 'Angular developer with 2 years experience',
        'createdDate': '2018-09-22T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '3',
        'name': 'Anthony Stark',
        'email': 'anthony.stark@po-ui.com.br',
        'photo': 'avatar3.png',
        'description': 'Javascript developer with 8 years experience',
        'createdDate': '2018-09-23T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '4',
        'name': 'Carol Danvers',
        'email': 'carol.danvers@po-ui.com.br',
        'photo': 'avatar4.png',
        'description': 'Full stack developer with 2 years experience',
        'createdDate': '2018-09-24T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '5',
        'name': 'Wagner Dantas',
        'email': 'wagner.dantas@po-ui.com.br',
        'photo': 'avatar5.png',
        'description': 'Front-end Engineer developer with 8 years experience',
        'createdDate': '2018-09-25T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '6',
        'name': 'Kaiam Alexandre',
        'email': 'kaiam.alexandre@po-ui.com.br',
        'photo': 'avatar6.png',
        'description': 'Javascript developer with 12 years experience',
        'createdDate': '2018-09-26T20:21:06.990Z',
        'subscribe': 'false'
      }
    ];
  }
}
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,ke],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-context-tabs-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-context-tabs-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-setQuantityTabsButton`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoContextTabsModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-context-tabs`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoContextTabsComponent`),Kg()(),Jc(12,`div`,2)(13,`h4`),Mk(14,`Tokens customizáveis`),Kg(),Jc(15,`p`),Mk(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(17,`blockquote`)(18,`p`),Mk(19,`Para maiores informações, acesse o guia `),Jc(20,`a`,6),Mk(21,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(22,`.`),Kg()(),Jc(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),Mk(27,`Propriedade`),Kg(),Jc(28,`th`),Mk(29,`Descrição`),Kg(),Jc(30,`th`),Mk(31,`Valor Padrão`),Kg()()(),Jc(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),Mk(36,`Default Values`),Kg()(),_u(37,`td`)(38,`td`),Kg(),Jc(39,`tr`)(40,`td`)(41,`code`),Mk(42,`--background`),Kg()(),Jc(43,`td`),Mk(44,`Cor de background`),Kg(),Jc(45,`td`)(46,`code`),Mk(47,`var(--color-transparent)`),Kg()()(),Jc(48,`tr`)(49,`td`)(50,`code`),Mk(51,`--background-item-default`),Kg()(),Jc(52,`td`),Mk(53,`Cor de background do item padrão`),Kg(),Jc(54,`td`)(55,`code`),Mk(56,`var(--color-transparent)`),Kg()()(),Jc(57,`tr`)(58,`td`)(59,`code`),Mk(60,`--border-radius`),Kg()(),Jc(61,`td`),Mk(62,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(63,`td`)(64,`code`),Mk(65,`var(--border-radius-md)`),Kg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Mk(69,`--color`),Kg()(),Jc(70,`td`),Mk(71,`Cor da fonte padrão`),Kg(),Jc(72,`td`)(73,`code`),Mk(74,`var(--color-action-default)`),Kg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Mk(78,`--color-baseline`),Kg()(),Jc(79,`td`),Mk(80,`Cor para box-shadow`),Kg(),Jc(81,`td`)(82,`code`),Mk(83,`var(--color-neutral-light-20)`),Kg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Mk(87,`--font-family`),Kg()(),Jc(88,`td`),Mk(89,`Família tipográfica usada`),Kg(),Jc(90,`td`)(91,`code`),Mk(92,`var(--font-family-theme)`),Kg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Mk(96,`--font-size`),Kg()(),Jc(97,`td`),Mk(98,`Tamanho da fonte`),Kg(),Jc(99,`td`)(100,`code`),Mk(101,`var(--font-size-default)`),Kg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Mk(105,`--font-weight`),Kg()(),Jc(106,`td`),Mk(107,`Peso da fonte`),Kg(),Jc(108,`td`)(109,`code`),Mk(110,`var(--font-weight-bold)`),Kg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Mk(114,`--margin-tabs-container-left`),Kg()(),Jc(115,`td`),Mk(116,`Margem lateral esquerda do componente quando usado dentro de um `),Jc(117,`code`),Mk(118,`page-default`),Kg()(),Jc(119,`td`)(120,`code`),Mk(121,`var(--spacing-md)`),Kg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Mk(125,`--margin-tabs-container-right`),Kg()(),Jc(126,`td`),Mk(127,`Margem lateral direita do componente quando usado dentro de um `),Jc(128,`code`),Mk(129,`page-default`),Kg()(),Jc(130,`td`)(131,`code`),Mk(132,`-16px`),Kg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Mk(136,`--padding-tabs-header`),Kg()(),Jc(137,`td`),Mk(138,`Padding do valor lateral das abas`),Kg(),Jc(139,`td`)(140,`code`),Mk(141,`var(--spacing-sm)`),Kg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Mk(145,`--margin-tabs-first-child`),Kg()(),Jc(146,`td`),Mk(147,`Margem lateral da primeira aba`),Kg(),Jc(148,`td`)(149,`code`),Mk(150,`var(--spacing-md)`),Kg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Mk(154,`--margin-tabs-last-child`),Kg()(),Jc(155,`td`),Mk(156,`Margem lateral da ultima aba`),Kg(),Jc(157,`td`)(158,`code`),Mk(159,`var(--spacing-md)`),Kg()()(),Jc(160,`tr`)(161,`td`)(162,`strong`),Mk(163,`Disabled`),Kg()(),_u(164,`td`)(165,`td`),Kg(),Jc(166,`tr`)(167,`td`)(168,`code`),Mk(169,`--color-disabled`),Kg()(),Jc(170,`td`),Mk(171,`Cor da fonte no estado disabilitado`),Kg(),Jc(172,`td`)(173,`code`),Mk(174,`var(--color-action-disabled)`),Kg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Mk(178,`--background-item-disabled`),Kg(),Mk(179,`\xA0`),Kg(),Jc(180,`td`),Mk(181,`Cor de background do item desabilitado`),Kg(),Jc(182,`td`)(183,`code`),Mk(184,`var(--color-neutral-light-10)`),Kg()()(),Jc(185,`tr`)(186,`td`)(187,`strong`),Mk(188,`Focused`),Kg()(),_u(189,`td`)(190,`td`),Kg(),Jc(191,`tr`)(192,`td`)(193,`code`),Mk(194,`--outline-color-focused`),Kg()(),Jc(195,`td`),Mk(196,`Cor do outline do estado de focus`),Kg(),Jc(197,`td`)(198,`code`),Mk(199,`var(--color-action-focus)`),Kg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Mk(203,`Hover`),Kg()(),_u(204,`td`)(205,`td`),Kg(),Jc(206,`tr`)(207,`td`)(208,`code`),Mk(209,`--color-hover`),Kg()(),Jc(210,`td`),Mk(211,`Cor principal no estado hover`),Kg(),Jc(212,`td`)(213,`code`),Mk(214,`var(--color-brand-01-darkest)`),Kg()()(),Jc(215,`tr`)(216,`td`)(217,`code`),Mk(218,`--background-item-hover`),Kg()(),Jc(219,`td`),Mk(220,`Cor de background no estado de hover`),Kg(),Jc(221,`td`)(222,`code`),Mk(223,`var(--color-brand-01-lightest)`),Kg()()(),Jc(224,`tr`)(225,`td`)(226,`strong`),Mk(227,`Selected`),Kg()(),_u(228,`td`)(229,`td`),Kg(),Jc(230,`tr`)(231,`td`)(232,`code`),Mk(233,`--background-item-selected`),Kg()(),Jc(234,`td`),Mk(235,`Cor de background do item selecionado`),Kg(),Jc(236,`td`)(237,`code`),Mk(238,`var(--color-brand-01-lightest)`),Kg()()()()(),Jc(239,`p`),_u(240,`br`),Mk(241,` O componente `),Jc(242,`code`),Mk(243,`po-context-tabs`),Kg(),Mk(244,` é responsável por agrupar `),Jc(245,`a`,7),Mk(246,`abas`),Kg(),Mk(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),Kg(),Jc(248,`p`),Mk(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),Kg(),Jc(250,`blockquote`)(251,`p`),Mk(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),Kg()(),Jc(253,`p`),Mk(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),Kg(),Jc(255,`h4`),Mk(256,`Boas práticas`),Kg(),Jc(257,`ul`)(258,`li`),Mk(259,`Evite utilizar um `),Jc(260,`code`),Mk(261,`po-context-tabs`),Kg(),Mk(262,` dentro de outro `),Jc(263,`code`),Mk(264,`po-context-tabs`),Kg(),Mk(265,`;`),Kg(),Jc(266,`li`),Mk(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Jc(268,`em`),Mk(269,`scroll`),Kg(),Mk(270,` muito longo no `),Jc(271,`code`),Mk(272,`dropdown`),Kg(),Mk(273,`;`),Kg(),Jc(274,`li`),Mk(275,`Evite `),Jc(276,`code`),Mk(277,`labels`),Kg(),Mk(278,` extensos para as `),Jc(279,`code`),Mk(280,`tabs`),Kg(),Mk(281,` pois podem quebrar seu `),Jc(282,`em`),Mk(283,`layout`),Kg(),Mk(284,`, use `),Jc(285,`code`),Mk(286,`labels`),Kg(),Mk(287,` diretas, curtas e intuitivas.`),Kg()()(),Jc(288,`div`,8)(289,`h4`,9),Mk(290,`Seletor`),Kg(),Jc(291,`pre`,10),Mk(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),Kg()(),Jc(293,`h4`,11),Mk(294,`Propriedades`),Kg(),Jc(295,`table`,12)(296,`tr`,13)(297,`th`,14),Mk(298,`Nome`),Kg(),Jc(299,`th`,14),Mk(300,`Tipo`),Kg(),Jc(301,`th`,14),Mk(302,`Padrão`),Kg(),Jc(303,`th`,14),Mk(304,`Descrição`),Kg()(),Jc(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),Mk(309,` p-size`),_u(310,`br`),Kg()()(),Jc(311,`td`,19)(312,`code`,20),Mk(313,`string`),Kg()(),Jc(314,`td`,21)(315,`p`)(316,`code`),Mk(317,`medium`),Kg()()(),Jc(318,`td`,22)(319,`em`)(320,`strong`),Mk(321,`(opcional)`),Kg()(),Jc(322,`p`),Mk(323,`Define o tamanho do componente:`),Kg(),Jc(324,`ul`)(325,`li`)(326,`code`),Mk(327,`small`),Kg(),Mk(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(329,`li`)(330,`code`),Mk(331,`medium`),Kg(),Mk(332,`: altura dos tabs como 44px.`),Kg()(),Jc(333,`blockquote`)(334,`p`),Mk(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(336,`code`),Mk(337,`medium`),Kg(),Mk(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(339,`a`,23),Mk(340,`po-theme`),Kg(),Mk(341,`.`),Kg()()()()(),Jc(342,`h3`,11),Mk(343,`Métodos`),Kg(),Jc(344,`table`,24)(345,`tr`,25)(346,`th`,26)(347,`div`,17)(348,`h4`)(349,`span`,18),Mk(350,` setQuantityTabsButton `),Kg()()()()(),Jc(351,`tr`,22)(352,`td`,22)(353,`p`),Mk(354,`Função que atribui o número de tabs fora do dropdown.`),Kg(),Jc(355,`p`),Mk(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(357,`pre`)(358,`code`),Mk(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),Kg()()()()(),_u(360,`br`),Kg())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Je(l,F){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-context-tabs-basic-view`)(2,`sample-po-context-tabs-labs-view`)(3,`sample-po-context-tabs-travel-view`)(4,`sample-po-context-tabs-business-conf-view`),Kg()),l&2){let i=tk();Ab(`hidden`,i.activeTab!==`web`)}}var Ue=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Context Tabs`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Context Tabs · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0),LO(1,Je,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-context-tabs-doc`),Kg()()),a&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,ye,we,_e,Me,De],encapsulation:2,changeDetection:1})}return l})()}];var Fe=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(Ue),GV]})}return l})();var Mt=(()=>{class l{static ɵfac=function(a){return new(a||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,Fe]})}return l})();export{Mt as DocPoContextTabsModule};