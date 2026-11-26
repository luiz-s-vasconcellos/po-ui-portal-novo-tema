import{m as P,p as M}from"./main-RU54IPUI.js";import{$r as No,Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,En as tie,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Hr as Kk,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Lt as c4,Mi as WL,Mt as Zte,Na as ok,Ni as Wb,Pi as Wk,Pr as I,Qa as uF,Qn as AZ,R as Koe,Si as UO,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yn as $O,_a as jO,_i as RZ,ar as B_,ca as ge,dn as oae,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,gt as Tt,it as Ru,ja as nm,jr as H_,kr as HO,li as QL,lt as Ss,qr as Mk,ro as wg,so as xZ,ti as Ok,tn as j4,tr as An,uo as xk,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(o,i){o&1&&(Jc(0,`po-tabs`),_u(1,`po-tab`,0)(2,`po-tab`,1),Kg())},dependencies:[tre,are],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-tabs-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tabs Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tabs-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ye],encapsulation:2,changeDetection:1})}return a})();var Ne=[`poTab`];function Ae(a,O){if(a&1){let l=KO();Jc(0,`po-tab`,9),_t(`p-click`,function(){let i=U_(l).$implicit,d=tk();return H_(d.onClick(i))}),Jc(1,`div`,10),Mk(2),Kg()()}if(a&2){let l=O.$implicit,o=O.$index;Ab(`p-active`,l.active)(`p-disabled`,l.disabled)(`p-hide`,l.hide)(`p-label`,l.label),wg(2),nm(`Tab Content `,o)}}var we=(()=>{class a{poNotification=p(Ru);poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:6},{property:`click`,gridColumns:6},{property:`active`,type:`boolean`,gridColumns:4},{property:`disabled`,type:`boolean`,gridColumns:4},{property:`hide`,type:`boolean`,gridColumns:4}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(l){let o=Object.assign({},l);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(l){l.click&&l.click()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-labs`]],viewQuery:function(o,i){if(o&1&&Cu(Ne,7),o&2){let d;No(d=xo())&&(i.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-active`,`p-disabled`,`p-hide`,`p-label`],[1,`po-font-subtitle`]],template:function(o,i){if(o&1){let d=KO();Jc(0,`po-tabs`,2,0),HO(2,Ae,3,5,`po-tab`,3,UO),Kg(),_u(4,`po-dynamic-form`,4,1),Jc(6,`div`,5)(7,`po-button`,6),_t(`p-click`,function(){U_(d);let r=ok(5);return i.addTab(r.form.value),H_(r.form.reset())}),Kg()(),_u(8,`po-divider`),Jc(9,`po-radio-group`,7),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.size,r)||(i.size=r),H_(r)}),Kg(),Jc(10,`div`,5)(11,`po-button`,8),_t(`p-click`,function(){return i.restore()}),Kg()()}if(o&2){let d=ok(5);Ab(`p-size`,i.size),wg(2),$O(i.tabs),wg(2),Ab(`p-fields`,i.tabsFieldsForm)(`p-value`,i.tabs),wg(3),Ab(`p-disabled`,d.form.invalid),wg(2),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),q0()}},dependencies:[RZ,QL,oi,Nf,oae,Zte,tre,are],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-tabs-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tabs Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tabs-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-tabs #poTab [p-size]="size">
  @for (tab of tabs; track tab; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
    >
      <div class="po-font-subtitle">Tab Content `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` i `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</div>
    </po-tab>
  }
</po-tabs>

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
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-labs',
  templateUrl: './sample-po-tabs-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 6 },
    { property: 'click', gridColumns: 6 },
    { property: 'active', type: 'boolean', gridColumns: 4 },
    { property: 'disabled', type: 'boolean', gridColumns: 4 },
    { property: 'hide', type: 'boolean', gridColumns: 4 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
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

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{poNotificationService=p(Ru);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(l,o,i){return l.valid&&this.transportation===`flight`&&i.valid||l.valid&&this.transportation===`train`&&o.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-travel`]],standalone:!1,decls:47,vars:26,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(o,i){if(o&1){let d=KO();Jc(0,`po-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.origin,r)||(i.origin=r),H_(r)}),Kg()(),Jc(6,`div`,5)(7,`po-input`,7),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.destination,r)||(i.destination=r),H_(r)}),Kg()(),Jc(8,`div`,5)(9,`po-datepicker`,8),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.departDate,r)||(i.departDate=r),H_(r)}),Kg(),Jc(10,`po-datepicker`,9),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.returnDate,r)||(i.returnDate=r),H_(r)}),Kg()(),Jc(11,`div`,5)(12,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.transportation,r)||(i.transportation=r),H_(r)}),Kg()()()(),Jc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.trainCompany,r)||(i.trainCompany=r),H_(r)}),Kg()(),Jc(18,`div`,5)(19,`po-select`,13),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.classTrain,r)||(i.classTrain=r),H_(r)}),Kg()()()(),Jc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.flightCompany,r)||(i.flightCompany=r),H_(r)}),Kg()(),Jc(25,`div`,5)(26,`po-select`,16),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.classFlight,r)||(i.classFlight=r),H_(r)}),Kg()()()(),Jc(27,`po-tab`,17)(28,`div`,5),_u(29,`po-info`,18),Kg(),Jc(30,`po-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.cardName,r)||(i.cardName=r),H_(r)}),Kg()(),Jc(36,`div`,5)(37,`po-input`,21),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.card,r)||(i.card=r),H_(r)}),Kg()(),Jc(38,`div`,5)(39,`po-input`,22),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.expiryMonth,r)||(i.expiryMonth=r),H_(r)}),Kg(),Jc(40,`po-input`,23),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.expiryYear,r)||(i.expiryYear=r),H_(r)}),Kg(),Jc(41,`po-input`,24),G0(),Zb(`ngModelChange`,function(r){return U_(d),Rk(i.cvv,r)||(i.cvv=r),H_(r)}),Kg()(),Jc(42,`div`,5)(43,`po-button`,25),_t(`p-click`,function(){return i.payment()}),Kg()()()(),Jc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),_t(`p-click`,function(){return i.bankBillet()}),Kg()()()()()()}if(o&2){let d=ok(3),u=ok(15),r=ok(22),Ve=ok(33);wg(5),Kb(`ngModel`,i.origin),q0(),wg(2),Kb(`ngModel`,i.destination),q0(),wg(2),Kb(`ngModel`,i.departDate),q0(),wg(),Kb(`ngModel`,i.returnDate),Ab(`p-min-date`,i.departDate),q0(),wg(2),Kb(`ngModel`,i.transportation),Ab(`p-options`,i.transportationOptions),q0(),wg(),Ab(`p-hide`,i.transportation!==`train`),wg(4),Kb(`ngModel`,i.trainCompany),Ab(`p-options`,i.trainCompanyOptions),q0(),wg(2),Kb(`ngModel`,i.classTrain),Ab(`p-options`,i.classTrainOptions),q0(),wg(),Ab(`p-hide`,i.transportation!==`flight`),wg(4),Kb(`ngModel`,i.flightCompany),Ab(`p-options`,i.flightCompanyOptions),q0(),wg(2),Kb(`ngModel`,i.classFlight),Ab(`p-options`,i.classFlightOptions),q0(),wg(),Ab(`p-disabled`,i.isPaymentEnable(d,u,r)===!1),wg(2),Ab(`p-value`,i.getTotalCost()),wg(6),Kb(`ngModel`,i.cardName),q0(),wg(2),Kb(`ngModel`,i.card),q0(),wg(2),Kb(`ngModel`,i.expiryMonth),q0(),wg(),Kb(`ngModel`,i.expiryYear),q0(),wg(),Kb(`ngModel`,i.cvv),q0(),wg(2),Ab(`p-disabled`,!Ve.form.valid||!i.totalCost),wg(3),Ab(`p-disabled`,!i.totalCost)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,tie,j4,Zte,Koe,Joe,tre,are],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-travel-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-tabs-travel`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tabs - Travel`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tabs-travel`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-tabs>
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
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'">
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
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'">
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
  <po-tab p-label="Payment" [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-tabs>
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

      <po-tab p-label="Bank Billet">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-tabs>
  </po-tab>
</po-tabs>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-travel',
  templateUrl: './sample-po-tabs-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsTravelComponent {
  private poNotificationService = inject(PoNotificationService);

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Pe],encapsulation:2,changeDetection:1})}return a})();var Ie=[`poTab`];function He(a,O){if(a&1){let l=KO();Jc(0,`po-tab`,2),Wk(1,`date`),Jc(2,`div`,6)(3,`div`,4)(4,`div`,3)(5,`div`,7)(6,`po-widget`)(7,`div`,3)(8,`div`,8),_u(9,`po-avatar`,9),Kg(),Jc(10,`div`,10)(11,`div`,11),_u(12,`po-info`,12),Kg(),Jc(13,`div`,11),_u(14,`po-info`,13),Kg(),Jc(15,`div`,11),_u(16,`po-info`,14),Kg()()()()(),Jc(17,`div`,15)(18,`po-widget`,16)(19,`div`,17),Mk(20,`TFace Conference Week`),Kg(),Jc(21,`div`,18),Mk(22,`From 21th September until 26th setember 2018`),Kg(),_u(23,`po-divider`),Jc(24,`div`,3)(25,`div`,19)(26,`span`,20),_u(27,`po-icon`,21),Kg(),Jc(28,`span`,22),Mk(29),Wk(30,`date`),Kg()(),Jc(31,`div`,19)(32,`span`,20),_u(33,`po-icon`,23),Kg(),Jc(34,`span`,24),Mk(35,`Av. Braz Leme, 1000, Santana`),Kg()()(),Jc(36,`div`,25)(37,`po-button`,26),_t(`p-click`,function(){let i=U_(l).$implicit,d=tk();return H_(d.confirmSubscription(i))}),Kg()()()()()()()()}if(a&2){let l=O.$implicit;Ab(`p-label`,xk(Kk(1,10,l.createdDate,`MMM d`)))(`p-active`,l.id===`1`)(`p-hide`,l.subscribe),wg(9),Ab(`p-src`,Ok(`assets/graphics/`,l.photo)),wg(3),Ab(`p-value`,l.name),wg(2),Ab(`p-value`,l.email),wg(2),Ab(`p-value`,l.description),wg(13),Wb(Kk(30,13,l.createdDate,`MM/dd/yyyy`))}}var ke=(()=>{class a{poNotification=p(Ru);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(l=>l.subscribe=!1)}confirmSubscription(l){this.disableRestoreBtn=!1,l.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-business-conf`]],viewQuery:function(o,i){if(o&1&&Cu(Ie,7),o&2){let d;No(d=xo())&&(i.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,1)(1,`po-tabs`,null,0),HO(3,He,38,16,`po-tab`,2,UO),Kg(),_u(5,`po-divider`),Jc(6,`div`,3)(7,`div`,4)(8,`div`,3)(9,`po-button`,5),_t(`p-click`,function(){return i.cancelSubscription()}),Kg()()()()()),o&2&&(wg(3),$O(i.speakers),wg(6),Ab(`p-disabled`,i.disableRestoreBtn))},dependencies:[c4,oi,Nf,Tt,Joe,Mze,tre,are,yae,uF],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-business-conf-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-tabs-business-conf`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tabs - Business Conference`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tabs-business-conf`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    @for (speaker of speakers; track speaker) {
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
                  <po-divider />
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
  </po-tabs>

  <po-divider />

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
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-business-conf',
  templateUrl: './sample-po-tabs-business-conf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBusinessConfComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

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
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,ke],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-doc`]],standalone:!1,decls:403,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Tab`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-tabs-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-setQuantityTabsButton`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-activateTab`,1,`docs-api-method-table`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoTabsModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-tabs`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Subcomponentes:`),Kg(),Jc(10,`po-tag`,4),_t(`p-click`,function(){return i.openDoc(`po-tab`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoTabsComponent`),Kg()(),Jc(16,`div`,2)(17,`h4`),Mk(18,`Tokens customizáveis`),Kg(),Jc(19,`p`),Mk(20,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(21,`blockquote`)(22,`p`),Mk(23,`Para maiores informações, acesse o guia `),Jc(24,`a`,8),Mk(25,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(26,`.`),Kg()(),Jc(27,`table`)(28,`thead`)(29,`tr`)(30,`th`),Mk(31,`Propriedade`),Kg(),Jc(32,`th`),Mk(33,`Descrição`),Kg(),Jc(34,`th`),Mk(35,`Valor Padrão`),Kg()()(),Jc(36,`tbody`)(37,`tr`)(38,`td`)(39,`strong`),Mk(40,`Default Values`),Kg()(),_u(41,`td`)(42,`td`),Kg(),Jc(43,`tr`)(44,`td`)(45,`code`),Mk(46,`--background`),Kg()(),Jc(47,`td`),Mk(48,`Cor de background`),Kg(),Jc(49,`td`)(50,`code`),Mk(51,`var(--color-transparent)`),Kg()()(),Jc(52,`tr`)(53,`td`)(54,`code`),Mk(55,`--background-item-default`),Kg()(),Jc(56,`td`),Mk(57,`Cor de background do item padrão`),Kg(),Jc(58,`td`)(59,`code`),Mk(60,`var(--color-transparent)`),Kg()()(),Jc(61,`tr`)(62,`td`)(63,`code`),Mk(64,`--border-radius`),Kg()(),Jc(65,`td`),Mk(66,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(67,`td`)(68,`code`),Mk(69,`var(--border-radius-md)`),Kg()()(),Jc(70,`tr`)(71,`td`)(72,`code`),Mk(73,`--color`),Kg()(),Jc(74,`td`),Mk(75,`Cor da fonte padrão`),Kg(),Jc(76,`td`)(77,`code`),Mk(78,`var(--color-action-default)`),Kg()()(),Jc(79,`tr`)(80,`td`)(81,`code`),Mk(82,`--color-baseline`),Kg()(),Jc(83,`td`),Mk(84,`Cor para box-shadow`),Kg(),Jc(85,`td`)(86,`code`),Mk(87,`var(--color-neutral-light-20)`),Kg()()(),Jc(88,`tr`)(89,`td`)(90,`code`),Mk(91,`--font-family`),Kg()(),Jc(92,`td`),Mk(93,`Família tipográfica usada`),Kg(),Jc(94,`td`)(95,`code`),Mk(96,`var(--font-family-theme)`),Kg()()(),Jc(97,`tr`)(98,`td`)(99,`code`),Mk(100,`--font-size`),Kg()(),Jc(101,`td`),Mk(102,`Tamanho da fonte`),Kg(),Jc(103,`td`)(104,`code`),Mk(105,`var(--font-size-default)`),Kg()()(),Jc(106,`tr`)(107,`td`)(108,`code`),Mk(109,`--font-weight`),Kg()(),Jc(110,`td`),Mk(111,`Peso da fonte`),Kg(),Jc(112,`td`)(113,`code`),Mk(114,`var(--font-weight-bold)`),Kg()()(),Jc(115,`tr`)(116,`td`)(117,`code`),Mk(118,`--margin-tabs-container-left`),Kg()(),Jc(119,`td`),Mk(120,`Margem lateral esquerda do componente quando usado dentro de um `),Jc(121,`code`),Mk(122,`page-default`),Kg()(),Jc(123,`td`)(124,`code`),Mk(125,`var(--spacing-md)`),Kg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--margin-tabs-container-right`),Kg()(),Jc(130,`td`),Mk(131,`Margem lateral direita do componente quando usado dentro de um `),Jc(132,`code`),Mk(133,`page-default`),Kg()(),Jc(134,`td`)(135,`code`),Mk(136,`-16px`),Kg()()(),Jc(137,`tr`)(138,`td`)(139,`code`),Mk(140,`--padding-tabs-header`),Kg()(),Jc(141,`td`),Mk(142,`Padding do valor lateral das abas`),Kg(),Jc(143,`td`)(144,`code`),Mk(145,`var(--spacing-sm)`),Kg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Mk(149,`--margin-tabs-first-child`),Kg()(),Jc(150,`td`),Mk(151,`Margem lateral da primeira aba`),Kg(),Jc(152,`td`)(153,`code`),Mk(154,`var(--spacing-md)`),Kg()()(),Jc(155,`tr`)(156,`td`)(157,`code`),Mk(158,`--margin-tabs-last-child`),Kg()(),Jc(159,`td`),Mk(160,`Margem lateral da ultima aba`),Kg(),Jc(161,`td`)(162,`code`),Mk(163,`var(--spacing-md)`),Kg()()(),Jc(164,`tr`)(165,`td`)(166,`strong`),Mk(167,`Disabled`),Kg()(),_u(168,`td`)(169,`td`),Kg(),Jc(170,`tr`)(171,`td`)(172,`code`),Mk(173,`--color-disabled`),Kg()(),Jc(174,`td`),Mk(175,`Cor da fonte no estado disabilitado`),Kg(),Jc(176,`td`)(177,`code`),Mk(178,`var(--color-action-disabled)`),Kg()()(),Jc(179,`tr`)(180,`td`)(181,`code`),Mk(182,`--background-item-disabled`),Kg(),Mk(183,`\xA0`),Kg(),Jc(184,`td`),Mk(185,`Cor de background do item desabilitado`),Kg(),Jc(186,`td`)(187,`code`),Mk(188,`var(--color-neutral-light-10)`),Kg()()(),Jc(189,`tr`)(190,`td`)(191,`strong`),Mk(192,`Focused`),Kg()(),_u(193,`td`)(194,`td`),Kg(),Jc(195,`tr`)(196,`td`)(197,`code`),Mk(198,`--outline-color-focused`),Kg()(),Jc(199,`td`),Mk(200,`Cor do outline do estado de focus`),Kg(),Jc(201,`td`)(202,`code`),Mk(203,`var(--color-action-focus)`),Kg()()(),Jc(204,`tr`)(205,`td`)(206,`strong`),Mk(207,`Hover`),Kg()(),_u(208,`td`)(209,`td`),Kg(),Jc(210,`tr`)(211,`td`)(212,`code`),Mk(213,`--color-hover`),Kg()(),Jc(214,`td`),Mk(215,`Cor principal no estado hover`),Kg(),Jc(216,`td`)(217,`code`),Mk(218,`var(--color-brand-01-darkest)`),Kg()()(),Jc(219,`tr`)(220,`td`)(221,`code`),Mk(222,`--background-item-hover`),Kg()(),Jc(223,`td`),Mk(224,`Cor de background no estado de hover`),Kg(),Jc(225,`td`)(226,`code`),Mk(227,`var(--color-brand-01-lightest)`),Kg()()(),Jc(228,`tr`)(229,`td`)(230,`strong`),Mk(231,`Selected`),Kg()(),_u(232,`td`)(233,`td`),Kg(),Jc(234,`tr`)(235,`td`)(236,`code`),Mk(237,`--background-item-selected`),Kg()(),Jc(238,`td`),Mk(239,`Cor de background do item selecionado`),Kg(),Jc(240,`td`)(241,`code`),Mk(242,`var(--color-brand-01-lightest)`),Kg()()()()(),Jc(243,`p`),_u(244,`br`),Mk(245,` O componente `),Jc(246,`code`),Mk(247,`po-tabs`),Kg(),Mk(248,` é responsável por agrupar `),Jc(249,`a`,9),Mk(250,`abas`),Kg(),Mk(251,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),Kg(),Jc(252,`p`),Mk(253,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),Kg(),Jc(254,`blockquote`)(255,`p`),Mk(256,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),Kg()(),Jc(257,`p`),Mk(258,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),Kg(),Jc(259,`h4`),Mk(260,`Boas práticas`),Kg(),Jc(261,`ul`)(262,`li`),Mk(263,`Evite utilizar um `),Jc(264,`code`),Mk(265,`po-tabs`),Kg(),Mk(266,` dentro de outro `),Jc(267,`code`),Mk(268,`po-tabs`),Kg(),Mk(269,`;`),Kg(),Jc(270,`li`),Mk(271,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Jc(272,`em`),Mk(273,`scroll`),Kg(),Mk(274,` muito longo no `),Jc(275,`code`),Mk(276,`dropdown`),Kg(),Mk(277,`;`),Kg(),Jc(278,`li`),Mk(279,`Evite `),Jc(280,`code`),Mk(281,`labels`),Kg(),Mk(282,` extensos para as `),Jc(283,`code`),Mk(284,`tabs`),Kg(),Mk(285,` pois podem quebrar seu `),Jc(286,`em`),Mk(287,`layout`),Kg(),Mk(288,`, use `),Jc(289,`code`),Mk(290,`labels`),Kg(),Mk(291,` diretas, curtas e intuitivas.`),Kg()()(),Jc(292,`div`,10)(293,`h4`,11),Mk(294,`Seletor`),Kg(),Jc(295,`pre`,12),Mk(296,`<po-tabs
    p-size="string" >
</po-tabs>
`),Kg()(),Jc(297,`h4`,13),Mk(298,`Propriedades`),Kg(),Jc(299,`table`,14)(300,`tr`,15)(301,`th`,16),Mk(302,`Nome`),Kg(),Jc(303,`th`,16),Mk(304,`Tipo`),Kg(),Jc(305,`th`,16),Mk(306,`Padrão`),Kg(),Jc(307,`th`,16),Mk(308,`Descrição`),Kg()(),Jc(309,`tr`,17)(310,`td`,18)(311,`div`,19)(312,`span`,20),Mk(313,` p-size`),_u(314,`br`),Kg()()(),Jc(315,`td`,21)(316,`code`,22),Mk(317,`string`),Kg()(),Jc(318,`td`,23)(319,`p`)(320,`code`),Mk(321,`medium`),Kg()()(),Jc(322,`td`,24)(323,`em`)(324,`strong`),Mk(325,`(opcional)`),Kg()(),Jc(326,`p`),Mk(327,`Define o tamanho do componente:`),Kg(),Jc(328,`ul`)(329,`li`)(330,`code`),Mk(331,`small`),Kg(),Mk(332,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(333,`li`)(334,`code`),Mk(335,`medium`),Kg(),Mk(336,`: altura dos tabs como 44px.`),Kg()(),Jc(337,`blockquote`)(338,`p`),Mk(339,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(340,`code`),Mk(341,`medium`),Kg(),Mk(342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(343,`a`,25),Mk(344,`po-theme`),Kg(),Mk(345,`.`),Kg()()()()(),Jc(346,`h3`,13),Mk(347,`Métodos`),Kg(),Jc(348,`table`,26)(349,`tr`,27)(350,`th`,28)(351,`div`,19)(352,`h4`)(353,`span`,20),Mk(354,` setQuantityTabsButton `),Kg()()()()(),Jc(355,`tr`,24)(356,`td`,24)(357,`p`),Mk(358,`Função que atribui o número de tabs fora do dropdown.`),Kg(),Jc(359,`p`),Mk(360,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(361,`pre`)(362,`code`),Mk(363,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),Kg()()()()(),_u(364,`br`),Jc(365,`table`,29)(366,`tr`,27)(367,`th`,28)(368,`div`,19)(369,`h4`)(370,`span`,20),Mk(371,` activateTab `),Kg()()()()(),Jc(372,`tr`,24)(373,`td`,24)(374,`p`),Mk(375,`Ativa a aba correspondente ao `),Jc(376,`code`),Mk(377,`id`),Kg(),Mk(378,` informado.`),Kg(),Jc(379,`p`),Mk(380,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(381,`pre`)(382,`code`),Mk(383,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),Kg()()()()(),Jc(384,`h5`)(385,`b`),Mk(386,`Parâmetros`),Kg()(),Jc(387,`table`,14)(388,`tr`,15)(389,`th`,16),Mk(390,`Nome`),Kg(),Jc(391,`th`,16),Mk(392,`Tipo`),Kg(),Jc(393,`th`,16),Mk(394,`Descrição`),Kg()(),Jc(395,`tr`,27)(396,`td`,18),Mk(397,` id`),Kg(),_u(398,`td`,21),Jc(399,`td`,24)(400,`p`),Mk(401,`Identificador único da aba a ser ativada.`),Kg()()()(),_u(402,`br`),Kg())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function Ge(a,O){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-tabs-basic-view`)(2,`sample-po-tabs-labs-view`)(3,`sample-po-tabs-travel-view`)(4,`sample-po-tabs-business-conf-view`),Kg()),a&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Tabs`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Tabs · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0),LO(1,Ge,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-tabs-doc`),Kg()()),o&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Ee,xe,_e,Me,De],encapsulation:2,changeDetection:1})}return a})()}];var Fe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Je),GV]})}return a})();var jt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Fe]})}return a})();export{jt as DocPoTabsModule};