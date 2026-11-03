import{$i as ir,Aa as t0,Ai as _x,Ba as vo,Da as qx,Et as Xoe,Fi as cO,Gn as yae,Gt as eie,Ka as wg,Mn as ure,Mr as IO,Mt as _t,Na as uO,Oa as rg,Oi as _o,Ot as Yoe,Pa as ue,Pr as JN,Qa as y_,Qi as ib,Ra as v_,Sn as ri,Ta as px,Ua as wK,Ya as xx,Yn as zf,Zi as iO,_a as nu,_r as Dx,b as G4,br as EO,bt as Vze,ci as TF,cn as lre,cr as CK,ea as iu,eo as yx,fa as mt,fn as p4,hi as Uk,ia as jc,ir as Ag,ja as tb,ji as b,ka as sO,la as mO,ln as nae,na as jE,nt as Qte,oi as Sn,pa as mx,ri as Rk,si as Sx,sr as C1,va as ob,vr as EF,wi as Zn,wr as Fx,xa as pe,yn as qze,yr as EK,yt as Vu}from"./chunk-FGyGiu1H.js";import{n as P,t as M}from"./main-M62PY4SQ.js";var ye=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(l,o){l&1&&(jc(0,`po-context-tabs`),nu(1,`po-tab`,0)(2,`po-tab`,1),wg())},dependencies:[lre,qze],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context Tabs Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-context-tabs-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ne,o.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,ye],encapsulation:2,changeDetection:1})}return a})();var Ae=[`poTab`];function ze(a,N){if(a&1){let i=Sx();jc(0,`po-tab`,9),mt(`p-click`,function(){let o=y_(i).$implicit,d=xx();return v_(d.onClick(o))})(`p-close-tab`,function(){let o=y_(i).$implicit,d=xx();return v_(d.onClose(o))}),jc(1,`div`,10),iO(2),wg()()}if(a&2){let i=N.$implicit,l=N.$index;jE(`p-active`,i.active)(`p-disabled`,i.disabled)(`p-hide`,i.hide)(`p-hide-close`,i.hideClose)(`p-label`,i.label),rg(2),Ag(`Tab Content `,l)}}var we=(()=>{class a{poNotification;poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:4},{property:`click`,gridColumns:4},{property:`closeTab`,label:`Close Tab`,gridColumns:4},{property:`active`,type:`boolean`,gridColumns:3},{property:`disabled`,type:`boolean`,gridColumns:3},{property:`hide`,type:`boolean`,gridColumns:3},{property:`hideClose`,label:`Hide Close`,type:`boolean`,gridColumns:3}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;constructor(i){this.poNotification=i}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(i){let l=Object.assign({},i);l.click=l.click?this.showClick.bind(this,l.click):void 0,l.closeTab=l.closeTab?this.dispachClose.bind(this,l.closeTab):void 0,this.tabs.push(l),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(i){i.click&&i.click()}onClose(i){i.closeTab&&i.closeTab()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(i){this.poNotification.success(`Action clicked: ${i}`)}dispachClose(i){this.poNotification.success(`Action closed: ${i}`)}static ɵfac=function(l){return new(l||a)(b(Vu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-labs`]],viewQuery:function(l,o){if(l&1&&iu(Ae,7),l&2){let d;vo(d=_o())&&(o.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-close-tab`,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[1,`po-font-subtitle`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-context-tabs`,2,0),_x(2,ze,3,6,`po-tab`,3,yx),wg(),nu(4,`po-dynamic-form`,4,1),jc(6,`div`,5)(7,`po-button`,6),mt(`p-click`,function(){y_(d);let r=Fx(5);return o.addTab(r.form.value),v_(r.form.reset())}),wg()(),nu(8,`po-divider`),jc(9,`po-radio-group`,7),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.size,r)||(o.size=r),v_(r)}),wg(),jc(10,`div`,5)(11,`po-button`,8),mt(`p-click`,function(){return o.restore()}),wg()()}if(l&2){let d=Fx(5);jE(`p-size`,o.size),rg(2),Dx(o.tabs),rg(2),jE(`p-fields`,o.tabsFieldsForm)(`p-value`,o.tabs),rg(3),jE(`p-disabled`,d.form.invalid),rg(2),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0()}},dependencies:[CK,TF,ri,zf,nae,Qte,lre,qze],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context Tabs Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-context-tabs #poTab [p-size]="size">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-context-tabs-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Re,o.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,we],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];constructor(i){this.poNotificationService=i}bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(i,l,o){return i.valid&&this.transportation===`flight`&&o.valid||i.valid&&this.transportation===`train`&&l.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(l){return new(l||a)(b(Vu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-travel`]],standalone:!1,decls:47,vars:30,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`,`p-hide-close`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`,`p-hide-close`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`,`p-hide-close`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`,3,`p-hide-close`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let d=Sx();jc(0,`po-context-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.origin,r)||(o.origin=r),v_(r)}),wg()(),jc(6,`div`,5)(7,`po-input`,7),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.destination,r)||(o.destination=r),v_(r)}),wg()(),jc(8,`div`,5)(9,`po-datepicker`,8),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.departDate,r)||(o.departDate=r),v_(r)}),wg(),jc(10,`po-datepicker`,9),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.returnDate,r)||(o.returnDate=r),v_(r)}),wg()(),jc(11,`div`,5)(12,`po-radio-group`,10),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.transportation,r)||(o.transportation=r),v_(r)}),wg()()()(),jc(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.trainCompany,r)||(o.trainCompany=r),v_(r)}),wg()(),jc(18,`div`,5)(19,`po-select`,13),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.classTrain,r)||(o.classTrain=r),v_(r)}),wg()()()(),jc(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.flightCompany,r)||(o.flightCompany=r),v_(r)}),wg()(),jc(25,`div`,5)(26,`po-select`,16),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.classFlight,r)||(o.classFlight=r),v_(r)}),wg()()()(),jc(27,`po-tab`,17)(28,`div`,5),nu(29,`po-info`,18),wg(),jc(30,`po-context-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.cardName,r)||(o.cardName=r),v_(r)}),wg()(),jc(36,`div`,5)(37,`po-input`,21),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.card,r)||(o.card=r),v_(r)}),wg()(),jc(38,`div`,5)(39,`po-input`,22),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.expiryMonth,r)||(o.expiryMonth=r),v_(r)}),wg(),jc(40,`po-input`,23),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.expiryYear,r)||(o.expiryYear=r),v_(r)}),wg(),jc(41,`po-input`,24),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(o.cvv,r)||(o.cvv=r),v_(r)}),wg()(),jc(42,`div`,5)(43,`po-button`,25),mt(`p-click`,function(){return o.payment()}),wg()()()(),jc(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),mt(`p-click`,function(){return o.bankBillet()}),wg()()()()()()}if(l&2){let d=Fx(3),g=Fx(15),r=Fx(22),We=Fx(33);rg(5),ib(`ngModel`,o.origin),t0(),rg(2),ib(`ngModel`,o.destination),t0(),rg(2),ib(`ngModel`,o.departDate),t0(),rg(),ib(`ngModel`,o.returnDate),jE(`p-min-date`,o.departDate),t0(),rg(2),ib(`ngModel`,o.transportation),jE(`p-options`,o.transportationOptions),t0(),rg(),jE(`p-hide`,o.transportation!==`train`)(`p-hide-close`,!0),rg(4),ib(`ngModel`,o.trainCompany),jE(`p-options`,o.trainCompanyOptions),t0(),rg(2),ib(`ngModel`,o.classTrain),jE(`p-options`,o.classTrainOptions),t0(),rg(),jE(`p-hide`,o.transportation!==`flight`)(`p-hide-close`,!0),rg(4),ib(`ngModel`,o.flightCompany),jE(`p-options`,o.flightCompanyOptions),t0(),rg(2),ib(`ngModel`,o.classFlight),jE(`p-options`,o.classFlightOptions),t0(),rg(),jE(`p-disabled`,o.isPaymentEnable(d,g,r)===!1)(`p-hide-close`,!0),rg(2),jE(`p-value`,o.getTotalCost()),rg(6),ib(`ngModel`,o.cardName),t0(),rg(2),ib(`ngModel`,o.card),t0(),rg(2),ib(`ngModel`,o.expiryMonth),t0(),rg(),ib(`ngModel`,o.expiryYear),t0(),rg(),ib(`ngModel`,o.cvv),t0(),rg(2),jE(`p-disabled`,!We.form.valid||!o.totalCost),rg(),jE(`p-hide-close`,!0),rg(2),jE(`p-disabled`,!o.totalCost)}},dependencies:[wK,CK,EK,TF,EF,ri,eie,G4,Qte,Yoe,Xoe,lre,qze],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context Tabs - Travel`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-context-tabs>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-context-tabs-travel`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Qe,o.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,Pe],encapsulation:2,changeDetection:1})}return a})();var Ye=[`poTab`];var Ge=(a,N)=>N.id;function Je(a,N){if(a&1){let i=Sx();jc(0,`po-tab`,2),EO(1,`date`),jc(2,`div`,7)(3,`div`,5)(4,`div`,4)(5,`div`,8)(6,`po-widget`)(7,`div`,4)(8,`div`,9),nu(9,`po-avatar`,10),wg(),jc(10,`div`,11)(11,`div`,12),nu(12,`po-info`,13),wg(),jc(13,`div`,12),nu(14,`po-info`,14),wg(),jc(15,`div`,12),nu(16,`po-info`,15),wg()()()()(),jc(17,`div`,16)(18,`po-widget`,17)(19,`div`,18),iO(20,`TFace Conference Week`),wg(),jc(21,`div`,19),iO(22,`From 21th September until 26th setember 2018`),wg(),nu(23,`hr`),jc(24,`div`,4)(25,`div`,20)(26,`span`,21),nu(27,`po-icon`,22),wg(),jc(28,`span`,23),iO(29),EO(30,`date`),wg()(),jc(31,`div`,20)(32,`span`,21),nu(33,`po-icon`,24),wg(),jc(34,`span`,25),iO(35,`Av. Braz Leme, 1000, Santana`),wg()()(),jc(36,`div`,26)(37,`po-button`,27),mt(`p-click`,function(){let o=y_(i).$implicit,d=xx();return v_(d.confirmSubscription(o))}),wg()()()()()()()()}if(a&2){let i=N.$implicit;jE(`p-label`,cO(IO(1,10,i.createdDate,`MMM d`)))(`p-active`,i.id===`1`)(`p-hide`,i.subscribe),rg(9),jE(`p-src`,uO(`assets/graphics/`,i.photo)),rg(3),jE(`p-value`,i.name),rg(2),jE(`p-value`,i.email),rg(2),jE(`p-value`,i.description),rg(13),tb(IO(30,13,i.createdDate,`MM/dd/yyyy`))}}var Me=(()=>{class a{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(i){this.poNotification=i}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(i=>i.subscribe=!1)}confirmSubscription(i){this.disableRestoreBtn=!1,i.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(l){return new(l||a)(b(Vu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-business-conf`]],viewQuery:function(l,o){if(l&1&&iu(Ye,7),l&2){let d;vo(d=_o())&&(o.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`,`po-mt-0`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,1)(1,`po-context-tabs`,null,0),_x(3,Je,38,16,`po-tab`,2,Ge),wg(),nu(5,`hr`,3),jc(6,`div`,4)(7,`div`,5)(8,`div`,4)(9,`po-button`,6),mt(`p-click`,function(){return o.cancelSubscription()}),wg()()()()()),l&2&&(rg(3),Dx(o.speakers),rg(6),jE(`p-disabled`,o.disableRestoreBtn))},dependencies:[p4,ri,_t,Xoe,Vze,lre,qze,yae,Uk],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Context Tabs - Business Conference`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Check the speaker's list">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-context-tabs-business-conf`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ke,o.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,Me],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-context-tabs-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoContextTabsModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-context-tabs`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoContextTabsComponent`),wg()(),jc(12,`div`,2)(13,`h4`),iO(14,`Tokens customizáveis`),wg(),jc(15,`p`),iO(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(17,`blockquote`)(18,`p`),iO(19,`Para maiores informações, acesse o guia `),jc(20,`a`,6),iO(21,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(22,`.`),wg()(),jc(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),iO(27,`Propriedade`),wg(),jc(28,`th`),iO(29,`Descrição`),wg(),jc(30,`th`),iO(31,`Valor Padrão`),wg()()(),jc(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),iO(36,`Default Values`),wg()(),nu(37,`td`)(38,`td`),wg(),jc(39,`tr`)(40,`td`)(41,`code`),iO(42,`--background`),wg()(),jc(43,`td`),iO(44,`Cor de background`),wg(),jc(45,`td`)(46,`code`),iO(47,`var(--color-transparent)`),wg()()(),jc(48,`tr`)(49,`td`)(50,`code`),iO(51,`--background-item-default`),wg()(),jc(52,`td`),iO(53,`Cor de background do item padrão`),wg(),jc(54,`td`)(55,`code`),iO(56,`var(--color-transparent)`),wg()()(),jc(57,`tr`)(58,`td`)(59,`code`),iO(60,`--border-radius`),wg()(),jc(61,`td`),iO(62,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(63,`td`)(64,`code`),iO(65,`var(--border-radius-md)`),wg()()(),jc(66,`tr`)(67,`td`)(68,`code`),iO(69,`--color`),wg()(),jc(70,`td`),iO(71,`Cor da fonte padrão`),wg(),jc(72,`td`)(73,`code`),iO(74,`var(--color-action-default)`),wg()()(),jc(75,`tr`)(76,`td`)(77,`code`),iO(78,`--color-baseline`),wg()(),jc(79,`td`),iO(80,`Cor para box-shadow`),wg(),jc(81,`td`)(82,`code`),iO(83,`var(--color-neutral-light-20)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),iO(87,`--font-family`),wg()(),jc(88,`td`),iO(89,`Família tipográfica usada`),wg(),jc(90,`td`)(91,`code`),iO(92,`var(--font-family-theme)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),iO(96,`--font-size`),wg()(),jc(97,`td`),iO(98,`Tamanho da fonte`),wg(),jc(99,`td`)(100,`code`),iO(101,`var(--font-size-default)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),iO(105,`--font-weight`),wg()(),jc(106,`td`),iO(107,`Peso da fonte`),wg(),jc(108,`td`)(109,`code`),iO(110,`var(--font-weight-bold)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),iO(114,`--margin-tabs-container-left`),wg()(),jc(115,`td`),iO(116,`Margem lateral esquerda do componente quando usado dentro de um `),jc(117,`code`),iO(118,`page-default`),wg()(),jc(119,`td`)(120,`code`),iO(121,`var(--spacing-md)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`code`),iO(125,`--margin-tabs-container-right`),wg()(),jc(126,`td`),iO(127,`Margem lateral direita do componente quando usado dentro de um `),jc(128,`code`),iO(129,`page-default`),wg()(),jc(130,`td`)(131,`code`),iO(132,`-16px`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),iO(136,`--padding-tabs-header`),wg()(),jc(137,`td`),iO(138,`Padding do valor lateral das abas`),wg(),jc(139,`td`)(140,`code`),iO(141,`var(--spacing-sm)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),iO(145,`--margin-tabs-first-child`),wg()(),jc(146,`td`),iO(147,`Margem lateral da primeira aba`),wg(),jc(148,`td`)(149,`code`),iO(150,`var(--spacing-md)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),iO(154,`--margin-tabs-last-child`),wg()(),jc(155,`td`),iO(156,`Margem lateral da ultima aba`),wg(),jc(157,`td`)(158,`code`),iO(159,`var(--spacing-md)`),wg()()(),jc(160,`tr`)(161,`td`)(162,`strong`),iO(163,`Disabled`),wg()(),nu(164,`td`)(165,`td`),wg(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--color-disabled`),wg()(),jc(170,`td`),iO(171,`Cor da fonte no estado disabilitado`),wg(),jc(172,`td`)(173,`code`),iO(174,`var(--color-action-disabled)`),wg()()(),jc(175,`tr`)(176,`td`)(177,`code`),iO(178,`--background-item-disabled`),wg(),iO(179,`\xA0`),wg(),jc(180,`td`),iO(181,`Cor de background do item desabilitado`),wg(),jc(182,`td`)(183,`code`),iO(184,`var(--color-neutral-light-10)`),wg()()(),jc(185,`tr`)(186,`td`)(187,`strong`),iO(188,`Focused`),wg()(),nu(189,`td`)(190,`td`),wg(),jc(191,`tr`)(192,`td`)(193,`code`),iO(194,`--outline-color-focused`),wg()(),jc(195,`td`),iO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),iO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),iO(203,`Hover`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),iO(209,`--color-hover`),wg()(),jc(210,`td`),iO(211,`Cor principal no estado hover`),wg(),jc(212,`td`)(213,`code`),iO(214,`var(--color-brand-01-darkest)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),iO(218,`--background-item-hover`),wg()(),jc(219,`td`),iO(220,`Cor de background no estado de hover`),wg(),jc(221,`td`)(222,`code`),iO(223,`var(--color-brand-01-lightest)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`strong`),iO(227,`Selected`),wg()(),nu(228,`td`)(229,`td`),wg(),jc(230,`tr`)(231,`td`)(232,`code`),iO(233,`--background-item-selected`),wg()(),jc(234,`td`),iO(235,`Cor de background do item selecionado`),wg(),jc(236,`td`)(237,`code`),iO(238,`var(--color-brand-01-lightest)`),wg()()()()(),jc(239,`p`),nu(240,`br`),iO(241,` O componente `),jc(242,`code`),iO(243,`po-context-tabs`),wg(),iO(244,` é responsável por agrupar `),jc(245,`a`,7),iO(246,`abas`),wg(),iO(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),wg(),jc(248,`p`),iO(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),wg(),jc(250,`blockquote`)(251,`p`),iO(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),wg()(),jc(253,`p`),iO(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),wg(),jc(255,`h4`),iO(256,`Boas práticas`),wg(),jc(257,`ul`)(258,`li`),iO(259,`Evite utilizar um `),jc(260,`code`),iO(261,`po-context-tabs`),wg(),iO(262,` dentro de outro `),jc(263,`code`),iO(264,`po-context-tabs`),wg(),iO(265,`;`),wg(),jc(266,`li`),iO(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),jc(268,`em`),iO(269,`scroll`),wg(),iO(270,` muito longo no `),jc(271,`code`),iO(272,`dropdown`),wg(),iO(273,`;`),wg(),jc(274,`li`),iO(275,`Evite `),jc(276,`code`),iO(277,`labels`),wg(),iO(278,` extensos para as `),jc(279,`code`),iO(280,`tabs`),wg(),iO(281,` pois podem quebrar seu `),jc(282,`em`),iO(283,`layout`),wg(),iO(284,`, use `),jc(285,`code`),iO(286,`labels`),wg(),iO(287,` diretas, curtas e intuitivas.`),wg()()(),jc(288,`div`,8)(289,`h4`,9),iO(290,`Seletor`),wg(),jc(291,`pre`,10),iO(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),wg()(),jc(293,`h4`,11),iO(294,`Propriedades`),wg(),jc(295,`table`,12)(296,`tr`,13)(297,`th`,14),iO(298,`Nome`),wg(),jc(299,`th`,14),iO(300,`Tipo`),wg(),jc(301,`th`,14),iO(302,`Padrão`),wg(),jc(303,`th`,14),iO(304,`Descrição`),wg()(),jc(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),iO(309,` p-size`),nu(310,`br`),wg()()(),jc(311,`td`,19)(312,`code`,20),iO(313,`string`),wg()(),jc(314,`td`,21)(315,`p`)(316,`code`),iO(317,`medium`),wg()()(),jc(318,`td`,22)(319,`em`)(320,`strong`),iO(321,`(opcional)`),wg()(),jc(322,`p`),iO(323,`Define o tamanho do componente:`),wg(),jc(324,`ul`)(325,`li`)(326,`code`),iO(327,`small`),wg(),iO(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(329,`li`)(330,`code`),iO(331,`medium`),wg(),iO(332,`: altura dos tabs como 44px.`),wg()(),jc(333,`blockquote`)(334,`p`),iO(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(336,`code`),iO(337,`medium`),wg(),iO(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(339,`a`,23),iO(340,`po-theme`),wg(),iO(341,`.`),wg()()()()(),jc(342,`h3`,11),iO(343,`Métodos`),wg(),jc(344,`table`,24)(345,`tr`,15)(346,`th`,25)(347,`div`,17)(348,`h4`)(349,`span`,18),iO(350,` setQuantityTabsButton `),wg()()()()(),jc(351,`tr`,22)(352,`td`,22)(353,`p`),iO(354,`Função que atribui o número de tabs fora do dropdown.`),wg(),jc(355,`p`),iO(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(357,`pre`)(358,`code`),iO(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),wg()()()()(),nu(360,`br`),wg())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function et(a,N){if(a&1){let i=Sx();jc(0,`po-tab`,4),mt(`p-click`,function(){y_(i);let o=xx();return v_(o.changeTab(`web`))}),nu(1,`sample-po-context-tabs-basic-view`)(2,`sample-po-context-tabs-labs-view`)(3,`sample-po-context-tabs-travel-view`)(4,`sample-po-context-tabs-business-conf-view`),wg()}if(a&2){let i=xx();jE(`p-active`,i.activeTab===`web`)}}var tt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,l){this.route=i,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let l=i.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Context Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),px(2,et,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-context-tabs-doc`),wg()()()),l&2&&(jE(`p-actions`,o.actions),rg(2),mx(o.hidePoWebSample?-1:2),rg(),jE(`p-active`,o.activeTab===`doc`))},dependencies:[Vze,lre,ure,Ee,_e,ke,De,Be],encapsulation:2,changeDetection:1})}return a})()}];var Ve=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(tt),C1]})}return a})();var Mt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,Ve]})}return a})();export{Mt as DocPoContextTabsModule};