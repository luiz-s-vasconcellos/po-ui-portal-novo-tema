import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,Dr as Gk,G as Nf,Ii as WL,Ir as Kb,Ka as qk,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Y as Or,Zi as ar,Zr as No,an as ia,ao as we,ar as An,b as Eo,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,fa as hF,gi as Rb,go as z0,io as vu,ji as Vk,k as Goe,ki as V_,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,va as ik,vi as Sk,wn as q4,wr as GV,xi as Tk,xr as FO,yr as Du,zn as w4}from"./chunk-DtUf9FxZ.js";var Ee=(()=>{class n{poNotification;constructor(l){this.poNotification=l}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(a,o){a&1&&(Qc(0,`po-button`,0),vt(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),Kg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return n})();var ke=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-notification-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-notification-basic/sample-po-notification-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-notification-basic/sample-po-notification-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Notification Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-basic',
  templateUrl: './sample-po-notification-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationBasicComponent {
  constructor(public poNotification: PoNotificationService) {}
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-notification-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return n})();var ye=(()=>{class n{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Or.Top},{label:`Bottom`,value:Or.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Eo.Success},{label:`Error`,value:Eo.Error},{label:`Warning`,value:Eo.Warning},{label:`Information`,value:Eo.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Eo.Success:this.poNotification.success(l);break;case Eo.Error:this.poNotification.error(l);break;case Eo.Warning:this.poNotification.warning(l);break;case Eo.Information:this.poNotification.information(l);break;default:this.poNotification.success(l)}}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-labs`]],viewQuery:function(a,o){if(a&1&&Du(ia,7),a&2){let c;No(c=xo())&&(o.poModal=c.first)}},standalone:!1,features:[we([Ru])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,o){if(a&1){let c=YO();Qc(0,`po-button`,1),vt(`p-click`,function(){return o.showNotification()}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.type,r)||(o.type=r),U_(r)}),Kg(),Qc(6,`po-radio-group`,4),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.orientation,r)||(o.orientation=r),U_(r)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.message,r)||(o.message=r),U_(r)}),Kg(),Qc(8,`po-number`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.duration,r)||(o.duration=r),U_(r)}),Kg(),Qc(9,`po-switch`,7),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.action,r)||(o.action=r),U_(r)}),Kg(),Qc(10,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.actionLabel,r)||(o.actionLabel=r),U_(r)}),Kg(),Qc(11,`po-radio-group`,9),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.sizeActions,r)||(o.sizeActions=r),U_(r)}),Kg(),Qc(12,`div`,2)(13,`po-button`,10),vt(`p-click`,function(){return o.restore()}),Kg()()()(),Qc(14,`po-modal`,11),Sk(15,` Notification Action `),Kg()}a&2&&(wg(5),Yb(`ngModel`,o.type),Rb(`p-options`,o.typeOptions),W0(),wg(),Yb(`ngModel`,o.orientation),Rb(`p-options`,o.orientationOptions),W0(),wg(),Yb(`ngModel`,o.message),W0(),wg(),Yb(`ngModel`,o.duration),W0(),wg(),Yb(`ngModel`,o.action),W0(),wg(),Yb(`ngModel`,o.actionLabel),W0(),wg(),Yb(`ngModel`,o.sizeActions),Rb(`p-options`,o.sizeActionsOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Goe,Zte,R4,ia],encapsulation:2,changeDetection:1})}return n})();var qe=n=>({"docs-sample-code-tabs":n});var Pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-notification-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-notification-labs/sample-po-notification-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-notification-labs/sample-po-notification-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Notification Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

<po-divider />

<div class="po-row">
  <form #f="ngForm">
    <po-radio-group
      class="po-md-12"
      name="type"
      [(ngModel)]="type"
      p-columns="4"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

    <po-number class="po-md-6 po-lg-3" name="duration" [(ngModel)]="duration" p-clean p-label="Duration"> </po-number>

    <po-switch class="po-md-6 po-lg-3" name="action" [(ngModel)]="action" p-label="Action"> </po-switch>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionLabel" p-clean p-label="Action Label"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="sizeActions"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoRadioGroupOption,
  PoToasterOrientation,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-labs',
  templateUrl: './sample-po-notification-labs.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  sizeActions: string;
  type: PoToasterType;
  duration: number;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Top', value: PoToasterOrientation.Top },
    { label: 'Bottom', value: PoToasterOrientation.Bottom }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'PO Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
    this.duration = undefined;
    this.sizeActions = 'medium';
  }

  showNotification() {
    const poNotification: PoNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel,
      duration: this.duration,
      sizeActions: this.sizeActions
    };

    if (this.action) {
      poNotification.action = () => this.poModal.open();
    }

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-notification-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,qe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return n})();var ve=(()=>{class n{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(a=>a.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(a=>a.id===this.product);if(l>=0){let a=this.productDetailsList[l];this.price=a.price,this.stock=a.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,a){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-a}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[we([Ru])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(a,o){if(a&1){let c=YO();Qc(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.product,r)||(o.product=r),U_(r)}),vt(`p-change`,function(){return o.checkProduct()}),Kg(),Qc(4,`po-number`,3),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.quantity,r)||(o.quantity=r),U_(r)}),vt(`p-change`,function(){return o.checkQuantity()}),Kg(),Qc(5,`po-number`,4),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.price,r)||(o.price=r),U_(r)}),Kg(),Qc(6,`po-number`,5),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.stock,r)||(o.stock=r),U_(r)}),Kg(),Qc(7,`po-number`,6),z0(),Kb(`ngModelChange`,function(r){return B_(c),Tk(o.totalPrice,r)||(o.totalPrice=r),U_(r)}),Kg()(),Qc(8,`div`,1)(9,`po-button`,7),vt(`p-click`,function(){return o.addCart()}),Kg()()(),vu(10,`po-divider`)(11,`po-table`,8),Qc(12,`div`,1)(13,`div`,9)(14,`span`,10),Sk(15),Gk(16,`currency`),Kg()()()}if(a&2){let c=ik(1);wg(3),Yb(`ngModel`,o.product),Rb(`p-options`,o.productOptions),W0(),wg(),Yb(`ngModel`,o.quantity),Rb(`p-max`,o.stock),W0(),wg(),Yb(`ngModel`,o.price),W0(),wg(),Yb(`ngModel`,o.stock),W0(),wg(),Yb(`ngModel`,o.totalPrice),W0(),wg(2),Rb(`p-disabled`,c.form.invalid||o.stock===0),wg(2),Rb(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),wg(4),tm(`Total: R`,qk(16,12,o.totalPriceSum),` `)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,w4,Goe,q4,hF],encapsulation:2,changeDetection:1})}return n})();var Ie=n=>({"docs-sample-code-tabs":n});var Ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-notification-sales`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-notification-sales/sample-po-notification-sales.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-notification-sales/sample-po-notification-sales.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Notification - Sales`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #f="ngForm">
  <div class="po-row">
    <po-combo
      class="po-md-4"
      name="product"
      [(ngModel)]="product"
      p-label="Product"
      p-placeholder="Select a Product"
      p-required
      [p-options]="productOptions"
      (p-change)="checkProduct()"
    >
    </po-combo>

    <po-number
      class="po-md-2"
      name="quantity"
      [(ngModel)]="quantity"
      p-label="Quantity"
      p-min="0"
      p-placeholder="0"
      p-required
      [p-max]="stock"
      (p-change)="checkQuantity()"
    >
    </po-number>

    <po-number class="po-md-2" name="price" [(ngModel)]="price" p-disabled p-label="Price" p-placeholder="0" p-required>
    </po-number>

    <po-number class="po-md-2" name="stock" [(ngModel)]="stock" p-disabled p-label="Stock" p-placeholder="0" p-required>
    </po-number>

    <po-number
      class="po-md-2"
      name="totalPrice"
      [(ngModel)]="totalPrice"
      p-disabled
      p-label="Total Price"
      p-placeholder="0"
      p-required
    >
    </po-number>
  </div>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Add To Cart" [p-disabled]="f.form.invalid || stock === 0" (p-click)="addCart()">
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="columns" [p-items]="products" [p-hide-table-search]="false"> </po-table>

<div class="po-row">
  <div class="po-pull-right po-lg-12">
    <span class="po-pull-right po-font-subtitle">Total: R`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` totalPriceSum | currency `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,` </span>
  </div>
</div>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-sales',
  templateUrl: './sample-po-notification-sales.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationSalesComponent {
  name: string;
  price: number;
  product: string;
  quantity: number;
  stock: number;
  totalPrice: number;
  totalPriceSum = 2500;

  readonly columns: Array<PoTableColumn> = [
    { property: 'productID', label: 'Id' },
    { property: 'productName', label: 'Product' },
    { property: 'quantity', label: 'Quantity' },
    { property: 'price', label: 'Price', type: 'currency', format: 'BRL' },
    { property: 'total', label: 'Total Price', type: 'currency', format: 'BRL' }
  ];

  products: Array<any> = [{ productID: '004', productName: 'Notebook', quantity: 2, price: 1250, total: 2500 }];

  productDetailsList: Array<any> = [
    { id: '001', price: 50, stock: 10 },
    { id: '002', price: 210, stock: 5 },
    { id: '003', price: 998, stock: 2 },
    { id: '004', price: 1250, stock: 1 }
  ];

  readonly productOptions: Array<PoComboOption> = [
    { value: '001', label: 'p-Shirt Blue' },
    { value: '002', label: 'Clock' },
    { value: '003', label: 'Cellphone' },
    { value: '004', label: 'Notebook' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addCart() {
    this.checkQuantity();

    if (this.productOptions && this.quantity > 0) {
      const itemIndex = this.products.findIndex(item => item.productID === this.product);

      if (itemIndex >= 0) {
        this.products[itemIndex].quantity += this.quantity;
        this.products[itemIndex].total += this.totalPrice;
      } else {
        this.products.push({
          productID: this.product,
          productName: this.name,
          quantity: this.quantity,
          price: this.price,
          total: this.totalPrice
        });
      }

      this.totalPriceSum += this.totalPrice;
      this.poNotification.success('Order included successfully!');
      this.stockUpdate(this.product, this.quantity);
      this.clearFields();
    }
  }

  checkProduct() {
    const selectedProductIndex = this.productDetailsList.findIndex(product => product.id === this.product);

    if (selectedProductIndex >= 0) {
      const productDetails = this.productDetailsList[selectedProductIndex];
      this.price = productDetails.price;
      this.stock = productDetails.stock;
      this.name = this.productOptions[selectedProductIndex].label;
    }
  }

  checkQuantity() {
    if (this.quantity > this.stock) {
      this.poNotification.error('Quantity not available in stock');
    } else {
      this.totalValue();
    }
  }

  clearFields() {
    this.product = '';
    this.price = 0;
    this.quantity = 0;
    this.stock = 0;
    this.totalPrice = 0;
  }

  stockUpdate(selectedProduct: string, qtd: number) {
    const item = this.productDetailsList.find(product => product.id === selectedProduct);
    item.stock = item.stock - qtd;
  }

  totalValue() {
    this.totalPrice = this.quantity * this.price;
  }
}
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-notification-sales`),Kg(),vu(31,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ve],encapsulation:2,changeDetection:1})}return n})();var _e=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-notification-service`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-success`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`method-warning`,1,`docs-api-method-table`],[`id`,`method-error`,1,`docs-api-method-table`],[`id`,`method-information`,1,`docs-api-method-table`],[`id`,`method-setDefaultDuration`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-notification`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-notification-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-notification-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-notification-duration`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-notification-message`,1,`docs-api-properties-row`],[`id`,`interface-po-notification-mode`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`id`,`interface-po-notification-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`id`,`interface-po-notification-show-close`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-notification-size-actions`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-notification-support-message`,1,`docs-api-properties-row`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),Kg()(),vu(4,`div`,2),Qc(5,`h3`,3),Sk(6,`Services`),Kg(),Qc(7,`h4`,4)(8,`code`,5),Sk(9,`PoNotificationService`),Kg()(),Qc(10,`div`,2)(11,`p`),Sk(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),Kg(),Qc(13,`ul`)(14,`li`),Sk(15,`success,`),Kg(),Qc(16,`li`),Sk(17,`warning,`),Kg(),Qc(18,`li`),Sk(19,`error,`),Kg(),Qc(20,`li`),Sk(21,`information.`),Kg()(),Qc(22,`p`),Sk(23,`Cada um destes métodos recebe como parâmetro o objeto `),Qc(24,`code`),Sk(25,`PoNotification`),Kg(),Sk(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),Kg(),Qc(27,`p`),Sk(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),Kg(),Qc(29,`p`),Sk(30,`Notificações com ação ou notificações de `),Qc(31,`code`),Sk(32,`erro`),Kg(),Sk(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),Kg(),Qc(34,`p`),Sk(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),Kg()(),Qc(36,`h3`,6),Sk(37,`Métodos`),Kg(),Qc(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),Sk(44,` success `),Kg()()()()(),Qc(45,`tr`,12)(46,`td`,12)(47,`p`),Sk(48,`Emite uma notificação de sucesso.`),Kg()()()(),Qc(49,`h5`)(50,`b`),Sk(51,`Parâmetros`),Kg()(),Qc(52,`table`,13)(53,`tr`,14)(54,`th`,15),Sk(55,`Nome`),Kg(),Qc(56,`th`,15),Sk(57,`Tipo`),Kg(),Qc(58,`th`,15),Sk(59,`Descrição`),Kg()(),Qc(60,`tr`,8)(61,`td`,16),Sk(62,` notification`),Kg(),Qc(63,`td`,17)(64,`code`,18),Sk(65,` PoNotification `),Kg(),Qc(66,`code`,19),Sk(67,` string `),Kg()(),Qc(68,`td`,12)(69,`p`),Sk(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),Kg()()()(),vu(71,`br`),Qc(72,`table`,20)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),Sk(78,` warning `),Kg()()()()(),Qc(79,`tr`,12)(80,`td`,12)(81,`p`),Sk(82,`Emite uma notificação de atenção.`),Kg()()()(),Qc(83,`h5`)(84,`b`),Sk(85,`Parâmetros`),Kg()(),Qc(86,`table`,13)(87,`tr`,14)(88,`th`,15),Sk(89,`Nome`),Kg(),Qc(90,`th`,15),Sk(91,`Tipo`),Kg(),Qc(92,`th`,15),Sk(93,`Descrição`),Kg()(),Qc(94,`tr`,8)(95,`td`,16),Sk(96,` notification`),Kg(),Qc(97,`td`,17)(98,`code`,18),Sk(99,` PoNotification `),Kg(),Qc(100,`code`,19),Sk(101,` string `),Kg()(),Qc(102,`td`,12)(103,`p`),Sk(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Kg()()()(),vu(105,`br`),Qc(106,`table`,21)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),Sk(112,` error `),Kg()()()()(),Qc(113,`tr`,12)(114,`td`,12)(115,`p`),Sk(116,`Emite uma notificação de erro.`),Kg()()()(),Qc(117,`h5`)(118,`b`),Sk(119,`Parâmetros`),Kg()(),Qc(120,`table`,13)(121,`tr`,14)(122,`th`,15),Sk(123,`Nome`),Kg(),Qc(124,`th`,15),Sk(125,`Tipo`),Kg(),Qc(126,`th`,15),Sk(127,`Descrição`),Kg()(),Qc(128,`tr`,8)(129,`td`,16),Sk(130,` notification`),Kg(),Qc(131,`td`,17)(132,`code`,18),Sk(133,` PoNotification `),Kg(),Qc(134,`code`,19),Sk(135,` string `),Kg()(),Qc(136,`td`,12)(137,`p`),Sk(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Kg()()()(),vu(139,`br`),Qc(140,`table`,22)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),Sk(146,` information `),Kg()()()()(),Qc(147,`tr`,12)(148,`td`,12)(149,`p`),Sk(150,`Emite uma notificação de informação.`),Kg()()()(),Qc(151,`h5`)(152,`b`),Sk(153,`Parâmetros`),Kg()(),Qc(154,`table`,13)(155,`tr`,14)(156,`th`,15),Sk(157,`Nome`),Kg(),Qc(158,`th`,15),Sk(159,`Tipo`),Kg(),Qc(160,`th`,15),Sk(161,`Descrição`),Kg()(),Qc(162,`tr`,8)(163,`td`,16),Sk(164,` notification`),Kg(),Qc(165,`td`,17)(166,`code`,18),Sk(167,` PoNotification `),Kg(),Qc(168,`code`,19),Sk(169,` string `),Kg()(),Qc(170,`td`,12)(171,`p`),Sk(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Kg()()()(),vu(173,`br`),Qc(174,`table`,23)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),Sk(180,` setDefaultDuration `),Kg()()()()(),Qc(181,`tr`,12)(182,`td`,12)(183,`p`),Sk(184,`Define em milissegundos a duração padrão para as notificações.`),Kg(),Qc(185,`blockquote`)(186,`p`),Sk(187,`Padrão 9 segundos.`),Kg()()()()(),Qc(188,`h5`)(189,`b`),Sk(190,`Parâmetros`),Kg()(),Qc(191,`table`,13)(192,`tr`,14)(193,`th`,15),Sk(194,`Nome`),Kg(),Qc(195,`th`,15),Sk(196,`Tipo`),Kg(),Qc(197,`th`,15),Sk(198,`Descrição`),Kg()(),Qc(199,`tr`,8)(200,`td`,16),Sk(201,` defaultDuration`),Kg(),Qc(202,`td`,17)(203,`code`,24),Sk(204,` number `),Kg()(),Qc(205,`td`,12)(206,`p`),Sk(207,`Duração em milisegundos`),Kg()()()(),vu(208,`br`),Qc(209,`h3`),Sk(210,`Interfaces`),Kg(),Qc(211,`h4`,25)(212,`code`,5),Sk(213,`PoNotification`),Kg()(),Qc(214,`div`,2)(215,`p`),Sk(216,`Interface para uso do serviço PoNotification.`),Kg()(),Qc(217,`h4`,6),Sk(218,`Propriedades`),Kg(),Qc(219,`table`,13)(220,`tr`,14)(221,`th`,15),Sk(222,`Nome`),Kg(),Qc(223,`th`,15),Sk(224,`Tipo`),Kg(),Qc(225,`th`,15),Sk(226,`Descrição`),Kg()(),Qc(227,`tr`,26)(228,`td`,16)(229,`div`,10)(230,`span`,11),Sk(231,` action`),vu(232,`br`),Kg()()(),Qc(233,`td`,17)(234,`code`,27),Sk(235,`Function`),Kg()(),Qc(236,`td`,12)(237,`em`)(238,`strong`),Sk(239,`(opcional)`),Kg()(),Qc(240,`p`),Sk(241,`Ação para a notificação.`),Kg(),Qc(242,`p`),Sk(243,`Ao utilizar esta propriedade em conjunto com a `),Qc(244,`code`),Sk(245,`actionLabel`),Kg(),Sk(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),Kg(),Qc(247,`p`),Sk(248,`Caso não informar a propriedade `),Qc(249,`code`),Sk(250,`actionLabel`),Kg(),Sk(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),Kg()()(),Qc(252,`tr`,28)(253,`td`,16)(254,`div`,10)(255,`span`,11),Sk(256,` actionLabel`),vu(257,`br`),Kg()()(),Qc(258,`td`,17)(259,`code`,19),Sk(260,`string`),Kg()(),Qc(261,`td`,12)(262,`em`)(263,`strong`),Sk(264,`(opcional)`),Kg()(),Qc(265,`p`),Sk(266,`Label do botão quando houver uma ação definida.`),Kg()()(),Qc(267,`tr`,29)(268,`td`,16)(269,`div`,10)(270,`span`,11),Sk(271,` duration`),vu(272,`br`),Kg()()(),Qc(273,`td`,17)(274,`code`,30),Sk(275,`number`),Kg()(),Qc(276,`td`,12)(277,`em`)(278,`strong`),Sk(279,`(opcional)`),Kg()(),Qc(280,`p`),Sk(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),Kg(),Qc(282,`blockquote`)(283,`p`),Sk(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),Qc(285,`code`),Sk(286,`erro`),Kg(),Sk(287,`, a propriedade será ignorada.`),Kg()()()(),Qc(288,`tr`,31)(289,`td`,16)(290,`div`,10)(291,`span`,11),Sk(292,` message`),vu(293,`br`),Kg()()(),Qc(294,`td`,17)(295,`code`,19),Sk(296,`string`),Kg()(),Qc(297,`td`,12)(298,`p`),Sk(299,`Mensagem a ser exibida na notificação.`),Kg()()(),Qc(300,`tr`,32)(301,`td`,16)(302,`div`,10)(303,`span`,11),Sk(304,` mode`),vu(305,`br`),Kg()()(),Qc(306,`td`,17)(307,`code`,33),Sk(308,`PoToasterMode`),Kg()(),Qc(309,`td`,12)(310,`em`)(311,`strong`),Sk(312,`(opcional)`),Kg()(),Qc(313,`p`),Sk(314,`Define o Modo/Tipo do Toaster.`),Kg()()(),Qc(315,`tr`,34)(316,`td`,16)(317,`div`,10)(318,`span`,11),Sk(319,` orientation`),vu(320,`br`),Kg()()(),Qc(321,`td`,17)(322,`code`,35),Sk(323,`PoToasterOrientation`),Kg()(),Qc(324,`td`,12)(325,`em`)(326,`strong`),Sk(327,`(opcional)`),Kg()(),Qc(328,`p`),Sk(329,`Posição da notificação na página que pode ser `),Qc(330,`code`),Sk(331,`Top`),Kg(),Sk(332,` (topo) ou `),Qc(333,`code`),Sk(334,`Bottom`),Kg(),Sk(335,`(rodapé). A posição padrão é `),Qc(336,`code`),Sk(337,`bottom`),Kg(),Sk(338,`.`),Kg()()(),Qc(339,`tr`,36)(340,`td`,16)(341,`div`,10)(342,`span`,11),Sk(343,` showClose`),vu(344,`br`),Kg()()(),Qc(345,`td`,17)(346,`code`,37),Sk(347,`boolean`),Kg()(),Qc(348,`td`,12)(349,`em`)(350,`strong`),Sk(351,`(opcional)`),Kg()(),Qc(352,`p`),Sk(353,`Exibe o botão de fechar a notificação.`),Kg(),Qc(354,`blockquote`)(355,`p`),Sk(356,`Caso a notificação seja do modo `),Qc(357,`code`),Sk(358,`default`),Kg(),Sk(359,`, a propriedade será ignorada.`),Kg()()()(),Qc(360,`tr`,38)(361,`td`,16)(362,`div`,10)(363,`span`,11),Sk(364,` sizeActions`),vu(365,`br`),Kg()()(),Qc(366,`td`,17)(367,`code`,19),Sk(368,`string`),Kg()(),Qc(369,`td`,12)(370,`em`)(371,`strong`),Sk(372,`(opcional)`),Kg()(),Qc(373,`p`),Sk(374,`Define o tamanho das ações:`),Kg(),Qc(375,`ul`)(376,`li`)(377,`code`),Sk(378,`small`),Kg(),Sk(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),Kg(),Qc(380,`li`)(381,`code`),Sk(382,`medium`),Kg(),Sk(383,`: aplica a medida medium de cada ação.`),Kg()(),Qc(384,`blockquote`)(385,`p`),Sk(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(387,`code`),Sk(388,`medium`),Kg(),Sk(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(390,`a`,39),Sk(391,`po-theme`),Kg(),Sk(392,`.`),Kg()()()(),Qc(393,`tr`,40)(394,`td`,16)(395,`div`,10)(396,`span`,11),Sk(397,` supportMessage`),vu(398,`br`),Kg()()(),Qc(399,`td`,17)(400,`code`,19),Sk(401,`string`),Kg()(),Qc(402,`td`,12)(403,`em`)(404,`strong`),Sk(405,`(opcional)`),Kg()(),Qc(406,`p`),Sk(407,`Mensagem de suporte a ser exibida na notificação.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return n})();function Ae(n,ze){if(n&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-notification-basic-view`)(2,`sample-po-notification-labs-view`)(3,`sample-po-notification-sales-view`),Kg()}if(n&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Notification`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ae,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-notification-doc`),Kg()()()),a&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,Ce,Pe,Ne,_e],encapsulation:2,changeDetection:1})}return n})()}];var xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(Fe),GV]})}return n})();var gt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,xe]})}return n})();export{gt as DocPoNotificationModule};