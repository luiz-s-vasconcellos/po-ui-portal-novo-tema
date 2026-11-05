import{$i as h,$r as RO,Cn as oi,Ct as Yoe,Da as pe,Dr as Gk,Ea as pO,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,L as Joe,La as uO,Mr as I1,Na as r0,Pa as rb,Pt as a4,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Vi as bx,Wa as vo,Xa as wx,Xt as ere,Ya as wg,Za as xF,Zt as fae,aa as iu,ai as Sn,b as Fu,dr as DO,ea as hO,gr as Dx,ht as U4,ia as ir,ii as SO,it as Qte,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,pt as Tt,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,yr as Ex,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var Ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(o,i){o&1&&(jc(0,`po-tabs`),nu(1,`po-tab`,0)(2,`po-tab`,1),wg())},dependencies:[Qae,ere],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tabs Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tabs-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,qe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return a})();var Ae=[`poTab`];function ze(a,N){if(a&1){let l=Ax();jc(0,`po-tab`,9),mt(`p-click`,function(){let i=v_(l).$implicit,m=Fx();return __(m.onClick(i))}),jc(1,`div`,10),lO(2),wg()()}if(a&2){let l=N.$implicit,o=N.$index;UE(`p-active`,l.active)(`p-disabled`,l.disabled)(`p-hide`,l.hide)(`p-label`,l.label),rg(2),Ag(`Tab Content `,o)}}var _e=(()=>{class a{poNotification=h(Fu);poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:6},{property:`click`,gridColumns:6},{property:`active`,type:`boolean`,gridColumns:4},{property:`disabled`,type:`boolean`,gridColumns:4},{property:`hide`,type:`boolean`,gridColumns:4}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(l){let o=Object.assign({},l);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(l){l.click&&l.click()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-labs`]],viewQuery:function(o,i){if(o&1&&iu(Ae,7),o&2){let m;yo(m=vo())&&(i.poTab=m.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-active`,`p-disabled`,`p-hide`,`p-label`],[1,`po-font-subtitle`]],template:function(o,i){if(o&1){let m=Ax();jc(0,`po-tabs`,2,0),bx(2,ze,3,5,`po-tab`,3,Ex),wg(),nu(4,`po-dynamic-form`,4,1),jc(6,`div`,5)(7,`po-button`,6),mt(`p-click`,function(){v_(m);let r=Bx(5);return i.addTab(r.form.value),__(r.form.reset())}),wg()(),nu(8,`po-divider`),jc(9,`po-radio-group`,7),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.size,r)||(i.size=r),__(r)}),wg(),jc(10,`div`,5)(11,`po-button`,8),mt(`p-click`,function(){return i.restore()}),wg()()}if(o&2){let m=Bx(5);UE(`p-size`,i.size),rg(2),wx(i.tabs),rg(2),UE(`p-fields`,i.tabsFieldsForm)(`p-value`,i.tabs),rg(3),UE(`p-disabled`,m.form.invalid),rg(2),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0()}},dependencies:[SK,xF,oi,Lf,Joe,Gte,Qae,ere],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tabs Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-tabs #poTab [p-size]="size">
  @for (tab of tabs; track tab; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
    >
      <div class="po-font-subtitle">Tab Content { { i }}</div>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tabs-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Re,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,_e],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{poNotificationService=h(Fu);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(l,o,i){return l.valid&&this.transportation===`flight`&&i.valid||l.valid&&this.transportation===`train`&&o.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-travel`]],standalone:!1,decls:47,vars:26,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(o,i){if(o&1){let m=Ax();jc(0,`po-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.origin,r)||(i.origin=r),__(r)}),wg()(),jc(6,`div`,5)(7,`po-input`,7),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.destination,r)||(i.destination=r),__(r)}),wg()(),jc(8,`div`,5)(9,`po-datepicker`,8),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.departDate,r)||(i.departDate=r),__(r)}),wg(),jc(10,`po-datepicker`,9),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.returnDate,r)||(i.returnDate=r),__(r)}),wg()(),jc(11,`div`,5)(12,`po-radio-group`,10),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.transportation,r)||(i.transportation=r),__(r)}),wg()()()(),jc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.trainCompany,r)||(i.trainCompany=r),__(r)}),wg()(),jc(18,`div`,5)(19,`po-select`,13),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.classTrain,r)||(i.classTrain=r),__(r)}),wg()()()(),jc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.flightCompany,r)||(i.flightCompany=r),__(r)}),wg()(),jc(25,`div`,5)(26,`po-select`,16),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.classFlight,r)||(i.classFlight=r),__(r)}),wg()()()(),jc(27,`po-tab`,17)(28,`div`,5),nu(29,`po-info`,18),wg(),jc(30,`po-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.cardName,r)||(i.cardName=r),__(r)}),wg()(),jc(36,`div`,5)(37,`po-input`,21),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.card,r)||(i.card=r),__(r)}),wg()(),jc(38,`div`,5)(39,`po-input`,22),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.expiryMonth,r)||(i.expiryMonth=r),__(r)}),wg(),jc(40,`po-input`,23),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.expiryYear,r)||(i.expiryYear=r),__(r)}),wg(),jc(41,`po-input`,24),r0(),ab(`ngModelChange`,function(r){return v_(m),uO(i.cvv,r)||(i.cvv=r),__(r)}),wg()(),jc(42,`div`,5)(43,`po-button`,25),mt(`p-click`,function(){return i.payment()}),wg()()()(),jc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),mt(`p-click`,function(){return i.bankBillet()}),wg()()()()()()}if(o&2){let m=Bx(3),g=Bx(15),r=Bx(22),Oe=Bx(33);rg(5),sb(`ngModel`,i.origin),o0(),rg(2),sb(`ngModel`,i.destination),o0(),rg(2),sb(`ngModel`,i.departDate),o0(),rg(),sb(`ngModel`,i.returnDate),UE(`p-min-date`,i.departDate),o0(),rg(2),sb(`ngModel`,i.transportation),UE(`p-options`,i.transportationOptions),o0(),rg(),UE(`p-hide`,i.transportation!==`train`),rg(4),sb(`ngModel`,i.trainCompany),UE(`p-options`,i.trainCompanyOptions),o0(),rg(2),sb(`ngModel`,i.classTrain),UE(`p-options`,i.classTrainOptions),o0(),rg(),UE(`p-hide`,i.transportation!==`flight`),rg(4),sb(`ngModel`,i.flightCompany),UE(`p-options`,i.flightCompanyOptions),o0(),rg(2),sb(`ngModel`,i.classFlight),UE(`p-options`,i.classFlightOptions),o0(),rg(),UE(`p-disabled`,i.isPaymentEnable(m,g,r)===!1),rg(2),UE(`p-value`,i.getTotalCost()),rg(6),sb(`ngModel`,i.cardName),o0(),rg(2),sb(`ngModel`,i.card),o0(),rg(2),sb(`ngModel`,i.expiryMonth),o0(),rg(),sb(`ngModel`,i.expiryYear),o0(),rg(),sb(`ngModel`,i.cvv),o0(),rg(2),UE(`p-disabled`,!Oe.form.valid||!i.totalCost),rg(3),UE(`p-disabled`,!i.totalCost)}},dependencies:[RK,SK,MK,xF,SF,oi,Qte,U4,Gte,Woe,Yoe,Qae,ere],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tabs - Travel`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-tabs>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tabs-travel`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Qe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,xe],encapsulation:2,changeDetection:1})}return a})();var Ye=[`poTab`];function Ge(a,N){if(a&1){let l=Ax();jc(0,`po-tab`,2),SO(1,`date`),jc(2,`div`,6)(3,`div`,4)(4,`div`,3)(5,`div`,7)(6,`po-widget`)(7,`div`,3)(8,`div`,8),nu(9,`po-avatar`,9),wg(),jc(10,`div`,10)(11,`div`,11),nu(12,`po-info`,12),wg(),jc(13,`div`,11),nu(14,`po-info`,13),wg(),jc(15,`div`,11),nu(16,`po-info`,14),wg()()()()(),jc(17,`div`,15)(18,`po-widget`,16)(19,`div`,17),lO(20,`TFace Conference Week`),wg(),jc(21,`div`,18),lO(22,`From 21th September until 26th setember 2018`),wg(),nu(23,`po-divider`),jc(24,`div`,3)(25,`div`,19)(26,`span`,20),nu(27,`po-icon`,21),wg(),jc(28,`span`,22),lO(29),SO(30,`date`),wg()(),jc(31,`div`,19)(32,`span`,20),nu(33,`po-icon`,23),wg(),jc(34,`span`,24),lO(35,`Av. Braz Leme, 1000, Santana`),wg()()(),jc(36,`div`,25)(37,`po-button`,26),mt(`p-click`,function(){let i=v_(l).$implicit,m=Fx();return __(m.confirmSubscription(i))}),wg()()()()()()()()}if(a&2){let l=N.$implicit;UE(`p-label`,hO(RO(1,10,l.createdDate,`MMM d`)))(`p-active`,l.id===`1`)(`p-hide`,l.subscribe),rg(9),UE(`p-src`,pO(`assets/graphics/`,l.photo)),rg(3),UE(`p-value`,l.name),rg(2),UE(`p-value`,l.email),rg(2),UE(`p-value`,l.description),rg(13),rb(RO(30,13,l.createdDate,`MM/dd/yyyy`))}}var Me=(()=>{class a{poNotification=h(Fu);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(l=>l.subscribe=!1)}confirmSubscription(l){this.disableRestoreBtn=!1,l.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-business-conf`]],viewQuery:function(o,i){if(o&1&&iu(Ye,7),o&2){let m;yo(m=vo())&&(i.poTab=m.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,1)(1,`po-tabs`,null,0),bx(3,Ge,38,16,`po-tab`,2,Ex),wg(),nu(5,`po-divider`),jc(6,`div`,3)(7,`div`,4)(8,`div`,3)(9,`po-button`,5),mt(`p-click`,function(){return i.cancelSubscription()}),wg()()()()()),o&2&&(rg(3),wx(i.speakers),rg(6),UE(`p-disabled`,i.disableRestoreBtn))},dependencies:[a4,oi,Lf,Tt,Yoe,Tze,Qae,ere,fae,Gk],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Tabs - Business Conference`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    @for (speaker of speakers; track speaker) {
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
                  <po-divider />
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-tabs-business-conf`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ue,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Me],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-tabs-doc`]],standalone:!1,decls:399,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoTabsModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-tabs`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoTabsComponent`),wg()(),jc(12,`div`,2)(13,`h4`),lO(14,`Tokens customizáveis`),wg(),jc(15,`p`),lO(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(17,`blockquote`)(18,`p`),lO(19,`Para maiores informações, acesse o guia `),jc(20,`a`,6),lO(21,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(22,`.`),wg()(),jc(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),lO(27,`Propriedade`),wg(),jc(28,`th`),lO(29,`Descrição`),wg(),jc(30,`th`),lO(31,`Valor Padrão`),wg()()(),jc(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),lO(36,`Default Values`),wg()(),nu(37,`td`)(38,`td`),wg(),jc(39,`tr`)(40,`td`)(41,`code`),lO(42,`--background`),wg()(),jc(43,`td`),lO(44,`Cor de background`),wg(),jc(45,`td`)(46,`code`),lO(47,`var(--color-transparent)`),wg()()(),jc(48,`tr`)(49,`td`)(50,`code`),lO(51,`--background-item-default`),wg()(),jc(52,`td`),lO(53,`Cor de background do item padrão`),wg(),jc(54,`td`)(55,`code`),lO(56,`var(--color-transparent)`),wg()()(),jc(57,`tr`)(58,`td`)(59,`code`),lO(60,`--border-radius`),wg()(),jc(61,`td`),lO(62,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(63,`td`)(64,`code`),lO(65,`var(--border-radius-md)`),wg()()(),jc(66,`tr`)(67,`td`)(68,`code`),lO(69,`--color`),wg()(),jc(70,`td`),lO(71,`Cor da fonte padrão`),wg(),jc(72,`td`)(73,`code`),lO(74,`var(--color-action-default)`),wg()()(),jc(75,`tr`)(76,`td`)(77,`code`),lO(78,`--color-baseline`),wg()(),jc(79,`td`),lO(80,`Cor para box-shadow`),wg(),jc(81,`td`)(82,`code`),lO(83,`var(--color-neutral-light-20)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),lO(87,`--font-family`),wg()(),jc(88,`td`),lO(89,`Família tipográfica usada`),wg(),jc(90,`td`)(91,`code`),lO(92,`var(--font-family-theme)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),lO(96,`--font-size`),wg()(),jc(97,`td`),lO(98,`Tamanho da fonte`),wg(),jc(99,`td`)(100,`code`),lO(101,`var(--font-size-default)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),lO(105,`--font-weight`),wg()(),jc(106,`td`),lO(107,`Peso da fonte`),wg(),jc(108,`td`)(109,`code`),lO(110,`var(--font-weight-bold)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),lO(114,`--margin-tabs-container-left`),wg()(),jc(115,`td`),lO(116,`Margem lateral esquerda do componente quando usado dentro de um `),jc(117,`code`),lO(118,`page-default`),wg()(),jc(119,`td`)(120,`code`),lO(121,`var(--spacing-md)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`code`),lO(125,`--margin-tabs-container-right`),wg()(),jc(126,`td`),lO(127,`Margem lateral direita do componente quando usado dentro de um `),jc(128,`code`),lO(129,`page-default`),wg()(),jc(130,`td`)(131,`code`),lO(132,`-16px`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),lO(136,`--padding-tabs-header`),wg()(),jc(137,`td`),lO(138,`Padding do valor lateral das abas`),wg(),jc(139,`td`)(140,`code`),lO(141,`var(--spacing-sm)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),lO(145,`--margin-tabs-first-child`),wg()(),jc(146,`td`),lO(147,`Margem lateral da primeira aba`),wg(),jc(148,`td`)(149,`code`),lO(150,`var(--spacing-md)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),lO(154,`--margin-tabs-last-child`),wg()(),jc(155,`td`),lO(156,`Margem lateral da ultima aba`),wg(),jc(157,`td`)(158,`code`),lO(159,`var(--spacing-md)`),wg()()(),jc(160,`tr`)(161,`td`)(162,`strong`),lO(163,`Disabled`),wg()(),nu(164,`td`)(165,`td`),wg(),jc(166,`tr`)(167,`td`)(168,`code`),lO(169,`--color-disabled`),wg()(),jc(170,`td`),lO(171,`Cor da fonte no estado disabilitado`),wg(),jc(172,`td`)(173,`code`),lO(174,`var(--color-action-disabled)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`code`),lO(178,`--background-item-disabled`),wg(),lO(179,`\xA0`),wg(),jc(180,`td`),lO(181,`Cor de background do item desabilitado`),wg(),jc(182,`td`)(183,`code`),lO(184,`var(--color-neutral-light-10)`),wg()()(),jc(185,`tr`)(186,`td`)(187,`strong`),lO(188,`Focused`),wg()(),nu(189,`td`)(190,`td`),wg(),jc(191,`tr`)(192,`td`)(193,`code`),lO(194,`--outline-color-focused`),wg()(),jc(195,`td`),lO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),lO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),lO(203,`Hover`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),lO(209,`--color-hover`),wg()(),jc(210,`td`),lO(211,`Cor principal no estado hover`),wg(),jc(212,`td`)(213,`code`),lO(214,`var(--color-brand-01-darkest)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),lO(218,`--background-item-hover`),wg()(),jc(219,`td`),lO(220,`Cor de background no estado de hover`),wg(),jc(221,`td`)(222,`code`),lO(223,`var(--color-brand-01-lightest)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`strong`),lO(227,`Selected`),wg()(),nu(228,`td`)(229,`td`),wg(),jc(230,`tr`)(231,`td`)(232,`code`),lO(233,`--background-item-selected`),wg()(),jc(234,`td`),lO(235,`Cor de background do item selecionado`),wg(),jc(236,`td`)(237,`code`),lO(238,`var(--color-brand-01-lightest)`),wg()()()()(),jc(239,`p`),nu(240,`br`),lO(241,` O componente `),jc(242,`code`),lO(243,`po-tabs`),wg(),lO(244,` é responsável por agrupar `),jc(245,`a`,7),lO(246,`abas`),wg(),lO(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),wg(),jc(248,`p`),lO(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),wg(),jc(250,`blockquote`)(251,`p`),lO(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),wg()(),jc(253,`p`),lO(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),wg(),jc(255,`h4`),lO(256,`Boas práticas`),wg(),jc(257,`ul`)(258,`li`),lO(259,`Evite utilizar um `),jc(260,`code`),lO(261,`po-tabs`),wg(),lO(262,` dentro de outro `),jc(263,`code`),lO(264,`po-tabs`),wg(),lO(265,`;`),wg(),jc(266,`li`),lO(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),jc(268,`em`),lO(269,`scroll`),wg(),lO(270,` muito longo no `),jc(271,`code`),lO(272,`dropdown`),wg(),lO(273,`;`),wg(),jc(274,`li`),lO(275,`Evite `),jc(276,`code`),lO(277,`labels`),wg(),lO(278,` extensos para as `),jc(279,`code`),lO(280,`tabs`),wg(),lO(281,` pois podem quebrar seu `),jc(282,`em`),lO(283,`layout`),wg(),lO(284,`, use `),jc(285,`code`),lO(286,`labels`),wg(),lO(287,` diretas, curtas e intuitivas.`),wg()()(),jc(288,`div`,8)(289,`h4`,9),lO(290,`Seletor`),wg(),jc(291,`pre`,10),lO(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),wg()(),jc(293,`h4`,11),lO(294,`Propriedades`),wg(),jc(295,`table`,12)(296,`tr`,13)(297,`th`,14),lO(298,`Nome`),wg(),jc(299,`th`,14),lO(300,`Tipo`),wg(),jc(301,`th`,14),lO(302,`Padrão`),wg(),jc(303,`th`,14),lO(304,`Descrição`),wg()(),jc(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),lO(309,` p-size`),nu(310,`br`),wg()()(),jc(311,`td`,19)(312,`code`,20),lO(313,`string`),wg()(),jc(314,`td`,21)(315,`p`)(316,`code`),lO(317,`medium`),wg()()(),jc(318,`td`,22)(319,`em`)(320,`strong`),lO(321,`(opcional)`),wg()(),jc(322,`p`),lO(323,`Define o tamanho do componente:`),wg(),jc(324,`ul`)(325,`li`)(326,`code`),lO(327,`small`),wg(),lO(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(329,`li`)(330,`code`),lO(331,`medium`),wg(),lO(332,`: altura dos tabs como 44px.`),wg()(),jc(333,`blockquote`)(334,`p`),lO(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(336,`code`),lO(337,`medium`),wg(),lO(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(339,`a`,23),lO(340,`po-theme`),wg(),lO(341,`.`),wg()()()()(),jc(342,`h3`,11),lO(343,`Métodos`),wg(),jc(344,`table`,24)(345,`tr`,15)(346,`th`,25)(347,`div`,17)(348,`h4`)(349,`span`,18),lO(350,` setQuantityTabsButton `),wg()()()()(),jc(351,`tr`,22)(352,`td`,22)(353,`p`),lO(354,`Função que atribui o número de tabs fora do dropdown.`),wg(),jc(355,`p`),lO(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(357,`pre`)(358,`code`),lO(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),wg()()()()(),nu(360,`br`),jc(361,`table`,24)(362,`tr`,15)(363,`th`,25)(364,`div`,17)(365,`h4`)(366,`span`,18),lO(367,` activateTab `),wg()()()()(),jc(368,`tr`,22)(369,`td`,22)(370,`p`),lO(371,`Ativa a aba correspondente ao `),jc(372,`code`),lO(373,`id`),wg(),lO(374,` informado.`),wg(),jc(375,`p`),lO(376,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(377,`pre`)(378,`code`),lO(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),wg()()()()(),jc(380,`h5`)(381,`b`),lO(382,`Parâmetros`),wg()(),jc(383,`table`,12)(384,`tr`,13)(385,`th`,14),lO(386,`Nome`),wg(),jc(387,`th`,14),lO(388,`Tipo`),wg(),jc(389,`th`,14),lO(390,`Descrição`),wg()(),jc(391,`tr`,15)(392,`td`,16),lO(393,` id`),wg(),nu(394,`td`,19),jc(395,`td`,22)(396,`p`),lO(397,`Identificador único da aba a ser ativada.`),wg()()()(),nu(398,`br`),wg())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function $e(a,N){if(a&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-tabs-basic-view`)(2,`sample-po-tabs-labs-view`)(3,`sample-po-tabs-travel-view`)(4,`sample-po-tabs-business-conf-view`),wg()}if(a&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var et=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,$e,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-tabs-doc`),wg()()()),o&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,we,Pe,ke,De,Be],encapsulation:2,changeDetection:1})}return a})()}];var Ve=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(et),I1]})}return a})();var Rt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,Ve]})}return a})();export{Rt as DocPoTabsModule};