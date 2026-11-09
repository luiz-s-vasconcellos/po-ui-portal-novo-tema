import{$n as Ak,Aa as qk,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Pt as bae,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xn as $O,Xr as No,Yi as eF,Zi as fF,_n as oae,an as j4,di as RZ,dr as Cu,ea as ge,ei as Ok,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,jn as tie,jr as JL,ka as qL,kr as I,no as yk,nr as BO,oo as zO,or as Bk,pa as kk,pt as Tt,qi as de,qr as NZ,tt as Ru,va as nk,vn as oi,wa as p,wr as HO,xi as VO,xr as Gb,ya as nm,yi as U_,zi as Zk,zt as c4}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var Ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(o,i){o&1&&(Jc(0,`po-tabs`),_u(1,`po-tab`,0)(2,`po-tab`,1),Zg())},dependencies:[tre,are],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tabs Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tabs-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return a})();var Ae=[`poTab`];function ze(a,N){if(a&1){let l=ZO();Jc(0,`po-tab`,9),vt(`p-click`,function(){let i=U_(l).$implicit,m=nk();return H_(m.onClick(i))}),Jc(1,`div`,10),Tk(2),Zg()()}if(a&2){let l=N.$implicit,o=N.$index;Rb(`p-active`,l.active)(`p-disabled`,l.disabled)(`p-hide`,l.hide)(`p-label`,l.label),Ig(2),nm(`Tab Content `,o)}}var _e=(()=>{class a{poNotification=p(Ru);poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:6},{property:`click`,gridColumns:6},{property:`active`,type:`boolean`,gridColumns:4},{property:`disabled`,type:`boolean`,gridColumns:4},{property:`hide`,type:`boolean`,gridColumns:4}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(l){let o=Object.assign({},l);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(l){l.click&&l.click()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(l){this.poNotification.success(`Action clicked: ${l}`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-labs`]],viewQuery:function(o,i){if(o&1&&Cu(Ae,7),o&2){let m;No(m=xo())&&(i.poTab=m.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-active`,`p-disabled`,`p-hide`,`p-label`],[1,`po-font-subtitle`]],template:function(o,i){if(o&1){let m=ZO();Jc(0,`po-tabs`,2,0),$O(2,ze,3,5,`po-tab`,3,HO),Zg(),_u(4,`po-dynamic-form`,4,1),Jc(6,`div`,5)(7,`po-button`,6),vt(`p-click`,function(){U_(m);let r=sk(5);return i.addTab(r.form.value),H_(r.form.reset())}),Zg()(),_u(8,`po-divider`),Jc(9,`po-radio-group`,7),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.size,r)||(i.size=r),H_(r)}),Zg(),Jc(10,`div`,5)(11,`po-button`,8),vt(`p-click`,function(){return i.restore()}),Zg()()}if(o&2){let m=sk(5);Rb(`p-size`,i.size),Ig(2),zO(i.tabs),Ig(2),Rb(`p-fields`,i.tabsFieldsForm)(`p-value`,i.tabs),Ig(3),Rb(`p-disabled`,m.form.invalid),Ig(2),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0()}},dependencies:[TZ,JL,oi,Nf,oae,Zte,tre,are],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tabs Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tabs #poTab [p-size]="size">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tabs-labs`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Re,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,_e],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{poNotificationService=p(Ru);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(l,o,i){return l.valid&&this.transportation===`flight`&&i.valid||l.valid&&this.transportation===`train`&&o.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-travel`]],standalone:!1,decls:47,vars:26,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(o,i){if(o&1){let m=ZO();Jc(0,`po-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.origin,r)||(i.origin=r),H_(r)}),Zg()(),Jc(6,`div`,5)(7,`po-input`,7),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.destination,r)||(i.destination=r),H_(r)}),Zg()(),Jc(8,`div`,5)(9,`po-datepicker`,8),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.departDate,r)||(i.departDate=r),H_(r)}),Zg(),Jc(10,`po-datepicker`,9),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.returnDate,r)||(i.returnDate=r),H_(r)}),Zg()(),Jc(11,`div`,5)(12,`po-radio-group`,10),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.transportation,r)||(i.transportation=r),H_(r)}),Zg()()()(),Jc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.trainCompany,r)||(i.trainCompany=r),H_(r)}),Zg()(),Jc(18,`div`,5)(19,`po-select`,13),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.classTrain,r)||(i.classTrain=r),H_(r)}),Zg()()()(),Jc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.flightCompany,r)||(i.flightCompany=r),H_(r)}),Zg()(),Jc(25,`div`,5)(26,`po-select`,16),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.classFlight,r)||(i.classFlight=r),H_(r)}),Zg()()()(),Jc(27,`po-tab`,17)(28,`div`,5),_u(29,`po-info`,18),Zg(),Jc(30,`po-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.cardName,r)||(i.cardName=r),H_(r)}),Zg()(),Jc(36,`div`,5)(37,`po-input`,21),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.card,r)||(i.card=r),H_(r)}),Zg()(),Jc(38,`div`,5)(39,`po-input`,22),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.expiryMonth,r)||(i.expiryMonth=r),H_(r)}),Zg(),Jc(40,`po-input`,23),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.expiryYear,r)||(i.expiryYear=r),H_(r)}),Zg(),Jc(41,`po-input`,24),W0(),Kb(`ngModelChange`,function(r){return U_(m),Ak(i.cvv,r)||(i.cvv=r),H_(r)}),Zg()(),Jc(42,`div`,5)(43,`po-button`,25),vt(`p-click`,function(){return i.payment()}),Zg()()()(),Jc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),vt(`p-click`,function(){return i.bankBillet()}),Zg()()()()()()}if(o&2){let m=sk(3),g=sk(15),r=sk(22),Oe=sk(33);Ig(5),Yb(`ngModel`,i.origin),Y0(),Ig(2),Yb(`ngModel`,i.destination),Y0(),Ig(2),Yb(`ngModel`,i.departDate),Y0(),Ig(),Yb(`ngModel`,i.returnDate),Rb(`p-min-date`,i.departDate),Y0(),Ig(2),Yb(`ngModel`,i.transportation),Rb(`p-options`,i.transportationOptions),Y0(),Ig(),Rb(`p-hide`,i.transportation!==`train`),Ig(4),Yb(`ngModel`,i.trainCompany),Rb(`p-options`,i.trainCompanyOptions),Y0(),Ig(2),Yb(`ngModel`,i.classTrain),Rb(`p-options`,i.classTrainOptions),Y0(),Ig(),Rb(`p-hide`,i.transportation!==`flight`),Ig(4),Yb(`ngModel`,i.flightCompany),Rb(`p-options`,i.flightCompanyOptions),Y0(),Ig(2),Yb(`ngModel`,i.classFlight),Rb(`p-options`,i.classFlightOptions),Y0(),Ig(),Rb(`p-disabled`,i.isPaymentEnable(m,g,r)===!1),Ig(2),Rb(`p-value`,i.getTotalCost()),Ig(6),Yb(`ngModel`,i.cardName),Y0(),Ig(2),Yb(`ngModel`,i.card),Y0(),Ig(2),Yb(`ngModel`,i.expiryMonth),Y0(),Ig(),Yb(`ngModel`,i.expiryYear),Y0(),Ig(),Yb(`ngModel`,i.cvv),Y0(),Ig(2),Rb(`p-disabled`,!Oe.form.valid||!i.totalCost),Ig(3),Rb(`p-disabled`,!i.totalCost)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,tie,j4,Zte,Koe,Joe,tre,are],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tabs - Travel`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tabs>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tabs-travel`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Qe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return a})();var Ye=[`poTab`];function Ge(a,N){if(a&1){let l=ZO();Jc(0,`po-tab`,2),qk(1,`date`),Jc(2,`div`,6)(3,`div`,4)(4,`div`,3)(5,`div`,7)(6,`po-widget`)(7,`div`,3)(8,`div`,8),_u(9,`po-avatar`,9),Zg(),Jc(10,`div`,10)(11,`div`,11),_u(12,`po-info`,12),Zg(),Jc(13,`div`,11),_u(14,`po-info`,13),Zg(),Jc(15,`div`,11),_u(16,`po-info`,14),Zg()()()()(),Jc(17,`div`,15)(18,`po-widget`,16)(19,`div`,17),Tk(20,`TFace Conference Week`),Zg(),Jc(21,`div`,18),Tk(22,`From 21th September until 26th setember 2018`),Zg(),_u(23,`po-divider`),Jc(24,`div`,3)(25,`div`,19)(26,`span`,20),_u(27,`po-icon`,21),Zg(),Jc(28,`span`,22),Tk(29),qk(30,`date`),Zg()(),Jc(31,`div`,19)(32,`span`,20),_u(33,`po-icon`,23),Zg(),Jc(34,`span`,24),Tk(35,`Av. Braz Leme, 1000, Santana`),Zg()()(),Jc(36,`div`,25)(37,`po-button`,26),vt(`p-click`,function(){let i=U_(l).$implicit,m=nk();return H_(m.confirmSubscription(i))}),Zg()()()()()()()()}if(a&2){let l=N.$implicit;Rb(`p-label`,Ok(Zk(1,10,l.createdDate,`MMM d`)))(`p-active`,l.id===`1`)(`p-hide`,l.subscribe),Ig(9),Rb(`p-src`,kk(`assets/graphics/`,l.photo)),Ig(3),Rb(`p-value`,l.name),Ig(2),Rb(`p-value`,l.email),Ig(2),Rb(`p-value`,l.description),Ig(13),Gb(Zk(30,13,l.createdDate,`MM/dd/yyyy`))}}var Me=(()=>{class a{poNotification=p(Ru);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(l=>l.subscribe=!1)}confirmSubscription(l){this.disableRestoreBtn=!1,l.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-business-conf`]],viewQuery:function(o,i){if(o&1&&Cu(Ye,7),o&2){let m;No(m=xo())&&(i.poTab=m.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,1)(1,`po-tabs`,null,0),$O(3,Ge,38,16,`po-tab`,2,HO),Zg(),_u(5,`po-divider`),Jc(6,`div`,3)(7,`div`,4)(8,`div`,3)(9,`po-button`,5),vt(`p-click`,function(){return i.cancelSubscription()}),Zg()()()()()),o&2&&(Ig(3),zO(i.speakers),Ig(6),Rb(`p-disabled`,i.disableRestoreBtn))},dependencies:[c4,oi,Nf,Tt,Joe,Mze,tre,are,bae,fF],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tabs - Business Conference`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Check the speaker's list">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tabs-business-conf`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ue,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Me],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tabs-doc`]],standalone:!1,decls:399,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTabsModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-tabs`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoTabsComponent`),Zg()(),Jc(12,`div`,2)(13,`h4`),Tk(14,`Tokens customizáveis`),Zg(),Jc(15,`p`),Tk(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(17,`blockquote`)(18,`p`),Tk(19,`Para maiores informações, acesse o guia `),Jc(20,`a`,6),Tk(21,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(22,`.`),Zg()(),Jc(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),Tk(27,`Propriedade`),Zg(),Jc(28,`th`),Tk(29,`Descrição`),Zg(),Jc(30,`th`),Tk(31,`Valor Padrão`),Zg()()(),Jc(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),Tk(36,`Default Values`),Zg()(),_u(37,`td`)(38,`td`),Zg(),Jc(39,`tr`)(40,`td`)(41,`code`),Tk(42,`--background`),Zg()(),Jc(43,`td`),Tk(44,`Cor de background`),Zg(),Jc(45,`td`)(46,`code`),Tk(47,`var(--color-transparent)`),Zg()()(),Jc(48,`tr`)(49,`td`)(50,`code`),Tk(51,`--background-item-default`),Zg()(),Jc(52,`td`),Tk(53,`Cor de background do item padrão`),Zg(),Jc(54,`td`)(55,`code`),Tk(56,`var(--color-transparent)`),Zg()()(),Jc(57,`tr`)(58,`td`)(59,`code`),Tk(60,`--border-radius`),Zg()(),Jc(61,`td`),Tk(62,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(63,`td`)(64,`code`),Tk(65,`var(--border-radius-md)`),Zg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Tk(69,`--color`),Zg()(),Jc(70,`td`),Tk(71,`Cor da fonte padrão`),Zg(),Jc(72,`td`)(73,`code`),Tk(74,`var(--color-action-default)`),Zg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Tk(78,`--color-baseline`),Zg()(),Jc(79,`td`),Tk(80,`Cor para box-shadow`),Zg(),Jc(81,`td`)(82,`code`),Tk(83,`var(--color-neutral-light-20)`),Zg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Tk(87,`--font-family`),Zg()(),Jc(88,`td`),Tk(89,`Família tipográfica usada`),Zg(),Jc(90,`td`)(91,`code`),Tk(92,`var(--font-family-theme)`),Zg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Tk(96,`--font-size`),Zg()(),Jc(97,`td`),Tk(98,`Tamanho da fonte`),Zg(),Jc(99,`td`)(100,`code`),Tk(101,`var(--font-size-default)`),Zg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Tk(105,`--font-weight`),Zg()(),Jc(106,`td`),Tk(107,`Peso da fonte`),Zg(),Jc(108,`td`)(109,`code`),Tk(110,`var(--font-weight-bold)`),Zg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Tk(114,`--margin-tabs-container-left`),Zg()(),Jc(115,`td`),Tk(116,`Margem lateral esquerda do componente quando usado dentro de um `),Jc(117,`code`),Tk(118,`page-default`),Zg()(),Jc(119,`td`)(120,`code`),Tk(121,`var(--spacing-md)`),Zg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Tk(125,`--margin-tabs-container-right`),Zg()(),Jc(126,`td`),Tk(127,`Margem lateral direita do componente quando usado dentro de um `),Jc(128,`code`),Tk(129,`page-default`),Zg()(),Jc(130,`td`)(131,`code`),Tk(132,`-16px`),Zg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Tk(136,`--padding-tabs-header`),Zg()(),Jc(137,`td`),Tk(138,`Padding do valor lateral das abas`),Zg(),Jc(139,`td`)(140,`code`),Tk(141,`var(--spacing-sm)`),Zg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Tk(145,`--margin-tabs-first-child`),Zg()(),Jc(146,`td`),Tk(147,`Margem lateral da primeira aba`),Zg(),Jc(148,`td`)(149,`code`),Tk(150,`var(--spacing-md)`),Zg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Tk(154,`--margin-tabs-last-child`),Zg()(),Jc(155,`td`),Tk(156,`Margem lateral da ultima aba`),Zg(),Jc(157,`td`)(158,`code`),Tk(159,`var(--spacing-md)`),Zg()()(),Jc(160,`tr`)(161,`td`)(162,`strong`),Tk(163,`Disabled`),Zg()(),_u(164,`td`)(165,`td`),Zg(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--color-disabled`),Zg()(),Jc(170,`td`),Tk(171,`Cor da fonte no estado disabilitado`),Zg(),Jc(172,`td`)(173,`code`),Tk(174,`var(--color-action-disabled)`),Zg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Tk(178,`--background-item-disabled`),Zg(),Tk(179,`\xA0`),Zg(),Jc(180,`td`),Tk(181,`Cor de background do item desabilitado`),Zg(),Jc(182,`td`)(183,`code`),Tk(184,`var(--color-neutral-light-10)`),Zg()()(),Jc(185,`tr`)(186,`td`)(187,`strong`),Tk(188,`Focused`),Zg()(),_u(189,`td`)(190,`td`),Zg(),Jc(191,`tr`)(192,`td`)(193,`code`),Tk(194,`--outline-color-focused`),Zg()(),Jc(195,`td`),Tk(196,`Cor do outline do estado de focus`),Zg(),Jc(197,`td`)(198,`code`),Tk(199,`var(--color-action-focus)`),Zg()()(),Jc(200,`tr`)(201,`td`)(202,`strong`),Tk(203,`Hover`),Zg()(),_u(204,`td`)(205,`td`),Zg(),Jc(206,`tr`)(207,`td`)(208,`code`),Tk(209,`--color-hover`),Zg()(),Jc(210,`td`),Tk(211,`Cor principal no estado hover`),Zg(),Jc(212,`td`)(213,`code`),Tk(214,`var(--color-brand-01-darkest)`),Zg()()(),Jc(215,`tr`)(216,`td`)(217,`code`),Tk(218,`--background-item-hover`),Zg()(),Jc(219,`td`),Tk(220,`Cor de background no estado de hover`),Zg(),Jc(221,`td`)(222,`code`),Tk(223,`var(--color-brand-01-lightest)`),Zg()()(),Jc(224,`tr`)(225,`td`)(226,`strong`),Tk(227,`Selected`),Zg()(),_u(228,`td`)(229,`td`),Zg(),Jc(230,`tr`)(231,`td`)(232,`code`),Tk(233,`--background-item-selected`),Zg()(),Jc(234,`td`),Tk(235,`Cor de background do item selecionado`),Zg(),Jc(236,`td`)(237,`code`),Tk(238,`var(--color-brand-01-lightest)`),Zg()()()()(),Jc(239,`p`),_u(240,`br`),Tk(241,` O componente `),Jc(242,`code`),Tk(243,`po-tabs`),Zg(),Tk(244,` é responsável por agrupar `),Jc(245,`a`,7),Tk(246,`abas`),Zg(),Tk(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),Zg(),Jc(248,`p`),Tk(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),Zg(),Jc(250,`blockquote`)(251,`p`),Tk(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),Zg()(),Jc(253,`p`),Tk(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),Zg(),Jc(255,`h4`),Tk(256,`Boas práticas`),Zg(),Jc(257,`ul`)(258,`li`),Tk(259,`Evite utilizar um `),Jc(260,`code`),Tk(261,`po-tabs`),Zg(),Tk(262,` dentro de outro `),Jc(263,`code`),Tk(264,`po-tabs`),Zg(),Tk(265,`;`),Zg(),Jc(266,`li`),Tk(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Jc(268,`em`),Tk(269,`scroll`),Zg(),Tk(270,` muito longo no `),Jc(271,`code`),Tk(272,`dropdown`),Zg(),Tk(273,`;`),Zg(),Jc(274,`li`),Tk(275,`Evite `),Jc(276,`code`),Tk(277,`labels`),Zg(),Tk(278,` extensos para as `),Jc(279,`code`),Tk(280,`tabs`),Zg(),Tk(281,` pois podem quebrar seu `),Jc(282,`em`),Tk(283,`layout`),Zg(),Tk(284,`, use `),Jc(285,`code`),Tk(286,`labels`),Zg(),Tk(287,` diretas, curtas e intuitivas.`),Zg()()(),Jc(288,`div`,8)(289,`h4`,9),Tk(290,`Seletor`),Zg(),Jc(291,`pre`,10),Tk(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),Zg()(),Jc(293,`h4`,11),Tk(294,`Propriedades`),Zg(),Jc(295,`table`,12)(296,`tr`,13)(297,`th`,14),Tk(298,`Nome`),Zg(),Jc(299,`th`,14),Tk(300,`Tipo`),Zg(),Jc(301,`th`,14),Tk(302,`Padrão`),Zg(),Jc(303,`th`,14),Tk(304,`Descrição`),Zg()(),Jc(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),Tk(309,` p-size`),_u(310,`br`),Zg()()(),Jc(311,`td`,19)(312,`code`,20),Tk(313,`string`),Zg()(),Jc(314,`td`,21)(315,`p`)(316,`code`),Tk(317,`medium`),Zg()()(),Jc(318,`td`,22)(319,`em`)(320,`strong`),Tk(321,`(opcional)`),Zg()(),Jc(322,`p`),Tk(323,`Define o tamanho do componente:`),Zg(),Jc(324,`ul`)(325,`li`)(326,`code`),Tk(327,`small`),Zg(),Tk(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(329,`li`)(330,`code`),Tk(331,`medium`),Zg(),Tk(332,`: altura dos tabs como 44px.`),Zg()(),Jc(333,`blockquote`)(334,`p`),Tk(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(336,`code`),Tk(337,`medium`),Zg(),Tk(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(339,`a`,23),Tk(340,`po-theme`),Zg(),Tk(341,`.`),Zg()()()()(),Jc(342,`h3`,11),Tk(343,`Métodos`),Zg(),Jc(344,`table`,24)(345,`tr`,15)(346,`th`,25)(347,`div`,17)(348,`h4`)(349,`span`,18),Tk(350,` setQuantityTabsButton `),Zg()()()()(),Jc(351,`tr`,22)(352,`td`,22)(353,`p`),Tk(354,`Função que atribui o número de tabs fora do dropdown.`),Zg(),Jc(355,`p`),Tk(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(357,`pre`)(358,`code`),Tk(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),Zg()()()()(),_u(360,`br`),Jc(361,`table`,24)(362,`tr`,15)(363,`th`,25)(364,`div`,17)(365,`h4`)(366,`span`,18),Tk(367,` activateTab `),Zg()()()()(),Jc(368,`tr`,22)(369,`td`,22)(370,`p`),Tk(371,`Ativa a aba correspondente ao `),Jc(372,`code`),Tk(373,`id`),Zg(),Tk(374,` informado.`),Zg(),Jc(375,`p`),Tk(376,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(377,`pre`)(378,`code`),Tk(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),Zg()()()()(),Jc(380,`h5`)(381,`b`),Tk(382,`Parâmetros`),Zg()(),Jc(383,`table`,12)(384,`tr`,13)(385,`th`,14),Tk(386,`Nome`),Zg(),Jc(387,`th`,14),Tk(388,`Tipo`),Zg(),Jc(389,`th`,14),Tk(390,`Descrição`),Zg()(),Jc(391,`tr`,15)(392,`td`,16),Tk(393,` id`),Zg(),_u(394,`td`,19),Jc(395,`td`,22)(396,`p`),Tk(397,`Identificador único da aba a ser ativada.`),Zg()()()(),_u(398,`br`),Zg())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function $e(a,N){if(a&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-tabs-basic-view`)(2,`sample-po-tabs-labs-view`)(3,`sample-po-tabs-travel-view`)(4,`sample-po-tabs-business-conf-view`),Zg()}if(a&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var et=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,$e,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-tabs-doc`),Zg()()()),o&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,we,Pe,ke,De,Be],encapsulation:2,changeDetection:1})}return a})()}];var Ve=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(et),WV]})}return a})();var Rt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ve]})}return a})();export{Rt as DocPoTabsModule};