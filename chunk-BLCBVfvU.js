import{$ as R4,$n as Ak,Aa as qk,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Hr as Me,Ia as sk,In as w4,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Qi as gF,Ri as Zg,Rr as Kb,Sn as q4,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,b as Eo,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,or as Bk,q as Or,qi as de,qr as NZ,rn as ia,tt as Ru,va as nk,vn as oi,xi as VO,ya as nm,yi as U_,zr as Kk}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var he=(()=>{class n{poNotification;constructor(l){this.poNotification=l}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(a,o){a&1&&(Jc(0,`po-button`,0),vt(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),Zg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Notification Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-notification-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return n})();var Ee=(()=>{class n{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Or.Top},{label:`Bottom`,value:Or.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Eo.Success},{label:`Error`,value:Eo.Error},{label:`Warning`,value:Eo.Warning},{label:`Information`,value:Eo.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Eo.Success:this.poNotification.success(l);break;case Eo.Error:this.poNotification.error(l);break;case Eo.Warning:this.poNotification.warning(l);break;case Eo.Information:this.poNotification.information(l);break;default:this.poNotification.success(l)}}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-labs`]],viewQuery:function(a,o){if(a&1&&Cu(ia,7),a&2){let c;No(c=xo())&&(o.poModal=c.first)}},standalone:!1,features:[Me([Ru])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,o){if(a&1){let c=ZO();Jc(0,`po-button`,1),vt(`p-click`,function(){return o.showNotification()}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.type,r)||(o.type=r),H_(r)}),Zg(),Jc(6,`po-radio-group`,4),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.orientation,r)||(o.orientation=r),H_(r)}),Zg(),Jc(7,`po-input`,5),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.message,r)||(o.message=r),H_(r)}),Zg(),Jc(8,`po-number`,6),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.duration,r)||(o.duration=r),H_(r)}),Zg(),Jc(9,`po-switch`,7),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.action,r)||(o.action=r),H_(r)}),Zg(),Jc(10,`po-input`,8),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.actionLabel,r)||(o.actionLabel=r),H_(r)}),Zg(),Jc(11,`po-radio-group`,9),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.sizeActions,r)||(o.sizeActions=r),H_(r)}),Zg(),Jc(12,`div`,2)(13,`po-button`,10),vt(`p-click`,function(){return o.restore()}),Zg()()()(),Jc(14,`po-modal`,11),Tk(15,` Notification Action `),Zg()}a&2&&(Ig(5),Yb(`ngModel`,o.type),Rb(`p-options`,o.typeOptions),Y0(),Ig(),Yb(`ngModel`,o.orientation),Rb(`p-options`,o.orientationOptions),Y0(),Ig(),Yb(`ngModel`,o.message),Y0(),Ig(),Yb(`ngModel`,o.duration),Y0(),Ig(),Yb(`ngModel`,o.action),Y0(),Ig(),Yb(`ngModel`,o.actionLabel),Y0(),Ig(),Yb(`ngModel`,o.sizeActions),Rb(`p-options`,o.sizeActionsOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,Goe,Zte,R4,ia],encapsulation:2,changeDetection:1})}return n})();var ke=n=>({"docs-sample-code-tabs":n});var Se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Notification Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-notification-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return n})();var Ce=(()=>{class n{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(a=>a.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(a=>a.id===this.product);if(l>=0){let a=this.productDetailsList[l];this.price=a.price,this.stock=a.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,a){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-a}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(a){return new(a||n)(I(Ru))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[Me([Ru])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(a,o){if(a&1){let c=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.product,r)||(o.product=r),H_(r)}),vt(`p-change`,function(){return o.checkProduct()}),Zg(),Jc(4,`po-number`,3),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.quantity,r)||(o.quantity=r),H_(r)}),vt(`p-change`,function(){return o.checkQuantity()}),Zg(),Jc(5,`po-number`,4),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.price,r)||(o.price=r),H_(r)}),Zg(),Jc(6,`po-number`,5),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.stock,r)||(o.stock=r),H_(r)}),Zg(),Jc(7,`po-number`,6),W0(),Kb(`ngModelChange`,function(r){return U_(c),Ak(o.totalPrice,r)||(o.totalPrice=r),H_(r)}),Zg()(),Jc(8,`div`,1)(9,`po-button`,7),vt(`p-click`,function(){return o.addCart()}),Zg()()(),_u(10,`po-divider`)(11,`po-table`,8),Jc(12,`div`,1)(13,`div`,9)(14,`span`,10),Tk(15),qk(16,`currency`),Zg()()()}if(a&2){let c=sk(1);Ig(3),Yb(`ngModel`,o.product),Rb(`p-options`,o.productOptions),Y0(),Ig(),Yb(`ngModel`,o.quantity),Rb(`p-max`,o.stock),Y0(),Ig(),Yb(`ngModel`,o.price),Y0(),Ig(),Yb(`ngModel`,o.stock),Y0(),Ig(),Yb(`ngModel`,o.totalPrice),Y0(),Ig(2),Rb(`p-disabled`,c.form.invalid||o.stock===0),Ig(2),Rb(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),Ig(4),nm(`Total: R`,Kk(16,12,o.totalPriceSum),` `)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,w4,Goe,q4,gF],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n});var ye=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Notification - Sales`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #f="ngForm">
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
    <span class="po-pull-right po-font-subtitle">Total: R{ { totalPriceSum | currency }} </span>
  </div>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-notification-sales`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Oe,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return n})();var Pe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Services`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoNotificationService`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),Zg(),Jc(13,`ul`)(14,`li`),Tk(15,`success,`),Zg(),Jc(16,`li`),Tk(17,`warning,`),Zg(),Jc(18,`li`),Tk(19,`error,`),Zg(),Jc(20,`li`),Tk(21,`information.`),Zg()(),Jc(22,`p`),Tk(23,`Cada um destes métodos recebe como parâmetro o objeto `),Jc(24,`code`),Tk(25,`PoNotification`),Zg(),Tk(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),Zg(),Jc(27,`p`),Tk(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),Zg(),Jc(29,`p`),Tk(30,`Notificações com ação ou notificações de `),Jc(31,`code`),Tk(32,`erro`),Zg(),Tk(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),Zg(),Jc(34,`p`),Tk(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),Zg()(),Jc(36,`h3`,6),Tk(37,`Métodos`),Zg(),Jc(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),Tk(44,` success `),Zg()()()()(),Jc(45,`tr`,12)(46,`td`,12)(47,`p`),Tk(48,`Emite uma notificação de sucesso.`),Zg()()()(),Jc(49,`h5`)(50,`b`),Tk(51,`Parâmetros`),Zg()(),Jc(52,`table`,13)(53,`tr`,14)(54,`th`,15),Tk(55,`Nome`),Zg(),Jc(56,`th`,15),Tk(57,`Tipo`),Zg(),Jc(58,`th`,15),Tk(59,`Descrição`),Zg()(),Jc(60,`tr`,8)(61,`td`,16),Tk(62,` notification`),Zg(),Jc(63,`td`,17)(64,`code`,18),Tk(65,` PoNotification `),Zg(),Jc(66,`code`,19),Tk(67,` string `),Zg()(),Jc(68,`td`,12)(69,`p`),Tk(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),Zg()()()(),_u(71,`br`),Jc(72,`table`,7)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),Tk(78,` warning `),Zg()()()()(),Jc(79,`tr`,12)(80,`td`,12)(81,`p`),Tk(82,`Emite uma notificação de atenção.`),Zg()()()(),Jc(83,`h5`)(84,`b`),Tk(85,`Parâmetros`),Zg()(),Jc(86,`table`,13)(87,`tr`,14)(88,`th`,15),Tk(89,`Nome`),Zg(),Jc(90,`th`,15),Tk(91,`Tipo`),Zg(),Jc(92,`th`,15),Tk(93,`Descrição`),Zg()(),Jc(94,`tr`,8)(95,`td`,16),Tk(96,` notification`),Zg(),Jc(97,`td`,17)(98,`code`,18),Tk(99,` PoNotification `),Zg(),Jc(100,`code`,19),Tk(101,` string `),Zg()(),Jc(102,`td`,12)(103,`p`),Tk(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Zg()()()(),_u(105,`br`),Jc(106,`table`,7)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),Tk(112,` error `),Zg()()()()(),Jc(113,`tr`,12)(114,`td`,12)(115,`p`),Tk(116,`Emite uma notificação de erro.`),Zg()()()(),Jc(117,`h5`)(118,`b`),Tk(119,`Parâmetros`),Zg()(),Jc(120,`table`,13)(121,`tr`,14)(122,`th`,15),Tk(123,`Nome`),Zg(),Jc(124,`th`,15),Tk(125,`Tipo`),Zg(),Jc(126,`th`,15),Tk(127,`Descrição`),Zg()(),Jc(128,`tr`,8)(129,`td`,16),Tk(130,` notification`),Zg(),Jc(131,`td`,17)(132,`code`,18),Tk(133,` PoNotification `),Zg(),Jc(134,`code`,19),Tk(135,` string `),Zg()(),Jc(136,`td`,12)(137,`p`),Tk(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Zg()()()(),_u(139,`br`),Jc(140,`table`,7)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),Tk(146,` information `),Zg()()()()(),Jc(147,`tr`,12)(148,`td`,12)(149,`p`),Tk(150,`Emite uma notificação de informação.`),Zg()()()(),Jc(151,`h5`)(152,`b`),Tk(153,`Parâmetros`),Zg()(),Jc(154,`table`,13)(155,`tr`,14)(156,`th`,15),Tk(157,`Nome`),Zg(),Jc(158,`th`,15),Tk(159,`Tipo`),Zg(),Jc(160,`th`,15),Tk(161,`Descrição`),Zg()(),Jc(162,`tr`,8)(163,`td`,16),Tk(164,` notification`),Zg(),Jc(165,`td`,17)(166,`code`,18),Tk(167,` PoNotification `),Zg(),Jc(168,`code`,19),Tk(169,` string `),Zg()(),Jc(170,`td`,12)(171,`p`),Tk(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),Zg()()()(),_u(173,`br`),Jc(174,`table`,7)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),Tk(180,` setDefaultDuration `),Zg()()()()(),Jc(181,`tr`,12)(182,`td`,12)(183,`p`),Tk(184,`Define em milissegundos a duração padrão para as notificações.`),Zg(),Jc(185,`blockquote`)(186,`p`),Tk(187,`Padrão 9 segundos.`),Zg()()()()(),Jc(188,`h5`)(189,`b`),Tk(190,`Parâmetros`),Zg()(),Jc(191,`table`,13)(192,`tr`,14)(193,`th`,15),Tk(194,`Nome`),Zg(),Jc(195,`th`,15),Tk(196,`Tipo`),Zg(),Jc(197,`th`,15),Tk(198,`Descrição`),Zg()(),Jc(199,`tr`,8)(200,`td`,16),Tk(201,` defaultDuration`),Zg(),Jc(202,`td`,17)(203,`code`,20),Tk(204,` number `),Zg()(),Jc(205,`td`,12)(206,`p`),Tk(207,`Duração em milisegundos`),Zg()()()(),_u(208,`br`),Jc(209,`h3`),Tk(210,`Interfaces`),Zg(),Jc(211,`h4`,21)(212,`code`,5),Tk(213,`PoNotification`),Zg()(),Jc(214,`div`,2)(215,`p`),Tk(216,`Interface para uso do serviço PoNotification.`),Zg()(),Jc(217,`h4`,6),Tk(218,`Propriedades`),Zg(),Jc(219,`table`,13)(220,`tr`,14)(221,`th`,15),Tk(222,`Nome`),Zg(),Jc(223,`th`,15),Tk(224,`Tipo`),Zg(),Jc(225,`th`,15),Tk(226,`Descrição`),Zg()(),Jc(227,`tr`,8)(228,`td`,16)(229,`div`,10)(230,`span`,11),Tk(231,` action`),_u(232,`br`),Zg()()(),Jc(233,`td`,17)(234,`code`,22),Tk(235,`Function`),Zg()(),Jc(236,`td`,12)(237,`em`)(238,`strong`),Tk(239,`(opcional)`),Zg()(),Jc(240,`p`),Tk(241,`Ação para a notificação.`),Zg(),Jc(242,`p`),Tk(243,`Ao utilizar esta propriedade em conjunto com a `),Jc(244,`code`),Tk(245,`actionLabel`),Zg(),Tk(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),Zg(),Jc(247,`p`),Tk(248,`Caso não informar a propriedade `),Jc(249,`code`),Tk(250,`actionLabel`),Zg(),Tk(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),Zg()()(),Jc(252,`tr`,8)(253,`td`,16)(254,`div`,10)(255,`span`,11),Tk(256,` actionLabel`),_u(257,`br`),Zg()()(),Jc(258,`td`,17)(259,`code`,19),Tk(260,`string`),Zg()(),Jc(261,`td`,12)(262,`em`)(263,`strong`),Tk(264,`(opcional)`),Zg()(),Jc(265,`p`),Tk(266,`Label do botão quando houver uma ação definida.`),Zg()()(),Jc(267,`tr`,8)(268,`td`,16)(269,`div`,10)(270,`span`,11),Tk(271,` duration`),_u(272,`br`),Zg()()(),Jc(273,`td`,17)(274,`code`,23),Tk(275,`number`),Zg()(),Jc(276,`td`,12)(277,`em`)(278,`strong`),Tk(279,`(opcional)`),Zg()(),Jc(280,`p`),Tk(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),Zg(),Jc(282,`blockquote`)(283,`p`),Tk(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),Jc(285,`code`),Tk(286,`erro`),Zg(),Tk(287,`, a propriedade será ignorada.`),Zg()()()(),Jc(288,`tr`,8)(289,`td`,16)(290,`div`,10)(291,`span`,11),Tk(292,` message`),_u(293,`br`),Zg()()(),Jc(294,`td`,17)(295,`code`,19),Tk(296,`string`),Zg()(),Jc(297,`td`,12)(298,`p`),Tk(299,`Mensagem a ser exibida na notificação.`),Zg()()(),Jc(300,`tr`,8)(301,`td`,16)(302,`div`,10)(303,`span`,11),Tk(304,` mode`),_u(305,`br`),Zg()()(),Jc(306,`td`,17)(307,`code`,24),Tk(308,`PoToasterMode`),Zg()(),Jc(309,`td`,12)(310,`em`)(311,`strong`),Tk(312,`(opcional)`),Zg()(),Jc(313,`p`),Tk(314,`Define o Modo/Tipo do Toaster.`),Zg()()(),Jc(315,`tr`,8)(316,`td`,16)(317,`div`,10)(318,`span`,11),Tk(319,` orientation`),_u(320,`br`),Zg()()(),Jc(321,`td`,17)(322,`code`,25),Tk(323,`PoToasterOrientation`),Zg()(),Jc(324,`td`,12)(325,`em`)(326,`strong`),Tk(327,`(opcional)`),Zg()(),Jc(328,`p`),Tk(329,`Posição da notificação na página que pode ser `),Jc(330,`code`),Tk(331,`Top`),Zg(),Tk(332,` (topo) ou `),Jc(333,`code`),Tk(334,`Bottom`),Zg(),Tk(335,`(rodapé). A posição padrão é `),Jc(336,`code`),Tk(337,`bottom`),Zg(),Tk(338,`.`),Zg()()(),Jc(339,`tr`,8)(340,`td`,16)(341,`div`,10)(342,`span`,11),Tk(343,` showClose`),_u(344,`br`),Zg()()(),Jc(345,`td`,17)(346,`code`,26),Tk(347,`boolean`),Zg()(),Jc(348,`td`,12)(349,`em`)(350,`strong`),Tk(351,`(opcional)`),Zg()(),Jc(352,`p`),Tk(353,`Exibe o botão de fechar a notificação.`),Zg(),Jc(354,`blockquote`)(355,`p`),Tk(356,`Caso a notificação seja do modo `),Jc(357,`code`),Tk(358,`default`),Zg(),Tk(359,`, a propriedade será ignorada.`),Zg()()()(),Jc(360,`tr`,8)(361,`td`,16)(362,`div`,10)(363,`span`,11),Tk(364,` sizeActions`),_u(365,`br`),Zg()()(),Jc(366,`td`,17)(367,`code`,19),Tk(368,`string`),Zg()(),Jc(369,`td`,12)(370,`em`)(371,`strong`),Tk(372,`(opcional)`),Zg()(),Jc(373,`p`),Tk(374,`Define o tamanho das ações:`),Zg(),Jc(375,`ul`)(376,`li`)(377,`code`),Tk(378,`small`),Zg(),Tk(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),Zg(),Jc(380,`li`)(381,`code`),Tk(382,`medium`),Zg(),Tk(383,`: aplica a medida medium de cada ação.`),Zg()(),Jc(384,`blockquote`)(385,`p`),Tk(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(387,`code`),Tk(388,`medium`),Zg(),Tk(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(390,`a`,27),Tk(391,`po-theme`),Zg(),Tk(392,`.`),Zg()()()(),Jc(393,`tr`,8)(394,`td`,16)(395,`div`,10)(396,`span`,11),Tk(397,` supportMessage`),_u(398,`br`),Zg()()(),Jc(399,`td`,17)(400,`code`,19),Tk(401,`string`),Zg()(),Jc(402,`td`,12)(403,`em`)(404,`strong`),Tk(405,`(opcional)`),Zg()(),Jc(406,`p`),Tk(407,`Mensagem de suporte a ser exibida na notificação.`),Zg()()()()())},encapsulation:2,changeDetection:1})}return n})();function Ie(n,We){if(n&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-notification-basic-view`)(2,`sample-po-notification-labs-view`)(3,`sample-po-notification-sales-view`),Zg()}if(n&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Notification`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ie,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-notification-doc`),Zg()()()),a&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,Se,ye,Pe],encapsulation:2,changeDetection:1})}return n})()}];var Ne=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[WV.forChild(Ve),WV]})}return n})();var ct=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,Ne]})}return n})();export{ct as DocPoNotificationModule};