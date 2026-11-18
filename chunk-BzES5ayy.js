import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,At as Zte,Ci as UO,Dr as Gk,F as Joe,G as Nf,Gi as Yk,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qn as zze,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Xr as Nk,Zi as ar,Zr as No,ar as An,ba as jO,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,eo as uF,gi as Rb,go as z0,ht as Tt,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,uo as xk,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yn as oae,yr as Du}from"./chunk-DtUf9FxZ.js";var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(l,o){l&1&&(Qc(0,`po-context-tabs`),vu(1,`po-tab`,0)(2,`po-tab`,1),Kg())},dependencies:[tre,zze],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-context-tabs-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context Tabs Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-context-tabs-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,qe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return a})();var ze=[`poTab`];function Ie(a,N){if(a&1){let i=YO();Qc(0,`po-tab`,9),vt(`p-click`,function(){let o=B_(i).$implicit,d=ek();return U_(d.onClick(o))})(`p-close-tab`,function(){let o=B_(i).$implicit,d=ek();return U_(d.onClose(o))}),Qc(1,`div`,10),Sk(2),Kg()()}if(a&2){let i=N.$implicit,l=N.$index;Rb(`p-active`,i.active)(`p-disabled`,i.disabled)(`p-hide`,i.hide)(`p-hide-close`,i.hideClose)(`p-label`,i.label),wg(2),tm(`Tab Content `,l)}}var _e=(()=>{class a{poNotification;poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:4},{property:`click`,gridColumns:4},{property:`closeTab`,label:`Close Tab`,gridColumns:4},{property:`active`,type:`boolean`,gridColumns:3},{property:`disabled`,type:`boolean`,gridColumns:3},{property:`hide`,type:`boolean`,gridColumns:3},{property:`hideClose`,label:`Hide Close`,type:`boolean`,gridColumns:3}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;constructor(i){this.poNotification=i}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(i){let l=Object.assign({},i);l.click=l.click?this.showClick.bind(this,l.click):void 0,l.closeTab=l.closeTab?this.dispachClose.bind(this,l.closeTab):void 0,this.tabs.push(l),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(i){i.click&&i.click()}onClose(i){i.closeTab&&i.closeTab()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(i){this.poNotification.success(`Action clicked: ${i}`)}dispachClose(i){this.poNotification.success(`Action closed: ${i}`)}static ɵfac=function(l){return new(l||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-labs`]],viewQuery:function(l,o){if(l&1&&Du(ze,7),l&2){let d;No(d=xo())&&(o.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-close-tab`,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[1,`po-font-subtitle`]],template:function(l,o){if(l&1){let d=YO();Qc(0,`po-context-tabs`,2,0),UO(2,Ie,3,6,`po-tab`,3,jO),Kg(),vu(4,`po-dynamic-form`,4,1),Qc(6,`div`,5)(7,`po-button`,6),vt(`p-click`,function(){B_(d);let r=ik(5);return o.addTab(r.form.value),U_(r.form.reset())}),Kg()(),vu(8,`po-divider`),Qc(9,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.size,r)||(o.size=r),U_(r)}),Kg(),Qc(10,`div`,5)(11,`po-button`,8),vt(`p-click`,function(){return o.restore()}),Kg()()}if(l&2){let d=ik(5);Rb(`p-size`,o.size),wg(2),HO(o.tabs),wg(2),Rb(`p-fields`,o.tabsFieldsForm)(`p-value`,o.tabs),wg(3),Rb(`p-disabled`,d.form.invalid),wg(2),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0()}},dependencies:[MZ,QL,oi,Nf,oae,Zte,tre,zze],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-context-tabs-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context Tabs Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-context-tabs #poTab [p-size]="size">
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
      <div class="po-font-subtitle">Tab Content { { i }}</div>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-context-tabs-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,_e],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];constructor(i){this.poNotificationService=i}bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(i,l,o){return i.valid&&this.transportation===`flight`&&o.valid||i.valid&&this.transportation===`train`&&l.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(l){return new(l||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-travel`]],standalone:!1,decls:47,vars:30,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`,`p-hide-close`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`,`p-hide-close`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`,`p-hide-close`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`,3,`p-hide-close`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let d=YO();Qc(0,`po-context-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.origin,r)||(o.origin=r),U_(r)}),Kg()(),Qc(6,`div`,5)(7,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.destination,r)||(o.destination=r),U_(r)}),Kg()(),Qc(8,`div`,5)(9,`po-datepicker`,8),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.departDate,r)||(o.departDate=r),U_(r)}),Kg(),Qc(10,`po-datepicker`,9),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.returnDate,r)||(o.returnDate=r),U_(r)}),Kg()(),Qc(11,`div`,5)(12,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.transportation,r)||(o.transportation=r),U_(r)}),Kg()()()(),Qc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.trainCompany,r)||(o.trainCompany=r),U_(r)}),Kg()(),Qc(18,`div`,5)(19,`po-select`,13),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.classTrain,r)||(o.classTrain=r),U_(r)}),Kg()()()(),Qc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.flightCompany,r)||(o.flightCompany=r),U_(r)}),Kg()(),Qc(25,`div`,5)(26,`po-select`,16),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.classFlight,r)||(o.classFlight=r),U_(r)}),Kg()()()(),Qc(27,`po-tab`,17)(28,`div`,5),vu(29,`po-info`,18),Kg(),Qc(30,`po-context-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.cardName,r)||(o.cardName=r),U_(r)}),Kg()(),Qc(36,`div`,5)(37,`po-input`,21),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.card,r)||(o.card=r),U_(r)}),Kg()(),Qc(38,`div`,5)(39,`po-input`,22),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.expiryMonth,r)||(o.expiryMonth=r),U_(r)}),Kg(),Qc(40,`po-input`,23),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.expiryYear,r)||(o.expiryYear=r),U_(r)}),Kg(),Qc(41,`po-input`,24),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(o.cvv,r)||(o.cvv=r),U_(r)}),Kg()(),Qc(42,`div`,5)(43,`po-button`,25),vt(`p-click`,function(){return o.payment()}),Kg()()()(),Qc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),vt(`p-click`,function(){return o.bankBillet()}),Kg()()()()()()}if(l&2){let d=ik(3),g=ik(15),r=ik(22),Oe=ik(33);wg(5),Yb(`ngModel`,o.origin),W0(),wg(2),Yb(`ngModel`,o.destination),W0(),wg(2),Yb(`ngModel`,o.departDate),W0(),wg(),Yb(`ngModel`,o.returnDate),Rb(`p-min-date`,o.departDate),W0(),wg(2),Yb(`ngModel`,o.transportation),Rb(`p-options`,o.transportationOptions),W0(),wg(),Rb(`p-hide`,o.transportation!==`train`)(`p-hide-close`,!0),wg(4),Yb(`ngModel`,o.trainCompany),Rb(`p-options`,o.trainCompanyOptions),W0(),wg(2),Yb(`ngModel`,o.classTrain),Rb(`p-options`,o.classTrainOptions),W0(),wg(),Rb(`p-hide`,o.transportation!==`flight`)(`p-hide-close`,!0),wg(4),Yb(`ngModel`,o.flightCompany),Rb(`p-options`,o.flightCompanyOptions),W0(),wg(2),Yb(`ngModel`,o.classFlight),Rb(`p-options`,o.classFlightOptions),W0(),wg(),Rb(`p-disabled`,o.isPaymentEnable(d,g,r)===!1)(`p-hide-close`,!0),wg(2),Rb(`p-value`,o.getTotalCost()),wg(6),Yb(`ngModel`,o.cardName),W0(),wg(2),Yb(`ngModel`,o.card),W0(),wg(2),Yb(`ngModel`,o.expiryMonth),W0(),wg(),Yb(`ngModel`,o.expiryYear),W0(),wg(),Yb(`ngModel`,o.cvv),W0(),wg(2),Rb(`p-disabled`,!Oe.form.valid||!o.totalCost),wg(),Rb(`p-hide-close`,!0),wg(2),Rb(`p-disabled`,!o.totalCost)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,tie,j4,Zte,Koe,Joe,tre,zze],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-context-tabs-travel`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context Tabs - Travel`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-context-tabs>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-context-tabs-travel`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ze,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ke],encapsulation:2,changeDetection:1})}return a})();var Ge=[`poTab`];var Je=(a,N)=>N.id;function Ue(a,N){if(a&1){let i=YO();Qc(0,`po-tab`,2),Gk(1,`date`),Qc(2,`div`,7)(3,`div`,5)(4,`div`,4)(5,`div`,8)(6,`po-widget`)(7,`div`,4)(8,`div`,9),vu(9,`po-avatar`,10),Kg(),Qc(10,`div`,11)(11,`div`,12),vu(12,`po-info`,13),Kg(),Qc(13,`div`,12),vu(14,`po-info`,14),Kg(),Qc(15,`div`,12),vu(16,`po-info`,15),Kg()()()()(),Qc(17,`div`,16)(18,`po-widget`,17)(19,`div`,18),Sk(20,`TFace Conference Week`),Kg(),Qc(21,`div`,19),Sk(22,`From 21th September until 26th setember 2018`),Kg(),vu(23,`hr`),Qc(24,`div`,4)(25,`div`,20)(26,`span`,21),vu(27,`po-icon`,22),Kg(),Qc(28,`span`,23),Sk(29),Gk(30,`date`),Kg()(),Qc(31,`div`,20)(32,`span`,21),vu(33,`po-icon`,24),Kg(),Qc(34,`span`,25),Sk(35,`Av. Braz Leme, 1000, Santana`),Kg()()(),Qc(36,`div`,26)(37,`po-button`,27),vt(`p-click`,function(){let o=B_(i).$implicit,d=ek();return U_(d.confirmSubscription(o))}),Kg()()()()()()()()}if(a&2){let i=N.$implicit;Rb(`p-label`,Nk(Yk(1,10,i.createdDate,`MMM d`)))(`p-active`,i.id===`1`)(`p-hide`,i.subscribe),wg(9),Rb(`p-src`,xk(`assets/graphics/`,i.photo)),wg(3),Rb(`p-value`,i.name),wg(2),Rb(`p-value`,i.email),wg(2),Rb(`p-value`,i.description),wg(13),Gb(Yk(30,13,i.createdDate,`MM/dd/yyyy`))}}var De=(()=>{class a{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(i){this.poNotification=i}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(i=>i.subscribe=!1)}confirmSubscription(i){this.disableRestoreBtn=!1,i.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(l){return new(l||a)(I(Ru))};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-business-conf`]],viewQuery:function(l,o){if(l&1&&Du(Ge,7),l&2){let d;No(d=xo())&&(o.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`,`po-mt-0`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(l,o){l&1&&(Qc(0,`po-page-default`,1)(1,`po-context-tabs`,null,0),UO(3,Ue,38,16,`po-tab`,2,Je),Kg(),vu(5,`hr`,3),Qc(6,`div`,4)(7,`div`,5)(8,`div`,4)(9,`po-button`,6),vt(`p-click`,function(){return o.cancelSubscription()}),Kg()()()()()),l&2&&(wg(3),HO(o.speakers),wg(6),Rb(`p-disabled`,o.disableRestoreBtn))},dependencies:[c4,oi,Tt,Joe,Mze,tre,zze,bae,uF],encapsulation:2,changeDetection:1})}return a})();var Xe=a=>({"docs-sample-code-tabs":a});var Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-context-tabs-business-conf`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context Tabs - Business Conference`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-default p-title="Check the speaker's list">
  <po-context-tabs #poTab>
    @for (speaker of speakers; track speaker.id) {
      <po-tab
        p-label="{ { speaker.createdDate | date: 'MMM d' }}"
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
                      <po-avatar p-size="xl" p-src="assets/graphics/{ { speaker.photo }}"></po-avatar>
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
                      <span class="po-font-text po-mb-2">{ { speaker.createdDate | date: 'MM/dd/yyyy' }}</span>
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-context-tabs-business-conf`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Xe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,De],encapsulation:2,changeDetection:1})}return a})();var Fe=(()=>{class a{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-context-tabs-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-context-tabs-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-setQuantityTabsButton`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoContextTabsModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-context-tabs`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoContextTabsComponent`),Kg()(),Qc(12,`div`,2)(13,`h4`),Sk(14,`Tokens customizáveis`),Kg(),Qc(15,`p`),Sk(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(17,`blockquote`)(18,`p`),Sk(19,`Para maiores informações, acesse o guia `),Qc(20,`a`,6),Sk(21,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(22,`.`),Kg()(),Qc(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),Sk(27,`Propriedade`),Kg(),Qc(28,`th`),Sk(29,`Descrição`),Kg(),Qc(30,`th`),Sk(31,`Valor Padrão`),Kg()()(),Qc(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),Sk(36,`Default Values`),Kg()(),vu(37,`td`)(38,`td`),Kg(),Qc(39,`tr`)(40,`td`)(41,`code`),Sk(42,`--background`),Kg()(),Qc(43,`td`),Sk(44,`Cor de background`),Kg(),Qc(45,`td`)(46,`code`),Sk(47,`var(--color-transparent)`),Kg()()(),Qc(48,`tr`)(49,`td`)(50,`code`),Sk(51,`--background-item-default`),Kg()(),Qc(52,`td`),Sk(53,`Cor de background do item padrão`),Kg(),Qc(54,`td`)(55,`code`),Sk(56,`var(--color-transparent)`),Kg()()(),Qc(57,`tr`)(58,`td`)(59,`code`),Sk(60,`--border-radius`),Kg()(),Qc(61,`td`),Sk(62,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(63,`td`)(64,`code`),Sk(65,`var(--border-radius-md)`),Kg()()(),Qc(66,`tr`)(67,`td`)(68,`code`),Sk(69,`--color`),Kg()(),Qc(70,`td`),Sk(71,`Cor da fonte padrão`),Kg(),Qc(72,`td`)(73,`code`),Sk(74,`var(--color-action-default)`),Kg()()(),Qc(75,`tr`)(76,`td`)(77,`code`),Sk(78,`--color-baseline`),Kg()(),Qc(79,`td`),Sk(80,`Cor para box-shadow`),Kg(),Qc(81,`td`)(82,`code`),Sk(83,`var(--color-neutral-light-20)`),Kg()()(),Qc(84,`tr`)(85,`td`)(86,`code`),Sk(87,`--font-family`),Kg()(),Qc(88,`td`),Sk(89,`Família tipográfica usada`),Kg(),Qc(90,`td`)(91,`code`),Sk(92,`var(--font-family-theme)`),Kg()()(),Qc(93,`tr`)(94,`td`)(95,`code`),Sk(96,`--font-size`),Kg()(),Qc(97,`td`),Sk(98,`Tamanho da fonte`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--font-size-default)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`code`),Sk(105,`--font-weight`),Kg()(),Qc(106,`td`),Sk(107,`Peso da fonte`),Kg(),Qc(108,`td`)(109,`code`),Sk(110,`var(--font-weight-bold)`),Kg()()(),Qc(111,`tr`)(112,`td`)(113,`code`),Sk(114,`--margin-tabs-container-left`),Kg()(),Qc(115,`td`),Sk(116,`Margem lateral esquerda do componente quando usado dentro de um `),Qc(117,`code`),Sk(118,`page-default`),Kg()(),Qc(119,`td`)(120,`code`),Sk(121,`var(--spacing-md)`),Kg()()(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--margin-tabs-container-right`),Kg()(),Qc(126,`td`),Sk(127,`Margem lateral direita do componente quando usado dentro de um `),Qc(128,`code`),Sk(129,`page-default`),Kg()(),Qc(130,`td`)(131,`code`),Sk(132,`-16px`),Kg()()(),Qc(133,`tr`)(134,`td`)(135,`code`),Sk(136,`--padding-tabs-header`),Kg()(),Qc(137,`td`),Sk(138,`Padding do valor lateral das abas`),Kg(),Qc(139,`td`)(140,`code`),Sk(141,`var(--spacing-sm)`),Kg()()(),Qc(142,`tr`)(143,`td`)(144,`code`),Sk(145,`--margin-tabs-first-child`),Kg()(),Qc(146,`td`),Sk(147,`Margem lateral da primeira aba`),Kg(),Qc(148,`td`)(149,`code`),Sk(150,`var(--spacing-md)`),Kg()()(),Qc(151,`tr`)(152,`td`)(153,`code`),Sk(154,`--margin-tabs-last-child`),Kg()(),Qc(155,`td`),Sk(156,`Margem lateral da ultima aba`),Kg(),Qc(157,`td`)(158,`code`),Sk(159,`var(--spacing-md)`),Kg()()(),Qc(160,`tr`)(161,`td`)(162,`strong`),Sk(163,`Disabled`),Kg()(),vu(164,`td`)(165,`td`),Kg(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--color-disabled`),Kg()(),Qc(170,`td`),Sk(171,`Cor da fonte no estado disabilitado`),Kg(),Qc(172,`td`)(173,`code`),Sk(174,`var(--color-action-disabled)`),Kg()()(),Qc(175,`tr`)(176,`td`)(177,`code`),Sk(178,`--background-item-disabled`),Kg(),Sk(179,`\xA0`),Kg(),Qc(180,`td`),Sk(181,`Cor de background do item desabilitado`),Kg(),Qc(182,`td`)(183,`code`),Sk(184,`var(--color-neutral-light-10)`),Kg()()(),Qc(185,`tr`)(186,`td`)(187,`strong`),Sk(188,`Focused`),Kg()(),vu(189,`td`)(190,`td`),Kg(),Qc(191,`tr`)(192,`td`)(193,`code`),Sk(194,`--outline-color-focused`),Kg()(),Qc(195,`td`),Sk(196,`Cor do outline do estado de focus`),Kg(),Qc(197,`td`)(198,`code`),Sk(199,`var(--color-action-focus)`),Kg()()(),Qc(200,`tr`)(201,`td`)(202,`strong`),Sk(203,`Hover`),Kg()(),vu(204,`td`)(205,`td`),Kg(),Qc(206,`tr`)(207,`td`)(208,`code`),Sk(209,`--color-hover`),Kg()(),Qc(210,`td`),Sk(211,`Cor principal no estado hover`),Kg(),Qc(212,`td`)(213,`code`),Sk(214,`var(--color-brand-01-darkest)`),Kg()()(),Qc(215,`tr`)(216,`td`)(217,`code`),Sk(218,`--background-item-hover`),Kg()(),Qc(219,`td`),Sk(220,`Cor de background no estado de hover`),Kg(),Qc(221,`td`)(222,`code`),Sk(223,`var(--color-brand-01-lightest)`),Kg()()(),Qc(224,`tr`)(225,`td`)(226,`strong`),Sk(227,`Selected`),Kg()(),vu(228,`td`)(229,`td`),Kg(),Qc(230,`tr`)(231,`td`)(232,`code`),Sk(233,`--background-item-selected`),Kg()(),Qc(234,`td`),Sk(235,`Cor de background do item selecionado`),Kg(),Qc(236,`td`)(237,`code`),Sk(238,`var(--color-brand-01-lightest)`),Kg()()()()(),Qc(239,`p`),vu(240,`br`),Sk(241,` O componente `),Qc(242,`code`),Sk(243,`po-context-tabs`),Kg(),Sk(244,` é responsável por agrupar `),Qc(245,`a`,7),Sk(246,`abas`),Kg(),Sk(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),Kg(),Qc(248,`p`),Sk(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),Kg(),Qc(250,`blockquote`)(251,`p`),Sk(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),Kg()(),Qc(253,`p`),Sk(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),Kg(),Qc(255,`h4`),Sk(256,`Boas práticas`),Kg(),Qc(257,`ul`)(258,`li`),Sk(259,`Evite utilizar um `),Qc(260,`code`),Sk(261,`po-context-tabs`),Kg(),Sk(262,` dentro de outro `),Qc(263,`code`),Sk(264,`po-context-tabs`),Kg(),Sk(265,`;`),Kg(),Qc(266,`li`),Sk(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Qc(268,`em`),Sk(269,`scroll`),Kg(),Sk(270,` muito longo no `),Qc(271,`code`),Sk(272,`dropdown`),Kg(),Sk(273,`;`),Kg(),Qc(274,`li`),Sk(275,`Evite `),Qc(276,`code`),Sk(277,`labels`),Kg(),Sk(278,` extensos para as `),Qc(279,`code`),Sk(280,`tabs`),Kg(),Sk(281,` pois podem quebrar seu `),Qc(282,`em`),Sk(283,`layout`),Kg(),Sk(284,`, use `),Qc(285,`code`),Sk(286,`labels`),Kg(),Sk(287,` diretas, curtas e intuitivas.`),Kg()()(),Qc(288,`div`,8)(289,`h4`,9),Sk(290,`Seletor`),Kg(),Qc(291,`pre`,10),Sk(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),Kg()(),Qc(293,`h4`,11),Sk(294,`Propriedades`),Kg(),Qc(295,`table`,12)(296,`tr`,13)(297,`th`,14),Sk(298,`Nome`),Kg(),Qc(299,`th`,14),Sk(300,`Tipo`),Kg(),Qc(301,`th`,14),Sk(302,`Padrão`),Kg(),Qc(303,`th`,14),Sk(304,`Descrição`),Kg()(),Qc(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),Sk(309,` p-size`),vu(310,`br`),Kg()()(),Qc(311,`td`,19)(312,`code`,20),Sk(313,`string`),Kg()(),Qc(314,`td`,21)(315,`p`)(316,`code`),Sk(317,`medium`),Kg()()(),Qc(318,`td`,22)(319,`em`)(320,`strong`),Sk(321,`(opcional)`),Kg()(),Qc(322,`p`),Sk(323,`Define o tamanho do componente:`),Kg(),Qc(324,`ul`)(325,`li`)(326,`code`),Sk(327,`small`),Kg(),Sk(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(329,`li`)(330,`code`),Sk(331,`medium`),Kg(),Sk(332,`: altura dos tabs como 44px.`),Kg()(),Qc(333,`blockquote`)(334,`p`),Sk(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(336,`code`),Sk(337,`medium`),Kg(),Sk(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(339,`a`,23),Sk(340,`po-theme`),Kg(),Sk(341,`.`),Kg()()()()(),Qc(342,`h3`,11),Sk(343,`Métodos`),Kg(),Qc(344,`table`,24)(345,`tr`,25)(346,`th`,26)(347,`div`,17)(348,`h4`)(349,`span`,18),Sk(350,` setQuantityTabsButton `),Kg()()()()(),Qc(351,`tr`,22)(352,`td`,22)(353,`p`),Sk(354,`Função que atribui o número de tabs fora do dropdown.`),Kg(),Qc(355,`p`),Sk(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(357,`pre`)(358,`code`),Sk(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),Kg()()()()(),vu(360,`br`),Kg())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function tt(a,N){if(a&1){let i=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(i);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-context-tabs-basic-view`)(2,`sample-po-context-tabs-labs-view`)(3,`sample-po-context-tabs-travel-view`)(4,`sample-po-context-tabs-business-conf-view`),Kg()}if(a&2){let i=ek();Rb(`p-active`,i.activeTab===`web`)}}var nt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Context Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,tt,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-context-tabs-doc`),Kg()()()),l&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,we,Pe,Me,Be,Fe],encapsulation:2,changeDetection:1})}return a})()}];var We=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(nt),GV]})}return a})();var Wt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,We]})}return a})();export{Wt as DocPoContextTabsModule};