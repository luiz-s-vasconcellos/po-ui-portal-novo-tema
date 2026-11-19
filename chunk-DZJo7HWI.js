import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,Ci as UO,Dr as Gk,F as Joe,G as Nf,Gi as Yk,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Tr as Gb,Ui as YO,Va as p,Vt as c4,W as Mze,Wi as Yb,Wr as MZ,Xr as Nk,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,eo as uF,gi as Rb,go as z0,ht as Tt,io as vu,ji as Vk,ki as V_,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,sr as BO,ua as ge,uo as xk,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yn as oae,yr as Du}from"./chunk-DtUf9FxZ.js";var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(o,i){o&1&&(Qc(0,`po-tabs`),vu(1,`po-tab`,0)(2,`po-tab`,1),Kg())},dependencies:[tre,are],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-tabs-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tabs Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-tabs-basic`),Kg(),vu(25,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Pe],encapsulation:2,changeDetection:1})}return a})();var Re=[`poTab`];function je(a,A){if(a&1){let l=YO();Qc(0,`po-tab`,9),vt(`p-click`,function(){let i=B_(l).$implicit,d=ek();return U_(d.onClick(i))}),Qc(1,`div`,10),Sk(2),Kg()()}if(a&2){let l=A.$implicit,o=A.$index;Rb(`p-active`,l.active)(`p-disabled`,l.disabled)(`p-hide`,l.hide)(`p-label`,l.label),wg(2),tm(`Tab Content `,o)}}var ke=(()=>{class a{poNotification=p(Ru);poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:6},{property:`click`,gridColumns:6},{property:`active`,type:`boolean`,gridColumns:4},{property:`disabled`,type:`boolean`,gridColumns:4},{property:`hide`,type:`boolean`,gridColumns:4}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(l){let o=Object.assign({},l);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(l){l.click&&l.click()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-labs`]],viewQuery:function(o,i){if(o&1&&Du(Re,7),o&2){let d;No(d=xo())&&(i.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-active`,`p-disabled`,`p-hide`,`p-label`],[1,`po-font-subtitle`]],template:function(o,i){if(o&1){let d=YO();Qc(0,`po-tabs`,2,0),UO(2,je,3,5,`po-tab`,3,BO),Kg(),vu(4,`po-dynamic-form`,4,1),Qc(6,`div`,5)(7,`po-button`,6),vt(`p-click`,function(){B_(d);let r=ik(5);return i.addTab(r.form.value),U_(r.form.reset())}),Kg()(),vu(8,`po-divider`),Qc(9,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.size,r)||(i.size=r),U_(r)}),Kg(),Qc(10,`div`,5)(11,`po-button`,8),vt(`p-click`,function(){return i.restore()}),Kg()()}if(o&2){let d=ik(5);Rb(`p-size`,i.size),wg(2),HO(i.tabs),wg(2),Rb(`p-fields`,i.tabsFieldsForm)(`p-value`,i.tabs),wg(3),Rb(`p-disabled`,d.form.invalid),wg(2),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0()}},dependencies:[MZ,QL,oi,Nf,oae,Zte,tre,are],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-labs-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-tabs-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tabs Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-tabs #poTab [p-size]="size">
  @for (tab of tabs; track tab; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
    >
      <div class="po-font-subtitle">Tab Content `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` i `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</div>
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-tabs-labs`),Kg(),vu(31,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Qe,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ke],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{poNotificationService=p(Ru);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(l,o,i){return l.valid&&this.transportation===`flight`&&i.valid||l.valid&&this.transportation===`train`&&o.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-travel`]],standalone:!1,decls:47,vars:26,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(o,i){if(o&1){let d=YO();Qc(0,`po-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.origin,r)||(i.origin=r),U_(r)}),Kg()(),Qc(6,`div`,5)(7,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.destination,r)||(i.destination=r),U_(r)}),Kg()(),Qc(8,`div`,5)(9,`po-datepicker`,8),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.departDate,r)||(i.departDate=r),U_(r)}),Kg(),Qc(10,`po-datepicker`,9),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.returnDate,r)||(i.returnDate=r),U_(r)}),Kg()(),Qc(11,`div`,5)(12,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.transportation,r)||(i.transportation=r),U_(r)}),Kg()()()(),Qc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.trainCompany,r)||(i.trainCompany=r),U_(r)}),Kg()(),Qc(18,`div`,5)(19,`po-select`,13),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.classTrain,r)||(i.classTrain=r),U_(r)}),Kg()()()(),Qc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.flightCompany,r)||(i.flightCompany=r),U_(r)}),Kg()(),Qc(25,`div`,5)(26,`po-select`,16),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.classFlight,r)||(i.classFlight=r),U_(r)}),Kg()()()(),Qc(27,`po-tab`,17)(28,`div`,5),vu(29,`po-info`,18),Kg(),Qc(30,`po-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.cardName,r)||(i.cardName=r),U_(r)}),Kg()(),Qc(36,`div`,5)(37,`po-input`,21),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.card,r)||(i.card=r),U_(r)}),Kg()(),Qc(38,`div`,5)(39,`po-input`,22),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.expiryMonth,r)||(i.expiryMonth=r),U_(r)}),Kg(),Qc(40,`po-input`,23),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.expiryYear,r)||(i.expiryYear=r),U_(r)}),Kg(),Qc(41,`po-input`,24),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(i.cvv,r)||(i.cvv=r),U_(r)}),Kg()(),Qc(42,`div`,5)(43,`po-button`,25),vt(`p-click`,function(){return i.payment()}),Kg()()()(),Qc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),vt(`p-click`,function(){return i.bankBillet()}),Kg()()()()()()}if(o&2){let d=ik(3),g=ik(15),r=ik(22),Ne=ik(33);wg(5),Yb(`ngModel`,i.origin),W0(),wg(2),Yb(`ngModel`,i.destination),W0(),wg(2),Yb(`ngModel`,i.departDate),W0(),wg(),Yb(`ngModel`,i.returnDate),Rb(`p-min-date`,i.departDate),W0(),wg(2),Yb(`ngModel`,i.transportation),Rb(`p-options`,i.transportationOptions),W0(),wg(),Rb(`p-hide`,i.transportation!==`train`),wg(4),Yb(`ngModel`,i.trainCompany),Rb(`p-options`,i.trainCompanyOptions),W0(),wg(2),Yb(`ngModel`,i.classTrain),Rb(`p-options`,i.classTrainOptions),W0(),wg(),Rb(`p-hide`,i.transportation!==`flight`),wg(4),Yb(`ngModel`,i.flightCompany),Rb(`p-options`,i.flightCompanyOptions),W0(),wg(2),Yb(`ngModel`,i.classFlight),Rb(`p-options`,i.classFlightOptions),W0(),wg(),Rb(`p-disabled`,i.isPaymentEnable(d,g,r)===!1),wg(2),Rb(`p-value`,i.getTotalCost()),wg(6),Yb(`ngModel`,i.cardName),W0(),wg(2),Yb(`ngModel`,i.card),W0(),wg(2),Yb(`ngModel`,i.expiryMonth),W0(),wg(),Yb(`ngModel`,i.expiryYear),W0(),wg(),Yb(`ngModel`,i.cvv),W0(),wg(2),Rb(`p-disabled`,!Ne.form.valid||!i.totalCost),wg(3),Rb(`p-disabled`,!i.totalCost)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,tie,j4,Zte,Koe,Joe,tre,are],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-travel-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-tabs-travel`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tabs - Travel`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-tabs>
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-tabs-travel`),Kg(),vu(25,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ge,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,De],encapsulation:2,changeDetection:1})}return a})();var Ue=[`poTab`];function Ke(a,A){if(a&1){let l=YO();Qc(0,`po-tab`,2),Gk(1,`date`),Qc(2,`div`,6)(3,`div`,4)(4,`div`,3)(5,`div`,7)(6,`po-widget`)(7,`div`,3)(8,`div`,8),vu(9,`po-avatar`,9),Kg(),Qc(10,`div`,10)(11,`div`,11),vu(12,`po-info`,12),Kg(),Qc(13,`div`,11),vu(14,`po-info`,13),Kg(),Qc(15,`div`,11),vu(16,`po-info`,14),Kg()()()()(),Qc(17,`div`,15)(18,`po-widget`,16)(19,`div`,17),Sk(20,`TFace Conference Week`),Kg(),Qc(21,`div`,18),Sk(22,`From 21th September until 26th setember 2018`),Kg(),vu(23,`po-divider`),Qc(24,`div`,3)(25,`div`,19)(26,`span`,20),vu(27,`po-icon`,21),Kg(),Qc(28,`span`,22),Sk(29),Gk(30,`date`),Kg()(),Qc(31,`div`,19)(32,`span`,20),vu(33,`po-icon`,23),Kg(),Qc(34,`span`,24),Sk(35,`Av. Braz Leme, 1000, Santana`),Kg()()(),Qc(36,`div`,25)(37,`po-button`,26),vt(`p-click`,function(){let i=B_(l).$implicit,d=ek();return U_(d.confirmSubscription(i))}),Kg()()()()()()()()}if(a&2){let l=A.$implicit;Rb(`p-label`,Nk(Yk(1,10,l.createdDate,`MMM d`)))(`p-active`,l.id===`1`)(`p-hide`,l.subscribe),wg(9),Rb(`p-src`,xk(`assets/graphics/`,l.photo)),wg(3),Rb(`p-value`,l.name),wg(2),Rb(`p-value`,l.email),wg(2),Rb(`p-value`,l.description),wg(13),Gb(Yk(30,13,l.createdDate,`MM/dd/yyyy`))}}var Fe=(()=>{class a{poNotification=p(Ru);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(l=>l.subscribe=!1)}confirmSubscription(l){this.disableRestoreBtn=!1,l.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-business-conf`]],viewQuery:function(o,i){if(o&1&&Du(Ue,7),o&2){let d;No(d=xo())&&(i.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(o,i){o&1&&(Qc(0,`po-page-default`,1)(1,`po-tabs`,null,0),UO(3,Ke,38,16,`po-tab`,2,BO),Kg(),vu(5,`po-divider`),Qc(6,`div`,3)(7,`div`,4)(8,`div`,3)(9,`po-button`,5),vt(`p-click`,function(){return i.cancelSubscription()}),Kg()()()()()),o&2&&(wg(3),HO(i.speakers),wg(6),Rb(`p-disabled`,i.disableRestoreBtn))},dependencies:[c4,oi,Nf,Tt,Joe,Mze,tre,are,bae,uF],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-business-conf-view`]],standalone:!1,decls:44,vars:6,consts:[[`id`,`sample-po-tabs-business-conf`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Tabs - Business Conference`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    @for (speaker of speakers; track speaker) {
      <po-tab
        p-label="`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` speaker.createdDate | date: 'MMM d' `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`"
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
                      <po-avatar p-size="xl" p-src="assets/graphics/`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` speaker.photo `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`"></po-avatar>
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
                      <span class="po-font-text po-mb-2">`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` speaker.createdDate | date: 'MM/dd/yyyy' `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`</span>
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
`),Kg()()()(),Qc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Sk(37,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`),Kg(),Qc(38,`div`,10)(39,`pre`,11),Sk(40,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(41,`div`,12),vu(42,`sample-po-tabs-business-conf`),Kg(),vu(43,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,$e,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Fe],encapsulation:2,changeDetection:1})}return a})();var Oe=(()=>{class a{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-doc`]],standalone:!1,decls:403,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Tab`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-tabs-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-setQuantityTabsButton`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-activateTab`,1,`docs-api-method-table`]],template:function(o,i){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTabsModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-tabs`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Subcomponentes:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return i.openDoc(`po-tab`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoTabsComponent`),Kg()(),Qc(16,`div`,2)(17,`h4`),Sk(18,`Tokens customizáveis`),Kg(),Qc(19,`p`),Sk(20,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(21,`blockquote`)(22,`p`),Sk(23,`Para maiores informações, acesse o guia `),Qc(24,`a`,8),Sk(25,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(26,`.`),Kg()(),Qc(27,`table`)(28,`thead`)(29,`tr`)(30,`th`),Sk(31,`Propriedade`),Kg(),Qc(32,`th`),Sk(33,`Descrição`),Kg(),Qc(34,`th`),Sk(35,`Valor Padrão`),Kg()()(),Qc(36,`tbody`)(37,`tr`)(38,`td`)(39,`strong`),Sk(40,`Default Values`),Kg()(),vu(41,`td`)(42,`td`),Kg(),Qc(43,`tr`)(44,`td`)(45,`code`),Sk(46,`--background`),Kg()(),Qc(47,`td`),Sk(48,`Cor de background`),Kg(),Qc(49,`td`)(50,`code`),Sk(51,`var(--color-transparent)`),Kg()()(),Qc(52,`tr`)(53,`td`)(54,`code`),Sk(55,`--background-item-default`),Kg()(),Qc(56,`td`),Sk(57,`Cor de background do item padrão`),Kg(),Qc(58,`td`)(59,`code`),Sk(60,`var(--color-transparent)`),Kg()()(),Qc(61,`tr`)(62,`td`)(63,`code`),Sk(64,`--border-radius`),Kg()(),Qc(65,`td`),Sk(66,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(67,`td`)(68,`code`),Sk(69,`var(--border-radius-md)`),Kg()()(),Qc(70,`tr`)(71,`td`)(72,`code`),Sk(73,`--color`),Kg()(),Qc(74,`td`),Sk(75,`Cor da fonte padrão`),Kg(),Qc(76,`td`)(77,`code`),Sk(78,`var(--color-action-default)`),Kg()()(),Qc(79,`tr`)(80,`td`)(81,`code`),Sk(82,`--color-baseline`),Kg()(),Qc(83,`td`),Sk(84,`Cor para box-shadow`),Kg(),Qc(85,`td`)(86,`code`),Sk(87,`var(--color-neutral-light-20)`),Kg()()(),Qc(88,`tr`)(89,`td`)(90,`code`),Sk(91,`--font-family`),Kg()(),Qc(92,`td`),Sk(93,`Família tipográfica usada`),Kg(),Qc(94,`td`)(95,`code`),Sk(96,`var(--font-family-theme)`),Kg()()(),Qc(97,`tr`)(98,`td`)(99,`code`),Sk(100,`--font-size`),Kg()(),Qc(101,`td`),Sk(102,`Tamanho da fonte`),Kg(),Qc(103,`td`)(104,`code`),Sk(105,`var(--font-size-default)`),Kg()()(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--font-weight`),Kg()(),Qc(110,`td`),Sk(111,`Peso da fonte`),Kg(),Qc(112,`td`)(113,`code`),Sk(114,`var(--font-weight-bold)`),Kg()()(),Qc(115,`tr`)(116,`td`)(117,`code`),Sk(118,`--margin-tabs-container-left`),Kg()(),Qc(119,`td`),Sk(120,`Margem lateral esquerda do componente quando usado dentro de um `),Qc(121,`code`),Sk(122,`page-default`),Kg()(),Qc(123,`td`)(124,`code`),Sk(125,`var(--spacing-md)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--margin-tabs-container-right`),Kg()(),Qc(130,`td`),Sk(131,`Margem lateral direita do componente quando usado dentro de um `),Qc(132,`code`),Sk(133,`page-default`),Kg()(),Qc(134,`td`)(135,`code`),Sk(136,`-16px`),Kg()()(),Qc(137,`tr`)(138,`td`)(139,`code`),Sk(140,`--padding-tabs-header`),Kg()(),Qc(141,`td`),Sk(142,`Padding do valor lateral das abas`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`var(--spacing-sm)`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--margin-tabs-first-child`),Kg()(),Qc(150,`td`),Sk(151,`Margem lateral da primeira aba`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`var(--spacing-md)`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`code`),Sk(158,`--margin-tabs-last-child`),Kg()(),Qc(159,`td`),Sk(160,`Margem lateral da ultima aba`),Kg(),Qc(161,`td`)(162,`code`),Sk(163,`var(--spacing-md)`),Kg()()(),Qc(164,`tr`)(165,`td`)(166,`strong`),Sk(167,`Disabled`),Kg()(),vu(168,`td`)(169,`td`),Kg(),Qc(170,`tr`)(171,`td`)(172,`code`),Sk(173,`--color-disabled`),Kg()(),Qc(174,`td`),Sk(175,`Cor da fonte no estado disabilitado`),Kg(),Qc(176,`td`)(177,`code`),Sk(178,`var(--color-action-disabled)`),Kg()()(),Qc(179,`tr`)(180,`td`)(181,`code`),Sk(182,`--background-item-disabled`),Kg(),Sk(183,`\xA0`),Kg(),Qc(184,`td`),Sk(185,`Cor de background do item desabilitado`),Kg(),Qc(186,`td`)(187,`code`),Sk(188,`var(--color-neutral-light-10)`),Kg()()(),Qc(189,`tr`)(190,`td`)(191,`strong`),Sk(192,`Focused`),Kg()(),vu(193,`td`)(194,`td`),Kg(),Qc(195,`tr`)(196,`td`)(197,`code`),Sk(198,`--outline-color-focused`),Kg()(),Qc(199,`td`),Sk(200,`Cor do outline do estado de focus`),Kg(),Qc(201,`td`)(202,`code`),Sk(203,`var(--color-action-focus)`),Kg()()(),Qc(204,`tr`)(205,`td`)(206,`strong`),Sk(207,`Hover`),Kg()(),vu(208,`td`)(209,`td`),Kg(),Qc(210,`tr`)(211,`td`)(212,`code`),Sk(213,`--color-hover`),Kg()(),Qc(214,`td`),Sk(215,`Cor principal no estado hover`),Kg(),Qc(216,`td`)(217,`code`),Sk(218,`var(--color-brand-01-darkest)`),Kg()()(),Qc(219,`tr`)(220,`td`)(221,`code`),Sk(222,`--background-item-hover`),Kg()(),Qc(223,`td`),Sk(224,`Cor de background no estado de hover`),Kg(),Qc(225,`td`)(226,`code`),Sk(227,`var(--color-brand-01-lightest)`),Kg()()(),Qc(228,`tr`)(229,`td`)(230,`strong`),Sk(231,`Selected`),Kg()(),vu(232,`td`)(233,`td`),Kg(),Qc(234,`tr`)(235,`td`)(236,`code`),Sk(237,`--background-item-selected`),Kg()(),Qc(238,`td`),Sk(239,`Cor de background do item selecionado`),Kg(),Qc(240,`td`)(241,`code`),Sk(242,`var(--color-brand-01-lightest)`),Kg()()()()(),Qc(243,`p`),vu(244,`br`),Sk(245,` O componente `),Qc(246,`code`),Sk(247,`po-tabs`),Kg(),Sk(248,` é responsável por agrupar `),Qc(249,`a`,9),Sk(250,`abas`),Kg(),Sk(251,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),Kg(),Qc(252,`p`),Sk(253,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),Kg(),Qc(254,`blockquote`)(255,`p`),Sk(256,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),Kg()(),Qc(257,`p`),Sk(258,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),Kg(),Qc(259,`h4`),Sk(260,`Boas práticas`),Kg(),Qc(261,`ul`)(262,`li`),Sk(263,`Evite utilizar um `),Qc(264,`code`),Sk(265,`po-tabs`),Kg(),Sk(266,` dentro de outro `),Qc(267,`code`),Sk(268,`po-tabs`),Kg(),Sk(269,`;`),Kg(),Qc(270,`li`),Sk(271,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Qc(272,`em`),Sk(273,`scroll`),Kg(),Sk(274,` muito longo no `),Qc(275,`code`),Sk(276,`dropdown`),Kg(),Sk(277,`;`),Kg(),Qc(278,`li`),Sk(279,`Evite `),Qc(280,`code`),Sk(281,`labels`),Kg(),Sk(282,` extensos para as `),Qc(283,`code`),Sk(284,`tabs`),Kg(),Sk(285,` pois podem quebrar seu `),Qc(286,`em`),Sk(287,`layout`),Kg(),Sk(288,`, use `),Qc(289,`code`),Sk(290,`labels`),Kg(),Sk(291,` diretas, curtas e intuitivas.`),Kg()()(),Qc(292,`div`,10)(293,`h4`,11),Sk(294,`Seletor`),Kg(),Qc(295,`pre`,12),Sk(296,`<po-tabs
    p-size="string" >
</po-tabs>
`),Kg()(),Qc(297,`h4`,13),Sk(298,`Propriedades`),Kg(),Qc(299,`table`,14)(300,`tr`,15)(301,`th`,16),Sk(302,`Nome`),Kg(),Qc(303,`th`,16),Sk(304,`Tipo`),Kg(),Qc(305,`th`,16),Sk(306,`Padrão`),Kg(),Qc(307,`th`,16),Sk(308,`Descrição`),Kg()(),Qc(309,`tr`,17)(310,`td`,18)(311,`div`,19)(312,`span`,20),Sk(313,` p-size`),vu(314,`br`),Kg()()(),Qc(315,`td`,21)(316,`code`,22),Sk(317,`string`),Kg()(),Qc(318,`td`,23)(319,`p`)(320,`code`),Sk(321,`medium`),Kg()()(),Qc(322,`td`,24)(323,`em`)(324,`strong`),Sk(325,`(opcional)`),Kg()(),Qc(326,`p`),Sk(327,`Define o tamanho do componente:`),Kg(),Qc(328,`ul`)(329,`li`)(330,`code`),Sk(331,`small`),Kg(),Sk(332,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(333,`li`)(334,`code`),Sk(335,`medium`),Kg(),Sk(336,`: altura dos tabs como 44px.`),Kg()(),Qc(337,`blockquote`)(338,`p`),Sk(339,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(340,`code`),Sk(341,`medium`),Kg(),Sk(342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(343,`a`,25),Sk(344,`po-theme`),Kg(),Sk(345,`.`),Kg()()()()(),Qc(346,`h3`,13),Sk(347,`Métodos`),Kg(),Qc(348,`table`,26)(349,`tr`,27)(350,`th`,28)(351,`div`,19)(352,`h4`)(353,`span`,20),Sk(354,` setQuantityTabsButton `),Kg()()()()(),Qc(355,`tr`,24)(356,`td`,24)(357,`p`),Sk(358,`Função que atribui o número de tabs fora do dropdown.`),Kg(),Qc(359,`p`),Sk(360,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(361,`pre`)(362,`code`),Sk(363,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),Kg()()()()(),vu(364,`br`),Qc(365,`table`,29)(366,`tr`,27)(367,`th`,28)(368,`div`,19)(369,`h4`)(370,`span`,20),Sk(371,` activateTab `),Kg()()()()(),Qc(372,`tr`,24)(373,`td`,24)(374,`p`),Sk(375,`Ativa a aba correspondente ao `),Qc(376,`code`),Sk(377,`id`),Kg(),Sk(378,` informado.`),Kg(),Qc(379,`p`),Sk(380,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(381,`pre`)(382,`code`),Sk(383,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),Kg()()()()(),Qc(384,`h5`)(385,`b`),Sk(386,`Parâmetros`),Kg()(),Qc(387,`table`,14)(388,`tr`,15)(389,`th`,16),Sk(390,`Nome`),Kg(),Qc(391,`th`,16),Sk(392,`Tipo`),Kg(),Qc(393,`th`,16),Sk(394,`Descrição`),Kg()(),Qc(395,`tr`,27)(396,`td`,18),Sk(397,` id`),Kg(),vu(398,`td`,21),Qc(399,`td`,24)(400,`p`),Sk(401,`Identificador único da aba a ser ativada.`),Kg()()()(),vu(402,`br`),Kg())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function nt(a,A){if(a&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-tabs-basic-view`)(2,`sample-po-tabs-labs-view`)(3,`sample-po-tabs-travel-view`)(4,`sample-po-tabs-business-conf-view`),Kg()}if(a&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var it=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,nt,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-tabs-doc`),Kg()()()),o&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,xe,Me,Be,Ve,Oe],encapsulation:2,changeDetection:1})}return a})()}];var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(it),GV]})}return a})();var Jt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,qe]})}return a})();export{Jt as DocPoTabsModule};